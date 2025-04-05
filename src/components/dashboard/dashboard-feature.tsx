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
    "4uHVtjpoYy1fVpYNduJJsBw4BdWhPPoSGsssqr6ev8y3sJKWfXfzB2pTXLSrhi4XjLKYbxTgSD9DnB19k3a6qUiZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HthnsaDWyq8cK1HapErPp1HjeAqfqsTehyMvVUcF9iKVkFfNY2tT4dhKNtEBxtSbKcRRkfBCSvgfuyxjLQfzSfV",
  "key1": "35Jcnu48KBmtL8gpXfDwosGQLWvWFF82emGFzzCZo3dGykTtHY8s9ForjfTRKySkzDnSkpiJHgjJE77FUkEP8fhj",
  "key2": "49FACnuvKLRPrGHWLq3FmgmXD73zNLqTuZGPXi294staCkkQSC4cG9EjFr8uqLEonAsJcL6DTsgnJ8a24iVLnfnq",
  "key3": "4jh9pFmsuQWStaxTkT9eaXeweTmpzvpnooXLQccua6hr7zTrVnUpiFWfFTKzWv73Z96jUc84CtXrjjZA62VU7BrZ",
  "key4": "5m35ZpaZK5sfd4g7NompHc6H857byiSbNtqFzx1zLhcggW733YEXShpcf92KkyFsHqyj3bF7LEaZw6x52yGBf8ny",
  "key5": "5pPekwp9W7ezyMA1dMtF7tvn1w3eFduKLMrxPjkjRx2357bTpEaxJpgG7jMf8xbdoGkkdEhzewPfg8wryNHBNW7T",
  "key6": "GWViFqrwiQuMjU6Hs8Xp56Syi7P88LufsXrQe3rjTh8VYdJqiUpW7agHmeueqZBY1wufGktJTLseFvH2yQsr2ka",
  "key7": "3vPzrSQ1RHrSGLrYvqJnP2PX36EgbEtdpm39yJzBEXGnYjL9kUDzuM3Htc9tUtxz6RZ95aGaL5MpS8yXtk3yZ6M9",
  "key8": "5xMNeFbyQDoCasB7YKPz7EFqSgk1FnDsJWenkrfuS5BU5F7CgnM29FVSYtyYYz46idMNMKyTryAkPwqv9mNVcLXr",
  "key9": "2eDMMAr6odddjkA6ibFuCPfhJGeveJ638qtmPiKsyRthTzTSmy64DKWqTpwQhEud7EfA43rhbeSGVYjgYkDCTLao",
  "key10": "5BQncWqdehdQiWH3SZJrM9cRmviRknFXqMQABA1Zp4myzmVr3GTKzukvSPsfS8sLr8sPuP81n4GxeWQF9x5rSSM5",
  "key11": "3sGR7yKD2BmU7Yr4s1AZjip268oNFiTn7GazssrS73y5RPq7evfbr3fykLkYd2dLCNJxd3GknHNvmCTLR9fL2zku",
  "key12": "5kvQLBhdEJXJKcaVoc5QNB6GW93W4DbyfKAKWCoGRNkMhbkDWQ4SN76GYvheoFkp4oGPdwQuycK98KxrPXkkQn43",
  "key13": "5kE1UWLvN8yfaFh7rNVHe99E7K7Zs3czLoRj8wUE9FC2rAkwkiAwB5wQXGu8EFAhrQFLzeY8bXJ6cZAXFsAAHTDh",
  "key14": "3CfZfthRzkHUo7URzBHY86aVCQEEj4FxiwDEhy4DWzvAgfjp9gxCSa7M4NwFLMtEwDWBumKzoNRVALBzHepnwMsi",
  "key15": "3tMjvLkA6gqpzQhMzpYPM5oeSJ3dUj6h8Wruh3XhkoBXqGbUoS4StUKt6diVd7DhZE81HsZH6yFxspS2pJKM7wQ2",
  "key16": "5aUobytsnyWEMBSDXEq47LrN3XmePauAq2LUxqgMge6Sts25RRttV1tuLLXMAvMJYa4eoKrx92xWNKpoaa1MFe56",
  "key17": "2CSfxQDiGbxrMxjHsSwS3KFZrtJsTR6Yyh4xswGvbWcnVbY8HBPP54EVKtHG3rRE6NNh45V9CP4rXyscwrBJmhH",
  "key18": "5XSz9a51TnnrTb9etdm1VpdaE5e1YrxhZWLjasyaymqkvdbdz7Vt8BkjCpxxtYMVfahQtvXzfDPPqVGt8fCVmKNU",
  "key19": "5DorLNCzWoGfWi3qzqsg7AvnDQrMeAz83d2yfGtdt4hZhVLmcRLbdQTA9SWBdamkZ3s8mAPz1N4QivHRw7N7dM2d",
  "key20": "5NumfeNMaTP3z5gwsTNkTro7k7dW82tYDWxxQpXELx7ubJJDHXuMgcMNvD3i9dGhbdxtYWSxNBXtnerUgkMx8D11",
  "key21": "cJFV8Nb1kcQ3NoRJj3BT4LMzSGHYLjsCLRUcLkRgPaBGLXSUTCe9inTSx7eKFge16iAPNShAFxvb3EDLTvB22wp",
  "key22": "668rLx4EMuCgvJ9u5rNyAut4tYYB2i21ykL7LvQpKHwBP2oWCMHCD4qRSTjq4S4KMb2LUM8bFMRUDpsAV6Cq1HYB",
  "key23": "3qNEsv92BnMN1ionNuy9jZBoSsXeQCFGoR6H576cX3PyhJEWCR3hRFPFp5yVddZp6bRSNQ1QbhoN2YvQNPdvJ2HL",
  "key24": "4S8YQ2eL17PSfPGt2FCpjvq86qgcThcsi6A1FfMJ6jxCRpMm1KxwNCKVfYXLJMjSLE9a2kt7G9iwwiMZDuWZegcD",
  "key25": "28j2nznCepaushM2tcNtRoDDbJUsmSAi9TaNNpLngFUmdR3YYtAvweKdCgsLLcHAK2y4a8BybcbQjJsYcEjjCx8E",
  "key26": "SFkMDuxmgibxt4VWzseQ8sBWjHSrWZMqRLR8ppWASExRD9vLW1EQcJy3LMWGpcV9sNz5xaErHeGL2VjP6Zb8GWf",
  "key27": "2gQmfZHtHNB7a7oCSWN5uEfxmy6vN3vSDLyEdJA6ZGSFz4S9Ana4UmM3neQwqUuDTq1QbGfrwqUPKSAV6urWvcES",
  "key28": "4c1G6Nq6yQBrwyrRnu3kZvXDtg9A9pjNKGcuUwXtNe7bWp8XqomvQGmaAGs5YdmdKSpRUA3Yfu86iCxxirHN2Znk",
  "key29": "55QQUK514YcJqjVVfUBPYgTymyXzCy4Szx9JeEs39MPZ6mjST6QoucEh7axN4bi7CLRtzzSgEgF4kQrgG443aG54",
  "key30": "4GEF9Yot7bURJFpeLvsWnXe9LwZ1rWakvADbwQoh7X6HJ7i3HavEx4JXE8bpkXYaBFCENwSCJXY9CCpG6vpAXvsM",
  "key31": "5eSDwTfaG1Gjt5oDdhcSYdoHKjMuXuS3hhxhPCGX9H7mkHEChKoZbof5QC9p4SD9FhxjohLWAdigJZrqdwDhkK81",
  "key32": "55o7CgDRAz3Q5mSzkZFbXdqRogMFNiBX4UrTZatbtnUAbLp4whZMEqpsQFTcduWG3x5WaKdHvo6mTfEQdq44htgU",
  "key33": "2RW7nqZXm6enXRAbGF2FpZnc6TkYXDQvCmTsmyFSokgyPzy5bbF4HmPFsGaHqQKJENKJ9C9etrRrTcPfZeL1cNDF"
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
