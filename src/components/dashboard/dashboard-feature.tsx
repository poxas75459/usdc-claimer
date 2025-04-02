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
    "5xPfzsLHCF1mTeirtfEwzMQC3LHeU7CtEMcmSXAvsMhqj95h8y1r2os6UoxHsYeJJS3mCKQrxbfBvkBYgHMZDMM1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3E4kehhfysfg6P7a16EzTMbVCvHmAkVMDDQb4XEHZDPxGnZ8LvLaZSfRQNRhrNMyXeSS1or1ez2ghXWHjHLsfwfw",
  "key1": "27rVdSg32tC2b2HMnVeVt7wg5zfHXTADYatoqWFYscs5MD2xiWWY3bG35vx9XD45GPELbHYJai18WrTN5uHF13QK",
  "key2": "5KyJWaLnkCRx8DFC2GGiTN1SPJ1XUX4V4bMTVwy8Uq8FjF6LTVjAKLgY77TvXtfcAfJDqWUTH8UpXXTFNkSTYajJ",
  "key3": "tgg31J5c9hTsbCGQWM1oXZxt4EA1pzpUzdNnFytrU2rEMgkEJuJsM9YwJKJutgs87RJdxuunP8fY4bbSWcnwsAW",
  "key4": "37H5CnHS5EyWM796zSrVCLvT8UHGMovsqsjiKmXtMFTnrgMmafTTqBVnwq3mVFX2anPdVhEjzZKMfpV3wacrbE6u",
  "key5": "22S5zGhh6Vnwsd5SZoEVKpop735chK8yeD5WiYupmWBuXMXWkYU74jVSGrx5vniaKS4Fb7yRV8LsJxH1Xusb2qmV",
  "key6": "5EFixws4RU37b7G9Um9B7Jyz8NW6SWGua2X32sBnQ3arFnJW7rtKCtyAf5Tk9PmesX4gSs6pj1jD8EoUR79ax37h",
  "key7": "3KhvxvhoXteEk1v3CogJHnm1RsVSeGdVtKavdUvya17ppshTtSCHX3VDv7pV1PUr7gtwbzi6jcCxNvmriYq76F9Q",
  "key8": "2qnbxSkKbEc9cY8HFxhXetbNfU7NquyurA5KNouQZQM7L9E79sSu4gkxzSC1Mth5aC39sfrPDuVTh6QVoYmzxvY7",
  "key9": "5xdDE6iyCY2mkZG5kWAxwqL8yQwDBrBDEZaE828TZ4r1zpS9tf5HESaWgdTTgXegakwTtkXVMXLtv3CDTsz78zMs",
  "key10": "NjVzKXamdN6WMTejbRZyFpj7SfY91iZZXuVEjNmmF4qixdrhWNjP1umwU6r9gkrNqGQYDV68iCWRGqco2Pi7nVy",
  "key11": "2f4gU5apYE8w1w2u1bKQ87toh2uHXKHnuYgFX8kufbB93oiurgmqdAyotB8fzjM1tji9sNWKWEieCFjFRZTeecPg",
  "key12": "24p3cpX1vxP78ggXrSUcYmE9FbNAGSEA7bFZ61nmkjMFU2MTDEMFPQ7DkfphQR3n94ShaZp8RiaEq2p9YnP1bEL4",
  "key13": "4hzYSHerZWWM1eWgJhaDxuz3KRioTsfFBB6H7EERT9qsF7i74LryH6z3rpRGKaNRm2WuibMapiPABurYmfvAtbeY",
  "key14": "28yWbyYdxmSj9KTbR2iGiuEVRvYD3Diu3WSEWLr2qdgcLaRm9ort4JbfFuvB9KiSeZEYZA5HHx85dgMuFKrumHbc",
  "key15": "4A38majFVhmpG4BwiayhGJtnSvy4shTvhg9AhdxKnGN3jvE62AHchtHXazyriAeMn7Skmm4cgvrep3eUVoX32ygF",
  "key16": "4zBw2CVcb2a8Sgf12VnQ2Qvv83CyQYdpK2CAxrFq2Kn96gRRXCsTzcuu911Py12ste2QGuYfqG57Dk7ZK7SmDcma",
  "key17": "3hC7YBY3xEekdVkFAnmC215Rkpb8Ear1F3rHkW8GiiPCCzpSVqQS8zJhYhJgbE57HyCWnrKMoc5XDTXcufHKMvRi",
  "key18": "4ycatJE7SZ42GQ9BwASSgsxKstDtKKxEQ1b8fW2KdigKunCRsCqVcHnZ1gw6YW7eEScFrH23EB1xYkr9csEB8Efi",
  "key19": "4VS5Zsj7tDmMx98hBG98rVZ6KXgUfSpM7VVkV7uF1ecSdUYe16ASyTdGnYwqb1n1dFzsSsYjxB6WsrN3mLWLqw7n",
  "key20": "2KmvNLXjD7WXG6iFErtQDbwALYCZhv67ATbvkYpvm8vE2pXdUARiRZz55uQzoxaDRQnCJUPgXqL1J5XZYSGauxMX",
  "key21": "4sUmgiatVGZn84jPG6MYKyY3NSUGDoNgngH185eUEE9QiV1pBd5daz95vnn51GeriGH3o8ZLtfrBv46nFkMq7Q2B",
  "key22": "5io3CRKNw3VCk2F6VmHbzoiFSy5EEyMUCGM1sWmobQ2kXTRwW5Sc4237wm5cvBBPB92XzmPKM9aWyEnKJwvSa1je",
  "key23": "4MCjYBnhfRU7jYMsWuiT1P24Mp4GMAq197JjfGtyqi9B8GhskGZ71YeFRiyXPYURhQhWHshXbsv1fFpWzPB8LJyR",
  "key24": "38QE7Dh8nFTVKZqotvB9BTcFZRZAqFVcYzDN5PETXxxLnf4aPtLsQsW82ivykMxAqTnttJbz93MpbSibnbYw5N3V",
  "key25": "4bkQEi8w7pxDQp6wQW9ygPMcmPSGwybuzqSiWw1FTRuPScMRfwQGqpBhGRp3yynjBhns9KKagMdZM1Nof21B7EuJ"
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
