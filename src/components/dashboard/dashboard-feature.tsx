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
    "3mjuP28F6WY73JWCuUM4epyXJHzbTjT731BFLekeYSbPoXoE1KrdDa22PnLX9pM4eJ5LTEJEGc3BTvnPjL5HhhMd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VLgJFTe3n6u6nkyyYgKhZMUgzaUkJQW27Fwnu4q2N3PXwLNZPi1zsW5ohQqHkniJxeZtdEwj3nBxgRswiomAvsy",
  "key1": "4JKMsUmK5RHwBGgbhr1d3NWVu7SRqExkNZSmFFzGp5BqU6nMmNCrGhNHRB8xJhbATU6tZMLRDkX5QWPH5D16n92d",
  "key2": "3h11RUR6kQJrDNm74BmnWVzjg2pKhviyewohUGEZr7jctm4sjdEgq7Ri8P9vAXhtq4xYhtE6bJixnj2FQxdf5MgL",
  "key3": "52CQ7BUWS2vx3ft9HbHajjBvS9cdThf4Li1YtfS7TbNUWVgeifWKZC6fkPtCQCU1dyTGEAp4AiGTbaX8oHeNqi63",
  "key4": "kGx5YgNTgeifQ1uByT4QSK9gLhdSeuhuS1JzU7uJyjCeete1q6ajQvdh1VSNtAz9cMBhUuhNL5XJMkaovu61Ze6",
  "key5": "3D5DaA6MpFUtHvF87k2D6zr2mB3PktiuENdXXDru87CvQsFV8WaSnRS7LoaYcco9amtHaH8QL77a5U8n95mp2E9Z",
  "key6": "23GzJ8p2ZEUR1h5uRjsUB2qv5YU4D8niTgg6Nb66URPaP2Zkz3dAsdto5WvcykT8y3YUW614CB1Pfjz9sA1cnPtL",
  "key7": "4GErkB33VqSayMz51rs4Mu9xceiJNcPijScAsJ1zp3GJzEEF7GSt2yhcrdGn3kVLUpNi77NVJLdM68jb5EFMZzqB",
  "key8": "5G9qAknYQ9AAMR7RHpF2cjYUN2xUyduQySMMztPCi8etvBomM84EENheDSoQaoz1z7JsfDUmdAU7vjbUStwaC8eG",
  "key9": "336iy3thHpsLAzoHNkfV1Zok18AcrgqkAy2heE2Nme1Vy3eEjxFbXYyxnAjJBiCHcLia7j3odChQAk3ZbUzUcx5w",
  "key10": "2TUUaRDBc8yEgDmK9NeFBrgTRDYequ1VfJAkHQBycLHUmcJJkVuRTJr1G1HQpp6QdoW1bZGmyuNHgxn1fVHVo6Go",
  "key11": "6PBM3QP3Yd9PC15npXBTqgzfvHghtfyaWNuudz6FsGobUGNxFcD7U4KweqgkLADY9CaW4adkuc1ewyyq4px6A3D",
  "key12": "csdBaom26Uqppn35MN6uiieKoDV8LvXFEVJDFadFMDAEqXkQQmHfYFS98uXgmxrbQRbcKxKBd34tCp8vFs1BF5s",
  "key13": "6rkJTRyfNAsTmnYUiaVAMfGGJXufMWNb5yk58qkNGdk8PbRZJxrKp16mtDuNYMtqusAaQw9E8BumyCYMb2CqhjN",
  "key14": "5p5bwh9W6WYncSPunKQLzB2GwMKcUqBDtWb7Z1UwHgE2hbd3VS5WFbyEYgjT1xrRTqBfKseGypeme4wtYwH5puC8",
  "key15": "DwiqUyjBi4bMVatS1EbaJ4XS5GjqmaUWupMVDksZACVEZSNXbkRMgnFgst1bUXHcda5QAzJokFfFKpHnRuCLt1r",
  "key16": "3toFedYyJcpiqskBUkU7aAq2zsW9bu56GyS48cM4fKMjXJUZgZPB2qmNnkW5yWCJSLm5DoM6d1qyiPkcMNUAvSx2",
  "key17": "5vSNh9hxV6osNtbUqxf6oaUpya9jouDvR38d5qfarB9Cn9LvtV2W63kHPoGdFethqkZfgXbDDHdkF1bqdPzLG4zH",
  "key18": "3KUvzywz2gnc1vqfzfkgfSbfUwrbdEmkzgDkncc8m7keZbtodqFXsSP6bvS5YCdmCh4qT8K7AJYYMPWfp9PuBtiM",
  "key19": "5d6hzMcKdgHJ875tX32x7KkfyESXoFpiKzA9X632PCwwbKnig3Rd5XRw5YvupXpY7Mrk8nj53x19vzcDbJ1EQs2G",
  "key20": "3E1kPyYYSEXifocCXybcBKe3M8g5xpwJxBVUat9pWLA8e1q8vZ5zrjJyPT5NGaf74PcgPEJdtnhP9aKhEg1u9ih7",
  "key21": "5TEMCNbJgTgGSV2GXAFEwysik9TiHHEcZis9m31FmJkJVz4Q6jp4DER7jTCaKgD2YuvMSAK2VMoQJNieDMGHUwLT",
  "key22": "2DFn939hR93cxrMfpNE8necMcaEXEZTCnQowLee2bkxLWfYuVmrY1wb7nSFRELgYMc8vbLMaKZx7G8ioZdhcPBQC",
  "key23": "3pcBNUeAE5ybh5jsBZXskhwaE6AJY7AJDgSwutDNyabvmcxHHyCfCmydAyNME8zd8SGu478vPEVDJJH1aCxuGCrr",
  "key24": "4CTjziRT7xF7ufQmqTpDAhQGVK4NM3813mtcB35cGogBAb1K3bdVLiJ5sWv9nsn1twKBScGQCSebq7KgZiAxxUXj",
  "key25": "4gg5ngPY38US8rVm2yoBTQ6moQVDtMSLXJDcNcGp1qLJiESdhT7eQ8oh69Rumm229qXb9inkwsdrZZxxhUJdsFgC",
  "key26": "5z69BDLgGRcLjbH8NFJDfnRvqH4aYQnUypsE2Ded2N4TDo6iW5eWhYDTT9nSDD4XD4E1GgVpTBgPYYEcEV1B2WFi",
  "key27": "2Ppjzugbq3W7y3ApomfsgM5kkEi4nQMBW5S17yCxQ2P4369m1wYTb7sR1ByiGQfr5TBUqMg2rboJgJjh2ttkjd4A",
  "key28": "3us4y16EJBBGKQvvCmEHStCMfR7LkBDt25h8Z6dtRdwJwjvi13FzvmAEYALPs5yKaSA9yvquCs7DV4DMPWhJJkvh",
  "key29": "5KPnqD8rd2KBdZ4v6uWnQStrZuEEpC8SLTky6m5VcEJ61pmPC5gn7i23etb9RMXjZAf7fWXTQdSuuRBGVbY81R6M",
  "key30": "5MqrnrAiU5Wyx3f6oNvP4zseTTrN4UE6qkGpNezWwbFxCrRieZrNrpqcTygV5izcygMvF7g6qxSvaVRRTyQSMN8D",
  "key31": "3pTw19hFNcjWU1ugnEsb6YKJ34r6XgcB4XaqgwrN6zE3d3au1AsEKJ9kC6Y4eCc5MeMHcT1NFerEvmR18qBKcwwW",
  "key32": "53icLaKqnkMRDt5WBtFo2woXawPTE7G8vDquaBuje3YXnMu5Q3ndnKts27eLmMc2uwoyVQGGrMth2aWYaRRVtzUP",
  "key33": "k8xV6Dtew1PnpQGtD8tFfeHKZXqU3qP21bpsCVZzDa8XSNbTUXjA6boJo1txyUYbmSykgEZz18c3JG2TyfNK5MJ",
  "key34": "3ZXNGRbGxCvpWRVG7wHD1AXuhHULrkG4tVE6TnDeQqQYTkS5S3W6HgKNYAkZuxNt4SoQj9GbqnEvxhcTgV3G6NM",
  "key35": "Njn62KdZW2MDwdVvKZVrAcfhBUoy4GFSGXx7xJjuYp9SEnBbcNkjDMF2SWK99NiY6QY4LyswSaNebSrh54hDo72",
  "key36": "5hraHDtsTyTypdzSXi9yovbHdebuDYi82UoJbeN5dc5pZoDb4tfHzwg4RJjyArzMbTmEKLsKkyaGyL8LFikKH142",
  "key37": "33SHKKm51dgBRtJKVzV5XHZUmHu7XgQdcsntSPETcjTdNCpdvu42qyganRgeDVKqcMzK66D2KRihFpwex5gqFi9h",
  "key38": "5H6QCz9kScbqjtcdHnVbjFDeCZjDej7qGuo7wPBZJgY2i7DYvc1iSniegmBHpqXmrMyC35VcBfkPooLQghEuviRQ",
  "key39": "67VacqwNWua7VGukGjSBtmHGnqnaBxATQdjheVJEsbmcHN23TsowyjqhRr5KEKU9JZgDcYLJf6Wp7SWP6giEpNz7",
  "key40": "4YBc4EtpN4S5XNZGetUtpPRaQc55YpQkQcNHEzYaZSzKWRphoECyn3mnFhbFwiLSCCvnDxVzrAFFCQUzvwwNjAsZ",
  "key41": "3fqrSNdcD1wNdxpcRvw7tsNhi2ycXqCdQPgbJfFHnRpAT72GMJSs8XrePnbAi74hK85iygx9NUaKAoNMBQudEZUR",
  "key42": "kyRM39g7gxy1kWRYZYqYpucsYCqBBUpWzXKQ6LBZ9TkoBjH3Y4zQgoKmktvJk9gbBE6kWEcebqJfXx7rhgbmqH5",
  "key43": "232x6mSACSEqsotrRD3X4KQxQ1poRykQKnGHwp7sQFLcxA94m8aqM2kxvDbgJve63DM647659MoFXBpug6kYC27Q",
  "key44": "4zpQaPfVHH51JBSJpMEULZ18fEQ8RHBmpjjxBrTqTnjuKBFw3oDnFJ8sujUsJexcNDxL3FbVtVUML5DRook9xkt",
  "key45": "3q8VPR9wKusmemtre2LdMRVznMgfo4b5H6LkCjqfdqhn8AVRtCgY6aC2beJckgM15DLbfXKAdiYpNvnJzmGxZXCf",
  "key46": "5iFBsvrvGSePpCrZNhHGrq2en85C2TGkMhL1G42ig31HqSQj8CHyN8pbteHkAYck8FpqnnCroBCQnv3aZhCbLzLV",
  "key47": "5xeUP1cNFvGxxCj4YnS3B9iAD79XM5JR4yUMPuNR4BuFmXXn2NB2EQwcF1LpDaB9yCVesTDCGuEqxsFpbQcrUik8"
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
