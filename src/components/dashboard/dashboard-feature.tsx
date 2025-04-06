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
    "3XmZwvuvYmd4dhdND56EdPGXPyRWsoXE2ZbjoFVCR6BxvA5bNhCZb1ZSToEowg7Nyj75kCW4DARL7fyW8Xe6bawG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UrTPwGYCkEz1P5cxHtvUzv2FcWBRTT5bkARXvbXwzUkdWtnVAvJMkD8agpvYm1MKTjkxNMZ8hA6m8uMreoccAb6",
  "key1": "31pQo6p63ou3piaNz8CutF28e1QhTS45qpo5gCZ65LLJvV95SKZQoo6GGDSyd5xWFra1JLU1SrM16HAkfYzv17Ew",
  "key2": "3qxb5ELcoXJfHXbwo7MhcWNBVXXpXd4rzaiE1ouL7bbTwu3E9qZ65GA7zAgosxPe7SsMWateaTQfF3C99bU9rJWp",
  "key3": "639MbCLCwt9ebKsmEJqLuc4Y3agewYC9CC28Jd7dMYbtxXUSNR5gauRFCv4g24Vwkr4uuSULqCnUXxZPiwtnm5Qn",
  "key4": "4Rzy63DKDrH8FvQM28ir6btWsm5UdhHtm6qgEL8roo1gP48XCDYRBS2fuq83ELNs5YSi8aeiVe7DesWzYXtq9fv4",
  "key5": "3LAbrGCXeoGbEdknSsU9hgRtoEtLwfWzpounTKw79253RiNVRdeUFw7sGSe1TPDbmmFBxB5McXXaW4cZyxUCnd9",
  "key6": "52g7VsdEmTCWmLpuWyiR7Q6DrsY35jmaiiSfcMaLBHqrBniq69xTdXgPwgGcY8a4H5AtSLP6KWJ6TjH2kKeoUWNC",
  "key7": "2iSzqkRrAtNQYtJMAa66yHvC8HaFLTrjbd7bTusnZei2q1xAc8vCR6LpDZidgCqs2gBGBfyp2QKsDwkoFvTqXpJH",
  "key8": "5W3Xy6jzzxPqF4g43dkMhvNDuyHhQfjWNa14KXnewdUgt1QFYA1rbcNU87DRGUqVwdYWGZVzSNE2pDHD7h93co3s",
  "key9": "5Tt7bv1r6ANVBG2hjx7GyE4kD5e9gPGuwDtzxigxMoPFnY5xnsppnHxoNPaJumk5CasVBQ87KtnPK9Wnm6pQQVvC",
  "key10": "3mG3KAVJRC9Qf5KVLBiTxczg3gqvgnNPfiZhgQKDckAjTimw3xU8x2Unb2JELZJ5g9sgLv8oVixgxBKWXJFt7nkA",
  "key11": "3qoijBtEqBRcNmwLEwquUn1FZ9xzTGTi4wdcXGSwQKcaci4ucA5spu1fzmUYmk7pYuDqq5ydvhYKijJS51SkG3w8",
  "key12": "45cnS3Ag1UBjF3augKF4D54jLLQQNuj8cbtCjzoRAvMbu9Zaehcewfro5kFS62vXeqPjLG5iVvxeS9RFjj2pgX8L",
  "key13": "3jPdgu43oeBXeumHb5nQufxgSfBZYk76iRzHNSagG8spoSPATq9RLuHv4cJcjRkFtKKNWyK77kU2grEbuVZooDA1",
  "key14": "53k4GndaU5JhPkTce9CtM6SBvymVEMo4gUiMG4Cruz7Z6dXuFWxrtP1U5S7a5YfXvw7AasdCEZQZnCaz7xCESWbi",
  "key15": "5RrXnJQj3p4AxTLm3nhzx7YEnWQy2d2vJmDiNTVqvSSQR9A6KzwWnmE38FNs4xJAC4GdrcvkTYHoaNRtj6eF3UCW",
  "key16": "2iCWaGWhHRGDWdPCGety87MscXh9omqpLNYBwQtQjzjaWyafrRpp55izvsTaNp3q8PLSE9UBrtstnfxSXGEgLy5o",
  "key17": "5vzcG5WfgGSd1DpaDvrLhCe3LpmeP9QSKb4nUVWQfsFz7zbgLsF1314DAy6VQ6n8iRsEYeyTBgPYfytuscXsbv1Q",
  "key18": "2TWmbm3sBuFVy7VeLLK6C3ziPijg5V2ccmb8cG4jve4ARPQt1MNaVWSbU3ZvRHJT9U1HDYFxDnGqNBUmeQgDEuKP",
  "key19": "3MTgYZvcocTSM5GxuzhS33h274Wt1wABitnyVCJZqzAdiUCGNaBtS9hP31iAvGm1zkv5nQ4Bo1kRxKgGmrCEgqV6",
  "key20": "4UUB6dwdzFyLuXFfeNfeJwQ7CWv94edJzm2A2ox6jfoFnSU4wB4fGeB4Cg5YBLZMZ1oS3HwVdsuSXMexfgsvLHf3",
  "key21": "4CdBh2o1AzT6RJbEScjHT6QU9RSnamZLqnVp73EoQJMo4uUSdn9ieoHdfLbXPE3AP1ZimucKtHPrJsikHnVvVfEZ",
  "key22": "4dNTyDELiYAQ7mxXTHFtRMPbonHKf2XCoCc1LRb4T5cfAwb8g7S3DcNM6RRHpkSHLwPiZnC8vEFdfk1M8yRrSKu7",
  "key23": "4fzt7fFAZeV9jEU1FWvanSgwFMMRTsgRB8E7788QPQB71uPkaAVfygB3tfKABz1hLFfnWFrE9r4QRsSZCfL4a6k3",
  "key24": "5nsR7tXMhTpGw27ndePhHRzEPJiXRZ75HwQWwAPdKXk6rtHbysDsV1SHf5SY4ULBUKVNu5TEteBHLbNo1evRCGxv",
  "key25": "3s6BpVmUhtNmDYm65CKaoYsgccnij87vHhRxEnzF3av5aT1omNcP6RwaDGY557qyeVBLQotBJd6SLaaFgcqnsr6g",
  "key26": "4fqq1f4VuwemTQU22VhDPMxNVE2EN7cLcZK8eMwW8L67F6sPqgsZMPCGD3yq4HCaF6kofJTT6ibgjdci23rTsubt",
  "key27": "2KmLPK3vdx9uRP2YNT5QvkE4Q1vqwTA4arAWV9uj9wYBfR676YEE32d6JUSiE7Hj58AWkkQHBQVFFL9z2nUkcLLT",
  "key28": "5ZDMeZySLQDP6JrZZ6RsWCYD5TbitvmgsMCXuEKKXuf32t9rmJX6q8Wyfj1Custv27N8998WCJ4ADrkXyvvaqmTE",
  "key29": "4rufuByDFXfWJvLzFw6iEQXERm4pfeEz8HqgfyJ5Nbfm8LUhypZjor2ZAi7VWf9ZHMianfoSPV6Et5NyfLh7ydCj",
  "key30": "5qGGQGbpG7SNfgo3zgAtwPUPhUnQxqvkr6Ur7qjego1sYsE9R2TdJsFqM7XZW82VRvp1doVuGFaPgBaPAue2ThJr",
  "key31": "2RuHVnfUTKx1gNVJftEp5q8k7VJtQdcJqqwpqvEHnbkgfLUr4riHrzqoNyrwwyAphhyQwnxCpAz3Dp2aE7vcMWvt",
  "key32": "2SudmwdQhRfHTWR1jkd3JSDQU2BEuQc5QXFEMYsfNhhQWCTsSZKsZQXFfjHFJhZP4tkNHjS4ayUtL7aC4MZi9FP5",
  "key33": "kX6dXebw61wX4YyPu2aaaYTHEHxjJCpRj1UPPKMzMXpPtTrG6dFQhioeeHT6nszUVnNHDVJduYzBFkw17KJRcHF",
  "key34": "Wmv5MBf5Qcqwk7dbwsrQn4hxgF1qrtv7e3tLR6wPnNTvXUbSpkH3rMmrkAf3vt3ymZzzHbi37jMNxPBTUAFdTwH",
  "key35": "2R3fPb8mxudq6x61jVj6EAjKQDoUNUFuaA6ip6kRvorFfmMYoDg9YjLpVgPVPaixR2yeHUxSUk8CGKeiFJDNAYCN",
  "key36": "1R1FnZheFt38XRCWhmHS8vrRrkgayHfRJCL3pbxRdGf3YpicP6B5TrCszGGdjTfrYh3X6jBhQSh5Fsh2U2d588n",
  "key37": "3eMbEAZvyaJQPwFkEYimWgQPKWaU41fN5LAHLbBQNMS7T2Azzye7Vgo1XwHqUftTNpouvSz5CUpkPpg3Tpo28wRJ",
  "key38": "vsqosfvQALZgXpYSBxsGyiSLcTu6UZPq3dqFvuR2NEvFveYE58heY8FXknTWsaJ26oajM1TPKcGzSoecZ7FX2Ew"
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
