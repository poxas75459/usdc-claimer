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
    "4Pw6HFEV291Zh7qzFUmVDdxFFxxusLuYxTkeVg629gsykB5Hp2sybov2ijGCjX4BkiGgxf8wG6akBPMa4vJT8hKM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MhvRX1J7MJwxmuSxKGVPwEivbA8FjiskySqUdDgPonz3cdzof8EhywE6JoPqVvTpFTBEzsqXiJqzNv4rEhwbkqN",
  "key1": "2HrkFDeMPt5EBgaitbWHMj1k5PgeeBkgFJB17h8i46Fdc4rGekGAmZicWryKyf6RwCDeCpDq3d8mkg2h38FwNePv",
  "key2": "2rjhQJR1NJ4Arhjgx9AqwmDvzBkTeaNS9jzzsYLJNB78wf541ZkxioK2aPKH4ZsBFXa8q67GzdwkSr9mWuKzB5ar",
  "key3": "5QK5k9ocuqcfBJSyBdaRVanvYvfUXTWYXqDgZqFMMPRWrEUSawBc9T2vb4F37Ro8LPvL2KFF7cpjoT4CJxGVR6ip",
  "key4": "2j1z45Hdrf3gRW9rmwAnV5F6M9W9NWQiVi5VweQZ4JcSVMTFbfDSuRF8yCdEidrE5FTeGpCdLP2L6aeM5NMM7vBq",
  "key5": "2RskCT4BRXa75MeCGmeMqdCCTD33y6Kvj14ePwaBoqgg3V1FtvroY5qD9ua9XQ74BGP1BsnscLF2rMQC2bVgc5Gz",
  "key6": "28qmS4pXB6aBquL633GMkFRCKWjpjFYx8FomatJphE8GKD8RRrEZA1ieG4zcsx6Sp9sHbdHzekZDRcJdHXDwVjUE",
  "key7": "4LcgjDFY2sD4aQq3qeYoaAMVVMStbL4bqK6CNv34Sm8vYY2n5donAZCixvAtpLHXtHGxufRfiCHSSkJC8V8g9Q5X",
  "key8": "5ZRKktBC1GeMMMeaWovNwkmgwMF6Hn9vvwvuKW6jmW8uY3VFERzfm2uH4VnuGwvzhW5DDaB8ovsU1CRAgz5d9FQn",
  "key9": "5HMtdoK8Estkhe7wFG2EUYugvdJLX5ighnNxgM8kEzojiWZUuSJgsqE1M5iP12cs7LwZmf6Yzk2An8wj183v83sh",
  "key10": "4VXVm6GTg6YUrmiHbk6cXV2r4kwoFcQDNc8n2FCA1CbAXxV2PnhKMXRowPR2pqsfbxhNiywhvEhvbo8nZotUVaiu",
  "key11": "2hU4m44tv5MZikaAdveF7GB7exinqnf3Mmir2Ls8LWSionxvECZxkCxACCb9wosEA8ncvFsWZahfDPvmjD8vE5xc",
  "key12": "2j94SLo4cx7id9cHt3mu23ER4Avc1gRcoyDtZxAuHsXXnRsfbqXSncAMEdWK78hfvDxLQVaVRApMfJvwJqxF3ybD",
  "key13": "57FXc5BoB2nves45FRuenFcS1uD6mH3C37qs44bCdSN6864EV2sq3UBcbVyAgwZamCXxgC7z5ZG8rDQq2EYxRED",
  "key14": "2TbKa97EPm13u719d9L6BkxaQhuQvZudffyZNPL9oMRQdNYt8boeqG2H5A8jai4P9s1YopQ6a7A8ekzqRRu8W1Uy",
  "key15": "2yfsst2vNr7eYBKqasW45wtHi6jhF19GqFM5hhVN85zu6x6pLHEKnBAfaCD1K3yTWXUBuXj4Xffa7HcnQ4E9J9pZ",
  "key16": "3TCGDuBfrS4jyxeHWSiAYyu2RMCBkrGDGsM2sv9BVrgE5Rvfwjri49yEjTsbK4TunLxpDvdZJDtVph1Py7nT2L5",
  "key17": "5j8U7VDHcVQvz8G3x92izLwAqZ33uFuKvce4cbMg3YSHiya2s156N138unEUKPDqUKqeSPETwcBM9tRzkrVTLMHN",
  "key18": "3hSwxvDcGNQFCRW58A1vCpzEzkf6wmWkBGRh68vUrGfdtmhVfNVuE1yoLTXC4Vz4DxBHfaWVMX8RPLzTjSVad3ro",
  "key19": "GdL9XZ25BdaykzQByqJW1MogfDU1GPAfLjdsEBmxFD6ox5VmkkTcbBLeu9pT6Ld2Ng1u4znbidkeAFV8aNMzsjg",
  "key20": "KbTDHuWjSzmfbMnED1XKTrbb2MVsutNfhGQcmCmbTfX3AFyGRMrK4Vb5mDC69rvgow1S9SuQkW3bWaLfEqFyfdh",
  "key21": "y13CowjLwLuUD5or3mbEbUDxoQnbWyHDivwLbk6wJxtYmhD4fyR9gtvgwu36uVtyvWknjMMDF4tkL3VrufKTSpr",
  "key22": "4w22nNx6Mt4XqZERSwdhgyk19SC9BD3qe3aCKtouBpP9bpCTpdM7jAbhcpp51B2aGB85wNFXU81G6oyuZpa7qYZw",
  "key23": "5xUk5TcFcSYZX8MJ1PzHfSqkok2xxtqAZrd2VaqpwNDrwhnNR7j9jVypC3Pm4gbbnLzbNcAnJ3cCgvNwVcNHKapa",
  "key24": "4SJFBJrhG4hs3TzF38xTSqxUdLt31Din3dig6DoS8hZNuciHHp1em5PEeJxULcsdgeUQ3CidtHMwRHHErwnGyBpj",
  "key25": "4LMoL3DVhFSERTeczNFGu516LqatywE9iG7Qfs5Rsbbf93Brdg24ELUZ59nToHtL1FmA7A1PNYPi9UvMfQTs65A4",
  "key26": "nMpXVXE9nrmLayy9H82qC3CwvcmESkSpDxGCQtmxeavh4tmLWBm4sa3um53FEs1Kc6ykZqkSQaJF3ae2FHf7i8t",
  "key27": "62uQad7QNvSUvUAJw9d3hjnv6ijr7JmCrCFzpQPSJvFZ8LNfMpEDNcoZDdeWpTuNL3pkFK96BKxehy2FRUk26Ymh",
  "key28": "4TjStB8CMHMpEhQTDatntQ1vxfAVFwb48ei2V98aNMDVTCy5Kqc6Q9WuGKyNmbkHZnnTUhxGy4Rutcb3cpGWj3mp",
  "key29": "2PfQoGx2JB4JQa1LH7SMoWBhpmJXCfv3X7zFn56DtgNYeHcRdi7GXTCNnn8i7YcWKg4mVwCtQgxu5XNCR6pcxLGa",
  "key30": "2FyFGscVboFRuLbTjcwE6HmxFXtLzySrLEvQTKR1yfD9Q5oYgWAXJ9i6SWYpihDBwPzjW18FtJ2MLBsEXX3P43oW"
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
