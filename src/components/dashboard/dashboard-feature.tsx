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
    "WKLYUVoBHs1prHdttcLMq9ZPfTbKbHDXWYYosPbGEqvCPWdaDK8CUtZFAhMqrcd7iTMmdpMdhK51KXHzfHffaRB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DGGPX1WuMSbdJCoYmSo86XXwdxvaVQebLZRAGC14r3Nf6dA2z7vx159ZdBpK9gjfkNTV2FAstndyxxVQKL2iyP6",
  "key1": "2osyeY1d3whviyGnfm1SuTDSmCw292gfyiE5TaiGdXHmizhPzhyBw7LXwegPGXsnmGBdPevwWAEP6krFUGKyFmYp",
  "key2": "qzUMDXeaKJW7FrebkKF78m5vq3EoyxXg5n3s2ZFzdCjyGQrhrdsNNvCNSRtFxqdEQRkw1NpocbRE5tajWd4ESE7",
  "key3": "3NtXoirys5SsbmVJGDyYqx2RsPJBjM5Ucier7pXvgteKMAEJRUQbpJBUPUMM9zU2Mem61f3QrmB2nyCtBYXBT2zS",
  "key4": "27MNgc7PQAfzBJbVbaH7fXaYsbfGjf1Wu6gW9k4qomD8p8V8TZ2LJ4CrhuzRoBE1T9PZYpwkNmnEo9JMg7e1up7u",
  "key5": "2xsHdE9Wfjd6gi3nuUANiTp3RC2toEsVK5zXu3jqgAcAJPWzkg7sRaVvB4Y3bwav5P48zMSSxkDMHgnYbnz6Ey9W",
  "key6": "3XagHuNNSbFJPkfpHZQNTCDaL7zd3qxDMun4zXwW6wyyV3L8eJbBRjQLZ2Vro2Asxhi6odKZNoLkXcXdVxs8Z2Tk",
  "key7": "2RgxSWTJ2ekXTPAwVQZiqHBTDPzpaLbeNg8VAv2SNZDUWvjdyE4XeViYjmGhJzprDGYDoYtDMCf2W2un4VpftUj7",
  "key8": "4nqNEztHFWmGJzPoSPgFLFv1vjZtiudBZs24pkPdny4vQiPFZgmmEjSKrKVjLHyodyW8rBeVbJNTi7shPcgCJqJ9",
  "key9": "3ikha8eNFtcBZj9rnW8iYonHam49w1rAbVZvp21Xme9f8WS3Ez3fAZH6bjb7TLZmSj4QDcgz6NmA1ffTC2HNKE1",
  "key10": "3259DW9vjAMUskWuLTNqYEtT4kjif3eh8FFQNHWfN4755YcZgdQvaFavYB28iCpoKXwPAAKvWoEjKiypHGynmyqF",
  "key11": "5fbrhX9QacW8U5PzTQ8wy98PPReTmJzrwdDskkB7PoAJvEiRwXfyG4AGDiAePp3KTjPsV3QnP5HsXmGDBy1GoLs3",
  "key12": "tAQrF5v33QBACjN7pu7bLFdCF3nqSHwvkeGuKQsHuH5CL7CucnhyDFaXbMMBUrKq3L8q541FXk4trht4zjEDVGx",
  "key13": "4KKKwMjSKMB5VusuReDA3ux8Xz82ZGQJjBZ9FM5eLkhYLfbeCK8kDgN4fnzwkTtT3jCUKBqLdD9MpV2QL2kdqYce",
  "key14": "4SDEXVRK31iyvLBfzGLZBxRZmGjKYBjfEe1EQ6nNVPdcdndVNggMCDeo2YcQCfazRv5ZXgT94anAWx5VZwi8x1Yr",
  "key15": "4CdMXdy3NDUAkiFaKbsHRgcp5hbYZPcrhvGids86LWcKAA45CHiUdHGaPgqU86WcQ3f3dsf6KTrtcXQpcX7s1EpN",
  "key16": "2727RFbXcoDWUVaxQ55PouGXbUAy83L38ucjk78ZsMvwLT4eAdxgcQyE1paGVXiq91KsLKfdLBzVUi4h96kJsehu",
  "key17": "4c3LsEngSUgkL1Udhop3HWdPxdfwtrVaoNXkFromk3dSevAXvmgi47BspsjE3nazAXmKDhaUqt9Ej3UetDKGJsiD",
  "key18": "4KaYXT5iScSuKQNZAhiR3Q1ccJJYEEfyuURq1qGGWWSA1dsW11d5YkrvkixL7DmfGZWezT5YPV8GAfwexQtyuxzo",
  "key19": "2MjjEjqYesETqncwwGRGf9gsmqke5v5QXiwQYzxKD74M5e2DhQo8r3pFminHGqvLo4xgXHiE43hLeTAeA7ULBDjG",
  "key20": "57xRwfZs12iNrsCiUaA85uTGwitobpPNM4aecy55nNSgTFopraubmPymDV4PkqkwGyoresi98uQwyZYv4t7u1SwV",
  "key21": "4JgSraQEtw383ekDB3L4fUVQ6U1ANa2nrMnFuHdYSsTpjjZzAS45sYXw5b5ZRWA3UaZ6H5LTj475y2wwL336Ua77",
  "key22": "4F7ZBQ7qo2xhHeLRqabF9mMe7Xf22tZGCE6WREaFtVGrhA8R4fi9JSHqsgBEEMN9ahiE6ueRJcYo3LfUidDJyxBd",
  "key23": "4dLr82iEU1x363pyRVoi6hWASFbD8vfeAdrHs3zdmKTGekBRhZFGbfzpQEkWoxoGXTAdQiTuVjKeUtpqS9MvC8Fh",
  "key24": "5FVMmZUrfaidtFemn4y7kmVLNm1PCDAG8xUb5nQWnKoaPBS9wy72w59xNRRAaPv8EgUv5wzo2UjG8NFCFDyBPzhj",
  "key25": "2vL7sp7as3SCt5K8SzpamNXifwQtKvsgucMKxrr5mLvY9Q7GBN5BZrcDCUdjMwyMgD4PaKvJJuhKuRmxzSuaMkDg"
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
