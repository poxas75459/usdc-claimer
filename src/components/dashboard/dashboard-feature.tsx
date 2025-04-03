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
    "2nMXmyumkYxJFpFreGdQPm754Y6sEpsgKH8HQ7fjMPCMF6sBGTa6ngmrzWPcE6vnktM4nuFgixYmT7a21e5MqdVD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pmLtAUafqYhELkzopGLfAsMsqVZ82L8XGvmaxQg49BEXGx67vQ6LdddhZWx1LUoj6AUW43vgwxz2bgbFZB11GJx",
  "key1": "PHVVsm9N2bAReYNf1SEMRp7CnMiia9dr9tzfuiHbUvFRSsGQUy82CjnuAxWowcmajZxXhQTMAGGWnkF96RPJvKn",
  "key2": "34QcrGDqzrbhDdWBLBgJS1jBW9nu57VPz3JMjXfc79WsrJ4y1vPyiZuaAMrbtVwzcBBP2F3EJtSKpNW9pCVXN1uN",
  "key3": "3RkYucW4FkhuQSQfgbJaqVLV6FUcrQgqab7gqx3NPFdz29UUDAf2xU3p62xmWn6TpL13dUA531AqFpgnSUNHbNps",
  "key4": "598iaaTas2SEjJTiD585iExfmjFbhimNWzFhadBzqdzE87UCi77uEQm7PYnb55GvuupHQyTLrvnUgVWURnR4Rk7V",
  "key5": "2KKT1XTyHj1CHCFeVJt7kidJ4mRNVorHGZJewSmjsxmSXRFSYjvKUpvVARmFNXjibkrEiHH7HNdzwhgfD2ADn2jy",
  "key6": "4rGq6EJie8HJq57vxd5vfxmwjkHHe4k33kDodgrXk567nvgASTEjAgzqZFyoRAE4Pm1orccizBiFVFTVHKaUUgkN",
  "key7": "2qVqcUKNGRsPmspEvKZanDrP1mhtaUdCADJNH32LjgfsADjC4FxFGpDUwQywKgnih9R47txQBhFZFFkY7pMqyBqs",
  "key8": "5DnBrgaqxNJPKWQD8YHyA6YuWqCqxdY8RszFmuBTS8gyvSC9WhWKWGCujwc8XPMNCs3mNAMNnQ1d7E68t68ZJJzD",
  "key9": "49ndduNiuBi5yFADHZ9FfD3mUz75EUoeouYvkK9agmSL9HSqeSmZm4Uc1H84yiZt74uVEDhS9ojsUahKbKhPhNvH",
  "key10": "4f2aWevghr5gqGox6nVBCenSDv1k5cJqmSJj5URvEMkQcV3bWmuNMCEQAtM1FvFxV9rmxf4ZpbkDEtkem5Kor9E8",
  "key11": "n3ux7siRGC8bTKsbQPXxZ8z462GLhufatxTb8yXRUVgPdKnD6Dh3QXkgvqFxHF48Y17Cv3FGbniqHq4RHqQAXuh",
  "key12": "4Gf66dvcLihW74ZpAsPoC7zwNHTqtZoU4N8649ES4DzgsK2wyZqVF3Gpy5AEyxxpePocV2NoFeBF91W8MNSbPFjw",
  "key13": "2enf14MrwqSSxckMv4YbCVVi78mBswtwhx9WD1bFTfcpKXaLGpRn2STNHPhRT8pCgVezoG1nDaDPPHPLvvo1sAsb",
  "key14": "5QKaeF3q19dHQAiRdQBER5v5nF3Rn17EPBHvfXuxFzPjg9SRiY9qSdmaYzr66DdTesCYbN1Ea5BPMVvxLZVHYnnZ",
  "key15": "471dZJojFUoAk6reoZX5C8tGmaiyyFs5BqKdQAzaPVuu3Vfe6YsGtG1mjGPjuXmkk413XSzpS74L6FPs4Act9LFV",
  "key16": "4L3thHMNGgQbJAckvCbUsaznnJ5D25gaN7W4qJ9bytbvNUyt9svCYzTJM9tEXQkjoHk7U26J47q8vdzLjZfk8VVV",
  "key17": "5n7ope9jNKRpbXnksfeZjy1iZ9xJT81ayB5eSmTZfZbFedDC5pQFaB1wz2Sz6hFhWtc9Xybe9hDv391tdB7bT2Np",
  "key18": "5zYtCX9CkyLYfVWJjW8Kikkf4tGejAejPG97SmqsVD2WS56FApBtYJjg9y2y79JUUMgg3aMknCoXEHebFnNhF7a3",
  "key19": "2YcRD8cyx5mhjxfwjssuQ1LCkQ4XCaHUWzPSorBEQWCZoXzn73Y2ii8zmt5uH58w4jUBFarrY1RgCssD3Cq4QLcZ",
  "key20": "3BRDsrZu57pMnUqnNyvDuJdS8JwL56Wr7F9KzWJq81yrNwJic9aAAq1BKLNdqqaSG2ovs2f5tyXvGgwMyEnwaYqK",
  "key21": "5QYG58Ufz3Sb18VNLdWefqRrCD5pZLez1fpvEe7Xs4j2FYM94CT2rqqZQP3jZ8StRkp23C2xWFwQQXfhDM8s1EQm",
  "key22": "4o9koNBcu6454UuFXdTydCKs1K45wVYJjSFhFJQ8FAj1nbVqfFA1ZHKyEJJctrCmWSMAPXhFLrPwiSb7Rk8DusXU",
  "key23": "4dKDUjMayaxYE56qZm6zgSbhtaRdGnRdQti5CAV16B4hkb8Xyk1CatVyLGjHAVF4XSdAsKEbMRATUCMsjmxzdpBe",
  "key24": "4sbvsASAdkSSGdbYdv7d9U1NCbsqPCU7bukxNmbT5cPzYgGBL6xVXhphHsqyST1oLkS6rkqynXwcuTt1tXB7cTXj",
  "key25": "4UgRp4oQHHKuhrBqNju3qHfuCN7ndbR1UAYCx5YGvaTBUTbVJA1uaEFx7kHv7X4E4jSurn2AaoikC5K86dNmzdgN",
  "key26": "3Wrdpqm4KMn36zqhaQzVkNShYZ8XpJ2jGD9LxjwJ6bMcPkRM5kj8U7ABYEqTZWjrmGNoGWYy9251grwnueyguhJp",
  "key27": "5kjgKkF6AmzCSS8ufJJyCmPTSXMhBRpvCn1qHCVjwdTznPM5P7WKkmsPpbeHjyfi6mSk6zqVh9Ryjc9QkP5ZjJ98",
  "key28": "4Yja2CeyFtAdFbtm6q2fiS2WCakwvVJvBb6R5u8PqrPjBe5fRzTz9HtoMt1KwozsXoztfN6u8BTBko12eCFBm3nJ",
  "key29": "5bGdaBgVfsuj5ztwqNnTMuCUM6WFAN3AficzER7y3niqRcT7EF2zRtJdHJCUuN59mZFoq1cBRrpVJq3BRDyx93wh",
  "key30": "2p7yGvqMNLc31hEAYLqCrTF2HUhbHeSJPuYcmfsVQn1gb743U9fXLqmk4QUQ9V3xm58ZgDaE3nXwVRwirqpqwnSf",
  "key31": "4gtwiaLQJxemZNh6Nx7Mdb4UM852t1RLgbpEFceDVXRQbiUDJFPzFt8gGcx32gaXQJy922hhpufkD75afwwNPB9N",
  "key32": "2D8FjmwQRyQ2GHfqAk3XTsWcToC9VtbHuAw9DT9VzSMuep5wva4buRDYg4xzWG32Rk48yEvBYHihxQhLDX4fcZP",
  "key33": "2Pvtq9XgXfdXciWr4PUpgX8AQsCWBuQBmyvnUWTgM6Cy5NGf1D9c29ofAAxKh9DiTmrkw2k3CSbEkJmMWr3XbQo6"
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
