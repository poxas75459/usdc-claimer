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
    "3pd1DkizhqoDX5PADwmLPpGWwofbTyrfnNoLSDHgsBBLPhwaSsVUeySMwsqyCGVeb2tj7o5fwzeZMv1CN8VaffT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oS2ScbLVjCoFGRaDc4ucFoiwM4SXVVtSrBF3pjnHWFHS4S67V9jET5YAvPhN97ZdEfXnz74CVewvoB8bzsyHsE8",
  "key1": "3dpQTTDqQYWwAj1vKNJYCBHnBzbgyyDNnYmbk611WdxqdxRzN7y69ze315DapNpRyScqDATdNSBDBJFYrT6jKK9Y",
  "key2": "3pGKV6XbkxjRL7M2JsFEdq8DUxHygkHqEBJ8FS96KrFTjtjQELLRPDjGxZqYbY3mFrZoaxpfJZWsgYQhUhjHsiGF",
  "key3": "5qKhDC5RdmiBGgZYecnE7VdMmHL6JALkh5JGL56aoiDScUSBaVmekh1AmkmBoE5gAvCqdvmnfKctqLmKNvCgbdHX",
  "key4": "4Yony9bRLZFcTLPhtb5A1GZ1RtT2S8s1N1rHi2MWy57YQ1xj7enL2ZReZgukQVjUxR1Bxk9m5bFTyWapEq5XSR7r",
  "key5": "3h11zT3kBqg2pckViRr9aA6UjEXZugsnC5p2bPWHj5ohVMHrqAMHNjW6rZTVz2kE5VvBZ67UunSuCJrTb5B3qzUr",
  "key6": "3KpgL5VF69KRViWDv5gqLtQZkrYDAKfpwmj7yjZyhhAx94nJU76uL2wQuWYw4UuWQTQN1NRikYqjwydd1fDHgGpJ",
  "key7": "5Wxwh6J55D3ADCqMZnKMK9SCWcU7DyAPXGD6c621R35WD8eLLwVVSjkPsSov7NdMeL1hkw9RcTYECm3B92dZSpMe",
  "key8": "4PPov8KesZXHUse6iGJRmkupvBig5uZYg9K8mMPeUaahhZZev3s3dzxQ6xy33fgbvGDnq5DWs1DnsHvuofFpZGcZ",
  "key9": "2oU8CfPzLMmq7aCPa3yus7D8KGhRibmPd5CuUUbaTLfDWDzY7eHxmNjThJagV1SoNv5xhAU3g28jPnWJsLHrZJay",
  "key10": "436WxJGrz5rK1KhfMXovore7CwrcrfGuZRqQX9NnfBnEkZ2pa9ZVhN8trC9P5ZgWVGTqAv4Qdqw9MAu9cNk87Aub",
  "key11": "7dVdgMDRovX23zRqCrFN9cJpDC93ZnLBvY9W4yvXFvR3ENgEQFvvBEHD1KA73xrP3u1cBpiPC3AysmqcUEEVwQE",
  "key12": "3C9BYnksFfmvXvfvzTzg4i9qGMUeESJ5kLnWAdwrvNFpnTXgqLz28BHE5u4G8LB1aSSPwr86r2Lx9CVKww3h68N1",
  "key13": "32Fp95qhKGUudCSvVN1gRnF3Sw1LdSxN2jfzwFUQQYpu1ct57yszivc2r6Aa7TtpMY65Xm6SX9zPrd7GiXHrHrRK",
  "key14": "61qzQyPnmwKgd12yZSfEK7P7JGDLDMLwna1msZ4jzrfRDip53qhW5EyF9uZN7dLhfGZAhGYLJB7DV8nwWxTTcS7Y",
  "key15": "2De88N1pT3n3nJnTLZCt6TwtT6o5X3vn2ByTqvsN9ofydM72d3SPy2YgpKuJYggSV8NP7BGuGq7MAhYv8XmQG72R",
  "key16": "3FPGz397UxuzLQwCWqUGaNveabKWoj9kcXi51jqB7NUUjEk29nc2513mRT3marcWxJ8GnnSUJsMVU1w8CYcBJadN",
  "key17": "5WYZbHveioYUg3TxqSAF7EeL7ZCTQSdKDXXSFNYm8CBb91wPgXz7KeaqnfHiXsfeGN4arEgkZPq8XhKKPCNqPeMV",
  "key18": "5eRDB8DEHTACaSooiNkSneyNGV8UMDX6jvZGr84rUemEXePy9DXCnvoDMnaaZa3g3JbBHuufii6C1zEfeaaaATzw",
  "key19": "4FmKe8eJ7wyB5UbrD768GKkRMA7VzxxWuJ9sy6p5P7psQR5y8CR2zThANcPmGgg6n1EN3vjUDvDd8YtwZi2UcMii",
  "key20": "2BG6dHkM5o2WFtei2z9a3RF4vuoRDqfC6kc4yM9svZJxJhVxjvYwhcGfVCNtjg49B5hgyaLVNYnAcHRRFWhiqe2P",
  "key21": "4RdHAf66w8f9B7bMRfzjHhdV9gP81ucpJLNueGoShbZHActY8hLg9T48NrBvhYmA64E5bFT1rSDhPvaHoQEKVqFu",
  "key22": "3SUKXAhUyK92fG3mFH9kDtF5PkYd9Z58KHUgUxK8hVSMatyBejW9CthubF1CFU5C9cX1aN6jbQ7JifQSrms6oTC7",
  "key23": "51Z6FGjeMDKDGVWZqULJrqRrLFJDH43BZTg1Lo4qJ5goxzPcWMsn2tm3g7zCobscbgy12mi6x9s8QZPjq9WgQPat",
  "key24": "U2DfHYccfeUaNdAgVbn9UDCtzZVStQLW3LRjcPpFDA2R8FNy7wdZGCVymY9isHdE3cDZrwS8BkF9yZjukRRafmD",
  "key25": "2EVuagf8WNQXvNcWGkxaa785wwwy5CSRUTPsJTcbCa9yVSxcHw5dBFnJAJccbBKDHF1nygBMi5DJ1ynC8Fa9gWBB",
  "key26": "4tq5JB2RZrhjgznHqDbP6fKaP43dzb8auBvHaYu9RnptRwsBxRS4aTHUHjTWYYoCsPS3bL9etWNx52wPL3LBhZYv",
  "key27": "4YuKyCmviCwUugY7mNCoRLPFdDb9zqXj3nkvDaym6W8gRvcJ1QEnjB9qZUtH49mH5VdZxWQBcqaq1K52dcJheCuV",
  "key28": "378nC4HYgEJDRcb5Nrkhbz8zhSXqSDf2Fq987Ks19fyT9dEneThPPcY1tYRmEM7Sjnk2PQ9AVQiQcxfpdAUfr73q",
  "key29": "4XjCP89V85vhyBWLzZodYMnnV969p8g9pu3njG5dWDSVyJuG3RJxQ5qcDV4VKfcfH2oZCPis7xBtzRnwtAbetNNo",
  "key30": "26qukKKpkH5zGkAz33VfMSyQj4X6MxTxbT8mCj3PEHxGazAabXLXPn1o4VE31zbgTR4tw5RxwGAXFGf1bDL9M2pe",
  "key31": "2xaefPHFvsXLs5775eL6coRbvfbCka6yNfMyjL4gFtcpRNDHg2ADKMaC7jumiBVnYE2RAyPmnGJMjhehGR2jtRGe",
  "key32": "5tQNKbsxEKuCs8x2qQpoyye41vaGqw9VrKdFXaoSSaSAmQVHL7osbbC1fA46y5CMUiYgae64Txh3LfPg3fSUmuUF",
  "key33": "3c8Sgj9UThwkg5ekf3jZeFhaUDpKef24MEvvtVE4FCrpYwZzpvXJpxxokbqdWTC1YtEGhj5ZZ1HsuCw36dJu4ekU",
  "key34": "2shPD1ZqASFS8wDLTSNM7a8SW1PSThv4nsBAW8z3dWxLZxkqA5VPyRPBCQCFb4orEXizEhJWPjK3T74W7VhwCbQD"
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
