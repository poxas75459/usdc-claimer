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
    "3oM2NyambWCDGQtW2THocEoLuwoHYZdDq9bTNNw2zuTbEfnXymVExrcZpfiMzK8paDoJfvZNHNNXvS18yH7pfvEL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55YCQk8xAtAeRYbtaaUFAqM8MovyoJQR2foDg1pevj4nVq3HHf89A3kMkjBZkYqYUoDAdsRvVxrwu7mkYeaZy4vv",
  "key1": "NhWfU92fTmiKqjhbtZfL5wQcPGJigzT5sGzdJBgPF6fc7pWG3ifDDFVNvVsg1azVsaMNMwveYiSEc48aBDAomFD",
  "key2": "5eSKuwRoXWQ4oGM4pyJJ75caCC5Mx5ES7RuudbVtNAJDfzioyg9eTDQUQ7yFcALffCqHpzeyWumjGE3CQ56wkp1M",
  "key3": "5QneCeqmRdtHndvNE1boQ6w3SvEf8Q55uP3133Amg4X5shz4fkDBtqYmcFDLnbCRgMQAa2T8ureGXpQyS5bm6SN5",
  "key4": "4Svnjb4PkM5BfnboupGrWgreztiF5McgidGDGnNcgkEC3etPDkYSxYNdUJ1rZ3iu2UhNwt5WogAQj2dcJixtffPQ",
  "key5": "2u7teG99BJCxHZCg3CFZwNHpHJ7hcGWaMqtCNb4Sz7Eo3wp3fGeK9zkgnjpCEA8erx7p5ZvtEPdSrZPvWcg5CRSp",
  "key6": "wngzFxQ7wscKw5U1cp2hhtemh3DFXu8zGptotbvhczEXTNKuEC7mQeVDW93jev39J3RVWF3mHQG24omsjdVJhnD",
  "key7": "2JiRE3f123NnU2vwiP93qo3D5JCAEBsbAKMqbVo5uwTD57FHSHJRf783hJVtxRoBFBKBL5uSDhfMSiQjZtQ3WaDW",
  "key8": "5D2mn8BXXnTrGFYaUB4nD2uBxY6oBFB49ciLbWfcwZ6aDG5pK9pgNySRXA29q8mC3UDfp6T4TgAjiBZmq6X9jgM6",
  "key9": "2K2s3iym7DkdUEKwAF1ddN6CMvC6uiWni7EZZvXSp2DuYNyUEeCpfGjvPthiNzi39kWHpAvuKEmtTJ78VWEoCY1k",
  "key10": "5oDkbyUKhzovgn85HVmVR8jSBVQgK4hWc8fESeciLi12NBbUZLd2wn42DecVrN3vj5jyrjKDx47SKJXTUw7YFSsw",
  "key11": "3hatc7MqLRNy4tfXGzmmxZXPCSzhvMoajitbujStHUSioZCimkQmNGvsvmTmnuX1mCRviFTkAQiSxK6s7P8dUMUA",
  "key12": "3U7n7PosUSaztfVg5fZXkZcFgbP3gBcvKdRKvaXWJNHLKuPeqoGoWPiDU4DSq2GYZdvVhMW7MtvVYf39KroCDxMT",
  "key13": "2kzhotusptyHjUpto51TSSzeHTsJk2gbjN6bFzPKvisJgDCQqfxVhozxirdJ4AVtCCXGpjKtHjnfRWVHjvW9gML7",
  "key14": "5U64aU5PLSvbMtaJRG9wXBwVF4BGbC7y7ZhjoQiYC55chq8hG3e9QF52siwnrWX7uhM9EYDnUxaBmeDxovQWqW7E",
  "key15": "5fZUpmCmKSXcob1X5y7ZbUSQXVArrb3VGnEBA5LuYx7TSF7Pbpxe1hvhV88qenen3MnZBTKWJnbxjdVDXuMZw541",
  "key16": "5rykHTyA974WNEqdx4m7ZFKj96661xy8T9EzKiaJFbVJfq8pREUdXYDfanP2MP3z4Rb3b63t38rPg6DEVhwwRhSR",
  "key17": "5zQTUeV8ywM47Uv3Stzx7ompJ3pUD9sr6KcCCcAeUWFAYiifUUmQmLDGK6u2ojutYGAJw8SX4yG1m26CBTGqn9HX",
  "key18": "47DwZJmdz3bHjPdHG7nnPsD7AKWGrFe9EzNfPJ1tSgfxCLDV3yk2WtDtX2XbZYswbTPt3faxC2PGKKYLqpdWB5R5",
  "key19": "4FazFQG4Hx7P9Mr7H37wNsdQueAdUD4eGShGmk19aiGxwiPvEy9uJiZsRzSFLdmKh33ZvcjdCmUvb3YgsjHbeZSC",
  "key20": "5nHFXorv1qveJMC4AUMDQYUzaKjzzFAc2A9vjiuovxBLUbgaYNYcxsfNjA5mKwyX6F5ByCs8rroXmyg3AHuoh4Wi",
  "key21": "3oYWfvEr5mqrjNMgQm9PAhJLo3Kcg5ZgBv5xM8jWC2Zf8DW5YgBfjm8i31QiUjYUbopdY2EALT3p75WACmnLsYet",
  "key22": "4vQiSFhcTgdFwiLn154wcNTD5NFy13XhRqHELPedr7ecW5Ny2BnYx1ym9SnQNKY2xeMQPQgc8HV6nV8zqzEJ9juP",
  "key23": "222J584HFfRhwyz5ZHF61KswomkSBgcRDLyNibNcRnwdfSEtUbduj4oBztJV1vwEurXa3aBc6XgzuC3kVHag7o9e",
  "key24": "5JVAmdYxjM62ZZ73cSR83abjwxU3NJfhn24WsUuExECCL4dd5VMgzpqu8tcXiorkhtrqrhuJxUeE3AVFJbtjkTrU",
  "key25": "YdZfsZt3dsYPdydtb9BhDsRdu4EevyWVjTEm7eZCFUfZYvqxsEGAieNKKAuMZcJUBo3MZZFvB8ZXFuR5vqzNsSA",
  "key26": "5FaH83qmyU6HZxbKz9YVDcb1okHZaecudfYmNyDTDkDTNTT84VmzcPuwd1ARQsx6aVj9Gu6vMkKdiLKEw8Xiebsb",
  "key27": "3KdgSkPdTmmbaiPZLTa7DHS7845gnWwzQc1phUDcvfJU7ii6uSd69RD4DBZ1Xs4Dnoz7cxHu2kb93bV68qhQZo6c",
  "key28": "3aUmBMDfz73cJT1aJBd629bsFFqxjBV8gkUXzExwmFPrCwKvkBi7LUmuq3bF3yUMCzfLBDtK552yuU5UMf99hCk5",
  "key29": "FQmpnT8jBrGD6LsLmpnQgq7RyCPaKbZa4fcfXLibCumjSP93CARReSi9KGj6o5bH8CjUNeUsLiJrSdaLtkXGkpU",
  "key30": "3Cj5s2ZDEnmrRKfUjQndNtUYdShN2Gucn8QesYZY4hVnJyhhSk9EDuUtmn8XKwZeAYvwspAfVsdBMaQBCbadQaKn",
  "key31": "5PPmwnVhCFUKu1og9CxcXE4vABvKFk65VmKgLAdeiwyzLvkhuDmYU9Ac4ffFLnHAVm4RzQXNk8zTuGFyaEtVZFnE",
  "key32": "2NmzEJfAfnA2SE5n2UdTQKgUwJvCkJt2qk7yv35c4u4HPBJDrb4g73oBdv2fd57chprPi9nHjRqhZiLAX61QZJm",
  "key33": "48zdaouJt38ygHKUoKU2EtLveB45E6UgEW1YLAD1waemTy5kqNXmbqzbFjpB5ejks4mdPGc1M4f5uhL1R9pyaka9",
  "key34": "3iotCUfmRPWsE9NbMkjWaKCF7BwTq7C3X2CSYTc2Reg33Svc2a43n7dn5KtD4B2dSVqHsMEPwSNkFwwWyhkv5Tmj",
  "key35": "5UebZ3E9kUt3nbAo3DQdATxGvAZjLY8wojYfz4giLLzbR7Z7HggD6mMXya8PkwvhdncUrVggJ1mmyxeJmR5NmWLH",
  "key36": "soMyQFKd5SYeogaKotDYKYJjhES5tsvzc5XVE44zrRVfkAGRMfcRBkNcedFUjUBVZHJxfGYVbGLTEuC23wjNe9H",
  "key37": "3iSX6tTSz6BMABtM4q2F2jj5g1e51PJQtL6548h3hk9UGFDaMYYDf9iue6ofBu3AhaPmtskDxc75APB5FcDH9hNv",
  "key38": "3c4YznKVppoA4ebqbwyc5YLjBsvqojiGp8mN6MTQ2shvbwwELmCDtCpB936kLS9a73Ak2Cx6AMGX9vbNyrUQuJzd",
  "key39": "2iBxx8PVSUsPWd1NnkmLk7EsnH8Lop4LzD19Qx5CeE2JgkgA9eh7UmMRrwEjSDFNBv3LpzNeB99odyWoBvM3fcKH",
  "key40": "3dpzujPk6fHYBE4HSyBz8hDcFhi4ZVf2RtzpgsKh8CWPEA1MhWtgqD17TAptg2N4eYthR9VsmArMRaXpj1mPL5bv",
  "key41": "4ac9hZ7EoEJyA8jb8dmKjdU44GAVjxZZCZrJVfSmtgSfuZimz8PCHq5bcCAhFz9moFJwJyhG8qjNYxKG5jSbMuT5",
  "key42": "5tS5Rf2awGo83Takr24GcVvpnK9tzApHtRTxmqysTV8QPvL52BvG8tdWpKQJTGsHben13tsGbAPnAkQDRE1onDov",
  "key43": "4y44QJD3JHWx8NzDfrU2QN2MaUTuCDX6ATeS9TaP1UgmFhStKgjYtRnbJwnnRtz1gBBBTNjMUdT36wrrxMGi3uMM",
  "key44": "4thSrxVvmaFbq3P9Kv8pRRZ3Lv7fRs6BbhkFydQ3Ut1sMYmWCVVoscXkpdcuhjBDHUEmRuS5VVFYcg9qio75g9Gz"
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
