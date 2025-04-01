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
    "4eZ4oAkgLRRGS1n6B1oGNC5aP2SSYjvjwxVPMCqJgy5u7qaMsgKDBrtRoei6ZQW1LiopQjYRFfxfyzqh71QGd2Bh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Mo93bHuxJGPY2jsqMpZW1oqKtzL9djqbXLcAaRsYFJiE8z3uHc8J2YuDpxouRt2WfiPGLJyCtXVcvb5PWhbc4FZ",
  "key1": "49TdwR9v18DKL4AHVkre2qdCAMKngYPYvhCQc7CT3YEKcZ9sEaWBR1DNeudmbBuQyVPtSWA7PKVeFnYy5vVZCyzj",
  "key2": "5JNtq9H2EBNWmM39wPLBWpKY84sUs8SMkbLGwyzGAjMzC7fp1oKm6J9Cgevn25ouMGR5AdqxndbXyjcqxy8Ux7yM",
  "key3": "4XG7EbM43yKuvumAxHq6SurKZvEp4hVD49Q25utAqzB1sKPtLahXFrCHGqr6yLAnPU1XMJEzhQokDY6BSemgbGWN",
  "key4": "4RZr7iPX5UCTcTWRu9zYiPUoj9XL5bRRhWzW8ZTtxvXfsZS6wn8hhiMbCoLHBQSnM3v5PRcyc1saLJZf3vDHJCGw",
  "key5": "3wK5xvZLYKjMvTWrTYPuRNkNZpb5gyhMRxQqknbrihSuZ48QsPM6z7wzQvK5K2Bk69NqAFRAaB3rtEzaBVLHpDdK",
  "key6": "aXiux9Q8X34ZKawLPFV5qAfJfY9JAFibxGcb3xB71TxKZvFaDTvDtcUeWGkHxkgYoga4KAdJCXXQdJzecRUsbZA",
  "key7": "3BB8YXqMmHPfzWhJc3AwuDuDLFkH6D3WB9E2KFAGaaHUNaAhixj3keEuD5VL8U3hSJdr61jKyZGX2Em85o5G1wRk",
  "key8": "3ygKRV6dC4KUhRoXUDa6BYVhEQe8iz95kzTy48mcjyvuSVfVnZCYETdawWUY3mZoMq2cqjWN34Zbr2bKL6a7S2kg",
  "key9": "2CPkPUNT2bTJAi6CmV9AF9or6tNwPae2Dx2XU3jj3Ce82b29g7cjvk3SfGkVskkdn9mEvvcUCHc7eYnZgxzL5bts",
  "key10": "NJw9GBQomBSniCNorPNYahCHXnDoFxPQ6i6irXeWgqYYZ5cWws9yBNXXRJ5sNLT2EFvB8LDKLwasaKzdQLVkWX3",
  "key11": "3D7UbxhhUfCM7LBjLuX3YFM99XrFtekGmdiNojTb4MLVtNbcptkvHQR2idnDmah4jRU1owH9qVg5pscnByPYBqSE",
  "key12": "2CfgCmhAJCuZc8SzC3EgouHiHvyhiFe3eTvGKHxdXdqmj6zTJKiAjpfbvJ1KcUsCHRYLWShruoWBhvHSRnuqoMdv",
  "key13": "1gZEcxckiba9vvT3XpBt8Tm5LNVvQJTUyPTuRFCXFnsgb8y6oboNqDPjxevJoo5nEctfLWG33u2MLWgEsUNyQMg",
  "key14": "3rud7rAPs5RQnwk23nx8R632gXYVhbFcdE5Vt1NukQeFydu6s79jThK6mrXfS6b1tt9UJ8E8CuVrpMiLTp4J8Fc5",
  "key15": "5AyQW6hAMnuQePjbtj4NCC2V36L2wn81NCwGrxjvfgHV5ERbRst6MGTn772osZTP7uPcnrgKR3EXfz8jSDY8mCT7",
  "key16": "3Ao7jPagpyawjC8xqkKxAU2Ef4bDAAnnrQNEWAErM5tAPXkFE3aPgu3pSE6SQ9PZVaaJvXAvxwDQdpJcVALUSoJH",
  "key17": "3Z1o76mmGnCkuvB4gq4KMV13weWVnazzKiupuX1vuuoeBzn6UzqCBcSFcYoZVrxAPMNywh8R2tCWAnXE7NzpjHFn",
  "key18": "2uLdHaGqY7UXbENVYT1A5GVn2GxpxmyheFKqP1sciTHVhjcycGDyG4icskTw54WpFpwfbDrfaVvyZzqxhL3GLGur",
  "key19": "4Wn9JjrMrprzcDMEVez5XQNmUM3qJ75gjwkQi4zW9scCDB7VgssQveDtE1snCE48kQTiWT6JtyzWRkKDCYnj7Nf1",
  "key20": "5KV7eFc7DKtcfHUd8UU83QWDNxFZyeLqyNudt5yG8gGTzHjBnUGRUsFNbbdPQsDhfaYvn63fTAxrn6y93Uvr1Axs",
  "key21": "5qdeWndZZckgqVDKv6pp4V1AXeS44s7MrigFcXB6htn9aajKV2jg9AnPowJf5s4WRtecdTNdJrmzZAmQfDqLXz51",
  "key22": "34JVcGbwNtEscaPbGWaHJkA87RPDpxjL2sCL8TCg3d5NYipNzaaQi1au9n436bVxtqoBmLFgcgQXNvg8YvaRKSem",
  "key23": "2LcPQEtyXRg1HvrJCeufB4Kh3jH6qbJemTm8STnQUjNxjarxeGZzqxE9ZDcS2hisdqMDstW1NWLNb1jfdnnz6ftR",
  "key24": "4BE16YAUE2crRDFkFPFg1xsLjrsFYUMJUWHxykZrFoUZpncddAWiNgSYztefgDEDqYFEFWYBqzrk3a5CqM5G2jfy",
  "key25": "63X5RpsAATY5bvfBRtP6Dr6zXM35sKRczfwaSmewe7R4oPYV4CSRZHdVK9tEajo7jkaM15MXDMNi1PN2VzNoRip5",
  "key26": "2i11aSi4esGbR1uVX2kak97ej77E2469nFfuF9onjTM1ABN9Csfs2s4DjDRDkxhPUV9XJtyr3ZNmAtBDKYvwENGV",
  "key27": "2gK8bhqwYte4Cb5HjbtKchCz57bbzeYZNd8X11Jyp2DaKjZSUqz2PeZmeAtha7m7jEDadf9xuoVngbpLpuQME3hc",
  "key28": "8cdBTsUTAKe66zCxE63W4pSWdo7ch4vprA9xVZoFrGE4kkzVRsKHbqgyLkAUe6e1vWrWdinzL5nGdv6RE1UGK2B",
  "key29": "2NdxGfLx8az4ZaLRJVne3SPUB6DLDn9QefGcY6iEcoTvyD1rvcs8wFM1vuQgu7cvjUWka3bE7WUE2mnRUWFKuHgT",
  "key30": "3zvDcXA9Q85GhSfYuhwSm57N4owo6LudVv8QammLfXTSCjnUFBpLWWARFf2wr2mZ1cjeNJ99gCsBdGYzEcAThARu",
  "key31": "5VfGCv17EFP7MjvizDU6W8tTRnXasuBC6kS3CuTzMK9cc2UgLa7hd5eicqAywrab3LMLM9tuLHvVvCzf6bxgeZBV"
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
