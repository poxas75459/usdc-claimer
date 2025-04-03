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
    "3xosVtDUAgf4rRVSCNnKrKqyMSCz8R13nxiDW3LZWcXPxJm2md8VVRsfB8W1x6nZXzwSmnmdKtPBsvnyUpLxefHJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BF4fRCbMyTkkQ4645kHYW5Hfp4mSEcBeS1QiwLbnrXhLSCJQeLApZifWirvFLrDumpeXXF87jDdxs3Px7EdTA22",
  "key1": "3jS5RPkw9y3HBkjdKP9F81Ew11Z5ZL1FSZQmd7xB1DnW3hSGeB6y2xrm6nzmKceNRcrddmyhPSFHupfS3SKcDKk3",
  "key2": "2vzsboH8e7xQJFf2G7xEZDW1CcuXRM3fpjmnP9486PjaoyeqSPz7ofmYPCjaYPqQPrFAKbnkfHoxj67fFhDokmic",
  "key3": "2UrwFdkD4wa1w6iLu3M62SRbfJzjXACfyFTifoVLdT7sEFjCe6WFkHi9BTuoEBzxrLiuGmZZmvcHr1tugrmeGUKa",
  "key4": "JK7ATBJ18ipKiNPjZvYrDE8DzRHEgpjt1Z7KsZAX8RgffCvpjkuftjg5ZUhq718rKdijzH126mZH5Jx3dWdVtPZ",
  "key5": "4L37T2LYPcN1ndBQ6o9BEriY5p74DMZn2swwf5oxF4cc7bofyBMA5sL6ir3pjZPa84j1sp7MappFygAmQtJYxN9n",
  "key6": "3XNQmtxbn3iRYjsw16v2VRE8efzcjtd3eKmfGjopgG9u1MxbmeBLJpac49vWNDe6jK87R7dqGLizDGyc1x52TiS8",
  "key7": "42gZni94VMxzcTQ1HHKJWXYreS6hrVkh8GCsDQS4CBdow5obtRFg99gaVcNRanYSibT4fYYjd5kN28BWhbij6D5y",
  "key8": "awY9zi5ABKcrB38NYHtEiaFUZffYPb76ySTSBjpjFAyT5eYGfqdfi1YgPRAKWLA8CM3bMB1nx9iU7pBuTRtHrF4",
  "key9": "BfqosSWLdPFvYsFcx5Nnccpddc5zFWymCRQdfynRYGSWG3eHjV5eXtUXPrv8JnCxM9ydTs9SsTRuLsEGRU6sb7T",
  "key10": "3LLFYe8L88yw1AgBgWwUtFhtXtMNJKiEJEaZmgYoKht79vQir8pJMhxQvrL5jGnub8qwdLiVStv9FD9qsjdLcAdW",
  "key11": "3KLfkairqN7oXSogNnfJCEWHDne3AsR66x4X8aaat6ze3cuYU6Hv48SMj7o8Xw6CSjJ3cYwKFYAzcsZvk3SH6csG",
  "key12": "5ADjqLAzSPsXuKdDq7QAkHrPQBqrZ7b15WBMem6suhpT4tRiPbvbCWbeiP1oG4qtKGSNeb1nYde9wUMHKXsZaSDW",
  "key13": "y5U3jcjDqE4gyoCjtX9UQEgYZhr9SG93f32zuky5Udt6Q45jqLLyS6q9SWFrcV28ABNnvMRw7f9Yb7WHenULvho",
  "key14": "3yNxdSUiM8PKQFvFYncJRaENLcQdf5dFtrvd6fL5x3AcSvasv78t6aZjrPG6cxbE2TecwvTgVPmdMnkpfAy8v2ia",
  "key15": "2xyDDW1Rz4sNh1XsHiH1YmxpMnfgRosW5unD537Ab1b7ETZUDZ5fEx55LA9KocxLk7yGnhCM83sfDwyyGgTLsXh1",
  "key16": "62YTG6oeBX3ezdBiKWU9yw6ZKMvCUyLDnXJA79PYj1y9vLfSj6r1UzywuejaSCoXP4vF5jLTi1zRUDCfUymVL3bL",
  "key17": "4v4jVPHESWssps5yimi9scCgDfBDA43RG2VKB9nSY6yywuYdxgFkG3QMTJxos83YuozDWEwypscp294r61zcqMr8",
  "key18": "4uPag8C2cj7ASYXV9ZU7mFuSo9RWuGHCfiTzkzDL1M24gS21gvsMQzDwo12jqq1uXRjvFvYm8EdiFqCsxeZ31tTY",
  "key19": "25P4ws6VcvrGaYYsdt2sS48S4d4KWbfj2WeeV6jZV8kSCBr6qB5xNTpDtJ7GiQfTJF7sUhTWQD9FPPtKeXXCALVC",
  "key20": "4tNBabu79BdLq5LduGHoQDPj4uiHwAX5qf6orBdvKH3DCnXud7NTraHH8QWje6K8R1eADje5ERYj4CeGJqaXwHqR",
  "key21": "sMu4b86huCwcCRB8mNm6ghzFJGoLCt5WMkXpPjsFvrUF2tCbDV35DCakLfMgxPzxWYt4EBAknkm9LgASC6jyLww",
  "key22": "3sZHwFrXr5bpJn8N7e9oz7g2RDt2bELpRv5yTVQQgxEHcT2GEoTntjqVeZmKgPGMMaJr13Ne6311RZJjZrE8Evq6",
  "key23": "4pQ2xLxzSNzXF8QxZ12apdxxxF5y9uMFhnSGbJukeUumSDR9o8W8wZthcrJutVDYTYwXLLebckELsnfAvSLRxDVk",
  "key24": "3pLJcJrGYmZqHkyppeaVTzUc8MNXFLposNfLS4KjA7qXtrsq5xZKw8NSra37EuFW7fwGo5oP2QzsmnkLS65NTrw6",
  "key25": "5D7s3aMCUpg8uDfghq97o1cZwsKWjYZb7QXhPZtok6awYVZ3cqvW9nZxMzFNFbXsvDzB73kVuXXKh7h3PmJBnYrr",
  "key26": "3xH99wsnoQCQArHAfXEy6gEwucUnwEjBQCFLujgKqpACzrnJMv4wWjk6Q1ue6icXmDwSwMeJErPn3wbxUvSzrmop",
  "key27": "2PEySNkPGnRWHTsP3gurSHFgNjAjZzGHmYPymt9qTYowRGecjmPNV2vQ9dT454fNNXbSFEE98SMgUdHoWp45A6Ng",
  "key28": "5H5tBiHj71AcKxsvR3GTKzSDXN1h9X36b17XFwEHbSG7JU1oFpKujPRqSHwMyBAgZwNtHfSB73TeHqz6s5BB4d5X",
  "key29": "4So5mitp3EiXapqXMs2U2n4SHXQpSFzbGPdzCmEfAdPEbz29zLs7hukFLGojdx8E8QFwVRnMSE2WGqQ2ZcVkgJVZ",
  "key30": "2WPEttDTexrNiDsAr1fugyxL2pd9jEhjze84fakAfj66gnKoUVBkfVLvwuBRjgq3sUwnn5f18oSwMbWyJmw4yErk",
  "key31": "4DavFvpi97DVntw9JNFx3nmBaaLLAxJH7UEVVioCNp498bw1W6zx2jMC3VvTVzjammuALWsa8UCV76SDhR7ac7Mg",
  "key32": "2FABNs5JF2jc88RGMJtb2ChY3tcZaq7SQSqfY5EYPhDyWYMdDx7P1xvM4zQ8JX6hsnVDD6V39Hrgq3tkP9gzqqpm",
  "key33": "5BLmaktdtjCXWRrvDUFzvM9vmPTJJjSWqyiSkSLvS4jSdFTLjvqRrH8kUJC4VRpoijWaisZu1onZCHWDzacykR5J"
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
