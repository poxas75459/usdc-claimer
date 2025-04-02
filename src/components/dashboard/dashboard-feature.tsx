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
    "5wsKfezTcBCGNsDxRw1TCdaYan6hfr7WVKamzhGFsgHgy3PBJUSXUWH5Hm6fbvog55cshBpqVcJ4XEPKzK6xdRjE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wVoGwKmfkaA5KqLettZ6v6Rq8EBaoSzaUa8Y3xT4vvb9gjPQ6NR4jGdNtRYYtpUQPmLY5ouTuEfcqmHyR9oo9jh",
  "key1": "46PHJ3kRxdsQvfeEArjAS4djGyMAFjToDSLd5P7ikyoE8dV7Gydv5e7MaA8RQPbps7tASyStpKLGjvpNgZYP8CW3",
  "key2": "MTF9TzHFp8oai4GAGEDbv1nCtEPZj9Vjh9sr2AFP6EtBxs4Rpu78shkqqPKND9ssVQiWX3PXtHed1SHNRWY4E6v",
  "key3": "49sWXidmq4Vtdg3DtfCX1eG5TLAb33zuNXZBRJfoqTdxfYEexX7WUzBvi6id7HEsrvLP7EFA7q6hjsPqH817mub7",
  "key4": "2tGhWxEdnaXayyZcE8XDDp4qEG8kXFXPS8j4WPosCRKLuSuskkFMucGB6nxJXjhAeHsHhqjuXhsvP1HTLbAAJzy9",
  "key5": "3r3qXZcRrmmk54o73W8vo1343DsYT1Hz7sd2kFqrCZoC82u7yMQTXGEZRhiGFexgaidHB9iSTNcWWphVFfNEJ1sS",
  "key6": "61yAbRA6wvSHw8n2oojmaDLNGLZ4SJZtbqT3K6s9VpNEAqMap3P4Vg1d5CexFGmLHFymyNHTQQWZ9XuTYS9RZXNv",
  "key7": "vQmqeKw2ApwYwT8LwS7cUmzFukktmtqGNLHjqyGHWEA3NMjQtnNhjc24CRgaQt4oEL13BBUrzcj7n5QYWj3jevN",
  "key8": "3GSxkTwmaTujnupKR5cLnxMgSRCQPa3zEhWUREdTydfqvL7NivoohZbRUex6rRmWnoB7EarVTSCP9bEygVBXsGzd",
  "key9": "2Ms9gcdfgrV3WbKHd4x6qdtNuW8AjfB2Eon1kYiZ4Qaor1VFCpqWy6K3qn4QebViSoJZwmx7tWWCAon6Bza4k3v7",
  "key10": "5nUAq5LfahV5mGnduSNT7BYEEkvrRBquGrr8rBxtr3rBSsKvorUhxH9ngyZocerUvpSN9JEPfZwbRtT1ouf97Go8",
  "key11": "2r8JQ7BSFt4KRcigzkYujMtLquUjip59H2S1dLx88vGxT8MMfw7XwtzUqtkMSpbbE27qQp1tGXjUSYMkttCLC8Yc",
  "key12": "4dnejKyn92k48iCafsM1XFs7bqUqZdaFj5PJsVdz9Z4iG58rc2y4rCMjSbSKXwiNkv48GALxpWxGks5JEfAQREoe",
  "key13": "4R1atimXzkSzBQUFntX5NSJVW7ejkPPeR4JKUkv9Qc2aQBkSy1tPxPDEVHFnUtkkDz3JUqBjQj4Y1b7Dpd8so7KL",
  "key14": "4wTGJxYfceuVYufeoyh63ESBe2bfmhwXsRZpBgsUwDmEXQgtZPAD29snmgwm88vfNuh7dFSFkGVpmA8PcDQTdHsJ",
  "key15": "3BG8qNVcovW22VfFE9hHWuGJJoYEyfLNcBWoDZTTHeV2nfVxPUNxNCLBbXkE26zvVs2WJYuUqWryXwcMHFPcsNh8",
  "key16": "j4rNioNGJqi6dJWf6fxA1t5SGfi8ud8J6SHWCYh2YWY3KJPoro5dJTti89o7c5kKGBX2Rt5pj8yQ8BQLAGFKK9h",
  "key17": "2XVjmM97hz6W1D1dLbdkXSGZrRVZAHaoxxeV7FjZm6kd61BVYEH9Wu9DJnYepPDb4vrcV7MvbJbhDb92kHMrmEkF",
  "key18": "2yNUTqXGoPYAYmtd1sWAELhtAsXiwBXSW2NnBbWFJWwYyE8gmTneqz1PG6TdBH59PGJQ7qiQYYKmbMyDoxh2PahU",
  "key19": "5RynrCkeY3eoEhFwzJAwWouH2ZNqCc5JJGo4YXNE7frMjTKqngCV83kwwqkqHhGPLHzFQ3uvxFmzamx8jM1TFoCU",
  "key20": "521RjvbK3DEVW58mwu27d6txN5PEQzVottQfEsN8vAFSDGHeKE5vCYRkxaBHHCwUJWm955CUMXSdxdMVX7MYm1tp",
  "key21": "5xyCB73h7GTQnQ54wP3oZgoPK3tFq8LUfwfpxGLQ8uCgSuLmcLns3HcAf66ZApvuqnD4xx9KhpfaihvvD5nxWhwd",
  "key22": "3fRcV5XDtLiXrmudVLGeMciK957R7PhYnieNCAAuf1Vhuvu4ZrTEe1Ub7jWmZ6biU5ao1xrvJqXdPZu3CtLUj5oh",
  "key23": "2xu2Sn4UQJT4QRSGgzD8Qpj2CX4TTnJhayJtuZPwFWyBvHHeSkZbya3TVXxMuhghEMMbroAvftAVgkSQpiVEFcWf",
  "key24": "49aeqVMZKeGLpuhEVq1JJcVpj2xDRQR56yfDhcdJm78h8VLLCTEAHcJ1bUi1b1XJ5NGWhaiNFb6DWkukywbzaJft",
  "key25": "3KhMAXLwLRriy1dLgzEQ4v6G8ZxV5tL77BExzitQarumC2XnH5Jp3kXN8pHXS5izNNRJy9k7ewDEAXN5kN8T5rtu",
  "key26": "3VrsigzbLqvAdmBDdMeHwEWkvAfCjoDMK9uEdThXNDpbv3S1U96MDTVUnCXF8aW9TUoqWup3XjUMejRrf2dCRKgP",
  "key27": "3mcjvU7UWxsUJ4HGyEfeZq1ZBRxybYetHwdMqwchAHGz57kDPuNEcyn7b1wiXg6JoUpdgLjW8X4fEqbVsxvuhBh6",
  "key28": "LmkKJaxjSM5TqKnDCd4PJxc1sUbr3LuwNCL8Up42Cnfx7JViW8Hrt1pLicbPTVgdraEgKKrDzusrRKXsGiJcAwj",
  "key29": "218N38EtwYj9pvHBuxNxM57xTjyUYgsaB9STxwekofd4zc8rm7Tm8vPP8xR3LKm4ZZeV4c5yq4v6W3wARsWWX5HK",
  "key30": "5pzBRZXdvqBnsNSTKnVFidmKEyibYJC5ri1txoUmaZV6Tx5N4Ui7Y7rqSsoG7n8dip7NPcS1xAbPd1tgcHujZYJn",
  "key31": "39DRWcPMSWMcw3Hw3dMVxMtiUpYqge7VTZNdgtwV6H17Lxsd5EGC3ubBMRCGNGQ6Y64WR2jzmTsuzFgaEAczL2Ct",
  "key32": "2BxtkcetKoQcLnXGzFpdgbk7WDodK8Waha8TrXfsnvBDx3NbwrwNum8D655ZK1eLSWBKRoPH7CLUh1CeabNf2maQ",
  "key33": "8qHCQ9dtPL4fERLTbGBiY241WV5Z5jr8UbGQAeGpVmUhDzMer2kVcdNHnKZPFtuZWZbXoAvjoQ8rfhHMiMQ1tJE",
  "key34": "3nHpss6V9KDKWNvLKyBxihwUqjqTrG84AKXFm1JBZ2z2y5iqRLutjRVnMFGCHjL1LCT9gqde7wcCPuTu6fkDMUTw",
  "key35": "22dXfgqjh917agPFT9bLSjCx9gU5KgEfjTb69wJJEmFhkoYhxwVirqphr3VK5XcJR1JwQ1HE64aiZGvnwyfG9wzy",
  "key36": "4Av68aF4w9SMZed18Q7xer4weTyNpF6RpPGcs6Ce5CHRktBYKQ87aciT5Zs7p5wr2WtrgowWdaehaJ2zBkLX888H",
  "key37": "34JYzLfavsXr7MyVx8upktqSgDtBCTDo9JAvJAwfxyVTppfegresF4CyECPAfPuxeiLSkk4ut3XwdFmeSeW9cU8J",
  "key38": "25bPimokuuCb2TKsCKhTcrKnbWzZEs7e1grunP3TsJTQt9jnuSuzm9gmPiCSFZxD5G9cxDMeiZCyXztLvf8ADk9n",
  "key39": "3o9UU7X2XL9MDcns1yfPSniHnmpSPKg4k9KZmjoFQMnmdtNct5Eh5HSVsLwhKjSaTihvP3vUhgKrBGobKptcNQpz",
  "key40": "3MJZgsmgnEvK3KLGgkJH7RVaxQtBN5BqR3pTHHafuBg24uWAvS9rtxoXugvHdqxkAqeC4Qs2SaTA1aNMe7DTmqJV",
  "key41": "3GT2uuRDaEuoUpszg1PBTedQpxhZZp1g6MKHhuerxCcG5S3FiwSGW1BTrreTsBAsWJJMM7q4JhmnJjNAmkvijett",
  "key42": "2JjkMcZLBjYUJMyBJYKd1UzyWZH93pxuMtBn7ui4aBqedgkQDcgEeSqmvJeCdN7P7PSTZqr3NEmvgXbe9qgxG8za",
  "key43": "3T7TCqfLrFJFT87PkXFe5vQ2iNydNssxXDQifcsQmVrv289iLAXR77xtL5xYNtVArcaxpdGcbaC5SJSAFqVJjcfN",
  "key44": "4tf6z73hJgVuZ8nLf5C8TP1BfN5WqsJqg3gsuGZrwA1VxaDweDrbYC6X4bzHbfDhkSWPnAwVkHXAJMLneWckhiQC"
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
