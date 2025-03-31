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
    "2zrX8hFCzHFpn1xPJ8uoq5kShYzAFuqNr4CVpwFj8hteYu8FEFvnCG75oiWSVJFxGv1Vm6NFuP2zhhT73GkFVTmB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ertbogrR9EztSvutwYcSnT2LX78GtbzmJ8GJszK3dHj4EDDhWwC5ARGm6uMd4yfZWojpZLtViGaKTX3QtofJyBY",
  "key1": "Fc1hpToQmBLnyizGbszFDmMaCiC223L5ViVapPDbC8pVtSXHdfqdYizGwFEXtun1zmz3Z9TjQRv1zGey88AxQAG",
  "key2": "2ycJmttZqA79TtvyJppu47gEh2rgqDqGFYg7jvM8K4UxzqQRCHbnsmGAuPA1s2Po4phZQnyH9qqTPbSEKA67Sdpi",
  "key3": "5ajaq4ShBcfuht41Fa8L3RQ7npMGY3oUmNsvoxpZTbGtnyJmixZp5eWhZUHf4qxLRfqso7csgcRjepVzPf72uBgt",
  "key4": "3LBjj1qtA2pCgbXm1Tonma9Bq5RYrsNYZEsV9QExCoQVFLYtEQFj1jyEmBRepm51njRD5MPxR3hL3JynFSoofHvz",
  "key5": "51ZDnX9CYr9V9WixZpyQg8j38vD17Dz6GZGoLsjuPttSNpgTQ86cwepPpkdwPFQyA8AHSwESpdVKiihgnx35phh6",
  "key6": "2uq74CE5vZSMBeSpKWtzgJTn55ByLg59GXhfqMNF7XNjpN14Foft6khrXqzaoM6cruR7HapN5NfwuNtEDJS2F9qL",
  "key7": "5nT54vmDJwxtKHRVkiWoygX7CvXe9sycA3zQLgBByWXBGnp9E4dw9T3oED7Lb2tPVkmNLgzaLqtM9ZBNNaaw7FWY",
  "key8": "2N2N5CY5Sq5bfpSFvc44wV6tuxabjM37A3BTSvh82DerV5XhYptgkgTkPt7tPXJry89ZXnrjQup52PWGVht8F1kc",
  "key9": "3iBfCgso5NVYRmQqzDfeu12VDEMrk7giEfr5zSGbTNh6b3SjYLDHohAC2gL4quRnG7XMgAcz2dLVjQZdkWBTA9s",
  "key10": "RSME5nsVHQU1JShshg1qckLyu3t9Jyq4La9XTSVAi8gAEUzswgw6xFsvm2oNrfFqT4ubKzsrAxFcU3WVcrDXShC",
  "key11": "3QRMgahorfV9sBaWrd1oHx23ver73hVV5qmtCPifcf8JqqxeaDEHZbktHR8z9zpmqdwXVFPV61hSzS8FbMhBLrX4",
  "key12": "29ZUKjr4V3PgKY8xQGzkBuekNjWkc6VFzFuY7K8zfUScWNJXZBAHYZjyDBZFAHkrQpxz4MDw4b66tupUvG3dM8kN",
  "key13": "329HzxQLsNrWi739j9NL4dkhg2PMtDBPkYmX6GjTCxD7m6N8s6KQZSEydAm4rchowLjLGdvSJCyK1egXHYncMFxn",
  "key14": "f7yKMsZ93BpQnd676P9oXZJhRjJqSFbCsmfzJ74ELUR1tedskc84ZiakFJnT4KYYeURa1Uu9WNQpe3eK5RCChWN",
  "key15": "39sydDsc71WrhAFZhCEmzswjkYd4rRVhd8rq7HFh1gqqS9PZdahe4ohdnzk9Q22Q4USMxtJ6fRNBuQmG5QW5mDNN",
  "key16": "wXiynMoyZiNyT7vv2264d3CR5qmwv4ghhV3sV84kAhFej5dEDEzVfV152QvbeQV4JcWfwphUuYjNkpDvw55997E",
  "key17": "5e6SB81qnEwCk63vF7zeqMQ7b6qSubu8fFiEcALDyYRJNiXNjggeziKs4oFS7d15JbPcJV8AC5vtSKvh5hvQopb4",
  "key18": "3QywFj7bURC8Sf8zZyM9VAGWGbqgxah8uDz92qeLiXsGdpVeafSVDcbcV6UGqCJzth7EFoVbXTRcjQpJ13Pp7UnW",
  "key19": "5neNtU6Y7jNEnQmpeafRm8TcA7aYwrZdxiVf6LTybyPWYBF6rVG3gKGer951MkACrQTcdy6TszemDFVSYrwgLTbB",
  "key20": "Y6oj3mtVKZCBWNMagPs1CWeawXopQgnJEN7nfnUif6KTnn4G5nB5qLqjDLdttXnTyDsAfvJHKQm9M8tmeCSS4BG",
  "key21": "bh7iP7awe5gkorHwCPTafKbu3qBRNWoYSLX4aQ5en4hKwput1VLMdaCxkphZ6Cfz5MRMRzBzf5V8Y4obySJn8Ay",
  "key22": "4RWtKE4V4CTHF8D6KS5gqDsMWkDUFUyKXvkUBS8EjuZhYjnFP6yArMi9DiyHifx5BCQLjuX3CqZj1aqaehybWAK1",
  "key23": "s2hBAPMZ8ebJjaLDMjh8KbiigWPTEANQXN9iUDAk1fKivgg3cvUqkAUx3n3kmCGvN3M9HJRJp4bYsg11Yr2s26M",
  "key24": "5Cdcv2m3cektAE3Nwj6sPEaNTCvuLEtN8DENaABTxMvShx8ur8XE5rqTLuKyvkcFVC6LwVNMiJ3UQNMioDm3EmL8",
  "key25": "3P7PZEejoh7tZqtvW8rgooR5pzJrgoMKEqsoTSt6Ytdw27miPnV9WsaAbyhxtjrsyNcsV6XJw3hFzPkGNiibTGsq",
  "key26": "5oGSg4Fqcsn858Ny7RNwWqpBnuMsZZ2VU3xxQjVPtzb6RV7tCog4QLGCdu9njeAbceFAnU7CUfET98f5vpTHcq91",
  "key27": "5TzVajZePLu1DwGa8KeBLUaUL7A7MaEy5dSyHBwP3uSNQK1NeHrXanNH8J8qTEQvf65xzXcNGkgGkMs9rrmfkLfN",
  "key28": "pXwD3VWDA2dS2CgJwLDuU6ECjeRF8TQHosMGHQZnFP55tLw6TFtqnDFYJTWMNq9PagRY7QruNbjpbgJrBMeuYaJ",
  "key29": "YMt9qRV2uCLXJSRLP9cC1emE7cRA5psysLUqLuZbBT63rqgLYQNYp8z2ao7Jra3ConQ7tziPYkViJv3s4FFQASX",
  "key30": "37kggaXttnf9EDgHvcuLxTmUjfaW9QcEwq8JSmqpdCekfFbYfQVKMejNzKjUJutPXsCg5c674hjBCAYu8UvPXXQf",
  "key31": "3qpsLDXaoikUZqKtmQi16i6gnsWEDGmNrqEaLaYtr2fDrdYLj6hL8QQe39UwiCunbZyruLE8c1Z2V5K1mKFXQNYY",
  "key32": "5TA88FoHS2cSYLtKz5ULoWWYQE2CzqGuQW7FbQH2NpFKXLpx58rCDdabCSJEAUN6yhowiu92kQuWJ3tg9iZ3YFmy",
  "key33": "2yjjFhgvYg22U7zUu8UtSdQFDAtCknPD7ByhGhHzcYToWz7EqLK2859LrwdRhfkqb5y27ZtNC7Hreeb6affezNzR",
  "key34": "59RYxZrkDV4MRNhNum7MiuhT69TbgbKrTRfgi914PkvX8FczjorycJ3gV2L9SkYbGpwpgGKyqXob4ZPv31UWyQEj",
  "key35": "63jNJfrgyWuv65xAGdMAx5rC2ir3BRNTzntVPEksod1Y69WEkQqE8S4PfJLHcj1YAhyqdhGSohXiqxntFPY9rD5V",
  "key36": "2tNshtCgtu6aFFgnE2dMhm3vwX9WmVMrJRfemdnqrGQuVVcEuxmB2Yckxw9Z3cBCLCXMUX91GcX3Uhx1BBrBfMju",
  "key37": "4nW5b5FdGRbkhUyqyn9MZfDcg9mKdQa1SAeaRbo7xyB2CqW5QPAQkwVRc9PGY1Z3MNbjDn52xGtNP5TnKStjxcE6",
  "key38": "4iyq3KUoz6yB1tYSpYbm7ne9Rb4PAnmgBzm8M2Nd9ZCM6VZirv4dtsUofUQCQqw2WW6HwwAQLTPAzguUHgptdSqZ",
  "key39": "AE6nERVdFzgjjbZzvvWT6wQG9jYGiNJa2E2xL2kCYnPiEWF7NpBmMCJzn3hETKmGJe5bPhAA8cMmgeccPxUA5Pk",
  "key40": "21CpW9TKKUZSyh1VCCxqZF1P6EyGCiKMkEARKdpnbjwAPepsYvyk7n9oQ752KaiJ5q8QZV6s6ihz2XL5qYfunpQq",
  "key41": "3wN3JBQLaNNX9RbXsPWLV4kamTUut1LhpyNv32AGoX9PzM51fq7E8ad699SxWFLcQE61T3BWSYnMd9V4b2hxBsD8"
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
