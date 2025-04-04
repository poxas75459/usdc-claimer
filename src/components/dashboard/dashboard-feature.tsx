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
    "4vWV7XfZVaXsVSp42pEZbYruDSusxvNXLYTKHpkbu6aFFsYPoneyVNV6zrnFT6MfjwGsgpJ8EgpQrckxWwuqF8aS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aopsmNdVntmLTHBACJ4MsmhSwMhejeJfwHXWVnAVWFZaRaKt39vqe9vML1HkaFWTL878o4b3zFE3KgzWcjc2ZPF",
  "key1": "1hEKF4cZcFTLfDCSSkCL5qMegwKjYS2bjsBkvr6ZxhdnaPSfFWKC2mK97kFJYJuoDKwKHUgRFxhDTudwyyuHvjQ",
  "key2": "5ymx3L1tEdYjx5hmQDJi7ynehyWEUTZzjAFsaJFCLaNj6LCyWbeRtdTr61bVBZqYFMwjPTcHxvsixCUtQ8itcAEu",
  "key3": "rCqW6pvZGmy2apdFW7PevyBV4o1xw9whEXqiX1NqyJzSsfLmCtUJxWQBQFJeupDKSKiPrzsC6cfcoBL7nJLE6Kq",
  "key4": "3sMnZ6ajrNhDXoGo2r9b2gigYfqsq9kirrH9bvMWZUcr89cLD38mFFuuB2CHoXaChmsWkyrRiJk2grND5envD259",
  "key5": "5GYG5Uk8C7zLLEm8uutRF8pCnsLQppLVrgNTGwGRsX5MESDeXmEchPavPpCHUXgH11N3FUn5Nb2dY6qNZtj1FCG4",
  "key6": "5Ra2BMyS8PMSb5PHfMWd6SUzyCgyiEcSTexfZb6zF9ubjkhdcHEhgYu7SNGDiWWUCoCShwrVb9yr6t156SFBmMSZ",
  "key7": "4mzsYF7LkqVEWyZxLUiHFLZHBzM5EJwLjpjRDE993F65Lj2W7ryZ4TYME6csvQM3eL4xciNX1zqQS5SPuc596x7S",
  "key8": "c7uL6htmo5D3oQrVsLu33rrsLvixiEVsi39y1AeBaQnkroo3CgjUDyiBjE1bwd8Hmvhda93zF6LktovHrNP9DA9",
  "key9": "2yFu44MCrEAfr7FTYuirV8NnmCJraD5oXP9BHmQbjnaziBjqKERNRoSpVtSKCTErKLHQbcVwscL78E8NG6wf7yw6",
  "key10": "5mBSLwzRKtKEND5RktceSyBYmjo1fg6PPUhrzKf6Sp3TUatPeD5SVRti9pdr1oNNQJGCrVkAouKUufDwT7ynh27R",
  "key11": "3xsU8A5Q6F4cjSsn1CkM7wF6hBDkifXF929MRLEp93FMFXkZnnzbCbtA1dhVmZf91yFRpcnevQ5KWWtFChxq4X1Y",
  "key12": "dGTXPqEobE3cTzAWikM8tdeNuHPsb21K6BjfkhqZhMVS1NsoxzVBUex745fQV3vwUoQTjkdC1BvwFCbUMZK1Z2c",
  "key13": "3NqkvKsWrMGJvpzpJuSedisD3tF3KVsHbEyFt2iP9NdsYMeLswSgoqNC3DUavC7L2WS7u6DAYZQUTNe8KkMLjTDp",
  "key14": "sza2wFXGEg6qQBtzeM4itVHa7LNwDegftME9d89TWV8E9Epxi5rDpY4xd3CfKRhekdr2ffiZ7tAG5cZTrCC8KnA",
  "key15": "2KmSXcE7EnsRm3yzMZYuPtYCwBUZYLfJXxX7yTZenNHRccbqc9LP45jF3JV3HG81DfEVWAjLwLCvHkgRNWE2hCVr",
  "key16": "4AVAbiXEhQEcHbVwug6PFFeahjjirEXgdfBvmoVHjnoC5Amp6nA46nskmZ3GE2EBpMxjvMRjskps4vBvCbG9cDCr",
  "key17": "5zcQ1YCwNCuwWRgDKmLRwsnfNjTYv7kL9MUDWUYiShn9G3txbF6rDBydwkcQa28BuECrHi3pagRKWWUpKhRPbSPH",
  "key18": "66FTmdipgWNLihBjMddfnASuVADABKg4LTKkaRvYN9ms8wimbuz8armyv4XaxcHKMdDD2FK3StesYu6zMuLmjVJX",
  "key19": "3ZMsrq7fEVMnCNE4FaLfMb51WQ4ji78ZtM71ELuz99WvRSDsbJXaitQ2sVfN89jyW23qhHkZP7kbisPRPL3rmA3j",
  "key20": "2wa2gsDaCw4EasnJutGdo9tjcAeAyTBw2qQ6UiAvQCVawEhCn6bUgaPDNZhpS7pdvADZctEQ9TyjP5MkjmjE532j",
  "key21": "aKsrGsGxzENGUGZtZfH858jmLN1hs2DYZoiXFsnsoiDXZDa8C4oHhVZQAjHYY5t4wfpqX8FLiJpzizG6YkLsUxq",
  "key22": "4f7BLr8TDP8DXHikK5QtafGgzHH3UbSckpbVDhuDGxKgLYXdBboVgjG7TU5MZZ9MDphbFpyefM2S5x6wHoHpDwtw",
  "key23": "35gW32x8Za2AqApdYJCCTfcB7wW3nhdKVK8L3EMt1wSS7J6rxdu5WTo8TTRYRZX1oF5KUU65TZExhNRC7oG3aEjy",
  "key24": "3vF8aLeqhhNv1jC63ZWQTzdmFMcha2Z3h2XKWmpfYnUYi8eZKsnQ74hr6u2xwARQ61uF8UMdtJh3PfF11p487Cik",
  "key25": "3oU3465w6qsyKx4bjZeGHdPNFNq1E58L5JAno7EAUuX1zbqRsgKhkQhvk82b6Dt92yfW8ief1YMQAGjso5MftA83",
  "key26": "3ThA8XwgCX2mmNjw6XueAQ9ojKt6g78abiz87XB4QogcjehzeTVx9t35HiuVK4nGwHvwxDkCogyVbfAX9Pkc8oBQ",
  "key27": "5aJmL9s8jwu79ErjL1iXpCBhj1tyeuXn5jcnUkQCHmG3aTYXT2MJpnw3MCMv4cvuo865mq9SnbgemMyxVyazQV88",
  "key28": "5ccfdQFv6uhRwAbNai7mrHsTikP4rqQE8dQ8Qd75qXKBpJERDdK9A9Bjz7kzevdeuTnYjd99pGjZYa5teDbnp2YM",
  "key29": "5eapFnCLMu3NK48nt7FR8L3ct4FhdkBLtHjKJnw2kNdPZuaqpiRbnefit7HfttaKCaWqRdgjY47VKGnoQBmGVQBE",
  "key30": "2iYuJJeBJDMGT6xhyXvC1VvY3prqv9eakCDEJJRaNuyLwQdEeZpoTS1wtpM6TE2DVp3mB1LpGjf2Q3ydbteAdQE1",
  "key31": "59G2ct2SVUowLJiLUShvfAxpkBKw513zb9xu2V5qn9acwiDNJDZhaKjUZifHbCQZehzSmWEUScVSjaXGe5MUZhTM",
  "key32": "4uzi5ay2iqMqbLmTTrKDS9BmEs59LznfBTocur45B3AFpGcozNNXdMk5HTqTQMLtAmn3z7vdr9SNEqhCTbWra8PA",
  "key33": "GF9YEceeESP25z1wXi1J4NJ76BxkWMxS83znaXxPs5foD6yypXsAdnjR7MNXKKErJMdRXs5qY7Z8YMvnjhAviF2",
  "key34": "Aohu21WgpMFN88ZcjH2xpSC6sh5meaWkfVNftYx646y4Ae3JRBDkAKTHs7gFELPpau2qUX3zayZSQcuMwT31fem",
  "key35": "48nTSf7dpp3kiyk97o9FSiEBWAvpeEexkBghKf8s1jPbeRkX6e4RFsqyf8uuZ69qp4xskNpkYVYsVxnFgbEJtmN2",
  "key36": "4AkKQ6Kxzgwm96fzFbLpJTMzKHXw3QqygKhFV9gS7pjUcpJvGopZ1yYbAFD8hwpXgRk5CeaMDoo3krxPutiFtw3o",
  "key37": "5FKuuas42qSskfbdZfyaXYn2fAwrbyq8nMv67HmAejfTFCn1nk8myzqfYfpVSSmYPqMZczwy1L5JBSMr6ELsKuTs",
  "key38": "3grXXpS5r3KqhGh51BuLWLqS4aRdqNyGuMqPL1wsKw4Yo737WzYPAu2kCK7kzVMYSBB1yxg14aGTYzKpfcjvDcNf",
  "key39": "A9MxeZN2p79ExBnU9HCrYVNBxuEpkuR53gaMyKAfqm9UxTTCfVwnrqjCTZcmvKwCvmaVWhv3MAzo3H7ZE6XPaaX",
  "key40": "2dJpPkLz1opSX4Usf7g8Ys2ZCVnbia9Q5P2VFuMybNwxGwtePTZzXTFBeVBC4AnRYG5JyESc7riuBkHpNCVdoPus"
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
