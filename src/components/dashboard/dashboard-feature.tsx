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
    "5ff3yYi4fkTPL2h8vhDPzGKTmkGygFW8EyQe1pDviYbZtzC8BSZKRaCEVwXHTDHWz7nVWPXdQWnfx2XzMTwCQZyU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Te7Bc5a89tg4n1RRxsoJTmoUnyxMiFqTHwmtseFxXSyMEkFE4YWyMVPUXt6xLv3x5EoSwaw3J9oPvo9wUa3BDw1",
  "key1": "3iF6qxChEF443ypYo6ECmEZ8KpWBSUAB7sSNcWgTfWgDmxowbHQaVykvi8SPdtZ9sFTuL9xLBm79BZTefzqEbFg6",
  "key2": "2CGKYDYD3KSHivnASBuHqecWvGB1B492segKXwGgUDjT95qUAppNp7mR1UF9THsRNrJSqf9ZhRGpK9aWsMzryvzY",
  "key3": "29Y1ahwDaY3KsnDzcnBvKDLnnSn8Gj7Mjd7tG4315gvvcNm2HsdLzjQhHDNynfNykp9BejUZ2iWxPot9GaMcoVHd",
  "key4": "5r34wdYZwwqwrSNxeNvJi3n1puRXwN85twNS1CU7xQDKWQLnz5okG1v6FssweuCUi3HvfT5821vw7HifmKjkxc98",
  "key5": "3mC4eWBePRoPp5sWjM8NG6vFMH5DEpWRjoKRysLrKrk6VAyVH9QgM9cBiBoE4Sp9thCnfq8a5uM7cJrkHzRUfios",
  "key6": "5wtgpdUkJATpgaarTtxF42WH3BnWNDdJYi5Yy3vyw1MWFLLshYQRWg62ZSBSG2CLe5WZgyr9nkk8cZYceCMgAUar",
  "key7": "3qU2mQPwteMB2kyT1FbFt81ihCdgZzuzi7t52uYSpBP5KHGmfxHWhMx1vNF2BzPYjJuXq2beXcAmS5PFr3n9GioJ",
  "key8": "2Dh4i1NYoKP7xuudAXGA1ow2xQsHyuCGUr3xEaewaRaKbkNmd4X7TPJbkumFDxLSadG5SNMXPzUnrkt2rRZ1GZT3",
  "key9": "67fJ7FKSfP9kzmLbRUPRYz6nNGYPgApnnSyyitPWWErJqjFkoTVBwayKLo3u47FoHFLbLm4KpjqttRuHzg2oGUBW",
  "key10": "2aWZJoXn7spRgz5SAFeE5yGYmeSM952eUsWrRH7UoEJMHsKhngwFkxiN3UrphxWA2jDLeh5HEstaRa4rmGXjmJMM",
  "key11": "Fmh1AuSmzJqZAKpSp2cyqsDAPdpNqjH5r1tZ21bnff7mwLbP7P8zxmumCknq1HwksAnxEfy67uyRuQu6ep7DACo",
  "key12": "5Np7SW5riZ22DC6EvXyV3t6M27BGKo55NWjrv8nt8G4u935doG9QHVnaYMkcZNGA2GP7xdemyesL71bmBuZTcrgA",
  "key13": "4ZVvUaECMX5E9gTLhWDSwLvPQCr4mL9A4xv66A5JJW7U2RorXNiStULazts3hAd524AC1Ry93Ybe2WvFJZWH55hy",
  "key14": "3G9QyNmkNo1yHsoCLvNwGJAYb8KhoHtmXNDWRP8aH2iQ8LAYnz2G86G8zGbAYbTgAP2pUUR8JzSsE8amo8cmzZvw",
  "key15": "gKZBy7CTd4YcDGZUg1954mB4stT27fqEo2AJLAyTneKEN7igmA7jeXcCyAsq2RBoJsa99DaQdDQTEW6cBp34cAk",
  "key16": "2buNWSATLD9xoYFnTGFW9eVRg7W2yJHezTcP3Vs1FiyYQYgbNFUBehpPYEDdrqANiYSchgWFekEnJRegVBFtMo9v",
  "key17": "LUyNLec6tKs12tDNLhBJaEPd54c1LZszD2qTFJNwFak5kEVNP1bzXGN4P2eFW9DzngCtcVUdn4uCqARNT48AnKV",
  "key18": "2o13t83Qu6EnZ9Xr2moDw1hng3fJZQbe8SXTBa2SE2DoVJds4rxhEXd3vADVz54Qt4vxSE2tzQghUm4gp2frH2pE",
  "key19": "3bi94RJPr4Rr3QSYmmqro1pMEJKZBorreSFEe8VSkzGaFkTZQpWEBdCeVajVi9JbeoAT35LzYEk4JVTz8WGj3RjR",
  "key20": "213ydzZAiVQj5QKo5EDZhunjUSY8dd7Y3iKcggxaNDnQ4ug8B4wEYdrFhWKjrZnRciWwJGKG6St4rJ7gCQhx68T1",
  "key21": "5GZsEpZUG9LLRcMjub68MeZiwwYoHQ2t8qDhU3BBSUFwA5iuJN4SEyQaczgpRx3QqPCEGizk9ehHhrFd7qcYG4VF",
  "key22": "5i4R65ujmdEjrme3DNMu35CSzTYsHTBr1gHypSNLpzsQHgxJ9BXuPS8UP6gxXEbZ7wxVSp8TiSrtaMcJVd2tJ63d",
  "key23": "23FpWhGkKtmdY7nv1PqHudLqJPp427SJ8CLLcpcqd6mfPf1DPt55jjSQBvJnZQ6MqKSDUyQraomiX9PDmHfPaqvK",
  "key24": "2gG6mPM76fyB7R9QJt5A5isrCvK3awZJLmuyRMkTHxAA7nUR6hp3KokCTfgHSVrYWGJHnV88dQRkbHMcu8Y3FUMd",
  "key25": "2LL6VzCYdbdMyUMjJsNPdSxgTLr4NHpdCcQGz8LYE48DTbV9FkjutXRxN1V4NN3qegv6Bf3iLFjks2Hz5a24meA6",
  "key26": "2eP9NinKTS8nH8YMzhaBSdTpberz8XqbhPoTavWjQX2uSP26s1BeWYsJZSEjPRKEcujtw8MGcGyMA8WNU2gVVqUi"
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
