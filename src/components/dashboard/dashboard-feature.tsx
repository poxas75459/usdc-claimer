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
    "2EWni17jXqCsPvehW3V36GT7YM8EU1fPjySsVZqNUzYTW7W2YwTSSZCXwGoMZyaTBswutT1BAeKV5jt4WLMB6cUs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xM25HjPjaDwue1YrYZeRwGjf3j58JPQxcfkJeWW9oEbdc7XDovoxxYHGVRea6NcWmTGHkKRWtsU1zUkndibkrLm",
  "key1": "5yMJBu9UWo3QJFTL4KsABAsDJbccgMN89FoUUiGziS3ATctx3GXqPrbKaiu34tDQjWGNV4zHBJ6S8mRKKvm656Nr",
  "key2": "5GTbb6bw89ruCC1EsEQozqcaoRQbFzLYeNVCZmz4ykgXfShURF2i3GG485hRRftrtyhZK7LredKeH8MLVc6LmsPV",
  "key3": "5KdX4HrAfKrmaGTWCoZyG4YViZCB6AMjP6TbTX5C8eWj4KDVMfKz4ETj5aPrYhKDufH8xMQyA4yKYmpsG4DMwJYc",
  "key4": "4VgMjxEyp3eX6SiJWpzchK813BHhWfVHiJGXZdx98p6vGXG9EzyMs66f6u1QiuqfZfLYWmWvQHoUGCyqmEj7udmD",
  "key5": "3TU7u7EeDPKJLSWhghD2bPxLSg6LxERDU34HefSxPwJKWysJKbr1grScQndomPsUJJdMyaYMnWutNpLrXqABoU3Z",
  "key6": "3k7NvhPTXa13EhZgGaekY5YVgSRqVf9HfyZthsQJBexxXkaFwAURUoLe8qF1Z3HSPqP6qm2w7ZQzmRA2757R2J4Z",
  "key7": "49KJQDJcUHxYJ9M8a3wPj3DyvgjgWXoxUYgttap2Xr4hJnyKnng6NKKP5hxj9Sdc1B6EX4w5DUNkt84sn3AYK4Cf",
  "key8": "42pvmh32cTazFbSJ2duDubz4vZj49u5MU4zmRDhLCHq7iX4Yi58tACCCur98kvqSDRC7b1u8LpUvfwdDifN5DXTU",
  "key9": "5cj2mtd4nppjaRuLkPa6Pr1CKdNzDmGDMY9NTZcY1Uj5tk5xXzMW6h8qPhSFJsbbYQBA8BAgdFrjLD4pqihzJMmT",
  "key10": "3JJzVAXuJsb5366d5pTBDP8vSpsU1Ej5Q9hMFDZeG5sCtmPtgb1VrQg2KKViTEbrZjG8SkGWJPJwMsKnDhHX79ex",
  "key11": "37ecJWnQjWgXs4USdGts121sFwtwQ5mWLeU6Xsbg5RK78MRsP4hxqi7Du6n3dYxrh8wJGobvfPUgdQJ76C2mo5Xm",
  "key12": "GZuYzwkzudwbuBXEEQfLtVC2FoEzDCv7cpW4S8ZaFN4MRLiY57ZFYKG4cDis6SusQbp7N54gExpdoWgieg1JnPs",
  "key13": "4n3xQawR3PMfAc9YGAx6V84FPNvC4iAjrdQfesV9574rii1fwvpTM6f4jmvm2qBFENkucAKeMfYL37cergo5ffb6",
  "key14": "21NA4hB6f2feYbtiPwLmWKLdGfXGBz1G1VisqtQaZ43fCk4jtVyGJq91qHD6MMGqPtZFoHP79gEqyPr8rbsEgShB",
  "key15": "3NwqMvV9VTouupzmoUugo44v3nE76H4FrEkJANV2CN5YHt2TLzjwjuo3SFBMaKxa1hQpGJGFoZU5BPACyJBLXGpP",
  "key16": "3nk2XnGn9xHruLmDRykdCQ7awh69f32ztH1AqsMyqsNZBXNgz8pEB9LS5aRcnKoyiCCkLKxm41zELWSwabNJTRRH",
  "key17": "4CzhuEv1EShePy6Lex3UQUL1as53yh5KRm3ogzEo2MiVhGZA2B39x4XMWmAMA5obZeRm8RsrDwmY1YbZVXDuL45e",
  "key18": "2f8c81t5X9M788ioLjFnAGQvmDQFzrTxr9ZBwSnsHc6em5wKqCBxuXyDXdy8U1wyrx548N1MEhGiafeg9Ya9xXh2",
  "key19": "2mBhYyc6kqkrdCxjrDB1bERDvr543XwgAXyvtzBso1AHhiSAJxGgXw4aGSJZfkMurcsWeHQDCbtY8cYKj5sSnSGM",
  "key20": "5XunHsBeWafcy1BBrT9hLXY5aAis2m5WQc3A3246NXYRFfKH8eLmjUJMC3Eyri2npb3qjLrC9yL11RQDCoMVJMNV",
  "key21": "5znLz9rq9LQEtzoL4MUZoJTnfJ5quHBFdLWu7L9reaMoUNhqd2GRHGTH9vNMPWwxwTEzMffhhuDJecQWWAUSLiAL",
  "key22": "5sfhXKeES3kGD1gxtzx9Y2XorAYurS8nCEkoMWWEku4dWQEjQThBVrhuT4Svx5gQEvsV6sxQx4z2jNPaFQwranqT",
  "key23": "5SJWXXpKwDJ1xFqB5MKfu2ZqzwFXCaAneRiniNorJMWrpj8441X7sRu45fCrFJhLhNQanoEvtacaaUeSe87eMC1F",
  "key24": "4CcpPjzsvqQFW6tZZpz3hkZj7z3eigUBwGAEggJdwCT1spCxefBoJcebmborfvJTUMwUGFUFK4R24rTQhKDdyyz8",
  "key25": "465z8zLYY4cknfEQGiQdBgNKLKhJrnH3Sa9aZx4DqxP1TUgYNaX7wJXDGBjygGi7R2BLSbvbWGBgnYMXwpRn7co7",
  "key26": "4DHJNZWavau6eWm9g4kBHwFvcgZsnRpssymJGKdYNSSfP86EkJkpZ7eVkpVLAu5VxnkLd1LNqPXMLyYTv7VFdKUM",
  "key27": "234qFX3JkvSJwhvDVN1K4PtM1RUSGCi6U63MzQ14tK1nUVUBiaE3SXhbEw8r5xDWd5LSnB69pY3oo4ida6PHf4yg",
  "key28": "3JAW9xsopz9XTfA7G8d3biH2ZEHDRNY1u3XJgYnAjqeipLUadV88odxxbv9oECGc5ifrQDYSETmzkUB2sxrC4X9G",
  "key29": "3WPKnK9cpNsLY7Nv2DLAz2GwwmaFZUAYsRM7kxVCXS1ifAWTtSN9bfkStuuUc7chMaq1NPof79PyJkDJJtnATEuo",
  "key30": "3G4nTd6d9t4iqWUTHbNMrJDNDRiwqRE4gRqBSNpMjXUo7ER9Z5CGRXfxSZ8ribfeetvE8q79pKfzLt7oEFywxt8F",
  "key31": "4HwnymmU3LmXc5uhjd3UM5P4kkwZSjzPr3QW6kMe2dza9Br4vSgpAktDed8eDwH2PbNdZp4S9fJSRMfYbTAxx9Np",
  "key32": "5uDyqEdqgLRa6oFP5ocM4CD3wLvW14NfFPQ8gGP5YqoJJmzsL2QLiNRmDMZyXCqHEYfqtUbZDeHo1ik1dDJTt2Hc",
  "key33": "2exw7DjiWDG6S61vsdRyqu14BnmY5XQ4mTqAa7HrzkiqK9DwRvGeBAkcrhFcLFi4tZHhTVfdGiiSC5gCLPsG8n59",
  "key34": "2cNe6ndZjrL7UJcPLkyeKYNJ9CyQCr3TQfpQV4opzvo4NuEzeLMPxuTPq4kJTMjMf9evkwbqfP9GAg4nqTWNTNSJ",
  "key35": "5vp9xFxR9zfNMFdboTZ4zmw5cyhEZ7y6Lu1Pim1xeMTwJtMiz1mj1UsA6FVJ35qJmh55rVUeQ8Wd5Sg5NLqKS88i",
  "key36": "2wgVQoVZeTgrZB9dU3BFT1Z7biLs29so7MaUoEQDGyQhar1CJ1j6yLjS8NPVeAW9jeWsEzmfPaDrcR1DktANpMbp",
  "key37": "4QS3Kiaavm8UPj7yKMaiLosfCEithPZ7yhvWHy2AeyohTzANrDVgMrhSxeUTbDB2eGEMcSnfDAPdH4qXmozqLqiD",
  "key38": "4JaeDod3ijzAWJUwy6X7ADLnzotFrd89qd42szRrwYN8sxLf9umVZQ4zzi6GusK4znMtELAMcLC5G7meLty71vQ4",
  "key39": "2zsLNHxSbQ4i551DU9Sb7M3iVCgxXPA7CTPDqYnmvRaBk1rDc9dpLTcGwuT1ywNMDXtVirmpBLYA9QXwqWFfr79v",
  "key40": "5uBbj3QhsrdjBh1v3ob8pazWDpiH7XnEWFxnZpBSUXWq955jCNxzvddefUEmQb5MzyNy3Bb8ba3sYsvkFxqikGxV",
  "key41": "gQ1iuTvaGT5uq7MeooBVE1RjT7erpjDVWvy8JxcjkLAr846PBYzWV3CF3JwyvWakBFyhQR1GD2GJjYxKuCTmvRs",
  "key42": "5pdbCNS58tC3Dh9cTHuK3FDqpB31nppJYxq5sNGuKLk1idsum9WVGdSMMf2V9Tk51EyxCLh9gq4RAFGh6jqK22NN",
  "key43": "2QBSa3wbWWfYcVaWXxwXub9NSC6ovSuBHzwQD99cirzS5uEVvzmUr5HKTW6JjPxXukcN8gfNqeSzMZbuMVvDhu3G",
  "key44": "2VgBGPeyERmQJPGMqeLSHyiorXTRVhSB7ZT9fz2t2XSrXhcQUZkqv16AdQQpoTqQ4J5FccM2XxsiufEPPy8FLCgP",
  "key45": "aJLYx25cKwuDgjCgUAxn4rSYzTUZNxqcjcdshxCLvt5eFwJv9Xssb9MqiQ1M8ZtcH7ELeFiFtU4MQsASNPaZniS"
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
