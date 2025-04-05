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
    "EHndY8Ttu8GwTdPEW8Kt5N5i9X7KaN5Q6Bd4x8rcHwSQDmjX5EDvugf8zPRGn2r3FvVRbWLUdqyXxQdjoj4HFRr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "x96kYroAenr7zHzBn79gABsLQosQgnTnp41VkdvLTFnMzyg7htZBfZdC2KxG4fW9H2vw1t3b6yiVJCR9AfQj7fs",
  "key1": "26uXcoMAuAVSHU86b4HGiawqCijmo7cPc5ZthFwXrSUhQc5kkKNdf9tBKKcVZaKBrjQoHyaUqygUZdALDk3HMnDh",
  "key2": "2EiACZmLUfawJQbdBru39pmvLibES3F86PUtHNNU7kxMGUWci5hSqRn7fFee7vn9VUDCcRCDy8RKAxyWMFaYym15",
  "key3": "kKw1VCseytGiY7qGPZYzaqTUVYx4nLsEfAnni4TH1EEEYZ7Fb64aESBjhhkHneEvHeEU7UrcjBvNYJ2qrLriJsa",
  "key4": "56FwKstyfacV264uCMsuZbF1iMpZucMcVysgRYowfNBQFeroAKdiV8x3G2HpWNDv2G4BaqJMkYhZzhSri4Meepak",
  "key5": "53cvKpFz17z4F7JZuvDg8PPsrBMM66TVTAxtzqvLM878D1qUM2QZANhNJAtENMRgd8MwC3R3srxgmhYwoniEKNaX",
  "key6": "iuCTsYr2Vw4NcaKqrpT8gcjBJUzFrw9WPFHaRTDr1GGJiEdNiJqhahhE95U6deKHxdkwGgSRRMj6cfptGWQUeGU",
  "key7": "5ZX3SKbw4EGR7qteuapZ3az65LAiAMtVxgzEPVzhHKQ2EP53cEwK9yvHdEnFHiNQDRqxGpgKSkKSuYm9bnQxkmWs",
  "key8": "2AAzX3MnrfBFNP8pdL4zPj3fsmc4UrdrGbBoqkhp8EQY6UjiHnMwXLbWDBaRttqjB79LKm92benNYYbE9j9iRpxH",
  "key9": "4Z2MEPvUUy6VNePV3ZmwhZNA4BnaLydBrQqQRz9HhzRNMEFgVrowmPXa3irBELXA4YD8eNFvESAAJCagsc6L6zDJ",
  "key10": "ctMCnpmMiLwMcVJ4gkuuqB14YY6HSwByoXwqhvWMinDRZUPZ2SfkaVyf6HrKSUbwYngqfxyuDWtS9rKbzCU6aas",
  "key11": "mdfE78pQY9mXHCy8qfuMbg8PKaEw9dFxJK15Hwy7AEeMQuSrZXgwwmv5ynGE5wac5H18iGhNbh9t4ktLANLbjTG",
  "key12": "5CnSKa44kaRSyFkRgirVYa38i5jsuwBB9sMA4GdjM49YuWREsWJMEN7AnzxAFmdTmUFCXPuWDWePVMrev1WHJstU",
  "key13": "32JauYHLQAiyqx5WuwyfiwGjpGE6E1G94DNFMisDpXvSnDER8uEjnhmgxL9acwfYdz6DvxvCniekHyXFnhPkTN3b",
  "key14": "2MqsY5cX8D2fcw4Rne7AvANkKF5YnN5WfRH6ZiKj1AXVJZ3df9CEsvU7GwHBU9jX1ndz47ZLCQZDVLsm8WQhvoJp",
  "key15": "3isqV63Z36AAoFcogLrcXRn3DHy1dzR3xVcWPjCSp4FahcyhLVUMuV37XgWn2v5TpR5ykPpFZJPm5wdUsDgaGsnJ",
  "key16": "5rY2bHNxRDGKJvRvVtsvYiGcRgud7T9z8AZCjEdC4ezMbd7ac7Qq9EnQyHy9rDERGbV8uvwKrS55XjMuef9x4UjX",
  "key17": "351oNzHfVzr9KaFM1VCHYprjaXX4fA2VcmMTWTmib6wiTUWgbFNXQwPLfNu1okaPhoVMSoNzbUob7tBS4vWkkBfC",
  "key18": "MtLihtS5yX1oZAcjiLvBcDmgiwbgkUbDPLzGGCr7pg1pVLuYmxtxGQcFm37vPssdNfvw5qFvNZDVYaMjbgi8t2S",
  "key19": "4WQHp2X2fFumVJThD9qZHX8XN5s7HE4qGSBPaZcdoP4BPYjAu4SWqvG4cg4d9LQjA2bDXoairsnjshNgtCDouP2v",
  "key20": "67i5DMREVi3o6cFUKqn7CgCQkZGW2UFvGLFhCad1gVEM48Q237mqgV152qB1XnYXjUaWqtSZsmXfAb7arZt8uF6n",
  "key21": "5cP3biY28xC8J4cpzHk1cJ2VyUxTmwVxXYFCqD8ZNQoDftfforu38D1rZcs8cinLSDPdE7fNxuNTSFAE48njDeMS",
  "key22": "4rXiZ4LFnsfkWZSYHSzhxRtqU2CJsVg74GLyGkrTRSdqGEv3QTFC8FnWjNxLQxnj8x7ta64ptyJyoADtw4QDDT72",
  "key23": "36yhVBsDLhiHb1bxSMYHLGuSMZEQzBcixRV2yQJyATNVRtHM72aJDfu8MhsFjYj49TxdUdSF8UrUS2eXHFUjrE6Y",
  "key24": "2dRLYNSUrUv5xYDAApZ7ok7RGSeymHBZPSLghSuqc4gD7tAJQ3w86q39bkWRX47QQz19MRXrcFnxGwz4N3tWDzbX",
  "key25": "51t24e8jEyh2knxQtMcMLV3z6CWisaoN5smatgp4fvDWFo4LzwEwv4CYJyVpTHp3YJteqp6WJGc7Dk6GyuaTBTJb",
  "key26": "3jiQU7j3uL2gcCqQYfnWawQmdeDZ3giUMjnCDtLGW7LUTpAzrR7tLW3N4mowNq9cQTBpd6hXZFNPLqWkpadu2iq6",
  "key27": "4P4LuWa2LdWSMTQCy8rhVwv8exV93bvJcqDprcmmfPXzzsMysJtDWzezuomnbgNoBBrSKneW9mdHmFcmzUm6o59G",
  "key28": "2AnUv8SHadfqz7Zvw8Jm7PgBoLWQMXCGFgjX77FXMYG5zLaqF6QVpsBkUBP6H812Scb1dbAnWqHE6SPavkG6FMY"
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
