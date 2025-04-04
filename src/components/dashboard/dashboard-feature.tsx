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
    "5PXY2Nx2QUKMZDUvY8GM7YEQ53R8vMgZZJm1pQhv95zxDZo9PTmEP3j6XKjuDJiLGutnz1tZ9A1AKPfReLbzGAC3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AqzEnph6qEL56AjfdsJRjU6LsYDPv9xsTSwEknw4sTWVgnPsPEiBhzDeFha2LadTUq2stVPwyngrme5pjo4YzjA",
  "key1": "3HjBMwSmNmXBW4o43kPJ3KdKia7owbuqfmYnk3mQS8QfCA3nT8x4af4mC4AwCCDSBG39RGPhjFg4yGsyXeHXm6mu",
  "key2": "2M5EacPZA6nKtALrCZYRE55By1NtBgArk48dP3fSebyH6yBD1L8gVcFz32afzkvvdak2LB5UioV5C11EYJHyrQES",
  "key3": "3MuhwuQqaxKWFGMSVuQgqbn5vUZU9mMsGo53urLbnv1vJCJ46HrRqRMLft275VThumDjVRUTDQdHP1TriaJG72A1",
  "key4": "5mnZajoWQsyqQ653DK7hyWTU2bikJZt4REq9B7wdASHJXnMy3ZG6yEXVnKugBvWrAMiAjhyywc26fzekqERGaUP1",
  "key5": "5PZrUNkevvYSuZB9kD7S47uyE8RCbquMqVPgnYGS6ZgGbYATNdUJ8dxcedseyTxhizhhQ1hY4aVMcFyAQorYmin8",
  "key6": "wrRqy6AURosCKPvCb1bygtdXAuJzwDnfTdA1sUERJwN8ya6Lm2cMW6egftcTHYUuuL3fq7akZUvnDFoTcXrwQeg",
  "key7": "5DhCHL5TKjnFrKkyEN7wgKKtSrFfP5bu5vfayGG3PwedFYJ7XZ7KfotY62qsvH363KnwE7QkzGTcWbAwzyQnikaH",
  "key8": "2GijbyZpBRauX3hRxJZ6N8rQQkcQLWKF6VU6CFQcMug28iBTcGkvjZstVYzbLy3gsjQSPp2ZwtKtPETavsFeC6v2",
  "key9": "4F8FDvkWqjCUKY8pJj2Rignmh8Db8Z2c293AfPnVf14zWnf6zbRhoG6wjjD9EPJg4Ks43U5LzUwcskH3E5qxo5vK",
  "key10": "3sJSwrTCyb5nLxJnquvKApVCwwR8V2zFNFH297KspMXm7RA8NXbJKyEmTLX6KCTkb35QxuKjW1cV9yqu85YAsPom",
  "key11": "4emUGrVGMMcocA4hB3JfLugS3BiQZQqizFXcw4WjF4XHpXDaUTnxF6BmyzynhZePepUHLNQnQgH6eAyX6sqXanuT",
  "key12": "8aKMGoDE1JgU8wzPcs3TfK557Y3QLtBPcBA26kRfEK67C5SnF528GPhXKV4JuMy2LQTj9bD6n9JzqawMo2SdTiD",
  "key13": "k7qE7U9PbJfA56XaJgGk1atEWGZmNboZ82cDtRznFy97CXEC6znEPJiPCKBgJUaZNQBqbHigquq5xUnosGa5Ump",
  "key14": "4d5r5jVzRFMUxF1e2vGi3Vn7xwKtJQTH8SSXprxpZ2nMtogXJPPCSb4FD7KwNvHg7xi9Df4RtwYhiEuhvUBDWFPt",
  "key15": "4JQNMSU2NWpoFSrFaydDs8NbtVMNkQVjfrCVRxbJGp3qV7MPfhveQgTY8dAqcDBoxyhJpDEys4mbecPoK1hAU4Pu",
  "key16": "2E66QrZqpUgvSJSFN44iCsqSMwqVizr11NiGDCXNPZMHM3vPW4uVxwnim7AnQpQsJboDXpTjVnkvQzHAUV1dnQFv",
  "key17": "2mL6MK1uyThaMYyJdfA2557YjFa6vmCUyYA8SPnBn6h8DotXN6QRLdoFXt4oTtzM2Wd6aLHyRWKkkk32a2PA36aL",
  "key18": "n7LnQzfwRTUrFgFKajiZ8LGiVSZj75ziEAKrXYLqevSgH9extvMYGET65KrkoHKhkpTDai9sDMp1RDT11ceXRvJ",
  "key19": "25GNBXExUcSDFhPv3fVAjTi56Ais39PSfGToKE8RG6v9URCwTXdsUBqoDDMNFkQb9NisAFwJz9JQz1AYH1LWAP5r",
  "key20": "26B1tZmfDExcPBgspV1u4qa7mwpguA88f7KYQMewrdv4GMCjaMazkvdkmqgRxK9gEWwQrSuPuoT6UjXcSCYDsWJi",
  "key21": "24LuQh7UG37QrU5YBEhymQ75eguLSiauJvj6GXtSbkXcBe4hr1WbqrpQRHRdhUTuutamwJrgRixDVbitRA1mV8uw",
  "key22": "nJoLgtkgp34MSMLFrauAng9vn3oFShppLjbkvQtVddLr6fyyQmZZTJkJXBpU4vxqQjdAhovedrf7CKNBDXMbt4i",
  "key23": "4Y7z8eZo7Qk8pdC698Zu3kpVAnq338CyXEr2iM1n5e2io9MUt3zCy5VNDfFePL5oA3Nbop7hMM3sTqvTS2uTVAK2",
  "key24": "4FqZLmwQ9ggbgXt7hu2Ui22oj7GUb9BVeVVmPRt3m2LnvRRJ82PHPSNZHiq4v3R1pfk8bp8sD5W5aXaEjp8nqJCK",
  "key25": "3QnBijNQzcbzFe9Boxs2zhyQcMFg53gPRipxNy6D2nL1BFWh6LMcYuZB4yG2mRrgTLia2AtqzUacj66ohNCaQ5Du",
  "key26": "5rtXEQ8jpYhJpGBfUfZ5HhrQdqAvJfm8QMsp9GcFksG3WsYTv26i6eGe7Rx3tBDhFZrhWQoiv3jToPeZGZ3xJKx3",
  "key27": "epfHVueKVwU9SvBrUBFkdKQ98U1e6r2siqu8Bed5RhdtT5WsKrJsEtpvChfmQLYxRmKS5rqWXDsacj4vTQbHEKY",
  "key28": "3SkqMjd3ZZNhosLDzTNR8JfSDcp9MiHudrt5SevhyfbCZ47SKhrsnFXrybtxz4Mrsasv8SAW3zUsW34YwHN89JoY",
  "key29": "5hofTbiyZKcGtngLSAUeTmxAVjY3ZfXfY6CjTUBbrowEGZrDKdwr22DHa41yuVVDhxwPRPYW1JEo3QYyYpfAoS3X",
  "key30": "5tMj2L6FJrg2diZVmk6Heg1rZPDSsyLhCLHSHRCGa2Z5y1fhgrHLTbGh32q5uyTBYRiEkropRFPk93NRTVUvCwFj",
  "key31": "3HTr4adMRzGzmMTs1idG2px7kzf1tkwgZ9YKHpVT7FMWPq3YYophV3ptNX1miK8at8VvNxcA2FeK9cjpd6dqWAUu",
  "key32": "2iqsU8UEekgGs7ozV88APSaoHUu3uGZhqQFnQsaAWLE6uNV5k91N6NrWHpwTzu6Apz9cmQcFpf5k7eo5wZhHuNG3",
  "key33": "2edwjbTpVH8LZAJt1MFq1CQVX6wMUsLdvZuudoviG79js2xRukmHMwoKHs9RgLQYTZLwu9m8EUEaFT9RE4mMAJMf",
  "key34": "3XGTANXaDhQTxGzKrt1AAuAQaRVFBtfCdnkg7GUcjaWwV9ZphU7vERsgJ3QkzBekDNx7LEdBjuqxeuWsTJWa1x1a",
  "key35": "wgaXSfZmYY5BovhLcmGDLVraVFxCFpkSVmdBZGYEQD1PbLh1Tp2EPdP64NLDbYTDq6Cpv2vLbYWXakFXXaMiJne",
  "key36": "5KMT89YwHEFqP2X96wRG58W6vtFMerGY28BDfXvsYVJYQHsJjsrHBqNAptgKoyFVxkioSduz8H2LTBqJv35KKA6q",
  "key37": "3veEss6XD8FLA3PG6vGfZuN3YmMtCAWjGTWXLhaPVM9QcXthGji1NM3SuQ1NQQMRfR9jwY8aco4Yom8Ri6GVujoZ",
  "key38": "66ZKq42n4EYAqk1GwE3GGabevJeAfxmrVRiPPNyjbhEd9Dy9CVCbwZWSJHf7QTc4YtnKpbkbMKj5YDhTQDME2ALX",
  "key39": "5twvHL2SrTuESvdt9xG74kLCjihYxL6u8eKyBuyzBMLyUHbXH8VmGq8ZVac4StGzNuLWn8hPSofrkBc6thUYfpYa",
  "key40": "2AmeDKMP6yGk135gKPpXPLG2ehJQqqMCLMGdrby5qqeFoD3xFnhmpJTQe44ew2dvpBU3ii2iUdnMeBzynDw6LnyK",
  "key41": "3PsbSnLW6BLZRmAYj8A69QAh1CvnBwt4fajvG3wtPXVM1gpsqjWgBL8afMae4uU5BoVrumgWuDzeu6oewi9VYbGn",
  "key42": "2CjbiEpJuPfzjTkVVDMoygDg8ec72o5PN6E5qDbcfZU3iw4H87QkEPD16W4B8Rb6p9nGiFHpbCZ8n7BqaLDSeD4e",
  "key43": "5ZBWHg7epH4BEV3deCaWEFuk9VZTzzu5yem4HjGcJNvBhzyuD8XJ5EnygY1hk3X8VF7HMHq53ReCB4re4h65KiKs",
  "key44": "2zsHvAFCnga1jS66zGtbQXEENqy8xRQbGeqSaPAFjdVWzAxg35pBDyzmBwTF5tvpHnssnBsAAj1ep1KoHwxwXifg",
  "key45": "2izK6RJGuYiffWqcS6Pye2ck3iyUmVyfgPE1HpzYWmQf7Kpx1kfE8bKaRBdLZ7T2624VYakFhzKshyzESscdLoPk",
  "key46": "3YAAwYuwrPbLQEn4khAJDAmxfVSBbUjohRnz9hrwK1UyTMC3xjNAyDHu5rtpZ145X1T6jJVgi3zfid3iojCRzP5T",
  "key47": "2YeqmN5w2w8ic8gLMcWDiyShP7KFgJVP5KPFmsYLXMqNr2w1BCAtPLak31L8Jibrdm2jHHRCv752R1W6pYtAwm8p"
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
