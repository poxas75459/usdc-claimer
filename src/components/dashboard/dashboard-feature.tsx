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
    "C4U1ePC4T49AvmEwKEjipcsp8wM4fpGoQvX93BdjgkZYA9wQeNPeQkwcaAu2NdvrXKWfbdKvZVHihUvvdnXmEc7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43bAY6D6cfUyaoye9VDbyAzUdc49hXANnoJ2rT4433CB7BKgc8Wy45LkDJe3p5rt1ZwWLTHBrVvPAuLUsD8CocsR",
  "key1": "2f7TMmLQchZca9gi6f14f2Q2QyuAnLVrZNoxFcHjkTaSfEMNQPMayQ2xbkUZFdSHFGb1f9RjTaTWFurJSFQ3RP9w",
  "key2": "LvMfTxffACpWUV5os19iwWj4L5VBDatGDYq1KkkwMeJpYqXGae4pdeBiGBnajcSfqetd6UDT1Ce9dAoQmR5mR4U",
  "key3": "2DMsJ6f8oit53tD6cVQuVFjE2z4ip9wSMc2obQMm7ysBkHHtMBa62uGD7322X6d1N6oKmdmsgc6xwU7tXHYCGMgZ",
  "key4": "5nvafYvTF2osw5LEkEWxZBFkYizNFwoXEZHMbD3wrysoc2VxiCB1D4jBWjtqPfeciaFXCSn3LYU5SY6SaZQmX9zV",
  "key5": "2sXNLTeeULjVgSHQgJcGYBAANdoE5p2JBwjvRkQ6DS9JeJC5VqZajYHqBH8odLCt5SnNrgrzd4vLZTsGU8Ax1C8S",
  "key6": "3mDMPvhtQaZJ4TUhz8ELkyyyd4ywSPF49eT3yJd2gFRdruK5J7ZYVzr9icMwGsGS4s3uRai7UsHBZYeQ1AhsJ2m3",
  "key7": "46nUc7HpUvd6qbSESx5uHGnKMU1UF4UEt4yKK76mkVn57j2gt2mHqDLv2Y8V3uAynDopMW18qJmE9zpNF6x1x2AU",
  "key8": "3f97wAoEpEWxJFr95u4v5jnPvnQ7T4qaQcPNdatLp6pP4rMTsixkbDvg7et2B1R4mRJ8GbKRUyYiJCEt7Dd1AeYn",
  "key9": "4znE49zWdR2xFd1JvmzkdK6982eJXuBMWyoJUGF8qaAwW2TE3NsZ7ux2MEcCyFCpNnRmnuPtbeifFVX4uBxqfC4k",
  "key10": "nPJooYohGZSafQfpBFyQYx285T8rsxThsBUPVLK66m9kkXCtp74ChhNya7u5pDsPN3EKx41zoXD7J7VU2iFGVpk",
  "key11": "126nbLArqG4xxw3ofCeuS2ngfta4v4VcELMdMZkDHGxBo6hEhext2CaDsYoNBo9tvTR5ffMSBEVmoKhTt4mKZw21",
  "key12": "4M17q5oRfPrzqHbFa3EoGTQxqwb9PuU5GdWE6XnuhJBs4gKkoYCnUfzu9ZXZmMJC1gY4FNjUP1oC8pJm7KWMzGy2",
  "key13": "6YVTR6iiN6G7EV5jGwxCiWZm3gnEnNCE6cywvxKkcKS44t3kjmnHE2nRLcF9E1b1fM1fXwHt51kb98BrWfevsL5",
  "key14": "34yJBVzoVCS18bSMdqCrzmpXbHfray1Zh8skwgp9B97xFXqUuk57M6x8N4et7Dok5869KNNxyuHRenDZ3fFRAboW",
  "key15": "67eZQYxUdqJEydXyLxXseDnjUe5G2LdjXByXWSvmvQWCRehq4YLpqrxxpZSnDLZ2EfTvn5GGT2eh4vNc6hw4mQnu",
  "key16": "xrxG7E4mHb1Grk62uvfqPUfhjtVbqFSZ8kXyejj5tJf6uh6Ufdv4P8t9JtEkHrAEFFfi5QmiqsoCDJaoVCXF9ZK",
  "key17": "3WBdkgBDuDQnH1DP3zw857Ue1XE3mdbqCxt5UaPgc8TBugJVKFjTonms1Luw7eW5oG2krJkMZRnVh7fsu7HNykQH",
  "key18": "3WNF8AiJWZ5AofJwgAjSUz6UiPTTz4KaRpQ1PxhPRmok4xfAtPmgNr3FUFcwx3gqEPeCnaM4hbGbH4YnUqSabFhG",
  "key19": "4BJ3XQoPSEGdLscK1Kz2D8JctG9ycVgQ6zvhiYGocV5b76KgRNuwEAggyLzXizSf7qrDKppNBhzbT4rPov7ic32p",
  "key20": "628KSEbu3Q1S5QkJNuSNYknu3inXxz1g8imDmdXYezAr6w7yimjpeRcn6ZRznJHcz8HoLoDwdiFkXL9J6jUBxLEH",
  "key21": "4kxDd4T81JEQDZG28FWE8LV1RLw43awTbGrciHLKXVZM3aRfJitF7idPG8icNUtbvoe3TDXFgG6sSxfUJWKw9RsN",
  "key22": "3AE6LJNnCjEdbmcDQPJovrG5wMBdvH38A2Dxoyah6MBqTKtPSS8iuXHfsgKdgb2MDuMEv1veMgoT9bciAWYEPHRc",
  "key23": "4jB7nHh2FZuVNmf3ecFTU13dmJDKeQTxELkhgBD6gwphjnZeh46kuDfnTbCeCRBWS2pQwCwfnHZK7uvSHTKheRxA",
  "key24": "3hDw5efkDxuX8Yc7urAbRits6PG3y45vjjdR2xELRXW6Q9QLuwnaTfMxD7sHUySgitZqa1To8A7kK4AkdiJ3SF8m",
  "key25": "4Md51DTkcg6JKF87fq2o8F5XEckuDWJW1Ucp3thVdU63751f6g5Peff1qrdzQBfhqW3imP9MhnaVSgy8PVGhPtyt",
  "key26": "3D6pwiRr6fgEckai1LToCyLRbMoWejPRFk1XmxjTveFsi7k2d4hERNpYXJXCo6ggKQLjfTe9DnBXw78BVSgxXfim",
  "key27": "5w5oTBy3vRxCtyUrKMChCHtjaVdcM9b4nnDdhku8wMbBa3kgJwK2CYB5mcmw2pkCYHNyg4RJ1nbBCUXVjbhoGQyb",
  "key28": "53Tb1qw7fCK5bqLcsMjfKPjEBxAyq7iwwXfq2sMrWMAAV8VFfadULVj2FFVJubRtSNVrtEYyiTa8H853UX4mUvL",
  "key29": "32YfS9aFcs5vgjn2nZPAQMCLyj39ZsrNCkgZZ7vtkZEa5VvChSruf5BvFbGHyfmciBvJaNBQnnbxLTkTxhrEd54N",
  "key30": "5ukPKS5k9vTRyBJhJRUubEwYwvUWyFJ2idkVyb1USYx71xWfpiTNiUaNyHMM1E3x1ELFguHERAam8kDKkyeFdMQw",
  "key31": "vUXPxbA7dvqXHpGPzBnK1nkHrcMB5pfPzjHMKcbPNGs6MRFo6QBEZAVFgXPUZqueePp17BnhbLuVCd2L1Qj5j1o",
  "key32": "3jjgomeCT2Kfkyxyd6YEWe8UwoaHZV6vXwDsoFwUMtiJg1DaXhCDhrxgoJQQoULHbF11917tLYHaypDrqK7wtnXm",
  "key33": "UrLNhsRzwMvP52WYz3ZEGVYx3WtzrTExZNxmXBZFk4bafzjysFH4Uwnz9SBhSVR2YULTAjCESxVLmsEFw9v48SK",
  "key34": "FpqY9fpF7b8A4huSezSDmMZeGtbtnf5GopeVZUjX52jPjuAYZsj3q1pririd55qYdRZ72H9toVLRfayjpKPncZS",
  "key35": "5RDDza4xxEUNU13ZrR6t2CyHEntfjhA95ft4toiUMdziuca7ntaKw2drdATxrZ4eDqogQpLynXRwnMBrTuYc1fdh",
  "key36": "oJyGQRfYpUkqcDnECmZLYsKTVqupLo3xUsBaRypJWJF4cEwEg7mpFz4DeSbfa4caBuVNi9LqFZtgeHkDjZHvbh4",
  "key37": "3Rn17bNhGQ1mwwSTXRk9N9UGnmwYFP5nC7p4hcQBWbXfqttWGGqnQn9UnSuvTSAYdGC9m2orbsbx6qmFJM3yqozX",
  "key38": "3ivuicqum7NenFjK6xk3WdUHyZeYVELYBTBqCbxV3YSEhivpLokNa7BqqkB5Cnv78TpuyRV94wfdcZkTzYhs178W",
  "key39": "2xcL8wcbgaaxYiiEiCxWmjgAJYGtvEv4n7XsnkZv9BNHwe6gGbCUgw6BS3qDTbxdN6ZLz8cSTH4ga7x2deL6Wykv",
  "key40": "5sXkUtoHmQ3Ct3aAZeFQ7kmrmQL4Ub5kiPZepgMwGPq8FV96M9Ej3APJE3YUsXEyzkGfNnPTj36xbZgqTgaFXiCy",
  "key41": "5oE53rrDtK9UWJXnfWyZyhJAobbs94T92vg84mSCoqkBbgbKLx2cka221UukQuK5BEL26hrgVx8MxY5DU9rVDSVP"
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
