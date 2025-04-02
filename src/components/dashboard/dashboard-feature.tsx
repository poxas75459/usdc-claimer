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
    "49wPrko7UziFN6p1rJLp2jApm9jFKFdNSDEzLWWHBL3XbcYt6gqNZtzakFWka49uMdmqnM9ueMUmAR1ZZiLrAL7K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qq6dMCGhhFJyG2RsKETJh9a1xqF7rsuCytnSPTPX3ATrfvcqS3aV9GzoANCbLZE2PGGgXe6ZZc5TX1FoGoUNpF2",
  "key1": "52uTWestMH8Q52n3GQyidqpEbLbkBQM5MKRyNkmkn1diMxcvbij6uch5mTpx1U26jpq5GENdVVwJ22ht148rZKRD",
  "key2": "2XYtj8q3ny6SPr3AbSEHkoxkKjvKFgUHP4DuuZunobV3rzoD7tPDHJznL4hB5MDbrD8QhiSBNo5AY5HfEYYEqqNT",
  "key3": "3v9nrG5rPq9QgZRP4M1DW8if9PTKZcRkKgbqyqH7u9r1befyxnfteLX4xCeozJsWyaNnfZH7bTEf7LJgfZgpAyEm",
  "key4": "5FdCRCVtde7fw66TW9BPDRL6md43qrwfgrSeZENPyRgoZjFWLJvHJ4Nf1sKUdVzTi91RFQXRCQdx1aG7ND1eBxjZ",
  "key5": "3HbXdj5RmaCfz7ZfBkBtGotngJj5HHkrEZ4of6GQyCBt1nkntoTjemUNgGHq475pMFS8ndsw4kmyh8pMdeGL5Dz1",
  "key6": "4UqmhRWgrXA3wGL4Vh37tAAyoM8LtGTK3FHtXM8bTu4fKBViWeNqAVUfbk989fw6FjFojyXZyH4WwSKNCEQdDMGH",
  "key7": "2Gy5dWuZLLG4e3vqWQtak1o4UDb1WLWAo5KumnXqpdVcXwT1HzLYgiSPbYCxZyKsSko1LQzXMFDDW7LQXWmHSCMw",
  "key8": "253B3f6W855cPN1roktLMEqPp3izen1dmEoiUdMN2LyqqSSgsXT8cLemaySQXewNgMgEt9ppFTvehokNKWTVMoUR",
  "key9": "5LK97GmUftrP1gVvnwu7pGBL5FKJpP7fHGt3WsGN8vhq7wLo4teze2iX6e8sLYucaXRgyUgPBqgKwQA7visedmi8",
  "key10": "DtQFem6PkBSf6sDwyXCCMgFgnvouTpJFLta2e2JzUMYVr3tQ7aw2fkateVeMdcLHUFX5HKVeyh7RYkZheEEq6MW",
  "key11": "2hzxREefkH26njNiqMHFgzrf6LLNJK4YrviGrCHxgdwgrazmgCy2RVvS1HfKBGFuPKjuAr7wALrhsrKykyszCyYc",
  "key12": "5Nirka7PwiDGdo9HXQM8xb4dfJv62pjztRzpYGYPXLw3MutuuKCxSYRKzL7AfxhtjVG39U2GC9o7QJJd5dze4Q5F",
  "key13": "gLg2N9sPNxiqwJmSpFHCqGdKLMCEUx7ytE4DZM6rarQowgct5YgSazSE6PozaK1P2tEmxKGVhTCinVTU4YgbDet",
  "key14": "2JnkuSqcmWukuCP9PVUrXGt3uxPKPA3xpEPfpCK1peFbKSamy8fiq6Bs7H8xRSxnXUuqnk8LS7mUV6zr2TMSeba1",
  "key15": "4CvKzENEnfFetmStst5FyLooTeVF1bTsGqeQABSTmVQroDtQGZreP5c2NhwtAsuefJnA6tDmF9Ewx5XrCHcVkCYC",
  "key16": "iXK5yFitipatDiBEMCqkmDsuR4rHLawGvW57n8gzSUtshnnnjgCdagpG4D3Sj1hT1w1pbBKYrXutC15uRsURxjw",
  "key17": "4XCB8Bm8RXgsrh57G26NdTyUyJ8fTTrtxSkKWrTJMVtxzYguu72f3XKCumbv2HVESHPHMdZXxKrZwRzA2A7HAiJf",
  "key18": "4LMrRGWoftp7i18FtPXchCJSF1ad13uS9qHgDpmsKWWqmTTCjJcZaYMR3LDVT6znUqA8NefZW27LSGBj3cGhex4H",
  "key19": "5FW16kQouwCCPE3NVxkGi61arZDxmpNWAtmhmmVp2tnktvkuHYxQvGSBhFPNxm8zSHBzT8CBB3KDK2p2NF6r5phS",
  "key20": "3DPcJnf7aXUfFwcrt8HyVwSehHSCWDtdwCbsLjwEHc2XMw49Kjcfz6yCRTAnhMEqRXmM2o8uxU33DNNvjw11GNWc",
  "key21": "792ZZ4YLGmBEQxuwhwGry8E7ksqPCiePL47JkLkowNao7L6kdXA8Dzva1Y2jYhbR3Zxa8XV5AXEjk85hKkHzmLh",
  "key22": "3CZ8oNqu3PKnNDrfa9mPztLCEBcfeS11PUibe2XNfUbFTm9CDuAmTwUBKoPZ7GSsZhWeYAXpKpa6dQYWhmV7sM31",
  "key23": "QD1mH4qcZEKVzLfAY72tUrqnpX2CDzd8tVyN9Dguo7CrrzkoWFDeMxeZwJmrWdM219pJWJwjNRtx2rbbGVKxot2",
  "key24": "43hj1rY7hWFEZq2d3ZeVLNjZziT1U7JCkM9YMfgoVfb7KUgueLJf4CkhsVVMUj2XQMhRhMm5Cy6LwTxp8ra1G7Qa",
  "key25": "3577DR5EB9RGRY61SVsE6dYvmdVhPrNQbn272fBhDUuqsxodX16JW3MF3R8MowQAwWQpicydKphofGrGnNmhoYGG",
  "key26": "5htBE6AFAoWzT2TqsD39TP3zyCRXEE4f3cXTc86VXm6fztPLBQuLT7P52jeqyZNG8pKVQeJxAPLdVfk2Qqa6Ht7z",
  "key27": "zJvj5wcwk1DuhiomFzDpU7RtkJuoXqNb3uqTm9kyWiXJnYxiRgdBXPVJYzHqSmuE37eZCEvj3t7MYEbGCX6PWCq",
  "key28": "2k4vtbPsCCiKEcXG7kE8WqDydbG669mZT5Km2Qkb6zL38qKvo8xeHGh4qV81bWk6J6gzoAwWfjAZ8furVzu88jKX",
  "key29": "2CFvFKSHgncNaxyAeuM23GCUFHnfNhhd9w3LvEF3tpCsekqbnqRatXWEgNWQxHVjkWU5ZCRm4oKvWMvEJ3oWRx7S",
  "key30": "218GTuSashiJLCnef6D4oaSqpiiYuBNxF8aPRfqwHiAWtYVkKCUjNazA1pQN8PdweB36vyjmqZvxYyhZKesocj11",
  "key31": "3tzySr8rVWWdt25CdW1tpTfDfqHrUuTqbscRehdBudgmJ6gML1jHQyibezszra3rsLEfZJzQ3p28dZmxP8xy7dfy",
  "key32": "5ENEdCMGEpVdx3hFTGQ4GU4H5cLP88fGdVkfRww9XZXXAYRU7jb7EGqqUBoBxZuknSBmy2ZcNk9TKpZP1ppA6ztj",
  "key33": "5yMwiYSwKh712fbvWXNXpNpUPRVqXhQ6FLzQ12xEueixEwAs82J7rXxCtDF5TD9V5uwyLVgQ8J2d8RaW9JTJboK7",
  "key34": "25NEv8VPvar3cq8KxmyrvYM1Dwi7oj19T6LKeuV3L7vrdub6Y4JMdJPn6otDRQVrHnPsjs4SCJv6EfHsik4GTpb1",
  "key35": "4SsoGc7nFQqWzPkEz9CGuVrGbfvfNHpj9bwaSBMBJKqHYphDbMhLvQGhteVvXaBkMejKyBoZPLhqQzC2J56fLVw3",
  "key36": "4rM2k74oM9MTGpSQYP6xN4qzwPuPJDiAbLZTCRd4fyLzJCFvGPiRbjbMt5a31vEAZ4JYpqfLv6PHGTYjWqM4nRkx"
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
