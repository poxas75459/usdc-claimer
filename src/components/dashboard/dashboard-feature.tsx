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
    "3BTC6DeaggrNUey2CT8fuscSAVKhBXYzu7xW8ySeGfFUnGEABceHZujSLkWKwqpF8cBmt9vt6BbJ7MJqFCCD4EkX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Y8c3W7YgEzx9MLSTumu9T2saBkrsSJ39yUsB3opn2nSruioRFdPLovEc7Vj4VukMH3SFk8LxkznLZQMoSovEifB",
  "key1": "3sUyVMXFqtJhcEJq6DkQkJsopSVm5nMDqhaJnamY1FUby3VwPdhqFNkQRBgKWcfSj4cW3D5nixSMBYTXzqMNsC9Y",
  "key2": "igbZmFoUk6wL5zHURXgUSg3jDpwurfnaMGrCotLaun1pHG15fosQkxcBwm3bB7NKcxeEzPyxhJHiEqPxPYHnSCa",
  "key3": "58UdV4JWMHFyyc4DnTXd4W8fhG9tmnyH6DS1fnxw2fbxhNhvEZQtkYaJ9SuaoukkFtJkBYNRF6gDuKN9j6mBAAHw",
  "key4": "64ACKRoiF1J3R4JoqV14CWBenvF8j9jNZ6gLvV6u8sRCvfL4uErPkV3sqB4HtgFQBQUXdbuDwtXHxTGeg68Vjawd",
  "key5": "5AC7QoWVdfip2mxgLAAjpnLsQdQDGgdL1eytYKDNHdbSmAee3kTmnZWhvrK4CHaz7aSD48PPzTr4QVrvgLsxU9fL",
  "key6": "kqSE2iJ96g8Ecjr2kPgnWZb43XcX59kfxtg698rNuxZ7ibTNjHYkGCXvTamGpJ7SxkAi94msh1ukxqJWBSV6gBx",
  "key7": "2pX1g6f3xs8b7qhQA3x6UxXQKFssPiEMQHjCczuc7nQb4K5ckJGDoAqbmXRNchxJ3ATF8vKpjLF6MP136B225zb4",
  "key8": "2MNCh1bSUdhd3avYCBN3yvDmMQD6weX8fQ7z9cdcfHXgHRDsrupdVCuvH56H4x3QaWafG1stNZ6idp1QdkNo3Evm",
  "key9": "4u2beAjkuBT4Ubsqu19TjdpgbxTMAdPK3BeikguJADuztEk95uPs5zy98NSnvcyWB6dg3ThuZDUfd6ef9VipJXZ8",
  "key10": "2cMjqVFLE34QofnoDc5bm9ZUF51MFYvauTFzNxV7qeKSzcjqULzKzJDMjew94FaPZZbeVKNZ5iKAqedfMZH3qCoZ",
  "key11": "6A1jiLxH2Ks9kurLZMmUpyDTfVehyaiEXPkWC1SdTirDTZpph18dV8zAHeXKzYxWcFpENGEAMafHmvQ38mz8n9z",
  "key12": "L35TBEQSkhVMXYXk2V2L3mzEkJst6atn7jmFq9zTk5opssVwAJ1mkeLqqEzyqaUPZzY2VtBJRyqSYrmUm8kVGUh",
  "key13": "2YutE3innikeKmyXDx2QQqxWkDcczXoLgZFiDQai76gTWPvae8cUt9xy2ftdaEfhh6a3jbrTaAfC7FheJnRU4a5Q",
  "key14": "aihQXhg26CMDPGDzrcPWwfWrc4A1397VeTnQnKdCaADvecxcDok3DpgGyGLjSPFzJe15tHES3ZLv4ryc8yRuev8",
  "key15": "2RzzWPfpBWWkfJqcsfsVi1dgJ51h11uxgFKCeb5eeMhFJ8cPXk9Qx24DkJHdqxZgLumrVW9wxkoJLWn83SoWdRaY",
  "key16": "3pe85C6gRkYPvb7YF3p4D6SZTTYFrTLs5N7pE7RDiAgmsbgzGVeHt6iyVixie31xVB6EXyxHNjgq3sHP3gMMXZ1z",
  "key17": "2n75xZNvUEMETzhxGHK5V9Q1ajHzocSp5wAdDsALGQM1Rs4VdJUwQUz3N6nRczy2D61U4FJdNkhyzAxvkeXkvtVW",
  "key18": "2Cc52nxPwrfPJrUcaHgPF3jSDZF1VBJV38wPDxJfa3BNWWCbPbgeQpPv15Eb6sBX39VWfx8ASqXKv5XriVeLLNNN",
  "key19": "5nFLcLkyz9Cv59gtCfgpE6v4FmJFkCKiQAZgBkpyXsTR2smzTco6dG1AyTwEtKoKVNubjXYpsY7vhpTRndhochRK",
  "key20": "4tJMmePFsNMQ3JMHJy2zf7thYePB7QJUoMskFZmj9qjAXZBENy8C7qLUWVUikog4Ya3YxLSL4c5YrYhxT6eqxM1k",
  "key21": "daGBrKGBhYXpmRiB3CUh1h2Buy8E2ZuajtcyfE4fTx5j2oLqFzMrwPwcxkTvNdqeFdbHYafGyFSuBsX5r4PTQuK",
  "key22": "qCjL2dXs6Fs3Gy7Cc5duqDJ7smHmRmcNi5GRAYoJx5LEeMzgBnDcuRWCnfu2Q9q9eTAMqkEs6w48fciTTJVoLQe",
  "key23": "sAvStZW9ZomALgMSFdZUnmKfoHdFUm9BAynkBycQBauF5cUfxdxQ5bfFpqTMwpNktA7HCCGKEL9gkh3UcLz83Ce",
  "key24": "5jUBtockTjue9PG9bjuKxzq5UhLUr8ai25mE95SHQLggfqLSNu3owJiBzvmVVUj8U6dqb8XLJF5rhvyuN3eo4Kb4",
  "key25": "nPoaYe8vKeM4uTYbeMyhUHowc5TjCgNCWdsqEnjXMwyqbHgkMrTM2SaNjARddMfvCSJqKQvurxF8TT7LSoHrMXD",
  "key26": "3ucnxD7bRjyX6e9mDPbXUkqqPXA8ZcKR5stueEyaueK9mYKEmAPh7w6EQaYzydXE9FWWWq33ekXTKT9Nsyv82r9p",
  "key27": "3ZacuHdmECSr1Sp7wsozvKp3MvEZZcUNuuW3iw4MWhCi7dNpTswYXjLf2vc1LUhQVbJsuSAVQG9FVn3tHbYnTVZV",
  "key28": "45qHTpknDAYaWwnS77NVLJ7yBkpm1FRuk7uoPHEgcJrHgHPabf951V4AD1QHBfTSFH2SFveseZHWV1bn91vF9n4d",
  "key29": "3TeS6QTSo2oEH8frimHJS5MoFmGUwKNGmtmkowUCAZfp9hsys5NKe78UBvYVeA6x7PHfgtVBCSfWaEtP8TV3ZK1u",
  "key30": "5jd32yNgrGKDSZvZQ4zEMyhyzjBa2FRgaaFiw2iwdXrSWVRuFGNu4kAKSLS2vDxFPmFUWTZ2GqJU3BuG5mLwRyVf",
  "key31": "PBZe5DMznQpxyaWDSe9g7ShLjiumrF98bdq3yms4f5K2wWCJ6yQR6mTybruu2ypbx5KrdMJewuijuJjv3DFEg2F",
  "key32": "3eEBD39eVexHSW2YTvs2fZYoEutzReBVcsgCBkVpFvVEhfQR934mcJLkT6yPvLZDAxjDqJAttApgjCfNBCwr9XfC"
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
