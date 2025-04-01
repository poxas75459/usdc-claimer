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
    "59FM8jCmNjYHSX55GsUEFgygZJF4A5JSknqdQB9UEQay22fo5S6tJCrjy8wjiWqL32GSsU6VdJjYopXyPMi3UaVV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67ERjd5bfhbaRh9KZ9r9SBvghH6FX5KvwupfoneAp92pxNKrtksLPE8qHFo5emaZyDVQMwCF8xDKN8RfsLbw9ZjX",
  "key1": "3YzC1ARCqD3Rpw3afetvbhLnFB4Ye3PDqW5BXn8pFLKo76swH8WRruV27StFDsXR47G1tSzH7NFqx8ucw3CBuodL",
  "key2": "4GMtYgrCtssNR7U1tCGeAkDRd2H7QXk7LomXQMd9MnUrGp4aJY1nKqPPeGFR8rjGamE5M5dzBu4PRaMAHkhSRbbc",
  "key3": "41qnd8MuLTXCWiBpaZiYaQNXJ1yh3YALqaopV1ZYXUDBfyfZ2ErTUgrLFbVbEovixY4N2oe1xQiqtPDrDGvp8dFZ",
  "key4": "Hghudt9wiouZLHAQVXKe4bowHMspbHz34mGgSv6XUYFttR56G7DMuroeNy7JjvGw2Na9k5StPRxZUN3RXYST5xj",
  "key5": "Xm5tZdGeAeVK422YQ8z9NG1RLiHLHN8EfQ4bhHAA4WWXNFxpZZBxKqWNKQxYmXdpLe8Ev2bfST84WBCihisfoNU",
  "key6": "63Ruo366wzbL4WWumS1s9verstuuSQqaTkW3VeZ3gsn3ukiW7cKecgbmvRtM1c4JQtoSXVbaDw8rKpLLV1B9YBiq",
  "key7": "D1QEoDAoUyC1cEUreShSgeMvxmf287LYXZYn4NsKYpQsCRQp3CxKHVhZenzjBG2DuPmjLPSGgb5Etd5Mq5AdnbU",
  "key8": "4uEYabcmGMy9QizvhyAmT3mHfX2jdS5iSnGBVefAvnLaHNgXUAxQua6kd5UkKmroqik1x7LiEwRperETrFdu35Se",
  "key9": "5AwyvYe88qZxjaV8ePyuERyEXE2ufBgyuuqwfxNV6n8wg4NW7tx5njKeXpvuhWdvQsB8iTxSab1pCEFtTQWxLfMq",
  "key10": "5gaRCtbam87jpBM7JX4FHzVjtuTFdwYFEHta2QdPKQJSZETdHBvFDW1bueRGAt67LhaJvrCUJxaTUN1BtvEBwKWb",
  "key11": "fXustCy1RiTYCH7Qh55ksPBRGgdmWbLPFsg7gPYPduFHhoFxFQViqGdrDVdxAEqYCRGbFGt76HxKTBRSn3zN7Cp",
  "key12": "26BSTXDwXnaGnJyiwEQY77wunRd967D889uKgmxXqsezVq7XzdrMAJfahsiyXfFknCr7eCDkQWPu5jz1vzFq8Q4q",
  "key13": "5RzEHwBZ19T6VacpvVS2zN76ApqFhBViaEa5T1VG5aZNeHXm76Q2L8M8XRadw4tbwMPjPEKgF7j2d1oHh7fjAH5F",
  "key14": "5mCqJvk5CR9FmdiCsbojKf3i5Hh5zwK7hyAGM3gBGknLXtsPD6BAs6GATFkuLpVABR3zXNRCY2NDajCnieEgfkQb",
  "key15": "M7LSXJQo5hxnYsTRY8DuAXgnY93vJb39RV1puAr79WAHhb77NHdhLX2V8cfzwRMBR9qpFdvWXpiVwQE8eGGFd38",
  "key16": "4ubAnmTS4ksMZXweBaNqE1nBpt6Mz3qZQUtToR3BwgHbPudKsh5JnNcBNgsKap11ZTZXstnUGfUUhjJ37r3xeoCn",
  "key17": "2CwjPStavFS5aiMXnmhHR7Gm38HLSv2CF5andHpNguPMpXxWFJzjjaByKM3DgZ2JoM4W3fR9R8G8NYfbTbCyHmzf",
  "key18": "3zdbd6mRA7rnjgPUZKmeSZi1VhiQvwWauVrhuaUTyb6JEKiuNnFHeYCZ9euWBbMuWgh2xku26pzaJG2jfT5EdfnK",
  "key19": "gLRc7qEhvwvHzDjPRrLVfPRm6XkP9D4rvRt8YxXtrYqZnwnPosE7QQXz4ei3gfrAVEi9Xx6ZMsEphjpnpDRvX5i",
  "key20": "65iX36MmoZzBnsuKdR5T6PVXDP8XVPajrF5TxeR5sWeEXKophKgJb3pG7uW1nXfqBdkzZAueAqEdk2pWxiZ3nfyQ",
  "key21": "RswCA7NX8RB84R5bLCpzaQ7q9YZ2WXG5hmr8aYW1x5Jixeguxoq4DYbmmkMxUMEvC7t9prTasWCZboScizi8c3B",
  "key22": "24VCUSwpyLhS4D3B45duQMfaZRCqop1hMwjb98vzxKshYonj2vmdF8TNdy3QzCBYeUsce98zJF24j2DVtw2oeqhr",
  "key23": "rUKrnKM4LNHnsrEZVjcqrJbvYz1Gwo2vPFyejpuqk31UmPo3QEHfQcxgVDYK5AT7JtWQ7mwKXUetxj8GvehUbBA",
  "key24": "4TZVMAJmGQb1TUpfjvc3TtvuX43XV5D6vKU1xuJe2oxdYzbzEs7npwEBT61aKAAPKLiBaaZ94XoWuD3LBzSFuSUh",
  "key25": "2sncQ4d5rQh1nVhPujbXXg4g1Hm3WAm4hesAQ8adKvykunLdNx3ZRBZmiRF863BtvXLonNA1Wps5W3WMtDVauYBG",
  "key26": "67RbBf8gYRQpjojjYyH78fBWBMJ1TwXF7FEzwSEahBcLJ8tmrAWPKA6pwW3mexUaoFE595Rduvph49R6wPezu2Ws",
  "key27": "2Y7A2mqNJpNVUBwTpfzzFRqBGj5FrXy5HNuopWpGMjc359cb6KtwKtCs2maUUeZ7NwKMZ7tEH8x412eWN5Vmfvcc",
  "key28": "3ZX9NG8ZCTUtucezaRQUC8Jm4mF31oUQJg4nvrf9jZvQgPGmJq7t5FV33BjYxXFnhg4dhsnXKJS7yKeaLotTFmR7",
  "key29": "2abEYRMLuooiFsDKFSQ5XW9bxLzFth53NNca81sBAA6VshDb32QLUn4Bd1xxgdLQjhQKu1eY2eAXwmTjn2iRdpxJ",
  "key30": "4XDqReisiWfmmWsjaYg2BoGfq7VKT68SjggEV2xWuzhZZJWYb8PgpVKR8PR8iJmdiLnXWgQETwvukEh33QrRuqYg",
  "key31": "4kMqVqGCQcbnqwrx7PS9Uygv1bbnH8coQRXoK7ojGKAiT6vwNQZPQMit5MY2Kiw9Ec522UBSzPtoALX4xw3Et1Na",
  "key32": "59ycpWQB8ScBbYshbXDHmuosHARoJHoU7SrgEiY5z78WMFFHTpZvJ7g9G64zwgTDk5u4mrnWF6k6EBrU7GD4dPhd",
  "key33": "C8g1GHqdy2kntEyFcAL8pbj9coDCHXSvNXd7ZghdRRYdWSDqwrZP5XAWkG5ySW2tgzqW96gZ1bSFw3BCXFk2Sz4",
  "key34": "3kE1zzAF56j5vrYhfGZDB8zBwYdnWnjVU7NtsDCw3KR2iGzuDcXPbKmENisZDEojCgo9KgUMy5oMcEGcThTLoLs",
  "key35": "5m1kxm8c7kUZTuwp11Eqpr7YYTyFh2XZfKvQ2LW4oPQ52ej7fmXQoANFuvrEkvxoioWhmpmontTXUUHDfzDWP98W",
  "key36": "62wX4bvHb9fofMjcM7xRVn1Rx91dCHCCLnZWxvUmVsZTnNMP5uPTxjJcSGoFzX1zWbcGzHr7SVuXyYbow8pz4bEM",
  "key37": "4tNhubuaLPQsdEhmuGHBqBZ4XiHJ2mQMv5XvchFawepBW7bwqj7VSfwEp35qpK9nFJ58HXjQHGdUd8uYAVR7Hb19",
  "key38": "EfiJPgHQEGiDQgjqALvugqjuvHctXg1MCWvwPChB7gc7xyfET7DMqESrEKUM1Uf1LtYjkbzp9GERLjYtQrKMHvz",
  "key39": "28xU4cBk3NtmTMyphNs6rKw5yC2X7qHMCWw1paTBpuPGEM1T8vHvKQvybPye3pu2yM2WePvSVQ5P7R7HH5CowULD",
  "key40": "3KYKQjjR8jWXwuUA8ppTZhWDM2XADA1XiShTf8xCG6zwj9vJWV3pErZ2ZC5iE5bXkm6pGfDeuZGCWtdNDX2ns9si",
  "key41": "5m94TpwEqf5wSVPZP5A7pMgrqARqvbRMEjPQNrvA2pEq13CGv4zJkSdqYsbUeyG3kkob1zpndchWsWFBPwfNosxh",
  "key42": "K8RDmp6C53sSwF8dR81rKxq8cHe7ikh6awmUrRMAZfs2mQ7GTNWvj2GdvUNPUbnvvzCnH9V2cR3w2GKywpu8TFf",
  "key43": "4z4KpqpncSQTfvj4bjTsBGbRFRZJwmiN4KyxYNaVR7c6M3vyRbfARAJV8MQH6k8ZJCpLzgmR8deFc4FD4PcspfGS",
  "key44": "4TkvigEuJNjUHWaofeJTPTvUV2wWGULVZm1oN64L3nhUR8y6vdiPnWFwCZjH7dwLL1bskJsphRp2kSxK3FXJmZ6W",
  "key45": "4n9Pf1x3ocPpJRkk9YLi7jdTzLBkaAuTuVMsovgkZjTYHZqFHnh7snQZcW44FzqV9tLfPUYiShXVa58gUcpaZaWC",
  "key46": "3gBt36SMPfPmyojgnjTe1gbu19iMAZYSf7JFys5NwKJYNk41VPbaXS5igX9ixy8CZ4oPfBpfuiPTfzARpUyNVRm5"
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
