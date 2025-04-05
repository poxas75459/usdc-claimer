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
    "2TY3vK2Zn9ruNoJr12LfR4AMpcwt1TDqieTzB8p8pNfTWJ2bfGrxduMz1kQ9L8mYvJoX6EfXgu4RdwsyupuPXwuH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2me9ZZhKd4cXAs2MPifw5QKRDRycEZ2oF1UFME6hX7crcUoPXmhgJe85qdotEZZdDrctHvpUit2ucNAH3HwgWBWp",
  "key1": "4pzrQ8TL9Bqg9j6AzRrho9upQCV6BaaQWrUtRmR41FpdfeSPSY9LG7G3udi3hMKq8kQNA1BMckr5D8dSivuLmQSt",
  "key2": "31MZpBYYX132rrTA34B6zEXArdoEFdLVyLAcHNii8gdG3qx4TFcGkzdDxwNAuhQi1VQrkfRb5CtvGZHLhxEwfL1r",
  "key3": "zME3QWddEUrvfVXZZsWBJpLdEFfkLVTB8oCqmjtCXRXF8n87qFNGvt8yFQueT2qrJAPPNs66nQkJwo7bUr1L3pu",
  "key4": "7FyoFUkYtNtEkwYzM2y5bSwZXr13KoG6HmW3dAG7qSy4ySMt9CHSyWsJKLbb2bYkkFD6DycmojfzM3R7ySpXxMg",
  "key5": "4yUFyMvBSAVtFfALHsEjkg9YEnizS6CtQmDQUJh7mPiMPJMCN8SD1YWUSxpUixMn59LicFzbtUsH2JnbRMQ6UhkB",
  "key6": "42oDbj7U7NCRsRK58XtGt6f7BV8vqwsFjghSobjXEFQuyKQ7FY9joAqvvt6akicSbRKjSNcctiiJraa9TUQFkhh3",
  "key7": "5KqwD4j2akZuHeaQcDh9QbQytxp7rwNNNHeYoidWECxCELUGHTLrBYAMamP1jCiXYWorPC2EbbFeSGFCR1VZFQyC",
  "key8": "5Ek4fMBeVU7h6turNQWiJfeQDdsbmuLqDansnWhENp2yPikScvKVXmvaVAUA8sFqdLDrGyztCJ1q8gfBNL9RRARL",
  "key9": "3Bkan8bevadXFP5Si3qTVXdb3qx5ZTw8fmjuRgiMwPEYKxykygVUcKnT5BpPiqDHoLxmwcRb1oA57GfpkpGzE6vT",
  "key10": "4PUXNyZGUFQF8nZeMiMYcQDnCB4p8V6hrXMhMxcT3CvqD49iT3SVkAqrxs5SKc7wenDXKZPBjwRTc32p9sor9D25",
  "key11": "pG5syGBqxfCYEHzkdYjNULGjsGkwRkkWWyuLviMxu3e3XtmDrft9rV7VHHENsT8mEVAaRLJxcEted64khyrKgYP",
  "key12": "3LEfwhXoq6VXVfFAd6AwV1LD5SwCpds2Spgi86QPD3XGhvCiNT5of9h5AHf9aWsZ6cHc3mdFu8oy9Q3ya2wEU3KK",
  "key13": "37WqX6cFgyofHZJEKBa35N6nNhUdXn8jEpW8pqtWMp8s9vwyRFYvSdGXRysdsBHHE8UyrB4wxMvaTokn2iQ5a1f",
  "key14": "qjxtneGr3ok6T3U6KTDnEfKr9m7K1qgCRCNYTnN2Qk8b8ZWtXTq9wt4cPNaNQCgik6WAyTXjsqYY1haZAGWoxHT",
  "key15": "2UqHkRnrYBnBK5MNcdSexhStAozC1PZMWirKVqEn3YDYomRa48Qyy22i4NGSuaF7B7G8e9vkqWaXTzh1w8rWoqhi",
  "key16": "5yieBQ3hvDdRUUcbvVwMkRJP44xw56gRJT1fgveQ6SxszTgc4GzpJpswXyi7qbKkFEXWAJfwnLNs41npLCNEpHVs",
  "key17": "49a9rJrBrHmP75yNBeRFgwoTY9BzRTbUY6txrJtrBtmMUtd8fUEja6b8pyBq523sG7XyHLDo94hwUGHbVqQDg1ro",
  "key18": "4w6jWZPkWSiTsQTDNWPfAbZq8t9KdBy9yEtuknCJtPEyAvCKT3zd74zphQPZLWFNe53GsBcv8CESA1jnUHVDfL8r",
  "key19": "66rkC4112wTTXzk5quwAN9zJDJXJKVmYxwJckA399WoUWWzi14LuM3ca4L11LVkfqzoyva2465hagL59bEJNkGGw",
  "key20": "2Kypt3UawZmgcA6jSSF7hftT1vGe8SbH8gtqXazBa2fUVRpdrnTtmfQVkzXBiKysyvdLVMCzwSabJGdr91zSsi64",
  "key21": "51bhkECJmPoDaxD9PDj1jUczKkAvK5qxVikX9hQfvsbuYYmGuefr8fwbvXmrbhRBgg6HEWtBXVLy7uc3aHs1PGLE",
  "key22": "5JKsu7MpMv7FViovR5XgaoibMB7786psrvjX9vTGmELUxmmUNnuChR8z8EdVTKP99Kh6wSurfKedWm38JSWLz9NN",
  "key23": "Xi9XgzmB5VoFw5g7bA5qUCCX32zho5rcfZL3LsZA3zAYZxY3DCovJ4NxKWgt9sQEBXjidfWdQHoMfeUGvYd26RB",
  "key24": "4tRYvpsQXzSTNrnc3M1dx1JBq9wLeTU8E2TPCdvf6mzB798w4JUzw3jNkBg34wahDRxXqsTMMAdEy5C7EDg6KaJt",
  "key25": "4JxmK3fLxkA7hpagaFxyYJtQckHdDWLvQ3cixJftYrD3DhumnomDAPb3JQeHRx6GwgyeruWPz3TrzpSKwsxg5SFg",
  "key26": "2yGSp2cytaodGiGwVcWZSvXFZ7iJe8E6TFC3z2jYsLUpAK9CdWsphjvrZpoP3HapWZ1RVjztCyrYZd7MtTrgswAQ",
  "key27": "3FMujmtraM1xvf4KFpo5NhK3z3mLx9eKiZgFowCxGeGpfW1JZRCYtP6Av4DajJsj7BEsNNQmtQsyALPapEqiFa79",
  "key28": "4EWgcwwJgUduQqBoanqA9hmTajDQ8kBuDbmg3wYbjtAfY8gZUakHWEAerBhgQmuhrh1Wma8KujNpihT1os8qBk6d",
  "key29": "5kNvqGhVGMqA2kUJyVnphaCoJpoX7t5vVoX3wjbrL7aZMqYJYFQZFTRxujJPdwt6JUTQEyRCv2925RzQaw2SrJVT",
  "key30": "3EEhzg8DdXrzAYvJCRNh8176WZajoix5ymKD3mUvSgSugTK7nBGF3jRGApP5U1bHfRWd4bScArfxqpph6wBcFPwg",
  "key31": "4eJdxxUYneip2Ct5dENPDzetNW7H7EREotL7ZgL86uKu7BLN3iRUPnDJ9Q8BedaGcMSSeeF3rBNRoaF1z4325ea",
  "key32": "52C5TAoPKsQybPd3q1Tq4rrf7CLBtRMp9GrqpKykb2dr5CRK4ni9duioBf5MXL7tuwmKxo6UN8xfgWPFoGnNXmNt",
  "key33": "4rJ7YRSUm8K4wZ26G3sbNjr4XRVT6PJxksuF666YiHKM9Vxd2GN5exdsiR5vg6m8N6YJQSsEQA4VxPRNLQdZMjE7",
  "key34": "phYA2p4pufcayruzrQPLcfJGfa4GVU7fy26FxNpB79brhsCtv438FUd8pgjMjNCBD2EWeNZ1ukrqhAQSiqZ6qRh",
  "key35": "2AAFS8RR1hRs4uKicDyHByfKLCBaG9g8WM4TbhrvnzVqWh1xUhGYjxHoCkTGUtyY751EyeFtsjmNg6JgA8Ebm1Qr"
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
