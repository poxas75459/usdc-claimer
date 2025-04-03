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
    "iWMwVYZQtZ6BhJM7a3eDtnDr5UDEmaoQj6nEeYnK3tSmxmwrCVAMZZXxMUc7Ke2kSM2F61ETfSUXB3BX2CBqUCJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BDVS5Q8i5rAqrTjkqok2DQvZvdUWZuqX33mJQyNZJ7KjMNeB4dHn6SG5brijCxwoRcNxXYmshTMa5o4XpSJi9i2",
  "key1": "48tNDErviYstQu8joetWoRUmbiwQWuX4Ce9kGYQo8ky4vxi8HM6XZf1X4TwfaNY7o3NuWDKsFykFLgR5RVZcRGEY",
  "key2": "zyGwkaYU7gZVaD5mFC5RdbgRC2BmXfpGB2guPheFnMK35R8wcqHhLkWmT4WeaHjaf1ZjckLqmFywwBwuJsquRcS",
  "key3": "3SDT9XxncGeMsmM4Gx5rHi9iicTPJCi71r9jWYMsRJM7GrNSWLZuERENfh9rBHD5ZVKPwBq5XkZMpzG3wmd1abCW",
  "key4": "2oGYHNEqEJYMyRBhLPeBRffxRpzjPn431Di6q55HDYDqL7ahH1xWAkdDRj2dmHjYKCTrsi6utgfUY4kidSDNqGwJ",
  "key5": "BcfNUtq9qvu1rbKFMUawPw3DSXA3KUrnKX6Ddq3eoMh7m1ZJXbEns8LMX9bVhHLynHqk2PwYr5E1yHBa2qHoqNh",
  "key6": "yzihXEyA1P5DpgzF5rvLHnJtc6HsNnEGZatX7hhva4v4fFSErBwn2dHuLL61crXeHQ34XrbfUKFqDPStnpiYprS",
  "key7": "2XKWwanoyG1Cbn875dBr8suRMCnavxMpyoDfmNFo8QtwZg9tFB3U2gvEWMPMEkUciPLULrt2X7QL9F7oks6iXHVS",
  "key8": "3V5mhmr52fstrgPSW3AVAfrneWua2hVMzCJyfo7cUXomK4XxeQVhoRDErMYibuoNEm3Ayht3yPw8h5RBpHzW4pUN",
  "key9": "3VwHtmNPVwRjtY1q6E6PBavy3y4T7chgQ5S8QZ24wjtqHgwzxnZ1EswbLdiXb2tMEhtuYGUVL77HBSAEDyTYF1eC",
  "key10": "5Fkikpw6rKfAPF427tR4JB2NMPr3opjpnXrDKwSbo3LrL91xjyMqvCTVYg8NypQVXP271WmLy5FFbF5Tmm9tmxSa",
  "key11": "Fgds6vEv6jmXwSdTGrNRU7LvCj9vfx3FNs9PCCHujqSDBQLL9s4hdvHXAWiShbTs8Wisvfid1jD1WD7teA1Kyzb",
  "key12": "fyfnhjwiArMjJnK27srzKSdz73MnxvKSHjzh8XqaWAZbQ7EhqfQZppDywFpvD7BxpBgeMg6MQNYRR6XvEX6p8WB",
  "key13": "37uPHctE3nYSUXufE55yfXSXsGskxvJcAtJGEdEzR9U2TzeHeRYvEfg1TCtBVvqGUhewA2q4RPesQHHG3pNEKJm1",
  "key14": "5cJkw2YHiLrJWupLBin1H7Y3kfMhaXrexVFaV5FVWWYRccsrhGHBQByJPTNkMXk5KtNBhHzSbYohCzkoXhfcfGvH",
  "key15": "5FqVcM5s53hY25GDKsH9Wy4jk7LMvcEZKvipJKKPvkMNm6EF9oAB9LLd7kuQ4x6PgvNi12vxv8Kv5xes6niAeTru",
  "key16": "5KwrehrFUkE1WjpGkuYuwTBAcdiEtkaeMjRVyovb2bgv8hzqzzgG2XCERMNapShZAYrZHHMqHwcnmaKbnhaf1ADs",
  "key17": "3VH86yrp5oeoqHVGVwkQnsqUhxWgavbBkQ1qc8ZGziGKVa98pqLz4iGNV1AMTHiQjMah6xb7fXgzqDKj8MvHypru",
  "key18": "2VEFjWVCeqxCYVaV6EcRkqH1pv4jzP59UdSSLE4yzU6ZTr7mmvESu6oeRB9BZ3THaRcamFovfi17xVEiHgGMvqWf",
  "key19": "H3yJK2c4acDjpvm4PdDuoDCMDjRj6n8ebrhA7RgWXxeACjfwSWSjxbZfKVQAsEkkvxZoStNLuCKhLcfQuuskZPb",
  "key20": "4ZmiU3dUtJLk72vj2GpvSVtv1N4nipRr7H4BHGgjSrhHH8MZ72cnvxtg6f6nTx35kTivJ6Tpq6MCampWVEx6Gkpz",
  "key21": "41YS3gRQwrdDsuiFKnNRL5TvpDhQc8x76FTYhNAAg3pVFpdPoJYZzpRv83Tsf7tjHF2AaAdLrdHsvQujahV5f9je",
  "key22": "2z7W2eYJ6x5WCQFp8DZ5tuu4VcWVdVeL5zmhr197A9LuFQJucZyhDPCc6EE9LfSBBjFEXmGDnDL95bbbFQqKRg8B",
  "key23": "4vQgaZYvhfWwfCuw3QFZSDfudaq7DYNEirJZV92GVBRFx8zavbB5GUDb7ZPUGyHDUBe1WpWCGdDUxYnmfwN2h52U",
  "key24": "2TifrFfb1BGUviqEygMQ9xZkoeyWUAxJUiZdc9k3KfmAvYed3kjuD6wU4fWRVNb9GZJgoXjUp7WFYGpyhpkqH33P",
  "key25": "3wriJRGBvMEpswY8zrtAHWp27KaK1DQ8KCRvqvNsTkcTMnkrHg4akHMvaRTfHmL8JtbnkWfAfiRnPiYDMX8gttMd",
  "key26": "66eEmZqY1A6Q7rqe93MYxq8E3qVTWKEs5Uptta6vyV3U3GGojtrfqwzdqmT5zrYsFtBGQoh1U9C34NDDw9VrmyGd",
  "key27": "3237fE7bZfUyzKQNojFwTGV4m7hheajMoiGCHbg41Myo5NahwGTMwUHMQXATBHhheMMTKRe1shrknuPiiFRWU4N7",
  "key28": "2MgUr13njf8dYbkKqaP66UYs8JMKghu9y1GdX9bNQ9ZwigHpYykeaJastzSgrBZN1wGq81rsAYr8k7x9Rj3ME5pq",
  "key29": "3dfWBC4VdXYstEeBTjmXsYP8YJDHwT3ZTrpGmMPcTC5fDqJbvd1sA8ARt6GanHPJwCvFHoJ8Fwwzod5vGe2eU5dW",
  "key30": "4QYoAGKLriQW7EFt4AGgrYBUK9qFxVmDSvWvsdL7HKpeX5Aoy1Rhx1KcHZCc9E5Yn8jhaXdtTfBRkm8kL5T5o8No",
  "key31": "56XXN33ugracopSfp8fCxLbdYxxAYPwmM51bAZepMEKgy5MTyWWxKC2w2GgaLVMFWJhC7BhppRyki3gvDa5GojTS",
  "key32": "4NJwve9e5LLCXCVdJGFY6VarwveqjdpxSqSyCVTJYdRPhu7ebryyoqQHsyG8UvyEXsFSyJ4eN9pViZegPMX25orZ",
  "key33": "hsAit61TwEoiEVnKWV39LAYPLEpBX1jrxMA7987sLSjDBYA9WpoCZ4N5xzyRmmgeEiPSyBzU5P2xmFNPFo3MNLx",
  "key34": "33WqdXT7UBcue1cVTiMEaCmu2kaZiJ7RFBQ7WG5hMZBRYboBw1tfFBNct7Sv7n1PUGMyFuuALHbVZRoWWeDxLfz6",
  "key35": "nnkZfupSWXiQeuTj9mvY5ub6iVinaQ5tEBwwZRpBS7ieUp16M8iUQ6Z7GpvH1GedankKr2sbU42H4qVY4E1N2je",
  "key36": "53XCZMWGYXtFostjRYWYvrddZmGb7KF2PU6a9MFc2TEcrhDTh6BpxPuynuJT86ZmzwtvYRaqjvthpCLnEWJeYjMx",
  "key37": "5SvLBrw96UedDk749FrpAuBHEymHC2jrUNXr3zMP3s89yCD5rnsXHH3rh3s5HzCveS32tBqho9TNUH4JUmCsSTgS",
  "key38": "32KHZTvexrs2rBEiZ3CQRX8MyuCAv1Upt6dWY7YSoLBHbH1tXr9vt5egtB19xtR1MzsBJByt6WJYNifPrMLZYYud",
  "key39": "DiMkhv4VQD1wa6xQXkbMaXAfAGC98RK1SarrQsbJ36drWmrTaLB3HEzWZ7pSjAxzJYEiK6NQWM5PGcagwPfCxXx",
  "key40": "5DevHa456cEypzsvRt4SF14RG9KdYgtnqUqnq3bYNLvMacQxQCRheAHs74HREmtbyRdcXCkJ9nBijF3vTdByn7Rt",
  "key41": "62utYvhrhAjYV4nz5dBB92iAwk61ZqduRS5cxuxWXLFLSSkaTJ7E3gQp4eaFvuKfRFARw3Cx89gN62BmfZR1u44w",
  "key42": "4WfH1LbZ7dgJXAMmBpmaqaEXNCGaeZiPpfg2JPKnkVHDiN4jgVWMshn7ru9QLtDCpgvr76cYSaoLvvjNgFnzYhgL",
  "key43": "2sDysixJXTnMHFwFUwq1rKCpFAXV7qr5FjAa1jTgSSrXL2SWvND8Uuwn3Ue3SywLATPT97izJidvrbkT7JdxVXXJ",
  "key44": "33F99aXsGWUNzwcrAwDnFrzMcKtxyuybdmkDEh41GajFRccTxex6snDYYoQPkGxtiLrgkgxEfxTNTQ6NSbXJ1E6N",
  "key45": "4vLD7WYgamXwZonGEGtzpCfdtWu13t7GRvaHVnsWJCq2eSaqUUAggfgQhLRzopLsfFUfF4Dskj3ijTogbcrBZcM2",
  "key46": "t2XZEsPv8J9swz4evv2hb26BqmnGLKvhYnjd7y7fA27GnxNX6VfQi2G1zfnw1iTgYdgWWTvH9oreCoEgSskjyGS",
  "key47": "5FVDSL7jB12NgkWRDCqP2FUhHdxL6SZZFjb9i5or8wK63z6h1nfK2YpqNHgjsE5YYBMzR4wyLGMmSGCwXbcfV32R",
  "key48": "4PvXg2LhKnTgUCiCM3sHMopauhp5fLJtRgyLKbFjBve9ha4ov3767UraQjxjNHvQDePMAtM4SWKoC4st9R1bmQHa",
  "key49": "5jMp9xK9NzchsXkF691YWv33tDuxNGBfjRu4yeAhAXQVKJUh9PDMP31M22aP6SvuAx6vsneWSyULDhJ3zg2uAKQp"
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
