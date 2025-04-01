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
    "4SBsB2GXUbKLB9PPk45YswZWq4gt2mpaGDZVsoJCC5Ybscb5MrJs7yr2fkADDoMYaqGABALVgHrKoTMyCqW5y1c8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45eXkCzT3oNhcydBtV7FLmDancNbzy8hAivpT24Rfix1xLk6GPvXBHbCS1qPU6Tp74bjgdACNCERYKtq2h1SWZx1",
  "key1": "2iGLCkAyHA8biDw56dPdDXXMSs7S3MTaDHRmqmfQQUTQPVbrLTqFhYDqWNcRun66sAwmhDTT29SZqU7zq4LSzk8k",
  "key2": "LWWSnKHU8hz4x56hFvB2ungD49uUMKJ8rYkCvUPboPsoHBvV9g63cPVKA5UvApXox35ZVWCDoKPvmecHhnnHFYq",
  "key3": "5wdJGekXCcqCKRzowHeWhhn713FtTREpsQY8idX1vEwbthZiuG5KgCgkex1krLTfGdXQpB86wFi4VBDVFpwdCezR",
  "key4": "o8NQRgDE7rci9eT52cesusdp6btYvdSv55Tgxn992UhdazSH6a5hVbfjLDAoxd4YWsgUszvi4aTCRKkKbTQSq5i",
  "key5": "498kiWqQXuGG5fnNE4Xu21AS9TX2z5q5gERaF9Pm7P2RmfVLabW65tMSN7qJ9LXKkPSaizFoZ46ZFMfsMEXKtTyF",
  "key6": "5LGL8iotLnmEVEhUQKz1bAkgETTDdUJRMaprpxSJ52FMyZLaRJbiQTopLV8bVb5UhYNiTkV37hJfRo25LwBH7H5P",
  "key7": "5n5yBqMj21yUo8KUEcEGa9F7LzXurihtgom8JijVHTqjYGzcRomMFVkmemYEv8CsUP5fckxM2zWAuAgZr9wfcrmB",
  "key8": "23TTQTiGAbk7MPbGciJv7PKyE1j7usyc8ymx6abXwhaUCPaXDwej54NvP1SkYNzzdLKAcwpEQj2eM8HBah1mB4oQ",
  "key9": "657FfzpkEEudiXNaFvzuJFKSURUFNT9rVrFPBa4GmzW3X72LBYniNSbpi7YoqnBrgh7rQRsLjnDdnisGMuvhTGW8",
  "key10": "488xgFSdmaM79V3g66hcPeghqfLY1wiFD2ehkaJxzoyAzw183xfFW4BEGBEdqzg1Ym4iDBBZFtj1ERsvPqKRErTB",
  "key11": "5111RYozhq55gpT67au5rKTv3xcBnjFXzz975mDZunm1NHWwr1pNx2vjuhfkGJ8B4HygSk8N8tx6z3qzEF7wJ3u2",
  "key12": "4G5PJVj7iRYZpqDo6t4PXXDN3J6NRqyyPv2XY23g27FRnupGQVwerh2B3TFMxSjwcipjGrCuhRAYMRkijSpYG3z2",
  "key13": "55br1DX1z3UVTMuxrgwL6oqasvZr49Hw5YBnMAS6rhBVqH9ENfd7X2dM1GDxsFXVU1cgByCa1tbeqXET27US93Mp",
  "key14": "4Fuij9RXijTtAgyr5WaCS4fqMgrMRasG5KrD1j9rA3bwAsGfg9xKPz3QsGRee5cc7cRhwx4QYxSMe8xVGvU9ti6S",
  "key15": "2hz6wupwRYRWpkcgFvdB6rJVjnqDwTBvq9tjns2QbEW7kCcdK58UpXXzfhbTdLKC9nvihU4tvTfxSMZJdohFaQXe",
  "key16": "4KQkT8fiawiHh7pieRyyn5QugcmhLXpfzMDmBypUGN5bGw44isbEGpX3GCxa5Z2pzjLNiJ6pczTizUu6CnxEE5Ph",
  "key17": "58V7fZzBycHdda8eYJESEHe7ZtxbUryPy3DZeMeU9H5pxmTgA9bPZAcMTogfDAbkDS7iwXaiPvSuH6pG6pbndAR9",
  "key18": "YqZknB4bKhRfHA9oshgJfMFeQYN8sCQuZg2ysQT8DQDxQsfW1xfZzCq82reqvoCH4YZk49qimQKcDtF4yAxMn6s",
  "key19": "i2YntvakArDmmtgubgns4f11wD1Y6RrGZP7wqJCh8YiXyUqvPyEVWiZH9UStmfLXnpbWPqG4tZSFwbjQCntkKZe",
  "key20": "6rBt5XRx1NL7YvMPnM1EQ2jWLtLdHnzbMxcLU2bDGCbvXF4AyTA5MCX1eVzG46vKs6fS1feTNkaGgJGBk76SVcs",
  "key21": "3PJDZf5qnFSmN2nU9yQnkocyq8oHhWjvjw2XFRM2N39eZiwxBnyT6JYMcLtEgCT9mF285Eb6V7USyrAwdv3Hm6ec",
  "key22": "4MGHPak12Xihqv99fh55JRr2hzkxVW19XKVo1CKbMuYfu8RsNK9cpaTMcqQ9EKVAFCM45M2G9eEvmA6psNTnxYHU",
  "key23": "rC3nFfoAVZTr7Vz1ZMGcXF2JtdjqmfFKCBvuNdTG9Q96zgfMHUtfBE3T6T32csfyNQuxL67yUqtkAdMTQMTPcP5",
  "key24": "4biesct73iUUD397rS28qTjSoC1t3CETANuhcmKBYcouyJekCgCKe3QpxqQDJm88JMNaCWbmNhBnPjXkEy6G9UiD"
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
