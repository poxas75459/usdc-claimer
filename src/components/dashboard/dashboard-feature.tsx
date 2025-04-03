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
    "4tbnTu2i1rb1ZwLKGbAnEmCYchBi9UcSg9ZgEgYEYLChHhUT12rmv4MGF5AQqpnYkR5bgGNyrUESCy3AkYEp46dw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jTAoEEoKTngrm6Bnkt34KBwxrbCMTJfC2LpdGctXuHat8pVtSRqqzD5B4bU2Awzhdw5hTq3xRJQLqyXrGJNurN4",
  "key1": "3FfsMf94wfqCmHndhdGuiGvUK3HDHXXNrFudrDpZeRKV8gzQPS454R8ipNevsHS1PW3CfqMJSrWD5edswdKDh5SJ",
  "key2": "3yJh1J6kEbrAsJ88jhifAqaoXtziis4642ubzhQBEtWhBL1RzrjVE1hP6cv7bdF3UZCJPhdHFtUjDrLodRssSZZY",
  "key3": "5M1nFD8HEx8nkVy6vaujwp9rskbCzgsRkr9jysLQtghvtBWranESrCLS6fwDzP7V6w9z8PPSDTDxdjUwTg9ioqmi",
  "key4": "4MtQCTuso2u4DiGouymuBWRs3KKNF6RPeRTUGubH6WLRgPpCN4dH5VxGMVmcV8KR9hsnCJvnfeGzXHvZdNXum8gA",
  "key5": "Hiq8CJSXaHg3DJa6eZBeGMPmAXyRmG7uwqZYQE4LvNJg7nu2WhjbjqBa8fqK8wEkM4Z6hpsQBL4313vH8wegqKV",
  "key6": "5qkZ3dTEjNJguoKMaYhxgYMeo2bGcfgUxcY4brCDfcCbVvmR45o45WiGh3tVW7trZALeB22wRhXyhGY5MNGKKqZV",
  "key7": "3mpk7v5NVzDRMnabiR5gNHzEKRn1okk7nUnvMLYwHmeKwbVnS73UZQ8P3D2286qJXnb7VR8DjxAcJECZf7BpJsmo",
  "key8": "4QCcgJ3FQe3NxKBhbmKMkwae3XPAvuT6z9uoAg4RuXvGyPH6yGmYqz2X1y5cmgmY8PVBHnck4sBYfUHDxXwSbd7X",
  "key9": "3Ymaydmk3RTVtEKkw7dR9r1LHzeFfbNqiK7yS5RqF2G4c7GNFoSkZQbd3FN7Md9Jwy2ngMpGHkp5ffKuv8ckuF2P",
  "key10": "2X1KsuZ77QyEvMgfBWFyf2hdcfWhwaHeq2k9K4Ye1WztnVTm2tjd8REmR2tYtPEXEr8iQ3QNLeJUwASU5DJyDNnh",
  "key11": "3fiiu8yDU4ZKKzHfqT3Sr4yRgQWwZtNy1kFmE4atiZb2c7rdiJJjca7W6WNpD8cRqjEhvtdXf8ZtYLun2MJkyqdF",
  "key12": "4n1sPgBUjiSz7hm2VJrhucAgM2ZmbiucrjoZP7dGkArxTyjTVA1UCwoig1izpzbgTynDVWFGmiGc2Ni6HmeMq3so",
  "key13": "58FxhnyX1goW8G44vrjfZ9bFYiBQ934eNY4cUNPmtcHdycMyAwFpEj7cCeS97Q3suTqFTYcDJ7oe7yjzdjU7VR8j",
  "key14": "4N2N5KLxQxRHvWdqeyg7PekFGJWP7vxfDyrRDVqcwQ5yzGf3Bu9Vr8Hf4DhPurefurGyi9MjvRecJNe3wisVRCgt",
  "key15": "5dBppLDY5DRavRcDRnkXQbcgLbCEBS3cLPai5dGrYJizqN4KQoD7W7TvGLsaxkrWNfSDLEGqi8cKejVHy9xVPFtk",
  "key16": "3hGWa3jfsWB7TZMbMcWfeGj7pUCpVKVxMjVJidUJ6fvpsb4LVY7nxrAxSAtEPHai73Kr46ZfCEjoAxnKzJVN1nUp",
  "key17": "63hAeZLPLDcUdcFrmBKQDMJi96aR3ZTLNqqgC58Xq4h3KiC5DA2AVrNKprie8FThAtg87DW1UnFv27Yd5v8DDfms",
  "key18": "32BBN9BbFGciGCNc9izZWbw3oDxL2h72Rr85pKjvHe7GyCTvTiyHNy3D8EswjYW6fF2m6ac2JSg7tGUhSBZXj4NA",
  "key19": "4T9PDvWpfKEqeaWegs6kdhow9oBDzKRreza2UwdSesvP2VH4nuEroAA48nKSQfyJaMQXER8puqwEftzbGkPhoToe",
  "key20": "3PyY2zgjAvbTmoAQka2rzkexqs7jf1DBMtgL8ZuPsi5MP3KRuYWxd5MUSpy4NC6FJXm8Uv3DoCddNgp9VEez5UNC",
  "key21": "2BKuTV9JwJcTH6RaN6c6xeecSwXJa3k6pvK2EXSoN1Puu4TpknXfciiNYbSkuxH4h5TM4m9C2JiAAcNtrcrYBcpu",
  "key22": "4mDoKzTHSVhPm7tEobXRVB41QQ81P46goCE1wvj1nSWQ5meFC5K8UDWoZCvEjKSt5S6L7wVLg52GonEWxgeeGSKN",
  "key23": "2st3yffKSwjnu2uTJCTzeZJPTeXsKztR72NhHK5ZzAmeJMTdVyKVuManfp9eNsTCZNMX3Sn3MQherSKuYj3Sf4ra",
  "key24": "woYV9TGcHHdPA8Ewhj8mx81yQGiqtwWKaaUiz9SVFWWUTnwXCPvJfQk5yAFeprQ4tJau7jicUjTXEHbQAQ7pq4C",
  "key25": "3e6odAJcx4H1ComuVw2MWuM7gCQrGTuxqTxynmnwJaPaQoL99dRs2oWReSdb95S5TQ9xVX3W3RtfuF8saRshFyUJ",
  "key26": "4oSPD4ZAodEsFsFmZPKtLSyK6aPbziQJsF5xXqV2cVNtvghGEKGzxjzL3wo8dpig7v1THERThvmQfyRKra1EUu6f",
  "key27": "3HHvGFrWMF9BSYahYakr7qeTda1jgY1qJTUMjNwMshhAMDxsqW3S7Mj5WgJWHrvinJNo9QnaKK78t965wgFYTAvP"
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
