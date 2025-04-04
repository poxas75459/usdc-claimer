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
    "pWB4zwk4FEEG8JJcZGHKuu7VzZTE4svwnc3DU7FAMgh9LLmVQ4ewMgfGff4VmdQr9e1DUNNENjrJ2rcB2C9sH3N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cLV67whD94GXcK577PjFeHggzxQ3rdKJAvG9CUD4kfPYytoLp7nTe6cFsD1nDfvL7hMwoYcuJLUP8iVmBdFB9j",
  "key1": "3ei915NfxiKD8VTv5q1DFhDUq5n9KeB3vKsbu74NzUxRSKJGF9PU3T2BEBcyYSVoy8JuUK95scqxcgeUfposBZhM",
  "key2": "4Yxx1WCzQYrhLyPiq5bHoDckYyXKh5xKj1g7XGyz5vQaALqGRvCqQ98RpifhG3ukRwDr3u6GFj7NvLs2rGvdDkwH",
  "key3": "2W4M89kmGQnzF8arbL4QvmUgMK6GRKRXr96zCUon5qAXraUXYuAmsvi7o6o12qqLrJdoqnzJvGWPqTT3TVsg9Zdw",
  "key4": "4RMGJ33bwHwAbRZ7Yu6HLH8g1gUidGryCGakHGqiJfKrnJqC9PMBjLDd1ubMpciH2JtBz9DiXjhZz53MhecwMZX1",
  "key5": "5aT4kngRfsBzwmGgfA7cMPvZf59Rr9gCyBbQsRB61Map5xCASMsVSugVWBGTdQK5LJL2mdymUi5TruyVATEcgCHW",
  "key6": "5VBjX2wrUxGuHjGakazAzbHPWApT6si7yiA3M7QmiJAfA18dcyyCWx56PPH8yxTBFxWMYMQABYJLB8QXbH3BcVJa",
  "key7": "3dbL6iMkftqRkKFDfzSsncfZY5eXDPaUzbLYJDtz861ZN2zD61P24ZhmLHpQmNCxT2hWSkA5eurg7GsWFVdjGKQ5",
  "key8": "wEEXyt1jzw4nUDLtAAjCjkqqNCgnaXQWdQtho3cd5VY3PGc7Rui2mpV4J3ZeH56jynh62s6YdVfHAwe3ercWZpe",
  "key9": "3Vu9wLU4kCx6a32YKzJ7vrYBxPFgjjykrxdkxEkUkjiuqUeG2XrAoypG8oVJVFB17PRyPTr9odJ9i7pjoyrzGKCn",
  "key10": "25nHwhj3GcAEzxMcpGvBo25dXLvRmfjks3oLVBHTdNHMzHFFZ7JMRNWUPWa6hNtUnwVbq1KCu6y1awLvdPxHf8ez",
  "key11": "nmkcJ9CaAkv214R4T45YkrzQ2x2ZntKFWXbQKGbajvC8paDTAKZK2LgXQ3x1WueqNfNKXvn6yokLfb5BpAvMW9c",
  "key12": "61wFKoaj5Z4ZS732fGjzxADUugFCC8FebeziujbEduUjhzgFhWTB9dSz46Kvyn2yER3GHJ6YxhEtjztyN8iCjNfZ",
  "key13": "338e62JjzyreinwreqwobzLr2867FjzRjUxinQ9D3ZwesvrGcSoKK5UJ41rfX9MfNASRLPho7AaUXcQfQCVxhR9J",
  "key14": "4e82TDw3YYFE9GAGrNwsnSNfJxmDgN44RdsXxCSqQ25uEMwu2vFMFjc6yma8R6J3kRTV2nSnEZRiafChMJppKw3c",
  "key15": "4G148nqpHV4qbaNmLhsr3GaJ69bmD6GEDDFFtSdYBrR3cfNBiwJg9Qqo8TmoraUgaodf52dFJof5FLf3SQ8BiDZ1",
  "key16": "3bogknvsaSW1F5dAN4iWBN1M7AAwMVe8De4vnPRWvdJobMTuNaCE2X7F1sWhKbMJ2eaNL4vt7dgXjaSdyewsxjF9",
  "key17": "2JDPgdJaUNS9aSLQvU7vZf1sDoPehocJzTzPo6avzFm1fzSEYikpPq2EkZnrCCyKAjDyLmqLXeKCUcMSxYBxV1jm",
  "key18": "62CRGt7AwJKxojV9AcfQZC1bk4yqis77hP9s4QajMGXrd3ZnPao6V3ezfwGmD2oYYezmpk1Tphi4eWPAJdnNHdDm",
  "key19": "5Q5P6fp2qASSFyXsUBzK1FVCmY3sV4W6oYyPgzaTyB9LqrDJGEWnALz8mraUsgpkk7JjQDtvDNFkaUxQvRaC7aPH",
  "key20": "B743SGuyutbQQSgwyvNiuBxXxt2D5iVtDxzgPfcmBm7BiCtP4sKtFskVntsS72YqQPRBsPHTmy9rxQQWTBKECv3",
  "key21": "3aJkKLDACpnGR6nYm4U6KnY6RYXfkFa1VmyZXxR2HZVyerZKBsh9p3A4HWoVH5gVt4G1oMrsTWZFNgGjGPwNNgMv",
  "key22": "2i17NUhfUK6kyedFayF1ZBf7qZ6ybxwfYzPJVioicmWZmtSJB67PdP4qSSoY7pv1sy6cNxVrVW9sdVZibHNbG597",
  "key23": "NaPJmpFGMYtLFzqqJrqjeWRp7cybGJ6yjqVYyyj34ntSK5Aomw4ouZxczsL9nsUxa6BtGKCyZHeFvxDH4VHXe93",
  "key24": "qKfqL6FJuCaLDzDkConCDSe1o3dhT2QW96Kx4PE3N19J41oYzvmohobWe6Dd8ULUgBSfe9CKzAvRDbiZMdjAiZe",
  "key25": "42dom6j8sRubDXopKdzgSWq8MKRaHYKLR8joCPjjUhr7JmhT17kSFTpngBhjYqEs9b7QmUSkUPhhgRQELGUQh3v5",
  "key26": "5vbDTeEXoqTfwNBadYhaqseSmCQ2NfjR2dPkQuGcVkGWYsbd24cn3KEeWLkhUtvvNRue3iLxqUDYPYY5sca8mLPt",
  "key27": "8N4jKAsvtMq249y3cLmhoeP9A7MGAfhkLdoF1TWrAFPqqNMhzquLfigRuv5t8fDXxzm4VPydm2nVbrXCCVnpW9L",
  "key28": "3t1Tk3H2DPKMsbjptknUXQW35VufyqTLEB9u1r8WovrfFuhSzaD2th9xe3xPsJr74A7Maavwn9UPxt4n3nsaPJRZ",
  "key29": "3q4gN1aawE7AY2WzHkqnYNX1FFoTFBX5RQFAqK8fykb7JnB7JGPyYGWh6rCLexjjaEcqZZZhLNWPpncb3pRgP5iW",
  "key30": "4oakUweFiDMWqCP83mQQSxfGHYj3EbTQzRQAj8DKVpYaDy9kwtACxEwZx86H6JN3sKeVGMMJe8Jcd4W6qbRVPGDZ",
  "key31": "YKFNVpidunuVQ82oPXWkEmP6khF6G4JHxdWAwSunzK9zECrBr5dbEyvky57fqXbpT3PBLZAXi9qYZbyZshh4knd",
  "key32": "2R2ZhMN4ogm5ZCA2TeGkss3xpMn2No8Kf5zjC6zheFmdohmLsLdiiUCXZcYs7VZ8usjEcfDwFSax3u7D24Dz8foX",
  "key33": "2VUjGqaWLTe599EWwsgcVHK1AJN8FFQSHVuaFe3QRyRvtt4z6uLcNSDGxkgMg3bXGCKcM2CuAp3SUmzkCboovHbx"
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
