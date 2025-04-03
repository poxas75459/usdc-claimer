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
    "5NFJfJxBHJdpdUUvJUqUAQbXwpQC1cpGQAASVfLJkJXTe6ov83kCMyYG3KdTDNEDjdvuwtrvm75HKr5jt4RaqRJa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bY4Xv2jyfXptZqBL8392cEsM5wDXcCPsPMHnNbawGCPG1M1FH9aVKr5M8ZWWAijhnEaigY3kczeUc9DnBJ8oWFS",
  "key1": "4L5YPocwNtkn479Btc8bZpHmXpm2ajgtPiGzpeSxXP87yxAm5M9qYa7xuf2a182VqGQPnYG6233MSw8Y6qgjtkJA",
  "key2": "4KpFaZ6cPmExENm6aAvVb7rG7RGFLKmhjDkh7tA4zRZDkztSPryqNEnouHSyoTC7VRVbAT2CEKXNtKM52Pa52cYU",
  "key3": "5Dj3YvbXwMrTqmACcDyACNrVnACLUvwGKf77eeiczkNu9uhh9rCCGtDGMgMMN5BQNVYKHveG7Ra7nVQVBw5NbBzV",
  "key4": "45BvD5bCLNFDeCcMJoxLEAHJRHmtABn3uJrtZKGXPRvrpx9UJkwRMxAqg2WvQYLGbafGTDYXkTex2oafLFrAKKbG",
  "key5": "Q13HDAxuM9BFcFWEQ16v3ELPBZ4aPabg48eqeupcVjnA4P8BfKQv3WEbPrBXcQDSasn1tsuQTUxjrSTEdu7VDWD",
  "key6": "4jnJ1BLvCVbAD645haVYZoywzoTFuxWZWMaTGPRKTZhpkKUWbjh4FncQUJR4RoJ4XAynSCyQTphtJqZut62FX6dW",
  "key7": "67Jd4w8tnXmDQt5w86GZmGdMQZP9MAM1bfoZDC34SvH6kPw9UC3bFjV5vAvhR8yZEcn79nfWCEKBDWpfBjXPq5QH",
  "key8": "2RBD3UAsu49enLM3xtpGt5u8vSVxgPnNySjXhGnvendQMVecYwpNeqZUSeckdXwn9uQYS14NDC9mUMfeHuNoRore",
  "key9": "5V8894gCJ8b4jRZ9srk6N4zbugBQndvAaEh4DAFvZDU3fX9pQ1qiN7fgtWZ11G6ogZJ82qxDmykpHqTznhzv9Ser",
  "key10": "2rKiJzBvPAWLRF5LwDsZv3HrkZ5W9ijiWXqwymQmey1ZPtH665zibT2KkEzaoAaCBk9ZzHXQp3nW7Ehd2hmQuFpF",
  "key11": "3fgdyNkgZBWWnZuULxMxqQq631H27e76V8BFTby1PAaFp3AYPhLUFz6cCP6JGRXoAqX7CjFE7HncDyNHeySBfwVk",
  "key12": "52BqBEsGbQzsEvRtJkoxr2cASdWcrx2UWRG2vsBkZZQPnuDFtoMmtfiHQnFNDYkXAuK8GBdHhQHmM9hDJ8jeMFkQ",
  "key13": "2KMjB8odM8iPW82eXJbBkCzhVReXo8bY7Q44TFPHtzwfRFL7f8DYdvfu5kQRVMGYM1RFsxjwgs7kbDnXKt5bgoWo",
  "key14": "35vfndmqGr3dWPvdssbMx9QrPS8YqPU8r3DDZxcMyXS6VHqiVFLPjpud4FZ1d84gCk3nvZMSvjbjRU7F3Y6oC37U",
  "key15": "4sTuozwjoU2Eh8u7MYhnHuGyhGsbW3cWxcNpuFJBZr8qoBmEWPPxGEZ4mTz2wMm7uuuDcvDR1RRo2wbHoWhctpiT",
  "key16": "4yVaTo3sG3T7J53Aoo9q9dZF6ygXjPMKAwt9NRkdUJWaCBQepYsrpMdUVn5UbqNXWu8oo41Pn9h4aHS1iJdqXnck",
  "key17": "52QNkPyH6BsnuG2EhWQuHfXqWsM6aEXnk3YJBdotd3ewj2b1ooSAryJ9xfNdmfibhRqAznAV2zSSC7YFmSRU6GpF",
  "key18": "54npnZuPgk9uxjLZ2bNMwYkYyDpVBJ4aZeCR59crxddPZKWtETSJNxT9pPjaoasruiYWtTfzjwPrdK614gwS6EJU",
  "key19": "5m3rpdj5FioLYxKwtpRf9SikZ3G3SaythEB8WF2TgveWx1QUVQ43zbGzXkGYeJ2iAfUDpQkSmA4t46e1VMoagGFA",
  "key20": "HnQrC3vf2HGAhSbHhEhXgQjB7S9hMDmcau3rmfWZiGeuLT8tzs2GEGF5Gwqdxm6XvYdLzXb8YqhMtDVXQNgpR93",
  "key21": "K6E7QDqD7EvaKw116nEkaeqa9vxom7GD2m799w53TVWd65HP4HC3KcYwEdgKHyYFhpN26FYfr42eiFHMD1LxrVk",
  "key22": "sBRtobbHgDgm6uMyR8BBZH1CrbfRm2jxmp3S1RXvQvf5j9v8pRkA7j5fefdPcB5X5RfCdtWn5i4jpF9Jdpu8seD",
  "key23": "shbja8DEHrhKsRYqBL4oNcFj5Ayie6dSio684GHaJZhHq2NEKPcnMFbm51hMHVXRdWmd5KiJ5xu5X3DRRNbt582",
  "key24": "27KiU1MUB98KkqVRBBZvPEnc3HzYHF4uBEqUaSL3o83n43kKDMsUhNDyTDgG2BLcrptLMHNoVUzGVgERyjU85oV2",
  "key25": "3E382rnoXqHNJ5LdcrfvaZxKq9udXrq6xf8qzVrGqVpJNmPJFw4bxhbLfTbL2nJJtAY4mEBEgMzdFcUHcbFgdLjR",
  "key26": "3GYAvcNkdsy7cTYqThua9z33myANUixv9oyvVePaaP2UuWh8RSq1MjDPdyqU5CPFakeyme7bFEvwRKFoQRcjaQZK",
  "key27": "3titQAu7XYMpmGeGmiNTfQvoFLHdrMKvapGEg6De5Up24j1233AMMQ9oxqMGZm34sUWkGtStoM8yUKYa4keq5JAo",
  "key28": "5trcyoF5WqjGsjc594MytqZ6zvadxLb1VVpBLiT2XqNEPCJaqX8s14MAZDYY1paSvqpiEZjDRygPex3s2tudwQJF",
  "key29": "4Y9ZUGxsnF2B5z9PWni2L1BycWyzetC9gcRHE57BseHFHytMWW3r6691LyM9B449ALwbirgR22fEoYi44WbtD5YU",
  "key30": "4kaSPmP3o2w3uFJqrYC75Uu9uPruTfj2CxAUoyAvqeXRtUwg8Xbc8W6Ukw7VPLJ5TgAHJ52nTiHZGXib4NzYY89d",
  "key31": "5p5isjQK4LTP9MS17Y9wfsuEZ8dq1fnmfx3koeVZEz1fEiCYhAD6RqakXSqXnacKoz6SmRrsfjCs1FtGd7AP5Kha",
  "key32": "28HyuUBY9JjJjvR6WJdV5JhmUBQGxQj8xpnQHnjW5juY8BxjX2VV212r8SQ1KDMBnzyiEV3LhVNUHVHqB15M9iiN",
  "key33": "4EHvKLyCEbmXWEVGWTUUM9cgasdnSxmLvFLuB9x4pDaPnV4zCgiTgdU7QwX4i1CT1kNKy3rcAjWg7zje5PhpaY6",
  "key34": "3bsop38KywwpN8MuzmbwpVKwqrutzhtnX66CpRkUM76hXaaULjbT1YjpZNxeQAzcSqQFNmqft1amjJAJTt8DbRUp",
  "key35": "3Zg41nr8kbrZQPi3BYo2EeWVE1ZpKDdxkrebMsbt18nHDrcgDfZAFvptAG1N5fptAL6cP2JME4V5a9YbHsSPgv8k",
  "key36": "3UXVnDBKtwC5wVVupBbP2kaBNmtTWkkWEGbhk6829eLCzHc8TtN62FX99tYYpooYaFJzQSaTW2dzJi6YQ9rF4SqR",
  "key37": "LesMyKnsfTRZaFcPdivRFRayY5a47qMpZdiZ6ErtfkFUe2nKBHkf1Mo8WjWKYoKChSN7PxwQ9BfwoxEk5HQa4yg",
  "key38": "4Lh1WH3v9WE1kNDQFiWD4Kc8khRXn2Dmx2e5TSaRQbVcPLSywbDQb4dTSUSfkQcJ2VNKbLTaCyKhGz5yoy44qS8w",
  "key39": "5hysszfn9dm6CQhkUt5kmpC6hA8kTJgYkbDUPv3mBjn33jrFLJmGgAyLMqxPc2E3ACLHbLGBr7kxgy4WU3vZR5D",
  "key40": "29XLRh4GyHkZ9UkKXbeqoD3RzdVicjZy8LJPWkNxZuDgAbdArmDmgQ7YvFv9zXkx5WpHKePps4aipLZNBw6fHvCY",
  "key41": "4LAaWWwUM4FmeXtPCpf8hR8cyMTgV33RVvR9pk2PBqD5yeyVfmXpnpiPF8DxmJooPfRBVLnGY6ABJQt5GTdx6SWh"
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
