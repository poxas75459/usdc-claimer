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
    "TivKJrvpiNLc2DDz5UkLNQaZebnEE7xih1U1dNyGKSEeL4t5CUnujWexweW87jLiMw9AhGdaZjAnYa2iMEYbUz2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NPj14Qc6Kx6FwvRQcx6UQ9sGnXbBoTBSagaHCRZirS2TMRT1hWLh2msDjLmxtaAW8GRWSStm4SYvd4jRRAmMU4X",
  "key1": "4XQqiKdU7RW48ufw34witmmNgUckeqqy2Cbun4gdm5tVciJK14pEzoFNGg5dVoGggsTcJvZxcbwZJAeXxVpXwzf2",
  "key2": "5QWVUM5C17qZKbJvrmcHqQai3RpMEKGS3o9CGyW5hDCSmEyHEtzgwqvfrv1vvcunmGBB2PMPsFZVAc7kLnbQkdJi",
  "key3": "5fHwwBrJhC5Eut2GqEwdg1bLiysXpyjQ1EbhiYMPmr9nyK9RVoFuSmwEMYGLqzM9KCN1GajbTsQTPFSUCU5dknd9",
  "key4": "3Ups8WknxoMpUXX5V9mzizZM3FMN4TLBP34rsHafzm9bne85ia8RaZFgsTNuxcQ65AQnGCcdEnou2fSTJFN7rVR9",
  "key5": "4fN1K7jXmG5dypzomFbmULEYk922eaZbsRUyzk7ACNrCMh8pKS9Ek2yn7ghM7ypcafgMhverx5HejwHeWn4ygyJy",
  "key6": "5YDKjsx13APJfARuJr4XB39PPf4QThf8LUSDLBoLAJAFzfTwS3HnXNJpJGmZuzPgwHsxw6g7NaPihccZXavTQPqR",
  "key7": "2w2aNqfEgTFcyizZWmiLkcR7ekYfEKjouJxrpbsvaaMNQc1epjA8BrwfJzKddksgbaC4Mb3xYo3gVSGBDL3QyeH1",
  "key8": "424t1uiCbr9zmmP8SfhaPpPFeDGCstPxoAZQoZZKMn4WEjKrJ7rUnC6zD5Df9tRoJe5oPUryfnsrgAszSov7pPsn",
  "key9": "4JuoqUy5GjG9yLVd5wx1SrVNvD4J7gLxQRp2c7LJNLTkWRL1R8xxTsJjZaTgDi42vHUqjYdVZEYRNou3SyZkN3Tr",
  "key10": "3wP22Pvy7tXRVQxuuvSr9f4SdHwCKKNwEPnfQ7ULtkX8GTJV88vWSMVnhuMo7RK6YC34QNpn15HvrTL9vteegokf",
  "key11": "23KtfwdcibdDmLkHehzakHvpMPVrSAoWUsLQRq4CdY89xvaw7zEEVwNn5N3Nh5c2W56AvTsniT5tHxmC13qErnvX",
  "key12": "5DfhBQf6yzAzrwoZYAd3YdkJ8KR6YHmrRQqfv4dzHSbtwg587rxY9wYBowjQZsDtKRZSJhfGMXfn94HWrsTDxmL3",
  "key13": "4kJ2pb5FBQR8aWrf8ks72NCjzQJhrUpQuG8YfHx7nHLFuytDzAZSi9oPbBiKVZxkhnntgYWwz86V8Rmab2hBuKMY",
  "key14": "HsWtt6tbFm4GuqqDB69pQaTz29UkXZjZ51BY6BocSauNKcCH8HznXsZbPeMdoJ9nUkPsuVJKGu5DiyEwR6Jr4do",
  "key15": "5yfmTU9rh92busHw7qZVWvDUe2o1DeY5h9XBXyKRoXHSmR8fVPBgFQPuRyZxZSvJyWDw5owNGnCdVJ7utsHrDLgb",
  "key16": "fFP4k6wQ2sGrqGSrhapwkgZjLrutntnZ7ASV1xgKDFaQ29BScdWXDfuQhwWsjRLCRkWMNvi66SADP7tmM3hNULR",
  "key17": "3hUwAgHUnXbWaKh8JSCQTsxiUuvgAokpUc285iUDRaGUoC5SW6t4VPwN3ZZM1yEJzCjLctCeVSy4VrqQgWSbxQef",
  "key18": "58k7u9t3SLDCaf7WrH2tA6XPaMXdPwPqUCDAZU1PbDSABQguzZkF9pAQQ7kgtMgTFoiVC4YD6qRS5UGKpQed8y9H",
  "key19": "3Zom4oh9FrPj7GF5MSrJp3Cs2XFUhh6xC9bk9kHuJGqEGzkWVpNeUfpdiiYgB9mCaDiL8Lm46H7XJx9ccHagFivi",
  "key20": "3mUGUqE8i1zKypj1BCBhHM4Jf7LXpuZh2bjoxKPW7eoyH15uJ2dVDovetqHRMcriKjLeK3q96dnzwbpiEPDhAjWJ",
  "key21": "4Y35RQEV7dZKMtBC5gR54ZhuHXRD6N6w3rZV5pe5td4iS7RNTb9QNN8BetBEcczdMm9GPusCfGCCvRrPYTaB5su4",
  "key22": "65J6o59pCYL9DsyQbik5HB92e2FFgCpg7EDkUqhUJmjjScJseeL6KMcRZ4PNw8EFiE2A7EpANosDKYiz7WLfwoPM",
  "key23": "44MjS1Gayrk8KBwoK2Rmx8biyqAnfjAfacBBUy3Sc2XbLoju4qLFMaJgNubwKDHKC1YnyEsdarbM3heLA47EkZqR",
  "key24": "CxyLw64VyvAraNqXajcs8PiP27XS3GN7PUco1tXdauLt9E8KGyxkRMb53vCL2rLcUsMWVto7JLFhLMCsyULEBWB",
  "key25": "4WC4guuwdXP4e5uefHHsfqPyvZr8S1XsNPcaHTsMchJn656Zbvz6egp7RfCgg65ry6vRrmEFUKt42hMoSaX2ZzCH",
  "key26": "2Lh3smwxXPEWFSBem8AeK9fqsQKMxKN7tYULVGuB7885ECw6iQG7CDRsU4cPv6nLHKhJjDXw3XCbif5pGucaaj7f",
  "key27": "JFZXCzCtjTmUrWjjvbF6odDm7y8USWaqxGkV3Q8ZCE3NWPnNuN1T6DT9MvDXSBAKLbE3vRPQ8NeyiT5mh5BM6wd",
  "key28": "5KiHX3q9J96Xq8aFXmZiYUhm8GAy5m3vY3wsBYRfqPZVNaZF3vtUmXhcxKNVm5W9VD29RqGCmZL1niMRxfYkY1SR",
  "key29": "2aTPotn2bKxD8zFgqWeHMPueap1rqzvxDA2DEWQgiC44j5zNo8mJhqpWFUpjgScWYdfghyNLPQLz5L2tP7f317Hb",
  "key30": "7S5dTqdcqKVkgJGL7BPsek23mekJkyVqeyGhnS87o7xL3FuCoUFdYhWNw9Kha1Zx3LrGjGbEuyBXSZjqekrcddG",
  "key31": "hD3Qx8WZTGn1wD7gts89PnJTZfidrRQgJh6qSHqCzPhkrpKxK7FPNToiKrEdtv29emoxyuMcB6d46dbJ5h3qRtK",
  "key32": "3fYwGmy91BChPc5j3vn7kcgJx2Seq2ZyQDPrUfA3CeWKxg24eq4DnEpjFbzzcU3YXC7ECVLpjYUfmy6dsKUpBssy",
  "key33": "2yghjxKgrrghWwbSfebyVEtLQi9koK1LcBtA8A9GppA24dgSx2X3q9qmFprqJSP1dc5wtAv7L3X5ZY6rnBoZJWHU",
  "key34": "34ZkQBkjPkB7fqLLQYiU8FCfQZHx7RvuH89Sy5b2NZfHBXGbPSpMkXH1vERQ58d5EV4CvmQv4922bkjAWBGFmXQD"
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
