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
    "4CruFqCmcKGtAtKH6xeCEyyBBN3kFADdAwZcWYkgvLm5aVHiT9dLwuxscseQeAJGVNpugJtC47BCkYsSmpXotD1R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iZqSquGdt4CmditnaiDkWjngTGrDzQAMEuMs2GfeU5xP218nMGD6LpGzsrByRtpQLd8C5JMwsBdRqGpeG8JkyqF",
  "key1": "27cmLUYzJsAUZDtyguCy6JyqsU9EFN3YK86K2ALnmsZLqtZyzNnQDEYiHn2wbdrsjoMshNMYvehVgX1EHSg1CtSU",
  "key2": "4SzsvHS8Rwa1XU55oLcYApPL1zrH4cP46dmyBA6JtfcJ9nBbEYMGgjcr2JPJh81uQdh15vae8uvrVv6Ue6xtjAzM",
  "key3": "5DhxWWuHDNatM81SVrZWCog4aPbSjjFwFPtMiShRdTLfjABoiSfro29q7uYvxkZeJ5YTDV1mgpp5qQ6WBzHf6zTB",
  "key4": "3DU3Qkt578WMsu7BPKT8sbMuyAP68PWJ3cHkksdL4V8NyTRynJEfnLvTF9yeAPjeXwi62SaPQ9XqeSdPnGdQvTai",
  "key5": "51B6wXjRzsyMonVfBp9DETUmqyH3MoZ4EpjAS5b84JDxq1ZoH1orhttqXfdgQPp69CS5Yq2bbvy4HhRUESj83rov",
  "key6": "bmgzMN3n3dbBQGKnQoheB1MacMTnwQg5HzaBHPeCXrMJH9YGGUVYEFExP258Scc43AA5hxovHBtjyeCPRAhxJFg",
  "key7": "24javEUm1Uh7MT22e4aN34fWf5gYojbUbK55e4Kj27mVyMwtcjTbrMVLJKX17Yh744dWPsXkdoFucZYKdFbcSdmY",
  "key8": "2XexgFXhCL4sWvwmz3NzWYpw2q2tBJXtvrMroHmHjwcZvFz2AQas1G2yn5QRnbhrai4jeQqYj4jm8RiXwczRbdYt",
  "key9": "kGQ4izPyMgTXDCdes98rhudy22uvQTaH4t7UD9Sp6oYD32osb4godCKb3iyXHHf6i8FZaS34uPnyTd4wDxD13bv",
  "key10": "4KHFCiSQQBQQVWbY1LikpY4EnMF6bUuV8J5mjrwQcCMEJPWUnJ5dDKPUvPiSQf68arTeVSV6am9Gpx19qkg5r61m",
  "key11": "3E79H8gvfRGW6EPmEeVMm2cQsmS2gPTG61tuL8886UE57vVCG33D2UowL4oEmDs7Q5Bqch21nX6q7m6bWY2tgDrf",
  "key12": "4xEbykekq9y2t9VKZSCTmaXhF5cv7j9vN4P1U8e3Qo7bEBoMtsGYcCUC77XqE11o6sVLofTDT7vFngVJJ17gtZCr",
  "key13": "Gym5ncvyP6YWugUWBDkVhH4hdncHVEC3dmJSjhQxhVJgAKkD91X9MKiVzZMp15jmMU6MpyuNUFnjCLW3h7kEr7q",
  "key14": "3CfeWV3LvYJaLVWzz9YWTExBH5Up8co7HZEFk5dkLqr1ByiQnt2RHuTjPWG272qMWY2nficJ3mKruHqpTHsQSW4Y",
  "key15": "2ZNjTC7Y1gQqzrQXqB5mAvRqeh5AsFyCUttFi4Yw1yHaM3B37DwJ5RMdmarEYJAU3VtYxTyG2qaFRgLxuLHMDLZa",
  "key16": "5pV822M9X3g4GViQDZ5963XJqzxPxM1onnCH1EZoWXgf3wnosrgLmMWaWJiFiMRNsvurn6dYVmkjx6PcESma5W9C",
  "key17": "J7QrpiUvVhLmuCxD9fMBRdvoSG2RwHjzWyrC72gHpYbZqekc4QnodyaUJAMQMHP3x4zVYhncvSKev1yeXEwTPHp",
  "key18": "623meB2qKwLrrSY88eQitgtVzhHaBi5qqNDaJoYbzG7SFeHFazmyiVEkPUYBw95Lt6exAriSh93pEUsoxJRCHP7C",
  "key19": "bdwjbxUYEP78cGYEQexxXZTT25aBP9fkYFACkJL8jdQJEEwVT67rf66SjJin7kYACBVeQYhUxisEJPskhDEJu7E",
  "key20": "4jsKuSvT3DFDySdeDEjPBVENJqFi8REhgfiwzh3WdmyFKwJjbLCjyJ19mMjNdpMhVLrbYfm2q9wySqE2xixYr8uX",
  "key21": "2ZiRVmibyNY8ftJZwXKfwdaLBSovmV38Z1Kn9hVcdupUB5K5ARGwcQxr8iHv2efYeZqL2sjpBEG4EPaHGptp2vEZ",
  "key22": "271jhAdr14cuKd3WUA4VCrfS8e79ZjMFV5kxAPng1gTaVRuezgPPvrCARPCmpMsSoKNz8kmwZ86iDnhVegCAzBV6",
  "key23": "3MFhaLtbCBpo8pojLzV34omx3pLybYZ7bid76zxEaTEs9UNXvnCF85WMhAQMexR74xaTxpQNQBWJx1Y6sBNTDfgH",
  "key24": "54eaLAWydAJnVcNNPYZumojmZuxYHaMQWBFbJsH7us7KvvBLQgrEUKZsq2paCBYW4Ww7n4CAfbLn3ToZuQFzqFqE",
  "key25": "5MsssNUybRiVw9tRLr7VsYUvhZbxb1i6ZvJYvs1QDGemd157gPFQ347cPvDieS1wM2s7n5NAGinYrpgZapWFCYAp",
  "key26": "3mhBgRDooeWGn4P6rNdeChZxjjZEBAYzUPytiyfo8wsJxdtCfjP1CPztgHH8yLcovT5Kw478WU9i8YaoMm5oL3ZB",
  "key27": "3grttaE5A5ZKXe7hKGDYcXQ3oiJM6PEq9fcA17GTrEMECBm3uLsuRtdpXeGqnEpW7vLtErh2nz8cHV8hdEd9Hsdf",
  "key28": "3EvJ7XdRAZzZUxVhYqAQREXjWyHwcjWMRPBnc3SMUnyU2r23XToTjjK3ECtNA4D38zPn3iudi8yyLpa7FrQib32s",
  "key29": "2ZMcgNNeZ5sAgNiwykEVFxUgAHy1vnkRFzfU3jWJbK9ow8gtCh6STH3TsSZkUXpora2AgmDRqX6QaTM5bfoXwB14",
  "key30": "3r3sfj22twFLGroyPoa2JZ9ev1zDcLH8FqzK9Jp3trEp89K7sBe81VjUk2cxFQadg5bsXCFd5zLbVuygWN24QuS7",
  "key31": "3Grdi3Ad69kgcGN8HGrhJjJ3NxCz29x1kYeS49W8wK1Roo35wjzKZYYykELqFHBsCYJwY2XYjwK1o7pYaTiW38up",
  "key32": "tLyWnwjLq6rFQ3CaCcrf2P561SaqRy3gZryH97EiF96cZ2BDqf33f1PBPeQyQv6xG5qqjyXvBf4Sm4ugU43kDaf",
  "key33": "4vTYUDNSLZqqFtB8Bwj6s4WS52ZG3kvsJHEsamdsS1fFjuHm1FPbDEYYhKuyWonSvK5GoKgtHfkQLToKG4NatB5U",
  "key34": "GHFdbT2KubmhbKEyRP4NEUqRb9EHg9hCqbqP9VGcrfMcL72LspKxou477aUXzYFyjaVwoSTpQ1FvEN777FhjQgj",
  "key35": "2dj4UJUhVf3ixhW5p4PThkVv3KvAqgkSekt97bBpb2EyWxCWqhQiSKWi4ybMS3zo9SnSBeHJE7shgRP7ccuqrTTF",
  "key36": "4TAQo3dcezVCHsDfinvLGPubJf85X5TEjdJfvMB1zAA96QxDQCUqu6jkTEvsNyZ8KyhA6anE5nhsLFEKBddEUSdj",
  "key37": "2ZFXH2daWC7gL1xZ7jcJt5pFF17y1ohJBh5PGJGcaPvn5nZkYnVB2bKRKzB1LrF4tSpcSVr1tA1v1BmzoirAj7Zp",
  "key38": "3LMWx8Pqup6me8PPg1twdWCMoNbs3BEsuVYKPUd6CYTrGqEJpENdN2eGfu8HCa2SuysnJUUX7pDo3Vb4C9V4qXjK",
  "key39": "5RGffDkPFF32Bf553mk6KQNXbRH37S7jPKT7w6FoRPWSSQEg1s5PSo9js6RaHFNgWwH6RN9V2VdEswfuoLh5Gzfo",
  "key40": "62a8sDnyfcQc4zhLCebdeRJ7G9svF5Yo5T4wEnR4ucjVTss2cmu27T3nXS528RWk7DQaGRskPybPUMGFTYycukf1",
  "key41": "wioB93u9nMyEtA7pjsewUvD16b3L7fi7mL7MMNoekH8ab6J96gboKqUvZJyQXnjuwNFa9mTz691ezxLwHXX2aH9",
  "key42": "i22nFhAMbf44UYrqU9dy5VKuVzvomL2vjSkC2pxe6GKj1qy1qZSBaf65wAauswudadKztvi2jom4DQpgiQe3JG7",
  "key43": "DArbLUTvUvYB9RZuhR78d9p23bUJqE51NtzmJn9YDgwcpkDEZR3JVPpyd6K5qtu6rA4qS5RLkPaxcdNtNQA1CRw",
  "key44": "2nW1Tkc4eJZ3uXwjeWyGiiK4qCwZsAPoGaec7jnp91vVSuoFbiXLTL1y65tsNBnMYaQJCcjNDAxU2uG6hY26SstU"
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
