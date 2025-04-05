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
    "4Udx2j2wLTLj6PUZJS4ZnXaSjGxjw9HDSDmHiSoKWmY7pg5aAdL5gEDqNoRNGDFashLuTt5N4B2ybwHDPDCH9QgD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49djR99TddHD9qC7TSV3114hn2EkHGEDHHnUYEaa6XfQs5655GDGtSDfmABrWmvWUQMA6dFcTnbHfXR4XSqh95RN",
  "key1": "4vYTTPB1UTouPUTGJY5PXf6jKdBGDpKdfsvRAZxpHGqT4WsqdmqgyFgsQzFwhpcKNrTnuqdHKkwh2fPzQDh8HE5d",
  "key2": "j8MsKFtXBVJaAn6KsjUvA3udZgEy2bCAN9KafHAR9iqCjUdSKqJRa5jFY6hseBRUvZvYz6a1Bf8PZbyF9D57CqT",
  "key3": "4cz41LTVuC3UXEv3RjB4C9E8Ykqk8A5T9tyXFSY1mQFZQXLf3ysCd6hJma2Sp826phByjDrEfWT8fwiv1ugMwxh2",
  "key4": "5LbwCi55jXu1fHDz3LaVDcG7i1Cw9zyFrBDEsR13GQRaYVRSURn25PYs6SK3ULcduZ35V21c9UEu7owr7wnkFPxe",
  "key5": "4BGTdiVcYmg1PFKbjiHMmuJkZ9odnavLW8hYkKwKzULo4MdDpuMRPW5Cce4LKXM22GYHBy8Nwxs5hT8huXwE9qWj",
  "key6": "4vfcqENZeXUND8nboz3HheE8cfio7Kober5AqVB3mJjwjFjC8davCpEQswvJdTQS8hvD5nxTNYv6Tuiy4b3XzFaL",
  "key7": "2HZq3jtq6nwwjWRESXECig2CgvjfcYMzzXjAnCNK6HMjyxDxahTHFrWzRfKnKzStLgJhG3FdEeSwg9GcijhMTahm",
  "key8": "4S8j7SasmUvT3FoDZXSLXkRdJ423sQxxNGdu5pn47FCDJqGgMtaaxGVZm3oJj5r16zaeDM19khKJEyxZMRe8YME5",
  "key9": "4u1uoVprC5oLG9scLMqpXLRsnvZoUuGjvigugGTigqcrLEaaxPiQjQc3FVA5CU5LHChQJhKwp3GC22czJdezZzAe",
  "key10": "2h1k9XNNFazep5xMsAfhwb6zWuraUaZ3yRWBEGco49su951HEmep9uRxY3hshQgseRqzDSnXps8MSAM2x9ozf9cS",
  "key11": "3tFY9uGA7yXdhsYTMBncyY3XAAr6v1xvCerdHN62zHo2X2MCWrXEjNJCZzKZ3SBZVENRSuqnz3AYsaUZ8EpQBbcu",
  "key12": "39wv2LyYobz61fPTJg3h3EdXC3Tt2v1AjAjcLqNK3QTGNiDwiNwJfSWbTLpeLLFpxtNrUrR8T3jo8nM9m83aB75q",
  "key13": "qoV7qQ4mGXLe7xnb54NhYykm5m3Yw24edbQAB1m3poipLr9zjKLzWe1Jq9WDrx5d87gMqnjW2A3Trq1e353cemo",
  "key14": "64ya1yqFVqt1NPBgH3DPXEoywPxS3hYG2WFFFvmGniQa7sKLu2afz2RLAVHnyp8rHPzs57RGq61HLjq3iGU2vyEt",
  "key15": "Bv7Zn3LfekWTmm4NPJ7XMCbSMnksjDiGgV2z4TQMi1Vj4vq4z5pHp5h1fALuLthuGXHgJBe8VXQ2XTfoXGMRSCT",
  "key16": "2879fLqmzY7mZFxxgGdF81fdBawfiKXEmP43wC7wZ52r9vcaNbNokkNnbm7Fm5hCu8X1aiMSgr9bDoTgvTEokS45",
  "key17": "2Q8n472t9d6SXCytd9UQvq7Awc4m327miMBGSxy8yTATw4wp3mScxR5dPDz4VtbJEiF5bDemjKPMiXwLkMmqErzF",
  "key18": "65dD9AUoKb5jqtcUsAdTNkja1Bv9XSvfeqVB55Tco55nS57Hq1aYpPZU37gfTUp95Nz2CPyNerpdk2xQZP9H9wwt",
  "key19": "3wpezC8siRELr7wViVFBfZh8KC4cRhixKoQb8JGJFBF6ymkJ6y4cPDSPVLngyfAhXELz2z2r1bVYiGHfPDkeRPAZ",
  "key20": "YYvWLu6QpBcEXypwbZtWadt1SXeQmZz19Ldgt6MyNXdGcRpUM5MwZh6dzhJ6tsFiGQfiX5JCgvDzmjXJi7yJsyR",
  "key21": "4Vb77eufHPAGcbZNgmRfSkAuBJsoF7a4FiLu6WQ9yPQyJGFS4YaZxmvTiL6PA3kLTF8gCWLJk92XXX7nTFzumAic",
  "key22": "2Auu4v1qWN8ovaYn35sr474HnQNAj3SG63FHX9srEzFXDEw7BzxqJpjfaEfs6oa4icsuPaYmoJFLWyziqzsZPrb5",
  "key23": "ZZrQ7x6LuJJL7Rk6cdQ7Qk31iuu8eGeLbj64L8Tw9kEqZ9NPXt92Cr5Kf5H2uq29fFUaDuBVBQpbC5ZeKn4yWqg",
  "key24": "uNu24w6bhVri9Rt1ckmW7Rk778YWvUYFgNfrtifDbKZzUaQ8k4Ps7rrsShpezNxcQKdWJRgvJFKjM76ZDAmL41u",
  "key25": "3KAMjFUucV9wKrnf7tpRKDGKQNhCav6EHwsR9gQsNfnBimeWQsJopyFbJjHqL5wXW1UGq8gxjJv1XnMA2c8CL7xr",
  "key26": "54cepLwgweyumQCdv5vcdwqjTBcNSZhRtKfJpCK23AqymBDGGZwE3ymCtVbm5BjqoKNn5KSecSjGvffhW6QEtbqb",
  "key27": "3cv2JkdySMn8sGBjrQ3Vo1ngZYJwHcnKSsmA5eNDZmHChNDfyrLQ7sttwmnT2BnjvbjAsqfYpDKyZ8fVH8wQWZgB"
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
