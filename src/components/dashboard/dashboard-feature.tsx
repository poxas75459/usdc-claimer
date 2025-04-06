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
    "2Eywc5WstN3VipnJJYo1FnEbxRTgyUrzJfYmiDA9mX7CUXECbt2jAf4fBU1fXHEkNK2W6Gf3sFSH3os1WVU2ig6f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fV4R8jZ92BAed1mnoj23wpVR3QXeEHcSNWgiY5Yp7khmjbiLz7rpEV55kbuXZCbtAAYnLrvoxZUF2pQmcEmdoTg",
  "key1": "58xratXvjiVdoqUGV937A3zmUyo1irNrpw4LsWDvKRBaBFNFMom8Qtr74hnK8L8Ar926i6Ruhvi8DRDSAePeiSw4",
  "key2": "42zZRQzd6599j9uwaU98VBdFjfKuSg1XMdFe4k9WU6ytoZaLd4k6EXuXbpp7METyyotzqx2dWds1GJCDYAMFXMGd",
  "key3": "5z15YNSGuSQsVV7X2VB7NqxQGu12NSN7wt3vXiuK7adDFYq3reLu48uzFftcyjBpEbxCJK9uXmEA2Wh8WNy7cU6D",
  "key4": "DSF1wyzcqPG2Xuy1HEJA25A2ZFRn1jWitwP1LyYr5aeBTG9v4uee2TwK8YmgMs8AQbv2xZjsJsYC7Y1voJ3Cjcq",
  "key5": "5ZvTC5hnu5GoWDL1Q9wxBRyLhdziiEZe5DfCrnfvBhcXpWqXDLSkpRR3FjdFjshhZi7QTPokY3jyu4aEAb5RhkB9",
  "key6": "6RhJmVHMpznTCFZffNqnt6qXFCE3vw4XnZ3r3KbeZhr34XK7D1Y76pT7vJWMcJLr5orntXDHT8MgJMGek4TaGrm",
  "key7": "4e8JiycbtLuDYYE3wAMX64uJ82CBqks9CyWEHREexGu2bg2GQRn9yHBqMzwTuUQ4FPwQ6Tyzy82gWQUXSK9UuUse",
  "key8": "3dgi7ZT23fdYo6ot84FU7jBsSJzZuutwxpYZ3EwhQSorPevMgzP9vt4R5Jvp16rifcqhYkigpmiqBdUyAB5KQG7f",
  "key9": "4RRdP7SncS8aMaCPERLPLKFtxZhU5mF9nm6WpYAYwMygNdA3xNRwPf4a5wCn5MP9oLUTaJtGBeEAVqt9P79g1adM",
  "key10": "ksKzPR5GunmcQw6vvF84cZDarrtSXWxyjRxofMijPLMZS35P3wGrbQpXq5g8Xis9fC4xaMjBEBv8hK4MEhoZSer",
  "key11": "2A8beXBXh7DYTWp78t2iLHp9mibDDDMNM6NhsaUH2TqyCsMRyaMqxopExW3LKi8nBg4dLfQnbsJtZMcJ1D88Lt3C",
  "key12": "5moxeiwKvBE5e4Whqvd8pa95TkxzQMfYxuBjaFk7rEjJ1Vht6Tabj5pTjMtk2ohwYzXFueQ3VU6U3TVow3o4tXwW",
  "key13": "HGhP2aHfDPRSQ7fX65RMVPmTH7j24dsLA4smfW6Na1ezpfaboE89eaTAd3ae3DwsACeUFxGb5KCEuXnKLTUetpY",
  "key14": "4yGEtLowakaYZUnkdoxHVviDJEjF55zbAiZeQ385997ZY3FZQmN3UWvq3XM2G9L4eA5wiNmeUmEUuqwMthiuS6Qm",
  "key15": "5SsuPV5o1KmBcyLyVJC6Z1NSgoiMSrfQ17NaJ1tQZNf1EMrNbKFBYQneX9WjG52ETbT6o5A3A5vQVHiYwckF1CWD",
  "key16": "2omEnXyxoCWtf4YbgwL9Y42UWU5A5oqJWBLz8WdP6n53dN9saK8KaPJSA37R633JV2JKLSJTXfPU4YzVnK4YTChz",
  "key17": "4vHUtgn7BrhccYvmhkaGNEn41svzGTPM2rjirmXPxZMWqU45n6gXEGBaMXyG5QCbi75c5S7HfMF4FmcKThpnS2WE",
  "key18": "5YefxJjMM3eRfE5QZzajy2ep2yyFVz3T7uTdSoSTfTeD6SJ3PB3EsXCny4HVmCpbnzzJTTMdftxLGdkiL4skmPch",
  "key19": "vf1QLFbWh9M5SdSukJykiwBFrqmwoVo8RLtTgZj2YvVPPUbb9VrowQDRR38yNG8mL9vmZtxH98BSozRe7zYfeQr",
  "key20": "3NcbKqYYxBvwk5X5MddzLkJfxUqnwHE115cZPijesj3LQ3AhVTjyyWQVJkRpWmMfutuGxFKQdroDNEtCx1Qp96LY",
  "key21": "3k235j8bDT4WKP8N1MEtwNPBnw6WuFtQYVuGbaBEWZyT3ZBK6phDgQ47nKNccUkdxcnSCtNkHnfeLUrAvikXeeTC",
  "key22": "4CHoD8k6tZou3mV9p11bEHW1p3PjVp4xnciL6iEmUFHYdHcnXLBvaG9myz9NM8qGjfmcjDF3KGCnMByMP8CwJa76",
  "key23": "29wdyqSx4juaLjaSEezw98wk63NqwY713yZKHEdqxuhCmFhAH9kPAScMLWYGDUKEUCvBHQCmQSBdgezG3jJyN38D",
  "key24": "5vKRSRJfTbJV7gyZfPzBdkN3W53WAhDeWjeYxxAttA3zemPQy8dwCke9Fyihvbh4rnd5qdNKdb6dLYT5KoQYhw9K",
  "key25": "23Gaajag5xXDjJDTWychkvwJihHYb8NzaHFnQieM4ZU7zwv8D97hGKjECkJ5amcM8c4p4Kx411wbL8VDsshANorm",
  "key26": "GA9SYqFm5H5v5MPxu8FmeZbQhTjR9fqvkgKf34JPGeUiEdByyutiUSbEuxPQFg89LHLvPLHcWxanvA2sTHEdoEg",
  "key27": "48jYHtuA8xuKcgRc5PN3p3rKTxU5P4RmEuEK7mpyYF7inAkiLLW2zNY8NB9Xnms3ioFAf1tQrXGiQv5xDWxo82T2",
  "key28": "56oX4sM9zfztzXjSPM1LrJLRWvcfKaJgutonVrmS1Y3qH8FEFTT3zXgYfbaKmnvFCdgZ322fM7Z7Nvfnq2wxgpk",
  "key29": "4vVxGcex4h8jkUiWcxhnqNotTKUSv221Dr4F9BBWQEswVpoNRxNuZ5jRxK9e7srbbkaUvAja9STK4Nksv8S3p374",
  "key30": "58zJwhK8E8Ft4K8nk2dXYdyZ2s8KMhLvHeU5gSrJZdNncQcVrMA79i3LzwNigU3QtFtEzVUknL1pGudYfT8yuSE8",
  "key31": "5ZYG53bNia5MPsaewicDkUenjyQZXmG3M5HR2a1bXDdHP8QELMtL4EAZsi1kRYVjKYxPwQapV54QxPYaTKMcY1D",
  "key32": "4arbEHgk21YdwDg7CfWFnizu3YAqqcMeNCSz6g2RXvRM7Kt4bcRnDxzeoEfYy6aVxKBqXLcRRZWmHHPsLxg4DFb",
  "key33": "3xmhzNktL4QUP4Nv412w6Y9NG3r6AMM54ni2H3o55hg36shafCAvvim4ZjZ73ZVLNTnDxWByk74SNpFcmswyXfFk",
  "key34": "2e9ekPmkbdjRGm3RaJSMX3XJ25nLiQARz9eAkZgC9WVrekaa3ZyjC4rTZ5Fp3sTmKS6MnAkzQ1paWg5NDKJEVRDn",
  "key35": "4ZpWpxVv7Htohde1PsjTe1Kor5fciLEeMBsjaAXL26YN5N9zbwqDUctpmAQzirgfuo8qXWWEymnFzRMuTdsPDPmw",
  "key36": "3k8KeHSpKd5M1P8qA614oTKT1ysVqPu4pCE7hd2FdewK3qeZ5WfWgHBmniik9Bdsm3vuqj2SVk6QPoPU1piQSVPa",
  "key37": "4fytFJkrCgKBPeBmkmyXoEZ36knsg6DURQGUuSNZwdRc8NM6GTwdRsiJMDAN1okgRCeTHgG2SbbpycnH78tKNMV3",
  "key38": "5qBRbqLrknMFZxajH4U64wt2u5Q6A9Bu8cv7VMHxUG5jeXhAw2dbLn5eX9Ps1fWpabG9gTocXRGCYhVSjYcBmPyU",
  "key39": "2VpPKkyLZ9BaZCLGYWMQoQNYhDdCgvChmVL65M8Bkp3N4czvQRxMj5xmSU3C3jti7ZBKuq42f6vT2NVkYAtTXSkL"
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
