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
    "3NgSPzCBhvJ7ZvacdXVv2Ec5wCC9hLjqukY2XifSn1sETdSuUCd6EUsg2MdzWE1Be4i7mNtWQz81G2hrAYjcMdv2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eWEwELxPwik9pMbza8z7DNZm4oBW4sTN92kFCY7CbDQQQpmzGQfXAoxUjrL9atG4NT8gKv3UKGMze72LUBAkHR2",
  "key1": "4AcDQKjytBKkdPQg76Y5QPy1LFvpDXRjjdYRAisGvZ4wLC86dxsA4dxHPwXTEanCNwxHbpRMNQa5yJ4mCzJZurwk",
  "key2": "oFzaFGuXPGgwDHufFEUANfa7VwQE7NR7i5svFFYBqAWi82fouhdbNejgRTxVkrhzXd6ojJY9gbwzvDLurMUpUTm",
  "key3": "59xXcyMpM8QNR2yt4qmgw8xEps9MgbfZeA3Vt2vvGKuJjwQzHhRz1Te5GKiSLwTWsUvSHfZBSpKXAtRtAhfHJPGW",
  "key4": "5ezQruG36RMZph2ooUaKQkEqRNmKj7jAVSZvucUvcbYQQEtuUasHXqAcTkSZ1LRh5zC6NWC6s4DhmTLBkLJZSXtS",
  "key5": "MKwwECNMK4fPjMYnKjnVagw6yMwNTd7aBN2xHJxRwh1KrrymayBACLsrtSjAccPtGd8fP6ZNQfjRfdZRhvJUE41",
  "key6": "67cksmg4P7coUqviJQpYmw6WpTdvRgrPDZxwUrHLGo238u47GXH7dxKq22QmVaDX5UDsdjLVehyE3TSYm234K3W3",
  "key7": "5Lek2VvgJ1i3eHv34vmFEfUvD7E8dXYWvrynn29Dpha1yXVFe3ZKJHeBCpg2iwHqNdPTwpunDR8VRZuFTN3quThR",
  "key8": "2oVpxoZ4GTRrXQD85f1Zw8y14XPV3F6gxQQGu82wxCJDdoMhaPx5GNkqE6Zx673ya1KnNWyxsZDJoFzssvuVCHeH",
  "key9": "jkNgSFeAXvzxAzDjmbNpvrhPoPHiN9krRX4HvLREJWvyHc44R1FB5mUwkK1bpN2gxdUVhydL4zgy7mE1iA8etMc",
  "key10": "K8GUea1ekSg7tWzsxMhUPdz4ZU4tKbXjvyiDyMntNEekVuXEeKhFRnahLtNWyrCBEYxtTbxfAwV2KiiMbHJ5yg4",
  "key11": "2NXvW1V29SZ7g8iAsMMiR61CT56d2ymwJN7JohR5MH5GrAjdm3m974jh4Mkx7EMXHCzKeG5eY1b1xt7VKApPTfb9",
  "key12": "2j4yoYF8V7aGYF9cmE7tS174uSMUueudnstB5kmoJQ12c1wsspbUxZR2GqB9mftFRKynfEqvf2dJx46ToZBLfJ1p",
  "key13": "5PNhyE8YXPXCZBf3xXfGqaZGh6CaBqD6QQi5iQf3aUJizJ1bfnFT3G9ZMMibMgqXrEiRqXeUqe37bMkXskGXBqRz",
  "key14": "Hu5su3Yk4LRHD2zjy4ojXLat8JzFYbkLc43BSNQTR9BqWKJ6vncx7eEqatin17t4bd8pWhKAcejg43MYrLWbGvY",
  "key15": "MxS2ibAgcBFqEmFUcFRaTqwnNbEm3jSF23hjudTsWGm9awnF2Y9BH66MQJoBsfqYgmJ4GZsgjbrAJcJoNrC5cN1",
  "key16": "5TvyaqmJeWHyTAAdpG7xxvvjLxhcUnVwbNRX3gUc4xcsbH8ifo5yG3ELUTp6HfJXo4PvSxqZ2cTpJFnAcwBpN4yW",
  "key17": "3T3vmQa2QSyj7bB9GafKGgt68MsYppQQhqBdmYWHKcoKiaWkKkhsL1A2RZu2bVjrxAYhRdzjjxzdk98fV2Y5otNP",
  "key18": "35m9MXZQqJVsmAUuR3ygWJ8qUjWAcMR4k3WwZ2KBqEBQUboCta2Zc3iryZPQJYg7nrGqdvA3fPR3ZEJHCGqwoNNw",
  "key19": "x3s8N2W14JCHqbfFxGn8yL2vfFXW154z9Pk8dY4oECWnZPgzeSaf4NSWoo4ZBWCTF7kkEQZq6uzYg9WzkoDVGi2",
  "key20": "4DkYYJT8qDEHUi1QgtZSf8acKAvwTxHSjgJTFymG9rfyxqttdGN4CAjVHnRP35LDRGHv2mZ4DVAtUx37eFsMRLqy",
  "key21": "5A7xm1yEyeuFWLLwatDSwcy13nm7nHBZZWkNusT1XtYv8aUXjHoeyTgBiBPPjsiBYWiPSTuJYtpEeKi7CBVcx4NL",
  "key22": "2ynWwMcwo7qjwpB4g7brk5s9GHL4rxsTQ9oTZxseF5i3zgXrkAcjyihap3MC7k9UifDnNhSbYiY99DeJyuLqjysD",
  "key23": "4jJZRN5ZBzsvrUv75BhCRYDLxjfq1PbgXVCwDT3uSenKkZddc9KqgLFecHKir7QA96eiAkYGiaWBV9QMaavy15Xs",
  "key24": "2Cmu7nECnU7Zmhu2LnAFvF6fs9cypPGa43zTMhGPqj3qzzGtAPM5VYncNAkejQ9H6nDB21i1TUsAZ8EVwPqRD2SE",
  "key25": "MPon1su8nJ7rfAo5Cjz76wPcKKrKzAVuMnAXgCYdoXrtYpQz1akAdeQELNtGLeBF2A4wwwBoMHBtFMJFqe17vdT",
  "key26": "ejkdnC16TqA4hQPRshHkYwpepd7N3aUgEdH9RzELXVEjVD5TJUxhhccA2fkiWooXqBSRDnVjyKD7w61cJ5jva4w",
  "key27": "pGQifQ47ATXjyTZEkH87rw9Av4Lz8qoaZK1jmzTTC1Jik5cVeRhUUgZKi2MBFGENTAScfzz9xTXBxGpDvm8MxF3",
  "key28": "26uM8jYohi7J9QpXZC8fy7hAhDVT2Q42cuTvDYT3TYKfTcANh4WBmuGr5DRFqneub3fYoqCvjqhFgUrvC4dkC3Po",
  "key29": "PXDhy9T8MiEn3tWypjY9jyrNgetwj8ZynbLSD1gpWfgSz7qJMsxHPHtLdhotRGfYK8v2g5zJFMtUR8gP3Qic2sz",
  "key30": "4jWmoGj658sJLjB9XgcgSaxkS1P5KwJ2ekjfoBKec2PvCnjUmFVhWTCFQWuapdEAQXHjfN6AZj8Ch4dHWKcmZBkA",
  "key31": "5gSh1CY9e5MQm1mXCxWyyxx8kx5ES6DT6XHnrLbyrApF4tamFHbyw7Xu1KWPaTJRcb3Z76myS58WhjxqFeCjGYXt",
  "key32": "5FrMYFvtDdjD68koA3xP19P9EU3RXLxtnStuTnWKF5D3LxFNKQL3yDv626mh2uLuUpvD2tgfnGvvnxb9XNAb5vr7",
  "key33": "2gjZoofkeKfpGf7Mz7JEeihumHBEKiwHCQGrCiM8DefhSqLm6zLLG5bKACiFTahf3A8VjUyQiVeW8j2R2nLYyJwH",
  "key34": "5R83ZqXN7gHcp9vRjphAY9PEVgDrsgzARW2cYGsjr9obXj9r8qCobNTLCifEpfjiX6D31J4CntYpi7WAhhZozmmT",
  "key35": "5sYrmxD6Ue4zxk21ZGevTzSqeHZndJSWy4hm9mFXbbHnMht2E7BziSs89ANS4GJ5fEcM16jmKvFD2TD9VMzBb5u5",
  "key36": "3P7iAedi9ixecUbU6rJgzkebTTtb4ieVkMAs9oWktZM3HfYEC5MRX4L5wWGgJuVEAuksEdQ2sRCC4sFd9rWMzy3U",
  "key37": "4f1fKJymAg9i2KenLmz3hosjYKnCk5FKKL3vaEyPsxdxoZDXB9YgwpuZfqK7P8Ugy9fbnxuJ3zuXLEGeNmfdgbJD",
  "key38": "3qGqrBZN4VsjDSzyLztYXRTrsGreYkjUEnXeR6JQJ5sQ7jwFxeEvWsfXLYzacTeBmha9pnkPcBn6W59Te6t9WYCs",
  "key39": "4zcq7HWBzH7LXzCRLeeyxZNzi6MGNbpoYjJocNqto4NDhMu65z5HK7LPVut18ng5gtnQi3AKmwBgT9HHucBtGpsE",
  "key40": "2rZQjrtGchHSe5JMEc2xj24DLcDz12YeRaktKt7wB5taveJoXqY7MnnyeFd6SHuib5spSPZ16hykcL58ifGQv1aK",
  "key41": "5zSBvDoVfXNLVFPv8kwkRkXG5qhLMiMdThGtEzwfwUX4DX68Hz883ij9MBrDXCgq9iyyusG924bVA8GraXvXwYMt",
  "key42": "UHy9hiYzAxdM15rFrrdpHp7aHNN9wbkm93DDBnLAPNAM2SBP8H6nFbgXumm6gDxE633ui9qRhHLaR6V46huihSZ",
  "key43": "59jZBJmaUXTBnWgUrBE2zSGcKwQoipvi6orT6s1NhduGrRVfLks8LH2XN6kAooppWwjAnHTyNXMQGcbwUccVgtBh",
  "key44": "4JPgFCaWCVq555avWad1DavacKfRnCYAy5KkyFTR5pNZsJMg4JqYgLrrg5eZ4VLnjwemJMsNqqEeqaDPuJBsuU6a",
  "key45": "2REkD3YAtwbuXD7unuD497oEdfuzuGG7BURFKFEpzKkZ1wWTomk8wYHWFznkoUe3eAU3kCEEkNSkw87bLeLmckr2",
  "key46": "51mpu6LvRW8SgqtdNiDqeQ8wmpS8CRfgCGn35RDGQxm16Ftn3d1EvaQwiDZ4G6rwUhmVhi4r6h7CescHHjQeJKT7",
  "key47": "3uKeNzgdAqnxB3XTai3ZNceMqf9UrQFzg67FUzhTm7qbFLauDunGtyuw1YqhwW4i6qtr6inovFoGLcLUvP98w5u3"
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
