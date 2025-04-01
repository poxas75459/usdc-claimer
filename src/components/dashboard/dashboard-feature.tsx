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
    "3De4Zvsm5BqRkdqubmxgGG2DS8q3smvs94FCRdw6471NbPbwzC4CScMSBTHRUhZpMEr98ri9tfmhgGT889219JLd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62N3rjRfmynrNtM5X2dWZPpQki9nUF1doPdoDAVxtp43A7ycz5mpNmJifANes9rKRkifq7rzUr7bc5GB74fgXXYs",
  "key1": "52YxPWtiKL1xN4tArYsKHLavJ1VD37hGQ79Z3QEUYGZeJWiNQKoUBdDFoyUuUkqaVDLA1anynWaH4SUtDAk1Vp9v",
  "key2": "5JXCPXZVadJFd8WfaWq864EZnLkz2r9GaXaprareqLSAYHYPCAGGteLH5JT6WWbhfdqGTVxs7PDy5nHmJta7xdQ6",
  "key3": "3Use9xfqAyWmingbzFPnTq8QWpBtPcNE8jpd4GL9HmhFaqTCz5V9tL2hG7jqQMYikGyGxWEo1h3RRvXC4B8jqUmx",
  "key4": "TAjKJMAu6CSmQnRxJTqbAfHymjL5ia3mpvWVxFtTuujccawxaCwsqtLMJW8jbQdAqKBRq5qdsx7cuUk5nP2z28h",
  "key5": "3TuopMd637ruUvnX8cZfukdjecknVWpFE37nutbiVrUUNDzPtesPg6QutBnpDfqvPZGudn5nbwjao2bd8c6drv93",
  "key6": "RzriV1e2QRSfRmRHeNTfN955dcaQDoVgbdvgex36YBeNHXRsZkZL3kePHt2dPC6bftR41CJLJgYYjEA4mtwk8SB",
  "key7": "4BUUC8zSDSw9JuudqYfMqA8dWt6xtsb3UDUPUdR8zv2HCk8XnWqLSgGSP5AcjWhV8wmq4wNDXsNrsV8xBbZx522v",
  "key8": "28qUmbF7r3NsNUhiosSThNgPbSWtgzui1BtBk1gMsqcGLW8Q92eHriL8UVBUX6izPkZRHVBRAf1z2jfr1taXy4cf",
  "key9": "5o1JeCJjeUkwxx1L7pRA4nyTndFQcsZe2EeiTjEgZzXrsfHFQs7YbmK2u6r9HdkRccBGbhvzJL4uCxmMmEe5wNx6",
  "key10": "356LFvLwrFL5n5VpHwYNjYfrYx9waoBvzpAFjxz1PRzcBV2wmeyn2Y4Xa7w3uof7VEiiSYGy1yMhycrpBPZZPNm8",
  "key11": "ggrQkkVJi9um4AXJzCv1aJEiYHnKgnsvGWAELSrJes6keHAnjTn2gGBxC79oFahcNvayYvfTdCG4e44y2awwXyT",
  "key12": "3XCK4f8iNzkcapmWQFRCzvgNDxu9FjnyuEM8uSiZHfVFfkCDWpLGoogaw4K5hchAXWChLZsW1cMRZDKjhYbCLHVX",
  "key13": "5J8hTgan8T3uoM11z1ELHXPgs7TwF1YS2rpjXBLUh8SepLkCGEDqJcijMdmWDc6fMBz9baopb4sbxcwqM3nF34PS",
  "key14": "4d56gFCzahpgCRpC55fqHhx4LDoe4touz6ykHN4eeusz19EiSH2BaHf9NxFtz5TwLLGE8GFDzvjk2GoVLjf6Gdf6",
  "key15": "amyetkgCZjPRrVzUYQVFTQHXrK8FuqHxQe4wWcuV17oDaC5Sv1MCkrLBPFr4NgjHchyvfE3RCpfP8F11kaiUcN6",
  "key16": "3TTyDBfxJyEXcjj52yPDptroNNQJXQUMg9AWC3ymAewbXinh2HmDvCz1rx8sTCkYTCTraff7F9C7pLqH74BZkAwF",
  "key17": "4zkEDuYzDPCDs5EmWtCAKWfCuNvQomtH9ZkBPkGPzbpwDkiC88qCcaY2Qk9hWvqp5sGgBq6JXQtycPRcMCzTDTVi",
  "key18": "56Xx17sC1J5bthgAe1W76RCDjmXwjsEBksYJzvK8GDZFz35FuRThrGaL1ZNhPZoMseQG9DD4UELiZGMQi6EsfvUX",
  "key19": "3aQ1Hb3RDdhgYWo5zLeLLRTj4QAB7TAFm5g9UXpov4k1VVMVEuiApi7qYzAMjSVgiokPLnNHR8tJkSWsgdYVsSe8",
  "key20": "2kLqBsymPTmSM3xhwtMf1XoqFPHgYv6nsL6hf2SSVVwoXrKm9T3S2urN6qg2g9ktZkVvERRgqhSJe1njf2g9Uv3g",
  "key21": "5guN6TAdnFYrHpTT5Ypy8FeUp65z8v9d7bMDSyMBt4o1xWr3nHVgcZvaiDsdPuPYjmcyKUrxtJarBH8ABCnUFuAp",
  "key22": "36dQG3KpEaNFjsP1nsfA6GMddeDyNDeXqqXxDsuYQnvzhJqoCgH32MNwC35KYrzyF9qgektWWhrZqeub5UzSHd1q",
  "key23": "3Ctc4abvE6fdzXUNB27YqvkPLHnsbkH3PBzmFC9o3augv937MHmo87XWN2ZYHCY4UX1NqeHpRXADmtXtkZ9W2v6U",
  "key24": "2hgdayQP4pQSK5guADwT3Dc9yJUSjw28pquNCv9CT34xVDLeXne5KZhDN2gPDjLVDzeafAQSQRG3cN6w5ctYCX9b",
  "key25": "3grK1dz6iPNu3sLa8r85q9gfj9og2Rdz6rqtJMmKi4KU183zpvqaZnpcp9Fd945aNrunoSKN3xQMDdPjiHasJ3pq",
  "key26": "ArdHk3q1GY4iZdBQ1cebrzYKwC4NjcVHWwq7TdKuSsYeonT4QQL2TtAgZdroFvw7JP4NEriQ7VoVewfcSzf8aQP",
  "key27": "3edQXhuuqaLTysb57Pju5NHurCFkHtD7D31s3JzJ623JVmCNRxaG5SnatW16fvUrkXUyrm2HSCRq7rSAjeJVevYB",
  "key28": "2mLXR9yV15r13YeTemqwkzxM1ZuGS9XTBDgxxRfA9s54RZrcFC1UwrpvVPdyt3WujdNnYN1dyLM6sPeE651Qwd1v",
  "key29": "3khcdpk6SSJke1pdKuc6L2t5GeNsEE77pr47GjQMDBf8R3r6j8M7UMgNjbktdmbghMVgWtKwuT7ww56FYZE8zTNz",
  "key30": "4CK2rXDYTbNNZ87gJbRkMmjXRG6c6cs2v3ALDmNp1cAVo5bJCHq3NhcyWxeH1GUmkKoBL7ZkZT1aQrrMYdhZpoHQ",
  "key31": "48pPCaSzfBnBBoWMWJBi6Qs4AjGRr9qei4MqDDQeZFp6HhbbiAbzsXESxycuwWjP1UckEV85kYXgQNvrWGS5en9d",
  "key32": "4h6kYv9RnYZqtz1jpoS2bSoeSEuencQoTWYfkqyn9kK9ZYL7b3jrT8DtB8bJth9BivL7uR3pqNGG7tU8PcaFrKj2",
  "key33": "2twnkwgoEE8wtCDHtJsMCRMtQSXkL5fd4a3xNFK8RVnCd4jLs92bftSfBe8ziNYZ8GEKvUYQxWt3kjNeYhT4wcWg",
  "key34": "32aJHS7KzYMD1tzwEzbXpPF7CUDNNRBxKnMZo6ouBjrQaGGN3FiXnP57zDKVbGD9ovX9rep2Mtnn5AabvRHPUZpL",
  "key35": "58NW1VqcETznvAQwHQciZAPWu9BmFDpPCv1jcQ94ntKhYLz8gbBWMXxP8qEGjqktFbE5qBxHtVfCedet1Jw8tiAy"
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
