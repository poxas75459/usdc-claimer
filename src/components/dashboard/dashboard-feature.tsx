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
    "jTbkWjNfiDZfMnuhzgVPGovrNphskav2ayJWo8BdjTKVY2mmRnAqW6ro2DC7P2Xz85WRq9zk3VPsT6JoNgcYz1U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sLriFfRBLjEe9NKqiLwumfCpg78UwxoxW1uFvyEVKfEHyLNdfRbFGxo2Y8oUSDp33KmNPEZFehWiXwSRZXshkAy",
  "key1": "35gUUkerzFdeYZAekN4ZWNa42ax2U6LgpFxktq3y4iJ7t5D5d6ykmc33V2zUvqneHR79QH5WP2iBJpyeUci14AvY",
  "key2": "3RYTetkmYQTqtn1tJrWn3u8GE35zrbV85LaHvNmBGm21DZdpMzET96WG4VPbWqpDivXnGKA1oBFAbJxM6yLmwn48",
  "key3": "34Yib8VFHBGYBuHDPh8r2WVYbuSoHaCZN6qat6c9nmeAJjgEeD4XPn5Ti68DpTnyW2oqgBuXy7wtz7ZSk26KQEUp",
  "key4": "3zefdcKUrMLQ6em5h4Hpo1Tk2u4cHhDABpUF1qcRKy9xQFKYtMomVTtifj7knq1gZgaQN9zAo98mhSviUcpbXBsR",
  "key5": "2wwpYpeGoQrLvxM6XcrNQCrdwKoHrA1CRz6keZRh98AEhFr7USHBaJEZv8NGZfL4txc6VpESw1QiCAnPZ4PqktzL",
  "key6": "525nEU1DLS4HhiPMs4zNC4FJAUcuBNHw3H6x1GLC1GbUwahCzjwKqLUp4FBCkZeLxHf1qN3n8rkoztAYmKyF9H2E",
  "key7": "5aL9osxzfWpoC5aSqP5ZJEqqH74QNusiE7uAoaSbsuzL4cwE6ydfLQAXWxycCGuQ9aR6yDXAzT1dNRAaBHB3HapQ",
  "key8": "65BwsYRsUQCJR1HNfMb8zuKwvTDygAywciMqEKPzCWXvz96ckECPqyuxUZRaakGVAbenC4HAKYaJ7ZetQnL9sgPx",
  "key9": "44M6Cc9KfPuzsFZyv4KvSoxD6B9sPcQonsRauFNbEbywKVDRmEZirA2xmhXxZGcT2FnLam59u8PiMxiRPUeFbob5",
  "key10": "3BG9unBH1M5nW8M4n3c7xtfS7ZxaSUt4SxZtmt6gFAH2Qu7Fy4XodyBi6AjnLH4CL2aGcSpSj2NbA1Po19DS2xCd",
  "key11": "5K2pY5g8RC5y4LSj1fq87Yp74j5Lv81x6phbEAVTBt1X5gTtoXRyabSrHcaq6iKqQuqHAVMEqYFsR5DS7hREyDQ8",
  "key12": "27nEvVZh2NDJuHPfQCiscgGVEZQakuyF675tuqfMzm1pr5F2RtbjiNFR3NBQYawwTGj1L68idP5Ldju3JEeNH3zq",
  "key13": "2cgcBpoPfj55x2Wo5pcC7jYhVXeBqMDD3JcTjaZyGfUwJbufGsj3Fi2hoPLaFzCxSm5qBa44TrQhFho4JHFEMrAg",
  "key14": "679JroPmW7Xq2DwSQJ83JLPRnJJ6VQUHcXbtU6KervFUbLBcm5TZeaCgia6LUjHQ4MKK1hWJoju1A8sNJY7a5Faf",
  "key15": "2wFit3CPW4Xa95eE4sy4T527t1vdteCVUqZSypcjfq989LPWha2o1Biu37kEZXngYCn5KBptqqJ4jDdnKGmooSpx",
  "key16": "5TczGyoEXfgfCn2aG2FKSbDFgATDbKNd2nZon1okDoNDcpJGzDoDx3sx9Xyu7Etb9nrxYBMPF441ZwpuUrdTijRF",
  "key17": "3STaAMFu62ABvQ7XLtehcyxqDkHNCHi3NHWFCmxFzCMnrpmoT5VyFrpiShtqhDAqsaTRoPM6TT7mGUquUDHRqXb5",
  "key18": "2V4i4fRxG8nKoxUGcUsswPNjKTmx8b8UCUskTSwnDrdTvkT8q5gYSF3ZbkcARwRt869tnDCGyX1VkgLA6adCstnT",
  "key19": "2NLHfEXguXv7u4sMx8LaRzAaeLg7LRVAwiNv5KxybUhqSb7kKeDTgQzoHbKJKKe5bhsnLxWGBukz5MmVKZxqjk81",
  "key20": "4G8aKQEuGeeLRDw6GPatEmWLW2eFXFZfjcs9HmQgVxgXNZcGuswSE2UjPo5JRvbqzk2voyUfNoPKqoE3Lrtm4Fwt",
  "key21": "2FboWQAFbTpt8hq1g6M4zVkQUh3Xzt5dVMnFeTb3My7EjzfvHvAN3YUi6P5qgmyH2RKyYwqjA3B9LgN5AJY6gy4n",
  "key22": "rwkNsSPtLWcFZ1QjQk7GDeTyXxF5Yf5cgi7XGY2KBjk9uYwAvNWHjKotfgBeohxXWjrqKnputNTo1bYqLtMLxbD",
  "key23": "3KGL5TGJxsL6Ma9eDBRTdp5vfg6gSPXmNSgyHpJ4GnAPvBpRrWMuUeeHbZXdWvx6w68B8YmLRMoH2QyphiqZwntX",
  "key24": "2ZK9g1dE6krvqxuys4LGFcoi2EVK95FGh9a6Pdn3E27AwyweywV37xSfzbwrnTZob6jzpfuEFR1q4NqJZ9TqShQZ",
  "key25": "2d2xavZzy5HHj896wxrcKMu53299jrTQTgBP2yPNYZH5Q7Phm1C4J4fsgq4kDNQTxZ4iN8LbDy3FtiCAWF2WyNe5",
  "key26": "4isGtkPYAaNKNJf9EFSZXfTNjfecxTWqhTUVuytph9dsWDpobfLQKFJbA4BkxaHU2RFgzqCq6X2AMuHBdUqXTfyq",
  "key27": "33sQC15yiRmLabmRXM5nLMG1sWaESY6gQShu5b7AJtsi2e6ENDN6Q93AYpXJ55HLkXTsvqZK3QvZrLbCXghvE2GQ",
  "key28": "3AWvW2oEpprk81GejH7vc8t8JkZfAoWgJUbJZGRLnFzx68qhATC9J1RwMFfnJcef4BHNJoqVd6zYfnq88yfcjxix",
  "key29": "5nruBX6rW42SCRL9ZbSeTrukLYRuUf1XmmZ8GmnDhTaZPNfRPVwoHh3EprKYrmqikz7hxHDJc4zL4juRP6t7M2Y5",
  "key30": "pamnJ7oET9Vo55ad3UuqTQ1gKnuuHbJDmkUjSatbQNGn2iSKJh9YjrrGw5Q4mBjTrLkqWqMD1NLhWFTsar3ZFyc",
  "key31": "3SuK8vh7iKceEsi8H4tm9qttvVfyvXJzwZpV33ZVbWWitpeWX29kaSRnPEFpybfX4dyBcVP8BU5sq9SE33NXJ3dV",
  "key32": "2jpPzHERahSRtgwyqMmhiZW3F13f5zCGQUXMEkKbT5S2CXXKSHG6JbmSsWoBTPHvxKZiDHU4VGuoWLh8NM6EeowK",
  "key33": "5PhiSNJuqSPaHFLgb7cEBbzTyWkADZrgyaEx5Jqs6CgjHLh9o3ssDk7PFV8GtZQJzbjzUTEb1EB3KLvRX2a4pbm",
  "key34": "5sqRSKgobEm7aH3kyW6CyuTv3HTP3eHtV1S69HUQhtBdJUkz3hfTeNCtiMc34TGJGJ5ZqK1ixXgTTArUcGTEWaGd",
  "key35": "5zSC17wZkT1rr1VqzdSpcqA1cYTkKcn7eorHsbHMaebz1d7yPdsfQ79pPVk8bzZqgLamscAFcy2G5BL9EkBhQvcp",
  "key36": "2ce5jAc4jbBrBdfbHiAHyiM248NC4Nw4oiiq8TAqzUVkNTMT57vuyWxdgDXjwtPKz2S13yZzEWxU5zWhCrRdTww9",
  "key37": "5FC3ZbqnPJ1Jx8VEEYMgML2nqKQiazYYVATDfw8v6t5MDK72K2Hof1mLKXzDPgbX1a2FkfLMXB4z5o8eXXyZBkAr",
  "key38": "5ccw5XK7jPM97aMEKovDBnr1MCJDZxq21nLwCm6EVQgVngEjCRwvjYvfMePhDyVtUhBVBFYbLyHHmGazgY73cAhL",
  "key39": "53JycgqR2fcvx2pYty1P8RfX1firF4siz7jFBjixynPJBVbpExfG85wSwuJsn2seuyTRdP7JnXFmbaRWcDh9qzNF",
  "key40": "6XYFtkvgoz3hybey2Rs4pexHmrS4LQ21jDJsqgm5ijDKwsveRaaLsrkD3dvyMkanQR3cPfhTsTE4EwSpcr1tULQ",
  "key41": "3JLFBFJnL89wX1mS8bThJrjpyrdVGe4gBLvvou65x88rpkuKJ6jFcjraexhLhd2W1njpQHT45JJffYY7u1BVCKac"
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
