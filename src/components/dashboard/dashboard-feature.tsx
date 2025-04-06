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
    "4tcDhAQhrgpAVfR6AEtNzFwGRQuiLX34C34TL3ZSd4Cp4b1EfYsk5LeVKWR15afUA5ZQYSFnYWrYVCWRuBzZHSyL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Q6ZK1dX5PtTS5kHs9xN9ei7oGPra7N3SFLjP7he67GcCH57rZVq4CWYz9ANnMyRFJo8GUGHLS2DECShj8KMhP1q",
  "key1": "4eTMaFjCZUqWhAhqY8NtBcAoDitQP6wjEstZMYzULDJ8L1pGExwxt3Ls3R15pA7wK1dP6NbnrfBRLoV82fbzoxzC",
  "key2": "4WfrUDHdDAL7b7NnjdV1f3kWufZgbMWBZdU5W1rDjEMEtJp4ctb2EwAkShDjFUGGgWsVFg1dpp2vJ77otUZFU6QJ",
  "key3": "5ixXRtcUHfE5FVB3gNnNz1Cqed5UrQRUWAY2X4vtbwy7ivBPh5Zi2kj7kR2pthcNQi3V2TpbNNY3H992nQ1QLiTv",
  "key4": "n9vsDV8nQfuxmMjRh6ewGuDs2FFnfceYQpbUCFMTcJQxA4ja7o8Md5B7iQTMRtkXyS3xvqH7TW8V4iwTcxosFcS",
  "key5": "3PNuQKHbf8hKfrx1ELxc3dZJwSABkC6t4XXHSh9bePvTxLwi6qY5iwCVuCjJtFNbCjH63biRo4Y16Xnjw9LzCbhn",
  "key6": "3rWsaesv18Vm8tJup2EdF1Z4TCNnSHZs78vCJHczQLimJiPtoUQx1FnxD4Cc8yNu4kB18q1NTwzaiwyW7yM1wA4y",
  "key7": "4izzMHppoGNwWGyr7RAw7cx3Lxh3JAhPQ66T6YHauXpaXdwVTfUBziEdbHLhEz8dzZXDA7adMY2g2Ywx18zNzzKM",
  "key8": "4HtB7yaVoS1bUcpPvE7x5AV5uxRubxmoDvt2u3qJtzfJPViERWfkAZ6eAAcNFia8XkuCAaGuW3yXHMH4X2NRf6MD",
  "key9": "2b6GXknKjg4fyXo4Js69iFB99fqEwfLm399wU3EFeWtKfpPiYhK93NmpNM7qbA7aqMy1kfpboLFjkf4kXXLdwT2M",
  "key10": "5ictcobSR2NA5UfNdr5j52Dg9CV221XkrFvMXwV3yYi8HMNkMj2LhMLv2v3B9xMRVf7J9RtBPA6HN3MTzBxEpVrd",
  "key11": "4pBvbPEnTsf61Us4kGvQPc49brRNHVUWUJiT6Up3PZY419Xc92tzzCEJrWDYcBp2RGQZsKXBGcpJLoTqUHBP8kUH",
  "key12": "47G3sUSui44S13d2K94CqRCMPka2PARyWFgF5mRP76GXvfaovQqz84xiJPoYBPZjKYuf36ZQUkvfjDpNjM5H9BW4",
  "key13": "36GoXLdGpDddPfosBPpb5WZJCzKt222UenEAkowxpJWaxDgPUji6gSeVqbUkhcJT8W9H1pqBnUGm1DLrB3ykSUDr",
  "key14": "2BTfevDQht5pCfAPNqjxMgTRMYv8Wdd1c8Go7Un5xgkGe8CBmckJALQL6AwvjF68AwA6UkoACPLWYzN4ExYEUVa6",
  "key15": "3mYZLEkus4jn5uzVefKQzFvnPg8uaad2ykTE4HZutZkXvKZHR1nBv9pLPNdEnYWfmAd11oBf5ASXxv9BiVDRGr5S",
  "key16": "34FQE6CcQT1fG83YWPyLvCJuHoygndxrrCx6n7VsTTdQAyc5Y4gi8fnGJqBctE7AUmfrTDumTtEgwkyZcBsKMXrc",
  "key17": "5Ls9dE8D5w63erk9ydMpz99sgcohxWU78fSvoe4k8ctwvhtk1TbrTFmz4KuHLcDMcmsYziTshCKh5H7h8KnmuKxs",
  "key18": "3hG8x7wop4nBQGzngrzoaUvuQvyYmqgs7n4rrgU4NVm3JVywcuRXNcVxnWc19nKQn2aB16HnsxBA9rS9St1mLTPc",
  "key19": "8e2JCSTHiDFunVG1u9EfYxCXCefmcwN39g3fQnccuFNjARZYv5v2aAEixapNyZVvuaijstM1LPqTrgfUxbz1f1a",
  "key20": "FSgwjKBLZAgP2NmikaQ1ww5bwB4XRxavax9oxVpfA16V1svS6gtHiJGoWSyhhsURbgMwRnsP4QNmg1zSXHeptoN",
  "key21": "3ScvpX32LLz3vMSSzNCZJXPdHNgu98Uq7ZSDPet9WwENduAYiU6G2y7gQFMoct9au5GyyLzHN8aRAc83EUe2U9dn",
  "key22": "4Hguat4vaDoUpYJ9AoZdoQ46NoMNuKyUZgjmVHLQuykT1xMmHAGd7YJi7WTXa5Q8Avj4m27utfPM6zd3R91dNirb",
  "key23": "crBLFbEmKW8YskXneQuGSk1z7XuJLyWqFttHrVaNwT4HcUQ7p1oxcJcKcCGMpX7jUpjr9RXbcBaQUoRMgf2GLBx",
  "key24": "5DwP7XgNx9U9fh6JBPgmVnNW4P7zfub16UJ67FK3K8EXY9zbFicEq7bJbtEGm7nhgoisxkHMyAqmEQgiQ2yxuGdy",
  "key25": "3f4aFXEtmWStasFbZLR2LK5k5Db3brDG9zcTbCUr8P9cBcMcL9Xe1TGdy5KNtwpjsDomMXmmV1ynUbNyceaW53EQ",
  "key26": "2pCbMfb9tFh2qEfxJuq81zaHFtrdKtoZLnVVEfAn9zKfRKSFWRMV4FZm1K4hm174iF795QXgNtduq6hTAosJYkt1",
  "key27": "4KKWWJigz1etrfgAJMQ9VSszZJzVAWeHzGsHcktEoLvT7isLDmYnKJ6uqBMArs79emJap46Gh3RUw7dyZsLJui6r",
  "key28": "3de3QvbJnuExmSjcyW4SEu85X6RWTr73dVXURzjp6V5jvWcXGNjcptYEUnhihStXtgXpTtwV53YDWQnWAVdHFtM3",
  "key29": "3gt8ukNS8R5xv4QsjyRMznhHEHebzz1nUeCfihNcN71R9RG743CHUbfXQ8G2kGTbXz6QQxds4QRn8T8FjGwWwU9Y",
  "key30": "t74GjfpjVhho8uJYeNSoGHrY29v2EcWboCTq2EPznMMgTWosQF8gcLBbXF784ayqr96Anb6ajyprzctp61KmqCs"
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
