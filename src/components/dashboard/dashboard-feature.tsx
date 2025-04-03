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
    "4CggHJy59ArRUmK3Fytkj2r9ubYeTMiEoC8YEn34dpkecPgDwvZAyLmE46SAq66cZqoGbGCCttxwsnBuNaCgDvLx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AfWU62io8AVz7NYxsveWKKk7jxn1oTF5kZUyzGsYhKRW8dXkMEgd5yicsSGhfd3U93SoyqVgAtfYEuZfrsbgnVV",
  "key1": "2duCpnYJoqop2VEKR9uJ4SyVg1jtUS5e4L8s1cXJarwyDhq5yM24CJWUgQhPj7sxjcQxUJvxbc3WqRUdMpeggm1q",
  "key2": "4UVzHf9jKhgHU19ncBqXcgvDnRzXixPk7kHbH7xZc58gYTgQxjZ17sez1oZfsvuU7j3czLyKPYVhFEhduEAtm4ki",
  "key3": "35GJ6fA15neNQ7hsrJzRGYquUJeYHtcCntWmYkJuXcAscJxWtmJH4NEwU5sgTnqKKxj8xfa1n9oHnL7JggggTrYT",
  "key4": "51qoQ5DEyGR58h8h1E8QZmvZDuQXVvnTxrepex5oXshDAB4gHWgYk4UduhkAk7nsFZi6FvKzm2tyS7zsFNw1gryn",
  "key5": "2GNSRaRyZ6Lxrv2GVZB7uksdiHZmjB5C52Wy89MCVtRMKR7uA4ZGuz3dBgGWaX1AszUHTc72rNVSo8RUSwdu2nub",
  "key6": "53eggsZXXwKoCSN1Rqj7i8e1rYemNcZj3hWFjNWwdRf2ZCEGcxkM6iTmwTdUbxuYxiZiyDgFm99mhEw7gMSv3dhZ",
  "key7": "5HZVDqnDBhNjepCbUGBPCiCphvdkm15CuDTXGMmA63q8LVkoy9io3hXvdxL2CjfNxHWYN6XaepwS2vLyHeujLA2j",
  "key8": "5c9xbG1tbgnPXik5NJjQ5acCYTN1FjKJXmHeLTzKepwL5MfLjanzi6j7NTUrSy9BEZjHpSe5Zt2w4UYHxtVmtyrK",
  "key9": "5yX9uuG2FY82jLSvdYSNXGaT9YWcgHE3cWU68PqoiiayDfH3MTgpgafkZ5KaCCVsMPsnx5c5MBmTDAAvoLgzer3q",
  "key10": "BDzPi8oZpQWDSufq3fVE2RtZvFNFLCuHbG8sjdzPo9iwvToyw5SrybkjxktNKCyq1U6PM8ifThKn2AuRfgeCFQk",
  "key11": "5UYfMsyG9HZGZdGPdSN2NTQNU6uTiQgEr4vTi4kBcygJjWEmD1CoLvngPRbPxpMvLG9vT5rJdyFFTg88BcZy7kTf",
  "key12": "2uxiD9X1Joti6SyLWLpp7u1qTdAfkJjHyB2oPmq8FiSxPv9AaEqxYb7A6FuCSHp8ZzZ4uoaTdqUKPfoET3tJVRGT",
  "key13": "5Bs795s9G9EiVKJBkiyhs2yF3CFNdiZ1rRigGy5tzzANf4AB9mR6UNMz3siX5noSSMUFrcHVGVJVe2YKP77onSxV",
  "key14": "3z7RjpKHhGSXBQ4ANb8qRv31wCzegssA1Ahg3yrXRUkGG6i424rGazMKafSTUeFBtdGi7RVRt9xBgikyQZLJKgLM",
  "key15": "UoZbrBMGisgKgQC32gwafp42gaFK5RxoasancyZ2t2TXWLVtBnoTK8zUwMJiBnm1o7dhexVpi54dZFiRWoYYQE9",
  "key16": "NiHj1pMkhkfSJmKbYuRmmCNuuKVuEsauqeNs1Pp5L9CNxoSChGHTwrW5N7GQ3Noq3R3ANBCriQC17yTTxH1ZzZA",
  "key17": "6gb4rG2NrDNRkiG4giENKga693N1xCZSB22tkPRmztYnsvg25fRe9PSP53uFv74rJYadiFHcA5dwbhUoKoyQXh7",
  "key18": "2SyNVAxHCT58TUaDiKHY3vBTyfmNDRMDcyHFgGEyQnxNJCBjA5gyjZnxCwr3URnCS8pKD63mQWBZXEDrz5Y658kS",
  "key19": "4eaia6SuVxKu5Bevgt1QuGRAjvCyTE9uvvSbCypLhDZVTVPW2uYhFkuJ67k6xK6Tf6BQyc2FLv3hAQMxLy96BLLe",
  "key20": "3LzDoJLMg81SwEj5mmyepFaY4Gqezqj57LxuncgLcT3Zto5hJ8ZyU2x8RUfyiboxS7zcDZ5i1smzsCWXcDe335Xp",
  "key21": "3aXBtt7oKg1Aih8rhpB9gMWpMaiNs5kL9qhNYP95FzK9A4caU1WvpXCAcYSZdFxEbWGYiZCzRk3SuMeUHrmB3XVt",
  "key22": "KyFg5t3EfWT4dhUEnaUwNwCy3tcg8KH6dcuXK7XyfHMwEBfCBUzwnVpADAP5b8iijRnaq77hzSgynhKHDs6P8ot",
  "key23": "4w1NDEb3QJeHeRFXAGpvebqpzXsWRhzsmHS5Dtz4k3ZGawMwUJ2A3ysweq6VPcmMHRXLr492nqARiNUjcungxpKN",
  "key24": "bvp7N7bq6ryopGr1Pvwy8etfqEjcJkpuTPbTidiNFjrdE56vYeFEtwRzjBrSsKNLFedZWYdjduMP7ywXgEewWCA",
  "key25": "3nxNJ1LvrUcRTbX5y2VxVErGERaE1EiKLSyhcQtejMxJjd32F53YT3coh1jQysir5mVNK8oRwAAoV6bEW4Kypyc",
  "key26": "2LpvtjRNCsp6wHAsRDDerH4uRDpAbQ5B1xXiEmRkVzSPF9GT4R3H8m3m3QRcaCTCk6V3P9xH9gNevgyNJMKDt9NG",
  "key27": "4tJN2HEthJWgN5QCY2rEsa5XZQkp4XSN1uZv9bdcpT8GuVWqV5YHjrTKc3w7H88w9PiirYqDNwCwNqYv296ht2TX",
  "key28": "62r8NB5WGnipMkQrezb5HbGB5hB2Hy3or5x15XkWr3PAukSKB3BvGYRA8py5QMReVubgqVZKSDaNvsZQNypH8Pkn",
  "key29": "3Bn1UNDGLyCD5mmVD8ATBFZWP6J84UjHioEKMCTJDZ2Km1YTHAT2AwCD29RWiFYwSY4BYR1VyVKYhebU886gfAmw",
  "key30": "5kUPDDrZ9DXaU4VBDrFo9fzAxFAcENQQEtQrjDGJRCWoVganeV5ZgD7YjxfoxTMnfHxTu4poJwE3zx5S6U6ohU5G",
  "key31": "2NcKyFGVevYwpMPmV6aJBFNrgpNzVAHHzHFEMDC43awwKSddXfA2152mNgcpNhY1CSj1wLx9MjCbXRHyPhq19niK",
  "key32": "26j8rUGPZa3gNsxRvxp5QP7deqtBH49A4xexyFzT1Wxm2FZ9XtbpGei9CkkDNHAUyd69MCBkMpxbhu7ovypKspPF",
  "key33": "vV2966RuA1w9wDLmKoHpJMy42TYRBSSfysxvdUsFTHjh4Xt1mSHUNkPEvRwnMnekGbsJfHrdTqbcZUPhqYZGKFx",
  "key34": "LYNuqTrFiuRUn56iatbw1JuLwHXu9GAkg9QyJQRCkKw7tELpb53CToMsUSBr8L8dWPtWJ41LaUN4cG6YB87pvj3",
  "key35": "KM8XNujs1WM3yoWo9RhY3HxTmnKh14HBhf873w7ri85D1edCNqQe4rGUf1aX88MDzPib6TJHJv9nJcHR9npLXSZ",
  "key36": "4YhmyCteK3jdThTSGJwEQtAZqTch5BAAKyU9uKZwNYRNqmdQJDBUboKpZBE7VXsg5gEz6UJ48UXchxvUPU3oEwpe",
  "key37": "37uSYnBbKZU9VYR6U48N3YmWbeuB84pecjeGoqZHi3oYNV94xjhhJ3kGtP2pM1KxJRfGsPurDWJwPV2DyA8Wd1ct",
  "key38": "353f8VgJwEaUqmoWQTUVCxQiwTQ7mwzmgN2sKn31JN1V8Lymkr45AcRaXbFCF4v8HgKEhaN6hQg5has7ZrfKiD7s",
  "key39": "4kfJzDKyHuicj9pLtveqaqKgXcYSCVACniUza2dec7cSKaKMKAqNLnQx3Tky4QEYDg2Y8EUJbb7GJcN4JMFQX3ds",
  "key40": "5SyE1rgosUYh5orqbQ52ibDo2EZYKhsZiKP3SZmT8RnjtjqfV2rEVK1bFH4v3nPgquLwGbMUn1dSnEeqBZrccwVH",
  "key41": "24BBBsG6YXeopucDyFH6JZSLF2yoGhZ1fp647bM8EYx9HHxxUEf48AsuPSQdwfdvMi1b5MrCENhk8NbkRR3RNwCv",
  "key42": "2zu6LktgCjjJjUrjUs8m2hsDSGrJEbEWyK746tFf193pXgsscvHnwyQbQffKtc7LbhNsMbL8a9Bbk9nyEBKvAyEp",
  "key43": "3VAdxQum8iRwuA4coX5o4bbcSoD98fiFYcKmweimisqC2a9PrkGoNt9RdRetatJTUnvgZncCn9thBzkBDSez28MH",
  "key44": "LAc8FnuevVaQRnYad5UuCzhNPaG1D3WZYuyndreRREFVdPRGRHoHBKwXv26ZHfoLGu1AvVH5ZDCweoXmgFhyVpJ",
  "key45": "3uzwr5pWwF8qxhfpvksCd2pDpj85L5zPAhr3JdQDk8aEYpd3MmwZyjNs2hupeWcYRotdPrpLL4jGb5DVKVhs1TPF",
  "key46": "5bnJEaBpEGCU191ibJz95NWXDTJjjxPMfcGvqmLYwy8r6YaaMRVN78zyaFwDvd2LoWVpPJvP2kshf2sDHBrudS3p",
  "key47": "3LYC8T6AS4RncnDjr3p9TL7J7uUTGCFWmeSdRHnVaAawYDqeQLFnndEnnQhPvd84Dy7GyHpFfuquyQQ7xLvZztgQ",
  "key48": "3enoE4JhMQSthE9qYqujE7Rdf8LrPwA41BmmWmkisW38aoqNMVXJmxKViTortwLNhv4ynb5yyqoTku9Aqw9Zahcr",
  "key49": "2FfNi55ucahbZJa3FZBxkDvfGivUSnCpQwemgBNnxpWeqpKNoXHSKXb5u3PhWW7MXdQXaUXE5LKjkfBpgWyaw2j3"
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
