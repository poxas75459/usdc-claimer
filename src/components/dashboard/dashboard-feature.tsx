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
    "5ZKDxLeHLdqdd7jeRrNDgPE21sd32hVfgiTrF6Z9w27GR51P668EdUowoUWZuXUBzBRnaFGHdWnS9F6HAFmKDg49"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5v2GjW7sdUuHEmFQk19bvq6i39mFseVoS7e9ZRw5vJsbGJWaCzTY6JE15u4e2Pf3x9cUn8JNiDAiZGwBSLmH1tC2",
  "key1": "5f5mviLpGtQhRq6hWaCQ2LVAV2UgxZqb11nkui8Sssfg93xXNYcpSvGTL4BtEMtxmTjpyPJFWgVH5prDTPBFDN7T",
  "key2": "2F5U772AsUb5AkQANVNTSktzZhCmj89tQfQuaUHLVB7N5WctZSW23yL83f5WNCo1tAHPdQuGj1dbZSLHQaZBDA5A",
  "key3": "5bAxYXDhpAvSmuVqFF2JCtMuUwqgKoGUaf8uHcxPrFSBfjHpRCMGcAvECKyxprFsZsWzFkEBnFutJ4vyzWEeGDU4",
  "key4": "5mBPGmHcy6wPtd5Wd1RCgN3GfjXFPFNZUsLGVxwkXnT48iYw1DmSbH7A6Yr2WaHeUrtnGhWvmTAsSApx9DcEDvJe",
  "key5": "3Ssm7WNxaeEvAeHgYy9LeyrjDakk55YZP7ctmQSQs1UwLgrMB5cQm6MUN99p76U8mBM278jioN6ZdZ1NVZGYdtz5",
  "key6": "3zsEjtKaVCqNbs2nvyH6AzWVt4KMXqQ5Zr56Ztpw98d18LuRta7XmSFiGreBodfTHNb9ovKyDEvFp8ouAetgGCgq",
  "key7": "5pTmtek2eSDfGFAwbRq1BgxoZnWueibCKX8uM6LbSNnN6zr25Tvvjen2WxJrvNXDb6sUFPv739CAxLNsZ9vQznBV",
  "key8": "5Ug2M2g6w41VQ8AuHN7i1WoTNrvRbAmNUEk3vpfifPwt7XSM651pprLmen1XScPKMC5NVXkSqRQ66FoibEfRK2HY",
  "key9": "3fsM4iTrSH8E5QxQTspkTHy7okkSFQwvPVcM5ngEwZSSxTPjXDT8E1ByCc6pN5wBMNpf6u5WF8DQX9Goye5UXu6T",
  "key10": "5YgW39MFGXyU6ithFwWksZzaH1hdTMTTs3FhE5K2DjdbP76Ao4bfjrveegyjRGLqg4FfPh5SMQ9zD4DZnGnuLyNK",
  "key11": "4HjeTG3snjEKXKq2CF4X8pBduqFa1f6ynEpdTWNdmHHxixTwKi6Yd9yiZU6Tam6yjNsKhMziqzbhtbPfMi7fJFr8",
  "key12": "5H44UskwUEkVnqydUTK1RkaPKHZpeJWZ6t5Bth15LmbD1YzFPPKinwhRxCAebqtPZ4VrCeDMHNmveTMUqzY2NN4s",
  "key13": "gqfA4pugEPRq6MTkLCwQgot5VHmo5WxDkf3AGiGhoT7aVPuZ7yRtgdum27427fwLGTvSrrh3crAT2FbwuFv96Ew",
  "key14": "4kwacdGphwav1yHapyQydxCm8g6rX1mRRzH6A68BXYzUpXeZWPfMhdCa9aiJGBFKbzQToenkRbRYEBcVEE6oUw52",
  "key15": "5KNqVWNb1VwgvQdbd2QkWnKEdEqbixDViMo64kuZtbLKeHP7wTn4ozDp5zLTKULL3F7Yi67ScW48RkEqbt8jkkyM",
  "key16": "2XVhvwUFwHpAmuhpw2auEXJGvWYmxeRpLUyTnAswRySLvqr6KEwBEamSDEBmtPatvGA9hFAja61HDgbk1JT97FzX",
  "key17": "1mvwxf6Jw3te5TcPgyv4qyyFn3j9ZqWqFCTBAs5UmB6ybyH7Ke5XHEU3nFS6Qn6zYdfatSoAXZefD3Ui9KX3DAK",
  "key18": "4nWYyDswTsuNFf1tHNStPFUZwxJHphMoNw5UZk4rFUnFXc6iatxVT6HZDkc71s5x3unG83HYJtB8FRCjTSVgK46r",
  "key19": "3tCQaPY8UU7RWZq9pCgLLq5pvb5w7chwXK8WaR4uF34h25gSYfS8mzWga2kALYGVTNPgfT6yGyPMf5Q3cAsLVgPT",
  "key20": "5sWZ4bvnEvyLRKTRqfgy9MpZmQa1aFAzCpjy2k1BUMmLVgRs981FvJKYpdEyeLRfthkynBcGpQGzwFWX2qyJtpKh",
  "key21": "2ijYyLc6YZNFsYxBPs2N4Hy49M1Nz8L67CKGMGYFLrQNh1uipGwjq9U9ZaP6R3jepPJW1j5kjChbw2m2cDvW5XXw",
  "key22": "3kxi78BMSF98SbTMzaf7yJb5Qgbc4wdeA42AeWfeqK8pbVLkhgpvuPaGurozHM1nBDmpzMoNwa8xMZGxyG6KDjF1",
  "key23": "2rxsqGoFTxRAERQqHLNENaXJvUjXB2uQ1QMAwA5Ypv6S4vRA54F91JkyJSWKwNsWvcTwSPar1NfBmHKRBHefTZjx",
  "key24": "fnCx5N2UGoA4XVN29ot6HXDvMUhNRCF7AJi2qXpTq37vP1pbWwB6dgKg4bkVPp5FBrx8wteVd2FM1TCu5AVrcNf",
  "key25": "5CX5bnqzQrPY4K8PX3E7VgMcPJip5cZrZXLx6SHftmDhbostX79HGaMJxNiGAiy2LNMuViDBE1uxGNKQUrNHNvkP",
  "key26": "3RBNiNqs92QaSxLyT8fyVYgbnqoeqSpEH2HCGqWVm2oYUfyvNyV42mxEERJfehaKS7kNUTSKvz3odTRdoeHEs1km",
  "key27": "5bXevcPy4gc1H5XZq5CDpZzi7RUb9bwPWzTZ346xG4bV5Ew3pZig2dEqEt8eBbUVxdigtYzBnLU7RfgJoGn6gm7R",
  "key28": "5ys5x45Em4M9RPyqHxdF27dXfggH56iKfo1RD8y2vubsnaMvrTfvW5UPnmTuy8ZMNFZFfKqsgp5ZA4XQutV2qsKN",
  "key29": "4oZJAepfN5J8rZpzajrWo1ieecPjT3z4HLMWkgbtxY9nz8TYqp4PzKAqVrZnEs9wYbRwbTRNnC5haxFDt2aHAdq7"
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
