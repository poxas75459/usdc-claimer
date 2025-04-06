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
    "2aNyfKhygHqf1cBQecEtcwpovXTgBSphRB5khx8dA9A7rxHezkpWjEhTPRyfnTmAbYM4o2rs9qk18v1eyJwWm9bi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tfyG2NTVLUNsCqbzh6mX39wtFVdZ7ARuzkAi8unFiAA3Ecfvxc5qU4LPUdey6fLTqJkgpXpucGjDoCt4SCngS4q",
  "key1": "618MnQSn5dkNWo3Zh27KPnwwdYkSgpb5XHhGgQtnEhDFNSxteUTWAxBstkrb6MYyv6zRUFVj3fVADden4KKchfi7",
  "key2": "2b6m88TXni3jXV75XFvzwbCx9d4oPtjK6PUfiz3tt1mzoS3xgoeoTihMDLRXeaB8fMUSoGPQiT6kCSnLLDuoHv3d",
  "key3": "4hgaE9J843VUCxUNeo5pRbYe9Lzvt363dgwzQkBPKDhqZxqiQ25PKGq9vuXxqqdMR3nyo61oKqjoaG9ehs7yiYKw",
  "key4": "2jNRVMG7VxSYAEeGMLS3v93VPuw2fh7EmMijAqFkZ7uHXraGfHZD387qkFihX7hgJ2EMV9ZZrEzDjPAk96ZnoKoJ",
  "key5": "4o4sD4PxVvQavuPc5H4cqcqKe6i7fkQCpKyme1Cs3GNxumjKG9sjPN7AZUEGrFozH1a66EJnzVsxixYgpsGiKtbs",
  "key6": "Ls172abbz1VmHJRqZAYU7ghvL656t1foLFLB4zbgMP8ahFXvNrYHqsgcccwGkgzP49NV4R1EhDGDVuhVjZbdWii",
  "key7": "nVfstJbJRGR3jaSLMtbfpt6ZMyfmJEZeqxeUTea2Jfm5gYjdjsVuTnr7EGZ4ULXxykj89PjLRFyycYE242XW6Pc",
  "key8": "2iKojxsGXfjDotHKXtQTTnAUK82qFjtit4aUnNNVpkVpdRZhA2L8wkxo8RQZyFqQDXNrhqGaeAHCGzTbEwtrxkwo",
  "key9": "KvP5QAoHksYgRZ66aGEi4yTYUQ4KLMw3hUWuCgbqyPr9NPgAKvV4apCusnyvJTnx9FEZFcYC6bBs78bXzJTEFLb",
  "key10": "3nkifbr296XWt7GxFGmiZPDxFd7T4CrQGqm1FqLzNWXHFFEVFqTHzuB93yHHfEZVtovBTMzsUauAEnFnYh6YQEXn",
  "key11": "LBmFASjsJXoPBXgb8kijb9RLa6nwKE48JXWrvje6sQgLT46arhgxoJ76CFebt1VvPV9cRyBGNPC1BZMpNzjeyWF",
  "key12": "5HQvtVd2DuyNUg8BcSQVCc98r8CQ46BcLnUaMNX7mSJt1WgpPP23eh3yDcBRVDNSwpUvxeNCGck3PLeZ8rNMWR9K",
  "key13": "3hYcNAapqquzcPg5Y1VQSRLxes1iRyQEwvycUungzangToKdqpfW3LEHpwhHp8ctW9TTEAupWVsn6ctPwE7xLK3u",
  "key14": "2sFLQf6Tqj36qLHtk7aqmbdThN5ReqaHvCZtwMXAsr2ZhGw7tMabXMvfze3ARxKxemeRGAQqF8j1CcAe42akjEmF",
  "key15": "4N4MfZSHh3JUGvpDgoPjwTuZ8FD4tC97paYpPtYBkniQbiUSowXDY47bfZxthKAFMjcXLwCnNd7aEyjVDtSoDDKj",
  "key16": "4MEorE7KUAL98EfgA1mwRNqULTJchcdH3woVteiS6Rin3tRZwDEeVHCULL6ZTiBxiyo9yJWkJqwr9oRRHPML4ZLC",
  "key17": "3MmTvdAibX6XA9sBa7uYN6EXaXG4xeGMXMBUYNA4AJJUSWt36rLhzC59dvqnUZjJCSnaHNeKfo82EKtbUKfG2hgS",
  "key18": "5DekjERoRhf4MbbyGQ7NpGsE5HmexDjtTxE9nKVuHFoFSr4E437pa115HCY1PdtXt5acUBtrzMncEnPR8wAKNrfd",
  "key19": "5JdP8tjdApmVKSgFHrSSe8xf6JD5RB5joYBCZYJJsmiA2pTPRMrB58F5ceU1tcbUsFzQjdYmvh1qMPi2dHgFv5M2",
  "key20": "2PtW5eSqPDLzGUd7vHzP34fkmcza3nkDzQ1q4Z3KbMxZgxG1jf63n85ojmwibr2DbdoG4uoHmqfeHthuETjwrpqh",
  "key21": "3YwhuYusBxcTMBDc38yxU8Fsz7mbwCJPdLoatU2iffgyiuKjq9BTAFJ4kYQLMVAWjQbWfioGdyahGft8n79BAFv6",
  "key22": "Bj2SbdJ5ZSF4gyqMcF93trrPxMUdXcw7xMVzW73CaUegVoxNyJz382XGHhWZN9fKBWsdpF6oB4dM9aQz7Gi4AKH",
  "key23": "2xEBy7PEetaVQ8vRBgkXTWSZ182Y9JzCu3w8xq56EpqmPaDVJuWaxYCYxCxY7Px7xQALobtxMaHe2aswX3RVvAGf",
  "key24": "82h8pkZNf4Ay7jZeZNmCby91vuasDMqveyQrBZjmCADNySqJXgmTD3RHUCFyUzQRyG2ozYboG8b43n3QaB7mVYa",
  "key25": "47gBg1npnNExafzQMX3U8hCmxKfC96VJEzXY7mUVv11NfAji254hxg6rGqfYXK8WnGCkBm4EV3GNazUtAXAR1cXd",
  "key26": "53RbCZPPZ7MWhUcx1D9nPtUKbVHM7rj43mvkw37DWy5kA3x99wonswjbERiCQAkjWQWAY63hZ455SdH244yQ8Pfa",
  "key27": "5vdRuNZfVGfQ8BsHqux9b4sKUjwtKGfSTGCgLCVkifhGQFdprzNQhqBaRHL36CsVUVHKpvscBggRNQSTJYE1dhtu",
  "key28": "WEp6BofoXLktg3a4XuHgSj9j9gX1wCq1ZDXYpyMCrFYoMTqxMfrsbwCcuZLbCaS8PUg36rjf1uoHPBekq51VCd4",
  "key29": "LdG1s3g3KkZZ2EUYonaXzGMG2B5NNezKi5a7auP4Sk9bvA76RXTGG2dUHQQvzbduH6QE4xmoUNPY6Gfa6iGTHoQ",
  "key30": "67NG7R2NnWfw4akkHyd2YxZkzu2bvQLAL3uhAjzNwQUMGN9gpJSxiohRu5CSkbvBjUDDe7GmEQcM3gW1nf4ZYpsG",
  "key31": "5NfDr88U6oUCHLdeVKg2RXmbSR7TNkzcdnern8mqHAR8o2DQ4J8mh6QxgWEhTBbwPEmSFuwdqejmt1fS9ChfFFzE",
  "key32": "RCnfHJjL6u1D3miAY1jivV9V3PBQTZkVU9tamdBtieddcqNfMUzjdaHXY48Gaa8jnvZ2bxYMs18LvkexrcvoZfz",
  "key33": "3wwht8USJaNkdHyFTDAxnQxHFeeR1dvUyyxNPTgdQuDPxRF3ukax4uE7fGk6M5fFgoe4nno2Xo8nU5F4v3WDtcfw",
  "key34": "5U6TK5aTwcPheEqoyTdpdfxVxr62yyB7f2wfdvYA8S7GoJBD7UYhe2sz1HDBHeRfBTRHyjjLQdNKokHvbk2NLTuV",
  "key35": "66YWaAhkSc5Pn7hcQFb1qKyYVQui1QxDeNkNmUTvyS8F8niAsh6ev48oYZ2N3pgc4QagVEvvP8h6wKWGXCxPxfAQ",
  "key36": "Ev9QMx1sBQSUPG5PeidhKathjXUmBHkED5VV2sQ84jna3S1CHunhNRGEPx7J74H9VhANT4dMcKRcEo1Rk7fbiXf",
  "key37": "2XFBQbqUZRAdTRCv4uEWJTmWLYmHAXqBUbYVQR86icUwzXgY6HFDCwEcn7N3dnDQc9NGtCcoFzmnbJLCqteRatdF",
  "key38": "5q5dSEtPUqNJfHzq7LFpzCSrNbHb13qAFpcuGqnCsHcRECjgtqnqefDhCgr9sHBgraYCEg81M1eEYf9NECEYADV8",
  "key39": "4n1K5M4P3xuJPzRsDQZX4jv6aANoieM76srHqaFhQ6jR9GNYQt7692gzAaaif42p7QoD5oq5C8jYCLvRtChzVnu8",
  "key40": "5mS1Ty6XCUviTPrdAF2CKmErx4m2wtnrsbYbs2353HcmJ4cvG17GQwiQD5cdJGKz1y4mY3S6UPTnveRyzPjfWh1u",
  "key41": "4N5auh2G4nXjFAj8Ci7LzmoMCnR76yUD7eWsFeLUJRCbbHWNAWwYCSeaBY5yaKG44E3L9QEx4wronPr38bEMfYQm",
  "key42": "5bedB8HjGyCcZX9VVKka44VwtJ3k7SyiFUTTnEsXfiSQrXAPWnUNKym3p6akwUfbMRwkRXgtmZNVRkBcGb1HWRkP",
  "key43": "2Q2j7Uy4uwLAErTSx5mBqCK8DH1QhELgZ94i45DsqBGtaMjWXfnfQUcMyPCVNVfGBxDdEMy6rFLqqN66EubtMvoo"
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
