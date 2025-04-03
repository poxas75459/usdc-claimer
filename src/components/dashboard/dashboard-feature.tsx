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
    "5Fru26BYogVcwWK3XqxkbxNR2aRrbMGPvamtSiictN7NonxGFWsz9qZ8wRGbfgNP89AxeifSPy5RPFWcMdrs1pyU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42M5riTKaNtrHT5eteXsrQKgTjH8VVuYydkcgGpgYpKvDxk3qFQhc37y2W2jUYwAAaNcZSN2N9QupTHUq7HvNm2y",
  "key1": "63WqTcPRFrwk2n78L5x3tJSWs67tZtquPAM3gqavP9y4XFA3YTbmX9qJpje2JshaLW7Ps2JZyrvzgrYovwJdYj4X",
  "key2": "4RxSSp22GgXDgZ2v3VLeTgQ8jeGPfCmiieJm89UcZHzTswJK4X9PyXjnxBR1qwbYxkiJYs3UUxGKcZzmGszBJyjv",
  "key3": "4tuxS4X4BRkLggWQotqvGqNucZN9k7nXK6DJMRxGkJiUwt9F5JR2zyzrBCLRmzg8hC7nU2Si16NL2PqjuuqksfPU",
  "key4": "41RmqHBQmXr5RC8uK8y3KbsinM6SpR9WgHNBesrBws41shJySKBz6obYzCoRKqNrgLDY7Q4wwCQUiMc6FsudwLop",
  "key5": "3K2tzBmSqPHhQp4SbfN2z626hRH4So2waMF3sgfNNNc71MYyzDVhzTDwfqF3djdoHaMgVje7vDBmLH6E9iSzmbza",
  "key6": "5vgPK9BDJQ4CEbtAxtBvPvgBysgcvSn9FgnWSBSE8fnsFSrPuyBC9YqQTBtNGZWTBYSKKjjHjgRgHsEvuqZnM47",
  "key7": "52Dxrubnbhrc2v9gmYUJ9G6FLx9TTCiSkqiVbHQXrQ1p1bbJYAPZkzJtV4pW1tXb6Hg82JrDUfYuYUv541VcT1M2",
  "key8": "5QC4Pvb8XmBhyLCoV27iavCjJhrQpUavHEqpMEVKZFSzA9nrZMGPb1PUysnmubkyZgMJSVfvo1FKqaMD1pcZJ5go",
  "key9": "3jQFog1gcC6yTtV7VsJmxwUMD9iJ5FHHv4SvH6woCGrbfJdZV1EwaF7rJSZFKtupcQzW2T9nwNPNr7swrwqoz4H",
  "key10": "52c7BbcTGRTujoeV7X1zCfTcmVULuQuY3CRcMF9cE49eYu4iLo55QQAu8JFuDPR9TRWg875vFs3sGjbosqiv4frS",
  "key11": "4zU7weL3fTKvYM15CqptYeswcLoaVqMjDJctVbVTryZBbwsRm6CX8qBF7Nz5KEG9DZTiPrrD3c9ASmjJBgVeSg49",
  "key12": "517u5SeRSTVHSAnuHoBBBo3Xhf8JpJiVW6LVNAQizf2zj9XBKCYJVXRmu5wqbJH8wb4UfmG8eZQUqqwLn1ywgzHU",
  "key13": "2HKML8ZE5c2GtRppnPBjUzDYgNVGt5nU1DjBpZzb9mhwWPbhWQLrnjZ17aUwU8CLfAP5yBy9Fxc4uXzU2dczKvZJ",
  "key14": "66CW4u6Vpfcn9nL2zSixHR1H6LUDVgRqY8CHjtdk9G51tJd8y2sJWUJpcRCeNsNmdzsAuCmd9ceiRT5D8YpqiEAQ",
  "key15": "4UHn7CeWpEEk2Wren9imWNCUVA9wFFJ3oqrtNzNCVjdZKUXnyWWKkaGpmEqTpjoabi25Rmk9UvHu9fhmhrqjJhgw",
  "key16": "3qrcjr4fJkJD2B7q7wggnwuTXAoiEYv2eaNK5qFXyXBvQd8jxZqAZKvZfWbfmGfykkP3YyTLiiPE58989jT3qqwZ",
  "key17": "5mCbpiS9MGnw1tWbVir8oGrdwuy79BJFqzqZu7hnu4ecRLREfVQ8qwuUf8cXpeDkfvSzGUxUHpCKYxEqttjX1Nwb",
  "key18": "JYgmmzeY9hMPGB4gA1yHrhGqYePgDJ3QU5Y2tLcxe6tXoDNCQNo9Y6Q2fXCA8uVYhxBPX5k72VPKcTg1WR7ZrTV",
  "key19": "4Bin14JN8Zv2W4hknxdSdbrJoYuCe7s3FtP8T8R7zHe7y6agMqJPqopdSAMEgzPwCZbKuvbPPbMavVSeaDJHbKno",
  "key20": "m7KNtbHEkyUxF3U6ZPayGFpXJWnnHUGP7AtzfWGHtjyNLK8PcavJXpGECsh4dwGacoqXGgEHPoc8D7uwyJHrU4Q",
  "key21": "5KYfgNzhNCbVEkcgqz6pTQpoFqQf2jSjuri8sUCxiTxAvGbHEUEyiPuCFXeo8PoPWyh2GNwsgfAc6SEx7PVZbzS7",
  "key22": "4BLbrVnpENzK6vtx3PRKo343LkMnf3LSMvkNBHVae1Ac6rnJ8UJvSRc5JuSQF8rvTnSHGyjetCDoTPpSa6CaHjGp",
  "key23": "2k2fehh6RnUj8hCq4H1fh6fXPHsbizyHj3hoNUHwJymgmUaNCGtxYP42xbip5PG5deLz8UqEjbap4Kgew9mLtM3s",
  "key24": "2a2RC9X74jAj9qggf2o5rtG8AyuFXACbJhR2keJwRxC79qfMNN7TskCDhe117ySXQyGRjbZveBmVkcSoHJ7qrZ5i",
  "key25": "3Y4hv3kqnhkYhApijdN3ixkz9b4ghRaFLqJG4B7nt3eZ5T1FTJKStzdwUTj8hcab7w8FADZ62zszYaSwcowHJxnk",
  "key26": "5t3HDyxGxAkWWRamtHihuZfx2N4nePNAuvhZ8VqQJuD5yZM55MpejbagJJ9D2WaXyr8w4WjUw8K41g88zDyKkhrt",
  "key27": "2ePiWNE6TNsdWyRPYpwGSaRyYMx5RjaPqSkpZ489ssCeoZLst7XGZtz8y8ME1vPb2gj3RsJcRq21QSE5BpXMLanp"
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
