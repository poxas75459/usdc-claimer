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
    "2AibhtMuiE5AGxC7PSRSbmt4GjbT7uaBEAKYfVsedzJDLj14Js9m9uaDUMALaRyzRKScTu3NYM9M6AoB7dTNVcwW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LWHTEHZwfGFC3EAVZ5pLAhV16f4p5yXJU18U8TMCuH78sbJbHEsg6KytD1zEmhPWbqmjt8md8Bnx2JH3tK3zSyE",
  "key1": "4FRSSXABvw5fR6jqcZShox8AN3rhDrnSncr4FxgqQJszUmACLmdEtr1vgwp9BgLXQrT6Q5BrrLNQDFtJzXJ8rG3e",
  "key2": "2rmsRk3veUJ7x51Z67VQaKP6cgVD3m2Dhne96VFojqqXnBEpMEmmEnKERaYVpvw6cN9xWRdU9LGPZEn4yXhs69Mk",
  "key3": "4ik838ZYx3cd7bZNX8BQvf3T3ja4Aqvc3ZBsxDF5w7noffC6yGh45QmMaqLJQgkqDcAkGoERvpsYsNXvdRrc7avB",
  "key4": "51YLa8KNuP4WfsLvdgND3W6NTsEwn39GrdXsqahW4MovqHJaw9CLBaTZfXcNCbTjUUqsohyG9S7WZfUBRjtDpSzL",
  "key5": "VGSnk5Zw6ibiRBfErovhZhvBLz1Ljzq2f1jEwfBdxKh4po8CN7wg7n8qxxAqbdNNqE6XdgkfuFvzY2ZviTc7tW3",
  "key6": "5g5F4tfEtx2Rx1oNFCKGHEzp3ZtQAWEFVg4fiRkzxxhgJemiswvv6amJZJqEt5kEWgWu11wg7YyueJa8ToL6EgA9",
  "key7": "4YQZFnevpnGcbbqVHTSwNqhXifRqQUqTJZKKARbAtw7FoDsitC9ipg3bxG5NaopdUPzs1qYo3V398gCHh67Y322X",
  "key8": "5cuZS9yJR1Tii1UXmCDCiRf9WWTK7bYHkhrtdQFECcHNyFfRNYoR2waxNUwCnUvRTMjGwoRpnSsuaHdDufwm4GgC",
  "key9": "32RhELJmrzKdfCMgCQ9Cg9xYdR6WC55LTpXTHf4aiwcqccUjrF1HoaRtD7uCYFZsNny9yadXKFVvxAktdsjfUKE7",
  "key10": "3ghDBPitXcd4UF8bab5QePcU1vXJpWbwaYg9VTZPgLDDii3QWiafGinkmBUkv848FE6QLqYUzhuahaYpYt1VgoaZ",
  "key11": "3HHo6Q1nHqbaNiFw3b9o2SvupWeNRvT8E3bPFkkwLYkZt6HcFYeDTRmkC5NM32LDuQP794xi6QVuDpAgtzUMct9o",
  "key12": "498PPCL7pHxQnU7T75K9tuTrEcdwsXyqAkv67bTQhub8QizhrJyGUad4YXQ2UCQwcuPyU8qzzzqejtXNtC6vfL3u",
  "key13": "4AD1LbkZ6w65wB97VudWC9xsVkk4bKhdBg5xnrigyAafs7949NA3N3JHznjT5aARPxXj2znQBDQv4a73MQLiBPqx",
  "key14": "2AZie3gQiwxceJf561ggwvmthRCMa596FZXsSfVkv4sGdxGBVHiaAcfSbRYwu6HjER3yWU6Yqr2BhLQowiLd3CPE",
  "key15": "4BfpVYybk2V5Acuta9MqhAckTTaUTYz1utCEvBfUCFESf9jMLnNoGVAiDYMAHAKZ28bf579rSGiDYzZaHWRadbiX",
  "key16": "4FT8rfezaMpc8rk2XyuFcmd9LZwgE8CEMpapmAYSdAMNDaDtjevrS2azPvRYHwx9QTCuV1pbEb5tr9LVvkuG57qs",
  "key17": "RTZuddEBdbn6B9tavk7cfbF1Hn5DAv75PwC7GdrNhd9SL3gZaKfRaugSALeBRqG52XrUH45kPwBYbu6WAUcuH69",
  "key18": "CRk81qgyhZDCNYKv7f881hmN8f9H95eH46c1UB9opo9iLFu2rcZMb2TXmPgLspY9BzHn5U47V82RZegLoqbavGW",
  "key19": "AkAQuuqNCBGfXBC5oWq5YNBoazEVvd9PFHKsQvPPNFkH72S3kQNy3ATSLzQwHcfD7M4c95SXAdroF61oq4V8MHL",
  "key20": "3moDMSWadE7DugVY2V8c6jkGC9DBGKKaedDJwpbtMp9rYJErr6tE3dSzQ9E7Sdqz6Rirx9kZbAiUk7FnKbV3Urou",
  "key21": "2CyX3Pop9g5KtjQRQy8KiuMFQENs35xW2qMHhqXw5nWQWtp2Ff2biVjJx1kAL9bAhdkcZfSdzWYeuCXCq3Gvtrpj",
  "key22": "5txW2v86F47Yp3Bp5vN5Lb2s156Pv6wsphgMi18gQaNQDJ6MVBehupg9xbDPXtdz1CTRud31nGkDh8Sh3XmXkS8",
  "key23": "5txQxFZ8ztV85StTG9S2TyLxCHLh7Yre3TD76se2Cjj7nYg9pnzaudE5tT4PvRWSdNsKkNhyhMZGfR3bjGNcykRQ",
  "key24": "2BFd5N8RUWHzY6sJEj6ZhDmZkBeqVLCFNHcqZVfErawZ6qbApyaMBFWf8Pa9PC48DGvncSercq1Y2LShDt9QD4LX",
  "key25": "2cUJ4sqjSMQ37hAfR7N9DJEHhjHZuLioT4iActsfFTSaUwMht1h7XdeYvR587Jw8nDFawnwa83Vt5vudDS58162c",
  "key26": "Axxixw5e3c2X6GCUran8Jx5zRCh954tqXT3wjwtJej6AfcPmZBws8cjVpQ4UmZ2EMHYeNh6T2frJhHoGVikJhTZ",
  "key27": "wtHz5BGBmGVFq5jbv8wHF96Qy7o4kE7uX85er3B3V26v9RVFbthC9jXrBMH5bGv6h4DjfS3iRrWWSBBM6FD8j7q",
  "key28": "NXRCx8aQHvCFX9pzn1uEwW8VVSsRj9ZHGgvxsLv7fQNR3sArFi6jahbzB5DJCr14nrZGpq2rAicYfPkpzeCfd7N",
  "key29": "3RqYNHuvRMcuFN9uV8eiq12dhaY819JyDv3hWBWLvuV3YauXYZ2pf2BcNPs3uVdX5qhbu6v9UzeFhAKJWoVqE19m",
  "key30": "4rx5Cd8sHFMmoESbrRdEzS1iQMtWcF2bRLAa1bVsfcPchcMz8mJvAnEkDHKqkVdYaX26wwYYoJGaKNi9etud8rwN"
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
