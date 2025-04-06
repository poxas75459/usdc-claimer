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
    "2PMSjpgJbJ5ue4iDkrWYikZLzv2uj9rX91kPxR66GUJy3dLXmVCSnRDHUhbbhEsfTUBp9HRJDrCZaQEVwBTUo4yK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gv3DUWDgQVRnZfyeRgZ5BQSphzrqntoTgFNghKkSf3sVuFXQHdT2RjPiXYWHFzNVD3UN46WbLf1GhVwRGUT112G",
  "key1": "Uw7JRX97piFhcuxQrGt1BJFSvAD9Abquym6T7vWhwhtMUFEkQWapfqEZGH5trhHkhKNHzMCKkX3T7TYCgduZB7C",
  "key2": "Nu1YSWtjBAvFjusaJc1VfDkgUVH5d1vDpqEueAsAUd6wDryQwccsaM92aEgtnfHvW6GxQdxPy6csQXpBANmBM1W",
  "key3": "4sKQPVQU2PKxQ8AxZwkVix1tJaT8M8SjDuyRodxuP6CKArTfDyn7bdVcDs2VUYEbVQJJLMYUE4ZXG6KCnPKyf35j",
  "key4": "4KPv2ubBvh6tjq9pffS4YUKFYqwi3dhBjEadGjR2arPpMYdsyQMJnerj2Db2hZ84SCs78GCZ4Hfn4VrzX7KFXqEX",
  "key5": "6vEvK71TuFh5LfZ31g4qgfvFXW4daN11HekGrbCUu37z6GMwYcLnAb1Kjy4QR1RNCNS9uUg6FEFdgoT9uvwQFRk",
  "key6": "3ihH8njvdNBXpXJ5yVTCh4pT8QM22XoKoY2TR4wZjCmJpx7tzjJ68kWLTNwJZNmuGV1Ta3ExTPC9WWFjtd89KLwz",
  "key7": "3unNvred2TkXTxbLLUycSF1qac9CsgrB7rCgw9eBKR7pcAJ29dPmrUqzxsFCBtv7xibGyeJ7ksgN9hfHde3jm2Jt",
  "key8": "64QmcNNZ6rWY1Tsqg5wCBuG99LDDaqbG448tt4dpmgZYGTehxjqjs7x7yQbCvZv4GoDBfLqNjRRmmnfMbRUPL2uN",
  "key9": "niVZbEvGtWc5UrRUcNp5iDUPAqRcB1cfDmUgxGASZTuYVnip8MKyxjofMSSxDSecndXaRnNVHEPXf4iJmcP65qj",
  "key10": "5Y3aqdFfZFVzFgqdZaZv8EMK24X8Mus4BQB7ZQVNoYPS8QWGg1EsLv1rXDDd14QVyaCwhCX6v2qFG3EFsunEkTM5",
  "key11": "5SxBu6AHEg9vJXDdCJmEbJtVSeARwHnoRe3333tcZ537J86WfPcRAVALcm1botXrYJ7HwdAekkfnNNHCebFaWz23",
  "key12": "2kMQKLnQAcasNpDgY2joe2XD6apcuYiveoCYTBh5SscPfpipkUJXQ8SHQ4x5TGtQU3LL4crPqkFGef7m6ie7VdAp",
  "key13": "3DfUM6uFUqecfSyrErDoVB8cNFJPNzSu3yLwEGStPsiV3EGD6n4bqD3YDpNebTZsy4LiAxLikHPk8ykeX9MhRwCB",
  "key14": "qCmwWZvKdDdiNSphsMtvbDZd3h2mXwKdC3VsxukKG7jwcxcBKgBkdFaKwnMt5cm8f1Vnt8Yvh1mSWQYQpLxwSgp",
  "key15": "59ix1ife7swcuDAFazvWmrAXzL2iALG4kw8bz4CYRNzK2JBUtNmzu7KEuKo6M3r8EMtQcLK4Cjgc9WABTSAeeD7G",
  "key16": "4Yy2jke5T59iDhQUxeDmzwnmakAqggiyPtZa3gN9EthcSfBiz6Pmwxv4q2rSfaNMsAMZesptfZ2EghQYXfm8CCuU",
  "key17": "61dFTjxDbU4m3LnW5hGZWb15Xkh6Vno1v3oYtHcGkk31wDgVTvYFUZ2oaudYbEfCsPcUEU5gNPhPTjj4fjo24fcX",
  "key18": "5JAtLC5Lfii3dzmdZSkmFJiEjJ2RmAFLaiQfKMyabtpLk3x36JKKqHM9As36DXNHg2t7WsWb5B34Ni5m1Sn6E4UJ",
  "key19": "2ttHKLgPsSdhPaVYGqsWFgYx4Uni9saZYpBJB21LdT5Qpv6ouo1PyiCgZa9HRPxn7cSdRxyb76sLnrCUGjAVL5V5",
  "key20": "25vRpWX2ZENxbgaP2V5CczTCFYeSYdP9CmrCYEA3nMGjWdaQeQJw6PWhcYWSwwo83tTaG81G3ZRMM4w9AzK28ssc",
  "key21": "2ZayRa4EgT9e3HSp25U7QsQMRgUqc1wnW3RnNXsYrhTgGwiMpFy9S7EFG1xcFLDnC78bT98HBmVAt9ddT6wituFC",
  "key22": "BoveHowzwwiWvo89LXcHw4DKQ23axWkRY6qQzyyFLt8hvpnTbp7oNHSUEZYw93emihESkt8qBQ6DYktBrCh56oS",
  "key23": "yYCyPnAGXeQX1Ug94QwzUH7rs6JgQDhQ3GwiEPpRSrBGKSK91zKdJW1HsFqTY8BrSET5vcwTPM512YhPRAr6odq",
  "key24": "5ZqVaY8nWoBuXeKTMYSk4YmDx5qoSZaeLhw8aeu7xra9BBEAZQKqd3SCeA4Kk9wLvAeLs2UMK5EdqaPki5vYXjHm",
  "key25": "2X42HgZR5yFh73Cbb8xJRuKZYGvGdjuu3B46QNtQ1NnJE3qTmx9XR5LZp4NAPfdM7mGfX6AZackWRaDoc6f3zEpF",
  "key26": "4TrNfKi9swmUhkmbgrC1Tq9Se4oLyMzf4HPwSxW76mJ4nR98f9BQhqUAV8HJdf5cjFQ9ypGjPupQP2U9p6y3EGgg",
  "key27": "3Q5xTpdabh8MjniJ4bMXnmdHNnTQxea8ELE6L4QAgMgVW4QKRVmz1q6kYk9kFbm4sz5XqZiMxxAhBJi8HP1AsYiJ",
  "key28": "3c71huVPWnm6JWoNKK7pbjYXGSSdE96CrsPzsmnNmdgcaHerrt9VT4upEeEtfqypDuyQPVXnvRKuzYnPUKNzXsZg"
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
