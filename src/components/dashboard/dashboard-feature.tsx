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
    "2yXGSqv6AdP7hC8z44MrBTntjkbyEFx6SsdjtezrZrB1gRxUKBx8a7zjGDobj3aX1V2768mTKGnTGnWosv7Hr4xx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UhqSmrEg83uqf4Gbu6CN7r7ePZGHw9TmSQuMKLm9fx6ktXX8aueBDTvJeFXBp2fqqH6TgCE7YQE3QjGbQ9YXSj5",
  "key1": "jxzrJVBtJdWqPBZ8U1cuto8zhPwRqesHxTrHVfARVsfAetHAPnUMreBDE37Luc78PhDeP6ktqtaVYZKUDLDmD1R",
  "key2": "3S8LZ6aWEzZ2ZCAh57UtwznRn9wQUTRTVtdAvMkpzaNRTbJ4NpPVRXxjNWnCS2yJomaXfrEuk61mS3F1cSzq8ERH",
  "key3": "3cprGJbZqQxYfUhBhoT4MPERUUEBhcCHvfLPcokPQgxYECbDpbyywFHHYZaB1e2XLPrJeX5nyuvYXZeGJYvuZusQ",
  "key4": "3Lw1wi8rhZsMDj3wBKVDRH2wVZ8DDxrrQ8ioGsa3qbeRonSZKc1q6aFJxXEHFCHnfv3ksG4495XH1QLizvpmidNe",
  "key5": "4G25dyhBLD7Kho4xYKqxhKTXJ3cXjcaL8e8KZNNbBJ6uuVJvmntQhr8v7ogUCv7VcEjkNVBbe9pNGi8rjVfqSPJp",
  "key6": "6hBPPUPDSHJwTdqo8GQeWi8rGQTkm6CmSrvhbX2hRk7hihWcpxfQHejfnUENrfB88YU2a2YicVuE2q1xDyZa2vP",
  "key7": "3HTR8BBhD9dYyfau11XvAjUZL8u3884kviawh6otqw2qkrQk7FHLQWRUBs15bTXJtrVRPDhoR5xEyhDCkaSyTjtc",
  "key8": "2SrYYGL1yi27wtLLWGvuW527vvgtnK3VUAJ814USeRYjEPbozEDrdjcKEfTVqw7uTTpAey1Nk71v3athccSE4Nu3",
  "key9": "3T9PcxLc1rCCdCUWB6KUmfopgWjirQcktNxpJnuVs93aRG7tZWgy6N1ZTiUpm51Lps1M1cAbvqbpKpcXfHP2ZxfH",
  "key10": "4SQjVxmUujaW3KWR29acUxkSxMa653FHwqPyPtnJpCXFskyL8J1oHa2LdEX3hKzRJG8Byt1TyApA3TEpbJPfPAGf",
  "key11": "3gptDGsFkhg4QkYeE7RrNt5ZyQC3AqvDn7mBmvyDLSSmcXxKXppfNSdTiyAYk8UXwHGPi7PEwwHQPVVHijTWh3hb",
  "key12": "vZJVN1nELNHZ26TdKmTwXWZxQHbs5oGScY6bESeh8LJuv128TFSo9irD9cFs5t9sYG4sQ8n6wHZXB6Rfmj1D5io",
  "key13": "xAjoTfWPvGxYFdm6C2sD8GHxDHHUPEM9APYDWrqnPE6WgUq7bdnjb7rPJAQhRjgnvrK9V7ctFkCQTBBhEUWdibg",
  "key14": "XRpDnHjnPPRqUDjhjVmiDeuPkeiZgViwYg25ZRfi596dfW3gov6J68rZvuAnGvLET9ZCTViMS7qSJjRrbWJWDPG",
  "key15": "5LNiz5sn2PDYTHWSzmhoyvkd2G4GespZnM1998ZSABVmhbfwn3uq9pwXna7pGQKEGMVZ73LYPY86uNfyKkLkRUdQ",
  "key16": "59KJQpcbU2CDMJYnn5ufrENwW5zhoT7pejjd5JAevpqSWj4hvFP35SZ4aZd537ibwL6qe1Kbf4an4cKYbkbaFw7U",
  "key17": "3rAQvMpb7nuvpYBoCdsdaT77WirQKw7tJ443GTsDrj743PY1Aj1XEWV7Uamr2wCJZqMnyBhrga57qZUU3vJUqKMk",
  "key18": "5n3RMWM1yS2prmAawa3dbbZpAWfao4bhvAUfC96fJ3W57KekUPDxAuhKTGF1qdowm8BCPZvHZkcADg1Wu4JMffaq",
  "key19": "4v8L33itv4PmqeQoJjzKFP2RaQbogCK1Cxf5DrGWVR8wJoJB7wLnYJQGbrcoki6GzVw5YyFuWUfHwpYg4Fyq2M2r",
  "key20": "ckxMoCLGWhaAngDE4P9LdEjiEfGeavP6nr4V4ijVMbiYeL8xpN66AGjKH3Zoag8AEPb4oNSnURTnNd76xX5wLdk",
  "key21": "3ywE3JDR6fXk3VgGJovLomytPKfjx4THg4cPExjyjy2ZKFHGKbx9bzFYohnzMZqCEdNrUcNRFGV98ewAVi8hf4Fz",
  "key22": "4SpxALxjo3UxfqoqqdXxkjjnQx7VkQizo2KF7w21T7QppxzNyt5auJr1ukmCMQomCqFBmxHu9GcrboGFCAyTc9Hv",
  "key23": "nVZ27zQ9oWNVa8yakwxVuXWGFqGaEgYvDtnvHCnNU3193AKQeLZ3m8Z8sJA2ot3qL6Egv3pVDmdRc6RzktH3ZUw",
  "key24": "426dfJhTi2nwzQEtUU4AgEog8j2dhAjD4Tk8x24p8Jzr1o4gJ6273TqXJP3veo8AGCNGzREAqpWF5nhmCpL9m9ZC",
  "key25": "o5wgYtCTBjDMFHHYgAXK69TvhgMLqzPFPgRKVX8rsRUSEUEDwdxniLAk6tjvWMW1yvn5pRNwKyHKe7d8T1c7scL",
  "key26": "5n9nNinnDZtALcg5fxJsh8bg8vuQPhf3oojFoedabqdK9YVNjSwt3F1L665jtoVsUd7rgKRCwnYsM6oHzgvAZHxC",
  "key27": "5NEgyh8M2UHCk9T82pV46M4G3Udw9hLms1zBRDnuMaGixUWs48CxRj7qyp8L4WNxFwk6Hn5GHP3Pq9SmPD93jeee",
  "key28": "D8N5Y2wcApNnn9XHT5yBtVJLnMqpzmfbx6bZUgvgNYn27V8weUnyPoA4Vr2pBSUoxo2PjVLXxpgjftzrVkSona2",
  "key29": "5qFsYGeMJRFQ9n6UsBqFNCnHfH6spVMM2cpiULkDedPrTkiPvNxV2qyCwi9VcoPu63FqMkQoyrMzpwCChzpfqn81",
  "key30": "2cFHTMzf9HMyabtmAkSLj55kvc768pRXgtmbrMzRdmPJ22UUV4XtoCsxGjw45HfwcvWuaz1xmey5HCc8hyoPGXMf",
  "key31": "4uWLXbcJMGtwqTbL5cVZBy4voMUvZwLnsDiRNFpbphHGBDi8UCGP7JMCmCB9Ggw1tDuj5cTya5ZxEsp6TfesSVV4",
  "key32": "3vdirULfbMVcEquYSivoX9jConu7qBiJHnWFCWbf4REw7EnadS9vLuiTZso2rQB6gHrREZT6UN3uWgGJ8gCfzi47",
  "key33": "5KRgM3xhLSPz9tamq33CZVHdesLawm986fFrTehcTQu5Fo33wGNJXnzgPRr6we4Se8PzR4MH4rZrRP5yx83i2jjB",
  "key34": "3rgFCVPZ7QA4fU2FauWwkDoD7WhKBGMhHUGYY2aDztxXKv7mcZHCzMTxkmzRuAsAioQLof8ZdbzMxnM4erd4SbU8",
  "key35": "4bnpongsF46p1cVFF7F1VHtt1e8P9867vPLfY3zrTeqKX8yJXJ6hGZYZuCySg1tpMynEgb2RiwJbmQ8HJ9bfBWYC",
  "key36": "4kDy8WKGgtb8mZJs5E9voAVrqxh977csirjyUZJtYxAMcLjjkWQu1rBwtHcZPtyNWxHwnbB197a7xt2kZJkWJhvs",
  "key37": "33wgNJPDPL2ny5wH17HgBFqwEQxP518jq1fAzkG9NqpajKZaGgdevwDWu84MjFPtZWJt5priNb3gCoKVejQLXBcz",
  "key38": "5m9cWTgSCaXSWnbszMHegT9mcRJmtGGZ5SUgWKrrCfzjAsaeh6tWkXDzN8guKEfUDZEfr7bxiEXBiECyY5wpGZEQ",
  "key39": "4uFAjESTDZ1w7udvyg1wQthxppfoPLdiELwpyyKt8mUvSdsJi4JTyM1K2SSHuywYrbMJ5M6BDnQEyrDLUWjjqvTT",
  "key40": "5W8xBxw91qbWzJ87ekSrQd4jDhLq4y1v22Rac248zvdNcrTDzdGYdapXpBNY6KWJPVzgChLyVvSEGV4G3RFMuVd5",
  "key41": "2jnpMJzRdmh1pZ3QjM3xXzdiwpTGDXewjNqhQkV7sawiqXxjtZKH43iVoRa2GmnVVVf6xEv3QSSqM1ih7nvoSJyd"
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
