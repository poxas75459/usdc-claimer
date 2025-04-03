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
    "2Q7f5LKRcCQskUgV7gJzcYzgByKmsiysJ9ba9YzMGLhUVQissUhEA8mgZH8ND2qttBa8yStZ2S45itndWg7UCJKv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LFnUXu1czkhA6Suq84viWd4HCbxK8t5ojchoJgUTxPtjA7hhw3MhqfwsZaszSw1VzNDNBMt49dpvsWRkzXjv1U7",
  "key1": "5owFWsVywWj3Xb8JXAuijnUNZJfqB712XShZd9E1m52yiswLJuAGxSJ8SEsApvtSGZ9SXUwKfc3Boc1sw912Ljry",
  "key2": "4Va1xukVkeuTpTCVBYzVeyAuzCfG9kbp3AxQtLyxTHHS5o3angGkHKdr1faudb19SkwJCu6qRKD4MQ9gvihhkBAF",
  "key3": "23x15TpbA2s4CbpScbWQEby27qE9myKaKPoJRX7dhqogDCu5h8W16WEUnTznJSEyYYTpsPNxbCxBV3zwrEzo4zMB",
  "key4": "dkDNrvYD3cnXGLeR2CbKqBJSYEahYQGNfUDdhfh1ASav5XumBKnwiTjeecCR71uh4KLxiqpcoeh13SBWFawjX61",
  "key5": "222bntXsWDcuV1q6HZDXZy5VyQjQpCgpRzKGokFgUgkUyrAM9oqAMXqM6xYt5tBBKjagvpknLCoF8VGPCumEGrmB",
  "key6": "54BhodGFjSgngYgjW1N7G4BPcXhHk61aEtbKgo2rAm6mYigiZSK3xvQij9jfpDkfFuDm8v45CV2zrFKWwNoej845",
  "key7": "5G2ZHFBrsyhjBMATWjqbz4bqpuq4AY7QDmahEnM6Q6sqLpfUcyd1SzwDDz7WH1ur5aVvuaofHJiPJuZjHj5DaApt",
  "key8": "3ibRJd2uLFqNeDzrhRcPatfucxKFW5uwfpoeCNygePd7u3Qi4XuAwpJrcGww7fYd41Yyiwa17ow19HYzzFnygLS7",
  "key9": "3yKysdyA6CkXoaq5rD5EVQ8U9s1r86dS2tnikBtwwzSY8oXx9dpRheJZLn6rUjQtfZZ3j4nmmFAf5CrUMw3KStBW",
  "key10": "2wqaLMKpZv84ZUbhraRLQx49xDgVkFMZZooiGP1SCCJmMLKB9CxeMc7SMNX4sLsEyMcxHZQ1xyMSY7ZvYGfQVym5",
  "key11": "4xPZCeaGroS1YE7LVgXieWBQTFmB1Tr5mKtqLZnCNRf1f9nAZJBJYCyGS1KeVt9yZQMVuxm3xGVQHphNnTzedvJ9",
  "key12": "5VvxXfuhCgc5PAr9YkMbS6xKmdyFFApg9N9sYKzZKcYmNE9QUGRGH8nnbjUQD62sH9SUa3y7XvTB5NJezW3kA9W3",
  "key13": "5QxAe1bs6xi19ksZtX8uitC53F1TN2BGdnWSrgp6fdJ4oMx3rr3rEeWCuAGfRrRdeR7qCCAZpRPVuuVfWWA2aPW4",
  "key14": "MvHN7d79N3CLXVPuFMFVch2J66un6rgtfZstZmDTEbAD5imH3m8B4HLfcJMjykfoNnfVLPQ7cn1PRU2TZhmc5mk",
  "key15": "4fs8dUkKpkEcYmDWyLZHKKQ7SYzXQkhsMTqpSHdjUWSzzwBQftMtvgvrTeZh1pKnHvtcLVSjAcSXzAJv14QSZcYj",
  "key16": "2VCgf7vW32TEdd8H3jEQFekaboh49TDx1ckgviVMXRxntZgfdJYgDu7RcQXCacq3JXqNdoj7YnYae93Zx4p9Aoiq",
  "key17": "5u6iJ9wVSmnKmg1VsQvLJL5c5HRiH4ERCTPfiSUjmT46LiyMiSjeBAJbPVG69Nka7pU6cPTALSZyCYjxiby3Wuns",
  "key18": "4ft6N31Y2XBTWLAy7SynPqnE1FEEYs86hgj3ppvwVjy85CR2kiCkBNkLqNYbVAxy6usrrhmSm48RdH7eSoGqZnwh",
  "key19": "37trcFM2Eae8WNmVbGaXHuVkXM4VvX1H6c85QFetLMBMUdD1N6Emoyyn1DVNCEjnvU7gZyUM3E6obdoZpri9KV14",
  "key20": "517RGZ1vMp6zxrR2V724UeoJ8HL2ciTebyCkA1ahomUcW8pcQD8epDoSN1GqGsTkZ9BsjguDRws59Q33vw3GgeaZ",
  "key21": "PNGBWgf7PdQy6q24eUFFcUBiic8Xh7gjb2eVRV1MwfgUdi7NBi94bNLvgpZxmp15jdzM4TGEaFEEByNr3oW1HMk",
  "key22": "2ndXnxbBMfFvXECKWKHtvFiffto6ubHmF3YdQ7Jz3C4H5xL3GJcPNkZRkEF3LTtThSpfyq3DiX8aBfjyp3GiaB9R",
  "key23": "4KVafA9ufJHoSqBDNJcYxg9pT19nPMWk7oDX5VXr3WPZ8Tkcy2uSYgspkFScse7oaCRhsPK5fAKFK4MMVi9cnKw9",
  "key24": "5ecrPSouGbJbtbhYQvgvK1UUWaKZQ2zPkGit7BbyyiY5HUoFJd2XkYLwuht62W2eZZJ1tS1NVSPtsa1YCS7vVg1F",
  "key25": "ugGBn9XbVWiVBmGQqFDbWZWACkuR8Mqo7GkVUs3G1vKANBETRyVP4reBfLWVTLnx7t99XBJmsNXEHQqZfh1wyuW",
  "key26": "4jX2aV5Qaoxwtji4c1LA8CsKMYkwADVVg34vsQxZZviXV9DjH8MNqDFAoECaVT2BRZcamYq8BcdF9jt42BnTYdm",
  "key27": "4QBybvq6HA1jTmNoKZrWViqWfXkQyWg4bpn94E4yPEiEjzbQoLBt1ywT3VEpP7wXZr8xJTgnny1BWSPUEq6KeSCZ",
  "key28": "2odGD57vRmEkN4DVpbHm6cMgT23YfUEiSkGfpCVR9KMfSbYeEvUp2hUfkP4sGpckbhnG9e6eh6VxRsj7zibGLorR",
  "key29": "H7kEmwKH4877EuqQUHLqiJpbPdbXAygpmpfS4e7FtX7rNzvfECNHE4Z9YRhmKonh9ScNHN2RBUGHo3tPVYinNBR",
  "key30": "2mKtfXs7zRYwZybkR4TJR1E3VzvAPdb9TDtaxZHwSFFRMxeGXBbFRbEkKzz5n6nS6CGkNeNNbLP6f22oZznoqNgw",
  "key31": "5aVTSnnwJZkwNLua1ZXMsMW23aCniJAupw7HurWyo16mVKibbK27wpcbhA7vrHXGEqWqAoSiD4yej1ULmUN5NDAB",
  "key32": "8ycYAniyj1ofZj2TsJbHTtXpMjTkHGxenLow6BpeGGHwCy1d4FyHYzchcQxnS9VyTu3pE3eTirYsvFCYJzWK9mp",
  "key33": "5duLCKNZ4FVni1AFjZ5gdGTgv6BskcM9RsrxiSZuvsz6PbQ9HCWErvfYq4JbUcjvrEN29XSFTriLUQQm3tjwAGVv",
  "key34": "3aQjWpJbtnPpA2gHjUTNMhHAsGjdG7s9T8ErvhCe8SWEtyRHy4a3r2uq3g7n9ZQTWavxM3pMUy2PtRreNoyCcqjt",
  "key35": "4y2EpH48ciRx8feFhS5jSNvspzZDeU8LPdYNCyDuBvdMNoat1D2SzaxxCBFCLwpK3WUg2hLensFFSVoynKKt56QN",
  "key36": "AT7GKCRth6UWn3UPCRTn6MEDNtFeuSHGWKeydypeSbjKBTPfGhuX3QyPRd5Tpmr4HJCoUBo4EZnCmbVixvQzdW3",
  "key37": "31LTtUun3p9H9NEKBYBRNeFWhMk7Dm6mbDouf8bubiuRhpGtyNub5ChK5AoWEg4bszEqgKUvyzpw5ieJZutuNtGH",
  "key38": "1TdAq3LStYwzcb9M2KtHS2VK16bwavJRnGJcBoix9jbppLpwWr3qSztGTgjApAHPreCJ4Ch95fcNZ9zWgwJha79",
  "key39": "4yBGX9ejiwU6h7psydsjg9vKRFd9LntqMtFNTuTFxNFxKDFwwB54h8vy7ydH348cLjQe6VpBFmq5RfoksEXwyc1d",
  "key40": "2n35jpN8MSwUkR5rghHeYHUUhzUVcCFD4Yd7fXEEDXQtUzJa7p5546t1TExU4Cury77NDvu3yJqNo1WJtya3D5NP",
  "key41": "4AUEPoumk2ctEDnbzUEFAEhFwQUPXXzu6mUt9aeNMLsj8upJDacgXn4wS91cj6a6Arf9niGk3hU73wbgPrHYRMcJ",
  "key42": "4q5ZvEDsU5QcGPE5jvgZA8PnCPuDfUgkf45fhReg98vmFsPxGE7EhmrVknT8khzS6xifG3LX12b4rKTvXrJhom41",
  "key43": "3rzT7mdXvFxn3H364B4QcTtCKDCnp7PLXnk1YGejKvZ6Unjw1hvUUzi6bJxgFRYJ4EzuUUmnK4SkCG4g3fpoeQRq"
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
