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
    "5R8ZPGJ75Ns1quCx3Axjoiag1f9zymgsBP9SA69GzaT5SARL2cAVwqzL4fnWa742ECQnwfrdZvBeWwLWvHqvXZDi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZkhBD13qp3rNQ5KJCyPvKR4ooHe9kCuoDccBZigkdsqWTka2Z4Su6ckvPmkevrGqLYcpt5D7vJ8gDrjDbdBE9im",
  "key1": "4e1ddcMmhCmXfRM22hAZzNq2jPpjtyKmLz5iNvg9AMaScWM5wKzfe1TJUzUc6uTiWTEANL7dsEVtGoJPhiRQpKk",
  "key2": "3cTjRDjyksUkRCP3EekD4qujSCefo7xPbH9fKcBDxYH3MLKQg2SFwxQyJf8zveQW1vmqbSn9Bpz4XkbVdSw2DUfy",
  "key3": "5ZSxQvHPgnujW7dstvbfGQZQ6TY6vwneD3MhnL5jrNv3av98EeUSKJGjkrMaDGqA2Xdz1VAfY9KP72Y4J4THYifv",
  "key4": "2WyQfxrBAkTXSvXAtWyrdGf5jznwg1juriuEpVFbyLZQydo8YhR8qHTtt5DNGHEug8pPLVzGxwNsJcjDbJC6d5K4",
  "key5": "2oPGTRZQfaejchGb3xZo22nW67q7B9dQz9Wie28JHiPWuhNUxhQvsy9Xfs1fX6iQvjdyPeGtoTJRoG2g8WqduDkT",
  "key6": "247ZDDUhjLE6b1LiqRbAnM8nUt8Vr7J8LWzqBdKBVmua2iuCqM54eywR2hVbvsG1DbF1mS57iv4PVLHWov7LZg2e",
  "key7": "2sCVfKn7NcEDvFVmKdfXD5BQaZns82hoVG18xZGU1NrrU862Ft43kpFoY9RuDgZTvgYQiNh4zVAKSDWFgDzAhv5H",
  "key8": "p6DEMZp3DWuPKL7cNifT298cbmhsZJncJx43RKmMrnBE7cRQFppru1YBWrXs3ecNHAeSGrnLSy7SHSWh9ZZyzcq",
  "key9": "iaAKB8AZW6vaVQdtnv41DRnjQu1ToxAMcT7EhbkVvoUSUTMfFz56wAAZx3wDkz8DUZ9WV2JKm4PiHWgDk1bi3DW",
  "key10": "4vgvXnSpEHTXKUHHzhsUpBxvjUeoyB1LBj8MbKUZEyxSWNy2uxAvg4AYQBEE64Gc7vSoTWitWfMvwgUWz9zjy2ZB",
  "key11": "4mWSmSv6hy9DHXLvX5CYAZ4XTp6ac7BpvQ66Vhcb4F8h7VTgAkwxiH2TRMh7vyYQ47Gbr7xTNivRtCnKcQowqnCH",
  "key12": "KF8pawQwMBcLaMjjcpCuPXwNjYnfDRTFtxircgx96RcEkaN1zvUXozszNwbDHHWXbfLTJkZvKmLQoaFNkPBkvxY",
  "key13": "54w8e1hGRZgc3b1cvUmbJsuY6EhJNyW5E75RqJAFUdjTEGytF6mVtkcuXyopeD9Ryc5jqfWvgKdc9MNJWM8onw1Q",
  "key14": "5H2TZ3pTsN4R86Tvst9Ky6Q2i9Fg7d2xuCZrjHtWsUuyUQ1FYmyERErQNY59Jc1MivJqszNCgcxeDdcqx2qsKeZP",
  "key15": "5xPYmrQxxmAh4SD7YHsRYyWs5bnYUMURBVRJUNhQUgwmXMdPheuWy7ic6R5TyXrDjJtCrrDhaEu8dGQ3ym7dqcdF",
  "key16": "66tQLtSHdMheRbqWro69Agbq7cED4oV43Fv8pjzZZ6FJ5hfh93XMgEZ2xxqgDFt6yrBqjSf1eaisEKRLS4jXvggR",
  "key17": "3tF24kLrpuWPuvpUDHb95664MgcicYQEzqUDcTh6uNvHjDDz579cS2Y248qakomuHEafXuh1jxnqCa9WN9vCB5pt",
  "key18": "FjzbnVEhvTjykYdFWiYT4S4MfoxPhWe3Ck7RfbZtgWWtHkvnmpyQFh1Gxyaey4QuaE1PBRdjKmpVP47BUtR6ggk",
  "key19": "pFMaSdUgT6uWtAnR8aK2iBWTDS8vLUoUoig3p2FiGnV6cE5Sh1jD723ZUdnZon8fCThXtc2qx4PB5XTyV5dgUwG",
  "key20": "2Mo1WVhvvPhmsesLrZLjQreDi8aWYq7opGCPk9a23qLsiVithhit3jTTFG7FJ58Pwm9vYSf8vmXWg8U5oJh3qZfL",
  "key21": "43S82pZ6nnjwhwaV9hHBFfiL7huTEMSCJi1eGr3MnZGXFu7jXEQfFX9K5Sms8A3yC9QWCVUtyoeyTmuLQUmYxoz1",
  "key22": "GgRoEfB5jcQ18kC35FutTvejRryW5uELZGpDzkzvBVoPPaHjpcqFYuiJNpE36AXrBXgx4AHMvvWwxLbXPDWhf71",
  "key23": "268UMqVotUED2Pdk62hiCh7NPvsaXk5dH85tDoZP9CngoZ8MmQpwAPTuHiPpXG4CN1KiQqVoZn2Yzdihic6qvuFt",
  "key24": "4ADbC1oiooBjaHeSj64gy64ywhBdJGUVgLdzVbe7fhg8AGiRDqjzVAPBh7sV5Q7QW4maisKjvQkzgj9tuabKR3Ze",
  "key25": "3GVEeN23VF5onqRh5xjRGFkCUiF3g7ZGb7u6hjqDyMPRGJkJknpFDpfM5ec5VZE3nETVzZQmqzgv41nsjQZX4Xp5",
  "key26": "4VGauf495eUbJ8RCdsQjhNksJXaSA2qeeCtt588pDCj7BfrmhZoqX2xM7TWbS1rsm2AKak7ETpNR69KQjyuz4gnd",
  "key27": "45Jbo9iukG7NNiA6Sc6e4Nf8v7eDPnX1dhNsPeYcyBMgp2b1F2nJan7NU3qJeDuHpjsGzDgCm16nPBtB1vqYWkD4",
  "key28": "JDSt3Pg7Gvd3sNRysdTSv2oDG7cxmhyG6z7FMYBddAmWNMrGx6nmpaK4Bq3WozYf5jHrM8FEjky8488VVCowaHZ",
  "key29": "335hxU1MVi8iYjFt5UzraVER4GLp1s3K6nVj5mPAMyRsAWBFU9yXBoUEp7Eism4akfSqnviXy2H63Sc8k9RbS8Yh",
  "key30": "535e1oRGU8366h16zGy2z4zSbFJeW9KoPXSbteRmWdApXNPfjGuARN3AVd1ZF5rFVnThrAvrZJw9tyKynpwDb9zt",
  "key31": "3CT3NkcnCYCGtRPdGzYuxKBQ6kAnbJyzvQj7KgB1vUNq5vENJMXHd4R6a5rf2LZxtKQcSinuBYsoEp2h2HxR2yqC",
  "key32": "5LDQLQoBRaSCMN2UtKGxvdGZJC898bosd3QdkRZ2tDcXvjagxQ1gKeN8KxkxpMKsqw3wujMAaSCv9LVvLhqNiN6b",
  "key33": "22Q7xnwud1uB8jsnqGruk6LTihgjD6XfSbv56hmPwfo83tmWT4PAJHWzH84dSKocjwQbubCtnC4Nk3nixHY9QTUm",
  "key34": "33bkzEPWr2Q3Xrz3gdjhKtyjtm6UrcbWy81DSmRSk62eor4eDnJnzGvo1U7fYUd48wA8WebDXVGeRnKqPqfek5kR",
  "key35": "3DDrCEduYdjkrP7BRpyscHySFnYnR43xe6ZaHZjhZpWgZy3Amh9TTvng5BGAjHeMSpM3aea2HstXVr9XQ1ScS7fQ",
  "key36": "5BZfK1MqroTnPyhJ6NDyCQvE7XLix1hXNRCxLnALunfAF8VjaphuqWGUkhgP5vuwX1Y45WFqwMkcdB1sWcRhiJL4",
  "key37": "3v2Cn4wK6Y7RXj554zCizbzH12KXjjBiNVCTBdMH3x5cvqDaYmBNFWKiYS4LbNkUkLiZ8kq92K9QUCE9qc44qZzh",
  "key38": "3oerqu5ZrYrS9jpDVKWUJE8A3J3UdbUqwZGqCSjwnfGCYLA9TFYN4soMZVvBkBK4oVEhkFzCxkCefPoJRe9iaJ6G",
  "key39": "3RRBLevkrKAyqELprTh7NYWHt9zYFrGNyRQJsLkaDUtcnDQfu7aTnfPmpXKYm2buk71gLrouMVQUczWJQe5PcFf6",
  "key40": "416wygXjieU2VUGV8ZmJ5tn8ukZvNLwH8HxAiZfzt2rnFEnqrztoTwZAgMeXWgLik29fbi1dbXXQaGAit4YCwsA",
  "key41": "5APgLXKQUdjdyL5MSGAtfHZZ9ezhpRwJTnDaHt1xKSkftSgA4eP5wkh92Rzka4UZTi1scKqnGssABFFyZ4wNhbH",
  "key42": "4GCaagqFhhgj5A7QbKbcebmNjyXgbAhKQmgcYHK4F7NNMDAcycoSae4goFQRrNfHV12MMbcovf2Pg2FVcFHiXmvp",
  "key43": "3MZpm5jwmXHJ3UfGEvQqTw43Biq1bHjkWJXw1eAFZLUdz77catFRcWzWpu7nB6Z8vGdRb5rnUq2hfMhxcpzy2pAK",
  "key44": "63qnAMviyqKd6HFmocvhCj2xwSupgke4ioQVagfAp2kZqKGyu1bPaGCPaQbivmD1BaopixEQ1LCebuunJ3K5SHFu",
  "key45": "5eDtyfv3y2z1jgDoNXAzpgeDN2bLUAxkGY57L8ZnbniETBdsmMENj3Hit7BvYCeKDi5pmQUzmeVdGpbzZtCyBSwu",
  "key46": "3avYtfFH11ha2pbSDf4sjpm7N8Ae3mbX3i9hi6yc1GJ563Bk3jUajHJeCBMb98NnUAFLwuqfrjvUiANKrVjZav37",
  "key47": "5F1fk6MRN8MeFQevJeQd18u7iCkwuV69uadmQYFdP9KQvXfnkXmRnpdhdxitaAqa1VUJg8PDFnf2F416q18Xjfyb",
  "key48": "2uH1HcWxYZGtw8P8n1f3KTCikzuARYnEBXjEoYFDHaLu8YAbfcDs55LDtVLAemK87hJaCccLAqC2F3mAzLrm6cpQ",
  "key49": "2jynaU1bYMdRNtNYpbWRW1DRkNVMVrYurPBoBaH2gksaCEVjBGJzrwzDefa1V7LSggauZLPk5Xb6dcun5kLPN5Rm"
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
