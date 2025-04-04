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
    "5yaETeiwEPcp1U91rpduY6mXTwGNqNZaqDrry4bspawKGomk5gG2qfo98YDGTgNTaVK6WyaywNWfpwFsFBNhZrAG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FbbpHsKQ5VjyydBUNiEbiKDatkqibAuraJW57mcztFPmphMLqEqLNyAEaYJzMV11Rvx4GiuhYSWZhFoXrG1ggBv",
  "key1": "zA6hsapz86ZudPkeaXpqN99c9qzUFsxis4MTepNneV6eeew436iadbMMEnbDzesZrtkQ3FN3BRkAz3Fx3xc7cJL",
  "key2": "5nGxm27cysM3s3M5AzSbvUMiCNKgtEmfHQdeg4WKs5vSzbcTfXwdvCE4rszaYbDaar5ZvVNHs1iY3CovEvMieBX3",
  "key3": "qpPvtzvShqkP6AzGRhiXqYak6uWydk6Q4D6bvmD7uiTGkL26xGRpJ5ir1XTjDVBYVFBDdBMZFw9nH5ABREF3jom",
  "key4": "2rfiHqULm7UEdvaC9W9XAoRQYbniNVkcxLfUE5x7PPgRrYq9LmhS9zArhANV4Bn8rLmt1TX9PRicobxQpz9HkPRW",
  "key5": "rPq96gBBKHtva4g9R2G1eY23figFbVvG3Gp6tzdifkeU532vZdkFmuTYaesXPhJAuXfpA92b2hv2e8tWrU1QNAR",
  "key6": "4j4vN4KsfKZCMNZPNWdJGwwEmuaaZGe6duGFwSFUAyZLJabFXDPQb84FVoh31MYW96MTy4uRuYMnEq4yD1J8gXBs",
  "key7": "5fKZZ5kGoPiv5yxQEdzroiduC9KFS4eVXiNKA8GoraXZfP4rwmrJCm4Fy4nDWQqNQUa5cuBwtNv93bXKRDJCkK3D",
  "key8": "2P3NGs1ba8Xb6DBxWLocwZEt3kPqznLzh4MNS1UpvxP2piiiGY6PibCVkEsSK2v6Mxc6tRxoAE4jH5ct4SpBJqqh",
  "key9": "4nsFLnRUW1uw7HENXwmT3FWG1FgEGoFg3hvWVR77uSt5LvTA1x4iDxG6tX1PkNtUK52zphQRcMuxFEuyCgeWqeUJ",
  "key10": "uDQv2Dr1PLfd5uCcdfQGHeezSJj5b8nxPfFdjFpVRR6KBQy9uZLPbjrVAVx1L4iqQnkePArbXujxkzpw8xT64Rt",
  "key11": "2nGRja83FMEJCpZEd5bEmH6yhmGPP3iWsm1GFMnpSZ2jEkhxurmcY7Z3aGUXYJYtrsK5JKpJEFYnMXEefVtHqDyn",
  "key12": "G7scY5vnQv3yfpijPvrqN7QydeC3TR82ocJ5beWkt4wUyu2nZz4bWC4jqfUQQLcs9GNQGhfjFpXp1551xgdjywQ",
  "key13": "4fx3mmUxHyLMLCofVic59z7aCPxhbdi3C84xMv9fN9pzEfANXYXDwsvfTs8GunDwNYzdpDttGSNx8VQJfJ4pZCzH",
  "key14": "3f7z3Q6RLLRuDrE4k3Rgu8t9TtuYivM7ByP8HgSucyeirt2YokF2JSrLQL6yvMbgTR3qxmX8eonz3b3oSAq3b5Dj",
  "key15": "4pJK1WnCLZMvavEkJXTpsgJCUQyo2HSn8WgKaEkg3ZwqyfYAy74ctmJV8ZmJH5ACWvvCBkP6kBqtdjw5BMjyXikK",
  "key16": "SSmwn83PcxswbfsS47XNB8QdLs4DeGECkGyEsus3yN515SdjB1WP2qXWL93LkwyCYJheXHMYg2bdHZxSXjm4Hrj",
  "key17": "Qn4cG2A6uVidj4oYn3C2vxD7kPn64r1ENbMDSHkANfW3jDxkWJrxa17NboJj3wCwiQ9p9EJ2qhwdtoxvB66YFhB",
  "key18": "39tzQyypoqyR7Yj92s1EiSeyDmJhKDcvf9nKaanUEhJYFnfYPu2w6URFajzWiP1fVWnc9f2PuizHtgWqQRe9cWuD",
  "key19": "5FpV1MsCvSq51ccstb9xYzqPMeNEKh1ysC2JT4RG3dkxjo8EzdCfpKmUeqUst2fxkFu5PDTPsrGuNqxf3C6BMvn8",
  "key20": "2hNoUKCA2zfoRTdbun4KFZZfJWvKGbnw4bDrYQwBjRgE54FM8TNadmr35MaHwPBdskNvLr6hshkLj5DAhFTFm2gJ",
  "key21": "BfKgcH4fBQwfZYiEZAnxuANCP8cGGtU7SS1aSBYLCXkJ5fEfbMvST4hWdyVe39rFroMp7V7in7uyHUuVU8rttBR",
  "key22": "Zu1Gq9MDfhmK7akA8Hdrj5AvKkmy6urjEBqr6785u1qxNmDV1t5Azmo93G2VAnueMQWPdLc5qWjbVKHnPH4f9ca",
  "key23": "3P6d3F8RA4SBje71tSFGVMKcxdKwzZFDbGfSXYSk9Xgm5wbRkwhxxXVgBcMitpZkWkrf3EH81SDTE1KY6iZ3ogqo",
  "key24": "oT5EcWMrSAtGVa3vK82PGAQ9yFoxmQfJXNmwncizYdj5pKd2ZcXqCzfrLABCVPw3YZkgr8XCHA9ZZ2gSzZzPx33",
  "key25": "5cV1abGVdgVP3zN9d3HfYRoSEuRWwq3QVfEZShu5UZAY6Zs9JAbghL56G1QyfeJkSwwNepQmrSGdxLmk1FccMCWP",
  "key26": "21zoDewv4iuqJHgxdQkTza3Xoss9ksp53L4mRFzzbrDUBFLu4sF7XTNKxekvs3FSAUB6gPez99JxtyvuuXXakzEK",
  "key27": "5FTEdG1pYFvrDQvmChh9YGxFPMjDzi2ynuAX65qH7AqEuT7WvuZvo9vg2pqsZrhVvnAonQs3o7pQQrC7GNmw7fBG",
  "key28": "2GwFNPBaqmLq89xPS2Xz5aB5rPMhnHYMMmKgRxQUwAxjdHdjPg7gCLToDh7v5zD9VxwkHAqfgL8tja412NSmFjwH",
  "key29": "45BU7DdwQ8FRMmC9EQHUJrTciufYTmjgBdmpqCeVWWaDd7UCprrx57XULbxnzAjeN8W5mpffUaNyt44vLMhKNfdU",
  "key30": "bAvTaF5JDr23XVtuLPcF8JwvFvoe9UknyTRreQPSmGCuVLxBSFoGkf5bE7ZGsLipU5bkyMzjZR9pdtew6kaoS26",
  "key31": "2gJg3PjwTFkFW8xB1W64brDnFPNa688STZmX5f2GDNzVMGSATtGtNStxCbct3ViKHAC5Mqnub6A4XVYT7W72hx1v",
  "key32": "5tP77fHmgV6FvQonPF1ueftUvvPNuBF9iokXrzmNAvL2hJgPxcFCUJmt4jTETwrAfd5dXkhgQrpSsQgxwmfCzSX",
  "key33": "aHpdqwBam3KQpqs3DzbgVAgFFAQShEaEc2HREFev8VpNgDZUgKJZqL558CRuaW3qVdB4fsJJTfpPL2LubzTJEex"
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
