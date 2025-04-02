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
    "5f11TeXa1DoZpr9uuFAq1gHU4ZSEu3aFFv9BrM9K5CAhURFFXYKFzwz2Wghc9FSv4MADaL3769m9Ay7wF4C6vXyE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TDAWYSTeDNiFYDRi3AkAGKUpMVHXekvegFVqBZoY1UHiKfGRyXZJWSeNZB1Dzw17SCXFGiwDaw1aQc2aTrStcvq",
  "key1": "4rATmg1YtcaV9BDqMo393gVe4JobyyWKemxvToW571QBMcXSgg8y9EuvfYCLGMvtqfMXzwVg4tAJXe3CB1ynEbt6",
  "key2": "1EN1JxaWpVJt9M5nv2XU7ZiS4CWpRXUwmnR9wZDDfJxmQ9sRLN5uhGbQN2tgJoLYhEoTQi24ey2S5xfEXSTga4c",
  "key3": "7xY8wFvTZdSjmkQ8awWUaMxNDg2zoP63pFAbdd2WAppyrD19cwGqdwpixdWDiWW1TLxYxCtfT6515FCoisvjNjs",
  "key4": "LJAgm5YfHA5JjfKz7ah6ivfWPdFkWZ75NYq7ZbDsqiUJtysXHag5qEFMPWYjQr4uno8YBgMVFJSzDBwyGbSbJR4",
  "key5": "3drJYzVGzip4NpZJGozYNNfzs5A1MfyVdQm9MXHJu9FBiPdeS7wjg384ERdt4E2doSd3B7gffbe4N4ijcVWEUuwm",
  "key6": "hmBtqvHCPm1cvbJPz7L4d73g2wyJ2xSa8cdkojBtuC88tKLT1GgehddUBwQu4XrKJVxHt14TCDQqsDrVsxE3GNj",
  "key7": "3DsZAguJWJN5GFBNdNxqaV9nsdDgZK3rRN7aYTwGbC5D6zT59hwod5eediZSbkY7nYBjCYWs4B9mjSmN5Lz75ub4",
  "key8": "3rhtVY3kN3pqatQovBfvPtKG4inzzxjKNGRjsSMHAVowe9S7hC9GZcTAJ8FwwWrgszrXkAS9PLT1PLCL2SyZE1yG",
  "key9": "44AR145FRyHYzo5Yw39U3aagGYnZyaFpxPCwTa8Q7WZsN2BwFGUGYvJbKBLHC3YuiKou7CwBEksjR1HA1z4qxgLR",
  "key10": "LruxDwt61XPHLfWHC8Qv9xQcWE2rBwqU2pUB8rKTE2L9uk4ksMt2CmzctZyzuz8i7H3pLUfs8bCQ45Hr2nJ3cnS",
  "key11": "3JZY6KEo1h6oTsokj2VeoLpBhpxnvJ8LPwXoFRo5n63KvTq8g6zxoa2ytaEdZf2uUAyCZknhoF2KrLHLLVSSzp72",
  "key12": "2YrkEvaCPCeVvNYURjMX4K59fRpzSdGFLDzdnCfGTapSX7NjW5v2nZPT5PSiuth1Cx34sxSGjo6WUjhaGjVD3m7p",
  "key13": "2WRtXTUVhP2feLbDdQzQzZtRr9pCFeQg9qqG4jouL1Mf5vUKiVMPwJSsBeBQs1EF1eNBXpXJdrhgrpmuQVfKh2q8",
  "key14": "2eQugSSXJJBQDxsEjrR57NxrA7ifAvRuBPn6BFQJL6hopoMHxRw6wGm7h65d8LkBEEZSbtaQfmYywFzLvwoKFShs",
  "key15": "5uDR2EjT9CBw7vvEuoRJfHU9KHGmZkY1che3hiq29rX5oTioc3gMdx6tZbXN1zTmbKR55uHvVBAQbSQVfuuPrpy1",
  "key16": "mmdCAnia8nMtjLL4jnadrhmCaZW3UJPXzwaSwjp81ReXCNpHuFsgFULxzjVnJTuEACrLxDJHPLNEDpwc1BDojSu",
  "key17": "KL5FQSdaRZCBbxRqo7ntkjT3MemudfFcQqXjsBB5QRU92ZrdpP1bnzi4Ar4uL412vHBHEnSdQQZMVr3EwpGgG4o",
  "key18": "5tJcyaQDiMvLcSTepspYg6JdmVehVJAX9BDYMVUbPt51u21PVzWNPZGmqPeR8KCt3HL52nFyWABc8K24ZBqX1zku",
  "key19": "4EFfoKgFFAkz3HS7tLyn5uwAv5pgqBR1b9M4aTQL3xNiGyP6Lq3wc2876sShfJeRWEHRUBwoaW3nALNSiXppQa9u",
  "key20": "38LRtspaLjKdMD5HNwJFeRYQ4dgUaZf3mF1uJAtk9MSLe8MUwNyBhcDCURPGiKPjgmRW6vcEacZV84jGvEeJWYdh",
  "key21": "2GhCs5yPHGBHYe2N7L8jhkF5RMi1aChZAR1iASWB6vjKrrD3LKiGd34yicc5uk8nSwF1Rdr3uYDxfhWC9jbtMMh6",
  "key22": "4Pi799NsGisvWmSdd3Dtbao63UPk1hnvWBZjAPBmiwi84cjMjZwEyxGxQXRq2TznY2xSDHuVG5adm72zvJ5Ln3jp",
  "key23": "4irxE4YEL31gUgvDCdvgtELYUggTiRS9wm6pgi27aoHLJLegRv7BDJMDJq95whUqYT7p2f4Xqaj8F7w5AtMgducP",
  "key24": "58dPSyiUY8SXnhaPMzKj5G33PjQz9LX1cutcxqGF2jjCjjbunCmqYAdFwATkUxUeZibeeHJEv2EiqsYqF67BtXt2",
  "key25": "3Cm9QVt1puUsp7fCd9VQTbbKgrBcMUqA76qNVijaFVQUHcxzS3XRz8z3de21RNyCAvDn6LsNLph3uxD9kpRXWRUt",
  "key26": "4A8jfk51hdhzktRfN3p9hGcQxVp8rjWMKWVwQVSUexdR3oMLF7kyUAD7e2fWmrgmFvmxJSwubCyduFXxw9mEPnWf",
  "key27": "5N2ntjPRGJZa6gRUvHKXwsdB5LXZgyXAbdV3U889oegTfuSBzMAHcUyMqHq3y4wvA9ZV1LEefVMMGB7SvNYknUjF",
  "key28": "5G9EAvWx1d55QVCUxsXGX68yWUxJjB5JHuBTDXpwBMzBz6T6TCJcFA6LDUfhpJZrNYnDDdXDN3vPapDCF9Mg5eLp",
  "key29": "5bQnRh3Saf87nE7uPJzpdasMEXv6xGEuVuCDAo8Y9pBA5pceUQf3VAB9qK2YmBfD3NZE84PBpQgrb1TnQC8ZX1ro",
  "key30": "46D7uEeSPpPom2Gu7CCU2BiKdRoQDYB1fUEPF48a1bpj5uVi62x7rZvSyvCx397BWCLWhacAJHjmT2uYftDRt9zK",
  "key31": "3aE8XL5NEvpLWUuvDgrKwT13W8c3hagsyWFujCN3oKwGuUULnVpZrdwqp177r8HYymAeNedRHqBz5CpCwCrSmQHG",
  "key32": "2RzcyYhCEVMzKDdxdVTi8HFgNaqEYVbaHPFoWS19Uf23piZiKMqucrxEb2sruxsBShUrmb9LgNGfiPxvnDd8z7Uw",
  "key33": "wtykNPAQqueEZsAgnDCvrw4gERw3QigN3vmB35HxxqWGAwdTgVdobq2rWL7tghEfTQm6F87wJF2esTFGzHp8mJf",
  "key34": "4F5xrN8HipqaiD2ErfwYHJVBvuoSDJPkq1bXumDuTnagRKtAWsABX41HtmmtUTL7vL2ZLKQseYvNmYj9e8Dr7NQs",
  "key35": "5G55efyXxhWXGEpcAFx6BgEDgLiybvtnqTcwPWhVfK44oJNeXU1UouENV2fGeNfvGJFNcU4uHP51jYUtW4L3XizG",
  "key36": "3cSbDjCR4H2cgHv9iaqRmkZ35Da3zKskrCdMYha14duUqMJ7cNLM6bhxu3wdHJWR7svkiAUjEhuLm2yFG5816eFm",
  "key37": "4ieAa2mu8zQqby31mHfTHQGGQtcwcXoRygJw2GZDRwRDeYr4yn2nMY9QLj642iEZGoVd16uj19Hp5kM47PLq2kq9",
  "key38": "5S5Zy7Kxj5kwuC6q7pZwjMiiZXhpR1dJ2jtuJmkesDedkqDzCiCBmPpreLZpzpzk4MqK4c9DhUPnrwWKyDhcinkW"
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
