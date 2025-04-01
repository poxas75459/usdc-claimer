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
    "2D9figEBQXb9fTKbLRf2gVG7XY6XtKDKJkDdRCJoMicssPbSNsmEjhZ5bkXXQ6yiqu7wX9XQigMenJqmERGdfF3W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RPJSpi8xmYb6JoNC93GeZwJ2rWrfarsznby5rB9h97ikZMZHr1WyDqEQmr9J4uxYt87uW3hk3CesTWnwHDsZSTU",
  "key1": "3gtkdYxvB6LFjiFtMHq8grWHnYcB6FjsXK9ToR3dYVJgG8W98R8e3Mp6FC8teWfbHrfQQaomwxaEQnVXvB5scg18",
  "key2": "5HBGRSjj4eczcoVmLSaSGiJZgCCubjMYTVSq4UHMHfa2jws2AH68DEwgu9AU7gnDoATW8J2oSLdApyy4GRHqc12k",
  "key3": "4aBTsdqQZ7GP9q6HqWfQnryHP7XBnChe2NWHPXewrQtjZZiLD26RyzMDpaJBsn5n9MJvS9hmzTof6LtvcFRxA9rq",
  "key4": "93TjWDsZw1opgXHhPiHRPYR6CoQ9KBAqHEy1kwfNwLmHiUCk9YB4fsRGBGfFDDZ1EHLitm1HyEba7ZA8QfPKpmQ",
  "key5": "3Cp4rPC2iTmpMG3NZjoZFqFGwhSH2oVxqqLCou72qM9GRr5RiAPTBYgMKM5bB4NFqmAfjiM3X5f4P1ZYTJy68AGQ",
  "key6": "kDtL9YeegLTAeGPTPNP41d4r9ykzqD3BRyeUYkhmFj1jKzTDJfWNqDDv2P4YpyKJNryghcvYoF5ht2r1sJDy3gM",
  "key7": "5p468GnTAjN2KyndeCK7gfTzSvSnQH6UNpXDWAHkWLM4UuvmpRu8MoeFP8LUpQ3aHuzi9Yj9o6kaXQxXrZDsZmdP",
  "key8": "4XGZpQnrUfs2FbmE6j2La98RRqVQFcVxjjRCbeHgd2KA61K3ZrK8LxTnZxajYD4cXYcDu4EsNyuf1BmGhKkjN1be",
  "key9": "3ZVTPLZhYjZjvUekbzFUY846YZyu6vJ7vcKiosGyAXgdgfT1eEU9kSPv9j3aPQy2E3TDNuHtXmYemxAR4gyFqTsT",
  "key10": "5ck5qGJQefYQm6dWTKdU7zKobRfWcTbs9HMngfurRWYZy4GqMhteeLXgs3Pa1rh2qt3fveEYQQFxDqyiERapUVCd",
  "key11": "Qbu3VBF7v7YWxwB9a1dddLStcuxHc1uxS4VmzZ3NH1y7xC2xpq7LhbEeSUqiYqTin2WYMcFyV76AWMHyjnmdCnA",
  "key12": "4krTpPeVgv4tA2RVcBHVroQKp8VeygaMm5Yi3fse9XRFvDXwUHwrSX8uX7RPqtvB7qT8EBHgufV6sbt5XazP2cp6",
  "key13": "4Ji4raYBnUtLFmatffkzuYQZyCDihB24y5nTHoVb2KPZuTuF9MXKXNCyQpxY91m2Wd6HWozUKPHLMu3Bx5xC1iqQ",
  "key14": "2GxgMcS1T8L59MkZobkxExEybdmbYitnLG1i75C9uizr3DXpMtC4FtyLKJUB5RQSXoQrgwQEgEvHczhuTXDUdoF7",
  "key15": "2RRPF8CF3EUWdGqFLR1HkHsRPTBiMBdcYht87wNqGZeNSmq2YTojauCcPiKwMTvzoVvRww1qqnFdCjZxE2qDx8rR",
  "key16": "4LpU5p4N6xccu5t4aLYG3tQSsBGXSCZF6vSfayDoLmatWgeVX1HxJsHgoFaqLcnW5nbh5gXmrBBYc5mer6RGKXnK",
  "key17": "4QmNJhQVq3M9jUnfSccLEF1HtKrSyrmrc564ewvJsMgqE4pEvcDgQvBdCYDxz8mZsHYorh1emjmii1MJrzmiUH62",
  "key18": "3p1aCJP12aainX8eX3e4AxvSjDWghRDfoF5ufPSG1jDdojueNWjs1gYS31aauhfxuSSSgpKEM9YNXbh3LTEtjonm",
  "key19": "mHmQPZsH5XTH2sFV5z66ZyZpUVgBuz7owZJX7XzVLb4Ysy6CHYSYjMdhYjha4Ne6DvAz4Bk9fXywoohNpnqvQi1",
  "key20": "55aFwW31jPz9kSFb6AUxo8ksXF8H7aKc7D2SS5nWg7veiWHTcg4fz4rDjN6VM5UCTymYr3KJuvmGkZ8nA8QWiNhN",
  "key21": "5tWb8aj1HxfMUGy93c5RAUCyguNGStMZEPZw9J8EqvB1uyrF8Y3sdNhB5k1R889B4U2B1TKu1o424HoTi3aMqwhv",
  "key22": "4aebppYtxAn7M6gv5eRFo7dHpgyfcvSwApz6Fcf3wJ6XTPvsf1aeMsGRZ5obPfjfnqyespD9wQBLUHrHpKxcvNAA",
  "key23": "2xQdwbBnukbrMEyKHsp5VF2V6yWu6x9meo7qrHabdp8iAQcrfdU4EiAqPZSZf4tw9u8SBwUqoWjUUBMfn1Lhx2de",
  "key24": "4aKvUEcj6wNWw3nUPzo9mvLp3tNBivtQEVj1QHFgJnATgDbbJy27BX8itwGS7xXNzxmqcb5nAjUEEbHza5MzgFKd",
  "key25": "4MZLYSbdUJmM3RvSE1z3Dtw97izxAwzjXLqcpPHwXzETpnVMnAzKevHvwn7Ci4NhV1VmsQaczMFCHiswe7aebe7d",
  "key26": "3FPMwWwgJSzUi9esj2aR3LC4dLc8iLAab1rKi4DH7HHrFSScPTuf9W7Y3QXbtRFPLB17pJmaBZrhmisRZT1r7HVJ",
  "key27": "ghEpMgiexZKyVWPn6tMy2AaTi1fiX4YnG3LvnGMn3UsCconXj84KPaLBSj6kAodZLB2GytZutE6BkouTGphrPxW",
  "key28": "5AfYtApg7XJmgxmXnAQj5PG7HiKcxFqccPJH4SYTDAAKmwEbKhaYghKxhWcC5BrbRBhQrLu4K1RqRw7f9meJk9Bq"
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
