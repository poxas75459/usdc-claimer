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
    "23vPkLWUDhP7zLmg65UxKPtNpDArNhvLphdmtheh551YvyBQbP6gYytDdhknG6tyMVKprFPBUFfWhnGYHMBp3Nag"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ydq88QLognvpDGgHfUNSvJZTA57nvT7LDhiQD81iX2zeD4pJMpFZ5v1v6SyMWDphEQfMg2yAjgk5guivAd9wR6j",
  "key1": "43ChBimavRmKNLbwVpD6KD3CjkT5GY2ydesMUKUCd4HtTRGKZCqAQxgcQSJ1QdAspaDHMypHH9QggdUEEzzjc8i1",
  "key2": "4AySbdAXJBX4KMY7SwAYdkVg43pZUJz8NNGbzSkLDAmeEnJRtKXDr6KksJrCstUncGjYHKReezm9UK6hDNSZdNuu",
  "key3": "2m89QSuzJwNxDgvGq54SSjFAe9q4WWbhkgm2x1ynNbQ1sHrR61wMVYPArUHM6eEMwrsSWwAE6befPSvEWQBxFnJp",
  "key4": "3xvf5ZxG4aa3UCtggnJDP8KTiRF2gvmxonzjuR6qKrnx83HSCsTgwrTJGgpBB2YggK4E6R6X2LngubLfo26eySeU",
  "key5": "3J7uN4aXN3q864tZSZgoA2AjKcq6YR87QSpQEnZHCPUwEYPLPmQ11yZZtYzK7WKA7L6RudFA9QY9GBvHYyvJHWLi",
  "key6": "4DihrWhJVQJFNKoiFNG4iiTb6E2Bw1dhS5jADpKxfHuWrUNsvqq9e9yY3GZ8hf3CRuvs4VRqwF98ho3HUiP2jjPq",
  "key7": "XDLc8LogGRkPwYFkyBgi6EYrhUqFJWz9s4ikZaEh66nfuJ8n6BJSmnCTVW3Q4nhNXhasjYrwdLSQ5bdMQmhQZdC",
  "key8": "4UemBR7BcDsW39dW4ab6fA9sa6retPgBzT9r3AP38Z8PJ39FXob15Ve7XhL8sry3D9Gxkx422v4RmkMxdcb2TWbL",
  "key9": "4mnQAqxoFfCzty6HLt1FYoQdqFQpQC7QsxKgmrMFSCQds6iD5HBb5rr4EnsqXwaz6ivDDkZ9fGNbbQ2Epy9ZgD54",
  "key10": "5n8joJ31iQGsfqrji9oaaGNWLKp8BzxeqtWaXGuJqCoR9zuTdYZ2td1EHatvLRGdS3UfxtFpkhGe1VpFVGEeZK9L",
  "key11": "39tN8fM1aHHJtpPf4b9E9QHPji7yj64iLApe3kVJY4uC4xYCMjhZNdtvVYMm3qVCpMgMzMHJGUKYAWcMLLaJSfmM",
  "key12": "5uZSUXUxExvFdXcux8HJDfYWWR2nnSP18ijBJKpeLfkRjWKqHBsehJmxa1FyfmBJUKQacKxgFsvE3qPaffK8k8Uj",
  "key13": "2fCuQPNLsDpyn4HHzC56mFQetJheKPTDp5N1mQYV9paJiTfCa4b9kzrd8iSvrNxwxJwArwSXBGMFqTvPVMx8BNig",
  "key14": "LyJ4cjRgXSSXdVEb1KbixgR8K1UtdpL2xv24fA59668RfWj97ruHtn6V8fpmzCBEmxSZBXA23pbSzwcnwEJAvMD",
  "key15": "CqkhGhzBQSQCsiEUFiqUn6hWKnisXzJenVzHYP94AxMYZkPTdRH9xmYfesJhoXTdZj1q3ecd4XQ7uWsSS1iBu6C",
  "key16": "3qNHoAEMAAFmhXb8bbwbBYLFkvEfzEved2duH39dNoVA1jptUsg9MwCZhHs3CPKteL2Q7neuYcfs8zpGutq3gd6z",
  "key17": "37vssrm5cqRuvurzZAkncEjPgEY7SMG1fFpRX66EdPRqBy7jwGxtcaMYJ1PEdnfi2r8bL5rSgcoCgjDMRWdyHrNP",
  "key18": "2fVNgG9T1rBVgrCXQtWErj5sFQQuKHZ3WHXiiJsJc8AXKp2xPbNW5pKKFgVg5D2SDx5K1Se9K4RUnvDpCson8ysF",
  "key19": "2NrLYQpW6ZsqsrY38MBHXzprKrrs8sDFSDc8PUCb1pUyoSYTa2SMncqjLvArDg95LNEEcZrsASrQCe5d3qDHxFgk",
  "key20": "53TXGgtZ2ZsapMk1oEHz4NBXY3X4rfQbDted8C9P8YWd9bbceoS1q5jydLHxAHAea2EEKgXGdLQf989rBezZqKpA",
  "key21": "4rkoXo4yU1Ukq3wmGiDJTgjgaE3P4uNeyDyb11DmKjiAdKnkb5iGuAGQnqdttDfP7fGFEmEfJPb5gVaitxJ4MBbD",
  "key22": "3MSF2FNuAzpqA7HCsPfmUzBnsMDLRHDGM19fjUW91s2wumT2ieaP1ofiFJzcnkkRAKSrU9CwbjfghF6pDTjhxLCo",
  "key23": "5YFZt1x3cAKB4jprsGUVZQ9ZX1dcR4484e82RdJfzaWvCpbjsF5irSTY8d9DC4iqbtj8ub5v9QzXxA6F8kiKBNdE",
  "key24": "1wuPe1gMzp4o2ntt7eiCjWKsRLy5Y8KydMM63j3oWNGrLf1dXa3YvLcQYLFDZsHxFoaYC5tyxQoW1dF6Z8q6NCQ",
  "key25": "DK8U7U5GcrDgfU3CgNFBc3EpjqMpEPbgQv9Dkk3dToqh5VxKAPDDS1xjqefq1bUUin6Q6LLnBfoetVBhE3Gt1SA",
  "key26": "4cDanT24YAk3PBKSzuZ2C2EoD87wPar378F9VTwvFkDzpSz2qybYTYPUbq5B5JKBoUKFhABha3ncjTTdoAvxAZ6Z",
  "key27": "4E9hbci1EvscBcAGbeh3YBcgAGZD3SFrPsRetwaz1X13WacBQ2VGKDAZs5JKekKYstw5JyMBGW8e33scctiwZ9nd",
  "key28": "4DEuT2Zzxg4sSkGA8EZs34c8xvXeddHEsEgi7VTGsLV24PhLvkgCxjdxmVPqe8sCCcakitDe7FmGxs7qzPR2HRey"
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
