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
    "pCfPURMUsLW26qbXE3KQcx4kbMZg9Ef2FvXEeQnbrnWYE9XmUxMyPPnQDEwHebHG3ZUvgnE5XH7G53gb8QjN9d5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58EHkNKQgsSprf83JARTUMFByJGgTjHVChqZDAurDEq8XV6tdGSty7WudQa6FLWY4eXGFFexxsPmZLUtA4bT9L8Y",
  "key1": "34bTQZRqHZAUSEZDe51YUGab2C8BR7bZn6yx6SoGvRJ8qiZwUDBCb58x1Arb6eBygfiMZZdYsk5mSmGNiy7GsGYx",
  "key2": "g1MwHrP2niJwFaNXfbczLWtNgo1Womg9UEC2Fk6Td85xYvdWDSoVTxZwHRb9FwJHN4Mj3mWJbEMu2mhAYQstofA",
  "key3": "4Bz2eh1ceVp7cr9zNH1H6hbfuo7UB2UHPKmk93qfmMiJzfYYT4hT52Hyhzmjx3HdZzCStgjK1Eicx4dwrmcqbiNw",
  "key4": "312dysd2WjQXrCMGuVKKQJXJjmy37rHGb7h2jaPhnQjsSFeKmcjHsQUhzcqb3j9ZAjCn2f6wADS9tYsdAWfJJ2cn",
  "key5": "2n13Dh5s2M1AN4QUPszX8Tifb9snMjE3CtaKo8urGYduK4vzsjMeufriVVFYCHGMSMsXSAiwf56TX8kJRbMdbLmC",
  "key6": "dzGZCdA4KJwJminYqKr29c3rSRaELjb4Dpk9WSBDMDUHdHo1T2qMaVx6yFzk899ppGvD5XdUX8K99n3cXfvd4H1",
  "key7": "2ckbuQgZuSAuYr7VvDE9LDwrRDh3NhmCKGaTUT2qwzSyQAsQkgsCxC8iPao3X1jeryFXJvHpUxELviREQAeW7Vhs",
  "key8": "3bZNuWhZwrSD66KXDcSTjKa6499vHjq7NaxCjxUw4y1ivQi7uuFsggCtpHuRFFFUooUVRCPxT5U4ko2CtMHitG3H",
  "key9": "5AMCmnY9pFQP95i7R9DfrJsvxFDXDkPPM16VUQs15htxT5WQKj7SeioZ3dMePPA1XEgoxGAB8dL3pYQH9NF87CGD",
  "key10": "5766jsoq987Vdvq6J5c6ebnzhb8BvEH5X7DTEogbygLacaQXJrsbRagLcUh4H4e6vUvUuLr2xaY9oHmVBaGqUZZc",
  "key11": "43SEasbiM6XDoGdk6iT9gKWgcVhBtEaWmQQaQQe7A9n1hA62Uxx71KasyftzT7SotymAfWAxVCXHRbTRi7g5erCZ",
  "key12": "4y8yq3NDysyV4qtPRziko4zwPHm3jM3EjUZppYsCfVjHZyNyEwR6mhzR84wMh7tVHHMeo9Q8JBKPk5mfk2CvnuGm",
  "key13": "45Mg1QdJHZFP1CoJEhaiqtZXd8W9QhBef3Uv4q6ZTqozyBsjQHFHLdTwqPQYhpPDPpSWHjJxseX4v6ZZ9hRuuubc",
  "key14": "5FpkfiRR9bXgDZCijmqQrPxtj1chynetXuaEkVZxynFZDdCcPsG4Eeza14AJZHV2doSMmE3p5t79x419tpVnK4Hw",
  "key15": "3puqPdafbqcUhFWoVXA8kMU2Ay2vWowfFpiChYAneCNmsmJHKurhUKTpFaJNZ4fEJAg9q1HwFLTuXWozinKT73Rd",
  "key16": "4FTSddU9GngABzgZGWHSZjGSgGWKrvxKKi85PLXhGLqxrjHEhT4Udu2kPT9mGu1P748edWR5zogd9xeiJVqZxUJb",
  "key17": "4Nzc6xqnYVnEUpjmRguxPCzS4YsCr5XzebUfunTBbDerTtmhH4Q3iPH8kUpPmFYVHB78KBMVqNfky1BuWM4k4Zab",
  "key18": "3Zwk8PAjPMRjjJfzVfyR5P2Exogga2EBwQ5Edyawtk1jLJMGJY3N7QdX6RPiUuBK9SX3zzayTnK8mQRf3w9vBtnP",
  "key19": "3DAWm5bSX9stWgWLz5aCYk8xsfFLMLQKsayeGyiPyr3n4ugqwxeww23SSHgLZciDVLQmpnqHTe3hJfjkGtPhXqPw",
  "key20": "4MdUK2wdsgbXmcVnRex1X9dhd2KUkatnJ75qECaZrwaJLa2rU1zdJygNrKutytS6fRKXLqqjc1vTEkLfMVUasm28",
  "key21": "4V1zseDAdgvALYbhk2SBza6QGnSDsuAUwHdJs6gfYwrBrPpLTFWpoY38vzBn3Zn1eWnNxQkfKLJq8mbmv7Rps7F2",
  "key22": "5XdCJKNT4QzG6KyxqZoVbANVYnPxMRh5ZznGUX2dAcFpL1KaiqrogtRQC9kkwZHtBikKA2ejzyCf15U5VNGTcg1R",
  "key23": "mV4EuTTCYbKzVrKh3wppeS1six8Agk5N23eDnkDcNcAR2Ygpcgd5GhD4is6Qi5ZhDd2U88fk8HBUqiZGtpGASQn",
  "key24": "D4kwNUAbJ1BqbivjzmocnH5wpENKxnsSnN2pCBTPurGQHnNH6pcCsKqMpQNG8U7RifKEYagxtKU1xRzdg4bE1WB",
  "key25": "3M4ASu6CL9dwb3bVvxrV9CCyLAgcbHXvNvXSVWUvX2EWSEBwghWqN87yDLvj9Ny8SZcGafQZ15tBERqHHYvf6Cps",
  "key26": "5GG4xDwBHbei585XZr8NLsJE3skry7EoSykxsvNcwigQRV1GcdyKnSWYKbYqLfiFtDrsZk3Ve7sXaM6FayK2Xpi6",
  "key27": "42xcTjUxbyrsu8DLZwZGENaT67Y7kinEfDbc1z4s4T3cQ2WtpG82Cb9KrzUKcuUcGQkxTVSGtjnhCDp5NHtTnucC",
  "key28": "aQprzruJusspwVV7ra6opaCN4qS2bswPjKyNAsZEkrmVvzx3aLHLCqYnresJqt9hiADoV2z1MLWdcd72tQqNygU",
  "key29": "5jRXbrgYqd7Z5yngviWAndgrVSpcuzJqaNhzy21oksyVcBesSdntUzaE4D4eBwmA4G6H29anhSbxM2MEU73ZiYPc",
  "key30": "QyYV82NdPcmctQ9ZpyFxZDXyenp4PW1tEZtPpDJghq8NENYp4R3gcRmqwdgv1rQt9KHQfCiALsvdxq2Kdsp3obv",
  "key31": "2TuhAW43kd62ojhBoXByk4PFx2XNxNzpEczNKxyd5eR3UzmiK2k5fKLioqWvcZLY3wz9pzYrLpLSTK2KaRZSvdqy",
  "key32": "5rTeKhR6hPVSL5RQTH68F8vcL3y6voswD4biwXVca8KaBbeQf1RQeVsyNUs5ZFmDtcfvkDy52g1CtRtAPK7DCse8",
  "key33": "2JC6C1LZtdWvUo9xR4soyoBiiSuABYu69Uqyn8AHwzXYGVF3aup9Gxc9GYQqxoEXUfT1sF7PgMQjexUnhZewrWLB",
  "key34": "nomHKZsFsRiB6s7agEcGDSYTSPsuhe1xT1nDgoShfybFvtYJcenjns7zb9oC4HTMQe8WhPKCoPQz5KU5GJ7pMAR",
  "key35": "38HKA8PyQu3777ZnFzJ6ACUYiGvd71MVkowLSc8UuUShq6Lv3ufpVrsHjJNLqVR9zxRHDh4ASXgzX4nUKfwEjFzy",
  "key36": "42SjEtMHdXa2F1YBpgsK8uHQmVtfChuefazJnx3V1t5jKkh5ShXv7sDdZftsUXuVWsf6FZALP7qazSSoctZPf8qD",
  "key37": "5rfqkSBiBjB9GqcBTYFziUZPUHiH2wRGsaq3M56u3wktF2HZRsW6yYdoP6v9MggKrpiskgUTYkoSqKN8ZXkgQDau",
  "key38": "4gr4yLCibMJ3PeaSgHv2qtm9mWrut9dpzHwjF93JyqXkxCn8WnYf7334VbAWKwgEFsb9yntJi478xRhdycgFqzQd",
  "key39": "2BUSWq3joj9ipF1GS4nLsy4fPvLaJdqkEqRJr5m833uJBLKkP3zG1FReiTYt18ozi1qNnvTXUTFcaDaQpZ94ERNz",
  "key40": "5Ef2J2HeTMsVUv3FMDFhHGqZvpaaUS93aivdvy8fhp3ZxgCtC8qUJjC68863B9wWoNMrBQvzCVe8qeGnUoQSKt3z",
  "key41": "57Pbzz1YM9R4PguTNm63NFzySCvXsnpf1zzj98AhW3dvTW29R5BJPgJjDiGWhUvNVYENv9E9sECnWcSparf7nAer",
  "key42": "4b9JSNhuhaZknCLgyhP1Yb2zqNzgGojy3q28xDW2SDxzxu3L7DAK1wjuxe8mvBo5zWGFs3SSXCnvZA1D8W18AS7R",
  "key43": "2RdJ39AnmXFVcAD3A1nbPUm5QYk8ug1DyrAvzKrxKzhDFfHXVK3eR8L9arqKuJHqrJYKEhQx7cBgzoSmSxrrEDq4",
  "key44": "4V9iM6LTJmwotVrduokmyJk47M5ui3xmax9qo5fTS6hgGt8ydHYdG4iyNdTkX4fZ4UoAvhHAfHBcwsopyPdfbN8X",
  "key45": "zSy9aLW2DeEbZfENgE4Md3AxQbs9aQ2SYGGN3sZfVKxmWzULXrPtEUXKxTDbFMHdbR98LwnJFkya8q3Zv4v2MwV",
  "key46": "3CWvh2qW8dB4adJmrohQv9dVKktwMSHDWABurad4JDdPEQ2GNtYYe6kuGEognThR1kSYLUDBEvzxZPLZPeQjR8kB",
  "key47": "3CN68dpreXQDAhDMKPXTAgA2CL6WBeV4GRWb5xNnHanAiz9VvD379XBMa2iie9cUFp53nvNv232sp8dmUUgcJh8F",
  "key48": "4wmkfbdbh88zz4Y3R2UjmrzHNb11B1C8Tr1fHYq51AgkY3nfQEz74Ee1QHKqUGXHkgpMWg3PNCyRYzcjo9dL9XJP",
  "key49": "3YwAS9pfqgpAU8WYQsXnRW1s1Gqw6tzZZsGSCSZccvPfrK35KhzXKW4byWGvTutbbA5ttkiieVgtPjACB3RkFn7H"
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
