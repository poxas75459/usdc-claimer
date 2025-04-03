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
    "332Cy9dAq7d4UDa8Gp4JF1sfHCDSrcEXpJuv77DztacuuFESRNryrbw2QwuRTYWTnVSXZmLMjg7E98iLZ7fN2jtw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2x3EASKdgjsmwVWUu6BvxfR4pmcvp42d86uj8TWm1QhjgzK1UwqP2GQdXPrzxhYNx9nUnqGt6b8HkEGNGTaAt1Qx",
  "key1": "3PzXHRaZtvDtda5cRCLSjRxwkavmRwvbkkSfrHqgdkg2bicDVPD36pmJhyoNKNKNGyemVAW3r4Vs5Nnv18a1CmLF",
  "key2": "cMihX34vsefF9CBikscnmrNpRCyuy8boFvfZn5f1e6wyczXaayFQM2ySL7iyzAUxKS8tvDfXBq9rFTm7a9zuix4",
  "key3": "4EQ5SK9goEeXCh5stdc9LqX12TYhDgyUWctssSpW8fGKYECpFafzGHrySbrADfDNA7pJJGc6iPELQhD23QG7FVqw",
  "key4": "4Ze8qZTaBNRhTkEm8LVewyeXxD2L5o1NRvDL3XjfG7Yy29FcQw9tV1NhwVMB1MjthZwMDRA5bnF2iuaRyW2rkVUX",
  "key5": "4tQ2ugxsh7w8nNA3AmTfMNtwowrdcAb1W7NWHSVfssieF6HnPeKtYYdTgtw224Cherjf3cNVFmSBXQ5u8J9nRxf3",
  "key6": "4BooAU5Bfua3w7EDdhTqSvaYKRxQug5q58hULFLqoDvNTeRW6sMfrFWCAUVdPgQ32FZD4WJeBn3ESouiP88mBHRy",
  "key7": "4YFMyBb8K9koRzEByQ66x2FTWJoab7AMpPrM4Y4kWuJpzMi2yuDJPE7s4M1XZKftQkQL5VbscztxJHXyWzDpCKx",
  "key8": "24tdQGqkB4TigwrU4KRnSxj2faVntQ64UV3tvBSr674kxr8DZpCpbCgo6WpnBYtsevtSa3wquyPi5dHETHQuVbAj",
  "key9": "EDwu3QJqX7wEeaD9HzaLrGACPAzZVepxhDHjCaPtiLBWaR9gz6N2QFvDtuLR1RNWAQaBbhRJGqkCp9RTNQKm25v",
  "key10": "3WLV7hJbZZtNYUahjE4kMsSQoVp58A6sQxg7K123Y1yBwdfFpDhzSjMgSU1LC4jXx115Y9w6wJQQuLWJEXeXRyur",
  "key11": "YaSQHcaqy6iadDCKMEFRHDhU67FEYgMNDW52bP6Vtzn4qkhyemstGGadJv67ZrabCcj6s6zDXca9nAtF2kz8ixa",
  "key12": "3919rjXLhrjaAg7kmjrDTBGHDnv5PVinZ9SdCKhNh3snPNmiHRkDMrfZzKGMcWBTFjHS4XLMT99nakb3duEYz6sT",
  "key13": "2Mgn26adgJjrjNv47bRfTb6inmHJJ2F62uZ9WRu23Nniv1yCN656bZP6jP71RpisCAdRcHBtjbDPapF9CoDaA8ra",
  "key14": "5KVcVGvPyrFeoWMTV8MQYBaE4JqRXe1mJFYUGgzDP9YQMcdtp7KEDxEV2MKD2gMFVp7EskktqCGZmYWEEokEbKwR",
  "key15": "98qfpFKrC43ubnwXQX5dJrHXEd2rmFk7yt4LyXVNAq2YGmnUmLQEUEG8k87hqksdEabvQkn5C7MfjvDV7Hm6ekv",
  "key16": "3PP8Bw1L1ot5W9aFNHknmCekSNXfN7DNimzdYLN2D8tUaXBrjdUQ711K14VbdBdTG18HnL2juhW9fHd8kyNFgF7f",
  "key17": "533YKY7bRnaRrm6eZFZas2G6reTWTcT6nn1Dbq84p9SUGYsLkh2k7di6Pnxzq4NJMQc6tnu2kE9yWKhjpXVi5nGG",
  "key18": "3RnmZQQdEcyvJpDgjkKmbJHQbcrmZnTMuqygsiFHd32vpxdAA9WVQ7uZuKDSFsL4xe2DjzeRzG43FNDrYxDM2Wcb",
  "key19": "2aBHr6HdzS6ewzuXaMnsL849WF7jE2dFLyGDAfiRq3JC9RQTd3jRTy1LAd2mjUSj7rHooRHe4VffHY6GxUBRAh7B",
  "key20": "3kSmH7bfWDfiscume2BFY31Spt2t187ybVP7Qe9sru2DiVuU2DWL8Fo3i5eS5wpK7ZFsgN2XqvnLiwiVAUn5evpF",
  "key21": "4SGw4JiaCFrgx6ULtdTTtqNKB7i1c7PuPTeRwfxwcFr68ryf23wULDn5Yzff8sPKdw8FoTFcw1AAiGTLVF5dyVzf",
  "key22": "4jcfAFDf8HFcYfmr2R1Dj9rwCdkdkK445dkw6AaLmvyG3TfhqwedUBC2DTdV4uq72uEBrMKuiVAXGsDqX6KAv6hT",
  "key23": "2w96hmhsKHiyBKfG75xbsujEF4x2MEMciikQQB1arSDefrXDNM43F5WYDkW9X4gJ5Hh9xtxRoB9p3nu1KC2536JF",
  "key24": "Nn1V4k5jS3g2CEiarQAks8pSrnvbHFL7teM1nvxa1vqRvsb9tcoFsydQE7Rndk6yZi45yZAWnScFMzmivgPfgpr",
  "key25": "31VwVAmDwnXTdTfoshfnubGvvGRh2CrFHSZXfS3PcKiu2kpvBTk7VJZkDgwCwGBSMrnVgrNeZineu3dLY4fW8k5i",
  "key26": "2TPV5aswC9kboAigVKLHVVszM9LUiKE2ofmFg2tvH4JykCYKrXSBRE6fMD6gpxV38AzvS92JAiQJ3KFzMKmnsSUC",
  "key27": "3YzQwBSadsJFdATNX7XEb9jQTBHcfmJh6kPt7i6eTVbMoL6NhH1osuHJuB6qeTSxau6LXpUncuMx7GZzKRGvNmpk",
  "key28": "51D1mHuQWK9Bkcy9LSKYmAFc3znQBkDg6CP6AtLjyQUSRJVTGorcxeExZbbGcHPUmdWi56eApAGFzxeivPCrL19h",
  "key29": "34y8YRkRhy42FVo52ET1y8dsuZpuZk8EMg4MihT2DzhMacSwxWBVy1uRb5k3hteT4N77VgM37FibZjuEjAmxHcv2",
  "key30": "5Ruudehxw63dNqRJfKBukM1kK1SPwkqC14BNQVSQ4AixJkH3vhsTV8AAoTLnyUVvG4tWRdkHUyXdPoPEwcNYcpBf",
  "key31": "3NLKfRn2znJo7J6dSRbsw8ADMg5fem4BB7R5oYPpCqTARfa85rD84X9gCXKD87jqtt9xboa5qUTAhYKFx5WcZsB3",
  "key32": "2KshExsHv46cA5UEfqxHcrzLGSaTcE9M3svAfoewoyCkHtGbNJ8B7X383mwqoxx62w5FtD4Syu3ptSHeMtgQ7jUG",
  "key33": "5nkBgJP9ronmpLTRDiJzWQenvgHQA7GfMdtSNkorxVzTatmJThowg6MuZrD8qhxjAV1H3nyrjWf5aAibzjho1sfh"
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
