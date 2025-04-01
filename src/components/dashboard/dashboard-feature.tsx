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
    "4VRhvQSyHLTRhBQz9J8vsH7XvVKTsJDLj98ZpnYvCVm72AfH4atrXnAFhgfKjwjERmBNCJzaMsXWa4qaeoGyfoHE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3o4f49r1Hm39tGo86YDvEmCm9XUA4EJnuDTMemLwTFz9iaEZmLqmEXhiCp1MsYSEWRZ8icXGkK4sRio8dneEMrMe",
  "key1": "2ywjwoxkVsracJBZUv27enFRyDvkb1igW5eeuwMWuMP1zxutPseR14v56yduvrpyMKvfdr9TiXowVgxHsWkKbN7P",
  "key2": "4q9cf8EbADLw5Bw9SB8N9TqXmEvS3aFBvfXoSa6VaEQvG2YGwPJt3nRYsBSvX3DJAmQzpbg2VcBaZ9ieTEAgCtrs",
  "key3": "SEye4yWLFEf4bSqjmAEh6MfTWyyAHEBRL8d9iSTCBRZLg3nUTWrsfjjJKadhs47iYEAMjys2rpQePF4eqrRLu6S",
  "key4": "62EGmn4M7ZPZucvk9v5xGtxiaFUTYfXJ3cqWTZmBQ7AFpuAg6UHYRCdX46jLyevSaPxTN4RokeFAWMFpdxyARnyj",
  "key5": "zErVmHuq2YY2MJxJjtDET6fE4LMKAN3J55gzX4XsHUFA1ttreAQHd9FdcWeweNtrJmR6vRfZWAGM83seFtqNaWk",
  "key6": "2AmkFv6q4knqToCPajhZvwghbHg27Vsk5cArhrr9pJgywmqqGfvsb1jVqtVzXu43vDJYDfucpWqeeBe1jVDwRZmJ",
  "key7": "3fKJLvPB3AcnMpGdMiVcUVCbLpumvAAmULWJWFt3i36F4pgFsQjJhrUFq5zYcokVrUJL3brdn3pzL4kmBttQTxiK",
  "key8": "4asmVMxv5eSgmaXhdhJ3NihpdMaTHT2f7KZqkf7SUw66nhev1SEodwHRC3tMxanWuqc8ZH82muVopSxmkDm3zMxt",
  "key9": "5d8UhZB6De3Y3QszqN4qnbYQDfg5mKuXFtnBPvwgywPLexJdcBT6AaLS9EDXTPwLQFYCLGV1kdGFKCReX68Bpwga",
  "key10": "5p9t4KxG86pktQtDgiM38bFPVwD5hp9HqztUwgWrYP7cDjqbheDdL9y1UYK3wQaKccxqo7PGWh1Xb7CuYhwvd8Lw",
  "key11": "3YkYK5pdcee1cfecDLn8hpUuTsvimgMKcVYPZv6cfYSmAo8nsERAtU6LaxMHUp6NvzYdq9KTpxjnrCxB5NRzREFD",
  "key12": "4ourMH6fxeNJT1gViFmRkU7GYyK9RtA6iruSr98tV3oyFsHUGsjCdPCGLvDMqrJzT8YqHcCPATuTGd7xoKXFSYxc",
  "key13": "5xTe14yiCtgWE7uj94tfXg2Uvirn13XQz3YFV872TFVws8NTNqGBjzcSkH5t7RQMvEtx25QNregSEQpZGgt8JA5u",
  "key14": "2dVyzTbnLpuM9hHuBWMYXqvzWYgrePUcmZy1xLrHb6jqN6UfLFA7kJmf6xtWGCBHKNwjGkFmyzfALzMCZMw31LQT",
  "key15": "2ZLm3zk7U6LjvvKYKyzqKbwaDpaWarx7eMvsRFcxwN5bAHPTZUsGS1qXi2qCswNSRAtYUFHbtiG7gp4V2kAGwz96",
  "key16": "4xbzqDnnEjuWyGpgMziRZCgaPjD7CEgPtmdBkZ1n4fYjvzsdBTPG5DdprgiuTDLWsNSU2wVm4fhGXvbYcwaAMd6M",
  "key17": "2NTuqCA3mbfA7mPAbHmfUwErNREmFuB56md4VSqFqQTjX465EjtfmQ24bnreVFTx4ADQd61WyUDr5VgbH5dinSMJ",
  "key18": "3Ayi5fiJW4iJqZgDM2Y9765BPqGhL6y5oFrhStMuGqRrRib8j5qfquFA4NKWduK5hU4uQSNQ4Pi17Z1D3A7zU3pu",
  "key19": "4T945ETMHYP9JJHo5KsKwSFFUzP7ocRfrkb1hZp2HHykPH2YLyJFWnGSbRiGh1bVgcHDmQau8kaTqAhQjcYaHhhP",
  "key20": "3wpvJEaM4bV52M3xaWGeKnMkk9c8CffTUWjE2hDcPQ48rdXKt5acYwRmx861jCRTY6tVxDURLqvHbYDQZX4yrTp9",
  "key21": "5cgkkriZfscujxChLGwBCUqnmkDWCs6nfHqoqLBpMK3ABV9KXNPoiD3qp1P8fiGqLPc1S9HaBoSRRWBPq5ahMVmy",
  "key22": "332D34pUamNaJmfWHywrk5PqhpU8WZc3iZa3vy2jBtfb3vkgDMJN9ZWdu1kPkiEhedB9EpMp5tHCZLm5fKXTCi2p",
  "key23": "2en1iAkKdPyXrQFqALtoxiCVNvPzEn93XmjTMBG7x9Xm7i8LzgV6KhQuA3V7W5v9n7dT2yRJes42RMXxgTBMs5fQ",
  "key24": "43F8QvFKV6RoHhRq3eGxALgzic37BgYAB3QtxkNucnBBAB9FFetbB5H4XJtP65zwnAkEBnc5TZ5FDSRzbdevQG3L",
  "key25": "byXXT4BjCbHrWkby7odzpsth2bXnvG1xfCSp7PpgQxUjTspqDou4bkMMPMGa1iV1fEE3jAknNFguxmC1cxLoETH",
  "key26": "1bv5RDWWKQVowjpwgeuhk1sq4AEsoc2GbfsfzGm1oj9vqmRnZzSz56o1pZYH7mPpkyTjd1hBkuZ7cpGDen4N2n3",
  "key27": "2SbKP3ghSDHMYAFXSodnYAtDEiwJzqoQDHZC33ohK4c2HAFn5NXHn8cVY2c2Nu1wKiaS75CrUn9VqSex4xYn7Xtm",
  "key28": "5CemhqecWWvdzkxR5f4WzdXG2qhBU1C4DRi7pgkVM7R9eWzeG759QRvaPbRN8TpeyesAj4DT3PhnCtoK2AwkmS5Z",
  "key29": "wb8wYWsqVGeiNxcE61yAoDzeFxjeD89qu6zjuTpxH1byPWKZ3LabDPcsqc9sAY6wycPHmQy9YaNh99bkgZzNC2b",
  "key30": "5VDyedFN9CQNpi85TATiEZBeeFEDyCoJatQGqQfQ3aJwF27VPWdE6kTybcrfMwwWWnBR6McZRmGaBhbnYEYQs6kG",
  "key31": "66m2MJstWTQNNc53XLSYVVQEPBYdwHXBSVh5sXBcDspZZUv1gAmhaqQpGMfd2tfs8UKqH8hYdiWvWmdizbYTXdbA",
  "key32": "3yV3ottWpRoKbArYZgbN69DvgQyCg2uPb73GsZJWYp3Y8FKWL8NfhbGK7w1bi6Qvwfz2V2F8TbFMysKGuRJsifxC",
  "key33": "2j69pvHbmRFBANuMNcw4wHUyuTqpA9khTGPr5xwqUdasCp6LrLDB6omCmJGxiqfbUmVHTjee7G3oVziwdkgaKWp"
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
