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
    "5QyC3wK19ESk8LXUj34G7bnkoBj5gMkhhJYtvKCpu68S5uh4wwVcvAbxKMFyp9sV8Lf1U8H2DJ7MV28yf4djchYP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bdtzrAzytNEp7XFvXLYJrfEC99dTnko1YPMtFeNH2k2saqpHRXcygbT4jESNPoF7Nx5HwHFYPHGEiUmSb3bVvEr",
  "key1": "2gpoMkTAPtnWKJETznbUQsQaD5WMjE9FS7TQCEcCP8dVQJvGp4yK958ACenHBHERHnVNhjtt6PzNHhERgL1ZaX6J",
  "key2": "W6sA6j4nKYKAgFmyzUid868y6tTrJTdEeuaENnMFu44PcdTRvKZ2pAyjQHBiZbvJYzTjE2xF36b5G8Z3sAyU3PP",
  "key3": "64LDhnrkj5BsrqWTHhK2pvCT1LZ2T354TATM95J1zuyz8EfzwdNtmnPFmVC8VxupC8wyYPFu1FJdGc9g23TmSxqD",
  "key4": "2BfLFGFF9pDNFui4agPDnwBp5ohnGJJyhsyzhLuhR8W34D82dmpK1BhxMLjm2Cri4Jj7ov9qxYyQz3FbqipyU3Vc",
  "key5": "2oo9yAXVzZXGAMeN9ioEzsg7P1Zn1zziGuQPJV5tUrATCgcfvsqcBNgPqewxfWAfHv5gVBaqksRMJ9h6Mje2R9C",
  "key6": "5gzLHx2vTJfFaPXkbcNCfn2Y2VbU9wTTXH7TecHiV7jk8cCGJ3NsQHM8BjaBdRyQCWAwNUGyLz3dtRwQgC5NczSf",
  "key7": "3MyTaFFarrG3Ekr6Uh1GkjjsezGfQNvZnyzyUUv8cWTDJaSJr5u7YghLoMGVuDtJV9oct3vRfkWbugm5qGfu239u",
  "key8": "qdSUkrFLRRaqCYML5NR9BTksE4FS5keh3ejEr66Mc3UXjT7xkGKagHnh5c9mWJVZNq8zdrcyazcFrQegApdgrSA",
  "key9": "3zay8ZaNtZ7UN9iNhVtLoYc41sqqPzUNiowRja55YUor5BXVStwMm9Q8TRpe49cBHhAAFyABdTJmYz8M1gtR56kq",
  "key10": "4phV53PEjimjKBq18AzpPUkBUfEMBpZbXz5dKXX9nxuj1yqXaYamUkv4GFCCWXwMs4sVPriABW5DRKomBygKM2qf",
  "key11": "4zhErArhYsJ8FdWuyZAvA1KZ5YhBvUVkuk1h3DUMHsAMrzS7SKofQJRHisSHL3qxWai51qLnkLXRaB2A13tuUffe",
  "key12": "XicSHMkziUqZwngmS2CGnsVstSgCX3AHN4JjL1vEQjDCBE67N5E8Z6EUZz2PKXDcYkkfRAmqseiEe1ekjeYXnXw",
  "key13": "5pbToST9RAu727xcjPGZrzBqJU4p7taqJL2rp8uD3E791L1U5BqPcTZbYYPEkVeDxSaCTiGPRyCChxqkXH9maLCw",
  "key14": "4wACVSHPeVmMrWctAfTe25qqEjc1MyMxqPUzJzdmFh9gNTvBWRUjvf1Gvho658atMoaC9rAAoyWAhhxvvy4upsxV",
  "key15": "5PfqvXo23YvHXeDLkdcMCPihJKTe2xNega7VXFJ8K1TZHuRssUZ6oocSEJJRo1nb4s2nn2bQrM79dnuauJB3a83P",
  "key16": "5sNzPMbugjYUGB2imaxeDxisaj7THeWRyPidJjUQQcVM2JfkTyp8U6USKopHMBj2M1pMxs9C9RywjqHTFPFY19zL",
  "key17": "M98CEokRCNRT7NAfrR2bMrGdm7SFAsnhe5meC8soH9nMmGrjnBxBmv5piPyuREyRTSTaKf67xNeHcwTu3ji8kdd",
  "key18": "3rjStNRmDuuSaT67sgTcrwLJbvbaMfytyBzMpEYiUF1recbV6tu8jAhib2T9Mokscqux6Ci3D2et3Je9AkejRbKR",
  "key19": "4cnrhatFvkxCPBEpGrP6C2jfB8n47n8zUbSMTqrd4pD71a712iCBeCWBioFKv7FUAMe3CvPyxBPQT4ispTjW7r4F",
  "key20": "3xWuwSYnG4oSjerLEE3jxkNUsaYuWRgKXjg8KFVKWCnHAZ6776choquQi6FTURMwf7ezgK6o5dCUa69bdbrnjN81",
  "key21": "9wQaMjG6AXk7fsg8USXwHbn8bqsEJngAxU3d8YAVtcbMC7GtCo6dYBqB1ZzhBLAoa9vaUw7gHoXh89EAfSfdZcm",
  "key22": "5SQiprsFwHGCAf1kRGoF2uypgDDeDd3qnYxgeLqBx38C1CMcWZPdinM7zs6iu4fTi8g49Lfnzq3GGiSaiSvDTPqF",
  "key23": "2P2fjLcoAKypBwzv3o51pa1aESYWaPGpWdrVs74CrYsgoUdp7kztjauuHMYnA4ccLvPDy9tRgf7MKW5GtazhAnyj",
  "key24": "LjVHGF9GSUGB9EM1ctcX9vg58vUayUKUFHFR4DVzSTYZ9SkCtMQJreRtPo41UcidXQpCqqFBhWEKFzoqCeDnHbt",
  "key25": "3L86vtpGZJWzUWGEmNW4u7vDgNW5vD73HZ3xsyqdm6cswR7gee35ZKGLMPxjP11Zzd7yfjYYtAtuhnoPNEWNoeiA",
  "key26": "3vyVZfu4Pts9zYAFxnRR2DMnCqoJhZwecKm8bLKWPwkf9Nh3kqoGygmDMoUx4BKopELqVA3yiVy8RAnffq2kokQz",
  "key27": "4Tpsa59FH2U4i89dxWPSxhSKVW4GbfAkDU2Q2vgrzLdzcc3uQco9ePG6cKLtbfxR4dC3epaTrurrNPhUpJ6R8jqz",
  "key28": "bJJcHoqsDzBPoYLFC1wh8jh43aMgBFtuCiaXVx48QBTVAGY8DbRwn6PyvMfJPXi1DG8ZV171JUbK9ow5Xe1LpAw",
  "key29": "2KqUbwhg9hxzM7Xy1TCD6uPns3sYcfPDTdXZ6edfJBCd6RQLWcAXc65Q1J6nYPqbjsdx8A4kPzPrmcgoGS5jMUtd",
  "key30": "5D19u9QSvVULfT68StEDQwaz1P6etrBULXFpfdvZa7nW9SDZk7zxymVTagiYmkPztkBT74uJzTE5AtamiTSPhmXp",
  "key31": "4wDtaeurRKoUM8dH484PgGQTfMsrayZUcQdZZGXMdqUccT157gkVUF87nfR6b7JoFKBQ3fj8XMoSxQ1Cf527hAWk",
  "key32": "UoNmDtXARMio4PgtBLwE7SfsKnsqpLioS9qhhxdxZsgc7q9SrjRrJoFHLuUQSPQUhHxxJBmq2DVZLdeGWZQtHuM",
  "key33": "5fBuPyVyujDaTqFiuZ1BGjveG1PYo9cKn9ntrEEeCWgjADi7E8H8y9TUHmEDTK4TiFMgGEwCF4zSxSDzujRMKxEK",
  "key34": "4xixekvhz6PCVP4CyMYBjLGQciz39B2i59VhEH9gWQHJfqjdGamiaHhNXbUJpUKPpNVu378KR76jwd3A8mJRZ5pg",
  "key35": "zayeCBe61gcA7X97kfFc8GfZ8KrpJtvgJGj95JKsvHuxVhjoNcUm6UVrAHQU88UxSDkPwzLurcvX4TaEW1WoENh",
  "key36": "2XJCJNNVvxcT7YfNFGzfeWnqxsRFd6o5FBt7h7AbrbYwXwAadFGspwg2dnxXdbFApzaYX3HAc2KQZCxWRhuPZnQD"
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
