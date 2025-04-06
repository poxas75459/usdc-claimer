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
    "3tm7S87kFegshwXrkeLctWAKfz4PYw8CvPgZ9XWQcnWi6dV7QhSNCUwRmJZ1BNZj6grGiSsnqi6oQigT4yYwK4Vc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pKdJoVTV4aAsvqpMvfnBmoAsMoyEH6AbJBqD5wUodc8JEXEKUEB7nSzUMNX9j1we7Vp5STG9cooKiKAmKT1KoCN",
  "key1": "3mdo2fbZuWqqXh8Y5HqB3bmhojEaBPe7x36zN2YXCNwoM5dvjz1zWQbeMpZ4WVoKQ9ixzFPmM99acjMq1Tv6tcEz",
  "key2": "3VYbBHVw7xswL6pwSAL8ndQuTtqadkue3EM8XS6ggopPMRs9gsWA4HoPikA2MBvisEbsXT5Jf5uBH2v15TKWHaxP",
  "key3": "5NjaVM3vUPiAVY3W6ECqsrfavddz8N1XpN6PK8A4o9KSUK1ogFcmqDB9L9CTTNqPYaAAosYWpagSBWaxxR2me3qM",
  "key4": "fchTTrX8fPa3zwb8cX5ojeVSiGf86fVaNf3CgMqJrP62LZ99Zr2eFZrAbEXxwGaj4VKXVt4Z6MSR3M13UMSB5CF",
  "key5": "5BcBQDpHiTeVJmRgHur3UCRdqdUmFWN56cb9pKtR2ceJbmZ1786RDuF2TTQd3Eex6wUqGWE1e9YiPuKGHY5pFQqc",
  "key6": "5MGk69HaSxuAaqo64FnhiNwSz3f7CCFxhnDw6CETKk9T2VQDQy3d7ChJMrLCrWZowq1Gzvor24QaSHZEtFH5pVBw",
  "key7": "aeKN4VdNgZCGiTehE3k3e2xcwGA4iuTh1bJnAV3i7cZt7hTXSa4i9rS7GNqTHZaXc3zRry9RZukJp3xj5oiAVXR",
  "key8": "2H3hnZ6MWV477jSAHSGgZpNkKbTLhg9PV3mb84oCki7B1UwDnMTuSMLMLvWBUmh457gF4mbgw4311gMRvDTXm5Q9",
  "key9": "k7t5ZCZToYVoce3BACJ57PB9ik1vAQVBPf3ovb2BSmad4Lm41hn61kq7dNxZodV6w7NM89TmiroHtwkRPqB6qsX",
  "key10": "2P2X3Yvd1MFP9o1oXtwm5TgXjMP97UFqTMsjNivPm2LamCH21RciHAUCgR9TXXNkEaBKGnGKXDWHWv47YH9e3ggc",
  "key11": "41uy7XccS7ZQv3k5QoqPJWPWFnXBQuPncam9jVETi2TSm22Anr16mJ1xEuN9DGdcyD5qZoWRxGc6agb1vcqVQ2EB",
  "key12": "BgLZuNHCY62Rdrn52tGiWsaBTsVsX2Hjaazn8bREkwzM3NPepvgrrAM7XfY2MGVRrtS1NBWuYTsAiMWJXpXM5iQ",
  "key13": "3GeiGHj6Vu2fJKjArm9UD9wiNG6kT2WhwxRhhGZg4YCczHttTqnyihtcDGRv9DwQ36uVEJ6qKivr5RDdxp8uDwtB",
  "key14": "5ydXSqaMRTY6A2zVmpTxUsXzhNCakiTgFxwHSmGP2hJd88g5FkMDsyW9rmFrNb65yKvprp3aY61t384499xLxg33",
  "key15": "5pqu6gsdJ1VUffWd6JAkC1NNAkvyaqGRdCa72YrGKh3ETNFCFashqpt2dAG9xPuPii9foVqUhycz7jmGZEuEVcKA",
  "key16": "4wEK9skitU4ojEMAdKhXn9XjEsqsDaZkskFAxvMNuJNjyg5VaTUG8paRNj5VkVRHtNkXfXBEmSXcA1bj82cAFspF",
  "key17": "59k2AuZCxo8NBbZCdiyx1ox2mJsE2VZt4YqptGPAsRsE7eRa7DABg2BFtncAaCebMGex4jo3BQzvsSLctGyz2ytb",
  "key18": "4qASDawM9jPaQGnLr75Wkeki5WoqJVELs1AzwsYtjyRVXaucmaCAeLK1SmByMrcFjcyN181pMGxZvQrJGaWKuBBE",
  "key19": "JyNF6CphG7rzvXEBGuDTbsSK9miRjDVtwVbEAL2Wbobx91nDy3rFoWjeyyxefzvXTzF2GtzSmXzbco4zfwBHEiv",
  "key20": "2Qw8KmAzpNdUcGfBvehsFL3CBaGPD7Cn7XmNeJeZiYNhpsoaAsqQBse4m8BL2TByNAe8BYiw1H7H7J25cdeu4Bra",
  "key21": "47aamBFaM8j3DbA3eraUci7yUxejb4HUctHNSHapVUu4fyuXixGUwNSpSporbfY3btAg3PaxuLy2xVndXSDRjF1n",
  "key22": "YbtUwUanQ23FuuBnWfxjRcLsxksq1vRfGWpJxLagNXZhVuP6vJ2VFHGgyEv7UdCqCQ8fifzotFgH5ert7rcWPZk",
  "key23": "4TT9ZkQsKQZjs4fbqFWN5qxSVsHw4Hgdg62oPYLpS7SC8VGWXezwPkLECa6KygmSt4vNwDQR4MhMmvBwdxJoarDz",
  "key24": "4nwk2R3aXk4nKJCuonATaz3f1WZ9ikUSRck9cTstKF1ynjJS2CERP31bcUi3nA9t3XRQ3Ye9zYAYVmyDKJgqUvpS",
  "key25": "5Dc1AP93EfS56w3hmWw4F4wj1LRHHrvyjr6WMmCHfh6MtoAkW648kr5N8HWQ184KxdsziKWtwuuBfWXE5A5dSpm",
  "key26": "3rcJUN8gFizFs3tCpgBFNCgQHxdAHKaGxqrK4SdayYwxmwSbLfa7n4BoY6MmXM7Tybv24adE8mvxZArXG5PixbM2",
  "key27": "5ez7iYDpcSdHXy5RaTmYUZB5QaeRTP92AZYTBGfoWKaxjYMzjJmdXQ9etm53EjyS93FGHT2eVtvz9sasnCutsJoy",
  "key28": "3M4PrnZvhyWpV6W4997erZYfqfxA6T32zKYx5zSgTc1rdrs79tgPB2yWBjckpAJJkGHAJcq2jHaQEch3DuTbSXLK",
  "key29": "5MDYMsiLS542dzCg9Dt6QmseuFDMkgJUzwKy47RLmLEYFbbeEgFMtoyn13JK9S8wjQboGan3Vyb3LgaABwURoeaH",
  "key30": "3RvF4LZdqwn77j3Gi73D9uuZ3khdC4c9PscBpudVUJahXCkH9P829ww8Tat5FAdkT7gnCvHmdsznkxi4PsnuDJdg",
  "key31": "4gpiwNqTZaZDKP1NwArvHngdEoxqphSHqGFuXsw2QhdE5xeSTxZgDL1E7i6GoSEveeU41s4TdKMEQ9tfKx4CEP7p",
  "key32": "2fzpuKwCKAyeZ9UCmmQ5P7eTFFeoPBBeUN9WgpkAUuavXCrfAEz4HVz5M8K6o74PkJWfFmBgevhyw3D1NFBEUmDJ",
  "key33": "5R5oXFYxaBzemTx6ijW61rr2y2Ri1VDiegawM5BmYQR77rsZVfv9o1v1jNiG2sjV4Qk9Vkxe17chJX7ix212e2jw",
  "key34": "33uZb23WtPDqJzdF4gK9DUgfnkpY4x1erDQ9magH4tgY3oozzN8zBAEmFWpTEZqSRMaRS9thgnp3e761KzcsFaK5",
  "key35": "aeFXGf7bmwfVpP2qA2snyBfLLokXGVZEW91z9T3r73dHZrabasAVSLm16hpx2jUVMjjkxSTTzGgQyYHPAk1HwtV",
  "key36": "5EAUBFT9Pf1TyPXL4szcYnSEcmCgdwmp8JYuRLnYqy8KPVkho6Nj2ocupmStuVzjvBZzkR9tsR7GQg8x3k1ZK5pT",
  "key37": "5yJMYB4hsFXnieN62QrvrnH6LsvbTgxrGB5KBWmoxx3VSkWEqkqN3hVR5NAUaV6HMExuwMhB9iRE9mqVzDPcpaDF",
  "key38": "22bAJjtnnL8QHcqfbxxzd5rGCZBdDXLFrkh5CRoScwp2huvEz2r2Fh7Wp2BCg2UK1RP3JkdeukV9RAawEqcBiSSk",
  "key39": "2nzqL1yNYZ4PB23sYTCaT2upkqCN1qYbvs4vYxYXc3ei5Fw67zwraw9wdHVEAgKtk5r8aPjF9SC7cEgzExw6MPvx",
  "key40": "3XwqVKgodTpRZt25PSMvLyp2fgikyXzbYe3scrVSAiiipP2vqTtHaFLpMZqSChwknijkuUy95yDLHrzAwX4c9KrA",
  "key41": "5f9GL3jhSzfvjbiBq6AULn2WG3VahRw6a7BPgTgxCgQQWYR7ANAqheJb9vrGdY5VW1vk5SBFfKFvZD1xKTTvrHP2",
  "key42": "5mcyTnwWznnh6EAhc1yBa4MHUN9LKzTMkddzgGENWxVLyHUquDpnKytWUMNVKccMD44T2q6xwWRFnaBWtPe5G56X",
  "key43": "44DnYMDp4r2QUa3Hp8JJKP9uYpAZVY5d6xLsEADwtpL92NDR2mh6s4kDW51AcgQNijRWeP12QzV437EvYkKC4eYq"
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
