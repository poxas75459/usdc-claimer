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
    "4cmKjZTwGJ5bNcoY2tLsSzcbBUDf5fjw2yyVd2R7CHMDTwozUevpC2QiMKb6KDUfYWtDk3tAhoKrnxctCWQ8Mj3U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vmQV3tgiQZmYqrFAGfsXNwA1iQfvcp9S8MwUysfAMQW7P758QmYjgMsG4TQvC8uvPhkRNPK5VwoYzHxZ77WRzyG",
  "key1": "3m7t7868wmmCgC2je79m53aM4xCzMaHoMkxQXzvmEEjBZfgYnoi3XGmAvXWKpb8wboutuRX7rZ8MrdYkHmkP7kM6",
  "key2": "Wz1xdzxvHYBCnLXhwwNdgiT7mJLkiCFRWZmhsQSRgaBAM2aFbFuqJt7mrG63JFnbjbLYxC43G563jEJJDPX5Snf",
  "key3": "29Z6tes7gifgSL2WBof4o37ecLLQt8Q7XCFvH76DJF6nTHnBs9c1xue41PMi3kVv4ESHrmXyqxDMH7MawsXeFtj5",
  "key4": "3vuRCNcDMxnN49ukj8JjDChw7iDJhUyJsvRXBzgfa5Wh4VewuKZH68eS74YGT7u94rvuE4rY2Xjo71oq8FhSqVxt",
  "key5": "tpGGidomHroMrp4svk7U8MhHNLA5dncsBLb4JsmT33Ly4nRdLuuGGnZQnpXNCPJaicSQ2w1Ti8YCLFmhwGLaJsc",
  "key6": "4brTSyotpuzease3yhzAU9vcxWj2StvvcMsrJwNbey1KcyymSU6dutm3xbHdbqxV5iXeyTt4DiwjLR5x3bafTVrJ",
  "key7": "GsAmaiRtPTtKv2KNoKT4j2CKEEH55omF3xPiywAhKXysrjC5HWdvJC5bAHqRPi7ivQvdr4dggUWvFnYtufkDK9R",
  "key8": "62HEf1gTW2u3NLy2K5C8mVx9jYFd1beknFTEQgUfPQEFHDpNasVmKL4YSN22c2vPrishYJq9VxguNpLdxDTLh5pa",
  "key9": "Pfz1pioeFCYi8LYuxauB4etNCJ5V1Mgbm2rRLjKS7UVaA4Cw6rDMCsB4JHZxnTwD92vxZDQ6Wpqoq8EYMZEZFUw",
  "key10": "5G5P1wrCj6yZabryAzMkVr3A6JoowXSxcwrjadVR3DcFPt2mfmYGMnuApY5gcFJMeauEJUsL49ZXxjY6kYSrDyof",
  "key11": "244eQmgrcsYJ8CJp1M8hB4nyEM2s4Jj427PZBEsp85G1im5RjQoHatXzAmsPFm1Mo1VyEsouSAvB3DuC53qr2ChH",
  "key12": "31Moq4VgfuG8kUA311EuPvGzNtqCvRpCtkHquKganEo8qR5oJRLEw5nFkHfarGAnWPhenXUvrivAdr7aSGHvBczc",
  "key13": "4jSY38kXmSy86wSU4xizk2NAneU7wwNCxE1KndYywuYd8jhaynbZm22JWAK691WfWrt5p1Qgy7Vy1fqxUx4LhCr5",
  "key14": "2rm6cmJ6UDMDzcLGnZpTVEq7Ti1DYcdxd47PfHJW8fB1EWzbpEgwqCczzArgiTNpCB6V6fwFvQFyYcceAESE4nra",
  "key15": "2ioMXiprnpVPnTJnw764VLURQAvf11wv2tgeUvAU4EMvYh518FYjqsLC4sfDt4jthfSoiA48yF5URL3XatRzxYA8",
  "key16": "2UuJAGGxknJ5eohTk1QrQsgx6kU9CGDs3UCaoLeAfPYT6gcvUJwNsMaUkqC9YuVKGkbPQdymaR85zivDp7SWqUJK",
  "key17": "2dBH4dfizmMtRwVHFkmnH1K93xs1k6y7gdwHazVb7SDwJkWxBmkuFt4Qhe5vpjyayPNd4RsgnsXsbJWji5ZniP5Z",
  "key18": "5DXD8MYLHwbgQk3zbmdV1zcW6i7csRDcnQfVFX6Z9cw3r6VMHCppUYdvG2ghZeDqy9ik7m19ARnWXgyS1EHMqic8",
  "key19": "5Yk6A8MASo9EcKMK5r3oXK54xpvRa5E13KM4R8o1PQGT6Ro8BdEjnvPMuTBNNqZ61FA5NMBGo8P4dLSvUV7mSBuB",
  "key20": "ReiF884oQeDQVuMtBWFxD8nL6sGGwaZQCoCML1Xjvo1YaXVPNnmnj8z2CbjyQ5ay7MEWyK5o8Ah9GUK4mXiN8d2",
  "key21": "3sDnvE8eXV7hE68GKxG3vw8ib1BkDeFZgw2kEiSKBjbiTKuD7TmwZxE3UDg8iEQK7zrk26EmxB7zZJVCF8ruspgT",
  "key22": "31jsJKwopWpfw3enhHJYELyPgQ5wrbvRaMgBehwxhsjTsaYJ6jd32LnCRRyazKbHzrucDs2V69rMcSjdewSAJmoY",
  "key23": "5k9e88j7ASUDtjmGXRjFvPhPctAFZ9KnvrXjbVibRFekeX9AHiuexe2P2CohZJe6BmdLLiGd6M2iWmKzKFBR9f9b",
  "key24": "53M4Pp2dcfnQGnn5svmwGeviDjNqRaZzN8PoPzm5V1UvGDKKuaB9qNkTHzNZixbHRjnFbq4v29AAMK6Bcypfj3sF",
  "key25": "5pbqA9cUXW7bvCSQoJo2NR1eW2BUyntgvromuaGYDZvVZq24kAKvC34fYbR9MjRXgo77GCmLB3YiignPRn43bHTC",
  "key26": "4PeNjjJecAaWmCJvCavmJX11eoyCNoGt2h7XoDUcq9Ur33qFKgjsjwFdFeG5D3jDsjLkvj68ibSn9y86xgFayMQL",
  "key27": "tJF4RcRst2ki8zfSqLk2xWEg2YDWprxoqjJGSmr5QximJdPjwAuUE8PQbAuBXnEVaeFE5H8BqnGkVQpdRf4BGW4",
  "key28": "3WRRp6eKK2DpkSq6w4N7qJMbxNZFKxdwKgEvyEfxRSrRi2FNt6ENpLCvfaLixM7LbRzr43DxQYQENfBNASeQ8quv",
  "key29": "5nSjQEwT8VQTvLZQtMFwpwJJSgcXdYHk5c5sMaVq3dKsZUjfauSnwzsZyVwMwZrRuwK6kZ2nHv1621bXAjR4o9u3",
  "key30": "Q2hmGE4wuBzwCBmRyMzP3XdqbL7ssdsToJL1LfAp7egmXZSm4ca61My9YUpPcgut1SxCfzp69ni52aoCvXvoEz8",
  "key31": "4LsUEuiemGr5BivdVoKCwdQtMnfTzAhfnxY5GKjs1E4GqjqbYgLwBhBwYAyT3nnR8xKdWucidvasqquU9NDz7wHB",
  "key32": "vpBxe7A58sTMkDxbtZ8qwGvNhgpR2CTnQjGDRj2ZmZGqeVRLXML7pWciMTqpRy5tBqb2yYRHfiERHx42VYN3yhy",
  "key33": "5hfy8ahZcBZKvDqYJJhu2sL3FnKpATiMfiDoSdRaNtJQ5zPErFn64KVbWMjCXhVGXssKkFyLkKGt24dAFNpALZ88",
  "key34": "2ZKox2F63gDD135XJ4K11ixf93aSfm63xjiTZ1qHpD4zXq69p6HPiq9y4NLMwp2S9WqwUaqxxDww9Jo9b5rKzh18",
  "key35": "26TNELxpwaa21zhd3cqfG7k2DMtWzfHiyy7smYyhbzi4DxEMW2S2cFYnDfUEF17kwBeWdZsMEm78CqMK6QxEvjSe",
  "key36": "kEHCkPkf4MXmAxuSt2t82ew7BQd5vMBsrqcxfZ2mYNAXocN2CZhJnmAFWSFGn52MaimazeRyjWNf1vzYQv6Ra44",
  "key37": "Ug8WtvcpjJTcVtw7PkpXUsq8Ur28b99z36YR2Tzxy5kT4yXXKS8e7ykBTbGeAnuVPPCv1yS3XQkUNPAGsxvZqsk",
  "key38": "4okGS6XNGUeZ7SbvRhFutEE6jswZyabMAPjSQ1F7ChYVBp2QC6wzdTxpvuN8XbSEB31thgRmYC61gZ4hCAgAN8fL",
  "key39": "5tCaJ58J8VieDUZh5F9uETEjY5Z9GbeTsv4N9dvxZhwkNdhU3kinQ4UEzvXF6XJzos5MvUEgwvXyUHzPWKDZndQ2",
  "key40": "4Zw1jWyhyK2koHbK4iazUpmPeYRViAW9YrmxQaryvvYHdPBn5ga4XwHe56csqRzRti7HyJhNnVxzTSyPa3gGQpKo"
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
