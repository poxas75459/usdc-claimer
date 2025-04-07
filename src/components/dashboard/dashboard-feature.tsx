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
    "3pMF39BiadNVSUtpR5BQnV5qY9doXFn5qT4aVuNxcaaML7cLmnxf6kRMy63fa89cofQ8BPQe1CabdqgFYT2dMzPN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Xekug53PtBYDMreXvBEm4TUSuDoNf4HMwG3c27DGgPfxFRSdoa4ZkWy53T35ZosnHoVmEScLzgByHbV7aswGwGu",
  "key1": "3RRpe5yqrryt2aAaHU4EvSxZZYsCnRmNNH1yauTAh8R6Hj1uKjgbsZ8CqbrF2p2G1EHBawioigeZJkwQ147mfdDp",
  "key2": "985JT4hf4pzGiz1uaDUNVZSNte9cAEBc3mwQCk5oDCDm5FSbXavRoCPTN6krk1Wi9GJoLaSngdVjr87xt82wxG9",
  "key3": "66NVk8vg9siXhhuW4x4Pe2cPqz841A2f59V8F25VfNKeYSYaG4VcwH5qzBKwFHopkqqAqb6j1J3sEa6pdAswYwov",
  "key4": "4hTUNTEcg41z3iL1C1w4Xc1W8oazK2EXqcBPqHU78brXdWK1nwVujYwKszZemrC3wpGTXL8odxnbMmqGHaodsqbn",
  "key5": "jN9mpm73P4jfQ7x52S3sNFWB8gbYeHJc4TYPfrKSKrsHZUcJUWNCUoF1oVEee5G5BivnfK7CsA8i4a6L6zgfA4d",
  "key6": "7oDMXdixmQpD3woUP6KGSThuy6uGc3VxsfTVM5w8uV2ryGru5DhdsD5AZPEuR5h9MZABz3uDoVfv5vgLDGMyBK3",
  "key7": "CraDhkwAkWVJmE5RjPrPSnupGptGzquN7CzkTmQxpzFHer8irGAgdWYArpPBmg68JemEwSX9YszKn2cDgiHzLFH",
  "key8": "4nnYDwZBJ8AfdRfyC5R7syY7pcud5oJR6EknhXwfHvgsjYABoHhDtYp7srUFP26xwYsLmM3o4QTXQkA9cGrLZEyM",
  "key9": "3BeZvahGMNfcEBmev2KRcW53cMyW2rn41QVJoJ7ez5iutXPCcwUjrdy2cq6zVw7scJBfEd5WTaYhxZHiMibWiHNM",
  "key10": "38nQ9khAd57HPW6xYHfG9VkrouRff27YCBfkXcGqdGAGbCFJWX7vFiyxQQC4282gFqGPmxPrq6NYYk98neFZjXEG",
  "key11": "2VB8hPJVgpnbTmpH6mAaUQqZu1B4dDgXFbTSk6bDVB3LYYuYGgTCFp15PCXgUyTnjNRXFcxssq9z46AdWVaReEaK",
  "key12": "3WGLHV31FM2RMcdGeQNeraiUHjVQR4VbcJiZHihJLfwHm5r3ekcTRvTE58Wek3E81usJ37TiWpEaR4d2xFh5bQh9",
  "key13": "5WXcDYWrC5zCaNF2Dhh42fmZwRYF2zqEDZ1mZ8BgR8WimBXJiaaZEhVdNnqrYQTS6NosLG7jYrsUTdmNgt226tFa",
  "key14": "2LEC5aubP6tFiU1fUhL7spt2EmjVQ7oaQkbDq7rcz4vxCceCswahpmm61YeWyP59qruwrHtSQuS2C5sD17Z59mP2",
  "key15": "4zxU2yfoFFJVjuBznCECDaXcjhv4BvXpGWHF4CEzuzzucnsxT73pUib7r1Wi7fF5HKtHyBiiLaEhXN2oKeVbrz1P",
  "key16": "5uQRX6ByqUXfnSrEzs1Bk8uzhds8npDX61fRsTXz35RSNJxy8npuHKkAGHE38528NBa4QksYCR8mHWNScVYs9PCQ",
  "key17": "2CSKRcmQW4DiAKHwN5yhvaPPB7zfjGRQpbCaqLbQSpyL5vsV5zLnPUHQkVBHNqiBoZMTUQ6n3DoA2NxDjQgU2Cas",
  "key18": "2Jg5f6pxRL5uB5Hm9Q1eRDtcCWFCdrPbSgGU54cKyLzp5uS3fD2HKgozSzsxVtXdQc9rVYk9PHLvgVKQCePLvLQt",
  "key19": "5h4sD6gkFiHb6ANhibLjQJmSHp48vrWY5kh5ZgCZky7Qjyzp6n27iPPTrtnpHHN7dgVB5U7PesqNCho9fboYkrYP",
  "key20": "3JAo44EKiz2YkDriLGvjq9Piq5dKEosBXakZY9DLauo9cVGYy6SkHsXnZcBTd6dGMrjXb8Zwsd8nCHzApStFg6b3",
  "key21": "n5CvLcDdDwb8g5DZRQCoFFbvtj7EXE6xXEmbdd1vBLnH1jBKHk8tkhgUQyfKjJCsMHud9qggbG4HqmcsXTSCU1b",
  "key22": "3BbLzj44LF1XxQTcPzNrVjKAd8qdMC8tnNJgynVnpCpaY6VQQEVkwKudmgmEcQuz7U2nefuZ9ayYKabwb9bfzM5B",
  "key23": "JcvdVUUADkjaps5P6xP1ymmVeEbNAXFynG6YnJvQiHhzTW5MjJUxmkLoX9ENH2MEkkaUchySpWfjFBHvZu4ZceT",
  "key24": "3exfT3yactu7xMijKgMGRC4PxpmHqJn7dKWfs5xyXctrby76Tc7y84oFgirH7kxshgNCHqiEgzuMuQXYDKEN6H9G",
  "key25": "3FAw6GAE8oyMUrXtgNsvggfWJG4Bw87KchmkpHq9bSg97E57Duyp84nt81mj1NjguCXw5WHUf1S7uDFoLebimiGx",
  "key26": "3yxRWDRaVs4bmkNp3EoxeNGtHf6PhT2YQA4bdYXy1uUfrupDYW2Lc8GMdMmkv3aoKf3U1JBh6Um9QBBnyqBeTwzW",
  "key27": "368uSLX9dUNPwEkQ7DaG9EGBnvEiXmhBb5Us1D63L8H2AoqA9D7QwPPsXCc1DH1Lu1wpskJMccRnemt5wnxDAMD8",
  "key28": "47M9NuoxqBAwdySRrSyDPR8qewWcTGEpgCPgmWNKdtqtUytoS9tBqGQXDVZNbGhAX2SwyQJ3yANUR5VXdhTJtEJD",
  "key29": "2VdydKicjJhHiDJP64BxZFybtQ139icBU9Uhxum4XZfoWJwYqEjcTWRYaFja1AGY1aSUohVH1KD8n3zCr7inGo9Q",
  "key30": "4taQMdELgsbEmYonyynQrNDD9HS4Vi2j1MbjxsyqH6UDeh55z9D6enoJLqvn2zJE5CWY1DKcB9dFHnyz2jPya7hV",
  "key31": "2WEtm3zjg8BsAFT1Ro7LN1YJYmU9qWGvhxsNGymXWPjB4iFV6Fo6HJXX3sAjNhQrGp8XFvXk1BqkPoPANV3ado2c",
  "key32": "3zxR14Ez8hcxL9qCUn6nirb5Sa2Sn6pYDFL87MzE8uh66a5eN1LmrYkS1r6J3ntNAWx6X9YSVu74hKatopNRERQ8",
  "key33": "4cP5G7pc7sgzxSmhgATC5XQF9QsMSZ5s4sE5fYUmxcyh94gUBrq5idhqHQeuA493cHzo4H98fJh4V8dFfVR6s9x6",
  "key34": "5ZGvBUAGmZVhmnHdWnCCjzSTGzYYMpyVTLvvfNY7trpvXUpsi91B5uULSoAMrQTzga7Hka9kdghLGXqZXnxfJNTb",
  "key35": "4MbMBjtyVybrMKpj9UQTFQAzSqNyRPfbq8tjxYfqUmryQettTQPLvuXRDs19pwvgujPkh9Vc8rkRkNs5QZUCrBWb",
  "key36": "2cenena4Y2RV9t163Bw8bZwRJTRRxJUbBJtgfbb8zBfmQ5gkTrqdXxep5B9xT7QgqAcqvLTaPKPUirLvQ5EwXzmz",
  "key37": "RNqxArRicC2ThrN36MAaGjmGpB3cnwzEARnUYdMHNHcZ1acZoEmo3w1wDyxXaG93wK5h1WLeZXWmRCXEdDxLgw5",
  "key38": "4qEDYRsjWCCm6a2NFRwkzcHX1VjDcKfECwzbuShpnb3N7QHUTJynNiACrk9Bwz1byCH3YnCatZcb6TJQFYRxqTz6",
  "key39": "3oKVzauZdWsFwcVBRjyXZ1BGcoFiGfFhnKhFKQeDcxJ7kuNXCqCwX9QGKVGoQfbVW3xS69SeoF8Am5WE9mrKQCc4",
  "key40": "2CrYZB24Uamr6QwRywHxWD3Mj8wuh3FUMkzZaCa9RAmS4azbB15TeAacc86tU2RtdAvN1qm5vTRQMiMqupBEhb2M",
  "key41": "2PrLw2jY4WmSFDgcrEjfTLyg3WCF4XLBdTPbZ6zUSaLBD5Sa1TNKNV3MyvgWgrcqNdguhLXw54zfDzQ6ZfcsSmZz",
  "key42": "3x1DedrxwDA5eaW4XV264ydY6oUnVaRj5VdKeGuzW3uzwG68Xfo2FrGKLeSH3dJK5piqGWRRnL37ZrMFM6wZ1Uq4"
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
