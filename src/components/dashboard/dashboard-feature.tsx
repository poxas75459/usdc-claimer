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
    "43psuTSU8af4RsbakNgeCKqgE1ZmbJ12jE4irGACTVEoDwDLHsoukiHmsw32F3RENsuLpas9eFuhndCcYYBqkkA4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RnpHe9FAKDThTnCFvqZvAFqsZE1oCyoUzQUpF8DiRnQfrAoB7qmPYb6qsMUom32m1TPA25GJt7HQEnUzBS7gtU9",
  "key1": "3hcWxWUHWn4KX4iHz3HrLFkUVR5KG48MbaNsJYxZudGmyNfpfnPBzTDUXijdtv4Coj8f8Wm4442zhyUTHaeQyfGd",
  "key2": "CeZa2WTgJuK4eVD6LCt25DdaRckiHsNGEahugv1L43nB69gBKJcQLXZwmQuJvyv6WMMVWFJAmiU5uegukp67zmc",
  "key3": "PExkuQCgSCnuX9trmyJ3sKMeiiAevEhfNMdXbtRxae5ud6sbDm4THA2PMPXhgsJobbT34cGLof7VReqUEJLGyvN",
  "key4": "3m9Uyx1W1cxxBGu7qVej7pn2Bz2twtFaG8zsGgcy5pgS8mKZCeMxzToHR1vdNTGBzpaceVF7Z4Tu4gmnDNpnxQdk",
  "key5": "4JSL1pQ7qKtq5f2cBNDHFfd52hEYjCWnU13WiQ4qXgj3J2aZ3P4rEm3MH9JkiGSpwvcurpgvgzxYrDbtd3Y9YLa9",
  "key6": "4muGejuLwyn1EBgrZh6iX3LipwTrd9q2NrNNYN2E8e9qPhDc1iZYhPPcYTUYTUuLt44YUgUp4SbNGdEiwhmeDhZJ",
  "key7": "44GinzexEG57jmKH97GDH62W9rmrqpCdndhtEZYXnrhbgXwzgYEHjPf3db8chQhDBAfM2HHZ8dvPdVu8Tbx7TqeU",
  "key8": "UfBp8T8AShRbGB3199tgZU18MRXxSryMnECh91ttXRnuKtJHrqXRwiGA7cuEtS6rLjEEoHdEqiGgSkgRQjrqa2w",
  "key9": "4fBWZ1kD52TyvsWNx89ua8Goz3eMWtMuTR4pksE8GbTfdpuVyGusekKHh5No4mYSkErcpgoWKrAdvsmsw39R3CjK",
  "key10": "3uJZSANiMUfa43mFo4Y3PFZk4zHAP2Z49whfCWYhmeVkKKE2rFAUCrMpPw8Sn8pJeRYj2miGpNcqShZYde5QF84t",
  "key11": "3kSU9Y8bD84j4qywdd1fUhmuy9z7oMtAveKBb8dGDBMZBUj2bWzk9abrnU1G8D8yGjL3epqkbnhz6FSN7nk81Wv",
  "key12": "2a2Ne61Tqmc9m2nyC6dsWVZ21MexFDr486gmdCku6QBjdKgVV1XcpTx5fF6KHXAfz7vPHoUNQ2SVx3eLwapU1TqC",
  "key13": "5jQL9CTXrX6sC2Nz4hHnFhpqGrMSPqkoSiXopcaR5VEqTJjihe3g1e4iPdugQuGYYzJFZ2jZq22mWxeuiEsiqp5X",
  "key14": "21iTGiqbzy9HZEeVNgQf2b3SsMg4SpaAy6xH9Qk4unqeJWMfRPG8heDPhHPQoEFM9qV5MrtT8hcs4PWwF7TXmMtK",
  "key15": "4EZcNTyGUKVxiqCYZ642PouDkZPFRWFkM2AijiQmCP6EyQPT6MrdXtrfLoJxpWx2ivL9GB1QPmoT29vAG8jJNzb2",
  "key16": "3x9FcCCUSh3F9RAuNHCMnV8w4zoKu4q2BSfZFR5VUhSQeMTx7VyJQNJgX9AUrpga6C9qAv3GmC86LkFZAwWkcwZ",
  "key17": "5Znsfq9TryY1wswbJZ2dWFV12qe8eh71TYs81M8GydGTnfFkE9PhZZraBYgSCE2iuK1Ub8oswwqBoULATUi7At11",
  "key18": "3kFyoQs1gaoB7Wuqj1YhvyMnH1G8LnmZrNNtQKnZjSwMvgJPrhtDB28y32DaCUF4Drc8qZTpAppmEs3pdotkeunE",
  "key19": "58SoxDkW8FQCkoGK3Q5Cw3Cq8za42QisBJyGGLJHxz2BDZsjAGfMhs2bmjyRDoZqTcQHWnrzihD9DHVvsZe79m8U",
  "key20": "4rBkE1hNcxUWrcnrjXtpuQa88kvT54c4x84ALmZXMvzK9mgDw79drmRccphamsqwwveiByGYFXXnwSFFS3dXQsx4",
  "key21": "v8FJr912GnfGqHdLB7WQc9L4n7pEHtVavGDkQFhXKke5YbXa91WmPY9zvGweK6S2uDRkRDxE9ZZB8Ezr89Rz4ov",
  "key22": "5j2WNr7qB3UjKtBK8BQbsdNaMW7bPGCcmbufxvmNz8dj8J7BChFWuaqXJg1py5nYbweTQWPNSNSLsfDo4VMEKWvd",
  "key23": "5YYFBvsiEFdGHM4W9kj3D7oh2sdqY7ss9g1TfscyeAAwfS9sQtEpqH9n49RJtaLUttfQUtqxNcuA51yrUsNSaqNU",
  "key24": "486L4384dzKrbkCniUT6ATbT1bNp7zxXqYMGp2YP2F4r38zkHNN8gpSmXsQXQM2znrnJ6ycR6pEXFtBygtizVgKc",
  "key25": "YwjKFUK265tLDMbmW1LNFzFoAU8u9iQWBn2m66WFn4VMoTZccpog37JtsEQHYnUMNSJVEP8tnqp8wedowAJ4K7b",
  "key26": "3Cw3MEWWN7dEnz64S7uZH2BLaULfFBE6ECSLUA1vjqLJuNpgBwWMNH22YpfWTGeXC37N1KWh6ybdzHjf6x6aFZEp",
  "key27": "r4FJbBoKeRnuNrjnQuSpDrWX2TzSbHp1PgVDSpQqt7NjNAApj6KzipEa4odX5x7hR4QWpifASxonGPMPgajWdXW",
  "key28": "5oi5UrXgKNacrbj5TB6LRmHfasuwU6cJczqHEKLKF4ba8mJ7HL6twouQTdH485s9hWuQHvjQSBYm9YP4bbnJCzPu",
  "key29": "3bnRWMaJjYzibf95TGiJuTGoxSthUkHqwhybsnG92rwQzGLSFZDeRgcupqDPwjRzZfDid3cxxH5UmkAqP1RLCWak",
  "key30": "BoJNhYcXPBnZYAjXyedQdxaJ4uzgHG9TSniQKbXBLyBmtnCdJmrURbDKLs9NMnM3EJ6Fij5qDDC9zZfe3mxWTNd",
  "key31": "4KwB4CJCBDWhLxgPdjwZS6QSXBvCyqnADKbYtuonbQ1uToddiYMV19ovwBbrabfZhf6ALRNbbiMH7Fsc38uZ8xh3",
  "key32": "3HCPpPoAaVU5U2vwSJDKsHEG3QcA4KuPjHvg8k44YhXo2aAQ2RQ2wSNZ7cJeYwmLvbYjRKsCsCqnwjstMwuvQ4yW",
  "key33": "3JAxuCME6YLopx1Ndpb6PSFXjZgSMTkaF3XyXRM7hz3yhX64VF5WKf7Udp5sYDaT8YXTPvFE3ZWMjUg7xR3TYt6F",
  "key34": "3kEhBUNQAVmzutimHx4qqZwJB12ZNxktjd36XbTtrEXtDdEcMNiqcSdxaBzoZXNS8hW84kEDm1cENpaB9He428QH",
  "key35": "2wNo4bYG55dzPjWVpUwxTreXs1ddBck2peESqxRRN6s774Fv2MqkEnSKLYdvhrLVSaCkNogpGn6UZEbqfVrNk721",
  "key36": "3zYxTRPwFQZ61UCPTVHDyCWc1hagamYgUaNEssKgDqR2mffXM5qv56uSFEKcv1394Qw9e3UVn9A8FbJrrMCjBjuB",
  "key37": "4mMD35zxogsFEEH1ypAqAsmp1c1UyeYSkYJeGNT1bLKwDJXHNMYRA7wL1KLyaaFzWQyoeXJ4GgeNmbwy9ANTEoBe",
  "key38": "2jYWdfCNNHU71xCKoqEoVUkWXCPV9W9N4zS8mhELHYBNeo3c85UPRNQ42QCKHneXY1BkPD7VXJnmNkQFzj9feSuk",
  "key39": "36s6vMz1YjhNP476gg4XzEM7Zp99zRXd8xVSUaK8K6dsHeqCdvT1n2qgMN4VHQsZeDQ2bvTMpUmwrmjZizF29Zir",
  "key40": "wkRUjLUPfKQKyUW6BtTRUuncgyAbknL5A6CrDftshYAo1TZfbTqfcwBDV7UbFE3zx8BREiadbrvsKpoXpuzwukj",
  "key41": "63HgGpsxM22cBpxCq9btUdGMH3G6PfCxcDBfQLgZJ3aFtKhB3KvVikLVTVqdfAtGogNUX8JSe7sAPaapnjUeKUdb",
  "key42": "2jvEiExGsyPiwC5wa1uenRaFdv4yHWfYuQuFoBWxRuHXSBcrxM3aG913LKp27RrqrSyPLdzdiEA414MMSb22DahR",
  "key43": "2kfEUGWyCa1j7kUPsfopBykXCMXt3st1D7oWjEMCBxUbcXGKT6XZjGzmAY7VAD1dnX8bWwcxm6fWGAGeV84BptWt",
  "key44": "4aByq8ksiLCzqM5jLi8PBZxJCrdd7PPWZfjwfPTTJruSEXzeCTC2QLP8xydFPXdb5o7BtVjn2JpBWh373FzNZWUV",
  "key45": "ZbR5k42hqNDQo9s5P1dmN2FCHkTvp4FvFdisS2JcNfEw1gpcv9YkUD8TeZUypDU7GTzMwi7emU6fv6cRsR29NPy",
  "key46": "3oy9SDvpfzeXTcVNLbRzBzP5K7zXmBDSsUmsq8qba3Tud5DZSZXnCpLz3sR3aHxiMyG53hamcdwrSxch3GaiZMzL",
  "key47": "LueUfCYFbWaW5HUTQAGs5w6DqzjnqpDtmf3G8XvFmGUFLvHVvNJz6sx1NCHWeuJt8e8wLrez3KkfffD3dyjbN5Z"
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
