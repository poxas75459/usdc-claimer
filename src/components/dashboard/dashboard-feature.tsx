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
    "5fPUfcTKG1YVEghRE8FnBZSqrbvGRhB1J6sZXKZTSQFGqFp7W8LPWDY9vLC8ndkpB353stdXGB7qZJfLtXJEjFYN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TrBPjLpcu4SKSyQxPsu6Unvu3MVobAF46SfGkyeD1L2TYUL4kF9Kjj42rGNdEJTvoXrPDQXV2LeEJ9uyLkaNvHu",
  "key1": "32HoZhryDGxb8FmWxZVa4xk1RA1qtVpi9QsTNAEoFtMPhrGKdJwZEo5z5LYhN99x1Fg1Etgx7QirwYdgq31AZSkP",
  "key2": "2uibU6qzU5VnfpqZ4hdyXpXiwNjQSnUUmVYSGuFeSs4ngHWUo5siFSih9T7Lq1kRBXN8izjtkHAnu4ap8nkv4Cxp",
  "key3": "4bA8pP3XoMa4NirF56iY8cy9QZ2SnRqbQi6dE2NwD7rjds6T12TVRXwz57RZBoTG8w2z7WK2dXg8pJv7vBriTcdN",
  "key4": "4gNKhtN18HbfrKCLWsu2hkqze5qzGMAF9T9DVPSFEMXtnHXyW4uQ5vr4UdYJxSLbnq3pQ4Nh5rK5F9xQuoVj2Atj",
  "key5": "3NncTNBzYyKEaCmKrw3yAAqPq7Csb6jrjLSLoUXyg5j534wyDXUUvhHkxuNC9fAZ7WV8nC6JGAKDQWzKWdQW7Um1",
  "key6": "3cXne8rQEVzECyKDcBVTf1k75LeCKvqQNJK29wBdan15BhPVBJjZNkT7q2rpfXPpyjKRXyChkmQQi7qMhHw5dMoX",
  "key7": "5xJr9ADUKhpZNKtEDmm4qB5ynUL3qjADwLawJA3WvSEFdKDQSMUaRHY1F6ivZXXpEvgSfQNJWEgmEdjjoqSZ5m5T",
  "key8": "296wBDvJgWFAdF3tV3JGPnMXtrAqWXvHjhBXYAXuCz69xNMBmQvxCcFg3jCF5NYQTxXac7k1am5q4e5QKHb2FZZq",
  "key9": "569JBcqv9HjGbZe9vFCTzaKCX5gHsipGLcYeyTFaq1zA4gXbrP7pFqbjqbhdAQrjC7gZaa8A2aYgbHsx77QSc3t1",
  "key10": "5bdHd4gc8aL95dzfDYBKU74FzT7vv9g5YgiQ3cGgrA7RuhRHhVcUHTAnToAtTd7jyXDAtSViZWgVgJovdaPLtCev",
  "key11": "6ZAtR2BsEkBgQLVXArSnBKETDNMDPiUqBrsd4puosMKNsuv1GvhXeFccMAgjJd3JFFEawKxN9W7bYUUHLNUyaSZ",
  "key12": "3uExzNuTxLrYgYCt1NcNzTLeyhL236EF2Sp88Y8QmKjsazT5gyMKZfkXKPd1KowdWNrCBwdVLbtURt9WiTbKj6SU",
  "key13": "3HUUvbSeFQRnvHJDFakcCnB4DYPer912FSd5aAvrBseUzryVwviZtobCKJPeEXQhiw1sHqRzh8TmByTb8nA1E5H9",
  "key14": "1dxawKMoKki5gCWocGYcpz7MPv8F7N1M94M81gWLsfzJKfxwXfNYG82oYnrUAgpjVd5UjDPjSpmNb7j5VUSxhYk",
  "key15": "2VeuTqSwsPkXsu1uLiDTZ4F8Gd6ZXJxMx1LCQA93bZY8qNrWnthY9iCcEhz9DVK7sZNudXQeDudikyiaSoNse4qw",
  "key16": "5ktNuLnxuWTc5ocmRCwbnG71gCQvamhdjj3WPAXA3A4N7CmeyB7BBhNaqzWjyUTEwv4ZnxPsASbDC1Ab7iM9H4KE",
  "key17": "3FmWJvJrH4aEzHZf6y3tjm1ykWptDUibTv9dvYiPSQK43UBCPvFYZGYp9riTsANChjBCjuBMWhqvCLvr9LvGQKkW",
  "key18": "3u9awAJD6Y1fxuQfXdpSs6KQ6DSJ7fqeQ6JuShyBZ5ndHDU1GPPchkYDDZaTJZnuTMr1Lc72b3B72QegqpL4D4BW",
  "key19": "5oFDcwsPNVq6rBMfyUeAm8iVPsUNZtNwyy8BDc2pJQVnLCtxdazuicywZGzgfT6xDLCWCBiqY2WYkrmjPNT84vsA",
  "key20": "2UayiYhDcih35Gd4nuGyEAD9RLujuUQFuSA3rL5oUhiRzmhUxG9G4eJGdFwZ5pZfWYptAdmjZjMqRXzptdgJPu3U",
  "key21": "48VfcUMDAmPNUeTpejjSq6K8M2AgUFwV4f6iGNRmdK1Sza52ddjW8PLdVufCBkLEkCpSG6YihsVtxd2ubLruwAZh",
  "key22": "47rriYqXaqkfCknXQp73qBMiAMXMqH4LmDsqBTrrrWeRy3eSXbmmW9yaL8R3BpA2a1RaAjMSboUepFWAHmTVDJGH",
  "key23": "KUq9d9FdnPidiuXBd6xu5BQHiQfsxAswYvWSyFsw2gaKs24USEKy76ueRVfmEzCUyhAzbH9FgMyexkY7i34xJVY",
  "key24": "61vyiEdGRpVVjCbSKrMtHpZomtxPJZ4QAoM5vrkdXVUvZTmkoMBxZTLvoHv89Qaawjv1JomtH3BqVXqp3dC5nESa"
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
