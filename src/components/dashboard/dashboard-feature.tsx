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
    "4sNn7itZ2e5EQH5uo9fN1o6AA4NHqgV1jg4AotUgATCMZaz1TTFXM68ReBuH5C5UqTU2btRtnwTaDjrc29aHYNyV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zTsKkSr9Hagx13838wmAjaJwxXnyZwK7hEPSc1ZnhLi5CctxiG4W67HW1pVCmoncsKpcQdHbEAoc3Z2HjJH8qWY",
  "key1": "5AjvtRPwK9o5cUky68nqx2m595BfJUpr2GDqiEQgMKj3WwXpjnav6tLtznZXuSsm8UvunUoxwujViSJsirGfkhj9",
  "key2": "3VeJ4N1Va8ViwtQ6ovPUtjN1aSk4Ub7NFaRk7YMiPy1HYtKef5Qvw945XYrjjuN3DHcWrXYobVbQWeFzUcg4Lys2",
  "key3": "3VBW4bYJhTgrA7g9htcN2CW5sedQkXv3eBS4aB32VKA6YgL2RUPcXLQbYFfkuNSx9g7G6hNHgWiNBKoYAER2breH",
  "key4": "5weoknyjBh6y9RjZBgTahb7xN9Agh1vp35u9Kg8SANgdjJaMinCqB3sRd6beCparPHoM76dU3MHNWB321qYtyC79",
  "key5": "4MYYfhsudmz22PWQa3P6b9rjPAf2d9FE3p4Jr8qvw94E7BBgh6dU4fUsZnCUpXdQRowuDSjNfBq5a55Fk7aNiYGh",
  "key6": "5rsADBJAJQXyYx3K4FBc77yxwfUbvwXdtXNhuv9i37QtRCyLnDRckrjNcMtuh6Dm4vYXRRCY4xM53jM3uLrLmrDE",
  "key7": "bDwBHKhHAbuBpA1qp9EsovNeC5bqgM61Un8Du25mWYBL1sNeYUe1fAmqpcoT7Kd4FMmH7xQJrJqRZMRjeBh5YUt",
  "key8": "2gWga1cmyUXgCqw3Y5XzRNb43ZTDuE3akH1mTM4tD27HD9zGZ6ppM85uDMsnncYejF4Rw61QnQx1Gw1enKGzb72A",
  "key9": "22b7k9RpuSFFAjAmCsQdXxqVWMnPuTdGge7f3mJqFCrhzUDodALPzuJ5SLgWyZ9cWsyZSbi9jpgA3jZUVcbnknAz",
  "key10": "51YdtryKkLByTC45S6TTQMfwCv2xNfv9Uzu6r5mbf1eaxpacjJfxF5wwmBRrbjrnAwPMjDvHBaSoYmifie4Hh4gg",
  "key11": "2umEMaLe8MuMNwC491LEMiwck2AqfN5qS4aoAtVW5fqs2tXwN589325Yq8EChMggSqn1731zwcP8sTwdCZ6M6tW3",
  "key12": "41tVcxNJVH4BL2exEc8BtFRY6DCUsNnHzKM3Qc5LNV2FrwGkUcm2n2JrAeHX9ughNJy4JV8VhmQ3z2hdwmJnPkME",
  "key13": "3fZPaSFvD3m2XwkGsexukvsSFkZ5AgL8sMdaYgSej8SAzVVEDRNpUxGzrPeXe6wc3rMShqK6qYSfzNhDXLZLugtk",
  "key14": "uxD4YQWpbv5XTeaFegQSwbibZjca5vGw6VcQ2t4cy7qv4XqKsmgY3oFaQ5Jv3R7U94mi62i56Z4jLdT3CJ9L9AD",
  "key15": "3gfyFMynUJdx7hnnbWLQozuFH7JjQhNt2RXLmeABrMJbp6cc1BX9RQu96eSxXvPmW2wGsVxqqj9xRYh6w7ygrjTP",
  "key16": "2BY7cPh8YwM9ZHrX7XUqk4pJ66a2nRoZhCxQz3o2H7mJLtfBexB48of8nXqbW5HXDx5X7DB1u4CcS8kHfGSsaE5i",
  "key17": "2Wa5vswJwBAB18foe5zUNM214xb82DUxvBsgtPFem52f98mgF2yuaed9FWLyum5vZW9pHPAMFsMxz9K7imJthZJo",
  "key18": "udEuedP8M2Ey3yqMhM9ZkyodCCdv2CA9HRMZtyJNqNdKwFcgeHW8KpddThadS5u3NRdUAf5JgqXo6CSnBbsMHdy",
  "key19": "3CZHTPS9wcPusRXgULkQxEPnMn8yDFXP2GxErYvsVoDjZLuQUCAS6iY6DAhRL8C3QQ3M7FbSn5BxpdJZwamMvkVz",
  "key20": "bKtCwkQGV4XVji8QcDdLcgfxxsv6Z7jjQotqC7iStM2m57NCJj5JqRK54sLqX9uJBs4EbFDbtp9qLo4Vtj5smJL",
  "key21": "5qfyPZic91wUBqWKGjFQE4YkYX9XXgyDrS8BTPPAXyHj9nt7kw7u4bFGiExs1tt46UsAKGtyxwGA8WgTQhKnjRCJ",
  "key22": "5pMqmMybHW6hzAB5AfbMnPu1eF4NvDiYodCXKj4dpaUzJM2ChCmoPVPcXivfN15PdCrCmDMmvZ83d2viE7UJZPym",
  "key23": "35DtzJZJbcbja7NB589YEitV9UrdRbr3yYiTJXpcaTqQvfUCpP1RnN1Ucv32PMgrXDU4yWhdSbzDe78Ld9xtRwbJ",
  "key24": "4zbXdwgbakrZk16dkaJWT5iPrAw9smrmhKwRNhDcN2Rita5Bhfqkb7o1BgvroQ9yjc5YPZhfQAT9Z7594yuymw53",
  "key25": "2hrK4NPbEP6T9BhsT7D9sfzo5yGfwaNm2yNbDxFj6KU6Boh9NgbWJqa4ViyLv7k5sfSpkEjeJKCXhRLvUXqMHoFB",
  "key26": "4oHCTs55XXtNAvoPQfc3iHDbHkqDc9t6ovZ6t1ehcu3gNCXavy9ZLDDwm9wdPvAWRzL6U9xE8gfiPSZCxgiTReQm",
  "key27": "5zs1MNhD5SUg8psdcHeYTVkdsQ1SJUBMjnKvFmMBZXEhLhQSqyr8cr9ipqTet43dtBch2XJkcTp3UHzbU3Hj5Wcn",
  "key28": "4oHZQHiJeTRpRu7qzbMZYeXxsDtvbi7z52b6GjS62H9FmuHVFgvBHFeYUwcYhsxUR3Qg4MxVUxCFDv6dpnyveRcg",
  "key29": "5JYwiqtSo6ghxerEEqSxDV4emFC529RfKL2qkbQUwneJJoqTUMn2CuCMgJTcuvR2QMx5Jh7aDgusZoXDcpCQSwEi",
  "key30": "3CpPE4v8auh2AYeHGegk3kqjaXu7XyLudWmVDikXyGJ3vSjUJsiHosy5e8dcSpMsmCax8YhjFnN8pyBhLJsxzza5",
  "key31": "4USFYBaMTaQ9Y7185vDYTPr2hwvxeBKizs2kgDQVGrj4xv4hs38z189q6qnAp8RbbCRkhWxnb4VvYHVLAjnftWFS",
  "key32": "4hGfA5Mnq8zgviiMptfpwtDnyxBEz7W92jDcRVmNPFHweqq6iqho4tnc2N313smShXnAPGkENazgMFW4BwMa4uWE",
  "key33": "CKKnBfwQ7hvbBFwtKDYaHFx2gTeJYXis89zSHEk2xqeq79h5Cu8jbXQSfH4iiav6t6mvPMSJrGNWvpm2oXc7pkN",
  "key34": "3c6K5n2VijDBz89TQB2WuR97zfKtZT2Cmim9xZaP1iAu6s3dUXg5Sebkm4qSpE8Vwxf8sd2iwTZTNnz125Ajp36a",
  "key35": "5Uudk72TaeVCPqHPu49GQjmDKAoLQ6bK6rAqNsjbih8iXqshjSPMsM3cWRiYno1BeRdaBYHa4nu9c2szP91zbkKf",
  "key36": "247QCZAcNfTQNWsbCbeBp7Ltx4194ag7Qgp2mTgDqF2RrBDZ8GBXypCxjV6s9MSWUFhtq4DPvF52eao7XwQQyRT5",
  "key37": "5sUQehcArCjQFkiyLVE17NF1HyEAaJ8brPgbLWQzAbaKANyancUq4C7FEzsibF8bmbmYyb1TfYEP2gCAnzj6JKPk",
  "key38": "3QLjsf2fdMcHr3yYyDUyjGkHBFTjoJQb8Ufx1ZZFZnSceH6dLTbXRzie9TDKqZZPBV5b7CCnLjyJHvXw72G4hVXF",
  "key39": "4GAP2sd2Y6PsfFqUsg92rPTpbjJ7gAXVfy8LadNUcaPHrZ6Lt3Qn4VkMKEMaWXXRmG2y82ik6kGo23X7gvFZ2pne",
  "key40": "sJRcNAmwo6DYuXsZ9EeFdXJHoHovT1uiRf6epYVuNximueNowFBVuv47PmzQngEBrY6BXWh52nQt8HUmU2so6Sc",
  "key41": "Ef39Mp4rApGwNa9PEs4VP5pUnM4rHyPtxp7x3A1MxmguYaVrdePZLZTJQEuHYYkzVD31nKbhmxsVZwPNqVQoB2S",
  "key42": "4ajpY2FUB3r6N7Eq5runDvMZ5Feu6jAheWsJJzPcXGo5E9MNZcAuYBdHs22gypJLeJY71F1Pjr4YgzpSR13cSn2D",
  "key43": "4GeMmMCPXhWZnUjLLAwxBQFvP8qAvwwftdAqa4hDhjuDvzPXoQUFthVooUJAS9zmRQZyYw4VoZfdqbRTT8FjmvaM",
  "key44": "2dix8E4FjC35inbNKdxpsEXtYF6Da3ieSTwE8xhcQc9zHPB1vgK1d8R8FP2ybjxXDys1JmsbTHTFsSV2DgJ2ZAM9",
  "key45": "3KEEaMKBzoCEzHG8bHDis1LgwtojMv5bXhB3GW3UTkbMrBRj2FRHX4BKrRNTvx5hNxcW3KUr1MyBmfinHCxCzPBR",
  "key46": "2m8hiEb3QAMp1ZSKccqYrB5MoNpjEJvFJwAHNL4d6BHLofjCEn4RNsEXS5GEtHVPq77io5UNF6viZ4q5XaZFgCZ9",
  "key47": "C28V2qXazni1jabbT5auYqXrQEPBqxi83bZwW3JwizMG1Xp4L77GnAdMnf9bCW7ADmPHMSw8LLBrrQEzWiTmKxP",
  "key48": "4acMVWbhWaPhA2zgqXHScFbpY3c9cxte3sXy8qh3e5k7K5kH7VTLUCG5zicf52kH4dA4kMck4qnoQa35JmpaRaWa"
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
