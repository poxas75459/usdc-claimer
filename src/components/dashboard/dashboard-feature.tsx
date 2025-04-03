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
    "5ZE9Ur8qUWu3mNXSEzcfy54VGsu26GyriUF9HwgdqoNJhFdMQR5f29kRHBR3uj26s8srQPogia3uMzbEb61VwhQ6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TtuBPs2ifAFZDwytML2oQsazyoP5HhdHedWZPNQCaYQPywsyvKhsGsQ8VJttZoGF7TPUC9cJ4ao3QoZbQix37nH",
  "key1": "3VTRFHriuMbtrZhRHm8NyrmsWMLe2yEXegiKWjNog1HBvS6GdCdNSwyNoQkkaEbUD2X7Li1XF4DaRmBhsyRsMg3H",
  "key2": "3ux3C9jB2VFw8vLX8QsQYqZnMgmoLsEJvJvC55RFRhrWN7m5JvNNsrSDPxNms9R1nVx8RufiDtVprDdZwWqVvoFi",
  "key3": "5sHQy5itJVDVmo1JD2zCDPHwHkbyVs1iCyPdjVwt1fjiE8gf6tkB5iJHi7BnztcAT1miBAK4Y4ibMYhRSiipxtmZ",
  "key4": "5JPSKsfqcunkAK7tHAiX3hvfM97WHNMkvd192XUMFCfexBEqVSwnKb6zGQHMoVEjrygNMTVFsnhcbDwEgrRZJRN",
  "key5": "4ArKwDk96VHNo3ZxfQAGMCvPKPCEsn4v5UhgPa7ox8zv4T5FMjdi7yS8SHNpuogwxCf92MRUHYSJvJaXhfxhz6EK",
  "key6": "3gPtrUV1F9WmNBcd1u8WEtSVhhqKA4eVhJwzYR3bF2VmzEoUra4bRQevmeJuVSVW6QKgP5uYkeBLBGaLMhYXh3JN",
  "key7": "5V6sFs9WYg74tiuttwqqXqtRiZvx291tuwexxkRgEQpSiG3ASWLqNYfWjkAe3NhCqaYYrguNUeDndXMg7NXu5qZz",
  "key8": "2v4xwUhbGWFCzCUr2r9r2WbeA3cGhPgpwTnpiN47RSZM2J3QNmWmpQ5A813E2sa85nS8YDsEJ2CQNGCU61J5uEDc",
  "key9": "xWd7huWQDRUC1J9cXagRNuX326WF5b3ZyBxXjC7wQshfQ38Q71HJMyyg6Rr9yygJY3NtxPeZCE5NJbUyruKPivJ",
  "key10": "3iK3nRZ32JqUTtSkZ4kjRJJoRS1sUB8GsEtpGwZESdiHf8d2gEHcefGeNzE7QJmenvrg2FBTWmFHXPYksbyL1CvJ",
  "key11": "5VPr3isNwCHJyHvpkdBDYMibsgWTnp8SpVY98z61Vxuampb3nmhiwyBLijyRcgfChrLvzfCGsT3AUX5WAeZFTjTu",
  "key12": "273v45eU7FNyVMoLHhCTfRn4NZ9NbCtio2Pov4r5gzV5sUrcrvoCmsdWoV3GBCJprzaXn9HNAx96VvBZRsmmscHE",
  "key13": "2cKox6nK6tmPkhaFUq9kSJ4yXhR5YHh44PT2HMBzAPJZb1qGeSKoCaU7DZuFmQELpwYZ9KTVVUMThACPh2GXFXyC",
  "key14": "2yB677vnAe9LyL3sd6Evmk2RQE53tCNhycPSymg6ioCaiGNDi6ziutw1u7Tv3Aujr3adbGP9TJMfF3s6zCGPBGLq",
  "key15": "zKeoXtEF2pu2BAHzxpkZmi5wfcGZVGD5TYiEZn6AAfUnpCtgvXta7XQmYMCajDJ3mziTarG8oP3iY8zKa7xg6s2",
  "key16": "3dEKMWVFtfzuXqPLMZMZa97CZJ1Ckxr4w3fL2jQA18AM2SjSjtfeZaUeECETQvPWGdRhx7sXfgCZie2w9k6tZpgg",
  "key17": "3K8H6CFyhL2w5SgmcYhYTp9YcW8Xe3yu7pWY2E5QbDvqf3xt36z5SUMN2JyCDLj5XMD5Ww6DTRPniQdfUqBSn6eL",
  "key18": "3841ugeg6z5YpKizzWHWM6BDv6KFvAWZ1gwS6vuKhSPRnWS7kyG5i3USoTgrwofNgwUqhayYRNQseHqtN9MAkRDh",
  "key19": "3n761FQA5G8UniEfXXQhdb3nQvERaTs9LEzeP9G5q1DiT2PJ8yeMAwXtgCV8tc1oALrktu2kbUvTPe8fRALFC9ok",
  "key20": "41CRaf9A2QmobNvhbqARyAhcmmEFoWA2SEMfbHYZW5nbX8bivh56aEa7qcGpKgqPqqSbon2kzJdhMRShGnbr8zbp",
  "key21": "tozjXirrBR7wydat5Tj8PhprKaoVcnsuNpWZe2zCwRafQUm5ZCBpNWx89Ts8axeX5vg7L3Fzfozh7EmKv4fT95R",
  "key22": "5asMxppXLBGrv9L6HVie7SjHaraeNCYwaG2wVPZ5myKLyBBekj5rrnGUv49ivDE6PHabKF4EFDfp7ZTeVykdkPnE",
  "key23": "3S1MwXto5478R8yFGP9J8XZ4u7Dm5QXVojxTyZYzmP1kbGaN6NzLSunq2L3bEpUC8Efn7nrWb38zmdSYP6LPaDbz",
  "key24": "4JyKosCazu6XhLvv4U4xdJUAuDieJNResmRUk4LnQiTuuCG8xjfvHX7vKXTKGcQ8DAGeLLZpKMvthrd42xj4RKPs",
  "key25": "4M5a3koC3dncBSW9bESzkebBa29uJL3WnXG4Wkj95ijdJokMYXAQyGSijTo1iUWGvFbd7eoTJjDevKJwrDV48Acw",
  "key26": "2DTnrSqosxaYdyd3sEnoTRXpHXZ4hch8tUoRJ2xsLH9pR81DHAc9Vs1YXaEtVmKi8jCw157iqtNty8zf8BUXe6wg",
  "key27": "2ZEPX8YTqkeLBvQuv5iGYQ2gyay1L8KkdBfpYpDFoRWy9EUEkEeefS31913sNAa5u7V8psFw2v6VRg13dx8AnymR",
  "key28": "3SRMXPKCHqGL5r9i6zZhocKiYpNwkV9ut6NAGfNxDirkGYq1mjptPycA7cg6hWiEPaZkj463FivWRWQpV4guYd7u",
  "key29": "2uNW69SWDTEFDVFBkfHRsKMEJjSTbXG6z3bXopJw1UyeHzMbDvDMkzp75WL5gWSWJ4Ss4DFgqanFbAMk9NQ1UDWu",
  "key30": "4mY524UgktWzrNJrTbt3Cn4GarGMnS69dZxJyCVUu59ybhFM6awnYT2H5saeNk5gnstqq6EJ7QT7mU1gys4aCLu8",
  "key31": "2PeoSENF3uA7EjG4GDYaJGJzSMDshMHUiXFb3wfUH2WGyvqBEPCunDjX248zeYKGQ7igr9tyNyo8JKnT7b1VEHA3",
  "key32": "4MTkyfDaYptwLRQg1eNXb8BHqg4pNNsXKKa7jhPPN2Aw9aXhWRyqAK13L7qQYAVqUmJVnXczWpLVFhZDTtjTbXag",
  "key33": "2a2PA649zSE7wU9vGn1Epe868Pkbzc6RkkqzjPQxVPjKcp71XbqhgNnjbpZZUmc9E3qhn5DJwWUUUF8k5Dm526Ry",
  "key34": "3E25LSRYHt34mKXH4FbYWrDKX98Us9py3Zhhhmgr82YsWMzTbcugMCBeB5WMjMU922mKFQqdDmDPDTDsHVQ51hbg",
  "key35": "doudLkuVshPXDSAmhizfQSJjv1e2zSb1YpuGL8Ew2K5xsg6asJAfPvv7eT8zKYrkq9eZ4RZ21MkHEQ2Yhur3rva",
  "key36": "3iN3qMu3rS4MpNh71wSPJZZ6vhRukGaHteZjBi9PvgVGk4BQcpLh74joVW2VEnZMU6UCai1BjtSYEXTztKCSCKf7",
  "key37": "3S9oFBekJD4x9dZYE2F57h33bBTo1w5uxgatehTyi3cFEVyCXGtksUKw7Qn78qqrEU4hMw5siCRP1iJS9auW4pPx"
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
