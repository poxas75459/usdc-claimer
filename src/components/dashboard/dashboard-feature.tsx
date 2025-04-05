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
    "4pSUAsamUY73qpGFiRg7LbFjmGZUEBNk2xzGZpTgswbntPrB5sf7yHbDLg8osAsNrZ2JubdWud3Dix9H62ZRP1uM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5we9SDeWNoma7fMVABEyXgW4sqhRdZ3Reersw3Cq2emk3Z2gEvZWk8LwcRBGKRX8fXgqijp8M14cNycCp6EBh6XF",
  "key1": "2LnSGPa1X1jYm6ZTd93U38EHRJYaLom5HE4fDdTSMLB5QGDDVBEXpAMeMj157BgDFjJ3k9oQNk3SXwtUmK9sQ4Jx",
  "key2": "2kngNQ9CbfyVE2atDTaH5a5ajoTQbqgc6p6ioveFPw7UA82immySPcGowS5PAXboKrKTHqiSfKwN9ft7idWEPX4D",
  "key3": "tkeoJEkEmy1t9vpDY9twHFnTABzHQMb6ZeQPhfBkvBFCm3EsMuBrGWG6doxw21wSPQspiwMcVwgGGK1rQQq5F3x",
  "key4": "5G4mFyuhBHMUm462WZCJseW6Qy6dRB73iXL3p6oPKi3o87G2gvN1KvrZ69Xz6mRkyocPdTJMDGoR5tVjMLsMUiZW",
  "key5": "3m98ks44KByq1KZMzqMHasYyzKqJvdtSKwDswT3NuWBgrZ57V2zMrN6Z9nq6Pxq3WpzKx59XU9a9ZEDz9ZK9jGyY",
  "key6": "39sv2GditAonfHa3Lo3oFrsc8e2DwFLfnQsNz1A84PtsjyBiKuHYgjxhKV8ArTjRJzaiRMjbJxGMgHyrWUHsycUC",
  "key7": "3XaBifxuKwp2HL7JE2yMCz9xKMWR7V51KrDsnLgCD4fRsS7WaEBxwPh7vsBNfHoaH7ABzG9ukxX85K5MMy2H526b",
  "key8": "2PTnVxzg85eW5rmdBSh1oMT4Z6zv3RzkTwxvYWXkBQ6emiveQgXXuVAtkZCCKCSMwBLJqbJChXC4KE4HDZ2XHUtz",
  "key9": "3brH24B78XosvVnL5HNfBFdbThMFemkQGTMXTZifQqGP1uHxBHv4sVAR4gsbbnTV9dexxsu1JSr9KQ3jzzxngfjU",
  "key10": "2aaCkuiCdaiYRn3fjUvFiry8Xx9b5YC3axLVZoGJAqcxhGeNF7KVpnBqViiqAUQMwtjg9ZQCa7vhVsmFYYBVNpy7",
  "key11": "28A8PaXhY5qPtbp3oGYkNouCD5k5KmTaDGQMoid3KgxHzuXYBgUQR9uT1mspc328zCPCQZjUKTsTgdjHnJtLSfaG",
  "key12": "5wTJEGMzC5ckBASK9a3pEfLyq5KgbKGd3ZHPHg5gW3qpLy94XaJ4w65vFYY9D5eXYRum5r54SUkw33JNq3j5AxU7",
  "key13": "3f6PdLPMmP9ukifq6KZy68hgbwhpE2xHVjKNaMLoRQAZoTDiPEKTkaE4FCNE6PUK3wKYoA6eNokdQnsVX6bnYQ2j",
  "key14": "2jFMod3AhPZU75Y9uKw3eTVEmBt7c2avzck4vCNXCWv5hpFGvY57j8B2RK7WqjcZJVory3MwFDM4fWdHPwqH4MyG",
  "key15": "3DZt25zL3n9i8KGfoLP5Quamcdr2iY3T2nERVEbXRT4KeAZAyaBabNrWGrLuVU5J8DNrsZj6uyZASPBRUJu3RN5h",
  "key16": "2A9SiFJaah3PH84fq4ZBNzUW9TKdQGUyohr8kTymw6Pt6SePtYxsG4wvrzcmuZY9PBxA3DGutdMCXHSudrKbzMDH",
  "key17": "DmoWCFkHLYWdUBfYZ297cUim3AgxgBHHPkbNbbDz9EMrPZxHCqVMKuCgczmKSLHNPUqGSXS6SxzFW6WRp4ZnpiY",
  "key18": "2XY58kyxvB1rcUWX2ZYuDU2gXvbUKHcSK1AWf3NxTaNj9eDP3Wp2k52dw8FBT3zhWeAT6VsMqBTTfXiZLZzRmWrm",
  "key19": "2apbcQtuMGocA4tT3U17yrjSFsLC4qNQHMBFzf5VCRqoeKCBYHdFCfjPntn4Tyswr1n3ZHcoLdfmApw2p7QycuNS",
  "key20": "5a8oUeYJeGYM5L3wjXR6gdhDgmnDirefpj8hY99EP6gZwUj34ho9CXB5a4wTuXRa1BUPzHGu2MscrVGJLYfMUurF",
  "key21": "22evDxEjRNXtS1byTSt8w52AMbaHF6vg67rhX7wMUTRtfNp7pgff3GFuxVy5PNQk1jsde9oB1EsPe5FMeYiizgU5",
  "key22": "45HVQP46CXwRK5wpjh1ZM2Cjo7JZxnNHvui8pDbdDSz3SidwcQ3nRYjvJ9jqLERDLqxL7sRtZdSyAAw3s25ZMcoA",
  "key23": "4QXFL4AaExAg1dCYo8XvM9QUuymALX9ptNg6o4EeHN6X9NACcGo2NNnhAtYus3di7KrBXqb8wrfBS5AffUhBsBQr",
  "key24": "3v6UDoMp1ziYYKrTWZ6P2AumuS6MwoAzoQuA2PLpZFqdTwPA2irLkudVpFb4tZrQ8hfZnQnz6Z6ir7NxorM6thS",
  "key25": "2nQJ2AoHE66A7o9NwaPUeifEkQW5EqQHHxi3eFBeMKkw4rzaXEJxXrVwEV7GkJwiBKVR7pxpDVC2edJJ8H3hribz",
  "key26": "5jpXCfTtTEGKGrSa9SkgMf8KqgAkmWeMGXLAssY5jgZV4UWmz9uH4A2gJaV2wJoXXvb4muyLuUjkc5pzVAbUiMCN",
  "key27": "3o6VDSYsjKxcxzjtqbsA69udkonoWjAChao5yMVhXeftJHgXrptBRLjvLAw3kxAERDBmYRbScBm23s2jAR9TnFN3",
  "key28": "2jjsV2UCEhqU27SuyTCkaFaK8zJLGXYk74uF4YsDDtDBw4pa7pk2MK4FeAJn7sG2DwbTEV16Tk9P9WetvPLG8dRk",
  "key29": "3Jd4K9j9YGFyAgw8D95CGNpFnUB2ideTNVkqWRWdL6b6X2ypGZJmuq7rQtKyjJnHrkjwHHvZ9MKS8XQ6CVfXXvzT",
  "key30": "tFoxrm6xHAUqNPytcpPZdaSncwnWPA2CeyiMygZpdUvJWzxaSMT9ppgAB4Cfoc1AdLZ2hsF36hycUVStmPn1j9M"
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
