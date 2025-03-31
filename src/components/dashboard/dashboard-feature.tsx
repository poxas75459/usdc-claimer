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
    "4PsTB5sZeqAPPDLbKVKhUWa9ySRHe6SWtWAhzNgKyXgZhYcYRfg7pbu3fBig7vFLbtkbU6BVLGXWMjQJsMCoWgXd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BVfxAppaSyv8kCdk3tbwDb7YbtURtKkUKb2TXZmRB2B1f71P7Aa3ZcLPTV2aX36iyBi78fux87GAio4WgNbRajD",
  "key1": "55zBVACWqVXjTtbgnfQ8yKCyKfSgnXhx2WApRqVFrgMF8UPVPLMW6xYEE7K7qAowbHnV1mGRrBcu6T3bhvF2kwUa",
  "key2": "2Z6n3yMkfL5QkDiz1KaDCbCb4XjE6FcriGABHBAXyB8adZw6yzanaKg9XBYHb9WpffZHMiD82tY6C1ocd1h8C4Wx",
  "key3": "bATHrwjwun8neAsVHarQkrNVgb7rKtwCvyBr9rtdwQxSqDwywswSa5B3qB9YDgsRQCgdUBYjAQVuVtLSiVELdMC",
  "key4": "39oarHngVNTJnVCjcAQia3fTcm1hbA1wCxyoaj4E2RTZhXhEne9zdDHHJH5GGswu2kxSsiAwBVG2AQA38MRK8GM5",
  "key5": "4zgVanw8DZiHchac7LsF1wpYtKu66K8wPswqz5J1bTg5nJ3rjhcorPg3T2vxvDxihdnpJcP7pfy9VeuMwSFog4BV",
  "key6": "2caFyJbjSX5p9fRuMSM4vnNDyrourf1NEtqhz3qbFtp8YUoddciFSYsWMPVDCQmthvhJYLP3SvPtvT2ACGLaUmnv",
  "key7": "2qTVcHmQpzV6J3J4Lj9C179DyeiQ6sp5bvo6HVdW6nZWFMVmykbNWids7w7yE9YUnsnetpu89ocFBzijxRfRsEGE",
  "key8": "5WsB4ahk2c8snb5om6iV7QWVRVehM8z34TMo38E5br3ZVTs8z5ijT1u431m8RRFkcbbtvS3vkEMP8228kvF36ALR",
  "key9": "4wV5NHeSZqFda3svmHSDPW1SkovL7r7gGi8m8Vn8jdH9ewWqgCDRLaBHSuEzECS6VY9Mw16NJu1g5gjFsUHnPJwk",
  "key10": "4nsbw3GcM37KWk76JAoVQXL5y2QD6A3HwciZoKZcmDrviVd8FffXQ7KkxKmkr2UkkUkiKqpvaWHiF6SCNkFgWFH5",
  "key11": "5oJ9LSm3rcGZNeji1gAf9znFZW1kdHnk2tCLuVrYuySeg9WT9NZ28KwNB6tkfGDFhiteTfEiVkzVUg1zk1cP948E",
  "key12": "5UVZNQmsE7yXtnV7heCgUrCc5D9hCX6tJqrMqgbN4mr7tsxMkoSQCEYi3D1xVmbc77AqG5eZ3Dwb12wKn4DSMG42",
  "key13": "GJUPNnNBEYxPQogeGS4vZyzR8rQh8ChPkwrJqFxMZYuopuRsdia2YvC2XS22uNX4UxdTFu7xWkbNT3QyFuoPXfd",
  "key14": "TUcQFCC3rh4Kt4MqfDnvRpQxuMUV6bngimVuw1nsWBWeRxFRtQ3p8K6A74mqbWDt9VfR7K7WDarXKBjCaBMBy5v",
  "key15": "4UKvnKofrZwmR74HwU2Uqc84gkCNuvrnPvXijT3VN84BcNDmNBt4vxpSxQtEH5u2U5zDE2Aykp9EdhuhzNESBaQp",
  "key16": "5wsb3nxgWuaUBDGJYHWiMakL29vv86kzCV9EDXQU15VSJGgMnsrxEJoxvcuNCnicpsK9XRcPimkPN8JWYWd3c97w",
  "key17": "5YqXDLixMddKt1tVHNdyyE5hGeJ2T9Gzvu3mK9fb1BFxTownnuNA5m861a4sbjJg8QjNurhABAFAaYs3ZKpa2s93",
  "key18": "8ijB1FLLDcQDoYQoDL2G7aBnMTwTFUQag2bc5UJvKx2rUXhw5PmqafuFWR16GrmxdT11Lknb5ZmtiVxTt6d2Myb",
  "key19": "2AiyPkucYaADEHhTfiwreqWPNf2JYV3Qa7t2x2PN7hfbijPZXXqmjpJ2P7A1HUqXQBqrWKwTgWNvTBoa6H224y9m",
  "key20": "VJvn17CHN9vVpAffZYqmReEBDKnqeJ4fDzhNxYHqzXCVzBNgSPxeNJDSXAbJqofypJpzGpRkmYkWsYzfiZCQg9u",
  "key21": "pG1Kg4ZMx7Hn8wEBmWNMdU9yha3hpe1ox8Luz5Gwb2z8sX4Uj6rjCx8iVnQFFi5Hh32WSFZYLdfVnkvtKwgXVcZ",
  "key22": "3yHt4yGQCDNpLxhTFTZJUoXSizgBza6D3uX3JXzmnAULoJ7reNXKdmprNk6QeJHW2DuHgZx8kjAxB3QdCn2ZzPQt",
  "key23": "Cd6z9nJCwU12yF1LRR3rYKqUnKc223detNyFuREP9meoEPDAC8yao6eyYfvqUqewZs1b19zW79RCbDrPB2q1YgW",
  "key24": "3QkKWYbYcVxNqwMt1ziY1KKPdeE6Q3F46sHsps3tX5Vvj7yPVEq6zwZgHM44NXHiLKvAwbKAJ6SnFwohJLp3iuY4",
  "key25": "PKbBUhAkFysb4RYC7sBaECsvn8hG1AztZW3rk3X7xQHoM7ZwADNnpZFAbUbjCjPS1DopDHF3cJXWS74JycM2R8D",
  "key26": "25jN3iF5CZp52RryFRA1XWH7S4HDbYPK2DqJLTD26U9oBaJWB2pNNqjvUT4zreouxuKuoQfmFNXvPYRz6hYbs4cQ",
  "key27": "4235a7i9TEzKfLXPEgaGpzhCjEs5hfBmxGethsbGSoUVa7i8s9aBNUHEUPMNbXATfVqfiBPx4UPfoCLQfi21YLH7",
  "key28": "vhdhZgnMMoRJLriJqXBV9WyVBWxHPHsN4hJPkWRfXEBksutGgVhyNNgzecdUy8DgJg3DyozJdC7xeMMj4YBhWRc",
  "key29": "2hYM2k6PaCXC1EjqCEBUNt7gXrmEgxqriJczJ578NbLC3KvyUaX1tCyhBDDo7KW2vcf8tSvMc9UDyMqNhXCkpxEn",
  "key30": "2yhZA81Dvs1Fget9bggmArqdc2dtEG1ecMRxupLLpK5aHH1Yk7oRyEyoMvka18iZ62R8syqoPz6QTeYJWFk2QkZb",
  "key31": "44BExxeyiyMHkaPCzzd9CBBKgwuRGuWCkuJhhq5wdUZ97vEgqfBFM1TeuVVQHVnFxMyGiGt7Gz5dsUD3yMwSu57r",
  "key32": "V3A2CxXMebdwirQ3bEF2uuK4km9fNB2CGawBp5y9eb6aPv9xCxUNgUJugYNRZAJEyKSvqbN84djLu3mp63dGZDz",
  "key33": "3YYHemULBkRLJ8H2oqPeaC2NNjmC2Zr8XVDEg26nkZw8V5WuBW7MM6d1sserLraHjceTKMR7pV7juny2oAQagpo2",
  "key34": "2HaZzoZpyAEgkQkWQ5PkL8PjDkRsTdBgYWFcNh8FAVLnX4sK95Bxxy9oFiXjQ2CcNF9xpxHXZQzsN1RnFcGVyTYS",
  "key35": "4FSs167paFKiLou27PhGVNEnSqJ6eAdNMrFwWJt35Xa8PrRqh7iBgrisocaiysEwB1qWVxy8YkHtiCRVCyZAUM86",
  "key36": "qCti4qQpH9cRjr7kYWYVef3ZdJ6ts6egDPTMypTjg3FLifbNGQrTmE174j66Wj3t5X9pRPKNi9Swmgf164AdmMk",
  "key37": "FjrAKkMuUN1N2fPzoMMVpyEX84TRdRHWQ2qfvZSFMPf5J9D8ZXkhb4nowgRVCoacL2u9WxCDxq8G2ZZAoWKT7kv",
  "key38": "3isukmZr1nanW3HmyiYQQKAkqLh2jrHBwPzGugMsEn6AQaN6nyGcUfXnC2ZFEmGz3ENuMMjn92rjntubJ2fwKaGf",
  "key39": "wgDuDDQ4HD1D55bYDe2NzzEVbZL9yAXT31De1nUa71wrL3g4dLvCJeqNgahQ8Za4yKf8uqxvuJ4mHrfbdfpjdvh",
  "key40": "4fQqKKMFPk8sYypS3NSf1KLEQZ4nSdzimvY6yRvs5i4rnC4kgA286qK7KrmS6T2Sk1w1EiHj43YhYXrQ271Vj1nq",
  "key41": "5GR7VmDUhTteUfWRWpn5WnCRwUagMZuuFFQz8GpeYBRbg4xJ6xypbSUfsxH2vAdif5nBy6KpjKzFydRoJLX8v3PZ",
  "key42": "2rrKJ5C2QhQPPqNgCSttdadVte8kycmoj8b4AafaHpgijmLhriHFrPEcAy1ECZgnyVHv5VKtCrHqB5CtwrSFzb2m",
  "key43": "64ma7Hh6ed25e557rpQPA3T3VdLezpPqWEVJ7BWiotR6SmckBDWnBv2264wLwHnxRnzR3YEnbh8YpJnz5dkm4dk2",
  "key44": "4CzG4HsVakaTi3cGTotfGUVTU6Nt38WpZUeuYuoeytEdDFjPW2b2oqak5n3FNy2QkejZKaVZukWgUSzLQeYAGBy7"
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
