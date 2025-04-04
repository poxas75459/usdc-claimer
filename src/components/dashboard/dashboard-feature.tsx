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
    "4kox9mWsTKrH752x3fCH5ArwJTQ18djdcDEskKZH2RfzKmPcLpuzVamehp2kjbfUsvDGJYDNEvRJjVvEDpjFbGQp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rgTS1S2ZLSQ97yJuyjEMFyo8DVbVbBe9ueBVvhsVe72B6PLCuYSeYL5YH2ukBVVWBgUVw53ZPT8h3c5vsrg1ssc",
  "key1": "3cqAtkYCynUbMdVXnNQeotMiorcrr2v8pBhVZsbAvRQgxPzopeoYr2Fu9AZk7XahtfPcBs6vZErkETL9H68J85sf",
  "key2": "KJJSxhSSHWbDAybMDxWiX13omXFPQDeWx4nNA4v125PhSBNgm1ppkWT6AYxMtcwfp45UrebDaMsFZn91KdXppBn",
  "key3": "63RmHyLFgNqG2f6JqaUmvD34hUXV5b9Nxs5QqyXy6M5e1DZs4QFdczyh8zfx3BaYsWK4gW1K2Ab3TofHiSL4KLsw",
  "key4": "3Woie5MGQomruCDYs4txKmMAh5tKNMTUhHmrcgDWgRGM2RhaqD6HQz3qxsv7mhJBoPeMSMX15w4mVCHtg4ViiQwL",
  "key5": "tWawJ5oAdtMSZFYHrPG7DcbsczCLz48yUQU23LrhanztvGHoucMaAnkHS69cBHXrFdcLhT4i1yDSCDs9wsa1dzU",
  "key6": "HsMa6R4YhB39QHQpi5nye6DT52go7Sso5d432vw5iXCyammuZzDu3cGpRxuquVJpVPkUcYcvYQMhTKRYASTnxVi",
  "key7": "2Vgg3arQdkc2X1g1QjiWBxJrtVpNYQSYJRvbtuNLrUJZ9nYKZPWsuaE9wK1mFRfqZ81i5mN3nTpmAgNUBqsNn2cy",
  "key8": "p1Kh5cmjoxXcY2heQfqEYAZ9vwi7z1PpW3MrF5e8RGW3WLgiN4cxsnjsFDqoGLy1aJtuARDMMM1JL4YRT8CBD6D",
  "key9": "Mq4Gn87sn5YQVfeGmTtd1nzEzmukoGVxZWuwRtgq5v84RuKdrUNzHMWeMCgyJSM7rjBX5JmYS3driXVDnQ5wR79",
  "key10": "4sEDxsh7Ttexj2u4hRDjp8NsJYq11F2N9xhzns9mC782AP822paVUgrL5qDx41yKMrjzMKVPycWhqs2wxxLsTM5k",
  "key11": "2qDCpR5WHRZWg7mZRwXv8poy1KAbsxriv8trT2qnZWq6zFTKqbgqVLZBoZ8YTAthCPvNAg8RVBe5xepsM7rSdxT6",
  "key12": "4pevx19bEyP2615gJbGsoesRnTBMCybiFhX8oLecHyc6UNrX3M7fFbZVZYUrH3eQmJ5sJcM6cPJb2WUWKTPXkDe5",
  "key13": "5QNsgVP5wRmGkLVdA7SC7TYrM2EKZDLiUWCUagq94F6cBPUjxyWKjTyKQWLvVihWoHYw25uoiUmRNBtPUouWhoed",
  "key14": "2XVqvFRYbBoD6iXcEtV5KkYSEFrLFBZWHL8iZwrU4ZdLrxTJ8W2cWLBph57RUWCvgtAJd17VGSuQQKaKfWQsysMa",
  "key15": "4hXgRmQwmGxSfdKcUe7VCbs8RS8n8M74yesiy4qUKzH8iX8U2vnHxFedDHW9K1wMgWZn8uEJ7NUa32aDQLgkYZgS",
  "key16": "2iGyxTynFsRc7w7wbsSW8aX2EcS6rJ4Vra8B6SHTGouhawL2f7vH94VK59cAfPVFEtACXi8LsFh8u3HUqHrFqhug",
  "key17": "4qtmq6B71MWHRCNzKGL7vPiJsYZ9NUxwVPQdsDhJVhQonCdzmp6w1tpX4nGbLLqcxLpZ4XqrZ1zdFFYiy7CaKCWK",
  "key18": "3pB3nZD696BuZ1ziorNSkU2EpTT4t4Z2HDtp7igYjDEFUjvZa2x45wwFmEeHvQyD4W15pmF9TaysjRubgkJAU6dt",
  "key19": "o3U91rW9vLQfjyNb7MGU3ybEt8x5TxUzUwffKXb6ZXf51TGaQAkRkKmdwQQsWqNN9VNLQ3aYwsZAeVdJA2MDiMc",
  "key20": "5qLt7cFhSCWfg1z6mua9pLmbbEUL6raRJex7f7spZPQLGNEtD6E3PLVmVVwB4VqWYuPh4ugTPnkWFe8FNqFsv6Mm",
  "key21": "3qEi9Ghb542j7EgqgLCkeKda7vFYcg2PSbTYgoc1UxEtJPpeXzWAGNXJdwQiFAhBxzhB3jQqfS3ERK2XdSjdh4tR",
  "key22": "2qimYeZwJ9o7ARxLXLBVP3hJSWKpRHNnsZ7A3kFn7L7NTVgVDNgCcKCGfEnos1SQgcX4WeczpWnFTNzPYNjp47wJ",
  "key23": "dB6VuwahdDg3SnGkjY5ww1cjRVAH2BCiMPgpzPuuxd8JVSpXhg6MjzHMD18izAbUQVzUnKKFAsH5TEVDA9Aaz1i",
  "key24": "4m3tqmW5X6sMZn5Jj1VAoRnnvEnRHWEK4TvRshR2MSj1P9jYyJg6kkNYzUZZ1wQLjcTPcwnNi44asxoMZfLkfvVo",
  "key25": "2KY3hGBjbrfqH8FKNGm3fRfMT9oCpnnSXgQ8dtTjd3594TFKFmCy1KvwrK8Y5TpD7m23mx13b6z4CwVyzoG9paEb",
  "key26": "4fAcvt83LwMuSu7FA7snwFW7hU1E4JU5ECaoCiCCjxcZ42nZbgn2Tj8fqsSze71TYJ29uMgwgBn4vajvc9wV7uXZ"
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
