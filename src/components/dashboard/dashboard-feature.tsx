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
    "sZXVZcjw8852PwJFxssZeSp2vjwd5TMcKZkLeN4uA9FNj6uDdEggitbPNN9nQcxhLAv2zmJD5suvAnQPt6pdfTm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DnB3QMiYYCZ19RBj7GsxHKDpLE8bLkfY9k3fhwRjREVbqAJ15zmMx96hQdB8vXKTqhsfNUcnihUMJrqaomAAS5J",
  "key1": "2zWSnUmTBmtsMAEGyzL3TAbMDFmzZjKDfy6zRuuLRSpMsd6diu2UBnSSpcmFEwCqR4aG6gqE5d3Ad9CVmtMBqQPY",
  "key2": "5AnpnyM5pYg1iUheaVcAwkSrNfSWdbh3QYaSe11AnsNuyTAo1GZQMiYYQ4GdCGxhfrqBEAMBUxC6jsNFcifBbgE2",
  "key3": "42fsuHJH3uvFy6TbnP5UB8NqdGiZeQBGJfheeMJgmvJBHRTDHyE2SGiXNeZtG641Ri5Hm3HN55qmMcudqjeqSnTb",
  "key4": "5Kc71pAEHQtg5KCkN635dcLQRDGV95t6qcABP7LCQ4zCnnypanv7aTSnmGxmkRULqXVFCWpVgnoFEYoWJVDWjZL5",
  "key5": "3CybeV7w74i64eVb8usWCrUbkDBdU1heffrhYYTzzo7g4sMw8nXFU9ugQ1s4tWtKkTtCWjhT25UYJCdWaMBMk858",
  "key6": "mNrtrhRxwrx4d5S4SUob4tH8Jyo9StEJwDemMjZVoffqSw7V2JSKcUyb6f1ErxWxT8VPVnqk1FCNFX4w2VEe6Ec",
  "key7": "2qHQET7Rt4aLUSDhtXkyxarsKGaKcsbfBRkVTEwcqgaCodPuaTxctjh9uL1BUEMLjNXu3mK4vQhuymghEEYkDxR",
  "key8": "4egHmN36jAuPUKwRxHV97gtkzF5TbopDssU3t5WrGWvwFNfkNwwuStRTNZJTaiE1NNmPqs23QArLe4aPsEqAofnH",
  "key9": "2krDowT3rb4DewQx9v15Rxre72mSBTi1kzVqpj4B79361fcNXxLo1T95WEEWHADXm1oq7Ma1n4rChBTx5zqnENmK",
  "key10": "4ry8kALZpVNbu8D3PHFKe8no3GWF3YmtzzVt4HmrUTSrAvKGH1Cur3ZbPv3Gk3wvALg6LVfd9X52GJJkGKigsciY",
  "key11": "48RkU3tAAFDmP3rE4C7yevov42iuxCD6yDhVq3TqhjugsoyQNiLf8nWAKaPM4KoZawhFX1hU3utcVDrC59CLy6Zi",
  "key12": "BbBm96nzHsT56ZwvbQsUiUFtex8fFRqMCshBpU3TaMyv5JzA5cfGCAhMVhgGMAjvzpTVnZR8Cix1spuW3r1tNMo",
  "key13": "4QRhZTaGSv71teBAp293JzeGg9mRVtGxowR3ifVRUF1PisFqrPdkGnr2TPjNUpYMA69JponZy2ebVwNKWWA5gXp7",
  "key14": "443UL4NsFov3zyaiHPyaVPLcr7avzb9SwZdUBmQ85bTobacMvJeFpoi7Lk3bFKXEuMEVMGaQXXnY2pfUUN3mT9qP",
  "key15": "2PPVqzH3DQUKz5M1fvLGDWrnoWsgcdJZoqRd16nZueBHW1Ra3XwSgoNMyvZcJ4TpckWrVM3HMwXkT3abi8kCwo1m",
  "key16": "2ArNLhnxZ7EJtdbDGs7QiFVPMgbSE5QR1TfLU7geNwehPys11p8nN8zQBJozTLjeLTnXGYTWvQB816NLRohuz42g",
  "key17": "2zgoSxgAG4m4ydR5tz9snYLhREgsdg8ivsE4hkb1Ea8XqFLk28quJospvpC2VJ39AoUfiDNxbMPBRssmEPzy1t3R",
  "key18": "39Qw7Ns4ihTL33VEZP7cEvyQ98xPtEKiAaidbLcdKdU6v9dshSQFpBx26rnd61Ecb5rcCUCyNn5NkQg5LaXbr4zK",
  "key19": "51xk8EW5rzK3K9ySggKEpoTWzZNK2J75SCCcNRzHuC2F4MkGTtnseSMAedw3ZQw98UdsvMrgXNrgkfUfLxkqxKNu",
  "key20": "NZivaePTM5TqMA4aUAV64nFADn1L12C52dEQ5dZpcWSbAcSimCxkd9zxAFzJKUSFjdutRf23tQTRgdzgYQ7ZWcx",
  "key21": "2y6rbfKCumEZWxNpAm3cG1m1x6DJTJqvbHm6QcyF72cBbCDnKifHGEiA8QTYKzWC7ekysuYoTmaxrtnsWV6r33mx",
  "key22": "4KuWP9op6Km1PAwYMZqpQ6QFSHyiWf6trSspt4C3TMPnAokpkCXECgk3Yx11r1KugHPyVvczfWqoPveA3mdsnXtE",
  "key23": "z8kuSJRc2FGcNeHf1zm8WSTtff9qp97qYy7WvANrPaJwuwuKMZYF5MAHcg9rS1ZmH1iavqCcyjbvB9ZVbDe6GVb",
  "key24": "22hw54Mush5waY711Xf64simtt3JUHBpeG3wU8XHzz7CHGX9inF3zX1Y9KqHqR4KnrMgBURJwRSEM3xe46V1VFtz",
  "key25": "RRWKMhXDLUJuAfFcq41kbJpKVLH71Zzd9SA5ZuF5mZQjjej3VfdXcvshgnsbe5e4EUnm96zKQssVKT2K4EKXSiE",
  "key26": "5kMyjcucr2uu4UbP5KvkuVSUwe24Hc8v4VRE6EN1riN6KhpPngvwdhb7BV4T4TjHsdcyCBXEuVdiCy5ocBbcnoPm",
  "key27": "5r8sZ3KngujCFUBHcwetWABNyZGUUzKN6qX1SMYDpFF8qnkxvgaChGwj2G8CkCwRnCoxeJWfWChagCLbuYMu3Wvm",
  "key28": "1wvokDJcM5Z86GnThP4xQPxsN13psGqhBVkh3Y7e8a7QPjBYqPc4vhBTjqtj78ULZkMKmuDiKyEZDr94KBLNGbp",
  "key29": "5dDDX7G5ZHp6NZUKqf3UwHdZ44qJD1qHLpkMdwnDYKpg1P2NnkUD8BmeZWwCkGB2UwWRnp4JiT4czBJAepSXT5mE",
  "key30": "2o7gnzrZh2KASCe9K598yBz7oUxUE6Rx1fvDYFPVMvT9Nsnp1Q3kM7g3GNpa2mLNt4s3AF5VvCazMtW9AkZxz44",
  "key31": "2zWhLmFhUc1Utj6Gzk6tMCK8NvrpRq8QP1TWVZrgT5hnpDutVLHQsd2kjErGTy9ej6Ksas8sg3PKLdbLPtARfSXx",
  "key32": "TxwdudmP6K6kDppSH1xy7Daopa922jsoz2Lz666i5raZzSVBUSEaDbpVtgZw9ccW79p5vQv3HF5rnT7FCq9pf9r",
  "key33": "5BbxoTqY4x6RHD8E6g9bd4SZYtb8YTCsPBVz72S1bS5rbovzoV3otxqUZ3pycBqryqmii17P7aDCZRQk8ET4NbkQ"
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
