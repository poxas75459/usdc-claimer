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
    "3V3CkpnsZcmDCdNkQSVEFZf1DHUprtxbD8yndEYxZMrSth8o28qZT7rZCdwdGfsnbN39JUeb2aKShmDdoazh8sZN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eB9bGaYJA17kwpmJV2KziPGP4S5zvpp55Komha1YZsHXa7w9enLZJE6VwuBNTkd9zfc77NCGP3yHdE7qKTv7vaC",
  "key1": "78MvEjtHiQ6MQzrg3fGbRNYXUYaJEDXmUzccMTFpWhyTjNqZLaeSNJTdUkDm3Ykq7PiuWShmcKBHs35YaC2U81M",
  "key2": "2YaqtmR61SowE2i6eu2MCn2Zxv9Gmeby777Pyi43hyrBMnbYGJpBdoSPxNK92xqVvxisorkAHpmxCQt1t8QDtkqG",
  "key3": "39nVzLmisMsGx6k8jnUZqhbBqFujVR3SGQ5d8XiSwitZoQesRKDab98SEi9mM4qoyFecwVqLP4ees2v9ubkty7W3",
  "key4": "2aBqZbmgHKpaPTmxbRkP9GT1JL7B4XNpLAQup7ybTgH8beprcLuA1VMPGbL7wEFxb18xBgWXBuw5n6uSYrVUngCw",
  "key5": "5JKP6Vn7NXCTJcXFjL2oKqwvbnMp93tUr23RCJRECqzdWwHjBfGacLCD3MfwxzFEBJY5GoCC1prtTy4fzpQjKQG8",
  "key6": "4Y5whpZcJ8h8aoon71mDgVLx4QoMKCS7edGtKoXManMG3CcHodRwL4sc2xJGeCXmUyjMedje8MpNr532SKDDu4Ho",
  "key7": "aUFMVqa7UmTY11pAu7opTgmyuYjLprQ27YMmr9WYskUd3AMccdE3sF8oEVehAmusz9Y5qojxVLoV4M68yw94cFM",
  "key8": "3wTZgUbqgoJCxB4bEy3yJrCMTZLcw4u9QEvaaha9cZ1Vxaqk6o975f5C5G1YBF8h38qs8WqaTvXcsTdNvxyKxt3R",
  "key9": "3jzw4moLgqQmhTBq6Jf4q7k3QdEWxnvu65sEbwTQ7PEjWRuVRHHiFYuP6Hz4Hhdj4v9cQRBPpU1aoNUDwWpNcE46",
  "key10": "gfXHub51oimeZ6CbywERyUFhszNJDY6EeF1xvugmXD1geFU6fDANhTodSNmqrodmwWL7TtrbNAbZKZ7t4BPqdCP",
  "key11": "25JhM3UovUorc99TxwjSd9a8MGeLGgdi5KpjMgpFbvDbQtjrLmkYUq1Hiae5AskyLYRBLTmGQSHJR2RVbFyNkkph",
  "key12": "4UdfB8MovsMMarMNtcs9GPmrG9mK267rpgCvZ1fsUJ2FRvufTVtcwsuQCci7EZiederbJL4G8dv5W95BkUxZAUrN",
  "key13": "5bJnj8NRAjfKBzwWj3MJG5dfmLBAbDQfKiZH8RjCs15W6jAjznKpB9Fi3LR5FQaPLipaELAre7xk7ECderAcLSKK",
  "key14": "2nUx2gZoULktUE9QGgj5uCPRP7gJEGJsnbiwSqASfMi8S4hYAHSmLQNci48pDdAF7Gup9eWVJjyUYymoiBkknX7h",
  "key15": "5FH7pAAaw7NeqJB7S9VqxwuER3WvE76cPMCPcGGNiuibSHmyBRY1urr4PwRs8jL46ZfEzUdiQPWdV25N6m9xpMS7",
  "key16": "5SbKBcjef5AvNwAyax6KJVQ623XTvyqo7PPvxcwNy9cKS7QP2wBZqSQJBv2mym32NSeyWot9Rqg1hkA9imUpHaT4",
  "key17": "34RnFAKD4TaAt51J1KyRG7AVTBaSc1DbLjX96zWo1CpVUCTr2XafeoETbgX5yMzPodszYhsRQL8ApL4Co7ufKuW",
  "key18": "65R8mBgmJbPeLvr5gPsozU99V2x5aTBhqeQDzEpqABUc6tRx4HT7XFgNrTPt79uFvM15YViPe2VgqiSUEAJY55pm",
  "key19": "41sgQDMYGrcnHYuufD3bpndKXe1dKBvQKctdeWdvTHxWVGW29cyXxH9o5nt6E2PRx5rdVz2HUmvYSoaZ5j4nYo7g",
  "key20": "5aTMyC6rcBxufL14pXu9gbdyNJm3vFhCcwWN5ZD5RSdhmWVGNDVuh9NiYCpRYJn6UgW5qVqHzVx1t98sgA62kDaM",
  "key21": "2afg5sneqvJRocGnAg9S4JK25E6PU2BcGt296xg52NLe1Hwabkc58tUomNUB4wxkJ42LUSaomeciqbFai2s1sp5A",
  "key22": "5mWVkzvVCNctbRpBCfspc41gDDEiiSt9rSsQP83ogBD21wVgfGyZ4HyvQCGwa5bnkgESJJdnRLGLvsT4ZhpNcKqY",
  "key23": "qRCHHGttxWeNjK1cZ7XnyD6RpgLP3Uj6GKmdgwkvh59CS41VGDFrCZfeTrmEr5SPQWT4gG2Uc3KUB9V6gkMRVvm",
  "key24": "otAhZdo2EzdtWX8HLuWzd6DPkYWnpQohK6uqupJkrsvSDxhqUuguyJNHVxjhEFzxWE34vrJv1PCtWdVDbW1ExX5",
  "key25": "2EQuLd19PLYc9EkxoioWJr34nP58E6VNjD6cUsa1YV6TxNo8hwSKgP7RPKm4EqJdBkaVdVDbYvxNzKeu9jCShgRD",
  "key26": "2ZKexKm3669y2kK8u3WeZCr7qSRydRknbwHRkcBqK3tLRGT1Nvhbdf775FpV6rTW9jfqkJVAMMH65WJjP5aujdpU",
  "key27": "33fja5NzYgDKaQxQrFUjGz8pg3LqgnSdq4e2HgJBDgbtzwajjgN84PWdYekwa33Z8qas94SSJNWDaQWLxCh29uVF",
  "key28": "3a1fzdHPthEzj23v8jfZBzCgjGQbEP9smLZ5KQysgqjooHUSC9M8Wdp4QH1gXo3wynN36KThMQ1fsFfcHggJXAz7",
  "key29": "2Aimf116sqVYEVnFA9FaDgNchDxvsmdqd5mByJuScPXw2HaeeRH3bLFf25k5DT9hcGX1zRFS2UQanJ6DUqWEP9x",
  "key30": "4AaEMzXfjoAaqTUKpCwvGHMLUVhhDyESs7ycuUEWGoPxwGNbUaZ4GeUXR4Ue6Z7XpPbaedKxaKm2mVSWXSjH34wL",
  "key31": "3FbntXh9tpf7TD9otbm52HgsfKqNjz5HRooc5t6QNnZ5izC4xan6NAA4t4PBy8Ab64DZ5gwh3UAAYFBZepDRzbGZ",
  "key32": "3WJKC1Sq4srj1gt84rrpMkHFbBNKLP3ymvpQbJD878svnNnyRgwbsuLnWypPe82gApECE5U2isjfEdDyQKmkmguT",
  "key33": "4GMxFfvRJHDeNPTfayKi35wAvtMezUHkT9bp1RAT9xyDeTQdjt2cTWA7LoJTJhtApzCf6JQVPnwRLtk1NYwsciug",
  "key34": "5R3kmtDLMYKnoR5fqeCPWwGZzLQ8mgJN25Qx7WmgaayS2vb1nQp67bV4VsEUYjoXZvSFoZPoFe2462QEVzwvxctt",
  "key35": "2AzU6xKWEkbeLALUisGixp5xer5b5Xd5cF1GX1bBoGyqPsKUhBkGAt9rCZE9ZMadeCnsxhWbriqF8ySGncxrZCgc",
  "key36": "4EjfFy3nSzzjgvQXc7G7GmCku3Ejz4XQA8oYBNJLPwbjHamy7fiNpvzonbkWZjXKsLnfySDFsAtFLy2UvzJdQ4ys",
  "key37": "4PwNXeXd39ibx7jYhkR2hjJRpBjjUZ6vrZmPtTxTX3hnJ8wH1kMvZRE6iYgmSkcdvPR1jopMzVSfsFSt61pJzUNJ",
  "key38": "4qnVMBodWr4WVtHP7uL9tEGecfX7jepGtLGHwq6Vmpt5RAv16HrVsLZSUmUY5TUFqYoVhRUrEnBegpmShTUfs2EJ",
  "key39": "4J1nnNWLAEQLx6YnKaspJy6rno4JSfMkRgJ8yG8VTrk7YGTQYvjXN7qjgaz2t4fiDWuFYESeCbRVQ6SzLyejaHe6",
  "key40": "2ZxLExRTv4W19VD48KvZTZxNd7k2bXb38NGmjDwHXQ7ZHCq6RXxdBD5Y2mfzHRKibFQtwCiV6N9tzoXdZKunDCEX",
  "key41": "61G5ZpszvBWUxfTuuXxnynFZCWWdufAtj2jYx1oQiwytFmfCo6Pz1xCbXrhoMDpp8ykxHaPTPuVvtS1yz1RY6Ycd",
  "key42": "4GMEehHFu6gisG4NQ9fpaC6XtqEhFSEVXVgogEtVTE5KfY66ewZNmB3HCg2QeYLqqbawTSoBxzpv5n3PcEda1bS8",
  "key43": "4o9RfXibhynKfRtgjxpAgDkczGtarBufvPyFudce2kacyfVmQDWUM8tNb7y1pYnNbwPx77TsreJxQGpiKT6ahZdy"
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
