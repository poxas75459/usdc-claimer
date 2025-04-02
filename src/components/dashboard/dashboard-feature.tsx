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
    "28HEBPQ7EKGwfvs9MaQuFJwRGXRxbqn4wKee32cQ4sFqyTyxHuhhAaJ5R24nMGNubb9QHoFXCEJvQJxEpTRynwp5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tGQYpoTycgpnMrpTtWytXHUHneSmxbp2PykPx2awkTbhT5JhbkfVELvmp4KJuJWC3fUrpSpNtGFJKY9PfDXtez5",
  "key1": "5yJaTELiR2N58Wm8m9a3qvojsgRLLiFpzT6JUcvjDifVoG4i9muMfpmBx6nuurj5C7GJd6KNX7bYnuTr5B4NBnJu",
  "key2": "4f48xsTRQk9iD3AAzjkMgxhHt5gaS4mCtuuNvBtRFjuZavhMjM35EsUJU8yWEZCF52TXLSwgE1M5pb8J9JC64vra",
  "key3": "3ZT9bY6v4k2zNyhUCarpHxzJFzP2vFTb76bc6nrCSG2zPM28qbbiqRaHxN2AZ8eVvnG98uJ8r6uEDZmK6gvTWnfk",
  "key4": "674ZRF1nWMcUu3na8icbwTxbJyZpLDQKJvtgQoZZfPQeh5W3CttnQLBqohiD5Mhtnzi5tuCk1yoLARkCo39aRWs",
  "key5": "5s3dqA7XqVnTQNzKZY19rCMHWdLACF6bqKrZS2BSHbvfVyqYGUVWWG8B4PM6FwXiewtcAkUZq28KFVv5eK46mLM4",
  "key6": "4hy7GN8VXJGYrAWRk8uZLsHEA3cqPUWotZUcbfGBs81ZYYAvJ1DFUEmU5i4S4jSkdV1DMUaDVRBLf4BojJvX94ot",
  "key7": "4Skw9cCumLYNfomPyDbga4mZaWyUfWvMjR4jJbrLUUoEDJhcchNr4FCXqeh3WAFtCU3qRuyrR5AvdTKUtDVkH8ho",
  "key8": "468QexoHUUe96msMUVFhvBwqBZBktW4hxez5A2xnytjAZL8GeH5oJxgptsegpEo4z4BVS3wTK1G21TPbrKZ9zfuw",
  "key9": "7dcvQDpDzbyr3i9yQJAFzupYxkk5joHaUzPWj9sHgnNpYH3CrjP5gC3FwDCk2sef3VpuwoPuYGeG9uErbzKmfq9",
  "key10": "zHVYYerVVdsnAx56vMFVtJjFnFY3pa6FCqLmnXz8Bt8apxRGGmR8u15bPzTzPfWhpN4z8B2V6bofaFbJ8C2KSnp",
  "key11": "32WA8yVjJgH7NtJKJoNFULNCEiyWo4xC74mez5tTPeenobYqrTqKYE6oDpvkx6dk1UBqZ2P68umByz8bCXqZatBL",
  "key12": "8Do6gjWHKTC5vukEhZfEYZE3KUaH8sxKNVDvAe1oVhcPbSUSrkLZLhjDBPyKkKMQLqbVw51vM8Jt9eu2HyYvLZ6",
  "key13": "5aYCwTERcdqDL4JayZTZruMEq78w2rfPvixG6V2WY6uU3QTsZQxdad4AnWYyhekLApmzDypu2est3zEs26mY2y7R",
  "key14": "4trptMYxN9THPokS1BzUcX2voMdCv3rpJBG6S3zEQ9eZWap4L8YxpRsZ99NDwK7GX9y12yS5MseW34PuJdmcncJn",
  "key15": "3EqmJ9MYUddDntwSLoEAxhRs2fJmHvf58ZtQpEe1R1LkzJGWEThMZULLJEqCk1EQTp2ij9raeqxKb7An49uRowZ2",
  "key16": "5YzkRJ2zeY1PwJEtssLzroJcJ41APzBoHDHCEFeB5NYVjfo4Qn6ZbLW56SREFkJg7HiiUM5Zq5NPuMro4TUwr1pr",
  "key17": "27DmkT23fxk6dswBLctzkdyHdQ6wbk8UYy6jeNdGYwSEBXD2AmYk3jAZMT8oXDApgKNFQ7vcFjSgiB7q5hgU87dz",
  "key18": "4Z5p8rhqXVPtWsDvxWBzgoHn2vXz3fuVv8hmFoErAhQn8ugRVASBvbE7arNRXo9E3gHQzwqmAh4bm6B9MLGVcLUE",
  "key19": "3hWo5vKLBTfKBdRnL4PKhR46oa7zfw4yDSN5HjrBqLL1CqAdhrWcJ2R4Luf1BVsjcQTHog6T3T1UJD938PFWnpwV",
  "key20": "2HzE8VoeagytJo95Eg3Zt1RmiRTTxaSR7VtCY3qCKDu4F6rjPXXSyj3JxrnYGBjX6X9fTyCUg9egeyUXWgCrQQ9V",
  "key21": "5RW32BduLYRWAJkik1seDVd1U61r6DeKXyih8ghXCNTwNX7Ajar6bnNpVgK2WzjCdtuP6i6tDh88xrvLQ4Mh3sUR",
  "key22": "SXjmQmet3NJqEi33wjYqodNSXp4REa84F267etHtxSVf7RdZjiDZ6sAPpa2SxYzXfrccxJnP5B7gsPaR9uhRtsm",
  "key23": "25fRAaubtdd6PT8JfZ4tkt7oAQbZvNXB9rDnBDAFrm8cUmJ7KWV1wZH1fj9Sh49rkeS6bRbWLZRFVvdZAq97jmM1",
  "key24": "5cHQQxwuAW2JPQAepgusGWdb3ciDWFeZNoS2z5i4ezMSYgd36rSzMqXD9BywrKL7yLNWiGbv8G3kx663mwuJfHhg",
  "key25": "5WFyuTrQnfaq2G3y8cM1fyZEcKnoyvm5WEAYUBLYdN1Kh4nNvRdimBqy2uhx2L7DxphGACX2YyFxH1v8C5FBk3t5",
  "key26": "4GLJDpsqr4b1tMk4sgRJy53js5HdMo2UmJHYxjMFZRXJCerpedxXQT2Sfrh4VFLTrAsCXRhcPCy8ciSebCy8yNpw",
  "key27": "44AHB5M686unoytni43yfbMarmBuohHVBnhNZvqLHMjgh8vVNcoRJpqCySR3NSngGx5j7cbZaWbp5mm4f8Kp3qGe",
  "key28": "3gF2FDM3gSejK3NwLjtBtsw4aibFCDiaKC6dQas67WEg6kdmuXZRE4qyGBjb2XkwAwXu2u4BfFKEqzumRVXfpV5Z",
  "key29": "2WZ7SJW94McmPsoAzu2NRaZw5bELuvuAcu6826FxxkaHUYe8yYkMtUXMgVNgDxXsmEHBkxQNHQV8hgGUjTBfRQ41",
  "key30": "5mpK51TuWWjggh1mcDXUfonJqK4CbcaRhMpkUJghLiMeC3E2vXS9D7b8gWZMijuJHJWfvwrxDcnz4zjv79WB4GnD",
  "key31": "48QN2W5DSSa6Xx7SfHHw4msyZ2qDRs4zuvb5rNptd8XaSjzkkQejg9Ad2A8HQKiqFw8VRvvQphNgHCRXipyyQrUx",
  "key32": "vrB3JX2nnr53iAHCgwnnXc5MLR797PHNuDXejf5x3XsRigZzR3NQx55kEMUmu3K8RfeA3Sc3iBK4zP3M2XYMmHE",
  "key33": "4FwmfDzTGU1pBqLZKmy9gsaut64w4bMdXe3bqyGDLjNEX4FRaNeM5jCfj74vMTADbaZPnzKyUWpYBpPKx5r9ES1D",
  "key34": "3M6FDrQ5HA9MgYz7F7dTyRHHTFMDtHiMLLjPiq4RmdvnFGnRP1kLZubirHQi2bWUBdmuqEjgCZ1j92GSgyjBMTYL",
  "key35": "eBis3ndNBhSLcndSSDSKhZgYt2hxoRXj19Aq5RHJYgyTYkd75r8CxYD8rVwJm6yvc2K9C8CKfKt84saeC4wpzP3",
  "key36": "ASb4drRYF7VYqtDKC3udeYsNg7E5McNXFQsNgPNaPwCpkgYURzXyGzVD1ZQzgdtniMjkvzY2aexPYXtfiBEPTRg",
  "key37": "2jYzzYq7Y2NWY87KCA6uDJzT7SyFRF4Z7WhZME88KQw2rfiooC3nU5Sq93wzbcc5b9B5SRKRL3ZCcMwE2CmXYgHm",
  "key38": "5nAj2DwwwSZADGszP3n8p81yZ98EUFjc4kSs1QDP1HbDiToQWJH4sizxS5Q9MRc8fAehFUsmF59VWzV7uNP2wgyH",
  "key39": "2zwFQsrz8uM8J9nZH6uE2NAtVae78S5UrqQ5EzXrRCTsxyszEGWmpCU5NfNmdKA8fTDoFJSSBSQontLKP7UJ5kWw",
  "key40": "3VbZcJJ9QucP1znLnWuLvUN4M5zQsZpCFY9N9u7GeRy5Tr4Eb7xGWPhG7tVmfDHWkGXc1e3jEWa2z96vbi4zfph3",
  "key41": "4eXaMgN82BBPEFJxt7jEtMmbQtsmhzdNsHFxqRtd9i2PGSPxfnFu2F42MBE3dc9pZhgEZCeDHNXc1kRgLDQ4nxYr",
  "key42": "33KCHwDRU68oRix5TJppwBs34w9Kff6JtfJS2NpSRsEzyM6wnUBKRSNvRZgSRvRWThzS7Ww3ApzsHLfMHmVn3hje"
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
