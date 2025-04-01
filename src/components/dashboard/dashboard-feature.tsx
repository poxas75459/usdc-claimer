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
    "3ntiqb7Q1FBKKND41d6Nx9QjPvqcmmRgQoGrndrF2LxGQBNJuMGyuDbL8vA4aDBUKedhwx2TqfjFnxDLnB1gVyb3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aBG8Ah41xxTyYM94iZxQyvEn9MgH7XyGqJh3U5tou6BZXpq62AUUruTggDaHaU7vytMvWVjqa5RE8h3z9EnHck4",
  "key1": "4pahqHMuiUN9C6XpifMG3KcpNXDNbDLUmMAbHcRJa4D5dfDegHRBqKnRvLeTAQkgD6KNnybwR8TUotMDK7eAPsxH",
  "key2": "5i3oiNjjew7brrFFx9UQrNBNyEsiLk9m9ak2en41PApTxvHT54ZMt9pBqBhkQNbpC1fwpN882Dod639o6hBSQEXC",
  "key3": "2HTZe76g1BCronhpNEFos58TZJ95VF28s879cfC4dhRqqTwa6u4LPCGL5fsFxk2B4eCxCM4pSFWncvs93EMsd26V",
  "key4": "4dpMAmTny4ZAscsUoBSrwDR2g5GEbSPCnHpdioUCCYd3buY9dkVMa5GjFgEG7WQESXUPQK1MpM5HaGikgF5NsEe8",
  "key5": "rMoJWwRXbxC55SFwQWPGYawtnu38ndx6mEaWinhBK2S49Pgg8i8m4SnwHRxmjPpqFSZo2SohAp65fB8aaZL9iDr",
  "key6": "2xgiUbCCCBPyGKaPaJ6aQBGb1ApktiZg7mtPXyexJF3iowR2AGPu2kyXvR44YS3dWyWa3ruap1fiabhfeL5GV1gB",
  "key7": "3xv12moQZsCTar5sXhC27iJJCbkE6nMikBZZuC1M2Padc6423pDXVTY9H155y3TQ75oB1m4PdM8TLuhxj7WN8MuJ",
  "key8": "5zcqZU3s5b4sdk5UWKCMY16KuEociR2bPBkK72kvxpnP3Rp4mEnBFp9U6DzaJh368HzJiQWrqRBUauEc6i7qqPho",
  "key9": "5iGDFGLdXpQkU3tAn3vkuy5t1nQ8mWwhKr6tdNMt818VKSaf9J66BM5Rn2K1EYpjxrojx8q5LqLNGU14jnJzEY2J",
  "key10": "5go8aKNe5TTbFU6MnesEmDYHMSN1aUL8bpkH963k1GGRwTTYjvPVRW6Cp3fdjw5YCe7iWy8WsVTkKFxzMaTzd2EU",
  "key11": "5ZEbDjmW3DN3WHqUAnikBnoX9EimUFdTZsR96QWwYL6rt2PcrYHhRYhm3sbESN6XnFZFGVaie5wLqenL1vLhH6KP",
  "key12": "yUdHhuHVZZ48ZZveqKWQRvefJHsKXDsZ8xw6RboKFRutM9DZGoNM7UmjUy9P7PVbcHqiCNTnYXWUtGiTBupqzrP",
  "key13": "319L3Nv7LJXZkqz5BGQP4vCXFBkQ9KpYmdidMoiT11B72ak72R7YdNS8rJw4v5Skj2Du2KYkbjBQDj4TdGmez3Vi",
  "key14": "XRmKiSyxc6F8CffDxiFmocABNcG84E9Z74dUdVUkbbZEsB4P8DEJNjwvs7Z1cF5t9srYqNEr1s8CPRUwXM8tVs7",
  "key15": "5ESPQYtZn8qfcRoQyZ2kC2WQ4QSNduMes21rinvRirX3L4MazdW6EbrQRE4cVA6b17JfMfapGinrNtAcqVPefVET",
  "key16": "4dgxrgKppYGrzgSyErYKD4A1exMHexT7RV7yMChDDwtDj97k67rQSSMAoJCkjzxPMsvSt6TdjwQCm52d8AT3JAdF",
  "key17": "2uti25YfXXPCtu4EYLCt5FiPh7nyzTzNghv6vybLG9uQhdGriVg2RdwPLkRNiHdtFrU4SHk6vs5sb6QFtLCG1RMU",
  "key18": "mecnoHS9EYGJmB7EM6WrgfdKfgqXPu9hBcExYg91d8C1iHVFNPooZw9cVudpYqJtWRa7TU6kVxfgGpgLAPuMkvK",
  "key19": "4vuUyQ8LuaYmWQ6UTCW2M7PcRJ6AGoFnYt2ChmQMLf4aHmvR893h1VzhwWhNvg9ZGiDZNx5UUDZLkyvaXRBJji7K",
  "key20": "3gQwABr53s428KVmktxriBff1Gc7jG6E8gBkg7M1ianSyBsWqXSUbBQrWjKM9DLaCpvTjBrZ7Bu1JNsPGYxy23hd",
  "key21": "5ArMctZtkQoLZQu8iddnz41omB49osFoW9x2AdWAKsiayrBbZqY3QpimLSfGToSxBzaPiibr1ZKfJbHRRq14ytyR",
  "key22": "3NkvQZB8gCfQqzTBhetmGuyz7cUAQiBTU2URvtCW8JTteRzWnUEkR8pm4ZYLfveHL6RxSfyYajEZVhCoUTxSTGV5",
  "key23": "2QtH3ep9FyRaokWdGVWpfCKxgk7oFXS7CA2mqWYhSMnHE5fpCRdj3Xnx6dSrDCaoqauvqJ8QH83CVeyKBvtPEtni",
  "key24": "3kwWxCVay2J57XpgUZiRYwARFji3SQJvpwZoekdnE3QpJPniS4Ajj7aWck5WeMmy5AY4fE3QxPWgo3HYo9K5RqEr"
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
