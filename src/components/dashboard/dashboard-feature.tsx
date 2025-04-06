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
    "JYqorQsRuvhng3vAsnchvQks6EaPDD2V2wBn7HZ9GoSeduZAziaUrxN7u3fWfp7E5rVdYzydpirbvNaPL8k5a9x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "r3zTVcxr3EHsCo4zQqsWS6waPmfNMk4M5mQ5QVQ26324c2xxNccf4YZafQcKXCt1g4nLin839o7u6QVYqyrL296",
  "key1": "bjjxgZRELnrykyEuirco8ZW7eopSFrgA7BK793XBcMjC9BeXq6N25K2MvDyi8kvXcXDyKZjAGAsmhmFRcPFQ7z3",
  "key2": "66xAAx81NhJTZddrKNLsNEA3vTaHhSGGZNaZF93SJN3ASmwMgbotfoJXSaMEgcRiUW5Qc7tiWtyfGxqgEpPGEFJs",
  "key3": "4GYsFtuYowS517t4FuQts6YKYwYVG7TXjQJxvccptqvgjWaBZKSS4pqkoZqR9wumrGkCaFdJNeycTMmcNRQuw9Zk",
  "key4": "p8ygHfNaNGa2tNgH7BHVLFhfF8fk2HDPiCPCJSxQ5DcssjXSNwGx2jkVSwNozgXZb7WtLBmEVEcrJS8DQdR8QMq",
  "key5": "5KLJxghUjbdZZaW5bWgUmA5mu8hKgnC6DvpZsPEnLHj189GNzqvk2yhkdrbcqbtCvg9apUNWYmsXG88SiejqNBDr",
  "key6": "5a4w4PiJYdDXcSPCq9cZ28nzRKi2gbytP1UWaw7MTp76VFzydfMSmt8RLYxGjazCdZmEWyXr7ZrVKyjtGQDqoEJu",
  "key7": "r8nra7TpEq3Dg4E3z89HBdTFUG1LYS1uiVYi63EmrT4uVg3ux4VmyfsBMwxbhggY1pbv3dZ5iHJpaiQEJ7XFwBp",
  "key8": "55kbHmyUHWMpNX2pcFiduSoAGP3whQ1NKq3gqiNc1U1J9X3nRdy3XosoBfbpAVJCCLPUK2zChnHroofzs8pmNrPN",
  "key9": "3tjwsVcNBLNACDRfCgRSQJFLVTJw3HNMSJVv2o6AHepkHfewQRd2xBcJ5jNbk5temQeWfDjHGgB4JWGiZMjmWYj6",
  "key10": "48Eo6TCvuCJvzYf5MqNwdzcVLThzAq1EBAZMNhgGUzLor2Yu2Ae1Gv4cpNnuqJAmu41h1a7uiJuDD5nKSpkXcX6a",
  "key11": "3SYKTFWNcktvUfKxjsDbTj651PN9iNuA5uwxrmf3VvpNr3NehX44RyfoPdjhounPwYp8eUrdc3V6toHxiTu45uUt",
  "key12": "26HvMkxWhQor2RN3oGtfNEyVNCjjNnMhGNhCdnKNGemtSjURs9sBQq1xF93wPQmjkkAfLnjzCSZfjWQ8CfyMChiW",
  "key13": "3puAYwLJY8jCEkzBHmS2WPBk6FicDtZ3yEXhicFTkFwHtSx18rsMZ4T3zNSxBuvdqgdddD211grvmTshzoRot4iC",
  "key14": "2uLvxxihvsq5nPa14GrHY3Rc3fcppvrVLE4NjHyw2HXPpgDCBatMshd991LePXMMK9bwdHJe2euEu3CgfQRaASXw",
  "key15": "4GMrUuDaHmcECJuxsnKPMHJ1YRK8hdEWQpPWJokxMXE6nngXCiUjudvjJgsZVcCkYW9LSh9QFRePGynzUUEjP8jJ",
  "key16": "4jAZrsuFNNzLHUfnmUknNz8eD5YCXm9X3UevCsbdshGo4zXW8VfFNQ463jtKffxBjs5kcUBoYbzZLxdJ1RDnnHTf",
  "key17": "4GVq7GBwzRKwj66TijNPnore58j14qfmy8nmBXbH2M1FhBH3PGALwppc9mf91qahZD1fx7eXxHCjfcXbWe3JtDS5",
  "key18": "2QXrVhhVyZkc8yctZM9QVUJceiVBu7G3p6zSt7irmAZ3gG4o1GbyGA9C4TeuseL4NueKu6GBnUVi4cWzM4Vvh62Z",
  "key19": "5ZbqVUEuSyDg1svEAsLKWrYHJDPXB7rEyKvxfc7nR4eHk8CFuFPSdtDaP5vRnSBdTAZQLJWhUHcmV5Phi4JUWzfr",
  "key20": "42iMQHUmW6uUUXYdDzCjybTqEtdup4jVQaULhaDx9KMv4c6siqBQFuuFHQdCZYkRc4Qn2PZ9f9TuGnWEjPvC4u2V",
  "key21": "3wJWXJ3q9FUgLGFR2tCGX6WiFuZhRRxkrQLu9gDuDDcWmKyVHK8jxayb1YWM1z5xrrsaH9HfqTNNyQM6tqpeatt1",
  "key22": "3u62qmDBP8vhN6GPSBWV2AwgGFYcgMVvqKBhWzMhqaWD1gLvBExHNxf3v2nQr43t24y2fUkdPq2wPpixq3XgoMdV",
  "key23": "4VHiq9XpVZdEij7gApLq1mapi4ooucjvuVNb7Zkwcx8NzeV5tz1PN2P1zZ13tLGVor9WFWNtdW3u4FNHgDkFuAM1",
  "key24": "5SS7oZA46AD1XRkPGvThFFPyx6JeVsZikVw5ertzBjWzDUZPAEY8jTaa9av7FA28XcWSMQ4bXzoi14ugVfQjfKPY",
  "key25": "4eGVegcEy43vtBKRjfMsKhDoTSkfPgaU4yM5kRm2vL6qwceSi3cJMhPTLc3JzCRMbzyRriBBR8eAhPDSD3B9To9B",
  "key26": "3LnqQ7gG6i1RAySpTbuzbiran4hfGNCbPZTamBxptdgarmkAjq48k8xPWhBorTuDusfSTiHNBk3HKCbTtwFteW69",
  "key27": "4boBLfxYDfUFFjH7A7BEoVbLhdUtyKmZFrwfdKdsFpjscgXxHsGN7BbpRAkSgvBWDgAw1TbmUqLnF88Ao2ATRafR",
  "key28": "5ncxD46n8qsDbqQozb6ksfEWzusjLWUd2Q8MMMxadrLhvKUmAv2xTtWkYSf6knEyqTGqNZWKYyRujKar5BxKJL9r",
  "key29": "2fksXqkk6t5iWjeSr1RFdjvodEZcvesDAG2xCP47q8zokGd5P4KBKba2Giimcb9urS8h6DP2MGWaPsuA4ETaTtmS"
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
