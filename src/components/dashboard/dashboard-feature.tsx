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
    "5Dr1dfMPwZc3hrNAd2K4tAcxEMEYwJipjY7gJK74NaWQAVANyFVu95XHGany1f5gbHz9syooncCViwRk9tGNg8JN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JRGqCBJuudECUdspgrWk99wAHW8AwfjmMqzQR6E6Cnh69hqiAxE2SvBvuJHtqzWUWLmaNFrpZ5bH7vWbYquDveD",
  "key1": "2hSw1dSZ7bEjEJq6K88NrRQjeQRwRpfSbTBAsBG8dkrSz2WyzJ125gfDQtjBkRfrtoAyeTJkG91xW5i26haA1Jcm",
  "key2": "2semMZ5WoytW4j7Q66u4qr4vxjGB2GUcao7JXQSuBhksVzeBrggk62iaquhRSUVt2Sr8QMHGfKuFrQAFq4RL3ioc",
  "key3": "2oTJyBpccAtT6p3kjCzV5pLLcKtB9Gg3sSqbctC3UJFbgWoxGNupMSAZnuHWiY7vnaYPUowEj2GUQgXejgWJsgF6",
  "key4": "4DnWisAoaAYCtZXtgM3tgVB3yfZAufXyQUFrZgbYpTtvWBDZmBngLsnguMHzpmSqt5ZyuAr2AvnrUMVTspA9yz2s",
  "key5": "5CKVQwmcGi5SfHcuqPsv2s6irpCSJ8xKkmxpPBbZayUaTDfKq8uHbZpH9UU7mwAU6z46Ee3banjKKxq21cYtccyH",
  "key6": "2H67nazxTm9576fTYuiPuNon4xVNiDETcHPtPeY4umEnsX8yUTRTPYuc7YdGxrMbacogdnAKmqt4bv7NeSs7HHEr",
  "key7": "5cup4UHMgEXtm1pWg4DoJ2KPNMUTuTUxL3o1vjVvekFiaQNph5snxsXuDZhDk1q1rdwMYGvBqG2kwevGgM8zW1vu",
  "key8": "FCkY8Dp2RipudYCrpDHVdVbpH8sQPSLQGHqoDeGnk7naPVcrLacx8cL9FNkXSMS9L34vfvfq6nCR6giYj93CxBf",
  "key9": "3VzXc6KbVAKM317Ew6hugsJ2WTJgx8pyiG7utv5rUBsW19P4F1Rx1G2Bgh6zJmi1jkgaoPTz5j44rgiwmpiHj4KX",
  "key10": "2Y1iKRzi3Eh2s1vKMBzf3SKTQrJcXkUfHca7zxvvweQYyRQffthdiLHGYeAp6BYEBkVJ3QZxC9iyRuSLoxziA4Xc",
  "key11": "3FsJ31qannxt4Mdrewzx8fDySuvL41MWhmnBoR1LPoDdVZi7Sz3a3w16KsEfcNQtR61WX6SBoox7vhQrM7YrAB4p",
  "key12": "5J5ZtQFSEcHdy4ANj5NWrroM88YmnjSh4jWctasdGyzCSAZZ2kZThHMgg4c8HGaEidBpjzTMGcbStBUmeZvXsgko",
  "key13": "22BgtZTuo9Q67sYwzhEhrDXfyqZeXMdPnmpTueUuUqRYSyH3FucmfMVLpWWt7t1AMDw3yakSzKDmQ4JH2T4MWr2y",
  "key14": "3np1usm5VotF3MoCiR1J9ypcFG5g2BXZKzUR2LvZMrD8fZeFWXkXy4fEVbyygar1YqpDukqUJmd4ma3epiYU7Bst",
  "key15": "3ECpqhaP5T6NJQKCQPFEFTcAGrwJSiKaHsdvAhT1PZCWRoyZvmRyq5ta2LATRfYDXb17VU7tg3Vq8WAKowuonZ4q",
  "key16": "53r2u47fbhe9RgWchYmgmqLV3znFNkrGa1Q5J6SeBaSZPMbibTknoHdbTBjp8NK7Q8eF8TvtVzFPp4j7bo9joxFy",
  "key17": "5btCpfuonUwmaKdz4iXAUb4xfyW8ef3omhxeLTVxPxQDUUmJoAfZszqhnNWAN489Lmk9bZ6KtiA8274E7eEKUu12",
  "key18": "28LCanihoGJCnDF6nDi98miSjdy9698aSecK6iQTEmR7TuTfk6LRzVeuAcWRUCPFKzRyPRVgcBtyDhK173G8q4MR",
  "key19": "36PoKbkorBh4eRRqU5DAAivV8UYJ4MYjFrkbBp7bErPNmP1TrAbgobsR18TenfhpqL6a4JcGV8yDJRrNndqqdy7P",
  "key20": "V6ZAHrf8GETDYbgzYDN8ch7fTTM4B4J4NswQH1zaHfDEUL4uL2edycQQqjk7NwychGwgd6jCwPXxCozR75wjoUX",
  "key21": "4RD3xET5TkLjbVHYEHwyqQUKjnsJL79xmD2exLG8dsKx5h74F2QdGkEX3aYb1QxH7XrUcPvnFfYe36xSpLh25f58",
  "key22": "4gRBZxzFfMdPY6FGTv88DejSXHit3WdJxJRnkBeWcqo1ayqg4j2k8HNiHpptf9BXsu7197huA48MxxrUPJyqjT6v",
  "key23": "4nwLbpp3ZoBQYG4wTM1W4k8fQNypM81AJwqSNibnY3UBGoQhShSF29kbvMDRy9Z7x9JUUTBD4WDc98xQDhobKyt9",
  "key24": "29dhwdQmshCNa4fGmfW53yTtcUvoWkJc1pEPq7uMebytrWxfcD69yzNWrWAbpAScBKa5yEG91HBJkBzMqTiLhABb",
  "key25": "45QrTvU4G7qWMrFnJeE42fTLiaRniR6dQDE7y8taJDcL8RX6LpUu5CrpGXJYXsFGdyq7mVBe1Y4Wfw9Ho2CSRMzr",
  "key26": "3cgYxNmqnpu5XQghDuSEk1WxXFrpy5uSiMbJmEmzYyFEXyMySbQpt4kXaWCwSMfNAZNmjp51xxkbq1gTjS85ug6c",
  "key27": "3KtNAZRuofQFMc7rNkwYJCh1KmwyDNbpmuAse764M1E6gJUjXxNjPa1Hdbi2cNfxMLZLqeLUBPfrw25y3DGV699E",
  "key28": "3K2r5eHzeMpP1n5TzhJew7Zx1iGMhxG2Dm5hd56vDFUMzinw5WAc3G2eMqAg5oCz1ANQkGsSc4WkiuEhpxq7jFrC",
  "key29": "5Vyo4Mqmih6qyNqGDmxoBTPHpfe6J6NhQZaTSA9nvgnnbYCS79ZNMCwFs9EaM26tvugE1QnbrhvGbjYt1TV2ci71",
  "key30": "21B6PLTMMC57GUGE67uL7Jv6GRLir6Ryntwn5NueoyFMUAhERarH1xuqzTU5P8awtdzXdFUQZTd6DYhqJ9V6kp7a",
  "key31": "515qfKd7FwF3tygp6CS2nTr3etDV6xynMeEokuitaPKLf1C855qh329quqkzcgLciLyuuWf9BY9p4BtsJGxEW5Ve",
  "key32": "2xD5aMxpLssyRPHJc9SfZFK5bF93HfMYHQ9ixh7J3KCdZCsadmAhbmeUkYuCWJrWkQUFxCfsVGtycSPGG6hQEssm",
  "key33": "5WTxhJaMCxkz8fKEimsFSFncGRjRigB3UorYMn1VEmn6Xhv1nBpMfziLt7Sb6NKEU7q2LUV7B4d9ktYCUDgXfE8p",
  "key34": "2jbE4zx81NETYEfcU3uXe6DjWewYF1THEX6LwysbGvPTuJzKiXjKSEDXwEFh7AyLUxEybST6eAgGUVoDQqf3zG4k",
  "key35": "2A6z4ADiUXPauhfqU84sp2FkDDUgoP4X9LArUZsQvxHTokEGvtvft9orbRTvGuYJxk92tHEiXTnWUiarGqjsS9LW",
  "key36": "3FP3raXRSy1C9dXCRkyMzHfpHYQKP21QpzD3MeF2XtCdTqzqrSfpv4rGmxkXZCeLFRbADXaMGhmscVy5cgu356Sc",
  "key37": "4vKmQkeMN2c8J2vbLTr1eg2Ten2C7Tb6ciJmGDKyFvBazo9i7CY1jvA9B2HNpHxdTyAgsK86ghBzgHgo9xRjfKWG"
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
