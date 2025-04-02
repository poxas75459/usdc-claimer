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
    "b5QixiTWn3FLhjANJmW9QaeBUp8cf1gRZTr4j17FhwxEadWeqVp7uJQ3zYAdxGJmcUhbEurMDEKhniTKdi2o3un"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zZViKnoQqA5zA8azL9yXC3cCAu7U46Nws6vucwRCwuLFmcBm7Td1uPJyKJxym1hNWjMy7KyQjVfj6GRb4PTvjkJ",
  "key1": "3NKpsRG14vzYSChgMYMYEZPJiQFWJNJWRNnYgpUYCDjSbD3DnGjaZzN8tvVEkSqcG8xtNZ4eMFcCnHEXWqTMkc1E",
  "key2": "57QB1zYhqsA2JW8s9t1HxPwPyFgZH9VyfYuwPFXdr5wrk5947AaZtx5P4p4Dmy42pzbupZge4ko79AiGwpGqqvLk",
  "key3": "4JYjCNqdLwSCcpFrrBkPQ6TxN6emccdkgg1j2RG7VtChvStwWFuh9Lx9i2ejNJnYRRdB78YwMiNeep8HigzKeid7",
  "key4": "41n544bPtiCcCaJzUFnDqcWikwXStnugdPgLiQpwgp7DATJHCt7cKd3U21YsX7aE7jDoynktYPaDMyc4tMcc7yfe",
  "key5": "5sWoXM7MC2R1ycJnKihZq2uV2UVsgAMXGTHTBNNFsWTp1myyRKiLhxsx7QPfTBHFnL3rRwekT7FVdnsgiBMLefY5",
  "key6": "NVFoeH9fkv1jPoBgnacJuez3KcHv41GfEWb2goHgQ1mJAthJ8JhuYFDe9ofhMjicz4ELpBBB4DWgmseViam4ixo",
  "key7": "38L8An4n1EMnTYLWEB85v11ny5jDD2xvutazbUomtPrgFWoHvCP69Aris5zXLt9Ty175v6hCMro35FsVmKdd3XNz",
  "key8": "3jjjWgMCyqJqLXF6mvUJZoxgN6zSJz3GJnCkFYyP2ofjLr9HAHXEvBqXKEswjW8mvcNwEqRwATGWwMHaSMjvrEr",
  "key9": "5Ry9NAdS76Rh7Y6sEjhbvKhCyQYtddUKXf2SaRFUEz6Fegvu439XP2uqfrGZxatUZd6yaGHXbBrQ8VMWnw6wSE3L",
  "key10": "5WkVt1GQHh2Y7k2Ku1BTqT2vMBf6Mx46FoR7SoxqPey8tnu7y9bgMXdwMqNJf9T59LeQvZYuopfoaQmB1P32WVEk",
  "key11": "3wcBkV6njpWEoWNB7frVAWi2it82XfPFywFPfcjYCBNTtvLU4DCm9MZYNQHbnoE7bUJjb4S926KwDddWzfMhdVNz",
  "key12": "3CT2hGHSLyiMxdcsavH8xtxmiez6RWhqaHmEwE3E9GzkvpNRUAC3yLKyZKG5KU9JTkp3by9e2KshGT4UBKvtjYA",
  "key13": "46tMz3dQov28gwfugv2EuiAifoVUszeZn2oYxRrwBjPBXpUzYwX4vPwEC5JzAt3R6drw8mN3yMgCsheQPp6auDtV",
  "key14": "4phLNsURzf6FSCuFksYURWmStPPV2aajhDruRPUJ66rQVn4XShXedahZBVEsfzdeT3Bb6c1QzT3HmjbM9sPVDr64",
  "key15": "2sf5chZVcjQgcGpWbaZf8vzx7NnCDfVGZgcxvVfcyWYuxtdsTg6MEYFMdPD46exeCf7tLA6yAaeT3WvjSnakBVcX",
  "key16": "2GSwyhxaHVAdBTKmiMYhatftvtm37wbtYVzGGqrofyfAPc9eH2aFuwSeT6RfCLbw8aCVA4gembPzPMogfyXjCLmw",
  "key17": "4UpMJ2jMyMBZ2BeTDoSc2Sgiy3yKoWfdFrpB5n2rsbm4GZVTewwbWKKyF92oKU2nDV1HReVX4uYnXZzuxs6FEW4a",
  "key18": "3TX19mihmJF1TWfrW78ojmadFbR9o77JW9kL22B9f28tYVNv1pngvKe3y6T6vnKYmUCe7F3v5bG19XyQfsCFdyg9",
  "key19": "2T5VSZp3XjtyfznSn91hq8xKc6q3sdjxmCkQu6WHFawnzVcQcepuJXo3SRNfQNk3ar1Esy1tyYms7QFX69ZEhz8Z",
  "key20": "uXYWKCPsgMMKGcYh6KFNMUXXtimXqYmmfLge629MvXYrrKF4M4c3knpGPpydEojjGmKnF9F1JKSmW9wtCWhRyGN",
  "key21": "5ouATGstKpGfC1HQyvKY8yev6Dkw6ExXeJsYyg93HEouVC7SwVnXo5iXwYvmuUZigar2BETMfJ8LT19yRVuPRFMF",
  "key22": "5T8wGXvNC7RSa2c5evvVehPzcqF1g4DF2uTyEiSgg5y6wdRXAfbde2JcapqEaHJzJaAobpwJgK5rv5jrXzLKQLAc",
  "key23": "32F9S3mcUTEQf4PnJ1Ros3XbWGF2rg4ZKPw3DvVj2RHAtXRFPf1CQjEpNyT4QgxiKt6QjkLbPMaNsSNxqxbFLNHG",
  "key24": "4trF2TgwFH4WE6sD9meaQxDMqfhdjhpgyMHnSikZHJAo9M2CRfpw2kryvNB65P2e9RJpyzHH4qpZ7NjPo9sPr3KL",
  "key25": "3oNEC54RyyqrMCMzV8Dz1Yb83FukLR3691KPVKe72jy52a8xQuofBAAJBitkjZPgxLrcb5H8Bu4Tf95G7mJc4e8U",
  "key26": "xHPkgf5wuaUjhbmQyPfospohFT8aKt16h6UwqkWbSZgJsbxk3o8de7a2Apv36QJRB674PsCxnreJekZGkbiT6Xp",
  "key27": "85qft68ewgYQ7KFLT1fXP2L4Cs1FvMoGbt7bFWdxRXaqUL3jkM9qNYhKiqyMrHWMNDW1RnmjGunXZBPXQiaHPYv",
  "key28": "3jKfobP8b2BegcVmSBShpaPLNhdhGFXawehbCUqipJdh24pxuToqxuEKTMUCDBZa7Bj3VRHAQLYDbbGsXtP4SvgV",
  "key29": "3XzRxycok2fcCV4dovNrCEUUesfFx311Enr159zfBsPpkdsc1eUazkNZeuaxv6LKr3rxHzmXfsaGb1KUCZgRgNAw",
  "key30": "5w9fTtnaM51T6xoSRyjN5HSoxmywQUtB5NsxqMPbPiSyGQGfYopaQtnpftjoxGCmhSTizVKMFEeUjGkrDHwp6RhC",
  "key31": "5NFJgNmhec1jZEVPycadTk8HhYawvhuAErBzpDeizzuoYrLie3De4QEAi6L77QMXj6SkWqpGrXC4xtEu4a2G9Xim",
  "key32": "499jtP1CWwFF2R263dSvoYeq4YsKwWR9qARHGZ9SCzY5LhXL8UypbV6kRMd26qS8R8rg4tX6SmwE2jJB9PxPfHH3",
  "key33": "otgEXUrg4RTTKZ6WeWoZNZgaQawz7Nz1ErfSPMo9j9AdVVoGVg7VPkiAvxSHggFpifbfpTc7WvnZrRCUiDYD6xG",
  "key34": "4KcpnYgWjXo993h6sep6QzsbCLDMhoJM8HEgBPbL8WGyphY2qs5sYDyPakH6gJXNgwGEjfuJYu4eFw9tzxdaY3AP",
  "key35": "61Ho8yT9Bn3wB4nvkXY47uKHNXUPZseWJwrcu6v78DLHTsYNCnRaPFamx8SAjFstgj9iu7S9FVEsFdFbdCq2ss77"
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
