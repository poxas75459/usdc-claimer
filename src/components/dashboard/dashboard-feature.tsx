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
    "BZgW1DLkQQ9n81kFN59BPBryJAasW2vVaxDdCgMDpukZgkygxrdyYVATWw31s39dUrFt3CowtDpNFxuYkpdNGgu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "K8hzMZtZuG5CsZDqubC2dcM4YEg7UNGAYS4rQRLWFYSz4JBrAqayBQ6zqA5CL8tzwCsjygiY8aPBUD1y5djAFi4",
  "key1": "2bVZYzYpyGgSzDgExspEyG87Fz2pSJCQZhhqLoDzkDKYhdKBPdLobRnrXw2HQNsHRXWDP5WdPSQpBoMEtmSBotCh",
  "key2": "3gHFz2wvvi46dEvk1PJaZWh8SYi5cxoPsDKNug75UKtBLtTxVUA6UpNCmYNXfv5XPcYo1SkjTGkhrAiDfe1u2VLZ",
  "key3": "5YCLKE8WFo5ahxnerAAyTjvDsC5hx87yr3D4nAydjzN7hQcdTz9wYQrTW8qVUW1nvwctSNN2MCfN8kXX8e3zYbU5",
  "key4": "5n1VAywVroyVkobHz45ec9AKa3VXn2ETwWADuvgmVAUkUSvDtxvcMBDZGduiiUCJC77TQC6ZVx3BWiN3xE4aWtiA",
  "key5": "2pERfMCfnwkC1Fr6qnFsumGu3GQ3GRwgJAgfRoLWZmMqyMfHfXttJhD1SConnvqzvQJCkApjYQx1ZuVnniAyNRSc",
  "key6": "C7RjMRDPscAuie9zB7LY5xnxXivGEHhJoune772pwU9hGiGUZcGrpWjqs4LNfW3oG3P3cgYToV1jzCW3vFBjoA5",
  "key7": "4Mf2FMQUagDDANqfg3ciDLWo8knXdeFayBeU48oZPC5C6K872Wo84Va7mx7qrD4D4nK9BeWRsCYrRfJctUSAEBUe",
  "key8": "hr8sW2a17yezm1vpAaRGWxQtEuakQWKhk95VCDzswoKNSnn8LDGGDbjt4yqdnsha47jcay4p1TSxUxtHLFnsoij",
  "key9": "2CUCZZPVCfPhvi5ujXGLyvQZHVv7mLz473JmbTbJfj7ze39ytCqsMik24bcUHi7A7Pa3zZ8w1pTR7Yworu3hf943",
  "key10": "4cUc2ASBqhfB18PKPNai4JrPn6V5Vb8XaX9rCpyDoesgGRF9Rhk9isYdQJhLPzTwBZMRZCMFFZCE2m38CApwF8y2",
  "key11": "FMt3kRxXr1wRkce9zb911yDMhHhFzM29yGhnS3wgw8eS7ufyBEJtJ4waNWjJC5BXHTVwqXjZjZRGxAvv53iSFhg",
  "key12": "3V7h3rhhCk8mjU96u5iSZ7quvjABriwDcZpqgJJhPBEhLtGJrUKvMeMjt2GUgjVe7CX6VwtsVU2tipY9LgFYKW2d",
  "key13": "5SZLEyCLJR18rUmwoDJ5nn2EsgauifRFUh7MCMTzwoHWwJ6FDBHUihgPE6tf9C2u9XWwsDJz4XYPUekG2tahN3MC",
  "key14": "4eJjG1ruXc5usD6HW8TeNc4i8VAJ7xsiV7tyr48G1verdNyPyUg9TGYMGt2rKEkPh6NvUm6a3FttUNX2BF1FGcJb",
  "key15": "33BAeeoar7xwLF43KxYLsm9J7tycoHPW2L7B9aRzx46EnCgqNmtP28jYcham1F5BXnau9wpCqrnXaX6prHMydTma",
  "key16": "48D8JMMYqZekHBiBVt41C4oY5LDw7vDbdV3ysWG29aqcQEkS3QFLNn8FUwkKoUVRFS9pQ82tVFyTpMyteV4XjkNX",
  "key17": "3AYTkN2GT1aVgQNnct8qrFdgfQ2fXGrq486j2xY4L57D2DRHXVTPZADrjdYfjSqACx9BLGVVnau46pkAmaWfbU5p",
  "key18": "3tTWKgKjQQN6H4b4YPXiJViCCHingJTRhb1YPySwAYG7RgXzogLN1BCeEAeiuYYzQT1ethR7q8w9w2Z8cDtS1T3g",
  "key19": "2cTZt2QEn1JYzVWMqspWWheo4yXLXBeyDsEZ3xyt4Z26eYiMQDS4yfePQTKcwQAfg6m7fwSXCgSfaZSHfNxpQosL",
  "key20": "2jXqsCyLLWh53dkD2crzTrZFVkCRbvaHrtp1SuWXUBTUTZ1wE9jmSPC2gofaZvdebF6U4n3pDWZcoKJhFMa8Ngqy",
  "key21": "5Anc7wfeU6GvZPvkvjzdGEwzuxy7yS5VvxPaFaaSZh5fjVgVVKGAQtoS5sEs5FiUs7i2Z72YhqPTPxPxHX7ZMLPF",
  "key22": "5JRhKfPh7iXjqZYpnRbjN3Vm42sNe6Nmi3qbj5cFtSq6gucfmgh1nbVBcY7PY3h9UAE5CARJwJR2f7QdwdRn3Kmc",
  "key23": "5EkkvBsY2Bh681WEQUkSfRKo3AASsjnMV6ALfVr5Gwg8p3T8AYDUBk8nQqY67vS7Ct64huTpyguSPChihY1rRh1b",
  "key24": "4eTubPcBQSUBo7FSseFz7J3fRHYRnqpWvYrbwydHqxdYStHctpNQFUARFoqhq7xjScnjoaHhC6EsTQGfeQpz4YtX",
  "key25": "2qtcQrQ7uG2hhjvsXbzvPfGWPcbTdgKgYGprYGn5wtrXXEiTX6NoVvPxHM3KyANBrghUcWQR8M2otWTV884iw6ud",
  "key26": "2xASbJLXR1Hy3bbbWs5nQ2eBSPWXLT1uvL4BjvrHGJsAocoUAh2yoraY1XxCF4TxLs2ij3ggWct6mp3PmVd342ng",
  "key27": "dGhQ35YeyNNzMkzX91i2F1SLK7PaLuo4D3Ud74RF2DW6nWYX1Dd2tQC6zkTdDv7b6Vy4n8e5ufn3dHTcGbG8D3s",
  "key28": "2CeX9YseB6tbdpLu3wMs1Pomwj4jzHiNSrhMxbYYMvD7VircXJT1LnrC3K9QL4rMDn3ykDZnbF2mXoLNsuhPefpb",
  "key29": "2NooXPRz7eYjxHj4C1kPTunLdfShxwnZWFGm48WwPdi6rGbSHQrjLKzBLDmhhAaAa64jC7eRqr199yFJ8XoJ1CgW",
  "key30": "58CXi1y5dQ5BD6ALnkagzagJk3PRHp6s7sxsGBYLDqRg2hCdH6oSKxDo33KhTFoyDMwha3VUMY6Vj3GChCrYWty2",
  "key31": "3y7LZbLwwr5KRigPqPbKqjfVjiw4e3RefZFcKP11p42WpTDUJC4TUL8TiS3tXtZSx3qJLVYbe43DRT1CNBezDnvj",
  "key32": "2r9VXnBxLS2KbNUCv78J7sgD3B7ktrAku9zQjkTU9mHfornbARHtBzc1mQtJXuLxxGxVhHDDgD85fpFAQijf2Lhe",
  "key33": "3LtfgqbYcgi62f9DN69GKMuaTgZpSGLwT8Ags3nEhHd27b9bhX2FikvcM82XC85R2yEqXRNKofLTRv6SCXV8yPW4",
  "key34": "5apktSejyxEjMKhB3k36pmCd32nhkSwBHnnZvfyFbrfgjXmt9GGX4bCqvVx78rznvgWUFQwLhqxccJvnoVm7qpnS",
  "key35": "q7FNCCq3YofUBQqGR43GqVXhiaaXHQrt3mEA79HqA2GdzwFHdMXrpmEpZGrSTkZb6Jr9QcYmrdsBy2C7TGRMESi",
  "key36": "3sRRZ3ktuTQfwnThHyV2vWLNur8nKTz27FmwJw6DciuR1G8TgU5eKSa6GHtjzoAcCr6BdVnVXV1mn7GnkAs19xzv",
  "key37": "hDdj53bFmZSjh749qv2mA7qYquoFgtwupmjmwiTHqZjYf7Ezet2Pz111ZouVFAHwDf35Y914w7yKHjVRBHgMk4S",
  "key38": "5BRkN6xwnvd9diyF76m4AnYBKR9nBwR98cDNXJhoF4jrYxQQ41ZwjfR2GiBJpjuUdM2berbPtfwxSu6F2JyBDYmV",
  "key39": "2n869jvjS6L8iGiW9Xu1G2ziAuconWvu4wDbv6aKst8wvE2RcFanDoxiunmuaqcWkVHyLjF5DAJMjtL7dMqSXFq2",
  "key40": "5DYcbX31TE3iR1EpuTyV2x6VcNn3ej4GhXLGFZG8Yu1dMUxdxQUp3ueWaQkQN2oVBzadYjeVrjK2R4shWm4WP7MK",
  "key41": "5s3U9yE3To6FVBm28sJWDMPHuimPjuPvjKtRizeUNVxWNhWoPysQDsBBFW1tmRcJvi3MouncGpYwh4wfCkwjdWXa"
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
