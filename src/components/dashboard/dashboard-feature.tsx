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
    "3dVVKAo55Fos7yq4mZrmeBLTqdyt31RPb6N7arfaBxe2qdJMV2xF7XZXXv6Lr1WZ1yQH6s5ebpL1g26FzokJk5zN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nJsHpiKPWHoaYikENFR2zEDJUC5CsqirryCuUeCtZtP7yRv8AxcgUiqeu8hZczjN1BGjo1tmnQrEPJK9qy3wVTF",
  "key1": "2XmBsYK6WYobLSJoWm5TGKBio9wgUry73WpST47cTjKpW922y1V8PVdq1rLTs4GrwgXW1wu3K49eRvuwMLmXDVkp",
  "key2": "VYaAcNZz3HD6pmwK8nfRXLCuGRTDg96m6cAt7cDSG3op7wfdhEMk7Jd5MWxab1Bp8XandzjGp79zXpfRMkksqd7",
  "key3": "4dDDP2BiFBbYcMMdvGCxhr5n6JXCqRoe11CYA5FAKWpuA7CYeKnVqkMMsS8BVoXRe4FKpisMrjuG9kQCXpwtytHr",
  "key4": "3VcCL3qrrZxzJxQhGhwXrcqVTQowgL5WJFCdprmaWsgwMU885nonPmJgK3KHByDwCVWmzxQgfgwMkcsAfq8fhU9F",
  "key5": "TEbzJ8TUHMB9EqEdAtEcR58jdKKEEHTHdoXQsb52zTYBhJQzy11Jiq2iALdLorvsKHnjLokBN6Pjr59XyVh9Vk5",
  "key6": "46RPAoYPhJdPNjodKcUeq2kTd9jNMsZQPn2biTYi72VnSapMgQ24oaeHj5T7ysoeSBDZfhQ5Y8FyMZuk2FpHkYAk",
  "key7": "UGQbYKZ4wtZB1b6q3xUHC7cNjM1iEKvizeXMbDtUnAroeWXnBX8PfptyoS7zAMNLzdF37mZoWRX4nz8LaPmbZfB",
  "key8": "5tDdA2Tvt8xX48cUWqEk63a4eGqzguBEJqaq3cEbdS4BNGPw2fW6UWX9cDhhc5fEVvi5ozRfKEQ4ppuLc6f1b2c3",
  "key9": "4KviRfYFAhQ2EbRL79rZtUvWQgHE9RPbHXKkwe1V21WZ4fc3pAczMBnwfC23V1UWLVohqUCJqWFptnY6U5NVXhNa",
  "key10": "4M3Jv58SfwNHwVmvLMDMGSvFt3H86CH4SfhhgirmdnsSZ9b9QVPUXrEd9zn99AjgPd5pz3jUm83DUmFm4eiLDhed",
  "key11": "5pbyjYaNKT5HvAo3F2kR9UWH3rKjgRbQ9Fvnh5grPVYM9eHXj5x9NKSERtsCSe5wGoW4CbmSL54oEEj94vzUKUWV",
  "key12": "6LzTvqhapvBpQaf8xEPXLhNVeqdXUcyvLg5oQ1TER75pBXBdVoTW1MUsKwNtXak5xm4bmtCjwC7SbB8A7WC41PJ",
  "key13": "2zv3VS3dJhgExbRT6hRx4ZsMtH5QLRx11q3xuLHVcwiNjXzUe2ZixXCDrTdGbnAvZbbSiEw428Zi8i3PXzzy6J2N",
  "key14": "29CPJdDT9D7tGDupnn9cwAiXFLXwF7cbZRDApqoA3YsEKUB5PqWrgb6W7H3nFCPzqrjtVxx1mVosPLLF3m7s9czf",
  "key15": "4LJvSKzpQ3tf8gZcLbGYuxXwBcwVrwWq7HxRvmrJSF5nCwqAawPytdgLT3imkuNbCPgRAnhfe6WhC9Wi277mKiGe",
  "key16": "43w9nRH2NUbbo4cxK6yb7mTV1G9Ev666eCC96dFfRmNfkKPmnUryQMGH4FifF3b9kXYxYC2NcBKJrL1Nd1gPGWBQ",
  "key17": "5RcyzkEc24S9eoHtsppeKFQ3gi7XPYSpcSow6imkqNXweMvagRkAntn5h2xb3fx6KdSjjncKx3YVUmTHKyxDcHKz",
  "key18": "62QWcNfLvWX4GYnyptDpDDzdMbQgmPnWFNMBW3671FY2vNTFhMx27M575kNDVPpaUr9u3sWmcaz5r9afa9RooQQ3",
  "key19": "4jFmwNub8gDWvtHu25b52fGkshN3CXJQV7Stix11xrtMEDW6CeysFK4EZpSD11uJVBFo4u7MvqL4MRXmoeJEmwrs",
  "key20": "3R4TmD8fBa2fuod8Zrn2YVwrHYQ3h9nSSofkYLNMoTkULXFznb4i4ExeEmJy5xnjkrBTewFXsGCszvVFZqVifRk3",
  "key21": "5MuS41QErHzLiqRsArJpuGJT4XCWmQkCFBDYcHGLrkMvyK2QPS4n8w5aFhL3tBL7iKBcwCptPmx8o4hZj9Adrdzx",
  "key22": "2AEqUqSuqG1e2MAVkkSDZ9joQ942kYHYeHCFy7EoeVVAfkRxWhiccooBZU4oGZwwJ62yjuED9oELdHe5HGdy79QK",
  "key23": "Mv4gwckajJefN41RjHHudE24RvHySJYo2q1PmiRqJQ4A4yX3qE9D4Fn3JvW1JnL5FwU8BQqgwUo5qdECPPCRPqV",
  "key24": "ZnvmBEwjZnp1HVKnFotwSPBrph9PJ4YEEFwsZqD17yLBaSxkcAEpHeCg6auK5k2xyjWndj9xaU8rJBoVFn9XBPm",
  "key25": "SS14bykVGjRcWADDj6UufeVg6soo7XdWrSsYXRuMqa9DiWiNkozCaktk3pNDForz3o6PPPbzqvitanspu499ast"
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
