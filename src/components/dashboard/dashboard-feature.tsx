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
    "2TYvuYkhstFvARZkQ3AmkcJwJCpMq41yrPTBXzwimdfZuzpzQPaJ26bCAtiksMpTjzLU9FXdyHv9cEREERFBoosi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AS45PRf58Ae2RULHtrTsR9TMTNsMcKL72bn1hMFhXM8UDxMRarKf7yJ4ngHQiFf3NxpoxTK4oKXZx49UvysESUB",
  "key1": "5ZG2t4zSEdqDcHZ9Vv73qhGvB8kHEAMdJnCayz9Hia1Dtbjyje2nV9HBvRf2jDTrtUixQMqm1ZKfRRtmiFAcKpp7",
  "key2": "3nq1msL4gEN4N9JDzmDdQ1d5ubLt48roviPLHy5nwa1p2spMZWBYLrENEM9tAS2BQSkKbpfm3u2j9NuJb9PCcVrh",
  "key3": "aNqAYwu1ZnqwtgmAY59FjmiYAk5jWTTjWSBadHJ7Ecxy8zqf48FaNN7rhqQrGwa6JPNWeqw1SXsHfagZC3C2rKg",
  "key4": "2A3b5GM8mn3pKc3GxSaFP1hCKeJSrWftFTcDijxEn1mGLmtSGN2nYzBHNEs22Wv3fm7MavPUk5ea1vtyDAXt5gXi",
  "key5": "4dxuZcRyjPaZPBNxaTZA9rErFxaE7nVj4wE3g328VFr8cX8GTdpDX7r3VhV6P1aUeRKrNtN7XZBiPQPzoapniCSi",
  "key6": "kCcb96euJai4eSDV6nUwwkgDwHcskNQnKYhMd95Kd5LQam1qS3wKBbuDioDCPqNLKykBaKEnVeCZmpL3uCCq9Ff",
  "key7": "27tK9GFbCzeGwC9U8f2Pk2Z5j5RhppuFGh4vRnq412Wwds8MKPRQit3ynMaJ3mZtZtccDvewNjAZknzYit2FmGrh",
  "key8": "5gLs7QL6jEpxXLqpafdzBP2qvgrWPhVPTqvCNF6LZ6CF3Kiu5g8F4FxYvKop1XdWQxvXgtvzYYfSSauyS7CNhq5K",
  "key9": "3emyyzEDA4np6XwMpzmMWjj1zyQLXdwhAzEvp7L4b4SSqiHqtbpRcXjYYEpE3k4vYmRUt2MW8ogyKmtH5MJC5Dhv",
  "key10": "2188BJLYLaEf7efXKNGQXN8adbkGFW5mcyqxje39tbzk2VdSX9q8dPBndF6KyHQnAm1rjw5P3yFxZUTprsCRRfWX",
  "key11": "2UJFW3y4Q847yJuFLEmkZ2Ya8UvwPvS6iBjk6utbHtLP2CU8KeZ7yAg2vMaxa3JcpumoiXkHhFwiE4YUuHdxVTpz",
  "key12": "5h9axtGKzMvH37K6Q2pHSjiaUX7BvtWGS7hpLhWgt8YLPKUbqAgLLWwCjYBLSTTKwnqTZnQwGMw5jnrPFd3ECbqK",
  "key13": "3Cyt8HPDtEbHf5yb9Eaaczf9qqRZuUUUDGghBJVFHshFqXPJVJWjv57Uf1dsbBJ97NhNxah85exYpTzhyn125fUQ",
  "key14": "2LV1WmZgaF62SezebF7zNdcimS4nNfbuK66re7ThymXJP6oqYb1faBFvPDce65irViCoXMnNjjLXBco2sMvQuY5Z",
  "key15": "4izEjJ2tLArTxKT9w2ZWub5HXg6J1hYADuAkPtzWQc2XAxvkSjFPwg9BdEwE1BXN9ZEgKc7EJCxEZse8cx5FdfJr",
  "key16": "2TKv28cgpZPv8ZuibEdPMDqXBULqbjsrFiYpghea13Ys6gdVJiBuTPoqHgP8n5T8vtBrwKCTSZkFF54rDRz4Wqe",
  "key17": "3ZScpXWZMQJq26UVgfgxaPpbKn6D4NGrtiaPvqBXCMkMKXsXPok4Qu8jEo3FrL1xutCUwSHJTtQUs7HzGRirKMvr",
  "key18": "38HKUZfgdwCmxWvhkDhjDjeijGVffDPBFYjfSSj98yrwnpvnievvNCP7RjU9wXZvAaBedyPGopNskpREjaaofccv",
  "key19": "3w5jc42h2pkVJgM96m4uRaBVNRtPqJToJbHsNutnbTPt8ibYwZ2TNUZK9EzZkbbKegHuqCrDh17H8UAPixQMV97x",
  "key20": "5Ha9kMw9DuaMfhVet83vxTvdFGuv23rqbM37gTFECy73FHAkC2qE2JpaHcSrDVLZoAuD82G67FpAprrd7YvEzjRo",
  "key21": "x2az9vGHRFeofYP8b1jEQrG2jUM79mo6sGH3bXokBCCk1uk7P46uhnBqxFF1CKxSCJyZ5uaFFg69WFPv4CJK8HN",
  "key22": "3g1n4br7kxuPL2u1n38vgZLXD9EtfrqcpaxnJq4z2jgA5viuHdoSNGTRwsrVxe9QD4f6tpUwW1vJ6uL8N5Aa6rcx",
  "key23": "5Pwync3YTGPys3zbhPF1frbMXCE217o34CF92HuhkPG8gwsefFyCsL5HQuE7KP8X7A4wtG1QMq8ALsdM5jhQ6Ezt",
  "key24": "5hKuRhf9vpniDyPchkgphnzxX6LYzCSkkVZvKoy8wHRFeiKa7qxcPyEe8UbqsQz4tqirde5aoKvwcXH63szBeafd",
  "key25": "5v5GujroUfnkMEJVjH6jY43fVJFAKyiE6porHruj9mCYhvphc9K3ZWUf3DXxq96P3HBkeCu8QGJyTbkBmG7QJZMS",
  "key26": "2Hgrjk5eu5Wn4rVx7a7ikQKA3yc4d1dihz9TAoyoBE2cKzHpYYqB2Gjn9UWfFPsnCumacksRd5RpCPJnnnySFAp8",
  "key27": "3v4tw31tkKTeohj23kZFgjhwEzULwkkBQwiiiw7opGL9y1FVHFp7ZxTQv9q7KXGoWtzDx2iCEVCqyBWMDd8A3UM2",
  "key28": "27xA4eF7XkXdycC8sUW6sHBkAv8pUVsoK3FaEQyffJgjpTNRPNfBkp7qMNkuBpNZhs6yvBYRX9mzu5xuvcGeKx8K",
  "key29": "5F6neV6G7jgMrKYK8Pgz9q6eqzpVkKbhPP7xfcEaKMFWXSr59UNs3AFNYTXDPJy25QeuMn85AmDSBka3LYS3nCAn",
  "key30": "2L1uKxa5WjcjwtPsoi1WrNcwgKvkVFb5wuxF2s6QaXLqiX7z9Jph6dMLFD663NpLbS5FDmpjaBS1nszmPdRA8G8D",
  "key31": "53BC4qw8a6CFoDWguLB1T1Hxq4y8NMYbBWpYxBHxiuzrwoHoZ4zo5gezEQnHb7ueaHybxBzqt5ErTNT6EHSxwUSW",
  "key32": "2Zx9xfG3UpW19YShZhPmsAWt1HP7kGyCtnVgzyGWB7ptHPayQ4RQ8JBxSVtZ2W1mMmuPs7zbf8R8DPixZByAYZbw",
  "key33": "2YUKdosKRArE7iMj8kNEzHjuTLYXQexPoTzaM2acBUkVH6QNLyTja7eNWBF3ECpdmX4nG9kVZpUXk6bFRHF9DB4B",
  "key34": "65ZJ3JoNE3UE6oZVPEizdHVNVnG8HLqxMvwTCHToS2XkDPVGGppstuDpyEvDJ9vSbmBK2MPxeSspRfmxCWUmAsCH",
  "key35": "3dDkD2wJvyqDQDih3XX5HUkKad51cLQwKb9gRoctupJMEwPHXEwz5qbNKxBdG4pW1rHGbG4p4yioU2ajYetmwPve",
  "key36": "5Vkt4EtC1TXexruJwyuLfXJg6RrcMwJn8enhBN1DkWvTfaiQuhMDhhDVzC9DihHtevdW6WpXtENSeK81BN9DFQHu",
  "key37": "GUnNpThbpiGCLw4ijxEAQ93s6nuF2wjj9qVckezgDdxNaAVvH48ic2dUFdLvyTC5rE4YSGxzT81Ys2wyUiuwxht",
  "key38": "2pPxwnNPNhaf2qrbfuBSrMUMRjRD1MGfiHLpPMhSQbLLYsWmqZgpuuhq94ADjrkmKRdR4bDuq3qseiL1osLcEWQH",
  "key39": "5FfuuyuQT4ypA4Af6G7jk4qZuKynMxKoFzuKQ7oYFdfhi84HxLa3vSg3LQn2xdj7c8pQsbw5q9r8mdbSdNTo7ES3",
  "key40": "PpuWXJgbr5YSkBbBoDsX6ZYQHTr4vNyEFcjgQSqSjwB4FDS7xzpDmpS1rmdNHwyKN4spt8FtkpS4vX21w6CqrXY",
  "key41": "FAW5C5mzoTRyhgt1zCoU66oNCiKWBGPJvuwNBTjJj5FBsS14kKwgQhZQiMggJa81HdsWqpfSgeWNd55fhtATsBb",
  "key42": "4eNMf8Ag52Fxuw1QeBtMGVMBoojL5GpGMWFAX5cBdGvZfXwQ6LKCZGVhwfTkme6Eati5rqvceCix9PgWba76hU9t"
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
