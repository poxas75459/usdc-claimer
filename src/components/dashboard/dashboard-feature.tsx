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
    "4pT6icHouwwT8UThMRNKADFEz86zG86UC9P2dViChRLuj1EWys2Rz7kk9tncAq6UE3Nupp76TrRzjaRYKTGwjtdk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xfEur9tu2ViH2fwmwgmb5McHfm3xtMu3VLJEDxUX1uBsm1yMK23bZ4AAz2ccTCYCPBAirnB9cHAhihCnRxDjMbQ",
  "key1": "mjDnNgjN3WHs7yauFSF4xfmmMWLq3Je3wKiVLHgfg6ULaJfS5m5S8gznBkWPPSMstn39TuzLVsfqmZrGJJzPoAY",
  "key2": "2C6VEWBwhPbHNspVD6VqaqyqzMGenH8XuL58B2Z8QbyPSrs3Vzmtiihu7QTrAzneWxKy7PzVCS2wSEBesAEXCcUe",
  "key3": "5dEfLnWmwFz7FvRubWjkuKMHm1QvsGxM49pYaDJbU4WrsYNWRSKmRVYK64EBZUJxg9DF3e9jNjBfy7bXLS1951CA",
  "key4": "2fpx6R9kH5xCx4X6rMs4fooF2W9xnvVQPQpNnnyhW95hZ58MwxHreHV2UDZKUmHJMmEF1kiy456fubZAuqQ2YRqm",
  "key5": "3H1NnvdXDX3t7VBBJRYmqWTJdDfh5nHpe8MknbwozKnwXn1CrjuEjFmFBRC8dvAwZRQ1LzwR6hUPRvjb2q5V9c3e",
  "key6": "38uhKrmXcoQNLLJE598FmdcoFtkba18zwwsP8wWWUrUnX6b8K8dZHw2vE9pAvsxjm5PUjVHCqHrqE63XPKWPfEK2",
  "key7": "2zf5eRp3hU3oGernrSpFZPMrVdDUY3U3sMeymMEKxcnsEnNaSdmy3MnzFUHdH1cYUuzwFsPxhiLyNSDU9KKGnSVx",
  "key8": "3WR4fsgNqM1h1SnmAPz9dfBDGcJYthqtQUH6RXSkPtYpGyM1uEYaBr5SSS4x67kBPpPdEcjB8k4mJ9YGcYkq5r2J",
  "key9": "1cptP1Rh3dk12Mv5vkptoX8DKaNW5dgZNPcaPp1RG36SsA9Ew9wHrmJMsenTteEsSpwQVgshiiRVyQQKpbnPtEX",
  "key10": "2nK6VLoR4dxfEL1xL91VXfGs4wfMEfShJCVF6r8UK383LjixWNfguN8tM1qaQbHW3wXfJbmtiwXrKw7ARzbyDx5j",
  "key11": "21mGR5EuSvhVJSrcYHVn3FJcJGd6fWzakug5VENhpe3Q32jkA2fp3tix8YRE8MHykbZWZsvW9eFJ22iPceSHmoqw",
  "key12": "2MFQ19r6qn8QQnBKnfT4uPyZvNYRVTKcfdzoqfgvHYBgU8dXXY8WNRQ3hhG7m7F1eVKAyLfwZJBTuC8BV7x3cVTU",
  "key13": "4eRCZnVGdUW4FZ2fYNRHvdKPgaSq7QDaWVJfzHhY8sjLf1DrqbVFcymo3vxMC1K64WFK3K2Aveu9nz7XuskfE1ZQ",
  "key14": "2e9Q3HW9tAGtyGCZtahiQniPMnY1mgH9MrTHxsEwDu2BwSHApktH5jGyeNfUP5WKFjqgpUTywChnW3DJkp81ckPB",
  "key15": "2AEphVPP5uSGYVzZbLec431y3UUdtKuWvY1oZLLbXjDQjsuZ17wLwKEGeFz2eb1V5Pq3hPmvdsnuYyMQh1pjPMiK",
  "key16": "61oC3JJdEZYLS1Me6doU7GoRR3kMPYbNKSbvtnYfyz5PCETKCpWDfWWrnCusfuJgcVnShM7Vsc9QabABm8hAMFJs",
  "key17": "3kA2CejWtpsfg6L42xThswzQKSQKocHcwRFQi9ct77bGPUNqjW4KbN6EYiB3W8np71TJWpLC3coTGudCYoKEif8",
  "key18": "3gvFWt1782Pkja7KkPb3a8jQHQvuxJTFQ27keHTHbURnVg599edWw1V7fF7nqreKh6tGXYW1t983gGb7SNJ6HdxD",
  "key19": "PTXKFic1Gmpn7NTxCquGWeBwduyMKKFTSy7y5mhpdMR8QQkYxfrFk8cJvpHAJK3peEcD6U84A98JLng4scPsRx2",
  "key20": "4dU86iuJS1SDkoYBxNnxKnjG1XwvAejy75EEJjmGfm82srfXoFiJ9XpwHTftxQQtXgzJRby7kqq6cR1KUz9DvbJ8",
  "key21": "5UtvpgDfKx79T9GZiGkrnxwC4Xp7doFcBp6enmCADGMCKmBHoiqXfLNPhQuMSrxQsZhjVnh1zx5E5eK3tGANfzxn",
  "key22": "3zzRqDaB1SfNJMd7sLMgGo3qaVudDRmdxGstZWzD4p136CysrxugaQVyphhThEbJuCo4kbEnyYj5N1Tps8pUpjh5",
  "key23": "2mWh5TDuuT5pXxfmRFiYfjKptdnoacDnsFuMEsFqMcmstBTFYUN8AbCkS9WxW2M1pxfechg3prEvW6rcjuajMiXS",
  "key24": "4aYZJkJBPSKLNr1CU2PRw6CcGcfmnnGchwrWhqcKud9UWFwQYYNNRmAsQiWHfzfjwzCPKhGaTyeDpbrBoh5J51tz",
  "key25": "3oMQJe2kt8n47sGS8peobarGSeJ4vDPG1qzUzjzJiRdYT1V5hhXQ7qakKbPgbUx2G521TzDepBwaZzu4bQuNHkmG",
  "key26": "5NB2bJMkswRSLhHz5s1mJfHjX6vXTAhQV5u6jLGWtBWfjttT1s4mgeiiPsN6L6vWeEBoLtqtu1NtJCBuWiRW6ESW",
  "key27": "5pTrAzSSM1kn6bPiX42V6UCS66T6Z6b6iMssF1VdLLzjj9wXVrw83BNoE8mkwVuet7BPbexVniePv5YinyNxEfrG",
  "key28": "5svyZgA1GzRr4tdnVcGWzsVLXhm94ttPXhXBzMiHE1StpA8tR3FRKAEWLmWZZn7vL3owDMCgV3Y3EcC8ZHUW2pwd",
  "key29": "5NGkaiayWSC9BHyWXWfToXTJBv2i7hSM5WCG966x9KtpPzjRQgU6NUB8QRMfouYm995r8NPKui1hSJ7fsNW94PkC",
  "key30": "2hQzDE3RX2GnR3KK1PMzxBwzCzuRdQBBAZnKeg9hgJZkEAN3hek6uwNJHwA8GA4iDCWg56nDBAuySQaRV9MKe22a",
  "key31": "4fpnT3x1EmdtHRL7jddeSXFZ8EEMkXoGk6HeywcA5yZY7bxiXxSXuxpaJT4JN2bK4qLpnapmzWK9jheizBdozx9T",
  "key32": "2xBTRRtgL3KD8a41QeehE4c5vG8tMQeBjyN8WiR68Lj4edV55BMP3B1qbJz1AmeHSSy3pEiZ114BHxYz6u5tpPWR",
  "key33": "3mQbxS9Hw4nfSdNxpPFSK5V34qqD4GkNMR3bbXNHqQcVExfbxXB4JdeJ9VYVJFPj1pNw1qYeFGiVMEW7wAe7aZ5K",
  "key34": "4BTTagaczsaxbs13f7epussQVkFJaRtec3dXh8zEo3qq8Xzh26PDQAfHJ3if8JZQ9yPAfLKw3h3UwxS3QTUWth7D",
  "key35": "KAxDwQtmtwGcyBGwAZnUBN6WLg6DVgMSyKcik2SHC6nq2SkZTN9aYroxmBVPGzEpHz4oRabSqERKVG7MixWnK7x",
  "key36": "5Qc4n7RyxYt4b6UMakGs3XxXb3DWqTrzatHhf9VkS4otgfd9XN2zkXrQ3EXJWdjrQHghdU5QKiLBZtDXQ784BLA7",
  "key37": "2B3SNqes6ew5XQSZwu6CJbZksX4sfApXeBtkZ611ECC232B8xNwqi5cQ3D6ZXh1ofmiYG6Yz761CJy5X1rDdQ6UQ",
  "key38": "31t7ddPHbFZF9RKoM75qm69xBEdidMQrVnBACktJ1bjGvgQL1rTLPkMGWLcGDWsr6JSdHEMjJXDx7Rk9VTSgnA7H",
  "key39": "3nVu5DeQu8hgBo1sUmg4YP1aMyrCD795uVGYpf54dMYxf1zW1f5qQGGs9LErGWpyS2f9W4R26MZdWSqYye3B85nG",
  "key40": "2PjCFws5KF51xVP7iA5qx7F8TjzUSTggmspLT9JXFwK5YeET6ugY5AttciGrsjRm32KS61SbBgS8PXzphS1Q2xyv",
  "key41": "4tgFWMHBoneLHkPiXgnGjh2XxEcGVna4FRvCQTiKrbAYikJcyxC2UrTGSroTCeKWPioUJR6N3qEhsshsNVWmPK7s",
  "key42": "5sjmoa2A5eZTneRYq2tsb3oieG8giU3utjVXpJCSiGtdFiysNRXdbrmLt2iygxXNg3PMYESh6v1XNfpDvRD5QKhe",
  "key43": "3Me5Q5SeS6jLfFdTV9S1miXQr3bcV9hKQ6PMbtWZU1qWcJEyWqkR1YTyrgfWDTTGHkYPZtnUBLoJ6K61pUEDhkzm",
  "key44": "Cqytc1xrLV2Ku7YyHdCHNvJPAtLakusTKjzGRPppqKziVQXQGbWD2wHYBFu9FoYK9C4qz75KESP1EJhykkPM6p5",
  "key45": "3N7TkrRMQnyhsZqNDQpPwhaAdrFnGYU3ffmycAPX4pfPN9wQ2Sb2E5E7s5BEi1GqwkaVTnrheePjpjVxMnUcg1MV",
  "key46": "3v8Li858aLes4ajG7AK4f2koujSy7xrfj6WvGQwHdsN4pRzB1iaqFjtqhL6HVN1WT691SMoX5wQLr416AzXWvt4A",
  "key47": "328xCFoGzkmmwiFyvguMrztaZTs1NswTWgnacdE4zT24ekMqSJF35mjZNDpsypp2guD5PgMY3FyUopAfopsCBe8e",
  "key48": "2myZhfqfpRfZLb3pQBKj1LzjYPBBjx5M56pqpBhf4DNko1dM9M1MFnpECq2jyRT8rAb2LC1FQ5LwwGou3dR7WAVk"
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
