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
    "51Wfm45P7yy9woLcHZ6gwQkCbH3FD6ccudWWYgzvYsXzLVyJ3m9iY3Ep1wGz37o4dHQifVcs487mM4DVCcnQYWCg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FWfk9iDFmaDZyRjibh7c332Rku1W6ENzPanxjmrrpMjf1zLyjPQjctNVc9FVLDbVZtKKnn4cDTQKAMGTy6hXa2K",
  "key1": "5H2aaze734DTz4QTg8WPVP6iE9UZ4Xcvw4qz6az1XYUoQBArfbP3Xijq9pqixjYjC5ZMSmnqNHin8UHb4qF8Zdss",
  "key2": "28TgzJ8t7ixPdCRhWYLc8wjVXnQYJ2fECZ4y6QzR81G1YJmg7eHrkcin3JvpeTPjrscpQMsgqztoTai1ZXNfnKSL",
  "key3": "4zHc4ssFcoYoSFeiRPdxsKCyR8pycvqFqwtQwF9svY5WeJTd9UfBByYnWoNTbgduoJ1ncMrcG9Yco1qEcbFRenhj",
  "key4": "4pavTvjuDfzrAVsFsSM9uvWaxiGy1uj3PJqidcAMFCLFTxT4uzmJLXrX8ioPwfTcsuGeurULYbQLB8fJt45YxifX",
  "key5": "3LSv5MTxJMHMjbJ5Da2f4HAWaeSz423VAYcbxEopGx5brddykwwnGWE2omKHtLZ8gGp3bzyHzAD3kfBygiL66bNc",
  "key6": "37TbCxpJzvWnqgUohpXsyCytN8CYJUYN5836AmfPFYWfmtmW6Te2rtARN1QHuQHDTe64CHizhZPJEQ64qAQCaFrd",
  "key7": "5gJHv5qcBAj5soLP6h21PcvZ22N83anKticc8Qb4y551ckEDtf7c9xmnUJfv13BhE7dj8SdVEMHTP1zUr2WWvCo6",
  "key8": "2oCz6aUNVyNfWPXygzyfQf54GopsE9MV5AkArTmFZxmHdbmtyTdJG6JQT3pQ8Khxe4ooHpCXpzq56URRiqKAYskS",
  "key9": "2HrJETkMjXT4Tw8Z6hCNR4PEKCgpBBXErjywrBdGwSibgmCe54nt8oo3rdN59eXrgbr2k5pZ3qZppLnAFHpX3PEk",
  "key10": "Aegnjzhgrbbe7FFtrjCqL9mXScoi3HBcDjwGMfY6WSMWs8erkAczAiiSksFsaytttLGaqbUu1ZhYgWDUgF1Ebc2",
  "key11": "51Eufafe1kUJwZFy3832dzi3rLZkfH2qBmzEJBnngJpUHrQZq9DtTJAgjYkNnc3mBp2y19pRxuW1XSQC1tfTKKsd",
  "key12": "58kHzS6b2by4pcrQNXzjKtXvfJmeaBdDRsVAMKWCfhV8g3JDcbSfTnQwznCeackP4nerGrcPKXcRatptJjLqp5AX",
  "key13": "fcCrnmoK9mu7E6DCLi5xpjSvLdtPzYYYtcTP731rquMzVW5BNur4JMjAdRMLTuBgCfkhUxypixGdNvkhyBYqCTQ",
  "key14": "8iHJq4t43VudjZpes6GBcH4RB8rD3s838ofDxkFdM8EfgimTFWA3EVYvz82yAFGcgi16P2cSNrV2rnqgSr66Grf",
  "key15": "3HiHvLM37Pg38JsXem3SfnoLrtC7seEM2NNo7QxsYvNEnbQHadf9awsj6qcJRBwWawX61bW6kejHLxkmXLqfFjf7",
  "key16": "54zB2jovGwyCSbkdtN6K8nU9LhTikuE2XLBdTzcrwUJ5wtbYNCNwg6xR9GF36KKNPHBFPMQm82PTUXDD4VqyyqNi",
  "key17": "4sSa2stEFUYUsC9P8fLLKbMH7Haa9X4L7MMzeT7ykBFACeKjBNf23QqH5SkwSefARZbCo5rWtEchUYHCwLggJ2xb",
  "key18": "4TruKDSN4zZxnGqYmAJGRp9KySZCynWVLcFmRHW6uYB8hfh9CUbUGoYjqqTMgkjZf1kPGr1viDFYSaNgW1j7c1XB",
  "key19": "272bepoo6dpy5p5Ykr2MgGyHTZgF6usYAoJdhdNc1ySPAd9ZPFbfrpyoS1HgPbL2ypsYntXRc91roDF5JgseBMWb",
  "key20": "24uLsYTXyNCfHHAsTFok1UQrJqBDQ1gEWBytRuPgiBv3spWPRnUs3Er5enxPejS4RP6GH7XdrewVNaBaQbmcpu3J",
  "key21": "3gzKmEiZQRS7ojj6fGhFVnzXTYcQLpcezyJci5avEhCRDK5vWXCVNwXdkfQgUL4UimX7zrbTfQA1q5YCKnuH9QkK",
  "key22": "5cjhTCChnbNpokFxuh9k7nVmcBXNVYbBuhtztuBSTWRJv2A6B3SSEtbg7DDURuUdMdcdbrMEb5sFQEUSMELugVEu",
  "key23": "3UgxiNc47ft6XicorFEQ63msKQKWiQk6VH2VpdT7qZdj3RLcd5j7dH2zQQuXvPXEdms1b1nWwjM657VVnTtJ1k5a",
  "key24": "4ZLiUMXgpBytSbpDkNkK268ft5qoRYXy2VBGfftXBayGfs2diLP6svikn9yMwDFywVVdUpcSVS2T3R58AdqTPzKU",
  "key25": "3UujSa5g3orfbGP3DekQ6Udj4BcciDG9a7EhmKQzpKxaP8WNfD6rikhuspWTSf51jgi5YqL5JZezA75rbp1N8oTT",
  "key26": "5eJseG2V6QsgWPZEz9LpfcGfgBsgvaLHDUntQLWYwufgYNozbm35CSsmwByGj4Sq5gJs7uGnbDdSVzD6KyuDeJWE",
  "key27": "48FnJkumAMGL3B56ApEPivbD6bgXdfHZsNJhqipGca9sXAJDzQSbkHZroghTxR6veoUjaEqoo9mUo6oFRtch1JaW",
  "key28": "3YzQrqd6MyaByxaoxqzPeTXaGMqmEC1N3tWKqjdD8ySAAjdTSwGqEZMoo2T1v1sCjkGTihJyAEn8vXPFGRXGzXfV",
  "key29": "2kwJVu9KVhLuR2vu5cUtHzJj5dhaoqLhd8Qs5WRM6F1YNNAy3SEwRuAWF1QfReSR2J5apFAVFASPM739hATg7Foz",
  "key30": "3Wtj1yXagNyAnsXm1Dh4VCp1M6HzEhKKQWgYbN7UXChcxaZTsXeUEJFD37o3AoJfoGzx3E3mJrbbeqxAismVm9Xb",
  "key31": "2AjzmRcx9B5eTLpokQNxFt1tvLDoNQTjSRj32kvHZ4SRnKsF3ZwRzmDXEz7eaasr5J6GQ3xiueeLm9dFFK39zikM",
  "key32": "2w5hMv5G7Pw9FkFsPfydgnisbmZ7UvbQBcNm5AbS8gzF6zmSw5qAxjjosYmHfMH5rPbb4B2Sn2YV5YKSS3rMGjyc",
  "key33": "4HobPP2fNys6Rbq5UzjWdDwUbm96tdhTw7NoDeT2zn6xxRQrbm6CxsRsJfqyz9ZoSnxfsMaHcCVbEuP7KBLjZRMz",
  "key34": "5zFzQVy1ywDi47W7fYtbEq1k5Pai7w3py8WZ3U2zMVDtJHy4H5oeDqgVXd8m8qhqRjX7C6cNbMiVmMwtzCWbZgHz",
  "key35": "24ve6BWxf451RDCPi1mEJsjeLEaGhU3bVJC1nANEqkL3KzFGprP6shVR1vS1GoU5jkHZy6f7ogeE3X3CvsMF6Xwk",
  "key36": "484uLEGeDoCYPHWnvAzcM6dCjk7d8MfLAxEhs35fDBtjybPbRg76RBwcQudKnJQYDusfonQ5nNredVUmG7SUGY4E",
  "key37": "27q1CoJbq6X6mJEGL5prVbFx7Sh5g1CnrEXVWC2hZQPXRebqR7d66nHKqa7DGzf4J7ntE6rL3ZwRPpyPgV2ZmTaV",
  "key38": "2T23UMaaMVVcqWc2qNNQgWhdp3vuecPRTwjUiyCN79AyifrBXTXEjcxkCxdhY5j9nT6dMybEn3yWDhp2Lf3ZRx8T",
  "key39": "YJxGYfQnCHSBJTJXSTvkPNBiAkoUD8Z6V9TTELttZZKMHT9f4akEfvHN11RykidvbtWC1SmaiYZPjdFJSvRVqVd",
  "key40": "3kYoesGnLcpL8k2t62sGojvayRTHFJv5xBiKXVbv2Xj1av4HKMc9kvbaprfg52CnD2n3g1fRqmwb7ARAdjWyNUVi"
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
