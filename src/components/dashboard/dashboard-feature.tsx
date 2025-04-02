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
    "3UXceiGbELRPJkpxkGfF7p92XGmzzzuXEm1xUQTnpDvmKpdqP3An6aW5bhNArqc7iVuniRos19xCyYPJbkpdfV2h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iUTLGGoAigzBpP3RJnxMD1ssdTED3VTxASpq4c2RFh9SuYoim8uunCvj8TPYHV8GTqMWyhkCEjV263U1W2hzby8",
  "key1": "2kM7Z4nvDTRsom2g17zAHJXQMwcTiL44x2Xq9NHPwWfhzDmBu9NLmg2db8XaiwZbofN5LoeMxbeXZFDRERWR8Qib",
  "key2": "4DzyNKma6HM5emaXYXT5H9ZQ2XHteWunM7uEzvCkfYjponE1Dp52hU951o3ewsCdc6wazLDgxMwwsYCkH48YaMwd",
  "key3": "4gDKFtq5hJC3ZpC1jjdWsBhsFQLKEEwgqWaXTfk951ZEVj47mqzyN21HXPXK7LjU2mbcpwKchS84NnFAeecReqqt",
  "key4": "3TzYR8A81eM1ey3AkgNHBPq26xuEvgU78vhW91tEmFZuj2xP4Ba6LfQURwiizP2gBEqL3fLFWCAZbCyV93kmijN",
  "key5": "5FgkZaue9CwRDDtsBPAPeieAsJJtDThqZBU9vfuccmVPMKcemdSXj3Zd2JVcGnMurw578Mr4pPzBdZksRBD5uXe6",
  "key6": "73JWzkv1WsiZnSzjYJpg6JctafsMYr7ep2pTU2DHRzjw7VXkfSVBCwiM5fiuNvthndFViaZQ5XoF6jLPbBjXJtj",
  "key7": "5QziAfEmZBmnEKRqM4Dq8kL1STrxmBbsFNabJr8Cam8JHrg7gqkxcBoLLFiW2i1BXo54Ya1buJ8sXbHq43Q3QBfX",
  "key8": "2BUk9ZrbEt1pxhRE278WsEv7VkQc3EEHEP65NBQ3qenLk6P1oasAzrETvJBQVYMCq1Rt8rkdLGZGsFAzp9Xw5R8t",
  "key9": "4a3BSBkV8PDEJ9ZACkCJ3LVqZwDB86HoGtwBzhPe5ezLM8KLR2NTicRNoZTLxe5sQEqNSsS7jr116QnmYQ4tvvbR",
  "key10": "2bjNHZen9Zvbg2XNfq9EnNHUwzfQBfwJyoiWMGMh1AoTXLc8h2aFyUALx5xu9yf5hvDfy3Z4Mt93tZVB1P76tqim",
  "key11": "26L6ibEwa46qLTKudjradJqGodoaRmGJfQ4KoVZ1EC8jwne5QUeYPShjySKTa2BFR4P6ApLbkEvbjQ5Kk5GJv8tF",
  "key12": "5L8BRqyd32CeQTJ9roXF2TtuesTBfaqDVU3nkgVnL1Wy75CFwi9kuU4UpLws84bRfc2ahBCVoRJAne82zLnpKmTJ",
  "key13": "5mr6RLEDhfQbBQ56wcFbzAq9Lmv69NGh6Y32DP4DAiEcnFeXG1bTgDmmyScmwtUVuYLqJsht3f6GTo9Kw4wEMoc4",
  "key14": "1u8ubyUBAy5BHajKP3XMwoSBA5hmoeR1cr6TMnyj9zbryEUn75AvMSKG9bCURtcQS4GsaW4bHKJHZtt21rJYJao",
  "key15": "2JhovKayhtc1BN4QDWKt9WbHryMNfgSXpRZHro97GNW8xWR9J79fbEuJqBLG2EZA6PAs6y99xpP74cHZxwfFaNQ6",
  "key16": "3MvsWg9RMBG6A9wvFPnN74djaPfpDB99z64BuUs4WjZTfAssi5fu1fvFS3Xjti8kP2HpBAm4EDB3duCfWRfmjenV",
  "key17": "2xv6Foiwq435cCxF8c29ktxsuLhJARR721qR3kS4fSKx4TTAgRXKKgvi67Boxzw44jK1MpZY4LeKPooXyfYhUVvH",
  "key18": "quBQEWC5V3xAEaLcdwcieLp17nrsj2QMoUNJy7EdV4B24CAZVc6A3hYaS2BtJYEz3dr8XCcvPe1mnbjnQtDJ7Xm",
  "key19": "4nh16A7XpEWHruoASwjaAWUM9graKeR8HvgXHKukDizdLMjLRNya2TAB73KJZpCnJ4WQNNypTNFKcc7iPZcffbSJ",
  "key20": "2xhguVNHD8zGVdvk6DmDMhWqghH5rW6p5fHHyvy23Q5wchhU6tgZyHCXHpNU8iuwYAPArtBLE3X4kFDFKbE41MvS",
  "key21": "2Wgpj8VmREw9HtRKn1rLAn6EXNXLLsp5yPwWPk62rkJgcqr6akCZ4r4gyehLsPTgHkvaZGQyZdFd9Ge3Wix82x2P",
  "key22": "s8iFL9Uj5hDTJkKzgZKzrHvXbJWB4oPLwq4dkjo66EM8gq9d2cb2KKgXyeZeDU4Hij2x6TMW8bT5Y3aM5gAbZor",
  "key23": "4X1MmSBwVB5fcHHiyeCQzkU2tBons4obpSfsvvdY4aUhBefEbaGeFfL22y4hEWueZJsM73zCv6puF6mNM3E7CkQQ",
  "key24": "2KHw1Zc8zeXsuwYydgwrGoJWVEWiKq52e8Hu5pGv1g38Lt6THC2fKuMSPKVEPnSuAytWhMeALwRxj4XLcAfQnFsB",
  "key25": "4HXrhtiBXkha5iNNCAKTsuUhJCayFqZSJBQ1XkmJ2BkQwAeRny6WBD194VXBQYPCHUFUJTUE5Wog4ExdCx6ercVS",
  "key26": "2c9jADWXKJCC9AS8fxDHxAzi1gfTJV4GmCWy864C6bpdsgkpbjGSrLXWAWU9cQQGhURWJHbg4uzQ7qXgivBaaHSV",
  "key27": "22bwGwk9V5KVPQMdqyQRYhF7JDBgHV37KgTAknkbhn6MVRxhg9VWWpbSbXYk7gcsA7aNLEag4nJBy6yptjiBA7L1",
  "key28": "2opxC2aqUzFCGtGBMGmb7kE78nJ5YF9EeGQdGJYrACxXXCBZGkwwbCkQPqMYg7yVBBiefWrTAZT1UxPymYCRWjA1",
  "key29": "4TLVHFGhNWfxv8DsmiFUis9rnMxHocJAgpWPrLoCP38WtZKiz45bZZ3PkzLmzhNFvGD6Vxqk732uB9JNcAHH7R31",
  "key30": "5Y7rFrDmRXh1WBf4qqWKj66PyTkvd5cRzgZqgJ1G4LmdECUAdW54HXN1bBuMEKKCKj84TCk15JtN6rmGKKnaNdYR",
  "key31": "2VrxbdbnCJK4KABDXgReNJfd9DT3LvtdgVP8QnLU8EZ3AZGxAANHes9qcWDLDqt32z7YSVZn8twp3VikppgASHuZ",
  "key32": "jrn6TkPoVu5YokJF4jfwkuhnTxCutx1EVwxApGveA7JugLjnLC2dn4EPSsospAWfK8k3wF1U47Fzbm1P9ttFRFg",
  "key33": "234oLyA3oDPm6PM4eKXuhWMFuVWYkkCTiUFB8CaCFhahfYt1jqefMNbi8vQj58dbjqhK2KnFyqRUEQqwvnsWcdXD",
  "key34": "2MdvQKHgQS5DwnqeoUmewYPULfcLUCw5huC7REoKcSaNFx4zbFWrtAVNhitFdtgQM3tWffErYW1JasfCHL42AKke",
  "key35": "5c32YXo29HULTiunfCoaDSuyVZZotSaLzzLxSMCVUJeaHjgapEMZhqzmHjp3ensYvBuLbzsbs97PrM7MpmWQmy3D",
  "key36": "5xkY4GqZrMWJeseUP1MjvpDAhSkdTbH6RQgTFBLVTrVodZimrku3xN2kvfWoT4hNamyaEYF7mr8iSH9BYj84EQfd",
  "key37": "3QXKQ5WX5rBjwnmt2dLWvYChANAQo45ZekUBafTiccJLNFTNsoEtoKKqkjiPx8W3cjm51iJYMzSibNB4jULia3xe",
  "key38": "5v8D4Nx3KxwmK6oL6HRmhEg2gYWaeRANubwN9U5dXLvBZ5ZYtR4H6bxQqsgAsTcDVsK7cL7PTTbDSgQ8ZFYDkX2V"
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
