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
    "4AtXuVUEzXFaGQZFUitUeLEdHYiyxPdDnVX7EnoxurYsdoWtcbKiqdQA3uV2qDA3hRDobgonkzyBBm9B5dh1trVB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DnHMQroxrwk7Da8gB8v8LsiJ3c3KPxGf3LNUktGve2ueN9Rd6FKnDmMBeZGvas65qDP1zKtJHM54RJHFRBMJJiP",
  "key1": "5gbhHuJJr2TLMsA6zvKxtWo8hkp8dEed7TfuJuWLkxuPL2dzbWPFZbXejANU2vqjY2wfVxJmYf3KX4iG6wrUJzLf",
  "key2": "2jvhfkKoTwQWrDzmJ7fDHbXxCQBmtYWdK89QTHqa7ANgnCumVgFD5e5ijagyVnRQ9QCvRzrGVNSvRhLRnf4kHze8",
  "key3": "5zhuyTZDXyJbT4LFrBCD4QzGcaqndXXWWKQCNN9M6AmSfztzeytfPmpjCC424wZt6YqAYgPTsbVMLHzfss5FMqwr",
  "key4": "5B9n9qsHnN5Xm2WGFzDCNZ1GYPU5ST8MjQbWBkTsjYxFFEXTVYRwgp9F1o6ZVBEs32anmsM8m6Jzfp6ajMhRBdZF",
  "key5": "45kVxztbXkxeoWWQSiosUVAKkGBHLecemwtSL6pmz4dBSVLEUWsmajhBEf4DEakGASmzBuFn29WERXQc95oK4cG1",
  "key6": "2f3L66pJMcpCsZfMZZ8U7XXXrdnrgQeJQYtrP1JuXYznU5BtHcrTqxmjJwvQTQntHVWefDJYq52CSuHqbr5eVBaB",
  "key7": "4To3VSC31D4Yi8aZufQrkL56hMCNnUFd9SPd7cZRhEGpyC3qW66uma5Zx2vAghg7ZDkbA7FRKrhkuMhBjaMNWcn9",
  "key8": "5Y7cFzTkH6ucmtHuWvaptHdqPZTujN4yMWDeaaCoEj7c5ttvWxdaLEdzVngABzdoUnMfbySthRvpk32XsWto6aTq",
  "key9": "4Y5n8zewvXvqXriTbKoPYGNmq7CGbVjt38yUUhagJ1wAnzPHzdDw6Xx2wKbUdoJPgtbrxz7N5xAzQDCJXdyAEqNk",
  "key10": "34hhYe57qVRm5kXk35dRQcfG5esdYC2aCVJ1bFNaQhJxgomZXwvGWqzMuffv1a2F4zCkNCQPcjvrwVXgARwwfAZf",
  "key11": "2v94NcoUShM5zpuY9PLtAHEBg6MxE8UbXBnYEgabKYsfz1j3wjRFcdtf9nV5nnsmuLpPmurQJPbK3icHSXhkiBP6",
  "key12": "2q2SMoS9zaamSsR9tkAut5BKptoyL9WPKWaFo2AiKtb6jzbR2PR9LGN9neQmds9ieJ1eEZRpWuTmdisrJpknF3UQ",
  "key13": "3UuiZbtSeH5zzHKZMC5iav9FoRMrXTYhusxAjMDP4Gt1xbbXX4qMiWnyXyaGkQXFkbzyFeMWvEBrpahPej63WBk9",
  "key14": "5evFD9HVHBzZYq1BA3cY52u6rhjLNEk2rNTKXdN9yKPX3KtrC8zXXLTJScegaBUHbXhaoYuQNV39BQMf92yTKR3r",
  "key15": "5JCCxQGU5MP944apqQwAKg86sAKKYsZPQ7xtzGyjZiHuckXWk4fVvgBdjzGAADAP9e4kuauiQbwsgkzcgszDCG78",
  "key16": "xmV63e7HdCWAgntkLCy9wWtHwDbeDqRFnaLptgVaosA1TzLKowXUzzce22iK6HwyLGoDF73rhbrGM3bBSkzin75",
  "key17": "2TD4LpFz3yaJVaAZDv2kCrYWkp4F7X8u5URCBUB19L6LKqzUNaLBE5LB1usPW99nTSX4mpnfHykhBy1Z56BCbAqs",
  "key18": "3DqG8uvkhip8fUH9PnyarZcRk9o35NHp451gQ7MznXF4D5X9QbdLPKdZPsiwV6sRoBSxG7re3UnJ61GJX5aVQSX1",
  "key19": "36BFHmd5Go6LxDtkCCzw7VDb5LgP6kLNVBG5LY6kvo72NE3E53ahptopVr2BsNZE913JV4zB5ACkHinAheNNApLA",
  "key20": "2gbD3Zyp7Xrh6uSnfbTxpQkw73W9F6FTtorLyKMDSEMbqP57gZDKHgJxjrR4NydSA1iEHuAkctFP5AoUGPP6JBne",
  "key21": "5npfxn5Hed3LeaEcrksVz7BGdq2xR2bziYZQnE9khrmAKxqe3Pwa2FAhq3DF6nJBHxXo48S3tDqRNW3ZGsrdDLyc",
  "key22": "2PdScx9PiZEMmrHTT5zTYgCGu1EYyxi3i3oMWC5588G2Gn1y3L9ao8DtwqZVQZKtGPohWHFmqFb9j3URLWT8PXN7",
  "key23": "46iHXoUmV2bhgg1UQ1XM67vjfM1LvASFQ4TkBBV1HxNGQqQfaTcnpAYdQuZDB5HScoBcYaqajTPhkNyZMKbthcVU",
  "key24": "4Dz8JF18H3VMuH38tMrYeNJpokeL8UrE1oure8zVmi6V4H6kGZFUJxcCvkzqt9bwmTYnJYrkdoTn1Gb3sCdSBeBC",
  "key25": "5TUK4XgFRtDiP8Vbmy7k6Mve8ZG9AfLDxDCzJEkhJUT7LqvQRkxFMK9CcwYwN7Dx9Qr468NwR6ZLCxsHAb2c3Hyy",
  "key26": "4wUYUmX7kHHFRD3KCkZyrwmF5wwYDbyp34mU5cDWTpYgm6qF7AXmjcakVF5fo6yhjemQ9pCvbmr3yH177oDxGtFi",
  "key27": "4qo3nyFsVC1SpozTYYkonkDYnbBjtSgN2uRvQyVRiCQfVti21yXLmheHN6gVSg4dZr7LvEKv8D1eXknC5BHJwA9i",
  "key28": "2253syy6RBxY5v6eEfVQyBdjR1hyiQ5Q3DnHB8rJbGAqXWcCpU1oJer5oPnrGQc6YeJ6bwMXFCVEsUiUMpy4gFKU",
  "key29": "5bqdojpFWthDgPf1ueadtzui71J4AAVihNnJopmjVek8o42p2HagbwkRQ1PavxxbM1eaHPQxZkgrkBKtStzz41ey",
  "key30": "iUSvBjbsgF1vgBdkPAMZz6ccW5URcNeDF5RRWXvTfnjZADt6FRHouQJ8iZorv3P8Px8gnHgLNqyxzAmm8g9z5wD",
  "key31": "2PVYsAoRvuJwGyBzSZhud764WWTdBfAu4CKKmaop1eMbAohMQVG37MDCQ6JhxzsvksrYFfGNXosKZtXmRRi6ndWV",
  "key32": "2CRKqJZzxnvrurSCoxros3eLMKLdhzEjy8Bus2kScv8K6as9Q1vGnHJXmUUCrWNH1R4Cn6yg677qSQywakUwyUMP",
  "key33": "5bB4fZubyG7wEjZkhaWrrmcER1fb4YtmTwTnwMkH6rBmgRLcLJakFxRTsGG5VuAXb5Kz97KMZCmRy3NUPFaxjkTJ",
  "key34": "5VzsZ1NbiCcdgRs7BtTQDP8bY8zBq82c4VuNNeom4LPJA4GTdxwuXqnwzhAXVkmFsqiGu8DmBFzCDJSiJuWNbFL3",
  "key35": "26MrKFxCQpZzaBPcCK4VxK4LRa3VWWy7vxuR469mT3KVswWoaz33PXe4He8tpURfqpLn48Ckn6ayERjahkPCJXn3",
  "key36": "2CSkvEQsSS9F2pnLRHw3U6DvxWYTqqMaN3dt6dG7dT5jvEPLXhGpL4VNhEVxopceb94QdsEhpHn795r8J4CdTGE1",
  "key37": "464ca7jwYp7bZPutJWvcvu4nsh49KKPjJicpsot8dXut9F14RAAN4GmJ1khgWUGfk2BX6MuZTkKx1RRD3zdHrMfH",
  "key38": "4TD14e4VPokEUPXChVSCF3Zk6rVSynzcHyeyXWoTKTYU63s1n2vKKFytJEb9ziiE8L3tN9VArpYUhU9NLcbmT8GJ",
  "key39": "CxqY63BB4pxFt4rACtmkwwipaVUpoawAKtL326LJsm8CKRGfcYhwvY1HdrexkyXszsUKXDNbGHQae16zL9ZkVa5",
  "key40": "2WVGw3owtPcurCr3iMxvQTUkdEZfawQqn1FG1sykYvrGEafPUciMxZuprV8hRDLBJ4esE2gCJ4hy9yhWYoPtAJ9u",
  "key41": "655rQfWYxbHU7ejiZix2TEFHUBLSppBdEv3i2LeCPUfF9HgmYfyTHEtH6kVoRjkdZMWHzWUGX45YKjRnv4J37nyb",
  "key42": "2bx3K4LG3SpsQggxuhjqgXXnw6FjCexLzdQTNX6NC2FQJBRv3ozrwgN63NCY6fehAZAt3Mz1GcLFez9s4BpKwJY4",
  "key43": "fnfrfP1yNTbV3iVCvDEgWjSLUcm11EnTEjUJgEs5BGY84vjfeJkWB7QCPh7yNiKR71Ds34N5arZj9U8HuU4DfQg",
  "key44": "2tnzw1wpnNta3xdLTbZS77fok6XkaRFhixKp9o9fnHiQL4dCCTzPY7ZJQ5ts66Jd2YC3kNzALPBvQ9P2eK6hAG12"
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
