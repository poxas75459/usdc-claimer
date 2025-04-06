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
    "TQD6uYkTZsnrpRNwtd626H7q2LYioRWTfw4aL6orR7W7bzA6KVBVSVVcaPirV9QeHqJwFtdbHL3njcGP5ELpdDm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NeTWDMkGJrojz43VgNTBXpGaa7tbA3gs6JQhCQwcDvfHtAh32JGCLCM8UmNGv7nVRuNq3gArrBiTw5gH9AS8AYi",
  "key1": "5uwHQzPfKes4vUbnYrEVGMjhta8xycqq2jc9p5eiR1cwhHmzK5CntXUrXU4KjWknHtLFJcyW74h77xkmR1rpoW98",
  "key2": "2C7rUkpBCnrpa3u1SJcr8fmE7ZooWNWUbGC6m2wvjLFaawJrjPoiMsfdbJHfHMgUcHsLfAE2ZJhZBHbyHmWbofV8",
  "key3": "54Y9hNg5wCifGw3gt8BoxHQfscW5gQwtWwrsx61g2wBn4LQWTmYT8ewuaMUAA3KPotEmgTXfQbrL9RGMC3fsKcL4",
  "key4": "4Y6j8Vzzp7fvdcEWG1b37Q73PVZZyKTF1DserMEU6BbKEd5b67rktkzqjLiKzsuwJNJ6tTXqccsECcSd6a4vjCTz",
  "key5": "4hsA1LzmxtdPN2WgfeHNDRWx1Tjg7mS8Z29BgHbypuPPFZyTJTWx2Do5BkyidhYx56oZ7myDtybRtFCDdCcutAxa",
  "key6": "3SGwAmo6eJ7X4Qq5fC7UQjYVpmKSEr2taK49XpNcDBENrVz8HnAozFfVHKwrM27tuacSgmqkALsMmtp1MJm65WUg",
  "key7": "gAtvber1imwynJVJCJPHSLtpFBSpCUt1rgtXw957jXHqvMQfttVdZSwepHMgALjF4p9bvD26hvx4pnEttd4GT2T",
  "key8": "2S6CR2yzku1vHWcvKMBfq4SwiViYM35H1NVTZ9YMhnMyQdR4TXpd9o2ybGnvrdfXj59QquEL8EHuF6edSLMvmkh2",
  "key9": "4DVoYaTxGoT5DRxGRCYGDX4SBQxALLTkz1STt9LbksuqannjMM9Q3EpGWaxrQ6T9xjyCXsVvcjm2gVmyedQ7Jx44",
  "key10": "2mutS55ZdggGZvhZ8hHxihJS83oXvw441Mmiy5PXf9eeWtnRnxnbU7uS5KYiMCKUgUQz9guwgHe1kDnXgSoN3mDQ",
  "key11": "5zvBmPYWkEnYqzff3N89avD4pHifYXKqNSbYT6hyK9WsSs9DUeajt93qnNJHD88bjU48ztDecKdKNWYGCJ5fFkpe",
  "key12": "2tHHDdBQPiZMjLGh1kdZdjar4YWUTPp1ip7vDMiksgzP9rf7kvy8P7NthhSjDWbzjbDzuPHWAPKMnWSDE88rtwBs",
  "key13": "4fnh5CtBHk4PkpGmm5wUL4eZNg4sGfbvDZ4noSxTBuLjwydwjAjYwmKcEhG1vdKBu9S5HHyybsKuGcdeVVAcgGs2",
  "key14": "443D2FE5eXxZDAfXLhyHFisnEB69NVRZyWNeMQZuqVoCDVyoVkw3rf19cdXGjDtMxeyXA5dyFYZCcLKXeLdK2NRx",
  "key15": "Pw8FnZzxqToMhq9X9X449cLVTh5sqjBdrh6bPGK9nPEFQZT15FzNmrtYP5gQgXM4SAG7Q6pqeUJS7TMoNYFSahe",
  "key16": "BPUfVMxNV8zkXjjvv8h3FakSK1AzLEveZJaX5PfmU9yKzhjaKMNPqj4GwsoYYze4y6Pc77kv2KuN68tpWyKSBBg",
  "key17": "582feTFJatAt1ZRBDTYtnegnkfmCsDuY6MNjbNsgck7njmbw6qJhDQwnFdfpFpiNSQv7SvPCpUgL7B2oLyBKjsT5",
  "key18": "sLUyrXqYCHfmAF3fWGdDmGWHWbysiZcDhMEuqK6eCJmw6gsgV2gkJF9qeT5TYrAie7BGMSupCce8xdingFWssh5",
  "key19": "3EruqrZ8FzB6UpjiPAYnsY2EpYhFSNg5CBD9933ZnKDez899mNJfua465dBC3qxeKGgSsmmXst77JenzcQVNLL7S",
  "key20": "4UjD5nKPMhjiWZxgNDLsfod4Bty9xJvReVVLoYbSh11pztSDajoxBwXyPrbxN8WnTZsJamRdiQ2YHG69wV3jvyMK",
  "key21": "3xkrxKgXwzNBLPdmtcyiWAZyvKtfbD31jCW5jiXEmmrYrBimJMFRBqdirdA5j3q6EpoZYa5q3iPgphf2GC5oZ7cc",
  "key22": "3A2oCtXQS87orHfPnzKd5z2oAXPo88kjbFrcYSyVPbCcDeeqEm9dvkk7o7WyjGco6JT65DsJxnNTfcYwXjDRZVit",
  "key23": "3nBT49Boz11K9U4YHnPqFMXtR8NZfAzGSzCa1eWMJJKRDce1ekJPcr5EVi4kmpS3ebieJJEwFSnUqgusxLGpEcHX",
  "key24": "51Z5aBJodYvvxjuS9SPbVQJTYxf8vmiULvAMYYGeP7JZAaqd6J2R1qdYC8tc2B5vJsf9mvJuyDaqw5wPqqtt6VrP",
  "key25": "29eC1qhwAue2Qyaj3RgLknVCiPSro8U5TRGk1jg8B6dkBdZNDAiJygd7oV3jqUey4qhcexaHwZ2orRyFFknTddR8",
  "key26": "bNR6bEDDUD8KYJyTStMkSpbpuDMcuzbA7u8RaYT8TFQMYMjfCitKPcLTyMgfzrhXMwdYXC5cDYKSAVve6rhhv4p",
  "key27": "4K5TafnhHCTAR9wKFbmUFRpVtRaN2tVTSY1XvzVeW34pJjhyanw7639p7vQDs95WJEwxiw8wu3DZwVXiV5MzLi9H",
  "key28": "2k3waB4PT6obzQjo7paHw5UwFJcARGN5pTLSmW9FguVxw9vihMvY5DFbhSgkuTgVAFfq9EftPkQqgoM92TzDGsk4",
  "key29": "38zhMxo1KTk1CUPpyLRezTngogJH3r43WUTWBUbucjAY3bTqukgeeRjVFC7kJ6aD6EkdNePr8zsArv5Az4eNxenu",
  "key30": "5Rygd1kuPjoqQnE3xBDXYSXtrhDBf8N3caEm1CSfmBmFVr1K1APkCEjLNbh6XpphCAX1556uuWgrbN8WjSGvtasy",
  "key31": "61x1cGqMWEANUgmAgiec9Mtc3aAmXCo7owKQHVuhcnnMWkUKMCwB4MpXP7EWVUoXtroo5PxkqKfwUc4fGncUd3Xq",
  "key32": "xA4UK3TsDHvUMygyyCUEscHrxY9WEFwFxoJASjXfzmQ2ZXAGpEthgFXy9XByA4XhmcUnEkHjrVuLq13P9U1GNZ4",
  "key33": "3tkaqr6ZisoCT7J9yW2t8BBMX8ACok6y6sfcfjmrGRy6cVb5cmAPpDyvqn6hVBLihCxn5zjdCUa5HvQ8s3Hmc5bk",
  "key34": "3y8dvsQvfrwgsgG4EtP86j14bntHFXyrhkwkhuojaAqgfYkRDwvWdVyNbkmuKMTKJheb6k4yk8N1chh2zpcVxWJ9",
  "key35": "5RxZisxziANt15csdQqK6fCuovqE6n6ijYkd2XRRUJavUWKp3xWEZC4PPEKLnZHjee5JL4Cgwi5uuuTCjYE1sXYs",
  "key36": "4q4GKsGLmMh4kZ4iWREroZxnQQpgMs9kwiwG3xSJuv1w5QjynFZmrqcoRbCpSgXqdd9ffqfzqwQBt4CgtUKz4vZV",
  "key37": "BAu6f38A46n86RvbYRsKFNoghkyz44W4WmUDhTDAyVUyWp7S9ctvFmcgvKJEpYoyqxm4q8tK6oFtkRETeDGNahF",
  "key38": "bcBZPitNGbE71E97HByKRCoumcj98ZzjFZ9V2iRngtoy1LZwtCF9Cs8bMQRhrdqLaNgJd1CtWknoX3GGP3Hzy51",
  "key39": "5VEFaWLz1AkzC5eKfxwaLmmwT7bt2f9XSVLfik7o91QChUMVPYTX37eo1L7f3ZhSRgXwPywVtFPCKdJmpxqDbwsx",
  "key40": "5MzEBoJw1rbEacrDDXEYwAcRLNRyE9nJ5dxoCbwYBnLgbLh2npGDmLWDb2YZJNY6cirza34aHhiDNPnXdZFyoTme"
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
