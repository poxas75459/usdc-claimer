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
    "54nPwEgVyxTpmmBB8j1XCJM6RoZuAYeJaR3dELDHakSTgY32p4gcMEniF4RQnJxt1zNbxbmysz5Mvz8YsFfxwUb3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FHwCYM55xocWfYKUQ9zzcYMgkSnCwGxvexQigWWozYPW5ZvFCfbT9mVdJtxEVEuRGs6v4w67H3UtyBgaFdDS9xS",
  "key1": "4Sk3zhJzRiEzshsyGCrpNC665FrUdqH3xWtVa8fSJmtJygXAEottUiMYKQ8mcQQbfjqtJv1t3u32peG4gjRaDe6S",
  "key2": "2TqaFLXZbkHbwAzCXecAx3tZa8bydja9EBhKpysuo4Q22kpuumzm6Ejp6T6m27hb76x9azfJyD2Zx3fai9TxTJmV",
  "key3": "5j9JE5EPRX8w4kZMVE56LKkubtNWSSZvZXZrfG4PoRgC39X6hgPdnktSdsHSF7a3UDANuDEnsVWX5EKxqjjp5yrG",
  "key4": "FVqrmYwybxHgSyiy33VjaXmNmuD5me5h9pP4EJWkZPZeJj1PnK4TzHatfC3bDSTBd34FnWALoEyM6A99NHXp2Nd",
  "key5": "2CQtLgh5WDCnWmP9oGysp3gDais9VQMPGMyH6rhF2QPYt6W31TYEBSyxj5FgvF4DKKVnEpUV8X3JMDNeRrp2vHZN",
  "key6": "qGPi2a9Jn5i9goyeeKKty1pHPJgS3hms2t5ZsmUmbwkL4n5LiEpwpBQ5J75E958vx7uFjZN7e58K58b6ZECDHTv",
  "key7": "2t9FitvNmEQcaewy95e5jXdU8GEuAKVFYWHkm3thopc4vZFYDsaMupFBXRxDjC8qr3Tm7ts9kNSZ4TsEmEDsHb8a",
  "key8": "3y2m3bZWY4FRyGYnsVjGzqzyia97v5Jg3ohMaPKhNTzT7gyEbA2uro1korUtAcUdrhGy7aq6enadnyUfjDNLBBxm",
  "key9": "5oNcdaVibXsAZPy6RtfmrU3ht7mPpSvdYaeAUGQTsEeiGSd2T8c2jGw17Vm422U4Rea8HUvC3u4RT1eNS1icip3Z",
  "key10": "55xjJUoiTD6wjfQVdErPFjQ3mfTfXU5kzkG4s6zcHXmMRu4rkj4RbHWxqzTfGrAoHSB1xbdoeZmpD5nVFBAEaYuR",
  "key11": "W5UBYuFKuL3Mk5ZTDZiNE9FYrEeet78SerJvnTy1LJW2LibmUeaJEg8EBks89Jxm1UN9zFPP5hsYHq5ysBoA7Yx",
  "key12": "GZb7yv4xf3oYnvFLkXJdzfki3ZqWJe9RWyAD84xV5jAajFoYoqVeHeaaaE6rnHgiTyhNgjyQvACx97rcMsBHg5X",
  "key13": "372vTUT4t8nDj1gTTacWrzkXHnZTp7XKhLPBt1EAM32UQAcXAozydEfthpNkyRhkWzR2UqRExLamvKtxD1mS1UU8",
  "key14": "4ALAi31dZNGAi1j6QQezVBqmtjx1tF88ABJamZ4YSoinF6ymtXot3SLcN3xbSSmUMcPMEa4R9jSt6dmyKKYQSAyx",
  "key15": "5RNAjQDLFrpjQwYfD5JSjRnQpn64UMmRGMKgk7WnCmfvtXKMLupxxSr85gYT2xBAC1YsJpb8AqPP8J1bg2GKhegF",
  "key16": "ZFez74mwDp5mtiv1rM8Nen4yMjFJkpb2NNCjJ2uTagcwx5xNMdAtgnfx44cN9HkwEqzkkYbKiayybtz3oCoNUAD",
  "key17": "GiwqTHjGHrdpQwtAx9UJK1dhAZKe4cpaRqbULJHd9duoMFNoTtFTfaK32xykQnsoUegXYSQSfrYYatPRkbMqptG",
  "key18": "3aGxnmeCB4sNxiEfuchM7ZcVMKV13YkDiFHFabMLdpp4fGThrvnWcUSiipiuVaZcjnn4FEUSJsczWsrFqXgp94Et",
  "key19": "n8iQTK8rCs5FM2YPaRR2U8PT9zs1G4u2sp3sQuvfqAaCQV5gGvJM7ApPXcy9XcyAtcWx1xA5KA9b2xvW7Le2unS",
  "key20": "vJQTsKm9vGXaXoVsR7YxnV9qGJzeJSURN8nMjKBAYFJVnXF8MUp8N8usWSDZjTxdFqieAm2Lgo5yADsFs5cR7TF",
  "key21": "5w27gCpyRJaVCcwxEriGbgHyH5u9CPoZ5n9CRa1eAiyq62L3snboe2FD11Ka5KVn8D7AeqMtC9cf8uj6URwb8vMo",
  "key22": "2M1Fncm4bRPPgbUy9bJr6fYpsxGnN6ztnEhqnRrVh5nXJ88gMPZbaaADZYKqwuegFF3SPMyAQfkiDG6n9s7ihNnF",
  "key23": "3frR26fv5oMFF7Q2bVcLcE5S2C8W5kvkytdmMQHj5EsThAa1CvYKuSHqKVB3fVLAB9wX6wQfwDC6ScLjCGsHeR3V",
  "key24": "4yMWjpQ2r8drV9y5X3zHdcPwU5bVXZBm228nAZqwfjur41QyW7MhB4yF6apxGas1MFpZ7isMWKX9iTdi73j3wGbW",
  "key25": "3vxhAEMw9iJsRFMCCfbHyVEVDMbzeP6YMfNuXwNQXmApj3YS8QhZ3MKSYmKYFtQchG57Cpi4sVM2QaB5uK4jZenM",
  "key26": "5hqtVagVzNG6yqA4tyJzXRwU74au8iQ4wgtsuP4itig1NVZ2yGreFe4PHMpVmjMwpc4Tsgf2mfP8PP8Zra93VQix",
  "key27": "5uQpigZnrUhLYLtKQkoZpWCo1kc9murjpc26KRxY57V6saCc9ZQgT3Z1BFZqJijPGPtUGREaDrj3Pt6rPtijrFid",
  "key28": "uDRRs8kzLZUABr7mRBHa4fqgD9Rx4iMnscEw6jBo35Z8gX3wgNdZqoDXov6hSvtambR8WPEA1ErbLvYTKwgQ2jY",
  "key29": "5Adz2NFxRgGHhB3hYcMpVMq5rzX9j4oaJ2APie6TyoNmpZviNCLEUFzkbHLwraVcgfTx45wBq7fgU3KbDuS9v1vF",
  "key30": "513SaNYShWEZSe1wAghDyG6g6uf9QvLWfHXpXq6stRNVGi7KfpJJWecTUaDbvrzV4eZX1cS4LLsoXkzHRCKwBpSD",
  "key31": "2Yd4M2tYMAuf7Z1bq6ChCQXkHpip5hjicZUD7fmVivTXCRzBoR8iEYQqL9xXBUq4eHk53kRoFhLocqdBymvfVk4u",
  "key32": "37mfGw12dkgodxaABtVDESCWS3YNhy2insBaBeeTM3GDKkAzDDCgk5XwwsuhTZ4PtPH8CnR6VPo9JA3EpEPAY1NU",
  "key33": "Qyu77xJnprn4DQW6J5ZVzUJNPeVuauwv5zzPf8eqR7DJzniGox68gyzNGwfMZdAvUWmmbR4PLVLDfhBqYhKsjPf",
  "key34": "5i57TPWqsrJGPoXJGvix2UoqegqNLKrdgHw9bCAgU3xnc4iAJ8TY9gsMv9YYWwfsG6FhNX3CHWzXEmNaFV2CYEzE",
  "key35": "4jBWKsTS2Ngpc2z3Y4iiKrnanExjrktC8kTdXJKkQVBZKASg4SehQEofuf1DBo6P2Ngv5YFKCkuXzSQGAxXU5uz4",
  "key36": "3wfCy9G3NJHACyBocqtJsKwWGyNovQaygaQMht3QF9qr3MC7k3hhhLnJV28AB7hMMu4zS4nf7L5QhoLwApQoS8Ah",
  "key37": "56sSVqjXeCg6HxLL8S1W2e3y9Uhb16rnVmjRma1dV3J57PpyQEDiqaZysG5Bp3HvSKM7jbrPmAJNg8qkFCC2FNir"
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
