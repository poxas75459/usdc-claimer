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
    "RgqZLwmQqR67Jqfa26vPDyBoANxCWBETEMxV3NRNdSDDVQzHFiHX3R6cV8eAD92qmtzwzigPgpT9MMNcMKjyP9o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pJW79yPrxkatamu4eQnyPHSh4hNVEm1AWcc49MPZp7WDym8nHvBTjysRhRaJivmPGyQM5Ei92ppPAhjGzizWWVd",
  "key1": "2cLKvSrCmr8S1BCnpmmMy6cVhhPj8MubQzo891QoEgeYegYboBUSzcDX2f8UpdQAG1YdcEMvyJwogUWHfxqx7Bjq",
  "key2": "HdbX24KLmvaApd2msTFA7Qud4mFvEmm8cun4Ht5dkubZb1Y5WtC8T7xdoj5k9R4Cc4CKS6xH9VKLsaFKFQ9BDVc",
  "key3": "5zGBfaJKE2HrttV3p8NHoTNkrcYgPhBvBhiRQzLi9GRoG3Es5vmRfYDJ77BfPjZmpsnsKuFYakiKVGNJY4hdSrUD",
  "key4": "2j2zSHU7cwfS8Uejr2FXDHp2MpzPASsKCRGhKyKoAUeR3JitAwuggoiskGJaTSPPxj1JtkpzVdu4DQYVjmhgqjQh",
  "key5": "4QoXqtsWLvkYGY5xAdjnErMxgb4aB3Gf2z4cWVd32iqhu19BZm7ykkUzeSWRfaoQnCEHjZLeeTuyJW9gPQZo28T8",
  "key6": "43nqLFDJj1N9ChuuHvBo9LBmtCDoWkCxfUMRYRdEeR9JxsPViCbSNuXzSBsznF2V8hHeyAtxhZg1uAVpHBKG3J4t",
  "key7": "44RUFgYaCQAgmpT8HTWwANywRGSgstCmFDY37kUZt5cbCubzhGJPuxch6r1F8mtbY6RSKuv8bFVJv7PaAvu1j8eU",
  "key8": "5D5CwniQ6kcQ23ftHYPQnjVZMtcgG7RvWLA6uumBCGrKbkHf1J5mviUk8qT1WFwFzDnBhab8a9Z59n7ohuFq4DfP",
  "key9": "ch2oGLL714hdMufwVMJBNzNbdqTkSQo9XHVxgffvzFZYPSsLT1SsKtfG9xwyWcNUuUW5yDxw58zW7Y6YsXfvdGF",
  "key10": "3Ed5EfyffR84DvE9ei2NNiqKhS8P7eR6MZ1EgD7XPgAw8PRLZf7XHq4pRaov9E6zfRxrLRi6tfga7CW6MYA4zsFj",
  "key11": "3AmSM1KB8XGzNA8sXQM2724jT7HTYR7Pkph5DBjkwizX1vHuLF2SLo4VVdga33Zy9duGvFjhfMY7t6awefVRuX3f",
  "key12": "4rmEoGWFfxEHTS7sd7wNWPLPd8crfSydqxmoGp9RsrHHecQufBudoKSjrx9WrEkJM6qmk7DX8CvPTvk1s3qdaNS2",
  "key13": "3VEvAo19Vj8SU4JaNuB7g9hgsLekFbgqCu2PcfmEh6aXW6BiXJ2KdUXyy9MgEsyq8LeTBLHE7LCzrtHQKwVFcD9C",
  "key14": "2LLZ6dfbwxSoRFYRwBnEnEQ4rSHzcYAj9DxL6o9UBqwKxJmyHs9UtqZLp1FFXfNoKKQFpY2eUnxbk1UhGLiZybkX",
  "key15": "5gJhpPvHQyyMDhKeSZUNuWgY5XEG6k9RpXNoV9XseKfMsg1LBKKdzPGDyRZvb3UxTPKZ9P7f7HjxUq4ich3EjM2o",
  "key16": "j78SEodXTZQs1JStBQ6hFFxdowM9cZ73KUj7wcZCgpt37LU9QJwawjsqqLYJLNtug8o6nZGoHDthAwpY2juV4JH",
  "key17": "5gcd5Qf51QD1NTq9EuYan3S5uFyboiy1HwHy3oLW6GKVv7LQcRe8WLrWXHePKEHP6J6gsaKsS1guwTba1EK2ZXSe",
  "key18": "2PpwAcCDAsJne97gXXDXrYykED7dNCGnVw6F91vgCD52zTNqzeXPUkwGnMiNweHBboPbpCNggwTo6jwcdZdP8Tp8",
  "key19": "5H5QqshYGsjrVzGDjEabUJBbr3MmRV5wyKvQSXq6E3WzfhG8qD937hc7z1qdPvLXHyAogCboBEiVTLTbQR53A3pg",
  "key20": "5t2MhhHUeoqhVj6KN1XGC5MAwVePGkVpV2wWMC3UarNyTEA86YVUjS2uQhd5r8uvPcNj6WtLWFu2MWqJnmNJ1TZc",
  "key21": "zy8kAH8xQNBKQAsPmLSNicmL32gNhEM6Kf2rbh69vQyRNcQMLn1u2t67GKt5kQvKnUWJ7jHrvAF39SvHYp1y7H4",
  "key22": "588mZ2tqa96cycroawFEfz9ZAMT9ykr8TGcnE2NbbrZB2bRpsnMuxXJoGDgxQmeWRfY2B8TpC5DHRYbAEPoURRqU",
  "key23": "5MYZh1RUsgmt5D58Uz6cQLzvdZiga3BYvTapdfAY5qnGKw1a2Ue8fcunxFiDz9dUpsbx4LQScCtCHd3jd6go8cCp",
  "key24": "2tktfYLVFSa8z3TrQVtZ2vtGcZXDH8U5Cv9FEvWoykVHzMivfzhgXSU8c5cFyGM6CLxmWfgB31tpjyBoaTXTg63g",
  "key25": "3xDE9oJdPdYzXoYNrUrC2Uy4mdTAqWr2uyZzn5wZSsAPGBdbzh8PRMqhSw71gtEre5dJDjpzqkSX6vA2JwSTQXoW",
  "key26": "4q75KfzbuxYmynDohAn9LScfQhdBtE2SeYJhgU8mfo1Ef6tkqLviLvL7x16k8DCk6s5ccy2Aj717NaTA7AUrjZpN",
  "key27": "3A3oK2iFmrnUyHZSGnMHdiLfCyCLnJGDK4xikteumawtEuRgRdTqudGDMpbzySDcv98NHwhFzArVYHoVa6jHubLP",
  "key28": "2ahi6SwaroK9ZY8YjfY5xQXP8rL4HxA8eWeQ86h3WNKkHSqtWxfarmuTfSr5fFkcBUrbg7Z7sVoVyqLBVpRu5goz",
  "key29": "2rvaA5F13UTntpmPujoreH5bcaUicmBZa3Bp1pBXznSAGyZjx1GL2cgAXYqnXeAtPMjZULVSx6hewErhAWeW3W6Z",
  "key30": "kdgxaAKDJXGfrJBewmRAnWCua1o2vXZ51GPy4HmbFyEyeKpLntmAvyZzrvnjHzyBTNu1FoRk4nx7Q9zGjUb3ntD",
  "key31": "5ZzQ85NmSAoAZ1M2HMmjxE7pu31Pwf1x8QSa3Lu1AW5Uz4gwEEaTPzk8YYHHTsBEShaVnggAX5413xchVxmfzZdo",
  "key32": "3p4F3AmhzcPEVBLfjYoYWKSz462iBcPQMMNGrefXeHVzVzD9ShjfjMCEyneM5duHbgdm96Muf7LhqavKawEdX88e",
  "key33": "2f1ivZpE9RY3gfeFnNwGVTZtS3Ehoh9PSpCt5VNnTbYzQ3raCHNPrAf31fe87rayypSKvwKFPei8m4tPKBoXfGMx",
  "key34": "3srmo12EHUfSDnmmpQFy4FVkDZtgYrctDiroQZjRUZPNiKQtjkXkQrit9mEdmAiJuSYCszxJM63kjThrBhYbyDwu",
  "key35": "4uHPMoYUK5bxERTbw64KQitG3ow5wrF9qzzGMoKmYu1exhJoWP2MWjGeDxwSvGgP1KHpPnA2BcFMqwaQkSQK6iGe",
  "key36": "3RmuppTXRRh3GxyE4Z58trvCLajA1RZhbjjgnAauhjJtniC7G4xASCq9yZ7nzv3GoGaeSBY58jujfDKnG2ewCkWb",
  "key37": "4qwVSfpuN7rajRByVGvGQdasz5ArE5ZnupKcixXKE2cTGzN8ke8GXN91AVUX4AwsqS6nCA24oTiKvvFggFinSbNL",
  "key38": "31Q1tnMqgqfAZYzChHjkDAa4DmQwCNXJadU9mhuVQemMszA5HukoQq9wMCjKkdKT5Dp1B33xNJx1ezYFALgRx2Zz",
  "key39": "2BVp2HDdMyGMbbRDAahmakagJ6nUhWXn4bBE9WgWZtjnyC6pMXRoBBMJRG32tH2Js3Vij6HuBk64dLLCcXoAqTva"
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
