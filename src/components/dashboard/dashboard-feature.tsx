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
    "4zcqgty8qcEPw1W4o2HdeK7n2Vujov1FH9HMVMLHkJhB4pVfPre8o9GB59w95hCqtBQihtaPztr9tSB7FeMZVxpk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "642ajfgg5LrPgTU1ePscykhzvBKPuS5qucVDQ2RqNxQH8XN7zs5VpAMqTty4V9EU4VZDB7MHRUXvFv3orA29kvNB",
  "key1": "4D6Z7m3rwMofiBXcgfus3JD8zoCH4NFfS1riSnqxHSZGPEw9JrUTSjSzkKZ67zcGP5nhGENYErdxQiRkFfgDiodD",
  "key2": "3eczuyQYHUMiuVqbUVKA7612uSYgy2M9FZuaRvmzXJn6QcwR52E6tDZixQFBRt6kDzYfovrAdR36z1EM9XhBLESt",
  "key3": "ox4yC3WsjYxynzBmuMMeht1zmfwkBQk1dzbKqSVMWWQJAhLuoCg3a6meGfnTFQn268Y38DWcsz4B6RrtNXvNQu9",
  "key4": "8jufwas8hUcoyYCFNboKtuN46LvrifgrjtHK3RXVDqQY23dKG8DRzmdgHBd4Qc74etJ878jFrYoDdcYXnRJSF4g",
  "key5": "5WsH91oweqkhJq4o5dBf9toGbAGEz9b18Yo8M5ZQd2WxMEiAaD7UCPJysRtpTCxiitS937bqaGm8Cvb216rceGvR",
  "key6": "2ZUVU2bCNu3PwCsQxXxqEAndizdfdEHE9bPo1EbstTqLJSgEhVPTm83i36cprcsQDa8Sk5DdB9jhdGSzyqimC1hY",
  "key7": "616Coyr8EpwJWmdrHLRZx9jQczQyKPcCST4pD6GUdzxczrCyBzsBpGzGUV3EpjYyj7Rbtfb19Ued4ZMe27bEByHL",
  "key8": "f8qWmYyvi52cutnpwUBvcCXBnDkEM9E3zaQuHCNnCPhKXstEwfxMG5UE3c1bafsYSq9avqm3nUn5XvzEFk87CAq",
  "key9": "5K2JgzpsgH9hL1qTK9zFJnmfVHiAXWucaSf116Ly7Z2HGvByBkpxBMFKCTgNe3Tfk7i9umx95RCMZkUvZK2uWpum",
  "key10": "PDzyv9cjW5vy52knQb98hTi8Cnjp5hGLGi3eL4UWRdVqYqSA5WPunuddLjDZJ8gDuGZsfYPrcbqWgTQiaDzEtJg",
  "key11": "47AxPLXZXtfW6txgdrbjZpRojUVNGEguKXDsfCT6DuLaFzzdihDympu5uzAhcp8no5BjxjqaVp9JydMuSPoUVEUC",
  "key12": "4uXS6aguAmnuDqnHqQFMPuBRzmScNui7ysziFcxP72csNw34RwC6mcUnRUHr3KBH51uARyb1NaoeH254xaNn6h3C",
  "key13": "3cgmyrUdFBK2zX1iQf9NNx8NLnTDA8HkgZDqRVrNwiJLPgcdPDxPPdoektrsVWYaWo93RUURRkn5i6Yg4yAB8e7X",
  "key14": "4TCwNyGTXDVDZ2AN5shxB1zFgta7ZChRwRrZ3B7JDTbm9BbsZhwDXEHBQ4S9tNEn9U13REwqyWX966QgoGFqiunF",
  "key15": "3Df71GZHjFiqTT7BqqSuc5pXZZbdxxdqQV1u7G5W6dRRrDX5av8YqXXZaQsFcWB4LXHdBVGjMycvog6xF5fSBjHo",
  "key16": "2iZx7KjGWxmzvN5RS68wXYbotqgZ5oVKDQNnWe3fYL1yEakGvRWZVzLMvA5WLX6VDkSKW4eCTVQHVcyMHFezuHQJ",
  "key17": "61NWhgnLjQMGdETSKMHY4b17623gwBMoXY96zFzqFknAZpgXp2jiDoEvyNaHfxkyoqb1HbMcKRWbbipMBychVEzx",
  "key18": "wfQpwztDjyAPzowchwG6LiJCaaccwoAiuU4e3GpEeRU2RVhe4XbqGAAi4itLzo93b5KYHkkySFKksyqnab6v5dx",
  "key19": "2bn2FoUVUhcuYdNWF3G5hpoeR66hfGEoXmny76934aGMWivwZTi2tW5fV3p8c5GFQjoYr9rEJRe9GpjZVM9uiNVB",
  "key20": "3hYLF4ni8EoHuV9HnhPaDHNYuoYvVoAyuXnj7Xp6jTYoBcgEXLoxLDHKG17Wx8adeMGKzC7f1Y8MwfjZJk9EdJky",
  "key21": "2tw8yxHziQ9YmvASm9GDDGM72LSr41t8xRJ8zA5PGs5mGGtxkfiZPVFCikjRt3Hfr8MAqTiwU7sFfMXJksmYAowJ",
  "key22": "5UMtmPdd3gzkoiebfqLUyyWhnaww1NJyDSPtiynrvLzL5biFAEJ9qWFsxk9sXEJPLNKUeHbPSXveZF63WHAPLgGN",
  "key23": "UknxM17QsUk2qtxJYcyZDbrYQwEtwdet1mdDymXdjwUz3bECsCApg9rZo6smazLxkCVW2kfdeqUS7qdr4Rxfi2Y",
  "key24": "9LQxyiGbFfJ52fD5RrfP1zVK9tP9R4Zt7waGPX7mZuyVTLRmM2qPJ6NJLK1KJaKc5dbXPM2xAAde81hbfuwKDzv",
  "key25": "4tHtSNTQnmUCgbW45UmuW8YKGJgyGibpVCSj6fcx5nbayrXHDvZKwQMH2hkLzW9AeuvGovjHsZsNLrPr63Aqhy2N",
  "key26": "5Ny9uUk7CyFGN7igySuTuGqm5uzoEHmwzBQhyzLrQzFfTTGoc6Fvd7NptLJjikrax92h6beHGz3kzCzNpK2Magxa",
  "key27": "3BpgZE56BZvxeKbRHt4gCqY9V7hSYynoadDJrsV2fBwsKyzkBZyHujrBPejuZrvLeoJwtGxeiCvNToqVwoR3fmk6",
  "key28": "5fqthChgfVxw9k3puUibc4gTUuhDVNGFWJ1DPZxoDsJZfxg7mne2GhdmL7ZsW83ZitmCvm8xsVJDaNdz8VJWPycY",
  "key29": "5d8ckyXuDqTjN4caN7dUmXJdwMxKaH7iH9QPaFbnEbSsaPcG5C64pSb8CJCbVDNH5SW4k54zpWh36MERzarbmpJ9",
  "key30": "39yt8BEeVoygoDsAfdktZkg6UCaoWq8CL3pmAmJvxSVngxsWKE5XMGes4q6CFe6xu5mnYBY2h2gPn726ZnZtHBu9",
  "key31": "51soo7cAtM6BcEFaaNywD532d7FmTR86WbzKrTwcYHbhYJyYnKA1K4MR98V9MtzffnJX2wTeXRDeH2Frrhe3Xx2z",
  "key32": "2LjvpvMyV4fvn4rdCUSj4PLtf2T8y1jzWzpYDbtpcaLraV769hvRmeFZDMppyJRYN7uYZ7Vpv658rTj3Tjcp1C11"
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
