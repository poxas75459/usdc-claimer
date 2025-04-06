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
    "LexzG5yiTJmoZgGoqsWHrKA2onACK3U7LgwoXcV5SrejfQcA4fdrSE5rFvjYsTauY2E4VyZjsjPeujVAh8FsY7H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6t5dzB4CtEmG8Bc8c4U4r5xParp7YbxavfKsa3FFnzRoXGfkn9woHnuAQed9aKn51T3j5WayPR1EVVybG51eFdM",
  "key1": "3WwpxUjLrmBzoZLeKDE6wE1LmxkmPc2bSfSjLzrALdamXbeZSfnC5FwB1YQognEyfj1XJQqiheiBoDBpUR34v7E7",
  "key2": "kYNhEgNauBFFjvPSQGTfYww9Se4zDXWohMgjWto8Frx7ohWYMEXSrokYhhEFYxpxLokjZCDZK4sz3n8e3ih1aqh",
  "key3": "3xXtvREZfw5tsBz5LJeU241UjGCE7rW7reuXwKpxMAjTe5HaSaTp2AXkBvaZDbHBW9U4JTJUyXJEnj8fjjcJJhLd",
  "key4": "4dfVta8B5EZNqDBA8pPN8ZFfHpsX67Deyc9H7Ffk9sV81fSU6xJVdnG5BZu5WPGCeG9EmeGUrVFC7AZAVdyrgQvj",
  "key5": "3pGRZbFhHADgtDDgYFMHiP2cyHsxSXmHwnVgDVJwb4epMG4uhmhqAQaiUKZcv2ndDN1JADKieegkrRpjUM2EHK5Z",
  "key6": "jBKdWbLkE4UFaEdA45nZeZC6javN8LCVzu98hkeg33JUg7z2Pk2E2VrycCBpwaeBVJh9SuGRMnQjJUFHYYapysg",
  "key7": "2mQtTnp7mmUwkcaYd8mjh792h9yX6ZpqEcyeKi1vd6LHLrstEYnDnokpsKGT1C94TGCAVGpf1TEzH2DfUPD8xZN9",
  "key8": "2JfY8y1Zqq6M3Upafd88Q726dCPzAgpBXc35KEn5YqvHzJkwHDqkw6J44J2HTDvEcqv6FWroNsjdJTNgJ3s7ZZNJ",
  "key9": "R8cWiuuRy8rRwYYEBC5TgAdUT9k6nNGJdpEmuyJmAHuXvgNV9c6JCD16PHPqPqtQQdXytiLpr1UjmEp2bcaXadg",
  "key10": "31Th3RRoxLtfXkrjFB2hjrVL7XRGJ5DaBVQC4SBbgF6uLZSEMLJ4DEsT3cs9mzjb3hdYmCNPsbeXxEGToKcH8CUV",
  "key11": "WL4SVmGMWd2eSZkbXyH7M68oBog6AX48ELS6YuDhPbBxu2bviMPpu9A5WxkRsqPU9aX7SZVXumGZF5zcR7Zj3H9",
  "key12": "2JekLZyEugYGWkYpRHxeXwQfHuFz4Sfdg7v8M89d9k6GncGgiFPzRH6RHfckJKC9qP4YPrKHLN33BaC15r1QQtFi",
  "key13": "4T5q3hyLxDYtfMEehGFLm5JAhjMBux1nzr2wP2GGcBeeLri9ccGpZBWw8R75jb1sAqcEEFED8MH7tooHSBMmspjP",
  "key14": "ZhSLSZ2uHerhqy9NjhUr11TFuXvmLwLte1Wcc8mY7ZT9HuEYoUwv4qew6TgB6rHmTuzRy83yZ42M8uRDnXPUMco",
  "key15": "4Hw2WujdFZm6scH4FegASSRjrkoR7JLPC8JU4vwavb55W4gCrAmrjgedkzvnUt47Z2Z9hNDX972gGAh5JVEN8y4R",
  "key16": "4A8rC6Jedm48TaLDjRwHfECoxRwsurAVwPPnYGF65saNDvcGrK5SkXhUMy3Bdm7MGnuy5JfziWkp4K3CGiNuVkam",
  "key17": "5YKsGPJRK8dWBvKJ7fESkPBdsN9vvMV5BWpGa2LmKC2yCVJWNbgGkBoL5L61Egp2U5MixFCHRYX387fL6FdMVSiw",
  "key18": "4fLD6gZ41jKX3WZiVgti9DQrf6RexYMcq9gMMTyD7gvnj8XcQnB1kgjfhAg4Pt3RxFK4KVLjCegPd7RrT3AvaupL",
  "key19": "2AEfzDYcn1idDd8NcG1XU8Dk4dnTZVTjkeNyyLjJVG8gCAQbEMhT5ss2Rh8sG12wr2SSd8Xpg7tKjkDcYcB1i25p",
  "key20": "2mHtPiz2JeyFcaUWxcFrJ6PKmSU5ayQeSfXupuqRVtXLXMVanrG9YgZTB8jnSwCGFgKJBDxsBGMqQmfA7hL2bngw",
  "key21": "28ftaHvByWLkahcoqT9QBJoYeNJMeLX4CEyrMBjHHEoRnTUdKdoXDj6JaEVGaV91zQf55BJy46tST5tXYE9V8DXj",
  "key22": "5Mrarxpg8PQhgP3D9o4PzuoDc86b98JuaeKg5ygTQ8dW8Q2m1fKJMztn1twRfvhaxe4dZtg6iGLDXgvUCaEgaPeL",
  "key23": "5VhfGJVjdGyTFe5UXfy97DvjEry9aCXmMgr4bymqc35csNCbc3MZW4134MT91a2DyJeQCGyA4XyaminDH8Mrc1Kn",
  "key24": "4QSTtJcHt7JwbS1VJ5t7MECdN4kmfXNpqJvs9RvjcSZ8oqY7t1EU1Cw6pnRqoK7ac7L4hKBP2Gv6xokHd4V9wNan",
  "key25": "5J36Usr7CnkKXey4h33NPjEJsU54Fe4tJJVXVxmxEdbG4Th1xRhzUSVfh8r7ysBQBKG85CgUnPtzwdaPphPY6oxy",
  "key26": "42W8zFf8bsAiv2zfs7yEipBt1bjzgtffUGthUZwuCMZ2sHcMZUxyEbJC5LktnKwibR7p3LAaqgvjpi4iSaKrEEK1",
  "key27": "3uNBPzYDAQ9SRAcMXfcvbu1yuQs8vSVT9yPBYQWrBUGhZru6pYKUgaW7S5CUeuKGdertd6gdrg8aj89csoDHy5DZ",
  "key28": "65XkHNgHEnNPhP4NnfVZ9x7s8n7BCBgG96w8f2LRS7KynRPZ8PS3gvdPSZxyDejttBLP1ercHHMRLX7p9pGrw38L",
  "key29": "3h4H9WdDxEPvM12tLoB5bgDDGdFYir7JEj9cNMigoSEQakGLg3fFBbP2ffNTevBWpvrqhJxffYRkZeqYbq74EYFe",
  "key30": "5sGTgMA4ZYT9a8FJq2jVNmtknJNzpZEkCqbm3xkskYgXLwfuyNbs9LLZEmMVfHM5DN8cT9M48aLWVJtzrzbFd7jk",
  "key31": "5tzmN3XazU1Dft55pr6DzPd9NtXCswKqcsVGbKLDtFXBG47FX6RDUEdPHZ7sqFuiqoCSMdWCcCXZkshsxfWqkdCB",
  "key32": "5tpx6vaSVMxSRBcaJwWkmWJjbMJLddqTMwFpnbDiUwEvWmWLSMyYBEDNpp4f92FfWS4E9S5figAVb3a9X5WaEEDg",
  "key33": "28JYzigCkd7KvbjG2XiAkV3nfmAHRdPaB9qWYFw4tH1Yw8AYBUCWBZW5cewPrams37djHjuMqR4AGeifzEcfjJLB",
  "key34": "4Zayu9584qyMpzxT5LaFNNT9v4V6Q2yg1L9XKrpSu72qUZRnq29yrLfiogD5WoEveNjDiyw46Xy9NMcgUgXZwoen",
  "key35": "9top9CSqzk3YXW9fvwfj8eg1Zs9qS7FzN3mHDJjNk1BvvmQa3hhzesWqNyuwNee1Z7U1cBCLbv6zFTUgnuHtcej",
  "key36": "4Eiw9uvPsrhYZzK17H5e89TJYL95LNzafmKejatFyTDwh73pwRLAudfCVrMzxaBXJq5zZyLtJU3pPgqF2VAdhDQ",
  "key37": "3B2scX7ut4eQw7uKGRQKJyaMAv97TdtSc72tc4bv7hWM7A8Uc1FjZHnZAZBgwggw6JDxu58v6tpWtxXoXvfHCCmf"
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
