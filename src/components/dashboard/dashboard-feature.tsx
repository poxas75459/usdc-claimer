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
    "3RFzV1Rc7QyN6diUsafX4wU5RirdaTkbPW98BEoHyKyD8mpLZnCVREQLWp5PTCKPnrThq76TzQQdSQtuCcDzLXQF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Mge4xTtnJwbXNQms3VERjAPDtYh1o62dWBMuPPaN2vMh3W2kDLZwUgqWjFSKkAZvCnXA3ASD8xG7MBMeb14TBu2",
  "key1": "vwUcdMw8NEUoNF5DeBC4WaWgKpFzNWFBHbT1KVJnFRkWnoy3hpp5sdxeGw5P3thRtjuNSgoVjGxdfdfkX1rZ33a",
  "key2": "4KhGpeNFzLvbW661K6ddyhWLA59F2vSwAkqxejND1BYdmoXRLe2QZJuWYhpo9cv2GjRnM1jUWUygqBmeDDKJMnov",
  "key3": "5bwjuDUuY481czSHM3U8ooLbMG1zas8Qm5fbQEen9wXT6KsZzb9C1PkBCnAwut9TFFExfSSGE8y9pFqfD4QVKuge",
  "key4": "3mWGeQkAVFDBmMwDMH1ue2aESgzLZTjiWruq3giGiEHrumXYXGTtQaXg72ayE4zLkfogbwwq2kA86UzGEYR2ezRs",
  "key5": "4L8SXWF7Yev5Csc2iY4J2gbqbXnEdPJspdpuDy3PFioBGPrgux8JaxtvC7QYAPXbRAPzSiKMp1xgxeGdstGN5vkr",
  "key6": "5Bw9Vps3hPMeRAoYuWvFs5Hdmsp5ftLMMoGjRZGtpBACSpy4Ya59iFDpraYq81EFSeUbgsYRptuLkiAKKvhcsg9T",
  "key7": "2esYWFSikDvBmhDmHPx3gFPEe1hfDGg2wADnfsLQB1KyaisDqyDniwBeiGk8ARU4bx1WCF4BQYnnW2UDwMwMz2aS",
  "key8": "4vxN12voUmu9QDs3VkhnxFEMCFMYVg2P7NFihQRa4Y9mJduJHkcS8WzWnXKXjWQkPtpzghkLzcxnwj5KC9yc9rz3",
  "key9": "2r1n2RDnMi4GySU5Ppebeqc4qAN79GudwPnTnZnvNB9umvkqYVK1Co7HjRhnv8NEQKeE2Pk6QakwvQehkrR87Bhm",
  "key10": "4fzATK8gfnaGeSLS62wsxE5JYoseJGHiM6sZ93uEZTRRovykc9RBcp61ELex6zUPa44bFcR7di352CLqWABixhHr",
  "key11": "5Ss6pvs76dwVgfVBwLcE2oNHmM99LtUnfP26WjgmPzcZm7N7yLPZ59vdadjyo8etNCLwXRf9oJJJrssUAgKYRy8Y",
  "key12": "2USvGYfWcaHMTGwz1TSG7mLArd9mESwcSadWJL84rpa82yAB7GST17gogtntpoLZai1Yy8dkP9edGSkcAftYueYf",
  "key13": "GAJTK4iHunEiDyLAHUQYLp2ygXEsykcZpQ9wPFfjwqguSDAWkDoUvQdA3tg2jTCQitK4DJeXzVnAKHFzxkSdYu8",
  "key14": "HXWtgmqiv6CTLMftSbvrveERVKEWcmoiSMVePLog2LHL7rr6VoB1uL7pmSjeteZujH9BU1GBzADwT1eb2GLR8ZL",
  "key15": "3UmiGFfVae63FpbNXQwCHyS8riw9rXQxwP8Zu29zPW7dQhteRtGX3sa4nioSf4sDG2X2osEoehnJFTK3nZh8StvQ",
  "key16": "3iePoayEnZCA2GZaFx43F5UjH8rmbXyN1aKCdWr54aBivpC6XZBZScEc26v7uDeEaiDi6EHaN3QBzoTX2VzBYfux",
  "key17": "2bPt4bp8VAqcLnRDhfPtbBJ7RL3LzuCEBCHQByAfx6THn24ZgcfM58eoFD5ceB1QaArqDqzVAyLYCtiwpPWnqgdQ",
  "key18": "4ovuqQ8VfG2EupD3czVBMt83E54NAdj4hzeWK8EjDkGWRrJTFzaUkWmjP2sRdqk9L4QB6paxDNzzGZ7AuyoZNZyp",
  "key19": "4dZa7FSLoCwEcf5vmyb5ZKWVyqREV7zVbkztTLYvx8rkDDTtoJXw5UK4kD2iZduw3sCcZ5GSXfnzRhwYYZg3xhA7",
  "key20": "woSLnEAeitJB6u566Mskbmet8xrtFFwDn3j8c8KuTNT26GM84dUNsnDWbdJb7HMVsdSBV7iTpEkotskcty8PboQ",
  "key21": "zeydjJ9qKJfXAyVA1Gjw9hXtiXpsEs7jWGBZ6HFK9h7teu8vrJReJTg5CvCBwJHQASjoGDH8zNzPDmDdFNHVwdu",
  "key22": "4N2HoKWcVgpp8CCoW94EtxqQio1rv9GWFinUj5ZpT9Q5Gb7aHN75YrmvUDySHWCdTNcK4tGWrU98r3Bf4XfCazZc",
  "key23": "238GvWUzNryVoR1De7H5ioCErHvXuc919bzswgZr78ANqrCwty2L3A8dcUefw9Kkhyc5wSgHEjLameaaS1gSpRyh",
  "key24": "2nCx9jgPYz8um33fHSM6nbP7zZBGKy3ykN4GgQ4jgrAsu2w4hZDa8stAkiTiFcFj6iYvioQ43cLxF7YTpCPRT4PF",
  "key25": "3Hxvtcjwmn8dFbRQTtei9NhXPrXaBvbj2LBTe4E1wwPgg8Rgv2EAMeLNa9A6y24waMnSmF9tWyPw8VU5dsgYdtJ9",
  "key26": "3bmDqFxveesBMQZAUv9TWENBXtUz44HFp2unS7GzFxdjk3vQzBQTRGBtjDHQvRLnSW8X6sHhuF3KbwMQ57aXB7fk",
  "key27": "hUbCA22bpkn97ty26gX3xfHxCaGyac4VPV4MTCjt65kN8oKB5hT1Uy74ea7wmfq6ZfJEgKC6LnfqKLbz4LwEKyY",
  "key28": "dppSd99AawPzRuWN9nKmvKDqAd1oEGuSYGZesp4qr5TTQcGY5y9uLQJn3hQ6o1VouDhAvojtcnFQey6qqfvS9BU",
  "key29": "5xJxKt2HrT6kvZXoyxyX5CxxiCWpa5QCoAzfmCWAnp1Vopq9sXHoP2e7brJ7gQfpEu2YUrbhhLJjuAQov91U7AQ5",
  "key30": "5kBnG8UKNbq8Yr1mwcJL9dn6qJxrWruTMEByQwvZwvhgSaHoYQQiJ4z8pG4Z6GRzSZw8uuccdzmT8o4ska7bCk2b",
  "key31": "ACW3i1gb6rcz2indGGnQ6ZngcUGJN3Moo5UFm39XdJyxBr8LNw5qjbPXe1u9JKbQ2qPny6k2zQ3JzuhqsdCKhmH",
  "key32": "22mK5dAxwAX4XEhgDpJy2bJRPVR36Fi8qNF1LS3PQ7J5WBKSwBd2oRw9mk3Z5Y2aHU1VSRGTjWGgLof8TDT2sFU1",
  "key33": "616ZnbkErXf1Pt3PufeUgfw1TPXvnP9nVELWfmhHS4XFvrftCuY9mnLgJFdbsK7A145XEbX2oh5mCDeCmPoc7jKJ",
  "key34": "4vhCgJ7SPScrZ8TdukTkQ8cPf2QsLpoEaz3kM4NXitK3FpcvPjDJgKrfCndqM8nfGsMM2nNBviweU3t8DudUcKdm",
  "key35": "32Qd9m9q1KzUnDyay3ZT5CEaLJ6uwV8tt32Ncp4Mw4Wh753LVzQtyhJDu1UBWbupMpaXdgXsGYiZ4hC7BW59aLVy",
  "key36": "3ZVKUQXvgL3nLR84aWK7moPAm8jpK84DL29bHLmhzjFceoVf16ZCvmQeb7M3qDvVLfc3swvKCLLQuLd7GySD4WVA",
  "key37": "3txEuH3L9qYthaA3XdcQapCPy9i5XkMGSQkxZ4gH97ETxNzRhpLP9ZjQgdH23KFChb71hcJ5daxvXRFS9a1C4iLW",
  "key38": "5vfZvRbe6c2c25zBtDoXyKPpQSpisNZmbaxJJsMeB73ZbYgcwRqzVisvkoQdYZg8Pkvft1j5hoGGf73aCH6UgDbt",
  "key39": "5fFYnYB6KMNCfd6BphafHEEduHWENFEnqZ4sDqi9G7y5fWcy7sUPCfe7U2HQy8kroo8AfSp3xH9SHfprtUfw2xR4",
  "key40": "k6biidD5Sfvz9AuyQMXDtKRUSKnJLiHq2G6a3s4gG6cm5VpyfFdZReZzJHJGvWjyv77yTJGWv7V5vizK5yekQLV"
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
