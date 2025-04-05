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
    "5ybYvWV361Fwu28tR91V2NTRe87ypt6UjDTL4Hjs3BWcpCKs9v1iQiMxGwznr2iYn4LiirPgTexvNCfEdQsLPBu4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kKhoYbH9QV6m4vHojkQx4aSRGzwvvZ2WUNqempPuzj4Bzego77LQHNb7xeChJvwP4iaiKSNFzk3x24TEvGdN1BC",
  "key1": "3DQ9eA3mbq9EQuPkTURZwM8rpcsw673oB8fVntfDYRfwBzB2XsKF1woUZY3ycT46DuYi6EkGGgU47rFeStXwB1c4",
  "key2": "2qFGoFkaZvjzkLpcfd59yAE2zyLZTuZKzPKdN2SdJtvq1E9sRqCN3DwDbUtGfnW5qBWDd6Yw3WvxtTaSKEmqWSw9",
  "key3": "3yTzXGx7SUG5XKmEmGwnPphEcvqE8qTZy6xEPf511Tmc9dNVsLJSBgbANtoucGEKuwnx98gZA9tpJHKDrBJ8mzjq",
  "key4": "m2MTStyaLrMSLd2pLaPLvHPGCuKmGE3YNPUwv7ZAwLWANFjrZnea9inSvtxGurJ9AF9qE3zB5c4ex7R53mGoYAt",
  "key5": "4ewNKLsd1h9N8VPms2i1WsDKohnk44DDjM1ARtMKjpzgorCM6NLgZZRZP2uJAeB28q9bRY9ZUtvmYFkrkk6NfEK8",
  "key6": "2S8T6hNXtdqm9mWNWCWZCB2KpXbi25xB2txnGKMpfKDGVVtTePNocs8xjiqetk9h9Eo39fnG8VV4QvUEEhRYXKAM",
  "key7": "EAURs7aPoBJ3UWZ2fyfbKozMQNJPkgGsYN5oEZ9d4tNvsFVABFFkuRZsaX2UncmTqQzbGBzmuRwUHEExuwQv5ro",
  "key8": "2onLQMn8ERmmBHnmhUfdaWGbAhcHsFHuhMZjf5iaEcSypZyxzbpQLwtCyPBgd3gNUJpm11mPDrWMXgyTTe5ZJVrV",
  "key9": "2CVzDGuk3bY5qKKttvnrvciC4h9Qo2eFMWp99GLML23GLpKvyUdu8CWwdJmmCLHqaQTgKtihG9QnCDxYuFhp4c7y",
  "key10": "5u8J4vWeRv2FgXTouZ8QHRMaz1T4gmqBpChhEPcnRQeeJYtiC9ThBD7d4XAyk7Jkc3gisaGG2yvr43jbut4UCFai",
  "key11": "SvdJnH4KeQyAo7i1Sk2RRFyWG5yerFwZ8A5bN3bCdM5uEqHz84ypP6KqhacMKYeiVC9q1hxZSWpjBqcrGGTYvFe",
  "key12": "4zbHWMrXDqcvwZsKDJgFN3Zt4UPSmYfMD68gjzZ2eo31uprrvfHL96KFtLGjTQh4fXic1UzChHocjBFvkrkeVmJS",
  "key13": "4UnnVPWXLxoLdo91rT5GXaUzEj4MywRU7EofArgnim876S84XffzVU46PsoLgBNr9zaWXKvTah2q816u1FeEXkPd",
  "key14": "ubGA32KoXW72GNC845xQLTmz4nB4qFK4xM6Ax9h8ZF5LDvk3f6yqAvAcoeikozRJTqm7sacpNMVDDCx5YBq2U49",
  "key15": "2q8nGUcv1Mc5pN7ZJmjagmawsGgeMSRxgYthnF85GdXmtZqwfrGS8ZgdE8hEshGQQbv4ivq5ToyXgPY7aAqoVVBF",
  "key16": "5gycY5gaywE9HB4u7czeTMXSshyaDvB3TxYiqgThUaYNy2KFgxVMCxBGtdiH7MNGEz9Vi6rgLSNNorLtvtMpaNPR",
  "key17": "63gxVwz36fhmRKj2mHdHpppRUB2hgQnerzygU6TkAjEPHRRaGkLJVvkko27KPm9nHbQDoqagVJ4CtipKP41f1Jwk",
  "key18": "3Ei8FdR3U6edxM3U5sqtR2U3jXqn6xY4DWYHEZeamTpaArxX5mRAzdijnDrdWHjTGJ9LFceWLCjQmdBd9R5niwwT",
  "key19": "2bDmWstuggzw3dvFFb3TKCh2GidgkMmrK9zPKwQiwxNnpemBFgVeeeqZrsskTxtvYHqrbUFAYq3g4cApL8QWQaSn",
  "key20": "2YBbV95VMzoWmGYhfjzbCwRz35ohkRT39D4umhAB3cM9MmKpvLAyLS3vrueXtFYwgZm89xAfUx6LDHEmEpZUFpMU",
  "key21": "UTyftPsT9ZsikckoPWsJQxFtZb34EGR3WRJcnoXoAhcguPtEa2rE7zhFyERRqWFc6cUyULQn54BMBJuspkVkpdG",
  "key22": "2roFdMbzvmzX8USFuRx4h1P1b7M1kFiHjktrHMzrULU55x6rGYj5KkYHMYtnL4M2dCnYkceXmL8XQnPzr4rFV2th",
  "key23": "64eN2bcnqTCpiEkindcg6Yw6ngb8gsfbBGK5P9tRLADhKnM57V9yEpwxSmXBAdgEh2ySaHrJCLCKUF8HB1qB4PKd",
  "key24": "3m8EeuLQPNBxYGmts48FXhqLrSUpFEQoRwyVGoP6ye5CvBdA8wDSiGEXDWJx95yz6yggDaRHyp7vvturHa4b1HSL",
  "key25": "3oLRgqHjsb6L4rYhcLraQiZz1gT9mK1LFQfxMtDMuRmA32tyYMcfTwaxDQRZBWXySFWrdt7kUY73q6yBwoFbdFgs",
  "key26": "URt6D3CDXvhFbhZ3AXJSJQHxe5xnAC8rNquGUoNFiQGwE5sHkmrdiRBEHjQfKdFNFHznB5b3qZTotJw2c3Rr9ZG",
  "key27": "5giTmx2oSogvrbPBAmFeBhTCEuNUAzANat4nZJXUerXSghtLAVmbtQRfQXgWUtDi1bqgfRqpc2eMnjNsFQJpuBY5",
  "key28": "3HoPydTLrA4juW5XFHhuPRprKAAYKYD9RUAYZ7jrGopTghhmfyAGpe3mSGoRNiFsb11a6k995marNt3jk4pKzf8V",
  "key29": "43hvrkvAfW3EX2wBbPZUwsr8ijq7L54yJV1CnycWeD3a61PrundyoRJHnccnENGPoq3Pzs296RpJuA8aA9y33Qqn",
  "key30": "2YoNvE3hykmHTbrzdKpyydRScUXSs1MFfPE9d4PKTxgtHqnM7dWyRuVLF98Tf7mcX7sHotkRiVUVhQiFs86DFiPC",
  "key31": "2PmgCGvfpQs5cQ1egJ4pUv71sst7f8c2YNv2kVjTUujkZXG7nNupcs3suWkiD15EmDFe2YPhCG3FWw9QvXL3rPgr",
  "key32": "jcVBvmZDYHFueGdwnAJ4WDzBPyGLRwTNDjUL8HNoh5MufKhDc3XUdvruyL2XGkugpic4WMhqPvH7dz8TNRvn7a4",
  "key33": "CzbRLvH8NWuBgqVK6G9KACthkwMAqank1xbmm253dKdrUry5zega2HrtHnuJpyp4U9DMzHXCuUaCnUn5fGhGMEV",
  "key34": "K9szVZESDhKXmF8qoMSNugdsBx93ouFMYeox2fW5YRLjVupPLzD7C824sbzrB3ZSobU5w21KbHRBR5mgneDp3WV",
  "key35": "62QsV8wp8pJusBj17rEE81v5KwXYe84hYsj7mKWEZDisyt84zaeM7wgHoFrw3rVMTPsVSUtzTnzHxxDG4GpVLxZu",
  "key36": "4wDZguLFZdHZszvDaRyzvsTEsaSkgWa2mYQ2BjTg4x2cwqYGtXWUpZq2VhXSmJy85F2VsPBnr29KT7qtrzcGtR3E",
  "key37": "5DcpukrLtamjt5sSDMVeeBd73PueDkohRTmJ1nZZ1ho2JwLbcjHm3MadU53myia3Rq32kkq8zoDm7XgYwfdYpCMC",
  "key38": "2QDrA3RvzGriJNeCivmaLv2gpY3FgC9Lpi5zQDLFx6wH4xGKb1fgaiTwLccJ4JgZv8QFKYHJTErBNT1VENiJRJ6",
  "key39": "pyJCyL5SXDFG8kBAX5ra56By2smavWsnPGpK1mcQr7uASbn2qQs4cFzY6yohnHHtxNhsHFACyvAdfmRuK5GwrgU",
  "key40": "2QTHdxB6cCFYmtvg9hgiichTCBS1e1d7uMbBhWJPVtDYMzDd59BPsVkfc2PLrNJ2MNmBjDsjorLi8sHTxgVJcPcJ",
  "key41": "24Qbs7GJCkzv3y6tPdYQ6hAqTAkbAGL6ePqueX6MZ5mUvAWyVCjaKNcJUzdMNAkCNzYfAtZonHnpmTCkt8vFf9P5"
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
