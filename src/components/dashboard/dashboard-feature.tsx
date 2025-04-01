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
    "2Nghj77stfsmHR1zT1WckKdHpKFs4BWAWwnKdEvo29WbSNbBPNaDC4wz2ug3YMQoTaJr7hsZN9PDLA2udt9GANhS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hWmVGXKKRtBiiVqYW4LXLeuSyc1nqBYJCDKkdi3PU3YNaP3vnciQAEaW5u5m5TiNwWheKrAjRXVN4QE4QuzkdmG",
  "key1": "2qjwEGpJjVF8Q6K6JChd27WLS8xZeSgFedRudYcrjALbMPUwYYuYPGjLHJonZuBPktbo4yWnXvaGDaxFqA8EAv1S",
  "key2": "471mSEZZCEPVer6yE7AH9i7PgMFqFr12nh9eh4TffP1VWtisDoznBFjAzweNFGWzxLTdLs8VNmWfKoEhENUdcm59",
  "key3": "23Dbmicefxu2W744tTnUd6W8zz2zYeYNjHkoKKqRt9kP37rYqfjzYEAGaf65x49Q5ZPe1xvRq94B5WNJrsTgxwJ2",
  "key4": "V9VAhtZkDW9kGMVJxuzy7xjt9qzczHUqXxiYUsSHMQfGaqezUHcAAFrgMEXa44dH4EsqqakU2sN4FNAKKK1qnGk",
  "key5": "2PnnjirFyX7zJo4cusY1sg9VtxsNUAtcA5aJjHoWA4riFyZrKEpVp7HG4ZUqTfr2u2u2W2fmTUGi18vPgk7rEEwU",
  "key6": "5Bey8dDCKT2meNcVMuFER8C7PmmMvU6r7nYf9sYPgZNQCfZq6xVBEosV3pgKA8K1VuoQfPAHZ4Uca4pJrw3ym8CP",
  "key7": "E8uPMLkgwmbvPW8L6WY94XEnV27eFjmdWoRcbswL6Wrm5ASHP9CXPESfwMn6njjLrnPae29cpwghAyLtEJ9D4At",
  "key8": "26hQHojWNkJ3rUr2Xm4ngyqcRnt7WNgpvNa2FSWUWKwmiBKmVPEYKbirMrbmAvLXPbBfrr7c25jioP93ePy7dcpB",
  "key9": "5Qe7U9VGLMxgdbCo8FGgFt3bJ4niF9pmieLTF1W7SVx14yAVXHuLyFUvEqG4Fkh7Fatzm8B7HEVvxTVCMwsvBhF5",
  "key10": "4PLD8UfCR1jBSaF3HpF1HZHnLcrKpw18GUPuM7p5LX2owVHEM1noEHCRe2RytLAHR8cqoXDBqHVtXfNSthJrru3X",
  "key11": "3MYcHoF7tjFM2gyUS5Mya8u4JzLdcqyhUcJD8FZiNwX2kVGUD8iX1gZ8dHpJwUQPhvb8PsGVMHAc4C8Rvneatqm",
  "key12": "5fTRzy4Bcmw8SKWjococ4tzsknjsdJp41KbvFK3tQLzZRn7giUS5g54G4RfZCfr6DJo5S4jdqbL3HR3YLhdn6RLT",
  "key13": "2aqeci2kDTfm7iEkFkMh1wExAY2a42evC8ATxAnnVdG1a21beXXpF6EeRDdT8SPY4PytqoRobWpFFoVAj8RdtXVM",
  "key14": "26fsZhrE6YVV9e2xWGfzNTLdEcMZmoZa9qX7r3V6AvJqdMLMNhqbiSduJ4c2YxFLSL5q6sLP9xp3m8gWhx1He53H",
  "key15": "2nTeGr1aF9zf9GRL7Masqpt4b1186zzpYcMU2ydiUZDAu9B699UDsk9hMv2c5wsGU9usF8q3ixQPz2cZ9ktMc4Xp",
  "key16": "3vAEma9ysdDPue4cYqSkMPQ2Kn4NmeuELxJAh3xuBhHZuu5yUQdN2E4hBGH7QfkX2z4bYvwtYxjE4E4nE26jM6yb",
  "key17": "3yjdEK6TAdjkGF3kf3ALGjftrT2KyP24ZFLWVAmohizqEY1Z3eY8DXZ4QWF5h9Aw9XDaKZvV5ZsLZZtegCsaLuZ1",
  "key18": "3nNnL9ffYryXxYuSJjZnbTarp9te6jxKW2Fhmbp6RJE93SLvuT6WXmM82bTq1LFgHAFjQeLJ8U8QEn3YhiFmg57S",
  "key19": "5zVE8xapq48CsX9HFHARXJHTXQBUAibzzzUpvP16VVXqWe4zonuHzUxjasWMobyu27pbAREQcYoNPstSxfGaPiq4",
  "key20": "4TF1zMpQ5qcHEFSFgFJJCgeoh7rmZP1rVzNuEm1iEWojvpQfYHDX2656EtMbNbF6Q4FiVT8bTfDPAQNYcNDHQpD5",
  "key21": "3sFLDWkTxqzrqQ6ukyn41vW6DcdS8XTeDefzFJyJYLJ7v26uh1Am5yrwvLqmuCDqTACH1WwwzzgLygVNT3KSDPHj",
  "key22": "4zYPD2ZgN15VCY5AZD1e5SeMZ9gE4pgUuKHvjrmLnNDBmMSryNUaLjKA6uKVRbu3tQJ5ULrBTHBTzXjmAREAgq6e",
  "key23": "82ggV96jWD9SeGxtTgqhdwop4An9NEe1noSxkgvBMydZ5VXw45xYHnByzjvgDFjRqC6W5ak2NMsXM6qVcekue9T",
  "key24": "2XEyPLH2eno744CtYAQwBab5AL1itoLcwPLwCzLHaUjK2cwtKzoPmjzfSWn8A1EcvNSsCDqTCV6itMbEMcSC3Bp9",
  "key25": "3csy9FVWYH8R7nGqiV3u5Qv6KNiHn89cL3W4YRSDHxpM2vP1rhNK3tTss7DfUXM1zrTM1VNaagQ6ioF2cZ6wo5JV",
  "key26": "25atYLfjCG9BScn6txtr9DzdjSd2MLyFXkn2GqGSuLgJgHBwYiEX4f5nxggP3D1kfHWHtJHyBkoXopWz1Fdod3uW",
  "key27": "4jz5raCLw5JMfuVRvo9PRYc35p5RkrvDaKTciXNyTvjLW4MprnGiisAViuifXzBL7341eYEJjhiivybuFLYF4mBe",
  "key28": "534unfZroDZ3gfEfhnE1k3eNJrraTHKksimdHr1xYmiQFZW1odJXP3H2gVqPitgEaVgcnMDMwvwqYYDiUYkpnGAH",
  "key29": "5sMG8hg6ym1ZjRJyPAazZJj2vY6xfoG5mHa5yj2R8tKEzTFYhuJF6a2rqjKAZBKGdtRvx8mnRraNt5N9Soi3Mo2k",
  "key30": "2yYhny4Y96f1wRfMzw56ghWuyCGj6WkBSve2taNYM7U2ySuHdqYAbxgC76VHdDjozdBf1ZdabNTNrTgTy3yji41S",
  "key31": "5k1R2xYWLq8A5ebfz6DAqCKY45BnKxQy27yaSrPGMM4i1RjdYdHbhK8qrN3KnvWxi6y5zeVKBRYjuQTaiVxQub3B",
  "key32": "fqFs1FQs712UHJshcNFdGFhZm3GXJc82BcFkQaJybynhfqWhT18RR7Viyp5yZVUcLDT4akFnhBDzkmy4G1eG3r7"
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
