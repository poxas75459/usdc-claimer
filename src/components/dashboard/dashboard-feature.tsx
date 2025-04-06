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
    "2hHHh8qHz9PFxsFsLefWza9cjL15oRXjZsda2P4y3BQYci6EBPg8CH7XESQdHZuPR3dyUxuCVgaTrut9VfeYKenT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24SV6kSvWquNZy2tfzqmSP2BguKmEKtkc7HJ4uw4i4oPNLeWxGGoT9VK4Djbpsj3KNxjbDxfWkNRRXoEMe5zUiBp",
  "key1": "5M6T2orbt5uPMfKyW1pKwcBgbTZXhHHJJii9QG2tdvb9yQ33J7X5HutCBfVBc21XmKWRpB8Edi5Q7PkVVZKcmbSM",
  "key2": "3VLUHvbNAA49SyBz6ius8xKQ8xLdc5uYPW39bgqFMDRQSSAvnDezjryxJdqcaLJ4Q2UAtz1w5dwh3tsPXkTSSn1e",
  "key3": "4PZ9bPgyCrayx6R9tbRwLbF5Cmf4VyDnEHYYgJiZrZWPfZseMnQTirE8VxCLDRbVgm6B8fWR43MnWe7as1uTzZDS",
  "key4": "28aYBLeCNwfB6XNMpXxMQ7fU5q8roVY3ghzRFR4hRWR549EmWUwkGDW3TRUYcnz4ctDokp631hSTCxsCZceuPJFK",
  "key5": "2AQfESwz6JC2Ldbrnue1saLQq3bqCZHtqyNU9kHG9AR7K7eirzoVgJjBhWsNkiyURawJEY6STG9jAM3PvoreM1Q3",
  "key6": "2a6CnfwL7bSnAeAR2YVKKgimu1zvrFiKyz9KZnmTu2FtLynjb8SLFmqA32qusxkWga1q6MNJ9LxiJQt9ZzsJ1imr",
  "key7": "5kEgekAgMYWuc2izCNgMGVt2urFsiDXMx8yxG7iUXAss5FMMh9Q9wmXFHvCiuEDmEq85enYveiGTKeZuF36wFxf6",
  "key8": "2H46t36WdL1XkywNqRixmUGJPDmzqLdb3YDwuF3vZeS2Ens3pJcDCSFA3crVT3jCtZ5YUbpCw25VB6KjXSivA6eB",
  "key9": "6MRTZiMAExZXZXNHnNLdmuL4V1J2QFp51ieMnvm16b6wSpk4ZfqpfgU8niFuHCuA22YA21tMMsoLL7KHXbgwyXT",
  "key10": "5iA6QJ4HabsoAMksve6S1yRCzcXBF8r2YNirFT8SM1ibSHNA2xooPWjJE9LAnYiKjaDNHimsuv36gHJRSxVwfvVT",
  "key11": "2WKgV24t4a7HnrXyw5F8BLo1Tn4HGB331hKr8FdbuKWeuFbbyJKsTDZMBGJrRiHu6fLuctVbPMKsBfcjcSz1uDCC",
  "key12": "ymdNzHPvrCNK7rnxSrL7dJa1yTHG9KTyp16voBs68inFnBH7iv99SsNaqyVjzB4Mc2yneFy6fyytqRXEus1nbAE",
  "key13": "4Ar7zAY3CLVA1Kp6Zwb34zRnoG7tjwm8b3iZ47XkyW7qpXRqTA29uFBSfRUGWbUYL2GknFGi87Y1sXDoemX4f3u1",
  "key14": "y7dmXetvYWpmNRS6khbSC3NwC8V4RMfQtbE6tMNgxMtmi4YJ7RfKXBgRKtbBQBmSagZbPFBMhrE2dAqZmc4cSmV",
  "key15": "4DrPHbnPx5vUGRALYX4aKLzz7D6tw34MRPc5WpJ9XGDMQRcnJsqf7fVpQ5hxDfkPD66fRMSufkss2GXvLtXqs2pw",
  "key16": "3cS2q7mB3fGvxj7Dkj1qLqZfRUCnhACJxpSQaaCzYCi5pNkiJjdcSzB4A172CTHnCRJqAFhb94FJcotZSkKHGRpH",
  "key17": "3vo4fQZNDUGGT3sNDtkPg7dsxJ3ewM9ZuoTkTKEL4GeMpBuf8Wz3toug91LQxpdP4BXXRMGAoVnD3jLct6hirosp",
  "key18": "T9p5yMwjK4kDQbxwi4TAMkhY8uMSFccQTiSuEgdqEJPeD9ZPTyUj98jUBqnFVPat96bEn1r8biPHxPnLfx76qFF",
  "key19": "5RiVDvSoFDMQGnisa5THRGDBqnzTpfxTx1jc7EnJJmcZrho4KdMWWvKXZYJks9Q2SPTdN1qddPqB3SNHDQcXquY9",
  "key20": "2BS13zhHAM46hyzbcqitSwcimduV7axRYQHTQUMQwsLurqjU9z8CvgUfDMeEbqqZA5TC5WuzXxQJHxTrHbLG3MDi",
  "key21": "5JXtuaEHBHDNX21HpwQueNUc7CFsN4yMJo8vLnguhhVZvgWdqs7tay1CxSptn2RwhuTxNabBJc8syzmaP1eniYqo",
  "key22": "4vtnrd59FqWsHr1kLbx9jwKGoLX2SPurAuhd2sURt1ZZydEHDkPDgmwzEbYPjFXiuQkBKC8UFoRG6vYnBGU1k4Sg",
  "key23": "xUtGpkZDRqpPCdhiWchjJ4zFaXAdFtYe872YCwgBBziKxCqMhk4r7o3vGsDuFihuL6zYsyDh6xashMkJ7LZbJSQ",
  "key24": "5uFyrC6UTGdMwBF5J8EtcfS9mQFd2JxByyCtoTmTrxgEebv2Evz2nbDjWGFQRrpxtXYfizQojxBNTVq6HypDmuWK",
  "key25": "3BMBeVmruSRmjoGcYiseFXKNRbxYZAooGFUeMGhK6hGFp2h7iVkyxVWHzQS2vExvkCmgx9UW5aHo6aVDaLDJ8hkK",
  "key26": "3Zk23BNVx54rMGZg8BfxpNfBVdpn4Np3dcieVRJqPKnRbC86JQ1kENuHcPwBoXVsGjXQpqdvpyGRs4B3x63deZAq",
  "key27": "2kpi6KceVYJM4hSg6AhhHH2W7hRpJ9RGmAoSZKmjwJ4c6CqZnXTo2uSDLC7ZZPixgvQWFBqbcuXimRYSvkYy2ijS",
  "key28": "4xhRTj4hK2q9LGcXja1veHiikmQ6uqV4UjpqUkkTyKyNQbMxSKoCUgytY35qsvoCQVrtNXBAM9kTz2mQiFZ8Qtq3",
  "key29": "2BxEKwngrRUfcALqC4KiqaFv641Rf32xmGWHXPZLR8YstiRTyNbroX3roDEyyBXLVELDuAdZ1hv8vE37uq9yLHt4",
  "key30": "2jcPacbbTk31XAZvtQtAbaPTGzj59PMP5Mzf8HkB1Q3NTNe5jpSbKKbsSPCxwiXYpu8Y9Uu89j6KL57R58vWJDBT",
  "key31": "5ag83i4hC6YEFG8ADZVEbfjyTm4e3RZtGWauNTXPCwViS4d94KhptfKHAP2DQdCrj5eGUPfrWzitQjHQ7fb44oxL",
  "key32": "4UNArKMtUyXy4xS7EkFBrXKuDSYPLjeNXTvpVrBH5JqSAa8fZbNkWuB36HLfS8R9Bkm1A11NoQgK8UfNR3LZvsrZ",
  "key33": "54JBXDMcGqoYi7CWUAkFVeVcCqLVAyn9aEaaCdRSCgemNdhUcr3JGkajmuf9U1FaTMM7T7EWaDKgFS8RDpWTJoMN"
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
