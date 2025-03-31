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
    "4ECPSvEm9yk74tsGLn7aZjxD24NbYwbhiAwyW83J3T1yFyxx3L1CYEEo6cL3bJoE9x6njSwwQhZoHxFW9xWZFvD9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VxaqznwAsrcpZ7qXwQAXUg1ooDWHJuJtbHLhYx8Up89iiBFEUneETKthGJq3t3Ur8AeQSZnzHo88xLG44dZfHW2",
  "key1": "5ZRNyAqeVG9kQ8Cp97tXW3rYVGCBA47Vypvgx7qGoYyFhyuHmi1UeHBDB1artyW2UDS7iBAhB7ZuUGpVtyRrcbSm",
  "key2": "EhXfQMDkhqRP89iuQFxHwD8hEtBLcMoFP4tGUaczMFFvVpH4nLLpEFY2GA3cCBRgpUZtH5WQZrgN1QumwYDwC8V",
  "key3": "4GTRJ34ELkiiv3KHHcDiZ587uFxAFqptmrcVq9VLZdNQkZUX1i6d8kv6LUL6bor5J74Zof4C983LzG3WXtTyfcNX",
  "key4": "4WAbkYLqvWCzx5Zq3UmQ6mZtecAf2Yt7R4yisyXgVE9CfesTgpDA4SxCPS2bprujhgQzWeYdxmryywh4jQae15EF",
  "key5": "3mdbdDimLZ1Y5R8ehv1gqoN7jyPwmK14gZAriurhdejJ8uQMtYkr3VvH65YNxw7KWTa66sHTo9PaHLZwQE684pyq",
  "key6": "3Y8UFP3JbBTnr133mHSJn7DHCpuNNpLuXtPHQnjim7WqUwYD4rHkgkcxinZNUKBSHPqQZ7oMVoj5FvTgngSyXk9m",
  "key7": "dAEETx3E986dXsAiNoB89eRxy5z2bkYBTN8jm9JBiJqbZvoEmrkGqAexRndTxj4YHjNoStBXEyz91JobwQoo8mA",
  "key8": "iH2WbDaCQvQQE9M4MEM7uNEiriWc96dpSvzNTEXA6a1XnSbC7mEKXrVR2ndohGjUXKhiURsRPVafVnz2rc2TZHB",
  "key9": "RgHxD52rtuUrDdeDhT1PfMEdNgyBYzYWMwESb4v3xugcVKGsZq2JE8CJDwvrMRimXHoQkp2MU32Kek2Ve7A1nGd",
  "key10": "37PJPw8HYbX7ihP24JRfDWJsxba5mmRSX7ND5XF2Z7744kc5e2F1EaSds8DBLHcfnWHiuZqZbKnXtAJJCLzXkS4F",
  "key11": "4QfpV28Q4AL5Zih5xM8n7PjPKxu4b3YXkx3F1wQSYhicZTVyDaSxNHzhvAQ5biZn2x6B58PFPv8VPCZJWPvdowsE",
  "key12": "3Pdr8yptYQfxQezGszGMvMYUT7aJV1QyRMYwFo3fYpy4vubxgFJa3oQCXJxqC1RWVRF3z7VdzLBDC3LhqncQ3Kpi",
  "key13": "4saHwjwq5U7zbtmgPiGAYgJ8k7AE8nEx53DfeX6hXmnfR2VFg8ztZ33EhEdAP1ii4CBWrgjZjBCHVcwdYK9Ej23g",
  "key14": "4UkiK2bpVu2ahSWjkFk4E6SSbkW7ZaB9w1wrX7Ed1spAopeFCaytUWdfaAdcyNxa6L5YTZ3SEqxE1HPV4BfX7usX",
  "key15": "2n9v7JKgW9skSwPipBdpNfQsmu2LaobKmbBXqCPDcWVpMH6Fdju9kgi2M13wNxX9SAfhYfqxnNDfbyeDcxegqX7z",
  "key16": "5EsSVvXorDXVcfKVDyPscnPhSgb2otJ1i6ig384KSP7jWP2meKC2fhwKVYzk61LDacU5cQgYcZEpnw4XT9uhZSH",
  "key17": "2uZrUw7NESeR11RRLgyYuVw1pxxoi4hXT94oryHnmLBBHcwazhSPNyArYqzGteLNw9pMkt89KM8EYtNyqU74uXzk",
  "key18": "5Fr46cK9hz3iQAJbMzUfA5BCyfeKwmMLpenX1uvxEfvg9K1JaozH8HUb85d7FQGVzEyoh1m7apRneJToYZnNavM1",
  "key19": "QKPWpSqCz9ueuMFk3s5PxgictFNWSBUEyqv1csiRZARacBUYCbNuszRHkTLdYmYB3uf8HuhTDCac8BAanppieyt",
  "key20": "3T1Z7xwFh6zW1CqQ362nUkQJybFeQ1vq9QQK5U69BcbDbSipD8b4CFhpW8RfkBzkhUSxumxN7XETQN7XBRPtrasV",
  "key21": "2XRRaDXVjU7UXvFCpbS9YmwZiDWVbokgFLQjZGNxkbfqEPaGL1rAmc4ejBy6BKUEUhCyH2fR9YeA9CCS6BqB48Xm",
  "key22": "2Mn29Qr48wyUos1o8BYXu3mvVysfCu1vqF2CK3b54HP4HLMF1UDbJJHZ4w9Ay2MPsGJigVKvyJUcRmagqEtMb9Zm",
  "key23": "51aZBpCn2TYaHC8XJw5P7ZEU94hVjY61LbH2nrYnMkKDAHxJaKXYepEMKJwtHPYMf1pS7JrAkc9eyeVcrXXxsRr7",
  "key24": "292C8iPKCw4TSEYS2AANs3oebRQeFqHvvECRzo4qUVZ3HRmbx1naXoDGBbtwrGiwV7RjQFmZmB19PWoFC3EPwDP4",
  "key25": "5vH4bNxPBLkZeMPXg1F7CjudDRY9HgTvuoeFYNgZVYySy4C1cJzeRMuo5BV75peQcRvGXadqU72rHfSHtk5jUteR",
  "key26": "2wgfPqeyPZCWm1dVJGiqswwr3dWRyV647nZg4cQ3yCRodW5YZcvjwhsqAL3cAuvGMeizneyVn1waxycDxtuSSXCT",
  "key27": "FDKdmi8t5p8J52Hw2EL94Q2e85CkjZfp81xv7EoJg5TRBzjsr6SNP3xv7K1xSE141Bt6Uumc8DrkLnWzz41boJA",
  "key28": "4kjL9nhkKpMzUNdKttrfYdazEqVBXsR74r98A79fp8aEKZAxGBuMcgEULgxBjcDmCJcBSHQ2BSx47xFdoXVfoE1E",
  "key29": "5Sx3tiuogqLTTjWns668NfxngNdPiNB4doQsS6K3Aso7z6WsdkdUaJNFbJEqTWPWRY5kQyUPTKymk2xmHJmRFZ67",
  "key30": "wXDRSCtW7cZKkwqCoW9U4gGJjsAkW3VxbPwfmVmXohUtTQEv7QBbDE3A9z7FLiDqFJEyqGwpCUinS8dSmYWnHCj",
  "key31": "49nY8FenncLn2oukaSS5TKF1aFF2jYP5X8UxpV8LmMcrrk2cq4qNmMrg7GLdxuAvrmSVsapLtLgtNYhztXfjPuVW",
  "key32": "65mP6dRkRSSkVrodVfNKbZVijvrtuhRbvUyWaj1kSyvV1dgkH74nq1tmqNawfNvYY1ejLuzGSMxUx8cUJjvTyyKN",
  "key33": "2ftFm3BkG75FWQ1V5Ds4ogHNehwfhM6cedetykTZN1p1fBWE7x7rs1zENKCd2dTJqDpVbS9dXXTVgVBufAyp8F1f",
  "key34": "44LgzhmrQU3J3qNcv67xBzvf6XUTfoy4NTXr3KM5kzWnz6ZRAUeMqFbqNptjjUGQPAbsfaYNS1Ev2YdU3LtZggb4",
  "key35": "hpqWaRovuiCK5t3ryLknzoke44Ran5JZEzjSbC26zG6CqfdbLd5m4HUuzzUVTa6wsVYqaaarANTWp68tfWSQten",
  "key36": "4GdqeyAkQ5rReqrFQFXoM8hXKu9yTgvZbAdNcNAH7PQBBFLaa8or35Xo2E2F7MgDcowvP7P3Xd9eGJAVDQg5SfRv",
  "key37": "pCbt9ZpzPnmvf9marA7Y9pWrhcd7VZGPHeX4AJGiiuTqY7r8Ub1uC6VmUcw9yreGUET1PDgwMQPZJXeBzp4TXZb",
  "key38": "5RtSFAYGTrg3xHsAdeasskLp85SnLUhdHRq2S2gtaN5UdnJRHABi7FECQwyJx5ZZEKz5GBdhdwKdjftxca7R2KCc",
  "key39": "5hqQKscqbm7A3EVfuh5BWFJSD2ATcZe9TX73gSjZYPmbunRsCfrMrkQdTDRmnKCKF2UWtRhtTA2pXAagXNM31U4h",
  "key40": "53tdSbP2g3G1czBxokdU2bWzxMJdUBwcTmRt2H5UnYfKMFmzoyWrApRmkUHtu4rLrZYX3WTgEL37BDpdTuYZhYwQ",
  "key41": "3n7SHQxykJBAQaExerN3a6ukuRrBk9Tu27Xx4vPFYGzKE5jG6E1LoA6ttuRW8xUybkF7WCAT4vUtCMfBYwySWud"
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
