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
    "4rno7k7D9YDrUfbSCdmjTWpFRQVNtU4rncEnvQypza9Yr6xuEv4VQ7Vg8C2R9vkkiCn2DXv688K2TjDpMNLxVKzt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65Ty1DPT1DZ1SF7aVaEygJ7p93YZkL5eY4d2WtaEX1UcykFbjV8GN5P1wXycfqWWh2daHHYHpk33VgrNVC3LCce1",
  "key1": "62DvG7XcjJaUhhLsmuKHVRhcCC1xAx3GRw1VTX9efGGn7QL8YKs9BMiCHsPiELUHd2QS5sc5PcsbX8zS2Vukrq36",
  "key2": "2AMgrZF8UZH6y1Me1ExfN4N14U9keS8CNchpB83UF5J1p9VgrCd34hceer46o1iGQACMjQn58XRZJRJxdvqYT7R1",
  "key3": "3jpUPU5kntUnv6YrCe9yAv9NTMR5JqrAyQgiT8afJB72VTMjvt6VAt4xjB9RwojGbgHBm7DdK6wBCMKCN5W59iHC",
  "key4": "34k6ptiSVoafhdbeJB5dHn5xeuuPzVig4u9vdg8PLK7RPwHbYZKJ6ZrBdVkFhLbWMDA9i7yUrpbC2nkMYfcdzEnG",
  "key5": "2wxUgE4YuCKsVQubfWZnB5RYiuP3zcEeCxyDKCT57CdwbSiAaP9W7D1vHAh6BVGgAqQyCt4Bd76a91xaiAMdBRJu",
  "key6": "BmuQneMkumFeNQj53XYgr8kxPqXan7pXkZQAYRN3Jmovs5PsniKaMcPSAN6ysfX6w1suXnvmFnTUbWfSTNqPaKr",
  "key7": "6323zVh2baxcjY6BZCLwABs3TyjDnxok5sZZHdRENW8ZeCtATmgwhkdKefGBT8DFE1DWCD778NTSu7BxpqUquLvF",
  "key8": "2axpWAFnzfwNzuLDoZdRhAFDoeWYi2oJHRvoxosaVpYFRzyJzJ4Je6h5Jdh9dmfA7HBMNn1PzuSNXYV5SdnN1ccY",
  "key9": "5HUpPf6cG8KLMCa23pwbb5pJiPEAw323jANS9wiYi325vUcTMvpRv4UaBiFgCr9rkEDt8G9rmdcxexiay5NuZ1KH",
  "key10": "2x7EdvDoRMEaA6CRB4PVc36nMHcK2kxmW73gLRxTvPqeZ7o8fSRM8texustdtLj1mDmNQceZakqTXr4Kyz8hoNd",
  "key11": "9BvFRmTBhZKcHEwJUcG65fVcJUeCNiJ2ZRapvs9wJw7eR9U3PFRamXbdK8BFKZx3C4S4YA5TbDHuuTX9oq86pSZ",
  "key12": "5qgyvirc4qUeajnMh4qRKdodch2Xigopc6YSrU93WvyyeTnqmJQLGN9Q6m4dy2vu291hNZo8jgfB6Sqe6Q9oHAvP",
  "key13": "5Vg6F71V7pZ6YSbXzunAPopMRW8DFTgfCrEdFyM4LeasWX3boraQfDgkBirpc7yu5rfdRLqVDrjseX5itUQMuNXN",
  "key14": "5u4mzf38onfbUwcGmvG95YJBWJ19QNE4b3UqRVyNA4t14h2WR2LojTWFXW1r1GjK5A482DsrQsnJP3dEubSanq57",
  "key15": "3A2AzU2dyeRfSfQaEkFTTnXr2ahDHtEM8xTAczs6EybFtbjsDaWw6Cq5koxQR3PNdVpuHwTdDvP9wTiRg7styy7v",
  "key16": "SVvNhwwawKDqX2NHPozuELpNkNWrSVZuhvinc7mUVxKXERGy7e69X3QxphYEsP1n57VaoqxYp6yYcXBnWUz6YJZ",
  "key17": "5durHm2SSDmMGGEdvUsyDcSP47FR8EyfjAUmUHR1C389d8D7Pkft5JvjW9DyGuxvEBoJexRdA3Na3NeS3q9NvAyz",
  "key18": "2u33h3fQRnjQm5ooVgLsGzi8QobLag4fKDfqyfvEz6RDpLL14sVR5uVwkFXvNq9ZnXPBfav619eRbDnyGq25Aifq",
  "key19": "2Eydwjv3tFx5tojYg38ef1RPS1ZFa87sZK6ZFDpxdYoU1egSLR7tTAtMoo1xvAKTEV3f8Uz4x3V3bvxFnHj9qtTs",
  "key20": "q7i8YC8DVfGGDXzXnpaD99Ar87BRRVPxbwa2EDYN5wjtvG8sNjy7kgYfesNXUFs814AhWx6jFgke5crBPxMUVxn",
  "key21": "4UCUeZhg1Bwh2HeZ2a72ELWKEGHsbwVsFwu3BJTHWFZ4fWK6AFEwTiQQJ4DeUP71m3jsgKoWRSty1hUFctNoFUiU",
  "key22": "sYJZv6XwsbdHqm24CQaV25us6NrNQiSmjUYa8DuhYvKdpYvwqt7ruPk8JxoRyBA11D4inVeCXUqBu1gKPMjTYR6",
  "key23": "2xnUpQ7SBYw6Jb9uQErcqF3VVT9Eci8ksuAt6SW54eQrDX6EuNuaA4qwfgusuqMTF1z3PGzSBecHp3ExVXdfTL41",
  "key24": "EH4kMpS4MVz3Krsf64yqcXmje7zt8aRRGFujSUyk2Ued382UgCZE1KoYUcahdh3BqU2fLP7Po6HhStorhPjLH2H",
  "key25": "2oiu2rix5GmrJ38MnqjBf3GrRrsTqoqusbx7ouHDr79tcJvgs7ZHVSd36mCb4zNjoJgVXyKxPJuSqyh13MWjzzqC",
  "key26": "EYxyEMNyAPNnFH49g21PCCBgWu8965jEiJA7q95LMzTpHJb8Q5ZCkBUgyEMQyo7D8up3H7kpKey354K185W1BZo",
  "key27": "4uXiQF2UKyTj1Ysg7jVKPKuwZ6pTtiLJfcade2BujDw89i3hXv3QRcDPJDAqFX5gPL6WV1WriJ9HN1rLPs1qvEoY",
  "key28": "24tpTA2maVWAbZv15moWuGmYkinXhXE8VEqk8qSxYQ3r8PNwZWsxsoqwx6baByyVU3CMGQocCzAZpi3hgFsfKKyy",
  "key29": "3MKnKAWwSy1V17mKsAREHVfPqs979HUKHeSB7druZWEMnwnKNNm2myCqYhiTjt41oa1iymkLcMdZFMx83LJtHEiC",
  "key30": "2qENjM2mXYB8Uf3AxRxWXV28fJJvxvvE4rGUoHLK3bGqWXrLCZiptHndKhedEYR1bNdEmievAv6kJ6WdTGxn1sue",
  "key31": "25nS4AuVBQztL3UTzv8boMQPuYDLJnzrQRuuBx3Az8Y98iUsm6D3H6ho9C7riRxsWm1HMMv8dXpU2t6DaFj5mt2x",
  "key32": "3JftNJ2RJzyNoSVN2qQMvTU3R3HbBe9y1KpDTBaKrTZEAmURYfkgkaRf5XzsAZntEdAsVnQA8FRUKZn3TYiLQAQe",
  "key33": "5njwbDKWWCQGM92ppiWMBvDjyr47ctT8AyttUGgdEfj9NckSCEPBRXABvVVto8Fk6fYuXpP3dXFx7qFLiHXwHUJe",
  "key34": "jQAwsL5MtqzdE5c45z2oJybzy8rBppGSmmvvKnwPmEG1jC4kk3byTNoVFGmt87BoBoiJs8Uy74Z8PJfa8pt6jWn",
  "key35": "YxszJtiUGh82jKgNq3hndgusnKZgdgvS6kKwk6TD2djV5YCkXWeJQzT3FuZo11wnrdAdmwWCLhiuy5cYTE9PFAk",
  "key36": "3R9UDVNdNBCU8AUDxxVzizUKb3PTohm8LsnLMEWri1FuzEJ5VL6Yd7mU3nmp5e1GjbTjjzsLZqbWZPc9DLvG1GdP",
  "key37": "F2Ua7hA4ipasaBi74x5vapA5BTtn8Lm3xGoT5A7jvEDMaogp32RoYdssYzNzSLfXUJyf64qhRWNrTiFS1BxoHaf",
  "key38": "XW3c6jAvAe7Ay8Up6rR8YnY8QyFiZqQjnktyc7wv558KTqVigSDM3dU9HsXjmP4BqGcJoYTJZK8L7wFNgqxFUot"
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
