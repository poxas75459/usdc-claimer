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
    "4xRuJa5FMEE7uHnScHxizDkJFHMh1YXTGcK54Prkp7RD9jtp5yNahcvux25BZRo5XT9ox4yez4uRWXZ8SbPfCVcb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VaM2wsKMAQSRe6b1bcSkRy4YyzizwzaWPD5YYpeKXNQygCViqjZHoAzAA8fNaHqZDvMrcdveH3eQr55ZABSRndC",
  "key1": "1d1N1YV47KMDNrtsneZxQw92rxsiCd3m8KCg8GbMZhQL9M3hz1VvmV5eLgr9q9a3K73suG2omh2SkKzmxF8cPQF",
  "key2": "4voC1Gi2kAFydLPGCo4mfKUVT4D2LuzzFin6eGmUNDVHKjW8xcwKCfcD4Lu9UFdvdbmWuEfNS99TYraQ5Ei84Y7H",
  "key3": "23bHs95fUzM4VY53hABhgZmnXHqdRGezamRHsZbaU19xmNa3bKZHLh1RPc57q6La83CPHSxYYWy2VNeKN9a4GzSD",
  "key4": "49rFxfoF67oGznyn1BSstsz57YnjVhB1Dr9M7TkbfuaafTMgAjKTA1KUR5UGQ53Pc1Lvt8t48VSXk9fcgQJ3eRrS",
  "key5": "387Gj3m9soDtrGYKZzAwAEm26WbQ3VqcnorvhMRDtSQn2D53VyCapYjDn4vdcGxpBT3FvK5Cb7eg6Bqs1Ayybqf2",
  "key6": "3zaNhNKtKXfgswsz1GZCDyBAitdXHeNQpqB4nUBjTtwWUddX5fRYLwRTAMsV8AiLotz3Uhu4rVkhurcKYqcpC9ba",
  "key7": "3YjoS6o3EkLVVbKx9q477ifuipmHBaY9qmVypwNbW5pWfLHQsMUhTw3x6fsYmATYpHyuqWweiN8VBbFAcuNcVG6A",
  "key8": "4P1ED4tiLCu8wFo46DiDRvStdTcKAgvtUZPeHjK9M26KRixGy8VeWoCz6bG8NEVPfGiyT6JPnDYvheu92rn3hwSY",
  "key9": "2rBCRzb2ZQqJmMDB4MiBAkZmSZ6SC6VihgUR5VGkr9trMMU94vW1TNSHF2HpYbN9m73H2Jrs21CV7oMSycZdRvge",
  "key10": "JvoBaqAut5Cp5jX2FDZsXA1EMxKHuW4hu6oBfgcnGEZkSNBPsK1Ld57obroqdtJz5nZE8WvgmB63ENQxkVXYscu",
  "key11": "65McQQv6bo4TKYZ5zMSSEuGhk46ipmc7EJJ1SQaPSmK5zAu9PEHCgceoGfw2j3wq1JjvfAUmrNZjFLEqP6f2bQ3P",
  "key12": "2BhNP1c3XsqeNKkHXGPZ5G3nhQ8YvyRANxSwCGgBchuVkoAeMDnTQsHXyaW5MkPggsW8MReFScHpk1t9jRgpvqYx",
  "key13": "4vKwgGLUhBWdk9Ujg3AntrwMFj4ukGXSeJTHmiC9KPGuxD4oXRzaHnHRSk7mK8RbACXijQohkkKfT8VxcQmQQqha",
  "key14": "5opKs4Ja6PrU7sehV5841dxodGdxXxuKwdPvNXLRoJoNGgr1iM7vUhrsjoDMB2PgCRgM59bBG57ADqnA9CtdihUS",
  "key15": "2GAZw4ETmYewjJNFuCBvEybU2uEHJUaXwzpzVPFRN6uGrfasGhE8yA4S9kPkV9AhqGqAAqvzaw5WECYdsT8NAabM",
  "key16": "3bY2CxxxKusrAyevMfcRAqBVNn42e6RqL8aARoTFmAdKEUCVrMCD8GA6tFUjfrccRicbnAp3gFjA2oMh97PAiwR9",
  "key17": "3BoMRZC2FL7cmfPJpFBrjZUBbepA3GW5aSgrUaprgYM5UYUstF3DyiCn4iKcry4epmkjGNJW3LoAgd3U9fMQaiPE",
  "key18": "3B7Rjd87cPcFYvkWwobiUp6UTP3PeKGU8xUzyv5kaCfSqTCFxfSXp3cqVXWgsr2eKvNHMcHFQc1t1A68SpCJUWPY",
  "key19": "4PPZPb7avGu6FwJnPQgcpGJE9uBarPLu54YH66tYNQgik1HCnB6rUQ9ZLoiCPQY7R9EJURnpcLTYAfbsNtRza9HU",
  "key20": "fxnsx57HSRjsVxXVBC9UURmiGQHSEAmmRjHRojmAJe18wvz33gUPrhy2w8rv2bPfzxirwN1kRcwMcuJzkwHaRP1",
  "key21": "2EbjV7Djkyg9cyf6DLuaQmx8Ds6CcSzjTXVjbQsG3Bx2g3ugebJ4bzH7fZNKZM932bHPQu6xg6UFJ1mvhDBJmpbB",
  "key22": "2puBqJ1FKiZTNFvKommhTKseV4NVhMwzyvo3aDUGsESmTnSfFyknnd3rshLVfYgKAGYsJc82VcMFtZUmxyimMAht",
  "key23": "5aEYF1x9myQLyKkHLf5SuZn1ZPekdwg4AiCUmLrsqtPCCrjG6U52mjLMgbMKK4TLL7WPnkbGh3rnogQSYWVtNiAh",
  "key24": "5PxZbHZ1VTzxzS64S4TgWQLduNA16JqiMKLWwe5Rz1JqFdNPbPaFKPH1uYz2xGBp9JoSccEMDJLPVMo34r2cPvtB",
  "key25": "4CnSAuEhjNiyXoVSQVEWuhczCUjbuaYR35qi71zHCkTu2sasWxu1h5GrK8ztXy1zNpNRowwwgD9inJE66czuDDNQ",
  "key26": "2kz8sFZWyxaALu5CJ1Q7ajChzLMKQoC3JynqukQZG3tnFcERpgAX6yBa3zM7McG6BhaZaBxT2kwjXyBT6xmDvjQk",
  "key27": "Z8vcr4DWCZwX31eiVWN53nq6yoBZ69iFz73kyesJmA538FkHBvQVh1ZriNMtVNTmsPeJ1b5TCeNtjpBmPQ6ne2P",
  "key28": "aZMbByp8c2De8eULauswvy6UHnYeFR2RFdB5PBpiVGuiyVFfKrpLEZidBUt3yCXUvge9qbU5tQC5C8TFsKQ5mFN",
  "key29": "64svV5wpxyZH4iTP8itbGVbssh3oigkUKYSy8sBtWsZB1BejGFvBFv5ejbLDK79LiMTJR2xgxecseWgb6LA8hHMf",
  "key30": "3TdgDK5diGcR2ZT1xhxJJ3gez1uMQjiNZp8WScnsEpTYv3gYPkvemTd2hA8LH3b1eoTrjnMaeLw2k2XmykS5Sc7b",
  "key31": "5YPv54sCe1ULWs7uxoKFeyUVWtgoiFzzSpv3KkvbPCGeozmh6UvJYS2K5nDLYSZeKcyXcaadH5omdRTG9rWxdkAq",
  "key32": "5VF4g6QmtjPH9vxUtNpRh6ywtg95VUVkLfm33trD4BG254LTQpUKwd4daRzCpsTr3Jqe3fnZnL66JEnBMChe2BfH",
  "key33": "4ZN7N3Da2M1qcx3Q67puNQi2RuBXfDSqv6bwQxTVf5TwMT3DHgqEvT8yYH8q4rqRaTvC2mgdNmt4rGsRFNFyyQNf",
  "key34": "V6UQGv8946XC8jG37uegkSeNMMoE9TXx7MUXhVqhVCHuqYimZmHGmzNXZ9bkorgPsySWo9BP37sbtSJU58PAUWh",
  "key35": "3cyRcYqvAe2ZxSQ4GTYufh5JCRQuBkW34RZToBeKZU52xjxMTjaETLDoenS6tuBsMjNVNGZffFDiGKD9DD9GgmSF",
  "key36": "3SLhnUCboJ2tHpLdJUt7NiRtUdzZugL2PYsyErHgDixxtFiwdv1Feycznfx2dVfjk3TEi2BiXd6ahPPhSzwcvNjK",
  "key37": "65fs6oAd8eZuvdYos2h6kheJhcgjJE6JxDqEcoR75n2DFT5Dbr7YLvViLJFNgNizc79kKqCB8nwM9LJt3EbrBKQT",
  "key38": "4TUMxr7NhXkBAR6nDugdcgoPaX2wWRaaWQTQjRqwaUMoNjycD3AQiDL35C1QsoQSUdQwRvo2CamZeDhdRskLZY15",
  "key39": "hzeGrmHg6Dyu5y46i1KRFvay7JKKjpnXaA96VK66WujANMr2BNXT4FV4ufjqGkiQXBxemdRdvU6MytbnGgDejKb"
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
