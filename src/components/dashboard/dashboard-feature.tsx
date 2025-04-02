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
    "4ZXURE3nxFhJD1yGDTduP3k3f1BWwnC9snKSKV35HoqDWihC8JMRDcbtZtft942MMy14EyyVuFS9LLL7eCN2kxFf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uTqZQnHPJ5SUjCitnBXZZ5HRFFnDsfLNWNeowtnh5NJVMeEULWktUdznKtCGtixESN5zfzzhZbssgRHQVUttR5i",
  "key1": "472nQVCLFS4P5uPu6rxKXYadiM3s97GFtSDMWC7NS9t26s1aUUX4yb66u6ewPpJWCfi8D6W8PKgAfnFddYM2UUXk",
  "key2": "nuUyZVyRf5KkDzMqt4jGjgEo5FRbBDQnQANd4wu9RtsS4C5vebPT6P3o2g243ZX36jUsW78zxc5XH2gT6t5ouhz",
  "key3": "4estCHkMxz6WtZhq6tdU9BGTANZdaZZ3KiXH5H2Atkkuyy798pYeqBzq77cTahCQVRwc6b5KNikeovsqC4zYYe9c",
  "key4": "65E13TputL8enkSo9HTwtXUQAvoDMKWCjk96tq531M2vpWsEUMj646Wh9fMB3WYk7NaNMCLt3pmxVTArJiEUF5Jb",
  "key5": "24hUK61wqHXc2fRvH1ao8vyJDa7hb2eeTbjiJSKddFesZsst3AxAWzn5LiR933mexajtjqxGYRviJYPe8qfHpQwx",
  "key6": "4TTb2ANTR1yjfKUtWStbtf9QnmobebUHvWTWfkQAw6PtoXsEG5Pa4qvFaggJBhQ2UrBqZEyJRj9eR9FzQYQ5Qsh8",
  "key7": "5iQiF6H7F31eCg6xnVqKewA3XJsDFyCRY8erWYLCtbFgSkjr75s3TXSLJoHPw6t3tpQmCzg9iKAtyT5DDf3LET3W",
  "key8": "2UWFpJ6guHoytsmraJeFrtbtKp9yTA7eAwGNStq3SAsfzCJaDjR1AugMS1saLYsCVPU8ZdmaMsxbVqP2HMXHf1yo",
  "key9": "5nS5sjic1s1867RA4kdWEMrGQ3fZyQ8cM6noRiZsr3UnLYvQFsQkkxR3gveV4nEdaJSBLRJ9SdqNPH3pYDwRyEKv",
  "key10": "5dXBLKRQXFs8u3QB42U4zLfNupmNu6qKyCrfcG39BNrNVM7auADzkTFo5b1MHdaJrxqL5zzK6ic6GpuGs5D9MTMK",
  "key11": "5SRAw2zDs7L95puMrBFF7RNUD8G3mpEFMckKuyNtNHzsTdjQCTuj2XJwmsD9LNRRHs279AfKoMPnjtF99GF8Hb88",
  "key12": "JSs61hko2VPcckUChxFgVeePMS534Wxr8ewnwC9MS49VVSEJ9gg2uCHJsmQTj3rBwiAKZp59crN7g8wPGkrFdQB",
  "key13": "4Cx3v1RyA7vdnRYnahQVzKd7FwCJp2Uv5bxA2jr41xCK7ookzcQSFFp5MUQqCFZF9yCbsx2xj48FpwnkRfboAZnh",
  "key14": "2hMvRpWEzTD91fVSgfqrwgf1CLnHddhoDfFpU2WMfJ9kuhvEKG4PBSwdpvjtCYoShyh2q3wkCme9W7hooxangn1X",
  "key15": "AEjTFrxGZwvGqBaSatZFgx7XBgyuSoUGLAWmYkM94cigitwgCoesbsazRRutWSM9Cc7z5eR1CzBCtaFAbuf5dhw",
  "key16": "5P9oBHPisdPpwWF9LzvKWs3tX1hcHShf3nBKK42opvrjhTYsdQF5sfjmS7KfF6cWyCczACMXj76apSAN1VVQKPTY",
  "key17": "3tVt4N95JyHSJ6TBzoLrFtT5VX6vQzw412hdFP49URVgFDneoaPav7uARZw1NhJxKwDQgNBZXevaVFzwZJbt3Z5S",
  "key18": "5MvfCrTiz2gijAj96zpDRr5UzLvPgYFcLPL1TWnhf4wB3mta386WbnS33av7miiP7LMit2tiBaZCsony1TWw2pxm",
  "key19": "3pF3KyVoaE5L5uxkjKdXUczygwp9tNKaag5najj5YtQQHxmQzREzkqkCJuQwjeTXbaxb1tx7LxBhCfL8H3oEwKTc",
  "key20": "43KgXWQhVYuy7gx77JvwFASyHASVx8hmu1BmDPdVhr2xa7vJF3zNR1syoxiW5UhQBWMSAaHu5G3VJf1fEjmeqvGd",
  "key21": "2jDqJp5TxJzp9ZwP2t6sqjqMyMFKC7GSZCsBqZAvoqbGVVdwvAEaWwbW14nwGESuPArAGc8xJFsfhDMMRVDqHyYV",
  "key22": "34pjQQUMzJCBwUtMnR2QdpEWXbtjLfPM5KQXdZqcHVsBztJrYwh8L54rZTsZni9mYafYa4LSvyjHnzxncogE3x5Y",
  "key23": "5DKxGSTE4yp6QorDHkXhzFB1nxsbb43CJWpxzemHgGjRnWE33zpCQHmhCgL5bEFRCRSNHAqgJzsxZWR4MXBdBuEN",
  "key24": "3ZfgH9FmYR6kvXNFY1LjxanCiBnLok1Mmk6s6PRvbuRHU9MEhB2DgJ9THpJLJuym3FetgBUofeuj67t2e3oc1sDn",
  "key25": "4ne5aMC8GUcQXQgNnUZKgez5DNvdyfY6CvG925JKY2SZTvyHnpjx6uVTpTrpX5p4DXttqmRUbPdBpfAgpRoBajMs",
  "key26": "3fkj76kndg7nq6SzhGE6HdfMxJ3Nu1kJnCVtbm9EoPtte8w4Er7NHDSEvcCJy3hx2q8H4fH34PtCwfgob6FptAYm",
  "key27": "zADNSFzFKgS7wAb7tptmWbQD2uyujssCvgJoC2ZVis8DSht3NnHAaB8XK9REVELuH8c7CnTvWczwGzZ8XgWzRp7"
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
