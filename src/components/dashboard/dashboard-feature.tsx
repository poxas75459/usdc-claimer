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
    "3VHKPybPT3UrFSSScTAMuxMFh2kJpg43DAzwK3kuZtgHfaVe6NhRp3maWfTEwnUHh1wsY92VTisRpexNoWbKj2a8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "otDLEmbuTEkef7jGX9iMqDrrPCLrJ6LbRA9rvhixapZE4UixnELCCLpBSvfztWb2e5DmKeuqzBiv9oFCUupbJ7f",
  "key1": "5cGp8n37RhmGvBqhdV6PyhouxKRUWeyVKEhuHrQtJYthR5KFxADnSDdxAbdT84LupFrb9a6hVMGqzBqsfYiAk8p7",
  "key2": "b9i8gWtvqom49GdYdBbyWc4npbgMACHRhiAsLc6wsjm4AJZoEnV5S9JKEZsVZ9KZ6V137HpV5N9tzZF928te3UP",
  "key3": "2hwWKz5GBywvgEcYuCGhAzMfM44D9QMbu1iFksvmXo9YTMXxkFqF6SopMgGQrQhSMj2ERnmq7Qj6pALvY6xDB7C8",
  "key4": "2W9szQZ6fuinRjFwZ1DcxhUBEzp3uE1N98m23AZKqCJd9wKpnr8CKZybg2BzRWbaeAGETXuN9qoE4sFVBW5Uynm4",
  "key5": "3Wvfm53HTNnukyaqdERXT8eXng2BcHpBwqPUGEgRveQgVUBKu2HUMt1edJsanuQr1HMyURboT9sfk5N3w9SJ5bns",
  "key6": "5hBX3AJBMv5GEc3dv83Nx8ZHK5tawBWf2JQPdEP5RMjGHNoqRUfkutA4ti6idQu3p98qkdghTw4hobh4xgVxs197",
  "key7": "2tpWtaNhurGYRJsy5MnRDuVsLwoQMtxazcXhPFNMkjZ7oCPNh1SXvoZcmGCGnZdNVdf2hhrRKTqGNXbHVMBgkJQn",
  "key8": "3CM8NpkpWcGrWPjrhevhFmJXMhrnffHW9rUpNpjthXBDNionzgpr5SwVLtsYkPz2cVsyEFxMjt2h6gCfvYeqjGb",
  "key9": "4Q6zxcehHNwCsiMuDguFRH2tS8oty5133AUMboSFiSNSN8pxMaHZjJ6nyrKCNxPgQBUXbbUxWevi4v228gHUp2Yd",
  "key10": "5cn7oMXZ45pgZsAdnYTz7u5mrLsEh4Maehseobs55BKPthAS8CAVgKX933CiBmEuMjNzatgAdqGvx2TKBBWXvgg2",
  "key11": "4M9dqFYcWvaBiW4RRAv1mr754zUbyiWeCzA5PJh6M1f5oPH1uWK63vM9JKA1xpVJbDrTmQ44hYFu7DAnZhatwaQH",
  "key12": "46QogzzkYFNkDEzS7Mfi8UuHsRSSNuKvJFzBiUGT7ZNNqwxCWYcdxbp26UFAg72UcjpsaBypRFZxJSiLBYc3F9MX",
  "key13": "5qzBS9VAXPwKikMRyLKD5c2kxtqufk57yUHW1HXd4xYq8rWUzQeRbQBbuLjYG7geA1DopEWu13z4j19dCzjtbMh2",
  "key14": "sH2s7wv561y4U7gqoVgQMAWBeBysweodyxSkPdU2PAK786rujehsHfnitpxgqBnHnE3XH2Sp6q5vfYaDUyueh2U",
  "key15": "2dNc2zhcRDYJFxfzViw5yphBKxqSwxWyTcWJHiiaA2syPhabNhJuyWPVZQBxMxCZofbedacD4EYpfHxT5gezRkrq",
  "key16": "4SfNgNH8RgCz3gyXquaSHX9NwuzUzWFaCWxyEVgFqAA4NLDr12hMTf4CjhUaawDTfXEu5G8SHyRg8WXxSbbdvZwN",
  "key17": "3esE5FqGYasBbSVSNhKsKGZfpfFmHeZehAtmKDvfmHxbMCAjtPiwJ1BcHwJSZfZ41dLzwPb65HS6Hz6WgPPsRWxg",
  "key18": "3ua7kHw5nXAVk4WZcY2i2JE6zeY66rSbU7XBcCESkFqqmDrmn4w9HTswrPTfR4TK24mbaQGWrV3zaiFqr25dkER6",
  "key19": "QfWqueC6SntHR6qNyRUXBJL4hYRNQyBimpQpaR84Jicks7xrdbCVn9w2nVd8VxXZ1L7KQ3ZuJYiTgxJzus3eUx4",
  "key20": "2ngamTDmBsawJ2jNDbjwfjy49n7fm1HC3KJ8YyY6EdVMHDNVvbKj6oyLLFGDmKCs1cTjL3mQ4ew3RwiCmYgWYWWR",
  "key21": "Wf3hxJpcmXZTRkF3vZr1DjnhJkGcaySUd8TTvFWAhq4i9fcvddTCzZ8fUVX4LvgQBYoh3jZUQdKuuvZSsoyMsVM",
  "key22": "3MPRH7mafUj3PgmFR5URzH1YndXo6M5pWjWsXtCZwfpge6vHPvuEPfQoobr5Y3KmhiVgwp2zmbPYSwb2EJGnrbio",
  "key23": "2ahKSvmq8aiFk4Gp3HAcNsXh9fEfBmNjEspehwyGnXfozYZXhvB2oVqLcrEFom4wpDkiqy7wmquzBVtBTrizSgcg",
  "key24": "4mpHE6G6MHrmxm2Bjcph4WYv2qnUvjKRJbfGX2c6rseQKtQdfHXS3PaDtd9FVn9WcbNUV6sktWL186a4fra2eJtj",
  "key25": "3an8hoVvUdJ1Zr5idR7p9gkzyNjvPdHDp8pGLfuDdWjjrQKFyY4F9J5XgBKj1dVr9bQQaQFZd63LytxiNjnS4UYx",
  "key26": "4MQCj5bCM5Qu2vpA6oZMmbeUFZyKVE58Lc8aGB9pntA7gRPHm4zZSAM1nqjDSA8RF4fcBqJKBU6XR3DBthHWNmY",
  "key27": "4dyVy2AdpjYgwzUkSFwcN2JZJQ1Zp9fy1zJicYrz9gvDDwJESgio6psFAbnJqEN9bX9zVFSxMfHE8mCTMAtTyK2A",
  "key28": "28i4bcFfv563sdPbrWVPR1roTWT3dY2ZBe2YbNSkLVoGxvgCjKyNyL6XATpzsosaboU4hbLbviA5TirgftP1nRAz",
  "key29": "2KWzrs8JciBRrBMBLfDzHq5PdMLNUUSgSVcZcdkjLTkzKWJBuAW5428Wtoxvm4Dv9uBdMXVHSH9RNsYMk4UDHwZV",
  "key30": "E5zEp54jacL7vMNNfN85Pdk18z6vJyzm74LNNKXaE6wqKu8hARrsVp2Za3brcG82uEkcfV9wB5n1LHADcsZ1uJB",
  "key31": "45C15n1xaEuzjRh1ehVEfgpcmjMwYf8PPWqEYFduCApgp8Em8ANYkYdpC3XpRbUm9BMju8EKUPZ6EewHxTjnZyd6",
  "key32": "3dvmZkDJuxms7yKqLZdAtqKedNjD6g3dvzFTgnokFceGyckk9DNSn4dqBMe1bCFZ8gBMVBieBaGezvoy8nJeBTx3",
  "key33": "5VQCvjCLQKDx8CpPRvbMGo8Kr2Xqevkkd8TvTztTxn4NZSQbiAfH9PDvdv2CsP9tgADTjm97qafC1LngEm4zehW2",
  "key34": "5QvAr6nV9j5gwDtwCL4nUHpkg4vKGfFCzrqjDr5CThUK7uNgKHqHhAzoxXWDnxtt6qX5JjTDQwxv5ZS4y4zhDkC8",
  "key35": "Wfy5pNRWRnhoCvsBo4mwK3SkySyjvpe1zTp7bXqsj7akPYBtA9uKgxMX8pfEuK3b1dwBTTb4kkyf63hTqKRXx7w",
  "key36": "61JogsvtgZA7G9EQKz1d8Tv5CxV5QsKCd5tynopjk3iihgdXnsrPoL9sH3x5x22pAoARGtjUHTLTU9de7ANQoh2G",
  "key37": "3mgvT3vsxXHmutg5dvGtG2abCs5uA5JmL9NkkjZcZnPQysVaFyX28qBQvmBtMBLmztnWg23n53aqN1NzPLEBvF52",
  "key38": "thjxHUsGqiQWABrUTBfjzzmVyqYEHqfcgMa2jwqWGgYoVinWN1tDHuYtSjFhgQo4MfSW585yBupjsLvyA43XV18",
  "key39": "5WmF3LSk9efLA5uQaHvZrFDvydpiDTnofVP7jige1GrCGfG4VCtFFLwjegHbmHbrmY4HGXx5aep7MeBzftPLAX5C",
  "key40": "465ZcH7c3WrTgEpieKfA8oauBvttNNWsYg1B9FYiGLqPCTWTL4yrgPA1PbHkLfBbnuWJY8gFErWQryd1SvFbxA4g",
  "key41": "3Ag16ResUpYY53ZXxWXRy2LjN7PdiwVHJNFGGz6uGXteSw1rPFUXB2wqHxTEc6S6edc4sKYvFLkZBfVZHBPiDCAq",
  "key42": "4jwk3mLTpd7r8CawWEBrMrVbftMCHWp1dVGdKH68cETMt3HNzRx9gkRCZu7oU61ZGPaHpazj2zddx6aRELgDAXPr"
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
