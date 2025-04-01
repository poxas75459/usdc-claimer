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
    "44H9K2VkzNxdNi8K6NUToFANokjuuAoHjpTTGVWk8dARRjNjvDc1R6wpypPP87Jw3ibjyG8TtSuffE9szDQF1xt8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ko9URuH2tHqAdomgQhj95YAmKR4tVBRqQadj4jRSL1b4hsz2HGhnefQrkdyHmGpKPXpAwP1DgKo14RgVGpjRAUc",
  "key1": "4Jh8NKgzRevLPGrzZxuXi9xoC3UE4Cw9UA1a22gyKuMzcAQ8yipZwVjQXQkjoQ6DQcGEXLa9WVLC7vFkTD8PhS8C",
  "key2": "XWfs3KNy3No2jFQvAhAPUvj76dAc3Sp2TJso4M2S1iJJxkgf3Fe2TfFkBT64f2aKXZtxo5g91siUJjnbxRBAeHX",
  "key3": "wLJTB74YHqbd71Xq8Vr6gpJZosNQWQ9ZTTjyrZQsJBAM19b5KriSEFjp2rBwm8jzcQy1s1HxnCNBb8swsUVD6gi",
  "key4": "2TNqsGKszLyvSgNjrfrG2xdnBg5CF1arCej6KtGZS46uW17xWL3Aj4txjDguP1kxzzgYwCn6Qc74RPyEWG19qYk",
  "key5": "5fpos2tUzrimQ5JJSLqfTWvLGb2UyzTJcctBPhzGCwjCTWjvbV7PTKMSc7Ndv6G9Dh5yHuXb8u5x52CLAzsbLG3p",
  "key6": "51nBGMefbuysWyD9kLhKRTGY4r6h37tSGyXsRPikoamPho7UdpvX1cytx37mpJyQfh3GAxi8NtaBfCS7K9p2s9LF",
  "key7": "24ddpn9YcLjxuhM7uFjkx5btquGjwwrTnSdqGXTCMM4Q6DvZFkSj2rQAMHQwBi7N7KLvhSADudrHPvyxFZAYmcJS",
  "key8": "52JFphvLgxAeqWRcUu21FtPRq8acbeGq3Xws1Wp5Ep5mNRNgdbd82uBJhZ5aFEe7v7BiSPcqkzgd3zdyfnVeXw9J",
  "key9": "36cNjbyWzQ3mrsZyDeUnLq9ZLExAf9KvtY9247ZrXgTEvdHUkemorn6YjdrTRtABnK5wciRYyCtTeNxTbrxQwYZ6",
  "key10": "ggkegLaTfNajaWkGpFw5m69hTLrQFJSze3sUnvXooP8aWhVyBXhYFHc9MMNU6sSR4qDuANo7D6TiVatsDfEhHj6",
  "key11": "65u6b1hMpx4uFCTwzxCf13WLX864jFiXq5SAEaQv2fccGKkrXS7Mfiy7RRbYNEsQQVfq2eBqLTLysyXvReGkzjJp",
  "key12": "BozqcUUgcueuXuB9x8waZvKmGkKEsFRAsLwn3gtym4woBEe1urNzeZsdQ3z32BEkVf5y28FNLD3MRWVBrdXnfpm",
  "key13": "22Rgq5Fyizn1Dwtv3xLzB7n5bn5EvBN3YdvUmCtAH6X64YqhLVkYpkMPNndmnquPnmf1ioh8pcutmFejZsqnFg1A",
  "key14": "4K7ja7tkgYAEefDjrMeeS3n313dsYZmYMRKsikmt9fpZQCxLdZT2VSrd6zz3XcR9XjiKzuQgo1VX251Nbixaive",
  "key15": "6aXJar82XZcsqZmdTfR86GBLWSYZZe1E1zHHVAuq4oFpT2qH5VefHuDhBr8qmm9mW27sUxiNefE4hFvy6fiHnfQ",
  "key16": "2RVpUXvchQAWNY3vqEzPHyF2xZdU25RKq9jLNtva6MMgbLTEponDGSdCtK4ndskaigLmHw1NjtQx8f5Y74oUxNES",
  "key17": "51y6Xgm33pzZ8DStRAfG5nB3g5qAcusMyebyJezbwWKbXc44jgnaV3RxpM9rARnHSG7wEzCw5ggTfAZeXX5WMfQL",
  "key18": "2N7yg2ApTU6UtZ7YCFfR13RFF45DK4AqdumW3LMAxW2S93X1QTsDmRyrbDkwH9cnR12bWboWsTRHcc3hsvsreceW",
  "key19": "5bgoWaHAbMVd9FQVy4L3qcB8pVPkXnLzELnkpGPwZc4Rr3ccvdENNGxckRJhRgHPKkBva3sV3rwyZR1pPAyypEsy",
  "key20": "2HX3jmXPV61BfemVAzfT4qw9onM27Txpg8ngwmyW4vUowWTuwKCEnKJgJ4obU4xpqHgAq96ovFxQNdu2kND1jTt4",
  "key21": "GwmCDgibSixb1gXWGQz59d2ujKCFcGWM56eL9koJR8qUxkU4jQYcfH3WBQfXJBxACw4byLUUyjU9ibwePmSyoUc",
  "key22": "3TdrYPQxdZMpjsj3jMtgY8yJSN2EMbhnGnmonxmECnDbS5YMX6LmearRf5B3zDSQFsY4C8WRoRDHVZCUHHi1q2Us",
  "key23": "3GnZjwMcHEibDp73dZ62veCqcoWM5Wntf1GcP6SomcqrcMCocKj4jdBYRxbWNV66CZLhqcL8eAn49AjCEoZHkNzK",
  "key24": "65HpPn4rHHcjmecsb4ffYA2xDNnEb7rfN2uadR17pvj8apvoPaySUgzCuKYhPbU1PoFGGQqj1xZsy7fKCXBjXqvU",
  "key25": "kgkxdRXXrfSvCmtMk95LbM251BMd1PcED1GXcv1kKLMobDZ9gAQfTZu7hhDkSnzKeAUUbFEw7yRTFtMZhgUjnW2",
  "key26": "fcTJ7qkcyH3mkj5rFbjCFCsvEyBS5LJuCMMwKafpLzMT7aPQJHfmKcFPKG5w5HJ7KDpFWc92o1cVZGf1TDVfAKq",
  "key27": "t3yq1FeEyDHVqdrzfox1DuJPaatyqgMdQFJfSGDtGnjLqGZBZr1hug1wSMz9BgPevVzfZeLoUCoHDXLK92jsxdB",
  "key28": "4n6ps1WnbTW7d2hyUVZJHWt8wDVbTpk2g1Cmdr6TMBSdJaebJ3bLRgGwTySnS8cpsrwr25XWdCyahXhriHq8B4QX",
  "key29": "3U4rCCQermRuuKusMtnpfWB4we6ncVk78QGYeyJzkBd2acxTijs8rEqEDet4uz7D2CWpBXtHZvqgHVy16He4Ud5L",
  "key30": "EfCpw4HugJc8mKWnYK7f4wAPiDFaHCgvyvRfVrbkPTsGDH4JhzaJ1FPx7NCujMKdibjmAEoDDJFk8exD3G2tWRH",
  "key31": "28yLTExM1bcfCqeFQrMzz2BWZVMCX5w6iRfwnz5V8pPGezApGFVZfEx6ugLYXr6hJ6pAQtaPB9oZHp2U7GFsengb",
  "key32": "2sopUyei6tkK7e5ZBzjRd3k1ajfq4Ez47KkaqfUtEFLB5gfEG6r9MPAxyELb87Bdx2Auqg7GGLurLMCfuRVtPVzw",
  "key33": "5vbWD4dx4Xeq3XRyHk7G7uWnBRHLJ95HyTf1fwcJMGtHmYKToXQCDWCBh3o4BudVKx6ZpJ7U5MGMcF41mmt4oDer",
  "key34": "4PTzCUs7XDh8NDvsrW4V28HRLNe2cpUvGNHWUApRotu3vPboWJHAiWuGfvRcrcKau9ZoGVtGix5tpqAJt96c5CB7",
  "key35": "2DZQqVBQ5zKD6qiaxaUFgs14tb4eFQC41nnuDDhUWKUrtUCwD54DH8qvyFSfrFV4jqY8Hb8LtkedJ72vRpRmZgap",
  "key36": "UvN51fh7ot8ccxFcjThgmRg3FuhjWfx7imBF61JyC2hYKp45ZqLhmYYzjAscvUiKNrjdHP2viLqB3PTneDosBvs",
  "key37": "4Bnq5FF1HZdHu9mjRAjDfNtLyGKLdmgMfKdn7emorKHoTZJo5FdVZRjVSfRPCXHyELyUxnpFPCJzo1FfZXVrMEiS",
  "key38": "46xXBiAD3ABPXkPJa8RJozQhe3LW7WUu3VuvgVBoew77mCW4zL1FZWPZxgfRNZv4nHDdkYrHBtbWugAfT3Urz8mc",
  "key39": "2Pb7arkqZaSdgXLSbouubJPjZpxJSUftDkTQxv2bY2wXmAC6D3TD94hFAZhDiEp4NwFatJiczRaM6mmrstfHKYK8",
  "key40": "4NpeV4SySBRe1qRSFXVjvpfigG9HtvBoPouJS3UoVN7DcwARPURZDEUtxpSQAuFo6vWPmsvh4PjTUwGgZqRcrt2J",
  "key41": "iQ7YXnFbRLKjjwG2XoLKZVk2ZdtakyKJFXtDAGds1JX3Eem7h3LY9boAVfTyUmj1m8fiqT6NELxnsdLiLv4SKyU",
  "key42": "4SNXwwpZ4vpPEuhGwCEb762HGU87fkm5cwyCpRXT4iHyBERN3CagZQ8kP51qG68iZvrq6nzTJXgn1tCyS39PtQU2",
  "key43": "Q7mLySYAB6evArJyGUmTLiHWRqxmAFcKACxXSi7YQEdoLSbeF2PgN3LSEKtTCh21GCXi8EqWTfxz6ar71R58LuW",
  "key44": "4esvMU19F4jRPVRymbWKohAHircpAWTvC1ccFWGTQVTASJbdcvWBfEBdXjNC1Kx3qbXZS36bNTwFXhiWAVgrGrro",
  "key45": "21rLMc74LxvtC6WUraHR33BG9DsGCeZWX5N3QkdXdfurwTgxkrcLSXcUPp8xrMR6EuQPQL2n2mmFKQwKPXToF1yd"
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
