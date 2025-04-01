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
    "2ikhUoWnMMmFM6qxapkKNy7ttwf8YMpXGg66ZhkuBsLmhxofpJAuP4sGQ4aZshmsxQ2vA4agpPemJcBK5YCApZiW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CiTxfeUYnAWRhdHyVoeJ2jwCRVbLBZvZuuDDMo2EcYd6ijyiZT7kvDpyRjrH7BpPzTwrNoMiTYkap4feSbj9Aj2",
  "key1": "2TdE5nKLSyh3s9FJFGQSTANYdL5gTRZhUT19Ek23WCPYb3oKmksE9nHFnG6hP7ZjpACqP91ZqbA7LT3NoefuhLSr",
  "key2": "uWzNgPLGiCgRi6oL4NZbByEopwGE39RuCmCu76EaJkDKxRJJVK2KTXvQwhomCZprZMG8G56i5KL1GnMRYxhWpGU",
  "key3": "61cEQVzFb3Gakg2ivaKSbTg27RifP4HDAWdrL3ExhwF86f2ZWuCkhpVgUy4sQVub6msvSSWbgSQpHceGNQsNQGnb",
  "key4": "421uDo8nUy6719GzdfF16twFMjNrFrLNWPo1kDLbbZYkZv5rSxp2nZ1fpm3oqHUo2cnXgjM1jgAkNnEYEWGRQpsr",
  "key5": "2NCHR7wyBUDHbgexjW6MkZqCDTPoJDqDXD8H1NfXj75WSbRxqNEkWoPHpqaTPaSanMBRdVzsJmcyzBWfQ4L1VgR3",
  "key6": "2CDmEfVNqrhWj3jswAGkyRVvqXNzB31EmXWdBNSdzvm5Vmic8wVHbrKVbLtmXiTy11wReDapbvc6B34VUghkiG7i",
  "key7": "63GUGX8kQzSU3Em8cxckA7zpQsMS4THJ27PYQZrJmHmPeRZbzSaBsEvxhYY8aHtCEkKtCJWDeWhVGQKryQkmn8B2",
  "key8": "2NZD4ptHwcxGGmou3KH4Ws4gejeNv42tGQvi7JQSWveVidaRjepavLVQDaxUFwKGCtFhj8JerdheYdFHVsbQwS5C",
  "key9": "4aJ2kETEm11HB9FWyNorzn73n679jsd3KDUSbRHyZ333TpxVhVbmubYXoTeEAUSP5L2d3CiNJeKfQATwYXPdhB2N",
  "key10": "ffdctxhw9CuaJm2D3351S1RFesS1AvAfpNJma5AvogbQaJDxLwgK9T3gshHMMantWA39WTjujBWqW2Sc8mv57c1",
  "key11": "5BbpxT2eChEhk3SNV2FQXisSx2TJGt2p7Pp2s5zvde17xHYftVQxzidWzXVXuRPfujN1YPoAsw6f29oMB3NbqdmY",
  "key12": "2x4VJC4aJr8GZ7hfy6CGwB84iqJoioDk7zMgjcpMnit5j5vrPVfMW8Pwc9XHDbrBxvDDsD7886mSTwZzvb9D4wJG",
  "key13": "49fR5KEuEsgCDokm6yHfzFoxD8gMahu6kjggRydxghDdb8qjrGxwy2fe9v4SxXmRj5KVWNg1rXRCykG6ZVa7aYFD",
  "key14": "5yY1V843jbvj6PYGpxm25ojDR7McxGGpMiUMzE1XJ7C4b9jBf9cnWrpSvwarvkZJEwzXtTQpQhqghHnL9iYf5Puh",
  "key15": "398akYvi9dojBSnviFJkibcViRZtGL6jgNDgrsun9uTYd34FGSuCw5vsK4EN7Nfo8VsBT1GhbHK3FERVtygYoqQ3",
  "key16": "3z5oWRp6Z4ULskcSFJLuPhRXb9xNfKWsSjwZPo8WhBGWpBAhFEha3MNETCvr7p4sXYxMsY3Q7xPykcxMm1ymmpS9",
  "key17": "5v21EPTbaeYg3pszr8vks3zvk83R655jjJjTrq1k7KsJRRVEeH7FhVLdQQzzxemFEeG1Lx3mo3omw6pa3N3h4ayq",
  "key18": "41dTFRs9ynP1R34w9c2rqPW3mN9GuRrEYBPmZxgTQEQP1Dv1ofCrbNPFZZMF5PpsJL7qCzPMRx1ACUcdGCRq4ro9",
  "key19": "2oFQkgrQxNUKXXTngqAtNta6tkQosZo6y2wLj9Pw4fAU69yMnzmJ8PxnhxLuYypWuuDCeN6K5DUoekERtGpEeSDJ",
  "key20": "67k5q47Skx9J9pKgTNAsQuzEKHWpC2GyKmAqzd8Si5vCE1FNPr9yXc9jEhATbp8ewfB4ReL2XZEwRauRHck8L3Ta",
  "key21": "nDE31nxAVvxYq1TzVVeJBou3rEqDDSRfoq8eopMBTzHN51uAjHSoxg9yfCac6rWb5TfJ9FCyNZF7hPRvgz23jX3",
  "key22": "3LSHNSYXGf2GMPF3MCxjyaGVmAQjLa952Z5DRRwTnBWaGaRDoSDMY5bMVscAaTFPvUfTJmk2h3297tea8EyysVhj",
  "key23": "4FqbpXQ3cC63Q5udxR8ckg4eixa3VHWH6c185jhgAzpKG4SuKvPt64wKQr7yKdDrBKW2arR59Scxj6cG7L7TeGQ6",
  "key24": "3JWkH5fnQPSEeNU7TcNzmKHsivEwQ4FnjbS52Z3XjZ2eudG55stQkVmLSArqDDasDRgYyuzMaNnsr6eSZtscXFZP",
  "key25": "5y5Ac7ndmeJ5MTk3x5uHA1SCrpABNhXKDFQb8cxsmX6adUANoLezZ3peWodCGD3w5YVhNi6dEtAc1HeSNcvqced8",
  "key26": "5rUMTKmnEKn9vQJBDynBW2EbE2YerSQNC1RdpGyapJzaPyiioKEeuUKbL1Smp2K4qS8aEAghJhYLmx5sQayrV8Dh",
  "key27": "2DvfHxjyotFNzDT7dAUvSbyaUVLs3hpoTmHXGeBxF36NL4KbruawZh2cJ6H5tpiYNi7usbG68crWhE9ZxmZd8keW",
  "key28": "5iNAfeQm2Kh4fNcQD4N95vnxF1G2gUCFiynCraSGpDdq2gerCSMpp1uFwSBX4GmpUsKwya5uTAGfk1AtDLmxMqpM",
  "key29": "Rt97TDn9CAVNDpM6tRk9zmToow7z2hYVkF2isFuEoPcDsYQJ1LBNmqJu2ZHWgJS8TwMbR29QyfyUH4z8NahArNG",
  "key30": "SdKqyob5sEZEGeKfka1mvmFGr24hRbqJPSJhmsMejnWAG3zaRXX8jBjVeXX19ez7JSobsrXoLHTCGAGYbUMYuqT",
  "key31": "4hyrFFZs5hwyzLQ6GbXwBJVS7KgVsUzRZKwQxiKuP5VUm39iSH4MFeYuiauQXVcaofdirHMeaGHdrC7oAoqEfGyn",
  "key32": "5ZvrK9bGERMz2Z1geXkfYgQ7YosSqPS24Xcp2YfeMLYn9wrciUqKBxZ4uMqEBHVyyia8Nwt7yCp3aujSdHL9kajf",
  "key33": "2e2CevJV7NBKkxptLjEm6aqMSP2gLzYEZv8QtGJ6ZoKyUVfos6srcDbZCr4717ZqjWhw4i73sSSPuSEzteJGzhcb",
  "key34": "4hYxzzHCeqqtwtTZbwkBuR2xMJmvMyrf2tVyXCyk5rYCPXGSZJPXTUUM86QWuMJGAdE7sYuAGTcb5yqxrapd97KE",
  "key35": "5nxakhkYSuscyT3n9tGWniEXeNJBNcz1mJ8Zm48ycJwAF2Nmhey3A7qQoXhw3eu5UwQv5DmAPH4xmGrUsoRuCwQK",
  "key36": "29D6CAUavihny85vwETphPwRLUzb5M2nC84QESKKZrgPYKqQfMeVdvEstfcwtL3yHYG9Y7zEZ6fzdpm1WETTj1r3",
  "key37": "34XjnacuR8pHHr4WihLRKzJ6UaMdwbS62PiijaSUE2K1LWhgKiFpNAUv95Cf8JPygnfMYTacGiekMpdta1YRUQav",
  "key38": "2hPPfXTVaeGe7QYF8CCaAtKPrHQNfeiwgpnjpopNsPYN39PbvnT6cYcscqsBx6P5dFezNXAJCkYjAJgs8mcuSGx6"
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
