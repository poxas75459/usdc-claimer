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
    "3SpYBHM2xySKTHhZHrZbZHBk8EpG6MsxQt7i2LU3vVuYSVh3souMWgKpSR1PgYZt91qvX3uxnECpPmGFywQcGVHZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Wiv3CvNQ9szy6etENUNXTC7TbjW2c3rxpM3ztGcmfBZTZM5gtjgVLotzFvve21miua8pKJvYbnQjFw7FBYAimdd",
  "key1": "5gBY59e4p3NVns6eBJv4QoTUCbbFQKx9g2hLgUuWBmsauukrctV51uukRowTDukGqyke5nax2CoE2csq8v5EdFCa",
  "key2": "4J8fm7S5cXTHRjY7XE8JevC7x7Jtvx5VA7QFfhAMxm7ywGJpLHpWxiBcQjbwtjbt2KmF1k9iSTBeAm4u5p3zYD7C",
  "key3": "5N21SMsSLPYUGvZUxY3VmsAwinKea5ppHANhJoSueMbatCMGvswrnU6EzxNdywMpGHWyEet4ppcXVjnLBm5VwVhK",
  "key4": "23nEany4VrtAMaXcHr8ZnhfMZiwRe1kuTJEaVcQ4vmrvUg1yfz5VN92m7ZiytetXyZcWeB7hSKpPhL2hEYz1NSUi",
  "key5": "49Wja4i42VUT9YuEtqRiEYnPH7o6Fioq712naAWfVP4Vec1eyjqEFpvuYLRB3G2vHfcsYGYr7Drn1kAPLf1Z9npB",
  "key6": "5HC1zQkfPfY3Cabgi9okxfpVA3vamX555k3EzyHvciKcHJcbEv3BLRERp9cZfeRdXoFCYe7EjzTG9xNxzZX9HFZN",
  "key7": "5cLBV6PRW4TthUgV36fXEr7gicZsoKnkCFMbfcDowcAAk8XADByZZH4LnyfXbDU1V2x2cknGS3NqCTypYM3B75YY",
  "key8": "3hYtLoREKTNJwRmfmUCf2a2peBjCPoZyxUWc6EZaLrCiFYHDSo4shzNQ8Vo7qfpVnfFWCYTbomYZ2aNSfb1VMCg2",
  "key9": "2wmEf5Rf675LTguT2P97KFmFhmULuVsvYecmsztbMPckofz7AJM1e6ztkmvYoHRVxHF6HehJn4TxJns8zQwbGtnA",
  "key10": "3aLTAdv67sNXrUdXvpKsBucMsTXvqxiHfLFzsTUYasqTwtL67azUpi6yKvg1FrCMaizEYpDGGAnbAa2tgk8YW6Dq",
  "key11": "3fB6UeXJghKfoZyuxtdHnvZkC1Bk2da97DHWRfX5bQb88Z8FuzeHVwT8jHm3p8XDkJAkVtvUGrUKRzxLoTJnD7Kv",
  "key12": "3ZAtbVtUQnNdWCtMz5HUnjaJYNDLmfivT5zN8WCcCaCxEd1RU4ahdNwdGNXYbWRmDPwYr8JzAuyVL6o2XXsX8qUR",
  "key13": "sBUA8eeG9BbcsPoVwh3MAYaBFasBuEiTJTNeyyfzaN9ANfeFvzKB8uxJXJGMwNMNBp8tf8KCLzXLLZMk77jApnx",
  "key14": "5SuVZpSofgNbuFnwebDP3Mdn8ZEWuDZ4ouAJGPXeEnAWTvCftbBY1BE4aHkttZbW7rR2jqm7FVnSfZnFUwg9tKxW",
  "key15": "4P48qRgGcpuJnUtdwQZyWAsY4VgeGrxBM91XFnkBzZEmH58gUWUwj9EUxJiWrfXYHY8MnRUtoD5v3tFFqAEC6a2u",
  "key16": "3qWzAAvoJWLzA2PKiwpTfTM6unjbSGYScCaAsYcg1cR7ekGxwyPvUg6DE2LM88VGQCLGYFDGZm2P8aBrTS3wo4SV",
  "key17": "ETvW8eDV6ZxzZNENJAuUuf73n2p7zEmzouMgH1sXjXcx3Pz5wzjqcdzoSzy2VprCLJhGk2pdVyVjqfzcWjGH8Eg",
  "key18": "4V3Ft7GyFWWAXY8eWsiNFaWiR1Z6ahCTuigBASdjiY5bpdyrkmYRaqyayW8Z1S2BkUqCrWBx7GBgZwmzt82V9rUQ",
  "key19": "4N8oAM7SFVHYkA1LeS2tvo1JGA9U3X1bYewFVDTKZiLprkWrLHdDfsXgC8EutVNrxzrMip1dUmcDsmQrvam4hcFa",
  "key20": "5CUsLsxgtEF7bj86CZM3RXwiRAeYBYmsUxaYEzthAX7reyCvkW3ibWdTao8C1bsbAGU2nexipa9t9FPdcJzPK2zb",
  "key21": "57NqXw61UaFNbDfEhbqfJYXyWHbEb7aUUvKiGyBXWTFtsMHLvSPhBuPXcs1BHJvkT57vdYdVnLR7fpTeUKWa5Nun",
  "key22": "5hyMY8PBz3dhjZ5UT7y7BhD4cWeKshFTTvT4NYFP1egMJfNZ61Vv23xPiT6wZU9NMuJZwC8dX9PA8RpMNuhWSucc",
  "key23": "37MfxQahVAhUiHPSABVvQo77Uchw1193YRdd5pnB67LgvtXLEvWeCGgHar7fZUPqWnZP9Tswhr1Wtiyc5EXFgEtA",
  "key24": "3bQQWwsveHnPDpHcNcdzrST5qr3jsk2n9Yh2PZPQf3SxiU1wWctwdyctkPeQpVF7VHom4r3daKxAsZbPQrQPDZaX",
  "key25": "3M5AVzyoQLR3W5671MZ66TDEkAM6g3W7qPX28Uc4oMy9nYimipWW7ca7pdoTyz7C6ZXx7SNKNyADJTp55XjzggBR",
  "key26": "4mutVVpHQKFmpeak7u4vBcmaUPcWygMJDNa8PEB24hCSnAe576nvVBmjYgzR12aG7hxYY18JoZ8sWLv29JHkHiA8",
  "key27": "35ciMn4LFn9tLv4i7xKXDAHTTQehg8vCUZjLKgx25XESBiKZ4kyNL2W1WfouTXGi8FtU9J6s46kEBSdzkLbQQuma"
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
