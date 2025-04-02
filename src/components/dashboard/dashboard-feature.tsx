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
    "5Souy2eJjsMYFKgbSr5mUMUTFGNQt2DG8pJUNHcHMvZnWBsVCbEYSXwkdVuyEMmJTrwiZVyU5UEKVGgqCyRc96mD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21rsoKFrMEw4DA1QzHhx7rB5HWSV1KzVqDXTVATb4tp9iY4nBzLCkxmatPJ6T5RoHaRdRwXLfhDLRtFMB4rReevo",
  "key1": "4Rn8nRAakDFg1x2eAq2TZVtvXiiEL3LsohpVWq3LdZeDAPubDWE4nNSJkkqsdudorwLxSjLm6cKkqrwQRFJrQAsW",
  "key2": "7m6DeL8GVJvSaWdwfBDk7YZdY5e9eVgrPfAnnD8zYYy8Si85YxNo6hPb43JrmCv4FWQcfKWLGitpXXSVBGn5R83",
  "key3": "RGqsmex9zBGEARGrKNLhwjVSTHNTFKnB4WTeafrNq5ho6vdcw2jNiuWZj6EqCrdeGL7eRzzCzfteCBKF8j8hb5k",
  "key4": "3uAVBwv4d2H7jZN2TX4LvQiFByYDwjQdtGKnf6L6qSiGhTp2AiD1UizfGQL2zDesYGZKgZEjkY8GtzJFb2mcZkeM",
  "key5": "3BEBVc93JR5Gz57B85aaigXp8wUSA7EZ7iEJEc3TFpzL8gQ8pttjXHRcN4wdwYF19mPza9oRpVRZXqV56Ba4dNST",
  "key6": "5sNb4GrHutv2u41jazZGfRrM9Rsw73ZKUGzcP4NPtG1bBfwwkFujAg5bouSWYkmJRmGgWL3nMcvMXWJyfBzk2nvj",
  "key7": "2sCEwVAGqrVvisoLCvYUCWTs1Gryywi6uRCqkeYjx62A7cE25JtBW3Fbi1mQq5k19rxS2wKM7h2Nai2iJBaUMKEb",
  "key8": "4ok7B3VPU45obHZPVgiQ8bTsW7Y7vHYuVBtfZbbcRMbh7zZxv63v4Cb37PA4aCp3z4cpbLEUJPXKcA3dBR12KjZH",
  "key9": "2yWvmo75eoawjFKGHcyhijAzJ2ekeXYTSRsW382kji4o8hkfjdLaityp2RGhZ4mYHX3hP2buESY32ACV2pJ3aTnd",
  "key10": "2hr2j7ZYfZ92eWvAZaefAbtWXkjyZ2gGt8YgSV8TcCuCtuSmuMnmEhfbVorT9JMUGXZyptXJebpTGySwxhA44QZt",
  "key11": "5nLaxsc3tfNfzdVrAcm7c7EiWMci4E8kWTQdNtW2ieeKh6pQQw35tkR5vhghQckSQxrdkWgSHWGHLUjuGVWR6eMo",
  "key12": "Kkm1C9rBHhQ35hu19wDuLw8VftU6EThALQ3GYJ5BPqWh2C7GU1F6cLuH2r54DpM5uXhmo3Szcz2ViMwtdNgR3MA",
  "key13": "2WHdhh3ySiRzVL2ekMSyJL1cAWKAQD1NsYqEYD8z33jqRuU4trv2nuwnZ63z4JYhTkdXryVDHZCjME7rXrHiN3DA",
  "key14": "2FkqwECgnVDL5Y2s2HLVjzQwYu27Wd4SRn6dkbRzNKrv8A4a3CwKpiGvJQdsWX2B3m8hTFZGYo5eD3WZsXKZx4gx",
  "key15": "3UVDZtR7kDSamfGmekjRkRBpTWSCh5zCu53isysmRKGWiQxphHAD44hm2xtoQw4tHioxcDkMGCVvzA9Kgipc55cC",
  "key16": "3enbhd1Y2AnD9YBwhmbpsmDYE9Rg7Mz75P7HErCF2U4bSMV3QsvncmfySKv9Wz1qiADK5dzbihya2Gehb2oADbz1",
  "key17": "5g3W1qLXrGCuDfVTviGKXoo43PLK8y1Ngwe2bwhXnqErg942FZ2D9RYXvu1oCaBrtv5rFHPqqkkgrDk3piWAwdVD",
  "key18": "5ZvuFzXpR2yfFjjnoVgoHC3obKdGaKctFbcwnmgRDYbJVQcqQkyPpSXu18hcRvwFS4RC9vGhrRR5aGEfz7zwxs61",
  "key19": "2K3T2rUccHkA9NtUYsfzVXTyjuWX2kLVqfzZpUYxFyLfWKrmqbW3sGgH1rTc7ouixQuuWjDtCpMDpvjK8kfCwdDM",
  "key20": "4NzfnqAq8XEYuVF9y6Y4jF48Zp2uH6M7pk4smU25vyopwrCSNMSViGreA6LKMduu7Ws3UVRe4xF1jjiTLpBT4z6E",
  "key21": "8KbcbzYjWUYD1S2BpmXwdmoE1tJHPzQh2EsF4Xov961zTLuzKzPNxwwz398EqjuYDGRfGWn8spyBpKh65VLbEB2",
  "key22": "4fFrASxeqV7XzzArPKsuok2hSQYQd3jGbXqfkxuewvZNE51acF7FZ9dW4LFDkQ4bNoVdqynhXGQo79UrXcd77WeZ",
  "key23": "47Fo3dM9JCwCNB3jqBt6RtQ9F26VG8iGkjAp3QAz9zptWhDGDqfLCevdAM3nzPSKrKEy9V4eNXiVn8RwKFN93MU3",
  "key24": "38sphiMXiJKzYptHqeoWC6EE9KWV2Jq65ugJ2TKTQGiKfjBa4ND7jktULwhqdYnSYjX8v5KK94tXGjSA31hTxzaB",
  "key25": "3M8QQ8ENkfsxsjEsqtt3FHxxNBYPfWbB9FfmhZKwXwaKe7W4ezq6zJ1RRWaviD1rKXuXgwBf3zGxacnipCnMZKoL",
  "key26": "52azNchYLS1ejNdYyv52o3wggRwwAhyZEJn7LM5j8SiuEaY8AsJrpgFefeS93t121A7iSTjjawcZ2i9hySUUnmCx",
  "key27": "evvU7YkfeJhfqkUS4DK8Rsx8RFwvtDf8as2H8C3c6WHxAHzz6RuNLfot8AvAT9m1x7hVDSVhpDViuabCj47qDgt",
  "key28": "5BDCwgNrXGRuaAwEFXk2ErgHEAoJiZqmb5RyHhhBMSqyaFW1D4rsSre4SpnLgEwT8ZDXJoD362zU2pxLiRBjZERP",
  "key29": "3Vawoc3yQf4AodMmi7kj4FPQ4EVanXYFZXJrgvhQQWaVk67HcGMVvKnf3jQy6A4rBX9s5LuqXHfkSuCauRwU6jqK",
  "key30": "bVQAfFzWbSarpJeFXE4PqKZi138rub8fFxEWPVj1R2ad8kkv8fFaaB6tDSBkRMaon1bZtp5TBp1N1ARoWYiBWeH",
  "key31": "34ZZJAzFCNkNC9p5AsKHmJgjvZYSneZSsSC7rTxyn2yxXKkE4TcnJ31UQprw1SUUfSUd9Kts3vVt18HXKPwQbZ7R",
  "key32": "3jn9QZbcorphW1JwQdyk2Vq1d5CatbBd235cFsWzdhKq1utZBXiAXgmQ1oFgZYzqHdDgUeca9zNCCfzpmnN11A43",
  "key33": "32H49WNZgSCGw3ff5u48KZasSkENeafPi6r5ze7cGuy27dZE9nBXaXii8h68Q84ZxLSVJ1PbtRpeNGtGhWPyKfT8",
  "key34": "5jvYUJSLJGNJVQUbhUmcEDhWvfmjNVeZB4BNL7nKRAkY4kwf859QWKQdw2Cmqfou6vG6TJcDpZBhmxN2U1nP6L49",
  "key35": "4gpaqDkjBSMd2ubrSBPFA47jBwPqLR9qphuzcBnPAUNBvWbUgq1YinQFj84DAS9tKwUXfNSHCi67mvrCEgUEW8jR",
  "key36": "5KGWKsPG2bq6U1pdg5sREtCbj3bDc2qWwBKBkqpadVdazFkzZJjYfieb31bW6Y2JbdewsjUPya4QedyUukJVLYXE",
  "key37": "jqpr1838UFsPBRJo5LxezTQPETQ5nvJJtRSmSwqtdUYFuB4Tpyae9pg1mSxAeDsX7K1C1qqavd9cptNRgFZFRMK",
  "key38": "4kzYfK5S2VkHgbw9SoR5yGSDAyvwZpHSBKzviddZjiW8RwZC5Y81QL1ETsn9CEtvA6Rc7xFbLDhKDsU6PYGXqQs6",
  "key39": "2Ur64dfkAm35Fbmrs1uBqmJ9ZgjCZADhHvL5kM2gE8YiDRt6hZi5uC4q4f877P8pA5U1arBeuf7ce6XN9cuk2mqc",
  "key40": "5sgZvNrxuBc4EdMNXgYGcJFSgy71MpkXNNN21otqGg9ZbCascWEFBLARqs6NQVJ4Dp6iyNy8syfm22hxmqZT8sfK",
  "key41": "51ByHB4Rsj1Hr94KUe8eB8xmvQEc7DC7ZGfnvo2Ch6qfcPwud1S1fxw8pupZS7b5SmEe3asaiisxwG53iUs4JZAU",
  "key42": "3Ad5QXSYgYCathsATbYMuKxMUbH6GX4Ja8RSoF9Ns9foh4RgU67ugfyX41rA7Gb1T9abhizjq5V3Z6mMgRC6gzeU",
  "key43": "Kwgv7Fnmi4FwCvAdWbM5ctckY9ThoxpxTU6wR2q4WjDHK7nQHV6bdYh4XsuXbZoZ5HCRMcjV2pttoEUhCBCPW9H"
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
