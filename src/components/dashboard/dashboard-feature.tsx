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
    "29rWbWQZdBuHkSuZJWDBfEgkBHJh5sbQH3fX6AeZWGL3h8xPaZMHJmMjJRvFprd53enA8XVaFqHtweHcqz5LvgDZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3N772qpcTG1ay3ftWumaKg6HU3x4DKfvdsjPK4Nm6i6ibzoV979U4jkzSCo39e4jLCUWq3SLaKAiqpoTcZBe59X9",
  "key1": "2yJTiAzG3ydjMBXygBudAmS35PaVceEpSgaeBrmqp1VdHDT3UYDM86ZjySBLraKuk4bcsd4W1jfqAnZQp8yXNw2V",
  "key2": "4XUs6EBh9a2YdCiMKndewDiw7r4RYWxtn2Ed2KHiTrbS7rPdjkoZSnLjEPu6JUDu6Bhi7R5mcWM7ifKirqFrEGEc",
  "key3": "2xCSqXF6eXS5np73YfWuyVqkimPyUtGPP5oSwV5zwZQhsXYXFtwBeYt86Ei2JVtTyRWR3JMZevZSakMdQab2mPGt",
  "key4": "3qwtrx2nhj8MY8gokB8PeWTJMHt2gr5QisMEYCT3gX5epA5X4JWH371A8TnszRaCdz16i7qv1hYVF8WbY4pXZaMk",
  "key5": "3hNTmF2acQkXdhSHLAyzzsb2T3FrMMnUAVZkzcvJF6chHzCSLwHn5PGBwUwkP63ER3nHFhNJutkemMS8mGMMLr2Y",
  "key6": "37KmXAkofwHEhdTBiZpYWEtZ4zXrfXvroFF1CP4zqWj1hSFotgKbHXsKpMteuoCtUqfPcCki23ieauMggpigqVtu",
  "key7": "4EAKSwobCfjc6voh3eRdVSzDXDNyX1nrbgyzrmq3bodNYnFcrebKto5Z5KZcTJUuGBZQezcPaxUu4jeGQVUGFb8b",
  "key8": "5nhNqZ69VawKBWQY7JrPizVCrU69hNfPo7oYrCfBuAJvCDVVpd9TBzv99Juw5egVLWDHiPD2epXTa1xggSorDhFR",
  "key9": "3EKVTTpViAmrFY99TJkiv1JGKcg8MBeFnwzNPtFWGEJn5c43KRjk7VRMwCfDuiepjUcm7auydHm8rp5AtyaiDdFU",
  "key10": "5JkBqrF6k1TL8JWot1cK5vjDGX1M4b5FJ2VpqUJESNgzdabq3BKZK4YbbU4j4rm3G9t7iiDV15RJYJwZFET4hDPq",
  "key11": "5hUNyopTi4WPA7nodbeko8zxKJY9ot6YT3CVDBNgQuFLU1hZaZgmftKib63Ndcig4BADVhZcQcAwn1CQTEsHkmV7",
  "key12": "22pYEjCWvzcZ7gQ59GrDzXXwb1da3Ue87K6rAmoU4QRg1VBndCM8UetUDQhX2rGBWDNTAxYtjKEPdySJoPLT9dqA",
  "key13": "29nVQAQA4gkkz2ZcAGzcZ6rsmPuq5QyEg9Bv4kXYyCx97y4aeFWK8FyFpXh7mPGNY5cQJQ14v5Mm6sEMoBuAFx71",
  "key14": "2BkNM84ya5vJWHukuwawPTeeKHoD1NugfqH1AdDe3ZRoak8R5PApai9sCLifwrkvBUqVgL2bNYeh5UTVLwJD3iw9",
  "key15": "RYaHkcdqUpb3e8tLDvhmarskFFoFXf7G4woe2AJeCJVUoP42cm7NzFRBjBRNx1yGkafwf2P3napMokqphK7rhM5",
  "key16": "3BVAeMoByvJXdEf4nvafi3HU3eThpiDMc9sD3cGnzbxrkXjLj8k16z6exokSBcKjLNGhJ4bhwX7swARnS3RpHDBP",
  "key17": "4gAXY4YZwKxjy4mJcfAnfhW8xsdTozQZyZTVMQy663ZXHjZ5R9Sr9uFUo6JwYwpfqJYuu1u4TdFYmdmU2kfPWSEL",
  "key18": "34TzTVJHkWLKBRxzrgAnyim59cruoYdxNMPYiEaV8suphoWyC3hdaWJH4Usga6quUBke6BdXsmcUkT21Pyk132tJ",
  "key19": "3ekqixHhV1mhGMdHX7njhYwMViDy6vgNMnfEM4WNpNjCmYxs5nNzYksH1fwCAtnJ3YwYby6PWXjKzHLFcaWwMJqP",
  "key20": "32tuJFG9MEaqcMAYW1HanTeAHDGowoffrhYjWgz5bqqsjFb6ntM7BLkSArmF3MtUe6GvJuT3mUKcy2cNBQeA2F4j",
  "key21": "4rN562JmfXLjQhDD9etpaLX4j7n2fUcBFsRsvCzFwF5eJQCYtEVcfpDBRTy3NQGKP63pvoc7MMURLjAK6WpYwMQy",
  "key22": "4aDTacjuLBkP1eCC3h1Ztw9su3sb9BrkcS8zTeDs4Y2DwevnHXXnK4yjQ3KkVL5u3MKt6s6LNqDY5iLfTZR8nqeY",
  "key23": "436cthm8Y4t5Rv8M61CNwRec2NEcqqTLgPaUKYS1AqtjYd7i9FpkWaa6ttjvZg4k6HWpooEomraHDuZsZjuyMh5R",
  "key24": "2ULZY9Rqbo1FeBxdpqh915ypU6YKFFo2MhHJVUnZoV2N2x6At8915XnUSSF1w9hDqJ44HYttpnumMz6gdiJ6JXaA",
  "key25": "5jEfpoeExEZTRompHvZTWdWsuTgViXGntTRynA9dcQfiziSwpJ8heVYz7ne5Vvkn5roPyRkj8SZX9Es7xLuUFBj6",
  "key26": "Nir5EYJn8JeoUi4LebS6rFoNrhTr1PqYU4gqoKipJ719TSQQsa4woMEtp7wwUWj6AtPN3B9M6TbeEAWbQnoEQQu",
  "key27": "9fErupPTv1BGV6WJQaqzSTG3bG2zT6MesmTzWZi5qnzB9T9pYMxL4mhua1fcGESuotkXjftg3VCxr9K2jGtTt4D",
  "key28": "2145QF5S5PR5BAL8d8JefJRzMtcrspFFNqtsNMW22W7LDDmu8A59mWfK2GCUBZHwBV8PEKxT9K8G1dTEg9VfEEen",
  "key29": "2aiuhM9JCtWtakwUJrenY7siN9iDy3dUQ1cfSaWLyZ9PeaRRLqQUQJ7SwdYssZfUCB7L4UoUcCyKpdqgtK84Z78r",
  "key30": "4CHfUcdfGFPm8n6f5Gfkqn4TcB32QeMzKn6PsYrKYn1LDLYVjh2iHAvUASxiDuKeenRryLGDqThcpvTuRraomnez",
  "key31": "5GEJf6QVGmT4vjNs6scNn9y8QR3cfPQeXqoG8obuzbVCjPe9CNX3FBJZicaGuiYDVqyda1Dn7zoTWdsfr3cEnxg9",
  "key32": "4iGs7K4L8Jc4eiFbTC9JgcMo88kTCkcFb2PiyoDHvtBnBENs8o3aH4J7qjJPZjhiFQaHx5rSHuvq2hi3y2eR6EC9",
  "key33": "5zgAidcYq3vqsjYQntrRg8tFxr8PGMUSpvyj62yfqN791YDxKsC9jUE91Hf3DkeHahCEUdK7wahsjBwUCHQVdwB9",
  "key34": "3qUV5xrKqpRp2MfFb3Qbdms8C3k5hD8KzaKytxRAkVgQcg6U8ywwxppBfE1DMehLhQqASB1vDqekTfFJ78Z4xddd",
  "key35": "588KhRFvB24e3GmVGNcxVmDKoBcdQ8b1Tki4pNVnSZpFJY2RHyinYEgZR81Vw8ex1qzUnpYr7kDU1KFZy6K8TshX",
  "key36": "4EkqToub3iymPCHwcmKTEeBW1TYm5C6kHnnSqD47GketNd8tiy2vBF3fviyv9GML6VfC4KpM1JDCeJQxR56eh3k9",
  "key37": "4W8NZEeZ3o7Z5EsWQcUFWZPgheFGaG8FKkK8eSMYAXZAyJRYrsvaYz1Xv3CtwXmZxdrxp95ApHT6sei8xSmYzMFC",
  "key38": "5WZeNxbzSuk5LuCpogZygA2J9mXLZLhBZZC6c5pQUryKPF6H8u59tLfsAaw3mJDjLoe9U3z8prVhpycxkPhmYP9v",
  "key39": "21yHgVEDFajJdYBpqtE4qPZYBKuBMsFpXNQZFeSVCvrPWRFbW9ywwrrcNQVNcK2URRxRRVYjazYkcjWR5ostbgdv",
  "key40": "3J5ScP7KHiFVtx3MewDG8ckNLDXj8bwVPLF6umAxKkeMmUgu7hjDZi3gVKF7UZ5CowdMwCEJq8PCm92fm1UKukaK",
  "key41": "3pfPehNgL9mCATyjqpkHhnBoNyZGr4x8TYRsekDoxpZSJn1uDT1BBrLRekUAEZkwk1nybhEkxjf7T98U3NxUGmAc"
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
