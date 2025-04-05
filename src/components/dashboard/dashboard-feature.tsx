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
    "4p1RYVnwVUmFXi1ArFKytJeoWx2QUqoaM3PycoE3miqXW3kL6ZUPjEj1YH127d44KQ79HrrGL7ErfSZB2LwUNCMC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4puNB32tZvJn4G5ioAQ91kV96rZpn1T4NwbQkzqu5PdVQVuBRskm27JqpPm4HGY79WSEDL8Zm5XGDMU4pqg9WgDu",
  "key1": "4Detri7QjHGBAVje8T1onqxDBxSximCSrhT8mdVZHSMwZRwGfC7skDsmQB8vB3Qbr8GR8jxwujAB8GuTwx3extaH",
  "key2": "46k6veNq8fJwYQQhro3YSYtS6AzS7KsPxKDe86oZcRRPUbHyXwiVgKjjymUJqaRkHbazrs9cLwoVXkZSaJFYdi7M",
  "key3": "54kqek5ccZQzBBZuuV3gsDb2E5xWhiEpsZQWAN6iEj8Enxf6Kv8g3H9ygSBU7557ewsvpRBhmqTnMHCWJRnoaphH",
  "key4": "2gTVEkmDZuKbCGddNiqHVwoKv1kdFQWSBRwKVtcRmEu8Vzv6K78tnqqySAXBR4QhrmRZZXsfLvAzMJ4c5Yt7LTwD",
  "key5": "2Mehn2nWfCDiWhBcBqhA43qKmoUDSab9SBTDvVs9xUhK9SD7cLW5KoSCNZpBnNVjMPa8sguJuAGfXcvhxVmuKF1X",
  "key6": "4ogF8uaXjT49pteXoauyvJc94bubZHfQHJXvKvR5dj1Kfh8XqiC3wV6d5JzozeXfcA1b5sYRTfKwVs2VXeHF8CDQ",
  "key7": "2i7ruWneKxsDcit9aHPv9SH4QsyojgWJzRcPEXpvo6whTswhU4FsLVx94MTZdpwhiKqf9HFZztV3VKJbxNCqy3fB",
  "key8": "3VPnbCSDy574VtaumAHUB6VMY4hXqPsnqMC71Vas7kGemWL1zpT3tgohomwNVB1wsJXVa3eP8RpjhEwt6Pjy1Gaz",
  "key9": "2DzgrNKzGARaN57ygdZ8a4aqcjJ4Sbav8HigeXCyGVan1ZHUU38vkfrJdEupzBGFDYoRJFGr7EdtBBcveGkTHDw",
  "key10": "oRQMDQS6AwZbwi58RamBZnDUXm1STaCxxMoLdoy4CfioqsWsS5xPE172E3D3nRe8D58DtzBpjEKereaRKAgYgns",
  "key11": "41xnKwTJQZooVFmhaP1S87sMsGt3n4uNAKVBBvL7eDsna8dgzF3YLUNi9mCnb71kD3T8NisKGyA9s6KUAW3mSTSh",
  "key12": "3XCEoimzrPRYpCV3Zujoh9nVLzdX8xGWBMJ6LLW45QBuPJ4RZQeQvH9yxNdmkzPQAFnDXJChkjjMfaoyE2r8fBAZ",
  "key13": "2e47SjbfSzGD2Lw6oSYKQ8KL2Az6CBpM3TQtqU8aJqt6KkaDmfuzQNZLNgC5bRytpnP65kqm222kcqa3vHcaJtzP",
  "key14": "53V6XTPqLiUYzq4nNgt6tP4tCfVQFiDsyAjoywozqfdZSu219JaCUJZGn1VA2N8avs5gtuaFqUGpDPWvY6bJC25f",
  "key15": "4eAVK3S44KtEjXyEwYhiEHKcDNgLejgr1whrNRbdxKaUJ9LFzgD4PDaY2us6hULDtsuGMpzEL6gQvbrdjhNztF98",
  "key16": "424LrMbTPNFXEpwycqynLPdxcQuSFuJrmYVXUJ92RutBBFEgsmFaJyayYxnMd6MkFEErwsow55FR1xcd4Q5AEtCc",
  "key17": "66uHtJ3PunQrzJfLuwVUtdkbv8f6TLkYWT49wQRhw18a6mchCtu72D3Kvc6BjA62e4QaBC8SS6YfRduUc7kGsqQH",
  "key18": "5ADPN6mZdQZSAGY1DDrsKjmFYETnRT9VcQyonzK3bxe9Y54qGJfb2SampfWRJPwEdBUsBbM116nKTarWuuA1oec2",
  "key19": "vXgzgMXzUFxZ31nqdtWQihxDW723YaoPtuBqJD5JAFNwCQoQR2FxwovsP87HAYcrF4VszqDjYaEjV68KRvRkAGM",
  "key20": "5pPzCGhiGbwHai7x3bM53fqL9gUMkmb4Hd2bb9HVb7p5qQMvCZY8TK8hNDDvKs13ZUdRqnZxBZY1ANn9HcXxLuFN",
  "key21": "65TpStvNPR35qZo28ZgX2f38UuHAuUSZnh85G8Z86pNSfoHJARxm4Zw46amV6jNxTsAmRbHRmQRZyUGwaa9TYyLE",
  "key22": "25k6TRyWVsEbGPMhq6rN33XoKoZWjPsmVZwWhRmSqTcEUTQ5aFeFVqxX27cGGmygn9gSHWXEGURfKxtzhcK2zdQs",
  "key23": "3deVvS2nouKtEsnZBy5fB75i91bRbCH7VfzJFsX8E9RXUiNmvKvMALsGqJygG9H7C5mzwAYZXR2amd7PTnPNRdtR",
  "key24": "2UsYFAUATiJC3YnWsxy8shjRbjuntJPsLbLbceg8MXiAKC2Y6JoxCt51hj3cfgJVzhvNX9Q67coPrbssVfKZNdRA",
  "key25": "5cJN2YV3sPsByZBorQmsRRLotUoo3Q9WTSAn2tPG6QASTopHkpQ7cnkeQ5gApQKSeP2owjBwtUfhp5wtJjHX9HCE",
  "key26": "493NpwR8JQgfKynMMy4euWHcR18FckHSQRPiG2vvrbHWb3Z87wQV4AokZcxG5b9o9gF5dd7rByMmrQgx8DkGWYeP",
  "key27": "2YEYdUyAU2X7bma1RN1AjscHsskqWsVP7XhqJKJikvDuTzZ1jhJQjVYPyA6cb1WfWDqE86h2PEft5Mv4ZCzp82yV",
  "key28": "3tjK1husiYDePNwnxJxMrAcxi5aXsX2unmzXYdGfVrhHTtx64qmARit3uCBXYT8VN24pwzs27AxvqJ2CoxfCrggk",
  "key29": "2XjWYVL1gRTHcmpuyTQ7bFXcSZPVHw1k3CdJ8nHKA7PgCHkiECohXeYkKouAA9UVTG7TVt9D9N6LiGKsPuEmPqZo",
  "key30": "4TY7F3aTe2s4TGNTk8R7CDTbCXuZSKQFS8R6UjWy4MxnVGBUqVkXMY4vn86ytp3hJJ1abZBeRjq24ug58LmCTYpX",
  "key31": "2VZdRBAtFBJVWajuwSR3pqHyPjXWgtriez6EmfZFL2BfXWhewevt7Zt57rP6E7kLkM9YcM3NxNNzy7YVPzoPVt3L",
  "key32": "jhMw8peNaa3zrPEBvjTR5rXcdLtSqbECTjzvpYFeawTMRWkx8rh41H6GLaM1xmkErrTN75APQQnYWdzyWiddC7T",
  "key33": "57Ei81gUCdHjZQU2QFetAVKswqZCVf4HpjivzfUnsUig5ARasSfLTA24zCPrNtLUDwcWguRp2ymnc4K32chjrge8",
  "key34": "5RNgM1oVSnoMJVoL4ZsVXRTVBsXzi4PAuPj8YUGX2TxGHjFSXtL3BiJQSeeURAxGATpEi41p835fnxk6FAR2Sqpz",
  "key35": "2er6Rb9onQzQq9Pa7U6fBrYdE7Jhp59zLm91nV1J5HqSuDyUGD9MGW1xd9rizLHKUjJuG8reGTgn96oX8mnwkqPG",
  "key36": "5MGV3W66rw1MhWHf7LCdb216wtrrBsvQ2snd2hC9JnJt66A6m6CkV1rojwGA7qXoU8TnTLSTtAsN2f8cNaNJHm4k"
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
