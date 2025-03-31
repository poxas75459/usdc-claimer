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
    "5hXNps8SNXYLBaCssxGutMEXnzTsYWbyZAkAtu6cVuiKVw1MK7JbjdCTNmg1R9Q27LgrL3kv3SESntwQ196unjbj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31bER7otP8dfit9ZvnV9gtNL1k4jW7UMKY6Y4KqdaCX5qCEyMAw5YzM2VJRqvLukW9teHc6KpS7hCSutroCSCvx9",
  "key1": "45XHNr7mCTSpYFL19dCySmZ431E2jWXCVqZ5ts6MXaQi9pzF5s3uzu5B7Uk9Nt7jaipry1wTbcJAobVusBrS1Aw5",
  "key2": "5sDYsPTyuzRSRQpQr9sAndRypoB6yyCoHwNe5DgyueddFtea7EtnrBZVC1shogbcVQx9iVcFHZPKRjuiccgBnSMq",
  "key3": "2hucgKJ4xpg2wqvcSSVhqLgMoVnDJxMc5Z4BDoPFzEdkaQP6QGkybW1XJsUALVcyQKnJYoDeds8NSusYfHre2eiq",
  "key4": "2w92kWYK8NMwnUwT73jXGcAhzY9txgBKR3eRUV9umeg3uo7i8Eci6jPeAsbQ8ZoSVryiayG9392zaDSQVMyW9DCA",
  "key5": "2yaMZJaFVxqeggoQMqLcewGDM16dk131EsztmuAcBSjDhPEs6LWG5mT2qSMFPtvQVnJePktBnZVpWZxdykg9HZJM",
  "key6": "4jSSwcP1SktQGytQibYsYscfC5UXXwPtQYcQUfcuFzupGDk29ZJRuDwzRrfoAFfbvX7ygXaqoso5J8MncBzJgjFD",
  "key7": "5RH7Zpcp2Z4DBDu1JeWniEuLKJk8AZam7N11vbrhGW4JLYtJ6FpcwCPLwSk5dezmAFfXrM6QaKfvu8TFQkGp8KzR",
  "key8": "2TyAsetqy28LoG5XqhzWuebNjB9P6AiuZP2YhYNC9UCUTCXuyWEJPp7jSAimxhqWEMzxa34sLH4MWS6fev5TCei2",
  "key9": "AqJhBVDJYyJN4d5MsT8PiVrnit76oEyYK8K5e7YjUddTN3FNiSiyHbp92Aq84TUALvgWUeiw6pfLqXFLmpCBNUz",
  "key10": "2GnqgbWHdVYJAE2aLL7Me6VYiGQgBjWYLFBYrm88Z7UfJB3nVpwHRzbAZH57eqrFzxok54wUNokJQb9WoVuok8qx",
  "key11": "4Up3ec1Pjgjna9ibLyikFQYKxB7bQcoDJr1n7co8GfvMSDPYVYteVwaKbXoVFVu4ZzYQZnGtJXWBqqkJeLQWcfVf",
  "key12": "2NtETMHxymG7oMZtaGoWNiU1QL239P313nJ9AzNVyfetLmpSWoaQjeP2qNQFYifX48vJej2zrygZjhSvgsdKdPY6",
  "key13": "24GHFcpMyRAhxxqgiV1KsjWur58JPWJBzxa2HP9RBWA9zkZMvmfsBv3C9qHoQxHo6ufBUqcg4XS9hAZjrW7toR5N",
  "key14": "3MB4ppV5GbuSdvD5xjA1bbmbdXUhUUDqQ3eZewFgbPuWtKKaPRe1Cxsghb6tXgmGAnw6Q7cKYVrcZDZ73BrTDov7",
  "key15": "wVDsRA1KLnQVAhdqzRLjqQDP9uFcpWCE63jUR5LKtkmmnK2MT2GGcKyVWUHEq2VfyB4ZYpuw8USddVQyG3ASkFw",
  "key16": "5wN1aZ35kKhPoK7fXbaF87oJBdvsKJTrvRRGUV5k5dy2vJ3QnFwyEvmGtgANDCL7upFrntPYPqRcYwMk8pVazaBL",
  "key17": "3ET6svwjTsV2zM2kjqjr5XdLgCW2K6coFX1keu8GssuKWr8tLJ5NhgfKeEXfmrz8wi1qMDAXMgvssNSc9z3UR1kb",
  "key18": "5hkUgAvNPqZU7q4EHb45JnKh7N2b6QFCBDKia454ZAtVCLDoBaBZ5JU7NSZaWY5Lb1kvYnmTzHaoh95Szcukn4dS",
  "key19": "5AyJmurkYnxFSZvr2A6aDGhwWQp9NipjR2A9epEfB3cYTm7XTj6APoeV4wRGubLpmqDuU5EPGgChy2vY6qGcGFAm",
  "key20": "FDmYVgcwtpRzanYjFLTrSGGh4XcoKbeDemX8AdoG54PHz94JbQgWy4urpbExYAzZfnSKxmchV8RUoZEAec2p56a",
  "key21": "47LtGyi9c3zxTgu6pWsZVFekqbV67riQwZC5ZZiZvFkWv9sTC8jtwQzuWVFKfiqj3WsXevhSFsCN5QcG9VFtRHVC",
  "key22": "3CYurPjDvpyTMmZed1z71WgKRWDBTvdrdid48pvvR8mX6jTsYmtvFLDVg6PcLeUKZstYBTpmPNYae7okWhDMpoYv",
  "key23": "4BHFAJtamFnP7fCrrykqfoqmcS9bJxQjSX8PLQTUTTDk3rXjSwBgjVPvmAMki88JZDGs56EvrsSbuojC9iFfjUu5",
  "key24": "3zxrC3hYKmkhpTkvhtXsMNBCWST9kFM5m26njiprv5EDRzC4LuikAjv2PoQojC6ERf8zJt3tpXi9egisxqExEErt",
  "key25": "4ACxG9UzrdKbmBirzcqnvpXzJxW2BNrhMJaBtufYQbToUZ3a6CLfSjSoCPAqg3jUS1vFexFSsuu3FCwC3AQbGFhQ",
  "key26": "3b4M8653bZW3RKXsrU6q9BVRbdNvY8e8N8uBBADRCVnNTgfUjo9YvayWJtM4bTKJvhibssStzb2wNfm6YmDTpMhF",
  "key27": "A3rKuiK7HH3wjuG6HxvQDbCKThbqez87e3opSe5toAfLp2EiKUV9mjJmioHCRv4c8nHmdQg83hjsSfHfP8wUjY2",
  "key28": "5YxaizQZjeRnUxNj9RWFRtF6QYnTyYKNRUtc4PmWgEjpRFGWQYVqr8oDV17gM2ogk8LQxJpUPA6vASULjgq1JR87",
  "key29": "BZzY2HdEgW87NmfgqotbscWXf1yYTsYtjXkUdRLgKGTfbc3JqPcHQmUnDEwFmwkN5538wmEJGA4LTXpGrM8RLH4",
  "key30": "5mqVnNqeGw6Wf5EuimqcsXgLXoegfDfdm3ytnmTsKKQsPyxMEefzPdGHP8ELiPWMP1uDmnhfY7KJgTjSJskHtUds",
  "key31": "4dHSuJt8oCRdjdq7iAmm2UaaJEybo9yU3aZfa8E3mDg3Pq89L4QYkPpWSrU8V7NJEaTAktckXrrmLGyP6fogZSLU",
  "key32": "2LisNUZkPJoEnTXRyL8cRkU7baydeb826hd4hAE4C7FWDChwarQkQD2AP8KG61beHVRBXnFr1QnPBHBmDeTuWATv",
  "key33": "2GBZZyW3EezmFiRnp3HRncQPxpEhuivLVV8JpyDuymNAa5pfsuYB7qBBq82E5KGZ4sxv1x77oPyLmQv4zghR6AMV",
  "key34": "5KWNa5m9LS25sqmEBKHr4BwwfvCwJ6BiLiXFW9NGu6BnBuR3Ufdggc6DSxFHUnXRzHXCdKpf79eAyqZ64xYSjUxM",
  "key35": "2oDVUwWDxSfs5TE5ZUZVdbTaH7Bn4SygJUuTq7NFa8yRz8pHmQfCxXr7tNXgPzDcoExYiVp9bQfMPnWFVsBTKxS7",
  "key36": "4MoicrbhsECNa7dJHKNKQT75dYfuKyHR9wd3YGe2JsD2NGNctV375P8Uyz9iNSTrTJbwZ25Wid7cpgDkaSX5bLzg",
  "key37": "qVQyHtwUAAnbKuzG13Eczj5C9tHoPxz53Mt9VUfGwRqqc2dwYK8rBHUaZvR5LtZyasADq1pqNrBeiaUsTiz1QdE",
  "key38": "59E8shWvhJhvifdWQLXLAnk6DTU4bavKJCgV3d3HPrG8qqfFN1p1rDFBGLuzdAUKdJiiNAqNRMg8sAAoyJJGgkRs",
  "key39": "3DJ1r8cDqoD1sJ51ZfiQ52BHRT6gZ9madFvyVKET4ZVrWfCTdutsPQYaLWGZqtxp9YPiGGhzajKn4ACu37XQ56Fm",
  "key40": "5y3bdShLBhjqAZrjzdsfMa5W1PNC7cgzWhJjSLoMyccMCWseBQyHQb8Yu2YP2JaifHmptgjxRAycf2BW9DA7mGkw",
  "key41": "5QvGZkLuA6DsZRXk3L2zqZGPa8kn2Kau7ZNNn7fCuk9hrvg9BXgmFjWWk1abJ5Ni24jqhhVYCZikfLqUTyHfyn95",
  "key42": "25i4M5anE1w4oAmTrNVeNH9FNu2Sv3dZfpDaUMF2Xb6MiSuu4EqWnX3SbA1HcrNy8CpmrjXviqkWbtjLS4Wufm18",
  "key43": "41fmqmAXVVen1RWtgqbUpSMGtSPW5kpYMDdnmXk7YbA2PyY9Sf8RVpBTRDSPE2JANnrcXmZmUDwftsUJ18j1BCnJ",
  "key44": "3W7auijh7pdpv41Gj75rKHVtssixxc5pJ4vFuGPJqqJnEFLraFKnkwQiVdtZ9LGL1NXLPLu1eK7zMwhP8W1bFMA7",
  "key45": "Ys5wwLrVXewZy9H8TmTvDvY9XhA1FCT1jtx47Kub1f8vPVzQDmHFJHGjVoVY1VVBoyZaLdCZyp8g9f48jTrZDeN",
  "key46": "5DoRUTjVSyCk7v35S1BWH3smS3U5EMkrLLLnKoigQKtCyNVjoQSDYQHY2vnNfqh2jKzNRG39fdbP4HN8un9ToxQa",
  "key47": "5kr1GQNDVv9qsj7c6jESGzEpy38V4kSpAzkwg7YYdpLZozkras3PoJyZeaGAERZ3Mdpq2RaU66kjWM9NU2DgsbdC"
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
