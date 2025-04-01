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
    "5avSWVnhAiUtYDVEozNDaSfE6qJdNcMeFy7RBoQZcyoxjfbUfTx8ejs8W1sdHcoyFS8JHjDBq7VfRPWd43WhtDjA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jXLg2MVYJhUNsTLFmtC7oRHhtibE3FcfHKqxrC6qQ6EEgffcodE2gov7f5tK3mXiVAUeiRYdNjhRYGXZSgJq9Ds",
  "key1": "PFzGwJmYoXhmyGTpMEmUzoK1pGHJ8m2hRo5AJ8L3GP1PQdHF8dur5NvqHnDjdm85Bcyt8niGv45u8BHsvAH4Tu9",
  "key2": "5Rq4iBYQqkuttiqPMX82pa1z9NgF3yHTsZ9uZ5jdD75aRDSaBuPXkqGSdQuwUARvhPbu2LJsijkNY1ePVKBxCBA6",
  "key3": "2kAD9JtNrpDmzP5WGZLzNH7Jteb3D7dHaw25dWypfVLuqybX3nPNTXKnyXkLKSAndYmPo8F1Y5htbyRzQGcpF1vz",
  "key4": "2znVXr2ogQ8DZbfkAmPQdtBjxHh77HNz1Mvn4YgbC6SVVF85RyBf7EzGdbgNYgVthgpWHMH2vWRYa7sEbwg1V2VB",
  "key5": "3kD6V72F642EUzq9H7iH4wx3oAmN1Pnf61AS1TGan7CAfhsy588ssktJLLJoumN3MnBw3Az4RAZhadExv2u5FS5n",
  "key6": "3YAcKyp7AtLzMhLyVDzZcY8M3vCsUCoy53oa4wEeZfvj8cQWPUfkDvGLYMRRYqzVLFNDv5SGhMCq8nczabRaQpvK",
  "key7": "F7ntG74bJybsS7HSthz7i4LeTLyvpjyfEQe3jcxyLg4npUjxFVBvRUCsSdEMqh4U9HRHjzmqF5s4jpssTmgyEK8",
  "key8": "2JMCwnDRmH4JmaTNdJpEd8djxsKGafZiEkhAWTNR73zGV2ESTLfPQA7MVwcpWGxKqxutioxo6RkvoCdV8wAfibDr",
  "key9": "Y25y3KzWfSpbCFFzU2yUNQieNTiVBPP257Hh8URU6K1R3wy2w9ccajjJnNCrfEqA86YaDvJb2HSyryuGMGZqsnb",
  "key10": "SyFLYY8dYa3AHssNbsts3AKojwSuMuFavGpZnxwKieR6DoecbiVQPbPADNKsgH4QTnuYCaKmSUxp7be6SaKbisz",
  "key11": "5wRsMNJHhw7C8JaFaKbU8HMWQkU4EGvKJqVfuAmkbYgABCJyXftfuE23vo3xfx9PJP8jraGw1GC3Qo12xdtpEHb1",
  "key12": "26SjczpGA9pw3ixAYLtzkYPtcXdAESP4raZmpms3yT8bTqxSC52JmgbFnMoD6qN1aGxomStcyM3ktAp4WenePNCW",
  "key13": "rx5JrfhYrwLruhdD4mkbmrQNBKnystnbmrjuNe262pEibfKvJKE4UWcWWZJBas1Rh55a8SdCMradp8VKtYozYE4",
  "key14": "4oHwwzkBvxZXyesNqqweDGQD5RBqXSwBMkMYR2eF2XojNti8GfKhGMokKJsuLysH4FSnQgJoz9EnoBfybosyzxut",
  "key15": "57oADgu19Gj88d2UqzPMaBEz2pZ9T1vXAFWnBZYnV3215nnpgfuda8zxVoCDVq21vjeZ37CoKXGjdoMkFZRvcxuh",
  "key16": "5sFoXcBCkaCDf7FvCRcS9hFKgodphrdi64LeBK8ik9MWZYySHGuMCYDWBEwMippAaM9DYXSvbj1w1zqbcZLWdFyh",
  "key17": "2BpPzvR2yjBdkWKnz4zWhhN1dnmCz1UvYfGqn3jS4iwzD5m8eWEKr7HRd4UUaXT8Ckv2dKUf55UYHD5Lgw84KUvY",
  "key18": "4ZwiyPbevrLYJkuFwS9Tdi6jXNnFpLGDaWMkPh9VRk2Kqv5e6UwhfsLrm47DURvE38ZXdvoJgsTa9iTcWPBrKHa1",
  "key19": "44RuZbhFFpKKPVduKFTTYFqJtpWH228HD3sLSCpeQVtNeri2SfhNaihGEJ3DyY3YSEd43E93emWx32mHbsi8niVd",
  "key20": "2ygCeC6yzB8ewSG4JUNRVXp3SDVZZLnTqwf3j12cksVM6JKYewGUsp2fA3Ndthak326BfkuNgS1SB8Z7b4FangR5",
  "key21": "YYoquQQuSUdG6uT7QZyj2aWebSXAsMkPUcFMZK4388zpchrw5NX9B6wf3nCoqMu3dGfEru4yCBxv39BnvHVJzY9",
  "key22": "FYsYP8pRWA5ZZHMGgkajB1oRsubPreiTpnGvEmcNQt59Xvk2qdB5n869D9iL96qkUBCPhaBZVhRW46pxSor6Tzg",
  "key23": "3CsKCMoPm4kcYWUpB7MMWsgiU7kuzrtJWwjF61MmBY1o4URMVpnK8E6xshsDw7bBvHfVnTZTqcdF3Yr1ScvCakvS",
  "key24": "3D6YjuRnRU1oAbBfvdm3ip4Pj8Gvnwxd7y7anKSKYxqs2TvceMFa7E1tnG5ecKG9RpCRoGoh7UoBjeMJRWY2WSWB",
  "key25": "2EkZTKYfZo3mrXTiBGLFKuz4NpvTHCsNmzriHz2D9q6DAo3CscN9EBsTG1HwM9nzqnMJhbPPfabAtbGd6AoNfnSv",
  "key26": "52adszRhoSeHyJEJXb6qMbqjP9G55bwX1HrSazFBFPpSKir1FbP9RQjYoqDdYh5tWRLaNKYGpANde1fh8Si6xj62",
  "key27": "3m9w19FdomQjzdDrSkFgsixtFRvqEXnzExv2U5JvQveGt9d9P8qXPKW9t9mrLVfTVaotzU9EsSLUJCnJAZFjF9gm",
  "key28": "22CEcwL9Ke7HCMgPoZEvk5f34fQ9AYnEBUhMB5oR2ZtFdQCHSDQxTNiBjHpxpzaSpuzjMg4d8QdPQjufDedsgMgJ",
  "key29": "X5hsTeY53pR421BJcTaVvzqBRXWGMewoXQADf9oNaDooawEx1riKA1766ijuVfDP4rmVXuhYRqZBcvd1otCdGSQ",
  "key30": "5YvcBZ6CHA9QBCMdrQSkoBiFq1V12YeKB4LRQCWEp1dKzD9ZhdzZcFSj2hVYU33fHyUcL4TTeC5zm2HmErDuZMLA",
  "key31": "2ctUJPyCKsgF8WbV8LC7BCjCYf5SW4s41zLzJR2cQUsw7xwr4VSh6euThMcFPyE7QWRmicejJYtBmmtQAcwmp5zC",
  "key32": "3cj7ttxhfqc6DynbXm2KeCQuFqPpdBFQj9zXHxvbFdYZY9mefGmxbmSk4t7tVgsGXKdJwaDmXTBwcUoqwp6gvy7G",
  "key33": "4SAE5YdWkxC2AeSpSrD2W8yZTs6uGhgJezJXjospNxWvQzng5jiUudxWsA7PUd53mAmzfwUTDz3dsdKyDjGxq2vu"
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
