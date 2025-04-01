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
    "5RRgerWUfniYHXrPGvz91teHcCtzBJfyuJHpFEoEzdYG5r3E4MuwcQFQLmMDLHtZAkyvDU66F1j1rQ8y856XxrEF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pE8TtdRmNzE5tWGZUnDcLyXsHawGPjnp6CXff5MAq6iB6WsgD1LsUhEEmEj2mSE87vByH14QrTyVcSMzo4eNUv8",
  "key1": "2fLabwdAgkHoayZh38aDQauSPkmCnmD3x88qvi9YMo8Hz176uN6UVE9r3PZ75zhYp4kRPaLfpR2AVzQuKCWcJTJB",
  "key2": "3DSu3AiPdUVUW2gwLa5WQmuepyrbKCGJBtKyGF6zebUYzQWmFixpCM5jpPPv3uH37XgGWauCMGnYBDRL1Gf9nX6P",
  "key3": "6mLr8TgrKsxB6YpaHkKNUyEKj5rYWLvQJob6Bh3629o1kG5wZZLSxBg7iLSKsADjnKPraTyZEFknR9GLvY1LorN",
  "key4": "39HaSWqSdLBuo1cc3dxVeQwKFRUuBxubuK34XZ6657U8V6pev6dKsppeLSUo7QUA4PwA6PjXUwWZhgbV5PNmQagK",
  "key5": "zdw1RPEN51SgMw4hUHLkKhTQSXq8vzXAHyqxdNNtmjRgEMQJkivQksYgT7uccqyjn2imcDMuFYNCn9ngMo7FB3d",
  "key6": "2GmFffFHtLAHvQyEebRj9ry8Hd42WTjqSJXE6Dd1MpFyhRtDi9vBBDdjSNbo37ZEwzDETLTXZgYU13SZ3KSMDAMF",
  "key7": "5CBNt4x6DjPCFhbFkrybHWtPpiLrNhZXXLjqd8RL32ZkfuL4cBpBkyGpE8LRetYmeV6mpR8uvN7ZiSAm4AgK12HG",
  "key8": "rd4oeHTrLShGRSQAFoABeRPu5Gvw1cmautrdPdVDzjQY3zDKceiXdriGw36RLag1U1ed39bdQddV9sshXUisVj9",
  "key9": "5oq93LTN9tATs7kpocLXsM1GsnAi3zDx7pSprgh3PbUKkmvC27uPH4jcZb89xArobHK6YochWnPcoBmyw2hAx9mQ",
  "key10": "2spRALTVDXxjsTqYamCFFwL6BFV6T2Yyw6vEmAB5roqaWEKCz3zjyqc52QuwEYVYMtfuMxKFEEqSFSBqyFE6NYB6",
  "key11": "FX1QUR8ozGsGDXQ8txeocEvxAUocU8cWoHmq6iZ2eigBaj8W1gVCYGAL2q8AnqNyMv1Bo791yR7giH6LGBDkUfA",
  "key12": "G5jccQ2Y61p33U7HCU796QmKPjY1jmAxJ9TFXbp5c25SYi8Kff4MxaSB6rCS1psyUZF6TP9oebzz83Dn3VzArmK",
  "key13": "5aqJt5G3ziYtbjrc8svaWjHtRdTSzMeiMNQr3CBt9jKm217Ao46gmdzk9zfxXErv1ht3KCMr5oU9nRiaiGkw2k6F",
  "key14": "3QSXxHCD8f5bJSLAeDzrK45zCKyxRztfiytnbKwUjDnfYLSrNAKXskv8N2afUu1h2ioGjSJHupaG6YYAY4zPzTph",
  "key15": "tKHuvAVBmG8qx128xpf83EuhmXv9NXYbasNzbm7rBLTvk6zeEuqiYwf3q563B1MovScE3RNLjC6E54J2vtJFv4R",
  "key16": "TxRvE4SP7kpMAYQ5sxAZce4GqDKUE3QyNmbRC2zoRLYYGGHNtktrgGwnUhzM17Rnai5EhGRFwApxnBgs3NyUKqb",
  "key17": "4ttVfSQqYwqdc41q8hGabSTQvG3kiDke7pGGZzaJQAjGMcvRZe7gWzufriQgMqnm7wjT7HW5thru1iWUadEJXUQJ",
  "key18": "4QdYCGBr4jkkrHRC1HA54kwXa6CUm3kwnt2PogTKtBm77ZJPZUHYHXLLGhtQqVhzU1ikKPDmzAMoTuAZHXBjgDFu",
  "key19": "2qNkjfjysFA9CRRFVZsQAaavT7BwkSZF9TtQPij9kmRPyqMGWUKh7hZGJNfd8Ch5DkanTuX2NL11CGCjKUDDeJra",
  "key20": "5uQLEacGGAsHZHzFEVD9gURiZdH6YoFog1QAt5G3rdwnzScY5PQkKU7z5mFjKiXgzxvFP2dySTaqusP8N6mVEc6L",
  "key21": "4waffETHvJqbAsAJXH9H2gwSjHhPbauGWrXsE8vbX8buhh1CjfjeaEzsNuY9dMW5EL5Zm7ERUv4RJoutnHuWBZiT",
  "key22": "3BigBZNnALYogWqxMNKFZWv6i9K7y3LnKrvbaNHrXwWTGsYKxSST441pp8C8JsqYyH35T9yjJQvpVR7SUiNCnMa4",
  "key23": "4kJF3ba7de7F27PwYYncYyeJxnm9zRQw9keGwcdLNNbzuAH3X84LLXjHb5iqncSPS3KunnQ59VvAQjmeCvJdEQYa",
  "key24": "2Wovy3WTEjCx4vLYx3SLbnsTVJkaS2fGPZd44dzhnENjzGrJTRLhbuAxjFgsuPfidguHYET5KLLgv6B8q1midn1E",
  "key25": "4KqGJE4VJPqVPNaG7PxsW7GJjBGNAuXuru8xfjZbbFF1PwpRpcLbnQB4NEZE8aaR4FDYqQNYE6HehySqvuDhUyJt",
  "key26": "2kgrabYyJoUAiGSxnC2TEYeWvJLiAwgPhpanztqFffGf91ZTpao3SrVBdtvkR3CGq2XJzD8b9d8FrG3BEDTBGgsg",
  "key27": "5d22uT6ePZqLLsJsGpRsDY5gyiCHjsgfdZzoJQy7Es29YEZkyQguHyZimdxXr3m4tjqw2wmD6tdZ5KpZZyS6JWbD",
  "key28": "4bstNSV2FMnHWyE7jkRJ6CqvZnKZ96VrfwFNXZvD9t5FmQddeM5Ru3qSyxvJb2YKeGbZkjaXMBdeY4fWbY2E4Stg",
  "key29": "26iH7YPiwhW7SeNiS3Fp2BrqBjbuwUwahypRc4SqAee4i2erUginUxJDZxc5wYBmMBaWvqv5SywoUtLFMBCpa335",
  "key30": "5Zak2bKETzBWjJB67421NPr6QjLxUVB6TjC6WNcvVff5qj6Qutpzim7cFgBUV5bmKcoCyRBZFRgGAirjohe8HTTB",
  "key31": "Sn2A2TFbAT1pm2xJ6sry9Pdodj4mgwvyCxeEa8GWf4p1yqjm3HgX3J2kywbug7gHxuUb2fKvZD6D7s2bDnDyPjH",
  "key32": "3o63VTSKuhvj9hV7oWGVaNNGaBQDSuxn3b5BbWZ8ndhVFnksmg3HFLSH8ddaMwurjvNuXbibkSQQWCFkQBts1rs8",
  "key33": "2HnM4iQv5rVGmr8ZKmy4XAiNtSCeprGzuWemxtU6R8T1993A9Ho5aNuzNpkBiBPvKDM4Cpdqqq5RUWEz3ZJv169P",
  "key34": "5TdwuysQfDjjAJewanitWk4d7QuHTiSVMPBVvpjrJjUYAT64ZyYQKPD4CcHb3fWny53DVi1tFEcpyzMLLNf3u826",
  "key35": "5vYtybLTPpXvDXnBVAmihe5mF7rwmny13kzBXwX8dbMxUq4EtSd6R7HvnFsr1RguKj1DfbR2mU1uvqMWHLgAzpKx"
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
