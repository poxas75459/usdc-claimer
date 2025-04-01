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
    "w2SxWK5zoSBCFjDzWXjJSeV2GHFGjHTn23B56qDnBUW2YK4qQJw5dQsBwzw6fdBwFZ22rsJFBswCHNwekzBYk46"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5H8ccrxYaXXa4DxEgA987w4LpqgMf1t6Wq7XNSjtv2dt5BQp3AU6rQZdZNhxRVQa1eT9WGRAYdueLEFRDLofZ42r",
  "key1": "2q7XpJHRfByjiR1WxZFumxAEXzigxPXkvTjCkzbeETEjpoFgVxuvpBqdN9EyGzctziQtbArq876qyVSNz4AzDfjH",
  "key2": "m3PhkprT55QVzpzJ45EtxLDijK4fn6D9hhitSGxak468xbsMkQs9EuaBEKW7N3Q7y7HkrNk2F5pVdBKJEMXVMyg",
  "key3": "3uVhCnZAjDnmMG7MESH6jHkcnFaTWLLvWhsmLZUD8ZVqCaSVPPL38honJHR8ihgZkhBvLdEkwpRxaX6xGRpDLuL7",
  "key4": "2Hb88R32iwD52ntLc4gbfpHDnQe8sknSUgvAbdDHExPfEwB2wKQbqCGFhH4ziUyGoiJuLwb1GQJqaqZRx72b7c8L",
  "key5": "2nFFaZyTUc8ZBmm5BMfPNmDghudJXesktPrZH2j9r74v58TpDWZuMUzDoCdJFZbJrtdrnBqnevRqDVjgZV4L3j3p",
  "key6": "35A1E4JPv6ArYk3umjvCnadPBCuPNPQHxyf1ZN3SFSBQa2rxGt8YBxVRuATzz3S31Tuu4Q8t9VvBKhTvxCD67GyM",
  "key7": "438Yr7tfTYXwdU6cdXGsgDHk1Dmbpy3qxr5S6JFmRyFi2smVVdv4QKVxjUN48uvcRfbU4wTLmp6mNfKcMmvhMd9y",
  "key8": "2gfhoTzGoVq5A64QYd19kiPJWcFbAPcZrAjjoKrqXyADY4M2sFyda47tVkqny6XmSDiXG3DAjKfmmuHCHedNhBy7",
  "key9": "2gmuQ1neuQ8BLrGTTPLg89Yait81eYLyMMHeJN3deC2TH6knJFCL36K7H8hkC9tX5uk3BRoyu7ickedUDyAVozhv",
  "key10": "5sdBpAtRuur9h3vbo8yvsQn86ErGceGgJim8Skc2yedXvMtsgCKcnppPp83j872yJyBVXysjC9jch5bymH8c4Uvu",
  "key11": "GoairKcVMrFfiVPaMpJbQHrKWycvLwr6ARcTGF915FAr3HvwnhSCbvuGVNtmpAGCLpDgLj5UGshWwhGEjtS2a3D",
  "key12": "4cueLEvufHATS2UBZpEjPZtNaRsBfmowFdTpAeggetVFKnkk1xvUyHvqRtBujyPoUYJpa1aRUpAuYZf8vdSZa8AQ",
  "key13": "4Ysi6DtZEsbde5H8WfjkHnGQ6uBRBGqkiMBDL2MLboGwbPjFVXMBsUjSxtaGg2Dtph16qDKEEaV57NThYsxPPQui",
  "key14": "8B4UtYrrw7tDaQDkLEFxdfL6DDo7RovdA5MjESUrCj3eGJKiM8tYVjhVxNYFwv9vc5Kj23ammggqC4kx4W11VM2",
  "key15": "BXr4aYbw6wfrzt9j3oWqS2TKeCEb5X4B8CqJnmFwCjr25ym3d9UjGEdFHb8f6EuciKZwGgYx4tKUQHHhzCG9vVs",
  "key16": "2ShFJPHxrHGAMqfjHfq645UVuRft9o4VEqEjDqTveLzbKy41XtvhxLDqp2Jy3xnHcWFNF88sE81sQ4nMjeKmgAWP",
  "key17": "kpshDd6irQ3LjJaGFjkUjESTTY2zNCPBqmCDxdBragKeqPUChUhirkGfZB4tqrKs9WMmrtm1ST7BZjq3gxwrsqF",
  "key18": "2pPxjRPzAkXs8UvpAE4cX8Buv9NwvbkS2ympNxCKDTDWrsXrnLR5VY4B4JVnLALayNqyWa2dSAcraY98LgzGogTq",
  "key19": "2jTRhrdswkuduYunppCGsSdZhwzYXNoLoXpEh8Q2xBa6tjFgiawqSBExEjA3LmSmiUFwdP2NzN6QZ8TehKVQvyG2",
  "key20": "48CkRaXiGjnmx8fC48oowuzqGQ7s8gC1WnKnr3fnQ7aP5YnqzAwFxK4vCttSyEaHt2QHubh5JjhyV3jgcq5XUnAu",
  "key21": "2wUYDgAuVzfdR7QZjfPkod8V4JCNKoDScWMJxriMJkmYXAyvYy8gHKpzXLwZyWgryAHGXj4Ca2fiEjfz5tSwNUmA",
  "key22": "2urW2hykVF7NWAC2zy7by7UPZGVNW1jgv3Hj6fvRqD9y8KtsFFFQp922BRSzNKLJ2AWdUMkZLuRfZZ4HeNQgUMrc",
  "key23": "5BNqEM4uCxJk4K8AoEwC7gV4mqZzT6t1G57dbkUR6S7WChhTdpwNeXFidutoez4KtC6ja8gBSwUVpLf4Y4BX8PRd",
  "key24": "5R8QYjSCx9VnVtY5W3bLtTBM7CrkeNDACxSrdhd13FZT5C87SDeq4gXn13uEeG5inpxuon1XgFpFuhccH7wDEz6x",
  "key25": "2aAeK1DGYiT32Uj2UQjKikjnGVeg1rY6srnY4djMK81ZUAdeXsn8iHK8YRoA3S53momhCjG3MzhGgUQKf9fJ8kqe",
  "key26": "4NjYGV5mCeThc5Y887VxhK7cc7EDm4mUJRDsnocvJyZytL8223Fc1w4wok9CGtt3VSQ9cfQfkZgskGKivhqHtZyU",
  "key27": "5jiPmqwY3KM2jDcDqePXVJM6EHMiqKZDhmhDoTsHjN2CG7FhXRLZFLYiKY6vjhXcts6XyhkkmSeVYQKvPaddXmby",
  "key28": "2GYnXMABRjwYbJPmkP8Eo2aLcinzkGdgSJKNBiwmn8DCfv1LPJpmafGRWHecbdJbae18y2H4v7gvXmDRTr3sCqa2",
  "key29": "3bddqyy88tsuu64Z5KCZMgE5Ytx3ykPY231qfBgqXTwzZbPqa4fRh5obUrBJGxmTjzE3JTP1UhYpg7CphXpjKhs5",
  "key30": "2HZriE8Eb6Bw8oqNGGJ8QtjGF3KzPMMyD6wgC9FfDfgn44QQaxWD767qA61AwyaoHJNKUwUb3MfHicAvJJGLfKLj",
  "key31": "2T4KuAiHu1hq5rJXLdRMtYQEppx9VRkCvkyaVRRbUHiWmbJaFCY5bWAii4ihiGwiU3jcWKVizBQj2B1w2wVEVBxt",
  "key32": "2YsedW8uk962ygrxhL7oMuYhCVvYw3pwyvjeuWqPGWngFAEM9763TbnLFH6uoZRzuoJrKEoDgjyFEq7FkTmdw3Sg",
  "key33": "3L7PVdPZcc37eEgdNXqqmzKfzdKahBEbguFiQ9CwiMVay7PU5KwTwSkB89SKMFRG5RKfSBNEPJCbBS8C47haPLAJ",
  "key34": "3DZBKap66HFV5XiW6WjeBzsmjv2U1xaXdJrguuTXYKFQSj2PFq43f12ZaXePeirbvKQLgm3cBtEoPAdMo1vNZ3Vk"
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
