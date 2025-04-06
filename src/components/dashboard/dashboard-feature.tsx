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
    "2An4vpWei4Up3uNWrMivyfCv7CwqPvtFaR7N3QJr4hQWCibmCdmvBfmYu4Hg9KDXHocTMUoVqdQv9J2aW2QykuE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nBzqYsGQnCavPaTbhs4vtC9p9Qkk7ZRdf6VoCvBCtbYj1RCkPHzswZeFwDoYGZ5tYcMkkBrAMAvQkMSywBXFDjW",
  "key1": "9zXGBVLVnZvmDiG6fWBor2rEKpTxdpVnXZVtXoKiehFfeSsTTKRhntfzP6bKt8szVTQPAiXYKzX9k573jAqh3Ch",
  "key2": "2ba9dDbAC4eKWzLc2doZEdfogxZ2U8XUYGc9LLkzbTLKNnceQk1L9LFEuKh2m7hz1wVYAcx1ryjXSx5vbD4jhqX5",
  "key3": "4kc8R3BCyEYXyUSZTUkFMFvzLEqRP8gq8UFiGsmn7moeJmWAEXpXSDEHGDmB8XqzwXQJrLo1WGXKRHcWTWdq3Znc",
  "key4": "4c5LVydvzPScTTHdERw3MFzQjVcr2WQUFVsck9QV8SsePRf42JticfebEuKE9XdManHr6dJESkcqerZnbD6QtwUx",
  "key5": "4gTPmHixdA254yUnfNaC8cPkKLKpVAW7UBAErPzP2wcBzaiR7h4edn6HtWEoYKH7U5EBMhyZJDkZu3h9UxhBDKrW",
  "key6": "5mdU68ZVBE8rYXw96vWzJ7xz5ZwcBefMiFjTZs2XEK2xLgDUWq1J2ogLYQw5RQQWXKFdrChuV6ZRzCQC1deS85eE",
  "key7": "tBy6qfgUYURVNo88XPMVQDrVuS28mpsG1ysmN1BHsGZ731qRQAZPwzr1H9QCP2mZACVCgzvW4JWJ3nTUbifWg5A",
  "key8": "3mgftr2ZeqbLCrkNc1PC5zCwBCz1i2GPy6fz3vcKC3x6KqUMQeJzmaPCzyfvowhpyGLFZgnRRGJ4rijdMQhsMriE",
  "key9": "3tu1UYjuJykZovE8v4c4G34kjmip3jSbhLjNGp5sTs29mRKdTnbx9EYQEuR4HMmkY7o11g1pNyj8Za9nGZJijdNB",
  "key10": "4z29WRg3etqHCWsnjtZcmqfbikX8MBEZ5J2TRG13QFVatmhWiJeSSU8HXBraeem5KJnkHgQB9YWJ8Azv3Nxvyx4t",
  "key11": "2sMaHwishfuVGVeaCrsaEoucoYRiUdu7BwFSiQrAatsHiE2KYKdRv2Tpa6F9dGx1tBKXSY2uuYjkHVTYTxQ4UTyT",
  "key12": "57hbiBmfbr2zjfVxtbiiLcGT3vZBAjnMybsXnqKrbW21huuGm5fAheVDKifz1X8RwVF23WWnZj8tYYdsxgxN1gc2",
  "key13": "2YzhC8fz4Tjo2pZqeQ947R4yHYtUE4LYRRr8F29L4Hgd5EDHdn332EYfphrGbJUU7bVGPmvsAJgVXFGQ42NEQFKy",
  "key14": "5VuTE9ao87cuAoDERw8UtbURWiGxUSCCGxdJdVYwVxMJaf7jxBiEo2Q4BjMyuZ6JHJDkGSt778jo1aWsR2xj6zCd",
  "key15": "5nEhxbje2koAGKLKui1Ygd7Eqa8w5pzzV7dwHuhMNDtZa1mYE1tAqfcbFPRN49nSvnfbDEGwnhHb49K2B61oRNnX",
  "key16": "24CWNDpNSJEy3pMRaJem6M5U3LS6T776LDTum661EbapJF7SPGdcnCNbAky1FsWBK24Wbs1kbYgsiC5rNosZK5WC",
  "key17": "5uXjuXFfs9XJXnKdEEcs6pFJ9NBhAwDNbnuivrGZyaML8QY87PDNvAP8noxJjRRmwqeAEkRifwkR7SA6xDUGBjaN",
  "key18": "61aY3bRRA7AkT1hCtY6i1Ryn8fLqDfY8vMZ1xheQ52A3DCr6fTSzKp9zXPSHJ3GMt5QVCfgcQ6geJwVm4XA1shzb",
  "key19": "5JVqDHTwJXsfJqPJVR3cEmG6WwTZMpnRaMZ1NNgP1ixdJQZNQz1xUzYHnFSsgsxQx9AbMEmKLNUSxUwTyz4LSmAb",
  "key20": "34bTiF6cuiv8gW4QwaS2LCxWKsynhb8J4d3WiKjjHjrrbPC1kCFKnmSeWT85U21VdndewTquRGWaHPpfaR1TBTwD",
  "key21": "431SRbJL78eQ2CcG7BtEFyqRq2hkMCSkSSvkoixrXedGHVHHVEamVvUBRbfy5A3k5tEXuNqWB7stmBwBNo1aEwLp",
  "key22": "udM6xNLJ9noBwYkF2MxNUbuR4XihLRWbwkgTMxrctzft66pRjL9rredCNFxZoCFFLsUGjWoLW4Jfh7sLwEznE25",
  "key23": "4deG7aaGuAsxpgj2YwzF9YDkmfjuPk24RW7pBVHNr1ZwFHU5QXvYAjJtHGiX5JeCUdZSnofYekfksqQ5WtZkyTu5",
  "key24": "3tUyTgu4HApskJMQFb2WKFK7dhvTbaAZa1c8pQcjw6JPVLjpLDxoGY3BmSYQTgX3duLBNuvQ63nQs8MXakYq9ttc",
  "key25": "V8pCRfQM2AYftbzGeXfYFCSb14Su47dsMC1Dz5vipdFisvNbC7QitJG9XkezNPyC3Q6i7F2WvD9YveGXqQTnVpj",
  "key26": "3c5JZdW1AiyiWJpvya9Xbccc31fTL2W9N5xjsMEoNS8TiiNCfT6XLxmVcrMVTxtpwZJp4RLA8GCscZgrtzzcUKNw",
  "key27": "XcgkcEof3in9SZLdNkZxTiuBQ9YDPDrkjkD6K6xzaPDa7zLCdBqEBcNV4BNCj3oyKbwYseU7nfb1EvxAnxedWx6",
  "key28": "3zxKaLa7TUfhh3DYv4rMHSHNE9pVuFcsWdbF3afaMKkYGiCCh1yxzf5GHUzeaz23xninMBujm88rpwVZ8MeVo4a",
  "key29": "A6zZoWzaNo8P4W25BXS42jF6ofAbZky1mCS9BBBhFQjuJ4MBcqz4SDgQwRAyKA65J8MXEF2m89uGkEwEEg6McBC"
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
