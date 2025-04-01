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
    "qARnuvJYWeRUtKHSDBSHEjARqZkrkuyNBmF4XuKeNCJT5yCVDTH3LyndGwWXS4wbkLNX1gTqbS14LBBRMv9sYpQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34fjbLiynbXfV7G3t9KkpxFfPJUPSvWwgoPn1DAWo3pktn1KNzrWstPJS5uoYtmogSkjaxueZkJaAFtL7kVC2vzg",
  "key1": "KNLECSDpnZ4RkQ8nycWKc9ZHj4rWAmfzBfFXPF9NdNxPN4y2MMLaxvri9Md51JtcSP2nGgAKiQnuzCCa429ZpPb",
  "key2": "5z1rN3uxgSAYL4iTkGZ67cuTn869zcP1so4MNQxGF1LgFyC1sGEjiHw7B9bPe9PwKfB33EPSuBActU2h32F1ZSWW",
  "key3": "rQxt39Gby2f63qbc5tWG1wthFSRAP8YiZZ6m5c7XGhVEszdckoBimCHY18gNymfqP37x8vThDcqPqsmUKwHvTUy",
  "key4": "7bhpHeWCYVqGWpLFsXaDftVW86f1nHBqiZFUfuWahpM2JzRH1v12BVN8DdwmTd1M1tJdB19EjeW7xBYEGd2F4GL",
  "key5": "5xQxv1fPfqAa8Tge2WANVtmKxtCuZxeAYKwqBpQdL9bXe8WufEtjerWrmeekEB5xiuq1HKKtLuu5Kw4RJgXteTk1",
  "key6": "5wh8LUx1Y5PcZEW917279DmvXBe5HzazymHsWTDGPaucpyFduM37gR3kQ7Dd52EeXUvKpdkvGqxhaFZkfxEJWLXF",
  "key7": "4pePDGeyek8KaBE8co1Vn3VjMwSYtDzQkQYAc5BxWe4AmQvjTmwNTXjMQiGaBKc4odahyyQgzRpBcKeM2hF7DcLm",
  "key8": "WdDEUQkgwJPSkRUDqeaLPAYA1LEHLRorBhqFqpM67wqLBCx1VpfvHr9oeMUJ7cMjdgYVepZaNfBSAtwDE1L5twy",
  "key9": "YsZFUbvENkdp5FdajxwrEBEtiSLn8cdsNqjcuWGPPei9Z4piPgdrXuqf6CcJzV2EVcUJYzisHWmYYHoDogAEr6N",
  "key10": "38KDWkQZQVdk5nZw7nchnJmQHZtNtSsT9pXd55rAtcvF32WMiKgk62nUueFwsaXszHN3xHb9rJUGiVwDCbGQeinS",
  "key11": "4Z9agYRcDa9mSFW7rjVHUFX5nvKEayPhkkLr4swbTWB4xdEZsxB4rn3XipHC7dPFys6J5z3i8bfvbB7iUQKAn9Pw",
  "key12": "2rA3642ZLF6dHjngnZMbdArEitYad36jFiyQVxfWf66hziF78ENfZn5n6iJSse7ALM8rEYEjEEKqfuGwauG9MXQB",
  "key13": "23n1YRNKGsbTGsJy7cLdTHzZ6zqoX3Az4JZGjzcPDQbSTyHWQuPGxpX1n8azJGZDHHb9ApcyFNaD7MHDKSo9Lwa7",
  "key14": "tg3Pr1Ac5DGxZkkioLUaV4RuyoshpwfxVxGZ4d1GVrhL8JGXZ4YP5UJ9Me1PQQXNPjvusTLpyga26vLocYpstzm",
  "key15": "4wNZhU5fjP9jJPXWxEb2rw3TaXsv7jcgSc9qEpsTibMFbLuodmXc92z8UiHDwYENR8Zk1WGeiCJkiqkx1aDmKkrP",
  "key16": "4gvpbf3DKu73xVeDkuAg92VU33DRLNmKw1kMZEkGo3w2XaLeggBZJfxTkZAnzMAjiEr9mktd91fBPYRWYiAzcKfQ",
  "key17": "4wGG2q2kXLtFCnWZnPHExSZNWcrh812guR8xWrak8TKwgsd5ZfLtJRfpmdrF1QtL1Kz7rwxtANT1MR5NXKMCwq3F",
  "key18": "V6yzpu4gvkVNRG34RB4RbmpH8Un6UWNKhCcUkNxStrvxeHk5a9ntNGqhNETRHrEdopx2PVMv2vnXKgxZLLtCumg",
  "key19": "WPLsG2E1vMiSWKChNGu9jcchZ6vq45Uwqe7UsWyjxNtuACNXumcoGDRB5scHF2t4R1GDijZuyt7LhZQJRa3Ffbp",
  "key20": "ZCDVf3tYmPKtPrKfTBVBuLHUp4BhXrb65yMpcVzodbp9b174d6rUJpx95XVApdF7SUkCYaL3JQufhpfYZwH1wuQ",
  "key21": "3CjzazCnFwDPmubDX8S7HA7highgwu2bLoBWVytKFuMLtLLjP2JcgNH4MK3b6XTRisVSmoGhSqm2aF6PbX6o7JSq",
  "key22": "CRKmt7tK4MU2Hakxxyg7fBNgNRFkwiYcX6ogm1Fk9fuuP8gNKqDgoALdU7MJtrQnurwoPXrRTXD4F1XQWQHk2DT",
  "key23": "q8rC8KFuPUUmk7JHHn9tCRynNXPpNwHYZtFf9HCJrKh1VF2uGqMhrYcFiunNfSgM494EwkbuJFTFZwtfpBivtdi",
  "key24": "c9Fj9vA9KJqbNsZbbkEVeDQqqqXs6r7uPAcX7GM3s8itSzgFF1mw3NrUnBVHepdczE8Jnis9UNV6wCBRsJDbbLB",
  "key25": "2pCUp8JVSVoJcTvcJFzmEPJEdV2KpoahXHmchax33P45XRzojCjGVeCUSsGxpmevRrc2ASH5CTkjojun4LTgYnDb",
  "key26": "3SvD8cAyc5eoNTLkCGkN4hBnbR8TRXzX15FFqfRUZAx8b9NeBrC6yjj5AYoBoF254NAygC6zmrLHW3RrjjDLd1hY",
  "key27": "4pnsEm8ZpsST49HELF3DGQobmtRgW2CUUawLA5beN2XWciARmpwh8qwcJBqvQyE8puPYwgJSurYcFLbdT7fLtD4Y",
  "key28": "HV4zky32XNf9PC7gBYCALS4yvxrYpvgwstnM342wPBdTq2fGUUUzdfjZHmoz1dcwxUD2GgHaddiiCn4ozNd5Ci1",
  "key29": "328BQ9UpBcPetVREXYcwHptrEFco5XP5y1iCUdQYuJNEZoiDpv9meDzgThwdtkPPqZTFNo1sGAGqocDXhSr66wwq",
  "key30": "5ewEP7r1KmwSQpJF8Ryj94bGzxvrnwJDF4pRBuTiC8jsW9FV1D3hYWRdE6HRE5S2r1V8yfKnJoempqF7n9QrK9kw",
  "key31": "5ZtRheSERTRorzrhrjtuPnvX5u7dvKpj5b2WofbqTokg6kJcFxnTfeSJBnKa8JkMpFgHhJTwXbq2kBdrjfYL2bmv",
  "key32": "4KiAdxCCKsf57sPie3LcatoDTo6yFg27us6JsocicEDo9ULKbRdzXCk3c4abF13wLBJGT2ojxufuQmJ7j6B39wD6",
  "key33": "4oyKxMJGoLM4ovtgo1qYWapYTC7R6DtS4tfqeWapT2w8FTfniCNiUsTi9zURTgL9Mv2ovyoUorATuLkYgs2CijYc",
  "key34": "5G6oy9L8YU7yfjJ1jGTNYh3Z76dVJudyfQ1YSPC6aEBziQb6RTHa7ANF3F4uMff4ZTkRWxk9yY8w3FUjrsVnEXku",
  "key35": "3xJAr4vt4cEKd9J2ZCdEyXv5ysBpFeubViykBnesveefiyL7QEmUKBG2D4ekCpVnYYFVB4wDAtaGLs3GkVWsNEkD",
  "key36": "528VKUVPpB2z1Ni7TqoWjbSXt5UxnAGHdrauJLU69cnNLBaW1uvnpEXqc9JSaNpDa7yGYWCvtgoBrQhkUL22tooU"
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
