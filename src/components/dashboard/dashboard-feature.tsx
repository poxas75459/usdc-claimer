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
    "24PyTH9eovqJ1kmtWk3CkacHhMa6B9f4nuYpQEseSh5oATyzuGEi8yXDoPitTExMmiS9eCMLinMqxfwEwcRVuDNF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Z2R24gUfHnwNg8bqEUMM8LHn2Af9E5TAh9xu661W3Qo2YWGhv9GXSMKbEuy62XQAAgHZ14ZcdKrc27e2sYGRSJM",
  "key1": "4VNwWXssJTzKCsfse63xiicsxV6xYuYUXRjczBvy5zLxu8tQ7QHaWAnXKep5LpYdyGkaQQBP5ky2Tkorh9PeJtQ8",
  "key2": "325SYywkyN71MHyzMAWexQbyU4vQ2uZMpPPEhdhWYAc76apPM6D3Y68doZZwF48JNTpY4r3NeftmTwErV9AUVHTx",
  "key3": "38v61NBQxayJbSNsxBXKpZp9A66zMxcqpRoWXkR82wrhpyLEYu1V4KaSjFBRtSyFCw93YUokDKYtLHkPE8vfq3dV",
  "key4": "4G3Xco57mRhhbo6D2JQGffpvECKGYprUwKgEX8aQBHVjwePiiFVe4cxx8JpFHMjuRSUGHXqqasPtWJedvNdVeEq",
  "key5": "3KaHnHmAyL8dByXq1Fmoa7QE68h2R5BqnvY4kfvvthcesVSbTpyFEXMgJS9wL9nByCFqNCi4FSEpBke4fdnZLmZi",
  "key6": "NzWXjDFAiKir77cZJHRcvp1yD4MtHSFpr6RigccWLFiLoHemZty5AVqNhWYXsnMXqy4rY7sThDqcdqa4RLYEPYE",
  "key7": "3GCHYwJ58DH9nAMJBo6F6LYL4rXcHyGR9aQuzTRcSmGYx3kM5miqrJ7kMqfHCJ7adGVPSdxk7VoLEG5evXgztoap",
  "key8": "qAP2nN4VM6JzZBCkeDnikyJYfATKa5vBxSBs9518ivNinUiyHFmNeKRLCoJeNjHZLNnsFbWLeiq2LS2i8RCRy3C",
  "key9": "PtiC3h5uj2XnXoQRUVoBNi1tvt5R82XBbXHnVagErEsvkpP2YLuQ7KYLfm3CkGEFyRvTHyKkfKBLyeLXDc8UN1a",
  "key10": "4GCHsJ7iYNqxZBtiSZNdNQ4eeQztULEx63Ybe8ApvtWS3xRVNsXqMBBX5NkWe3z6SBLitydLBphYqE6AzifmoSYd",
  "key11": "4nASmAZmNG7HttjR6m61enuoViVwfvYNJFNHCvJTsPvpFEKtrYqoDUcWgjfvKDmdrnBS8re1hpt1AUUcNC2KQknG",
  "key12": "5bCa4Sy6YXmJ9iPLY36GFL7TBDVRWiwmayfnBrDFo6e6qDgrB7xzCVorJ2QcGt8Axu6a2RK2RcBgYgx8GAExHLjP",
  "key13": "3gtVxu3d22hRXDmGRX8L5jQRqrAxsiJVm7S4GrS37XqFPBhu6YvUhdL5VAwo1w8FrMpabUUEquYuegYNZWebiPbU",
  "key14": "3pT3dkJBUn4tJWcogvzoYt1Q8QdGFcX7RsJNfYJQh3b4DM3eztpiKWJFTXw4tfra85phbW1rp1eewxDkf3gNFHUR",
  "key15": "3CJqB15gcUdQsATyZVj9ezcZdMhNx2WMCTkbMqGrRC6w4FVcfFaY11WDrpbCS6fk788v9TChvJhmkUznjJTojEaP",
  "key16": "3ZZGteYqxuhkCdd9W8zXhJSMDFt6HpQntaB4nngnnhHpqDMYY9S9M3JRUg2yvPL5RoWb3SocVYooau6wtKSxvx5Q",
  "key17": "2Zvm8ubYaXcyw5emstmFzWKnhbbtrRk7mce97Dc5JuaPKSRmwQt5rqzR3wJQ32hgQqx2cZhXUM5K1Q3vVfeWAhen",
  "key18": "LeXGcHRum45MJo332hCZRmwi2Ch65qbP2fjdaueFTzv5oFKdBwYKh3Yt6FN3oX69kJ63DuF2aXdLwyENQxkD1H8",
  "key19": "2pPsj7MkqY8PevvhCnw9wVAvJXkpMaMdNY1c3fkEz3p1s8Mb6VkQp7LK7UpvnfKw5DpcR1YrFAUDg9FsRAvvmrwY",
  "key20": "ZUqGUSge88msFBZTjQ9NMbGhGSgUk8kxNyMUbgCLTHnvP2Z2BoR5ihNqqG6iWX8hSejJ6bhThyfcfYVh71k8a9D",
  "key21": "4bYznj6GGBUNyuvjSFtscBNogApE4uJYzQoA5riZZCJcU5CwW6FBnqsta8DTD9JzqnaV7vaaAMFUcXxwnTH7cKHv",
  "key22": "f6mgcg4KCxHNosWNixwXdVa7QK4bFiqiL56vxwnfKu6y1LK3Me684Y3Hv2wPTYMRdSqLWMF1VoiGwScEmdLEBEv",
  "key23": "5Qc9K76HXih5sbum9qwAruXZzGXNAW4uo9FUEHjo8ZiH3cfcUew9Cvm7TavuyjY3TNdLCq9xRuDMnS4Q6yUsrfQw",
  "key24": "NHGD7tMJttuZ2CcdJyuh94zBctaxMb8uxEvqgbDsDsc5wQVC8Ep6ZtmpWFtj9pMrNfr69TH6BNrjcQLg1238pvH",
  "key25": "3UaUiHRME9v47WpUVpMNnenEEJ87gofmn2DEjyK6CEG5vxyWzRTQYMW64ZQNSNUJNALyRJDigisLrcxmuvth6xLa",
  "key26": "3kmVu7xYyNEJ6KSnRTo8iW1Mhs5xtaQviaQz2x6oUkEc3vsyZH83fJjDubAF79Gt9dLqJS49rFS1pJ8gezEGd9VB",
  "key27": "2rzxXaawpVHYta5ajSrWUqAiACeCnJ7ajxj7BqXJSBqEcviTbyNqmA221i8uYX2vvuEKYx6iaSKwiiz6LQpxBkaQ",
  "key28": "25NEGFPeD8TcXc921rnb2nJXkXscLj4fJ4deJBD7htzgvHkD9fRK1uvg3QGrpKMagNYZMBHibJoC2x7JBAo4Reyi"
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
