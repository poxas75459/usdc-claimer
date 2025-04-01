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
    "4iDjp7ciwtAW8AdVgib7M1hMud5o5byx9w5zsE55Py91QXFNQ4xuK6uV2Fe24c8ttWHTPaFJZBiEhW4bQziNZngq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4P9VLyjLuGpGPZM4Kc5EtiPAeA3hSzP97EdqJERTKZcH98WFSvH28WGKBDp1DfrXisdmCCxZdWznM748d2kCFMRt",
  "key1": "J37JySV9nAbNr8ETm3aeGtxXQuaMebmhi3voVY2m4buRyU3P8f6oWMiFy9f7YoSpRE9ypiNUQm2ximd1BjLcwmT",
  "key2": "2NwPrGpNq8Ps57t7pRJaPhecTV22rvcRnK9LfVYnVmacu424EMDejyVoY3f7Br11YcSDqYiKkUjf5SHV1GvpvPVf",
  "key3": "23VjuVs4DhunixX1XAbY1MhDxTSxVttaxdVMg4GoPYib9MM5JmL4iWFsVxRqpdB7EwDpfNSfcEH2Hm184LoXrNSJ",
  "key4": "4xGoNPSgWZgVszV2XDu9K2yQHkxg854aevzXjrf29FzJZtXjtouLg6nsmywi5ZjUJV3mC12xMdM1N8ceNZkV4yTJ",
  "key5": "ghda6GNmdVxACLnmdLYbTBR1Y6AcTSxgSp8zQLWBRLRCKLco4MJ8TEd6M5YfaMMpsFF5Vn3QWpWFchB8cTy86T6",
  "key6": "2BLcJYv4zahMhSHLmN8VUZAbRx2hF5hUgxQiyQiR2wBMsimMbaUASaMeAmXv2Mj16rj9Bi9TxcXb7kKzokDfD2V7",
  "key7": "2gbgZib6uk4towuS7JpoqX7wyPNTCS5dsiX7BATF9nYEh334AEYnR8o1Muxmi72cTz34GCdCwNk971CdTuTbk7zo",
  "key8": "37Pv6B18DbJ3qsSm2LrdbCszxCJzDXQpSZFrVQE9se7ndGwM5GcCpuU9p9RjboBjdv4nkeD4Hx8XSNcKqcKonxbc",
  "key9": "5ToUSW2Fvb2SHj1jog6nuhRvX5aq4cKPvzPQxNxitvFFAyFPWWGaGZSKyr6WWLaMugvoPeXxtb7ubBzsszi8V6Sc",
  "key10": "2QLELs7j5qUm9AADV7MKWDJQKhCyYmt8ySUc9hfK95FBvchey8MQCE1HfmLoZ2hsFBbSCfVi1phNBBuLWDGUAVVN",
  "key11": "4jqm38YXXqSFMGktpTkVTnR92v51RK4ESLiwrewBKnzsTFFDFM5tKC93GNciwFktyoQxiKJjoeaS2N95GgZaHtij",
  "key12": "2FDawEpbyTG7A27dLWNTVPVgbLyoee6ZA4VvdRYxsCyF11Tc3ziwmFMGiSwXonBos5i7jG8n6s3ndJqxv4UxAqGg",
  "key13": "3nekfKmEWWsPLb9XHzvxihTKQLvoXXaw6LhrqG3yZD7b8rW3LBXL6tvNYfFrdA8T85QhH1J8mft5SE1ozVHGVF7F",
  "key14": "3xyKKTnzswPD2YRcsLSvo6TVF7PhhTWVCtdrc2YCNxuDhwTPart1u5LgTexcp66dYHePEkJupkyRszB4m285K9sf",
  "key15": "5wygm34L61VE4gqYP451vydgevgT3fnn159PpVrgDn13U3UUCq8Lp95g33xeDEDGShygyfijogyFcp258weeVFxP",
  "key16": "5NytTXgcKMUHkDM6imPos6xmpXPYWcx52xLnz4ue16jJ647AjrbRCmsvrzEPnHtt3adfizejLDnessSYsJopR5hd",
  "key17": "4EShdkxFfer9cvVGHtQFUoZnUYZP2D2xbn7tihe64wBSaqKQVaGtKATDvS97etKKBFrU2JV2JzGVn8ofapg5Caq8",
  "key18": "3UJB69xkryLeSwBQ1Yf76hUve8V4EMve9RUC5F5gqFMWgFXsfYvPZ57j3xegbUG4Vo9BGxEinbvXkJtkJzCeDKk1",
  "key19": "bGcXtWmHsdEYYnYfobbMaSodoQSyxWUwYx51Tgu2dzuidKjY8s4vwpnVyWt7EnxJKUsuuDUuAnqnj9wmNRxgb7r",
  "key20": "5GYpXiHLmXQeua7oR8tbTdu5iyzf5763eFEhnUbN9UrftixPo57ggohc2itBLpuDCUxQocZwtUSaHAfZwKo4AZsj",
  "key21": "5R8u4YFmN92m8yb7xogkfh2VUmWZHjsutQX2VRNNXUBexutsksG1y8UEE96KrXH1Fs1SmAuMqVgUATMi7cgwm3Ak",
  "key22": "WQ1sKdfKiB2PXRF9kmLiinoumaY7sCv4P8GEvRgFPd5MmNwUKJsCY9do6UcZuMVuwSBGE3wgEqhfBFUrUL5HGt6",
  "key23": "4HvfnEY7rPUz8YbCJPgbB5N65aNnvb7oERGmanpYwSNSU2wrAFbLpdtzFzGdz8G8GANfoNSDbBMacg5MHWrvMe3w",
  "key24": "42UcnwQv3pAE2ZHZLX2LdyLV8THDNFcJYeZYW7rbPxRQfAsKKawt5NmTgrt3BexWyp4B9KYvsKKjg2JFL6D5p2aW",
  "key25": "3ej5bsaYrSux6B1gMqfqtLD1Wbuq7h68bq2T3gdP4VGckY2iYnzyVUNEnMTmxZxNE92AYAEqtpE9x45inJ9Gvnph"
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
