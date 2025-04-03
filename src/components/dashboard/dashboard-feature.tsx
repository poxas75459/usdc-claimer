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
    "4As1migZTjYvRCKxHg7G4NC7W8s5KgbLUn1fC2AVoTctcUu22pY8CpcboB3cMNQ5LPYnL4RPFWG6ougAoqoTgee8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4f72P6qPNwdbSWXGZRfubpENpZXFrH9U5H4qJTDzbS7RThoHojdVmJznu5h3cFLqa1Ao6nXUrdXpkSwi35k2GNvU",
  "key1": "3EjbiHGnpj4fcmqeZuLbEZ9Ekmo1oLuRgS9SBQY7zW1j4THHiE3JFhAy91mDuQ2sh9tFGtzP6NxhAT61V9gM5QtB",
  "key2": "5ceWCqURTUPVA4umuWTCMhY4tXd7DrfPfm7pSrEQbbzL4Bfp66mDPhuHmbTrt6kkJCQyFscPJ99wsvK9xG9iz7bY",
  "key3": "2VJjcTEt1VVPMGzTXyybPescr3MLJbCmbLn9QGs5m2erxzASFL4pucsD4rshmkmXqT9vwLDCpDRuiaNnQzVwCLHH",
  "key4": "7vEWd3AKFySvKtV7hSDdMukaV5ssD4gr2p3fS1m15LFUh4RYcXF9wgPNDCPqBUsU44WyADjaK74WMgsZTDiei9y",
  "key5": "4fK9MED3mzHrLFkqggmvGPQ1dLSwrRhXQq672eukUzVbmV4K9d4uAtqsiH7ZMNtnkupjqFMtMhpiBJ9W1Vqkuoqp",
  "key6": "3GLVW6rMr3W7g5NhuvrdcDrqK2kS4o13KJWCPFKUSo1duJkVRGTrQV967L1sGtdj4TVqup8YbfCAfc9BkZVNw5Ay",
  "key7": "5Czdqq2oLkqHc36BdmTxomTXz1sbcqG4ztYiC8cVyE9fXW5hxB7yYSzPtJtdXjcRsBtvfB1r8DrrcaDPkyDhR2Bf",
  "key8": "4NSkT7njnqJ6YBS4Bfye2jAaRPHkLyd7V7u3qR7e9QfK3SeXdHfMXiSuFkZZAu8DKK1AAi5zQ44YLD1J2874Y9Hf",
  "key9": "3VsnhS7jXd5U9Pqc3NzrHLKLBeXaw8Aa2pRwbAdq868cKyJXuZcfLXSBgLK6H3y81wtmjG3UEaT5XdZrsR4BPPPg",
  "key10": "FcEbVEpaqu2XV8tEk3Psmf7eBdKQfBGoxox5AambJaeEGz5oB1KuVuxuWruERExjnSnpBoHmtsTsB4Mjovgo13t",
  "key11": "2yRjuyPkZFFnw3vLePbzSMghVK5o9voDpt7VpQr2RNVe4GbfpG2T5FMgJeqejLjkzGjXkvuWSkamkRH9yVo5Fu1G",
  "key12": "ravh327pst59tfDA3mjS3DtFVfkjsHxwgZWsFd9ph95fpytvgkyfFoPbkjE9Bm11EBrgWqFJeffWTTwPQM2xBLB",
  "key13": "4BNxn4xM5k7sB7jQSM9zLs5NTFK8WPfuqWB1WRWb6dpTe6nxVJvMgLe4MD7HWEQtx17GXoRUgTJn7xESeV2euH3k",
  "key14": "5KfikVjkjWhbgPXgSAaTpoLrRB6qgvuv8jjuuGUbQNyb7TN5cTygH2GCHbEnwqRVfEeZ51FfemdDDEM8XUuipJqH",
  "key15": "5DX8nbDLMWDfas891DYtyYRF2vGpJriAqfEZPEGqi2JQXZ5T5G2D1kQsGqhMTaJwsL1U3izcN1DqekguQE8hjgwg",
  "key16": "4xx6H1LhNpvqR4BMvobhqYANuiQK9hCCQNeTyM1CaEi7SwpumcwQBEu4Gyuy6mPUAyNjfa9ePSEHYZRau9tWcNCU",
  "key17": "AfG2HKGZ4nPV6EXowdgwsjeASAaXL6X2QqMk25BpPacioKMy8YQr8AbtY3ZjNFtUaouNU7MyYWWGqv6nDZndvpz",
  "key18": "5qFU7mdH2cpj7nZ8b5uE2aeD3QgyhEe5Yvwym4ASDqkN4XT8juwZ1fhfNVXg9eKfTTR63jgfbmPQgLnDLuVQ7gPS",
  "key19": "3hzPyMN4oZ5HsTLEczgFtij6tHrhRpJ5i1LwJHLpZsZe8QgoZM4MXCFKsPVDrKHYbi6JAmYnsDGczM1QX8XALGL2",
  "key20": "3cDJrYacAjq8szQNDm2jHGKt8r6QpkaKzLDXP7KGHa22PZoLu2LGjDXRGAZ8UK9bbXaLrSCPX8XGMzYRhgAWT3SV",
  "key21": "2zRGaA4vc4m7dKcseXqwJXEndr8U4MXAJZ2MKzwBKv2iU8y1uSJ4oKCEAy58ENq9iVLghTPchaBbxG9NhxbPa9AH",
  "key22": "4B68mm9LXcFn8niyU1UY6wHE3JKo98eqaAT6T5JXmnhQKaZsEfGVd6G2o58AQ7ySnQuVYJYGe61RYmTMMr8X65Tm",
  "key23": "2Dqz4WU83g5tzH6CsmHNGyNSD7JsaDjiQUskNvgeQ8kSYShT5FcYVSatDxfEyMnM2G8gcEQS2FQ35JjhSkhgnBXi",
  "key24": "51A6eYf8u5ePe9TT7xUteu1aksaDVbENG4mCDeZQt3W7UuR2SCDcGvPaHnvCQHFyHMzFRExAiRMZR96rMYiTMHQ6",
  "key25": "2QY5gqgNDdDjeyFGyKExFmBE71dYwpuNTAM5NpAk1mQxXvRrs2zbc55WQnNWo4aK3Ddg48nbpzg3XTeC2ut43SZM",
  "key26": "U9apmLfccYRJf1e2shEZLmQqNWEBXoui4z1FjmhCTCdEDUd5SWiiLN3mLhiRJZaWkPPq8waj9Yj4wo59jtUZfTA"
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
