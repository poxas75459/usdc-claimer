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
    "4GpgpZswa6JoK6dcFNgBMRdMfHkAvBgjPcAtdcJdwc62iGHLHd6yBUBPYLZ7RNa4yqDaJ7rW2CxN8LprLpkdXycn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4k4fDSfXNvbemViZ9PhPPeAP76JUBj2vyS9X8iHWhUybMt6iNU4veu7rTZgGgziG7DUxSxKGmKrKgHNNT8vKgjrw",
  "key1": "2B6nMCrgVF8dNsLD7MF5gG91aaLc7sCkGT155FGf5ywZ3J3uDfoLTV4G2yW6NhNdFizhSRgTfMuvWcHYd32yTvu2",
  "key2": "3WHdfsa2kWZpx8G1tb4ZfkKjgrtbuMyfRG7TUutqDHH3he8CrEXPH4KHUxRjAg8mQd2UHJcicYweZiWMvYbkJh9c",
  "key3": "24qvmZhTyoAmqnPZSyEC8CSTKDoiCVTK9bGnmqUQxCKuX5qUKbfh4XcpjRXceZz3ruBqBy9dsecbev8izNj5qHnA",
  "key4": "r1P1C8sPMQao9wiGZ3Yz34NdSCZrdssWRJUiQZokakhrktto1cgD3zZ2XGPjtK9eXxpo6fiprGRdADQDEv7m1EE",
  "key5": "42W74zTXEz5pcwWVEcYQPjFcFVH7eLKb3s7FXrECnNqrYYNKiqTFK7aU37nUTpPaHP1jATRFZjcULU68MeH36Kmi",
  "key6": "4e5rdGEcTyqa1SEq7gwkWbzZb8qtYU8yXkL8eVAV5i8fHgeZbLk1gZhaQZuGL9SNNqsYB45Y7tGtZcjB8twLqVPH",
  "key7": "dtjfgN2jP3AmXXyR4LBVMUCBnoAfjmtY3Rwque7L6gDgn2VYAGPrM4CTrSLx9nMHgiB4K8WdKnpfhzPMFzGtnSf",
  "key8": "4TQyT38fzr24dbwtNvnkzbX3BuPQyAxc1RQe3RFDCQfe78jXpc4YBxkEXGALW8pZ8dKgwTcwwXfbC5FUmBp7PK8R",
  "key9": "3F8bbWKMSoSpf4m7yB9miNrr6PVPaeXYeVbJKGHc7C9XVKaStwYCtX3paiHLuBskaB9mhRS1TT8qekepLFTHUFpi",
  "key10": "kdPRdcTJQjxkqJdd6Y2o3fL16cBm5rEZeengLiJDqoF6JKxeYfaLKs7WvUGtoendLTGT4E5WREMqxADmWqZxRrT",
  "key11": "31Dg1hmhSrRBRrWdEGyL25QR1UZ7WuaGd3d43RQy5Da4gyzyUeTULpKp1sjACepD4fdv9EAegJ7Y5w1W6RTna3PD",
  "key12": "5K1pqd1onZxcsvLsr5S8dLYCzx9ew65w2vmgmUH4kSSizPQSe68UHEgxvst9VyVoP52UxfZm8wYoFouwak1JJG2W",
  "key13": "4VjYRtVpPFZyw5RfmPLwLuWNfesSdPvakwcqgjYoubU4ZSmHPcASk58vWV3NRzNGbR9gqsuyqsUUYKSnsSVkgf5p",
  "key14": "63V8b54GoUdVmn6GksH5MdvqFVbUNSrKQempDVQjAAdzeXr6JPE4Ubjr6v6sEnrgsdj6G3atuqXTGZp84wRQfjjE",
  "key15": "27evBLU2B4tKbtgb3xBjBr8yzWXfFjoC2Zuq4MbVH88cdeisSqEjHhoyuHb25iTga7AyppusrL6fNVYLA615jYmU",
  "key16": "4KLfhBr1owCYJRmYNVnPEn2HG2sbNGrdBP2HDFye3DCmUzdKNA47g2D6gBfuxJx6pGkxmjkcp8qhrpBqpL9j4qfc",
  "key17": "4PmxhbkowcBs5HrZv2P29FwXP4nnJUwhryDjQHM3f4KYynmCtY6TRDi8HKCCUtnR6zsMqPZp8ooY21QQaufB1UgA",
  "key18": "5boJ2ehhJHSdpDoui4uAFxZvZ2E9RyfdaiLCnsj6iyP4QeHG9wr2LNbcxfAkZD6ZCkhrVnzicdiy2HEMRnzAHV7s",
  "key19": "7bCh5ykbjFiAvdf8biA7SbQHvsw2Yf4L1UGGcBoYhjbRUumVeyMHuRy9zfAShELtZb4Qenke4jKEyP9h85WamK6",
  "key20": "26SLdwvXaYqtvxXXXffdiWHHZ67APysG724r4CJ34cgKWZhD1U7MB1okehzy3dpdYCkXTkeQjN71gsVFsnHb6kUJ",
  "key21": "xmGYKgnJx6D2gMbWaxeKD6uW4TpxPkmrKT6sg9XW9euP8eF4Bbf1jSTY23x4o2NRt3r3W9224xim8vNeJyPTxeY",
  "key22": "66HJDA5zerCf5x7EMSxi5aW8Vaj7txtxgZkAvDYUfdcsWSkxuSanQRg2cJ7rwmXbMF5bpWMyHTB5BRdJFJCLoxh7",
  "key23": "2FhLvBrBekqa9jjn3vSUTFwm5w5nKRKpTQW6HngtCMTK7iW3zWMTKomkfQkNfVEhNLwxVzNNKoS3BWSybp3SwQFP",
  "key24": "2Cnm75vSBK2t2Tk6qHcpgUFW8YVeDPvTZaMy9GiLA7HgvNvjGtv1jkinazC9Bakwxwzs5Mc2Jqny8aKax1haXQxh",
  "key25": "3rkYyn6G9cbmTTGNW2dXwp8hMHKpPMBRW9N4Nyhb3U21K9FUFwcFAcSvBps5BMvXFSgj2oksya3W7EJytERoey4J",
  "key26": "5vGngqm1mgEzpPEbCFTYMc9NiuKPizyGTmKyrMGvC8b8xnuvauVCvT4UPTB9dvbj2KneMJhGLXtBWiwKQJP9go4q",
  "key27": "36YaVUR8iZDDfnVtnL2Ch8CgfCrQhLTvyK2fEEmDFHvMTitEDkG3tBvS8sUM1X5VShMsT4YQ2jQ53KZt1TqpK6te",
  "key28": "8pBQNypwZELAWqoUZfi4TQiqh8bhjksxKcdG82piGZj9vq6w5U6S78kJJuqFdRQ8xznULHr4i1Ma2w6YimS2ufP",
  "key29": "4bAcvadac9ZD68Vw5F65FcqdpiCEoeuqqoEFogTw4RzE3dkVqN6PCU6fvfrZf23ThEXs2b5J3LTD98RSu7JMp2x9",
  "key30": "5ewYNwg1aiap19WkyVjswNnAo1U9MV8M1NZesXPiCE61NvJeuGfvHSQxtY74PZS57MLhdLZrjnELYyth4R72ihk9",
  "key31": "5GwYnF6miDABvYZBcJSp5xmXt9jC626QMNb6tfgY5R6SwrDscb77Lyd4thCjx1ZKqEqbLHwkrHARvjxAXqTCmcWb",
  "key32": "gaa7yLLUx1T1ACsCuLFdnFH5C928KP2tcKDSgZ4eqHGrUGdBACp6SpJ2onavttpaAtpWSYJKqvBobugshcVUfTe",
  "key33": "jC9PUXgFDBpSrd5ZRj7i7sVT3uH7p2SWi8bHCEMq5PNcNjSRxPcrb1P63CWHhsdqxtQG2Svp5KyLzDDG4Z9wyJq",
  "key34": "4GiNpW33WYGSc2RBfiL7TX2GFjVcDgkhLTtDtSEe5kie3tsAAejJdGaPWKrmEG1cPT4yZck2M2oxzcLbmvu7ixpq",
  "key35": "ZNkBJRRRTb85SkuRtMTUgTmDmNiqtVTjPSiXuP11EEe4oXJMXLKSE1i4kX3oRfQuxPP72goHuzrAjtXqrrjPiSD"
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
