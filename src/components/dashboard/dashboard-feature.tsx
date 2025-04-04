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
    "5rt8cKMyBa4SziLivKufRoKauy9jCFQ4qkL41pxtVEjMRBKQgk6w6sJJRRoP1FTwS57WLG41oHnDFTjzSTXTf5GL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MyZGSfsxE5pov4gq5RxvrGC63znQy7bPJ6Qm3jKCcs3U4rGargrxYCi9Ygov2JSHtqAMafEYnEiJkCiR5ZfRgp4",
  "key1": "5pn3MEXyaMvuoxxg724dzZWoNLJaFpDmryXZ6EMLtJGpMGeKJqWbV5Dh9QempALwvHUTNV3yiGVdNSC3mk1WTtGF",
  "key2": "21CZq14dC7zY9gzHTsCxMdzLZxsDGWm3fbsbBy5WDLLE32xPpedPcUDSzdq91EFekxizzui1tCXpMdPVpVbKcih9",
  "key3": "QX8rAuWmwphFfUqLuzcQ7wa9KraU4BLVUFgeojQHvCRwpGhdZJXFywQC5TbpfLh7dAUc41thF98QvVrFZZQstwF",
  "key4": "2ZrwCxif2PBC4oRt93KCnW99pU9NriV4DAEaLs3z89ZbhD14Cmp85eewtCTFtWzWuUJ2CvjV7vmj853FvrVu53sm",
  "key5": "37xpMXDgHvrbx34ccwe7EByCqc9zGNfg2At4iihdwCVpvg98AXWRukwCMJCHEFzKt1MVX5XP7aWBF659wia8mE1",
  "key6": "4PG983BZsfqnncbK8rB2PStqYgzFja4ZbSGtaUFGcQTLx5BJrVLTjLe1WhaqVxLud4CbASBgC2WUnZnz9HxYbD3D",
  "key7": "2NBZVKta4HaMMmYSbNCd73FNbryDEEXKhPkTcKwfwrq2D5HJcJXr3UdioLySnKk6VY3mn1s4sde9JwRVKVyGfR7T",
  "key8": "4qP6X6GwfL4nQaWe9pkTLhNFm4tMAhPiWaQ3KpfkZunEeuPnK3QwoByXAxMi9YXDJxqZocqxqjvq8nFYCYnbFhUZ",
  "key9": "4cWdkfvtr9V19mVAchTGKt1CXEWzUFCu3WfdDLbMjnVMciero87khiFACXcnSAwycTNzZSir2a6SQ6HLwPkktVup",
  "key10": "KezjMvgA1TZx5uhnNZbATKLfBC3DNL6RdM1Lmgx3XpcnrSMXaij2GbU5r3QhjpBWYNi4DsYJwbTbT5HUvsFnpGN",
  "key11": "26cZ7qNv6soHrrQw71hGBAHg2mKYsewC6gmEcZk4aTLqFqRrbEaEzVqXMXY6mTwGZeLx3skqnezgo2hSgrwCo62K",
  "key12": "2N8hsPFAmwtizEdt4NpAXxLMAP1zxFrUE1uZpULQN7Mm4sjPdvKmRttZhN13CPFaMEzxJ6VKf6TdEKUvKo2aAeTo",
  "key13": "25r4RnQD78y922c52FYpPRuLsJHvm52HCsV9PFtxWv2C3aV1bVhzaNmtyK45TXWDPZSw2cuNEDg4Uhm4Axxqdkiq",
  "key14": "3GNXPNBLxhuz6R2kr4Pe6f9gFbJWQ9WSz7vhq1mPJyM1tNkfTZLcG6G6S4vKR36AHZVqNVRkXuhh67pNrnMibyuW",
  "key15": "283hiRks3BJAiPshNJnFW175UAir4TwTLL6psxtt9PNfu9ctkuBijuxUaeVc9ZhS2ScZDACxGEGiXFBfdtEwKXdm",
  "key16": "26DbEN4uVhYHQjfs2v6C4rwEEqxEvE9HPNYNsoCpP2wzyHh2KvRoM92jPGsyL52ykhdAP53rFsFpuds2X5pn5Y8K",
  "key17": "gh8vFV5K1JGzu32hSMLwpM1grtAUBmnHzotN3nwUChCUoqPD5sHY6wU9Lu5c16f68E3P2XRUu9dyaqvyuMG1Bmm",
  "key18": "5bzGhFT41fvNVPpfkbXYoLeT5gLhAARyefNYxmXuYTstPRCk7eiywLdA1YRQb2Z14qqnSJSq5xrvNnjft1NB675T",
  "key19": "5CbuHuhgyBzyCQVkJQK7yFrybL5fMForBbWQxgmsYrAtTdnHdybPtMvu7BDi2TbKKX4dgUhh9MQcmTMnNESkrRuE",
  "key20": "5SsT6U4kxhaMmaUYVcR7s1PpvzM1oThUQ8oQ9QAPW9bzmMHHiTRqWbRdwyiuFZnfT7m7heqXCB9sRznu6TTXzQpY",
  "key21": "2HkuJJXNQfuu1vPQ2He7EsQETdPxrRLtA1WJp5bW59AzH6Np6Urh4r5Eq6WUmxDMwAtdV2ojakKmsZJYGFRiRaEb",
  "key22": "553FrsgjDN6Q2ajmiEEKgNsdARNY8ath9CYxi6zQiTvQovm57eGXTAfHkkmbsYibuW2wi8WEvCjAKzHvNPcYMUkh",
  "key23": "4ZHsihJW8JBnUcrbqgWGSdGEPhqy1CFiR7wsPC7mKCbo2B7rYjbhg43JgxwdfcfwwhXN7AH5mn3xvS6Y84Pdt4bh",
  "key24": "2qyc7RavAv7Lv2rLxQGJSBfCAzt5DRadSAbKKXV3DhzDkxQLjbg6Yr3UnyQQg4x1soaEc7QHGGTm6Q8Wwhh8ZFjr",
  "key25": "5AcXKYupGSNHU2zSye3eKSWcVMG8yop2QKRAPSd1RQ7uFQVxjCHNJwoMLj5gSpBNTUi6wagUzA9Dg2J1gC37vP7d",
  "key26": "5FMW9V4MRhWmojVn5kBiNbMeSvHJs8893rhGpQFfGUDATq2t6yevQ4xLLLryJJcALKqNJF58ZyZ9VNTox281C86z",
  "key27": "56PgsuaJkVs8oLGgCnsjKzGU14iebrt86HrVBkkMNXeuDAFDRe8fjqai8pv6nLLsHQt1sMbNicAarZi4aBgV7V6w",
  "key28": "6T3doaRzk1gRmArGCoXhe9EE19nv6jcZvWgghskB1iDye35F4xeqyzPundNJ9oUYdTHqSSDU1iBbvXbr2XBFEwW",
  "key29": "48XdCyffZ1L41QcXNHoTsM5GcDS3wzJ89APWLKzfpvjVb7ymwE8BX5LsaL1Bzt1edhxUh4KG8XgkJRe3uTSyPNzt",
  "key30": "2QkyFBgf2hBKau4rfaaW6RYYPRw9HYLxTSydAjchVeD8ofxkCo3N3abSVjo6saVDYD6uwhC6xy3VdP5PWtnyJwra",
  "key31": "4vh9NENSPTnCyfRiwv6Ds2abctguXRXcKbBWcB4z9nwVdoDPGfKHvYf4jZNhMFrcbKVEnBVSfixFMPaZVMaZasfZ",
  "key32": "4Nj4PMh7BNnM7NbuKXaMozqEcuKSfTwU3mxeV9257rFcJBFmdaEQTy9ZFZ24A6Jj7MyHwyeZ6MZKciYaNVCNkSd8",
  "key33": "pNPxEnoyiKRFphgnFwocrqsnut1Q9Fg72qv5QLhRq5WaF5Dzs6mmEXTahz11SaZ174A2uYXC6xpfW6LD7y5yRPH",
  "key34": "4KjNoS2W9AS466jGLP79YLLbjZ9kMtM2uncwMc8APomApHUU4p4YMDcQHPHLZ1kpdTn9SminRuvVJpLowoTH5NUw",
  "key35": "5e9JG8twytghsgekf9skTYSx8oLN5dCPEYNu9dh3WNbRawhyXPH21RpyE9EioPcCoE9CW4XqRb7ZyWV81m7MiNxx",
  "key36": "5eDG4j6byVxWPbYv5mQ7NBY2tx6NdFMrWLLDPpkEt96Btpy4zPfPucPLFtyKDGDJrNzz8pHbEmtBRGnNkaHV8rdu",
  "key37": "3kbz2qxUwDpUdxRei9rLpPmyegqN4ijHMa1CZKMb7NDrXZ1DQjvEbokvD3L8RPr8b1uRLiZGXFMXgHfF56Hdd76A",
  "key38": "Uq7xnEaJJewWgjBMLpGMuoNxRQD8abr1RoJJJqsFBHVi2MfefSyjNtC5BueNJpnBj7TwZQ7MXbYeEqg7ys3F2Mz",
  "key39": "1RPmA9iGNPpp3X2wJzTinZGvwApYscRFQf9qkovuFYP8nPmkzTyxJaCrPKCXzhnF8LzZAiWPo2yKWAWAUmTa9Rj"
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
