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
    "P4nn8961kd5Bqh3AXYywdcyzmWxWhceHFHmPraoiKTBsKAcbcyqFXjy3mPzUCHXJGHW3sTSSo93btcQSEkoBR41"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "u3vjb2GC29h2SurdF5dFJ5kGUoEmkfbhcqjQeR1sjjAcfsPGZwo5NNZaLfCDSozfbQQfRJxJWwB6hXcPtmzGwmc",
  "key1": "3Tf1jzjye2LAzUuCXdSdwXQgN6Ju1w8b54mAuSpgUYoGpv5MpfCbmqz4611myHGcJT1SqWWfLdxMoJc5zUf7UsV2",
  "key2": "2fEWcRHzWY4YJmcjFqftXMyhub7HPDo14KByaeSDCe7TqJdKvp5kxiYGz9ijuKRjKLWUQosPuPvaHv4zFE7vPXHP",
  "key3": "5iaEqUv7TuGdiePLWGp7wsj3qLcgC43LCDsat2KfCsha7MhHVmHWvwfFg5fjEbpZ5ohKr8LqNnztoX6rHojqjQuW",
  "key4": "5VoQN668LkgvP4E9bZmm4x6JFMPaFF7EG3Psfcuht9FqQtJLqqrd3pPueMorve4PSszkSGsg6xwdMFwCEcK3Enup",
  "key5": "6YTugNrK2fqBmsRqxaLtQ2JrtUQDHVFJEFD9W9j8r3AExSXYgjgdrkBuwACbHKB8ver4JPGyPRwKLQfYU8DeKhh",
  "key6": "4CBi7g3Ur5JwM3xQrcaBiYdR6UAsS3nbDCHsJ8faskRb6JDmoG6h4u8zxtTnD269qhLA3NBbhMs4Mhp4w24dPBH3",
  "key7": "BmF6LS8QepoP2Ar7DMTHtPNgGd2wyUqMTwipQTXWGtUW2RcCmgSTEgAMxcsoiYfA6PfR4ktJXHRXGstXnKdkJAJ",
  "key8": "G1zoKirDXGVj5DGyKXiTLXcMBSJSVick3KfFTGuYfa1rWc7WdwA699j3Xkfnj7noUnqAezyBdFLhruLrsm2PtLK",
  "key9": "4DV2GrhPVd1T7iw7ETackyZm7xbnsrAw7nzh6QEXCvp5TkbRAhZsmFB2LiVuZN6FYgjXY33rk2Ntu7pdKosCqtLq",
  "key10": "294TfvSQD58eMySv2rf3osPCfQoi1iV2F7d9bqP4sfuo8Rp5Sy586wJT2KB9iYjxSMDyDYUCRFu2cB2NGxmH87xo",
  "key11": "34nZwT8jdfEpZEENjVZu4mddnKWJov8GN6u9y1i4uGb2yrnJb2xkKji7eJc6HfLW1aHXeP79kuHP3nPeA99evHs6",
  "key12": "2XFvwojq8zqcwekAJP2FJfftBZVqHC5Hxu4NrmoS7QnobHvGVUvT5KevwTuCdQjNuBmX4mybZ136vnp7FSskeHgS",
  "key13": "4HHeFGwKeH2M25ov6i655cmKbPwA252X2MavV3fsgSNKZ4bgZx9JWWH8viHkJWv324QUfud76Auznd2oNDPs8Lca",
  "key14": "2eB5n9y2xsokjSq5UvMcb1CMYsWjqDQSFtSxZPsHyrpFFEwK6411T1fMD7v45GpLCqVsdLrk1fNsi8PjAVwmKwG3",
  "key15": "5NDxsU2jkvNtyvtzZ8rsbEio8PZTctLv4QHaTpKRypxj9R9vfjMBeisT1HRvFXLGuFwXXsMDENMJUcduWTGgVHN5",
  "key16": "21SofqDkcdi7YuDqBznrnY8BrnvF4urZ9fDYWwtZsaiPiS77BMxR5p3kyz4zVPRpUrwVJrqQ5gKwzGz2X9dSiiyL",
  "key17": "2fs6mPwbXSaRNeffjsCSw9NTXZBcD2DsGXe2MFEE9bntsEqgbNyVGjBEiVtKUuWCGvYpU4UiWAf9jyUg2d8QKkTW",
  "key18": "5EbaV3Jssgu3VVdhUXJEH8kjVozAhGWds6komvhGTwxk1KHGsw48y9pMcWXrgP5Bb7oqV2LYc7T72fxGwwkQx9z",
  "key19": "52DnExofrcySadxj1DdCv9DPiPYoBZktpEjYfWQrGAgYi3kBuhq1FbYWVGfTDtT4KWyU9JakDbJgVC9FAER7vQaN",
  "key20": "568ecB1rciTAH5HeJcdkod6s5qiVbwWkN4riEq3sJESkUUgRHMiED3pjxNwJZkQTRCfuBaxQHXzMBEcudufzTtPL",
  "key21": "44aftbhphnmTUC5upUcaL5e26NpY3Ww3VRsZdkAZSyWyGYsQxwkn5YNNCMF98VhF8CEHW7fjYmrRVJdyxU7dE7oT",
  "key22": "4BNyHwC9PEGoeRGSMJNQfiP7hFDfwoEdK2RXaAT5r3NxC4nHJLU8MKmM23V7pm1Rd6B4KxvrgCmQgQHuT5q3i9SK",
  "key23": "28wfCGPTU2sWE6dSsribNk8117hXdC3qgggAjTgPajWWAonuzZ44Pp1uTsto1xd1pnPDuPLZRhtwdVNGe79vE272",
  "key24": "3VroiRnkx6HxvQo6CcoaokvAQCoeewVv54C3Rbe1P8z445AwqWodvrCsrzGzeJa8H83Pbmn3XKgArQqMppVkkCS6",
  "key25": "3DDQEG6SYB4y6QhHsD7CKjvp1bsQZXpNMnva6N9jmtH1R5p5PewbjwxoZUJV9pB1cmZuVPMvovzj7J7EEuQZSFUq",
  "key26": "4yPNZpxQN196nQQw1Qkv1y6mpFwMvbUbJwvvB7yf79faUTngvpsiSYEjybHMiKsuk6BWAm8moYNrosaPvazTSErK",
  "key27": "2Q1fA9fzhUnBBrDJh5X4N1qezva92y3wK52Z3cZfxNjLLHvAuhYifeh5bzqBZpJ8CBS9rKHM29QSnS8spxUiE3MB",
  "key28": "3xFh5hm58hovpGFzsihrUETNaQaHrvQjGQXZP1hYCzMe4NGtis7eBcCXQMFK5Fv4qMbvkNEfDS4byaQNnipbfJM9",
  "key29": "62hSoAsNucBTdC6u1c8URF6NAfATcZaZBkVs8rHRXxAVpuG7h7AcJqGtouMDJroQcssjsHWuN5ssrhkxAhoHkDhs",
  "key30": "eNdMdRFHgWE3QzoEczy8XP1maw8YSw2wKWiQudedg2MsXK5id4wVovTZHkHC6UjC7nNWLWXe5NbBuAWy7fNNz1a",
  "key31": "64Fe9NLQvsNbyKwr5vCSNGrFiwDb5osHTLrbytRmQT1rbAZhAF8DxrAbpNDr8FHgmLVE4BiBca1Sjr3NF5Taxque",
  "key32": "5z4f71DeoZmNFJY9TntcV4sAAm18eWfd8xsxU5KGh7mMjfy5AnnM6FTxqjTbximsSEmnwpLqKWr69w4Du4FNNanm",
  "key33": "219Hk3Ngesvx3GqJmxLsSWwQrNebG57MdvmdU1VJLqMt8poCfQPL6uTe5ZF9zDouPiUhfTUhQe26iG6DEkLEQwRj",
  "key34": "1sMDbv2KUFhnPyNoFQM1eqvGgwKkcmmL3EMLFSz9N3ecAYDwZFWvgKvCT89j44XMzd2w5BHmtXzhcHsdCEjJaoH",
  "key35": "48RqaFTqwMqDPotEALDVQQoizU2dDyBc6oJsoDJzBo8FHh1wxm14YrSgqErCof1EPmK38ec1zPgGiCHCVGxDPapU",
  "key36": "21wdiGDSYCfoBwFqQPRiYyt9QQaZvSZXu7M9Y4iJPUFgijW4m8WLwF49wumRx2AogXfFznYVKQD8ystwoa97NyTq",
  "key37": "2MoUbdNq5WbinoSTgiTD2apAKqfCvF854ZaoH8hJCYfacvMGTqRMXV3hEc9iWssoi6VMUy6xt6QLy41nhEc1GGRy",
  "key38": "3Sih3ynAK59AsembXbXeZCiZTz6EtogQCA8C4R2KGMbpPi6r9ejn6rsjXq3QCzuu4nuvXzYUF2ZUABcg8fvg2ppv",
  "key39": "5gknVtgPyDRR4SgWALu1S5FTyS7bbjEqLwoF4rzbpkDWrHmUK1EVEGm3snyY4JizYUTeGw4wTtdMccxxowLSZj4i"
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
