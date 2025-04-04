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
    "E87L5JjmEDbAi94hxn2vyDaxSkuWHMpNJGkT3mvfs877vmp4nNcQxfcTS4FkXY2gku4KfwTr6XruscpMRHnG8rc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ztq7kUV51Ybss3WbeDGrQhYbBetMJjzbuk19xtX8U2CrgiHsYtzb7sL4NJexS9kXBPTNKHmZRT3YWmHXZ4eeFDA",
  "key1": "4rBQc9k9QodwT4CK9fFPTvh1qhGWxvC3bC2HZnBhnJuJqeeDeNX7shLSkRJk224DqUCpUwwYGD3i8AudJ18gXz9P",
  "key2": "49WowP5azS8gggiVeW7i3LfVLE8pcABPQhQbbejwPbckwbP88eWAiowa7M37AqjZvJ15MQvAW3pQbAXegLvdapes",
  "key3": "62SM29V399N4RKRpTTdnFosAR2bF7MNVCNBdJRAaob46rjfND6a9MxBvvimRAnCCz3HupFdnjNtjyztu7VVUSjuD",
  "key4": "65TwtMo92Fv8ynDDdAhDqRzNSHBe2qJdqJGmofNkXPZgH1voBroUnK1rCxSWdXfvDqKUJrg5nypRFM7iATfz1nzM",
  "key5": "3oqBS6LrsiUKaS9cXJcVHGtDmzUoonS2NcK69HpWuTRFmGRYW1bNE5u2A8gAvqV2Xs1XMc9bT8AUzcvg3v3Y6eM3",
  "key6": "3v6Rga7EY1AWnDFKxscGn7jVJAAQTvMvEkmRHasxQmt5M2yo5Be3sCVn3ALxtxpUjdRbSxgWCbKbR629JenjG2RE",
  "key7": "42XMtYvKHwUw7uwbDbiuQVC3QYedo1kAKta7iJKtAG8iCWae9EmUaRJvs7wjot35QcCHr1at139y1xbEQeF2Vf1V",
  "key8": "N1GhH9MySMWVqQauvNr2Sy98DxfsMqG6Hte9oeAj7qWSZQfyxNVTeHKvkKaSfVAKaRifwnnqgNZ84qfUsy3cSDm",
  "key9": "5RQti7JtMHX5GsYpVn3N7iYRwiZxfG5grJvpsK1bZwfSHXiCK3sEtwGPAks2TZ1DFWoaHZqFEGwHsrQ5GqgbMXMu",
  "key10": "5KkUa8nJsPx8m3HVKdmSw1PmPtJkbGHPRvsRhNV1ZRuY6k4oZRBWZyNysTAVRs1d4BHBdnf7xCiYSSmR1vJAjhtb",
  "key11": "3yiJTWYoowxeURkEpRkuFTzswP4tndBNiAe113oGJ2Z6PqsQScu7t5NExDjE1wAA5GBXgZC2V2owiGmvVDdUdqzu",
  "key12": "2kZZP5wvPoKEURhWFgoov5gvxz5SpYdaCZZD6wfj2RAnYs1gaiVGKF1h7Z448nkXYvKpSFY7F8Kgwz9cokJvdHpm",
  "key13": "3RKVJGVAKK93QM9MSPzSiAi9czZHMs1H5QVRD2s6v9R3Q3BPsvM287WtfYteeepDwwa1jHm3DMRCQ8hFNmi67mHb",
  "key14": "4KQMFckDMHUqXXCfMUfsVE9bCTBxDjMMG26GJ5BMDsueKSXvNu8QVETorKBiwD8Eefeu3WH89HhU1zFi3wCp3DqC",
  "key15": "i8amdRjRYu21huBSt5fXDdj35mUtc7o1V8CY9aSL9A8FwNJFXjrzRGrs3pYszpz2Gq5wqPn18DCyEBC4RSTfwW2",
  "key16": "g8dWDGay3ikEZWey6nBExk47kYEvemQgTBFjeTJM8QDq9CD9RSVHQxrASA8o4ukpKQtCx8vFF24ZLT3Ct9sqa5C",
  "key17": "4S4tdtnx3XXHKuXNZwVcNz4jUdco84T3v69WbjDkLFvFP4Qqpccn1WwrBF14N3FzWVGXb1mYAR6jjwk2ng6TTwfk",
  "key18": "4BWj4YXsnNmJGXUMT2dfTHUTWTMQMYPSjM8AL5mALGpjzLM7rt68H37zBHEsi59UWFhSCALUon2W98bCsQ1wSyya",
  "key19": "2vK8bbqjXFKHZQaYTXFNcTskhkf2im4vV8RWUdpdbSc4aMmED7iQyNig3vJ1nsemm7pPXEH4HTFBs5zSoR6cuSZ6",
  "key20": "acMU8ypxGcufpQgFPED97fcV8rLE2N8Ey2w8Xe4ZfNDsBGg1b8to1iSQc19S5MUaXsxWrCbSTSKLmSWd2ciDxT3",
  "key21": "SNhd7NLawfiqpZGNUvJnWTMpL3uQrPVYfKXs1yybBbyVAtBFUJ6YH1JAaRgAySHtRRHtTqRnBh8qMGfY9xn1as7",
  "key22": "5J5FiARFYyvsAnTBsSfWV73axQrhydoJU7y3L24Cwwh5ksZDnKrqbT3Pz4d7d2vixZWyS5vRw2XdyqtTun2fKApH",
  "key23": "5ueZdYMTSX2uVfi2zkv2Rp46qAz1yTi2HciNeExbC9e8U5Fjz9NsNtWUJ1sPHBVdLKPBhxBVrAntcf9bkMpkqWeb",
  "key24": "3rsBkav1gDXSEjuvNvMfLBeLJNdeSurRv3jwqb1tLaE6XZWL3yGnWk6VYvxL9DVkYD5NF95BujfVAEpCmUqTjpuQ",
  "key25": "4PSs4rSq1diU75VFeWETWkFUELES6dp9BqUdf9bbPKdc3YVJTpButu7gDAK7Q6m89R6qceTKKTtG98CaBq1J85qs",
  "key26": "4v6Fk2AghwXfX3ukWnwh5jFvXFN1CFisWkkqsTEPMyWcjQMaeDjuxqX6HCcBMqkwr7RpjnB7TYNAmwdLHfffDBXm",
  "key27": "4prH7U2KGtsp6d5eJkkR8hfxmWTJpDF2ePcEDA9S4WSLfdjHdFJBb6MEEP8exPtkaA5XGLh9uiTMXxX7qYtgCP6r",
  "key28": "4gZ2KHe4UZAVhLeqruoJ2p8FSd4qXJKdzsivzNYdGpfUPhGNs3ZA31wDRyNdAope4F5bxB8kWXBaG9CYSyiw3Njo",
  "key29": "3ita5xHDSrcTAH1hRSMzmUUemHiTLP3LWo5GdK9qac1Ci61JbT1HRQXJk9aakw2ZXzyoHin7SehRPnuHXgKfU9sK",
  "key30": "62UVkUAhRxSAeruZw32MKKtQwDTfdMJvpLKzBDSZZTAyYzDgvbsw391KEj5cCeZ9439E59u5DZQuLNfdBki76ofh",
  "key31": "UoDfxAmPZNr4wAiqUUV13MCrAgszfC3E4FsQVJMzo7rHMK8BPx91TaPUjhDHMNWeZKH8hG8WeAzQyBbcyME7Dbu",
  "key32": "5Z9fcipHnjimZAnEJTW2kqrscD3Tjwx5crzg6f7Ue8uuBv5FqjUaudhU1Da57mCrk6WuaxR7ThAeYFmEr6UQ1iFX",
  "key33": "2b6kyBkZvthqqBSvCpisRKoh1K9WsM2QRwV2ZYzpfbzFGNjFu39fu3p9qdXifY4Zj7z5kCaxqQ6TwnPPgpNoa52Z",
  "key34": "3rr3DDi4xJC5Fdm14i69j4JrCfBX4mYgnWKNBmUiPMbcLvTYEAcd5w3c4a6s7J71nNaEdF3P81qAJVdwquRJiGLW",
  "key35": "3m6mdVKxGwhqhAHZivr5stvuz1hSJyfTyJCteTnRL2KujmsnDPx2wQZPi2suK8D6P239ysUmg1rSUG6tD4dyTaDX",
  "key36": "5zWhBrpggL7zKuMZJn5CsxfLsxhF8k6bZifcEoizzGTXaTRggsKRRii5xobzh25ZqNYUXpSJ6AUyNvjZxLKYCx1L"
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
