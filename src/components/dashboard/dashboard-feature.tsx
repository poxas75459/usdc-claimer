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
    "J5wEsrnCcUfD4yhYr3UfZsC8aABNfHA3skULyfEkgqJ4otXUm5mepRF2vmAuwnZSA83714ufB7JQgmvWRTjC9Y2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fzx5vW2QS2A4tpnMcGrL9AaBqG1kFwt87kL15iNXFRuM5ke8vXtpJ9tRZrYHjNcuiZf1bj8vrfX44uEUauTZRrv",
  "key1": "4MyCYcSPdRkyBUTuPf4xNPLHNXA4feztR7zRaTUavUcvkzXv38WrXeusSbWkchJrid2kaoQa7vPbQZDAsgYqWgQH",
  "key2": "2WKv3brqNp1GJNFMwV3UjowAQ6e15mKTNZzpkwLjVjgGKkxb3dHMCcPC2T3Gn5CVC6NapqNbAzGRoUoCNEcrj1YZ",
  "key3": "5iMztbAt8ayuCHx975AJGBUcgXyutZv9hA6pw5gR3q6zZss29oECm84BkaFNE7TPYNj3Qfc6qV1xsjfLmsKBiH4E",
  "key4": "2HJsYwLhBakDHVWad7Seja7sL1ZTx21nD9rpURve8Vv6Fonz9BCNiNJeQMbAAf5tWbpY5KtDwJ7oAt7ZFynfmWRH",
  "key5": "54C4RYNntgGnuHv71FJD8KswLp21s3z8WFWXeUhRovKgji2Bh5YTsJfPkVmjbu1eDufPwWgZnfFZWVMFn7fuT3bE",
  "key6": "2tUXpY4rSBzsvT6riMe2esxM4ArbhsSkt5Y3EAtrnfy5RpVt65SkpKgXftCdTVqayaHt21sxMh3rFUXxNSGndDRb",
  "key7": "CqH6bADTdfJuMghEGMJjFpUWEHwFU9yw9jvAjPzY9A1gzoGE7kho6q8wg8jY8QJNdGk7NvTBMXey6BsW5ARmsBx",
  "key8": "2ZioiK8zNP2tEfjbFtYhAF2BCpYAHozdJK2LuNYgDA8pc1ogW5QF6cWFiKJsmKUjjfxr8zR37q2n1vz8MudKWsqc",
  "key9": "5fDdQKyP87at5iMd95BbeY5FrYehiLvL53ecKhGo2j9W95Qq9uMCMeVufW2ruE4mZUCSctJEJ4tkqysPSNy7M3xo",
  "key10": "5SezUJKXgFZWiRiUzwfU7NqZ4xYDxy4qubvSAZQSVQVjMSQWg2iXvWUsjeD9qCjsfngXnUg8sC3ndfA8wvCUdAsE",
  "key11": "4BQPDXinLRdRpW1EXdZ7V2BHEgrTXsTtkeFzTs7KAdjGPUX4WpLgQGZ9U1jaQ9oB3T2xDkGp87tWPSuYJwCwYfU",
  "key12": "2p3sA5SY8e2LhT4pRgsp5hidpfyNfNWju43Mvmg61UqrDLRKJRGcBXLQrAC6ue7qbh6HWEeqAHpHRmMUyBBk4kYx",
  "key13": "5QKJ3g7U3q5CeCrKSL2Z3eL1QK3xsTjpnysRDG9a52HJJHTTTQpFosTatz1aruyKsFehuXsWzuJQ599A3rWVzxA4",
  "key14": "5vMoFevTG9nDviJ112VSmrCgUFGYc5LeUynXvgUTKW8hcx1az1ZNJRwmrZDpEJuGMP1RWZ4nKocdSUVEu73XK1Ju",
  "key15": "db6SHwefSThHX3bZAxEYuwvjk4MqNesZpKXDj84GMXnz565ZZUnhZHUvN56DZDAZDjaEKWmiZE8K93Xkt6HuAxH",
  "key16": "5HX8yv3eeS2SUUKspMZcaU2FQx2Rs71n45KDhwKBq9paVkpDXvvRQKPew7rSnUnXUumLJrX9XNxdS9zXsfEk2V7a",
  "key17": "4CsJE1SwJKic2a1dvj81ybj4tyzVauLud67VyASvQxSPSHDUeK4u1Q5Jtr6mR6YVoKJSq88WfGR68xSMbZ1jsvwD",
  "key18": "3jceQr4e781RG2iaaZA38fpxRMFJ7rZpeSbUNDYNYKEXGqSmaK3aXuSWreXmvvPX7op7oyL24t7EKfwFvD7P4VWs",
  "key19": "2AnfZBUBbYNqjaxLb6N3cKCgKPXygnHb3ZJipda8ZuHktXDgrxPYWn8QXsxge4DEqZ3SPuAcjx8vhmgXk9PspQTu",
  "key20": "36hk71ZjJVfjDP7hghA6p1Huh7zsrxxmMQXfEPbdKKJUMUu9kYLZFWWw3piPBaBGPKfn2w76uQ9rynuLY7wDQHun",
  "key21": "2oy3Ru6sBAN1BSa3qWSmchevN1uxJCZ2VHM1JZUXr4dydkqvcKML9TwejuyehZGV9dqSS1SBq4W3FAyWm7UPFnzm",
  "key22": "wGCcfrZbY36TPdUEiZcEEwJ23zavcaqF4HEwYnBu3Myw3sB34VhLgaGZwyUf8ie1XFoNS2996Aygg171fnPUrwx",
  "key23": "4gvchYi2TM74PVUXrFZQBdMva2k2SMF5vhx2BNxuFtmc9ZCu3cCZBdFWVrk2GYJ1cx4DEr8f82Z1hGMTVNV7PdSC",
  "key24": "44KDezBMBnvALnUNC5CsPntd6eNVGM6vUSoz9TimnDDPbpNLaTNw6jNCG1nQTS8q8xAYhMtNXhxDbLCQ1Eds5UXv",
  "key25": "5TqddPYva6Siyf2GjhLkFFAL6BY5PU9T6QMggLoCPHcFkMDR7PKjJ7qbNdi3y7fw3n4Gpajuhrx7xuizPSY9kU4y",
  "key26": "66PbSJTQoStzysvLnvEbMyjfpncGZ94HgaxzgZkdybbwE26xdMMz7SwNKe8bemFUggTuNHGXN7psEmndtVWTaiT2",
  "key27": "5RXSRgCZY2ZmuPQDvRXGf7idZWmBEqS2y6NWGnJexUH2HVBcYnbpUsFcqKX26La8kvfzUsDFyQVkwtvLPKCV3Egi",
  "key28": "5uSeu3xd89JynekBFiMD6TLRs4977FhA7aSZSAP8L4MpbmAnM7YnH5frxidzvYmiuDnHyGeGsaEF7CUZmJiqwD7z",
  "key29": "5cZ1uotZBbpxKnk2UxsTmV8b6fYzq9SVEUobYNfdjLEfTKnWtqewk4zpZycJayGKyExSmTBpGdRcDyP4bXt7i8hV",
  "key30": "5TmKpaED9gydKYhk73FBMQA5rJK259ytjo6sManfaPx1KUtrFMJ42Gn87n1X5kTjMJuiBJPr7JNEr3ar5ELB6mo2",
  "key31": "3i4X3K7WksXa8mD2VY7abPpnGhFArSrHsW4GTJU9gD1bjJD6YErGfA8Kj37FxPU3xKoJwoT7yrQCtScugmsxZ648",
  "key32": "2xCBVzWDyWDsL1PUpjoLFTuWtqyYMJXfdS1pL671XSaagaKdQvNz8tseivpL2h612Ma2TNRnvhZL3TZBVHhrCNxE",
  "key33": "2ZK3qhomggvWZHJFtCrjXaarUXHbYkZExujNPDpfpTD9dwFr3Cz3YQBvt3W6FbBbDCKsfQuZAKxrZurDc3mLwj2R",
  "key34": "43qMVKtn5SupF6v4PNUZ9pLwZqGFWztRmzeW8iG4uznwrrAsSFfMtyZuDT9hkwFosMiJYch9FWkGVMC7nvQUjzYM",
  "key35": "fAhYcksw99EvVgB37TNeNej2wuT5cedAr5BvoVEyLABUbb5S6NWE7F1yXnDoc6TbsVK1kjdpTeYhonaxKCirorg",
  "key36": "4HNE9fMX5pyjMpyPViRJcgS15nsd7pvaFAb4rs1896CFyqpJVFKPqkwxJZJhdviPqLMz5e76xm6gJXTyGkMH7c9L",
  "key37": "2Y2uMSPZGoqEaqSSHrogYq1Dy9ssDvtPDbz8VdbZBowbmhC468gsC2kD5zoBmGNupFjug1AMgoCxMGG8vgDab2sV",
  "key38": "3rPM6GLkgtSB8sC3WVFQM4wDdUqbn8VPm4x9p4Fr6hCQcJGkRCA2jMjyRM14x7kazGax9MeXi3ayDzHM1fmZicgG",
  "key39": "bmzYrmEvYq95r7wV1nF5zFgAWDwBfq81pKBREEq3AgUspNjmbGgYPsSocvWViEAz9kS5aeEwuCR9Uy8ar6E8xg2",
  "key40": "CwQwSH3B3qPy7dZr4Nx8fnerjR53KxoNVuPfPaX4R84rmdvoYcfbF9AmtCkqpQBFtf1pkHHRDR5UTReV8ccNpNC",
  "key41": "21aHRN3QpAPzgAHs87eX7GhX5W32fTLtcSKsJPuWrmhTVmaRF7QPxnu5L5MB9Xy7tsDsHjMPz4CzG7LLmwfqB1CJ",
  "key42": "WHaakqwPCJ5KJ6zCBpGnMHS2pcRrRuWELFho8t1mZ2PmnmudxuUmiGz3KQeewGS7q9vngMVuEZU5ibMgtJvvka1",
  "key43": "3ky2u1q2kNK3DYY4c9Jyz5Hgw7Tp18ybTMsFZz9UnsR3hGKXTv4VrsgfhCip9ddsmDs5nghgs1tRNBo2NUEG449y",
  "key44": "3ynnbb9YpSqu7PZ51qDB6T775knwH1yb7NEzfrEw5kFTHCWxMhYQQ8Q2TSJSoHNEYFdsWoHZCXtQYGiPNyhj5FkU"
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
