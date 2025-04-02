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
    "3nKwBMccE7koZKjTEQ7ZdQLNee29bzQAuLkNCFjtxAGHCDPUD8Ax7bBb6XXXeTSmHtqQExu63N3kS1q4ey95EbT3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wsiiHhza2p9pZTWXyb7K3antCim98dNBPLnW3yWfzTMemxUwrfUG8yHX8yzhbqzSgjpp1c7k2kgWfQbbECAZfb7",
  "key1": "66Zo1err1duHMLiuBsG82MJqW7xQAhVpK1b8XuruYm3KAqq5e5nh5UCQce4a8hJ9EYanHuusSVXBRQrhs4kdQsdk",
  "key2": "3RzYy6Cd8YbehBrAnbxi6P52uPRBPh8dMReB4dY66RQbujdYGtAWotrbEd8nvLFHYzcWiD89N4XEHeUZvVezDgSV",
  "key3": "3sx7r3s3Ykzbiag1AGTyQJcyF6Mhf6eEzSXJCwQXSCBAkeNhenta1PKY9VUasG3zDzarve8TxexqNYjx92tRXTcH",
  "key4": "2S6uNMt1J738kkTXpcC4qFSjw8zLcJxmmik41fVxoDXEbCiCYppuHcsEbgjYHQciwwTHKaPkUv9BZoX4urCRyDxS",
  "key5": "3ahthJQDoScLxh99XsR9krx7WzzXhdqoLF5iPunMFHaFoVzSMEiUMGdaQy3swvsUrmHJ4E1NULnko9G5JRXt5zgu",
  "key6": "5GBeBKKxWVFVeg9TKtid3e8qTmWLShxPMBz6cJx2cVE6xXFDwrUbttMsnaSMzegLLoBg9DsnnMxLCUaWsL1e6pAL",
  "key7": "3CW4PBTqVUnTdnq1EGEjWSYteNMpqjAYwNapsGp4cv3EdCSdvciJReyGXcZrg24uXeRJyHf9b47qKJChF8YY2NdJ",
  "key8": "4maXnJgqcMybHckfiJSqwwc1QZhta9ELXeyREFwZeeb2n7NERH3gffsuMyEUT9M7ELCY1p2NebPQNd266cdYe8ph",
  "key9": "4Kp7pZbUaXzN5dS6s131f7CVydyZkjE4BF49pNVhcnGvLfQ8jeLf6x97MrUD76cCrMRBDR2NeCeHap69oMQKEuKA",
  "key10": "2ankWHXLsPXF6umFPhVCK9PPhR6QKrv5kB5NwZNVm5ngK6heeTyunrjqzDgYMcff2WhDbpXVKR2FxAhY2DwMStDP",
  "key11": "3bquQJ2D9szdezxs2jaMcquUYCb45hJScazdYLk1rZL583hFFaiS4SWfR7ikPFiUZXojbrGq8PMNu6X8XNUMr6dy",
  "key12": "R5h9xLgGJkao4H9cj823Lx6WbhvPMbzrfjQpeLMkAxLn67JHXnmtgJUQuji8TsVPXdcuUwuF2sMujSkt9XCkkWf",
  "key13": "YGwgxJH1At1Gwmd5xaJEg9qyw7G1KKsa9B1KqhjFpwuKpejZKuDbrXvJbUCcthHuxjsPzBUBjzRqbeLuJFQYWCM",
  "key14": "GzeYCXz5Hbw591B4r6VfqtiRUoEGrugMDdzrBQiffaoztXa8j93e8o95WWdCN5zro3os5ee3YXDoZb5jDffrbat",
  "key15": "4wmMzBu9MSj3i1wdktMWGc4DNQS9eGxTj53zUFBRiVsJZXGdV6yoCmGThJk29sbsVi1GYoB2n49BUfac7yT2BbMo",
  "key16": "5jnf4i7yHqi2fJzzRpmTfjEXmmQ1FhMp1593DTy76mi7dgX5RciLSCcg3vrQRjdgZUsZA845kkZMAzjid9MZnvme",
  "key17": "QacnP6QvWE4BhfbVqd9EfqexRqdAmKmxSjbeRtvewVJmx9ZAnPdi3NS1CYHT1etmgqujpjnPwMXTFNgaoamfcxa",
  "key18": "b993BNxeivPhtSpTNh3q3hQLQDptuGu2b9NC9sjfnBqHASWLjpngBBp5oAzshdLgmv3R6TiExKpWDKzMPZKFKXD",
  "key19": "3tveiyaPsZpJ2QgiRTtW82xHSF16baETukxTxKtvGT5zuco9wp3FUg7VfAW6AXypEvDCWM3Y9DZqSybqTajGW2jj",
  "key20": "P2XVYVPqgKH4SZuLNM2tUbDrPxgENCDhGqBSFWTrTYfqgyAmDvpjYeEASW8C268fRy8sMynA2BX4XAdkuk7f7Qb",
  "key21": "5n8NSHXzgyd1qY8bLSzS13ZsXBwUjimXXQ2ZoAoG7Ze9VHx2a8ri8Kmn8xrcUNhmnnGvVG8EoMBcCcxhvaXvwZZf",
  "key22": "2dLRrmNqgm93gqtBkvv1teYmZuqMeiBvpPMMvyBzjfPKMRjfwJvcqAHYRno2fFRpLLoUsXnsUCuAQZ7pDx7nAV9P",
  "key23": "5ijVgraKRggELE7B6c1e54DYHJhNz2Eu8quwDC12JrPB95aCGZUf5MJyikbyDRrw5AwVr2CStpKNFpudSiUev3T9",
  "key24": "4VXw53Z8JVEH26xLcEh8Fzja7AxpLyBgw5bbsuvrin48wU5ZhiNQXeuJhM7YtHYuSc3du4dfMbbXK2kW8wQZ51H",
  "key25": "EuRdkvQ3toVhq9SrXZToBi9Wj4CU4BEucwvFxF6vdRqYku6kU9nD7j1wSNMu7vkXqPZsr9tTmh5dSpvM1eLAQ6i"
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
