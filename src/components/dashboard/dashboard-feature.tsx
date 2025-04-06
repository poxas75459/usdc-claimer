/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "2ng8M8fhBEf97mFM3uwZG9pFtF7MpFsPmVCyHJkS7LuX6NmaqjHnmv2kEJr7oDb2jC6d1L5csxBLPMhjEzxGKfzE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DTxzNdseVdD97uT4ABf63nhNdLj1bJgbfhvBoEn7VooJamR1P7EfoxakYJDZD6YkCrjqt7rFPAAUxauTsHMxnzh",
  "key1": "4KmbvPNFXu2QVNyBeKM7PBcKZ5ZmkY54s27Mfuf2AQ7RjL4oX9WERbAyeYLYfv2kxa5XMirsjxzFcCWDoexBHc77",
  "key2": "4wDCq3gxCcwZWkaHnvPM8seXtStX2kW3GgnALQJ5kgCMwyHZKd4xSy5cMJ3FJgER8ock4MFX7vchdLfja2FdtwSN",
  "key3": "S7f3CHC8yWChP3bHjuAhTaeiWznWqEsig2hyiE3qmLYxoHN3KQxirnJ2C79rtJuAtonRkV1fvqvKi2CC9PGPv6X",
  "key4": "2RKPrmVcdpQG3UsNU7Gq4LGawxvS1E8mxADkziUiavoMmH5uqTJj47o2GA8V3DNyDE8KvqoXEpHZVP7GBciuRkVz",
  "key5": "3mtRmm3xaF5a2G7LEAJY9XDWBW8Wjoj9FK5wK8QqFjynQUzNC8iJU4TbgxBV78YPB4nNkvtD5BgPkd2zZfsWV2Zc",
  "key6": "NSccuvWeKLQa9SKtNAWBikAUergMnCBRf2hBy5SwraeCQiDMqNR7oiVrcArTFnJdDVGwVU8KLGkUy1e1j11ycTM",
  "key7": "5tfDCM45xoAJJ1mjeeg4ydjHWCbskmHYwXbsW1egBUgs7Er3bXhx9b6xMpi8HvxEvxHVqnjwsN9fYaUBeiUKDs3V",
  "key8": "3C1CQZZMfQ84UdPgtbYtbHPeQwF9HRaqVEH7RsVwvFNY7SrhgeXnUz97CvSuGtUm2DC8M7YYQvYiNCVgGuLvC5yK",
  "key9": "5PHjDkgiZdHVcEemYXM6cnpseUrsSXpq1TVNpKjkh5tbkiqrfqwFmTGXuQ1PbvEhNRk5vheyRnpiP59vBvVjMaFe",
  "key10": "4enMa8KKrJfpTj9m6R9wnN4NJxjtpriLBwRwK971kDAR1yhhVG14yEjLec7YEULjxiyPsYD9X1aYekLneasp5zGv",
  "key11": "5JPbehKWZebhSQechLytiN4YKGg82NzWABRYEi611bXEUyqma2DEaYBoAf7wWvwoHJL76BNm5BGgGvLEUF9823So",
  "key12": "3bgHFRsXATJA85MiQX8m3ZCnKLxNWrrACLRC4vK5gXM15g3xyjiaXnS68r3fQur3tkR9nAzvxRgnicgRHvJzX63S",
  "key13": "42TMzvuizG7Dfa3gtCkHrLkNXHB2Vz1B4PzQE3FYcFNgbdvTNMaD2tE9jNWNVZaQz6xfWHzB6RWoSUy4Xw36A7Dv",
  "key14": "2Rio21M4gZZnMtVqXqH9yaKdLN9hgmwhwySVyZmNyuUdRszpBHWoykCHrEzW7RcirDdamWs4t4A2DxuHpihdQHPz",
  "key15": "EoCn9Yv2XRmbZGvWFkkT289DphNoQP5pK2D2i2dH6UUbrcFvdfJyQLcdCqZaehgMnZVT7pjL42BjktmqX8FncGX",
  "key16": "tuxnvyzBRTEvRH9PQW3xkeMjQbrd4zTF2GpxAtQsYLU1wKV7XzMLCVMtHMyTk3AhxVuuU3BZY8574mDD2Rg8ot7",
  "key17": "4HYnCdAsHDor7HZXeaRTns8XCxNJFKhqrXo1nfi5apgSkQ6vrdyCiZHvphSgR6SniX3e2jwmWd8Dkfi9YxUPVowX",
  "key18": "5dNh6HaC6xKcvatj3pHwpbxpTqGutpWVCkqhM5sEMj4fNCG5muq78eoRoAAcSi8CqCqDbrGwjDQoARvFBbuqCCTG",
  "key19": "5tLVL3ziBwafUV1gyQnygJPHvNu7Bm5WXAe4uYYRL24qAsjErV8buMrAdwFBZs4JZBrBKbKmgHxnj1XyRzExUw7r",
  "key20": "2vCq1QtNDniraRnHYkRfX5dvWWcoECJmyzpvB2h3UDgZAuGKHvvaSGYm5PVeyvZKAoa2ASMVCiaeUSoFPuk66dfu",
  "key21": "338Tp1XPgwTWtSTDE4aUeQAxJxxdELbW4cLj9eAL4kSJkd4vKAwJn89qd6CcCVtSWEf9RJKTVJ3ukb1TS99mpdQw",
  "key22": "5oCxi7ciExGwKw5apXJvEAfXJ5RyoK2xkZU7qByJinsxJCYSRVUhJpjFK6B36NkhrY1J9GBLVEeBxVhQrE8Pp6KB",
  "key23": "4LrpfoU4CePMC5PGksJCnSYDdN78SFcMr8RbXXRjBbo1mRg5NE8zvgDVBHGqg1mAuUJPWAHz9gRboijjrPSykhU3",
  "key24": "Lyz8Wrzt5nDkC3oqLDyx8Q7C7k58UVgAhRadFQpM174sLVfkHEHWQvUTi7R2zornfuVUDWnb2TC7KSYnMBiQZsK",
  "key25": "oufefEtRuTkxM7tuV63GSYyx4WNbkRCVuwqYFMthi2anLY15ouLdH9wTHQHF5MZxH2PGL7jRrpKnKbVP4bjxEa9",
  "key26": "5zBfwhr69kXeMPNHzpW64NWAHAmrCdwtLTRMfrctbzNA4Vozz2kC3MYv1wFavdS8V4dw1v8PF5iSV7xskukxrtHA"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
