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
    "3eV4wvhymTwWMCyb13ZBqDHTWNZC6sZsBof9bcLQY8P73fFN7tfbxde9nbd3mFPPwf6FNqZKBffUEXepiaS6fgP6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gFz7VMAp7zfM4vN9MfxgKfr73Appf3dpETFN3UfQN2BotQXwM3ho8pyKENMRJN9ddM4378PDBcw68Ebb5kExdPk",
  "key1": "5zaP7YtmHuYbfMA7NWYAyGqNBe8Nrw5Dwi1jp9Qb45LTSPc62SSSJ4e2ZDXKDoUBBAtQWvGGJafkLBf1rCpgNbbU",
  "key2": "5mFKvGfD13Ts5dEfaKxzoboNWEmsoCkeJoEeqT1EVDXLkhAU7HrXohXmL8p6j5P5izZeQ4vY22hcm8jMgztFfMR6",
  "key3": "5Lev3eiVfR8721wNujtRuVSprwShiKFejJz3UtcNAWUweLfzJCLx3CRrMnUFvyWKQFaGz26WKNkL3sh9pnZaMSMH",
  "key4": "5JLxCmFVhsQ8Bc1NZob6a63SgubfoWC9YpNbyfUMK1or6sdmZHANsdUU6PvdPbLJuaEoQ896WaQnxJoKz18xG5Yk",
  "key5": "4FgRnQx9u2uPGamqgnmGRwkm45RqodfQswQvAsQuSadXeWGJj2fLyNS98r6fhfyfzhmpJMENGN7sYv9KcfPvrTbn",
  "key6": "5n2tzftKPr2QY1YTXRjc5oSCYKa36WovjEEV9xamsJyyGe43EWzqKyfsG42s5RKSzbp4rWGni7TxoiXr55yRDEsJ",
  "key7": "4iLwphrjBBLidZj3nbKVJMLFwHhE5Rx6rftjikRMivBSNkgkL9Y9TdsaYZRa79Dpru5JL3UxJtTSSfRjmnR9dUBq",
  "key8": "42tY9bj6t6GuqAzVU3tgTTaZhF9JfQLoic6rhgU1LpnpBn21XoGX72Qi2d9iAS3wZmCAwBSriND3mf6eT9wnKDg1",
  "key9": "2fMT8ogpBS6jfa9xae25e9v5UaR1TqbZF2csDt6fvyRDnr1WZuE3UZnvY4GkLVCHKLddAhTvBFz6XYQf4yvaJNwt",
  "key10": "vZhs93fCaRqYSAfMv9xBzNQ2CamiF71VgXD4p7Xw5Bgh4KPnyGz7DqQgccMDr7b3tgHSLLJKWR5wdaiuPN6Txqv",
  "key11": "nmw8HJ8QgtCzociizeL61fYrsUSgUbh4P8YS1Wydd2GHya3cxQhAvgMaJEg8Usd2Mp2JeQ6x69vxgLj5a7Bt54s",
  "key12": "3rm8TWVZsTjb53fqdBmyLmunz7nbFjxL4tR5kQbvfAb6ARZTYFntwEY3GedfYbZgd9SepSw92aYyVoMz8x4zXBwQ",
  "key13": "3K3XEdim7eztUAH2eN5dnPToAUaerSV9rWz6u9psExw7E3NGNhndf3U2t1A5zEn2De8PmKXN31dnBJvJYw7biUfG",
  "key14": "25DkRzK8UE3LtGDpKGtQasZmYYWXR1sga4WQDcHc8vvNmwq7iF5aPw11eSDBnNHvfosAyf9f6rBD8H2twRh2MGcP",
  "key15": "FsKE6ETJg9oNu6SqNBQ3XfJ7zobbwp6iWyULgKeCLperrKVAiKxCoHKKFUiSvHPwwsUkPXqiYcBwbdFGV37pGjL",
  "key16": "4B3NiY6zJQn7KbAL5CcYVuYg3fB69bUbK7if5hvtqrRGdLKAUyC88ZU8Kyw3hUWjGdjXeiBwWvjjNMBnQsLxsgYK",
  "key17": "24dHgtQv29GQSnjyPbJARQHVZWPE5p9wbbfmGyBxpJCoQCq2dVgcpms1p4DUnPm2E1ZEJRddmLrHn31kKdZRbajo",
  "key18": "3tjQipiooYpDFqoBHC3S2tzKoBBHGEUxLuHsJYtXprsiEDwNpbm8JsCwZyWbgteVkn5jyoY5mmZbZDqnD1FbM2pB",
  "key19": "54vErCYnXGzzreRYJwGUdag3nP5zWSAHS1aaxQg9GQzUCkoz73qM8iUp4SJVrFMsN8uCiwqDYvGQegRqsusSNct2",
  "key20": "3ishP1tcLTHtqmA7rFBUa9jm1vznaNcksYANR7LsBe9gcmSsrJKb9TwjQMxtPz6aiHZet6vH8ksr42TSk18DmtdA",
  "key21": "7aqXeicuvXBvgijFjY7d2z9GpURQ7zNrxXRXPdwXjFyKw1XCLy4dFuULkB69gRVo8yUaRjC3zusSotsoujfm56f",
  "key22": "38uBHxkxLwYuq8rRtmzGvrqA1SJR34WsvMd9secipfW9s1tf91jEdmgHktsHAT3jnBCyL6tRXFQXUBq4LBS1NrHW",
  "key23": "ZcuyNY7tr9qaF8nAA8THmM97PQskXSsyHHJiAgN4Dpm6T1VmSUVp3nPwASGiHw2UMY9Cvm8LpSsuoioKbRJZFCv",
  "key24": "5ekwbmDr61qjbmmQeJpXJmtLYicBYzBTYmxVJgxoo51FGW8KeZc5WGSNnNF2HxeUegEz9c5xK5YcyUKGRHbkbWR",
  "key25": "5W4zQrAmjoXnjNhRB1YhPofZFitkDpenEJSs3kjVusomX16timTnNPNS8vNUpbdM9dif4sbjB3cZGr8MmBrpTKmJ",
  "key26": "4ogKJnMnxoLaZBLWCNpEBNgxmxCV3duNBUtCAciwxEawDpvnmdFK8887pqau6igCXRRw8iUyTR7sFBnhPMpvW7Ka",
  "key27": "2VzzWTWxkAJvXbsiJzb4B5Wc4C8ajUrYV3xb8kwsVhvLTD58fcHbNxhd174mZPmVWqXtwb7L8KemKRdZ8gSmhaRa",
  "key28": "2ryKanbzowUrvxvBQbXVa79D9ZMkPJ77q9gMdEpMN4UmTVGrD2SiCM7SfZ7wXpXL4W6vyKeVACkf9T8fAme87ALe",
  "key29": "G4PxzG7YcEMMnMbEN8z1mBK561b62qka4BdopSjyw1ZhaKX7mn5jEjCsJp81nb1uBuCCuzMxT32rADo9GHcVEju",
  "key30": "8B1TDrMYnbMmuy6GKno5MQHPgAXErL9odXqazCHx9QpmrduFCeHcky9wtFEEZKn7bGqFtcUgbAtKmApprMsLM46",
  "key31": "mJ427oRaxti3sr7xS3c52EgNGF6mgUgmEQkegGXeNfKLYk8829CmPMGMQYppSMoZuc6BWve2NW471x4bHzECtwM",
  "key32": "4qX4EHWRyK1ywBBWLwmn65fbQxP2GoDZgCV9Yxx4Q1vkSHfGn1ys6hjSwSbng9NJbowLK4aAobQBhoEjms72vFeM",
  "key33": "4JgE9vsoNx1NTLPhpTRMXT1wGbcrw1MV6zhU98zzXwhMFUWNopkWroiNAW6qXEGuNDo82xd5UE9HGJVrcrGPrWxT",
  "key34": "3bVX5gLoPQP69ehMywLPTkSA3KparEZZazmSTB9gAwWh9oVnZH7f7pLt7KRkvv71eRfz6C55ZE5f8sgbow4uUAZt",
  "key35": "2UL1B8coCqjDmgGBVTYaDoQ1xVMmpdopKbPKsRd33qsY8S6YN7bNLCq1S1yrGPKHiJuHwdjLypJZG3H8vVjoGT4E",
  "key36": "449WDhT8vfRBBZW1PPKj6qoeRnJv8pz2TNuUYu747yXgNo2Fa1JaCbvhY1FbiZv7zgLBR2HojzXnDoncw8STvkVT",
  "key37": "qFAL1ECvpRu5xVpwPUq2dfyAMRcZjN1VX7L94TdNRG16PSTBiHZLiMjQGpm4BoUb9FSsaNZ6ZruieYGVamHVi2K",
  "key38": "2jksFQpNmeL1qBEcg8kS1DfrtuV7aNwh8ZUsRYbdqoxt6qXVLNuRfTNVw6USDuaTh7LjadwcfgEzadnrCxMkA5b3"
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
