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
    "G9shp7H3bgJZGDCwnRbuigfdtXGVvUCmBhnnMX9ccpnxPz7GSpC6Qda1HzoBSnNHfcXUgQcVoYYdkZUJaaEDQHq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FaC6y5LvrKfKYuYdejsKU6GBmW8G3e86vxDgqc8QniiSwtycX7AEA6TujFeCxKkfgJo2HchreyysokY9z11qSrc",
  "key1": "3AyAp3BSUixD7ECFuWW4uZfsgNs89i2CDYBTLzS7E53rMStwMcG49EVmKkoEy4rhmD4ih94NwcpxX5SRhtgFdYo6",
  "key2": "zyStXZaLoeQL9Sc1DvzL1NxfCBUzq28maoMY74kBxKRUpyfjm3Ta7ofwVAQJE4TpKa7Pxhkh1evjZTrVyXFhTVK",
  "key3": "2xKxwSGSM845mYkVY6tkKsFuwZ25rmGsyc88M3TFriNYwf8QLQs8uuSwH23riZ2hYtFEKYKLp7eUZsRmrnujjfiw",
  "key4": "3R3kxvp43WviydzhSpQPTUrZ392aD7SmttcZimJqkXA9zzJQU6wTJABpNuhVVHj51781e9xQoQjfftGnGMccDAhJ",
  "key5": "EeD9UFjHihMYADQDtZLPMWTMt9sYHZhd2vaVHSkCwGxfd4mkBwb9v8ZQodXANazCYJx6XE54X8L6BHNutMS9bJ7",
  "key6": "63apwjFhSBqTHYFV3rEnjeTLDANesTdNDHVEm49vycVSBpeT6YKcfrU8Xnp7yqGtjbfdXCsZnioMrGX5DA4tQ966",
  "key7": "2kj3uyHGMrA8aG7DYg2rR2b5qWNDqvqtFKamKyng41VBWXfHv2iXkHR5V6WBrYSYgdje7GCdu2RTEd49BRVqfTMK",
  "key8": "4BcsASBRQrhD2k3h4Yur9FZwX61MxywJdtv19snwv3T3i7yKAb1czkq4Acy89YcwLdeX5gzTuKHZwcNXXLJ92Crn",
  "key9": "3fqqXeXhJHDFuTrz7xLFnCF3psLhhv82DuFHHpRE5DF6dKUmjPnXpnV9qVWmomuuiKUkcu5asgB79yWzWNJZLudB",
  "key10": "3tCv4oYdYbxiK5muh6sxkMPfUKNkrH5HAcFjmdfWDM6hkW5SoSVH5C7ZUzGBeG75MqMDXK99Mcf6WSZ9ug1w1MDG",
  "key11": "2XDhQyws4RjPEfTqdxZt6i8jB67dE4zEfzbPpqVCMYtzmHeFHWvpD8hUj5gBsrdpRg71yeYgHf91sySzzW8ojXf6",
  "key12": "3XufC8dRDNchnGjoBoAQ437VX4p9yDA2bubGpz5JkqMvjcxFAkffzFReBAb2j9mPtaxSkieUMyff8QoQYauTUQHA",
  "key13": "3tdHZxUtSA43CWgzbBEgd6xhjkFNBb8xczxgHUywt88qAz4EHiipNPDWm8NUhz4GxtKFfB3EReAVHitow5RFGV2D",
  "key14": "47vy4Tr9dbBXTPHrpYmpTaaaswo8fL3ceoH969qCmWN6rfRkBLstfPzSq2NCtWn1aFZd7Xxv4PoaYo54sRsPghGL",
  "key15": "35wYSRCyhKrWoPGhLtJdHp5PRstZpgg9aJqRLdV44x4SVCDyYbrYVB2rgW4G2eQC7SvS5cCAYDCBpjpkcJU7jMnc",
  "key16": "639swPngodkyRW4m3QfzRYdsyJcnxF6MnaoZYWVDZWWC8T3DtZHT9yFUNcm7MvosFBhvCw5ZoQkjMAUQxUtVm1gB",
  "key17": "4XqKPc8vvnCZ3YsdZLGfmxdXXKqds6BSZ9TqAxMg3cHCDFFUneRKrHhiK2iWdQtCvjWkW7QWATRnMwXxbFfNTemy",
  "key18": "4dWZaz4ZGVpK92DzrEPjQKcxbFPYeTeqZ4jBvgZxhrnuKdpgzNP2dDKFGw2fdRTMRRJ2VH9APBd7DqsMSaWw1iBR",
  "key19": "3pSaevSnXdtkCW8M3W1FQbZkSkyHKhRQuVaksyPMp1NyGAhCtp7y5XFjVZCsiAbGuCJxscq7C2NqntqdVsPXJt3w",
  "key20": "4DJNGESCY5PPoMJVCuM3Ws2LV9oBLeehQnnj71dEB9jPEYGp9JXSQxNGHinHqu2RwdUp8qfHY9SXf95FcN8UV37",
  "key21": "59uPUphyK5jT5E2Dqi9CJDo3Qkbvs84GemhyPeFpyg4DqhfEsT8VNGwF892aW5t2Eu7d4Xoyk8hgJoE2wdZ4owQS",
  "key22": "2eqpgoEWEaYq3aMpPWb7PNGba5FF4RWvPYmV6c6tMq8oADUKQ8rmUdXQFm36UzGFoQEAMLZmE6LA4KiBkVdAMQPH",
  "key23": "3feakD8Gw9W2KCad1qRbFctdNT5u5xgLbU1isnxuScwargjSVtSa3NLCKbN6SVy1YmsrWKXYatjdvpAh6zd4tffb",
  "key24": "2Xd7vR7r6s7BP6DrTM5QpfaBmxNJDsjUDoxwRcBX7S88xiJun78qZ4xia9nFH7axgY163XoG2in1Z2RzxZG847sf",
  "key25": "3bzU1cwHYX8xwPG8MKtrPjwnGXvNtuvmEbEof8fi3LDbUri254sCJTxshXaHsH9MN6UPEHV9Scs9bKdsGvpVB4ng",
  "key26": "FEi4E4rgqCsS1oPLMCqBygTuzjLThtcspAhiEVyk2sXagudkN1USjJxzdo4AdipQdpcn1kJGymhbyNmMF4G3JrV",
  "key27": "RzeV3qnTWieaxZHpafN4KQadLE54UXwMaCsLaWuTPPjChDS7ZBMLFg8WNQsw21LrLsyuZ24YxbpijtZkq6D271G",
  "key28": "5Wdgnb4SUuitMxWvf2uLpRnQLqZjH3bnrfTbkDr5vQ2EwV4tWsqqBe5xDdsaMeTfCeD5L77LuihUASRjNc2SxiWe",
  "key29": "3iB9LBVDpXHEWAk4LjiYyNuGZL4GFRogz9Q2NFjaxiD8Bok9PXbCUt26HUKq38nzBVyJ8aiBQKoMPqKn67NyWR24",
  "key30": "2TkH5QepHW9FHy3JEEkoAtn5aRjznExsoaqqg9h4Dm4VTE3f8kNyrgqXkpnkd9LNmHtQFBXmFe8JqBoRY2Evse7",
  "key31": "4MH5DwREAZigV6BTmUM3oBUfjD1DQ9xzBGcK9rF36UHBuYukAX25pG6sPa6NU5UHJhTY28WR8y2WM8PnhhucYKfW",
  "key32": "44J8gLiD6z8yL6we6W1KyWr5HvHGFDtoWcT4cgzJN8fLUURMfYurEu7Y9NhkWQmN4HsfWD69LUuZoxtMWdCgwzAF",
  "key33": "5ZTXeakq1B7R7JZh7DFk4YYNFkhE4BAU2LVeP2AKH74fZwM9ANXEUkdHVSbFq3birGtXFUofJeVZYVPZ3mh7JZW4",
  "key34": "5sRd8q6kDYp6yUL6iTGYZZV8eFDkqirHCQWdtMAyrpphtpkHSzG57TZEpGYpu6NEZbNJ4YDgGT6tc8ZfGjYbUvP3",
  "key35": "124WryB3tfmK48r7m2Hd6xwcmAniJaoEY7tB9EShrGm8KX4dD58XWwGBqjNkjaaTACq9ABRbDT4BrcYeSkfa1y9A",
  "key36": "4TMUBym7PWMiS3aHFvR7mEUk81p3wY7iNr99zR7ovLZ5vAz42YVPh63B1dJYXUQKiH3NM1DKMB6QsmwdcPL2WBnh",
  "key37": "48YTWt51j7gLQJAZp6SdGXSBQ5id8LnZzU1x6SWhUjYTRewnC2MMG5fv9492uU2iNLcFZZPNPAAV93WQrFHRt4hZ",
  "key38": "4eSmztxujAaP48qYM9PntYUCKpafRb6zxyQAgDLTgpKfupPDQoHAJE6CTo4NZGALEi8Y3vnP1byVnA1tyP7NViEL",
  "key39": "GV3oZaQqfP7ARh6F3wnXtGf1Vay58RsC86tm79GTqjXYXE2wcF8xtdtx5NFayJDYtJvqzNkwQPJnzUCfTvJP4Yq",
  "key40": "51od3DEPN86JdGrUTmdNVZsj1xtFS95UgUeZSrqv91M3nUUsNGnH9aiV5GQuMJwo9VGSVHuzexrCy6cn34XgBSGw",
  "key41": "4EzLW9am25pY4cB8Fa5uvmsPNmJuTSkBHUBoEPFEz95q7AxM7SnHB7PXEcG5tAAECwxM23BY1r4kHRpWS288FzNp",
  "key42": "QzYNRtSGiPCU4cERNyvRefg1hdryZXQ4yE9JaAQC8zy4HKFKzZYuLymTDh5hpFceqm8sBpUBNpamfAc4vi7Ve4K",
  "key43": "5pJ3NxU3uAdeo8hKM2c8DtR72UZZmWAwbq3PmU3xpopQx4MLMViAfVEjcdTDar8K7E3DuhpKZGTn59LtAcYUiDEg",
  "key44": "2cUqB8jHksDDC3taP5EpvCe5UvNvhJp6wPevemwQbF3K7qAVcmuQD5eqtqX7pka2zyZm1xHAppZCykfvXYrnCMu6",
  "key45": "3KFjBEV4P476YUwtSjBumLiebCNcapEWQgHfeqXGwFm2DfvmgKTAYewkSkfXVPgL3LHjJpZ2EMctkuKMB49AiZf7",
  "key46": "45jLp1JN4PjeXMzJmNpSLTwXcPtt75fmiLELrSB15VoXZAgmPGEF9QhiTNDbWn5aa9s89vscj8rX5WN2vb8M1WZ8",
  "key47": "JbezG7444wHRZ3crdFP1yT65YpYeAQuCAKFShy7tE2w5PvjMSAAecJjit7zure6KpNciv5feb5ERe6obm3dTi8N",
  "key48": "AfHh6YvtquMdGVCtF8GK22kmaiEpFJdPWH4zQG35sYCgQaYXtmAbcGn3Lo6owW9nphnBZMCxSsq75VrQGGrKzky"
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
