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
    "4Qm15UuwoGkeQvYRqwmHmp76k9drQwyRY9bPV5s8ip3X87KQujjcmytBczvUeGxDHJSqYWZx6RXS7yuc4kFS6Aks"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hUn1H1J6vV2vYSb1qWRFTnF3nh2VkHeKUsa8jXoffGDV3Q9jj1zPVQWaP9Hm1wwHMwSukU2tptw7nBiAyacPrHD",
  "key1": "34GH3H8C2Nypgwpay5cRocMosBiaYYADeWw1p9qCr1iJJSmWHks5JdwW4wcvBUEYKcqLDwNn1R5f8M8MknfdzVP1",
  "key2": "2MgAv1e3LgR9taSTWMSXjvSxK93dVfx1ZUG1N73mW23SDP8sPDEMsThVjPvrA8BBno3phUq863syNNv7SNrAPxM3",
  "key3": "3mbuKm7Tnu3mX8UX2Et3ics3GByQREgDgjVpnsNzn7JP62osrqvyVRrpReqYbQ7sSQwqGbtcLbhKNRvGqgCHYJia",
  "key4": "3bp4PjeWJrLAWMeEJStbVALuUX98wGwmZDSTHK4HDitEe54QVALguvaWv4rhtc5xHkbeXA46x6ZMMtFiZWeTHjei",
  "key5": "45rF5wPNUTvSU1Z2aSdTSqufMhvSrwjVNkQbHbkMg6xBqnb4Dyf4giPgAihWM4JzRXoauDpJP7sdfDLbd1rCXgXm",
  "key6": "5DjR91rbHesXLTMLAtqMcE5RyiqgHC9YgHqhSPqaezmMEXqEzXSGkQZ85D7Cujvko3LjTPzcbyk5mk3MmFZeczsu",
  "key7": "3DfC8ceByo4aBZPSRURZupKFjrcUzR7Emu8KcNezvfG3omhUQ8CBc6VE6muvfPEyc1hrfi4DVXsXBBT3EDmw7nF1",
  "key8": "KcC7g226qGNpS1LkbodKUVSLQnLjMWhMxDJYgP3LujBkAe1426ZqHdLp3R4QDsBMKveav4hvx9QJpSTivbdDZRf",
  "key9": "R9gMMaRUX82UMQsaR3PnqFMkex1k21xZduZB6QmgDLNNoyymsx6SV2nuYV95tjWwVKkzBVJMf2ZWgJC6fKSWaiG",
  "key10": "21SVbvyYFLNr1BHATLGRbsigBfGXGu3wygU8z7LbmswCzHnh16Ey7BfjLj9fA2RL8JZg68WLbtuAZzzj5U97JoWJ",
  "key11": "4yfeBshnfVvf6iJzNLXuUqo5iZdRQbHMuQRw7r6ue2GSW5do9e8fANK76w5eb59Wv6vMtwBQtbDc6cjgVESAsH5K",
  "key12": "3WsG7z5y2i5ZZfBmWixfJMuszeNgCi8pdq2R5cBsR2mJcDhvwo5JbQToqqLNdeSXzRT9XBNxTD1k5EPnk5mCERg3",
  "key13": "4vctgax32djL7jig1i1KVTmPANh8MxbxFRVSmTaiuWbdYWd64U66Tg8uHKcjHSNNdWWbyBqM7XqrC3ZcyMsA8ZKP",
  "key14": "4KFFMyVTXYijDmanpsMTh3vq2WDHPYksDgex9Erjc4XMjscJzqpMjaaCbj7e3RCHiFFXfPMAc3d5qFenAxsWFyjn",
  "key15": "yEpkC9PX9PisHQY5LMyHxzG63Sp2cpWhnSHYcsrkApRXNnFPjbx4f2YQLcSosxafXFXkL5oTaiJPCmRufSk7g4j",
  "key16": "49WtchnUcsDDB4rhMjq5X5bwCqk9rLA3YKdoPRhFPnKovcU8f7ed429Kw7BcGqnpGUjiPthgBzFUipaZUxuKqV4A",
  "key17": "3gEav36DsNNMCyKD6wjC9cWEdL344gYYbdwUdx9e6v9J7NMDCTqkmgNqMRxgybAJbjSkgiBvtHjqmHYUb2nFYxek",
  "key18": "mBpXXgy4wda8i4ZXa7gUDnG9DKN9JKkovYWVKZNseuccFmWJPRm216Y7dVM87evTdatZstMW5GinmNb4yaKUvpx",
  "key19": "93XKN1tXYighcEALvEmgFZS2nK1YXtDCVWfbcSwcGHfW4usH4dNoXVbYdRQJS9ozkR9hjR3Tc27wPXYNSU6EABU",
  "key20": "J1u3PajHGjo93pgG7MWm2YWLLDyy9KF4xLC1fkNgiLq29cXmYSPUJ4412XFVwSFyb2xf1nMZ7vRQUcj1W6V1WHQ",
  "key21": "5dJrrvvnYAthQuUtpdY4rXuzdihj1LuUxbiX4w6a2tXUDQAivcSxp7f4K8mCwtrBJk115jpSZ9YBzbwka1zuZYTF",
  "key22": "4yfQPq4E3U5DZs6eD8Le1jhRY5pbBzgdz8Du1r5QyrxZSFoJb2yniup12ocumkmfJZdP8HsvZP4UZf3ZK1zoX9Na",
  "key23": "2h66XTSCyvW2CwGa2ARrNQpwsn1VU4FJ8YPBgkGJbichaFQDSTGh41kr9Qsa5HUhUo4XSgjsywoHScQ44xtH1BTz",
  "key24": "3uMDjfqbDLr7fZ7wbwrwQCCJwPdPDWaDvfcxtkWCgBLu2U2XC3FAzWkeS7Wd1iCYovDfJ9HTRSDoncB9iVCTrjEs",
  "key25": "3mp9YE2P4GwxVY8M7j7T5QfFdasEs2NpgAJGgYwm4aVmtehDiR7DeeLeyEKef7xBvCXBTrSVmQXhzS3AJzUUja5U"
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
