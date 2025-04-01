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
    "7yoL8Jerxu3YuqJRf8bvW9cXX1XRR11srM1MeStNSToX4jBggfQYoJh4epn9hPWcFDh5A4W3PTtoR4HhhYqxX1L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yuaFM7brVPiTNkqmYNT13oEkFnWcK5qnofLW8FEF1HP2mGjLiU9FiiHutenRYiuTphSN6Ab4VWhvWLFj7hkoiTV",
  "key1": "495nX6hR1XuuTryJKgmy1gjYe6wumKsv4KyWjVpMQ2gAaMi9S92LZjZVwiPShymfqMyKaN4Hx3E3QiJFcvnEdXdo",
  "key2": "3xVZbuWLe5tBWRoC1yNUEmbrcAijN5A9pBjq9FJgZbqiYv6zHqVy32mvuDJpQ6WDxayjKRdCaWG8oeQDQzKK3moj",
  "key3": "3fLWHYHhRzF8xiVdpyntLg3UAbPRYLJre34NSyAnnkpphDLKmyHaZwwgrBvw2hKKzzHJ44R1JrELo9DiDdvfxusb",
  "key4": "51pSvg5T64PsG5HohWYK85rweiahQNHVdX4pi1mwpdJaC7MtC8Lxj9cGPu6fjzggPCgpsM5WijxnBPUQjZGGPcHx",
  "key5": "61LSLpkZ8Tre8a1wTsju3rkZRjDDG6C9VMDgetmYjMQXi2BuEYU63w7SJD5SxYaEdA4sk4wTQjT9gTkh5dYtFoWs",
  "key6": "9Kdw5ZXbdG8HpXHtmZJcXHuYv1fmyWzya8orSeF8MsJXScvZcWfYDci56UqZbkYgLRY2Q6DNjfkTgJjp8Jqb91a",
  "key7": "LWUVqv9qSqnoi96VhRTPfQPdfNky8Z8KuaDxcuySLmg6aiSzjfrdfDwvabhZeFibPWhPkdCdMkLpcKGu5Zz6vsB",
  "key8": "k7e4pTMySrw7mnmpDK2hygCY3wGdfdgP9tYQpkK5Y9o79W9mw492dYYMacLdgXmCpTYAaxu1zocVoysBHefgMLJ",
  "key9": "5qk37FRHAgDH89Hv2uA6eMJm5S8bt4jeUNLTKfGaV5hA5D9FY7QiEZUr9s3rSPU5fUSKCnS9kzqLRo89bDVfT5Hj",
  "key10": "3D461LrDjmhV3VG4AQZNENzpPXrmZVtd4UE3wEsukkBGHdfnBDZ15u7o7o3jHCcn5FS7S3f77LCRvuaZuk5eCfdN",
  "key11": "4eUeT37oajHenujqMyEzfMGWD2Rh7b3MCh13TJCNtxBtooNpcQ5VyUKDysRCB1d1LKcv2kZWqfjpTsuSCEgTtwBr",
  "key12": "4EmUtyKG7cMAJ7hEFMwYc5Q6e5ovJaou8UzbnnvhqDPniDxXJUVEkfBbjiytSdCLbRYjxtrUvj3oaV4ysE1VwiGX",
  "key13": "2TknDHwF1kHYxZbEyxbgGVbs8FUmTPLt5oaS9d8G1WoMUfhEaGJEfb8oj7uT1H1ZuCkCfoDiMAkwjwBcCQjCAc4G",
  "key14": "2DxCwrZxZkZYTTrbw3fcznkseY768539BUCZ6Ptoh3EgocBfUNfG3KccsyWtWQXmGirgNdtFjmuYUt1HuRuBn32y",
  "key15": "4bjAK9BxgHHTNNABUew8NRGGLELYdEykL43Yba8YyLQ3EwrHRS4VSBVwE2ih9sqgTNLBsvb9G98WgKUNfTAh6r5p",
  "key16": "4cT8YJZv4skvT9Q67Ukmkk8wNeztkbR7bPHUWzVntGG7gVAvWabUesTdSAAWyKhY4RMyEkXqh8ZhxTAaUxEjt9Lz",
  "key17": "2rRxa6vqo7rpsvaLTqeTx3JTmuMCY1tZcFzFD83H5nbAVDTTMiwUtpQAAQBAJkoau1uZysiHu9SiLxMMpfY65wLX",
  "key18": "4uBNTmPwGGq1shANBcmM6MRzF2Lp5bPVUXRLNEQtM9qys9UrDDJzev4V41SYimuWmyFS2htpKmU2PNrKixsMXys6",
  "key19": "4NqA7w42Z8yVV6sQDJrNg4eqiwRxuh4MpRrZLy9xTTGAF4yU4g3tV8BwbEyN9SXXEdxXN6YypMPQmGd3kNrK9hPD",
  "key20": "36di4xh5mvFAitZoS5u4zpM9thonMjR2q3mh9C4GzsfbZVD6bvM2sagC532vHNfV1dkVP9M32dAU8ZCspbAUxM3H",
  "key21": "4kLpBWRYYLDWKyMup8ET7bAChnK5Vqm38wPMZHsT8JJaR21MWTasBCtzMgMTNbWVyXv19YVWrzm5fi826kbgjfD7",
  "key22": "5jGnxupwHd8dt9f2rvs7KD2c3vWc36Qj11JNnMHwcbMeyUZwvMxhznK1xugsjzvwRSJRqpcseEEzW3cFu5fXPC5A",
  "key23": "2yekUVG2KdPPys4HcijTTsDV51FQ7Qa9UizD7cPhxjiR9njYMVSBc1cf16MNo7q6wjiKrRvNGM7rjUj8UZ7utxKt",
  "key24": "2usVorXj2vEvjkUj9nTC7kEjgo7AcTyzK4GT8RwuUbzfD7zELasrpysrS13fCUss81sMD1Xfn1L5XkR4kXMpxNt6",
  "key25": "4wA4iSmQmwKq3bKuiKntctKUwnBr621boaK4GCN7KTffEunmT1777FAJK2YVkDznmnZtRVEbMenbg1wMqc7fBdFg",
  "key26": "GYoShgP1Jxa4suZGz377HbkC4b6ULMQddaCxC5dWcvPadvqNdtotHJJbDW5usuFBL9oZyZAt7Ep7FH5gYm4nVCm",
  "key27": "5KXGhnHWTXYJDvgPeBCQuvkc3VxYzbZt415tCt1irgKfhn7E8nBekSWeuGMtuQnd6JbL8gGYpTKQk6NAJFQysdtW",
  "key28": "vR7KygC9owaUTGyBpEHLBzqdFKagWm46fiyzFCHuLQ1YepnM8udRPqVQ9euHvkMogsGrwtwWRgLBcPjJp64vrc6",
  "key29": "4PLGSHprn4i8mWJr4Beha3JY2zq9tptpybPttFzrh2HPhkDJLvg5Po6E6sPjEf5nXcPYt2Ve3DwCQvyG6SPurVgU"
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
