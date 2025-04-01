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
    "36zBeMvDv7p9MH6vu75AyM3xkwYnQ6E5ZNdgvfBpZP4GoYQT7hjg9UUFcRy1J1VaWhwXvWruFCUbJztJjTDMETqR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BuKkRvarr1AmpuBPUtCG6baAUv2RJivoizSmhWkVsBjkCqs9ZbSgjjrD4F1bvkyStscca8Sdu8puxX8R96EFkCP",
  "key1": "3kvfwpi7jxst1CVGzKCLyaSeFkuSWqSroxmm3Y3RvgnUDuKixHoZPo6cnnT2K4k4xqF4eH81zCwXX8LQTu2rCEnq",
  "key2": "4jGGYsE6iYrGYzxXLJ2EGyuQVFXhTNLB3hDaNqw9x7UpANFn1thB9kAJREvfpNc2iMYRWvHcYjtSiQRyskp9Cx1P",
  "key3": "2Kk1AqiLnc13ugp2NbeLFR3rEeQ7i6c7an47qFEJCofhbXJ3aYkztJUUNA7REeyBSHNAsPo7t8ZDHHLReBbXdg8",
  "key4": "2LYcVXr7ifUB5J1jQDtYnDxfK1FTixLW7gXjhvMtBt6RcMvCQ41cH7dNydp8J5VPZY8TWkJ6pVUKBNcVB9JtyQRi",
  "key5": "63pY4FzdeGWcvnZmNbqhXaS6btqEv4gFugy9Ls9guMbsawD465MwhY3EUhk91JQA35bndWvBubNoJvH6p7TJgJSc",
  "key6": "34FMXynscyXarEY8prnSTnnn9x2z4aPU6WWSXqEeJyaPxg9D7KA7cVxsCfiWaaG9u7LtCCrAjQNXZHgeAeWFsNMY",
  "key7": "3GPwEqCzDWkov5icx6m6tuLvQWQ5ecsU7NCNycSQzJ2v2yQqAKbPMYC9RJmngq6Gc5wSyMZRsch1NoKCqQXRTzSh",
  "key8": "5QwTfqkY8ZwcXes9EQVmngvHy7m8aSrga7bHmgdgz4a6PErDw9KX4Ehyaxgo8KRMZABVgEYbzqBkiatStAWL4gcw",
  "key9": "5UyReGiJrSYtF9DvLYSYHogCWT7YcWVcrKL825H4smAv1Bv2voPRwh5cPPM3KXzJiN1kE9BdvHThBu3rEwzTwAig",
  "key10": "hCYuEqAbwtuo3rJ2a2NSzqKoAFMRmkTvhTDx9JeAR2nU5UaL43pou4aKQLbndZExpvznBGRK42m2eET6nXn8Vbu",
  "key11": "3ZGJAwGygjrApSiRSJVK1ns4HSAqWqgjXDpJACfrm61SWzGmkJM64mhPX9vbTLDUCgwzrdUBE54PVWQ8y16xZEDW",
  "key12": "3V8iJXoGWJZn6XMxptcYRMH3STwdPPrBPMLdaPHvXLcQKoRayKhQYrVGZhwFuM1CNk7E1Vs887GFNWaNMVPmcpxs",
  "key13": "5vZdMyqBYKAX6BNSKLDHK2KhPLKBTKoGZrM58r7bMYTRE51NcTYQvuw5ivAEtNyi8iEP9YzQwjkTi2a679q4XXKt",
  "key14": "4UGFpvGUe4NR31GYap8YSfcLx7LFkYNHuFiHLuDAShpnYfoeak2KyuEckANFrdArU9MJ58DfsoPNGj45usZpMrYi",
  "key15": "3bFiGfK9n3My6FLBouDtTH6F9e5XjjwYuKkpAgaeiANSfT5bYScWDPWpzNLNdavdaQxPh84Y5tJoaS9xLJf6wYEd",
  "key16": "4yd5cXfPdhEVkJ7pJsYDQn96Bmhv2ey2bCCUrx2drpKz3NdYXve59Lz2nKankE9XaMVuJAri2R5p869inJvQTp16",
  "key17": "5TMq6r2ApsYWv9bC5mStM13MG3EQCpXMPC8Pzq2BzuGuYtzotL3EbgvaFib9DeV2KfFmi5pZW8JMNLdF3y5nUdHE",
  "key18": "3LKQ2zULnGr73P3hZBfbJyzWdRSCtGsSidk2S3CkH8E18aZeFFdtgEeXZDdQ3g8BDRgkogJ1ttQoro1VV6xXBEYh",
  "key19": "5ZewA78VrZYbm5ck7WKqdP2NkjQ61taTBmzdnMrnzikrvUs2qv7gRfim23RFjMbEXQ25ZEwiUnsQzVcWtzWUFmFD",
  "key20": "47soRUPotYSkVu6qMXdEtaYYPKEyV2M1HpxPnPbPvDZ22Gx9CpeFh5Kautiq98AZc9p7FsC7gGkw6mV73yZdNzS4",
  "key21": "2Dnm4USFicL3nhrmHdxRNtwE2aDu574wQN3m9GsDrKHQRH7cwZEc2ZdKXWM5qiqdpsMszT5D1VnLDWrVwUuCBaCM",
  "key22": "2H4rNwT72Gjs9aYiZMFPNNZzs5kTL6QYBWXbnfEnzTbxtGMwRskfyzeweExEVKUYjoMyVhkPKBtkPrS44CXvgtcF",
  "key23": "5uuJDvnuhWJaDSHJMWomtxwKYAU84TZ5uCEzrz25C17hx3trENKSnxKCq2A9tkpKkmaCBu7XBYbLXX7zBT2M5z6R",
  "key24": "cuDzu2witNkc8qE7gFfVXQPX8h5C5eRLepoLvcM2FQzjLiynQSStg4q1uxkvHvm4g2LQSFPXEkrq9UgKZZ2wjv3"
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
