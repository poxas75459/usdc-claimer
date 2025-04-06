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
    "39eLPoDqTTdzKAktcWUPj7xcRW4VN4bkpzbaFpAGs2AzsQqWdNWGJE2RyaNfrCMjkKxyaf3nJv3RUztYhgovp4LB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zYrvPeHEriLExPdZyYRfQQZETaaRZmp4MBN86m7ijCnsSCRdRuEMYgwoL6eLmNovUXXwB6WfgcFKMfvoS1rjsb2",
  "key1": "3Nfof1UTdLvB93y8jBFAXAmfov7avA1Qv6YEhq2UiaxFTRGSE1Z2sM4YvGUT3A6VPUuJgWLG6kRgBrWV1rL8a2S6",
  "key2": "2rEtDHP5CShw2hc7m7NVQdNwUhY81qqV9eVq1VSXJvsj4yeczVfxz2HbvfHLw2fs8m396df3gcZ2xiR3Qd2RnUYh",
  "key3": "5heMQErFhkqCJGDVENVpqzryqoBikBZmdpT5ajZztyb1ad4DKz7Pn16SwwiWeTB3eRvC2kQHWXYKpjdAtN2AwxM2",
  "key4": "3tT5nKi3tWsFRfszZY34rfi62ogomyGc2QGfkDBcvZqv3f7zqiF4G3iZaUi5Ak8tf6Kqj3MypFJhLK7Wc9vRW3TX",
  "key5": "TAff2JsGbxtQ3VbVAGPgsn6xT6nBmZLRiJh1vkJFiRBKCVuYWbYbFuhNRipaw9ZMK8sySkVQZbE3dtUmPefvXzD",
  "key6": "5KGjyR5p3Zjm2DpP5o4u7Zvw3XBgHh5QawihB6apnpdZt1MnCFDCKJWFkag4iZ2iBxCsfPaknA8Ux2PKxbxgpD8f",
  "key7": "493Z6y86BwJxAHkjRXERisMBc58L3QqCiwRXWE7oUNTHRgaSBbx5z8biJTcbPXvL8U6Y5tfZktbmHYbBFsd2qYWk",
  "key8": "22bzbgwWkhTL51cAv195tp1JnWdz6DW6weYDjXW1HBnjNwa9yuDEisyxmENX4tR5ZJLrsf77s9USSrzt6DW5Nnnp",
  "key9": "52Wh9bj1riVpTanfn5X2DH7g3UBdBEoFeFeqvNkvZMSfXkWEhV8FawCuGeNzL4t6jLqG6rDhfRhFK7vQQy1G9pRz",
  "key10": "5W2bHwbcmAVEUZ9sosRuKdzDUfZ44dTeAo7XNgz6w9bBFHZtvxKBNyof3XLZ9TeC1j9QQAaT39ENWUZpVgP17J9v",
  "key11": "5iyizxUAMvNr9x7Ef98SouY6ycUESdk3xhTGS6Cw6sshWPE5XEaroa3QNQUx8dWawwqDNmLvZQWUkavQ4WHEwwH",
  "key12": "5ZNZpocFp12kTdeeUDyuVM8VmmyqJPKPEWtjR2XNHPyzR3eu9pvXRpKCFinHEuWNbybLzDjKn1tn7AQFscqsgMLt",
  "key13": "4vNyASeDbYpu8H6ujJmyPZtcbj4ztwacnojXW5ZSg3av7gKv3WFrPgm6oK24hH9HeJ9oy81sURvjGAuKzDTTHruM",
  "key14": "3QKHMLcZ4DXpCxaCY5EP6M4VhTJZePGbJTLWtEvWBPDVd4eHTeYuHyd3Mp1yTmeztx5qBEhmgruzLDLxchiWs6Dd",
  "key15": "5E6CeWiY2GFTniowbUW6hK5Br3jbWHB4az9b5o2ZbfAp2FvYcxLwxramrMPuCj5YLNGsaCkjYXLsFwwu9P5bTB5u",
  "key16": "4QFRydd9g46tB1yGs5K9T621BNweLuLqJFPxEXkRmL78nreuWekm2fbXiGmf4DXXD1jwU3n7WL1mzycvYb1Jckoj",
  "key17": "5o9FXPhSXRvT9mCMLqWgAZpKitLrTtYVdpqeqnvSsZtHAuozSzScCpKbTkrpoq1zukrQNxdKJBmXALzyTvLi8bzU",
  "key18": "3vvVwFekvayXrZkAFxKMkGUfbDGEXWMoKCKLccq2jT1aNPeAKD8EGJqeHvVBnoYLRqj2qD7xTRvTAqWPAcGrPk27",
  "key19": "4ttSQ7S3Y2vgY1FpoBmAsyEpYrzDjo4VDydWzEncTnjJL5xGYwoVBbZcKsAtK73wGBWa3NxkSmqu7F2FF6U18yqf",
  "key20": "5xMfoBhyWWwJxA4BxZB6fTMgo9mbrBAjToEYqmqSzB963wB18tBQoR4dXU9RYr47t6awrtTMNySTH7kGrd69ALFN",
  "key21": "4nxDUFvU52hspijTLRZZYaUzXPqdqrEVhUiFHNtrgWgMwSrCz3AC3HZWtd7g1qDCi7EgFn675sgSVvjWrzLaAac1",
  "key22": "LG42t8mxppcGL16DERkQ2GMyjzj3wL7unJsbH1StXmxHewcXqh8yt3LxtPox9hjzvSMqch7eKJBv7LXQ7JZqBbp",
  "key23": "qhfhgej5AoH5F1N88JNMwyMwHqsVDNsChumuFgNtbzTz1nfcQTyK7NEar7aRjwyfUvkV6ujUMF8JVTDUTRKhHEU",
  "key24": "u7SkeBh1AGof3VufcjGzXLWdfZLYbsaL5gP1WP15ohbyLKQQBgUkmukbGd1hiN29vKo8P3vKSNZhmp7fJSCjzGV",
  "key25": "4JQhV6zTbCQ63SNLjvLijXB6Y2TSjWyShcVaQKcsT2cRqi12vUxSbCFkcgzQYzYkfQwMGAapCP2DpchFyHaxqoA",
  "key26": "5TS7N6Wb7SBJxkDaS6D84LYJpRoVcARPUkTFKcsTyMonWMcnYxgMK2yCs1Z7KGP6fktGsa2H1wF1fL26DykwgkHK",
  "key27": "2txYxenLW3SHWi41zhvjPYoPdARNhhbYvuNyXWCfeSDBLvFe2Nk1MfZgc15vj7UuKjXmabX7t3JUbib2EK2U43Ng",
  "key28": "3ARdRm22o3RzK2xEaJcFEGnjhG61zteVgAcKWUR7UfQnewdHSpSaK9mrbMLw9CZ3UCCxsLXDvH72KLvSwrfAwj49",
  "key29": "38deBjRSZsTsJyPo8NnuMfsSquwcv8G9mMTjuzjAxEpFaCSExhUvmpW5GheUSgqRXgSbUof88whqAoGEbv4gF3Za",
  "key30": "4tQoUj8Jti7Wx5FAMusUGQfpB9zbUGbmC3ipexzbStVLPQkqt6tynBcpS53h6UjufC4GgDgXgQQ22NKfcgifDWm5",
  "key31": "2WW6kBVMow5rgMrwLHzGvhaJkY4VKt9jttprzaDKsyc5Uq3Qn33fZq2KjWW7Gqn82rE4KXoXHW92TFe5HuPeymBF",
  "key32": "2SVwbw98KCxfbDrhZdEk7UL9CmeUoqJWbfcmoyoSmRJAiUpmNQ6mbpveNkKvbB5ipf6y15t7Go8dCJkrqahqSYLY",
  "key33": "4MUoCfL5iA4bisvRXzBcXbdwvLxoNzzXHbVMF11WK7zbEtRGEh5cz2AgNXDxHZ2Z4D1zKtBPzKzuCV7wHuv34zR7"
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
