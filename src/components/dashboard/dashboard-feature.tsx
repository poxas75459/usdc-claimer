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
    "5X38rYeo5QMnxVbiXbsoPkFwB8qGk5ReCkyfbUzFyPWCA66SifmeMYVkux2Sz5j7LBTNKNUVykLELeBFa6beCVv7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27yf8PvNpDL3cNTqhAipwADrNiTsAFey9yKeeaGrw16RzvDjgYe853kLdrSYbu2DTeqpU2Nk1oyRYMQe6w23Q9hr",
  "key1": "wmj1cQjaxpWiRDUsysRKHoibdmDZ9uTFRqex4sAohQPJXaZurpyFvhCQUiNCET5dHFdnPTewcvGq8RVUJQbC5V5",
  "key2": "25ZXJFzLUDGZ7RgPM4xcg7QD7bDu39LJeHwb3mCQundQtkWB5rS87316spuEi9bceB8P4kx4LHK5xcyf6bFcudQj",
  "key3": "4jfjqyZwYCJzaDuPfaaAySff3P4sd5GjTNucDn3B93SD8Aqb5Jqy3AUfJ8jqdtN4ifdyiea83sTjg4ETEovt1vvV",
  "key4": "nFqvu7PRj744DPux5pXF9p27fCDLDwwsMhMNL5cMLV7YwPASnWcCBRWDFv3rczAJLiY5T7tJVkjXJEkESPFbUvC",
  "key5": "26ob3Zkgx9AkCpHZieczNjeUtoSxnCCbyx9qNC3iuUy5Ybg7ZkZTr7yWxjdMjguQh1Y1basNZeRS4dcQ9enR9de6",
  "key6": "5LNmyKLYonqzvsCXQarNq2XCDFbryJNZkko6ZEdpkHGhgjiko5xbgvS1q5qJs2BEYWGX3usgrBi7wZaGsLPXhEb",
  "key7": "5YYhCDuMUsfnF1GdkG5kP6QXskp55UBRZM7iGFwBRRJSDFgyjuXFUSqDudKK87H9vtgFXj8s7fvyyc1pyeAd6xsT",
  "key8": "2ihaHDhDywYVFJHW4kTTkWMyvBSoVW1SUSvTabTSrNZd8tUagEtoai3Wnfyi3zzNfoixciftioNEW2QegPczfHP6",
  "key9": "3sMAXS41JxBfhHugHaEp9uTZVwwyiRowmscaE5ubQRzbFHPrhEbYhEQd52tCCWyNQLXFr7KTVq5Jti4pdVctXZ8f",
  "key10": "56jrGAbeTbYaxFUe42SotPDoqWYFeTZ6qiBXTDtwMoxA3S6pvGZV4gQtZLhvYCaYisLySMTKN1SeSAN2NVCdKYtx",
  "key11": "CJHXdiebr38qB8VvW77Ji1NusbLhovQin4b2DnHoLyvKpJ8SNz3Sh6W5JdX54Cqvv7R3wP1urBAhxuctzLHypko",
  "key12": "4Uc8VHWY31v6Sb9QJjwzcBQFVxzcat4UpRnr5pKYfJK8uvCxKmSu8xYrWt1vcSYEprBuYenL5BYUtBpsr626DCVc",
  "key13": "43LWbCJiJhGkBgJHzSoRaAXfkgGwWZ3uV6evm3xmUdYdFUyDY8XdvMtkCuGxpAerzCte1xnCVQNAJdCCPg42d31L",
  "key14": "3TR9rBsBeSBXGFNZ4p848Z6uzLorYyadLafX4TfiCpKo7wtdVLvhGS1fLG2x17UbFZRKGTLTDenEnwdC6pmEKc91",
  "key15": "3GSEy3qjMiCUpNvRe9VaLhVQqMJtamuMBd4Ph9DTRXrBREVPXEsVq7WhMvnMoN1ySsLeFfUhKrt2Wp9owoifghy",
  "key16": "5B5nReyjb6YxRPpfH9WNFESFaH9vDfYLUK6esuFEdjBZawkB3HVorCXnF9Eq48YTbwvNSRNED8EppiMksQNDaq4S",
  "key17": "e7eyStuL6235RPNxPYoShE6VJ53C9sY2CZJe1Ni7mqRKtHY9YFqh3tptJEQiXQinc3hBgq89K6pAJUabEeiWYJL",
  "key18": "4aoZc5E2Xz4uLTWgdapzWzYKv2rimM5ZVDY4H5S4De7WF9M4MMPVvgdHvLcXg2QfpJn6PP7HrAheoSSsxZhskeGv",
  "key19": "3aJeDteLnCtfxTKgHLJcSjkfqGG9sUrSGfEwtnbT2E17QQ8EUuvHEKizEcA4E9YcQ3rBQPwLhLuE2m1ytGywKjcj",
  "key20": "3jWsdR8VJcjNGju9Dizk4icxA1n9aaGAM8Z12uHASezgJoL8v77JWBskveY1Wq44LmrcGHQJbragG2d6suKjHVDL",
  "key21": "3gRW9UhjBRMpamikRa3aAbLKqH1He6aZoGEj5D2G9jinNosXGymNzDvLRNkuD3UTJxtVptHqbUeYgHHC3vYGCrVu",
  "key22": "2Unv7oxixkZCnx8HbhziWKVQBoTB5dXbbpoTJ4kL2hFeLiavGGydxykPqd29XDMWpRrkteW2m48opmz1kDKs28FZ",
  "key23": "2J6aHMgE8PQtGFKCimUnA9S1cyhjeyDM431WmmZufpQm2ncxmvBuXBrQmu1dc3fyDPcnqvH4Cb3wxHjQrYD9HNNw",
  "key24": "458WCdwa2iyYjVcjiXiETibsGYbpT5wcjUmsJLkd3syCbsQXNcFxyik3qF1f7bdmhhGHabYfdbeMhfeimNHLFCCh",
  "key25": "GKWTskTPdjdhx2zoTXLSrwEPGNG7K5WrMNKREdQyFm1SZvvjLbqYsCTGBW3WpuPaqyeXWHp2DzVVab4WSjG2HvX",
  "key26": "3L3c6eZpwPmBxhx1hmiVQoHqkQvpwSdEA56r3wFe3bxdubZAinDLh1nTJ7Jv4ofQfSFt6gxt8SSe4f6mfpD6wtp7",
  "key27": "3ULUQNm9Nxz5dYr5R7ejZXe4Hjpx3oXjYfeizM94rbuUydNGPXwGqfrmdoTEuPeuJhFRfneFZCtCUFVaATYS2Acn",
  "key28": "4nzrCXuJPLBhYz1u2Ri6nc1eVQUegHpwRPK2DhXWLvCtwz48vLBkVgudiykW2YcWmf8jWniDAWk1eSDbjhbHFEyC",
  "key29": "4JzpdJZrK84ADtFyLJFHGjucfuRjqJNW59vt3cbpeXTKTyBXU76gtKYc6pjyHVD2xvr9oNsWk47rD71ErdHdkeU6",
  "key30": "2b9Tmp2wK77XibqM4eU7aHBJVcqN4J3kcUHjJngw22gXja92N4BDs2FkVzJaeCWHpbwhYbJET1oRaFP9xTetQwiQ",
  "key31": "2kYU89dytnGw3FmDfu2XzVCjMmDZAzPFX8nsL2GDQdYYhhcAiUs4w4y5ZTTSShFMLAZqZCPdt5bsVYTfASfiqAWE",
  "key32": "59JH7MUNc4t5D5ZxbH4CGoUGjvmoBVcrzPbuaoCKg3AMoq1fQ4F2sv7E6i8ayoKSGt2r9PanywhVBpPSPiXFmddf",
  "key33": "5UTS4eGPhMYTTaHG4NVs69pFSm3XohhrAWRJUCMcvz2jiB9VEsKS2sbLYkvhmcihPKEjzh4q5kxURmRJMqyHGU9X",
  "key34": "574n1Hb4e2Ck6t71bBRnUrpyqd7Si7BRiwEUPPXQ268B6rFXxDFS46JD8u8TWEUZ4N6Z6PH18VT4PVGirorqhRFo",
  "key35": "4UErVsD3ptt7qyQJbp6gUC93n7qs1zUMt2Pfb1VvadHwsQPp9rkmyYGg1RoDsoi7kdaYEigYHd1nMvfnmYzSV46L",
  "key36": "27kWLHwMARMscfy5KTbHEEmz1anV5uvfwWDP6BwLrohLRJGzPGf4b1b2LZvsc7thH3suSKAtnFPwZzzNVWj9rzF4",
  "key37": "61SMAsTJgzfvBMJucib4GVy1FycK3baXaHsBTx1BpNmukeuSr8PJ3CvgpJ5CrvuSk56e9xaSRdKPHT5qwmRBYe3W",
  "key38": "4LqzZhhCkWYjD4u1H2y7ekbEtfqyBPShLLWr2NviyS1dryAGkWh5Ng3ZGcT6yqeLaRzSxuqQuaasJziyTBmavYeg",
  "key39": "AGaJ3o7vBiEGUWX4NnZuNx8qcfPqyZnzAiXzVJTMhPxrn2Nd9nsDNcJdWM4RWGKpBT4Dr3yC4fWMUKXaJhFJ1p3",
  "key40": "mGy2yHsjz9dKNhoKfAotM8fGdjeK1xXitqAz7cHsLqth5kvWk4DZmgsbFQPGQMdu5pzutNpWi6MRvxdAjaSvSi5",
  "key41": "5q1BwkHiGpsQGo8hYoYapFJRUmKWuk3TdTcY3QoP3RtPkDitRrXgMD3rGnoCxYTZa3JbEmo9KbjGCCa8JAquk468",
  "key42": "44WLEoPutneSVvwFuSRpHAVj24xsHtQmQHoAoZQcE2XvnZ5gPCm7xcPcHYcjgKVhdVH8C8UAtFzSMxwhYvhGEgDj",
  "key43": "4tEaks8VVBTnPTwsCeqLLFS9Uv6R3gs834hHds1WBMR6Bta398HLV6wC33F6XjBNjJ8vddKn2QzfMQm7zJKXZQPU",
  "key44": "dQ4bbeLFCR3SqVLPcVXHDj757gtrNhGtmpgYE73pEi7gvEDeKo5qS7KnWLqY7Tj9RFiLqQSmXB8S5sJ2gJgQ2zn",
  "key45": "3bCRSfDtKFN38U2hhMv3ZZSJTjhJjEUPTmbHKp7CYoFw3XoZTvS45tfKkw2WXbfW3c6i1nU6HHU1n6FhnqSvoCbo",
  "key46": "5WFdi94ShEvNa1Bb8qidgoB8NqQN3UntRFMJwEt9vrD5ZqGgHRxnPZfAdQpx7bCwbB6Vb7v8GpEXFoAjkGeyJr45"
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
