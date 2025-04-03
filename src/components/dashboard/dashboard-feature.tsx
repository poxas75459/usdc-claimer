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
    "5z81VEg7QdVBSJhRUuTrTV5sfX3PH6tehi1g1YXe4Ujd9s1Xnft4vSfg72nZhzox4UxE8ZKJyiNg4bpejkEMqAxk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PptVQypALkz61Cz223z2BX38xv5sywgV6iGpsuNC3xMqnVZtozEg2gAXyH5pvQQVV2QgXVetwKbGT56PM6mziiU",
  "key1": "5edH7rMP581sWAoafF668C51XPeGPdNkQ3sD5HdykHwD66f8BE5gNB6SUePvJqx6779bDE7wkapX5PdGeB5KnpxB",
  "key2": "4dtwrqD8cVEBex8riamQW55ViipVhUv3zT5YEFRhNZ1cnfcUC1aaHWAJq65rgCrqrCxF9nqnp4iepKquejZawsmA",
  "key3": "5ge6SySKqNFYphNdK7bA1hFhzeHytnyY6hQKmpsh4QxxDLgHXE86SbBYj8mJxRkLBjUCcBqycYQbjZb8C5gJaxwa",
  "key4": "3nbMQDBFJVDRoBA5n3biQN4GynGjEigR3VjWmLdWs5xRKJA7qwikGYQ5Z7eiKg9vd8Ehu5gCgPwnkbUeBpdECWFv",
  "key5": "4dWKNKVfX5e5XHCh6YaiyiKa45GcF2s1tYCfQgKk4mtfQWX8jBg5ZRMo7waKiuCjCZwU42CTrC4tXScWdeu1nA7p",
  "key6": "2a8THasUuVQCKN3GtkxESfxMoV4LNfvwLnAnbnXeCKbUjbmRirpown5eJnTnM9LU8S1t4yFMnMVgxkp28s9cxyKz",
  "key7": "4pQvAG4q9EsRcfMS2MNYSrcDUH1z1wbXkWt9mi45LsJe5oH5poshGCmM6k1FfTWZvtTrPGADKtfhCPMdpYdr81w8",
  "key8": "2LzXsdrjw1STMy1jQ2mKA3npGwckKVWNSkvgC6EbbKutyjF16MtQxw3UAUE5Uk3KL6R7Ni2CL9i6bJ7CdwGrMuNf",
  "key9": "5pyqbRjnfJd6CSizX4GWwS9q9XiW9RWrNyDSiqg6e6Ymmpnm4FGKcejoJuoZ3Mrazs6ePZvQWMybXyunFvaqq9gi",
  "key10": "2ojqtKbPdn4wvHzry2Q5xvsui7S2oeQVqcaX86qxpoYFp48GJdd9GrxmLHfcB8dRNxq6AtbiVfcsEq4GUH4hosXL",
  "key11": "KbgdFeuE6zhS8JvAGfouSHfCphyzZdT9VYecSBFoUVToMRYWFwEP6N3mXwbenx63EPCo85LFYvF9RPhvvGCnFDN",
  "key12": "4wKR9sfJTucfop4UaRPzWsHXQwnvUBftEJsKBfSyrTwHn5UQmzu3Uq6CUSdiPnbfgYYFg5FFdfacrTfzPVGjp6xK",
  "key13": "2cftWkM7TR8gNfL8hxkqw7km99YaXdPjQm73JyCi7UV97zJq9E4arqUiVvfgSgDpZVFC5ZPUKGBy4Cuqbgru3csn",
  "key14": "4YHACAmJn24aJx9kVKXtDp5h2x7iSHdSN8rR1u2LnbqYrMXLmssyqqFXDrnXtkiRXTkFvNPXwTjThWgUnbsMKBp2",
  "key15": "2gRCgBasjs9Ugnym5wHeGzfv8ZWBoQ4rGh3hVozpGQRPL6aNMZQnoYY1aCoWa3t5pvh5LNkC2EWxcfuSmtd4KZir",
  "key16": "56DSXRcCKX4L2NjTzXQGpi6CpLwMNd5M9RGd5e8kvWk8LM4epKYYwZX1sC3ExYr2GNrqi4XYavFn6UuXT6eGxUCH",
  "key17": "5Q1yxZipwB83Wo8H9xnHQ3yMLgLW1Z8nCcCfhnVyTVWRj4fZi9cxkTaxFqXrph2xnUow2A2tzrQHpco1p1wTnnG7",
  "key18": "3Wn5Qo8XHd1hzrnVRvpuFWMmRuCh5FdEYFemXwEzhdZrJwoFd9DSgUd9GgsYPF9uxTCshtZLRN5FwsArAsHmAr8h",
  "key19": "5T8ghTvGxXRVXQyv5k2ntxmar4HuD6tP9UTRoVkLEhVCgCe549CMDzZDr2BsULHZcmKLVk2cCW8ad6gsrfN8pwRM",
  "key20": "VCpiE8Yo3m5B8tyritmbTgtytGGhwwbCXDKUAhPKAK1SdjLFNHbYWKNM4anGnMan7wMNbGKaEgU38sUHgqRApHN",
  "key21": "4Nyhhm32tnsErp466e8UrB2gxDLr2MyvmxGaZY4DZgU8idvcohpuEPXKfSLDiom1YkQRvoGvzXJLPzpU1doZb5vm",
  "key22": "3sWdDUNrwG8TUMyxBNtf9PAQPH1xxGUjg2czpr4B5RNriEChKecyGgZJ1ThRmhwX4mYRrNSVGaoNLhJBKyH7xFPw",
  "key23": "5uprf4ArBowEWpVF4r8CFijXwjgAow8iYEKdpb6EUhV1AtHEJpGZemQYPkaZ1aaxd4d38Ag7oY2diYs58itBY9ht",
  "key24": "4CZCpe428tcTD7dNVREHG34y9E7Tucjr5btBbYykERHANaoyA6d5ThP3nCsWEPX1eQQuADJ6TnmVnRgee53B7D4W",
  "key25": "2ZSH63vmN68FPgp1q4pgoa24ddXmNZ75MEaao9TemCTJEeMs9PQEPzd3fT3FieRwGNTLvba94gHp8WoCf8kg4FNR",
  "key26": "guXh3aySvRA9TX8n6ALRNiEK64iE8ZsE9jUDr6kz2TVCwa6Bj7ivR4vf2k4tAMMzvyZPeckzS5WA7LCepkxbwLb",
  "key27": "43Ajeonf1P4p3wSadjBRsZMkZZ2HVrtNXaAAVfzXN5hx9ih2kdrGka7DZq6VZHp3Av8vySvdA5znEzYqHZPJnJse",
  "key28": "5dqk3VpUpsotY8TQLqw95Xjp1LwAQDjRr54AfywZqa3sbPN5YSGqs94fZ1PsqVFSu4XTrpSyG12PgLW88VYi3u5M",
  "key29": "38URP3HMCgeguYDs7MJioy6a4iNeVy9YyX97sE8Cn9eFJJudV8hPEvKdx5YryfwGXqauySXbdQdmFJw4ZzSo3kk5",
  "key30": "3ygeUiCX5wg4dU7AuTT2m3DVdJRx3wJMXDuG26BHbmQQLVzS6JuCUBdUwe8ab3gMFNfMUZXF3TcRxkvCjAdSxxHg",
  "key31": "23uW3bom6qYp3YDwNhy3h2Too88mHGYtUT2fXqFbTbhZcvS5D8jwz47baizvmcLKx1VZa4QcsHN9u2JirFgfSucL",
  "key32": "iomEZUSXQAp4DyxshrZjcy3jkhNBcXXg4LNWKj2PR8Zvkg2Jvj8HLBTB2jpapoAnfaG3iHq2rRvtcHbe9TX7Rak",
  "key33": "366D3uTgP4tzfUiSfMqaU6eRiKztZSueBHeRFPtFacMHno8eaAFMrBnxPmWT3q3ZxzTttVChHCpNtQzkbwsV3MRL",
  "key34": "7L3S5aj6LhnssG8fYZYugyAAXZz6CejKfMtXWn1G6FM5UrV9Qz2Se4gUi8Mdw1i2JEBTA1rmit8GxGfH1Wr5kKW",
  "key35": "4tPC3xARMohmz1tGeXjBPS4fAmzPRG6JLe73PgmtKoWoAnzqeCqQbHMLvSoUJuZx3gJV3JbeXdZ4QH157nPhqqb1",
  "key36": "6678Aux66TzjtTtNXhWsBr386dFqUdiZp8xBYMjwCS5ooU24W7cS7EALXhuR7mRuu4hYsn6frmCKermgvJhre2gx",
  "key37": "5MgQH6N1QwtLzUcHz5HaWQUZV4DVzEeHFR3CFeMZZbSprgBFNBY7C5X4oszS9CUkTgyuG88cK7U3tXUdsddPaf5F",
  "key38": "7ju1ZmBuUsrnBXSVurKCYHToTLQ924fUDtsUFwbNMhFuDvYtrTNU59xoVxj8Sj5Br4XJo6QifRLG6TagjuHJ7JY",
  "key39": "5WfXdGsoTYJmmgZpHeezeoBooSxw4eRAhr2a75yP1bV1P6N5RU9Tb3vHjr1MwmWCNUuFkeKBSBgaNRr5ZM3LpZeo",
  "key40": "4tumEz7Nct1gbgH1ki3h28um7aKEbMTufCD8HjjSd2ycXHhto3B4DBMmHDCJqa9WpPGVUfmxgQbM6ujrqvxdJoin",
  "key41": "52CSEQiXUbhzZBezSGdLHLaYx8LCL1XGJQWuzqYCQvVKurBrQp9GxbVELokhSpuMog5yNtGw7DbtG1yooCyDbuh",
  "key42": "5ZdHwNVNnEA8KSNMhjToBYRtDfBkkB1iyzPFz9GV6D5sfsHkVcszHi1sQwB9pekchRGviVhQnUpeYfB4hKaDJKW7",
  "key43": "5YpuXcbJcwNscNXSB4uVwJfCutwUwbzn3BaKibSez8UDQmvy5ZPsB4WN4bYJ9bu74mnKQPkoKv7iFEn2StCkgoFz",
  "key44": "5tQjmHymzwV693qivkvpV2uTprUgyiC773Q3TABYcnzZSz4MjMueBbR2n5tsxAxD8H6Q9n5uHnqV7mworRoZspLt",
  "key45": "4Ubpk349u1oQTFSYn1wrX2QghiYxx44za46unAhSL4RTr4YHVdqT8wZC4o4vF3f1DZBRy7HzUm9wmyEBghwZNKaf",
  "key46": "3XuZsggpGQqkxV9mEpvojMfJnKBSrpbHzmoHT7e6VBoCff7H1WfmNtB5FEUzYrFzsu7eHamdKuU1TrqEmLteNPbH",
  "key47": "2iyboM4uPPtAL46GjkQ8neNtMWxEXsU8krKYuSwy65roRMgwoRJCmvzC8NrMTaouwZWUtt4iHEbDjp6jZk2CVgbv"
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
