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
    "3rDbDFhJPkiwp3N95WGkctzs5Nqqj96jV87giEFL9geb1KbfN15QVzXjjR3hARpmnPN6nKpWjbVWY4JQLzmzXyBC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WvMTNkxenJCyzKdRRSTLH8bbnXgR7FEHmMjtJAJGHaBRwWNyu8p8qN3KSJ5A6ZqT3Pt4ngvDec4KySBqDQeFf31",
  "key1": "1ykWLPG6FXo3xrMKsf6pxUbRdECzvDtft1qJBoMtekvuD9fGkHBTYA1MRS6nXFeoivYF6VwgENiEyUrymdRpBqL",
  "key2": "29wHtbfzksSZU3nAoDuw9vGR3kWdfKUxRvoyYuFe6M6Tdqwi4a6wr2u6AsDwQvPuKbwD5QAUkTmTHXGQ79ZJxYo2",
  "key3": "SSqLe98VXqE9KXykYAadrFUKCxLvTg7D73DdHNjbCkj9qjXthe8sPYUYctEhJV3H2349JuhMSZaf2aZ6xaRA3uA",
  "key4": "46ZTa6144QmoECcYywMbXLMhxpNLNo49My3r4nGXUjKTFsPCtsd6Zsg8jBvzy5qsPs9iVXptx4mzLcEomiCcJMhV",
  "key5": "3svST85TgCXcw5PuPzS9hrgvXAJBGn11Gv6QM1nNBeok5TFB2qGk567xPYSrhms88PVvfGQb87J1UAcubhbJXMru",
  "key6": "ETj98NfFdpgzU2D5cujHBovL95vQxDLhKqzeX2yH1YogFHZfubxtwh47HgQRRzooL5bgN5VbGhtFmocWNjmqSQA",
  "key7": "5ST4U2qe7QJdFW57ZDuwwtSVj1xS3AqTqYvT7cWgxthsAbVCAFKQL84noJXS13298cjGTL87eYYjVDWjhZCY1m7h",
  "key8": "QbikiAvpUw7GMbBDD3NCEd7T8i3R8UNBn2sGnZEQEtARftQ77dBKv4EdLNjBYcNg6ZCnFzTXxxXhTJAkr32xMBp",
  "key9": "22ErZdXSM5KtxXkehwAVSbV9DGThShJ7hMhZrmCJLsHVZN8dSBati2TxkohEMfpXZZMENEYQp7oFwjCmDqush2qH",
  "key10": "58hGSsqjELz3rZFAGhKyg2RWiEtptSSpDHynNqHY1aDhdVMaAm87oXCvs1gjcn6ZXYPN3sdMFSwMhdYRNdV3zCNr",
  "key11": "46rn8qjJuc7dzuzacfSNmR4P73ZFdcfWYtxXhHWKydpVCW5tF9TiH4Stfrv7ZzZ4niWofLevHgPu1s2iDNN57qsk",
  "key12": "SkCKCQnvX2zEWNTzCA6FSt6BAjsgs2SEpbQ4eBQnuHsLPWaWrWPVdA6qyg2bMzSgmzfvUtkNzjXXqJQZ7BNQwBH",
  "key13": "4Qvt9X4prZXi5WrFHcavsP55tiZKcora9fXANwC9BtVqtGhUAHf66CiZ8H68rH5zz6361ThyhvTPEFiS3hHAAaQE",
  "key14": "2xQCgyn7ynQ3LhnCANKgmnNCaTw7FZSqjyzp893oiy6iQeZBSLKkrGwoArbpJoyh5zWrm5RqLiMQcbSfuca1zeq",
  "key15": "3gruyGBLLqNdRsTUk2eRmE8FiyopcFaWq7M93SA8g9mA5g5VeqUNVa9nAHEs5aMN57feV6EAFNDW8MdnbYUNx4jv",
  "key16": "EcZkHHUtFT3wg9Hp3c2ahLAz9LfmonsJCTimmpwSr5WqqNQn28Lob1mRFcnDPq8GfisaBZAdiMWWanmSYdDm9Ch",
  "key17": "5JM6To6CX4eQ9GaxmgnV9fvsBFS8p4hb71cYZaqLDe51ELcsf1Gm85ckrZfRSgm5B43HbqUtLXmcnBdrpFVTdnjT",
  "key18": "T3uNEs2Yf21M5hBaUGQGksoL7MdWjJYkVms2rTkT446TSYmd2wxg3rG2GJLo54zmcdkhyjJ9far6kJT2vZkyZhW",
  "key19": "54VETNjrP8wEA5TTTHBsAz46jQTruVLBGh9bYCDhyXy5giWDnRsrCQyVniSDU4gQnrLkjQP8Xh4nkYiAvht6dWLi",
  "key20": "3rnxqDroGEDt5VMiqa673B7MVHcGQbVxBrX7GRisWuT4ZyCHFYTkRav8bdZ7cuGgHLM52Zu4NKsMTWUHhLFUTgWD",
  "key21": "Ff7ZbCGgq8Ka64dTRLvAWEtYtk4Fv4u37of7U8vzjh9hmkxcrev8Qb3vSUAxREzXHptDMAm11SZnUR2gbauXAug",
  "key22": "4LBJp7N9gqKWyfH4h7W4YEmFJ2hpaV6wj8WphHrMFvxtnmHox1g7eCGraasda3yEHLiEYwPBjmbKPftCgXADjJAj",
  "key23": "sfWV4eQbWr2mX7xW2X9nMup78QREuRBqufLnPtcQzivTfZAZ9hu8KjhDVSu3qbhawSXUoSZqx2SzR24t6EJVaoQ",
  "key24": "5vny5EDLZ8xACnCU1GvdnLbszTgSvS2hdtPcwrBewMtc42SyZ6ybcKy3zkgXt1b9cRFQrMhUjBspPekM4TLDK9kW",
  "key25": "3ttmA4NskeB5fmqLRstNBrDxbP6Eq83DZN8vUpTMY39RTffaUBeC5amDr7eArVnxCLGjXqiTZ11EqNWRPJZofrkZ",
  "key26": "2giGVufLENFLPxEsVseqVSSyufWhmLBSLQUEiqUhECZgfE7VyPGFbYLSsbcXFu66wpbZn55UW2ZmKwaMUvRPUexJ",
  "key27": "2FTSMHyviduUtMxJfvmruWrRvRVnmB6wZjUBr6FWj3kkZtM9mvTGzfv9gr45ggRCBgYUynciEkMLDuxvihKcZjS6",
  "key28": "4kRjQkamoP4pAtmWmZqqhzrqbim4EEZnVSWwhN3mTgUC7GWcoBUytYdeD2KkNpBL88ePbgGxagbrMHv45UX2VKKy",
  "key29": "3aQWwuT5qeMU1ibLy7FdVRzogVRcpUwZbRGhxTSbSPB7mT14vxCdnERCGZ5Wjj9EKVZ5hRLkKrDbP1fx199fcZnF",
  "key30": "VaJFBb3uwN49WWeT9bKfKuriciNNvAjNQUSDyoerskA3UCEuYbK4vcRMy724ES843tJW7kpGpqqN9hFdEuxTMT8",
  "key31": "2nPwvSM8Y6qXYLVhovcnsmgnVugknUr7KG4yPUxbMRKNAwEeMGceTequ79TfqWb4ZFEWkahYmBHftExLnrBnMsFN",
  "key32": "2wU1nx8XPwTPwsYXun2QFgzFFt4VMWj5kiXCMELm7RRAd912e9V4rV9P4xSyR5KusaAUAvihDJvHSFybCfGZGdmS",
  "key33": "4kXqmEgetWzNK9HcyB5eRGhnhjYHHjK9sBfYTowmUdE4Tt1LxRnkEjBkR2h4omopk8cSBE1AgKxgsg1msvZjFGCT",
  "key34": "4vXmafCycywVM3Q4y4CNuXQ9Nuaz3ZMmjPFTbgnP2MvAj9aULZukJYtVfD46DzRPSD6poBET9XFMXRf1GzE7utNC"
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
