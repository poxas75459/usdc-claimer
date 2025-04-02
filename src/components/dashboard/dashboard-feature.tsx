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
    "2ZnJm2ew59VUnboBMLJ9VKqjpj51aPUNdzFzJxJxJMsxNRDbmZHwbmN1eMHs4A7buSuxegStPB1b84fRBPpcsKF5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GFcykLy8iJTsSLwNBCcF7Ccuk3Bz4Xrj9AB2bJqoY17FZQphSkWyVNdgRzCjyZmyfLHHxgwo3jf1BVdynWzkhzk",
  "key1": "5ZSnRnax38ewS3qGjwPxQqRh1ddNp8Mo8sHDphmViAvZGc3Siwg5CedqEA4ojD8jbP21Gk2HNDZHjaHkiUKnXfu2",
  "key2": "53XurqV4YJZKJNigT2nvhx8WJMGD39XfvR7YBzDuygaeDXLMwPkZ7RsABrmikyx4SDCkeQwqCkuJesJD6SAZRn1g",
  "key3": "2Sny8RoE56fkETiQh2PNFsb5whGV7YVPqMRTtz5JmzADxHLpZEmsrCMkETUiPrCAtwx1gGrjaDifuMgFemEKiWvU",
  "key4": "3uSrAVwYKmQCnpZvoSaWUUZYnDFNuSJ3knkvcPV8KcMewx5AB81KBsjm6NGhWoiYjmnCJpVXDxNqdku2CH6eoVWy",
  "key5": "4RKt4kabXy2UXWzSmZg8Wi5J1UtF7Y5i3t1DyND7B13jv6sUuqub86yJUxv6htfhRuzAAfsrZ4CmM3T3MaqggVzn",
  "key6": "55iV2c17pWTFNkJ1tkRuoNE4iBz9jiJwaruF5cYGrrXj8JSrXqXcBBG3bY12U5BYuBuUdDykSqjB96SiQzsDytPN",
  "key7": "e4i575rWBtkJpsTQWjfqAYi72p1XuY6mvxDXtjAE3b6DQM4K5jmBdEZtoVU9AoLRhaqKbtDsNQFZB62ByGsz1Qz",
  "key8": "uKHomFnkLJSXuAF6EbPzCPYxJoFPTymLpYogja5PGBnoyEvSwfcAMiHJPjcBicZ8YdxaDHduA8w9BK9adVJngJK",
  "key9": "FMmpLLJuoHqyfgvXPkd14AjVhf8sM1PPpJvAGNaNvyvi3YrpFHXJFnxQexwJDPasoGPTNutqN1NJGQMeoBydEoh",
  "key10": "4XeY8SRU7daxvGQ5LdXWt5GjN4h1yCg1vF3noMhXxNk7f8erHUesSCqxtjPa6umfdRihmbxjinA8KVNmWBWzN7f6",
  "key11": "3FxM5hhX6yEU6pgXYeH46jVRy5gKqpwM4ZrSVL8pqth3A3DJDWEk1mjx7Czg7SbiNHRVvr2xJM5STHnPxMCmN5GW",
  "key12": "2saRvAdTCHmVPbcmyaaTKwZGhVNGEi4qs8NyZquDtAgmNANMmJ4v5DcnUQoRKU5Mdmfi1L4N6HDifquzNBdMryD8",
  "key13": "3PRDVJwcoHBDsfHM3EBxgFroXZKoQze2BvWsFMTBaigvm2M7tq6SXMxFT6p93GpeM4zehuqCmctrMTda1RdozYCE",
  "key14": "3EfmADwrWhW4YRijaLCkNANERwQ4CUYc8xtwagBU2qT6oxav6ZNy6jhNJnuntoCxUcbxnruGVHxVibbK8C95wusC",
  "key15": "zeR96g7vgELpR59TecHaVGd3XT7cKWhd32t6Sodzez9mBmFbf863dB6tjDSWkBQdJYbErf9h9ZKCy1nRVMCpSsz",
  "key16": "3Pws72fK7pCQZFdPzoq7mHFhx73ESxUMsXuduHGbnAGFTdS33h6zVoChCgyTDHjMXfK956RaMbLAmBKasv44Z5BJ",
  "key17": "cdkiNs72xRMjwsmubG2u7VxzZ4FQU2Tbma4RMvdYKC8DBzRJjkkWH4ooKatrUnBoVJw3ydtCXquFkVB8j919fcj",
  "key18": "4u8iySRSoAaCe5hcranjrY73Nw9VwmdybPwmjoJGw9pHNbVm1sf2hZXNLE31fHzzZCGsvbPXvdrzPNNqHWApnJiq",
  "key19": "3iCMgStCgCs5uPKQhShDEDPkK3p7Xvoa86bZ8ByQy9Ua9VLYAKhHbU3YQ4U4oWp4ic42ke7uiikfwqZUHZ8faf6K",
  "key20": "3xswNUiaZyF7tafss5nrvivqdx6kUo7cbHf4pzxKmKX7gzMDEnAHs81hvewwi4Mja1q4UhgAy1FhXLhaWDUFNzvy",
  "key21": "3D2brQSmvrEFwwnBSBvFvYF7tTaKjjpU48vKwxypR3oEp6sieRWGu9ZP8SyR5YbaaNw4H5HGKNvDgCsqRJXyBnN6",
  "key22": "iqpNGmL1g9it4HxGuuAo9UK3daXX6nobANoxdZyRHFpFgNfEHFNFsyZsQV4SzwNNUCGYL3NTdkmrMZvjKXxHnvt",
  "key23": "4Hvyn3cu5nMqnb5E9YqagYE4G8fctJziNeD6tqfk2RJfYqg5Nk4oeqDxq8zpBPcraKG2v32dhGdNh7aaH96Ug6aK",
  "key24": "5QqUSnrkBLp1HagRXvYRfhKMpYiR93h8anheKWhneVLAtcuRLjcFGr5PVt89cNwELg28wayn1xh41VCjFhXPfD39",
  "key25": "5z5X6iaVB6C4pWzv8NLn22Krsn9thxcEkbmypxe986T417dtLk9q2pHYoKj3b799LpN8cQzVJUPD4vHF5UQ2kKAH",
  "key26": "58ii68AbyJPcco2gyqE1cWEx1HUEdJZqJmkDdUydHVLHv6mYjfGpmMyFTsGtxXss7Wxv5qoyKX9daBNEn3ANBsr4",
  "key27": "4q5sjmNS9QmxpNbhB2MwnU7kFL1VcKZ2QfNEBBuLJ2bSBEmYTXYsi6vQqV8SJn41sa937u63CKw79dFASkqyUtQ3",
  "key28": "23SUSN3Yj1UJZ3dk1rU8pRfeGeNzo54H2aD78zEevpuUoM6itojNzQKDBQZZTGbxUSKNAKySp3yEAvh3QWjxgM7k",
  "key29": "4hM3aRgTKhEwvcoUeKbYMRafQ6vytZoSmFhCttGkmrVs3dd8ht6ZAWFbTL6jKFUKqicRT4orxBVzhU329EecRTgn",
  "key30": "3vvQLrs5uvc2HinPERBgYaiKaiNsF3WdbVuV5FqdxofSAaAE2CAJA1ygGBZnWFQXUADxmBEpRfZM2igbxr1qXqsU",
  "key31": "smzhgqCY3dSoNVbhLKkBP87s1yMdimD43B6fSRrqTerTV65Z9Pts8W5tWQ95huuZoGHUXCbw9eBGVQMKokK6GhY",
  "key32": "5CP6rPfpni8isesBvsz5B1sj6BVYv7RRKjMkyQL2VHMAhon1ccNjaHVLtjKJ6Xhwf47C742MijmDyDcsZJjeMjWi",
  "key33": "21V9exkLrzt8BsnL1g1z1SacS78PuSTDqYm1G5jH1Qe2os3z8JauNYCwNbii5oD36RAdMGKbVNAWhP1Dn3JJbkFj",
  "key34": "44ouLRNgo4uZm7dYmNEXEsFW9qgUQGPURPYMMyt2MbXonzBKaQroQvxajAEfLRd69riYNjpqeQK1mrNzk8neZwZJ"
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
