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
    "3PUm1Zt98B3miRhSZtLcqFr2KSaS95LCyiYRRZqqEwkJv4RpuE9R3jrTenq8jXmYdfHWqBwgz9NhowaF4fKQQ7mr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MfFmmSRgfhTNgXzHB3EgEaT5wRUbw1LMovoEhdi6GddvLTvV4oue3oArXXNa8cXN6csnH44wCVLuzHbPxXkGHJy",
  "key1": "4caQEFe1kZdcDCRFFghk8geMtMBMMaQJ5mxkmmReTkrz5nFm6nusXMuXkgP9tko6dEHWDf1NDzot8MKbd9RiHEDy",
  "key2": "cjYePHAPU8iR1W52TYSPseipyZtmy5atimcpM7ys71WFsFw4vyXYmvZ1VsrEXa8Dj1dcVPxG7KNWW63rpCP7YJp",
  "key3": "4FZRLWSAkeaSUDTjNd7FbqeXXALkPiEx2Z5sLC8ov2KHp9XuvtCZ2XRRm1Pip9vnzw1xCiKfJjB5XQAiQeHSZvxc",
  "key4": "2HdstqtdDihnBYHPPzWEADPondtv8oWETGxw5UhVkJaF6Tpy7PVPbhgxdexsEejAqwhRZxVhhTyG3yTn814M1QLz",
  "key5": "5j6WVJ6na2pVAKgbPiqwygBkA4bTUkms2S8uPxp4WnKnRsnuDfJXAc8ti7iqqQ9toLBrhMttaTDmQtH5kQS6j8Pk",
  "key6": "3f9XqU51ZNurDnPEVG91FfC2u5e4c2HThDgQx8GniTZ3rkEAqTmVWtvb7A9QhtvHF5dVTmzBAnH83B3StuArCRAA",
  "key7": "NnszRaJ1DunShnxscceHPLY5Tmqn29kW5wmKkrTNS2KzudrvtU9L2bMrQi52PaRvR5Q1ncw61hzocxrbUc2DSRJ",
  "key8": "3GBVQyJj5Ns8NyxRjEV7nfZi1WtpxZbXLKhtijeHu9upupdQhjcqAFm24bBVwrToEfwDNM4H9f4ZZ48Eyt2Ao6cB",
  "key9": "2szWhBhm7x6NSc1btjyinGYT9wsqvtTWATbinZgR9YwYFruAHPiWqxBfEWtZgExMH65VwE4uUHw9ukbmoqRj6B5B",
  "key10": "5BBMDvjrTZRicsrEGZGyxgfZpgpAy6ER3zJuCzz4bga7XDTbgAfQG5XGKCWaPYHQRD1Hyq4opfqKq6K2eQQCcWwt",
  "key11": "4e9T9GAiwUTaXMx9dGQvp5wMYnQ8aX1YdF79Dy5NL3cBwuSRDNWZ59RHPqgMio6QLMcb8RvjKKUqo2wty9Awti4T",
  "key12": "4epWcPqUUbhzH9D7TbubQSn1NjhDE5bRZh5peD51RZP6fbi2iyw84MVi3sPuoftnL6FHT8WJ8x8KipuzWk8LfHax",
  "key13": "4ue2VCvNJeR3dRvw3gCB7BLwxFEzoYM6dvhRyBhWmeXN8d8L1BEK7UcDzd1Tn4hpQssNyzEtYF8oaw6pL8VZ1sAL",
  "key14": "42fovZSzNxdUQ8mfeqUG8H14MELGVBSd5fMfAYdq7ShiZERQk57RdmCoXSWgtmtH1x2LS6DaGaEyYy5iKVytiQY2",
  "key15": "azaNVXZv768aRgsWG1HK1WHgMT318GTN3pQ12XsYrEVWV3kBCEtF8cvKfyKYXFXaYPRcHjBFeAerVgnwxr9e5rg",
  "key16": "2ozs2FnYqmCXfmaFh8HfDDPTrooW23z9D8FTJL2TUKqQUzAfCDsoj288qP8zErpioYfZERYqqCTdujr9sLdAuEYe",
  "key17": "2YAGiRcSw9UauHA3cVh5iDRyvPE2TVnGk6J1d7j2ZxPC8koUDKfhZGp8t3PXvU5rFTN6PyKmX47KWHcKzpCoWuo8",
  "key18": "63kqSJQcQRvSHkEwmWiZcXmcmNtR2cz8HuMn15nAFd77P9iof2iojiwMAnY17oz51j6bJStJmScM3nYfXbs3wESA",
  "key19": "sVW8p4dR4tQNFMN4jWPjo11SBVf8EKUN7gyi8NmNWNUcw8dxZL3KiGTWLaBLrb4wYb9R2xf7L3RmwakoGAy7jyq",
  "key20": "4Z6zFEJ1gFsynvVvaZELEwtTgKDYhut9uzttzNLSGNeusrpFP5h8zuCbA5RCBCJh34PN4Uvb3DnK6537acqFAnGF",
  "key21": "6Pmzm2MwLY28JYdGpkSPkTSJURGaeXBp6MfHW4ZtmWPhV9qEhYwW3ZxjDSsENxqwTrTKQP7hQkh6MKdyaibX7uQ",
  "key22": "5S1NcMuUPXL6JqHdR2ebJRX5bVVXMSedF2FbvnBbwgxmjLvdRBj3G2kbSjKQ7HwtVg6NL3NC6uAjHmJPQp5G8S9v",
  "key23": "52PM8TL2E1ByjQDkAZrM6yk9zRQNsj4eHzdx8q93wdXWV4iz7oXzmJRSApt7FgiQfyNRJXRdEV4pVz2nLXbDvDPJ",
  "key24": "5WzXzrqvbGkD4ntimChoXt5BnQDJQe7rVuHALYcpRL7TGkZzFPkAYLmwUahxgPVcSTaCrz4XsaEdaQX6Na3uH7VP",
  "key25": "4Bhxx618CqTKuPyf42dMW6BPKRzf2cCpMzgbjF8vLWRtfTfGkEWrXJBYr9rCdqgcx2HwNXHqcTtW2ZCjdmJrQnCP",
  "key26": "5KahJdxLEpPc7615D1xAwqUsi8vWyNV39miuuaids4DFzkuYtrDDaWJutAokoTc5W8ZpBC4BmUTK2cW7eFZ5bJJ6",
  "key27": "aR7Wbe456KnH1HZSKeMT5iwpW8fwNLiJaXj1Ju598h4bV4k1e5uGic2XvifTBAh2NTwzPybHXCQcuXaFuzeT9Fz",
  "key28": "45i8g6X4bXMWhBKSuy8qQTD3LDmjyjnXngiTJEYUd7vLEieL7tVQwZB5TnqtnGa1kwia9DiBY2JkwbCbnSQ5eZ6K",
  "key29": "4prDDqFyv3rsvWRA3wK4ha9ABNxYaMEBh7W13X8zYbkzgZgL1dx8Gvheg5QK7SvSxjTaE8tUD3MaQZKobhNqhgc",
  "key30": "3tyHgT2xBFNorMWvKVdtChYb48acWv63c9rxsWQd6jQbT7JPXLGuh6A7k4Qs7KrfwLdU4cWKYLweXys9FNV6of33",
  "key31": "4Q3VyAsdgoMy7fD7qGBBPvo9ZPPGQtKcP3TzshusNT5gLa5io9gN4qEeLTnmimQ7hpQ5aeuXA7YzjkmXVnpxKMZb",
  "key32": "sQBgK18q4fPGjPzdKqdufF7JeURFjhk9XiiNmFoDjP4bctHVetqAgqjHqGKdyEsooC9ncD8WDWVERsc97Nfe5qL",
  "key33": "3LUQCtXWbRqsHuQifVr1G9ifrhq72G1rurYUEnGhf8sHTS11EWP7ocniAy9vZxkKq2bmmNJS4XdtLN1T74wT1SRE",
  "key34": "3J7qcWvinBpuXkZxYbAK4cbkX65LsvV74VzHV5sXcpKDnDA9mtHjcFBAxTiBmCeHxK6ShXYQqxFpVVBwcQKporeW",
  "key35": "4FVCyJNR7BdwU5K8THcb788XURBbf1tZZhwEAeUMTwdB3hQEqRzqcy5UGGcULTC1vtKYMBps6NeYLdByRWWiUp1e"
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
