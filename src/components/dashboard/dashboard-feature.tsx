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
    "b6iTXF3izgYtYH2LjHkgKHiFS8itxYS1Z4cGRA1qhtspsrU1598PiHmjz6mgEzMnA16xXXq6zsvEFpA65KWV7PB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xhndC5fQQVYgidh8kVKSUhbSxzT7GETM1fGesfJzdhTgfea2vG2c1gSfTakAbc7k8HbAD1947Nd7Fe4MCZ5gZSV",
  "key1": "2PqFEp7PdnZp9HufooQww3evkZbWRvrxEXXZP8h3McxkurvGcs7CqcaozN2TLG51naF6qQCvCYFYdE3BbF9gixS5",
  "key2": "J9dWQH54XZMgFPofuDPaszXuSDPoXi7YAL3k5Dv3Jbzkkz3oLA2CTzkam4dpdpzeeYLRxLQtu1GdmqT7GNywiFA",
  "key3": "rSgSSpDSmG6yXyDUvV7QGo1Xib6gQy46XuoAisqtKyhVfzUAxoTCKSEaW6xamnRVCgpeqSXjSPcykAvRjH5PR6Q",
  "key4": "5p7sw2genMaZADSq5ttEwPjV5Pc8p1H5Uvi8AY5AR3UCk5tYkErCqYcjoR8icRwLFGqkYPhiL1K98ZxdNpQ1x9ec",
  "key5": "EZbG7rfF757UW47WjPrtGRaqmk79zJH8LhwgWM5utvnR6JJFM1njXg9MEpMNSmGTqCnDdUWrtY4q4Ynqcu3nXfr",
  "key6": "4gvqfTjL8yEhTe9WayuUZCoMXCDsnkDuXfJCTYW7fdDGFPH5UiqE6UKwDUKApcmD9ad8Cf1UoxuwKJrnFRKTnWYJ",
  "key7": "2gnqexg3JGtm3FB3SyzeCayMBby9wAci2UmDXJKZjHP7xVcpZ8wTJheYcaHyX7zWVcLLkXBeXqAYnNYRimBpaZgw",
  "key8": "5JwTZdruzVfEVKfGn52L1eY55HPkTjAcid52MTuunppf8XbupkMpCRUPiuhrH8qhBpT2RyACdsK64J1fpa7fQjA6",
  "key9": "2J1VAgqcecyTS5y4Bi8Sfodojdeb4pJ81KfVcnNfaDiW8UeCTy3WdcbiuUipoD7FVLANXJ2vJXLgp7UeFYk4x3LJ",
  "key10": "3b8SpFajxohyxoQHMx58bbLYEQ6pFNGG4y948mMKuC7f311wkp6ouxGgukqheTuu8bU31L8TBx3idTShybiSuZnz",
  "key11": "64bFoqxuceDjdZ5kNHUGTwSuJRZdfCxZS88D4wLcYmXedoFRoG4RedXwTwhDmyZ7uuomKzexKmYHA3K2PuBFMHea",
  "key12": "3VH7H8timSzUCCzGc45HLX5u3RaUhzuh4k2kmoQYJsp1mZ9Rt7DkoUyt7N4r15QbCWmLqrBVqePJM9HW4WKEncZK",
  "key13": "3crcP5azvsHWeQZ899YY6GnjXgpzuQTFChoSdNgCnUGvzbnUwD7zkQSWq1obx7ytVwyJr7rijkLC9GXQvo5pkdfK",
  "key14": "2wMEvqQQPLHX7yWPv4CBmWPF59dtimuVC63a3uSndrapZHWhFnHR6V8LkcivWRswncNEq6cSURo4rK7b2sP79HLQ",
  "key15": "njRPzUcVGpxXBE6be4DkqAXf8zUY3znLEpzoUzr6wzeKkQSBE9V8CX2vhisYH6ZuiC1DG8852JBKDVmv6UMaK9x",
  "key16": "2b8ii5pHV9M417GJuU1dtgJ6rAk4Z1Z5QSGz5apf2qw21omfYmbmsiNbYKThg5d3S9wMoSj7YpraqdWfBiRfZ1sz",
  "key17": "4gUEefwgB6gR9ZYVjasrkaouinYX22uL7mA4Bxm28eHr1YxE5PCLfN2XbkkqM8E4fn5FsHuRVzG9BZhmqkUpz3hu",
  "key18": "3x5Hktcag9EfQiK9Uo2tRL7RcrpzHyGHmLNDommhaQsK1jqPCzGqLKQXtdHSKhJaQhzRNZoZumCEQAFbZXeCx6pW",
  "key19": "wSpdaNJuvY63gASt5bxzJAWMDNhSgbpNXdtwTaVzQ8tNjbDBaCWzVRzreJba7YYo8jgYeVfJSRJLSxDtrFZkVip",
  "key20": "5gWmvvuSE5u1nywAfyxLrf9T15BwXUeqzUy9Bt8FjqMy5MMqo1Tu3oSWk89v9yL7D4xNfsfndMBynnDFqbvcHkV4",
  "key21": "L7E6CemU1gqof54taWdogmUViCxQScbon5EEacQcJgrY1QXSduvTXyihdwbgrLaH5RF6uUQzhsNzLepNL1eB72N",
  "key22": "3B7rwN7NWYKJGUXH4m4gwQNWewuKeuHzWck1sqf51VPP29Fd9QquMW5xmuNQT3YfLa7uEyBecFtmaVDXTViCipge",
  "key23": "5XRaNGWP6xUy3CHxe7vBUsPCACEgoN4MVeRwquSvcK95MfexzCn4XeHnAD4A4K7rr1u9kzvi9sRL7CNfPA36kwtt",
  "key24": "5iv3zuhtFi51DaPHhNSbpJH7ocdLvarrWx3DRXUUcsDyT18rcdTdLVwVhL6S7JPXxm18tRHL7qA5evaUnGhee2nj",
  "key25": "3Bb1aYBNpqajtw2mX3fQbFyEcGMa2kJVyxVSPYTxTjXAx6fsGVo3JUcq39JvekkTYejvqnL6Dq7xbjwgSD9qrrNY",
  "key26": "DDRDCbwfWyUKmL4c66MJF87tefPwSgbfFe3W6zVVcpjFyeN2AeHJxgHSDxiY1T7rbv3BDaktZv6Ue5MvAkBN9Ei",
  "key27": "TytD7e13LnHsz13K7mjKv7C1teoBowXEZeNh6JEy1jVq6NgYhUJkWdFDccbYt5wjwn8qjKD5f8Kr59eyEXoEsjK",
  "key28": "58V1S3iyBYqgNQZjHyFJekzrjPnbJFg9Y8Rqqc1nmAkXrZg5BmM1WAKJBamz9xjqLRtAEMYHKykAdb8RKzMtytxc",
  "key29": "44utBWRwBGzn6nEdS2bw3REuiBhRTHAvZsr6JPV3UDzJbvuZhsfc1NdnWKaJhMjsjSqJTb5fYFBmDNddtNupUxyR",
  "key30": "2vZ9fThdkYWm5RitecBVbdWg1cm8iQUtSMZBJoB4e7TU8kWmELdnLx4Qo4sDzs6ASvGQSkXWUzPBDtAkySo7hVHH",
  "key31": "4c2q8aR3V7TRie1E8H2Bkgu9ehrZWxFN312gdPH48z82q7eRgcua91rLBwCBW7wsWWeDEBUR4TfqmEjSD4gpYyP1",
  "key32": "4Zi7SsHw9rZxRSi5F9YENrGS5sP8kcFKrQ8fdvkA19C262SRCj8hFdLRMHTCWUykQH9dAeLceSxUjvjnAGCYwnND",
  "key33": "2KR4ZwAhQ3CjSzr7AZkXrpxENYN1er6TcCXkKxE8QDq5n78T7b3R8oAHbjnSDPWezZyjdjfdXHE7Dt11of9bBz4",
  "key34": "9E5nMcwuVzKHuMvwdcUykRzDAkUvViViMYNKUMn7u48Fi4kuQ6aAh4iXLVg1y4jiP4zSYzwSxJeNc8qWpFVs7Hj",
  "key35": "uZw3ZpuWqysikC2r8PNynWN2NtozVaY8xMmExLtTKDmgUFdpWb3yht47T2Z1nPifen3Dg3FQj8hvPZ9pUACK2rT",
  "key36": "2kejNd8YuR5XZNg7aamavp6AexpcY5SckDvaHb4zioQyZjncPFFjiUuezXrkGxZGmtEymJYADvd5kPz1fKqmF24u",
  "key37": "4t6W59VNkUBNUuAJnaRmEUgYxaXLJsknH29s1tAqHLR8hNjbWRo1FmyE9Jj6ijqzYQuA765ztXNaPdeS29kQgPBG",
  "key38": "w7P5yfuEy12UAo7ijhLXHXrbMYMDWD37Dh9QUJmndvzdiEYCgmCxRXehmZFWoAtnAwQB3BXraCY7d1u3jb4vraf",
  "key39": "49YtGHncbSuGu6YjUxgc5gh7fSByXztbaYGLE9RjD6AsM88RGLMDK2ne5LF9XLDrReyQpqk7WZuXPqQr9SZjdkM2",
  "key40": "4ApPHahy5YqPHqEShBak5hmqv2A5zQsWYqDRnE2osPAa7s6AM75ayEMKwP8Nyiktj1i7LGwqhb6BEjzpyfUEaFou",
  "key41": "2n9wvSZCwyycCz421iPhrfDjvnvqGeG7tuTntrD3owYaHEYnsxpAao3XfPKxoGK2H2JtiJBHokwpPKa7TVubTJTn",
  "key42": "5tJPEpF8WehGaW1E3PUz11EHYetVU6HSriqKZGF4NkAAgjGxW4Jz3JTR1ZUaS6J9bx1Y1pdS1ziFQkbjWz9gEFqS"
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
