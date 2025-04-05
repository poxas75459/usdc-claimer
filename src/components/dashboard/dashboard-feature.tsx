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
    "4XPz9VFYsDDdyMSVbcWc2ThVFu7iEtzMmWKthu5muBLdMrAeernxDBQ1Y592v5DZefzYxyYeny44AgekmdGR5YRH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2H8in5Hu6wKDtkJqvF9T56fQuUWFxr3CdsbKrEte31g83NLagD9pn8htPD4Bd8RAXwZ6rGKEsaPRFj2oPieXpfwS",
  "key1": "4WPwZhGEjvqg4h6G3XAx31R52UBqHf3cx82nWEPXevY7DMZfKTrPgsBqD9sX6biag22nLEZ7hNSEGUxXRYNedXZy",
  "key2": "3RoxHgvzz44cuimyneUjMDR2an2gzmpASLkoDzaKqmDuZt6mPYqgikHLDGYeNPJZ7QNfRPBq1Xj3a7qqL3DzZxSZ",
  "key3": "2E88Vurp1LkmnoTzk4HSw2Ww3TqpVvPWmFP18QuskMsrX3zpT6teJjucsHsnfX4EkFNUSFUqFVUJ1wiVF9HWofJ8",
  "key4": "3XWVvdfQeS3E62EMrpnsoTxjzzJTzm7qVQ4oMPfm9P4W5JUmAbUwUEY19xcE3E4VxNAG3S8pxFtrG9Lti3acaEBz",
  "key5": "66rwXms8WXBQbtsBrP1udcKBRUCwhhAsU87RhLUGKwvHTMEKiY6rE5Gn56RnraFgjNn3QNYFCofcLB2HLAUh7Pqf",
  "key6": "4pYzoMsVSkhygsiv7D17Lsho4G33H1BTouvYz4q18ZmgHJ3Wje9gaQhxcTbDLoDRznfRxF456ho8X1AQVPkywnbm",
  "key7": "5eFBh4ybW2Fsc3BKHy2QTxBKkEaVHTRvYG9CvB3h5WHMc2Sd7CLzw9kuaJqHuEN3JjRCfxMeqVPDp62LNV7GTQsv",
  "key8": "5g4MGzWRfkrtf3rMFELNqaywccLipy3XUSMEaVL3Badhfz7ZVJPWjdpxnSdGWiXHRERkxUjKz9eWR9WW9SxGkm3o",
  "key9": "2MSwHa5nfZgtHqKEJsTt1PC7vCsMWxfSi6NBKjG78GH4BgqjYSDbQaptivFjF3guGjKwHL4Mg6T4MXengmTg3yKQ",
  "key10": "43yZwQdT1nyqFECUrKEQ16fPyBt2YAX22qTu7oVC28a581D72CuRM1CaXwYhS3Zq1vwwbqxsdJwzWLuWcxxcgkQQ",
  "key11": "4bYiXbtKN1AFz2sejpuPK4F7QmbtcFDqgXFZ8RZhDrndRkJL9zWPAag9GJj7unryPiKZw5A5Rhg6P7h8sbhB9RLX",
  "key12": "5tJ1vTDuKgBJfDDM9QzgwkdmnqSt8Ydh5yFTJW4DBVKHRm34PibnbeHN8zze8r6sSpPcHJCi61ZaewrQDcACmVd1",
  "key13": "5HXzR1bXg1vstMyeK5ijPc5QG3baANnKMrHgd3umZUWSMmuKpW17W19tVfj5QTeqTjM91RKmR4joDB2f9rj7cFtx",
  "key14": "2iuKCi3TD2TxqHj3485FNz8gtvGcnDtPvUsEdje3J5wT8EnDDVXinrFkEGxUFXHmeazphKzzeaHJHS1s3p5kJXHo",
  "key15": "46m2ugphEXDwqWDC9Wm168kqhkEmQQgpcKteg9cYGSHNqVMGWXJitZC4bzQVKF8k3gjNS8eGSmuA2YyEAJi1hZCg",
  "key16": "JVcjvEFUNDDDyY2HbBNw41CFq64HVJtWis2bcNQVUHbQ4n6Teb5PkWXo47nse7t2THr95VrT1hoya4ihL4fcUk7",
  "key17": "5dWC6zCQzPhN4xX7KKR4H5Sp8hdZj3mgKmMjHUB8vdhF9c5MK55ooo6Y1UAaaG7z8diXfY5sTvCFEoeEUTaTZrcb",
  "key18": "2hNYJ7Ltyg3TvwccE7SqpRj6xNiEj8APxMHgBTpEk17NwSsbFEbgNgHY1Eph3LCQuHo4Az9KigxK8XaC24ix2jvk",
  "key19": "4tw5AHHqoQLiwa9xUScBsRDifMRiHCmr4QW7rnbULWLVp8PKSM82dgcP8s3Jj11QL1ZvZWrpwQoyBMWwEQcznXZw",
  "key20": "3n82yqf4V3f5Ug3LtceCkkMYyKdfcwrvryqpp2fSD425heyqBFNnBzNC5Bpf7DNQgmf1XisJXwmBpztGx5uRnmMg",
  "key21": "4Z5wCouSKwsWLhWxPUPKFx7sXZVWWFV1Xj4q9eWXTL4umf2pgyRGmRA1NG2JTQaX9PV3dBcvLiJcnWDnLiDd1ApL",
  "key22": "4H9JPe9UH4u6Ff4krfUEbrt6Uk4ZEPZU9oTvaLU9wYFHCP4eF2LN5oqzHdnm1RDMDGaj35nVReJK59nyfL4b5Xc9",
  "key23": "3CaVah1NN9PLs4b7g4PS3ytiiwv1L2MVuicNn5rGbBtqwJLLd7ubgYiJiyNJ6V6Gqndop5H9BVR1p1gBHgnBXw8g",
  "key24": "65ZaGztARyCpM47XC82Uu6EZsRDspRxrtXUZBiUWNazbh22DzLvKeEvNSi5p9ws3yVDUXm4obcdmKGiwx4pXXsBa",
  "key25": "3PD5ssbEC6XNVkMvhv6npjgrbC8ajdNBQvjdseFmuUzTqRr6jYNEufrsAph2HWdGFRdetqCb4vLZoSfWSKbuCqtB"
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
