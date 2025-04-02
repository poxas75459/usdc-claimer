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
    "3T3kUGMjoHkQzyAt8i5CDC41CPUww829DD1dcNudtso3iXy6tHpppgHJ9YwE3XUR9yUGXQmyivSQsGCKkzvaBAeb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BSwG1jtyQFndTW6TBQ9dwt6hwKJxyDcqVLYyyi1grYMDFgNzYM24wE1cZS7jAruDCHoMEPg6HgFknpgMK4JNz7w",
  "key1": "4cRua91YMMLuufHdHMYDJZY4vdyHd6SUymEKNNiwSkHLrrFphawF1bmxQMvLWXojidwHN7Cx3oz8ogjuB1WuUmcB",
  "key2": "xAeiwhJDwi45LH8aejEwrQnBLck2hFeEDGBdCKnb6HwZbtDC38phv82KaLdYZkrUWfFxM4rBTdxReaAQUWApX55",
  "key3": "5jcgQTZRSMsAk9Hv93DLotSZKMFKFisZMTSUXEdTkS2Z8SHyXQjJTk36HZJP8Hrq764p51quNByfTru3izFdtV6J",
  "key4": "YLA2pCDqydJCDjMXGeTf8hJcijfVWQe1GxnwEuJswCJ5k9CRmoCqHq7j2YwBeetcSqPG1A9nzq1LiPA6SavDnAF",
  "key5": "4L3qE9eV5sjcBS1nziteBAdP6HbUcm87tN1ri4kidtz2vE4e1whMq5BxoPe8XVi8zmgBURCSBJYYZVG9xs2xwD29",
  "key6": "29r8ZHDugqRBwbPY5W2HziWtCYU82edfsxGYq4k3XkYFaKZsfC3HjmyBwAcVaAUtvkohoxpVrs9uKoAvVC9Uu4VU",
  "key7": "4drcKbGsNepMoTi2RWU7mSQLbCfRrE7Sdg8BtHTSVHeGUv3ALatAvsnMuFiVeyCSoPy8sWDdUjHAYGb7Jp2brdW5",
  "key8": "4UdVHudhpWYWbPJBFpNTCXP6sZARXKuyywqjoxvDf3Gsmj77kSQLwi4zC1BgfwoJbo8TiQwnpCJfzAQy9pskyift",
  "key9": "oBA3mEJJDeHqC3ugW4ajKXcigpXGRLCixFCqxVBb1W8hZaRK7T2zZ3d2HpJFC97sDfAQ5CwgnweWod9Tcrr9Dsx",
  "key10": "rv6g85F4SX8oxKa8MxdoPZvRNmvjYmMZfFBRqHG9nDU2RmvU3q628KesBtZ4D7ZroUE9Uyen1CAysBaQuCsLoKX",
  "key11": "21UDQmmRnSidnaeHpttDUCz4spqNBsP7ave1eugsuPiHWn9rnTm4DPyoFWTwky44apKPN8rmA6vsNNAVf7SooMP6",
  "key12": "36PigVfqULL38a3b1KTfedoqydYQNWz33eYRyNqrqDx7TmsqcjodhuRy6XyYJUjuUuten3vB8SmW1vgpjdpdfeq7",
  "key13": "dA1HgztBGCu1Twg2tL4Xs6S61t5yLXmpgX6fkSUpW8r9Me9CuxTNGW4G6iHNwBNWaV5WEjSPPstM1LbaBWrdRHK",
  "key14": "39y5P2VqYqw3G1URfoZVpLkKBjXKuaJVg3e2ABb8opd6xAH2v7rKVarCC4rsiAXTv1HXrBrKreFWtjidyof8yN24",
  "key15": "3DujAyJf5i36Nuu8orC8XEqr5PUKKAkv22VjFjqtNCgBiTfUi5SoUkEmXmTduf3i3RuAkhpkeRvtprGKiwmrJHDV",
  "key16": "2bUhzyHmyGxBx9LNDLKqgp7rR8VVazMbP512UMxxzYw7tfZkFMvJBrQ9uSqw462MRStq8aRepdxcfwUTMxb8bd3F",
  "key17": "3Ch5F8H6KSR3ciWZ9JaHMKEfPT31ciQFZSnvydbQMtbRTwsBB5sHpRJnW4wyb2Z8zJoqySvfG57qQacLsaBDWtFQ",
  "key18": "v5Vin6RfR4XB5wXQD6kjz5LhSGUL7FpFkxVidhzxfKHM8n6XS2VivFNfKufEHgcLimcRjB2b15J6FBLDNb1MGN8",
  "key19": "2CwEjQQSCBEJZZ35omg8eZ5VDVV1dt8r6h5uzQJg1e98dDVZVL9w5gidfMuonpiKsAX8LDAvBtKuEC7CtpGGTRmf",
  "key20": "27Mryc5mrmSVk4oe2yEWN1LrSYA41UvkVZAAGdJnfPa6Qy93u62j4fwJ61BzsnUiHQNJghvUvAdqZ98WMR4YhNAR",
  "key21": "Bdpeg9cJHmsVHcTK3VZizUKfwrLpEM64eoQEtFyz8MkTMnBv4j6zxKW51iaVUKcguKup7Jp1epMQhj8BF1DWVYu",
  "key22": "31JEkNcpu1ng3Q7sMxLTXjULRGspXccGEydwVFJRX86EXatzpcEfQSFnuqfbY9UJ5Kj47Gu5aATxmV7KTSGPViDe",
  "key23": "54BSJpJmzq3uoxPefe5pkTuDMQiLTvoL3pfE2ggcdyUEnptbhDovkMhrAfZk5QcZ17CrksHeW63wm7f2D4vtVxqc",
  "key24": "SP5vU78YWRpB2FtWUwR24HuFdGPK6dFUmn2AerSPgoEg2DV3QtYvW3r94iSL2TEahr9PvKXu1bZcwrQxEcn4Mg7",
  "key25": "5kAZ1C7HqccVWmjFJLo74JHbZt53oHQxvLyGdnLfsxd2ShJYGbkPZH2BTsiF2ecsy6i61DHVnCnAuGtNaNPoqT76",
  "key26": "4Zdv57iseLM2scyMadsBaq88zqKnRGMaE1Xgd1AJ8vTh6BKuofmH1uZWY7d2k3f8SpRaceot7LjoUTb438VWwpBz",
  "key27": "4xGCmsTV6ux4ue9KbeXHZT6Pvr2kTvhF7N1ZebYsFBCAbJKFUt8beHvFb5cHohVxGcQD9mDtVSY8AtUbAU551UAN"
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
