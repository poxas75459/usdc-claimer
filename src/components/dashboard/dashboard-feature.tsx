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
    "3JXigFPxih5dggo8M533p8xQYf8wJDUidoqrf22EZkBLEki8hZEUZCFr8GSVogENzt56KpBGcDHhNdCutCjVQL8f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41QQFmQW4DA7zAfdcPDzbz5SEvTpGmDf878p2jqY3Je2PPRvGQkBWTubWEDuqXa5GPXe5Pon4PAiT9CWFe7RWRco",
  "key1": "3wSjeoAfHeKaAXwRikfCHNiZiCXDnw6jcy7X7SxdJECyXn5HsgdC6X8TWs4Nce9b7e9VwGCo8pSoAGTMiEDzHnB1",
  "key2": "35tFDTu1edcDgece7fGTHESFyGGzNdg9U4hnfS6r4B8aUBDdi8MBFVLztP34wh8rQ7TTz7VpkMzGLBs7TMuuCVgm",
  "key3": "zZtgQBt7s5JoLzMfmJcaKukFBb5vehxaNrG5Ri1A1Z4qtbnAAWUsSwG78oCmjdnFjC1ycSHzzzG8PErEthYkYeZ",
  "key4": "KRkLpCAayUTaqRbBg4j1p32HWsNaWt29DFTPdr7wY8f6BbZBQYYNLdzx1QYBj9YW4RhqJzfCkdPvZ5ffCEe5jkd",
  "key5": "2zAnbhrQLmBJ2dzKYNJxuStQShDhYCC7dymanz2tUnxf1X8QubhJwDHU6KQWnYuCC8m8RJZMtZoXrMXR1Tm87wux",
  "key6": "5LSiPEfmqsA2CSRYmnQgpQLQTyypMKsukopyd2kx7eaLmsc7tKAibpUYAp41bwn1xq91T7sRJXewWzDz7SsvXsDS",
  "key7": "5iDtZQzKGMR4iS3F2dMnuATk6uvD9H69MDc3JXdTZEwkYFQ8TbpXXouMvCv2YJNtqGgaZ9YnsrFreQbwrW7oKGLQ",
  "key8": "2aiCxecVyG8PAatAvjyGsrpUHuz3UvkyTrV5R42ayYHBcLTDhVtZuDz8Rf2wwzBbENPDu6TtRRkXPxhqSoxoSUBs",
  "key9": "5W2Qah5ko4Mk71HRgX56T1NNG4GL89X9W4dLuNcdVoekLHrUWcH62x3boiQ35nDvYqXx7GnqkT1JjkMuSuphSo6g",
  "key10": "3ThzyEsX4gmYfyiS3XfgF2YvuexDkAbNwEgck3VayABmkW5w8jDjudWzKbgoCg2HJ8Fhuv8yJnGHpcoQemmU5JqZ",
  "key11": "4QwuthXo8hh2qtxWM1NQB7ZGfBXtVod6rccHcoEJJ3vWxf1cKTuq4devQbedYZm4JQFZndqBfAFvXUK73imYTZc7",
  "key12": "3TsfgAUdm3VR6z6w8eitzir3XBrJu3FatKLPqcFbec52xRoCbCEaAu4vknGbCPFRry1BnHNVj9vWizEhmf6WpRib",
  "key13": "DFAFLozveQwyE45JV1axpdhF6256U28QJ7kbjJZLt6Yi8kzG497S66i6tsymRk599YvMQi3Gff1qPGcSLpPDAao",
  "key14": "63Qic3UaYXDz5oeRkgq7nj324i771mYHuD6KijRe8oD2Z74BbKMAf11S6pMPu8sRF7kvnbZtqH8ibPJgJeqn1gJc",
  "key15": "5r8dNuRYmRWL7Q5uAGQNndKch6MZZM8UihFPiE9pcyAYHa1zYcPtsAUxCJoWwete83URN96rWhMXR7qktYfLPrzs",
  "key16": "3tWkfmu63xLWA4UauNRikjhG7RQXj9v95PbTzJBLxaguPCm6WF9a3gzrsevtVxJNNjsnAi3msrEpr9wMnrNZysrg",
  "key17": "2Wf6e8uKcznnVWStaewrJRBmFvYBw8fHkHSRUpzvCY655h64te7fbFPDpCizUhdkFdWNPhtANRrroetftcnUpSrb",
  "key18": "4ttiNQXWeu6UYMq9iXL5wQynHU2R85z2keuVKRjiXLvH3RkJbsX1QVfyu6SrU1qwAnEdNep4VrBSEKuFnBuUi7gM",
  "key19": "3CoXPZAXnieWByGkuZ7RhD73SBWq64ePG5RkU4XKLqjmxPDMmCE6Vm4UGR7s1pDwFYdzPFeih41cme7pmj9onfPX",
  "key20": "2o2KWJRDffMGeA5WZJS588jQd4iUtJpwFUpZwywaRfifdjV6gkyWCpyt74Q5rYt7Wr15AysZ3ueFjKJ6X964TU69",
  "key21": "5ErNwHE2gdm77sugWDgyoPJQZPq6UHCmnG5Nv5PEJhm8iWrU14pnpAvemZhJo7vDiPdLJz3ohCjh8izXY7Tsehfr",
  "key22": "5orxvcCXVxUve4axrTjq4MucnNWUZHrj8muNYXn6tZnDL2jLvZTYUghWeeX17atayXvTezYVNuMHkTnWvNAiJLh7",
  "key23": "45zGQH7sAhzWA9Hcjq596kFYrmPaAARMj6jMS4DNbqENUWVQQJhsv88hn3iZYFeGBzrK8chtJsSVozsodNBME45u",
  "key24": "vqrQt2fx4TowPgfzkC28h1xLsCgkhEoNgCWnUU5wPSjFDDt1yVTeZmc7E9ChmNoxyZNeDTGxzZPaV74CNftLWna",
  "key25": "3DhhFZ5KqYDjcccxwR9AMYTvfsH5wtypGGWtdUBN8sf5iKK15YhL6ST6sF5t2dNLQHZXJfZtxqraZUU7w7nvip9L",
  "key26": "4aG6g74XUUA1oYfHuT3usMU44rZdmSvEf28iYLGriL8SAZBtvxNX64jus49Q2VA7paGYHCrQgip1iK9m1fQKbXcv",
  "key27": "4hpHuMStfobYwfyYM9zK88cPC1kMJiHbRZJoTynUChUpg9V3gf2gaKR7LUvViKKkZXHBAfJUEL4fXxae2CFNyXWR",
  "key28": "5XgUb4wfFdX8Vv7GGGUbu1B66hS9Hz61HLYFcssaffFsKH9cdKTMHoTi1HyR83D7MqRTvaWaAoKKruEcDkAiYyW2",
  "key29": "3BFk746Wr2ZCVh7ggdsY6iCrUg4Z6vxHu3D1XdzhQcTq6ip6Jt7t8NENoEWJ2XTQfJSdgXS2pysr3zDrEKvb4YvA",
  "key30": "2NZB2uknbPPstbCCEqB3cr3rQ4PmfdJnE7gUNu3iG99dSXNYfwW9G566TNEF2bdgVNd38Ytu84WE5sVb6FkJZviM",
  "key31": "2dvPA7qvnWkRZWf8W5vN22skz7Bqg26Hc6efSyRa4uyGqBrF39WJnfXyvjMiYiGFwTjDcWa6NW3t6rotxHEp4mDZ",
  "key32": "4CGYVoHPLXQdnQmmQQBGiGr898pKthRWtrw7XNKm2ng3aVj1yCGuzgPPwEH53jWTLJ7TjcmcsfArs54dn94NWr9v"
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
