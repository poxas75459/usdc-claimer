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
    "2WEjKa7ERHqfQGMo1B5qv1m2GXqU1Zmo7Db6pfqov37nGpsR2nEDvVM7RBRyXziQND61A2ntxTYf3An8JzniZ4rt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cCm677ubPea46wJfum5F3AWuWGkZB1zzfWCMAErfuoUN4SztJXxFBxq6eiMFaoPFStNKLT39cfMc6qMN3n3bfi3",
  "key1": "47PN4D8wmd64tu9oYhoT9FcNbiy34RtUbrhy2Yrq5REqBPzDPnZ9FbG3LXv9rCovA4wDBbnvSWGQREyvL4HWA2Ld",
  "key2": "ZzLqu4nZpaCTqLgHtrehbUhuNhqfsstHKoTmk2uM7GN2wjjZVoUCZbtJF3FKvincchcM89hbMHTLZxy3pX78XJq",
  "key3": "5SXwZF8JAXJ6XCrpWsVvsx6VMnkPWLV7rBdRAsBrMifwQ8BAysCzy9NhqfqisrMbCUeuwvkzdK3D3WcSczdQtRJR",
  "key4": "3z9N9ACFnUstQHEygL8SiJBMnTG6Ncy5MrVusFpES6d47QkQmc5xNRq1DT6Pdu76xf7TcCFZPVeYdrubCnXGqHTg",
  "key5": "hbMy7cpGdPkHXmuryY6DMYLKDBzxo9BAp3biuYLSo6hvBrQzpSVAMKWTADfet1DKWGHiedXG7o6vAnpWgd53NNF",
  "key6": "662k5KNdSzHybgJMjFhYQ7ph8Be99hGqT8JictWuoTR21rRywt6BE1vXZdHL1k6opqprAYFrJFabvkgvGJzh3JMp",
  "key7": "6Kdkfu4czP2CYMBCGKuZ6ZXFXpYSkGY9FpDWNGHoT8qMx9Atg3WHgjMo3kPRZ3SPZYaQGMZXmfzyGLhnn6v2oJG",
  "key8": "2QbaMZyF7f4K88VKpuMb6AUVdh6DNPFRimoWEwaqXMq1EEjifzFB6rPUgop88QYnqYkns2gHK22f3EtBucTvxGAF",
  "key9": "2KGEJhBJcYpbF73PqJr25xF1U3HkoQajUNLZqrF6m22Mq1zC2uhnnXAQ2vC3rSAhz9nEod4F434cbvPq1H8vxpfQ",
  "key10": "4U6wstW48QsD7patYtbHA4QJkmb3ehy6rag7e3id7b4RwtSw6pf5EUbRkyx5MiYbcwxhKJeKG6VApF2vE2tEEmjR",
  "key11": "44CdK2hQ4LU27eQpqbeN9mUj8AGqqHm9zp9vrQTaeUVADkMJdSDr92Gp6Fnt9h2EYd4Puph8mqoi8mzYgweWM3a",
  "key12": "4CAbjzK38QK7ii1JahuWt7CLwL1q54gZomA6uyofq73T6akqfoMVWF75QYkweRGm8U4M1mF3jVkuovMx2zYqm74q",
  "key13": "o9HaiooeYws3Wvy2641G1dgP1ipuLomq4RqxQnPr1y9ndhkr7RNz6BnANHPMH5EAne1eGatokbdjmfT6qBUWBSi",
  "key14": "4gHYkjfJrAtP6gqBe8euLxxcpfz9CYc7D9M8B6c7zp4CSzsLpTW7ZwJWs3hzf5G4kobnG38ZbkEq83X6M8Ksyc6q",
  "key15": "67Hq8T5grJC5i6TdPMSBz5S4wc9tCz7UusmZLLzHRMs8MWoyV6LmG65VMFLytmUu3gQvhXVW6W1soAG7oqSs2Ye5",
  "key16": "3eZ5mrjcBZLz5E8xa7vASZwVWzaUZnxuRw1d5GdYkXej2i8E6Fsxz8nGgdrg4dZhyws2kbKnUFD6XvmjJT6twgnr",
  "key17": "4RYrZgp7ph99D3X5YVApJoE6XjyAGd4QtfGphaGiNWvSTpRFx2m93JT8fVFY21SWsf1nqXR4Yq6djBJohmwHmoED",
  "key18": "2Njq6UmGAeDgkG1dajftqG63GxTd1XbC92L21Se3fTvMnpCEGyhR5L6VvNoeBhK2hfCWpfNa5MHawgWTCTnaz3vc",
  "key19": "2tugu45QPx9fRexV3jZbVsSVzwAYYnnQjxw1VUbwGtc91zp6QD7nHs4pQkRkhqat2cywRcuVzt52CGgtkcgvkyYy",
  "key20": "3Ly6iQKPXNvD9gyNam9wJmu3pR3qZXjyUYZrdJowABiVwSz5ZARer5ADjNQ6JWTiDQx72hErW3SVKbgzpo8A6urs",
  "key21": "3u5ujYY1PYn3qLWsZAZ78bRpMgqbt5s7QJNWviBabDwTCU8EM6Fp3tXRqt8birdHNuk6x3zVyKSmdJYbtjiKZfnr",
  "key22": "2EDo3FaszifXvjYVFY1YFWk2JTkAAATDWSsFh4KAFEAZyZbg4jeUvct4VuMJXwScHmyTwk2xshT4piLKv3EFaUW3",
  "key23": "5nX2TKRNNJvnistuo19Uutjq61LHeMChHdt7BV81MpL3XJsKbTNMSDLBhhBnmdtuNCd3WCfGfPaWuWRM4WXwzmoE",
  "key24": "32DKSokVawvGL5RNfpu2msygJtZ1cVxecCEBZwJWnWyjjCdEpbDojSWNXoAm4RFXfnvxu2Vq6rxQNYz3kN8vSVa1",
  "key25": "5mKUVFm5JT1iXP9nWm7bZrWNBVfiaLRtsNXKaUDkemYBh8PWNkw5Ug7EaJc6eJZwfGjgMzCZiwy3ZfgcU1Wh5oMV",
  "key26": "37EXs9Qng7b9iceD8nHTUryFNp9PPzvUiu4ME4hYc4i9WtU3Jp8YCuML5RTGANV17Efwxdv2UZq3Yj1anv6iALHn",
  "key27": "c74bE6tF4pYd6doHZymZfZD518ywMtQizUefHcHF2fdEwBEkEqr88chZA75awVJ4YRmDz7gbMQrPnmegGQFQv7N",
  "key28": "36iSnMWpMDDyGEAcKVVYcHwmybk6mBdD1epZZk4bZi4D77mEK9Dcy6ueLwxBxnhyhuyCabhVvozBXg4c5rDNt1VT",
  "key29": "wQ54rXPrgppfbgfquHK2zVLmmVxx26mLmVFT5fhswevVAKWuGwW2Sfj5o22CRTtdzJeUJx8pPZqcXRL63JdRL1L",
  "key30": "4C6Te2B2dGCtwagnsGMhcNbfJoxRaA32fz4rD3pb8vpYEmrY9LKxUH7of12K9tgWUNRDmHAFXW4FGC3xNDgUsgfJ"
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
