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
    "neUy6ePzCu1iks6uMW1A8SWGaDayKwF2tuNzdyvReyB6kdYVQXDfv7PUwaAkSyRUdkEjWttVtmebT7vBgHX6k4t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3H6MRXM7VJhvfabFBJiAU6N65GvXHWhEBmSMphgRAoGxxzUnRVSoFZqXNa3iuVfGMy4H3PHh4eF6NMmBgiA8GWgj",
  "key1": "3yLtiyWvpsWQoieCHZewmPKT8URXUCs3uhWjakCiWLRtEB9xJU7kqNdTnFbDkgWvmJUETNS54ea3NgJrwH3PjCVL",
  "key2": "LQuxi84GgQLZmmsBRSYDdfsnSevTSF3akwM3WMjFTbgMqCM1tHFgS5dwD6SgstsiHZTQicFFLerPAucZtsGZi6h",
  "key3": "3KyKAhgQEgaqZoUVCsWq6fRpLL1pz3WB2rFzxQ1icfaCdnTqp63zA1sPCotupmzwpPPHAms12kksRiw8eCYdYj49",
  "key4": "54M8Ap2uVEQsW3U6mGZjBhx1WEcgmmaX85c2iffMkSvmJLLTudYmetSFjs9X5p2ZTT5iiCMyc1nZXK3TFfb5cvfb",
  "key5": "3wcDm9pzNkcjPofFdkXN8BchVCZuQbUJK1e9g2BGPVTreN4hkd4cdaMdHVGoLiwD4wMqHESXRXNV6EewCcV7vhuQ",
  "key6": "27LA1mU7mpXDqyLsAsNGCpKbXz4nGATuaGcvyPGkKVrgx1RUo6yioav6fqNDxNEPvmELcu2qoUoE7bh14XB6Ct38",
  "key7": "65beu2ik6ZXiFJiYEmwgRFzSt1ANBswUEcpuj4AZwHyBe2xZsPMJbK2mauEUNbzW6rrjGhd2w5Ad15JiLCZXvqkH",
  "key8": "3ZrsxzMdLghegsAkbsPPkFV6eg8dib72eCVSrierZtP5CtjZTFrNaFSfBetCte8Z8eQMygRaXTxxQsd2P1Yy95RM",
  "key9": "42sHNGh6JNX8HUzrPJTKtmf3Y1hfzyZeD9LUrfsDUV7dEz769DF38nNMV6heGWB4poTGt16JtAWceeYZtLVBCs48",
  "key10": "5R8o5w2Mh4airHm5zaSyWG1W8ZTkkJvrVuJfoEBxCyWS4RKas2eA4CZtpBfN95r3z8RN28SzzeGNXBf7uYgrAaRN",
  "key11": "4K1YWCErPbWAugRBXNSa9jFL7k6CgFw78yaPt5U85jkVz2TjfS5g9UTarsCx3vLeoWqVqEaGHq41VqL8JNafqnzB",
  "key12": "5ZsFMxxTU4JrrL215gvyxybzjyZBvD7QvEtKFnWe5Jx8rmZvuGZbt6JBHfhfwFQJpJiLMGjT5aFFR6N13EPYcgro",
  "key13": "5wd8QDKEpcZwAE45XtWAwGGtAsbsvVA5qhqjUWR2RZ2x2arQxFZoCN7FLAazNcJ9v1ScLDMTnp4iUYW65TMciSjv",
  "key14": "4jY1zQvaKdC7rbhKwnFv4RP35wvHAJjqScR9n2Dw32v8Ev8zwAhiE245N2F1gXbVRY9gBSZ9BEMZWchBuxTRG9Mp",
  "key15": "3MEgQMqvXiVn7kRdW5AEZejJEHLLuk2Q1MT5QVnawqzfEaAgTyruPiPw5pXcpFMHA5eEnvmdqCRCzwa2zmt9mnYA",
  "key16": "63N6psU9czgxNE9hWuXju3eX8CxAeTyDVUCvoUGQcacTY7VAVSzEtv55EpPp6fdqnuPXPQdCHaeUdwkqWbcgrti4",
  "key17": "5qjJ2cPiwhkNhHyTMtfJBqBr86vscPQZ7p411rT9Qjmtu9fCiudLXZokPHxsqFMDJ1vvcZjSEhnGvx7dEzd93fzw",
  "key18": "cTRPeXc3rQSZLn99ujr5jQUyZgz8da8NccaqkVhiy89b29AG1K7hJbnmqCQMKhwtHJABRRW4Yq3Kz41cTPmM1ft",
  "key19": "3Btr6Hy5DfoZZr9uS7rkc8NKnLMpn4FFxDRQsMmHRmygr3QFfwUcLrVec2Fp1JJN7YCS41uZhSAnbGUf7yj9XA51",
  "key20": "3rfSCSbErBeAEoKFe7MfUSPC51VxaMtJw9NWYMQd8hwD7wHJ2GC7ZSdpsNgP68r51Mv6amYjfjLtydNwwycxktzQ",
  "key21": "45Z2tUuX5RvHsfgxaFiSp5unxZpUx7km7gMfLe2iZswhv6AFqQFv7CwV9gWwSP1pD2mjMZsLaiCcV3oKiGSwwR4P",
  "key22": "2UQimkwADq9Zgvxh9TTjcyJwNuLP4w5FcjzwLv1GCW1Lrrabe1umUCr2ynSzrqXmJi4TtBdF95KHtpmTnWPitUsp",
  "key23": "jSY4LRBECwg8URJtohtNJ2TDp7YyLjX96pzoPKCypVMAFECsEu1ZQ2zKqqsS6Vq5NWdZ25FtsnwWiPsmNuLCCv8",
  "key24": "DxMPZtLER6dswV3Y1kuauPUYjTnZuqUahSYAUiJaLduFzC59sLHfkQ4YfB8hqnvfPBhEp8eshm4ExUyY8RtBMsG",
  "key25": "284tMVUcGNm1VbjmBMUsV2wpGWimeSqHVASkrBmLabznTF98yKbV3QSJKUvNsUapkPFsi3CLduz9Wyjnk6L3HJzn",
  "key26": "z2MKYb7KgQSRegzwoXa7fvSF9eLafxJynTvmoz3Bv3aX4XikmoeVeZRAMUpo2JazatEYaZ7ayij1AZ7naPnHBsx",
  "key27": "XMaMJPp6nzcgSnx4Zw7Tfup5DoEHdPmst8hgR4pMcDURGAnokB3GNF4KPxM8TSadNHMR4AZjDoe73ajReqMrc7u",
  "key28": "2VMtA5C6eQRocMQ9kb64Xgn3vff9ytsMF89QnQxLT8mFCrRi8yTrXTsQ9vyJGWodfxQQRNEWYMoh8xsiXuu1y9ac",
  "key29": "38oY9EnzwZCkgT5tvdbMynUsaWTP9nyMGUW5sTbrk2Tp2skgdvqjtSMyUhVwoydjmyoahHfvg5BWj2muXRMzUhhR",
  "key30": "2UGtwQDsd1PFLaos4r2u1HJjW9ZFaZPUzdij741jrBymWDfNDSbE7vpi3TqYxqdHQusXJS4v73AM6abU6JUCUuAc",
  "key31": "PAQ8nNJNGAefdDnHtgdr6dZZwyAJDj7athJdGZRMykFN2yYNqWWWDRLzqVWiJWc1NBE3sX8wAhmDKVCjrs4noLK",
  "key32": "66TpnUNpkqSkcLytAK7tWbZoPGeGQh1DVszgQq71GyGKVJY6Wj6obk4ieYrTAne71Z6wYEE6Dw7M7XcQjw3Pq7Fi",
  "key33": "2mumMSA7eZ4tW57drsSuNuYqCA6pVinMBSkE9a8Vz9F2oe5uxotoT1Zg6ggYoBzwwXsJefHcZeexqvKXa5Wrqn5",
  "key34": "5PeKruncUb9v61yXqREagGMLzgSDb3ntgavcBKHeZ73XnAjpvoYBAivcSAEaPLYazdyVhq1w1zAVrsQBYzAXidmH",
  "key35": "ceprLfnCBnHWvR1LNQZf6iw6NQvtqPDV3TBBw5ZNkoL3SfMAzKoi2fALRDJbPKCPumWsY25XkDKsjUqSZqrHxJ3",
  "key36": "4MVpwSu8aNA9xrVj3uEapKiKoNKxsBc6gtzRUKw21h78NM1mJZT8uzDEppvfwwc8D1hA3wbCpyAYRu73YfPMSYiG"
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
