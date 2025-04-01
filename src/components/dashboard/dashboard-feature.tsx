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
    "4zVrKCLKnY2TK53SjhVxGhfNHsqiqQgNaLmFW9VCZqKzQTkDmBggzWdTCFt4fnMKry8ohqbVwP3hudtv5WgSW6AD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GHQxZcM6Kra8ueg3ZmjfbTM45A16nyn3K2t3iJW7dQuqEMEJv918MJLUg8UEnRLAs1u3yMjRijiyx3HscuAzCZe",
  "key1": "qZGEVfZpEgknzAVWxzzT4HKGfSHjFSSJxgJwUxKVA76SasqedAgkT7r8zvoLXuMB5kgLkeh1tfbCJfftd7QNLgi",
  "key2": "4caLFn6zyrAuwM4QbHDMS7EdgiPTkuC3CDknks2mgWHNhNssicFLiDpap19ni2Y7Wt3eWjGmVbPqLVNf9ThEwsuA",
  "key3": "4fyqiicjf4x8N21Betz31zBDSL1jjvHo8UHhw5372Q7a6hL8mdsLFdXA64CZbKT8Lv2L9n2uDnCrU9AhEZyPNESa",
  "key4": "4222SpxLDkH8pqtdW2grab3bMRJv9i6C4fE92VKaRHYyZ3F36Nw1rALaBtQegCnAFK5JFsaX8CXMeq6qGkhHmyc2",
  "key5": "2i4oZjVKsoVQGHjjKXoCETFPRsP9wQGmjV6vSnRytZGUPvcBanVQ24kDCN39kn1nmzQsrByagE1yNuyquK5H8fn",
  "key6": "xvhGy3yL6tmRSSusoxd69udUxd7BMr1XUYe2Epo8vDjhEBWL6YeCEppSKKB6amjEPox9TD4G4unz8uNgqtXdror",
  "key7": "2r46uNwPhJsidqBEcSnnrVgp7gtksikDvp8z6HZQ1WGHDufsoxPHg7LQ7Wtbc9fFwTybrWV2RxZnLByJpg81ZxcT",
  "key8": "4XRhhC93KhPio9AevKAJxfvRhMUpeeahysBbE95jkxVLYKhWMJf3FnmMnbkfXW2KbnRa6WnGwziyteE34E5KvoP6",
  "key9": "36gufpUPnRzcXkc7zGPdFojT6T6DqhGW1u9jHwzLSVktQ4PXpMu31kLC7pvmKxgSsuoDaLAPGp2oCZw1ibpJYNsg",
  "key10": "Nz6cgApXzT3bjVBLkfsSixh5dEL8J2CWRM6CSz6sY6CSsijcGTZwmKSp2Jbfspoh7tBZJzbE3f2sy237L9Hi92A",
  "key11": "2fwWvnEhjwyoA5ahM3B9R7QedM1Zfgmk641WaL4T5acT7SnPPfa2fJ7Vk1mihZThYfDBiHSuY9swX5M1kt7RjLaU",
  "key12": "5dwFC4fP2wqvZ9wagWCYHyP4gcAF8x7hgevixPsHw97VBoo7fjFwWRCjJKHP1JLeKrJanYTv9UJ88fZkW5yJPVHX",
  "key13": "FoYoWhNi83y6ymGKGq4A5YmVSmt6eTWHFrySywyBxUdRmdg5uTxm25UJnmiBibQoLaaZVHgFp44ogAdfRwdhDV3",
  "key14": "4Eya8r7D79RAHDcm5XY6FWfegNWNV7vchLftPJaLpGCqKD17JMN14QZUrWrjcwfXCRpGNWygPqUDxAcoKGp2YEhA",
  "key15": "fhM2DHtTwpWFhsoUFRrpjAvQdXBcowr2w5n8aLBwRxC3FYPp4WRjXHqyDfWzQjZaHLa38fndobTkcYC1W5HdYNU",
  "key16": "48umt1yWJJWnwvyqfboR3mQA81sJbTbtY7FV9pG46u4aUwxFH5nCLg79VQJ61S95afZZXF7MM46hbmaDQuKmtAn4",
  "key17": "zxEMmnmjnR45HX2Q7ahQfXmrDfbeM9KgqaaALkTqkB4rW3mR9i5J1DN1tEgH76WHooSZA14LkuTkfHMqQmjm6Py",
  "key18": "2fGy9yFpfebUASTEHRUHxdynZ8QqA3ixF36bt57vu57TsNpVByCDtpjMshJDvLwVLd3GjZGU3jVn5yG5qWmj1Zgp",
  "key19": "4P7Pie3g9WF3HjTcMZBSVCnmQvgT9kup86WxRqtNQSiLTYGtApKg7VJsrTZWcoMZAfzRiPVJNZCMPrfwvw35ZUXu",
  "key20": "5snwdSTvpeSpxBoXf2SpVXELnuiAMRv1F1zkA4293fVWcvvwvomt4pmNR3UyXrTb6uFCzqwPRKYEm5x7FugVej7r",
  "key21": "2RoujqYfFtdkWJ3h1q4y5fcmaT3s5NdNUEbzhxhai6XufZ5zDtyUApEfG9y8vFSKwzHkCUwZCP5UrqPt77P986Tm",
  "key22": "ABShGwEUjxEehypdgxiZeztRau2VZd8Hu5X3FhURMKpTRjfvqhsWNJ6wrXQgS8NJSfMCzAPhks8TcnUG6swUNss",
  "key23": "5pEYbrbg3hu1RBg5WkUPuGkgpQKLXVTG1r2RrUDqJmTnoNxXjH9tGVuTxE2HsPPi8CzAHQ8gd7pMyKaQfvVgpr9n",
  "key24": "4XY6qnkBGAyBVNYj3wLMTNTF9bWH3EsTRcCpLz8Zzdhzas5wMcsuYiwRHasXGMgwE7WrWXbTqpDdz86TVWKe4QRr",
  "key25": "3noEYCwD5vngSLqXsuT81PnkoB2QVKRGtdiJALKy9AqTEsLjDogQRYpJrNbBNFWh3PNaJPSRQ3VLXpLDrSJZB3yt",
  "key26": "cb1SgZz3mGHfXjyBet2LvDiGhEUnymCLJto5HN3aapbSfzhq9qC4jH2556hPXvoeRwaE16dG1bHezycFp7NFAxy",
  "key27": "5RQjJPr2CMX4U47AzrQ8ZZvzLcqQaUAnzMtFyJzLZy4hBuge5vbLRVjfSiABYcy3dA4WT6QWyconEjFnBR6zrP3K",
  "key28": "3232S2cyHwUWnx2zhdaTPTqqxq5vvKHAZfLYqbCWC9YbNnED5vu4RgPyTWPCam8WB7mxX94mAuHVs4KetuDTBe3S",
  "key29": "3rJfLHchabaGGTTTe9WyVEZ2ahZ5XCrWsTSEpJF1C4ox2hYFQNwSGRpVL1m5LeLf4xmbidRbkYYinCeN1WZHoScp",
  "key30": "4A27btuXT6YsKuhkDz73F6gzJjuSqbSShtKaY33sKsDRqsdte3optbMCfXbQg1VMQSM3RvVDArNiMZ6FNr4DKUTQ",
  "key31": "3gwXgw4JCTFBmwrFmxHcTXYGGnNguLhNJ427vwjdcUQYzjcSdAFSVVWcXAH8AatqF9ZqmuZUqnfjwAHg4pGj5Xax",
  "key32": "4iENPJFMnGAji5nvGDSkwdGtNWdhKDCr8r987aSo12ZbvTZgjABAHtnfxdJ7Wg4qk1CFJSHTicCH4g4vchmmBTrX",
  "key33": "5bfobeKFt4gx4RgdtDHa39ttUE6jCjzfQeM1fKszMtahCf76C3WxwcV1Vi8oBcEvzrJFGpqimw8JzyqFwmKiRbC8",
  "key34": "59vMX7qAhQFrYcvA9aqaFSeqf4Rt28NJDDasm64SKGdEzLDDGknarNyvqHY913tZ7BptVdMzHVAFrMoWU4ps19QB"
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
