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
    "4kU8cYxcvtpAaGdG8Zu9QBFHd9vrBg3bPgjsetbw7c98npcRaqgcrV6QvBms4f6dJPeKif7CsrcYcTHcbnJJpsVw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53S8DdpzAbmXtgfk6fqEz2VSJEtdYtJWpW7WmohdfEKDMs5rXP6syPpx2RDi85wZCJBMJDRiRfiAk3KKmoBGJR3N",
  "key1": "5mEWfvaiKUo4pxuBjhfFsd5YsXJGfFJFipDCmPAuFPr11u8gZ3RY1gsBrLp9PxAzKyhkVTAUr8hn9shpBMncAC89",
  "key2": "JEPGvrskr9Dsv8qqBrPycP7enctdsZUWis4NzELeCu7utDpPbofCdY243FvyUZxTE3rEuD4caX33mHQMEsFfcZp",
  "key3": "2v4M1Nnr1ST4HTPkxbZLAgxRZ7DWMVQ4EVwDd2nagr416adueDB42BtEnz59DsRanc9FymkHhFxDVgDkkaM2Qzw8",
  "key4": "5pAS1b5g9crUtuxh9XfFSCECWnfRusiutZFJPqXrMdSv6PKn78F5RYB9mqSEd9vCX5Kd3bkcJBa4ewKxH5EhcfWu",
  "key5": "3coEvQbnbG7PgXqAqZWga5qqdLdbA1Ey8DxpgE8QWzDqxM9aCLXnRioXmDYi5QHio7BMZMfHrdMdWGpR2jnEbRS",
  "key6": "5rR7zNkEhfDNXbSEVWHXY5SBzZCX4JnKZ8BAnXdUPixJk6486TPSd2DFQfgzZ3saK25eKr3czn9R1EvfT4GmZmdK",
  "key7": "2uq3VuwseDRxvA2qJiWP2Uys3ZYcSUbJZWQEL5go4NpX8QGXZaGepTDTjbsFPSKb37u9fuhALQeEVHwMTP5U5arK",
  "key8": "cbtEynjMBhSwpvbmMd6psBB4LvkgCRf4AuosYMs9Mp7wczT2exhvX2b6ofKiCRB4DKfYXP95qEucBJdkJYyP8zg",
  "key9": "3EZV3SHKK4TFPdexob5UAPd9Tr5GzFYEzWpV3nRBJ6E8KatzYcHfZLxjS5E9RULGg6NH38vA4H9xfkbbVuqM1ZiY",
  "key10": "5SKRSpiqWWyiX2r41vCCPJ61PUxWf8jGDn9iQd46jMHgPD3wayKgPmuYJLcwYrhTnQoYtMqLZRmZwcvF6M2JuLNk",
  "key11": "DZNAouEMeBeihUB7jyDLnaZwGbDgQBHvfvVG9ipDk5cp4znyGgqR1gZSUz8nERxhQuTEwYK9HRZTkEVTZMcsTCG",
  "key12": "3vk6pgeX56YrU2KmNUCwKctjVVLZ2iWinNHaY65MEc5SFhWPa8YT3b198xTJJ7dWX6mkKScfr6vCXdMobdnPxw9Q",
  "key13": "5uinmSufBFTYbyL1M5BK6M9RSSPrpCaVbushg9dokuh2RdoewjPpFkX1CdZC3YDCxHHBwSSM4gWS3uYS1cUjr8ex",
  "key14": "5tf2N3xGhB5dNVg5JygB8jnown4t2ysFgMzEpTBu4yVg8M4WRdsGjTKRVRBgRDbhDBVKSbxQ6wXsXCUKK1wjTDit",
  "key15": "4QRsYN9iqRfg3MDwMeNHpgCnt94qcDNmh9DNw5h4gDYRz1KeBd3Dw9tCJbdPqfhbgpBfYmndnZxURbvR65S3sHbi",
  "key16": "5bjBJEGXsa12C2cuBpaVAGkXDexDv1txj2mQ2GeJoC8EiwS7qBoM3R8xsdwL4NneWfGb63cUaYKV5iaac6P8b3WR",
  "key17": "5z2iYh4YA2gaQuJzsa7nmG6rw69D17UhPsVqiWUk591jggnmDnLmc7fScZkZv8GodQ4ghnobh5MXjy74EkEf5z44",
  "key18": "4Ew472JunztdapRLkRRrBcUT4gZ7z6MCmsWHJWfbHw7YEGMdY7ohJH7a35a8rmd7bFmEWLhPStbr3AzHJXryKxKK",
  "key19": "43NtM62r5wokybG4nbmBfkbAecj889dWuQRseGzH7kq8UQNQSBFL5xDnsxFMvBkHeZxX1mooDdvs8HbNmauUHGwb",
  "key20": "4ou7gYJzm3VSwPykwt99YXFzwiccJUrWdkarxweGrW95XFSTPfwZetQKAS2CYYqrDZe1ZJBrbGXo1p3onCdqkmQe",
  "key21": "4gwj3X74CmJ6keZm584vrhSKgytRt2zdVmNYVnQKfACrTD9TEY5aVxBueqovRUY5a6WB49NDSpjbHhCRDxguQGFN",
  "key22": "4uc9J3ZfTA284QikQMcWUJHEXsEPUpurXivTSPs8o91qF4WJ9xjZfW8G6atJr39yTMpEponCwTC5oYXq2ZfJSWSy",
  "key23": "56tRmroNdWGjPMicYqg78sAVFGneEtUf4mzTwWzmZQatgG2Ufsg9oAMi6Gsq8rdaqNgrHsmoWyVPNEPeAUygHat2",
  "key24": "57cVRSCsS8zMyyyPuAej8Vaa5fNE6Qn4gzPLxM3NobDYh3LGpezU2DCTbfJVK2Po2oUfMvWevtaCG3hkiSkAekPj",
  "key25": "42cHSUVpDY9C48GUM5uoCpjNCTt7cyLa1TSGgwGBNeLpjSh5MpNBTQa6Rsq8LFGHww7qPSXygnz8Xfk1Pm27qWAu",
  "key26": "4QSUDunTWdKSx6Rov1cbGB2FAySesP293mzV7VmVtoURb86MzALey7m437DFFXjELZYguntuQGnpKTWe5bASuHD6",
  "key27": "2gi328PutECbaaJA7faTNVsr6hup4ccBojsifTNq9xrHmjs8uwqwkLdeKN5QuHM3shdiMUHHmoHd7qj1JYUEu4FR",
  "key28": "5pUUuhc5A2wK7wJga6mz1u5NQhn22cEzokqNT3E9YtGQRb76DadSi7e6mDwXFAr52UK7dtnpbvvsVdE28sStZwJV",
  "key29": "3E9NhWNvPePsRZLw4YtTEKqa2UmvwsSHNuF5GBd236Aa3zTBbMFwWjekrT63erCmKZsb4stD6hc1W7BHAR7W4kT2",
  "key30": "3bUhZs2hQ2s5eJzb7oJ4GrTSbGjMNwVXmRzYyv1MaFuhvkrXGXTneDVCQEhvJfKaprdwimSCTYXiWsYqAthEsJG7",
  "key31": "2wVTiiripNDNoxeSNP9X3ALzNaktsyxkXdGcbgF3FUXUuryvYWZTjhsGPEaEqMJ9A7J9QdGuFRXxWKEbgxoT9eqN",
  "key32": "4dQJcb5dpv9tbR1hzaWzDkBewDSn3X5ULfpsYc2MEXujoCMT42YaQvfkT5mgtFJBBKjM25suGbdAfKBimhGxVEUw",
  "key33": "3UAiSApew8mingZXECWU2xXc8aWbh3NU8a6dmT1FA6M9F6Dv5qQMbpyJhk3WyvEReRvxLN9DzdF6iJvKSVLUrVwX"
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
