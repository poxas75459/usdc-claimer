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
    "39mggkFsKB7gPCF47W2TGj4jdMJ2cfcJmGBAb3q8QWK4t5R6TV1ZUczTBscLKsfwudrQPwr9jr76P33kGqDb5fr4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5w9SDsdtLrpz8x7o4xnfCDivvfNn64txoZ8UjXnpYFh4VAoZqPCcQZ98XupGFzJJx15aXSWWr72S8YmA7LkK17mw",
  "key1": "4p3p2R3ET3YH94N9hFqxhQx1cXkq5b6tomjtWeSzmkFrR1tkCXLdznqRnxTKqqRB2gNbF1aKgETLxdppeb5QNuUC",
  "key2": "3L7wFXSntwmjMRnf9gSToewa8h5TaURruQ1czeKoLwi6ZfYDG4VRhnSdrUynwp9VwSQEgESqAetJS7nEuNWv5iE4",
  "key3": "tLXoMAoscCoDVH3vgEiTptCbavsMgYbKeBRvSEK52wNGnY1nxEec9CiNhL6rGrrTPhEX8B5t6bLEmaAx55viJZr",
  "key4": "3ewLzfcJEgyZpHZYE6zykVAV7jtudkhTNATUoxpX3vEpeCMefuy1vNQDFtLoidNMtsWPrAr2nqiJvFuw68V5DGVA",
  "key5": "4ABTX9BKFWCpqKZDkKv6W9DixyBtzbx8roDC5yQEsNs9Yh5DUwjxXgMp7NN39w6rWwX3YKux2AnctyAapTEZopq4",
  "key6": "4ueEg2FW2aQ7tDFH2vPJdMtbsKTQrcpzqQmkD4dwe7s78JWJcyV5HdKzprj1p4J99cVXmwL6NjteC4eZ9TZh7kxQ",
  "key7": "3nArz8KREVfSts7jDBFD6rg4ey7SSvYrjwg15GCPNBBz6XxL7qPgPGiPsBaQRYm67E6nrSmvqf9ZS2553N6czLEM",
  "key8": "46JDWRvjS61bKB3Jo3zScQKZwTK7p2rzdxySopw6h8gyuSbhzQT49oahxXGAhHfGtkqYaYB1fyjr58RrFfXXyBea",
  "key9": "2ojq5ZRHBjyZy4MkP9s88vHHuF1hQ37Zbvj1MaaCWcfJjhXKsCWJKvF4W7XgB6GY53cRqCAW1iX3QsuWEPD47DTv",
  "key10": "2BNBSBxGDoBFvPUem9pLtkycGEQ26MvKXAUR7iKqSPjBQqA9ZpPu9Xt3ThgSWrL1ik8tLKA87Txwkuth1J6kswxS",
  "key11": "21AadKuUvLWr1TSvbR8p57LVsnrWT2vzH8T7RbpHFMsv8Sm5hYXDwyfQP3DEaCHZegp5NRV6dmqf25vFTsic3QgE",
  "key12": "3emsxyaJuKMVbPwxAoqQWGuZYDvuRve4LMDmjxRdYrQZf7fxeS8mDgGwy5C4iYLX5jvM4JSsHRA376GnaLE4YGcA",
  "key13": "vtKf6dnELY9UgRcVZvHTisoM2Ar3fz75TNaWWBSbk9YSSejxYmZe28P5QDH6smUDmtmdtL6DbT993w2pYoSwVM5",
  "key14": "5iaYLXBiKAVH7Y41kRwRY1ghTuzYtkXxCgZeQ4A2dteDYC1cYJarZXYL53LR2DiH6BUFi3X3hQD2vWt1UKhHNK61",
  "key15": "47tvU5C3hD9ryB3oCYb1u64gybbSUf96gWPuzDuyGBAHxX77Jhi3QyZHyJbVFWUqmLvjVkDexsrDNEv6Q3zxG46R",
  "key16": "5bupE7P34jTDMv8Nhyk9SVuTZfwCxHd5DdJ7ni7ZqQhGPDNzcBry3GiNaXF4Vatb4iKF129uCZ53sn3qFjzuj3fN",
  "key17": "3vLkCbA4pGs9F7fV1A17gYqDkrZjuS7RqC5YssEYgAaZCKJjUnHNyuqwV3SYLRpSSEafrM2Pg9b7PjUrzpwncvsE",
  "key18": "3BUXg72UmvJAbmucMbnukb8VSBcLVcVW8znHCuKeUaSv4HFv9hb1Kv7gfgPA6aP1otmFRwbGfPNqmep3W5863evp",
  "key19": "44QvdFQhf4W2UUTPhSGe2ShB54fPtf4pHPPUD532iMDVNkPebWjcghiz77miYjz6rxWN2a7S11ec8GBJn28Cuz2N",
  "key20": "3vnFC1RXEzN5eL9sSB2XrWddiQNjtyg4Ff2HzgC15MJzBGZhQF6r4dugNKhGPRkW974hmysifnDLUoDSNK1fL7Q7",
  "key21": "i5TqgT9fj6r6hJwwj7JTBpXQfjuKKtDt9oSmcA2tJnR8cvRyJUV9wwnvmchmKsg6Myneuoq2GkNsv1HuzVXLJ8x",
  "key22": "5oyVK3rBLEuAcmk96VyF5pSkKx8oAp3EDcQeKpxQusfEzquHr3f2XxnzTQnvjUv2gehVGSdttwRaX1EfDoEam7Zq",
  "key23": "R6qTUdHhPHBVDNDQf4mNAR4h7Bi9uY7mFbjssM3WyZ8jH4RG27eaeGBzkJSkMzns7vVwBDefE5aWLNuNxMopCAR",
  "key24": "3YwcSjzpjcEx6mS29ta9eMJ2zMKmLhEnkAjGJTWJ3orchGL5xqP3An5LrA2jzvsdame8NW4scip2rgNVekrCUady",
  "key25": "5QY664nmNrvYV4hQ5ReijaWqx3wFepKGArvE5qorzjDEmqwAfkEv3hgsW8hJ4MmsW7meiSWbHJyVVg4pQpX3mySP",
  "key26": "4WcJCXJkiMoLzH2NtRgRvQSZdZTzymcBXArRZmYr5k5yZLkGyEthgJdbL4srEs3to9eGeFxQy6TSqG6WpGfPPbpi",
  "key27": "aXmxzsjj5doHm8r5QggmZJqboxwr8yCrdbk1fA223y43ao6iVYkEW4KNf1a43zg6ef6NqkeWak3nDX2p5kpW5Z7",
  "key28": "oQ7TP1Qzo6op4kSZL1aBhyxXqE3L2hi5kdF1knufaX4VDaq6qYCkgpuvGTPpsuUXhR2JiKLaxmkdip9LnZuoZQj",
  "key29": "2omsaS92W7HUkZaemSkoMzxjFefev4zkS9hMjZs4NUJJwyfR1KkaWgFD1CqGcEwzLMrijVH9PTUs7SDeM4hyZ4sC",
  "key30": "4Aa2X63oJEfGNhR8ofBPmonDQXDKBtGWU2b2XFaQ9MLurS9BbFsDgDvicaRL3Ezuc1cVLZeoKXCtX1eAtiZ5p2cS",
  "key31": "2eK5gVUHmNY7UBgF131DbT4EoJW4vtyq9hD7aW2nUxnawyZeTtdrVmoYGZhVkkWekZWAqccEfAaiVaw8eo4su7qN",
  "key32": "2vYjc8uX3pXtPFz1nV1vyuzW7mRgevxUH99vMYn9XnpxMxMx2YNDeMabAiUxgDydLJ3X2zqHtPiXiXdhgaVVhoKm",
  "key33": "3C9yuAeLrPzHYWeGg2kbMTKYgeWueHntzVmPV9WfRGkXk7mDqYTbKthZ5wiQaytLp2pyshaBBxxg592hwpzd7P1H",
  "key34": "3R5BQavMGLmEXJGBe3aqLEMd5gzQJqKbMdxccmSU6PytdvHkDH2S7TrBCcGZ8RAE5P8CZN8QbTsDYcAvVHa2QMhe",
  "key35": "33DzdLSwKMMPHwxytyfPQETU57xUA2E4cPFX8f4muZTpM54E2Zf3NEKptKe8BiSGnbeubm2JSNKeXGDgL41wqWNM",
  "key36": "3VxD1jbGZxV4nPNGCsrmamXEh9AmcLa2Fk6gX1Rhj1bBev5fusav4zjv7vwjHLFRN1ZfwvrBhmwqGvDedk4UoCnC",
  "key37": "3fpCkfdGtB5XkmKH55cPFPbgDVuU5ea4jhQXXPja479jc7Zf6JuwKG7bmP9RjZCcsk8ZgP3R5BrVQ6MpMQpb3uNh",
  "key38": "QAboDrVrDKSMEq48PeZugHQ3wWcGqDcbpz7TfZsSwDftJ9qcJ793z3egf769iauFeQBNqA4YYpEuBDQ58UZr7DK",
  "key39": "4EmnUMQ6946XmBqNfSde8XkXuvC7YAZyCZYAefqU994Jk4fer6mSdMHgWAJ7WwBs26vLaxHYYQwLg156Z85fbW6H",
  "key40": "3iWEcWWVh3NVJxSFrEfnbeGq8UdjqsLKRMqWARnPBWBMmJjR9RkyibXtdGzuzfbzpZmBFFrNzhiWSCdPDyx3vNEQ",
  "key41": "3hjPqo9xEDKWYHjNkEKjdNrvrYg5c2nFeaqdpPMRg91phYBo3zVW4QBzgtvzJCKXF8jk1nQaDEahE84vo92XSXxD",
  "key42": "2f9oJgeYkCyzvuqLP9Wmpq5qWruTpGfmAynekSSp9vLikNZQZiUWjnSyE2UaPPcJiSfHE4mEfjTLLBbWbvGUG4QU",
  "key43": "5hTss859uwCzQu8qQSqzSvvThe3boVs28BLyQ24o6jnzxn72r1VC1yReVPB1LFTHxSVQtagJxrBB972dv1zQ1vWc",
  "key44": "26xsiXH1yuFBfUfrdd15MB5hyeC2AuT4QQr3Nn6Ut13HZQHTkxmtJ5HYXshVJG5czSCGdbYHQF7iJ2hC68Qn9jPo",
  "key45": "383V3iyTF9gJgxvHQUiyV8DhZokdH5QWNQWT5gGuLjiNgrkiGdyeeGZEYdvKyQ5icfoNEuNdAFNUdriugMvGnTQV",
  "key46": "4LKG2r4Vqz6XYkgr5Wu9nALgghYj8RT5vXh18yacj9P8k4tSrrmMnpZM2ZstSyXA53wA97YM5ap6ePH7tjJQkgYQ"
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
