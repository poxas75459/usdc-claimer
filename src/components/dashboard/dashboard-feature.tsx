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
    "2p6cQXNtbbY4GpLxN2soGP5vgdmp5rTsfiuT3S7bVD9ByhsiFg8JVVrE8ion3pBXUaKNC41gE1sgpLmevd2GQNM1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21RsDN5P88bUZWhBhu5pCZNRNDndr8jK7XhwHpr8XpHRKxKyGRu7txCJNaTUaK8MryMw5iBdnYEv4ZfeJTNQSisg",
  "key1": "5eGheuwMjKPLRJQHJ6dEkouWjsY2KsWGNPH4jgP3d5ErB9t44zxvLRXUfyupBvDCjYCWRjGhfBXoyXVwCEmVGTGU",
  "key2": "3M8iYAwiqV2xyXvNXqhUXFMVu5K5FVyXpTKbjuih8aktspZtoxbvSUGUpAxXKiYA6hRHuLcj3D77xErQSeQ5hCfm",
  "key3": "63NXn7TWRNV1D6ABCFfhDEvLSKbqctyfSnNXwkbwXdYcFRbRBWFwGxrnYqRTbCZjHppJ8CyU6EomZ8zJ6VwNi8q3",
  "key4": "3tEExnzte98yBY4nTX2vHNqvovR1h3wQTKfcC6c2UMkFrTQEt6PY2Ck8xvHG3UMTemrF8JkAv6jdc5R3rrMVaoPC",
  "key5": "3u47auFopzgoU5wWqwH2yUqChumRKvMQz9P223GQw9cFtTx8nX6DhVcbsyrwkJr3APiPj4xdqm9cFnNw2nG5kPAg",
  "key6": "SWkdM67aFkhEwdEZPMkUThh7zDZGxwDvNQx9AiA8hu1tfFQEtWrGSCbH9iNX7rejHcPQnjekbQPtzNHiPF9xuxy",
  "key7": "AzNKUSJEVafhndEekKWR6dZj2tLo2MR524AVY42Bj4VfKVcHX16QukNNXbgzvcynTSqm3AaAkLA45n4XKY3tisE",
  "key8": "3qAaCgewpCjLCAxujSeWB6TjVxRA7MUXVVPywVWpG8r6gSGh7hEwU6BWEP7BN44CVyC9jFDnvn4abCn72a9cW6iw",
  "key9": "gbhtDZ9CMfVv2Aq5ZodoedGhUizfqBrxxBVgoAr6vfVu45zQZL8kwnJAHAskJFhQRpghgoLCULQQSnYvzw7H4Fb",
  "key10": "2Z3H9YQ8ZzUfVqxup14zU8D4Kg9zsLfUrexostwSczPo7MF4aM7Xcf6p7QtHDJy16qZhQwG3GgPx4Zoyyyk2Rr2k",
  "key11": "21m7RirPCNUfHHQygxF7LMFSQ1LvdDiTJTgjPoAhSYvJCRVi33uzsbsJCER2iX8tkLcGgovNyq42prcm6UbzvS6Y",
  "key12": "KvtY9PwZiiL3sdpZ5Uqambr2KfoCJC2Zssrs7QtMtht84e5V6N14h6tzS8ma38HRnVV1AzTwGRbNcgRfNGXXcq8",
  "key13": "5TA3LwkHTWyYV7qQoE3zgkcwK6C2iN9DMvQQvF9UgoHMqTt2NqnY6p2hW2sHRbjcuWN2z17tTLBNAWzVDtVg5r4N",
  "key14": "56btc1nhMBQNLRhfzfdPCK8rvNzyRsbWoo4VdRPcfvKvcsY6PTq8cPMCnKSzo6wstxJMdDX11M2tJVw2p6u6hx3c",
  "key15": "QaYYAEYLwF2vMS2KnRpkXbZdxapoZaMki4nv7HLizDK6KcVwofWNoEHfrDoA7dHHABaUf3AxnaUEE6nDZH17Z3n",
  "key16": "66mMer61Nb1XVsezvy1Ad3kcwfY5wxWPRGTnFPFhYfRcZrUHDpDv2t5SmG6S6aBXVy1wEwwHjLTi9GMJRAMs5Cz6",
  "key17": "4jd4Hk4gyDHyWhAh9twj47HRQiASvxoQrGNKBX3CYTZyAVAHD2GFyQT5KM49b2yRbJzhndJ5Aodytxu2WmmnpRMB",
  "key18": "41QhwH89d7n9E7s73GE3knpERpcvEkg6DnRxMo6ag9vPxCpbEfRsUDdwMTQUfwbUu529hvTgHdbxjexxQu9PfHVz",
  "key19": "5USFtzUdYMNaJufVMcT2D9DrGnYtmGeYbCsUp32dwVAZpjZY1ckqsNY2qtnPQt1DPtViS4k3DyViHZ1THuoyedG",
  "key20": "4HUTmSAdnT8JjiBFv7yrkxTT3Kh2xzSRpa1TNiQXUwcDB9sko1SZEXDzxjP5TtYDYMpzNz1HvxW5DuL6jaFeWBuR",
  "key21": "5FcgKjWAaawYs8hZcP47wiyZszfzzfiUBPW4y8F5Ewbg9ah8yBQyLn827Jco4vviyNYpGUnhc54z8aNpFPvgSzQq",
  "key22": "44xXfF9ee9Zjxptw3oLSPdDDaFzDjrHAm4K3xsCbUJg2EXG6Mbmt2FZw49cr1gomxdKX7QNDd9aRBEA3eq2MSSww",
  "key23": "37dUNugYZo7dRvQXbCxZPQNjd1svcowZdridRDzCC9xQqJ3KJdGoxTZd1Te3LiLwmqFPuMdqitGcgPxTxKTuxVcL",
  "key24": "38Dad5Be8MihZpykExPr8HLiySTfKfrPtFNH4JjXF9EbAcNa3KKwa846EUVuoyEKyadZni1ay6gCR2NTWmgJC8ns",
  "key25": "qF5U3ZiGY6G5fMb3xjw1bxKwTSJrvozjNzdefKTKy92fUQWYYcZa2EiuYVtJMS8y5AEPHSrYWBgBveRZneLAqLY",
  "key26": "58STtUjr7wQj4dzDftSnvzY4YQBrnGzCrfx5N4bUVDgKo8FPPxjUN6CSBTScZJhjhvcAVxxQd1XsCZdmm9CjNnfR",
  "key27": "48L4M8yg63P2kVNgTxXfRFKegWVsHNkzRjiZbCHmFzv8eo2GRuSHxA9rESJ3XUoRNoZqRujsyiGLwd6zetN6EGff",
  "key28": "ZymXxpZMNz9kTgVruqYzF33XiEiWmXtmNMLaJbB9kgTay74NEusLsEkbBUuFrTpQU16PsuZgMkiiWHswZbCSkiB",
  "key29": "5mwC46o5rwqVALiFEUAWgXvs94T9AiCiKskggcowwjdWjueFR8ev5Ec3nr1tHMiDD1d46tr4TL2tuueTwf6h5E1p",
  "key30": "342cZWteCQ8idVufXYBLfeG2Rqvx5P47RuLnve258PU3RPHYUxGr2hhyVrpAqJwYTACiivrfGS6peq9dgmHKJTYC",
  "key31": "2p2GWj2pciPmkh8zJGiYQwPMmaoYCk1Awmvw1UtdxETAa21PAXfuw87LBNkH1qAEmGP4bUmhDkFAuf24ULpm1rCc",
  "key32": "puvLN75YBium9pX2FBSjVQaU8zKc8vUR1GjVBRFmd1nV3vhp9wNdxNBaLYA6EAvNyfqnLQyyH5ea7YmFL6wwQSb",
  "key33": "34CVmwY7eJrtXSCHTQAFq55qRabk3THiWfNteTtLbCYGDiGxsf9PwX6Nyvdw4gz9QVxgiukdyQcEGBhyCN4nnQaD",
  "key34": "1dwTZSgnvqZ6EnbAHFazGTELQJtK8nsWG9oDwTB2WBWg78sWE31Vv7RwDJHWHpjg71th9Bw7MwUqBT4JifXLLiu",
  "key35": "2gojj6MQc5d1S7mgBSMBb6ZeeXmGMJNvVVCD47t8e8x9Rmw8BH55NuhFNnnEjzTsPmSHeiz4ymtLx8D8zwNpDJEr",
  "key36": "2cUHakKMat9qU832qwcoNr5WcywBTGUWbXPpYWNy7CciYzfPHS8YH58MXEZWtRJk2EL8axTDnfRHTKqSergRPtHF",
  "key37": "3wV4URf7Hv35dris3L97E585JFVtKa35uD5SD82SEG9ao2qb2wuPT4S4Ja1a65p39kLuLvxVyCP1zPu3cgUkhQxR",
  "key38": "qWj55sReALveH54Pj7ebg9Ve63tYpsp9XiRgwLciN6CbEUh1piJ5ivsjWRoKj5cbYwtV87pfG226iHd3tx6kUKa",
  "key39": "yfJFM8CWL5YZzDmCWuuqs4NqKE4A4G7nqfWbu3T1LaDsKWmLuaP8mo9nFV95yayAuvtBpUUb9Bd5RGgHBTXP596",
  "key40": "5smUyBtUnZvFutRRetBP8S1MBpAgdeLtYhkTKWctwQaTEG5qk3HMUQbq7SPBbqJSXuvLkhDkCwLACJNKfPuqifYf",
  "key41": "5uQdT13CoYaBJsDgSGRdjcb7m7WjaP4HckkH7CaTdoWqcWByArGfG4rFDJ81XgBgQkuDUVjfNfitErXLCWuQdodN",
  "key42": "219kZGZ2UyyQH6mVLEL5fcDPBCtVuNivvfhteTxfkrHoLvcFPYqYUHTBqgJJgALW719oRtErwzi195v89oC7hD3L",
  "key43": "3CtwYxmA2W7nD33n2qAaHLF5G1XaPQxsaD3cGtexe2iBxDnVu6AN6XVgmXTBfMrs3DMzL13xsFHP4SJngeRdfW9Q",
  "key44": "2ZQxgC8AMmGre5WwoTzq2N8afiHMiqxsZjL7TVTTkXXUZ6wwXZ5EHrKcBTqCBm5VgYsHYTsgHreizxDAHgFgT4U2",
  "key45": "dgwVKkVfQgWXtkjQGPBN2WxTCXrKHiXFCAT2LU9EneMb755PVb4eNEHsWH3CtgwqAJbDNBFq2C4SzeEeRapmKQ6"
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
