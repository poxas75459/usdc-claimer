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
    "629CDUPcSNMKMSYEzieUe3B7VNn5PWrQ9f9eSDyT2yjFqneYb2P5r8LUf12ha7NLsBokghCffeqYqZ6AhjVeQyMF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XKMev3G8rGHy6zUb9LTeFKrKx1PxpeSwBSgif9ZEhUb1GfLPHs6Z7XNSh7Tx8hE67sASkwr8kHvG5Uo5A9BbxVU",
  "key1": "W8BXXXsTUQhRZHwwhodG8VrSxKQVNHndMbfBM9qoyGKJ6AJPFvRNpbcVJpvXWimAA9F2UQLxUK1jguy7vUP7NXc",
  "key2": "2QoBiBZqPr758N6VUfnyp5PEj37LqeLgdxLtR8dAqiUEG2twkQx4KiWSAs2Bbo6ogPb89XA4ZXbCypVMPRZU8qyv",
  "key3": "5tkhGtfb3RXh5xLPU26h615fcoHvTJNmCKCgm78zEvNQdi2b5i7MkTTtqiKarGrnxRXV9xvnEFsBoLRgcEvLtSBJ",
  "key4": "2sQ8u8yYiRoCcx3Eeg8gZKw81PDLdieTmsJf78cSa7uUtQmX1wke8QzvrDhhw5Bv5xttP1rMb7uqZpgMidjZcrFs",
  "key5": "66fLc3Ctr6SjzjnyLPDdGjGaTcRs9aTjEdKkeLrUY9wWs6bL5M35cHVH3aPysVpvsPjbaYQM81NzeM98NfM7GBt",
  "key6": "WrzHuC9vLKX4vqwjbJzR9pJZLP42Ywag3macJR3ThsBekVuUHB8JbHSUShTiEmED52WLK6pgo1gA6SJcCUMUm4C",
  "key7": "ze7HLsfbRXddnVFsdfsYww3F37YDGVdDLySE9hkXAtgiirHZyz1vvMvRK6H6NF1MQ6MJAp7q9Mg3At1kpqE6p5r",
  "key8": "3oGqoFmE9jJQMsCUsQLU5rtkxAEai2fMPXcMiDTijPosSChvXcNVmbPWGm87gVZLcZxCewXk1g1FcgczUvQPdGTn",
  "key9": "4v6g3B9cHeJ3R9Zm4VQ58fN4ZSXnaEg5JvrbcqCYZ3E7ycMp6aSC6an1Z6fXj3F3pr77fgdGnoBDze2qZsq2bgLm",
  "key10": "3JpuARWZYHBWog2WLEf1igp7Gi8rcHQuRhMVDipaZQeGcDPzNazDpttG5fysKqHJpkVGxThUCEpoX14wdqRMdXu8",
  "key11": "xVEK9PgBTv7onDaYbuxGxgHpYsNV4XA7RwLQHpr7ueSnWSGp6BVoacUBA1BdTNxY3uG8QWGdgqec4TK6py7E5o5",
  "key12": "5k6mdP6GjLBX2ortDXXWfGFKPLVdMDymj4tn5RD9JQFRahiLmMadWyhs6zPrrCkoUt3WFRrDSXQrbt7MAtV2Mf7f",
  "key13": "FiSLpdDTkJQv4zGKjyE7ndcyFEaDn2i6d2eFvZ13odkGE4febSGjiYx9gCDQUsrfLptaVGkuMaXYEpF53nUz5pU",
  "key14": "8sWvP2SEriL2r34pJ3RMx3mmhBy14fymniKs8yJvvXvzZgn1QWTzAXeCQgbADeKNe2W5bM3ATXFHxAWvrTAWhHb",
  "key15": "3gdkyKTLhaiCZsGsoBeJYbrYqfmQnwAz2GBqZvAcaeZ23rQdhCevXKN6ARziwD3GabR2KRquCJZ22trX8h6rvyTh",
  "key16": "5bX8X4HpahGhRtas9sobsnfXHdPUfjtGKkEkpBU6fuGaQakAiwsPKQ95eaTRErU1gG1fG1adpwGqwRd4mWLUvrxs",
  "key17": "3zEYHvZW9C6cSfnqfbQdgnP7id1zWDSftVFTuxBnhymymEo1JGSERJ32Fu3PrC7asnq9Eir2rWmQDaukkFiJbwux",
  "key18": "4AbyPVKidG3FvhnmAJk64bpQWU1BfMP7Ms8BRn8dAG4dwezpRfpfdU49b4GwphgbYVxtvE4PXCpUxGFCkdsF46JS",
  "key19": "21NjVP9csSjqit1J9zBgm1jEzagy1pJpL4ejBVnjTGsvnWWRrJSPWywrYLQiGHciV9cDrhBkaKJGG38v2GAoPaKc",
  "key20": "4ChUvXMtJ9dFXx4yhmbouQikEB5r1WxK3T2oLZzcLgyemaZB9iD1jeoVnzRDa1cYSL5JLt9fzLvSfc16QaFABsBE",
  "key21": "5k5Fjo7DF8EL9spuUCWvpCEFNgXHXaD3DisTnbCC4rKrDy6VvXkQhT7LhnFQ2tFEyS5ZiqbUE5yMKGFsqxvwohGv",
  "key22": "2HuqJUQ5xBwh7i4JSZcSgr3Wg4ecMsq2xN6XH99VAj68WZYcpHS3hGQ96GGLnJFbyW5BNoE82bWLVa94c6RkNLEY",
  "key23": "3eaG4W7Bun6194kKa5QbDprJE8p4X2junfresJ2vxjc3JZ2c4YZmNww4EpcTakm8p3uM36YnBLSTUFbzLh6jbmEL",
  "key24": "6729L3gZ5cMfAieVUEA1YFWPAeTJ2DDuD7VGscnkUNCbCgF5Mz9GXKtRvvuk6R4ArFKtPYRauCnDp1UgcZzh1zCM",
  "key25": "617YqE5ZBaw4hiudgC5mT6VL9LDobahFS3FyS4TWFYhWBi8RiEnrfhxtap4ht86xx4Esn3Poyui39W6DWmNzz7sH",
  "key26": "UFoupJChWadpqtUp68ZLrzjaaRSG8Xm3iur6xsHwtgwEH53KaBQKw26RJJWZdswukbkApTfpasMdrDu1rkBiAHJ",
  "key27": "46LQBZZzCrN6CnrLK7QXScWSXYn6ecVf9LZCovLupvPE5dsy2J4R4Vg3VYBF3obYpHmJVg8fhG2qgUexJyDECr49",
  "key28": "3DVNJmzL82wFjWGZibVdK1PmqaH9Y1oKMNbu3hVefWXCNWjEFk3Jhmi6DyBLV66PPn7aPVXUTTQZ7UaSJsgDzTjK",
  "key29": "4hfxFHUp3KUTHaFrWgMsqZakxMzR1LFujMZXYC4yiBZn8N2Qgoot2sDKPEQjEA3rhjSegig7SMEpAKFfFk7LMSzZ",
  "key30": "4RyzSqg16J5tscmcXvQa7Pw47r6UTKu2HbPUZh3qk8YPmp9kmyqsYWfXyY4nbmsSjKBFsycXoHwFpjdQ8tpYET4m",
  "key31": "3nyiSqudV9DD2JayrcFYRHhBwGioU22DkeAACXsrJxS8LCuSqq87w8NSQr1MogR6hfiRsUR54yq3PCTonRxZXgiF",
  "key32": "27hA528QG8s1bGomSmjJgUxrENWwMgnRTckmN8sbQp739VzxBM4ceg4X2p8r7mMfVntTv7JDsqeQ5EcQ2dX3PKkt",
  "key33": "547ung8Y874cmr82TaoaDxwTJjim24qyUYejK6fdkfzQBML24cRQqx5rWBqtZh3AgcnPo8PS6zoPTSgLubEvuK86",
  "key34": "3jMtweox6w6W6af6gPHaAEy3au61oyEj7NjCsvB4D1ZbEhE1TQdVMyu9xaYNdXNYRhejd5Wuq8m1VQqskK27TB73",
  "key35": "3XgvXLEVeViPLjPVn3syDEtKEn2pjCncvH7hLdxV8nejRgL2UXn6VqAg64NA7RQ42e8TqMewjV1PHKBaHR2MYVfP",
  "key36": "4FbV6PfoDZ7uVPhZKvbZi2VqoMdL9BB2MN3zh3YDEAcdgGCuCqVJfMkGMm1eu3ahaJcus1WgyAVChUs2fbsag7Cw",
  "key37": "2zYWNAzzK2bckhCbgruR4FdWcAesdAVysjYKWk8zuhZyKc6teDMvwsEr3w5PPAoRzgaqq39f9tjNfUJ3uNApA5hF",
  "key38": "54eYt6MQLEo4pDGJjJtuXiyXCMeYL7KqSN6FMBd1FNDkGCdmhdA7VZgqep6S7gZHQKG3dDgE9DVWCvZ5PZPNytuV",
  "key39": "5ooGqdB2A4XDjsdTEMSc46V4RRaxFCwjbyLb39P5k6LoGcuSJwyfaHxMynwo2s4ZRgNmbmQcjBrTJPV3bKht7g1C",
  "key40": "4Rs3589dGNjgwrQvCgPUhVY8VkM3ozHVspzqaf3i2LD5tW1tsQwXZtpTjZS97ptv7WtaZBBx32jsD9bjVvHEQBFs",
  "key41": "4advfwaM4VTVZx5NVC4qoPqYNGdaQr4X5EwkbvYTspjVBJUWBkeyFBLSJFU3h3QQYYMR1FCQu9gbfxnAhTCPHrNv",
  "key42": "qrJDTV6iYXBJZCamX6xAWpzDrfYABYw9uLh3DtmGGe5sGzgEGbPvXcDPc6FGUbc7gZKAVyAo3PdqwYs4yXFgoTL",
  "key43": "oz46eqEX8TFWxyf46irPrqMuGnxAUaaH31oGj11m42WLotaANknRr5o3nFYnKGSn2KnDisevfL6TpEtfsTmQ52o",
  "key44": "skGzAvixTw7sQKfBhPSRyJHakMxjpUggJSTDu7cRdQG21YnvLs9RWXaH2ez6pprA7U7mwmuKHdFL2Qs7i3CmfbX",
  "key45": "5hDBhK2Enh9gLm4WrQQwADV6QmA74r8bkQDMLUxvEMudhP3Ea82G7RsRdRBFb76B8g7qwsr1EjqNHyrPB6sbC97F",
  "key46": "4UViGqQB9DmbnRaekNr6jwKC2vyit175Sokvw9PqDvkWbjY6s3BBqdnRjdYc9efW1EcjxvFqo76xgWJ3xiUD7q5Q",
  "key47": "UfzNcFMJE7eZXDDnga95xxLdbm2SjZCTZhTNFd9mNSBYMqo6XA73AU8CS9M1nGpZwPH44WHYssmyq1cQtpxYUVB"
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
