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
    "4gor9zJYi92fgr6q3Laa76rcBFWXukAcQVYAJ7XUk3e266nRtZiNY4AuQn6pGbTcSnKSX5N3o1iUDWZxAZ3qPEDE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XM1jQscC4SeswGuKGfNAhrU47U6ZPgN7Xg2FaTTMFReYGZiAbu5MexRaFaGgAZ9YdRaqjgcCV5PHzxshh9UHSkG",
  "key1": "3ewAtJSiWVZSDCk1jQnjVcro5K4jaw36PDttBQuS6xPoDz8FDafoR7zEURDva9X7LuKGTXSTuNvMrq2BwQsgN1HZ",
  "key2": "UHBgg5Km6mmF2wmiNPDZANYqCb5k6DZEXTuvNuxQm64SoLv1ohkj7fkYjTZqhk1KWJGpb5gjizvaCfTcthFhVwS",
  "key3": "3kpYuhPiNqhmnxeDuUZwtG7mEqAAuoDkNDSEThePw5fgxp5WfDUVNuF2VKNqdsiLP4zqBWw59Zc7ZWhRpbcNLSGj",
  "key4": "zM6qNbCgdCTsS3BkSCz6RBbCAcnDgtVK9gEBCCQk8Sf7dcxGe72nQh1vrz8z6z5nv6AE1G4VDpywoKN4VpzSRrf",
  "key5": "5vMFN8CWq2vZ3YBkFWXbuVxMicNNGbFkCUSBcpkX774GTRtnAhR3SMhAdjw9zQCb7LrARDvSojYjPuD5fbhH5ohA",
  "key6": "2hui8WW1VHWqkgcFswiBeh2hKM3k9AP4m7jYT4LromLoKxh7ia6vJRQmU1mfqkhYZ7TFS7YJYXz9TKTiBdg81rFK",
  "key7": "27qtVTunzTKYfvMJS3DUcZDPPGzWEJTHtekhv2xo1sVPdEpQur3NbgMzWwtHAMhKqGgo7r1KZ7xvskkChBz3RsUA",
  "key8": "bR2v6BzvHNxbK9w9ptE8u8wZ5nwVyZsGqdLHJFAAfxpAi312agMsKtFxxkW8Ysme8hihWMHgno1bQ9mFwXYBGXF",
  "key9": "5WFzCQSHXq21AQ4QLG3TQNYDDM6pJ8Pb5AU9jknXagaXXgcXsABew7veRFb2ozHeBTMUfwwNr1RhmR1DRyuB3ewE",
  "key10": "51SvqGBcSAjczazQZLoGdcqc1JnSCAsmNLeUAXM9d5RDXHq9dZnUtjuo5EmdSnUzFwjB7gf5Vr5W5aenc7R9sSAN",
  "key11": "yw8zUcPrjLX5vDb81V57V5nZE2V4FwSC29Dt4RMupk6j4b91yrFfuUrxJNKNbsJq6PXYieqt4sSmsjJ78hbk3Zf",
  "key12": "ZHreJJHdP5KQp1XtJMrioXksR2QLXw7BNpV7Djv1v9e9A9Kehu8UMVcwSZDPU9RnLUeZtkcK5nyLMKhw5ZcTAMB",
  "key13": "4ksEXL2QWJ15QN2yjYfaAi8dPmhTuQquzec5aVEdALw25NmEqeVJegrovPV6kYjegNqrpgi4dL7oM8fd91dx2Waw",
  "key14": "3hh1EHUnTYKJpKBKbLLNqVczH6Lqmun8bJZ4HvLxXCUGKMP6ySseH5f4UowtBzfZAzSK5eg7MMbvHDHmD6dSUiUw",
  "key15": "5H7JEqjSTPyday4wqQFFZa39NoCbsjDHWA6PBwjezktKnCgcRt534bVgCeBZH4UpUCASyigq7B6HRuYnc1g1L1gc",
  "key16": "5gTriozJ9DbCGPhNe4fpvMkzd6SzwABedk9xm7MSNRN6uAaB3GMvtupGdbzcAdMD4oP9UFfDCG6C83eP2iKYDkj1",
  "key17": "3ns2jKBkScbGR3cY1JQdpBd5HHn28ZKZLY9f8VWDkdXGegMzfMY67tqWn8PxLg1rjRZvz5TaqvStYqX6T4G11q2q",
  "key18": "47HpH3psfmXP476Bo63ZRs6CG29dzY58cr3SizV7KwJXkEyTx3mdKEnp4ZZ1FCbFbuNmB6YdbAzFmmdiEEfsgDBb",
  "key19": "4y3KQ6r7QMpDSstPCLZRuoHoPoLY4aYZRbPd6uJmcLBSEkc44Eu2Cvj34Wv9EgTf278BCnwdM6Da26xpL4YHdccA",
  "key20": "2xByscCMU5td8ZVgRELwLVRNToLYBa4c5Nv9qVKW3xd556jCdBbXr8jMkvfJxrz5RJ1ex1SEmTFXqhLNdBPMy2CT",
  "key21": "5YC1zrQTXtWSWjpcGe6fnvEMy8hBrRrsR4WmF1esZXmDaVEDXcZriq6M32EoBiK8qHdpYjJjh5zYCeoqFRSPJmyi",
  "key22": "3RxUvXPpc4DeAxgWc8H7tzUS5ra4MAAV6rt5hK6Av12byEDD1KWNRHy6mGBMAzctsRzi9zcrfzoLy6tT5qq77D3g",
  "key23": "2Wqe5JD7tY7vjpae4HhjrH9BQqYvK8J6xJukQdmENKUm5yW3Rr7yGaBAKJ1e5Y96KK2nrvQ8DFU7trGqPH7qNpbc",
  "key24": "3BJp6oEac7ssAKmxDQbab6nxcf9pYfvi4vxsy9iEhnGsCZS4cBYJZXng2WUMTHC5D773DFkRjexYLZr7fonfbbgb",
  "key25": "6KcpvVPyh4qYwzMquw9Aqjr63S1nxRKVenMVgsEGJgNpCBjQzwAkNSmD32Pqj1V5XguuYRuYecipfG1M5wMfrid"
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
