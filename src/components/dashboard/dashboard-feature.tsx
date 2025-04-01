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
    "22cSSwDHeJtjhXpc1rERksu5sBwFRqdjLNJACmEyHXvwv6CGos75rNcYBsqXfU4EK6Nq3GrUKJV615oUpDMpia6J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gCoEuqm9Zi5qG4G6F7rUkz273pEmXajch4DCE3G6m8qvRFo2ESDgEU14Umkksfp8p5XVoHtJ722q3YPV8MRR6i",
  "key1": "5SFofPx7TaKtaFpUrT2buVbkekD9tkCkFfQ24bg7xtmRt4auCPKG5nnkQJ2cM62jmgiNghnBDNUZqoFm5CBHEfiz",
  "key2": "3R5YBGJWaFbZB51WQhNSpBfB75DhTE2kx3AoWBYTdJQfTj2vV9K2UAcUkfPbs3yEVMfpNbEhaLsCFJx4nQ6jwuQM",
  "key3": "5LpkfJUd51X2di3ZVAGjhQCaKVHB19ZXgyDTxvmNgMqNVuVt3XTFTCjCoiZX9eTUY66HwCRCKZvTTxgUk7GarWov",
  "key4": "2g3hHMMZsfwsZRtAUWGHCGUgfeTb4X8Ffv5FVzUSR6BGb3iYC6jpAXTo6By8qeNw99bUc52diVo9aFgycCroWRQM",
  "key5": "61dGYhz6NySWVSsvYSGkUfsHijXSx3Wn8KkpUbRWJaEPBLGAnmANRW6hhnfug1HQGHwcza9PZnLVDQ4VaRwbctgB",
  "key6": "2HkRX135DXXWukofbZ3w7ENGL2DMpAnYEQruH1VTWMATAvrkbLzzH1AGf4t2tDuU9gocRaDhkemGz6fA2anMVg2T",
  "key7": "5XwA16iJ8dw87xeFwijrgJmeLkkQuQ4PADBJF6NQAA6iVrcioHQ9bGYx1AW3fqXMBr6P3aWPkrr3VYz3XHbBtSBY",
  "key8": "28fAvEsQTmLzmdGV2Tw4Aa9FwVfgVpaptH1L3RSvUkdepuwhYED15AC8rVyvrusUhsjxmG9HNZqxzUke2tB2hoyV",
  "key9": "22947HyQZJYa42G98tCTKcHvsLgmWhK3WHHy7pFSoFTYRHQuoTXKEVC8k4eiTU5xZVRqqPhsLTYA6sS16n7RCVsj",
  "key10": "4BmBjgRtXqvt8bX2tSA8PGBbZZRVLxa2GrbRh2eRYwTYh9ZEHZ3zpQTDnjSEEm9ctv5G72L7gDQZTRRbtCLiqhWJ",
  "key11": "24ZrmCE6wQvCYceUR88F6UbLxsu7RmXL5Bu4VFDSAdKEUqE6gqF1nUCsgkCgDDx2pGC4dxKSTvSFXgCpRj4cywTd",
  "key12": "3fyVPq7zf6aFAoeGkjzZoWh1FFqvw2o5qYtcTVahQxbKovrAi2cNPEJGRSANCqJgruAP14APePqT8YV33dTiszNy",
  "key13": "4JVQsHREM49EQVbhYYxojEVpmUhYmcFGv2YxLdDfY5UTfaUSpyD3oPzFMNsXaUdWsDdSeoZKqUKYKNjgXg18Xj27",
  "key14": "gPS8rm8rANHRz6YZFUjfRFqq8RpxUj7FTFrHn2cPCk8k9udCG45C3N6Zot3LBTHMKMW6HeXwjSadWmju1TYzs9E",
  "key15": "62LechVtMFnKxteT2wQw6JdU4jvoLBcwkGqfMK9yMwe7vEU8zG36d1vpGXBLHCghNXQVqVfEaC3baRfJQLkXjajv",
  "key16": "2JVTiSE9MYC17VL3ELh6z5aN1LBsM8jLcSXjzHo5WkyH6o3QAxjjNWV7eqsKSQtkV6WMppfGPo7Mx2vW4KsXFnA5",
  "key17": "4Shbnf1dqzR6THkRupgyLJsRdVc58co1cLG86BiakATnak7FPJQ1ViDGLFijFmZC8gAseLyvTmWMeV755u76scq5",
  "key18": "5rnjg5rdNK2R47CC1ZFjSZkR6HAXocX1tffKz6UVTiD8ejkU5DB4KGg75K8uo9xvEXxAy4VQ2QRbNdisBe5hZJx6",
  "key19": "3z3mUo8uWAmQSxZvyeuPFrH3Xh9HBZZ2htcSjgqFygs2X9CtEVs4s3oVvQ8MpJvHiXaLn9HHrE5LayGvVUN332iY",
  "key20": "4YLaFbbQzP92TVkWUiZfmW6UoXzTw84S4Dfy7aJtSwwEBzLBCDfS4jkJqb8F9ewL4ZWVCerPoVdCyB6zdtBnpd7o",
  "key21": "2drNSTYkVfmcSD2AUbSbrXWEm6KCrgoNou36aUxW13PWQSNvxvRdrGqMqJVky9v5v3MjqtPzfaqso6Hn3V5kEMk5",
  "key22": "5DFmpi63yARBzSRTc1GRNP6o7BR7Uek5Nrde5DZXFaECW5yFCcvjo1muSpbHJmg1uxfg6iNKeMdpt3H9nudhK6JR",
  "key23": "6cvBPEuEA6GgiCGdRDWsoJZk3A5bG43YEczC5BYyNv6CozZNSBMwFDJ7mGxXjmjP6AQSAs8PvDq4ganVP5VUvyQ",
  "key24": "2HhZWstMWouHVueR2jw8kXciJQ8P7pim6nzAE2B5cycbxA6Fkcj7FR2F3RiiEBvpUjx25kdhWjeKaSZiSqanqU7L",
  "key25": "4WwQgxhaaftqACUKxDLVjWPWTQbLzfitcYq345qrnj4dVrSaoC553sWkVjGGgXj1ZSFTmecxBKSdtBaBJseA69on",
  "key26": "3KFX5uqrYA9YTrmDkvrkpi53LY5nAp23WFzKxixGuyrPy51QvRhgnCLZ2Bz5PzuSE9rDGykCkbfuaeVsdVjx8rxE",
  "key27": "2gHi4vdnkjMjM7LFcYyCBS8E6h9YNKRGDpg7KZGCQ3YHYGBgeWBQqXo8VPbFysMmaM3kA5TB2Nzxk7FpTqcF5X3J",
  "key28": "pMkUqN59zHmWY5NwNQJuLLqRncBzW5Wfj9BmxZrnjdMxiR8riZg6zv1w3gG4ahXsRhDkppVrXfEy3ZHNBym1Aty",
  "key29": "TdALQYrXHnvhDZf6gnAKYsAphpsQpeucPgNpCE9CiDtaqubWKv9Cy5eWgoEPDC16btAga3cZTkf5JT5dyaF7Wdy",
  "key30": "gzD6pVVQohd5TF2opxGZSjNfjujWgrY8HMTVywwH7xuKtn6ZQBXoNNmx5vs3pggYmVcuhvN9vwv6dbqjEat1sco",
  "key31": "51cb2gWYs63sS6kEv9DmFWW8EuiCgBaEcdrEbfhnrrgqkdvJTvZyPcAjnedTuF79jR7cSnF281gKaFexoik7BuMY",
  "key32": "54DbS6FYuC3baRv5u5MNYsAaLJeJTvkmXsBnFR7LvFHrzNB5SbAojw5f94kBttRS5VwGwbq4gGgMHdf3DzQwxNwZ",
  "key33": "p4zFUXSxgiEzH8ooQ3JdxxhSb44Y7PDesK8wiYSikg45TywzDowQdDtkksSdKWZqqVdibM6LkJ3w1LbtEWYHhUs",
  "key34": "3MkDAUG4RMFogRs7dXu6EEJgaSi7sGFAEBcwgmXjw2yD5VTMymC6VFTudYYf9TucE6z9iudXaV5AXpFa49J6Gw8M",
  "key35": "2rjqJJWtQYPAfvhEGcSQ2P6rybTaW6WeV7V1miWLafKqK5eS1ARnC3FdZ3vwB5UC6MYBd5aDGT2YRo699AXWXFnD",
  "key36": "59ao3wTvXQVf97Tx1WCJ2jgcLSUcHSqGzUBbSQ6UNgjZWmEFtKyFCXunmKQNgg4pqWghoTwAqq86y5fraScMf94s",
  "key37": "Q6qzSGAhMhSGmv9nHxdwpTGjwC87GJREdq27nEko4k2yYVZArA55qVygSSA2wEjSip1QoqvoFywW6p8V1n3rEFA",
  "key38": "2kJDoXKhd4QhSosahvPAMPKYuvKGooHEiJtdbFridTTwFeuniD3sjC3t7tB9FyZ6gGPLZejn47w2L7avnoN4CSKv",
  "key39": "3a28H9fB4oR89q5tVq7HwbKiw22QdNSQAG7kdm1T1wdLgceT1FpK3PVqA3nbJsMc7W4hUfoyyeaxb5hvJYdbSdsc",
  "key40": "8Pwfm5VmXsyLAzooxx2nyhStPy21aVoxKXqzFumEJa9euBCf2ms3mYEuyvS48dNY9tYFZE6ZQgv2b9isu752xoA",
  "key41": "EvNwEaQh39ZaUru9DmJUWs3acFGRDL4Ugy7iyG3L8j1U3RXFiCDxS1NWsCgJf5DAXAv2kwVkF5DnMUgXezSXiD5",
  "key42": "52MYB6aKiGVTSCv2KcuWrj2cNtrirHR7gS88vuwXoK5p3hMxgs1154WFJr6isHxZeyf9nGvrWUYegEXpy5ZHu65y",
  "key43": "G8QKM9LwDnbCEHaAJWny2KHMNUSzVeXbKuVNbZxmBeBMWQVP2bfWmr7nYCd5Bw6nQpbX3qWwJiCS8pM6BAohb67",
  "key44": "4g5vLtZvdWWqk78RH9eN1FdR5oNpB1Wq3AAvm7dxSg3MYKTVwqttczeQrK6RH9QjQAcchnUDxDeyDzVi238RJeS2",
  "key45": "3NpYQjHUZv2Cq5nDRFTHfcsnCVoKepMMrEUEoijtKT3fSxwtwMLqKhseuoZrtDds9dCY1j6hQFsZrL2TgnG2WRRG",
  "key46": "4jHrcN6UFenGLEPAAm36jAZM4osTfHwBDyw74C3tdDYJF1g7sqfUMVPhvYZFpcTawtCS1AH8v3fqtJ3aQHm9sQmC",
  "key47": "3pGL42efECqZ2BMU6vj2efmRJYtpf9PAKEpTCWHgJynpSBb3YVvLtFALjRZz5PNNL265XpiZYGimEPxYPow4MaJt"
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
