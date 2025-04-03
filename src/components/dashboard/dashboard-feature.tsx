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
    "2HfiBscuY28nDK62TK2cdpsseC685bmckrPJgT37P6kaNDbH5WeZGrJBPcKU382724oN2VfK8jMytkuCj2pNfGvH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44SPQ54x5VkWm59Nbcr3uFiXatGLzWAKJteBCrFKakPSTfQfmo1GfRvYXjhsF7EESvxYv4va6sVsgGRYNuF4J5VE",
  "key1": "4rYr3K3NNdXPJrq9qsPW7dNqqkuFU31CPo5Mjabauim5PTa5egHCTz7nSRi5YMCGRMKEtj5GdjVFGnKeXnzSbcBm",
  "key2": "4hU63PJYhoKW7j1obXTraXKUAuKTW8rVEQT4h2YxXrm9hJQ3C9LWc8oNqqGan9wcLLogq96zps1X2AtY3N48ruyC",
  "key3": "cEd4avtsvnSXMgHWjRB3nCj1qVMMR6irwgHXVXWVpFckch3DyiSHy5FzKo6wTRtxGvebf1cMuXVgDK9735qDjVn",
  "key4": "3tWZ59kbwBfAuRTw2YB5UW6E1N8bKZB8vKm1wcsae4YjmRPV8BCU67iw8QvuGzTq5y6mA9TMUCg84MSKk3B7bjRA",
  "key5": "4hB9cAC7bzHSMFvPBxc2mhU3ZZfTCBtkmcj72hsHgqbj5J9eLesP6G6vkSnM1GyzYdGKWkCwT6LrWfxAqSJBkhzg",
  "key6": "4JMbpsvDUPAFiuiH2Sdz1ESSymQjjbanmqHEHrbVPmRWHzzNCUpAjnowtS3sHFx1M4c4qcVycnY3QCAChbi8fFeT",
  "key7": "NAtPT85fTTWCSNSe5t7uNnfVcbbNm4dmuF6PKFjS1tqeFKGcQ9TWbvzqmYyGxjtwzDxGFaVS18oBwAqWFpANFAS",
  "key8": "2dX7tHBqn3XSEhXBoEjmDm2qXxQKM1BRQjLmYb1T7BEZmc6C5yQ6shGH3fXrw9HrWaxLcVGchNxFH64U7XzoSdbr",
  "key9": "KuA3PfreoPbGTTMRmWEgNLbK9ag6woUpDotLp2Y7U1umJRnTUYLurGgeqWv4wvdUcJVu4VkKF2gKH7ERSer2knr",
  "key10": "5NSncK3WFdCUCGTHLAHCEs5Rc71tPbn21VPR8Km3tqmpRR14xfc6ms5SUHgmv5hKBUdyJugKBfzq674xTMzVa5G3",
  "key11": "4abNU3kfhWc6g31TBRd2b7fyTKpmtknJvpTWaejnRXdYkcRR6kFoLVSqmZJhvyajnhAqCKsxseFUTUjAG1m9zC3s",
  "key12": "ioPPm2XcCp6fhF7EK4HWVHJ6XTnN1Lwos9X5U6Xn6YAguhKecGdEvUoJe9KNPG5CEVmxsef6wXiwzyV4PzZ9oHP",
  "key13": "Tocgr3T8gifpDxNpDxb3nTw6fdBBGUG146qUyYCAVfNBGsuQhbZ4koeRq6f7e3Jhc5zewEHxtESd95MazJLefKZ",
  "key14": "2ha5fUYnsMdZNmBF7nrrvtpoC9QmhYFBNrNdisve46A7GWjB4ALsG9Q4bZxJiRWUHvHfALHCUrhoECYv6hyLqbZH",
  "key15": "JUdzxHhMQTRtAZtHabsdkkR8pze5SQzM3nQMv5WdpiRBBEjtWLTVrkvvfduaQLxboGArwxzgPsArrqououF1oDc",
  "key16": "5EYpykTwxmFDk5d6TJTjohfGRGo2C7xdzGiMESovu722Tw8CBMFK7W9xxQCL9g1JATiDdExsgh5fN9xJVu9VZ38J",
  "key17": "2V1xFcrR9QctBXeoZEVUH6YPeDgow2EcHJL6UNQbbH5FsvczPNnGiHYovnQACneyQUCDSwuYJDAbJj4tBH38k66r",
  "key18": "4WSh1MddnNkHU51wfCV2Rpyt55zjPHKAykDYh9YD6mvg3d5eehd1TyGYKY6yVChqKvqfg3kxJZajPT37tgjQhmQu",
  "key19": "5wpVdntkXryyyy4httDSNG6xF3ukMenkejinsQK5A3j26TTWZFTA1kq9vWhd2YKWRNFF1qzXbWJcMgWKhwQfVCt3",
  "key20": "59yLo9jeoK374EgAoJqCbNPebwea2U3Fxn77w25pb5fJ2LyogYVLX31CV2i8fXm4a4WofXr2j8e4sVVM6eaqyY96",
  "key21": "5kNc5J3eidzou5FLFYLEKF7xTWBHPsYpoCcbcAMFdpPL4vhh9mtc8BGR1re8YMBo6XnB1zpxvKRM7zaBpbtcXrHi",
  "key22": "3JqnBD5ZjC57p6kqzm43sfeeVPomMZsMWXJCC9qrajeD1whbYwow3hUU6KvrRVYVqG47Ekgg8zaPLYfGYAsBZHvc",
  "key23": "3CojhdcsbVDpUQQq3yEGZEzvDR7PrkFBFfESb9sYaxxqNsXdojm8K2Doamtse9mkZNHp3y7P1bWvyka4MhxK3VnM",
  "key24": "3F9UxsYjyPcy883cDVFgZD1E7JdUqxj6R6W2GjWUWMdtG2ALRTP8x9WUF1iSe234mXC5rhFCB4JidSTBagJtfA1e",
  "key25": "5biSYGMsb8a1LUTvUjxQuvA7pRXf9QWDeRoJmiKumdwkQmxay1K5A6bDNV7DhA524meCpwHMgpesJixN8aGw4XE9",
  "key26": "2AuUWjBuQBQiDmnen1MgjRW3J4H8bysdThx1G79vqZozKtmUmHD5B4J28AEeTMYyXZbbeoGFcW3FmajX1crNwCtR",
  "key27": "5rBw2iDFgzg1rEfFFeubLEfWkcccE15ppf5LqaPWYDQhx2483WnsUWkMGxqLPddFsRQXLDa13WmarvHv5MDT46Qr",
  "key28": "2cxQSqcq9fuuEy1B43Ma5DSuAjcSyHnxnr1qvqD8V9MSnNRHjedd5KUfNDq8Tm9Uw8hZB17rUmA8CComdVcgQau",
  "key29": "3WFy6ZNAN7BaZeaLGz2ybRPeQx14KXEp3TW9VimCcxjMfyfMsn2hQ3StjDNBhWERDKLrAfaS5ysZPJHChM7KkQaK",
  "key30": "2mqW2fU9Cvx3qDSuCyaHqZ5dZuDMiexpY6y8XqGJnTDXAGEPh3ZiDENJAAxPMsWyVWKhGEZutiFPEwtcLt5bimmt",
  "key31": "2dY22nn4rpX2xF82xLQTFuL5hGsK2Yi89WGEq8r1zu3JBqj6ZapHpRnD4SdwJpHQHhWmBiYUNTkqG3L4e999rtVF",
  "key32": "2LxjP5oDhEGXKyXSRU2kb9Je6hpideEYixSJzCxj3fnWayfMV6PKwKCGmEMfbFvWM1i9X9uor7YbDn6jzCwD3aEo",
  "key33": "5swMH3Jy6E5u9MAkavmmhQehYaUaLNpTmbE66qZGi21hy3fdH3rkMYDwCyyBvkdtQMWoBZ3CWkGV4oL4r7wx1m26",
  "key34": "2ms42Xr8bH9LTRjG3hcgcBtLUhYMcELh4nLUpGd9x6o9ovLoePHB6urTxCSsV8rWEMxTwvdMvJA6DFk3gGweKg3T",
  "key35": "3izRT34krAAdbiSrSjjEi77NjM5rKrjXyUJr49FfD27xDiK7rhjum25BkfKCC3bY38yw4kerzdE1379vQqReuvNp",
  "key36": "4noRWqKDJMwrySMn41AJuXM9GJVHrJeZsL2nYs4kKTvXF6HFVynNPUUDYdLsy4o4sCJtX99mJNTGcRuimMYnft2e",
  "key37": "2qYGCXqvvciomyfJ75N3Y3x4SBAP4CwUdxkx4DBxVCjYV5bo3vRzm7kyar7J7qwugRVQsif9H3PaURZhQj3sxqxU",
  "key38": "MgiTKX3DmxsiRNm1cJ4JSkbaREfbrKWxwUBhxYumjxYRnM4QGpoi4FXzQGzANRsnK9ZJ9h65My7cLCs9iue5VYR",
  "key39": "4cJ4AjAztwhcLxpt74Npmwi63vpiB6QJBacJdccgL7YvAGQCZBifibEKzt1BDUgSFadiy3cjhQYCKCMy5JEiorim",
  "key40": "22HdvitXryBoyr4KCtiAZKuoFiUQRCuNG5eYrzNHEmCSTfdXiNKMuXTuLCzcEx2z8fhwPSrafSYh9oKxugqBdkNK"
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
