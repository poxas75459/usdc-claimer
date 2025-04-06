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
    "4whqBoRW1huvgiNTAkGwnmRc1ct8ZZjebRFTHHBjveCNDCRBmKioB43SJRvMR2Npm3e87xoxwnDwKGGBnAT8kF9P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61S7J9813gYLgUNhrSsFSeARCehwLnd6GQ29LwRWbTizsq7ik9UQk57Nhsgb3NEZxt6MMwygvhdobYv6b42ChQ2w",
  "key1": "3Ph1j6LCiASMAJuj2umb7SBHXSPA16N3H43od77XHbiBSsFp52qzPR8zcUNjNEKM4X8EJFWo1EDXK2Ew7e5GcXbc",
  "key2": "3hfqMSLr6afqy6a6nzFvvG34KsxHXHMkhwGZRT3w86ngUWDyMd7debDmEpAB6SCJNKnjJuv2CqyP1Uo6D6TNGfNi",
  "key3": "2VgQDDnuVZxwvK92v7eAj6wmkH3JZTQQ7bRRCXXU1vMLtfZ6oFaEEpcU81aL6yT2fmy9KKDvhYUJPV99MYEPbWAC",
  "key4": "3HC8jpboibecW1vb2ZEFEbgzZpGUFCGWL2P3xfe8dt5dkannNuSLEmy3x3qNVnbNiF5pniWAam2o9joUYoqbfsJd",
  "key5": "5SU2Bsk77vjAGtYrfR5FYYZpL1i2SsFeEf13aM7MWEiNR34tbLUAwoftx1d7bktYQPLytYxKkt7jmpFeinaMFa9e",
  "key6": "3PooQ6isQxSiFmVYLBAkbaufS5P4nS39wpsqm1k6nfsCNx1jAM386St7wq4M8N82X7hmpET9mUESPBDKZmJ6eHqt",
  "key7": "2Ndy8Haj7BRVU4Hw36tueQidyZnu5uveCe2DpReKe6eC1SJYFxZ4DbC8BdU8dvJXBCPY99qQAZFoQ2qUavfcbMcX",
  "key8": "3evbjRfhkekAfoTjC5tiqMoRHv1UvcNXGnwwbfeQNuudetitWTMMRSfMYEF9MRBEdq1zq3wnyVsneBqvetvVtU4K",
  "key9": "4EwTxnU4J2vnQNvQLWFnPLqj8UN2a8777rfzNJ2A3VFYTcS3bTYEUdiYyPpKFsnTr7AyPc6WBY72dJTFDAaN7UNJ",
  "key10": "25YJT3JFi554te65zoCaxHgLNnK7yekG1bcWsGDfLEYxKVw1FL7cahYx6ePxDqZaJ4kcmDM2cJ8nwMKfc3GnMhaP",
  "key11": "4LdSa4Sd2sudTUBDz9kY2pAeZfyCYoESteyzaCHDweBroeXGLaxNLPyf2HoUZsWtBtzMHigk5B6RKUW96BuXRQiV",
  "key12": "D77KRjkJTsZrVFTzpmfahCiyhJbsrYz5kFo77Nrm8mhx6d1rUMNWimQHUn7fUGACQK92rtUU3QrKEzMjaDaEi3q",
  "key13": "3fmdnVscVA4TvR9tLpWNDTaziP24DN4TD6MhkAM6f99is3oNdqF715pgCr7zHGB7JWttfE7ReXZbuna94yv5G7Cy",
  "key14": "59XcRSeuY1YrRC41hQ4SuMH83F6Lm6UMgTZyTkGivAw2TbuKgyLwKL1AcUEG5z3XN93ncXiPK2CTMcBtCGPq4tD9",
  "key15": "29QuJD36dsFXTXVtL4Lfn9vLMpmFGjpxs9rQukwQPw6LZJiVjjDbprxyVAQMBWkZrRtSf7UquPagfte8Mu1gV8Nb",
  "key16": "5rvc2wKTKojUhHtNEiZ4i4hQTCGYBV5zyfM2rgRPFnZ4jhayvw6URrGGF1HCQcZdXx5tVj8bgRUz8SRxQYryAr2P",
  "key17": "5mMJH8pAPBbobnGzUb7a18zJFizEZT7XUyePuHhTFQBRA452YVpYDeqqdPm5iF8SxVVYyJ5xNFtwpdamYkMFHXVk",
  "key18": "3kgPZ234RLhSue1rRVx8ZqtdG9fya2U5s6k3hTTj4dzpPSE7p3R4dkxgGNEyF399FUJg7UogjogTE35WohfH3B48",
  "key19": "5gaLynCs3MLjXb78HEbFuTSrJmYCGaZCbcLVcNdkJrGhHF4F34mQxj8yEfY5gR4BL9ax88mEmsPRkGx21yiiBLZm",
  "key20": "6k8RnE3z9GAN9Kg7BY2Hw2jDcG39zgvMojs6mmLkPAbMYfbxEiKiCRs1prXPJQYgcNyxks7LvSDUgLmJRN7QdKr",
  "key21": "3Gdpv8fQgkzZKfjhhktsSoRfGGNvbMWmwSx55x1oJz5hhLbvv8BFH4uTKo3UWfJGGuChNiTZQJmga8aJFZdHL2t6",
  "key22": "DCDivSkqTNHh4W1nHAkbZJBi8fURiT3iyget3svhuH2dLedy5Fm4Gjb2Avv9Fh76gc2prkytUvtjfr3wPNopRY7",
  "key23": "dPpPcmwUApk27sXaZZvvPEaDk7NjEwVP8TKQA4wRWRn78MNfnhRKPbC7PzjD6yci83XCzWzwZxJqKve8MsGQTsC",
  "key24": "5FnFdqYkN9d32ovTUA6P7xzCdMxbGaee7inT9v9ithFJxrJhhday8k2D4girv3X6ncC6xU9PMok8tXnGT6f9D65L",
  "key25": "5JuiKBxMJTt5fLYx6q4QzZrNu3iVmTE7sz1TEBDUPd6qApHrBF6V6k5HHf3cQQpDUoZYWB9Do5QNYV11BjNiaeQp",
  "key26": "2gGuMegXZ5Khh7xu74QWPnN5xZ61SeWFw6yaw6kZPDkN9v2netPYd8V8RAVr2P6yBuToQ7VZUXAmEpoiuhXYV83F",
  "key27": "5a4D7Jc9ik48ZRJrsqcefCWUQnurKEHPHCyZw5Xev8s5AQGXrgpG1t6X6weUkYBNng54vCqqufKGNAFvc7dYj7yz",
  "key28": "3Q1mp52ahxc6G7xDmZWRne4B91n1CkahGgL8tUttMWNCrJbMqfANEkEUAcMWqfjRVrz2JHxZ9QwSNsrFaNBKxxcs",
  "key29": "iKMLiRfsaswkEE6aAwkrtVaRE9W1JxourtY8ToAsZvy5xzf7NE7wZgKXDqjSMxoQpYpg8eUz1T2nfpAoUM1KBNJ",
  "key30": "5FHxWkJKScekU2yJUSK6XvdPdcekDYpzUc8LSqNVGNutMXEM8t5Qb3CvBCr5yNxTWywa6ttzL7RT9yxu4VTbSnUV",
  "key31": "5qEpNq5cpWaquUtc1qupsYhTJtv3sSCRwnLnoybJ8jgs9uJeksf39MaWohZ9N6eevV1carafoKgnzV8SMJLJqCGj",
  "key32": "4mWxtsvpdvkkkUwV6artz1H8oMKDHuXL6RWkeWDUqN5hY6HshbrX8UTzJxzkXbHb1hYiBdmE2QT6hkZbdaDLTExc",
  "key33": "4dcaG192Cgxfr6cfgUczhfk8hcebXW6LzL4c7Sx3YLKw1Xnop5Tb5yJoyVdPoKBqo5ttsjvL24L8pdPTpksKeeXt",
  "key34": "2RLnqiZk5jSTxeSpFbB8Ya3CFY6G3pXtpHAzKamXFfNZ1YGtSm57QgbsDwuSgLxdUAZJB25opVMw92jX2jdQvgPf",
  "key35": "5iyKqgdECkhtnVx9dvqPMs7etESoacgLEHRmJ3b2vQiggNJHBadStVhy8RLqMopcNoJ9MRDxaCyNaoPSQnEthwkG"
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
