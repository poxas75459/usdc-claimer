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
    "3vVZVMx7BeUJnGPzKCskwy7X35uHPNBXDzerQVx4pxagXytjXX3uto1JWGgKgAnnUss2dAZpzD716bMoFivtDsoq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5r5Hsfv2N4jkA47uKUB7YbvQwMCpiKd7FCB5gbeuWNvnhexXGr9erP3x2wWZsNFsCXmoYvL8oGyfaojgCnTZnfJQ",
  "key1": "493thJrWsG1ciBkDcXqu9bTX8sKXmQYFsGspdPUXm87Q5m2FqWj58MDgeUq373fku2YeapYnMQLDMpvQpChf4o86",
  "key2": "z8nmwXTFTboi2PfQJ7fynkWYy9hqsvonrF92f3qXfDrMpoHaQJXjC4HtKCmJShUQTuDRFUyyLZfn2zwzrJKA6W1",
  "key3": "5u8Es37VmFPfNUtZjVMiwvHThE4JAEe1ZF9PUPLmdXsbTSSV4oK4jLgNgovzGi85xDqpL9QMAyszR3MZt7CsQ8T5",
  "key4": "5stVoGEmzNwpNMRsU3G3xFSRXM1s3ZCdCbHhHiTpdqtk5z369ULrh1W5x96HcdqbfodmueudaiXptduZPQddWh7S",
  "key5": "chNTiuGpXWxSxfsaRnuSMZMeZH89oYng7EApurkhi6RDR3RE2hsp7do8vcZV7qXPY1LxFYgcgMb7PPwMSFG37BE",
  "key6": "4hXitqFrvEch7kW7MoCPbvitsTniaBtuX2EtBq8agstiFQbRo6199TXACTYQiqJ9JPKMPjUVCykXQvrk73FKWL4d",
  "key7": "3egmFp4BRf5LpwnbwYfEGp6pTiaSNKEfiSmjrGH8HPXRq1ey3fkXZn3Y23MqpyFfPXqe1N3hfEVE1ibUnRqNjiox",
  "key8": "bV5E6dKyFouF8J22vp6xdSVyzb1sv1bvqZ1MLhxZC9Uq4wu48fQJXwxUWWrsNmdM9ZLiugsvXvqCTKHB4F9Q9Go",
  "key9": "292VmiuQnq27BdmdP2sxCpuKFQW6RW2KTGbL1bia6HZfhwUcsn3sSoP6xoZ4UEntEdB1nnrvBM4T6UqncYrsUVMj",
  "key10": "4BNaKNVrUJkrzP5nQhUpEgFJo5GZLZbF5Rabj3ZbvkA125mj5DMSGT2yiYE4mNnzeYnDr6KgBX8jp8ozittonGMd",
  "key11": "23bKRdpaHMUeP5BbNEiwJx7cK2DjWANWw7HcCKZApD243L3NJaHRTBJuAXdz1KnS6n88g46WY9JsXV21EFGLtdmA",
  "key12": "5cgLptuxnRvdBg21oC4y91UvwixBe5WdbBkHfkRDYXocHMDSHxC3ek8tdpYbqRi4kCVzUyzEQnmRWkLTxNvEHVug",
  "key13": "4jDWLYBpBbsaAfacyohgNpSu8k9DSeZQpE8kwgxJFifKay4WgGrjLqf8SZ1xKoQeXriNBZ9oLe8s6ZCavULyNtWT",
  "key14": "WC1j4bw2MquugDhrFEdjgv7ig75nS7XH11w43bB5txbPiXEtWaHdS5qnA18zgeb996Wg9NqZQuevgUTFdtpSUbo",
  "key15": "3wcx7StMvVzEM22Tsr7caZMW1EGTDvtibhBM6AaRBegt7dzqxQYQiNB63f1mEN4XBVN4PMhQkybMnU5PqGJ7aqHr",
  "key16": "N5LbyRb3pkYq5zncf7gg18DhEHmM2AUzY4CgZ4k9yLmNFspBjofiAtibVPdjpVvckedt1sUZeFAFVVeNs73YU6M",
  "key17": "2i7XV6gJus3W8tbjWB6Y83qb59MDR3kgaS6JMxsAHFZt9W3JiAmL3aqpqk1js58mpFpuziNcmVMni2XtKtgBRVs5",
  "key18": "5NzBepzzQpwnzJnJR2qDj4kysX9KHmbWxM1HocoPcevmVhLtHapefKpM3eqVd9HtPM5D4HXwGfwk7M8nG8aj9WCr",
  "key19": "mng9XP4YQJv1bXBUvrh9kBkwBejx85YJjBXYTuxYqezqiobUDB9WkvcCaYq2UwnHhRxM3thuhYn1w9SmbW21j5N",
  "key20": "3GugQDGSj4X9MpfHwUGTQVyDXrtVmHkxj5KP8SqwEMDh89E8wt5xd1pVhr561QBLiXbtMaRxRAgbFMdJM1CUzzcx",
  "key21": "3YGADM2RBDKqqig7FSp7Fk8tZz8HM29BFMrJcyxBTLXb2eDi6jcGH1dgHsKhriVq6RwKPWc49UCkwMLUr9tfz9x1",
  "key22": "2VPKyCYR8E5kgo2j9DNonZSJVAmnozfaoXtWotRQvwnspJyrKZLmKUAr3oaBbWnvcd8KPNEnKYHnNdvgBDuHVc8u",
  "key23": "64au2gyvemriK9ypDhmxJYo5EYK58JAQxXGoRamL6A6qXWBffG19D11GWY7n5TqBC8gjEPPNqLVJJ3AQhi1Hu2PA",
  "key24": "67Txnf3BWaD6a9vuoqrgd9kae53qEikkAoYSMmrkeaYzZRAMrwWQDUFyxHcJca3F3DhsbndKM6xkgrxWPD9dyBLs",
  "key25": "3DQ57QCuAnQuZyKJDHaLaqHTUHmqA9wg6yRqBaAeJbqiAZoSRQEwbQeEpzPye4zn4aewYwR3yFArKimqu7XtFDAB",
  "key26": "2JaGLyHLSSXN3jT4wXV5mZ7QsS1oJfteso9J7ttHxPAuV5kAHJv39Brdv58JqTKa5s5B9BAxtraVtGa2Sifx97dg",
  "key27": "a9fo8UFe16Mn1EXLdaYRAVrsCdrYRZNkyHS1cVcafenaH9jv7ExSasPXYG6Y8rXWZNLsHzJ8aGvysjkMs9ft351",
  "key28": "63HJctKSWkG5jiHVX6hvoQG7F4XLK5B1mQcT8im1uaqQg14HDupDgadm1h5TSAv3bUiL3TK12NhjkdrRFdFJbXdy",
  "key29": "tHnfM4yUCyXHu4itGRLDKTQsiSXTaepokjzHYgBFwRTH9JZwXdk8z788hHgR8QrJcKTYyAxPVbwpTetuDvVMUsz",
  "key30": "3xSkLb17J11XzJLak9G1EBSUcPY1xNyMvQpPbpSWLJpVjHnn5jip7o681Rpg283ZjMHeSNQiRv83pr3fVuokgmfg",
  "key31": "597xJQQC5k8xjDWYEMWgYuAtrT1LTfceZ2XgHr4U7bV9Rkeo3wY4wWZbv81Qrg52tRnc5Vs6NpnHLJCfMVZgaf6P",
  "key32": "EQFSWcukmBRJxA1EPuqQsbeCukWi5M9Fj2wyJvDwp82GLnz4RdmGFHQ4uiYEhBn4uTrvZFXiEmgUS7Rq7cWhZhk",
  "key33": "3VC6pc86fP684GrpjGdE8jt9nNJddrjKMCSAP9uSbMS4XLA834kRVFLyqWJLiKN1e3VFYBANBz7zBWgvoPkxgXDD",
  "key34": "4S3xugriRAj26oVBi4THHi6kzPAdzkeJMHh9YGU8Cb4ed6pZPQY6ACPxxcYavevTUHino7uS7x72eCcvgBisTcnL",
  "key35": "35Bn1qtpoD3G9kMx3z3hp6q3c9qeVGFhjiXfMZfS2Aazvx14gPbtV89qkjYzMQL39D1J2Z4Fz6AhdqMYsrGsgkmu",
  "key36": "3GpS8gs59HN2F5YsUsYEVZtTQQ8QZKtPPLtPb9wGbRrSNpfcsvWWnHVWC92DR1BgTnX63ZPLN8JRVRGGAeq2BTHK",
  "key37": "4uQdYsqt5aNorygYPQLpyPuRcRweUK1uRPEr75a1N6PjucqHutuPfVkbzBcpWFgU8B9dMnsTBDtwPiMtPWpSQRkU",
  "key38": "4Pa1VUygCKwTrzLBopw3YSs9U42VokTmPzacmfBSerWfDFKeHaZbyS5yZsjBbhhHW7KeknZTxqkPeykbdF1GDdpr",
  "key39": "399Qub8abo22KZn1Kwaqh7F4PRBcv9sZmW39WuM4zEqREB49thNBD2UuyissHLRuL14enbnvU4orekYAkjMebvBo",
  "key40": "4mBJxqCJJ32aDmrwfJa5fVdRSBcCyaezqZ4oGQLDYHCyfSrxsnWvanrYEWVT4PMt33NNh6rvGiJT3gKQgPEXzbUm",
  "key41": "3dqVkaivbVbT8XuwEj9fJfnGvqVbYYK2gf7RYw2MFHuZHiKAjEZUsF2vtmN6S752813tW5ozRosMmrJRwk1kGciT",
  "key42": "5WNtBQSRx1Qd7XvVUaaE2RqEzKuz1noYVEJt29C2LZ1RKUYgtQeZ4SMTLNYutAsJ7UAjHg8W1ThCXBAyJVjLwYCt",
  "key43": "34ES2Wf5dZEXpsqDn7aZZeDGhdHQgBRViQz8A8B5ncLnArP4irfhYWdJqEZcL5ZJsxDD9d9MkYTUT555o1CcJ1c6",
  "key44": "4fC7wevic14EJ1fRmpHLBuVnH5rMAJkyZCyGzBEuziHeN3GoXL2Vu4eCYZG4gaA9KMoMyzGGu1ipZpjS86SB7oQi",
  "key45": "txnseFPq5byKf1gZwuNYfBWs74eXKPzkEJqfBnDTfXtVvUnVVWxcwd6U3umzQZptyJVfBDppf82K2pFbXcBU11L",
  "key46": "5XyFJ8omLWqY4AUc6bEKW8Q6supkKRjZrVLsVE3DY4H2CMZAekEJwDYLRXCcjKQYWUCve8YgZ1Q9KDtC5Aov28NQ",
  "key47": "G81kWbJcL4PRQ2yjuxnfHAYpSDdYG9hHWaAWpCVLJ7XSrTrL45PkB7PuuQEHkYmdnasyZ2QB4beUFU635qrbwQq"
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
