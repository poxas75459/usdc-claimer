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
    "5pA6g57uEDngkWzzH3Erz5PfUbvKRYmm5mHPcX9YBKwN6uqZ5zeb8vu5BcKqocdqBRi6XRvZAERGMeDha26UjDTs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Vy4X2H6caLs71wwWyXpQnpsgLrcPoE7oVYWWoudaLXJFHp664U2A1bKkK9Ked8FNnr6XZz2Xzy62u8LQhGN6P4k",
  "key1": "3WYKLYGRe6YFaaZcqVBpPxexnNuuRqHpxAWNrAGstpMp6Jmwx47QDQc7pK67ejrEeXKtDpk3okweKJjzEmpPUCfi",
  "key2": "DRr3GJ1HyVjYigvwjhzhH2saFWAkYB1gHiCGQK5erf2KFhvma7ZbrNP6M6bMwJFYbjvFD23iCXNLp2ZYucavUiu",
  "key3": "5ngr7prjSQ4yNE7McgjipCkJkAxBjZ7RqcwoUJaKY6psT1X5t2BRqjxmHEjXpjfStvqB6kVwfNfwcvjrB4DHhVex",
  "key4": "5rNSY8qo2mtmd5qsFNkG21seuNkK5qBz4CSyJRP7x8Vcgiipwk4mwWZwmfSp43p1JoeDGPrVw4RuWq2Yy8CGEJUR",
  "key5": "5x4DZ3snUWfo9vRK5HHA7vyPEUFgJzh8FKnHoTXHozPDqgPMovuXmoAUgo4NagKo8XuWJNM8PkU8Ho1Az9S7k2FP",
  "key6": "5W1ccKA9jYYkLJvYCYaYSVPPbxG9DCwkf21BFzSBFV4z1WKH79CXyL9syVNUoK51upkeYmM7V9CotYev3bEGuvS1",
  "key7": "2m8XPJrCe6gpqnEHeg3XTLCULeiGNdRfMCwedaxQuqH8PyhnGTRKZJQdndur2Juz9oDjpZ5JmezUfr7BNG4gC2Qw",
  "key8": "5NAu2rREHMMgGM1ckpTQZpY3RCwUfpqExKUne5TGi2jW9TLQowXyYgh8Pw25RW6S4hAjK4BJZJ8kds1d4gx4JBp4",
  "key9": "W42P1cNUoXs5eJQJbxYRQJYakFmDxJKwt5p73mmMtdU7skBTNjHSRb4Fr8r6rtbKZnG6AsRKxkxHYY2VkpDwAS4",
  "key10": "EGuZmQVohQHzDAY9m6t6pr2sASZ8R5zRs6iqoJnCCxiEgo5oAfSABh4zRuLhvkx8oRx9nWBqMLrppG8KyjHftY5",
  "key11": "2MM5Q9LhUkjPHD18jHSYpVHboVXRX5qY8NasqWjNfw7KnZ3zS2Fih67qEdbYrsJ3YixMPzMaLLQJnVcxKiLymc6q",
  "key12": "2JS6TPPVohn9LsxNTHABCkNKA8ugDuLf1TjCMXseqAXgXZ6cfLdnYLBWA7oofE5M9YqVexb7Z6rp3B6vAVDTwPnJ",
  "key13": "3hDzZfBBWBx8XqWB3yro3LHWp1JAdqqhDbf8KiPQDLGR9cpdBnA1d2ZkwiV5TsJBrocPYFJj2SggoAEtmg4V8vKc",
  "key14": "5xoQwu96obmCGrz5syoU3ja146fZ3GXG8rE4GhSbRbidkpKVxPAwCkVpFMjNMnfsnCUe1BficK3Zo6PesQCXpgPc",
  "key15": "5qGiAQiWTwhxa5LGyKSoT3bR6Tk8HL9MBGC3bzUeF3n58ZjAmtitgLYwu6dLQqjnzmGBn9o5Y9qmQriae4TKbhBC",
  "key16": "2bYUHaWqdQYKboB7CkbTEUaswYnmRHbpKYzpcd6V1jFcULKJEur9XtmFrfjKufP2KJVddMaBWrT58SGrfFNRYKww",
  "key17": "3zMcBAnaGigR3hrJaWUXNj7ueLWk7Y5CENqcPDzgg62XEnQxmmYF2CzYB2EpgQtKmMJ8z3pARP8wqVNrTSF12DNF",
  "key18": "48yqwxNDPTXcC8ezwXzxPihHFuszFcgAkvK9EaP3BL76C6bsP7m8UvDyyWaXqGZAxM9ph4U4SGxM52iUdB9wtW6w",
  "key19": "2v6W52eWxvYgTfKsdd85mzHvKTRDJU453guGrHWQFRy2RmdFXXDz6KWBnyrbwpQo2jGPAq2JgqpHXAr7HFpPg2DB",
  "key20": "2iKiwiqiJyitRdTM2tiqqohxwrAV4WvKAQCwbjcpsJR5MyWcdByFaJsSTS1sifLW3EtB1hdtmNeowiAqbZojyRMe",
  "key21": "NMSfvMquupBbBMUGiAeRNGq9KrExwu1BNidFUnCuhhvPSvQBiSzZy9nArEi5T4DWpccHGXaXP3oSG6G2B5Td5Nn",
  "key22": "2CSgAGJcjZWRGtstrT39JaUrJPcN2EuADvtHAX5i9cv4EdLLJ5rHj8FAZaeWieTRMriaWtYGS4aqgJddRHb6ogDJ",
  "key23": "3hDzomdx7Dbvi1a3qknsWX6QN8RbRivEA8FGDdNwmGyRnntKN4SGG6vgeiYYUSQKCdB3GvgzNtCS31bRjLvWxEXY",
  "key24": "566aAk4oazP71aF2xNJUWSXXVzAEBixAsnJNhZGTtHXzhCtjgU7m8BU7kTeqWw4omSWMsgC85wJQQkp8LiT6ShRJ",
  "key25": "fDym8nLhcoKuWWsiYEwxREGitJZiwgEdMNKkATkLAdiBcfu7B6j3BF1YFY6avVooNTyY9c7mt8yW6aJPNSqHbo4",
  "key26": "QgfhqJAocWKUSWuFNJPZspdxkQkmFaotRqYoFxQWJ5vqEBVdprypnxo6CNmHHty1AEMYUyCTWhbsDw4RVrmRsDQ",
  "key27": "3bcuMCS7hRYa3yrXkV9nTP9CBoKPBraxYEZcUfy5F1hfEZxjCk2cXn4TXizVNrnVg3bvduStNxRMiDxyRjiLJZRa",
  "key28": "5uG9UGRK2og6wsf1rXySz3SiG98Cnp7ynaTFe7Wv5WR9RbriJSZpH2RskoSMrqbUHKDjZ2WqpKc8HvfTNGRiQanK",
  "key29": "4Wz7qfrd6vJt1mQAfeaLXuEGvMVjVAu12GrRa55yeBcB2uL42e8uc7VCoF4DoyUU4iuJz8oatddc2gAiM8wQcD8v",
  "key30": "37KzCUqTcHSVeKGY6Dk6THJAELkdkr1EGn4BM1oMBwCwnZofnRe8RvH3XEdUQdHdngHtbR2ywY38tZXwRBD3gHGQ",
  "key31": "63hhqk5buSNfpgmrRoY7u2oYTw7CNXv9k2YtpNpRLKqWQmHK7LpULYxT1oZwnqR6xG2pTLrkohDvGC5SARtFMpo",
  "key32": "2AryamjiWrAAnKhHntPWvKeqv8RcKYNFZmHrPp31Fwky6UPf5e6kusa6XwXSUerqNBVedhvVyXhVvVfTwWkPXpnb",
  "key33": "62W8jtmDH6yuLL68WWRYb3eMuyRscvHCiR3rfCbZUc2z5uST6h1iB5bb1YskZoi1RJjLxLPponbVzKuMj7AbBK23",
  "key34": "2vV5fEiWyhXa3zryzSYp1bm8KnReccCKX1ZEX4RnAaqxAcByYBrfQZwQNr9HuJgcstz29WYjYrkLUySRjs7vyU1R",
  "key35": "TBZyFoFfGbQ68jcKaPq3BjYV3j2fYXNans9XGpRChjbsoErijuRmisRLLheRRHQNBG9ZLY6twseEyEDRegSLKo4",
  "key36": "3c7Hfrn82Dn8FFfUXNi42935UwDaFe74zMoS83JSqQkcisdMiXhBAGdgtDUSfyDYKdma2DSeuugbcowtkBhuioJV",
  "key37": "3oWScSYtWCEnzXmzs2uZXuKBjchcEAs5NwXWq86jQQtkpxc9zopA695bvRm43EPmRPeagHnXk2qCPpJB9FeSUJgY",
  "key38": "4QqrLetYjdsbUCwCJGP73PgkuKaeV7rTFpkrcWSHTPJMQNgSdF2XyENwe4uWoaQkvDege6q3Vj6byXWDqb1c89FM",
  "key39": "hcTbU6GUVQd6oHzvaKgYicGknb21SSyFEyrZ2bCh2V1XndCJNSDnNzw1atjrg7WfapF8qNonkGQGD4GmfjgUbPh",
  "key40": "5baFNqrYaTiUCpmgeJWjcayXUDS9AtWRiuBn4m7Xgjfbu7SP9QTd3bjvTqTNHa7TZqsKc6MtfVDFYooHBPbUZSCB",
  "key41": "5GAwXQ2YhLKNbhNNute9JRzoQcS9EXjj6GugQFU4brEbaK3F39XtAh2dVweMSSNYwXZr8Z24KKHhVuaFC2FYT7Ht",
  "key42": "54UfMN9WRHafDJUMWYvMDVH5oJDaBKCpxszmbT98TQ7vsiyRjU8hunhScG6V9R12g3BZMXjscQhkZgkW1sTCSRhX"
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
