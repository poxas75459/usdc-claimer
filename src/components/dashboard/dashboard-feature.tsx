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
    "QqWDF8MnsnSZQVQwdX5ezFTY1dGxF8BwHcxkCLgriey5Fxm2nurLe24TiwDqFkewmeom7JjXvKdAC85jszs7vNb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NCmmpQ1aeigqwYRfN5dRRo8Cn4cVoF34Af2s3LVHecccJ74GQYBhVdeg3tLPL4epHJZQPqAHURNb2MCcA6z59sM",
  "key1": "5W3sTKHu6RT7RZdnc6BvUWjzDTWkc9hfv3YAm4ncCwAgTqwZmz8NWXPhqUtujptyJB4zVtcdy9MWQ72hPueSRcXB",
  "key2": "cjeTpqgTRVJpUT5RQnDFkb5vqojLnDo3g4Fx3yYCp4HjBGrtg3xgT4tNZ81Q4jAmUHRCnmdV1sakVfc3bJaLSr9",
  "key3": "4qzwiduMwqVZo8naQ7prCceoz4SsCubhvQczsgfqKbomW1mugmJ9KPPBYinouA18L6tQuto6nKaPXDSrDyVH96QG",
  "key4": "2aR5qRF1HUWG8Gkso4wMZoZ5RaUdodLV7soff13qoJNK1JSuLmzYzCVcv88evhv9XCuE6Fcr7WSPqqFnbsvRp83r",
  "key5": "4fYPVNa6gv2W19FUPPpsjk74C76kFXMKpi4pmZpvksUTmrowoaC1YpLh2BfXoyZecbNCbAsDSB5GM67wcucxda6i",
  "key6": "3quyW3RUcnyrEEKsrZ62tAXncLz5Sycg9oxNNZ8fcq9zLx9v7kTde2tSw4uzeop9HLzMKrM4oEhYYXMiCYJ9yqqj",
  "key7": "4Z9kMqzN8Cbda5Z9akkaCWPuUzv2xDBYSYcb1XzETwEy8xPJr5dTT47gc67cF5ZB3abgfmTgPKNEVXZsLNHSz5hk",
  "key8": "1zMSRzqpYbMgLsoSnW6oCzGkTHFLFMgFgYrE88nhYA1cqEQqgqFM6zXCT4qVVEm6BtTkqPYoW5HtVSXjJqQiQtH",
  "key9": "2WstoQYYx8fyCYdjHZy49jac2ktypeQtP9USUdN68Bgf5f75UfRzJEXNW42XGFmkurLDr1LSo1z6uTzTJCG8fHTB",
  "key10": "53VGdkJLmuATSsccQfGdXiiy984nBhk5Pi3AH6zPF7vAF1M5ekqqXZ2pbyVdBGCjNUNV2ngNouoeJTT9WTow2d2",
  "key11": "F8XHEpU64YScfieFHp7uZrku3PdDTjK5dC6K9T5HT4AWLdhR7WLR6G7h1KLTGn1cZ1p9JUZNeDKJJCmxrzQRseP",
  "key12": "2oGqnNPrYTjgShbjX4Jev52c3GWjTHfYzsfmcRQuPCiTFtPrDEidTrQRhxgX12FS7yi6Ty7U4zXVK5rneCp5aRpj",
  "key13": "p9hZyGtrrCerThFEebPYj31yuLDvFjBTRf9H3cJorLzmJKetXQWv4J83C7dzFJPq3jP8s21ZWKqgziLBXKdjUP1",
  "key14": "5pofQRcfr3jvevDfzhjugVvJyYnrtYeqP3wFhK2r4ZGC6e3dJZZ3D4ZeBH76zwxPAvtnGyFLTc15cz4Tet4ZPprP",
  "key15": "4BPxXediqyStQBe72HkKH3m4w6RgZnBeZQLM48DDBKttNquyzLPTLv7z7yk5BvPBuPCEWaWt584ionE3gSpRJn7U",
  "key16": "66FCnqn5qNafRqatJTg75852Y4GrqKpTAZJtah2efd9r2esmrrKwNpEzK2SwgitotRP4ovBmaWwLsQbVtNB98aRq",
  "key17": "3RzeQkbvfuCxKu7e7mu1rbBYcaf3MFdnnsPgeZoKVHKv3GMUYWJocMz5fWoSvVwGbgN22xK8uwQjmnpu8R3MEtQe",
  "key18": "4q2RbTT9qCqfK6k6oaDkFcNZjNaAc6SvBiNEGbvFFQwXc1KH88KpabyHtY3PKDvQcJTZRDvvBZQi8CtdYJDuHQYg",
  "key19": "2kp9maSFi2RFR1g5HPB6AhKLM2rP2dSTp2bEfmjXULFrqk9BdkHKGDoQVzaXTAL1eqSKoHR8HXM1QS4QDtapFvqD",
  "key20": "66BagbbNi3Egoj5awZbXXHMoDyEGhYQNQqafiWXGLkabXtMqREDWBQ3bbsad8kvXGTbyP4MFsZRb1wmEGyWrBL9X",
  "key21": "4rKfBvX4J8rMFY6JFNRktwBh2fMQwQU5BWGwt83x4BT7kUXyQEWcPSpZy5xmCwYcCuj2GRRGgCx6W3BNAS1NABHG",
  "key22": "2qwdCvrsFWpCS7fjXja1Bz4JncB3UnSfWCvZkfYhAiZiboL9SBYoy3nMKcSU8MCw5H4wdgCCVDNpTvxjgKBoNEzz",
  "key23": "2EciBETeXBDTXpsc8nvSD9cpsdmAbRNx6TXEXbWTHKUAJGBptdWciV6n5ZVVsMu4kEfrUx8kgAVsVMUPJXCREb7Y",
  "key24": "56yswTENhAnV6ZSLxz4asjTkpiRKGXUXWGxjg1WvNKY5mhP6uNvJNXdSFdSSj2wSj15nvFX4gV7RSCGqU7a9Uof6",
  "key25": "2XS9HL2bs9ntSU6B8TF69ufoaop6i89mCFcGyBtETPvGdpt6cCCjyw9MZsRufwHm8LxjsPCFqpXUjbMjbmYvUx5P",
  "key26": "A8p3D7JX1kYH1WANsyayH5rZKMGrVQMHduXc8FheoNhSRKHKyiBuyjsCEbETYFVE5tNQytV8ZzzuGCYzufHMrUJ",
  "key27": "2XLoQQ34WnKEUqtyPnEmRXkk4MGtnd8nwch6UorNgCoFTF8j73r5MwtUtwp6mrW28t8wDGrE9ex5uESBVJkXkKsN",
  "key28": "47wvVxBenvXaz2df72FkWjhRgqnp8UiZuiapv2fdnSQXUiFbvfkZzoZcQCXZ1XfHDfecq2bU4s6GEQWypLUU9HQN",
  "key29": "5VyEGQcPgU5r61X1PpSnWVZKvbTfLSEfgzgrtVkq6rm4UpQfYWb75FAJM5AyZfAemYVzj87XZdDL7DJnjR6r8KWA",
  "key30": "2zKfEqT9mM1CTiFduyo5bsCVWqE9edHq6PUy6NeG19P43BJExpA6qkLBRcswWvuQ7bg8pP4QQr6yG88gDJcwqp3p",
  "key31": "2vuhQykjg6dsDA2pjQnQhQ19Msza7vyj87rmoKGTnRnC6fmn7c9u8VF4Sm2zzpzPH7asYo5f8o4kNqJzirRzchcn",
  "key32": "4MJSEmg2naey8MYsYg3UBrU4shKCupox3h9H6529CdaWbxD2zESXZvJrdihV7BXV26wQXag9BM6WneXF76k5bDZ1",
  "key33": "4nuGcEMC3CFb6mFUs7TRfpfuTcDcPPD5ekS3MG8dQbU1zg7ru7fXafTsgXqXqrg1DKceq2BVCU19H9z73F6tv6i",
  "key34": "GtmLPCgJHCYqyyBfC4gw5EpWfEzmHudQSCwm9Re8sJY2sUkxvVG1A6FnvbFG2Rmyuda1JrPLaXe1qozR9Cpgree"
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
