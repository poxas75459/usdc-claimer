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
    "zmenTmUxA1uQ5zr5epskvCzTcEn6yP81UEjWABVFRMj9UYNJ6hEXEzpxppskJQt9YakV74ggVchsuP1z7mKihWV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YBA65PwV8yyefthE8Ypu9NWRYN6U7MH7oJ7aXoMTjCByDYX8KnYdpEgsveA48aRKSkBwaKdSTW3dq8mFL8cFnfP",
  "key1": "ZQiM5romV5mqtdSo5nw2EDKeQ1LMamjdgYS9ebNMqaxQDGhAM2AzmUuk516phQuKJveWwaPyRTLy1iudc4wfDYF",
  "key2": "36iPf1i6CozqMpjBzBJY2w1Nqt81UADPMqNbKS45Pe3SCgppvPE2gVxQpGubybcBs9mNHPQvrHVN3iZXGim5HChy",
  "key3": "2YwsFDeqBepH1VX5LKZ1ApCQtunPVTVbYsrhs684YR7raj5MnEXRCThRSZJs712ZQuxk2md4wVFAEWVEwdhVW8pS",
  "key4": "36gQMYJVzy6jiHJnzy4YiBVrX3TdckL7jdWjUPPCyMGnnDKzbtnvCVYvRnCx33hMNUryVp8ZYvhnPc993SbyCNEP",
  "key5": "3oxKpQBjzUZxjSFmsEzkwpAjcZ91P12SLsPMifdJT83hR7od6X2Pnm7tMDMZq9V5E96XohcdE4e1FsiamJUq2hFS",
  "key6": "PpjzLAcVedFsJ4Be5fSj5DFmYbQrDwa1hmJaKiqwyknARyjWwKJkwz32zCQNrUF123jTrjFBLvUCeVq13xeMAuP",
  "key7": "4kaLFcZzW3hpdg2D8C4pDHiRDp2jCu5LdJdsKipyRkcofY9xaq5Y3qniuRKqt7FLXP7Bgi59EgjkJ7QaTBzXKWmR",
  "key8": "5eePvmLexRQA95W3jn1nmJZ74ZwXQnfGbeJqQcKuSfX2BV126ssvRhBRDW5QEAaphRZSpXcmuN4iyc5dBxx1MLDe",
  "key9": "E56LidFGNLnpoywrgvcM7pS3S9YgDXrQJ6i4Lp6jks9tbApqVZC8Mcq92vRoWGdSRA4ZQbBE3EoiA15RenjPXat",
  "key10": "tH9uddbwCbt9bMqzBU1BHaVuynMzzUy8iGZXB3fsmwyE3MEHxHhu9kyfhLMHiyi6izPKbqoP1NZwJppehxmRhQv",
  "key11": "5DUzG1Td57fDN6KvjtCDFza24AX4oyx3QMhNjn4A1ZVuSsdatE8rexNqRCaVcmET4fy2AinLGTEWKCNnLJ7YvDEZ",
  "key12": "22snr7YqobgZptrZmq7FLEX52bGfdpUoJ22RurEaX7LFGnCqonifN6TvfQ9p73uek4U4RqVp8gCtJS1x6es1ewef",
  "key13": "36FDUycBb46XmSBjxUQteas6kfwCQ9cnj92aF5D27H4YRKeScRSpvuGdncfe5ERikVFypfmKtr84kLKPEipvWcBi",
  "key14": "ZPvAmQVfPf7qgnYau78os7bGRsHjLG1foWDRGnycG989Yd2GRJsSxbiVxxjJLjrSghuBmsaSyx5JtHk93PR9x2H",
  "key15": "3HEMWAFhPw6iPJKWnaUCjvba3jq85WvmMq29CBDCArbkWm4bnSSPGBVQ4skhoi8mTC35LQPHSdkRH7E9RazfzGgy",
  "key16": "3SAjqgbDqpMBGrgF8Bygv4pewZfNfk7JniRqn1zMhBWtgtCDD8jdpSdrRNYFrSYxZsCgWQq6BLqeJLTauP6BixJQ",
  "key17": "45tEK4JY2sUQjyH7khqjXgPcHR1w7W6mgqemWiqHng14Xp1XwnTCui46LYc7FWDBD5ycPbfjsXFc2J3gJhR9qW9t",
  "key18": "3d5a6hHnjUsJ1JEBrKKDaz4ovHprkkKPgQPTJmh8mHcEzbSTJ4s9mzX3AXNThQua4uJ9as42wWcbGWSy9DEgHmLu",
  "key19": "4xpyymeBpAD5oebsYMvFSKoNGvdaF6zJKjfdGVfBmQxwak9YvtSw4iWCYLbntktkmsGLfEs9GmpktB7DDPnfJAHu",
  "key20": "297CVKGTsNMxpvaaxvW4SisuFb95xhRw93jjkphqhT6Yt1TDvtWr4JHsn3x9fK8rGxNggRP5enXeMftDvzP674eE",
  "key21": "2Z9m3fioUh8s8vsapFKNVuYQ4bxHM7scUTkTpaoizJvabbH3goYvMt9yQBHP8JYSadm2YAMVj86nG15qGnMqqJj7",
  "key22": "W5Vip7iR4ZDekSftjfeodjx6FqCGiiV9vDtAcy8sUL9F84U4cYFUsCbXkJ6zhqTXp5CiMh3AU9yXXHFY7cDQjT9",
  "key23": "5bzgU9pB3s9TLUXH2Bjerw64p9zvQ77envvmS66yMfUMGNmJZpP6F4eGBZkNH5yTBVh19WYeZL4u3swFyophWNVJ",
  "key24": "4vzNUejPEn7hqcowwFnch19YJbQMPWFUsmD3qi7HTSUFXCudSFo39Nbib7EawbdQ8uXEqvZ2kHCDyAi8ifbgSoVA",
  "key25": "2x9WPSJJPhFqrszXn3Ta9VVSn4cLkpwm5XnDB3nPfw5rnWXoQkwgJG2pP3cTx454vDmVUZMUyLCJTs5oiRoogQ44",
  "key26": "4zE1zjg6BLWHmLQBrtK5bvhfGuFspKkFD7tkuHAnDhNcxPeFDTdP4LTnpD7BiPEYweAuxRzZA9YezxzCL4LKNyc9",
  "key27": "4bda4GUb8yJwrfATaFsPyinSHxggXLzYgJa4pHZYRpfZusicgVa3GEbRRyRGws6mS8ogrJmm5cTofX6apvCksx4u",
  "key28": "wUh6S5iGhssLwBudLUrsPS5oUivNFztSTBr7HdDFAnUHjwpsHWeu6qsNzgVQKUoLzefciKroBiq3LPJHf6FFM98",
  "key29": "2zZJgxWeopAGD2D7WVmQbUQpY1GHae5aH5D2tK9scAfQLv3ycywY5jAsinoio2rUYXQwCVGGdSfCtST2x5DC1Yb5",
  "key30": "3wdnvhxJ7nSCuyUJfonukJcZjp35W3civ61fzcM88PPCLqZ4LKsqfFoLcoskKVrHRbHkbB95wsohHQh97qfrm9JY",
  "key31": "YyDdEwqerjQuy3Gy4QYaB62BkrigfDMteFw41kK2m6rpVi76R7AD31EvSEYAecc1XG5oxcEXGzeeCYS4ritvUit",
  "key32": "3ijMBtdENCRS99VEYk9F5ufTazqap1RCQbX2V4CPw7VZRudNdVpScdXjPCHfBgC9PgoAfWtxWQsGJtpr5MEWA18L",
  "key33": "5WiWf1Jop5LjgeDADarcVTtVtH7zBHBMymW4TXjTKhhRccVXpbB8LbU9yt5Aw9A1GepF1SufxBjkpDX6z1n7ARpH",
  "key34": "3b6gMyM4aXChs3mdEkQZCTfdj5moHgmKwaRjhdrY11mbgQJVNPwPFvqW2LLw8Ls7eXqRLFY6TXrQv8Q4AZYwta3p",
  "key35": "5DRVWmx3RJ1ZBi36U3e2AkfEfdQ3srsGv5SuQ54eUhyYbRo5ouggBs5v3rGp55ReRbd2de5pBZjjpBX4GfeZWSra",
  "key36": "4n9GC17ood26jsXSLbPhpAwPyXqHVszPBXaqhHkR4CUmL5ENUCSuCwxpTmPzgNwxBa8Ap1Ek5EoQVzq596j88dhK",
  "key37": "4u2KYh7MfzyaFDqnw5XomQkFrJiocxkPTpSCQrmD1G3txAFd2iwKS47fVMBxmqgoyDB2bTydu9AQatED1sMtk3f3",
  "key38": "2i8KucTtM82ccticRZ8GAmVXRmLoFcSqMWcw4A526VeEpLD9Yx7zEgR96V4wtHLYkFJ8kRZbRmdod2hQwpFhuuUh",
  "key39": "4Xp6VCbpfbjsC3xtDwVce2thY5PGoUSVtPh8fW6gJFdxXJHFUbsrvRL3rQeTUGekuhChTcxRYD4xWacWWGoj6k2r"
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
