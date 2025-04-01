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
    "3P3RrrmaSXoH8eE7moQcPTSLbpav2HkJuFNhwdXEu7tpFNnVRSZyucVy2o3hNyij2oCffUnLhmgWtreQRHdgWQbp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Zzs2hv2gxDHdTuFvwa1FmXoRYtHz7P98DSJ1WSBpUrahW5dpEwRUkb6JhdS2bk4FR7giXR4M4iic6a9vWtc3SRj",
  "key1": "57Lu8EPL25AUNVGNEXtQYyzHCFjSsppcewTBLcNPnbGLzPAvSqHYtXzoNQeHdzaJW1fEFmop17QSsE73xj8MrByW",
  "key2": "45YNcmyzq4BDPTngtcNhApVLuhsnC1ga57ijyc5tVvMt4HjdvtWJLRePEdiToQJgnW9U5VyQQthLZHniiePQB7FY",
  "key3": "3rKVemNyF3pGBGvqhgaKaKrEnh5gThGoiPfTana3EnqQ18LAmL2t8ypxteUyuUbBG4GDg46WF77G3eJdjUxmoefz",
  "key4": "4yWTvaATbwuLdzH5KQ2iYh31AtbEzPexPkz52LUmZvXXMxriG7DcLHnjifWcMMLGPNgLbxomEtEzfXUJNzZonRcu",
  "key5": "3ESpdQx9KFo9BnLjLDDX1i14jyBGqUZqgP84Mv88EnoKQJcR5xcBPQAZfoCBRcaNieyRTki1tcg9yaQvZY7JhqS1",
  "key6": "2mNnff1zakLRJF36TuW63cwXZqjNXgpaGVhXy9Dv667mW86rXxweaRAvukGs3FzQkwamhTQDm4HaJjAoKypHPX8i",
  "key7": "3n9UhoccPiFoJYyaY459PoQ4swqiwUoMk7ykv1u5st7VmEe3qU1Yu45DogaMYFnox6Kg45Y17eaXXSNMVqCmLMSn",
  "key8": "5daaKLYhcVuir8enKKuQeMKTU33xhHqnK5wNdHgoiDY4g3XF7ut89p23rGbj8Vt4XvyLdafTekDYaqtkrEa5ZZHL",
  "key9": "4U9gzJiMpeGjYRPtxMUF6fX4AqeRncGyCxf4hXWtqkWCALiTrYwqxrUhpzsPsPb2kmCuQ6DHa2dLSR6s2KqUCvjc",
  "key10": "2QqhZc7wVZMoszHzvUUhSWknznhUVZoJ1rAYo54fXse5u19uGYXFTW8bRfsihtSTtErMjySCKGhbyo6zeEE32QNX",
  "key11": "3XcrBWtw29REJEjaHhrGy4XNbmgkTnPge742oLqymt1WkVkTfauTHd2rDP8MKvCYaeHV62Q583bgLtPebRWpZF87",
  "key12": "5ia8vFHLLnUoSMK9bxJADkzcNLgUM6eBSAWZww8X991UmnB78aBVNmLDPinkYYC64XaqwraweBjwM8NaZYfHres8",
  "key13": "4VokuZU8KnuJiZ7p5jFLVsYjSSQAPzA8SoS5orZSCRyYUtfucxURJcEmRQWkAxXkvYAFBexDDEydJZAVPzU8rqDn",
  "key14": "4LXcDfoYLLvoyt1kWfzsr2WTxeAWZch9uWM8dpeVVthZ6xoymBzeBVfhq1MUyveHcspRG5kiYeS9VqnCWzQABCwT",
  "key15": "ig92fYDuntgS3VA7mUjApw7Rws7VN96GbkYKoEwcRTuBcPFysYaCMgxhMEoPq3MekpRroPsQZtTLEcLm97Jqr6L",
  "key16": "4tiq5YMc8B7C8NVkBnztoJxg5RWNtTpGd1CHT8MQrUreeRtw5bgWm4aUMx7wqb7D8EHD9fsFR37Wcd2sLfUznzbf",
  "key17": "2dcFfJ1wgpEyQsAud37V3wRwdRhoBRhqkGp1L2CozVaivATE9q84piiUuCafCWADzJqqinYiVRpXKPfwEZ84oWP3",
  "key18": "2v6ZcTbBH828rRxHVpB6oeavANughYBLdvAY1agAcdcZSY4tXcUR5acmBRPbWxKDydxLUGnNER9CzT7Kjfd6zCHS",
  "key19": "8cNAn4aYPnNV5g51T7fzfsmPyiy9JQo2KoSE6jjpWszbd8WppEpoZ4vpF1GphSTRT8zR9zjSXqfVU6fcjh2vNvg",
  "key20": "4sFfXRZuYomPYv4v2ZX3MwkP5ca7fnkxTPnDvNwzD9nzHPeodimCC52oPkRYwvaoyL6N585R9sKmGD5xTPAyVQXZ",
  "key21": "2UPfGwGy3yaovr97wf1WFtyGdJayq1kJcEqQ46GfWwFTqHFijUKm8Coq51PFnsBiwSZ99WUgUw4EkhYRoADPTUV5",
  "key22": "27T5B8EWgUCtbh8CbwPxX8gjnQdGZDCcYbjRXPx1qqbSJQkQYTMYdNuCjtdCjqHUUhGFDVeFamU1Yfd1oQ7PgNc7",
  "key23": "53hxLJFbBYtZgKys9njzzY8h83RsKjhgm5Mhejxh8NKoXVNHnjCALDKhxQdpFWK8axScJ21WP3QQmVxZe2WLD8Uq",
  "key24": "27zfmDoqoRwEbJ6QDgpvbRbqtpHhsVRKdWFHKPyjPuo2rFKiPGxLAiKZuXPCimC81btgyaDxY9qevNCiCLkMYVMw",
  "key25": "5AEdQbuxymZLgK3diqYyqZ4VPKu5wG2aznHX1hwF5Xr8xZNnpaopzi6xT3zfxJNjMmeRFMQNMXw3rRhfyXVqoHFs",
  "key26": "29LQJ4x4i2kQ5TFcaim5azf5WE24Yi4b6GinUUpFsv3ADcb87W7XC5cbjP9bGvdNNbhLuv3SxSNgws5jM47N3hqe",
  "key27": "3LETs4f49QZJe752y2TeJ6GpYZdGFuaATaU5veFGyTxTGRNGHJ3WLHHYdotZqe53DbhSNd3d3pp2rYeRE1FV2wxh",
  "key28": "4pVViJ6ZWAZ8eF7Ux6sR5Tkaw4nwm96wrAXYzF7TES5aP3bcj9EPKkpsUt8Qx2FJtHNgnD4HDT59XvBkzpy3BdKR",
  "key29": "4mP2YUco3YQ75JfL2WkqaLA1K5TdKuqambHLGQ7Ct66V99YwZLgZHXJmotPWgkc9PnBwWC87WGBtkYsZEpALJjNM",
  "key30": "yCZ1rYDqJHDLbUCNh5GaMLz4Y9qmioWn6MHFQ3Wo7rnw4ErHAAz9dcz5UMc4CQPVXENg5ZQvc3bhEfeMmno2mFr",
  "key31": "4yVhTkvgFG9zYo7KX9Qq7CSfYH7ydy1vGJjuX3rhLNZgg28peXfaPgPYEoBLPniiVr8kpVHhLEm4tF2LuPjcSWV3",
  "key32": "5ynmbidi3RZKGiXCqg2ebgAJf8wSt7BRu1M99yts8wisirUkzb5fwdtgNp2tte67pWhAVoSMwSusXXQMiC5hco69",
  "key33": "4ScJt4faRKwc5QNdrzkgm4tbYbmmxjnshjMH1Dncbom1wKTtdkvJWxJyZXAan485sBusgQwmvbMwudu8N3u58cDV",
  "key34": "R8u6D9hEu2meovKhcgicUpFQvmXrsBACkg84kVrpyDPc6qsptobvHd8vssdKUK9gesQqbn9ffMFgYHW7FUcwauE",
  "key35": "2eAAa7MbzFuA4XKhTtZQdPBP8gLL1aKzsmSe5WywS7csWH8eD18c3oB4ALjnVSu4S8Sq2QspSU8WXpy4AE2Q9vBZ",
  "key36": "66ezpHmorqwu3n3TLg4EVMUJ96svuKUww7Q53vc5U2vXxRKsMhUnTxctjgwrHmsbtfz96Z6qccNZsZBmZ9YdRQTz",
  "key37": "gboVu8MGtR5HBVH6qTitHU6vKRCbZQo4BNikW2kTurGCRZbJcXF6TEhfNWrVkX5BbNtX43iM8f5jz3oqxJrTUHk",
  "key38": "6N1CuBuMwpKFHJUE82YHaHkLdEk3so24BQP3bfTitC2kbQfci4e6VFbKTpTpRZ6GuKvwwsaoZsRS5xedg4iDhie",
  "key39": "32PLitJ6baF3mTPgwCjADyqnQLHR1w42vad7JHappApJmRQepXRDvt1Kw28C7ggYDqECiGqunJf4gKxpPPHydK27",
  "key40": "2aDku7jjwcqMx3aQ4H7TJ8VgUvmgsfDynoQ4pStw3HfVNq9VKsrbAnLWRrPntQGcEsqhSDHySfDPNtPkVt26ffhN",
  "key41": "326DUJtk2YzwZkCfXmirKDeCmkk9Q3j9o7fbNHMj5ETPgCzLeqafn949Kyn6ewr3VkJNSy1PPYZpXs9Ss4n4aMUE",
  "key42": "44HTwy113fwcWKuXYKBbcMjqrzcvYcsg4ZDs5oLfJpRx7rAueqNJWJN3DhfDbx1T9km6XkjrJX47UFJiqS9LRZUn"
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
