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
    "4cch7wG7ByVjVg7tvC624MB9nJJS292rsKGn2WVgBq63kQVzjqBgWKiDMpLWhqQmHkkwQUVSjm1YbVQ9HEZdpiGo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29KiAx7P1HpqrijXmu7xf4zb1hTowt7RBHHHCgiUwgKtKZ7mVX5f7jkVqcyruJVtiLGQtasPX4TkNV6pmKBgcN96",
  "key1": "vVYrwWJJW8a8A7xKU3VRC4qVkFhiQcrFrVhgGpcbG4acMpBiAXDfRo3XjPE7978gDPYdMeEaVYvseDoVHEfpFPV",
  "key2": "5j5ze3BbREyNFecuQtvw8gSkDaV39jo9cJNdb544skmDLHcjPXyYAvTWZC3FRv11MsLrhk9gUXmeKVyLQoCcTbq4",
  "key3": "7atW6YX38LGgdwQUpAxy9SbES2bYMyS5sfdpCBPnyLgQBbNh4SaE4QAKjWZf9B1KheMHrSECs5KsFrMqmmjKz3b",
  "key4": "3nyeMJm3Ru6obr7uMzzbqhTticnxrHLqLyQZPXtCx6dsdrH3hvf5PaJZJybFwSXZetn1J5xLVd3xwrXpiS7AuUN1",
  "key5": "5DcidcFYVmtuArUx8t4msApcK9KbV5yukUaq1doVx9KrPTBUU6d7SU3wiCM5hQFDhMhjWBGpbtWfhiW9wPkXQ6yt",
  "key6": "5VQFUsvqjAzgwZbJaKduiLZtESDyEzuR8HoM8Tn9oGzxpoSLL5dn48NMsqhQPJ15nU4DC7YiNAezBWDzJwaTWx97",
  "key7": "2mt8ET7sk96m5mRA8eg4NFAArA6orZBMXnMbgxtxHLmpeFoqtty1W1twGw7ewZVnkU4vWpAYNW7RpybgfVwdMAtC",
  "key8": "YEabXt1QGvD3dwDSxC3vGwZZrM2JZhrmM2qLskupphLu23NVAFvuF1PgFJiaTjAFTGSmhY66iYAKfEHwdZK9sLj",
  "key9": "7PSPKe7dTiW8tXknEDU75G6LgjTVAXCMNz4RGTesQdxqPQgTrU2J4b2MZHR7scDFZWnfTjd2jE77EGkaZ13Y9k4",
  "key10": "1iUHF3XiPKZEh8jejHsC35q2T3LARiwnaNEUg8nZagw3mEf1gFAchezc92yK99kkuhAvhFwt7QrDTi612AJaDCc",
  "key11": "2XYtuq3HKr2Yd6C28V773BU5w9VRZfJVABSrxEp5FB1WKgAsrJXgfed4whdUpEzCZEAGwogYhjdx3udw77ZQdnor",
  "key12": "3m8zbHq4K3xoExWTp9f3ZZupfUYrGQa3HH84NXpjPcHNNPtQRweRWroTAKuamw3aeE145dihdQfc6EGtuCHd9cPt",
  "key13": "36SqufDaPwkMwhdMYruz7okT3PZYnKZKBdYYGXsoJrVBx9KRMYznUP5RfmMxNFMsRZbCohthJAe8bjwsAQWjy82h",
  "key14": "2YiujkaC3kmDBXHoHjJyuYTh8BgypfUbcEzN6HzhbhDQSJCpRRMzGinrbKgyZTbr1kEt8dqAT2pit88RJP94ZRmw",
  "key15": "22BP5U23j7McHSaGzCqpVgysQ3raMxY2duFEaQsojNhhfsBN51saRLYwgoy28mJaZoB86fYKptHbJLLfSEeieyDE",
  "key16": "SHm1yP1kpFJdXfPGByaGDCqW15LVt3qSWD6DpT9hwfXH3fFJvPhnLwpEbtk6dD3HW6oBsASQYXZiYaXGfdydE87",
  "key17": "3YTvGgCnzNmeGFi3XREaqXyQAhstuEP5f8CFCd4iZFfRQA1ZS2tUaUJnLdSSE5CaNoCVU4Ssg5PdRLJEjrHeMzQ2",
  "key18": "4Nq5rvcpbwLCb5EPButb3ywxbgEgbL145gfEW2Vnf5yjTZShz5sBAHaQ1GHo9x72t3oarDNBr8rpTEux3kfgs1FH",
  "key19": "2BkcfTj76RDSssMbHNK52JqdahjyExcHeLFGf22r87ynVXSWeaXFDiCLgGmFy8f9gteSynq7CHE5CeR83VyTfWfs",
  "key20": "4jGPyh1nigvYQt115XxJUkd14gpd2UeGiFqu2pQpgDt8DtpsshExMcUHqWc7Hsms66nc8a8xc4D5ToUbA394mLkh",
  "key21": "4A4KtvuqoDbfajKN1mKvPxEjs8V61Lx2qqr9cUdGc4z7gZWp33R75b864x55DavkjQLkVGZ3Z9bYy3TWYBMqVgbS",
  "key22": "JxhXxbs4oBSKez4ee4CqunnXtRdL12YXrtCsVJu3WH7kXqoYJDvNCcuphTXYSaU9XjYJWhpCk8GkBmtmnStxwK5",
  "key23": "5X2F7nVtnkWE7F6aVaD8i4y7dJBy5ErNpWUpmDvuQw33vPLjTQxFecmSA9Q6P4QWME1s9PLr7vMBjpDRJsUTgGm3",
  "key24": "3T3CaqmiMuerJBocsCaV332KS9rtiToJrx3JqKuEBiQY5k4iCHnPX8jurXFdnPKpk8PwyDCJG1EDcgeVNGX7XDWv",
  "key25": "3bB5QRYFVoWQFZ1sbad9ELxFKPtrH2zQdQnycBaRNmidwU2JPkTmSEX3Kaf1XYQxkU4jUW4RmNKfjEEVFWTfuxUZ",
  "key26": "3QoXMar2UsVu2w7CknvYwGy1FE766MLZW7Cx7LkYv4foRaiT2TacPKPCcLSZwH4JCgfVpwLzxSoJe7nJcHAzpi6J",
  "key27": "54GLC11RoiKMgCsRaQ7Y49cikmRcJz3qJ7g8F6zbdw7UsQymiBGvcAgkV7yKsKJLRCA3Mgd9FD4cVcgz1p9132UT",
  "key28": "5WSiqmkFeui7J1FiS6zjDNjrFNGNChieEuyBwccGdDFsfFjNuwuCtbYPw8Aw43XD9jTxqdpuXK5qxGycM3pvZ41o",
  "key29": "mzGu65x4Vcd8eQLDqH6YcKdXLjVUuYsKvwGYhbe4P1gzP8TrD2kNEUacuwPE98PZwFLffUqdThec9Gk93LJL9p7",
  "key30": "5XS1VhZo6J36E3tcU4HP9AkJwPb6mDTxVNsFv9WxCfHSz5ZxmespaR4Sc1wEsZ8dWzz1gDvPKDCorrX5SNecGaWn",
  "key31": "47oYhKA9iC1pYGd1brWMkQdxsVYCtcj5p3KJ76YxnPhJKAziFdmVXEAhK7yZXR2v1CQnAHaafVujKzR9hmXcCr9g",
  "key32": "2Mvu4a4pvRQvF6VjHLiXXwdF3k5EXeAjrwPisQcyqWufZ9538wEcdXqKtjhtfsK977aM4UPZCiPkwZSovJQx5nfA"
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
