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
    "4BwfeFo6UrtsVMSki4q3gfmSXsZ8XP1aJc4BvizEdUBWA4YboEaB1JGnMyu8ZrDmd5nhWTqx3pDtB3FL624qUUJ6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iyUeDwbJbapc93dsXEFEd8c6wiUnyDQjWdUb2yaHDVebPeKPT8YsLANCJEWgQyS8BeztY7WuyLPPv3HBee9ew97",
  "key1": "632YRh1pZABJ78gJFGXrnysfsjaoQajj6h58BBtK9ixfR5eReKTsovfZgS1nJVkb22qoo7t8NYxGd74UqutbEH3i",
  "key2": "3tk9wyhXtdXRtYCX9ugT56ugU931aAADjzYwKQWiMz43h4onah6L8bHuB5MS8mA8YArihAGwgQDubaxzFfSL82fQ",
  "key3": "5sFcL33xQLHwrfu16CQhriw5K7mZwznaCYc4hCc2jo3S9pHbL6hYhFS3tsdW7o6GsSxJZKbPnjnP8zVmqAutUguW",
  "key4": "5D1QomHKNcTRW6ZAs1uUE4khysuVfUJZ5eQhkzWxipjEvC1x6xGv2a1D5qgrgFCN5xeTnB3meDa5EwwN7Tc5Qmnm",
  "key5": "3tVWavXGj16GFwSio6j2DZ2ToWVrtA4za7XuvUcR9UKi85DqAPDGTmCubVyV1VG2aGEz21Xpb1AZZDeoXNW5ykMG",
  "key6": "2Xgdf1P3uoZvvzPpo4cASqTQtZKBkC9utt3aNcckoh4PzsBoH4eekJj31AiAAVAkY2DKrezp5kpRe9tV3AwnChue",
  "key7": "48qKi1QbAx9Dtek2aPiBv8FWKofxcJqzWZoj6e1N1LnD5y6V2sLN8vv5Ry33anKajTBMUMMti23hrxqt4MyhRmro",
  "key8": "66423jxzqtS7oQ6s2t9du5Uv5jUDnn32BuAb6PZUSpyRoCjRHsqMP3EwHfjSHKVaW3LJ1rt8kR6sUqJmmBTpeHQt",
  "key9": "FJ4zd3UJcXc19zPW1MCcyx8HxTjLKmZgGGkq6z2Ze9469VKj8dBSitieyFrqzoux34xZKSTdvWjTbEYUNFHXiTs",
  "key10": "3HnsvZno31SdCUDrdfQzRRYmgtYHpHCeWqYWk77wstcGjraXAsphGjwMx7q1zFboRw6YWQmRgcgXbgrSiPAk3Q15",
  "key11": "F5aAGKtiKb55Jgzo6fN7Jr9Jtg37AzamFA93kPbHAmVXoauhkX4PuJPGaQJngzauyR3DkpqZXjCjZvRG9b6zAxq",
  "key12": "3ALXB6NG1sVU57dtsw1Bc73Qom9tB6HWns6NYRjmasUXBQbLA2UW6zf3m3BDM7swvL1mnetben7bPG6KtC9AW242",
  "key13": "2yKQhtJuo4idAMPryoHKS9CzLDwQjaFSdqxd6hBEotRuxYFkFkvB7hgWhYHDQTpfJLnb7hj29s8S9HGo6xr44Lex",
  "key14": "581B1LZK4ieGwV77EbiTPb9MdnueT1Nu6daKfJXLQk6jN9eRnWZ8vBNiZ8qfaiXhjXKx6WDbHJZh7sVfWah88UjW",
  "key15": "3dAeN6NfT9KiFvKdCn54rHbf2LxecDhp4x1fJyDCwY2ADNejrggExyCM62wQhuG6HQsmLf29KyZBnRsuCQVuznJG",
  "key16": "3cGpZAfWtG8ck49H1n6pWhby6T6n9qEnkjzTJwxB8GPq3ojSWHt5h5SD7DX1pBbgVaiJpcGyST1SRmExKPjvpViQ",
  "key17": "2CahjjHYyKgq4Zf8MGHJruoJjiQsUnVZFLxiz5SLTSpbs6Rq3vo3zt87zU1HSasQcEtr7aXmMZVBaBJi3LNRRXKj",
  "key18": "46FaasLzWcNxPxZ82KNpP1jkbtBcSeXUVZUWyeRMtZZquyKVhsPTVf3LUxYxWxqnRdrqFtm561xQFN52h7Wx6eZ6",
  "key19": "5xpioKdPes9nsNoxHcbdYALJ4N8Tap8P9FuZcyY7LEt7aydASvmgfdis2qY6TAopUEXUZh7N4u36Y7netSaaMLNV",
  "key20": "2PQqqw3mfJ6jGe4ZZtLXW5e8F8fbBrCYrb7FnBjNDRTAsCuR6usQzmMUaK3n8L6SZicAGDMuQ4ajFZkACAkXUukQ",
  "key21": "4FczBew5QzBLj1scaULaAdDyFbRMWKgWF2kJdB3jpREkqhuysW8RmsKiqTCv95bdpVAUnjzcKM97Lp3EUdd9CBbc",
  "key22": "hmZwFKMyqxt8sD9UC42eodA2rXqUAdwLzi1jy8czshhsSPdf62PqEsJTwtsN2d8pXe4ioFtiCX4UoVRajKKFakZ",
  "key23": "5L43kvpiAKKmseQHSQnytpokkUyzJHTWqk5harV6NHRWXsBCckGWM9cFizzKvAadWn7CqNp4HqM3vniGH6Us9PWC",
  "key24": "26wTQXKmDYTFGDLsSCWPRXSoBS4m7NoBN9StdgGdTfcqigTqMd83y3cxWhBGiASSM5Bf4DTTRGLjp7zd31pxK1Gc",
  "key25": "29gWKBYn5jofjkags4H9Erce5wL1iyYT9Y43nFAZtzmENcVw3p6bp7AtsfJFBMJRNnyK4DbfjEkaVZkh1aGFBAst",
  "key26": "5GpF91ajXcri3s5wdSgHnU9WRWzrH4m5aEXLJZjKydSetwJh5G4mkhp7xt35caoXNsjaY4WkZav5PWZWPJBdTk4m",
  "key27": "3AT7wTKpNQx9ZmA7EafhTWUXkvi7nnyT3Agm7Gz2HBRnZLfG2pR3HXydmrfvS4NUooNVmVXnYdjmdr1wmPvP1MGh",
  "key28": "2GDQvVuLeN6AsDK7MVnHZ6G38BaefTgJJdMLSqhM6uNCEzhWwf2RE2yPFPgMfczpS9m7zUowKeqkUKdHLNA6mJVu",
  "key29": "2SX5ypYU6oWmBzSXth5rUPe6bNbAXsyRSSv62ZLgPTVTZgAxpwJ6cscMgHVg9fzfJGKSY7d2JHPqFpYJjn8j1Kbw",
  "key30": "FJ1pjmtA3oHyXoz7t6pETn4ffCoN5zX7rDHxkJZqbVVRaBJGzRY3rY1xUSwXko5RsbgP3tdkyyqhJRsPsr5zCDk",
  "key31": "3UWsHaq9JrDxXMtehFLu2XdXJjhxaJBrUm6g8gvi28XfbaCDNNSs81JebVgXZKTriJus7hCUSdctMmPm4wXHz8nK",
  "key32": "3d1HPH1JRB2e89HZXd19semxd4r9mGMEB6eQnzc9DfwGTq4mnjb1bAeLLwe28KAdr9faXMUy5nb1VqYuNSLNk5hS",
  "key33": "4F8X4wyq6yCnqwAo9YXqErMdGePsb1rA8syuDJk2hEFU3S4Hf4eqiVh9RKH8S7mPcLw25kbLvM71BZkrSpwBFq44",
  "key34": "5ZGiU7CEzrooqDibKxCEbw9Lvo25VW1eg5C4sQ6BKzP5BaLDzUx8ggwHYxoDGK2wEBEv4JQX6tw4n1Jp87bzWtw6",
  "key35": "3Y8GgaLpZpQn56RBD7zKTthdYJ6YHV3gnQzrEhbqqz2nP8p35zzF95jJTxi2VjEbYPAxnU5zqgzrikfiKkf7fPcv",
  "key36": "5nrKwdJypW7Ty5KuuJDVEboMwQ8UQqE3ML6XwNzEhAsc4HL1zFPL88Tr97qJyPgRmSz8JwRTaApHg1m12Cc1gvUo"
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
