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
    "5Ht5hb8RWTtnLyLAqy5dNTYijVpfmcWj42DouKeDULnPPPHYdN7r5eyS6RcZ7ViERbfh9bYE7NQjAyaHZ6WLtfdJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "227mXygS5r74bUXiwgPbPefb2QTP42UkMNCSNPEFYwMfBRuwxBzgh87ud8HhbR1EZVcFgEdDeK2T5vkMptMucGUy",
  "key1": "31PaTPQmaWJYWV4UbrHBdTrNAkMxmMc14tDPUQpr5JwnGuBGUGWvoUPAWZGdfF1a4idNDuDKCPTULmo53PXHWunG",
  "key2": "29T2esMbUCUGVzYw4oiZpqkQTTMkg9eXp9r328nzdvA6iWHxph7fpum6Fdo4wBd5rd9G7MY9xvA73Ki4KEK4qnfz",
  "key3": "28PVEKWAAym2SmTRVhTuZYfd7Mvz5WuAf4BnWXxCDJqvn5TzEJVa3MadkUn6CcXXsHhedR2iNMsybueixiFm6gZh",
  "key4": "3Rv5QnkkM9VDYdkSuBnRY2uVzn2vpT99PskSSZTyaU9ZFWSCiMisxg4vVBX1cZa2sd25AZZNsRgaNqqXxP89UPGy",
  "key5": "4S6tQCocQ1EuwoEo5MJ8jLa1NwpdZdjjaTFbsTqxJtkAHFgFfWKwNWsyB1r5QhLBsscFXoZdLYANoW4EJTLVu6aJ",
  "key6": "5v9j5Awx8q7vtbPR9DebDrhG4wriX4vfZ8gbRDKkv3Q83mvi6MpFqngPR9S9qGeZB6jEfoawPg13CuiKXTaLUYWD",
  "key7": "3Fz95VvKEA7cj7UjYhD9sSnmwpisYzTtqo9QQEMXE9aDxbb9zKWtkhNmupwhCUxGXAnPGnU5RqiJn5m7kXhn1i6w",
  "key8": "2pCN3ZYNqbyrK2ahKAsJo2izYPStpsT6gA6xYe5P6tCPgUcpahfEBjC6mSu5ZgZdzAG9F8LJSMCRhSy5Pp2k65Ye",
  "key9": "5GsZecTpJAE93f3TdQmXieUYvuT6MKp6FCPUVZsUDZK7ngqesagFjwdcHNPEHGMJqZBw6ni3322jjQAwKtpJdmCu",
  "key10": "5ynKVujrLHBh9BN3oPscm9K5hSKHPtCJzwPHXFU9fbKugJBi47pwK78sLU27QHmdmKLr6A7NFFWWedQYprixfA28",
  "key11": "4Wt7Tkdysk3w3DRYn89oLwUmwt3F9cgrMgseb743F7MpZiGgaiNdaBvLCZwpgD5LmpskEMhJqtt1V5J2EQ9igsEV",
  "key12": "3CDQdkdXtV3QuTfo5DGoW8nGbDTHHqv4fXshHpPiBg4aMhKV1bRNfY65VykrksQMRFgxJMVTwvTwjohjYYvwJ9Wv",
  "key13": "4uKrPgDFhuLcaDEq5DJf63Gu92QdDwCcqP5ox8TazdVtrXZMnLUpWxpKxVkHTtXcsALUiAS9Ef2a92Ffapp3RAkj",
  "key14": "4zuYZHvGXKT9LGcjUfqG68PGM3WLUa3BW3uf1cmBYVBPMFXTxXhmFzUnVQcGVwGnESQeoshXR75qZMoVNpTjPRKw",
  "key15": "5pfL58Lsa8JkNWugnX4DwkJyGiAJDwY4tdcMUkPwtSqzYXs9rcr9nqs6EtcqSVJ3StgzvaBkvhmdcEtupd9EVU9k",
  "key16": "woYhQQ1Zz58ayXGtCXEdrNYRKzikRuvSd1cBmvVG5k5ywWt3mZYr15yw2AG5YcQGgP6EhM45FeKdxbJg5rt93Ze",
  "key17": "4JZmRf6zAnDDwsn16FgyBTh7G99wSZcMZ6vSAAyvP2SjL5NK7F5nLNSRoyAvWC2HvB4GnFQZFsvs5Q3YAzaJCNWg",
  "key18": "5ckmcP9yRMdhXCcY4ix81sLztCSAd6tAg4rdcX5idPMSdmP86Rb1PYWsbooJ3boCfFkRSumreToqFteifqBApeT1",
  "key19": "4gFQoSMR445UwHRiYLzArhHZgcXRwqqfPN5re4wVuvpCVFZcZuJJChM3Drz9KJHheYgVhwNi4atmteE8ARaSqS85",
  "key20": "2STb6JLqQQLLddhEGjxBzHfA4csX1JfNm2Wi1MemGN8ARhxE3g6TWvsjTbtpbDbzCGQYurQW3UP7CZdjpwYJngCA",
  "key21": "5D3t555G6H6tpUvTW9V4gjnxw9NjV7d2WzhzNBGXK9dHEVQPvUZvys8vwwN1CoBhXCNobGangShpr29YydxWydQD",
  "key22": "3fkD6eqizBjxWpcCXuvMav521GKA7GAeLup97Qp2cQND6THRJyoXSMxVXyz39uHCMJaH3dAAoX5wAWW2BZaq8Tuo",
  "key23": "Z8eCTuQuvqSjXPwAf3YESA9AU6tcbFkMbgyCcMrDpTcTAwGGyS46b49xSnDg1eREVw6rDmS24h3sHhp2PPaPoem",
  "key24": "5cptNNKiwyyCGVfmfDbqqZvFuooSAsWM9tn2KuyccNuYp3f7rr7Ega2TNojR2rCqrzayzgnWgtsqRWHoT2wnG6kn",
  "key25": "2JadiR3harmq6q8eKtyfKS3vS3PR83B6LtXjBQFfU33ffSS84iDWe85sMSnePgQiCnKSpw1QTJysXPYmh5bX7oxa",
  "key26": "5MH9bffiDMxJcKMgDCF2KyBHFbFdoGmJ7JyeX4Rd9D7Dz2BpTaLdNeY3ujd98Jw4fkCPPi9PoHfC7nuPDshKGTK7",
  "key27": "6h85FYSihb9XXvGNTJ1bAFYM3DitkFpoCpwRc93SsbbqCDJ9kv64724EQ3HKVYcy4bWLfCdqihPz8fJZ78dptu3",
  "key28": "4aV5BcyfUiGRKnu6hdj5j5mriVBcD13rD1qs52FA1xTeDwZBbPwQ9tpxD994LEdYU1YtERamnMauFEes4wamGnyD",
  "key29": "5rXkubw3EzkP7HSH1a4y1e7JHtpP6B8tYvb6UsqFX7edP5Sw6cMhdLcgVVhqbFeRbTtp84Wi3QMSt3N6bzLtXkrJ",
  "key30": "8x2J3FV7nwh63A5a7MwsFX9ddeag8q3mYb4FM9Sffk9sTf9uocCm6Fn64Vwo13uN2vZzKdMANHPubws3d4ZG2Gw",
  "key31": "5kzSZPHaQ8RHv5Yq7RQ3yujbvmXCLkHbGjLikapZqFaVRxHhnhPDtTRag9PgLCath2W7Fx5arUohsdYdYvBujjwM",
  "key32": "5CmRGDPW6BR1K4hfxMYyoRcoVBfJfERzAHRCjdgdkh1A3mPZr5W6FYkDo17riUMR2gjPjkGkCJqhpKgpDD5VnmXB",
  "key33": "UTqdrkcbodoGcchEMNfpxh6393AiZc3jvmiABt9CXo38b7zcNQ7ZzzXTnwjaMkYFk9yp5gmaGY2FS9c4WfMhwYJ",
  "key34": "2t4u5gGxVs7e96xkMSM5ky4W8jSVeDhAFWLifXBMEKvx987XMsrez92tGWcJytNd7MEGqckay8KRnBArZ5itGKno",
  "key35": "5iMnXFKCPNxeFynq1cAZt7hmqDo9SzjQMs2ij1EAGsSpwaDPYsk2vAGfFufQEdHviuZCS8QSeQV7eRbafwP4pPBa",
  "key36": "2oASq78JJRCwG3fcrfrqaEYjUatxPbrfkceqCboidxk9JPpGXshCWW445tsNiNax7ZDfMxuPcxYnDpH5kNvNHrhc",
  "key37": "54xHRDvHQUX1ayxupts5mkKZWr1Q4LE8voKmnXtB5SVSwxgZ3jiprkDbdnC5YjTLBC676zk4wwW519kU6mvAefUg",
  "key38": "TfWDU9i8PJv3ZLvokne7a1WvutMGbrTghJTMGh8ftxiaj8QvoUGL82pprWjt5rp3wVLGLfgsr55Nt3X4x5rBe51",
  "key39": "4SuBTVwNXUByv4cUgBHccUPtjXFQizPeuvKa6LSVAeKfNbB6QQnniQzYtN6epgtPCidZ3P7KqyTyr5gG15wj5aF3",
  "key40": "4rHUwu6F4rA4VW3NcFvTWfgPwuPFVbLRgo2gquqn6DQ3p5LqJmzdMsiQtUjgKCQUyjLG9H55L3BmzHaxNNrAkUvk",
  "key41": "51EisVLdEEumf5pNdd1ZGggZhpr1xReZjBXzmUz71qmun63Ck9QGoccv8HBGLhroNM7crBxxiVCYWZTCdcV9hni5",
  "key42": "4ZA6rjHMEConJnDJaYD7mWpQEsHXwgkin7BDDqQstKRivdZJqRs76C66RJBoGEuyFxCFMgim99DgjNqNrg1UxscL",
  "key43": "3XonMfvGa4ppfceWW613Bo8TjTrke2BvtLsvgmBDNBcG2u8annbjuCrs5HyggPQNvgoUS39GtjwZSYuwDebpXPwm",
  "key44": "4Tmc5Gbb4mgPfo6w8ih837tmohzeH8ZkLFFXy9QMoJkrw7xNDn2LydjpLrBvm4wWtqMMaz9mmKhc6QULwv896FXY"
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
