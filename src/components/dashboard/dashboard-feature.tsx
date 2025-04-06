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
    "4zwGkd6y2j4skTGQQvVQZ8kWK2UTZb7a7AgqbL1mkEZDJqiGyKEZLGcDzTELDTj7SZiVeayziv1Jwe9coWiJDJEg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2w7NnkGP4rpn5rbGeRPmc33GsNUzryqbmag8z1jbuPbnQxpzbEwcTu28d3mjruF2dKZu5NWKWasHQMEbMGQ1xTDz",
  "key1": "HRTvFMEnoX7vQw7N38Eo5wYB4rSsdE6FKhdXikP1bS2aCx55tidTjMyiVUkjCJ2AqssDnLEPYru85BpQyQ5x48j",
  "key2": "Ub9UQdeF8nEnsoria5fdLJFBRciugGszPAyePgXep85hQYZby5HNCZRJaUavD6nggb8iCfxHhpMCodnaNgrhZLx",
  "key3": "aV98GjjJy9vLGt6fXKaeVAkZCGY2Xos774zGjPe5p3R629ZerpMyKbRCB66brqoqLpws4Ssy2of9XARZB2KKeaa",
  "key4": "417TaujyXigBTybLqhqZnXLMSRwRBgrh2qamDrT1dBf9N9bi2RTj5eRPSo1Lb2tSVhJV7bgVpereA2ybMv2QEdRX",
  "key5": "3cyoDXzY6HpugHA6dHNXVK1CMvSdtS88vQGzctTM2be51DYcbcQooeexch71eDNqvoRu8e2Pzxnp1x4fLsdj39Jy",
  "key6": "3Vebq3hhw5BJx3Muv9v3Uaw5nwJAXSLEaV7P5PDLLiV2rqx12FHvL5BKEQp6E5jcpfjdzg4n8uwpT7wh6snFzXp2",
  "key7": "2ZPbVvh221XjzppJEJ3H8G1pRTd42QCZuQLto2o1yBBVycXz2dVDKavwqzyRmwzWJj5kBnCgJ2pVxuT1THvus5wJ",
  "key8": "3VtuGPEnsKaAHUeKy9GuqRBJqoh83UQGLPCkpaTqod19XZaCKmvRktEmxMS4R3hkAmhXSZ59X8DjMycLEcJw4rBB",
  "key9": "4CNtkrr6bKXhsByUCLumrR1KFg3yLwT5MrzmkBF8gEFPCe7TQQxX3B294guKcEQfMGtKEP8W5F3uLujTpHYFGU55",
  "key10": "4r1yXfp5KrERo7VtZoZknmvnZihgWEJtY6iM5aQhWp7HYk56z8Uze4jx7cWEMrjmj5YRfPZFgXe15hM1zyvW1AVL",
  "key11": "3Ya7qJK3ig3xBimNUiGcxj1izGag14oNgXyxA5pn4uroMucraB3tnTzeSa9dis2JRdWdZJ9kwHn3aonEQjEguiMk",
  "key12": "2BVfX31C85HxosBWASDbMxr1ExsJpQG4hXpFdSXwSzAPbpsmeqAHZnBJFhD4fLZGhf5Y2Sy8XbSjQ5WAkPhp7eVf",
  "key13": "62z55w8NDPs76hj29qasK8TXhhH619Hci3esDrqBofd2NATe8NF7JN7rKNYHS51cDTRexqKydUCKCvjFnPEe5Vsq",
  "key14": "3f1Z3AY2LLswCs2tNyXUsT9w9btSzxaTopdGGk7vBWcmXuPDLABvHTHYenBLAXh8w6PfHQnjv2JYc6BCGv5USA82",
  "key15": "4qoF5qvQYjWZYVEQBaJj4g1aQbqMwdUYi2kQrNGapjffZTUMbGSZ9ArFxFp2uWkf4MEyzwYinfBnBsrv8ACZDyEw",
  "key16": "5myDnKMa48TkQ67UiYay9wjvFpRCdMTjVr9juxQjLythPCpHJETPpZjfQt9WjunyMnmNqRRn6zMicGWFqWAcz4Dg",
  "key17": "4XxoWWv5ZLenUjkJfU8LSV73NXyfs2vk8iYY8hNffnrmyv5v8TcLZs9KrHzSH64k9AhW7JbqRN3ibDa7AtrG3irG",
  "key18": "5YiSTUEF9Fe7jEGb38zzDJpH5QpokxKpiqaczMhzM1VaAfwHkd5xQLTTPMhRvnmudW6ADXjwQNt8H3PCZKM2j76s",
  "key19": "4EXGU5rM4YBxtsCHEkzcqgLfAGtrwgusP2LE3RPwnRffZnYR5nK2CqxreD2prZRR7TV9Ub2gNXoSBuWzCEgyawiw",
  "key20": "SdMyiY9SAwvchsN69tUT3kgcnhs7KzDpGoBJ3VpUUiHYLjBt4nNDGwk7CLrwsaNNwV8CfEhjrJzWPbdky6Y1aGX",
  "key21": "2UJqMhMa8iUnmoxr8qS1ChTwMoGR88kDeUNVAiPvBSteZot4MkPjsbR8q4qRLYLpeu7Bn3uKYF3yJPVq3N91JfL3",
  "key22": "22ixuvWGFsyiSxyB1xiq63o2UTfABbdPUFpmV1Akp2XJVHS9daqvsXyVgxCkhXnabB8cKBN6WNBEXJzV6Qw12TgG",
  "key23": "x2kYnmFC7fdrdv4iDJWro4u8zcmdMKM4Pjms6PnHxPZYhEBKW7ZXHiDThhdDcBHvFyJPYFZzzit1MeiFEDq3Bvb",
  "key24": "3ArmgDDH45pNyRuRWnTHDxjvxLtNiXa4C4nC3G7dgxUT63EhK8wZxfyaChiC7yT1P5tkV3JWMpYoaKgcTNr7VNgn",
  "key25": "2cyaVTXi4yfDX51bbKHWAuH9XZKvSamAcKWhHEmEcpgGCbzKf4P8uHTNmHQoywJggXXR1HN1GH4fqRiikhNCC1Do",
  "key26": "2Q6t5Ve3qEFqeVUXVxHpo3XU37SzqGLKCEV7EKDZh88nxVARknGBrx2b2AAp6dx9Pk7JQVswthoyTxuuTyb4pd5C",
  "key27": "2cLr96cwqinuS9rqzBpx9VHQrGMnwjEX8ubxanjbcX9GzpNNJq7abYwtALDDqnbQdQpdjs63ujHk4PoFNP2AbLwk",
  "key28": "3uTaPM8CaiLDyjWRZzMyxwyeFNdWpXzP1ZFqxtXL8zskwzkhxwEP3NHgB146pC7wBbfT3GgPDLYWiPjYMVXUs5zc",
  "key29": "4uy1mBnf1wkk5xaPTVACLdE2qUNWeackKLpdgWBaYJquAkf5GuoKuZ6iM9DUWhR72FPELn7ZU3uyRWWENt2AJDNR",
  "key30": "4L37hUV7KGCZTRnxmHy6aUPcNL7MYdx2BUQ2X1tjKC23fZ64CjZ3HQJLQwBv81uNVE4rZZGKgTXo5V5LAsHAQS2W",
  "key31": "47eFFfi2gou84WmbXqg64dKGTg5yYu8LtxkXdekpVDBjZHBSkFSe8sBVHhop6HrWZwwhdwPYbmFnkhgPgWkh2fXQ",
  "key32": "3dTQLK74aRrgjDjVdPK3Fo6anby6XuYnyVHabqi25kskjyoJL6pMxpUPVnPno2EUu197vkDwwdQ2RRDKzbLuGXqA",
  "key33": "5JGqUv3NbgLM32Hfw8ftW6P6sTj5GhZVGMyJ994aKjqxWZ4Fk1CUoMUPXrmwetMgZHpDPH6PXdvA2s6u6CPiPjpW",
  "key34": "SRojMPzsdjGdYax5gNztAEjkbkMZkVnqXC9gcUbN5HpHbRQWfutKi8FosiGrva7gitw5uuQYf7xGiuHGhsyd5pD",
  "key35": "4GZivTj1MY5DoCLZfyhVsLNAkFxMWo8G5pCbKDEpmebxmoqXF7ndw2f6Godb5GifCDQ6VwZPbXmTcFbHMxXR4mqw",
  "key36": "2ycUh2qVMXq1Fhhcpc7yY5E9csPs7DoDz3HX4Ar6jtJZueJxEGpivqzMdWGqYiBbz9tmjWGhvTHxnzpC3Vsko4wf",
  "key37": "38Sqk8qLytwswByUf15knLJ4xztQptJU69fe31Z72JNGUiJQANKtq2VFLcRX8iGaJGtJ7gF8xwVo88n8gTt8o8co",
  "key38": "xU53prg5v4EAbc1xR6BF3Ln2EeJyRYkK19DLurWu5iiw17d79HS49Tv4mNAhvzRfTBGNHYZG9fqcMJHGDQ3Stqp",
  "key39": "3dw6nZyat5Mt61zuxeUMqrTJSi5Df4MuYbrVCSRAxStrXajQLJMPbNdrBbCLhnAZruW1ddeVHCAmf3Ni1UYDWDHC",
  "key40": "4pnzcPfDzYYWggxzFNRCNT4TzP2henncTrFLEeTbhwq3LHtqhaWzfgj5xEAvHD4hY8SPNhN2xQ9VbxmU4gkZyQPT",
  "key41": "5GxJkSbH42xP7sfbknrY88JcWSm3DSnVvHaiCtbzXZzeLqnep3Qjgs9J6Zn2s398tuaNUKmLyJ6ctYitsGrG8GtA",
  "key42": "3fCWvgeKfGDEG9e4GCaxu3r4rQK6iujkGmEQoxrwbwn3aVGw1S88nfcxdaidnDMJapW8d1cfxYuBn8BVeZzJBu99"
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
