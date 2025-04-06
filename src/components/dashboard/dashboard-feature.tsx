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
    "4apBY1XmKRaK6cKkt8kuivH3Fm993d2FcVmU6YgXFPJH2mX9k6MSj9gwPDj1MBhknezvBRZEGfXxySNPn4sw6Q7g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xWxyC2oo4rP4vgtRxM35BScJJTCsA4bZvJsY13neUza1KuKW9RZZAHUvRDmN9mgt3MmAD42KBNcdhDwZNMuLUaf",
  "key1": "51M2tz5QL3r45nDej3aP74yxqL7vvU9SiMzfA5aF9K9RBCLYFBvAitr29K4326Xa2Gn2Hu2fM3PEbh5279MhZsh7",
  "key2": "gSxVCNXL9BNRLuEZVC6iEubU4HMC34eEoEvQxq4PKPoX3uuzh8tk1BGc8KrXYyS6buA9ZBCfiaZrzdzxfUGHqAQ",
  "key3": "5QGLdCK2DKPSLiUeZatn4ChRexH3RNeybPYFksdui36WYmW1KFeCRzP6mCKVArZ35Eko1WJt3puub1o6XgCmM95X",
  "key4": "58KnVgicnLiN6bc6ujvYMTKxeeKJxYQSi3FqsGqJ3AbHGUzVxH1C4ywLs7QGchWg5Wp9yh5tFyQTREDDQJAEMf58",
  "key5": "66UoVSZ4BPS3EF7naCM1QS6ZsDzkn7T1St1womxmYZ1YW7ZKSMUCd6JTYZQoaAasD8yy6aKiCN5B9vhshzw2MtJb",
  "key6": "2xXuLvikn32EmqKcR84GGcaPKLAcuFaZpHMdX49y64ozhGt9ZBVVj25CoEaDrdbpyLJm5qRiwSp7cYjapqPR9xwY",
  "key7": "2wdFvtLucWzwEcjvekZXG6JTGdKKve3MxcyMuRG1zLgnannC7HaaEwD1KxR6RioLVJK2gS9QpEwki1ML5EoZDskU",
  "key8": "WRY4kBHN3JhRdaeBDujffYqNJHw5ri7cAPfW74aWQkufrsYYBybdkj4umo1WuEWDbMxLNitPbaaDhsdXhDKPB8r",
  "key9": "23MwfVQuVdgw3jq8Qxez9fvZ4BBhxBFNpZRuoJjazsBeqSAqcyoafKqUcHLd9f72dojCZ1Vpx5oZZHMG6R4vVcPn",
  "key10": "3V7iCGQQdBvy2dMmMApH4qWs5F4hpPHQ3tX2cSCUGXLP8RJcXnKJZkWGLG1L3eEoKpiZHYsQva77yfKg5UtexA9y",
  "key11": "39FoMCW9ALR9xHEcBLJ9fPVst3GzexHS7r851a59VJ3yxJMWW1F2SkvyNgSufRFPWNWEUF7pECFfJABo8nk5Ukci",
  "key12": "2aVAy1jCpzq51arHfXoBSJ9EbD7vLreowsyW2S4yZX2YqvwtDEdPQvytdFHkk4mKtn8hR1pH6mfoXAFGujGncUDh",
  "key13": "2T4ARqeauR6ukZJM4tHdfbjYSnuZVxwVuREoUGxft4GGJkZKyXWfZjWabjHdJ31wXo2p7mzD1q7Hcmj6vrJr4h4L",
  "key14": "3bzYxkK9YfNudu95zvEZTrbGMCGECMYknMNUdjZ1ZRzZdHttmbdNmw8LPeMbPPuFkqTZzNd52fWWq46L891yHsk3",
  "key15": "468R6HR8H1US1ChqidivYrhSLekYDmsHCsenzQ1GPPWuUotffXbBLdPrtfdipexD8oWjQVAxHTmxnKfCaA4GBYLe",
  "key16": "3qeTbwniriF9gW5nx3F4gWJxCcYCzpHZcJRv1Z5uzKu5vFxyGXULg3gTQWLmn2qMsjar2jD6mq182cuqGYKWWonq",
  "key17": "27mAkfLfjc8krA8bJZzxbgvf29koZzJqmfQmbWTHNmzQXZc7VKGbnZYH2xHx1uQ8UwHp4w9xmHduW4CPCvLSeL1Y",
  "key18": "2BhMwMVeEsuFxwXF4GfRSUyuqhXtWu2nDXv9EaHorAxcbBfkAcD5r9shujziXNgdmqYUHnY6mygPavQP4AA76gf8",
  "key19": "4fpHAeRMwybkyE9CWnn4UTL4X71TX2UbRc4u3tDwfDceteBuooMTh9hCnurThrjgndgg3T7uG7Abyt3orfDw9o3W",
  "key20": "AfZFfcJajCZUdcNJyDySAKVm95nhzUYNKpgbMG5SMDCfJqNjZLDoLXbeNk9V3XHPeSDw11CfFwBGxj5WGPfg6b8",
  "key21": "GFMC5uHSeU9mwSZCFQMso7oFyLpeY9WhAeDJKJd62pufD6vLM9kUB3npRUbyrNBnNkSaMf6YnNpPkNabNyNTqMf",
  "key22": "4PRpyYDpB74tuCsdPV1BvfC3nhxS6VwZcNHsZYN4fjzEmYAdAWJcisCaWmXPznzCC5wGF2ypKzBrkS3zCzZ2Dk7L",
  "key23": "3RQWZ2LBcED9qA9ZwpewzNA9d9KmbRK5gAgUHo7GqE6RxW3xAFz9owzFxbfnEUghgnTiTyKB7Qt7kkSd4kMcdR76",
  "key24": "2gzFSVxTRJgKGFzaeFEbtFkrk9MqATn3UyhkNpc7EzNUHqxuecURXX9Q5PNBVYX5ZkbaBTcAgcERNDTumyBAW5Z4",
  "key25": "F9C4mD7aKT73EudhbB9CXu8xXYxWCXbbs4QtQ3RjQSkfdwXYD6vj4PBYGEVfrgmZvsjnfLkh2vF2MX7ho3bq2R2",
  "key26": "4WuCRuMuVvZAEVN4PL6KzBY2h36v8vqcip7S7hx9Hwe6DnE5WvVrF5QDDB9c2rnEL9qQvHMz1zpn3oPgh5jKGZSQ",
  "key27": "5gPLRCUEGWBaTPthHaNe4F6YVgVzdVFvF5b7mLwHzmfoVig4RryLvsmCGuksdih32HR3atkHyCJACjoCmv56RNjS",
  "key28": "52sBAdAz2VKVtmX9VzXJihdcMFUvfZ7bNrYrDb1VQadSsfGUQVWh2ZhZRz6C7N8Jd3RQCHnzGzHjetdWf9BN7N2y",
  "key29": "4Eom1YqjKbj36uCB79osN454jKNEXNxoo1QjXJvRuGXcAM4D2CZ7yFFTCBjVM7MvydcfBaYyTAXKEYqt98nmgrit",
  "key30": "2qcVBJtRzp45VLGxaBnrJCJYMkoQEekzWh8tHhhGrhJQf9NGuxkFz1HDbb15F7j5mrfyCAsvb4isZoZwpHQA2hrq",
  "key31": "3HE7fkUevEUWukKuZUwsQxyHn2eQzQCrsmFSfJtu2Lsu2PiC5FReiHfhLdW2VcnTbGNTLdWSyht9ywwUz9Ag8wTR",
  "key32": "3WR4Th2YZbyJK2fA2tRL6oTob9ausRXEY3jXbipDpe3Q52STKvuycZ3NUr3xpzey7TkueQeoNpjZHd9V4kgoYNZu",
  "key33": "3rh2At4gci13rUAcUH8FWZSPzniv9M6H8j1QkqixDLa2EWnUjvh7qQe9X97jfJwA1bMC5sph4kRVKyrA787kNLBo",
  "key34": "2iPuVMDQ4qoPeDHZZcK8e2xdtppYxMDELQK9tdsEm1HpLfgrWycF2SM5h3vDvd8PXGdTD4yGTcyuLE6h397ibAfE",
  "key35": "62QFWmt6oGt1CduJ9eUpekfJNZPq9VSwnz5Y93BoxfdFpesXgEQynRVRJbQG9ipUZQNdFTmJ1bmqqPsSxAcFAiRL",
  "key36": "5RBhJSnadtaxxpErG5cMCd6dNDV84NULMvwUmo8yow4BixABzmz9nxP3rkLW2JSg7FpXgyKioY6eY4ntYvFGbicZ"
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
