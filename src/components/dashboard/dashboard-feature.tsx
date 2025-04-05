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
    "5uwFrmoUZco9Js1kMKkpp99QBwjaTS5DFFQVySTURcXwcq7gs611xPv9mSZxFScewENTNKEajV74NJ7P67YaiUxG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49XQCtv7giNwCj4QAUqiVw5Ad5FF2rBSk2YUuvMAqGfsRngf6WT7xuqXqDQpYAh9aV3GCSPvxBtSb5VQLysZSd5W",
  "key1": "4piB66vJ9Efeaa5ofDttauk7A58GodynyJphULkTRztPS9t4MVYWE22nzUk4orzes9XLULxWf6aft5s5mfm8aiTU",
  "key2": "2spTiVsZMWeTbaxasnjfini5pHbsEj13xMJ1MeLCuRDN53rimWb8qz4M24szJbp3Fuzs1TMJJLzWnxhjKAXGJJ7h",
  "key3": "unxWvUYb5intV3puvJKHTGGp745zwGS9aPPG6fHPsonXfn1wKgXNw55cR4eVpN8n7z5dPnYMkEV35hDjyy2nbqK",
  "key4": "GUP1WdNZAuEsfuXiFVYnighkehzN8SQCivJeeGAS4Yfn9gBHNxx4pdcsGtgBTMKcMVESvuXwYGtKoWoY3tVpMke",
  "key5": "eyq2bqLSPf3Vm6ToRC798miRW2gwX4i7bMq1CFNwHCR7BJnuh89RfcgkJN4D3x7n74osRMsX5UgU6F1KKoJsV7U",
  "key6": "2wfMHKMFAfHqqq5FWMPJhHhQSqy4cJN1Z8LqPgv3gNgBQyxHviVqhhiPsWiPAvMSxLikr6qWWHNB71gmZTf22csP",
  "key7": "pi6DQjFb4bwvwJgdoUhri2jZbnRn73hArqZTnuMaEnpdkKRyjtBoh6XcxTDupgsCaD38JDZdaSGY9Nb5kDGrrKF",
  "key8": "4Tdqrr5ALfvV548x3X2VZQ24F4s4L2wk1mzC6mhfHVy3p2Zjahyz9M52ZsBrw7XfPoCMxpiK5pQ6FVqFp9K4sZWn",
  "key9": "2NJ2jwZi7WrTWjbwGuyP27fskKx2na4weJ4gz6g7tpgKMULJcSk8Kx4sSZX8XjdEKbreoLJStt4BWTYeJUN9AY7W",
  "key10": "4FdMzttNSVuaRxCBe8wVhAJ8mQKKp9W2XgjUo5S9Jv1Lsh9yNYT1kbXG2A4ZiCQUJfEVLFjY7XXipTXPC7LGB9wL",
  "key11": "59mh17kRKQboteGEP14WPrhE6QD6wCGQ6t7wpqhMUVjpKRVr8f3tXyvQB1eiLaTKWNED6Via9w6gjEYNZ7YkPSz7",
  "key12": "4t79K7marhQNnoxaGhxecrkGA23yjkZrp6Ca31kafpGd8qAAWe4QdrVcaUVfWAxZDBSaZuLHy6pEDhtDeUyPw9oe",
  "key13": "5CCUKNLXdRHHprdxWXYMxY5csrTdoiPQLMQgoZtAnVU1N1Ax3thyueSKHcdgJw3qmYxNXgpgTSku3ZgJAUQmwkR3",
  "key14": "2CXr8MqaQUD7EGoXRKKFkuZSgtHWcN8LdVQ85VFxHzQzaS9KSXLDHS1M26HSnA2tZMuo3AHcHskGU128QXC4LDqh",
  "key15": "2HxBSUBeVv2TwboQoHnb6G7UY9FpqpRVHKzmCLhjVEX7yCLqbbLb4doLWqAyCWECSeJcptrDxEAa2sgB4ki4BJo",
  "key16": "36GKuFk9hhrQmV3h1JbsSVpqE8gRMZnG3aWyExLDYZUBM37yZe28GFVar7ErqxEGYcW1UdgamvY3catMADGXhVx8",
  "key17": "5SRjp2Bz9jmBbjR8QiXwza5R8zTKjwWJNGyJBUkWbvXtoTqSTNAFVnTyu8vk2RuDpiPsWgntyQH8SkZ8WfwmQ6sr",
  "key18": "5ZigMrtsqGSsCdYGGpfETDo14oAMXHGb9YDPusWw23xxJi5Z2zUJotWfjDtkVz78HjuQRYY9AiwUb9nd8rf4X2vu",
  "key19": "yDhmE1dwATVQqFJs9ACEv3xPaLCqb2MMHFbHQrDHmps5EFdK9KQqeavnXJXZHe7wrKUQ8KwpdQHsfxoqYnVwC18",
  "key20": "4ti78aFbGJYCqz32GkXEqj6EdAZ86TPDN8q5Q34dnjEfadxipRptTAG2cxWoLkFkb8TTpQXSu4U7xLeZKHHp1pEM",
  "key21": "57b74FfjrMRGuiD86FhuLCXf9yczmsZebUZXCH5GYAu2EygQG59D2B5ZZb9JZukitczXDhcbKzowcyyEsfkLzCWg",
  "key22": "2AbL7FgNdSgmQ2WNU7JQ9FwEbnw9aqj8dTwmtg7nqsS95m3rrNWnaksSAyLvZt2J433vGic8SrDUjhxa2H3ZdhfW",
  "key23": "2yEnP8LHX5kHJjTGT4UyyuiZJfBqT9UDAC5qL2RA4qedrwCZEUWYVauqFsfLuH9QAYT1kvuA6PF7aDrfZoVGpemU",
  "key24": "4HK7TAg8Hfvk5orLkFjYmphvPpCCxNXTJZ16RytDrBj41arm3aZMxU7oxHMyvQEGhcmdY5pnp3Ztp1mrBHMKBvxL",
  "key25": "2q3Qko9T4dR1wzMkKkTV7jjST5cTzQGEDmJQoyANvZpubKYq9uiqAyeBHG8PuLeJEnWG4QZbKAxkNpM6Z9zPWpcS",
  "key26": "3RQong5ADku9gpzNxJKmwk8zc6nfR8Y8aKA78JGXuzChv9EPobXMmHo89oM52zgHt8DZC5z3kipMio2rpGykd9sX",
  "key27": "3GKWEP5ayYrh1WWWsJyHBTLv3VGrA4zC7mVrfyLybvKTfmPQb9qSge71VGqTudW7uEnmivSJmjVzSsFjU23dfdf4",
  "key28": "44phHWL9VJrS5yaMRzthCf58JDdpvg1ZNDAVowyjT9nmUgz77A8zX7s773vgm25586PQVs2VLWowvgyskJECXyB3",
  "key29": "2sKmwp3D3xdAczgRvLGDREnjxJEthhEbjiRtsULufTqscuMWrqSrUJDggCLYZfPeygXracEzLBSC6zSFBsQXprbi",
  "key30": "5uw4dLwT8eEiguBpZmzaZnUKHFjZ4Vj6wiEQgwnn1Uwo2K539gKa232ZootDKXxcLP8LDx3cLyXrDGzyJEMFkmdu",
  "key31": "4FdDguPedy5toghQ38tZ9wM3vLrEZu3cHZYMGxFhyAUKTxDN7Pkz2Jo67Cj7sFi5F3uY1xqxingbJfV5wo8CCHSe",
  "key32": "fVkrESBT9fGGs7447BoZpYaSfesd63foPurbzwZeFUjEZPBPG49qKQqiqf1fGDHgJGKL52fc9JzJFtAtY1ga9AK",
  "key33": "3f3Fz5wvrUn4DGcHfN54XaEyx4jStvvkRD5MDUAUqzmSVkby5DvRxK1xPrXfq6LBz9VRS8j6ThHBq2p4gM9KEsq1",
  "key34": "2H9puLTBAHX7hJXY597TKxnxPzqGap5dWu9MBZPNqFXXBge4XH2urQN8iJVQs9mF9e2vZsciy9Gx3FvmYNTYY7Fo",
  "key35": "5kgGK9J9YiT5XLN1teJXqnzn7w2CHtiF5BKZMZUBpCqgWEULNVEeMwPWzi6pdMaU4gFfYA3hwLKs86xdeetwAaKX",
  "key36": "2GtSgyh62LLhN3nzkp6NUv4aSUTav752ULH4Zn8FSBvmGeJreVr9x1iQwmwq92Shn8zWVJijJbYPTxDv4axHE14Q",
  "key37": "65ksZugQFg4c3vZzqC2vUohkHBG961Bp9uyrydkE2cnKrRZ3beAcGTD3yFKe5CKDjZJJL9J7EwFfJ9EWNkyyBKVD",
  "key38": "55rrr48fZRwpxp44cDyqMfVJ4LGmkrKgmWDoCeU7gcQVprVg5DQi7FPCE9SvBGVDzu5NqzfrYzBDqL5WkmGLbDvS",
  "key39": "5JRGxXxo4EBn8S7ybuXB98iyf9JJsLLfZtM6NFTp8NUQ3KywVQpn2JRu51tqQQ26nc8Vi958j78c68dbu9gvXS2d",
  "key40": "tTF8rLG7QFg8qnaBc4RNt1hNLCNBWcrPwRZuZ5enz8GUz54kYLtYLEiW8wYMoRPVgHJpkUTVK1q3REV6aPGruoL",
  "key41": "2K577R7xAt6pCNqA2FjQVwDY58WB9ohU3gszwDq1tKA6kkE5aRVNFzQ5vrti1JS44jPRp3zaPxUZtHLeTzVavisu",
  "key42": "3tF1quwwKgmUFsShaSDrzZK4Vy2z3zHUoDDZuNeF948Mn3uwpnMRx7DVAitzvp21QF7x1EnF793jfpoSd8BWUz6W",
  "key43": "CJh64Co3RrqPWMyY5VYGBvgLBrM587Yx5gSLEiYPM6k6Ac9injztpqVSty4AfKva5PiAJsiZQurS4V9Tm9MkiQv",
  "key44": "51nPJuQPQAQfu3d1EwtqW8bEc4282xnqJNMWFcDWgY5MmVX2Jrb9J5S1DPxNHeQuN1duR2B2z3uqXFg1zDoVcRC5",
  "key45": "3H7tJRtHovc87HriVPwMnrW9TVJujUjk1nNuGrkph9Sh9jMDLHQNYx3mm2hncntasUisoGsUGWQpLfMTV1XFwiSz",
  "key46": "Q2D1fVphF2UAGwqcFdUNF6EN8HdXyJELzhhDYJmnD7FvBKcQVLErbk6EkeyDsiAh5nAdEcfaby5cccxr9C98hUr"
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
