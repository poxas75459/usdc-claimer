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
    "2KhzMS4AVZWj1SshVpL8S1QChSJv8igA7GLXgWpbJBjzEynHhxbCsy5YpP1dszUJvF53MiAL2i7FbuKJskX628mp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fcBvu39EUtSu2JtvauriqgRU2baToiJr5wg7Q4qy6uLHEQ6Nih8gh3rYUWdfxFRsC8u7Xb7Gd36SVfLjq3vN54R",
  "key1": "3T8AUW9aYUcBC9AHueBDBSCRDDu9coBVorMtTLcQcsw166i76LGBBx82Zusro9LATK1CcNJdn4ShLRKsGfxwPKdQ",
  "key2": "5f6TewckkWDC8CYyTidoVLLpcEEYoxCWnCucZuW7n4Sa7QhbEvJZYVSSdqi6sEXQz9q3pZfq4mWovrq7mtC2xYq8",
  "key3": "2Bp45SQRLXjp75ymtUwKAYZ7DFfKSbsZ8A445dQiMrrY3VBFk64w8EW4iBZ9kK7esZeNfzmPRBRFTuETwFLVXzRr",
  "key4": "4wV1A8wxBG1VDBVaZZK5sS9hzWmp3MdTrHrKvz17u9Euy2XyDZvRp361iD6d8hyY8d8TDXnkGZxtWLzxkLnbU2az",
  "key5": "Ht5oi8nt8SD9GLgE2R4zdvtfscXVo63PjJCSwkPHnXi4NjmgNWUfnbPwE1pXGnsFhsq7jsNiqZKzfSLqARhu8so",
  "key6": "4hNeDCPDNtXpA1aaTZKeWFgwWKDd88DT8AM2xXM9zhKLdeh1nv1bYWf4MRW3rbSama97iBxXw6TfMKgQ4hWaJscW",
  "key7": "414w74TkgCvsufksvEttog1SRoMUTp1Fz9szDb8LK4aGvu6HdhxcemdJ1hwn5qvx3RNgXm4yLT7jYx77CrHfihGy",
  "key8": "w48BXpjN6RMTkWgcCTkh3CJeH7FAoStLRBoKzSSjUydZxwZMyNCKW4YzFL71pwBmSp4USSy1PBZoGhthCzbivZj",
  "key9": "3edqAJs9QZC64KPencG4LLjxd7ox7kd3E7xQTc2u37XFuAt6nvG8ip2oiNEwR3eaZEZ1dmPTDT2BGvjFCLf73Vge",
  "key10": "WqZG4FecfYiWViziXq4FpEb5WxLLzBgroyc3fiaZpWcrHcPRWXSG8D3wvhWkBpi4hoBTPjAXYTK8kC87VzfAcA9",
  "key11": "2jhhGVstb5ibgz2aiHr1auUxe2nu1RJfWCQkNwkiR2KDxr1h4NXtq41srQG5jBf89SkU8pH3Wy8UFSyCk8dUzB89",
  "key12": "5XaMgSYW1KK7AyGjDGB1HrnSyKz9L5R3ygSHwwETAK456DW9vb5g3Uay8xD38b1bngNRUmftyJ6EV7dpT8e4s5B4",
  "key13": "GcemX4kmA1wskDfntA2oELpVJRTcG13q6P6fPgY7s5uv53Z1BYgPqdw6WGLHENDvMVxe2EFzXVfUgJ9SdjxMCck",
  "key14": "bjqXXKH5eQ6UbPEho8DPDSb8HHasAFvi3xSXQ8nWnrzsKd7RteT76YbCcKjtXfVTRuo6onXDGAoK2DQJ1fPAPCx",
  "key15": "3iG9rspS1tovqKB4idqC7bQiF4tEHD8XwqrtRBkZZqe6S8UA7iLrpc6dKwowynyuc8pw16u3ogbdYUBR8ApiTc3v",
  "key16": "5decbWamR7JF19mmuQVudcZchCgQt5EuZsuc5Txr5dadgSefjXBkXGsiUfXvAcMWYLM7N4PPFuuvfzWWdJMtxBRn",
  "key17": "3i1nGyZtuLjQNE3A1yYagXuTfjwovPb7hT5MDDgQwXtNmqRyCbUd2zdREmyooWobJ25NzLiss4d5YcP5TBf1a9Uc",
  "key18": "uxoKdhUraw87xgtgN9qJPuxQS2c3pZFoQE68FLxL3kUP93WzuJfAvLcbDMjgM8dFVup82SNBCSAhoGSXuoXwC1N",
  "key19": "4mHrjoKp3dnGYp7mSWU3hEQg9s9XhEmnWYd37ubU4EzUfhLHL3kNq29vMutFS6r4BEwsgiPhuFC9rj21yd2XD6kd",
  "key20": "3YzpXjSEaxA74zrC46fU8t6QUY9UqKQUcDM895qWc1qd5qvjheFuxQbFXa1UtKDRuG2QHckAR81DKVUgke3SY7DC",
  "key21": "4rF3W7VB12ePGrGjnFn33CHiXVSLUL785v2JYWEit5vF48qRG58x4eUHXFsC3Dhi5cRuYK2DJYgvax25rAVPHqRV",
  "key22": "2mcQ5TseggwJ3FFvUWb2fN5R9avVVwJuqcey3pRnYVBmkFRLD8MBKm22zjoUZhDBA8iUgmfyqyr9TWscCbMshduh",
  "key23": "Xkj3YjfvoaxDXVTauHwe7qhDm6qAJLRdJyxcL7qZjr96UqeniWhmwtrinzaWCXR1y6n8UJFy7BjaYAoYykJxZjJ",
  "key24": "4X2WNMzkFGZ7wCwRiw4y3b1bqDQhsF9zvdGEnaRrshSSzcxswrkFug8gMWdraLK1qwCA3qvRAnBipPmvXMPBf5pq",
  "key25": "4ab1Fs5ncamiE1UeE1Yax1dsAkSVPqAEGfWTASf3eVRaE61ex8inXQ79RwomKp6LSjDqtbpzkgsFAVrDKCT7HetP",
  "key26": "4uFqVfRd57gYBWoeZxVfXqrU9SxQdWeVtBZFSEcye7eUeDYJuCmY4ic7ENvUby15wa69tkoDxD98Hg5Fp1g9ginP",
  "key27": "w6RTUU6fGox8T17gwTie1FGR55kXAEkMyuPHkjwVDJzkQiQ18Riu58Caxi4LoGJsv2Bmctii64hdGuoio433cAM",
  "key28": "Jvwo7gLBWCaSwjAWY4RiaaPGPxgVNSdiThaJx4gy49rB9ziXEasbvqg14jb5E6Ytq9muA347nJadwgTkgTRUg7R",
  "key29": "3N9hpJonYZkRJ4WP34yYya39h65mLQB2X1fbEGk3GJ5RCwm2qEKgZ26g8TFeEWfjWLnmtwhvd8rQdeDM7FaQnnnJ",
  "key30": "348sPYw9tUS6ZXkGJjmY5MinWQnd7NxM4ditJHQAr6pH3PtnKsCmvkmGcm5nqj96Lj6fNxPsKYzGRCWF7ypWW9wD",
  "key31": "5fxhUWMnzPvnF4uobrLwtvHCK55dkzgyn5HazshDir7pWQ9473UhPHQBdedvN6gh5wMFmqTa35Yf6c1tpsVj5MAX",
  "key32": "5WKngW5wdPTRPFs4LvrApL4J71nJ2dFU7NaTruntVeuLUZ9KKfL5hqcPufVvCKuDJSify5e2rcBa2BWWvobPHMhC",
  "key33": "5aCHCYS9hXiRraB482sSJwGKG3km4vjyaPU8NYe9qLFCNfDsHAYFmfmjMKr3peiGENgZGr2Di9p96v1vHJWg9gVx",
  "key34": "fDsCj3Ayi5hAuoQ5ZNHaHGhnSPvvrLUKEji8HefKTUBmj8QbMFEctzwQhpstgrhSuta6rNWSgz1RQmLBUVi4ASi",
  "key35": "2DLyADk8DJYgQKct8oQDq77XBAw8Gw5KC4vVgU7y4snawqXo9NVjMr26Pdih2jZbFVJcXzf8McwczFCTizWeE9rL",
  "key36": "5WgyGaxUBmeSw8ScfQA7sYqAgTHBfjc4P5o9XzEZbkKe4JKxezhGBTysZNCLvDqb78ygU7ptJB1LV9wbHUG5EWoZ",
  "key37": "2GzdT8xj8FP72eyRSzk3P2ghYa4u9CduNdBVtVcmBjQa95KMhKL64bt9cPuWpQyFz7QtNBuSPSfz2FSX196Rwg8W",
  "key38": "2Z48rMacyskr5xs5TLjnv4GcUvBe94QnDhY5S9ULfYV68n37neHWPqpDsV5PJDy868o71VEWqAQUhdo336iV6yzS",
  "key39": "3KZJPeJH96bdYpZABx9c4gWGhE839NwkyqnxPSsfhJxGuE1DQGGBkZmgCsBFSYzE26zT73LxD9zfjrrJ2GHmEqTL"
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
