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
    "4jkoUab3DpcZs3HeZgHnKj3o1jhCCXoNVxygY3y1CzdsRXoLHvmZEWSFmn5tanybcFTBeJc5K8Emx7ZzS2bHhCuS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AHPURdTh9f5PigSucz1cy6ZrnXumNieSQTesQj7bpuTEv1EVbn56mpP42kR3C8JjhKq1Lon2DfFgzgHFS1EJ778",
  "key1": "4wj1cRvSDWJcq4SvXrSUdmSo42eV5zhFKMc4L4sNbVQFDgVyfmo6ZmPYpWmAFMaZgPDjB9nUjpyyHRN29iZ4vEJQ",
  "key2": "3yXeajTA1ffMH1xVBQre9SXmpKVY7AWGZkq7Mas4LdaPn9L5NbZnHMKeTsvXg9fU6Toqsd3K7mMrSgs5vim8Fd7N",
  "key3": "5VqUbjsTB7HELK17G2obAzPxZ6C95Qz5jPJVanZANaGksTCF7CZDyYvgPBbjn7q77LsDsTFn3j8bd86TPtt8JLvy",
  "key4": "2FxTWR1mWdv4vJaxrfN3gyTtAycNEXyTpfM859HaGpqAhaVrRyi5NHPT6uGXdfbpNFCdbycVGKh8QSYFZx77ATM6",
  "key5": "2KeqDKDG1e9MsinDBGcbLCdq4knCiZXoHRPJ856YxUvmbb6zawEVn4eqfNRGDUzVT1yL5kxw7B7ZDeupT6f68nbZ",
  "key6": "54hZG2mhUT9AZ3h2muQ2mZmKaVM1UeE2LWDpcB2NQhReMxvAG55jYhuUPPyatPrm5XrJYWEfig2ErDzc2fboTyid",
  "key7": "2qFvLyNt9bHmRSgozZVtwSad8JGfrkpyudwqnqumR7GYBLr266NbhdPMxMF1wA4rkxYcY7MtVTWayAzdSv9dxhZE",
  "key8": "ktPYCUDA1iNBeV1KvC83Rgk8xAMQQMBotCKd48Xu7SA48UiE4pxxM2SYj4EjCcCxk1tQUtZw74qGwK45ynkMyiG",
  "key9": "41tHY4p8gsStjxtHjoCnxYxvpa3krzxFZZFriHjKfDe7cLczTiiS9z5R6KYjpVXe95w3ZxkzQPvBVEe3Hs1iqpy6",
  "key10": "2sS5Qsm436jQTd4b6mqhJTXKrM2pjbLEGYmZj7bL9EsrZfAMgGRNsd9hYj7RDxqwR9zWk7jZQbnKV6XL5xW28yaT",
  "key11": "5ZnHXQbmujUi1yff6PHdofhCmL9ir7jGMt2jaifuTEWxfDrtKPbzu81HUD1rwHm6rfQ1KU3pyCn6GxsaLnLw9jWM",
  "key12": "BxuGigiVj1JfnF62bWGjrFNJ5NuBeySMHcGokd2KkJCQnC11ZGpuG4x3WALSEqhpUV4GMBfrx9pPuxUcWEoiJiG",
  "key13": "4FyVNXBZunF2ax65sHF7GLtpPHZWxmARgVfWvTF3mYzrRwWxHJyk5MoTonVyu5BcuUuWf5beTE9H3Z1afet7bBKx",
  "key14": "2kG9Y57EfkRTbcYdVQgS7ZJTow432KaRqnWyqRi9g4ugFMZBb127LrY2sJAARG4RzYByiNvXsZRhEg3xg7DNaY5j",
  "key15": "4E9yKEkySXduxEuVriNK2H9vhcpFiPDowLEyNwdgpSwKyieGQm1KD2aQ7XjNnYLMk2N7aYJUr5bfLXhq1ACdRxX9",
  "key16": "2K7frcuyJwZoBtF4FUvAzhfSg8xFnizDXSxTGeByTjKqfAzksx6yeXTxERo8ARz7kJKhEwQ3aJYyptkYxt27HGtB",
  "key17": "mBJJoHviwVsWTpeNoG4ZXahuro4c3i4X7bMwvRdTDBhxWSrmLC3eeJTaXNwSVGNmCrsLon1zN9bJqK1UPajmuef",
  "key18": "PvKEAEmcan6jmeFrBNhnWQywfVYZGQu5K4q1qquV4JrN8gedc4eECcdrEPSdmbmt6GKYYEWUtSRMosQ7U7Xs85s",
  "key19": "2mQqjhQ9Abvk1Bmq3P4e1yRjqkf1UVhBNW6rxv4K3RcQYmJoSpZQBPghvoGe5nKoQn2tvPvPNeUDWrMw5ecWhDJ1",
  "key20": "5gahQMFD8DKonJHV5bBMNVwDPvgc9Vx8AE83RykgtoH7vaXnjPM1QjukeDuxNT4jR77WW1hffStJqBj9LQzLanpb",
  "key21": "2bs2afJ92J1yUstaHeuZ8eF2CZM54P9Kh9TbvWMMtXQdByYk2jxVHySWaDpvQpNMTV21U9y6rzw2oXvdibS1hSFi",
  "key22": "43fydAcYLwCwQVaHkWywkBNNCrqhPhqwE5s6vMTm9JKThRm3mzNwULL1RkiLtzZx92Zsx9qQKzH3BGio4sz7PyPA",
  "key23": "dSevZhM4qhsTM7dpgWWkjfSpjpaSdYs6ANKV6sx2Vyq5eSkGLrY4BMvjMqPBKbFMMqNysRC7APfLLwpi5sMRR6X",
  "key24": "Zxji1KJoGqGnM5j1At4Wc5C2RdFNBEJzJF4NTHZV9YVvENFYVJ3KJCuXGFAseMfZ7UP8KzcMHqNM1kywpcmTMv7",
  "key25": "az8nLY62dxUDDzxUFfCiNuDzh6aKjHrkDWfN6FFad8WLK5QtchdRukcXc78TmAmBXbcJAMHW5qGRuNZyYHDictp",
  "key26": "xkaRhNCsK72BNzsxip2d3te2iaJBbQdBPHdpoTMgHPDgCG5ttNB72oZtdvbkJs2XL5GhQQxatVyEiWZoLX4dRWJ"
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
