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
    "4FW8DFxWAH6vw2BEtbjNMTg1WSWu8evWnE5LTm9QeXNAAehhmQCG7puDh1pzaKKbyH65WT1AqpEVizfRDtUJPdaF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jPLcMJpvXLeAwUy2PckHDjHCdBkcWxNaqaEgwrHnPTmCBGfaKBQpnNa2kYKSMYanS2TXkKr4tbXA9Gc6BLWh75n",
  "key1": "5gAEEYM6hpMGNbPEyyifzabzzGcSFZCWEKmGW3yMMTDYci7Y8iLsZnTwYAmezfjnjXgXGBLaVrTFWwFjx5PF8qHB",
  "key2": "67rLxjKF7GvZdvyjeNfh4PhriyoTvX6GL53XVepcieyfhPkEpzfSPfcMoV7tiC9R4yQC5sDMwnN8u4EjpwVpEVb1",
  "key3": "5UgdeqAz43M3b9BXZ6B2q1hzAiCexGFZVTZfhgTTijgtBjTJYHDtpSYQkgVQSFAFetk4F67m2zt9StpyCwv5Vtsv",
  "key4": "3eTSunTpnaRAU6JE7yHJVw361EEDEECq4Bw3NMFrdN8ahWH8VaFwr3HgB4FQ4pxAYsKzxNxgP9mk8mCYvefZtzo4",
  "key5": "2biCLbA6FGjisW3XGqcSNVVgpu1pdjPCBxKNoKRVErGuqi1sLc1yaKzfkf71Y8JnUfdFiLKerQpg1pfes44hMdoH",
  "key6": "54hE4gxJP4EnzMBMBn82mGCi7CDF9a6CHMMZWvCVPJGeuoFbA7tvGfadmSd1D8t6E4iZ98q6zVjCqPuM4jG2KHSn",
  "key7": "2BarH1NkcoVsfM9P3L4hRmLcxdY5Eq2nu6rpmwXp7EocfMj178YxxA1TQWpqZ7HG5jPtGfw1vp8kTTp19b9Xi6Q8",
  "key8": "3auXYTSP6Cv93rqWx5T46VH6wq1XAPyKeNtS6hViX2nBcgBXssq74j3oUQQbZxZbALoRs5rxtzDCCuduXJteZrLE",
  "key9": "61iYiAd2CRDH1jE8puSr79pde1gBkYfcAVNqVU1iSAm3KkaL6prRS4bM5wuAbH3FhAbYv3SdRfZHTSf3NWqxchzq",
  "key10": "nMhEdYGpCDvSZ9wCgsGDdoaZvTHK5zwXtsQaGCC9mHn5cLFE6gUL4jq88vbtK7yCseabfFBrGELrZLabzv8hcSp",
  "key11": "3N9M7gHcJutM6dRsNpDGyuDquoXRoqpgF4yT91ggYS5ksygfTTE4RUYRdho7gZGw1GcDR5h28JEXaca7poTjh3CR",
  "key12": "VmtWdwrgA8ajbBTSSLLtJ7ryVvsspD2jGUTebex2Zsbeprh9cjVeW2xuCwohY9GvzAzyFfxnfkUAHD3wh6PqJuU",
  "key13": "5DGdfCg823L1jNX5QVAWSSuy3XgY5LMmqonVry8UnWF5DtFbePgWkEX8Feb3tTPGFYPBBTcrgTuLdEF9rpARXPLE",
  "key14": "8Xfv1RtBAe7BczsgZB2Ygv6WeF7SBNSUfpd4wNZwkeXtodKLS3pUJYYnrwPJDd6xY6wAtWbp97qrY1tgwNhg2J1",
  "key15": "4eDFJcVgoU1gbyagRo4hwe6xqk2tC4sycAGGeFpot8krKUTMPbnbFxaWFP7SPsBMbyGrY1eNKicBcUPFwhnj2A4G",
  "key16": "5ghBcDuEbzNAJtwGn5pqFv7HUveWa3Aj7FqyYA6vfcCyqaEy5pvMXYZ8ndTeDkN5HDaZ35sWQKsGM889iMyP3cv2",
  "key17": "4tN1PyjUMhZ6M53WxSdH3fUyqzEeZVuLSfTBjjQKNJZqcn1S2okadchdpvyvhwYkL8gqsFJyuhGmvx5Ft9zk5rwS",
  "key18": "4Aj8PkcBTCxMzW8cG2KeX84t4gA1gkCdwAsoPHvKby8ko9tHBDsX8NqZMABpqFHudfRE4SokNj1PK1gpBD8WN5ap",
  "key19": "2pmseZ3YQ11p2F17xjyJkwdUNe1YvdCqvcCrWBdYUQqBw9nD4QKEYAgqY6RUMzmTgLeetLNnRX2k77DUccbk77YH",
  "key20": "zAaAbMCBvV2tp18f7czXyxDg385GvdFMptgjWy5AFeAEfnUwM54gSwNsgpkuJ1E4KoivApEdR4HXr9sYuqSBDdy",
  "key21": "3o11eVLUjUe3aJMRHR27FZgVhJ4iFDc83anRUjDvmftkJUbqRPmRxYusrELu5Ria4vjAiQ8CoBEJksqf1YKhZRds",
  "key22": "KSMByGG1iHxKGkK1ePjUHWr74C1tDLqun7yHwwQtSi2kE4ddNUCEzVG7uf9WUEcUurmBnHV2kfBZwGp3SzH54Hc",
  "key23": "4xQanmX3mFurygfcy8Mucs8yRioGGAF6QrHp4mGCmFUGwRYW5cEhinaoRXwbpeQ4CV8ocujzGs5Fzj4RVWPYKhcc",
  "key24": "6WyhJrdYQvdYmqHNDcbB4mtbWUcaS388dfmawoPJxXGwt6utHtH1T3vywyRVZfn6rbiZCyPS7Gy4swsXLYLCwCQ",
  "key25": "3hNXPxoMda1M7PQjfgVdbfepVAqZ2YRqczPvdrtocXyXDQv6Ch7sTLZ24VNMVYL1tj1XTLCZk8gajmYiRfVCoetr",
  "key26": "3VRQsthXaR9gZZ4X6TCtXM5qmjCLEgUEbN6LSgzMkXY4t54SuoqmVnbjNx4MpSBKQpAnh1tUtGZUia7bYfyi7rQA",
  "key27": "3Qy1Q18pxqxaqw6JBS4PDQ2unQVYpaEFYNpCgBE6EsLXpqYqbNzpbFYWLivxRGnfREPoxnEp9REEf3apBUPPvbhd",
  "key28": "5A1EuKKeqQF7nBMg58fZQC5tXDsy8jFLiVmdRCVEUQF1zPSzVNvmaEne6prV3Zoc4ihdSxQhLKjvjrejjgUAuEoT",
  "key29": "63ARP8WBN5LEziNFnvPhwAjxEpeywmk7ChtvsX7n9kM9CLPY9Ev7KbopuUM9b4xsU2kFaiJ9kSTTxAmB7C38cdfF",
  "key30": "4ch4HZJJ6bRPjMmCzCEYmQaZWbuTGiuA9LGbLTR4BDNFL56pafnAvr2ArcBouFfjEtoXfSFoJ6z9ahsY1GCRnTkc",
  "key31": "4XhwkxxQpuT6unqarNBnKVrpU8XQjEVHWFcanPQnXSewCm3dRNuNqBth9R8Hhsnxw3notcNQEdKN7PDDWtnNkmGS",
  "key32": "2MeJM4gm9FZGTP7UryAQBQ4pDMnfDCnyukGPavLtYhEiQSpPU8ARRewQLCaRPRZPJxmSMNCV73v7wzapGq9U9ney",
  "key33": "Lit7fe4wSRrsy9dwnsB1Tv7AvyiKHT5NXS9ooBsFK8nEtyQ4AmZhF2TCTGVkFuZwQEtMNnV8No7W5XD5oZLaz1y",
  "key34": "4xwmKpdzuHCTHERgEWT5iPDq1xiC3Y8D7kAko9yZ5HxwGrgujZx9FiG3UvcmjYtkm6kSpXBQLZtBmApvvr5Mw8Vk",
  "key35": "5qJ5kNQARqgaN6Xhz3sjAaLtcS1dA2DGMNSH4puEsNpioxF7RYiDG6uV7SkzNBt62kPPYCdJXPAMYaHUX3pcMi9A",
  "key36": "57E4dbsreN6hfUTAXxKz7C7LuHtPjPcb5UmFYuzhSFcX8tTDCuaJfWHHeHRWdjfyh8oZYs5qGs896gcarxMviQth",
  "key37": "4dWJqnrR1QeQ5EZncN6K9aYn5hpgbozuukxsSZrgns4LkJaR9Xb7rSnkHUVwu7WHEYvE9iELRK91icQ7WUwiJe2E"
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
