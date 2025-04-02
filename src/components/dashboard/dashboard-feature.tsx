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
    "8kXdTU9uoqtGAHyBYgsvZ3TigdFw5W3xC3JsYAvM4M2qMWgkwXZjL6WuQgJMmgTQzVPjjsxop8uvV9DCgaWyxMF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Qb5GRw4po2yvdRNuXvTj5R4GEMgNz1JhoyrD74m1wTjd7gSDyqmCumvfdnY2NMVoCc8ew1WpHiqtWAnfknFFrvg",
  "key1": "c8yMe9NodnARJ3qSXcpN9CNCpcwszUdgwNM4dAJ8xbSVswjftPk5iDaRce2PhSpBmyGndKVGU3HmTXPyUsuvuht",
  "key2": "62rqxv3rcEEnp8ukJFLXBBUC3AiHUcCzrAu13WMnkFkKPsZaeUUEVgiA9jrHBp5sayfnDyPXsXpejninfSfP9RWb",
  "key3": "4NVNC2NQAmpBqZMTXa2ZaFVGSkuDRRJ8tt45SuAFYH2ykFqaTJ6PhJWFZ49Hh7z4BrA4xRQh1di6DcJEPTwzrGpp",
  "key4": "5QrJDbL4CYGNKM9QZ2tu8mifqy4gU5i4Xa7SvcszepC31EFvFdUg8YWto6d4ASgNig7u7NGTCZBC3EssUgE6UgG7",
  "key5": "4gb72YdG9RgyUa36P9AZSYTkkQgArUYviHK8iyQzr2qEFHvbpWLBcX6TtnCcQALGSxEn6dusB8uBUSJP6iZv3ygK",
  "key6": "5PtBbGPtvYfsouRMt1DUYmkdaQ8T3d7MPnorWJxPsrnhf1PbBvJJshC12Kp5J6d4TUaE5hkZY1DVnoYk7MEqKx7o",
  "key7": "3Df1DMu6sJgm3A6ZGo3eEJPaDQVFnm8wowY2iVQN81eLji8u9DnNZczWK4PeAiMY9Cau6D8ssQZmdkaG1KZoJTpd",
  "key8": "5Ug5yGc4AcEAqZSMbAv1opSpuFQe7Ws4krJ29ZASczdMnjFgTKFJZVCoLzTCg2PPnPUw2pYodYGyPNo1AhfV63qT",
  "key9": "ALaC2n4F13wqZWhtxodqb6R7NZyHFT6cT8TrUSuDHRF74E1s6fMNCaWnSVaDSFbuLkLnF8oqVuNPtzgyb6kDNgX",
  "key10": "5t2P1p22cTiJ8UfjcHMpcKfVkP1VWsaEfkH9hWSKSVyXLW4GuSV14pKZeSja2XLssC9wE2uFoNexGDj1nyutihz7",
  "key11": "2hGco5ZeebuLdKh4yxw2koWCaJVzCcd39FQTq5Fb3vDDCWUMeimgK7cp2R1nRTtQR1nWSsbJCAojMKRhGu7GB3D8",
  "key12": "DBEVz7puvpzmw1wvoZzHyGCD1u7NE9gveTn5KWmfZ1yPn2dMgHGGFN3SMWBYzfBGXkYEGTkyVv8bbeJRE1GtbTX",
  "key13": "2j4rk9QSsVGp2VPjAzHWpRrfsJRvNUKC5SuDoPkEVRMX2RmqkdDF6PqhAy7sbU7fTP8msDS8WLkVcLSgW3pAkmBE",
  "key14": "5NNbWZuQXKHKf1oTXF3MR3HhAUiHB79py1yAv14hEyY2cXQDwX8o5EaRfksndT9kXEf9vLujSDqVAFkAj25GYw3S",
  "key15": "59o5FHkr6MMMy2M4EqhNvP5NxsgEf8fSRwyswESc4iJ7jXfG3pfiFLy44UeE76uTYV6RcvwacpYZEEpwnY73pWJg",
  "key16": "sfMj1ekNKfVYHpZUs8MBr6C4an7p5ej5bzRgiUJKuoP1oFCb5sBUdKbQV3kUw5hUZY2qNGiXXCoEpBWLvE6FR9U",
  "key17": "CrXKy3MRQoTajpnjyfQNKFsWFwTpvsfCpBijn3vr6ikFkN786gPeWRx6dPAEXDS2YhCwbK6dn2CoytnkbqShfya",
  "key18": "5eWWCWmqCE8vSW7VaEB48P7uvt97EG7zyptUPjYupN7tasM9DLUfR3giMit5N832tmvdLHVwWRMG8s2UrjZXWaLk",
  "key19": "4bCWRM4GMh2mr84Vh9BRnaAK5DUaMMN23kyz3ZQnJxoNjfijNfV2q3QGmq1T2BKWQ7JwwKHgWCHFJ3HLSQTRTCGm",
  "key20": "VSQyyxHN2gd8uySmReW7KDrWA1Jd1dR3YoDNqMu5DcfdLqxFeaMsL33SMyo53o2mbbhZQrsZ1JHC5TQQ6ioBVvp",
  "key21": "4b32RnG8ntTCBwmJP4j7Taf6RRXbicCehw5pmp8F4FkJVQJfR8cnpg2yQ4wz7dYxs6zTEXfQEoJL8RpV3aGB3zr7",
  "key22": "27jRK5Pa7UNmKz5H3TRwqya7eXGxJdfg1GXY8qyWd8t7H76TRz1WGsPg6boXq3qneT6bAWW4TESKo4xakqWt1VH7",
  "key23": "2v1V83MdU8X4CsWLkLcMv7kwvN7MiVnDq9xtXkoJkzvYuoU877G4H5MVW6PnhEWNiFpUKqhfsY1jFLNC98kBmrbp",
  "key24": "4aHTAEeXqdL1jxcxThRLzBG6m68oFXMVYCQoobKxmVpinjH3x7xi9yNpNeMmgQm7s3AxUnyGWDq19rAyrxnwJxGX",
  "key25": "2u78DkHWwVqVqqRQEMrtrhQxjEuuCiA1Luqrsoz2xam2inwkaS74bzdqjzBj2mpjA36TDmZ9JMsD62YwPRVvAdo6",
  "key26": "3g6aJq3ni8aYHPyF1M3Q2HK1vfR4TKm3WD3xYnJDMQuhsqz3rUzdrRWMmB1fcAz8XvjVzhg6Y3MpEYWLW3jXNZZs",
  "key27": "4BJXNNrjW5jSVLyYbJRnE82AgJp8A3MUCJzdRm1Ud6P4M25zsLRS2huUH3VpcMUUZPP2GMzmcDbQy7f17YyZFY3y",
  "key28": "4iAvjEG4nZp7YQyNTpdvbgrKwnb4JxJiZ1SEchU5QcrQKTDBgrtw9osbUNtKh6EBwRNKdsswVptNMQqV1i5auziy",
  "key29": "3YAaCHJRXyUzfYyZrdzcs7y4awxdSuHAgAB6q6wU2ygrPk5jRDY1usHCJ3hhaJUnAx3zbHbhtti2AmRcqPnMVEKo",
  "key30": "K6U1DQhbG6f9b1MY3o18RV7JWFkjP4AU5LUhwznM9fF7VLoMYWRNvQZKA4VxYLAkVvb3u2P9bxuB33u8jT9bJVS",
  "key31": "5NeC2dtHXyWQGMzGNrbngin9N54eT137r8Q8FA7mTYmhcCajSPZZ6DqnDZeJhN8AeMWxby9QP4gvJDeVp1SVqwxf",
  "key32": "2eeXMNY4df3sUmjKZXGdcvQYZoYwNXAFYkRezvJLF99P7uend4oYizpRzg1ZKfWvvpKHLq7ndjfbNprDQc57zUvz",
  "key33": "rWSpPKdrNJfpps6VjR8k38WFXjsXzjTj2JLCBPj5toRMC4qgNfARK89eoCyDXSswrcJ6X6rqB8rjMhbyzrKPRvf",
  "key34": "65ifacANq5xh9S3YJ5QwQLc3FPNRxJcg55wiyKF5Ka39hCEoDwksx2AoEmJrsnAfyAUTKvDwGSRdJxCqKHzj2ZAv"
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
