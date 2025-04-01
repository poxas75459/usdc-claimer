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
    "if4KsQQe26yJXxeKUBh44PzdmjVzesAAHeWvbgG56SAZEnYMwk6HFZyFZdWZg9oqoc2auPKt3L59TMd6eN4fetN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64Z2rdnPP27etCabjBZkeyNtxQbCTQbjVoM39RJAem78H3aJzWA5QdFD5MnqESUwM616Qgy2EKqWAUT2fcjhfSUk",
  "key1": "234HoTjaFUDHqgaYBDXMimMcN8CX2rd5eoTXorvsvjXqTTBh9CKems9AaJQv7zWeAdCrJRrtkjf4JkrC6vSaB8cB",
  "key2": "3pLbnK8wqd4DyoPJLcheUSHzBMgK44gkAmQ42MkjKNwJ579dX9GCgcPEbSZLqsL5mrpnKARDHLwK2XRfwhRhTatZ",
  "key3": "5rJD2HBa5jofeaE9VCRjLxvk8GovvKfgTiGg2Gpc15jbUi7JKkpruHNEoH4FdZNFwTh481kdQ342vtWEJDWFFt17",
  "key4": "K8z8EVzPvCQ3Ty4erJe4uZPC32ngnGp4u6ydbe7syhr3KMtZ2NoBVaBDEab5Hk2ZT8VAfWDmWSpSXTnumAFzsLB",
  "key5": "3yMHWT7Uojq8Evc6yTmg3GNwAL9R3BaGMriMPtaaFFMokrkEnnDNmwtaAciFmvYygWjkNRiohp6HAkknpZGQqbA6",
  "key6": "5BpAn49zDyTUExVU74q7dq2qGWhUe1hRHKEp9PpEVqq3SsgfpnNZaru43zKBYMuNc9NunPDiocuA2SRa9j8thtzm",
  "key7": "485HqWfoP4D3N8o2L6wAgYTyPy1TFjXLi3gUHMx8jEDPy3VKEEHrxKmRcnWNU9ESZDSML3fiCuo5fzMcy16kDpsf",
  "key8": "5XZT5ymusjGFqT8EAp3ZBJKb36SUY7d7VEiMZFY699No5uvaGSamP7eRY8grmbsYKs1ZQH1YsYTQCDQWmQUah2QB",
  "key9": "2cYU3oLVeCSNe4u5z1BUXRv8FvjkJD9KEWrZEJAo5bzMzgdGTMUJWjY8ZZmeDHu77r9qpEvAEyoTwT9HeqhunX6E",
  "key10": "2LqjYtjb7JtAezPEEV29L1nmVi78CoZsU49CXF6GRRYxjhu1Ayf38JJWtN2i9UdkFUJNEhA5qmmGLLrpBAykWWRS",
  "key11": "3LfijAWYQAz7GRxcdctRh2hvKVGKAY1kd5xnqDggNpdW8HERS9maTeA9vsaeEQrL7rCbJVnCt2pak8eTge3Nirso",
  "key12": "2WNHasAWKtEEpjUGdM8c6s4ivY1cGzEnTQ5hqX1iAACHop5jszKjQxZKwYzEh73h9NVLU1ce3rRnybTkbBYt9Wrp",
  "key13": "2PM1AGuPTXRRLA3HyAFXJfHkPzGMAzy5mdH8KyckbcNw1jaoY3mYu3PSGuMpTb27akPprMPDsdrbsaiEhkeF4fzd",
  "key14": "3BASEsBcVyZjwUoz8zcridwhqU3Bwbk1sDDHxMt4iQwZReJWrLdbkUwhzXmCeDm6nwc8UAyZZajKswc67xppzaNd",
  "key15": "4mBGFkqSpcDpn6NxbiecUUuS2UgJboPgjo9dvx5H8uuWMjArqmbYTh9U7UkqcKaEqCQW35eahZyRPmYTSkeP9R2L",
  "key16": "KWDLTjLuWMbbUm4GiNfGJibf2QCrFdyN4TufjtrSXLfWmc4oZyAFJoCndgiSAkfB85XH2dKsrBej39D72jodKhZ",
  "key17": "2kAcN2niGnsurZxFZgnKuSvBkZqQodC64QDaiXqhPior7KQ4rf3FuT4vL6tfo73i2b5EAW7WcMj5fpvM29rZSkq",
  "key18": "3NSYds9LmkTCAoURa2rqBX4NZwyt3fdYsUotQG8o7wXzEtj5qYRFMdZDNPvBrEL4A1NSDRAjEiQ423k3E98uqQBW",
  "key19": "4FVZH5hMqHzzaxHRyaBufmHACfB61pRw8XcKVLkLAnPESZK8tWS6jwFQgopdXLK28KzsrVEiX6iAC47BPZUf2ndw",
  "key20": "5PUYUXpkzGgqUzywYH7jR9qBmzEFewuWsCWRJzY65NT35Piwbmx5spSxpcaqxBnXgxpcQhTjLqeEyp6s5Hsnk2qs",
  "key21": "2UTSTTyBTAiCdtB9s68L7t9bhbcaXkbjcvT1EkrFHJkKKWa22NMM4dWTQhswBtv3NJ5Bk2AcMg8uGaP7exds4vnV",
  "key22": "5f9KotXXdmhFv9VUe5EBHTJGJ5uhBkSqA74RrcdbiNWUAKFjRjCbSzJ57eCHMfxxfsEDtBQUnJf49hQusUbbAEhg",
  "key23": "2KZFP6x6qQwoeKHFJtrpJJMBKjgk5NYgfbmshYYyAcp3ZQtrbDWSiCQ6C1epFWsi2sky1obKSFamzdDAuHccbwWs",
  "key24": "4MPHemXgKrpq8VeaUntEs48JcLeYVRK76WpYC4wYpNinUxB4hbE9Xrgq3nDeFcvNZWM84HGXFAPkRJhSJmpjroNF",
  "key25": "5a3bXX9dTUnkUFQ1KVWWiV8e79itKsnovXMtjuEraST5GRatpggfcMoYRQWSKdXANwstAwG3i9ExFkdp6tTDeV2P",
  "key26": "AvyRHmAR1MzfGVFRHucp5gh63SqaCYfAi7Eo6bxkehHJw7gRL1QxcjQVfYuR1PWd9bNFAgnPrwA51kvNSMivyw3",
  "key27": "xCV8D8Tz1aSzuHsfjBAuEL4yYtk7y7zyB2LzV4fkHivAX6ArcAorTbqmNL48QsQXBFuTYtjM7dCn9pC4eLnByqb",
  "key28": "5WDTADV2DxTscs1NkFm7Jd9iygNLnxSdUhDSpMxAUSkPdj8ronsyCB6KQBCoqap3u4UFm78sk3hdu6F88pJ5QWXN"
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
