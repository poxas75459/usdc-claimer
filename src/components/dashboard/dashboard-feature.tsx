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
    "5WQwevFE3hu3B7KqcACRTX6x9i93mj1DHbxGvBG7D7qUxjegL6H8PdNnGuMPFJWkFKcaVoetDzQt1FMZ7JhLZ29s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Y2HvRKAHQEWFSaFoUaqEoFMAXDHioeRJmv7nBgsDwuTJxepPgWT6JM5p3Y9qP58CQnDFwaqVywGd6NxLbfC9v89",
  "key1": "3tXUPE7hZowDob4GFV9bbB7DZgfCAq2XDtaes1YVTtt5SBos9TkoJcMUtapK1PDMfecCkHwJP4QF2BqCcsnEAkQ5",
  "key2": "4hkgcFnuTThEcNfa2DS6dra5q8w7KE1TxqNfZkrEfJYUBuKLZq8kk5pbSbpRUyt18baym7XtoWPt1MGznwDAGJdb",
  "key3": "JymqcWaGddCCcn6zYb5xV1kXuHg9qCvCVRvU1QjDqSH6H9xEgvR1DU4yA7FYn5uxsEQsXrxYCfQREaVjHHHeMvn",
  "key4": "NmnCtCdJAhYEkzYiY2HUE9bcnUnmkCL1RnjqZsuuMpKS5r5Nx3m9yaa7v7dTgsBm6UFzj191xvMXsNMEtz8864S",
  "key5": "2XrTF4FCAwF1CiVgGqePYLEjhFbEpxhmVbmCLsfFfWPpmqQcdT9FN9GFVadt7qPKpgwy13idS3JdQr6KtCYX8QHE",
  "key6": "5PoUWx6RMFXRzNSJVaB1aKRYEpy1Cc3Dqbjr8RtGeG23SvDHaAkLb2fkVrjgwVfSaUPLg25AkYe19KLPUS1Zuvbo",
  "key7": "rx59uoEkT8YSadnmsMaBugQy77soYms6AVEWckGP1rZJn3B8mkWpuBGNoHHLY4GbyYjd6pkJidnwbXK8ZoKcQgV",
  "key8": "5ahioc2pT1jVm5mRr8gpmyYsbqihVTyVjxxz7no9qMncoVm7tXR9K1bKComGxeXvg4H25wzKxLnTniuz3BVfJVTM",
  "key9": "26bEtPfxS6UUjZ1d3Rqkh939fXHFquA92EnMWFUkw4E7usgwumkuCR69d5KiKqSxLeQoAFRZ6C5JA7vNGgba3x6X",
  "key10": "5cE5t7aVgkYvikEBQ2NnT6LT9hmGULLZkVpEhHyK7CRTmPaqXovXSPWymU9YrirdNcY59L3LNN2294EWeHYGFKZm",
  "key11": "5hbpMV59BpmNBAm2QCd4VeEgYbUodUcxXPGnrGCuwWctDwFizjzBwvYmzj8oAoUCWHXBnqCoU2Rv5LwP9qe2SQkk",
  "key12": "44QDtyXbTL2zV9sBKnmkVu5pHG6yqrhHrv9Jgb2VgYRgxGjzXyBZVLJjcZAoANZWJzw2GGw2XmdRNDSv9WNDcPXf",
  "key13": "3KrtWZdf3uv3VtipVZX8aetyiFkG6VpzoTJYvFQmhJArjuPKqR6bLd8XfqWctkVLF8dQECr1t1V6eqZ79CHs4pku",
  "key14": "gYhUMvWoLMRdxDFq749jG8KPkmbzBthFM96RoWF6RiYM5fEBGnE1EypyGdg8koc5sS5CNCsYrPWNmSvKR7fUYyp",
  "key15": "2oB1oj5TmyLkQGjABhf83iFeM5oopS1GANNXBaH4oB82PfdCj5QFcF2kcSsAJRMMB9BgcmsNuJxWbxBLJmx1Ats9",
  "key16": "2tHtXQp7ZL32KboqHay8Bpw61YoJVrPuakZnzTzT74pahYk1Lp3AMRc63bW4MQdnv5K3Lsfxbu27UGUfBPvh4hRv",
  "key17": "2qVzrLF5XaeK2qKPJ5dDoui8Fxf6MPnfT5ekrQsTiYDtLrZXEtDPavMsjSBYQ6KJ3PjL3V6eTu2cwErJbBwaZa3C",
  "key18": "65mKfTubzv2XwjViuUj8BNo2cbUg5pasrF8oJzdfvufTWA3XniKWjVB3GPdVmnDZZuuwQU72frVasmxJ6eJGe7hj",
  "key19": "5vpADP7k3jQb5Q8xpiAFfTqWXNdQ4CYsv8sTL5E8exPDYDJfRmuuV7fwS84gTwmaQ3AKEHZMbgeTjwQbkJri9K1j",
  "key20": "2TKUApaFPy31sDdbTGgFduWqcrhMZNe8ndAYYjynHcdimiq6gckHdKXyXodw4h2By98c8hg2EmeTtzXwgHRXAiEm",
  "key21": "2LitSuX9rpLHkwP47M2GemTDv27cqsqVFnVqDW9fvWD8JAp1Ny396v9mmFGwS5GDVqPqxCyg9AEW2yDCi4XBRxt5",
  "key22": "57nwmwBnCiPCJq5Tv5mC44W4Qcv3Ad923sG2D8CaWGahNR31mzU8uaXYroNb2KegoqoHzZAyifCBgTMyv85JcraN",
  "key23": "2rUZDa2zeNwn2xP7u4YXcVRTEXDGPw1MBHGdGqbXYXHHj13yTa1J9auG1qhwNTsPrbijCEJ5hEESWzvcb35g1y1A",
  "key24": "8JBVkBdpMnz2i66sYHrNH9Caj1tdRy5AKiBYDfFe4KnatbmEHE1mm7D6kHy65eLHAg7wSMqianu95UEajaQqJyy",
  "key25": "4VKuXM1M2K3xomMfuYnB5L1bE21NDS9jKsHQofxZTdCBmFj4Y8h2Bn65iCW94Ydd7AKGXux8rSW8JicWqsnXtPCF",
  "key26": "4DbQs9CMdgcpPsQ2xjyBwYkL5vdyuWhkagxsWP33LRzRCbZdEJrMtULcKSTHEcC1RJ55u4BG5F8JTfyBaEqy5Tdq",
  "key27": "3ECBqNnysC4MgETD6AVJ84hDmaJmNrzNrWFaBRrjkWWxnRbusPdxHicULzEh998nGTreJEGjA5BRaFwBAA89LP1S",
  "key28": "JSdfS5xvFCLgiG157QBtpdsRVWJWXSPByqew1pj3oHziBf44bQJ853HxQPzR7ETG5hEHTAu8nV8DrooVKJY1tG9",
  "key29": "wD9phegiJGgGeuaLxQQyZ35xYe6bHgpx1n6QMdGgaYEVa4HXeaLvj27zFhsHtwCa2qn9aosNDPCDteJATok5kJJ",
  "key30": "4oEGnQdhHw94a8qP7sQN6RD6eEBojArwmv1b6taDSSndhDgFsHxixyXoqLPFmdHHEFqGaKXsnpPYZrzHMtWCdRNE",
  "key31": "65L2UgJTVoBpK9uZggg8eVDNWLqEKYxuLtxihdkE66dowqLKie5B95WMcUjRRpuPYTmUsBubNwKyuzzHmCGNFQDi",
  "key32": "5tcz9jf33znCgsUETdujM5kwDesWoCek95Mvv6H6qAzdfA9n9fRDDqhudWXFPp7TKH4ucBWUT1vaKQ627W6eQ4HQ",
  "key33": "43U63jWE49LgCMcHHALMYZYsv4y2MXZmbdx6GxS9y4tn6r4aT47wUMyPVbMtt8iq9EUrYxtRdRkDYzPU43rSwF8J",
  "key34": "5EVy7VVeqrZdMbjHbz19DikpPQMWjoUYjsGRc6fv1MK6FcsdETTjCsmPEgf65fcsq4tFSNHMiZVgux5rjbZ69xmJ",
  "key35": "32KUoxB9hJcbnYed6NKJCcZuCtY9TMPoZFXxsmL95qhEyZFiTtRX7YiEdQNTTq2AyWaCPEBaZxE7H3GQUPy44GTN",
  "key36": "3UJ5Vc4x9vh7WU3NEAbofLNC6wJKyi5V1Xym847MtUGHiWT3Veg3bHtk3ok93xfwj1Q6D5wTDHFqiHcriwegJ9mZ",
  "key37": "3yinhdAKRH78T58KFekwoSJ4a6ZDutU8Dzpegh88P7CuZ4JBUsFnrMnaJYKgXSikp4eFQvccHN2RjVa4mAwkNTD6",
  "key38": "2HEcbT23dA7MpgwZr8r9dMzhV6f5Sv212YDrNgsNKJrdVVUcZsAc3NCsKhNy1gkHzGwxyD41hdqzTcoUfF9BmUoE",
  "key39": "34YbWudjsG3DyxxUUYLUpB15VdFZh2PidRQoH5Mg5RJ5WQjQCHbcoeM5fVc4isigvy8HX5BR22eX6r9MepppBJrq",
  "key40": "zVaixEQJYCMgir6unk2Dwg4y31GoaQGG4c48LiSRiLDteiasK49WpTXUSP9e8La7TwX7YSuWjkmtmq4z8g6Mdq7",
  "key41": "5hAY9zbGYNaGJxVWrCyzdtD9iBuHAQawuZPeTu9hrR28XgMHLmQTDKZDbgLzmFKxCM2ftVVDDk32BqNCPoLAZha1",
  "key42": "41AuiQ1Qqd6Gp6qpjw68W8GZQoDbbuDNnnRLCmqT3bTY9SnTGkAaBZBHLVR4WBdDEQiTw1gDQBM3WjHG89w6zWRN",
  "key43": "3eHRiYchMNAEXxZjg6T15mnE3KCCNPJRUtEiXa6EXTvKHxbYprHJTfNBi4auR2W3qxgbEkd4yrFSHyT6Bwr4hAKQ",
  "key44": "38NbMSJEL4WgobEy9qzr7kGJy6dQXQcPH6pva1YLSE52FrF7jjTg6DLqXqTUhnL2554GUiz7eiytChgR3C58Q7rk",
  "key45": "2N7u1YC5RBLNB8Fna1toVbEZdmXCRAtdiBhMasknoo5DGqqVQkg4NEU5nT4HyGp3632hGc5zhs6ZejSW5vQRMBU4",
  "key46": "5ftndEn8hvkQHv51RPiHpacuTntNG3P1NK4azRz6y293cA24tRoWJRe7DTkFHrXHWC6WH9UmWrNeehDrEggHwuob",
  "key47": "5cqNjazidgBdEWYe41NvNubs3qWur8UydRprB98j6KaWrJPtQURfxNc6CS3xF5cLJtaCcGBBwuXdRugroE9QiDVX",
  "key48": "2MqFZQ18VX5EuaXcdZYGyWtjxF5UyN1Gub3Pnr3Rkn4YZdAuaw4teyxeGkAkRaPb6w5rNF7LxxBHCt3PPgAty96L",
  "key49": "4RG2KK2arCPNaJN6YM6eJJT55pCokLJPn4nYwnP1PF2KVQMvoAYeopnjYGGcErhjZiGjrHC5irvWEUzkYPsfz5W1"
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
