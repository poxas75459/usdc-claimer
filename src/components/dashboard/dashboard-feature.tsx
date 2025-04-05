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
    "56xTdRRrrxL5cSLwFLd5TJmA9eb4Jt7rtb22j9s8PqNkJJfas7L8jZrhjJ5hjtcKzwKCwvfaAEwiH4VVvZieRWzo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xVkXAFUcwYJXACCkGEF7SycHcfuGag4j2UUYsLFPqsdJzMX5Pf84jrDkRo77UExrAhEQZs12hS7TcMTz3AnYxcA",
  "key1": "2tn7JjdFQkyfHPN9s1PDnjACkeWu7TuVbVMstzAC1rnHCB3N9qcWFJcn69WdzCG3vvys1tvaos9yJoguq1JcA5Nq",
  "key2": "25wsEnCcShas67ihv8hGforP8CHe8sSNPgBojSUSk7bb7Ucw5F2Sm9m26p51KwKTxMJWwF2TQofpWjRTMh5L4ASe",
  "key3": "48xDLoxpE684jZdrN4Xhikhnnq4esJ4nWiCDy7DHb5H2rzdFsNFt4MQrT8LkBgEihCHoR7yCoNz9HQjWrbACBc1o",
  "key4": "2c1zR1SizehXY1P1sFGqwkmoJ3yyHS3ukxtg1RKj5gnhRd5tQqUg9mFftJi3TuFqua6Z8rRzbmd5mWvNManhsCfs",
  "key5": "3Ch2Ua7nRckm1es8f1Cxuuo5NA5XLmSCoPDQSr2ecw1tAJniPvmPA56o8H28rasumnqWRBc1c87CRY8M8wM5i5uw",
  "key6": "376x5CdywxpguyRZ1ckZWfxjQYcyrtCZ4qXHRcQ5Cz9h3LcPycYMFx8UJBS3bhsHG1Jxj3iE2pG5JpRbPqhcqVcg",
  "key7": "4g4cWMkb87Eziky2dATJ7MbwBgPigpg3j7WihhP5q1XPUe9RbYZAC5oRcaXg7pkUNt7i3CgTWA1gPMw9D3CCqhyi",
  "key8": "3ADbr1BtTRLww8ijVnDR4mxcs6yfvS5xujaihzT8ZBabVhG6FBMoyMm5zojWnCyyGi4MYWppxmcEZJNaeeZTfwwr",
  "key9": "21qPRkwfBCR7EkcC9R9ZbJhYtA7Hoarv2YZCUCMFxCoaC84meBVKxwmcQMcqTsra9qjYsM38e335EhctBuEN34Lw",
  "key10": "51txqQuzHb7sVaABya6vra9JHUj3mWSXfe1KnW7kkvrT7yry4EVynfAfPWBjpxMg93aBCD66Jx66LRaZVpcRPYrt",
  "key11": "4ukfAUJZBaG9NdaSx7jTrobw96w55eLchSDMQjYjF4vW1CCT4FLmVU7yR8x6nkhtYfdEgHcHHaDbWvEmobYXuMkG",
  "key12": "5zXLjaXyCVjdyfux5ZQJ1cdJJK65bDRGqwezVEGxA4pUUNe4ZbC3YogbzuEdGYcT4MACohWhLg31Z49mdaFVydV3",
  "key13": "3cpL95FAxKreA7acKF8tb4V74C5U2oEozRhSLpxwRfCNQYqaM96qtAA5Q48xyX3io6Qgy5qgDcYuRxGMHkRdDj9f",
  "key14": "Kpz9QuaYt2D5RQvgcRq7ULb8q2WY2xtmwuDtQyaQMRiED7vK29gdDsnDiTmS6cZbNsMx6K6cK8C7YL1CRnWN5Yj",
  "key15": "5T7mcfsKyMuzjzhX1yRHPVSiYEzdRHD2ZsKqJEhPu3ujyf6hb7KbuEBfhn5Q786x2kinHNfYtY8w6UrTNcn371pU",
  "key16": "3QQL9xq7xtZjF52YPJAWNvo8nQecs27kRjU9DrZXf8Xxg7bhkyFDcftE6JqHZWHEjUiqaXhFd2n3MGFnP9hKjsNT",
  "key17": "2S2cLXeyFqp7cUsW8DCpEHYuRmqo2dbQKeEUuwLQ5HLu3YTGaDXsBt9btdM7gp4igJRupesK9ay1rwV2xkqvct7f",
  "key18": "PfmfRPoMVsJqLc1hNvsX4PzQguZoguAv16xPc7odMsA1Ryfiq1H51WFEhEW2rMxjwuE97JPbv5j63k18MYy8yVW",
  "key19": "5aNLwfT4A91gURFevjPKHxSBd1zxk8mSxVR1116Gkbu99nE9b9sadhePHwXabpviySAJSr7JKr5ksKR8Ean1iFP1",
  "key20": "2HLPKSg1g2SucyFN5y1uvzy9VStQ8DSQU74MP8fPqxedLu7ZNJst8Ks4k3rC2rCQzoyZoEaF7VrcZt3yMJysnyQQ",
  "key21": "5P6GhNSmsNRU3L2SarjoPsw6U9pbkA5VdZ8WXVWhz48dRq1ok5bswFB36X9JGc3e5bNcCTtGaWeHaT6aW1JVQhyL",
  "key22": "RvbGrJ5B7DtYyXPbR9bMc72Wr3A2LYMvgyuZDJg2ogAw2RSgTzXdSvDWRtdrvSBbR7e5HDx1hbJCN86zJMBeKVP",
  "key23": "2PgpJjNctpckeHkAedVtA41k5pHZwZGrZRCdyWPWwhte2CiXMEs9z9JN9wat64ZaHro4ZoHhjJsWEx8i4UhtWPJj",
  "key24": "rGN9NMQwA17vS3PLvs969MQ5KPwZNZ67HRfQ8o8TGEHgPBxZ4c2dYCzpqZu2vuPjPUs5mZNsUYqiJh8q7ipaWX7",
  "key25": "35CkSw8siLiAYBzHRyemMNT5zoGnvrCSDHi2cpseYByBXF4FKyCKF6CTBrsVMDRfKTm79vvsjFMTHPe3jYofujzn",
  "key26": "25FGiBEPYs6ZzVJ1aWHnAt2CMwob62ruMQYazT9z6bkaZCyYKhig4bhdxnAwSzzmr2M5hG8DsGgszGUjLMxZXdwb",
  "key27": "aQDQWkKbD6UWtQsXfExRfSidTawp7ytNHStnb9sEgpeUSn11we8xEs65dgb4CpgYNx7wxETExp9GQkw2FMCbtjz",
  "key28": "39pFMdUWCqJ1ghszMqBpE1ErwY1cdMeX7Szf92da7BJhHELEQTwmBrH424354J5G6FwgFrSLTmmqDa7EQfkSUqVr",
  "key29": "3DM5xLNpEmwecv1NVVCWVY56KBMxsFafU4D6GmnETUDaDYzYNbPfzbHAj1o7za1QYx1K8KFA9NykXDkh2cfnV9CD"
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
