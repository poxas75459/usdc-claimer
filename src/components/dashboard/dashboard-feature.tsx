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
    "4BaJ4Px9kgLj1RkqA2ihYXwTzSAdQ3KyS3tN2EyketYEQu6z5kYheu7o4t4ucQb5z1kTBrhd7QDUDu1sDV5zBEbH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wU3jav1WeCRTZJWkBAbmPRLDLX734Q4axuSuw9iChBFM48Pj39faeJb1wT7u14byKR55n4T38DcahcfEN5hTDXi",
  "key1": "4VySw8YSG4mtqKaVaHfVr97uN8iXqC4HoLrZMimgYPuyrbq5ibDn78JsCc1m3Wvc3fsyaubxP71eQmCKTHr6fd8i",
  "key2": "39ao3u4KQ559GfDrR14rjKpN9De7BVN3W8hz5gjJnABBdG18dQa7YnnaTj4foQv7ne7vPi5r7Eyp2FxFE3RwiqQJ",
  "key3": "3srDSHenTnc2tfk8TbiSWmiL7CZNx8o42Sn7miSYSYazMmk84emK7zGS5X8nFNi8um3v9N3BukdZErCCsUUBq6tS",
  "key4": "45VKgXQZCc2ADTq7BLcyFknt9CLkPLk3UE12CKTnjC7TiZVVD8iSVWzSwXSFNN5cNdPH3Cbeu2yuveYQV9UuRiDW",
  "key5": "N1e5qtLRD85zmMFccpwVXVFqFy6XRa4QB5p8u7GHjk7gh3Qcr4U6odRdeWDz5N4pPsQNVNzGa7oJsSdLLLHCTQc",
  "key6": "4buyES5tq43Db3KCgQ9nnAt12rFmWgH36srhZjBxE6E9sucqBLwhdo7e2upSgpYhvbqP7j56bcfYs21iVJV3ZPGt",
  "key7": "5e9ZpChkYmx7eeaGMrn5kAsZV2YXS4p5CLBqZdTNQwhEQLF7WxWF57czGJX3MpJMsae4JbX2mZtTu18xwSEVyusb",
  "key8": "4hkfQgeM2vc5etfrqJ3LVygMcqhGCsFqjoLHVpkN3ozeeZ8eWvvKJvbghze4EV5rBcquA2kqnQPVQzdAK6YrChH8",
  "key9": "2zUC6RCMKnQa6wCe8QMSBA2LQrsR6hcPBi2zaKpk7rYzSEJqPtrS99vAkLeuAh5UmBiEyc5mBNFoieZMuK6chJCu",
  "key10": "VbiCngmLcqrVQRFt4kaCfy8CyKy7henTTNASvEucSmUA8pXbvz7eWbYHPGxirBQmiYq5MYghBcH6qa7S6Ugx75k",
  "key11": "2TphLmEu8Ux5cJd315kaSQxNFbNqMqBhy6oSCVarqDSiU1kmDBpEoS5TUWdxpJkrokxNJktQ8pXUNRyUcHqZBP6U",
  "key12": "3AH4xy4mvVLpxSMJPUGsrFfYW1RiXraZ8nnuPz2ytNeRfoinXTPoL6XqTZJMfu9Zhnf8NErfTJZNfg2gD4YRCVgG",
  "key13": "43szVmLqJUxLPD9W6DVDmtjBcgfeKZKvNy7g5QGnijniRHrzDyFiBkNiiHbVZikkwBMCAq96XQ1rjPDyuVCRP9UC",
  "key14": "YhkdBzgsThVaNZcvHbhMzUpALyKTxUQkQAjWpCj2x5vrHCZuV4NX6FbMsqW2SG66LMK6qKmiXaZYpEKaNvSFXty",
  "key15": "KY4CWNAonL3ogszniE7j4qbeBkKFf6L5G1oASDc888NTGfSqbYsspQdv5QKf6tsUAfNjp9iJ7p127NPek7ZxKC4",
  "key16": "5hiKhC1My6HWFZYVxvmntpVRVw5zCkVKRzmWB9VSvyeSnnGnquqJk9b2axonv1he8FYWAW5gL74oyPWswyokEsfF",
  "key17": "4V8feF3v87vZvwByv7mw1aW9XviCFyxCvyrCXyu9EH31gvycWSEmU2BtWRH1h1EXJHTHYq72aXx1HQ3AZkJ6Q161",
  "key18": "5r6NoZLMhyLVrpD9mu5NkRsJwAyw47ZAXyCR6QxQqn9kDQrveJm4tEc5E6xPk1c1TjVgszUSokUQrVHVEe5o2Xvp",
  "key19": "3PJjaa84eBQcSbmYqDpnKFwE3wJ3hunmSersXGfzxR1PSYDSmVVtDVviJcs37KFSEXv8KqG8NFnWa14vz646fiyD",
  "key20": "31rnCh6qMhuvaPix4Ue9S249RDMyesetPVe4mwS3CkM2fV88ZiDsS35fXFKMTCX3MDQb3q6XLAAh9EPtmypKLbTd",
  "key21": "41Tvqiy347PZTEuwmpsJ2jTxvUTUe2he9b6UMn9Z36s8NxhnB3yocxiuwPtPm3Hg9RKPGygMG5JC91iYXAjTMYZD",
  "key22": "5kCGtuAQ1cPw37KrDCuVmvRqnJUcvUSjgZ9ZHtKWDzqpdegTz2y13fkJcSGtjhsskdgD9MmYTAv3acxPtayaB1Xe",
  "key23": "2pDhfK7NuXjwgV3J359zUuMQB58SneeGAuSXKpZNCsSbb2vyVp2CCkAgiHAghbpKAvFNWU2FaWzB58ok9jxAgVgu",
  "key24": "1SjsEBGfd8Xt8ZxCYSjcrrhDUtFRzpJQWVEfybWXXDtp4qUzxAMiFqjReAjTAWSknVZa2BCckscZwwyKLVwezAp"
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
