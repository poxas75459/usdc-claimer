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
    "4N6XWvZTBW79Ukb5RxnmM99U195VRbKPqczMU6wRx7x8tYDCcysQbfW3ZBpjBveMadP891BjZoYAdf7pmihh4Qvb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3e32CoabDGKXQNhe7jt2nfQbFarpMJgEuQ8uiQgvvYpHeDyxDiEaoWn2u2sHprtrDsKErxmmyUV44aNRHFuxNBLe",
  "key1": "3tKLh1t68zfAY6tqZdSyYKj2ZTtLUpxWrhi6AKXbnkH2PUy4mbiMw7VXAjMzGNdU2LUwDpD9c4WbgNQr2HaDeiZL",
  "key2": "7vCgAbNvNoMw8jjZcNiHJERXA2k9Td93Bm3cR7A33qKJxSr9peAsoNqvo8o6YccLXajCpNtGp4iHegNeM33cgVC",
  "key3": "5wqi6zKDmm6Zk9BbDx3hsuEJ1g3x6z3hB6bAByMzZTUZfNUoqFAvvETAy3tpeUPjFUTYZ17DtBrwBfpTrcY2YLw2",
  "key4": "2HobwsT51mURx2yUoNYYF5X6j5Vz58igJCpGb42J7StPtyLxwvYdjXhgTU3bQaTbtaqJqquhiiMzMKgbDii95DgS",
  "key5": "3bqCbo6RWDJ2uhNorVv64owbgbtYm9MEyYQp8rse3mGfuNXdaodTNMydivdx4UGah529bqnU8kwyZfEdhUTyXuLp",
  "key6": "29NURUiTyhZf2pDw6uWdn41DSh2JZcTtqsVGVrpwa8xbo1RmKpSraFgbprgFfqE6S12QaRJBmF3jCj565VXKMm82",
  "key7": "63t4F38ySTMdBo9rYucKTiNKks8w1ZJez9G7yUUB3i1nP3hp9gC3HXKw3GKtErChpYr8Yf9g6vh1Y6ujtovBR2LL",
  "key8": "5zJPFXTZPiVwYeJspxhQHjTPVTvssg57bgtcf8acWoRCVkGdjx2b2udMACFLFB6187keg5x5M3DnFUSboKQtmR6y",
  "key9": "2bauys8XX8xguPSdxJkfWLLti7F1MR7a4M9euPPDnFwowRmozT3KNAD2PqTL7AXd4rEp2hDvKgpm95p4ZWQYM9AT",
  "key10": "2E7evpnqiHfpZNQELSJxVjKxe2xJaDax5GwwnjJtRKvMpojSp8ysXoHB2iJbjJ3J2Bp8ihC6uJT3WhfQRAEtji2Z",
  "key11": "3gJBi9ULRtMcqYGvN1oDfdtNKz7sxjC63KAjDLcjmBb7toWn4uZ6FPHx7mDEez8UaeQmZRBGUsP7tGCtFrECDzAW",
  "key12": "Bs5HEjtp3QW6Jy9FazWzAu3K953upFFYn3rPw3LRqCFWwy9dVsVbA2mPcu3mdHzBvccgNSLu6YekRnHs1JiYPgy",
  "key13": "54LSRm47eqE5wcrGqLV7D4u8GVPjezB32t1AR72hBy6w9ESkXK9sGwBQASF9FKroMsXu7AChQXDGqBoMZKuyCmu1",
  "key14": "2XUw2QW8m7gfWgDR2Yc1e8E6pT9pmoZ13mGtrec8hWZ33UJ8vttFtfJRcFj3xmwGcEfAX6aBFDLgi7fvrJyWCBrS",
  "key15": "42btJtE3aU9hPzB5znHnzA6mBV4PU89HKuWRmHv8YbpXdVoYU4sbR4pVJ98KfwwFMXeFPUmgM3uWXALa9ZQxuMMV",
  "key16": "ShgxK4r4LrzMRbbozHGosafikkxb31auHk2bUgxMCUrFXNXd7YXY3x92b4SWeKLWdJGp22Wdj9BHjMtptbJBGSe",
  "key17": "3DFAmcD1DHr6YdbV7Rxng1FWWiCfiSe2vtQXQebmQYr8SMs7g7VE8Kwv3jhLvpSvF37yraYfs9UTPwyWpspQnLWu",
  "key18": "5RH71eqMUxTBxLjgKNUbRg5SLC95fXfMGCiv1eFurm8fXgBD1PQtG7jdG85gKC3p4TBHyoi5WbNH9PoHbAYracA",
  "key19": "Yjfa7pZB5pRVjkyq6Ce4QQ8dW4Dj3q6jC8ajZRUzoBvfX9Rg8T98tWvwZaSRRYrmKz6vuiYfzaHfVuLQutH9Pa4",
  "key20": "mqZHe88HvyWThvhm963qLNYxivjRBSoPbtNUxfKRKtKvFwNjVVPtKhoVCkMfr9WU4f5zdb6PhiBHU8MDpNmtKe6",
  "key21": "JB2WB5r4KH1fFqJXR8vjXQNXP8iSwjhW1adppQGjtzdq4WEhqSetb1XbY1cSg8KYeVqaHUnCs9uyFq3KY3fFkfi",
  "key22": "3aecHsdNk6YDsdAnPF2EdcNEPasDq9JNBNkNYX7SZkgug1J5VsYRTxJupURg9B6eKzJpeVjavX7s2wKNutaNKpiu",
  "key23": "3YUdodvSNW24csVmzu14xsX16cbTGJZMfH23ba8McbSDY9bWuiJNyJ6VMhyK6XRUKiiZGckiKmWxX14fSmwn9reT",
  "key24": "Foab7d7BFsuWFLoQUQA3MVB86R5DMqmQ9PFo3nuJR2ymhs7XkNWbMVYpY4AFJL21GbwLut2xL7DCijsjy9CmkEg",
  "key25": "HHdprSAoe8F9mBUjGMmh5eBe2xUppskrim71oGNQzZ6U3MeKqiceReLnUR9ULL8L7krwCZ9FHy88eiGDcguiRwC",
  "key26": "vTJedeSZEPq5Si5mZrTTX5GRwjGFkhrjVp88WGBhKg4LVMRwBHLV7mAAySST5UTtNoJwURgQgr3a5SYXqd9oVcU",
  "key27": "5kEXsWcHkpBTPsXFiUCYFK97Jee1p4WGASQhBx5MoVcThDeD4SRSJpvW8jsS2Zh1FLfu8XoLrctTCwvX4RoQgrYH",
  "key28": "5nZt3r5V9WtrRPNdESHvq93r53A6pYpEDuQimYqKNc85RNEN6SyRPAKifxoT4JzysqdZJdfrzTypvswYvRXbpzc5",
  "key29": "xKnQLxLN9mAdtws3JUmW2eN5E17nTMKGkSQJX1FjNh5C4bJWaDBvoXhKyxjtSarAoKCMMb3pDfDU8WKkimgfnVq",
  "key30": "29hHdNAkLRrFPaAwVtJew75jqP7XQLnYBV8s8SJuJXVmZGAQH1fTWn8V8crYCpoGKFgTQkTDC3evYKfSyscPnx5N",
  "key31": "4Pt2sj8WFQu9u1NAKMCSx62HSVdhH7WSHjkhaMo3AedQBsuxWpEWB9EQ2pY51pq1uLtj8GRxgWjD7t6pfWBd52if"
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
