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
    "5Wc9v2fxSbSd7fSpBhcA6MzVubENDeRa9QqX5NYTHuqkQyC7BMfTZBkzyAysByA5ReeTRUfvLDSTpgyE92HPYYZq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41qyRjDbYwzX9BE2QsF5FcDMroFML1nsfB5MNJXKe9hG6fdpJxAYZ9fpTN9UyvwhJJHSSFt4z34UbvY6yizj3Fx5",
  "key1": "5uh3DX5rzhajppxVtdeCP7CD3KmX7RQQKXZjHgm6Exuhg2MoWgQForYyx2J9T74htsdQ7HZ4RhsyrWPm2kVna1H3",
  "key2": "uuds8Ae3bAiN8vWVvtojcpnf1EXVa7c32pG3X9cm2Vw2Le1yPZMsDtsanzU7ioNavxGuLHuX1SXjtsSZphEEm5B",
  "key3": "XLZgL9MdmdoU1kopSqgCGfUsdYvSzwNZwE5R6vvWKDeTy5YRnzcFsoF6gmZmHqvw6Ut3xccJVHZ3JL73pYEedhK",
  "key4": "2CiRzoPwSB2N61UnNdKLskTTZcU8fXGiN1ofM5G6dMT4RPXbxp2E7d2ySuNR3WjLaiSFqnsZa3tPALp8SHLTrKj6",
  "key5": "5XdJmNdAxCkRrTVhMoJqn8Dm9PagywnRsQiCoffW6jwtMRTgkS75auaQT5UfdyPAp3uvbr1QtmTq2L5nxw6MUvKC",
  "key6": "LJwUn7o1hAAVcYrUdrTa1hQjqEq6AHirXEdx273jV5X55QZikn6Ja5vGNsPpoecNybzojfXaMKeTZz7pPa5nFrb",
  "key7": "3aYWhe5hR4XxGpV9RVTkLaDNpgEypVjGv4owws295pxejBv2Vx11EqwgB3wVbmcKB3FQaiVSiwPnYrNBiXfZcZhx",
  "key8": "3voAjRBqcZGHC9ZdcZNVWS9yyQ5VL541CZ9rDNLYQCkCEv1kLBZMBBWzmSWMz8VDHA3LZ13Q5K45yfpPMA5dZp4Y",
  "key9": "5zpsxHhYAJnGb77PvgxHxv832ryAJksF8ZageoSZQpRzopG6SvutYHPusgrKqvE5vnTE8nKVpCoiaC4SczZQ3XFJ",
  "key10": "Bk8XWThDZLyUT4Mm1njY9XjUKD7NcVVT9n4dCWGGYcW4WagBfmgERKdwaV6nNXRtDauhqPdKiBrsfYywxurNeDu",
  "key11": "4QKKZbpbjhxAjbLSGqRoAGPCQKwYoXjxpw3rYnFuBvDh7538T8h2V3PwqEHxfSfHyvku3tDDdbZLohmXhFSuKuk7",
  "key12": "JkaMWoPirymDLgqMD1wCFM5M1cz31gXTWGXAFzWFcRkGow3y8KF25ap4xsYFshL6imKLbsQhDo6XmKbb3C5gDw5",
  "key13": "4UNw4emqaxnTKzzbbowP1rk75XL5TPF7SqyXbZtCcHA89zscbuHkUx66D48iBRM5Ec9geZZXMi7Cr3VMVDzyLcgW",
  "key14": "46s57fVN6a2uzvy28ef9BZXKmUN47Q4SxFipAhcTzXMjfB8erAXS3wyKSBFMVeWBwdNzsD9bpNmG5pneBNGr4e8m",
  "key15": "emkgDCizb6ZALfoQivjxqE6qxBxifiXJjKRpEfE3airKPca5FMQ26Dv8ReocGDtbvM5tWpss7zi3TK8bzHBr9Bv",
  "key16": "62Bzm96B6MvyG2rqj8xnDBhxvToxXm22kyujt8r5Fa8dcBfUV4WRDiWNTq3tK9pSwyLGfxm6U26TizExUNMcfM4r",
  "key17": "WfFUAniyP984rr9SrTfeFX4sqjqKMt7Da1jLdzLf4VSH6FY9uSXMwW3NEJPeddpMT6rEBSB3ycdLBHcmDCiw37Z",
  "key18": "5DMD9E9LgdXsar8LZQ2v63TYPzG69sGbmpkzFcaowvJkGfKKsJuj2T5xuGftfEoC5Vqi3jqBynTWE52PE1pKDyEa",
  "key19": "4ZyWaJ5Ym46JcNoZCBSBqoxZJsN1BRENwyDZpWwn6egWA97K6wpWAviK3fX9w19wRfc1bPwQL2WAxEYE3RH7u4Fa",
  "key20": "2s4cHerU1SfHS2wMMFQtf6mqpoPnSn57iowbpGTcJiFq57qPsv7yxq4Q1RKEWMpQpREd5UNcNh7APYHG7FDYUC5i",
  "key21": "3k2cA21G4mw7tJLMU4aF38dAdoc1DjtiWcEfB4QXHGGy99steVNpxZsdwmA79T1fa8KRbrH9myibTKtot8bjh2V3",
  "key22": "2iTbcjgts2ciJM9JRfxEiNkU1qKYkQ2pArksJQuHRMjBnmgLQNzovYGcTs2K75D2ucZuxcL2zoMgLgj8MGfwoqp7",
  "key23": "cdCLJHFxGdRhmNwS1YmJbHH3QmyQkjDZY12H5wKjFYcKppAmRCXa2HZfs5jA7t65Sp9i9NhJYHmubhHb5EHVm1M",
  "key24": "4qqDZ4bcZ5ZyhXawCfMddUZGboAanAPz1YVicpcmDL4eAwZA9XYgAgoLUe2frCisn6hng1tGXE1cZaxQaVgZGC2e",
  "key25": "2o88qEBiTtQhKa9cMvbNgrocKhDdTz7fVdg7hSwMApe6HiwHdDtkjYJVwNZJsMJDpia9g7AdpxDRTG7HLM1wwWxx",
  "key26": "3jQyFZsTvp2NEvhTovXdgiVxdVgXgpAMi2fNaDvbiiowHGGfYmbrxx4o3DwYqbcyepLtAVRmSEVSKrBgMpLT6mPf",
  "key27": "sAeMPPGpqKF4FfXSTZHxWKfktd4ZziqQaZ351cffMubBc9P7FgETazZUgNfEDeLXdXsN4tHFJsM7e4iXC1c2XHC",
  "key28": "4FYF72b5DtnF11rjsaAuP6vYxhW2SgRQvsFBcw3BP6uE685RCQ4WVv2JScPKRxYCZ5XPwiT8Du2M2CSH7u6FkXSx",
  "key29": "2jikS6UQ65w2mYL5cS5W9a3duM2ZS6omQs5aTtT8VwGDhtBzr2BSmpAvGdJmvff9hJfi42CNUhdkvjDATnUuUjnh",
  "key30": "2XSLnjgD5acaHanJovHid2J3VgWf5rCMszSvQVwjhUBgNgs7KpdtWi9EnD7UrZvQ572jLwGDTcGiwfSrovGLXBJ6",
  "key31": "47Zw25ji3aYMS9fdrB3iRT36s8NqR1qKvEVKKbskce9wBH9p3hKGFkCuVPCdocurTAV5gwSUYgadK6wDdnNHPv9b",
  "key32": "fnb8TL6Qi3HdbQ9MPcDPS17bWMgWWg8uBwAHLWArMFhFVGcKFa3gDR4KcCmamHVUcmMfAWDFe4ASYpPaCwvjR3U",
  "key33": "3Pg7TjWECiHSQcnG6bLEUVD828GAmgGkNReHEpgaQWNtaSF3Pb5ZrBufbdaZjFKvgMbyHHhVofwQ6TBEezRdxkkg",
  "key34": "2nDsELC2LbGrZ437z6VtnDiPPQzwHbtTP4F8XRovETU4pGWkwi2kKcRo674ECiBkGMftt4yKc2a1GtUmZJX2Ju88",
  "key35": "3msr6iVFtNVZ49gNjMkQJrZ91fRNEEKu9D8EMiz5bCA6ydw6an6sXuSiDod22Q4GCkg4tmAkP9isCv4kdUkMHXiL"
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
