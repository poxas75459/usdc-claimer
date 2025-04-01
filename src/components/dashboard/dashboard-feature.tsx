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
    "g9TQxxSYq9Gh9naMf7k9rWNaznu7HT13K75YSFRXWN1KgFKvbp7C8q97KytTLCwEnxTqqoxGPVuZ2GKdatk6vHP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vtJeuaHoX2JxXFHqAVMzd3ayNDw4hLW143dzDqpz4cgsJc9zrPbEAoGcfjL85r3GxC5aks5Nt4ywiTqFwybMe18",
  "key1": "5wafe2mcvADsbudCoJqc6Qe6ARrWZX8HVTHuuUrVWy3aUkS6DqvXuKzvh5zTY6c2uxGh2gxUUDzHMctEJcyZzqiV",
  "key2": "5pyCNem4qZ5xcn3e6s5fBvCY6zgo8hCKiwAAepcorArLKHRxcaPXg5fkRfbWL4FFFLQLq6D21iuAtCHE8DY1fNtE",
  "key3": "53YusRSJd8KPHHnmkVbSsQFBt6wY6VzZRyTWxQCZXAmevemKjq3cmRicfzgHQum8QFkduBsQrxS5jTHQYCmULSvX",
  "key4": "3GsdYKeG6nyjhfnmchzGWx9pEmAL6HeGFP3feAcGnuY8iDapXD9jUegKeNvVsZKE5oFzeT8zKhwCQtq2nKb5PUPq",
  "key5": "5t8YguXUt63KbBysibqQeRX7z7Yh1nsMzmKsbrRmT5LvEe8rFRkEp7CxJuwBAeBmekRoNJUDX4E4ovaACeWw5SA8",
  "key6": "4jGhwkMJmAnCgFKTsQjTrSYC5enNb3jnBtnnfFDPbuvHznFXunnviVtTnJR11435e8XTnj9b3ZhWnoFqA17wG8XS",
  "key7": "3Wfk36aYBmxHp3GYX6A72yKiZLvhQUyCVWyRzZj5uu1Zo8TRiYK6eaaZvMq8REGNLsfa8tBjbT9rLNK2bQvQQA7X",
  "key8": "4fTNrjqittZZFzMxuKTWLyF7W3hPj4nGvsSawMRsPkWq2js69RzJRtSTwdfBKqXh5oRJ3mN7yWDsDPmfkMN5TaaA",
  "key9": "3XcmJRScBro7GxQn4yF2hSyeib8j2T4FDEa1Xwz7BGK33PVo8d66347NuyqYCab352sAkgxygvm7UDCR9dszMrRU",
  "key10": "2VqDJucYJ3QqcLb6eS5s5tdCHNiAgUUrzk3hhPxUzHZcM1zcD2kKWt9LqVNB1oja92TCX2fUsMkvrkxx2c7MjHiS",
  "key11": "3itbD13TnForAggFLwFatpcUNqEKufs62ojAsviJqgAwuX1DQi3mDUeDEuus678Ym8bJpMEpTw3te1ujQ2kpV56M",
  "key12": "5rVsGoWhvEVtC4Xg7ARP8rdedFyG2R4Caee2Kpb7mJcT7oiheCsGBsXPVickLqxSZhfQ1MbxGGXaaREL8hRjA1EQ",
  "key13": "5WF2G2xBFMjA91P25ixvwzdV5jm6DXpjo41t5RtN3nuvziQN8vco7v4aeU8BxpxcbBTvmTjimWYdT3BV5FJPuqU4",
  "key14": "JQegBaABhEwEP1C57EcmU9Cp89yd5SyV5Q1nv6BKtMD3KzSkBAFWyexMSAfMDTjrFdZ1nVJmdQ9CJNxChE9sAEZ",
  "key15": "4Rn4jMW7kp6RS2nv8DZYPEPJgSHh49mh6YJM6PR6pbk3xVTTzseP1maBamLSx8wBWgC3bBBiu62maZugJTD5QNfa",
  "key16": "3EuLzNbxT8nUJhQX6P6rEFs8PhFnUEk68VmUSHZjD9cHkaNwxqd9PC3RFrASiU2971uhywqgHfBYwRjJDoRhoos8",
  "key17": "3mM9LmUpEiZ3ueQ2pKHwtMZ69cyMYojg8ueUBogtixgdkujWSnjNLoXpEFqwwdtqcAi34YruGfw9QK6UiEjaQZfY",
  "key18": "2ZNhqpriUrtYZaXkr1HJV3saKmoneZ1wczGE7NQRujYq3JFyzFGsEUrDv2EateLMBYTQ3yG24der1ioyJ7ouTQNB",
  "key19": "3sjfU3L7wWRHiiNwM78Tok1dac3bf88tbznSthreF6ZnFAvP6fsPyoANUJh7UUiaxjzdbG7J1139wHUbSdu6mtED",
  "key20": "3MVV4eQip4SNGaiMfTdJq4SXith7szLrVM1R87qaktfYuPic9f1JTW7mTGM4zgRwBzvcwm67pDSdw8KzmYStwa8D",
  "key21": "2ffYQAW7BMhuA3k5uPjJGd5tTrfnDEVyjAEAKfd2Eyj9g7879vXhKtod7rUagUJZy8qffJgFcJH19ixZSTqUJmUK",
  "key22": "2wSSboSocdaDr5NqnUPYR9S4DW9pAtpQ93Z4oHtadxffhmGwoBNeQSMGuuvYPax4bFMsGAxGf8NvaY8dZEM6eUkk",
  "key23": "eF81XXbA92E8TVDiT3wqJkFrDo21w4KLF2KysPWtMm1J91t4KY8L1gReAkfwpU51g891HJUDJhukAa3Wa94j674",
  "key24": "3nqnDT9gHzJgjadHQn8g3AGpbRzVVNT9LFYXkofMFZnXniBv1P8w77BmdWP8BP6hDE98VDxrhDe8FVSBb4djaugG",
  "key25": "4LxuLidnZC1QuurWKpFiReygsDNh1cUkcnmLCKkfWqMW3LqAzscCBDMtWPF1dNAE73rMHjQsZ43zQqvousanJztU",
  "key26": "5fCsN64jzUE6TTqZHKw7mcW1EL3x4fD7Qnv1PsacZJm2Zw43CpPE9jmvJwxDpitd2rex4ruLVPwLjETAo7LNHiTv",
  "key27": "5pr3WEfsXHuNs393L2icfXGdBwGAWB6ZvF72xRpGu8Wnz14b867JkvUMj9bsk9D9dR73pyu9AipskvhgCWJjcFnv",
  "key28": "3G637tB1Xm7C4te7NqKc4kbBfLH16DT5EwZssQrk5bmtAF7M3My6Za9JrBT6xmJ52BAUVr3HJ5npou3zByH2U9LT",
  "key29": "5Zyns2VH2pTDc6NtUN2oUxekA4mSabCQVe1JozWisrvgM7LDKMiS1HR6WaENSL7Dn5XnJ6cM16bQGmhTcXsLb7we",
  "key30": "5f4GKNQk9yAwKMK4h7fv2oNM8tAVcMYBGzqgf7NXXQXKELNbtoRdtd12goMDc7C7CLWWCYSAr4wpyEwgLj1enApJ",
  "key31": "4aR3JQHXxgG19LLXacVRo8zSeCQynFpkMUcsMY1JZoQgBdxoT9NVFxSPgq8BuJCWhB5eSNixjSew8eW1Q9JdZjoC",
  "key32": "UeKsoMqzoTjrQ8yRdWU6XzsiS4Jf1Lwtt65sJdj2DjVd9SWgx3bTAKJZZxRqkmkLD9EJDhT9R4JzG6EhUTJjGEv",
  "key33": "4irzuhSEY9cPGpQ1hmjdBZvd7xozMTjjb39PF6wpZ6iG9YPZvR67wFpuJGVuuwGpbt1jo4HdoBrYdEkRoLBD6aUX",
  "key34": "3L8jfxFgjbiaJ2U4wU4yeLdyouyDpEHVUyyShKPyLa29DpswQ4Zw9XemqFGQYbLQziHeKCib4AnPzEWKxm3thfFm",
  "key35": "b4fU9qvyCigiFZtf2GcHNVf4dqpPxjk5MUSfQ2DFhn9kbmrCfCHKk86Peq7LGrpCizuJPT4fXnWKfZMBLHfkTzh",
  "key36": "5oZcvmiXo9oYrtKdcDWu62UYyqD7Kjve3ab34AFp9WJHaoAxMFRz2GUgx1NrwugrA5wS8BFNbJccVyiJoTqDF4WL",
  "key37": "Yi7j3We5aHJQVKfqc9qk2WB6EzqcDexX5A4eh8n7nUzbH1HRFKZSmwbJhiN2NJ2WdcvFyPivmTXSVhBGuT1fysD",
  "key38": "5C7gBJRmrhihE3StJJAA4HiPFacdTQu6kYQjfY6nWjqnj8f6EDRsLihbokV7EwCyVDuVfJKH1ZLAjAWN9xsx7Htd",
  "key39": "4kH6EoqrgrRAzG1ZD6d5M4JJ6YMz4Nv79KKJs8Rydcm9ER7SaCM85bQtsozEf5gvrjGqU2gF6kdBRRbAVUAiepw2",
  "key40": "5hEcf26bgcAJrparwAnXoPhQcCpXTXpJTRN5FMiJFzwVdLcQFLeMyPwZti3qkmQtq2t13QuvmUd6djPDPYhg2rcv"
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
