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
    "3oxDK31AdrcfzFKP2rJ9jYLk1QSYhEYBsM9BxLh7ZHWJ9GYA43KhCKRU21Pdp9gfLGUGhMjpG7YFsm4dJhnGkLPz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59g7DiuiLVv7MYSndSnzt2MmaDLYuFpNB1ywC67wGsYDeyAHjP9RRfovvqtEoSrpTNp9aKJP7TMRM1uaktZit3Cc",
  "key1": "5oE7LfNbEARyNV58HwrZZ5Hi2bHF2RSvdHkqxYRbV8CsoCBuYT3tvDdfojFJumhDRm92ei9d3cj1HMVVL7XBFDzG",
  "key2": "vq2BYC56GXoWFkD9PzxDpSsqynFDeGh7rvoGZz9emfHELXAHP3szoVBYPfJXi3Yfoor92mYCf8L6qqhGu4Xo4ch",
  "key3": "2t4eQq8NcuyC3npJvjLzrBLh7xXXREqdf3g1LcFmXpHAY3Q2htiPrdwfgYeTSY5nxD82TAYBcrqszixMmw4TckjN",
  "key4": "3Qgxud7EWrY9hMpPgYajpEJuzpACP7pKK5qX5SxGJXuxvMMKGk9Sqbv216mknZ1csJUUzvjPYhrWdyT7a369rNyn",
  "key5": "5NrRbjNoHZS3FgLQYPaEHV2sJWwEdKVfjmDK1g4tyBAbmNpmkWMwJ1H4c2dFwW3PxLhTmGyU9cFdz4caR4VjxEoV",
  "key6": "5WAUBzTWBHDNum6zmUdCDGUsgWxNAsG6QDYktgpbvcYPyJ8U7yVUB911BAhhFc96TXdyy7dYeUf9aVfsYVJzD4ev",
  "key7": "5otKFU5zCnhJkqJixkgLfiW5dHrbxJEp4fjHEVagQReNJoVwW8geZERwcLpCrCfWnvGeFQx5pkjeYkrL8Csc7b4J",
  "key8": "3xf7jo4RV9mrvFysLXQ4vivPjq9ydQVimts9AkwiAheNbByFec52JtB5pkwoFNGurSg1L3QV2sj1dEapiRWXRcnY",
  "key9": "DehBhM54z88zUroHCaJJbFhU9fBrWnpjWmhrmQmZaZN2bhmZ7XcvrJbPmxteuD2TRow7GSTD41jAxK1uVc4xUhz",
  "key10": "64WTsdpiNmPuiAqsTYenQ8py9xXUfYEQjVQyKPeHpEASnuenNKYivMgrTSdVFkLtZLYJbUEsFeb4HgDjR9pJQ5bL",
  "key11": "5CunaXq2NX6KJ7eigzgaP6CDuXS2DjQwhQZ9XL6LWG5BsPQcQ5cRSKQBdfaT1nG4NhXU28cqax5VAnx5enLRkEYo",
  "key12": "2dRLE9AZ5m8hr1VWo4FC9BgzCCKaaaMn4N4RR4pfVLFVzZaf7toZqj4kSnZAU7yReg4SrgNuffAhu3edC2ZZ6Eox",
  "key13": "2isVESXnW5has8csFn2P4rDD3gpANiM3Rk1Z7hLwH9i7XAaU9phWcvqEEwoyszaFvzTSndKrMSJcQ8PWiYCtFZTW",
  "key14": "3K9KYCo2VEWCvT4MqSGSsjq5g5SHNzP3Ho5ePS9rRcK1z1LiohyAro5uYCQR7L54myZj4HWJZqV7Db9TZDTGgg46",
  "key15": "4ThURKFJ6xDev2GkJTprDyAvW5ArVTM6PU1bN3zMt1N4svpMNFMtYmDMCkatqhm56ZA6mbaBunq5Cth9rrCfnBqp",
  "key16": "5sN8ku7NY4G2QoWyHirdmBEhLse8XTqda8wTkGXUJua1KWxcG7SG4W34aAVDKon87kacRVMGjPiYBb3VWGCmZDNv",
  "key17": "5Y1sLLdKaFeB44sTYR5YDThjhDkjddjuLwQx8Va8mTsmtZe4BUVQNUBirz3sEzfXCp5rmiZge2JjBA2ERQocYMUf",
  "key18": "5xifEtGhnQfQojdpPC9jwZPrdvvna4pustBwzJyenHWMsysLfm2kTCZsn3NoFtQ3AExsZPFsFJaaMbMZcxwfUs59",
  "key19": "56xGtJkTaDty1MaxHERUu216zYRW14wfnDGf8pn39DLaRkoVmfnBLpQCY1MF8rT2STj1jacRhqaCxGSMzHPng5Sq",
  "key20": "3PW1A7m2XHp5sz9dPYdVSDPVoJxtE4EGRvpCSdoKUvwbZaKk8z5CiK5a1VU2j4TGjNDSu16ay7VV2EtX6puVxj6W",
  "key21": "s19x73kdpvjSX4PxUmWvMTFKm7ouxLXxSprkN2xgG3aceT6T6TJkFM5amKA4Uu4TYquGVerPLiRqm9dvsVKVaVx",
  "key22": "3jghDocS4Y9q8SxroJPy34oBDBHNQPsUo3X44LK1artsAbz5Gb6w8zGhxSBMypBLrBLWwjE12Sh8gP7WubNw2qw9",
  "key23": "2zMP41MnVceeFL8KvZQkEgx516RgjaGS7Epz7nsD1W3tLhc492BRAgrZRKQ51TLyw22moX2vb9DRbuHmZDbQc4d3",
  "key24": "5WacLhEzfGdtFz114KpZ5TBRxcAHWdR2D6PG4ZFReLoVqLU2uEmZg7idEUB3Q7K3ETvid8csi8mK7oxMtc9935wJ",
  "key25": "5F74TYv1xWjYS6h8dSYNweqtsZWYU4ugVZxCPL454Xw6U8Mam8XwqNsYn5GWY4tBv3DS4uWTpL7nQa8iw6dUnmuG",
  "key26": "4xK7HQxEpz8aav4asWawPdoM7c3RYMzqqkDf3V5RykV8JAcMH3vpAXEL7cKfX314L9pdVjLEPMuM2Pqg2Pr8Lbdp",
  "key27": "3WCSvK65eGaC6sbXNKtGZkuXX5WLG4wiGGU9korwFY31yWkka4jvcXDrvrgbKAScpausG2mMVVdju1mK1FKVT3Zu",
  "key28": "67gMUJTUyxW3eAGwQhfBRS8XFzwED5VkqK83YosdAhjaE9tKKJSy7F8nbCYAwoTejq9Ny8SUF1Yfixe9zXjhxgy2",
  "key29": "Scsj1YRc2TodU5T26onjRBzAeMJQiwe1gg8A4cv8uBDVocw5j6fjx3qZsTYvxUCo87gxBqYu55nEFnjUiAd5wty",
  "key30": "5Mk1NsBeV9KpNFFtNQXZh8JrAgAs4VCjf9dkKi5gs3HgMyxpcXC9svDi988qzUAS1W1zXwp79bfwqVNDyGPEk5dN",
  "key31": "4UD28LFd49av27AtibYqbzQH8fKwVFk1nDmQdujmLiMw8DPuGUH8K64V1pKBt3opi9C9Rq7BikaQdzAcDQ4hB8bP",
  "key32": "5ptFPnRLfTyfoBp15EHPQREhsiEj572kCiG5oJ6KcQHrbAgAhCPZyis3z69ezCozsFpVcnSnnAB9ik4ZedEA18fV",
  "key33": "2XLsJTXbD2AzouUEL4yDDdvZkj3tvAqiaMsuRU49GrGkZUvMbHporFaLk7c6wffbhs9Fd2K8EbYhDkCXbHcRsitd",
  "key34": "3syKHqZwV3qvi6PnJfpvhTrQ3qGw68NTrVw3Kwa5rrApKsCd2QTyMiiZwzSMxG1aZnj65rTDkEr8Bt22jexYsh5A"
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
