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
    "hkeMVQxwjfFBBG3x7fdU58Ptvc4tHkaBcHtFRyVMjuTdYeSuEuAJUJV2gtodhEM97raTpRkPjw74tcB2XgCgPwS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ziw6p7YuEaP6jo17FG3pWHpzUS7eeXcmTLYrizasGUa2FBXRnLtXaUcWe9jfwu7mnHWBoPFU2EMaBNrpQA68ki1",
  "key1": "56aN5EFKMcmyx3UAJrX89YGZU9HssRWEY63SZK4YnBD9oisWYDNRrQ8gLMWZjQF6kGGN6YcLmrqq7fqEfg8NEMnN",
  "key2": "2j47UqA3MbAwzXwMz5PCYfqT5soT5bBPtyF47pCTREED1zZhERkPX2hG2V83JuVPyyx4ydUvsSkAJtnL1JXXit22",
  "key3": "PaMFYDBssL5B8HqiuzNi1U4NVuwcozz1d6NqQiB1xM9VSJtH77MyiFif1vFS9gQwDepRdVgos8HG9EwgELKDD79",
  "key4": "3KEWxaGAtELoMB5Ag1Vd8wyua6JuhLzx4G9JLTCBGUo6zqHsN1uHFVhnafmHNdfQJjRcTZX5wxGnTKLYiEMmSydj",
  "key5": "4vuiDwrDSxtT8tJmnWqNBLf5F2iAbVNosSTGzyxoT9AyD4ox8LxHBKm15HWYVL8vtu8U82ZB7N2dUkrv5V8z5syk",
  "key6": "311fKHFTszZH9kypdScrURQr2EwgrqSJ1rsazGdHLeje6G1MNaB8ggWJix4fsYdF4wKdfcNiTiyK8HHp4fkzJyy7",
  "key7": "qECB3A7UbkviyxWnzaAqKDwaezedyPdrQyTHUwxxhMS75ypVt9gr166x978HRvdTz2z1zm5SPXvAnTL2kyVV32J",
  "key8": "2TJnLkX8ZfeMryCPXZ3bDnhAvCcSwH1hPPCZQ6SduMThHa8m8ynsXmHHXxQDKFPN3SincFNf73BrBwbPLcxTC8bb",
  "key9": "LHVUq6Vgz2HZKJnvhVBomp5aiRVQw258F5ke2QuBMTAuq2h8tFNS4sULN5fQrU2TCYtrcou3JPa325DpTkz6wy7",
  "key10": "2q8VojAVZ5vDyD1zRicbhh4aYspw4v4cekesMa5WRKx49FssomCUsKPHrDsuyM5FbexPa9W4XH5Dxs4XbmEgA2dr",
  "key11": "25peX9JhpKynnfdGacW8F8h51fTAiDNrPm1jDKHEFEetkGpD6ctjxAdaV5imxzCiiLQWZi1C1zsKzEDzuF8gJZ7X",
  "key12": "EKCLtmeUwp3EGtYs6kxVojnTXTRGAqGQACmZQRtJAjUkwLqnE1nxhcZwFwZUX84Up4wMoGPdb64omkLHDwnFP3Q",
  "key13": "4EpLjDmbMojnc3WuBFDWcpgEqFppBy6A14cPHG7btuMkLqEPfZVpvfyy5Gj3jnieYhWDLWwc4uCK8Ui2x2dpUR7w",
  "key14": "37xqN1vroPiXZHBNPMu7xqgxomMdGRpRmhLYb8VEB7P9XXTvYQxLYftfJAnGTn2zarQUG5Nrjg37hgjEB67h8AYM",
  "key15": "CnseNUz5KkHkN3LBHzrBRYH7KdAD5VvzfApg6tC644YoF36m5nue5r4ok4Vg6AUje5jUYgj729iJevQGe16Yu3o",
  "key16": "125UmEHdCHcuZpkjZMJkQbzh63UBXRGQUpnsDLGVFX5bW3k4XadgaYn78RJ7skWKvine2HGvgx98qB9DW9VWMQaZ",
  "key17": "4ZXGUSUtGc1tyhsBESDg672sgXFvDBuxzfrvEHPZ1LMTpZ3ZR5An7dbSx6sSSeYnyLZFvXjsgUisntU9mjrfBBT6",
  "key18": "LM7NFhgAfBqCqbkDmb3Ce7Qc3NNaPkSTE7iknyVjTznwjwnox7AoWLGUyNzQ6yEwdqD2e7p3RRpjpazD8SVTBVQ",
  "key19": "2feJny2ompBv1WjacNjohYzXUUSssptKmSEQ7VTfc1cH9r3ucghUDHCQym2Lm1U6ayjcWo5TvBgDrjXfaPovzHzy",
  "key20": "2XHdTvvGNvkWgheCM17PM6MksMAhsEzB9GNsUyWr84HJKmPPAhMWFgPL9kJgPaUaEg9Hc6Bhuzy1kSK9QWhAyYoB",
  "key21": "4L2GjMuwN8Ym7MyoQ1o7NWSfThpgYrNAxX6siqC8zvkopFjKjyzLC5bXGTqhU72BdUnTpEA4c1B2EgjFjPX4gHsg",
  "key22": "5tJXGK224CaYiwDQ9P9CzbuXLrPniTZ5NPEdUfBKdbDF61erCZ9JQv8FrgQ44KTfJYTpKKnzyXfF6TUXXWyVwNSE",
  "key23": "4VPkYBseW9tVg8nPpHGqsod6NwJkBJTiUCfKy3XTLXMSnDeQJSkaMuzLjaSUVcgNzDyEYVVvER5S4a4snbStiuvg",
  "key24": "43txJwfKsSVA8SM1yFWEff1RJGX61T8EhjK9DaSXnmuXA9vLH7GSWD6nHFLzdL13ZUaNkLQ8CmXiLiNSL1LJ2gtY",
  "key25": "KeBoL4y8r2qfnbNweXPEz8WanvB9J3pe62rwy4ydxZuMdm9qMC4jkTs6f9hBBue34Fae1QU4KbGgqNUqFwthvSs",
  "key26": "iDUGTbMuacwHtTnnzoxmUb4JYhhWSCUgWMJ2ZrD2sxMuK2bfSXg1koe2iFwaBPV4BoeczQszzW1zz4BjqBrpB5R",
  "key27": "2x29qWch1c6fKSR4gY5jNQUrfoMryycGaXDoiQuEK5ZPUy45q6q8QX1EnU8K17Pq2prV7c3rCx9VVbKAsytZX1x8",
  "key28": "F1TJ45ruTtkR1C5HvE7ndxLBbuavm5Es433zMsLkW7bH5ggnbrMoCt3GHJbztD3ygX9Mje8spH1dT5PCqovksFh",
  "key29": "4sPSEqdrykopVWBK3yEFQjM2MDKDzmwx9tdFmdEV8hmwuGqMzHPt27oNTbzu1zjtgPksi1HxrnG3fKRzAbLqasf4",
  "key30": "5m3rcqQvwvbXUcvF6GPTqStHCL7qwtLNmgPnA1ty9pjao8A1ejXHopsz2Wp1pSQogvMZVhCDwHbtxitwdfnPAVyC",
  "key31": "3qR4XXZHo3kEH8K4LkAvCsB2EdrJc813rkHJcfTjmtbDCiJo5WQbaT83xw7mcxkcrKpzbLgKpQ25HgxhrDj6SveF",
  "key32": "4BXgyYhRFXPxULgZhJjzig9hjhujVipsyEXDa3pjE3DPqVJ7U9iKBG81mBiaUK5JxPX2BWqZ6iJvaFhr9aGxNAUR",
  "key33": "5rhT2N8qCAm2JMDf1wNd7nHvfbUZVmX8cb1cNgt7HuucHQYVZcNMG6TnyPNgZdAmPzEMN59RwWgC7Qa1pUS8HoGM",
  "key34": "2T7XJvEq3tCs9yzRYbb1t8coYuVTVqmG1438gof8V2PwQHUPTWnDLwYjuHvJXje3QUyDrwYTBHiCLRxHryi63MA9",
  "key35": "5JrDod2Nv12MiBC8Q3y6CLbKYdPqtU6Dio9c35tyGbfRU65ksVSV9cGphzV7YVhAB7xjn1uXnryE5hQ9zT7kM1fc",
  "key36": "3uRa1djpg7HWfi6N74Ciop6GWSMS3PTwQRXjimy3qfFSnPzPmVounZKSSNR4sz4sHByr1MVvfEF5EWqxNYpJ4urM",
  "key37": "5FMgUnt6bCiLUdZETMU17L3cw3D1UEcQGBWKq8j5gBydEhg17GrZLx6EuBRUmixhwRJvm2pdRSMGsebmhPggevSF"
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
