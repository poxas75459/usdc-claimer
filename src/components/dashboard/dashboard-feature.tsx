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
    "1oFVAC9mQp9ctXCGYqmot43XjL3wDBEWD9KBjEDZMgmd5gAspQZLyADHBnygyY7FbhWMCRqVy4njuGtSTyS5PjE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25JGEKhwmKuu1cAHe2FadKYhEZyrzXPjH6VbuaEdsGzwJgKDQsFddACNoMUSg8TmRdKNfimqSEjPZjjW9H1sTexV",
  "key1": "TUw645buEMuMYqq2zxFnBCgqGK9A4a8NbcwyGBKqcKRF4tnEEAwW4VpjwNaQJwhC252oDyJr9EKP7D1QketrJAv",
  "key2": "2WP3YM47gCSmqBF2AhfsPn4ZegV6LwVLGSM6efjcvWsyJ8Fz7c1JbjPHPaUcMeqE2XjqNhDMoUekWRpKmXEzAfo3",
  "key3": "A4gWGwwptdMHV7gx45hgUT387HEgkc2qcM9jHS1F8vsSUSestW8WzmsgxnvEksZZvUGBE3g1QPH3ViGfJphxoqu",
  "key4": "2hoBEP5Zm9iebDGpUARoA4Ee1YZBYxoUcUHvuXdQpzTi1jUXD8w9tiBKbBGU3ufdheqzMLBFm1ckxvh4phauDE2K",
  "key5": "3EfJn9YBMkzZURSgKghxUArL5hXWh6f16hwjBhggTzwUrG8LpcVZfL3NU5KWMBvrukYxGLaV1SGEebUWCsE3ojbQ",
  "key6": "2k48uH36KiGqgP86KJ1Bg89p4v7gqHoqrsv26TCFLNe2YTTKS3bWc4VWJGhfT4EeVnG2Phfcg25kumZ4RHyausaZ",
  "key7": "5NuMbCtJ1miUqAXoLeQwsruWqW7G61U3yoAqkJGbwp2gpPaN2uc6KFgPen9L1oYu5WtdTVfSAJvkSpqkC5fLWN6V",
  "key8": "2jwgNDGpkDhFXGoLBEna8WBFN3Ur4fk244ak6zUeVtJsFYpDnuGRsmrQEAnsnVDTQATanBRVNqdMLFSj1gmjf2hu",
  "key9": "5MKwSnZKx91CG99AhYZJuHAHSpSN5wZPbzgLfUn9ZP3PhgZetCcfCTqo5uw2LPb9jnbuwWpdxD7gaJmBwqmB4G5k",
  "key10": "5LxQdcYRsPEBtHMUfydQkraEf7jkWKFG5CJpCtQYPrdk7SDSEbk8UDqWoc8UnpdS6QS4HVq2XoEj1398v228n8DE",
  "key11": "5JoUqtyJPLrBGytJsmexvG93Ta6JUquG3uEmtckom6P7LkDPWcvpWh6MTokDxuWwtn5s3r9SJ4ik5XoYArvKxWiK",
  "key12": "3TvWGqCfvgekk47euLUh9KJBR1camZHJwJPhR28VQgUv8qcK6QCiobDZ6AwjM5Q5mtJx8ZhA4iVW61SpjBdm7qs9",
  "key13": "CgJgvHhX3evQCegZb41L77BJeHidocbhFd5EQrtkQTYx5E8hfJ7X4Xc9sWS65X5BNbazB7SHDT1PpaARoYzEu8A",
  "key14": "56E7E4KxxQ2zQoAAUTSjvB2zcKjrigEcDn9txpAjSSAwRkg85QHSM1FfCC6n556aAxSkTnmseMtWQX8q26EMMKBS",
  "key15": "33riDyfqujXp4y3t5tU9k5Bg8737iqY5h1kzh7z61LGRCtkbpujfh2V6wmVtkFBeFGsnsD4fUahBp5TAHpj8J5Yt",
  "key16": "2A1G48cxY5xXJ7r6csWv8UimrMyAJVtDvtBqMTy81hgu5MMSAS2DMjGHmq9HzeTNtXXNPxMZuiBqiP38XtZyt2x4",
  "key17": "3BkcV3cosyuNrfSGSwiAnYbWGLKmieRkntgRFTnyFR2M1sWpjPpFXR4dC3F5rW4nsu6MG3VUPv98g6VSKdRuQrhB",
  "key18": "ZJERxwowQn4dGYB2P2QCVQ53c65upLBrty873fbDyVaWcVYzms8618Rvazw9qE2rEFobQbAZ6edo7qr92kWsu7n",
  "key19": "3ssuCr3pbxGeECANNvre7vRFJedzKHrugvLr6cqNktcfVEsQr2tZ9jbSiFyp6QLy6TmbrSoeZPsKGvtA13HqAMRU",
  "key20": "54tuKRu69UpXeDFXoq4qrCsKsWrvuELATJDJBTjrmtjY1mz4Q9bHYaM2e7V7wz3KNVjWvZeChbL9xnALktGWGzqa",
  "key21": "36XUzUyJxuAwNJLLyRBP4yjFwxXzJiXpPSkRhspjmyHYB5wnUuYvczS35jjTmBqAagiKwPm9jXSkPiMKWjavsK2W",
  "key22": "3D5rVsxnbaK3tebKZtWzGy7nBL9HPn3KaBnSKBwCNPVHeHgnDyTgp4i6DSF6gtJnYsW28CF7g5QDzNSDnGPDusVy",
  "key23": "48HS5p7FUMXU6q3P6mGm9JVU4jdio7hEryKDXpMHTdKx9bgRAkamyCBg9ZD24Le95rWoQTgr3NwTSniwGovzmBvJ",
  "key24": "2isviLv5KhHxHXv1SGi2wtAFHdGqvuGmZh6zCF86xdvvTuWfFH4K3K5WiV3W86ak52aoZFkhS5jQ2GjDqHvq4MZw",
  "key25": "4AJuNMoubsVnmj73b33Xb6mnTgtks6D4bd5r8pBvWBNGgh4NJUeyscxaNQ4WoMRJ8QfpceKUM6ncXC8dXQ3RbLgt",
  "key26": "2upa5Y21NdaXxNMrgUQULqGVfV1nq9UCW28zSCn47oxZW6nZaxwKJAnu75W8Smu3UPJbJGeTZ1dSBoSwUoCJ9YLX",
  "key27": "3zYhqq8k9Ak8nPfoApTByeouEcxcu3MrcWVeQB2kMDGYg2ehHqhbWvkCosqf1AGPEyhnHupxpo7brS7ba6cByrQK",
  "key28": "A4xysactgbf4aifKsg4M7NWSytD9gt3LV6TX8JSi7RuQUnZvMcYs7633S4CU7jhqxMkS2U4Z5jY3Ks3vv4zfj3E",
  "key29": "5evifUtPRYSG2mTXrjH6vyLR6MWWijqtAVYoPGa6Umm9DNUQ7AmtMRZv3YgLCWM3YtYZqk5TkQG6XfjXzf62ynt4",
  "key30": "51Sop4LghDP9LYR5m4o2EDZLHBeTW17EPG48hjT9EdzP4yNrTkZGhCPiYFhNf3r6zZGGhSquiWDK3b1FNNGx71o6",
  "key31": "553p8aziKkKjUXvHPGcBsETw8aGGMNpR1fmVJFTq41T8RnvvMPkmLdkQdtdPidrjaJpKuFV5eLECRM6nTYELYfS2",
  "key32": "3hLaX2hEfRtAFRZ1U5haNf1CbUHmiohZYN91siq3FWidbC41kQDwb5QXu5FNvJgGXcdUgYXaTFCtN1xmAnUeBwzN",
  "key33": "V6E2VmLpf8WFxivkSYwXr7Y28CkgTArQWcMgoZyLuVk9LAarJ62dYAVXuTehtXimNCeYHCZHjSjnLceHhYb6Ls7",
  "key34": "5hGfqWT8m7ZhGck42kx3mpNM3rbCTg5AV2aBuJz5Yp6V8xh9dG53xbGDUtxnXkz25EXN5tCujHajJyttXx79n69B"
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
