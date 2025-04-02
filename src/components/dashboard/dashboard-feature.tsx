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
    "5nktA1oDqRDMNqWzjNhnCdEUfudTVG3yje6Ur3TD1vhxfuha8Dx2Bdw9C76YGT4RnBeGio7rRgvjGNKWxCNj2ooU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MEKnnucqiWhJJihhGmVMkv6gEK3d8WoPS1eCmGC5u9nvytKXw9Q34Sv2czbgpjB2akrezAk61qgJSKZzevhXjFT",
  "key1": "3rpZxzmsgNphkCgjtriDaefAbhMHQLf2FhuQqY2jV3CQ3nEqjth8Rdeovywr4qd23KsHCMBAkkSwBNdRhSWEu8nm",
  "key2": "4FWkJdSTcvzGLD8wSWZnenmipT3zt5F5yHrTcvUEiKFReuX5z7NnE4bomqeSCqrLotmNbzstyTgy36JCDgkKHch4",
  "key3": "4BsC3NwMb9kLN3EbptKUj9makCX4j4HjLthZgkxEQch9N8pz9KfW6HbujSHLVR5H8G1myisbYF6DwXg2PygpYRyq",
  "key4": "4SmDJEvb1ujZtdmi7p2sgZK1EmZoNWDrRy4fyZCWPXABxPEzAG3rJmePANj983KSfgGSmsSDJMSJJ5zgALyAof7a",
  "key5": "36dpiWUJp3uNriEQBoZnyqrVmab4BfexsWiirhQPjgjBQtSDp5Ufn8rHjzmPtApsBmQg6uxN32dCHBj2ZajP2xkV",
  "key6": "GXrYh1ycwYHqDGV9b32vsdRTvASpUimcE7NY3VLVHL9DP9LcBy5bJbyTtBj9RyfpqJvQdF5yrLEDAj3o9ChMZi8",
  "key7": "4T3pNasMJZ5UHWLnVRTqAvwAqvqWM8v2pBi5ASbTi42ciTvniC9XRSvKcpccigm1nVZN2nRMxsUo3guYzPN8tgF3",
  "key8": "5eyGg1KYvnFBcDtBV6AMPVhDF1XRFFPH24EF7PTFmTVsywmDzcuk4BccSXgKYSt4zkXNCbq1Jerb5LBgL5EpXqsK",
  "key9": "64pRTwddpA9cCNx2wicmSiVMZpqVYBF2afTFGkgir7AYq9H64Xs66VTtEeBDL2MkNUMLrzJ5SvZ5Z9kcpfwz5XrA",
  "key10": "5526WNdir9naYz6sAiEDXDZcPJJ57k47U1MnRZUpGiKyDGJAz4mxTimUFFR2BFVhJ182vZormcNSL1M4sHPkv2T5",
  "key11": "2GZfVTKMLvTDJhJBt65asg8PJ16rZdp6Mkh1vjeWokmkuUR3iVtz5wvHQg4cRwAeQXcCpyqwLNyRcVbwziS3PSCe",
  "key12": "2RTuZwgwgX93JYQtziYAKwCmfd7HnwWVhNJbmocKRuuW5wBsqcm2h4Tss3a4sWuRk6uDaUPADSFRiQXE584QG6qJ",
  "key13": "5a7v6YXXCXGU582AnW3Bzie8SmY5HUBhrohLzzQJBrmWJX6MuxmXm5rxQVkGzPia8tSrzAkxZA2QamK2wXq7HDra",
  "key14": "RqP5vuwUdgaFviWBBp6JxdkKasZhjrRNrVNjKMd4a1N5FWrk9uR85qHjnaCDMnuvYaLfEB74YFLy5aH1Nb4TjWc",
  "key15": "3uMBZ69KhstB4B1LSEaLxJMW4WBeFJRPXd2QGNJz22tC2dcMuMzA1fSXwY8B7EaEazkBWuRn3q69rGFZG8Pm4ddx",
  "key16": "KDuRri43QYWsCgKuJDQzJqV6XnnpdBThSK2Cemo4SzpxsGqavbv9P6nHLVB9n3WuoXEotkRhxjUdpKtxaSBVyqQ",
  "key17": "5kN2MZZNVw7BmHhwr7DBT9skH3fPNzCjLbTLhbbPLudcESEwBaY4HyCfKRq4sJTkZrFkPNNHpBQpLsGduxZFnyFg",
  "key18": "smUjHaGvd1aHzLKQEoy59RkhY5fvWnfSVCaoHnhkYSS8ZXK2EabES7RFiEC9Naee44dsCLRLi3udjU5fU6BtXHZ",
  "key19": "4d9cgKokxqxmy842VBPq6pNj3xAE5nHUJCKnKQcQrAm5u1Zr9nKVnYUgBFNFxkUST5LyqbjVKq1iti5AYt5zVHnS",
  "key20": "22wRaZh6kw38m4XtYk2y3sfSUeSMGZGQaoq2XmW24FaHGjTRYY3GzK71pX7AS3DN9HAZfv61WVmKgkVvdFVj7nQr",
  "key21": "3fWvj8VwnesiXVnRSDPisi7NPW842x9TVtFYTTWsQTUU7LwTp8PVjpvXwMmuCueFaRbZ3HENrRUfhJ9TegbUxcpx",
  "key22": "aRxDSJZN9cRyGsxVEiEdJJz4HZjUVkAVLeReJAvagLjvSpV4nm2hkKkhaaRxFnYvHG7Qfm7Hwdvj8k3hhSug9Mv",
  "key23": "HnbgsmBL4WAZmCRSyc1QMeCBTyb6mVLCFknV4dTZGMDnMR7mK1hiFxzqTz5VYYiCWoMgojC31HYsbQykqfJzY1c",
  "key24": "2BpnDB739WY93HsHnPfZ1fSS9eyXVV7tKMovJNHwN6PnynGAGQ1kUfnUcyoPw4mcKkVwS8LKxEVLbW5BBAxxiHUh",
  "key25": "5iHzrzC5gasvPuexmANxKQ7BuD6KohtLLj4efm5xdwCX3ChHxR82y1YhL8MKBj7UDRXmBWgHDm1pSF23QuW8hG8Y",
  "key26": "2ctSa4Pk6etrhNgz7wnMdJero9GqwwfEsL3Y2p3kqW6AuoLpVrcRRCSMM4vA5Wu3QUHrBYfi4aUYArjwWfKLTrqC",
  "key27": "63vMbC3nUhEHszdSjUHFA7uYTAyVB6LYbwy5BeV4FbXDKdmgGE8MbfHV28beEf6prQp6YkCsyC9ETivqVqZt6JUs",
  "key28": "4EtkvW5QoaaCuzaUC89B4jK9AN2wtSzgffQuFHJ97voCEDu9KhMYUSiBXw7AHqzLY7u6aTr9xPuiQGz9Sm1doTxa",
  "key29": "5ERe1iC97f1AvQDJUaUatNZDSrp6rWQuqhwybq5nmW1wQFZ6TPd5uLbPUhZtqbDCZ2cdHCp4w21hJXAP4sFtyk6h",
  "key30": "2YNZaerN9qRyFNj37VQ9x9rwJHVHBXzNcLtL9Y7xf7MQUq7FQ6j7Lhx2uunP9nJ9cMCGWk69tQPdfc3A79cZ3Kvw"
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
