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
    "47bvpFWffbTqcqjfMZAVvc3SZPxLPhkriwuDSVcYp3Pf5pf6vJvw58qtH8U9SgxnjxLRqzPBKubhtLKi6pYtM1A8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZcSRw74iSxv54EDRYe5bEMaguPZemocxYLiPCCUMHnMGY18KdxgqrQmxEZjr7JspWiVYiP19Dej3a95dTLWLVWs",
  "key1": "3gN65N5MpNGX9UzhRE7kCsT6xegBpQNizJ9kL6DZ6ecm8FCu9vFi2cacn2dRkwtD5XwzBaK9VzVCu8MVNkxkeDLz",
  "key2": "5s1BWsXc5iWNufuULTz41XoB2V4JBH3bEfs9GmrL81R9ey3un3N98o7NEEniqRktAbd8Sy9rpwCecohhJyuhwfd7",
  "key3": "3exsDEKeACNP6Czw46joiy2jty3pd1ZL676YRJ7gJeEdnoodxbFf6KABveTVwubzfcBpDwLooLFr3GJne7dL364C",
  "key4": "2aro8JVno2fByxG1VzRsWf4NmuT9ZYmF8pyAreK3B8Jrvf8AJZFPxjzZsUCipve5KEZ32rYAZ3tQxpat8nH6LJP1",
  "key5": "5dTFU6tfmyv3DqjyZsw58zxjHiMfwxW1CC6zN8Sk2VCe4PnsaxN1i4oHALyn3TfM4E12jaBNuz6Wviy8wnwVkLQk",
  "key6": "2g5hPb6oSpAYykNbFAP9yBjxavDJFN97Hb6QtdWhPQbrHfoTCjeQsJWrYYAKVXhtAjAEuK8oc3dzymyAwBvg5b9k",
  "key7": "41BwokWvVzvZHcyFb9tr2tzoQrnhtQp7hmVTNBEpbap5LM9HqVLXhsefndpFRWBdavSxZB1tDQhx3Ba5Jj1eKqjj",
  "key8": "3z3R1nDGPcba2hEhnjwynzRa5UCwvZUP5hbvrMWAcU2VS2ip68cV75E1K3BBEQJGLgCUX6Bot3BZT4igctySYHgo",
  "key9": "5xwMdFt1mrGPQHHa7J2sSki3wzvWVN7XjQDHmrXbg9gUUt2oCk77LQGfmPjwqqB12LsNPTQogv8W3LtfJCN2os6y",
  "key10": "2rytQVdrdDNLK9YQE2DnNrL54Xc8kZqmrMLSUQpHzTR5pBJdxSqqNEysg1CeGMNSTnvDDy7xKTKF2JyfCbRa5p7c",
  "key11": "WGqixDGbj5vgbRMNbW1E9c8qDbBxE3NrirMqUiYjs1hPM8EhJUB15aVr1h339t7iZZJnnH1U8Ct2qaqYPsFRpw7",
  "key12": "61qzNqb3hFV8DooM1vfyiNCBYt6trp57PSm1nVcXMRjQMstYV3pqxvPkHBuiMT9Tc7wysd5AdUTdHdfxPdhrnxGX",
  "key13": "wsEp5SZisUSmCgukdkGc9CRCLE1oWLwocG1v48Ao1BUKxDCpoeJoUpZUHudgmT5WisooN8w4ov8sYUcY94zKyZY",
  "key14": "2txLn4vGeAPiW4hYXAmn53DNBh6fkPRV5Gw8LjZWTyeTAXTJKsRBYbApfgC3dMTfqbWYc6diDnzwGimFXoK6Vh1P",
  "key15": "2GfmmivXV2HyZeoSkMbPYkF6pzBvGAkg9EYSap47MB4Cn6Uzt6v3dsRyBbNUiq87frypj9j6MBxqeZL8cAEjuf9C",
  "key16": "3q5Ku7sSbVvoP2FXeDdoKDLPwTk1c6gHHJwjd3iF3iRjbLRxRQNjKop1gi4iy8T6FdKuQ8e52xGvPAqT32K5jS8t",
  "key17": "4LmFxBrDp7wf8hHKKXDGjYUuk5aHWyNP2j5jBRNKjZUiBo1uen5pHmFkg33U3888t9eVd6Cr5Csk519f2SPoR65B",
  "key18": "5da72H9yzoMVBySZrJvjdKktgnFWdr3A81ZwJKE7myqJjF3n5JFSSfAcq1qJjufuCpm7MAvhkEHQnQqaQsQpidg3",
  "key19": "cTnXbxiEsTDBLnDCHFjQCWMib3LMhryMBZEQAr9hLntjuPwCrh2qNFBpYztoU9s98bXLoUqpP43NBCxwyphRPoR",
  "key20": "4RwTQLQoWepmdL2jWxnK396Zy2en1B9f9RMAaf6Z8LnjroV9WHiny1WAE1Sh1EAhZg93pCXBvvsubPWiwB8LyTkg",
  "key21": "5M4by5V9DBg48oLo22tmSXYo4Bn9dQa9KfrG14gWHpnvg38pXKtiBrgHnddU3W8xuEPmCpYEyYRpSfx3F86E1Y47",
  "key22": "4g5xhMpHaiKcrFxeiT1Ktg69uU45n2LyQWiJu8ZRzDYpkbD59C2hQqgkouwh7nFinxCfiikt8h9Sw6e9FcxAqkAt",
  "key23": "2dHH9uWUFYDL4eTTdb61LKsBXLJKLNCGBBBAbwr8piEX2YKiDcxUgmF7RmMHwbsJQkxXUZgeaE22pviNyMJns5vZ",
  "key24": "348fjs1xV37prcbibVCRCjyB3cwgD5bmvcGxZ3jx91JqoCpZ5cyv1Ly6VKbFRQ1pfKTvDp64KW6jGgKJQ56WkQcC",
  "key25": "5Q3o1PZevoahNHqqegV5nUv9wgX477zNL2BgkAA1219NADXCZrML7G8FcWZH59GdbuPt1sT8GoxWeKnuUEgVkGTP",
  "key26": "5wR4uxetTv3hUH89a9Mj4vivf88Gxj7iKtPbpak8HTBytLhhNB4jhnMVPnmT9ejv6pAbNdFqGoYZH4t1MsvEXYPr",
  "key27": "5DapALSqGoyra287YTg5V8rU6jg44jnHur1MoZigFndGFVfjpyUKSdqCinkRokBkx2JsQx9rqqVvrZUZ5a7iNwho"
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
