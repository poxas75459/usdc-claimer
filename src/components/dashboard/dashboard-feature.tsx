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
    "5KwHuRCd3PLf2NidKuHyi5n5SNhkW1VGehCLaUspDXBMUmx2Cg2rty3R4bFcrZmgRmh1kzHqjGKARgNw9L7SQtn7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57FS2DMCGxCeDPUtKv67BQ9S9eauSLtNUwZMs6Z9Rzh8F35LwHWGpNFA9MnovsnHFM1hvLr3eh3WCShDaAzsRqnN",
  "key1": "F8MRSGCT4Xc9XdCgw6SDmVVdjCwCiVQJgtFeNwSaA8ovARiyG7vVdvqhC1GmV6ZaBronqFMyL4U3m77H3Hz88Be",
  "key2": "5b9T65mjhuQAt2kZnUet5HAVJWMeafUnFKUGjy8YDBnvHyc6LTM5XFajsunufRYHUehF7QHoeXdu5aC5NJ6J9reR",
  "key3": "4MzpmdiXBADyBiK1GF4UDgzU88Q5GbPS5G23CAHGu4Wge1EkvR9ndBkEe1AwQM2XvvbnkxFcBFsLCoWFZN4uWqft",
  "key4": "2uF6evkEUEw8PJNJe1yDxkgFQkXHFSaK48jyxFtEeMzEVHLCvoY5V1wWhsosA8MyZc1tCcgwe5LTmaoAZZkQD4iy",
  "key5": "uwGEb1rKMeMgd2VokwF2sprqrwAhmuBzbTDGus7LQRJ3HEDcHeRRX5dNmJmScv3tGSQ7rLGonQz2MdKD7oj7uux",
  "key6": "igBxi8dgPx8vUgVYBqz4hN5q7PfmndV7PyRrDPNPFeFeqtY3Rky6bEoDpW7MGKDfxnDv8TQH55856jhJ1Z8Em2V",
  "key7": "3k4r5VD8H61rGZCoURcU3pDgRJhxZxQmscGKf6fP8hSXwPQhyyGootrqBTNV5AjkP4Up1QyDEZLfkV1wYQZ9AR6X",
  "key8": "5g9NMJqLhTztZAxvFHDtwiQDhmnmUwzkovnqnnYXJmFAHvMhjgT9FziQ8ePKc1ghS4B11nbXDVqPn5hkimW38suX",
  "key9": "5BXsr8UEGDP7NtuonkGc447dLRnVcopedYrbtJZvF4Yk1e9w6PaSUv7HYgiWGKkZHmeGXnzgbFFZehc1L62z9Jve",
  "key10": "5u5d6ht14woD9MySB4qxGtSce32dT7fejFoJJDVGuxvo4iSdpzmSqpuSasqtyCvUhHtvrpfnfBY87FQ3N2rWuYXy",
  "key11": "21BBgTKFf3bkrRYbM7aN7xuEtRfKSgF65rc12cjaaaCREfGCaQitbxQR7DmLpRcfnhhvVkcSHtG7ftyqGq1WKNF9",
  "key12": "3tSJ1cT2FA4NYWoc8wLt7wGdNKxK5jDnBTTBfxt6wZwnbZDrt5vnky313FVofvjWBE1GUjZfZnek145yG7hEsKsM",
  "key13": "25F3vuGLs6gn7Z38MUGt9zbdbKAWHhy1M69ZeixmiGZ3w2LVe3snCcbQ2c8ueVD9ceRofQqLh3aV5HDVJRreKkRH",
  "key14": "2ZuNFzwijF8kmxkju2edhbQwT1fCFc1BTV1D8iZBm81tksc8x8NFwth62i3jrh7XrQXam2GqHjfDWcLG3dZhVwNy",
  "key15": "2niAeGqiy5Uk2qqALrPm6CVocQJfcJmhF1aGKqQPPbkRd5ZjYX5F9mTp7Z5vuhBcU9TxCDewKekf9d9xfB4BMvqA",
  "key16": "4oso7x64FxZAxSnzDj6sJRhSohNVdAj6jryDXKvUEASQZ6LSVz3K6NjuZ49Q54DeFQULuHGAmsKs9L2NFbz4VYk4",
  "key17": "2LevStXLd9nqjozJ4Pfo9sh53fVRcchw5yPkSRRXpgNjQfqQxJiBUQgcVJwvbLngue88adoNnk7kan8jy6gBEzSr",
  "key18": "2TUqjrCsz4uTNahumMi11MgR7o1FdsgdZd7BfcQdDat62Z1FBRhtxTHpU215wjJkDnv7MyvmdaUdKeKii76u2BKp",
  "key19": "5LiMf3TBreY6XVhHgdD6Tv2RFsWJkPXSVqLA2DfzAtBkE3ZfweGyxNbU4SHMbXP3aHnugeBajHHM9ZkvQnuV9Lcc",
  "key20": "4fzKEFiSgWAMXckXUeWCTcF682VnKTc68UE9J6cKEJ7Ns7vUEYwSiw225maQy2sHoLp9uQqpC2oGewJ6SbAXn94T",
  "key21": "4YcyKxSPnKZAi4vmvAZzjMYu7kwsZUD7soZFx71X4Ntmy1nDh7GNpiMGQs8oP7jwtToTFYTrKqRn1jdwATtXxn7a",
  "key22": "5KY5ZcjqzcGiuZxZzmCYs5eKpGKNyaa1Ev3qQwAewrmLqja9UkhQphhXSqrys5WvvNMiT8oGas9YDsQYoQfBKiXT",
  "key23": "EpDqYeKweNQgtAYEHR9k9WZhVKFmXrdJrY9jriJ1Yv3CJQmHU1HvjsE4oHRFaFVBeWyzfbYZfG6Bb8bSCYK2qX2",
  "key24": "2kJedQjrMhcdNA6attSdegfJKiAd17wvJuPAcurtiB5jkPT1YFHfcywj1mJzsvj4nfSS32TGRsV8bwfSL6r6BFN2",
  "key25": "4CDnC6LCjJjguLFgz5CpaSHUeu68x4krSv91UXEuT3wSvPWZKiDswrBcAA2PkBBqwiePBoXMLiSSeazRiio5es7w",
  "key26": "5FwrZkJSNmFWNKGQdVNdFPWhHfrwnAaHtPoZ3JZ5kYYgPn5GaGH9ZmCaSP4p1yXJReVRqhmv7ch8otf1MA7cCQJL"
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
