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
    "5k5gkuqFBAqnbswWPzmVRQ6ZoaBEckdauNtPKww1VifJ1NkcW4J9xtMn6s6ZGpKNWzDMDpzuio8fUteivh7suCSp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Euv9QLsc8ufVCFRbrXcwYWMcLexfdTooMPytYEGinfS5ER2YA9RkyhPtSwUnAf3C4VBc48FwnJtubGdjZwYdtAd",
  "key1": "4Vz4Kbt71LaB8ELzZrrP2CbbkpoyYeUzdkjbt8znMnpPGV3nrJjiaJWn9trtbSvP855i8FLN1b6eJUU2kp1Ps99j",
  "key2": "2YZkZuWt3ccH9kk931ko8eUqfdcAzaCfDBbFpeeHbVf3F3FNexd9BVWV2LZVTAmYYsVpgx3QaavoaxhcfWoxfjd9",
  "key3": "5EA8eThMByUWd2eftiYiEkcQCerDbUVHcERCBF9aHkXDQP9BKqHbE3pW7D98mKBN4SK7ATDWc6Fv692DJggAghCF",
  "key4": "5DRv8anEiQCsTRpCsakcuKTy4nhKEaVyecmux1aBsWuqCm3vs4uGCudt44yDwsmH3m3JA3mMdkVvNzYHY4dG8svg",
  "key5": "5cpqrzkNCmqzGpMJ9SXWRabNmKSXAxJV6JQvNRqXnneE1dSMmfrWC5JaPTh1yMC3DnPs1MLvWBvG1h4Vena7kZLd",
  "key6": "5hR9cZzcANfRDEH66xssweuC1BSKDX1jtUCxpCYrNBYMNpKUk1ftyBN1JP8CZnDQLaQ9H6zcaZQfpuSLHc7JkcLs",
  "key7": "3U4y7jCci7ywcKTgiMjxrCue458vyEvbbap58ismK1LZUUrQiXtVrnrBopCYtHbq6wkDLadJtmMPZbxtVBsdjqP4",
  "key8": "3BwFYTsezMAudHNrfnYpkNvJ3pCPStXRQvpDae8PsTws2xbT5tismsA9Yp3hJxm67a5NTofarcYvmpS8aKqBVF8V",
  "key9": "ZBxiXrfcrcbiEqLuQixCz4SUBFGfYqZPAexj563ynmCCZxXo8z2XHEDHHUSu3pgG8FE5rKo8maFc9NsveHKAaCL",
  "key10": "hMGanVQMgtrjM38g9GDx9xz6zLi1zCxWQ7WV6UUS8dafJD6kaeqejfmbL4TCPZgzymKoj2FRAL7TTke2FvRF6Yn",
  "key11": "4AtKZGBZD11ghvZWRYoMJCUZQcNeaKgpg8zu8sCPnuf3ghw6aLYCweNvMnt81usHQUEhjmw9F1XzdFJCPBCyqF8p",
  "key12": "5KJBQ648oUa5PK1hX9UozzDKxCtfE3FCfP6tqp7JnKLASJ9m5aV5pxRXZPSytEiUcps7xnMsuCvaATXb4xJaVGWo",
  "key13": "3157uiz2EvJy4QEYNcFzFE6fxTb1NsTp8rpmravE3RmkXTYDEKVC8LqmTkPS5HLRyyLKFkrpVnAsiX8QkBEDEcvh",
  "key14": "3uL6vmu9BCcZ1wewh2919ywfvFHfQW2mH6h27bWADNGNRELqAADGvDeTUBodcAZeyb5BaaaEcfSALvpmhehBtFtM",
  "key15": "Rk3QwkpVVnKgVFSTgcHaBPufeSX1FbstzC1kYCSMGs8gFhwjmNsW9n4Pydt3V2rtGRjg48B4UCmSh5gPCChZLAT",
  "key16": "5ewsK321ocDVttrURiMAiNzSqXyzckg2m598ETczGJ5v9RBRaoNY5q6c8dRK765gRoRESvuF5c3C8kEiRioeBL29",
  "key17": "PCNVVNTgvnFr3WpMyXCsoqi6iG2ksYuo9DhKd93s94vheceJ8eybLQ8EF2BLPfqkmuMVgqSXQPQcPHF81roMtdh",
  "key18": "3Zr3LsuCnGCQymoPJYDmguMr3b7itcwzU5oVPjBeVGVjc1LMCFEbCB8s2VomqBd22EfLv23t6MhswxBY3mkgeUSe",
  "key19": "tG6wcMmvAXiPHEgVmc9LAkwiTCJKjnJVAedC98JFpw8wBcbvPu8zKMNL1wrEyUWEShHB1w5UegXSHRxG1CX96tj",
  "key20": "BKmnqgoAZrvaHe57gTHZ3VdiUV3aFVvUSL3z8KF6g1wPeWvV1KWEh6RhZqCTc9Xw4nFW5XwcB3ZLrPS5hpM91wc",
  "key21": "61codkEiJmZbJxH4jH1g6RiwrKb7LekNu4nCo4saw4AsQCnkBx9KCnSpJ5kYEHmDP9vSei6R8CvCsLzyxGbMHiZh",
  "key22": "2g56A99g9FZZfSo3iCvPzq649a4oKvhMehKFN1bvYVKearDaMNjw9nXgyFjTtbjwy2ZmhEY6eCPa7YxMAz95rmNz",
  "key23": "59HfnQGJPbSRiCw4zQ71rUN34SpwoxqhJ9mQFu5sp7y92Xiu8FxnSkyMM5emzjWxa3ctb3KZM1VuQqsjUCmEjqp6",
  "key24": "54CvGh9GiVUuE7t4gJXJ6Z8YTgGywr3AifN3pDLrTgqZt5UKiPr22ezfGGtZ6s8Lz1JwbqzBGgh8zgWaTRKtf3Ph",
  "key25": "3z9AjYn3JJmN4SUxtSAbwPw3tjG6nk3GLEekVAUY2JGzVMEMWcwBVCLvgjwfjqFGwYQkuymNKJ2JkXxRSqMkCDii",
  "key26": "5oowcLrdP7pyKidgNfJ8887hz3Cdfxz9xSaicYErwmsWchYqobLdMmojDMKCBVYsWCyFN3pJupvAeXHBaVuUTjfY",
  "key27": "3YcwRvJriE1htEZXbBjhAfA9DPXyiX2iM83ZjkLoDP1kim12AEVBABYdL5VTQQe8oyQtoXypHYuuxMtFwnN8U3Ue",
  "key28": "5A3wmtHYTDbRDGLnjcc5XaMB7mXDM3hmAjoPuFfiQeSEHZwcpiTXcakx5vS8Kf2Azy4coYLBAXC4GxztwC4tKfSN",
  "key29": "6424vJQ5fccMag9rnTv2Uxv6yXbrn6HvnpH8ZHMYFmaKGnXD6twgvMKxmZs2MXArZD2b3DoRcTTVEw4XL2oUthvk",
  "key30": "5PWKNAVR519QQe4j6kWchyNQNmmhA5Sar2eBj1WBqYfGWptfGXxKz92T9BgCqbDFJVEqpewXmLDM6KH3UTrrZmBW",
  "key31": "2miYjc2GoXBECrenq895yUrixzfnHctLbAKCM2es7CoX6R7TVXQvTBGsBEBpkJY8GtMSPAXwSBHwz2bNbsu7qXM1",
  "key32": "3ECy7GgayhyAwdzLLVaeKFYvXQyBgsRJ68zEUrovDc27Ri98zkaDJgR26M9annqCgaL2RgRKvcLrAPE3QkFmn4LM",
  "key33": "3TS7ud96en3EMPjhbZNo1zrWEheNm45LGgqXG7AnRRCGAW6QYBVa2Gs3vid6VYA9DWbLrGr32HmDE9TYBcpFEk7D",
  "key34": "P6VJYQaT2Rw2XuNn7xQ8UYRjjvteifLgswWPPrSqgNTXbYbqKmozuhD6LJ8Rou4YEwetCQB7pkGgcvgcK6tZ3HS",
  "key35": "4HuAKr1H4C7uZndwxoHHmLEh763JoeQ6Bk7AQ1SC8HHW5heaKKqRHe2VsbGETQpkNyUBBcUjDNcuEpgnTaMyKUAJ",
  "key36": "4zRbCQdyA3yvtVsDGoJPVAVTsceicWg9WtHYbeTRPVtb61dT4xMcdtwum4tFYAorUygaGnnUq2uhUWhrmZU51Qiq",
  "key37": "2Rzd58qJuJZjuiGBQixpMW7WWYpPkamPpmvbtBm21zspXaXaVarVmsLhBLBbAyzN9QpyiUnEfhnvnuV45Jw48Mfa",
  "key38": "53Ke5B6SY7myibJG37noJY1x8kdYnk5iLk3Dstb8weYivztPpud4oEMyedFgrgTR21xGEwK3YS5vA2x7adRgMqAS",
  "key39": "gfnu8ph5XgEpcbWwdeU6v4Wa6QbfRV3msQbuD1Wm8uBxocFJNQQRq5RaGQdYkM1qHETcHBmSR3cmy7fkLpXvMHL"
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
