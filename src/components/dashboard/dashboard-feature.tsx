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
    "5myniacPhpUUJFNcBXL9eSyeAt1BgkR8CWooahSWzK8EEe3SMNxaQZ9M37vZaJ5YcVxtTBXhX9ZAAX3aRXwSTzrT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33pSPRLRFHq2oT5D3ELE1fg3abbhTjVLSwHNHhCDnuRKsK5iKtsq2or9e8XeMArbCX9RznaCgbeoHquxCixU6iRy",
  "key1": "3vEzU8m6p5Zwyahpzdn1AkCcpYNk2ypumQgdXjWjmtxtKCHuur6wdXhDBPJgn4FUKPm1fLnPCtHMz6vV5axWjsSY",
  "key2": "UUpiCNmNWPQoRKWNr145PdSGyZPnVoErGXEho7NpWg3YrGHuqm1MHDcDAqeLdP2Lr1ykWwY3F8AogfXL9KTmMt7",
  "key3": "1hmxjGWTYU2jwwDBsgNwniLYwv2Z7fKYWzPJCGAsofwW7rLTs9x5H4URWBap37R6HC5buBzm5spzYqsCNWLkeeX",
  "key4": "4vPNPm2ugAmovmReEUrsHhSEYQuDNP2cb7amJBaxrsjw8YfiXvkNDBX3JaNxGWibQYhUTsWbLTDr6ASwGsNCYYf4",
  "key5": "CGNcohgGchbFdHqozXnrLTxdobgHsCGgTmy3E6RtmggbFiZVgZRd4ffqeQrWhV7V9m6brcXffawsES4pqSsLKtr",
  "key6": "35dwmi42vcH5Y2nBAGRsT6uZgd3EMpAChvdBBUTi7hT23zKAbPSgjPS85p1oPzoRhHwJThM5wro3n2iLodqZHdDG",
  "key7": "4tLcQEWkt1c2vkqPvnA53x8njVLQrpB9RZ5mjjqLg8KNkrFF9Awix8yZ3VemsiUZWqVHje2CEMuTgxTFQufsXiwP",
  "key8": "2yPANYnCv2zt8EmCPhpyVmDmoRqSVHbeperyUFXDskiUti5QyGPQMGrrbmgdLdfd4WQ18L9cExjeT1125C5ZYw3i",
  "key9": "3hzax6YaRXnNScAfY4Eq74wBk8g6HAiy3ogHJwhoTriF2kzpcWsWCFj6As9zLzcwihCPdd6SBiVDf1rYyqQ5pShz",
  "key10": "2KoHpxL1LKXZJU9VrpxtPX8AhqJcEWLwCLFy3YfBSx7awLTo1bLvPMD3U7XskkSG3wEor2H5afvWE1LXKxAobLTi",
  "key11": "43ZYSKNs63hJXspoEJzeNzWxdgbVKj3mhUCVtLP63KAWu8LmFGZvEEi1kcegvp1qzjwr8swyzHVCKKVwy3S838Zs",
  "key12": "2dPDYrRytBeR8oCCPou9Nt5ghbsA8Jxy5MoTkSENDGw3g7eMFAtmN57sUt1FUtLewSiQZ4uE1iAFGNkVKqYoZJeR",
  "key13": "4qcxrtUHKsQW4vkLnKEKx8hmkkrDH6qyBsR3jQXVtzDGbNoXGqkhYF7qLakaPdQcFnoLhF24s6BaSN8irvFBHa9E",
  "key14": "3scH3UDv7WoE1Fj2VT5EU1eiszQBd4N64wG9Yn9XgSu1YX6boALXyj1nnQmwTgfk8rLn5ABDZa5wEo9G3ucna3MA",
  "key15": "3J9DDJL9iBjBvfhbt2NUaYvv7VEoUk2pSbN4L8Ui9sVtjf53Bj8y6XztjqsQopxdG3egSrPUPh4xRZc4KgHaHuar",
  "key16": "2jACjhTscLZQUZKbPnzzmK3np1mZRaCGTXGP4uK2PqDRJ9qKZF4CczYEa4xFC93FDHZiFz3cLHLUw8zQpBsqagLT",
  "key17": "5EsKLXNUtEW6mpaf8GaV55arhqDLxF6EwB2MdevEF3umaEMH7uW3Ww4YT1U3fkqmjz8LTu5RuywEtVnfJfXyNCZp",
  "key18": "F5gP2CjMZfKsZsWv2fENtjTFnEPHmwrB8S9FPeynjySH11CNW5VF1rFWAYeVSoYxia39W61h2n9ew3LfoBQYe1a",
  "key19": "4CDCpupyBrGRCHjxsbjdW85b2QjGdZVJ2ixWjmaPJGLR7KDGc175TDZV4qsu1hZUiyxovvwhhs4ucR91Gxm7ZfMD",
  "key20": "576ppvfLCP71sCeT3oE6pJSejGRHDGH6gTpwPod3seYW5qTAi1kzhzgSktcL7tACdXt8TR13Bg2jesbDStc6uPPx",
  "key21": "3HF2cV6yyTMQ7NvPf3xsBJfbSjCkEmxVu8SEVEz2MqF12RyiLwagp47zepQXspvo711ZpMZof4p1cZtQhecqmE6M",
  "key22": "4ccC8tmPHDF8tum7QnXoBQAc3siHGF6AhRzz4Afegt6WsC9qCsfxpXRYVEpTQd7HhhUiQBdCAagfPju5v4Smop7z",
  "key23": "5GvYDZYYYvpwUtE1Ar2Faho6q9S3ze75GEbM7K3uBN8zMD2tdL3LDXTTcgo4Bf9bpGxri8KGuVgHvhGjHjj7jvBR",
  "key24": "4Vp2s4F8Ku7y5rxQX2CurREoBNNTB79XWHTbeaNAdeYCWTTh4oCVTYTGFKX5onomJDAyP7SNdA2TuwmjZEf6hBWf",
  "key25": "4SVkkczUUYhYphTtuUj3PtBBAPCiXN8oceTQp7dw84LYyHNMvjdFiNbWPzKQnetXd32YJSdkpgo5sMXycVEv1LPm",
  "key26": "2w8BZvHzvDoXYNY2YHBWYzhiCvo93jmZzxq5kxvpZpTGgpqBF9LvP8kCKXdC7evp6HRN34rgVHmCcraWc2b8MtX8",
  "key27": "45yiSaHJ9to1KL8VEsRxKSYS4C5r6Lx4Qr1duggAeZuwCrD9VPxUwV4W8c6PTjDDWfAtYrpGGBpfX7T2ypk8naJr",
  "key28": "51Cbu52scsUt5tDMJM6RgEwqhEng8M8j9RqZnnvBSmQxpZEGdepMt6nSQwigt8u9GQoHD42B9nxcYVwnLUWQ5rB8",
  "key29": "upeFoD46VcmWjFFq2oV5aQFVPg66rM7APAv7uxrEBdZKzYLEaJGBJ4Fb77cCozJ8QLfrm9tzTW4beft2kH9cM1H",
  "key30": "4f6VeQw2xwJp4TvktF3DRrm5bQvFddHVDw8mypPQz7AYjPcm5mHkyDEeCQJ8SHQkicNbGVSsKmVWmzZS6Qy748oL",
  "key31": "3N3tjECPrUQZZbXh1A6bWTB2hWy1Sdmi4YD5VuH7t529qLMHB8LzxKmtaeo63M4Y93Un51LhkxsKrHkjnShn3NeC",
  "key32": "RUDTunuUPdFVmutJ3TUKDw6L5CpvnUgHy1HPBc9cRsgEcMbtMVL4vgP64kFfAE5yuzk8oDCkZX2YXgsHvgarab3",
  "key33": "E4eojNcEuUCMjNxYneSC6ptRgPM8ewp8PwJ3sktymTTMRMmuPdNwwhsfcZBT1ftiai5HxCPM9mMXad9hZHdZe8K",
  "key34": "3Y385wu7piWtXw4wE6njVAJo61FiPkVkPa1zN9EAReFpcuWiVDB6sP6aUQPNu9oc3BCECSzKojEqcNJDRaZJS59P",
  "key35": "3wRmZ3HHNi2yBLx2mmKdJHtVnt7oYxDT57dDEUtQeDqm4VTEkSiHrtAwyNf7BJiszT6LbsHbL2EusZg8hUfMmh27"
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
