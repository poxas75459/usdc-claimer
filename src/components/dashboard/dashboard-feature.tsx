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
    "QFJyjnuuhFcWQD8iCRZZ4ppEMjiVFbit5J5XCBEMZRXKLKuZGo2GSuMSFbzYTNaSo9Ufiwf5thb8VvHQffbQ654"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JnomE3wL4gTfPbyzXYEB3riKGrC5xA87BipWeFEn2pV3jsEvfCmqJXjoE1GnnFiTvY9Vck1HpWWGeAZXXE6oYSJ",
  "key1": "4Cn8yjnK2q6eLeabEsNiKi2tXNrSdxZjuetZs95MLvBCJSGLMeFWV9q9QafHeNoFQGduZp3bV5ciUnSDL5yY88JL",
  "key2": "59gycTwxGDFwfaVdLj4rtS427DJYLkMUCSY677s9AaBDaZZURw9CXekoNGHLzHiZMxVSbsgmai97qzjXJ335pTT9",
  "key3": "3gF1EZAsyDP837DhKeHMwhLKBKminZmaXvKJU5vHV44TFRPiiPX7pEqsNuTpLjHcQZt9vTqRjzrzegcv8U4FXEs8",
  "key4": "4MQZn5fm2MmoCfCy22QubcTyY6oLmD77nEJvAJN5ErJcQkekf2DNTJMmhU2jBKpPmsh6zMVH4TbcuBhkHKSAUrMh",
  "key5": "3BQ7bw2Yw17UAippYFry3d92zpGXhx2JCWxcpp1HM84NxxHPyesdWtAygHXXgGEP9TGW49m4kzKNtLv6iLWW7tVq",
  "key6": "2CYarGQTASKnDduTCEh5J7D3kFVPaR8oNBg1JnL5KhtLUiMKKoSoZa4ECDKn4R2AKFq1tGJG1Gn6huQKzeidk1DA",
  "key7": "5pSGDHE81D16XxEk7QwUJmNzvWURnoEa9adBkmjs2aQZws2NArFTbS1xYYb66jETVNDHyrzadLyLCFu3X2D4K1PL",
  "key8": "5v744edpSKErbVhiKhEXG3cUuv7wD4nkrW1ixJTzizMnP3ifiX4a3XHqkTccT9E345LsJUqzs15xsxvp6c3wi64Z",
  "key9": "3yfRd67k9ithX4RhCwawqB4FUdb9SiBJD4KPhUp1FKJHGga2Cu9u8coqqYJMVnUBJWtyBWRDjyukuQN63AzDxTb4",
  "key10": "5Kvwxe4bZxaEd6q6LKg91VU7gbGLCZfQhYvf8KurbD53Dx6pvwxgnfd9nmzmitxrm2ndWCgYZwL2A4Kifk3Zzw9B",
  "key11": "58xvP89NWVVf9oi7JsnWi2BMPkmhnnW3LG1QmoF76KK4CuQABzBZ3jG9xg84CLoepm9Vzu6V99ti6jmF8VPFRnxd",
  "key12": "2NpHarP7cCZytfN2T8HS2u7SXXXj2ih5bSj6JKGiEJdccgd31fnZs2ekdepyJXVuRtfXoPbdwQ6V8nWNceXBTtiv",
  "key13": "2TQqYaoveV3vXpMt6oNcfMCGW41PCDAGXRZ5j9LMy573qcie3pzfRFXL6cHWYi1YQAXa9G6Fj2Z8BS6dZnyTyDh2",
  "key14": "NXcz15fmZaTg89kYNQQLTyScgj6kX2yiP2sxNfpqisQ8bDptR4Vx9yLamAwERYZcZzCgcQiJWfHM7cXKBfLYQq6",
  "key15": "5zNdZivaFDCNB4nVDh4p1Gyy8A2L3D6C6MP4wLs5E4BicW2Brg2QpdTYDyfdAzh6VE8cEdroKjUpKgzLZNmiZ7tb",
  "key16": "3khRxn1GjWg8d2eWUjAaJxEHoqZWLYThEFFBM1qgdfQKSBvhgQukG3YD7xpsHqfrwcCpQi1y6y9JFm4g9G7z3yXD",
  "key17": "5Sg4hwzTewTi5TgigCf68ZQNR7Hsxmc6PwzfqUKZazFSohZ4sbept2vSbRWuCgeMGmWDCv6E4dEwTvthaCz6YESn",
  "key18": "2FZm6GLBdMbpkxsEA8DhZzKX3enqwZYWveAxNqBQ5Rjkg9tApDyCUBD9gaYmNWosUGSag4NocXnvPH4qs5cpzfSV",
  "key19": "fqzFY93JyJDN32nazej1gNUPbmw5EjHTRSK8A5CEx6PZycJ2ysddMPteWXe53SFhWSKQyf9pa2NMq5dJ9bbis3M",
  "key20": "5xvEFVfkwV7V54U6CzFpP2uXvAxmYdp6sgXQnBEZTWYpFCL1ujqq53RanyPhDhJPgKAuBCrE1xUjAXs3H5mdFYkN",
  "key21": "2srJh63x6UPspnHV2UV3AjJXdvJbfMJMNGkJtWaXzCGJ9xfJLW75u6dVjTG647X8HVqQwnqRLhdRjWCNYjEpbcd4",
  "key22": "23xjvuUh3Sa79YxcVQq9kkLGMqGUA4Mem1mw4kQxc3MZ1bSYqSUpxkHzA9bvR8s6zZzhWPCv64WAPAj4dthWwmet",
  "key23": "2NWdJAkBioo9TpEFjXjJ4udcKgUPaKoJS1mpXX5cchiGxp2CSabtp4ADW2r6jt7RCHV67TYnLeYWg347WY21RUa6",
  "key24": "wbVYDrsLY92y51x4jgSCaxFPwd4aAVxUbRN9wnMuqzaktN1VH7PgzkG5cKaS4MEuDTGLoXkw29awyRDJDXkNhrq",
  "key25": "qN9XAiacm7zT5pJckGLJDmTdmGoA1Wn4b3zS55V24gEjURFbupXTird7yNkVfWkCPbKgqPN28VKyFJ9B2Zeg7Bg",
  "key26": "5y1g8tjkoLAtpe8aBSHcHhZ6M4osVcdkBCWKsvgXXhB92sKCeK1Uz8pCEX1AszMkz8eoE3yhowBisMFVTjTqaSC4",
  "key27": "4jsemSJT93GTH5roZ82jt8vH3fQY6bS74cSZf3tiAUXTCWgx33nGxNUBaPALjNSGfjRJTDKyGRv3rKgv45ZhMbjv",
  "key28": "556Z5ufvCXUtKB7FUUsv86onNQHJ4ZjfjrMQJwY5xbdJyFZptvemCtCLv3nFM6GwAqhbX2QP1msB1NYxYgMT36AN",
  "key29": "2X9vHRRcc5MJtSrCAjZHyNPNLYiY1XMQr9DarJMescmcuTZP86vNJMxsUKGarD4u1v1bChiyr47UDagGVg68jJuC",
  "key30": "5beGcCm6vnFF2otq3aa2zW5Bn3BbZmnNS7x13wFduiissW8bB79LjAYcDRjuwwG2Zq7A8ywwK57k9KMNpsb4LZ63",
  "key31": "5XhruHr8DDU8KVdTmN2pDefN9RghaYtVru91K3AgrGxXPQVH4H5BRPc4PiPn5CNSeW1D6gaWhxzy8qrMBRHJVRbV",
  "key32": "5PsxeH1yqWEtBfsqteTXXYp1hNrjoGmhEGSL6FDC8hGCc86HjNRrVPKh8kCaMC5w866V1fA8BsHvPqNBj3Zo31EM"
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
