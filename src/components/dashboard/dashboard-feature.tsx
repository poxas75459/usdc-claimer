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
    "5AN5q4qsVJD8rwuYUJC51XbDn3neQ7JmB6he9arHZPZCsoTnauRoxxtyWFkC7g6ZgDRhrr5Nk27fYsGT2RTyoW24"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Jiq86naeEeDN8WdoCY7Ehet34qQEPhiANS3Wf4c5gqHwCNtAaRuWGjQXEfUqpsWrhRajrMczpVMRSNyRB4vKiuk",
  "key1": "3cTjCt7p3Fq9hhY53rcJVpA9wabsLNPV95rXHBkK5UEjP5whssS45mGBkx4dvdvVVb2UG8YZsJ1BSRVm9rKbzwNu",
  "key2": "3wExLh9q6MZw7m4iqjZYdkXnFqeECYkk1LmBazBwbchJPgQuYYXDJEATiYuzAWUFXvYVWqRtPpUPKKpn36jPymGB",
  "key3": "36zMAQAm46CBoVCC3mZphqNav4tCx1UFX9LYLcKziCrF9JE3YQrB8jdP1b7KszVtzXtEgTh6UbRfQETsye96c279",
  "key4": "2YrTCiycYoC8VHyyRK9KqYrvNKyszT8z9tuUNWXUBdnLjYxamayDtB8P32vEdTopuZpTK237vTCBpYbfdaFS5bRT",
  "key5": "5KebMMbtmdHtyxxgttUWnzoMdtbvCZo9N6w5DTKT47Lfnq8ddVABwJ4YR6CjTRatMudB2A6iRrMJTno3ex3W6aR7",
  "key6": "32oxXCQ151UJA4B13fWDenBkyQE4KeJDDbm79tE8C4FCYdcBMb4BJ1zcBzV4zskw6z8AVggAVJH9yBL5tLyUFKhj",
  "key7": "3SiLWijw531obmx74LrZ4uv4fnMrmRF6f3uHgnc9Du4BZvCuMB4cSPrDmwjNc5GSvntVmAdbX3UDKRxZgC488MfH",
  "key8": "5hnU32uyr9Ky5EcA3Md8bMuNKdkXQrpahgoHKQa5qNjqxgrU7HqfwChvaajAeHaaq3LQGvbqTd58KUWrSmPkLLCZ",
  "key9": "66C7YoPdThAxQ2NCNGYq13mthyDX4ha31DWBukLAyka41raEkFVDuB8VTNgCgJ85oj9FjHWdQnDfKCMJX2PJNkji",
  "key10": "pc9qF6KHCmbRnTJ2jUWKkyAeRUKEkNLHxW2HWhke6rwDMdDa8gnfF9hPMdyBHWt4Q48rPrqG6TKQTRuVygdn2v5",
  "key11": "2yimUHSV4v9MW3LKFUGfe9Kj4mkPwkLqRhYVX7WCLU4akGnTDDhee3TBTQrmdtWMMngVGgW7kjZiF7u8j1bKVKvD",
  "key12": "2x94DNqPxr9KMte2szs2HdRe29XAR2qvjgQhNVQZEWJyww33jQ44PoHQKbWnQdPcxQVqQ9sAJCZeT8M412z9Rqbx",
  "key13": "DMHo8H4GhiLW2EE124G9v5gPHXYUnmbgATbPwcNwxZUYm2WCRqzuf6p3ptohuwoFw8bhv2WbCzHVDmaHEmRx5N8",
  "key14": "3d3vykkrYBY4pfKthybfYPKKGconzio6wnQhkabCyXv1PFNtcku9QYWtsSpVyYU9j83NwTtNday9i8voj88qvVpV",
  "key15": "5HUMXkouiYC16RfERsC3Ae9jB9JLW3YfMjc6aqW1nP3phv1ZV8uiVYAtv8ChMrNsMS2YdWB4Jee4X28CYeLye5t1",
  "key16": "5Uomux5Sk7Y2bWypqMCo2Fkoxin9sPUavr3DRGYBrtEXTc2Unky6TLM7s2Sgo7Syynp5SEHHzYuWUeGcCLFoNwiA",
  "key17": "23qCZkLD73PzyX1Nst8tUoKYeoXAzAVowyossoUVg7XqhrFwa13vQgAyULLqnm5VpXDUwmTkMCnu7cbuVmynyYr4",
  "key18": "5bLUaAVdumFcZNU6Fq18s89Mg3xVAkGk3Y8u65jwu28vWLBwqKs5F6N7WH7H1Dpgt28aFbQ3zjVNagx6mSPPGzPJ",
  "key19": "2sqz2oBszCezTU5Faf1DPeH9TbhYJ7RTAqFMB9zY3xzLcijiQpUAQK9J9wQeKyvLgiYMvV59yppUeq2cxWDC2VRK",
  "key20": "Q4iJu2SiBLDZ64uYM2cKaP22xyjDAV6HY6Da8xxoz56jXPPb6rMQXqbTdCqLpEVJLRiUh4Gku9KXjhUxUewVPes",
  "key21": "mL5YYkDVGhHmrWpSv4UE2Y8TCHffYavnTYzuiC7Z8t857su7xF3dZRryJZ7JHVHKk2NFzd5c2kkwv9msFjhsZEN",
  "key22": "XiehtxtC5vaVnVGTCVkaba53LDTVEpMMdLGhi9qpTk8Ayhu8J21Jzrj2hKXHaM23hePUDowqfHN3oSDCX6PKnPJ",
  "key23": "DagZkzrQRbkwxVcpEfUcAaXeNQ3cdEX6Nf5r2wMfdENRKzJSQqoEhYgAVugGQxGSnFayDdVeVyijt1jsbfcj5kQ",
  "key24": "643BxNdnJiUT8M7mSD8YUyrtaVcKUFPQUeFANqT6vKwq8VM5tYH7JrVHSt9L8xWrmceGLcBUTsqg8ukNq3R3r73",
  "key25": "4FmALaonvdcYnaxGsaSm9XFw2RgbbY5rd31UY6tqbU3bwQNwE2QWbyzQ6cdfuwLbMFUT7i32YdU2QS9UBCD4xqa9"
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
