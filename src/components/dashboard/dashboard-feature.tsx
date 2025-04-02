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
    "4q6bnPGog828pBzVRuP7TxAwu7terHn4pUdXQBRKxBXhucoix2tp9sQBXmaTbxQ4WL4CbNJGYrfv6euy6NonYtJG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gNhSNm8FBw8iFfC5btXcKWMB7FtiqNykWRSTviKwm4oBcQRPd7EbXwshP21QqxZVmfBuDkTYXzRxb3juu2kPxSG",
  "key1": "5kBgUicDcPWN2NxBQEw8TnW1HjMmhKGqbAZziJATdx5kMwy1pJEu6DmcT7rbAMt3rH7YTStM8dTpC5wDhnQtt7Nz",
  "key2": "25fDJcnw6f7BhKfMB5mS4PV7mNMk6gmxoxjm2woYxxwooz96tCTK9kUfVdMjGYxs8v3F34ebEmr8aePLcykbAZ1D",
  "key3": "38L4ABx4z38w8cg6EAvrNDyzP8CfSHTE6EnB1EyfusPcDMi6FMXJvrUxpPaJhqt8P4HDcp3fQ9q4iySCSAPjbWGk",
  "key4": "3HwYMLTKTRs7EY4MEv4KZP7wYbxDSCZ52zown4tJXpA9Nr4RSccrRBXio5p1MY1A7dcREbCx5S8cVtGGnYirhmQ9",
  "key5": "4Zkrzpat3RMQCJFg6MJQoV5M7KgrHPKR59qqmrhNpkcG1PdCE1SEa2VkceaXTiE9FbZpmgb92rdSK9K38hFxvBqf",
  "key6": "5TF7EcojqN4UbhEcMLEEUofoS8gqzPr5CNx6XXYhtUXNwBjLU5pRvPxkgExcWKV5rbkuS4XYMhg7sXuYDo6MWUUp",
  "key7": "4RdivJYUhe6GhRmSpP5JaUjNtEqkwBbX4Tw8kQb9cNeRXUhuRUdrXtE9px7gvwghvH8vaGQFKYsn6BD263HsEKto",
  "key8": "5u6Ta2qjhxGmJBdXJJ5D9uvHn4qwsAHbpnCErD9j2bgtCBeG4SvuBvmUdtMdDsgguo8M5pFKzV7LpyMhnUXxSMpX",
  "key9": "oQnU1MTERuxffMCC3V6GSzNrzuK5Grb4amK53D4ZDHFRu5cFgpzYvKuAhXJ2jbbEHZvH5Py65F19r1gWJKHZiCU",
  "key10": "4nfRig6o7LDkTFeFsrL6hTBxsSrVnv89KHnoU7YG3paNcebM9gA8Aw9txB8qtMWqmLT1wLs8ki3tSmiETUtCDjMu",
  "key11": "3jzRRkz91MhSmNEK5QTEYLULWJCJ36Rd9wDYxrRatH6t1rS7iRr9mL5nLy3s4uwmTyrMhqDWF7q6JGUkjSqsDTfK",
  "key12": "tY5ex4TqBTGtedDb1SsnFCnAz1W3wMdMUnAwNc7DD3yigoVcr9EEUJ7EMo8jhKhqTwdEU1WJWhnCEc1xLfKwQnh",
  "key13": "66cEBjvpsd6ToYh2iiPMEDCBEd8PHCoT6g4hMwMCrmG4DMQu3HJWdX8RT1yu1EujeCr4Pk3ei4WU8TpHfosMKhC7",
  "key14": "FDUVP3HFTJ4aAP5j83iiuG3EBYZNmHNg5rRULSCMwdbe5TjFTmp72QRYnXAm9fxYi6GeL4aHK7Hm7Efo7r133jc",
  "key15": "4DR6tazBW7Tgukypvjjn8LBMV58Ugk54ycTekSob6aENpgYnE6ZP4sRwybkg51CCygX6aioGzVcKW3oTmB4rzgEu",
  "key16": "5JLQwX6VJcUarzuHFA2jVcs2jWcc3S31b5uVeeqfnw7aHr1pEydYA5hLgMMtTZ29Zj3xCNBj29duGkwDMSTQpFhE",
  "key17": "qSrScN3W8zVTKHyBqfKqPSdJ2cionLGCivM2R7Ld3hCCy2u4fCSUfLG97TgeEHvofYTG6cRbvhmKD4cHxB4EW56",
  "key18": "31v9BU34RPMe1dZmtwS7upxfnQsJioP8N65tUcUmi8pug6RET5tsd7Uq4vpUNxv78Avmr5iHap4xDYU1jww6Q6Ee",
  "key19": "2xGWGgdakQ7Wxt881jUh9BDXcVyELrHF35VKFga2sVA6ZEu9FpYCV94YuBkWwhb8sbbkTB5vEVdmsAPWHVDeU7Bi",
  "key20": "4YaL1JfVaqkheWVx236QHcgxBjmqoB5y4fgE2VsPxT35d9Vo1npskYy87V2KULsFR78BjdsYaaRd1414WK4W97rj",
  "key21": "4rRvMnGvidhP7mdCH2qcSvYUgpVCwSutwLnGPNsxcn5kLgTz9U1R8nFm4RwrXAuzyve6QRMohfP4oZuHKfHPYoeK",
  "key22": "3vwUiHLqqUqb9mzzWffV1f56s8YSvRLzFNXX5783htpr5UQaP2KLGDAZNqFTWtsULq1pGA3Lv3E3UdiLm94GoNGi",
  "key23": "5ZgjW1JTWHhVsVe753jiwuevDh5TrWrVuSH27NhFKDSssVDZ198nN39jQ3Ac8f1C7dCrum1cTWxMCxqtvgRofA1Z",
  "key24": "65i2KRd9CVifiK4EsDAqAd6UV7ZKq2EP8WVNtnac6EZvFRPRrEy5gkhtkyYjfuUukKR52fa3TdDtdRZ8Mpkh3aMV",
  "key25": "5Lw9FpiSWfmxWGwoyTcHMwaPUt85wD45jt6fqKamo7BMqjJdpRoxaQoWWVJpmXqeC7UkTUzrVGHGZGPwuJe4PKzP",
  "key26": "4TU7PjBhLjgkxSAXeTFAhdDux8HD2LHhhnSc7gRMs93sx2aJnh5EauJrktS17SD9CdqEPphEGxvfVdPLvRa5zkxi",
  "key27": "42Xg58m7WeXvR2AWpv4GRJzWBdXsmbvEBrZcuwdQnCsgvKPNLBZRw6X92qUHbp7pwbyAAWbbz63dGH7g2Nmd271u",
  "key28": "3Qfpj2TTGceCowoh2CnMwiRkMVShH34U7xDP9HwP8hGzuoGPh1vN1sjYyQfbbCinpHYkx9iAwrTLVFvoRFHoAXrf",
  "key29": "4JqBmQ6sCS3jwHDRVbA7ovTGXgHrutZHGPWmqGhXfpUcYqbRM25ZE8shdGNx4g8doQEU3rPqvLwc7iztBEG11mEu",
  "key30": "37XdgRPsg3kyZpfmarGtBPqApfGikBWYJEp4fWJUm684ekqcGtkrA9hLsSbx4K6yx86gaUCyiKR2ypHvEvwHjDiX",
  "key31": "3yMZxSiK7bx157uDRZbtGAtGYmzX3iEWHUuxuUY3ukFFqFckuni1UmVWjd5sWsr3aF3k6fvXZ9DwRzVpNJREjodo",
  "key32": "32h2xLP7Q8YZJwWV4umPsjXqbVpHkkNEKt4Vm3zpzAz9zjn7Ny7YpAKGXjmXCDVB2ey1p3BozobuDovAFQNebMHj"
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
