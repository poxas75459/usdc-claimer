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
    "5hqX277p49JEJS3MFom4NxccXtioMo2hzjdNHqEgRLY2rGzxF8LFt96Rqtm16GmhG8GcA7VLDnivsF2GNh1dgPNf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gXALgBbv18cDZapxNwsP5RkyyefumkwF7VATVqnpeN5YutVdVShGr3g5ReMnq24WKwwXxNbgWBU4VdQcujxXahY",
  "key1": "2QnYH6RHvb3DmDep6SKmEzRnLM1RERJm2ChVrRaeFqccxQzxdYcfPf3KyPnsNNkgWco553MFfzpSfn53GMN2iExX",
  "key2": "62zHqnrbnPZXUBEZR3dBHj1g5A6TGLLgqA5CA2UDCyuHPEYL4efXLFDAur2HNqms6J6u3mwToD8hCBRGzodinwhz",
  "key3": "21Y6yv6RjmbsEzAE7rhT8x5Bx96dSU5GWaWk4BUi33vR3qGaJzXuyzJN53Xa7xo26zYRJfgD1afiYxkpUoxGGKid",
  "key4": "46QEeAmtgH3B34zzteh1c8DFvmSCcdemeZtPx7ceeKUAzb2mw81n4DeRS8KZXPwW9dVLzvhdtYpJncaxHNHhvR8s",
  "key5": "4M7jeuGrAPDh7FwYvd7DG8LcL4q61TMgR6Zu125qaSxZRPdvrBmBiBk5frmzKKsCUJiaMqLtGwDFnAKqEwHGLoDp",
  "key6": "9SyXjLSB5kTQ4J3YV59dcBvdWkZobTgUzuWnwA8T5Zju8q68ASPPJP4b57B34dtNUXNPJ9xW89ASvPLf6taQmky",
  "key7": "2ipqZtL7HysvoqHS5fzAJmjbgku8vaxyMKoidbXtM85PJQvz7K1fF31hkrFKyRpasXWhik24zNXRSXSELhgyhPMu",
  "key8": "5vVwRY1RY9RwJPXie1H7cpbKu4Mzmt1WqZFvWoAyZvYorC14P4T2hcdmbbTy38u5d74PWWFDUMSYSDhDiS7zBhJb",
  "key9": "24ux6KbpX7E4s2KSrwunTEDSCWJwdywZoc52u1XdMb9FUzCPLBgz3wvPHLU3rHSVdx4ywYeSGAh3KMWoz7ar7tip",
  "key10": "64g2fWVk2nAanUuYnMys12nZpQYghRnht36YTya2Z2uSEZxz7fQovja3YS1BYMvicXRpqTfG3MdPnwpGyyCg6kdY",
  "key11": "33Pife4J4pK6g6zSJ7GNWhhwXWpdyHkpmiBbDNA1RKsjUHk436qw161BfzBs5t6W4iimtPK6iX5msyir77xFkNFH",
  "key12": "4WcY5oRaFVC3aMF7kbchhUNP7j2jnKdx3DYMf6QH26xog4j4Njh169ExJ2QNzmDhYLWtntBnD2WxZgVfqo3HCBFh",
  "key13": "5jx4N6o4EBo7iPqaqSWQsEzQr2VHKbRngC3M1vmnLjbyX9k7ouQncAjNepQGKaq6j4jdAjJ1EXpi69JkjqrKusSR",
  "key14": "7cZqqdUdfNTiKc3fKoiARqTHCPPLPD97J3QccYaos638jeBEajF9WT8VEiP56AxzwnXXQFeLLQoBbZ2VoyxFMi9",
  "key15": "5sYyEBf26gm3BuBu23kgjefk7pC19vNMcPviEW27jit2sXdpd9rkhHnddJS5UTJ6Jh8q1GUyfbFvjLvBqgBqvRNE",
  "key16": "45QW9xceuRMFmZo5MnTeWWffK9aMSQwuBbHjWTU6gjJQ3Bdinii9iCCiBCWBNpQob6cn1JExq9qVm6oux1bPVkGu",
  "key17": "3fSCEzwoU1CXWqunpWkKB1xsxkGRvtxbaQL53FvuFNXLoj599377YVTzJbQmMfY56URe9QDLXon2Yc7i4CrKs4GV",
  "key18": "4Pzh8kxqDukPmNxkb7fcdMNy1uS6Aau1ErRQSRkh6jYVaJfvSTy9WwU8ohcZVcyVeG9wHEUEsZGme5qfDnZenwc3",
  "key19": "4DgRxHurbtAdcwXsT3tmuTXpR87LCnnk5r3u31SPpwnMUCVixAJbi9rozGabNhKfP2QEo4xMYoxF1qHCjH4ps8aJ",
  "key20": "JHj24wSKhsSm8kXYTvcUiupQoNhw5Uu6C43fpcmXPzfAadHcAiZf35ghkjzbDJeYiTQBBe3icWq1chqAcuXfieL",
  "key21": "27x3HtUkNuwo19kbwWgM86dLumUwWAKBsDrybAmkSfrPqAhzcSSP3eLyzfzxPotrmnfbM1GgsQwZ4nrxvUTw6WBg",
  "key22": "3SRYGEN6ZAeQwwsFVWC9AXLxxWWXRSzi9GEWynAcjUh2tyc3QyYUFvgeGweHQVxAYVjzym1Rnit5DHP6gJ7XiW6o",
  "key23": "3fTDarUFhNhywgKngyn4uemEuPrZK5oRjHh82UB5XfLZJjSjQiwXRLH2diHFXp8kq8bq8iaCVzVXZECGAurNqxh1",
  "key24": "537b3e2KzzTVRUqtVWw24argr8YbuJEKL4Bmx1cKXsouriAPe2sAEGFPJTpwoK3m5VAddbZYUcd2RbD8ZF27jy8M",
  "key25": "24zoXgUUpgmjqxJmnzxeX3q2djdiEfTLEW6FT5og8vfPteLV6n7EKQ5mpwWtWT1R77iAX7fWxpRRtU8SzdBVAEpo",
  "key26": "digzUj6jCct41jvYD1uDpYokW7cNJWUQ6aCb1hXPiMeTPW7s4UcuSY9jKD519wugBUBGkBFjrnh4jNsquHabTEe",
  "key27": "4YgHpCQUA6qBFriD8LnonpcPJTQhFNUcXe4458r4t2ATF7kxsDZk9xRhL2fr4CYjTm5rNiRBzkSMEMkmUAdXkwQJ",
  "key28": "3Q4Rg3EAb8bou5XWCpX2qMf8q6jxjtqp4fQgG53gAaxyS5r2qUZbDkw6p7zNPxqjiTnHW6xSXHD9qakB2zdvZusb",
  "key29": "57qwTLNWtXff6MwHSCFgWF4ypnfp7Ks1Gv1cqrHZj5raPXq7zcBnTnfuiXosVGkosJY3aQCYTwKnWXeUbdhhUuLW",
  "key30": "4AseDWMdaNmo4V2RqWKm8irR1uhtk4777Wo2pGSFG86xATYYnTtC88BnQhNc5DzuvQMFQFMJKEhwUWFtP2GyK7f1",
  "key31": "vAh5s4qnEF3BHLXCq5CLxyuKXqQiSRiH5wiJLGZnPamY9DaCgBY3J5zsgbVLGWgatQC7egM1eU8jWAP7RPbPMyc",
  "key32": "4nFmEiKWxCKeHx3UBZWh3odSDSRCuPdEahfXWeMXkYj7Wo9nHJPRAP1kRhMUyNCKv3gGRqKjQNhcauq8xNVr8qMS",
  "key33": "2ehckwz8XXK55E35EYQjYWg5ESZGBYMVqcgoDyt9iCnXH1Z2JoFgSzSYcR91K6iyyaStLAEZhGCJjJq8wSMFWGwo",
  "key34": "5oXxBrnDLzp7hmXvaCpJVn4wKkNuJvhQiHU5JYg5VSQfjeXgo282KqJnvmLoBpFKFV9ZnoG9AWnbySC9RweQqd7U",
  "key35": "5tXsKqvoTaQo8nrQYtc9JpfvRHMGwTrccsWFSZXsAQXPfo95u27P7UJce3wwEHDEG2R8bEmv5nwuaWytygqHDmNG",
  "key36": "AsYyiSfJx4beu8UWpeN8PYvuiCosAcPNVYCj8YULKhXZyTuQspRjtAZ7kdE7SV6zEGZWLoAErkqHVriNyTEpfoX",
  "key37": "KW7vLGVPpwesXq8ocWf1ZtSzKLDyX4UD521NvpVmfEZ6JZxgZyidRtZpynJZ6qP719aHFHSi3trMYxojZqKG2cF",
  "key38": "4cj6DV7v2np3m8zk3YApGK6L62FiWYuzyKskChxGaaHPoGLUvPNXEZHFxbLGvCUK75S2tCeFajEaaJcrXU4KVfD2",
  "key39": "29G9g4dumnve7Xv8wGfM8j5u887g2ahRMXrURmBU18bZQhyZR6Sy2WWMZdnKdtzvhTnNfa3rGHqaT24HPHTqvpZY",
  "key40": "5LDxZQXN4ugxGeFPJkEGj4Am323GkCvBRWHy7rskFn6EJt8sFbDFnYdHKp8SbFBFH3LPiAZfYUjMU9cn4P43xUxu",
  "key41": "5SMnxHoEvqsCqN17YSPUSJH9cpKzFFrU5XCYCc4PPpvEyN1KuphbDXTTtRGsmHe4yT8jHYPvmaJeZEM6GT6eSETa"
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
