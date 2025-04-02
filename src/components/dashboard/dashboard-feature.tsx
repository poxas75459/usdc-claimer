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
    "bbzgb8MDzpn9saz68zAfF82JMqWr1wKF5pH1hg6rCousdRUNr1zTkuKPQpDKc5AP3G26eKp4TDD6smNUaQRU3v4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CXmeE5wgLZ79gjhGpHxGm7q1rXdgWF5hbAq7HzJUvB9cMYGRCF7Zxr7HQStazAu2NHmUWo631tPqsn3ZzREk3Ry",
  "key1": "5TPQNVUe3v8UJYKiLJa2Nzc4iGmo2HvXiEQDunKQohf89PdqAnTEdaoBU3qo8ju5sdH1CcXr6pnFuXkpvpqgqNKr",
  "key2": "4mkkmRHFJHw9VMMUjDmuyG39xvKSoQ4hZsTAG9TBsJtvt7u85JmyEmu1HHeew9H2bGrhD3L3jtVLYtFKzhNp6yU1",
  "key3": "34jvt9jC1MNVvrupTYjyApAuozVMZHuS2ayB8w25ea8EFi7EYqVhfFwXh2qhY9op7aBKn4iATjJKrRVXdyMjMzKP",
  "key4": "3YveYE4V8LqwMrGJBRERD846LMWCCu6bp1TBZ2UeXTHGwThv551QA9jQu9LmuecAYPcETpKbfqHSgup2T14j7WYo",
  "key5": "2Ss7zvznVjaDU4X6vidJpWoyZY7Ff88pMzKjm7JuCtsXFSg96Ne2Q9ceNZkAUmmFuFWYZArgQRwkWq9v7hLPKqX7",
  "key6": "5Vb3HACXwmFRgA9PCouw3dkVswEsjyG231yMpM8wzq9gW9ySJpFyUobHyKmawL8f769CWRX43kcdU6qikMaJeYFd",
  "key7": "vJrRFxCvrLMJ9gRnenviuu2rdQ77JvhsbfwrMKqKCviq1jUwfeRYebFaVVHvGF2TsMa3SE3b3ak9dj3pyeZ97rM",
  "key8": "5LDjJqjxqShQLb56DKGTpauxMUH3cvcdVMH6vKzJ3yYPjNdTsqGxjDnTvKd8DFHKorADxNi2vcMUN2k7qXGLrdno",
  "key9": "3HhDNvnRNgjzVVXYDcwurWGutqRtcx8DALryiDQXbhLuHGHkZvdHXjRnWEzEXExU3YN7Fyeht4MytZht3C7L82GJ",
  "key10": "2cFbqcmBJR3U6iFosLYUM7pLkYo2AMZBSdGsnMARJCws43xnyk5YfWSpHv3E29XkbZdiiwfrSmXTh4ZaqwRQVzdW",
  "key11": "5NRChmhLxytKSEQXeTnFGe1AgiF4FEXiq6eiDKdfeBgxupeGoeZs2QSFGUq1y3dybTN7fUGHXyF8gFiT9swzDgHQ",
  "key12": "cmiiB9ksjPXvbvbR5teerHux3ZX1ss3ErMijd8mE4d18uQMgXCQD8nmSwLfbXFSoghXTqohVjmYECeHugQF7hqq",
  "key13": "3ibNBnENHzfKXH58HBxZTgvFxGHcNmph4LHhXgJr6nLYBsLpMXUicLs6H4jCshVtmGX67UCiQPVpHTtvefB4Zgao",
  "key14": "4NqREKZUsbBafCap9ceDzvdUV5KLN5cifXC8VCc1RT5Z5yPssAqvjWMW4JNeBM2CXssyFvHoDZunx1vahnTMgV87",
  "key15": "1mLxU7MmRUJmQrxHyyNSo9cJKMaCMvpuUFF1eGBDvQEZ1LdGM9GsaaLGPfBLAkCa8vPtekaPaYjREwWVbBn4CAq",
  "key16": "42qCA83WMLcouSQRNPNuvP3Hf7nzizFu5fHHJ6ZG6KQWNyB6wC3fgFcmvErXJYpT7MhRyKS3vfP3vkbR7AgGPZhU",
  "key17": "N5xx7foo8Ep5BqAJUgV9MgPsjWh5uysEk9GuTeCyAQ7qdEqBhuoGDG75iUsoHCVXX7VdyQ28epQYkgC3MAQARcm",
  "key18": "37fuPinpLrzHAwyBH2xzFwp1wWwGMZN3TXWLYP4JNo7q1kArtdW6ssj7cbSHirEPRyaUPBcfPLfMxvGw1WGph5tP",
  "key19": "DMd5WU3YRhVFBaFcbVhXZKvotN4qgAErTBwitcMWaSZvDPyQm8VmoFDQBSXaR8SDkxaQBK4NSKSNoErmkHJJMty",
  "key20": "62vjJ987e1JiZG46jWXAFy3ARFf7RJy8UugSW8krbeTEawhANyFmo43CfsgbEUuCCsBqDhwNHbDUGSBE8rLKbdSG",
  "key21": "3t4t29BniHA6H31uz7g5MxDjTiskh1Lq2dFGfdA7i6YoP16To5kAM6PXDKB4WyaP33376vaTmyfhRdHHeGNJqmQ2",
  "key22": "Pk62fgKt14vnRKbADLTQC2RxcjdmYkMeWfu9U58BSgpwTTaAyK5BkqV13nz8DZ87KNHugLwvJqKRDsJHqLqCBHg",
  "key23": "5Z9ixKrNyUCeFMt7m3Zmy7bC8JgQkte3VvMndfjiZvY2NYKWTnKgUqFND2EyLuvgqZwhUCffuaHqGXkqnKDTqSdd",
  "key24": "5w8CeQ4XhLnvnU6nn2v2SzQ2ueysJkVmtc1yC96kXYUeF9fF6tAPL2uvHii8E2w7E5ffyVXR38g1ETkknq2xciCc",
  "key25": "MJcCsMBjshNG1fzhjr3G5P2ua5bw7Dp47VWnkhtxuaeLe1BSxgZcZNMLTBCjEQwffaokiXaSwPJNPsyLRP8guZZ",
  "key26": "4bD2j4EewcmaG99MhvxH1NZ7XwRd7Gf53jVtd569NLNuiNyGfjDFL4MQTmHj5SpgSA6wh7rUe9NSRSTXkybATNxe",
  "key27": "39EiCZo99hNXDZUJe5MikRwAP6pXJW7EzwrfiqzkrEPd5znzwGURfdqLnVA31QbaoasWFRZDM3yNZomQAbVmQQPw",
  "key28": "4ioZ9XxUFbNkLpGbUVuUvHBQu8k3zVqbrJr2bY59Ydv1RDNGhpxyZ3PEKV51FLLG7ikeGt7XLH4bS7dagq4znCSQ",
  "key29": "5kTxETzpRB9zm8PTvfcDFrsxnKqG2hquKUmnVW8HeLhJsp41rSip6o24DwgMgFS815ThvsiR8pT7gBQcRVJRezEo",
  "key30": "2kD9muXvJ5JhxmFdTsCxNoy48LLf7yykcFA9bsd83r13w3cXGyGv7Q6SNBJfD9RuUhHTZkrcRuWNyy4Cyrrk8KWq",
  "key31": "5NZi88GPF15RxEaqQJfn6ivWHwDou6VkJJuiSyv9R9iHiTS76StheJ3w7VaqDVrNk5iCgNwxEEnugUrMuwU3iiVt"
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
