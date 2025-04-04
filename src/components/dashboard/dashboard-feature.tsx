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
    "78GxZ8GxkSvJ1K3CThaaHgBijf2Wnyn8w2o8DUBcEtELLKSwDNqLnJrUtwjfy4nHLsvj7RLqhhe7nRbn6qPHF77"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7QLiCDeAD8pJGSL8kYWP9C9VmPKMkf2xJJqnHF3NSuLVsFXVTknDbQJYRH4nXGv6hfZ5vSKFKw8aCbMA6gzGURt",
  "key1": "3Hw6Tb7AAKpT8RkDPKtTyYx5KBeVWJGSSoEQQsLDM6XdggorKnopvYXDkMMCRfCxMseTwXUDLhsuFEzA2cynFkd7",
  "key2": "5frRBgzBQVkMUXse8xMufoEBSvaCr7493mB8eEbVsGMo25pEQ9a6eca2wiCcFGZtRRSSDvDcCRgKXJCQESzLuub9",
  "key3": "2s6yontJx28rYPCHRBjn7Cz59EsUPMhrwFS2GPs26ZR8pP7n7eDw8gvaj4HGUe8KMq75RYBU8MHTubwdMfqpbcUY",
  "key4": "5MBRKiCYUqwfccAm97oCLMvK8tHb5s588f2znB78XZfdZ73Q2DTrWrQ9beAs87Wbmkbm5CuitW9LFbKEAGHFCCCu",
  "key5": "4xhLXyRyJky3EiwuHRS4eLR6rtGoBG9UpHUv9drHzVSh1eRVHE9YVmGqzayPJ6rbzLS19HgFYAqchQmury7aqZ3R",
  "key6": "42jzQFEWksbQa4KMKPwkNxm9BcFecsWmA7HhhKsV9JdZwsMY3aPHiEo8tgrZxdGfvzET99PZkWPjDgGjZjhu3a1V",
  "key7": "44Hp9vJiJRstypeb487RrwmWXv4gkdRkYJJjAMnSk5hHe2Htp1KJ9B4p7bUNJVT89zSm7MyW9AVbE9fXaL2YY1y8",
  "key8": "315CzGpELtetia7JZ3PoJ6M2h9R4YpXR2x3QisX2g73secEZ733Vt25zi4hz9kizT4RGpjyBwdmdUkWRyZxdCcJE",
  "key9": "3TfiVSu92FbT6UbjnAsS97JihJ1aWy44fiDj1YwhdmSxH8YUfrV22fqJ5Y2hnSicEwpvZm1zRQBRksU8SEizdMwt",
  "key10": "4nmA8rooU5i9UiwoCdwSQ7tMVzUQnptFgPUCbCnsHbs9aPfsC5Nvr6uV4gQUA3n3DYxpVgcRPEE8t5np7Rd2wzhp",
  "key11": "5FVCM7PWxeBVhrcFEunsL8DFuA6S8Jg4Pk6fPEQ2e3duNMrVWtVvYbfwPWF6kNTGJCbSX9dZwim4pAPJPwostRN",
  "key12": "PP95Quy2ibVMC5CEEpVT6CarBfJVoB7Eip2vdfycRqJPL4Dr8W9M5eGYCm1bKA5ixZuJbAzw9sLifUjJC5iGEWa",
  "key13": "5PfCzoNYSWZLCJj5Y8A89GPs76h7HkktVNC5SrnRRQwLQkoXNo4TmHGthnovGKMFTqY5pp78hEdahFconirPD9je",
  "key14": "4c9b8ctCPM5rUs5HtgupgaeNrwM7Hk1hP5bkA4QAkZERuXHEZdRePDiv3T2upf6dWJirCCzW8MixdRR3UjFbtQqe",
  "key15": "3Ju7nPwSHpgyrTf4ysACf6h2xhDS5TEqL2BaGnfDsH5jhrfCHbcqFxQczRDXQaFVbMpZeDjVfzQpPkuMa4PiXD7m",
  "key16": "5AvpT5NVeac3HvMHGstckmdq9NpTdy5Qk7s7LRxMwtXchWMNHycLYdp1Wm86uqHBexH5LfHBsYsK8JExcn5UAk4A",
  "key17": "5pN8aJCeUvnkZqTfWSczkWmoq1k6HTxdLFdBZuRZuEuEMMbcuTu4u838E6ZRTKxwGt8PHbQaDwX2XXFepxBvMy4W",
  "key18": "5Cgk4QiVXNMQTSF1Maoq5hkd6xfMSo7w3JQRYQ5hzEoDhhwrhtLoi6ooNrvFBUTT8qT4RcFghA56K9fpXkR5LRE7",
  "key19": "FBmUh71UfiwC39Bw2edpWDUAaTtqjmtYxJ3Gqw3QPnVM4neekpFReFZonpjBrhxxx83JzT5g8pChWLT6UbHV55r",
  "key20": "42bosaRWRGkXqaGh5mfiXwqh6Z6XRvn4JWaecdTV3JVkB442NfE5F9Gf6BYJVjjBNfo8KowSbqRu616HqB4qEgQT",
  "key21": "2pawem9wmiFPWmy31YT2Guc9YvuxxNP3qwkvTDkoEmxSAphF9aCjWrcrtBLuMBFDkZL48BJjisEcBfjVipBc6f6z",
  "key22": "qyKG8tDR7wZ5G5pvW9EuUMY6wSMaK8D5VkPFLJoVSU2ViwQHvDshYrzP71pA3enLK8mzT8uYP8X75Jpr2r3aXAv",
  "key23": "5NBo56XWJPWcgHjUe7kyAZoYgPJfCRVKVjvGpL4RpicqeeZir1DLtieTuCApfearsuAXBvCybGQuUP4re8TN9Fg8",
  "key24": "5iJHKky5uBG7sroFdpFheCyXfqAjhiuXFwK9v6mVooGbvVYr4rk47ndcXphsCf9kGZaVwKj5VQdcXJbrgWxt6qAQ",
  "key25": "taQ5XyC9jdiQHnRkSuK4NZAXN6H82zoE7DDpqtDv2HE4kxCw2bYfZtBGv9DYQNjZCBpXek8Ywq2G5bfkJaTMYa5",
  "key26": "4yfx2UnrfBEqDVX1AJWvEAcchywyGeNRXhxagpeuxnE56F6CJmiLjRLRiT6b94uaLYcJsco1aTiCzzYnLdScdvur",
  "key27": "2U7dngQCYrgRUfNYjbZERPYAHLvs8AwJ7iDUqXE4v9RYbLEnA3LoTjZRDKoDX2TfW3udnRHaVfiUYLbyW5CbzUDi",
  "key28": "2aw1EhhJAK2efBKgp8xUgApTaHNDUUxpEkobeNhbFFYAcSBb29Qj21kvE4WSFL6BnjG3jgNw2fpM1zAMw7si7Xcc",
  "key29": "4VMXQDjdnU3eydaXgpeH27XnV964v9uYWgFjbMD2FZMs3fZbpx4nLkXDotTCmN5c49p1QikNBoPwzRrkvKLmJWHc",
  "key30": "5PELHVtnaWdVnSA2oEYNQf3uSnooUHe1v7axatZYDiDGS6tMe5DvJHGEvqk8M7QeNEx2eajr63j4mu4vmj4JQUGS",
  "key31": "5xRxgP9tVb3gLuBAAy9jwEtwek7ajaDsz6kEqQSLiGgNtGh2BDUUrutPUgcrf4ab9NLmn7br6FDhnEAjr7XCdd4P",
  "key32": "APGQxUo8117gALnRf45mqmDAczHSWa6Gyira7ZJoGrZNwqi7AnsPKqUDswJQogkiBkxe3X2UdeubY9Tkhnoqprk",
  "key33": "2Ugf9cQbCMYogZBrTC4iTBUcZdXauVsjLdaaFrxyJHHS4P6tN1TDALdfdThACQFcvygXRmM3eyB7KPHp86fv2t5T",
  "key34": "q8SdbZRvWGCth1LvLj8yiLXMUnNQ1sNBpUufKPtqqRztffAtbixYaXV6khmrdMU78vCxd5cLgSAwTC7HLnXA96C",
  "key35": "RXht6fcR5Pq6adtTZaHfLtbv3b7z9fKhsawWuvheVgUyEwRTt1FyHFXW5BAcGiYKhe5YvKa4XSiiifrYPoq3zUi",
  "key36": "3ZGX3KsGXEC6AGoWXpzbcMyZddDd8zNg176QqkGnqSw5387AWYikyEpg8vw1Q2zhaiLYbnN2KYBprMtTYavx5Sug",
  "key37": "67YTopcvTuCva2Pwpd43vzAuu2TmvNRvNdC5ZBBonEVJkDVXksUC4jUT7hoykkzGeRAqUcRL52QB75LPKtSvQSNW",
  "key38": "3WCouupVQvdMVM5Xf9VdjUkSQGHsfvjsycKj2yzPLAd9z3n9SpSUhKWkiguPRA8aD3xZ17gBkNHqxFknVxNj9Ysq",
  "key39": "5u1GpeMsTiFq8v6VFguWmjFLXDroyVqLTQDDnXvhe2yHELbTpw5eBu2fiAybv6DWQxco5LvVVe5TE6xkcS8sAn6e",
  "key40": "4T2ancANK6vPuXcyvUyUABULMnyxnT1GCG9w32oXbtjaiNCFUzHkf9geHTRmEU66q4bd5mQGtRB9EGrcs7CGr5q1",
  "key41": "5gLzEQjBx8gD8gTM12ai9zCCYBLZNrRnp38w1kYRs2fujyGC5GuSgs1dvgCV4nPhjtGMrpgz52b9WRrJCRfzycPi",
  "key42": "4Sx1YVXcHxZgR783qBpUYuTZk4NeX92uoKtk6X2wEA1jkAtH8fdp4XZm5TtTRo5wCJsc2zt8JbNbqah5qjARMuSS",
  "key43": "5wkK8gPKbpTWzC51G6XUTjvSCn3LtFJFASNLwqhCUqj42Jh6Cuej586W49EnhtmtNsJiDSHid43YJiMrzD76tcuf",
  "key44": "3TtMuBkLT1YvHh6gk3imNiG3rWd7qXsevGoB93r2kZQuJFECvkXS7LfQ3mvj5DPjYSSQJefZPJjcfe223askqqd7",
  "key45": "3t8ADPfUaqmCVUVdWQZyp6kFpWonE35CWNa4nijsuYDYrzTbL38DfK1bgohG1dV4uLDm9XS7C9eZAgiX8w8WSAjs",
  "key46": "2XEjMm9Moh2Fs8twpZTKqFC7DWSsGo698V59sGpfjfN9QNXcEzXJjH6DT3DYbzrKBuFRzJk2BfHPsnmjQSEe2Ljo"
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
