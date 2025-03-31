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
    "4n9Tc34RDb14KADYy9qKX299epzZtHxPkVv5autGbTKtv8whQf4Ch4w2TMWBuN73EnGRYtGnTX2amjyD1WnNKdLb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61o47kcFcKFBDbJ6FwpNgxq4UjUBBtygjKKfrvfnnVgqwQv2o8xS5BAMCnspYXzwR7JXXGxBaGwZRMXCtY5uYVJ5",
  "key1": "2YBAgJbToG3mtFWxK48LiELtpj3CXUdwhMm4iynHebVa5rzUyZxzZCMjqQHun9DzTiwSyK7okn1kwSzRx3Ynmhin",
  "key2": "23mZagBM6n8R5auBUC9t8DXFAE5YHfYTpGgPEZX71DPWNHH9QnLW4udve1UdnsbJUpFYjxa2KUbmxTbRzimY6WdH",
  "key3": "3tyQujn28Zt1KGdsTKTZUuTzx3YDMTSZZPQf25ZCs95TE8S6UYohA6ydx8PtbK8BNe2Nde85TsnvwZEcKJRHsmnH",
  "key4": "3CbKox8hSJ5PMoFvbk9uBUX6kV8LpX9BrKHmWQqKxGymMeK7QRSn71aWqXdYs7GAqBGZzCh62p5pBw175vyidQFD",
  "key5": "2NJ7ggS7h2KA3HseDPLjh8SV9UoiaDbLePJXXWpEDBzq3C5WpgL4Guzitrp67ebaxYDvR5g5pEwAmMahLuRoqthv",
  "key6": "4iweGQWDtv8e9xyLZbtGdhzSfE3NXnsmNzhHXv5iPDmwVNH4pJLqJz9cTAvaf8uozYq6dGW887UXSPJMBkshEeWQ",
  "key7": "4YVupr2UF3QwguTLcsD3MWaJGy1mZdcCn9A56SeERYLSLASVkFbFGnqucRkY3CRuqqwva81oAUjoP1wvqa1JiPA1",
  "key8": "3VbbKE7hwm439vBRLAgQEDpCyYJpARBeaQXejVwwWJ79MfP9eoFzKLu1dVTrsPsKZ5ZYhgmFBqeN9aYbXbrGpCAo",
  "key9": "574DCdGXxYpCTFu7YXp8S71FCgpkyHLjXt3yfUmtCnLy8mtzVANwqJ7fMmg67mTf86aF1V6MDVtUeG4566YiLy51",
  "key10": "3nq3SVyJMHNPg9S8qAJFK5vHnB44ZKxBzvjFfGHQcEsnXbk8fgW4dchAArLVVGqvptwxARcm6bxNr26RcUZAHife",
  "key11": "5rJckRwSeeZcaWVMChwS47fXRGGV8gjfBLgjbQQ9aVxuDcbnVMm3KWw3jsms5N8Q7HMpjyT5HeXNhEdbmQfDzXe4",
  "key12": "4XDVfjHQ75Q4m7grB2BCaDjdnX5u9TumbQbCezvcj6Mw2SujSJRwJd6X9UpahjTJnMnMrhpGzYo7vLDCnkxftf1w",
  "key13": "cv9J78Mts6xuL55755XqaWinRtPBaK6foPb3UraR5MHW7H7USoXLpvFnYTqH5S7UAAmKGNQCwU5VF24g6nWRnTL",
  "key14": "3i2ZQTiKyunovNpsdkED2DWt3XqSp5dDig64ArPkEVbTBqe7EAzHpv9BgFdLRpwjNE3XwYApgE3nZ6S4Fz4p681o",
  "key15": "2mWrw4B12Gt5rjxHZwJWPmvnCkozPeCp9dvJrTBiVpQpu5ZekN6uBPpzwn5pN4hR74joqXaw6T2HLQ6V84NZNckX",
  "key16": "5aPuWXDokyjCzruCtymH6Le8AnbfF561x1VGu6ZFcy7LMYZp6FYHsTSoKwf1qJ7a6KiJd7YVmYmwdZUYyDBws9mZ",
  "key17": "2kP2DCczZzs7Kr2F4r3PNBNKPCoxxWBxtX1AeDUu1JptgBcgEX9iPiLDC7e77c1FxyL63UnqpndWJCaMJUKdhQD6",
  "key18": "3bKM2vyTdvQycpkL3ruJvjpBVbhMYzvCQqCxdgYKiedV4j7CNsA3oErUG1RHSVrpzqmGDy9oMgDViv1KxropgHec",
  "key19": "3rNwLBu1ZFmyTZcgspFoUEqaUN6pHorJj1fWqb5DYFQRzBQFb4LpC7y3DweeoLRDgnEd1H7iE6JMFZydeoCAR6FB",
  "key20": "4muWbNXq18k669SSzLturSBtRawpdTqpNT4NjJT73rEzS4tHsbi9Xu55n1QQ36zMmwkgLGukt99YkgR5H1PWUHpy",
  "key21": "5qtooVBp5r7hCy6AfCSJ43S1puCbheQMQWCZsW8nRfUwYX7QVYDFb2a5D2d8Aq3JZSG19BHLP7V3oFAFc3qWoxVi",
  "key22": "8KLQfmtVr76otU1Dkx6EHmR7znpTT3U9QZuchS5BDdyWZjSKKMgNWPS8YmbDbqSmqw2upBjD8PtXExzaqgZni7C",
  "key23": "67YPKB5kJYgAyHHejmhWbRdvuHr4SAfvbsRqh8MLnJnQdgZXrK8JPvk4evpSj8W2vEqR719kFouPVrqUEdRYqg6Z",
  "key24": "56ryozUXVojBeneU1uQaPFDERR4EajgW5XiNwvp9MXko9UEyTNPnYo1v5U1jZNK5XnoWKkUkHdb8YikscBreRSdu",
  "key25": "4YejZ31VBn6EUctZSQG2GJXjgU5Uezf18SzfbXDeuuYpaDigsTHMjeXQRhYdUZgebrKftPmQ4o8g2zvu1XaxWKkm",
  "key26": "4twZKdNqE8r5ojoT9TzxeL6huF2TGLLRNoHszJQKL6EZ3yMGoBkSeaNFKSuQPL1zL4AdUgDhqjxMsrLPrZXgayLu",
  "key27": "2Yq7CLoQcy257DasGnAVNC8HKzqkScRcFsaD6drMevXALV4DCxktiD1dvoyCe8GKFWQZHTBW61UFWjUWECP6SiCv",
  "key28": "3kDmZ78LNiLTgNMv1Tw8gJDVHiucKgEPS5jFM4emj9vENYnNA3yBqtpy935cKpzdVnHyzf5SZzHwXSX4SWHgKcfk",
  "key29": "5LoCapn1GVJ1Manvk7ZitBx5f1HnY5n9VMhLkXUZgmH5SiqbWktaGMAgpH7dkrK54ULVjmoj2eFXMekASTRi5yAw"
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
