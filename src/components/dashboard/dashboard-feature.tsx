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
    "4eJpCC35rcucEoDHC9XKMt7PggQu7ey3Vc4BX9o7u2Wkc6BTFS5qbPKV5YTtHjnrWAby8U5KchtBWVp8Dem7LyM3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23WcpgShJDAoYVqcccPxHDkRVSsRYvvyri9fiLzRktYJhRzsqar1mifKrw6vyodkdWkkHWsENxwqcvkV8niERS3w",
  "key1": "2qP1npaUJChAdUEXSa54LVPpHJRgi9fvpGg7bbmpTRSKxdGjoyt6iPYNXKDH7at57qRKWed136QrudiqjNQHCjqX",
  "key2": "3B4LDxsmcuDQvbPpxrfiF5xrhyj4D9915d6nZnrJhYz8jaFUBeX2B1sjP1G8dKmQw7pM4uDWyYE2mcGP84LQLUpd",
  "key3": "4KtmzkbZAkgwb3xn6aFeztWmFb7A3xMN2iFzHNGyJrw64AFcf9cEGzcjoM9o8nLeZxJq4jh5B5mjPD1TN3rxo14P",
  "key4": "4Ar6Tf3W1ka2dGuD8acMMDZfFPX11rif1PcSivhdbdS8qkxFKe6M1iyYpckJ2VpXEShkzazvYnubb1wsyoNdiQUP",
  "key5": "64YTChafoa7hSXHvfcEVAQcU6eePJ7h7qYfkBcEj3aHmJP3R3RdHkGxBfWN9QerVmZQmAaDtSXQf8LUeRbYc314t",
  "key6": "3HFKR3Wzf2aBqaBxetvxXAmKckjS8XPeKgrX29T7qFCVB3JbooWWKn3GzZzSnVZ7uv1s9xFFAqHCBvurQpnU6in5",
  "key7": "4e1eA9Q5ALUfKdzrx7qGyFXQLeuFknu34acfkE73ppfUZCaXrLYMZ1MeNh3ZZ2f9ogRaE3hwA7K36zDfH1sReD2R",
  "key8": "5KCtNypatJadKhFzCrDG9mFxSpVPQKkDv41Ni7vMPPihqXUn7f1CCJWdSFJPRww6orySmjoPm9w7wz5wTMA54j5q",
  "key9": "3uhqWMZuzoHZ5uMxXanGDTzHpr39rASdRKCgnvE6rGBUUvVYLDQm7m8QLAwMNonA874b33CV7sxEWDjz7kcopapG",
  "key10": "2B4e4EYLVQ4EuFchFuNNyU5T67PU5kuivUxBo9v1ukHx7gMKEJEQ2E9f7t2WXvVJTNsEcsuPGsRe14Z2f25w3gRo",
  "key11": "67WFWioe2t35KpmrzH4LD6W6pEHFZCC371SRcBSu4LzE5fVNHgKKShhR9oXMBGebgPhWytvhs3vzjEmZ3rVnoGVA",
  "key12": "3TDXXRmoH43LAejKxwHTBaE7dhnTeyJudwaQaWWNhYqKPGaAmKVpit9Fx81iiMZwBu1FAvQY4gd4VxYAbbZxrT8s",
  "key13": "4RHHhnkAKp9MwqnChW8xVUViib8kSPhSzh1jndsjv8AuEXXKTFqTQqn3GVXfkAzVcL5z71dHvug64VJDNJiW13uQ",
  "key14": "3wQtY31VLYeYcBruRHQx3pEFi9YjCYA39gapj4rBwJWo5bKUpQxerHERnM1qaKTGy2wBeVJFVM1GjCeUGmrpe4MG",
  "key15": "5xE4aXKkbm5A61oD6hipovPQedV9Qa47jyuSt7fMLA5bxXL6MzYJiYzVmdTy4SE4jVGth98P9pE1Uj3P1pGeMQre",
  "key16": "7bqxaQ7aw8aU2eJLWqPE9vMLy4yd7EdtXrehWkuDcy1Fo99JPU19WiFUuHfEAC8aPdFW8M9ZMXkFcQD3P1Nj3qu",
  "key17": "qr2L12WoBtThCgtmt1A2wbu3NRn2Ya8QQWXve1tmCWxujTB5oGfphyd16QTz7D3PCTXrtVXXyzYFmhMgQWrb7w5",
  "key18": "To6DqKVUY2wgrMxAAUvXbk8gQTHBSfAYPQaEKnjKHtiWNKZ8PPHNWpucWiCmgHi1ztJFiuQrQ172wQTrWawi4V2",
  "key19": "5y3ULnkvimzUvSCxEZtiHYZ3TdFpVk1LfwHhhWPdJxJ5wZjADvd5h2BE3hpMVTuNDDWBSRphZFCm78NoMroiWsiF",
  "key20": "5RWZ5G4pUiotjbagMg1mzUqZYT2u28F9a93hmHgBPoYNzwJmPDfedWEyYC17qq1YHBceGbZHTXr6nTSFrcYjxF4z",
  "key21": "MrxA3D612GWy3UgDpbspfAMWXwu2HhihWHPsrLGWymBt6kpJ7Cz5Vepm16omHWdKzPoYEaq8FjXvgXoRw9LHnu7",
  "key22": "38d1Q7Cf8ngx6kYCeMGqb27QUiDnKzJCN4hh7Q2ruRMYZeivP1SQbsaXrWXpYhVWQByqXCtpnqpY24mb7FnXB3kX",
  "key23": "63frUiMvVsYUyy681Qr8g3gtZUWcZ6vgU4pobhzoqWguKysY664ta9wj1m49uKvKqhRdZCwhGDiGMsJwAT152zLk",
  "key24": "26tCZ5TpQpLLreRVFcdXLyV6N7AKG4EWfj4tzAsvujuwVXdeg9tzjusZznQzKR2uE9Bz6WS5Qg7pY8pEHosTaFYC",
  "key25": "4HmX99ig4RuxzsQKnAMq38i3yKbwKTvfFLKsbXXPaMGobnQ8cSbR6XwnJ3x9WL4qLBrswsn5FgBcLKTDXe7gtcyD",
  "key26": "65hKyEKt9V2dyt9S8fdRUXnqxh2Wh2Cz65C5yBZNZBWbPvUSythh3YXCYGCQhR4F6egLVo6HwFdy1B2cWRmD35Uo",
  "key27": "4thXonuawfqFbuF6nn9b4bFv8K56taa26YiBmxnDLxTwWa6QLBH5yAB5iugUis76i8a9GKcdmitEA9P5GJvEQhf8",
  "key28": "5b6Sev5qFtvwxXiqNBG1rpFVUgt7UH9hasMSAUDkPuDR21hBsMcuxtU61gPV5KYbHxGJm7uGs9ryxoTWaG77SdTh",
  "key29": "43hsKi1NVKh3hEWJhncjLccqXShALHXe4LWCoZ7dTV6fYsr26kxrRyiGEMxoykHxnxBd5Us1XhC98ekpdWv6ewNy",
  "key30": "4hGSBRXjdnnGSv99Kr4toETGjceRwR8rAAxavwgzWSA71hCPmnPWbF8CuGbDCUA3YrzMrckCzdNH4AWjbSwwfHGf",
  "key31": "3p7iq6UhwKcKS8Mp9inNFB3fvNeHTE26K3MPQN3jq1jJ2xxZJcZXcj5JTs5n3NhZBWx9Lhe8UTccZDefPmFNeNwv",
  "key32": "3ACJTaZ8C2xFQwkcamEgoLCisJaoUbBi8CKAGaDPgX45TL2hkWW6cnWSFjE2RAgBxcTRsXAjy3PNgnxUZD6yj5CW",
  "key33": "5fNssfdh2xPgwHg87ohF1UmfdZcK6VNNENTUbG5DdXFd7NZ9PmpHwE7zqTWKcXd6rvWT1HShScMWwwy7vTZu3CkP",
  "key34": "53ArBwNCgMFevZWkR7w7NeW9SPibjZ232nJr4x8WVUZwN1ctinCj2dK94zCYuyUE3GY8BaFZuhZrNBp1JpRUgqZ",
  "key35": "5nCBvQF2dmFiLstfCzUvZumutfvjEuCWHVGzszM9D7dwY8Y5QgcPRdWSygBgH86XAvEq4esYMKtzWHJoszWqfHbQ",
  "key36": "2dkSj24WkhtKvg9mLXDE8weBTDTLZNXEaCoaJRCach6M9MuDX2oavykfH6xzK4wqdr1XJk97qtwbeXACz3Jx2tHh",
  "key37": "2QbVenaYm9HJrCckq2VWjTqiJ6TuHg2HA7mYRnuRJ93553sKAM36bb6xmUAFoH6QzHDePe2B2taXQHz4ioSvhVuJ",
  "key38": "4pEuUf2RpW7tPbokbXy4eTrvSchDyxTovn8H4oQyZsu6v8T2DXrDRjEo1yoqiVBQrznwd1gLHrSu3YJ8JmxMrdZe",
  "key39": "3UmHcH2MnbHYcm5D9fBSa6weho2DhjGnrjfw7Y2DLNj3rVS22E1L9hUCujfaCCtQXkKvzjHfrwdHw9grZgnkAaZ",
  "key40": "2zteHk9yASr21GbXf3RTucLJTd8SHmyVSkHGo6RMkAJMnq5qEa7LAKKjUTECtct5zKhmHBmhgP8vBBGCahdAJJEp"
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
