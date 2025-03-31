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
    "nL95Edk6Jxn7tana4VEphJhKEVgtNGa3KKVCvnJLQGu9VZZauEZcTR5ihzdYHcHqxiNwr9Gr5t1ZnMqQBzW7LHB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DAteZfPEC5Y9Wcoj56v3MZBvHxb8A34J5tjGrK85TMTKfNgXygxAxySPqeVzCvyewuz7zEcqntyQYX8wmxcFFjf",
  "key1": "29NNuauvezRxbSPF3DtuZ9CKwDU9VKwNxvnpvmKZsmuFPm4uXAfCuDBBQFTxH3HHBy9HnczcH6g9ttFRJg5zPVMS",
  "key2": "fUKuQcGeYiY71F57jSRgNmf21DhZce2eLp2y54qDot56QPHgUiGVNELqgexrsvN4HuZEU3sqENjjeANo6WyDrzu",
  "key3": "y2NaA4inw438QaHCZd5hbSpgvKUdz7fzKjNidrZsW8HhZhE3dTQucbFwxaiZWy3UWtyucs4Ay88osyYoVcAXk6T",
  "key4": "3G876fb3xp6WMTQNK6eHScjq8qoLAfotUKCtqVLhisUy4hSwqNxhBAiEX62L5Zig1YBrdupY2J77fY8X1F4hq72N",
  "key5": "gZJkTXXGXX1zJmAAoQ8A8Lfk7kUzAQmfDmTvjKiMatYJM7WQdRHhxcrpaMMko1rktx6TJRk8WRKduSSt53JWSYQ",
  "key6": "3aSfCUmietrQm3eEfxVHxNg4oB9coeeoBsximDnrqcuCQZzFv5txMvoNL23ktS9A4LiuWLijkJSGBxwyqXAhPXkz",
  "key7": "25Rni3prfeEtebPRDDDXk5d18CTeBEaNPvLMDxPzhtjbrFhTpB35i19DDd7iSBRzarv5ENdkv2iJF13AXWRHofD8",
  "key8": "3nepVX7SjL5dAHpM8hfawVmFkm1y68uf2kfaQiLjtMLZNYvHcAWkWcfxkfKhmpdChzyPjpYhK9nX1ggPvfybSgeH",
  "key9": "3a3NUf1r3jzU9wbWWEBRPMoE9cT81U8CtDCekZvq8Qj2kuUTzgGR93dNJC6MSvkv397cdVfxrRLu5dm3G6bkyYaH",
  "key10": "42oUQ8WnKGQKgF93Acar1UaBtD1LDxUWoGUE4wyaYY465jdUaKtULVHmbXkjPqN7Uwf2gkdN6JUoft7gtddhFELH",
  "key11": "Ef66wvYSffHoAeT8ox13Ex2UM13GtNKYNk6ivX7cuapdZNMXFi7zRDut7u4DqWJjQvEAFFFwj7QxMJhzHo7n771",
  "key12": "5jBLdnZs1ZZbqQZ7UXF8vq8QAKqsNWkRroWEp1HZX68QYrc6PmDs7Nc5L82s28Kcmzppwqd69YqRPvhAKiJNbzgC",
  "key13": "2ZG1JmoZcE13ExS37LSZFjZmsJ6EDqTsrKcxM9TLYNzjNNQZw1HMDnZ1QNGHQw54PSJfRDBu3imqPwZ5dYUbrDgc",
  "key14": "2cwVQUrZbWzDgmWcyLURkk6JNbEne9Q9aqfnsGdmzKdLr1ngHThHmTmZ7JrQcdpXdfJA3mRxvBS8wVua2Gu8HQVc",
  "key15": "dmUc4W4ZCKN9MVN3kVoDPw1fesY3j8Zm8gvD8R7ozQshXpaGQHkuPeunc8XwE3bQT5YJmmVMR9fQdCFJuZCzQzc",
  "key16": "3yq2k2RnSTw6YKKycy7onMAhRgLiHen2q3rsWFbHN7RitxWvahCWqiTbRHDVfJJahLq4Np4Bcsd6Fj1oXegeLGhm",
  "key17": "4xxVjj4HqRnA5KG2zrQJa4LgMx41gsrMo1MBtrMdhZSVQZZeSdrR2mdML4j3rkCW7QTtuaP5FWMTf3PG4ep2zWXR",
  "key18": "62YRpzAKTKBSTahxeRuu2f4Q44nLcpNJd9pjfHNmFXR1TUGairD7zAoshdQ9zwFqUxb5Qvw4fAPtKB2ADW99kEGA",
  "key19": "oBRNLWTkasmSZAQ2xY292uVNdGbPtZTigqZAVzA9yeVce7GsbnfC2Nka4WRrdSdz9UFX1GvTsHX5Ht6x2ripV7u",
  "key20": "5Ld9Suv32UCFYDXdHwyrWNcLZ2mKS8rMLwxhnRx1uUBAoaPruGyKCx9f4BQgD5S6Yjtefgtd3EjissQvfRTUieWo",
  "key21": "55eBVvCwEXtAr93txJ9E4t2kJybXKHXo15H5GounGUqxjWP9kqmJUZktycgiCmtnGCuN8GwmWHfiQyeHNFinFuBt",
  "key22": "2GNRW7UBQSDhQY4CwoqAGu9f1GhBt9LjZ3CdpH47pLxNZDufJYBofTu7jYhczEG6eULxhqNR6vXHVQmpsfa9tCEa",
  "key23": "PXSZyqMucFdT27eUAnev5Djc45T9WW4XRKcTYDUTD7NziYvDczzSqj4gUVMZ9noFC3o2c8XPXAYuQkRzG8q6oJ6",
  "key24": "QEqC9TbPyRHj3quGhWnr6VBFUuA2qUQbDbx63sBkT5PbbPh7R8vJcA3kXdfcDCntewQy6q7TCW6hbsK4trFhzn7",
  "key25": "3SATsFoaqv7UF2pRiRMjJDv2HQndBdGuRLR6LMY32yGktfQuk9nSMTcKSBr87ggbgiRMBHb6LcCv2eXR1K2vFcPR",
  "key26": "3q5EZWz7ZkrujqJsKmaBM5LvFgvtTUBmFqYvEHdrqdod57FwskNs7EZFH3Hi3JYEiseCuHTnSeyjyc6ePUZJp8AB",
  "key27": "5LmtnCULLvU9AGyqFV67vyqpHUJAEoJhj5vJ162J55yjEyNphYG2Cmg8Kc22ZMwQoAxVQDBFuq16kbvhHXdj1PcD",
  "key28": "5mSNnsGgcJpNH7a9mbRqgcg5tA8H1YX7QsxhYapvGNU12DRigVYDF4rDCWdcNhGtk4xwvS3iRLiJQ3PrrfmdguVE",
  "key29": "5M2cHcuuLzHBtkyW3sP2x9e4nDyNRF3C8vAeg4gRTG2a8dgkupTB8BCjbN9rGidgroLjKYF7Cc3tBvJeLd4fuQ34",
  "key30": "Wv2J2QFme1aGE1nxm5o1srAtn9ZbKttPErQVCbnTWmxHZqxbs72QU4VJ2d46UG3trMh5hkmnybdLZhpTP5aAEP7",
  "key31": "5yiLfZmJa5EJtfGLqZDHZwrEUmJRNmEcaS6wU8WKnTiyGjyWUxErXY53JpRhxC3uSXwKNcznqABKm7uB5dUTsx87",
  "key32": "5Vyopfj6dZFqSajy97Qj4nBXxyKdBg9FLjuW7wcXJcmJ3LAJQ15coiTDDkQCBTTdkFJcN6VSKMuvkSDJKfSnjmtx",
  "key33": "2nNbbYwgppqTeKPkcCV5TqNfgMgg9pinLBMqz9fTbftbEfqJML8fPF2hG29rqGJD1sNVho9siPeytNuTGGnbY4sr",
  "key34": "5foFfC6wgvNSQvtVEz3SMKuaLYV7qYdCXqrjrjytcwR1ABFYgUWMWWbFbypWVoyiXhuV22J7TAcMFh3CZv3tq7kE",
  "key35": "3SFqKnDHeU8sKKB4ofdQyYt1HJ1f9WxGsCfa9MmEgoSyzMLahWrkJvkno2Q9JVmXHKg22yTKQgv24Hsw2im2RQLi",
  "key36": "3unAinpM7nRvqU8W8eNdAUZarnzN1euou3HZGWyuc44uK3H5zWyngGJVQJdjdmbeYVreUQQLC88rnMMpnT9eL3m2"
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
