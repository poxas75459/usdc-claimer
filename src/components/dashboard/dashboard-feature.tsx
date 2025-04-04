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
    "4ED8yyCjv8gZpJJcB5yzvdECHySJCc73PG5qS52e2kdXbmEvmQL9XcMj3TVb1psxSwNKraLU8DfexTViyHah5bFo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aK3m9ruTqC63tJWh9JTEWYubNuipYcTz7c7perfhRn7ts94UB2enWxVHjB3cV6zRM8ozD7NysYi3peU2aeFAB4B",
  "key1": "4DN9GnHdz5nntugir4Ld3G2MBX7kRV27Z8HJcmfTfsUvB19QpQJZR13VKDQFQxADFimsep6ENdLPE3cqyDSp2gZf",
  "key2": "2YfM2deovwc1kFBdmRNge7aVXuyMarfqWYaWrPFH8vKJGGozSFhcjLBWNetkCGPrqQwYT5oJ1QpBCroA2Smwkkey",
  "key3": "2T2CeexNkNPdRD3sRoaymKsah2uxCR8bdaUgsShU5QyNawEcVDqbPGdwzAewUs2HNkgLNDW3EFYe8z9uWu2SSmwF",
  "key4": "5eoxRnaK9kbnHSSiwtF1dBVhPBPBL63jWkdq6zmUNnoVacFWmCME8x19osTKETbWBv92G4bmgTYxaxfLCKuAhKSE",
  "key5": "4gk7Xinc7PHKS311zxzVtzfDAY8ef7XhXWrSXPt1Q8gpfg6KQpTaNN1J7Y9hF1jA52eB7xGP1c467fXNo9ihkbiX",
  "key6": "5KaNqzGXCEav8bprKqQLyrS24fQynj2qxf317xavn6wiUF7qCMjd6o5PunNVa4s2PmpL5gt91dQCjpe1oDe7xeCL",
  "key7": "3ty256YbN1pz2Ckz3f7hjFpdawV3PJ2Y6JgyFPpHm8oqGJQbC9o29NZz38f4nRu2nSTWQgGhR6QyjUwsSm41tF9v",
  "key8": "5qN3G59qUiYGgFHPf2C9SY3sZ19s7EBPjNCqXFhZ1jHsA6mMT1WiNQLfoycmUQQiJdwwjRzeHJfRgedB6LzrSAWQ",
  "key9": "5b5gYpALNkG6GJTVstdwcYApJTx4wEFysM3w9RZC9Kbdjk1vE8iWz1YK8J725mRbRJBqCHWGor6SJnYF13LuLrFY",
  "key10": "3JmM7Zkg1xGCdkcvGgM2yFCmGY5s3TLwmy7WTp59KUNCvxwGYHnq5K4xWEaevKjSCrCUdLoS91ARCs2iZbduDzUU",
  "key11": "3kivraYfMXaV4NdbsmiYVnTWubrLRrLUZBh7amQfjXgMmVnjBP2QnQxcSkAS6deSB2rQf2CgTPTmNPuWdiqitxKV",
  "key12": "5GStBB9oAXtLGQJ2MNFnkXs9AZ19UDQVQBK4v4iVVm9257VCU6VMxqSVUwVvHehnVqUSgWNwqinQRV4bSU1sAFqh",
  "key13": "5bNQrf6W9Eic79QBRSKQCGkjxnttGcqojUVwU36UjgDk3c3EsGXwKPhx51uci2joVTyDyBZrpDKPkR5wiByZ3cnG",
  "key14": "3xu1BLUyVPDtYzvJURocbXaSrhZyRtkRnhfjSRnCRd1AGxRAeLvjtZdBvmFRTkXcVT7yctsyF6Gqk5i98z9Z8TjG",
  "key15": "DQfCbkPBf7GFjf3q6nVu11AgBKaL2Dio4xycV8j5qqygPkbFGw4wM9TrYSX9chn7EU1TMzCyTezFmCDYYh5sjLU",
  "key16": "2tDqQqkPWAtJbECYuvgQLAkaTTxWjy4qexzPjPtiGSewfv7KD3ieZEmDo5yvKDCMyvK2hm2rRZnSk6PTkbjd1kt2",
  "key17": "4Whq7yua1fn2XmehAf3rA4y1XuVpznw9Enurz6Mru5nJ2yWgiszq3BReqejz28Me7dEDzf5iJEHY3kZD2CTvMRrj",
  "key18": "gXYRbCFoGLTMJtR2F2S89qjcMLyKwgBptn5nPCSP2ad3LZhtH9kDskxZB9hgZRa4MPRAQCkAQSNqTmvzPsiG3Py",
  "key19": "4HCi8yZXJoSbBygHH8kLVi4mLNxKThC2RDLAE5XpmnFj6UurjHcDqQj4NCSs2TAaJi3EWiBCCTM5g6zP61biacCa",
  "key20": "bjA2qxaasoKWBrvPp12zVFSnyM1kmmiQRY6CQoxsdTgsGWGYjm82kcHG6rJLCSL26N4JtUL6WK6Xijt5fSoQSFd",
  "key21": "2PMkPvWabBTC98FNCCcSdRapxLP4vfLvUSPAn9hSjiKqpdToWUHNWorMMTBgRAC7kpzHwFRriA4YW34E6b1AekeH",
  "key22": "5jbcZCbzFz3TzRYiH9sWfYnWmC1V5ptLvi6NCzDDWE6qEZgi8vE55r5UkYTPcgVSLjbc7cZAbnRXy94yXG3DUqTh",
  "key23": "31ZcBG4zWZMMcgL22M7kyxde8NpD7gEQctRDe5Ck2WdmPVMeRufASPeGAKNhjqSrZeTQs2rvLdLeJbUSB3RXBLMx",
  "key24": "k9cPBJmj9Fk98GVkyuqiVc4K778itq8oThZNLsVsMcfRCFvhquSFKFo8xrvat1pC4yUe1uNiaRzSQYkuJhTbz9E",
  "key25": "3sRVKbGsT14B8Z8v2Aqj247p73g6v99GQjuddS6z2DCyFKbFaz8dSVqXqmwzX6FRuuLXCQe29Hv6RdaZfDyog2pL",
  "key26": "4iiGWmCXSPFFmyeeZMs5sSfsY7mfSNyMhB3Uk9Kxk6q4DmkZSPgwy4dVmyXbGUhxMNcoGEEvfezoqHdNFthQ98z8"
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
