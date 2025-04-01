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
    "2rxpA7ZyyWnTnFbTE6qTUkfoRA46cKDgekE3fWMaJoVUjJub1Yr3bLM5DCLmT27HkCE7HMiNeduQNf5pB3dSVb6B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dpKv7v1saPjRJqm61RW9BLGoaxCtr9ne6GwJxcJ35oQB1CCZpn47GRdeAsw5w3KXvn61Lkz6cJv4GLjoPY2BYeg",
  "key1": "5dmtyPhRATAihdrzddtcAqjd6CirWuk2EJ9Ndd1tMMZQ6MsTziqjsktu9wSziXZMSCQKHm5yuoqhet7GBgrXwsJo",
  "key2": "Q1NBEHZoavivQcgwdes9WvPhFPBFZZG2gNiD4segu9MskYHtfCqTmTG5EYji7W3bEaXvusS4vpj3cQwxgrfSiL5",
  "key3": "3c5ky8Yu6wXioyBWsnpcq7opPQDKVA9HKvNLLdQJ997gz2cjDfmPW43UmybT4ejc3szo59BM9F3XgaDAWoppyvkr",
  "key4": "ELcQBTzdr88D18etDMtf6M5fG44SfdGsMdpcuX3nszLhAifShJ35W5G2NTrXKQSjqSvS5TNWjZ3qz81PoaueV1U",
  "key5": "4iaiVrNt6baH8zr1apnL593pnbmyh1x1g3jtApUJd5cwtTDRyzRzsd4nuziCXAyjxZWN4SXFsYMPYpPJNLFWqLrj",
  "key6": "2Eq7v7HGEkN8DvVwKBrU6DfVD1hBcN84UwSdbzSKzLuHMDJaRU4FxKjhsQ64wdzyUMWUwLKz9NtUEjQZrGRjDCZG",
  "key7": "kCiUQ3FBgc4my3NcoHQJE4BtxgGk1fcb8fqWGBfY9gaoNjbvLk6LtxGE7uJVbG7TLAXUDas1qN7pFnPJ3qLAKYo",
  "key8": "4u6sSrtWRCyi8WKHQZ3DH1U8GPByS3EGNkeXnPTbPYet8ceissXETg8jo6uDzjSLhbZcKuXiEseJkeiBCYJUmYJY",
  "key9": "2M3EppExX3PfjRaVDiWDKNpHRYch3Ao2cjNWhLFK5nY39Nn2hqwhhnRqLowPsRZqkJ7fP6wbUn7b9n24GsFP2NQ3",
  "key10": "4RJi9tet9ZtoRQCgkom2BZyCC7p5PzRM1dBaR4jyKykVvhzu64HdEJZ13fdL3gK4CR2VHjKdU3vvxJAT8pd4mxj1",
  "key11": "51QeFR5HE3AQFi1G1JEbyWVqif3iK9CGYEq3eoe2huja2FRZbnQZjynBj2PoEJgTHnhCSKU1NuPbmBg31rEno6Ms",
  "key12": "2P7JUEhpqmVDidGWZFDtPrtASHsHEvMgGSwQqRXMeFAkNPKhHsJ4vuSR3PzmjFAHfwz8CFfnyoYriBg6M9RA5Q5Z",
  "key13": "2JTTEe37Z7qad4CQDtzRGr2qq2ahtkF8YnMAAEwBSENpeEiLSsZWMczKtrRCd8ZquPqbuZzzSCepqHsH4j9ahFwN",
  "key14": "3gh8H25bZ7jXMsPKxvVLTrFayHeMogjW5f88CsPsqkA96ejzUxqVTQeHzNnVu83HzQ1qrogru9WR9A8Y3GaqJNi6",
  "key15": "2jpqUB9VhQWHb5ZXbDzSbKJjFuEA8sVxRKX7F6kuUGaTrnRNHQGsR6P76a8QCUYSyhL1LpXHrwabSxzsDvWSuF2k",
  "key16": "4Ly1Kk18GcLN5gZLnWgjF6oJzam9yAAMmQYGSsFLPwEVxn1yvrf2Z2K9JnM36qBPTnuMYdW8EaYsHFgBUP3aFYp3",
  "key17": "4qjQBgsT7vMxRUjomYteo8qaroEKG9g1o6HLe5J8mhXmQR8sKkMfoBEDUfshE69XKENE7dfFpX3U2DycwBuGDsuQ",
  "key18": "2fb8eUVBavkyWQ3HuWjfXY1ZTiKJJHDnH3WbDP8fXN4cZLC9VJhkoYp1saoXaonkExu7LMon8BcikQ1R1iTn2tGw",
  "key19": "4TEyhYG7aYwCTC93CUFEXPmCm99VuXDpfbeVBUsm2VbwhZXRtoCgRkPPuH3pXtTZqPabGJZdkbr9NBJUwNyDjSv4",
  "key20": "2PTakiUKH1Nsf7ZXGg8xTGsTvxPuXnD3msupcoQmM4NN2tjbKNe9nydS4UYxrLJogeptV58HbnroN3zeGz89u3wX",
  "key21": "3DKQPs3ziGz5zRiGHNrR2Lk6kAR9isxxN3KAyyRn3Rxh5b7dEmMkDixbB1zDurMZv4ENTFVnkxztyPdhmZKbpehm",
  "key22": "44o9nTJa3TcrfuLzwizcDQsdWKdbKtpYUdVxhZbG5Bs5UpNhEptKBrmG3fjRMucXLvjyVcPBz59qCGR7xcTJUvYT",
  "key23": "5pWePhoF9krh4qErhrYG4s5mbT3ybDacVQDizRJaYjX2dmtkoF3Pb77DeZdkusaUxrFxie4xUCyT9NR1HtBiQ429",
  "key24": "4yabewPJJiq4dkYdw9N6Sphf9fH4zKXw9tBVnMacxH9PNBhKyw9DiqSCALpGsgAskKnvmNkYUWuCSb8ZudHqzPMy",
  "key25": "3sAr6usTHN8vwm9WTjy2nMprXdRER7evKnCboCpRm9ZuPyo4onLBRPhr3TNzMWZyYna1ESLnvDHrftyGRBLojmaG",
  "key26": "4aDu9ZQ2vfmozX5G6fij9HepAqnR13kuateF6dyeBGQ6aYG1bdXBjVxs9dPtutbCXw9fCZVPuTPnkjh7RNhzspsP",
  "key27": "3MqSNdKWSWoNg8oX5Xbuoz8fJHZ4gmdBRRAYvnrcraFFz5UVYK5Pj3dX19ghRjpJar6Mqr7mMnSxyTwvaZxgXkKC",
  "key28": "4ujggLm3Wxnspbvi7ZJDssi3es4ncpjzEhay3nx2uy6L28mkXCeQsRuiEHA9nv6oKQDnHUFmnWPWjyc7Q1hN4Rmi",
  "key29": "5k7VvYXYs4VbFJqdrjSR1eQv68ZzSZkMM5fXCtbBncDLooQty5LbdueAYA1va662dLyy8Xo6zupMNXgqEiEnhM8x",
  "key30": "4HTMQfLAmfqdch6qudigCrceEXDtNEp7yi5SA1MDkkRRormYBSJE1Cmf8jzyRD17FY2up6no15KEYQostLWRSt5n",
  "key31": "3ed172KAU5AykAwpQcJ6ro8W5WbH5GadTtKsfjhCYB9fgZZtNdZx4VTzg1M6GAy5ixadDtJ1w336ZCSfzGFu7m36",
  "key32": "58bCuATBCyXGxyAptkVNrkTE7BdtjmEXVsNVsYgH4rRhepQ2gdyAjAiZK2tCko6NgNRkY6F33dmcTxWDP4MtqgMg",
  "key33": "66EeMvnArvJnJkUcHHKfa2cvvRWL5fb3cZ5RgPhe4tTDDZnhuR9tHbpsa2a2kyEbJV5nWvWHdktmRgiqmudXyX7S"
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
