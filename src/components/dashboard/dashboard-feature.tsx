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
    "4muqppJ7QT8CBaR3WiBbKNpHgdMZP6zaG1anT42D2f5f542R1BgZWTWEYnAp8WBWuqD7N9ekeMZvag3McvFjwoaT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bjyBXeMCnvyrybRPEVhTUwf43jdEa9yfJGAbSRPn2eS8XaqDh1qteLcKLmwGmr3ZrMQzhJ2UVquFHsTgbdJzgJT",
  "key1": "37FVBNtgSU8tpbWL9TWm6rwVkDoT3afQesGpjnCvtgpkeHMRjAfsRvSQQQB1pto479b3p5cQeKXy88Nq8fHonN6o",
  "key2": "4tSAQmmnykuagsWQTBssUDiXa2M47Tdh44n1RRo3MJxJonZ9mj1dVQKeNP75J4FZ95Hx87rqAHNq8QdgwK3u5Tje",
  "key3": "34sRNknrDNeFHmi7PD3sJGigtoLXvcsgiz6zwLADci4BXoeHLfCCYNEqtjuZZqj1F1x2jaPmxs62JuRvLHfgmppz",
  "key4": "Q5zNgMLSoWJB7JQRnoMzaan2rdAk4YXxUrAeMJzoA2D7i14cxfhvYjGkfiDdK8EJmV6b9WWdMZT9Nfjv6zqKSwE",
  "key5": "3SbMbirCmv5zaYUky4yHgcmTEdK7FMqE7iHFKX5AuNVMGLR2K6dTfi7MKGYrXBpP4Y6fp4kozEegh1f9bDsN6jeQ",
  "key6": "2MtmtzotHhexMAtYsSMGY5cceuZDq7Jnt3EPdySWczatAVTD1wsQpwMqBy8tNQ66fJPE2y5K4rWKnCnYBKxR6MmH",
  "key7": "5bFaw48dGqp6ZGvvPDwCQcTcYNkBTz8csTuSLxBnD3RXVkL8LicJ5t6Sca4KVMuentHUGkixtiWd4pXPeazGag55",
  "key8": "dv29mb5FRyjMCLWJyk2VnryWfccuzJcidso7qnJcby41vMVrJDLCs3FT9X4gJQqYSL4eYFJCTZkVJhvCs2Fbia9",
  "key9": "VxbqhKL9BrFJqDahviNBEAHCUaaDniFBHUMNKuqFc1rkHQtUeD2AhJPVcQjTis68awpLJLSmjiNmWGasYZRKVk7",
  "key10": "2S6mZqquajNG5XZVBXvRdJXdchBQ27fA9HJwm1YCg7yjrNCWcRcZdJS11WX25rzB3i8pxExw6w4nuracbBPkJi4R",
  "key11": "5VKUbYUb98K2YtX1w1mCtiG2dq7ERZ1C6QdLGprHugjWmywUgFxZvLK9uSeZT45ubmh1vkGZq9je3GSbprvzNVBU",
  "key12": "22TaGhZmafKkvBbc1xz9TQYwnAdcUV5QWnYhr1pQ4w1YEpLtZMjm3959cXqUjREenBJzoFaydTGYY4yPVJ4PYHnB",
  "key13": "5dxUqrXnbWcBRZAWeeP9W3AQ2gNwGhEJFjCPCqM8QaApkHMT1QA1wobxUyLuqPSYhaZGfGJA9LDPdVedtP8J6iPg",
  "key14": "28mGbgHZ5Jx7cz4GoefZDRJTRB8Vofm6MECRBXFacykeZGPTY6BmKZ1RsX96NMmz2pDhYxjejkTYbX7y5M1QngXw",
  "key15": "3v6pL3zBnJKJzSPZ56nFttDLvYfY8dh2Lx3j4yqm5c5emMic3bGS9DyecZpopzRhCRbwDG6QiZwAnkhUBwZSkeG1",
  "key16": "WhPS1kVfcovyKaeZjeZHaRoUkYKrbqop55dCEPr6aoNe34kpjZiark8UzHzcNmLtEd8RiCpUzDzrnBpoVZ1wpQs",
  "key17": "5y81x3j2naUn5tfruC2K1McDHvFvrHz77H1EF7EonvCEcabT4Mzn3bnnLNn1p9dSBfNucKeAyPnBpRE3eDu1PP8q",
  "key18": "3T3uEAJ5QJ6ghVyVW1beiMkqLyhptGG7KTb5DhALekh9sWmRF3kEUzyni9HRXp8iA36NHXMCAQJnSpedK1dPYuDX",
  "key19": "AcmQmUmx21GxNuxmvqE58Rr5BsaZRtVpEgjmGNG5QKB5McoVGmRHwPRKnUS1naNuoJHWbfJfFj7LfnZoQM3UNjX",
  "key20": "5TdwbMDsPd8E3anttt28ptKApdQtfZ81GhrE3H3UYScd1fkLEaXznTFKuRUaEo71A1DteaMdPtvnT6Vq6psDrv7M",
  "key21": "5wauMhk9yHGe7Mc78Cim9iCbTWra7EDqUFYgN3dEkk4HqL1UyAqRPAjz2CMj2KjSry5XFcRrDXnitzC6F8XoC79d",
  "key22": "5mRfB3xKYxrvMiwXpTgommES7abddfF9UW24YNMQm7rKfbGpeVEudUGWPMtHSnCau5TLjamWZ9Q8D2osqriNdVDU",
  "key23": "29p2CqFVadd2QayCdEymFyLbDN6VtrcLDZ2rE7k9ZSAfxbn3SXqa9oWPwmYtHyTSwB22ohoAK8Kpa77r6aaKuT2f",
  "key24": "4cbfrwLJ33gBnSjzerm8HbwkZESHjdsyWuJpFbWk3GoUmaQKKfgACw6QstSkPvJLbnh33WsmsFfjPQy4htsy3VK9",
  "key25": "4dV6miajiJHDom7jD4yRK2GXeFzvg8zyaC6Def177qbRLYYtYBDt3Cn4TgcGHxLNWNhavjhjQjruwkgVvofMdvCc",
  "key26": "4iQWKAfxKfnJC8uue5reSs7WoYhyaRZ1fqmqZFHtC3c9GwDdDTc2rnryZEkecY15Ktd66fkDmSK9f4S8GiDLoFc7",
  "key27": "4qS2Z6uAAGHfngAC28Kh47fDR5wTECim4ZN2zFbZZTnDTtTDbUaV7YBWw7YZw4ofgXyC5rHVq7vyXqySuc8URZs8",
  "key28": "yoTgsVpS2mDr3gywt4bvuv9nziNCLbi9uarz2ZQUPrEETkGuQchEoxATsNSe2DSgyrPCfivZai9p3j39FmSRNsZ",
  "key29": "E2myfTefofwr4z3cCdQETsi41UqhyrkzVPr378LQcNTBLtMAEy8DyFp8H3wf4M8yFoDfaSrhZuAQGsKsP6Wwho2",
  "key30": "3feFXdJhSReWz5YsdePcWRb9HoghYDUfaCx1jHjZWPzxBGdSWm3zaMGQE6G8B8dW2mnAMG654Z3abkkJKxqXBXBt",
  "key31": "rGLswNqExAuui5wwfFVhTMdQJBRJD1SGMfkptNvmATzKwXJbA7rZiUgM47ZuZGJBp2brNCuKDqBrSGeY3yJjyXf",
  "key32": "4mveJRxsEktZUjYvkiMjchHf6KYJFd3FuSrKREksuZ9cSMs4qpCeUQKymSwVe9yg4d72S8t9ZQrDGCaMJz54fVjB",
  "key33": "3XRGGp6wGYJD4LHfDkXb2exLBWcs9bMAdUwSPh9rtXKysVkQpvVyBvuWqdioVrKnEn81ot3rNBHgSTNEy49n8fC3",
  "key34": "5LhCHUwTQVhGfc5wEZqZftPWc49C7nZ7b5JqphuQK1y8WzaKL8mbmGDXi9DkxunEGxx8HRw2uNLgfDA876QwpmoX",
  "key35": "aiPUgRR816VrY1KFS9Nmuvo8WKxzJ6wEm4FuRMGyKHiL5u6qNBEjyHFL2apwryxy52k1KkAwkMRve1NTZq7ejeX",
  "key36": "56d7fD49sWHLjuQrCE1sQmcNw79uphJzHieFYBkBzsWGshgzADUY23bjq3PbppKSx9XWRZHYhHeP1EgXzLDfLzJz",
  "key37": "3WAfoni1xoAdLbUygDiEUZDhM68iQPFg5MpjVh7ccwWHDwqF6w7196qKmFFKbdwEz8wguwSnUtRG2vwRgA6kMJJn",
  "key38": "4tmrZ4VoVQGYo2ons8RVXcjPznDQ3sa5h8zgRL2Y46irja5n6qkscxjX2HcPMpHPumMMKGj28a2tS1R496nWm7xZ",
  "key39": "224ugXJYYQAK3TE22ULnuoTfC8EYofMFNunzzKsBTZkYu5sx7AQEEncYTbwTzDTTcHrBUuKyFeCpoTngJkyLkJLG",
  "key40": "hNx4FZMtQ2wJy4bLTrpCXgMcdDkFCtbsRrFKbWKzUNJcBGEUcqHKSJhib5jdk8Gd9XKKiaWkqB1tEYUDNkJcbbT",
  "key41": "2awuTTHuP9HL5hkQSRviNaprZ3mDeh1n22MtBRYyA1G5YcbF9ctk8wcsdW4fUVmsqHpZwffPEojGmcu26nVQJ2Rg",
  "key42": "2TbHpuLUmn1pdue96zGyW4kDcFDeDhi9FSKGMBNPFASfPFB1RpmCmwkrvyyp5YPyHxAxqdVoae1qqfQxPXvnhiX3",
  "key43": "8GAg46ei5yZTGDQyUthmUWKrCRHacjsX3UsAiT7R1f6BCZYqMPn5bt6YkkiiVEXvTeRxR4L8S5edfZL35eCDEw2",
  "key44": "35QM4Tou2rhbd4ctYPYCDTteGjRV79FdXCaihcW92WdQCF4KS5p7J51wB1XzptPNgZtJgmcxayiX8h2NKt1qvKo9",
  "key45": "satZnkyxLzhWm39RqAENvxTJPS34wZ5WPpekGC4YbwfxPB4nDDGotCjjg6hFsBUk286AQqMN1mZUEB9VUVYypxJ",
  "key46": "1RM6cqPDfUAEjnf2MigGmwzKSTKt9jbpnpjAQNr5ZoUsTKpFcs8ezJrTN3gwjj6wQrvayU7i4Gk7iAC6JwELbGU"
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
