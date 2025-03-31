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
    "2fAAcBcTzkCg5DDsK11ZuoLcjN9FYvbHH7V5Kv8utStnyx6svQo6bqgUo2vQbKB8AkoC3HRbBCP3mTQUxNjGh7VJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kqViwcfQVbiem13jdQvQ9NshMrXsjD1NxhEH25bqVWQHdkYLRjaNBmxRaToHDDSMaucrcdDmGcyTLumn6B93C7g",
  "key1": "1514TnHHYhHxXMcBWDo3TrDg8stXxKxyVuo5aTbiPvbsmaFwmVYJxwV1uiPap2Np79C8t8v5oA71ryayp23ND1g",
  "key2": "2pCSg7iNEiKqA17C7SSwevsTU24KpPUqzUJh5grw91Uj7XsYxLmaE6cgt31UYB5NgXzCKSDGotMsJwGrkigG1Qjo",
  "key3": "4xPiFsUkkmY4cNVciUqwSKJB3k2Y4vW6PftPXWk9cXrC9XU663gqdqN88HdfBjbJyDrJKCkqgcVZ2ZFGbTfpdbbT",
  "key4": "5mcZy46b4eYhnMQE6aQd1tV1JTboBSXdfzE374ohGrytcg8S6pwmpGoq9qayb5KGFvF74UUztEgDhYSxFG9sJ9RA",
  "key5": "4KcyJcEBrH5hbh5T3RrARCCFQefwT6ib5Mh4usnzKyHLjtTjg1RCQBR8rdizvnei1hCY73uD8UPgbpqrqJcNLNbf",
  "key6": "4RLyawgU2jh2oo9ASxdeGx9Nc3NfVnGL3Qy7FGc9EXAwE7Q7C1BdNjL8TEaRzt1WbWFiuv8hbtcYC2pGqWyjmEVf",
  "key7": "664UTMQutbAoToKSPkiUBuE4fKQDS7PCKqirKRRNsTKbmYwe4F3F1Vr2SFYbbE7D5muBGmMMNFauYxSRUX11QeLu",
  "key8": "dkDYVHTFNcS4xkqiwwPFrC1XTokg5YqF5o1JCxwj1wQzhCExfdbNyxmmYUVkNBybTjaCk22Vb7CinM9kRH5keng",
  "key9": "37TU5z9kCLSPEN9fRVEAfu9gLowG8Uo9ZfFXY3DtMR32ubf46BgS1dsUuKsNdjNVXNvxSxYpg12pATMxiizeyQfU",
  "key10": "66gd2gTsSeNPhRaqXLJCExcTca44HDL6G3rXm9j3ptauRn5MwdUFuXCj9LXi62r4SKAThYR58ysscWC5mtfHpzoD",
  "key11": "3XWj1XseaK8jWXTPy4gkJKF5pYWZKBQHAcpN84D7GJEBtG7zMiXsdkVoqPhwV4Hfyr74SWnoqswfJ7Kod6sgdC1G",
  "key12": "ueJv8RZSWWoEcEff18Y8hNiwQqF9aLczGsYPRhmUbwDdnEwaKGieeZy9p4K4zAEQDt5vrwmEZxqx96R9qj2DKbQ",
  "key13": "zKEo1Wqp9jQuuMQGSEQFoBBpBe6qqNJ9xUaXaVxKHgQMZ4KQwFhHacSX41V5t3QFaJJUpeQSeuYUaR3x2ywRrCh",
  "key14": "5Wrn2TEKKFcdnjLSmPRScmuEh62YTUBQboCx7ci19G2DaFzgWewVGFTdsKWci5JaKhdArVHBx3wVpHS3igYKY6dT",
  "key15": "5vHqenaJvv4jyzVHL94SFRW7RCGuEB59AgwYwKZHo7hJiMc24LwvdJsCNdf6pzts8jjgLjQwmk5Do2a7yto1AdFB",
  "key16": "3nHUWUafYhXhdPiHBXLMFBNmkSvhchT8AFrqEeTjYUmBWSGv685bs5mrKrHZfDKHMvnVwcawycwZtNMBUo2M2o29",
  "key17": "BMnZQr6kau7TwZk6bbZLzu6VdRqCksrZrXvi2qp8BfKN5uxrU9HVenWsH2JXKW76uLAfgg4TGR16hTVKbuisgTh",
  "key18": "2w15faqxxkW4YrcwfyG4zFkFzu8FUXQremx483wFSqC9tH7xxiyBkhquXjBvm6iLHpLMHibEErLhyfMvS1TkhtUR",
  "key19": "kkDv1JQGEPnhd24BtM8d2UoDFYPrmjdK3psWdup2Trd1jdxcUkdLsg6bBW5KsZdezac1FdxpoEGthn8Q9kYEqcg",
  "key20": "2PRfMDowzaJ47c2Y6FFkruBYaUWGNfayXZ9AedwKwaonbbU4F1kTDs4urSTx9eDQ471kcKXiEbfk1wcbvi6vzzge",
  "key21": "5u4DMBBfpFoPgheSQ3MNpWL9HdYjxRSbR5DWVj11f95Px8xvRKbBJ4UipYuRVgnYSi83iXGNG2YJyh6dWVTE4BmE",
  "key22": "5W2k43QMJbyqrM6tGSM7Nr4Me37Yvx1fAgdesWzYT2v91ZYHE4QmusdTkDtMhHNJk5tzgotgxHFQZvPK8oBG5op4",
  "key23": "4YoWvVW8t7bjQjeWGzvcXr75JEw5fwz8DXSN9RKLNz6Y8i1Wig9irbGxEN9bSZc69kgkJgTocB5hkGr9r3aZKyW5",
  "key24": "2ryzh7bsreSr9WfrzUM5tZhCG4AFGGHDufMQiYvrtyvnmJ9wD8BzQBx815cHg8YfCmwsnUncxdLdh5gLfs6b9GmL",
  "key25": "3TCDVtQLEGqnfcbDj258FMea5Bs5qJXAzqfihzreCJzX7TbVHY62viSLncww4Hf3Z8krEMmWodynC7CXyT8q2c6Z",
  "key26": "BDHX7KSY4iFeV2yR3ycm2Ym8YjUr9EF7BbNE3BMi65ChYPmWCPWa8j5kKgL83zQNSkTVvbL8jNxyxQ2RrKTaX4K",
  "key27": "5vzPHepiobPpaHt5PXJXrAyxPBQC9UDbdh7HSRiC7YXrjtzGbkCc6Wc3JZcWvD9LoufvqfwEYmut7fRLYVWRyedT",
  "key28": "4VvkBv2Q9YW3kEVoZveyQhuk4xRVZj2m7r5y6CoXEq2Eu1H13toemy8U9yYxuVngG4VenCNDcHfiGwfrB5iksWhS",
  "key29": "4LK6xd9G55xzTdRXGHP9B9KhzZfFNWV8HPLTT52yMmwv8G6kfKtFVDpM4971dKkaGLyQJ2YR8eWc35u31HxA8aw3",
  "key30": "3ZVqzM8axAgY5uULcRa9JtcuHy1zj7ro4Z6Q4HoNEz6dMQf859npaCpcHNaQrNdxWj9tFgww9KXRoJHhE44CTfnU",
  "key31": "cwHuckP8D2kDADnEf9QJbgVzSWGVAVtmfDpMXCVUHxXvycGDQi5VYZ2Go3SyhH4UPhZieBQBDRh9ppgUttaTHgS",
  "key32": "3Wx6FCod4fTXnjtDmD53s8kZC9XTD51Zvp7jzvTwp5rSMsZyHFqf2GeU75L9Gv6XcG9KsDyd43hPpm4SRbyMko7B",
  "key33": "5E4NJHHzja6aA1UTofihcxCZQMGrKBgFYyYkRgjf1yDRzPYQgyZrxmaPW7Mj9o3a8uPQugJ4bJZUs9grvk92bhn7",
  "key34": "3n1SJ4se9RBzEnybAdYp8GV3NdKFXfeFRLwo4RXSJcoqJbZkGfTyKsZK3hFtYunx8B9QrK9waDcWqV2aRrLYi2wJ",
  "key35": "22Q5riE2R8c4wotygY94TpQLKRWVrpHS5tRJiv5eJaxzKFQ5SDNMZQcdbj5yTVskQgEuzPw9esLk5JNKBe5qqpaA",
  "key36": "2GHGrK2LpnmfkgfzPHQxgDGwo5jUMeuvwrtHWfjcpN8bEaNWqMZuB7qofhfNA8peU87u4E28URpqUMMmueDqd5UG",
  "key37": "3dMyLh67EuGZnHSEykYNM1vwiK4VzUcRCT4PgnsjQXw6pkNzPJS13wBgJZqsAtXw4kULB6pkADFCrmfBkieNxGgB",
  "key38": "26TNg4kphwpreCsZMXmyBvzhQrbMfDBz59etyv8Ju9eRyb5BsZzc3Xhj47mrwzFGpj9qvb5KRQm6ER6t8ohipAov",
  "key39": "m3cXHmsiKigKz43z1obsSLbF7nAxuAFaE2g1AY5SxLwLgdhuAG7AZ5qfyWpxPFSee96ukzYTDh3PSzucKc2QVc7",
  "key40": "55cD6JkDidLApbd7yFqsctmfpEPeFYd4rK9AqTbvDEWpGtvaw9mpqzzFtTWhsaxpFLWd79ngm2JnoP9YGnDxEqxj",
  "key41": "55C5MVHeFwpEtgj71DhTqyhpZCRWJ2rdDLXrMZXwZ6c9zqjMCHV65rmJbme3xUWKKvTQG1KCzkhvi1sCWUJcXTEj",
  "key42": "5oRrQm78KTcgJCDczXuGWYdfgZGmFgtaDWDR1crEAVqTcsnBVGAi6QZ7ErqLQVMAwNX5LoebRCQcW6CMwJUB46Nt",
  "key43": "5zWTFzwBUSFX7RhSCiq8UoFzEGaxbna485A35rrD1g783vtgVKyDn51pXxufQvbCZmfMuZzBb2K1bFesAfCjG3s7",
  "key44": "37Ag8AoU2TXYzEvyVrmxEHsvKfyHStykAUSuRsbjaw9xvTDhW8xXVPaU54Gkewo9e6AcV9fnXMvE7pauQQQfu8rw",
  "key45": "jgvpA1z5NDjw14XuCaXrLwwoDNziS6A3Tycj2p2rTPjw8PFf1MgVMUhkDcuhP23WzaLRZza6xaSRUuAFMesNza6",
  "key46": "4gx1r55jMD3rFw2xCoJhVNBcmwaHLvAkmjBCa7Gc8hbTXyMqqSGZZY7fWFayknyufwzr5iCMiAqgrUA1tmvura6a"
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
