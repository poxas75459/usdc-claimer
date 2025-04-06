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
    "2e694EarRvq8TBsxmFkenJWE37D24yjk4WzU9PB3sG8HeiC5coDM1YVqwd7696n4maqMoNJwa1ABvxwSLiD6gmfo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hv1tks1hvEFntbhyfU4LUpv9NW9dWGQfwececLxXPhmLzzNXzhaiDFf7hjATaUCDPCukpgDWMDvHDBfV8473bkd",
  "key1": "53JNJHuvw9Ywqs9r66BN8gahF591vpkBVGaDd4jbDSoLCs2ipeq4cjU2ZQ5eWkEB6zR2rBFi3nMNfSzZXEe7YzGh",
  "key2": "3tWHkey1s9D3WvdS6kqXHLS9fxuQjy4mf8QLErDZWErnDoUc6pLzV8t3QNFQBBEkiggJobCtBCptG7fX6ccUJwiE",
  "key3": "qbxqMeRbyPhiqu5LK18Mq1m5kmeX812whU5gfs2Yz2UKNr5iEQX8pRJgmcnyKThfhMQc1HfkPQNJ71k3vvF7JTo",
  "key4": "5NLfCBEpPf98MKx2bW1d2xfiXqT43vRBTAMXXYZELDkKh17UN7N79Qno6Ezb4LMtqwKkVqr9dtGVPp3xcJNeQsA8",
  "key5": "3hPE4pNTx6tLuR3rw7SLeM64CnNTGfj3ckMq7dcDgEDmYzdT7oAUgT3x187JBP7Y5M8KLqzy8deDRDHqaMxBJV9f",
  "key6": "2GnWf8N1zzRaNKtRNEiPuHBcrj2DvicZy5U189DU3pYEvj3AXYNTFbNBkvgAyTUQi8T6MZ71Nn2AVycWZkNsygnR",
  "key7": "tQEpsQcvUgnrXhpEkjxe3NL8G2KWfHZtfAco9grfeCWrxwsJnU3gdHemQevoZxLJ1FJZQN55kEHyqECwDUhbseR",
  "key8": "PTRJvG9UWPwGhDw7nyDQiyvAQW91VAac7T7juGgPT3SCUiTpLE3H7qxLf85ZQwAiZFCcgy6qshm3UwWzh8cvc5V",
  "key9": "2P2ZupvaN1njp1rtvRg8M372NqMGxkifC2J3bVpy9uKhchRpGyNpZYd69x15ZZYu1bEhMwiBJTM1GipSLaHiz4jT",
  "key10": "2Rx6VJJY6c7sDsv2ykJDgLB76EVaNko4oWqoKLhT3t3TTyiJLEtLbKGBepK4PJEnmfR6tXtAdkKPjbcvsTdv81Hy",
  "key11": "2HidLXTKSptBgJAv4buXdFL2vZYJdLFtkCPy6hpo9rCJsCQtXz7eZDVeMG6DMYDuqQkvxVjxHLXqaEHvXQC3CEdU",
  "key12": "2G7yE2BnncTzUM2UzVHsx26aJRoD6QJVdjx3HBjcTKM1BpWYZMi6RNYBxWx9EJdv8izAb8EpZGmJ4hJuSB4Xr5By",
  "key13": "32ibcT7cszTNSmkKB6JxoFnNFWJunj384nTFteeJVXy6Bq3jnLZoNLy2yF1WLwPxmENoUws5qnvyicVNZ4Gjosei",
  "key14": "2Jy6TxePZaN2FwCY1tbFxNVhvAJvgXk3s1yCmXXa3Af3E4joK5vUjaQSWdeByTws2qMqmgdNu8r43vTXL4b8998c",
  "key15": "XsASXdExAKPUrTHDsT1HXWVzKqWtCjem359K1m35P9x2KoYmoJ9UCUKrNPwDhMqETnBe3oXhKpyCkGYaqfFsd7G",
  "key16": "3pcPjiRz5yAvuyvN24WK95okPQBaMiQHsRoS5o8qrAinEn5rKwqvCykwuAb4igaQWva9eXvX54nuQnnYDLNy1Vyn",
  "key17": "NGjj3EVjDYfvTdRbJJZKNi3JVZ4jt7rpQn5Kwv1nLbWr33UtduKh5KP13KvJPgRqJFf7tNVQ6wKAy12Y1UHeDRv",
  "key18": "2BbES8rFyfGJEEyj3hRmQNojVFsVzCjW6uYTnoJZjisiJQHoowYw692DTXeJGGPH1TaNMLAd2txVHGLHz2N4LVYG",
  "key19": "5UmNThmhWbphw5LTZSAZkgZZDwTc3ZvAxdNTozSwGbZ3XVFSYTzEGyN98PPkE5rUkYh1jBqakdvPHwkX7nExUwNf",
  "key20": "216itvPu1TdQwaXW2nS8uzUGHMXkQoSatoMxMsmYv5pV8QanRNBw5ksDhS1cWRRNvKbJm4nUgXyUUbQ71h4RwyTJ",
  "key21": "hmd6mnfrAbe4vDQispoNgopyB37iWRmXmt8NhAVx2Vi8yS3e9BcHFNpVcAiW9ibE68pNrjc5eH9vdptas7AbkzN",
  "key22": "2amBBGTRX5Fi7PViSZxYaUJLMzLbAFHdKTDng95ecY5gUBQamKaguShLcfmwD5W3bCzSHnuBxhQsAsrKVe94kREG",
  "key23": "5NGD4TCkzmLfK4V55hJVXt5835HsrhZdJ1P4z1idVgt4MR5ddnDGh5ncDeRMbcYnQWDkbZire35FKFgDGPtyQZGB",
  "key24": "4RshP4niRzRhDPRbDNvA1FW6zSMavRnufDjpb9cPd391f9MA1TF52nW8G9upbQPRaFvF2ruK3MbkFQAyBqccnkRn",
  "key25": "3tTMBNXYV4RJQ2kgDm9N4BFFQX4i8VRqQZCUUe6Pam8rkSXEj9qN8fZoMSM1BZ5NRstwivTpopbD8MQicDyBK3Pr",
  "key26": "5mdiqTRXyeMiLtdmvHGzXUc3i3UMxuyBfn8M2LJmLLd2uK6gNxc7h4p3BkxWHUazrrFoPY9NcwXT6DDsubCcg1xm",
  "key27": "2nFwRodJ59TgmZVLeQFvxazNzYZLWgy91HseYkjASLCunna29DQAW8tfeGByteVDh1NFpj8oVe4yx91w5kmMDS54",
  "key28": "C64jonQLn39kkKxHNqST5yhNS7W9j8MBakUcWRjzXD4JZAsCZDF9Xh9rEZ2baog5vSSFBg1sAhpvXQdkp9o85x1",
  "key29": "23aKu6d8EsryQ4vQrnJ9PECK9vYv8bHD5CUYgWgEnxsa8wvnELNZHHNzsFrtGvu8Gnw6eCz2fwyaLbRgPkMDjFzA",
  "key30": "2x5ea5HCGFf2Z5oSvZExneDFYqYfcQshR2SCKGYXwQATQikBrqMbyfigpNvTVqbpgpE7NZMcu9Wb3MiHEYRfW7N1",
  "key31": "4CSH3zSVSnPWYnqmKUmv2zKE6z5ydBFQY4oLd8dvBkwfk4wTYRd6XMoE5XQZY1imvtKqAXwBwA38MQNvZdv6yQgU"
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
