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
    "5jLV5QE5mMMavfdEQVfffRs13sqrYrgDhu557FicLeEi1AjmcZwYR8K9V1GKeTktiDy9TeeqqmTWPUk4xQQX2Utu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wHph5zbXMpWLviwgebhEBGrbbHskVP42qdFuqBsQdAUgJEF4A1KZ9fr2SFcd9DTHfEBJzbwKwa6uNtPFSW4zF8K",
  "key1": "Vwixqg4EQDHdRriwaxNCBjyCq9LpGKfqGjjGt2i5mtuaGameGsv6xXTUUPdtu3Sp8KFcB32rZXF7gqLxKKUp2f8",
  "key2": "GncV3ne1vbhx7HTyKERfgg8jcL48CbyqG3PKfn1n3a3yRpqj484cbA5rc5kMEnDjB4xHBhjnnHhPGSZsN1sUbCc",
  "key3": "cJqimRDun34ZkufBCXpPYQvuGt7uAzgewvQiw3x3HksAKSoghFz1M5XuZyN83yPcS56r81eNQDCYLK8Dpkp1Lp5",
  "key4": "4VwMxcDFGZ1V4FPgFGp64j5BYSbtbCbN89eAw6mEsGLMfuLPXTDgQ2QoXfivL75ArViL5JuaE9MhZoJknCzBGrhd",
  "key5": "4ePQZaVvUtuMrEXSk8vvLvs5ztdj2Me1EvXJkx56WLnMY6YUUTemhXod8jGNUCmhZUEJ18phuWS4k2AFnX2Smt9j",
  "key6": "5fkAUgLCmEH5hzj4EHyzPDfDEdd7remduJyx4cwFAxaFiFkHhpo2eYTmcecsxu9HfHSPUKJTRncy4jiR96jLs6Fz",
  "key7": "4PNfpUbvEZL3S1E2CCvcxa7WUozwcujZUuWhXNH64gz9HzNqCT6m7nhtBhjbUHBZR5Kb39k6RVWSWx7dgzi1N4Ka",
  "key8": "2CRe56NVUmVWfybG62vwS2ksqoCnYbvY3auojPThkdgW36LJnPGJ2aynDRZFtUgg9jxt9fBQtxp4QSieESwR39TU",
  "key9": "5oeXiAVjQJ5VJDALDdMjibkGKezoC96WULEquqPjkRuJXbvhMEDcbxq7mZsEDeHiWdd8vhzD43rw7tK3vebXDx2G",
  "key10": "4jetBLn6En1zFXx1pLrsr1ZTSL3LhZnshjndU97FbusuFP9EGC2GgBaFWnEWwGK1a2gTAJsdPUnYc27prUvza74J",
  "key11": "4tbXdT22WaoNDELwmJzmG55v3sLH62vd563ghbTFFEonBXXfCk7b6mcH5DVJnuD8KouYfvTi9PyHx8Zvfn8FuEpj",
  "key12": "2AjpPKmf3oTB2LDNsLkgaSWEzwdyfJTkM8gnY6igdeRgSj7qdEKL6npb43ecQUQtJWpK2ZxnH1u8TVz2UV6776tT",
  "key13": "5qoxhkmyaGowKf7YNGFFk1UYSyjw3i4sPbPbtxMq49JKropeaXQugQzEByjYLuu9N5Ant8LUJsDJbcLLLCRBDZgJ",
  "key14": "24ZVeF3jVUxw7Ek3t2GdSmMmnCtGZUwgvF29Mchc2t1AefZ4UAmXTWr3hSZBFM4B6yYum9Bz8YzqR6aHwQrUuAEX",
  "key15": "5pS1FzuPCZTDr5VvgMekxNha1z6PGeTYfDdnqZfwo8wsmm12xWYFpBuczTW47JvPtWZ4NSg3K5Dwpb41Ry1si8AP",
  "key16": "4UtMWQvAbA4rtZPGPkZ9KFEZLGkueT5B3NniPukQDs1Rofg6w4VN1S6ipSXwD2AyfSvBx2oEwZbK7yWmxeACZvy3",
  "key17": "4Pu9mY61MxYP58ju5aGpFFcgaUQsjxgCpWTu5whRmkXWhXgMyvo5mnNxJgvTXU18hwVXnrNYFbGd2WUncxiRD4So",
  "key18": "2hYMUpcBEK5L51V6eJPdzxUbmMR7WeadbKpHfXsEKa7UbtN39hr3uVjRUJxGnWb37VxeAqNtAcSEiDiPFg6gFZ7R",
  "key19": "7teHp68Hgi4TsdqJQSsMDS7K7YKetfGLDUiAUwburZgbYkgM3mEZuWNjXjgF9bLjj8bNUEVh5LczbQD4b3ATMT6",
  "key20": "2nrHYqNise43y5kR6yzcQsrhQ6TTAxVjRt1wV9Kc8Wtj83yRFUucDqfdmgxsZ3LBjv8SHv2q6JTnzzUFSDe3BYqM",
  "key21": "2C9uUXHWXcK39s8qJrPJJYAoFjYc29ApYLqNR9pGwaED7MQpNyCMuA4Q3mQo4maYUvmh9cnzobLbDLG23dxzJLhb",
  "key22": "vh1NerTZ4WHZejBcp3suGZw5nh4LQPEjqLkvHwEKRpNaG3UjuUbZiSaS6Fn3hF5czTH7f9KYixZTV898Shap6yx",
  "key23": "5yGBUNkTTMQBU7akNz5geSqWwqHXKjo3vpXYmVUDQP2TGq2zwaoz34TvmHb9ssNJMuaZWXbVG7wxsqZF9YpvsMcb",
  "key24": "breK7PTzgit6LSWreymCAAp8DwoqYdpQG5VrZKKkFEqeMV8JkVQH3aH7MSNJ7h7BckGkxze3GKrCTi8z1UDxBEU",
  "key25": "4hKKhMamYatWJCKsqZMGycpLfs5VaafvKvuXUAxGjBzwfqryGA35PM7satxMWsNkkncpSN3rA7PTnnqQSMMiqvB5",
  "key26": "4wHuzuykA41ubHwLjGXozUYSGgKDnf1uJL2Uf7yfecFNebcmFx1w2F6R9p6AtvXmjRwTWbtBszR1Ry4EQaKbkFoj",
  "key27": "5Hfyw1D3o348LBiJ8pZwBWiXCYYhq1PvUEDMxGU5RxvLopm4CnoFt9YNJzQPBo6SYxJfwdYfafyCKcPohVZcj9Nm",
  "key28": "FQPxnyLbAqkFuwzQz5uFphoawgijRpKeKYKXbVbQtEbgayNnJUoaJKpR5GEtp5u24hiC3xopmXVKk7Y7vNsHJvH",
  "key29": "4vCkjB2Hc8FH7MT1gtDKWM27YZEyw858MzEgLz3mJk3cQTocKnkfCgm87YiW8g6YJnBAhJELZQPFEYKExUuemARh",
  "key30": "4Dtv7cDcDy6wo45xevPqAQNduAA5jAaL1S1xuwD7jzJ3js5nqkcnk3DoJgwRJGxK2cPuJAuRCPXxT1CMmAEZVLt4",
  "key31": "5UDfR4ptoA5Ep1q74eMiJbrjPNCkY8zcGpv5xNM1HQauR2jGPYhmRZqVLmqQVoqErAca3V8H1PYyenoC6zKWPjhu",
  "key32": "3To3qXdSJA8yFWGwVxJnScr5AevRam8J9rzaURtzb7wt5qmwMpvdA73kok8HxZzeQtWU27g4geSvUgnfXTY8o2R4",
  "key33": "4Zew5i5yhYpD787UAvhWjUAPeMK1goSr36F1ppiJsEzPQTyfZ57erQrcXfbmgv9jVJHV8nueLdzyF5mYdAvjZumQ",
  "key34": "3RLHXziqvMPwKBKTsTvF35rWBBAouMJ7G2t9KvPUyR8LHKeyCncSqhDFCd92JMTGgm5cuAZzAr3TfTdy3thHzQaw",
  "key35": "DAMNegRCw4fXaSSuTvzfyV8KToy25mPkiPjAtSmrmQJg6StyANpEEnx7PguUEBhDLeHqVdwdhxZLXYSpyZY8hMq",
  "key36": "582Q6vpi3GEdrgQUZ6ppRx4TzwTSXeBytexa9T7B1UBcwJarHVbeuRK5tCB1cv7NKEtyf8qY8JuLmuyBobbeG6h2",
  "key37": "4wQYqNJG1vwtJSyGjeFPJmiicsE7vLGSEpoX4hqrP2Ms2M1ZY9ysd69iyA4jcUtaai6Y5CwVFEQdUq5AHTdnk5Wy",
  "key38": "2bav5dGDXmDSVcP6jDs3PfxbCBmnRW5mN3iHSf1PCy32fmC5yKESneRSxMM7zbQDrxTrMWajSE31jS3fBFqHawQj",
  "key39": "XKZdLLiFXpe7C7AbxkM5vFVcvjSmkCzfL3DB8x3BmZrjDpwyPviVaaiShyqauqxwTKPZsHxiXhsVHku9RqGNudQ",
  "key40": "2E2Rh63Jjj1xnfVh5eLmxTVDxVM3NwrmDbUVSEttcw2x3qF8iwEYRF7SQV6ySNJBgLqGK4eQJbDbqgo7yw4iyWY",
  "key41": "4cEw1BW8Qh1NrkkmtbortbFcXmwT7B3UBqHG7npgto5dJ8tSUUX3jukbfkkWMpFNX3oNbYCk46xYCTMzQHXJJraZ",
  "key42": "4vhQ2vTmos5qwQLSbjN9unX2Kbgc6gi29J6c58B716CUvNF9NkXgiXN9JeyXSAFfGBM4MfZwsVcWFjJHuX3Ysi5Z",
  "key43": "5KB3qexPqfs6tB5JfK4TTwh5t9ihbd8KRu5gLjKfG2RY1YPXikxUHwbUZDnE9NamSz6XNoYtMfMrtgQb4GVRS2Bt",
  "key44": "UPvSAJU8mjU1qowRuXMTCvUYr37sMMM85SE5UFZnfyxWJHW2RB11UaxBMph8oPrA8rSQyfQ67u22bcFxH9d4L95",
  "key45": "4onThE5fLT1NhVnVEL3GEWKTK8TWrccqctDfiw8zBoSWRd4nHP1rvt3TMeTTT97QouMjQo5hiLgx1ecKMZJeRCUJ",
  "key46": "2JBBmfmtoYvGEU5CHtuT4NpezozAeMZbJoFSozc3BzHft6iUNQBXxwk176wk2huu2STDyH1e1P4DURCNYxLEuxEq"
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
