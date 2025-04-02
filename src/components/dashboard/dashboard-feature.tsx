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
    "5XdubL15P6BfPS8unkqpyvRHmnjotQLBUU4dV9wLsNow4rYbYMS2f5cMc8aYgM9Dty4tvxm3q5JC8Mf8QtYpcdM1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5s83wuDLRxgpaTNLsUmKubNtYT3Nhh66NQ6R34n8yEMWa4VQMZroeFmC1RpxoZTtkKGVFgz4QxSZHbjxerd6DQhv",
  "key1": "5qL3D7TN5BEdFZeJabHfgLJcidn6sH2pSd6qPmMPM7EMv8SqgQZ76AmaS67xVJW8y2nGBaRiD8yQnkfSm2BSGqts",
  "key2": "3gWQWM2bnfR4wYPzsT5RhddPaHxjTgxpejAPigH62zPNAwuaCfFxAvMU3pBic8ZW48PrNtzhXCfM16vzE1rQMYwb",
  "key3": "5Tyts2ZDQkNCz63uuV4Uv8rC5R9x13ugH3DaaEfwHTh9MbAggr3HuP36byfktoU5UBHkJTTaJqSS9Ct1SqUTuZTN",
  "key4": "3iyBNcb3RLKnFgb9dGJmePGpqRtnRMqTBgqQ5szt7TxkF95pHw9pfD3awGwi7BmcQfETCM8ogqd57RtZhfmu7jLN",
  "key5": "5E7X9LVZMzE2quqMFbFhkmCrCSvu5GVzfb8zmnLn8MQKDsFAhpo6XCFus4TeDoVH36ui5nqjDRhS2UuGrhELrG5A",
  "key6": "3rXm23iFDoh31cDp7kcmBB9LUivF8AAMupajYrZaXtgRgerCFAFdA627UQuqjPfE1NzW7HYVWgmT4igu96ZUtmem",
  "key7": "JGoeqEtbQ1VtbwveTozX1NpU3FWCcXQhT2bQetZ6eouznfpDH1ARkqT3w9jjn76KdaKMASzJrKeWtu3mnaLnV8D",
  "key8": "DBm1sMuo59FPpTrMW8JCgw2TW3tkUfmmGrQH7nLGsLUoawzDJ1PPCAFWbMB7gkL7YSMqfqU5F6JuEJcse14XJt1",
  "key9": "49jwE4DVsQoBSL6ct7fS5HVNv8VMgCzV88h722Nb72UES9zu3vuYLGsVsiVEbgWCijuun4oMuS9t99XLHxM97eB9",
  "key10": "62bUDRbXawJBVYpeRQGA1re6fErCohq1mqqMy7ehxp8DF3ysAywSYCCAYBrzP2AVvhgqLw2hjQrXEZSgdGX5wpdx",
  "key11": "2pT2Cr4uutEZea7DeWLLFr2GZ8cChCMwvgYdApzC2CuGZDz9c2SHz4Ngrv31fCgndpmiPePwtossfmTrEsESWK81",
  "key12": "3mRXHNeSMM2mn3GdCrPUdromka2PRL3CLVoL4QJZQnLVZvdwQQhpMY2hWXwZVJ9iR4Nfxdo4BXvniH6439fUMKa",
  "key13": "LAiQg1MJEx2Dj48YJRqAC3CPZGFtCWxpPG6hnXh1SQDBJF4oepwFawQx5Z1kNojh3iuy1VMmemMbbCC3rGwrsRm",
  "key14": "iu1NDXdFx2YoKMgnE6TWYbzKDpGByUBXvt7f9kuhr3gXqe3geS12DUjDbqpM1c1hmSi6hDMekAbjdBhdLi3oEmh",
  "key15": "73w51a57D9Nmh9FzT5cjGSsjf6qdUECZRsBEQEWCgpZTcHL8Q6ty4zCE6NqpKUVFZM6k4gDnLZzYFVn2wbNikfV",
  "key16": "4qPVGDtorSzTho1txSkE1jSTguh22nRoRaNR7vjoH57VzsHFSftSkPsH4bEP5tsH6WNtfB7gVXgUmkYGYUpus69w",
  "key17": "5PbTo82wTPufvW1Gu2DyQ4vAEgZhwHbAPRyiS2eyNTWjbMR9CVrT6Tt1CvkjjirTnGzoYJzRh3Us285L4FiNdDhM",
  "key18": "3qPAgaZkj6DpZCHWE8B4Hi5dwNsf762pWNitTGZEjPHXyJsvc1EQdEumvqtCTpKqzZTf9XTmnhVjSEBkdw5VXbwT",
  "key19": "5zRDnPpSKkqomYGHEkXiQ5mRTWzYf4DYZSnTCt62jq3cEsjhMd5fWEcQXTa4JnY2JMACYpchNJa68JGu5pXSQCSu",
  "key20": "5pQic8a8PNVV6YW6jAAJAFRTex4Yey2evULHsU2FNvtWKRsCX4xKdDRczghXUbFWq2oVZoH3k4i8E941MHqPck6Y",
  "key21": "4kfzzHXhZF942RWkijeNEs1poMnu8E177DRZQDReSGZQ1yn36rmkuWraos1Uxym1DNQvdJUnH7DzodUf9qLDX8V9",
  "key22": "2Ai68EiBMXS8M6T6X3nuaJFFAZgaLoBpTYzrW6qyijf5qbJ1CGZgeKT4qN9Ft9EK5h1AvB8or9h4sw1N9ASPF23y",
  "key23": "44VmmyWHpPvgrwqM1bbJqCxrXd3Mn6ZAn2DuqvCZ7a3j7CucDAWBLbrdzqpkXFpiBvAwEMv9Bxd1UCEL2HwgTqGJ",
  "key24": "2jgn7oKVXUiTZtiKptrd6FjNoshCFP7ueQtxD7mqaEAEf9WjxsmpaafT1gEoYJB64iLHG42VwpfJEPWozWqMFZFk",
  "key25": "4rse5z11nDQSFhPttwT5CGPDSYgN2h2Mq7DwpA9d8mtRpedQFbeauCp2x3RjmqX7qatbryg2mcAKF2GXddstXifQ",
  "key26": "34txUwCBmJ9XY9MKAUQXtACzZhwMAVtEqmix4pxdABKbYYDRadVTEmuGQv1HCtUaxSL2AqDdw2bdPCNnULBVygzg",
  "key27": "n356TAqfB6XFa9UoP3GibW49eDWkVGZqJayPuvWuRGnmJz1dL5HQxhCBVXp9wwrnXUoQiCwqfLdhj9D4sE7BXd2",
  "key28": "56qi7H47nYVdW4J43rL5JjFXdxTyAutLaVL8gz9XaX4xAmZaZEYrt29wLJR7cXQfH5oKzPJ7gD3cA6VZQ3qEkJhf",
  "key29": "63opM5GFTCTMJcTJoF74L5Bc5Mqj4RScurU8PREMAXAYNm222zGPaZqyb4qrkfK49iMb8cdbAH2DKKn9YYLd9PHm",
  "key30": "3SnNLpjkQJpQkpsX3h7bmFKc8vFt6SetL3P5WhZMMyJXN6NpbucTa7RHV4jpGWT4rqbGR4YVN6KNjqy8V7PQ3tjJ",
  "key31": "5LjxZbSSLch5VhKHxR7LUdsXG1UmTm2D5pDXUWSnFbPSLGXxTqXbNL5pjr4C2fbaZh41sHDT3C711YXbBpuRiH5Z",
  "key32": "UxJCFm7752855UVU2i9NumviUuCZjeEaTkC7GaZrZSGWr55eEvtaHta3cDVKFhFuxnztbCeFXxN45Fcbv74tSAh",
  "key33": "42cQPpSbxN8QXgB3Jbb7Tok2Ea3g1GYM7KzoW8fvCGR9HTNDCzdphMTNMoZedySL7ovzrfKQWwBca2FyxcwmkF2c",
  "key34": "28ygz392GJevsWiUuYp8ngG6sTXLuiN2ovvZhfnDcBiEXPxsCc79dUM6d16uR7EgufLY8aMmmfaaBh3UUQ7TPXRx",
  "key35": "6c2U9Lct5LK6usMYVPL2HJDmXqumgC8oaFtQjYpRUEwi3TSSZ8FCNLmUzF3iykqFTMkQGPgwPwNhcx13RRSruyS",
  "key36": "2tfwW9S1NsjCbNCVXgyNenutuPeom195giNEH8HFDAbkF6Zs6oJDRz78rkPbFP5QSQpUFM6Z1xY7CpwY336Hc8Uk",
  "key37": "4hv6NXNfABvtr2r5jxRaqHSLJLqDV9kGfJzPfcmsH7umxdTicayTjEZoijjMz3KcvucHrX2nCjC5LasNfkJsF2Fa",
  "key38": "4oLWZUTiYWDe6y6YHsdwFDxS3xMCZAvSBUPsngCrxWnCzsGzMiKR7aCAzgXpLkLAuHExVE3Z7AerP4q5sjRf9JWu",
  "key39": "54KoofMMyV7ia5wwEW9d5t3MLJGHjJQL56erMntfANf9hAxmCZitpsqLfA2jJ4NtwSRrCKdtK5h8p3TSQhAP9DKv",
  "key40": "3hwWdxmaZwpaiJ8KjvFseTVGpG4pLTvGQuSD1ogUMHWuHy4LEF95akrMVewi8x8Yes59uY3j8888myEu8yu7pU4j",
  "key41": "8Snpd9Lk9YDbh2N6RF1ubHS3ZEZ6X11jYwnTuJxdpZKkqxt6C2QNSowynXcpF2PCrHzGgd5FVMq85ParyiE64uU",
  "key42": "5md6AuepU5Kj8TSYyQq9jVrezJZoioVEtUaUuQviGHdmrYf9RVKD7zy3B5TwVLeuU93scw3P4JFzYx9uW9DMejpK",
  "key43": "4fgrPP8UwtwHBexQH2K5Pa59Q1Tdap54f4uaJ1Z63UuP98rJJBLyBTHVhhpzXofozSxg3VcDWCexrjW99qPm8PwJ",
  "key44": "5mqnCempqybGzLkWobFRVBVwWRkfUADpgu7z42BWas47RJr8FS4pjeNbYPos6h8M6j3BSwAPX3McHBR4KXLPE5iD",
  "key45": "4bzsqUmGTYyBsfy9fwPBWKcghGfZaJR5yDyXyGNNYvMZefBYkLKTZxK86wnLmWhj2V7Dw1a1wSNruvLcJ8m29gLm",
  "key46": "618uCdD8KeQGQHrD9kBkThiBVL8chRXX11T98teKQzR4petT1KomyVhLSwKJ6QMbg76stf6h2VLvtWM9R8QhzQYP",
  "key47": "5pgbMtEtN6yqZc1mU9Vac36T6rHYko8vyW838jFGH8qfJr6kmKsHdvd5iZwSdsjHKCp62ZRFYYScfMjfLhA9rnY4",
  "key48": "48AQSC77UeQaUaqhXLenEePoA3bk6Ykm6QfPqUjCZN2xiX39aSWvhF7VHTT2fa3EeJ62jECJcg25pzTrRPmXP72u"
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
