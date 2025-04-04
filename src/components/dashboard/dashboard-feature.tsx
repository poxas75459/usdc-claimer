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
    "tXUT1VqKKzD8uF4VDNjaGWzimcLJF88t9FKFWaYsuEmr6kEX7U2fhJU944HjoXhp2AfvKvwvLMDwRQJgYi7MW4d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tKjnrpRBvUDJu6q7eM9BEy6xWdQMmkZAakXBNBm2YFsN1MD9YE9kA3mX9RQsZk8QG4wGH1GRNqfFRLJ2KrPGBWk",
  "key1": "5eRTCVUTPQcviKgruguq6gEKaRUvw1H9FBGFNdnveDZgQonBXk6JuLkeoqy85KThvEDV5R9ZXxepu2wDd4xPfQjA",
  "key2": "3ThKWktPSzwFpd6ArgfZToKGrY1ZyxbCZznJpCGKzqqXHqT8LKkB7e9GuYDxYhcibtKqQGeqsFZ5dQ2aY7HkZVCv",
  "key3": "DcYaMzW682wXDAMUH15Md6Vg8UCvQYxNLKEmwpjK1xpwcUaJyBL8LZB6E3LJjv2Wg8GPyXWoKeAZMo6LEWSFYkb",
  "key4": "gDoKmjQs5SB6qAcro8YSCLZwyHQ3veVVWsyG4xxp3d78p6FAkUeBCvsgXgoe4KxijjUR3bxBaNthQtWV9pTfsHU",
  "key5": "5QM7pQKzhj951LuMRYYiZ3x3oTVnwyPcv4JaSYctRrQNe7vGu8mGKLaTh4eXp1w9rNVF5PSeadXUamq9HRTYKdZ7",
  "key6": "4JTkkwrR4GwKdcGQPSRhQJdETTUFRpFCbMfh5qb1qDtt3Dr9aDx79UYAXgaBV1yEwUy6wF7dpbJyrNw5gWvmYTh6",
  "key7": "2H6xUgd9b2EFfbjKgrJAsy9sMrJ7sGeWVJBLL3684UeswYcZR6sF22xyhykUtFPfTkBCUjN9mu5CN378RfDiTKWV",
  "key8": "5QJLpJoj3EGCwuRDeo9dfYj3cTBagySZp8n3hSyDv5s541irspVtwhvw1kqnJKmLLGXLaFjnWQtF1Bd1zaNrwuvT",
  "key9": "46Mw3LTpFPJ5hq6TAYBhjBZiBfaRUfZMH9wPDURWy6iDPixnQVRZbbnyCy95hDGvDksUMHsLGryVTpbAupWt5wU2",
  "key10": "iYZQKboQBmdmWtNDoUghXniHeWkLEBf9MeWTNHFi4s25az63JFV5ASXUXGhBs1RUk7YzzYanY7eCGy6Q8pfGyKd",
  "key11": "5YgQ7h5RKjHayLSGkceLGQaS2WFxG4rEqiEz6hNsQidiJLJY7zt4scL5FFKGXHyiKRkRDu55XdRtpKEEL9J6n99M",
  "key12": "2GjCZEtJ3ceCfT3NgR3NSPdjjQKd8biViHj381j5S5RuwKUJssPGPEdbD3f6s457zebEZYkY5rBJ3sGrNafPQsh",
  "key13": "3Y2hUZzz9PuH6BvviRcty3BqRqJpRHfuf8ihsQrQ86xwppvZ6SwsVyX27gRZ1G1BU69ptLTmgqn6sjjqYfYG1XxU",
  "key14": "2kfzvRs8o13SN2oMnhGmN4TCUSpBhFozEwNSZ4YPLeXRrB8FoyDYNfpTXsQodgLpJgX3tZ1ycn6dL4S8YQjzrBHW",
  "key15": "4wtEMTXSVW6Mhp9S35CUY1SS8TvSjtHpgY2m6mMiu4gdZ6McnHbotkPsuwqf9JNng3aKSNAy2W3MdRbkTQJgheUy",
  "key16": "4UTDep8epNtAFpD4TtRYpab33Rth7diCWGANzMkXAKdpCM8JajyP4xYCWytNYEsPJt1Tk2DH7hrkDZK7WR486pMW",
  "key17": "5MM1jvaXGZzSY4adBqgnspg2TgSpdZFhDYfbqGianseoZYRV1EBcX7e5aCpCU8M1KgETTh2PyFnk7sBsgSbByGvd",
  "key18": "rHy1h4LGHqpfQ17sR9VYToDNVmDVeb3HH6tZy8NSDzGu6wMEAdpxmNGyJyFWP2WvgwHCVUsZPjoH43MSqpiW9WD",
  "key19": "64MRprHkqAZtq3XXv2MineBZAZEEkguQdyrsKKTB8ZtpTDxVKoz6Zc48XZEDD4cbbsj4gWNW4uLL3JghDhsM67eo",
  "key20": "hGbRAqRusbLyeY8JajaenizwxL6edGKvqhk1bTmGKcZxhtZ6JobwUYXqaiZjaUk8oWAC76gZ9fC9KddbqtVwUa1",
  "key21": "4FV8iYcweAxYFAQWq39W56Vs8RnXtvZQRjQA8guFMFsVFCQy6sapvUyCPMfWZG39oq6F76CtHKzSsg44omMACuRY",
  "key22": "4TLBEsSbMqveRaSeQTtsybgSdhdPKpHQo9dQzFbSL4mCtuBB4EN6syARj5uGk8pdMzakYybrEKNLKaMgdF31VDJX",
  "key23": "548psucFEKaG1qBHZuKVYYEa2AKWpdneRLzCmhkYKpZKmBcjvSAvVcRAgibwWzA7AcncnhcYfSqCJicVGLSScSHC",
  "key24": "2m3E8itrq66EkFphtCn2PWHrDPxLLgnAeDTjuSPVEKHq86krwdqg4ou3MiJmdEEiJ1fcYkgLUYwpy83uPqijTDGb",
  "key25": "3hWTuEYHAbvp2gwe19tfvje6oKr81rChF6Hj3QjuoWjZorLkfnTUD6fmy4yVjeBbyWKxq89rQKaEFAPgUcUksXf9",
  "key26": "3DVHXp6ZqpS7ozmwQoMsyEHW4TAWwcbUcXBJ6Jd71ERpkMXxjj94eYoCHaDM86LD4ZPCcLS4twvVSQ313JHN4inw",
  "key27": "4StVuKNELCTNbozUP2Am23JjZ4dTj1VcSKSWrv8zhxENM6D7NipZ3a2AMKBar1682sG38khyqzTzoZSsfGiymEq3",
  "key28": "3wRN23WJHRYCm74x8RmXHdaj3NYdvXacP25GjvjBBTcRHaF31y339HMATA9NkqXX9BhgFyUjRycTfcSzcWr58nVS",
  "key29": "2uKJTKmQvfWNsfLj2DwNYyFv9ne52gewXwUGhyfSYQCdGHcCBAwumhUWLRMHEZKfNsRy1ERk1hLAmTnfDFumMrJy",
  "key30": "25dGtMv1tFCBjKXFhx1Noc5BnqDnJw6XWUjikoFWuiCK71Nx8etPiggEQDdS6YiG2eLMRLAwXj4fHAdd4EuhNhrX",
  "key31": "2BfPG6NozK5HCdTrBnhaQApPRNcbQU6FNmxw8nbVDvoR6cCZ33jtaDxbcH141PpyHUDsUnn1DeWrPgvmEfd1RPDd",
  "key32": "57bgZt7wwcBSaE6Dd3y3JRj3uF1xBa4aFgm1TcW99u18VaLpcZqgFeG5UyNox8kDYMNXyfhBCBXzLadmk1bNdAko",
  "key33": "5gXXWtMeT5j8CvAPo6pDMgkbBfHmxrVMsjBJkokQm3sARPofPn6L4DFE1Xpira7dR75D6BC1s6wZR5WiQ4dPPsXe",
  "key34": "miu3MmPvauLz2X1DjL9Q1bCSgB4ZQsxg5nYa6LSKQpS42SR9RFgfjYp3TGcdkrxpZ4g9NFzFq4SegEmQm9UHpFp",
  "key35": "5tjwEZe5GREWEWfbNzejSYsFoN9FS5Bkp5qZEhf5gCsGmK8aHPj9c9teFBEupjwTxfCaNkfKGD1fuNGCzatZa6kb",
  "key36": "4zNLjTcDR7avRg3hmcwzR6i3btWKAsRo7rSHPpNixyWjsZjas3LbEmTPxadXBfZFD2ELLXwukxZKqb6kAU64hg9e",
  "key37": "5oCpiyJT2angeB9wfXUPJ7SGQ2expvmrrfBJhex5FpbZyhdLTjS4SYhgKPq2iBJHYN6UBz7FdwmUcGR6EMqTVAF6",
  "key38": "66QJwvQavkywwBYMt2TsZTVywcNdLn3wsSiPCb21RzmXxE7BUhxoeXANR1TgwCqcGjLaQiiLGwFW14b5CEWsvAMZ",
  "key39": "63ALmc4XeREyM72rbqEgEVoT5T1QdY25DWJU3pejn8NExk6pm1HynRzcEeyjxk95pwHoq1RLdpJYSuWijLSP171m",
  "key40": "2YwE5DFLBC4xYYBhC3dyjP334kTwj75MK3xCVS7kc3iQjhAzhZuGtTMxRwXyBrVDSPoYEj1Co4B2kvypwqjR5ody",
  "key41": "4Vc7KUZKkQ2TJentynMQAqVxqRe2hyYeFNQuVhnpWXxXJExG6kV5AviMnXcL9q7pKFs6HWpRYnGq7yKGH3ScHCiT",
  "key42": "2iWsm2xNJ4ND96dqJWf4ECZ8wDCimDx9WH3syfC3oWTHeAase6CmkYXm5i8aVJswju4zkCG9rGy1TgAFRm8uXFf",
  "key43": "sqKhCRbpMXTv4C9N8pMzayVaAizZ95Nk1ZaZjsFftD43qLFDkYzAAM4HDBAtyFyDoNam2nDdHdi6XATLBCXj4Hv",
  "key44": "32VzbbRAT5gKqDbw6sQUPdSfpr8AYPHG7vtZyQX1ybVEsZA77swMUHu7eiDEffXgPn8xCudGNxFVXgE7MfDuNp7y",
  "key45": "33tQsbgEd6XEALauetmHHuVzZ2FYmYywVuCSD6eyFPeQSvMb4JvxZekMELMKeLVGikvva6WHYakYGrRhipe2tgcc"
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
