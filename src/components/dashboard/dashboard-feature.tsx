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
    "2npdfm6WSc4WBc8cT7789KaRYsHiiqWduxnqof4U9DBW3u4K63PC8qN2gUVmHD5qDonYg6dE5cVQyCSGq7neF4ai"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "664ERsDfFvnUTNvpTXbA9gEJdqHCtcZN6EfcReZZNFhFPBjesYa3JpquhHz9rZa1A3TYuMiUJ9z2Vmhhu8H8MJao",
  "key1": "9GpVUkKicRFrVP4EtqjZe1uuvDwWAaajJAwEQGGAm9rE9y6KZxwywTYYN1WYmrtogZMb31eR3JU4gK6NQibrfrh",
  "key2": "AER349cDjGwe5QgYWy7yWWPgGFZ4sb2MVJ22VCRJwri4GJp5X88dkJBc8H6nR5pemR46ytMEaHpwkc6vtxDZ92M",
  "key3": "2RgCh7F4cRHDfZhcyHhFx3pkDWkt2bSnEfZcpNtaV6zLd4NTNrXAjymHziXKpSzv6oSDErm8ahNPF4toJkwbg2wP",
  "key4": "nSmTLd5Sfu357X1S5RQbhorEJCs2N6o2u76UUBrpk9XVqJx3Vw5Mgoxbe8Uee6jS5eneLFMyQAfTUeqABtzYkdr",
  "key5": "ZXVmYjHZoRNDjDNY4yh3zNRsAThFeg6BYp7iSNu7tGrotfwPfiFttst7cC8BDwXqhUmPWqgUV16i8cZoBzGUVM1",
  "key6": "4iUsDhhrv1tGzZhzVHbXyVQNZ5uSWoWDBodst4wTigiQmqQuqvrL4XNTSt23q1Sq4wcSPiQjNSSnczw9rxhqfKHc",
  "key7": "2z4McQcDtj9E71sdnh4mEMv2R3JWr31v534pFDLjGG6uyb6HksVPvZVXA3gu6PnqK5J4GVZ31TbcZmetfmWwZTDm",
  "key8": "bFzrWJwB3MLS1rX816qETM6BuFjfcHNVqqJfAb18nZXW7w5HN7Fj4G9DxCS7GkvsEyT8dySBHV6FR1enEtWDVZa",
  "key9": "3tdGbRyFBTu6J7dn9nZWFCNoFZi1dTDrZecSjBcTKMfmWrZB9sYq9huZgVReChJwNmd6oaVvYf1u6y3hEkY7999R",
  "key10": "45oAiVnKjzJTYa2bD5ZXoyJCETuHAG7efM1vmnfnfa1HD2UGAurjKDQzqtzSPiq9BkECcJrRZtTxQrZyGf14MKVV",
  "key11": "4fnfsVyoRaSiMT5zFr7sXJxSj65ds8qXbkvRKZZZS9ahetJrFychuhhTXiVdacyDDwupkEZYYkGRK1iu3xvMEyVe",
  "key12": "4P5LwiZJVp2tseApHdbk4bJqdBYfp8qYsVT7FjvFVNF8FauyjvMCa34UjWhR6ZTg6oa7fAugLpK2P1oev4f2ampE",
  "key13": "4dTrVUDCHiZN9amtuWTsNsq8PzFt7C3kJw4Gv4uzc7ogXFCS62dJhTtRR8bW8UTdcPWGeabFz4vqDHPcReDChjpj",
  "key14": "jSCcFZzYWN64aZ2QRaDHLzw36R2D2J4Wp2nB2WxvUxTSGBFok4znnJihGANxYTpejWMNULmhMqA9AnVByJ6wCxm",
  "key15": "jaX7arKJZsj8E7yTDKutiP18rxmmpjPtjDNJiToy8TEKGg5j2WPT15JtGbfrKxjDxS5Ss65xWmabkAEhrpzi7Ge",
  "key16": "4f2zNCd5Y793AfHuRTGBRjUv32KaRi36mE1Ka3Tg8cbGmkumjBTTRk9YtBhaY5e2vS7dHvLGVpWay5SSRDdeikmw",
  "key17": "5v4JwkZGztv5pS2CwMdPc9AbKZZEe1qezFNBtBNGn1c96NmUHqL7XQbzDC61Nak9EnxxPNfexGee8HWJN3KdhBTj",
  "key18": "2VajCXPgeNX8UFPZEUDfZbGtfrEY5SemfzT6ypxYHAoNGGUTfAcFAyjChAGJ6T18UanvCDpXxBJpqmFRA81viGY5",
  "key19": "4WN2j2DhJNsAFtKEpnNA8kqzfXMJP2R3YEeEarJgKaoiqLUN4t9Uykb6p4Qkji6vJEoxgJDxZPDbmtM5qRsxrWWh",
  "key20": "LdPKNa9EegFuUmuWWSFBCXgYa2dDHYH6rqFnL5QeCcjAo1TcHeuuMEx258kGn8bsmqRk5FnfxCxBNJYaW7ewE2Z",
  "key21": "5RoFB7UAm6pUnouAT6tKWAr8agviTCE79WG7R19T4pZFtydF78GNkVLNST3MMzs6gaAyZ5Echo7saZaxwbkbUfvW",
  "key22": "2te2Cu9amU25NXytMSkHACrBmpgtmCorcbC1exSPNs91MzsjS7ieCrz3GTYnJmJKD36X1miDEp2K5D55pqeSo2Bu",
  "key23": "2RrJUds8k8ACfEqyuLDjJrXTCg1Kz3PyT4ZXWknx5RDicqUk1xmnu8jkuzhB21nEooSrPy3F9msE9jPUBZHFpW5r",
  "key24": "4H1aBmpA3zwC2j5CmXEAEFqD4iMvzczWkeEtegFeLmFhx1c3ucgWyR3CV67A13zuQ4YgQpLW8izAuVj3v5x76rKm",
  "key25": "2q1UeXXxZiZK6kgKmBjLqyhfdnyH8sRraMc1ZiU26sfefgb8nda8psDeV59Mk6DMtfenTqPeH5ujmxxTL1EFd9iZ",
  "key26": "3MBmi4Yq39gWXuWiWKjbMp3U2jF24akoucBuWGLPrWZVUqsE3RGsZ1dnSva4TRbszcbgLBm5Q9EVDsD2JpptpU1a",
  "key27": "5BWggvdZn7BWDR2exHTB3Qa1TUMceZVGdw6yudixdsks95gRfe1TRDZ4KyDhvZdy1hdPgKqFSgoXsJvRfJeNjHZt",
  "key28": "2EZZ2ptp1KNxm88Bp2uwYGTbVtDN9jdDH2LzD1egrE4TshrVYodsioQoAY9gD2ezrWaD1Q8kzyNL3RSDF8HEaJde",
  "key29": "yXVmSuZkb4QMpmRnpqLfwrA3ZyFP4cvS7KnEhPHbTFpgPnDSWLJLj5RA4Kqm76GStMQansWLxxJ4XqGfH8yrUWW",
  "key30": "24TA67sE6NDUenYz5rTeFwee5KBWkHdTmBE3fxMZLHaRR7jqNmHCJS3snedcCjU3ypThs1QxNRBA4kVM1h7xfDTN",
  "key31": "3TfjSdGP7da2GyyMDQHAj5ovUSQt8W13FSeLSEhqsxZqdChfTuMVDkBi66JaY4riKFJ5RjEd8e2xuqKe1hvSVTt9",
  "key32": "3bUtevXpXFhHwr5b3rNtoRAd49WfRCYJY6hQW4MJv9F3aFR3TqL6kQdLmhcfAjZxHJGwgKwmnisJqDvnKDctSC8b",
  "key33": "4WNYQnUmzw895QdTZDxA1mAGJwmqhUP3Bi8oPWj6ffodV23DH2yLAbv2bi2T3UZuzM2ZQ7wGoQw2wMJ3ajhHXWnX",
  "key34": "4VBocYkAQNej5Jow78Wkv4ewoejSybzZ1bpGszTm2oDuR2q4XDo4tyJGLxk2tuUyjGbW9EmH8QDzDZzoerc4zB5x",
  "key35": "3aNGPGoM4gfyCfL5vUTUB1N1o4BChmiA42cCfJtj9Ca8YgBWhPurmQPp7akk7bT4BbtTTxakBCKcSPznbJpXbXj3",
  "key36": "5aJCe8tPVdTttHjR9myscT5ae8JNLGmVQwZzhWC9owDG8NaMCgQXVDSHCrTFC4CZ3MTxC5xNBSUVn2bb1AQsWbcN",
  "key37": "55QHKfonndU37v8PXAzu25fakvuW8iABWgjy6AhQkZ6N87odKXU43pq15x8bv3hy7dSAFAoiG1fAeZmu6e3quQds",
  "key38": "2CECcqT3h4xC6ZqxrwAaRj3PYqKABopiqTJUz1kb1aAnPZL2MDiNViLPgqfaBZkNRH5bCytGNCRo8Ved4owDfc4m",
  "key39": "4M2zecwYmZhyZqzpToVGuVT1p1tQ7pFDccsnsoTzDW678bjDN5hpQXyn5vCtYikfw6aEw4mXTcLZcRSiUSHNYG3G",
  "key40": "5MMDDeD1hPww6DznpL9BjshfsmrekC5bW1H9rEyRKXqjy84vkoNja49Kxm2zyLj4ek57dZP9C9fZvx1UxZk4SXX5",
  "key41": "UQ4L3cy3k3B6YjXVEbw9JdT2ZrZVfheGTJc2qqKVdwy2StYU8oizkgtfhB3WZZLVV3vkmzZnpxXQ4e3crouEpC3",
  "key42": "51qHW94TAZ1bdiJyghnd5z6y9ZHrPKdyfvxG42yoCHRXBWK94MSYHgkDVRD6KSzYHuS7wPiX4g7SnSikkwMzN63T",
  "key43": "2KkYxY5mtJgF4qnzeymPpheMUPz6ttitHVhriJZdtWTTaYsbPntsGBc4WBCbjGTdvZDTY1pbrX8yVooJAmHxgeTb",
  "key44": "2tyKWD7uMjyTm9a6MzyxobWr1CARUykgbokqgfwQKSgJr8oDy3uyVy4XojbZnW8G46YvttYXHE7Gk1iXmUb4mD44",
  "key45": "5saPuPmUNtxMcqZJJAbZ9FyAtEzLDm6mtsgsfFXru7ptBDFLoFiWQWv7cYUqUUiFRR57EysPvgxLgAM3YK5PgoBL",
  "key46": "X4YQzXv7YtAfzUDd5WppiUNcstn1Jxar8ernYaBJj5i1gGN1BBHhBD56z2ksk7TgpMmugimrXMUZSAx2M8AM7Kj",
  "key47": "PwSvk839rBft8QY43ruFLhG2SKjRtwDoShPL4wFwkzL22dMva6qBKTx9gz4uBeieeMNNwsvFTWTFxbd32yYBnbs",
  "key48": "3FYVS6NVTgM1YY8GBUHDyXeefdT3yawiERS2GuB8KY9FcBwaAb37GEmaQdL84HEnzMW3SZAEn6n3vfWoK4qCDCcb"
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
