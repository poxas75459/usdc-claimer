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
    "57kM4XeiHMk3H1vtxuqW7B7AF9iHxC9se4KzEMn7mCtxpeJ7TXMsRXa9jsko57HpBBHFe1vyregBMYwqvuSY2CGx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XaacRF6hR4i6d8meNgf8P1LjHr52knGxUm8CqKKb88WBrccjUV23vathAc7FoLBkpVRA5Cuqqc1qUU1WUbTHGdF",
  "key1": "2AorQFoMpDHXsNFG2xg8N6LvoAGbX8CBvCfZbX7cmYQrjH9ybKNz8PjJBgsRxktmEnj3wPvoDMcQbBmtgFvJG52P",
  "key2": "2XCg4YRcY9W1pz81mEnjCcYDgi6gSVYpt2YQQ4xLFSoTfr5behvL1xZUTGwzAxazAM43kUUgeXB7fL1vkoCazBoR",
  "key3": "61HRVmHayjaYXFzXsZMCN48iUc7NuxQRDWa6GaT4x1NTBtq8HJVjFhEzYNU4uiwQbcCVbCFxTfgrVXG1aXMZjnrp",
  "key4": "fesqLf52EGbMHgJNAzxyByonvmGvZn7Two1ECESmRxgsnJ9FfaoLLboB6w2HE4d2mWhXSc8DAxKoxe5TGgbipWT",
  "key5": "4a2A6pCZMv7ZpJBuYqQsswhiJEoFMb41cJuMkBSaV2U7KusruA8vHqpAuBDmTbaXv3tZTTzaiEFiavZWYPAANEnS",
  "key6": "24wcBkmh1DqGXWfbr67nRWQs2HN9dQLr4gAAHk1J6nknHAmjwVSEavBnC9MPbmmPJPmn9YB1pW4nBXSGH2PwvKsL",
  "key7": "67cAqCcvtTHR8aayB7ctYQcC92PDRmhhgrzJkWDNHp8nAshvvjcKZGnZ7rZEtwVVEGEj6E8ojeETGtGcdW9UjzAR",
  "key8": "fRET7jsaUhDQM2HzDBDT7sSg5VSpWEbrEA1fDmmN6SBxsFRt7ohy8XhWkrfEd16SVkE4pTrc9KVc2ybS6YGpnM6",
  "key9": "5poNmYn46d5oy1mRUYXnDDaERvbEV9qstWs3Wuw37xvXhbk2ykxUtoB9yHsinNb9H6E7XTdaspF6mk3CbW9coiib",
  "key10": "2zKGLmiRzEjcQKDodVe2CVMLSdSVNjoLUMMyt6t3WDMjL5Ci6tApG6yhKdx3GvuzX1noZ3vVhr1q9o4CJXXV1ySJ",
  "key11": "2USDmcCnyMEPfhKRWzMYFFVKUGtCABSpz6VBVPPP9jZ8sMpb1WQUGzBnbcxdAwhPADqebo3Xaacso8dSsbPRsddq",
  "key12": "5U5eBWdhBGQxTQ9dWvVWyesQHdszevYxUSWkWKXSTy1Gtp9RhkW5V8KvJ9viAP4sEibvvU5A1DuEebLkQrkHFgWA",
  "key13": "5md6VfeTGDfQuhCvQ6uF7ZhVyJAaKujhUcRbtrJbdwMZAfB3jTf5XQdakoeunqgXCAfXu4eRfEZp5dPh5cEkPTgB",
  "key14": "61chEgieTKn9RsyXMcpJVC7uiKgVYaeKkeMjCd3aniQJopXNguaLPkYVWQgxzupEGctCZhGdkuk41pnoEphsNuHh",
  "key15": "3HYeEQo6xFrPKxXR3Vody3wXUCezCJ9Uk5Zsh7SUKq7XDZ7Fsw9wbFYza8jJSNGGdwy8CKTufb63VFX37kLcd7oe",
  "key16": "41FkdygfuCKHLfxA8NF2jkaVeWDFLsgGgDrXM2TgGJcM3Nt1gJy2kSicDURR7pDpeb1hNwg2hv1gyw9nvg15PoD9",
  "key17": "5oN5ATLsyjPUhQ8LhxzY6v79BbmyxYZxncjKESMAhSq5k6iADhnHv8g9PLnGM7siLhyyUhZHk378iFat9NBRNdEv",
  "key18": "514gksqkhw8bHLBmkxqz6VHVUix51U7KoJXB6pmuEY7Qoez6i3dsLvMUW28ypjnnvm3np6RLbNRjX4HUJm8E5w6s",
  "key19": "2E39exPdx2FVR2HWRhcQYuQjE1covy2kGrcZvefN2Dvos8jvWUjPjjD6gBape9d8o3qUkkbLCgPRHH5Nid41SKFk",
  "key20": "nmSqmGLeEwdSL8bSmYPK3CLrRJf4PD8keLMB3bQCe64nkCtPYi7zqLBC1k2mLZSC4hMyosUJi5m4AJu9U4B4a2a",
  "key21": "T5dQ71Md33k9xS8oAybJzUxeVjmCst2D4ETHdx15rGq3w5Zn3UwtFUJToxECQDhw6gtx3MGPw1XjHLKMJEGKnwY",
  "key22": "vyLiDBuk3zbJwGHW3Lg9j3JGSpoCFMGNFm6K7gBP8VSQGgjAnB1SWnr9K7wW8aGG4dgAyoFbFF6xg9rtm25dce1",
  "key23": "3GEMpPmLgeJqp6JLGF7jA3EtZRzKs5EtmQY5b5wPUJyGjjQohQw2t8ASe6rPVhjmy3tTj26jA8xLCz2sSc8kSgQZ",
  "key24": "2xx3VeSukVwyPEkGAzkHBry8A57Fn6u4518xoeM6cu8LqYPFYym7pFZPTostpQKPpxv8MBf3ivwZJfNQv4cAiojg",
  "key25": "4CAiLJ5dZxFQxtbofZiEdH985CkVwoBnPoB2pV8kMdrQYXd896KNgptJ8d5QWMVPx4i98qGX4E8cqonte6qByduF",
  "key26": "xLpTD4Qyy64n5doA75rAtFTNBnb1WVhT83y3RLxM9VxAycKQZbDtgRmbuhFKU1G9GgJzE6nwT9FPWJ1JQLx2Ece",
  "key27": "2HVRSnnkhMW5dnSvqUT2werGNBMLvJ1vfkELV7jHiiXXDJseLEs95euuE4KmjZ3T2dFtHAVKC1oa7SBnkcC84wRV",
  "key28": "3P33x7zuc9N99EBbNsxfPC2DaxbJH5P3PJxMpte2zK53mzYP9N6iioKjDy2A4c9w45unUx1JSpomWAJChBQQfzkX",
  "key29": "4Jtfoms6sZ6LiEGYUriDcENrXuYo7qBzYYaawrAzvyMHdZv74Bmty2rJ7LGLs7yfaV91tF3GGA8L3d3dmMmaGtVM",
  "key30": "4NKFX8QKLizVXejeVBnbgGE6o6H2i25mwqiTtTmMm6xAy3xzbBj2K1pCXr8uUYciMVTRUcAqMu8cPV6zxQv1uT3E",
  "key31": "YThGDeXGenXuouERXSiZB4KbifaGsd2hd7gH9xpZ3m9vsEtNPKQLGYVcxjb54pu4TFy16KEqSdUe6Lj55ntvJuv",
  "key32": "2Ubmiw3vdHjcrkcF5sWW4Sf3Tj4Pj9ActpDQK3SxUatMoT5bFKVnADkoYF6ya5pFRNmqkDn2shVHNp8zJoujznNN",
  "key33": "eUmddvV19suGveYZDYEDyhednKtBLrhWeEwXmtsnbqqR1E3PZsAGsQwuRMvX1yGFo6rdBeHx12FSv2PkWJvacPG"
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
