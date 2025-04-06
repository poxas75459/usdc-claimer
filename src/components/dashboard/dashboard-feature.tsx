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
    "ytjXw6tfYTk9Z2osogvoJJZqSX2hn5tg4fEurjtCu6QvQydgAf7grFk6RXtHE5hGym52tuyuxeNUguRdX6dmtkw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZEQ5LruzbcFhoW2HXUDgt8omDPdte5AehoeULQ7hCKEmTUdPjgW6XQqaLi1rHEcsGsj8zMzFodPGf2nNP55ZnKK",
  "key1": "eeZ3dUgP7GCSBELnxDL19e9npaMuwt5wW5N8S69LHNLtuzeLeB3JiYeFPi6hPo3BkYgtWTSbbjp5Wq2LFopL9xe",
  "key2": "dM37eBjUy81bW8qRzGL86QiXXUDefgTcsGKuwNXGVWwMPv7kymS2TuEuEmvTmMCdT8ARKTPeG7dzomLGdrR5hH6",
  "key3": "H7VYYsnnFe4LmYUhbMDLn4tPzzdedHFLw3br9xbVhjEggXNyZpdibsE4dLyhKLPMVNLXTbsSu5AgZodxJEEBC1V",
  "key4": "22NkQiucmPpPvW3MeGAp1SqGdJocy8aKuS6KzJNC8t3wan7jQzdrFTNWnTozxnJGxHToEvzHsZt2iV1PhgyDjFqS",
  "key5": "3ebx5JBhJ68fjCCPifEu1hiLPxL3CZf9mRgWA2qSJmeaaVF7KoEpP2Bc3vKEtXV1QE5452NrFeUGMXh9VG3agocE",
  "key6": "4yJqv9M15AnCV6rR3cZTqGRRTizuxkY7BXEaBnMQDJkY44oBe26CPPjcFcP44SRXhxJBcZdUFuBvrxVyWSGJcW6U",
  "key7": "3dqFzKKZqERFBP2AFsbwTdctcY8BEzREFzBjvVSbypvLJJ5GjqTKLM9yjoWdogZo2dmg26xYgNV2oipRM3XL8S4e",
  "key8": "5UaVj7HumdCAZ7xNQSQUirCuiGHVdDXzCos6swVQnNPX6En6kBsdNGBU2Ar7r7SyfVUWjjqvNKE2Hin1ABBHTVRP",
  "key9": "hoDp1UThQhrxReVBfDQkT2CZApsTSP7YbpFee3DS8crf24oTPrEAFk1adbZsx6EtbvNmkuhx4TMxoCKsQ49NkS3",
  "key10": "2m6oHh849KZfrvuL7AxGsdzKmmoHQPsk9k7GmBiGh5kjaNfy94ZrzHBVvEHdDK6gutJpqWB23WKduA6hTCZCSTQa",
  "key11": "5EkfCTi4LRXUYqSm2dy1VTBiFNqbMs8GWRPX7gw1trKpR3pPF3TiMnqCZtUTpg1i6fJQCoCDGWcz823hsQ3yRM2M",
  "key12": "qg9MU5cLvbUqYkYxsNdCQJApmRJRMCdLS3mAkoVMBoQ4JpWpsDjfzBQFYctNtNrDixxhT5prSZCkNhGXjikmddB",
  "key13": "3kZrcKELvtufsZLgcfES1vQrdQr2GZ69dbbedMB52XggQ8e6fpjD788REhYfaHHWmZdrJq7ovvFA9zWwHR64kWj7",
  "key14": "4sJu6YEV7sCZE6wGsQwC8bPiTZmbKnQ37bn3MsjPg2BtrsmM5BAQgsPtbJudBP7QfnA4WYhvWGssRH2KBRsitSJr",
  "key15": "GWDupvH2qqk7qpptMWb4QhH3gW1SFjTSB3x2ZXrhjTUoXbbawFYkP3BdibJCFngkGnE3sbCcuWfst2gUJPT19Le",
  "key16": "3ZpWaCsy7wDYxgxY5goRngjyupNGH49Mucjj7J9SWH1EcHsTJUP7n7N5rPpvKsbVuBoCHijghUynuwTJ7gzteaw",
  "key17": "4dNi1KrWGE3HpFpt19WyfP4BhdX3F2mkwbcipQui1rD9QjFhf8dyiqpiCN5LhDeXjCpxwU2UN817LF6JzoiuNXQv",
  "key18": "5AfSoQWr4NvoYra55bW7fgu2budyMzKUh5rX6qbsQwwCw2tUkvrtUEeSxhZ4twuMB3wsdSqhWQtee29bh2nCxL1i",
  "key19": "5BHLgoEdPKhrQh2XBAGz9mk96PNQW8UJXFHDhHXdoAZk2x5QFXFumT1Skmcvix816ijmTrJnt4FngFK5PZJxqxh",
  "key20": "51wKsjm6cU2GwuBhiykUV9Zm8N8h7VCX99QzyR2auxoajMrwcLm3MH7Xrah49RZjfZHrjESLHGW429fgx2nukSsg",
  "key21": "45uE6EJXnZvunMGJRKnAUqXQAE82ki1mvft1rA4fWTVChUBuBZzJWqox1fqSiYMkeMM8R1UW8ug4hTfiQ3UUyKgW",
  "key22": "2P28Kx6qFNbr1JFhqdq5Nh2rrFXTyvA1xgF9hLAZLAEnkvfWg35W13gory31xyFy3899tmHW3bj4vJj7snZgyFCf",
  "key23": "4athfXEmrYso8M8WbGjMEGnNXHW3YrSsdLajpbA2ofdkQiTQU51mwwp3bF7FiHjYe6bmzN5exqUtwb2jQ6ALjAmm",
  "key24": "dRDP3RTMBZaZUorRd3FGX4R51LSwBcQDRwrPxPQazZsFQFfboznPx2dVVvQ28yFoz92BUSoXm1wvpKCveoJ5A5z",
  "key25": "eapBd2NWG7pFpttjBE2MgTHmaS7bU7Ya4BXnWYMe2LSvJ258qq7gNFefKmZgxSx1V9Fx7GpS3JRFPrCHWSiysvn",
  "key26": "4Y2NKvpHHqmqfoFtT98Ar5uegJNbi1f6Qxdf79ZAnxo1LMZKNpKdyqFAhD5E9hWnyec5WT4XtnAtvMrGFgQFZJj4",
  "key27": "2mMbNpe3AZ79nt8M1TEpRXrJwhG1hzhMyPuSePUB56QMtG6BWZKZWgi4eCSwBzetqnUEdcthcicALM9KTYjEuyYg"
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
