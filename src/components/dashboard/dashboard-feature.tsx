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
    "29WH4Lu4toMQZ29msJksw1DRcTRVK7FzR5UPanKVirHeLdq9689Cv2zBvKWeqLWDGoKfWoPuiMpaTh49xSx3VEPh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2m3eA4iUr3hopDn3PkAEzZUiDvKWvowXS2eG2d5JqeSjqVVf5hRmRiLdGMkHbsMFt7jaZN4jHFkDjRgTyYosCws8",
  "key1": "579GyeeJT8v99CuRYuoq9PFy4R1s15UKfyZLUcKkLZfoBHiErQpRFA5JVBaYKX521vq4AxcEp1bWZWmXzybejZx1",
  "key2": "KnkuuHp2myuDX4vp22UwhXLk3TqpN5EsjT4F9CfQYjAaHzQAUwirgUNUiwqqxs21E4eiv7CzCWnu58xJExV1gSw",
  "key3": "2E47aENJenLnoT1WC9QScTZUWKM47kqQaSXMHgCbRWRoyviKWbwE2zyEU6pKMSkydXMuQPTRPZ4khtfyfmUQvM5M",
  "key4": "2H6ATkyvjjRjayF7FGtpofVsrm2SvKQGDTibFMienNpBkk2Fb94j2Kmxyy6LMHMDgrHPb5TCVFEsfv7fE5oEW2q7",
  "key5": "5QbdGRjU35Emnbr7SPTQqTWn8RkDocYQtVPntBXa4pxaGEJ5pNA1KH3ULprQk7xVFEtTcKodkAxYPKjfaD215XUj",
  "key6": "4LGqjSBP6gwbFW8UrmZWafgvy5nqenFNZWKTNqW4FuzpePxL1z4XAF1Nmm7a5tp6BkYrF2FLfEwXgsdRzzCCtgXV",
  "key7": "3gBhyLbh8xBAWg9EVTZDCJb5mCDndgiQkL4P8e9xssG2tJM9Ddk4dsg5GpYVhuW1c4fGwXtKzYre4oB34yTWgbuo",
  "key8": "4T2mi47qY3A524zTnrLzCq27g2dVMaqxVYMhjxxWrC57SugmxfcNfyD6NLr8sHP5i36qTiSFMpaaK7L5RUt8vadF",
  "key9": "3XCM3hzkoYQzh3KCcSUQN3qE1uGGfLb98oSs6DS1CPEA1ATU7yQw8JZattuL7hyUYEZrV9vLrzAVg2YjtxtDWy8J",
  "key10": "3sM1GDYg5q2KQ8gTsv9jHNmcLC7SGKw3DoHrG7nZbPBB1XLBWNzWFXCNSRNPrHMNyuQddCt9H1NK1nUzDMhUnpZs",
  "key11": "22kwFTo7spKo1BTWzygyydUPMKs8ywo46ba7cKmcjELimTUD3w7BVcqH2Ess5LpuoiqvkVzgv3c7uGnTHvrLqcQ4",
  "key12": "5hVXhcU2guDj2RkSVNawftNXHwkpbErE7e6jafMGdW3oTvJ4zhvizbUL2BJZniRtZGEx3Jg4ww76M1YYzbGbD38h",
  "key13": "27XQTnEbkSacn5XN4QmL8jsoWbLoZ1sLoNJwcRj8XLKz3QPgiF3gBcApBGb2WRpQqjctiBoTQFWBYZbzpUpYebYR",
  "key14": "5uFFRQueYXM6mmWCrUvGcYz6GahdmtZ9nhJd5dpvXUSAq5bSzZgybp5C6awmus3ejtwPGnYFEHjMi8QU7zHwQWms",
  "key15": "2w2enVB62LUTQYQxyfKPPzEgWakQf3NpVQsC49DGDkjhoCk3woDqdhuaexFiFjPEDAisFPX2p4zkYxbBLcNEPey2",
  "key16": "2YDD6BAvkmbj3gunnETwX8KdzZXr5DX3kVU669EwEcKQXskS8tAFgeWQ8Aex9zt437gbcGW8yJ258cibYzCFbTR5",
  "key17": "4rVBnwWRbHHrS5Wp5RLeit7FXUmFJKoyaS1hpa6QgiviFJNYDi6XEtX9vnAPVjV64dQogtA61mivPeLvK3Pt2qhw",
  "key18": "4PY4UkvqpvVpdyrjwc8wL99FTvJj6qcZzsBxnc4wrjoMah8RW48KvCX2AfSeDvGQQn6qkgDbN1yLhV2LhxixH3c1",
  "key19": "5515xN5qaCtTViNteK5A2K1SCj3KyehP7t86LrDViSamShye2fikAjNQuMb8a3pyQVp8cUwkCbokH1FwzXw8CdYr",
  "key20": "5Ak8PYECmBs9ETjDBBcEykrZnyrx7bVyMnCbA3dJupNA53JNZs7MBEMkMvMzvBTbom369W8TbtaTuuUKHVzmSRGG",
  "key21": "4yLXPXPTLQwxeVCJ5KdRkX8a5zRuh3GnWsQaWNy48qPfWYcsyneg7hnDe2mBDdhnx1SPujBHkTB5R76a34bZKRyU",
  "key22": "wJa5XJzb5UrE642xo2c74AwxR7Dh6mqmmGcWvnBFuSTGbnKyvd6NhR9A6dN6DtkQs3wxTjYBsQDUqms44p3xs7z",
  "key23": "4ZfeayjEkP58AYmYRYRwhUSp6Vgp9WjstfHHrrQpD5m2qkzVPxWyApgFDKfhUJsFqUtJQHeKf9MafdRk75UgnE2B",
  "key24": "2tvTDPNpcyzKDbzJyat6QaW6acBvm1ReDBWzVxQYav4bMkVRdhqvGTU4tzRKrNbXpoMa33zy77GC8nYUR5wds24X",
  "key25": "euN1ba217eANTnkURguB61US1JiJSNeg5CrDLLCr5F9QzdBJopcE2CzhRwM4swTUfJTriwGEgCobiMPsFvukt1h",
  "key26": "5f34mkumPpawuZepqdZEGwb2gxNwSjJVe9YE3KmptFMqbQCqNBoQ9Cyj6mmU3Js6z3AMmYRBoagqiMZFEGLHZ9nz",
  "key27": "42ttgpTo2oEiUZp3Wvxo7R9bktEzqaBWHtWouBXtqvbvapTBnEwH4dGK5Reid7eQxbA7uwv7X6DJmvmVJQ4pY8xp",
  "key28": "6JkHefKQyVpoy1mrY4eBE5TAPnm3iAENioRMufHZY9n4ZXr9KKsuArJtbQSUKgcUZkJAKH3fh4Bvh6nmbxQuDE1",
  "key29": "2ARJctNov3KDiR6MrhfV2RujGN8iFQks57GHu2xcPEbZK5kC2ZnwVwC8NDTzYmRXaL5g9BeA6QDyVu8AFfuncSM6",
  "key30": "2svGUDuaJmxkZc33U4HYPty77PcsqUJAvWGzK4hmNrZwfL4e2gg9X7tZFmEqBhJz9jjfdfz2s4x4PVSRmSyn8aHm",
  "key31": "peacc9mLoqyp7XiFN78iZopUPhthSLXeZ4WpG79FRakhEvJNs1uUYxHmpi2qJuQMVzBK8LSBhmiYsqAKUvbTMgB",
  "key32": "tnm7CbY3JFi7hkUtUSZptiLENzkhaCexVSFQnFCwv4X5hyUFUG9HVzM1tCfTpzdAW74wZSgvTBa54mHK2ki3xDJ",
  "key33": "NQ6xYNHowd8PRrRWdgn2CF9SKrseVgRjfGFR1XYja1TXPTrs42q8e16L8AvVXHpBCp2PVugChZ8X36fmj6g6eGF",
  "key34": "ia492KvwERtMgE4MvVr4mE1cRNPipTWJRF3GwysfXn6PMQ6DKvq5T1taQRhyoshSqX5jJrCZ1tioY6S7b1bz5td",
  "key35": "3aeqqKyG9r9nmxkBqwt1NnvEMHSePyMyT2xAZ9WVrYwah1Y7QwJvY3sZuf7RzNbg1BL7nAVKbWvx4beADQvqGExE",
  "key36": "3338BBd2MJreZfd6Y4LJ8sa7dRVjQRdp1pwBJby177t64PxS98GuvznY9T8fQrMxKiAnowg7gqFSAVXv2T16v8ZR",
  "key37": "3VsQ1XHnKk8TMUZd9AWHh4PsgErTb6Hvod8XYoRoXNF8VRgkgoZ3Kkkh2FgQgkd5fG4inDEGFmK3ouHwPjsYd87c",
  "key38": "2GbTkqLA69SgnUAvKFMfE6Y2tX5qQ89XkjAF86Wp2X2DJhvW1DFVs1T5SByZ5QRBZvkzBV5XkrfCJH5bqqsLMCu2",
  "key39": "2r8oAreBJdMbiPmQKcTovHncp85jceTz3KyAihSzxUVMopnFqmNhFfFx1FCrAmbmEFavzdy5JrHvCXKWYQPUPMNn",
  "key40": "5eRueKq8q7kZ4BettfkoCfHP7KygW9S5BgHYQrsT19QwQsdKLofzDQR9f8Kiq8myorYQqAh7Ls4R9A5PdtaZPdsW",
  "key41": "jbQ5iiaL8D9rwXaahDioqMFmzF8HHA4wdg3Mc1XHpQeeVyqLpxzG2pxidVmzQFgV7MPT5v8sfYVyKZggtRtvznL"
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
