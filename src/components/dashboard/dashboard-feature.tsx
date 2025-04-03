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
    "4oMLsZqoqgpSaEB8sf2JeMEGsZ23cu6P7KXJiDJGR3r75mYfnJZK7hrjqpnLmNrHMGbHmrLvNTW2pHfzpmaC1tGz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bC94C9hmR3eayPNE48JLdV57UTzRpbLxgqPX5F2GhAGuPifXF1fQ5q8V43xrWsZgAaq52e472wHZgequwqevRox",
  "key1": "56T6zuKmnNek7uuhbKRVC25qcEiEamuQ4fXCLH1MQv9LVCr6EzvhMjvj2ZuYE8LwYRPS6xa2cLQF2TkdZv6ymchz",
  "key2": "fYF7u9b2Gtk48JHm3SGYUEtn5jZrtEZzVribXLmKRfmRVBsnqYpmPXR7Z7KHbsKn6KRfzwt3vE4wNDAr1izRDQi",
  "key3": "2zLRtaB1WTNdq665uysdmUbotbzN6ZdBJ5ATiwCH3HtJCV31BNSV5GQCUyQq7rT1akkhmjFKX6P4fPmw5ixPMCxP",
  "key4": "4sFVcQcwukbkgYreWU77JQJbGJuBcFKWmXnHw3t6ZZML24o2qXw2yYitTxDpMoBpFXDjd2D4823nvk2gBYqBBTuM",
  "key5": "3Cz3pU6sLEPnMTfXtpy5mhToTorWdH4qsz4fiaLyBitrDx89TjkiPDcboJyPvZEMfdQ79NxJtWH7F9vE2Q6bQt6n",
  "key6": "4jo3qqPrA4vRUvVARkv8t45jR5ToN5EdLuJqzRPEYw1xJ5mVEjoUvDmwBbrjBN4Fyd3kcMubxDngz89JeLbKb3CJ",
  "key7": "5CBnEsriPx5yV9tKX4v1erSLA4waXankAJAhsAX3dru9gHWh7mj8vbs9Vhr3uygCXbv19R1aiFfhGLAR3EzNvvYN",
  "key8": "jc6gkU6TaYaPHurTmcuwfNwJz9tAx2isVN7rW3XEPxtBhMbJM4uhJhWavg57PTuDN2kXtyLE93dfrVB3Lyzwa9h",
  "key9": "4sRhxzbrcmbVuWK4BkMPRAXNTYngU6NX1iCeGmei8o3UFtz8p6wmswETng3P6QjrqHDFJL67Leywmc7KB5nihs1n",
  "key10": "4qaX5rtuR5rw2ivJZnfzKPQs78ErAxeCoZYchN5aTAh2hoBEXCJMz4duFvhrwzKHEhK2QdwSJF9AB7tpQX2kn8wb",
  "key11": "3jAqAgWNdP34qxHSV1WCtjfCNtM9ffCpaWj6mJXpTSZ4H7WxbapivPFDZpbeNWLdfR3SgMMBuypY3Emyp28T8GWC",
  "key12": "mYXAbSRSCsfEeE4vd6UzmW6hDMF5nzV2fSSMn6sfvybVtQcvVkrwBsATSR7towmWgkCYe8k5ehY4n1rwddjdJET",
  "key13": "3R9sWMxyn4CtZgR2pVPK1utNXcJwPxWhtj8nFHjn2bcrcYLLXBHVFf9qKfbkv7qs8JzvaTEy2nVxKZiopgddyM1Q",
  "key14": "559DufniPbAdQ2XWoewmx9PeHieszfSkWS9izzQGMxj3yZaQNWejr4HsARxTAw4p8Z9GcV7HrSmoyi5phHdNGnj9",
  "key15": "3jrdcMqg3Z7tcx93N4EBeLhMJ99UsascAzWvm9WUo4F3Q4htLndeJmkeLmRXeDdAYUN4vgv4R5UT98ywjh36TkDL",
  "key16": "4wLdo2ejjgMVtXcQSoR6ia1E89osgL9WE8dBDRWJWjvpk3oWXAFJK4QA4rJts48fcsbAz1kdzteN3cb8PZp2mdFK",
  "key17": "3xMHgq36QJueT2nKWCBnE3SokK8S1m85re9bt91xL4dqcRz8n219doog2XAGNyxtHwVSFLUTrcKPk7U5fNgGzexD",
  "key18": "3XnsA1jRcHjzyBGDVd7V79JUFKMCdK43BxMiJ8n1NrRLZ2DALtDa3es9g1Um7jbBpsKuhuAmHxiwSVcWjCxNNhb2",
  "key19": "4oE7Q1TbSn9wXCumfaynzrgMvwKgPawc84TjLxqrRLfkhnibAsGbqXEAd3qouVComd6ys5AMV1QV4855x6MZy8dk",
  "key20": "3pXWQ43UfRZEFaBoJYu9uwywzjosKE8CvKhDVTZwHyaU3Dzn97mbthuq7Nr2Q64mnGgFZnsg3vp2xCDbtTuhY3kN",
  "key21": "2Abg43UTFGnZD7ZbsWQXFHNhQhE1coqkXRYNd26UuwDGyn4qNEbeWCAXbWPRB94w9uCN7XJ8jKbNu1n8Zehiqykd",
  "key22": "2dE69yGauRrPf4sYkV4xmTr2Y5tZuP1tMh3CaQ8rbsqYD6vfw4RRxS91fu1Y3BjEgY5gfysJQmTxbyWdZjcXWkwt",
  "key23": "3S9ZorYxaz6cfrqAhcsa7Ug3zvVqFXxrjU1YnP3yEppU5HAk7s3SJ2GiG1o6btZwVPSRcf9TKmCRyELdNfxKMLeo",
  "key24": "5pSEW68PogqZMKcjG14Qu5XupRuxF38xZga2RM9B7eZw3Ap1D3ZaZS7jN5nA47dpSfLFTwCgaUmTsSsoaj3KxA56",
  "key25": "32U98JLPh8j5Q2RsZ2Dzc8RYvE9pMwnApV8ZqqiJDFcVaH2wD7G1QnYPquBPMsPcYkx4ytqE32JjKzE3985ASfwT",
  "key26": "4BoqjUwBJMwbFZ2ALAPbTxsHBoxHRQ6wRjfD6EsD98s1V2DM1UJoF6BVKkY9jKg9xidzPrmihcoKqkhm5QtRA3Wy",
  "key27": "5uy8FmQHcNsD9vMeCdfMwkVHZnnEtzW467d57MTt5xsg4u91XdCw5PK6Yi4S8oBm8Cj2cbBq52LZktyYNkdWscmS",
  "key28": "5WoPPT4nqFinwyBiWT7CaDFzaDxR6YbBEeQpg7PeBSBtKJih3FVwG2uK9bqa1R8w19WsQJ8YQNvsgxRQnTHWRcix",
  "key29": "3Q5YuTZytBW2kBtQrV1dmchrg6gNxWGfKUhyJoGyGgqcxou88L8LBmxRxSeGyFMCPpVWFm1dPeSbe5khL5zsGKXe",
  "key30": "qnz5LD1jk8VKsCUsK8brfP42B5AuPigbRbKFQhySU9R8HtAsLRwoaKD6XJpZDnaT4fnCiWt2D6i41jtgRvsL6Nt",
  "key31": "4Fv8kbggtuJfDCkJuvcy7J3NLrGoK26Xzo1cvqQ4Y3rF5ZJ9tarUM8gVWrZX2hznDHNp2aTnTUg6oxTWhj4CxtMU",
  "key32": "4GsVKpeF6TLLhbfyZGjt1BkfCwMy7iTStP7yaTFfbcooijYKLgmhSZqJYfTnSdpqUQPPPBrLLMa7nYUWwzJY8on6"
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
