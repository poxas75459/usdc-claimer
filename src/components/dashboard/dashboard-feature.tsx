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
    "4GW1kNNqi2Mndd5255GdGqo1A3gLVUsPg7JJqpAbc3fPNhtero1QmeJXELR32FQDsKnVGoQmzynQm2WBdRVUXzVd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JEFUXb432puew3Cmi4kyzgfS6KQJzrBfNDVEMSqLaoPszMubmn9Gg1nDmbsA8ijkEReueE8ddpiUUzmEgS1eg2",
  "key1": "598CrGydVDyYNeybAtCpqQZTXvUL8Wfy6zJw9si2HGyxZpMjVCN9ZVMb5MPhDwYMVzyFdbskCBGos4hFk5QJ6nBu",
  "key2": "CuYu77CEbRLb6ebnFpEvS3Jmf7CeeQG4bHnUW7QD3qEDeLqbc6rUsMJEXYPppnNgMv3xntvuQtDNDRprgwUiYWd",
  "key3": "3CnmPEDXuygDH6zG3qdFeoKBC3ZQLzBjRPsBcnHHqS6FmNoHL9VnFWrY1rj4VKGPtBPhqssA3mQzehNx7ruxT3zS",
  "key4": "4QyjXsjerVDE3ASpv5iLWHqAXrEyWX16L2EKZ1A399eCk5Qn6aF8x2FfKvyRfmR9auWoYraRE1piwhF4M9FFWK5N",
  "key5": "XvNtz4tLTa1xcK1BS4oFZfdTNSKf8QkT6eQaAtM4vz8GFLkjMRcfn66dgP9rFVF2Tg1cP9Pk4J2dAGRL6pdZCHv",
  "key6": "CSDyP7fU9FaBwFnftBavwt21T85Brfb2M4HJPkiAD3ZPPqZNfNcPzmnmAwT1NnHCrYqaJ8XXQEhr7xuWZ77c7TJ",
  "key7": "49ivYfxj28znFm11UbteHYCgo8FpfWB2mw3K7Sdx7ckMwjXE8r292xGAdReyDzDXSU3KDupCvFfvwXjojF2Wj84k",
  "key8": "o1F4KrHyAruzEiXDUXVMYAhocpF8MLrJRYsoUuEzNRYqceFML18p67avoNHUXw3KSwv7DCKcshZN7VFsw4zii8P",
  "key9": "4c8f5m7Pbur7MaLs4nmNP6tgGLhqftXH7GP334edyeDfWES69a3HKi5cspV4bmbBM9XQWToQ3tSduUco35muHd6c",
  "key10": "EVHS9EEK5UfJYU28pRe9ZeDEz1wX73E78prZGpKwCxGyt8HjdoMhi5m7rK35NW66qboefYL5AzQtCzF9zR9pv3k",
  "key11": "3SY7AgWCoWWdV8MQTXtHNag8uFzg9gSK63gGRfD4b8aLjbNznXdBmZEqKuq26p9H9jhmys166UydqGsp582P81A2",
  "key12": "27n9HFSZ1BVEBvgCRHjnyrm2nyJPh97RheazTfdSkdJLRZ2L9FNyoLET33vH5yJNEJDBun1mW7hoHaYD8RVAnCqo",
  "key13": "4QyaVvarBVwkXFpAgXhQAWEJbWBqEPRinK814pxmsgmQEow2D5EaYK5hkXACXGBkCiGcVRATme9CQH8dpXgLqm1j",
  "key14": "5ns9E69MuKuucwoCZDFKu2PBDGpqKZT8eWS99bbJ6rABLbi876uoa4c7qhpCoPAHe2tXmqeWy4KNXAmPB7gyYJCJ",
  "key15": "Lmm881HrwkP6JLBK2Rzo4vPwjR9Qy4RMoXDJKLQZKrkHQXb8nTcDBi4R7n9pofYWsFDsHN6T3NP8bZAPtAaBLRS",
  "key16": "2Nh3gScyEiowDeCd8PiF6zsFdCoSxscoeQcn14RLDriwLEJprU4qv3Gi2DwdHYhscQjpbF6PFdieFvdqN9BLY4Sc",
  "key17": "5CSJtktVXhWKufSR9M3y21SV8tDPG5qCDenXr6uq3AC9X6kouhjtGdY97hdxcU4yPcMdFmQ2Sjwen8jivMK7vzWw",
  "key18": "2eDz2Ryb5X2L5NVpiMapp7VbYBVzQrPTYCEALyjosz7xVoFn3a4CA6BCtuEkhjefgdxHL8FGcx5dir68FAg2QG2Z",
  "key19": "4ryqizHmjkyJzLLdgqfAsVYZxbE6vJLcvupFcwMvfmyK54DK8H9j5MvcCjSgB9Sbd6pF8EsqR8NVWRSMuZKUhqZm",
  "key20": "5tdgeQrWDfJYi4FR6Tv1PoFNsWhGTfugUFTiFLztmZcUqwq3ReLZxy2ZEmYRs3PeQG2sc3WbL8uYXTrPqFFvXgDg",
  "key21": "5WirVdWVKen1b6TgqZUwxoyi8QtbwGNMXphFBRpGAhKaK2APWiRac8V5nv3Y63kwdtX5k5W1pKz6Ss76JCLz7SA",
  "key22": "5GEoeSGwTr1PDPkMfW3oKcDDGDF9NQHoVSyVjS75Ypv49C5NjabuECX6L61jRQ4g7xfDdNA66udMLbPSFiyr4PMQ",
  "key23": "2yt2LMvNVqJbGhSDZKQQvwXfvy3ccWEbWXF4cGsRSxVtM4VJk6C6twvV3TA5WA4oC3UCt1vuvUURpj6FvPaSPe2L",
  "key24": "2fBS3o17xTMESiu2ZEFPihoWZxwTZbgxH4Lwkm3vH9MyKrxhzyYqCs3pFWfdoZfoa6n4T8sn6bEytCKW8RRtyJii",
  "key25": "5dDu15Hb4ThM4rwc9mdjWGZayFJPs9aW8spYaz94ny3JFiLLTz5eoztBtYgR2SDtmDSRpeTFf172fM58H3KPpcV1",
  "key26": "2RvfQTLSurWpgA2DYSZdMjU78RCMWN6ZiBoFexnSNFVodcQBq9htsWG784LQNMFsh7RVYnnG8DcGwUPFVoiGXy8H",
  "key27": "2mq9QbqCUt2uGMfkpxd7EdcmktM64J8LwYqVfmfpQRsi6BZTf3VTrGoyjEdK1oWw7yAAL3RuJgxbsT3pAk7WWhZ6",
  "key28": "4b7wHgbGoGAt7WfP12kqpvsD9fKj5kxcXd3JnhZzmnPJjqU6z4t8vcWzpGsVtE9S76b2x9MQATEUaBtszsZTvbx2",
  "key29": "4rFp1suQG3Z67eCJg2iAcZoDo3hE38Mv8Csh1N2hr9cqA4i6XcdzvC6WKhESTBfP4PoVbhrrjYd1NMwxHLKBAPmR",
  "key30": "2CFZ7ibew7uBEQPEX5BLPMvSoCUTiEkxQS7Qd3K2uzjQNMmc9ntc95n6aGAxLJeSP2kHe35szixtaJHjxfCBhmaS",
  "key31": "47hfhzofbXEtQqWU8rZAbVrTDEvKaydJbiQgN9CPWuDkFq3ougZPvrytguQazneUkYzGhmaVCJ6FBTx66WeJNWrd",
  "key32": "23PrfnKztmFvhHfSBNpUDibT8uPLN5pEQdm4Y6XcX27VgiHvTuzK6EkWHQPQi1VpzT3uUvFgF7szqGnh5xwiC1qy",
  "key33": "2ryr72uDX6BcEMfTWmu2GbCsCWorYosRKMnLCPjGJFYZSERcy9kt5gCrbuoXArEs1DyaJtZ7gGJbLLediLTHMQzQ",
  "key34": "5TMuUf6B7rC3tsHMC5BB5DTppwaB6yYoYPQt7UV7rAYz7FVnnfrH3FXXedugebgn2R4c19TomyEhb6CSLRqLpxHN",
  "key35": "3qsM3DzzCq45AmHxSNp7TDmcytW2KKW6EAzo72ZmKD5qKNgWHGAdNCZpx6aF2y9j6ovmoHGr7JKu2T57zxoip6rF",
  "key36": "23ai7nHo4aogmgmT8ZBiekiKPmuXKEyNjUZLLXvU3bwBq3xX6vrXF6QeWqgBGuGS5AWE3kBsyCsQogjqAA1Vmdqx",
  "key37": "5zAQFcR2wND38XJHRio3hKRQpGMCQeppr9EAyFm9qZDNKkb3zJzrmAcLznpdcT1AXYj9b3uiPh6Zjj6RLHyXyXhH",
  "key38": "SPwaWL48LHrtVpd8kT7jxydjy7SdDkPJJ2SZyAJ2gxM5dK7eK1ixVi9PGAa9xEsfk1322Rve73XBEvLE3XoFXng"
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
