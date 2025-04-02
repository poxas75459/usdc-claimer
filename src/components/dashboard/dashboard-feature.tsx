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
    "2skkC7fuVypTaQHpna1R9ijhWmbvEPRKtDphth9MnRranRJjnbHxanjDNSkx3M171SNde1vw3wHXPPMJ1PLx8HG3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dhSfVJ3FWMabFXeQzoLN1dHG4PNoRd122udpUMFtRT8eFpQG6F3h4UC5nZ2p2iv3f4a6xGqsZi7KN2zo485U624",
  "key1": "S6rQmESG9uyTNdwMbGX4eoDaDB4wj36QGhd5sseWtA1FSQ2e3KLCPTrYRPQtV1zpiPfKTSj1GepDD6q4kMpd78y",
  "key2": "iVgtR2uafh774tppgCBdNyo2UcqofExUvkpxkLGYZPZ8DXtG4sv5zkAsXTyqpx3pSB19rt7MHAhar3KnysVBn5s",
  "key3": "23nRXjso4zDr6b2mNFNRkREnxraeuPP1LG3z3hrCecBse1eSTSUD9mU2Z9MiWXmEZDigTv2iJWYGE9DtaPKV7frM",
  "key4": "3G6Xz6eNPS1y2BGP3f7aYZZMmhe2r1k3vumaqsj9SMDvtWJFNcvTJxhMLdBYm3hRvk6yaas47afg2MFPc7bSk2Ud",
  "key5": "4RnRqWX4We4dvA2ftgdvC9j1EzJnwN5P7WWA9TNa9jyPqHayvrK2gJXzNRQHdtPutEQUQVonjTyeWSzB5LYX7KvV",
  "key6": "25Z7U5umrJqHTiQdbWA7d7MC2aJ83dZJS5MFVDmLkpQEvYu41pfVhqcHLoHamGM6voxCnpvM3cF6siSvJ4amDu7A",
  "key7": "qGHjXa93Cw9KA4mgTuFvgYFBam266Gc461uHzfvtBbxAb3ufxZh667WKRShTfAZy3knUyiBetcfYk65ndPcFa6Q",
  "key8": "4YSLj49xe3XWwMmd9Cyd98hrhy6KEYhbQTwWFLFc3TTk1SZYu9y3diCgM7M7s6vYrEXdkh7fwDpYtLQzFBczBPha",
  "key9": "QFUuay9s4kb3FxQ2oSeAGgYHJTjtYrzKPCBMyocjwArq4CJXAjkFKDTxtW9T2oN59CHrAHX9GTwD9MXZbmxBRv9",
  "key10": "Gqov2P8Ginm7Ka72Am2PV63VWNLi6ThAN1DXkpqQwCw8g5NQgKyCETpMJo7VkJ85MaWzfVgBYkno3tgPuX3egQ5",
  "key11": "4o2LpjekkiNAZD8T66UQm272nShMvxyHwurV37sbU5m3qnJ2vnVyWB4fc2WcnNDy5mQtNQXPFZnLAGdPMbnk3GEg",
  "key12": "3hQzsazHNh1faJo2Js797g5h19XModFFQ64XExvYFAchntVFxNJ6SJf3GmhkhEhGTTuKyNxcZuuHkCzC3VBWZWf4",
  "key13": "4vGQyhuxLY6suNyVqxRzakE3bUoJTPDhY7ZqunqhvaGLAzb4AE9SBJdkB8gcHVU8uZPwCgn6zz3fGyWwTeqbSNva",
  "key14": "5qGbrefRvGs6G7xDirLWSr9rFjorDs2uAKgJntFumq3n7CXbkndBx7UnEBAJDV9u6uDzCwV6Gd3aucJAWyvym8Sv",
  "key15": "5Zhkuj7nBgNHP26p9YXXoA12FuRcyArAQSNp1JV5NMwsTbsNVm8y2xLuqwPaQdJHNDE1c1YkmrgEkTKf1YNbJJR8",
  "key16": "21ddysb1ecNaED5bN16kNcjX2bgWj5EPp1cL2RWUqNNRduPDCKD1LZmWzdxF7H5S22PNtaQWxZDJYFCPem8YiUuG",
  "key17": "1juzWoRsSpbu78WpyNzTkNVoxa1WN9ZQWH5uB62zur5yCBeJLU4TeYWsbJyVUKj6QTdKFTW1VLcBCscWUTPpezJ",
  "key18": "hEFQuY2EngtTa98unvnq3yFzKVFQquehyrqhPQdEeXJdj2ukqjfKPPSZwaD9efVs9Wu9HUW45XDhW79CG4xf2YS",
  "key19": "SSMmGRfEgvvTuYZ3r8Cp3kY1SLwEbkqCUjiMqHGmP2mLybkKXKcNpA2ktNqTNE9ZgSitg6xkXeMqMHnXK5dhzaJ",
  "key20": "3Z9DQUesDADxctcXkN1HTyNhKwAQ2TnkuGdYnDLc7BYMbdxEpDfj5KSTERgzKe32ZcYqWyXv6gDRaXyskdJS2JKR",
  "key21": "5Gnwcg1TNWzGeHzi4At7x6FhSAhS5hsCYzPoPAv89tVmv4VUHaohtvp1k2Tv5DDVJ6fGcP3Dvb9JzGunVuUjMk5i",
  "key22": "5up2VWWmj932XfVKRReMj3MSX5ZRZedhmzJjtYKSdP36MC7XwGLdx3WnfZ2GBJcJqvfE6GBSiPAVyyPxymhZAn4p",
  "key23": "icvS2fSFuqkA11trqbncQBrYuKQzSyfCUizWkrXDENTj8L7Kt2dcaf2kKLkYd7ZQvvwKzMvj7nheeToESiZBP1P",
  "key24": "64MM97oANPrt9hmR6WSi29nPgZwmsgDBrpHLxDrbdKt8fq2humUmQz55rDWg2pACzNevyxgUoPBSLCam9vRir11m",
  "key25": "2YNTWLebaJiYgUss8kFNGRvfCCPjPrkGqW31g7qy7whUaGXNVNSf5CnosGwM61nujLepUv4XJF3mo94QYtuFkntS",
  "key26": "3gFnTBaDW3G8hFUkkPfRUVm8n6YQ7KU16afifSweBz48dMPJMBu5noKxCPGVnKbC3wDrwFUXLR2h5hGtGVEhWvJh",
  "key27": "67LprmXye5XVBLQcBAT5MEAFR8c3EDyjaYpm3SpayWrDPYo6KC7jAAPMXpsKi5QU4NKcBWVoV93ZdKNNNfu3sKUW",
  "key28": "3oXZmi4CyKJ7vsx1wERrcuATW2Hso7jtMzdibB3foVFpKbMRo15p8UVbsbBpMC8BPrsNs543JozYonhdPHk6hwWu",
  "key29": "3sTxPspjYbYnWv14ox14ehYEubFwKGoEBuG3cy9kPAqVUybsQUbEcyzrDoodK5fvdie6uH4U6iPYhMka1eL6LQox",
  "key30": "pgZbthcVxGcpXpHTDQ9ZvcCVzkYt3ZogKQANeLw4ineUhwZWU6ufdGLe9vgpRKAkwQeLvpH9rW2uNnzEcVjZwgZ",
  "key31": "5o5RBBfQwxKRN3JCNca9qfyu3ByvzVdFGAGcShECbVxroq7J7sJtmH9jWNkjDE31JKy2Z9k2ULueXNgSAYfyGjPb",
  "key32": "5CKE5PMvCKMJK2LE5psT7BZzefpmHupvrJCxCGayHnfYTiiMhUsDj7d2UCY36dYg5kNS5w1g63uj3uymkGuXXFDj",
  "key33": "5HzzbTLR7HF99BYF8JFAXVLz4kskxt1uJQtpDfZd74eGoGU2dCxZiqVJaoxPfGGFydT3HpgGvJZxKUtHb84TkLEN",
  "key34": "6v6PdqgcrkYbUhsLywEPs7K6CxvtF54hcxYARDmBaqrgdVcmLrp8ba79YSLJjFcr6WAHtjioL2cQC9LrWus2Tua",
  "key35": "47LxoDK4k7HZwN29nt3KdyLKcRzeeNdBtrLFpkehzPMkbcPppSBg6ADhqFzKAa3fyhbpoAyA94jEcWPDTy2fo31x",
  "key36": "2k7CCb4X24ETkREfHLuBUNBK2FjB8PSFvQh1pdTnwDFgAbX4GydKTmhARcJKogbsUYH2FomMcnX91QY58vm9mJ5Y",
  "key37": "4H9TTH1mB6xz5dhzsb4DcJiGqregPkjji6yGTZqrjXw1bhC41wYGN3aFvHs48VvtdRiTNt21X9Yd8zkhgxLJAHS"
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
