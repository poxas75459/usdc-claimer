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
    "c4BEj8ZbummiRsjcogUECkd9y73GdsG3MoSmoyyw1airDrcm8a2SxEdfm4NevjaXpA94GVH46BsZYcNjoQnfX4A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kmqehqjy9fSAGBXyfgHYo4ocncBRGedRvDyEKpcbrBq8rVCLBv51pWLB6crFeFLveUnHnfWYFeBiWqbLrcG4rUQ",
  "key1": "3PYag2s3PPHRQLM4Xf9o2viqfiCMhvy2DxmkNZkrPfM5XKAzvypVp3zFh63kqyEvZ34YTc8Dqus44wuaa6SVqiDQ",
  "key2": "2x9GpiBTXeYPC3THaZsxfeziabD4urBPj9v6kvuMFVrAYZ9pBMuvqNoMvXXZakjowKzBiLCsYbHYeuJPGfaRTVn5",
  "key3": "5DqqY723e6RT3iU7Dr4rt5wH1KGMAf8y9ERr4zyx1anLK4m92hmZvHNVDahr75h5RCWgpCLGty8mgtBNN3yfJ7k5",
  "key4": "5vkpg35P429oX5PTCk1GVdYE7Wx7QrKvCaHD987CEsKeDwrLoaioQ9Pmzs9UJhB3na6J3c9ZvtRkJg8e494JFe1p",
  "key5": "3FxnaPPFUuyHovxwuLQzKPPYDUmysC36ZjaCPYy89ETSjMHcDfzRYNCVWmkwR657rYhUwZcD1kd8s7mVFjMj8nxC",
  "key6": "5CtQpHYfcPUnNXN5gztbbaAXS76me2JYV33WW9xZeMrQN764cpJdTx3zbvC2iNdsYZDihv2QfLbUSumKqRiwUF21",
  "key7": "4TgiQ2niX5bFi36NjsCVuNAwfnB9NQhBWmeJBaohP3A43K3dKZvVCkqPjcesGYZjAxRJ6AMvzk4qXaZ8n8btX46X",
  "key8": "2AzHTe8kVSJkC4QWnWNAbP7vnX23LexoX6CWDb34wchnY8kuXb4ifdJKwrx1HhHxeQt5SEZve9AznUpmeRFW7JjQ",
  "key9": "4cpMmL4oQH9upzjMNzLyxKTXCHL9Lni4gNXVXz9L49e2ynhm1jbZ2iUZ3mx7789fACn2MGA4dj33wE7Mb5NJLjwa",
  "key10": "4VQurbohJ3faA9SUjCf3q2Mi7r8B2TnB7MT9nhg84bes7aA6GceF9BNTwWT8Mx5z29ZJKsVEg4Fwi6RJeHfnPHdv",
  "key11": "28ccJzjSuy6Nhn1V2g8aSujN7iYpFCL9FGnR44nYi68GSezZHY5VLDqvP4xzD8rZhqKtu8XDvUvNMQQh6ezN78tj",
  "key12": "3mR5pJUjXrBmRjfCtHuyKnRPt1jQQYfPz3XABajViPfU2LdUvgbdyXsSpqAM8VZtNHStNt8zzgko8PgZk79BogAb",
  "key13": "5vygS8Cn7BDMXZVD4zjQwNV6PJ2jksvyA7ByuCp6z77FQPnTSeh7xDDauvDDhpW7aeEoqFjn9gDkGrvuSWHwEfNk",
  "key14": "2vh4ge3QgYEFGQFtUuE6XDH9gwzMP3AFPYE5umqBUXuyTK6MYBAMALspN1jEpknVSu2mYoSHKoRWg6Ymyu9i29kL",
  "key15": "43C1rRXFyxSkkZF6C2bhM8NjG4ruf9YaDjHY585LT4RxhuLrKtoYvB9gK5hdhkBrS5GBph9kcut2E8im5ftAqTM2",
  "key16": "2zF3qrwN4RH2f6cRwSgcGakz8aYt7fTiKHJZBKhNFmpzzcuUsRi9FUMpSer13HUr27dLsrPX7Euom9dzxByFk6S8",
  "key17": "3n2LP41GbvTX2s3wWip2x3BHha8t4qYaN5CFb8zbUEaxSEHFsFajp4D1brfYaxeA5NgDMGxhRBYqt7k16NrQx2JM",
  "key18": "3YGJ7JB8DsJbhNr33Crv5G3hwmY3Nz7o7k2kF9wX8qxRhGYqdn6Sw1sN3w6qRvrQijVdqLCY1dGUxSyDGGLYJP3u",
  "key19": "2TPTxxYDEd6GkXP7WUKNXmSLcB3sAqzX1KwyybJTrJwRZUWBrYaejLPhGNjBSvofQFJEvkiwvf4MhvZaYSedidMK",
  "key20": "4mseZzbuRRBT5vRA6nZk3jjWdfxhtDphu42PFAuR1KW6srGeoxcVqxV65rzX4LfDFkiZd2oHe3w782ahmJ1qDFUb",
  "key21": "qdWh29ehunr4afBfjvk9a9S9S4hKfKMmnMC6ZwhiaYWpf8KxfNLBoZwxmu1K1fL9Cp54RR2WcK6zQamf6LQycYN",
  "key22": "2Xgf1snyt92SNxZaQQg966ksyNuKtBdPC8v8jSgJydr5hu2zS5RboEeXafixjfD279yVYDyerEXjwMgjFAgykvNs",
  "key23": "3wzS4fvERThbiXsYUwsHztrYCPYdkLm3v1TmDP23FioK1RhaK4Umcii8guVqDRuRg9toPPArsAxQFCzpMbMiuZro",
  "key24": "5wX48Ce3wmGssskaV5deyp5mW4gzciTrY3P9gJDKh4fMhJxKmms4cWRaCHCtyPBTCPPWeE5Tfbco6AkvmezCDRPy",
  "key25": "5hQpA86bsfC6RXErYNtuamySeDaW5njrCpH9QS5F3gUa3TBxZfZaBzkwmYk7w9QPKzauEpesojnJ74hY11NkeqtY",
  "key26": "4m7ec4BhmcXZnzYkcXML96Rx4YPkPJaNeuTx3nhAzCiQs2SxBcCChQQK5L9KeaAagJYKnTmqmr4qNBGPtaXeoPZB",
  "key27": "5X92puiZXCRn52drPNBxwuooK59KnbvjPi8NtTaRjjpopacfFr9qZSXmg6fG8KVxD8XjEvpQW4aV7Up8N7mZXdKt",
  "key28": "21efDga1X1K7AC1fimcUM37NzDnHmkCK3oyaXgUUw4eq5MmvQuutnvNNg9KPJ2hvdBSAQDY7qGri8pHnaL8GuXx9",
  "key29": "Ud3T8UgC97poWx5GkPV1WVryp6CkAF4Fsz1GCfbLC18DUV1hMewhE4xgMQpbcGxUAehTuy73WUrJA9wZaZZ81FH",
  "key30": "4B2XDMFmu7HYRZ2nX4mY6poxGjPWPEshCMUCvb2wRDg2CyXg9jKoZyZEPDE6Cvw8SnCJp3fsfdJvBFj53eEhGowH",
  "key31": "4xtRpNPvPv71W15rSCBHNgKGVgrLYWXq2vF2CHHs3SoPLKR6ffamXBt3dYQhbbyfeudL4Hn7NVCJ6SC4mbHmnEZP",
  "key32": "2rcwYappft5kVwuTfGK9F8GyeaN24QKbSQULT42FBXAhujYu7wDhU1n1v8SMaGnF5rAuDpeF6Y5vGsbcTy5Vr3wW",
  "key33": "c3gjC6ZAhoQmoYzYd6DZGnWcL1QP8JxKHZRDQSdQuafPSrHifK5Zs4dhmQqWLprgvCzi4a52cCZfTiDYtxgpWPz",
  "key34": "5tjPYFAKCjnysthHP1cy1K71196Zw9z7j18Qr5mgN5idS5VX9KgvrwyvKC1PGf6Xxu8N42jexfdcwq6m9v5VPJV2",
  "key35": "4D94uWaD3aSEoCMhW7YR6cSuiyp1U1JQww5HmcWRbR6GFbB1vn2ffKPtVE4TRyhGQvh8wxPncniqGYucsLkQQeNG",
  "key36": "53WugU4UKiawM1Gj4wh2VKUfxULobwXUrUj9E8Ni32ipDrRxX6dm1WvYC33TmrbKvoib8tgkHMVYWYrPFyJRGQUP",
  "key37": "3Db522jcgeohLC1jnZG2BZ7SKHoZFWnfHZHMp4KUNNi4bcCgHMZF4KznZ6FVjgUHB9Neq68FHA9HsvmVWoVJGD9V",
  "key38": "2QVYc8uuiEJxr5nkzi3fso8DxHkbVT8oa3o4g429Aq5HoZhdtpQeHsCG49HrJrQ9wRWceaKJ85H4RAuT3MAj1ro3",
  "key39": "cbw3m8DtH3JC7FZZY5KwhWuaA9szZKALenPeTNSmWP9diQa32brCYKb6XdhEELtoG5ZeUg7hK3mL6ku4gyxjUZs",
  "key40": "4PCMcrPWwkLEUPLBeWpfKy8RAKynXBTLUwkagxrP9iR4pgrmmujEP9aaQDttoYhMG7TokJJQE9CrtdsURWJ1oMg7",
  "key41": "59jBDWuXcYjik6UvE9czA8N21VHAQbpyqFF6Mmqfd4RDyfSKwWi8n8B2aNMNGNUTbQCDTFa6L9pGk3tFpBkYsJc3",
  "key42": "333RiAHDMZ7KWFgphMjjC1n4xuzoz96CepPBhVJhLKTqeA7wLtA1RPgR5FQ2pSoCn5U1uAdqyQweyvBPEGkgvqaN",
  "key43": "5muTKdnLQQKqgJhGZacpa9651ZVEmWGZCu3Qr5AjzyUj5B2sHeJuiZHygmeqZFkzEkKi8dwBKDjmrVB87TsN5zYZ",
  "key44": "5c4iZBghx5wgAHf1WWgD3t37469G2Fmkmv8c6i9UL8bkAwLo4sgmwpFiiXufGJZwfXMxaVAUp7csjTAndkbmFwio",
  "key45": "59A5xysN6hSJuuE1GevqhBNKkwAi5NaEf6TkUt2pBZuWdTwXhewoNSKMK7AcEBYoGq8o81HbeiwMthBti4gKcafG",
  "key46": "2iD5z4qzwNhLvfQrH6UJKbJdv9eSLkJqgdp1W9HxWWsAvGmmPcstuygB43XSaJFNPkxbvmLM7AbAXE8hWde77nbU",
  "key47": "24vr755ymbGV3pvBsWwr9sUj2kkp2orYciaNYJho5z53Jv4kWDiVNgB4oyQGsm7K91XNHYo4hsuKcGEyhyCikngk"
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
