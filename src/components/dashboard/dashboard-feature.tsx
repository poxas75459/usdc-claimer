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
    "59yQ3DdLBfhAo3EXiuw7uXnNfhHVRXFyn3DrSx5evCuAmi8Cqmt6VPE853H6AZLg1hwNe1MFGM2Lc7er85ABnbTW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ykbQtySZrXE2oKVK7kSSDcqajBLAij5FX4U6gBjtumAkxXX11btBMXj5vgB8X4NWifxswJyAQhyi8qgC9nimgMc",
  "key1": "62ojCCL18B97zTZpt2k1qKDFHAvzEfZoFdEDSoNxsjnRqEhQPNXbf4rYW4sWRWYYixLMvcB8QkCZ5B7SUos8cMmc",
  "key2": "2qEYV3nBhQ4apZgCUV7Fx4RaJfFPCEjvRaWsXi1PsapuKqSeyj1eaXPfdZV7b7Yzr3mKafb29Zbr7Lx5KQAkvPpS",
  "key3": "2srZK4VnyrzPot4C3xr2An3zWUvj8Nw9smL9qx6XTrpe7ZPyTN633U4gA2MYowS3ukFdEwkKZMpsigo4V1VNPLam",
  "key4": "5RBaJfhfezrqWyNGT3JUT76sSv4sVxz9knWz5eXczGuaNipmVSLEBqKJRjuhgiN7z8iFYGVmqzZj6FGSo4eeWmGe",
  "key5": "41EZcVHtdm7YosMKvJgH3KC3FyiupSvpD646bJmp62KarQECeazoZdncfEz7gDzSXiC4oHxFTP5Gk1coVjReDN1n",
  "key6": "5vyhH4dCeTndc2C4pCWBeP3C59Kzb9iE7gwduhquHmF4mc1gSmSeNGrHsAkQuMB8ohmEBPcBRbpchgxik6eyXEU",
  "key7": "25LR2q3YYYSQx5FheJiouKMxN9ThZR6Z6YbdVB7nvCc5x5weXGmssAhHNuVFZ4eGyYuajtCosnnmXRJSQtBiM9kq",
  "key8": "23GQkkqnYvjjMnDGKTf22Cs3ATVX6aehBseRgioWty2upNtKrG4eHeDb9KUoFiYjqJ68WwVVrCuY3EU51eRdK9rP",
  "key9": "GCCFCGyvx3urBRn9EE1djXwuLj8sJ2t994CNvcfaLPiaa8fLpPEWqZxUDHP1QaVkJFhE5YG4kTkW7NHQVWBzbei",
  "key10": "3wppKvaxdEkBK6MPPuNXdaXCG5mkKN14uB1dDCbaXe416UxFiAo5m3pb8fJLX9Ei6WWCHTTCg3TiBUpvYg8WJMR",
  "key11": "3pcobV1AYPB8q5frU2kEcuZefTMhRvuGay9LpkapzrUQYzViMABdD78acRUyR7s6t4n714xBJaae9BiuR5XWhrZM",
  "key12": "5mRs57mJJL1JLUHawWoYgWDpM1B5KidyYbdLL5Ds5hLpnCWR4LruD58HF4ER3qrc69F5PjqyxoBNQfWLk1VPXeXJ",
  "key13": "5CnRvgQkvEA8sBjFd9iqkxexZtJTHM93xkzF6mijePdcf196suMGgsbGCbv3DFMt89HU8fog1ws56VTgZwcmYEjp",
  "key14": "3rBKPqxB827YrmV6nkDeVfLXKCNeYV1JByoaa1yjNeNYnCuF8pcfttrodrUeLmq8pg8iB3VTxPFCDTahjipA7YSr",
  "key15": "47qeT4qhQtwaMyaq6fgqKc2sLdRs3WobyzcRhejKdV568eHpHcE7D7pm5jFC9u9oNVE5Mpt4UCXch3eod44B8mg8",
  "key16": "4oSXrH9GhWrdWKRpdQxPgAYDnWUVubgJfKpdM1KerNSF6C77wfaFN684ooZwtruZVp2pgJxPRX2hC4Vx5NMwDhfx",
  "key17": "3UBR399LDQfjCmieBefrtCFFj7i8p9rLwNd9gf4mFzF9MHnx5XjEhhDbdMgD8aaXqNQH3nAGVQSwxWff5r5jjMNt",
  "key18": "3xEV5Chyh8fuvf739TX5pGFN1T15Uv1zAK7jQi1oByvVAmp7QySxvnbjx1vELofcYjVC6Df8cNGbGqnAeFAnNVia",
  "key19": "2YhwF3VC1Afqbpccu2aHJGFb68A8H2smX6yMYe7AHUA6hf1RVdkdXsKB6opWRgLxWdCrihGf2nf885Pwd4jz6bPP",
  "key20": "3R3ohBXTLaQtYNMnXghFbc2kUwWJwKFTiXLzodYMGEAQh29ZnFDmGnhQXLHaCAbefiR5FP3janCPQe9MXcvndmto",
  "key21": "5z4fKEBRu9E8ZcrEXsakvcBoDesjp4GUT4HzkbosSbK6UKQEaRF5KGmuSJJM7DrT1yLLGXhLrj9wTe18QRqqBzh6",
  "key22": "6fKqNfPdaA3MDfFR4YntbyvCmbPxiM9U6XXKbvxVtcWr9xragXf1KF5cRrBjASZNJ9yP1BbACjFBAt3jNbUu2Yy",
  "key23": "3u2GUERBen7pBhk1viP9dDs1AfdpWBqkVyEqNqenH3u87TrgdNMftkNytMNjSzuvQuT97B6RQLU3QKgVEc8YFxYq",
  "key24": "4Lb5JqKc8Vtn5kYduSgfiwQLyDAXx8mGaetJoHT5HSDKFcL7Dzaonj351PDYA7VifN78kVemK7xjSBkb95H3PdeQ",
  "key25": "286ByYDa2BnzU6Zxjb9QdAMFqA6qag1icWDdkRfvCTyJekPRRmqcmateBf2zy5RZmaCX2w4VnGu4Lk8eLvTJFTbX",
  "key26": "4S9ijDnpVxvLRJDJ1JxdrKHZDc9Fw6XcfFxm7xrdECFBjR5z5yJndhBtTWGUNpPjYgadvU5MayJ7FRgbrLijGMnz",
  "key27": "4RxTiWLNaJRgfrPPAL7TcTZSaySGWnrKvJpoGnRnjdkZuw9XbPKbgeH6a6jqHuHCzDNcvMEBd3uZuVTgwh1JPSfD",
  "key28": "3JHBVKZwqaePfxWgesktLedAhNEYXRc6bRXddYaz2QAEhiBGsGd9SGi6S1uQ6z5qXGP5hxZRfJXurVqjspkDggGU",
  "key29": "3ZDhnkQz19XRVmCZoZR5jv5bgfyfcpUuAcbwaRh57pMKNHmos5gbUHKkJ5EtEd9nukozALneNnDrLtcJYECofMyT",
  "key30": "4EVaD46HWVDHqM5FJTttoChKVcEokgAmHqPk5oCzHui8bCgBrXEGsmJVURabYX312NpnEzdtuiFLRF2GFEkUQa6E"
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
