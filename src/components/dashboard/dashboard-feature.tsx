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
    "3i1kkomRYgRCNEdDPxVNf28YFwQHBFeYA7GTE4e7zK2sAQDJ6y2DiXgMfpgnsxvYsiicy7RXty73WZ5J63cMW1sn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DQaN8NZss5ZgrNHVP3mTneaRNMDD69FQFpnDXubqxCdVTc2YRq2EFo7B2rjMnnXSAfsBY6NLt8c9pGm4iqNjGvm",
  "key1": "3FEgmhouoJnd1t1q98gEBzzppZ1FRS9m4EYRbDx7WE6qsoPaK1er2EoRD46UR34G1Y3qF8JHmbA6ntCQDg8M8bnU",
  "key2": "zS35LByMXoSMxm5uyGmRUA3Fv8dnA7XbCT9usVwzSZ39Zs6qHkjw5s653hGcZLag25xKtgscPJno51inTAymwVe",
  "key3": "29fHH9HSk8sKbVeyUggpZHgqFWVYvJMYgTqWq9Eyu6ptg4mapYgamxr584ahyUk4r4HbMkZ1upRTRcseyoimwYtM",
  "key4": "4C5dihgU7752TVMdNiwx9bZB9RQ5kXMQK3JrKMJHBjCL1fahgFfXYphW9qzLYCrycjwWG8Mpf69XnyA6imAJ4a6g",
  "key5": "T6kLF4FYErtjzStCF2f91Ev1ngtMmXkuqaMwEnKSoAUoAjZ1cN3PedH3hHMMQxQt6qcfncSdpTVRLAShN79aMMG",
  "key6": "3M677ygMwRX1qRU78uCXow5CnQreN8UUz42Dmj89Y2MSMck15jg75KfCYd6ZgiKGvEpnuQEXPLX5qHE4ji9eM2EG",
  "key7": "2kkFBSRoRvnji3bRhge9M54ULRZnw25PoG5tWp8pBnwCthHMvA7xKV1daugwL38Bsyedoi3MJEpZfueAznmn5Txq",
  "key8": "aKYLkjj5YnjBgPz96PFAViKgo6mVPFqfGkPU2EmJsGnkqkNXzLcUXNn39xR9WoxtSW2yZDhXAsd9a6e9bNE3urJ",
  "key9": "nDQGTbq4TsGU13n23SpBzmGMDUfU1phttP18TizVk8x4B5YCDn7fEtKMbgffzhDHznNfYDtvcsuyxP4cA6BfRcH",
  "key10": "2UcarXAx8DpcqKqxtnWCeP6RkKbnJD5bmCavHsCcCpqdCy1S69RjeMLcU8aP4EL5GMC6XfjHTqee1yXeubCUbyfB",
  "key11": "28BhKdBiJT8zdjV61nRigFopRiLU7brAXLLfLhF3kXE4x2G5ZyyJKiNap96rooVbjrjP57B8Y6nB4Dip9uXKKvMK",
  "key12": "49q2xSYjmm1gV2YP1yG3ScV7tHncfrb7qAx4rKZpUxAuhr7cr1aDFh25gbrJEpLWAMYeLz7FefBb2vVa8LYFq1Pe",
  "key13": "ZfuFMsp1xrd2cwfv6buzAR4rWbzBvGn42qyCjGp2BWkEnZvyJSWSujVJQ3HbJP95EdvyCCQymzyuAVb2zeYQEyb",
  "key14": "5M3RNRFbZn49ZrJEXfn8UGhK1Ln2wQ4Qm7Bs2fuiQhUWhaxJM4nkfQpTcuc5j8QerujsGfb3BcnPSYjqHw7vDNo2",
  "key15": "4YyaDCoAvmGZcYpZuSgkm1ytGtXuSzd318ZnCVZakhLneUN8PRqi4XtCTZo8GNGk7vj8XhwK1PxpzC1kW6RHCDXh",
  "key16": "5QYX8snWPrq4HNQuBvdxTcnQeAQzFUUrh8H8hqcfVRncT1TPCrtaVd1wdG4qFcjmqSXAR6eyavcgue7tmfs4qSLn",
  "key17": "jUqSUkvvoDEtYAG6ntLQkPuZQq7aRuFzUyXG13vBMkxunxJ5ECXtAzNe3tfitA9hoDktFuJvkw1k7PrFiKiaz1n",
  "key18": "5ZMGo7Qpiv7idRFnzqHqmFqxP42dpDxtVoDTJnqH1VJfALQCPqU7oFyyVHXTyf4U3iDw9bY4ZvafeXVSyAfHdMbc",
  "key19": "5xYsSk3Cwt2SHLZitVrm9CRaH9RhSyCKRS5fy5Lk1XiG56x9WVKfVonAMt7635FfrrdFT8wmfGwZoyQssMGFxLQc",
  "key20": "5WG1L44TBqmSGCc6N1HFAgH1KTfvWh6GK7AMt4HLT3spiPDnwkVn5urpnQLWZJoho8aM4hNjeoKRzfEbdgrxMDk5",
  "key21": "5nXgpYY856Nsop7ZD4c2syDdmRBfgLCAxaR4eGd6EHPKwrn7U9LP8KtKvXT2q2EdX8AZ7HPUWsd6kVBfMEAQ28Nv",
  "key22": "4NSe1RdbDxcydTdFXA8LvYAss2K8Wa1F1ZgZjKy1SU8PbmtCLg3A4H9q2MwuvRuNbgLywbYmKGfdowJGBes2vMVx",
  "key23": "3cB6NeVNcJrhsUmcobAu18G86RASXLdvTmRwXFvtufCmfr5MBHQd1wJGdMkKWWdLi2eM2BpzgrHknU5vXwijyTby",
  "key24": "2ztNKWb5KFTzvCiQFExjxkm6wYtawPAhMKzqKoTwncv3Zgv2w7JLLsTVTqsBAo1ghK9sCoGLpquEVWu63CA79ua2",
  "key25": "4fnYSYJhXQRa8MhHCxdNmLvFz7NgPSE9VszASo4DJex7rGmbzaFT7vWyAdjEUzt6merbWputVfEturRyRtCRKJ4x",
  "key26": "32LzW5TnCqjownn4fuJFPL7sAFATjtooUHd1ZNQZyZy56dzad3w6zfw6qMwVMUEwBGkVuyJgbAU2mJbTsy4Lk6kS",
  "key27": "47pWwzzjjR5ba6LD7NfC4LFXn34XFhG9mJ5yW5kxBCnrCyYnHhfDF93299YtHqNgaiae7rm1NQrDBgCzcwcUywYR",
  "key28": "2Y4SKjVGUxiSmQmVMH8RMi2zdLuywroQR79LnJHtVPW9ootSEkgwVBHo4CTtoJ39HCUmQaRCkqdM2gUzWjh7QnrN"
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
