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
    "65Q6CaSEMsQUZhxmnWXdmp6QyJa2b6u6Q7p4D4RJ6FgCRSEq3FSB8r3rqgwYUri3thLZqPWJBHs1KFkJ5crqFG8h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tT7LLLibTsYQBfN7rzbmjgsb9LPKFK3VSENfWKfZMDMFSUms8JDxDVsCBZLJT5cDa8WbZXxAmp3X7kLtpofLtSJ",
  "key1": "2MN4sXTgio5AJCWhqrMCmQjd74xv1BJozBgr5gXyK4VqSqp3oFBKBNzKnogaiVfjCM1XHbcEX1yBK4przspYCwhU",
  "key2": "cKLqSLTxCaMmev5vtSNEnNWi84F7koL1zxdNZogTXmsRCujv8CodMcxrJbwd66ZECebdjfkDg5a6ZNz3uzPkKfL",
  "key3": "5Zzg9FZy8PwvRpwDwJiVY9HPHFDY1tEHy4Q3H8ey9cuBaiadEkh6Df8kG2Xb8nszFwgAaWxz1oRiQqx9hBTRgzjB",
  "key4": "66tVS4pxUX6rBJ7oBuZLQ3ueUJTkodTnFhn7sdFx3eoSbEWFBwmZ8uUDduHvg3GLHsnRERzeqYQFgiNhaCPeNEPD",
  "key5": "4nzKZXVwxgBK3V3mfQbZtw5kCN2MwkyDoh7GgHYMsnSMp6fdz2Rvxe2tVVhH48EsyNMWuYfkGx7qryyjE7nXJncC",
  "key6": "5GqgNj9WZ6fSNUqdj1G4Fioc4jXJo1XLqKGnb1qcdG4HrUJtyjPBoXqJ3QbVSzCWV8mKd9SVNdYBeBW41GsPFGh8",
  "key7": "2awp3uSAZBpsG7w4wW1hsyYW32deYkv7A5TpjZtXsttsyKuXdEbjysHww4NWVzmZTktjqdCRH6QLGcmHgq9Y3HhC",
  "key8": "3oJsiPc3sUvN4mboVrCa6h2nXGWkSbr4duVXy3hwZR88mVgjLGQrnB71BG3ciSHHaSwae6r7BUgEWMvtiBopQEZH",
  "key9": "343suaW6jKwkhmZ329Bw4x4zJWtM5rkB8R9rcvRtunNc39YYazPsLgqPNRxNcyBtTxkkszQgEhB3qHSX7Xwfu6HQ",
  "key10": "41gz8zRHUid8UWhcRojDkUpaxjEjSZV5xvwiGWegpEDdoNiRyx7auUTYLrwhZy72q2X5yqMvu6hprmkrL9rZ1zba",
  "key11": "4REsHhCkjREFm6V8r5uaeKX82gAHr9e4jdGdWMpGGE9MzQsg8weU3S81L5FF8mhXeLXnhXv8e9KNkkK6frZSkvaF",
  "key12": "2qQvs1mCxrEinCbxrkyRowVTKx3bTvV1fhK2Ygs6BG7dpFc8SWQrUbEi1GPxow2BqsHWBK2WhK64QKJwxKwY6CZq",
  "key13": "4pkpQ6Pw7ijAvNYMCWHgp6h4YyGowHkofFs5e4KW245qUawW5fkb3ezDHvzp9tsM7tbQXUH1deLUeu9uohn23svB",
  "key14": "5DWm5fBbYue1doRTV1fYo9CrBCHwj5FhLRLa3xsVUxVsa1VpX6K2qFXqWEUek7wEMDeXUVePdGg5zRQ8ZmfApj8o",
  "key15": "rqU9tC2GAnJfEcPDU68z8Cuy6pDQdEWLvBS8gEhqFaBVfrJ8ie12CQiUZvuUN5UuhkAu1c5JHrBKm5xuwcSBCCH",
  "key16": "FLeswDguLsBaGSopcHvxKrEcyaQSU9Auc9CXaoxyc2VEBG6i7qHfcTJ7VaVZYQmCbZHVEEUK8WgnzecJqtzE4SG",
  "key17": "4AJNTpwqXDAokdKqjkk7Sk2RtF2qWWaWB6hNukaP8WrdrQ6s6JYU4Y8jP3Hi2Ff2QDycfMTJbyLCVquxaqmjrE3b",
  "key18": "LqoJKsbycZvpXjwE9AzscRkhKjARWPEJnma8aorSV9aCWWb2GqUjqGwL8KCpwYekXAyTmkQVXfdDEZxmRwpaDnu",
  "key19": "5oxfGdupP8GWEz1twuYrtsBXZrwKtXahj1DYCJLAz7g6togj5vQt6VhZELtzDtJK2huQXhynvgdToJcwnEYW5PP1",
  "key20": "4rNKs28SGYK46KSqxBPoQTuXkEeYvcVKvBU9U3563TTnQnUMiD5rCeovDJLqYijC1ZAQ9muD9wDzZKShvsPbmKL6",
  "key21": "3FDVkmheZf6gRWUMmPmiC5KcybepjxBA1GN8HpnziuczcnawwNiB1GRSF7UhYL5SKtx3Yi1JuRa1KhDJHmS9GsSd",
  "key22": "2C9tzXQc5DiPQrcRxy9FJXct1NptafgNiRVJhM2jKaKFwTpRoVFegEka6aHvGyv39S4TPsDUtnJkJ6Pxb9s6yNQo",
  "key23": "4B5uJ9gYstoNZ48HwqmbZAmk4nvunuSGhJeFzNxBoBMMFN3mq7d3HXFFiTcWNZW1ybtqdfDoPUKNXbhoc8eHNQaD",
  "key24": "q6pUiWkr85yEQb5h2auCCsNMjoMRBqkqdfedk2h8fsLPZDu3gVACgBp2MqT35TtQMsKsgvWPP3DPrDfVtWokEhQ",
  "key25": "3QqnHkow29QmHkmvyKdyYXeoreQS1ZC1iaEfjFSbBK2zdkjzp56XwYoWenueZyeMS4PbNMyyV21MmFGeN6guHbsD",
  "key26": "8gzMBcyGpSne71sv4Hj7jxvAVg7HKcWLvUFMET3NRFhcgmrJencBmsfzbU4haF5bfTEKn5cMRy2U6CGwzkLG8by",
  "key27": "35QPepNaHNCewXqxe4GmC2Tw1EceJd3kiFE3vRgaYJAJ27TjBwpkKMUJ1UWnJWsJZV8FMDS3fMhDViW9LdNZ2ePy",
  "key28": "4Pd5JkeHJnR82QmTiHyAwFHucb4HpP5dDifL6GQpUFdMQu4JxG6pbKbuuVCpWJ5Gq4Kh9BMyt86kLdjtiu683JSa",
  "key29": "2Xa2DsCVhWz8sM7xDucqpnb6epnpP5W43gzkb5z436gUN6TFGhZ3jHubgesnx9Bp6PzzuNDraDL4aEDojy7HhHkU",
  "key30": "4EsDcD3X9PsS9B9Bmazj75U9siZHayj3eMWicxLFAtfPtf32bdSgGxXByeBc2svPL1EuGY6sqjcEbYpGc5vxha4i",
  "key31": "3kLZ45h8UGabyxH6RitrNAtRW71W1fStPueFPpMgzr1jWEMaDtdNdhh2JJBkTKqUGAk9k2NkTGEqHcWcY4JdJWiu",
  "key32": "6mvvfkTzxSBDVmmB6GEwzCzq1kBoeFxE3wrvfuSyvH4sR7XpHmtrsiNPC33DrV3th8bSrV15Pf6soJsEDWNha59",
  "key33": "4srqQBw6gD9HktFgRzSrKdAwDpfFoXmhqXDwoCdhpVwT9JJUoNjmasJxao2iX8Ey5hhfc74AUWMmiR6pq1ehvTMx",
  "key34": "4v2XKRgPTEvU6tLpZ9JYbTxaMbwncnwEPN6edpsY21hrkDdyoFsS6SyedQ2EaB77gUixCYoDG5wXUr5T4MG4uhKE",
  "key35": "W4dWEMPGcQ91DeJyex3R9b9KevJ2VRd1ggCBxdNENjnJtgXPaUc8sXdoS6PLmiv7DBWPrYLgKQVTGsd6tf8Q4q6",
  "key36": "2pvR6VegQHXHNY8FxNBqyx9JyLZbRp5t4Woc6tErdmMPn1VrpgWLb6FSeb8bMmJ8LjZsUfEXBav52Ldp8AGJrPtG",
  "key37": "4jvcqzbziXrCReqYmnJfGqMMDTM7wetLf1mtubmDHVb2vSRrQwd6XL6gW3CRThhnbyYcEXkbm921ij4KbTdhP5Lw",
  "key38": "3AejzkgfbT3MkRWZbdMFrkEKvFdDWuiWCnRoooFF2xQhi7GX2GGUMVZDUckUp4cuSA6Nv1aMobnLbLCPLYLYY1wf",
  "key39": "4SfmDW1WhtFS8eDWTPEKQnDPHFCiyFAyvgPm8TCdp64uFAAnAyPUyoEHx7J5JjPZbQ4RB2E6YgN237HjwNA2H46X",
  "key40": "iTv55wDRMurDeGVt9Qjmve9LxgfiHNFDAMi81eKqQkm7F1h6cLaPqy3Gk1akcSSyoUkaiAh3k3zVdmBKf6TevrG",
  "key41": "3WYfThrCiYhT6gREjTeCx2osKRHg4VhFryjyfAdU4fn81JMNV1NDbM5DJVXTztLFYqAwVvgJJsFzvcKU6zis8YXn"
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
