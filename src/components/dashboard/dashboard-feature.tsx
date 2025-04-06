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
    "2YCsp3QNGqi8gLcqjMU5e6fhYHzw9kAxNL871AjgZHBwvoDeTgTuN3GRwgGD7X4fs7bNEFZAcRzsPNKoAT4F9sH8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3drZue6vhFbPxH8eeCGarWZpMPzdsr9KBfMkRrr7En2eSgNe9VoCZiCVG1qa8KJgXUTS2tu4NT44vcJT4StytWPR",
  "key1": "2EEFD73EW9oUR2e3DcPMuNYBTqPe6MhwDzewiQzzK4vwMrrpETjoxvzt5FnrCeAuzzzkVcZsivdY6Szxwtti5qUt",
  "key2": "2XDQQhdGKKKJbGbaWMg6hD9H3igTmGUAAHpAGvhnmTsjjsTRkppFdaSNXdhxz1PsTWXuc6v4UWoj2NN2VSBzztuF",
  "key3": "4J68ARKkxzaTZSexJ1Y122rrcfiWrvQCLYmT27SbtWHg8T1JBrq61No1hu6xjy5RnH1QuuRfR1paRzGwhVaTsDw2",
  "key4": "iVqVRSEqn61zvTVF17Pu4eYqAVhtCdvbAkAZ8CuUi27Bvt4hNrayaN5DY6GAWhxAwWmrPGk2jPEMa8GmeBjgKwM",
  "key5": "2ns9qTVZWQeQqXxbFQjcUB8cWLqZHqqaDFvMGLAgDSPa6AXx2dHSp7aj6ymhMWk9VQqa6j79nKZHUo5PKbiPEni",
  "key6": "3oBRgf1rjd1XHkpH5BGEuQjC1VvqMXAnPfQgzrApEE4rGNGvB1ke8fAEf7jtAGYCxW57yxLB2bfogV8s6h5BvTHj",
  "key7": "b64sPgpyowdw132yyQ14Pg2C3LFADcmVhZDE3dHrAutt2QoB1EJ6c2CnmQ2TNbknxah5omia9uzLFetUa3v9bBu",
  "key8": "2pGLS9hHvgDeD5oVGUn3JKhzJFfFYbju2oq16qTa4j2DxeR3LTTuMU4FKjTfkV929DP9CpDvbS2ka1sGqVroDheg",
  "key9": "2RpMGmdawZoR7tr2Ah6C82odrF8ogEJ6dfCpFkv32c6mtAtu3hhhoHT23ZWNyPbk29ZnZC3dbxiHZ4EgqoC65CAe",
  "key10": "3pcEvjXoCXwEgU7JVjcuhwma1UzUgGhUNugHeFsTV2nxXJYkuAnG27W5KUjyTwp5bSiCxPPuHwdn1MKoU7Y1WZ4C",
  "key11": "3xX6CuXD6At5pSXyQd5TA6ykNWfWT91FnCpVpMpoSWiz1k7pPhd55hNvvY11k4S6VgcwkXkY7eExmDTam4sxaEH7",
  "key12": "3evnyW1Bayfgw5yGfTBTSFS52NKKq1qfrp171zhAVEr28EQv8fbQF1372LEw1MoWaWxJ3SxCudSy59a4a3F8EjFW",
  "key13": "2dqJugpdcZiQox7zje5nmuVuxXPM2UiiRff9zCP81ESNAbQnxwm5ckdviMk2R7f1bk7qc5LCvaNZ6vXj5SGy9D5F",
  "key14": "31m386iDxDTtqhVBzEueuntF4P4ZfVzxAMBc7AF6CKXS49qGfqG7BMS21qBFvbhkpUdZGQuiuF61Yjc55VyKTRHD",
  "key15": "4ciWLz5L3BJa26oPkGqisdQsomYgzARYxuKNs41aErsWUSpC3sKDJssvgdF6gsekitR6UjSUV2UqK1z3ReZUfihi",
  "key16": "3X5s99f2qT66vCWw43S5mCwc3x1aGdT6jtN54ncBiQFVybvHVJ9ZLxaumFPQCbK8R7uHx284MpWqSvfSuB6jq6Ze",
  "key17": "5AcAviUVditWnp8WLJkAcTpVQfp5LKKxN4z4B1L76eQseuEaYLnEtVMQfhDNkwLpHRhFkbZH8acmSiWiairtmyyu",
  "key18": "2CS48mSTWEZ3KWCrs3TS4XYmBDdWxzZmL9wDjCnVSoejCeeoRS1PzZcme3qFHB8KyyGW226GogQ5Lig97y9zyrFv",
  "key19": "VHHPY8yMXWjrXBztE7vmsVFbKHmQp3t6hUv7owo64ZsxCxuCGLGBqFbAQyqQDbe8rGx8cqJ6RjzBvb3iAQGMyiL",
  "key20": "4qFupnAEbpsUqQyMXrE8Eee7JouCqj9kB3NcuxeZAF3HtqnwZorUnXoQWMw8rJiMRmoxpEoa2ssnkDaGSY484hae",
  "key21": "vN9ovY8Nba2VfzRaAkMds9TMcymGPHHpuafKBYht7TFSWtWjGhbdJfMm7nXDNiuNHg2CMLftjpCHQLsDAnd2kUL",
  "key22": "5rUuihWdmKG7a6WoXxjEcbeWC95GmqCjF8ir2421mzaY4ZffNAqwHCRR5otQMga3PrkpP94dfcMHY49656vSmq1B",
  "key23": "8u1g4NLNoTPr2nhbvazxi6nKqDxyfibgPrSNNNMXZE3esFJqDC5mztEW1SSK5ARSBhhXnsTpyGJmuDcrm5v9SYz",
  "key24": "3aXq6pvp9ZvqyfooQMG4APcavtbwMmDdLTaccBwGBwpFXTk459b2DUWYFSSJSLGMKVjKPkAguPDprwRJEND5ncjn",
  "key25": "5j3VXXiTBBbHiWu8R4MZbXekYA7TtvVUN7UB6gxTJ5CRhrzHuiTYvyBWduGLE1rwTEi3J2iC7NdqbV2tWhfaWsP4",
  "key26": "tw4SCr8mUVmvRM5eDbofehhCg6WbNGEnWgBomga3w6nJie4JQo24qs5qDrQL2856RDPmatZ6PcCaHJJ65TUzX3Y",
  "key27": "5scdmmzphWF98sHbBeWixk6tnH26ExqfBeig99niKDs1thd8WCe1NsaCS7RTMtdrDG8GkSbbPwx9XbZoR6Y3cquH",
  "key28": "4F3dDYXV3gq579NsHeNvMTgtLvKm42sa4EKg6yzFLG3vp2iorosc9e1JityXX7fZmwXJuXfus1o156aCDmLjQXJ5",
  "key29": "5U6FijKYnjm5LENq5dcd7NDiKFYqXhKk6wkbT3mdEE1nfFJQSST5thxX7ikLXZSXt5o5GxyLRkMmgmecSqZGsG8",
  "key30": "5RcTvus7EZf6j4wwQJcrMqfv57kP59aBpWuBKL4c6dFk7qo7UTk8E5MXAmbmCKJN6G88NiGoVZ9U27kxnQy1XytK",
  "key31": "2MoeecbHXYG4f9WrFRR7Fqw2NKSaqNfU74mDmh98AeQgpdqUEC2i3UyA1Dk9iFwkKJ68Q87wh5Ha5MmtfAs4NuCU",
  "key32": "5Fsh3LWR6SbPekoF9tkF35PPhqfTDE3hcVaCdvfvWYFNUFdikHnb5KLdUdiKTTBnaKfPBm6iD1G4kZgzPcUh9PY4",
  "key33": "rtMRfcYwtZfroNimj6FjhswHKvVSZ4wjdvnHKYis8fZFZMspdsNfzH3E8vK8TgeTiJh69CdmfaQLLrwSuZiaZnc",
  "key34": "nPvj2VBKeeHMYjPz7pCSccxhLpDDkCTN1iyA3BkgkoTgcXx5L1qCFRceQehdnmw8MowsN7TGo6iLSFxH5svk2nk",
  "key35": "319MGUwGStjtA5tJ4LPimarNrjGhW6nj4ttYe15ZYuKvoSoF6gTikMau6KENS38KESgH9LFfrMswRgfTbpKZmiug",
  "key36": "5XritrzC4Ni6QTbRkR1qtLV4DgKP4n3bEQttxHxm57wPjmo3oaQ3CckYbTG6tXRX5vkdJpbFdwc4aAYcgkX42DpW",
  "key37": "3XzgxLvSsQYRcVWQX9bz8es87jRNUxVgnNuRKEWs6ay6rSN943X1P6e5955HEGPjt7Vwcr3yo4JfmwRoWdsoHnCp",
  "key38": "YnMxyJFd4DDuY3LvUX2p7Ldg4AtZoHHP9GP92JqX7N8cvnodxNwgXaNLKRe8mBgVoStV5R5oF1uw1VhSEUFQoVk",
  "key39": "57BgMNrXTgFabqEbe6moc1DAenvGLSmbAfWyWfqqXVPRJzMRnUEb9HUohqXfGmWjdLZ6A9Bk1Niac6rGscUGiwwx",
  "key40": "5BBdXaWm4MJjE9R4YpevDq2THBFv97p2V8WkurNq7gNRaP84i4uegdd3s6awwqErqpxsXo4GEF8wVAFaQyRiWnBQ",
  "key41": "P7ikvQkNS5pZxB95z1hLVSL1JYB3r3hhB5pWSsg8dJckQLqcSJmMorLNxnw1jFEGKmDUypnDEzeR6FXcQhbSXDv",
  "key42": "5oUMJEmtFnf5AUDhnE9P4JrEXgxUT2m8qxfxU6XB5vMqErJHeb2azajeG26A2JKBGMmSHZ5LkY5YWttUncA9y3W",
  "key43": "5iwhJpHMhyhyeZBo6LMNmR4Z2KjPKqb3QZkYekCXAQNUA8dwWwNyJwEdAVnrUc4xz4LEoYugWRePLa5ytnjzwUsV",
  "key44": "3yzkKezds92Jfx7wG2Nxe1UjXaRqjMmoxzbbwUTmNUJNUSGJgkRjL5wGKqqy4jCf7PZECeUmSamhYiqxejSRpweU",
  "key45": "2npseYVpRifj6nvyk6To4jQnkDJ5xdjvZDtBFoPJy4rYF4MapEsw8j9ZX9yho1icHMYdXLtj6nAvF5e2cxZ4RECF"
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
