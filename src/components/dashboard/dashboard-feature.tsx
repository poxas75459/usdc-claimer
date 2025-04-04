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
    "5eigvZZ2rsbbxA2j3ptJ5h6CBp9JZGAngXkHREeNsfBJsK9yh7e3aVXXrKcQCSmS6gEYaWgLDPfbFi7VAEm9H9gx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26RMDV6Yo5KRLypQWyycNxzydHxTXmrwkAfmnnX5XK3s5cv3jYwmj7ANk13UjUx7QPbtpfYCxZ3htMAvt56QEk22",
  "key1": "DNWc6tnVDPJxjHxvhjZAvq9ppQhEqATBy6VGsBj1RXR4Z4XPbRJ42ZcejLpReStM8XP8qgFEayzwSEmmW6WLWej",
  "key2": "3o3Q9Yv2nGNo9uYxZPcnyafSw69d9yHviHnbVYdJKCoKySuXpf2T1eWzqEK6q3RtezEUSHWQA8TF9czvFYTwh6qA",
  "key3": "3e91HeWHWaJFy1eNQ3TBpx9Pfy8KeyQ5t3vL6StEkiibtZwcRX5GgywoGJZiNzs99gwo8MA9X9UbWFjn1XHYvA21",
  "key4": "5qsUPMzeKpJHE6LkPGDkR8NNp7vfVsNfGrfAn4ZzD5nNxZWCE6dhRwRcrUsC8cdhnDDeS5dQKxhfeXYoZBB6Fwjd",
  "key5": "49gTLmAa2xMWLZBA5A9xYzcn3u5pMHt9rTELitNcT9QCUTSfAtTet6QN8oV5AtNvadKSo93Ve1TzLJ1Fcw95K4aD",
  "key6": "5jfECsGnQpAs4yuWtN9DvFNSUncKJHFW4kiKHQRHiMMGsyA2VC7rTAZDjy5qtjp8T6chkv7mbmsLcoyhbqKvZ5rv",
  "key7": "2nGXgjBcX86U3JXokNfYEC8b1SRw3A6E5aVGqNjSvwNzGnV1tEm977tEZzDLcVFjgNxb6dcUZveqEf92rbpYsRDH",
  "key8": "5p1scW6H1eLGgvArwFvp1rsSAGjmaqNVoCqsJBRGM9bzufC4HpDo7EtpLDmMgWGPxVXwxyrym7iGPkvFtgWaTuxK",
  "key9": "21f2DeBDwJDzo1YdWhXLh4afbzh3jgiHPYiHGTvmtAmLinATawpCeiNg4iAui1GgK4oKc6RLLmpspm26kgxmUj23",
  "key10": "1NKCnv9XdwD79HYaBRYhdEHoaQ7u3GSgz4MC3TUmfg1i2fMWW8FoCokcaf9GhG5eKyQNynBHTaLTdbuWXPsbLHJ",
  "key11": "4NZH8nNCz14uJd7aCiuTdBQwgEQiwk9Am2cMjRNpbjUaHPNRr439SAXyHzWRezKqJs2xP9yKExWoTLmRVYYNmNok",
  "key12": "3Hrua1ojh6Pcw4GyTQSQ3Hr4K3NHVfk3g3jbS6JLhKJm58D2oua1dbiHrdX2FuuJ1uHEA85Vx6safRcVXaN3iCqD",
  "key13": "25todW9iX679PH8pVYEo6NvM4H4NuRNvdwN2QVgqAUoyckiEBqiBwoxTQWgz4C5RCNVkSp4PcxZZGS6eWrqGAJox",
  "key14": "3xJwsfHjRyxzLtnWgXzpPUrMqE6wox4vMm8vmMaM67uGwZaBvkcWtnnLtZpV6X6nYzQrAeALBpWdZzVWF3RLNefs",
  "key15": "BHSEXYXBpMgFsGVCS5pDzETZFstfQS3V15wihJbPLdrqWXv6YUWZktkziAiLNMsTb7ewem3yEQKozS7G2UK6b29",
  "key16": "4ScQXj2We4NVpSQxApKasfv6KsgeTDYgsuoPtLcty2z9YN2HQtDFFcbMTCMw48k7JHeKGj5BA74qH4gjoSz59xLz",
  "key17": "2MTjY1rPZexk1tQmW9pgs6b55CKj3fkoWLGbzcmxr1WYYh5xhbBowehEswDokjspoQHCzfa1p8tpGeumfCvNMTVB",
  "key18": "5Mnw8WLKYSYshefXLj67Xi2CtEenZ4NmEyLjc4kvMMDEoAS4MxKgBxAgEXEYRLmjsnRkgpg8VTfeTy3RK8P4untX",
  "key19": "yAMNgs7vf7EMbKXYFjQ4wxtKooZJo8T4mogwnp6KLYXxXkHCoHFgwQnutQd91E8zJMQK8y6edkuLzJYrAUf9jRw",
  "key20": "42dnaoePdfxhHoNL9UmucKwS84cfTRDcFwuYC3YcVcazovQZLeVi6tyWoYcChE34SnGqDTbmZ6sP1w8BZEnwgHyq",
  "key21": "4G19kr4UQvLgbg6CK63ju6jdikHsiLmaVbjvaBYzzTxFyVt9CR6jwCEcFnRDmVwvJJvRi8ujLjbUrBZ8q9HSv6Fj",
  "key22": "46EUHrjQzpri3jSbDW2etRqm6aNwKkTqyENzbhEv7hkcEZvDGdDPAwwYoij5ADVvNUjHBDhZcPb3gY5bBtTHza38",
  "key23": "4saMAtnKWhWbxxqYZxKud5zaLcqVCki58Bcitz39ZkDXMvaCerBw6Cjh77FaTbvd6S9HewTHnQVenit5uuyfqddZ",
  "key24": "2ZhxnVVrhGPGNad6UKVyypR8kzR9EXCQzhqy5ZbpGjkujnmHZ88DiwJT93EjwLxX2nP7s6yUZ3o7BMm4mvXQ3Gax",
  "key25": "2xABk3qjxFq2DfCdAEADhyWhLkofqfouZBVMR7gAcxUfcAZzKrTdNkmwSEvSkxx493JdLS2UuehfA5X6Za6sqXj1",
  "key26": "4GvD2ZG5NVEy6ydPmwJs1pnw4nq5t8y1jqdB81r5bZgcUTsZ5FakhrrFmhYLP4fU8C9mh3WrdFcsQDfvDNGdG4YN",
  "key27": "4uPBADTW8gEgZvTKdjmHZZaVQ8H6TTKuQtPruqb8DbM2av5nCqvJnx8MtXFdqv37Fq6LuWrtUvaY9U6STNhCenhm",
  "key28": "3xERqwMxgHL2JDvN2SG8YQ3pBSzZGUvBv77DNXFp3MzdZVRCPpr4nQHv2dt6iv7JiQYKuuZdYnKaVY64ubWdxQ6T",
  "key29": "2YRc6nwuiZJnmbj4FBDLGCKepbSQbxtgNEArpkQdohLetp6HDuQ88uvTVCqChX1dSuSLRyRPCQu1RdAYmX8YM6pM",
  "key30": "4EtTm6tMFALGTX711YQL6B2zaWZdtg1PgT1cKhN8yKbKYFZEM1SzUrbmBu8G96mynYqNtyoRFcAJaf93KhzrHorh",
  "key31": "22n3HSEmbAkEgjscHfqbTX2o4Y92qiP6GHdviimVovvsR6kTJYqN1edmH8dAYym14czgSUKsppWNUn6LyBdbhaU5",
  "key32": "5gcZQkiK9pa2pEDcbLANoRdtQEMCD42h16vakwMtxaS5YHxh4pK7LvzvrfTR3tuyTxQZLv7JH8Q6KYu6WZmyEXgE",
  "key33": "4KamWR7WjGL56S1ToChWQ97gJUiTexrZW3xoZ3jJ1yKFE39Vm5NEMy3rhwFrhPhYCrUjy6vpkd94AXi8fFXWcJA",
  "key34": "wmxXe6rrGGii2UaTCSq4yYGb4DuvnPijKcarq2hv4VEdro3ThFx6TaRVYjfJGEFoWQotcVg9b3LvPVCSEfWxWGt",
  "key35": "2gF6BN7CpG4VZBje41Nd9baEGg7eG1WLYVLVvt71v7wUhvsL24b6FghChnHNfaLUgJBux3zZBgzAWrrZYh2qLzdk",
  "key36": "2r7QVDuXpCTwSBGMDbooWUMPsXzLdVpAoF5CvskpWZsgLxT3oARhmtTDdHVsMginuj6EgTFmAUWJaDi3ByPfH1Qz",
  "key37": "5QAUUQr2PmmYtqn8Wt9X69cfGSDCdsK8HPyJpNUJxQ6EbYQuUw2D43ykZ9FX55nA5saDDzxgSPXenys7rbfsDgGc",
  "key38": "33J6BWEJ5RhAAhuiVEy1gj1UmEBp48VTfnbeLsEsRPqXrBGph1dTBJMwTckQv1HpLzbdtBnZoSZ5Cgfvp9nYG6Ns",
  "key39": "4fWVphusmGYHjY5y3ZXDcKA7UsU3G3t2J6pQeWJvd74C8LSxuN37zqaDZFcxazvqJAZyARyURE3hXhX4C7A7gP3T",
  "key40": "3nCi18ZDxfPLFTgWdj2bevxb8eMuQ71TcMcswbWKuUrkPsy6EmFP8LZ2AZQKPNUEbwgHindfeY51h5t9LkrKeGQU",
  "key41": "5QhvXV2fEaz1wSvSw3iicDJQnXnM11yc2QZca8TfEUKxLC5sQx9HDs43DgQu2QfR7krTSFTrNhJwKJ6cymH5DYXw",
  "key42": "3TkV4rhEPWtKhGC3i5L1m3L78aKWeLTUPq2b48xSQBfYdk8FgSSxVZJw4guuSk3w8TiaYqRVrphv6aFL3c4byQPS",
  "key43": "Awz4fWBZN8yDqGPyajpnoQZoTnLGNKg4uVFj1hNCpCGWobw8rXfSVhmKSc1qRESoE61utQxvsPft8pVQDW87BYL",
  "key44": "3UJK2NM4FGSt4bD6e89A4mbeJEqiFJ2xrEefzCfcKJjR1bzaE939URxb4VhkYX8h8DxdBLEUFiYbhAieP2KGjvCi",
  "key45": "wEPG7Twiw9HCf3VzgV5yEjrn13VLajAivm7TAV3xyz4QK5zwcVwMKrf9ArsGSZGHgnwTbjVARH5y2br9YuCS62Z",
  "key46": "3N4h9rqdgrz2VbuCpmkDU4Lpnue7ki72nJznNrt9Y8V21vBUe9TpJ2YQZ5jQN8X1KaULGVz3tufnociEyuM82jzV",
  "key47": "4c5GZg82euHLwJJzvgMYkAph3D6GCMEVkhwnUXEdxvpi5AMcbrh7aesMj2cjJXVScgMVa5Bb4v4X5tF5gDbhHXR2",
  "key48": "3djRcn4Se9t6KDTEXeNwWzbf1aeLHUvmAk6ramfexGqUciPFbcTJXDLL6KzHN29Ai34Pns8ziTkhi1YBGyNgM3nd"
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
