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
    "2rRtzE5vveNWRHf1mqqoPzUUQa3QB4GMtnijcQPCMNMB2KbbfSABohfkfZzRLmRbh4APF9hE6A9Zct9AYk5t7bed"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5StBExT59gKcRVG7AF22aasrVudZthq13fJp363H9RC7zopinekEaSb2Fwqx8gaNytPyxu5i7pzmzkrAoWfNGhgH",
  "key1": "4UCa3wHyNH1EKWDyPGqQtBgUqrCwtTAeuhNfMs54NFiZxV8YJEtA9R3EBi3evfD1FhTvgZCpNT4YSKksSg2Js5N8",
  "key2": "2CC6yMMKN4apJXajSC6XivCmpVzjF9vAWBGHbYq3yxp1Ju9GaYA1TgpsRFq7JQCuv2bPSFh5Yq9EsHQ1TwtY7yoF",
  "key3": "3e8FDw8SRpE9VbrrpLZ66qW2ZZwboCDAgYjxM8vgdttepbCtEEo12RtwgiMdRbhtgLCUuJNAZFGCMWkrmpQ7doCa",
  "key4": "56dMFamMHQCS3YFvcSDTTsfEXLc3Be8rWEGQjLk3PRmKKQUeLgVD8batRtJ978thKenKjaySrm56XuDQ179D558e",
  "key5": "32BieiQ5qrG3qs39AYQxKw8CnLgz9Ztx4Gr7SNHrQMBV4cN4of6TeA4Y6phiZ5rsxa2PV9131HoFNAnYo6Xmvf8",
  "key6": "2BhDG2HrARwuQATy8G1js9ijhNjPaXmvDbnn1usM9XqBHyinFt66i97N82EPRySDGeMyKHrTRmFHCrPK91YhwyMg",
  "key7": "5ykCiWy4RYrBXXroRWKtgtGK9Gi3MCNhLd7h1iyuXngQWyzgrtH5UaVe6zfj6GzNv8KwGYzEyJyfg2AY3YGhzizM",
  "key8": "3Tt6PK3ojz2HrKcN37ddtXytWNHjU7ZpEa5pdwwW96CVchtnFF3GQhwhg1aS9RRGrG6HQVvNA1hLNnTZTAzupdXf",
  "key9": "7xqNq9WDymXTsggkqphzEpM4q5vV83d8SYbUmrW7xVRE8pGiB4Kx6T5tWQSE5f5LvDEPKKozX2i3hDpYb7ubBSK",
  "key10": "3d5Nb7mdDjm2B5EcCKMQe4PPUYE6sEMahMvvaUxKTEDKVYcYYLFLPsCp82sxyYnYpMU8YryP9V5d73RBdhBprmrS",
  "key11": "2Cd1RC7vXmqmnuUcBNfBHSmAP9ca2uKCDP9vuQV4EpaG9grNLdfxwPPQtYPucfGrRWcDBb9LXJYUzmYLiAMiQfUN",
  "key12": "4czamDRZTRUqoYnNnuQp59a5AL9AL1mjyv6ZFpiKAgY8gJtHjpTC4NFF9uPCu388Mnvoi2koHqNV78rhqFddkYo",
  "key13": "4EAWR1AU2zzmPLdAYzLmKFfaS161RniHMKNnWCz6hRSMD8W6TNoREKyFvHGCPmSKodKsAyZnhb8RjZ22xx8reee1",
  "key14": "2fvZxZWT1biYXVEdgtHWBBX2tqQK2Bk7Zh2moPQEYDAUZk3coQsKFFj8fZcFSA7Dn8a1W36nwg5EPLD3wTutiV49",
  "key15": "jJDCHz3kiCBqVstcew3rtMpiPiDpWzvRazNX9wwv4mev5NpGys9WZTs2zVTKpLjYGaJcHyTzBcG8RUxFbatMDP1",
  "key16": "4C9i9MZNuqKzzhfkxaCRj42ciAtV6Hpd8aBxWRyZVEJ9edZZ7Fx6mAMz93tK7ereqbNZtx4E6rrUPzDGszUE5Ks3",
  "key17": "38yVCwqVf7KqHDgQzDzYnk9Xd1nayCGaTfPZw2e4KnCHNhA1NXj9YpHZ8pCMMknALeDK9T8Rv25XLVGT9mGDQDf3",
  "key18": "5XbymLnFiHtr6wicshQAUbiLdrYMuzLVsfgePfi521RYFkNy1pc7PiM4j5VeZZc4WPtyWswJ3szegr9jkNSU7qFo",
  "key19": "4WjFSJxj4Q5931LoTRJZMyHZph1MtcNixcL1hYhvRC3BRENey4Ypm5vpHNjGbUNW6LFj2dA1F85Bto5vxZEsgnpT",
  "key20": "45mP6mS1NntP6dXSMSfTxQNrxYcHUfHLL24g3EXw4WD27ixMPsC3agqmhG5jq43p5HdavfzTkiEcWKhe8VBBZzAt",
  "key21": "4cztwytd5eTdkxcvkLEfRkkkDCXDheSgGdT6CwUcH5Hqge9SL7jstZ23WfvtQ9teve2ZvmWk33feJLofBMWHEQuT",
  "key22": "5Hi1HyqaBPjupwseetuK4rb9ShZFxBMufdmF3XNr2mWzU8JxehP1rjWPiDyybV9pmTRh2kwidDf9LP3XxcpMBnPT",
  "key23": "5ksChVMLCKdEmkHjnhztCSgmRAwpdUTrPCqJjKsWV9kih7x6GfmzhsJWQNf5FEyzQ33bamB1ov8BuG9TBQCdBxhj",
  "key24": "4PSXUeiEToTQByXsJnkGGDPczWi9J6xFuJZ5tnFurT31zgxkg9hwsGGp2oTxNEk5aL5C6XwJMyxwe9TX9fd1cNct",
  "key25": "3RyTdqRwmLyci7Zd5pbdqJABTfa7Lq8WRe728UaeVzmAJoT8o6foyLZE3fH2HYxUanmgKgviGPet8PYLgeSY9Te5",
  "key26": "2R1vNi2vqddjTiCUZ3ARtXjEcZ4iEEpt1E9TjoXD749y3mQq3rj1j8c56XagejvV8T5QkPj7MyNFWRWuJaH8kb7k",
  "key27": "2YRYBwsXK56pxzi7RoedbpccUXoGRSAKpZEdWY2D6jneDBYRYrwZW7gRpDRcs6TyvuKiTL64vYVBKVCMqEAmDHr5",
  "key28": "37Y524Q8KfR3W1AxqZbaYNFZ8G4MxR5pnMd1PNdYsAaNG3cUTjB2RtQCCNt8fNaf3hwH3vwexqwpUfziJ6Bxy2FT",
  "key29": "5D6LPqHVX2u6jSNUzoD5KEHgNzcJEUnGqJzvVLScBP2wkDfCGMbefBqCagMJWuyHnhdcpdbwHWAzqjtnUUVikw5X"
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
