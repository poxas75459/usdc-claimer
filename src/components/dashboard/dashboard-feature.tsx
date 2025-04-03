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
    "2SRAaXBb53tQwCBAWkbRwwR6Piu5QGo214euzjYVU5mKM3gpgzmjtqzkVPoHDgjkYLxjocQLy6Cu7ZPy5s5Yw1mT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "329BwNgjxieAgpRBMojP43Uf9GEYAoMQBTN6kBeTem6gngYp6B94h5jXiw3Q2xFR3pMyTpNUWJmUv3D4kAqQ35zh",
  "key1": "5yj5qKHwFyLMXp9EFuiheT1BkLgCV4PfSFPx991NDd1tma7MY2KZwfEvFkKRWRxC3fdjbRe8xyY7kxdzRMCz3XBb",
  "key2": "22xFLuLCt6KBFXN6dKSjy9bHugvSx5Pio7BJ97dfpcnJSeezW2g1nWfWCLHPMFLrjgug2PwGQFL6CuCje9TdKU4L",
  "key3": "35WXL9Zvz4vArRPBZbURBt3FdUSBnB5Mk59HA9cVJFkydn4h4xNd2ZTnFcQ4hgTL6syAwNukBfMcC85J6Rjbri8v",
  "key4": "2uUd7NqFUqpGShbbnHz5HD8GojcKJ542LK9KP4FKXsuriEZEZ9VCGQkFiPz3aEekRwAiNTR1GDWFZZsXALnsc2Fg",
  "key5": "2gux8iK3cdKza22gwi1dqpVppCGsLZm8Su89YXXiSz7Rwx1wQFGeHbC7fhBrtJr5gb34FS291jsLUwxirtWjWNzV",
  "key6": "4v96Ukd3u83LfHTippmEhMfpozoZmyPWj7MtPKJMeQojQB4YcEmCFZVfPVCyqQVDSLyhkfYPjm7YTNVL95kDAQre",
  "key7": "2fQ3UdWMpbHYNfqP2FtBwQZcadWrtF93iVTqLuYgYPkxnC55b6xfZ4Gg6taUkjjaHiavSMXXthrsvVWGdbAR15Zj",
  "key8": "4BvMyrchqtkRNZviSgYXw67St8AEVYbL6bRiMDhpKVSSq6EHdKaDUYtuD82qZhZoTDG7Px49XPcwrMTy83hC7kDp",
  "key9": "3rnXKvKgGPBQ6LMbKJAsAPMtqqphYqxwRwo9rnRd4jFtVbEqXsge4vL478mMURAx7Ny5gkPsHYJYebSvt2uEH5aP",
  "key10": "mArmr8QCuLz3mR4ZC5H9Jxa5AFnF4TrhAedH2wqCmaXFUeoKmhH9z4df2AxaqLaQFhgTqK6cgMDb3V8nompjiFt",
  "key11": "TtofV18ZwjdDfFQpmk2Tb7KobJBkWd4dHBaGYcijJC3QXZjvHuu4ykhGvKrHr9gp6ReS8QaoKtnRWwd7xho24QD",
  "key12": "2vHHUiCCCbp6eDzAz8FrjaEHeYNpNHta5C1aye8PemDeKx7YVTmooxWbG2tpHnAP8tkmqZVrHt3bXFaqhPZHZadx",
  "key13": "3WDw2fUGAYH5go1nrNzNsvMUXbesknWcRa8S4J17wEcmdN9dnowbL69GPRG8PcSv1JcD9oMVQEKKKbPHVdvS4mVa",
  "key14": "5DU9GvoL4UgTmWzfA6fMa23aGa3H4KkTExdPjf43x5Kpqc8TARKyxpMGkwLnfEPcJv3SsPmLdYx42tpoo4xAvtXk",
  "key15": "4JJ3zit1eUE5V8cbAjCCv6uepNQkb2ZQmCBfx9qYz11ubG7ecAeoE5VP2Stm64JpWjtvBriqV8L6Ap84NwyuZtJU",
  "key16": "5wU4r2Ddrmk1p2QpViPPM9GY3GZue7aTEpPfv2ZJZ6bvfw93aqfnz6rCNBRGYXYafGEWcZECV4tKEZgiRNh5HnFu",
  "key17": "5KihG3kWXAT1NZEUw5k2ZqT6Y3qXUE2UH594eorgbhAWiueCKP3p96QRismj6ecyGh54D4fQFDh6JG2uQTmf35yP",
  "key18": "5bh5nBethEC4i7TzNhEoeetezu5qdyLV6MBYuts4Rsm4UFNrvk5zTXEtQwfCypPzWgVeboJoGJcs8mMgSWV4SLqA",
  "key19": "4BME8jiWcyJibn3BoK1QxKM62o3nooW2FyJEP4E2oKRg5rs831ETrX1EdUs2wpjELbDEriLgJPzT1UdbxZpiP5AB",
  "key20": "4nufHCZDpdf2N6kExmsN1esWJGHyePnY3Mso56DMt9HgEMcmFGEcozj9Eg2avU283V14pnzoosNqRcfDTS8RKSSm",
  "key21": "JrcawpHP4j5bvozDMoBP5iinZ7NE27btsXQshmRNW4HTgYR2rvg2pyzhLEHDebhgTsTZxSLveLbXtbYGrhQRnhK",
  "key22": "5P8hDv3RLUMy9BPi4k3bwG6NiVu9eNwdBztBiCaJ4k5PB4VedMB5Cgu6mgxDNBh5dCRH5Re8rzwTTe8KD7BZWnPG",
  "key23": "5vbzYv9T53UUmca2bRLTpxdysdUGK96XuVQhwMDR8eR9cMajwMnNonk8VY7PR8TMZYuCG2XZ7jCUryMxgTtUbjuh",
  "key24": "4wVTZwBBSio9NJoBrnewbd4D618orXeTEhHcSxEY5WwMgWYpu4hVpiwPh8y3BLVyrDGr4BsfCjyL61WEKyLe1dfr",
  "key25": "R2DBjEDiMYRSdgk2E29JB3iyzLusnJAGTCcaJyJKXfVmkvePUsn1WxbSktADHwEFrd59CCknQ3K6D9ccbwVTn8X",
  "key26": "5GSyf72vw9avGUh9pbRhUL17Ke4NpFyPPPCcNoeq2te9RQ2yPaQh4xUUkSEy7oyuf2dSrFdBXJBWYV5P66KcAxES",
  "key27": "5UhLrzNn25CX7GPqjVGtY2uqrY6Qkz9qpEXVpWrtyGRc2RJzyjdWvXWJsD49r83tMP2cNXdsYqtf5egSF63j3Pdx",
  "key28": "Ej2GWgZVf66JZq9ZYAYCaHxtiENpbk6Q7UN7YW2KiWEqks7aGCAov6vJvuKWWNPiC4jeNnQXxfmetSdmPV3Bg4s",
  "key29": "3efN6WHm2SVCfiixHoxyBVBkaJAqqhoF6qgYaFbEnTSi8ScLyi5qw6PEfPenfuawR84oYR8JRM82CFLfMBTQ6QLa",
  "key30": "QK6yonmYyVNbuvdzpWWGtDTBRvFtnw1Xd9n5ksRkv3ZkAFqqZBmrsEUSKaaR175MqaGZq9JqmJFUyupvhGQasRx",
  "key31": "5ZYfV31geExrgqyuoB2XhHaHMLdiiH359LJmyAk1B1oPvxbnMZxiCDG9BPWAUnXiqAxC4thXmFYBWo7oYqaxH7Y8",
  "key32": "dZQbiuDr3jq5qamBCnfDyjxkgCGFjNpiUg3xmfLeRYdycrfLcSE5eERTLUZxeFeQK6CPqzyAoozhZ8P7LG5yqUT",
  "key33": "3cbEaVga3DJgrePCiWVT6UgM7NCiD6EwLad6QwqhQZXtmx7LtSfcr74Zj81NDVfhZLzcW1hNF3Ueq5xUcsowUKLb",
  "key34": "55VRpoef198YaC7VUMU3AWvZ4PsEkMYxgDziX6B5kQdM7HcyMNPbGNQK6MR86XjnmbEbfTuzSa2PeUuf6xVppyua",
  "key35": "2uMYy4FkeeCJLPVQcT8saJtEUsiLdUk9vQvna2yyQtftzqGamLpxMqNrjvyN2RCV4AKVi4e6rLnqSy9W8UPJSNy5",
  "key36": "eBPntFoKtqxJi34NGjzE7yN5DwSB8KCmqH51fpa2ewWVsTD5EERkdBJgXoqiSig6SjMCXpeFyFD3mSdCzdxc4Uw",
  "key37": "2ShnQUfYU6AiZEmV9U8jZ2i1gAVPBWbxC2zRGND4dtM5XqnL2spVzeei7RLsiGKLd3sQ7VgKa2xArtMhAUvBoXuu",
  "key38": "W7buNArYtBvaH2Mq1RXqQeijZECto7taaiC69Poz8ordmydzMLG2qQMABe4k5as5ySdtBTKHw76MmkJWapompR9"
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
