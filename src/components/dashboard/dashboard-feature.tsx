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
    "4aSBii7mFQTD65jk62T4Je1bg7SZXBKhhmuggcAPQu3yZxdLjNukHKEjp5DuHXSv64FuiQpzUf7qBCQhWo4Ur8UX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hzSuNHE6HcZZf21QC63qHQpQx2HDarnRMQ1iSsVasJAHAVxkKmfFUKGFbjXrxY119DaSMAxtteyhXJW5L18ZW2T",
  "key1": "32exih3BPgFVMKuo62d6uZUmhr9EMbGcDMBvBBEgbXWfDAJhhb5ZHGAW9L2wvpjms2zhMH4qcb29dxfPKybUvvJV",
  "key2": "2httsCHbPoNeuPEFMJ5QG3a4JmjBf2odeD4yJQmehwQUmjDfKcAfH7frDvs7KUnyD5BaWR8XMq1ZYhm9CyWb3rSA",
  "key3": "nSUBADJyEtHvXkV8BMgjJsZ9JezdDW2itb9fVaSLkzVBcBD4zhUuV9te57gWhiMoVQL5Aq545prAjwbbsVfXsuB",
  "key4": "51geXkHpi651hgjZ7nnHhJhjq9c6hWSyoQ2toQ8MrdnRfFWrxQoYVnfUHzhXR4dYtqW5jxaXUicxnWZKsuAp4m82",
  "key5": "gN9sCUf1CHyEQ4pJowJkodvc65Sy4DdmwbBnfmWdAzmNWhM6j1we9RkJ3M1LqcRrnGupTybSPYx3V2PKx9Fs5pa",
  "key6": "42BwLXW2TAw2CWZCHPJ7NHyNwVnVdpA28oH1Yuy4Uvfo4DM6zEqY4A5rhLZjtqB321999LztcUhYahZLvTKwgccR",
  "key7": "5xr6zHvAZJtYL1L3cN89raMBrr9H7AXGB8qvAfH8BhdS61WcFrt82oPQTr7wsadSZ5D4bQzHWRMYF2oWsn52Vu8L",
  "key8": "5XzxTFxfFJs5JhPz6pWXEPMBJaVHS8tcmHgPNQDvTJr1isGHtyfczYKgnK5moBzKpQWnixA6sUoSQsjqh8j3jx3V",
  "key9": "2x32SMZ2fJPSWMS8agCAzquaTSfwDgHSkNBNUu9he6YNYc49aX12hskmnce2d2DybPSBpFtUzSjtuTG7f3viRM5L",
  "key10": "2qPGjjgEiFf5g5FH44dDPzK7RX5pjW2wUgLAcNbFrrQbLg1gVnb1npRWodPZZSBnBaSUQ9DTa4EdphqS5T91Rim9",
  "key11": "5qJC4qFaGjQ3US8BQpg7ACnbrwqcycQYT1oe9oY6siHu3tJANu8Ks35GiVjxtebAdw9afrV5gbLtAGbrKKE3CsU",
  "key12": "kvUmTeTtHRUJK6MngAqCioNyyVGpN7cLreeiZZGPtMS3MLQ2T9arnquqyDURp9XLn3RwCZx4TyU62kx97TNUvQp",
  "key13": "5kCdGfPUsFPKKejEdnHzJoESnVoF2cYC3M7TYSm9TgBi2s5AiW46NH6udGT7ua4cWYhy2kQHWA8gSJRiDe1wkvNv",
  "key14": "4ZGpaz1xRSL5Su6DdccNayHoqD1Y5wdNRM6AMNXs82T8eyDKNqmgqqTqVhHPmDkb2wWtkW4yW3tVBxzZDWLfya5k",
  "key15": "2ynjet3zyyhLivBLgW4KVPfDyGj2arnniwatZbvTHuZsDmuWgZwwCqcAbcqjkv5dvuxz2AziRYfaSFkiqswF5rhm",
  "key16": "smqwBMxdA2ox2RqRry3etY7e2RxHhi7tx3ujiE1Nd3nBYWSHnRUjCrNKNmCbuTem27X8wbKvRsj8WWpoF6mWzJm",
  "key17": "4m6fLkdNLbNWbSMnAqzAawUJDmmLRxd7FzYjKGtVg6P9AqsHzPyEfzwAAGoxnU5tdcYbyE5f8j1M6HWypSWd8SqY",
  "key18": "5e2cDucRTtQdavRq7ueaXWqHEhSYuPrSXc28QhJsM3qAeSAnsWaXrpbhTscgMfk8Ri5fYXdXduuWisLq1i7Ua5Si",
  "key19": "3NQ7AJfrGK39gQikzSXLUYM3QaaBcP78epaa6dQqJRJHv7Gso7xmQxbsduq5dbT9kgn1HBeU3dDNpTtpMBrG2J4",
  "key20": "3chkkTT4T3E7AFtBqFEpEPz6kECXWP8Awr9BSARB4o2j6RUYMWKESzUdjoFhm8yAFJ3oMVFhKk7qQjWnrTYn3EfJ",
  "key21": "c56QTs7MLMWYAFc2ND4nYFu8t9iN3ECSumePEZMmUHJ5ut2QLoG3dUFGvitnZBpXgr44fxwdJGoncyARN3JDoe8",
  "key22": "29yfPzCzDD2pna3P7DN5noLWNAHZva526XXzzqz3Up9YrwuUxZQpvBWpPikLA1s15YtcyWi8nzRstuKQe3RZVnDc",
  "key23": "67qgQbU48DEP1GVpWRtaauc6NgXpcGW8NM9ytFp6PjunzzJUkuq6rNr5hT6hQwC9SzowCzt955VAb12FE5eEduzX",
  "key24": "34aCfRb6UaW4Xpq7FBFyqW95maL5WX8pbUc7hQgYpkW7Vkgz7EBvDHoUizLeJLdHqhQptVrUAmPZbe3JKAnc2W5Y",
  "key25": "2ey3mSydXDEmsBkqPvkFHGjujJFVQbXMCZJhbY2hRKBdac9G26QqgeB488htyzLMmXq6oYV5pcWNGmqEeTGRdck5",
  "key26": "vWWFRP4Hqi8SKwp7UkEM765irCiDSntrdV1qHpwQDHvmJq6hGndtuWthzE1YHzDN91GVvUsj5P9Aub9ZgKLo2SN",
  "key27": "Gcgu3eNha4FGWEEwQXZcdyc24hJkxsQq1HMRMndYdMZJmevswMZXhYmSmgBQoEUq2FbHms5yR28wMFAMSbGqhXZ",
  "key28": "R7cz2u8XNNd1iEMYeYNj3HFRa1nx7gq2K1oskLojemPLUEPhpujF2EoDqWMDoXQpKC7QpadC4MnX4Pmp7PVC8Wy",
  "key29": "5TasvGMqprGbZ38AazaLaiXMac5WJkAKRztXYprbYFS3Ccrpf9MZmWyUGQnZUD5XZNNqXMAevNqSqG29JYQH6L5o",
  "key30": "464yxn5oZGYm9yrNdmuYJFmcxoduaDBdcCe3bHyvwWHjiojG1pPJXMLXgqqgce8E6JgqVsRrd5NJGBxxnFeYiMT7",
  "key31": "444em3cvM26uedi1QAVByVUPUkGCEQkxAtnCFwQ1b9uaV4csyfD61wXPuY64VB6GmDnrCAAusLu7rs4rgxPbjqoN",
  "key32": "4Qq9ztCCfrvfFWNcVX2FXHZYiwVQKdQj13yy8yAtti59pDxbK6PkYzMRzZerR5QZa7KE1mnDbeU7Njdcv2jx7THm",
  "key33": "hHJ9azgQC6tswAv2qpQiYKEAZZH9F9yRCVdbYEkzWTTicVveXFxHsfeUmQ6iB3djQ59FRFYExgyPVvUZX7uqAwz",
  "key34": "3nvbKZvx1ZGb7x5dgm4u7B43HrY77gaKFtxzyM85kht9AkQeDJAwrciP4JYQXEpToPrHpcGtzumk8aFNLq5S3LM",
  "key35": "5DAyzTgiFm88mkTUbTrPbEyMVKdUo86WHKbBm4ykyDt6Uym2MczMG9PDfg9B96e1g6oK1D9NMmZuAzo14e2szYcC",
  "key36": "UB1H6tiCCTZrfF682smooDy1etgpNtJe9mjRNCivmu6GFaTch1wXiwXY6qqHWS7y7nzJbM9LV87Ern4sbu8aVyN",
  "key37": "4tJ9rMmW4fHRaTk1LAKAxdoKwAwK8ULqa7xXr3guj4bU1rbwsf44kbJcFh4mw69fua25tAtQ5jpSfKPUUVUCgQmu",
  "key38": "42bb7TNe95ZpScHbCgi9BbX2zdUgq8Ni6Pama7PnYAAocZxv8nbHinMUm2G4v4anhYvGdvuqDzmYSdkv3BQfbwzx",
  "key39": "2ALxDBbiBNrCaZ39myztTDakMKd9Qr23hhq5mAir3NYAjPAS8ADuUi5oAKzfMSE1m7pfofaB2JVPRMnvNgnR6LrC",
  "key40": "CUnaaUAVpLBZ52bnWuFgiKLYbkhZmc7anGo37VVTr3KzLfsifnCnvTKRwfGJHjNZPsJqwNTG51Wgo7oYrvBWmED",
  "key41": "4BcsLbbchdHLVM1FtbtGUbnExNpmscFyCrYuT1ehsDQ7xWH3v3YHLteih9U2tYYP4Fuwf5XdYCz4eSoqK2HELHR5",
  "key42": "8PqJEuepnSbzaEFA8wnwpMr4WSQNUDrysj5mtAJi3MZn88hGCHS4gqf3VKUZR8RZzANGSPjHyefEzZq6GMLJbbg",
  "key43": "3aeg8cBT6v2WbHMwRU93sH9pysGV8GR6GYA11SZE9kYowcQigKf1NyzonCbVofBYeT6MkFVLikKkvn2muaEMdcqV"
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
