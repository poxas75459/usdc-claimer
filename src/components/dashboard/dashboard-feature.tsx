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
    "2uLkhCBQrJYESan5j4UeExtoZSrQ7UgtSdx2fgLQDR9kL77YQavxMLBuMzyEGQJVtNs5dk7oFWrRJWVtVvtah4F3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2knZkLuNLmYECPYwab5zYEQR4yNDuzKGW6gSwfu6vMXV3NYmXA68HGwkQREN1cRzqBvLJz4QA51JYoN97kALdJRJ",
  "key1": "2DQ1PudYFgMo6jJNq9Wno4FJvxxG3TkMd3i4MWMSSfrFrEhKsf3fM11c3EAoMPJiJ5a5CwWcgqydWvYGhQ1wv2Rw",
  "key2": "4STwcGUJ42xsVQMZ7rbgvBZELn48dSigWR11xtBHtGvNC4vKj4nxx8H9gU3KQkawBJZCcztZH6wv8DJrG7pYcMna",
  "key3": "5uoTimBUhtZh3TaDWamaWoQXazEVw7ahHvwBC2P4r68ch4SiYDC2qXxsXPmNZYUPhcu4QbiFqq4Pccq6mhycDZtz",
  "key4": "61xNNdELpMqFwiDdE1VSABHLDi6U8y9bcFhh35jTAskDa1JywR8QpjF21hyQhydd4mw9zv2ZBC2AovtR6EswpXxQ",
  "key5": "2jh3iDh56YczWSPkgPHjWDWMsHLMCBe7QzHHctbvsau7kbGjhgP39PQF2XV6x5RtyNbTpkPaZYEPWTdPrrWQSXYf",
  "key6": "2KAP23s3dWhsDhwAdM8CJ9Uxy6AWtLuA6bruyW8h41HcZUfD9yjJFtdbJVLQs6k4TNMDFdxVGy5USiMwtgZLoZEt",
  "key7": "2exjqGNgqws266FmBwhFwEScrjqdaMaw6TVjCriMji91CZTSLL9BqzMFv1taRoPZBw5yfDsiugfntfyKuXFX8ja3",
  "key8": "4VjhAAV2X62cmswBSQW1SkRQU3vJRUuNp3gNDJeDGUoZhHeJB9a9aHXnZCipakC1LZZXEBpaYs8TYjQ4vUEqXQDL",
  "key9": "4SpLVjr2C14eW7VqymCkDtSt1L83CnFf3C3kPo4WvmTeFxbVX4cAv6h8bKABTL4FSN9fux5kFog4dwAWnarQamRF",
  "key10": "2FUCT5eMuXd6h4ijazcFQQCph57i2AK6LFpcTc15QfmETiJQZ8cYuN8GzYiN5CBHRzWiG8bKaFMfDYq7mHmENRzU",
  "key11": "4b6pmEY5zSNAoyJWuK1p8A6YU25oFzkbK8VxGM1DuHJx4YzqPRbxwr478NXW5gCoLZDGabqNqyic3Bk2C6T71TAB",
  "key12": "3pvuyyFca1d52fCNyAk1DMoQDEwHN2gJ7yignpnZM3BnRLetUPntWsLUL4dzFLJjfPHtyK8CYKo4LDyqeuY4RzSm",
  "key13": "4fEzBqp2kCE4MceUcK4bhbrKHKaacL269s9CWbVUS6qibJjJ1VoSc4LzLZa9fi5XJRqrN88bpjCBMvRQvY1E1F4C",
  "key14": "3jF2EH9Hu5XkVwhxUeemPPCEngzuK1Evd2J1mp3oMv7DguKptZEHmAX3qxfD9enEHBHcXAusSsEXrWzkXymLhxdQ",
  "key15": "5w6x2dHA8ZoKeKUTZhpj6K7dm8he4aTQLKiBojj9Ys9cxexgvxsVshofUCfYFAGHQB6QEgSuVT6mynKPoianWMzL",
  "key16": "2pTQM9G2fe5Fgf2W6GDbdwWUx52EZ9irUxCR5vn3qqe8P8v2PbxBUgZLVgamtL5av5nc4EMFGNT8A5WGqyfrCMuc",
  "key17": "QzB7M4D1dQ58JmActxTL2SibU3mejxPacGPwbUpeTk9SkAt35sfAHbEjzLbGUD9GVX566nNSVruFqxvJ2NorZvX",
  "key18": "2MBGwKSbHHR3V2mdwKSqk8MTFTsUbh2QvtSa8Bc5tDK6qg5pgxj194y5DLitNqCF6meP166HqchG1JMiZmSTaPtm",
  "key19": "5VJ6KqgrVT5Gh7BAJxfDb4yrHKepPw5eadH5XgFNYcYCVemceBJ2ZXFjYuKCabyxo164QTntLrYgGYNXTGY1dCoV",
  "key20": "4YacBinDiThHG5Dhim8s95bmZJyMTcd9nfGMx7D7gWbQiXmjAstgCqQUJaSpqSWBX1S2bZ21R124yBmrbnR9MJNr",
  "key21": "3GoS1RFnvmxnZN6JSnqaTwDVJiYvfwYZ41HqjS5afCeR944u1pB31ozwZftLtNbguuAg5kwhy477pYXhfneyeLqh",
  "key22": "5VmahPeQWCgcYtdENJKWFmr3yTeyqWbVbRupT8XXNY14mqMgwigG9qfdUinmHwWq3V9HjUGN3EN6NHgyPQPANPnU",
  "key23": "3aktnypNVWWhopW43xqR2ypYjELpsRcCQDwdNzeusvBAJn1q1P9FVy2CkmyA7wrBbry8C8PkUJipRFpL5qbo3NY9",
  "key24": "3GVZ7ymEsnkX6BF4M2bMZ23E3GRP4v2vJRxtAd8HJmjvfb2bDokm6SDvAPYhB4sfQJ2cmLzbMt4NPy5ntMyiT3RZ",
  "key25": "38oo4APtCWahx7sMpE8bsUSDKKvq5FhiNoPpk4qHQqeU7bGL7vrKTLbz3vJrSzuV2gakUjGzJbjA3JiVvkS6qMaV",
  "key26": "3qAvRGwrUD63ZWhuysyqPiaAExLSaiAnBj7MU4kwbESGkbMi3K5SnXQoXikzwD7JgtVxUR4FUqGaDRRwo2PK4kAJ",
  "key27": "315uYAKZLs4wJ8qCuJdR5tUoA8YGvop4UEPaB4iAFs6gw7tikwqmcEpjyqTq3opfXFrwvxqLqREvb1V1WrSZydAZ",
  "key28": "5FRm1y5vQiYWgahfDYVYbz8araHs9A36GNpkDJMJ8mxvyQomS6VuoaX9TChkJBMbv5B5Pg2fGsGNWT3ZhocjLZjt",
  "key29": "2C19Z5sCrBp4ZoCGvdt3P72p9RBiLrqN1tmtPrrDgaMvNbPWuNsG4Wr8E5NmEDMbXkvRVyGbAjh1ajA1vJjCMwEh",
  "key30": "4nxJ2Z5nHRRzkUhvG2AM1U5W9PP5zB5JHm1BGWb2kRWegTMJTdB2EwvvXCgLuRPdJ4cocJooe67trennx9oRfPKH"
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
