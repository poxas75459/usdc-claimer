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
    "mAAdRhEQVcsutnstQSMYuuxMH64rJAjx59qFstSe2Ru2LfpJvsQbucPDbwUUbdTeRihhrxnXkdo5hazUcGxc9S9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xg4fFmgbw8fTMjeNpj231C7BZ12MXpF4Q7Mc2jSJgFL7uPZaq7JaxAr2cJcmQmrkM55b85ZNoygWwaThAPjWZG9",
  "key1": "ez3qfuLEmtoaTgMLK88b6xg2Mmq6n6aE9X3pEqyGW4vaPxxGMzy1NBNEtZ1PELsSPfjkdBAAHvpcZSMy81YHJRc",
  "key2": "3R5tmZ7hmhiLt6W5pAac6qUrZPPC3aQwGs23Kz4qccdXdbGHMaLG9upuSVrygQN6Schy8c4WMNiAvQvzuvuMKu4U",
  "key3": "4nyy2Hwnf7AepsXr2TG47w9c9Wm7iFMjaXLt3m9n63z45vVi3554nsgPi87mb8x3JJXZvYuDzi33zzF1tGPesbaf",
  "key4": "5qnEgWAPjs8c9GebHgasYS5Ttu8oRZa9w5ejmvcYFRNfoMDYvhuwoubTnk3BFyDB5BCUVQ76DyosFaaTug1Hm2wg",
  "key5": "2nSFFf7uoVufWLm5UvWKGgKxDU7ipq5JcKUM3PUfSGSkBuXkb4SC4HqH8hczoKpiF2ptYWuP5jBQ3Z5r6X1U43ND",
  "key6": "2QWwuEjQANBS7E9DQ7e3ojfzjQ5Dbx3LLnCSE7so6NxQ75jKvf6BfqL6myk71QifB1s7d6MLy4SZrQjeF9vLeYce",
  "key7": "4PRAaThf2MeDK9Xu2jQa7AdGeGFRee42VHpEgaGKLYonFvX65fzoDRURzphi6nFZK4cxZLuqTtom3ShqY2mT2VhC",
  "key8": "TVz3QaLuHjDScBZq5dzU4sPuqa2Z6ZSqAQGEB1DWY4TX3sK5KgN2HfjdtSum4eEcwLGPQik3KvDjPHrY1XhYBpT",
  "key9": "4Amv1otdtTGNbi9kmobhDbpQoTY4FvW8ZrgpG5PS4frSRVsYtJLzLRLt1GEYopCo2fy3r16s54Un2j3aBwY54mAo",
  "key10": "4J524EDkAoPy7HQGpymtEM77xnweyduqCwqd6vGLQW15BqBhPCZ51yuustYxnjTrDynijbtxmfNSnCZSoHinS9RJ",
  "key11": "4uK9umdbsyxu37xmwxDWtcbd4Mu7CYSCzYW9H28mSScBawehdF2SbeJKiFTJzo4WWpGUZZujPTQxVFH2dpBcTrQZ",
  "key12": "5DAkmYE2oFMz2auVAXDJXmE16poGeQgDpyUygMedkrNpkVRLpcBW1hNqb2ZAi6ziLpXqxEdBLkD1HcAstu8MFdNC",
  "key13": "5wMvuGVfvSXnP2RdzAzT1VUBUUfk4DsfwSkP5w5LN2hiUYgJMv4Pc84zSunHSoFzem7MbCWjUbwbx6BDA2ic8nAN",
  "key14": "oH6fMP28HjAs4iUzZKkadE3EDbx76bcX5rCQWkdymSuYPQrJVUurKfw956iMwQjRSRRCj4SkxgcFfF3snbn981K",
  "key15": "3CNndRBhhcw7NrvhGDWngN5WABayGnMuhTU4gXU9AvXBxQaM8Wysrh3zLhh2HpSiyvnXw5JL9d2zuBUa9worBVfC",
  "key16": "5pNDZE4hvyvsrfFspwzoAvbdgvgHxp8NVmBhqZttMevSEgVKLji8ZZv7EsTo9ggBBYudfK5uN85iM2rboyJ3LwjT",
  "key17": "651bmdtYjYetpYttp7vhW7SgPQQ3aZhcq7v1nyDzntVmYn1vGXhmNn9YhPeaCg53GpLNBzcU39BogUMx38KCe5XC",
  "key18": "3JiaE46Uy6NfqGhYjtnzCgAJGNLrU3RkmFMZdPndQg7JpT4ywxFyS2Z4jJjRVNgN9vPEGNqAY54HS5TvhJndC8jP",
  "key19": "5whY4fpBDkzCunAJRW66HzHnhVB81pfgyknudwfe7htCneMKWsu6F3jGamjXikyiEESVDP2RrYUAdB2jaK4M6qLL",
  "key20": "2s3R7xr1XNH3bSNd82qk4P9PuTDqEfuTEcmcoytxmoPxDQuSLNQZ8Vu7oXqtMdHWMDWfGe2yvAcDChh4r1XwhbaV",
  "key21": "rW45p1PkUMJZMU8tadeHmMxWCxjboRNqRg5wjEn51HuEGGLaD5cEffaU45Y3pJfuMDjdrnZ6q91yw7QpreMroBZ",
  "key22": "4m5qEJmmd7LVsYgUd3dM5yHar1ykW3cvyABPg5hrVsBZkSU3mcg6zeexBaqEjatDNFGRjNKkj8kQvHLpsP6ZWuR2",
  "key23": "3xob9g6UwduAUvoPBPFoVpMd768Kw3fCMTu9wUbPMj69C6MSeHwMhnsd3d86qZRSGxEYjnjwh6VkKV92txZ6t9Si",
  "key24": "4nryQ6huhXr38Ae1eMoNgBmAxRsNwdDxJb48cB6tWFQR7dEqVsGgQrRSAcq28g5zf2rfUyQQfzCLc1YCi5SbK8hh",
  "key25": "3nQAKdHS4t7agi7efan2TFNoULid8eD9S1hQE3k6aAW9odtVknBuvLmxWKwNqqrPr69XqvotK7t4KdJRRDex9Tba",
  "key26": "XAw6ACsD2FQzde96hrox5dNQJks2YgfTjjWtd5csA2wqm8zbG1A2s5PWoDNpjbm5SY2pXS1SSRx9qfC1o9UAVwo",
  "key27": "37rtNDJkAPveWP6Pb14EdcZFFd3oHnz72sTCqEu2bW5azUGGB7p19VCTgoBTToLpgXkYaHVYnCKt4bpDwAd1zEdD",
  "key28": "4VhmuYeA9iomwF76ojtgncbnLzktA24KkbqN7hR1x4zBSscSgcDVk42aXrPc3F3ugeQZkNp7r5F72ij6B6Tk6gxs",
  "key29": "2aDQTdyhQ6gtPuZ53x5xef7A5cQXnLYNMa73uvWbhEJSsuNMV4Q4TH2M7Sizkpm4aXjrz2hTNPgk37HTQHQGEs3N",
  "key30": "4kqyPJQHNkW2R5wiinW9CYaiT7wBALmgKDxScwCeBg1bNJztfEaPfwKWML7sFHue8L6Qguax4oDM21PpKMUY4PfF",
  "key31": "4ARfaRTtUY4FzHDkDDYXzcczgcnogtevnd8rZQ4TCJ2ee9T5k4HQFhGf2vmBEvvKXawzc7YFnibsEjqjDZU7sB1k",
  "key32": "3rKxT33xRQjvp2EG8FSyfgaaTMZan52CMV7hPRjhpLKtcAdqyjRUSRjvgGf91zewHfUZbXt8FpdiC4dazovjk4TL",
  "key33": "21Mk5MoTb1wgV34ke7fbarCGPoQWqUMyJTLQzRcFWeh7tXbPsvPxRv6PegM3Znq5bXBxpzGueYGCfhJ6tDqLbxAy",
  "key34": "3TfhQ77TF6jJi7Q3we3vm1UgvehVJV6vynsYPs4CC8zniUrQWLn6AUgM1anHLfXDfrFqm3JjFZdPany6H9DXLhLo",
  "key35": "2sDkmXhFHGmoGTdMTY2H7eDdQd5ZyPhsAPSD74afm328H2bn43ZXxLVHAJhv4XA3dbWAt78KtZ5T2uAQaMV6wTw4",
  "key36": "YCuMxYGJZDuNTSMGVf9V34WQdnuJicLFMCMdYAt9xiHwsD2Jwnm41i4CHf1PE3bktbPZKJWkT1eAQ2vcQDVpgzf",
  "key37": "d1BT5dGnDABh3D9Zv6anB7A3V2ragLDVuz5qPotR8kzuPB7y54tnY327jEzguX15be9fmALybeUC2iT811oatD8",
  "key38": "4JT4y6P135Sx8Bj5vH1UezsPohvjUWVojgZ9miUXVEAT8nifKWyftEHVv5kcyaMsaDAEenw29sb6iajN4hPodh53",
  "key39": "YnLuoDo5ywYEY9eP4CL3MtctCfJs9w7T6d3HMxr3eFwJeqfR119cyskvFHkSf43jTmA3X1bKYjGw9RPCffHAy4n",
  "key40": "2LzbU6bzPjd6sbDkGBV9EKw719CCXCsNTsxDBfKdwwRb9bjrBc4iUkd2gyk4UoVyjmdAmMLTPfXi55knuQBUwHh8",
  "key41": "4VSUJv5stbsYnapvakJNfDvsvrsirTwA85GGLvpgKsQLoSR7FuAH8xdvrnTK27iLTF2pwHXUouHL12aCWHfe8aDq",
  "key42": "3rYhLbxxh5ALo3DkXuGGAT7HoPZ21s3k9u3DauHgPDPtBThBtSn1YEaGdsGCNbmV9UHF97hAu4whXHdB6fsvuBtQ",
  "key43": "3Lhvmj4oEJPFnBqS1369t29ELZPG4Si6sisKyxpKKb85pzbBN7Ju8ahCT36d79dkTra4JLcHfdgY4Hvw9ZryixQR",
  "key44": "GMBsoUHPgGm2FUK1QsqmD7DQ9AwC5ks7geHp8tCGjCRQSwThzz7TmKKYYbKR91KEwYdKdZx88T2nghwM3e1UjTq",
  "key45": "2gGWsPT6ypdNaAwQEpY9zP3oYWwSV2T6DpEW4Wpi3n69XeD3R1oKKjMb1eEnL9BgQqmJ87uqs2hFCierwnydhKoS"
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
