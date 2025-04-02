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
    "4wnUwKXMeHVjHGN54z4MhSrWNvP474MBzRP32FrSsf77jHngYKx3yQviN5PedH1tWFRQZvkKxah74hi4NKqXoA9d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZezP4eSvVmpq93E21XCs9AsN3tJxwopzrdYnzKeR9QXJGqUqTrj78WPM5iyu22NH3buspbbsHjNtmUzRZ9eocF8",
  "key1": "5pGWiYkkwhwXH6tHidrtX27HYPbdbLESDZqvaLZ1Y7LTnvyCJVDrWUmRyUL44hQGLpwNwXHoZ98nrUk65ik8nDps",
  "key2": "Utatwfh1xR514gDQme5bWUGgsAMRVPoBQ2KmhxmFfsuJyj5agX2D5kPnbCXzbUzY8AvDrTLSdGRhGBA1yMo5bKs",
  "key3": "iV3VDzyvtopSRcyFy42uGtdr6pdmkoJq9qLFGKfizhbRCr9AbyjU56qC6xS1bGtzLs2xp9nRjCg6qYAbQPcUdX1",
  "key4": "5kqEdGhzMA5vcsqWaWz4LxsF4jYtMJ3zSF5ProRSM5acou6NJB5QekYs7smFy666hoMfunn51fwWzzVi1TygpMoZ",
  "key5": "58g4jAUXfXtCgqk9iRuoWcpWyXzjpfmbfaeZ7Rkwfj6syRqQWDgFVsD7dTrqhkBqva96atKyEQPKQNt7kcWiHDnk",
  "key6": "2vLKj2Q6PfMkFxohko33bA2999DBWxEyif5E8nRffBowHm1aeNV1reen3hM5cY1NUd5p9uo8Bt9qpCxn2nVkywek",
  "key7": "2cd4mPeTaQTRQ9rERSNyKBMsKjSuvSmsDhnDTWixxM2gTbNixwKCZ5MCdTKrihPsVKF7XcpNB2dCDEyZKEizFLGo",
  "key8": "NACwfu4ihtjsobYt4LZV7U6tHZyQMvxL9F1fTPnAo2Lb9duy4onsMXUhUqikGuauJhKr6fMydVRNZwkiZ33Zjb3",
  "key9": "3owJ8M2SLbRnrxkBcbjfsxqNb2iyGwJ3FvU4KYNZX8p21Xdh1JQ1yxzYTYdKt3RRvP15UHq3fso5je96cTFTiDRc",
  "key10": "3hze4QvaXhmzZExNxeuTbazqiAMvZYdjvhU5NGF5Wu12LJM3xy3nhTsJRpMTRPyTYABCZDkkFQwMMLnZrGBLu45n",
  "key11": "2huNRmrvTJWJMPm3vMf8o1CZYkKHpq3KK2ZjBTiCuxMVqNtC6ukwNLc7BQQZfGhPdFwJbANGagkAKkwJPuLpjKB",
  "key12": "3bQFq9icGjK9WE1t9VhNW45gQ7SjNAqbx2PRZ7SfkMupPsmPpsy5ra7He1X54Gp8yULm4HkETxXittHBA4phvC4K",
  "key13": "3gw7NVkomzb3zcQvpYvszMHM951jnyboAgkamDMaA2s437gfBjjdvgT4WYxoDYWJM1Pw4iLbwnF3opsrG29Lhrqh",
  "key14": "54fhTUYoTjv78PZ3az3FbNcaqktXG19s4xwXy371BRgBGjbfAGNGZbr84snDfDLTX2J5QeuxcDx6hpESp9zB4QS5",
  "key15": "5wxUd3YfjcBA93KVjTmTi821yiyEQsJNcwyV42Z7VkvqXBCGNLst5stNbE9HajoKPsuJspJwokNBbkRoG8mFaYjU",
  "key16": "Bi82huEcoefVnXhX6heX2wzVa9gJnPLWUgSYmkpAoB4YKhzQZ53MXjTme7emTCCscGb2zsWkkHpnRViAEVXYDxA",
  "key17": "5CEDVGNK8Tb7Q6rtfiDuLpUipdL4ayyComXsbHUz9ALP8XQavfVqSWgKZSfDbKJzu95LQHc9mRGRPumnafdd6UWo",
  "key18": "39sTXdJfDd9GRJt6MCfiivZ1mpzstC4rVFFD47HbTLnbWWduxDaNopVFQSLrdCSiRRBFBwQugyPShYTMPph2mdDX",
  "key19": "P4mkmYAtFMkUjU4wfEbAgG1Ti2YKJJ2ypWMZhoWhd3beE6rstK1Q7tyZUccnoXctKVrJL5woaFoc941Hw2ccwDj",
  "key20": "5dKszfFzX5QdWyHc5hhtC13JGCDYZrswycr6YKC11PwtX2HwJ48nsYNemuaUNtcVTyC5vJZnJdBG64o2dvfK18S1",
  "key21": "47cMQsmdFowdEFsj2Ro9xYeUUBuXJFRi28hMnULG7PhKKHtJTEBxzHqkYmKvgLuZtf3KeJtbaKRCec8Fi7t2pRzH",
  "key22": "3i9N7vZ7N3fVetG6PYHeoq4bsu5oZ14nQRAx9ymG6zSzzS8v2HUi84DNAtJ922UvYp8mL3EXYkhkgVz9dTGuy9LH",
  "key23": "2pzE2wBWGanHru2yq9kQBXNCXywLpCJQEq7wQJywDRBPrUUVgu2tM6zcngyB3DycpW5ABnphG3YvxQhYZd9GbSEs",
  "key24": "4M7RNRHxd6dyXTYPpp2oAFMmLbk4LVZkSKbYdp7nF6JHLn9uvi8BaYVQbNn61HegyEcrp8PVEeHoe2ssiYsJRNDW",
  "key25": "5PqtVe22tADRQqzAqVjor1J544sR88E28sgTPiBtm5Z2wBkfkfZJPCJRHhrQdPoCK6mpCku3ei3zzsPVnzdgfLf",
  "key26": "2RtXVS1GG5DwLp7bgJpso4R164odPHZTm81aNj61DDMvfuWGCWVxVfTA4ioCiawqKGcjuEwuMByAxbNrqHb7kDqF",
  "key27": "49wt1YWUKpYXXqiAZUbWJZZGwkTvqh3HoDNEA2ShjGVfP4fZCCwowQFmGgeWoMYHR97RdKFWKq3gF1Wbc3jXFSNp"
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
