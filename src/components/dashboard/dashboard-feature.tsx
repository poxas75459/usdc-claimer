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
    "64dCWEJV97FSmB8kdt7aZRzEeWBgaUuzwkp9sRjumWpDxRqTVGHYeBoqA4an1H5zxQxiXyq4CjaheB72XTREqgj3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tk5MkmZtXGH7eM2YWSDGNWE91inCe1vNYkMBc5o17DUZtFJaqxwxEM7smvka95NbzAM56czwn92isnSt4ZkPbGh",
  "key1": "U2xxNsm8NhqpiprUHAHUZfbYSeGfMMGNLzEScwfzgypozAXKjwRUAVea5aoHrYdnfjw46w6Nxr8LJ8x5aWrc5Xz",
  "key2": "5aNAoTSvN6PbUxXrLrMomZF78yspM8a2PnCm746qdGUHxgRHGt7rHENEDpcKVxCZsazsuCMmapGdh4qrV8Pt7e6d",
  "key3": "44d5uf8gjae1VQk19cU89mikh7iNkcdsgJjApqwwdV1u6hejFHvp1QFhHgoba65oUEWFKGbnZnnQ8uwbQeDnLh3G",
  "key4": "2SmTXaVJmGefPpMWMNvXDX7vEZ2KbpyF9UBosCKtJjzCNFQYMhnpRE8GWMtqtwWPfGnpv13vV7Z78WCRQSwevmf9",
  "key5": "2cFTMfo11dKfps4PcfGt36gyVdoKnQ2mnL1H5UFSwNA11wANWfUbCGv2Y8cqeaEGvwa5MzABkq86J3SbeTe5nkEj",
  "key6": "4nfuK5XUf1w5UMXWB2z5JzdqkZrYN7YYeLqMF2vXZf4qom3p35pmFA12EBz3rTjdS4jUHAW3m8g4uXvXBHxZjZDF",
  "key7": "3ePujtHmxWG71F1XBSAiYuCyM3pRdKno6autA2ZAVeBZiShb42UiAs53K83YFpp9Njjo3VvMqAEdBcy1r7zHYVae",
  "key8": "3HMX9BZ6FJJTpwuXFxfURrxsbvWxwCi4o8KdEeix7YmVJPHwdmxiU1WgmnKuHrkzjuFMTCZBrm2beVxqDrknmQLe",
  "key9": "v8qB2ez2VEg8SQDJ8EY62G7XePUaVWNSPNT7Xgrhpx8cWoW2y3Feu79W5ZtZnVxT8J4tq9oQKzERMovm5txTdYE",
  "key10": "4nxnhqH7ZsxJNTeBUM55cy7dpPTNJGXuCogmD45ZNFLywJwSk7ggY5Uc2pgohwCxGpCjnNYDaVAE9AJEfig3a9mm",
  "key11": "4xAMbGUvXvaK2gKGtusR28SQ8sRAU86yCDcvPvsYCXGq5GkwQSmzshJnNcBcAoi8L2WEHy4jwkTBzmpnXFKmvpLa",
  "key12": "4vgaGgQn5Ytn1iwbxMmTYTqbVwPJ6nhqrrG3zTqpwdVNQGtcg9YmnY7rkZSMbcYbmg4aW46mfxgxgmneC8JtMgug",
  "key13": "4TEJfThattSqD1zkRvbKJXqHN7oG9GerMWQk3fP5AYk8KaCWCWCocSqYdoA38LoaDuz3VJ2dZ5AQBHr5jXLeSL6N",
  "key14": "5wQeukw15vPUqkpKxZUr1Jh9Q71ywMhHyq7UHfDqwDpoSyepgX1acqHgUPYQodQyf9oe9aukKMFYzfo5wJi1jgvC",
  "key15": "3X1zhUGi4mGMAxx51RWrjp3MWdY5bfy7wZKv5dnwUnirCAX5saVDf6SkvvNP9uh1noViTej2sxDnQktJdDdYBZLw",
  "key16": "2qnQm7D8ZJS8DkbWdHHYsrHCtpwycj1mrbjXsD4VHFHqdSm81TH6vz9NKHyaayYhUPZHhCxkb2yGTbGGpieBiVca",
  "key17": "4roT39MfNy4Y11qBNu26WZ7nxv4cCpucnmxA8aKwJAGeF3bq2c8BYVPSpLxES7TYUEgr3bjMZXJs7NaQ6Qgd1KDq",
  "key18": "3B2yoBvRaMVhZ58dbkKerLjHMoFYZ2WKpzsuyUPA6UJvQxALggxwnrNT1r7RAc29xXF1JY7DoMVmeqaVcqaeFf2i",
  "key19": "35AHgXEHU9itaoaac7ELox8hER1JxbxNgV5rabh8TvG5c5RgmG3oGKtWDMF63YgxoGV22ieGSki827gM9AXDwGrG",
  "key20": "5LCgKwTsSX3atq9RbVhAANAKscvDpL6AuHuqdrWBP7RmFWX2XYoh6boYaXCd8v9hDvVBGBwPnwPe8Q7FvTbapV63",
  "key21": "qFjjDPrVVGpQ7mVJHpKWqdE5rtNGubosCEKi81vFhjGH9qqDfcU45NEASVnQFPMSrmnV4BRACMpCYsEgEeurCFt",
  "key22": "3CxCUR7wRpszReyMgdtgpAZP2qa1gNaPBQFM5m6ZaTGihKyW5Dii7LfjC6KZ8VBSJRpDDcXE6dGGgycDt6GD1gmn",
  "key23": "29wB3K2rCJU3YKT4Uz2zFmkKAgAmStdQYD1rtJiyg3CzNgzRP8QAkgnqVsbWz18Ut1KfHHJiiBHAHheQEdKRPLFg",
  "key24": "4F3t3QoV4XNegiPdk9M6RnBcq2nnQJeWbvLbpTLmaNXEp9Jd3tsXkmvEiguPMuD4sK1bGtznNDydtuiuo5miG8bp",
  "key25": "45tiMsQ2CWEDR8ny5RRZkqXpTiDUYuZbCJyYGvcpMVhG9o4ZYgN4UHyAF38eFNrgj1CZAdtXEn5Wqm9VyWMhaPZN",
  "key26": "LfFoxiurfkEjj2T98xmPqrkNoyjpV1aavrrpqNrgzcpAiTsgaMLoR7uV6aU7STsVGLNJi7TmKCgoiEhSsjXYum7",
  "key27": "4ZQLtL4phMtfb9GY8o3wuTDTf5m1yBievXLUvr1jvK5t8RQhYPZPd6PBzrNB1aRXep8P3ieqU516kACFKxu2NzKY",
  "key28": "51dx61romX6gN6ZBbYnfHBq7TqpRcsGj91VenjAsy2CjUhNHkfcpnpXmMCnVswMMbwJwAggAnM9u8E2jzbttiaYZ",
  "key29": "5MtMwxfdsM8Sh1ESaV5MzndUBqBAaeAGYLecRaBjifiVKEASNrYsZezrvMPXxCBAB79h9v5bKkKjZp91BAefF7hW",
  "key30": "2rQ29AJkCy3k7RdUPAyjfLHktfe4hDsUqVxVp4MkZsn596YrR5CrWaRKWTG9srZzVsFuzBSSmVdmUhzJpmg3L9NQ",
  "key31": "jEkf8DTRZjr6xENDiWajTs5PoBrqoPeneom3Br466tu3G43ijC5Md6H1VA5awgBkSffPBqRKbKfjnM1ALvmG3Qq",
  "key32": "5UuzmhFNZRzscwx9KqbcozdGp9DecJT11ZpiikpTcajgtjXRmt95NBpna9WeX32dtVUFzKbQRx7BJ4jSMoBLK3DB",
  "key33": "5Pokz9ELFS6VoqEJUZxB9v9JJUZoLtyqXjt3Dd1kxEiR8Fdx888C52hTEU7Y5ZXcgnoZsbu58h1NtsSRBVm3e84U",
  "key34": "LNoFWAvufE2CHG1VGeh9TC2sm6RHcMVwiAsNziyJm3aN9SKCWTkP3jCZXu9GyBxwY5qKz1dPA2SW7ZiBAUC8aZt"
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
