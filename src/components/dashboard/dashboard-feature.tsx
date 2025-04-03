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
    "5PBx6rVuuKnYQEvKnz4VDZGYp7ime8mvGVu4v4AbE72EXU6au8gChcETvMGbL7q4kNdmW3SLM3ZPTcqQyizqmU4F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65PRUjAorCnx8hN8sX44wZ22bBgdva84gXMTE1Zv3xXCRHkzEDkaZpRBPoKTSMi1g4MnefVKqZ4HZiTJfUXnqEJ",
  "key1": "dr6aN3UaE5SQ16uQbupgELKJwSTbAuSgYvcFvmQq2THH1nxdJzfKezA14WGNU1qUUsJFQ8fXPoSp5k1fkA3ZSBx",
  "key2": "4dYvD18TmKi1meeuC7axpdX2ej7QzUQRpQfEqJkRcJZ3XPpHkXULoh7DTFLeq2ZGTFSWJNH4ZfEEAEf7M5y2qcvt",
  "key3": "2ToMVLe357RY1VgJkLj2ADzkRfvAWtF7nmndj7kXdHYbfFewUrbsXZAivTQmLySPrJjMWHQXecGfVekFGBSyJgwN",
  "key4": "3eF2XnfpQgJpNxHEHNGCUtJbEEpYV6UGUhacQQD8DtmZLH9zUoxw6GGBWUUk8nuAPErQZ5xyt15T8J4DteCtrnJ9",
  "key5": "2CFdLaARUBifQcuuu2NV71sw4E8iaYFVUsR5Y9E9aZnBnKsjpFSiQRXmEtmCRpvFfNBg59rAVpuUbQMRYNeAdCVA",
  "key6": "3uUDwNgtp9FjK1hExvfuMgK9sXfyDeFzmc535qUyT6987VFJXUkt53vd5fXoiswVZXyusNxg9xdHTmMqzUGE9XAA",
  "key7": "4C7mXrAYTZ1Wy2J7AB886niDUUpQgSzkBy9TDrDX76mghFLpmgvPVbAncdeygHf2kPBnc5fwRrTGfrdYzCsLhXqM",
  "key8": "4KpQoiguH54nZWRUHCXnqU1VZPNjZ1yCk6bz2dqtZquhygFs1CsnWTbxd2ZzmrcgDY9QiDJmMYA6o1HPD2t5Ydcp",
  "key9": "5WLPfCDFGbixSyq8pRYVjsnunS5s1p4Qpr8AMpPgXy58Ub6gKj3Cdvho3YUCfuVJWZr7LpYsAW3gxrv6GcmC4fAh",
  "key10": "2tkd5EmNVxFBbxqkocwxKA4Zzkxdc9w8N9myNZgmM8VaVzgWenTLaiyirVuphjudeM6D5eYWYFC8K6dLZRedG4f5",
  "key11": "nTrfJuoPRDzG4CDx83xPFzzAMkrtKMkXH1XjdoexDwv7qXZA5Rk5kEuoXXmmiVPRvmEdp94HhiZZrHajbbmkrxS",
  "key12": "Lu64J23BZN8RQcDr3tpEZHpQX9ba3DHF8mnAs74MhVhSiGTVSVYbeefpJXmSCYVBxyMKrXCwdziB6TfRYuv4PRa",
  "key13": "2ZKWzia3MdvUA4U57SZCE4KG2X58CyJ4JvUQfA4RLqM8GDUyhh923vFX3paZKH35RBZQkUGoRPXbTB3qgWkzGp2j",
  "key14": "42jxdcfsQifPyk44aqX1bW24mWDA5RQWava2mmN19QoRKeSTffL1jPxuTHDX1SFeB7RCa8XQcWKweKzrrSA7xPQb",
  "key15": "5d7BDJMHAtaTN9UWjpXTxHpxSeAFdywwA8mCSr3KY4RV27r72j7Fz3tMY3JoayUChh2aaqWMPnCHSPFLzTtQc3Ri",
  "key16": "2AwQiUJA8qbMLwcVNv9x8wniHUD2uEojVu5YgN8HdVL23hNxSuKoJeHUhL8wAGWhvnKoeHHovdgR7vr3xGomJD5e",
  "key17": "4W78JeEzLKre2jXfd7qGjCpE8fitrxypDeGJ3VFWHQD4T3r7s2ZE4qMq3W3sGydLbUtdgLbDtQULSNiKGboMfTXz",
  "key18": "mAwGk5KGUtYct3np4mjKYBr8WgxRRnq8F9m31cdpeDWmAqiLmUZBJwVYb3zMkLDzfwvMNC86z16rYew25CXryX5",
  "key19": "4E7q97ivNfu5vZZV3M6CBQ2LFnC29TdRznTovaPqQswERSh7pywWz6Zt6jLDinpPZtRSzYtyFX4ECJZm9X6S1pxQ",
  "key20": "3owXMHd9HhzmxudDxFEQdxax41JnmzoZxDUjgJBkHFrnL6N2D7MMT97d1RqjkMEuj9FUujQpAQjXnSy6tR4tvnA3",
  "key21": "4juVctavo3q9Cv3EhEMkV1wq5KfQB4ipeMSnYypsBvmhe4NY3MX35QqtTBgf7btf2jpJMwb34PmrBzLqBYbbJmLK",
  "key22": "5kEt5AxZAozdT5YawVvytLDm33f4dvmnFP5VS891JVztMM1ZF4dsSS9EiS8eQ79zwi9ksZezyDPURFNV1HXAdQyi",
  "key23": "my6ApoD8tCSVPN41g46nw3Us4cWJuh1JMWggMXxkkPzHG7J9xyXKDhY1Cbp7byx4QnMUFZYobiwear6sdtCX6sq",
  "key24": "66TzRm2W5huKWq1Qyp3nLzkNLvPKsqpWQt83YRFTbX8CBmKmupfoZkfupw51X23HGeayYkvaqaXdmPXH4vcGvbHe",
  "key25": "61F4fRf5gbrNE3XxBtjDfPTpnVLnFym5hiJj8BxXDAfbMVfeRNz86ntpYgK2cXk57KeAxaCVKGTW5QfLwh6yMxhq",
  "key26": "2RbxnhREi9iGwvRPWDiP2AGVsF4WeN6gfg3oBSfQQkCc6ECRvht2yL4DSiQHcqFrWjLrpj2u8fwQUGEDvyBMCpJV",
  "key27": "4SiSTKnQQbxoiMJMigCE2VjJtkxP3sr5EtNA6y7L7qvEC4F12AzVasDXnmUtxVQeB1WmuU68nSZiR4Ej761qHEuM",
  "key28": "kx8DAC4aidmZbWDan661LrTv16n76BAtUrgY97A5HnWaA9umHQZytAciSLroGgdf9yLBru9EQ4WiqtgeXgwThzX",
  "key29": "ji2BrFCKnszrdCDjPNrjTCdhYc5uAaWo2BmExypdJAfsjMJGsivFv9YWQ9FcrV8u9guhennHu8kdjd23ri6BGtu",
  "key30": "5X6RacogVCanE78s5eNM17BkfcEVcmjLm8fuWJZNZb386rw86MeTWgmNAgZvr6CpE9uibxRpsfVBpF75f6RHHoND",
  "key31": "P9FyGXMFgKKM5LoXK58t8Li2ZknbSNLqo8gSNDQWd82UjvUH4akKPJJuycVoSiePueNzZwpBEkAY95dJUstx4NG",
  "key32": "4WMngSd8HL1e8g1d7y2FcMM4MMzHbT1EHiuZJxWqSuySoQxNR5Nfx7hPP9QT392uhpiAU8rU7Wm24YsoVhGMd7Cd",
  "key33": "5NS6t6zyxpNFc2NabE4EySRA1XyRiR2k3wtopSDwNnQ3boS6D6GfQgrTyb7HSx3nWDCqusxdQrAE6DvaTcBrUhBR",
  "key34": "4vvmzuXbZsXJkHUZakLhu5bXESYQn3UnNRHV7MkpySGs8WBenJRjdgvMUxkUTYvT2DCf3PDpXSD1JqSJrAoyW4vT",
  "key35": "4GsoFXzSt21YoVPBqV7av6Fri8C22oUKCgGHNcAFwF9cdM6mMSJKGoxV5prF7MdZWeVQ6fydmaE9tAhM2Wy2ZVcq",
  "key36": "4uEALXvoHM6rTnSW2Fk1XCMnDJ41CR1S2mpEZQGELW6QAxGqdV9cWdQoakNF8CjZhmtPNT24DWAggk9zsWeJSqRs",
  "key37": "3tX8bHLBQnq2AFegPLdoAHJcc2cgNFcumpezVZtFSMaWWbEZsu28uV2JeRep13CmbNNRafKwcjhDNyDxjpSvW3if",
  "key38": "3Emr7BuA6Kmyt55W5jNN8NHcaogCmwkvBQoY5heTZrXYszsPUhD5nLHfFkJhUG4XNKyupx15Gv58v2VNnmgj8iqx"
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
