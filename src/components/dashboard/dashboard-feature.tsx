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
    "3Hhi6eRCcSjxfM9LhtGu6XJEP9HosyHJkeAMKT4PB3rySisyLEwRS9cuCV6qGmvGQLBd7muPsZ8t6h8WSx3jfJwc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bYCdonWPCVK54XnuqsooMN4xpWmS88JHxXTbfFvrG1v3tgA7FrDc9rZ4noGcdaeuBhjmfjhzddTyqzFPLb7x651",
  "key1": "37NRsVXJNKVmkGVo4N739pAisExetbtuttUdACTaqW2QiY6cdi5bcenGNEY3Lc1EBPQfEsiK1neqmv3PbPeJiyx2",
  "key2": "2W9PMWKux1FEHjSQ9rJP95bA8653SQifQWfsZFBkzmmDpg1GJZsEHyRZCML9FS4NnbF7QQXYgpAkkyuaNraEcoRe",
  "key3": "5sQxmQYv6xQRerNkYey7DKbtaYzarkyPmREo9mhZXReQy3s2oraRVcEb5SKjgj97w3NB4sgbs2cPG8eJNxymh7ce",
  "key4": "kpJ2io8a33GKJC6HvcTFqDCKDzVoNhKVsmoNXgaCwFKVj3B22pGKUW8hGagqL94ByA7RikyucH7v9LKPqY1Vm3i",
  "key5": "3hENERHqTqm7Qsa7yfek3rtEuxgTenosi6dMTpsiW8ueRJGg4PoNQP36JsFtsqYGkQQzSM8ZNKfZd5a5s9xq81qx",
  "key6": "28FaXFCGt1wgFnRvrePVRB5r9XcVXSxWgyVp7fmae9a977m3Kp1vhm2CYwRC5u6ahYTZ7o97v3CYAj5bSha9Q4hg",
  "key7": "5FpE2ojv5cHPnc9bWGhUhiFy3ZmfDavWggfL3rqEKbyZaaNkwZyve67sqKLnkjV4sidmiUwtfUQu2LNKwp7J8Q7A",
  "key8": "k76CLV29YzZKruppvznekhszbitjpWs4LkbNHByEBCnxj96SorU8adbmfXjDxdfEYgwVcS3WijnB7fi6k7wDXq1",
  "key9": "5ypgPKPeEeCvhykYmhk5HVfXy3FRTzd4cMyBk6PsLbX5ripbEKpGLnHJ39wKgeFhau2FwBaJb9EjBSZKvnCpGFkq",
  "key10": "2pfuUXzE22NmVqu2H5kHGpnW6xKAS8bvYNxnxHSE4AiLdqWYmre9NvMWimbJP8Lj36Jiex1CFpGKTn3XJh5DpW6X",
  "key11": "34CreBC97gsi6gY4v6ayX84KmytJCFMr6Bkx1hNNM8VokUSGuR5iHnDXDLwD11FCxi87MXNTVk9q13wQhxVF4mLn",
  "key12": "61Pduyws3DkPg9QAofjWagupLScss2eg16fbwEjsVCyQm228JDPhfcRVxrnvXctCNBqFZPE1Gt2MEqrCyTV7p4pt",
  "key13": "3zMNDXr79VZ3wUwrRes6tpZn4nStQqWoT6nRUVWGpeiQtqQtnxVUTipQmzU18aRqqiVo8akv5BT9kMcmibx9rdGV",
  "key14": "5eDnXbsrNnVdQaUipxvZLgc66vn6SXu3eoDEkqHCpcU8BUDwu5iT8JWvxkFW2Zhc9zUaXPS3w14edjMrpdUzQ7MX",
  "key15": "gh3FSB1Eh3A2yeicZ7SorU7WAL6FvaXotwv9RwAGxD8q2Cv65BVhZe31FYTx9XSd721meLdzHh3pisBYxLz1LUk",
  "key16": "4b9DfUrE921Md7Xvd8mhvcxs3jYYasJecCuPC3EXt3KbToqfhdZmfLZLao1aHoiCUK72EmHRM7gSxKZmyVVfMwXY",
  "key17": "2C68jZE2CxpBcNT6y78c337dj9YcEE4acBUVnvKnWPBR3gqkB12YSyeV9VXGaCFPcmUbsHWbU4akeoWuLpB6equ1",
  "key18": "3DneX2SeVDQbEVAdepkFPKgPSXRCA43W7iZPcwZaADAktxxiPTxKGnnfoSjWx8u36yJXwzutooTZennWoYsuMjFA",
  "key19": "5NADHqDtcEoFBVVPGKbFUsgwQgQYzgwaX1LGY8vdSutCc7LTyCpQHqzfWbm7NCR1AwfXNDdds2qVwU6KmGViB4Bd",
  "key20": "4KhVttSFjLLUcWtcbPmsggzxLk6q3kMntwA1tNk4zDusGigGr2qJNVwo8LDUSBMejmJERGG48cks6rtem3ST3MVE",
  "key21": "5Z7qpC8We6AepWxLRWZFVLRCFzm1it4oohjtQrHWnHRyWSEiHsVMqxNzJkEookM3LKjECJMHvuLmckTuxFspz393",
  "key22": "4u54eGhFYW1ztgP339yKJngnh1SeY8VAdNxdo8FytkhYrMDBFuU6SasvL9GwEsbYxjaLR1W8YmUAJw3c3sFcnha5",
  "key23": "fiV3P7WDnwctnaBdEv3cYgdfKKtf7F8tdh2GRjBqzbCCH1d4P7JpRJMPSJ7NVQqG4hfg5iPjdJc9rhv8KCgkW7c",
  "key24": "23h3eFjv5yDtk7F9AJb89RwKbmWNZCTzS9aKft7PUHTzQ6KPpu2CE4jUY8XQufp49ujy5NyhTEA3GsBfd7ne56yi",
  "key25": "2WdECKM9JaYhQdQ64jDwfq2iQ7eAvJbg4RMRzJYxzEMHfkjkmiy683VrqTHecrHUTUauaBESRTLnyZ153hQgU1oF",
  "key26": "4oJnt3jkSfJwwMJKdDxG2Emtuqv53tY3sNVCd66uKeoxb7DiLa7PH6XAZLHmyNB5HZ3HKsmA2X7q6RrT1gsq8gFb",
  "key27": "4kiM9Z3RGkcUwNQ2VKtvwv1TUr8qPqad2J9cdFXiB3o7wCGSCe21nVhrfmoUFbtxWd6jrjRh4WeReE2HpdcCiRk6",
  "key28": "5RWtmep8u14pW8D6bo886VCX8HikyHnEjGXjDistrSdU1T9XqsXF6WxXubQWbyY8fBY1d9cJYxUCeoCCTPoVooNV",
  "key29": "4jktR7HSq8y46BMcdyTUiR1N5qA3LV5hzG9nqxGmsnWGQHusav1piVc547CvmUm56ZqnuGYjoeTSZSETvS5hpvmG",
  "key30": "2qGVpZjFFXVvKpPjgSU8MUtvDdLXUvStXFhyu51ZwPU1hqpzLriYrTCvbPKyEk7gDij9xv3YpTujKuAepQ82uPCh",
  "key31": "2gSLjsSsxo1ZUxw6obV7gta6iDw3t63JAgVUC2C2t33i5J1owVpiKooh5hAmUrGA62LfoC4BBt5uFDTPWxWSQQMB",
  "key32": "4P7WAWeqMTnD7GHm7j53rzRbZQGvDW7bG19D2t1LxySgT8PVicJCYjsPhmZoXVT7tzq1QnY29WhK4mbuA2Q1aL2b"
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
