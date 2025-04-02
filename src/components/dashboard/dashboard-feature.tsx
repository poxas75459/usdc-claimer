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
    "367w58MGwKuhSRbPmuz3cmS7TH6ttu44zKXXmBhPShmbQpa5P5jN6pm7dQmgR8MEfktSuorAVUowLg4tiNfkTFqx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "251jn7SQciLve4mkj14NBsusppR7A9Yww1t2Gv9PxQxHKfsvhjjdHCY2piuBzpcX4zVXSLnnnqnDY4GEQJDTDDfR",
  "key1": "iwSz19WshLqJavmmJaNNzRdg9vkJdFMENyVTeibamJNGGqfxV33577N7cwtHkatEEbr4dhf8QYq1umFgm6kUkG6",
  "key2": "5iUGt3NWSaRZsLcRNoHyhMQj2hocJH1iHEC1mC4FX5xB5XmKiM8XFYtbbN3E63DdSgvrdSarYWnQapbjZ5wkFCoC",
  "key3": "3aYggaYpJH3E2BQRVLQfBGy5iJPVYjMkAnhq4WFioiptqwK87iS7fdcRrZhRo4uabSjN6gnbwQJAnNjJyMtVAVHk",
  "key4": "5hVd3KaJ3kmy1AwkfAMWHW6fj16Pqpt2S3GNb25kZf17E37LJNTLfbrzQUMC6oStYqB7NR7ehwCbuZ156g2xLTDA",
  "key5": "21TGg2eS67QysXA7wZCzmXDFQRd1StyeQKogwRisb3vmxG9u9sNXhQeNTkYC6rnD1yo3m4PuirjMrQPx2amicuEF",
  "key6": "5Rf8YGpMWkq5rRhyLgZpTWLVnLrHKozwyHDxzVez3iNVbdLJcdKf1uSYBFVx5zsr7dPGbJQLfzSDh1JCELA4qgGv",
  "key7": "4CCxBBNUi3FE2efpstieTJwXVQeEGcCXW3Up1jgLGnSSptaDPWcBMkjN4tfuGbJaF7ebtcZubauMH6iLsgYFgkG",
  "key8": "66eun5p5dVxLTuYTEKqvmZgxsnE8SUBDBGgCn4MRpsxE7sFGy8PYNLvh1wWn6ML8MXWApzY2paXRoEMVSMvLE6CA",
  "key9": "3FPz3z9iJqFyGg2edvtXDgtLavs4ErPXBypVfhHiZLqTF1HcuUmm9HPXCqLfXWgBN6Birdf2WxYAFsfYNhwF187L",
  "key10": "GxR8REjujaUaSUetUWebvoEip7VryWPgfZRNbe4s4TpJLoCnZpmFZK8dPqs7Zdt4ch877PbsdUirka5Rg938sb4",
  "key11": "rSzAnFoJERCXk2JzUx2RXRbyLRB23whjPqss7xQiQXRQgE5RkwxSRkcUUKNaCwHvtiB8skvPggPG4iQjkqN4o8d",
  "key12": "R5L7XznxDLBvF4XHG8h3iS6pyt4sCzBUwuSRcfvZDPdaTZZuEKZ8BeFL1gBKBdmsFqtJgAymsWYCfnftX3gi52b",
  "key13": "3NYHihbCGmKvEozAisNtR2ut5vHkLU2icmejAHa4L83USoBPPnAJfDpNqhWGuex3mqvkG29pgnfSy5huedwkUMhq",
  "key14": "3m8YiEBNk5VuTm3gAvLRZgcADf9ifup6TCm8dr9dADDxQrfu4HxzULe3EWEncqoCqxuEbHAhrEN2tkFS28Uvkfep",
  "key15": "48ifyPZinEjUaC4bKfavrt4reya38cRH1e34MzaJDJh1Eahze5CkRLkoHKQedUjQYF2RHnuNrvYCyJrK1mG5Tn51",
  "key16": "DNB6SbsWfR8XPwqMitSB6DfXVLC68bUzM8Ly93uoaaNAFNdQMo1RhmDxHfU563ZkStNzU2afoEEfUr3XRtfErhi",
  "key17": "34ZQ3HosXgZXxNr2JUyL7DkcdgL28RzEWgFkXVGKqfhqrZGKRaTW4PNP1Lsf1nH7zSBxtHv9fvjWxPGDdGaZxkQm",
  "key18": "59FZiiPGp7pFJrgmPiCXiGXiFY5QYfpSX7ehm4vv9DyU2yDm21PnutGYv5fEoN5xwM19Cw7DG8xeuXpJg9TgyNUe",
  "key19": "4bd4LMrjZnNLs5uaVpg73PK4tmfgGPaen3QeyrU9oZwbAZKSgvXTGhFd1NbXyMRtgbrTNryPfyF33xdoAPrHtxpz",
  "key20": "5nXD2qBpV69VifHX8EpyvDLCf1cvZZWeXn9nB4RzFjr9szHeyFCioeZt8wcYsuXWA1DyXgpiPzrUN3ZwAWDph8uV",
  "key21": "3NCoissvmxHc82qyL4Yd2WcFXpGXJw3ssfzGx16aoUeVUUbF349GobpePjzHeCSFyAscUc2M96jhk5FbcQP4Wkdu",
  "key22": "49g125yH3yeX8ihT9QymMnQ9FbYdDQCSNzaPBi7EdaTz7T9NybTdHGerrsdXkog7nFfuSJY14z1pqqcYvMMq1ip6",
  "key23": "3LFqZisLiKhTVtTXcYY1Do3ppsMe5bnCv9oVwcBpvuZFRmN8AipLM96WXfPdaG2Pmmv53g8aGdUjNfnSV9pzoX22",
  "key24": "3MdbDcWT5639UxDphu8srwRefz4We8NujE9GGnu1oX9Hw6qy7B7HgC5EcfdMqs9PRiqjewZ8GaNHBTn3dz6ZAkxw",
  "key25": "44sqUsin8yvUjykNCuzUF7aWn3F1gGR6poDtRwhx1vGxXrdwVYTdqKU6FX6LaA82jSByxbHb4UuFSbXmdHNrp498",
  "key26": "ac3C1PVngBbaskSuJuh8Zcifdm11Sx7RqggjEFyq1fNdQQJndCdjhLeMCL4pSYRcxQnS3RXw4vHpRYiMxGn6HTL",
  "key27": "RvycShTzwpP5Cos7ja8CLQti4c96bZpRuEAF7XADULVow1btYBW6BXakohbc4DdoKyzXXWdmDiCfvWkEezHDEE5",
  "key28": "3fg5PZZtZLMXQLuEYCUFcRDQCAFqfvpdQeV6UhNrua6zzpkHZJqs7vAuMsmUXSRxYMT1RYi16tutqGQ5C4aWpcek",
  "key29": "2JfDyVLAkQRx3K2BeCwJ9dMb6sgeHwvCs3hq4GFXX5xtYqAHfg3VvQwkswZrv5Mz2X3bWjpBh2A4n1aEzumFWeyt",
  "key30": "29TcVfrTFnohNEDBAjFWRbF2vAqXziJxBExERm9VbRiyknzyZ3GKJhxQ4BHEGv6GfTAvbnyMLY2RAq8sToaQ7dyC",
  "key31": "4VMBKnHpqF6ErU3jC6F9JdjQ2fy1DCEKhUZUBbGR83sPgSf4iKwvUPt6YenkvTurDXFtLLkhp2v5tTuYwfY3oFty",
  "key32": "3TR2shpF3nriStwK2yMgTNpyEV2FgkUSsvbRdQRKUa56cDCj9gZEQpyYtzKi2D8dkT2xsuwWepgEBfohVVQAhydk",
  "key33": "2HJfeXJYM7wgftrGXh1DT1C586XkVEyxanJhkZjBzh6SchFJ6trvHp7nVbD7WS15vFF9DbMdcJb81hQq4QjsYGkm",
  "key34": "emLAa6xAYdJEyWCgzCDncFqyMjiu9uyHwCWHfJXSJQ9VciQr4SQY33aJnxWRU7CWodc2AX4i9fTvL1R6Ro6DJSd",
  "key35": "3y1bs9PCHA3isUi3wnXD1Berzm5Hd7cd9dSTLWSW5k6EtUBdX6k5YKWtRc9K8tceui4hpomL24oNHvRBqXsbrF4a",
  "key36": "4UdZf3EEpKD7VKxyQnTdu3rtQ5mCWCG1fz1e9crwNqxonGQdCimdWw4RZWcxe6zAtG8CCJES32v1W8HFZRv3e8Af",
  "key37": "2kJPoRXkiMVNL1ckQaC2grDK3ru4HeZPzAEEuvmFrP5bbH1vN7SUbHACd3Ldo7tvwE9qREDVjj5AYNw1EdbAyrLq",
  "key38": "4XyPJfAMwcsm2XRdFMN584D8c5FmvasVB348gzNJco56MrDZa5CtFu37kzamKjhcgzNXBj29bEYGxH9PJWANEFLy",
  "key39": "dPYLLtr1xWhqbGRBtvfN9kPSXY2K6UX367b9qM9d2GymWYinTPSBNEiYYphH1AnR4bXjDFGRPq9Q7ibPiJjMAPd",
  "key40": "5dwmNYJDPFZhYdBcxfwcfRaC1ZSi8Bfcrz2GbeRDgrCzTRvYfGw2C2R9ojmbXYDbozuHPxFTDbfVTHJCn6pozsq5"
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
