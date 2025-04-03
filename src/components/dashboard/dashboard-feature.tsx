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
    "3ZQeysfG6Mp5mu2aXLPtK4J6LKM5kkQXTHjna5wvaZ3ERTTh95rhjWSXM9tXuJ6vncCR5xown3kdpN5L2Wgog5p9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XSEtT8PK9nG8n49xLLonKfzaNcgjpXnujPqauwjyshpoEsW7Z4t4Kyebd2HKd6MeBFjUZCyStet2npz7ksfcH4W",
  "key1": "41L8KUCiFgr6SpdjxHr2nSGhiptdacWpffHCxkRTw9CEmsWYpbgxosfTW8GQuMyTD9mwkjhsWsseuEe6b3nrAoxU",
  "key2": "56rMRYP8fKh7eK8YHnLwENeX2GvNGZbvSttH91yJdjQqfQbrJEXj3zm5zNtnAzzKMJYfBUrV5iDCQpZiUWGdjNcP",
  "key3": "Pf5kKTmqDU6VcSHD7pLz5CUMrTuxfz5DzMQfySxzsNwaMUzTnaWsbq61JAMfuNtybW1YxfassjFKWwNMvpn3HyN",
  "key4": "2QsBzsu5bTPgR4RG3UPX2GmrQ2mSziMY2WMVM9PLgUcmz5aFufAAd3GojbseoT1F4MU3Zht2g25w8BKT9oyVZ672",
  "key5": "5DN5oJHerDt5JE7RdpSUvLgveD1vuM3capBy7yEsYgyrv78JhNesC4CiJJbo1tiR5bakFaLQQKudJDgPhDTmbcB1",
  "key6": "4FJ2pTjWnCPbaQH25Nrtah67Gc7byS5UQuLh5naoHdofHHe6m69mDGQ7CxsJqxLCFvspkDtRriXu8eusAcZjVbAo",
  "key7": "cTZYBc8xhfHhDJxHEgBMFLdbs5PPfyx6YFqmi2QP13vdhGr7JtRB8hY64xMTHsErKbVSeoLhXatjruMadphwj9V",
  "key8": "3qnH7fPTJTrcGAzpsfnuUSCcAsUfZTK4DLFzH2xxUx1NjxPBrXvrGhi15GYEUXAtXBPBgbFaRwYcrFewdVjEf49y",
  "key9": "24USqpJ8Sh8DEwZkPA3Ts6mhuMgCcdHbcWbnofigPeapr357sqqdxd5oexhbwCjyrfAAD6uGdSDwm2ZZZZFKpTSn",
  "key10": "4uL45wGAgDWXK1HufuJQQLx2wvVi31RZyPvLCjpfTjnabkNS2ukqTgp28EQ5Qwx5sA7Btw8ZpC8bpAmiBUQ6snC9",
  "key11": "2iaAwzMTHSahto4YKhrqD8HwU76HascbP6o4uDNWFdhBABAFroxVBk3M2HCfuazGUdE83jq893H16tBgBZTbmC2P",
  "key12": "8upF7kKc4zKvhQqk1dsa1xcvW3kATDqzn99TiG5iwfsmVnenwpK2DQPkqRFyfzh3NHPqZ7jQUrT4ueMjEmG3ErB",
  "key13": "61qR5V6oEqNeUe8Rd7mn7fsZiVLufETFcXgT9sYGTuwFKxAy75EpYSTtauaoC5uem8WBoF2DnFH9pvmB3CTULoFD",
  "key14": "34CCRNpVLyTirLiesTVbxhkzGf7sPRSMqCzSLvqpgf2NU4pVTy59oGf2Ai3hJ3HN1dahpdowAxaAeJg23QEhuGNv",
  "key15": "4JxmxRAV1c36SsgpY2vfHgJnhU8jKap5zztRH6PD5BJGwr2JjSvu2tC7MUgBBdVp7X5pb1BMqJs3TcM8v77AAqCh",
  "key16": "2kKG4yVH1mfTejc274YUCHwrDCRvExzjrtbnwxyMSsHaShRCBcbSV1zVULGxNA4GKd359kx5M4AAJ4RxcvDebAHL",
  "key17": "3o7SPeQFB5vT2vC5NnCE3E9YqoYM9vYYopyj8ayWf4hVVk3pvMfPVvr3ewL8SUuLv5vYYrS1LvMDZqAwxLWUbE7b",
  "key18": "2Xpp4BCjPYVptNRsmcXya8a2ju78BTrepCFPtxxDwbF26kHGnVpdd1yzGxaqxS8cgC1BEQcWrMtuHmL5s7xZYafb",
  "key19": "SxCWhKRFRjZkn9odMz2C2xJcmkbvoB196PYCxdWuWcBwfzeddxbNGmMucXf8Jn6hpoPa3zdyNxL8odRxyp3JDGi",
  "key20": "5ZBoSQRoL4vGVnUL2aG8TRxyP1puD38eTokXmV69QycP48xxiR1fd4DzxaHGA211jXn1huzkfgS8a44FrGbRScK3",
  "key21": "4SXq6wzjH1WxdagXFvTQyU8e9Er3CGTrLRPN5mFg4KqcnhwdY33HvQNprGTefcyDoZrZAW3G4gPg88ZjXT9TaCip",
  "key22": "54eS6W5ZKYLGHp6vkFKkXZuP8XJEZCrhWXSfYhk19ehT1iENubwueTkLDsm1quBsJAF811JuHmyzuUH88bGqd1mv",
  "key23": "26HZRyo65KHM2TzFGv4Sin7da1Y1MJLrcqgm8XPY2ABdDPAmFedRzc7SXRHvNMUFFaRn1tU6bE6Fo9Bz8shi3q8G",
  "key24": "Ad59Ywn4uduayTPdeSu38JU9j5ndVJv1U9XPDf2ndMwwnukygZyMB1orMFr9DhPvVc5dVTJt6PewVP2JkfYTRkh",
  "key25": "2nDPpk7uvH9qcHwoUH9Xy85ko35LKbUZPudswrPduapycERVfhoJsTAFWQH1pe8kGAGDNcvwvZSmi3MUP4iw7hjN",
  "key26": "2Wcsmb6rsewRJvBEFL7H2p9eG5GUoiaYZ1SNDAWwrH4yBvygT6QJ6DJVwGPAYW8oAU49Ym78m9SwXkP9WK8PJEt5",
  "key27": "Exe5DH8XNT39TT8zQTKymoVCqUbWjHrYMEtsSNCm8WipfRZWAsZFJTzcbwu6DEg3yUm6ejfyj7t49WHESKvjins"
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
