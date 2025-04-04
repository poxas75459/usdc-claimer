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
    "4jDzwaPP7UHr1RtURTcZTfXpcFsPVZNWXaXwuz9FdQtFofhGz5LKbSnhoNVFYGLLm6w3rDg3douAX9QwnMTu17s7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LtbLoZKaU6kXD2BJN2ioQ8JYvZSHwzdSRfHTJRzftC56RVpGkRnQxN8e2rmfYFyyCFp5x33fuvrBFd5ZMXf7h8r",
  "key1": "5j4WfFMUkZrv4axcXGEvaxC9efFUrboWELBK2oB13qnRE1zLsysc9UShjRPFMRpJpc1TNUTMQFFkqShWe7s1aDCo",
  "key2": "5EYRTcs25sNKKjSGmGQ2SGSauyCTSZwH5GMun3G5zFKWEAcMke9dJZQJw15SYRocQDMrvFGGeNaB4ZJ1sBZc46bk",
  "key3": "5NKFNKFxe2ug8PYRTHgf46zUu8ZyLrdi66uogXe25oFAELs9WabQVatNqW6W1VAg7n1H7K2sHCnXWBaCjztUNfN4",
  "key4": "47sWX7vt11fjzYJVsUMDCQmp38s4SwNZqcALfPbUNTjPh5iMKTUdUNbjEUnEskXCcYXoF41UU7zpKAN2txGEvZvj",
  "key5": "24kLk3hwZFwbCurwLjvpd57jSRpFwHYbjd3wasd5Etnfvf2pjAancdQVWF8nckVQu8yXFPdBEFq1DQo8oHZHSJLC",
  "key6": "5fxx6vPL7gNJD22dWGX73MuEMzjvEQNmFcFC5H7fSpLZfKXLeTUaPg9g9EnUqM5AZRdPWgHAaPq45uqupcB8BC63",
  "key7": "4X6KNybWQsnqWvthZS1PsZYzB9RTD6CVoAaya1KiWZmSBiZ9dVMdgA7KT11YSbGEqfDZumYV5xDaWi6R5izHN1eQ",
  "key8": "5goP6az1Dpk2YFhh5BrnbDMCZjGaSuJ9vi7Q3hvTk1VYcMjLezDmn5ek94dyG72symUKddp374yndnqBwrDe2Pxa",
  "key9": "4uEcC3HiFQL7Nvg6LiFzeU1XfdULUHYLWsCeLLdm3dtE2Je11QDV5qCf6E1h7bxQdcCqg4BdDYbBW2cv9VB61AkT",
  "key10": "5AUTDfFr4VF3nEkUNPpVUJ3MwrDT89ghd6dLpryPP53TMYsqkRtCKMyrTdcnAjFxpQfSotXW4WEaXE3pvn4usH3S",
  "key11": "3v5y669jx4sW7f6ajprNC1QugyKTTJpFJCHoBwvRcZZGoJnK741cdL7FkSsRS9gd2dxay7KF7XeLSRQiKSzkipuD",
  "key12": "59RAbjL58B1bB3mQKvMdAqFgukpjuLNDTFXtK54HGQvLXx9ki8RKjAcH3R5wvsTigFuYbcyCikCDaMF5FfqAE4tV",
  "key13": "3UV4TuQ8dMt3oNXnhCjTaJrL8sNEQdxg9XhSvLbb2wyEndk4ri3uBhyx5HhkyrFuas1jxgF7pSrFRbKUpL9y5h4m",
  "key14": "2H4sNFrKDHwb5LR6xR6szbz7B6TaYcQFSRX5wFHnd84feU11SAXw9HZRZW2auC48ckfyZEkegW9Ra4Jiic1dhnoA",
  "key15": "5DwikgugfCRuRffauGzGwa7kRxkg69Ro3VpvkKGJkNvGay1rbHUJCccCUgTChnKLYM7UaLVwcogbmtFzdS2v9CmT",
  "key16": "5gGNdGnx8S1Mgkg5oW5kqaabKiDY8kWHvPnj37DfFhXJ5HPKdSgp3YThxXURqjxq3LhTq1zPXHcNY8GQ6DARpeAR",
  "key17": "3kvg5MwNFE6GnxZrJtd1zpCuK2f6bKUtBvdvSHw49MpiR5VMbtvDHFXdVtaGoU5txtSdrMXDNx555pohs5tkfK2Y",
  "key18": "3xzP2zPwaBVESuRLq3ZWB25RKw2CgtbXQmHQvWpyTJoqv9V6xBmdWAwGpZjh8xFeXKV9vAV6SmjNStNBMypzWqTD",
  "key19": "5XCW5YZ2eQqgXAyNYwoFfokvTZN1Z1z36KXhBGmcnefCNramssTAmGMB7DDkSEEuhEdruzij2KqjDZJJEpWsVsqA",
  "key20": "5sBYTSSYdQV9oXDYun2CJwyqe6ozPsnDF56E7KBxbFNoQ7cHMRPK2j1pkJx2aGV9XstMsUnQ8zZUn2PFqLkTa1KJ",
  "key21": "2Vc7KEn5ruyiEePmhqAvAV5bV5P2z6utbTR8iBaP7EnpqvFwakzsBDf8dz8eXf6Bvt9FyYbMv995uAPbypxbpYYJ",
  "key22": "4Fdw5AKeNfTXyNKKoaa8h4SQn1PitSA63fExvnJaffFS85HdBvJZUyBf63oPmpGSLHC3KUiwFkyCPQRRKbYTgKT2",
  "key23": "5gbSsXD62GZ7TcM5xHFVaJCKB4RqPEqZgg16fpN9Ns5uCUHea8gochH1R3kREiW6iH1rf6n87d6arzmxhwHMF6CY",
  "key24": "5vJxKx6vqUyyf9bdUaBv1kDvLuqiTJRTRnUWi6KPsmhYZyrZYizY1Rtt51gXxo7tbyqTCjGDWefJwgJLmFw6PB7R",
  "key25": "2FnW8JJs5YFYJuuxWWw9hkQq5bfAfPoqVpjFg8kbtsWboc9zgyBQZCPerUXTTnMv9Cmq6kigtQm9asocmBQje2Px",
  "key26": "cdB6WJrf5hxNL51jkww4oo5WB7kcwUR7iBmr8EsT5LwAQfZyxpHp7dbHAbeVjB2yyBEp6M58Lzi9obAdv3Xv2q7",
  "key27": "2c5ZtWMx1CyGHpTY1a5SGcoBFBDxAZY3c6A4doECUmdnwV8KQWaNH21bWQNG94sde2MD5AxYBn7X7zkv1qrF9WtR",
  "key28": "4cYFECMiZnevuNopmGuLJsij9nnyXpHrtTmUT7aU88qZCaw2LAUTmeb4oveuAvP1WmN1SPAuMgyEd1M3Y7MHy2HL",
  "key29": "36m964PYe6pYV2PrFX7DwnBxNxBHEhM8JiwbTHmg7wK3QmvFU76psvd2GpYPe2rkur4mwSnFaTzTmoxUUzuevigx",
  "key30": "29diUW4b94m6w4GPFAnmkDGbgAuf3MYp57RrA93vvwWxy9zBk1p8CE1cBPMRebyna28Bmvsgo8zbfyR5d3Wzd5Wa",
  "key31": "3u3NSvLwTe2sptZiV6WC7P3d8sLMSDnS5zicBZfAg3HxojQdKb78c11HfcHjHK5HWjRH1ouVFVryi4y5sN95M4u4",
  "key32": "vYsPfxwvxTjuZhpg7t8yD9HD4idX5wRBbn9reuUhnSgfrJdW6xJorFxJQ9tts7xmeHHbL92Uvi9aXJo5BA1UtKs",
  "key33": "3NJbLLAFdAn3JdTkiaRsAAW6Jgd5gSYWCVS2MgHcPi1Vt8UpWWaprUWSbWUCSBNGhwLYtpPdN3Y4pXJFmErYFzuJ",
  "key34": "2UTH1PuW1GMwxPFJah6VTLn8Z4AzHquY2pFyVjMSTmfmAMdCcQ6NNCYa7dMquV6NP5bCbrVcdJjjbTw3dkJ7jE2p",
  "key35": "2i81ffXPJob3qT4Fo3CLc28GcKZwtJr94ZsWpBiih9527u6vgRcp9Cs32ANuwTfEHCFSVsg9K54wwG2kwgrAkVZD",
  "key36": "3mLAse49Nx7op1r5fc3RFD3tCgRc7St2KTufCkZKKLKzfdEvcALpBjC9NN6BGWYHL2dsfR8i7i1e9qkY9AGzDjii",
  "key37": "51wZM8bSo3PqCiN6PUFLPhTwPke4r9i4vV82BiP8pRKBFqGG7zW3eYXMjtvmJGWSu8qGAiLhPJb7DyQzfkLgQRAh",
  "key38": "ZUbmZXJpsTRmCRRwHMM4vVVKMMTCSbxbMKPJteczVR1ZxEx31ufY6dkPRJU5tzRtGVjafpRiP1UBNe1zmaq3A7P",
  "key39": "5GwcV8PWji6z6MbxKz5msicwyTZxxCmjSHsvRFiKjR3vze1jnq75xRdm7qAgKCaxZyjJ3etCAxaXudwRzmoRvRCN",
  "key40": "4ouTPLpHztXDHmx6wFcZahKRJhA93P5tKN9w9WXp62pVgPP3VofRwFUzU9Dpg15wyS2tUUvKSK3rtVkRCxiJ8Lhg"
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
