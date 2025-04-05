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
    "4MakBTQndkMpWMDKCdoCTB5aKLTnHAgTcAHB3TG6B99bdrHXuynGVaCLJhGU61XbaW8KtSkXTWuNwGArDKMA4e9F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HysSHxTWta1iyRtkUMLgLU4Xpwj3ZtL2qjCjvmxe4SwHFZiN2yfCeHzeZMZXYWVJgUC45LQjB1HwTubCN819Pwo",
  "key1": "5fKKgMYw3oLUn4EShmEKHLVTBS2XADn3CWiecQGB54xgP6LGE421AFo9p5gkTbPpEbzeijNVwT8Sni2gcGPXhnpi",
  "key2": "z9kDRSG6N3D5L8EjxoAV3YmCNrqJgwgA81tYD4AeaZVhGsVB7BKZgCkLbanR7Up2ax8WfC7JPd3ZEhGrig3tZUt",
  "key3": "4Ex66H6WvoRgUVvQ2pv4gwES3LmgKd7PayGu6f639RvgWDbWdc2Tb2Gpj5fk9Jbncu5kSpQQL8AHJjUR5a4LvyFZ",
  "key4": "XMx35mBDxtWnG8EXPvdiZTFiw5yKLapjo2aeBVU9FjVuwzgx2n6aZMkNnVthkxeeQWjWuCA29n2hEbAniwNnqwL",
  "key5": "Fmt8NDEcvCLAgoVLnVKwqrMJuYV6Mhc3rXHupnYtoeYjzgQp8Anyy1EjM7gBPyJfyBsn6yNkoYwMA7AFppEchZi",
  "key6": "2j6MNt3tTAwuAZC1DVKbPb6ciPiAqEFgUuyMJfJ3CvBtedVmkp3RXpBTcyjChY9TmAnuJAdxmNMT4puGkwyegPq6",
  "key7": "2HPDKwq9u6fGD1TwrXVRHQ3c1mBFf4qpriyfKk94J3zi4vKdq2zxQ4ibHcShp9q6exzM9kQWjfp8mvBGL5BzaZaa",
  "key8": "55cm199FPsWQUMdcrxyUa2ydmSsMtyadmhnKGcWbSaL5cj2q4FiEg5nGs24DLtXzjQkkeTQvxo8xDngFcZi2JApV",
  "key9": "2kg3Vpw6UEJijCV7XjkL69veAMLJjsfBhnsboHRME1Zv7buoNYs4rxkR3WEjaRpDDuZxVCxz7AS27uLHs1dWNZQg",
  "key10": "4BT7NWGseCx2rZfRB3Z763nvPFCvxzbhBXjxsce8U2txb8Tw25S2ZY3PBGMJJdChP1Lootp8juM6Ko1SrQRHUSQG",
  "key11": "4oaGmg9PYqTFtvXDw6SRiR1TYvgWmSnsSnjLYfnTKDQXuA4CHEqDwA8TCGcUjM8B3xB4Fcs4Q4RhJiyQ8Tv7MYiM",
  "key12": "49KYNpyTjr1LeThXvdZJmUGTKBAb1hutaGxiKwy2dQjfsPVuFjiTToATW8m9nUmyKY6UotcdocExXaUixZNNn7g8",
  "key13": "3gVyq7iXCr4vK3Cr2o8HFVtwxv1b7hRucdbgPEKs7Gr8vcXSPLQR767PdjBtFybZNDhXKFxuVw2BpsQGtaxDSP1G",
  "key14": "48vGy2vnTgBiDqaysrqKEPgv25eLxHZh4hj57YLcSSgU1Akzo2FaTfMTviBPfptNPBS2gCaTf2BNdsbtzwcb6Wsk",
  "key15": "4geEZYmVBkdPZkbU6EMt9PQWCkygJFvsap6Waz8URKhrgMazfeiciMqDy1W9QcjkyaKcc9Hpb6p26DCyz6KosPtU",
  "key16": "453xZtVfdirymcD2EDRr1wyKHCoMqZm5KTAgpG9NzxNMuhdPhWSw5UUuaT8orCegQ3VZB1GyuDUUc27qSEaBLntV",
  "key17": "2RnLxFbmwfrrmrefcy12GoNUybf7Zyyc2kzu1vkoyHkaUbxeYaRmTYZfbuaKJcVs2uQn5T8q31Wkbc7j4F81g6Sb",
  "key18": "4WSkap2CaeT5MTjkwixZQiXjbiH356ujVSuwy8sBbS1N92NHwpJyg5m4GXZXuv9LRarXkzHYkyfAP5VARYiKR2SH",
  "key19": "5zn7t2QidECcnTnR49VT2xGR9JWQPQv5KRdEN7EZazpd5Hn2sM4DaewkpU21HKHQ7Ch4apdkPPkirjuXPQxya5wy",
  "key20": "5s7pTYRrgkejQJTThzCd8D67uwdJxoQwuRXHtfRfbM4Dq4VjBNDyfZeszzJRCK5yHoqUT6i2nxhxiPRnzY8Hut7k",
  "key21": "M7chXbXNELCDhwtQBAtVKkhfp4onTxasgmog2pwRbAdTF8qtFmTuBWPUVUXBESzEk3qLjL5UYosJ9JvP4rWTFVS",
  "key22": "5ch3WszK9XjFLLXspfEqpb6Egfq2ejDmFbDU8oCWyxicjxmXJ2VzVM8xKew9YLNDhGYbGgEdm8xv2nRQQZkXiSoE",
  "key23": "2JyssfuM6eTi9BUtaa8Vif7gShc3gpM25xtakdpb4b12A8ykQ8nhUF9yCANphjQfZGQQuCQYsD6ESQ2pCyT3kiLx",
  "key24": "kQkuUAhz34u6W3fAWWSubaiZUrSyy4HiAm6xi4ei5hUdgeXM26ceHdsG38BKLBMi94gvWTXEmNAxTnd9BKcTdFy",
  "key25": "2TSV2fEEaXasR9Keg3W8K9Y15yrS7qQbhwa4RR9WJFRrPxbk5eyKkApr8EgzohMC7HrQc9AEVjMgApFscMkHbobH",
  "key26": "51MX5PoNDEmpSqZQaMdqgu5dYgCn7T6JWYScTWMLFXkYj7WhLrPvv6nahxvHby2rptiXd8HwHiMZvY2RFJuDxxN8",
  "key27": "3qYDox896ajR8m9aj4JhohTnNZCb7UC1cEGHmNEwqfDwMpSVawHc6q8N1unwzuHCPKL8fCKxSpLAD5xuLqpDRHH9"
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
