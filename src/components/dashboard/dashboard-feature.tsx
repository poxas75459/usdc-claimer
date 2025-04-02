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
    "4FmgR91mvTb3YfWo3n3LBLpDgJEpWmDLj9GaHfo4FiZEzGevUamP4HQTnAbw73RbZFzRbvpxTfapANvXuXErbzWq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ERMt7k1TGXFkKgKTAdTRRcrGu5mRH9Ls8PAzNFnnAoij6QhREL86jguLFWfFFmoW8LBAxQZXZ22a81eozM4Faha",
  "key1": "5d7oGxZheWRPgYHu1a8esmHfPez2eiJoes1wKMTk1z5Dz3zDqaaKf7nERHpgk5safy2AyMuS72xcJo91bP6VnNYR",
  "key2": "4Qvo1GPaJQen4bJdUstLpoNYoRydqK6Mjv76kBQZLD8mJEder87H53ChLgw4KUThTQVMqZDikuB1T41VDfnhc6PM",
  "key3": "42w11Upeop7f3wNdb2egtjcniA2r3ushnPw3LxtymgkNqpqWcAbmByaqgHQCjr4xe1FdBE7DcPo9AjvqsZcdWt6e",
  "key4": "3XTbBLfKsY8Y3eBxcUV8FAmEQwGDMSaSvq1QvvUs6M2DJKr7YdMJZAMBv5tSRgGi8zoJroWQbbExZqYgnY6WTGJz",
  "key5": "2BRGwfNF7u8QQ4FEUPCYZk6DHEzL2SpZaWa3QyP3EaZ1VncFAbPwAKYV1M58NxdXduNG6VbfWaQcmRzaXSgRjsqf",
  "key6": "2ZCf5dp3PUjtciznAMUgjucb3okGetZqz5y18GDZLP1FFtPf2z898gf38ErGB4p4hCwq4oh1Ed9m3CZTEPPghq6e",
  "key7": "5ih2oTKLCeqPWNXvn3paNHSE4DWuzgCon2jWjP7z4J5rcvD5KKCpDdenjrcZsTDJYh6wDk52KU2B8pz1mod4Ugb6",
  "key8": "2vvGJucAe6MoGLTeJajrMiARsZye1PHKAqGApJn5LWPQ5YLG5GCp93kZcLKrEBEbAtmm9dRv99dXKyJJbWcEHMDM",
  "key9": "4xUhNNp4SV8Rt9E5ghsioLCENJJbixp9Ajmk9h4Lkim1fbammJW5qWFBeDEceFBYKY3J3HZEE5YB1CmLbDCmKgzN",
  "key10": "4zbe5Jq2Kj9HDN7BYBmy6fTrcnFs1MwjPZsA17KnrSn31AoCrpd8GpoVFhhFgXYADyZJLXYqkbW9FaxUSkiiiBGc",
  "key11": "66ebMsRgWVvoLtKNZvATW5gDZ5s8EefMVBWMFbJuwUGKWGTRCkEdEMTM7u7oKoULFNSsLxLhZK2EAu1PM4qtSBPN",
  "key12": "67DLcobtzC92otMMB5uVqDfJ7YygBFwJtxngqncdp4wgX41e7Qe1S29cKULWEu358xrD44fYDSxz56enJJkQxNCs",
  "key13": "2FNQKMx5QaY4cp9aGoohqETtUuqPthvFbz7nSYfXBcyHk9uMiwdhktt4YEmXoTxtK8e4V2JehBhvUmS5ik1SUe5b",
  "key14": "3yvGPemz8nvEpmNKafWAJRqnzy6QJhjYA3efEmZcifKvJBDe5TFzhNxxRDwcXgJqmCYNTvj3moBPQy8akCGUuMHa",
  "key15": "4caJhuDbv38zKbHgwuGMHhWLhPFzoYuH3dY9reFAgyFFGuoj5AsyijjXb8Xmi8pryfLqMmFTT7Rh6mhLzS5VdJgn",
  "key16": "p5NfgzVcSGUb5Ec3LeGkTVpoVxbCbDKSW7DZpWPyqZkycXckUxNvNznKU4dFjgWDjeju7QXEeeb3mHjdYobZrjN",
  "key17": "4fLSzMu9c1dKv2kL9G9YEpwt2UzjhomtBWaztPjUXpWGaB2NJxXUcrU8HxbGBeiQQGV8UBmWSZewXeBRoXDQKRoS",
  "key18": "4qiLRZ1iFw2AeD6fmqhLtPCUpjPFJNYfBbKXqW9oVBKvYZdNtzYTwaKaR3GEMgKABq2gRS1jNvLBjZ2D3rUe29sB",
  "key19": "2FQH6hZKd4Peypk9BwouRfaXncthvd2HKNbKfCFeE1kWGLRxtDuQijGoDMV3tXxxtRMzqTeJkrnrtixHbEqkS86o",
  "key20": "5heipVobagf3hXXdzVMMiCCyt5BoShp8CutF2bDAv414s13wayVycftKCEYAXuyamWEB7oRn7Ewsf57STEXHcMA",
  "key21": "3xYLJbwjbmJ7SWBzttjc9PvqrRWZ8YaEGP1jaeLz8aVDai9AtrQwc4XNMko63N1JpREYsx9d8CUqAY6qTnUpAEc9",
  "key22": "3QdPHPzpS7SCHcCsXDMzPY8YpbdNTR9df4BqAU6sNy5p2Fpu8fqdi4i8yqxiwktrBfWZ76bkGhTGr43d3E43kJJ5",
  "key23": "3WaReZ6b3sUpA3JcrcPvJjLaW3hEr44799SRUsNCmhRbEFucEahLZdvQutzAzVR6ub9cm5NryU8NXnE1VUJ7ZHQh",
  "key24": "65TV43ydwA37vRcDkSjBuUC9BytKfT2ekjRNBEZQFQR1Ako9A52bks35bqPxdcFLtvfLSssmwM5Kebm1Dcz7mEzS",
  "key25": "h9yYhEvvifuzXPjNxstt9mNW4qZYZzqyYkVxuqWtrVm2SJrtFthkwhp8TJLomsxoWNoctxfk3xEvCmWMa5SCd4C",
  "key26": "2cuNHrBGqZykyJ6WGt8mymiwfMNQ7iTq3cjBcU83JFwAVcRc3TZaBWo59Ro5p96du1SPK5b719ANefmXJuihH8Fi",
  "key27": "MjuagLBfvXgQzs4XFKqseur5AEgGuQLDqPwUaiiCUeDXjKosKoz4apiJFcvQX57wCffp8agpq6iTUTHpp5CMvb4"
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
