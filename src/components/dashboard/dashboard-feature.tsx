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
    "9gGBKtKRpp8tFFyuLFjyvujQBjfSUsQjohiRZPK5rbTgkTmjqNaporDm2RQnPxqFWJtmfG2ZGPTDGbuGZ4biRp4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BwswmYM1qp2TgRHrKyD6Vu4cqPV9tJxL5kCa7kZPEPa7VgR6UpU9iTmv3DTyH9v6gJswUAzwodpUXGLoVTYAKGa",
  "key1": "31AnbVQFHQ3PgucpXJn6Vyi388MKDf7wkYRSbua3xSNkxQX2nAeacxQpVWKWS5dd9ixB9HRPT13NqvF6yQ1Nat3m",
  "key2": "5s7KnTcBp62AXmx8LsK7mXDDggPwCEo4uAE5RERhKhj4Z61eHjaP2LV53wjKJV5QsTUDsZdQAt9LrsaoH4Goe6H7",
  "key3": "3ih7XSsadLxk5QUA4ELQ87KswEWwCUEY2PZqLkStsmxSbhSc5i51nfPsLrzJuPK3LpfVuwH4DHuHyJFVSUopHiBJ",
  "key4": "5z1jFFLnjHfViYu8ReurkJwaDhoRzJ5PWrEyQDtRKiXHgmP9QfW3aZARZqArjcgG6jkUvxTC8RuePycq1HCDd5xa",
  "key5": "44DXzzNc4MLQeGUhGY4gHrf8aZ2P6rYXuQbHK1usKpzNtKzp1APLLNW4MVKw4dvQPw7hZvS7gmcez3VcByJdaBYQ",
  "key6": "3u28e77PXiCHp6yMczSCfAWYKMvL6LTYLh8eJMYd4swuqG76R32wD6NYTdwPBuLmhVc2EfwSAT1FWg1qXhVnmNBc",
  "key7": "5RVhqkepY8VbQ7jGn5QCrMT6LstT3EevX6S6yQ3HhHDe9oRXUnCpD5hW4H2YqEsHXKxGpjAJsiJ48qnXDtDiyFnh",
  "key8": "2fx6a91diVPj3SaMv9ZSNkw86xvutNqgXzjrf4MJ5DMVbnvKXsepP3znDn4TgxAdbtsD3Kv1hRgJbeaKFmBCmfZY",
  "key9": "2iH1Ni5R4TxBVGywgb5LhgsJMBVyuRfgXbp3S1svjzHvHqnubDQUJhJx6dQZnpYadrUhi4QRf2SJGjGqCT4emUKo",
  "key10": "5HjSKPVEpwWs27hMoj26kyhTJSdxNXivbNPGXnDWG8gcUni4NWcqFKSQRGXH8VC5Xs7dmC1H6Sab9itsLnfqyony",
  "key11": "3u32WXJW54pKmwFX3PJopfuz4zh3pH62mQ72Rqh8AEwtTKqXhvVSqFgFdNNpANpJ5Bgh5Yjx4Tzz7NAb1Y3tjzVa",
  "key12": "3V7M5RdERGEtp6m4ttVnNiGBE79zPQY462xfAkMj4hAUmjoA14eShJopMDG7KnsYCNzQR2HTsburkDoG9fEnzXCP",
  "key13": "2D7TyAZACsaB7UqR4YjN1ZosrPiRVcWAZh2QfUWN7mD7fZKP9psrvxgHfXeHbHoSDfUXQtXBZgdkA9k9BHuyLdxE",
  "key14": "5v4KYdrrYuJUTzGHBXB8xTHRsvTdtpxJz15ngTDAZ2oefLGcos7tGfHBfVtApsSKad15N6AuoVJsdQSpbsQKrhzc",
  "key15": "3VQf3VJ781x11GUF3opnjfE3o3qSgpRp1FisPPLkX6fnna12f3EY9KxL5FBkYAmS2q2uMzy7EPisVn3XsGT7ZUp6",
  "key16": "nvn4DqY9Qn2EYZtaX7i214krpD3yG8GfMSxa7QAkc7JNQdvs3BqUZdvyiUrUcYJpuZUD3YiWbkf8JN9TZFuWDLj",
  "key17": "2KPqJ7FeR2e6fP4Qo8K6z8h2PP4uVbn3a9n9L3tnNJdJ7xLRU3AV9mSQq99LYWZeXeZfuySfvaAZBFsZJ4sxqJsE",
  "key18": "5bzQqUAXhbmhWi4KRCY8SrZcYMNAY6pDmZyoEiD7HQL7cmPNEj6n9WonHB6T3tKR6a2wnaJ4N9eu8nyLhp3tc8nS",
  "key19": "5DA8anMrF4Myfc51wUiWk22y1P1JhqKun5aW1fjwMQ8jiynks1WvWM4vLUhxtvJEYPrmnaWFZMCCsZnygYbbwGe8",
  "key20": "38hLfbNts9X35LPzewfwAfwncYYRDqcLHLVNBdmfSppuvdLASaBYrZwiia95dTjWB8okMdknEaiocVWxuGnprWeB",
  "key21": "2aMSQ4HqMRU4qqWR3d6oFK1xXz9GdXWLXkCQnV1xokK99Xk9u8dWpK46pNvbVX4H2HrE1tNG5hmimuscXc5Cwszm",
  "key22": "3SE9oAHDy2x46G19odR7p4PuoVqvN6dyry4TeY9CBPVdjfW7B19WKat8ENv6roWdEKoG4cxLuPeg1wA2vHQmk2th",
  "key23": "h6WjuE4tFokyDwKVRjuYhXgYxzp59nBUYd9CEn9tVe5FK3aUAn4SxD1Mv968FN2sWdgPeYzh5Db5hgzrRGLVhhs",
  "key24": "2bpngYysGUn7ky2KxJKAHEHeHHaRewBJnsNpAPzudUaXmqAEwTFdy5DnVJqoM5TAcGF2uxuVw2HRWTfGg3hq7eft",
  "key25": "4XDzh2yWFdTusREghkXsU3DHRbFQvGT1u64X2ufUNojNZzYsNG3n5nhyz8qXeKCXqefHHeHDjHmApZAYZEwxD2wi",
  "key26": "4FZRRh9yir1zxdrt3gvUYcEYXJ41Ck3iEUzst7GBL5YuA23WDYpoqnJ1sHHpCzV2SacHmEFJ4reKG5t5mHeWLZPQ",
  "key27": "4KMG6gBmK2xZn6WiXPV4j1Z4stVYPzMVPq6rf121iFJaWyWwow3NBA5Jex2ENk9LhZ5SFFrGFvJRCsDjNX5xsweL",
  "key28": "3Vtuvhe3TTW5EzBppnhxnHEuj5924QhujWCyeRMkf6e8vpCJCkFZjuSXxe8eHjNRLPtNHftHdKa3CXNH8RKoTvVe",
  "key29": "2ev8ryDzzWMFaRLcSfmKGH6bwPrrTC8HdyhhujQkUwZ79rYncyfTRFbBoghEb2PD5fn6z2nirKEcPEYn3BLTxwjN",
  "key30": "5sW1c5g43J8LkAiCqJxPp3UNJ82QCGMzjq9iZWbmSpg6Lrt6ggZfr9G4QGs33ykKMJEoFbNftMsx4kyCxhZAAAem",
  "key31": "4xtpV3Q3iBrVoLMDzsvxNnE9mLJgt6pFCASqfKche7Lfj4uVRKRBmhcr77GLirtwLRrWYndXnFSzwhizKQxFj3KU",
  "key32": "ZoYscAWxipuadVTSZViM8kAHcznbTN3SzkbxucB7ngxeRkBSQcVBH1DXyh1sjiz37Y2S5MhHcda21VWRtf97AvD",
  "key33": "3BZSsqk7x6bghrVio45i6TkvbWhXRKwCEJjSMqFiiaycqrvmnB7xpxHnSt8YPMrq7opxYJU6zCDbcQQQB6LJfKxU",
  "key34": "2sod89dAf45qrempzwb9NYAu6dTYJhV4kj4bXy8BvdK1CeB3wHDwHRBJ9KZzj7G3N83rL9wY9izvUMvhQ8hrQQhF",
  "key35": "2WeZBuFQ1fu4MWcewxRvNgbWPb7iDr58HJx4EMawC5CBFjvpBGEVPC2bhAZiroQivYz3qVtRM7u3UjG4FEyxELdv",
  "key36": "5NDTYM1G4BpzTQEVPEVDS5RohY9B1MPgSd6F5YRu8jdPVjv1uEqXbPzjDWgstzqY7nFQevauhXCKhbnBSPBtEaXv",
  "key37": "2PMNhmqBsZaciEJAwvM83JJEXK3iTPCvr32iePkyE1MnDmaifcryXewp6kNbRcKi2baPRna9QxRAxtLyVY5bVrmZ",
  "key38": "3nEsbh4E3jNEUUCPMCxV7nYKKJTzX66S9nuDppWLReUp4dbZSjCCrtExfk2H75PkZtxfEHbJYrBGZhg1PYBDnan",
  "key39": "MYvdVxf6rHj1NbiV5Z2eMkwTzEcnerhgjU9PTUEnNrCuQ5du8x5Dimc1CkQ2yfiiz7v5396cCn5Cb9ackpbgvrN",
  "key40": "4oqGc1Yfbazwv8uX8mJzX9DJ59MZ5nhA2mpdURA7W82FNufzwwNUWubTt4QdkG8xEeEMdUZYg84WVBK5UbRxx3KC"
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
