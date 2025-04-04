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
    "5TYhtTAAZQ2wAdw61USitJdBwepPYj9nQgUz1yxEoRkgig5pcRo9PFs7TarYDhBKuLeAMYG2iMzRFJHobVmny7Ge"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4erE92wrSqwtaAH78XoWxog4xJzDzGVhYVuFC85FjGsHFQMKMoSyfx8HdNcX7dpTvQuhmuciC8N8KQVEZKgfencW",
  "key1": "4tzKQ5b65dDuXNduTTw2BpihJkcSAuHjfFMxDostK3pMggxNb67R2a1TWaKE2t6yVqpBBSnqqejniy1GBA1gsLz7",
  "key2": "3T48JiaQ4pAMRuw2mrhSb4H33wPvLNhtUDjn8YfPuxJw9Mt4qpgFYDvm5jwrMPhMiTRLg7BUvgnSMe7PBFjpR8iF",
  "key3": "5oaDSAMvPooW2GcyYSvLgq5EwppAbJ2qFy1xe3nMftcrEKr5ahpcy9kQaAzhcXqd6SdoKvoC96xdPU5SKWMSBTse",
  "key4": "4W82G6g6TDqpw1qh2MqoHeBv8rALR7AJjApHqC2N1JgGDg26Dr2Eckdtah1wJ5riYtNJj6iLn2tcTkQhZEkcyprG",
  "key5": "5UMh5Rn4DGk9MqwRBptVMQxxYwaFPTWAMusYT3WVdfHdyyGj92tcXCV7NCe8nnsXGxvxkitZVxghFDpYFV25nRFp",
  "key6": "58m2hSRpG9xLtZNhfxd8dE8YXb67LeyxZoDkqzyWmEiwgZgRxn5iqCp9vySMZEtUZYfGPB3tjVxUqDetmScMpuLU",
  "key7": "2ZAKpBJ6N77HgDmCGZ6zaJZaaqLNup4D8Em4j4W9x2S2JktXzBNEQejy7WTtQEK7fR9VZccfEM8DiUmcGDo8jQR7",
  "key8": "51jgRtPmyhRUuR8VAtji6s7zFP4L5N2cmiNdFYsJxQZcHAKUnzNKVC1z69NxhCHY73TH1zZnmKLc5okD231qWVXX",
  "key9": "4T8kXtX8MvZU5yed4zkJ2MX5uzfFbHz8xtjFjSRoyC7h21Mh6XDg6VRuyoffTtQV7QEHrHu1qKvW2JxPVKStepyt",
  "key10": "2zt4U4kBybghzzp3M4CHodnyyxYPjWG131fqMoYUTpYdrdbM7PJC3zEhA6RPA4zYdvEPdzkKn3cAHDpr2ZYatQFa",
  "key11": "32akBUFANvhYyG6UfTdtL6NqT5NueFpNQU18r3xCahZ8pS5vRfzUNZ2dvLrpsvppUJA58DqXeEJSpyFCm2JX3f9P",
  "key12": "29nMsAQMV3bHeQxKz7XRaXiUHbViXmsXXQzmut5NFcndbfXCg8mthr4VznNbsZgwqdkg7cnvNoP91jx3JRQvNsoL",
  "key13": "2t98o238yXTj3zX1DknBqAVS1LDStubJZqzYd1VeZLXPH5fXGNd7ihz9nxnSANAoqzRGBrneE4NMNg8ptvLpfmoe",
  "key14": "5SVEjvHwK8k43XbKuwJC8v5Ty684Gyb6f8uWZYabZQiGZVBKL6FFNAxskx51enzc5b1LoJDArb6X4fXAQp7PCcL5",
  "key15": "2ZLFqH3StiaTeXfLJSH9KzKyPfG6ut2DEGBHnJJHHPpahnoUjp4iwq5AvcNBo8fSPwdwpFezKjruuyUwTiemkrMr",
  "key16": "V9jDeqY4FrhW9DWVojjaWrhmMQhLYrVV9P3YeYZpNiudgFyup5asCihjWoRqGsKHeMTf37DBL6xWwmjqzCjsiA2",
  "key17": "513oQqtM5qh5d6buKQgMTN1Bw5Sw9i9ErSSCtsyfSjfdFsawmf7ghyLCKVc2EnRFkVxEvvMJTygmrqoosHdsZjdo",
  "key18": "4ho3zcwAejRNpkpQJnLqujxZvXWNqpNNe9LgkG9MXd5QQWV6vQfhgFm1njyEGpiyFdLCYtjRnY3B3wELC19zrmbV",
  "key19": "7n7Xrdvw8cru691QEzgtMVAj6osPJ1JNPvrfzYr3zmsiaTU3VpwM3wLmrEXEhXeM8UsYa8zL25ckS4CVcMats3S",
  "key20": "4qaWNr6DSYzUgWxeNQqw9yNPEumWVvJtZhruXkXi6YjYpd2ufJNQL8Z48vetf8TLs8sS4ADmo44mdvQN1RWFV7mR",
  "key21": "22tDamHMbXPQYevH6jnQqTJZnzgeqDzoXgKbyjyj9U1XLbJZvVDLJVt4QT9waJnzhLmSkZ7rwo4Djib1ZR8Vb3H2",
  "key22": "3f1L1ant6AiTPj1ExZPgKz4KxiU5b5adxDyJNduDeYWpKg7rk5H4n9kuMjQFEJHQqW7CnYNq3wkEDRaBY5m7Qtih",
  "key23": "3jCciAwAzDwcvMSDusjoxtbi7ui6S66CvADWPtepTettVxeWtKzH2z1bTAtZNs8tGi4voU2H8VnDNxYriu59RVzy",
  "key24": "YcSCc4z3q2unh49gtw727i67AJBrt6fdxkUoFinV3j893LK2tcsYoorXCh33NVzxodCZuRfgexw6XdZCU15HjDA",
  "key25": "5tzRheCXQzbh74jfofgtouYGW7yytfqY45TEk9NgELkv2mNmKK2WW3ZJdb1fzjUoarDe8r1tFUpoSrbMhvnzgFTr",
  "key26": "RKjsv191hQMcxY38kfaB1LRpuZXTx86AYTxrTdtjhB2YFhDx11oyfQC3DFERPptgzn8otsy6MGavh5ax2VfZq8Y",
  "key27": "4UnYMxCnfcGD3c3G2MJECF389MhDiYphezmCXZv1yegXohS58dNdtTbCt3b49jqijTX2cHfi1nmbbvSCAEr6S62L",
  "key28": "DfMZxqgsi7Z5yEQCQHMNwwFakzW1eSALaa72vLTaXWernVrSVvYKLkBmBhWiTGLCe3AHHvDzZg3yHgHfrtcgjNX",
  "key29": "4AhxDyfQw4ieyn9sybM9fUwEf9bhQoJTg3NSjZB8nEQBsufhxQffH23vGcgTRN4qA8rbt4qxnvg82MZhr2rpXkwb",
  "key30": "85WqsF8yDTY55xAWoAX9zU5h4YKxrao1Gbhy4vFdBcwPJKmKd2uwnuYPCQfJdv6ZR1ATCdtR6vhM9dEq82MCVeA",
  "key31": "3287EGvBLQNCMvyri1soBWwGb7kHQGxLY1r2MRXYihJhLbiLztA9XezeUyKx9x8Su9gU77EuwoM5zsA2TVVDCuUc",
  "key32": "3hKeeZqMCiFhSvygaJyGCjP6eMjTi2WHBzNAnW3YpeAbSH4y49zXZtZkf3WJeCGbxDQdsDUuBn4XoNMPMHwLA4mo",
  "key33": "1tx3fh7VmaQgU5XBL4Wdno9jrJ8DKm2UUAkS4PTj1q1vqmoJmmvetQXWatkBgmgDJgyD5kmmD3TJRbn6VAEx2YT",
  "key34": "2FR1rLNHTPUCEpm8pZexGYZgzshuoCJ6J4n8iAGQrQ8xJoyPojcR18bmsnPPs4xv5WohSHYY1kvBDmsHhT3NP5q7",
  "key35": "5Y7SZCVjpjp7VYQ3V2zoDjr95RMoeMmMDL2TNbC6y8QB7UvKJhqeYTQUqgaST8U5Q37fNdv8UHZ4Kry9ZDvCic7i",
  "key36": "5dMn4vD3BPY66sP2THqJYHNXtq6uZ9e7i7f1YDjATXRGmoaZ8RbZaprgEQQdoVgppkfkFnh2He63mqymTij4VD7p",
  "key37": "3XiKDT5LeQdfiZJcgNayuSoWTWJ3DA4e67UN2aXEYu8kuQfY3f95Gk2eGucXCkLCGAf2ZJUPYRpMBD2nQX4wUfSC",
  "key38": "2dRUJsVqnyJBxGu8iG3czys2gsDBb54qzrwMwWc7YgAv996BVrMKF1LHZeJyhj5zARVDzKN3uRCrft2HYGMjhZ4",
  "key39": "vgHWmMcmFP4gRxMrg6iM3FohVMbMtuKhYry6pWs2CjiWVSahceHjpgmPRjxt148Yue8XNLhNgSZ6QM18uikWEQD",
  "key40": "37o5WNAeyg6xModViCFE1G8GcexE4z91pH2piTEXsAiYZMidfzPjEkPkm938zywKuYrN5pWzvABfV5DAuk635ztL",
  "key41": "5WzkCLccCdbb1hvWTJpC6niva6XzHzfcNwpNs8YmimrUkSmkWXmCHu54L8ZtH875pf3oVphGXRsc5jgFiKMUPLkX",
  "key42": "3XmLEeQHfAneoLhN7W5eJngaSYuhTKRPdH8kENXf1ojXznCqhQz2HNGckc8ijKHshwkpCeKbRk7q3A3NhoXNCk3Z",
  "key43": "2H5QbWhwHwEWh2PhoLeZUBfbGnaaCEoyN6VWrjRuayiNkD6nFHS7fqGcFBu7Xkk37GonwW61F1mocA9kr8w58dHK"
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
