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
    "5BSdDMmGU67JoJ94RX4QveUwqkrBb5aQjRrMjk2QuzbwCuwdmhkpPgCAYPyr7UXa815hEQbH9BrS4dGkVEXK22M3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zJ4vQu8C6CtTS6KxGHDuGLrDe7hrBmbZC8oH9hY9J9pTxwL2mMfeh7bCEM2PfpsEgsahAypsVqJwhBVYXKTqG2r",
  "key1": "3PKEhXPkihEDu223KB6CUJUC2hywHHhaNyBxwxKroqaxXKYhuWLQyqc8GrHZsd6aVNmq5SKhuLa5uSzSY7V9chEm",
  "key2": "4XiFsATzhNVrCSMhKNnCsAQysTF3GKjG2D7Y82eH8c5pBqa3ch7uBHQceAUi3f3eNjwqa37QuHM9v4vfp4BFo4VG",
  "key3": "oSVHgwsCQfK5NNXx3i5PcLhHuU3UQhKpzEc7nZKEMDBC8JQpAXT2XdwXV4WJbC8B36TNBLsAHJFS2HyZKfFUFuV",
  "key4": "juhxN8hSWw4SW497W6EkyHTERAHNTr7uaZX9zhfNyWRbTDAn3cbaMFBaTwdkn5k57HBVWZMyEREExXV8BLmn2AX",
  "key5": "P6TAQTYVCjNWxza3E4EEA34Kgbt61bySRLGSJq6DFuWUpJJRonvrXo1E9jN8sdrPVWCZvHKvbLckH55rx3LAnbz",
  "key6": "xFrTawgsAu4oMSZPBXds8n6Z7dCQejK1XEg4PU9PPoyevpf9XJvbv7vqJrEv8X8BAdVoy58hh4811UhSKFqBqCx",
  "key7": "4aagFKhZwpLetiupMg4uByiH8XXkY1B59eDWZqQknEUcufgX8x23eNrX7N8Zvxo75YTCbMcTYz4dokiWtyfN8TZo",
  "key8": "CxFuG8Qzctn3WPJWnhvjYvsHySurvMaLwApK22h3q57EkSH6WTyMR2GQgqs7NUAYVp7u3QMSvvGnPXjLQETsTfM",
  "key9": "3Pm8Z1o3Gj7HuHDsoPAKfwrmPcfSs2YxhKgedq3VdnZUdmKdN44omJSbRQY9feJpv1cespSUhsdCf7pQMxKLP3ER",
  "key10": "3DrEAyAfgWnFL4vsiNJnDDx9R86PhnNU4YnHN8eov3fDaFgpSP9ETRWykJtDK6nj4GqUsL3r7ZyLcjXhyRADStmi",
  "key11": "24eyHpLT74Qe4X3PE2cTegxykso9959Vsr4QVyE2HC94keSV4QLc1wohTnJ4hrUMvDgT22E4TEyRqvdeBF9G55ws",
  "key12": "9Vd2LfA9ovR97VEzfQXtPc6KmkBSeyK5sPD6R5wvLP5CEiJccREffjT6zBYsm7azvABDUanp1TEsW1NfaUtFoSA",
  "key13": "4FnTNShBPDM2mdYY5bLu4e22h1PaMyStFYtkPHVqqmfEamb23hjhK6JKfwGD5HuNDjUkjjgXdbuzrB3D6bsBQqep",
  "key14": "yNvrNe5nHTfaeDWc8py4oJCwZGedwh5gj7fVrTTYYKkPpSMia2EAcTtA5HvrzXtqdZMPPPjoLyN1zCm7vxqJ2iM",
  "key15": "5EidXYSrQJPteSpU42W88SttnGJ8DDt1iHgQk47nc99Ffa89fuNWN7zYsc9AbVkeTcogLa5bugC4NiqQ44Rux2m7",
  "key16": "4dX9hwQqg2vSe8BqXWTAQq81auwCEdAcnkzrUfYZgHthqWW2cssEEkGfM3WTrc3LvccLue9eeMU8iPbDGVVqiiSR",
  "key17": "46D1NH9GVAYaMn6Tj3fXfrUG4zXFC9qS6wMqqbufD14LenfXtejbkN17dNi57GrdEnJse4sALdMBnwWHcbHkXLBa",
  "key18": "3aABVr3TrY8eBbpKHbPMt3RYMgyxCicPSNZiSioDrcyuVNqmhfKJWLHTdgec2fj8r5mknKnFZRCTXjfDWkLGUAmX",
  "key19": "3X33hnXNt9NMKEvzkK6VpxwigP1J9LskTk42aXyCu63Z9USEZhQHksCphbhpvR7tSUnnsYG3vKJfcw1PNh98xVeZ",
  "key20": "411TV8YQzKetuGw8TxXozikanSTJBEMhVghWQTkYhELCLdMkwp4vaJwMWZECFt16Q5vcSZQfb6VmrgDjrnAKZ19V",
  "key21": "22PpaN9kxkUfRMeYLZtXTG1BXGx6m6YC1vSahSNe2ejCdB276A3hz7c2YS5kewihUBenAn3GFmDZnhkNWde9W3EW",
  "key22": "5KCyYfDDu1troS3zvAcYawoot5ejV9EnV3E6XnpBkKXcC2E87QnVN7etvqXKZBsgQA5Mfi2o5TqB6f5idxXVq5c3",
  "key23": "41brxzCPwb1iZHc9ZFxbxKRbtK5knnPvKVtq48w3zHhXaJ8dnZoXNPncCXmD1rqqTznfPBVsc8xFx8RoJPB63HVc",
  "key24": "5iMSXt3jPx2HjtXKkGoPFuABy6pdGMV6dS5knuz9XHHeqaaxsixoaFHVjikiJXWJP3K1xxFWkVjFtYPEMauz5c6z",
  "key25": "aUc6bZsgGgYUoAKPNHtEarvVoQNXWasDKj1u3xuiKn3DQJCMUgdY3Up86MPR9cF9owkqXsSaTJTxV83j7Ag8rvS",
  "key26": "32BDZkJPqyc58DPdhf29STjLBQFSuD844kpM2xcs3dULTjWwtKNGccPy8kbQkhsdNM9k1VNu7A1CkZsiHpEyuFR8",
  "key27": "5H3E94wPjuMTSLoqxrvJKTw9cuAvXKzEqf37oWpbRHgq82yCEzbVdhjw9g6JQ2GSkpcMqHswyuuSywK3K7rrgYwB",
  "key28": "oYezZTQU2Py5vPkhVVALvXGN8fNp36AA2L5s6K9ixJhpmpx9NvCMDxdJHNPy5cTRivQbLwDVcNr4esu3G6sDme1",
  "key29": "3tiRupQjcEEpnCnUik6P4xfVM8hnXWqwZu5BboQyR8Pcd1UKinwtfjLn1XzHHedobM2mUGS97bUD4bzSoEzBT85U",
  "key30": "5UpajYgVhuyrFqiYmTLo4vZapHezqWLwTCekfc3mYNQufuuQWXrX6CwTDDmenohXBZ5QokuZFC3UzRQsfkXGq1qT",
  "key31": "2fzs6pfRdYBWjMRiYTQCoFB7Xo5wxLZJ9Bj4Nj8gALRN9Y8PMoCW2rw18VGhyyesDjQ9rHoA9ReAPs1UjTJeYcsF",
  "key32": "5PUvneuWD4Jtk1Rzgc1xVAVpSZNv8cpZ65acaAEEM8spmc8WqHNt3LpUezgwAja4aKheVNdkKE4ws1pqvpspnJmF",
  "key33": "49n1CR58i5TEZXNshaJKSVJAPdxGf2p5yYW2ZxCyosEo77TwwaVsuYfekfUu2iSynFXU55e5HGGz5YFLAXDt7Nf2",
  "key34": "d1jqjswqFwLYYHVjj5rnBKEA2xvK3dvpKSWzRUj8pyiGwQYnN2UX7SboWXoZShxN8UyejyXzupHRsFs2Kb8wcKK",
  "key35": "bnjRj9tBHJ6NTtGm7NLef331yq8RYF6aJmQvhxYMx1wGZmshtEVUEdFufdo4jH1KNU4SwQN99FEiahJkwoxk5eQ",
  "key36": "3x7ezGYxuBMzYiTdtcwpcBn53vrv2cZeeGzTDLvMWfuNVLmBh6PqHCz1v4DFFpJd4VY46jGY4VXvtbE3rBqosRnk",
  "key37": "5hz2QzkbAVqV851exQT9pVEf8ggcWLwXnLkgUJ77A6Xj1pXmFtQRVtQ9gPNMThzgWtZ2EtyKbmM3ppRPNVyxCdJc",
  "key38": "4wTnbxQaDCQxSyUtFzuBBkgs2gzMsFwAC1RYtSpd8UBNzPFkZVY3CdqXZTQZhffAZ8AEiDqxTvHzv2REtRNdvCig",
  "key39": "3x8Hyt4AV322a1fsVFBGLw64WbtMbiUMm77SeP1FCQTPAchZMtMbUKd6UW1PGGNAjZpMkC9yFdwnLdB98DjVn4Rr",
  "key40": "4xZhH1jbJzYF4rgwHx44aoQFKvmddLdkBGttnwPr7Kj6ssZEbrYpaTGXTuW6DTnyb8q3cBx8mDkrbnAEa7szjzBt",
  "key41": "2AEQY8sTF8zxEMUmC1tioy4wys5KYzfjMvWfBojhaNKh4rFqsuENzQmeWMxZ8d2tiQdcHnZ44J8roBZ6o3m8cPtq",
  "key42": "suRLJkrWxSjrEPMpCFdoNwtoRXBBEXwvFgTKuTxeLMqaiJAvh7S88dyzqusGWYUFpdMHS3G8tCujGX4t9vJDiVE",
  "key43": "58aomAa3oCziqzWHTFrxqEVg71VJqqhbAHzSb6ikhdM1F1heUYa2T8AdXUdHBYykzMuzt4j3v94B4wqYcDGvUidt",
  "key44": "2j9zHzXXzv1ZmeDqn2gERstdkX3TFUgeitwq6LAF76ZDn4ByP5SYY9RWuefbUN6m8A1RHjRVVqeJbFoTmf8c7Pqa",
  "key45": "24otuB8CAPDj62b9DbbGNJHcpaTMZK5gm9nuYoH1s6C68C2MW6bfqbDKXAtwaTcZeYK2knmkaLKgiqmqDwgsMGoA",
  "key46": "61GkkDff1Wwkrw6KXvp3fCrJjUxFddb9wFmaH7kM2vKLYUXKhEGPFyPNUUeC8bcTSikbK7RascvkRFqWpRJAZoU4"
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
