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
    "5arp1urRcryYwB7Boz8iv2SC6ZuNnAKsntg3wrdkNJENQNuPpjs6sLJUUaCWgHC1QuFLGJS9fSW2fdh273GV4vFK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uuJ4sQLDveJdiJnHyJ5iBx3zuF1uap538BdExQN4P1HL1DY7r9CfQrP8h24wmrPrucTb8Kfp4NCU97Rb3hoFUeg",
  "key1": "5nLKQdtbFkZvkQGG5HRCGW8BYtL1zQroCDQmBTMJgSTisakVRddUxgJ5PmVd4GXstaWxF3KD8rQwRP5ehCdusiKz",
  "key2": "46FAiV5Pta2NeEqcgyGrVsgAkGcv9PzeBbSZRSqcKwQVWQU3BoBmxTKkn95D6ceE4nWMrr1TCqiRSuLpibX3YTE9",
  "key3": "ZtyAct5vFEUzsw1tgHJXemZKPRuCpbHwk8nELscrWD3reoM3mtK9QAP52PPuFgjW3scuQ8WtgHa7REbsrdArKxx",
  "key4": "3J5vfidYPnHR7BPn2ia6SgEzmAvbBGqxmw3UthrV7WTSkwYEo8efANVfn1x7MY6iogjURVhN6EWpEZGi4AVLNPHD",
  "key5": "5FbE83TePM36aQqw7erB5dmDrX5Mdd9cgJ1TU4rq61UaaPYQQJhAnP1dqPZVb2diFWSDXgZ2v7WSXeeaX8Eex8GE",
  "key6": "49aEmq6F22LYYfMQkyHKkuQZVAT9AgrcYM7jXFBGuk14w8UmnQzYyGUNYeCwNFQY5N4oCPeM4j2MdgLMLuqFS5WC",
  "key7": "xgps2T3TQDkU8ozSLFqAqi5Kv85sAA6WpHXb7eeC97rhqPr5h4Ea6iUFckX42hx5cwdcHZggs9be2jc6Mank143",
  "key8": "22RGJwyj1ZfX5X3p3NWqrCBQ7pJmmVTNJPHkqKNJJozkNkhH8HzA5CUY4uCWSpkrXpYpdg6U14ADPKB4nL4MHDio",
  "key9": "5WcEamQmXo4Q6ZPbyp23Skx9N4MyvT5ostVGtDZQKCYL64Ju4uVnjzfiV81GwM7vWxFEenBhHxx1jiegwaRyqRXY",
  "key10": "4fNXGRgP3xWL8wxxtikorsw6rWuPHbaGLWt2gWEe3JQZhXgsgn592fU7ekMAzJwvBBQZ9H7nUoUMZR9nM87uE9ZK",
  "key11": "2tuao37zbbvh1EbDvVV4diXB7BYcie7kFNx4mhJ3YmuQ7kao2Xb1kckoWhhjZoBoM5sengc8StW56799SJQBK8L6",
  "key12": "3SXwV5qHoBtkMZX2oKChAXr9g7wrG3rxKKopkUY1nq4Do3m6T1LKBsumCJKUJtis6pbftCiuoBjYSTLGk2Fh3kUJ",
  "key13": "5U4xzK9nyf6bpx24ai7kYU5bfzpXBKGGRMwWZc1uzSp5WCM75Y3bVmbf2hv2QVnokeYC1bxHXdAbaUzgYzb4K9g5",
  "key14": "5yA7oXEYNvRjyi7XQir7edQpmcXHvWkoxfLdzpKwiFbXAbPHik89aQagKYpewCBu9tRsDwNAUDG4ym5Ya2XSo8k2",
  "key15": "41SwGK543WEKUJ2psvCpzeragewTnbYUFo52ATu36KQRBQ23PF64hMURMWS7gojEGjHQPV5JaoGfAZk1ATB4Po19",
  "key16": "5JhkkPCNTvNjLG3UJ44erhnXbHbjr7SBiRWMFBFJf5LbzSpbTJuhqu8g92hTYRarPyJb3WLXeqkNNTEBNsWHyGwy",
  "key17": "27LmPoagxmpkYiWcAAJjurFo1ejL132WrpGa6buPqboy8SL6iTZVfZ9CdFeVdQtrp8VpKjL3Lt24FJ2a593wLZGu",
  "key18": "nkbcds2E9VR1o76eZFkDUzoNnCgSXiRHajzPRot4ake9L6ek44sWZ29w8AvdVjPvPnYdWUvHtQTj1KpFE9sjTsW",
  "key19": "58z8ZEcuepv4jsSruhBLrYHwPG566HEA1JXfsmJ4sxn3Bp5qrE6ELWcbMzRjBuGKFqU9gS7yWrD3NeVDmdBRfyZZ",
  "key20": "Eey5wA56eDqzwf3HtcnB2Lw4dvyyeKrB5FoUdpxbqMvgt7rguKRV6usGtYTwoz6bRDK1ZPby7azQkVR4CXgtEme",
  "key21": "34X7fShMxPXARc6EKebGGTJkBZTEXgsA7YNhVNWN94ui98hBYuX95XhfLgLN2nEFFRF7JkHbogiPpbkgqTJQExtP",
  "key22": "3cZVjwWakRQts2471NLBtTunRhQitXam2SbTcc5eteZ5JZ4K46dt7GTugR8XJEBRvNsNVARo2grfifhY1Z5bGtw",
  "key23": "xgLGE9ppVnQQPJ9X651MojtPWF5p6BjdRRhyyaJBEVLJURmBi4m9zH4sxyEcjaP5PnN9Kmh5A8DCu65x8xy7vHz",
  "key24": "4hmW6gEFBj7L4RDBRLoBhf9ncKZDHreuekYRJfcvBNrpNcq7K2Y7rUgNFwFobsxJwVVXYenmGjFRPwfZytUHeFLt",
  "key25": "4G6eBH89NYNn7LMkXQkDnreci6gunoQ9MaRNSdQ1w76wkkxKVzcwjf8yGsatvbzJy3hkFEfmMTNjnrUKsEDf38fT",
  "key26": "5mw45SfAzY5MZCu8C9fBcQFgiioGjdVp8snopQBu4EYHSdT1JfXzJKwYfEAV2gwHUVM3M1zTcWD316fa5hX53iif",
  "key27": "5AbmjMKRtKRcmko4Poqt5yz3q8cVyeqfvEe6ipS1jeLXVYWJEet4D1yZftJwHPGjo3SsyA6KZXY5aLFTH9Rav5W2",
  "key28": "4Y6cxKGSWPDCY4GVMkRZbjJuRCDco2HvdxKiYJtCGJvoBwfWtAThw2Wk2UZijS4CgpusMj7GH9oU6S3sHt2r7Fuh",
  "key29": "3ZEAeTt6AQbDKHpy3L59SSHDsSp8J2xfp7wf8esq9RrEdQ29GHfo2cp31kc5jkUrAHxrKY4ybmhqtTf2UdFhxPGS",
  "key30": "29V2KLzPjdRLEKzHXissqQi8vBztjAFvEwD4eS4cQbAdfNgKAJLo9YsQkyAQc2mVp3SP4Z66Pdk9N6pXy14Vf19L",
  "key31": "cJEJZTR4PgFwgT4WA5BWW6in9w3cwmDmWQBv2kvbMyZQD99zQTQ87K6Xvp3uMFUyU7TfBsW5heC86gQ6w44Ceay",
  "key32": "5sUoLn3XSmZMW4Xt9SYv3kL4RwdnCz7QZB91JJtQx5fdoCgdGgKaq2Mj1ciaNNm1Z2faEBhcPa8gfrtcg3hZoQ85",
  "key33": "21Ma74TkXNQJiqX9mvx7UXAG3FdcQAcTZuacje8rrP27Voj6Bua2rX2k8CfgwTXLHtQsuVZNTKiJjbQemZ2GCMco",
  "key34": "64oFVxU1KNmDnXRcZZUUiCAwPxzbREDnNqy9AcfNHvGZ9BNV6jPxLrCuoegZisSGhBBHRhA62Q6JSJppySLwkRz7",
  "key35": "37mknXYEztoRUokW6A56kHDpooTNUGBcvvAMxppUjY5SZowZ7dxaomwzk2DZa8STLkHGLny5nvjrtBhbgDXhvK8G"
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
