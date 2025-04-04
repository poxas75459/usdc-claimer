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
    "4Xavc9EeJQJsKyQWpeZCeVGxe6Z6vnNpn5cf1ZBUHrgxqeaiRN3VaF4fWKL4q7VvuUcdej9HzytfvqWY2x3doJsJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6686HP86W1Ai6nFGaqx3zqea1ryVoEjJWceyfcMpjqbw7w2YjVcAQV5Wrgbi1rFxghGd8dBym5nTF6JeC31SRmWm",
  "key1": "5HoAKLWyjRv4p4Wj5f1ryUR5rCZ76UeTogXdLXpYBiUWRV5SVirLXgGUg1h5CJZ43BV1nZoU8ovidTwTEDpTpHX6",
  "key2": "66Pn8gkbzoiETd8FNhSWd3McNKiATcrSSLubvXfkNnsRiCa9ZuBtmcy9LahDWf5sst2kCt2tCxttWUEhN79v8wXu",
  "key3": "4S5fjFTHRdgfucMQfXeUKjjtrtUT3ygoyz4oBnCaWFEEs2mSrz5K2hjoLXFWCigYNBxnmKsde6ReUH1XRUj2kUsn",
  "key4": "66ELNRW6k9DrH95PE1CHdmfi98xP7V1GMbcvk4e2sqYuweKSwdyUc3Q6uS24vqvn7YLLakfKW9nd1E8uMv7JamnL",
  "key5": "2MJUVQpQj4Vq9Vx1XXsqs4wdkLFgBqxeFoBHVNiZA9Jw5e67efLouBGPwHAJZ5es5fhgNqZRV1TYcw5jz4a5bptx",
  "key6": "2EHvbmV8jQfoAYsg13SRMscCtUpbvicP6zLS8eqTPTnu6iK72LD71hwgTLJioSRETuSsSxnngarXWeaLMzPTxbKL",
  "key7": "rpp2La5CbqQkfQUAtYe63P7iKy4PscLBKjpSC2CfMa7cNdNVeXNsRR5Ne7ojuhzaAxnNNBgbRHuT2rcbf9qzg73",
  "key8": "2BpxF7Wnmhe4rAw756RmA6k9R7hSe83psiQPGuir9Vp9hVwWKCFDTfceUpnzK73kQj34GpsjjxpurbRMY6ADT9Dz",
  "key9": "2X3MdfDFmsTmbm3gp7iW33Uc8XLMQ8Gi4uhuPxhSLHM5N3oej1CNTxRmr5hoV1rjRRNYtsqNMAX56mNTNXwQpb7d",
  "key10": "2dXFvdmdR4xHoMzNCeNCn9imfoJtVP3aPNTmvPUd98AFEaf435kzGqNnhAfdska42MbBJzAHa8EHVqFVi1hLqitx",
  "key11": "4TZ9R5VsoKAybj5vxMnyiqNuYGieDDzPELuyFDvyXoM9uuc1f5P6BtgVfs7VAoQWUd7JKeqvk97rf1aWejyvhrC4",
  "key12": "snWdex3Dzv3QupBM7FBUGCeBhxswkqwbcwDVcg18p8K4x5pjcdf5ZddQZu6tXSiZ8xQzL1X2nA33yarRDKT6GXJ",
  "key13": "3GzjLDJfoUGPkhEM43TwMsduJkYhgazfaUrmXLJfySEqd4Aw664wxVhgL8vTTfxsVK11vtoTEjXU39sU4EMzuMu8",
  "key14": "64ZkrNYj5pXRJMjE6Nnc9x23NCPe68yLaYu3XqSdruEU3hkswuyVuJfaY75VEdTUMiXyxPuPHEUPXkRTtHGaJ2G3",
  "key15": "52ic3DhmrvjfcaPTsnXyC16Z9LN8Bo4iqbEcLKEFk13AxNP8cWA4iu4S958qHXPReCFxTN3TrmkJ4hzXHcFgRkaL",
  "key16": "2Ya6L5itBGekbLKq7Tzv4uR6jBo7X1rmtDDMCrhNZmA5C13BRDJcKtAzP5QU7DYDUDzzmLQr8NDHtiTLTQK5cqx2",
  "key17": "3LGm6HGQsbNSG29DSchDK8HFxEatC3noE8JXL585pPbsdAGJbJUr7hCDrAMHeLjbBtfvFcGqAicGxHUDYsGw6QB1",
  "key18": "3cJppPJKM5s6diV6Qkv6uuoeM5oa4j5Jp89AdoackBcLk7MTfz6VCt6XUhkoUyk5bhj2B7HhVLCFZ6gNZbQdken7",
  "key19": "EayhrxjDCayiDxPGgWUh715T6XB4ozyDVUszV3kKyvcUQHUg5J9y9qB4S2WKGXv3XERR4aLMxdNXg2mfyHBbdV9",
  "key20": "2XQK4MA8MQTNAraknqxWZVmbw1BWSXpGQCxHcRZmbJUW39tX5BNx62mLw2BvdB5Dkzd9VQiueQ1TnFxvrjsePqax",
  "key21": "4o6FiKDxgREQvemsjLLwE4zSaB8Wjooi5Qj6iZK6Ad2e6YSRp9EmVF9EYhXk5pi62g9TC56FKFefaQHKh2gxgC5d",
  "key22": "4hEqLRbuwwxPCbDrfyUduwAPsZWoBNhixH9VVk7tjNaguFRk3k1sYUFKgz5Pxc4xmSwBMxX5p8y7renzs9bCEPwS",
  "key23": "35ZM2TWZ2FCYLHxJtd2tmFyrKCpgFqE1YvJCCiyMNtNoUvi6M7DSEYBTtLHAqfE72dt4exsM5rZmcyja1RLCLZFH",
  "key24": "2NRhUUeimAzf1XcY1f2sLbqjb3AMGQbpDvf4ioytTvVRg8dQxwox65DHgpHwyCqYV4jm9JyY3gPCdd2Yve9RuRfF",
  "key25": "4hEFHrYUwFyZMCH5GSjnB1HZ4kt2cya4eD22qiMmvLprbvWykYJfZdiUakTB7zyxdSGj1wWWJVkf1jH6RvvQeouG",
  "key26": "2rcprETdk1vPNdg3x38PgwMzL2LPmjhn3UbRpPgVXUufywJV4g3XjWDzcqE5eKj6BFsjoTzfHGMh12jGQu7QA9SA",
  "key27": "2y77u9b8UiaxGwzNKfeQxafKHyyqXPNjDiSwSiMoQwzCwJFiNdxuTc7oypUnwjVD5CWmYkfvq7mko9bNo5YB3kRT",
  "key28": "5LQwuERjhtSaQUdSDMnL68n9Qc14UDMTAnkwYELbERRQXqVzeKfNDGaZTo5jmaJ7WNNsGWrkLgHzpodNtjF9ZqW9",
  "key29": "3w6SmfpWAPwBrc3sWnHTrbRHpmz3qEhaPxcgSywHkore9diqY9jeDN6pYDinmZRTCiDss3rSFsJnt41xnTE3WM2n",
  "key30": "4u187an6buEvtkPHD4RxYVH2X2DrRDJaEwWtX7pNyJ8syy9myA9fFvXEoDy68N6URjpWdZMsw1YqKV8WT1Ec8ZnR"
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
