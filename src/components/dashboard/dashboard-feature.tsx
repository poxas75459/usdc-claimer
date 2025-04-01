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
    "5bXpatai5NSCuFmBAS5xkCW9jaGTs69GJDS1N16z6i6zCgBwQ7tM7gzgkPSCDEaXGEVw55ybjdsKJExAWoicFT9B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MooBSsuzKUYiyezHX33TAYDKPiJy3FjqG6fEuTXbjN3qcbixKXj5ETv9pUS6h3Tv4JVCTbwBDGNSCcDbG9n3E6L",
  "key1": "2iMdwLYjSbJN2AXHZeVumU8WDiKx6ZWeYbegrfzTbPXnRkB2nd4f3SeFJrueWRZXafZoh8a1Jag6Guav9RFuyo6x",
  "key2": "49fry7udNpWQdLa2MUSDjfkkVLbxGGXuXnvZbCA4xjcjJg8ui7JknSqWz6jp6QscRufNiMcnmGq5M1f7btojR6Ke",
  "key3": "3sXgmoSk91YkuWuohL9LaW4cuLYJ8MJmrtWe1MyhY6ShYBsKQ454PqQ9xtLrgLHZh5LFhDHCDkdbsZpPVqJ9VuNk",
  "key4": "4LdhQd5BELkK2neDQ1GLUBAnj5fdsR9U38C3Eh4qJKf6shs83aNCrvLTBfEuiiaXq76rPAcN8XWwfgsDdcTLfg1d",
  "key5": "3d2gLnnNgaVMFhfj5XBrPMpyrwMoYuaGccyVtBspQmfeDsHKw4iFKheyGz6bPwT7bGLWc3kVvokZmcPK1Ydo2ry4",
  "key6": "4XiBYrieMQ47WZiGBSxJ3P1Q6MT5VffBjsEg14WdgBEenmVKnc5bTukRyPXrmv9YUrRDmfTS1zS9dKKPKxo6A8sj",
  "key7": "iauKddZVJ44tNKj7Yo4P88ayzjCvrhzaUCApAvXkJytmGVMcy53htny3y8izKGuh7hhobSAev7kbGZczVMW22tU",
  "key8": "5faLBf2wGA1kh7MBnSKkjZM6AC47M6h18Zd4nCpzq9k9U2M15szsRQ868Jm6MeMSyw9xEJ9vSpXZ9tD6xKz3rQ7G",
  "key9": "3LFDjxiY8Yjkw3xbiMtidgA3YkAiNo3U4yRuwSckDGHTstdiRNVrnQHFa6h98nk4E8QTuhLypur7CFLNWyJxh1Ah",
  "key10": "4ZWVA6PZiJ7NHHiTqDxJ999wiRs7KXYy3GDG97p93V2aCcd2kzdxfJByoGW6bGztUCHd9PpYNdEZt4yXsz8gYyrr",
  "key11": "63XbHevYCXGgoib787ehv9P8Kg6LExoWD9YW8wyTATSHTJKT8ycMLTqwur58kTayem7SMhXPueDWrEAZqUkfYzHp",
  "key12": "3P47GxkaUbKJSXefyoyEDDisq2g189jJAymVomdxku6f1nbajZA3oLLEVnhGMdeHsHAjrdSRfWw535iTEBMfLxzw",
  "key13": "59JHbhZDWd7MiBiLiT47zj4rRFNtptfpE6HJJhaMvUbsgPtqsNkLKY8tQVJuZyx2PLD6hpBFDRYqoaSb3fXvN41o",
  "key14": "213yCenvyx9oBUU8qBQen9HuKCzz6TtsdNRxwCQtLPhY1GHoL8twpxUxAkdaJumXoGo1SNvw5xPj9ypR63otMTo8",
  "key15": "2U9Ct3sypXTsnWyvJqbcLF7nyqpuZ5aAkV5Fc3KdgqM4yc352efhD2Mv71KK9aadaMXyJtYQtJq8VsbUB7wUE3Qn",
  "key16": "2p9o8Xny2JQnGR66MCpYg3R67jhWf6XiMES5Pqe2K7k8sHpVsfC9RfFpDUWS5tLmpmyZrRNFK6M9fxFS4HFrv1G8",
  "key17": "459xF7JXVisJW4FYbrFey62vGE6TEqWuN3MsQN8NctWB7yY115TKn3MKt1yihLLoB6nQRtxZbMukALGTwx6RRpqt",
  "key18": "1AWtRwAz8bb9pQrgY8i3VHR4mZ7TBwuBiRUikg1tchjUxcsTUHNHeP2TNbYCEhhc5tkSZxHQQFrmXxof3TLNLQj",
  "key19": "27ifm1kMjTBHuvm7q2TFY5BDeMPunDstDRNjVTkgpMyYtXFsuL3zk31exckL8ExSoUVjFYnAxQR9jxuLcCcDnHfT",
  "key20": "4f52hPhUB4prGDE9PEhziXMKLkTyx3Vc4AXb6L7T9aVb8gsRVn258nwyvsJCSH8CD5nTwydiLeRSpjPPQ291FWMx",
  "key21": "41GKhiHafHLUkWJ1z65uGmdyaWCPtG6WfJmS4ANfWkwcHbFarUufbNgj9rLL4mJfrb8KMeoPuFwAFZQ2N5TdEYGv",
  "key22": "Skmoc4HMkneTmZqUwkgV4Hts5YxgiR7ZmLpqjfRLb5XR5RNMiY7ViCpN2AkoX2sZRJjQwZcQnaVnBFqRBya5hys",
  "key23": "3LeB3d1XVDHsjFab6VYgx9PAMPWhE6L8fqpV6cBqswzqk41jsYaskCj64QegCAivoFjLKwycoEQ2g7TuRUXdeEDD",
  "key24": "2xPN5XWNxqQizYXvkfitEcvGsJEoUXYndpS2chMTkFT3Hr5noEF2S8ngEWCYiZcHat7Uqi9ZFguuqP2iE84p71if",
  "key25": "2qcZ26au8wEDP34GpXAHtZ9J4nwNnbPB3c8gGfZMxy7updp2qyMksTeUhwxk6TkuwqP5iDxLAcErAGjkAFZuFS8y",
  "key26": "tqUQEF2YdcLk8Ze2WgNtETTFEoCLi2sJVeCTo6XXQhYTsmV3eXKPwRh7JQVvQHbHMrEzRVNhDDZwTDnC81ELfca",
  "key27": "37sCn47XmttmcKR4rD1jmFobsoo5TQufNWniJzhsHCfrV3baqStK6fshmMCs8nx4Jh8NVV1r3qpbBf1jQX3xcj1c",
  "key28": "35a8Fi3bV7AUEKmB2C8AuC9v4fJ41Z9Ssc3xmKJjMzc9v2vmRp7zjRh4zCHf85GaCid24z3nuKcKfMsYpYjPx745",
  "key29": "oiATY21uEEL4qkhfMkdm2YCSKPV49oiTUQbiSGeRX3Dyx22AWguwrdoPxR571h3xevbq5mN763nYRAYSHLt76ms",
  "key30": "3sFKXvzCLnQoxUocAc8uFMP9wEzg4pQHaFgJ9ND6L5baP9b514zm26yz6xkQTFHzac3LJ8WvQDKMNG6cwcBNYPFh",
  "key31": "2x2mYdS3AuUUpgXbc5WP8WKg7KRJLBmZSAAcC3LwikTtjuYwPqgf7dB4zcQFdnK1mjKmoMkhv6s39NSVfak2gec6",
  "key32": "3uJV6Qp4KeQ71Er7WHAhdhdKhw793emrquYsSJNCmdVM9fAG3SnT5YFJpJizbfEe93NGayu71A1tuv2qGivF3i2c",
  "key33": "51hxXZhrpydUeJYkZjnWHnLvVcCGcNaJYQ8e5fn9mprNQyYuzaWxT7xBWNS1E59chyRjgvMok7LTupWaqRHvG2Fv",
  "key34": "5RBvbuZRLRjWsak5yusNGx5dZbSrYYbKvdjPPwZPHwsPEFbfeGD7YCsy2pxyYLsYrxziHFKDenybvEzKDo7WrWZR",
  "key35": "5V2Lrhxjj5KgcHRCSbQy9Tir5yezAdHczHQUCfmWZbvbSzELnBZeFZ6Vmf7RZ5CUUpYQ5MFWkGen9gzwXjh1J31h",
  "key36": "4Cec4ptmSqMh7rAcMisr74i3erK6jaWn2vnbV3CvFiQejrPVKGuD5pdC4hMfXyzFhxUtec1Arj1wWSQjQKXyG4NF",
  "key37": "17RwKNAoJvsVg5NPctQZBByyFpMmyW6yVK6oVuZuBEzsThFdDCAUPPA7mwJG7HzroqyRpYfH7saLUcyepjG8Hq2",
  "key38": "4ezu9jCwyHN3TaYvqFPgj6AKPPJPNqyX3yhW4TnXWmrznG6cSZs4dGN8eVNNeRLQt3VRo9z2HCzhgNETrmbsvj93",
  "key39": "2DsHy3JrVwzeTxrsU84JjNPnGe3Ekbmcy5LY4QDuwmQtU4Q6yeq83nRP94Ne2yboqqumjKWw2fPvkreene8yNoN",
  "key40": "5W5mcv8T4SmAT6HEu7YTAmv73pusEks589JjMC4U4CkYLkRe2qN2cUVFL2a82F9CGMQY8SaQgugjePw7TixwYE5V"
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
