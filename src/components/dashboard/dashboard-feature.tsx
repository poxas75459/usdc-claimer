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
    "28iY8YUXsZxgabGfWpLkMGwRY5B1WpmbAkP4FRd8kMXMhEP1gXT2MvtWQrmeJUxoeuwU5nszCZj8arsktuJkXkYq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2w7bTdVRjB1sy544vCduGNV41xp6btr9YCeNM9uXNXjNtVSUcaTMJs3BLfghVtKTeMXmBngAreXmt2KbuCZ9yidq",
  "key1": "2r6TsGAne2JAsTHJ8hsh2rpVAZM3fYZafinXQBgbTx5gd4mkrCEJyH1tQr26TrL3HGsEkwEUW6AWrh9m1UVpvgq8",
  "key2": "5Yj2NEoEB4CppVRmpKdCpzkCLTWQqWR5c3m5Mo1A9Wj7GTuPwnsSEsXPCqPzEt66vwBFzwSZ9x5E13sgJzVKHgRD",
  "key3": "u7xCK1n4jSyHsxwMNUQLcuHBJ3mynadNgmHDHc5L9uAk5fULjBpX593zqN8bUhKBqfLmW8C3pipAKnWWXwkidnw",
  "key4": "qaiWWRDJHkGagqkzTHMRigmEAhC14xrJFjETJRmS285ZdMnBwoceZWpXdAmi6BHEN7d8P7fv7HXHS6fpmmm8w89",
  "key5": "C7LHbCkrPrz7RrF696L1GQ9987Xgy7xfMZTQFSsp7Gh7dVz3Dhpehjmd45CqPvSJeDxvZeueWZzWdcrYEXzU5ta",
  "key6": "fRGrWHzxTvVcRZyQc9w7tVCauTsZa2Kov1ijbJtLvbGS3HYvqwYtB6Udy6bkopFxHKdRnFfAdpmGZq6ArxrXUz6",
  "key7": "4Yq6KiCnfaxV2JmUFJudeKqi5JsK3DAvuh1xTJkEWowTHGSHEsiAHvtxB7XgQb3JHBzS2AeV7jUDoShaeNPTzExB",
  "key8": "4mPraZXF4Ct8gNrrGdUqi1xzxm2HcHL17RQvdB8eqakyTLnEj3FDdYnMCD94wq2bAaYtqbfoaciFhtMhULTNpseK",
  "key9": "5842o6ULkEBDngcLKcJZ3gZ3j4Uh5BuGkeF5CUs9tieHQ6VCTQtdUvMcSPiGXMRcQvitaiKCWtfS3Seq8NbWJdJk",
  "key10": "A58xfaK4w4mXUrXqrTK2SVQfPBTHWjXCn5N47HauLKyL55gDbJmo7WXwa7pSsiWNnSKVWHo5wcVpAhkSaqYmRPY",
  "key11": "5wffVzr9WE2ywf9Dg99kADhjKMXpufRkXDmxrhrKJqL4SR2ZmcKTHqTSXHqBrXzHuSjRApy3FYnKH7TYAEnQYjXv",
  "key12": "3yZCYVDKvEfQGkX7Y3Lf3RxCkTFUJFyUZUrHcg8SVDazGVUQhKz3UqPz7NWa47Gqb2tNm1qquQKTJMJ6z2w7jxVU",
  "key13": "HJDo8yLaDfJxUqErkJKAGYBm4X9deAyWLvcH1pnb96UQY3LzaLiqLCcVJ98caHGL8TSwEASzTiZciBXeiJdGv81",
  "key14": "2dSaLFrzQjsSUehcCDS8oQsEjP7D2N76cKPvWfVNwqDiBKp57AdPB52YpsqPBmAqvt8eSBRspDp2MFYy2f4Wbh4A",
  "key15": "9qCmJMusFCw8iF9ZZeY4wAiZcAcxsPayRREKqCosYfhUWEqk9X8RtYFeYVoGzZT2nk9oTjVZvTFeiQZVFcN1bnW",
  "key16": "4aCR9DYndZMrjD44bswub6Dw6SfrFAsbYn9ZRDgiWwmCgE1DupWhUd2BF9efLtoQWabKMJpnp9KRzHTCWPMmiJ3N",
  "key17": "2w7Ef15HqgrPYkU3h5q2VygtXXJ4fjK19BkBZ8aJqdpvoSheT3NbxwdS7WngCmPpH8ph86fCV6m5EJbt3Q4yC4nR",
  "key18": "3xjiMQZzEBM4Gm4JQCXAnSv1DCMNZg2B7U3Q83Dw48ha4ntjHi76293ULig2jcTyERuDY9sHdHt37FxUi4tqw58F",
  "key19": "Be1xvqxVFfDDG1LKoa4B8ztnmbThrsHcPzhfTRePFLsHTHvZMFhu8NL3it5wEAwpo7qwuh45XLrxj5kt6cbtjD8",
  "key20": "3uLaNH5EQyxrzuScYP2ZQBjEtpgoQ4dXedG9SiXQJrmxTzEJtq8wUvsVkTUGQUTE1u54y24Ed2CHX39iVdt5jg5",
  "key21": "2RCRZpPTZebC61oYM7c3D9nKtAdZ81rghWThzV1ecWvE5Wt8A7p9dScjF6dKM1xQZRKssA9M29nnnh93QYyGk9Ku",
  "key22": "2BbZXmSUTfMv1iceaWN5rynTEDZU39UDbXAT8wfQzgU8NVakYQ2rHQ7ZYKCUWPY1M4BdbgtjLPPKZahEK7a89MYN",
  "key23": "2tZefSz7Eo8WU2Vgoz6UQmpeDoMTxgSxua6zuLBZGXKGgi6Kg4AfpKQZcLWWFLTLVheogehdQzhQZiBHMMMnCTMx",
  "key24": "4Nszhd5t3d7LsgSGmApV9ca9VPQ9NUXVC9vEQiJuSeRVEqj9K2Vzo4yGCqS6y6CXMqGGFiReCbjJAr9nWo7tkX86",
  "key25": "2ojdYiampMfYX7jCz1LUsepFLQtoCQDf9jKGWw6WsW7XsFEfk5uxsVf5z7kx4X35HpMN2QKHDWDNYvc49rPuxgKH",
  "key26": "EkDhCEfppYfM4W9BkvJsf2P54rFqqhTubwVtgcMh9yKtErfyqhC2T5dYSjMdHWU2Ay9SPfysXAtfULnUmXK84ij",
  "key27": "42haRXyywFfCeLnxg8FZNghGqKdcxWps1BxQWzbNDpGiBKbCAUBfj5Ew1bSUzevt7SQE7UE7zTGMXCcikcSJLyXC",
  "key28": "2UsTnZ3CEhfr2VaFmREyHP3oyfWDCWTZYxSCank4q4TstVsTdwiHpsJgLUgnBbeWX97kKz2kSm3BWE9ZeijD2Cvz",
  "key29": "5E87VqqPCBX6SJKFBQG3pYgotr2E2E2hWjZfZ9NQ1ru3waHVe9EYtnrqV7HUTWdLVLXB74wjQrgwjvxDZrhppg8D",
  "key30": "4J6eFDeFbWGeBbVUwxZkPKjdAKWh2ZU1JY3DmM5oevKaoXVrkY4ECMvwepR3v2ph9KZehGpKRJdpvH3WsLpUQSmo",
  "key31": "dCa3mK2MqjJqMCnU5K8MZ9AFxXXYxRdAmwePXZ1ZrP9aj7yqHxcrfjQ4EtDjNQVdU1jWjUMR3stzHk4ZxfMqJc3",
  "key32": "4fnGnj6kjm9sJHvgJG1FG31CUeNtsShX2Mb2YTHzLMetG8KVowzA5uXHcdLrcnf3ZAGi8V5KS3yF5jKCoxdW5KU3"
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
