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
    "3TGDtJAk6d2oeJKPTedXcwJMh47Agp8G9k1K2GG7qcbT8hNUvR72ehgsrkb9sbmf8VRAcNS83VeVqWzBmMAytvE6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "K8GHpFWqaJB7VMZxj5hekXEtzFe4W6h2B5UcBMgvMHyMP2HX5dm4uhZo5AYanQf92etNLf1srKXEw7sRSLDhK3m",
  "key1": "2FzAXkVcxBFfeY6ZAwKBGywqWWYzT4fbTwmEJ63LaMMi5XK4jRGFJ7b8FhdGoeQ3et6cKkiYZ1svVob3CW4wJnAf",
  "key2": "3fDV7mwJdgMt9bDSACj9bJ82pcYeixzSn4hqs22LceyEqCp7dV3XmiNshjyyxr5EnSR1nG93rQ7snFrHwPcsEGZc",
  "key3": "5RuKJp1J7ZqKYsb6jWrrF7t8ZFqwPcbocyb5EUa5pN9DhG2JF9gQazahkohRVirGx6kMirJygptCSd5YWovPJjcm",
  "key4": "3pPfdpexiuUBY1KfzZHRtdnmV5XjJSbYz84pu62zEr2cVJWouDbZK2c73Y75op3E6YmXJrgEHmLNfZFk8rcWFyGm",
  "key5": "4enSA3BV1gi9gXX2isZkcXS4awDRYubDnaswnqfWSv8gk9mtuxEXcRUEvFEQgrFKid4xGQ8Q9hSKZakbEY5MB3UN",
  "key6": "3E5ozdggohoyd5k4nvnHnANcbur1wqkc3oT8PJ3q1HaWP1beKpAZQUtAETGeBaBecj2vZkTUZFZmSy2jUvZm9qH4",
  "key7": "3uFBhuH9CHtrMjyEhMHeuLZqpThuyyJqPrTE78oQdUifHeau7UuBX7KEkqGoMSPQbuMsmVudjrSYGaXdTvMoNTcp",
  "key8": "4nfPGvbHrBzgDUUtF98s4Ceb8DXSUnteCR1arcGwugThJKYdNcG5A2ZFQXxAP66hK2oUhjZZBoqBFZkoWqjbVycj",
  "key9": "64X7CBVsgrtTkNc1fKUTbZNq8nw4UGkoLszf3yaCxtrs58rbm6EqJSg2EY2JUZP3cCi85KMKEdh7436F6tDxJkiB",
  "key10": "5rMw9JgNVapKgNb7Qw66BACXSM39Knjad5x3A26tjaXABCLjwcGUR6jAz1jEtQtXYX8jant3oqJL3DnEwiMDbp9y",
  "key11": "55Sq5se4YoiCqsD5MYtsBMkGqR9dTrdyHdpUNaGoCykfEeiKohvAuwQTEwrvCYDkjgv3F5xqgPwW2K2B39UPwnzu",
  "key12": "4cNafBkCE3zuzX3nCFyaFXs4Cr8NJeiW9FVmuAzPKdT1BfyNYXXmRoDcDy9WLDXgTi6q2UCej3NG347nQtvWb6f1",
  "key13": "37TQkCRCqEsVo7x1DDGNDMrQzivh4ZdMBkvBMv71jQBK8rxmLJoQGbhyUMfMA6oyPYYZXYPvpH5XeDc4sZ8iyWi",
  "key14": "2fq694dNoQsWwebdhQ8pvB6HB47V26jd7xPK4uZsnyvnhH9Mj2guLxAhE1NtgcZznxJcvuJdyrhfmQGG1CuzczSX",
  "key15": "3PBqwCa7pPkHJB8PZY4oQhPJMdnTmXMTVUXhKQhc5hEBKJQiDT7PrPmNEudgAfLc4H9Aou7W2kQo13UGSjt4pZXo",
  "key16": "38qzHZUoTrY1WWCWXwcuGW7MVFqV2JSgFM2Wwv35zhq9amazyrG8YWqzqxdvsRHaCYh28KbyGZCpceEBBPhP6hRz",
  "key17": "4fGvVb4xPa65SdqhtPtzRieQLwv3niaFzyrb6kaYXTpvonH8uGDoBk8vJUwybXZMrEtpoqHRMsXSUYLTJMSNz35b",
  "key18": "3mTXFATVerFEdKwdhBtPf8Bjjh8wTtzBbxm4JQJDvxunAr5px1qf1LSLbQPgwhTYHpDsCy1aUxjCzupnUAEAbtf2",
  "key19": "3geC6eUF4p15QwTEG1sTzQy8zht24qptZLGzEci4wfUxWixUUPFLpqQB2iHrxE2G7m4yVq7tFq5kPLxuchtixZTC",
  "key20": "2DXkXxiebJH97q25XEt4udzRXH2AKbtsJ8L5YrsWYUg7PC4E9XppNxsU8hKwVTgmDkPjcMd5Tf1vWSqGh2ZXDQEc",
  "key21": "65HzqaQFDzVgPgF8qYZWvVBAbKV4TrCbD4KRK7GxUjoSQUXXpc3zdRU7RGbuDNVk8gK5ZNxvZQ6A9GfA7xgqq237",
  "key22": "2EFzHuMTQV2xBVBxjtd8HgGufCy23ydKBcNrNvXGWt3uCaqgbgCMsU9h8SGYmhATb3s3aRVxq5jRTcxdQ8TrhrgK",
  "key23": "4jCg8GBNNzKA6UDFaykoEXHyZa9YJWZzXuTkDjRBf9jMAeXW9KBYoqqgkgaiTiuw5ttAUkMbVKGKfGy9DyvjQgma",
  "key24": "TWMu5NQDNsg6E72x9mexpwRemJ24FU4rk33N4t35LPavfRjYh6LYpkFy5Fh5eAviUEgt6SrXDJ2Ydn7AHkMnJGu",
  "key25": "4ZuyZVg82GvsrSBqMApKoyiUgGGWFzm75PDduDX9KwgWLYXNUmXKebizVuNjh5wEmSiaxQgszoJyHHNjRnzEa3qv",
  "key26": "4bdM1SmYNmZPEvWb995xPsJKqENw2eTbBpJA129fwrfmRkxQ4cnosRhGrFxRNRU1odAXkUmBrBP2ch9uErTdEjFq",
  "key27": "5uoJZZwd7qxeimCJyh73k83WCVSsgWTddQTbeq9pENqwwAYvfRyzXVWpwzTz7PsCZvg7fieMJZ1H48rbhop4xTjt",
  "key28": "4JJaGZKpSP1CCEXDMBf4hiKohAQ7PtcJJBPF5rN54Q7PCkH1Pdnmb43znrwx9xrdAGcPD8Gdc2mh3JjYb2rGUkf4",
  "key29": "3mZ8RdSkVNedWapHB7rSPjB1ZGAvh6bHc8gnu5RttRbtdfQ4MVSHUto8KVQ6Zcn8uZxHGFkvTiT3bz3zMjmAm795",
  "key30": "5o19GaYZ4E3kT71tQp2GgMy475QW4hLg1fbDSoyfvP3eR3Wdh9mAyrfgqC19GNTVSFBqJRPhn9ssx79AkoSJcXSk",
  "key31": "o4fYZMvxJvfRYwXg795AYeqJzUgWmkLz9mzCcP4Vj8L4yp5jc4xGTLUUXg6KuXjK2MqVBhrPArTNiQaNrRM17qF",
  "key32": "5ikxuFMASh1QU5xjaJKc6RXhgSujwF9ZchJNuQExmPAovLuVEmo3XqAgBqbEyVzciPVKWe5xxhEUhfQCuUuKDkT9",
  "key33": "udPjs1gLu5FFCEEqtaURZXBtPCcuTgvJV88NK4zu6e6PHXREvi5S6834eY6bGy8JzRv5rXCj8CmjWtJU6stVNLS",
  "key34": "5GNndVvs6gXdbJ5yrc9vnGGJwn14QGxNGbDVwi4W7fJoYf4VnMqEQzR2CWcx1TzcoWcLkjNsduGueesjScr6cHvR",
  "key35": "2RkP562mLDBp9mDCN4Yyx99k5ew8wPwoDcptzbgECMd5C8XyV2FMpvFwodUVjC3gaQZndZhQH8S8hUT8eqcGyhmJ",
  "key36": "2f2nS2ve7wKw2qs7aFiCMcTRuca11x1E5RwhNedijW3hRpRQaoUv93juhdppm9CgKiMDMMd6BaThhu5JsBCzS4yU"
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
