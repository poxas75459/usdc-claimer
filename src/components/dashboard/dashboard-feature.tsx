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
    "4WvQEe42NGNCtj6gEfze8yXdXkBYbbRCV57xYoUbdpGqsGdVLwHrrR5sU2SHLuw1FtEdqH16r61MY6mWEMc7Br31"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cn4UWoVXwkB3EoMmi2XhbTVJqaAJcB7TnSJBWRFqMX7kdjCjSwR2hRfX8LP9FNRkYQwqyeMayjxc1RuGBuftH9s",
  "key1": "CJd4Y3QatL9TnBjZhDCqWM1ffLe1tgkG24woQuFgiYqL3WXYhvg163osaBzQpjaCXeE2WEbRrgvqLVs9WXZaPKG",
  "key2": "VPeMyPoJMJn9jgXWKZ9mUfb7N8GyJ7C6wArkBSCfcXCenZaQkncFMgdqHUAmShtG765mWDepRETXYDkizfFDR2d",
  "key3": "9j6zmALsY83eoyrrn7nvojfWMoAZxNPnT9TKcVur5u2Dycjfbeg4Que7nzWpm7G5eRquJ4s1AWygHFL6rDoJ2bP",
  "key4": "5fM3bU84emjNwTjW1Dg4R4njLuFwq8x26JDsTbByPwESYMVARGz8jBcRCtWC1uns2NFqw9G3yfd4sjM4FQtQvYN8",
  "key5": "47c2whztZQckQtzm1rxmxY6R5xWMMxU2wSQevhEAbEC4anFG9DnuhbaWGJSNYqsMYwELHcuR5rtbJ6gaV5rG2BPK",
  "key6": "2bkUZx7WZeJi5xkLHJZh913FoJhNPegZmSPcogtGLM1mvQ2VnCiWzNQNPCNg9oU9LdfvzTBg4Jgu4b3WK4jcWj4R",
  "key7": "5UWgjZN1CVoJPUCe8AaTGmykUdr4T1FycJH4iq4bghTUum1hJ9WBiWtPiNdNaFxpV69YU1PzmsaFfGNANsr4dYMw",
  "key8": "3xcmGVffprLeuej61t9FCuuviKrPJBXHRfZybRoz7FmAXfQiSY94fQXL9S9dtSeqdnqcfZtFnAdmbQYxQc11iJdB",
  "key9": "tjH5rimfv8KRUb5Nn7WBVzzLzffCqbiLZAgvcYsA3eNGdSK9ESNEGfCixNajj9npNB7sUFoD2u6EKZnznzfCc6B",
  "key10": "4c373ovXXwRnibnrDBA3LJjjDhHRSdxCGuMv7eDcYb1rgdbFMAQ3xRjuzNPSyr6G3zCwSrEgHs13E4kbUrrazENT",
  "key11": "4SsZv9pujQGxMT8igQMmm32SNo5ZiQKvJkMUKsKnHFtGuf1a1bbj3M1xVcMRspWWfAfkBWSorXfz8CmHgUYFNPgX",
  "key12": "5KNKeB2a2L6HA85uYdEanSiHfgvbMJoEMA1yLwUS7E9SrdJi6Z1KLdu1onjZdkSpMNmDkR2qqdU6wctCxP28Uszo",
  "key13": "3mVzBLXKukqGAnAHS79YjvVcc94irBjG71grLDTvk8WuiL5tqA8JR1xmLEtaB923UPMaHLAQYxVTDwEX75qTgvB8",
  "key14": "NfDLwV73m9nGAwhKoQSH2kyUy4WLFfUeir67kJGM4WBZrEfu7oQbgcPPccDHEjyymqY7Z3BkMsEymZBmMsJknm5",
  "key15": "2uBLkFvJm9H7MKCavVimYRYywCmED7cwxdLiNib51tCQJcpLu1bFdMuptR8d2tC59PQrzxJBWkBQz7kmCi6bx6s1",
  "key16": "3rR8op6MZtJEZELWtty93VZHEuzob9FGeboPoJL4u2J9ULZcitnBG7JvLMuJQkK2tnYa6r26z2ihBQQzSxkeBYqM",
  "key17": "2A2cpdG5eDXPPAQt2Lu6mjpDFqQAtwoJMdfx5My3b5QvQuEAk1cENBgsDNikugKgZqHaPx265WqJNFj938aBqCyN",
  "key18": "2xQ9RNmDrThJuf9iRpvpx1dYit5PYBRPqpiMFaMHw6ELjs8qt5rvyLkv6Vf3xA6TYnfBX8k8xzF9tcp9DH1YUNWL",
  "key19": "2YsdYGfMiot1dyWWG8ZkayxS41YcKVvz85Nvuss7thSQMZJ5CnKkHkhiGyGVshVoyKieWxxpaX1wCrpGeVc4okBS",
  "key20": "2j1axHJCVVLGk6HYoWoP2AVFcvTSM76p7msU4TVQXWiybkboQqZcKJTxcDSsSx2V8mnXTpRANvzaoMMUDZx9mGou",
  "key21": "2s68tjFKbq5a72jVfqVVsadrFBwSKAGBwZ8qcC8A2UEtXwCcy2J3Ryexp697q8GXYMNYEWfkfMgnAPFgQQRpyCWq",
  "key22": "5J5kzK8sqjPYQHHiAUpcJatEsy1bUyBuUKYMRDjQTrGvF5QenRqFo1TURXpM8XgjXP7UZY24RXW4UFd6XWVCruE8",
  "key23": "3Bp6R4WsugVzjpErdB7nuBCrukxonSTL3qCNErVcnZJhuJ38iL1732eDv9vyhdccAwRUnBZa3GRuutcepAqxDekQ",
  "key24": "XJyYqLGRdyhYApUL7aMu2djD2aKpbUVdxpKodnjGKiJ8oYKGvHM7EufZD1GgALPWQfZAJ3a6vL3FJkNik2ykZ2H",
  "key25": "2rf5SpRjTZt9xFT4Vfyo2UdXEwuZEVEpEc4Fj517V4vpL3vn6yc6BRHx2o2eXkDQbb93QfRLgNTJnkc6Q3QbSbxA",
  "key26": "41VKgZyb6SuZvFCsqWdxuSN33k7ea2ZY8v7y8xMA3BrAAQbESQoJaEpL9oNp7We9vPswAsnqvyUF7EsDbDzogxtM",
  "key27": "216JiJmn6Cd4iQxTzHyknXbAyixdvt1EvvPoG8ETgdy2zcYUg1QXPfkn8867DuAJLM2rP71Had9FyjDpaA44ivkd",
  "key28": "5UbHhReZoJKxNxvqdyFC5XS33LCMjp4QWEydzVRyLNBp5PJqRhxBaS1jLAADXisRgvUdkaDNBvfpDN6pL3tqeW5z",
  "key29": "5VezTKkRzD85FLMaBayP6T3hS6EWb2FK8TS4rG4Gc8rvo98GV5nm2u2tupQKk82moKF35nKfU33nrRuofxngCMEb",
  "key30": "3Pk2DmcPfdkFQUNWPnPNTyqDeoNwdQWSF2HxxYc5LkS7pffJDGGRcfvAH6cDyTCCDju1x7x4j5fA6SNZfg6eoFyR",
  "key31": "4P7D4aaJQompsyciYrUPew5M73JVJNLQfsBcp64rbfLYVY8sSLxt42G4s9DwoN1LjKvCndkZg1KYw14Ub85jbMv",
  "key32": "4cbGzTdHBVMYdN5Nmc7D16ty4EwxBsmcxFekV3ma6Xp9pmkb23REMa51gpomcyMRb5gccpXukeP44eEEi9r8783t",
  "key33": "4pAdgjqB4CTJuWq8piBH3VkYZWsnp2tQqg8NjZffPeqyENYtSfpBPDf7KVTaLfrteUPBNGbksrZSRCeYVsWtRjfG"
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
