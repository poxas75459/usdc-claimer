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
    "3986DdWxR8gD19BY4LoH78ggczDMmhgWzaq5pWc43cKBVLUzHDBXTFcG6T9zvKyg8cVfa295ZXccBwLdoijYQUqn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33F93UiYrbjEK1smRXNcgwxeag2ux4K9THJGQgUWbctfdu1aS8vjecJjhAxb87BY5ry5ykM6ReXfPj9RWXoUPZDE",
  "key1": "2Kx31AK4bgZAoP7pRn2QGPfiCZSjRqGEQayTd5VNBowtHhT7uU3x7j9bhSozobayenaj4zfXKS5XJB9Z3T75Phv4",
  "key2": "P9eFvjYpXo47NSmYtJqyPouVnHrNTePJtG9jt3qxfBCzz944ZkDefGbdzF7QXRJKDneDpGrsq2pM7tGKYepGUZA",
  "key3": "4GXiD79DZbqFfRzko2jsbx35tRFHSz5hs4wypSnWbbsdWLHWE2VkYyWCbqJMMHTW8uxb73GtPD2vSroyeJgdhEHJ",
  "key4": "41dW4cFfXzVdEmZrDUHnezyPpaFrv1sPwtaybfGKGbdMN93zvuy9jk583D7VcH6MCmt1cenxzawB94J4VfLLbQXh",
  "key5": "2GbRtkLTn8t5Y2MJw7GVk3aNBZT6iqV5SQ8cPAY2dRshmhoZyTUrmoQZuvN8C85BGGcXvejWHeYqenEkRYtcAUPN",
  "key6": "66gDH9TsRzLbm18nFUBmQNiVm1UpUBnJXTEZnUKvGXPVBmMkWcqVf8ZiG88ssEjo627Rkive77cU87At59pEfgdZ",
  "key7": "5u7PKA89CDQYobPYmVaH4J2c6tSBaWP9ttJXF6eyLSkqGSaPKkgjcfgRKqcuxY2qimvDYGC8fadZjwVZAZcXThnX",
  "key8": "xCBFyMT3PGma8B76AcQ1efwXLdhqM4jZtYiktpDexMcEVPUknwmj7id5tHrBkR1i7w7oDGPNw4wA3ZfpDY4ZJow",
  "key9": "5dvNm7g5M1vNY6r9qcC9MSya7ZKZ7rDJhriSoGPbFswYRwCNmcqfNXLqHMo2Ly7M9mxPXD9p9YsMpqP1vxPzGPYz",
  "key10": "LLxvX9e18Hcs6zC2R7GZyejvX24doMnU5C4s9nukbYMvN3xpEz7axeH5KQcpYYs9QADxnFoK1f375WQxwseipxS",
  "key11": "24tzDgBpUNzYxXz2YuVcKwhZuxrxCQNWTphyVzrnjHRfDu5BdZnJnzui4xMM3xZ9UcaBUgsyYcDrFFyGra2cNLvz",
  "key12": "2K5sWXzdojWjrr3qXxLrE8ShaiaeZ4a6dc4soKoK5LsuhToYhSo5T6fkkRxhoYALpCfknqEzWbczbKpT94ntykGM",
  "key13": "45QEUaUrhgsaPDpappaS3dfaQ5cj13arFonY5CCZG2hLHFuJXmSXEHVHG1fs8jZYfWUpE4SXYW9gTnxkEd5UAnWR",
  "key14": "4Zv9H8wGzNPrzha9DWGfvJ3VoFD7c25vKZT6ZyyTT6ZVCukXaecdg3gBnac1gL4CEcHScrnFUdeud7hXEP16bgnL",
  "key15": "3A7zgdzwYcsRQ2RZn15u5h7faz4ZNo54UeHgELmVFqb7iVMLQ9urv8QsLKqHdvmh2BUCWH49x9pATw5db8spGwk",
  "key16": "3iePcedJd87H3PnQpqHAaouNgT8hxgoUL8iyzk6tZ8kEWqyXrCW3Ygc6FABw3Qcm8rpwZzKE6bnJRZRRCJDHgh26",
  "key17": "59X5sLhAMhihuf3zd8mfbJPL63XkhX92heEh9asQpepvpQ51TXnBE6HJvico6X3nyDja12X4iyjhpPeP2J8sXNyB",
  "key18": "ehV1HC7e28VotjcF8hx1GqPwnWG6pCX4NsqAzGcG16xNLGyHpEDStCot2ow3RE15xG4MrFk94GkCXepeJfzguFZ",
  "key19": "HbWnJBSiVNdrH5jSyYbqj2SRHG4G99kNQRDK6y1ZgF18P6zXAczM4YgmEEyqV4yUpdKSKM55gvMeUYKnNLb4NeP",
  "key20": "6176MrQqv5Vm116U75y6ao3F6GMfWMMG2ehFmyoYF2vicHbmRP3NimWNrZ62L8mvF8iETH1Ef7rRXzoP5tj2gN1L",
  "key21": "4Sq3WjfFcjqXMPGDNXgCCd968BQEXj3s8SCvrgboVj3b6dN4Pxd4dj2TKmNR2tfFA6ofdFVQieBhvLCzp2Gnz4cR",
  "key22": "4dh5UUAxFM74upkizycSnHbViUo8oyVZnntuuyFFX3xYKEjoYoapar7EdqKEm6Kipeta98a8dpbjwJ82UJt6GuED",
  "key23": "3KdfC2XtZ8xURPHcJ6Am1iwUQC3Nbbov1ah6TLayhbuVVUDp493oL9rjvKEZd9BjBgoUyTRmWSWxC5ksq6eg7y1q",
  "key24": "3553F7cUeo6wVcGdFLQwkESj8zFPk5rBeYbFhPcge1R11rPBiL76vLnMLiyZrxvG23HHfwoUoLpvXUYD3apN2DRy",
  "key25": "5KTdihVT5Bpk6bnbLPkH9SNjKbWQtCks94WCNKBw3ApeDQKdXPS98xMxMJKkJBNAv6X9HHgyeSXyWYzyr9Zk6Dcm",
  "key26": "41KuyQa5fkkWmUwMfyjNe52vYuPXpV5dZqwqEnX9QCzQh2dshS7F7cPXGNd1oEW6FeVzK1nzQtB6fZxSnGJTMefs",
  "key27": "59owpt2N3xzcAUCJYgNUwVWWxpiHasf4MKH1JsXGx8YwASa8g9FG7bqxDA8P443r97G69WVvB36nJFs8TDDL2oGh",
  "key28": "5N6DLvfFJXQkCpecEWmWXvea98PGRZGp9ma2gxjURbXZ9a8q8RyAEq8fTwDVG24DFo5yFReurbaJ4Lf9qcmX1xPA",
  "key29": "3zE8S3qWMVBf8ynxp828DyEhAW2PESfwqxuetwRv26TrkhGHE6MEiRAJmoq1rdzfAteWi3FgUVGQ3rXc2mnew8pF",
  "key30": "5tqxG8WgX6NU2KYDoyZxV4RajVMZ3vFZrQB3ZutxgShQesVP2PFdDdjdT9eADT1gvecREdPLoUfh7EpLrhiCsExu",
  "key31": "2tHLf7wgYc3b2coCznnAep9JhYHJc2CFHKLmzdS1FVVY1ekrPvmsP7uv8HMaRNzTHkK4R3m281ABdpEEccdfCeML",
  "key32": "5ua4L2JHUKLJ52zqZQC2nCsWqRp17g9pw2WN1G4ZorYGK1Lb1Fkc5C88S2XA5DXoM61XTNTAQWZqSkk3hqpo37hW",
  "key33": "43L6jNjKU5HwWVvpBF8DpjTrRhee69eTsfABnDSithrn2BKfhqHgXgGTd9MRTCP8nXzw9kueY21hXJeB4xp3MG8r",
  "key34": "3BHyKsqBzs2W3ScJdUdYg6w7qYsfwRoMg4ssJ6kMd4EnzBo3EhnTC9NPQvJXHkqnwohi1PN9ciNRzg3YbpmHk7pw",
  "key35": "ufx1Q4s8jSrWGYr7qvnX6k1kLFDhgQu4HWkjDobeVP5fJQ3PLtw7iraoP8J4tCJQtxhnxps4Yh1bRdHpEN6pEPQ",
  "key36": "2bSCbUTDASsPhERpw1sKLC4FF2u3xhyrHvprx8nMYdvPDhCRRtG19kfUs5guH46d3ZvNJmL9fRDuP1mqNG3cyuyV",
  "key37": "vhCAENg7q7SudTP4MHSKUNVcAfqZh2NgdWukzWJkLai7Xnw3pfUQHf1DKzfBPMKdvKVbK8YyqFg3kvmX5zuqM9Q",
  "key38": "3W2XbHSgG9L4vpR5xnjVBijP4JC6dJnTcSwyRByDopxMW2ZphJq8LtTTbmEsYbqPVjQWWwq4eo2qfv9UHT7Mkx44",
  "key39": "ZtiaYAWvayJ6576UfRVQ4q7xPuHcxQHvSXLGrgf9dyRHGtJtaKcjbesE8FopkxQPw33YVY11pugdvu36AHPmgip",
  "key40": "3V3KdWm1L6LcUsVUf49rFF4vvsAZAvvXQ5rUyDxphEisjj2ZAoFCj5Sq8JHSUEivkMjqL6wqm8S6hSeuRQauf9Lx"
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
