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
    "2Q4nqpJTyHiWHERaCJKEyhpdYNG4FhueYQijf79A5Fmszd6QqzdHDaf6j1fa81zycUiUb8LZNLpDsHGvhsWEiqvK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JdPWKWE5raR1NSngCVvAt454PSehz1ZjqTG5CC2FifYsYkeYUa1yEkAx6uxmyPMhq4pWLoXTeR2hkJa8v6CpsDh",
  "key1": "28EMqEvTp27YPfQa4hcUS8wwZ7gKWqH43doyokX1S3Bm6TjqTDPVgyFcMn2wJafGsArSXGSwVQ5mUr1qHjxGVRXV",
  "key2": "5C3vJUVDHHhnDy5PqHCb8qAEE79NArtqvtPLH5HzmXqdKA2XfkPqu9fsEKi4Md7TM11qKxgPDCJyCUNGj16F7C57",
  "key3": "2vhNLtTqbM6RpyMs5rGJ9fkctvDcG4C3PPyGYMA2UXvKYwxFa51FTXCp6qDfYVNNKcJzPto5CAfbC2YJgSYTjUUw",
  "key4": "4nJan3oTDCqHuq5JDNTPpZb2XXZ64uNUyxMmpGcpWVdA7SRjj75JfzcoRTFMAnHjxa5Q9jwqaeAt1Ygr61ibKK92",
  "key5": "65MtGB7Q94gRMCMyEE8TcnXEYuYWy8Di6JrcchweszEPpnozKh4NRRTndJC28psUsYo2rn6M9tA8SJ1XpkYiuRLt",
  "key6": "EGDJqiLAafvprTqrJ66ScKto1b9M8kAorsJmwdn1igAKG9MtGQvcGJ5sAN9287QrUUonA4CbKnLiKprnb6fnaNg",
  "key7": "45ZWMHS4ErW9zafoSRUQ463vFdcosegQdxK6tr3HxcRcrDxQ283JgefLAv2kvkGL97HS7oDW1bTSQJiQnTDrGGCN",
  "key8": "4DTbQxPG86stFEmsH69FpxqdQcK4EPMVKhkA8moxbrBFsdXP2zHL8dHJMwBEVFHL1AXAvjS9F9oSnkXFvhVNhrny",
  "key9": "3guHtC3moUEkSBzoaoGmfURu14KiUh5BCbzDAV87aNQADQ5GJsM1XDLEVBnmvZ4R9U3dpkfeMJh8cgqtSrVprBzF",
  "key10": "2XsHhXD8GM6hnZ1kpifGM8zUz3BVfdYgfjhEz8iLxyL2cBBzU4qLLjmhn1H6MzXYrkXTkiPSu7mVyQyMTfLngfBd",
  "key11": "2Y3TmpR4xWjSj2ec2DGud8dHUBCU8u7y4nRFs7dz3ZA26mMSnxzsSfuEaKRrGHRWiUz8NbsG2XBkiCvZxBeP5CTk",
  "key12": "KSGy6Wv3CRwvad4rXRy2aA5tkmMsLMJzGuqk3ZGmPEDxYB4mVhewjPRTctrLbszYQrHzDEhg1dk3T4qVEZ4D3JF",
  "key13": "3iWbWSJq9ucXGLb7AtRNK6in7ZMrr3W1F5SZJPdtVzPDu9vC6Wv5uMQQi3QdyFCV3t2nnzqMYNSpZa83z6pi9vKe",
  "key14": "2h2pVP81RoypKtntb87kfNtAGDfcBZwu3rW4QUYRRFp6DHzA3W4h9jvvGFUP8cVKBtEj9Bt6xSxsDCVD4Ld3H5U",
  "key15": "zJ7Vud8oXuqMHAC656JuZLxA6fupXgxa1PaWr3EpRZ9sYheN6152p7fDi8BBC4gimJttJz6ZZYtatVRG7ncdLeA",
  "key16": "5DcGdNTGfC4zNnteVaPh5v96SMyr9Fp6EMSLoKCTSHFGMQpFkQkFVUTMzUPpSkBtPh5YUYgTjz6zy1ZjpdxNimnp",
  "key17": "5vczMDYy3BGycWMR23dXAiydYvhKgkZFfuQuwyFm8v5ouQ8288KjwK36GNujrqtE6QVP3PziBuygbAoMk83UdAkN",
  "key18": "4MRzSfGEheNvvUzWAajd2b9qX329U4DC2SVVPZbFWhQqsrabD3pujwTY2dqNd6HJAJorcYynQ9DCiMHjFaqTui7u",
  "key19": "3nhNT7aKbPWzrcfNvr4eutxmrDPSL3ug3MGuCtj5xMxUC5FCgjt8aaggPsKagccFZ3z3d4eFGEzETNxHURRoHvUW",
  "key20": "38kS9LP9aTkr9sXS7JoNBvBQrzvx2mX55q3HJZDagEJYAWXdRe3R3tPifHgfdzqXw6r6itUZHDK5NmoK3Gi3Usxx",
  "key21": "2R7LemiV2ZkBfdBbpYECS2SaRifkW2gK3xMqZBfEYgnkYUnVbsnL8D4mDZmTFtFCAV6rzAwEUEFJ3hHaXWX1hQyC",
  "key22": "5kRWzqkJ7bZByUDE1g3cPTnTjWCnd572w4Ka84aBQpTrHw46NptqosMHUa4H5zvChzB8AYHFHKHi5KTydKY4q8ZG",
  "key23": "61E6ApT7PfCo97qcbF4ej9Fjfr29YdRdZKbYgnjcq85qqb4C1dL5MHcRCZ8L7nNB5fzSn6xL8MtuXGU6jiax1BK1",
  "key24": "2cRg4b9ZpNUsMTCRAy3BKnYGDH4U4aeQg1YcknYKYv4cZmuuddVhmN7umXK6PYn3Tbic6ChCQBF6igSjK6TrAKfC",
  "key25": "4b8R4zthi1K2DJWK7tT8sy7yEsPD5jnQzp6XFuewdfUcBDLs3uQrE2A1htnZGELykv97gJSHUWTg6346YU42GGkj",
  "key26": "4FC8oUmfFq7cPd88sYRPsgcYmJ9Lddxobad5mujEcBzZz2GBQCjeCDcqU5h5uZMhZ6JPZYmPuhKvK8N5DzWH3vtt",
  "key27": "5zaaN6SGCPbjhMMbRqPFDprS9NaX38z7aeTqeZrwRnoAG9zoSDJ9KepTnscFBJdrNHXh6TY2roeuoXAMu6j8QjEg",
  "key28": "uDr6EjrgMbDCHTCjDAVUVXBzNkXYbwU9iNKVkcsdxCPaj4aqvMzzn5pbEhN24CNp4HGoUf3qt1QYMVcZ1U7N9YH",
  "key29": "2FTa5pjY6a9mTXPJBpmxfF8qY9PhxobaoUbrAZVH7RPMyXykheni6tyeoYgLKNwMU2MdzQ3xNyURXw1TxEQekTAz",
  "key30": "3wrMQ4swwmu3a2NqUHSQz8Whukhnf8NnrtdiEaP2EBQ6F9pDiHmsc22aQQHxNdj7tHU49dqha7jtTxAwbyrSMswv",
  "key31": "UmoQdArk7geJ15dzztZw47S5Aa3ncZwQzRxmPaasknDL5HLjR19baMVsFjANq6Xk9ieoJLjEVpnLyEGuLGGrKTa",
  "key32": "4rJGDasjGdyXmDSJ3c823mPqHKcu2ZTHpdV3bngudDzJniVTTYA5wXdmmUspZ8Zgm6HXtvvggTYwVjzcnxtxGtbq",
  "key33": "57Q6ernVREW9XqgeSaokS2YyxykUSQsBgab5aRcH7vQqdT1rpnMSG71LvSUzDKnYUREToR6cDf71VaRgeeRni8oi",
  "key34": "2rCwQqAbrq2V1sh85QqMs3yKRvdZW3ohx99LtbLMayqUZCfsufFfnXNCVLx7sEMTicbubyECa4tZPkFPHsZ3zUtZ",
  "key35": "5aMUZuEAjjMekeMEPKyPuQ5VPfQmkN5rK9ziBJbEjyzy8PWrZskvWvZkxr1erpS5RiRp7tkycQLTrAHpazejpggS",
  "key36": "3k2VgNHwBYvzTGb92ht8wNsGRnSgCoq3U3CVUm5kX4e6Pne675A6Ww5D7agTqsXjxVSEtApCNf5fvkCT6BBvi27b",
  "key37": "U8rheFg8sk6nr3HH7CHLAmZbweUQrBEXRVfJMZRTkLTe12RDAPXAaMLxRrcCkQyuLr1wFxBq7nNh69m1WjGWvde",
  "key38": "4HDGEhMR9bRoCieBmPk9d1n5kTwXhDXdqqnd15VK92bTY9xQ1RDWzWvZtQx2DPo4rXvGcAHR7tkg3nEzCAK3jTY9",
  "key39": "mDVxL9YVt6xZGFQKeziXNFH8rwjJXPPp6Zuyt4Srm55pSRc9HZsnrSQSNc4wqqU2nZc22RtgEgQJWinSjyn1Rwq",
  "key40": "5yZi1KjSdBCQanPCacqzEMmzoNMfga2je48zZDYhZKuG4FkHSAZ3WTTftNBZ9SmH1eWgFCA6dMA3aTQhF47WvGx8",
  "key41": "96Uyxhc34KoTpn4S8ybbGCig2wE1ZKWCUPUiGPS8qkXTLj1KSrzeHydLzP2vU98H5mQb4mhJQh5t3XJWXzrfHyD"
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
