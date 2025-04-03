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
    "4FWQLUkSoZAwbcGUhQfZoxrTj8Q7UX1y1RPBpa6m5pZUza7rwjaYrjhfxyjX8yUguusmBg5rbpPzUfSQW5LZ2NvA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65WBhdzZvW16P1YHtP6HAfpx51o6vcdbSMpihrU1dAK8iXYnDcha59cedUgRPPDtNroq1RgXdKUhV1jqwiYS6W6k",
  "key1": "P4K2v5izrwZQTTLHjVVJja8LinJaxYJGYmE8CoXLhoPiTiyDENGhWu9aABvLvVBA6PAd7xYnufeq4fnNqwuZbs9",
  "key2": "4i1MzmVLBgkDQjYtGoQeNoNDbA7S9mrM31mfmnf2KmteWEexaqf9VLC3NAijmCVmMvskVwN6fyRC8GZtZxzWkfuK",
  "key3": "5KVoGLZMRHX9gDsVeTnsk1m3bVyhn1XaDGtcD4J62CNcHV6WRR9ADBCJzTiw4jzXPbcegfVPudKEc5or1payABVa",
  "key4": "4joBbfpjdFRFvm3YVrLNevXJ5Ucheyrc9UG46yBptm5uofrUf5UA9nVaprXkiukd2MKNQ5ycdWqiVmbuSdWhS6xv",
  "key5": "38RFEP4YwqdroydcwCDdyKtvE4ZT41NXVtudCFJfFwTXt18AMWdSgfGFLzJzUz4YbFu5MmewbH7pHaHrYirU7vgc",
  "key6": "5KXQAob4dBvSihQdJoAh9VwdxzM7GAigR2srYZWEcD11WhvvkRcomQxviqC7j28L3E45s4H5wCqzJSoeRrLrks3o",
  "key7": "5aQAsnqiy435q4aGUgRPv2b3WCLMKm8XYqTNVNuTW3q6LU7Z7Eez2o54s8PaHhz2sSpuYJFx9WfdkJYeEjN67ZXn",
  "key8": "toF7L3ZQqxv1pmXbJ1Ame7ArwzH6D6ZLHkyzMGKzUaJ4PXxkSbEVLkgLp6MbfXK4jxWJmjDxPFaYUF3y21dUqZb",
  "key9": "2nytsEEinDxAFrgzrJBZKNr8aPoJ71BRkUhdxtGVXHaA9ebhtJtQaGTZHdFTe55ZRjvmAY1j2Z848KGtTNDHwEZb",
  "key10": "AR5eHF8PjMAE6hASxsfDuuDqvP6vDPHVJzKvabagDq2NXNV1U57MuAfcfXsaHAfRP6ibRnmjs3FpzMR8PiwhRs9",
  "key11": "35wn6fcP9Qi79uwFooGowRaGrC74JiPLqMYHyQKXQyp4hn6ccAC7n5zGujNUTv2gj8mejezzmbmGZ88dtoGeNuof",
  "key12": "4wsPJdHfkGj3q3r99NuPS5LhhBWs5KREHMsGnadQcmNRBG3qYLhofM6csVLhdYmn3rQtK34qiL4ygWUDStSBujnt",
  "key13": "5EPv8RizS7J3UnYovPNtWzU5ComJNnBaZvrLRAfgUW3uTTRvX59Ag5LJ2xauja26oyV54hp3mLJWB2qcKFJnJ79k",
  "key14": "53CvXp9fLWD4DA9DLstxtTdyaGLZdok9q4kp4NU5x4BZsdhGa25ywEfhYQ7EQmnfpfCd1TJEBFWX4uFUvXZoqx2C",
  "key15": "2QZPhCEmsNWdtz3hdUxBUPS3rwyZaD4Doh94Hycht5DEzkcUdysKvNcU24YxvXrfdGiBoSk6rRkx7BuyDWe6tF5E",
  "key16": "5XX5inzRDrDsNs9QgrpmSTTbzTbPU98vmZG4fwZ3Mqt3vVT3iEC2A6g7pkdY4vqNfFQtJsEbaByNJF4RurUtcJLf",
  "key17": "WSou6JgPrCtiMMPwv1viZPUztqjpzRZQwQAgtBTS3yZZCevqB5wLV4dbCAseGNP4CEBsutmrMKZynpjK6BpoaB3",
  "key18": "APaAHU3B91EpLLNAG8ei2d9B5iFhx62gg8b7qLqgS6L44AxgpBq44oNi1ffGokQpQ6d1PFLiiHySqaMbVX9wt6E",
  "key19": "4EU73g9V3qsW6nYBxwW85f9ZmSiA8wA74uWEmgov2gBfj4gydVmHXF18SgojU2BtSegWLR4Qa3Z14DVW17rX3wi3",
  "key20": "46KgHG8tCFACb7xBZTtVPqH3qbyJBUi9ZLCG7KpPC7azHcVLdahAvi1MrqNkoSry1kDT2z6vfUKaqNm8vXHT7Ywg",
  "key21": "3hvpKSmkTboAaA5SsY5gLucESjPbESK69RgifyDmo2FmnMU6jKU7z7pTM3JVZfiuw8n5SAx6cms2z2wZ35MPCL8i",
  "key22": "2YVLgQx9G97GLJeiWt3vUtydUfdHC6xvQHYgTrrMNZ6KvuDma3F88Kmz8NCTLY1VBjnpKmGBcX344yejNrwVnh8G",
  "key23": "2du7NUizZzg1NpVEADuWV2HiAP96L9q2nZUWKGt6MQ1TtFRBCTWDbdgkTGWzmYYSdp4oGaRx2VoNHNo1EBs8uz5z",
  "key24": "2oSuLMxQgbdzuUteRd9VcSZ9w5zYbp1S6yLNgCY9KwvjvRS9iz37ERocKM7M8asS5XivBMVecAHvcuPDJd4poRoE",
  "key25": "4qBWLHS5ninH1pqQoTPPsk9Jqb8XqvzEoANNATVLBwdypduRhhAxiHTA5RjYrgQ4zCX7sgF6vNRxGrH619dsQeso",
  "key26": "37FEtTeSKdpMrygcxYSnMBndtVk55cyVGvCzGJX5F7EcWkvVF5N3DfAQuFj49J9zsu2KfJx5ugqzW7mxfgP7emmu",
  "key27": "328GLhDnmYrivmXkpSpEhXiPxNTDS6HuFdHckxLf98vwSBdwooKFSBGjGJvHcKfDrdYbp5kHpn9nZ8Ren5n7Jo1g",
  "key28": "4YwZSV2QLsaR62BiRKNGEktu8WCAMdr5jSA1cLgM5h5kFTxArJcBzJPHESpiuxuBZdhCkkmEBsfA9CsVPtuu7kZe",
  "key29": "2T5WuyZq1syjqnNhenRsF8CdmMoQmRnfTvhnJbKM83iQ4Z8hdjvSqpEgCTn3SV9EJDWBd2zdAwwebnqiDNeD8TdT",
  "key30": "4U6zFPAM9ovyM6oFT6PUkLLNmNgg1a73caCPcJqLBhEi9jbp2XCFboNbgFe9hFKCw4weKrYmcR71SbcoS82cwxwF",
  "key31": "5erkv82M5fNmHNvWanwAeF8KoAgJoPSFUZ4r7E8N7dRFgNTNSAc5ZQBQJVKvXtTPfLMpMFgKwmxUff487Nyrm6h2",
  "key32": "4WAaios6NVAg4rZtW3yARcKyWWodyEPMs1BZE3rGqe4Z6wFGzXn2dqVZGaD7A43aGiwaQwRbzQJFyhXALKXFnnkr",
  "key33": "aiV8CmEFJ86WvFPLvkA3rQHeBGQjWHbMvk2d8MbMmhVqdwYTWr2gXiWQGfDC8ddTeDktQBVgLpKgoUyju5h5t6q",
  "key34": "4LpsJBwRwX6zPrGB7j4SHQRZ4rpW1BNyiRJRadTAqyQBeNgkTJn17eybnDueJW5YmGKDEhDRZfVWst18hF7xyYDW",
  "key35": "2MDVBYo3DXChiPzMUaArajWb3rk7fKwu7FXhnikx3qL4SUJqdSQu4RnQFWuRxGpedHNSDMAG44qM3nxQrCGGzpMj",
  "key36": "2YmwvBmswxRVAVtt3YXSBQcRi18bwyDwobebtzmRj4twaTV7HZjBdJjQ9jdtuMWaSsAVMstxqKXgk6HahhdgoZFV",
  "key37": "FWcEcpvL1JGkTHy1dQXyxYD8DdRLPBSgD9HgqaXkJSmJ2C7vzHUFjHFnkV3nPrZBDxvP37goYiVQtCBGnrK6Az4",
  "key38": "5hMNyDCDYimhQJP8xXcup4tv34XVpsTVaZjbijeRAVvvtv6bVMrsYFjmrZP4YkhqusHPyKWuJyZn6rSCd4BW9QTd",
  "key39": "3QkH3VniTt5dbaxoAhFXRzuTDJzwxXJFNfb8T25RXtPHTwEk6Ldtk88A4J8oQqoYbJC9QnujCsCdS8fNjGyWEu9g",
  "key40": "5UBCskMZzSZJtcS5y13L675zLRuCvcEZUJSwPWzxxUy9cEuCNZZM5aNezxEhTWjoNa46HKkzMMjzogYQSKFb9Vto",
  "key41": "58MXbDYj7MhwdNRC1xNQnZ2Tn1tMiFRoaryDrL3aEMU2pkdJeASK5x3hNE4ZcgjGuq1jes1bAPd4SVQzUt2cX6b8"
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
