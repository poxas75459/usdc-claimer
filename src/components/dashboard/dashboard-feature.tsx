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
    "2hnY46DDsjD7VN7XTX6VD4X89M2KmbdXwCANoWrXYjwNnRY8NtNcWLAwCRuxGaTVHK9kuncY8NyE3dd2Ahhcfa61"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "557ngwRiG4Qj7r189o9GMs83QSL5xLFrNBwmJ1AkYg8BLHXszxoJBVC8XapaQuxg6sRVxUDsHEb79sDtS7pqKsRy",
  "key1": "33HAVXtuHTeYDTZS1RNTC2oTEpp4g7ATcPF6XAJ9uS1EJRkGp3YqaJUy1nn9knfSFrwfoY5oppCLvBYnw6j5UReb",
  "key2": "3rj3aVwsWWQfZdD3E3aqrJfZDAFW3sQpE3mWF1FfFH449w8z5XadrWiTWsVbMWSWGQcNGhSCpPQrvTxJ4b7nKoMa",
  "key3": "Zpp6oLEtweJkrkGqub7jiEpmDybetSuNzL3AgQZ2ew9shhM6BZqqLugaY1z5tmkwcqc1xNEfbkdPa4GTogpzcgi",
  "key4": "N9Y3JfbktvuNkw6EYcMnNNGSjAqjhZRtXfErSzLUzMvzoGtAz1VMRftyNLBMQr1Jkf5iFBpUjRPkJ1MzkALC77G",
  "key5": "2iL9ASfmAtGotevUTFAGMj4y1trZ487CJgnUSQpB9tB755mo5wrJz3qgG3vW29oGWTd5cXEDxmqDMMt1iB5FCmpg",
  "key6": "VJkkqX9m2hJXeZUJyYubeGYC4SAYLzY8MuWhH4qM4pGf5CkRYkAJiyLXSbQWyLNQGYtGoooCmuchGm9Za91F4sA",
  "key7": "2pcDwfRz7MUhVjMbM6fE48hRapSTdzBsHpaMpAEo92SMoTTsrhAAe2B73J2ZYop2tSXmKPc83dQLDxiUxPDATWQd",
  "key8": "51ZinQLuuiVMYnBj7RhjycT4zfet8VUUB3xBRhWJrQh3XgeHpnzS5hzSqQgipyeAWgtcw3FvJPU3guKiLEjNPyGh",
  "key9": "4ZXPokeJxycPUDDLmaMNTPHwNQWgYUYNmN3LtJ7Vuta7a9TcVPiugKvpR7YU2yTF6RVu4s6zLnULSiqSDMb5Z64Q",
  "key10": "3BzWKYmxh82DitkcRJLPuJp1iM9kZZzvYa7R6f6HWqBBvRSZaqA8Ad2ny8o7UKSoz5xXcEMoPmjD1KEppTYgFaCF",
  "key11": "3qvTJd4N16itnSxDVMFLzvpv5a3Qksbg6Jhh34bC2c7PR16uFAvJRRzzLt5qrsXsuKKofHJibhVi7Yqx2NM88zZj",
  "key12": "4zzb3biFtyLUFvJbfs2pkEV8t9ch28njG4K2fSK1Bi92bfdE4xk16zEpMDKMTqjKmRCGjsF1c9BYyyerbU1UVSs5",
  "key13": "33SLQhZ3t9QeoWYPQtgCkMMPRbkLamiCvxPg4zynxnTnRtnJDwogHZQoa5Fnkodo8TGag8AkhHhy6wsL9b8tmnzW",
  "key14": "4Lw9j5xASN1LPt6e5wdBvJX5bUFNvoJXVZyAPXNMec93n1Y4a7oDXHC8wiFAKh4Xwfrkun3THci3hyVemDxKcfFe",
  "key15": "2k7EXyFMEmdkZjbtKKwH2SLWtbBRrA8dVJNe1jdBdvfFeFoUbx4F5KH43xz8wYYqhUweQKPJNHniA7sWxM4MW34Y",
  "key16": "39npjdoe4baq6Kg3x1YJXCF4MYKuskiRSPrYEe3R2UNJ3YZEx78shZxRTxtAUa56R24GzjEekBNHaeTov2qFbME9",
  "key17": "37JQnHWFbd18NdcexZtzdbB8XuRo7zMASfshzD9jVUCDzwsf1KCvC22KaYY3hd3dQRUD3BjpJ7MQoiNRkdJjG4Zg",
  "key18": "5476yfApfStywLtM11kimXLSQPk5WvDuozN5yaBHzUx8GWU5AVGJh5Cxhm1vcSSKZL1mCb5ZTPQcnjFwopmS4MKz",
  "key19": "pQuEjahBFdm4zkRghtjp6xXb11bCzXPpys4z6wmV97juQC53ZsuLXwvyqX6fVJZQL28asd4uiA1MSSGCy1LuqHY",
  "key20": "3FCc792FDwLkf2RVsFsSRkSHPbmHRBgXnNUqBPnKUNiPxHH8uv2HoAEpKtSuexYcRkx3tsNPWTh84tEKpSSKvNm5",
  "key21": "3nGeDT7M3SonAUQWghihXca531yGZjuTMQupEmYHiZiHKgZBjnDf8EMHDcsSZM63b5k2fP749CjpfLg5DnJYVkr3",
  "key22": "4yJRhduLEnz3auch7guGaaxUGebZC5ZDKW4AyKFn7JT8rxJhwK3HLRydxM1QZCZYDLx9CFmxTcJmn16bj8WCcT3K",
  "key23": "2nH5NRueEmq2hGHvGZnUX2G5nVVSJLLKzeTu1B1DFXhtsBzM2va5kK8uenciCcHHaAxtvme7CmWBfJ3pB9bZ52W9",
  "key24": "2v6rCoA1f3VuaRY9n9U5xqD4V4sxyxWFSWzxEathAE61dEVhtr8vbnovPbjVEq8uchZMseGF8NYk7ERF7tf9gxD9",
  "key25": "3ASELBZ4oh8gAnycZPgcxXnZV8cXy1x9NLHkDtjdgVgTBFpanBDfS8V7dynA6fmkcseo2FDdhhqbQpQ9yhE1rDWc",
  "key26": "4HeXxB9YR9ovcwtfCn8i77jZ46J4TY6dWQud8KZBFbWhwTG4t9edt8xB7otE1AxSuREPnzVZv9QEDdd5JgfeAMDH",
  "key27": "5QeAS47PAdrDgkxHzyWpaXFLwdNR7TFF2bKrBMnD3B4nky3R5NTbZQGw2bttamL6tnaUQyMjk9qB6Nt6us5HEkGx",
  "key28": "5HGNra1UW39uztcJSbDTSJmiEaRaLwRJRCBrySuEFdpNr6XpMzcAonwJaBq9kKvf9LBvouH4RijJRQUv3c1jG5W5",
  "key29": "67hYixYsaXv9ouKC35F3gZjEiKpUqB3MiLyxRaiFSrvCv3LD4UUYwPEMZ1YZmWPx4rdVtt2wuoRDTHsy5okZNEKc",
  "key30": "5noa8uqWqCPhstNM7qWCKgD4oR9mDQ3tbzQAzaK7oNq8xjCbPi3KKeUPR7sgBdbeqWbe9obrLQgFzTviSWR1WZ3u",
  "key31": "4qJ4G2AsgXd61ZZVKAL9XCAM517hXd7SoXHm5fBeFYjAALjnCNuvJRm2bg9q7B8CEWt51DdsLno1xEJq49dMEV7N",
  "key32": "4wbQ2xCio1UTxYAtHg6epGkZAgz7j6EQ77TkdWefEZdJLidaVpNwiYT7numAfYuroZpTw3Di9jTApGREBEYyTkeL",
  "key33": "3mRANqvtWYNQYS4XZ6S7J3PuoGdXqaPA2QwRt48ub9j8gg1DrDKx8om9stZWWUij9tG5Mio2F642AX5aFQWEDkMr",
  "key34": "gLfJxkCtUiGAARce8N7tofZavnwiPTPFR5VV6hJ4iC57dUq1TZbZbkhhQ84zYhAUTJwqQAs4ad42w6ZYc7hdaZ5",
  "key35": "1VGSxJ7mtEme9PRPQcNZAD3i4qniu51CgPFavC912f3ARR2sztCynEY6BAAkBNrKU6spz3TmNCwZTCCpvuX5NNJ",
  "key36": "j783XJLma8StZXFn7K32H7w7nrBJ7PJGjCfUhfMGBQGEf14Wea3kh7AuwrDQRW9iucxq1i3xuGdr7vPERCkYXnn",
  "key37": "3r8TyGKtsGn7AHY7qYB1nCDau7KfzVYJbmAWwj47EoA5Bgqv3Lc31pzL1fNeGamHbEiZP2T13pynE5EfwqCoUXNT",
  "key38": "53cEcDcW3MCAnzoKwJ6sgZZ4J94dBy62P7AbXNSE67mrPU5N7L2n4qK4XfNH3G8iAPcyEw8bzDBGNAF7ecHsMkYb"
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
