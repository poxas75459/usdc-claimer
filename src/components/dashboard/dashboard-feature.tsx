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
    "5C5WZQQEQx7rEBGHEm1HgTD73qJqQNtFahptrWeTCH5DCNZJM3RdRiiLpSLxMA31KovXWzCZCxVTvXriJFmnEji6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39SNF3xeq2TUDo2bS1Sf7RcddwDDjdMkR8DXEcAYcQJaQB4AAkaCuKMsFFjLN48ymfh3Rx6X89v8TtkhLMMdZisq",
  "key1": "4QVxRQ3EVqekzz1aBawXUJMxBRJFqsP5oPEGbf1Y1eDk7sb14WapvS7MLGMbeJMry8ekM9NsQmxmt4joZzhCFAYx",
  "key2": "4NETM2ponu2Ev7uyTx5u9xRQNmJkw39Ch2N4KNMcXJNW7wPLNH14kj7u27oGgRNwVyr9vmfjctJepZKA5eA6uSXt",
  "key3": "bneawWo2yvmPhPSR5tcdSA4LDoaZGLh7VBw4LH3C1kCCteZjfYGNnrPukmq5nYMs5HrQuti7JMFV43jfPdWteCL",
  "key4": "3AZ8MUgZJeCVrdnmYJDwCEAozmRowiEdnGrABYcKcQbeuBULg6KXxUy8RHzpEpSy7hWJaDjWx8J8EpDYbr4HmZmd",
  "key5": "59tNhsi8YfweHypVer5eHt2kbcuf7d4cNakbWKwEnJb8huzxE1JtMG1Qi5fX6JuWWgM86dooNLeaoggbYb1uifTz",
  "key6": "32Det8zm5EyHn8YZisaHyin1wVBgN9n2SSYtRJYbFsxGPj3rtj7i6spFAdaisxUro4SbCMpUWr1veb9NZxeryqcm",
  "key7": "2MhWZBLQEbo6jhaVEpxQL7CsTmmk4b8WYQRptp2x8uHceb9hUEB5VNsoaGMLytCxKSuYctkG6p6R6DUfAPM6Q77u",
  "key8": "3BqwcJ7tBn4BoS4BH3cCNN4NToa8SH1BdirVpU9AhTbEmZVfRdaTE8rX6xaWccVG9h1et5rNXxswpJtJAcuiaDTA",
  "key9": "2CV3HZBKso7UqtSRESksBMGL1XmLKVXo61suYMYkfqj4QEEoCrZ1859KsBSCRTR6hnzgoVpsUM6pyssSbrLr9MVM",
  "key10": "5ySMveftnrK2zx9H9SQ7JMXDyKdUfxDVVUS1x835goubJsW768zfshmfujEFFrCP25bY6C4k5XXtkS24287UcpgT",
  "key11": "23koMEUbtbZS5JTnUHv3Fr2PmAkiXR8MysnuTF1hfM2RTLPXPkVDkZFX3VxbT8XSBVTW5jee8kS6eFwFPmcmbufG",
  "key12": "4LZdubtsUt8NrUJEaF9V1H6VQRSN6DrrZ7RZJrv5cRyPreikzteAKxgv5pTVAJ9ACT6vMGBd6F4JF4YCLU1bEeX6",
  "key13": "33brDoYDQ9BYXBRfo69sPRs5rghPHaAgf1Cq8yThF4rdfCcp4XDWiF3u9zmLCfX7u8yZWzE8AiPfi95rteL52Mkv",
  "key14": "47rsa7546WzHwj51MgJjFqBjoHSgSD54yBK8xQVeTgj5YKkFKXptAgjmNyvs2YQ74DCKpsKoUjHuacDn7EtgKPW",
  "key15": "4NxTrUfx2vvsZkF9kHsKFHL8o9sZGRNrnMfgtoYvaQRdk3t4tPqDcZfGaXfSXZJDBAB6mS7J4T2fD3W6dXtUkq39",
  "key16": "48JkFev5qCcjyXVtzQXvDz1NcviT929jpjEYsA7JN7tudjEMhb7P91UUiapaoEJpoeb1SNXHauLYNWKqCZfJHE9Y",
  "key17": "2r7yFcNjeivbGo94TJz1oZrJdGn9cYnccKxEXpNXPZGLWMp7XVV9YBBAwwXdZc1Q26GFAsqTYqH9uDHq8Nzj5fHN",
  "key18": "4kULvJJodMbXwddwWMv35mTDkwwvKuKx2t5nQVtxeQzcrjwibLbCASDtyftWnhgHY49h5WSCyojphg7smbTmV8md",
  "key19": "2U4cesu3YXetbTtmzPuzv8VD8QoBm8fGChvwSzvjg6JqMsRYaBJCgG2z6Np7dJAxdLfzc6QaiDNw9Zwuye4f8CSu",
  "key20": "opDTkbtVZEU8zVqEt54AUJ7NRVcRRxXRg7DHR1q4uLSpYGJBiqn3QRuMieTWBmNLvVeCPZ5MW8T8r36CvCZkNft",
  "key21": "3vVhToBbsLS8f5TTmPTTBEV9Lpj1cWNjxPhiBakwpHSwJvKQisBBporEjpuuiz3Pdcug1yhZaHAhed1xYL8oZGLH",
  "key22": "295PyvPpM83y8bMBaoPstzkEaRf4i8dFFMFnunaKwjk9twQuEcJmBd99hyUqudgEVAinHzspDuC8yrUcyDbwGJRF",
  "key23": "2JUefhHMfd2XbA1hn9WDniUmYV8rjuiDsc3TEyv2r1wY2PzKD3xEkcNeyhzuuZPym81h7AeHb6h9RzQVtaLsL6GM",
  "key24": "2pDYD4AndSPdA3rUAxeKLqDGgiUVR1yCKBMRQmig6p5ckLuT5dzg7KgZV5wfi2cFJ9bw2Rw2XaJPsDZxiyZht1Yq",
  "key25": "3kpJBjeRKnCsprSmo8DruZs63BDCTZt3hKsC9iyFyVpmDeUzHfHXUkt2NziJfQnWt2aZtE8cUn4tpfKGkmsLnVpm",
  "key26": "634RAhtuJeu6b5R1KYeKVWyPsTWQYa8NXk8P1Q7cQJo1RHNNoAuumnhHT4zEr5XbNCondGCHwJyzAWET3SRWvvCT",
  "key27": "5ysTW8sWoYHEEZzmWegcUdTJ8EJWVhniFf3XFdVrBGGHuT7kZd2dHRG6qUtVGHcxTFq35qwiVeQ8259zjfAmuSri",
  "key28": "4kWHhFgDcvVM8qL8XezyLKAgmg6S5TnoVdxdokBSKiqsKtjapYhTNK3NqMoGAwK9GrJtYezCa2GhVN6BCUNkmZP3",
  "key29": "4inhWqg7K4N1soyZQM3W6oD1q6VV3HQpSjycY4h78hgbyF4b3aMgQ1aQJPNBQ6aebAugFRP4RGnkcugFS7r8BCsQ",
  "key30": "3gn3vBmhkVwt9sx6fq3fL4dN64V8ELxCgRgvGJWTtjaiqbbJmLD6swV3e6dSD8EhogpB8P3FoUSxDpz9hC1g2DcY",
  "key31": "5EMy3MeJksate9UQBhxQPRpmw4aU7Btg6eaBVLwgFmXRu2WznVBxGBTpqpYvs1kD5NEkDMASQma9MaAbooQikMv3",
  "key32": "2jghHD9rXZ9z7PotbQxd3yJbtduz2M2k7qk8xsoBLDcdRvgdj23cQ9GGoLpF1Nj49Nctqg2QiEFgoCan6s7KXcJr",
  "key33": "2VuCtq91Bi1bwLKkvkrAt7Mba9ruiwGPXFGskNbT2WdcYdryNQeN99FxPHxXu3LLtak68zPC5cyu9DR1CxuLseMs",
  "key34": "2FEMaBScv7scD76AMex9CMab9nzRdn9L62Z4Wn1xaydGZH1FmzGStVW6Ky62wHwhdK6kgy93kaWRXeoSDGgsyQKX",
  "key35": "469uietwT2V6Ct6zjNRGJexVeJQgJFQvcoS6wkJH3iFcDZQJQBGG5RrwghWRbNdU3shvWeVybMHTiA5ngyftcHxG",
  "key36": "3qLq6zKWTLwepR1kn4rUqrpvQ4SR9L1gJZFRfnDjwbSjmJ1pXk1bQ8NZEZ2rofazK96w6mKLmiH1HPgx8U3GHh1x",
  "key37": "CRt2aXrexRCgXtaAgkiha1n5rxzEsfRRGcUTLtEAnm6Dvuia5bX5PX49u9zauvoJGEuhdjSGmr7Y9Cub7FiM72Y"
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
