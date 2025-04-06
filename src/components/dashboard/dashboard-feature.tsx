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
    "2SSup4evV4NR5dXUpmp4yT1ypa7dqaBKWMEZGLUrxRuLBxiDUEww6UnGQMpnBLrky4aSozhHetjfAbVxh7shEsvZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ha917qk9xvXDVgfFyUp2wh2Pg16dmMdQ296e78borP661Tt9d9ci82BnGFYkuWe7NJrh1UPLmXpCwpukmNPvsCL",
  "key1": "4om65c3DBCNAswQh5v8dr9fXf85NgngwWhXULTYKvAh4pTVzkiHciBHgVzvELJqKdZ6PhxMwx7k2YbnEgfoJAwZ1",
  "key2": "5diH9rWWJTzshwR4addMWQBd5bYbUUpPExzj4ynVUU8vuXgz2CkKPZ5FvJadQU7joPc1TW3qVAWr2FghNQNzsNC7",
  "key3": "626iYnYk9wL673QhbGHbv6cWuWCgn8hrKAjDR8rCh6UHMJ5wp1zrNWz6N6vXJnZp2t9q3wEhZPAiqFhPDkaxLNhJ",
  "key4": "5QugXedQwmL8KrYDptJEupL15sc6dKG2qDhvz2UwFqQia4iHkE8fat4ndCwTgcq6b4a8UAqfwB9n4um9wYxMJrDo",
  "key5": "zkBCAYqbttDVhSXfsGkAdNRNAwAVviUoj5vvaZg89L3ZbcLqknAvr9yiKinUr17tXC9i4ij1gkwEoqpcKDo9g7s",
  "key6": "4dhszV7r6RJff42aHDYdVUjBhKD7vVqJstU2DoW9WbcrSXcQSa4ZPo9EY6RTg7PxwHY3ShoXbeaiWnMkWy7oqJSf",
  "key7": "4shMHAkDXN3o76DNZBxxvqQkFLEP87qrNdRmXZKufgYH5p8xiGk1hk1JVe5YSmesSHrc2zKavzmuEsHtko8ndv1N",
  "key8": "3NchWcLPTnur63aGvB5gkNTt11EnNk1LrDC3XFrFqmVSXRByRfWSHYXAMrGS4uX93weWNEcCSTtdVydLqB94Vni4",
  "key9": "2M8dQFEHjXua3SagUJmU3xD6TsYUn4RWPDhaRUUVfwPVubcnciSG3ZbYnJnA5JfoF5eEKAN5dKUoPe8SyTAvEvK",
  "key10": "3WYh3sAkFSTeycvrHoReczSsKrKRa1LrYv5Wt1RhzKwCFme7vxJPy2VG3Hdu6jVEiEUUPJo3YJFLjG3oQkvXYYA5",
  "key11": "5K9EQs8KsrKmznx7NqHaGrxW2E8DjRgvU9JPyD31Nzw9Bi8JF8hauKRHwuvQUGXkkejXrTiGS8zKXyHNUm9EjhbV",
  "key12": "2RsPDpQyGZq42ANVYSh8eSj39ChwKBDJrmMUnnCwhEatXD8CYZQGvJfF95ivJJAt8Hn5ZjKHiUjeKnSz3Y4x9ZuJ",
  "key13": "4JGRv1fzEt4irYDECSWQ8pgTVpAb9niYRoBizHcq15pneCieKN5JLGveqZ1pgVZV3HP3TtSHJBdxFir5YGNxThs6",
  "key14": "2XcQ3jgpubnP8FSTnuzNdjCbnEZUXd7aKNzH3hmmduCZuskRYe6W4C6Jvz17B3pcAFxGBotKQXw51b6U1XeUaCtu",
  "key15": "5T68enrzXDE9aEMHNsJSSuRwsTFUiJbB4EjvXdPDFWwtnetne3j5jL1Ze18pgekKdUWjeiBwVLqkE1rUseVJt2dU",
  "key16": "4KADxUiJxxBvrSwxFf4f11gJud1AGmsxqXCFygXwonNHBMLkDJWmxFs6dcKVLnsa3WVzQVR2fpM2qEUYDvLNm5ek",
  "key17": "3sSSjrngFj9p73Kv95s8xW6jXVq3pPWsB3vmW9kySaTcAoz7FFC5Kjck5b4QN8Zb2ehRirfUpAynEhF9hajiwF9o",
  "key18": "LNcbwyKvWA3atUPJDebeNBeaRtQ26zBcQ9Z3guZBo7UVJRmxX14cEcFRXUqKteFN1dV1QA1g7drwo8sELE4yuw7",
  "key19": "22pDwJbYcG3zShUQRmUcuSnpwgAGzFNkmRTV8jX5t1BodZVqujAbj1Gx3YXBGPp9fxc3AMjEJobiPqUCperKXLh2",
  "key20": "2akjC355jWgM5gcB7u91Mff6NU87CTusvJqzKo2bRX35hV9smNGcHRG33ACKK6JGxoJPMVN8ubSc9MGpMHo82opz",
  "key21": "5YJJWrrbHnHb6PLFa3Br37F8xPSb3ghbmYUW7XFcEbGetbTyVkrdwXGEspKhHLV4rE7yCz4ohtopCgd14T22d2ia",
  "key22": "5abD5h15C681YDB1gtsdVnsdqCitMEgZ2djLsAUhrfErQ6FQceX1N8qfBKph7FB1RvD3TVNACebsEHngPvPW3Usf",
  "key23": "39iNiqcy4TYursRYr91vEoLTJXmYa1B3rvXu9dpd23b3J6dqbP1oPDZ8niNaFPwe2gmdgAxeEs1FRmLowMykwFzf",
  "key24": "2HoxYRGcKv2rsBhSMToimEVp99YepfLaud2WWuynM7EEAB98zipxarm25ePwbBPhi1FVcTzhC6izUVszmUfyyB3u",
  "key25": "28XUeBLVi4j9UZY6xeo7UBQQ2mypDfYsBQV6DgBfNuSrnzSoecpScqc2HVx6GphXjvym5TT1NTD8SmzcpqHGs8Tf",
  "key26": "3Zdiy2BEE377BxKrzyUVGYNqc3s1kghmJV8ETCWsxv9WzGJTXsSyLCX2snknm8Nf2iEP3KyyKh4VFPXyy7MciCBb",
  "key27": "2Yr3Y9p9kP2682pEgQFmT63ggFhiW2f8huEVRgt2zu18Q1TeMbPhSeiaWGipwwF97MZdhGRug1HyKH9Qm1tVNSaR",
  "key28": "X84XYSMBGZVLA4QiwL5RsAos1yJEvRqHbVtzakDRBjV2ZQiN1kisEwesd5gE7HzFWzjHDZXizL5592SZjTvxXKj",
  "key29": "Zu4GfFE3wFmsr1f1K5X2BJMvwoM8w45oGCrtXPgnvsbarSh578wJ8kbXSqFDMdKgw9eho52ZEM1FPA5cSXqsv44",
  "key30": "3DznUkm1iGyND1BAmgtHzneF7zGMo8gauk2Dy3nwhKDchMm7jHA8SBQgqTqPdfxHgzjxJ18tYkT2QcBoL9SLQmjB",
  "key31": "5PUyp7MihLUUT4wTSZghqJ3oH7BiXRkfFB2X9wQbkg3qnW4wwCoZJyPazxzS7tUdxfsftTJynSudZAffCoba7myw"
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
