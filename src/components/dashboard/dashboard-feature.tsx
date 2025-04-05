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
    "2VoNBgkV4ZexwbWqT6ZPnWg2VuUXqBsFcfL5VwRnxWxoQPkvkSwPUBoWoKmFQes9fyMjTyGfaoB2sa9mGCy4GivC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oXG77VeoqKK7jq16SfdpVK3BnCo7nYrw1UoCGekka6FbNvt4JRrHcNSCCXoNPmTFACYF35gFXzh3SsCW3hYe7w",
  "key1": "4qMTsL3Q7v4VH1Co1tjxN7hmaXSDUtDNq9ZTaFNH1rvFZWMB6gK1Mz86tdpUsYGcLA7VL6MY9wHXXbiL56GqgC3S",
  "key2": "3iwXt14eMositMd3zi6scN6yVt6suTkNeKZNDRAzvHd7RvAiWvgDa6CBes4XPFvTYi6BVQZSS8YmBzSVkJyY8GVD",
  "key3": "2TDzmbiJXP1vCs7og2TQxuF7JvAL4PoF33fgNEzmbLo3faiDdtVWED9EAabzPW611HBhKftuhj2HJr1NBg5wiW2T",
  "key4": "27dYhf3cFRRVQThvojV36wMW7dq4XKbPJtuG3uaAtcANsNmcrog9i6ZEjweJWpE3fs2oXsk2qwLwRcCzDHyMQvii",
  "key5": "vL2Xpyywre1ca7hz7r1fFfErn1Ud7U9eCeuhBMHxnHwx79EgTvk9fzoSuecCAL9vHKkqEkXVwwA5UWpYhcL44MB",
  "key6": "2ZekWmwhf2NcProc4vvhiuU2pxreDop17oMhh7u1ctFModZEjuAY1Ta7BXXS5kYVgExwQ6mdtBA1aRbpeY57fqBZ",
  "key7": "ZwrBfHdErFQ6D8y3w9pMZ9WQeo4q1wGo7BaDqMzwUSjEUzNaAx2rdoqUxVM24tH1F6T1FSckEJim6mrYKhLmLPf",
  "key8": "5AUyeQFdPqRhpKKqPv1GqPJmapPQXPU34t97vAWY7GSVtAEBWGi4KRZ7gXHhUthPuCPupUjV1orj7W7druY5HvB6",
  "key9": "3yxCopjbMhFcpVVv6uUSb2qE7SsgEYXpSQDr7umaPfdhQZ94DShNPSYYUcWiSEytdV4GMB6KLX3iBvpY1kemTLXL",
  "key10": "zso7EqQhLE4K8JCwXz7zkRB4toaoFgodiYTBLR8GoYi8UGXCm8ozjxvkN6nPCwRpfJKDieByAop4PMbQjJHvLZ8",
  "key11": "4pJm69BmC3Z2EQjeTR7mhBA8DemLhta5wxPMkkJbFqFvQbE1Y9kqA5k8Q4S14jVL9nhD75L3UhCAskRn5F6rPuVx",
  "key12": "RvGkabYM9kv29Sm8gnBpyyx674xPVWHwFyA9bvsVKQ1DTBMFEswAor5YmNrMzPNqYErixbJtaFu759XxpN6xTuV",
  "key13": "2iT7PfjwiEj9AotwfsUwiv4UhA3LyZVaZpUeWCXPVdLR7QmsERW5svemDosP1yjrchRJ3cphVJv815bBPghwk2vK",
  "key14": "3q3vCi2Ub1PmqdXV9yW1aU1up5kFrQ1eNW2xZQQWc9XuR4zW6e2JqSHXGiq4gZzSQYUiSyXqvVFDa1htQkmqmWMS",
  "key15": "3kxgdYvHwGPRGP8wgYpVFs2i1ctwhDR1dYUsfHNC7huPbo3H8nunavEr6nQaXkgrhSEiVdnsmsTFSC2FfchNLjjL",
  "key16": "5vdXZYSWqHT84haREhAk4BTHyKt8pnCho6142px1Gdt9DQGAzqBKZCd5LSJE1Q7WrniErNcgPE3fUDD2kDp7yvQ8",
  "key17": "3JoBCyXNN2qUM5bZ7vgMzbjR9WAHTpQdA3vJzUhDDCyWkaQCKT18uC5zr7mXF4mdnqzaBkVR4jfJtBpZU9xgmMDV",
  "key18": "56uoFtnWM8zKvWJPQNyorHAKDjFvdgcD5AfSDRSUZisQeA4YFERd1Xhrie2eytgCYrz98yh3wr93EuRPvhjxUJWd",
  "key19": "6hZduYidE5XkUeAEDN5B63PGUS4BSrZJP3nUVHCzZJizmRPsM6CAYJX7e8SvguLNyEEsUCA1DYQ31WZUv1dALyP",
  "key20": "PHb9p64Zo27zSVToj3ptWeGfVegn2D5KtTA8KmqMDJqv1Gawd3wybcjq8uEL2efWqzMVMCNFRWAczP2GPpWutS7",
  "key21": "2LeCK3Wr8X5RvSmNZVS8HvENfWUV71r1By6zyhTsDBgeTvcSV8Du7inaQsbPSgioBiXyAJsykETt8g7y5JFYaFkN",
  "key22": "4o25URXdKk16jaKCLvLxJbTVauuUSuqgb4C4pmPieQbVAcro5G7sJK2HGaziMHkMxQY3g7U3g3VGRUgwikvqQB5b",
  "key23": "4ok8V2etDJbnBmwdFZ96q6dpndAzwruypwFxUEgiPenKd4EwSXdv3ScxT1tasdwDBs7w4NZMnQmsgCRipRLWZBNA",
  "key24": "iiDZkU7FnHKABN4PXptfZumQ6dyhUG11WeDTPZzpxwHoSjroAfS5AuyCUtue1XFEEXXmtiuvSbZt31uonNDmjFP",
  "key25": "5tjKWiTCVmHayCMBrU7BdVrg9NWUirsB7Y3BsmfL6WFjo7X9rjYAHPqdFuK1BuvtAcixg2SvqjNRaW26eBdxmx3z",
  "key26": "4U4XBeDbyLus4H32WyhPxnt43AbvwFXhwAhXLSV6SExpqjaTJzzGp2nhYnuTtPR4KSWHTQUBNiRqxSuiehsCLSLE",
  "key27": "5C2nxr3YLcrAVd5KrFFYuqwqkuZrNqrzt3NMcSuu5pwDsYVS3JCApb1LUxEeqrJZ9zfWrjzoTVcxGUv6JrBLYTaQ",
  "key28": "5Z6PmUpfvgyAF5C9EkZRJHa9Gba317MxD6Qjb99FWyyea4zwmdsUheK9huzyAwPHQteermrcEi8kzTVKbmwGuEe4",
  "key29": "3fXvgcf5rACoHuTkd5pRr8ZXMSzr2qXwbbyPbpdtCekBJ253CHTgJCjQotk5kPjLkmxzpzjyxxMn9VcrSAVeHqbY",
  "key30": "2jsWZEJQyMwYifFoNcZqQ5k3oB36tf47aptzEzTo14uHCN9MdfndzoNYRUjcZbr8jWfuZU7MoozsNLRsp3kRPbKY",
  "key31": "21KbYC6vbDxZjkUvrRFFN9m4CXuHt2B14Ne8NgUgjCXJhhJaZdwz632yvAswzLxCW4arPhAy85QXT84YQBJU92CN",
  "key32": "4ozamY2NhRb7NiwGoJKj3f6SjGjcsFCPahg2zD2RH18orCmZzCT2kDi3g6WWZViUMTf7MwYkn1uaLGpMZ7qfiiwb",
  "key33": "5JSbja584Fos3erhpx5Vh8jzraQzM5ZkFNPdSBRCETkwiutQEUk4CpSpuZtrLNyLEFt7hfbxCTDX5mvwQ4WpZVSd",
  "key34": "Jk8T5yw3SMKLthw7eXKHuRQcGary9RThMS3kdudpAyTU7rL7LXqr7Es3NsBa5ybKok9YN4vTELJKnMVbtRFbrRE",
  "key35": "398RCHUjWYCrLxihHUu6kYVk5ZFfaCJyS3RiGWSEzEYsKjpQSwms41yHghMuYU6eeSd2EByn4DDHzHXzJ1qExXEf",
  "key36": "631j3xBe6ccmvGEWe978M8U4LDgAWyEq2toz96LPkCSicuioYM9qJy6Dgd7tzC5ZA1k37cKkr4jbWtXNTYJMNC6E",
  "key37": "sz39mw9BjK83HvfhdrXSZFdu8Fu8Fg6MGBWvsNS9CTATRxm6BZ4wTuuuc6yoY798JaN7UZNhdmPVSkNe5hWWPuR",
  "key38": "5ujjVk6Y8Q221cmAkVwzD6yiduCnqXUzq96xHamud4qxbbHZeuQbcjFM7n5txssqr7xjy8qoa1PgbRqk97weSdVJ",
  "key39": "2Mvtzz1S12ut5itSejxeUJeNxBnTkbT734toRxJNm5MHVZHteuTZPrn2x894g1jh5gVvPsvxNUJCiFSSWJYybJQU",
  "key40": "34mcyVGWqiBhWfnsLhs5QpP927envaZnWsjkXNmbyixhjmMk3u3eYuUzbMxpZchbvLFzi2FSzRf18xqJteyb8bLJ",
  "key41": "4ff24CaAdUachCcKfeT3eoRmnYBbdcZyKRakgjSqRNyTGbn7EVjreGn75uX76TfzmDkgKfBq5LHChaiWabJu1g6G",
  "key42": "3RkJLyYNpLszmHyPMvXEQ5ZxW84EiPbhHNiejSv2aErgxWrn8S5i144stXsZfwGVoy8e6cyMkGfVbcrVx6VW2BZE"
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
