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
    "56VZwvYFcU5Sxy23ekinngdsDvT2J7vtUsBfnR7KgrkaxqoL5SDHhREGRchSFcAgBSVdH2iRTXKmyeFbNY9jtgzv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tQbk1bh2eif15vAPewqeg3eRkbocDpRehPmy7iHGNm9G6grHM2ANGZV5vpmjHBV4rXmHV65B2WnsVC2DKGzppej",
  "key1": "51FD93YALqdNifRMZYt1DBtzMd8g4Wt7rz14MTLYLYUjgbiiqDqaEeEWnPqTPNyrDpdPXaMMgMSj5hSJTQGa7YZ6",
  "key2": "4pXGwhhiZcYxPUtzXroDXfm6kPvax5eR1CiXurWvFGkjUUrEyMySRKtWick9J2F4FABxiEapCNCSLKWmtCvePtYn",
  "key3": "4s4dqjzC6oFLHhgcFuDKaJHWWbXxCfoVZfCZDbbMJdvC5MFygfZVDPRtJQBXwiUQQ5pdJtSsDJUEsoihtkmgo4FW",
  "key4": "4HNas1AeWzukAqTVdHMjaE82Ca1rTEQM4fZW3ShfXj39ujpzPupimSQTP71KhfokrURViqshAjoCfkWZbAS4irHE",
  "key5": "PeK1Qyt35SMhPPvr3mKZGazqwUCLj315p4Aui7GUaP2aU1LcK8KaHaVodoYSUwwDXvmczjs6xr4LJWW76fVjTEQ",
  "key6": "pkaBdeXZA2gPruVg39nj62W6fzjex8EMoayXCNTJGRTfa27knTbkQkjDW3aY5omYACNbW6qMNcUbBkA3iBniVQt",
  "key7": "nsxvifXwxce1zjY7d8hh1jJpEfEKPobth1HnZzApo7FstnwwkaCNmn2UZ6N1PH7wLnUcrmxA9Yk9ykCBECZb7dp",
  "key8": "349SJXRDr18ZFEuWo9nYaByEqEb6eupB3wysMdvJyRgbo5cKBqhGwBtvvUYLW7pMDCVicxouyjrJK5mGse5S6ei1",
  "key9": "38uPsqayX71QTWcjQ7yYoTUHYTKnF7jCxUyJHgYXVzjeczmfDrcesH37CftyXi1pysp8f1yxhUAeVaRkvciefDxc",
  "key10": "36mtomLZ2nUvVpP981sNbSrokzQi4CULvgThxPqByLg2QKcLnTDW6Xp2J645qywjz4RktdEXjENRjK64d74Ct7nL",
  "key11": "3nUTA4YraQxr7MxkxAdT3t5vxXPx9eRYqWdZs1N682rjnk3C3NWYqdsvsvxZd7kwCaawCJiLApXdntPwAwzEzBSk",
  "key12": "pY3e2xhBiKaEPShFqKYFP4BjuHTDgAPdcTBfrGsKESgHRCVxXY81W4XRZodPf8GDmAvVV2qEvqqcxqMhpDQyFGz",
  "key13": "3z5psHKE72ea8W67idDueRb6STLfDsdQ6nCz5nRWUjZ3xPkwpv8vycTND4p4gKZyQRPkQD1Ws9g4cZ87VX9acMDR",
  "key14": "5UsM2cr343iaApUAyxxJr4rCzTbwp2drBivpMif2FrvYUQp8Fa4YCoeNdY3EvEWpDU1eqjciffuHdEApneRbNyT5",
  "key15": "4vtqXLF1JLg4Nn3YC9xiua9m3EvpQc5e1tTtD6G7CNFiNnaHXxt2cWRxJJQeFdaiRQMCQ75CmrrnpnLa64zVf8x8",
  "key16": "4tW5PkzATu9PL4gnT5rJhECvimwe4p8tZrQafgiADWrwKN7x4qcdfkvzVq7e2LQevupgFjh6tnVgVS18LJ651wYL",
  "key17": "21Zxpj4HhtaAfNtTLJ8QKNmKAwCykvzheEcEFVPGCMChjpt2esAEk6FBDrjmxvdjL54532ctCt9YoF4K7MejpHjP",
  "key18": "4K4jn81DM3RyywReyM7dLJwtEoeAQVQ7Cmp2srosdipfAJ7QqHwSYunyGE8wha9MHt9qdUTkfAU5YTc1CVyeMsdZ",
  "key19": "2dU9cTx6MJdpYGzjLAhZQrepCmb6yZbiMSStv8DBiN2qKWv2FBCtAqg8Jt6HAtEZQ1eeY3BQdXjd7UbcKGGN53f",
  "key20": "2o3CFaBD3P4AT9XQVE1w2AxqLck2fodCyEp7AggrdSUQdqp9wXpEfSF2NtqKWEJigDo7TKwa6u8afsciTYEFCqZN",
  "key21": "5zLNPAmx3VeQT3nfLuDyvki9x4wRrwFPzSQpbKyqj6FGVWm86FmZDV112rXPPSSmwtc25j5SZUguGBbdb8ScDumR",
  "key22": "2tBT8VyiGCCAYm6acBEqJh9At76ixYZAPwz1eDQNGs8At4QnL8E7wNsHamY19AgVJZQi44MfbqgPg9JZEHmAvZYN",
  "key23": "28vpK4fztreBNWGoCeHXshSsKgCLw5XafxurErAX9s5mtanfCmAarnyfFZAAL4iPWpTBEz6kwX6rkrLJ3jZ4ozcd",
  "key24": "4BTcpxQsJto2Q84J9PbVPivhhjEtxcj8ww9v5aMXCvB8QoYcLNmAuHaYQAiz3KURcgL9tdLECgfT6EHDh8PywThD",
  "key25": "3kKzeuXxo2RmWYAM3TXJ5CX58kiL1RKqRfBXce4M7wjFq77pBuK79PEc7VcnxnbChV2bakvywgEFBZacZGoYGbWG",
  "key26": "25XqtJLAXL4Rb1nh6vKTPiVoiF8odzNtf6VAsNBnruGuCutPbgyykQAFNs9KJxeDH89V6HXFRFHWBgy4nepvKKJR",
  "key27": "2KAPWx3V7tCH8KngHAMNiz13dh5B8K17Y9yr27icrg35y1umaHUQnr6EAHfCibD18nbjfmCUsyTRoNjkjFvX7RL3",
  "key28": "3uikrrW5Ra78XJvo2FQ76yY54RfTSPPz4E44ionjfP9SF9oZcajTTpJ4VfNYyerTUV6BEgEajtRYDWfekzdgSVsH",
  "key29": "2azTnrVt9WvJb5q9BVyiHfMgEJvFKwU4Cy8JZ65Vrx9TqkwwxBweUmMadtcYY8YmRvgkTgRsHrEUALDXueAz57UM",
  "key30": "4fLNus48rChbUgWftHTigQhZXDcVv63X2jm5BVm3ufQ57YF54gawt8vxtV9WNoEr1p2cGhzzo98T2dcZvJD66PNn",
  "key31": "4Ynr8Tg2SRVHhqCnuvqjm9sMDKbaKw4xEuzFGcNRMkf3d41QN1pTpAL8jUCjVvvWzUpWWbgLDUXugTU1cdtdeNjF",
  "key32": "4RuWN8FfDWTWjZusxcfB9kjfqswtYYxMBSgeni7zYghoukdvLe3C7Lmz8D7TPYH4ML21bEcDpyzb81Sb9Kajqcou",
  "key33": "3xbwBfegBq2Lok9baY8wKfASWuJFEkpt5wmCKsCzTV3JMt7sUgBzx3KRu792nw6dEJXcmen8TEXEcBGxENkyvBh7",
  "key34": "5E7MY8mGuPENp8gCn1KMWs7We5XZdJ8njrhWrQAECa7Ksd48Bn7tq6hHUF1uwoQoTj3JD8gS3RG5pKVVgJG9VTDG",
  "key35": "3qRxz858ZiPmdaxkEQpTWGHk6Extkho2mJeFjkKFrx1L7rgPsXucUS45CytyhuFpakoVXNDyzFVqqe1nZRonz7Aj",
  "key36": "HyZ446XtzNeqtYMAzTjff9eUtQk5621a2arpfzPbMYhHkffCpmUSTzMoqrE1MNwX5LSTf76hQTwoje2WjxfTtnP",
  "key37": "5cHHyn3NqxUB5hNjbemmrEL7ePAteiEyfimPR3ZzjfxHo7EMtrP2ibZdcwgjq1RPvVZahWR8LKd2f2k8uBNXgRSC",
  "key38": "57ardNsZSw4NF2ZfbocwrXj4H5M5TFVXSUCyKkAPB8rru6exg3ybZyY7RhvzfAzqVrUQH13bHUPWYvySKe48JJzF",
  "key39": "2BnQVn12bsn6cK7XNaRrTKQH6so2FAFwtUSG93Y3NtocGohiL3WPPP1WPoAwHXrULqLBxmG4UvFm4LwLVPpPuBfH",
  "key40": "2UMheddgKpHQGuHuHQSr7PSPacYicwmXWnQ4T4WKSQC6SFKHba7M8p1jv9VatF8JyGQa9uRAU6yCxE2fMrUbLYv1",
  "key41": "2njXStDSt6X4EZMPDpyzRQkeXY8ZLvzEFY3AWzC6bvQSTYAn4oVQLbV9VY6NsrQFSULzLa42qfHt3Naou14B9zPC",
  "key42": "5fXLMwJhLrKZduho66oH79oh7bc285JJnbdFpoGxqst8wpFm4bJ1yNouHqoBQKSV6etRpGYeBkxB8i2EFPTAxD4Q"
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
