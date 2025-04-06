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
    "4hXs85qygvZXbAAZTPHMfT4ZTLGenXCwf3cU5i3tEmwvMt2BJk6XG7i41ByqDjm2EjHcCPq9PgDxvZoue2tgXVg7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wRym11gh2LbWCLrgTpqUvWu1eVVeZEUqFxUv9u5p9aKsVxGu4Ff1UYRLi33WtbDRFy4U3pHxW2RhcGdWmkhSEav",
  "key1": "4SBmsRF4SSUqh6LhYwH4QmSR4AaikHn63VzJnxXquzbRbdysi2uXLCekWTL4pDgFhKJDMygKgit7XMgxY2QUDCfY",
  "key2": "2uSs8wJVDXNWJaWGD1rJJnV9eqvfGpVbfG3N8CxVEYWcqpL1n8DemHnFDyWZhtCuexG9w38R668kaTMFKxPAL4fF",
  "key3": "kyWzsCa64iUJA5NMZYt9j15CSF16gJ4eHMVPrd26swtCMWzZfkdYWD2CP8LLKduesopszZ4rTmwaEAaU3nHowB4",
  "key4": "3N6yaCxApsR7J8WzCDYgkFNYjXdua7S1i7NgcRJnsbkwgVaW4QrXig93Yubar859j7riH1z1zk4yo67kPUxxzbmB",
  "key5": "5sBuHUaDet5Wq6KLJhbyw7kXkfWsezJbLrqmKiWe9wi1xZSMLFoFrW5kWd6Pj4UkqzojFnWxELqvCBPThA9Px1cV",
  "key6": "3TeTejDDiQU9CC8WeNDGjXRPFmNWeo8JoHSM3BThbgScbGNvfHyi4sunzQ3Ttb1rEdBneAqLHZ9uNTDy4JE8xQjS",
  "key7": "5Rx6dtkFEFXaZ4DvofpsbFdsXtroMdYcFh35EnKZBFykt81CmN52MC9HCLxysrjdv1QNXqfu2dHqSAKnvqSNJFk9",
  "key8": "3aa9UgWc3EjhjKrgEjPaxAfoXxFdkuJmESCYrUBvUKLBFPPTKf9qJtNa2dUHrXX9eoNz2j79BqSKKtrRZsfiKbDo",
  "key9": "2b6XqgdHBBCg9BGCMnzYfXmts5C76vCZXJExNuFgxseHPu2gszdw2vpBxUkZCJgs7U87L6YFvqrZ4NiLkEDGUn5o",
  "key10": "2QotJPyo6xGdE7uyQxzHGhKnjDUTmEhdfHFUxqdJ4xEjvZCYH9pgqzhZj6Xkn4pRy49ekHtqvjU7wKSB3o7KeRsG",
  "key11": "4AmPo8E6bkA7SBzKaP4s7GkRuGcx8Xin6yGAzm74Q47S5o2Q7gCm14ezzfx6Urh9VNxhDsfY72etQN4QatDEbW5d",
  "key12": "5G1PK1L4mdVM3q2Gn1bX7kACiSaxavViiypwbvuUv1gLt1W6nS8zR1GHvSBv5uD7sjRs6FJE6cXtE9DUU8wappvz",
  "key13": "65TnjArR7gD8qkJAxc742paSiffDvvQha4mRG1srjRYaKgWVrtqGQeJdKQF6skzjvQfoHk7ZBBfRxEv6VZFg2CHy",
  "key14": "62xwX9hrEWj34mVdcmGeXHyvXhyn4d9HLD9Sk6RhACeniou3aVetLaQKaTfSYCWxmkY2aA3WQ5iRc793DaQx1ZvD",
  "key15": "5JU1RkN4j49MoAPVgsdub8ueJx1BJ5ibMWPe7p5EGtimiys9TyAoDzdr4YcGcH5oqh15RWURHAUzhCy8Uzri63HR",
  "key16": "4Q1qrNaxhetvfE7EBsQ4iojUc8t72PEyyhmEvKY2s5eeQuzj4cW8P7ear1Lv6TvUZur2vY846byy46Bsqr8geixG",
  "key17": "2RnhZ7CV4Z8UzNfhKQVyWQLEEbSbDt2A8MTjwZyCWRu41wbNrhZVv25R6iaxVuKL4wwJ5GZnfSd3NQZE7nKGzT5c",
  "key18": "5K9HHmoGjfTLNdNrwTjbqWpFnrByEdBkJpfKhiQtb6CWQhRBtsCsPznp6JBHtARkr5K7Pi2Yamaihm1qjgbSPfsy",
  "key19": "2Kr4tHGrYY2YeoUdZ5T8HYPSi7YndPdANxraDRN5EbdVbjEHLDcKvXsstxuDNZnYJuuEuCWDosGqHSZW4G3giHdg",
  "key20": "5TXgGBiNG8qLqtRdnDXu9UQRLr9Rd48qwUzAkXgT8hGV71SVxqQjKfA2KFeoZXiYevz6jMoR4TfuYoaJR1xcmtHr",
  "key21": "4AH5moGfHkCD3B1cuFyiyU6uKATFTUoHnGsjJstvwQZy26V7pL1VPrQ6ucXCYKHTMNgU3oeRfxcuhS13EtbBB4Aj",
  "key22": "8o5dPHzbEnopiCEtbvYcijgpybMfDpVHJ6B58GHxUtveSGVU6aPqM1BWmYHzupULRyQW3rbcZQ5QYFAV5NkSwUU",
  "key23": "2HMtdtJAWg2c56w3Eg6cyhiX3ahm9goH13jm6Z8YL1W7ySBRBcUCaMkCKeCgkPFvvfD92cYHrRxhUcf3UugYNNyv",
  "key24": "4PuDurpWkzMHQ1jFxgPHAQdUBS4zMx3EqcKhxrVbGsec2mrX4UMr3PAyoaaEEWCk9oHRgeQwVmVJhyDPsEnNP7Kd",
  "key25": "7Z59yiMXpS9Z44p3SfxksCtT2tjHHQGzXMUPv3AM2R8vzC4yidZKatshptZLMqdGmHeEyF3sHiN6WPReHFjYE11",
  "key26": "3ui4yUPqFiDUietKSHx3Q4jRtZXBJkjCTsHq6ewiYWsJdBeRWVxPWDxqdaH7TKEvjXYkoBp9f1yqMPoDm57xs5VH",
  "key27": "3By6oFxrEZGrbXHus4j8ZiWmXWNMzNsNPKfT67f2RUHHYX9dZHGNmvtWXzTcWdKTm59H79zCQC9RX6Cp9WmusRSB",
  "key28": "5Bjnvo3mbsKgdS7AZNDPJiziRhombsAiorKKBiQm5irS3avT1fwaeUzYhKMdDFh8K2EvY7Earua3RvAzzkRt5iAi",
  "key29": "2rweoyeQfzsYptCrYe8QpD2unhdk16xdBpm7pkFhKm7SbYcCA9p6mh5nEemSCBkeEtrbuhxgh7DBaN7YStnDf2nN",
  "key30": "2Wwt8hsKSruDwujrMWf69Cmr8pczCKk5VySSKNi6QgrxdVvcJXKsJREzUrRPS4XgUGqUf4NG8KuLKYJ4xtQLnGKc",
  "key31": "5Nv7LR1FS6thGWfiMewciMhet4dyBYY9dVG4Tr9qq2dVfYfSMJ3UjeE4janCdsUHetg1ACBqsXV3j2kHAJZZgrrg",
  "key32": "2PBnsE1GgHLg4LauE4CXE8FZjdNFbgY6xeeVMcnqHBtNcFbQ3c1MoAAvrM5U1sCFUAAyCjCtUQmcH3uowo59Eq4U"
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
