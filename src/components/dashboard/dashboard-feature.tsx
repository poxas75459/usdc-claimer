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
    "5DG89T8ERgtxB8vKT27A7eH6NQ9YWqNkZbs84PKHiQyK299tBaQAznZ77VFrrnLu1PBjW3wmzU5xqwX9cApdKeDc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59gkN3ueETi65Eo5D4mD7PGieXwiauZkamaKpw7nAAXDP8y1kcdmpnZExgc1xUQe4S8oBczXTQMyUdmdJCWPMjyz",
  "key1": "21Y2cQx8YnRJQdPfzCsnXEofto4sviG7YLReeZFqc46CdwjMz6LeF6ZTh721tZfrCJR8Ac9714ch8FwfrcVrnzBX",
  "key2": "3xrdZKxA79Lku2M2sjQuRQcJ15EA5siw8jtWKffPsuRjKgxgv7XBLcs3fS6cK9KenohCHWBG5ciDtKorYKrbyB5c",
  "key3": "KkbUGNmKu8iYjhGP2i6FExJjAx3b4wsKUvdmxL3jTan8Nd5DbsRnHvKWgqGTTQTrqTQNgeCEZ8BXKu9gQYVYr9L",
  "key4": "4rKZFgcvqLQcUZLGEmYumcRQv4KtmBMvDGuPbtpJaLo7TbD17JftFcXQojdVaUiYLbGRoLANXzrX7SRSDNT9KpH2",
  "key5": "2kWDMpL3tMyhwvtQ5y1KwadT6ysJBziGfoSLkFN2ziy4LR6Y85UasxXtHH7m8pU3raKxJVAJb8a4tBzeTGioTiS1",
  "key6": "28gFujoVKZkfQAF3vAJLdGe5kEMvkpTBZwpGC6Qrv4gxUjVdpB45M7uym7w4ZbCKMCVX5TZBV1fzb4Qqbf4GB4u4",
  "key7": "2mgxe2uGAUJfGYkv8a8AavM5dJhhBbiNzDg77Dyda56BZPcuRYW32KPYtarB8FRpX7jkZaT6qouZ1Nu3RyhPwswK",
  "key8": "59iGT8NZ5HZEapj55SBjMK9oDMwnGBBr5tU2DPKBiVudSfezkFQszKEmknmSNKVywD2gs2RqiK5nefkr6Czv2m2U",
  "key9": "2Qy2biUSaQLZFV45wzjgyfKsc5Q6JJnKVX4jLs1Mqvja9zbqkwaNmf36vJLCPTt1NTeK1Cp4PzFjScJsdYHzr42u",
  "key10": "2uLqVahDEd6TnKswcPaPPKSw4VapJ6GD4G7KPfBKejEfbghUbstUHoSK6LcJjSyHdEUQunNSMs71xvhz26xvbhwa",
  "key11": "2GnFRK68qKyDXZ9ecmXYbzyfaktVoVmQNQoCpu86KMD3FsYo2bnx5A5x3JCqBeHB9o5kUywnRv6ZE5FU15PsoS7w",
  "key12": "SwuvnUa5VYb3iWyqV8BwUGRXbad2iT8txm3Pn5EbbsJPNyfsYQeNSKLz6hF3drovuc1awT89ProEBuYp5qLs8vD",
  "key13": "RZF9sbo6HXJxGVhJCYSoLARd12Gh6YGZwAWPqHJnZ2LGqVR4Dckh9ANiir6wCatKtwfDxxUgyTZZpVPUXJuR32Q",
  "key14": "28j1nup5XhXjazgFH8U5F6kds4ViDnG2pZkN6VxstVmdqSSPMzBwyPyjYG7kt8tQHn29jD2bWshiitAZeBa6PTBR",
  "key15": "5EabVCw6KDyZvgKNdEuRYYxcsy6CLyzFnA9nHc7i4Fy7wx4o1gfc9pJ14siFk3LCnkL7cctgN3ipMyf3uJymQbMb",
  "key16": "3KJb54uvAmvZZwQeczksrWmnEXHUVYGmqTtsbztZauoCDMT4x57qCafZp3AvvCRwrwaW2YJs2haKQk4cb7Mo3AcL",
  "key17": "dvYoPjdoqL4d87ESmT8NCGRn3XLE9TirxXN825tgJKmmyc8km76NabXpz3pnwbWgiyPiTKeZ2DZwQQQW2NzPthG",
  "key18": "2kKDcXen2WjUPAgthdtorW64kuePUP1TWVRSuWnXwzWDitiFPcz3bUC8kAvukKpZdaBhzd36QmFfRpSKffK5BQMH",
  "key19": "2CSEafgSB9PiXGb7n8qVCit6v6rMgEZsvz5b3yXGXnzeD4oyrkL7NThkJ8hS2v3RurmWtLwXZXUfbGmWULCQ91fJ",
  "key20": "3i8iGEm4uSB1YbGFVhcPGk93PEh2pA6pG3cwciMaENiqR9hz59r6LUqUvX8JL2NbmHHbi4Ymq5tbpoFzrtasLb1E",
  "key21": "4hQoDUr1AgNxd6CvjbXZRp9yKHZUbJXmXG5E8ghvzmGuqLBAvjbpHcxuJKb6v6pRf7SY8yXRZbc2rVDr1yeFwC1U",
  "key22": "4iLFbPm6oMgbY5ZnPWMAqQ4rr7PAA56C2cjNxMfsJoa39EugMfnMv93pWNjaRLc2NPHFkyMYHANkpLJQeqAuyeMu",
  "key23": "2bL7GbsyiSqRmy9eA4HX6MkRpEG8SaFAG4zbuMe5buW3mLyAh52a46aN4CUffhm67H9temRndHCDVF7Vx5htYj4R",
  "key24": "1fiVvZUaXSfbjgr5xmwPrpebHCEFr3EuBcxMHM2UQkY76no9iDrmsXsJWWYgZ6gGb9vquvZzYY38ck2FTd1aK3T",
  "key25": "YiEKW5s4PvyyFuWicYJ1j9V8cZnXDjGEzgbbJuNc2rTYakpNCinpGzzfpxx2nPZFaVzKQ7ZnttWYhSeP52tbqaT",
  "key26": "5Z7EwA4MKweAtVZi8A6uXG5PA63xrMVnoFWn47PaWwi7DSBgfbpuKFpGCxdY6ZRE2obMTv2n7eRHSkAtr8LbhqUB",
  "key27": "5MdQVuJJoyioUQnDJhaCEbkgtmg3rFDu7YirYYKh95nK1a92HhtFgaTVHaSyZLTpfva2e6VnioP3x3HoKKPNYexN",
  "key28": "22YajHrzJUwt3bYef5JneR1FCrUd4uri6UHbYdseSGCNARaASU5bMV1BQzPFWi3eanwdPSGxqwHeLnk6Vsn6j7ua",
  "key29": "3TwQduLuTPrrfukeBrdLe3pSJtfuweHw9fg7mdNGGKnszaFH1kckT2ruU8etKa88W5N9uv714sVsGwCfmRSa4cDs",
  "key30": "5RwqzNXe5D43zDi6epi2D7dHxSMGs6pEASyLczt7wvDHN9VfgTA5kQbdCFTww6ad4wAWp2KFWBRuNjUCkhmfgEEV",
  "key31": "2u68mSF3BX9PvY728dNBFMvxrRgsfb8Z25CJ8cT88fbvrGjBtBy62EkHDyLgyhvQPhi4u81zDRkH9EJh2rc2SPuz",
  "key32": "3tm6rW8fx93u512jZvfbaLXMWsuFbfUtYQ5aQpjxg76ZYGvu6vfSVV8Xyg8v1zhk8BuczU3PycFXgTdyUPhjvMAW",
  "key33": "fGZgqxvG3ZJkeQLr7i7f3SmCCRjqnjpf7YRkngQGV5hYFLXimcz3bzTaUkS5kzUHTe8tffkc7ieCHCXuPc4wB5y",
  "key34": "ZA3Anqz9YwGvLECnCterjoXLUuBKnwDfC5GdDmarnpHkGNtzdEhXZBShAbH4bJzTBHyBrQcNCLiQSRw9WiaDmMx",
  "key35": "4J9Lh6F4MHFkQ5CXTG2hN13sMoNqgYFUrztFWMRkh3hYj81QxPoS3U7jpybsMwDavv9Q9iAXaKRjSR2vh3WAzxCh",
  "key36": "3r78iPZzVE2Hi4r9YT34HxxikKJwvizDU1iJYDFFVd65YkUuqS4JWxF6HqrvQpXEyrGE5VdwdtzyHnTVaViUHHhk",
  "key37": "121ZHEH1LWWWwC7y291LeBnwTX2C18ExaQ5JMXpaRZD3dwoLej8heNA43tBPHgm1mEwqpDjjA9DGyPiVeCPvFNq4"
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
