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
    "4S5TQLoiKzceedPzAkr9c3H7wSgpdNwUhz8xZCEzSNsTCf2ebVPinSkqURinCM8ZYfYDYSQgfQp5eDYjDv6w8aKH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cF1EafNKf6oHanzsgFWikhWGKi3HFC2yghMx5vDAo3q7DCJnEZLUYtajfTExRH1mEKTCt3uEfBf39dEYTMpUimX",
  "key1": "4FpnGtmtqdZrTp2zLs5pNFp56jbUWHrtxppb3vzG6dP5fBVALaHKKTgvrv9iDdVGBCaSrUSpqYQ4ykW2yJNgFXdq",
  "key2": "4YGHXXTLzaXSWeGrcKrPpVwKZRqbrRyY8QRJ5ZYNWE59QygMjtfZY6b3GWo5BVv2nSTdt16WHW2GzDyQpXChSPZU",
  "key3": "5V3vZYt8McdC8As9zso5kfApYAezgU6XztW5qm9pTogCyJkKS8Emq68hV6nLjv9YxfcKorPECihSb9jiUe8MYzXu",
  "key4": "7PJTkHzmfe3TqhTKqPWq1v8c2tctmHvanfihg92oh1EY8CvjEGqkGSnAFXmKvLBdG9zNdujuQmTetxSu2dXLGVo",
  "key5": "4UZJmzUmkLDL6ciCd2XUbZRDJPtTrtyGQv7wsX9YPFdMVjNHBuAWgXEQyjDoX4pFRrdkoQ9yju3Myd73HzyuQD5L",
  "key6": "4EqLKs9usiCgFubjKxqmRPke3RVGRSsLqZLNvBEHuWNNASdjxNZS5gWiYnUmqYR8g3yneNrArFRjnQGV5wCKgzwP",
  "key7": "66BKG7Rgc6BothZSwRpsToExzFJgPg7MYPWMxvCBQdnp53r5fdWXvByLfdJsSwHsM5DBkRFeuLsUFyaL1YkXX1Ts",
  "key8": "5FmLrRh9TadmbyQjucjooSUaMgjnaqjqLNGtXRiMFp5ZYedAC2oxYZPoEnhhWNNerMpyDzTSxhoE8z9fReqxq8G1",
  "key9": "2e5SMUtexUXJiafvX9Kti1dQPWyTgTmWzLRpF5dRAAWQJiq24tN6yJkkMjf3XJ7sbV5QUrYf5WgXubz7CyC7KA4j",
  "key10": "5QrKQwqqzqgvyyXNyorNJR6yajo6tK3vZtghLnPw1DekRJxYxuu6dYSaCE1MwHmJ1npF4iy6CCDGYkFwKzAo2QUd",
  "key11": "2D6LiHUn8GnWNQd6EgvVAtvQqC4aHMT9Sa2Yrd13SvR2Sw8Mv9hQkZ1hsTAexVCSNFQ2Ht7r33Gt8Kn6y1YLYxzg",
  "key12": "3YzahY4V71zMUNNERDp5XPWrRTrS5kKEB9oQyUMkwxWcTmNdvjkoH3phnxZaqze4q4GkEaVCJQCGU9zTSLeVNuQo",
  "key13": "5BuNcb68cpigbtbvB2tucM88VpzpD8FbZuQ3nPMVnJR4aNafZUvX9T6ifEP8veRcezUGaaoUu264BNXwZsVU5nTV",
  "key14": "NtM4k6ZvSswSkmUfANcW27t8AGUcCjPgsiuGoM5YDzbizy4YtY4VzmaqJ4gyXziMdAgM2rk2Abm3kjkusgpi8QE",
  "key15": "4kJG2cYxmLVroBSLM5YxbDARLwmQX79aGE8sLDDQ4z57w9knsYHCNS7N3VMKMf9ePioxcEJqPTe4TocFQaT6sMu8",
  "key16": "2nPhtbdpkXB8too4SQoQ5zPB4yMwRsEKys2EAR9MQtYKv5R3Bt8Eyj1sVM6yR5KwhR3guWddwyCsE7GdKnTjhkPJ",
  "key17": "4Wgfwi7Sa6cpk38m1j6ZRbwYPXNpZaWAx4tdNu3G4bKXpWhcZbXXt37cgKn9aKdyEF6ETxxbdvc95bDyJzynWdSb",
  "key18": "2Uyqzr9F4bme6T2Q5nNNwHup3dwe3EbjvEMsEnyeaYqJAviBnF1bWA7VnQMjXxwa77nb3PDQBd9cbahn8KUeNGdB",
  "key19": "5xWvowwFBcZqYi2Gv2RwvwU5HfozKqwxcJ5MBFK5gddqjqn65Uy7jzHEFfrGcykjAJQc4pjdzGXwGd17BP5ntzHb",
  "key20": "4wDMmvs3t1mTWcVCHSPoYQqB8UFcffdfMF8csCNq9wSvgnCAsbe4eGHthKgkXYe9uQPX8UWR1r4QPBF6NuJ3VzLB",
  "key21": "3wE8yYcf1gWknCnx9d668YFJVvbeLg5Gy66hyTYzxy4tCgKSTadpNrAzvuHCSRpBnnRfSrF7diGUiERKo4ASK9F5",
  "key22": "3fBSi2wnV4acvNCZgEKu5jwcPkxzZuyyX9GcNsMyovDTbmgADmPpP1T89sqbkwk2ePhMy7qKgowJCrGCTwvdsATr",
  "key23": "iwNtQ7QUwKs7uow1gb2sJhdefq8FtSHoNcnCMoN8fjM114458FUuvWp52dwVkGhfJv5Aj2KBXeLdgBSvDwxE1cS",
  "key24": "5EuPXknWhB9UijkKb6Yi4gL7kTfUxnJYe3GTBpAhhnzxKYx2uNUEMArhyQpXKZXMT4pQPzfFmPEiTjiQp6fakL3A",
  "key25": "4yUipBiqgEry15KxRJY1WHLk58STx8UF1KSYiDGm6BN3zTrTSDhcrEeCuNmts2AvWyhgCQXXQEox8inbEChncdrf",
  "key26": "5CnJ4vpDoj3WVJTVQmc8KauiYjfF5S3SC95LT5oaRZipJPM2i4rEbvnYBFJmKKQhqxeGmzoWSnpZ8jHpGyoXq83K",
  "key27": "5e6TW7fCZDn7VJ6QfnnBNon5ACzVMcdGdkoiRKpN1chVi8GsyxxCSgXonTSa3ASVuN9JeiE2G9gzMkXvZ24iQ4Lc",
  "key28": "hjAk5nToeJYucNqARmhsSS4SnVHLH9m93z1cGAzfFPk1rieEFHfLgvE2PCU9C1MirHfBE6u5PfGpLan5y1ccK6U",
  "key29": "44Ds2XmBEpPGynAeoHJWyywmYztvyX6ddL1A9ySgxB5mksVSvbMSUgLdjaU5kzqUsTzRMzErZRTds3imDkuaUHwm",
  "key30": "5anhpN1LarBnEhzkiD749or3dg8YLJVKeE2xNihJ6WUJ2wtF34U2qtSNTCCNecraYitsiAUt86Sb5bsNryc3sGpv",
  "key31": "37SzVxCVq4aoGoWrHQdRumf1zhJvubwZyN5P45R81yCjEHxeszdLu8XFvxg45UZuuZL9JBCRDpq7SLcw1n7SJPx4",
  "key32": "2YZqvCC7GAccxoL5stvxdyiDcLXsQx6miiwiWWcH7sLKnDWNRWVYfV8HAJudJnKyZRN4CA8eWDggkYyuamU4A7xz",
  "key33": "vvjXtGkRKw2YteutRCuFTtNzrxA9QVf2Jt5dAisKmNrstJPQVqkEXrrJ9mMj2GqXMS5NJMRXp1o1Ef9ZUQBPhQ5",
  "key34": "LHJUyDWBwCakPdyHoPZmkJFNhdVnYsTqogWibqx3XKo9Z1k3qZEsi4W88Fpt2DK4HPAhpQMPMtNDDbsJzJiRZN2",
  "key35": "484TYHb134aZXDfJ5xRoQHdj7PkdQv5hg4wrdeYsZ2hRCSNhFP8DdQvdNNg2WNPs9DX7PsV1hJkme5tKzCiRE2Db",
  "key36": "4iNWDqXr8X4K34VJMi6zywBGrRmGswCEcRsGRhvVGgwkEK49uRVJdPKErCeDGy4Z157vVijXHvhbHcmoML8nKmj3",
  "key37": "yQ83DVXAW2fjNJVQND2AB8RVdnG5EXGFzCFm32ur95R64eumTG9eyk96toFwYM3rXUc47FwC7t3CT56YqYZSYe4",
  "key38": "4TyVQWFMcSzLQW6fsFwrnBaCpsEN5Ni4xmGd1Wb8BNkj3BUjhy9nCCzKcJbT2QwjQ8t8t6BBpkuDg7hjsNHJureY",
  "key39": "4N28ui5fSnicK2EQ2puXw461Fu1JjZfRWnnJQQi9AZfmJy5h8rt2qGvC2HHRtQyxfKCRY8HLYqKTbYMdFdiChYMP",
  "key40": "4ra4Q5LVbR7evjUnNTHBk3vDNKxVwEhsr426CWzCywTKiRWCnB4D6ocEAUj3THdMK8J2hhhqWcyuZ1apzw36Nad3",
  "key41": "Kh5bXwBTwzjWkDUhTMDKCGdptAhSRzUtDRC5KGAf7DpNic2SFjCaNgyrmd6VMb6c5MEnzhSTjsMVa9hXa6Mxsd2",
  "key42": "euLNT2sb3gGNgQPG75ZpbfG85iuD6GVwrjwMBYU55VygfF6qkKp2GCMYoMy9tN86xGj2Wihmnd2TQarJri9bD9J",
  "key43": "2XDVopdMds1CQ5qYDsctEHWn1LAHzgYiNfZB7ZHBcMi152NcG7DaCADg6qGK5f25fN6V8rMZk6wQDGJghiE4djQw",
  "key44": "38Ju7Dm5QL64mj4fxqeVneZ4HDwRQuTvsJWAB8xBNLLT1NJW3jsVrwTQckAQ2hCYfVwGvtioNdubKoNwuGkdt11X",
  "key45": "3jXyCJaPgv988Q7gsmBTfZCck8G9EbWbEd2FRBPGo24KgAh5GvTULk9mbf7okSNoGhqx8dRApnkznwhvcrSB2dyv",
  "key46": "3r6piHfYDBuLbxAKUoTq23RHejG7jUes7KGuoiqpj2RvJf7i6bK2KzzeeiaZRehC4vX8YXjfdJhPQY9G9vXnovyR",
  "key47": "38Tjo2RDoUf6uAQdoi2mCJigvei6BEVwxAUkj2nE1f2LfV98XzKKNtXepnA9exQiDzixL7ENxK5F53Rp8DeKLMJw",
  "key48": "4tg1w4ubD7ZiigJrrqpjcVYyuoGJDsPMVUFQKUmrU4Db8tZWAjTvXPKovLtXkU2MqGx745m2vusRDghz243v2BWi"
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
