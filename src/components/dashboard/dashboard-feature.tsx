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
    "2KodcXFPNdkoJzsXUru5zhUd8eTeUcJoWFLyA3YTuy734B2oTfnpLVYpvWhjVW7oBcHkjvFF9TPP41oLaz1MY5Uv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38hgGq9KzwrUymi1WgMhHJEuRMqQRhHiCaryzZvLZmEZvhJHvaF9frvkTTDhtWrWXPsnCmNnbqvBAwsVsHfvt2Hn",
  "key1": "54xbKVkQGPQhVYgETjXCMPin9jbCXa1hFsaJyZnjAg8ZgwgJtaXacejAtMJcXaeyy6jd124KUhU3iscPbWCuobCJ",
  "key2": "4oEirCTdeytTxDd97xcxvXbowpdE5A5xpayK5Hd9XDSh5tEmAQuwjFhXcmRLoW8i2QwMB8GE19krtosi4VqaauGG",
  "key3": "5u66PCHNGYWYy1zUH2qDeGNiUh2VTWzUP7UPj4aKu34SXufhjYnBYsHALRwsZ4dSw8hwixbQZ2Q3D2QwfLz3rviY",
  "key4": "TYoGBMtTpDKCqzkcn3bi6AmR9chDVsoKFLbesqCyk9JGwY1txFUxd1vCJqJbZKmnZJrDdfk8tLB2w53mHw8WXw7",
  "key5": "odCDixojqZ2HZfpyFgnUb8Y2MzPE49MNdVQHWxHXK486iuWyAexUZajd3MDXFbZ81jvgMLeGGWfWvTGNg8b1zvq",
  "key6": "4ynHEbaCLATpjmqm4zS5SEocrBbKX2GaAZeggLEVfyDKq1ChZ9sAgnnB5uqZ9SriAaqr51eqKQMR33qheEkTeLCr",
  "key7": "5NYqsFkLFqCyjMDEaJ2pSV1CKguVEK2X6D3jbF1avQW1GgeyGL6bFYxRXC7MTn6fErswesqbJjL7G98Sgs2wxWxp",
  "key8": "36vNJ7t23p4xaQbJdqWD7QxjoytFze6ZXzEeLaNnbmU48dQH8TmYoM1pRLfdY19gAkk5qh94NHTyzQ6UQ1dc7Lxg",
  "key9": "4fqcqL2iKsCCWjuG54ZwAXvaa2tSd6H4aosBBrhGGpDcaigkSPGBmV2kcSiRjKsfHGMB8fZuLQ4qQdnqFatnm29p",
  "key10": "2ivPV1Kt26h7VJMh8URaCQR1hj3dokg7Fsqs2FCpm22DvHEBLq7emvMiaqLatdfR8JNkJfNRUGYLunC65AZDL7Wo",
  "key11": "2kR3vjYDAfvmT1sod7MY4NESmrXfgY4PEUNbqcwUkyaoJEgoGXTPGSTdQPs7ayBndvhKYceWHbFSzCCMUKrZz11D",
  "key12": "34Nd4nGSL344cGufAJ8vp9wGCCatZEZfBC5yvUqpSnZBSGCqNfpc9tUBdBTfEyBaFdJ3FXRmFuYtRAurDVJH7kCZ",
  "key13": "55QLyyDgZqm4kNeYKDVHAVjRczessgvr45hYfRztSvDWzbX3vCDNjVQsRwUF6gsvqipX7vKVWF6bNHgR6qEYp1hY",
  "key14": "63AAvjWVs7nh9oEMZdn1yHZQmZLgi3wFVaAPhWv7u1uS616XQhgn78PnhyhnHNcKToEtbR6YnQbBwxgSY4EPAQNE",
  "key15": "cL2VsgCxxkGBijoE8XdMvnqq7KxUJPaRzGedeaFMNvLXH6b8ucCXdmK5ekGSgihoaKSKo65LNTzweryi76CbuwC",
  "key16": "4YaYiyZmC4WreBo4aQ91nmLGNb2pJsbNDEVMANfUw8XZmi6docXpBe6D5wtEc8dxStdSvviDD5vBXNEjMJwzZHdx",
  "key17": "2jA3MuQuPvpTQYfd5VYwRueocv6vu4cgFvrQoP7F5yABk7Hk8UdYtLLBAL5NAARbtTq9QX2kwyLZ7EVq7tLBeXd3",
  "key18": "5fFNBm1APahgPdQBHRV5Fpt9Jgf96yTFudtphGFD8jBe4ZGSvRwLAT2ojyMm3SG5TJDtk6TMGXemnyJhCiYvc9E9",
  "key19": "5DtW56wbiWAdfojiAgDdP2sk6jZJeQu76pKp7dtvggQT5Gp1zEXPHamtocVAXx5dhVMUCQMVDXdzvGzjCxeqz268",
  "key20": "2bi3gPKQBmZdkEmFJTGVJ6Lij4U1cfSzZXqCAAjwvw7tomTPCNKUPW5gc1nhvSMS8ngZgo8YdGraeEKa7mjsBUso",
  "key21": "37Rej1paYpEVJbBVYT68E82E5WhHFfoqGhBLCycaNK3ANMw5MudkNnpBEzGVAcdjNFUdLMbpVxgLPLVJyVuXvC2A",
  "key22": "MWS9BM1WbsUaZPYjp6hD3h2KA7u9X4tkpKy37nWwRAQevq6LBgKVsXGGpv7pc8SEtvekK3ga5MmWk6x7N2T914c",
  "key23": "8grLZvebfP6pjSnVevsM1j1V3zx1M4b8gZoV4q43syuSTiUamkXXYkRW51HdVzWvJUhw2cHxRzA2qozhKugratE",
  "key24": "4aGLYbm5cJ6jYBREKvresBAWXBPtUQR4b3MoPeK8CMTBQj3EGc9xKP76rJudwdv7jEPQNkB69LutpgcAKvnwDZXp",
  "key25": "4Lno7sAB5fAbLWomJohqPmdBnt6VRqCQJkCrQL14rhMRRC2BqT8ZLy3PALm16FkUyNFYfJSRoEMaz4NBnfwyt5DS",
  "key26": "5qcExJU2PCxLAcbcjvZCnYGWdYpWFHJYEhHoVu3KyFp9n3e2Xg2RzXLDyKV4GQ3z7C6ddKxGFuiw5gbFpkmsyVC9",
  "key27": "5WGLzyYMpQqCPTWjpj22BhLL6ftBZ39nFuuDABxpAigNwU34hju8xrE6bXdWz3irtV1g38bRuSFpwiHehAToooti",
  "key28": "FFbTAoXKcAodTyt6NzGdLesMyBSf367yupaQZ9RQuQKJM5ciYYBfrWKPpHBn2q4pjyUg3XUiBmqAk9HwV6e9RTk",
  "key29": "HXfuNqP8gZ3hX3iPiJQYKbfpBcUCoRNwTN6VMM56h1DwyQ237nhtcM83TcvRCqV8iP8NnzzuMoQBX8dWVv8f2QG",
  "key30": "4qfsckj5KBifsSFgcEskkeL2KjMv4L9QpeMJKTSYF2FC7NWrK3Qh52DJr259hCV1nLz188q9f3pERTRFheSGZA5V",
  "key31": "5A185G1T8gEzta75ERFxHPDVu29BjEXM34iiKD7mbbJ1FBaBJsjWLiccC5QxGWByCeWAN3XHYnNZn2mnE3ickVkp",
  "key32": "v5rLJfiuhPss8n6aekpngF91oFkaW8X41mrydWyYr1UrVLE42uHZgZiWcrU77zxHQoJSFXRgEn7AqKKkWUJsYZ6",
  "key33": "3eHdp9xGJZq2zECe4gQMZBgT1jRuTmz9HD8BYKMQPhJ1oM7bPYwahemB5ShvVAM7SbTu2J4PxsS5De3J7LNy2Jvz",
  "key34": "48Rto1ty8cig1EbyXuSP5cDMDypjDbJNBEKxvJCoeuvG6DR2nn9jbhhgHYToWzNHCcywHGGEoMawhNmVS8bWkbyv",
  "key35": "3BiW946C7dyAe1qq7ygQHarkGjRGtDTpQQcPaVu4xDBHY3W4aVas8Btup7KpayoZoQbU6cphAhW5bR8FrBz8YgpN",
  "key36": "5LsBFSnVx2fmKCwDyR42t9c6XGamsSTYz6sJ2Vji89H3iTRXmPtRu3hjdqN2X9Z9x5WPxzJCrvLRG9hkpnbVA8hH",
  "key37": "6MG8G4oDtRXtikeN2tEGiVNijNMxp7Xk4FGRJhQHfg87bgo88AEwJP3amkPNSJTg2ftjNexgdq11AQtJrLJzBRg",
  "key38": "B1GDBBj5KB2kzMpT7JE9kpah4CV4tznYwiZxKWGmX8rq1yaUPAMkbyDHJgRoVYP6fCfSwHnAZwXQV1Qe9G6PX4w",
  "key39": "4bPJHuxWwmo6cSZpQ6cwsZL875H7pXMFfUULrPF1up965ht5etgYcrxPCo7GV7WHygJ8mRH96YUnBVBHnMZ72WmM",
  "key40": "3RtZwRhs4eUHEmJ9tAGAm4LjxCoD5GTny6CCwEq57cx4ym9HesS7DC6oReB7geiPgUNpxMvA1PU64YSPzoe9SXNF",
  "key41": "3aqFoMi18pPX7DdoHxq8ArD5k7TBEnfiuCytywnZgfdxWxb1CkNJiNHb1v4H4y8hVXkWeWjw3eZ4QG7W3p2TvvcZ",
  "key42": "iUx5mM7edHVGdvEmwRfGJyhkAvNx8C2u6BLPRjuirNG7Rks83MtBmS9Vez1sxoVa2BpqqaEzXpS9eQERqAmbxTm",
  "key43": "3H3zXEjBpGaJcGbWL9NCpyWTV9pHWu9nywWUoruGbTedSVtyoDNbLQKLHzHw7zz937vdDeZDqwCVgaP8ek5N8RgH",
  "key44": "2cmYvffTmtrn4vGeX1Yv4u99K8k5YRS1NA9FGjqFPxKTA7Ew1eBw79JxjPjvxCmE8ahK2MEoHa6pEjfcN7G8QMZF",
  "key45": "7q23VN2vTNbcTTCJKNb7SGw3dS7JHnazhocUZ8zTcrXtRq9bacNBzHJBo8LJxYXag2Ugo9QdcyvtC9cma5Djkvg",
  "key46": "BXEmFqL1baQj2hM5URn7u5ASWAo2f2kNTDB2QX5wnN624jFeHuW9K2ne1jsczBD2oBw21SogwJUG7weeum3oGck",
  "key47": "4L2tuGEfsVPHMamA8rv82boeKk3HteFzEpX1WMRt7DiJDgKFkTJbWwABJDigvyW5HywihjtEFcjsWAwgYAPq6uP1",
  "key48": "3Q3yuxrreQy6bpseyBYYEW1JXpdgLabN2xaFK4dYGB6FRjQi49RV5p3vhBxZtyH2ZxABm8bndv4Bix5Uz4zrgY52"
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
