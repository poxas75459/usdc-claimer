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
    "2XodM4baYWnoqmzpFBWCfnAwHLjUQ3RASZHzo6WJ6xven1m8EEZC1EBfFtU5h3aYJx3eWBEm5QAgfBBp8v4jKYc5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "K5HCUHyNVu28zxfkyWMxjnVy46oxabiwCutxKDET119EqFX5cDN34fJZdhgTkjcnQayTsLkkzAysYt3HRj1CdpA",
  "key1": "3r7bN7iUJgYv7XNKWQxg1YdAoiAD3Bf3MLuUJvupAHt3GZMZfvtfwCY1owZGkbeBVifUXMRmjbyEKtTd7A4G2dwJ",
  "key2": "3cmjApeJfwFFkAufXAt7nyYaEXWwxLeL358tS3KGB8bAnBbmxama3HgYqyFPLpD9ZGyTFkVuREZakKnT8BYXMERU",
  "key3": "3z2Zj416zEpcwRqUMiPKaDZ6qYqQLiQJijJAm5sszstXTcWBYYNDsm3F5pNr97hHasFxD2JKkC3hwQJtcJiaZS84",
  "key4": "5fjE191tiZCFpje928hw3h2aBeYMFfzYAVkyfVeNjazcuAHKfDtRhuJkP4m4t7QgPyrCi6cNWR9GEJbpZZ1opxzq",
  "key5": "4yeg4GezmBEfKr451sBcNNbcNaoNHo1wCMW1ahAV6TJamVagPUb1DUv7uBshzRsgVW9akD8yxkaML4G4KowzuJrU",
  "key6": "4WatzcQFTkTY9nyjUdNPmGdesAJxHn5o2ipzUumq98eW3Pxhc4QGnUXDSVuq6K5VXgszJTwptq34mGy9VCSrtjdT",
  "key7": "2XsZrGx7ujE76P2MKWFP2MYKC3DLWv4dKzKHaeuuo2fRxhLoREHP1CdW2k6hAXBeiPMQBXtBdcUFKbysMRcJv7Fh",
  "key8": "625conQXVBeFwCPr5ArSQrspdkj5T7w5Ethxx6fax2p9BbL3whyqyx8TmMikuNrrjJnkJb7bnuCL12GNjrXUJcdC",
  "key9": "4SpRifuhKtrWgexxHGynXHfTmV8uibhGTnAkTFEDuAqM7CLKDCWGU7uK9nL1DtmQjTyK46Y8gFtcyyXgHV5DBmgW",
  "key10": "5eJ1v3J1AqpuntAcfGzwvCjTNVSQMcDdhSwJdjKBuCwVctc6hKJS3JguDnKXDrEkJNeb1sjvsDQkPFzwd5AJCEvJ",
  "key11": "4NVVqZgyR1pcg4S9kqABf8e6EuHCP8aop7gNUTE8vxGXrm4nij4zXApTXqTkhiSTT63sLnW6dKuzcMCnKuRnYLzH",
  "key12": "2sLVsKW5c61PXAdq2cpp1gBvuEnvomcqhc1dRc7vWRu8CvnpCD6sXzYSiuMxGWDa2ZUdgLFqya8NXZ1L1YLo2SUz",
  "key13": "BGth5WBNFSbpbqYVsVsf5aUVqdEcVUwiY9YTLxwfV6A9eBXGXQZzw6wkjwQ6aQKbPRaz9WLBg5KEJVzN2FH9qog",
  "key14": "37tfyF7jdxXCj1cmkjoR1f2DdaAqWs5HhoxTAuV8iDiqbnRoe8Y3eUhw5eZufmRqprkCCKNp9e2ka7bF28JhJkCf",
  "key15": "5dXJFYfgqZQ3sM43KP9MMCddgfkvBfkhFqAzq5iDeJHBRP1TPjTV8U16a8zdSsQdGhy11aTEcsmayghHs586JETm",
  "key16": "3syVcF7dY53jTptugrbcf6gByPAkSVsrXVvm85eTbS2N6HnYQWB5BXH4f8XqeB5BV2zm4Ae4Zw1J2iXYVktdEnis",
  "key17": "41nJERgiuuspCobBpXSJwHZcPKvoXu4Cj9B6FHvGh48ogfoVbyDSDXBDxnJCK7L5EpG4NKr1XDT5JNEtJVjmifLU",
  "key18": "2fB2UPuxJUzMXojP4gcycfjKU8zfCXqJg7bYpA1vJDAq8Usd7QNLjcgRJJJP5YweNzdFCtXXeCpLWcZR1XmFb8tu",
  "key19": "KPdY9ghkS6HWYehEKCDg3tgLuod4JRHyPds3jR3F6fzdQnc92XpBuuig4u3mSBMQg64ya9t66LAfiMgmptsgkGR",
  "key20": "5CjwhRw1wgcW8DN8FWakL3zRfkUzgBA7TZSWfXHrpdnkNEUZF1wdzd3cJd6TPV9yAPC36WgfFGWiqN6Towiaz1GM",
  "key21": "2K3PwWeqrbZYqFSSinpJKgT89SAvNo8gCqCiRzTsJLZ6KLmqhH388Xr2s3zwnJhVf8mxXUcBaWhajaPPuUuQgcZ9",
  "key22": "3sN9mm7gp29wUuSr1ZraPN3y3DhAQdzQsGaqVs8FJvmefee3n9wPRKBPXCR4MaskingD5oRNt23N7YxU5QVSB2Dc",
  "key23": "5pdRUWkX9Q6gkwGBnzmKxRvQSmnvpocrGRdbaFwRsGDMX4FoSgpwpgXKzAQvwrxWTsNWukhQjuUBdkzspnNo5zRG",
  "key24": "mvWgyrbTNzVE6YeLbeDpgYbA6tBbxpz1cyWVhLHK1xCArk9sJoskHiP1aDop4H7LRwC4GDrrFwbsrZstaguR9Ax",
  "key25": "4HinTL8hTHFyUsTcPR8BP5J9AGERiHZ5kEBQXtDiGHznH84E94wKcD67QjGVVYYawT5x2YfHfcbzWfxqyHUyfEzw",
  "key26": "3KiTNqC6WxJd2P6i4A7ziLGCTPbHNifuRiL59SGUVU6vcsffUuusYwBeKB2oGRu7k5FvVwurnjWa6MHydFJkHRNz"
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
