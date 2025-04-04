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
    "3FF9XkJYfwR5Uaptg5U1c7ziuYTxBTYPLTpacHpbtaK9mdyDEGLpKYW2XVwBRfPz3GR95zJmSr4oVzkFLNCHznUP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5n1VeyF5CAEsLEJ9WyCau4epqVU6DeLZHJmbpLBMzwHapNHbatAaCqVTJ7U2WDeE85NxSwnxNbMeBygyqMRWXQC6",
  "key1": "4upY2hWsKfBHxMnVqrTmqKHJgGdEjjKYUfqK6GKNfJPiK3WmHHMVkPDhxbCvAEZ9Je85PzGCEaowbe7iLJUNY9Bc",
  "key2": "4f2dmkCbd2p9YNXmTVpbX78kS8GJJ8ychQjoDGgNXgVau9EgiiHQRf9BLvqAer7EFfanmRCtH7E964S29CS6yeor",
  "key3": "3KDAytUF2AgEjAVuJMJq3a6HuZ1bVnxK641YM8ZisY8tkczMEX9933RChkgjx3vxkTGbitBsuGudReRZ7u8DRBdi",
  "key4": "2nZSdAvHKGf5HbwTn1WJKtTqJLkckzJNspQKbVRrLiEA8H8C8UCxCiHfquFwYv8t39yV6LibD5onKHWoqarqhmHU",
  "key5": "4N15XwnGHn1wZKLSz4rsZwRQefPVokuNK7DXqN5TKpGk818gkK5ZssSX3h4WSbjJ8zMx8mMigpaLiNTEsLG9sN78",
  "key6": "5weDyGfiqzokeGpBGH5nv13g1gBTcT1u51YXDF47cvzeQkmrvxnQoSzFuhFeVfsqF8JDvx6dTMiLJLhq7CEezTDx",
  "key7": "55yZvGYR8sWzcUMgapYJrEQNFxnCswTpVuUnzkCNehbd7zfF1cZfD292cTX2TcUiZaCpEHQJ1agsnigK1yUaHsxy",
  "key8": "3cAippPrEMeZ8ypofp3r9srmSsYDepBXwcQT4Hh9aDguuovBXutYK277Nh5BG4Ppbqk5uBCXWpm7wm4JkU9WsDYU",
  "key9": "3cJhqii5nwyFvu4W7BDuDdmmzejCLyabQa7uAH2uMMAs6fGcQUxCPk6ZBWoC82M8uJqw1CvCxtu6pBSHeeicCYBx",
  "key10": "5WMrnybDJBE88T4tiBd7gY6eRDw6ikmLET5AmMUnJAwqLYgQNdBi2ioDZSXCpU7YsB1g4dxAbqa183247Gq2sXvs",
  "key11": "2tEHcE3dEVBN6QYr4DxEFFW6ek7oQEwqTBgpRuNG62gfxNRLTpaRp54T2vUfLov5vov1igGEWQ2QFSJ8inid7VGg",
  "key12": "AYrJbDhr8poK5wvDCzwLhd63JpEHbPt1QWuq3T4L13sdGKTXu3w8JGW5wAeQmES8NFo4a7koAJ4oMnox8w3sWtt",
  "key13": "3fmnjyoKyXaYLDEAmUVAH87qcidjK6Ty2gXEYLZfbERXdzR4L54koGwEVSsmc8yZGH24efa8beeuszjMVMD4x3np",
  "key14": "2uPTvLJf3NZfvy87typrVbfKMVA9ug2sChJTqNkRRKsYirA8DYWTRJuAsoH2oLzHuBxeGWyztb2Y73ei5gXsQLhE",
  "key15": "63NkBj7VqmTYmNFqqPkwZa1fVgGpNhKxshUr3tzQcydj42VG8w9eYEvHv5fXZZPctkpeY842ArBQJQ7McSjxP2A",
  "key16": "4ovbJ6XoMVuadiVB2Wp5LyfzrboT5rKirGGsrt8yaWrZzVoXUTEisXewkFxdBA7XZZp4tTEGVghU6hNqmwnX4iYV",
  "key17": "2eWwU63HtiV2QfQg4rYbsdSSW9rPTcuNcecvJohsoskwRfvCtSNaGxTfJukrEhZE2enCzbcShd9AJXSLeAYsMh7M",
  "key18": "5XpCDLUS6uHrNiRBhJvfjggS7RNy4TW4Fc5i8PiHuiTKMnFYHUfTm7H5GwrQuVZ1vNdSFc1sPH4DbBNQ5g55Uy4h",
  "key19": "TepUDd7ctBCpSGkjt8zguF4qtA6yA2s6kzjJjrZwPK4VHmC4KjZers3krV4VCdDTHXHcdupuw9kXf4LdQ8RsSAZ",
  "key20": "ugD2wWaxeN4QDvfJL1ZzJLVQqJuwUHnQE2CNQwA1W5Qf43k8BNkYygowV8J7Wo5rAWN9iXZRAg87BNTjdPRZQuu",
  "key21": "4m1vuUXVyytBvH5fprJh9KpCDPTT3eeG75MNbygoQJcY9U1GVQzJjTjuQZurfpEBuA2pPP9g3y5uHuMt1sKXKzMD",
  "key22": "3qV5mGmJimeyTaduaZw7g8T9N1N6YB2jWD73NmJZJwV9BrjsjGNCEbQYHf8JchJQuwfHqWNoTLTvgmGpx74zhWBT",
  "key23": "5hZfp7TQaypMF5R9U81uHrqbgGmTwg3Ur88jXAHEkgbF3q2i2SPnnnJJos3s2nqmkHAa7qxV28But4WUAhTQXrEx",
  "key24": "5Ted4njCpj51tRoAFzMe75Hb6itamEK6p7jV48p37Wfh7SC5DmwJofeCieocDCdL9phZWxG5VvujG6HoVdVc5z6a",
  "key25": "2JwqXCtxfMNpW3z7MFzJTbcuKNrWYF9s1aUyrqgP3789aZ4JwJh6hTa7TLzG41Jo1KKGxu2BZ1GyCP9SxKSF7obT",
  "key26": "S57BNaFqpJEcnNTVDtSHfxWznoX5P2nZ2F3KbSfHnXkEsqFeuQrKaVNCjLow1je3sjzc71gjJJgxwZQ2sQqUGxE",
  "key27": "3RBMnJVvbGb1anM46PbNp89HYwQKKVfSFamgGSyFbJVhhm1fQfBto59CcFfKWYgAZ61g1FNtGWvSgrt6BehGerrx",
  "key28": "wBgRBfuv1iHpSNtwj88oHqjaxk8SfQekDXZfEboYScac3fz3nGwBinKS6qiaoxZaVimEZtTuJpmeJt8XRVUi5ze",
  "key29": "2dMkgYyKFcXCmBLu1bbpdyLEKBzJWWygz1jtDFpjCVAhLFTWR7CA3SDyUV3uVQZMaBQbETXuLdQMuoL2nTZqAnzV",
  "key30": "3PVPcZXmbpCiVNFCGmPMv823L4BrRw5U7TkFpbP1zkzf38FKwTZFaQ1YGG9zjQmmfZrxEAcKQSw4AeQdEww6qnGZ",
  "key31": "2JNYE7Kv9qYBZCfB4Vfb7KgzLAdxHURuPEiUyfGUF5uZucWvWmLjBMfaDN49UYxcjeKTrjbotPfEgUaMk6BRVfdr",
  "key32": "TWP25Ge9LL2qeudLHRER7HVprPviy7TDekwV6AzWdj5nTuuZqL8h5GvKX9ZaRBxuNi4V8yWNTjS6GWSGfSRkVPa"
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
