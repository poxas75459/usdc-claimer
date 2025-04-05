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
    "4GfAS2hDjRJReoQwQry8P16fKMHtFXZ1N6hFDnH2za9N4E5g1zPmnEvf8sqpzP8Z7GSYi5QVamt7JpZUPMktDgjU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TF77Jyjs85uznxof3CWa24WuK27iXpNvcsLGGvc5deNgEPAV9y8Cs8XpC1nGZPdX4tv8ue7eykPWQgqKEkTJDHs",
  "key1": "hW5SP6Rncexiy75iGRxwGMb2d3CM1CNpZ5bHHFahJJTnFX91HKT2uaTko1HCRpdHfXXcTAum9eLb4dew978vJTs",
  "key2": "2TxMprATdy6i38RusrbHziyvFKJtnPDiH8sbY2SwwVhQw5tyBBFR1Kpyt1YMR64EfzWDSsQaPWCnJoEo1TQ8v7gs",
  "key3": "3iv9MMjkvmxwMUbBxiPHeLrbEraXhW37uH6Z5LwTaTHn4Qcam1qSA3o1bWQWSnhcwtoQC2pmPqY682EN5erJGPac",
  "key4": "5noxtQC2hFnBSSiHFKBNLQKnTUV6HTDg5MbyEfbjJLnrPohRrnG5pke3s9RYvDVPrwJ2inFR2x6zSZtkhcxYQvtp",
  "key5": "jqFzWYYtgem5AB7pgcdB2iWSw6H8Ygo8HJ6rJYS7NDZB3UD9cRQYMsWtakb9ZavErRoySop2RAj2V6FWFE26dLi",
  "key6": "YHYEZ7Y3s9q97pq9csL7PzmpSQXg265CqnfASKuyJjk4gXpVEFq7j3XyCsmjxVRYnn96BSjL4MUJZHCbTsiTtp2",
  "key7": "7aGqxLEqeC9fdPHrmD4u6jNp9mYJzxoEawBDP6P7jKJBV8kK7QPKK8DzAy1RqY8BdHdGd7jrjCPv3beGmDYRFPn",
  "key8": "5b8YQiVzqihU4LHmXfRbpVCCbiyuAXTox6r9wrkd1wnsLPgfLxvBLCmZQPVXd9AJKRKcyuFErLSJEBgXwL5ixHjq",
  "key9": "3Eb7NrAPNx4miu7hTdLMk1UWJSn9oMikZeRsvXvqWTuxgQGsdnduwDsGn8cVuQr7XekEzbHGG6qEa264LQerDU3v",
  "key10": "HAduVfoEYcC4yfRckm63Ax8JW2GSECP4fnLJBWJb145gzkN4vekq8n5MkF5yFr5CN4BCm1jCJAF6AwM5b4zCe94",
  "key11": "613A9QNHG6vzLLg8hdjm1eFgZ5XhZAUcCAgTFUSXjP2BwmURRQdrqREUADJjHjFffdo7B2ry6RUSVwMn4W8L4Z7o",
  "key12": "2Edbdgvz12r2hVSDAnbz46kzHXX3Jp3KiA1zNDb5UwDMsvGbwrW9DNXSN6stMJAj3f8hh36YW9XG78rDDoH2B6c5",
  "key13": "DPG2vknXQXYiMMEddZJ6Q19Qq2FvYo4V634auTcCfpoLA5Z1mi7r1K1sa9TVZ38oxusdt6HiASfAGAmVbmv81i6",
  "key14": "kwudXYa4abHP1zZwZvKapAF1LKMvK4szKJ5W6BNLr6xsE2ABubJdMQFC32Ejxsmwdy3TfPk6jWCNksaJhBRezuQ",
  "key15": "56wR5xppgwhkMrH1puiqhjMoibTfyYhsaEeLavnasAyToGeBTygsCSH1zn117m6umtSVo7BxuFzyyc5VEV2B86B1",
  "key16": "2MHnviRaJxwEqiPYqrkt4rpqHYecYxZLoiWnyJPML9H9o3GfNtkVgY67V59uz2E3ds1ky3AE3c2qtzFxXCRaFK8K",
  "key17": "3JtjQ68nwxLkcYqJqSDREFi8idH5rac9CeHxLeX2ZkU1LxniQwUHVF4LiC3zPU3JvQ5sFcginbEuxg7eTrKY9KZH",
  "key18": "yDtGAyEq2MV3ahXsEksqMhFRHeAH79qBY7gmZK9N67WRqbGRQxuFucdLYhLMvQHJdbwY5GpjH3mbgy9umV8uQiV",
  "key19": "2ikPGpaiGBbD9uuEiTwCNoov112tHRk88L1UV5ccCm8xE28ysJhs9mo1iMHyNsrKPLLCCz31wrzVHUfQLXBk5xoA",
  "key20": "2uxNGphkKMhzEPcvDqNmPwN2JxPiWGfUQ8CWpJ2FR2Zybvd1oeqQMSnyYwYXfWPQxftSNonjeK5PJWD2jEKaANFS",
  "key21": "5NySyxUnUBoBommEMtoRaXotkRdEb6H54Bk6h1Qk127zwqcUhcvEH4pJHpSWRhQhVnaP8WXCq6ccJUKVBiUm9Fpv",
  "key22": "3RbrN5Rh57eJYenJeqg3aKbzyyHuZmPUexgCdejTQKAA18VHpwjAGCWGXpudUHeyCJXjZ2CZJrVKohNN8WFjwDMS",
  "key23": "2em9mbiAfzHgtoKqDgduEDg7Z8VANiCfPF668hFEE71UuNeWb2GiL2SX1TLWTdrJmgneUjJAuHz196nQuwK8hokq",
  "key24": "3k8xYBhocdd9APZUvZwdMuUk1tDfcurEH1sY8vePG4UDMgdeAn2AewbHM248fbbjdZxr9GuAQvS9MwgejuX5RywG",
  "key25": "3KmmuT1riECUQFbPuLmGM2x7PW8CKDizdymqaqmsY6ecSGQmvzjUhbhmyNhK5pnuQzbqFz9cwwGaLP7iG6RgzfjC",
  "key26": "NYwQfNAgmHm1qe2iVcFUjAaUNZJedTJf4Dcmd2UfCXtiPzoCMt7jRrYAreSTrJUFcxeUdrezDYdHy2LgQs2Gh2D",
  "key27": "3AHS8bUa213FQQKHjtkDctjaPZWKWQqHP1zVM6rSz9cMRmvuSdoBNtYjvpFp6VNfJKqMW88BJy26XNfnQAcGNfQN",
  "key28": "DzEiQPkjBGR56UMiQZo7HYJx6WHvct3pwkQJS8BUMSG3rUCkxvFHVTDAPZmQTy6BiSkKdAAMtcz6fZapJPw32nD",
  "key29": "ShS6498kZdSB2yKaaj3VYBuKUmMAB4wrGjrwSWotfB9qFLzR27g5p3i8CejKs3gjFjsAs7JiGhN6eXgbWiPj1Nt",
  "key30": "4HZBQ5NG5mTz64UdJ45R2SMoniW45vGZqnT4uMbNtawtiJfMu7kQkDiwsD4YrSAWaKKXhqXmw7Z7CvJbNqVFTVU7",
  "key31": "YvwpUAf9CMQGGQMhfA3ASjnfZDPFQ4SU7U5TBZLBZyU9Yoq3UQTRsmBsFZsBqhtHby6oEBXzQQAiCkipXGGQgKX",
  "key32": "j9arD8pY3bSkUqo9qZ59vXDAdoDvTQg4sccuydovJimf1LMRYex2NXBJG2aDVui6WhcpGDk8ptyTJuyqxgtPgR7",
  "key33": "3mBQDXSGDm37Pqwcqip9GZs5zZ1totpWJWmhY4Sm5b9JgizrpwP919WvpfnPEM7vzFZkjwFYH4fA4jy5SFEgK9q2",
  "key34": "4pqki1PstAisSksn689AGYgtWhEpr6UmsbYDPFkBHCaAnL2Vvtb1YCjpgzz3yK9tym961KA2wTsRa2UnHasC7fPn",
  "key35": "26VwybpUauB7J6gNRXwQ6mnFdSqJDxhB1gbNx4XU8eX4tWnrK9sFj6XStqtcrjJjMcM1x18SXm5dcGTqrWFEEw5A"
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
