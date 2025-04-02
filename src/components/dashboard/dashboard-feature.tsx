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
    "BfaqCMTj4KqzXZwr3qg7ypfqDcvtSFbPWcvHuXXMp4EiBjkotnXiuC89BspCiG6B5rEFjZkTtRF7KCXZSFmoygx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uD42Hd5JhEjC1AbCog9iGpTPJru5XheHTgrq1aJjGdrD3H2v349feVo567DppLXNmZiML5oe35EWEasory2EWiq",
  "key1": "3FNiFP4GyKVQq3tj3F8AbmMULbqirp6kt59wmLjZ2eseMbrhyyd3rCvegiwCvFnZonbMMGtrxAW8g14DbWXGJ5qh",
  "key2": "2SDCbtU2MgSaFheqzL1qAfFweQsTLZHRpip8dpZNqkmZ3CCwwWh5YkVMDAaEMQFEQ5fKsigKSi9qvXsd581n67p8",
  "key3": "hjYneEHLEFcjnAaZ9B37u3HnE28xjDQSTUbyxBSDBJqUdhx98VFe7b2uRadfdWQiUNN8VgNVJJg9Bwjsw7qLGHc",
  "key4": "2ThpjZS5jhkEoA4ASb8RzjXaY88h5vRt1zz6AQBBQgTiraN6DTzLtykwuUx2UhtgAN2YkrXBsgsfMdjetbiUtTBm",
  "key5": "5MUjiHamntmFWUvStTk6W7cZV4SobneENNsxEbmd1V7uLxCbY93a11g9Xd5GWZrta6dVBzbpujQjbANHHC5xfgJp",
  "key6": "34yMkH23WKmJfTbvEcMGVkMAC9yZvCRBCzponckoTz9G7v57o2ufbjoFcheiyX3RhsMsmVt5cgGsoAFyXdGEwVdi",
  "key7": "yCUYGUFZp8vD1a1YtQt6gV3MY1n6cAEdivzHFBgmZSnuCw6ByjHXToJdgU9pvg9L3nzW3H3qnzxawiv6ueZa4Tp",
  "key8": "5ArR4FCNH3iLKawAN6KC6oTvFviUwDKwgyTPLDLQUXekrDCQbcT2VxEEKCu4cobaAoz3JgerNCU1NxUDXw54kHDt",
  "key9": "AYDizrzUrEB93ua19Y7KEkthrJ1Cj35tif12pkXyWGSCMN7xUft4Rv9oc6Hpj69eJd2yKjdwvmwafa7jJCTug8R",
  "key10": "3mzML9tfRxrsHyjfFbZRtxwosn3Y7xUtK6k9vHHeNvA7WSyMujsfL3T56oW8DKVCMFm76yx5h61HThduJBNRfyj2",
  "key11": "kSUR6VqhZiB6smeWyCP4qH4bMtjQwyr9B2SpXY91NZKCdksVHH2J7kTPstH5J4REBRT1GmaymPuw7U69PbmQJ2P",
  "key12": "ZtFyaRnzSVs6jzFXcfdGRNhrATAfAf6BmazMbpb13TDXv3iqxycZw2Bk9nheNGxnEKgSc9HuvtYU78fBdFfsXqt",
  "key13": "v69LsHLzQR2LjVb2HRKnLXnb7Z4i12ZJkaWR6kVAWDF5Qe1rmqoDSCrzZYQawPyuiUQSbfPyomENMF31FBgeSJU",
  "key14": "4MXAfrDb7ueG1Aciss7SKmu2AYTpxzt9ydGnyUo1usQ7FifVCST7x2NC735qLE2Bcz4sbHY4BAZAyXbMXyx9potU",
  "key15": "4oCXPFr1fiAgk6W2hCxFrBGZp9ThdBaCbMoAJTz8M5kLvJdnqzndbnRCzztzg154pVZWGjfpi9pDmSxBAoqfw2pw",
  "key16": "2gUTzxqFRD8s7BGxBST49toCNfBPwXu8C69185V6AX34cLRoRnxTiRqJ9JC1tsYqUf4dUCwFtSPoG9vgKtqYUkdr",
  "key17": "FbrrvsbfCUSHVCsP6JaCQV31mGqHeB726Mwmz9yoQU9tfShJkCpyyYJE9x6WvAhUh6s45cAsKbceYMUKvYat7nd",
  "key18": "nx3AyBaJjYn7LA2BoTQLknxarUAxL5RAEbe7RgfhY1hMrHP1EyiqrZv2f3yh6BNrimNa6Fu1u8P2qqqkB4obkcU",
  "key19": "3nLt4W2WhKTYMfSg7rNwrUbpMEDorbRDMruS2gGHzFFQMsQgdYc7XQ6QLSPy25L6cyacoF41SpyAeM66E48zwVPU",
  "key20": "2s1hyHSTDq9caRbBSJUEKH7k4QGLkoSrQm7guj9AHzefhWAKNGKc7u2BC4VQ2kD31yNmAydfUGpi8CjhSkaCF1MZ",
  "key21": "2EE4awid86qX3gErx2ZNWTBLyLPpm47upcnZrj8WXfw1mipggv7gQ5hajMhidWkuijK9nfwsiH1wpTGrSEeMU5tS",
  "key22": "2zRiKV2fb3FyqKnwbUe2EyPZCm72M9snqdKwPontKsNNGAiGJ4zdJhLvhBeY96V58ZVApHxUKqjwzTVqbmisK5Qy",
  "key23": "5Qge9T4tDEU5UkUcfjwzYZCf2UaKva9JUeqEG6dJP6VLhAH7E3RHjikhLHC3ntP5ebRWmuhLHhoMBiPKKK56Fnvb",
  "key24": "3r2a4fSkNg9XNTUFgR7PxQavh7HzxWKYV2VzEoe6xdzCi33WyGGBGtXNabiQ6ufPnERtyBeHRoC1nTkFY86k4aNH",
  "key25": "2VSB9Fzyc3PHTGgT4i74M5CFRdWm3GQmJmyK1HbyzPZWszj8iBq7dDonxHni4kMQj7MreA3Gu3gYxen2kYHHMpwS",
  "key26": "21Z63wWTT7cgNZ8Rm2FvUUAvhqezfsdKExugbL7fbfyzMUemFnVL5w4fMD9RC7EuTsPMZ8ewEJRzLPwmuPLxvt8b",
  "key27": "23gSMLTREKxHB6N5KBmxrb7UovB9dCh2MfjmdX7VtdrrbLwbY7bL7CCmV8vQtxoknqdPJ8be4mBwtZjGXZvGRYTi",
  "key28": "3skvnBXCWmeHzZBwZ2W4fd1eSGXkpRFfgFieVyjbiFGjKcjhvbxoVdzna6tTdUPg8PwqrAzR9Ar2ughCSw8kdjQ2",
  "key29": "3GK9WYazbC6DeNdobcnv6t3HWEHoWGaKo5rJKUibMCTkUPEPAsxH3NEJHkKod29t6adsVHfeSNYkfmGhgPQ4N4fL",
  "key30": "3mmSD88UstQfNNGUFme3eredV8WmXhwkjX9GwAQJz2ysYtcUBN1A9u5b7x3qouN8tANHHwro5Pi9GPFEdeNQ5P7G",
  "key31": "Dkyji5gCLMCYsUNfL8uVVsGvhmcZRVpH299k7DqkSDvq3vCPk7VV9RB59ge8F3VoYWitAtF1GPkR7r883o9w7N7",
  "key32": "oyjRJoRE9cWR5MKNZNVVSZUmxLs33nBp54aJTxR5oRM9ThyCEPtyn24Lxq9gjH17NWVM2fm72xVuGaUhdYyzkLg",
  "key33": "3EgRXadzxHuotztqCgYCYPXqEW26CvmunA8JStnrPM26XeYroY71biNadkjcQUYmaDJHEtcUXutQ7WVGvrCxD9Fg"
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
