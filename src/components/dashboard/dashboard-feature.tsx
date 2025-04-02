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
    "3es1b7CmA2Fki9iGoHgLGS7iXkRSCyx8GYbH7MFXzBJuikNGkjEBZpCyYxXqQ9oJ8amCZaDUxVuyeEXeg6JsaEek"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TRfNxAczjB5JDuA6dMoAci6T7jpChpge9gP2FeAwZ9qr3ShUAGW97HxLQBxmiBccNfKfYFzh1doxLrcU4GXaKQ7",
  "key1": "fwBDxy7B8uEx6C5QtrWNP4JjM6YjgixVeG1F2zL6wRrcMhQ28uqER7wwdjyRBWBrPb5cnDT1sE7NhxoNemFWvw9",
  "key2": "3Bj9PkRYKn13gNyfPmWyJKBVp1XdPPET8C5hQRxSaqkb8vCkFan6drkxq4yMkCVvge13PHvEVJbzhfWS35fUiLx2",
  "key3": "2n6fw8XP4vinbbnLc22XuhXTpo2Krii8PLSYRpUtFMir8hpAvhNHQREP9KNP48kagF4ic9776zXxocWtqJ9VCDd1",
  "key4": "8mtULibXqUmw2bDzNYDfoTes9qcVyoDuwXUXuZgKyD83MXFrKNQT76FKd9kJ6vM7MeVvo44DXDBt8h7dLH4k76R",
  "key5": "2NGttBnm3WU9sdvQEigzT2Jq47MqUfTibWs89VntSc61a1Ed3djTnJGmCT5gvqDnYu4isaV4UUHFQpkev5Wdm54u",
  "key6": "5Pe9avAMCzQhUJtiHdY8AyEWdLs2M7ya4rEQPt9TXg3iwPMTiNp3xwJJowWzP5u82gEmhFk3Q9QooyL2gzpbXksk",
  "key7": "2mtjCea3RzMv1E6VynaysUPrY2ewCAx92x9DjJ796C44mMin7BdrN45EBsajEPutNwHe1QjaRUJ2wuRBuhckq4f4",
  "key8": "4kfgQfJEhpgtWkVWjMhz9qwjFxaxjjvm12oG8dmZWx5Dm2pQvUrWVAwS3obgCNinrHx1fVZg5aAenDyksN8FVQWY",
  "key9": "TZF2nziajJQELGWeSs7zsRSWG6e3vMc2j4AjBAty1Z7hdS5EwsyoQuDK8mirmo8hSrP5Q5nrSHAAZfa6ZGuqHWY",
  "key10": "3EdGgLCFV5N54z3w3U64fkJtDgU4UzhAHBJGq6cDFUDoaNTsfEsRdtx2uVUNEGNnAjvdg66DyTW2Qqy2n3LBzA2S",
  "key11": "2S3nLkbnAGJSaUvcWLpgATSMY1cFdrRymbo1mPZUmkSNM6qVk35n9MHxQBJCcDrPaXgagFhgiF1nrhu8yQYGy9L3",
  "key12": "5jppNku5ZpnFuy3nm7peDvpCwWD8AQDNVjPnoEfQEaC9dnKNeZuoLstqZpGcCbrmT5v9KRFin9NiCgADE4dJLzoK",
  "key13": "4xsDuxgR9d5UHsGa3gURme1AL8Ckrv6yTM9UzkRya1ppmPtAdda7u8dzFk3D5bNc5aZYFaQfqy2uS5WmR415nvbM",
  "key14": "4iUxE8GgK3xQ4w3muQum9fDbs9uDmCG1UztxbmX81HqhV7EuABzYAisAxekawrTGi9fySBRpq59y7Ph7LB38GE8j",
  "key15": "2ki8kLDsCTKreHeuPbpQcNDdKCFEFzAGc8gpbw7b4CP7if3kZAS4A8KrAyeYej7hkvX6prQJRNLBpv94B3KYb8Bi",
  "key16": "4Qgd9xZxRfPXUsV5KnKqYVZxSpjpYbHVvCSE5vq9GTsuujh3YnikRq3AmCM3227Xy4j3pBpvw59m4mKP7qWks1BA",
  "key17": "gd5fFbZX83hagT5CrgkFYiNu3sTfhn9Bofzkrujf9EBq685xD3AW5gqQmV6WM1XgYZtM6CHmAmyYRzXd95CDjwC",
  "key18": "U9owMzf5Rxmc268JPH9Zk3UrFSjxMajj2FnA9TPsJh31Urgy2hyGtaQDeafrGfqWKwsZi3ZUCcEur4kLu3HRQq6",
  "key19": "4jCu9qTvMWr4Y4VCqNVj7fv3WtFmxBYVYuxWrYkrNC1PPFAXGfTLMkF9iovUQe6w6DuYyDED3ty8S6reZC1eZ56M",
  "key20": "48MWmmNYXsiLoPbFGD9AyeTZq9b2wqUJuS2P4nU1wyJz2scG13b2nY5SBnmnaWKpU9TbAo59PWVoRZ9kyoNzK4PC",
  "key21": "3uhxkaH7337JkJw4UwFGAdZDRoAM5UX7bpjfU7dNP8GwHyXLjBcNwkpCyUxsqSsESCXw8p74ciPNZFHX43NzWSei",
  "key22": "2MY14RsKnqdnHVzNtV5r944t8p531hy7X4DSvTYHo5vMFAEpFDVhe3tExpxXzUx7yPskAc2ZScQ4dtNbxVx9vcgH",
  "key23": "2tgegiS1PXDepi5vm7W7Ye1M6WJZYAhhG4qwWPEcAXvusNk9WYhFacehEwWuFr45MuxGnvoZPXPZ5xeJMUyNYDrJ",
  "key24": "4uZCDLpDqaq1NdFRsPpJ8qaL1JGWwHeWCTfZSw9a5CgPgzAWJS83BGGRbDZTNFt4nBtfnT6ADcVXdaw3Zdp331im",
  "key25": "2hdpmN97fAAf9nJzQevEfnc6cLdUBZRrEctqczn3pSBgb8WLSQ9TnauEt8vSJwRzVynoiJb5TfEyjLbJ87jLANAJ",
  "key26": "2Xczn7VL1NjYomVZJDTMZdJUSfcTu25dyM3znTEEweoTenRwTvtKaDnDQfUfXQETCHcFjocNMiTR6HGabcXYy7YF",
  "key27": "t68JkYHZGxHmzwRcxc7ZsFijDeA3dobcSHptZXerNSQcni1SiNjEMGuz7njpNFvXFQjJc9UrPGvBdQK6HgXBXfw",
  "key28": "yoMxd44mJuFJiWdBjLU9BwmuX5JYtgWJ8Fym85V1BvEA4LaLns8pNCwWT9BeLNjQTAaqosHixpZx2oQ7HcPx43K",
  "key29": "5RdP7LfQsmUSAjNTKuZLaXLNfyQGbgGNs9v67N1THh63fgpBV3CziChmvoNFpLHCwM5r4kgayYVn8XVrLoHYEL7C",
  "key30": "2pqdJX4J53bUjTfmm5636cAiUfw8cvmiumke1WxDsaRcNtFPgPWfqVjSRyXdtHSDgWH8ym7n88kvSf2c7XBSq96S",
  "key31": "5SfmYu9nJNvhGbEFq1WC2rF2KDKizPjUY27cQEsQo2Fd4ag9NAVdCVUJaJkz2kSLQcrP5o13N4DxokQDg8wwt6nZ",
  "key32": "3BvVNqZwfNqE2rkcxgEhhBMEQ7WERk4pk1CxjEB4wDxPee8jtXxhgLk1K4CuQBcVgWVdteEktLPv2nfciSz8V8kG",
  "key33": "4GxBhS3XnQPtyip5KxApqpcLFoUvRkecR97i2vBQxd2aZ7WUhrkqCvQK2q3H7mZWvQ7gFnSJ3EUHA1kTM1nNY6Up"
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
