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
    "4R4no7FQsJFxLAL6ezDK8um6rPYxGvE8WsSXbKk9bxw9dCgQkAAZdcgMLDdhr1rqjJCWtmv71igHBcQDnZBnWG1y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jkgzHbUAo6ocTr1UrL3ZZEo4WTvNjWVKqDCqpL5qHcjL1HAeQAWHtHDiT45afkW9sKhCkeJnbwDi4wCp7TYt9nb",
  "key1": "4uNzYZopGNF7fE6LhpBcxVB8iVsaEBKFY24Yz4F2LQLN4zSEaCHeGg9PEV8Mo8UiRun2ipuMVHhojMTUD5TUz6J2",
  "key2": "5qKKXC5XRt7b4xksx8Y15FXXfAmXzHMRJ9vqT6MeH1bbK2Up6fKxzD82MPg2Nw2b8RN38x4p2n3r3h2Efgrk6ciV",
  "key3": "2ryuPY1TFbC6j1qD5bwnjz2tq7gemDoTiZHwboqRDJuvGSbj2p5NKFjHkPdC5uazVnmYSNzRkNwSe4UTVeNas3Yh",
  "key4": "4rgEPFSUJnFNVjBmPBNREsLGvPdCBtT264vhAfWVf2HDUnkkZhJsZSsrz6eqStfTWb9g5W1i5PSkGgdm5zRE2mUe",
  "key5": "3f93GZCCGAu9QK1ny4wLrGMpV7BfvAouhMB69JaAMaiiJaqxqhgrqAPqSAcKKDUjRvp1eK3Q82ADDwwjVxfPVbPt",
  "key6": "31oek5RsKXKRrbP443L5tUJmwhEztt2TQqvCCd9cWCdJbQsDsPYAyEwbjreCf17zdx4Zbi9pKtus8mBGWY8eCNGG",
  "key7": "4orPg9RRMus3Cer74AqusLYDGdnVEUP6ec6tvqG7QnQT2pLU8t9szLzdxf7DdksA5SuFyQkaTLqWg2151DFnSrRX",
  "key8": "4sLsP8yT9kh2tDdsohrn2TtvzxK18EtHU6Trpej7kqm14i4qtY2ahwB2uN6a3FZ7EPzcoy7qmYwZPiLLqJHm6jN",
  "key9": "3PwUeYFDN2ufLAvehqguiif1Q1C9bMk7HphmEt8AqH6Ng57D8twjXDiACnT59mCTaYXN35PJWn4Zn8N3N48YhJQk",
  "key10": "2Qohhjg2W3jXYj3mtBkswXYTkZY191qWrfSSBe58sHvDsQPHfMuhgoD1ezQMSMwwmbJeHes8pXe63W9YzMxNZfYw",
  "key11": "hWAJTAukHyGJ1tEHVKRGJR851Qztz6Z2AfEHRFNpjSk4qpzGkczQAuRUwK5bgX8TV96PgmVGLm91Vo4mnPzaE1L",
  "key12": "3XN6xc7szeDnaJm4arZtvWaumyVCoCjNnu9b9oDjKejwRJsZWJHcxCeGSpA64jYs7qoVfyFQdZE6XPdDSkvc7JjU",
  "key13": "48H2Gu6v9V7ni1czXhpJ94W1tQD973DKA7GMayxV6G2DB2QS1JVzAa9nvJSjwiAMo37idt1HkMBLtmiqEyyYVrQE",
  "key14": "4Th3eBpnHHSD2FEGYGbsTTkVXcpN534unYvDZ5SzMh3gBZpYSNNvkskVexgiZqaV9ry5SeTnsSr2LW6iCKpZkrv8",
  "key15": "3F5hXC1mKahZwTrvSgEaBX8X3y2HUMXu7d31gUobYDJzAAMP9XkRoUe29nLoEPSpfDjZBNAHnrrah2mxqMoZ6oZb",
  "key16": "Jz4rxcuWbxbTtqf6qDdpUZYE3q4NLQ56qgSrViwY71ngSouBZ2iDKXNQf38wk5p95kmEgxsq5cRdzxFrdYB1Jdn",
  "key17": "4ETGnRKDPQYviFvETJaAbftWidB9wmrPtn8XWSNzMyYbtqohmxwKpbFutNrw5HUbZ75tP3WmVoNcqaLuee7taaNZ",
  "key18": "43XYY8DFkvuwxVbvR7ZRunSNAM1Fds78LaF81gXBycMVHM6obGxUMyLRbXsoyG3jYq1hwWeqmeC5Z3YKX2h5kvyX",
  "key19": "bgTdbhWNt8AYWvMSmNBR9bKCMAK7KNvS5ayfSo3HocPH7FN8isk27AXqunsBoGorzQyLJmSMKHxs7mxpnjyAn23",
  "key20": "jrzkw2zPjv9MmTWiguMVVdRij2FtaJhGruJoavngYqkmnKkYo6o73FYUS3cTgH3LLmJSs7U17ZrppH6wcNaWfBT",
  "key21": "2dqVRAiTRnZiwmcPXK8yGuGshNtsRhKfT2i6DTkBCBBSjfbnGqJ4fhdqJXVu64KX6VZycDtE24xuckYKzSKvmEDc",
  "key22": "2pJB6723cR5Foh1pWL1B746tQuQAYfxz1V3QC9skG1DmmXKHGbfgX7AwxwfqCT6Zd63HyANPYH86gU3bBhXor7ZB",
  "key23": "5AsJpE17tDfLFDiPvE1aQ5EnZJw3xEkwoeXAZG6g3ZiYWRmjSVh7RfFdcEjMtDLoFsgc2Ck1nYZnvoHProj9nZ98",
  "key24": "2xLXR1aG14vkZajhcxxAQPZkmqtXQMbZpEoSFBTBgisUg8ZJnmkDaAjDLXb9PL2BQ9nWYbRVH8Mv8TEah4X3Rjkg",
  "key25": "4fbuWsgVsPhfQvrWTHfqCjFxUVQhcCPoNFKiWMxWvhQ54Wnmkuio3EadHymWvwp1SQ1xNb3G4fyqWGUMmv71EH7c",
  "key26": "2qDnMjhHHVfj1mPGVgDLd7hgpgeuwWQN7Wi78p55JSxpdko3ws37EZniNBf6fpviawXnueSiYCUzUQVUfgExdZ3z",
  "key27": "2RkJb9ptcSJJHVvdfEz5u9Hoek1jN1YixMBHmidfY3hP6MD5Q4TrZGN7x2sAPoYqHv65bc1ew4WNdXJYFAC7UyU4",
  "key28": "25Uz4Pfx7heWhiWk9bYbjdm9K9avKvaeTbFUSv9CLhW45nrrjgjQD9xKN9yAVF8uF9KTGAGtjsJC1bLERUgMv1p4",
  "key29": "3sjE38dg6NuyHWLvwoKtKUW7B61gDor6zBngp54qpyUb7fajDf3tSSFPdqM1mMbtxsjaS55oam9DXpzsaFgNHLd4",
  "key30": "5Nx3G2Me4SZjDP4ZDH4fuH8anyuC4SDAZ8HzkesnQzTJfQF6EtTb9iwaWnMo1Rv1QjRqsHCgNDRsvnKRDFuBrMit",
  "key31": "2aw7cQ2oiqecKqEBBjVETqpDPqyWWU5coLoX3st6My9dehQaNfkNn8dmxtxdHkoNK8jZytq7cEgyVSVox7ZtWavr",
  "key32": "PrLgkizDsuKrLBW4VLAF7ZZVUWBpaKToHoA23R5MzVCRJ5uTVqxUYXWRArRzYSm2TwGtpbp68nYm43PgWtn3puh",
  "key33": "43jJ3d4HMHieBPVcnskotrTEfngyf1EZYQGghqeD8hHQFYLzxoppafCD28dNAUtEjCDiEacMDzcGoZHtRU7dQHeo",
  "key34": "2Bpjnye63CuQ1RsoBeRYNgpCWC2i8hGw277L6qtSEFsN2vDuFq8XjsnHHucZvMsCNTdF8oo6g3um6ixMtpmLkQ8Y",
  "key35": "eEpSSUEgDTChuXBF2b6gFJum6UEgzVndu4ak8MGH4mCW8GerRzcnJXXJDVz2HUcVzjvLHLkurdVKaGrVcBFCeoD"
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
