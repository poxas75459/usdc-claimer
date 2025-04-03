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
    "2kd8Aq59jZQZFfoqqkS555JdYLJDBY4C8LDu4oCR4EuzeifSGDyUCh7UztCuFf5B7WLah6GqDQVeZFXTmXLFPQtb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44NtaFEaxYWkdUVTgMpeuHdzGhKdSpKaURLxViQKiqN5NsT2Gnb3vtYhfvJ7juztU3NdRNzQXNNPeLFY6ETnmFNV",
  "key1": "3gyawTLHBL5vNbXQx7LuHVBxvtkoygBnDHpFxDeUYqyQqhLCFMf2SR37sxazcLHkFPr36MMyS4Qc6YZwWHtVHg6U",
  "key2": "3g1r9SLEYfSSKCKJ2PvtRZmSm6eX6vya1j7EKwFGFrqJRGe6KzY6zUUTYqpUn5Udw7bjoWkcJbKqwT6Jmptgy66W",
  "key3": "XqpL15p3CAM9HBiE2ZLfw8QNj9EmSK37UJaC1QgBzNkanmgQ11ULNELkV4GEsKPbVynDVM1c4Z8tYfhDiB3ot19",
  "key4": "LSP61N6SYn4dpXk21vD4Dig8sNwfrXJGtXWqCxeh6koTdWJWRbMswdwYHKfHuw3prZJJc3gSUK9Nqb1nrpEqZ3q",
  "key5": "3UbEQnLoZeiyXgWYgBGi2tzXHAQCHoTcXbfSTj9B5g4EgnUisUdUdFVaDvuyDyNQBNq5EB9YVBmJQGbtNECgT1uF",
  "key6": "4Qed3aQMLiTweDrtzzh2tJgGG6dXzyswFMxWLmUpPULM4WVejTJmbiCoBGpxiaDWWKYZ589xMRJyhYAsM1qib4dJ",
  "key7": "4SteY3YHhe9eaG8JroPk4KvM6fPsHwukfReScWXgJ38Pkb6LsqQaLxyxgQ9exa6SNHuecXghieiqofjvNzNejm3T",
  "key8": "4H8KyFsZi79WbnepPbWKprRT7k6jHnfbPo9Ajuv2KQ18D3TGq7sTu5dQWAe3BnnA1QBCiyaGDazzgX7UBhiTFetK",
  "key9": "gAFfZqwBN9NoqDwMTCuRgGo7rzMS926nUDjvYFFAAGNCYoaDrs3Ey7zupMpBetCTGq4ZBv6uaefv6cELRaPfSGm",
  "key10": "5ujKYvmGXxxEmEoir3gmH3XrL8mdeB5CdMbxn6XERn5srhQTnPxay6VYXFcnDCa87TgCaFyHV2Vr3PgFBJHNAZBf",
  "key11": "5yCDsEAVZLeNoRaPe9ieieFsLYZPRkD9Rh5kpnpfkGAqoKHWoyAyysWaZgs2CnurT4dbTKLxZz76ByRCTHdAhCky",
  "key12": "5dh3Ychirf2bREHMbgwkrWy8aEFKm1myv39w1VaYZcfDwRQgvFdZkMYNAH2522LLR48r4oTqu8rxrHDNovxCergy",
  "key13": "t5KwVCYxu68uB6668nvX39cMHJjUfz3ksXujtEAym9uMtn3tb2ehNwcDUKFGQZjmmSVyDmQMTpetmbnnPsUkUsk",
  "key14": "4NNVgjvuLjSfBBLJ9freaWH1Ni31Sz6YtYHg6Nie6HnxiL9wB9sa2un4fZC8yCfkAyWEr7J337pmCmyfCHYcc7Li",
  "key15": "4TSNg5ApTBxSr3s1TKfsfUXXzVALLHgkWAPvKXg4cL66mJ3jjhtuuDR1PXW3afed7kFvqvFN9Kx2r2Y3NX4WKJX5",
  "key16": "4Vjn7oVrykNmhbHLt7oY3BEKbAvTyEbMbj2f3P7SwCSWf71fzWn6twve7oG9LJLoQPGB1JCYefQeCzFgnjmakKG3",
  "key17": "4YajEC2cs1pQNfkaeBjteCKjzUHuqwJ1xpwYSfCmAijmE1AkP3tXsqTsuDTTCcbXAZJhnBn5XowVNACyGqiBuZdS",
  "key18": "56N6kP9EPhspTWESKkPEGZA9D41eQfiPoQVQgUk4g7M6Xb7G3zRi7V4QaRGpw99wuSrcvzNJWtipj7jGcPR3fo3V",
  "key19": "5eznTZSGVjP8FAnmE2FJh26Rv2YyFqVRFPCm2DkCWbXXJgqemiwBJuuYBELYWAWygehX1sPTHxSa8WXkyCBdDizG",
  "key20": "4VtAGRbvc86KGWFC9HVWH5cZqcmQNraDvduA27MjpPTqqZymwET5nsRozgD2hJoXDQ1vdeuKsVycY8bfhfpehnpL",
  "key21": "3bMbNi6oXrLLmyFDuzRdTjdq7Kd6htQVmV7KxYdZsMy3bEZP3BhsjRDyvsgxTt3Z3JtdfRbPWtRZjUWt5MetzRfQ",
  "key22": "414dLvEAbAbXCjAUmw8YpWtZWjdV9U4iwNZq3wRq1RRtbibLcs4mkvP4tgyBXEMxZgm5pKkdA6JM7MCbs3n6m2Qe",
  "key23": "5Ykr1M3WxiuSbz37KXD11TCZHwwW6awSUPn9a486gBT7VEsWR4aGYp3doNMcCCKGwCFcjZwT9JNQ6Ce9wPVwz3SG",
  "key24": "2feEy4bXmxVvYzgfPWQpAzLyc55R1XmFQyXbEZurowhSVbVe8aEVyDwWwhC3tEE4AtL8W51bQdHXdQRcf6gkRbar",
  "key25": "2kN1ZUk9AVHtQgKsftwjaNUPVSJWHcozKSSV6JgMWfCTg1mxPE9JwdN3QTwzCxaTHjkAfSWrZbuWqgaVNwve5hfa",
  "key26": "5RjdcQjWq5tC72CZvVR7hufH8ktJjAe1ib1YdM6yhpRbRAFXsUw9av7oK9nzswFZzjiPGA7m6wk6o1carK9gDJLo",
  "key27": "5Y8wAuMn64gwKEpHurLb6pEKWCrksxZhsWknxY9n7smRhe7yke113AymNWDz4jEQwdkhMFG9yYyyvcNh6cg4XMT5",
  "key28": "VxA2bE9H41AmbhAC6yTp2DuxWY85CU6iNGpyn4GHrP49PgyHAwSiw4bdyLrcEoEUQ2cxsChWDvLjsXVY5dXqRoG"
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
