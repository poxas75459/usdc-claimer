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
    "3Z3XyvDgZ3wv4UBDUqM5N7QK1sTXk4maE5ovfkXw9TAF2JmYmAKCv6qNZ6EzVTg7at8GTrxkyYqj3zdudguvAXye"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57VMgVQRhbGVTzb2aENJNR84B4Lu78tfVs7MG3AwiY674YoRi3axEz88riuKxdi53gQ8vpi7AFbLMJm4Y7KsisRM",
  "key1": "3jQ1tFzEWmL4WVhQGQVGJtcz5ys8g5sgz7GuCaBm9L8ZZK8BaMJmgHSJyx2cj2h3q4h2Kv6AaAE7o3CUdrY751Uo",
  "key2": "361bBfKu6nV6pi8H6ajE19ixYiTGjXEs5eywZQTUf351tzTSyGtUpm4AajsMhBRoTzX4si9AtB5LLbg7EyGVwy8W",
  "key3": "2cP8ThmrKFY6zChqAEogZxZdmxzuggyeZsrYHo6rcsrvhtnsGdpL219QzYM8SMUVD8Zc9jdpAmJen4DaxazQow8W",
  "key4": "3VR9szJbX9jrGhHTpAbs9zng5Rngz4RUgn7j2cwJ9jaC3GTi4v5qPP1d9DMmaVPqnEADvxJ1cSHcNMZ2kCBmqfdU",
  "key5": "4796aktepbv99iutm6zHdmL2N5TaooGQ1vJRY7NzrqHTaMeAGkxXxytUk8PfnZqrqCMBpfaAeCCxPknNv2TF356S",
  "key6": "5d2bCDrESveooQxKZtngMvN5BKzw6W1n9oXxdztqovkoD2A7EYCPu3kJUPc3ZBikfjSvPrkbVJ18ytuf32efq3So",
  "key7": "57fm1GyPi81HU1yzHs9pxPfV2yAY9J4qtTm6rRbdzyBFENkovv7nHygUgb5Y1AvRvr3hLHmCTqL69HL3GjvT8Lsg",
  "key8": "5uRUwvY1VCgUtps3ZZoTWgzuBJb7TY98Z6SV9G5zEQZEMVmPNB6ye3rLtwyBc2xgYF3sZiERXWbdCunyCmiU318n",
  "key9": "4vYdSVMrkMu9VsBx7gumYZWxgVPhFeU2tVZqTfHsz232y7QqKDZtgzNkqgAFP5bMkazqub3B2GCSk1QWzmuTJp1g",
  "key10": "3zhjHrF8bTv3RCgVsyLH6BKss8DqbgyUB9nba1TdmgabvLysmcBujifd468BCxA8LRAYTxxWevtTv6pE7MmRmfy4",
  "key11": "4G7LgWn8uw4tCjgDGLeXRjZZW8GQ5spF3ZfjY41mN2GiHuAVCwAC5SmWUMBTN6ZRgK9afg1rxRB3eDb4Lch6XmHY",
  "key12": "3BxFc62dh7fmgoHYtWoMK5dseeURctbLEgWp6xVn9Aivi7rnNmRYh8nap1fEzyBWeC2g16Mpr4ZX5DReHdmhwKRB",
  "key13": "kceuBVTu2XSYmvFL1KpNWWjtZuqbPn92zXnbwEcMW7hBU3M6Xg8vk5f25QMpAMwz8zaaYeqBA8LHJEyDhoY3ddE",
  "key14": "5mJRbqgm7MC6UeQK4w1Cu6EWVwNF3iE1NtZsi9wKN3oWWNQ8omjvCD4qNZCKnqqPxsc6A4vrNCD5aRwnhz44ZvPV",
  "key15": "3F4KukU1hWhsbms17jr9Hfu4bqL3TcarWUp9mCdmd5UWg1NWA1x2Ti42rmNPghnx3coLkKY2YZ9PpGB2pAxdMXbB",
  "key16": "5a2H6gQkahoYYwW3phbqQtroknn1bd7GJKz5qDHoQMSaL114grcHiMvTf94FbTr3KtAX8285ny2aN4G5pR14r3Wx",
  "key17": "8uQwPY8A2tyuSqxXtAnwCD5XCXkY7uD7wrkg7hkoMZHpVMysWSD54g9KmavtjLEbwMjnUwWefURE7TuxobMhHd8",
  "key18": "oSKQKJjadPkMJwb8yF7KHRjTHhTc2QkTqAYsW81Nrqfe44g2YNVje78MFscU2zZm13Bz7TfREviJPiK3jbA4Ve1",
  "key19": "2qbPZ3zba5Rgdn4iGFCm7UTLMK2fdtnzCW89HjLw1pAW5gzCs6CCaSDiNGDLv64VSN4nGCnsSogmP54tBBEBCb2u",
  "key20": "8Suj6TTdm2njVkKV12JCtm9YLS7uM723scZEFRJv8ZJ3cAnidVAzasRyVe2k3kcuGpLEKKXi3gr6uxJLKsEvckE",
  "key21": "xwfvGcmpXhi6zikp42eF82KNNRVcvfgmMD56m9uRcbLDwbxRRWztVjGbCPKvWh8XZpbYyoWPwX1WzaR5UVeN8BP",
  "key22": "2Jvj1PbjKe1uzAPhe8v2NS4TTDAmAwHbvSq54hqSwSWDP9rQKP81ehaPTVBEZqf4MnJN8rEtLaMr3FvYKoJKtGqK",
  "key23": "4ZHzp5YYrwLV53anW8xX18a5jnN1mUkV9ALRjzjCHn5uBp4NeknP6CM3coQmGesiEjWinLAFnqrcH8PQ22umUtNX",
  "key24": "2S6eGxtv1VA26NQnJfb7nMS4XNg8joVHQrXXHiUcQQU4VRLmn3xuLhxCJphrXV2WTKnooRcL1wCYu1HmCfcbihcP",
  "key25": "3AcAQ3yuGLXD5tvPkTmMHRkNjqKeiKCLZYwi6botBK7m2hdLtxyaco2o12swVxnEvzv4MztGkef3D2PBgZdQtGjp",
  "key26": "5FZMs755sTAUWPAt3TbchJNaQdqgoNKr6zFVRmp5855oE4po4TEoP5K3jf3zZPJDBePkU4K89cnE3gPqc3y7HSZZ",
  "key27": "4B5QqAAk8wvRKSmXS3h6NKYxMK1kKjxLy8itvHFnTpWiddXihVYZbukbab43hGx5Cc7YuWKYzp4KyqkUqhrkq6m7",
  "key28": "X4fpLaoZ8oFxdtuEi9osxEaQZ9RPbrGGaxD88srMphP1xZ8oqJwPfUc3RNhm1MPCDDfBAKAFCrpzT8YCaosgJ7o",
  "key29": "8j6AHRFNP8WUWQUyuAKMfizprQdRYQV22YCvNWkF3dogCHTRmDiXVRFVLVdRa34qaF7XxWd79cFTSPedg3Y3JoV"
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
