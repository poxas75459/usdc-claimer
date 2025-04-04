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
    "3sFqR6VpWg26E5mv3kUvWE2Ge3PyE7QiB7iDDphK7pR19nGAaW5ecstBcuax43c95bHchKVeyCWjEavyfqP1imZg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "b4n1sCaQmcK91NzshkG5xFvEqPKmeKDiS5oUX7seUYxQMHCAMQ6YvngbLnwhVgGWy9wVKdjADV1xEoSvGDHNkU2",
  "key1": "2sw5WEYZtdtMFkynWD6JUiGfLzyKxq7vXZjTukits8Q9Cea1Qp7K3aPxR6caJGEa1sC8ozFywkPeeGjJmbL7FfTA",
  "key2": "5CsNQVa5sj2bQQtuKqarE4astaAoZ5BvfH7Kwbv16u5f239M2vtAA1rEvDxLNCrtoFvtmTENsbPHdkdMMm7VFiBP",
  "key3": "5hyUPQb69VUmvx8nL5zyyTTUCFQu3y6dQT6GgnN3WbuqXj55MxAVoyK2PS2eude685CoM4N5tDPeVYoWrPB7fLPQ",
  "key4": "wTduFg8HbUtN28SXTuxDSJScDP4mwSb53wSCro8ZqoZJRZPoiMrQGFpmsoMxHyNoXV8SSuLkaMA3hUvhPP16WDT",
  "key5": "29pZWA3FRyfptfbToGXQ9R1hQiCsmUw2Q618FPWia3z7QqLBjV8UEUrTz8nxkgLx8c86VP7sDcEguhCiFyRqvQbr",
  "key6": "A6ZvSi91xmepC7RnM8NRm5hv6p9dwzZRtk3grCgaySv4VvxGRhuvgQ5YFz5ug45syVb5rezoeZkvpjEdBs2YWsD",
  "key7": "Pfcaerd9vwENVaSE4qEXAPgPHjfnwDyTjcMTuz7wpDfZAGUk2j7iyP1vnvvLCoGCzSeeZzGhC94VaxckDpHfeQS",
  "key8": "6sB1DQNCYNTAuJY89EHR6gVVw9VLMZNGLsV5TTehDTFr95f9KPSVX63YqKe8wWpa7MLN4amrWBptGJ2R3YekiBA",
  "key9": "4hVp7ecs1d6anFyTp8AB7fBVmmwHqLQDSv5CbgKDx3qL2FoH98AJpHtUZyZ12NyU8fyn363KzTVd569ESe486DYi",
  "key10": "57xZE3RQ3DMA6RVnC8etD619NZj97ECiwo5r1UGvv98Z3HTucqwjo5XHKg1jHXJp24eJD8ttB4AVriok3qqJHtWV",
  "key11": "4MsgdCyJHhE8r5U2TSaja8AYjDwKD3ZwR8HoV9LWn7GuFBHXHYzC48uQbwNN21CkhPkjuzm923ChMDSEUGHY21eL",
  "key12": "3mXVtXhNbc2EGhgNE9AtVMyV39utiTrpVAB7qrUCJi8tDvmMGBVL7pqRKFCHrSp8Q4vV2Pm4ZfrPg7FfxRAZc7ZV",
  "key13": "4KVDTK8uZKxGKZfmheFx5dPZekbn927JSxLLX2x3GQPHFUF49wPvFJ3qZQ94jR7MUJwJ8UzgyHnEPs1TtRzHUftP",
  "key14": "4eYA56Khf9at6mjTmKpM3xr4GzS5t77sskYKRsPUFU2asUK2d42UDBvts7LbbCEdbGXE4VXRF1T5LjJhowtB8Wbo",
  "key15": "5mEgXb9McAkqLZoXqMH9YqcGmaTyUguXFWxhQ7a1c96JERE1zwhy3TXtYcVyrySz7nMzuNAsPKTKvAwyJvmHynqY",
  "key16": "3svDJtFa9rmXfwJxTQgmhpc6Lpy2PLfdKGADvmY4PtNYSWxAN5LhEYuwuz74Fxv3UCKHZiVFNBx79Cys3BkqUmbK",
  "key17": "3sxW4BLVhiCNt3H4mQc7EtfptUi1ggixtRxay89Fv7Fx7PqWQa4bniqziH3rkDEKY4pQ1HrcmL9Yk3fYsvF4VwEt",
  "key18": "2jsbksGunBsuHhpsN55nxFXLJNra9bhHRvycNiRbuJCdpNJLMe98GDJbXfgqDsbqKEAPCFkyXYDcCuRV3nVobjQD",
  "key19": "aB6mMjti62MrVNEuc6V5PrvQVHc87zbrLvsWq2j2V7PEyXacBLFqPWUoWMVikJNE6J8TsPke3jtVY14R9wWTy5h",
  "key20": "2QYoESMbfxzXhMF5XK1h35WFYcKi96CxLt1HcxWZAG2YvzNXaJw2brN1GiJwA1PS3ZjG5u9qv9quUSUybaaue9nJ",
  "key21": "4E6FkSZWU46RiqBchJmWrXSpvi2bLhgBTjFWWT5rvBGD3kWthpg1bKrJ6Xs4Rp6CibnsPWFRbsAgiyzUU7P1TY6i",
  "key22": "2XThupTik9vmgr74sNMDm55HErkD1mFgMdEdrX5KQ3Ek6a7PmQ3isAseXWBpcP9ksToGZ9WeTtiLRdEdwntQc61s",
  "key23": "5dGX1cB1aiwGQnJvUKbLHyZzD2T1msWaWmgDdKXZEm7wnjtMzwtCtpiSNntc7dnGGkxNTaNzMxfNdWh5sJtaQReN",
  "key24": "4ZetSzq7fdwgMBirW9K6pDZi5mVaEfhEgMR2W9LQpsys1JZsSQFKnyZhdGVZCPFvDikK792HkcqqivggL1dgzNq9"
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
