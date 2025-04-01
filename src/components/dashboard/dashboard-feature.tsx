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
    "pJ3XVPNQKdGjCb17DiY6Mhv72KiJBn9m6t7TF2z9LfCmCnp5VaALFLPTC5YfVYhPQsFEY1zYF59oU2Rteh7j3YD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ErS8DLrA3Z59n99zZ2n8wBoGxA3vweTGKk2PtZjbHbg4CULQqM6rCZbf43wVrYC1E3x3j6gD8xZNcLFrPGLmay",
  "key1": "4B2oJPnyxrc9tLtqmFZwBC1KorY4j5j5fyPGhCLzRcBYKqibp7QKUwH6P1yNeGpHVUx1az6bu1KbwS5qSFk4aUMo",
  "key2": "RHHaJFoSCtx4vGqRHZjCiCamiPPz6KE733xC2amL3wSaCd4MUVzKxUQf8DtRubTWK3P1AC24Ur3N3nTSwuJWi7t",
  "key3": "4t9rWvFnGzfRnqaVRfXJSGcCKRkADrmN66HkqCyoc85NDZ1PrSuEAE4fPQuDef29hTFg4Q8aCC1Pk6MWneVytafq",
  "key4": "mwRegHz3qKuQThLDQz6uyoNgvfdj2EaoFD6VaRDcruDmXqJsMf8eCfLWjPnN244gFyLmQ3whWMS7q3AiomMA8YH",
  "key5": "3KSacutdLqU1Bbjtt5CKC51AenLbk7gqjpQXGXoEysw8dLwoAZy9ig5PaPj4Pwa3gTPUaUu1YtxVt4bcQSHXEdP3",
  "key6": "3Uyoep7h3HLzzwtLHAK2STgfLixjuX6ku7DJAuAi733VpR2H2CxjwxRNk3oQ6hGFaYnNELVgRBkgpYM1NzPqgeLc",
  "key7": "xobjdsvbJYDZLWPKA9QRH4rrhKx15ehcXrhw5BZT5cXa3gCeom7FDrBKP9C7UShMCN8ddc39iAupdVhyTPm232q",
  "key8": "5CKPEqKMTnD4pPucQVGJz2jUjjVA9BvmQ3W9Koqe9epgCX5vKa1xrJeKw9t4d49gapX85Wduu6LpmM26cvjahXMh",
  "key9": "5BGkmZJTUdbDusPFh6ykYcRXoVXavueW6GnGbTeSDd6RbUz1wYxiJMf69evPXuQ1hq6WGsUrVHztJZrEC58v6pq1",
  "key10": "592tWw1XCDi3A4hgq14fvkCQE6Ug4jE66UrBpYW2YU3cuZg7iuhiZuHPtBBZ2fqgbomoooRNy88LiRJrAdwGxrCf",
  "key11": "37NskatfwScRCtwg6GYGSCRGhpiSFMiodDXUzAS4KbghxsZzafidv2PAuoPtUYAj9NPCeTQgvzNdtQpg2b6iqW9g",
  "key12": "4aDHkv78FRTr1KPx2H6uCn5jJUPgbJ6VwTnCjMeavaUN6FJQRGBH78wcrCwr9uahzRXo1bD9QydKCh9wJB4JSfmn",
  "key13": "2qLKuSgDY61qXvWT7Q1mTkwYmS1eN5zRxq5m14BhWss5ZzMC359AW8sQUKfkk3yzTd3VXu2trJHttrvgTjRVRXZN",
  "key14": "N7NqmUXFM8QQb2wrFySq64odhEQphinbN1YwNzcgL1vigb6VXzrcAuyHGzXbVdg1obwdUtcMMYJfdP5jUoqKtF7",
  "key15": "zhxgtGoyvi33g5nWGbcv8KJHxuQfMhuCUqG6cs5rphWgtRPFhPeVX7zsMJzwgB1VeUKSbe28ej3irU1XWHCLszf",
  "key16": "5GWCHPTpPrMDAgJ122A6YD8U6b3qWn2bR9MqgLUzn3qCu5Fv9BrGtB85yNgkZkFVtqbLbivNGjUYK9cafhbrJBfM",
  "key17": "637RxenQK1MbjpkMvG7nnHMfznWjLZ71CuL2KyHRP1PCNRYEsdFSkCwsfDio9AVhgnLUwpgsGyH2e6yBEUmqfFTe",
  "key18": "4u8B2h1qwvsFkfF1e5yLpDosvAgoPyJaJtJKH2HXpR9MnZR8XrAPenDFip4D7eLUsvAnbTm1FCKk6ffrbU8jKGzi",
  "key19": "63AFcFCLQWr3jpuzziWb7KtCiZVgywePDRrJfaarcZsgfJdppv9j1fHqKiEHSGPqyjQWEVZiyCS3emiuwzzBkYab",
  "key20": "2AnMpK3AQSZTJ3edMvuUZiX52NCHyUv7BtZfgjbStK5bTB2xxLs9wU7adXjEC1xL8wdfzJ97krrdEVbqhz8yqcDu",
  "key21": "651MFTWRM8qz9nFHXbESg324hvnzPHSViV79PQTPxqNZFVE4y16JYjSTSqdZpDsZfEkpcR2Dj47zJyQFqkTbpBwf",
  "key22": "2x4ckq7TeFWigGmqr8jgZKZmsrasu1nwM7XmwTZjyXzVvYKxrejbs9a2BxHbaVRqvcT3Sv1xKoB7USoJ43WjYrh6",
  "key23": "3u1gwLp77bJduBfpgzC2EGCP3jtkua9GJ7vhfrnWu9APJvYJYCbBtpJYE3S4AqnU9ArCnEYQjg3MWMznrPU59ZLW",
  "key24": "75vYXKxix8r9tcWp5wSn2sKZTXPhKTbBoruqivruw24qJzPgoukokpJxysim4syyQnWkAmiRRSVo8yhjuQB7fQp",
  "key25": "5qAVKSAYPFgQRNHu2jMSbdLqjWLVnkV6g3N9J8ipXBXYZN3pxY1dUikm8QsSMyQrzpq4X28YEBWRSFpMnusR9x8z",
  "key26": "5KffnMmDsoKqZh2wGrZuenwo2B9qfJT3vJ3UpmQUyS2pneHrakTERcBHQuaKnJAHN6q3cRpNFj42JsnpJdZsbZT3",
  "key27": "Jfo2itGaYekJivsQ7i2w3yyo2U5xN7q5YkM3w59Dmjoin7xEZ4x6GCgvW5EggVxoUbERahuvQZSbuUW2e1Frgux",
  "key28": "3dd6PsKVo3gr1RtfP4da7bC5FtPYMD3ABPMosQxbRzEpw77wV4HkKYhio8jUJhLbxycXHnP9sPB4W9oj8SRvQiFG",
  "key29": "3En57YmZjiXSvEjrdR8QEnQ4uM3aNP49LfiAmS1yhsUeJxtnj12jzbK6gHsnBQfzFbcXKJJXCZDtLBmEbY4iKWj8",
  "key30": "2zTNhcp9Mvkwzz48DVNgYauxpCL69DGJ1doTh6S9ySibJRg1yAMM1kZHQtqRQieUz5ewrBGxRDgcxQxYV2fKSWHJ",
  "key31": "5vqJXSMNk1YfHYNRF6osTvDz2w35rDJkuyPATZAoRuMnhomGFEinDebCjMYQTceLGroMLk1XT371az1eJybTPu31",
  "key32": "3CWj6zhaQHB9kbCS6KTuQEn65wwZBZesxGu6jLFaJTUyFkE2AzpLdDxzAkPYzjhwLSBAVin5BeMVPnRmioy1gcVf",
  "key33": "4dBYFLLNdhLnmimxhcvYSJ7h2bMCUgEZKtCRdnCREXq97wKDfJKj6b7kYzjKN9XDxVWZ1yeWr66M3YZhzRVFUCNM",
  "key34": "3Qt7sGSpbJrrHk8jatBtYgpDBh7quSFaS4kKkk49NakN3UvXcL1xc4UtYYkD2VMZ4H9qi6rVoCHRPQFE33oc2qnF",
  "key35": "43pJw3eoDJqKr7D6UbK8FFmf814RUwNTErXZf6ZbJaMr37PabS8LoB622dP6waitYeVvRNHtGfSoR3X5PJYm46CL",
  "key36": "2WNWHtFeb7YZGHVg21RXyFCEWt8s5D9k41ivco8bDQyzizu1VHtZU2EJpkweWkqfifiwNCumygdP59AjiSWUp6et"
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
