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
    "4fi48QRZQnZJnCYZ4fyiqy6iXiZBBzoDkmFJyExK897J6X3NF1U86DzFiYwhpVuYSCFCZEkMW6tNeSnzWVxLGqMR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vHV9Qd3G8Zci7JH5WAusUTPJAivev1cCb8g3VydeUgVwp1CMieZJPUfqUGWpZyw1sn9FgbZcf2pJo2yKLPRvRfE",
  "key1": "3KMCEiRrUE4zJRpWYC3dTdw6iE6WCuC3m1nRHJPYaioB9NpPkfeD49xEXeGMEzWbqawzxV1G3uXC6UtJ8RbNJHK7",
  "key2": "4qeaDzA7hricZFeLKWioo4X34NqRhB5a5Naw7VRLiPXYyag9G98BQtm2FkAc74wTXCSARh8oWJJTA21c5jMoRcG7",
  "key3": "2255KotTujwezsgudCWWRfdMvDDr6u92teDCXSG7CnXWtCL1NeMTz9Gy6pUfHGEFHoLiQN3UjnQyLzzS1dPNFhAr",
  "key4": "bKroDoW2KMzn7vzVSrauW9i65LdshdLQ5mxtTNoew3ieWADgdKvrW3sXXyoWqtBbg4mKsLGek2YCoUUBXPdPxjC",
  "key5": "5Ckda2NbJvZsvXJyb98SDYbhfocH7bs9TY2Fbf7n9GGRT5bgThbQbnwsRYdoesDDtsZBNUMcx3AvTx71oiEpga1a",
  "key6": "2UUwHfgFsN8CqHfhqiUHHGWvKHKi7dDxccT3e9eHwWn4AcojaX4UR5macpZCwNLmodzH9eg8U9VsuNDt7nuFci9H",
  "key7": "4R9qLWvVAPo4vsxfSCqseL4RvAt8upGoNaKmS1DPsG57cZin2qUNBBrnfsfxeirA1Cr3NVzWz7kDcNCbSZYeHo35",
  "key8": "61EgVKXL8p8zKqwuo8XgqiP6fagJD487zLmRu75p6AdM1gHLcqSccqmjUXGQtHqQ6ktAYvY7AnRT61ZqdzAEQXGp",
  "key9": "5qQHoFrefQDfBZ4krHkWjgMZxPnx5e9ffNMBAni8uQDSXiFVtrqRqskwN2nb6uGYRo4NJdzEWGN9uJTX1rUMNzse",
  "key10": "3MgabnXQMWZs1iDXr7rRTtxiVESZVMr4ZcavhCKaQZ92tgX4XRXqhA9ib4TL5CmE7FRFKPfvGvatvZKDD77JN4xg",
  "key11": "gTrC7f4LJtSt3wKxoqCp4YxoE6Ea1e4YBG1nkK15jxkryZoR3SKTtBDbNV75b7UpYpSLXN87oVaqWWgpSndUCwe",
  "key12": "3BLW9YeaQzhwtq9KZVLYHYoZQjV71bHGTqRm9EvhRyfZDgXbsdEMovLF4uHKYPPhVFXkM1B2HthaWCsnVZX4DnRX",
  "key13": "PN81Fkyt23rudYQ68S6ek3XHFmDmzUS3boU1fssRhXSSfNSU6oDkHTJYU8X2ZYcSb22CQuwUC41ijuL68D8h2EP",
  "key14": "2gJ7EuA7CR5Ur5XjtAUQbQkWv2iNzsK9ZmURqVbRHWcafHxe1m6RCePTogM7jrFDuxSGeAqf1Jyqf1viUMw1aWyK",
  "key15": "4tqFHjKLVZ2LSzEUqwwLEbpeSpSFBy7ajxe5GWf7SFbGPFEGRkTX19a7mX6K3bz1xVUvS5FVZSDhgrEACKsQnyUt",
  "key16": "29ScHqAyHJEXpcvgpycck1joiQ4gepfx6oQV2C1q5rwWKTcfin1Qj33qawujLG1HFCNrC1aM2H7v1qgYf4RZqXth",
  "key17": "3E14g5csgXrPbhVeivohsvQt8Y8Juo7PtMnVdaf4Kfu3gqRYGGUfvvUHMeCGeCsEbpaHhozo1Qvi5bNXk4kC7cSd",
  "key18": "4kS2o3xmRQgS6W7wQbjx6rbWio1h51djQ7pG8T4cEzvGfv2tF1BC2y5sWYSo5x7B2qmnZtwT1LPsSYD3fmxhtwY5",
  "key19": "SaXeUMUpqoYKGyKcKZcR1aqbmXtNFphcmBvBNoDwaLUo5ffSgoFeMJF5PGfLmxTcVyNGJdDizNauBRLgd8RNTMq",
  "key20": "37GWBEQphmaV261W1Txi4UibViqekEfrs6rLadaTq99tRBFhusmDzZEan1HkRBzwkmo3WKqYnvHUy54TSeqMeDXf",
  "key21": "3uMxAFczTVoqwEKqR3qEqtaTpndzVSNw9WDVJxU9X2zEEGbby1p8VkyR34Td7EZDUmueZQ2aQ8Kwc7PutF6ZGD9v",
  "key22": "Rn98Zj4JKcSme9be4YVNQtVyEn2t9wVtzh2pSweUB3C3dNCf4ms6We2sWNJVt4LKc3jJ1osrPZYVRJAzxgsFRSX",
  "key23": "bjzzUcvCVRVnbLyhA5TREDzx1rfpyLv7EzQLBm28SgxrFEaChvE88Y6vEU3Juiq23nRHwpSscqPKNThC5Yg7CTt",
  "key24": "2oNzbwcZvEygAqEuaFmqKTgXzZa2aSrpAZMjMVFZVm4urjbbyAv1hAh6R9TrothvpA18aYgkR6eEX82seACYr8Y3",
  "key25": "3ok7SiTfojTAk6KCuNDGPa5hN3Eka6NamxizqbPMy7rd1fJGxCXWSyBTSY2r49hMBj3QrWv3ypzLko2W2YHZy9oB",
  "key26": "52sMXiVXf2iGPk2X3BcfHfpb5JeNQXUh5y1qdNV3KKG1aJNYp2MLWbEYbMK1mymCmSFWijPPSA3YRPfDWSWWYayD",
  "key27": "2fnvqJ6fsPenRaTN85qSJKXo3SqQHhW9zhxWVxiybN58fzahQCkd9rSGXLyqX2xPu5gd5g6Spps8fcMTSX484pdC"
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
