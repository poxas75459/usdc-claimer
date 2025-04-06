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
    "4UX3yWXGxBMSyX7HdspqXGSFP2H1pq4p9FhgzQ1FKeExNhik9PCYQRbD35mvAzx3wLp3r3E8VYCL1dbiCNiBLB1B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31XbSX7bFge3kwcfjVYSu1CAjShG1UEUWeLV6yHRfpJ9pWZwoNaA93UQeBMfx54TBwCu4sDvkYBGzSoxyaNYYce5",
  "key1": "531wW8g86mou1RtJjk13s32fKQPtUcVQgJYacwBhBhcnffArT49PvWF7bXH8Dd5ErSdMEc1HsB1AeoZrSmahL4YS",
  "key2": "4Hs4UqzCWvzD59Hhxp3Tgay2TvWx6fYgC6C5MxKi2tRYCjnyFVctkv82kgi8Zxxw53muystMkp8uNs5LUJLW6L1J",
  "key3": "5smjAYcrncf7winXDR9TGNR9sD3VJc8zPFoEmwRxWbugLKRbJ41NQRek33Hu4e3FAYhSW2Unzd9V8RKD5HBGyTYm",
  "key4": "2Uwj3KP3jdWMQXuHtgz4Kq63Zv7zLvh9JzCU8fWQdQ1QPYrbsfsZNsjfZAbNAAZKjaJm9rPyjp4XkoYAmqKkziB",
  "key5": "9fv36Ker3Zv9HmSk4CNCmzjaZxJ4PBPULjsqbZ4zDLsmmjgMDRtH3AKCNuduFqWTp1KJX4cY9nRbLaUaYArY9Ki",
  "key6": "2Mj54oQXNsMYy88QduQ4jnJyZi8X3Jf8r1HEXKwdhdq2gBGyU84vZTaNkPZCoqdHLcUyWQrCc4S8fFjfQ6yeom9G",
  "key7": "47f1UZHGdhWxAQVGcRNgFYLmkFJSHEphMemVHoDgCLCBC4qaYPd5mCEDB24Wg7pKkqbifJsZoHsLHPnue6x957Fc",
  "key8": "4HkEKvKkutfR2ZxTs5H2cwP25xfGV68Ya8WEPTzHB3bcrZp1oUCwTLmHcUhfDSZVjdtRXVDxn3ysiyvAUBd393Je",
  "key9": "3cSDZEdHq9WtMDtwmqMFnfu3yKrnDuMy9QxFtJxu6gbjARwdHuYJwT3MiPb9LVxR97hmbimMjcdSCWV37vykPSJa",
  "key10": "25jWg8uLw24WRyd8zAZm5WwNoXgvb3yegH5a9eQKKRnj9c8faogrJLvjDXraxKdWna7cntu7iC14SCDW7Q193fnf",
  "key11": "4enyMJJbQNzopMjnTBJCL6TtegYjrnBJHv1aR3tUNzPwi2CbNHkgFghhJrumktiQEh2D8dTstvnDhLhdTNKdKenm",
  "key12": "3KsrqBpZaf9V4NcfU6s87ndmunJCF5MvcgmLEXjd6ZUMdQwRTwKvpx8YP3HKdWP3eZdALjwsUNumAH15eMKFeVWG",
  "key13": "4ShHkU8adVTSXAW3mYWEBQChLExyVhfLhBnePPq91PcG4YLsTJKQHLxd2DrHT7F67TXYdbXgvyYocGkzfXUnJWqT",
  "key14": "59m9LpkHDm82rCU2FQKwa11TMa5aLR13qCwLbzKrXcKnezYkAcS8HZVmsXLeh5dGCKHtD6TpFcShmf9TmvCukinh",
  "key15": "1rStPSHafEVy1iWNNnKZxGFmBZ1tvssE2cQqvc5oMF2J4ekueZMUoQzbrZytccPcaWcTZsrtVq1PpfV2sDxzNL",
  "key16": "62rwmyhy46u7X8bM1dzdvRKiW8tMh9igoRMLotoVBVTZPqEUraPH5ffq8an6DXCPxbhbUjngY9thLZ1g8NUC9g6T",
  "key17": "2SVChwj2djURQDcKAVGAc5awzEBJhyvNiH8dDMDuGtgsZunUaq3SSz22LcYerzdNFe6sDBqBek4aHpsXbu71vskd",
  "key18": "4Qzc5mdvBzquYnHad2kaDWsDSGqP8wHzjfnchNoNja6U5BH7frDUZ7Ky3WBLamdeypZiibQ9FztYgwu1h4tQh2Sa",
  "key19": "PgNqpDRQJVBtRhEmsHMsuyunKPibsUihedDGtTNHb2w2UJg3aDavny96xnNrHiPhHCjS9FyEypmzw38nqXkzPfA",
  "key20": "2q5qXnE8vaqZ4eYNm18DEbVcULYk3YTZszdRGpipDkhz1p6GpbRCnKEBYAUVs6Nj6HRAvRDmeiDsDc6Sc3iy2EHK",
  "key21": "2rPy1Jb4AJjsC8NjSPMmGZPNAbSYwHVKg6nRUGUyyi6waQJanPtaFVMK2ZjAw5ZEWh8gMEuX7WacSmy7cyNYEbYx",
  "key22": "2CUG9Ld6a1oTiPjgQ4Laq2FhcGzygGdBR8bNXSiaMNtDkVpSAqhe9wNHmbbzo9SmMGzs1JaY8AaBAkrku8wwBrMX",
  "key23": "LDaMwu1mobnYrw7zoPyJ3o2L8TRxY3fWue6uf11bJs9A2rea9bxgrTrbtykxYR316awoFwyCXzixRDA23xTu92C",
  "key24": "4eCMq8sQKimxAajjLPvcFtLRX7hA1uFu6yCftkWmrcGjNsTJc2WWiNvVUktDGsdnKwcDifuniHr7JMmeaMT7RVHL",
  "key25": "5k4815q1NL7x897bfgfv4q5vGm9SJhP8c1PKHcZyTGR2CHZnkzaZruqrpLqCXPe9fWVeUTM4HFjWejw3bapfNMQn",
  "key26": "2rU8JK6Js8rC2ddDPPJsg2FuLwxjHR5LHbF2TYGs1QiPXFstAdYmJRGnTF9MZvATZCojNacmmrgG2gFGvUpdeHE6",
  "key27": "26LJ2xLgNHcqgwxXvdwuJukDXXUPuL867ETZi24fFhMLhN8NwM2FVsifuhNaLK3BU4x9cBPe1o2iGRG8HJDdF5Af",
  "key28": "5pryhcRoqQ8tsqAM8j7hphayEGDYy6jKGPXstNmfK59KshUcZsdVL9EhUAB2UUFaBnZ2HjaEoTJfTcvF2FzT8FRR",
  "key29": "2NrWDjugg2sqdoMPMFKpQmeQUhXuPX5VBZ1M1KPT3NxSKrGG9RRUdpuuye8ePN5ndhQ3p5ouiWmyGuuDV1aTZ5du",
  "key30": "2QtaepFQWfqRjX59LztFyssJrUdsrY4Ayw3UeXijXiVnV38agYjiJdZsFswkoho6KRLvfw8VP2ULHRKrfgBzed4p",
  "key31": "5idCrkCb5pThAbJYw5esuiENradydXxJ2rNz3SNUSz8D7zLDF5e1FEXLyTt4oEBtCEDdamM9yT1X1Ae8nuke89pU",
  "key32": "56CKhqqLoGab6cD1BWYv1mZ74YUhH34mrwDZQBQQV9x615myNhS2GtHQxr1Tnoy4pEEaezwtUWVunjiB2BDENURx",
  "key33": "35VdZAmvKwHF9mvKnhmxY6sw9bgSoM49dTokeQuUP9LZLJrAM88GMbPzJi3k2fAKYUh3HYRqWYL9ULAtT2Mesabr",
  "key34": "o5qQkNvtmYR9R7AcbqjeP5joeNxE7Dm9aKSm2bp9tW4o1aRuuQZLzMxALdSj8XrVDKF5C9w7tV9A3Fo2Ag7Cctu",
  "key35": "2MQCuUbh9WV7Q2N4KU3pHa71qqkiSFUTCrNAhHcVKAoS771BjB4zansgSuV2nyRfAgLJciAjRW1iSffzVYYrKvP5",
  "key36": "33sNp1YgGT9sn7vRP9tP2ns49YUQC4SGzr9apYHvautYFcwf3Rvnd81ifAQxrVkBoxBp6E3cdh9r9tCgokBcp3fH",
  "key37": "t4d7ngvgpnBP5uJchycHCb4t3kC6a5pzPF6srhja9L3bfdcQkC4D3DDA269gqpT7BU5iD8rARSgE6CGeMDmR7F4",
  "key38": "eDVaotvtU8ZbUP1jHNK3wmG36Ricp679tB1vu4o5qTmrFYBvtkQaovRk35r8Wtzh4osoC34xHx6jCQDFnDxJJd4",
  "key39": "wPY4A2GTnJH8xu2ykHUYtxHtFDfGwhDyrf2Q2cfZmVtDb9E8Q8VMomZryLhQJ8rEzMK3JfHFQ1LwW3GY9cAnZbS",
  "key40": "61ASgHGNQLPBtDVp9QSKkXC3QKueRHWYipt4mRvg5CVBzFcpfDFdn8jWtFNQ5DBCZ9ncwcih3w1BfAw42EdcuBMU",
  "key41": "4PK4r21fWDV7zNfWmWPoxNF1yxnc8Agg1PLCau7Z9MUvYCofH9U6VzcJDYLEqd9T5vnf1HS46Ao6qGbPjAuHKvLT",
  "key42": "2gQDxBUHp2MAyFUAGEPhEyB2atw9SkF6R5MsahcZnRZgm63pfaMjdyXAFHa1XWDfYoFEPZoT1swn7UdaaGf2zz6M",
  "key43": "3ciWoCqgrahHjMU5rKTvu5YLyGWCUFEmFY2EVK6CtzLXWQVAmhxAsPvNavMmwZiDxGdUPe8T7A68E27Kx8Ai2QZt",
  "key44": "4uLnDFZ1oPHY4bhLaF4PAazJ5dRyy1eAdfhqwWPpEVf3bd2kSgKHxq9vuBuDRAhDeCHv83y1dogMAgBqP7ApuhYU",
  "key45": "2gb9z4S7RE33BUamar4z4x3NtKAZEBHckszz9afThRDWCD8dkSh7kDZtYggX1CfAgwKqVkS3rsWjph9Sw4aEbqLq"
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
