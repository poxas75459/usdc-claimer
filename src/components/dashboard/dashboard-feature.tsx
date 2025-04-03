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
    "3JtRVXPr9dPc2r4Vc6QEvLGJiwNbgiyVoMwS3A7Lh2h2XQateCTgG3DJvPDnV7UdBnvq7JqVRXLm1QEpkj9riSxW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "422FEZ41EF2Ac9hxwJjMVr3FiHy9aMznumGKhk627GTCFTn2y6bfDaYhMSkRQjSzZEWCT5aYjiGBjG7FQT1sF3MJ",
  "key1": "51saRfagZkYqXNeC1qTKNCgH4kja4ooXQFHUhsNGTggeckoKwN6rxgixcoWgFRt1XkjZFbHUQcfV6uKCWQRzusCZ",
  "key2": "Qprkg3C2DBYEBwCwBAiQ3wkXKnK9k7W6yuL9c4jsGRubdmzH2L2zz8x1sGP1uR1vMomfyNnHKtTqmQNGx8orymr",
  "key3": "57accXQdvca36KZwVimrfuNheprSP54Dkrs4ZsstjcNsG4ZaQ7vY1H91YGSMigtG8Fx2TXSgLz4xeVWr5VjrJNEu",
  "key4": "4V63qmDCqGky1YDi3Zm5PQdP3uHZwxsJojSDrUoeptHRVim9kiNQnthfA76DkcJL8pHsiwvGat9e4HytUYohavAa",
  "key5": "4f9LqzfYEJUMBmh2yUcZZTgqkLeibk8inKQ2L4Yumf5VQBztDTE6tC18M9AoLV3i3Y3m1yjSNhdvhGyUUdrVaRc4",
  "key6": "4kPUvSixL6rQWnWEioGH4gQts2jj4k6id6bHXcPBtJmerzL7XG6LByqRkRhdRYoRidL26TdWxqqNSGHUF5jNLLG5",
  "key7": "49Gb7mcbeiZap18x8Th5gDdd52qvW9vVa2ptG1hi6HjtEzuY5uSxbPEa6DXo7LH1SZk25RRwJ1GB1F2cnFw2cajr",
  "key8": "4a2K7aM6haVXsc6Y1DNEvtivnckXun5ft2X6HmrCHuRycg2Gd1rhsSsZSS1chDwfdqyd1wnWaYa8PsWgX99FHgRx",
  "key9": "4fetxsmtyyBVGFyaffBL3LfuXKWoua3DkXx5LttzpS54oNKDg4QmGUaFHNPb5bXBGKtk6UeR4G1dspXfi3hubuXD",
  "key10": "2xJgvjddAQvM16qnvMb9EPjzUTNT96VqLiqeDcfbcNPbBdFEsmnvxZtNQwWE1vDWkwPJXKScVZSDDbFkrX5Sa8Bn",
  "key11": "4ngD9R5Y1DbcJJUhL9kcNoA1J9RnP25DQ2Cm72chjABk8GzxQFiHgeSPnZZfqhadzx7afJV7uuWVqzW1ddD4gXFR",
  "key12": "5AUtEtqgtysepBk2tGsFerSdyjoVj6Q772EbAezLuEdhJDnFjomxMNwFEP46WAKj6GtBieCbQptiY3zNfQaQsTVn",
  "key13": "PSjjHrdTkjfeDiyvfGhhJv2YmRXSDNbdSNf1yeaKaFU2aM63kvHri1eRmxFJqvsa43gLjpNV9PQL6DopmdNouk2",
  "key14": "4APUBKeeSkGDBcEjFC4izwQxRGsHnQRSk6KCYHGq6Rtp38xXcNMu6jG2ZRQS18rJMFBwW8qbSwDPunK7x944ktS",
  "key15": "3mztGvD5yv7HfyU2sXKBWf7GwEhAqQBXCNdhYbbhqbRPqidNnyTdLF1dFa3MFj3LqC5PGSjPTxgSpTCRvyjjhLnp",
  "key16": "5Ho56ouLqsMJo2xTjJCN8dfXYiJHJFsajh2BuqkRN7LHE97WukPhK5Z7te1QAmdjDBYDrRLwWJxTGantXpefV8VW",
  "key17": "37FvZrkRZDynqaxmeJP4E6SLaZWKwnihHZbBBSeGXbdpdbPn7Zn7ebF3Uv4gKATnx2fZR1RpMghqE5KuRb3Gfrvu",
  "key18": "677ivwANZ7hM5AuuUMDxgDA3iA5MPUsHGXwyzqE485e45HhoBLkfosFDQpCPJdtKdgA8BTpHV6mvEoe4dm3omNwg",
  "key19": "2oxbm12wHHd39aC1pZHPuv11LaFTfFVvn6VVttjdqfAAFFG4xB8UtXGQ87TW42NxQ4ttvVAMrGGZdYNbVrWxYbsp",
  "key20": "3sxP1gACkGEgq38Jzo3bdQDkREd45X6fK2Ewy3fweM1kJp5qabtt2RCJNayECic4vuJbZsQEXJvZdqYtEVisJubC",
  "key21": "3LUW1DWaqSF6ijsrW9hBuzmoGJQk6QBwYMDaTNAFU9B1h7kTAkTPqiH1ifxMmkaFU8e4S8D4mGn5Ryuf2B4zuDTS",
  "key22": "4a9TMaDLJSXtZiKmbFrUpPx1omfYdEok7hKV4qpmjUv55i4vUdieATnKDd8zsLKeJvZhAC4W6C5oV4vfh4oCeiRv",
  "key23": "nzDzj2cE98R1h6kzt2K74rkfcRggXgTjX3sHJXBf3MXhYK6ttD8ajZzZycmMad3J7av7ZrkudyKyXv9t7sT7xsk",
  "key24": "Dx9zak47F78attpdWovPWi9i4ZdEKrzxvi9T2U7p3KScEqURFBKGb2sYUBci9N7vQxVewxcapKPyX6BovfpfFTY",
  "key25": "4BMRS2EHmQ8HqrWiid9bKEaRDo9PKjrysDw9Xqgp3GowbAGJfajAiiNtj7BEwoSi7RPvasBGdNpcHQfsJeSF6FxH",
  "key26": "4Njz991LDxZbuqhctJSCa8w9tMJuQvz9LVa58BwYKVP617GYWJRtFmCkLrzRDxAwuXufcoiGAccEV8cEK8LZwZM1",
  "key27": "4tNg3Hn68jsbrruAB2c2tWwJagYo6yD84d1dXbh89hshi5FBmtHs2Dd9qxJSvELV1df2TM9kct94BDrfgGdvkFs9",
  "key28": "66PVkSNCBgMcCNB21pX62aCYKq7299LnAq6RzC9Qi38NgWWVRnVAi7GjsKoqQ8KdE7oS493xVW5jtLLxC2P3wV2E",
  "key29": "5jsXFLK8A3WG3HsUYCLzU6NxQCgUXe7sWDmpNL1PCrq7C9fLw9ca7SEh7EYRrFF77kkFzSBQWVRyXoQNNyHfX5Jv",
  "key30": "pAg5dLPYE4zXAW1jEkPQNyRwnBXs3SHxcbsHD1cPUujXonUzC4MpZQzoeB3pgRTuW2ZPpXoxoasUB1WzZhGXv4N",
  "key31": "4zXYgmfPGz4Mp2Qhtn5zwgsgmJx11GKaNr8A8YMKoiLDQkNqD3m3X8xGzeciYtiy8gYmTHsijfkD98YLFo8KJvX",
  "key32": "4aNCTuPK2PFy4YfupW6EwQCuAXjkR7g1PTVrqHq3HGwDFKQ7yqTa3goGJMk5Toei4ceVYszixmTkZ1a9kVvgFEzK",
  "key33": "dyrh914oEazPk2qT3sxxV9G2QAdUU14VjinGwu5aVZCtMJTH1xXCGZ1jNawrZVeWJVUe9Kd7ac7CPqHvG7XkX6Y",
  "key34": "2H5eh9jTGwRYyK1hZy6WC4KU3dHh89fxeHtoGxZ3XiyqhCumnoi4n3on1jfzRCVUk5Rzk8uUK563eLWydvZybhxn",
  "key35": "3AHuqxx6GWHduBoeJA2eJT5ezoPsamCepYPqk4Y1ReXjJP7RnsiC78EWv4g3ciR1AyJk1oBdWjdxNMaAG5Bq6J99",
  "key36": "5CrS7XPw7mL4L6m9wEqaeue16mUUFY5RYPvQkeJEXwFuoN758nqi5o4eepZkx1yysyftBytb7RVfQ8fyFe7udH7w",
  "key37": "3RhSxwhbdRdfd6pAtS3Uq4u1h952uyspjgbQsX9CS7iokZGJ84GVLwtAZdSukt6YguEoq9JSgRghdkZ3unT4FbxE",
  "key38": "2krK6B9JN5z9aqFuSZ2wixKxvr7bHxN8QyGekM6ypUNPB69KFfgCrgdDAG9V3ukgQ51Rj1UGFaj5NgnWDEfdA1XF",
  "key39": "DxENPuVTLMXZsQCg966SW2YdFXiT68FGrG5oKHffNRY1b64uEu2MxKoNrCSD6S7TTpQz6dPsmw2RFYnxJVhSHYo",
  "key40": "23L6r9hMC7h2DPkpRnVRRmjWCoijaeY11QWEsjuWVCBGD7dTrgHfke5CoWYeKxqbAwdBXs98Vn5D2wfTvP7kVGgg",
  "key41": "3JJus632TS84ygjmN8L1CGgNP6mbc98rErc3WrmAuefmcrxtY1H62svoiwsrPq4LSLksvsnox8my11GteUpLpGbx",
  "key42": "5qBSzkX8nHiEWRRhx4uiEu883oBYe7DJ5Ug8fo398cToMzXRbYpbPJ7GeCBVWho3mzT766SpMUPGK28TvUKa97fh",
  "key43": "2QB1VZJGSNjavfYUWwr2GNJcrkz5K58ThsgP11ZkHhtzeYFjUVJxgCWN1eQiLKMgGF5WStDYNBGQ4HRJb5M5kmDq"
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
