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
    "3nK5UpqFQYamWYC2pQVerMWzCARHVSE8GBPpNZxmVHmi3p3SG1kPfFSac2H7KHNwVsPgVbmADybdqnhRq7TaJhZb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RFzMCXjNXsrRXGq2WcztvMNVfzkaMLvc9jAr96jRCanJGNDgRGt4nMJw3FgUC1VSWysWUZbqFzoCXC4FfUt1Fnp",
  "key1": "2TdeGcmDvtZgBKPU1SCGV8KhEq7hnGTjPtNbxzpykEv1wGKv7p5BvWVumJGy78MetVVgUmJozdad9okGctWxAXr1",
  "key2": "5vBhfdetQsyRnS3sSysRhyk2SQWhPjrcZ6huEEUpQ27gCDiX2MU1VjoajEvhTJEHhdNimdyEFsBDQ9oQbmka4jtb",
  "key3": "2RDkfj7BmSczny9mvvxJ7aofrunDTUTnahaW6okYKvuV2TMmQRdRiBiTbjQFiM6dZLNT5qZXfCvUQwxmYWa1BGy3",
  "key4": "29HLUsFNctZ6FG4MpiUvsx7ap1EMJGu3TxJk4p8hsMTmvgH8kbDfoziozEM6tXhgs2Sqq6hNBmwRNTGgNfpRSCQK",
  "key5": "4TGYTtVW2QExpsLMePPNftmHQ253gHM7c2hifskU8So5iwbft526A37f4HKL2bu6x8KCQjDU2DfzMrJxgD97GV16",
  "key6": "27mpQPhNzMSXgKL5FTo4ufeWSRzL219N8gRjw4vh7do65HagJH5KpyQoqUBaqEKrNQxVvSMPZ4XFYT6Ye7HiBjru",
  "key7": "3cz8eVGVvW4C9GPTQp6K6ZNGjejjUC82V25BVaDJGb8ZXx9YnH2coVLpZB6eh9RjPzVW3JtPAdtEmmDqNF9hXe8V",
  "key8": "52u8rjU25fkt6AKASGP4ewXNLSu2wyL1iLb4o4yRbXpEqfNrstm1XzUUY8MQg5d5nbP8wPiLXDeahiwnAe2LPkjt",
  "key9": "38rmzvw1pBMZCeNTL8RemW8JpC6fr5RLSozCKFCBRXP39L5XYQyDgutRj43jT5t8uqaESgcRoKeMkkXCntpPGiCg",
  "key10": "9a8Ei1SwJ2Mfe4GdDi9tbsmCekgdgVvMbYQzhx4E7FFdubvCd9H1vJLuyjY84hwUacWAsvcE6zphX3deNZQCUQB",
  "key11": "3gWnu85btNhDrbu6mjWfrECkChiU1qkyUBrNYmqvdmC5yzT81Kpm35YutWhE7THK5afVuhRFyNNHCSvFa2Rmdn4N",
  "key12": "5qgxeXYQN6CoA1MMj9qmk56e7eapt5dsJatDKQvq4eiYskNUq8WNhmqeCHG8C2MKF3RGKSLzS3RDiChsraa1fyZM",
  "key13": "4QvokqhX4uPeADsJcYiWS8q1y25716GAdLbw6MdmrTKJqiwCJgXDKoxe6SVCEjKmNzqGn5P88gPcCbQJJvACsXBc",
  "key14": "2vfccvXbnKXQtM15itHG5EQ3ox5LShnM24wgFZQnc34CAQJS2iV2DY57Hf3ShkynBVdMy4p49MSjbEsir7SmnCN3",
  "key15": "55n7C2Nqm8RGATi5F5XFX9A3wXhmGN96TB9mhoanyKvEJ1aQR4LxQtesDoueZ3QLYnngEF7koMC4G5SpboeVHfQg",
  "key16": "4p3M1wmtFazyQRWifE3fwvjAvtBJ1dtQkQh62gzU3ZQZpC5gBSezgpCS24x6kAbuGL6tqeUMAbFWXm3k6DuwLpPs",
  "key17": "423j8dot6zQymPdNvY7CeoLbcaLapCVJ2o933vuYnwSoDq8dqyMDUionNyD5piDnFtS4qYmFnVorzYnUHTVvGDH4",
  "key18": "3N4cBfmUbzZgE6ekB62rt7PCBD7KHm2wsK62kz6vvs3Pycr6YNcAt9qDMhNaReGkS2GunE38sFY1tYZALr1YmHDn",
  "key19": "221SqRDhVmisTLbsxMbe5QQwJ2u9iaoa6ht2vowRVCw2Atzq9GLEzTPscLeTkqhAG4MxXA4mBdUrHSpPvS3jSt99",
  "key20": "2KM9ngxaTNvRtikqwEBh1zNjtrdyNdkkPeSppCqrj1542APCcE4TprbMAHZjnY2fYHubbH7WrtQVRHitEaPUHccp",
  "key21": "3B96ekg1hrGmExCzfda2Qftgrsz1Gx8CuY8ZRuEX7Cnopxio4yYy75tVwSeXF6ah5r2NbA6zFR4evi4cPRxCHvAx",
  "key22": "5LG1Nr4ULp8fj2hLFHULxstUU9HdKpvLh2hQEW95e93v71sytgYh29M8MJXvLARyEnG7yeEgDv4eAXw4GbcA3XnR",
  "key23": "3cXvUXhWNmBr7MT9j4kqb7rr3PrmKoaiD8cR2fGjKwptuHHV7mF5HW1ot1GnaYF2Bu2vxQQHNSzTenrMDopuXeKj",
  "key24": "5kRzgKg2WEEGft7yPcV6LKQCzhki8dP45sfcdGMbGn7FrfpSBNaBDTtEg8vquWZN3KiPw9VKDcGPqFkd7XwKCnD3",
  "key25": "tqYUgbmb5gCftSdjSY6jDXYYXhALL8tupJEFAHZZ567tEMSAqoS3R5vpVv3MJXHGU7wogrmjPx7iV5MpRaDM8Vq",
  "key26": "9jsB9LQo7CS12WLas416w6DkzuyyJPWRPrX2T2vwbH1Ep5F7jShLFXXtCZstvTUwFL1gPirjkG9NBKM3RnP9dgq",
  "key27": "3EReHWhAEKfAs83WCzvXEvgVgF2xvwxqsn7BDQmBqF4CxZwRhzS9gZqfwNPyufUJ9uGcb45RuyzR5VgcFLfXCvuo",
  "key28": "2gqaEFC918N53sFXMiXhGE8QNhXZdotcsBsJ6RQLx51sUK4J2dBUwvTxjsNy4LjksoG2RP3nzue9L7TiXHnVoPar",
  "key29": "xve4DagcezFo4FuUhVfzT2cWLYSs7fwSTDSm7o7F48yiBcbUKx56Pyp5Gm1gTVk9Be6CkxSgX55XGPzsyisB7Rr",
  "key30": "5w1zNBSPGASYeo96mMVbHoMDnpuMwd9NqMfvKee5oMgXoKCgXrJCVQ4MqVYrx44MLZmA8j4Qq3MLsAmqrX5wonJo",
  "key31": "2aq6g4thYSnTEozQF9ooG8xJY2Pxu2MhxpQTEXmeLBLhE71iFA17XLFvDfQgo1A3AuWZMxQwp65sgcp3M1rRFVHr",
  "key32": "5tmFd3oPev4f84ZzR6P34cWDJN84ssmyRN1ona1MeMnpQaDYvLXtcswzzwAZtGErWMETyZbf5Xi9wgzs2SK1TAMb",
  "key33": "5LQ27GVhqN3oeYVctT2zwuqMXYwcASdoTN1orYhvdHMznpQNZYe7yhKynE36N9nnwCtyQkRKSA1s13rtk5KxKtAZ",
  "key34": "5kj4G6qZi6tzPEAyqHLtCBBJn6WxyxWTA6Mu4RaA9xEaYFCNjfiq6ipFvDXBu1ZTb5TvHy33BoCyeWUjJ36Mj4E6",
  "key35": "5Tp2mmdHyZBKw3Da3Y5hLfAovGxPKaZgUK8UK5BR8ZdToLN3pod5wfdU3VdsEAURTjFUixcAu3rU6dq7hzidojX",
  "key36": "pJA4gbWd17byXCd4AFWUa11PRmB8e3tmJcjquLQVHdzZeHFatsatdd6zqXd4QQ4nQLjXZT7rxEVE7XbGanQcRuQ",
  "key37": "4J7Susrjt7nJy7WjcpK5KNUgNBxNQ2K4nrkqP1VHxoPsnxcoGmU7Hq4S7sJLCQzWdtAC1kzZXm5C15wuMHVE9YDV",
  "key38": "3HLnJTzd4kmVK6AeJHtPwPkyomFLDTod2fLNSUnwi4WY9aYbJ1cVgX6meryDkyn16Z4mmS8DuXwm7y5gfuyGMNpK",
  "key39": "d4SL35Xmq92ZoFao1afHwd7ecWVS7jPdKZpnQpn7pcrUgiu7pV9PCAg5hLYKffhHDpERkCXVjgbhMV9CpkFRNZJ",
  "key40": "2FjW59K1XktxqnzN4oT3qmZNvYB2fVYztpZmxpZ54o9cgJzSTBtFRUxMTzeVavyAr7NkC1EfrgesWs2c9CaVqJQG"
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
