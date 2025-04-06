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
    "2CNk1GkXydcpC9kU4vCdKLNiNbpqgpiheujsvYG9CTMuZ4wNR2HHQLe6F9sYSNkfZhgJ27jZHnNnXCPoN5BBvxd3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KbuM69jtnYiAR52PKRFUc8imosY6EGrcSDJrnUmrvCwPq3RiDxNW9F4dZ78h34amstcxTwSPzstxrnc4QRwRKkf",
  "key1": "wR6B9pifjnnXmfiU8wmmgUpXtCUD7tLR6HEKfPVgHQo14N7RYrAotHdvPQM5MWCVPXSKTZYsy3LaJrQ5kwXru9M",
  "key2": "4gwTBfWrDHZucg1o63UJCopmYhAin2w24cYMFWj5bNW5ZnFBMz8RPX8fSyshVoKDpGqgz25qd365NUBhmpcXG2Ju",
  "key3": "5LiQkP1Qp76RqChdLqGyLWrhn6pm89ktFpw6XUTnZeE5ab8ms8gFN4LFdQvXypERPng4bQDCerfBV7RPKFP2Jmrg",
  "key4": "2BSZydAEWqu5jR3aQ6MYjTHwzK3dSD8WVFiz9nMvFFgechnZ7UvGKDFDh19dkTz7BsviPSqJvXcNmKLKEgj3x1qU",
  "key5": "3Xkhyg8sQnJHVzcX3Vya15S5rag3KaVS2yRz6quTnd1e3NRkaYu9iH8sRShzN3xGJvXGmq7jPfrsebQ5ysYvKZ2M",
  "key6": "5XWkLN7d7uLtgjgpXBUL6TFZkroPefwdrvYeShbDSP8WY2WajDZuUS59B1cEEfAHHwXkJuj3YZ5M96gg3TEeuNAZ",
  "key7": "4TyqmpRnRNFKmVKiTiNCsTLwCeMuCvo7RWyeFrJh7yXryfPJYhQXJr1v13S4wsR1rjokCVXX7Ly5C8QnJVWZf6cp",
  "key8": "3pXFgaN2Povxk9rDfCqY8bjy6QSe9s5ZEJB7H69MLDgEc8UdA7ffiEcsgysgzXEEN2cQwsG4DHA5Vu5VFNv1pGgE",
  "key9": "55Gy6YggPFPoR1H4qDHpeXutQMBrhcweSfokeuhB6vM9oMA9E8cj6ggsizuUL8AjjUHUiBY58VX52msEMMhJ97ZB",
  "key10": "4Q7GUx8tkfitWxmQWmvsNJqJiomE6Ai3Fjayp6qpsJ3Y74vQEgUDR6cvpnmfmeNwUXtyU6xBbsaHM64mhfJWCn5V",
  "key11": "519YK8uvLdhB9wxsQBy21ojLEudapqcyGpmbEdvXQDVh5T25GsNxhBR2cKWQ8N1BynDHUQbo3yST5KmmKtW4vJg8",
  "key12": "4TW124WTZHmq18si2cggEM1rmSXoWRYYbG1RaeLWTuZoAa7gtQWu1yTUPVumVH1KM4wzeMNGbk7HjjzPkBePig3q",
  "key13": "4k2r5deghLxD71FEvsqFbCN3ftsYNpFc1zCjZa4o2RhDPX2E4GQtqEfRNHgMtzh6E64fBnewnPLjo9MPq6Lpncs8",
  "key14": "4ewtdwaiLrDF67bSgeFho3FmYa6MsV2U6JfqMB9HbDnGupaBbRW6R9NVkqQHavYVJKwZqyy3V3YbKYvvzPTiqKmh",
  "key15": "2fnA6BVLN9Vj982fvv4DZay7gMF4a9ssE88VP5mMVHUcvxHrgnmk3y9KXiN5JS1YymWsmMPUNjoo5xV7GNHdaeuF",
  "key16": "3RK6jHwAAkbC4xAS9QusojZ5XhGt3RC5AGqLPCeXRKnUgVYiy6vs9AFtcrRy1QSGCbxq99LFJDAD56TKRNTQsawP",
  "key17": "25pHrGahA8JGWnZT9G5qU55zJv83MRhbirR36nn9tNXguxaShXZM4vN9ANy6Qhykn7swnQgU26hwcRwJmMTZzQhV",
  "key18": "i5Rs3uv9GUzKEKkMHyesNLyzKgKVrMuYjr4q1wK5b3X2vPq1eeiZWud5ix4xNWRLVDVMmdRr8y4T2aejwseqJmh",
  "key19": "5dn5p9mSQxrfQpm69ysxQ7RFzvDRrQCXFLRxNbLYZL1Y22oTMdzDtRPmUPTEhiTFdNCPwQ6BtWPwYuDTEr755rWy",
  "key20": "58JJXL7EKKLNJvsaQDW6HG3wRpt9AZGJH8GDMZz8L2Sb8AARMkpocXm2HVNygBK25sUXFHKpxwqEvNveAsyD2436",
  "key21": "32sKTeqv8cpGu7c48GNvNWkxBA2euSgx59GukRKAkNW2tXwynVijc9SnXaYsHEx7BSbBPeTi7QoMGQwGvy8gVEp1",
  "key22": "3TsmCkose7d7WBYEJXyv42ic4fHpNArMm6swUskYazpQbY8Yp7EnU1GTmGEMcqXzmxsyfikUifozffXrzfeeU9aZ",
  "key23": "4TZ6iUrvRvsTZ7GGAnPUYx7jBkKme1uUmfDUDnvAAXtrgub25bHHGWSrEU9ZGULUNyo3WMLEH1jjMMQYt2KPwcNG",
  "key24": "3a2pz3S6Gjc6qQNGTyuLBD9JMmQhUtk3HCEa7QBwzTUTzpR9UEmwwzKmGLa3zxRhfgYPjgf4EXYrqRVS2iZNYCNR",
  "key25": "3UuULxyB7dHQjT3fDY1swW6DmBF55EVw6PMxmFSSLEsVgxMzAFJABVMq7vpJJ8srfu95u4W7WW5yLLztRqFfW78c",
  "key26": "Mdptngw32cyej2w2yt3c8rkt2CG5KuKTq5TdqGaFW6HgnDAFKBBohZJWxWUjkvQj4LDVW5eC4uSmBeiMs9joRro",
  "key27": "21XSY4xvV84y1mBwrsPkuHVRr4Q5NzD9AHTQAbbPECNfjEr8vJ3atVbNyXUnehAJwgCQzwm682SrRTd7nYt4VTmd",
  "key28": "4VH2vvnvzXmcfqzUrdsHpBTdeq8UKpCJHpeXAMXffaBMi5BbdP9K3CeR6o9vVYgkNTgPuu5Wv7BUDU63M65YTHyS",
  "key29": "2gBh5F6xWkzMXS7QAu1F3bGyu7F2j8GcWXk8t5mLov98iyc3jWE4XU8TeCabxBPpvvVxhh41UNjdSEDnhEagNykQ"
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
