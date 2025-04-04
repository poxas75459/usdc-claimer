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
    "3HYbA47tk6NW1ketvbHMZapHQRAbXfGuyx8k5c3WH1Po6NtJNbaioGWBAzd7keFgCm1L6ojsJyNdbRw29bdvoSM4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SpSdegVA9mg1nSP6vFMVWr6oH5WR7bwUCT5MRvLXEh5bdzV8prqjMzgPJ4VDxmhRvQ9y2jSwa5K6W5RpFTisfCP",
  "key1": "4SVCByUf9UfV5GUHftVgqFSNZVz8TseFbdcvSFX7mB48u645tWRfxjgAKw1M1JhKCckwffrxZF3LJrBsP4pPVgNd",
  "key2": "VkazCr1g1zuQAeHRV1RWiSwNe6MGKpuNuvsZUVjGKrxCp49vqP2ocgLJH2sHytyHKTcT9q2GpyXfWxT8KQkhgdf",
  "key3": "3gpu1k29emqbME8upUc1fdN8vUFN2hppJmL47BoaMPVkTDfP41W2spoyGNbxCsudK6FbuE8HQJkC6KRdp7s2Dn2g",
  "key4": "CAsmUjCjsCMX4RP5iHrxUfMLXxbzYugsRdim2gXj33pJ6gR2jobxNe5c63ECubRvxthD5Hr3wbxkjvDhNPgzoLt",
  "key5": "5C2oVhtGG6ZgcNaV7TuvNxVYYeZfrLmdKsMfDprFPoWf2cYP6taWck1BKEzf6wZe5kJj6EiYBpArFfgzpBbxPPL9",
  "key6": "wckGSxRtA1VzfrhU51Lav6b3nRbovRRjG7GJ23tSa5E1syviX5utkyUTCjcemiX9nywwqugKRMRdtdGUvvR52uY",
  "key7": "3hBgyaHRFgf1yBbS3ojBGvfc1qzF63kUSXDWoqW5Z1efKtJQiScxFeM5kWKszAJkSsqTatMKz7pKndFt3mV5haGg",
  "key8": "LLBhj9TQD769aQTqXN2Q4gq8LrHRCXCuioxztBrLbbPnTPxGpvkoC66RSVqn1eAHyTjuRRpyhg1QjHjVMsJk1mv",
  "key9": "J7sdYfwECyqVYHZBRQWGe9oWtGGyDyaMNKCXMnhWUcFaAtaNrqZqv4unupw7jfwm1e2RZnp8a7rBHqFq92G1DuX",
  "key10": "Ke2L7eZG1RaXV4UDoEyQy7znaYSi7Fkqbyt2umKf8MvN7JR192c43QEyVaF9L7gjG7Dphkom7gjyXcucMrigE4S",
  "key11": "2VncGJbCvkkXfHWRSNKCfGqquSrc5uam9rx8QiVWcVqiYBvNgaMrTiMUEFKjDif4vY9SXm95tu1941V7orvtqxqg",
  "key12": "4fVo6Wxe8utxJZTEpb7zygFAKft95giv7yQpN4K95N6qnkSzRogmcUkZdHYQdQDSw7bPvts3nBoK6bs6YetgE8dt",
  "key13": "5bgUdRdLdFxCuSS6KQZc77tV3nafyFXD999CJPuPFKXab9pwjaG9QsBntiwQHvgfvUUS1zCyye7A76wdkmUDPhit",
  "key14": "2C3R2Fr1DhDcDePyqZpUiA9SwhPq8YhZzhea4fj2S5q3EexffmBzCxgFZWZwe2veyQEZyYKzPJcZmw69txQGc4kw",
  "key15": "3J5aMGifcJHFwBwx5yt7hmkEX9unGGJUq95GK6ZNfmM7CaENZuNtBbBeaVsitqapuym2jvhq8ZPyaHY5zvzXkfSj",
  "key16": "joERw8UFYhtkePrDjjKbpnhJy63avYVrkmU8z888hXBeuBbgedDD2bwf6orvHgrHcZr8zViuYCmXyqos23bb3o2",
  "key17": "2fRzuqagTqzYPfjgWEZNj5ZqykGHjwC8WA61SVRHB2bckr1ShKXbhwYgvcti3q98K1xVSUxiXD2PUuSJZXmLpuCt",
  "key18": "2ZH5uhw97t4RnHzT8xfXR3MUVHC2uAskNFZATvpTXV3C6UdfizfsinAYWKvpDHEHfzpBeccGfUDBtw5arVq6ufx2",
  "key19": "3cNWKzzQPikZhpYhsLcYXunSws5nq4kQjkSBHTw4m4VqUz3q3azfsY2NiNSANagNQayZ6aN5wMWGdHQphZHrWgRN",
  "key20": "2gT6q6PiHH7iUrT7MAkWWjKcFJtE6KT1iZPiErNfuKFc4w7Pacph2N1z4LH3NPu9enyAEv3p6Yxtc6AxH2Ur3mzA",
  "key21": "5QsTKz8dRHzyX3SWTbH7kYgo1jZRH3WpRNCDD91vLsQPEj8Nq96NgszEE9L8GxTJwqLbyqdjFeb68YrNULFd1yRE",
  "key22": "54eJ2VaP6SLxa32LZ5XMripoGChnHZdEXhRdeu8RxCBaoezpjGSMkEhpzjCmK2Bc8YvcYcuJirND2bmTfmQMaL6C",
  "key23": "3PCFUcQZixQX53SEAqcSiaukR1gd2mecYnbUHZepzJ5GBaxn8WVK99X1Us4wdwRa2wfUghsvYzLQs9NDzmtrMWiY",
  "key24": "5Rzac7Mq1WNYGMWaqiWaACM1KzFyEV2BEYDknfktG4DmAs3ooge6LjAQap8vgCKwcnpFim4TVno6G7GLDggDq4mY",
  "key25": "4iR6PhPdeSgPdykXFMPxZXBmKSR4ehmKkMqGpqbxyqg4rWnRpNerZoMyZ8rP22ZKq8S8kgufg4hpd2xf2LQia5fg",
  "key26": "2YM8ZKTed8eJznrz2vnxDEXJFDocsfBLvD1MjYQo1mkfBb7U2Thj3MP6Dga7VvFC6Ro6XD4jv23a87XcK6JzoyvV",
  "key27": "3HegvV3QYFLtwFyEXanhVoTkniYnt9hdgyTLbtMsDNB31sjTmBtA7x2meNEtwx5DE8jABzjJzPe8HnPrkXuWWi9W",
  "key28": "52ykGKioTYK52Z5UbmgK7oWMj5YKB5hLgHxuMFtHNveKH3FNKi7DNi3KLJQiZ8gHGnVepLvboW7S8M2hGiTa6Hn5"
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
