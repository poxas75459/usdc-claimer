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
    "34A48vGvxh2fPajWhKFujjC2dN18v4ZjhNvXRAEaVJH8CNDePjc5kpVoQdrTEPerpRto1PVdUb9iQ4LH7qW2QVEP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MkmQWZisPAkDK3JTfXQRrnZpgm2yhg6s44g1TgbD7WWAcphnFpXfRwT7HWCUPN5X49u6Rco2QsppXDLkRu1ffJJ",
  "key1": "5n6T2npzAF5dX36GKtqTcYB3ZjusLPmPCxbEkvS3G2yDuE9wBE5vvd31S4gVkoP7dWhVjqq9v84t3fpm7RDguM2C",
  "key2": "65p2ku6HMvemBq8Uy5BXDMLGujD59sm8922nZ7gD74inyxtqoN8wZStR4oGcGvsJFQyL2j5SjEC9fUdEpDespWFb",
  "key3": "2hTdS2HYAW8aKxboTNSgSYdKChizcc2np6RWZnxHNdDXW3ULXBJDVcrXNmd1FFfDBSbZFLUCXbLNfsZnEr5aFMdf",
  "key4": "1uyUq6KQjYUuF1YXznnS5otowoUhBTGfRYNDrAx1C54hSc8SgkMp7MzEAkApzcLeZX9QdsGNszXqJwtQ6MRqwm4",
  "key5": "2cTfWRcAykYMzwFVWwmRPVu3MCoXCG2r7NUYhSopNfmhm83cMPSegdEL1J2LqPaDtot3TgM77XKfnF8jQd7wLrVe",
  "key6": "3QQ8RaxtDBihufq7pfS1npiza6xfFvw6CyDkekA8T1xerGXxSoAbt55YwEP1yRPBvHK6ZnP14MgRRKkx2XU4pFUz",
  "key7": "2j7KpRSkERf3G2iCpYjBzixWnsUMFR9KrFeaFgmyPwcbC6oRVyJ776mQ3gpwqG4rpPGZQetQF6E6RSwK5fed3ZEd",
  "key8": "96PzKaBJmC3h2aS4Y7cRAkffUdE8vFbrhJptqqyejXjczgvWUXSzqrpazEHMki6mz8wifyi96fmjD1SD3iL97dC",
  "key9": "29biWXP9QuDgDfRnKHw16rBJFZYhpzRuTxVB2yWvGxqpQQeW3Yj98EhKt1Umf9xrpRVy2ahbJRescXVa7pNSQuX8",
  "key10": "3VLMib4YB62BXm8SDhbr14a387vxbn4hyGgZJA1qJyBimrUvURVHUkScUuyFjCRJf5RXNYzSArKbtiDP2c7tQMG",
  "key11": "4b4x4hCDiw5cWG4xLL5PbZFTWaqhWRsqUd4dau6rEWeqTFWNQiJKP7RBncCufFJzC52RazQf7bgHQQJSB36Pb6cz",
  "key12": "4MyMVMw2a18hWEriFKWwz1Q6jy5BQNWv41fs2avMxSrJu9Faj5NhJVqN6y2tCi8VxrPCvqtuMDZiCtqVcqGdGDwk",
  "key13": "3i8JW3yNDqLPanANsqNg1eXVyGfkmNgNmXAkR8j92FMvArmnU7BJJd7hALUApHu1mTYAFvGBMjUJ3md54xngzD9E",
  "key14": "2sk9YBzjokvoCQEfBL68CRi1KGGG2kmkArAqF8BuqBfBJMsjoYHrZf4oaEN5eaPaUsjVpEdmAnAprNBejyq87WKS",
  "key15": "5DhjcTVhUq7t3z94a5B3mUrdhGTdCNbmY1ssSxcWLJbsRPpYCSXk6ZWEnr45EPfNLjDm1Q7UStVLY8NuDZNnktnE",
  "key16": "23EMnhbzWaTE3oG15W9iQdvmQbKqGxEUwuryTwbEKgAFoSEt8Zd9BUVByQpt7jaHq1RxXSgxHT5XtHaAvRpE58sw",
  "key17": "2zEnacTwEf4ZLibFtAKV4xCrzXzm1U5X8xomdiQkK6qt6pPLHY8hMaxhjJr6FkTHn25wfDjaXrUXQxBjsTYf8MHK",
  "key18": "3ikXVdhZ4CMLr3vXgPJSCS2U9GejYF4FXebkwS6st5ADJko5H6TjCxSQxJ2ZqYLBsyGcPhtNg7nfkybStMJrT2o3",
  "key19": "2fopbD7ZDeLYDSJA4uFLhEDUQQjZhggTN5EAjZc2eRpxYJczgqG7CpDBJvfU1axZFWna9xBSoQvVxvL7z4t8uBZZ",
  "key20": "257TmMqjQLjcMcxMsF1FNuhCzKBGsovg7y7cdu2ehi3vgfLSxjfbBtKX8SPMHUktw6wGg5kko3pCw2AYvnpQwNgY",
  "key21": "2X3SkNpBEm8rTtgCwHcE2Khd25N9XRL3RJLWQJeHsYtWiS5gurKcUHK6Dwp8UXntFVVSBSH5sNPiu4FSkQ9Bqska",
  "key22": "2YZWtqPrPtVoUTWxfiSRxWnkDJELMWovuMfv8ssHpb635H9t2nLyUB8ChkAZ1TN4bC16r8PBhgtgFbBTYZW82LWF",
  "key23": "5ezG4thTii1JhM31FZAWPtseNKrYD1o91CqWP8wvsdWcAk7rL8ceHxx1BajQfCCfAQgutwKqhtbGEyJtb85qE2Lr",
  "key24": "2tSFs5AE9qy4xS4WgnwqkrzB6jTdK6LuGLiHk3GG8z51WThBRcHCkcAP4y9jUvxmeDY1kDUSfMyNiepVjHKm7doB"
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
