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
    "3KSkogXWV4gV44kUDqtxRyhwjf2tqTcnXHwRxsu9SFReEhc9w4WWFSWdM4PCkT2qvbpuGmkzjy3nwhQ3eeNc3Dg1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uSm6aFnabfnaTRYzh96qim3eVRBkyuMTb6QGSggyYivntDjXaWLH8RkMzderUxrrgNqPBtuPuPRgd1gAFnTXequ",
  "key1": "56JXijWEFxNjuS2fnxgHqMaCgBjrXFTZhytREBf13cP1imbcv5zivZmU9dN47npfLk42iyRSAsT8XwjHKhwEkcYN",
  "key2": "2XjdgfD5gTtqAS56pbv48KqqKKGmJX1gTLR9H5P9AoSsvscochRex8p4mGKqDnjDj5QXD54VGzY8PoAM5JEPHD55",
  "key3": "tGpw3qPsr3Hu9sYEt8QvV8oFQkLqGjyC3NwC5Rn3zpeG5zZAB7Ry2nA5As6XJkasUk7LHZuZDRYuFQpNXeiMhmX",
  "key4": "3zyrmG1cM7kS8gQSYz25TnLhrLfJ5FTNRYASH4MXkmX6sj4vWTThrFcm39xTAXK4QLHfXizH4JnKJSmsXGmwJ6VT",
  "key5": "3NwhsXJsBSkCujv586J63viECiA4QopFmTH94eWZbX98pMoqjkgnQwK2s6yJjfkd6i394p1ikv1sqjCXVdi3yCuG",
  "key6": "5mnXr7Fx6YkLWAqrZ6A2gXqMr1FrvW2S65RLdiCcb8UMw9iuchz9cJM7zjG67ZjnPSrU54BAJGY7zq5x5wHv6NDt",
  "key7": "3DZ6X61nQToAB8sSDTgheyryqD8kJ8MmsL11H2mXomfe7f9RnTta8JU84uexawCCMHVmooX3Ropbe2Lbj19Xh4nE",
  "key8": "KybcjfC5JZLzxtym34FxM4paNfD5YmEikGFdogT4nXeBw4FQQGbnR6UUnTYMG6Fs4Noe752ah2SpG3NBw2Z3b5d",
  "key9": "5c2im8w1ExmhfdYxoiJ9d1wqjrxx7PHdLt3k8BLKMzraMwgShD71rBrNbXHGmxDMkkYKeEcbYDH27Epr21LUbShz",
  "key10": "3kHgHKdnVzyUDxmUJ4tjRe6JAsqHuErstfeBPK4KA6vTRQ4G59ZKjEr5tFmEkAovP8Upub6KKaEN51JsygziicYN",
  "key11": "2AySLRQn26tTKAaaAB47cP7G1uJP9GVwDa1HyMwCkpyXxPSXGD5P1tJDuGTSTgwWGET7UexAD8wNNXQ5EYCqDPKB",
  "key12": "5nkbJbNx1BoUoJHH2dYeoLYoWdb8c6SHp5uCspLQLjNGRzRyTdeb7Tm47pGPpbYS8LCGF56h15S6Ro61Y7fxSxth",
  "key13": "2L7ES8aHsv9jrq4sYSqHCRrvdvDzUbrUzz3cTgr3ZyWfFdQ3xCBTBPFaPM7QodjL85azBYYXYRZe5gRK7VnDR6wY",
  "key14": "4rfk3DmDxmqmZ3KJuGXzANYBNSzxB7BUfzf5w61pJ3edG1AXVg2mqZTR7JGa5FDDqhSnHkZ2Doc8XVVk2zorCdAM",
  "key15": "4pACSpxiXE1o9fc5dCYHBj8Fu9uVRevFfKVdj2j6HeMS8Bwz6vcRa8L6aesW8MnH7fnL14zt4VLbDsxq2EBenWtv",
  "key16": "t9YgjWJcazYUCp2BDiVwP6xU7zzCagYWo1sfPZmxcmmPYPkk8jzKpSZVLpQYiVLQjhb5jv6RSamekxDxC6VBVPn",
  "key17": "2WTDzPcUV3zfuWY5vHYJe5WC1WsmtZWiCzBk3dJ2nBDzpvqBDVdzKmpLGwPcHeJNL4ZVAMvjt4RDi7GTknY2EEz4",
  "key18": "4gztdVUJJ5YvcLL3NQ4Pj4y4ba98FEdJk2fibeC7kxa2RbPV9vBwxwe9Hko3dMTVsuvXgu9ECFNiwgTPyZkVQF7w",
  "key19": "2PzSEVBDPdMdpsh6US3vt7imX1ym3FmFNqKehcJizAbwz7Pzpw6wJ9ew9U8TaJ1iYDW2QMePbRZSC1AJ6iRnDJn5",
  "key20": "2fDBaibVygWL3thWG8Goxc8uUWG4gLDH6CrMv3a5uEhkfnykReoDULhqnMRXb85uD2VkqN3a1du7oCK3C4V8UiJR",
  "key21": "3qWa96hBBzwZenXEk7RcvTWTioBPRk3L2Ru8quRP4n1zRFEV4Sii5fcLuqSrQVaurmC2KqYvLSsNWiButtTGNFa6",
  "key22": "56iQqXKPsnQAn6ENDZkvGGV3uACVvpJ3RXPE4xzUPuxaVPkdxNRbmHQ6xGGK4q76ZJ2tBEgQjRPKVnkky4ucVyFg",
  "key23": "DBSPUyYu2dm2EMT5AFYZeb4RGiCLhfYteWJuKV3uDUrbzrjHJseE7bgCAPMno6BjADhwYeoe9fJhUzv9YnRyihn",
  "key24": "67jeBGH1T3tvJ1pkSyLHHfBAWQa8cpmNsRW8ycfpdqq6hg5sZeR2faUoUNTm4WSnEFEymGFNvkwT9n1DWuRKnWJs",
  "key25": "5JeaMJAx82AF6iotcckucPnmGWJg6E1nWEJr525jZx1c1koUKXsb76HCyQo1J7sfQA8vLEMMwSLCjbkMUzKygGFr",
  "key26": "2Ui5bsugHMm9CQpTPSZkPtXUqKwnV3seaYMUqhab35ksiUgLr7LryN3kfM1XjUdFpAUL6AzX5soSo6yQrDmq28J1",
  "key27": "o3jpsjgsaAts7V3YHCJ4ccx9hC16FBqjwesT8BFSpu4gys6JDTkYLWXW6t4bHDhaHxWeCZcFMYUeC2HgiuP3p8Z",
  "key28": "F8Pr9uPa8NHuyeHmX9A5RK9KqRUqVdLy7UA4VoAyCPtx8ijde6T91cTdvU1geHbf6D2nSPfSqHMGrAqwEbLokYb",
  "key29": "52RaeLxshHzRqn6obXcKMoMB2kRKnBbACrJDs3896jZquw3Z37M6GKpGoEsobBBBtrR17UEpSwWJWH3c3EkrdeqG",
  "key30": "3jqQ69uKeCTdha5HqyiPxcPX6JRt1d7Ck9CmytENwAb7eEfbvCPHkQpomHSQS56kEXAndemY57Cw9VcoRkZQNvRH",
  "key31": "2FAhVXbYbTrc4yKQb5TMQtTXcuUDPe3y6ugPUj6sheiNNyWmGnB2hb3RDQh9qBiUVvMQfRp6whrtm6RhwyiMnxan",
  "key32": "5fmrrzjXXfHLnnfzHGabqcJKwNaAgwCAeLxHcbNrG7VdbwxCxy2RsccopvR3bfQNoAhy4UtV1EZRrKViei8J37hp",
  "key33": "4Joyavr4kKCbQgoXdFeL8qaxYXG6ocN4uUZEuXynrmyvpDdqMCQeHajSexw2wk5Cv8dALN97R3UWHz8mMKQiS6AA",
  "key34": "4THM7cHCvAQex53xAUMsEo1g8AFyGNvVzQqiRpudcSTPorKtTSU8YK4ss4gaSdCmzyvaCMNnpFNC4CBkiZLwWtbV",
  "key35": "64J959yyrh42VK5Fc8hpzwEFhb4azbqT4a73qRirPJ19f8UnaWYzdz7ZTuLJGBLp1CokACf8Rw2QdKDxyQ9HMXE5",
  "key36": "4cF6QiGEFjhJnEkQqQpTBEpAku6gjLDgiX3EVHmYLRpCttdYHL9EUBUhPjVBCN75qAG2QTiuQmbt95kg6CqvtzZK",
  "key37": "21FZxsyPfiKXKzQTGhDoxsqXs7vLyFN6L9pfkGpENoSP21w6qub5X1faoEE5MhTcRYVr1j6nb38DSkCFgdrc5F7H",
  "key38": "5MzRfKWam58h6hAfZ6mgAu2UeDkrKd6peYF4hDpdPASb9xnQSXkmsLRyWzpx4HkdppBLoX5GuEmHh1PMqxMLu6m1",
  "key39": "5N8XMbcLyCjhEUdUwxTXcRQDQuNmUK2QmgckodUQ1oUriWkTghH86nZBXoq4pV7bNVSDovhpgRbwrU9h1RBacNS3",
  "key40": "2mxSw7vyfxRjYr3hmnDJqDZJoqQVqa77rbgNCmpkJ5pjEGH61rY5J5C3Jj1UXTdPEgD7BafqbVavf4d8NJHZ9cwf",
  "key41": "4JbgK6saE9rQxY6M3P479s635epaEpaXJ3bN5fVw1AgzYPpXmTZz6dqjAZKBuKb3LME1Xv2S5uvcfEg3cjrX5ktv",
  "key42": "3mDcPpRG2gVcVaWBGsiDCZQSeNUMMn479dw7HHevxsiMkaD6eiNW41XiwYDLf4diEeW4vZSjxzC7hpQCqe6btsAf",
  "key43": "3QRyNfwKYu2B9mME4Z4TGPZtz65eBAFhaCnNmfbzVSGruzqRtBPFSqDSqQZ17oGDcMoAa5UjGWc2XpUFHFJBiTkh",
  "key44": "31axBBSZB6pYMBe6VD9GAQB9iUt7jaHQJ6qRgWmGhFsqHSpRoafcSohxdbo9uQibADTExvZRzaRKsWHiMwtF84Vu",
  "key45": "49ARdv5rycPs6yLLX1fY2C8retrkL9ChKcDgVgNQRrzu4D8znaZoV3NKUYA1n9Z8v8eWrZQyLcuYeNeNhYFZRmyk",
  "key46": "4t7QH7dPjw3kvHk4K7UnuTthEdvUuRrGiJyXjd71GmxvavWrw9XWpYs3Ayq234GRiLhuqfCewTRbibQ7ZC4JLHTM"
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
