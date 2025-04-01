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
    "5TrzP1XeG5rgxWFp3C68XDYmTtp4D5RpJE1A9PxXsiXY7G3nY8S9P84QVaGcn6omRMRqqKjTQiirN1HpjWCoyGSZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aZYjqPdwBEceTdmgVkaXWMrvSnhhNXBakpF1a2azHm77Kvsg3haYo79PomLWJ4fispkKRfuP2gs9vKjzGNBBunD",
  "key1": "2HF7Ca17oL8EFFzq4uVo8cTX2UWpsj2FnsqV1AUDwpYbb7MhFpZj3UnGBGATErKtzWsNCqyzuY1a9Pf3BExLAHfb",
  "key2": "4abfGncc8aEdyntmSj2wfJTMtBUdBcMRxiRhS2dXYTpyGSRL39gBu862DZo89VbxSWrZ9kXFjVdAzVVHSAtQ5vYM",
  "key3": "3YDEwCmNxD2ih1mkkoyKqKo3mBiWbAPDNYHWjah8NkEWw5Gz5qracAN817NAwa55L6oWU35g9tQEnBJwEVmTXikw",
  "key4": "FNJzPmkgixmpHBDgHnJCEzx1P8M38g91YvbBzG5EV7aDcfMk7hbeMyvgTNpKeyLK8B9iek1BeHuVufGPaQ4ALAc",
  "key5": "ELuS2JYQQjbryPF8H8SyFxvEU31ixxcyN3gBeT4RvDGH9tcvRVBYHpaqksaMj3cKwC5BVjzxMAzuVNVX9TtZSzx",
  "key6": "7pxpKQ6LMo34idge6NBnEL66duT3Xk6NqZms22N1KBVVQ1kYwGSL6T2CmG6Us7wLV5JnMqRfhw5igT2m96yBTNA",
  "key7": "3vsE8skPbBPiafLV5T56mbJAbPVSFWKkdfrPJSSyqNjFk2Cekud2ZJ2yQb5qctH54sUVvPMPBuUTdDkA1nuugFAs",
  "key8": "AqvDzC9mxi83zk9GB11js81QW1jVTXGidjoP9wBVxiSWXWWJiLRbH6e8qLZeFU214NrK3UGCiMF7s6wW6o4mpjp",
  "key9": "3pKdTGADa7BR55zPb7gxQztRjuXW6PicMCzunsE7zHGAovvXYhwi8ieiHpL5TToWANyGoUKcJgTQcrCjA2bkNccK",
  "key10": "3FkdCMWKmPrU3AWPZzKNkr6pFyB4gWAG4hYm8QAvUghEEanaMvJk1XBgmwbad7spun2mHxwb1xJ94c6EMRtvsku3",
  "key11": "NArAUWpMdzz6NGmrGmkgSSNB35B352ohBkmN23JTKhBKu5gggKZFdhDeLKxxNj2qzMtn98FTsk4bBNyaYxyw8Vt",
  "key12": "3CXahwkHjpAjzHykfcvkKn5D8zhiGgKuSgQ5YatX3bQZZejGawQiz9j33pBmB9RPoc8hcrTW7ks4bGxb83bJ8k5m",
  "key13": "4zUJ6gE6FMsyDEWLoptQM7EVdgpqEJQkaLRfvXZigC4UWaqV69NwwnNMU5CezemUKutw1wcxhJTvBinHGkGfKYat",
  "key14": "3ZCv64VGa1No6883zGiEJ928e4VVF61chtfgTAzoWzSiDUVQy18duSZDSR5yjm3Qrvf1cevy4yntLhE51js6twt8",
  "key15": "epAp9ARphUsNCik669oWJFnYJKiPkZg1vx7CEwQ2HLN5icUT5wmJM7hXw21e8Qtm6qieg6M1S5jfzsUsfK2sgdP",
  "key16": "2B7CTvgrdsY1nsgUCSvhYi6tRutnm4LDXAZXMzUxRQjhxxybruYR1SzNJT8G9sX4AWa8dFt8fVabbz22TEuGwJMw",
  "key17": "52z4ZHS56qiiBMuQ5soAu5M7K5uGVZZjhAR6ESnY3BwjgBwho7DCuKdh67FaYvajkox2ArXg6yEEPtm83SrFNqNg",
  "key18": "4w3MipopjCUFxmMCn2YYyspD3gqRuJiCqxPY3mY8mEyF5PGrhJbfDCcpQD2YDnD15EyrDd779MJsBebx4yoVJKZa",
  "key19": "3n1YSCS7JKKukViYLSkr6wFaGzUdzgsy2XEFrGQv5o5tyRQtWrizXszmAYay14dEXg2icry4L5eBEvoWS2y97vQ5",
  "key20": "GdkEkdjJPcbbVfqQJFGnL97UsYi5dySY5YhweRLxPUREM2Pc9prpoCBRwghr64ZVhaKYhD8VD4GbZApUjiAxGPX",
  "key21": "41hP2Y6SvfujaQdpmUEnDnG2nsw7CBm3hrQSKRUdqxjjfyak55PZWHbUJS73eHjLjvbGDY1jGPgW27z4ktAbaGGT",
  "key22": "372D7fyjn3yibHDWe7zHCo3NH1SekRZpr66a6kHgL5qiZsMSMEmKvSkWJaECx7agkj7hY3wyKJUJfG1tNji6MU4e",
  "key23": "3bqFHCbpu8dk7bZFVsyLrrv5HqRUynNWuwvx6t5S9yZruBzVRJuoFMno3Fk81csfC3i3K42FBtjLHCpVE7Q5VuJA",
  "key24": "4jNLaFNMjLxsqDB8PD5Msm11SkPgttYPHM1fwhKUFeMYmu5yAd726nJMgCaZTf7YFajV7LzDRJg2axXCkD4jSKDe",
  "key25": "385FxuiRjXAdDRTmYxiJWnRvE85M1vnvVSnCXbB6teKuzfx99LRjrQAVWy3U9gSXG6smvktaunrWqEgUzYmBTJvq",
  "key26": "53nW2K25J7orrXz1eqQPbBrYGSP2hbrYHr773byfFqityzJ3iSemcgR5NmTUhpCgzfkcYEpxwumDmyfVXXRL3KVF",
  "key27": "2bjyJD8dDaEkwDroXPZBgRAgzeCGU3XTkHcokJza49PdcagsXp1v5G1R9bg1sKJ8mzvJgCyA26gDrRj33SkBqrHN",
  "key28": "21hRki7hPjSfMuZXsmbFmyPK4JJBWQYMqY9ghdpt76Z96p52aCAwPzs8VhFYcA5jLqBd8PSdE5CmHRAMVPn6Kh3e",
  "key29": "3eMtNEFqHTAUBAh5NWgFASatK15j7uDnTGMyvpHL89yZUtxUiP6g5znH3aQ5zrWreYa7CYJVMjAPQtLWseqRy72Q",
  "key30": "3cfCo2jgqfAjUTYZra1SA4dWe9gk7EKPMhToFoseiTY23qR285qyJjJ7B1xq71dawPpKnzHaJPynsqz5KE1HHf4a",
  "key31": "4g2yj2f2ZaBhrKcDwu9tBXG1weEE1vdDmvuRqrkj3UTqwXqAbE2EkWJQEy53a3GZYobVHTD3hfFXS1cqMx42a64s",
  "key32": "3BS9ZRr34sQ4j8ZhC5LQdQqQHU7xVFZsw1eAxYssa93yNNgUBDCHBhNuvkwGV4Q4w6BaX46p16t7MAHjEM8sfKop",
  "key33": "3DcLbTGSBmxo8hjiGV3QmgE9exocQkMR1vwqyvsjqfgn7NmSrVfa1r1sSmykpuyHe63B1iP73oWzTw4fw3ijeLAx",
  "key34": "2Wsss9tXvy46vECE8UBf7nu9WLqTCu37MBb28P1aBsK3BDKzXG2ZNmhGGDuvSiLm1W9xZMKk9atFxx9aFyDQbCHk",
  "key35": "3qKLyD1qfFjcoqmmsU334Cig59VTXCEJVcUXoDb8aFY5TJUQgJqa29LvoQcxtAiv1TVCCo8sLehxW9exyf1p27Qp"
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
