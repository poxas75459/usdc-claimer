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
    "4tSGnqyS96UuD4NwgmhFikH5MSd8mKgFiDkw4uGyA7xjfXz8LYa2E59mkWFRDQe3x7ThH6r8nbKhW9qbzWM1EPHs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pYFKYK57cfKgjHaUxATfxtSaP6BcPWTV8TMztxqcsPjKRw12iy5QYtAeJRrZz7YHTUM3H2Cwr17b2NDZgaH9GGh",
  "key1": "3TxztUGkpjXajgEyhP4dVxTPgbybvuc7LkZR3rHmdMhTUBPWySvxTfhhLVKmNoPrKT9tUH8U1HCmwKkQwkYxMQmo",
  "key2": "54JRfgdCMbzynzz4QpjKpwuLuAW4r8BGmFnJe5xASBcMS7LH484yoowcT5PJsd3eMw7M1McXBtHchVHugLjzirqb",
  "key3": "1RTz5wURx8ic3emnCufrREADzr76HyJ7kjMHGQ8o4nApAJCxedie13fxEhRoKFzRQZpczfp78GuAU5YyMPvo9Nm",
  "key4": "3DLjc39GfrddQjTguyjdDzUtEyDL1WDUnbib7Tfi66z3tze8tHUHsCsNB7Fe1buNKeFh3DvRMw18xML1NaqJcKfd",
  "key5": "3MrTDRxLy6HGq5M9M7ue4iAcEiDZfbnUVyst5m29qx688x6FDwnPTfog7upt1opkYpsjJaMAjRHiDD3TYsxm94mE",
  "key6": "2PSyDvLtrSogJJn9HULnKX5S1FfDDYdmMUpinu4jGdVx8SHeRF4ipwkixH67NJzCm6qPLJkWgjP8m7SzBQAHVJnb",
  "key7": "37adGRNcwHDzTvZC2msGH3Tirk25z5k7bDinsPV3xFr2uP2DsDKiaiFWvKB5oJuxRjESvJkphkvYBzxG36SqqMCa",
  "key8": "65HWn5123dMSUV9bVfwomKM5k4qbn3MQnBVyVALrFLPCbVvnKsw2P1e6XpGooErMTGHgxeQ4chbfrKJc9SU1Ra96",
  "key9": "vaWztwMpCjynLYG3Zq21w1b7GMgW1qA7WDhhzs6jGQgUfZnRnrntty56aNUZ5J6ZALGouHGM6keAuQBPGrFAmz4",
  "key10": "5hnVnFe52EvcAbbuRxhkyQfkV3MDySCXK4NkM3W7Gkpk7yV4fkDJtVER6CqV3HCwcChTkXV84nJD1UqUsqmK71Wx",
  "key11": "3Z7cND5FrnLgxjRjSZqiZaGnrpkCFxzyeJmnaYroKHYjtJovCJPXeo41CxoBkugFzQhNZWgHji9pNoj4viiMUAFi",
  "key12": "LkRBpBLTHcuUA6u7ngikBHHQwmWzBfwvxivy9RoyUwpXrevoY1SGW38K8MtLv2spppPU8EKACF4E3cWNyu6bapz",
  "key13": "3J7NvWQTpRk1mnEPG8ve4XzVZUrZsikAJdxRcM3YP7rWCRaLRRRXaB7shio4Mf31ZAdw2LwPg6bbEv9uBzy8zkJm",
  "key14": "4PLHXtVQ22XZ5KYQhxbFSrM87ofZVm4Pkpdk7qFYv25yZgtEq6V7xJ356vMVQUfjAfQFPiAAj4hNqmcWanF1N9qH",
  "key15": "38Uwku3NJBLVCaAVniET6H2XyAMnRJQA37kj5NpPJhwvB6QyA5L3zjvJT3QBHdgDE2benX2YEAf3kuEMEji9MB5K",
  "key16": "3nowojJG5vCgbZ7AjK3sG47yvX8HG3iRSEsy3HbNbeWzJ2uRNbkBnQKMJ6dTDCfUMEX23KsCEysPGcLV9kHzGrXU",
  "key17": "2UXeDae14NNvFN8h3pWWhPNQLM1oGU2F19wGJ4gDwC8kBVWLhgx5drsXWZeUttH6ainL6jJtiZ8J1Eyu1X7sD27b",
  "key18": "pFcVDma1XqT7uPVB8UMazMH5eNf4UpQJPjb7PN4PgvgAAV9LQDCLBRTGc4NXx5NHvr6RZcaP5vGP4J6GvBbBXrh",
  "key19": "589JF63qv2sL9PMKj2c5k3BHJ2bzHNpuD3x57H9BAeHDM58vm5zTS48n16U4LTjniqFdgxqFNR1QJeKRhaM5bUVX",
  "key20": "26HnxQzHhBeYjiVRRqtgJ91MW9ppVXQgsoYCUNMCm2px9Ee6DPH7CuwdBMXc2wTFsgX2xwpD6DNdw93sojTjW7VN",
  "key21": "2s5MudLLmTY9Jh1ntyVaou4uSPkG1DaXsDgy8S69ZQAoaM6eFyToX8Ahz1QKViPrSEBPTNK2feKtbATjiUmSRAVL",
  "key22": "4qqs33HeFc9DzeJ5GM1KV36fs5ca4bHCeaZxJYq4CSpaAH7BpE8Cv9yajFhW96yHoWBmG1ZuEGtFoQycLkWBhmYn",
  "key23": "2UuucwKJUtJ4urEEkhLCkvZS5NV5im89tEh9g13hyerXev28GMAAMWZAMDEZ9U4qMJEqTZqAH2LxrMByLUh6uRpJ",
  "key24": "4VWroAfVPujJ3saudwyCCV4G9KQ6Niz2EF7pQHUii4SVFgWAvNsV8cQS5W12CeYwuBHQjmAYo612W5jKPSxVTYGM",
  "key25": "C2U1amB5DDtfdU4AgmBZrZvYZqBduufcGQNQ4KguNgyD6CwqP49wK4LoMS1yhRofPZ3aQqrnK5dsQF5fC26A34T",
  "key26": "5XiqPbgP9Nm6YmiVNUMjmR3hucE1RJnHKTgUJKURnZKvmgM3Lr6D9Ty4hDfYZ5L4GYHRwPKLvi4AjKGUkHWTQqxi",
  "key27": "56fwkhnR4XdPSLMRR3Ccb5jKXS63ibDTw2DDEShKUwpWThEd1XRFQK5SBc2C9Yk2YL24DeTJi9rPiRsA4HhCWxP5",
  "key28": "4LybBf2gtmKtvRvEpyoL23jPKrJ4HghoG5VX3ArmHe86JfdL8D5uzQemtEd1KCV1GnoSZC7WTELhEjNaMRXtMwW2"
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
