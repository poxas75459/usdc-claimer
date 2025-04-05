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
    "4W2RY41phbgFzf3EJD4SkacgepzzZhtmZRC19C32G1bk6QwpVP3zuct61L1BaiXMJqBHkc2oMJexPHcez6KYR1S5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kUKfF8GXkASWvNur1dDrM3Mf1xfsgBrz5ihtY5wCfrFXiAv3suqB9ijR1qXWAcJLQhd63VyFTGpYVvLoTrZRM4o",
  "key1": "3FVAtqRP8UebHbTyn9e5KUBZ8woHEYXWzZocxyaEu1upnMLkRJ5SwBNCgn4y7wNgFiydn6XJJzD3LjxnLLrm1iXX",
  "key2": "5CYcinYmjtpnGrziGPVmkTRYNyGivk9kq5wUWPSYS76iUwLGaZpoXV2f2uBUad9JXve9ubcdYzMNWLahaC7aDnqJ",
  "key3": "3wE8ynkoqPNAFe5sVPciq5y19UdMEUcGZvFCU2FbeKVuuZZgNyv2irESbhP2HpC3jWqDrweL62d6UoS9r5xUgJVu",
  "key4": "ofxMJ2iAQudgkc2pvdf8zwcHK8wWk8k1rb1qv6Hjh5U23YWU8Az55oVz85fngoad2ToAWysPL9m8Qp3ZcQbyHcX",
  "key5": "cwagRGJC7ThqjjoeDJFH4dRPLuYqWhcqwPJscRiMCPKUjWPQAmiWzEJcJEeRZchJzG89Hk3UAQJuaLnYGHKki97",
  "key6": "5JZ5WQvqYuS65EZyRt9nsESGQ7toCWLscekSe8J4qfghNh97kSfeXVtm1kGfMFKLXK6jLw1wZLxrzH4yMXc6sdBM",
  "key7": "5vE6BjJwZjLfCNS79sA75DSNwsq2WfVD3VgwXRpZhDVkbkX7Gq5qsCWgWP6PBtwfLiuugbxQCaNwHrc88FUFhevz",
  "key8": "3cHMeMpxd9PswbrZQmRAeeF63ghH5HfERwBP4by1L4Buxb4NmeANtESdWMefdTX5RQyD9eLYVkbFvHdu8mhmCve6",
  "key9": "3UgUTo17dyxzn1VtVfFoZ1VTw9WhMaMwKUYb5cx9zuMz2hHwr1nA384xRNMCTVjqvRwpBmHy3XCpFUBcaPHtvSjw",
  "key10": "3vPHToME1jTVk9jThCXnWZCjK8uZaSwd4qcoW36NZXX5uuhTZzfP3PXZJ1UprhWqp2agh3CKcKkBjHX3vHuafFqQ",
  "key11": "y1GtjowyFZSvRKmD8o796fLyL6fSVuQSUMML6pwke486uw9jgL2qK9czwf3K7QLV39ZEfNxKe7kEZxgJt43B8Ap",
  "key12": "pGFVATCHTHKTLmXzW2KEghacsL24uyLqN8TYoxuibTT5Y1eetaoQQssrxoiJTxp2FyJWqA2uuLwkq6kMYjNDAuc",
  "key13": "1G5E1XdC7CQQBoq9rZnRj8gTifxkoLeRraEV7Aqk3kwBZSCv3qpy4juSM1pCK35TcFnGy7WAksqaGZK2BmnFkk5",
  "key14": "25hSFYQjHhiF6a7d2kq9vFkbow3RugbRfvpgBdrxr5otkM9cQxPrwuVpebEo9JaKEfr8TZWdyMsNEMm6jVRFwudk",
  "key15": "4vE57ZdKrwFtErqR2oeXkVY2CjnqKyMkWoUHAQuL6r9WjtFJgEnz4svYRjbQTFbLrf551yoPQNicxvuPwfFMhQoM",
  "key16": "3T18rCNssjDs61ZUeNXiS9eJVonfG3GJWmxDDzMDAdjHG4oj9BhGm9v5c8bFau24zxiH3NexyHEiNgYweqmnt2XR",
  "key17": "4C12Z4cXaQW4hZGUCu7nkDSFW9sxPD3MLe25N3xZJ93RhhV1C6xDRJy7sa6JaTGK2K8CNi9csVczdksfnVE8M9vC",
  "key18": "21D8WPTSGZyXfjiCFPc6iXGoPRPsAAm5hpiFCoQWv7tN14MTRNcpRCqW8n3L8arr276vVpfGuT5vujfxUGo659NK",
  "key19": "RtXGkDUxKwkHb8GXHEgUkrz3LPEBTWMrN7Q1h66dGu9ZArEGwYiszXrKoqVQb3TK16HaiqNB3DJzN3xgbS8j8r5",
  "key20": "FV1MjraCgegQWCgkndsPd8KgpzKBZm6DpZbaojdqoJzCdSuQUQ28cGonFzLR6FU86zEyEENpeYf3N3uU5DfgCHQ",
  "key21": "2jKiwdrke91jEuJZYH5RMSTV6Yzjj48ztgWAHe41Azh1hWzEC5Gm8gi2Ue6qaTJZ65c5U5Yvd6Pbye5p97bURTbn",
  "key22": "2oGVG9GZkyQiPeqDszJSkDQpKcvcvqsuEhdbVTWgGjNLeY2od9zVSCoMiMbr9R4rU9rDCgSLWDqGb29FazzLwfTC",
  "key23": "4sr6nanFnfngHLGMbhSkNmPFJVND7nYr79c1wdC6zfhySsqE75KssdzJzsKV85SqoaWuiDrEr1iGGShBxZNTyas9",
  "key24": "4hCigoQ3zsTiH5yCqmvZc8TiXari2kKDG3PaYDNVd5G1CgqFxAxd7gfiS3rVVPeNVRPozoXmZb9TNXpaCk4Usa7z",
  "key25": "4VBXnPgyZUEHQzxNkMXbRmAa13i4zzRxTpeK255AZbkHCAixZDmK3HvYKM5nvdyUgi5TeQcBBpCFFQjhXaRUrm6M",
  "key26": "3GNm5HUPZrcE8eAVUW9XJWwzLxGz8Ry1bN34Nnhd3JNksX7PjNGbUsRVqTK71jBPxwRnbhDZe8ZhAnawLvchX7fA",
  "key27": "No75jg4ChUs1DovU184kPSB6d1BAvXPYdPtRxdBRMnUMjBQ4TqZ7DirnceLDuzEYRQNF5iNwxydzidQdHsCK236",
  "key28": "euEw1jAupHrPdZHEnsCJd3iJL6XdGAjxCcPVRKWjQSjBZAntssFuexwbhGkYsXt1KhBBcppBZYKBM1ud9wkyseT",
  "key29": "5YWng6Mp4T55XLFceairXiYbpgKEAwuYX47gZQXMdJk6VZrGMtbUzHV8kuNUvJczF7hWAk2hbjB45TgMJeoR3Z1p",
  "key30": "47AEUJkd7VWZAnqam4b42hBxmDn4yketLQaKfXYqKS9fr9Wz6Hdrsh6kv1XRNqihZSp1kA5Mt4N5FfdrgwsmgyVQ",
  "key31": "2b1eyo6EU34iZptTs8gVX1J9wmmN1G2r6n9tJq5iUspSXEarb7pDadEmM8ocqDScqiqqB8EHxrjfUxHbaaf7RoNE"
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
