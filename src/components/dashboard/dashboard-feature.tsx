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
    "ndFYyoxevPQ6LmYW2cnzXHARdw54ow9gKiWGAKeoWhcGjE7P2QiqMjfRkXsUmv1MzcmCPiQnsb67xPuF2QARqEY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61ApUMrB18GCG8XoiE8JEC6iNSb9gAMvQ2NqqbYMULKFU7mnQyPPmCcnfUStsbySjQhbaVq5bxRZXYqQrSC6ZR5w",
  "key1": "5xwvSbZ2TcaEyLDU1TeaEFsk75Zq58phXrJodDiD9dgRULvLJorvNuUEGqm7CNhHgLfFRaKVL2M6Jnzp4zBh1yGY",
  "key2": "4cN7hp5ob338fjJmzAERf7sUDhdK3Y3HEd8QQabhvsnSvpvaCxio38XbEJdT3UK4XWM4mC49PPu9CLXPBhia4sUe",
  "key3": "2JwbrnpShujx1L7BUCufi3mokSNQixVvihztnS9tVNuPzjWxhXFYte4EUwbkzvus9X1WGQedQvLuPcE5vWeGkPra",
  "key4": "5qGf1AwCJELw8MUExCPD58CPbu22cEk2QthdZ6i6URKeVu8UKhzNokPiTf4cLaJFojeLTECxcgMEAtQrttynCkf9",
  "key5": "pcjQfVGBRHmiD482GB1p33b5j18AwkLscy7SKbH3Y62wxHrVGhnD5gxSfYX8uP5fp23tUM9BBZe55ziUYctEh6U",
  "key6": "5e2wj8DSnSrg26icTKu3qDJd2XpELbrhehifX2EtNy8njRrZFU7up2Ae9Ef3zzSc5AZqfRUpiMXTXnX6cX8pninn",
  "key7": "57pwssPwMYbNdhHNPy2zipWp3DyuVejsMb94xARHy6257XebKSkJ6ynN4Q5SPModeH9j5o9smwXkCHxjhh8kunUm",
  "key8": "vkypbEqTSJNBNcTN4oYJ1vfV579z433dShhY5KmzXfANA3fh4z64Jceimm2XxUqwGDxMEgBJjk4dXz95zVfwL9K",
  "key9": "5eRS4sKKfCczU23RaxB5Rah5DXaePJZvY1PtkkBvcdFSLCgBBPHSktN4Fbs1HvFaqDNyzqcKe5RYMUGuoiruwKq",
  "key10": "3Lv2SvgXZVoMxofwA33G2ztMjw79zZk5cV58hyADxYowY8VCz7bA7Cff9um2ixcmWfHrY6dmodtA1Ab1iTYqAiRn",
  "key11": "61m2nx55by7ppg1Yw8ATVvRuR7NePczutho8EdmtmREU3D7wuo6XF3FuW7zJsUDj3zAicM72EVub4PygWYyXLp7j",
  "key12": "5ktBdJFjYur9iD7rDy64i5KoTw4Nragqn4vZ7JJGZHXcPeemk7PVDpUY5QWCcGcFXGv9mtHvjw1aNMFyQeq4igjE",
  "key13": "3GvLoG8mb8ZF4Xg5YhrzFhnHMrqsWNq4bE6v1CxoHVMXeR4UBcMKTZki95Zeh3Kyvuvg4fVKvuF6mipCV4UwZty4",
  "key14": "wZpRHcptLs8ZY2ao2QBEKZfrkXTpDYCFJWt4dg4AW6iXKjxY4YrF2Z4a4za4J9rWTQfZ3y4NsCkwz9mFHJ1Kxdw",
  "key15": "ksctcMBmSFsg9mxLYGUymtbhGm5UNMrsEpBFK8TSrCh24RC8pAAZKAMQqFLD1h2vizKUTC7HvBetukN2Xe9kgox",
  "key16": "2TtTAx3Nb5H7KR9S6gczC5jpQfD1FagFGS66tu2t9A6dPypHkrWvHwpcTLHKBn37b3MKfw3ZLYJZbaDyzzXw3Lc7",
  "key17": "5a5DVMLZHBa5rx39F1h2FocsS2ngjRrVizJAWEU5nyQFRarRTJCeJnydqUc1fwTG3ATn7PUyGNCjraQzSPoym47T",
  "key18": "4QNNsRHG4F96JQKxYHCu3oSRFiyELf3Yc77cx1MG56GJBwymX1aqaYWwKSDF74pyZYVKTbnmR5sEjJR5UWCVdFwa",
  "key19": "4mNoA2MKAkMAe8Rn86Y9Fh21eqPouDf7B5Sdd6GP23iJmAcurpu4v252nyF83p9brRNAebTY6ib91GQmGSQXvrnn",
  "key20": "4UW2xcQvvS8Y4JcnuMg5rJridAXjckAhdTWYjVoTDbimTSW5MV4dPbNgXDJQHjVnL5sHXgPNcQQpPy8DaMbFJARx",
  "key21": "4XeVksJLCeKFx2t3SvX33kWxEgoMh6qbAaJgDg7aoxoNxE2KnBZdipBRPeFiJokZxg3T1Tm9UKCgT8XjgXe4Cfyi",
  "key22": "4JrSb72M31t7b3osEzLVUBQGwh13ophqGciJEjJeJAfy45xqiTRfgzRqqbHYnFP8ZdwL4ecGyvvrVzMa1Xpc6vVb",
  "key23": "4kDmQsztZLSCAqtc6Eb1WmNiYpmGTnpGMRJSZCisCofC4KtQaKdSjXWpAS1hUMQGQrDjE9A7DZ7GXhPuLuQXvHTN",
  "key24": "4FvoMjhoFMpnvoLcmcfaVgkDtos9m1XwY7dwwVjZdyfj14D9GPM4cbfPrC1HgVApo46NiJ5Z9Mj4PkP3f5ed1s39",
  "key25": "1LiVdzauLAmEkoWvvhhmZXq4tcsDkm2xFkjoehmxSmo4NAdLK8DkcWS1Jv9KHbTmTxdeb4JDW8TtMqU84zTtWid",
  "key26": "2x5bMhjs52mEy7yRurqxztrohTdq7qBP2ePs3DZvH2pGhemReJLon3ywPuoF8YHT1dsRNQhnBuarB28eWxC9wRGf",
  "key27": "4tFJrhdwf1Nutbc1rb6tGeVvGCwRKBnxCnGZjPhvr6SeVBzrNzxW7jmMB2UVpfRNWQAcMXZhc9Mjv2ecZFStiWNV",
  "key28": "mDrkBb4e3yoF8PYc5yDeiSqAZKJm3Uo91PcYCrd63sJPLUmS9xbB5CZATQadhaQkm5osskYjbAp3LY1fBSe8HaE",
  "key29": "34ovCEHHLHuX3Zm17gcazKYuSmahNFtWfkeE98Lk2v9QVG1UMBZxix8FVZ3WxUCAqGotuS2QKCnAq1jaNJ1Mau7R",
  "key30": "28Xf59tQiMqzkdXdznWtAFXU6xsSCmxSqNcWhsi1FSsWUNan5aBCMEKzi36PrmKtFUhZn7YPvmsgmQPAoMQALT4k",
  "key31": "3JvZHHnBEjCyY2QtzMjUG1CRPMFXaFqqF6Vte1uZb8eA3YLBCEjKT4WS4g5zkGnstSW935oR5v5Jnt5R9rtabG6h",
  "key32": "4grUYPB2T7RsFi9oFJadgLnvdxNBhkLkhXpnTjYBcfvAtfUZkyMvafBZ3hrG8D3Eunk6BVjU6SEiGTNFLv87bTxF",
  "key33": "2R3DfGSY1Ca3p2Q1VMLkFDhpe8cduV4rqg2AEe3MEv2Svqe17YtnMCXogdenGFTax9S6sGkTiSif7WNMxaYFZN5M",
  "key34": "4VYruM2MfEEVf3GRcPADcBuDqkJoZmJr3EXzpHwnAxYMZkXJbUKojEfhAPfLajrjPgqTzj8LxnofPhp2ErNUJ1bd",
  "key35": "3EVLmbnJeqr9r9EiSAA2JkJKg4JSr7riHY45qSJmAGQ6GoFZV2SAhW2CNixkmjSvtw2PyF4EBtcL1NfBim4X8CKz",
  "key36": "4Xvq9R4KZnzpaDEmaQpXjBF7RJj3kGWp82oJVhCxgNnPowC54rsJge8hsgfcSVjv7nSGSaAmY788iJq47hexy4eb",
  "key37": "5P7NWDueRbXgx3LdgKQgVy9ZCTPGNHsWjXiv5PngTLjQJ3QX5PxFshmtK24aPbC2f3MUNxeW62HbjtyWKN9Xknyj"
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
