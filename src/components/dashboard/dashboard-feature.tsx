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
    "2BGx5iA9ryZpADrUF43pL91Qve6WyQspt3ZU86EdDXKMFR6ZqfMapC5zGBMYgPBFGfRYFTzSyYNxi5FXE1sp7MNS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "u7GSzzHpDrD7GDjkYdhgb9AAUPdaTbXvsgdzVFjjk4TeLoZmtwZ7ZpnTHnUocMQmn2ixUsESeii3gynfGPR95tM",
  "key1": "64Fea7tZc3p4D2UBARS4iKkUvH1zcX8yCwDXdo6YM76Kj6Qv79XuUVi4rFAueFvMDguLKaQ7ULEyRyveEm7Q1Ppw",
  "key2": "243gRgugCjuBWhdXtRoo65PwzhvnsDZ4tCZhYoEfAAdKn5BpawCj1ptofMdBxx6DULogP4djfj4M5DcCJWoRhRmo",
  "key3": "2Y65752cHodzR9DWG8JgAQo9V882kJfXMwFmRQzLdrEoKMcrb2ob3c4VuvTXhHMYAx6zvLjPHqUdiGgfEz1EcYan",
  "key4": "5sG2eMPDVyg19ro9PUGuW44YfYRh489AFbs1VohkMNAa9eTEbeiqnXqA2WemiLVgcktLVC31LWiyenHrz4FkQVCK",
  "key5": "qunnw7FjS3y6rDrxNUTkxSqzMYnDGepCLJApF8fKTVraeP59miM8YgsDzNctH3gaU2iMscRmiBoVghgAC6Xvd5a",
  "key6": "39m3kFrKn9hDh2Ax4AMbSJEs1P9dvEkXyVcPPeNq4z2G4C35c3DTbdqMjXMmLzyHJQkWJZ6H6ao5m4CRU5x1nLw5",
  "key7": "va6BXdrqhzju5u9ND45FppkWEdXMQbdxVkZJnjJMy9boSzdpKqP875HGbW54Vci4nrecwvA6NN8CWiexauHYjwa",
  "key8": "vGaB3oeCCUmW4CZKj7rc5gnTRWkhYiCYApsueocguiHPdqkoW5yk65M3n2hirPfdwh1ThnWU9QrDPNUjbTAedHt",
  "key9": "fgGUnnQehbkyaiGjwsn3vEYVJrKNPePHsgn5mHTv44KES9BfCEtrspsFUsvijBtctdDK4E6Yc8gei4XLPjXLBVf",
  "key10": "36ePi2aizKy4fW8D2kVAyLSxkqfnXHoifDF4P2vyT4khRNsgKoT73JyUhf9fyX3NhUtG86e3U6VKsaDSUgKDFzuS",
  "key11": "3cnv1LG4fFEbJssYArVdWojP2V6iiukfZrLt6HaNa3obCtdDp2ZNbuHqfxFfaxmSKCb2Tzh4EErSqba9p4CkqB9o",
  "key12": "4t1BKt5zYy86FUxK8fPPK9N5GDv6zVfrsEtPi77MivL6QRMGPwPgKaQRraDfMDL4PjgcwqXPjrA1mCL6eJwUboSc",
  "key13": "TJbWf9apVCTY9u7Hk2Wmur6GabV63ooNfjScxX7MRAYRmcbVqGDaC2cwugMqbfcRnwE3Jo69dM3DM1LqN1AA9XE",
  "key14": "3g9bC9wMdHTEdBQjuC4xEhQpva91MTVXonmoJDdwTYviuN7m7gtdqpRmx5s8CeFJsQAiS69eMGLJssXNtKPS2vxe",
  "key15": "37ERHn8EPKQUTuTt7xNfoYQrccU1CQW96nGR55dRTieWwqWNphANQWw9AS9tetHCXZsvWXgceraDW1RtmP6xSNrj",
  "key16": "55gHaXNPsW3btid5dBTgyvrNUaiKYGpBtCWsbyUGbahbAHu5vSjM9fbc5xMc8ru7Vg9Sj97yoyF5818vhu14JAz6",
  "key17": "5Yg3hkeKytMnn1pyqsVaiN5cwpBeXoPmRRs4gGcigjSwM2VsQWVzL2M9nuVEkdEdpKHgfRRPSPTfqEUd65nCNPju",
  "key18": "2PX7hrQTHCUXUcGuVjnuRoRnugGgm5fxk14L7xEuzUNmDg1fLSK745RJGAjkB1G71UbeJJAZFfdA1FUJjw8mG7N6",
  "key19": "3g7FXwphGjDNeR5VcUXsjoXzVK6rhCazdtUjCozhqV2aiYcSWgLuMotNq1vhJmudptPcBpPtqhZDzNGnydiiEaFq",
  "key20": "anFuUpwK67hjRJV1pasw6mum45XM8LJgY57emYvyiatKoC4qqUF56cYD24NEAg1ZkE1tUypMEpyg8Ys2N2GooeS",
  "key21": "4KhCV57Q19YctgU4bLzCH9GnUxyid6fE3LkL84DxxmK97LBFF5BEbA11CBg9SHvxtWqe8JEAXpznUvUCceaXXHxz",
  "key22": "bYvGdDuLZT3VAKidKqKdoyqYMJXZcB5pVp8ExwFZiFGFA2yz6RHL5KxQ99UEztMVGvcy69REjTqtvQkq5Hafwbr",
  "key23": "2jqDxeQS41H8NfxsdVcLLfh3QuDAS2MYi2sizVqGew4CDuEMnsvbzecPuEuRRsJnWHtds9nRgGi3yrLkhUpTBCmy",
  "key24": "UQG3h7mv8vviVWxKWpenwSa7xWRyGDsespq6geXKek4LU5a4xmhZCjN3xPfv2CkQ2YGRfaNNjT9G9F6KHMNYGdC",
  "key25": "5jqmNY1dL7NW1QepzAhAtu74h17J3dLfNJDoY8XtSCNaNQAK824QS9gTHdcW9s84UWqhKQz4HZKM9GVKSKSwHsDS",
  "key26": "47aNyG1Au4bbPgieH86RPSdEvmnMdc3aq52KP64yXxbEssXv1rfN72WLG9QDnTuEDbsinE9kx5xfvS2qCwCdBs3A",
  "key27": "3JiC4QMesUwFcGF3oodN5dthoxCzfBvpJXd2CV4oSegJRae9oai7tGV3K9AEseUB2cdWazwrP6vzHcNo666AsVzb"
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
