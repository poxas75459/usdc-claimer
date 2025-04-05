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
    "2iWFTBYN1mFvERV43WCZuCYkFT5yjdowiLj6frLecFhtrCGrHdxGo6TC95aoZupARofbBA4ki3QEJBYFgofoP5U7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "u6SDnerWr56yBjkRVUxvwr132XbvJBn784kYwakP9ZK7BU9YCMM4JbunMcFxz1jWDFngqEFDwzVvWUrC73zAoLC",
  "key1": "2xiYsQMWog9eCz5Mv4Z2YXMWrrFCU1ZHCTawX7EfM2AQ5EespXsvEDsWLTi3FZm7PvHazZErgUpGian9f9iES7bL",
  "key2": "2wPgipqccR6nfiGRdauF75rRm5KeTNuF8qStoMuomDqT9wGjV8ScDpT3EDWhsFYHZDrcz2gfK84P18oASdvG2CgA",
  "key3": "5jTLFDfwEsDwD5YYCqPw8b5xjZgfUY8oLYzoaVWrXTyc3qyG3EuUhiHijdRnmH2FUf6cYZxULyC4ygLzbTsQBsew",
  "key4": "61fuhp9fgK8wJ6zguXZGN721XKiAn1zJnMdD8QcdgFvc2dQfPKjhB9RNq8vEheyfTZRhBtXJndCKKZfDdZhxXbpF",
  "key5": "3873RbgAt5xmb6bP2qcNWhqt1h4Xe8rs8ewmUxnehtbgEujCR3ZiiFQdA9c2VLCHUqb5nNJGsFLmmVNQYF2nkDMP",
  "key6": "2yFfAXwdM6GezEKjcEC2CoojjVfjwuybZyx9f5iYxVJEWDHKf7o1MFLeTUYvUvbJof8MWaQSsfeLGia1sbn2YUAh",
  "key7": "56u4TJdhznZ3EGRtmUjjyCfk25Qugn14ht45DYCZuPK43C8AepeV36WzUXWvTSM9makSRRySBBUVPyjQTaSC9ST8",
  "key8": "4XpUEz2MAkXxyNkxjwcQXLjWbbzFyoNXYiwa6ymbkBYPtwpvXkK8wNRR1XA2mduRdwbbGccURhsczcdEB63PXC5a",
  "key9": "5eMYWWiNtJJLK39V3LkdC3ZoHR2pLBpGJkx8WN4KKEo7BFFxU5mzQknUuBbGixpXg553Ck7jMMzyaj7GC3X4Bsrt",
  "key10": "2rLw9frudKtoS1fJjKKrEX5He7VtGBQ6txZf6kEQfhQoDy85qNV4W22KddyPFZYJyz4yiEMpwFVzga3Yvvxx7PV8",
  "key11": "4x88ayaVkNChdPDF5EjMQjnZ1zd1zLMWV6er5NFSurPN1C82411BzB7LZbCnuTwdjNrgx8uinVGPgqRAhDoRELE8",
  "key12": "3FUqBRY53iA8J1nAHh2dmj2Nv4yvNzQgBT6vRyZAQ6zGGkfsxZ4dgwBJoaa8Lh7cKTP5R3qVZWfH9MFrCs6Gq4d1",
  "key13": "4po77fCSDZA4FZgAcTBQGcdqzQYrmU5Mgu2ia8kSQ7MJMuwcqFBkAq8hN5X2BBYjHpXiArSYUxdbsqAkYBboah6X",
  "key14": "4Krnh5xNNmrsnWyyPsCrCkjHoHgr1C5VAedG69pxVCNEcwQAuoDKtUc6NpwMQp2qwEDYTQoRHc3Xe1oMi6GoJ6E1",
  "key15": "BE6SimsH2VKZyjr4CGVbZnBLrHKno3xk2LEuzAPDawTKXptfD9MfoRZS4gUgNVQB43uGrfPaC2iZiYUddbykb6Z",
  "key16": "ZcdsrxAZYjF7aCuz5qMHKkgVi12jE2YNdhjGcFFrnDHAwvgaXiWapfZ3NqEUSubpbWp3HJag6PMUhZgfbSvqe32",
  "key17": "3E8c6MofvURnT41Dfua6zAUGw2La4jX2pG5doRigjA3kZmE21c42DVLRvHW7Xe2ABMk3oQqMM4eup2tb6TKSuPiZ",
  "key18": "2oyoycSmuxEKiZSnr1XMBqkn8LfLqPek2exCMbNWitJFzvk1BsV4ftbW5okBfVhMfdj9gaxd95FGRF6jjHqwmji4",
  "key19": "28V3sihvinda8SG76daceCfcXRixVM1taYDU5qbmVwqKtCfyFJXtkav28UKJuMR7eN4a5FV1iht9SvJ9ajTNvM3f",
  "key20": "5q8Xa7mcoiPGgdwzGMb6uynrJFaK2VMazWmimFKu6csis7WY52szGw8y9C3oiaCA1iHtAS638y7kgdwtMd1TMSjE",
  "key21": "5WHcjPQBWpYYKQs7Ter5TgpJoBeosEmSB64ZkcyHgWqoQbEWNX4nVynhACKBh9xEfybSBJ3Yvbmqv7y28QM223U4",
  "key22": "5AVcbYaN7R4W4sLYnfoAFVa62uNzS7H9Fa5ivRL4dJT6j8CDeRDC4a4SuVYSuaKViJ7RpmbtibaSKxQExGwhVnWZ",
  "key23": "7ioY5754bzKdAWgXz2SxKNYs4mXXy5njyG9tUfwCX3zVJVkJuoVMq7AbpsAnfsTNiyxWCUqdMssqa7qp3FhJccx",
  "key24": "5u791YCVLtinSm9JctrREweuJLiFVtH2Etmu1AN27B4xofMj42fCj94NDm8PwuU5isuE8KgWe5h9enE3CunuGX5k",
  "key25": "4oozT3AeaYMgkiEvcP9g7P3NKHDDmJfUs6MfNafNt9zeBEyRvKzBnrgGZEbxJ3YejYUByfMKCLLJquX99smqE9Bk",
  "key26": "d8uMVReE2DknNjeFg68bVQYPZgtvPC4NseBPNnRPViY6UdpFWFsrYWGBXhDS4MhcfftUXQRxtomF9CC7hseFjct",
  "key27": "31wPr3aFtK7BnAZFEb9tVp42MSzqMvRYrStoXCmFM1YdfJqvhVkvw5ewaiTJvRfK6doxMUd89fd2DBnprLUGCAk2",
  "key28": "4f2YYJoBSjgJPcFtx7EZMkoeF1966WVxkDVEiGSMnPkbxTpExXGNN7ASQzgSav7E5fn4dTkij5bV9XQdjtH7Ftg6",
  "key29": "3kdfXd8WfcEVCs2VDLtUbpiL2y9pZtQ4vKMTU1KbDQSKrgts2oX3wssGAcz6QUKfzAQ8pxsHVfgRcPcufmtxGBH7",
  "key30": "4mXgR1hMrqDmZRteMgt5KqK6njuajQ4aeVJzM9q6hqKcxXtrFih6aSB8cpuaNYzFphn2sYcz6QsAahnkf2wa1G1A",
  "key31": "5DaktwjEHvgUkWyWShpi4Ru7xdeLww9xzdhcyWybmeQEbeenyGzTZunvb6t6L2PQXZZp5mkrpCZmV3Do97buee7x",
  "key32": "5zyQNkvqTiFUDz6wX8Rd4fFuY89TD2Tv6R74g5E7Hd4gC7ei13mH6eHy53GyEGshZpJfZTe6XQAWfXQNxSXmDYQQ",
  "key33": "zi1yL4xZ29HYutDwA7ku6Lp8SKYKzbGdu33EdpELn7VaPndMTvFnT6EN9NBDxCa185nzrAeWrfmRnBsr1Bup5oh",
  "key34": "AXoVXkGJSjxF6RNrpRfXkoWQVc7uWcLA69QkFcyCLwirg8cT1jKftWNHW8Suuegoz2o5nf3W26wJCf7V3N6osd3",
  "key35": "afrTahQJVMptm2B931SzS2fHDs9wHX9mVosajsnANTYKY1MjMdeDi68dgNJZUZpE2yCoHxUQwdzw9q9EHekvBs2",
  "key36": "58hFGcQF7GRXfTuhgLmWSNQQcrA4FbmJuDw6ce2rPo332btxMEcKFeBkdDf5rB1KGeXRQmJuJwGT5dBKSVZ7LAYS",
  "key37": "eajtP4B153SJAv9Nr5q5tXmJW52hn177c6keRbCxJw3Ph6mwG7tEa3rZkpG1LnFdftNqqcemFPsW5F6EGB2VvwR",
  "key38": "rnYWGwn8hKT2neSG1Lp8NFA24EW9HogqiHJdsGpoYVk5CuXDRv1gzsVi46YJN42cb3kzzeQMJLUZVpAJtwseJAb",
  "key39": "4sp1NXpSd3221KN38v1h11w3NEiGk5vJpUe95vX6o5UrntDQ3pHDyWuxitHWPEzmFve94aEfa9S64sy8rqqGTRtr",
  "key40": "2mHBrZVNP1drWhZJQ6i8FuBrSEuF8jpe12ASN2qt86veCZxtuE7aSjvr3r3C5TJAtTnLhx8upH3jBqFzHKxFDxij",
  "key41": "5W2oWw1xB82xJg7H2eCWHD58nqBvpV5cVZ2e9YRsTbD4iA35ZhY6HpceNyqihruP7M3DfY1gzf4LCVcHuCx5SeFz",
  "key42": "4hrKiaQp872AxqRV3vuf9oebKAU44gG8MCqjJyVx7uYZuKq2KPQyMpAqXkuiAUhx7jjcAaJJMMRstFSgDbRJbUBL",
  "key43": "41XqKKfs5Dh8HuW278viL7ZQn7Z2nBoFJGVjgkwG9v4XjoMsY9xdkYNPg84jjQYqMa53EGFGJbyMuYGszbNf23DN",
  "key44": "61ye5AnhyEaYSDQ3U8FQPSpGUCWmFpCC9ikJgpq9PUfLfYDsayMjNf7u6rFogZDbqhK8s6zSf4d5YNbytaE1SQv3",
  "key45": "1292W5ko97veamDcXa6rM5MWSpERA8GynevMYos3GmJXDqMZmkQRGJYTAWU9RA7Sx3rn3rbcZ5qe3curXLaVVcLW",
  "key46": "LPRJ3MV4KDe2eLShjwRoa6ZAe1rHnJwmuPXdZmkQtCRHTghqJnSWEscmxtGDp1wKv7tfiEBuZdrzScxmEYgNzU8",
  "key47": "4yufRLaCNWJnuKbWtR2oSYGEFNrEWM4MmD5dkV39MQsyrYm1p2ZAQpnaoEqEyG27mkJynJp2fH8UmrCPA6EMzq1g",
  "key48": "3BxmkWczwZG5WQewDHqxCMfHjKYnWiXBcCrPNUhVmXFUJLG2xWKGG2htg4VGmWKNcQEogNkHLWUXZnTn8dPWi67L"
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
