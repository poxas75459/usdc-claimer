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
    "2wbeDWWLFGNpapPjrjzRjwSWLcvkXyruUaf5iYFhXRaYqdpoDMjvnTy8Z8RSyBV8UU7JSM5QKBoJNuwSUaF6L8Ka"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56YbGTbg9pVHCaxjP344JciYZqBhLCvHm4TUkdmbtMQE3TPvfuvZasnk1exhicrYemidKnjnZ8Lhoo2WgJ6B5XsK",
  "key1": "2BuS1FqCXp2kRBKoBKEzawds9W1rGb9pURGPFm2GtmKt7DYJpNA6fZcXCjAqd5PFFP89n3iewREmdapy4BSqruCx",
  "key2": "4Y7My1yof4ohNiByuoWMhDgrzJpro724F2ars4TL6wAWV4HJ4KYy891V4xKEhe1cFQF9Jm39FWrY6jagKE7qe895",
  "key3": "66pkuX3z5JCFQY92HHBjocvUFaCCRqKBGryV8hgfhypgwrnQ7JYG1z4teQeyV77QF79qso6QTcdwmGgSu3dj649A",
  "key4": "5ZZKaUQPrf8k6vePUY8C4Nz4zYq2ijyTpvHcgYZZ1hVL5w9VUzryJS3grz6h7q9dihYHF3WxGHBd4oVtyUPgFbaF",
  "key5": "3oVeEgKipiFxAfJjbZ6EPabXeAAbMuF2dRLKc6nBjY9ykA27i2MZ9t2v1FPDdNNTnzrwJkRxi6AeGT95ycS3CjaJ",
  "key6": "5Ds4m1Sg7yEF48kUGxvgnQG7HibrZzTsAUwU3LH3gZy1o7kpcpeK2Ja5b2z2aQQRGxvE66Zi9UAhiWM6UFeeczQm",
  "key7": "sDa2MnfM2RvJ7DYjXGwr3JqcbWdTXTLTJUsw5WMcVCX5QpvCvjRRQq2kBepzdqmQpj64JLZxM6XALfYMhtTEMF2",
  "key8": "hNUEDdsi5kVXY4FGpQDrDpSxAmzXwn3ZCX5LyYHVZc8vwmuVJBsHASZEWXics1qVEqRNia49NxWyKu1UbrWTnyn",
  "key9": "3zw6M6857rTpbc1B47L8RPyEAmVe5MMYX1LsSEEt2fSQqpz4dBf6QsH2ZbieDjSs4qvnkrsaZsPMPzjcxCPdWArS",
  "key10": "58quRrH6Hpd6v2hvHmGjsxgW9xoPXyq5p56sts1jJiuR8DaBjPT5MW4X6TKsQAhet2KDF128bPtHrfSEPP7Zpdk5",
  "key11": "3XE525PBD5rUwQtcLAsj52NduzoXEx64KcEQuxN56U9CkU4gPWPJFYCRoFK6csYjyXBbUo71p2w3E7SNRkEEJsGQ",
  "key12": "rjExn9w8zJ2BQmYiGcZxsiLBQvLfFZ2FWMKbXB8YW2M8DE2vyQ9Ms9npMQeYzDPwJaZYgL7qxnqrpioL82dMByt",
  "key13": "59f8TkikX9hQ6ok9PBLA1Znq97XFcJzqLKUKnmCtNkZuQBdzd7m2EQ6tDpY8CMAYHzmrePutwBo87A3HQ2CDLDag",
  "key14": "2yFxGWqnruWcFmtdFdmCqqU2rGZJSvqdHtV1Uk2bKmgDodQvw9E9xUQap82HAEF73ihoyrtHCmXVJ2NVrr2jyQ3W",
  "key15": "129pCdAkQpkUGmLhvVzWMqUVQVS12fWrcQW8bVVvLC9V8q85Eaf8nHpKKrEpBQvd41uWhQGZHacrvUUNMEJ7pWWk",
  "key16": "SePskjjpVVPY3B8KnVvYtGWqZQX6M52HCHGRAqRZZdeeWSvDQjVGPxXoCkWjveFKWaJxgFnvTv2KB1aKRoLZnRX",
  "key17": "2ZzxcVK8NkRuhQF9RCx2drJEhqGhQwrRzvFu9f2Fipa67wTgyjBZP44wMGXT4AweSCFda7GJZje2iAGwNjcKsMFz",
  "key18": "2xzMViuZYza38VyLQC5755G4dSTcJHMd8bir6RC8ksCCrYqd4kMGcZAkmCZJyVa7esuDmAaUHWxfdaMrvCLwYRWo",
  "key19": "3v5C97unzjFUz79wV89iTz2ajQY7TpdU1Tz1uZz2aDgPevgKMYcxgZ7s2fqSs1qFDgzfFh6mLVwAKvUp2MMDTd3k",
  "key20": "5TzpsmjrtuR9p5gFz3BX3iJ77gbUtnqY5ndYG882EKNSDFpDPgm75hTfqizD3SXDVUgU5XLH3ss9P8YfJaeu8MSB",
  "key21": "niSyTtCD95WP2x2jxDthJdGkEUKTBqinqVXb6L9uqAn9W15fWFHFpMNh2VxNZ3Kogi7KawAJaT1L9j16kRkgok5",
  "key22": "SSg3KN9kTSCb3jAU8QotcZJHbEypAfUBRbuQ66SCFQszEMyK7tMQ37aPuQ36LfLjkWQEZ8vYM4UxGvkMjP8PjBF",
  "key23": "4NRfDKgkUy6BV7Bw3dNqdS3eY7DGv9Mg1hdNHvpkRaw69xoo6ghqpNc8QhyPhPkpLgxexGh9F5Dp4rQ9hsEzsUB9",
  "key24": "CakRb18vXeYmS3syApUW6WZMWS26PBRXcdwFtqpX2YEnKqUVWiHU3oAA7xmNv4qSwJb3zQ82zHCgDLf6UofrqHT",
  "key25": "3mTNh6khPEj7E4dENVnFCyPaQUTUZPN1BoQERt732vysKSGcKqqQ7H5Z42YuEyjNyZ15qMosbbCwft8STR2SeR6T",
  "key26": "4tQHW3t7skNHHkcL6B8djzuCcSXWLsNhvpShwr8cRSz97Bk1Pruze13f68taZK6zdc6vj4uoFbB1SSGYzY7qkvP2",
  "key27": "2StJzqwQ877P9WjZaDK33mmsNH7caSmqnqFosHQTVLLRvbX3GDGkKD27UASDM7ndbR14NMf5rLSaG6YpTGz29qi8",
  "key28": "35JRmk5AsW6TFqviWH31B5MDAoG1rLk1m2zsBBFHEFSam9K67RHZz27VSFffazAsDqnA5bRxDhBH1MSnRFWhLuDX",
  "key29": "2gWTZUB6MWLMwKoYcv2MxU3KcgtwJ4m5FEtTvxmL9Dz4ZH37LCsBaxdiyUXpHXqm7gvkxKVVR8q1Hd9yKSBhZGmw",
  "key30": "667b6dgxxDsgeJPmkjRyieiGxM3UmLWJLTmsfTWpe7Ziin6TYx1sHBiwtFsxnx2on4sQLekgGiL1RbjjTSdtKMYV",
  "key31": "4uBM78N7HMtB3KFgghdsp7AeHKuz79pb2xJfcgHUgP37aJCRPRozeD7ihpGMD6EVKuCLPCh7rroGtkys3rV647Me",
  "key32": "2ZS96k4UBpwiFm9GaRzwpACiydSTPPL4QswyBX7GHsEZGF7xSfgmmNYc7vNoRFnPzFxy5wYcCmXfJPcybTGCV34k",
  "key33": "jZsfBbpdJkTRu5PhFGat3J4WV6VPTxupCSA5Qd32uzJk1yes582vwBXiWG9xg3XiLSTt8HdKfbSwZyJkWQM27DB",
  "key34": "3ZxXyBj2Ndkw47JRB6FawGQTJduPhW3fmdZKMmMASnW5bLVTPNMuvndhffFvA2FCbEAGwipwcVbhZarNxktnXXmW",
  "key35": "adfoCk9xzVYhXX5b4svWTuUdfphWCSJaMQr6EjQRUPAZfTJzmgL4N4c4qR7cmYYV9uLUaaLjQxEpRBwEhHbE88y",
  "key36": "4u6oxsCMQgpxQHQKFSxzqpqiKwcfi2Vi9SUt2rco2TNc8EcLBQGrL1wH5dGTMgD418uGQWo6FVUdzafdRFJMaj1i",
  "key37": "5Bjh7DF1FG1ScbUBjL2VGZ6hyV8tgbq4ZveU3LvqppE6eKcB9u3bCN2HNxXUFkPTu8e8Yvz3ZzifymiVpw9jB1Fb",
  "key38": "R2tH6QCC8mvfR78VZ2S5ed1MsitZe4nWVvCgtrmdiCUKmj2M25sJCHY9Sap25CRXuoj1pSFAK7V2CPU7o6Jc8Mo",
  "key39": "5NUhFdJZEGigwTbJZPbSvFbBDVruKE2ChHpx5ZXv11zGKDXC1FhsCwyMCuHjbQSDcNxPH7e9u8VK2CHLFXRGXW8A",
  "key40": "4dTNgveDCB1s1REhmTL1tEFX9vyTBzUaDmDVPKKjYuLvc9cE9qfevLBb82wjmPB6A4GsfbXX44pzAambkryfh4V2",
  "key41": "51T9RBwfKmJAmccXaFN8PimWbcu7VPpPKoCaJGVi4Cdwb4YqrpTx3DEdqNRtVi4nuApFqVEPhQjiPHn5mnzLLXL8",
  "key42": "MR8TPe1Go1dt1yykStyh1czxqxVTyCzCtLzWfszv4Zg3gYwNHS6nvDQVxt27aX7U13YgyRdVGn7Ah7ig8gCYHf6"
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
