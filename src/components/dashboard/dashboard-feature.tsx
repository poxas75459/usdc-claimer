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
    "LqdXL1y2hkMhu3mY1B6SmawzDCYaTVxXZoGx9Y2QteJBRGYBaHDm36n9xq4sTzTUZD51rfiCTEa7kpXTQ1s8TW5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mZJcfGao37zEBV1hHdyTgkoC7amSzPj9AogviaoZy6eyyJ6JEvGXuLifhRfcyVXNTtvPExF5RyTd3KAdkQpK2c5",
  "key1": "5YjNAhM8ZVFFeCovq4rebRoWbkqQZy86JaiHJ6LPnFi73nssTw1UYhBbRW1VVgYmCR5KbLXWYc95xibZ2ak2bEiH",
  "key2": "27buytFCzSnu597UEHV7d39mev5pLH5B3LwhBdw2nFynuUe4tQPoYpZf4tsRTZ1GrtgatVgM4TfkPW1giauFWt6q",
  "key3": "2LqQ9hAYyyskNfLgWuxkkjm771DWRXWAaZiSKWjX6jZ5EcGBY7Tmx17udUDvr4E7peqRsoLqwfD1AgRKMbHBaX55",
  "key4": "3wvJGjqsuBwa6Jqz7KbSYCbZxxjFmKNvJjKkw89ZgnjayyzkCu7wXtR37twna6WYWEKv9oz2zV9eGDi23cR8aqyL",
  "key5": "3HwcyKFciinLSf9HBDkR2jq1sd7dTEKY2psTYA171XFvB7o34UKoNLe34iMUWWat2NVW4UavDRkziwqDQ5iALNfJ",
  "key6": "3et9aZZigdVfv4eWbXXjQ7EfAHAWfHLu1bgoYFytF7Rc4Rm4MGBub4rn6PidGkyi4UfFEUAT5PwNLf5gdZkQjstA",
  "key7": "qoao2TxwtNKW34nZ4DefEdTgd6u9NWMEAFGzZhV2KCefdcnE2XqDvGqeuxCdJwuz3frYcbUKXTGcCJR25RF4FXo",
  "key8": "3nykvjiT4WUVf4HqnJU4STSyqGgwr2PApZZ7NgUhaHVMSgAjHd2hVKxLtBare9ubAc2ThBGftpvFh4WWZYJtvqxW",
  "key9": "3iLsXD5B5pd6Rc2rWSYChSGdyWDoaaNi9mgMRBLEB9dior5341W86gLPzbPbnwz4MzkEL31yicpZZfJGG8oSSoKS",
  "key10": "4KArMsRUVnPDTQnC1FRFj1ox6eW8FmKvj2aNtAFhbHeS7CpqiNSyBex4SLa1BMGsyaWFR2qVD6KbZtJ3RZuYR9bD",
  "key11": "3PC8MCEM6cS2jFpTFWqjLqEVAVoxTAge8ExXDAcL7Rp1S1N3pNixRLxWX7ri4JkCt3sgakd9NPD3LervQzQLA7d9",
  "key12": "RuBznYehZKfM8A145yAGHFcTwmRQWfEgEvQ6Agegj2XxTtzzrdwRAvhhrcbf7vogD68kBHN5vZapcLagRbpiyhn",
  "key13": "2XMYZFDGNhUYt5mzPTeb4UPvjbqza5KUNN8yVz1W2GA9yugiedjupwtu3QCY9xRBQvdhNzEBW92VUvtPkJrd6WJb",
  "key14": "5jdtpvV7rQzkXsgNudFqCQiyEwoaTyPMAdCwiYbTTEM4Zm8xbs8DWQF5bpPqn1VFt5GQudK8etFDGKQuZH5Fip34",
  "key15": "3UEUx2nBY5eMNH4LVRpgeGz7em3uPnHr72u73jyeuqRKgreqkDNpmbbCM1g9jQtq76Z6Y1muhyU9Ccgq6P3KVypU",
  "key16": "4J8ZUxUrQmV1AC5z7oAntRDsnTiPQPrh61xvRjwHUDvtes5hicJ8QqZb5ypDKyLkvWoc6HxrfrnmfVa8T35HBTrg",
  "key17": "3HUU5A81SGAyZFtJXLMsa2Rhfba2wDVSvnMgEiSgRStGuHn8tmatzPXd42H8oK2ogeYX21WvZnjjWcG4udbpro93",
  "key18": "2KH4zAgXzH5U4XgBBzKsQoFLbkpQuc7Q7bGVnAb31CNbsySLgqTBsDqoAJ9aHr5gL7Nv6oc4kfUaUaQZ9UZsrAaT",
  "key19": "2f2EegRBcU4THmkuoeiTsNnS3N4tmtN47ChxG8k1wW6RMAXX2Q8mQBwchYSCWvVN5JiuERbT46WpDxNHtV5jc4RR",
  "key20": "4ykTL8o9xagiZRSpqnrMYozZ9jnBhx8NBmRVDfqJiGkiwVpANzDf2a2zen5WsZpSAUGcjsycnqmaCfp91vyR9vmK",
  "key21": "53TrEfLu4pJS1Fnquxkz7byVvNLXocmjCBHSCtEK2nEYs25zkw5fbvv5WJZ8JC7ZKqFHimgbKQ4VuK2V8fZ6QZdU",
  "key22": "5sdB6Cp6MbBJ8j2EEvjDzd59WQs2W6ydK4aeYMMczTx5tz77JEhCkv6XwozhzE45qKGzPiDNG5J65NPBgX5Kc98x",
  "key23": "5sEAzWrMXneiqa3TEyy7Wek4xomN8q2Rdw8enxovWHeWC6VeQ64nDxdxf9HCiHVMmx6jJ83orWaNHGazoGEdATPB",
  "key24": "3pesBySyW2pxxBnuqKpLk791EsqDTGhHi4ajESVNeVLcVhpB5KJEN5uEGYLvqq4sjS9biXEn5y4iwPAjDqQY5uEo",
  "key25": "3jhTsHgs4EJLvM8x4NhZ4QY5dKxmN7EtmGahVTDzhPVvZZ6m9rVg23yoR4PVzz5kPaFk9wyeco5CJbkKLS8h6wYm",
  "key26": "3MoFVSvq5mQhgKhu7JHPi7XvsBXUcyyGfZN31owPgHZ5SSyTSVCX8RcYSpJovtbkDXoaUnG8SNqTkzxS8R7V9oV2",
  "key27": "KaT77Hq5LeVBjr82zgGkbefguR7mNANA6HFiG1yp2CCiUHiuUfcae276j1t8Te77aGikgi1tV1d6kwiRenHgCKL",
  "key28": "3AFJYy4Az46ozNBfvBj2SfyrrmsYBdzo1tWP9SbZssx7cL5W5NUFceCWYm9HrE8Y3uXSThmb5qAxuq58yUXzfsof",
  "key29": "4SiBug4G7dfNp22FAsb9qmnuFYWYN2GpChtnNscyEaCCaxk5qakCKyQoQQkbs77YRJW7aHNQbicHq93pH9UjvD97",
  "key30": "5UM1musa8ponNFrH72RHUwTgbGHkzK4aMj15FqUkkx5QDMPgxrhwywaK6PiW6ySf3uvkZBN87sSB79xARynoBFgV",
  "key31": "48X4RhtKvFYtyCz8HCkhNKGqqpQV77osjfLktiFRHmvJn3CuF3P2NpY9AP3NkzrVcjAtX4YQrZCH5cDY3E5G4rZj",
  "key32": "4MqFUvkrt4aw7hTncUiP7KT7FUD6oWZjEeQfTzvptbnfjV6tmDcygtHHe5P8znHAcadbDVeRrcNPcMz3Sq7XhhsK",
  "key33": "24rDqbx3PiZsz4t4833SvD1pSQoDFjqgp1nBb6y4Xer5xyKuEseESnwbcBUR3shFYGHKqMmqbvUrkCaFndp5xkUt",
  "key34": "36wDjMUeKqbH9PvkHjK7JcnYTnG32UpvWAVdpFntmK8mNQq9kL4dgJHaky516GzPmRWLNaiFwRnAe6yESCWQGCF3",
  "key35": "5iX5GXHkXqrykMaucciBJsBKZxXfCauHc4ksbpk97sSgneCFGtrN99C6gDQycCQgr5pPBStQTvwzuPmMDSeRUnNs",
  "key36": "zhNbiA7AsVcbgHcDzPdZ7DSncoeKHNf5zokxXThcB1PuvS2QQ4mpZnYi2himTd7Vj2X9z2eviYNMsmsfxuihGo5"
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
