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
    "3UmRKpyq5jBBqJ4FG6PZpFwoUG62eRgK3KSWjyohgUZmrbBsavDCTfFpWeswvyHL8NFEsau3yCoJ7WAd2j26VWxJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24kEXqvnXqnvQzE9nLHU9cWfkWe1i66hZNny9u6WJecYJRenoz5fsjid8y6R34oJwk9vdL9hGDjMYPQB8dFB7xmc",
  "key1": "P99hgFu6tN9yvhL8jxAJUMSqiZ8Je8mcTa8BK285ZRwvQRaJP9vDPwt5LbozaVR2LegCBD7kq8xgStxXBVeQ1uV",
  "key2": "4Za5srs86UMMNxEHvCnVPK2ycysuHBXA4b76erRnVD3xEesPYTJ4ennxM4pe9VBPHhAr5FfrB36r9YKfCdQMwAA9",
  "key3": "5c6KbuBpbQp66DMGmocEKaqVQyKsET954Kvr5u7VZSJeMLxbhpF5NdrZ5aUWQZmmXzfvj89bWEHJiKUUwiaq5gLu",
  "key4": "3hTSHrmVGviBhWZ73A8JRNc1RuNMw3ATqYADKt4NrmxseEYsMCJ5w4LM1uGZg2X8hvQgRKEB7NWVJ4puqo5Kzr66",
  "key5": "zFggGo8zcBYM7o5RTFxzZxddk23reU9BtALHVJVCR8D3cRAn2ydtosQrDkZnSSBgdYgxxH2sB5U5obuabVdwGRE",
  "key6": "2kyotkbh6Yf7c3zgZxCdcatuiJFBkUBD42zPYxMNt93U1x3wmVdLc8VtJW1iY27DajZeh8Hd1kZkHBXPntu3fxHL",
  "key7": "59Dt3fTsCTJtrvqJTG2CQDwQDVCFDRPHN92GBf27j7FgxmaVESzu9846om1Em2sAaufEBX9Li5axAq8oC2ZH3PFU",
  "key8": "2JZKMbQa1FUmNF6XUevNYocGjyES2Ckbnc6YdFYD1CSW5qXGyDgENfTPcRYoqvkocbkLVNm7qc6owM9UAePoHVVS",
  "key9": "5nCuoB2zHnj5eN28Ww5sVHs597yvBChCtvbTvbVGn98oXBnrS78Ldra3YMq1q4hSjfQJ6x4WGXm5SA6MAStem71E",
  "key10": "5P471NDr29MFbgpsfL2sQ6SuRis5arK3UAmYtGptLqL5k2QRu99P98GQyQ9KC3YyvJRYJRwGMRFpwLc5AvpcPEC1",
  "key11": "42jeQgFoG9nHnsUjwLcBzJAeaUxVmkvo6sRrDeE5F2X31ku9S6HLd5G7shqsqE9Wks1wXab3Upz7Ykw9VA1SqQCf",
  "key12": "5SbBdHCUGkN15ZnJpsSoP3An6J4mZmwZ6rckcRpmBGSkistdD78X5gAXPdXBn5sZEqbxnNYMPYrwTpFzzroBYFDQ",
  "key13": "4PngFhic2x2cchQDDokaXs9bwTDEjsRnb2ukBXEAQgyXkFmtH3eU6Jg3mWi9MmuAHW5uoRpxSiSYkfwL5ntN9SGN",
  "key14": "4YSe1ZTSLwiLfzAJKgLZFmQKVrgcudKefeWT8b1wo9M2hXCf5X5yAwiNGJi8K6A4U7Xe9c8iFcC4fyWJM4R9YAwP",
  "key15": "39ao8dcPviQ6em21PuC65mmcVrWCNYbyGajE7jW7UXynfyyMqeBibtsBcmi34afEWgJrKSn6LJBAcj86eg8jBmn1",
  "key16": "3MGfSo5GjTio3EhtcVKfaUPE5WMZtKqyppnTTEZwPW5yRFAmpVP1D1WZZnjbiduZyCFDsy7PXB4u9HMzNGwefhqr",
  "key17": "5qeHrdW7xCLvHrzMUVQnVdrtzGduAn8GjC58KyKLPLVoNdTxgDSydCdZ8HTzRw9EPn5kFBDSWoQTaBTEiT8gTsqX",
  "key18": "8eWwxhUyau4b87cVeqnm7VPzrymD7BrTdbTpm2Sc1fDDavs8o5DsoXv4htdTr7BvunVgWhCCn68sjhVb1CqqGsU",
  "key19": "2vQPB88EQfpGr8YXRZ8N5EFsBpFzvG8XJJ2ybDnKNub3U2LFPe66SGbRNAWWktHHejeBsa3uGK1sfoUEfGEbNnbZ",
  "key20": "59J5nuKFZgJFkTxQQAdDeS5vRKhEr66PWfspEP5yexYLFVR8K142yWeFEqjWGinTzkTueBmQgegWLtYhAgWc4yvc",
  "key21": "GmhUA6Jog1ohhoo9qenRkRT7AffRnW5A6bApwCgf11tFMcDFAKZiWs6sDJs17cZaMrfrKYTbkdrL3DTjHuKzMby",
  "key22": "4Zh4iGrHdPfQ8RZBXPUT9BuUs9kMRyA6r6isjwVuzAghtsE56eyh11QuNc9nJFcQvbRbR7SqKjQ21sYLVc57K94k",
  "key23": "2YZctR92EFXmxESiBvJZf1R5sVuk4tM1EvENJfuhpyrryHS5L1Zb7tnjDwqeKaAnQbGuzJ71vR158BBH8WRbeHoJ",
  "key24": "2G4qZX19XTFzcoxjqtK58hsKiL1fBFJXqn5WXKgwRwGmJWLJANg7sE459yZTx2MgoaUEF7XYwmdsEF62eBoxPsBM",
  "key25": "2d2SkyKQ2Ea9tPLy855p5NZhWG58vaiToTx13cEo6kxVuwbGYZ1GYd4iga64bdUe8PC4YusPBuADXD8S1ZAT9eMF",
  "key26": "4TjQbPLGVvKh5tbNJiBdXy68fGgr6AvfSmZbR3tK1Be4KLtH49TB1hfiVmU5hxi8XeBtp43BMWnrGgybQJTQeH4o",
  "key27": "2gVaaWgbqdXfUmBG5M4GNaeffEEmzKsxF5Mx3WWxRZh2KHgSNLzgs3L9DwBBpuh2VK1GSpeJaMwbXkTRb437nCNd",
  "key28": "5mC1kUNxEpAYDkwnvqwCk5mogFbrP1eouidsG7KWWa4TGAm6JLNGG5iyXa7k3iwzkLY8nhcbAGhhVWKnER6ZMrXE",
  "key29": "5JhBy2U9a7FhvXzWnyUBRiu4gUj8wCGiQtiPLydV4Dex45wfw8be5BNnAeEgio29MGdxZfXMaYrLBksRu5V9FNGd"
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
