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
    "9ownCDUkrAHvmUpwi4kq5jyuVnCuSBW5Qj3NGV9atm8KnfDJ62DxKHyxXUrw2zMP2UpwsREK8qUTeuh2ctHWupN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PdutZSYTqU8oGmtMzACCj6vp1ZujvFXtWJpxEoDQaHXnQETCFD4XiYaE8kcSLfTQ8KJbEsSSkXpu1STNw85zTgZ",
  "key1": "L44BP5yGfB2brqx6QDPH1qyNUAte3KG8i7MGBSESszZgng5FmyE87NDmSRv67CczrDvT5gX5YnuFJSBLZTvsjfL",
  "key2": "5PJs6bShqPSQMn99HkZERjTCpvf5ZJf2s4bA7QX9bJFsvvG5Yo675jvLxo3UmBoah8E1uJrwYr3S2ipXRhGzSv8K",
  "key3": "44PnzgpoAn9KSioWFtSwVr6vD3bJ9Ejx9a4c1vM3nfVERqmcCW2u5WPUsJ5AM9PTdf1phrDwXV5idcaYvTzt86MX",
  "key4": "5aDWhhk2GcVvmJGT4a2BNvc69kssDsCCxw6hjCR2vRLjq51Z19vDYr2vy7gHwhCCAoHEi854zJx6pkh3hMTKjXy6",
  "key5": "61orvKN4yjA5T75fwpciCCiGYsvfL9xFFWHqmKuXBgnstyHipbLvrNqgyTKCfsWd3XKBkWT3aYF6ZKEUwPP7Ss2y",
  "key6": "31Ymr3pM5mRBFWsaHmmKujm2aS6YgGQqVKFk1sdf114BcEb7DGAz9gYP72xF56hWuysqdma8H9ELpTBvD1Big2tz",
  "key7": "4uDz7Tz3Ci4e2F3MRuxPjcKUvNK5oYjHkxNHLYNMEmUjGETHt6jPXP6BFnvcWDa5HARAKYzBY7KnGzoMRZ8XvJC6",
  "key8": "fCZeKURxi2GBqyahCgtDnb6GMegioUxM9pBdktLAoEuEwmA8P9Nk17nk8Dap4fxf6Qvo7sbSwsjEy82Yw6ZYhtu",
  "key9": "CZsruNW82Fy13QRrCET99xi9rMNNvT8Jwy9voQs7U9QtKXSXx3uhFV95HpRLQDeV2qMF7nRMMQWrBNnYmenyVgh",
  "key10": "679CbAdNzbAkCPLqKy56oXNUKuiPUREAFCwhQkiEsuyyCad1mSkA9WdQ2WD33Ldf1wNUkPHax3NjhBEphN3MFeki",
  "key11": "2FxvzPnVrusWPc7yVLVWnad2zk29QTm2ivbxLxFQPnwSd3A2s71Af5L1obnZABMt3oNf2p7gGRgMv6yeywaWunEM",
  "key12": "2e5znDqn6JrBNiUHTRGvKSb2mAUQjyVKSHyPnqpZNLapfgXn9gbEGzvtLAuJDz8qzicZm3b3HfBfAWWzxhuCaokk",
  "key13": "5XZEsr9SsbsiZrkP4ZmeEgj9NW7LJQQcGcnQPAtZWem8WAp5mSbJYJQhPGJ6Bf61vGXnqA7sewjKzV9xXcY9k4jV",
  "key14": "4JVPd76eg15v6AA5RPTT7WjccqkEhz6GoivaVmHLHwQQPK8dNaxbozwEy9dLXjdSnERwTSAMaDccaPqqNKsqigLr",
  "key15": "2ZT67tum2vahUDszaYJiQURkviTYmzqsSwT1nm5yKe4Xvv5Dkr9hxY2h2Hi1sNndkcofRQDhjidrFjivaRV7Zjg3",
  "key16": "3Vkj42JNmspAjLUwqjYKzuRqiBqjtViNiV4XyeepEN3nNrNH8ZckqvgWhkg7V2mBrXtTyaa1Qy3vkCQREMqsGkHT",
  "key17": "5URmQWTYgjDxQwGZNZKK4Kq7a8n9doj3Rs77BPyBwDhMgR5BDkyVt4LpGbvcea7sZWGw2yV1LrvoiVjuM9YVgKsg",
  "key18": "2xByqFoRxf61jquoxRyhnTRvPTxQdB3cPwJC6L49PMqHCH8VyA7uDqpbAXASUj8H4yRXMttvDTA9SznaJNT6hi9B",
  "key19": "2nCGDMebCTNq9wgogqtYQnP8ZCKAHvRza47QAfYePMnigb3QFyi1y16f1EgcYYJkxvJDrSVsZGwKEU28FVfvNC2m",
  "key20": "5r3KpFTadF1VYdhjCfz2aJe9j8SnXMoQToyfSjWapmrWKttYhoVKKwwnrShEvhZm1LGbbh3EwvETZukmggDWEUkU",
  "key21": "49wc916bDg68cNBgLFumKJNSKPRHBsgV9TaJCi8DU9U2Vt73CySFnVS2XbDEEuqcU8wgRpyerUQGURvHUGKVp9iN",
  "key22": "4zNLSN3MNe6JyxySwzSCEaGHbMbUGAwcJqevfvhcEYpFKNwe9nbfVhTaB697zN9u3rA3Po6PeLWqsFgAKJe5oCPa",
  "key23": "2WywvrX7Dnbv3pJ3X5xiAdS3e8gXzvqeBhdYkzn2gCYTg6oXQBBtkwWAKfE9wfTfbCQHm4jAcN7Gv7y9Nc2E7mQY",
  "key24": "5Bp777sVapmFQsr6rEygEc2gE3FcySCJ3LB2bwvhPhHgKaphzWS3jHFM7uT5ThpNBKVD3v8omzJYVWwE7g6cwZxR",
  "key25": "BCND4BBQN8uC7YG27r571zTuy9vFnrK6re15qNSGnW1BjeJPzTudwsRfwVU1fLd431JJBKaC4ZU2J9ou9XkgXiM",
  "key26": "2giFtynwfiWrCuy59ZPjTr6Li8htEtxoN7FrpHtZLb2BhCYzq1hbQuWEMp9KmUT7ZmXLouBy7Ai1Vw7Cx2pNhwbJ",
  "key27": "2tjC5auatkACAV55Rohb7HULM69hK5ew17M3o7LQUuEd1RspqKyvPGAv7EqNr2aTYENVc7X7vJJ1i1FyMNsBRcRs",
  "key28": "4ZfFETbebqE2oPCcafVYqrErsT64Ew8jk79usVDLb6SREUM7MSbqguH2oyLb9rojj82VoFY28cn7bse5K18wAazb",
  "key29": "PmzC7agZmqDaJLxn2g8wCEYQreGGQBzVehQe6dG2YTyta1hok81BZCaPCwd1CSHLv39XjYX6Wuk9fGswftLTRWf",
  "key30": "54KEJoY7a9g3W6EN1VpgC5fjgv37NWdHCaMcgkw3D8fhgXCFCHoLt8LsKcNW1LgdzkzHhgoHELybRHwkKAUkXtuC",
  "key31": "em1zmGvqTzt9q2zHu7KksES9u3nUFjRy3xzh2qMnx3bE1hRBKNbxDCXUyBBEPT2BLAFNGASxXeDSUZVkrLbEdUb",
  "key32": "3Pbh8gzAwaoM2asqy8BMsovV8zcLfL5JbM79A7ZrCCe8uzh9SRifCeAJfvwK1d7coy4dCvD1zumvBnzwmk3jnFsF",
  "key33": "DPMSwMXwvbTx4B7nEgiubobGDn6K4U4AvY3nzm1mzMHLNbsUDdoLV5fe3Yhgr88YjyHkG7b2CWXCyQJZET72ktE",
  "key34": "BJo7ioj6fryYm4TJdXjX2nWShTLLsrVf5HKZD1u4gbE2gPhiFm8BQYnJXQLJKbxJ3PQK7ntyg5rbBzrUdxDYDiv"
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
