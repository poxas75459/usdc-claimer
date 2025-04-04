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
    "2jNr219edp3qGEEwRGPqP4B3vecTZed2TANjhzWjKaK8WfRToxdApvnrqFEUJuUbSCCG1KQe6APrFGX6FZ7pku63"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56Cb7LaaKY2TR9XHx47hZrFwekHdNcipY4ffNVaunGXCqohuZ27NfaypFj5eDQsHYHcqQDYkmTMwA9W36anSvDv",
  "key1": "3FPTrGqmYf613Lt8yCxN7S8eoiQ4o8kKbTdZWE6qkkTzBFSjMeTgysF9a45kcCbimisGDHvJbsaaxVx58eKk6ZNV",
  "key2": "5RGW4GsTVb7SFwkhpUJ2sHq4XrW7cfjGF9Yo95bykNx5Dnc7zicR3AynXyaah8LKcyM7EvDme6EfspePejH8iUi3",
  "key3": "4QLQhgBfgMLpn7sga4VwpTnK81xBnwek8fLG4ep19Miu9uvbHq9XsB9PDh6BsWtzZNNNnh2tZC9EZWYr51WRtEh4",
  "key4": "8wAQKQkqZSEMWMaZ5sC8cv8xrn27V5oo39WP2okCnjvvwXGGU91KgwA2KYG2Qh78DPydggbWkdgMRHDyriFrYJH",
  "key5": "2KrigC4aXmWv4XYa6yBekFGB5WSD7e4v5rfE9vuE6XoHKtPcbmwmZ2CBzpz9bLLYJ6LEQNqcDxieATmJjf9qdG6w",
  "key6": "2kuhSMpWSh4GHkZpVbNq6zuECZzvSkkkmSZmjNb4aWrVA6Fx57rxA5MRT2rwP8qBD1kvp64GpQXwhdEzKABcC4t1",
  "key7": "2Wxf1bKwoY3UsFbYDnc5dzFrXaxnWBgKeM6aGa7CDaEE2s2ojo7MeQDyAg4g7XJ3cY9UHLyHrADjNrn3z4To2hVQ",
  "key8": "3f1DVefzGcZEnqRYjW4gXhwChY69UMxgrZKc14yDPyU7pA57kFMRiQ4kxYpYp98kmoeSY29JiokHyaRuRwvK72he",
  "key9": "4NKGPf5WYpPkhWQkf8fv7eikfnBhXja59HKxkHMo8qfqpydxk3HFdDo2JUMqCYaxLWjxYPomqxFdkijiHz8gP7H5",
  "key10": "5SJZwaZV1rcuxGsJ8jQfnbXSAaL56TsB3NntiEVyce8UQfJrTNNHET5jbpL9VE78Q1AWPBaYMKx3kHyiivfcb2fs",
  "key11": "5p8PSp9TEPmvTCfjvztMrqMzKfoTvYapYMZXK3tixiamFY9c6NXnjxxsDpNgD1nJj6ZjFoLZpZXWz9pWT6TdpqJZ",
  "key12": "2P7BDpCQ9JwT275nED5T4DGa46UzkLmXKsY3KyAw7eSuBY8dM3DSbxdnhR9djiq9xGLM1W18JU8jrNhTx5gLXJ6K",
  "key13": "Mci6oAYi8zC5DmvRP3S9oDML6hRihsFREKsTp9m66gEj4AQSnCVsh8txNKWFWGNARkRpgWe3UfaVcAYMsAofvPy",
  "key14": "5awDij4LTavGCq42pLp26XWvsG8KG9HuGyX6wNfk21eGN9vu8UGwUJLs9fjVX4P3bWrftGZdZvzaagHondifKzi9",
  "key15": "3imMa7pyovMY7sEbwWtvmpEX9E2nRLUrSFheLuYvGLJFCVQmVcB5YsKZK2Mm6xjXiwwH3Mz9soTXy567j5oiYdTu",
  "key16": "pusMVTy5GHdM3DZr8qsQL2FWAKYGJtLNQctY7fqHc2LAAYDchhKkZyogCpRt9xxZ2XXpya4kC3HZFuEJc2gDbj6",
  "key17": "5swepPkfevT2STDMzgfxNpdk7ts1iF5wuq76X5PaZMqCUiEQcxVHwTw1vCHR8Ruz4NrBFfJwn5epkPSXhwTaifWZ",
  "key18": "jbRgwnjWNnLdmurDwG71EbeUhFe9Tz139dsLN3RAz2jK11hrqWUsK3wteUxukWLvEZY1usf3NrYREErNKrwiyLo",
  "key19": "48Bjh549etGUFsBaHrPPJDKFmZDuN9P2jb5pMd6iqZmX2Jixatesm9MJpMDMZ9Xncwp7S7XFet4EJtDVPznScAYh",
  "key20": "4uWfSMVN8faYnotXDitGTcmeNrxvu4cTubLuwgUPgZegrgoAtqcHztAmsHCXtwV7ZH2eaRjvHVBCMY2fVTMoC3Vq",
  "key21": "4pQAvt1RLngcPwNqFB3ov2WEp2YbuTrk49yxW3biqpZrTZGYYuY9oAXw53m9zCfCP4pkdtMZn5Nbg2h919j457Ny",
  "key22": "56WaBpccJb5QMohhYTHNyTsPci3Ej92xCKF1eCPWaVaFBMS35gwwMUYY23VciVvgqwNfS7VpH9dPVreXQHPqvyv7",
  "key23": "3mxcP9a43CQDY6czD2PsmcqnK1ixesV5j6J32XyaaQbvHAw3jLxEGRuY3gvNVouDM9PvaePbT5nNrgqP7FsfZJ1z",
  "key24": "5bBqFdPEPLn64uwD3fGLSES7Rn1bqqr6ZYHEonZ43spFziy9MAU2J4g98AmEt4wMdrH6KzxCyYMabYNG8TGge8ja",
  "key25": "hxu7c58GG7BQuPgWSxttpxt3zmzdsPs3hzvwSmmtv8MurDvgHom85UNFYsakUXp7ejx8yQVKzKTpqmRrKEGDDG7",
  "key26": "3MfztpwAF4iXJVwTQ22PCXYEwDZSV1WNQ4DnLqMxDKSXrWc5BJbZwqc8o1NfxPgLSGTn8mrPykZBDrNaNgFLwawF",
  "key27": "52B2bDmKGiE5SE6MHzh9tXeAgCyHov8VJysaGAtLSwZwwSat1oHZro8UfEy9cnaRDsCAvCbGXw314yygUuWow6fZ",
  "key28": "oxwxZNMC9pm1151bFYihEaDeEtUVkQnLmfZNS5oN3M8fxKLuxHzc8MyP36oQPaWKyBVuvyoFJaJtmEMeFHdM2Y8",
  "key29": "4G3gDqi3A1zxSug1T95M6VD4n3s86FZz33FRr2UcTCaWsWkqbJUfjjkmM1XYiib25ZBd7YiBUJXyYnC3uugGvAMV",
  "key30": "4kWhU95UoacadQMspYFZrx6LwV2r7V5qBmShs7nZfXjzY2eqxcrr9Md7mwtJHCNtRqkom8ncGZsSmgdZFUfheBBS"
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
