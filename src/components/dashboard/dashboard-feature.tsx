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
    "X9wr65eBfuf5crfLzzYxtfoyEiv12R7kL1NxD44vFoCs213zmWWXnWnrxbv8GFTtnLBLkKfkXSyMzi3us2vcFYZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eCiVdtGpxUUHfyPhceedtbTfiNVDmPW1EVnjsAoFn94kLwR1o6ug7PWZTFy8p25UALroQRJXtSF9zZWs6XBzyrw",
  "key1": "4xhNFuq6S16EvSauJ1vEUc8B9TAxgNksGxoszQ6GvKUyVHzQb59wFNm4WxE3duifZieTYrve4KgBxtu5dk5CSogA",
  "key2": "2rvC9bCdj7RRqjBMo9xZ5yD8EHYpkLBt2HPTkpwJpYj6QvL3X13vBBC3M1arKNuGhSyDiWKhzY4tmyaGFng8929i",
  "key3": "2KtpxeayFum7whei5ebqSnRyvfbuwYgvLwHM7RUL7EQ2udPTRmhrYBDSxci3Jqi3v9p4diEmkKYjEndwxmSEyyw4",
  "key4": "4wxpx3nXp1ZvpjAD7WEw5vjNC3CQgd1Q5u7YVtokYQQfoxHnW6yGEhHV1WwxzZp16s2J2G4XvoF4mGyKsTdRAykE",
  "key5": "2Tr2FAEnDJZbiZAcF5KMnFJop4rMzR7jEibdN7jTocGd5jTY6LRDmUohSPs7de2zy2ZLKgt2pLhJ8y3xxRusCF29",
  "key6": "3wHiLbwHKXVfFasK5qciYzECv4j7PGtkaVeA3X3SPyEDyTFcPSsBRViiGueg3yZK9scCBoRPKfmDNszgn7xese1b",
  "key7": "3n1iZNyBqxiNbExPfRc2a17ZzTXwQ1uPLSJmeqoJ9aGD3M8VN4Hv8k1sV1KE7p37zXNyTjNNid9NEoszUYjtZNCG",
  "key8": "5A98xFwLrhKajKn66hsyfCTFJb6aeE8798bEpnCrD3zwQSfARTxQptxfHyRJfnDys2HvLqQLZg6bW5qfUJGyZ7BP",
  "key9": "4miiy7tV3qEeNhrmNab9cSEm5E4GL7sVth9ejCEWiogA4kqc6sHfXbzC8nmhQ7xP2uEux13U9d3fVbUJHRCHNf71",
  "key10": "2TqUtnePHRPwU5Tc4HpCXDBM2DqJn3qqc9ideELabfeRfZB9FVG6jKNenu8mpG31VAxi6Jrm7CgfWDuAHX55DcUn",
  "key11": "3QmwyhauGnkz5hNA9GjtRhHVrmMUwdCeUdE8CJCXZfKL9ncAy97FH8tZXUP6FB7qz45UaRrvmNv2xZU4po4i5kJD",
  "key12": "ApDAEoGtxyyCeT5oViJtGc8LMzpbKHFzKqKJXNaddDs1KxTYTGZujXR5QnajAfzimtVQ7ws6pyVuYrG5h7kvbBc",
  "key13": "3a6vJK2Sboh3wEyHZfPE8FGLqCYiJn2aXJUkUv7hVYRpBMQNLcXwuzX4Xoc5mJ9vyKfHwW3fwKtPvC9C6SdoVaY",
  "key14": "4oX3J76Z7BT9TmmNkG8x2PXLxR2TquPbDs3qu6iVeZfp3XkZutgtkQ6QjS1BWbLHzSEfszXDqPeX6kyPfiX6VpKd",
  "key15": "47SQro6NPp34tDyZt6E42EMxWEzqgPsZzcRVFaQBex4H5dRv7qtimC26R3fEpmDnnxWtmq61k1eXgRa38acXoFXv",
  "key16": "LrmWnhnBgttBaqQWdW19XJeipG4Qf45E3ZzLNNXBVQBZFCoSBFWj5UFCnoUNGdnVG5NAiUkhkpb6rWHECGPG8Dh",
  "key17": "4b33vM3G6kxHnMEoVet5jnP1Kc23jq71ZvfcpNwzwX1n2vHHY7WYd31BXGuWokBEAeDyrvG5FcF8URuPCYB3oB3m",
  "key18": "4PMnsdU5CeoGZdm6v3u8y9DTzFRYmzyPXae4peF89E1B2foYR6qzMyeWJ89L9XCEDGxVQdzBmt4S6pzqGwbL18GS",
  "key19": "5Sp5XAerZat334Lx6LphLb1vnaU2Seq8xP4B11NMcqiYBrBT4upJPfP21d9Cihb4yh36AyLbKZ7qgwdCNV7oBHRa",
  "key20": "2K18obxh1BnUtzfsRaTWz9exunVsh7nz96RdcV8qSL6DebLwMH2huK5CYVzjJLEhkJZQpyZZFhQQKvwpLi7ovB8A",
  "key21": "dAztXLxJo9k9ongGjZbJ6fDcXpbcK1yZLHChVjiEWfvH5BEkvpXgCeSWkTqbZeprjU5S15GpThtioFrqSjf4m8U",
  "key22": "45VawSLbkM8mSpX9Hkd2D5P5Ug8vXz5RZCQQfrAXUPxKACvDcjKVPhkop97Gucc6fqcz3tdk88dcyUevmecw1b1s",
  "key23": "gsVFoeEeJcrkzaieAHQZXtaz28S5ZVESATWnHFPk9MJ8KKfgMXdEveeBE6Hdkmv4YyN6YmbFP6GqXCPT7UPWNBc",
  "key24": "3d44zT6U44cE6khzvAiL2TfDM12s3VwMQEVwvMZL1e2oQjEAePeE8LNrTYEVzouyGUmjWgbAc8CBs2JqCbMnzp6Z",
  "key25": "34WKYZEL24EVKrDd4XNk45wXSpmangKNmvA2Zcb5nQbNDmdAMB9eQ7ZP3jWQeyp8FymMUz4qcerPpyxCbSfY7uq8",
  "key26": "444TzaBa6FVp9hZNfcj83MMYwS9boDKk9shwS1iiu8r91jLcTgNzDotUFApD2B7VCNiSaNaS38EX52mTCNE4PcDp",
  "key27": "57bSi5r3M1w44ND3BrVf7TNT5ry8p8cCGokhGAf2i9FxZmhMZNdC2QVHWRNhEaze7qttciS6G8Nv5mNs4UXwAz7a",
  "key28": "VVzkBrqb3j7LD7ETWTuwkQLJemrNb8ad4U5zu4syyzM3TQMy4YhL1rfwZSYTaGhCHXsWB389Jv4WNnapKsLndqG"
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
