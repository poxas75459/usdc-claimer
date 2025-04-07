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
    "2D53yXj79wd9Dw87B59F3GKAdJGgjqHdET89JQai9Mk26SyEwetXARmk9DimgXECDkKeAR4EdkacTFCnarZZqh9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "221EUTmA6RwbNmSW3gtC154r68d9qvqdVGyiMaTrePzvQhawgYZSH3jfor3mVUpB8MBwbS4jTwTbMkk9Xv7RTVUq",
  "key1": "p3TZdr8ceD1gNGmNVJGMqD9oCk8H27nE5F237cMk2ENa7nBizFkT8qKq1QbEBw1PTU9jnWiyrbywo7GgU335uiA",
  "key2": "frsXYqThV7GE72AnQnVEZiDTuUuvbe7JHCYUVfiviMUzvaXya1xfADQDx6UXPJnmT6podFVgSYGBXsWevNALyhT",
  "key3": "1kkwaTRHjReKdBJbFanghDVAP2kffknLUBCyT7JVEdt5AnRNmWu6u1zmGyjDU15Zt5VcLqUHUzpn3mHoBwDRVRh",
  "key4": "2PizAirPVYzUygzE34ubVW7UFDKQBCqHrtUvhMCUJyepVWjp9ssfyN198ZNXuuGn9jaXSZJvCkg9WzDom9dXwZV",
  "key5": "4RZH1LZq8ZDqCkczc7UC1qTgP78F8XSgqCQxn71eaetp7pBc7Ac5i7UaUpNdee7Km54DXLnR6k3Rv1qEjEg955H8",
  "key6": "26UwPY93wo1JiqQ6ScsTA7pdQPfxc1A86QwQ1qUA7dFiT9fKYiBagHPKiQCUCdApW49Qu1Ez4JxKqxovd72tfKig",
  "key7": "u2EDe6LjBCCk3vYK6FnH7rvm4RYBCh98NbN8Zq5xUe4UmWQQWYg5jKWcu4tDNCvYaJ8WpaC8CK6ixD6XRvTsQDd",
  "key8": "4U9yUbr93nDbv1HJn6FQTm6UaR4VaLyhf41ADioqfUTYR9Ak2mj4AbVj4q2PThwpUqRyuuxmkts8fV6ejsPhxqEH",
  "key9": "37tnaBZJgLqR5RoxMxTCbayn5thp2rXBdFkUYK8kb1B1stTTGbfcMWYdmXbqCosgo8rSFmMwdE398XESqXHcXz2J",
  "key10": "3WymhYEtZpfAT9GsuD62yJV5NGFxDs5KFuwtQ8AcDryKHQkRiB7TjDA5EQ7Cse3qse1ViLYRRSAohFPQoNYq9Ngg",
  "key11": "zgZJEQf8awUuLCSTGzm1p2SckgXLoo1X3mN1bjBTSuTbM4Tm6tc6vvxxmvxicVBBjVxhPKfmjEXmoumfDDeVesZ",
  "key12": "4vCDQRLKyjB4p1mfSs3Uh2EWrcuaaGwEg7zbiEhow4JEXTcwZ4VhguT3rYEt5gj8DJyEKhQTA7gyswNP8juBJBog",
  "key13": "5RVHTnMaYy439HUiwt5jSfrNgeMiCA38DNimz67PLpSDb9mRrc9dg2Bz6eqBFuQCgXcFB8Q8veHmxfb1Vxmtynoz",
  "key14": "5ngEcy9Br8bPz1RkzHaBq2XJbjMbhnEvMbz2TeihBWbTAEh2bDBBJgnPXsEwacUqCL57QyRiFpkVSLBHzDPoqsgf",
  "key15": "5H5efZANG4LZ1Qz4ZPM9TjU8W81tZyvkUFu5U5sTJktoykC24EmPdqE2Ctj2dovjJ3BkNz4HU5sLTZU8RtsHq9c9",
  "key16": "MqyrXXe6ZrMpec8MBu3YeSQ8ve8MePzZijtuQAt7LAgqHmqvDJYRfpKWGvuamkSN9YYiRSzm4841HAp3ZH7qKWQ",
  "key17": "3HpbiEZq9LLpyvQtG9moj7DYVzmUwwZ34PM9xEyqNUJZCosjny4mVePMSgNn9qhVqX3v7PsLwc2vfSC7MXHNMgba",
  "key18": "4CMwyARVqau6ukmoVxFMHUT4NUXk3A6ewYfuBWtnypkNrBcDRiuXhyDZkDJhSSYaUMoofQfQwEePL7pAmPj8HVzS",
  "key19": "3Wjy8ty6XehsMAu5j5KhDoZXR9MbUaaB4g4scYQStYDkMWn4cdCjuiiQ2cBhSpGuSb6XcinULWwj9RDjMwjKDEEp",
  "key20": "4DqJxbzhKE9N54WKt27JcSTKu9iHyhSRVMGjxfZBPt71PGGjep4TeTAbgjtDKoATqAFsuE5XwVySEV3HfvZAXtbV",
  "key21": "311XDwSEfzHGPborVPkvLo3H8z6eTdwtXi1aigBBbsRgwvrFLwNTQpsbrxYbKyyL96CSJdqz7gMShxWrvKetsTH6",
  "key22": "42zPPFzbQqfqhaGcihbrRrqxxAPX2trY3MViZw4YsfrEK6CTDCVE152u8jmnEsvAB6XjBaK2x4WcM3ky7cnjsco5",
  "key23": "gPecPCot1nJWU868Ph1ecJrT9HJkgUam19LyqFy4t5NQ7BXtF7ApzWjcW2VeCMgShE5nNg4y3ppmTDFHqnAobW7",
  "key24": "32oqT2i1dU8HgGvbX8yy86d5qd62dNFzWwyzTsYEyccPNZziuUGj8XMSoHgCVPPg8GVT7qsWrCpZqE2brsVFaabs",
  "key25": "4hWHugTEVTp6ayEEvLa6Ataz3CeeS8JUdncethvvBeYtT4GzEyW7UfrMWSJeTL2MiyMqPdKj5ED2iAnGUy8hu5Tr",
  "key26": "2PiLooLn3TWRFMKnZ8xyxZ5okPdFZrGMFFz11J7bWyguCbThGqmw85ncpJnFN144H7jPio61mrT7GWecZrBRPQkX",
  "key27": "5gGvAS9JyxTREEZd8prLoopyPhDer2WLPAjeCNvvCRtBehe4z682CnvfGeCZhWuXdi7eZiEYbaLrrZo61qk8Jd7a",
  "key28": "2m4c1pDwjANKDKgNjxQt99cV1h3NyfuvwavU5ZESQs5A5x5Efxyw5Eb6aAMeTKrcyNepNm7JMkrpfXYoKPvFwcAc",
  "key29": "3SDf1pj2qGZ6V7tx7TUvTKLzTpfnbUsonUVriL5UciYig66seJJg1hEiH2f4fQ4JUzSr2DWuVrcMJVUBB5VgXJAk",
  "key30": "YVGEB6JaLMiJ37vnmAkA2LGbgjdkUKMMPkkzcGN4ziCm9C6RmSZZC1Nyebxny8eSTuMFVHkgAgD33ekdU7hce2T"
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
