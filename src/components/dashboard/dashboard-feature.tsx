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
    "3v1wnkLVPrBu3Pq6HVZSMGNasyjYu8jjTJipWDSSHiFjDSnqsmdnN7Ww1osS6DNz6SLFA1iT2hrVMaenyce34HGu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EUTs3g7sUpFzN4YbGNq24bcr47R9ZT1yiw9X23APFARtcB17h5HezcaeMEkvzrCpDbsbQk8Vcf6Kw5ByieQQruW",
  "key1": "mP7zR3GKyDEkZggSVaeXGitbJCtgkpRBzh13viszCeiz8HqdKZVSddhT7AML3F9uQn54v27uCKd5ZVejMh4dBze",
  "key2": "33hkvEzeCUswMZcr8dhisHFzHaQiYiDKDPP3ix7rv2FL1HRumNngSwdXVvDXVbYCtGGWE5bcdEHoqrgx22Qjn3ES",
  "key3": "4LNfmgSqMvXNv3uwAEhD3pTTw9bkzhCui9KtV72YCqcPmEe4f7YoaCSFwocJx5yVrTQ2i1xRoy3Gw6t8v9jaM2aG",
  "key4": "2iY84m6qeSF3qdESnWStqDBJVeJU5ELEtCX91RNJnfz61szyZeKLn5wYyhKrv5yHWHddxeEdkX3wLhox6W1zNnFp",
  "key5": "5cMJ3HhUFGiuNsksNiZ6GQBpRztQe2tT56R7bXVgB47Qb98bXe48bPBT9xbpzMwMwmqU9MXc15rKV13CtDtqFyM",
  "key6": "eKKQDjy8FiwsPaDPCwDHFYaWeNJncky7trLtkKYgfULpCNJfiULGxCUsNie5DCdhCJ8kxexRTpoopXHLSh7cemw",
  "key7": "63LFcp2wVSztPNiPXbT85gwmPYpCnQonRM3HNycNyZV4cbR1i1dy3urZuvNmmdzfC3tB7eEcb8XRDqUiY6q8uZgd",
  "key8": "2CduLHF2PCa3oMafZtXdGaLuknQpwwryo8z6rZtoy4fwmuchvFx9XLpJP2HzbnjtkAPE2bnYmRMSPTczfNwhGHuA",
  "key9": "3QDP75Ny7NUkAA4HccZMk4LzFtwEYEQUZrmTUhSPejUphZT5gVjCaocwToUujvZcpRMENJwhqjcBuEeHXu61BRRq",
  "key10": "47t4TWGju1f8vPRThxkg8C7mrE3CRvEv4jRv85mL88iqWcpT7jnb1QwLuukRRvTJ7ei19zVQyaN4SSxp4PdmrAFS",
  "key11": "228gg6ANqTPFeDLYZUiAye4jvAqPcje5nQhbhuMuN41gjnn9uNtmmdmxmV7PLG7vcJtWYckxz8PFc67JU7RzMGtL",
  "key12": "3NbAwQVhkudoQEaoq9f4UaBbFsfuwPoU5KMZxsTkgrBssK5myUzs2E5azmNKjUHor8JxNGMoKmFNgEv5j4UcXE18",
  "key13": "3yv3svbT4HsnZix6h1bkHo7VzMgNTZrr2CkCvApQc9Putg27HoyfAvtKi3zDPCZG8NGmvSFyA7FzGiGGYPPBSGUf",
  "key14": "5JybRqndim7Wzr5sj5q5TTpbXfrgaVC7vHk9k1XM3wfBVQbiJ799vgYhc1oNeq5zGR3AsfEySG4AtZYCZaErWPHk",
  "key15": "APWvvXNNb7vk7mBAiQ33AHMoGqb7CpfS5rCN8StX3Sgy3g2sUSfVJigK4guMDscAFutEZaNKZhcBUnsSMM7acQt",
  "key16": "64kVUDgcqsQa71wG87fW5CtLKzuWgMZsJXmzozF3a3cuAmFQKopuFoiuokEzevYgjfUPXxGPa9xD8MKWy3MJFa5c",
  "key17": "W4R7r6kq7RRD2J6zhCZA9DczUhvfrP1yVUqDP1dfygXZVUyTgp1evntc7yxiwm4gU6AZBKZfB8U9earDABKiApu",
  "key18": "46S3ueWqBG59b3jAWAetvfMcXhVPCRsDTzMsfadsEz1VboLTVVk5WijERQ6UXCE2Hk9hk6oPZ9mYBTzq1KJqheF9",
  "key19": "2bfJpBVcqTMNATiZDV8B3tipMTZR5xd6sbrJnTmGNtWobJnkmUFLBCS3MtbXqJaTZap3U2PM2vvAAjtcdr7gA7jV",
  "key20": "z8KE8PokUT8vvsbGzGRAbRWSVTk3F8WW7ZKyMgR57qE3pTRZf8zmpXVNaDQyUf83fRznQNRy2jCmmGodSQ32Nzg",
  "key21": "2Xs11Hn6LtaYn1moUHKkWN66Jod5uFADAi89kaHBeNNPiS3FcBEmrDmwzdCN7jmQVm1NYTdbyb3seYW1mGfXK9RV",
  "key22": "2BpYij85hEdX2WwCPZUgXvhRXj3Te6s6HL7UqwPt9hHNM4t3ydnYwYocWFF8fiqgd154yjaNC1yetN9fS3HG46Cv",
  "key23": "5r2othavkMH6maK7YM99ULuJq9MVpC2SWynDn44J8vnM2gdFb88SvrmZmuFce9BX6WiqzDcRAgaymwe9Q7Sa1uSb",
  "key24": "4agZt8MRy8AMTeLEFLY3HYNW9j5co9qXPZXRLj9NSxBiuspy41RHMsfwMoiG9Wc9h5QLPECMVbCQHGMqFHyirCyB",
  "key25": "2JU1K4bmnwTBz6Z6eUCGko5prANhyeWb2sAcsoaHsjScmB96GuXzRj4xSzhUZimZ2NWpZUwWhvhsYLdFUyxXE867",
  "key26": "LFxQvQBRbggVsLS9GND7EVn9XWYMJnBmQteTe8subJ7EGQqdfXtDFE57e3bLLUuBCgEyeujrQM8auJqpaiw63qf",
  "key27": "2cjUGpxB1A835sKXFAHxVS61bzzGFmKF88TdWCrSR3QFRTkaks37D8pX9HNwAkaua5wjTkJB86gNWjGNyVLnwXzy",
  "key28": "4Bb9GLnQ2KfrxW7dUtEmcvUkVpDMzu45YiqH3rX6Jvxc25zQh9LDX1AbH83U8LLD6MPT42dBcvdLu3wMnG18WCN7",
  "key29": "4ewQmgJKgEr4jUyxz6o63fKfMF8rMgYmFyfKpiEh3ijoFr8P442Gv9tesFNy8MizqVWZG6X5ZGcVJwXhpkZfTt3M",
  "key30": "2efy26afgfynt8FKTFHYRNR5m48aZUG7vE67tZck5vL5UUFjxRMZYezR2GV7PsRkdXxrhgR6ygcJPWHynZJ1hxX7",
  "key31": "2vndWmcpGbPcU2cEQVS24Aj2ByJoi5JR7AkwZBjzWbBwz2uQde3uXVen1txKPZJGbjgkAbpqAx3r3Xci3Zcpnkor",
  "key32": "3tpXRUEHtgZhwp5hCRcx5Z9cGLtmkuLAgRdfJJYV3uG2DXyvq9xpfC9gNbjhT8fexQpFq12dyTASPpRAyCqJHLpQ",
  "key33": "4tNe46xQGK1jhf4RRyMMzmtc8k9sBX726wTPTMzKUKsgSgtGKWn3ciaBTZ5a2Dcm4kMBokshT5bBdJwE8SyBY3hH",
  "key34": "33zMZiL4RmqedBhoMLqxSQnZnsyuBStLNSYWXGQZY8V9dxE157DvEnUQbv8P46YyEpJaufiJAETKPdi87ryvhJPh",
  "key35": "YQYpHA6Wi3EAHi7b46UPESqgncEsAH9d6YX19fhCXTgn7ShWmoW1ioXfyL31ZF23QwHYKH2gD6xxEZ6Q9CNUFWr"
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
