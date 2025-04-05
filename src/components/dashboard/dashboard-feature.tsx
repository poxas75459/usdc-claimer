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
    "4nEgq7LNWbvdx7YfG5CEKJ8gfkPZTTqwZRAW8kom2GfLE8X5cSwwQaKfoGazZCUXXsiN8Yf4JC1A9RtKbGLQF1H7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "77yNQvJ7JbrFFmqw8o5Dz9qoqJJaNi81AqXezsMMsERMFrkb14mSBRud7sjUSsJ3Rz3HReyy2Pym1URfXuFCweG",
  "key1": "RW4yXpUexZTy3NsfrvjscEAauyECqceKrQK7WtkvCzSBbUEfAnzBC74WFmFE1bZnMQWQ6TuQeyLdDDjNpktNejj",
  "key2": "4ACtmbcg9yCckDtpjDVjtgZTunGepMmHsykK8YwcujKLBpjtVJ9GAtPc11jJJjQmB6PWYNM1r3MnazWtMy6PLHZd",
  "key3": "3AKMrw47RNJjtpCZAhEpQ2qX2TqaJ2D4rehWtAfxKJ4TGFDr5t8Awn8nBFND9mrz14fJZQpmjozsNbJiSwkqLwJN",
  "key4": "4DsM7ZPMaSArd3pUEz3XTABU9RuC13p3G3eWb7Rhi7FNuG9BWYPsZ9jGYtUwqi9AALVZqGZdJNuXBU3ZGiT1tsC3",
  "key5": "CbTwLcauo3RWXpKoicftHKaUwrxPHnUp5zFMAoxoVLv58PuvdQfyXb3jYvUqwRZyhMdrswEsokMKJbJHZ9zFdC5",
  "key6": "2RyHvontJbRJ9yD7EjQEQvHn6GP921jTCiydmooimfpM889Gt4NCEQgUD2tHLY7kGPpDygCQQ3DiR7gBtex4cDUY",
  "key7": "Q7p7SNE4UXaFdymDk16Nu1vRJ89sDz3N3BN7iHD6riscVgC9ND84iZCvLE3ri2ZXjAyX6SfLnzeaRnmjBXDTNAS",
  "key8": "2VczXy7Fz9fgdTvyfL3iSQMLcEcETkpYbtwDkCCmdKf7BuaHqw43rRXMJkv4sUwcCXDeEZt3a18YyGTBL2a1R5BY",
  "key9": "2KfVxN1MzS55qo7UEzbgBcTbzuvVLywZdgzmG5HGnYPTP5FnHNikotxPiccmS7JXGCgd2XLE9fVVP2vqCYqVwrT3",
  "key10": "41s2fw2y9sG3aRXvummzwwGeQmX6oRL8vKcMcuJLG1cPwLy5Xes9MiWqA1ABpmMCwK3pjwoajkHxQG2dpeRn8F1r",
  "key11": "43HooiH5WyHVHDX5djrGFWFotTR2aKY5PeMCuCo7Qtwf7Pqb3m7JN7pd88sGn8efJ6Vfy2WKKcGGMMVxzEfc9Ru5",
  "key12": "2bLVusUyRyt5fVC6Cmfnmr53G8x2pwHtAjosxUv84HJLXUzgcy29mmoxwY9CJ8fjN5XENKT2kVsat2sqLa84aJMU",
  "key13": "3Bo9iducqr4vdWoVpQfezS48LPAbrDr2FGu6LiEyjV4KHjwbG89kvTdkzorKB9d23RQ4FeyEqTbyqNBVsBARVNEP",
  "key14": "4jKQQtJPBd6kh4eWQNJoeMhukoMEFDG8kPqgMNzQNVawMJpzNvaF31XyYaUooXu4GcGEXKjpC4dS4atVgjjjaWp8",
  "key15": "2ru2wvPfsbkg4WUzfUvvSpuTy3sHyUE7Aan25ofPHWfroeo7Brism96BhiKZezxT62ALW8xuCr8JbhGw9BWTnqNk",
  "key16": "2CLQ78FfQtUJPF8ijxCehY5KxN5EAFP2kSJxXkFfMRRXpPrt61LVbiKPwWMYqNBob47FHnTh7NYJvthUDv2TAqjm",
  "key17": "4TuqaCZwtcVBjHxpaEEgVNEYVbpDsSzyba8K4LBkUa8zg6wc8Riy3wFGCuz7kX5rms7Zz6Wp4AxaWutKTPQFNGbU",
  "key18": "5qQMjn9GnL8esnoVN6zkkKHEH2mvXgwCFqy5VrurcWqFSAo4qjVS3pxqfJZ9b27rnQ1iCeTxm8pchjupcpbB4jDW",
  "key19": "4nQVoQxbn2u9mt99LFWEYp9aM6ebbut6faYt4kSnJBPvkFdz7m3YHfSV6wXDfQv1ARP8mMwyHVaD2kewAaXAj1n2",
  "key20": "5gByMdFYDuyRgyPbtzNj1iJxvYhPUej9dLsrHVpsTjQPg53yypaeRRnQwqJBRyeGG2urfoAzKTo6wqe9XR5i2AMJ",
  "key21": "5RZtFS5biKxjb6yYMpxD9UrhVYVdyZQFomqAKzr5JXPkWuQjhxz3dCBypzdohKx4pGFSKSRS4j4XRamCgH2SHfc6",
  "key22": "2qqtJrZf31gXjgrgdUggT4NjAdSHCmeN7Mxe3h5UvCv3fReWR4inZaq4QiU4RoCBK5x7YrgftJW5MfnuYpMHtG3y",
  "key23": "vfqdgi3DMQF39nLVDNGP1GMiaBLjF5RUjQTMqJ1XpCznkuwC3zncjqVCw18f6Hj4req2pwTd6WYUrCgbieZBu61",
  "key24": "3iLv9sPUmEnx8XDQafCWJEH2h5bL7dpSKTSTw1NCax3jf5vcEC5BWeNG3hWnPv3tvjYnrPmeNAs5dWSNWMLUTMcx",
  "key25": "2Dm1NvxeampEPQSfAEhjajCK9yok1ssoaDeq4D8RNNREwyYbbAajmhEFSoyMrHbcdf1xFq4xdd6H1MdtLRtAUtG1",
  "key26": "44RR9bhJeiBuC9YGXKanFj7o8cPY93nnaGR7rmm9agzakqJMQM1Jui1sZrwh6y8YNtmbDVAARUY6od4abknW6WFY",
  "key27": "4rBVaYRaK2xMUzA3rAUbnpgKqsM5h4VZUYYg8T7MJpqg7Pf2oJcUkEqC4M2T99iPzjVrii4GATPxULupHYXJGLtt",
  "key28": "T3wLWCCLvRFbvkUKXguqRqCxqRVPVtmZbfJcRPaYXyoKtoyLtPMrNsZYkiT9xrJ3wY5Py7yUueEppemU1QmNiWr",
  "key29": "5pYCriqaMAc3AwymxWhasGgZKiZw1jjMoVemv7iJgJwqK3FXpymR1v8dr3EhYGBBwXdCchAuedmijMKP1cL4FtVE",
  "key30": "3WMwCZu5nUpTty5TJp3CSPC5Fuiw3ujT2uBt2haa7rC47zAtbafcteWf45W19gUKdijQaRQZYJSHhY9Rvinr2wPx",
  "key31": "36BcfEvgfmchEaMfHSdrbJ2CvDqj1MWwC2ABgFy5ndFULkieX4pLRbhXVGoKWUTKfcqygWgUTKdq8YnCaGGaGBUu"
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
