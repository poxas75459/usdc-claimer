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
    "ewirGbrNiH9VhH1akx2m4Z3wicB7LTAgKoPQCUpLrKnXz1sAAYGjhzrUun7Ue33SHUGb5YT3QZzQtihoJkMcmax"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ycPig5Er6kukwMWcK3rKJKsamHhw7MAY4mYXccerdTS3k9DzX4kyKPVmkf83CUsAmrxPDZxPSeUAoLZ6d6jnoQP",
  "key1": "4BtAhyLZPAEvfxoitW3MLGh7gHLTxREdQU9kWhNtPoq5uBTt58j9PU5CjYpcjiDzSFBH4BWVPky9esJxPaEjfNG6",
  "key2": "56U2txFqbRG21zQtLXUBuTrYopHY1Bgwo3dqzWXtKpXVdNCUZH1smatWBQWUGEV7fV2JLGdZYoa3xSQW3Q5dBoVQ",
  "key3": "VgXnSS2u54FBhFcT5K5fU68yE2NZdZwvjafzHheEf86PGCyMMz7B1pLdfdUPmfXeGzZar7CZknDnuK6AMuiL8u7",
  "key4": "21G6LesHecWbYUxQgk35mWFEYjT17N8SotDeFyywUkz3htSeqUhgQeVee2Nq98zGsVPqtjZqWnHCgaWhKrWx6r7j",
  "key5": "277JvcLHM7uGKcjaZMPxZcej7vXECyGXGNkfYcz43sBuUQ8awqrBY1iu8mSMPPpJSomHoFeKbqT5St1VpKSyGyC4",
  "key6": "5jJ4gGk1DpHkDszBHQ5Re9GRJLHAnkUtEf7Bo59N5g7p5jDinh4QkuN1iv4aPDF51u4aYAQojZbHuDEmaQqhsCNM",
  "key7": "359YhNcBEbMRXYKCqJz8yA83Cw8eF84sU2JJonuGmCRsuDTQQr8SJjojYGSfxGaqa75bydsTeQJ4o4MTkAz4busB",
  "key8": "61FXxsGsuukWVnE6JtBxptitHQceFH8CZPL8SCZU7QxrySinEoLot8KA8hmqjocYjeoPzYriMWme1NDMA8B1TZqM",
  "key9": "4zxKHicM12VUJa6QcxLoM2SXBnX1Fj2qMAqgrfMHoGWgs4zxKekW67wcQDc2i1yBjH25QBADVnjHeDGiMepXb1yL",
  "key10": "4UshjWfhq5gq6Ms92kidiSSDnQwaqaTTEgXXmx31M9QKswyLvM8fQrBmj4dPWt4k2UCEmKwEX7yqM2BB3NjX9J2q",
  "key11": "22NQZ7pWhxR1RrUpn5Hx9y6mXeLn86wMwf1y5Kjur3nvKrmgcjuyJx3iU91tpxVCv8jVJYKXv1eFiHB4nHznyPmD",
  "key12": "ucBCxUZ9r9Xdjv2gXD5xUd1kZBWXiQnd52fGmHGVMmFFsdixq5vkBuQv5UHEH8Fsab1NpfCwdhymhYJXAEVecDS",
  "key13": "5M2zccnm5STiF3fz2bYX9ezDLgJxUXsvK19PoS9xW6fGUfYJj3JSnkoVobik41mMVcJH7xTNNjXwBrcFGw3XW3HK",
  "key14": "2Zg62GVQ36LxiMA5ApF9HRReWiTFvr9Tg1meBPkaYhsdhp4Mt4nVqT8WN4a7HdXGV7Raa9a49wPXKoYGHZGMaqVZ",
  "key15": "1PigMrCWLfnXuNEcDguBmJcAttAkmvV8WSM5M4iWhQQtFqkrZLqNG1d5CTeE3faBvQC1NH7TqFTgCz9Fst9mVA1",
  "key16": "3pGmpRuxWjSSgXz8t9edo2Ru2qazEf2CYNz1S5oiJ7HdTaAy8qGpRSAp2fnBvj5CGMB2z8FtqfwpjvaqqPxGw8C5",
  "key17": "5Kd5aios1o4BX4kWYz1DqtFAnu2ArNXv8NjEKAr9g9gdycj3k5SX4dVodPkcXFaf83nad1Pcv3gB1QvpXuicYN78",
  "key18": "3JD8cKa537pJ1jBHw1qzXKF28fDxM8Za9DqtweqNTzJz1vWAeEHpKveBk1Lps4e1yQ4dqKSwE1FHZED74N4RsnoC",
  "key19": "4GJW8anr1XdU9u47Z7d2SmMrAj5ofLXYGZyrHHwcCAqfRbphqJ2tEMavft2TfTUhRYh5fq437bscV2VhvKMUpRrf",
  "key20": "5ahGa7XhYPHQ6YmApEchy97Cq8c4MVbFkSt9zFTcumym6am5c2YiPSkms5yM2dfSrojkEn6YHBDr9jRCnSMagCiC",
  "key21": "4P24cuRFLmDc8ReQW6F4oKdsFKd4HanAH84WXD1NuVNUTxFtMWghd3DJmEXm1Av8uZpnCd6j3inWUW4ouvYVdURU",
  "key22": "3WnXyszhDNXr3LAHPcMUfiP7ZMAQcbmF9Vwk28Po5JeubH54N8mjv23zsc2CixaahXMhZUdoC6KBDnC2P6KXQ87M",
  "key23": "2dmRRd4qvm4kAA77nAzXjW1q3iUcVbXQJHkT6dCtuKxvfiLdWBu5dfj4H1MtWeTrQieAw5BgdLZNBu8tC6JavBgk",
  "key24": "267mdpG91jPRFHRqBaiEqoCNrZ1fBt2aPKsazWWHtnQMMVvLig685KQ3TBh67zJjF1vz5nUNSQpp93svwCLR8W6K",
  "key25": "29mdjjVCC5iQFkQTF4NCSoxcsQ4JkhX2JdmSPzaGAyurafW2MfPxUVGSy9vsLEK8MhrVJZPiAiSwKUQkFV28iCh2",
  "key26": "4Z3tgDEEbvQV3DgELfsh3hSHMnUvtx4vNUafcNjBbEM35n2sSNwmvguHswyAU9mE6ukeK89LRB3WezMHxMVw8ifo",
  "key27": "5xvSf4RE1icrvQQarbq7q4uPXR3pR5QkTV6QBdkPCkyeVd7BwTDzv9cCFYj6pYMfKFvy7Tz9dQsH75e24VRVRTia",
  "key28": "21hatHRpGjjRX3ShjFVykASsqw751UV8AesX4PEbj2j56KpAgNarD7mf9kgB3vFGZqjTRBuWycR6E7KRbqVptAhz",
  "key29": "611zd2wYMFBqxuiodBUJQJkBoKciiP9rc64yS7MeHma3zuXnx9AF6z6w11jpyY2zGJWkuPxMExCxDrS18TmKavFa",
  "key30": "38Vo7h2MyxTUkJgwAScGCUcPx1Qzc43V4cNcBcdYThxDs5Zr4o2DKoCXK97AHkwQx1uyU7quJSyyrV83eNmak5yw",
  "key31": "MFWAR3eH7oSGC59KUW58adFMSvTSbGE34uHo18VHmDfb3JGvBmfrrXZR2Fk7CoDfZPHsDtGTLC3ytqPYfVBFo2S",
  "key32": "3wghato3yobbki1FvjXtQbK3EKGzwi5t6j3uz9QKKrixPczTKZBRUi8pro2RLrhhKjmtYsy8cWhX8WWMLMUiFaSa",
  "key33": "29jRGG1vZPoHi71qy4D5FqH7cuV4d1M7MTrusrsXQ6is7rTAXn8E6fghwtRQArd9mMQKJ4MNXibwrqMTo5QAfu5E",
  "key34": "4E8sULFeXL3PCwNykC5xxDBZzAMUSXx4AvoXhFdCbJ7qi6YACgBJZFzXTeXJMGMrDLJMX8WdDXHBv6RJnfmLZJim",
  "key35": "2rVaXh5JMCqDWLzUg9gRFi61of6xTTtbHduEiYXv5tXg7k9P3hGDBspaNvPSQecDWsxArETfY5PbtLdHxd9EpsTo",
  "key36": "5ozC4YgFtr7famRKsZpp6B4FCpZ62EaaJtbP9qM5dkKAYMg1X8UKU5MhQ9K5RfXXGo68Eooq4V4TWjaKr2a796my",
  "key37": "2KW8Mn5XWERtfsbJGa1wPRgnMJrn3hihUR5LD2PFVXA29LFhbBB5H5tHDL9XcfFtLqfi37wNQ1ktjKCk1caGTNyz",
  "key38": "3EGadwDFV5zpmYniNfYUFTisrDddNLMEyUXtm8sriUtSFJjMxWEK29kZbePC83u6B5SDoj5zAE3k39Y1DqGozoRc",
  "key39": "2tLioFJ2Y7Ppxn3TZtqAmw1gEZCQuymm4JTKNY1n6X5ZL34eZujD2qJHt5C4Jmb8d8zxDTdAgaEt4K5HTrFFqdGR",
  "key40": "gKCSKuPEkQwrTbEcJXGnRJR6QnyuFPe7RYmQDqGsGFXeaD5bs88hzPwaw2NroDL832dwStTRv2PSSmDiKWz7GWi",
  "key41": "2JF6DUdM2hsAdJt2TgkqZB2jp41Gj49ZFezzyyqsaCbpsfLVvqAbfu6YGXH3CN6gtqDWKUu8tUUTVmRx83zD7yND",
  "key42": "4KboBqJ1yQXKHZWREAg4QYJCaiTkdyRKchjgLHmWgPrafXmDjiekH928iUMLovLNN8TEu3qkaPw3dCJBHZqxmGSU"
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
