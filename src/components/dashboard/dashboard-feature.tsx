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
    "5WmBg6pEivrqc8hZbadGLj33UpFPvkYQSfPgohxARvvxSEY868gPEj1Cvt7Vj8TBey1PFa85t8Dgc2t2DXbqyKa7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tUUKbqE1DycHSTvqYZSHWE6DN6Hs7MJnoX9zyRoqRp85TdgR7EuAsPmN2Zr8J1fCeFmT4og36665UDjDU6jWWav",
  "key1": "2D8uvznkUjGncV3XF3XwXn3VpuGKW2NbD3JRc3NPkZfWjLQpWd87jB16SaRt1FCVKbx64eLB8fdxUtRt86aPDV7Q",
  "key2": "4rAVn9i9z1RzvFVd2cppJQLPpfdH9FPUAZ8n48MdUNDqyj2qvwuhtXEzZzqnxCWiqpdJVdV2U1Lf5LtwnQYoYbBD",
  "key3": "3Bu62xPqted3e7QAFbwCZHAezEg8UuAsY3qAF8V3MvE9QgTDa4obSJChpe9NXtFMaVTYGmUs1jxgw5auF1BA8YQC",
  "key4": "99r2iGojUsMjR2pBaP6qiGXVjncwU1MssFzq4eg3Q6gGyHMmnDiqN3ELoRL5M2qi4MYzjQTNpYkN8KVbqSJ1xUm",
  "key5": "5pqaFcJYH9X9YgHyjFQPmkcHqKwaf25ThBTBWWHq6jzKYmRxpCjv5APW3ntQyCxrMXDTvM5eNwJpenbAq5RfXFr2",
  "key6": "3KRCPtRCLHisrrTmYrSq8bmwYrjPyVW5VyoEwxNACdTQVQGgdxJSNGGNKaPBLTmn8FaCF8np6z8KYmuQF9QxJSQU",
  "key7": "2pw3zZJiPxcCWzfqoawZjrFUiheAAswxVpNueceMYQyrRBbffXyLE9sgpvJxZhqrjd31PG9Sp4Kb2yGDRSXBpGQi",
  "key8": "WXZgsrEFfzYb8jefhZT2xCke9q2MYQueXXKWXwhJjvAzeWVAJVWqzBazvsjJnnmNWYy25aWqmrPL9VKiDeJ1w6P",
  "key9": "5T3Rc4uhWGeAPD82djjcEeMkZLtLtgDmFrVHrR1uLGmHkHvTEqhiC2T1anWV1F3hVcFXqBYi5daiy9HoeNm5ddFW",
  "key10": "5EtGzB2XRaSKZw93R783PqjKNwvnEXZMbpQpxxdctbYZgsfo3YJYGtKvHcP5fSmjwGS1cPsXVCHJRX3AufWzcZWG",
  "key11": "3wKG1CPbBs3ESpdWKCMxbNZ3qe3qyFiXTg2d6V3mNw9urxCuw1FoCY8bNudojtSyMR2dAxZvF39x7VhWEFNnAr6T",
  "key12": "h4jpTyUexWEz6NviUZQoc7hvDP5XX5rxoPJT3amErNXuqkmRFvQBi2cwR8yVib2jKteUYk4JEGFLNC8D1CaZwLz",
  "key13": "2oQLz9BN11YPENeghCicdhz6zC6k6VcSq5MmxbkCaxg9aicSQiCRrudE9xsm4zBJWGcok9nPxrNGMv31oadcdzRi",
  "key14": "2H6NyBktU5m51vssxKaKBDg2RMpzZpe3VgUbapPuo3YECL1XMr8asbhrzMYxu36iknMCT37WR5SExfSRYxWwuhwq",
  "key15": "bDQ8jaBeUS1NJPxWPbmAPgRWfFtdBeJZPwcQ1eKMh4gs9vkJEzE3DDAmZbv9g3TUXhEPrpRjgzWeq9Wccq89K8M",
  "key16": "2n2JZqPtKBS5FU74LmkoVRdC3PHnVwu8ogg1uW6N3fobdhWNnTPtXJttKo7tygj7eTED1625yjRmHz2d43V9MVwa",
  "key17": "4dYzkrNvVfGjCNGDP5n14pY3cksycFxNnFPLqooFJgsKfppmUMGP1viALg4HmF2erk4zq3Vn6kNCUBZHYvvzjxEX",
  "key18": "2C3eq2BXmvUjk65MmpcwkfAwCNmZgBnsotsnBhTvDCrz56evYNxqqU3K6cNqZYKYP5fvMVbBqJBaqpHKVfSCmkAh",
  "key19": "3AESjczc8dwHP4katDCWrT2fNhchsNehzFSHbME56jDyH3XS3hHxak1hadEQGvVvEzzHyZLzXwLbmUUk5SVXuXP5",
  "key20": "46LWhqGhDFfvFiqP4WyZMGNkWNBPGtQ9KXUdhxbeiSv8HNo9s774ouFUrr7soZb7mjytM86B95Aa5YbFVgkZTu2V",
  "key21": "66at9sCPhBr5LnCCgPK6WWQL7mjKg4vWLaCJVcZTd3Yq4z5Mj95ukr2W6iiGEuiTfsLhNJBhp8ebWyEB8rBWSz6N",
  "key22": "4YU6z2Gvb24Q7TEwxQduy3JHY8zS1qxU3DayPYsFh6sphFPicwPg7pR6dar8NMfMKdFzKShZz1zwrUnBafFTswEX",
  "key23": "2owLK9Vu5EfthqEdpcqCi4JDgd8wVjMvRUJhYo9GuEzWgpdVeN4sdpAzu7wdnzGTkPKu3N2zMuNq3uECQsrx929i",
  "key24": "497499DWGKgm4pBLfo5DJF8rxjJm7aLG6THuTGq1nfw8yTbQdgLvsxmenZEWw3gxrBSi5nmuZ3FPHh4rFZLZSbaH",
  "key25": "3z32xJPmk4GrXWTNRbHWnDtqq8CTkRwjYzBMtoPpWk5Gf2GF86axM7k2hBwNZ9yqtdYwAcyX8jUSJHoGmqGAXtVY",
  "key26": "5BdTLDoV8Ab7wsBZa2fkkDVkTQDx4pQ7cLuAGvj3CYMyhMA63h5dcPxTZAosD8EeFdZ4n3jzNwC49E4NfNKVMUtm",
  "key27": "5oHsRC7PUBEekSSQWAMhyd1f11TcVczVrkSes7XZNVNUNrGoxSdjmzLkrNZqr9x6saV95VirZrK18ciUiuB4w7je",
  "key28": "63hbu4h3q7vyu8BaRknKVas6omuP7qJnyCi5SoTaDfcXEVx27qNRh4H1yC5Zd7e5fqrYAyZQVJteEs61k6DoNfcp",
  "key29": "3EEh2YxDiMd3fujyDYX6j882fEuf5wusi8jGYgwr2PGrrmD3e5pRZon7eW831MSMF2rYRqKdBtxBDr97aro5VkD1",
  "key30": "5G61ocptDoipKCN7jx62SqZXgCNYAHWkaDNFXFHV2RfQmrTn718FMGvJmzuiNijY8skAwthduQsa4h7kEGVNZyAU",
  "key31": "TBuzLYH3Cuafu6dm7Z9ezNr84A9baZE5v3a1jDDphXGASLDgUFnDYxG7FZLgaRBAc8Xb94TmDZkuuC4ovM96Pf9",
  "key32": "cM9gj3SmNneQKnrxSC1t2B4nRGA18XMKTm84drbq5pcR7KeAd4HVoo1bETDN5sKxkm7ZJmnw6vrvLKbBrUK2Qnz",
  "key33": "5L46jRNkuTH1Sz1DDRneGSJTxWchq9ChRLbDnh4YjhqYYQrYJuR7mYFKtGHrTdJKm5vsfpzpJ9XATWBYa67L4ScZ",
  "key34": "kWbCV76yLtyj2KUkGwchgvr5vn3mYaDAtG1b6Vq8JYX39vZrTLV7tnGx86TLQPZrM54KfsHrmL7jqu53eSLUaVW",
  "key35": "rh5mNySMuRFSthXPSGsyudkpgocMrBwXNmhH4xssw1ahDHkaVxt4rY9eHay1g4L6Hfk3jkzPnpfn2w3onhPXVQV",
  "key36": "55BDGMuxC62mRrhD3JuusiyJYUdBvDhbG9jUXqhLviTDjVLFL2j6Khmk7LNjXZL8JAgU81BtQ3WuKJZiLJCqY61b",
  "key37": "2xHdrV4cne9DGoNq3UiZzfvWkR1zDoZg3PAVXjQJU43X9m4HHHMT4rimcgtu9pzqKN5CK4fvr7dGTSrDx7XqELhA",
  "key38": "useLzsJBvsZQ2XQrqTWx8Q8nianKLPYAmVpyKYt67c5LSaxXyahULmn7AspZZfnHZK72c3xkv4d5cEhpt6SF8RZ",
  "key39": "5hfehjpkbPCsBWQ9MwmDFVeXGawQmt6WQFASzuicrkACTTTQ81SBh1pWJrSjPt8XB3v2vTDapxPhYfuqqTySJtUj",
  "key40": "4jPWPEzGhMmHYYbCJ4YmNBzHVQHkeoEcVv3JVCq87aXeq3YzbD1zv87J6MkSbesfbCg4zcigfXpnDjeU7n84P6Uk",
  "key41": "5qq4uBSUTNooaYWWbxdEfD2UfD7BHFJAZfobWUgX6bLC9pC7EW5JD3U3dvKqWMPzL9jMhEhL4FnP6ed8NBjMfr8d",
  "key42": "43Cmo2qVda6aaC7iUJ8ZEX4QNp848douwVPH6RQFQW7495mhoUFf8eN9UgRxiyHd2EdwP2L6s3HmmpzpLEKDBunD",
  "key43": "QbH3CJdP5FFunfhK9nTLQ1GU3DeFm9uiLXbh4W7ofTAhjEZgHkMDtcEVDHTWuPiBSXmKASohTdkrspzsu4WRtRB",
  "key44": "hH23pyVBdMJB9HBzS8CeFHjWgEShXwozob58RJ7gfSV9haenugftr8vXXVGeMygAzdABhbZNJrB384pak2LaR7U",
  "key45": "2JV5NkzW9176Sb7i8qQ3nz1H3Qfw6wsL32Zq9AZXaVFNcoJCz4q6JTaadLZQqDt3KFCeZ2qLx23u48BUDC33WGFA",
  "key46": "4u1KpA5r4hqohGK2o9DQNFxGgwLt2MSuJtBpAa2sZhFLdordA8KSchEzPii22ifTJTUaaGwpHzqPJkn9aEUdoqWW",
  "key47": "27xkfpmEYh4BYfvXwqi6ME4KggpyJmibtbWm8pWTjXdGPGnDZb8cetPYsyLPbLf19iqESoznAcnt43a6zzvhVXdT",
  "key48": "jigBN3hcHC3kEotwNUr7BjqYPNukgER7tGptYg3Hr1QCzus5xuiubfB3yi3Fr83YkFa8hYELz141xroX8ouvLCa",
  "key49": "5snTApoSeQhZ7R8bGSC7ULK4sU9ni7sqq6TgX46Zms9KYHyG6P1YXbypC6czdi8mBMi3dpo2PgXA52dUwdmeZHZV"
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
