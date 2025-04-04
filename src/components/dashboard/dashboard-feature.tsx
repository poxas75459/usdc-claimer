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
    "31SZ2n7Sk3ynrFCWNdu82uKpDL5tFte253c7DRuCdsDJDXFXaYHBQe5yeDSt5PZMAGgZ2C6YwUk3v5dm1Z7UCTnt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ErMpBzRmtDJiFm3yhLTyAWJ9btExCAvW1CoL72m2ACehag5MangbXsAr33qB2sLC1mceYrfbX2N3Ga1VFVEfio4",
  "key1": "5XCHm61idfZ93HGFHjwEQFTiqUEq1VXw4dECFCK9zxZmUbtYzPVaFJMfnLPouefPbgxiZDEHKDTytfmcRGHwD5MN",
  "key2": "2cPyJaoqi5FEk4vmd5EBv4uJyoBFce6XAwvEcrccwZJNUAvZ5T7T9vj9wQvwNMkX1X6Jo7W2M8j4yRt3XS9ddWuk",
  "key3": "2GdjjgBiGcB8tRuEKocPDq35wgiBsydEwX4zJDautCHQL4yQbmNDDKhqjeerxXEYa3dwqvyo5wQKorrPkvan5KVH",
  "key4": "3FZweCVZdnNqKTFLtsoxiaSrYRfy2TYSd3H57WA2WuG5WxS4Tbvr6TZVNbvacLN6xys8khL3pYLk2zEN28Jq4sHB",
  "key5": "53nBCRpDq7G7EE9cix95HTavott9tjCcW41pGYBaxEVibKz5d2AMfabHqdRYA1tMi17ETkGxDU35V3os6fmj8chH",
  "key6": "61iPBSeoCVqkKtUEcCveY246zN2yMwYNLrT7BvqmeLJ4GXqZPYj8tECc1F3cFwGecwx5VXsuxW1kpmoiBMfybpf6",
  "key7": "37RGn5SpjMJaCGfxTseqqoH8jYeS1t1aZ7cbMZduSetpjiMwwSxyDJU1wpM2wUEcCh9kYJFoaQUkRC8LdeVZ51NA",
  "key8": "3SDUgi7kCD2gYpKnCw4xYdhyUKMShVDPdWP5LXmZmpgMMx2q2RjN6NeMM1A2yKnznFrNpVxSAiq8QFutMcqDC8iy",
  "key9": "5oLt75Dmd6yzreBpKMVBPP3JJEad7zr6HwCrwaSGJq2y9VeVBp3bs9jNF8NmwAChqYKGj5f6VN9QzqNPz4ZWTS9k",
  "key10": "3Je4dc6ucDLkWEeE2G75LgFrz2kMAPVYuYSJfVSxLtNfcEC8PmS3biVR9Cmqyju6NtvRE9if5G3PVnXiky7Cfqqc",
  "key11": "5TREUHPPNZjwY3SQ85BR31m9XYeTo2nB1eSywoXQ9qDdEGahb58j9XqvMk9hpUSxSBdZjLDdnriHf8997eAdHQ6m",
  "key12": "5UxDRhCynkHRj2hBh54VvDe1WwfyqcnMHuKcFM7ncorp9xtEuuT5Y5BzJTKGg5G9A1noCHGfjAahrVZLyVeVF22b",
  "key13": "3jahuHsgS6XoHQpKchnDn5DpMQUQtbsDk1EKjTFX6gWKD4JTHQYJDcZ9DeHA4TABAJuG4NfLFA14Hd9Af36ExtaR",
  "key14": "4yL2hoC87e91ohcfhzss1P5WZevnkajzZvZdT3zr3yxBz2tqQYVgzySzwXWvwjErV9vNakrcBmyHUbhdDvrknpvD",
  "key15": "5Ps1ucbaNi47SNXGAzhsoz6xpxM6SZ8UjXtzqhVcebptoQqjeL72CuGA7E4RqDeJ7je8SiEZgRhpJbS4u3ywo1Uo",
  "key16": "UayZRBjEMQ3w6TnXMsUdtkY7Eevzqb8D5Ku585wBDHDn8rwi2PhYQJQQnLiN8JkbYPbamSG8rhu2Hv6k6Bbvruy",
  "key17": "4CRvruHxtPGmFRda6n2q78LwJC8qFPaujciWNTdmucEvAwxmPUkH2uRygWiz1yrRGEBzRtJnoJ622ZmR1LZxLXgK",
  "key18": "4vYmdPU2mm11y6Md2KKZt8eXSsqBQqkggKKxT8dMeTrukfVyN1vo1RwYZjaGYd54GbhVh76deWy51Ts3fMzgV8o9",
  "key19": "2wYdgG7LMRZkbbqunjwUVVpehhyk6s7bQL1Nrg5HF8c9tqw466ZhdzHPkPxnCiDw3BCSbfaf8YKoVv2usXqSrUi9",
  "key20": "SWPYHg7S75gf7doPksdfaaGZs9S8KfP3TNpqi3bQF6NXi3dbhtvVMhzqejBjuA2SpPFoPJRkcRY62RXGXircwaL",
  "key21": "28N8Ldk5cvCX4RAUFnWbdZ8cuxm6HwpEhT4EUZVdaWcZhyThxNrXky9JqgXkSGfQcVCArqEmwycJezWt5HTAgY9P",
  "key22": "5dmDRBR1ZgVz5HDaSDXDU3PFFQg5wHWPF6EKVRVg89bWizYHREVFeBVbagxxBJWqLiQoFHAKkJSqGXJkBbQC89bf",
  "key23": "5QzT3C28ENMjMhqXan8EnemiR4TkYxHRwR6YwM4id1n3gChPBBC6t4LkB11uc7QQPNHxwiCdaa1HLdXiEWtvUpMw",
  "key24": "2JmLQtf3Bfd2nUJ9VDQKpX4hq64f8z7U3t2WXqMWpk8ZRCDUgRuiW77UXxagwEumrRj4oFs3TzSd98KRgDu9t4Y4",
  "key25": "Gi1wx2JLBpMduFsWTw1EyvBk4f8doZCa3mFyRFvg7kU4jtDDfGAcRkHkh3Esd4Wka1BnvB7HzPQsieb6UyJmbXR",
  "key26": "4UkC7zTsz5SKfhKCYbLsbAsBTMpN4VwzJHKHYPQ1LmCmQHsoSScntGP6rgDuUGzZj6raCfYC7TLg9fdjLNNfVb7Y",
  "key27": "2ys3yzzGSqEWdfzAtKm1tZprZVjucDmbJwhQ67zTCxW8erzVXyrp33cYUJx6CKikNfWaPnwHKvFRTuxkb6RjFWGA",
  "key28": "4smSxtCMGyz2xefMGT9FY1kgweesgYrr7f3rvLdvzNBvKv51fqyZuLDCbNJ7WtNbv1iP22mNrKmeRCYmFhmwcPMq",
  "key29": "eJUxFRqiS61nX1LM3qh8k2LViHre9ZDAi1BvGZx4qHRUAHDBaPT3cPuhQ34q2o99v4QEGs2BR9rqWzD8kZYGXx4",
  "key30": "3g5e2p9ZywXVz7sKWzzajnFeDHp1w18dDttSPqJxcLvKLayV8BJfoLoVibqNRKrtb1GX3Pa9ZR9p9Mkrg8ZVPSaA"
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
