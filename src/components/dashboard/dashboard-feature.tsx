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
    "bUSkYeBMhp1ysuotua6xenSb1WUmrMXqE2udFsQehhvWQKyJNGmaJJMdMxSzunXTiJdX81o1Jex2jDAC1Ym8HzG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rUFci5v5T8SCyR1dtEuAE8RAznirSLAygcfB8jFcvRsRizCqgfgrpgyjxUqzfWUVk15duSGhgmLth4zCfhYQWyM",
  "key1": "3kQEJjRVRgyqyKwmy3ovmLPHNAgsDaRTrvbdciJQQ2G6V4TbPYdsBE3VWuskPvwKy9bCNwhK9DghHxdNWtnkP3Qr",
  "key2": "4CmfQyryL54o2KjTr3PFNXafSwbYzcA3dWh6LBu4ftin8QE6yc9LUkgFP9c6SNiDbpsSBHTmPeUTV4nXazCXYBRh",
  "key3": "5PkTi7tbpG3HsemEdh9kFsPTKZJ84n8shdxWDCpsYDhaUi6gEtd7aN1okurouy2G1Bd6DNEnV6JPm4jmyEDtvDHk",
  "key4": "hXzpAdBoJvoXQbQ7xyn5tFiRKjyxj9HxYaxyEb1KjBBkAYomRZWm9pAYZ4KdQniN5QZZ1hbEiDqYUiAAh7QKGsS",
  "key5": "62bq4JabcJboGskPKdsFmqYMK9o6zmhtvEUZuQHh5rQwu8BH2sDdF3xsygFchVMmqKYUj4M1vsae4QFM3wLxs5mz",
  "key6": "4gABeM2rLKoAbskok1M9NTRhoPJiqKC9stHDSb7heEcFGVCuMuSwnWn6kwH4CQ3LYZSyv7jYCf1vjPWF27SE8vmQ",
  "key7": "4G8kCyNazEbFedtovLXjivw9KKomXGQAJ6tihujnFZFm8C6pJQnq3P2AnerKzkUqZLFNigaRSP9dDywLe1vZCH7x",
  "key8": "5Gv3vggVeA4heiKeNn19SabgBBqZfrQnjXc2HSTCK9dCEDCJpec12j4Z14ufmrjhUndt4Cgdvv3dyGgyz1kDqNyt",
  "key9": "4wKVDjygJmSrttW1eJFEtsCYGXfDuLHcmAKjijmdCFgaXVhtxnLDwqUrvcrM1B2cMeJxqDDmuJ3DQ9ZsXU7iG1so",
  "key10": "4i2R58YzV4fX3cyfB8iLobE2qbTfWQhouMQAF4YS8iwGwF3U59iAy3bK4jAGoDkqLkAPwrYa4LswRqQ83sMBjcpm",
  "key11": "fKuTbRn6SZZzL77VwF4KWUiziZi3vAC5vSJAZbuzK7RxMAq6AHwc9NzaToJne23maV8m5rwLDqS3bZ3T6bDLMQU",
  "key12": "6Saim1BNtwX2R5qiRat9cyG6CqB3doQrvurnjtYzELLskgAcyDXExu91gqL2UwzJdVywUeu7cs1q8SWruJgGVsH",
  "key13": "5unDYjDAPdi99a1XgG6L9w5H61sSB6Vs2WiTZxrsE69yFsxFRwsV5wb7iYRzuA2M8jNC3F8g2fUKcrjymnYz69Me",
  "key14": "3f2z4bR7ymQ23zUZ12mBJ9rADwfZuKyJ3oMK3suN5WNE6fbLdBdGjPp7nQzaLhUAU1wEsFYt52MbbGGUgv5DZnkn",
  "key15": "5vXhEHQhAs5JHsdADpYx4Jq7rjd2m7EVwsXdSKPs4ZZKFMKYjfK3fn6UGNki5vN8apMcLTsdmGZNn7JoeNhSZReh",
  "key16": "3uhNdG5CtuJpX1RcSwaN491VtrNTT5uhpQVhMnadPgGSJF7wbq4xFWQPNrawoCyxUkaN6DhcKj2wVBKDrhcKgSh8",
  "key17": "5aJmL1894y4uxquYK3kdh52Yg5TXVBJbxdQYWZxaUAkrCn5UbU6MBRpxscUZEzZKovxYsTRc33YyvmK1vcPkuauq",
  "key18": "4TyqYxHdHLhH5ZqdnzTTbg5a5pMPZjFMZumAyuzpH4QX8wc7EDyVPHCZdesqp1rgBih2zfuKhtFau2wPtcg33q16",
  "key19": "3NBtAr8JQNv6h78AQ1zBRqMogBrRm8e3pfMCZxV3vxjuLv7ZvoawYrrvT6xLoSEJci6zLSovR2dApdG2Fun5yNec",
  "key20": "GLdMADgM6wwhAg5szg4SG4bWzdGkZ4MeTQSuEyVmGkii6FWDjjUdm4LQ1YPWmDZD8ceYK3PGLdjshz7zGHiQ6ZU",
  "key21": "3dEm3FsqGJRFfqNcbbzfHvaTinqY2qoFgGAQ8FFoAa5CYWycPUna61hwcpEcTtYQPzZLvPUm4CRw5x1AZA1SbjDo",
  "key22": "3SngTzbJyGxjHbGwwWcaSJo4wYvU9TJZ89kv5VAfqVYbCgSE8hgqBGUqbZTWtaGtAaK1Xzmk5SYYZupG2Pa5HWKw",
  "key23": "54CSFDQ5BA8Nm5NYMZeJLmnpknXe94dsZGbXsxGCg6bMwproCknYRM6TbpmtC3PehBRmt64TYRGwBpR9Ru7W3wrN",
  "key24": "2LvdRGsfSFGp6D3iQH3hgR34unQzNMs9RPvwHb9boRLqtL3K6h6dLgcRFaNiQYYHXnFAHN1qZZR5Yh4uXRrDokEh",
  "key25": "5KpRXkxXJGd5PER2esZpJ2mZy1qfWEDtFPqMD8r58WojQP7onExCcrsYQnzcimLm8iy7dWdiYtqSgUX5TAXicDTt",
  "key26": "2CCvhCo3STmYVda2jbD5VZZdD4z9SA6tSbd9DbwBsH6hat7JpQQtKDS2Sm8td3MHYrYdJyrgXbxbBFhGz87zTyCS",
  "key27": "3PTGVBEhAYDK2jAhcijs1A54HidfLRhMbFDa78np1AK6eJTZFupppEDvELa5EdbA8mviYHqZfDSBh6MCfex4GoG5",
  "key28": "29UMEanEif6Do2mvEcWeMHiCJWih3wNynchPVXCseBfnuQaqyCySGvUkYmdnhrPKvj5ue7UMHYkEprCGK5uNqvUf",
  "key29": "8WrhDpEr9ar3THRbPxmSfjqKnQHYjxRbqhBPpzZX2SW2jPJg5pMqKucBmf6vKyxB1vxLUL1VdNqS6gfjnn8zdWr",
  "key30": "oLH1SGuRBWoUikkit5Rv9huf4u3brtrKBFBmfVnCuBv3G59pxCRJd6rrb6WHuuZ9tb64G4MbrHVsRVTAXfwT8vo",
  "key31": "5iCCe3sYWu5Rupb3cNhvT8vtBm2iTazPfgCrMmik9sLv519cGBoVynMPce8fA1iq13kgvibhbcmFuRQeQ5nu3aXJ",
  "key32": "2drhPEEmUQan2XBBYNrKkarAcZGMqLp6Yit2yGECxVPDVGZxXfqSCtSRh5AL1BbQeGWRmLkitvk4pdfYKFVPjf9q",
  "key33": "eycSxqujCU1X45j9ptxv9yLTHhJNmEGtwdLsLAs1cHGoBxCLd85wMT8GG4pr1oNwZxVK2Fg8xPwqogJrLVbv8Bz",
  "key34": "3bJUsDCX7hPReN27fUK3y2SXw3HVB5U2hGnVVUsuFS9cF1eFsPUgpg9wqnxpYYNL7cgTbqBCiC1U3YsMBdMiaj16",
  "key35": "bNM4nCMU7dUX5vGocxGGoB7BuZVoWB8rJQgM1et5zpo9MEbaksf7EqYhqUgP7ybs5uX1wEcjgCtGQNcBHkSitN4",
  "key36": "35M3mnfBY8e9UxQN1Z69LHBd5BUR9JsBcM2SJ8vvVd82ZNeq32hqNc3oDrSqwsF6hd5Y9M1cmYDB61MDoFVs1Xiu",
  "key37": "61YFB1NKK3gpt6mXUxZbLzQYbP6CegekmcsmwPE9CxmD48nJpGwqonavct6CeiQJ99hZV8KrPDfggJhWr3JkvmVx"
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
