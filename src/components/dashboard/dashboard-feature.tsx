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
    "4oevuyM9fkB2KvUTMLWkeHpez9UQVhRN377jCJSKQJWqZWAt2bzaphssHv4eYTzkuCJ4wDgzBfq4X9meUgLVQKYZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CWdUnwbV8gqh95hcDJPPkcfAKxNAbMgJ69AG1RYnXYQGXUY6KAbNqDxuTsSiL4b3qdeZA3xZoBYnCye2jch8mwY",
  "key1": "2jNVjmZDz6szkuAcKBRi1YMyEfSbkeZe2ACoQ3MtwLpH75QjoMxvfVtVFjUwUcojbpz1gHLm7J6mL6ooYYJjcYdJ",
  "key2": "2JZxTSq57iPeeK5PG3A2C5aU1Y9nrJH4eAmH2V1A57pA6S5ikphVuyMkVZhXqR8xq2gHTQjs6bz3fjc9zvJcEDsU",
  "key3": "2D8BM2yhYvnJ8s62W5DX82dFT9GunqD5HsMN3oJow51Pjv1QCUedr2wy2iexzBWXSZEBABMHeJMiavGGCMubeG5z",
  "key4": "rux9pgmqY3CU7Sov9nefm5N2SpDLoCnccbJ1Brf9onnq2nKKy7XYk8abJfdL53PJYw3VLwyHP71e3RobS7xWbus",
  "key5": "35qgnmsBFqUXoGw6G6ZopvcrwiTwTWfmi3hg7RarbKKs1uUzWVUrTM5i1QfsDhdTGBVsvV3a6ifjiGup1CDTuYPY",
  "key6": "4qXSkmuiqzKdjBcqWB3SziSZRZ9pJvQKzypTF9kjkMgWHzqcsx3oN7AaRN1i4t71hqotoorkZamVthTPxZiqwD52",
  "key7": "31Qu1zenuVq34nCyzGSQXSEnxAVWkJrqsynq41ZXZDM3NKHqKeK1QmSVG15w1rvRxvoMzioFz4jcogtEyUL8Z2MF",
  "key8": "2vSZK5BqnqfQLoPWcwfASqqdebnHiaM7PeBb821VrPNrjuWrqa9GFTYnQbTPYvbbCCJdsFDvGKzXtLDJWcfdFYs9",
  "key9": "4gRkht1L8GwMpV9ECZeJfagcoBMW2B678v9TrrpmVNxKHgFjMPjaB1WAtR7AtcBajR8huW5ixENguJKw6StQ2D9N",
  "key10": "GWQEXBt4de7L7A4sDamYzpuaX2MVtTJ1w9Hc4KFcDx4NEyVPewSJAJhmqjVS8UE76KJK3jHQ6xYdPu9QRSStemm",
  "key11": "g1DuFwJYnzu3QqRgRuukdaxgTPAiWboNq7Fb1Z5wtbGyyMJYXNEqwUVnD1HL6jRaDDeGvieY5YBtCQkurZYgE6B",
  "key12": "5NUxPLKB7DcH7y7hhycfnCcoxyyRpXGXpwkaHAZHK1H2TSmXkf2e7X8RTHecs9co1nQL5fxdhZqYURRdyYLb77W4",
  "key13": "5CdYmMeJWwQgWH9xTWEbc4SRjY36bUytpd5zFXhHmiPWbgNjJ2yoSa23HKDeEzUSc2Y11whBEDLY68uRbKJCcatb",
  "key14": "5wRqsiCCdJWoiZ6UVbsmcfD6RT8dzifZCGs4CiBeywDwodQSFvV1S9CLaaBc6vFiJLGnzFh5AY2Y8tMoUqYJWQAh",
  "key15": "37saYnrER6Ff16n65Gp5ftRMbqgecJAJCCDQ3zxFH3FgcAzuASi1dWg561SF5yncYd3Hi9aGXSGg2Ljn8hpheeDo",
  "key16": "4Z71FMP4pLbzVAp5Te8a8qVkMoxm2xe8n229jYY3CQXswNENVtrL31NgUeUb8iq5H5ZkNjbQauUuYNhCCNvx6YSs",
  "key17": "3gqzXgKL8YxZeDKNXVEGxZcNcg9SsC39LiSJBmXmTHj2rvG4LoJ9P2WXJmsY4DDPfQ58MxqzTw5xMjNbG2x9i7F8",
  "key18": "123rjNsDuarWQFyMKLNrkK5L2KjfkFVzjGZDBx7qV6GbkeUqc4uMnerw9ygyZmUf4WNJCfQMtbHMYhuJZAows5S1",
  "key19": "RTvrk4C7355Z3CdU9it5NGR349u6szxZVSmdvpnf4vVYp7oUqAzF9vsfvB5PePa98iTBGJdjSc3vHz1KdWyBRRA",
  "key20": "pvDyvbdC18Dhf5TV7CoYeSVuGB4QYoeN49RA4BXYKA85mqQM4DPNJMep6TJQGALuBUZ83tY5NjHAXVeSNiBq9NW",
  "key21": "5WKDMy2dHhT2P458efwrSCshP4pPLvdskFbXjyMi1qDb9CyLZ8onk33V2y19EKdZGUKPWCMWHfeS9VrkrySRcFzC",
  "key22": "2Uv3DnFAZMCfeE2zMXVN8SEDzc2TmnsQimNy65H4FMVnr4i7Fq8m3rGLuEjUhRt2dG7kvacGYviYzfmwxiSrptu7",
  "key23": "4Ry8KAECL9chJo3P1yZm4EKL3KMWJJYGUYDbhnhCbnrQC5fKUDaF2uv24gAn2anH7oMCSksWnjytoRiGtkW89ngb",
  "key24": "4VPNpzW7GpV24GfBqo9LRPaHQuZgG21L44D7w2ok4r2Z4u3aJ6kDPDVD1UhyJk5BFCVnWQUkozKT5p7ANrkXdRqg",
  "key25": "4D2kre2Q6TuqjEfHEePmDLmpKrRdooGamtWcfkKFTATXdEcZFvqN3SzyQCy1og4ez6pA4qBnuZpamouvgPL4xgUD",
  "key26": "39vYiMDuvYsU6ejcQNMpp3ArL3RUiZmAix3Qtb6GvbtpD81K41Gu2dWYQMdhMoiocDSuAXSmZqrEXLs6sdqX2KvM",
  "key27": "5aBG715DUAWqUkDBVCm8zkCcmJSQ2uK7i7R7AxoVD7g9zriPZZdhbhMSvCjxMWC1nh8TGYmUEnAPk92RX7kk6R6S",
  "key28": "4JK2uTW7xK5eu8sXMNGKCQEGyibLiuUjaT6EaqPGBG3VotAMTTueD7gxwkwT9uGZ7C65t2DvNEebKovQZf4vC9kB",
  "key29": "5XeT94KfxgaDEPC5SuagTxbsVAFWteVHb2WMmcbm386gK6xZrujYZCAb6CcrDrUwn6JcWqxAgfnLPMCq9diGxgBf",
  "key30": "5FATCDxh6kGN8YQDgYyGtevRmcvNfxSaU44tmM5HU6ZgMrMZFXepHwzGhtmCr3mpdwbdXZ732g2LcxC2EpwTXpeH",
  "key31": "5HdJqh16Yh3JAGsVurAykccjnRVdqvuMK3uKWyrSwoXKPJPzMGnUF5hhBJe4oyfjqvAhfNo1kofq9nirABh1K8Mq",
  "key32": "4gLG1RJMfE7AQpdqmpH7gTAXkdAPBSqTXhPzeJ6CPV3J5HZ7ryLoz371waMJC5tPaNFCFUonzoK34crr4hTDsLGo",
  "key33": "2WS8D4oqsiBFp5SmdrEKkXkECA211wPKxFUY117auiRBgUvyLsdnhC1woFnqmz11Ho1fK2Anie8Djyp6dy9fcAt2",
  "key34": "3T7iPXdH3Vxkn5vPa4i5QQx2A2C2ZhwsNE4s2jp9YixwRZix3C4yh1zX8ZQuGyD3gBR9pnRQex9XWf3ei7xdnVhs",
  "key35": "32FP2faW3rMi1fh5icSurhjZfmfe3BHvR3sUaKEBCshRLMaZVEpPD69VTrkcSbzaTismnJrS68L5uij9b9m6Pn1W",
  "key36": "3BjHEntsNoFcdijCjiBbZ7owdrrJd8rWv57zQXaDz8dbb1VR9Qmta6omjhc8gAh1uyMSi3qQzs8RXPCCr4i5rPoA",
  "key37": "gcS56EavD1dQSzXCNVEkXQJBfW6XNDe5tNvsCYvQe17NcS9A4tUWakmwUqKX2ptRC6rmcRVKUpd7YkG5fk36nvr"
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
