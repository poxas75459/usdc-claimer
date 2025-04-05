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
    "3GnTRFdKVkwGsqbHXCLjw9hvEhWnX6DD41XMJe1stSW5gsiUyBwZC2Rh6aYvYSXhr7MFsw6in7SUmFnMqPgzn94C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fUQ4NovJPxgtD1upF74K5SToudX7osAHu3VPrCumNPGGgKVMwX1Gzam1BcTb3VhmRZiB1gFcFR4NhjQB9TB335R",
  "key1": "3Jm3zf4CehLxFh2gSVWVH7xq8jLTGv6XCMEVk6BcaEp1HTNAijwbW9SQJzd5k3V6fsX8NogVE39X6Hu22ctkXvTs",
  "key2": "22AEWhECCqYX5ffDUhEkNN2idA2hSB1nrjVpwG83uAHAG7ybe7ghoJTz5hkvwAoTCoYp8VVb5ab3EvN3FSK2hRJt",
  "key3": "4eYtCevthprHha7T3WQCtw721L9qqi74vQjcUMaQC99Kh2shX1ptzF1shVH39wKaiQ6iKui5wPXJr7PKxhpbsPYm",
  "key4": "5MJCYv4zucVGoafJTupGTSzaECwbLukYULF8Ey3x32UTwDm4z3a12uQy4pZJxtLVVSBF18CXPgvrviVuodyYUzFb",
  "key5": "2T58HpwtPqL911wBVWFGKipZP7Na365za3pqiBWYVwAUHEe1DG28H44YF3fNp1xGw9i5KQo4k5VYfunvW7T6pQv9",
  "key6": "43wUcew2F6yRuHpkD5H4YVNqAcUv2G3P2vuGvPtV2HTHAqub3SGrKRKFRDAPpaM4JPPNRate4wiBnvo26JXD2FgP",
  "key7": "5qmAfduUWAUFnsDiBfJCRGCTAHEEobkc3uC4bwRe3uzTq3eSpWwYXhgCKXcfNEbcuUbKihAWr41d4FQdqspzD7nZ",
  "key8": "52Wb1sj5Seibdsq1vh2cdVgc5FNMXT5LEDV19NcB7NoVtvcHhqMpGqf4xJkSqe1W7pjXxsHWFXjYqMSSc82chaFs",
  "key9": "3jPtnMMvSFjzZgSBmoaQ5tLcLdx6FBRE6RiSX1oQBoordJ2DN7STNWPJE1x5ve3WHS2oheJi91HccPXMqwxHN2F4",
  "key10": "53E68przizt95BMLxZhbG8XsbBgPXxWyD2xXMTvJiecDEdRot26hfvg86XjqerF5JeDSqgxkTYbNoQg3FQcgxGHk",
  "key11": "22vmcTj2G6iw8D7oQ8e1EXhFLK5fM91SQxsDDrHgqa718pS12kZMLG8SgFGbLickEo5eCaoCFDbH2wAkwt2X3WQf",
  "key12": "3hcB1N1pTFXqL1E7FMwA54jELaMW2qVmVJ2Jng8ER8dgiwvAANmFsUGLL5kRsMp9vxBt9zNfaBLzyiW1Zyho9cKn",
  "key13": "3iuw6bASJgqd4QzphxWdi7PfyomMbxv3MMqu5Vgspa2ZRe96DsMwk9i4sRcQHYEL7fpiJE8Wym7He4fkqJzWeojW",
  "key14": "Biqc2zJe2GWDERWNTMSdbv1FhUR24Cz1ZUDWDa7vUXZV3VxiNgb4UGXY57sqmb9yJTKx23QxDQY5UrwrKzprMo6",
  "key15": "45kHBsR7A3AdvHxpP6MPCSBk5n6Xwfn7FH9oumMRY2eRntcduHTcChSZ7bkB5cZHpGTifiGnLUTw1UsDsi4iJsDs",
  "key16": "4VfoFvRjhJPXaXDRgkJTT5Bap6rcMXTXT95X42pubyz3x9dZG4o9vqJGmqQLpDbuo2dVdjQkBsX75o5kPKJz2ufH",
  "key17": "yQGfzEM2ipTrdVVXWYY2z4Zb1AzpfqV5KY3W6fSBp9xJTFLnEH6tramGrJSc3554AF1zCKAd1eff9ZJmTrXn9Zf",
  "key18": "4oxjdtU5ueVNn3EdQrTu78griaWw7UVdpdspmYqZ3SVe7Rzrg2F3MYxNNwnKC7uU8cQbe3nFa7wDKn45qzqY9sM8",
  "key19": "4Wyb6TM7GZtYHwTUc1V2pPViiYCTLCKC5WyRkN3m58cmd7YpQAZqk4vHDA2wv1qGqHvXj8JfttCJpgP3zdZtiDDv",
  "key20": "3QrHRiYzXMCkTXTwDCA6dGK1pSSFmBQCfAd1r6hHQq6UHF1SNvrEZxDqXSabjBDahoLmW9sBTr2N3NrzxcohAP4r",
  "key21": "3Y44u8BseEKs1hDQbgyLLvP7S1yy2iyS22zcEkyabCyA8PexQEcudY8LaK7hnSHuDhgePVwpdrL4jZo3q6V3Mk1L",
  "key22": "5REsBdUAj5PZqCyxo9LDdVmq42BsR1r9QmLLsqB5d8VtkchHygpeZLhqZ8dCpqfDRHcqrJDidRY2rHk8rTq6UhcJ",
  "key23": "3b1wdNBoVfPxmXXNesFj5qBoPR1L2muPXH4JZecJcUCki5s1jJqMVWqxN3SEv6xjH5BJpqvtqrgBWxbMMJgddL7J",
  "key24": "54WjccaPmDwxSKoCsDZmpF6LjHZpPTEvHyc2j7Ukj4pxjqqgdz9PByS9P5gCM1AjPXYKCN36B6DPttkAX7dE4eDE",
  "key25": "3B5vuDdZKqtRKeWjbnPqSEP1xBHDTSL6NWvwtpgUpJ36fSbxCLvoGk2Tpq3RcjoAXpaGhGaB1Ht66PAQYXbAb3d1",
  "key26": "5wPnwKYoo1S8jX2mUvTU11z43A9pExuVBPb8icaDTRYWA2YWjkie3tQrXvdMscTUraJjF1jqz6MkczZzCxo9TGkv",
  "key27": "2dF1KCUa8RQ8Bh8jBqu73Hu4VNUnMWLM2W3xmcWfCtXAuguuidK7BYvkHSBPUWkDkop8itntUVBWrw1NFo4JDLcq",
  "key28": "3a8rB6aoFKxSrgjNc3fRo9Pe11qGEe88CG1v4TTo4M7Gf2eYmHBxZXb4R72NTSVDDVapTmseGLvQ16yCTg4yCUaB",
  "key29": "23CHGK8drA6doTmFkRKNHfUdmMijPdrPEMESSS6R8XFpAeoY4GVo1Tk4FJRmS3ncHF1Rk3ii3eGt5L7vAUvvznWd",
  "key30": "53f6a3fxKjuvjbwiwP13bzLLDQ3n9h5dFMwTfGPvntMYhMeiV4jYTN6HiHARiS4mRf2mRcouWgxTXKPDy3McRJ5",
  "key31": "48cmbJtnmw2J8nygXezPsJpfRKjggpLzEnVwfqXKTWwbe8Fee5YSRozaqDJ1r8Zw3xZ6M4uFdf9GMbtbfyZFTrQ4",
  "key32": "3ZQxoryoy1SS2SDHBFYeFKSstM85upS6nWEShUKD3DdHB79pD5vFZbp89oWCrJ21TcGP6zvJdJUsLobqMAPjWUf2",
  "key33": "5j8zprRxLskVJLmgWNob3yrsCszjiV4sK1Gmk3mJajTc7SMB3fNDQbKCGjb6ddGb6bxHm87TMudfoYDUkHey8r28",
  "key34": "26GGUiE9DXMT52LGCM98siatja4aE1LfwLk1DQa8Va8K7kF5tD5oXaMJQE7Ekh1VwfTzHfRCGgiPKhHhfXKH39QN",
  "key35": "v32hAoFpoBBsB6eCCs1cEYaVTjhnLBLbznr5i8g2hLVUX2a7iccrB8nHbRK4z7hzDFZeawSUirQbB3nxfC9SXV6",
  "key36": "2obR2NRCFY35CWPNBtVhhtHpCWkPcsKrQZdpnHuurnzS6escMPECPJKe3yuFAogG4kzovBcGUXVnTEHfCkYSNCWf",
  "key37": "32BubXZnF4Z2gPqS9aoLSmqoQP89vf4vNVtPkpKSVvSE5QKZzeYjuhgLZrdQzKRr3rpqE4pi2V6jrYkfJRFz4GLs",
  "key38": "4LTx2AjGHRNT8e89j6kg7BoMRsD7HL3zSTALS1ZGp178t3csW9TTWato5WbnUJbdgQV4JRgrkt61USjxC5y1KDzt"
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
