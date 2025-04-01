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
    "5fLRX2aamWeUqQyn31tWJyU1U29xYfV528hMQBVVAqm9WVy7anDsVBtuJvweUheP2N1UGp9UjYjRT6Dqdmvqfscf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61SwsLT43ff59BEsTKXhgpPXBZSsFbUE4fTuM2UwfNthiS2MpBJPNc3JfobbMswckP1YUZKC5UqsPntDkd29QgXc",
  "key1": "64dY28vf69BAmdvSzpvsrPUDtXsmuQ7sf6L1HciemVdV3zXGEjK92jxm9JDxxDsVAmpFjEBEPp7cKK4TtPqr2yax",
  "key2": "cdHfAL3NMgKfJxafJwwkPd65wzNBqqVvquJFhuFioBndEnBM67438XYeeSD4nPmeh98C6gfHnESoc9KZeXQ73p3",
  "key3": "sczxRoMs5FjHXVWzUiYpPXJkQ61niuq3JMa4EHQfJwgPPXTiTBvjRkkMNpuaCXZujD2V58zKQ8UR7CbiSgS9kZT",
  "key4": "31fPphN9cCBvHym2vkzMFwJoAo2gCYNKBSpzmnu6AaLuU9A7y7fdFYAAsF5k79uAUAAZZvfrPAjYGPTYjPdohTkN",
  "key5": "1Xb4gArCDpA5eDVCKyiVkw5QPAt2T5DA6KpEe4H3RgBC7wvBPrxYxbbSTBcXLbqgCZDEA1iqgDyK7RzDe3Eqyab",
  "key6": "4Ekx5MEKSN92wgX8JjfP9SGZgD6MnE7EvabWGXZpWthfvYXKp4xTPyQqxxEwGjdgca1TUSHaFkB2m4CfVU9d36zD",
  "key7": "2w3DAw3zb9bZTNcQ7uRvREC2PEXJ354NuxLCem7Ecv8TemG5ZcB9tWfjrRANLq8E8hiN4iqFgtFTt6EtpJqp5Yct",
  "key8": "4a2kr1VgTiAvqg36WhbHgFaxrL7sPpwR6EYSuf6jjHiU71evfvN645u3C41rhtegToiKtwywp2n8h3gPAKyxZd2X",
  "key9": "3F3AwwN34zazRUH9NpEHT49Sitqu7Uq5nqy7JpZKoDtMQtt1qkVvMU51GVqCYFcVJs9tq7ZT5sgTKtFVpQmX36zi",
  "key10": "4dHCWocgtkatqQoesqwQuj5g2fwzKzPhuHAgpxzVRWphoKF1UwPZuCrNBWuM8Ap7MkdeP77ZmwZyMLBBQK56GgXU",
  "key11": "5T7Qi3KpZGUFuU9Ybf7CvpFXLeaNnsncDiWpjQV6CwgutErciMXob8K9xs7c65HGRJRMZybu45acnyvJT4CTGs9j",
  "key12": "3MJFHGrKv5GdXbrYCTkwqy17z7p3Ke14mSu6HXNs3WVfSN6YZ8D4ukReYQ8AmsCHpbHN5yCUVd7WYgjK99ndLqKP",
  "key13": "29cDwf4jHXmuoVhwLb5wVxFgF2Y1CGc2bskWQDEgrv75tL2cCtqB4NsSJCDfW1kB1h1AWNcrw6twchv9YqWkCJkf",
  "key14": "5JQrrL99B8Vyfc2JhvRZ1UKaAYM3zW4amHtKGCigApJao5Dv1Vj4hmevJfPLBqP7U8ZLoCs99QAah2Ug1YJUGTsH",
  "key15": "5NtqUT3fgFNVm81QfqtoD8TUaw6SgLj5H7P5Mf54twg29ZydDhoWrQjdTkwPyUfp26s1PMTTK7yw74Z6n52LYkNS",
  "key16": "5DA75QqRfhcn9Ngq5hiuEHhJUNwhreGnsWhLxXfNzHyrTGQsfRvWynPHQS3ateSiowte1YeKseRjU1c2F1EL5Go1",
  "key17": "zLvp6cuzqDmAsTGM7krFx38e63bmSEXrtvznexcLVL4i843FU4nZF4qDkUeUd74JkdnrBEYCLEDu1geHnKszhbx",
  "key18": "3p3aTLURds8oeBoYp6ZGFyM5TWTT5Me97piJztQrSjM1DcDKhTdeAe6ow8YA8e92Jp6BEtrgGbEykb1twpZCLz7F",
  "key19": "4iHZUdD8JwB1K9GJRbcd9gePBmrj1fXuEveeYVS2z5WnTnCsrZWLq8DAHJr2BmiJ6GT6esqn8Gw2MW35biErXFNi",
  "key20": "8e7J81pmE5vPJSqDo4NxC7VmxYfmBVXL2e6vL47pmYad2QF5CBadGiJ5NW59xGGWTjiEP6VtC8NmEabyXTj8Bq8",
  "key21": "3PmyLC8NRykFL6XCJZrC6kqyLzTtVmR6qGCjbvFqR4tBCpcwgM2xc9GSoHe4KAkRmeBTYYbVaLzkLfSxaryeLp6A",
  "key22": "2Uki7csnvajFutzJQjFYH1Jysrzq5CMPPsqeDRnm1zXSURFKocWvMaotZaHC6iPbR1UHyHkns4s5XRdLA82hHhtK",
  "key23": "WxFwzo733rrv4AaPsdGaeMVzZLdM98v57hEKjwS6R4CUJX9JFCyg5Lqu9iWs9FQeFr6wcYrsPT19tQBtrqr4JqP",
  "key24": "YDxhPvNhZujFF2iYQdMKYwWEZuJELwBMm5PXnbiC4vykejN5MNpKnBd8yT8VRK7rRprDCp22hkG6ECv4fDfpUNF",
  "key25": "3DkXvSVbMBao3NAfE4khv6ormeSSiDuS3bxgUggig7hWNxGZqP9ptNyZRppv8sDfMKqso4amDjTePHvFhkSqiy5Y",
  "key26": "5NfjY7qhxHmcMFZZi4yXaJAZu8A4LEC1pyxkxMgjnY6kNZ4zNVQn2iL4ddvJXq55fmVjeGkqs9oFWhedHniaG713"
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
