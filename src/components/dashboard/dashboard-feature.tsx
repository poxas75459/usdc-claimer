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
    "FuUMggXG9d9xhgkzJjomoNBvW8cPnXScDPviA637nT8QFJ3RTY8AKJ88384jhgrGCVvzTBfQpJ5rErnJ8Qk127e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KjLG3YvuUFBwToAqrSeT4ALGL5nVRwtYTMTT8snc87UMFGZVuK6wN43XLLGQkY71i1X1jgz2wjF4WnuFeYQuHFk",
  "key1": "434TG1P3d2d66FdzYYqtxB3cMu5wECdPUvKXhQumwdX4YWiqsBMJMijxgabJ5M8CkQAzhsfq2WYt6cyZHxhC2WBV",
  "key2": "5K5eUSJ9KQMrP1xAm469Koy7ZxGyR2YBFBvcEdKxvPYPW66X9VaKcr1Y9KHHRMCddzYSRXmP4Ep1K1kNp585ibqd",
  "key3": "5WW4A9eV4QnawJmxuS2LAR3y8gSwyWRGBK63kqfhawhPZpGgysPcLZhYsbGvnT961opGvLq7wTHAnzdsQr8rjTJK",
  "key4": "A8wnNRQz3qxYR77aGMCHjLEmaey5NkS4teH1dx7f69ebhXBvFaapm9w9F3EDKeifWunnKMUZGGx6VEFKHZWGJzc",
  "key5": "4ukWkse7WmZYpUThWt1A2CYmUkPLAtLewC5HC9UN1BeZtBhUuFXeyb48HdXkWFnS34cD42DoRZVPfKaKnKt87uNc",
  "key6": "5WabvRzaSVHEPvsZ7C5K2ii9iG5WvsJYAcJhP9mUAVjqRgBRnZMo5Gpaqib3paGc9b6boUJkesmQ7xAv8Z1EvTV7",
  "key7": "57b4UAgdkzTAqoaUT241yrRQYwpTbw9346pFqbP4AezoPx9kcdZ1rHAKhVHKf4Vz7ZjhehLjprp26e7xZ2Jf8ceX",
  "key8": "58ZUvAZZSRDs5F3rcJhiy7zo5quyxGuk7ZtGjw8gHb9AMAXykGkgy14Us3zLormxJ5NsfgqkLyVXhPqwe8SQEVUg",
  "key9": "wP8MBi74UXcB9ZoPoj8akSt6rpH5x4FRTb8uPZXjZHCkDdpCbutzVHpFWBuKvTDfjyQWLNP2PSXLtAsWSGbwomA",
  "key10": "5f3pSfudG4K41ZrBfBjsULB9b6CeXHmzTow8YVLsnF1aG4pDnGoQ9dpAYsLLcyLnPBsF9R2PYH3MSyRjYzH6b3KG",
  "key11": "2GTqw5ThKTAaWXfxAWa2Bo2kuYGSWyhWzsWdRRGppwKa742B8TWwdiPqo3o5ynLdYNzbVsT2r5HptyvnZtAD86xL",
  "key12": "3aqxQ9jciqEwNzN5mMX44pLxe8RCGSkAb2s2MQdr3PHqHX1cEFdwbYzMdkzVk6vB48hG7Qn8xiJCf8kBcaUGUNNP",
  "key13": "5nG5Zx5RtaCV1a626RACexEV8iEgXMfqowqrpjbmYPyjifVniDxZoGgJmwy1weWgmCaK8Qttt8YGjXCn5JXepqc9",
  "key14": "3RoNPCfwNZxsrJrQ55w3zZZ9r9WkNdrXMrZmmSwkLFpcvcyVZo1yP3XSCdrWoPeRwPTj2LNhxvzhwb2263rwoLQX",
  "key15": "5EYBa9f3eLs2QSt8yckLjw72Sa5HdiaFTx3yuzuWvHwSJiUB5YsH3r6KAnQHKchbmMAzgphMkEb6oC4KYLubUxnz",
  "key16": "32PR8VEGz4uRgifNUaJ7mgV4WAHuB13xYGrq8JJYRubJc3oAwdwXZqUf65dHmrbcDawDEgxZYkei82pykRKj5Ys8",
  "key17": "2Gj2pY9NwowD7jqRWhZTzbs4UbFGCh7MAziRsmzPsnc9nQj176VoRBp1uA1Ywa2YW7NaLMirPLhyLdvQisEwm8Uo",
  "key18": "5Td1eYyy6qDGPx1Dg4zFAb7vyLopDBJnYEvqGcj5XwhMYTxeFhANTZFCkAvZgLQLzjgQ6vATrNT2vwkco7L63A5n",
  "key19": "4tw2PNBdwPqSCLnJQVtPdHJaXEnYw62cBGjjxLNaWX4EksPZLr6Kb1br1EfrwHLRSPxaMdDGJnikShDKU2kBPAXJ",
  "key20": "2eS3TvzXF1Yz81AcomRz493ShG9gtuioTNabWDpstbZgoiJN2V7va32Na1P2jZCDYKmPba8oSc9qzdNV6wm44krJ",
  "key21": "4rsVM6LGcmhFLGxSwVJA7nrgivj5ujphkLpmvySbUd85Fs2GrteVtt1VzyJoFRRKxeYFDmyW7C2LKap7MAnxiXAi",
  "key22": "4R8FZNSgFChbcGTgRBHN5DMnWja8y33kL9mKm2K7p8hPSyPvZFJvx6aBNMAj8dJpp4kFvHCanELgExp4fjuYRHyK",
  "key23": "3zss8Gm8uZ247Gu5mEk3dbfaHf5noP9YikbB79tUTTCMXHRPTU76X1CX684j6UhBkbPCYvZvY8uvKkrtAj63ofAy",
  "key24": "3Nd23BvJoG4QFya78dzUxbbx5sCxNhNhV5AhTwX56LThpRgLeqMQ8trputmz2mP9Rm4D5ibHCmSwh11e3xeKk3k8",
  "key25": "n5Z9r2rb1DWrejB6vJEGAbB6fkfQDk45QgaTHnnGipsWd3DaBpohdny7VvZhaMNjYoWLGPgHGd3GS4tzy6YqoqL",
  "key26": "4buxq3LYTX57Pz2dxkW7iuHQQxujaTGBArHfXtB9bQA4hRZpk3ikJtru4Ncu6DSREqNmEG7dYqrEWMaMMiC2rodU",
  "key27": "4wNYdZsJoJrpSJNJdcng5FifnH639DPtpYfiNda1utn87mHfouJj2eHPL7ssCZnyaygAejthvKJTvC5V2f43s1HW",
  "key28": "2ywGH32iDnVLvDpD5DiKAe5msfqVYSSanRccxvFWJ84EjDnijoKjPRV7yhxQ6WzBQADzXVxEWdvyBUwaAeK4qtYt",
  "key29": "28Q7rPsybgo7BWap63kUiq4y5J6Hw7ZR638Tz8wZXFqm8NggNBsWiXa7u2aHsQUutTrGxcXowfekGxMfhwVsJ3Dh",
  "key30": "3gjoWohxJkLNya27x58YewqyjUg8KCrExV5BxutaXBV5EU5y87vHheFhRXbqQjyCL9HNjDnYUXGwwyY8m9TZMd6h",
  "key31": "4m9g1FejmPMdDJohpssKkeDueCsVuoB5xYy8xcF1GvNQrMFVcdKSoUJZaRC1kHTj9w35Jm1RKw417mZ3nMUoq3qZ",
  "key32": "53T19Y1ycS1Tge3rAbGw9XMuwAbYsCpk2YkEF8DNfEN2Sy7LqMPKb1rhqbeSNtyatM9HFzGBTa6uRJTw5oyBuLcF",
  "key33": "5CZ4D2rpuVCSdENjBHasMutLmkGggCcashafuVEFAboXXySkLmvDS3fR34kXsbtD6RndtRiaSJ9vyLjj4L2o979w",
  "key34": "4hnrnTZQxXKYtvGGMfct98NkwWfwyGXTp9tJVeD9s8HqipmKnm1XFqxJPn6EueB2r58zKH5aUj1iadBTdfbvzY6W",
  "key35": "NdixNEEB8iTqFhAdUdu8MtQ3oio9fWBAgAYKMvmWSEgEko1bGfqeFCpbEkWVb2TxW6RWcduTGCTNAbtf2kZ1Ysg",
  "key36": "3iReRx4kbiKkaetXg7a8ntmps7nZH8GHixwh88cFRbAcHrcLZYNx1AxLddpiQKiUhwu5ZcpsTw37o6Xb6LduBccm",
  "key37": "4BN3MMP3Fae8s12qDDMXMTrBchWfP9Jb2Zf4SRoCuNZm2jdPeJrvEP1ZnTpoWYraWQo6NkHRC2kjfXd1F8UuVRMq",
  "key38": "5LE8xNgUP3izEV89UsDaQdTrjnnPxmgxfitXU1XKWhTtLc3DT3MtPUw14n4WjsJEn2wat6i8PikiD4JzT2nyY8Pn",
  "key39": "5SdJKzgSVUnTrPm3JLLGRcExUAvpdwrDkpAy2UZPfuNhRiSXKTTUTAcFRLn8dAaP4okix8QM8Pn8RymCLWdDEYg9",
  "key40": "2u477STLmE5Hn5qpTKqFwFjs4X8VwoxGnisxKcX9ybbWrJgpDUMnp5f6594P4f7bzSaA8psoEEvGYAeKWNXCoids",
  "key41": "4Wk9JXXagrnbRuaEus73aFmmj6TYjjQpubh1jLtVCUbQx4LPn7ci8wbpprXnGKsgyncZTc64JwcXaVmKm7xuKLay",
  "key42": "3AbS4Arhe5xkjLoKet4AK5jstrVAnz8iea26jgpf3GhzMWDkBbiFhFVmbrN15b8cAyqxRfe6fY3PW9TwX9oL9nfk",
  "key43": "67bWHM9banHN34Wn3QACMAhVxMbJUX2FNSgao2hU4BoUgvNStARFSawRpQwiNRDZx9cAP6tnPKBt7srjPheyKuba",
  "key44": "3jL7pT56vyX7c2TeNxHutmucGR8cP9tYaR8SajHHFWMWSD6NwNkeseKEZCEm98i2v1E7CDGkaj42n8LdoMRuDdij",
  "key45": "eMPoSZ7izMU4wptCf5jH9bEYoViM5kw1P663JQqD67qH9qe28ZczjzvsoJhYsZpPq32qCS9RNNTDxPwM2MMZfLq"
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
