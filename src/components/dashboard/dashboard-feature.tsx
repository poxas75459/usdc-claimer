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
    "2jY8cC76VLueg9FCqV1sgWn22oqQS55EcMDZwsy2PhM4sFJyETeKRVugJH9D56jLRFC21aBCDjpMQ3gbQtvfCNaA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qSF2Gw8MHdBGDVrkFkhWh1bLsPyyrUMYbjKFqp8HTHWiQVetFRHgY6TcyZNzP3khQVTSLW2uXUSAPeLEeSxSBVR",
  "key1": "5WMrM8K3G6FBVzkCMnyfuohKPfTDY6QYrQESCH3KZUKahc1hVYT19DfC1a3QMLKHvjoGHLWGtJQfbbdhfkpQbPiz",
  "key2": "474zsxHPycnFPbh71SXYdw66QhSa3mYXxHiN1k727VP5wGmcW9dMXGuf9nvi4MEwLwraQzySP46mZ5KoqVMF6qcT",
  "key3": "5FwaQ7V4QCttxLwPZsACLR2bkEXmxhQCB9KpVSEcFHZ3D7mG8Cn1cLUFpBMJ2mQTMBNAX9iFmjk8GRvCPQoogEjH",
  "key4": "jP9TtBJcuHqtCDwSP7h4pfZAmjswoBCKRgtbXjNv1MY4MnGooz8D9TDR5Wmj6RdqVCgoZCA6adNCXLfTDJ3BQ3Y",
  "key5": "ihBWswePGfCZe4shG8mohmjskxnGbnYxuhmoDmY7hgy58weMatgtB4ZwCbBVgkJg59L7ztgJjqPjH5c8PGuQvxD",
  "key6": "2kjqKRG5FNPifBWXykhwPNtYu3uU3PCWvcyz33A8qkK8B25ArRqMi6PnJgQN8w6d7HC2ZK1a7tMqF6cfC7ojk5Xv",
  "key7": "4yyvJaJoUojDU96PhZ4gDp6QPTD4FEMPcRi9sE1zagz9LXvX3UF3i5cN8dmeggF9e6kMGwHhdHxADNT5VoEVQ9BV",
  "key8": "ysg1pCLPDGdgXmp7duucNv1NkqmW22tpFyvqPhxkXEet4Neu1tKQZe1ophM5KadCK9FQd9NaK8TATm2e1bWr7kZ",
  "key9": "66xzqBF4as7Aq1EWmDMBgLgDvNv7rDhZ82APD3Sv8FBeoKMTLwTruvJisGqEhFGxfCPFvHtSA58S1UEXkqBLy84K",
  "key10": "58DSiw6k9RicVMgwKK4jLiDxZGNonAiGxXppZ4KHuVk9hwibFZD7Vbq92c2ttP6z6w53WwBTShdMHWsjA626r8sS",
  "key11": "21nhkmxnhQdcRQVHZpuqubx2wzuuh4p3TLphvsA3G5eRsPwFPBrA9tgRCZVTR9uxxze7GnKToxNTj3NTnxhG8YTd",
  "key12": "5jaQpQyKQmRYE4sjFqSrZaDtURuAtqLugaH6o2D31c57fZYcJ4rwXqrudLY2CHYhF22uHjEK8q67jM1XbndpHnty",
  "key13": "5AyQmH2TJ2UMvosU2E84yoqZBuYhckNxzw3TGqrrrrq5t4okj6jYxJUMawCdhc21qamKUcSXnEKBmG2de3j34xBz",
  "key14": "3LpgZ5A7FciULKXfmabBz4ZkKWFMoAZCsMHd1GpdCahzgHaN2yzzpQBACh8tQFtC9DxViDveVDZpsTGMmeQVyJvp",
  "key15": "2fd8SEiER6HWRYCmwa3T9jSnsSios7AfASKVdwjtnARfzcMeM6fvYHFbx5nufjpLYoV46Fxx7yxg149LPa5JuypZ",
  "key16": "2MCbUdvbHBGfZMog6peREMJiDFKRTHuD4PMEXaXmMS1aSFWj4vQT1NCyyjnSQpWjmZCf36rshgqpkAmJX4hsAtrG",
  "key17": "rQdGKHi6y6LMq7xM6otPgweoiR1KbM8qL6xAtAYKU8VjNxKQXj1qiE1vx1K49sbZEvn4Rg7oZUxjnSpY5Q5nmSt",
  "key18": "4gwX6xKvzphZeBu7Hxug6RDshCnuwdKAy4tBJ4EARuviz8Uqak7Dq5rZrPsqzTVTH7GqJfyiby1PGQom8t6LemNa",
  "key19": "RSoSi9KfsWp8xihEMRSnzg5ZUJbpSKDHXPskKaKSfSc52kRgGFZnY8EGFa2jozQdPasHk7ptUjQFNmnvFiQN2ot",
  "key20": "5skcGswtqUbDj7G1JsiGPHrJnWaqhG3bNtESSqwEYaEGkUty25jQadwdzm6DasizgjVoyBC549qtpuqqrxuD8W5v",
  "key21": "2tsMGQZNq5AtE3UgHh4RmZeTDZgfyC5M63q8wv1q52Kpix9GXtAuSwUDuEoCnuXPm3FgWZVB2cm4DYF74U57MJCL",
  "key22": "44tvXt2z1akqkyt6sSjnwDactycAFeBmpzjKBRdiKNFSA27ajYmEMyhsonjuqBZ1Jz2A112NM2DTPgQosdWWm1ZM",
  "key23": "2Vuf4hQp5RhuJDBMVDFaHrPyBFpmX6Ut9Qkt3n3EU45YrpMTemkHSTKDLiQBcd5Wr238w97ChE1wW7FxbagHUApC",
  "key24": "4SoWDjo29Z23N1qxbCBmy2Mb5CBpY8WiRjqyycn6L1UN7dRWEUSR8FV51a44cv1oHVXwxCzrzTsQq8b5rcdweGsQ",
  "key25": "2NmhCH14YVD4NUt5JRhDELba6gwa7jwNP7h7eC9xYKP1AYUSVyEhrBrW3V67UNhht9hqWQSzacTSVEvJYr6Fh8EB",
  "key26": "41yUdZSnmqLPqCinGPLDCm2XBeX7KYKzXyYU2zEtBPmGTx2FqAXR46YEGBwjBrjVscqGq2HR2YHqp4akPFocH9vB",
  "key27": "4DnpdV2REqyFD11bYstJHw4sj5sS2J8M3NVAmkimNJ9UKRc8MxLiorGrU2jJz7CjhwVrp2phJsBqFsEPoCwYJsdX",
  "key28": "32eQdkcfPpw8HTpzqQ1KL6V97y3GMweueR5xrXtxqwUnq7oL9BH4nPuWvbSmzq8PaHwxhCW4eqdimEtk1FB7Z7ge",
  "key29": "rqHiCT5gpJ2Xt3CY7VYK1wTBGswKou9pgsE3p4F4LDFpDTHyEbUYinRXAskAJK8H6qRZVSRcTVV99xJVRVDV1XU",
  "key30": "4tX3Mhg3TKDuoBDWnpJUm8oJ9xJkhYndNQ4kw4zaYgNXVoifjxkXc9DR3ojExmvRD1kLGr34KBsJdFxc5GRjK9ao",
  "key31": "3ahAZ89u9X9vAMFeZ9qzbqRZCAudm3w68Qquk9Y6c4rc6fuDrzdyt4eZypTVReL2ttRutJcS1dfMHPpuxdkUZqeC",
  "key32": "5d7dF9FXTMr8WmVMfpHdEa7CYy8eeW8vp5LiNvsbwVGav4PkeTH8h7pW6sUfVMjaM43BHhXnrBgmaTDV2Qh3ZS7A",
  "key33": "61fasT7dXkuvqZDuXY4nH9VJW1rRcmWe9WwWQcXknRkJEaZgY4e6P96ptmTsS2vYiFCXzdUWevmAoZBSFTwe6h6S"
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
