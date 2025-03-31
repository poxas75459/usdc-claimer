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
    "3bbFAwZEnJirGJhc8yxWvBDeo1B5QAu3ZK8Map1kRZU4MDuaGdvMdBm7FTP4EtHuMGUtPgbrtZU1oJuK5uNGBdia"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gqjR1t2ACfGxK7P1SvfcnHoamX1f3QyjkU1KVukYtXjUnP7hb1UfyQeixny7jMtSG4gL6bXDm6gRSrC7sm8bVth",
  "key1": "2XLjAsE8jqPexm5sUh7ufMmwc8fWh2YwL2AjwYQFo6TA2H6GDW8Cw8ff3c2QZkgnCZYfhiJ2kpa9eqnAcXCPjBC1",
  "key2": "4M6uYD42cTQpGNKKKUGUHRoXtowjUhKx3kSZLcZpWCY3gK8t8Q31639meSjkEnuEGTxtfnjtF2MZnepkfoHp4diy",
  "key3": "49HwXacNV2eFHwondvJoa5peoNdjJdjJFAFE4tMhEoLtoHFXC7E9fdGqS451YDuBX5me7fnMToxM3tUH3dHsnVkd",
  "key4": "2LFC1aXaS836dyEb6SvK3BLYnbstq5BAE7c2g2JMrJdxS4LWvP3cvTAfqvEuE7QNrcGSACfkB4RHHjY1W4ih7VGL",
  "key5": "65i1xKQzMEeqdYmSzjAhXvdDY2Kd43jFBiSBHPFEZnzivBMdd1ZUSxuicAfGeWufwRoTwxzyEE5DgyCa3JZxfso3",
  "key6": "57xNSvmveduq9EvzhhDchrY7U1zV67MimhxrfYFtEmDTUrmyD62HCXBeHExZPNvXHTvTVQhBsM5heLWTTfX22APH",
  "key7": "Gv7xuoskVcJso2mojh72xrggM8NJG9PVaYcKB76rKDBimvK16YAEhWBb7uzraHBNt2ZXmugRP72j2yqizYzHoYC",
  "key8": "4rTJKLR796v8DnboLUpYw4BnbGfdqhSB6BiNnhTEA4kS5xVgJJN5FVgWF3fpfokoB1o6ecBWe6fdDaVkKcXirQQ6",
  "key9": "4V3ZysMxRspLvxcKYW4b9o9X8Aacxtr683EnFmgDXjQWAJBJpQWo6pvxmyosfasVtUxBVqLo3dLgxUyum6v8b6i5",
  "key10": "3FcrADByVvwJFrrVm1C7WZ666ASDDKW1GS9cG8vqfFE6qL5EZVoRrvRxsuwvoWnvp1tJAbMKgNN1PFs1aFXQjX7z",
  "key11": "4gaG2HBnLQ7WkqEcjYwcWh6M7iSqkxjq5A6wsevqWUXf6CUYZJCWQAKcr15GgrApSXgtKPBMUMg7eudKtf64is3r",
  "key12": "3TGmfDmzGCe6SWH87WRLMbhmJqWfqmTTMA6ApdZAHXkRUxcqmLhh6ECmyZuMmLCZwxbBpP8y9x3T37qBLPeCyaSn",
  "key13": "2NkGWzVPhht3FhKATPZuE9sVhQ49pbBiMZUdQksnvxzw65m64WS4XDzVBY74imEBH7Bcmun66uEHeizdq6oTJjvj",
  "key14": "323rNhGj6VdQFAJM88qBGHCvkpjfpk3gBoAETrwCAV3NLnvxvDbwXzzQwq5rhf7p7RNSsdCgyd3cj6hHVXfUgbB2",
  "key15": "55jCUjyuBD7m9DKki1xQj2QanjoYgNrKVA6qwaHHQhBvsWBvX33wvjesA77tUTh6riTgZRNPQcUznBXm7tDFKRkB",
  "key16": "64zcU8Kkbk97A3mbAxEYg3YvfzSbCNM92GDey6mE9Wfdh7RBXgupq9JHGMTqoEHqoTdtEeULKCRaaAxb7bZMVNh3",
  "key17": "2oXQABckfExxDYWHFNXUHTbPvc5zNUT99AQbtn7GxBpq5tpNftGYR983myrzt27GDdFxkmwRVVXcymgQnqGCPX8Q",
  "key18": "4F4RtUHQ6qgw8MsVA5PyKtFF9efbdSdu8J81qehJ5vNP3fbPXKxrxmAd7B4sV1bebvKgsu9ycyzeDUasZbStPTmX",
  "key19": "2NxybKRbfuj3RA2dL8J8jERoMaT6GrA35NvLBzcJy9vHB4kWLLxdoiF21ddx2XrsXz9vNKMDhsneLgXZHKxaGXTX",
  "key20": "5JEie24dgZ79sb8oMJ1k13mHqtF3TYo8c64pwCKRGszaisoBcFpL5uPpqB9jUX4ERiQG7N8uUtTt9DRmJQRSpcUt",
  "key21": "4hL5DWxhqTJAn6E8FdtFWSufkyNvLXHiDHgx4hLRA74xcqqT4vEZdk6hpBZbxoACLpRzpPxnaZvmDNnAv2TDbozh",
  "key22": "4e8ks3F3JiLD8rUPutXMbZfh4bVs4VcN8fAjT549wX8H5KpvDy5PBXGjcoUB29CSwkuUFGpZcL8pLGsdyuhy5Tzp",
  "key23": "3oEwUkRk37X9abNJ2ksPWyvAFNoFM8ipboyQp3WH3m5mQNEjy8YgXX3ZewKQaqae1GabJXTCvPp8iUdnQEJmfqpX",
  "key24": "HjzZxkfBYmFGEcGFaNhU1oWCnVKFELAWxWhYtCvR5zK6YYPayL5wa5yyJokXCyHWS3cp45WzuMPWd4J96GmKy2c",
  "key25": "3P6p1G66TcALvG9FKqnrE3DhwyzoEVCDHkkLLnV4VJqUPLgVmMLLoGrefiAQxkzGjwpH7tonEtXw1hEcHyRywiFk",
  "key26": "2pbgTJbAfdfoRDWt1Erk9AqaeKdT2AkDPMnXKkUXq1jmATQ1xYd87sqxG2hWA3PfxsnQYPatZ3FXW9aw3w7fG61X",
  "key27": "5bA3XSf4kMi5iqsLizPTNPqKWZrSShhb6chcMk7eotpsue8jSCJkt1nQJSGydkUUbU6GUzjDhHTutzfj78hgM6hy",
  "key28": "2WhcDSpZGZQ71EjHwCHQNz9WaQgnZgfvZX5VYpoRK1bLSSTWm9yEGrDjt2DZJE2w7kWywBvY3oZNr6H1Y2bPRqrn",
  "key29": "49w7Wc5fcUmuDbga2jZfnTyfvwWJqGfGHjT4pGKNoK5AeHNJb1btwexZqyt6AeNKeVMu3UZBoDCJ1hcMm4x5WLQv",
  "key30": "4Bvnth3n7jj3w2Dmv1nvp1uGNGGFD1QrWjw5MqMdqsAdNocszuwPeRP6jhg39SJpznnzasSVtHc48gYob31pdsmx",
  "key31": "2tp9ieKtG6A2cFhnzM3oyaipUABDgKd8KN3JSv76fSvNDpsjfsRfBFc2AAVyaY9h5MrxzztxC43BC5JscVHrumZE",
  "key32": "2NbtRrjz7RsDacnzQE18i839URH3SzVwwsXd2MothJ39fokw2SRMS8yrw7BxR53szaG1e9YGUTXkZe9p9J88a8wX",
  "key33": "4hSDHXgS8qssfDEVhotrEVtUTtsVg54z5QnqrsWfinz12NzDn9ycH2w9CcQ6pyVa71oeGCjGbFQnbeE1Uc1kXpVv",
  "key34": "3FkAv6XXZseeTi7CKECup17VyBrVqANGHirqRC2zgLJTpUByUFdqBufD47AM9auyH8pvfK9ZME2gbogezgy5jsf9",
  "key35": "3haFrNsBofir8rJNyeCMrpwEnh9dyM5Cf9AKzeg2NZZYcDBB23DnZTmDBR5UqRmCUkQhFJ6V8nXK1J7AWL2zuCrf",
  "key36": "4Xg33y2wufmQxuT1qFcTDz7SAr2k4Rmcxr8iTNKHSDsw4vDmLQhmLCmqUmQfuQ8ZyLmQ21majHm9eLF9JwmcgdgA",
  "key37": "36QSEqBbG2vHjM2XKK4KF5WDgwJyThssbwBdfXNXY3XVRYfm5Azw7Loz6LBfywZx27NLgfysV8ASepmM9zBUxc1F",
  "key38": "3hQJ9oxQbzt3DbwqBFqwb9qSZjgyqU53iTKtg41DM21cehNoft7e5FMC6qT7bjWR2EGN3V7SmsvcRBCuTdcg6Lnj",
  "key39": "XupbPBwtCJJHhbpQkHZTXQx97caNbhBJYsXYUJYirhktqAZMHDVksNuTooDvUr7FFb7zaKyuJmUxhPq7rP5y9F2",
  "key40": "ZGD5MEWshD965GTuVMtyTXbEZJvouEvL4jmRvXUHBEp8KHrQ3a4Q4Snmc8eq5by1cn2GjLghVR8a1Uo3YFkXaX5",
  "key41": "3gAwaLT3qvQ5EiLD84LWyFrBT4zKNjXGr4pWA5CdwrwTF4BxHpg95163VmX4DRwrVsLvVREHa2wnBTueasfSbY1r",
  "key42": "5HTgux2MrSkBfKTmDTGAjVJN8WSg1acnHKqy1NnyY9vXfUMWS4TKt6HUzwWRwkqy8rZcSc1oQcF5jeHKmR9Aap3f",
  "key43": "4XqErMJA6Pv9GMEGmeVvF71Vcmjm1766qHsn69W3ocSAgHsGECGMm2kurGiRTpXZsRMvQzGWQxy8E3N1PssJC75T"
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
