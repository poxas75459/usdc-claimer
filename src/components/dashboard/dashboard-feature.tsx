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
    "54b81yg7Bkma7DtCuBAcHDXr2FVWdWLPpXjEC77HJQ9CJciEpfwZpiS2iPgHTYiicZWA1tPigvzKnaUwgp7BCtFJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WPhDYT8xL1uwc1soTdBXTqCwzykpYtrzE4TCRCBEmQDN9TzgAekEskVqhdX3rPdPLTQQeqpvYNc1qCgq2N3Ti2G",
  "key1": "cRkq1G9exhZXrHfde4UeSajR3YhP2MT3UL4urLjBygmJGvwCur4wrMnABnoubrNVWE5iY2TTsx5wQF6iuqoULv8",
  "key2": "658ZpVtTE6nzsyGkjRymHzvfLnisXF88MKhNMtabzrBAbDiPL1MLYWEJ4BHbES92sXznHNxwHcPKadUJTx7d93i9",
  "key3": "51dhxjGQwBDdztM3xmhpk4eTa9RU8gcnjwaKKUtDvsTXmRrU73MryjadHmf5SKYTJv7C32rBH8AjYhcHrADDK3RN",
  "key4": "bxy7yK4mVBQgL3jwUSJme9z3Gq65sWTmZ5pKXHFCArZmpmzTJGfLf9D4zhmnBMnio1gGrDjaA2tbWzBqoZYHfaL",
  "key5": "4xPMzoewzY8dRNdZFSjvyLEHTiNBLiWcwZ38s5eNK9t3fscV2LBKydDrTogn13dncTFoGFbdczS6ymTXsVafxPFZ",
  "key6": "4MR3uCpVD9hoE4WUWG8cT5oi9fwTxGKrs5MkpSimfXbmxxWBbNQqPuGYRaV45x1LFQY36jqgBTcdsdoFLPjVCprC",
  "key7": "7njf4a9LpKxqM3qUSZMcS5eaGuGJtWj99PEnENEjAeZB7uXnSmch6ps4SGobfYGXmUShuPrdzS1dXauaWsiHued",
  "key8": "2qbGBiY7jAAtMA5EyJv6KzxjogNcZkwHVxqeMdw9G9aQYzAesoacQWWSKdvmSeYhnCm7VLwvSRmuz28GxFf3ukj7",
  "key9": "JDxjqeSPd2YnG5m9DMcLbbaBhHdno3fvMYxGZwFV8xSzV3fMHzmd4fgChapxnqFC32aKMor74YLx5JUxYF4YJEu",
  "key10": "2DhYsD2E2iJWUnWCVw5AnvyKJKA3EULNPe8ACJzDtks9Q5X8NFtEheGE52pNReYYr8VLzJWPNWdeWjiwy152XWa9",
  "key11": "upr3jh9NgzKt43PxVpU1RRwajoLrhuhWg1q5yKcuCtR3e6xXraUWTkokCvaK76cUYfuW52y9ZGgRXjYNVLu2ptj",
  "key12": "D2thmY5x4poSCeFFf1CD2Zi2ZfQ4SVNqdvDLGdrJG9y35NyrXbHsgw6WXge6rVWdixmH5CwW8EacAam4piV3gp6",
  "key13": "3CDcb7VxspJqpJMUoZ8MZW9KRrZaVmTCYmztQ8HBvDVSCHHZ1S6eHWGod85CJFAuLUYP4JrAAznmXAFhWkrGokcu",
  "key14": "oL8Rk4ohfApLCnLkNKFetydSePB9RVrAbA8XmEQ4fqiECLVU16P2ypPZtesyRJJS421VYvsMnoZ33qgWeu7Gyft",
  "key15": "G98NT8BCpoGc7EhdYZEt8seK9Vxwkv1ZYSUE588bKURTGqETyMwve15gaYxXFzfG9d5uazREiHKErsimc7GxGW2",
  "key16": "4aUiiG3rAjHyvqPyKZCQL2CCbRV7gva3HZYw8FuqtbrvkJuEy1ukkReu1gaVwxVRMMxskwhvvoi8Tx2XG4BMzEtQ",
  "key17": "5yvGJt6EtLSpnkVpSGycNAsCMXsrwrqNPN1mFXj9z7BhXH9HtYtu1GqregtWoFGx4GVxtfBNpDqnBbnTd5WhPaho",
  "key18": "4yDHxZzWSGAEKByQXp1GNkK4BhLuKoDoQAffypGMqH9zS8cLBjsJPkkoMtT8aLGLaDvCke2jJL975wvWMunxB4zu",
  "key19": "3uwQr8v2uEJwi8MGzU7Y3dK6SYAQBKbvisTgtUVaLM56SwoSCu3NFm9MWzRqeVpSivwAr7TfyfUzTx3GN1DpJSfx",
  "key20": "PUtVUruU5oCA5hjSKrL19J4cCznvsQZTqBtdtzNZ45CbxtqEqFNTZyGShigTdLJRbNuACwCS1k5Sf9j7wjKnVyD",
  "key21": "3ZHCRSACwcWFQi43NYgTnBNYyQxVP7kdSnXmGw1TCCv3zQKCaCvZGfgmf25wg4toxwjgdfnvrUPifBDzwSXJexj8",
  "key22": "2qAPPWD4V3DKUqihz8yYQm57Cqp3TagMteiqzJThtSLkgG9Jx9fiG24LiofnvkNpsKTpvLhp55PsgaPZNomsCXWo",
  "key23": "4RSjv3T1nBqzP2w953qnGyZBviAXJ9ywoCPaoXbtEnrdoKnE1AhEpaKwxcUPCh9QmrDLMs4FnB1KUgmL3ji6ebML",
  "key24": "3UvQLCQWnz3CCqqT6TGRCAvqWZym5B4zYpkmAwGZBrSKTJ6p736vf7oAae8khLtoCQYLLaNHQBsHuvSfLKsXKAFd",
  "key25": "3zFtcKVNFcv6UEcZcPUpoGrRAdkpFBEYxk5DXnFs9TBm7VTXjcq2e2UPa4Ct9ctL98syKSWV7JRuc5vapz9GT6Kz",
  "key26": "33DMRLPzLaV2yu6gGnvQWiZBKJj9TK1gbgrY8Kja3woJ64V19taS8xr341R933rq2LftanmKvLvMNchbZsrNwVnR",
  "key27": "YsSJhoaydxGLKiT1PPzZDoTCcRZ6HqPcUbAkScTW8U89VwYB8MTxyhv2B1LUZjDUH4jyazmQUYVWbpHw8jzSV43",
  "key28": "3peXVp7su9AzfuvdCPJtdkj17LYLD7zSBp9B8w4sTjWGg3dJQ1JZyk6izrpKdAbHo6A8QWj8YkeZCtfNro6mYF5e"
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
