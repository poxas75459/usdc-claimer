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
    "tfeZAniuUPhZYpuvH7P8DhgjgaUEBasT2wTxEjuNeY93hP9onpEpsPa3NjWxvnUZHjVFb9PADZyge9ahx3TEmvT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3boR8mF39NW9dA1ZrkTbRaUytHQ9WBzkUs3ArkDtVngkBzF51disCBtiUbdbkTWB6RJkRhrEcTkTUSZr2pGb228x",
  "key1": "4EeCCLKSrvJHvdhSjmxnDhGNXun9hXtc33TguLUUdjKDTiKQdqZmdPBXqeYzvFDsKQyLALm79ADyqUEDwFLAddpL",
  "key2": "2978dq6gkEZzTfjTLVcCMeipUmRsXzwWfaWFR6E4SvobosFQrmg4m1bc1HC4egxy4iaERSzchQaPwzn7dTPcZWe5",
  "key3": "5VLmz8S4WeKG7RV29GsKnUGFUe7MbxnJwC5rHAV1rpSdpHmKQF4rCEBoJ771EtCkPNB6P8zUc5FkwCXVYFUu9h8B",
  "key4": "o2uoAGzZyjLw4D6aaJ4bz7hiGSjsSx2jTz6SXD8gCBZT32o9DtX6yZf34q2bYU8zXEcwajjHR9xcwRtnoNqr2jM",
  "key5": "Nt2vLndnLjZwhnM16WLnuyuuZbo6zchBb1isDkdvbEfjgisSwDszxBCRimsL8vX9CWkuNcN8wNZBb4BcVXtcD69",
  "key6": "25myStRqdse3Zwn6kN2QMaaEFcNTP6EhChWsD9qQhy6kSeEmAo762SYFViT5smYUNmPY2BojZXyFCPK83B1AyLXB",
  "key7": "3pmtmEhcT15etyfwUGbUKTAMJHtirArXXkMck9F1HcpfvMPnbvohnn9HoMZKz6ATuC4NHaJf8PZh6LPMntbimf5G",
  "key8": "32CeTh3PBuHfSfrhLeKs1kshE11RXuffa7EQpfHCyF3UCdrHgPoySJxRcjsh73SDPzyQEokVXNprpkMP725vxMzf",
  "key9": "29R9ExFCYcVzjMQXbpYn92L58qckEnqwhJB6Wg2hvi8n6jEjJyotccvPPbJh6muJVxunqu5ayHwxxuJmxHpvtGKg",
  "key10": "3D8WCgRMeiSfBxMjp7QVe9UtyGP6kwu5Kgh2idDCGr1QGXcTcqM2G7hfHHgp6H6i8H2Xd5wsD7LjwHTCBg4jqGk5",
  "key11": "Mpq4Y5sfRfJbnu3PK4KNdM4E47X4Y89LSNhU9L4REaDrRNprAbRsJYbi6w15j18UNLfoWyPNt9vqJHG6AaMWun8",
  "key12": "5XgrmhtZoXUQxh1ppLmyLhJ2bJp7qV7sYRiPKwX1TH3h6HZREu3FLtf1eefbntTP16VHyvrQfNj4aNSG1tjbNy75",
  "key13": "4AwKECBxP8qdixN1bw1ZaHX1rgKtUeTL4To1XSXHsauZ6a43CTDUWM7RkNiiNTXJBXM6J9dVyimYoEkLpXJw9X8u",
  "key14": "3XamC2Zk1UeYG8R2zgF8kNznfPjwZM4zCLxKNveinzong7wGyk8iA4WWLaJBWoHjGox47LfXZQKyZXz4WZjE5jbk",
  "key15": "M5tEpCkC758xzJ2TViGwbmFGdLrWiMCB8aZyKvGmSaueQUDQGvEGdisYgB6GBacgsAadmhDSRSGiSV3uZ8PusqY",
  "key16": "2TJ2cxZ6Kyp2aGAgmUs18Rd64SR3mJvHe2HJpWxig6KU5Xehc9sh5Ugh13nNUz6SGDhPwzPhAnN85s95sHE1d43n",
  "key17": "2ZBtLJBmLDKAzThz7KqiXr2HHrdtd3sPsaSn7KMxLgBeUDJBYPHqzZ7CP7RjcMkacZjWdXkgepjccsa7ZNua9YC2",
  "key18": "rLXM5Xk8Qg58HBpLixVXhYBowhevz2pFeoXiRpZQwTDE8efC5ncb2V5xoPfAJgbW3yXgwHRwSsSnCxUN4ySWnHo",
  "key19": "2V9tt8KkzVaktdh1FdYbkRFp4DuuJ1g7wufpdnegbxyVkoy1ofDHzijdcRP1bCN7bzSRPQRr7R6QdnxxS2BoVJYJ",
  "key20": "2G7TsJYPcfhcED4DaMva6QQ1GMn9Prvh92B8u8hXd8ntdVtx4kdSz7YbRsDum221PF2P3wtxDj5CJJXUeo3sf9F8",
  "key21": "4UcyQEh4PA1z64ZFgGTj9T18NsteTBbahHcp7DHr4w1v6pR95NThCTUEQsUzaeUbVuiLdE4DqPk8b24vyXBH3uds",
  "key22": "fDwonjsx5k6MTgW2m7b1vC8SLjv7qtZ3S8z5Jw9VJputPDCXjptFapoXuwmZkdvAm8QJbA8SfnR8NYMXqWiCRUw",
  "key23": "5krWcFrEzfzXUbbYmwLD1qV3XSexvuhzCLaB7rHEmSyEvAM7Fv1FpFEopjGKSByEZSK4UgZP3ayWJxxqYvho9MZg",
  "key24": "4nSaEcMZrkbc7AYkkbYbxrf3YPpjCSEVjFSazi27WzynjVVe8ATUMTDMV2qm8ofeppEPJzCUcF2rYw3aPZkHMmN3",
  "key25": "3zQdV8txFhgCvCZ1QogxDXyhgDN6ABs9Tu1dyMQowvzEsviwPAV7ezFdiEQJAyk7zhDKB5g1GcUgeCFgQ6tpcgg7",
  "key26": "56wUSRNyAyCPZsiob5Ga4Zq4GMBvLND8tSzBiLCZxByJHabHjEWPDg2HEBdmzzoQkAmYzxa82gC1nRYrw1TLcXh1",
  "key27": "5SGkyoHBPeDPw7XHbJj2mmXQbzpvkn2uUuowXfRTpedusZxsnhvJAWFFV3iZGHmTDN4t9ef21fUvjUvDn6Kb2BSJ",
  "key28": "22QvH81ukzEFpx1HEfBc1ASHwDWn65yY8pu5Fnkfvrz8QHBR5yCbo54WB8x2mpuQEHFR9FKpuFk9Y1i5uyyCj6yq",
  "key29": "2XMwKZkXLBx4Wc833jGsrQtku72RwS7iNnS2QhudY58jzebAqPAaFPD8ZyhA5VPQ15qxunQi7syYiJtHRvx5pwiA",
  "key30": "5rEXstdXPFvdouiM8YWBDASBwcAk8gSypUzgwVSudhzzqw4vCXNvAWhSyyaYSyzHX57C6245KcBJkXsWNiiTn5ge",
  "key31": "5N1vmySXc2zE5NrfahtpiZYvw68xDE1dGqWFQ1akug6opBJ6QhjMrZjQto3QdNeSLbQhrknTH3aUWs3DY1xv7mXi"
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
