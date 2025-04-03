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
    "URcBgjrdCN46gsqb21x4LDj9Euw9QRdazV1EU4uiDZatnMPfq3kptw3JCwFcM9xQqtEH5cVdhVTrd6aGHjGz6Kf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AjJxhrjHmzoyqNC6Mm33d9CCteJDrdGAGpJe9oFcxoU7EqkrPUojyziZvosm7RPw8HWybreUcb64M8tCEZjjZ1k",
  "key1": "5HYsLGHetGVVQZc18Pbnv2C3FSUEh7HrNvmfEHRhgWbCtwteSxGUr44eJrYfV8UcZCJ9NPFbeMeAEXWKj1vjaMLB",
  "key2": "3kxdhas5wHFK1BUra3Gs1DRfVUYT3msWwQcff9NRABnN1YG2cMUvcNqgW5y42WUMe9J5HKmR6A86BMgK1EPm12n8",
  "key3": "2SMYF9aABVEw2iHnYU7b6Y5A54p4pqLjhRT3R8TiggYYj69nwD5b41UyxFHzVyiRedf3AsZ36mbmwhF55pmamVkS",
  "key4": "2weuvdxQg57WZkQJpZoNySQsGmbrUQ4ZF3uv2TPrmcYZcvUVrSgC6vViCKiA9aBbAf3Js1c9YYhVArfscqZ7e7oQ",
  "key5": "VVNHLKSfjaYRZ2H2nwX1EWhSPiJkkFahu5wNoKXEpx2TRVnfudpKfuurk1DQMD8BkNVFmLfx7CjZJWpsFmmrzT8",
  "key6": "SknwWFxNWtx4ViL8Gfme2t4i3dKmZc5u3U7PCWkwtK8v7KSzeTxAtiYCn25ZgKDvCnicwyJJHbJjBYB6Eb2vUTR",
  "key7": "5M8PZUpqv3SrYWzesTgNKjPF8RwfGV2VamRsmXabaqWkERZDzvawui84FiFHuAX1Q8qaz2JSFRpYsZq7dRaWqHUX",
  "key8": "54pprB3ChtYynmCX4KCsfyEPLd7NMfG4LFSU8m2XTYvCJbmK3Q3oKnoG8FyiDivENS3U6EqdPBfUAREYenBm7VuQ",
  "key9": "RFXTcGv4AwDcbZA3kmxc94fwKNmoDu6bZ5bCwzLLuWzi46JaqfG6DbeGXc7CydS9JcifL6ErYJbHw9d7g7kUoj4",
  "key10": "4SNrAzRcWMbm1zESuYmHCo6QEs9uYkzyr7WYEbieQYA9EP8T8kmyQ5xPQtvaQVeR6y41ZV59rBNhNaNksqYmQqkC",
  "key11": "5pVfX6DChvSsmpeV7T78FNo1Fc6tZpkxsRVTfgmyfHDWhSabt8aW5Tnpdy36hrwfoFvPpo7m6hAaAMSGxPX2kMTU",
  "key12": "5zjfVCQ88o7eegA5EwiQS4a6oTaBPuEbRoQPgq61tm9NahnZrnpdA1rJxWiU3g79mJiuVNTZ3Vd6zZoCatcDuJUq",
  "key13": "3QdDL3zfZdL61Xy8xoi53Xn2xCzxfrtw8sMRLxGwEowu9VwRwtxgxCEc7fSowTtqsdEoTjfGt5Z5wGRPtUoSfzsc",
  "key14": "4JpoAGtSekbBD6AbgTheExfu9x4F4LwFLXAYA5DaRcfa6mcDr8TPFsSSMLbKDwSJXzSthWR967tFB21ZocSHRqkb",
  "key15": "32mS3T4mTMfub5pJJVSuYaEod4ud1Qdc7nc4G593SvF7x28LQd9ah29Q4qwrD1XPkqFXQdizzNmZmzZozsJUcaaT",
  "key16": "4DCFeTFvqmnZYo4A2SJuuZj4DvtLLwj9DhcAJHWkoaxmXT2BqRZdnZmHMNw4v3HaSgeuVzVDh1PLepkochQD5V3G",
  "key17": "5im5ycEBZWM7o6LBbK55gd3gSv8frEztSoSSrxsywqM2g2YLcaWTa9GHDr8CG8WayeC8nQ9C83KgCYnUpoQoXigp",
  "key18": "52jvLzQcSVqogHeMWXDWu1pbH9afhYTu4kucgyab7iRCAi9N8M8rCrF9w9NVh6Pj3c8T8NbqHyPE2GKdZXNmn9T",
  "key19": "dj3biqrRvpVX1UREDudgFsb21oFpUvQb6RzFzsmTiXeUMbm7XzVctYWQi1on2dreiu9rxNpRxq6A6Y27hzULEBf",
  "key20": "4vwBLEvwmgnxKa1e7gqiQGVCUABs2pjut1z1sstGzVE5NjLHHtFpbWtC6YNGujZhPZo4wmcSenTLhgp6vCnmm8na",
  "key21": "3Vg5y6UCSaiCC2Pwye3EGTwSuEgBWQxBtzc6V56WADKgPYuu9qZXUhD8ht6sKoYPPaxP1Fx44s16oPN2BBE8QSi8",
  "key22": "6iQ6uaUgiaSBRrpLDq8hwogkNpd6Bn7ZB8Fcmtactkm8AuPmpnj3PbdHpYVQwQ9Du9ZeCgDRuAB9XaaLRTZad7D",
  "key23": "3Yq3TpbgceU9Z1MdnWAtgbEsFfRact1pAbDfHRH8jHihiiPPBVrSVpTf5oqrv11LCocFCUX44V36zkLZWbJpAuKc",
  "key24": "5Utxej1JjxzHZivwEa7yk6tcpKuocdmKfet4ySY11NZQBo85GEUrD2ffq13ZsmwRMQB7GqxL7YZjey9EoYxTmdnh",
  "key25": "2SUW3cBg1AVb1cLs4kJxZfBLb9AUSn6LRazUiUALtZbkmNovMMPDP3DVMsA4oyt4JLose6W3H6McXqJxFPcDLW4c",
  "key26": "5ccaguMFBMnkrGk6T5tTngakRg8m2tiPvxuGKPSBVV1MqrRAdWt5seche1i8Kcb82y5K1xVLVYp95SdonPyCK3UJ",
  "key27": "2WJoBhx5WBXvwx9eguwjBgEE8tYLPiwAd75cYq1ipoYtNuqLoXYYtSF9PPt4XXFSRWnjYchbZEYxSLjzSdez3dSu",
  "key28": "5Hbo3hussaBtQ7JASEN3Ucs8NGzKFpZNP9yBDDQkAHuc2F96oHqqgzg7SDJbzxsv2gjWmo2R4abWdTYsny9fCUKf",
  "key29": "2xCaNZJ1UTiLruCEzPkEj88E9DmtMaqwbDKbPsKt6R49BPJ7mdi6e3smb9uTamismfvSQUzWCQkwZMpf9V3kFXCt",
  "key30": "2VThUxy99ZjDokLdUBpRi3D2GFBR5XMDcfqYwLsQ23pPERQQpUqAjv35v7VejYXPEhcnfU8xBRFSudSEPqdUfJUn",
  "key31": "62YSGRke9zPznvwKt2MXTHcPUF22KbrffjuGwK9bR34hoRRD3FRx9nWthkDZrdcQVYyNJHuMzXm4SBvYTaSvaGJS",
  "key32": "42ne66JYbrUVmK3Jf7rzrVCo9CzzgiNaUPZ4KFz34QhyPdiyrJtVGEA92RujKnxwhP4uRwGv4H28LNPU3jJkuUTh",
  "key33": "RShy2y1SrhBRRkmHQGuUMNc3LWTsBrBsRBjXVykJeuUgJpbVsUPQKmin7qvPktBRHUzj9eMKYWzRRyFy3g826Qy",
  "key34": "anEtPjvTKHnLv3NnPGEhtXsQbTXAyYBHNZzaRpQxPNNziueB6TgHd6xFb7QDmhwJvm5SsBF5S2pWBBtHKpMYf9k",
  "key35": "2z2ZACM4ns441sG689zHQ68v9RvNie5zJV9wb79ikshJE5p43fJ2d1hK3iE5LW55kCySMJkon5dPMbr1dGC4sMmj",
  "key36": "2UGmfi6aczuBzEXj5H82PCkRsw2fEv73CE2m1TeyNNjN7YbpeA6Aat6ofMbwda88Spr4dHH3WAJQnLmmdkvm4yCu",
  "key37": "iyT5hCjDhEx93VYPGXjito2ugnRvY2E7o12g1bYHzE3jrSYD2SS2k9viZr5mmKYZgz11dtAPX1ybTWHMGJaQNvg"
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
