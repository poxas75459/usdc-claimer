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
    "55xEySFh8TWgR8LG6cwZmZGPX6MCvFNkkMTZkhYrjE3UyN6ra6M23bYVKiVsyBE21P9MwLPkJt3mDyPy3a2QxtiY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aEkP3BoZjVJcVBvfxAq4oMuJrGhzHZYEN49NFYy1gRyVPJjwDwHdqQF7DNHJkpW8KxhuGw8HHm5HvnSdcgFxmin",
  "key1": "2erwGwcWuMdogm2k5r9wb6Kj7sXAvFJEhwSSBYZ5nNJiHcgiNpoJMHgX5SSzdEvwoy8mnXP8fNch6Gv6Xxsc6s55",
  "key2": "38YdZq4ycXQip7jp8iJ4qnHYFtynHS7gdnfhe97upEa1G7vzcYD1ibZ8mCEzbbTJPqKMa1cLUW3JnzszD56C2iYt",
  "key3": "4nymmRgeMyh5PEVPZdt1mgstmXnRcxdSg6QQUPY41jugFJgv1GipBNZ3EXu5GnsMfUKhm2MtEQbNixWaygmxv2o9",
  "key4": "2RW7WBrW363u98Uv3uGoerMNqqNj1edtvcmfNMMsm5opNHfWoNntnThRfSh45UKEcXUS3yk1Y6MFumnZPNe5A2GH",
  "key5": "2KTMcGtA8qg2KpBNcvXKcJ4EPSP8yhwomGqhoh7YEhgTcj7sksAqXH7GTAhpTRKcuwVrtBUek7LTyr6rULUPExMU",
  "key6": "4isxy1M5DDH2A5ArFMyAdB7XBZCLJdeDkbHCW9AcNz8WbMq3yJLoiQTWRHxjbEnQtxQMUyz7o6njXjs91NKwEMUx",
  "key7": "38QjvNwqjq3dd6gA9EKxnFLaoN98QhoUZsXrwcvTX3iRM7L2spzSKWa2omUAmxRaWGH56GexAutLeB9KCYiUNm7s",
  "key8": "64cTc3RkST9716PK9fGF8ezFqy9Aanx8Uti958sGJSYFPJuGBn51Qq7am2jAPYKNbHMdXCt91FNiB2mH9zBbDoW",
  "key9": "2DyrmAKmaGfdo9wBBjeZi3T4T23bp5UJtj6158nCq6hAx3nzA1SMjcA4Rjn6YF1wkwR4VZrDaNGZNwYd4TgCJSZp",
  "key10": "zKyRC2mhua47qgLUV8cvcLgFVsQDihp33X9pCX9pivcVawY5SkW59a1AZsYRw8bbiSYnhxmX7vHwj2ywa2sptN2",
  "key11": "VZbFTD81KPS1NtTuq5PMyi47hnprfE47VRwPTa6HvvntuE7Juc1RMvF7YrHUrBpqDXcY3ZiRxLNiYCyP6bQv82w",
  "key12": "3FwzwFULwSibhkMaNZefr5h74XkSXvXX4B9Xpn8u8YaXGsKh5MVDsnefrtRuYcF1J2mrPrH4NnYD7jmwyQrEQSs",
  "key13": "2Yp25bbuMjsAXGyRbpqB2edLMvtS7gMF1EapCmb4NkvwD31hMuxMZ6xjvfmbKgbjSA4BLkqLhnwZwtUxNWWVn1mY",
  "key14": "3VNTqSkKADwupFV3qZ78PBS39EHJ5d3heFxZ7GQm5DMmW6PhwUMxVPkPkr3CRxaXYbNuRMBkJva4BT87ZDiFdxYT",
  "key15": "KoB7K7KFq3E9vJKTGeqd5VksZsCRMUYSQZw93jpszxxLiY1rjCFaxxXJMY7iQy59nyfjxQCobRTVehs6snexLy2",
  "key16": "5xauqY3S6p8W8nRxUD45KTSaisSr2HLDemaLwuXozHu6jmDpGTgEQbAjakGZ3BBt55qQP7trJPJKULeQrVskuwxz",
  "key17": "4yECiTPQQEnEs6Mc8b7bTgtzGAv9eKsQAw2hTps9Zb6jq2cfWETin6uPqyZnb7UEATwcX2wzrFPrCodvfDAMGBph",
  "key18": "5T5t2UTBkxpCYtWpUSyYbgyx3saHPkVXBPDCoHHnm5VvW9Eg2MiJVwSyHTKHFkh3k8dtKuRmPJ6MRH55fVr5vALK",
  "key19": "49Xx9A7X1xUDkGLA7JfsnWS5tij7R3nfzWw6me6qgJEQkNjb1ZsaPBsEYcwQWk2uMyinff2s5QbJMfQK9Pweo4EC",
  "key20": "2nmUksYgJns37a69npxt4p2o5LwQtcQDH9xvKu7KVo3hhcV1myd9C6NBMobfdtFiLXHBWU2f8KvQWGRczzfAkECd",
  "key21": "36yzaeuTVo5nzfxQxWFsjjFKMpnnoDbsmraPN4d9Wh2PNrBqUGHFEBwvvS8jwKj95q7dRdWAJmB2rfNdiNGhZRNo",
  "key22": "43VWDTRRBXnTz7LHjGyTiM1ZatH8SUssJjnRNVXNB9LJK3NCyPGsiZHuV4qYNjYR9j5TLwbDXuhFJvecButcUkER",
  "key23": "3LE3y5239nHhZS2eG2S86ckL4SmLbkGiEgZrpxHn5GsC6o4eyT544UcfFAF9w2YSjWJS1BgiUB7RVb7Vs2zb1HQH",
  "key24": "373oXP32n37gYDKuJJHzbMNZKjjKpwhXPCMw1T7RL6kJvJzs24svQsHFjQhnUDETP7625pgawY5kZmu2aXmVu1aj",
  "key25": "2uT8icNjqzrFeH47aBjbxGnhFc7X4BkXPXgsyFD9LB5QL9LT6LkWhqgnw1RFyScDmWvefeE3ZTBP2oY3qUEHaUm",
  "key26": "2PoC5GdvDyVPbY26KH6HrZYMY5WEW8wNgb856DHgxXLyaZQXNyBRV2SSkBwfq9vx6hZfktoThrgukt1CBkGkRLa4",
  "key27": "53Tisr5mTGeXoNhxbwFKqeJewyqgRGkmuZAgoJDH7oyB5b2YxwsK4unUzjnH4cyVbYQn9T8uhyTTSYjzAGTuqp1D",
  "key28": "5WYjjfNdzDqdYRpCYZHtQ2ykwyAVS7b3vYehpWhqvTRfteVTND5zaDDycGPxdksVYdtEpb2yhYQDpoxHmabPoxF5",
  "key29": "VxZdnLJne8qqdqmgKiohEdWmoYBNoV7ordGPkJZcZedwtpG4A6SVMBkgFCXxQhkmA3YdVx5NX2vk9h5J6k3niZK",
  "key30": "z1rtGd2JqsL2fm598xkhKq4ao9iGyigHqDw56bCcWZPmzRoRaSJaFKFY6LatrxwtRM2R88syjsVGgP1kBjCBbcz",
  "key31": "aiJCFK7JStjt7p8b5QZJpn6MVqgMpX8ge7ic7M4sHYQXN44qZDZjLHydUGFNFZFSuGWKU3RYfKsFdBy2wzAHkke",
  "key32": "TwFqkmS2HFPbzf2mv2UshPLxxEawPBn5Dbfworx1wJ3Ni6iJNqCMLNAZFytTRQzQXaf5gS9ErhB1ad1p8kNjNbY",
  "key33": "4AXZkB2DVdqQDpk1HdEtbBWQpRvJ9LanwgwZj64cyQGbBcqv1B3U77qDw9HMuimJ6xYAvCEAK2rMnCPBSz81UMHy",
  "key34": "34WsPTzA92rm13ABT1he14sLoqVoP9MFjYYjkTfbKCFyZwYeiEVHhR6AinncBiTrKmhXnYmJj9uH2MeWRvtnYg8Q",
  "key35": "5pS6Xkr4qN9akpYBcTVmtgqbcH6nD1t7CTGJRs3wsybrib7fm48TrNdFbavVrAAiWP6SF5gcEVUuFsAxQ3Xs2eUx",
  "key36": "3fq16YSvqHg1jU7Un7tKoVws7ARq6JoMenKbHG5Uoj98Z3vr5zxdnj9195A18gDdn9dbH3ui7TcK6nFdbQi4dxAa",
  "key37": "5X9qSDeGkgDCaNNwLV3hBpNNPMz9RLrHMWCYGY7Svyu7W6KZsvueaEAzv4WfiTkPDZP2iASWdvVbpktzdyi1EjfP"
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
