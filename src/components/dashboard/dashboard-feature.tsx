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
    "2TrUuuRKymtKaq4gQGDrmcZNPh8svePGH5YQadV3j7p3K5ZG85e9UTTwEGnNgYHhUVbCQNEPAahyqj5ZqWF7WZ8g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bhzLibHNoyb87oA4t1GiMS8mrn7bfW6VZhRuNff6U3BJvAoPZUFFsYyYmCQBUPi1SLsTsuUT8d52Q5EPEjocDTm",
  "key1": "AosCNNSA7Dnppp8URTFkhGWmNPcnrsqqKAjowwmWqL7x4GUNdS6xYoeBnJGhX3VFJG9uhgFQgqd4n5xRMR8BLHz",
  "key2": "zzJvHD8dUP7SFY8EerjA2gfKhCoKTs719LPGEiBJotPyREgBoeH7xZLx1shtwiP1XiZgSuffksdoVsKX42CQe8g",
  "key3": "2riqca5ipBCtDM4fgCfrWLUKwh6UzSLmh7WFsWDr29n2qixBotukuH1sFso6fhiz55eqaUSFiGL3G86YVhvjKBVv",
  "key4": "11FWsfoj8mR1JQkXNJYMj8XJMBn25qVSUkCkJqyg71GQoGVN1kfk1SN7rpzHkyKmWp156QNwvrroeHVagoffGG3",
  "key5": "42kSYDUQH3ZKgk4By1r6nPeZ4tmSzwgeMib27nEx24qKocPigd36KyTFJy6qg6TXzxRHQde9ViMa6R1Ak2h8LQFb",
  "key6": "4BiXsFh1ksRKukEEtJDLF4tTa5ytddXxenn1p7scDscSri3pmtjGHQbVN27mvZnMcYjeSEVPqetf5SB1mWeSMc8q",
  "key7": "4A9EFWoUnm8NkqYySADi6L8j2DdSWctVMXq63fvH2h4S8VPCyBgvkgUwgvuoq6gNZGNPVAeK88YxNDxY6GT6Sb9Q",
  "key8": "2SyPxBm1PSJveNwMGXsTRW1eLuEzMevfuxjHed4Nqkjm3qSxkWkVHHiCuxCCDerKK2k9Wnf3JNdQkzi9X6fg9FR1",
  "key9": "5zbcU7NPd3FJqdnkCrwsawJm5tZ4HH3bY2AJ2S2QSthceAw5MgLL2kfHEMsaeCyZTBHQdtMkj5RfF9p8QbHWikNr",
  "key10": "zwdBNZj2hokhNKhLNUPYd7CByTfHEswTxVmEMg6biPAtbMVF3rA54h8gWVriipK9BGXjYGjCrYsVHugjctaN3Uq",
  "key11": "624Cg7fqYDUGYWpsSCyjcsV1RsdhRFz5WmU62fRnVVFXWqodpiGbcPVUo4wWhTvortLNpjKSdUhR1iroRKp6vykw",
  "key12": "48PHkX7MwLNjpEckv8worYiqCq8gLNfDs6XyFfq9LFqwt2PU2gb1NhkQndBpoNsUC1JitxKVm5ZCCW66BAhVHddT",
  "key13": "28C9McCqe3WWxMc69XWENcU2KG8sr3TnV9m8vKT9w3RNf2zLHuzeEf4SCmin9J1XnPumvLsjQy39tHzhfb4CdgBk",
  "key14": "2iYrR7nQjafjdMMYUscrs5rmtYWLSoVvGwyBB37zd1RBgbWtgrF51j6V1voHGMK39uTJDWyKTQnPd1YVfvb7ZRXi",
  "key15": "3WmFHEG9YbbuVB6axjfs6d74A6sgFtqQBbxamvhmhDeXyFKoXsJynYyGYQXkBFvGPy2Sz9SYvpq8z6DrrV3Jujr6",
  "key16": "3PQoCniVdBvQXDNCfeYWnW2a3MXJ8PVgLBUY2eEXST55cb73wQ7w6xeUNdiGGzszN9a6UUT8icdsggVFgGyVwRNn",
  "key17": "mrr8WxhY5Jd4jSATcKc4pGkgbUZn7n4MqTSvxWwuQjQBoPxeLye2r5qy5FDAXJsFLcSPRUpreuSVfSTMkVrUPnj",
  "key18": "3KzPUbxK8mS4NLDhs2gBJ8sUDfiLajdAxZB78yJNtMeq8avVkHy3tk6FdSdGF3DST72REjQZ68b2MwESZuTTcw14",
  "key19": "3iK9etkdefDuW6PKF3jA7w3dxawDjHCdwhrvE1CFtkqrXrLd7ArG9NkgqnQKCL8tZ97XPQnk2mNDvSsJF3pkxVCe",
  "key20": "5JDGBBdb6njakkkia7exEiEozDPy1jfoP1Ui5mSjzms13VTpUZBzvmXGWK7fSb7KGx9f6LCX5FqH6jXoSb7CoZse",
  "key21": "4SEGjcXuSENXmNk8dKV1MbTWRkqitMMBfXWPgB5mcViKoKK1ZjzjoSPjehbLYVKHdL1vY8sQYjVRZXtPNJXJ8Y2d",
  "key22": "2EzxnMrZcr4kKS1rUWh3giUcan89CxoAu3VUnSzZFFsq3FhDfSfyHtCbVKGTGs5dA9n6SVgW79vNEiZfrsS6AHjo",
  "key23": "RruV9jjJ6b6GBGt1BLp8WUs5foq7FKN98QzD7BDaXBHRbCjtJAPHzoJiBjg6AB7HFGF8x5K7gwa9Tt6o4wywMsK",
  "key24": "56TeJPK4ztfDD4VTmemNuq2mGhPerBWX62iEbGNtwjgtyeSEVS9yM8gHRTZBENqUsNWRHTWsik5nQUuSbYHVhMrR",
  "key25": "3ubefjVy1DsoByEP7NFiNKXzndevNBHnUdxrqzymAgyJ8HWjANWTa8gVTzsdiH7zDdq18xR7cPpMgsMbL9WXCviJ",
  "key26": "NXUWgA48pqktjEbBWswBsHBYprEzU9yVFodBRD9D5KqTeucbskhjfcZgPpy4pC1acBrnfic4SzDDuQzVGTwozsd",
  "key27": "5xELTV848S291brdJj9USTT9vrYKCmuXHE4vFouU8BehVqm8iY4C3xdU5PmmdPHutJUQC6oDPY82EydQZN8BbN1b",
  "key28": "3h43GjBag6h2fyKatX7VTtiLaZK3VDvaPLX8LSkn3SwFmLXZQe6SDd9gvExjWgq1Vk1VRrDK5bBCapEqr4D3PnnZ",
  "key29": "4Whk3ACgAqm1czBkqHsFNJLmrLenuvurUm1iJQsbzjFhYEYhTrevishHfswx1e2gx8EkXucwAjgLFoorAZcH5WmJ",
  "key30": "3FxNRCoZeYzV9c3zY4DToLQZPV6X4cAZfMs8eA8mPNjUwuEmSa3AX689XxiBdoqaWNgseGsnfGxv7FFfQUVurJem",
  "key31": "3SLcJz3mjqLsp4C98guFmmjMbU3cfeUVtmoye2NrYQb63QtJjsGyMcR99aEM4YuJ98xErqrXeEwNb1p1VcGdxCFK",
  "key32": "3x36e1fQi2uHTubBmnb23MrsQaRyG1ExRP8YSKHq8dc4MFxP4iq5Wb2G3HNe9iTu3s4XTZexUTmZPeWbyJ6oNThP",
  "key33": "2pb2xwaf1NRjMpATRXcs65nhZFGkcfqkgbCiAi11DETj4uURDoUpVjfs8iMxLZ77oApZ5c66RGKXKgMgRoNWd9FC",
  "key34": "4tSgSWwdg1BynU1y96feJXF2XNtJw4gwL5dqFz7DaTR2rmBiJEmPfEiMKFFyR5FXe32u2zy4tArCMLbNhx86G9sU",
  "key35": "3Py24Aku82qhhvK5PuXnEgnyg2yPApnSAsfQS9uLmXVWj5xezHcqNunahEjQj1GnYewP3m5eEJ2JWBurwCZsEoFb",
  "key36": "5TZ8Z61xup7ApodbkeB1dSa8idqoedgQsbKGQeWTy3n5Yc5qnR14EGyukwAuR1qLpLhQuSrqAGAaHd2eeomrXeyg",
  "key37": "D3PitK6RWVXieLYs3m3xoEmTJq6bY3Uv3mP8eY1fEawTbrarWSN5ks4BACNwgwALCfoJ7vkdA1JxfDQRGKBr6Sb"
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
