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
    "4tQ4YxXBPwc2sijtmY9RcshWaTMwfxKWtvgKtmoNqsHy7Pd6UWLd8VVicjmfvdWvXGbhKAmPJkSBmBtx3hzfBABt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gsNhzoFSH6rtoWqcpCfHetW56ZBY7ghbnKBEcbGKjZecidxRaiM2a1b2jjMJTroG9UX9UhgbAE58KCmkgYMfHAT",
  "key1": "HzdWqeQbxjBqxE9R8fmRZMVPzgLBVkifPFPs4mGDcoTsRPokNQni5gqMte7GUevQ3XmJ2ud114R3d1xRtgAoLtJ",
  "key2": "2YMTiQtxQFfrCEdZyf3z8gywnrRvPfaSwu4nEKDGW1cbn89GM2eoYRKw5c3kr4eseuzohfxJpWhVdpENJkbWF2EC",
  "key3": "5Kxc7RaWGaejR6C2K8gVX8b2dMBPH2M3RVijwAYKsZRgt7GG5JeC6gHx3R1BRP6qhDC6gvbzJ1pH44a5CKGVxsDm",
  "key4": "2SVsVrVFRFjB5wghXY3mF64G8FiiN2r8pGnNtnCf7VzDNtEhFFjahRiu1v2HvCQcvzBPPXtFuicqRcs1x4qEPej7",
  "key5": "3w7e6YqH695QsYQjPkKhHKwzHeScJw4KWVSzaToxP67JDVJM1MjQDptxts9C1D1LMNKFpSxGsjbwPCx2MwedHE15",
  "key6": "4W8dcDN393QR5Hr8Qy17cyoVH5HVH6vXXmnw4v8kRFpQoSPUydB7nhZPLAjnpN3nhZCxmSdX4sm8QoF95hshR8iC",
  "key7": "3FQ9NcSQQ714HxPUBth4J884KKbCxxNyJ2w5eZMkE57MuY5WDJyrYTZSd3pFQnrZq8m2zfZ7aNojNzu6T7cRY3Yt",
  "key8": "3D1SmgW5QKUjLmexHkFDgXu5uyeuqCM69mbdpFHreRvGWBGfVGbPfbBWqiutHA49Aq8EwP2cJUWUXPCrSp21REzJ",
  "key9": "3T7d46q2VKBEoRtuECdxQGeaXPg3xNP28KNQWKSs3HqxpKsxmdrLZTmdGpRMFbt4LRSYyxkRMws1wF9aPZfjVcQW",
  "key10": "2ZAkETb9rcFF1hgFcDjKxeXgEyZLrCvUgeKU46Z9dk4zbszKPRJmMJ3vFM89WUv89HsUwnEQfGQh9CYPdzBjEnMH",
  "key11": "54G9d6J8w11PL25eKY9mvfddwzz4jK24eiVTAHdaak3DiDAPGRuMcJgp85dnXtARHEwy42gcCx9hbQQovHzMSVkc",
  "key12": "2inLh3x3u76haqfDzs1CYhCZWGjoPZqMJWZWY1uY2zRksdfgEjRuUaYQdrizPCNVmV1j3fg7WYjPRtTjGjc8tGUT",
  "key13": "64kw8BDMoNorPfnWnZxSujDqu81hYRdmyw9mzeesAZ4dqnZ9ryQtzkyG9zRn1eiCyp9RYCdFQFAzGVDoX8EJAwXr",
  "key14": "5StMV3zJh99RuvAigsY3hiD4doFyp1mrkC98mKjzNWJvedEJhDZnugRWf65tjqgoBRaxBz88thLfu5VTfysT6Z3f",
  "key15": "4sRQmq6Qu2kQ5oGYTw9nXEzidQzCzESe1nWUdn7CnGMXA5RonNxznFnnBjYHyX2HuftD5jqf21rSfGkkT4ZYXrv7",
  "key16": "4eif9BkgfyPNsBez5GbTfuSLFGvisRLQZAhrtMg855YafBQXaMrkU8HbdJQ6qTFKhuGV4uzEnj9qQCRHLNtmzjTA",
  "key17": "5EqKQf19pRnyJ7y3xhpje6tSvNEC1EwQox2JPFY6DASyGrmiGwTEtB2i9mjd8qAniCKEgFtgv9cGKLwbtbA2fcSn",
  "key18": "2EHtbZSShJa8sFZC6x6SZaB6Mxk9terQrndQLVn29aM9YNFiaB4t9i1ZiFVk6JWAoqDPhF8r8aKzhYss25mLHX68",
  "key19": "5guRreZimGsh7KSravC59QWtzkDL6BYek8Fbv2uPjrpKmKYXAwH2UiM8BHti9QVBmh9TpxGiFYQwigWSujdyYQha",
  "key20": "ZQcMouADGg8vMwN7hJY1c2Ti8gYQfusBEppCdGpzGrZgB6CPsVEHYWVzm3qgTQEy5JQn6EW4wXN7eYdqZyQc7he",
  "key21": "2TGgUX8C51uhczCtAWuNPh4BPSWETcJoLAjnt7BCq5z2x2Dd7dKBgY6jFwpAaEz7HGocekWdijyHGSkTP7yxLyue",
  "key22": "5tgE89JqgNjTV8uzvDGAKZ1Mshmpw8q6XhQCa2MR4CAoPgNCjBexXmoK4qZ4QTeoCTkx1KQaZQauK4GsLxv9hdjL",
  "key23": "2Q31Gdz1cq4HxpaD7skUrHEvNNh8Dn4t1hKGHvfGFTCUkhSGX2jskRNw3Rmn4SE3ACiErjknZuPn79pdX1tBAXJ4",
  "key24": "3Yf9eqV9gvwQSdRRXKKD8a6yvbLqstZ9PZ5wiwgR5d4nnLR2hh1etUtJsT3EEeTHjS33QhVeRUda9WojCyFh8JA1",
  "key25": "5nJGhjjUJ29Nn3DSYuQsbxG4deoppWW6TXuuCcrS7hxq9KKeBBpTZPmpA62zZC5ugcN8WMTwrWdBhLgBCxxjiC4b",
  "key26": "3YgU5YDwpQdVHoHrweU8v4iE6ZukcGvG1S2yirRhvDRAZzZ3dqZbwwUcn6NTo7XA2dAnU8JcEv5fHfQc9ptK8G1",
  "key27": "2w3DCvGCktkQmTofATjWK5C2CqvPbQHsoijCSVAEp3A3E4DSMjBDbi2stKsz2xnHXPdnEKCq8Bqth7im3tXEBpjw",
  "key28": "3npFzzGygqWdqibh94kjmuqTDCpKmC5JZN53pwGmvvwAn7KgNPzcS77gvp1WqynUv1UX8bZwdbuaQn3snyGUNfmS",
  "key29": "2fHEdKzJdpTSQVrjFuDZ8UCQqGHQYvHAopFdsYDvegBn8Uh2wgSVhiBuHgVrfdikVCLSGo81KyKqbup7bTmnoAR2",
  "key30": "3DM1Cq9G1LrG4wjDLYhx4oaTg7U7Kw6aGnhtcLqoZsa7sWDmd7rTfetU6YPHaoYsvHJ4Cem417Nfu6oiMR7WH9PM",
  "key31": "65i3MB5pcCSkQx3sRUjRtHvgW7SovKcSSCZqz32w7DsjKsG4MV7zbLYvboxZs6PC6kXaB75E3jn8i6vzWB5ndE8N",
  "key32": "aFcgMFWVm2wKPYomt2KsyoMXsDSSFA327FGo8sEoVP8D5DvuKZBQ4Te8X7d6Yz8GrsuwVHppdNoGmknQGSmZZam",
  "key33": "5Usu3D5Cx5LLf3FeuaMjf21emXnG65ThyAB7FxE5barwY6wihBXjDU5LTZqau3rbyz5SkANVYvtPFStaH89t2WrT",
  "key34": "3ExnnvzcDXwhwczmJGQwosVhQyGCZQWoyFdbSvap6rbtNWbZRUgvFzfnmeRAdC8jj4UtkG3Pevi8xfWihnTqpYbg",
  "key35": "jQjcXPbgsrzqHm6VZ36uJYbst442dhjWNRNWUDmsHU9VQMnPEk4cMrhunfAddKvrSbH6LA6yPgd4vWo7A1eVwcp",
  "key36": "5QztdUpuniRXv1yNPYDdbL3BJTawhTuUiJWkZhbvDcgn9SGf1wqswSUkd53aQPT6rbLAatY7k1wBYwak53pX6c4q",
  "key37": "5gQkzHd4piBrF5SfGPhAJyz5DbfhVJ6sHWKLrTipphdw6cLB6Nn1XY4RsmRohakdiygHF3EXcPtiBAF6kTCd7beN",
  "key38": "yiu5Vg9ZaHQbf7kqvcGQTUTg5anfDbYt8WbGc51iAgmPayAS1URzEKoPRNZxWmLuL1nLdURMSBsWryzfgSkEeQw",
  "key39": "43sSiC5PCoodgDpTN2QD1vgRGqhx7kdcXCXdrf28BxLN5L56rAcYG72RXHwEmvSRkp4AS2prrdKHvYqpzNnMGy2j",
  "key40": "5qDPCYEPbqdR2r1tfWZQ8mZGbj9xoPt5Eru668Xu3pYdMJLauEx3Z4Uk137ph41EGtjnvXiCNGd7rgKhiL3mCCob"
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
