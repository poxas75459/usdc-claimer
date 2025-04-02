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
    "4HT4yhjhEActGx7bvU8Z5FYeUdyjhDV6UTYfjfaReQTN6CULpYCFZcEBRqVuckYBX58fwAAPcNXuN4Q2792iypNi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3N33udcn9stsycjTeAosZBUsEBwRozjG2cy4Z5NZF14hRz6xbYPM1kjueedjRukxXEx2fpmijvGSJ8DiPhkxpA8m",
  "key1": "472QQSvQ8Z35rncZyzZn7MgpuHpU2i6aSbRm1cqgY3dWLX8r1WpxmyVM6uh3xLvXkANbWw437aLPDuuCagFvBF8y",
  "key2": "5JiyWLfEaVGNaQZWbrXFTrcF2QpHHT7ubS4pihgE13sVTtpCJFRgc7yA2GEJm62KT6qnZeK1SjEMVyzXaD81w5vf",
  "key3": "3226B7cEgEfhCpvKWi3vAFqb2nm9hDbeX21VzZywsu3vD6Gy89qeaszDJazGvZUckzJeXFge5DycVx4Ho2ueuJHW",
  "key4": "29csxKRmkQy8fxeWn9wHgDw1vgh6oJDwhM5KXgVpMuR93ispzw8AqUwuhG6GLvgLufPb48MKfiupBC7qdaZhAwwx",
  "key5": "3Jx1DjKGHjBtqaoezqmdQ1owpJvCJVhKsQL8tG4YszzNDFA7kUKg3FJHDtNJdpFQAF6FgqLdoUvKzhKECNNh9Rta",
  "key6": "EhvnThynmD3Rtag4Fk477ZBqYJ8SkTV92BKFg9DZgiWiaqUkLm5ymEMcjPHkzwz35CJCd3r8AxtAiSxgZrf2H3x",
  "key7": "3f3SYZBAo2XXzGQW4qmQAicPwrAfVAbMr65eRHvR9yDE1GzKB4EYxkSdBp9qpn38DKNrzqqVn4h1teWhbw4gYnfn",
  "key8": "4cd4eK3U8q52TRy4xWyo9Rpg9acHsk1dTYhDKLBPaKTy9sRaGubiTcKbGbKTiaUKNrE7HMmaDEu24YF6KhAjP3P",
  "key9": "3t8VAGAAaB3iyjig3J6zBcyuN69TWcdmZzMGx1hKWCnmqnVYZmJm44By5DHcMujionfUTDqHAotZKSqFw2WxQa43",
  "key10": "5inyJCQHGRgSuiZWdeRSaAibMMSzDaNBtWXjfRTQXDbzVEx5bxm1YyXv6rfVYobEPX8A4bNqbWvpAfgqUrBLvy9i",
  "key11": "4YdhnJEUyk3Qn4XDvmvpTBABVGR2qsmK5WPEdqzwAsSUD8kSWaPA9TTrHwZZE5S7Dje6ve3KxVBJFEZL62G72UBW",
  "key12": "5sH5ycwYq7T3wJsBpQ5FMi7UocrAaHc3gzJ9ZSG6i4ZZhiChiWDReaW5YGRpbVn2d1PkVF3V6B3n8FMQhnbrisev",
  "key13": "R9yT79cvJEJkKbPwzFX9aRVQzzNPmsXHLm9iHbP1qPvwaJY8PoFVPsfdqEyq6iGEXKYBiVuWXcwoCKk28GNNoP3",
  "key14": "4dYZ4oyvy23NxV4BWxxfwsfr3yu8Vc9wv5LGNCtU8mrng6jaq2QkuGRRPgF9QpH26rMkYNKF66qPq5WrGREtzQZq",
  "key15": "2VxyNNrszeM1xoHutqvufTyXuH1ohP2o3rNv2aCCvYT9HcfDCFokKivxhkoMX38uhcMD4Fsw5SXk43a51GnBmw7o",
  "key16": "4T1cXKmfb9xjGhf1tRhyUuenJyzzc37KN2vuZFXrTy4qj7ioAs4kJ4fNC1V5JyRWYXcY6XemM1BipsQyP2uoFEXo",
  "key17": "wZZ3sijw5dY1x4R2VmwWQEVmUTbdyJJ8DkN7Mz1DpAxuQZmrg9dmixEwerjuYGyqvS47cBbcUF3BLcsxKstPqCn",
  "key18": "5NbELXPgJE5WdHpXK89BpNpJShvY1fjCvii8FhWctCYvgZ7AzoZaSaZfQtpKvojVFm4h6TGsRgyre9h5yAc2gkB1",
  "key19": "4uKD76wrp1H3G2YMq7ScXU6dWyCPpxG7xHCZEWWRUwQY9gePMjCk9ouaF1zpTTwbcLDXiN7uCfCCya8H4NH2NdxM",
  "key20": "4KG5vz655tUSjAUFhN5KrRKokVSxaGSDpBAvhf3v9yUpuunmjYyX87AVUVg2Y3jx8tQsoz6ySj3htFVc1PY5dYTu",
  "key21": "2EgSmchnGJGHQuRKX1qrbGjb8kg4QXWWaMNQQxftccM6Vr8pyXAxLBDX5VtWso2DS25qRUvvQ6E6VoEFN3t6LT62",
  "key22": "EGPAXTiUtfoXYrmAzp6pgusVwj36ogJmECg1WgG9LjkumcCXCLVi5rjb8kfH7GwFYHgLmMzifTZ6bTcqnhm9v78",
  "key23": "3hSmQCCAZkAZ5gbmbUNM67Diut1hfP14wvCPsHjEb9STcsYKcgHPETLxK8AGyrPQzTpXt71329qmFnopKGB218z3",
  "key24": "2DoqQZjkgEvfbakQ6udtLSF4gb9MMpQM14RMZo4dyzvv8SrjbKHvorvsFBhFsYdnUGgtdfm3xThBR5NmLkg3uy1b",
  "key25": "4Y8MTCqNgZ59PaaRidgT346obzvqBH4Qg8kksqyAPnWmXmkT45uzfjjYCvFmv27sofbLisbLjAGjjwArmEYbQE6S",
  "key26": "34pBjwyrrPqYx6m3c8USDp1SfNYwscNyPjZNmpahVUTFR6M1GdeguVYRVV4qxzA9KwdfCD2DShFyw1g6VDgSxYjr",
  "key27": "4KMr2KjtR9faHMMAjLs95NV3CTY38T77RTPU29PuJvedHszdvdK7KhSdwTL2wrmXfuuJcUeGjpQzLZfn6a1vF1Jq",
  "key28": "4UCJ8PSuzzAM7ehYqZWzsmdgpmhurHPti4fSVkt56vBDWVPGEMSH1jFn8QWwTyzoEis57MzqtyJ8oHqp9pFS6Xo",
  "key29": "2Bxh4t5D11TF8a5eGvSA1Wn3DR8jf6p4i1avFUtPSwXP1ipSwngkS8Qjvs2nJN66kqiq763V48XnNDzK9N5jtPoZ",
  "key30": "4JuVNiBGQo3Z9K2Bvi8JRrCzQuzMmZfAtF7PMaFxtVoTXRoWJiAj7M7NLNoahDAurRWFw2YJ2kGtq1EtDzKD5KgY"
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
