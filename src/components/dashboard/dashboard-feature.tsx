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
    "23iwfRi3icWZa7yjxjL7bhztwM7fKiCj1kYdZsSnD966rh42LkTQJCbj2hjH528Ta93wB3B7BoU5uLoi1FdFnhQB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TveXD8UMPemmEBQQJexrdw44KinXkMpDVTSGYzvm3ubGcoLhZQJsHWU1kq1Np5bvdBQGLJomiJtMWsdVjBB7y2q",
  "key1": "33jEm7KziSwggjh1tb5U3iSXrcycJk9Pjdj55hpyoiKEWKKwYvSoTq5u3mqyqPhybJTDrzJuTVkSvb72jF799qcJ",
  "key2": "4EHxTJ2E5reQvQCHRSq6eW35jEY7tcB27Tqwwj6yozLvZsVzu4J7SN1sMsPo4W9ZaRnCvLSrmJaZ3XP7iNoR8krr",
  "key3": "2JbU1nZuDN9Ehkt9mnyyyXxeC6evTAPeLg2VdjDGpPqgVdeQV7w4Nw5KxbdPVXUCJUv7DHji71SGWhPNwQoKfTft",
  "key4": "5EFjtNBgUcSzc7x28h17HzUv2jsi9RzU3G2bCYxfUSM4TFktfMmJeVSE8o69BUQ6Zh2Vk1FdEHBVWagdUzPqMrLH",
  "key5": "2NgQf3J272mDZQR4L3tEDVvUTby9trkXTerGsyXY9kUPaxurtdgg8emGkcqm5FicCqBCH26B97o6gT47rCodugYf",
  "key6": "5HraNink4TiwqrExRMNNMopEWpnD6hq7YDXrFMNeqsVaEHWa5VoJoKDstcsbokvGDwhPY9sRiWAZ7caHSyce8X2w",
  "key7": "4uFKRHpNNniksrCAGnZckavr7EBXm8beX4gq5UDGgit7agoZvGtj5nnHeMVWtr3K2BzTv5gjsdZe28UPXto1Xyyq",
  "key8": "2Mtpo4aETWNoHMfRLudgqSxnZwkM3KmB6Rz2e8SGir4KwXP1U4fu5eLVDtX7P1315TnExEQGL7bMLLZZC3oE6vHj",
  "key9": "4bpeevJADuMWQy9gp9Nq6itrw8W1ZYsq1gY8VzQdUFkkY79ZmpdQqavw22wwDjBhZfYx6aUSnoreV1tfFwz7SBNp",
  "key10": "512tNS7utehpcmw97nYw8Z5dJ28DeFD6ANmtE8i2xjziMZM6THLaYSEy3rVD221gFR58yMoW5C1yTMaR5kiy2Fzh",
  "key11": "2X6YkGgwvTPN286PrK2wTWqETyCbPZ7fba4ejzKMLe9bVWr948Box8Q5Sia5DZtoH6aTKcS35YWuvPL7bTa6qjg1",
  "key12": "g1CA85GdoD2CHyLRVKTiB6cLxhGZxCrivjv1ZiEnoJz1KX2AXS2CpdgkmepViTEfqCLNuyiirsbYEeBgWjfEVnY",
  "key13": "4Y6BSq5Ff99cpviTwFSQaqwgR16fM8UxMaALPD8Xjoo9cwnMNT7XG4EJVEFVTL8X5GyXmQMaCFhSMvRAaSutWUdq",
  "key14": "3Xvc2omcR1Wdsrfp12QmPQpHe6k5N2oAvoPZVjnKgxT4AiSjD918d6Jsipk3MYVVUWR1FcsWQ1rWAhjQ6gEGnQpL",
  "key15": "5JqoaoVpfdwU6L6iiA4DLRdLhJpXSLZUrWG6CzchT6xeo2ZnSCX3oRreQdkuNs9w2ThY8G7xvtFNKSDY61Y7W92S",
  "key16": "2PjSbP3d6i9xgLnXoSSdsBEnRQN4NAX2QkDDeh3ddgsC5LbDxmSs3rbpbGDU8oB3vdDqqvEYKuPo13eKCwq9ZYSP",
  "key17": "4W9UZkVmJASyVuMkB2z2bBhaGK8bVbQxZ3cM8Vq79UAmcdRJdGwb3uQF3ULxopMj3s721zxj3Wv8dYXSd1WQCjM8",
  "key18": "3iVn4MvJZGUPe8emmzpe755QNPbDddjq1aUtHixpjM62khiTA8JdNUZqPEXRVv4CXQscs3nRgWC8vQnrsHRy8Uhg",
  "key19": "3g1fDRxVyEuCReFstDGq38J39CcP5SV3gk1kdtvVKtGPaQZxdzzpm7NdVXFnXUaopC8f1B3euzTKV2f9wBEr85wv",
  "key20": "4E6UYU9RvpBCM1u86V5d2K8yjoXVjAoEbYQFT67w1mnPC7DDYTmGk4BQXChCRAJXSMvhFXeFtQw4pe5y2aMqNmC1",
  "key21": "2J3RxtNUpnZ7xLnAxtqihu3NSPGLrB7XV9c3Pu1ximk1c5r5Uyn6T4vJHCjw2kcuroRYSj9wjLKkQTKZT6FsVtXL",
  "key22": "hqUCkEau96sV8119ZQFWqJddfZ9dDYjgF55VcyzZB5CQHLGoZo6JHfAzECq4sUnJnNsjUawuG5dRA7gAefrkj7F",
  "key23": "5S2GV913ookDJBUjf9kpVSJnw5GFxBks937Wo684U7DCBzvqt7zYMamK3XmCCEspMuhU2pgsfpZsq1YqMiRTwDZG",
  "key24": "3bM7uUBx17fgZEA3zJEj1e1RUv9rDLnspZ8vx4RH2NLY9QUYKD5DjuRHsa1RTT3zVsPHkQiv3iXpn9CD6uV2ZzRr",
  "key25": "55uDqWeBVb4i5qPhA7Fiaz2AqVaNHovTRGMr5bjkwX2Pj4PqSGeaJ83Ekf9SoHx22RRUNgQqBza8uosfDqrLC8kv",
  "key26": "3oCUsEXpbgMnkeM24LhDFw7xiz2uzeJ1ZyM7RCkuSQ6NtMmDEfU31Kho69uziZ31d9e3M2yaB3gcuXEa76kBtPtz",
  "key27": "29r4NzQiwqEM63cU298UTSb3AGKdUUyREEkgFUsUaRnaJfXmfw7HemAScYP9AokKJJXXxTWTzCEfzUnePiySGPA2",
  "key28": "3nrDZHzEBgGemATg4hnbLJvR94T7txw1icNLAr2ZnuSen7gjXTPSPv2hNccLRVm9cfFtyps1TFcKP4FogU5KTrXp",
  "key29": "2mC4H1nw4dk89c2uSLGdnJeX8jzeGMKFZiycAmgukCGTKELCdfixdgSKuFMR2XGCzAet5MvR3ZALkZZi4kTjuEDD",
  "key30": "67E5pV2XSbVEERaoVKiRFkZZUaXovkJDPyZDGGzVaEftaM7gcknNBAfrZ4Ut5p2pp2raKvdTKF6HpRwsJyGpUBcg",
  "key31": "VdDMpVUJLJ5JNeQippK7yrnPVyzH1SZQji1QmVEenrMtHUiSvYfjUbM2DnwCyfQeXdHZF5Vkze1KsEoUjGeyF3o",
  "key32": "5NQJmd7CkmqGCE2KTdNjuFnGcRBuoTwP3VFnmBUyPaTqbdFP8QmaQasqufM8BGMS4e279jSGdZxyVcda5EoXGNKE",
  "key33": "SVya1PivhVAckWBYHpvLQUYzkaVuYXLii7kLowMuTGG3cen4cxPjjekVG1brsM5PjyKFT1AFf8vCMNcDa6YDYUE",
  "key34": "61JNBYmWXwC31gJU4ct2gm1KHSBVZew7XxxGHcxUjLs9oKYpXsirdk75hW9e2f3Qj4JuNfM3iPmQucB4hiNuQoVG",
  "key35": "3BSrXmw3syqNJ4gP86BpZPd3jZNLPVF2ygf73k97sbQB4HxjH7JeJgg6eWt9QJit5HoUpiSnetWxrQVd7e3Fdx55",
  "key36": "5Jjsm2L3oH32tEKW3dShZGNbZqoGqYaG1Rs4xXeCrmAH8TucDEc8tMHQqNzPTED1yAgaYi3HYbH5gZ7UMWLUqDza",
  "key37": "3pNstnW6aqjF48Y7XdH1qFqxsU2EZs1RR3oBYS3WBReBtLYemuGJbBturNGtz9CcZAEnssHa2KkHSWMBPkxWCXPn",
  "key38": "iFMVDbsboFacHRgToWCDrGVghEwSdmXZfM6Gjt1DM26d6JiCYqxixrjXfG5yz3SKbz1cprzw1cPZas54iHv6X7e",
  "key39": "rRbPtRwxkVFLRYSg2DQmmYNN6gStvusNDVKSsU1nNfuKJXhUdp1z5uXRv8X557rG37ZDZeDhKLKNjcXE3VPMsRJ"
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
