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
    "2kEmhuz7tzRbhAjkXAQyrEtTLabHced51bfTDAj38My8qfV3knbj9QDK7w8DkwcqYRZex2sBAyAdEb1742u7kBSc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xvBhHHoueCmwXh54Ta8KU9Rspd4SWUUKQgy51zMX6UCp1NCvM6vEL6ghuz6xioFX1hQcJz55upuZrzZiAgpbP9g",
  "key1": "29DKQbjbv348533WXPx2ceU4DVTWzQK1keiJ7oiQyP4tEGzzXdpuh3kJU7HEjmx8QPxF6DDGGxwq7YVqpcK9RMk4",
  "key2": "3mWC59EBfQPcvVEL3gvSfmJN8p54oF42NuT4FcB8dK4Caxzohe4FBbf6BRysof3paE7vVzZNVSoDsdiD27UvNCfC",
  "key3": "2rPQeHFhAG4v7mHdAAXCcXrumEcA95KfJsHpmetrBRvgPcMCv3oFhGmJihiyAfbasLp7AnWi4kSrbjzwjk637rZV",
  "key4": "Z12QEakfVcY7KXwdyuad846Hjtdcgx1JQwQpfZbF4HgDoddi9CERWE1pZ3Y13B4UHAEJSBRRCWdjQyrnLJM2Pz4",
  "key5": "4fSkfuqwSNKNtHHeQ9gk7Yo92ZSdhevuAcpsNyX4ZJMk8cqWdpNptzSfBzsTffeSQL8Cgq6Vr5PCk5Y9VR3Uq4Qt",
  "key6": "4jKJsoCwYJDE63gMfCSJc5sFWnUsiUAndGBAits86QF8cuHHMXCFQDuVL3jL7ADaFyAexQbZiiwbKMagv7xFCzdM",
  "key7": "2F4egFcfr4u6FScqaFwMtv3iGBpEmwRji3W3PVhpV5AkMdqPfH72eEtmMtu43yuudPouWERWNp1b8EhrjPtJmEsA",
  "key8": "4hyRU5fnwcMzT4KwL8XWZHQeF6FUSHANKkMCAEbaxYQbpveVpkJ1LujGAAacXTtqfZeZK3Q8wNx5bwavBnCXxsMt",
  "key9": "5oXdYpfgZpZb3FZvfXV1ND9SJSCJFHGhRqNxZczc6ZPdvpzzZJpbRMnJKPxT8u7LTcEvqTX1RcCGfd8bdnAaEENi",
  "key10": "3Eiwk7BHb9Fo5wSuFJD92A2roSQjMJ5Xs8dL2ZEVyXAUVpDeg6oupCBmJqBAZ6vWUVYR4huPDJ5eJ3YNsKymHmE8",
  "key11": "3ceJvavVQpd9UGszGxd4S2nvCkNqqdUTFMfQeu9aCqQv22Z4uYrseXyf9ASA11EuYYQrCgAAdMbAy66pxFYtZbyh",
  "key12": "3mkTt2Z1fBxy5Am49PrkUfnmS7bHrAtbzPuP4A9EU7HZHGqcqkyzyMa8nrrF8mNzTvTt9Tci73yhSix2dK9wPhjv",
  "key13": "gAThm2UEaapeaRtZ2tbRkXEfkXyasYhMkk2kTKNt7J6kLLczSaiWfwK2hS7Gm1baWxwVwmk7VyRNJo1NiYBckZj",
  "key14": "23DHqZmE42GSPNjD2x55eWen5nxD8vZDtpDfJtnzh17KGiVSYmvsBNiuX9rrET9rShctMtM8WkFM8npFkoH3ZsSd",
  "key15": "5PdjS9eGjCMmJvQBfiP1X9DBLdzMEBAb8uVputPTWwHfZXbZw9aKk73UyDE82whWf6YXKeweav5PKdE9P115aLXN",
  "key16": "5i3LPLNJHNduWRwLFCw9AcZDgZCd2qjhZ2MQvTn5C9VYyqi3ijavw3BmFpXhaudR9FYDZojbg4Y9kaz8E4Zc2H4K",
  "key17": "5CPRmWQBcTJGky3gmq4Zw4LmTGXB2THuZvq5KHy7j7nihbcBmQWfhi6TqPnhEJqKdxUZQY2xDgvqqhVibJJZmJJA",
  "key18": "3bEbGdZqiWb8xRy2AvQjNkDFGD5eNK1JrynpDqg6XdVCxwyfsvyZ3ZHjHAjqZKuv7yZGKs1mptTyPGYVHrGMBS7s",
  "key19": "4UHnV9ZwqaZLL3x3awv4gUqwE17g3N5boPxKKRQWaKGAEytBWFZFV8RKuRc72MxnQ94SmhXrvi8gXawPd859LBEj",
  "key20": "5JSkq8YBBbPpBJge5YtrT7pBv3sewFmc9BH8Gys75nAfgSqPtTQoRYPK5GsS7pWsx1jK98zSHV4oTMHSTsFzRGwZ",
  "key21": "3784dqySWRiCTZC58TupY8Sfr4yi9oPdusoZX55p5u68dPGDZSDqHNtvwWaBAK2ZGLN3F8aKfA46SLfVpCcmdfFR",
  "key22": "3kYG3fE3Gyd26JZhagSwuhVnp9nus1krst6ttkTVCzQ5y7YA6ZYxQ98zRparLyS7R579g34ptTxYppeGS6UebScu",
  "key23": "63bjUHch5g84rz2TvzrCtF2B1c1SNEW4EFgHvWUqGJgW2hrCza5RjYE9ajBS8uXyvJVULaAfqhvZVDUbk3BzvjVq",
  "key24": "2TKoRdu6TdnyeAcebga2hVSjwHMLiLsggs9bsjsUANrgEA88Kro98QKyS8KahgRrLnMwKpkr43u5g1nq4HvyyCXu",
  "key25": "5BkXu3TLMNB887VFsZTb3vMd1LFzygEpNH9ZbPqPvdxUE58M8txhdEUU2TBqWgvZQSEaxdzCZpi6CruDjCSDkbsy",
  "key26": "ioEj2DuWWWFsJoz55XaTxSeU1LDbGsf45YrbxX2Ls11q3nZqKw7fxAeQA5rJEPqAnEGVHQwjZJo3wLTrzb6bjG3",
  "key27": "5uLVUkzWp1fYyP5bUBmpBJjkghfucSncw2t21y3okwNodE2gYNoz7s73aoYibvpbDmC2DMVnPfBvVN97sdaoCiY4",
  "key28": "4SBnm412uEMCG8b6XnsNFotpQ4FJtVh3X7r2HBG7znAA8xhuqKJpueQaWsu4fEJkRZSSrHzTV2ZMboUjZFopsjyn",
  "key29": "4Aso2eRET5HCb2Cz2eQaKcYEceARoDTViiCTnDcevduawaLmVfjukDStmNeNR7Q2mWghfcSQ3ib1PGsyMmvea4HQ",
  "key30": "WjvSa8drefXMzXko18t1NHtWTtK75Ksm1oinvhzqKYajdnMuDEDXfYEns1uyXSLLdbD1My3HCpHsJcQtE9GzsQr",
  "key31": "3oSY1oRk8bxyyv8jHq91UGbNaQjAxYrgDJHkdcnN2BSr9mh5SwPWvcAco4hzmgukegbcuRpp3bZYvnc3bP4GasQ1",
  "key32": "2i6kk1TMyS58Eq5ModM4tL6nfaZuKBEzeauSz7VdA9RgTaHQfH33DgdPhXpS6uabnTCed9e9zu3zzsaWTiy2ymxP",
  "key33": "4mfqDhwKL5UEfdsFoDgpmnF18V2mKvjkwao4SeTwYAK5zjzKCuYFoy61UAPYhqTcFLx8Yn8nLNYzQD29yyrJGXYD",
  "key34": "JjfSUgQo3dkyreMG2ozf6YerDywK7fC5ipnqQ1AUGQAEe5HErmGiMoQUBX1z8EERHWF5mDXWPthkhCsGZyQWWpq",
  "key35": "4HaqDQGGVXzyLNQS8R6gD11V16BTSERsbGJWH4fzja8SjtumrV4zuqPWCDGWLJXXFhp68SYR9BZgpjm8949pVQV6",
  "key36": "3WHiKLSseAQXaZcohv7RULmAVRPgCiuhpMf439MdmaDLMHGThUTmxc7rFdqNivJtwTkZ6BuYjAa1Z8xBxqsE2AL3",
  "key37": "3BZ42zuV4VTvxaYPStzUkcdRRm8CGGhUuHLVarewkAsf7BzZJeZ1WbEWm51h3Eiknh1BYFEer6xNxJ5G4jqMuLzK",
  "key38": "2FjCizA6iVAdBVKoDjqRdHmLdPotsdebGxoZxgUchxkPdKyeSgUWBombRUBTpXgsB1cujH1w86tTPoLSKE4Qq7v7",
  "key39": "2K3aaNzLYGREsznciC8xaCFvw4UiSmaxpK4hbasRdh3beGentG4L2sj1ziswov6xfuHv4s2Pch7uX4TLXrkAi3Tx",
  "key40": "2B577aaiHuHrDfjYFYzvTVfLXsxd1aFphRZtv3RCgbBmFmEKsdiZv9jRXgGQRhfPN13saCYrqHfCAfgZePVYZjNb",
  "key41": "5MjPeQ4nXp7kCjMh1KXgtiFwDjzTwMmtyxa1jUGcG62JVe4WV9WbeUmzxLaRpy8Av57aVJeHCfVEdd9J6wvUZyHC",
  "key42": "2zmkMyw2XuawaH8kwGRsrcoKb1wzLNmsgUPkFenhdtNusx4ZESb6EnQx9qXer5GfHqobWcYUnn5GFaRmqhb7RVTE",
  "key43": "s42P2zhcVucwqrKEtDrAQLpara1V6krgG8gWXLG8zmLS6DM4U71GptfSoQ7UZKmNVue33ZnuooCQ8KdhHHGULn6",
  "key44": "o4cHoWWT1Fk3V5XQ6KDeCRDYYHQFWt3yMmzR2fHkrK5gVWKbsS97MDavJeczZRzc3PfMS3psQY3FsJDNcn5cARM",
  "key45": "4Jneg7fyXG5zJA7K2HrXrLDMzEZp3uy8PUr5wPdTypws3BL1P4JSX5wo5kixptLF1LNkKfGH6QmvScPyye94cbwg"
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
