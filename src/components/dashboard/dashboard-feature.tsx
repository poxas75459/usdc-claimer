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
    "2QCHzN6BZR4NsrMox9NaJZbXLNELyRntHzpK38LZus5AjTEBJvA3XwipxCj64NMvr8J5j27UWQpAHcrrMqDLVupF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vUeLRQQvRLgkLbVR9f7KUq1jQvxzKyFpknE1K3uXxcssWoP2Ld7YH2n5qrmdHTxi1H8Woz7u2TF3bqt2HQKeLsM",
  "key1": "5XbLtPSVxeYuM1gXHRingx4asLb1VZwDE7myDFA2Hsbw19w46MMzLaKQeDSVnJ1w8WbAEwgnSTKLPPYcveJWvDeP",
  "key2": "484hKyVAD5AhxXgyatK51TPjbW7SFN82b6riSfFQaRNF9AGgWoEkt3eo7EoAAmoaUG29fDY1gmfw1Hbo8L4EvKAb",
  "key3": "4QYtBTFq1sNJVNyE1WCSFZ2Yf3AstkTEPnCF87baWuBtHZk3sFqKSTPetUXwiza85uT7jFghmGYeo1s1QCasbNpj",
  "key4": "3Ck7g4BH1Cbb4VkTXuN4CkKTGsc7ZM4wDvr6QGkqWbgXJPcqg9LymyxJUyvjJAKo7LwrUxVyEN7mjAbKy3Tqi3gh",
  "key5": "2kXhpaYPMbwod1LBWNdkXTC7sxyzw4xaSCvXkcisrt1c1UDA9dWezUbr9s3e2Sx6H8iY5Z89LD7jcYcz66Pwo1BG",
  "key6": "56bGYrkc9PYavUyAHZTivcTBD6GwuoQswsR4Btij6Nj1QiSPTEk5QdkKaoxRvxtbYSrEMrfFcy6mQP4zC1Ukq1w4",
  "key7": "2dr5z5vJaKfQRSqCtW3426CtiLtvM74XnsoxFJ6s4KTnT6WKYthqFfPQDC4XbukAeCYjq33McL9swGGgsFkRJAbE",
  "key8": "3ChCN9d7JQN3swULNNWHBDMFCnc6AiX2DBGSVQcBymTTHxMkzwWzhePr2Wo7TeVpHvzyiBZumX5V95cgrkzt6eKi",
  "key9": "GJEy7c6pyKV61ixR6jUkEFfWQsPbQCRSTMCVtwK5etS7XUyFAS8Tny6enMhXJZ66kqgzBWxW38VMSWFz7UQu6KA",
  "key10": "5swtiNFsK9BiXb6duXgjhehRYXUYp5a3DfcBevdGxTBXh2BDwmuF3HmYtFC8hBYEfgygzFnP6M2LWthvNzBKKCBH",
  "key11": "5qwms8csKrFMGJFj6ompMEiaBvcjiXaNjD4EFWqtGzJT4w9vWDcAv4naETYZ3xZheCsmDw1TvtMBc2FrMaiRXGAC",
  "key12": "5AXUqDjBsi5SNnVtdehGA7FAtaoQGny2DFy8qNeUBV2D72YsF4FT75xLx4zGJVXvbTJbGrVomxAH1hsu7SiGZ1j7",
  "key13": "2TYGxdWBJmv5zunuTxJkEjSMFtUofN8Lx8hKVGRq8xEcZmRaxFFuNcWkAzzVQgLUcpLJZ37cZzzfVHRJNfxxdWyg",
  "key14": "5Ytgzne4kKvvNbubF95AgmgmF2HaDTnsAKe7USbcnvx5QvLM8pzAx1sWbQfbUByYvRvbdtqp8tZFRGjHTDW8tD8R",
  "key15": "qqDq3VFuimUGC9T1BTxY8wGquFjfRAnqXweSa5HNEL6JHcYBxrEb8oiin71nxaq4D8NxfJax8bp6BJVQM4sH2md",
  "key16": "4FetkHgERxkDoKbPmVAUzBLc6ozE6EpTvrYEgZW43Sv6YBPTr5EizqGS23TFyZNGCQopvJkuYgYaSUtFu2YUe81v",
  "key17": "Nqr66FUAP2Bd1W4A2yhMeex7Cjdei4oKvYFtmugxpdzz1g4YoxrF7B1Z29ps4W6Qbsj4en1PvPq7BHfPYsyGJ6P",
  "key18": "5tZ6LJ9MofLfVAm48zo6wsNLhAJupF25FX6SKJSnuCeuiNuDfZg2xSSQLWwBj5swPKGkmaF2khrcv6VN3bB9W31z",
  "key19": "3fJJLp6rfn3Toj8WUMXtCUEEC81H6TgsAJfp7hcDXrqKPcsuWjg6fsVpy1ggsFbqAAXbo3SwfFZddPjdhHSk1Vyj",
  "key20": "2wH1uPoianju9KRHGwoZccwfoJsMPTCdoukszeyPef4iHckEDg73YxRQn4YT7o7xiBrzsVgBJduHPoeXTqKgmi2F",
  "key21": "4hF7q6wGgqJov3o9YTeAWMsbrfgiu38Ng511ffC4X5MLAdydW86REMiL1si6TuVPe4uX8sjKg9Q97HRuED5awCU2",
  "key22": "43sXmM7ZtffWegYimKqaZRMZeXt1jX1CojRHaq5rJLExxpVfa8A3EJcSqBuKH7HiFmuDpCeDq6TnWcBFqEHL8XJE",
  "key23": "4H7wMguZx6BGKFGDKZaJSVmVPAJs6ui9nCL74Fz64Q6x9X8mGnLCeNnsXkipo7dLpk7J5Jeez8XCGaZNgkLABpsj",
  "key24": "5bQqeP6sKJ19Gf292rSDFUBqSA7epNMiox47HHrNHB43ZuYgJdGKq6XutXFhxPADn1gPXB1tQcqZFjPVfMEmPXPx"
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
