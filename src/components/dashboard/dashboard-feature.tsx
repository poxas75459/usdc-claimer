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
    "5LZHTEGrecuWy5WiEpU7e1EwNvwRuSN7gX2vayMPAjwFuQL6rVukCAJDMFZJ6StNSCgqeqcHRiYBuebm8USrWLmj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3m2hN9f63KciabQ7QbcBmUEEhgqq4dE9aqKNtBtStWCFZvEJec37Zc6XK7kVugY2pSa7qpZUR3WqpshtSHE8N81Y",
  "key1": "4RU3Jx1BJxqYLWZsjNWgXoCHmfyUVjoK4R6dJGFMTjwNAQvk8zXkLJu28BZiDBhTPM8g1hqxRCwc9Du1jKvzrkS6",
  "key2": "QVKCVfN9wTgTRUGeVenwrHegRmgzxJjQWdUvEM2FH7XoRQHo1GHyREvFwkT7wxed3w9hiSkLNDTUzJ28aMi8Hsi",
  "key3": "5XdghPARWToPVui9zBN1g5Nhy74JeEdXsKtEqpfMSwP1NbGmyjLEQxQQ3kNB3Hhsj7o9HaSCt9EUbYv5eyhsNU79",
  "key4": "5neEexzT7s7dQ3qDtVXnXR1iz35PzHzLgEYDFcYwh2fAccRzLPMRW2TK7PVCgXTQ8tLixSmg8e3B7MPLzuEEBkKX",
  "key5": "65YgUVpAS6A7wcRke6Lb2St338MmKYPHNo34YxGDSFQssbRJHRk8pPex6NozKxJQB4fGb2e9nYkCK5JhxiiNcmoB",
  "key6": "4i1xiZ1j48mbUs5Y75b8jo58apUikpGAo6zsiTwdMz4Si8PRxkd9KutX82HXxmk9Uviss8kcVY78kFzwfjFUwBRx",
  "key7": "3cDZQodsXUJNNwdZA4VxEKyLDZ1YzDNLEj1h6ttm9Wk49niAt9Xdgjr1PdNauCHBpwGBKP6umEErEfVzhK67FbNa",
  "key8": "3LwnB7GQJWCmWK7cfjKdPfEUn62Mo3pj9KzwcaXmc4NRuP8Sv8BPd8sXXK4Zi8DKkzR3QD6iLmk3R3aVmVSv3qJp",
  "key9": "3deTZh93bhZJMbNhyH8p4RAuTho8iWnPaS8Ly9mQCxwhsKkyKLGi3HyAwkP3PmRgxsBMxdgbvrjSeWRBXn8tNJbJ",
  "key10": "2CFae9cGZcdKeiebspPb1VZ7jzyxEW9HtHdpGN6QykJjF9MbYCYEqLNMBgXe2cETMLFgHiXHq5cfX2YT52L9nAGp",
  "key11": "5vXXtptJZq2QsE2eX8cYZTuKZyEpxQjS3QPCbVuAyaZJvR7fJKZBQ499gmVDR86QogPpBYv7bJLv6cRaUNJeRpZg",
  "key12": "5dBezR7Lai3tcccs1ZfXm48ckKd9ZAKmVYA3tJrzJdFoyzusgYkgYopEcVvASK1WScQtWoabPDDBmszMLr5roq1A",
  "key13": "63m6bRscGbmdtYewkPHQGiYTWPUeHrdHMfwKQ2eU6KwdXsyXYSYt1p4gko7FEJnoDWx1fW6EpmY64si1AjHznKbb",
  "key14": "2TzTbTf3HaBcbshFUnaZjfQ6ikv7tHaDnv4863K2JQ7wK4ZiesEfDZ5YZjY1741PXqLMiALvtuxBo2dF7ywpQESu",
  "key15": "4zBpa5FgYF63oC9vCHs5VXobRz7yiDFoTMEbDAytsgx97pHepJktmDWCXs4zs1JpbwbFbbdfedxKKjvygWbzAzmC",
  "key16": "2qdzxPC9bzq9WCEzV5viYZ1Kv1Npv24sQ7SyBi19d8Xcro7WtYoMci4HPy6r7uPgipZwGxUszG2gtFadq1Tnwa2m",
  "key17": "4jwC2bgS78HyqZpFnASpezGyMUSzpt7oziuDZXP8oBXj1yYNe5ZwdwJFA4yVrBccPkNiYrUJhZwws2KGnF5o1vaB",
  "key18": "3MUtqHY8fwciaqjcyKvATrgSdrQHJzZjBvk5z55Vp2KC8cyNRomazdvs3RA2znGoHZ7WjUfHGc4cCaVUbpryCkUa",
  "key19": "2Yxp94HTwZpGjq9E754ZYVrfm4RwGLvuUNMuiyuvEhjYYv4u4BJW4wkKKCTyEjZpnAeDqhrZpMPghScnciKN5pEy",
  "key20": "4vFHmB26XAp1oicZLwGhQkrZvBDbFRVDqREjTrujxqapUgAbTPsQpRKoZkUnkUJr7azcYwQ2pBctMsJ8G9Dp4qAm",
  "key21": "5jhcaJTV48WuR19KepN4TadXFTUSqKifgYzQA9x9kNNHnHx7xwAcjz6vai5k8T3s5Y7KLMY6M6iPF4GN1u8crWRx",
  "key22": "2U98R8cLcprZ92si1eqJ3ghn3wsA6hfPcskQ1H66y9rHsoHxfnYSVbsKVd1deWDGNtqBEaW9nU7hUJUGNq4VqNf1",
  "key23": "4yr9wAauvJxKDLdkShTNvoVmJPktWb3YCB8BTiw2KWvN1nmJX2wn6oTnJYoXmK8WWgfA9n65uGxYo7pB9h9YoUpU",
  "key24": "65pEcey2ds2yA42L5AEy96ekxCMnh6paDpWbgH5f9jhbjXzHsVGe5jaXfmeSUDmMJ9KncQNbvwpXCmu8oXwxMtPG",
  "key25": "5gnWvc8ZkUNCqRQPwD3LfPrbuftDiPM31UebBHESpHHXXXYnKr2CDWhbXnpndU2c4dxS9p74yoXt4vznjgSHvNvy",
  "key26": "82L4BkjXgpP5Bhdw99j5rji7wc8qK1ub8b68YE5Se86HfNrJ89fcmXPHBrR3nPa3aGWs3TarxvSaWvVYee7DNbg",
  "key27": "23N3md6wmANJwDza54VdQVNqrsq6d5pc7qkSdgZZxxGCMuGcJQiJ11Dc9ob7hPfeuNY12uxuUzYpm5e1nDS37Utq",
  "key28": "4TKSNVP9M7HnXYAkbxQg3kVW3qXdKy8Z7poacxKS1JkhA4T2L7rDiVAZbHJ11Bkoo3j3WQ1A1J2NcDqHUVYfZcGh",
  "key29": "2XoSaXZeYJr7vKb3WUUmLy84qiwdY2SfGoKJnrvXskb1rSX3u8TNEZomo5f7x6Ravwkz34Z41UdLY6tU8Xf5esy3",
  "key30": "2Dk9FqkuBRhfwar35u9FN62tnZb7E8HNUr6BuLcp7SqMHJXt3mRvFz7y86LrRtAozzuDRerc399vHZVDvYuSMWEs",
  "key31": "4QQydHiPZbdqEDry4yVALtJJ8eqWzpRSGR945ji8X3Hpre1HKhfPugoHhGRVTqKhPHifMPvfMn38eSwxQCrYGR4C",
  "key32": "4HH4ueBhJ9ZM6jaE4Gk5ntr9eywb7ZQ6U4RxB11R6Fw3QndgaP3ryCJa9N2WWNYWqpY99M92CMEYiVqEmwyNN8yw",
  "key33": "5Jw4sE6o6UvjFKCU3FNAm7Q2b3uVUaQF8DMTACJz7WqgFz4TSaN7Zan5nyVZEMPHr21GkFbYJhs7tCgKtTMBR4U3",
  "key34": "4a5YxqXPKuxERrG5xFY5BwMP4WmDpzvieCRLmeHK33pJh4mUpqVDJthdp1BjapC7DfXaUAdPpm3HScpk7eZkEcjC",
  "key35": "3qcKeQYvYsLFZJTooAwVoLUSZsao35M96dN2MwCDzBGfe1poBAz9zkcwNDjWByKvN9URXzzCPi1pcBSE6qoDvZq9",
  "key36": "3TwyL9QgWxVwPWzkwtTdm3VGoPCHtr995SJEfqzbc6YgENcEnP9pgEgErNxerwKG9iFRtm9reoLY1E4K4DYAowQX",
  "key37": "4NqySov5U55fKRynthyWYxPi62ZJes8QrePuTK8DgXtHxy8rGQPaDo3tUYCqEgJKze7SDTfKyyLYBgtvNJvHMQCv",
  "key38": "3nrhqwCnSHaaQsLEoEgXTmZQ4TMUXvyeELG3mMzsPnYnbFD6A91PZVe7xtTiYwWi8troWMFxsgZiqpMECMJMVMkP",
  "key39": "4DDPe9qbuhA5V6uWKAqdohcbSmnL7CVoKG3dzqDQ4efQxX3t4F9FJfxXA1orpHmM2JEKRwa7hEFkQGtu5R4PMY74",
  "key40": "5W5BNSqzGMd7yQgjmCJiZPvGUD5Y8ovUUgNihHqhMeEBqNv3M5DbyTMkfQRKQ1HR9vNykQMjE6GKirpAXZ5xWPeX",
  "key41": "YE1h3wXqu4awSN4q55J33H8fz3ES29HzQck3CxwrqVVxMp3Unv6jKo56EoVmZfSc76CDFPcew1Q2R2FXSy5vxKo",
  "key42": "bub5mgg4Zkq2kqFNzyHKo8HEAAwYibZkU2HgjctraZCQyq6cuk4cHrXKV6nJqErCmmb57uJtGeatFHsAxEhbbqQ",
  "key43": "d3BYGJMnCqJv5Z2BnceWErL4tHgRicE2MoLevmMSRVRcxs2pRP7ZtkHM4RdnriDSXhimm9U1p717Gkx9ycvrxct",
  "key44": "5Q7bQV3Eiru5K5VHvfBxd5e8AzgBkvFSDaU9sA3kHXFKWBFQTTKyfhJBJn3AAKZg13wQx3r5CBRhFtunLAqbirdP",
  "key45": "3sUzDDcninSE6bzdKk4vg83DP3NDA5MtSc5zkvNKQTAmbYw68e3exHqFDf8UkwpHn33RTTSyYbJvmmrEDSUB9LWL"
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
