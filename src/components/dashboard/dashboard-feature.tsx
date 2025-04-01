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
    "353BCeYbV75X9UR19QHL4pUdJzUJoe1xxWbXXkULiwbNDHgiuPnecuidGvqEJnJ9j7ZEo7259ckW8xvdYny9wFEj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32eJNcTWPZF3cyho6xsHxjihF5NhQArbDxbWRLd9n7adpKU8aD7LAz9zbfkXqnBU8ex8BtErPF53vDpoXyfftFe6",
  "key1": "27AoXbP6y2Lge2cMzp4bie7a5vHrbBxtgQu2ne53KRpNn6naAdNxRXNwTDcWbcA58EsVpbNC6N8AQF4e2evs6b7D",
  "key2": "3Cax33u1WqFsxYjk4HP6QXHiHd9aY1WcFsU2gQ1jWJgueiLjf791ARy1KaTzSf3RkXyqVaeYCaefoCAwQkDzfkFH",
  "key3": "FgisY4jASqVQQkFh5BemNegQpJvwJEVMPe68j8wHFSNABWoB4n6BS7KFM89gnCiMWY5CThx9wu97WG1QEWhS7RT",
  "key4": "3Z4Mwz52d9RHvB9m2T43nb2g5eRiBizxprQ3Sqj6KgagUagecqkcV6ezFBs5J1T21FZ1cjSZVivgzTVwzRChZaQY",
  "key5": "2cdKvQx2Nnc7HxwhnyqF2mSRmf7xNXGnMMZ9FNqPhKuXqtH11gYzHbKBJhLQvBwvgXHcjWPDfSFxV1Fqqv79jwwz",
  "key6": "2FLBiL1XT2acxwQo15p92AaQDp2UGyE2ZDSCVPWZgnc32jQYqLHp9qfqzq68YV4CFxvEtfte8S9g611LyizrPkcw",
  "key7": "3Ra92eDW3tmUnGSxocQGNErHNiG3mhcMFeBLeHoDHYdEGS7h8cpLjNtUzMyQAMgJXaS7YK4g546T4Fw8DKVoAkuY",
  "key8": "4u32WxdkEWM2QabHHy8tNdhiXqgcMnnag4UsqsU6gQV7PNuGyMakd3mWW6TApFMQQt2e7H3C3EsY5dz5PGvUPBT4",
  "key9": "4NDcmWYoJSRKRdNfQm81EM5dme4rSBvyy8CZmsfsgm7tHSsjsmKCxJPPWCeYYhZ1QpS9BaXMscQ5nire9yNCB52r",
  "key10": "4TrJsGbuJh7cw6PzATRooH227Zr4dpkkjheWtyY8vAYsVDCbMzuSPzNPjJosGdKsyLfoAtJpy6TyekWFipwMSMd8",
  "key11": "3XqQzMamTokbHz9Tenk1ST2SVkLn8aakeJe2j4bMqCsLnmffRfMufv4VncWX3fj9voeBc1gKr8TWkahsaJtZSheW",
  "key12": "5JqMwNwvxhNGbGVrXm9sGhbRi4qyytU8d1GXwT3G5w1Le1FqWwspPnfRnjAmMq6zEaS9R3naJ3tqLSLnzbkENsux",
  "key13": "6gfXcyEEcqXy2FKMDVi6oeYMf3AQiBTUpmtP9M1S91dxQk4u3bBLWTfV54Cu5gsb3phZT7XF8bUaDzfQUcR7kx2",
  "key14": "2gpt5JiaGYNM4YpHp6y6jxRx5APab3zNo8QrHrH7ciyEbmwDQc1unQocuG5r7g9WVw55iGaKpvzadbQuQEwM1gX3",
  "key15": "5t286ZEt7f76MJspMVkhJjRCMecdgXCsnneJhGH9rjRysz8A2RFHjovCykib8Zb4mWZFatWVwYkmVJxsTwt1RvZU",
  "key16": "3nAnVZLHTtPCcMAWXV1RBY7c4HDaQXdr1EvY1UhwnHEyRoL4nQybqwpisPdzdk8nKHeVL9u2ubQgDb2GmZXxMKxT",
  "key17": "4oTP7bBt6WY9S59BxzgBRiCejd9hx7dSepWzBazGqRHguSb5iCPmrYEUypkbqDc74owwbsTjqNAAMLQg2iwWtZCz",
  "key18": "2cR5G4dcXh1A8sWZ9TscygDN754K3ytuwNgeJEEeuokQHD3xuTwR2sn97nUXPhuLRjNjfmCAEbjYHYFyTrjJsBbz",
  "key19": "2mBhLVThMfDaQRw8adr3GrYaJT1Tpfv7aw1GfLmAHNBgrJJyctLH3t3MspJXy3YQdEWjDvDmydMqrwugKkSdxcfA",
  "key20": "4iTN7m2uFDheEUrjbpKcdJYVg2CeXtoULabPhrAm4s8oCjjEF2Qts6GtTFDjPBcnPKYWUDaTU9KLeMuhPnpcntbV",
  "key21": "MpQvQdn6HbvbbsiAYEPLWrBwvNACF8aUQHHpnmqahasnHLJonDKsnqzs2qf2fcwDkyW3XuoXBEoHNe5PMdC5m3Z",
  "key22": "2xGksZopTz8DgsYVdmWymsV4wYCnvV9efLSgwQYGs5PDenCsxTaeBagBFVet3QAjYaio1t5BT9dhoFN5AumtC4MC",
  "key23": "59F2VccCS98DGTVwevgZCWHoPf7js67jQtusags45T7kXUBGEHAXUWdD8YUuETHcwrTgU9A9EN7REYZd8xZCgs53",
  "key24": "9tGnVxA5JBKYHqgtChbjN8apKzpYx16zGTnJ7xacxyECwYQffSeH1vXmwqguSxcJeE2LJtaYNEwSyHjyMXXkLBf",
  "key25": "4U421yENZpzFvnF2qMzf7tiQaa8FGjgqQmS131vjQ65XdstBvhr7Q87qwtpAA64zL3L6pWpwTcdXR5TJM1HiSw33",
  "key26": "66v7PHJ46pUW2i6utvo1QmprMQ4wAPqKHsPt7Wga3c4jchLfvdfDbsVnNQvLf496JnkJ4kNyvo9Sc3QfteVUwqfw",
  "key27": "64oZWMEUM2Ybt2ntBhL7FVWR3brjn4cnDv5g5nrLeAXExd8Z5dQPtySUzypjf4UijVWFpzVzRhXq8VxWcRSzMrwc",
  "key28": "BRnc26qv4uBoyTnWo77XBoWECND4RcTtvWR2XwV4zo4xMLQ7aTwFmTkeECfXVhxAVcZk3YhH83XewWCZq31Thfi",
  "key29": "3s3XqdQaFR9Cz529BwxyNGGRG1s5mSpJqzQVbibdTmhqvSw2MaCBUSXyJoUKaCzs4ZrxtbP1C6nx9UWNW4rn1oUS",
  "key30": "3X5EcDLyXFfrKHRstcFP9Uh2z791axuhDVrgNJvXhoMxPDbAsQdUi4PNUEk31p2tM81SxCom2tYX793pYb45wHJZ"
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
