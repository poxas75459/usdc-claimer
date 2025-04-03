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
    "5oMhouYYcJGfv8j8iJDxg4wRfGD65ga9rxzfu76eTBWrp5RQixwoFVME6kZo21rrrFqbUEtwuLfPountUhn53upx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3a5WXngkYDaaVptnogNAdELJUadxcM5NTzC7AVRScp3YSk9oyDdmZ7iZBikc1n7RSuEiKHLgvkAwa8jxemZKVBRC",
  "key1": "5mfsRqQm9hDgKJYCeaTrrauxRN6wCkNr5KdsejJ2vJExEBCFLwR37ijAJ26aeFnkeaXdKM6jZqZaryefiwCfCAvg",
  "key2": "3swVVqbmzeybWoJ6bL6m8CSheyaZwxbpjs5gLHtszmSSMPpdTa1HdayLAxvf5ykRWUGCjkq5UJfAoDdhqmSg3g2M",
  "key3": "2B6VqLHhojg6VRpucb7UUBV65cRRZbKJKiBazSLouB34D558bS1gaB9MqnQSCALq2qCPJRbzFMRu7SMcz3asRBFL",
  "key4": "2gURWaXrqutKKvjHWWtgpSjHq4B37jF9bXhj5DJCq3wiLSGpNxKGTPG9w1pAW8wKuqQtUT5WbAU81JDtMiPTigXA",
  "key5": "KVFA6CT148fb7s8ygk6pwdnWPNMN9Ea3rBXaUwg2E5UBaLVaYpL3BBhDeu3m2GAPNXSYif3fNSKfo9PMMHJWe89",
  "key6": "ZCQH9KbQSy41nGqMLgcEerByJQ8dgU2UqYuHNe3YAzuV9DSGeJ5nTgTkYm1NC7sABP8EU7Y8McTru7X2Vdi2Ykk",
  "key7": "4BvVEFocXJ5AXdUGZz5zFJMGb3euQncGHFvShiNy8RhZZoUMC9piYmWFxQgMAbiFUoetzSBHwYg1TxCi7oXQK8bA",
  "key8": "53x9zq4c1z85o7cX6RcGezsCxyNnbRdaeA8Wua8JuCzQhQBJRqtSjb2NCo4GozfUb9EVDSS1psRr96VwNwhqSus1",
  "key9": "3zx1vA645hLK7cwPpd6bRac7MkK6vtBp9qByAcc1idxCJc1VjycW74Wdx9eXz2JWE9WyJ9SHywypGsD3S4LBsCW",
  "key10": "3FASiA9m1Lz4UFGcntPB2LZLbHrckLuTKuaf8w8wJookcLqYiUDbe5jGhyLz4qFxXQiPLNmRFBs4ykzeitpyjwgZ",
  "key11": "4AVWsYLetEFqCQ3veqF954w5FmUgKFvFcygDSrpmufZVpT8CfFrgw3Sxu7WM3gtGo9j9yuKu4m9Jp6cusGQpn9Cr",
  "key12": "7w73cmqAbrWVybRhajYv1SRhDH85kCNmSfz1RVQUjM36WAEtZRUmMGG4ZHKFFTBZPCsw5AaW7W8FdbpB18oTFrw",
  "key13": "2VkbybiXzAy89cu9mELxnsEPaR9kfLckFPnLDDhVGD94ddPomDKW7Bngntgy2careAndmZjTqCuwboF944JUuq26",
  "key14": "2pzrf7w693ayKTytcZYZeBN65F9e9oRJvpANChEMh6uE3zTcuHwKrbyLkW9wDeHLaDtRyMvfLWB5KCLCvbgsrhoa",
  "key15": "592qc1ToP8HTrwCHqjZj4qyeMHG7w2MXWAH21pfs6q9dytAgZS4ZPUZAeACagTvGC8C7YWgDvv2NHJErNCscaBwy",
  "key16": "27gBQPbCrnvpgHjC8hqUBpxqsgfGUKPMLioph3dxwrdGJhUR9amMF5enpJJ9HmRQTCB1Mpb9cEcBFSvBopycu5yw",
  "key17": "2VBrWz1bgnwyEiUFekVZYXpCJ8HE2SMQnKC7goPhEQWytkV8NcmfUeFz4sNUJGqJM9V9cDybrS4RYByM1GDfkqLE",
  "key18": "D7CTgBRx3x2BJkx6PqdfroSzrMYD9nFfSNjHxMJg2GSUxYZCp1KGvCVenykDMDWUmGiBbDBDmF7TWhSKKHLKyq4",
  "key19": "2D4mXyoqjGcPSkyDx6sHmoSPy6QYBAJdLvrQLKgmbi9Q1MDSnEZdnXARG9mcLu6e2RWxYERjQ17rnUTpGbFh2oQo",
  "key20": "5doqG3zs7AWQzUpsH2X7bRSU7b8ggMz7LRLWXwy3c7yMRFhG2EB4PxkGVv1WYpnf2P1qkA2XDVVoo5Rugmsv2p6n",
  "key21": "4sWdAcZ72Sqo6RJQmfjxw6ZXepbGnoiWBpEct9mh4i3McGghwiwHi9kjSo4YvxsRdQTWU2Pacn2vaRQfSBn91Yod",
  "key22": "3vva1xKgs71zR1XuW691PWhnJprL6cKjxuAK6LXgzM7vrufLDH2X8hUxvUcexJRiJcvurnSvzN2oVMgswVhBBbi",
  "key23": "SgAVGoBsuZKounv5M8feZSY5n1GcdZcds7APCZB2AgaH23ifXmQXbLaFDcz6H4cwjqbkwqWk9oF397S7zLBErB9",
  "key24": "2LSRwo6LpUX3YMupC4HoSmju1BaqATkvwCagbgCbVEp8F19yjBR2nW2okNTp9brCeg9fvmgFLuiRp1TDTQuwXKHc",
  "key25": "4UMwnQiBRj3VV5fXFXoq6S6repvCQJDJ8osLsPBTibHXH9Gc93usJnYu5DPhShTfNcAX41yCwzRk6bHCv9dHiCg1",
  "key26": "5ofqpruG5j4V1bQun7yonKRjSP1CBn2PB8KRDXn5UuhCZsHFZnvk7qkbdkFDPhzg8AD4x9rJyLbbAn87gAvPNxJG",
  "key27": "2ZdXt3ZyHRrRJY2RuLmKwtixUaXgz1yXNKHriU4GDUDn581mdS43beYCShkExxDRgFGFoNuarHzVZgCJncrPd44m"
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
