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
    "2tcC4EDybURLhAqm543aSTXupe6RZo77E6MSydDZvkjk5g8Z83Ftwa8UurwoX2WvPf7bsgEsuvu7UGD2Ab1JXpqp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23fQqKKjsnVWnurtAnc7Qd9C2TviXTwPmsBwgt61F2shKDf1K3q6tdAHw3WMvHNnySfajsppAXpszZRFBHPkVJjX",
  "key1": "63JqGPrco47ymnNrHV9jDJwHVqX1faomwBLFFdEXND9jre2tBTz4jxbEsABXyhkJ7x4wiTNddJE1Ya3433E91xLu",
  "key2": "4He2EnmfViVK5HJCL89u4YLHLbukaP7wVfSxgDxMzYd5VXQEVi7sqxx1dKavxFS3Vr4PXgyVKJcciXoBqZ4M8EXC",
  "key3": "4Yt5GcGYb3aXdG5SaG5y32EjhFxrwzbt4o4vfc3JujerUPqtjt7ysQG6ZctPRdyaWTnxjTVCxmJdpL19Uuyw5s4A",
  "key4": "3yBxFjmT9X5PTvVjn49zvZQtfnvbwooYUq5kceFSjuuBFxDmpNk4GALJ4eeDqM25vTV61sTX2Vtq3gJNQjBHsjNM",
  "key5": "4WRBWP6CHfN9ZRYMjbcospBQKQop1HEsirL483pUNM6PxGavz97pAtN2yjECcPpYtddu3Z3vyGDJ68hTQBqN69vZ",
  "key6": "2r9g3nUTWj5VjFJCUcTnkrsp7rYvFNpEans7sbiuXGi8x9Bja7KSZJ7DS7ujm6N2LtKuZMYUcCcSHsvT1rQiEVx6",
  "key7": "3QFBEJe6hJyouuJ5kAw5rLaRgHgALeyHR223w2t5w37voPu9bKktKQFhid4MT6gjM51Ti5wYF3zjJs2pJmH53wQz",
  "key8": "kLe4Ld7Drv5bMvrBmdjhrMfSze8iRpgMgcvDkFu75h1pVG3SWtJxCqRYmZHnPQUgSkFYos9LGzC4Lt4x1ARxm6i",
  "key9": "5okrZbDDqUdSwJeUBXNgL4LT5CfQpwc6ADnYW7JtULrNpYv7XoCB8AW9GogY4pCyGmgBHNPAstjgAiKttBpBChqn",
  "key10": "4ipkXSeYa7SnLnpHmUCZMxD2fKF3rKqrmzwjSJdiucfX6P8YSMrgYDCH5jzKa6RM2aUQVGdL67ZjW2ZeoQADe17Z",
  "key11": "dtUBioA8hqMJjg5kVjHqxm6rjiwGYcb3hW7KSiXzpJorCBmvG2Bho8ie1veBMLxqxXJPJ7hdP9tPbXrE35GwvTk",
  "key12": "5a9ZY9nS8Byootghoo7QinFMNsEXXPVf2ubtQ5D6js8537NPj21awC9apxvWw3QrGRCPASb7qZnJ2sDCR5P1wJ1G",
  "key13": "4SYgyRRAmWcyE4X9yqNoiNYfXmevvdSB3Le5t3UsmTez5dnxT45CRdv4RNSeYXrwbqEQY8Uz4RHLoCHLgbo4qKho",
  "key14": "3V4SyYtTuqBdov9D1NRxPwYaZwjXKZEby4iuHqGwUeFRTo3SrgRmTMNFGMKN3AYRbibeAPnScnsXawknSAmxDxM7",
  "key15": "2cDDQJzhLCUSHZc75QSQopJVsRi4uDZJeoy8SLNk5Ka3QAyNNFJWT6BWajfNjJZ1rDsNNXxVfTX9CmttuyYqj6CU",
  "key16": "5CqSGSPLrk8y23vLbRdhLRmqkJiDVzwnznibcMaSLQAAJqdxLuPAw7oqMG22QYvWafRrkWM6r2ahZAFzDbZZ7hZh",
  "key17": "3U8ipezB4dKXLAyDv8kVPSpzMi9qJV7qNxzXWYrc1KBq15ngx3ng5sUCBboQtug3X1ngPq6fcpjym6mF5Wv123yy",
  "key18": "4g5zxDnZAmKGFYJtffGpJBkkZwQexH8uAgcpVAmwr75jQFyWwPSi1W62C3URpKFbv9L7oDgdxcu5LWrzh4DPij5E",
  "key19": "2aursYLJDZ6TUL1CjgqBeyUhVNTB7K32861iE7BEZ785bfkbxF2gLbgDHWPhGbUWhukMipbNtt6HfnjV2sm3NnFT",
  "key20": "zxFUGyWr47mSTyvzDz3BaHFiZyjUSGfRFTA4y4AAUT7eZgUt9KnxLYN4ERy5rwFvwakNXrpWSc8qAWCdfJLZDsy",
  "key21": "28pUgqu3UwvzABe7uSnH9XmTMojRtjrqJbGwkoBvXpSSNgrKJzTGbeonkV2YzuQTFpoP94VHVabfpLfw1dYDFfGA",
  "key22": "5t7fPHDELLWwdWbPY4ZGAcDvD43vp4ZGjCYAjnSj2zvF1awKipivTSFA63zuSchSej9tye9wMrL1ozdECzF7Tk9y",
  "key23": "2iSZUQ1McaP7UqEPRpQW3KqqfkV4YyHFNKgesXFZe9ugA3tWjpE5DivRY6FUhkiMEJq4r3H28Rko4dAoeJejQBno",
  "key24": "mtQHGcaWysWePDwQpX1fZbd3i8cWLFyLQ41QyaLt6JJ8ssUisZSVEJrNk7MsWvXtTCiD43r2ipQojbcvoy14kji",
  "key25": "3eSig3Jw2cwShGCjfwrHXnUxg3UaieULjbKY2pcB87v2dd54qDkUwwnkCRokFTYYqCA4g2By2H3VcXQWHBMNTUvy",
  "key26": "5TJkT9cSSTiywk6pzX45m8DufVReo7AD1tbBf2P6qMbm76WswkYDeJ27Zw3BFcDUJN5ZvngtVPpTWxKGBFrCuLYm",
  "key27": "akhFGmYjcD8rgM7hpraoAg8XHcSQ9dpovFVWJTowDV3ts15LAYLnq3QAuUZS2Sa3m1TcJbQ6xY4jYwNSpsHbTyw",
  "key28": "31kgMi5eCDAR8DLy8YxbEm5cWwfbF6f2dMgPLJ2ozMruuSB2dBTy7CmfQMRVSoFGtNgrMaQEgBf1YiexFosEmMvp",
  "key29": "NQL9Rno8NGUyPZZznGEmTVHZNduahEbjnkejqEaSZPF4fEdg7K4EtU6cputwVeB6pDWJyadxgM1TZHdmq3bb99R",
  "key30": "253NtDivq1jDpgrqXHEvk6oTLVodBckRu7HhfVpTdtzVfkhGuZosTWuiNSwsHyBdPsDGVxBXDcKBmWcLd8oJkCmP",
  "key31": "3DBk5G82vDAsHbivEgbpTsbE2otiirFzCDtGz44tGKdLLNFqTrNaq69KVKCV8PUu9ssdyqjx7vFc8FyqpEjzbzvx",
  "key32": "5AUHSntqKiZ8LoVeeRjg2Xw7gdH428wXno3RjLC8YJXGXMufyuTBTsRKUmaY6MJkLpdNRVKV2zaHzJuN6oSeLedB"
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
