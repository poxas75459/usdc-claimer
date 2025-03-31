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
    "4ns1W6rJwsM3mtPRVuhCwbTzqHvANJnpadumUXfu7m8Bs2sndZHwYEcfTyVenjeTdpg2gbHeau3iowxkQMck6Rxc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EQq9SXrHUCPjnk4qsC6d1dM7BZ1YLAuNtkjDP5p5TyfdBvsC2zerjZ6fvoBHSP4CQDZ79AjUXu7jBya8Nc4iyb1",
  "key1": "2xMFDyzCB1EdfQuSA7mCh46YYaD85HDwxF9b1yS67DA29rcnwEtR4YfK3fugqvHdGKv89CgfDohzmvReGpD1y219",
  "key2": "3BvvyXLgZXKEFqYcpmtNoyXNKPhVh3LrUW6Pvnf6GqdP8KXumPFWcyuFSKdPt84ZERo5ovDkHzAdApH5b1JxTwLG",
  "key3": "NEj1DXcLUUz9TUrc6YyXWePtt8r5vzodv2rsv2V11PBd2AjpqhZospJoT17TYn6xiEZHCzgYkaxxTkeVzENh2RK",
  "key4": "8XLnt6yg6RcHXMkiiNwEbchxgov5gCW5q55ZLZz8vDKdXXZTVSoRvf6bASd5eaQotLk6s2swS7BmFWDXzkm7ad9",
  "key5": "4BacTS9566v2dhiAjArpyK3m4vSwvQu9E7A14a9Xi4uTXr38WkPwCr6HddQsbMof2arzQs4AxrSkArMB14pHQUN6",
  "key6": "9kriYyMn8kMNEU3tFrBLHM1q5m1mYuK95uL8oetdZDGGj1DRiTSoG7ZHzGxGETohTASfoxzWiNtNmEXGBMxtd1K",
  "key7": "5meu2W7A37KRbUv2RH3DgbK5o99bsDD4eXGeVpW1mxcchQ8EwqK1EiKEkSFqozRh3hPiDTDmeJiUGERFQuK4zKbY",
  "key8": "3He8Bps9CwrN9GaAQ4mcFPrVSSy7MWE8pVeuuTEGR2jUSjpZBzzkRiDUJnu1wxrWYRqhdcwFF4ik4ruSuHGzzRtR",
  "key9": "RLzGhVQWcEz9zCjdwSnq1hXEdp4sVbkc9t3mVjL3PtTqu6YnXaXvnzADqKRsf39ciaLz6TxBratsDp6u5bhzS4q",
  "key10": "2thDH5BxNsPs2W8MCb9HayTXjmYjjrX1Vg3aS6JFUqYphhcmN9A88yb6LZ2Rbd9kS6emW1ZUQnrnMtE5vDxWt5PC",
  "key11": "e7Jt8DEhQGmwh6qLwDZtcsFBrrBunQwzt7QuzWgR19niqtPe3Teyw8QGQjvZ2aTTHMGSB5WbYLK4uBx5jpPft3U",
  "key12": "2sZdNZWHYRQpMiox7KZnffa6XqicoxpGynJ2zxcZgAAcheXW6uq1UwmuJSzBcSy5Cn2xn3fadHrtQm77Kn6x5Cvo",
  "key13": "3bTTGTbp25okDypLXJZw12ByrosYo56Ekt8Y3yhDKfACzn8e6ipcc1Ba5V9TbEMn2HnMm8QWWWFJd2UU4MBQ8qAp",
  "key14": "3pdFmkcUNX3E8yZbjy7sSuGntWNocfonu93qLTZUw9nCPBBJB3qAeqPpn8Hu2GqQdJUD5V4YwZvNwVYecA2z2AsS",
  "key15": "5Ya3XtMBULN6HeB5RgF74ZGAzWiBLMtcm739Vrti4oAMYxkziGbfNMa2ohYhVhYq5wS3EJ7R5GLAz28WSGrqL8zu",
  "key16": "32XDwafx7bXJTtk4waBHzm6Gv4bLH33kdt2YooYc71uLXxXJxk1Um2f9bECFoALP4Y3Cqy5EEx8GMiGbhdB6LfZM",
  "key17": "upDzKsYaykuFpAzwVBRRcG4RkvJhJ4ewRYc4Z72tVApHdFT9cZqkZmfiwXsr8DwBcx55bmFyrQDKjsCUnxc5EAo",
  "key18": "2EHbRBSoZPqXb6pXWMbH6BN92rcdtReT3jbcmK5oqSS7cER4pqzkaLqgEr7zJLMtgSv8Z6hp1i77Wxsntm6hTMQ6",
  "key19": "GoxBzLUgPyNL1RGh3crpc8XTvmXFj2vTdSsBmfk7wJahN6qBduFBeG2ZNtKKQzT7hgo1Wc8iyy2w3pNwpbkAcTJ",
  "key20": "2keNEVsA6yZ28ZcRFZwSJ8vpGTZeSocGWWWq3a9BH23dtuLRyuxDUoijdrxeuU7Wy8CRXVi175QHWdY1hBQhmAq",
  "key21": "5Tn31XD5bxch3nfMJibfQK8nE4WHXTsEJ72ufssUKWLtmgcJxGe8iHZD9jRjhvdRSNcNzyVQSiNdZRuQAGT46FBB",
  "key22": "4W89sqCchfvbCipRrAJj8uJqgLTyokrrm5DbNE9vZNcdYe1Nm5Mtoh9hbUS8qR6628FLuEpuFoxEGvYx5chm4bfu",
  "key23": "5RvtetMTRDK9JG9aEL4mHAECo7ggCzWQNryCMoUcH4oCjHAbPseSWqojrjQuhBEqjXTNN5tqNrfMBbcGj16KpqmW",
  "key24": "5KA69xuD23vRGKan5Yd6CfZHgVVo7oGCk2RDp8nNB6YF2cHKQAxhPUNCYYjxNGPSLS9T3PrjRGqFMvgHJP5bkZd3",
  "key25": "2Aqx8yJW6iZuguqLFfu8ccAmogbVwHzv6gzbPr8PEf2HmGQzPQkgtG8CYs9A1MQpfCbNNRUoeCfCFg2WpGTVcFCE",
  "key26": "XW2wpAVcevBQeX6ydLHNDeX1kxAY6u4TJzSG9PALwahwuMjEcgvb3zJpFqSccbbw5g65WQfBmKotJkNgNcU2ooE",
  "key27": "2gufqKSCUietfuZttV2iKGKDCibhJCp7D72mb6kdsW55Tq1SAA3Yt5gDgSfquk78q5GtnS6KiCEg4CG1Afmuckmb",
  "key28": "47xSf3qbmPdUFt71wjJmSYUyqGiuNKpZzDxvTmnRQfKRLcnrqMVP4SEaFS8KMpobcYW8hG8aFUX5f744ummyGGyD",
  "key29": "MGSx7TaLRbVECLANQzZDnRrt2Rn9VTZ3ij5s7yAJFjC7756ywSbrNtj4pbNqkUWPC7sZfFmbh79PWAx9ucfXZ4Q",
  "key30": "RaSC3oyPoH98jekZyWokUhDdsk4euQTEfgQY4ZG6fbRdtdWXGxxDvEaseAGzSThsTAhiLUeWqSiMVHmtcDFmPFQ",
  "key31": "5jxSpfKd7vS5fKJLRD9R5X75TT1qbtQ8yx4GrZqQaWSQxoaq76NaCAHCMWfCWRYku5AnHNmKAoRtNm4TghEtWU8",
  "key32": "vpzdTmtETDCU2iefMibUK2FxMmxi6EwgVmQu1cVkdMrqfL1uByX8cB57oYpj7YK8AMD6RpvpdeRgPs1v8v6GEfX",
  "key33": "YDAqwiQ9emhB8suQjsUpUh63MCeGpsRRyVdjsQyXC8LDyragTMp7JzWFecT7ricHJDXrFQ9nmocxJ3U7T22YNv6",
  "key34": "438Pcawz2BEUcq4wjHDkfvJ61MfJHGuqj7skGH9ctNKAa2JCZZEcUzrTCF1VFQomwDSU7fJzqFjvAfo3xoH4kT9k",
  "key35": "4L8mJv1v5RHdsLmf4VqAAqRYjbKpWuEHM2J54AHvyraAmRBqdj4ntfX9J8So4T4WxUT9TmhJfxc8ZBdPikWn3cDn"
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
