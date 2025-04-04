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
    "ex3VCEBTGN6F6y4CL1mhBNi3GgCQzBikbUNUzHZ3SPEmV9V2xqyNWqf565u2g9dQniayr5Re5n6vA7tjuuoAetA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DVb46XfbkjP9VMaGdYLn3dh2tr3eYEfoBSkWc8AQZ8XRtLnhKAVirDCsL8WEvrz3Quxv9YYBRiPqaGenmnn9eoM",
  "key1": "59iCQFaou6xAjgGvhohk45Av2wWThsHEhG6kWBqD3SoN2mF8mpDjZ44eVgcAaFXREqcJRuSN2vEGSMfaJ22eqz6F",
  "key2": "3JaKR6ckgGKg96Vk7jtaQtxWiubakGPBUjv2AmRQtHepnQWT28RTPG4wvNvwZuvfypvEXrf2p2evycywwqxoEYFB",
  "key3": "61NbzQ3oLRHw2RL8fdo28jCx5oChVRW84T7BRQkGZRf2x8KYHVLw3caj49y1qRbaSGz9XHNCxjh7twPiWBtZBMwp",
  "key4": "5uiAYNYHrHC5pFi2Fs6QT3zhYCVp7d5qiAh7QV1uT3nvG8P2qEXeHzm2x1TYYKzJCHLTKcMXFNGoffwpHVAfrLiU",
  "key5": "3fCy5ZnTFKyNaxHyHKN1f5354U3GWoN1zE2Ujqdc6a3qcJVD4v2Q4GUwB2Tx51LaXZCWgdg4mHADzxSpoffH3vXk",
  "key6": "623E68DTFTCzFBju3cUrSwQmCZRJKhxUuJhuQvhopnT5Hdyk4E8pbWFsMxDZS9SH3e88tdjknKyEZGuJJtgwChTn",
  "key7": "467jE6GtmK1ip9rm6SVLHYuaMjUNjb4SDUUzvhwzbq8SCfxSktRhNoLAs4gps3K6XFUEQGvKco3ubKTa9urEm1K8",
  "key8": "3s3z8U1W1X7CKnRsqoQth7EqESduZWpLAecf2YX4SZEkZfoGYDZUUVuEwfjancHSo9iHkCVhF63eMGcySfsfeU3f",
  "key9": "5bvEfCEKYWZ4XNLAsaebXzfGHzznHiQvYYvRDPahStFsTeKqSaaGwZjLFc8ziJNPVtuWzxp7vymUwjjbDn6RJhYq",
  "key10": "4SLuENFv33t5KNkYuXxM52KFE173ULxH33paz7rS2dkmiJSAJmWkWx58QQ1yoFKDsTAAK7gUG5NiD8km58DoLsxp",
  "key11": "4PunrA9JFyRiamyZckg2jtbHXhquMBienAUbAPM34cWLYnsty3peYqjmM7J88VMZnwJ94enA4Y3PqsxNAkiuZuTw",
  "key12": "5Ru34MHiyJg5qhraEsQVWdaFEZbCPUHv8ZYjk16x2emrSPcwvHSUGignaZ6Yoe81vRsXRUyC3Ccrc69YCM8PMgQS",
  "key13": "mu67BAZjr79FVSggQQfm21fKUGaVjvn7i3aCuWbjD25tCQoGhvGHdXJM1JgBX4banz8rsCoUeasuaat2pF7vToQ",
  "key14": "5JK6kKHupQ2oxL2MxuZR8XpjzUeL63PL3rQGd2j8QoxY6cBg3ec8EKP7Aahtm3nnsyfqnDDeZpLrFYYNjC6GqbGk",
  "key15": "3qWk2t2xTGXNCUJzuopz3aPey29As1ah4c3QZfN2ytWfoqknRA7hHkunfqZXkZwjv7vN86Th6mdeJFfYWb1PkbLc",
  "key16": "2zyBz54Je7LDYuL1jwDufgYzUCCN4mvfPgwWfW2PY6Qsxx7ErSFdZ71V9YJ2vayCxDAfV9j6YaRKAKtb8ecURhoK",
  "key17": "62tXBnqR7TA2mAseS1wkfQFYgoZ9APix9841mjRF7X13jjTJ8dWbxDmFWjk6ZakmFjHL1JrLAYHaM3PuQ2M1mYMM",
  "key18": "5xkKXu8Sf1rr6WqVKrPBmVtmGugxmxjuhXgFirkWhRD7N6vQpnCnkb336GNak5p15JNHcZMayrMh11mzkbXYugeB",
  "key19": "Ef4U3CYi83MBSiSqbUCao9SB2QAdoShvo6HEV1gffAgNJeukRTaDnEfdM2tkVUn2kpEPy4YesWff7ZHBJ1wHHpk",
  "key20": "5YfkJKTAaJSodLVuYa8j6PgZkTbP7wVp9gHTGJuZwVptHFc6RBttbDH5GpnR9L57j1ainEhdbXTdxcDd9bJdWdrx",
  "key21": "hytnAmq118x7YvLuG4eT7cMeo6Nx4N7jU6UqQ64zfgG7XBxpuafZwZDLMp66p3q173waQSSyGvy6c3ofNTuhArB",
  "key22": "3y8DaJbpciJzat63VyJFvWYaFZhoCCaeHfiaHHRRBu6H49NCKnpAR6Q1sqEWMvYw9gqoMAbsu3JLVc99JWMLkkj9",
  "key23": "3v1yudLTxhv1LHQMyivxSP2eZUKaLgGo8aGgjBWscCfji9EQBZZCkKWRXFHBjzTj4uigJiwCKqkGACMNQnNTEng9",
  "key24": "5f5UUE5T3StvDWhgJS7BVPoBVkzx8taBQYVrVzNWtHLMBtvoKSEyMzfnEfXrGkN4p8RcnjM4kXt1QiM4ji1douMs",
  "key25": "yTeLVYgcEECJRBhW9z4PkVLLFUcKMDkiQmuiTtahJzphVkBZ971WTNY8rkPeNRsQHvB4PGiEd4t5CwG3cKqJqsR",
  "key26": "64y1KHvw6gFYQmnEAMhXvKA7QorPYtMpqBNndDhfghpZUS4cr9eecdo3vA1o44y7WHmeTCJPxff9VMGG4Dxivanq",
  "key27": "5dHipgUSHaEHxouZSNWQV8V9rki3DNmpWnoC7trUp5YtTH59ZUNscCprUTTNc1Z9XKd1Y2RjipCZuTV7DSGwj1Pq",
  "key28": "2EqToCf65Emn1nWECiRPvZeNsncYMbSAYcFKnw2zqe9rRo1rwMtrVVoyxTX6RAgvrwzy47gGtbQtViBBxJkpWGhN",
  "key29": "3KjJMTtwyzdSQpLGibvDzp8ffN3UZ1QcZ5qTBRH9sUCJTFFAxYVi2ZBpHrdvf17Zkt2KMXJbCapRu2QMP6y3q79L",
  "key30": "ZnziazbC2JsmMuC4FWH5rspbqVSuXqpFZj7oe884q1gXcBgTTTSFUGyzr8TfBi8NhTzJxJGuf42vr7kbZT63F8B",
  "key31": "5AHjn5C38h8GSER5wExjCqFKAEFXLAPA1R4P4ncJiS8cbsoYU4UkpD82HZeEzJd3mFkvynirgknDRjzEVLjVpmFs",
  "key32": "4oQbBQjAXL2eXYEvifNs8tjLXJA5DXm9vXtD4xXQUhgyHa5Las33L9WbeJRDPdhureoiK5CFoosdHJHDW7CfXcaD",
  "key33": "2dVEkNS4q6GbCbEoPZZg7jwaFnjjT4kfHaknf8x4Mk8QUg4bWhaQtgPZ3qWKQBm6skYJLeL8hPE5bx42BE7rSrj3",
  "key34": "dJ4txUzXwjRyNKHW6rvAL1DCyKwkDMxbkenpGDC1ZpDK7ok4GxFgtT9phh83cuiD6vmEtfs6abuXiu6mrN95qFf",
  "key35": "57TGh2JxTJQbHME3iVcEokMrzyGrRqgW6KuWhgRzjdEqKx5W15nThWeRYizNuakfTxtUipw3Fp25w73RsaZvdjNx",
  "key36": "9AwFJbb1HKcvUzMMfjkEFwaWPAtfybN1ZZDrgDd85dnttDsEDjSDV1wq3toUPtkpNtkd5JmjmBRSbxMoKWqXXhT",
  "key37": "4JS84sJCiDqgiuXgiRvDi7yf11XYCHDWAhixsxmtWNMuTsKasVkKRLz11cKmcLSc1psjfBwjFLt3hHSN4MQoGH5D",
  "key38": "4dC2cZZ3nwznbPHjhvyfx2SZvuW4vxuKDeooqrUwhQVuTKXfhj7fP9Msy4uF2zmWKunWV66C7Tt9qKzibTyk8aCB",
  "key39": "4v4iGUL9PQbLVQGhTGp8N1YjJUJAL24xx4C7FwNWJ6XJRbNweKKXhwQwbz5awbXjjAS7mpCmWTTtdkAG3r6XJTag",
  "key40": "3suPtmM4KAZJabJoXZX41R6kHwEd2n9poXJDXrEANrLEoqANgKQz8oerabLRWFfDRMCaZWt3cGLUhCCqeN2EhwXP",
  "key41": "2WzVw3CsZgCsboMbummJecv9vUdkLswmVe1RXp8SyvjbDZrFvYUyWFE2Y87ViQ2kAY2bZUzXqfy5SNAQtQwQyCcN",
  "key42": "5g1iJZBV2hsuuJjt6u7eMsGY9SmhK62NWFc924yupmNGAAwFvurP39GGo2rJ4LFLd99ibt7mRa44p2fdneqhVmNM",
  "key43": "2t8XaC7iQ7buoC1xUsp5w3Ath7kWfQD8v8P4sbpo74HzKgNjG3NyE6mAD915aPeubRMAZ7wYTp5RYU2XPoWygcad",
  "key44": "3KjUBwLeiwVg36eyAMgCUogNGLVdamE8EZog3VkDW6GRKEiksrmdpA2zooebEcx21KGRSsSFuFsFsPeEMwL9eaur",
  "key45": "31b2FRLwiz6FruXSB34Vdt6712MRmnxc5pHQ3PHreBSHPVZcr62ecjaB4DUvXwrpNhTJ8uexkh4ox8ZJQ44TfiE3",
  "key46": "4DjBZBBG4jopPpC86STiVbbQS7v6BYP9deb46gpCuuc43qvF11TimU24qqYvwqDtV4etsFPhin42NWjrUX55Y4UX",
  "key47": "UsC4cDhHVddvg84hnRyZY4sjjQj8cVgSfBNQY46EQwgK5X8dBPHpaiWNUmijLJ2c7uG9XCStu1KTqDvAqx596xg"
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
