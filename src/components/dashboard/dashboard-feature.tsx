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
    "65A6a9A8GXQFPH2a58HxgzapFKJfWGGsBJTcPTEXdjzgM3ejsm4pwQVerJqouce98MnKdMxDqqLMenv5tFUFUmbB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "amnR9QpfFEVWTKe9hg2JwmBjbinQ3E6ypoWx76ni4WvbNbisxD2a86Pc3rrXYgQAPCma8goagJa8z9vwgceqt4X",
  "key1": "wZH847JUvgwwTQyMZJV8wdkqbVTmLxXd1TFF4WiKFdSTPNAFjeH4o5wK68Rdrkx6FXEQrwJZAjGmejJqutoE9by",
  "key2": "2h18itrnHXkrUUh5e2JPJqLNo37RNjwa2rpxJsAiaRquBTtez22K2QbsCLCtD9GBAhuVdhyTzL7NZL1Hzb4qosrq",
  "key3": "3WnxTrL5A5e78BUgfp9uad5k49JRFkbHWJJbZMTBe9eY5N6rNoADZqkfLCymLBBbM18rmj11Ko2izkF4BL9DS6om",
  "key4": "cChKv4bkUusRu1hXFDjpBxmBqUijjcVzh2c7o9rctD4ArwkuQYCtVztRoJ7x9so4Xf8kMuui2K92yatsuJdbayP",
  "key5": "tEPu4wJEt7bjjLrtE69DaxVSiMBJQvfyusGPe6gaCkCCPND7Xzfn3dt5PdWWWXgJyrUSxhMN62A8FMDHsS42maX",
  "key6": "2izYr5i5cWCjeoEFRUArZFFPioCDdoWucFbpmZFC2huYhvhkum1rwpbhvjyNfe5pXmPboD4KC9mgYemvLYjaUDne",
  "key7": "ZPJQB6DefE6BtuB1X5ZJAuaJR6T336PgKvttxaE2yvDcrmxuZiNt6XMpZqSyPLb8xh7ksjKCDYFB5FCP1bh128j",
  "key8": "5tejadaoUyeRrh5vPiMBT9iFDDkfoERz4rSfHNsiZNCkuMzEnLvPRAuUrPQDF9J79TSUrGCfYABFDLkVyHmTQmW3",
  "key9": "26FmiiTS1H4SArD3SKb5dLi3PuYJpip4wPqBEGt6Bqw9xXKb5iE4McPtk3PnGcb4b8sGJXJ2e1ycaR9vuG4o5iFa",
  "key10": "46bnkibaD64ykGTCCZ7fUwrMAVwcEzqwfN8WrbiCobnBheUgz9PVofxVxAbFuP9U8o8ydXRoafGx6bQXD3HSDm1i",
  "key11": "5nucCk2NT8Rn2oGZx1NH1jNoVY8kxzem8wCJxYp64tuFWoteuzPmGLuEX263a1cPRHsQdpWCM9kdMd8aUCeVYpyJ",
  "key12": "2GGnx5a3xtkrhpxLWqNUVfeWFwrLXZpmJ9g3pcguBF8yZ2oR54G3aGSR5b6ULUHDNofXKrdhiRaRWh43FpSV9j11",
  "key13": "2Z9vryuxh7JXAMrid4h7YJ1RrtYAjktTJtqqvALSruyCsMnkEKooaoDk9gSsQzqufrSPRwsP7MuGm4s8Eo1keFjq",
  "key14": "5Few65Mz6z8HTNknTDYCyZMyg4rgc5JkrdrB9XkQ72SoboZ66TCWBv2LbH43qrWyYa63mp17VbpQ5KnJQwXryApD",
  "key15": "JN3bKobPvtzEAozXVvaVNwhssyYjVbtsPK1EZtu9cvsMwZvMz3N87WrLSTWWC9FpjamhAKNNjvFf4dsb2RCrtZY",
  "key16": "5sL4QsBr7C91xrdf7aHBUB5CNTuNVibRZ9e6U41qvNAj4Mc1Lg5BPYk3EebWX22MswYq2qV4Vp2FqStgKXdMudpV",
  "key17": "2xwcY8tVfyQgUdXSZxcFGiDegPzPk8Q9BVzRZdV44fKtQ7XgMjvnCtwjBdSPofCmwcVP974dSYbjXwvbGtwt57UE",
  "key18": "2u42X9NUJyf6bBtSA7GsPekcngydA2ttrhBKDUXXUrXceL1uiGpPte3xPYXvDvrA63h5BeyBMwtpNm2e1JXwGP81",
  "key19": "2ejCpH3brVW5VwvxnW3h4fNZZuw4d6ZfS8iy2cexb549xQDaNPnX9K8SLPDPxu9JZVcCGg5omLdyMagBeboNmrA2",
  "key20": "4o1a3Cubxo7deHeysqAQn4TwJUhpgHf4PJ8vjAWVCp2gHv4Sqpd8SXR5fMKirRV5mHnn8WEA8eNTDyes5nUYi4NH",
  "key21": "3JNUo5kwiaDiTtoijFBVD7TFvkh5rMQQzQaVAHsNnkH4MtjeKhTC4iwMkuv5Y5784vxqr8o6kfHhkkKvS6BB6K6S",
  "key22": "DMoXLUWv4Jno9bmL29Gh5QvxEQRrG4BM8r4vWTjnGYAnmp5Ux36jFertYtTkg8rfeMUDfBNzpnfRdiEYkzjGDZk",
  "key23": "3uMTEJggTmDx9GHZVEASbJUZ4wot12Kpj2P2Ag79EKKhcgEycHu9Tqw36qhbNxfwPX5GfCuSYrzfWc6SdP3wkVwD",
  "key24": "3CV3vxaw65NNFXYbcgf5QGWFWXBPdmtDmPBJxxC3e6fxh2CwxtLnt5a1YYNP4p9tyxpHYMrF5U8aWG4UQ9ns8emn"
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
