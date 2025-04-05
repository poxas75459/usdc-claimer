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
    "cb5XmjBqBez8HTNocQw1QQcY5KSsZJbfV9uBqYajRU1A9UbqSFcngVMLhXNerx25ZeqvPR3EDQ29StYJbLB38YH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Pdfpax7v5jNfzkivD9p6Q9s6rEQ4JeX5GAV9FnF5fhRensSB2f3ADqXYh9ZWtYEhQ4pqqwZjyMgHfi2g4JTuXZb",
  "key1": "qaEqWPXFSNxUgWRB39EwNanQKdYF842nbTmaKHBE2N8QYtoSUZMoVv93ZKGwxUwGetWLAytXGaGVVBMub3Jjnsh",
  "key2": "5V5xnJJQYdgKUjV8AMZSt2USNPMDtDdgeQxniPMRCjb86UHGAP16T2i1V4rUkRBW9CXyNPDQaXAbDiBPZ5BmCza9",
  "key3": "4zC86ftcHXeWMu1ATdD1cgM4TsxrWsd3SrxjsNUMu9McdqgbPwwqbH1JTB7KEj9guoMay4pBGuV9HN3FXqETNSZX",
  "key4": "4RkYB9zFwT4oUk3DsH2SABoQ6VPwWY6tGZdwMQRRy6CV6wNteduh6nCVuuf1qP2AwQgcYptb3exV7hEdGfYjfsL1",
  "key5": "3gHxyqMxPYKFh3Hh5VjMrCGfRTAJsvzSeB8MdBYuQJdLk3BavjkzqM6r9CeyYthFYTaw1HNXJ7HwpuqqTVkdyrhg",
  "key6": "2i1fZZCRGaBESuaMvJymo3Q4jUX4Cvz8ndXLzv76g4sQa8V3JbH2ryizXcL6GcL4BAyD5rf2AMrAMQ994WM44nfS",
  "key7": "4nxLb3kTA2fKuSxBQiS6jsgSK1AFNcgS3fxKo23DiUAuTU9u6TKNdyYRNe3XqbDd7HY8ivAmwz4FEP9DrwPxigRL",
  "key8": "47g9EQUFuMHG66fNMPSHAEHivpXjBZ8fw44WTEr69WVm3inJGn9Yu1Yrh3rCgycfojTwCWtENQ4rDhhjwSkFb6ko",
  "key9": "5oWp2M2gWDUfb1X8VnGNNAqD5zrkBybusjvF7HBhEkueGrGYt5JvAbHt5egLipe6Mrkj4SRu57yBvENhr47BuS2R",
  "key10": "51YAv412Xrger7KmgpfWyeFYsZfvqGdZDpzaVUPgvsA9tdSBtoMveHCQPgQ9iaUG4eAw9FBKbcng4XCXc8iB31Zf",
  "key11": "GMikhSYQqzQQdGJn3vuTEQZDC3Ha18TV5ChNLszxmW6yo1e96JGjaMA9xCa6RTRR2rgZURJkyTyEFLW3SZcN4Gb",
  "key12": "38vkxQRiJujdcPbta11EJe3CS2RfzYLLj9ayaCwWJyjBkmNVkDRhYJ1ZUg8qyb6zH28CfELj2Zve73vpuo7z4NPA",
  "key13": "3WNhABxPfc2tWEV4xqGDorXSMFR9iLmKAyfH5PqhtRYspkf76bJVA9ZNu93kKgG9Q3CgcBxm7vBUEVTSATdH87LY",
  "key14": "2VPMgZUHrEG1bo6JYGKRffBw8Ww4PUqvcNe1JyBN1hAENgzfsk5oVybh3JRyjCni1NUZTm8JSL4UWtdESmXXMhyz",
  "key15": "2w2tfoY6XvvZ3UX1brkMfWrFX9FRFgqXUgcbt8uMGTdhLdb8T77rxfv2ecBKgbAGjQNBpFiHp7yfVBcrfKLMHKKo",
  "key16": "5ZbocFuBjKh7c6eU8yqmxwe79yaWFts8wkFwWAAUSxAE2wUymUhuUPpfZ2uYSHrvZ98rfzBoY49vSXWq63mGN39X",
  "key17": "5ThWmDj2u8NXvBDhymxXVqTBbxSdvHbL8dP4qdYZQDjsaV6De9XtL5DXcVSfSa29CxkeoPGxUL2w4UafL4XeuLxe",
  "key18": "NmWp8NYjxn9MPAAFgAK7TchvF5WyjNqhSWTMV4Vtr1FqFnTQs1z4hi6icsfJc1GHvMdy6mMNn1zyfb2XDF9mwrp",
  "key19": "3cCwb89QqKevfE24j17MndRpZopfN5pwyE37EP1vMVrCME19F48hjGpgQkbA5QpgpKRXdGMVk9SEZ8BQvNZHoCcS",
  "key20": "64GwTp4ZEPQ7G7K85HohVcN3FjvxSDi63j8efnEbxzSRHbQeHHJo6aCzuCEbdhTPSqaXoT7FVP5ykxZQdNcyACtP",
  "key21": "31xUGesm9ahZmxjJuXschb7m1NKdsGs2mgjTBb8sx2GFRaYs3wg4GNCym8QFG9YwmcHntAB6bzm8ywi3utfCZDUN",
  "key22": "5WpiJQnFGMWSvcMZt1cKgtkBHGyHNxi5wY4nSnxEF7gyC9przpwpGqAawiY9F4q659hi7d2mK2W6F5gMF5qvGqMv",
  "key23": "2hFR3ue3zH3AuMdLbfsBMTuGGbjirZVsuwjTRSkBkWt3EHtZZr1eWYH7oLHAJFEqxA4pjJwPM3gSUJdJ5Dthg6h5",
  "key24": "2DjSf7jed2KFKG5vhfDwveddo9nTM1cHHwwCwrQKsWdYewmrLQHN8BKhCkEavtxQyunErG3gDdKfWaJuazYt61Ld",
  "key25": "3w67P29ouGWaZFUU4bCn1XEZRUHsJrsrxRZC2CnxZ97WxMTgewuiPHfrtVW3QYq73RuBLgBE4xdz4hFM4gLkULw8",
  "key26": "2tX8AkGXYagRG34gf3M63CCnzukxcsfC9DttNgJfsy8LTq34f1YTkhv3uNMm1TBNfuDJ4oSULCthoLRwdg5K652e",
  "key27": "21Di3CADo6rQWnrGM8o9Apj9o6Q5WZvwL7KHvv86ACSSkA3EerW4yEwGR3FSEWht1jfJbjGHoVgi1Qor2rfEmQ4R",
  "key28": "2SjkVvnuSm8SKeVxbMK4vthtarmCRVRceogJt7rzyDXkrX7KrP2Vcot8VKyergWouCoq27nPoFfHotNXuPhHxuSo",
  "key29": "4u3ovzzHgKkn2wnqYJVmBfQN9xYzecwWzgytQEYcpBcQkDGzhLdtELTNT4qFP5GEdAX8Aro1S1pSc7iqozHByhuo",
  "key30": "DVSwY6Q33XRbnK3HCqm7n8qH1muUHn3Sz8nyBCCYeELcYCRtVezG4cRVYVXNsfC6U6GWVzgi4Ms5K7SoMS8PgqP",
  "key31": "2E9SDB8tK2pDPbdpDgQTr7gz1tkUvWdbNdQhqWVUhj3DriWy6B3WhdXBeGMgjJcyykgCSUbN4JtXn7Kq7BgBZSDd",
  "key32": "673c21PbFyKBNSDDwTYyXEZTD4bgem5gbELGPFKxjpJBN8X8LMPdY5owk3uogf4Jq5higWwU8uucr5jCPr3TtbjK",
  "key33": "3he2bkDfaDErRQQoacqse9twkrzkJzhyGLDV4616mV4noc39vJjH51dse8q7RDe66vF5pCY5uzJXHhGeQkNAEc8m",
  "key34": "uK7pozMcG9wGcTJPxy2CpCUjhTT44CK5opi9B5FcireRM1xGF6KjzMp7QHxybCk4NHGbuxeMyJaLaKoiSsGo3M5",
  "key35": "2ZdGD8kLEpQ7kTVd6hEnEZtjrDWNxyRztTYTk6AFLL9Vq5w4bNr3LPeKNZtS5BNG9PUQohDRRK9wFmay5HFu5ADY",
  "key36": "3tHDBTnATViGkpw58Ykzowui8jvG8CSHUa2ReSZwrZvNKxbsfTFgUyEwT8gdAaFRNqu1wLTF6XaAQi63YCYur71a",
  "key37": "4xhHh1795Xnpz2zTSYEvZZ3nmok9zrhEaWjtHsDUwdZpgaXPEsFu1aMBhcRLJGXevG6Krn2HWYmryi8ntHMJDvBa",
  "key38": "21nnNZQLG9HQAYdggJMbmGD78aZALGWur38R2BujYafm4rXx2TriJrg8ENEDdniAqWTBXxhaVh826xUZruNctXVS",
  "key39": "UQXr1rRz1GojLsvBor1Q6oNwcEnfP1giGY1bBAcEj3Rg6UCPgau8J2KTQMDsdg6GDNUN3KnzwLAAuP5xiedr2GF",
  "key40": "47jiTZrV26zZiuJoAhU7j2MUYcofEGG58EsELsZte9AazYHZha4BQVX4ipTg9YcUyhB9Eps8picxzQsyvSJCbe8N",
  "key41": "5XYoVQt6FqhV8gkmzaua4N979iD6ZYHM8ZoeNFKgKpFHa1w3r1nuQJrbAe4Jkaz19JsdnBgsNeLe8K459rWbjtTG",
  "key42": "4sSomyHijAiUNDoEp3T9HvDnyrkzY1JxLtP3Km3Phmg3uQ6jGsUmGwaFdUcuTXAKevxsWNEeaquSwhTu67E5QRa7",
  "key43": "4EN5Hx684rDH1AsM3TbNLR9RveHTjsyyf3soKvzKxKi9BhS5VYrk1ZvUNJEFn5p6WiRxZdETGHhiYc1FTDLbgiDv",
  "key44": "oRz3dDTWbP8HAF3gmcEpFbaLFU8Wwr27shSmE9XhVPrumF8QoeXSkkbC3nytF9TAb12PQBsN4UwJMPzU37R7uMB",
  "key45": "SGv3of7oM9fjQ24BnzMvzAss9s94qYAxSDZWSDLTYAyGg7Gw89Cv7RUPQyeVyHbFgL4GhhtgYRHUdRVDKaqhz54",
  "key46": "5KZRi8AQkTXWLZxakq6cDXXphKoUXWR4cFGHxRqt1oTvPAuHAs8hdrwJ118FXyqfP487De7tEntrcBFgfFo95XSf"
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
