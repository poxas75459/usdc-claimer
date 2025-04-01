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
    "PKdCthWJynF3BNNynxVEYEtbyxs5UBNcfJQHUc4rKqNC6y6e5iPgarS68zKnKnSAumSNfJh1dnPniEag4sP2YVL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BdLQdfZ3BGu6YAMvwB7EtveaNqa2YmTAJFgnFQFQ22xJNRCYrnc7prWUutwp9Dvaz84xvG1CRzcYMKxgGB48o9u",
  "key1": "3GhgsSpxAvRFRw8tCvQf96xmkUW3hfwvAp78Fuki81kACPhR6ucLm6gn6X68ZQUwEhjHAhHBeEbvDskDAFvKx3A8",
  "key2": "5HKfx76CcrThqnVJyVR1LGPwibevo8ChZuGifybRnNMWGr96wqZYpGvCw3wVhD5veQWn4xTqYn23UYzvQPk1Ru7a",
  "key3": "2fCNc34R5trvZuypEe1eGw9ecJNgwZyuggCJGDw36WAR6CJSZabntBWhJZkxrxxSUAjAwL9BDoe8WfMrqPqnnhxz",
  "key4": "25HFGF9bJKL6dtQJtzV2jjjtECT32piV9WFQy6nMZiFwcgBqHaPj9Hxbd8suyB5V6xgzM4CWh7ptqgVxZ2auYZaK",
  "key5": "wGziK3BZEn2Nkh8cJi2C3ZV8vN6Rzc23efnegwYR8cRZQW6dwtja51i7fbVsa5YPc77Cf5sfbZUEQZi5iYwfE7C",
  "key6": "2QKnftcJbYFw9apcG4fffmbHit79hhirEHiDVk3QBswU2kDJs8RYP7FCHHSYW7nsHCV95eSQarSiToc18xdumZZG",
  "key7": "4fHS3dCRu7bye3nHCBYJazjQBH1aC7vHpFZ4tayzSP2FfDbAoZ9EDNa4UikbA13FCyffTe8m8s1SgtLRzhREGPmJ",
  "key8": "2ptiZh5bF4T7j3gh7XNoiozUTj1n3pQ56qVY9d4BQozLsumt5grAEeRbnwncx92J8xW64tDtx4FNQ8H22NdPN4zn",
  "key9": "3iTQVU7oTeS7QWVc5TZj2ruVcVCQ7geDnE1NQvv8NmayoqmtQ4GHXPmwRioZaw6Kyj73d5vZtikPf3MFioUovjkh",
  "key10": "d2Y6zBd8iUnzvLdS58GyairL9dYpw4wKhsJZrfuEr8uhXbPBoZH9CMjfu2fVjR3o6ugiQGtA1g237DFScE71KM6",
  "key11": "3v13FST89FfftXuawEXPDMWjgyGbPVUo3f1xYLiyr4ryWSKduaM5rnCx5gmZfA8zsdAQeJGir98x5KTZ8tzyZThc",
  "key12": "5EjUNkBNagTtyiesoZiJZHWZfU8tRmsr6q7ZJhJgJZxPAptdD1ossE2Ze45JEnVjPTVB6eZ3YMjCMwUpFzgrxJU4",
  "key13": "3TcjZksxwFvYGEJG9GqH5aoEpAoYUSCLyeBBzqbkCpKv1RAq7MB3ZvE99or7EPri22YthCupji19oKW1vZPTY1LA",
  "key14": "3KmcLAbK8D369Gxhw5HPaM4rg8k5DQbS59cSikSXj1Uz9U2HPSh5ZaT9r6fCSB4j7HmhLSUajFdZd7uL4imFDUHj",
  "key15": "2jpt5kFqCohWjHBsdPYEaRr41CWECmtPzQf3C6imBrgTz9FRyg7cnsPg9stgaV3q3uguatjj2329VhT7xTZuu3Ya",
  "key16": "4QtMp18s5w9eMiXvVjf14bhS3ireC49gMqLiZoh1VQAahEJhyvkce1hxiXB2GxUSPnjWwo19Lg2bBUy2gN7LtBPZ",
  "key17": "r3NywGK2SimzNvzLrC3vWgkrany8yo7ycozeEJV8p24XQ95So4eEGLJUpWeHMkku5jaWAoAdT3D89KhYL2LobvC",
  "key18": "4PLMKGpPcP1BD12jTYjdAGPowDTG7RqmaWuQFA3uXpE9ibtyCw4PJMXnyYWrTBgvdg3NoNtF3cPnbZEJmkKJTZd6",
  "key19": "2szee1pQxyxWGwGqBSU321jnq7SSZ6NfKSJXNwreEhyZW936VFhKUn72f2ZVicjpAKCMkEytmnHTW5v5C4HNyeSD",
  "key20": "5uQ4zH32XgZAowd1FGDP4nHcQEgHjHDLFQriS4FgBg4zeAHQaAP2yrxn4eNzRm35msL8WnaybJdMGeogMnXzoy78",
  "key21": "2tKZwDvy25sbXpRh799guKAkBT7aF3KgrsgawsExPcuyCSdBxxHghaxSty4Pk6rVSTXD1UeLPKLBNHxQNMBBiPdf",
  "key22": "4pJFdTJ2VKFJxCTXfJp4uu4EM6XZE7t4pLeR3XzasXy9NcgpWj51gxv7DTqV21wrUX5APSX9DenLawQNrJkTVPqU",
  "key23": "5nrzWKPbiJfjk2GeJpqyZQJfDWJsnZZLRriQNaWF1FWbQxU9dLrRYK5reAbxhUZxPWdL5HtLMnaEQYk6jrTygWtf",
  "key24": "3NPXTuWBrasMkrtpUJUPY3rh9LyM1HEDB3FFkuFLhGU3zZ2pF2eXjgJD6NbrZA6n4pZmDXGcqGwhXgh3NkEcsTzn"
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
