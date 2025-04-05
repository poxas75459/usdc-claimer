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
    "5rXtVC6q9Hbc662yGnVwMuiAzPqeyyP8MZw6Qye1RdryyVQWBQH3mcZawfXhb86hFJX2YRNeGnnR1zSs44KHW23D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "244hzPiWyh5JhYXBMooxuFu9ztLuCm1LsjLAfEN6TqcZvQQv9RSQ1PTasgc18Mo5mQvgzxesiEh3jyxSNYZpkrmC",
  "key1": "3ZiGmG3c1gNB1bFgL4fvCeKncVdtu1Sg5d7eX7cGTXNCPhUdiMNVvroyvJxPK443nfAMn3AjcQrMSyT61z4vCFBy",
  "key2": "2g5dBh9XBguRH1LFo44wzwveTmQCJjgPenafDo5GK7eWsyH5trzf7CPwpnr81yRMAU8giscDNuRjc5L8yGUmgHnr",
  "key3": "5VPQoCF1DsnkfNu3sSDMVbnZwME7sSyLrvBRdZExgYTF64SotfPZLSydGTHmF4f8YCk8w2tTofSBFicMHwfoPxp6",
  "key4": "2YFxHbgYWYM9Nri8LGzceNxMT6mMwDEJ41RJNFMApprMuHk8oEhq7Pu1vgPo3oG6hexZL6m1DoZA1rQT2XUe1NMX",
  "key5": "5Lz7hAMqspDR9Dy5aQSyKV53gGVvJExmm6qz5CiFFQnKDQ7d4NfeDQeB2y2crZU5ELaTqTFKWdEBWBFDt5K9Gonq",
  "key6": "5bEdXrtFPmn1NgDyY6LQQVKaMY8p2rdVzQf8qrcdo9AK3jBfmhM4M45EvhXD6zhy2W9nE6KmWvg8dtVJd3PiiHWP",
  "key7": "MFTTagRudJnftuN2VYTn1HGFcRRtKk1wNGST2aQaGRkPgX9Uu9X7G9KVApY4QUBLqK5DPTkfRUPfAsKsUzoeZUR",
  "key8": "48QmQkPzRB48Fxnj8SHPeWCWt3a7CAxiyUhC8ygZptYthsavWYDvSWHRc7K5Q8u9r2Fn1tHsZKMi8hqFBcoa2Nz7",
  "key9": "5xny3UJFeNCoyTUcqNZQoZmRqMfbB6RYHfAmiJL5iyYPWZVm8RTkb51TxyzREHZiTZWoYkFNC1r7VySGaNsNhDTd",
  "key10": "4eudSeGbSqj8QN5K2WuzMkM5A5C8XW4FxAMiL8k9ZUm1BGN5Nu5JnwbRCGji16MqfUwMdwuStJaKsVNK2VCsFeg4",
  "key11": "3pgARzGeiCoS4YpkRswk89W2P5DLUNK3187pjoZ5WuJoD5dznGxvUBN5eDCiDqNe6w1ZCWmeAY1K9nGSwEr3LpQo",
  "key12": "4Meof7TCrQEb5YhXbY6pvXLxCtjymAcSq3FZTTHxsKKoJW6VT2HBNKfhnnGnrV44wgjNXGZwv9gLXHKzZqQ4jtcL",
  "key13": "5AL47kZH9PQrU53C3WKcqTJzW7u1TmYtkaQi4dwNXZyNrjXpTsNNPMN39oJQbxZZ2zQEqqW1VTcnD5Ai3N4csAex",
  "key14": "4qH2xzQqomVvj8rcqpUVTcwFzBFW8BJsDnGY2KHSCZgF1ysVUKye5PZskt75kBzNh6AfPwKFVuoBC57jBSazQT5w",
  "key15": "4VUADdh5E45iWougZTa3ZCr3vFPAavcqzTjX5rg1LAqkrkXZyRXJ6dLtC6mpmbW2dYy9D8CYF3QEjjTuKpz75Jmf",
  "key16": "5JEbZVzQvwzihjymHBCp8Tgq1TsSwha8VPJe3RnwbxTJ1p4ywQWYSBKoHBrqm5N6so61VcHxQBTKkeoL5uMEyF2R",
  "key17": "3tH59iXaLY4QD1cSuVo6R6V58KAGxjiAZ81aHwzTSZtg6huSipRppU9iRAtz6usuDRGBsUNFHFc5hn8nRteq5ToD",
  "key18": "GWitQZadWsNNr7xWbXyoAST7ABne7tA1BspNSBRmDbXv3VR4koxcSCsYLawqDwWQv8RgWvyY4hmKhBMSS6BydJt",
  "key19": "rrysVNKf6UYdqsjsfW1EgHzndzrbontm81uz2rRakXAyhbS4fiKMFP551DVWMSpbCiX3vrybCNRrPweDfmFswdV",
  "key20": "3UVpZeRFaF1eAPCQU2b2pgLtzVtBNnz7K1B2jJpypakDxAHvi6FGsv64vnPZo5FsiSm9wF8fQSgyzxJFUrep9rxb",
  "key21": "2UUP5bhSVKGzPUZYVB8qxZBpwqqf3adqkbxAwvBS1cPmuebzv6J9XETRWSd5UXYZo8fp3ycMUvo5yzj4xAU3UDT4",
  "key22": "gMNMXMKVMcCNmkQGx9esruJNLr7urdhASPuLZuATx9icPStGJrpscNvNVMaB528JUPNbDL3GmisDuosbL3oKyXn",
  "key23": "5TDQ8sW82uCUJXQfcWvd8WYFtkYKK6K3wwQhB2mk1xvbmEdP1EhU2AFm76tX4ivB9xeuh8DthfnRKaprqnCgtGzd",
  "key24": "i4XSgVab3rRrdepwnmXz143paKrvwG8G7Y7C7bXf5vLWrpztX4nCjWqTEaStwfpwioJS8QEJFTXb2Gnk544qfUC",
  "key25": "2vNZNPKEv6QzdpNvGmLmzEvMUgawA12XCafEajG7i27hi4211jx3eHeVDADz8RQRMWJaYn7Hna59u5j7BE1M2pjz",
  "key26": "2QJT82ERAMogTZrAQc8hbpRDtQqsJu1Ku2Z2VMYPTB3hmXwrsrByXL9iHorWNDAPnkzTs8L7hDpiVMs7qr9SGqpb",
  "key27": "4SbS1VTscVZQhA1zRYpB7UJdAuaVQc2KeKcxJB2sjC3SmpoEMfLqt5Vbxo8VzNfSdndNy5NZ2N9tQmEM9QVXSJfE",
  "key28": "3D48DAg6eHwjCBBsG3qzEZxtKrcykGiTq1D6w7tyACgVLzSBALdMsD4vB2oRTbux6f5avGGj4te8NKRmZUQzoRPG",
  "key29": "3chG6tDm7M8o2eW6t3Cwq6kXgkAxDJir288epbQyWere6AKN9vPAaqv3epgVgWkadSyFsejJcrQEtCRb39xGrqbb",
  "key30": "4fee4SPaxSDbyC51DGeEnnBubcV995nBh3APD7FaFYtoKi3AvCsnCuaHKpnyESVLPxYe5e49cgTTTwikoMP4HgP2",
  "key31": "4s4dEqHYAEfAtvo9Zzq6DV7o3ReBZnebY6fCqQQWJzB5qb2VwMfQCGcRq6zCPEqKHDJWog5tQhkpEb36BcJjvfRA",
  "key32": "53354kkRRFYuobgWW9CaB6NM27pbvcCFUr14jRZgMFxWnBwore4cdJSM63YjrG1VZTEZZY3EjhX2gkrvtFaupRMH",
  "key33": "bxMhzhFn8UxKQxF2VDsLEkjSAiuN2L8jzj42WHGy97FAf8CxP5hZv7Q7LyaLK7Rpdbp6caxhbNtopTWk6EmfZiP"
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
