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
    "5iMqZhPe1D8SQmAKeiGu4GSTb1aoEFD6oPpDW2G1JY1nmzPMUuiwfV7M1NLoZ2oFwgiQVtogF3ML9Yn5kr25eBV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3teH8ZsqapWoyiGsAuEyijdjyqrZg49jopjvyMygVmsvoF5c3K9sg4Nz7ev5np7dtjuQVVezdkfQ3HGtTqeGccpk",
  "key1": "2tAKgu4bbJ4mP3uKqf6psty777Wpqj6FbPcEioV3Jwyp9nkKFvNHsY2kFtKSPnLaqijFBPE7MmqDsgpBLf2a5qBp",
  "key2": "4Vud8ikCMRLX1SHtZkQWujRXEagvPCTEjBfT72b6QdFUUuK6acc9KYHm6tp5SGrHnGKNJiEenjNbT755Fu2cJKsz",
  "key3": "4xzMxc1eurhBe34hVDBUwKcHFz7bQuUKjBCELp2LUvQjSJAUJd5yRUGrBsYsFacJSgcFHZ7VVroeETvfL3WrPKju",
  "key4": "2yTWeaKT7AcqaCGGZes3fHkvzLmYhoCToXrRJ73og6FY33SSDViJbt6hmFccwSYNe4dWDntBKjZRCcsi229qFdnT",
  "key5": "5iiJkmw42KtU6aG1o2K2sPZcgGN31YNYcXc8nAnu5R4GwwKLXN1EpbER4xfpQNxKz6qUhZp87crstNfQZKHqoTqP",
  "key6": "5aBtM322cKRsiMYX89N8eUtfTdoBskXcBc9kmpqkVjJUmyPamAmwkWzFy8TR8er1SVu1hBJC9r7Sn2XRMGf4ePBv",
  "key7": "32gxDy7RgghXUqVBHNYGmqxfaaBke7rU4CkEkH5nukRL8jYTwgso7cQ3SXdnVc7WMgouPXnkcNNarCDFEKKUqkk8",
  "key8": "LWizMeQsRduzpcTzNFAGphiZ2xTAqSMgAC226eGV95wLe1N87NHngcsqzUFP4utVMgzS2N4xneu33TF4PWoxxwy",
  "key9": "58UoqUn8vtcdDot9yr4dsQbmHmzxAcpDTpUhMHMqatGWEDu3FPoxhnjPhjg1CrDatcfGe2HUQVyyZMSRMxZhNm8h",
  "key10": "2aCEdBZVP6qbNhzx5XBLD7ryZRivN1WJC93r24uAgSy4sG73wmQ26tirR3J7Rke9dL1SVRgsooCzSoCxVFBEXwge",
  "key11": "34f8o7GX4S5VyZW9sQ81PFV7Uui7Hz4a33Lejbv1SV1Z25PKgDar2EJHAGoFuk3thmQaaYie5WibeMJCvjqwLCrx",
  "key12": "28SZPnUdy4nnfpPZzt2c4Go2vFDspJttwfbKMurYBKNNKzEYJt1sgdKHfm9RHRARkezuB9XQrwMq4cQJVBVfvqYj",
  "key13": "3UV1Gqu4bbYE15jKBD72HZ3vcnATmkKnizP6s9FUtdtBkm3RQfHYnfbR12A7gAtfBiL27KwGPGMmqUgRHCKXjXNp",
  "key14": "5nh7bQb2Mdb8sUqm5HYn98AfffHNAf66ZiA6XnEXuJKyZGBNNfJfaQdMUHQxB1nnNMK3Co1Zz4vBpfvNruJ2rPug",
  "key15": "3yS4533h29h9HnZSjUC85VY5XhdbYDyZtQapuLAhf3k3cRAEjbXs1Y9G5JxmiqYp5C9NKUR6o15LdLQabn3ZKehu",
  "key16": "5onpkrekCnfEWwRT6jWj6gS8Ukh6hXANS65oDF4KedZ27THHa1EtnPVCyLgqsyxshW3sL42Pn8HmckjZyYwfsU2j",
  "key17": "3RxaRDr3Jc76w8r3BzAWSWSBKsLte478mLYVF5hN2T5mJyCp2GX8wgMBCiq7RSycEard9vrgEMt8iWJ15gYtX3Ln",
  "key18": "3MHJF4CoudK798cZ7ZFQQPAZHGJ6bHWHNovto35BkBjcak3JTm9PMse4QdQV5SV3y2qb9GckAYLcKSU1tp75JqfB",
  "key19": "3sp4LELAniqBcQLp8MfLSdpzMDXZ3Kr6DfxuwZX6HGmTv1fumGkehEg5LrWaCw2cUcAMcr4TSm2upqK1G3Rvapa7",
  "key20": "5btybtm6aiwwFGKRwRRwsSEK34soqKoBPe7pdyYrnnQrM4cgUmeX6CvRFX836ksnandRSqiQwfSdXW5WS9uV1Q2P",
  "key21": "2g6czE1uB1sfxZAH32kPJ7BwPRAUeF9eGNyc9ewU4CUcZc1NnhJTemp9HxnRz5DH4DmM4KtV586fbnD7V72K2nYD",
  "key22": "3ABcmBmWBEqxXod2XFJX859PbkTR5vH6BpEivuYsuqGF9occimiHxaufNHXvf2LEkkauvw7gjMTJEUCtpJ2waLFy",
  "key23": "5aeDoSaR5KbCjNYS6A481BwqeYTC8B1xqi4rAaP3YdYuBsQ4CKegAHH8FSRm28U6qzLSVTJHVUVEbyF3nA6PT12L",
  "key24": "Xcfpue8WdotYwKNRr4Ew7ujNYxoHbbQ5j4BL4zaA7PeLmHDeUiMNeHgpKAptezsvMPkJjXDx8sJyLe3QZcBVNth"
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
