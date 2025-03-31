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
    "43kz2yFwki2Wq95Hdf3D2wg1c7zh89z6fNeEg6bLdnLxU9qNBFUkpb9LVMFMoGBoY54fqoATkCbsazUhURx4Kh3w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34ALNqjnbSGsYcx39shzJU3rdF4CnTNTX6HaBd8Gb2KT3kB2QKCy6jKwCCRNNDG2ZWzMHTuKtqozo91GyVa8HyB9",
  "key1": "53AKD2w91DR7hxjG2RUcmM4vRpZFxFH7jWr86fKYDa9PQuyhahmrcjxS2nX5iajfeLfJhZQtMC58fqdvxBoGDAz6",
  "key2": "62S27N722V82XKSV7XjRFbwbc4Ca2W9xbyTGGLwuks2aZrXs2x55aoth6xKfN7miYLsDWyQg6zsfWyGGAQJ7uvR5",
  "key3": "2Uq9CQwSGTJcf2jFAzPz78g4CJVZHVi96FgUSvAC5L1AocyKuQxx2AFqdA8niby3diT5z59A6142v3hbQsKr3ijx",
  "key4": "5ssgCECJ5iSUXZ2BHEtDHA5rhmyjYJWyr7NQvoRBah5THymupSfhogh6GW75bhjqPMBg4wh18PzjoABUimJRf47f",
  "key5": "wxxTLsqTwVGeV38MM4Y6RaYmK2NrKdhjvroDVHrEbAiU5gXH75AVrkUiz1CkhzGyRfixzL2ouaMwH13wQni1kjT",
  "key6": "5PszMJ5Jx1UAprfr5UY3pSTuFYC5wgMBrJKT4jJyvaSMxsy4qHJLgrnuZ2TnMsBkxEvbopcFbBCNAFLSYNhGB37V",
  "key7": "2Toi8jHLRLXJBKF2JGNNfphDJkwcYPkKDeQ5D2Rw5rwyGGwvu5vQBYQX3H2B7fCZC9oTW6aHM8mNN9CskxSXVLP9",
  "key8": "3V2qXcq4sWqQVcEEWTQbRB47ZnPtJm3YUgW2LegYp7L9GRkcPXxh7PAE5grm2mSscGdHhjLhmFRjPVjRm2U4hJtP",
  "key9": "5TcKYrRTvdxJoo8KEEDci1q3RboYbydBM3HqA4jLiKnr8wjbeeZoQyie1Mzw32k8SoYzCo3GA1K8Rjdq4P8L2ioq",
  "key10": "sNP26uBhGdWQM1gHuyVvE6TuuefFQbv2Rzd3NBodaQvdAxJ4fkzCMmk54shUwZ9WhPZifmj5PNUGvj2SrRYXsNy",
  "key11": "44xUCQDj3iw8oLNRUnfLp338LK6ar9gTf8eHxjtRHLpK8q2CqTWzAMHT1baui4vngRTZmfDMzSrBmsmNRwZHQgyh",
  "key12": "52VEBtVbAhvtefXbH8mxN2eWRiNE6iucmP6qcH1ATYMHLxYLaUqbbn4dUEkU8WZYNqMnrxxbs9MuY3riJ1H58Ad7",
  "key13": "338752LgMv4FocCYTNkPqokm54PfchjMtQv2bppk5uY5KpP8Y6tVQXUpSxAUd1LjBKkYqswHfXhWcsuvekGAGjQw",
  "key14": "2rogmxvkjXNqNp4yNJN4rKuxa1CbqMY1F7MsQbA6CbKPG3SeeVntV9zGrSwHenMW4kQm4wyPqS4khsAowwu8nfJU",
  "key15": "3gNZYFbkF8KFPpu4GTbCFm19o2MnE7AmXUot4vZfP1NnA2uBn94iBFQdj7PpvnLLnqeYpefARbgBLTXAFDU2CUwm",
  "key16": "4s1388rugkPGeA6TVFPYFTF5CcZJEf8DgytTvfyYYqjHEaVamGWcnfTj2HwuALGpw4pDw55wxRpbkybCLxrDiEYc",
  "key17": "rF3MMPov6GGSKCE1fgGxhU2qLojNQAETBYofN389ePAjxBzNp7uAfHUatW4p4P4DyuEhCgyiJwZyxedWSu91p59",
  "key18": "66aZbaxHuqPd7Bt9G5N7e1khCHTNrWULnvpJgzjC9e28fKib78y8vyi1xtTHYbDfCUuZivwp3a2nTfmngYWrLYQW",
  "key19": "5VYxUBpZ2bQshmZVrdijVnjGjdbXfP4UZmEqZvFrSG4C5KaSSrDExJHabSqfd3sZXoifzR5uV75JmExFBz91y9us",
  "key20": "2euGKpsvowLr2Kn8NtVMrQwidwePeB5ELfvQo46vnnKbG8qi2uVxkNdosJ2N4FNQZ2fgdeLfT9zMc9EizATGrggZ",
  "key21": "53nS3k1a1w2rSPSv3qxb8WyWJQZ6KV2YHQqg4fxc9otkZ5hcx92p795LfxcQVpUaPXx98GDaMMzGbWhiwqvBRUpP",
  "key22": "2Gsr6cSZM9RncdKeJPxYpTrFh2T6nwRpucbc1k8vVhCJbu4yTMvtZ6F1dqwC5wvYhpRMrfkhmspdm1r8eZQhQzgH",
  "key23": "osxY1e6j6xKczo3wxhxtC2A2H6Abo4Gc6cSBhVFkpesDRT6smtLCMMA2kabuFigwbnwqM6NtjMgF5ADmsRCj4xA",
  "key24": "5qkyL5uXhJp3bw6HGCX3GeoEX2vJioM9hZbzqozmwWURD13VF1Br4xe8akHwBQJtWoTRMTtNw7kJYk7f93oYTFPF",
  "key25": "w9dFyRmE8BRJNfQ3VEdF1xNytXK4LtgRiqqZaJswHLXPDRep6nLKnjs6HAmunv8RFH91maNkiPsouTp3KBGdpka",
  "key26": "2muiBAJ43sZnz7C57oVgLuCJ24C8BEn2H4yuLK8jmo2xUNfo8Q6rKyEPQ8CKNrsmo5dHuuB91Ce9nK2iaD58pKk3",
  "key27": "3Ba9DVRMtSozsvTMFxa2u4AScYcYAKRHQqzeVDoTeyCQffbCBun1aL8XUoJ7sGiReJjFrue8ootZqutjiSapfybC",
  "key28": "4g5bhNM7j3HwjKHmhwrWKXNjTBaGiFHXj8S98vyiasEG8MrXaNs3ZhrCYoCAeRbkyY79pxv9UyMoUUiTE5SvjYe5",
  "key29": "4J6GVbaFrxUZUpyxpUedFhsUzECW2cNaSHX1UdtD8uRRC1kFT7gmSeCme7LhhUJnx8WUGNFcy1Jtm5hGZMSMgkEF",
  "key30": "2qwqD5MG3UKFhRHJvnV5qaWshqvpJkXdcvEEGcXgqG3ThXc92nkiDJafwBmq2YgNBniToGe85XtV9LsNu5tg7WJv",
  "key31": "KLfZF1zcyLJdi191zVNnv13AunmtdePmobkWZKSFx2aXstuoz3GFjD527MyLVmqqjyXaj7F96LxXMxZZ3hZdQHq",
  "key32": "5xsKhz9nitNQesE2h4HqbBGzdyKRGsJLVi5xufL7jYiWNWmiyPyY9hdQrbA9ZrMStK8aer1iV9ZrKYJcZ21kPSfd",
  "key33": "22boYdPJpALKLRNPZQZfSHZckJ47tgfMCczzrMMk35WqqvQrfcxDbpgEFqdzmM3xu1TyxzhaCduFoPkiCmRkF6LT",
  "key34": "58EKPf1uMrbaY2B2WgKk7jL2Fc53mafgApLdANETsGeR4ijF382zRhEKQu4fa1NxGswxHLbCA9Qpd6WX5TvZnvJN",
  "key35": "3mfsi8u4csT25HaxS4f1QbYfxQKxm2RsEVXetomcKBiixpPyKq9wu6MiBgaoygJqoCpP71V5ydbwcxk7ZVj8QFU1",
  "key36": "21Yc9jeUyhrBVttMsiRsvZRoZUeEMvKP6PzsrkjvsLZpJeyrJdCYqAGpoaArpMcZ84hu7xsJDLctDMqBMjHWfWkt",
  "key37": "2TynF5itpLAC7q9J2HLVuBJNswb7ptQ2V4CJ89ZJu27VhJiFdfV3giq1SG8dNbuNUMvNuCd1YdScibGSPWa4YqTh",
  "key38": "2AekEUuoowa21Kqyvj8X1PjU7KgvaASPkJ4DUd2fRVw3dBdSpSafzHuE9cSgmcTwAwZiduCwLWJhAEmN5FUafpyH",
  "key39": "W3taC3EVPDXUAefiKprW2snPkQiqFJB3gry11e2sJJCU57sCJfayKSHNQw2ZxowFn4W43Za9Bof8T8eMkrmfWGg",
  "key40": "3pFaXfUexe5snxrueid5jksmVzJaeUo1rGQMZy3NGqp9u1Pqsbpp1fJfGoEs1rRFG4boWzn7YqASBpKBiZszbXnJ",
  "key41": "4vTFuE7UBXsSV8NNKgCrDTqW7vqgnmQbLx8E2D8p3kF6SkyAAWQXTAY1ugGcTaHkbMAW6baN3ZyNAyy3k5BZK75u",
  "key42": "4p6DmNS4TJGZuuQQyFCh1AuXmDbcsNyqYerHTQwRXV199tLbj4r2QEcju1W1LytJ6oMvuTPkzGEm2vZ2hs26x8fr",
  "key43": "5uKbvWU4tvYCP8LhVCE5yCCcR5UxzChtXfYyYBk5VHjs6zjtKEySTpPbm1AkztFosL33r6D1pPc8DWieDM6K98a3",
  "key44": "E9vcb5HgvyUn7KGN72urEACS9EkkuGB6PTj8Bn1xwP6xmFeBxkfBDnSpGXjZJiWKRiWiHr65JdM2JfpAgY9k3DK",
  "key45": "2Pfo5LoujeozgvyhtGLPzCSMKZggS3JdFUBdZwF55TZUHx9gVdyzQadSCJQyJjbzt9ZLn72vvd9nzaSLhnG9EjRE"
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
