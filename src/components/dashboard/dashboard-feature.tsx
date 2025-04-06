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
    "31aYLiRh8y4tq7kJuERw1VTWJUaehJ86qgrthxoDdyRH5UnPmBXSDyHqsmrxh3FiD1L65KkeRcxKU6EVhLXbA9eJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4J24mZjtkFG95JLytoaJLkwVP3snUoYpc1VMgkbh8gGkmiF1pDTXziHTNCGEe2L5WNH6pmnbTfcecpMipw7RGaBa",
  "key1": "3FUnyy4ZJcnJ2rktzJqV5SeuaCeuNeTFNUefiKDWEza4xcE8fxGvj2Fu1RXY2UMF3eiZuAjkzidtJG2Da4oRiz7a",
  "key2": "4wqXSDMgP29UjprG4ENmVYos9xLEHFU3xXmr12i7M8V985qSiwT2zYumiNfCzMqJ1bgcSZwCjjhhodUsospnXrb9",
  "key3": "2vAjaMRoi7gyZRqqYiNCvUndQmC7z4vskhvwpyPhBF9HjekadExiqnGoqbEekC4VLKm69c8DzcLXYU73QcztFEob",
  "key4": "2PP57aksfDZoq3rD2zGHCiQ6xypVKhp7xxYzpzL6v6g77o8VeuD857QEqVL2iLsuiURegzDJurm4Yo8jQHri5u8Z",
  "key5": "4TXqYPe2ZxYY9Bn8XtngBCcVubFHEuNLhTK8TbbxzTchbnDDTbsUQS1GbRaerzVt92S5LqE5mZYGTjxghepsy53o",
  "key6": "57CZ8xvZZ9cYPhJyhHzkwKNxMBPyaM2ou71Kfx2gonhZLHehXcJmUKxtoRN59vVgVhVVAC96Jrop3GgLYsmJpqA2",
  "key7": "4UCbLP6pDz6x3AtENbhWqcoQA5JeUgpasVYnRLcmGgHsmhPUzxXVk6Vvb7X33NBga2NNXEB4jkqwLQ6qvAm3i57L",
  "key8": "5j3jnj9G5cXpgwtpoxSgK8peRSBw64wS83MAexLVAT1mGp3Zc4PXUrcNGb6cGxcDGQVGAtjjB7Y5yZpX2rb9Dn1k",
  "key9": "2XzaPQ33AiG9rhe1ABkyAkq9LnRb7iSaWDsKc417YCfFqq5nh7r8a597B1w1dz4WUNSCQaaohmK26pBQNVc79zSK",
  "key10": "4vhKrTg8czu9msXqMeBXM8mpYtmepyq9SgZZ332uVbAPzkMVHmdQShp7mPzs8QtYX7cgSSkuY1ajWjkwQc3ZZ7HV",
  "key11": "3u21ZH1S3CzzTgULSDFLWVekXUNT6rKhezrYUJ7CGNT6wER3uKB6VwKK9Zhr5p5NWfgb9koj12tcn3FGHDv4Ca8o",
  "key12": "njwbqMQLVUUr88FjGFehwRSAQetiUKVmLfEb8BWxcC2PFu4zYL8QJ2iGYJvdMXVVy65nxpZPaevuH76jujHiPew",
  "key13": "66p2h8hv4pv8Cy9oateYQ3axhoVAUWNbSLLG2Th2FYM9bptshC1BrNuoSbw2KeERQHdVDHQSdYX4cknYnLDM78N2",
  "key14": "3dGwcB7YVxA55Vur7wvatCMuzaFwCvmQ9M12MoCuT2o5VyUEfZ9qHdf5Uy4PZwKU8Nd7j3EAAcbzgDbt9iWHDBRn",
  "key15": "65PMjEjxfzShEJVpWyTTZExeby4YpcVmrFePd6C2ksJ5xtAzK4uW1HfiicxkXLt1YUUEk7S6NEBuK3nLDYx8ef4C",
  "key16": "2K94yFNYwMd1jMjdZWSGdtGKRu9N557U8JAXtVJMHcohfXZ5k6sqL2UHxyceVn5fPtzFickz4UknYKtUpt3od4ss",
  "key17": "5iaohURy4CLi1wn7G7yGCUEVdHpP1xebobjcwD4ezuEvUYnkkipp38dsirZ2hV3kWAXMVoJsi6F8QJeySJej1YTs",
  "key18": "24Gz7qAS1y9YXWWJHrCuxj6rWY9wLwLBCMq5q8cJsEewqrPN9aaE4jcy5Y53poMA4N87SHXdbBk8tyYSXyT2ghPr",
  "key19": "4WzTpLySFMLw8zVhwxYZm8qvchXhTVjGfTukJu3kkBXrhdMbo1qHEbjXq4ZGT9QyaxooG6eNh6McG39CKcDwKAUm",
  "key20": "53vErufmnminy7JfmeeQR7MSUUxJQkQ9fiPz8Bu88c7Pso8FWxJ5PkHzYtuLdVkyuB2dKgQwg53ZuvtfuA5tdaNi",
  "key21": "5oVEjiF6SAEGWdnTDB3ebVSXRodiYiKaUrArvxBs1oHzJsWJmUKxi5cbj3sqWJYhZHfW48Mt6ZsYkv9tAa6vmWbs",
  "key22": "4coMVHYNHRyQspbjitEiGRK5EXWUjyWJ1Lkn1Xm7hUd6i1n5APW6VeYhK2xP3EVqQgDNMPDTV9gNL7J6RtQTTRbq",
  "key23": "382E29v2cKHJPDJSH8SXtYhyLGbyEkCnvRjtuPo3TmtfVQmsmyHYhrT8rDGJG8WDinq9GyeCKG3rb15ZTekGEa8F",
  "key24": "ZdGuj2a1PU5cENn2CoZzQEPiR1bkkuYDgpZfTCfzfnhUFJrH94rbRrTMKqYWt2ERZ4zCzLDv82r2o3ttz4mkW44",
  "key25": "2zbXsMdj3NeV3FYP4zBhAC1WLnwMKwUeKJ1SgggRLGNyLxUQ1JMW4rSyBMbafSQ1YSHz92rJPyx9zW2iKXVfjGdn",
  "key26": "2s8rExX4fopbjbWXsqL1Js5N2jUmX5ii6q9hu97FtK3rENC3yZ92ZpZsZ6YwaeeYKjnQu1amtNh2qHqb7zpAz3Vh",
  "key27": "2Hz9uZhHGtDRsnMcjUdHzqLA3zhcRLiENR7cRP74D7EkohEzN1CkoM7Pu8UkkqjM631fz4jgEnpoVpZL1rzBPBYA",
  "key28": "4aMxPFbsLYp3RPpCCe8o94zcN5zGwBiXehFDmv4WS8Jjr9GPmjAP4wW5Jf7stu3XzGri4kVafC16wEe39QbVumnK",
  "key29": "4aMkc3BcmAev3DJrbspDPvLTbx4TH6aaAy2h9ZBscD8fEq1UaVf4j97VNBrrFaGQ3KyrRTJf7hSs1T1JS3FkSnNj",
  "key30": "5EKJxzV4VUmuptmH1zvffDbgRBrHFfkreH7xVM5oKkTtiZhtjiVbHnohbUD8qcTrjpccjb3UeLuN4jYx1i8nnfZF",
  "key31": "2ruFMq2LP7hH2jagsRUXTXFDQMsurJkpFWT4khSQSkXYex3WopcnbEToDv3y2k8K2uWso5q3CJhBy8q4gScaNUmV",
  "key32": "2E4XQcsbp6uh4oFXgTwMpX7mWFhnDsvmHpBypLsqFCxi7v71UWrnFSoNtKQtvx2G4Gb9bLXKCZXSEGANvnKJGW3v",
  "key33": "gTH7EsuGGqyt7VbmXuhG4ghJ3pxFVEwaZeWPSDNy11tEt58HXgLrtP56SbsEd21SrGQiCFozK2rc4gZDug5rVNy",
  "key34": "53AgqrnjR9GechYVRsJ1wkmefKuF5TUYjQJx3YPHfxTZCdE4cn17AQndfrYVdmZX9pSxabGE8nNeKk75iA2uGyUj",
  "key35": "Ekm3y42kGfei1RhQrzLbFrerSKa8BsnqNiaFLwVcQiyxtGQR2cA9iLhzXEpHgvkvAriDdgBWLEcB9R5sGrEXGxQ",
  "key36": "3DrD7xTPAefHYrp2ss1cqGNhzXtm3gdkQZmBG4UsXktbcScuH7z1s57WJdBsWJkiwtVXZZB7Sb4qgyz7ev78u2BU",
  "key37": "4RMCqwBEcLAngR4X14cBfbJNavzdjxzitqcRFkat2jPAdwzcqu9AvXayCLQ7cd7wZ3a4KAnAheFK8ULbuEoRJ7dE",
  "key38": "4PTJpwJ4ooA8xdToC8r3d8vWuWqMHi92AyH6nFUKn8Z9xppea6eUnYLvYgfVCi498mdqgC1miZZ9aT4TV3yaZjFs",
  "key39": "62s9yqrjpB3vD5TkSLiSC5DyWA6gbmouLs5zZcuh14iJwAFntCdVCuD5LyqAzGhSrzTHDzYHss6R2gm1v268VRQz",
  "key40": "2Vys7KUyVxX6SFdXWrYe2LyWqi36bbDk9RXx3RuEYnBsW2VHL5LtupxzuBPM1kVh632iPK43197DiTZCPbnrYU8h"
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
