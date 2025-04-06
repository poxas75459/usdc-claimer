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
    "5BGSPVsiGcwJkX74g2RPsFk15o8bpYSMrHctRf4PRDUoz4sGrSjLnKrm8VYzcJ99KP2VY2SBAC9psR6bKBCwfHZR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38KHhfFp942TJpLnMFgzwdzEVUXmqBwFfQ3PntKz9n4mn52ts2CuWSqnbJwBidTBMT5ZTf12xkHZKvRGiUwPwf1",
  "key1": "2KBaJTYXp6xK5sCeS9gdN9vMwHH3bFTjtQ7sPSedKwQdyUcZWqCPv7bHxz49gnD45bGyqk7CPYjyJpi6CtDsei1f",
  "key2": "2iJFiPxwZArC3Unu3je5dXKiRCK6UJYpoFVFW9HtPgxxkAiVxk5Q8fpqJsxm7gRaAo7TA1NNdUA1LqgezPyx2ewv",
  "key3": "2UuxzpKDGGJXP47zLG5W6jG1JDUM9QNdFDtjsE3VeBdFc62GKeAZ2G8xn3fWYSQMGnPGQ7EE5VMUS7rbGZCv9K4y",
  "key4": "mXoqVCTLtm8JW5AtMYu78KjEhBT6Ju3xCGi6KdBQ1FcnAEpCUqCZMkrCr7oQnZFUeenGnvaRok4EyyESAyeyALR",
  "key5": "25D8ZDQ2yAbJm3sHEiQVsMcMTcxtXbm7bmrjZi2LXf8XzqLvnwT6v4qSoi7Va68A8AC9B4Fvg4o4dLQMwbfKpi4T",
  "key6": "5Uw68PgdxvP9wRpdodEPhRyfP2QriKyqg4depF2YuNbcvUzvSJJJwCJeAaruqHdJURBG7r8KPDeGpEavagMuBMnE",
  "key7": "5m1Mg4dggGEQkxju9sQLWrJYFTMBHy4ha8AL9whmZWL41W96VEyhAkcgAhtQruSUMyd3apBxdoUkpXunwqsF4NPg",
  "key8": "45Avc1ZeBajotLRkU1RLXRFkKqF3ZpvoDZcTCvFFvYA1LrYJLSTWLv3BerDZBq1cVnthagGVfeAkHSxFLmN4DDRn",
  "key9": "5VEb2qwA3HFkq7D68ZyfiHr3eeFMRZoMUNJnSxeKDotyng5JhtBVU2VqHknToK4JYvuc492NSrSMusNHzJPe6q77",
  "key10": "52WApD3M3S5XmjDfsXbtrRZWKTj3CXb2LzHfQ5hvpkHSwiqqPkyedPPtYv2QBmXzsS2emjLT5MQKHrN9NvLJirKK",
  "key11": "4bPy4dHNEt6S3YCqr27Hp3PEYMh6SFBBGhEgM5Hsa9CPUfRc9QRgQdx4t3HbZgoGSwkMo8TbSyWCeJ4ngBTGu5B4",
  "key12": "2yYhzQKxoTAwFRuuBmLgT1wrGCFMV6RJPGoGah9VBmoT2GibnKMUJcEcfA36DedeinxU524acmta555tfCyopprn",
  "key13": "3KmpVgbxt1qdjhxCz7gNGtvUSh36F6yhZyLGTBmQ4JBG12xZ2DAzwM7V27dsKBxG6xvujC3Ph548cZcUZ2enY5wt",
  "key14": "5Kg6dj8u1iMuGxCY1qPqHcqm3iVhKs8BHLdVF5dLhawJtaxaStnhPyWqfdXHKyuYiXHiWSYNBQcDiTVxAvUendP6",
  "key15": "5sTQTqTRdebn3kQsQ3rdz8BS6YwUvFhxTfJAw1VQEqq4UgWscCGdkSiw5NhGycT3LyEPASFaHL6E9mvKHZxPUNZU",
  "key16": "2WnAX9D2uouiTVL9Mma2GQSTc8xogbKVKap2pqCW391g5iXfB5e3VUarMedSBjNuEAQXfKNSGBBC2uMX89wTPe2S",
  "key17": "2cYwV2VrPYSp8LXYVgyXfMK2WcR22NNxZqRdr45SYC6K5iKCtaiBGsooL3sFS5uoY4JWawRu3LwthPc86FEvjxLP",
  "key18": "4Ef8NcULxxsE7xLbJC5ZLefbi5LwYsJVoadG52psJSKRHuQszUvMHfXcnYz9QxHVWHwAzu14MSs5dZJHpd9JqSaf",
  "key19": "w4Ynm2Y67JdzPq6ukMYMf9fc4h1ukdujogGvJy7S3DRTJoiQDHJdVC2q7FjExf2MTg4pQZpjscpL8xcrcjtbrE3",
  "key20": "5MHUx14t2JtKHKoBdvyJJUUFSiFhwCk6rPKHQCyZ3yFFZqY8jivBRzpL5mmF2yShtQXLWU6Zfa81S3ygcHjmAEtt",
  "key21": "XmSZuP65nfnTJx2Bz8Q7ypatj3WeEAkypi2MWfERiaP2G61S8kQBPEff5sGiJ7TazoBF7qDuuJsnGSAZsDLyv1i",
  "key22": "3VFBi5ZcDy7m8tC8bbseDtDdjt9BqV9dkXcG8GTaVcWdHGWKicupR6odFEwXTE4EQjk4WX36zip53HHsAEtR8mgt",
  "key23": "4zVhzH8LyL3BhNrWbis965oJnsE1hWct3aFT8LFnZMGgWL1ScW9s7RVfdu18vQymCrDMwxNZvWbgTSRpc4U67ztn",
  "key24": "QtmrTF7mUTCzskJLJqDtLgKmANG1RJwsiej8A52FFB8dkTFQyUfVaqPEFEinJmguBJJsJjyBbusU1FgNrAXFMjN",
  "key25": "NAkX6M6D8eVUWhb2ebYP3yGmYytUSFdCjgPBeWT5qyfUSLDfgKwcJZJNVzxpAwyPF3mhg4UMVuUh9BvHLqquft1",
  "key26": "4rHgvTEDRF6DRUvgvDBG1Ha213UWofPtA6zrsWmLJR7SymRB18q9LXxj6CS9LDUaTpLXJyK9HSCUpqcUfroKhLV6",
  "key27": "3w8JJ7NHa7wmhX8CadHhvckHWSEkjuStKi9Cm8sw4LTFjubN1DUNd56Bx8DsCWtbhpR6GeYQuAUXJE1phSo58qFd",
  "key28": "4EpqfasAJMeAoCjpPgoRGFgf5sUyf5JZXvL82TiQrT5HUeS3Cf1z5oUMHL7ktzWhEdhcTmGsWSPdrYywgwGti4Pw",
  "key29": "4ydELK3hSS31qnY3SvWgETMCimfQ5hc2euPqhEeDXJDC8ejfBp9SaYqbWf6nWozCBq47skkVYh26neWZ8Hhf4SXp",
  "key30": "3WvEnT7mK5LSpyKSkW6xprfhShupKwiHfziDerw1QKR8JefkDWyXdtfppinKkw8Ctxk1SE8RXSr2MAdMrozjqXae",
  "key31": "478GNQhJzEoN719iUPLbZsRX3xdAZSKbcEahVkpktxZpqUgWgBPLnBEZeQ2b6D1gRNXt555pwkXvJhg3e5xJCbHf",
  "key32": "Gcnb1bvUVHJwgJzrG4oViri6YTiAU1HoKoC2fYsA5bnSrVtxSpR116SfG2WMaxrDacJ9ToHvzyPMwwmzAge1T6C",
  "key33": "kBRxqz5eXsnPoHckEBouadgLbLHUwdiMpotPoxwofYEU9L4fq4T1XURNNAUc3BQ5LUACg96PwFv663y88pJzv6G",
  "key34": "5ZreWuQVnEW76MCRy4dh3LKCNNvRvgWyYGVAPnCw9BZjvUVnBu9aGttRN4aRJY4JiHdHuTaVzMmQiChf9pmiwTss",
  "key35": "643jB74mjcPVyGWNQS8VS8CaDZBoWBWQ1fBchtRV2wYK8q8jsehazW9MRfZQupGQf1EPNaQrpVvpeNoTCHdxgkyi",
  "key36": "2Bgr6wfjAnbm4W1Kcu2T6EunsPeNwJzxpfLeyDngSuy4G5rM3nf1vz7Cg6VUxgczqaooswiwvNjD98CHUh81jKM1",
  "key37": "EVFZ8VnH5kLoAxxTvwT2bGQcRqS7xKZQaydGbhcM6ee3MeiDZuj826mNh4Nb2HnnRTp7XTyrM5EFfgHZioDNV3B",
  "key38": "4mrLaDTbLB8hPwxYtPLFeDjmnu8wuPZfeEv2FoRvU3mdSEHWca6VmYv5s6PcCTzt4HHomC1U8eht6u8YMfWaKsnY",
  "key39": "5U6XAWjFmEeQdyMwZjMJhwKy5ZF7WSs112v4eAfySfv4u9cjZAEDCWM3yyFuAFQzt3S9kVYR1Gak8rFD71FNAE2o",
  "key40": "53VdqkjggW2fWXEDZkjRE2XhyY386k55DGkoEAsunBHgpfvVH2TrDxmLrXytd7y1Q4vvQY942hokyMcKneeYztfJ",
  "key41": "3S5iG7LfqccZYYZ4TCZJHbzu2fPqoaXMLEa6EADVHcsKBE7m6cPdhhwgAVT9SWE6i7ZwThqkMAiabs1A5Fk3GHCK",
  "key42": "4MEWXcvPUGP5evKzmXbs5Ri4PQcSXworqwQfyUW3vkytmu8sM2vux534ySkjmzYrH5CtVaiRe7uAHurSgY7UiF1S",
  "key43": "3gnUgh4Fv68yLFWMtushmLeRAkp5Q9u3kcd3X9auqQF8EECM63KKPwiQxsNJYmsbzphoe5g2p96eRqqPFC5c7XES"
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
