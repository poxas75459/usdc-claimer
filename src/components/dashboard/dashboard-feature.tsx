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
    "8jrKjzb3Bp2QxKJ5L5y3kZZg7t2NXKnDwakSKYh5oXS9Svq9jx3bQHmfTcBk97wY4ExQroqLS5Mqqoyag4saHd4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36aZFuDz7wmdpjQpHJNrjRofjK3DzS27NtJzPoRKNGx6rVSV9VqqWt1iMhhzwYXFyTFYSgNXRZCNcbdwz5jcFAjL",
  "key1": "3tBdmyX4MMk6dhecWK81uz16wjymkibshg7mUffeNHMpRjRPfM875KHMRjmyFtWZ5xFYLSWxJknbU3YgM39KgonK",
  "key2": "2WTXTeYncc8ENd4AGaLsAbejohDDRMSsfZJbeS8BR4C436sUE1QTjSgzQzkQeq1b1KiaiRYQNL47H9RtkwwBh5u6",
  "key3": "5Qz3GMrGSovWhCrv7gSmu7xYBnrDU9jmayFJN1Rbhex26BMszkidP3AqwJ6yYXDJPNzTmX6JRdfjgqgGfCg1zVMo",
  "key4": "47CKb5rffFPnCtFggVPs4GUvqXw4fnnFJzWXxtQoJqdAYFbDCbiBxGsKbKSvdokqZehvFxzJ9YSMZuYmowNnCLYr",
  "key5": "3m3cRSjjRCKcEc5gn7Tupb6eYgA4HSDPpRbkxQVkZbeXqQCpCUaAwS2ch94kCWPCUUYPm6XuxpCGyieTsvPeuPCy",
  "key6": "41EtVWvQ8Y5NWe3WxCsSYUeQQop1iKWtrTPsxdWVf3f2jauzVLcQjkGg1VNxexkSw8AY898ptPcpy4ZWZzpqb2fv",
  "key7": "2vdTpgSUcGMzKnMprB3sUJiR6vv9V36rUp5ERqrm5cVmDCeFfBYUiArrzKZJB7Dtq9rBtk1X7HdMQBfk5b3yFPxU",
  "key8": "2fJGWMaZLP759UTQbeVAnkrAtECNfYuK87vWPGSy8T7QjYzQNSoa7CTJ9KVQqcuvS7nPQq3mzq2UfjhVQDh4cGjo",
  "key9": "2aGFSFL51V1Y1vFREmAb5Ds5rigJiHLA8jt7rQgD6G8zAqLFgqhpbAMdBbuNpEjT3rCA35uiTCYf4vxaE6m8C8ab",
  "key10": "5GG8HXPmdm9SyFwPrRQzCm2SjK7zSzTwp17R9VysmV3CiVBTC2Pj8eo1517PKvKcNJNYNjcnkPFNtUTLudvEiswW",
  "key11": "3t814bZKKEiukYGgedkTQuJoD9NJj59eSJQAB46SYy2S2z9GLbUA64evNHr88pXhcWCD2nq7pDWhpdmg6ArxBF35",
  "key12": "4iAiF28rHZYe3R96NRscNtvBSqnDvupDXNthfhL7pagY9bZcqQ8WzqmX5QWfnFiuy7Dk8dAXgJ3aBpLparR5vT7U",
  "key13": "sNPr4XCuVzzG28EgJEN4bbRPKu9paKyPSSBAXRUzQaSDvq8WZr3Pns9BUfQmCDnifUEGAeh8ALF6iYeJ86W5D7B",
  "key14": "5mJQ5eUFBSDE245VfwGGEjBMTHNi4Lkh6CeowXxJvxWsufk3MNsynDzSeVwQez8WZLXuvjEiyWuY5VEMEg3HjB46",
  "key15": "ateu7GYhUuWQXT4f8Wv1XBxgWiedjs777tcpztyjQzmzLw4Jsg8zoTYytpN1HyE2qRF8TyTsVDiFkU1K4tAg54M",
  "key16": "2o69zn1ERGVJ4bim18ztqFRN47Fuhutt5jjpAU7omyfCeAdToHYe5ef4dkqUF7qHH9mk42RY27gKypR5wTMwB2GQ",
  "key17": "5xESfRfpvm6BXazXaDk2VrsbZhidQUevGbGJunbzzTZwXEJRHEf96UAP16fDNhh6bM4oCEKXM5fGi6swBRth4W2U",
  "key18": "4mDDpC7TviNWtwPn165vgBzHhZoDNtPGJedaAJWQUXB9Zd5RALQdehmLtUaT3U6bfRNh2HUMvAp6y1ZufzUkvtmf",
  "key19": "2E9bUNZh3sKuNvV6qo6y1FnF2tjExVtCsuJ65XBk1t5ra3Fffbp4Ks4jwtD8NyVYkQM9QkTdmvLGDn7wSmMfUtfm",
  "key20": "kXsubXQMhrQXYyKNAvSRSa1fn6LDqXsavAg8viNRfSdeTtrhR7BU4oc8CmT3C7Bm2VWw8WX36C6rLrznYtCtqR9",
  "key21": "23qHcffZFdv7jxFjdL1n9NXfd5HZpUvcskAM6Kvb3UVXfGAMP9X6HCk2dnU5iFUGDSqtrdjVWtJT2JXKEPqf98Lc",
  "key22": "3j8q886tpgi7xnh8RD8DArB72TW6TvdFkywx5YnTh5yqUPybPVdPA6pkC8ybJ5X8bJb5LT6CA97VGZjGK55osmRa",
  "key23": "3h7iScRcgXUsEHHxC2aDVaBvExdiJVwHqhS5cP5XDJ8Mbgop4Efb1GUA89hHyLCaZxFkjw2iCutXmqPkA2Fjfrso",
  "key24": "62RxruuoAaLxjWtNwRXikGStBcrYvK7khtBqFiLUygpYh9HKU2KCUbe3T8v27Rs1AtLC1m71dNLNW5EJutFJSf6d",
  "key25": "2xVwJnodmsX6XmR7xUJuisRMdb7ymx1Ts1hDU6XesyoCsdBNMsq6h6wvc82FEASi2Q9Zr5oRSfHm5DjZbDG3cbVJ",
  "key26": "5odreLUYcvJYMGkfaudjttmu2NE7NoLKg4jtXFNjfvPutrScFy4faYDs5UNL6KLdMx2ZDavLXLoS4jP4gcsLcUcT",
  "key27": "5Gb8VPTe33eVvi3H6rbBXRLkWFZq2Lew6gjX3RWyvzvF8q1yaMJErqXJpQiRxtnowj7DvDQGf4frTc71LoRP76L5",
  "key28": "4gurJkPnNxBPsgxmmHmoALVocTkKmrazEG1X2swwFgsZeyBkQmB8RQJ99FXNeP2tJ9YYiQgLt9skesz9xc47jH2d"
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
