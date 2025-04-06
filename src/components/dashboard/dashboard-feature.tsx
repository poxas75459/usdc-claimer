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
    "yJra2KQRPqu6PtMiLoPivfAJnMfggapWUhM5Q293dxsxbSBt9fc6zNrqPUfzsEM3Qg4G7YsKSCNck9nPz3XUuda"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xENohLu8yfjo2CgPNtCSHFHzCa6pvveaJxAy3A7oni6DAh7sCfJcNckUWzu5vnTgbZist7Uid5MCSXorF1G953X",
  "key1": "2JKFMBDZVkYY6AwGjkLLSmwvcaWEauDmXnqRS11CXPjdAvWxAT1NrxVzFuoc4v27hd3qkzKd5DtWgyHPpoNmHTB4",
  "key2": "5nrfu51zpiXSUT5s3nRcVQoEwtTBBoru6MaUjeHkSdhYayKwvZRkJHbiKJiNeCCwLRtEPWFjdz843WGQwSVJViuZ",
  "key3": "5xxXy7YqaPV63wWo4GDL7aKmNsQRyb5suVhtGw91Hbx9wwJ42nnogPzWfL7ngfZZXLXJdQKYFVQm5B11p1iyU4TF",
  "key4": "36W4su5c5zu8UBQsybuTvgvzBC9oHhcEMjHFP8RiXwyJ1hhk8WiHGUypsMDKVbizRW2Twz8DZ5AUK3etH95u4B6u",
  "key5": "2hP52QMhPiaKDn6Mu5MieC6DNCG61A7jGiKBbWxZpyWVQRfWubdVoq9QCq6WNqazeUpiTen8saR1p64m26ezkZBh",
  "key6": "2VHuaKwcQQkNZDwY6pbqdjb45cfhKH3JDvnx7AoUBWQNsN5QRLAJoPUBucAMCUjEFwJ6mrUqbF4295VJqQy5tDAf",
  "key7": "2RNdvNHFXNZGdBZsw1m6s13TJXXD8TnkotoJjtXkGBFomcSPRNn8GG7TcbU2fLRRy4F18j7AkhjbkzrBxKn9zcMu",
  "key8": "5AxiMCL1nE5jZzHaEBCSR4n6kppRrucTjZJb8zKB8B8dnMxYN98HS8QtJkR72dtcRW2rafA6EzDU3JRrRVeCiHm1",
  "key9": "5cra428h7gV36KmacNfe7cRyShcu4bMrdRGpvrVHxMnjDtfxgZhr9qqicjAK7ht8ZoRfzfXZnddpstytYYc4obsM",
  "key10": "TcBDBTZDQ2yjxyRBccMRCKyDRtHQ9FFAw8bCXR7D1dcy5KR7N8vnzR1NLes7vunttvGMJ3VeCanGypHePM9YbRm",
  "key11": "4FWEAENu8z53882VC71fkGbrT7W5XcmADMLUFiTSQb8avqoAmqroW3EBsdV1oHTphs9BHfyZ4QRF5j7qzFm4M88o",
  "key12": "4kwYzG2jJX7PKbWraoGfDcv7dTnMhY6aRz16gRZe1X43JaNGefUz3GbHVXsvdY3Rh6UmBhgBZYV6E9c1MfDZE2K5",
  "key13": "2WDZSigwCv2FUPHpr5MiLiah7ZYAyXty4UL7BxAvQ1Cmx2y8D2D5aTcpoZCCpLCE6vEqEmCHSQ2BDwuPdekmzVie",
  "key14": "4GUZBaUev5pZHUHivc1o9AZVUj1itaFKERZBwnFL7YDH2zEAPHttdJKiSexzzS2jA1N2iHFmTf4bdGkCwaC2SH81",
  "key15": "743di1w5TUYx6FmBg52Wb4d8xAQvX5j4XsJXSzSGKzrGvbJktzF6cA1iNXtd1m2m2ux38JRPEarNU52k6BjaFGk",
  "key16": "44HnhcaLNiy4kk6r7QZUgbJjHf7JpCS6axW9FRKxj491Efc61krSfNb18w2GhUUUgSQNbwxgvku8aoU7CAwFBont",
  "key17": "5w3PkfkfmhAex2XAsM2CUvDjU56MK99NyXRRWxrLtpAdScN8TXU2TVvwYbSBZLiwa4SMyYctSeZhFBpki7a94vYd",
  "key18": "Rfsetk9yKPjJRYRH7bDaTQHxdLaH8xgqHaP3DmX2HFXJqUmc97CYEgtGKSB5pXx1h8MAXGQLWEmPKb3QgVq9eHT",
  "key19": "PcRZfjoU8rtZANiMKjfcDkjxTby2xu3TkSDYvsKLaK9BuqrrxCbTNMYeqSSenR8LrZrV25zX2Zm5Pbk9wCcDKQR",
  "key20": "3Dd2P8o2wT37DqfubYtGULvCsCddj6SoRNdx9t9WFL6NT3v4TLYCUtsq4Ex8t7EtpBKxrQUfGqNG3NnodaEGGMoU",
  "key21": "3BSRxosPCYcropDAg6dyuB7szK7qeqVxivvBgPBCJEdAzaP2uF2RweLaY1hDMSPfXqiMjaAQP2VisUTn1F1C8EXL",
  "key22": "3L3TzwyxvBcgd4GsXhPo8DETKvSATNqzQsF4JBejnsTguK4NVTXZv1QT2Y7ooXBYf4qdiN1j2g6dGGieCdbSKJMh",
  "key23": "E8TR7NFNEwVcAuJ7UxKAYjKbGy7WMFi1eHqkwsfUsDBZAk5UTtkDj6rFnMo9sD2ocsUDTfqZ9ngMzEMpNzefbJp",
  "key24": "4bL12ZdFXK4sgAZVuGng8cccTBprA3qBsZ2xTkRnFhLC9teThV3RgEeb9EnxSVayV3Q3pijXUJP4d2KkX9JEShv7",
  "key25": "4GrwjNyLXSwwRg7G3augiKZC2u3cRAvLZTyXCvvvnP9bUHT8JVuRLi57qXqC598R2yxyyhfnkiceCB89Z7dvfqwm",
  "key26": "K9Qva6xtLHoPiRsbgefSx4ZeW1QWFbCGFmpL2ApTdcS3RX7Hg7oebTEpUdnCdnyhk3H6VUCpBy9j3gvDVhnw2cr",
  "key27": "3385fFhVkyGQ2mLTfC45XhmJyGw5HGcaDN7J3mRACqbowNvRbvitEvfBevd9ZNFMeyf8vYn6pZJs6f1bs2GCS8xf",
  "key28": "4C5DZ1sqwQBHD7Lp1hiDCJA1ps8NBmvkR35UCGNJMYvSsqZFBFQw32NMPJvg1Jyurwh97azb1py5jcTQ3hRg1dhA",
  "key29": "5KV2rywz3u1hmqYaWXaooSYNqaziJivz2UvYFWNNCXnysGQc8jbaZ6zRirG2V3Dih3tDiuwb42dDUTn7ofi1dreu",
  "key30": "2WN8rrYsc1W3QfuQtyfk6wFsxNk1UeYj8PwgAEmRMChNqbg8X42GLx3GfiWJhqD2cioEBZg9TxSiWmgZsDPYFiFo",
  "key31": "5aBwNW3LqE3Pp9DwifhXjHrTifViu1hALCKyyk4CLkxNCqwRyj6CqdfB7wveUNgnQGbAzs3gYx4gDucNjzVcTEj"
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
