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
    "4iBf5C4hyLAmKJ71M7rAGh65gpbxFWxoxNqUNwhCsB8MKxV5qG8cDr9Lx4JH1mwYettB8y1aaqmrUXoE5fwT4L7E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4N96ghPuZZcX4zyjQ6quq2MS72JSWoZin3BgfxrWVcF2XoqUdXHyWhotAbBak3NdW5mqB31i3PhwbLHYzHc5grTD",
  "key1": "535SaBcDLCgzvupc8q83BPoXMPTR24PaHpUxU2wMCmmEbgvR6PXpyEMuTuCe3Byr9SmiTJrWdW8dhGTeyAv8oFkH",
  "key2": "4dZChMAAZGEvBEPE1j2GJGqGpfmft3DekLCguwzzvHxucwrRhr2FVRjvacKT37pUV27TwUzyEVJYEHvcBmesXhxS",
  "key3": "5SaNxqW4hHBwP4LShr9U6T6YQ4Lot4g5BLQb7kukf93DKi4DwqCP7Vu6mU1WjP5V8tCPUWfG3dcMLiXm4NsD1pLN",
  "key4": "4niYqCdrfSBanWrP7Y8jkyELjG9ji5w7WKzPMPR69iPj7ENNLSY43JHgFK3r2gJjEtkVpjRDyR2FBHA4qUFBmPy",
  "key5": "4BnTmjyLSBWjpFCDNvn1udVoa9cKDj7qptPpgNmVvFE9VhJKgeB5n7KX2zgC1pHcWmWVLq1p1eh23rCZXFG29bjC",
  "key6": "266Usr7iNYdj4rUAyT9J2FxtcPHcaJwhkJDmFuYUGreJFX827ZLEdYF8BYrK5NJVFJapJKmqEusRDnyNCSBDei74",
  "key7": "2JoTU4NuNBjyxkbw8uvzBmgi7djVHNAo3av42ohfPmV69mmh8UYpxyRMWaSWagZ1aA6fQzooz5zGy9X3fJYLSFi2",
  "key8": "3URVCzGALR9CP12eTxJS3QAdjk9fTuwv2X8rsMTTagCXjUULXavFJMNUdAzZ9fENQuEwezfENw2L94PqQ2nUAmJy",
  "key9": "2MACyDrxFz28WFnk4gN4xVuSyCKDqhBuBQZCLpXcgqXZGPrgJ1cUhHELEjyuCkcKTCfirThT5Ee5ZMinr76Y67eQ",
  "key10": "2ck4TmYBN5byxdKHg5arscDxcBRFo2Jzz2XCvU1QBHWsHX2X83gzGDutn5cRhD5UGPXox18mUtHPGiKdqFzyHQ9p",
  "key11": "3fSHZS6WBsjr25zzV1VrKwevJgDpHWv8qigfzeMkE9daiDzGkkrzpssTYo9A3P16LhBraFcCHqaA6z3retCcAoA5",
  "key12": "2jTZyJPfAsEDgXb1AhSDr7hLT3Di6bnLVAaN7Bm5A6ASaXiPE6cEqGLRj9tuc4Kbfzi8zGMVLPSJ8kJ9rCQ8dRGd",
  "key13": "3TfeknEe1bFm34Pce9YTS8PxxL7tyVUV9kcc7HzPbM5vTjSaRGDF2uyXEMDccjtDM9KkhqAWuY6f2Lz3wW1kTo4j",
  "key14": "sZpa3npvxdkaDjGQ85UG36QRjswavwmAUgh4XXB95TtmNMX6yky17MhodzFuhdXXhBDxAXY5rUhtzs3ZBk3B8h2",
  "key15": "39MTKf4CDNhdVM3XpKEwcDZSDsUPsrciiVr4DhyY1LerEwx8TASJVifonVScRUW5Be3n7Aann1aVmdvL9bXgbacD",
  "key16": "4H29efnRrVu6QV73nkHieYPffoArRp3NRurYSN1R8NpUAewpQGzF3X4CPLCCYsV7F9qB5ibdsHXR9PwdicE73mGL",
  "key17": "28GH4pwstJ8QnAqpFyv2qr6tHFz6sHMtpgJbXx5SB9gz2K9TTK1J2egjYAWxLgRF7yMMV7xy1u9Ba6GtSTHgjWfn",
  "key18": "5v7eueTKgDzhExXk9b2AYFijbVsnBEv63SNKuUeQssrN5JGyzmyNrQNEShPRumepbpenhV5EFHSBQ6vNWZNm7Cpx",
  "key19": "3faqmDoVJd5HtF29dL3G4VtAz3uK93u5qnVyMDvyfQQH3g4bPGuKRhBnqRHwLNdpC7CDDohKV6d1ZySpp4x7CXz2",
  "key20": "2JHy3Gd5P3yQR88YHs2RU5ibM282EicX78Z5gH1VRJJAnHFLXfoCTkXaAmbp4MfqwnzxiNJGY5jBi5edRtfxBTbT",
  "key21": "49vURgVpt6x2bSoxwTfhDD8HW2CodbCRwLsFPE68Livk66HgEtiVLZQQLDKxKssrmRkPmrXdue9ngffwcGyk5t7g",
  "key22": "2pYG2JCrcc1VGjF9FcCFy8q3AbofHBC7Y9XrC4vGeRawTajJffxbh5WhxNGC8XZyZwkS9rABw8Qm7u42Ja77fbuw",
  "key23": "2cMnV2n57dZs143ohYuUZe1XhheTf35vnT3rrQzCY3VE1hUc7qVaZVmceH7ynsEBvsmnBrbjTCC16GTsxQRh2tYK",
  "key24": "gNv4vFqhHG7Px2WQimLajHSiGYN41bQ1aNaES9ktaCNcEiDDd5uQFcp4niUCumJ6fVKVA5S7weSumpmttCSRgFP",
  "key25": "5hACQi8BkkZPfnCyaFWGjumXg9n64KqpKEbNbbnKAEaz7DNsJ8JuCrtYsC7JFUpyT3fsKk5dF6csRYsJKyT1SwFK",
  "key26": "5EkCfqHyUxLUE6atxGLE41maVxy54b1ZEcxeYWKzeWUD5tYySCKAXUeGcK4EvTo8YPRPnKxf2J9om6pFqZ9a5Wx6",
  "key27": "5GcwUvragQS5y6rFskawSWwHbqwd92Xi84eNbvrzjnka7QjzKD3ZcXUXsfves6Dpo1wrSveUo2rnh9HAhozwmRyk",
  "key28": "3MB1b9j3Za7C6FSgS5u6LLUiB8bjyQbKW3BnPYed7svae5BMiwciy6gz2ocozJwxmoGHASoZWDFTgt3gtpLaKgDY",
  "key29": "2xxnBuLDMCgZHA2WegV224NTbEoapiZhLsstEgiXGkWnH7g4ePWmMgZPGUjFBz4ujn6uhNBZxL1jg5fw6XUx24uw",
  "key30": "5S6ia7ntLAuTysPhm3B2kbwZ8bEV9tv6qEhCc2YQEj39M7aYUpuorsv5zym8mGBwWzctydrAwbuSu1THLUV6yC14",
  "key31": "2cxZTB2P5juA67931SpuShKzb2LL76tmKxGMXw9hN4H4K93yZ9TY6cXCWRMcVR756wxjicSpKrfgbVCwHyAVYdJo",
  "key32": "2ouqzpE2x3naNuEUYixCkUuPopv8ESsxxg5G2UyB6215yuD35NyZD9uuLB2aSmvtDhEN6wJnVSenXKAnCxjvrN9Y"
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
