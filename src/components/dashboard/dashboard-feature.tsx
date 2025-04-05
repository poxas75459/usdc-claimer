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
    "4Vxw6DZn1yA1P5dP8G1Zanr6nsukuNB46RcLVCp4JKLXHByDit88q9kUJmybQief1RaSqq55YPMfzmWg29BUtvhK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58uB46jX2Ge2n32CADVCdSo1gSWHi7FQvsQPwdJRgDRNahaeTyYU3Z7eZWgib6SyFprtNXCjh3rXXdpx8P1dmaih",
  "key1": "2drDy7YpQGz1CZ5zMge3pKQkU19L1LhkQPnXoKpTSm3bopHkqHLUzMoxWhiKFqaYh67QW2PV7mj5zwqZRESXVEz9",
  "key2": "5RMD7w9soTBEvYrbFpkGzCqq84YYYCgKN86pY9hnMty2B7VenXsWp7ziQaVYb9rjnjDD3ZYKs5NzLFQhJz8iJPGE",
  "key3": "6Qjn1jJhfzN3EQp2cMUJ3Ava7Ts4NZgPZZvMm1NqWx41tyB7LpmQLuPPYLJeaUNThARX5CtiUfv2nbdqMww1uTh",
  "key4": "RHjNGsLK21xKQkem6rW42Ev2sbfU54sHJZcQktSx2KTdhtAnKJWgXrYwXqKvkkv2B3Dc7NFw8gELrsohc6x4hAB",
  "key5": "46CwwbFMVQj7snD2DqdHEa1W84NXzy9Vk9hbLHYfWL38K8Fz8gojYh5or7btWKJo7TfpFftYC4qw4PLrGUZkhqja",
  "key6": "4RPgHSu8e1RJQJePDQtynH6jVciiT389egKbfCmXRQu3RzqL3UMjEC66rGQek29bjZmEaW8fGN4SA9AYXmVk5yU",
  "key7": "fhbWrdsydb6ZWKhdrjR5LSmQ7Zw49aqa8NHthD74YxRHeevXAK37Qq9re3ckoEHszzenpfxyYu3rKXJEbcmuVcb",
  "key8": "33CM8F724Vw4ZPWynqbBWXXYGq5PEDuV4R9VfgWKcR47Mpqe5evHTfxonoa7B3at3pu77h9WUY2X7pZ83YrwceNt",
  "key9": "563KEH4y3WmSzgXoc574UsuRrYnHPbSvS8VGBAgD5nWuovmgNdtw7gFVX2ec4wGPBqNnDMyHjsjvFqJNmzAzx1KC",
  "key10": "4t2b3YiNz7GZSgFrccYWu9t8FUs3qsBscoYBehHgnW76w9XnKrYJhsj9MbGbrfQ23VJxRhcwHPfnXXYnuBVbQdUq",
  "key11": "4xrCeUcRG9KVunjvAyfH2wubd8Ugzkr2iaHFxwoXUMXHhEQzcDqRHtKAdZwRaF3XiLT9UH1bnuJ4P7ZqCGqCLdGv",
  "key12": "36bCfoH9owpDNF9Jux3RJiRoDkWSzV2xaQk3m8VePrrSvC9A13qRTnDVYm6CuJdQz28wvbDWztMcJ7EhJBXt6V3N",
  "key13": "umDFmbTFPs5dqpdg1BMUebja5voWkUvZrHfxCFgX9QLXnbQ2Pea8gh63peCXZ5ctM6W4UznbPYrw72LkK2X1KN5",
  "key14": "47TqP5tYe9xYKAQ3RstemB7MjNjo8BqY3VxbSioAcKC9LaEePwJVhWYkknpngMabqfymkbFXhq2JKMpNohDmsq8q",
  "key15": "3tFMDuYgSMXFXqGWT2LyMRn7jcR4XeLwn9v7HUSboGf45RRcXoHkXJF5uFcJ4fRyWN2gH2yJzp7YJibFwBL2ASMF",
  "key16": "5p7oUX7QhSfgX1uxBvUQDFXKcLtNwFnCm2Af7mK5LZ1PQxdeyDF3zhtCvyanetZuCRm6WpZnXxxtFnU6J1CMLVEB",
  "key17": "3K43cVbDXM7pmbmdUzeDBpPKxRSFbANmwZ698uaJFvitqRmA6iMp4ZmbEMf3vH8YsYuFMLQg5fQvNQfPHcbi21kF",
  "key18": "59Gs7JP2PkdYTgHoUYaesNM3eW338w3bS2frtkFiLhV4h9X1epGqWuYfMVxPuEbUi3A6G7de1CHY18puJVkH2wYc",
  "key19": "2999nxPtAkTp332MpFK4ACQQXRBU6k5durzWU8sEMDoMYM6defh2mxTjGMptxWmoS3dwUbZa62G1wCkVH4oYH862",
  "key20": "5HCYroFVrVB9D7HrbAFMhviGpDgY1HM9kvt4QeMGygiK8ZbtHV38TFMkcsB381KWkK3LwZzrLXJfnQ2g4TXYiMHT",
  "key21": "3KPic6QvXnh2Gyht6A7QXTRRPzGGCLwaqHE4x8VdgxoJSdWrpAZBqGPUsNgNo4PHKKKJC5o8r6Zz8Mnyzou6pak5",
  "key22": "gJkpmdiZUWHS7H4baMsP7s2Ta1eafm38j25iiLUMLY1u2XL9fFtdzoa9FbgTHqy9ZAYr3fR5xKZupAudKc3sagC",
  "key23": "4iFJ39yEceVX1MfNCcgkAinZFu7FRQmZhz4ygEfMazimxo1FRfYe4DRZ7foknjEQ3zsSVGPVAb5rJNq8kcS9ikLZ",
  "key24": "2CQT8WqSp85wVSsKFQWynRoKyEdKjwYagh3Mh7z8yJksRni62d8vT18hvTKwjLRfxVnhBT7T7LmqrhcV9XE5zB5K",
  "key25": "3XM5Y2oq3j1BDAwYaZX84qMwjm3J9diNaH4EF4rq2BTtGZptFosA7jr6yVxWT6GNx1zG29i68Hy1i3qSEDxfCe2s",
  "key26": "5nCZ9kVctbpm8vbYJ7xnW19Y1BcV5jjeeXGoQxTQEWHyzswQVtuzZk1RnQ7uzW7nsc5wHZfRRTLhSXQmazvwm1SD",
  "key27": "HDrvNuVJTwChLZ1UnkvQ8T9D9T8QM7a1CLhc9CUzaEsW33Y3DVQyjXuUDCotrEEsMN1DCsG7iSQqrSWiAse71EU",
  "key28": "63MYRjZqm4gdpMYYhoNfqwsGP98nKz4RSTptXZs5dH8KShmeUMaheajkf9FsoQNWVLdMyC9PJdfszgCXyTUEfH4V",
  "key29": "3Yb1daPGNNgA2mvkhh517fgxV6JirqZSgXnBka12HFxWzESpreU49YrvnBwYEvmFu3FtpXxPRHoHG7WCdoFGiAKY",
  "key30": "LTpNXmxq3B4yZWLYjbjXeQhTWbfd1SCzfZ9AxDwixoXAtfoxGSK6DECYn2zWKHSRAghUbjTd7KS4gJxND5j1NZ4",
  "key31": "2aAWcLfxDGcSPUqwmw6NyXPuJGbuPpzWLWAGZdYQMLrDPbgwvACCNFU8gAizREGgEG2aB8JiLSdEQ7oYx34hvsAQ",
  "key32": "53BmbYmQiws2WLFi3xfmgd3rVCvk8SFtvCbqwFvW7YzCTaNJDKN8j2gr3Gd9rs7jdMGBupGWFxcnaFYxedPnjdnw",
  "key33": "3N3EJ8p9t6c6E1CMpZ1EsGHvBuWvag92gBUpBj3h5JYAoTHUGHu9LcFrNYef1wjEkqn4rmGAsFrDsNaR9dMm97Ri",
  "key34": "4RNPLtRP4LpUNzXtApnu32GnPJtBJKXMRJFtBTkqmKxMuzbc61YNhcfUZoejDrK1m1cRe77UY9kiVgtN2CSPZrPU",
  "key35": "4XL23Jq2YJUuoYXGY8r2whUqaS24Vmdy93bENNU7YBNBt4pgXLv3ijsUGxVQurqJsfTeFNtvUf6WSXsdre1ABwHt",
  "key36": "5HqAwjwXEuossYQ32DSsrmJxnYn6FUMb7wsmEeT4jmQz5C3XM37g97NRyYsooY1bLjDzdGCQz2wxtY2C2LWMrDmp",
  "key37": "PKedWMxfURnQEAEtJZr4dXBkcG1e8Z7WaA9QoWQ2Zhnf62Su6mkrV5HFUdFF7Z1ejjyD9QuZMRdgcutVTQ4xQnk",
  "key38": "3v24qinDRdQxry5YWkvpdhQoDfhnGtx7DKU9wi2GbcoixX8mgWN7N8e5UVLEDwS9v8Q21KFNA33L5t9JdPnZxjbL",
  "key39": "27t3MisuPYC798JbtyoxZWyiX1uPF2uaUQftju2UQ9MERkG3RjgFAi5RPU1yBjha53VLnDu2FL2gNih6r6rzrD1X",
  "key40": "iELCjCFQbG695KKm2Ax9nvNB8tYotktmAPQg4HQ338xGmXzo5fkUMNanV3kpbunS5DVABnc9VAFRw8LzJNejXYy",
  "key41": "5kQeEq5UB3mYn5THneMJeyatf4Eyn5iF2EdVXdg6xEeXBRTmZFKCDx3zhwZ8LSJ8oEatCe8vShrijfoSvztuo3VB",
  "key42": "fQeiYpvjuBrMpe9nKvHudf3KQt6mRnuPeeMnqifv942Lp75wmRSBHUQMAPodqF2xR4AfCAMf4Eub1j6WC6D9Xfo"
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
