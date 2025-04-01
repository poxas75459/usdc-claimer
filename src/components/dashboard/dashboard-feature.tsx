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
    "5ZKKt3ws9Az5TPMSwgUJghELNiCVJPsrbQvFXidU149vJvfPpxw7dLN2kCfjMvy3WtdHWoW4dQ6uLjdt4WebVj9R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hr5FpS38Rt2A5g8HqWfkCW6Cc3d5orK1RUuC6ZaMARTW9Evh6fD9UC69ZMEmYMHyeb5Ak8zkNXdoVvQjioeze6d",
  "key1": "2YkU4aNQWqKomXJY3yhrpBhbs6pw6pxTUSNfXx9N3UZKuvc8poHazTsj1tzfDCrubpBr7jcPGJuAV6C9txGg4VeC",
  "key2": "5xbMaWJW7ceEfZP7EWCi6MQDAUZZ29AHwnA1oBKPFXA1est2B2UvZWrfNc5GSqzc5sExed8wudEJ7V7ovVmV9rM8",
  "key3": "3ToHA3pgp4Z4hNLxuExT1DWfknBVYxNJtJ2d9LahfdMRCy3M98PxCJjPipqQzD4CVoWR4aGGvGZUsEYgVB4eCTuU",
  "key4": "3yMV2vDFFsStzvhwaiyTaqfLEpXUQzqLYaNjt9gBun4UxaNLc2rick2gPV9qAodWw9jHrNetgQdcSHdnhkvSxhHd",
  "key5": "Xc9wwajD7tggEBEQUk9EYMLhSuF3fd2nMRwAfPVaT6PrgthTZQ2GA792vxHQncKUkQGjR3gwiU3SKNFpYhcA9iY",
  "key6": "HQU27t6eEJSThy2GNwv7yzjzN4SX5HFEabpyD2or9yfhAVSEzeNVuKkqYYfrvigwtpsPVDkLLFMMsXcNcfa6ZTS",
  "key7": "2GzvEmgftBdTp4r1gVFTyAGUpigpZCvQA9nH9octj2Y4T2B2ecrEDyYszrmD2KWCirUPr1f69pKFeEBGDoFatzn2",
  "key8": "2t6txgw5QTe7Wum27gdfNX1gDhkvapRcAS6C5XAxw7N91zPPWhodeBmdz1m6nqci7WyykwSjW2Fj3aXCTQHXHJT",
  "key9": "46zE8KcNYeen1j6o7MQ3MoTVhMncf4Lu2KpPtGpuA65tHLAFeHKTrgcq4MsvZoYLC4h79tXyVPDxWw8d14ZmEhob",
  "key10": "3K27iaHueGDCXFTgnbNC21eGqBfzTBgT4xTuWz7ULykieY8RS3EZfiQoxTA1JUBU29sPVFf5sbbxqKtrQwi29LKT",
  "key11": "V3dHDCLDxj8qbZc1GxH5oAUG8RzjRKeThVJuB9CHmq3TQCg5YUE5izKxqwqZpfF6B8t2RrfP5X5p26fptXNw2Az",
  "key12": "64jbVr2xzsAR85zx6kJgxWXKJcNmNjaKxQRnjqyChSJhsYxkxfH9G4Modk9LmtXZPQ6RV4GKirPDBvK3wzLPPmay",
  "key13": "4RFy7URV8BsCqPAEtbr2orJtZhCs8HHRqKJZihiu4MQtKh46kmNQ539JQNSf63SnfYXrtyXEQcpfULTt2BcvWKxT",
  "key14": "e5yvCJ9px3xfKTSd8WzWSZwdHGSbYckeEtS8MSLYvN9fZ45DVLAMRgQg8QCE2oGjfnym1dttGTRYZxEZWfUtTUc",
  "key15": "26cznZ2s1oxRR5EyenTbu9VERJzwYFpRtHtmauBmdUkKeGaBCzTqeRCdsUyv9b4PbDw42pQ81tq71v2xKuqZuDvT",
  "key16": "J1yYi3XrTygF1tj9b4Ds47fKvjwbku4ifN2KLUvePszU93zwis8gG7r5SjifMHCP3wAhNJryr7DsNTk4sqYF5H1",
  "key17": "3yjdiSnpfbLtzj494WstayaPncGv6E3zgQu97nxe3nwQcAc8UA22oYFQCY9dA9iJjqbUfAqpeZNJfdK27HohJ2FP",
  "key18": "4uh7G9jsNRsrDWAJt8Nonro1AaHQoWxnB7zWdKFtKgJS7nC9x7f6fEBSYy8EBNBVD1mfSfd3VwZpSHA2ZFjD8Zqr",
  "key19": "23mUD1XYQ7sCPqSu2HdPUsSzTBUGNtZCPRBCZH3Y3yhnDo39HXV74JdeRrD48Bcd56yDsARhGTB94TB7FsfRkZpC",
  "key20": "3AJEcQLG1aY5FZ7TJBapZhLeC5KHYsuoHEN1fpH6QuZSNQr9ib9d1jxWWBsqg1cLRoqPBfikyisDLWBc3d6iTnep",
  "key21": "2UPqzDPoNF7rUifKvmztFoErPRRvZw37GC9Db7ieryocSboTLZswvZXfDkfAU7wWGWaumDukVtzExP7cg7ScZDrN",
  "key22": "46bnpWKrLzL66ZNi7bKrEqvMyvvHhpddRrwE7Q576s8LfhUd7ApLqvL7JbM2QYrfSK4LMZQwd97ZkPFmDHTmXLoG",
  "key23": "VBeGvhLYMCUHEGtNsreYsMkEfpkiStDwyNrY9zCdLmvY8u7cHm1ztJfVsBryjVcHo31jDwwwjVp7WvTDk1bEWF3",
  "key24": "3dX5trnBRBeuy9RR7kKZ1Jves4dM36kqs72rwyuNxvCb11HzonJCLdSDgJVLqJfJ8aiYxfsb9Ac9LHdkXUt5aP3c",
  "key25": "98Kn8EQpNFA4aauDd5xxRfhW7T3BkXhYGh8ePmcfhbYc2nvrTE8GgmFkBnBbbwykkvvvyy1p5Mk6ZpaSjK11eLT",
  "key26": "5s87vXgszvYY7hCDaTdaoXdZzZNqgEy5a17ewHUBNiqVkjHmH7sZzbRrp4tzQYhsSDzWQJj37YBwZmmycSUYpXiK",
  "key27": "3Z2B4XWnDe4hvR9RYFcYwwf39pnMtgR3evCpYPFmUkDiGixjEGjMtDGExoa4VbemiaRYKFrtZNZ7BDhMJnj2cTak",
  "key28": "5JQLwJ8tVV993MwgNRk4nLkbtaFKhY8LdhEU7hCcJ1SdeNE493fJuoaR4ZYeP2ig9mCfnGQxxYnds5FeTMwhMWKE",
  "key29": "56YDwfvCvNYbWpvuCUopJkcV33FDiaKun16nh3QYEJeVtTHkp2AxSfokdqA1sQ7WWzFa9bpsBPoL6dXSgM8eYYxc",
  "key30": "4CQfV1TXZmXzUKUmr19TVEiRJxRPaPZxM5jmFfAPRoKh7cZdjFWuZVfV7CJ2bANrfZ6ePergyjScrEepDH1hM485"
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
