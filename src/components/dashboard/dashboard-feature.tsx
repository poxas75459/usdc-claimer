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
    "2EbGX71Cypwo6Lt3KnbVUDZAHwgN1gvqfhf3YbyJ6LWYs5geJ12nMBLSM37JgjfSQ1uq6j3M3pFT8rnyj7hWq9fG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LnMxgpJHUreiLzzQCvX5tqzyKtfaL2NWkH6nR7n88yDAtvbDTgfCYSVXSpE3gtTMKj31SaUrMRtxZNW5nsTFmMK",
  "key1": "65RMJjFxMHFu9nbPra5Ct4Gf8q8W5wB1bqVMtLefHNXBdaQZJuUk4e6CYwXyhWPzeHxayhz8oBy9QFzoADTxwbJd",
  "key2": "2EDuQ3CyxfZPdg97yLi8KbnmwZsb8A7ksz2AqMcsC9whLmwcYNc71RxR8TCa1UiruBxPdjkXr9crNZUkS71gFyXa",
  "key3": "4ptHxYEzKGmE3XEGAYjj9fC91hj9A2zoMKC6AysmLVE3KUao5DdhhejxHPC9hwjbrHPKXrHpNRt77fhKHoCA2ASw",
  "key4": "ZU9CX8hctUa5WeLWj3DAqrp55JYnJa2DMzKdGFn52dw9Pyf9aDEFrqLj5RfUGiHfiWLe2e6B6NR4CZmKrb7fFf8",
  "key5": "BiryuyeNpSQmDC4zv7jMjD8BXEMc6fUxkFpMzxQxems5vUjqzhQzYuhjRaVS9SNVK7kfGi4Zv1URYzkqQaaZ8vf",
  "key6": "4UyxcktotvthN3oY6wngDUeGuJs58qELmS5MoS8jKf5jPPqto6VufcZ6ojJ3Yb8z9aTVmQNZQX1PFoupqNJbKmJc",
  "key7": "5DcN4RgB1aenuZpQzqbAanY2etUeHZ5Fvg4KhsU5JDp3kqDaiUq4hDugBEuF4zfFdMRoXiSKdcwYxf6ujCj5dsYC",
  "key8": "4473nxFuqaexx2vwaMUXGy3GHoPnyM1eWSeiXSJksNCMAZZw2vi5xrjs4weuXTfvGcgNmBhuBfSPKC27VcCNVWU7",
  "key9": "3rE1QzMrXwu6FbxGgFSGYFAKQgyJaCdkJv9212MwTT7nq2mJxmXh6C3aiyti6we5o65N5SDD8PGwSxfULdjagxug",
  "key10": "3PrUYvbeLVEmD9MDQ8gyZijKb235kod9Ci1QzEXLZukKwFowEyLPecKzs2bShWweDsQ4H5Gu2Ec1z8aZFG7QomMt",
  "key11": "51vnz9XiMA8nkuuuC9RMhyqshXei1McQqYs5KWDLxW1usHE7fh2Rwt3VZYfdN9gjus5Wr1DwBqW51yYvxzEw5sS",
  "key12": "42rhxoScb9XpmkLHNB2pHJ55KM3xDGzqzohyQsRNso9r1zBCcjRdZGgBx6xvnttFRwWGGHU3K6j1rvoLeq5vWwxW",
  "key13": "tjsMMcjERoaMk4mQLaQgJQt3QNyKBFzQYaP9Ez4WKsXdTPmuf4NzEPrZmxk5hAsmzbwpKjCPDQ6VHMoA2azBbMG",
  "key14": "52f6eGVUkhfpRv5ZpVcbgD1zuyaWcGYAu95tJpgn4bg7JxoPR8LVX9pZQkVhmLAKcykML5tqoZtHBj4NkwBFVaas",
  "key15": "3TNR8XAqspC6yBq8vCzY4t4MW6YaRzNdf79CR4F7G57vU5Un9Grhuk3azALwFdmn2CFzA8yFgfbnoYXU2pSGnjX1",
  "key16": "2CVChQQnTL613a1GxGBvnENoK6x9oy9ZxUQjcK9qB1yfg24v8mdVBD3LLxTwG4MbhD1PhUUE9QUwiZqWWAN6nReK",
  "key17": "2neVFJC3rc3tPRCSYNvCBkVBDrc7xYEtnFPSmiaEKrm69DhAeKdBXiyhwhS7mXfiTTLzRPMdQ54k9XR2S3sd4qXZ",
  "key18": "2c529zNrpEedrbyKLSAyx1gih3D6cCt9YnaeihHQCQbnnUBXkXUxcdF4YpAYEMH73sAL7t6y25Hqq8Ls9xqqaWEe",
  "key19": "399EruwkW1UHyg5Ywvc21B5znJ47ecKNLWGddGE3CuD9PBEmagWXcCVgfFvYZwNEQh8zsdTTwsSPfsNdXDMwjGWt",
  "key20": "22Y3zLqE11H6mmGphX5bTXQmLe135ZK3UtBJqNMS1iW3CjjnMUYVfRdKdu68iSRb1jJRahs23RyundfHi15xbTjX",
  "key21": "3ax8XiSD3BnGUKGnkwpqZYWSCiJCGmtQYEyEXd5y4QMsLXtr8ixgPNSko8LkwnrEtYcjUpXubwH4ibqkHNhbR6jk",
  "key22": "4x7GMmgkvS3hdeFgzALfZfSotmP9VuPENWEYdSXH6dBMNakpb9UFS4iiFGdKNbsc5Fhpg8xJHWaWhuwzQ3BUtRqv",
  "key23": "4dJwnREq6gwxXkXhd8baudwaTiotXtMD2EBU3h9tTLcnnkmY6pkrsk2TwGrVmxXN3PWtvehLkvFPMZa5XVU3nDjP",
  "key24": "2oU8B1FhpXmJfyWYh3XWDiKuxqekUftsbLUMiKfCpvAZb412LP423c95xJgvXuCztiWcJ6wi3DTMRVjL9gr1STRs",
  "key25": "39pzjRVZWvzwaRV69qQotWug1RK1iFvyUeSozCYorToX86yKgfQ2tyYerKiT2hhRRSpqqCNzGVDYmnNrrzDFpvgR",
  "key26": "26YqMgZamyk8pYADCfnXMxvqaWnQ89Mpdjq8gB72VXbzUm7sDqv72zbiFrPCkPjKekz2vHTVSAR7t3hrGkAth3Fd",
  "key27": "3u8WeCwqKvLpZ1HZsEpbM2P6KVRdrpNmQ3gcVMF3awrpCtp2KK5iGHdtWAAqS7qXmM5E5bm7aQwLvW8rYY1cLfNr",
  "key28": "4tfUfY4aYQnsmQ2qnkqPWJ9c6D5hKQAKHRMN2x4B99qAUdXXMfYd4JbduvzM9t3ygCLw27pPHpe1Sq8fKMnoZZri",
  "key29": "4JSe7xL2xdvXNfuTN6tVkQsn3DUY2t7QAEBctfJiRhXSSTUDnpWFg9detwP55dX1MPra9mshEPhhTufyxMN13e6S",
  "key30": "4TybTQpP6tDnuMB8MkxYWWmdVfRR85xuUxyiNhENYDtLcEFQVtarPKXGYfjYydrcV2htEjuhddEwy4wdYQGimGgA",
  "key31": "5mdwEPymqM7BuV1zY3xfRaXnhktBryyxHf8ixDHq9hfkm6vCJGeZ6swWW2Q4Zjq7xN7Sgf5kYJzzjf3XpjNYUsiz",
  "key32": "2KDGEZfpHUYa5NXxSfVE4QT4azWNHeTqQZ2dB4hQs3aZGGwmn4iMWLht4PNCVAaMmN7nFwjDTBLqdy7X9N5XxLeJ",
  "key33": "mifzmDPpqiMxTRT4gcUpeqBCbuCABuG2rbHVzDcGQtcvUyKaXwocaHcAMhUBm9gWfoZaGVoJBupNU9E5J6Yyn6v",
  "key34": "3Hzuu7LHik1wGT1vqwKoD2veT1t89xbTBc7ebCreW4eeoCvLcgGfkbB7m8MRAzbogdQY7vGAYmfc1Lu5ytYEYWFs",
  "key35": "447jr1dx3yVxrisx56odCs4u2t6Dy1J9WHJXNjxonu32s6i9k3aKdUa4LQ8TxuRtAxdWnM26ajpdTwvKfqqfVfWu",
  "key36": "hMfhYZQzbfVQeYzYKEqy2Ek5xvXFEJQQEVRM4zFtXiCV3E15EEx89aQYEmzXe5iWD5M1MhSNJJX1zU9dQXqEKHL",
  "key37": "qvmDghTZZ33kYz8chD9bSPgUzGbyQWMSAjV8w16n9AnfzYH9KP6ZQ6GiHBqGeHuyGh5yRt2esXhPanwkpfSFom8",
  "key38": "5crTrSfp3muoXR18D8bgoyGJdVax4cuDnyNeCQCCvJmTyog6xCNTUZMKW25BoAdoCKNdwpLtdTb6pogQfduwXbJM",
  "key39": "kR9JiFunAVoe9tBut68rowBaf55N8QBnD6GVeWZgka98f8VU9mqE776YH4ijhZitavsneaMSmVmbxGWBP6ce8WQ"
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
