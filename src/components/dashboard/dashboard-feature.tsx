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
    "AFRMzBDZQVahJceXMyZU1CUDyB9YTRqjwaoeUszN6cc1vGPF3R4p5k1Q94htmtvEQVvxos1MuiczaVg2YHXDBdb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "k4vAaDgP9Nk4dCuZKYydUwzc2LD4PkwkyxRZFV51Mhnwb5qkjaCvgCGjP9bxDyW4E5Z7831Kbcw7Frjwq2XotPg",
  "key1": "4c4Pth18fneqLyH3P83Cnr7woUem8288cb7RoSKPyC46qL9UBhNgGJqFuQSk9B6C62Jzxkrg1hGghz4qtHMnT9DA",
  "key2": "4QpBBi7kmBUo8zXxZodvGppSipNtUbSHqdE8eMJn5sK51imrTjhKDgWc344pkBMGV6rPFNUQfMg9azn4xvjUbNzy",
  "key3": "2N1ErmtZmNgUZfek5AEXzKQTg6bYnGfwitt8pJDVZeCkLobXU7qxm7S5Z5Fbd6BDQ3jn5fkmC6jZ7cvDNqq8Y1jw",
  "key4": "4D3sbwoodsatpfKJKwNx2zBpU4D3Mz4UzBsbHFoEqXhPgG7ALtVKNFNiMk5T7ziDG5pLdtzbw7A9pPS6NyPPFzeo",
  "key5": "459ZcDtagMqcCQLUiTEUjB2Hq8NmVD1UxK5hFmDQk92RctoXZkt4uRmc1VqFbWLqtGTmLPdzxexgoS5FNTnwbv8A",
  "key6": "42Xj1vkPFu9DKNoZfqv7jznPMM6XWYMKDGTkjrqGTnEZfH578jPFUpJofKtoD4DcS1gf3prEo6cdndggARm1U386",
  "key7": "Be1LniuEWVD2rhVFWTe6FX2VLWi9p1RrNf5zJA6H3Gtvve8hyM5nXCTotAMtcSCbCSXWW6e1BbzXQshyyJ2RJiz",
  "key8": "5FxeLt3sRY93HkspHgQr6nZS3bbJCef3Fkcm84jkVYmzS98vVo5mFTkhgehAPacTjLTpXw7uPnRknVVw4hKHGtNB",
  "key9": "2X2rRZHMehK2xqLUWXZuXqKrDeLUm8iovzF2pqepY8dSp7TerUkGNtyz5Wa65Cejn3ppvBajZsC14CKiDgDMjFvX",
  "key10": "3QJ8cTxy21qBHWFRVyuwgMA5FKWfn9q63vaFGAUzRNueg1kWMm9xcriL3i7jRZwhubLQMVcoBYTy3xQagMomfzJ8",
  "key11": "33mx2bcH15GT4xGHHhLAqYpiKYsY8ByTcyfhsyBePiq6S9STp93qqzSY9hLCRKbvjuHyhNH5ACL3LrtHoPnpJUt8",
  "key12": "3SorcAVmww4G62iCVS1WXQngtxfTSwT7j2HCFH5BfssQiPkgxsq2gua1bPQtg1s15PwCS9KQn3fZg7KZRP3cU8GJ",
  "key13": "4RRfZex6nk1hf2TLg4m69BWrAr1dfwn8Yo7yJMMMZ1MJrLZ2ZorbBb7LGRfwTYrQTZMDAdYh1k5xCpkcA1gyBbfr",
  "key14": "5BmDDATEXoTMVChmF2vu95eRNoFLkJc36MkX2XLb6eVA96DURhfBYYmotxk1ztW3LaWPQHhUxcy9tbCL741hPUZ9",
  "key15": "22Xi6rTQute6zdxGmfyMnHd8RjSCAnC33tuuaK27T6GrNEvuaJGLPmNyFyDcWbnNARiZjLKCQdMYpqE3FsuRStKY",
  "key16": "5HfgomT3E493jZGYCoe5zUZMZK9miDZrcLmLMDU11Gg667hBRwzXPiBoH6HyFSFsvAceotgMsr6Qkp5kX7ZQhKAV",
  "key17": "2dNUu4Py6MJRmqwKb3jS2crWEckqsemwNV6xU9jD3d1FD3QhLa4vsRLZTxouXadELT9jJVxP8PKyAFcBu6eEP6Bk",
  "key18": "2PMNh12tgp3Fgfh1gERfszzinP4nSucteTBnWfsjph2EJ8qTUHfnTSuzrS7ob6wYJ5n9GmXpdGBimSGyRTSmLz6F",
  "key19": "4nrHaTWZXUprfLPjVcW5Lgw2TNrrqZhLp6ybzT7mdzsrC8kTGtgVoiG7DAcXxSKEMQCpn6eMLYpJZ42fnwb8nyLe",
  "key20": "2YorSiKzQJn4DyLcQekYSFv1ikAxFyjrBk7h4w6bk9WBAiMm9yPxV58wAuagL1VfqUHsrPkRAk5WaqyWF2ZicumZ",
  "key21": "4ZXm5P2hXxMbWSLRw6uPF6pEdYvPSm13biYSe6L9esmUkWsxyMCubcirRQ3wvWN4dADTDHa2BxZxyjTE4hK91GCF",
  "key22": "633QMbCcNzxVuumW96hD5rTVQFPRFh6PjnCAoYwUrY7XVbrpDznsGjd9FVatnJxuHciHzrYPAFgEvU3Jd9w1qAr1",
  "key23": "FrQnxGPEmBk1YRpSfmxqHrafJTXgzRHULEFBCt5YPnkaxMmkz9SP1jorxyc47683hcdihKUojLqN2WGZP6Y7Be5",
  "key24": "27hjMEDvVTQGySEqk9sJTkVKmW3bEkZxXXioLSiaNpJdSk91KCg1tNFcRBFcAhbXg8x77M6MeQGUnETqBqZuEtzJ",
  "key25": "459qYdsU1Uec5e1vNDFxz7Zj7m9JE4HKWQNHd3voCfN7JuGnjUJLC4WWoh1Csem8CuvHYDsgwN77PJHE3ds2fg1B",
  "key26": "uK7mo5oPaB7UdvUTEeaeq4K838e314KYHL5jNm5L4drimtN8sWGU7QSTFaf23CiaqiWacRwnzGgaNJRgyJazPfu",
  "key27": "7cZGbuEG4kg5MSSgzfssXwsbZd773S41o5vKuNCe3ADfRwVRrQKGCyirJgzcFeogz6L3XaXrxBCFvdASkEzBCSZ",
  "key28": "58r9ZN1hwxGMFBQmBVRmQc59d3vZCQ4UNgNEcYgg3X2ji2PM8AnfGxVxYuVD6dXnHWWV44JDdaGLY4U4rsChm7rg",
  "key29": "53M11xKZXbUmL1XY8XnzjN4G4zMWpGX84Fa5HcQA3m2Bp4drkmAqvZzHkbmU2X9xWiN7g2b8dkJm7FaGqbJUA3TJ",
  "key30": "tsKNnL4xW2AxFSxeDwavDF55HG9GDCgQ6KqpBUrgikF1Rtqh6ifBMYc1L8QK3sCqncZkPEYC1f8nSifLskyXf4f",
  "key31": "Gd6kVgr4qW685Fmj3BJkx63LVakRCLjKNPg1mAWKogzsZHeipuwcLHyMkybbeB3ApbvfZguXVwpihev3pt61uGK",
  "key32": "TBoNsqM7PkzCoWv9Rai3qu7Gd7HBG3FPqKW7QpezYCyMB5U4MSTzD5DF4D73NzS1XRkUFyZFdcCQkFyDb9ggxbP",
  "key33": "4x93BErfXYyPWS3TFqED7J6UGFLbGkVxisjcN6udAqJT5tXjDa5nCUKf3yjaVfYMm2imJLE6SPJBCCQHgsRJgfKr"
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
