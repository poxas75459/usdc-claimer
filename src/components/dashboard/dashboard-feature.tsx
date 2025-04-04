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
    "4rAJybT9fSnyAebxa5Bg1wFbEqHJHAFPo2LH27V7yXL1CvsCZoUiJe8GcazTYEoMovwAR3CAjyK7V29mUw9Kjy6q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YdrwYkcuxQLp1jSwNAjWhkqXzk84iuanNhW8A6ug1HJ13wg9y4DRQVaGXTZSdkXht8YPy9FP6npYKaTZCXL8Z2p",
  "key1": "3PypHWQ1HXJtY7RYdTAbotqLVirCEmRaezPafmnwMj9WzkuQ5YgzkVmiqmSCS22Afo6bnmxi8QZPWP215VrBxpz9",
  "key2": "48kBcLqCKxSX7WFiqJsFMPQHgpc9wfR4vaMaLTtqP9FpqEj6JpXYaWy2z5JAATctS1Zm6mYboHTLUXxvyKoXLjMC",
  "key3": "5q8f4tK2jA9fJs7WM6nxPRVnYKXLo3UbXG7oVcHpm8H4m59CkNscqsxr4zBNp9ivEsECbb4iHaNioru7FY82rup9",
  "key4": "41jpKcSmu3tvZMDyeYJ3uuaAJkFZPBVXFkbV9x6EmZ58gAuuZidnbhsMSzyGh8ntkw94ozoJRSC8x1La9J7mJGpp",
  "key5": "yX4z88VbHDQT6b3TBKsVMDFZRunGSgPhXA8UVqmSzfUPwAMrny1xfC9y1MoAnphCvRHoZyqmokhQ3hNSg5xCexH",
  "key6": "4Gz6DG1DbveSHMRPCS3kdJMsQ1NutgJimfsL3tbzSGm4PL32tMUrerWjLYdD32kJtiC4uhW7TnjwFxdZ8zSTyBjV",
  "key7": "3LCrQg3DByhPmVKptFAQru2gwajMy7jDJKTaoYXk8Y6K8pQ1auHc8EXkYmRPWgMmDoE3r79XKPoGkJWMwk7SgwH5",
  "key8": "5HaMdua6qhNdnwQDSiMrfs4YxQjvKqj8pgN7bspAY3FXuqLHU2nqgmLrwxDJeHh49LRruGEySTp6J5MbH3s5vLy2",
  "key9": "2mfgN8fLMayzCBMLxC1JVWzFycutVeDhSxpPfgLn1huB14UYkt9v96FsrXgRk4gC4e6wjeVvgxsSiWB5iJ9xW1SE",
  "key10": "2F1cZqvWt65kXCss2cRfCmKm3zKyknMjCPrHs2U5LasdZDNAJxBmQsX1miPCXedKaLzdmtv6L9ccGxiuZeyAGUHC",
  "key11": "5U82hfjbyRWQJxYoggbo26Lwtt4pSC3vryWqBkMPSE8D1GgDCeSSwQC7fXLc9z628qtuPougdeyL4eE9Ms7GJJWx",
  "key12": "4D2dgT5pQVNSw3nwWz4pv5sFaXnNW9M7HDw6CUshXepfXPVEEGF3VbGPL4r13UEXGXoL2SW2uoyMXvkx8PF3jcZ",
  "key13": "48YxY5URAhV62gNLvm2i6K2WWttpF9xhj8yE4kay37p47M92bhzqZtrLgxkjwRzv4UcfGS7FjfFmPAmoEDvN9jaH",
  "key14": "2BxmuyGgEpYq2wf6b9N2NffaiMm5bmQLXo8PoWVdykSLxmNDcQxNWg4UMorpARSfYJiYxHM699YwDT5GoAjLbur2",
  "key15": "JCjzYje2s12qYp2PMmLcaTk3P5SAaR6gqP1E5qm9JyJogQ2gPuhHFkRqwuqAhQiZYeauHCL5YKimazceUnv42Hx",
  "key16": "2YmLasZGK6wtymokk7hzkAtjvX8GihAvkd4jpZiF7wi8jvj7U84npwDSBAPFVxBXMU46zgNnjVimM7KLDBqR2pWi",
  "key17": "3RbLfMpyBXsNCDrN4xtFCjTeFF94svKRwCUYzcAYLxvcbQLgiFqPM6ggAMaGgedNaqTyAb6r8ZzfmVREAkx8o49M",
  "key18": "MUiMB4bVN8JNzdTbjz7g5hq6tBXzwdRL6xpzYEcSAaXMohw3eFRoPkHxeR19FK7kVGrUNyvtieWtafZLEpPmXMC",
  "key19": "346fYucnrnZKh2qiFSRFPA4GAeZorivL3kXxaEHXNUWp8iAmCCnqSKLimzRZQc728vLzyFm8BwRidDQcJiCadV4u",
  "key20": "4m5jrcVGWrBcTr3zfU2vkHXAxxRbTZiFrfF8oi1gjxxAPhjG2yn5qHF9pCTDdjVcAyZEZD69B8DiNL9fRJ2VdMC4",
  "key21": "5E3GdkRMvrQ3Z1c5nXxNMuCrtxBSSN4w2Md537RzWDU6n2tkCKQQQsGmobNuzmyxjf4zQWJZ9Tdkeirje9NvZpgt",
  "key22": "4u5hc2gF4aPr9rcer83p7JLzdVm1b5oFjwZ5Y4v2vEpHbiW11MezPEmM4QMD5wbNiePjJ8N1oifdKZG3SXSqQn4J",
  "key23": "37szAwgvSTvhqUjdet7y79LoDHU1iNhbYTWRktS6fxhuqjRZdATLX4KUff1vvNArRD1Qu1Gec4Lxg6vgtZP7FdiX",
  "key24": "42uhqJrafNPRwKHQ3Tk3fkBZurkLt4rTNjUX6GmnPywAxHzt9EBi17kjYnF6Yus6qkjHA4x4z75A6VWS2bbK8Mtv",
  "key25": "4qwxan3RR4PZvCHGfZAwkRzStxkgo2h23ocqFr3UNQWYUQTHsnftWKpoqvuDYa1vXSXwtqHqATGNSgmf3fzCLgQZ",
  "key26": "4xMD3bUFr6PiQnzWthNLpLb5YbSWtPviVEEN2kS8aXpUVNJ9xbUPjSWDEww2XL9wsvmRSpc32UgRrEsrvrhtM3cD"
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
