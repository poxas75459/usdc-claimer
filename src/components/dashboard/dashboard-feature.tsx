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
    "4NFxmz1nYgpSkwVewbCbHQitpksWaLu7Qz2hULGD1DwwNysorGq7gRM6uzqVEcVy4XVDUNLedLwgcQjBHKgdLk8G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KjdEAY4haYmvB8SpsoR92U8zcFrqDLkinyK8WV6WfyNszyWTkemg7ezAT65miQabPRVp5J5bCbodykY647wcJ15",
  "key1": "3kethE5Z56sJDX9R7sYq8bSVTaTMgznD3ZuJpb8LrhuaWzXr3qg2L5AhV6tmGe7PAsanSaMbzUFFyGkH9FvuTpxc",
  "key2": "4KgeTs6Secrj6H5ZtD8NkVfo9neyzNsXK2bGVPAuJ4hnMxLNuar7APztXChp9bxeq8k49aSoSeRdxi6H59LENj2H",
  "key3": "2o47pzS8LscJeMF4pJYjiqyWJ9JNfgYaoCM9RBu8bHiLNgkC1MQuSjpYzpY5to1jNVyr6dv2fRNVCExR3zYwstQ7",
  "key4": "64YdkRBFar38DWSwTePuSC1rb6Hc5kYVCWvfXWq3zzcfAc9svDvu1HW5bcctiDrHjrvCeLBb9arzmuESBwLcjDj4",
  "key5": "CLipW4NnhRiTgmfuvGVQF44makj2oZzQymL8SN7bECb3UfB7KTSrX7aBWTbwxfCetHq97ggUy1etWEBAPV6f35F",
  "key6": "64uRUyKxN2eWr4gXr4ZwPqCVpQyyUFH9TvvvxjKTRKNqeDvk72cwsy55m7XregxTHEjGKsJYg4QoD86sK4jftaq5",
  "key7": "3VrCkty1ssNbX6A8VY9UcBW3keKSiFSiqGgduWWAXvA56yN5qeF2zK8LBkdEqhG56wnsPvcABov6zhhhZZRhzUzb",
  "key8": "4v22DBXyxEmDdVm1iF93o3PhtVZUeJsBwULPJ9fcsR6bdZFz85CV4v8kvDFhZxuGQNWadRZ2m2dmMKoEKaMadAie",
  "key9": "2RaSebUQhjr2F7N28WtovSwW6aYXM25ppcCa1QEmQmxUUMKyueG7AM5BsRwbmW8ZnP3GCDEF6CKuFJxgnHPBSpL5",
  "key10": "2yvuK22SGofvXxfzmCDJsTrXUigrSJ39q1gnPtzeUEt3HvWqHgNstN1bqpcmWST1xcnHJp6WoV2Dvt1M2JPMkdxb",
  "key11": "47kppQ3hMWn7nzDYpBMHJ7qZMM4jX1PXYP1gWHY67WSZWANtbqKFE2ffsWTNgs93Bs9bgQouxjegLYBPzSKKHPGJ",
  "key12": "4cppfijpb6Zyfwc1EDJCnAc2kkoj73SpfipTNMPa1P3qamo9gPgfqMdetRhPvqA5LntrzeXxHiRbvwaumzjT4skP",
  "key13": "3QLyv2MnsEj5Tr7q36DBa1skshbizMzwX6becRdd3k3i6VEsiduXaMjTZmf942wMCWzRHLAi9cJxQvXRSEyNz8qc",
  "key14": "3xXB2rpaz1RUFAWaB5EgFN7zG38cusTy253syS8zBmjHztiZSWcCeTJ4gZ2QHwfNCrJoBAr3UnHQrNp4UY8h5ndT",
  "key15": "56G1C6gWSXr4uqFTCWi7RDW4o1LT9rcDMs9riDdrETQchzBd7JoLKND4J3dYrUXsbnckNbyMXbxoFdkMZvkNUmYx",
  "key16": "4znJAbYrD5JYJY8dfvy4ACpVBpAbQEBSQMBx7YCMFDkq39fGvZ4oxfujzatvpKSHeBA5Q27Yb2Q7xCCnUCLvrnVb",
  "key17": "56BkiH7ZK6GGi3keyDYARmAc77GCHTxE6DGq8QZ9Tee7ovuD4H4229LHuJ7svyZm8DnZCXzKXpnamRmprxQxxkri",
  "key18": "229zGzrWo5EjibL7Gw8pZVfrJii4xsFVZ6jTbzAcWuwY4CV6eEmkJLXADs8ZjFzBg11f9gsFuRT654N8rUo25KE9",
  "key19": "5ajRomwpbEwRgfBRK1Ns52zFarbqMpkMcvWi61uDakwi5pHtS6zPPCPiHdwwKt8CxTdjHUbc3pwBV4mYmQiY6vQB",
  "key20": "3CAt1KmoVeMhRzaeRYSN6eatSwzZsBcRyUe4MLiDVUBTG6dVUjNMqkHjorZb8Mpp8VehXmYkeMBaxRQ3suuGbook",
  "key21": "Vm9VR9ykYnQZ35tAUuyu47i5JhZc8C8jTkdw3XKyV5g2KnFmj3YJXbmCDQC7xGcWCZakujbqDWNbJDTfcHHR99h",
  "key22": "3rPE5WTYroCkdypjAYYFwdFkXiq7SCXZgtaxK8n4pbfKiwPyGPGXrV8hizfBTssJi6pb4cQY6nSDSc9Sds9dWqQe",
  "key23": "5Mvt4ifZDWxmYUqNZFCEN8H19zac8oC8zUhQQpAEDR2XfpnMvqUGF9WHuuo3KfZcgQAd1Hn2hbjEYsu21bBWPbdz",
  "key24": "5J1vHY83zFbu493imMtJ5eu9G2e3itLYgczT3DTqvfxG2JoZGXiGuTe6EHNSKJ9xytXSf4umMDyv9LQjrvubFsnz",
  "key25": "3Yrsw8x4EFCxvnG5Xn7nbf9qXvTKXbgYb1CsgweysAcmjWWzYbK9HPx2wA9aLqTBAXbejF8Z9RCYk8i8pCSvfFz2",
  "key26": "3i88W5PBBKvdWRMwCN53qCj4MZvaMSQM4UCM7V3fDF8fXvvvwLuAUkEKN14CoaNekYUCEESee6wgxXc6AT3yxr24",
  "key27": "2Qp18SMUtEPw8xnMiMhZcx2KK8xLCULBmvrBw6aePeUkZv9H6SQftKZK9uPSnjFBnwk7GNtzEmJx9bXhTpW263Cd",
  "key28": "62SgcKLQmhaJw1nxy1QYG6jmnWn71dvBSCWVtwbhfnDj9iPiRdQx2PSXCVjmQQdzPMnnHKJJrtKBcKLXTt773fP1",
  "key29": "25qnPtdNDN2K7TCEXSdmKkvc5igrP4ZW1RyatsuojM2hhTNWDSSBSphG9e8EGCw3dLgbvKTqvDj5w5Zqqq6hUGKs",
  "key30": "WMsnmgb7nsdi6xYnCTjFKrZY51n3e7VYfaimTALvkEm4Jssp1gpcL3TmQ4dYuknYnsUBjQagxBXqFCXKWKyYzaa",
  "key31": "5sLLmDz88dSNV5PNRXV2K262GjoUE15fBn9ctFWGgCF6NaBRrnxKbRupFnS8K1NPJww6VTVmC8eyrnxiZTinU2dS",
  "key32": "5KLHBptL6j8HbWHGvh2QAk3gBTvUhmUmjp2d1YV3H2icivW6vNRX4QDJzy6jywRqZWxe4DhMirCjTr91JhGGzp9y",
  "key33": "33hGVfM2jUsLXbrmhRcpYTetXv75xZfCgdLFCtY2KW5bPaoQoL7oiJg8JC6TUnZZuHj5TtJfofeyqeEQB1Y73v5K",
  "key34": "nUWKPTjyqT3UQsSgpx4DEtGoUxwG3oL7q9m7P8uNoAGMMsLUyqgsf1Bo9xQbj5X4sgEzJSfKMK32koFvwtAjC1R",
  "key35": "5kkfmu1MJkdCADEwh3di1QxYAEXxLBJ1Qsoedg97DBpwZckdZw3bWhsPDDb4Ph9EFAfYjUuUHdmUEadaw3PjnaCu",
  "key36": "3EeFuMLLFgjZHZ2mzTqQnXZ1gfVAFKPEL6RocmsL4eW2F2hhqfdcD2WhrYx2yGKBTCxFGT5XkPq8xGWot3w65SBV",
  "key37": "2StYU2X7DHgTeGDmcguAFGdBPAoZvmA6iqZ3dvTqGJmowzxMdhy3e7M1mNwxzG8aXAAodiLZYnY3YezQNW2RwsgX",
  "key38": "5AKzATtyw9y15jPHVDq42JfScziVN47acUen8Sr5o2sHYnbpsZGCHKxvPpN1AURGNxaoB1YH9371LuXn31YrZge7",
  "key39": "5oPdn7qkh8w87UPZtLxFqhpfTD2tT6pATPjNVeviuDuikxFtveUgGPAgdcEguc4qpxgxahuKawWrBn1NtjEEJQrL",
  "key40": "4Cf2xEGqeLxBXv66nt6MFRPUUBwChaUb2Fb1E3svHqaB1WeG73opeFuwEfGFs8qFPxDS7NiqxZJfK1zy3xJx4H6N",
  "key41": "4M5mzGYk2vH7g7YfFKbhSXek3dGtaKTvmCtETp1qcRQxrHiJFMB18HfCa2CfEPLny8sYirxA4gN2XMMyJzEr5MkT",
  "key42": "2tnujnjN3AsBFcVPbZfYGp7T1okEsGsYJA4vfXifxAVvgTKAxo1GbW4sM2TRztD5w2j9uJ6hPeZRPFjn43u5JKjm",
  "key43": "Hjo1ADbFSqr7GSa94gNYXyMpvXYnFiMR6eRSou1BiXDWNM4BDrNUfA6HsEeGBkwYq1icJSVXZABLUuuxYZwKmY2",
  "key44": "3aZ7sMJ9Fkq9SN2kafrFysSpnDUQucrd1j5oZiNDQN9buCoBKtmyHdzDPSbMeDX6mqX4GxQLAgy9S6pjR2rVUATi",
  "key45": "2gCkCMn5oj7oG7u4t5VU8Qt5M8NjZuPvwuhCuBmenm8RPwjStMMUpVWHXH3PVHakjyQSUtis5T62syLUiDa4Jieq",
  "key46": "RDJ9W6Sbvp36CQ4ZnDLx5Z2KnJkbdsEUYrW15L6KRHPLgbVVH6D4ewMqXFAKZXKgimwPeVcTbZ9qdgfYa7gkpPA",
  "key47": "uDRRWWEpymUgneKmJWbTWkMZy677tJjhmDmXtomWmK8GJsq5e518eaG48nLodbYkSrzJjaqqsnhbJ3mL4cKPd6E"
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
