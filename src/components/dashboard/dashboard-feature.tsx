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
    "2UPsNcbT6B52Gia5L6jgB3HLFybNHvG7yHwMnGGR83D512opXDtwEZT4iCAY4LDTnYcTnNGyE4zRBQuoCzutA6JT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "V7gKgz8xDJgxjki15CCHrweZigRae6Fd4nYT3S2HtBk5ummxtFUDYMVbgCMjFgnCta8PnYU1WaRfyK7xq2oG4Nm",
  "key1": "ptWvQZynG2XTkWPx1bHzuR8bbyxMXk2M5UygCjMpBmkGs5DbYA2Xfwcr2uhfUpSrfcpWbqQEWCnG3bKX4Uv9tAT",
  "key2": "4WWRENfFczfn2LieRedgrYqkxK5PfY2bTenS1emp5tPnAwhgTvLbdUUsu7tn29sYYfRvkqkDXhcP41iwrP3m4pCP",
  "key3": "4QP78iZsXoqP7fsDSwjCztmnCuEgqmD2HwyCYwmiLdErAnBKbz7iPkgu2TQ4GwcsMYKMp1ZmN2X8VF2G3VgKxHRa",
  "key4": "3RiKk835Q9sxE7NnmSiYWZbUSQwvn8LtAb1wNpUctDrHrCdy4VbLdY6AYJMqzhTCXbJ4qb8iaM2JuYoAj7zaj2M3",
  "key5": "3ZjTqzSoc4w1GmTE2a3dX8cjYvfNp8LRwkSGCw3w3yi4at7eUcvonpDgWVRWqaW4qFEtriyVG6iUMup875i5N4Nz",
  "key6": "Y5xuwLA16otAgAbjmGVhtjr1XAe6nJ5CzyCfzB3N2mcZCiBWoYinFgJFasLxj1v7xmUEpuLpzKhV1KaHr6vermG",
  "key7": "2Trco1K6AUPKLRbVweLWmG8uiwFALmgqHBoWztTHei6hJXmiajmopL5nSuoGL3bHFP7nbLftL1YHCetbVXu9EdQ7",
  "key8": "33qvFN7zpGiWcEBPawYWWMeNbDL4KYSTR4cpiRNSmSEEW6H79uqSQyV9XWW93B2g4s1PPiaajKpU1dvH9HJF7iVc",
  "key9": "2NDn2kfmMs2VaMSV4y13jwZsEbxV1qJXGCcePuFrrMKvQ4oiJ3SQVzj7Sz2pWjYZpnzjGDvZYvgb1Ky7jx7cSeF5",
  "key10": "56BmkzGQ6XmSdbzXvAyij9kZfMkqNcfxLNBF99wt7jiJP7F5W6AbpJE3E3BE5YxRzMUp6pWL5iD4RWGybVQYnhdY",
  "key11": "4hNpw4HREWXgh2cvaxpiZQUXK1c7komPHcAsgW6Uv1DPjes2zEE9KvUoQBmjegotNEKo34p2tfCER6hRPASB3bqs",
  "key12": "4hLsXJVbU4mosEAiRbzwCjyt1bRKxxHWT419T9E24P44ybV3DgmmDS9QBkhNLu1V4zSiCUiUDeqcRwjBP8iPu9U6",
  "key13": "H1dyBN6C3KEghBN249ixVMXF5oihqiTiTv4WayD3H8eBgeghofH6SYb71bNdr1oVfEAaESFNgi9taHC52xvbRmg",
  "key14": "5ZbV68yPUS17GaVX3dcNYZjW6zPNmFrfT3FBdJkYs3pdwmEC8hFEju9N91UnF3kCCHsRb2f6NXKbupdwDxAbbVQq",
  "key15": "3aXkKB9jD3JqjTfEafHxpHBgdixEV33Tr2hKRbzCBiQ4vzkAKxtPYvq2K9FoLiaVohVk97se4xb4NKCeZ83qKPFT",
  "key16": "Pq1JbBU8Ar99LcKK7LQz3w3qNr4aZer8BuXR5JFKjMZiyZLrMLWB353P71Te1M4TWXU3GsJsj57zvcXdN4MTft7",
  "key17": "24JxHeiUxCBxxHgfVFhVzcruPKqMifn841aV7rQ4uDaXnjcrwUjdozPZiisyv9zD9MpkkxJGqt9XdciZdpMZQYfF",
  "key18": "4xzNo8pstU52yj78ZhwCkRG7coGXYzocsBa8LChcW5sDviyvBJqaaQMRH6LnZ7WpqUbu56xT77RSbgnENdyvnJp4",
  "key19": "2VPm6y8gPpsCnDp2oqUBtiM1gnLpqjptxx9ZEsyQAbdzUFDR6isbX2RMLfPtVCAFc1dgFXWwoaSjY9yahFkKssb2",
  "key20": "3FsJdup8k3UVcQ3B3MeyKVPK7JLncteAgCut1iS8prVWwPMSXeXo2DP8MQyLK16DgeYr836LAT7xeSDwTwThcZLN",
  "key21": "2UyQtBLtttSbXeSmsbuHrPwqKcQk9yvxFWvu9SAqhgYFXCdEmmabzsk7fVvBmyToE1iTQ431TGFvfxnasBfFhqCa",
  "key22": "4pE6ooKRW1vuuKoChi1MqwJBdcLaMYszMXCPGJYFa9uJVL1FKXd3F4NaDnSXpcbWHjaG1Xa2FieH9idweE9GG2C1",
  "key23": "24oR8XhnLm7d82VyXS1CLaoVVsQKwHcEGSucyAoi7FW3M9zVjWWvNVVwJKT9wUgBYe7m1AxtHqzUNXoJq11zGPFx",
  "key24": "2VD69fvBzyBqFDJ46hEsu7PCPXJE1LPbNbVXmj2V6xTYZ1NNNCu4QQWng4hKhFUfeZV4yAiXzzTcupZysT3fTEHZ",
  "key25": "62nspXhtBJQBGHaR6R5v5n8hbQgTtvBTK7MhQXFA4hiDw28zzFfJxJnigjwZ1VUBGTvqy8reMhkAnBKfLaGV6QkM",
  "key26": "DhZGnyXtZy6vFc6oHE53jvQkuG3TtwT1PfHFbQKf2PYzaFir9NUbSzKwyAA7oPsUefmsi31zy6zmPTKTuqVN1Gu",
  "key27": "3bgvc17zYSRKvtUapeg2ycznswekr81kBzGiiUmMctBWcAewXmRzm3NyJzHe73Cn5jrs7sjxuQZsAPm3Y1jKPkBq",
  "key28": "2exL2rqNzdUuxB49ByUY6fM8D2eM2AtQaHckqB2QJu3Ft5za9h2vES2EX2jAmc5bHAMkcPuEAZn6xhshoEhwPfNt",
  "key29": "5VQiQnahytDsxBgapxXQLvTob8cUwdmkXZXaBAwbFLVPLcJdPhJV9ekAGTBsJgxKZV1GDqmEQLJj5CqkFHVckF8o",
  "key30": "3XJaQk1uL5yK3z58Pq842YNy251wxJRDaMF3gGhK26VTLiYTTnBihpxBg6VKBkcEdbaTNhK2Re1eNL1EpRirkVMc",
  "key31": "3A8PSNjB5UJz9PzZqSrPJ836sHVUuBnNkLWz4s9PyeY8saAFwVWiJBk7KF19WJVWdChfZMAj3RFfDfMUNXwDBPg",
  "key32": "21r1zhoshcuoGBtXTVCXib4YNaRUowsEkrmPjraU6VKF3MR3KrapiWhLc7EzBPDQs9WiXW7BmtXFXwWfvTQBjiL9"
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
