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
    "5fq7FjpxkzgTaEPnkzHKa8N7GWMtXiYnq4RGNV7Mj44jizRSDhFi8259RvrHwUHVMZfCBjbe1GXcoxka2pyCHbG4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FEEX2KHoB3ZPmhzFWbrdhVLdovGLJJYdP8zBTUZD7tgbMtYSu3oSgxYXQzwkh9sSw5DnE46e2voQFmP7h1p8ErW",
  "key1": "4eSTLAQquEBYRxDtqqzycrvkJnLurfL27vAqndYztsTa4DsWW7a12Pck7CUBxZ9fys2Gd4RPJsnZrDxoZypM3dw6",
  "key2": "5b2WACUUs33nMDzsn1KUAKjSUNGZ5c9tjEJZvJfBkcknrVvXPLqXXqhcNRmuUjRLBcrUMjh1AJ3NSmNSTtmSyNQg",
  "key3": "4WGw8bcHH3HkfkuS78ui2MQSdBbbMhtvAkYG5HwEgUTKrS9rfnr9opcULRbFxL9wGrATf1qwGE2KsuSw5mE4HG7N",
  "key4": "2Vf2T9MJ53g1QBQfKuVszHLsD5t96goJMu3WP531os2sfPofvP9i9dyUV37f8GwDtTpD9eoxT6hrKZxvRaR8JkDR",
  "key5": "2UMRhi91AcLTKqu1fyqfGcBBLg7NnxT4cQEmoJ4ThzZR14XA6mRa5ooi5LyrC9Vfe9cpdP8fAZqN3AyuxwydLu4r",
  "key6": "2NpwKDy59Vth6i7S13oVUdoHmoFy9mf1YdHxmQVcyeRvg9fXNNcidxTRxLZh8XNn6WZZfyCx3xb4hzm76qC7RSsc",
  "key7": "4v8Yntg1LGPT7LbuSn8Rd9eYEYPVyqTSuE94YoRN148BHY1jF1b4VmsRh8aR7DiRNgVZvLc1u8RuuNVAFZFnsvR5",
  "key8": "2cLP2ZcawAskcVJ3ycUYiaRDQhmp76zan2x8agXJPAt8u2c9Z9mDngzeZ9bzDwxq7ZHMyadTDKZNyVxxwacCShTd",
  "key9": "46vqmeQsAsYWoAudFp8vQA6AwQXQWrTK8KjY4ofoDiUtPWAvLPT8utCoanSo9zMziLshkeoTTquUDMXctAXe3kqt",
  "key10": "3Ez5fnohAeMNGAoiQEzoYuQxiJpystvuHyo6t43KB9FfMwTPWpVgSvDecL8B6fXyXYtuKu2CfzduyWHLZDcKX8Su",
  "key11": "3cymrXmVKkTWK4Uhc3oQeoBxhjcayGFtMmFVt5PKkBVvsSnAMdFgoXsTa4MLR3fiEbkS1FicpVSNyR1UwZM7FQg5",
  "key12": "3whnt1zyCzYa2XndKkGka1nTv5rEMb395YkG2eYwjYV4ovD3kfJUxWiBnVdgxqZGBfXQPXNPQdcjRpam6ofFResp",
  "key13": "ZGu9fpR3LgBMByreBbH5huQ7A8otnGBUvCA5KBsqLVRCzyczPCsnJX4YvQ9vVaDAzpt5WmnaPExZZfWkKf7HK5c",
  "key14": "2VfByM3rQdTWWEwrFHzqzYMqQ3BxSKceH3tVFBwF6q6dGXPebYFeTYACzVCq9dR1rSwETip8BX2Kib4N9bdDQncn",
  "key15": "3o7UucqHzkQaLiga6qawec6DTG5ejoHb5LtgB4uJVRWkqpxe73YZhxfbXCpVq4cNKkH4rwsKJ2xuR5p4FrviRZQM",
  "key16": "4qEtjajzWBt5xrKvsS1Pba8U4QRKF3fK79iPaQqhSrjNnkHzxDrbUXesojovjaM65dyCdDnnCeJNh99zkEDXhpnp",
  "key17": "22bXH3cJ1YnBcpcMQaoyStHuE3zuyyE1Jigr1Tg6ANJQLeV3PEeiP3YiUc6TdJXFNS2h981689yUi9uBxsPfs1tP",
  "key18": "53ypXkMLw2ATD5Zcm6V8itTrHUdDUZozsW3abfKJn2i2oavKB6TJvXw3qrYvWZMkU1W4eHUhEsqbyJf5V6cgD3NE",
  "key19": "5Fhp3Xau1nnwdpxc1gLkt4AnEc6AtHPnCFmNhkFNa1PMnJeH7eT84duEUxn75Ea2A4cMxfoC5G7Aqq8bapmyWFb3",
  "key20": "4xr3GNEH7zJKBtDCTQKzJsDpgpZ641EpAi8XCQ2H2DDZDspVfgxZAWMAmGc7xLctFRkbZKAQSEbSXeUeSvk7UeAN",
  "key21": "6k1iFJdpQiiGeB9aiqxRQhWBs8o36kCMgWBSvcgUR3zonGuDYQ2N7v91tpeQwx5m1WRvENdinQeuv5zVwhnQFDZ",
  "key22": "524a1Kknen4jNfvQGK2iGpkd3uvTJzmtzinkaUtWCpu1AApGnm6V5w3nyeDH6unoGAcp5WN9qeMiNsQnEtwrzWYk",
  "key23": "2ASCYcgKPNLG8cw5Ti8jdvGwptdCWZHUJb9SXnMCppywE6iscSPdYaSxP75QErbVhhawrdgwn4HpsMt11PwnpXzs",
  "key24": "4Dde81mUdQK7HkNwLY241GkJ2ZTfVhBZv2EFStSb1xWwo5scntkcbwJFKRwvMqLUnXMDtQ4v2RtkorbKXAi4PLTS",
  "key25": "4dQhzSNaQAXPeHHsyo6oLWgbptL6P6A57tkuZ7b2BPkapGXtmpvrytYine8vVTW8EQY9iKy6tRT9qGAyc3LywuDf",
  "key26": "2cCpurBnFgvzHh3sL4T2rAJd6Bumi9Yb6fDmPbireyrfTUNxso3ELqLH7dknoyqzRi8C2DPWH7i1aT8Y9iWBC1Y9",
  "key27": "2UJQHtuGUMrpKyCjGfQycYf2JGHDuApqDeJZE82ysBr7HsWJciDuFPwT3cpoDP8visqwoKqWwro2198chCoMRNGt",
  "key28": "5iyW31QkeohWaT3Ab8QK9c7GiSa4pDiP1ahGbDYM3DiKMGao5McXS81NdbL1sNQB56Bdh7cCp7Zi2uG65mkRrFjX",
  "key29": "5UKpArse1xMM2QXBJV5bQ8fytP2BB5hPxSjE5reX24pKjJxGZMKYFSTu4G9xRfrCFH1vXjxQoiQq4T2131USkfuj",
  "key30": "3ypiKvD7kr6kQFe33VUpUxGyjC1ZGo6NkJ6PEVbHwsFcaFR4Qhuej8E9BGtqAjKEHcktsa8BLdcuQUHBm5ZuoZ17",
  "key31": "2VJ5hAMdmSLs11SqPcqpuTQznMHG9G5RLgZEpv4EphrZd1ns8DPtBNFEFma4HwuzFf7sbP1E2tBHD9GQf6ssqYhX",
  "key32": "QhjyZjnDeUjw92gyP1Db4dUD51XzzfXCmfrYhEJikoggEvHwNrcsj49f5MtHcgeihC5G8ajivUuBQUpkU5ZLVPL",
  "key33": "iR8hK4yRvfAxHMNfYGaZnFkBYARtpqn5sYwwRgjdT4AzoEKvpJwLJy3cUTEV9U1PFNSQFGJjkin3xdAvGQUbzco",
  "key34": "51RSJvMyPtZ1REnCj7FX9FGGNHgWteuyFrYosR9q9uav27rnUaDKP1cxf5LttvSf1MJZE6B8VXrckrTXVAMpPCXH"
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
