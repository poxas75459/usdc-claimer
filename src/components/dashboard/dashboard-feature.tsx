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
    "4bFfmJnz8DmVvDSZDcJKT1CPzb5caJm2u5LctyaxLhjCaTPZmxhukAUZibVribTztobQyd6mgcBRShCeRwUmd8PV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pQJJ96yshapESLTPvdEvGjYtiN6Pmkas4sH7BLMmXN6ZyZtXbAYM8dTkqXAbZTNdv5tP9bXhrmELgcBLXuNijUW",
  "key1": "5KkiagWpzNFRcCfroa6amapsnYpaufNVvjVc3pibzTfq9FD53svZ6JPWMsPUnoPvGZQva7pRTEpZzNEPU61iB9Ng",
  "key2": "3jDB3X2V589zrEgFyK1xrHpoGKok5zzk774qLvW4rAdpogu7jz9rm6XZi8ki54jHBxMMC6duNVy5jdwcNkKQJm5t",
  "key3": "4zFdwYeH8kwHePV4KRNwrHDNEX7GmLfnauU1YaJmy7Cx8n3An6zV9rWvCFBtqnL6JuR3jdtfTwBMFw6PkH774maP",
  "key4": "KYFQ2stgh1iYigdVNTgdp4dq4bm8JVYoyGC37a3VZHgJFpAdqGZxL3iqZKrENHEhP2gsb2Mrm7aGQtChxUhqkf5",
  "key5": "4YEuuupNmgNXKBmwESEpyLiFYNrAQEaK7RiaJPoevFWjxdvTQ1Uz5vo5Kq58HmbawBgDxaJxR8VND38KaZbwzXd1",
  "key6": "5HyE1GdmY2Kj8cvTyzRLu9R1bvruPVuxf6T3Q1LhSK4zpnq4zN6zoffqkWzqhQq3mAXgteUpL9DGheN5qMuBBnbN",
  "key7": "4rAsmRywLDjruZYBZeuU5eAb5hpAnTWLKSHSiGRN7ELbVXVJ6wSJ3WrAsdmiGuygJY7sHMkHVsZaWKfMeHHow7U8",
  "key8": "5V7cVV129SskFSMbCxrcsMGe6FTAP7dUZmXg4VgMvmYk4siAASkJPf7cpj1xUmx4rajZRnJbW4YEzoKP4UKfT4zH",
  "key9": "4Cteimna82uhLhR1TMcp7kS6ARLHhZdHBSAaixt1RxFogiLrL38S6BBM7kdTwNMVVMmSGKVYeuJxDhnDjsmERp1g",
  "key10": "2ZtjWFuGeWmpJBC3Y2M8NUNvVLx4vkNZHgc5UTEcnS3QRv93tFr1UZ1DHgFVvW8qrzRKvKvc9sB5jpRrvZToSPVZ",
  "key11": "1257rujNraavyhqCcLtKNctCnHYg78XqUt38TdgmDbf5sdwsFfa9BXcnCy7fWvVgZHC3Dd1UXqJuvyLuiVNuWHx",
  "key12": "2zH6UdLs5zQxQGCJLbQ3F4tYtx5g444uuub2jw87m4DGeK7JCFraeW6ZRmuUraTkowmhedn7LijqixAGQ771rQSn",
  "key13": "jMFH24HNkc3Gt1scvNB3V5jCCNC3ZCiSJi4HBKTYF5F3NDGmGRYErUJdAv2dK5Fmzi1YhBwMsfZWgcPJt3SmnPB",
  "key14": "t9dbT5UTNBySuirzAokFJVAASx4uMFxZXjCyidsyFzxANj1Sp7wguHtYBqjudsHb5omQdj7Sk3m6LcR8b7bxNa8",
  "key15": "3rsurE5kHQAzQioy1r6A3cTGpHd2ANR3JPaiyknESUJQHAHy7kqX3n3angEhzPxHpAEPdV2Nxe9VJDNWTN6D5mRq",
  "key16": "3djt1ES71xXV71mNfBQKzr6fU5gptcZpCZNwVU7cdAbcVjgWk9FYHSAiNyTyatXcrjnrXqq3AxogDowvroGDcwzT",
  "key17": "292zN7fMUZKzAzkHUUDSwRzCNxAoC65kLAbPW71awAsQBxHiR6KfEJ7tj3dxqtu47ccWqX9KHzVD8P5YKQ5YssZQ",
  "key18": "5K1PBT2A5Fns3Bwrba8AxGNnoeBS8mSQ7ecXqMXMPZVA34KRbZYFDi3E4gURyw9drQciyVTEWRkftGN5W1d5C55B",
  "key19": "4i2PeYuNRLS91L2pQfFMryWLhTbG2wNCtsckYfUuUNgGyCxUbXUgShciujBiKcdKdqhhxXJfYSBGoaSgvAEg1LdD",
  "key20": "4mM2XEK2puh8yfGD9FhE6vacFKndwz1UeuDqqyUHAaGChNaKu2zXaZXWiripf3KScoxNYNMqAKHhXHptdWYd6UVQ",
  "key21": "5BV1U1M4y3MDRL1fySXaUmBodCVamtmU8c4DkisB4cfSQrVfJsz6eZh8BKd8cYBNGWHwZfr3oAy5FLjfrruZUH5m",
  "key22": "29MubbJK3GgDivNUSrREsmsaUGosF5Pmx2nUBvMDEeGvAUHA2oDBjpWxr3RmEATJuGZQTMRCqyW4H8bcDddZcc3s",
  "key23": "2v26vb9ZjgC1WhXMj79BU3ZHrXTogMwZHACHqPmdNiZvwx3rkywdZpd212rZ7vjzcVyicmfcFJGgsCaMf4ZK1jTk",
  "key24": "5qZSdcCNnuBjXKm6tKACzo1ydqcG6d1ggpsZdEnUEm6fjzDrtVr7wrF16pA2NsJe9xU5quhY84xCowNTkCwsTr4K",
  "key25": "4PwBhg7Lc92Pc6db49Vd8ea2aftQgL1cmSWnb9EiGqY82an9KZuDrkQqimm3viihvqozmq9Jb4m3vqdYVvxpjzpv",
  "key26": "5Z1gExN7GaAGYXgMtA3aC6ji7EkRJdCPC7Nw3BgqjMLQXXzKT6w3fmfkFYNbzVTKTKrEH7gqerZVwEKuYh6ZNS27",
  "key27": "2fuxms45N9Smu3SRX3vfM29FwbFE9ZrhrCFvcVmCUgpHkGdoFw3CAzejLd385udDxxvBnazvoKUGsf1zr8pcHvGy",
  "key28": "9b7CL24zLxB6Mc8GdMAEANPPufnXxY3vcQWnFqFbspzpLugjmiVJmJLqd3cxZEzyG1ZmsbgQUpQZuzLCMKCe1RM",
  "key29": "36SuuCRzxvZ5BVASmoMBEEEVWxhWaXMofb4LWkcza6pRjvU3X9ugykyUrf6uSDkQXsSqcwi863Znv7Qz1dniE5US",
  "key30": "5ZFwas4gRosJ86w9HaSNmH3e3RDF7oPhPzskhtoXpWAv2HCoNMKQq6YD97etwEBPPkPA2snwmiZZtW9ULpgF3mvT",
  "key31": "2qL3h1vCHQQghgT6rWtmB36wsuzr4SJSJ3S8XM8zqTEU1mAMcVGjKNvfGLwb4cY3m9jnieVqhMfDoGWZNQx5GsZe",
  "key32": "2TpbJ7SjAXgh9DuxCWu37AqG4P7RtWyh4YFEREADxg2AesvLG7sDSuV3MXVMmd4qbUJBJnjWNRYMQuMwXd4Wh87g",
  "key33": "4XoBrw9SujQAXf649g39ZJzE5nXyqmyA9qDMy95hvqDYqoyvYxT51oyDndeZkzy61NJnoMPh7VMPocSrndzEhEZr",
  "key34": "5owsk165EMLRVyjj2ib8zcR6yX4PaJfAVuqSgLsVwZ769uoSHw4fBK8vp7LVWshQdXKRbauWo1XJGhcALkiWaoxn",
  "key35": "5L6NnwWUFYztogssHrnp3HjjgvLmHeaP89ctQLvmemFEFCunAu1SXMSiVpCdAB4FuYfRCC2QhgjGZBuZy57gc8AA",
  "key36": "4B1vj9VWP32jWRPxyee1PneoWYoEWibdY8hbcZne3WrZ557N5TeE6HzfbScJ9AQnJujabPfrz2yJDoVVBjzKmXTE",
  "key37": "3trvThn3VNJy7fZ6RQ32bWeGQaxVd7sHf1EodTnff1cWp5ggKo4vDAheSvcYhYxDTMtkGCbLfxf69Wrwe6wPy4vU",
  "key38": "2AXpvLaGYxQu8ujTuE9FxxQaEwKWA7wPTqnww82NqSCU1D89L1CfQtBtNRwJUJXG9miMSpt6wCDXxMYCTs4ow4L1",
  "key39": "5uEhyu3bEoHYdsWsmwtsjdXgFnqqiTKsmAk5K2KtxJbQBPffKkA3DnjqciW1BoW2CRU6SwstZBnbZdpya6mqURUt",
  "key40": "4RFPR78Tw3ffLZny3wkqaY9aRG6vQqnerVshqG9VhVcKozvkTZ7Vg81bHa7Pd3isXCwf6A9NxpuEt3fDtGiVmaeH",
  "key41": "3ZqAMwrsFB8hW18Rm2uChuEtLQshU5i6VcEwdGuzCsJZLvQ2F1xq69znrGMQwBFQTepLBVZDbPsxRdpqQUmQw5Xf",
  "key42": "4Rr7TrJE8vwVDYL7ocFbJm8CB7jyicbskqLAUxFA9bmT6PReHQticq3MWrJ6NEMzvjcAxxMnySs6tKTPAdsGWmBZ",
  "key43": "43FC3qc7UR84h8NuvivifV8s5Wp1sYKN6WuXWe3sveoPpgByjbEqbncNCSa8ic8DJPXDKuDUypJPdM9HVPgEuT2E",
  "key44": "YusBKWSrB4KnbwfSh6kGAKD8xcuYzzUA78novwWhevWK78wzeDZbeb5ZeabkcFitHZkXBDw1xPgMs4E1FW6KxpW",
  "key45": "21B28h2nQrYM7Bi2R3r94vdBJr8Y1B7qz6fkvMasJJpLMvUScTWGnuJkR7u5s5cETqdLLt5AMtsnQoNX9gfWtz9A",
  "key46": "4HHHHtrcSVmg1KJQekZLg2bRLG2d4LUHMVnEgEz57qcvpCziyAaqsTSrfGaSzwQ8wjhqjtax1kPsgUthLin5ibHo",
  "key47": "qK7RbX4oSbb6mak7MNFAPLHCQ6mDRmykjgJqD9XQN8zbir16JQb7xK5NYDYvuhAxQzW7nb91tJv85jg8jarr44s"
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
