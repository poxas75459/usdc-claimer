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
    "rF5mswXGT3u3RsgMWjnfjiw17Dn4BsbwQUvjspQjbekFu2oZanWfVrSwAD4qBwrSP32dp9dNyYfcfuKvDuwKXqm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56GiHBpcDEU2hsnpJEJkRVoRaxRT6va9idrWdWRsSYHWfEs1HPWY7ntA7fvMVUWQMeXFWG7Qk8BFAcMmXWWiiDCu",
  "key1": "3cEGJbgors8gMyDJ2YzNNjQML7pqyTZyCoLf1VviACXjSHeJS9AJKxLbLD7K8a7dUayqM5XBE8oJsFpmPNPjooni",
  "key2": "4AMvk5JccCBoRBPhENn9WtiFJFmvnSERuq5odT6sqLD35c88JzXWsKhcS4EvRHfZyyeFRKaPmMLbM8iijgzVHCjm",
  "key3": "3KebYbgAmqKAptZbdamTaLd1kpfT1NWCpNBLb2hTm2NbkVsZNyU5mBpQbSs1ix7KX18XsG6PhrycQ4bPAjwE92qR",
  "key4": "A2KJofSKAQRt5UqJDbK3CGAqPdmpG6Bi95XAVghVnh5bNYisybYQ7YFD18qGtMUarLFEU4WLEaLjSqLuyT7yFDS",
  "key5": "2H8iTG1XLGB3azoCMoA8yG5NVzuwQXjJ11mByNg2j1jvnuUzy9H1LASCTjwjibMUfCYvWVbiwSaDsYmAg3bk8wcR",
  "key6": "2uS7ZyRDV5m3EroxsgWXUWfA1PnrC7iz1ofz6UzzHomUiKRZzxzSAnVXfD5dSx4dAzao6NqWF48JvdWMTZZXkmV8",
  "key7": "5b6io3euwKnKsHQwa9hALZuq7T8iQLYMYfRDQeyRPvPaNEi16xEBitpsB43GWJ8DsNmDBMkNjeZGpJxuk8orfNMS",
  "key8": "4Pjj9rGYzS2iistXnZ6a4ntx2X6QphcNMUKC65qfVGKb6kho1kKn4tetSqeJ8E2cDbQYb8oL3gVAhMooa2Ym3LJc",
  "key9": "whhhrPQ1bmyGEGPMrypZGRuw8eSHUddgEHBT1mfkGRwxU12gikhBrmx6HhQxG2UfPThHFKLSRgjW5N4xmL4oDFi",
  "key10": "5o7E6bRtzKxrCNwqnSmJQMs9BDXkfswkA7PtYpXujXZQTfpRwE4X9G7veioxy2QZRhkpPV3Y4s9K7XGsfL6EHYQv",
  "key11": "3hKkuGg9LpR2Xo9gT96ydaMsYy2jh46C9pKX6BSiDKAhzbU8YSdqH7Rwkpg77D3wXSMEwvmBMEqPdPJP46CSCHsW",
  "key12": "3A8uih3r3TTfhK5i5uQwDAk39X4KYy3VScDerijKHJMS9VxkL1DWDmqkNisPEPmoge52fFNVxLehQQFFHErh8qEn",
  "key13": "25Tk5qnGFwUN6sijQHF53v5Fdb4Hx9Neg47RLxfEAg4MMTrmSmMgxNXKQvufY9RyeDBDxFKeLEkAJNqwhhpZ1rUE",
  "key14": "27tN66PUw2eDVYqP5qwgt1rpa1ZxbJxTwxWBKLGLcpcAP4hoyaydfSBvaHH7NVbLFzaxpCs7nrBxFsDDK6gXDTG5",
  "key15": "2X1BFL4GLNkgxWY4dWhQo1ZfxuX1eKqiRvs4mrMzFNqGG9NaBKTy4mMaJaveixoiE4Cm7G24o9qF5QQJh6r41kSh",
  "key16": "4bs31tPbZPiqEy1TdJrL9HbJVWgz7aKzqwUQhbbVJbfeUUYuQGdA1NAWqHhH76anuRgenm3bU8vzmzNetbcFScAt",
  "key17": "3o7tafY3dNMQrvQPnsFDUJFyYa2u3waJqANaF6wSbCq5qmto8HajV8HjVj6xc1s531Nv8GAXFCuRTDvN2K1RKr7r",
  "key18": "bLSianJBXV9BnAMz8sb74HC7Wj7uHG5bsAXzV6xGxVM2wdFopCPVKZ8zq9DU1RHq6LysmX47FwEyC9y8RftqyX6",
  "key19": "5eV2qNbXGB1FmZXxtzDTHcQMVjV1GdbQyiUNKHVVE4wDFKSzf35cVxHMhLoidRYgsbHL28wiAxumPPso7K8XCwVm",
  "key20": "c6Gqc6nb6nDuahk42k3GjpqXiRBVHNh62Gh57irjnBbP1jRN2M2tVcc3cHKVp6h7paDU1LRdq17u8Qm6rkTLCsN",
  "key21": "6MzYnG2n6N8Ck3t2yoHNYcFApX8JwkMCho6dFSVLcMtX2KiPcQgY7bWpsXkAYPKqLtLTkC1fCxy7qsBv4vyT9VX",
  "key22": "7QPvDXrLZom2MEiETqy9kUf4MA5DNiVkmquy3tu9GDrRKD7ShqzJt9FsWjt2ieiBGfd4HqFB1u94vtjQHuSaRMH",
  "key23": "3iwjtFXKxuQJV8kL4uWtaJxJwC6X5eUzEXBDCxN72wv1r9Vk7oDuzfhfNjdL7jQ89tSVenLJbYjMHZvkg8WnedBc",
  "key24": "2ZmNNohWBFjtopEhjao8X19iQfsMX47MYRm6R1kngSn3nd6bEJLazXJCi11hcBHhaJuRM8PsZG94oUvuk9VvjJ2Q",
  "key25": "2fBnWcfBSb1Br2ceV5JswE1gQdD27wQmBh5apyuixQMd8fNG99ZWcXEytwsYhp2oeXiES4Ec394i9CZX28Ur9Fvm",
  "key26": "3HUNksgdkL35MGBFMHoahx9JwfdUuEfb4PkYrK7s7t9LVoLtq6Gs8cSKUd5HQ1gMvjMRVjoyi4Ps6obSjZjFxRK6",
  "key27": "5UpnxzE8onU2AzPm98P9KsvgZUNki3RAXD1iEqZ1LmkMypBSn1Moeo7FKL9wmCW9KHRPfn7CQbqX5zrWC3S4tKrB",
  "key28": "49wZjAGdLwJMTqENo4sfunb3Pt4yDLmh55kYpimsbmmHP7jTC77wbYZBgxhhmgcQL895mSF9Kx2M6SmEvXEwxbVt",
  "key29": "42KEtNHzg5iCobCmS1cjKYQTWmh6BAu4Gdd3gSaG4Nq7nzUwEmrPBZNPwzFNEVC6DxtFJBxqjxoigZdXuaBAkDPY",
  "key30": "ctPzHy2kiVYJbzBSumt5K32fot8z5pWTHkAEs6hoeBBQHcwxs55pFTZfzuGFZCAhrwj6vcYptpoo1azGb1bgPXe",
  "key31": "3u1D1kFzqwP397gkyamdi15vd11x6HKqLGXmbX4R6kLHG95nCegjssAssSBERW2XvDPECe9x16c3GJAGfihoWdu9",
  "key32": "4PYJJCATd1pYPMzbk7SUJriTWmhsKAiyA2EAqqEdsxaLxGfRjLyVcHtjA8P4gVjnJjYV22pGDMxrAjbn6mw47CiJ"
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
