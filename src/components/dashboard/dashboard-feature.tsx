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
    "4u7RVbL2tkCDdVgeHzAh1EYsUMS17XnfFnSESJmR7c9Rmt3fpcPvxUNJJQkkWnRzHEsj9rHx4Rc1MeAkorNoPPqL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49CRpXTyQXa9Y73xs54t7iYyfmsVxEE4EPXUAF7tBcfjoQHTDCRn5srnWikb1RMGA5LqnXAe6qQYxyuaBDxRRLxt",
  "key1": "3vvQEoRAKL79gM2t2NGk3TV6nNojNfHEdaQkKK8GHyLhEQuGV31DrWYC1QEfdPX3tQXsrb4s9z19Ub6esCvgVKor",
  "key2": "353ZQZ3GJ8zv25eE7daWFHvtgQGox9xHRsJt8T9ZdNmuLGAkqaD5TuTgZBAU1zTXjv3xgbdfa7Y4BQtfwZRTPucb",
  "key3": "46WkdQmxTi49i4e3qrmkhaVaSrrCSAZWX4MHka42xWE5T9SJsazQX2g2Qd9inpxvod7tHJj7H1e8wJx846CkRcfb",
  "key4": "2WbCZTrH72Z1QXU5kw1SUHMyk61APakBgQzMUpX9u7HGfxqEouWix7gr1iWYQoJqabWj8Vpw16YpE769837sau9b",
  "key5": "5k4cYTH6bLZuYWJW4w5UiaVUouafcrTD9BsQYKWmjqWbKiz4XnuNcddu5sqQw35RcF8QuoYYTrQP5DbZRAHSUzGa",
  "key6": "3wvq6Ur1TikxWq7Uuy4jEG7bh1c1sTkzBYNW2pstQcbZMgTgK2N6T1UmkhkoqyNMXPgUBcG5dCW2NAkVEYGUdMD8",
  "key7": "4Bg7GiJX9oazUprv9KHhSct5xvvWajXcUSPsXG33DPyLNqjdZsFWHcRZDipLjaywLZ8xmg896r1cGpN2zAZQU3z5",
  "key8": "54VDct3qrhjtY5D9ts92bg3MSJfBqNAwhQEpuYGaAaK5ko4VnWyxJCE4vvec3CUCdifoPPUS8fT8kAfWCiErVsuF",
  "key9": "3bHZBQMxj4cvjbbYxMm1xNTvHfT8H21cCJtcpPhth6EC68tDeSydeEniCTkmcuPCUfdWG3yny5ih3321tVzVhY3B",
  "key10": "2sq7RiXLabdS7pzWbqR3gae9jgkmhtSoeuwM6TXz9vQAy99GcUd3FuBmjYhcP7tVn1kYbmtfG4BkroMbedqxgqm1",
  "key11": "3yxNGEtkYbRqCA2K8RRyrdxntHPZHtGcSGzdHG8RkDUpd5ZBjqKuCMyonLcnksSqZCMndkoZMg77Q98XcnTNf9DP",
  "key12": "3Rc6o5Ans29nKJFF1ZUZucsyDzPVH16Z2kqdqx6xmmKpV9tEj8cnMCbWaJYHkhddTfrcCs4igktuxe9yv34rLZZx",
  "key13": "8tBVEw3eyL48T4EVdWxMwUbBV4rvE9K58Aoq7Lzx6h3VNkee7NdLL9Y5MKpPn2L2J3pDkd5BStBZEkZBdv4En6K",
  "key14": "2gwCoBAqCt5rgQ8sLtbHp3gWfqjjqBB6bP4WYAiSKpJpLocXGXKrs4SfxQgrmHgwbwWBa1NFvJaeVs1osEnHiEPQ",
  "key15": "5Q12Amnc3MfXQYcgrz4d4TyDhYUJPHz3vRCxLq24EQJQ2dyG4FDnykgUD7rnGYiAD3bemWPHXYstvm5yQqsmtmHD",
  "key16": "2jpFoMubQWF4rs8QwNzxRAj9p6KQuC5Q6H3VL2bUfghQ38JQTByFxEk8sMLGvkxC7wnKv9wDw7hG6vCEUQWXPUPw",
  "key17": "4bacjd2most3DeLBLBqJjUUNDiTEkNAtmUDVLLsGWGzZptUaVFmVYNUdyR8k2xRPgK22zZ8hsFs5hfwTsUmznVJv",
  "key18": "5tsgjK4q4KJhmeodfoHWzwi9v2LunkdMHCfuC54SCsjzNCuxj1fh9qQzcbMWARM1UUe6Aid67QNAHoHFsHqau5PY",
  "key19": "gLeQrnDSyFtoHfpnamG3noqn8WmAEcFNm5ZBxN6bv7gpKXuSC56FYwMPgoRhKwr1hf7xaDhnpSAAKyvHCoRKCfu",
  "key20": "2JGTiaoPec1EbvrsHQXjyyooVAYfhG3jczPVdFAcCsbF5HTyk3thD7BB8fLeGf314bysfRqpNcjeifuWpWEjnZ6C",
  "key21": "4XmZM44oUnevkgan2YEy4g8x12vDNtkzVmPHrdR3UKA1uZS3J35o6pzJWcmPiPni5hWF8XeGNjQsJt4X2JFTXKN3",
  "key22": "5PgBb6be179VNpgoiWRbUuFgqPfWsvDsMhKgadsLuTus5dm25i47oPksEu7kRWY3gqXJwEnjDrCWCLrAWhMwTan2",
  "key23": "5eshpWJGwup3RmoAnzdfueE3t7rcmG1dmge4MCR5oe1PBtffaHdv57wWZkS2gEdETq2rL5F7ZMB9dcm1cWALmYUG",
  "key24": "5pV5DJq9xADFeXvaSkkip4yctpudp32Mya1CXqm9cv6htDBx7tDWqTS1WiFrVCEmecbFutF7vAMAga44BXoHhQkN",
  "key25": "3B7Y1cFL4PEhK1emCFoQ3QEXMV2jzkRrj437LSrkCAZXdz382nWKLJkg1fArj34eXXDKj7aVy6W5VBZGjWMwAQZB",
  "key26": "9FxQMikpbnbop8eHzTokQh2KKXkVYQCbWsUY3PHYWWHXRcHSY1mencgZbRSNyfhXtu4hV83BwQRKmMauW5oeUen",
  "key27": "imr9bjrLG6ULSTWh2tDKrc1E99tbpKHeRW7sxyc5Arf9eD9w69NXozujg44KMLHLeS7sYGnCQiWM8QE4qRD5sgA"
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
