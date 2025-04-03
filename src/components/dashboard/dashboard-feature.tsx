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
    "pooissTsEhbGjTrwDGF5yxZxA1TM9h2XqaJsNqdtobqLatEpBJK81AjqoJ5RntGtEeNw3a7DeFmi2rQQaKUbC4G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4C3Jkj9pzr23yFizMtVfT6rpSknccJrXHH98wqj39iGataxCWetRRwoxHJExN8EiE6Pf93NvWCzHeV8WoosHLMBe",
  "key1": "66Erf5B9Y8bnurgmucxGpYKcPZHb5hiH2fuVFJZCnHaXjNNnk8Qp3daR3JMVXtm9d1EyEJApvVjDservmMT2Xcgx",
  "key2": "1TKUcuMZLgCzTkqXGRyLA9jKX62LmyhyLJnSH66DfjybPScY8DTqSCtsH6Suc5HHqE3sSmz5uR12BkZCCb4Lzrm",
  "key3": "2fjrJsKkqr4KDTejdRbdo1dgPhVPe67Lq9VXtDFD9A26G4crVz8ePNCVKmnUQ6UXgMyRJHCTN1ygDZ99qRsbMezR",
  "key4": "3CqsfZJYcCUHeczGmeqBZQRLTZE45zmLxsbqFnyJ1nwGfUKu52eSqw2RdHfXBNfEj6i2DFyscCwYbhbmAJH4PZDz",
  "key5": "2vMacaqZmsxKhGY3vGcxBmShmY5o3zo5sx8b25C2njSM6rsM4s71qPvE665waoarPe3PdxHYufRTKuURiQPvDnkm",
  "key6": "3NSBKMB61cF2g8GUma4uUwbcgJpPpwSiXi57WzZZSude7eGpJmCK2UaNa1mcS53t3WHqhWAAsvX9ebQQdQ2kRcNt",
  "key7": "4HiTE9g4XUjNrAeaWvdXvp2vHSGDT5kZAQdjp55VfeC6nn12LkTAq9UJYsQuCBiqYK4WBY59mckx77HCQ1pjeT4j",
  "key8": "HCd8qdkp6BGPKBpdV6vGayBuwRE5gQPQv2Y2JgzxArWPDuvTf4vJRvqhB636ydjKpW2xi3tfkJBDkDKKF8szVeu",
  "key9": "3oKBshCUvuYiq7E5U3kBS6kjoaLHou9bKiqnpbQkugPiHADPvsfYJKcTvo8SJ2yDiLpnL4qZXJJXxGDDFV4fn398",
  "key10": "3kHFYCgc9vFeAqrsCkZktmD5rRkmtob3GCLcPb5LHdGbopUd1rWZUMUepsCvuNgWGqeiNz7XNhYVF3UfehkhtWjA",
  "key11": "d5M1KyoApWG814ary5mE6hmUb3U9h5QJvAGjKzo9pfJxaPNmHyjgFtNMGVCRUJYWHsYyZVkc9zr9eAZVBsHbo1p",
  "key12": "2pKBAjaxCvpTWGNLPRS1UuGWVfzE9H5NKG4LtEnsSNvi4VHpWyxscjUVEhVpghPbZeTThZLEPCjjVEGD9HoABpa1",
  "key13": "41eAxvtzceKt2spLiXhh7Fi8n8Ry2nsMLsPGW31t26dJ5DWFu4mBdbgTejune5UA1bxeKSv7rxHEGSNLEp163TcD",
  "key14": "JQrEpPzr5HYaAsyW9RFiiUJU6yhjQZWsarjdsUkJyBr6PCcU2NTLcPtPCRUfjJTGG3dJ6hw4rF4oe47GLHRaG9y",
  "key15": "T6mguSUFev5Yy2iu9tPBkYKqgSVZZBFpmK8qFfDG2g6vbzvYPezhHAdNjrbtJzEUSLQjrkD3JXrHvCWHXjnTNCL",
  "key16": "295B3T1RhmWa2kjAM7v83sCfcb7D1woy2q4253MSoJSzHBJxVJuFCeRcuazHA7Gc2VKG8McdRxx9hqgQvy7pJxan",
  "key17": "4N59vjWcEsp1gQU2K9wCqA9hKCbJhiECq5iRM6vsh2aehMvrsMFU1a1quKFmR356zYNHyrZFaAEG6Uqxf9wd2Mok",
  "key18": "3jpZrFqKACBe2U515QEbe43sT6KdvRKa9X5FdZnTWUMrZ4TkijHxNwsg3VVyCge32amCF2MpvfyBJRD3KwqTtxkj",
  "key19": "2tPFor1B13Po6QA1UpgUAbFd2nJy7hX3qdxqoMYvpXCGf8bvPWXryGvDuigAFP43Fnm22EXi8s2n7hY4Ydyzae34",
  "key20": "65zS8fsYJUgFQr99dL4kt3BsnWAh1woMVuVX5Sbt9hXFkyJG8wqD9iXd4RhUn93o6Rjs9f9KJXbdp6F5gwRtWFVL",
  "key21": "qfnbc62Ma99c9e1eXjX71FSpxHeDaqA8uFx3yZ2fk7kAvE5AVos5hBnTCsMj1s7733fGJ7Z2QzVmx8avxjEhQJm",
  "key22": "3t3BUzMDA78GEPy8259TZ22JCB8vhZvZAUUmKuDQAXfvCcLJMXyd5HyyrUZGXxfZmdoG9Sb2sgaCnm9Gp6u2DoS4",
  "key23": "MsCXfuaEjaLtjQRfz3yEwUiwBoa9kJoMqoWzz1w9Uqg5JBTgxAVEw33TbzfmCaQtjvACnMuLYX4a2mWrLEsErH7",
  "key24": "9TTd1j91oPiUc2ym3n32LYmXteXApe9hQqErtcuQXbsEiYks8iqQdv8t16xEEvHYss5vQMkUXbja4x7tFMP2CGR"
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
