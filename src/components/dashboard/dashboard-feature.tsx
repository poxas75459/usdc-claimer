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
    "2HJcn9c6Skyu1MpZT5jgHa3Yy52uVQtdRQD1Yp1hgR6GAK2rtVECpKKnwWc1R1Tx9tbkf7XWy483FJpYF8n4FPfy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "toGMak6RGfv9et6nQaudXv6EtwSMuj9jSwsHisEgigGZ93pyBmCLryFVvKWs2twiQmXL4GL9D4uBKriCv14HzLx",
  "key1": "23WmgiZaPhvs85pKU9cydZBTmYBCjwhrJUx2p2CEHgkkMxmDD1J4CXa5opT9pjcwSZP4xLqhPZDk1SLdbQrvWm4u",
  "key2": "2UR8r4GJS4pPRHVJFSe8tas1PjoHGyyFADoZ2XkUoQWVeM84kBQkebLYtbKqQzoqt2hjGvdyq5twLG7d5ptCJ9k8",
  "key3": "37pytkVjca2A9djmcqcV7jsXJVgEYJ4FyR6BWhgrD1umPcZiAw5BwQhxDFmZyMxCWgDNTVwi23N8w15HPVPJZLdo",
  "key4": "5TySg5CWPFr89pzNeMpPgjffaELStHRWnvh816aBLWyxnnogJ6YZW8MXw2qhdR2S3KrLCHoN3cNsJkNAWGujsKuv",
  "key5": "2DucBAHwrMbJQjHqTUGJohxJJzeVu8dYfMwaRndYTsYGTeY7Fsjpv3UDPJ34hFwg8BuTknfP4QqT3LzPY6vrE53e",
  "key6": "4qpUAVABDeeP4QRARRNi16GTJmnNziDCLXZCUfsMq5VxcNYG2HLAYEytjDWPEkfdzm8XMx5keDpyA3Lzy9HMJqEY",
  "key7": "4t9HuKqmLm24UFpQ3ptrAin7SBxB7MjDQ4weUVM3kuJKgrNTQ3dqdpW5pgM8U7FS1Syi7JzZU3Xh6fpfeEF7B8mi",
  "key8": "2gaZyVzqM8F3FnPoz4rfdFLMNQaoANtFrKmpvHqBF6XCnCZco5ScTjN6hQw14kfcRJ3qU4xopJP9QEwUTrb5VsNH",
  "key9": "4Z1tKdY79fdfVcirRkU7EYBYQhcWyJKyk2ndH6FL6UFXkK5tJFGHxGm2k3QQp3ZgFSbz3N2MYCmq2Doj6Vkx3foz",
  "key10": "3Q2zcifFtGATZV4NPqXerKXA6ZsHDzqkvAwRcF3hPuydnFQmUhn6Hm7LQbjNbsQTT5H2Ev1unYTc2Etg2rP8482d",
  "key11": "4YqHFJTPvAhtGyTbpPDLFnAXatMwXGBQjtztQsgJiuhfzASGgmSPVGs1UfTHWD8yGBDvJcrQZhSNjo2vLksYVsKN",
  "key12": "5XH5MgC1t9vidzC3nGZyL8MQ5t6wsddbVPdmY6rcRj3mBVgvkY96oRXFkWVubUKj1P23ZGFoPEwNR4aJJWxBzhQq",
  "key13": "3LWckNM776pa1usfWoUWXDxwQTptuGZF7KiWfZgtVENs7QqLSY1aY2g64V6DXZkLEvD26gedqLFESWnutzerWQBw",
  "key14": "FZBXRNSoK5w6MgupGL3KXxeFBCJPqKAarj5154gtGE2BCewKRQEz8PzLG8f1x9fh2Za14Y85JT9CwVoWQfP3TGb",
  "key15": "HKVCcd3cQKioL8j9sukTzg6ptvYbwPb5tCYHxKS9oQi5oAjibpwM3iYdWHRE2aetaoBpp73u9VBNb4PsCbEz86X",
  "key16": "6JN8kTYn7CK5Ltc7KKgtMikGj4gGMPZPxsieQHggYzYPLKtYasoX2x7nc9ucSHYnrhxctHDVLLad27fvjvJsNm6",
  "key17": "31JQDM1dSGVt4oD1ovDzjo9iCgxhtMQ3tFRqJQKRdtDH55jwzqwES99cscRVsyjXNJsBUAQy6cNB8e8wSsqeMud1",
  "key18": "3HEwjC2RE4jsGDmMnvqxuuoGe9QoiZPDheByZNaBE7dUXP1tnKAsQAHehA7qVVUQLRHjB6vUH3xqfXR7z1LYdr35",
  "key19": "5YxPHov5iz2KZ5FQkzwtgwuTBX95k8yXdFAMzRDBF4L4LZq9U8HgDa4Xm93eCyzEvo56o42KdrXzkz5tdLr4VPrx",
  "key20": "4DawhW1ndSnP9B7QbgZyVv5EEvhdJJs3FifbYhJkL281Kys1FrRtmf9FcbdRTtUQ3UY3rF3SRqGPVEu5LpYugywi",
  "key21": "3WVPuVTBEykL9zq8SuVattkrpU4RZFKNdLhBNYEzbUKcgQLYcXMRntnTz892Lk9h559VNVjk1bVzMABTxeNGKkG9",
  "key22": "2NWkoXtYYa3de9BSdHNTCDqDRGzaBVxQc2uhFZEjiZ33hXtKcYxRcivos7PxuC9fgiUA4pskaQftD9kKkSE6fB6H",
  "key23": "43TyLVXPvzMDrRXeZKzg6LNZYhttYMSi33W9t7upKvt6hkVou1U6zukcxTBdDiHku1Lj8bCFLC4Cjjx9qEojrfXR",
  "key24": "54Fg4DqGhX9YqThxtuXcpomnWzNARMo4E2E5CczeHj7Hw2HrZ31o35Ly6PUzDaDisB5pqA5GdmMNrZJqZ9cQGQwj",
  "key25": "4VCa9JFr5bCaMLRGqpLi1UDhy6VNiR6J8MAAMqDeJmtbX5SbWMueWfuB8BrZQcrdSxDr4YQDKZ7U4WdWJm6Hvbxt",
  "key26": "36pS4VFJMfyWdJjEgPCUkTj3StCDPd1VWrXCirWMLkB3fy8Fr3swVVVkq9AkKRze3UJCToXRKQzLMxeq4dNt7L6o",
  "key27": "2JFbq2cm4XKcVVV6HMgCeAcBGxPnmVTEPfoYqHwW4FJwFvcMH17E4k7yeb9m6bpsxFwNVvfGNhMWYMVzMynTXd2P",
  "key28": "5z2ZuoZ6o1yro8ynemPvyjDtZb2GAYpqK9vwVqx8KdChkT8LH8cjjq4Yy7BFqtDxgsrwLqob1CykH9EHYRGfFf12",
  "key29": "5qbgqzTpYNtHtjNoaap1Mts4qV26coMwzDHU1cxcvTAYFe6gNo6mVB9oCuNo3Rem54G5L9dntjzFDhG2FMMoNCPE",
  "key30": "5BHhFJnLSmp3azeearzWaZB5DW9cNZBQh3Q7jCRFsgACLR1rSjkpsFV9R6bdgXRPykMEQta41vzak5R3zjmFdSRE",
  "key31": "4vegeVJnzbpMTwRQw5v9M5jv9kvPp3Ai5N3TC1FgdiHYm17LNH51JSA5fqPakeKoxxG8Ye3pAf9k4YHSSdycruJT",
  "key32": "NhXiRf9bboyWxtW2v5qTAe38TYT83tnaXz3QVxNE7tDWPf2cG1ZQ6877PwqEYPqdoYCEZdGVkEfucm6jtNtd18j",
  "key33": "53sr58wNK9DNVNgXT6BfgeUSUBftzpgrLhpD9qm5Fb8hmsRRq35aJXZ7uModhkgw5WmbxhK31Kb6DUjeEB8QdYuu",
  "key34": "5KDUScdnhJrXagwCXZ26Xk4qh63jyepDV8FUF9nWwASqijWce8rc7Stsc3FhCdXuJsu5cZAceoW27tCx3e1wq72r"
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
