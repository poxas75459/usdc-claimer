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
    "3GK9d9sdkH2vwxeU8YsrMH2jNdrURiq44Ak7N5eVsfzWfmou6m8NzYJaY2Tv5SKi2X8EnksGbBuwpKQSyF98tfdh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5836PFWxafictde6qCzGxLsAeJQVcY1c8ku81amoL6v7veZh1RZJLxe56nhkBTWbuWDHdVYkvLeoPej87PqBo3Js",
  "key1": "3JpDcGMD1A6ts43UqyNsXRzu8Y5goUptjZfnxdcuaY4LWcPsamexeW1ZJwN9ZJGxbdCCCPUfT5nGnN5u9deubwcy",
  "key2": "DvRCR9oJ3LCVioX19oGy5C1CKDgCYUNAdPSi7Waki6NWND4ncrV8TiUJC8Y4ZHxvj2whacE8PCMjYiMvunJEW2w",
  "key3": "5zZcteMVNopEzgPD9duNF1ZsXn7QWpcB7KuKDwjucvdhit8NXSKDQZVancBLeGBC5HGr5GtNa1EvtjVjPTyDgw4y",
  "key4": "2dVmwLdeSaUeHerPzvZKWnzLo5vhDR1dCiRzXsxBEHV61Em2R9UsyfEQmEDpXgLPwwAMV5yWu1ixy5wXJwWpCVf",
  "key5": "2Wi6oSLFRdwwhtFbhYQqe6jD4HjbJiiA3eDRCVx8oEVzjth4noq4NLux3cfb4rXz4R4dJU9B5mAGUdz3vNnG8MUM",
  "key6": "QhVJeG3hun1BThhtKE6mPCS4emQ4nJbX7LdMkwTv5UXPzfP35tAjPAg8VeKiat9at6N4FW4B7TpFTw7fi1undJC",
  "key7": "2qyS38PEm8H8Lej2jPCLWEuviitx4qjAH3jnDj67w5jgfAcgi6ioHofdM67EyfF4wKm5FvR5HqACQjZzDELcgWaY",
  "key8": "5kbJow7w93fbBywiZdmehUF3ZutbPiodfbRtwzBuZSHqL6qc4Yzd64dCo737GHAttAxzGqKWzWbzvKpeq3FEb1iU",
  "key9": "33LNAjvt9DSkcBdgk8i1m2z9F7Vsyt69JsbjLpRQ4Ap2PdzavBxcx9WtZf44zXMx45vK8cD7nG5ZE2HSLVpcTgSQ",
  "key10": "63Qy4jEHBHVKQdhVg2HbYE7hCyfdTXUYMoAHo4EiBPPV8VYHSE7FZRMFwAVprMh1AweuHo3jJZaBJeK3EFqbak2C",
  "key11": "3KfvcGn6A1KWDRCvLd45aTwy471AVDrKiWLLkuMTvxQkq6SknTKPwvbJJZc3J59ubfQSCBpCSJdaWMArS5sbVEXa",
  "key12": "2u2fEY45FbJwfnitiojj9jaocJXxW1fsvM5wxwPd5cNY99xpRDrcFbY4RKUaLNzWbJ6TiJgq5VZ7cpmYzxGadbwU",
  "key13": "2ZpvUZJiShqVc2ReCPM1MotLQvfF6msMdEg83kRBauFoHW1WUCVCxoBVBgEd2TQxnQZW4LjUjjLpGq3fyuXJsQRh",
  "key14": "LjrobpqKPQo6XzjbkS51KSd8U7M37yjhJmhRk3zzzwC7zkG8WQMwSySs9wU4WepC2V8kai7STRhHkvdiParnvpZ",
  "key15": "45qvbEXjUzRBXEjhc7dHfN4BLbH2a3eeNFWjvvhukBsrpp8JGKoxgNoxzndMjxdLNqaFxFHx6YnnZcUuQki9JQuy",
  "key16": "5Q8tTdBB3Qc1MnK9gBukxGaHdKfQzCpyzYSuaq4uThpgiFKECHkEttd7WDbK7v5LEfg4Upf8xjPVR3rZrJhsmpUW",
  "key17": "3E6gjndyrZGL54dsBZyyiLcX5eWUM3xT5iv4Qkiuesc5R41fmCotsWBzNwd9dHV9eFpesf5JVRtLpj6zobXYA4wD",
  "key18": "5zn6m66JZzK8voPaQi636Ys2fvBNfAM9tKFwbT1ZVrHi2ZzcuPZBxsQYFZD7Ub3jDM7fmutmnEJog9E1ayZHidvp",
  "key19": "2Rtc11vTYyMTJ8fycVrbj5cfukU4cQY6XTzqvJyBLEe5Ntp4XtB5wo4AvkKJLNdW9JbhjZAThxqoYEZzxv9d8oGG",
  "key20": "LMN5tQdHk5zXcFaJCk54izwMWHbRJ1xbhqKysQcCmPeRdHoq8rEgtZkNLpoL7QSKRYjZHDffv7MyvyXVHPynKNU",
  "key21": "4XnxF3f8mMvVY8jVw9iLcxSMvGLaiTjAPJek16nx8YnfR214S4LxbuFZuypYAzk8iTAeqs8E5eS7FRC4WVtzhaG4",
  "key22": "5qEDjM8LMGEbygLwh9eCHYAyyYrcpNS9dRL7iHrvyUKkkKuH9T2JxtFHcBUhzyDnZAfeXxzKSLmHUZN1bZ9HMGMS",
  "key23": "2FEVDF7Mbiox7R6hZDuNCy8TBDUc92Sd2G2gTdooRtNhfADiZCyxRLGrq1VULkmAsuQo8hp9UgYVFDF41KhFDQLt",
  "key24": "3GcyFBY8Gx4fnN3USnWrUGigi2xe8zjav5wbrNMcdDjfJsDonCdKxbPwQnr9RoHRtrqvVaZH42qhubFHdxgy5ujw",
  "key25": "2R827AJSVLxy2v2kMBWVoD5dQ3Thw11tZ235NcxV8XdDDXo5MgavPCjxjcq1AfonP23d1Y7ZV9Y7hoA2HF2YyTfx",
  "key26": "5WeV6MqguSC2FLHziyqT2XFy8BLrSm2Ex8KhzoYxa2RPGCMxUuphFPvh5scfvckq3UvcKNSYf49KxGkssBKHRYL8",
  "key27": "AUX4tCDA4mByDKJ3DcfS2GSS4D3WrPZWDVFAmckKeVAuBFFYJMcihDiQx7mgGWuoifBNntaLuXs2bVp6VVZuqSC",
  "key28": "64hbp2Y7uyrFyRKVaqwcef5cTGKq6CfTncJ2f7q9wg2td8FKWp8G8k9rxcfn4Hbk5hnJm7k8CvQwpZMpo4ACDjhL",
  "key29": "4a5ef7e96aKhdCGm6UeLHGrahynCMTDoiTUSkrpVjPEDds3i2U1f5tnrtrwZ6ekNaTY4LvmvyBP9TXM7xghmunkq",
  "key30": "5sLnH9dC9ttcJvZVeyWsDW2qB38KpuJvFDVEvUDzLYNrstyxVdZbnZ5nzD1uZkWFJmNVExQWSVtZCDEvVFnkBDav",
  "key31": "5gKH2NwK8ZZRMkuHmHZKEWSN6v8KkrCEHuQsccQZ3Mc1BWG6GPhjw5e9G7mNvA9wKuVEXshC2gDTocWutLStd6e",
  "key32": "56Ew4v6WDHTPM2U1zsRNrXgvsXUhbt3EEHuin47rBrfg7d4V4ZKP5AVhjdqsMXXQfGoLikQYprsCmngET1LjwVqb",
  "key33": "3GPbshovzQgCZ8nmz1Ka2Q8a34LYrpSdfnC9RyFyeLzsCiEgms6dB6KFPbT3bpGxGRpkw82ufMzsvmRMUJVC5rbJ"
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
