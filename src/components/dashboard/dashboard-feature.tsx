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
    "23S5dkJRoWZUWa7HaEVrREMfKX7ReUqHDPqkgqhr2oeX2j3EE86jAebXmvauqUZ36KgrmiGQP3skubQZLLeDoaUC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CCuEQTNH4RpF2B7T5mF3y8oX8Ty1pbCQtZPrnRdcHLZuwe5s4UnF1rde6PibBd8MWMhhfBq569wWFfS6zaywrze",
  "key1": "3nkgWws5fRqs5FHnApbsQdtAVK3QFPosLdwfwdvxaFthd4EeXnQF5ynLNmqxP7fBCUd45seNWyC4z9zQq28pmimp",
  "key2": "99ViECFdyvJAwYAfQg7EFELuGh2hH88FPBD7gkAH4AoVdch9FcpfvJNzJUF63sVLbooQQfMcN2Vh5nUdJA4RasG",
  "key3": "XVgGehYqtKQXMP7T3wvacoqE8yxGFVZwA2isfX5eVAzv1pxz56P1vLkTZRxNajLW81HchWnnWc6T3Civdigp9vF",
  "key4": "4yixyteaBJXob8am98822VVWiKR29Fuad7owU7r5sumD5Mza2YaX1uWQTpcYmSkugqyHeZZJFzgrTAAvnSwdq5Fv",
  "key5": "58fncxjnjtfYQ17M2DQmqNC5Jxavi4iLySQTwLsn9kepMfuW3Uhuf4TAVJ3TRrmfaL5pVArqLEMMSsvNg41nS3WS",
  "key6": "Pw8hUayWo7Uo77WjHtopfqzWycTSh4fcvW5S4tzbwzK313NATZ3ZJryqCRMaQRbxbPjye353HBETfm8irWM5BSP",
  "key7": "42H2PatzpRAURppEUkMvbHtEBmBnvcKD69yGVmpbXVAZaAjqhhKqxJFZ9GaG7gc5BVwJXUu5iS6AB3E1grj8Kxeh",
  "key8": "4GTYQejkuKETty34YqRqy6mFXjgsHo2Aos8cPra1E5R39SVwEzxU6nBHTnxVLnruK7nSyuaaPDKdr8buiXQaiGLT",
  "key9": "4rgxG82fDiT1qHs6y8n7LSb9yTkm9FtYFDUBNyswJ5hdffeTYpFCc5qbGDyuz99MabPJN946kyxG4h2ZGL8LatyG",
  "key10": "qBjbCyJV9ErXyejSvEv3N6Q4xgEMLM7BWdwyZYMvx4dKVmDDDKyZ9G1qNs6NEjbJQTgSB7dopFuUpZuV4xmsnCQ",
  "key11": "bAYqfuGWxEt2qUFyYdPd6LmA1yaqAB9T1QKawuaeZgBqp8iRgjgZekojbm3gi94hzfnBowabnwcnqMeyxEK7Yyn",
  "key12": "2sZigkCp6QxpixRCUqtA1jMVSH4FmirDTXVHBJdae3gJWQRHdzejpNCbaVcpLSE1P7QAs995yYBqztG5R4JRzX67",
  "key13": "4VQDMDcqUgKyL9z8ejQoqfttuNFXkMUSE516ybGFQ6UNszi4axiMDe4BengESsVFu4DbJvT8PuHfsu5fptnD4iiT",
  "key14": "66ogTLqj3QvMrhGNuYndERWExih38rBKfPWEpeUxoenib2brDMF1RxEM9fMNgjv83T3jtS51iQgAYeP9b3FLa5xw",
  "key15": "SVnoShhauQJ9pvZ8KQgfao3C59ZD2tJyaU4tDL8aPSXGfCJxdBxGCPBnBfuF9XRUPHEv76sqjTGxxfaP9kYpYV8",
  "key16": "4yjBJKBB2FQCvffwducV8zeiJcW6U2KkEsiwTjMcLhYm2Az7s6KFFfbKHjGrb7yZUY9CBmFFFah1r2myZ38e1umJ",
  "key17": "5ywNFXtd2kgRZsGGgpfGxqo2MA6U93k1eXVUVx57fmSssqXJUCPEF2BwSwQJEVzYZqtarYjc9Mpj8tCU58yqJ8o",
  "key18": "4PsHunBVJnAUUD24gmVzEA1pCmjaEK6K9Xqs5dpUQwKFyyXUr8xJoqhpEqvcNm9P7pp65bveuACgiFcCXt4JvADV",
  "key19": "9LcwcFDVNNeq2Ybnjv9oW8h24gb3DD5VcKKZ4pWBgNf5QHK92vQ9mDv2gdaVXxWnBDSsST7pwPApyndL9Mf5SJ2",
  "key20": "4PN9CHHCBRbrv4ThLHZE4NPiHDLfydHYXvy7ELMLpBCZZYTCKSfvZKjXhU5mbcyQYHetQniBYmugfqoa9tn5GUt2",
  "key21": "2WdaT5XZx2wj8WaRPtgT6faYdTfN6nTELZKKWGDmd9LoBrginCyZQCZ3tRSvSLinaMXkV2a5uw8uikUEURR7nmYS",
  "key22": "3hmC6cVGWgvNgQgUA7t1vQptjmw9jvRViFV9VG4CEiVW9wm9AVhmntRmx4owoeihtcMNCXgsXBLjiv4XK6zAyr7U",
  "key23": "ELGX2S66hg5APQL6Tf666iu4rfrgeqPieUujMYv12H2ahtKLuErmAxQm1Fy4Aocc1ToYFkKJscTow6p5W9HJ9JM",
  "key24": "4upA1p3tahjBuVTRZFthsAdJyCRjJTG2Kj6zhd2naUXhuxAfsher8UMh8F5dEsjBmDk9UpahtYZLoYaDau25mNLj",
  "key25": "QEipNsTfzaRL5CmNQhEQmmD88e9Lc9tVUYeMsLh2mcnsWGYKQYKeDRmGspzzjr4SHWUcLeYxvaE2as6vcPxgcHh",
  "key26": "4oN4AXtWn9sqtgi8DabaXNjKeBG1LBsSAicmVUqjKnfj3boEGbAzxoSDs1AHHua7MrKz6BA2y9tJY6LZVutJeAmY",
  "key27": "5Md6zW9SAXmhbNu89XfvjHatTd1HsQLZZkVN8o3PnLcrKF4RPJNPZN2dwaQiJumfpTB2t7KXuRVeXgQgFCBaRrj8",
  "key28": "25rhrSMD2LahnW4RdAz8E7Ned2DomExbfS8n9ZYW2QmsUR6JmxrihwHJLA6gLoTCcYUDDN1bahd2XGQ99fky32ay",
  "key29": "4ebLkSzPvVmLjbAASyizBdn6bnfpNmWFg6dUd4YepZNq42ZJGTDNZdcJZmKNyrJUSoVt5G9N1BKoNNhg9kJGr8VC",
  "key30": "3ZNf7qJS5t3FzGVNDwyGDj5rpfGLpnpqUMRYVwxjPyAhkF1wxhrSLuFK7p3cxp1bsJt9o6X6Q17F64Uvj2gvURhj",
  "key31": "1NbK9zDUP2D1zayXRvWs6fWQ6VCiS7fvkkeiFikcQ3u8rzMTgvwFvEwKwvSVAKP38eoPPpcK8M9J36N8RhJ9y9y",
  "key32": "3WxcdMSBcL3Gb35vqoFiq8eiJ4Tu48z1sJJ67bA4B42wi46Nmy5Fih6urBFe2rv7dStaZ4S8Fuu4pdswRtM2XGfA",
  "key33": "5rUkV3U3An37LPGryxxkuUhjde2SMoseyamEMivKCM4bM6oR2ioTuzD3BiN92VmXJbiJhbsqD3cofYo5yTJ4Jrm9",
  "key34": "4NHz6YR9BcPUyuSzNuz22Cx9FHWzF9FhnK43rzaYNmGxaH4LUAb4W2KBz88S4Fm6g59X3xvDiFpi5V19AF6WNmpw"
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
