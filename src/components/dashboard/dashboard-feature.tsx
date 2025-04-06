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
    "3aa28uaYxiRAgoFKyVD76BHZde7j7XysBfGiWGN9FNu1itMGAMJkaewufhGvwy8EAUJhTEFQ3jJXzDcb5wwqBTr2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zYCM7aP1J6QDiVAeYDR76ErSVgKKet8wBDbkevMxTYjTzMrqeyR1DJBsaYqfZasc7zCzzr1JxLZiu3Rd9e9o5qQ",
  "key1": "wT1oFxipgo2r4Ag1tefmDs9XxpoL1CvarRTVGyiAT4wfXA6jpiVQyTbVao2Ls3SU9iZ8afc9YeVC5uvdT3LgxM2",
  "key2": "2hbfarv1eBRrqqoX9vWJieeS7SgeUCRxUeT7LMz1suhmr7WQamoryKCNYdRaAXDKzD6m8xmGzsBX6suxd2oGnXBY",
  "key3": "NJrAzA9XKk8djY7f41CtRhEMEHqPb3EavvFRM86ZSxRc1SVwXNbo7xZyypXUbjCMigXgazLB6Ws5FFeaNaVskKz",
  "key4": "5eAgL7NWMpkkASzGnkE7c57dZLHsccFoEEk5usoR2VDd9ha4P5CAdk2q81oTaKMbD6pANbMka5V7eEuCPP5mpU7M",
  "key5": "37RZTVy69DGHMDi1MbKX9S9tcEuXWkTjETFuhKsdfrAjDa5qaQi5LZ2dVLKypEixYp8u6k11VrVoKQEeorDR7peN",
  "key6": "5EmV7cSJqvDiPm72sZYsrEQwBzKp1W4ocRf6LdjTedwzWLZMQLNudvuqLvEfxEYDZrmw1iRVhCYLG3Qn4K4UJnHG",
  "key7": "5ZRfHD8RAjcXEd3KBfAiLPehUZSmjKfMd3qmbhXDxAsTe4h3iirxQ1ZZJW2ptCfGnDiRY8Co8P3iUPrXFYCwhCmz",
  "key8": "59iJVouKnAGf4zkqY5DU9Z737KCGh8LR84Hp71gD5BHcCBsgBHymg6v9fiwF1YBja8Zw1QSkYxBcG4KYYqK5dBCs",
  "key9": "3ESVSqc89VuTHeAEDbNA8U8UHR7UScVRncwrUF9vpzQomfrGZzqmDuu4KXPKr5FXjB6NxoFDMV8qR4GQsXeHLDmw",
  "key10": "4ReVENRwT3z5k7u7129dh5tuSmXgWRa1aUzPYL2tKPQmSkmJUyJ1x8GVAKJoZitVqNb3cbkxbcevpievuMtcx5Yn",
  "key11": "4Pvz5zq6FvmQTJSk7ZRkQmWJCYbYe3uGAxRkL6kS62av1WN3krVijtPc5ynTpyG4MHv7egWjwTGNugxmVVA17EQs",
  "key12": "gwLFnZY7EfgHBBRFFRbTCN6iBNG2pQFYtcqk2SBLSK6FGYxwb6zvMd1hWbx18PsN2eXQBPj6jwRrf1XAuAG4dDg",
  "key13": "3bkCoV459QAKS9SiGazZkJfqocqcq1bZ818bst2tg4UxPWoRHNa5B5BY5i1VW7jQDvvFAZJMaRouMFcTA32GU4CL",
  "key14": "kWHENndWu5VrpX8hiDkpEcnKEVd3wtAFz5gSUEXaBs8dYui77Q7tpXxinL5o2ohdqwZpNm9PHHbos3WLcazNZfH",
  "key15": "5UymTvWPfJRQvVFdHFq37F2wDoBuKVW1YmCZXDrxQMA2Jhg3z866FGQovWEVp22id91Vv4xCBUx3gon1VCihmnPj",
  "key16": "2v21YFQV7LfpEuhEGbNF3kp7VAcoq2NXHzusRcyV3XbMLevtZwCZMZQJs2FvahExEAo6wAFN9K71TSAoreiv6QNn",
  "key17": "3TsTYFvdSpkmbHR2P4M1kt713hBv5MsFkfBZo4kagviSgACVgvmu7yQBiPzgnwQmiKjgPXrAExqnBEXUzvrqXxfx",
  "key18": "2VgFxSmdBcewqLw13MUeuLVUQBpxPbTxpfk3Me4xf2S6oxvKExrEGmUqrwx63fqp32fFSJbmaetr1MmWnH9ZDiA9",
  "key19": "2VLerJ5ZEaJgQtfrcHP8P8SSwiQwFzw415xJLvP5uoQymuNaPWhNXafUgNHd8ZMygqgqEdTMPPFup5wZmBiXM6FY",
  "key20": "u2NnNdBvfs2QckqpSvUGnuPRTVZqztMcVoAdFTjMVNimFssL6RwHNmdf8A14t8ey9NHjEKAYaxsdgwvQYLzwmf5",
  "key21": "4b9mS2SFERTkKbpomW3q5sWCAAcMtHH2ZFysdWMoyRNF2svV5C8daCJfnQRJcbRaAX9MnbGNEX1Uapbt4AMSd7Gc",
  "key22": "62yFNRdtWixkvfoBAkwLBYFzcJsjbLSZaRf7QSWGuGMTd74pg2FggHEaXD2U3aU755YneeE75pAoaxb858K1Cspe",
  "key23": "2RDP4tfLaUhmByPXwhv3A3AS5YGxftVNQJhQNWzJ6U1Av6BbaaKebuGk8UzJDtcKwuFgBcGLaLxFjZg5tzz5macb",
  "key24": "2Ea4AZnbHuKTU8RCY1HgrUqSCArab2MkyFUEgWXkaKqPypweAHpVzR9wrz3M2hechau6yZjEcB8jnDTq9UbB684o",
  "key25": "5zstR9DDFZGqUpkB6LqwGeKxQ7rbYv78Ui39ikrcGYhN8aVtwttiwNGWNSC3aYBrofUMbbkH6EHHrD4xRPTcdALe",
  "key26": "3o1GjmD6nyvW6BsLeZ7CDhqcnR3GnoKsnaNFiQ9JTfjLLaWw3qeT8VpsZQP5vQgXZ94uPADCucBYWt2HxmrChHpr",
  "key27": "3UwSA88BLzGW61SgbBQPcAJgvsTNEsSAPSJxwTDAqkB95yHNV2ThPi4dDNMJbA1uNeGxHsLPCGMeBgah3SBxwnCa",
  "key28": "48RU8gbRCrKWtf4TVCxkepg7MwsCkgVzox5SG65ETkZDE4rpH38C3upz2yH3hVBKjdsMB5gm33Pw8p2oPraKZypw",
  "key29": "3xoXuWgRcnfAJB17ZGiuk5bZHAA4v2nNfFs3mpPJXsvAhZECs2nbQwxa36xCz9eeP1UUYuyaWwCb4DwzWJjY6cNT",
  "key30": "33akcJohaeyW41JukyGyJ54ash8qdswBauzhzbbhoB8vRkgaxhphstf3ffqrrD7i2tM3714674acMZvSKL3k23JD",
  "key31": "2exhbZthqzrnSLNQEdS3EhxHaTYt2wSpEA2qDx8KkuuymrH9mcYNjRv8Ex33cmhbM4BMDMggs7CmBPYgUJyHzJZc",
  "key32": "2e1wxDnBFDj55u1CwGXQWCocVyfVwd9DEDtum296Z7KEZdfq32K6ekLWjRmfk5g8ZPJVk7dgFjaEE8Ks5PB6WcLq",
  "key33": "2rxZTZHeKcMt8aiqMFY94iZgRPFxQiC7CrDcCeenCC8y2ASP8HuE9kGkR6SPDYpCBdP2NAnMk53dq27DA4Lm4XH5",
  "key34": "4xiRn3tQ1x7zbSrgyqSF7AjSEbG5sMfoB5mL6Nq5op8pEgqa6D6dhisyWaGgPFhbKTSYMARTNGDj2P9W4vKfaFNf",
  "key35": "5BHaP1fXVQ3yhnQfGdnDbR9uqcRiN3EToyahoTUBQ6nR7T4afmCrpZSwz8VSaRYdmWpZCJdekXZ1MWbsGzYBBANs",
  "key36": "4BKY9f2vSp4yREPAz8WyB2JBo3ZX6tGBnVohF4xyAGY2HdKfGYktKnw34ZdprQWEyJjAviLtUMGMKQbM1XgHatSM",
  "key37": "2qqBYBHzdLCVvPcr87pttXuoCtjBbeKcXGGn39PngJVDjne4cv8qts5EhvFFC98uLmXDHYYbYb3CL3LdzBA1mJsc",
  "key38": "42CCcPb7aXxTBQ4iYpCyuJN8GNzqsVbxu6eDmfJH5bRMavsTZXYs73wWGvAkaxpZzQ3Z4J8nQcokiJDEv3CNdT8u",
  "key39": "4cjNfFRpRVRgfk97M1JqiSjHFxpeudNKAmzXufYx8T4xzGygfCBaq1G6cChhTxVPwmiiNpWy6bigCNfB59rCuSr7",
  "key40": "3TVy23KkdKfTYabmGuFfXL8LN73uozvNNdHcXPLzwDs6cGyqCHehWoQkoUsDJZDc7xejmVhCZNTPCpUXCyvb8SZG",
  "key41": "5ecLs8yDgywzFgk8h1DWJNugzcmhL1C7WGSzM73y7JqgXYM8XupBq8LV7SwHyLzMXK3sLa2aNNGxaWyXUbRTmUt3",
  "key42": "5RHgchgH21UZmQfENm5sRu3A2sN7JmK4qRnvDRGGPzGnkf33Guj1aPDmhjeLk2zGXVPvAWG4mN4LLkQnEpiCVfNY",
  "key43": "FbssgvhUisqoCueN2YTBSRgQHvTJpeTJWw3a7y6Jswj7QYLnqd4vxne28Mq8KkiZDqTjGsTCPDBLeFuKkmXXjtv",
  "key44": "2oUpmgper3WVDGZFz84hjXbH4o9qctpxYyTcDYFJcdLVr9jQa8mykWbEYd5CnmehwBu6tFcuaEfUtV22yMkUpy9X",
  "key45": "4jbbpsArHa2r8iahbbFzxefYrC1BGAFmTX9YE74yYhsDGLYtXEtSY43vvgeHHPjZXEqWAaLAgH1H8b7cnwkhg5eg",
  "key46": "5QEgzpVkKT4gYJMqUEQnHSYPQfy1zKAFSzwxMiqkU3y4BD8bEPpgyYtewMHgvDjhuQWd7Gtu9PLU22fwauJHoJd4"
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
