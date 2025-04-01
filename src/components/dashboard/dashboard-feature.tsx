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
    "4snYeT9Fu8npjAZLu8dmZNJn2WLfPyKHbLzXNcn29EtstVA5rfTQsnBCpN9CJxp7ntDCiu4hY1jprNfxVwRfsp1F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2W7waWD18unZDU2AHGgApe2qg4zbSydBLucG4ugSDkWsW3LbiRwGvPfNMAsYKrSm6LyDZBcbnygS5TJHHWagMCYG",
  "key1": "53mUfDPdyZXyzciyt8vuTqfRSjSWFyX5VFu77g5EAExnpSRbRjGqNywMpR4j8cJJnQ7NL1yD576WKhHLrBrrJ5Xm",
  "key2": "56p73MMXLFniBSfH6V9EGHJWr6zPVa6QzgiRPii8qBrr43XVQtW1ADi4rqzrGqZWbUoxGHdExsTPTeRfCpGhVnLG",
  "key3": "GCD3TzyZW8Cd6fXjhusSuKhEWfU9cYDzqkY1RmTSMTPA8VBpXEAmbhBrtbCrGq8r4ts9nGWPYrq1AiWiqrSaCZT",
  "key4": "2iJwfKrrQLVBmLLyJ9mcNoTGanbRpq2CC7n9Jasc354bhc2ZRX47pM31yhiJ8HJpS79FgaNLXdNjDyHcTpRwmgLT",
  "key5": "5ZUYL7AJCGzzsRCaSPECoxV7W152MgHwCCCFrN8vDHF6LGEUvstnzbGHV8fycceruvz4mVFoab68yYti4HB5avwq",
  "key6": "32mFVzZUNnzec4qVYWPisj5Seu4tPKRp7wCGyiHiYAaoJDdgxgkEDbscYgTWndSZpgmD5Zxrs7TvJDrqTZRwjr6T",
  "key7": "43BDFLYG5oyTqiu5Ue6RqWfRvnoQ2nAHNt3g5WKqrXR7oqXW66cfYasDzkm3ghQwkCXez4j8cj9ywx9mRpb6eymr",
  "key8": "u5ERsqepBs9Mmy2cguV1hKoDQBx22sQUUFJePJxQXPGzL2QNQ1EMSxoMBbX7aFxiq2xLXSG2pBQGK1ibVvNt7RM",
  "key9": "zp4M2m5wYMbmwa2EUwYQjNgifJLZdkM1yNM4Vd5PB24q6uM6AYHb9ifcj8Qwf8Lx4cdLEKj6hRu6J5fyGY55PnR",
  "key10": "skF7frG1XqE7283bGB7XxWDCc8BKL9oaz9fA3T49DYAmezibryCNeTxk18hLovzjiczvfkEMUSp34GftYxgNPnn",
  "key11": "51jTcsN2hHV3WjuWaqy89DurXJJkCGtbVKrsDK8r2zdYTWaDTSsJGQRpdHimiptuM1LG3fxuY13eZzno6JMa4oew",
  "key12": "AV57zZZhySe6KM1a9LoEtRhGuz7ecFmVYx3vTroNc8BHGyEj1D8U99AoyCeyT77vCcseGYz3Uc8rY4eMc3vSZvq",
  "key13": "26tBUF6JWHoLbr7S8V31SPwQWTAYXZehGAzzDPRFvH5iKViXBwmjbhWv5CAzCes8UfdHzTKdnyCip7g2NoBSPEFg",
  "key14": "5xMmq6ftXwRVUuFWXvMTTPFevKeyZ6HhCTupt6K5voRkbJjxEzdZ6wKCLdTTiBpW9KmuNHpPHwSwk1rCMRjg1geF",
  "key15": "3f8XybYweYf2TiHZ2QDTUZizsqx4nvaBCTEwH8Vdqa7jTupKXTUQFPZehy1VuBVbxX2oGkp7Q166HAuuVn2HHX7m",
  "key16": "52orRgnsjxREvF8GrsZPgVaXm7C5tvZ26cCu9ryY49g1gwRhEdFEa7tZ6pJ4RVCwknYFQkhtNPRgRNfPFSbHeLCU",
  "key17": "35bwqmH9GoPkEHdTwNoEEpcZ5mx4EA4qddMFow1C22eFsZB8jGkXQqCqzCy7Dv7CrbPixnYXrrkfFXh8fcWD8PHw",
  "key18": "37RcDYUe7wCLufsUVbHEcXax97ZdqiULv7mFUkwvPA7z5PEVaKPrWJB2TRpJDxpjhyvqhsCFPmxTh97gfyV7Wq2R",
  "key19": "3rvSKTKu1Xh2Q3D4DTA15p4UUPqEKn4SVB6T4knXmaaysmSh3itBTnej4KUYuAbBEDWgtYg1sDR2MTYT7ppu7VCg",
  "key20": "3Ep3mPDWhcrgShhwvE2MXgqzTThZvZGrwmvHYRYfRnKJwS68BXHpuWdbrWuCgX7Y41SR5eEXNiPZHWgqwNjwMfg2",
  "key21": "2z95EQDNLDJVs7bHyBPPxf88pyXEyGjp8HsjbY81A9JapTFj9ge9vCz8UKpGrFMYNEGkVmf1ubz82C5TQh9qtBNX",
  "key22": "2kULrA3dxHwKDHdBg4mhaLWW72UoQx45Ydj21E4FRm7s8cJnNizfUSAvP22ui4tm1h8zEAffeCx2QRJuEH9WycBQ",
  "key23": "jpPdrFka8XU9j3gkc2byNE3STCBuUBTDyPXFbu3EUfXxs2S2dUQTkjsCbQoS3JnNojgHGuTjFpNzNLssw4GVjf5",
  "key24": "2pWyt3iqiFScdHscpEz5YPCeHf5irXpBNZvYVZQLyXDxpczmoDzC6JC8Tp62XgHqJJW9QLDiLubB42b8etkepcJ7",
  "key25": "2vxMGTk3cvrjvGahrAwE12WZh51VWB9x7BQdZMVouPwKot3o39ymKo91xyjnN1jxz6VCGAAegApgmbPbeXghKp8u",
  "key26": "4783c7Z94Z3MdUhHFZdVmZFomuQUtymwtJwTpMuHGiXSbGbmWAVyoD6Kmgnkg5ECMny5NCB4tvKHhvJawzthDBga",
  "key27": "dQnBN5mmMGWoHJxvPD9zHm1iu6L6Dr2E7rdqxeBLWLD4buCAt91L2z7S4BApL8fzJmvpfkTCg3pUPicp3HPhX9t",
  "key28": "wKqfFQB22A5yfoeANDfSWHmPf9i26MNsp8MV1tVVgziMBemxYUnN4DfLQ2C2GrqAVedUxmaPsqgaPQJQcGsjFrX",
  "key29": "2uSUt834kSXBeY93NxbgbzTvmAsAwR6sCu6NBCFTJqyRpr1dqSE4Z8t2sWfnvU4J2piXeLoqkA63G6ZNAbMvnkC7",
  "key30": "5AFjZ4xjngosmyDnPX91ne5hHoa5Em6WVcPPBmM9WnhNqQ1rKeLezmop9gZZdNJReZRLs5BrSCiPQBHya4dvyDDA"
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
