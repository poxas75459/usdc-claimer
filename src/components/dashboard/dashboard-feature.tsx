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
    "2Cd917YsDWMUj8TFgnQuVYEZUQx42qLiC1qLXBwP9JAWmDLMYQTCZ9CePRVQZVadtHGJ2ekG1MwS4u1HXRGLCChV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56i5YzakmDB2z52ow6Su6mgpVzMwTGUn7KU7h4xG7vrhmAAPj7inwWBaLU4dxQu1UXkH7NVXpsZymfPzbFVNegXN",
  "key1": "5e94sRkVnwSqaqZ23RVe7W5gdpVmuPMNFt62YjHynYgnrh2dQC8TsoDX6g1kCQS6QNegpLnexREG6mksAMRVpYoH",
  "key2": "21TEqjbARgBr4zwBVYZRS92s7Vj4e9kv2DU4NCX2GfLYpLAR22VfMkA7nfDFuE6J3ryXx3sbtuBtELSwQWEJxsAg",
  "key3": "5TyrBSWSy6jA1E7y8zc5w72ZQ2gNnoTotLLVg52P6zdvTH92QG6peFfmrL8bLmYLfE4LMSdnYykTPveQquecT9UE",
  "key4": "2JWPKCGCHs2dsciEUY9VaVqocoGTTUFixH9KYH7Uj5YRETsob17rjtDzLgh3ghiHsNT3GfgqJMxfsAWGJtpFFpF6",
  "key5": "3rsuL5Zn6vS6qJAgYk5SaF92s89tHXNoYw95Ch63zN6zaHkVsZEjyiC5isMXX6pEbbLjwJUZam5D7WpuD6NmfZTH",
  "key6": "4c5d8DH2nSXaRm3cTVcYKgsg3A7NzxdMGmKVu6Y7BMfx8vXis6Vef4pEzErJcZNpzzHKnf1eTjXFRivDc6ogi3pB",
  "key7": "4nWG6YNxAWZfSJFJgqsXyZBd553X3EWgUAU7EfPf3Ssw5Az7GuGSTzrBSdz35DikTyZ1jZ1dTHFZ6SPuzXwxxgw",
  "key8": "3GbhtKy3N8gHEWpc2B9pg53WeRVCbsg7Nk5FBJgNEu3fxMwvnU61M6f4G19yejB53gPx73rRfUMYZfzQ46xvgmQH",
  "key9": "tg5QfvfLLYWya9EnTgz3oDstmw72jqdNdLmPA2btBfrXnZJQCXfB24TuocpEVFnUiC59Bvfyi63Xmwztzxq6diK",
  "key10": "5fFyDLC6AAVNnzsUe8ikaGqwAyFeEMSznyjgiMSyiVVVuCbeDtmeARM5P344SbfvXGsTzSQEDHRx8T35MTy9jevy",
  "key11": "5Tivxc6FTfdCqesesqBnPdg1uNz4udMWX8Ek9a2cBZFvvN72mECpME52Rqdm4c4kP5v5fjLzndgNZRo4FaAHbDV2",
  "key12": "2WM71rn29SFEXNvdnidmK8KLABEwaLUxCK23naRvYcyvGsxQ54gYxBzLjbsFgV1KmMMpj9MQAS24w3opMdpMCuNJ",
  "key13": "5NzwAh6FWkkJZT3Md9Aiiy99x91XNruHPC8r5k3wfHrqxBxUswFc8FzGWEukrLu9SdTYgJdPCMpv5F1PrcozKPvu",
  "key14": "PR9AvmAk9aCnmQ5aY9fhrwdxCKgGmCZRgpQePjSH4JXJEFMgjgAWSfTnaHzMgDU22WyiQUnoVabzfpFLJFk2T97",
  "key15": "3denKtEAYZspU1VEtui5HQkFHzYHvaSFCAhutwC2KLNHgis3JiAy8oefws6zxwMUqWakaseQDB2Vdj5iSfaTK16j",
  "key16": "2RkuXcBPL28Czme2H1YXzRMCSB5w5SkjmhXjfcLVrZYvKeFaKiJ846Q6TNPuapMhe3dpLGUpRhDPPMLgbb9yrpe1",
  "key17": "2oHpQgEPYRR7Qd4zx9nnvb5YSxXbHUvBSa54GyGmaTffQAjsFBbyDcbZSWQVnmtFHQbqpGQ5vbW391D1EubDnoVB",
  "key18": "4E7n4PWjHFNdj95zGuf3CMQxaNjvNtMEsDfFziLK9FvjTHwjzqaae7RYKRet3Uf4xhQ17F6YPjKS89CEKSX3QpiY",
  "key19": "67NhUMLYP9A2Hb27JAzbrNfMpCqFQYZkTeBLw2YK8pXfLtrxZ7cm8TTWisNPkoutBPnVsFK7H2rLgEnjrKStNjoL",
  "key20": "58BiXdHoAgTJdcNdv8NyuoT8LL5bTacbJkiDRhgD9ic7a51ovbimdGtg9ZoePoPmkScS6Bd7mU8WVDk9jq6j8LwR",
  "key21": "5QEoNTr7RHnKAFKurH8w5KLnuopnXnkb1SLhUnZhZNLwsPLp3kQFuYnam2Hi7FR1sw1EnM3tG4gWS6CgtuN1N31V",
  "key22": "225feRs1zSXSSw2zhK5owSN1wEDdgFZkq78WvLXdQX2ATmf96dXSEBshdEnUp6XqM9DEjPhTzzus4f1pxFroxk8E",
  "key23": "5z1NNWT5FS3FjZSoARitsAD96Hc6ddenY3Eh4TvzQwf4cDWUGkPnF21VZgSyoMvoi7Bh5EYsgpBwayMWAbfwrL9n",
  "key24": "31YknorhvR5b26xkyge3x3fFNQWfQaNxWPikeNQ5qVHojyPrkDLd17Mu4c3SJuYB1X8cCBdXh63W1AvKAVQvexmL",
  "key25": "2Vh2oEfvRCXtgPeMds4cM7D8T5krFyDhTEpkHDFLWpKgyDD5b7g7DLywvb5GnBjwPDaEQQLrf3MhpQRyFpdPzye7",
  "key26": "2YNj56AYCTYbnPezwWKamC1kPqCJJyPotVeLqbse6bjxpoSbBbyFM2XyvNj86agjaAj2BYRnL4zMy4AfEyFrHcE4",
  "key27": "2GDQQy2x8oGymAP1S2gjqEYuinPJiz72LoDF4TWmeES7R7RGmRGwVd2MayVFngJyZ2x5iE3iHGw1hDpoSpkqrvQi",
  "key28": "zu8hssi4qFRVhMNoFbQmXXV1fW419gQJyDka3WUcP3Aast43KvzxWtyoZUw87U6utM7pPuy7wA3MSocgwynV6Vq",
  "key29": "2LKTDncEafhpCAbHykmuAET7a9CcCKTSL1NbqXcCBxVtyEKj2j7bgrMd6ewGDWBQJvi4xADnGtbHZtG2hauiyB1x",
  "key30": "S6mqGvtE2BFJA62JcivFS5evG9tLHRME6y8UbTrSs1CScX1nKUTED8ggkdAvygcrfPsrV7Ts5cnYEK4cgUSdCYn",
  "key31": "5CxWfKg6pD8Zadf7UBW1qvsvgchu43yY9E8kH6f78AmN2KCfVEz3fEVGdZ5do7mv3qTwfLdXYyTtQNA5LzcT9K9c",
  "key32": "21bLG49wx1fPxzoYMLxd8NqFYm5sLGSayz3qDQLBi9NQ22sgYFhwSn7FruZTaH38KorrQimZx7L65S3AiGTpRkTf",
  "key33": "4xZve5A3XbV1HG3dbkVitNjZi7keCY6ZdoCqoFLXio3o1U1hekRQMDnejyaJ6VJGn6gasqYA8ijH6gC9eBWcYqt8",
  "key34": "5fLB63wTu9BkoCJsV8HZFSMy5PwwetyXsR9eVJHWE3MmpEAvYpL4KS6uPa8q4QcuTV8K8JigtjuLWGBEXcMiy4GA",
  "key35": "4Ax27eP1eeT9ptfDRmxeHzZRpFpt9Nk1WrzJnCXbucgZFRQV4oy7jFrn6A56H8VCeHsjkWd9Sm1Qx8b6txMyEMdN",
  "key36": "2gaVD1TbroBymDWMokUF6i1P9WjeeJRkqVcP2V3eXVuZu1YWMH3C2px8bJPYbxCwTxfAjmpRzp8L2Vttn332QPTE",
  "key37": "2Z8kXUNpRkNb62Ky72ByCXFsGQ8NZePX5QHFkSjFfXbwbiH7QpfhEDrKrcG9MQhQhzz5n8diyUdep4sAhKBReocT",
  "key38": "ASM3gShjbHJxexTpn11JKxAso6dDAwoTQDVJgAZrthY9oZu2a2HFmP8yXf5Q7VDWfJGcrLfr9Vs4wq9ivZvz7hn",
  "key39": "23cR3EaYDTwcys4s88St1uMHAvetNErHVvviK1mWcgEzJ8KpJXuAs86TMAmqm4QGkt8G2SaH2VqBYFhto3bYqbm8",
  "key40": "4QD9CaksPxghpKwR77sER69GnBB4meHMCop1n7c3fats8pDFXbGcKkixYu8hM65okRMxeKbqbt29c8TmWUP2qb2q",
  "key41": "XnYADaQHkYCs9Q4Z65KVQG3sMPJdKBLwvsWeUj9CRq8nAz6RTDXaeysen3SAezve3PzrGgsKS2L88Wu87Y4dD2G",
  "key42": "3ZoFXiJjB5GCNpoXF9FE925wKPi8rEndCYJNY4ddJdEJhs2wEFpU8Z5LjZ11nBdo5U5QcvFSrtwHnou9K1SqPrzs",
  "key43": "4iAMreWXksSKvuuQbxAkZvB6KZjdi1UMRSc1ewwJAvPeQg4UrtE9MfxYj57J9iErAg5E2Dpt47MiMECy76NrAY8k"
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
