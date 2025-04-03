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
    "3nJ8oLFGesceGuz9iMLTQzC5MBtFezcDkyJhkXUdih3QT2jto8Nz42NNVNh3E6bsmuWHtkLt8vRFht67hobhieP9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jtwZE4Sa6gVwsLyz2zK9G7g5HNbSK9wSWjsbMqNPL69LR5W37h6XWLMz2ixgSXsTt7qFyozkHPbeYGCh3sPEqNX",
  "key1": "26DnYojaSjV6AS13tGEotjypB6g42pLUwZJcojQxhf3LVvfmuQpbBws1jxZUBqfAKVvWEBh2fd5VVXvGhuVjrqFs",
  "key2": "35gDWSFgZVjcH1BgFtJPmECbQ1cPe2e8jARUXUavA1mqQGY1XPGYAkWj4zhoqeuBATthWxd9FqHZgPFzMXRHVFJZ",
  "key3": "5iVtQ9ucEYcr2ZVihg23F3bejV28MsWZmnv5SobWpUyiWivym86vF6A52iY96vSCJWWPzi4cWndu32rUZydEZE4E",
  "key4": "4Dho8fyEsnbhQUSd9uext9NogZYcLTj2hwHWamvSu8Rn6xmR5p5966tkFjptvTHL82PUwnFo7MGqSXh6qFJq9Z5o",
  "key5": "4Q7woNPyKKTswzvVpP9Fi9MTLpgK3f6f2zB9XFNHcwLFmTma1NYqqg24HTda4EJgYw3qm3we8hBBx8v7CP6VWddu",
  "key6": "4TaLQcJZVKTooEuJuDGT75MG4Azo4g2mvUyzpaRRY9vjRTkkuN2xRLgc6Xq9zqZKuYUHpd3vnAGRKeJzDNgH8GiB",
  "key7": "5gijuVVxXmkfdMEQRWCG7ErwrQs4NbyQuZPJjkKbvmcx7ZchVBtmTKoj1jj7Mkhr4zQmNotrai7FJ9qdzhvnpA7",
  "key8": "3r3X7KgmPevjAz291QwNWX2BKTimo65NgZKDpRsnMDbqJ6nud8So4hzeno8PqGnGV1Ga9NbWJ6T8AUc1BprPktuL",
  "key9": "2ki5vxirPKSWFUt83CXniF2tbPbhZjayZpDj2ZukbsxMw27fVzZv1csLZfNFtfuwUWkMhSuznj5ttCeTLcmh1Ppe",
  "key10": "kKxzQXrurGfx84Xf6yeFx1hawqYBywG2ur2eD2K6x2obryK2PLgZpw76CcwgQevc51AUcq2ytd3hx3iMZbvdRNF",
  "key11": "9VEr91C1KmG7L4kFWu2fuMqCLN4pXqtwNvzZtmVqXpXQ7pLHeXE3sNX4LbfTVk993N6yHPeekMW4VoNKtdgs2rJ",
  "key12": "4y6HQCMyuicSQRx8eznwGFkC76CzY8CJuj5cyWhiBevZPUPEFxYWCp4iovXA3HQCmuE7MGeXTwMUS7Kp5k6isRF8",
  "key13": "DXu45BMy6QaMb9R6SPDDiAL2f5BCWQigFrrdAR3An7utmyA6gaqSsJCRFEpVi8Q5EuCBzGn6jT33FHpsHb714uc",
  "key14": "2NcbRDPyGzo3HdgTK7ZVQvSKg2s7iGnuTWCSfh4MzTbHRsSruN3SJerbB4bo4bq8JocBqigBUsjD1CTuQ4AuoVhX",
  "key15": "2FcPTLX3R1rUP8EaEZ8DJQo6KAxNysGuqqZDDDvBK94vzKBaPXrBNqLGvYDxLP8XwqwB3SnDCMyv5H5THb7gpgEm",
  "key16": "RTKiUp3X7ApN2wJoDuUMdAwS9v93ByWaoWfigUGfzsRVvAdSMiRUvZEuQgn8LTWDP9URFfARjxhwzY3qVg1datL",
  "key17": "3UHwhUiHnoaiCTgmq6YuvsHcYyFWiVwsewELmV4oiGHQHRYDGZRepzs5qgTZhNrQ33YQYNV4S8mQiFRPSkkdrKph",
  "key18": "DwDfBYRnEGdeqMvjWFRji1igQkSxL9oegWpRVNXWkyA9yDYvxXbFgFghXN16DhciaenymYMRvGTQjEtPEDvCm9C",
  "key19": "57meCCwTFNTcfCzbzkzX6pYKoCTgmudwkUKZzCrqRzzHxXRXvwPtCUzam4H2uhZ28bpRevPU5CjQfnA6V161dcTK",
  "key20": "uXmGAaRe6qDcBzrQZRBvUWUnGD2eP7WHhjExUhszQvdc9aLXxbj4G4XKM1UyWW6w7UEFWrZrsfZ89naV2qdUJdZ",
  "key21": "3UKNaCmpt9qf7R7yb5BvRQPbCUHhdzrqSEWWn6a5cqXLSBVWjmZU8ub7FGUdYX73HhQAizpkK2qMwVoCtgYWEQwm",
  "key22": "LeDW2FyhpWvwk4VmbDfAs83W411RyFzvAYoXPA4sfc58oKgQigqZFVXNoyFfQriWvLC8Bd1kQjcm5vFgD7CgC9o",
  "key23": "5nHXbD9UW4vNReVzYRBevcw4fnsrJY682ZhbAoFB4UhF4ttT9V7X5VnXdN69oVeWMuRDThLhvMWY7hJU2Xcg3EcQ",
  "key24": "asa9CKsTTYebs2JXZdUyHrowek8Q7o9EGHSWWzieLiVkBzhe98pyZnabLcAEAnenWNtVNehUiNfdDkR45SNyxDS",
  "key25": "4RN3tofuBwhvUSdt2LsqHf6eYDM8LBnYvm3SsBqPZoeXNE9A8k2Sk4PMRKwREa7z39JbCLR17eGNLDQrSJcF7jqz",
  "key26": "NhG7zNpqGKsAQxD1TT81j64jqDnwBqGC9FZH5T4qkubPF7Q1Tr2BNn3VaD2r2pdvr9wb94M7kbqqgokpArAeTXk",
  "key27": "2HVohbkP95Av97amumkRrYJhrkc9XdCknRLBsq8aT9AogUwJkJMXBGmkgJagsGsrHGtDaE2HCNAbFC6ar3vCowi3",
  "key28": "4MxAd5ti9sd9LNUEQUjDXiu2ucF54CWRBSQSioZ7LpSQdJ2wVSCWvrjKsmhqzJgYZUSYFVCS5hosvTV6kHjF2ipU",
  "key29": "3d6UeFidJtMbcFRo3butRPN8u5gbrFoVBq4KTsyqDJZRYdS8fCVJix8mQFVaRfELSi4hXcu1AKakKDXC1rjhano4",
  "key30": "HuMqMwU7CTwMRP4qNZpansmNfP7WpYf4X3BhU9uiY3XJU9KqgEPcoWjBuFzN6By45DMpdtGuFKuu4zEAXUmYRav",
  "key31": "2rv2hwfeEcjjkAJDcN3epum8cD1kBqhmHy8ULXdmzqA3ucfFnAiDFEbtWDvWACxUuKzx4deQEGCStSSUL4x8ozXu",
  "key32": "65Nzh4iGiov14BUccAzKjbYMV8ZTqTzbU7sBqy5Pk3Wk7kp4QvcHqexF2LMrrt2a7ZL7L7GNQMfwoEDpimbXcPz1",
  "key33": "57B8WEXiBhTFD5Mz8d9n7oU8PGHkWgg2FA9SDCBV1ogjweJUNiW2P3h8pLtzVH5TBj45rFnp9V4ggXcNxMBSDMiy",
  "key34": "2VrLbGsMZMUjNeSJK1GgEGVNgCCChmbgbUmELcMVf4cD1nMeGP53iVJTxdDpt7t7jVHEdXwX8gujJtjGdHwEF7tX",
  "key35": "yduKCc8kdrgnEKrSZHbBdKoM69EHdSbkxBupdDEt3r1CiNbHbGXdrAsw8ERY8eeiMXuP3Fx1osfL5WkejihFwmx",
  "key36": "vKVhkf4Zk7d4Ka33JefQiXkXa6e3MSCPXovz6Bj72y1TaadDoKAiQvZYtW9rCUaj5sj2818HT9n5UWyDNNeeKbo",
  "key37": "55d2oGNDyhCGajUeqAJFW7T67e1SvrM5hxgbtpdvFPGpK6EM9JTYcpMtArRwxB3vkAWQqAbmH7UcjK6yP6cspSWq"
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
