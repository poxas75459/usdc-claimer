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
    "eouSTdu4MDKmBVuYKysTtRTbhNmoDmfv83T6rnx9VQASDj4NKjqUZ7R4L53tHFHEJcf7Tr3c231SjTVah7SLks3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jGuTCZxouchQR8hLmsFg3utJkTaCNw5VtpZ5T7teNJ9iL9jGekDuJKBQvy8y6ijrCiVJSkGhxzHgc3AjLfyouYV",
  "key1": "5u2BPryef3BuHvGd4T6vETNPkCSd2LAQRiGakrfzRQyVQuPCZHftiRfDQhZC3Ma53NBXgyiZK6MP6HwPXVH3aPrp",
  "key2": "jpjoGMNpv38aHaUFhknmC8U1ZrHbEca9AiERUw8Azk9MaXbm7t5cR5eqUxX9bkNQtmMKWCmDbeFTS1JymAqsibf",
  "key3": "4bJMfBZYadZZSAycjg7ie6joU3gKZRJ5LQSo2ReKCnodicNcKWTSJRSVUMowj5eSLP9ScaLpAycKWA92ABNEst3K",
  "key4": "4jS4VFhZ2JpZiJZQo48g7PAhNomLSs7VgMNKQWtgSqxaWbTrRq4fYGMKivtZMAJFoLYYXTdLNhHYDsUFqai6wTUk",
  "key5": "4CqMLCmesSNfrUnSfKaMov8Et6PYnqPnKxmpDLoCAefrVByBRYLpUw34wM5W5BfyLXmufC2VSTXuz9Ej8zm31w1S",
  "key6": "VaYJQ1a1LbzGfvFbLhyEXHWVaeXFzY3tojxpYSrprRAjgzzsHqaASFTAteDG7AXzZxTBU5VZrxVpAV3NcnV9csC",
  "key7": "4XkPG4rM4gaNM2uBMUuYwYhWECmuUUVPVCPoNoeaeFsdpBzXA6ciqDaLv9ut4wVozTvyXmGoXqFv2RERR91j41sj",
  "key8": "4eF5NboDEbszwTKizXyrFmYZKwRKTkAJrcwAcpAuNC21Ufk8roGoJp8CHJ7Y4Hpj2NWio8wjftdf3FvwSSzkVf5z",
  "key9": "3vJAcidgmXH4YWKwYs6R9nM93qG2NEhRv75b7DVgeAiM3djSw3kEzjswTSCXnC4wSnrSoQgJfSF3Qgm3YkVTi6VH",
  "key10": "2ptWMgBnBA92HVjdd4Z8Va2sMQGBoA8UxZ7f6fwt6cXCekc5yN1BZpq2oaP96gTWVMv1qEmtvxookyoewQZSLNH7",
  "key11": "V7kYrdaj59CMHLb9UynWTNGHwiZBAoaJWfBk6bRHhZGtZYjPgFnbjQ3GczCQeJ27fevizaxsLkcA2nk2oVSZNWT",
  "key12": "2Wr7uLuT4jPugxm93KZm3ekcFkmnefVU8rWDHvTbQzibBrVxXh8mUDjNwYsuXyN2R2FhSsjAmFW7DL3RomiT15g5",
  "key13": "37A4VMPjktKG5xh8ZkwWRk2Vh7H9Zh9r2G7p1mMWjyTNqWxdeT7rypuGrvvwXdVq5E52ZLKQNiyw2Q9iBL2qww7T",
  "key14": "5pY6HWQFcN4dDRYK7BMvhMjYKm5hp93Re3qofu3Mp9etx3uRhu1asp3swUwxzJ1KKPzhsvb7m8hmHY2c8AxzVzwh",
  "key15": "3izoJDk21X6SDzxdACdnEwWyYDqh7nRuBjUvcaM5vZvePyGP6s1uQhtC9GZsamSWQPFmvZx2VayzM6nJcjs9bfMp",
  "key16": "4Q6WecJuArpxfWwubVhGoe4CgK8dtgs5TCoRyuaG18yvnuF8DzJ9dZwMMsKHb68DCfR7UJycGgwgrwATgkFArLdC",
  "key17": "5sW4j7EXeram5Eov8m8UYkHKproRVF19cKws7jAFdtq6DRt9g5ea6LMApMUJzy44EcBvA3ZCDiiYtaoD9VgH52Cz",
  "key18": "22BrXbLn4BjPDBPKapv1f8eXMdKvWB6ebtwPk6z7nTdJS7f45hyRAJNk773qK75wYBkorBX2xn3YNFjT5bUjgk1N",
  "key19": "4wffmicFzdkzuDrPkHgdbk9AfHJotPZ1TrENhRbfhpwkZ8ksQPdgdwbGyDDLWmqocKCgkJexw6wxKMm5VHArjzR1",
  "key20": "4YhXtTaKZ2psSKwQFZ1drfMyuCb68D3gRTiGJYoVhy1qNcG6MQ36ZL5FENQywb1vSXHxR5VWGhDYoN7iYZwjBxrN",
  "key21": "5nJ46RMokyBT1pE3xxbJUT5WqFB4xHGrK43oFCupmaDarcSN1vLXpBoRckmiYuWB48rQku5dmMaEmu7jSRqQfNVX",
  "key22": "3bsJ4S97UpXt2xTeC3vR8q7oMBPND1EPT11MBGzJbVrDvHQxAnEcjsVjnj3NA6vG7n7chFBLCGBpkSkfPq8xxdGs",
  "key23": "xeRdy6XhWnDnaVnJYFeZkvj9ZcKGydtXRVHX9FR1FDFeJH3hdxk6x2SuPVYPpXE5Ex643bsVh9kXExoE8GXBUq9",
  "key24": "4whVmueVG6uDBg8kW7Puo8iM3TzoQuKKH4PLWQzLo1UxSCrjEubjguE9QUy5PkFXaGMhxYuoe3q4VqieQRkdTxWi",
  "key25": "5Wv2AH9pPT5f4LAAmCeGLoLcWQZefYCoZHagMz1BcbcDcuuCC8kA2eS18Eq6gNSTzMG8HWEKbNhRUZ8p9i7VpHF5",
  "key26": "3pxJf8zKims82n8keaFpk95oNU1WKivVEXf2kqi3SuqsCJXaPmj5iUDTeimhM8KJ34Vj8wuEUMFxPCqc2tVCy6J4",
  "key27": "4izHenKhB1mmKfCdN2ezpEWvm1EazV5JeUtF7AV6RC71ywYYZmUMnUP5bFiHpw4MKjtT1FwS9rfy5YpUHnpDjTEi",
  "key28": "3MpgqhVFFWf85UuhzLYJL3hVpXwBBA3wZDfsceUWEoVQD4GMjiwJ3yyHSmteby7LRWUDRb7iupUmWNMtTxJngoNS",
  "key29": "2EA1c4iV5hBgm8YVDfDNnJ3Foor7zei6hrhCYqDceyxCv29Vir1okPd3m4FwKtR1RmNgZ1q1WnoGfp6g9eww8pHT",
  "key30": "2NqAs55S8rSMVpxJ9Wc8bviM72pSRX8x78CGm3Td1wd2xBc6RzkBE1wtTwHuk9u1x8yxSdJXBCYXH2Wi7R6E8mao",
  "key31": "4hhv4fK8kBQ7VWx2kpKBFqaetZaKBGfaxTKRyww91b8iBBk1gmuffRWC5HcSaH71CGvA7Qu1HqCVxKVYTysaLG3D",
  "key32": "3ri1CNNdsv9QzyDMAnumKPLNXe4MNZ3KYy7Vz2cHXcoG2SCx8KpSDxpyAmtwqkux1DMRtZZvUMmCYadSNrfg8JRh",
  "key33": "46RgXbfCpN7tKjtSYQFWWPn5tdVHGwdvC8iazxSwzpjVKftHVEUjVE2n7htR2wpZ6QmJrDVjfqTyP3X7bqGEQRw2",
  "key34": "5MQEZ8ewUTk54aHR6mZC5UcyCBhe4HTxsxZ6oVeHbMMoSiNwbMc875q7rj35mwHDGzAQadRpbodNxrRyr99CFch5",
  "key35": "5yJwBKKeqyVvpAbWioukUdk6gxxPtiYjgVxCipHocim6b1RPBLKPvTmhxMn7TxpBFAxPrTn6V7bRqzYvzGfQRbNs"
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
