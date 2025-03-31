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
    "61uwA848C4kszxLaMHFsA2bBfbDqzkHyJpL2ouLKJzXs1KFPZpGgHW2LUmb8p4Gp61Zv4FP91FfqH5N5ogxHdvbY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "buH7f4CL1dezAewr1jBvoCb9WGEeJNLQ35doAPAAomyY4TiSkZuzbBG2Z2agLdw5tRTo31KzbMdfoS6nH1stUfN",
  "key1": "5Ezqs72SRcuV7Enzh2j9B8cqUYSz9MQwVGjUA6N9B7XWUzpsvm9EivafrGSims9UJn5kA2Z3KR17pdf5wsgy4VZY",
  "key2": "4rVQz4bvax3uHnCtVC1iQUvE9RgwPvoNSE63ZRpvGExu4TU5J9hZ1Bsztbu2bZVUVHegcEHgXD8x1ZFME9dXNorZ",
  "key3": "3Vac7majh1df6igJ1emto6yryMZ4GewySLwaexYsBsdFGGGXgyUWsydBKzdx8VZCjvKx5ZNwb7JmqRBP3iccM8Mj",
  "key4": "4CnmmxWdcdCy5sCKrVesb7Rie8ViSG66LKkYJ1rVfzJETjFszMUtPAAptQtoJuQRiMEUzBMkfnfz2CGb6niaqTFb",
  "key5": "2bLQkpJ8cuhYKVNAAouS5bUrXZDfgVBdRRJeXYmxx96yDyX5ag4PXELa9vmBiBCQAK8ZxyPmoU1fuE3J4eo4Dmb4",
  "key6": "2LjmkUgYqxjX5gNb1zSELK36WrUvaGBJjJcVsfC97dzmrz1X7DRhouPxAXEveuREBqfX4fgZDAvbpRU5kAzcc3Gu",
  "key7": "2jFMypKipraC4kAYaUTyCpZTMBXfu36AScfHt1vMZMvU3dXHet4ksf1m7MbNDFLxkYwM9P6Ld7J6R6fcFERip1aL",
  "key8": "2AUB9SzePJonrJAFo7yX1K2A44vLBcniVh1K7JTgMkdRjqJ2F7hyRfutGeh9QkSn6jLq1Lj2R1TohweSPXBHR5VC",
  "key9": "3NgWrf3P5MjqCgb7aqy1Xy9dNLpnsewBt4tzYxKUNhfn1BktNTn78gBqPh1XFEcVbbaVfG6Uww5BGkxWE1qH8YbG",
  "key10": "WQGP3pQrCKNyx269pYegeztbw7Bj2TbS7z5WNUHcTj8dV1qLqs3yp4xZ7gTnz6zFZ4LHvsKBb2fZ4uiQ1fTFTbP",
  "key11": "51ddCnaSa5gnezxKPyknbHcHcrLWcD5VJeYp24sEV6zkVrVRD821dPMvMR6SjjA7zHaLSuyeqDBLGWDf83tN3rVH",
  "key12": "49eD1PcXeRXHgXn6ZnN7JzabQsS9sAvRJyodteosc8esRUftadBtWmzy595hWwZkD73VmB36Vs3zkW3X23NCoHHP",
  "key13": "9vQhzAMWjc8RHDMdLy6KH4bvmNdrx4jYCoraj9WfJnLk46KHaNkLjPg8zorsekPJneYAn4iwMec1HU1udwZ1SBp",
  "key14": "3hTaUERo1KVTK2rWi11JME3fC9d3oVTzWBx1VHppF1N3RZyRwKeiULiVQPdUuoD98X8j9DiFkTfdK1hGbSQWh7eX",
  "key15": "5p8Ry6P5xiUTXymScyQcPKNgC74bqFiqHBKAWeHYFJeKY5vr7pZAj43KdmkzN9ExZUQoUAgrFNQ6sFE7gZrAq3JT",
  "key16": "5qsw5EGDzy4sU52f9VpZqT7vBcFymhDEPNqrTNiPS1xpwRYmEzd6zxe5NQDUQ2ebb9BzFbGVJLovHkSKYSyxtnbZ",
  "key17": "5cEWURk7pGyoJxLm24UK1rduKNdNGJc2QDeDpnAcwHVYcqJeCn7KxNc3xpeZHKSWEecSuAG9idtYPXr9qP2EEK6L",
  "key18": "4cNU7SxVsEZAjQWSNzfsfcZMDvoGW357CA1VGR1KxCnQ9uRURsE5DuscgH73E9VQSLoqDCHnmLz1muoDz9dzwLbS",
  "key19": "4AokUxjpRrXLvQePrMDK6GkbTGnQR5r6vDgzYCXeBkJM6UaZw1BaAgkRmNz5jWcGdHroE9cPGxSGZNMVDLCMEWFL",
  "key20": "5yp8MQCTzo8MRoaGGJfCQ8D8XQgjRC3nzt3onneXGYiXWWhBWiMVkx6YdngrV5bfT6snbjptDJ9tY5F7YXUmEX1A",
  "key21": "6714KhtU2z2B8uiiNnhAHfpzS4NFQYLGnGHhFRbhbeSFLzbo3GcZLxSTHYyRngWfdPerm2aDFhpHt4sC8cq9As5E",
  "key22": "3ZLvfGdQe2sYJQQcEUD4LgBHL4ZHfpGjk4nR5CQZ3tqq5CwJvmC5WHdDKLd4wGcdd5vZ66g2bowLQiwH157RJ9tb",
  "key23": "2xmGpRvEAMF5J7bZCESntRPh4nxBxJ8TxPShHbWtdP2peYwDmDSmnDdGMw2urnDWPtgQDyhobh7q8HzaK5sWtZYL",
  "key24": "3EuaiYXvou1eCQ3umjLbTHmQmhFJ5L5g1HC3ThrRppAwVoEa1o7kMhZwFD7gx9FbXiPQU8rry5Aq3HorBqvq5Jtu",
  "key25": "2dfqv3pWG7FWqav2cPkyidQ3bkW4Hqkvgp4WFwpioL9fy1EJWsYKUevQbCmtutswPjPab6mUwmoSjKRYoJLdf3fs",
  "key26": "5V1U73ZQmfM2CjBqn1h6nhdqABBNZzQ7nmZiqbNzEAstxMkjyEiZi8wn7tqKP748sUSxdMBUxqyCV5f563dtWeVx",
  "key27": "ASFW9wWA9A1wvyrJ9QAFQ2mG4B7bBD11QV7zwTxprAnmd1hvWwvRaWfDWq3w6XK9PVq2JncmY4rnpadaXz3fukY",
  "key28": "vfH3i5kfGuxANPAx4d1TLG3g3xx7A8hq4PR3b58qQoGz7cfLBGpiC7bTDSB74iYmdu2qnqkf7fMcwQFL2qfdL2x"
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
