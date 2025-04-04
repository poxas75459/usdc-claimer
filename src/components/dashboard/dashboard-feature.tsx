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
    "4Ds45D2Ww12KHutVHz1bDXQbPkSjeeYNFoAagQsepRCpTHbhh98e5b7MuZxEHDSPd5YqC2uhVUU6wjQBzDymHrYK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dXzaxznoTShKcGsqw18npV1Hb4wY7wtCmg4c7U57KxDBiWsCy6FrPHjP1aSkxB6K8qBEiTYgKaqqDFjXU92XevL",
  "key1": "4n6e7AcNAN7YaHv7wzD9Wn8EVgaKu1VPHjK5YUJjzDgjRr7QvPstLkmamELUBeXQjL43Gc1rsdNSCnNm23bV2dta",
  "key2": "2gNBB9iFSYZsHpue91ToN6cpmNar6f2MiFPXmFyEC2j3iQqBsgsehb2dKAz4P7HM9rJtNTo62QRFdj7Dj7EUgGGA",
  "key3": "3bNsofR8qfxJwdyZ29WNA4zZXK6zRnB2NzpzyTnvsUsShEMTaNEXsmVB8LKsUJhGXkTkxTdAwctZc6z8nZjKU1uR",
  "key4": "2fB13STWWw3ybvnQUKr81A4rGp4rSnniwVLWBGbjU2SrpH3RvG82pQZT5mB9UJCE2VwTiZYfqvnjcNUYZng5pEbM",
  "key5": "ZduFWSjaYnd5t925KVcvWMiiwKiLJnRqrBKbpqwbo39xJm8aSKRzozPLsvSy4VvB3RhdDzZFvbQRMgGp79e8ifb",
  "key6": "4gtY3KT2BQS6DpVQSJsRiRaYVX5rakLCC4HL3eU1rDgnBCjowLVNZdfEhfMiXQwZTepcSRCVGt5pSS77DiMKLHoD",
  "key7": "4D5HihQ2tdKrC16ygqzPp4RdopGYsDzpHMEnB85fwBveS4pqoaAT9wzsLkQNeBjsNpkoiywBK1veGUyaC5KHmgBJ",
  "key8": "5198o9u5p3D9MhYUjpsjHskkbqm7jexUTcqMEBap6rLnBxQDCAErdSgYGFGNYSSwvumyoU9e86fyA6wafNVHNhE9",
  "key9": "5KKu2s4pWCVNu12gfWeZX27AEGDVr4uSrogk1xzpCH9VAAt3KNUHsp1P8VuWZZfYUMxzDJ7VCu7hZ2zbVGoKVRAM",
  "key10": "JCHhSrmACyEZTpZ5n8hNj7VQRV7fsMNv2DbbDtYJgxTwhdmqEdHdDq73Y4RY7ixKzreGGnxT7T4KiHW3Jqst7Fe",
  "key11": "3FwgbtaGx9zTtWm8KW6ifwDRLzbYcAev1m8dgVaay8HtPiRyM6UFgmFA9CYVKUZAJkRaofkWYd7aMgiYf7QZon5Y",
  "key12": "3cRePocxEQ5vxPo7ZQopqsrFEokUgS6gEKkcLwqtqZDaZEQCBfvfSf7s3tnmsP7xJwXnKUF7MAZn1mamdwzh9yer",
  "key13": "5QXzWM5WmYt7g33F1ct89eLQRbWZC6vM7ehjgaR1HvnsgmGBEj3rZVY1bU4Ldj5LH5Ckx6e8FC99iNMdD5MsgyA2",
  "key14": "2Y1LC3jsCcoVDJ1kR2yESw9kVw8J9cbmprKLYG7QqxXZAbhqN64JSpBYRBM8BkcYzN2fgbAcWQBx67xKdPGKXDiQ",
  "key15": "38Rkajck1GbiS6mkCqmvUZ2E3WvLfmApaPLGuuM8vipWGJcM7SLE2nkASM1xBuqgmnpFmbE2GaqH7yVULD4weif6",
  "key16": "2Dgo5AAdEjr8cd4BSpYpt8tr5gynjhX9HigCfi96qMqiPTDAPk1JhJXmXSQu7sCeVwBTCzvDe9REZoAAWrNT1kC7",
  "key17": "3yzr8tkoB1mD7meVuaJTsAyUMbhPUiWYixp2nxpdaWzKh7nbty3QsqBm9ZmC3Vnq4Ssewq9VJiRUQA2b7C83h1cJ",
  "key18": "rePAAV8iTCHxTVFg5EtS2hqonuQmBcwhzg3GLKNg3e4RaqA8eVuw57Z4puKfXcrsSutBHiD24YBtXyJ1CzcdK4U",
  "key19": "3Bb8SZe5dp9ExFQeHiSSBPasM4WjHNM7Jwfytzghmvi5D3B8yCvRFA5g5LMmLuDxiJSjHqaru6LSgQuhcmio9zBW",
  "key20": "3BwfpogJVi4StM3CZ7eQgsky7khQ7ZKjyvo8veUzZjnGZrU6UM9SQjxQbyyH9mqf5xsixvr6TJ1YhTKPvrKuLgHH",
  "key21": "4cwWcnsMF5xm8Ki36Yo5W6GWJZhDqyWGxtBAJDzW6wyXH7FpzS1bEWQxr6jfDF1dwtQ74AinMT8C4K62Dh46U3T7",
  "key22": "4CzcvAqryWwrpykq4umwA1P9mJWfUgvaV4wBoanCmvbFujrwq96gZj2TjUyesc1ty68B26DZxNTXF99xj5a742Tr",
  "key23": "3xWfzrN7dx7dQi7iVcQzWGNxoNbQWaKT8mT4fCHFaTEfea22APDfhJEtgRxpAg68GuWH7LTXA4irdVfjsGnHCs3q",
  "key24": "B45TGFqzokpStNwkwYcDNqLMtJnm1M98iEYRknL2CzvKBc15GMnrySo4gNmoufH61LeR8iAXmg1rjHFSUtjcyPg",
  "key25": "4YKoBmxUSoV8oGQ8BUacY5DG8pmCbkeSW6QHXcnTPkX5CE6EKHkzkeQdAPsPqn3C1HTHDcUbrdZLk1Cpon81Bnan",
  "key26": "czWHNGeoMtYBjJ72h3ZTDDQ2Z834CaMUoBaLYTRZDEsPxBf4vPcskFPqHBBnsGYEqtWYDJdTErsxvd2RGSVxBm4",
  "key27": "5WM3G1vBfcYHNF89M6Vs3AXY1w8WyUqCTnwgxjWEnAuyLx6R42jtahsTBUwAsowwRhiEY8hqgzojECPwAxaSzyYG",
  "key28": "3v5WNGpCVe3rdeTmX7oAVGrGiWtA7ZDSLuuvaxy1kijXw77gbmj8QeUVRCuRgSS5anHnPXD63zEwUFwWjF13F47m",
  "key29": "2qgZBdznH2wssGkK2yPaVGNcPW7XvFTrjZXuwAKwUvKWbqYTDzXez14bn3sEg5FS67SkDwGaho7JANeCunnzWM5f",
  "key30": "2UB5fxVgnaN7JrTF53eyzqsTZfJsgWBsJzktVVHRggstKrpMujwCbXbQCPHG2nXqMwmPMRfhmpQTKEoiBqaXG4Yf",
  "key31": "WhMAdFtfaei43CjrjDLmLAwLNnXxkKzM1kL4jNdPr216w4ncjp3zZGYUh5kL94fF4XNgeHNFgaUNHtjM4FFwbYk",
  "key32": "5sNXyWSELYduEuy8nxW7SUKjBPHKMuycKsf6nXkC7QcnkWJF2SMugim4Fp9oLiibiV6TNo1syGCEpKKFE618WRW1",
  "key33": "3popyxLYPV4ZjvuVXHNkWpfumTPwiMfE1P633LXTN4VKLqbKemqqyLLg4p1pRAd3VkjgZPANqfXVRHFzPU1C74DZ"
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
