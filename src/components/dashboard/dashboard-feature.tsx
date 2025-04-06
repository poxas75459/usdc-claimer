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
    "zJVk5Sv3QHECeVjfhKwwouFjRzE2se27VXTCSk7yk14Ct6KJpiAs27pNMtK786gKUvGirnMyg4mK3kkjCbGzbbw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UB2Pa3mKpBnnrysnoKs27yXJV854rNGXpsiL6q9oc8YN5TMW48vuYCmhBcmWec16qzNQFrLvfxwYMpFjvCF2ELQ",
  "key1": "4ihMwVTSv9jmg7f2jaDQ1sD6En4HtUQxxmwfCA1NohdwZA812er4MhPKw5FJWkT8JrLdpFX9TCaX6oACbvqWU1v3",
  "key2": "3VQQeK1LHqmAvakJterHGSGgSopLcWvKZDVkR3xsZpaQ6gsaNtgJLi7BcQcU4datU19pBgiqt3LN5wbGGfCYBuKp",
  "key3": "48wPjAcrGVr1dejtTz4yE1cJuKHa3svBdGiXstkUqp8f2uAhePExfaimmsuV9oqosJALA1EBmmSh32pB93xnxJ17",
  "key4": "pzcXu2VsegvdukNcL7XqQp5Rcj5pzC8RqJTtbG8mFNcuokChak2FgqMnUwzf9sZ5HZL8hsHyaxwjTgj8myf7L9p",
  "key5": "4NbotQj8nfbakdy9SRwBHWow7aqSvisVf8ecQS2sGCxYP2x1K4U8ZyyKw5EPMooakJS3FFnURcHJtgc8CysgWsYh",
  "key6": "Z4HkHYstheGtHvP6K1jy2d1Xed2g6oRoVmoVdMaefPtDwGp2knyeGMhbE9J3AqMggtbufBZgdks4BzENQZfA6tk",
  "key7": "2vDX8uWFivgEzcDV8gGTbCZCPnnm4qa8V62SSGo3yWhAzqhq8YKnhyCEDaB2M9RiRyX1bnur7KLFjFuD9Woxf2su",
  "key8": "47BLRjCnX2LsCjPQDMk4sLpSSCQmwCcxBxM3wH6Df9SCtUf8qjRmS9SGh8h6hW5im99Eurq4szS9nL2RN6cRCfb8",
  "key9": "2cLBSRt7EgbMBZonUrdST32kjCBhzuPhLvMLo1EDgtsuDkMAPtsNgYJJNii4c7pfVFXDQe5nrACYNqFMyVTumqpn",
  "key10": "2A2xwTKpgLBY4CUpNqq5dsJ4uLACxGVqxGypqtzVpEKWPsmkynMBfSvckWjgQGTBDrZ8EcTcKQEQnYEBedAzJotd",
  "key11": "5T4o1JWZhxWr4rVNxEL722KsQWgTBfVQNuuZegVniUAxW2PWnpEyBUf74U4xBcEs3hjHoP7WgGWAKZSgmTNemJNL",
  "key12": "35aEmkaUzgdCgCizk2qbaaWchm5qAyT8n579p1frgWZERZqujaDPgG7XHnj6G9qgWDYeecnjgayffgeu5wY7DtPS",
  "key13": "2YSS9BnxYZ6qWLqeUPdpkYMZ7Xno9ReKWR38RAoYBew5dgK9Ukw8stzXcnYYbXWSU7bZzkxReQoQ2SK39nWymbHJ",
  "key14": "2wh4Cny5kWpFNzyxbm91HbsnuYbX3aiC6fQ2RN3M221VPJqji2DUvk9P9yr53XmyyYPdtGYYxk2jgnEtmmoPmcHY",
  "key15": "q3WKCLCVH1hdaTsStE9tUYWwo5ZXJ788rXTw19AKukvueb8JhQn12MMD5iaWDPZTFsQwKpJQQgCS9XbzryrSink",
  "key16": "2UQZvnAfwV8FdL4873AmF6QJsoAzS3iNEChD1kBAuCHtyodnRCzEqnACtH6QQaM2YBKBdNdbmykyANGdGdQBvW9G",
  "key17": "21w96EfuY4P9j1goWCsyRvWfdwQDk7kaQQ3kTHNDrm4nKttsp96TMeH1MQrTcER19jEALMhMp2dEiAr2z39QUepM",
  "key18": "541rXB3GsXjf8C6QaXvWBPKEu8XUh5dR1Gs6XFoZz5Tvbu5vUDgBGS3k1DE9JNA64bmw5e8245gGdEFKn2afj4Lq",
  "key19": "3a5cZGCyjJcSzk4EbEuf2tRJKBr1Z8qCxNznZxpUCBbNwoEinAsENhEt7x5YdhGucKedDx5ULDnwByQ7WWHfhsST",
  "key20": "2LSyMA2SYxuroeH1JWDx9G8ET3JWsPZqtHc4DyeKhnL22o3NX1byzt2cKWMCbLnxygdycZnJzJxEdU9cuQXf3Ei1",
  "key21": "3inrXm8R6zw6MhW3pbquC6imm8YmuzWP8vsX8xhHCDo8CdFDRtNJoyMJfxAwT5wXkMQrr6GwNqW4d6Umu1B18zaf",
  "key22": "aes6BHu9MZETzXVUNZ7WkTVnVa9gnEjKGKoHjufNn8pVjiAaxgjiLKNLURCvNknEcyKXY7ocgqbZaquDYge2p2r",
  "key23": "3rEMV9mntGTmQ1bgYZkB4MGizd8PcELusPwqoip6anR4NWdAKHKtYGo1PgGtr91PfbGtn9wxo7tVEvG7UmyVZ3Ui",
  "key24": "3FPHm3ui8S5KeDo8LaTY7bLZ1aCF5rNrkUfCkRofqsdkH8aY9UrnZgPQZWoAcTd7Jj8fbmnkicLqHX2idfDQExVU",
  "key25": "2bwUwL59WyW1GJkoChB4oKxWf6QSSAimnQ3o4f6GqPLQUWBn2NoYsA7yhUdYjsFEdiSn2NNgKygpAZEMZLFSoSYj",
  "key26": "4oBhfaJZi8AFeKSG7nr1Rrv49FhEPTKawnMuRTtz7AATaztjSdmBHCr9merMQRx9gagYohUuCgREEGswZ85T8cy7",
  "key27": "2MS3o7FJL3Ki5465ZFEwNWX4mBo3WoA9EDvpJoGvxgo4wthbsAshc33mjjVq6zu432soV49LA1BeiptJEL9cJDpY",
  "key28": "4PEstxZHCfp1nZgNSs2n6XLqimTbvcU2nhY3o5v2girNPuvMf2bLPi9SVWoHni9VF6m37ADnPc2uKCnLTPCvBcwS",
  "key29": "4c2rtMjmuYRYyyJKGo1u19MbNzu3y9t8kjUp3PwXZ9BNA8LvjZh1zPfqWAZSMCichUh7FzjbbotTHUaD8v4btRTo",
  "key30": "joFprKVPw6h9jh9zsUMHAsFRtmD1whqQkUcLm4uA96fWQq9XAw8AHrYXM3AG9hKfMzWw69CjYHbKQFbeQggojao",
  "key31": "41boHG34mZqto8uX5ppm1318p2FrHYSxvzpj8xEFyzwPFK5vrmHVLYcVApjUBkSiVQ2gePvefMZovquweQoQGk1",
  "key32": "kbnYrG6ASr9BMdUChx95AnCLQPzp6UgabH7f2zcxM75rUiUjxckiWaGP7aXA99SFRQLvXZ1A5rYwd9e5BgH25qm",
  "key33": "4wGTZcqtgLgdkNGKmmzuvgj3saNvRfLem7z4GceFCw3WnGn5rreTtvfa7KgpFkZBeryvsCPjkhadzxWoX2kaqJ7o",
  "key34": "5NCQLtQE1RoMJzTouSSQ2ScmugU94bjtaQU5eDQZ97dDPK2GnyWLxZv8BBQRjfF1DWGkynSaNYgYdVhgBXWcnzq3",
  "key35": "294NTTNnPusLZsZL5wxFRURzdyGuHTg4GWDUkW62FW8rodf2ehGYoSM2iGbyUSaMp5gQiz2oXNh29TZyG26Bknrh",
  "key36": "4SjUidLASeJMRoqdSzeGrwPeFidZgQXQZCqE6UDjtGzsnZBSXQvhBw6f4oCWBJPcGdNZ587f1EddxSawjcX8sUqW",
  "key37": "9psuQxGm7GSTHp97Xbr2EJFHHN3Wz6YD2ggrRiJh2PLAtQ3aZMTZ91Vxfztzt9ydF5nytNCcHZS8XFe4WLhe8LZ",
  "key38": "2sLJGyycZP79idA3hvs1cHo13kc43YFCkB9t4miEddTSaHTQU7fSbMBBnHLDM9cPbRZ85WymiaLViiMzyrx9KH5J",
  "key39": "3RDVFeeu4i3wCAhXB1MuAwz2GuQMrEeLi37PVVQiEqAcXuFfaGFftzNp4G2GZVsouRPCE5uf5qEM2m4FxGRahPRB",
  "key40": "4aLzXjMmFjsA4BWoEZDgv4VkQGVmVbpu5hzjTNLTC46DjfPxg8iT7Bg1RxwdMkPC7wt5pb1PzscWVQ9QAbjMqoRW",
  "key41": "2W5GdE8kPqJfnk5uedpMNRtNXBGtso4Ts6ftGzan8vpt3DswrqqLDxcxme2dkeRYDZ3Knj1DdVeXCFxTNL7ieQVx",
  "key42": "4suJtcWxnFpb1vdG7WNxS3uQjnqkMbdwC4qAjFGqT6ycUauAvcgWxwHBvGtdLqHEWXStTop4yo37z6T7PCdpBpV2",
  "key43": "2gj18zhGNeXDJgyYGcPbiMjH3wrcqC6ZpDnmJjxyNF4yN119Vc26VFVNtdgCryA17vDo3VLth1P1gnS5XAaf8fMs",
  "key44": "2b6YwtyWyZp23QyHAS7JBr1vW6SyURQNK7PkAJs9MVTnawfNUm4aDBWK6MCWb9yMxdNndg9qfzHXMs1erpgrxbgM",
  "key45": "tKzc7UARN8PftYcTPSbn4ffJcLfusVoxpJDSsdiKDHTNQSipwL5cJNhq59NZEweYA62Mr1BtRN8jghFvp4Adbog",
  "key46": "gjDAfCFH2peo9zrbfMPh3Jfdo8pz5mm4wN1x1DRU66nWwsr7hecUQuQHTys78fKGVdmbR6Bhc9cBZ8g2AJFDARj"
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
