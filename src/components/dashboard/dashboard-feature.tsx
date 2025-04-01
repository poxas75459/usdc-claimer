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
    "3NQ5jKx4UuR7F4tEWLUnkgNPdDrWGKV4gvutrdzFc6JcCW8VMiVM94jrA9WDhiz14wH21PK5SjxXQiwPQTQV5z7m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FfQRKF5ZSUACE6briHsgbfcHbLF59nHydoDCnHuJptaBdRi4KrrEsrCXHXiJdTNNZzm2PQBLhafZYcoYSmhLBAr",
  "key1": "MJokZMbCJPvKiCs1iCF2QgAMM9PGVE3Efd7JvnBN7JHhRFcFGcQnu8v9EAncf9L1Q8d7GtiYHoDmSkoBk6Qo79r",
  "key2": "2YLYF7baAGk1pmeob3pE98bV7qrqyEXks8wVDwtBHJJwuwnjfivpkyEUWh1xB4uFygAPx4eRwL6sSWEPtC3cSGCQ",
  "key3": "4KeSBmmLuxrpGVdve7L8meSK5vJ25LqBy3W4pFoWSFugWP46BxEs12ZsukBLAWtB97yxTaizfnpAxAiJHUEBnsEf",
  "key4": "2cKg8WE1RwwBw2QkNAwLUV7rK6Z3ooXkLj77wGvMH2vg2WTscYDgLgehnst3avW74bpFLVrvRj8EMdLbyHwaH45q",
  "key5": "65oexYfKfLuJ8hukVUUD23dNjvCeQUiXCLnnx2LM2WU8wj9Fh25v9NQ4SKBDPtPAzdJYJ5zHbTukMvs55mAdALDE",
  "key6": "4xvRLMNUaeHXsFX8CSd4CMyooUCGq8fC2x2tiWg3Fo5eX4bzZbeBuqmZZkhaRBu5dasYgAXvuABmrscQR5DTpDPT",
  "key7": "5nR1khMpmXucqsWRdizHXiTvc9a6uf8to3r7TeNEniJWW2aZ8ZtaStU732subtJevf51k1haqJ2YC7LrKLAVnDY6",
  "key8": "4yKzuFqvytJeb118xyr42xsSWbZg68hJK27BV9NRsT9PmhwYEizma3Kr2qhUB7Nr6aredrHgjppY3CK29eHYMiww",
  "key9": "2MmrGEkmfmfZ7hgAGpUeZPiptMqa9xzmtTVTpQjvXAevNMDKspQKw4YngdhQQxzMcyvFRiEvmTgg6ibGme7rr8rq",
  "key10": "2GkXv6d7H4AXfCCjRbYWG4rMDEbriWEPthj5KvVdZYvvd5V8RVfWwpfoMfFM6DrKLe4tBH6tCADDSoK9eExBp9Lr",
  "key11": "59k7NsvAysZbWULSPrsvosGdrcVVb9AoaGtXZobU2CkWbTYi18Jsdm2XBeu7z9fwidtv6sZ3qPCBwWUHKAP9Xftx",
  "key12": "5eVzkFDA26s7QyrJsviM2yJEsg1AnQhLJhG5Ryx7NzLnGemLFG5HfgR3DPceTAZ3KPEb3E7qBBcsCpmkQWBwn63v",
  "key13": "2jzaJR5SMpi7ZFrek3W7FJaiuEagF1HyzB87PZHtdaHgMo6PEAAaokz5C3C11MNxRHDVXQYwmzANJbRgAC9wj7rW",
  "key14": "tzBP54YGAxKATXxUSrt9Pgn71qoD69D5bSCbjcu1hHWXc6BsGYsUrku2P9AfqnqAnPaHHfnSFPEJM4TdvBWDLRe",
  "key15": "Z9LCz7Z8eV8vkf2LRyxPPjJxPHzJpbPUoZMEaehfV3kR6uUhh7xmPMmmAE8c4YbxqYtahYpRmHMNegHJbaPGQJq",
  "key16": "39sN9hiB3K3A48cM4Z3rtS9jt9kxpgU6oU7aNq4sSvW87G5s9w9eirqzPEARusjbMpbQpT4CsniwvCxmkjZMx6gj",
  "key17": "xd3FCVwtg2DSBdHAbR7rcknkpYZrhjnwGD4n4PnPCRW52ThFmUB5twzxW5o6dvXEsQLZtwyFBPq2xas7KZGB3YV",
  "key18": "4XVbb1hrnnvsVG4eEvSycQDMTFfjqwgstt1NYfSupsE7Rv8pKXxzMAc2jK6ui6L3QGb1ZjyqrBoo7Wz1neFg6m3s",
  "key19": "3AtKUYjmkggBojjX8JiFeXct3qovmkhVv3Zef4KAgs9ehPHQgY4iRfjhwoGcti62cJ8fhciLXLuRaxvmhjJQR7LR",
  "key20": "3g3Fc1jcfAkSA9kbkhZChMqZ5BcCA6kr2xgodwDGrDGJgxNCL7d9mmPCMy7xtm3po5BkDRrAc5CbYC9YQdb3bVuT",
  "key21": "dVo9sSRyFys8V9pEqA8uLxQmpJo5R6xBQhNtaCQmUT8e7MuDD5bkEsRmg9L6jPKNSFAN3rPu8dshNq1ZUY5J1Go",
  "key22": "5TefVDcxwkDbJBZ5rqMHnyyj5qXJpLhRS5vh9riatV2mVMLVv2qYF4wXunQwFqp74grj1uwkrfdPi3SsH237egFA",
  "key23": "5pSV3vbjYrhmDg15W9kmPFbn34unuFijpCLysyzbiJwmN2pozpckWCRww5VGLn2E17ZGoWmhKrZCMdr1eGTHCtNr",
  "key24": "31rN95M7UhzSyo49vwzSRBiWLNznEbrk579vHHBBnJ7ZgsGHXeTTwv4jG9P4SUnjth8fJhWM93y15aSJzev8jPM",
  "key25": "2cqGRerw7jofapc9EsfDQ7iM8gbERp7fLiFXQasfUXymRmKJKsgfT9sghVZhFCJ7cPQANVvtgB6R8anxw9kZ99Jc",
  "key26": "4MtCgn4X5ZNpFo3qACWFrtoEvJfzA7ZsmqnsDqSWbrarkZATTkmYo4wTwo3RVqovaaUxkzWK4iNoPrEgufwQzawC",
  "key27": "5yRSP7AnUXrvbowCa6QyWm3BdRgZ5hQX1EX5GwQohKiEGhRoQmZWDKSHhjEdd2pTr2bLHWNTqp984VBF9tKDURVY",
  "key28": "2SsmtVXa5FsrdUeiEWJ5ZLjZPyQpwdRjA5RdZDt8guHAm25H9HmoDL9q83YJ4zzbhBPWTAVnwXiFojdctvsmriko",
  "key29": "22gvXy4BEW8wMZ7iASGrmH5waqUL3NMGTqGWHH3x3GHAtCakmvp3r8GFKH2zTbHUUi7AdR57DmLZWhGLdadAkS82",
  "key30": "4ixgApnyLi5B2V4bhM8HqcoRjpZnktKxb8TK4geFNQBjLivTwmKaGvKH6ifpnn2zjWbmeJQEBFZJhWFM589ECgzu",
  "key31": "5iy1b9FiT4SkTTccW7fTSjEwk8yj79s34ZLrDDzA7uJ3K683u1isKbfrRcdDbpcJrFRuEh8AvvAhWDKeKDeopJMw",
  "key32": "4tP1WgDhyWJf6SoiZVj6stWi8zhZnRFhTT3XNFt4DmBgRJ2MDqTz8pzsURuAoU1agckoBe2ooD96VuAF5w9ZoDYB",
  "key33": "4A1iKZswAnYr3ejJTtC9h38ntBMGG3uLmXYPUmzXnEsS7jVuRDnuB5XCUVDstu77SgEtH4oDVLrhsSyMjF8cHTuF",
  "key34": "5DzvawpKS6DdtSpTRMS9Uuv2LPSBvh9hke5tvHqxSugdfwZMFcqXEGFm1qAvFsSFA9Np7BSu4FiQgGRbUQ2LHWy",
  "key35": "3hGRT4pCHVdpMhnt1A14uijiGFfRVcfFAHUWgS1FKtzwqfHctaMGqB6jdoVgC1JdksbWUVZygbRnCqpVaSRrsDDT",
  "key36": "3YPyKQ8S62sdvr5ZMH8CcbPPiMuv5UHeznKP89ekZZ1KexuyXXWsWJ4mKxGzWHosrSdkJdgW2H2r6i3X12oGJtwf",
  "key37": "5nVc8jVjimskAGGLhtTA57gXMXJYyBvTkDQ5f6vkrt1CrNsq4fARVgXmvr6sEgUFykb67EFaSVM99LA98LhK3HC5",
  "key38": "532Co6URchwViXRbmwzrFYuBqMPaS47bsn7BZmUpt9KyukgY9SoB7QiBZweiwEG9BwdHKtbTyWYeQqJKuMp5id1",
  "key39": "AekvsgauMBT9Zczp4gbrWDdRH5SjX53n74BBYWePubzg8BLfsorhxZuGddS7RA8SPk6cJHi1FuteTD8NRiTMHjg",
  "key40": "JGh2f3L6691hYhG6vooiymJcCkVpxS1BpU4rAvbahXAx6DfDeCUdjkHEzUmsjtHhPACs52Fv73VKgNFe9RLgFic",
  "key41": "3uSWbR7ytdxLDvk4Q2DcBXrz3zLTbbMyYWd6cy4J5X9bMtMK9ybuG6NJmxtxraVn1C9f4W6FVVVamteCP9QKe4jv",
  "key42": "2qNfoBgm58y1wRmjVGr9ASP4PyLWzkWQM8PAhXPCUn9bz4kY5oiXdTojTmCYBxD5UFizDRpWUnURNNYRG4CWcn8y",
  "key43": "DzFaSXVYWN34dYBejCNhsgw3dLAK79T3sLfaECTjjJi9ztChWdPxxr64GrhzeJJsCNUB3DDWwYfMWxBECsRXRtg",
  "key44": "22pCAsoHb7Rt1PM8MrWDLFrJ1zDmjL7B7HdBdEqbwVS8oz26R9HDkrSA9WJDEKdhDufzrbRY2RRww3cDNB3Jf5ND",
  "key45": "3KboJFgWtMjyd4S3tCauAV4qyCfgrWfjkT3Kt3y4N2a9hXovUMpDyuiBhxP1QzH1E82ZxmTAjnhKLFAApK4QapJn",
  "key46": "4sz1ke34b3PGokn1XnmZMZa3G4pmWQxTfkJoB8TgmnJ8MThzGXv8D2mgYJSbkkHMLHoPk8yqzSmKFEjQL2ayCK9P",
  "key47": "5eHzZdmcZaiuFx1zqbrrhEZB8GYgU476EjKJdZUfRad8EPupYgribFEcMgMN2vouJK6642UfBsyqdMMitRpyXDJo",
  "key48": "naq8wUBAHiS1npwN9CMgo8Mbz534VnJ5QYVa1rF157QdM9LbZxovd131cCSi1KHRZ86z15Fcs9AbkWJdxKT9mmu"
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
