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
    "2HehWnXtp8DWXhKj8kCVmdqdGCf2RFWkaaNCZSpZWdnNzBy9ThbNJA9XcpmFzEei4wtv7gbwSkMwmdyPGwV5jg4m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sKVMTsU5nTaa63JPETpZ85xKJMzJYhjq1vURxnvHZqQaNTKq3vZT2uwTdMNM2ARDu99KfyofevHeUJKDpgTjasD",
  "key1": "3ieisqDBdHbzoEUkWX2mzwBedgP4UwiAZn6v8cMg67BB7NibVKyrupWBDPLSEr5StxUWvXBohzsCQWSGd7D52vPv",
  "key2": "2f5axcKw4q4kmCqhYMwNcXN8cNMDMUqLqonedgB6k3BfwtvDGys6XL54h9cpL8oS72LjLnkMqyv8UH2LYE3hnyEk",
  "key3": "4GnNPE4Pi6wSTFcodSKrcgwvWW6gNTtejSVMHyrTKodCKvKDCZ5DaDkXQMsLeEncQ7tHhgrBamSdZbULLAkBxLGV",
  "key4": "UjG7iL8whuCahpnTdjTGUrrWAd7g5aUeseo5khT1rmX91cb67GaNZ5zAWHTB7jQ2y5PbbDwKuy4yBzTwnQiwudz",
  "key5": "34aUaHA29jJkACcqakSMcQgEAUJZLZmDhuEUDm6QjC5TZKtdx3GLhfsDwEiwMpcw96DAFW8WRaiK38Jz2EVrkmsV",
  "key6": "BV8ofcsKYYDhZnnW1pRb3FJBvPKU1C8CHEkMm23R2QsPeV1DU9qiBEPKinyBDEDpXRnJqUKkMSUPAve7ccdGZuh",
  "key7": "v7oPMMAhZPW8XjzhoLgfVCK19aQj5ah13VkptvY5ycNe1hAHyXCKGA5xQoVkum5ksKLnn3NtiXGGhgqEwZRJqG2",
  "key8": "61GQEBp6yQm79zybkLEXmM9heVjCa3nB8AkDLsVZhfa69EcyVBVz67bA3CAhSVraj5SB2K6LwtmprZxvQ8MCUfE5",
  "key9": "5KWX9HY7WcGmLamuyqYp1cVYFEPoV6CrCYhhiYTLvRCYU94A6PEwpDo47Bn7Q7PfwD2sNNcyTLf2ysQpBDTjQZB7",
  "key10": "3zQTAmNuNGrZyxvC6suo4XoE6LK3343jYbz4gkE29Q4eEbhX552UpQp9HRHbD5c92fm8wv9pxrXCgScCCGd3j9XK",
  "key11": "5WXgzj2GaitQBRr9cW8W4SppKA44nkwCTmWbff3YiY56zSZDHuDXwENFZq9fJnbjPDsK4wmvLAHjryxBqaUQtoVj",
  "key12": "2F5g7kntmBc7GZwSZycxauDGxWzbdndTcVtWxK3En8Tx8CbbHQ5yuSfTRvoY7bYVRMS2H3mj5dF7iu4oTh81oKwp",
  "key13": "9C1f5usW5EAXSwaFMBxCHg7KURXhYpkw1YjCfGduYafiTKWPpGXYy3r34SdRBToyLnAoz8sQroCvweo3s3toFXR",
  "key14": "3qjZMPSmT8TZgwBHAPQAMAfz6EfiVmkDPLVvsfF8hPzQemzcpWQtKbWoXX1jCAg6yEzHtYYrRG2jmMEawuTqv2hy",
  "key15": "3trpn9TjAeGV3TVZt7oTGT7arqpmMx2SCTGUfLk86wJV5rpoiY5qtQnbXb2E132uZxczV5oe6a5R3BMEZKsTk8CZ",
  "key16": "4ndjk4x5UGFcxbjVYenuDXEMqDnBy51VTBR9s5562if7ve8ovuoMU1Cz9JUvo8wLeNUFjBdMn31275cFJd47NtkS",
  "key17": "3kVJ6g7r6vdjQzx7e3xcL8TsFrujF1bSxwkvCG6agUtWe23CnfapZaHkEZpAnHP3cNMZHFVb5KNPUWVTCtj9W443",
  "key18": "4LZzxa4nbCtBZ3QRRHiKWMqZ2cmkaZA8XTYMAEG2mFcUos8RPKz8fXKL9vogfsQTgn1n4XG5iAeyGYrs1ZkNLRLf",
  "key19": "5RgmGQydcNafaJVCauqN6rbJEVU7Ys5af44fuJ5bPxZzmmWH6FVqWwqnfgT2onUVzCuhXzAmzdM5RugB5NKdah1q",
  "key20": "2nhgtV2MmGMLjDhwgp6cU8AhmAadv11apU6rbCMx1hxarTn81xg1r2zXJeXWYJb2McPd5wbqDAG1Cmwf6UeoCjxg",
  "key21": "3TjDhaA5Q5puDyeNfSrndbDd8N6vBhemUSgcohFWZXaW2ApKDEj92LLNUGQSQk94qDRePfVThESzopntQH77jrSC",
  "key22": "ydNea6cdBgawwc5wd7nrbsHYJEiSVsNHRV4AmAbG9LSrA21Skwu9KvJAW9bs8yaWzvD5cyb4H1mFEF488sdZBgA",
  "key23": "6XEpLFsHuPyZLfKovdmkBmhGWikX82H7y2p5rbnBq3MHNsanQgwV3wTTwKdS1z8cR5BAWq3mdPb8binhevuvGEv",
  "key24": "3yNq23ziFNGUMen58DcEE3etKaxQbJKKYhEEEV5ERhVRQQzVaFt1hG79eXcwAsqL7oLk9KiisAQM1Z3gpoDbWbU8",
  "key25": "3PfL26X1rNDJpWChLhufo8toBHogXHX4jCgjCtzoPmUe6WkhxLEH3vQPeikkFoKtRn9MzELoYonwWRGrRvQwis2g",
  "key26": "5wYoxkSo888nyKPyEds18kFowNAPTDTiR2JimUDhKP88ZVj25U4CMaZpGpL9W928Q4z8efD3LPVQzGjbQgEpJddN",
  "key27": "2feVCrBBQ8U5p93xuSurrftq4yEaKRGRKsDFK43cZog2WQRS3PWsdYn57X3z5WXJsGBn2JjiLAo2ury8aq8BJjgt",
  "key28": "4EuHvNF4RQaJZ5S5Hdt36iaLhxAoW1BPHRLw5e8661CCfsJh2mQRjs3jxNjrHdZddT5MRoRH82LMiUb2sMwnuNU7",
  "key29": "4aGKRvU8LHaqbxJ65oFpe6hmbbADG9twUATyqitNGocnQj4TdAUT9xmqa7mLcdKNbKnFZW3FpNYwX5QVEZNe4HpJ",
  "key30": "38qsVNbyHCNUZWRifve9AADEY9Y2nzyE25awKxz4TqiPSQsQ4vHVyx9nLSjnNTJR7PugbsSncjFkBZ6WgEoVKSWt",
  "key31": "64rmBUsDbTbU4QFDrHAK9197BcQGpT57csERhMB9UsioyigAg8RrU81Jqed27N7rBsKjSQK7tae2fRinWEw4bkXZ",
  "key32": "3ki7ZspnvopbkvhnBHwuAguxaDMYNaXVwmWBNbyX9FiAKRXgRcz6w8kUcQeut4U4tx6LftDQX7wvyGUjUA6rrr1f",
  "key33": "5PTPVWUiuL8MU59dgpYyhsAEixJfS4p6YkouxW5VR3Rk7QgCNSwv8XmPS9BTGUbyJy1aS5DWjqtxrCFFkdZasPPX",
  "key34": "4ui9v5rmU8s5LKAoYuejbZWYTQ4v6bf5PCfbPUKra1PStrveRzyg65Yg63AFZamzoE7Edsw9YrB81ZcJABJTx5Ss"
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
