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
    "2Xrm9QNvc3Sdj4XfgAJvED1QkS5waxzwaQh6Awfe5i9btt9wNDvVVwdXsM2KxrHt5DjT1RTD7c2h43m7LrimRtp2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fbkrFd6tMxqmzCwch6L6jwZTUPs9e4pypD2VYimADMSiLSW2d587XuNkmc8Qd6eLRpQ1dpFeML4NzEdxucAXgKB",
  "key1": "2EtbnEuEUkL4LEwg4k3uQ6X5JwbaVyXeK2RpsnkvJKNdMNjZ1EH7QcGkrd7G8wkUoCNwMbWACZrnt4dYB8ecqayQ",
  "key2": "rnfvaRBeEUh6n24DcxRrpiJmTfXGhm28kjHV2xunLJHB7BudmovS8tqURPNxXYPgPWEA6bkmkqu51sNeCGs4QVU",
  "key3": "3TQVPGGJtHjzsnxwPCaT5jpbAcmHzMXqD666eYUXnsdisQxd5iVh3aGBqt1qz1kaVcnMP2zRaNqbvqhg9tHH58j6",
  "key4": "3YupFnEiGWTxCZPVpHLQMAX9FJNEpo1xSm1HjJYY1bK9Wtgrj7n8bvVqVXNKfNRGQY1HCFCJBJ3kw7vD5rAJHwc2",
  "key5": "2jAKWHL9EDMKWvroMjg8CGMQw9Vat6NXPhsE3qiXhZacZhj5f91E7zPve6Bd8o2h6NsYKE3ibnSu5mgz33mrAvQN",
  "key6": "4FdadFdnYJguQGEvrHzB1gqv1sfiT7Da7iBR2FqRwHSL4Te19pmEwyjc1pxzSLdpVgEm4s2DWxJsMDoj8uHRumvH",
  "key7": "5Ua7tgaWcKTNfKcQSrQMjaDRcsh2DaCTUf4rMgKPPcLRhtq6n7zifYuwnYtmu4XeNz958pjzibopBVRy6kUW73Ss",
  "key8": "5taC5JgpfyARxQMfkpj6zQeDmk91SeorYB1nEpyQBtQMTQs238hjt9LYnMvKDhyRVYeuoKoafjLQqE8tH1mpfCpY",
  "key9": "57zy3TqufGbi6pKbivrpwF7FC14MMPZ3CSWq6FyYFFTLfpPViUi5HHMEq9bSLocdP97Vg9PUhcVF8Wmi2EbNhiHS",
  "key10": "5jwYxBQMy7Lt8ox2MLXT111aaTPBB8jPa96U6krA8b5mWFeJ6pqoJxBFit2suA3TWgrxtu8hPD3p4UqWfYRsyvqR",
  "key11": "32BqcCqPfqTrh6FZhCunFVyoeD6JPc9BqhP2NyWMuWDZycFsizKL2TzZ9mMry4QnVMoMxDDk8zgRWmyWVsB4BTZv",
  "key12": "3n1aAwG23rMj6K9XXgZxBGW2tMY8kZCiQ5SRbude91WEkM3g83VZRAHb4LqX3JgWUiTVpHVn1pVyKG63R1mHFcgm",
  "key13": "3ixZbyYm2eKF3uUXrYes3XKxTovpEuYyEdGG3XNV9qs6DvnoqojsNe4ZxMre4X3UrycpKKmKcfioUKKv74q2BSaV",
  "key14": "29VZ5Av4bNmSUn9M8eMj9s7Mzur5EbwnQcWfPigPCLARV74mfpxTLdMt4GKkaaXBHPzHMGh8bY8fiZGQCkoKq312",
  "key15": "ExhseGPuAVweyGWmgaKPf6amxun6Nbyg9B2ipZV3z8oDUDfRNS5fSV3q5yxkU61a2sJg6F9dWkwbiMXVfE9D2Pn",
  "key16": "3SGWHr3TnVGje2MrBzVVm3q5cmugJMgUfVHRBgtw2UF2WMZ3LfQEL3EjemSrKd4PAkq5bBEwYFxFehq2UKRGvdrJ",
  "key17": "3kkJA3WrkpUxxuF3zByTjVUNUQnenc3pQaN9pinERPy6KiGK8zQXsJQGVwUZBX66bSwthRDeDeDZtCzGATPnXWmk",
  "key18": "5o4eFt2iBpCMSaTKNUy9FANobcVJTNfzorCTqmJbZUyXhNJqQVWv13NgkXukkkUywCj4ZNHWVdPwQr4PCNhP3zJR",
  "key19": "4z3a5WFhumjnWVLhMnJSWgQQBSHZF2x9P1dQupytW9HvjxvP19h6FkBTKr9mCzD58GnybJqq8uCFRyveiyJSreV9",
  "key20": "3J9WYn3duXVDTuqZmZ7Cj7Xk8e9LhXqwBjEXMkwxJxM2JbMVZQbUUikDmZQp25siYi52mUK7F1cXYHiHMgEdNhZp",
  "key21": "PDRGbLCHStyKSfrRqqM2fRzSKFxAKM7TgJ21Wcut8AtpPMSESrTRD8xMFRtNf5kpWZ4uApiVwsTVfy9qQNUsRNw",
  "key22": "59UVphAwS9J1Sjw1EXoJjteH7YV1pY7B3MAkkXTmzAd2R1B3y5ipVSJCLWowNWMnwrA6WhhfGEJsxpAXrAaZofn1",
  "key23": "5hh9ap8HqCm7pDqar6XWSPQS2XojfsPVGzDsrQXLLaSTTr3K6NTno5FScFpfVwTYbzNcnhqCjNAZEhuEuWKjzPn",
  "key24": "34mPyEFDzZz8TG97xR9MhXpYyiSiJv7eLJd5SoRjXNqK7T87y3knXx4JfEH7zxXcEVLiARXtvXiS25SmX9EXY24j",
  "key25": "2tjmQgZa4HKiGRvt8gFAkQgdyQ2Zcn6fT9nooHAPK2Gs8qa6HBqViuM7qdXX6kkXS3XnpgJdfE8434b8XBC3qEUP",
  "key26": "3UuKxqbphWLWLhbjPkT3JxZbNuBxh2BYuTVB2DKq5MtVXd6QgcMvWs5khZEYR7c77gxBewzdGCDeFApnGUr9F1sY",
  "key27": "FkcewxpqjcFUG5JL3eBcqxJh4DrrfZTXE8t6TRQXssTcgu8TmpHUrXdEGdc1FanTGAh6TUEmrxibVXYNXZ62sMX",
  "key28": "4FPUcjRcm4zKbfv22ufkU6J7Srf6BQdZmpe74FTVTF63XAuYQQ8BNJS4Rsd2T1WvLyVTJ46pQE2L8iLgGzfpXz2p",
  "key29": "3cZ7tzY9p8aG8MvMa4V2TXNiTDcYcawagY3AuuP8R3CSQGopWNtd7HbVB7QWWuvwjPFiNkddgEqd3VnMEdJ9wvKv",
  "key30": "618adNAcxKhjJQu1QVLocujTLeHfVTw9Xop9sNKw9YaTzGket1dwa1NCrnBZ5yQZ3BYmZE8a7RdqPQG5ctUkNpvU",
  "key31": "fu42mkQFSXczJJRvDi2NRxNnDVFbJe2RVZ89qQ986nmgyh4WGstToF6d37bZjP58AGEhTVSjue8DbxnaUtN1CQp",
  "key32": "cfr5GLx2UyavknreAnkYiQhCppNFXK4f2iTG79MPRaXiBRjy5rb8qxWDjK5mY9eowmDRXsRENmgzDSQsdKT73Zu"
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
