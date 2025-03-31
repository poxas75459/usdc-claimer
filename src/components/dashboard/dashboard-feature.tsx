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
    "BFzkoiMRPXAS4P7gtCBc8Dj6JYsSr6VVRvSwLrpQi1WvJqmUwEpa1Ed36qYEFJmCkjVVbD9LYE19iTxzQ7Md5dY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TVizjG9d2Rv8SRawvHat5z5BDazuU99fcRwdVV4sfdied7VeeQTj1SUUKHH49gUeteb5qQMfyrxtj3Gw8JzAVRk",
  "key1": "3kjBLFTFGD9YcncY34AERAtYjUqsqWLLz8YtnhssQZKsreDhEAvw5ENXHHkN8XgshT8E4F6SGdeGzV8iDS8DDxN6",
  "key2": "5iWT5kX1nmx4WGNwLARDUmqu5RaMeqjxCtthrRVfUWxApZNUCKPWkCNJBMrdU27AtRbtkyp1Ym8Kn8qoFZX12Usw",
  "key3": "66X2TY5QnuBGxD4fwsu2EnSP1RdoavY7yjT4LHi1vFsX4dx2pa3co3cRrWwsEsv9XviCXGvUGRPTco3sV1N6sXww",
  "key4": "23RffyNUSqE3qdCgBkRuehr9dGWxrGVLwLoZtda9BP7SJBNRnRuHPGQo39NeeAi24UTYhQNokRo9CNN5WcENYcgw",
  "key5": "5Maf8GkJUc5QNSawn72tZ7wdeeLo4crFfUa6rT4VNTFJ7DQgNjs7iiVzibnf4ReQw183XTpzcFwivTBpUDXuGKkN",
  "key6": "5RzztiYTgeJ33fK4bpvpgYed1kadRkimdiS6XeJaYeUEExzgomZ4JwVftjAzeFHvq9dD8c7yke1opXnu8zmM1wXC",
  "key7": "21mcTCeNPTLVV72GzhmaZxFFqkiJ3t2Cwrgk4Me9s66mBejZoeix1Qu2PRn3sWkmiezx9mUW2kiHw4B4jAPuu5rP",
  "key8": "4FqfJ2dCgocTFh1Uoenu8K7V7yeQ7Z8fVoFg9xm4WaeXVRyUSFYurDEiARCxX4thAfotRhGVjSJavSzV9Mhx4Lsu",
  "key9": "54tpkJZwJJ5phCJVEnVNmDZuYb8BGHyECum6RHwdVvMJjeNnmwkKgysfxVRJvyL23wv1sa9xGeujBUwecw3AY1a4",
  "key10": "3yzNFApuN8poQvFpHmYTbeNNCjNjb6cK98LBqBqMA87GuE4tJ9MinmZ3fpytA1E18FhbGCgR7bmF6GKEGdgcfMnp",
  "key11": "2N8kALHjNEsjiPCrWnmTCpqjEPcW3oW899QKSbSGvmNum8mGHQZhGBChsDaTYhcc8NEoDNHsBJ3iVw2aGMsrPVTn",
  "key12": "3cHTDY1gw2huYCjMvnRxjyotC8mgNYvYwnYRP4kFkEQzamfKdouvrrBhkLxbyxWZgH66n5iowMzNWxG4Tuk8GvW6",
  "key13": "4RLFk9BcqJy2Lthec1TcyUs5m5NxxspWJ5c6LbRzR13cFK5LwbrJzWYsYvLU7D1xkgiYZFjYtrwfHQkzTaoNaNBo",
  "key14": "5X5avJHQwTsQS3iTro1Y4cZgHLxRKps7NsS1GsFxyvLS5ppPT4AUNRz8gK6JD47irteNYuvBWr9UuhTLEeaXjfRB",
  "key15": "3aEAnxXAM38PFsH6sQ1Dc46GApPXdEqVhF9NCZAjmEXTbwTuTSdRWpxgGBmGb1bbc5t1Rp5jrBrsRHrxkQsqGdWT",
  "key16": "4YjboRA3v523ikz9As64tosZGPWbN6JmUy8V2DK4jsuyHLHHVUZ8DVUFQGxMLcstEzVSsS66SwPM4PbY2P4qV6rr",
  "key17": "4Dh5UwNXzxRjS5Rw1u6tW2udz5zLwXVHeqpQYfWTcRwNFRPXEq6yXLjjtShpBFXJEbWk3WgnHmEqoLYtWS5FSgdz",
  "key18": "F94i2PtDR1ZrP6b6X6Vb4TwRBUySLo4ASZqQQ13Rpw4yEyuDcYFK72LB297pKm4SEfA6BQoj8z1YdTY6Cz8UmaM",
  "key19": "3wQFUyUi2ZFdThX75pWhXXih3SHbmwqW78R7poxHfNtb38rt3Cs9Fz3WfV2WSEYCszzFknXo8LFeukc26X2PugWj",
  "key20": "48L4Z3hFPyckUfHE1ZrPf9x1HXSnmEks3X9GNu7JJ6EP2FhREH7FnmYomTmZCy2ZDAUHn9CsBKgk4zPgKVdsyPLB",
  "key21": "2r1vqNyFjdsQeJjr1xcBLy31KrrawnNf4uot9xrdpnrtVXz1RPoTJ95FpCiXdzwJpbvQDnBZczYb2PjpeR9m4Y8p",
  "key22": "247RnmxMGLWwfxRRQKm7V7Ku2VmhQqWkra6VRvD29GEj9RU2gBcrzYBiviH4Veheccx7ah4Y4y1A8DZJQDN3sWip",
  "key23": "4LCUy7CbhgT521rqjUsdVxitBQYuf2GGQtU4jkhzFAgtvqdahrWASK2Xi4YV499HmTVprNULjmeFN9rUpPAFbp2p",
  "key24": "5Zy4PNRSosgWTNVbmXYUNVoEGL2zzdzRkRub75dMMg3wgFttGsHJ5Z7ryWouiTviwBJcubS1g6atiQmoBYFYY262",
  "key25": "YYfhrwRYiXjUv57HiMe3bViCeQNYKMtxmRWHk7t8NiUKjXRinuseeUaWR1DrsedCqy54umWfAzhihixfcQvFezb",
  "key26": "4dBHWrEUziXdHj75BRXf48v536BtRRnNbuPgTR3Ej4TmY73GSLwmBSexCJKwXGXDd8g4rEaoCw6p5srnE5hMeERW",
  "key27": "3Wi8KBhS8MKTLXb2qWZ8LJnuz8jbefVogD3mamxRpS4i1m3113STXSJGXA4SHhTEfUaFtG9fhHGW2qRKXo6xYufM",
  "key28": "XVrs7an2WammVhBrVwXgPGzPN6bzMHcZRM49E52FERPmNkQB8U875qZxb7Lr4UgCWF2yLrbbn7eJt3WRd5ysSQ9",
  "key29": "4MfqEchE9gGN74vv8wj8Zrhp26DBVzz6T8DHA4by3iGzUhnJuBejSpPmFyAXoJsoUXvspJoNMRm99UWA8GQbeLmJ"
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
