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
    "64mxkm62kd6qx5nfRCoDX8KuDgyR6HR86VGAK3QyNA2AWaZywNbaXiu4THoJni6azv3pvPttDe8tSZCutemJ6z8Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AQwn8ZuZYgJ4WcTbtk9eeP7oNzPTpMzKb2HJYosVVoe5nutxDaZYA2whNsKoUoawTpcB3esTrykJkcLN6xiCM2T",
  "key1": "4Ceo5FmqaXZaNAMiHJZjBR4ZBH9bqsBZBbJX6rLhZXncAhn1NEjNoiw4CEg1FkJcLr2AaEER245zi4Xo6B2tWHL6",
  "key2": "4LUjs7UEqiwYayUhNvLyPZRER9J2ZPB3VvKCjzguU26GcBPkUsbau76v8duRAa5CTnLZeRA3HGpx6eqaeoyxz24n",
  "key3": "2h5btPi812ctPP3tF49yxDu3b2vHkENKAdrs9NkuMMnmsDXoVQE6Nc5YchVeWgyrxzdj2KA3ZYfGqYJ6d1EgZRrZ",
  "key4": "5Au8XuwyJdZxjDJQaPyhXNXVrf9Hsu8LtTFpdLd1oxMMqG94yu7QumLMwHeW2c3KooEkajrrm67Ddx7BFnQcqfcT",
  "key5": "qLn5Mu7JEGVMKVNf2RfknPDtF9gHE9juhhr2HkZq2DzZogTnH9jJTciKFtCakmVw8Yg56jxNCoFTiXT1Dp9qyzr",
  "key6": "677RiF316NDrDmZrDJwnX96AuL3ACpQe9u8mUyedhqn7JGmmL36FyZXa5YxG3n76avvxdu4HivCnGGrNu1ymqP5N",
  "key7": "2Pvm6PhNsW1PgeFiFTC7Gz84ZWosKYpzbQb9VzBngFKLp8e58Po6EtyG5aSBh371aTduQkQXqgAiMJA4yBRouM5U",
  "key8": "5FKNACPPYBykS845HuT6nENaYJzbs6mzFGQAjw4BWwPkbwZgdjhpUSSwzeZBwwZeUvpvAqGCQtznNZh9vPx7VARf",
  "key9": "eFzoZPfybBhejtMv5Vee34QHGHUGW18Vcg6RLmFuVD4TFBh8xr5Pt5LkzfRZyYdjGzDGFZycMvykAoR1utywuK5",
  "key10": "3Rfw1YFN8Ap67pjei8zm6sQTj2nhxpqjkatg7eZZh9zGJZeKYUPHGBk11x7gxUth3PnoWZjrSXF1wmJ1yqrwhqCF",
  "key11": "63sG6ZgR384Pjd1XXEr32n3LBUG4VCi7nbxNkL2yHYVERCUfDvvwS6m7bdq44CP94vbHJyCpJ6ooTKaJ9KGKendw",
  "key12": "3doqDfXSLqU98LcXs2T6o5yJ8rNvUkMWb5A99o8p7xBGTLQMnusHFkJTaJzWH3XA45CjgAgnYo7JLnYXW2qQcZEZ",
  "key13": "B919Pk4cS74pXentWdX23mtqUvUsV5NHtingwupGJoASRprihVNAasSvCR5MkMTb9Xi2aLpjGF2zbbZUEjmGV85",
  "key14": "35UFgbdN9kg3hzAnvhiNrvuMtRdcKt1ezydeoEY17hCkJYEeA8b7c48QuJEEmkLh5osGV4cBzNkugUSRvVbhYd5F",
  "key15": "44kG63A8zGLKUB5nKYQM3ubBoXkGPdiN1b9uD8QdXTV4xbzq7vh1zX1nQ8ncHLELmRLVG6oU6fHBXLub42Wi6rBA",
  "key16": "2SGmzLQKRwJfXTsU7J3oLxNJvtqngoVhVPaw5jAYeuML3twNmzgRKLq2YadpKRXgSATji2K1Rqjykk4iQzqTQwJw",
  "key17": "4DumrZkLyde6XaY5hbRC3AKsrx7AJStFCMSn52ZgKUy7mMqn8wawKTUuF7o4wYaFuoXuGUvudW97vGgDgp42S4zq",
  "key18": "28iQFXVPh3RPS4bY7b2eiqt7CYJ4w9MFRjtTQgtcUEcJbvpAseDShHyFSEx4b3MMHVo1roZ3EHrAkFGBabuTaMAB",
  "key19": "4JXfRWDH36SctGeQ7cYVgeCB1a69R2hQa19dTYJzCkUaVTin5gdT9sG63DLZ8mDQJmoFoRNiU1ULZkFPXiehof5A",
  "key20": "3T8ndmDrto4g7k3QmJYLhMVWNME6Hh6uNPKF2rYa5NsdVBGjpPbP7V2xjiTGWcdzLQD417XUjwdHTACDg75mrr6x",
  "key21": "5Tq1VwvExSr83SWarjuskQHLhhSagcCPgrxMFa5kVyXVMKmm7Eait57V1mTXeM8o6V1FHrJFV4PbTVChGv6pfovW",
  "key22": "3a4UnRhhnCk9uCeg98Jj6uKvmQrZgHfQPF1mbKuHtps84JewHz1WfWgKrLL6DjmfkR3mwvWBynUKZ9wSe2EWAnjY",
  "key23": "4hqmHDoyVK2oPQ1qdxDJWvuH4QFvogbv24tBqzdpy1PWAu5YzGLHdLW5Z1bRE82YuogDtkwLubDsANDnF5cxZTrt",
  "key24": "2vYN5Dcm4xSEt7wXhkPCi5GMA1S1xZDmhq3D4XcgKwjCqA8av4ZZ6gqVrhdC5HwJtgPhjsmjgCyVBz3oNpKuxAm5",
  "key25": "5UCeEYXqL2dEXxxF9beffU71UcCmuKA5a71VG21LpRE2JocGyowiifM3QFfvZHnqBZhyTHNyfUetQYALYdb3YTR5",
  "key26": "263swtFfdAjJv5XA3oSVJQmgCNnzj9Vu7GbXBGzTpCATjojvdVuL14nXUs8DxX2mUok8SKYZAJ4k3eWjyNaPYDxv",
  "key27": "5Dwx2Veyt2He8dr4jmbZqzHStpBSDUZomg7qzAbZPQmNBM5pMaUa5Zwh5HFGmh4zbw9vGoihshiRwGNGoCywSoWn",
  "key28": "5j8NrdNhqHqbFyf5gApfNFiLbJZB8LEsiUufkW7H8odxVYnWPkxnYaaZw7jD1ZQfdSWpevHawNQu2m2ByRUHTh26",
  "key29": "3WGHW81fgBFAAzTBhwq2jGzkpBHL4XdvzDsLpya5xhvN4XDA2v9QUPASnw4mX3jwJdRfhrEm5bq5yNy6SqmPskT4",
  "key30": "xEEqracZ6j5EVZRaRALnN8WdyRcypM1D4gfobekjRxpG2ym5WQM5yvUcRYCMpZZEe8D3VpnNbccFefRC4PNJRSV",
  "key31": "4jrj1STd2ygfxdc121EXPMra9g2vTdj9AyopYQj8Ah7gPboDxbmKTpxrVmk2A9W8QHGJVHUphkjnxzafodHpBE2u",
  "key32": "3DD2bS9oFvnFcPTP5ActoveWroXc3mezXM3rBbeMYMhviF2DQCbEHLmU1Gkigw5W5FUV9851RyzcxVyHPMbQPGrj",
  "key33": "3CZuFTiSg48wEtuVyn5JhcN8Gob3651nNhwQeEKWdf1oPcnCWZ3bcZ8AnzSyd8riZ5ttZaepj6zepkZVFhRKQaR6",
  "key34": "5bhEKki5qCX7HmJKBztPHcEUQG1BvJxQ2SCt4w7yLGmCyRXvDW4djZiLnsLkBXWcaeLeAuf8gPzybneQQRBX5pT9"
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
