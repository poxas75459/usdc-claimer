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
    "567YyyvoRcsoLfD2SnzmW7dpxKUm6QjPyEfa4WZ7P398oSzRqqUmh8zEvHpp3sjoeSXxYL2tXUrhzNscFHDbHLWM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4C9yadY43n7LJXf7RKLXu5GJSqPH3KA2Bzd8ukYrUajkw3tQT4Nt9D3Xzaip2gt95WuaUkgXWMAyToEkgkhBwLu3",
  "key1": "4TPMbokZhUf2oNa3LaRxcWwAG4kKQdgPyMLmeX2LfEZSn5NiTDbaQ9zKZ6ftWmP5bZrAdN3teS5WkFvZMa8MAp9e",
  "key2": "3FSQkYYkcqMXGmHVPXYopgtxNuJ42c6ZmxcXM1XBs5Wh3SFzd8RTghStCEcxzsN6PomSQX2DYCQ7FHXtHws8R6uu",
  "key3": "fJJCPYFbz7k4MeQuQ8m32NHGTskN3YosnhC8uReLegrqzt6gnT35UU7oEvTgRe5VXBLGVHGF1GV1G2X5amX74zw",
  "key4": "2Xe4bWcJtBbYNtLtkDTbtfWnC4omrDsWgWZDWh8VTCTfRrVzHPLXniLs3MBoL6qx5MRiX7dgcDpEVWVoBEUTYwEn",
  "key5": "5XGv7qBwBB6sZfNAHn6YDSDB7MMC1Z4kzyvj2v1f6L4GoKudMKgnfL5sDDwiztpgCHL78ZSzbCeatkgYibENUR3E",
  "key6": "4BB7V2nRW6x5HQ1rH5R1e8vGBqCP1gVJYMfDcL7Mwd9aGCRazaSMdidbybauQni8CaKnvhEYJk6VXi6qCgEsh1Fd",
  "key7": "31fuQhgx7XRqpvryRn5c83mscS3SeLchqpHCPNf3W3kPWw4Qquh38vnN6KYxnKNnFWtDanyaPUB77s9reaNqE1nA",
  "key8": "3MXTQTtFPcnScMCxh71YAVXYQQF1gsmzXj1L3UEP26oPpQLgpZjHUCgiwDTe22q2KssuNfUbVxu8uBCGJQeX7Sag",
  "key9": "28FqPRNFYkGrr1bimJDj9fLzSrLRzLas3SXJewXLr3sdsRidzADvLkKeMizDCt8o74oogZ8rbeT6xAcrMiBuSVbg",
  "key10": "H5MxA1vKX7Zz3h454YsbpKBR5eCrSMw333BQKRoTTCLWc7J5Vw22hNsLLwWWaVVipwT63dzF1eauNzPzpXymaQD",
  "key11": "38gYjX4hmfPMTzTmMNtED6XTmMRQqDZ99dgZgyK9JCB1CYgj9yP2mVbAfM2Mf3kWT5FvsmXzUexpAtv9GCPTG6K",
  "key12": "4ndDKm4qiK3tm7brL8J2anWCp7vCftaJdkTN8deVBij6tZWsA6tP39YzWYHGG3hy7xG3BvtUoy7Zu6C4aXBzPZWP",
  "key13": "21rcEX7CV7VDiaoYwiF5kkFA9QTKca2FE32RXc3XyPS2KR9xuxcZS53VF2yWeB9tx18a34EvzkZq6uRvEugM7CbK",
  "key14": "2SG9v2gvw8Ve8pTM5UBT7TEGB2v8nA45wBNkXAVxiaTMs5MxpbgC1fTFMivw7zNYyFzM1sgsytWqJcCPjphGrhSq",
  "key15": "4zc2HJ4Y66aSsCbGw7nvxHscdYgpXSwnwiVfmv3f7bvyfVgcFB2taGqU1QkVWb8BzpNKgJzG42tFCD9HV9gW62dP",
  "key16": "P9377rShFCBgwVTsYppwUPAPgRtenyuGZisjMS5WonJoo8kJoNTPJGSWaS1NNT4MvnkxcEsoHYkuQYDmik2u8kH",
  "key17": "2obcU8tYqQdqerJdKj4FRmKvAZ4xA6x1r8HoUj6AMW2fjecCtFy7DsNv9UVFE53rbtZMcXhWq81WAvSLF1AJycnz",
  "key18": "4Taw2dMo5YSQGZzP9PNnMhQsWHqBuUQR8Yziz9SqtAEvFzfdgd1wWrzdiPjupCGMjkn7Wt2mqjQbcDLwG5ehLRnX",
  "key19": "2Xdn8UtHh16NFAtGLJ84MHox1KqGzBJ9B2mWsz6kpnNfVouRnKedbdRHMxRrbp6FyS5zTjJVKTs5fcbMYSuvSCPQ",
  "key20": "5LRzX3kPePZL622fo4GhivdKiD8g1noNKsbAXDF1yRisbU6nWV2wFj1Q7k2eEDtJmWE1173PnDoKn2yeBMg65Gap",
  "key21": "5Nxpvv59nd9RyGF74684KFvAS5cfafA9pzuxiFcStFtorbbQEiVE23sEL266r1LFsTEwodNP2g5yvFniUU9aszYw",
  "key22": "VrCKoADs811skYLvzktEXcjQtVoMEvaLyb88HPHRBoJZop16GcK563nMcPcxy5VkoT4Yg55JFarAmPymGcWp6s5",
  "key23": "5sSd6g4kK7BNgdexz6zn3iEzM27MYrWfm9duEkK3BjxTKMtzDHffKPbMaihUDJwzVtKwURSd3QF2aZrp2msXsjUS",
  "key24": "5BaS7Cj6znxLQGHUgtMxTKdBZeBz3qRD4EcG8xnnBZjaSFqjW8DEe2UKZ2XQu4nGgeaWMcAGe6HWmjm4VCGRyE9t",
  "key25": "46xCLUiGNqedBHD98LHbLtnkifEiGrvJ2L55SK5Frf1MvyN1PoPaRs3d8GrD9khtDgtRSkGX5FuZLdadJgnWeJAH"
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
