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
    "2kt7XPoPvY6CoJmmbjQFtyev3pxaKjvZ92URDNNxBjXm3z9JRTcBJzoCy4t6RYQSxccr2kbeevRCWY7SHjVrV6RT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Eh2c1dFGs7zuebx6AWgAox3v4JXUEuneYSxDQ4RZgGWpMZbHqUjKHrReMCnnA3o29hmXfYbuV85NCepNWwZZSnU",
  "key1": "2BnVGzMxFKhd8NZY4RhpymTNaCZbRF7btAomUDvQXkN13mJR95SL1jwjm5htaxTgCrxfPJUuVwomdqzvrjXfvumC",
  "key2": "3ooqwCwmq7ysrzSxcVn4Ts6s1cGEZAEsUqX8s4NZa7ADYBv9Rdei3npPnt4BiADkTLGYUjS85UTUugMRizG9A8rE",
  "key3": "4LCTuuyxJrcKj4DDyvG52bZvd9WmguBDhTiqGo8gNNMg2xVpmo3pmbxwf2errrRoPGY5E21nGcPp2ZL8aZ6e8Rs9",
  "key4": "5JT1hhFnj6SRY9cTxq6YovvfDqgYZcpFxSjCjECeH6j6sDMD4Efon51yLpiFjRiojGQqkGQ2sNPgu7R21gVspW9T",
  "key5": "5QxXf5iqQaiEqS4REJaqt2dZ4JrLgCKqwyiLaV2SbXc8DZLSh5SvPQbFgWA2Cz8uGcQbuFQKxgAZeWarxCtxiJiE",
  "key6": "2LXER5m5Xc1rBwdRFDBR97VnGhrTyJwRRiK1TWzufb4MBj2eJFZiijKmfccgeRNvHUJ2PTFk1Lo67KASf36RC7dK",
  "key7": "3wEJTjivBwuqZV9L1bovJxYnacvzC2a6g1F4aVryvQBBQxQc7BQb9ZxKyZnQWMxhkG3md6tZXW21Rp55YDAPrRN3",
  "key8": "35p4JdcwT7ChZVH5An17t6NGA77aBBTjioFRUh65SKapG37vuHibssThekuReBU7yQSmnSwZWXfZwmDQTnfokCS7",
  "key9": "eoLTFSpcbjKdcABLcVSaGxb6zqYeYgfvMTxrS8o31WZT3x7FhgR6fmcousqp9CuS8pCkdH1tDnwTyJt49AD9VjW",
  "key10": "4muBeg9sh9rRHUQFQ1WWnEUnhSjULA6rj6DiBmfNPQuNVFTYxEY9S2RMQQs1yRpBxG2jQsCjSHjUjDnmERYfFAzj",
  "key11": "4BWQxt63HCMZtp5J66TCxKVjxgroFNMGJRHvgCY3vTJigBVLeQD3Td3DqXHiRxmQMc9Egx7xSdxkZwVFMXUsk6Yi",
  "key12": "64pp8BNqC7aFHvt1weZe2CPBVsUg2X3SZbvHrMr9p2MVuHHA1YYVdCcb7d3uyyHEpLde664Htx9Uw3fwjbHakgCf",
  "key13": "5vgcdxiboG4j7hoqDhtT44HTRMmbjURxtMNzwPS272Yeno8CATTUufBbx9o9Ne8jvsH8Ay3FAvMtXdF6pEs9M9UH",
  "key14": "5tMqXpFbT91zB3rwPwcpUFUmoxcvjH2TMMMHQu4We6hhaUWKk4BWUoEVCW52mqqvh8Eo1BypPmZXmm6Hm94XEHZG",
  "key15": "wth27Nq28pSDoMJeSkyFWxwCQDdARg6UTr5V5Woehxs5y5ztuyxMdgr6fMnkMJv1bVSwqsrg5KFm68fCvL6UWDQ",
  "key16": "2ZEmdCx1R5v4D8HvP8a4rJEeF42b9dSpo6ddJRUvQPFe2NPwyzodSURWiXPe5kjsqgTh6bYL1cTxKMXyQULr2VKw",
  "key17": "2cuww12e1Gk2cf4LbYgSAf3Lmuuv6AfpRANERMC1Jqirq5kv9jSsSjbceX8hS7piaWLQvoUR6oLasK94fdDdxErM",
  "key18": "3tUaLS1e2Dj6UmSGKTmu7GQPnPefLUvsxvrKaukR7e8d95y8B3Si9o4CysxQU3rfSY4gLJTiJote6uLkopcFcv79",
  "key19": "14M2mkFJtjHb2Uw71sFWoqtDXgeDyCeeQBnMVhVy5QgBy9vsiwV54tNRr7HbBx3jCVzvpnsNwQ9kCqredQFmJcm",
  "key20": "5GpHs8VkfKKmTW2vuAx8JojqP1sTvLh8poZ7GE3zjkdNaRx6FV17bEYdAp9ByZ6xj5A2zMYQXVG8JbiHjHX5tQG8",
  "key21": "5NdCfpYbNMF2rnMuKhB6rYBR39vMdaVHxWEs6B58FnQixJCssL6n9CTpoZqW4hTjf86BCjB4EBqjseuNcvsRxffa",
  "key22": "2xktmUkwHBv7uBWV5WNySkmES4TzVCri82SnSi7fK2ogH1VPpAf7Q6hRgCFgD361DPPahz8CKJ8TbFfKTxgdXLoR",
  "key23": "4pN4kH7LZLf9XqxNsccM9Ax3Bnq4CSKMCFZjpDsvADNaPtvf8kKeqCPShaH7KPtBRnCuRCxQUtgLG9tT66FCcVnD",
  "key24": "64T64Moxsh3sDmEt7MD36dWMM3B3qSMXuJnT84USoR7W5bgyKZAKiaxQZLQo8CikR6kWYqpbyr883nKggxpY6G5J",
  "key25": "27qce7pm1yw2R8avqy4dbJnSwuUBnL3WcWYFoSmYa2N71P7Nb8PHLjraBPLH1XMyCEGJ98FxWqbWHJUMiXD88anQ",
  "key26": "5CwwUfTxQRJeMoWRQjtahEhKsxH69sfm4VS9HxzA5iBnGa7shAvJZPsYupqgZXfhDVTF97GAdusZ28mhv6iwecWz",
  "key27": "53CtZUjjX12aZcmSQcqiCiVJyyya2msFqETc3cJTv7QS4nTtbuDn7JLjAJjvYkwdGp7679JEtFyKp246uN4AEmHc",
  "key28": "5YS3RS5ibEed8Mprj54eWJ3aiHUENZbEg7nMi9r3DwCsa6kw52Hq48Buqt53o3Qva6o58no9vdR6Qyy7z26sHYEr",
  "key29": "3XdMd6qMt1HERXHSZSN8GG1kp49yq5sTwLfSy2sLWsjh2LzkukWMvwhQDiWcc5LtADsGFkicHHmBqMXV16bywZpn",
  "key30": "y3DMyoowLjWK1cnVBYmHWPJqMapwWzXgo3mCL9Vkz3KEB9jv9CqDr648mPBZ6BPcS7uFR9D8y2V4v5xzCywpnBG",
  "key31": "5qRYC4cxRtwJhao63V12XszV11ouvjNQmD89BKasNwsFoLX772j9D5kZ7PHFegG6Wze6urhS8jRFJTVupLyt2MB5",
  "key32": "KH6RGsjtx5eNvmiHCWof8yYH7NRDzs8FvKTGSd22v5GMh4zYwwRB73FMMv1g4fHZd4UaXySRSq4jBZ4Ty3aRzyd",
  "key33": "3Ns56XEaqGauzoLpXuk4oL6xXa9WiLED3uU5bDCXmgavrdGmVzshrVgnDqb8WGYA2ndeK73MsntqNmXVcHB2SkY3",
  "key34": "raxRxwcLwo5X6TnUhMMB4m7bQHChR5nYVP2TmSaNQP9Un2zDceVfvNdwSE6wt2DQ1ZdsbRunJJBDidCyFGKoJpB",
  "key35": "4QNST7t995LJpkwNZ4bv9vvfRxUwcT2NBuefyP2Bbdijpgkykbxciwcb6DjQLDMQhyqF6oqEvjdfkdstfUv7J7Ev",
  "key36": "4fuyWpQbS5qfkpie5PXkbjVZB3xGBSKjnm73J8P4kUXw8QBvQdKjBAZLe7hpfKwXrNGC81LxeogbDDPSES23UB88",
  "key37": "4WgyAJ8XRvadTmKpT2fCnfLwEmvfukqLv92MK4pjMz1sX6ha7qHtyZh2y4sT3NgpgHonReLTDy6P1hvDPLEixWD5",
  "key38": "5tNGtNMKCS3j4aRcbzwBzPD9bM9cRg9G4cd98bXGjGpDtyXT9NLJuiqjgGmgS3orifX674Dmp7Fi1CdkDm3hnCCe",
  "key39": "4AcxzdSbE949QK9sX1enoLg4PmqBEVuq6hzQ4dbnWuxq68B8ZPSQKGcLSPy52d79RroG39HqyJChjkrY7EfXK5w8",
  "key40": "56oq8q67YEFSP9d2DZyVJZVqgfhQRGFwASE6MjmZ53ro6XAn1b8C1G5vYJPLevMYLwRnhKrJdV69HT1A97B3gAy2",
  "key41": "TyNVPPWYzJJd1W3YaRaxnxrfe1p6hawkv1nou9RZR2e6mWy79f9tmKWXnSAmnBHm5RrxVzQTqeCtubHK7niBAsd",
  "key42": "4Div6XH2qS8CUTqKGGc5Q5hEZJW3bYBm4NLKe3Sofu9txV7vXLbyW4YwT88egoyTSs8gAX1FDtEWwcBiVX88qGnv",
  "key43": "1tPtQJhQfJ86ZexqkobPFLXnai6oM1dGrkU2s8xfWhXoxLwU42CiXdAKNWec1DHabXeWYXQA1h9tcHDzVyyvJ1b"
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
