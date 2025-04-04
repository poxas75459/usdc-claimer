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
    "4RqyiQAczbPE3WBKEQ4RA3QWizb4YDqprjJodEbKNjajbFmbn4ALiVmGeAPHVJsVt3bu3SztxQTuSeivTfZo6gQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5d3ptp2U3bsY17VmSGXwKghckY7UXXTZaVB5dd2Lywp8814J47T7AXkfU5mL2R4ioL36Fwn67SUECYZfJ271kxtx",
  "key1": "5sy1QDYpxjw4iEetrAxpr29XFvizJjxLvK27m1w37aCtqxkZeKudAmkTNS5tsSjLQahUNgcifcb27c3BExyPA9XJ",
  "key2": "67gczA6zDvxgxCxu7fmKjHybyzVcy51fAJsye9cSjpbRzafBXi1pFX8DrenRAg1tUQSyRY2HaHuSuGTKC7jYutB6",
  "key3": "mpLRACapZL8WR9uqUGG1gTNQMDXxSLzvFqyZQRjZYg3EQidK4Si8E9D3ASNq41Uzd647gWQzehDCZuV2tHqY8oY",
  "key4": "5PhXQhM5a4wGKozoMauCpUcaMEMEwcuZuPAWvZVNTKq8DcTHeAd9kK8soR3WYmcxsBSZ1B9zRc3YhVSA5fGj9yjX",
  "key5": "2GAVidvPZbBu9FsHmtPnW4fgPjnM2kti8S3ZwveXStiuiPEgtBUyF3gzhmZESv1PLW4fnRRvwyv9sPdVeTQRydN1",
  "key6": "35tjn1bGQ5C8FpmJFUC7umphkViAvZQnSW8QHYSGMyCkpyukFpzuGxY346wwxPKRe8ia7mNy8SXpxSX1SUk7jBbn",
  "key7": "3H4Cz5FVg6G4giiacXPrDmJof6w37LsAyKunHypGGQtNFSnqPVgqaaWExBCRNxbLi6qkpN8HnTP4WNTpBLj7n2Zu",
  "key8": "MXtC6NTvuoFX9fqwAiy74jFbtdpuZtGybdCKaAqHbTu7sdqyrkKPuqEQGYKDvXrr5B9ryKijRrdJ85kyvHaZ4WZ",
  "key9": "4SjoqPU1hjVXwmcQiniNu9QjYScaDhfA2ARaJ4Kaokbh8oRgydT3LaWRGnqwhoRxS2oeAfx82wQPiSVrTdCe2vZp",
  "key10": "2QFbvv7aUJkFGRHHNJdmVTS3LhXBbnCqJmdgHXYvDgRMf3ETgBvKQY2C52oTR2zkCZ5CXZbnhfGW6YJSrCuetYjF",
  "key11": "5RED5CVNFiVJQCzmNpqETgaQLzu7JDBJ3Nmd1A4UyJ1QhDf3LLxMuU68scyCiesrjn6TEvW5gdtSs5kuALaAUwd5",
  "key12": "3B9fqthZNfvh91kf8urvNqwb3JJctgPm5VbE2E6BERYoyW8tpPwMQph1wXCRR8zVoF3h1xRSNmtnEr2b9K1aoZuW",
  "key13": "25cadonans8NEZfFdiin5winyEPyoqb1CikSw2HUemw5miUiUQDctcp4NUCTd6KNCwB93GYE5pa87Z9LgZsdnR9M",
  "key14": "36wky6QicmXEAGXAFDgaw5kbqxxrhx87PTB6xPjHzcpenexQPLj3vQHgwxf8w489p4e8C97mMtZzbfeQZjEsnZ1k",
  "key15": "5WusCbBXQA6BM9iJyKoFKUtL663XhyJAoYDRLKs3VK3knszMpejk4cexJnAQ24wQyD12A51jiaPQCKeckz68Jtos",
  "key16": "66EQND9cnK9ZbybtBxZfSLqCQrRSR646CXH5zwYcNhHBk1BH5GYgnvA7eFAsGFj2p7HKuKF7VwPuw34msZQeRAe3",
  "key17": "36ZMHLuoaSMd9no82nHXpCmETD2yxGbYf6y4sXirVGApYujYBDtpYbavSXCqbZt1AeUaSQ9XUrGwyxzdZt9Rf21G",
  "key18": "2qY4BEEQ6ZS9gHDRFdtRzVPAswF1MX3imVznSBUmUhNfdKBrPSxoYcLiqoJUYyWNc5cXYkKfYFgQFSsruan59oGB",
  "key19": "4FmfwjkxZXrD9wckxcQggto4pTCCAzGiryJhxzZxd7CwKzbehzEiemwXGuzC4kF5eFnG9foisEbkapHwxbtz1Btx",
  "key20": "2EqLvxr1iS89pcAYo8YQLa5kRucQhjA2uY4uin5BhTPEVeKkugdDXKAqYgqFircEDemLSZKruVsz3KBVgcLgMN3s",
  "key21": "58tHHmpuxCkZzQegASeLgkX6q32YmCthzXJdQp8eP8BoQT9gFrDEaZVUN9uJ94rMwV4fAi3A8tLwSZ2WAFhQLpXN",
  "key22": "5DfSx7uuJMVL8NYvD2EhrDEw1XsvDpHHMbGLZqAUf4oi6kj8Ed3KxwVqpacBHsysseLPRtbfTU4Egf1uxjQ55FuM",
  "key23": "4cpYxFTsuUESyFPUxHZ6KjTF9BnKcqqrSuVAtULnQy3SxDAPc5mq6Sy8i3AWtDi6gbQcsodbE7eK2RuCnp4BmHCY",
  "key24": "3LqXkkruWvmnKUmHHxxjQAPB5HcF28J8cokUbPUS2afiZhP9zVcEvZbe7NFY1XC9hEbhCRu42ams28kFgP8kodLt",
  "key25": "5Dopb4zfWngASt3N5mwsJa15VcjEZyGXjH8WvHCHAqV638ATVDU36hkeFNwNwEyTRM3hdxq69m9XPKbJBEGxucps",
  "key26": "4hBSXhuWZ6UVmiA3STFQtwKKGPyvVgAf7ABVs1hFx812wyg6FbYpEdwPUwvbXhyjmB1ghL2oRaLxXbhMJ8d3oEsp",
  "key27": "kLJuh78CtHh5r2CUaCt4iMzzaQkADmr6NFSrmzbsHxhTBUdPZmFpQd8pMozJX4CHsGb3TBugx3thCVok5Y7r1EV",
  "key28": "C9jth3uwadTnbRHvJrsb8wqSnBEmAyiGiS99Tqc6PCydHALfEjShuWfsShZyG8RcPYb1rjJ2MRJAewmc8TwmNF5",
  "key29": "3cQn4jGg5VuvhwZbonmzPxMJCnKXbBpNbD9GVaefnTGCAfNE5VMSc1WeS1rP8Wdrpfs3k85CMmXdT5EEPxiAQVvi",
  "key30": "3rFw2S6z4fARW9bqifXH5yeCPbu9m9R9uMWoy579AUp9AYzADzXVdy9nS5KdZWLBHayUi2MkyHoqYZ3HzKa3fWeB",
  "key31": "3bypWFUdDcudvPBZuJH7ZLaP6LXwQK5gh2GAdeBd75a6kPq7G3x1AMWB28TAmcEz7EwstebSTctXfVyxts4pocTc",
  "key32": "FLMJGu318yzca1x5MGn4gSt8rzxsxzzvADxSE79AXAfZpuEKQBHD2yDr4T7kWwJbJgnSZMT7aEGwK4atXLyA8xJ",
  "key33": "4AMvfM6NAk6bn1LJAiGWHYj9TW7BUWUKffavxpCs4hVbxfY6MbCBsf8eNLBZF6ZMJUrfPXaz5XomF9SSxCKUBWjg",
  "key34": "4mSeMPreYXGPAHSfuhtdhR4p1d1C91a79TPMNeU628s9ScRWnLU32syziRezUgRj1acjceRWVjAWATyp174tw4ue",
  "key35": "2UuMJCNaCGyicvFHH6XYGx2Wy9NGJXsz2ya5L4PAkgPQm5dMenpBfBGMgpcYbjgYWopu2maeUrYddi4fSbhUHsdz",
  "key36": "5Duk1fjnrNJG7aQ8iMvhh45vBSCd9kYw6ok2EjXNTKhiiJhBD4woqXdwX98bLjBKC2NffXN8LReicnexeqSJ7usB",
  "key37": "5CbbCe63t3CXzZ541Nn7ahFzdgZL2PmHZRYnX4XdQz5EFU8ofbZoG5RXJjVNUbzaqgq6LHRa7Vd7BiAWDxhiq9ms",
  "key38": "EPf13qFuKYqw5NFJFZfuRuJCBbugHtExownRNFNoTAmU67hnEN2D73ganMC651NjaYKqLFnq5p3rSF7kY1UXiaX"
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
