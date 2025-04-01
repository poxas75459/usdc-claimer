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
    "4mqLyHDjWtdkjK8FQDpAuqbQdJhxo4WVP25HUF4eRqZndzqV1Y5cwYXAC5qKZ5GQVFypA5NPb2biCGd6FvWYug1y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ofzkmecNaamvoRBCUMZoxdceHP21vVHtdgh6wLEuYAnFSoUkDPwUgKNX8RjmzH2Jo9Uf8A6xeJ4HcT2kXpEgzBM",
  "key1": "4Y8HMCiPi2kG4xWiKMEAFqVHZvAyVawXe2dP8HjigPuogFxTPYPkdSXvC38zgeCv5915zc3seHxcGrxHx6d1Xc3J",
  "key2": "2XdkH14uvvf7bMPsHuBRM3GuGjAWWLeyKsdUQuSTV4vmipvXcEFeMxAxGGtFETKM25MNDju69rjo1vTi5Mue2YDM",
  "key3": "3Y8t8BqHeS8o82wuuK377a3Pe7BEfkpcgji1JvKdosvnTc4eeZ96jjQX62Gzn4DBdsQb8jvsn4fdGxBKYxGQPnS1",
  "key4": "4UHzpfz2EQauozDSRtQMkHLi8rRH9Aqhe66sbJGozRjCL7xu67h5ji3KwDHcdof1MFDpaLsqpfgFkbce6YYwg7bF",
  "key5": "34PzziLHtQaTkpcAouVYELhyB6ryZCHDeU4p2FvHkHdt1Nex3EjbjdHMVsYHD2LdYk99ZQwnH9HL2uAseAZwuAty",
  "key6": "4Lo7toRbUkKgkcbZFPAZESZxeshtpegHfRehArS9t4A9hRMzi1JuRTbxaB4aN5K6CvyUfnyoq8DgLw3hMpiSmokb",
  "key7": "HJU958BSWza7PyKqGKB9NabZHf8tQs31qaWLFVz49fuUN9WBZ26v7jJk8TrLNs21joMgp2dGWep1PMKWMRRek6U",
  "key8": "cBRSm7mYVVhRrt83s9W6riw3wkd8duSM6mTKshRRZaiJQVEjqLDmTrkK6safN586W3M7WrHwrBTBWxpbjydHK8D",
  "key9": "qCyb59Uvfr5nHdWHKS38CCE15nza7ynhBGjjq5WTPPVhbPUt1PUNRikpTG9oizXrySCh6LHqFPY1m2yu9dnxqnK",
  "key10": "4BejSZUzHxswccq8DidrUeKCurLb4dvzg51ySGLsBE6Sj7RSVNarEDCu6LLXD3UN6HZFDPjqXZ87QSbRckbSyEbw",
  "key11": "34gG2tqadRyKoRiYyaGe4wVFwRSJeip5v4cexwio5qKrrvLvyC5siEJccSzGi6sfPn6Vvd2EZuv8AnZ39g328dUn",
  "key12": "2S6DiXzQh2LcXyMPd7wYmuFFime6uAZ88AuE3V4fjtakBfNETTewJoyWPWtATH93CLZEV116wZRk5DByJYQpMiqR",
  "key13": "4baj9bSUPssz4FJmo2PthuF7fax5EKaAWoHZomJ5JcuKUsfCuBwzhSsbvLKghwzHeBMKhN3eVcq7twusjXzP4fgP",
  "key14": "Gysi46rvhRGGYobvhHT13whd2J9tMJcZzUBnmwWwgWkREwfdHnZvZwXbonK3RME5GiNUUXokwB2dvtzVXX3e72u",
  "key15": "43WcvyFdm97CiochvbmVtRreM2SkPrry5Tko9QaLF76J8M6nnqAMf8pVZ8cDYUgYnhSoKTpDFLRfs6X1GMLSsCGx",
  "key16": "2Rc36x57mtyBdbiMgdxySBubzjTJogZiauNrL8s1zDzEwLLcgwtYkBjY3FFeGmy14TAmY3aXN6D6xx4mCoGtQKv9",
  "key17": "3vawgPMMg6NJxV71pc6TwdWpLtF8aRCZbGumFoJVPU7W81tT7CMBbj1Td2X7ztA9YjCNuDUfgBG8MuUiJjUp6YCz",
  "key18": "4VGcQWVUdVATynj85LedsMh3YRwwHuakGkuLddJscdTWD5soPFxRFjHqwckRy91dPh81x2wR224J7qr1gcvqXf7v",
  "key19": "2b1o5bpL13VqQf2C22qS6ML1h84MxUsnedXuizZTVDjvuVUkoMGVc5Ski9t8oYY4FgkWYm4QRnGCJkMQgLrk7rBL",
  "key20": "5RRryfyiq9ZSdXuC8jMMCsJKVRmDdoF4GCeUz9tDdkprfmHyYANwWtJVqBKpRz4ubRcTBDzy8mJCpGjbs5Lnn8c6",
  "key21": "3Gm9MbkLDf59NCpftZkeBjMzpDyLKSCqEiD96HxonpoUcmZc5F4S38yJx4j2BPZPxPM4ENnVe7iKRRX4ydLWhHJY",
  "key22": "3hy2YfyGqxjHW1mRCtvEP7wGZn76u2MhZtKm8hu2gJbCP7WNiVWthQtBPXeYBq54tEuSK75irNvrB3bGftGtQR2Z",
  "key23": "HG8h8eythDJpNAwadARDNmRMWi8aFDvHGAV2iudzTKdjrFQt2UQJV8oES5FY3i7Xfog3rsXjNAWS3WEd7BsooA8",
  "key24": "4kFHKjW8rtDzjgVpx7TSFS9gr1RX2FULR1HrMpvphEUvKb9yiTwX9v4L39j4NDH1da9kRKo5XehA1XwyJcyJqF5a",
  "key25": "9ZGrcsQ2n87zt3mhPctC7DCrPokRyzkhYC7Sub2ZvZcLDCWv526HjYoWKjWA2BpHLpa1taf6dBcuhNaxVMu8Vze",
  "key26": "5D8BrgnEPWeatsX8nZdh2vKmmbStr9AJHqN2aS1G4nfJew6yMnmNxfCQm3qRPKhqhCyPcBQZnsFSzVkxpwkxiuDS",
  "key27": "bXmoJRAze8NZUCpMp7STJgQVBLvV94GPQq95Guc78Dffph3cVxTQC23QnnykVBJDUqd2jxGi8FXDukJVZ3gwiGM",
  "key28": "5RzYZGbGHtWsdRagNbbL7M3LWoV1wzkxVWZpV8NYAMA5hXfvQmdTJtYwPomqoh8MCnndyQ7fVcTtxca9bGy2oX3K",
  "key29": "3Xt1Tzt2V3cz1Tq1HcXE9d1BzQRS51etJGrtaZgnS7HzBrAfafoGbkrkrFuCN2TAcFAMcundW3SPrqxbfxC9LccE"
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
