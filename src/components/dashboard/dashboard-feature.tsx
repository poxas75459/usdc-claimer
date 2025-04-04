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
    "3dnJguW2TUWs29Zx5gQ65Z9THktEsG4Cwba3bvA4xKGzUnwFyfdj813Z9SV2spYyWVawaewpqNggxHxjjYNLVhiv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CCMMj9NH8v9Ppd8tNSteH2ddCVpus8Z6UaDchULY5YHm22pjNtDu4dTmDBWVX2Hqz4uLvGXQ8TThtHB85oDDkmZ",
  "key1": "51sLnxY9XbF4aZHYwdrnfydgftygiyc65QJfEqrm1NZbDzGqmUQgC3V21rehCbKq4hfW7f1pWqTNhcMeFAz3seq9",
  "key2": "LtZrY1XZ7M1B84kccaDj3EJMs5QyWLyLA47FNDvYREebtSyMCUKm6L9oHPyQUCyRWjFo3HnLHhpTajjAG5tDT2N",
  "key3": "2JWPNzshqWP97b8U3Rjgb3PCRF3ELveQi4X4ov7d1QSgSG6sE4NbjgB2Dn8tfENwKifh8ngX63DnjY392fQhizy9",
  "key4": "5ehYg6iwCk2aYuRjDnC8bGKupxNQxzPYTc1f5c1A2kzz1oUxFTviMH2g7CXibZ5spfQ2m9uK4LC139E7QufT4ZJt",
  "key5": "YmHH1ppZ2ob1SpC97FdCtQZPvtgddbQCFj8G3Pwfv3WtCV3uLEPiSt6MG3KAy3E88yRHT9mCrPPS8nN6VtwrA7e",
  "key6": "52EbWTN222WU38dcLnMVUV7Vn7DSs1hKfFrixS2y5xGbS9R1n1hUKM7wdYaPWsFtCovQuUH5UpmdEQX8gQiap8bN",
  "key7": "5hDqkrod1E4T4ZXvs4YnQZoCSQZVMPPaaxU91utCTDDSpAAYBQk5Dp9PxqS7Urc4iYAvgQz49tE9Hv8zorwPogCt",
  "key8": "4CzzjH471x5cmdTauEejY3gHhbnKvi7vyqKzDMzRZFhduQqt9JWuiFmssaXkeCGF3me9T4gxAg5PKbhUp39njYrm",
  "key9": "5XgjFZK16CVunPiE6BQjwEv43yuuLFGpCn6poeWezmHXjTEXatSjhLqGEmckE7fyrpn49umcZrVC72ATpuMYfvcG",
  "key10": "5TywTtxywP8QdvayjkBqwjbgj3Tu65uKffvNYkxsyGvijHjfhVfsemN4m5UupakWtGxfJ8TFQGU2B8pW33Eg3Ezd",
  "key11": "4Fm1LYusBaSoLS78w2hs7Fsnn6o1nGYjJAPtcCnsxizx94ypje564xeT5xTrREe7Gm6rAtSHkZK6aHpy7vPH6U9W",
  "key12": "XENXJHKpeao2zwzmygt2zUMuBDJDiFT1XZGLy9HMiEMaNGnbBkvMAB9T8eY2vZPSHk72Cg3XMsCCh7ZVkcD7KLb",
  "key13": "4iDmKhHZFfx4FCRfzQVUKzZMCsmWmE2GxRT3T8YPgsKKxfBBVFN6kYqQwaqCHtVFtG8bdFxMm5ZngiaJahG1eR1b",
  "key14": "2ZD1c3NgTXbs1kptmCW4FuouW4u35sFLz8wo9ncGoqffAmZsH5bYsZX1ckh4giN7LugAq44dGMmkRXeiz7tkg7uA",
  "key15": "4i14PUmXdH47GGjA7vn2SWCCYaaeazeJB3oLpHKAEVsfbTiXDBM6r1KDaFMA3Ejukmfwx72Ft5cpSf2tVggt617n",
  "key16": "4i2vvG8TftEnVkAcnqNLd94a9xDz5AyG5SPRobGdvNfUnngy1ATRzNqkZxNL1yFdoHyWtu3CJZxGFKK5LARQSYba",
  "key17": "5w2BU1w8oRuSbAp239a7swfSaPt6SW5z1yyfGJ6oXqJv9Tzqdv17uY4VEv67a2B23oj49wQ2p7Djn6etirsf7Jjt",
  "key18": "2RFUsyY5SF2XgoJj2tKfwJ1cu2Qrx31H5wVFvjT8ZTB1cEc1TFcJU5ohzbN6YYVti6snc6LvE12Vtd5tizaifVmV",
  "key19": "5QRihdmEecbSwXYJ7qFiBer6Mgynqnb8NzSKDFSVFcU3uw58myN2vF8iAHDRJ9AwjQGeiANc3gmc3eYNfp2DmNob",
  "key20": "5TKGoprQp7sX6MATYRQdNsEcVvdtVN5ZYHJ5kEDz3yrcAWuoioFWvz8az15w6vfs9QEheXz8LTdQdTAEaL2Vi7vu",
  "key21": "4vPFHtsisegVM2d7XNxRTDHNjfxkppoM4nQzuMUm5hMCNroy9KMXT7uBW3QUA9n5UuXAfq3ssQHJ2ooa32izh9dc",
  "key22": "6342ue6HmCxsPPuYNqpdPgaA7iMi597Q3vsnVvtMSG2LdwA8Ni7bMB9KYDV7KP1BiJ43sYaWKry1coF4LVVaEyyU",
  "key23": "mMARdSnZs5zwDGRsCvmK8FPAsug3pdJCC4dVFZMteveivwe1XyqcXdiF3BC774CgUSF3LUPNprojMvd26qgFeA9",
  "key24": "LUpTqxcbFHVPta7Qmc8tEp9TVzxFprssPe2khxUgxQ7Hk2Y6NeuqmN4cByzkt1PgwRvBSBsVif4h2rx1G4JEoJg",
  "key25": "2ZC3ZotANneefXB28UAKFtFF1cBSx4tP1uqepPvwXQeVfKqFQjWW7yphDzZNrbyBVKUdP8puxuFJ6ebweyz1NA6M",
  "key26": "3iHBKEL2uDEYSj2NUMhLT3oWxmEMo7bibr5fPUCoYe5yy3eUCp6K7iyMs1t6bfDwMhLMMNbgfRx75AWnPUu3HgRj",
  "key27": "4cEwfa9LzZNbPCxbmJ75VqhQ8DQUJq32vFSnVjWURS37WZ3fhYdyiijySNCQYAyBTjvxzSArLJjsbMLwX89HhXmG",
  "key28": "3QshWAYmRXPcSLob71dArsf8fvjZnrbTCq8nhuQ6SbfNs3RsgoC7sHUaSmH4A6pfB8rpHuZL3PgMYd3G5CTH7Gkq",
  "key29": "2kSRtbp9DBihpYMEub3ea6BpKEv13WVbi93Zd2ZnPta6H993R1CGwo8QDkuVnHzJhkpUnkhTYfaYaLx4w3vbRqNB",
  "key30": "3zf9e1DonrHQTMvZKuJ5Z9xW9XKL2ak5Vm2yQnHbPrD7WYK4gyNetdPUHnbJckffcLkoffUTmBd8JrBarYh6zhbS",
  "key31": "4s8REGHjwnsPUAbutLUdsk49YQd4q5XWSMFVrncHkSiYNNV1j8XKYCi9C7qafi64cLVfCgcG2E2v7TK3ALyqZFsd",
  "key32": "5dnzkKFrT2Qtj4npbkSVPYZ7vBQ18wKjka1f4qsMUhtSPdJt5mQxuvVK1cU7TsS85p8hWX6Dt63zYABEq4BRvEPC",
  "key33": "2DndbPDrxuKGM8ENuL9Uw1yjNv81frM2J5Vebg5KKq7Ns6wAjxRxHwATnKSBVkXXMs2i3ge8F6AJ9AWuf6YgNiGG",
  "key34": "5smdhqPxbC6BT1jcVnwLouxuXXTNghxBhWYfmJxRVsiCXTq5LbgGD9PPZxVsXysE3wTXFZdkcXsSfsmX46g1KRBp",
  "key35": "4aaMQzvDjC382dGYwKveZzFM7K2T96tSxdNYLHqLp4ne1LcUzJ1XM2hwC8pRR5Z36t1VFPkWAVWRfTjniGazzSmD"
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
