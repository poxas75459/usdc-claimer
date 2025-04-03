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
    "652MQrv7tq5YHa21wg9EsBCGCysSXjHxQxdaQP32Pc2dmkfpDRwPGNbePv9GihtnhXudnRAW4WFtLnizqKu6mx1R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZK1zoasUm9mzQZhTN3Q79DDmURcK7pyjds9hPw7UWf2aNgsGgma1vumsGkkcMaN1KtkuF1ozZ3WuR6dgaiYxcJ1",
  "key1": "2cyWF9NbJt49sguqK8T3iA6s9jKWPWVXh868YoWmPnB3LpwxwDow12wrL7vvp13e9zBbgjEBQaCceW3T839AkmsC",
  "key2": "52uTouEWZPxEDbJydDr3uzP71KL1Y9cUYRPCYCq58uzg2gLaSk61u9NNeoufbYzeSV52jXMesSuTmSLuinkR9sHC",
  "key3": "4qZwLD9rsCzi2nFYdp2rY3QPJLLEtzeiQqsoHKDsRmWyFXjgMTxaGsA4ppTcHkn1TkBjqytBaDswvTh4SXaKGc55",
  "key4": "2eHQi8QGBXKCp8moocnUecFRT4Pfs87jUYKxR54eUGY7ym3qRtXtomWP53upYgTVfRW6cfeFEo8MrCgA41J9Pee4",
  "key5": "5Ch6FbFmtpgoqLQbW2iR45CwCNizdYp12N7kysL7hLaMg9TvPux71nQTxjgZREzkiCD1dyrhsWCH4SDjy2ZsdznR",
  "key6": "4g5SaRJzLasJvoy62Daf4jai4Szn5Tc8sS7zEFrvyu6dfx6rtzYaLjWdHTYrxTdmjHBVY5VBvFNFzPq1hFuRhCZ6",
  "key7": "3rtGtUaSYXfeHQfdCsHfJqJRpP4nvs6AujHB5Nau9gPVX6q41xuN6tygLEoyTJsE27UsyLsJjfmTr64bioWzqJaV",
  "key8": "k9B5KBh52peueDdCqNP7GUeeZcVFs1tdgXEFrf348REEpmiRRrsTVPkUoEztRURwDjdjMgTBP3f4TVyEbbCPrMn",
  "key9": "4zcLwtv6YZGM7zNjAgUDj7j4WEDF8tRCtaqUegChsEuUwLAnrjcAVioVzdzPan7Af2wo5q4sWNyzmT814nebS2jD",
  "key10": "65vdRPtrqhN7RBXUHeGaoeUvHRKgbSHtjfdehdZfyix96UbTnRRUdn9BK79Nd13fK5kpDhKeWRhS4ApVyJjVWTbL",
  "key11": "4r1gtPPvegPreigG3KMqS3R9tCbba3n3LAc2DHo3zhtHVVQcvdDQ7qhFXuorJ4o3SVurA5WHQWVZ2zwN7btqDH8J",
  "key12": "5HEEUY3xYCL7h6AF53Xc9Rji4w3MAChT7nvEG9sivmDtTwvXp8HYFV327V7gEiqpTrVNe2TWigPeyNyHF8YnXo5Z",
  "key13": "8eMRJuFTM2b6QnggHmJUPLhAqyi8erifa81xp7Pukcwgiuc4TUAWtggeRbZMSqNG1ii2PQAfyd19ALoHqcuvt5x",
  "key14": "4xWM2iDiwaos2ud4t94r6mh8xD77z2gM57rnEq1FsRZaBCZGYRYk4cieZtNK46rXcHPZZN3Toe9Tgd5MiA9qRQey",
  "key15": "QeUoP35s2bzE5gJ9gruKr1qh7hPdpHwcZTvXFQ1cEZLN7WTKFYSWCdPZQSMNJmvSVCCUw6SVLFDuxZaHjMjQSW6",
  "key16": "ZsRY98gcmHyAUNJ3GtCL8X1SrtnPPN3xPCj2hdpgNWBA86JKKhwxrdpMKvKE1VAR8LH7Ba9E39jk2Z9vzoXGx5e",
  "key17": "2L2gXqGvkWxgzXUoN5ak1rAkB8wWNdSJ7C1FDrR7SdKAZDYQBmmnSLjUF98oPmsz8A5sa91xoCgy42pVaKWHtC9j",
  "key18": "4GEWfZ3aVebAZciXHESZsHe6ikLzej7DwcD3U3KWTrh7btjNyEjDu89c3YMVdTUwTsavLv7GaTU2PLGVDqzjiBvr",
  "key19": "54HRzDnyQ6Fn5YL1iEBMmRcMgfYZ6jryry2yGfgpnDS8xTDDLhvTm5ZSwUvYqT18pmaTn3NqYEmkUMNXDSKYCgZA",
  "key20": "3We4es2gpKX1KAwJFGG2W7YgoPk45Mv7BgF4THXGSd2bh2cTRLvfgcqgCo1UzDAyhPyU8H35m3VrM4iKWss869H8",
  "key21": "2Uco7f9Mr278KXzkUrKoM7mTUroLAeuvyfn23XqhMiL2TGb38dv9MK3ZKrH9sw7sUPYogxL17Ec3LzJ9qhX4eifG",
  "key22": "29z4tMx7LawtsUjYDjWoKMDYq3juLQrrLa4G6F7wxYJjCvoypqH3G5g73GcJxGVsCAjD5wbyDke3UHNF7M84ftFa",
  "key23": "5FrzEBgQjjFDEorW2Qgbf2nGiNoALttrpeYSh7na1qJrzDPkZg3oiYu19Q15QrShgDsavP4zcQA9CJNuAP9L1Wce",
  "key24": "pvZFP7H3DGByQT5qdDC67dopba6qPm8govJdZNUVBwYbcx1mtnAMugGY6K8zES8i8nx8BR2jutExHPKTnNLJyLL",
  "key25": "4B6iCq98SAZgo21guKtosHfxGwyNRigLNfLfeZw7ZmZaLSmQhAbrhJFtGiRftPpJN5zxkari48EjhbKE6gWPpCmN",
  "key26": "31HDrVmtsd2MBTemKsXKpG8shozK8wDK9x3XeSnwBePuecwKDAhmVQtTiink3gCBZKHKZvZNrwQZJf6Pi9yt3YAE",
  "key27": "2QTeVUzYJJX1WoqqjuELTLAojXumQpS1ZbUCZjLqm16y8vXuuDpYx96YS8e4rhSsKCqALGCkMiSWod5cFKytfQQc"
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
