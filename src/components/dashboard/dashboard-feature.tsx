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
    "4QSgkGzUpHb5pLgmXMDErsg4krJQL48y3YJxvPUdv6w6qmoLAwpM7f43c2erYNhaK8p2bXfsy7ZRuB8BYDNXyhqi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QpHJX52TfPjwUZNAEGkZWt5oWHnShX7MYWddBkYNpNPVwtf3JZnxEn8EwpMzmvic1GE8wStk1XPvY8KcaULGjra",
  "key1": "3nLQpocZtPSFg3QxCi3X2ZxQSXDESMymBFne848fnLjGE5RM2n8MqvGxXwyGbWspsycveH9xze9uvPzv7zPpyzii",
  "key2": "3oX1XiXknm9PEpfBUVZV488mQp6Wv9j3TiaL6G4LyrWdWP5d5AgJZ8UiVWixmEgj13s4M37ybDB8nzMRY1JkEkX7",
  "key3": "4maAy36FukoAe1DHYP7w4Vx4cDagEr4hyAE57dKCS3c5c6p3gzNihKUonJ3UrYvjsxGaH83Av9L1LwzzXaGoPhH5",
  "key4": "2jxtj3VGA4j4koeK468vrKHaP2NNXeSbiXM8kkQwAXP4unD2K3vK9GqbWJbWE5RVnprU3fW1FBF4otNatPavb1Q6",
  "key5": "2xPzVYhEhotnWVWTdWpuMLYweVQNLUn24gt6DVrYWEodRxw53UhwNWEdyLhaQ1r2YqfHMETwEzdE97mwQcPANcHr",
  "key6": "a2HSsFm9A8wtsgVCEUtkVx3y6yn3DvywGYERFLKWutbY13wF8whSQwcDY7joYFqJGukRTdnLW4uAdRbJnt1ug5H",
  "key7": "27UD8ma55owCn2gCocPNUifb7wLA5agAbhM5C3G9nrNr2cQKcJrriu6fQjiXmUZdyhGHJoXy45yLEQd9DDZxmMir",
  "key8": "5BWjAnYyG6Pe3mStvnj7X8Qeh3BTvWWczKKqCSEE9snehXNuWisSAJWHEtcE8BGfe8HRVCoMRtrqSE3EXjBkDsyB",
  "key9": "4KrtXrhRrEzGUzAbR6hh4s2LD3AdPGgZ4KwaCF4zgeaatt8WsDagzEKi7TpycTPw9SNsPHyfaoGiZYEXqYpdyWfp",
  "key10": "3H8PVZxhWAWxbyYSVpBSVizcV45jQcRjZXXNy7HHtLJ8ETjDAAioH2fChogr6W8AmcrpC1eUeG3oFRHwaoABfEaB",
  "key11": "5DjULmKgfv4ELecgRqBFF9iG4kb5yQLXfn5EZMbuVax32tkUjmj5vg3bgWgL2ZhiErUro1ekzTcgAMgQGv2FBYNQ",
  "key12": "4s3sFHfH7uetfmxDqdui1tEGkAV4jGRLGo6avdtVRd1YFz1TZF3Tp1Lhd3hqtMbmxvg3v2oLmxckr7G1hp49GB7F",
  "key13": "2z1BMSSyaLrpvTS8YxfLx57mJDxYcHCB9Zzu1CBV76jxzunfaFN265EERzAtWRC4ArNX6bf92iGQxoDY9vL5eeBg",
  "key14": "2yneLGQ4G6YU3BqXioSFkNg9v7BQUDYAH4BsLc7M1z6LsJd8r1Um7vagyp9etqc9424YS4DCWYTZUqsBA3h7Auix",
  "key15": "5dUvpuXETkUXy7abJ3Kmsu7s3fAVYoW2itFezUxdqijnivSM4xvDqexes5rdDMznVgL1DMBCHRNBgg29xxLeKrhd",
  "key16": "v4Ccnyqg8UbGBfUh23mNRp8HUuukctyVfL1TXupbCBsnXiYo3gya9FPy25VC5SXC8Q87NGK4yZRaBC1Jno5avtY",
  "key17": "5VMs5m6LfYVqWQyszDRhMwyTgeNQ3n39SCD38ZdSLTsbyNu5oPD1rZkcLnbT9cDvDBnvby58KaDLmeQ5vvQnktv8",
  "key18": "VjxjLAq6ozUqZioorVJFEvfr9aR8M2f3yKp28FCr9ZegDxJgPYggjDyJANRJ3zJxDXujREhBrPkAMCdudHsn1Zo",
  "key19": "4pX1WawBxuDt615MGC5RWk5yAbNxsMJFXtwuJrHz6KN8gM6682WNThaQAZpE5odmXEKPDKzBtojBez5MkqiN5XNV",
  "key20": "2juyraMzSzknZEBRgD4z9h8XgPNLToWCcijA9zk1ShahSvmfrSmDAMqc1vnUz7oJTFbj7VHRHkjBbgUG386xai32",
  "key21": "3gTBG2tnYDiy2HYiC8H3NaMJLTa7voLQuepy8wZ8VqNMu1QLYeKjrtoKzHHor4mnVr7suMMRqJySEieNBsZU94eH",
  "key22": "rGfahJUaW7nsF72ktJwBt65Cqm3TiJkfr5hMBFgLZSGLqvQ5hGP6woCH8frFr27txBAG7adcsZLxMe4kidowyWi",
  "key23": "cZuA63Vsx3mBqYxhqrNaf82dUGYxACP9X5EHGm6igcFQ3e7bry2DDLdoqaskexPx3X2mTEL6aMPjNAyCHbAXJQ5",
  "key24": "5QFNT6DzWVZDt84ZHh5aLT2mJWGk17guFWPt7jxK9BEL3CrvhZ7f4kLH7qka6W8KExGy726jJsmBqqrM1YRXNJTz",
  "key25": "czYsFCegYqusyf2iTMr4kwy2ynibsSeWfa6ogM63HguBuxyp5jwzhUUKDpkMgPVnujcur7B7mhs5MuuUqc7mWva"
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
