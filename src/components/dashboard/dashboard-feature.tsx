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
    "4EGaDuJZbHXfjXCeqQbDaQb3KhJoj1WtxXEQHzQ9tr14YZSkq9kXanTLphZ4WfsG6q1LS1J6YzARK9bPxB9j4Uzu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5atz8jGf48K24AeWRiqftbaH1K6NHjAoMYHERwb3VBpC96Jp7g179A1DWg3uQmgRab9H5VaJM3thyi3LaU5zeEdm",
  "key1": "5Yhsn49oeoVUbANiFaERwGnR7bLKuuJCSQ3pBeimPKdu7t4HC6pStYEVv2RLoqH2Vm8Ty1LNhfQYDutqcmdVxd6q",
  "key2": "5ihRfRSPE6tUYAPvokGWzhUKfkoXNh7tMe92PzoLVGC6LY8GYbFiojof6Gxb317ZDM63avyGvz2kDyDxYZ118Zwm",
  "key3": "375Z86JYCU1nX7Ax5FSeCuDPzooR5bGKqU5tJRjFe26SaXx1mMP9MMxjDuGo4vGH7RNk24di2jLN7p7pvwnY56Dd",
  "key4": "3BXjRMrLXw46525Rt16vZg1L3s1JzDhiVvzxVDZRymn9J6Tyks3bMmEFPQwAxVruvKvpQqdhSb3BdNP1ESGAqbAM",
  "key5": "21QZHK3RHfWJFRhxk1uuKH9bnFzN3JJKa6bukJkMjhLi2tdQuH7W5LK3bwB53jp46SX6oki3dYDt8pTaPEUY4h9e",
  "key6": "4zNiknPj7DkpY7TcwcVa6VbbNYXHNN7CiqvKYoXDnw5H7kKnbrGEPyLyBUx7AdrffeX1Z5DCpTvbta7anAtyZPWR",
  "key7": "44qKWk4c6EE79LELmaZrhJqmZCWPqJRxqk6ooRa1i2YtWZemumedt52ggQ1ooroj7544wChpTF3FgApQfWMbPpxr",
  "key8": "3m9UCEST9erCSjx1SACPf2BHdtbuLYhN5kmogMiBx5vbpgU9QS9bhUEJwTbdVtLwXan6MrVnnAzgh68XYCFZUAoF",
  "key9": "3Zku7pmENP4DkD7EJu2qPnQ3ZfpNsMye2H3Y2r8Kr78J1N8Pt8g9YzH28EXe3VoGcd1vYMcaf54WUEAQBwCdSTns",
  "key10": "zHRFgQXKh5KfvXgj3ZQHDsNXp5VAbed5zYAr85oJasxfPBrrVfciMvEhhcXcoh6doKvKqLcPTEb7WSEDTEwgE1t",
  "key11": "2sq1UbbEQQBKVqMB3aApn8UW9HpEKuXxzLqvrf98t296vq7Bo53FGp2zG394ugt2uxnqJGN7r1e9dSeB8ASD81br",
  "key12": "4oE7N6NqbBwbzVKjcBcKg5ec2aX8zYJ4knr61eDPf15226nR9WVcV2t2Xj5PQCWwYzYG4DBAaui6zpX8dxDU3nWB",
  "key13": "3CP8W6D4PvJvLvJFccQBoWbh3V5ZoRGJT5KSSpGtWtEcE7PR3DjUqiPk6s9nHfoEombDzpk84Ya5siCuNrLMiorV",
  "key14": "cUqMkiyDu75X3aH6noHHvMnZaBZwVFm4vgGPfRkoKTvYS92TGDtEVN69MijakPvQrekHbD5rnc77GH5Re5JjPY5",
  "key15": "51nfRWC9gPWSJS5s5GBPdFpTVaFwaEjKNR8UCfKUtcsdrdMpy4XH4PwBh3e6y7LCcib72BYvxFViTkxxYsRVr9s",
  "key16": "2eLahabAsWEzUQFvSju6KWmfM1UH6bWvks5zw1tRNWjvif3kRdEWRvdGiftKGHDa7dhdn8nXV3TJXFt6JKJLMGxQ",
  "key17": "56FMYQsFYP6coJC4wnAmQAD3ePTZhV5chi1MjvNqjCfkTHSDSYGtkyHGv2tv636WtA7Ts6ML6QEQqgMNcFd5oZHu",
  "key18": "3uBd4ozTQkocSxdRhMFwKzPUAqcNxMYt13ooud97zjWSvXTAx2KkNDPWrYswAbAn3pJwKMuX1TeoxkgQAo4nQ8Ya",
  "key19": "63HDQLkwgyPcEsBtUuayuBrTxCXq59qJmcW8G5zKcaGRDX5YMTZ6imCJRykyrdYsHsnhKsk7DiiQiWGm5xaRgQvf",
  "key20": "2woV4ysH7VayCkrQMjswQYwZ6W4pac7FdccsGBqRkfnxJ6XCAQVVLtGEcWKVu74qVjhEYavgHJLEWAS67PVuHJm8",
  "key21": "5TnxYYgsjiqckA7PVpdcm14SFZDL2QeQw5bQiPg2dz7peyPqJF8HMECWzzyk9Rc7WmbHwUH12qd1h3ewRHryKon8",
  "key22": "KUnCScva669Ah389tLX9XPJWedFqv6CnHNbJwJPMdxqk2yq2K9DjSP7gXydjw5mJUJSD9RuLDydPq35PjJdnMsE",
  "key23": "5exYPaYns4dfByMmeviybDU8h9aeFTD6ZdKF6iMEzuSB1scLFkXHfC5giccMFjNAHPMY6a1Ao5qUyenqRxBuYj2Z",
  "key24": "2rgpheoTyGncsfutcw9cFrstoq9RtEmvkcqpdMDy19E5tPtKfzZN9yKfrG5U1dRFFd3NANU2hNzHQJWPNKeoWa7i",
  "key25": "4DSuUFskrmrZr4vkpqzjacAAmPAmTpXjzR7Th6nNUsE8SHyboWsKEF46g1NTKGwULPHXB48dQimqAYdHBK8StEDY",
  "key26": "2g25Y2U34XA85d8KJdCWDkf6DkyJF4KBmNg7AUApt41zij5PY7hcYVQFJDyrpwqLLdMYmyoASV2EJwbN1VPi15Gi",
  "key27": "2oXLgkZui66E6vQuWb9jtk8YJ4QJ52pUE3Ptd8nYsm2kdD6fGuDaHt665voPEHs5FZBDCRkqUKUBAegGLfzjgerM",
  "key28": "2vCSifSfbuvNABCnWpRfni77kJr1sPbTHxHgFTZv4yP2S5yr5L9rDYfXqLMCtqgR1X1ptUE8Xaeo13U3omtTcTZS",
  "key29": "ZQooQ2Er1zGnBqZsS8CmtNdEAW1SFs5RyfzVvdKL2FVo7SK7fF77FEEq9uEq2Xt1BjmHhwwEvKbpg9QVSoXnfAA",
  "key30": "SnjNiaNbrW7cxZbZ9tNuTgMN6eTsKZN83x8QWLjdc2KPDKAYTrbrtz2bt5kdkrYgvy16zxfsnaCLVKv3mYZsYNU",
  "key31": "3c9kW6DiBq9F4YX5CCAQ6v39fAKJhEwTDYGXGFU2G9AhVi5zmiJxC5mDMDUdKw41anc79KQXmif2dh2V9diEh5kZ",
  "key32": "43d6CynUvVYBwPsQraLYzNLQsieArzwVDBM6hHxEguCNTNYJ19hkiEfYohZ7K1VPB69pbHKuG8CUDikt1CAKXdJg",
  "key33": "3N1AH5T7RaxxeFTcaVkG64MNbLsrPTyuZUeB21MFm2whPVC69diiuM8BmMR5NsTP1YKdQwVRjiDWo38tYVuqDzXH",
  "key34": "3UYUYbYoKNf36EGZT2cHHMz1WNAHz5fp8BCSRWvLAk3WyhucPqjU8Fnd2KUDijwYYGKC8rHoteRycF5Xf4FFMKUf",
  "key35": "TrPaWSVpHvUWQ99cZX7BTaDqtRJkm2WyZoxapSMG1SGF4jxRzPgMzNXP7g2RSa4ETvXKehe5sBMXX77ozgVyEKg"
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
