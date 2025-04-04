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
    "2hc8oXFBjw7vd8NzbC36GzwQMmemp6PZHMbMfend87yP7jnXZFP2VPavmMX71NjrkDsCD9eLHxa1qutAED8vuzQa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UZgqrwdwNQN7uecPrJQToomW213XDjLk62isnGBFh1ZWGMBZe1NpQtcVDFQv4MsyYo1zVQemaEYRVG7FucRq9YJ",
  "key1": "6FaYWoqwNAq9uCTZpc3vcwwigyQjRA47tY4RDK9tVvhmfor1QnivA59Y47UHzCBgyNsrD5QgMhswhFQXecQrbVp",
  "key2": "3XKw1pSkn5dPdxmZtCU4PL6tsomk3hbFxTFzqFT6woh5H5WWME3D6EsoPaVMXtBv7ZuWuYCZGh4dvzE5xdnMdKS6",
  "key3": "2e5T8aPVXsGpayuGQSNggnssFKfvCJnZJnDjw4wQG3zAc7AB2PRTBF92i2T1KPc1DiiUnL5QxP6xnxzuHGhjJXvt",
  "key4": "2v3CiD4pwUwpEEkveGXqdxCpzdTSbPNSSpypPVAYBbY7RXgBZ9PddhbkQZsLXD9py4uNdd8E6oeaHAgz8JbhFZeR",
  "key5": "RqVJhc45PVyBri94ugJWCZTSdxVko2eZwPwnsz9QK4eRMzxMyMJmrGbHgoG29XfcLzPTwwYhuyKpPEYeyowwsV1",
  "key6": "23fvnQH66Khu4PyKaVziiKwaDZvvx527suekh8vNs83JypjB45iWBEAZpcmjVwbVBjvgPQyCAA9oL2Yi8jL5t8aS",
  "key7": "5QLjTLJzXkc65Huf9s4WZYcDruY1o97rfuPLztDw3BiWVupiFDK1bPRJHkzCFGLPnL5Uqp6JHSEQLWaENN5E4cYA",
  "key8": "3TrkuTRRgpkqc2F4YEnwbzydZJArxvcv59YoFayTALrhx4BX3swXK9FKGL7TL4mKWd6VPGTrx9HPBg4SsfTd24BV",
  "key9": "5B44jaio6YkPkjZidK8KatWMBffh7FzCvRczUHKCxNjDLF9PnwbBZLJCQCtpXj6V1HefxtYXxr9SCMNCjf948Wx4",
  "key10": "5uSfcPEMBhuSWmRp1R1JkPBQUXJ4an6C5se8rxkr42CA71H92Akx9bK2skPwkRKRz63oys7mMLTn5goanwVgX1iy",
  "key11": "a2T5uFYKUycqYGSXjkxBf5ksy1vckareMHPagqGtbRDD2CNpEMrD29F59jHtdGXtr4LhETSDaEmdds3zcwZ7tPY",
  "key12": "2Cg63U1io5FDsTLKUq14rGfa4fwj2DvAyx8QbRLyZsHTH7CzMpYUzC7eTT4UUt3XdNLW7EXgcJbtQMKmW4NaxxSt",
  "key13": "2hAESYFsndqMvZ9R5ZKRjEuya6UMdGzczR4J3d81qkYo7gLQmwj3o85x464NzYJhBtGqB41cT7xRZuY3A4EFn2ko",
  "key14": "LXikqMWZyRvHJ41hcCMr1Yjsoiy7utaG8R4ugNCcce9c8twqpVQF21mzVNyAo38MaNFkR3RDqeXvp8ecUet5Vh7",
  "key15": "59dFbdGPxkSy7N3Uc9qDgRPKcKYzNU45xuJ3SP4DtWLDHNnd4uQnCDKCttckF7qgVGw26ohmpVTyLo4Ccw95bEEu",
  "key16": "2X6y7JK637J8vcd1yptdv9VqGh5HzZQd5etbJ8FeYWK9aRRouwkQWS33cx6AAcCsS5qMKGodN7V68jLJkYc1GjcE",
  "key17": "aeDRAh1oTrCihA4Gzwz9NiRBQcCAcL7tfyDNpVTKw5h9Z7ad8BBLkXXdYJrSd4jUCzWabZoG916RBXhmxNGDWgN",
  "key18": "4PKUtwcZZdBYqEnSyvV561PVRW2ZasDqJLKDLrkejtSYYmbHLRPUxxVCto6Epgk8BUn8aG5EBkruCdYdHW69TAbQ",
  "key19": "5WTB9PVmuVEgchqtCSaYcXQarhpF3abMcwqMGvoTCU4nc2CKuH3kCfvhPZQnJxqSGXnGizA5bQNeBnvVkfer9uyd",
  "key20": "65kagagb4Dzr1qZQUMi36wx9phykW4NyMQb3aWSqFjCbYy6yuLd67BGnkApjSceZ6pniVnCcu45otbYB34FeuDjT",
  "key21": "3N8aJcdWXgDGaCmKpAkbr45X55eu6gMn3tPnX6MvyWyyjiCkNyZk5MFQrioyNgW28hEKqPfU4QUgzNAbRA4KJP7r",
  "key22": "5oZbFv7F7etQ8wqJpxtpZgoSUZg12d4HX9yHc3Ud2wNnUpzgYFTHykEmHEuoTk9JwrjgdLtEqoPYQvTCTHsexvbh",
  "key23": "DB2jzfDXCpamDTKcA2CbFZpMtJQTwGt5qQPhVbUUzYvi3PRB8MKpbL49CYiipKGp5kuacYUeFAN7RH881R1BPCJ",
  "key24": "4aiMprvcTUJVwJC3njPaYbrSfnMEEb1K4FJRzwt33jhsBkGnvDo8iUoeA4FukeGhhcqMtEqjvG9u7ja3pUeMXH2N",
  "key25": "4D58AxZ7WqTWvqQzyFCKyKyZYUD1dP4FHRHURWXtktz1mUsKLrFwAVfzRqkSzWVGdGDgzshchR9WDb9bxYoNsUbE",
  "key26": "2iQBYygUzh9LxztbZzKMjphCbpjNP6NHZCDUvQVotQFGQ1yfmixjBx543tQCgPmr57ihidVyYCkPdrT9gUyoFbV3",
  "key27": "2eiaAmTeaHechURMJQB9QRe5Rz8T5HjNDxR8ZwyJ2V2mkXKfFctSprWD9vfofysasxiKdm5hWmdiFaSB2bRuzuhu",
  "key28": "oS1ErJ8xkc62yd2xkBJrgsDa3MtorXgufSWFF2ugksG1Dv2MFuoyMXg8FN9MPYGkE6uVCmZtA9mPkd3WV14Su2T",
  "key29": "3xVSSt38vwS5xChRtotFreBgTC75u7C5NUrhbJ5b5oMSxkiTj2hsWgist1be3Gz67LChJEfNTejpAaoJUGUfYjWU",
  "key30": "61ViUjcZy6qmZAb76b9uoc16HMRRQLeQt1A3tbvnVS8UXNvfDbPMjMt3C2gBPR3SBQ1GWQsFdriDXPy6Muv83Aq1",
  "key31": "3Q1gDcqjBv7JaX8iGPLPExKsshKttFEobuKpg274EbP5upmgMhDASyAghXg2jiEHrLP2w2wNcLmfAe5LecmUiiEn",
  "key32": "5EHR96u212P9utnZBqsJKGgxgHZyrnZCULqdn6Gu5pcbYHRNubuiG9KLhhax3KU1D3viKX8rYkpvS7GNmATW8qK8",
  "key33": "48gdy95Pvcj8DEEcomTJy3U6HuJMWH8LcRRephH4ZxpeqpEmtwCsnE7cM5iSz224tZwPDJ7aRG5pQpbpeBA5KdAt",
  "key34": "2hbAwJTddhqoyq3k18nNpkrJPhinVVwFovYLuxJ3zjxQoVYB1bsFNHva88PftvgK3zYstMLV7FGzraBWyuMQr3sp",
  "key35": "77Phg656Ss6c2Q6TgpMjcESmCdcx1uJwP2APQ47pW7A2VksDJ9umiipoTef4AtckBKb53jgSvmJ2dJZxr18dN7C",
  "key36": "2esKQGx4u4pB31VLx2SmMbUPsmQX85wRuYVFxQUGjRn7Ms6m1EGQTTz8aTPzw7iXTzhwScV6oUw4NxQRmeGETXoA",
  "key37": "3zCK5QSCLRttiGoGRKyFgLmYPNxXeU4QYTjbHmyko9XFLC2jKTFTPGReSKKGEchxDL1VETAkLQMMDJQRb3umiWPH",
  "key38": "4Y4sBDdDHiBvTARfzrUqp3r1Vcip9KpGkU4HkXyAj2TnQDBvoECUbZva6YivVxUJyrTd2xLFkUKueimHQrmwUj2e",
  "key39": "2f36PitfqSt7eM42TT8HaKvX1L7D9KBzyiwbsgWRr1irK6mTuU6ZcrHNMmBmUjjsH1WBWwoBztjivBZUFx7J1b5x",
  "key40": "41gMGYW8cRmbgicbT28qydfDBsneUczPj1PCVfhCSzrsjwS8zF8Fr8Dazg36qbZbT6wHo8KzdUf23KZUTuJPM4kF",
  "key41": "2yAC5RZrzPH7zMQg2ynCYBFjyBdAq9pdnWPAEcrhrnSp2DtSkNAsL59Bn97ZJRi2AqHtuKFq9zpS3xDyXCmWytvB",
  "key42": "2fC3qFo7UAEBGq6ow2Z6zEekwA5trXbx8jiKLJRC2bZbJmzFCQtzY1tfJjm7WtPgZx7Tzjm193d2JoGt5pEAEady",
  "key43": "22WFX1CbNPe1Go3rFb1jGtF4w3vNvYdM3PvQWD44yHpCBKtcf3hwPANUMGhDLQ2dGHBYbpyd3ctULtnSF8vm6PyG",
  "key44": "4PfzytZDdZZAwuNnh7G5MGjMpiQANHp2Kiehk51mbGR9bDYM7brHqziQEkhZHBGMDaTK4o7hVf1ri8CYWkYMgjJX",
  "key45": "5eJsbKL798WcXGuEwiZadGdSWA5S31TCgMxuC1t1Ugqtpc2U3n9F7TNjEEWQxmCfR4v5HzBpzCCg8E6j9dasdN5u",
  "key46": "Upmjr8hhmsoB6mv7XCrzw7vyz6DTG1HFsMC7pczSuUS1CzdegqBUgjFFBPcoaB4Ew5Qw6iaqZc7gV5wkCHCKWqk",
  "key47": "5AQ4iTDye3mZT4YZQiUPyeDcYDv7qhUA1PexCfj8m7nXcAfZq2CzLHedCmLHH2Lk4eR92musoHcepMFZ3QEXxKdk",
  "key48": "5SkHjn4UeGi7Bp4btTVuDJKLDdxtxA9zP51ncY2VBALzZ96xYpR9dkH3FZZCMTM1svqscMnuPe9VAd2JLzS1mct3"
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
