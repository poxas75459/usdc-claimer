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
    "frhq1kiBNXbN3AFeAwBf5uUFE3Pd2CTM8SyoznFKutFK1oF8uvikNzHDYQhdizKgBahaFpPk7CTeyRo96pi5DbG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HH61KuTLrV8bALruFoSmE5GWkdxrJ4qLtv6oHSiyWi2jG8UcQ7ujusYuWCWWGH5xLaMq5iyMQc3cHRSRJFocpBc",
  "key1": "2UysZW72a1zyxVGN1GQrFqCD2juRVq7HwoAgJLF65vuj5wsppPJFtUXsnXsEnuUs8RSDbHa89CrmdAvQAth7rdHN",
  "key2": "3D9qmahKRJ9cP8HT1ajd4av9sGiEEfHkMQHpEJRVVuJUe6cAJWvFMtFVJq6kdDvqr8BaqKG9wTx9aszUqrC1HELa",
  "key3": "LREsUkDDUS4qGpoVzye1AzkNkqq4xVjePBTZaC3KhuiSycgCZNKMLSkNaNZ7iWDGpgVeQVyAbL7D4GD4wMWa9p6",
  "key4": "nZ3aqJVqrAsVBgYzZ9effQayJBiEWCVP1AqPDRziazKqAi9mUYm86qw3kSJ93gkhAtqaoniKCVj8mLuwyckiAJG",
  "key5": "b5GinhCrRQJC4m9grLofzCJbwaUSTqvihdhdE6oT6JH98EwECPLFCP8qch5YfoSPDakkLSnQh3VyYFqUGC3y4zd",
  "key6": "2bYUxwYaLBmCTBMZe6vukaZHejMi6gz1SPUqBcPpK458krogip8YYjjDLuJbcuu9MAjZ9WNsj2hFsYNtDpQwimQU",
  "key7": "5mhZTWws4fXNfvjHiST8UMBVhxScGpDHBkMaopHgQd94m3YYNXx3cDPLwiZjN3F5vhTqQ5uZJjwEoeLvNxpYEtuU",
  "key8": "Vvy8Xc2b9C1jWxhtP2oXXmJSRns8r6VTwkKHhstLJKHGKvesrbTuXaVTJB8FLhQQPYmwkeoxomX87NnJbUdyzQ4",
  "key9": "2L99h8RMnzXXkxDMdvBYNDRs5pet1sLNMc9ArBMin8rhDdTLGczDaFJfiGNHuqGwukofua3p3V45nGSUnPt7iVGe",
  "key10": "3tsjGEHDbTd6djv6toNTdWzepThn55sEesCvardiF7vTmMw9oDVkzbHKM9nacD9vsyciBEcGFFkNNpneKE3UTjzo",
  "key11": "41EFNtB5ABjsW4uknGK1kf7ih2oghbtAJb3k2aKE1RyDKsVDyKpjGAoY6S3KQQUcwA3mrs6QyE9E7eUZifomA5zt",
  "key12": "3TmEcwP1WQx5RctFbusewivPz4Qjc4Ak8VKs4Wf5SmessRKCCrkdhAeNiJcuXWH9G8LUg4i6pzs9NptGWsdVxcPE",
  "key13": "53WJNaUEUwjP7tu6Qe2TSLHfR5EghD8k53bj8iUF6uN17u1KF4JwSRNF4PbLcGDiWK5ZWR6zKpvzNma2sCyU9Mkt",
  "key14": "3sHyHmgPqQXUwp5Y2s1jFhKK2yShS6RvnF6LdCuECvRVBRg6rKJmThFSyVmQDHSD46osXUgGei9LhiBGJ2q6fzg6",
  "key15": "4xZv8SzsyZ9aYzpxwxcjqaEVTvcxXPTrEXZmXcNq285nuDgfuGAqtAobKKHcWg2Y7588ZerYRaPRkni9WMNzkqPb",
  "key16": "2SUmVygaFnitgm6NcVCyeKU5uVdYcUT3CvFo8JBZMff4mtT8kysCWeebQgHg8WHioJJBVJpQFED1S7cGNtAiWuKQ",
  "key17": "5YhpN6B2jsYpiitiPDt3VfMVeuQfR3XmnTQav3EemMvzjqNtVQRegR4nf6RQm3pBN5ZpEbsJ1p3ErNSxYEb8d4E7",
  "key18": "2PpoJ3scKtXiJRKifTET5rTP14VXz8BxUk786m7E4y3MjD5dJYdBZ4aCjD3HP7XRo9bcv15ztzautfsv6DGTEWuo",
  "key19": "3f21gNmq3PorkX1DvZQejyZCX1iT3xMkpCfwA3JkxrJtWYt51XAwx52N45hBY2uRmEQZ4A9TaJAzCD6BMqNFqzfs",
  "key20": "4LPGEwTmJakEfCZMh8PbQwCGUFitERSaeHydpigABJxVEkr1xzZewn9kiik44w2UeQgxbtVGkx3RCKSPjEpZQpQ5",
  "key21": "2gB363JLByK3GwoiDV8Fss6Cs3FmgYLPm2t9Rj4Y9k1ZYw7NEnwihfCU4Fa6vuzBTg2MXsj4LHFRJUsB4JrpbknT",
  "key22": "3pp35KHQszcUpbQwEJ91b6aVJUgzEMyBQrp99bbqyL2RoDm72J7tE79RAx3NA4736Y94ooUpbFAL2puosP2zfdtu",
  "key23": "2HAW9G8LR6SFb78eScSS8DHq5oSEa6LXAzjPFi1Y36VYASGEJqZ8HDMtV8rifZqp76ASAtpM8foTCFbZZTV7UtSD",
  "key24": "4JHSVqBt5PAqmioeUu86m8ycB1Rc4wtjjwBHBw9QTdKARPSQYnxudE93uRv71karo7QUnwpThXX7qY2q1oHrhjY2",
  "key25": "35aTAMs9zh3yKii7ehKcpY9rMVwg96EULjF9CMESDSR9nGC1wBfft22RG8NoyFpWh1mTftDwZHS5zvhGuk7RNDTy",
  "key26": "2KjBwPi6vprRfcnDy3MoinP7VdMTZPAW8GN4NoQiZsA69MhfxuFAP2DYK7H5KzrPcV4D9FubNhaPW8uNx56A8Exn",
  "key27": "k5EdFqxVgE1uRSWrcUSDcYKdD9brtn11QXGKrDeTqLJBYLuLpEvgJRwpq8rtKKuwzcxrzrBMJhjNk7Dm8dAFcnR",
  "key28": "2aMcaXBTvv1oTZwBqdcSaFERHkfvnJGsf7Jcp1y9PtCtgtWsmPkAfbcCdoHy46Ut4N9pM4GSx1vy9v8DuszbgAZW",
  "key29": "3hGsqAUD4oiLpnekyw468vRC2CdBCBREZswSezkyeKRGr8SLdcBaAcfGR39bW8nGU4WtFenF6rFinxMPZAEGaoDk"
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
