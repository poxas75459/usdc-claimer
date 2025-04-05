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
    "3fUib7vH6SLy9c7WrjXFT2kKZ7JR1sLZG66erWDso5SbUEcMLwmNpF33zcswyxt69EnK555HJQGLuNmRJCRJ9QDw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38AtoFNFXSR12rmAGmAb8cJbnJYsFsVAQPExRV4KS3gsNqXP5Z6gybUDJdP6XEiU5E8bsKSEtpH51Q4kyh4UTLa8",
  "key1": "367am7oksx55b5ABZpJD4f3NGzJUbEVeMddbnxNuuwu2MLgrxYsErrxTzJ9McCzCUtzSe7DLj5P2WpvPiY7YGJ9v",
  "key2": "2srd9v1BuJaCcBNnMwe2Pz3kRx2VZdR2MYctEs7JQMrwzGhyiwogKz3y5J164ThBNGD9W7FejKA2C2f1DhoKU5Ab",
  "key3": "3Yu9ADxsXbz1wZP1vqemueykP6mdj2tA942K4WntGL3YZy9dYK5YpnUuS73AKKcmkw5FAQW434bG6cieykwpt7Jq",
  "key4": "5Bqy4MS1RTXVGmrmeq9yncigxqeHBH8XK7Me4oNWbriUA7X51vREbrdkVmTmj2WtjSD4Xt2rM1PbLfB8PandSAMn",
  "key5": "3StBzYxtz3PLN7hQkNcwbmu1q36WtPa1fHJnjnuHwvziXBFGiPGvXS5mZjDtDtJmRy8xiC43UGTVez6iKrHxvbfH",
  "key6": "Bpb66TSo48dc5RGjTrFYUkG342YB1vBhyTihDRv34EJveB9EE15gGxeNVdhPeerakZKpomCgb6WVLvPwbJQ8YD8",
  "key7": "3GQffwvXrytiRrKUL1VgitTimRy6wVxCczJXGdXcNAtfxeRfszRBCzxvVPsGSBSyvxohh3x3AnRURYnFk6A1NpGw",
  "key8": "3Zy5Qafhsbgj3N2QJswTszCsvnSjMW834Ghv4uwdVYruVYDmSRPyAbnZdagN5Cnx5qhPs6q8RvyDHV1jBdwXdH5P",
  "key9": "5HDGuzrYGUtWttsdzmBTAfuVgCRc6Wr5LokrSyExoLDCFQ6vmG8x6bQyp8ELgaba9Zo6saqmeyxFBMTFk6Wib6fK",
  "key10": "3MtL9ugZPmrir5Z7TnWdT5eBQLJG6p61MGNDyYBbtYbLqzzNmxrS8zw5tLKwzSxZeBjqhUmCZqTkpZJRqJvg55Gn",
  "key11": "5crPeGd7hYUUbVjU3jvREMWJw7LkdQ3FaJLFSfj4smrXV7HHh1Bsfhz3SwTiGAQmzKtHRrhez3VTF34bnuqVQSAM",
  "key12": "4R4nkqiiP38DjXMQbKX5x43fkuw7TyUrkikBSr4TDheYFPdAxCtJigXirRrDeYRdB2GqqZ5KjpgEpPyAukqjJKWB",
  "key13": "KU9PRa997XbDkFj23zEqECc6XdnpGLPMuFhCbBT1Gkiuh2JLzPBbU7n5zfnbbeNcBtPnWPw3fJfX8NH7x8ZFiEB",
  "key14": "4PkVo3ADPZbAvtF8arJgdXVimuuefn3JquzL3ix9JeHkEHoQH5D4QcrrYyumqNjgWYq8V1zor7riMm8Vm8wgvhoX",
  "key15": "rs62nMvb3hRFDPV9LdcqjqFuDeAg9ZA2xFN5Q1wjn9hCyUzDxof43WyF8gnFcjMSzz5mx6ieoBU5Zchcjda8cRS",
  "key16": "oJ4ckuQfgdiZe9YkPz4nSrd8qe6B1Ax6EUTRB3R9ggNireE48FAz8XfJR5oUWejb8qbgDbCcntjmgrpxaZcZ4QU",
  "key17": "5UkHsFjTnXt9s2PsJ4xyVcYXamQABAwUMetqXQby5CzwWdUXSt9seBdiy6SyUAX8qjdBUwVkBWfWJ88a9xkyNLCm",
  "key18": "4Bn329Fbnv4uGm2TNCjg1WB6yCBemddJTYnH6Q8vPx6aviYUBh7js9tkU4KXRDC18vr7gHQXLnw87zxvwQMDhWmA",
  "key19": "nZfPsBfZcERiSG25T9AspVujD32nbcaMd5ymTNSSaGsVKoHasPx8iDdq6162AfzTrxAZneSBEgbW3Uiaf23be8u",
  "key20": "5rWBNFQqthuGs9N8TQBZb5jWK2m57uxwAZiNQxx49FhL3FAuTXLgMPQhE28djKUh8wRdtZUKqDF99zKEeH2ARES9",
  "key21": "2rmBMgGBvcJUM8T2QyBizUcc8srW3UnPWu18Bs795BggBCgz4LgUNVwmwFCcgQceDisZokNYWooHQP161KKKzEu8",
  "key22": "FoFd8A3CagkjWFyD8wsAA8u1GigKF8ayb6sRaSe6j6QJ2hfBN2Dhu4L8L3YQ8ews3AGLbTSseoquAtNfqft142H",
  "key23": "2KWgZJWxhsY43oDU4US2YqDZF8FNe1wMPmkD13Knvf82wgf8VYh5mjs6mvPRdBfKS67cYr9G21gEPUCy7nKNTTJ1",
  "key24": "2o8pwr4j1sPWyNx8UfGDwPekw4e8vZxubLUjfvxRihVC9d4bWuoYpmPaJAp4DsQRK8nrSXVQyW9F6pY6HvgCqriD",
  "key25": "2k9HMpMAroY54gbmN4Q2QCeAiVLAfACuqQc3eU9GJ8cftyT46YPhLcawbTT3WiRAM8pEB3LtGhHBWVstdGPiQmDq",
  "key26": "ko6c85T5cnSJnKZz4DxgpPvndisi4GtUdq16enNJynXNPzRWQoK4NaEhkZ4BZbtDge6m4VHxFVu5QmSofxfcLQu",
  "key27": "kgMbGffa2kSgEXFX1HaomUczmjabebFRW2HdMQMRcBHmfh9sQUaLih1pd5iM6ufnRAhFRFwWQNc1sUwZwRRrk3q",
  "key28": "4TxsMd6ARhQ9cMA6FpW34wwmCYMquRF4XnvWh96FPyaJQD4zXtTxpjF5K6eiugrM7DoFHGsECJCHVNm9L49Exqy6",
  "key29": "4aS3hi2oEt9iPxLTgJRRCodAXwRVrEEFV5rSF1rSGwE6bHSYs9t6ZvHFXDUeNFRdxsgwMXWdD1SxKU8dSoXqWdBz",
  "key30": "4gGrj4occ9jzeKjKU15haYEeq2zgwXBrSZKc8d2VpG6TsuUUEkh3t8fiN4TRinRZNJwngxYi6pk1tu7BE8rmGYSF",
  "key31": "5yozfBo2DTTL7xAMx64xAAXybnC4BpJb5jWK3ATun1aviGVS7L78VxVJbGHxy8K63ycR2nmYXWPy3C8DczVTbACQ",
  "key32": "47bKwW71YSzeDktcP2ePTi91MaCKVYLTi1GiGk1ENfgnp6GW4gSVHHdeQqBxPweonwV8huaG7fCVb91X4nnFAezg",
  "key33": "3XxLt3Bn7BixuugYVSTSqX51dhTPaRmMkEdMiDj3p2FybUAV3zneqpVMbxLn9JUqkbSb333vRyJRG19FkTgYexf5",
  "key34": "5kFN9UwwLkoobDvXtW3ngdFiQ1g2zos3WxyzqpaxPTATZ5SVKcCGNraPVcdfK6hM7xMhqGQPPuF9mzytFvpyku7d",
  "key35": "7g2JmsJZETdY8uNcuJ9H8s7qxNQuyKDEzCYmdjUGfb6Xxq47vdYKsMpYvUJcPkQxBT2zVLAVWnGjRQ15SXtu9x9",
  "key36": "5PW3E3pf7sFkPopQui31QhrnKeCgrEqj7PdWJdqcGUhm2T9rDq8HkVwbwwsdR3JihkjgZ6t9PZLLtCyg3QfcCTcz",
  "key37": "4G9HNTFnbN2NkixF7r24DKA31eU466j2RqCZJSY8QY7QScpqJGc9BKbjM1MD8gZRkQnPuWeuuWBKgBUVEBzqSKRr",
  "key38": "5B8gT9aXwTK45grFwPfwCUUWrXxptKpGEKpjDMR2Uv66Uk2a6RUdhMiZJ5ny16asWiqGbVpEmM5HkFL4PmZBfnu2",
  "key39": "e3VE2vSv9UrV9vuZtz1d8pKeapmrJLGDDe6tpVQhf48MfFvJjnPbFXuz99jTYW13wqxV55GTpZi63FeQpH71mhc",
  "key40": "2SEgEogEcHERT1mv9YwubmAs7UUDX3nsKmPP8CDfmEZNM4AdTUi7M9AkVbjmSP6ULvdYkca1TDCqf1oe8tBLW8Ua",
  "key41": "2EXW7WQsqGiDwZ95nBCD25NLujNbVJTZkjZnmomaJzMwXSxgGHosaEWSgeL8qg5UFiYm8btyJgdRd8GvV6hTt7FC",
  "key42": "4SuZ3tAYNxBdL1B53AawLuw9e27Fmf2rsZ9asHwAfeodfpEH2wnKWYHJqEFm9iJ9oUeZZteCLwtWhcaXbRBh146s",
  "key43": "3K3aazhM4PQeMuYKeqrHYzrm2ZNSsngbZLBaKCfwM8spRPPkTk8dFj6CCcVw3q7kppRrPLpVigdGU3XsSmfERK7n",
  "key44": "3aqDaHH1izXQmzodykikDi52qRQJwoXz9XKAzYG1nYHk5tDF8FYf9LtWgFw7PdtwCK2GJAzMM6hxgf4ETGjXfEMr",
  "key45": "4CGvSZvqEbHgUF8pwaXV2FabQaN3LtWUtpqYVU5sJXJK7qHD9GZqqjEAkdaaGHDuNxbjK1TWTwZDTFCX23351oig",
  "key46": "5hvPbNygekhiaJsYgm8gfue5QEGGYWom3CRQ7QxwAF4xgf7c74g95Tm48qvcnQvPEbNfr8tsgoyjZpHH1N1kB1Wn",
  "key47": "5R3R2tqzuFVU2Z2a5Cnx6EhP9hBHXoJinEgh9PMeUsmgfFTLKeEumTe7AdMB13ddZRHF7dQoYPFBfVnVPWPyxwdw",
  "key48": "2mCmyHPZY4aWeq4H5u7doFq8bujU9uFHmeY7apBZtRGBCTBBCpGASpaetFQyZa5TrvWkPdH5s9FndkYAF1w8vBze"
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
