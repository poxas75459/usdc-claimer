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
    "4z5MEdyWPcWT1CnBiZCgKrUuapUCCJc2TEhUqbT6ggodyy9wagPFnnWhmYMPdn8k4jPEs4toQAFfgUenvZzNgyBF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LAnCG5g3zf2iPrP8hAmjWdkayZPysWqnhUHCoZ1naeaKrk89ksC1DvpP2C7Rhm48nRaZDxRAvXbuKCUSzt1Qzrc",
  "key1": "2cSadmFR7zGbheSRmCRBxudhjXqtwqqzpq5m7qCo5r5nZ76A7wm7fRvPcNp81DmsFzzkA3RrJc9pLvGKsGYhrHUh",
  "key2": "53v5bad4Sddpdjf7zvPtRRuFS5JmSqUkG88oTpxv2McSUEtwrW3unqYCERtC3p7mNMGcgWMQHSuBDAxh9FkC5bJo",
  "key3": "ydgUVZATfoztWctcRSqvU5bbesLqtLxw5YL9T17vSfvGHxNJ8quDPUE55rwTdzwvpZqKrzotAXfNx64C12LhVTo",
  "key4": "L9U3Fn7k6uvYQEk8dVDjNfY3mhxUSciYZz6qFXoChhLXsCV3qdscEPki9ZmkUeCtoUupDCxfu131yUyU2VyFe1T",
  "key5": "4NYB3gKZynX6uBU15aqAd6utAJ3qgRBzBdQgT4qHhEVei4Ye1kL78y5Wn7q9cPqERNjJJmaWh1Zxtv9uYk7BXX68",
  "key6": "36hw3btRsF6gBQMuWYrSXuTPbcGGLfoghLg1Y88GQQ4mifjSfqbkZGYCPgtmjABzoqto7BXs8Aec92nmtWXtEtEw",
  "key7": "3jAGLRQYPZ1AaH68A8NFpCQpPW1uwEqvYzeSjmAx3vbno8HutXuNXdskypwJZmgLuENguTHywU6xM9S5W9F3yD7s",
  "key8": "yNeRy6e1NKBzTdRieNF5hrRLMqf3rfJzvwAp6u9fgfoA6VZfoz3MyS8bpCujDMmYnJiGXFaWt7f9kcxGYWsyyF1",
  "key9": "59MHe4Se5Wrr9YwiLjmm6ebsouWV2ddgevKFW8Pn3jP4SRDUe1np4YVicH9CNJJio4uxYaKUJvJqLNEfybZDWzwC",
  "key10": "29Kqefd5kquV5zzMvgNNjciPGpNNwqsnkGpL5ttXU3HhCKtJePPhubrSzN1m599ip1aM4t4zDz1PGBVA5XE5N3fX",
  "key11": "2Jp5mjgbrWQ4kH1LiDQ5T1MWwSHsBizVaSvxZVmYE5iSp7fT7frJvLVtu5SiMCG8isJZ6ajoSwZM8KJHHM6UhjZz",
  "key12": "2PnggtdCmpmGurvssoFH4hU1GuDEsDEHcbGiBRgdNFRQgunEp9fLXy1bYDx34j76UgqDLYnr2ti2UHqv22yDN9Zq",
  "key13": "4gAmWFG82SvGs9voahm4m7HxzNGE8m9WyY2V3PhQM2CS7gE2Zw1L3t3imKt6PyszNAfXagHn98VS1GHV5C2NRM4o",
  "key14": "51NP71DAyWMGjc5scAAXEmxke8U6F5ZSckQesfAh42zuJsRJ36TzeJd3tBExNLRSYemYwDDtnw3La5RMxHo8BbQG",
  "key15": "3DSUca6SAVSwcnhHZimMy3HFKTFyGBXjtyDJ78xY1n4QyoDMEEdM2M1cAZfFP7qFe2edFY1K2xBYV2KYCgtzSJzb",
  "key16": "67CJC5i7kj15GXc8n4KAQ7ARnkcTq3bLSEeGTHBJmgVPHUqZed2brJDhwnBsCDo9QvHC3KvJ8jgQdsrRjHbuHFM9",
  "key17": "5DKwfdNiP5SYG82dpdnfPcEE9eCDEXERcXkV2r1PYWExmYYd2hVptEcpxduPJcytnfq2uHJGMEj4fEBv5DxXAtPK",
  "key18": "3aagC6RgiKb9GR754ZGGzjonEvJc8kbM3ZbJ9vHYaAi6LrjTdpycJYRgVJoxTKuY5sGQwn2kHgToDHwrVk6WrT9A",
  "key19": "59xDPzY9xWvt8bT9K6u1et6CP7CyeZyQj17kyMxYBaS7wB2Br9LkgkYt8fv85cTLZWUS6JAnAYfxE82D84R9BsT8",
  "key20": "5kTP21hFgbxRBzFwapCyGENRJdLibAYUUDzc2vshC2aZJ21KvZad54DMLEahSeExjZqoyUEALGC6Fp6kasJ5spzn",
  "key21": "52PCd6oNaWbYqo5usrqgvHpgMB4vVticB7oRXGKQrBaJTkBfGVnTTiXCGhf8KtKUZDNuEcnMDH3ySJNXfuViYDyP",
  "key22": "38whBhiECi8AnM9odb5HgcV51Fc7Fu5Bih8tuWjnsnvhKaiDM69J37Cre5rxMEnxwhdJmjM2WpBafPfDbJWL29XQ",
  "key23": "3788mAiaq1mh2AYnk8r8MU1gvTTZ12hBVAZa8a4129LKAUdzQZ4rYqkdDgKmAumKjNNUwZdYSyYTS5ubcg3jW9Tk",
  "key24": "3yCHHDcyx1JZG139XWpt2Zf4opYRKUo3WZdrHVkEG17Pqm9gAxJvNXEa3c7CmguWp83755QsAfqKyMueRLsC33tm",
  "key25": "4JW2s6UWj1PxfxnkBRzC4Q4ZchZt2cWDiLXVqcSqqxZRyhfYPb8p6u8eGYJBoFUB5ZYaLKfuvY1nLauymsvVqMNB",
  "key26": "55Kh4FspW8ytgf3CeqkqdRtM5EYBQfYkKei1Tzddc9i9qrKiWN4BNGxNxkYZuLPmspHupuUDp9tgH9JmnHfaLikM",
  "key27": "5LCRnVN7wKg5xfcNx2Ty9J6sQY5nXwMZyuE3h1Gn4aFAkSsgc4LbT83xXKXkNLfnyZSKTzCEUasbnLgSFbgJMnUE",
  "key28": "YNUz12gXdYusUoNzMFQVkZXazdQk73KEkcQifM4cJGQcMqqFqUXaqXHaRn9fewKBg3RixKmJ871WRV7dK1bLVXJ",
  "key29": "3qkUDNoBhSze13AZ3xWZdp9WqrJbBtmqFWKc1AqcxkgPfBCbFhjiz2PHSMe7pcrcV7274PZrLx1Fvts1TfiHok1Z",
  "key30": "64QJjrT5jAt8f3qPauERQjqiSQs5Bb4y7Mo7JhjUo9SGDivuTSSe4yde4NkKQiSYqoB12wmZPxrAXRPARCvmiZRR",
  "key31": "Lm7zBNJi3btNc1CSGFWKVKhyPYKf35Z1RaBFdwMxW7WQqxcX3DjFcFhBmLkVaEfu5egfPT5oVRoCYJugBgwMqo9",
  "key32": "3e6hHt4zxspyYW3jwqzLaW3h8JdEgXRizbdYQRsYFUDMVzjejNqJYWLVgugiEqNC7h8oa2YJUz7NxEz6RLigenQu"
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
