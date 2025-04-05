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
    "32FHv3jAY5aS8R3LwRWWDBR9xSegzT5NmNapdzs8YmV5UBTxfwppqwxppG3CKA8w4f5JouqcJN7FqBGJm6Zex9d3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iZHTRKLhjVFRqmHk8zfshk7Zu8mHh8wqZk9iLVKJPZWTKxyD8M7gdGUwao4VJE2XyoC98f2uTDJqHiebiexeeFy",
  "key1": "5G9Cna81CFXzfXs94idBivkjmHnBEbBz9jiKHapWdpQu94thY8hgBUneeQp5yQ7T1HTeEKa1tyDJM3oz53RxGLLa",
  "key2": "qxyAPZuNkad8soBJX2W2yqhjprBTdi3xKkPC91SRnXJNvebW67A9dgtGKv8gJvspYQZpMRVuG9zZN1gHEuVyzrn",
  "key3": "swBZkf47MHQofLwERsAwkeyy3M3q19XYjqvHU8pUtz1grf1F5E66PZe7oNNEQweGtKqnKL6VvjqzEYJeYBa1Qjs",
  "key4": "3g91rwg3CbjsjwdkzL2pSu3EzV97UXAQ4WpjRase1arnw5XwuwQGudYgCsp7ZHiSctiRUF8GKM491ohmk8j8FJsw",
  "key5": "2FR2U5zoU3EZ8JJb5EzTU9FBWeYQXTA4b9JR25TPSaz95yagZwXsDG56ru7k9G5svLUuBW2E3v95fgegVFV3tKPd",
  "key6": "2cYHzVx11BXnx44zBkcRwbHNocZ7S54kMc73H4FQ5BmJEHR8hLh8jisJtBkrMvmnmZpbe3YLBUB6D4xpkGjPD95y",
  "key7": "2wPk4D4fJ2sU3JUgyJZkNEKtz2TDmxiQAZYvx3wcbRGf9nw4mZhpDp7JTJVb1aHcEZQT2uBPtvpXk4G5JF48AYrc",
  "key8": "2P4VtyCK8yCcnL7S2u8fATrvS3Qh8wR7gBs7feTMaXG67cchY4C55pFXY9BRNR4wvTKCMhG1pPg8rC4RCVBZjmza",
  "key9": "53eQS9nbtU3GS7q8faJ3RYghEKhwCPH6gDmKnsbXD2DuQvUTYVz6kPYVChNU1nFCbtbsRoCtYq1cuQTb1MVTAk26",
  "key10": "66hngMkfJbVHv9CXBwFnt2yZpn8VAgBDDmQPGqSrnPkE9m3qfeWn5pmpb3aXM3rUEK3vuMyDzgs4hcyBEFk3Uoic",
  "key11": "yJgk6GLzHznu2mYHYN4poervv8o6aSnMggQW9kwpXQF5G2dwgxyaGM2MVx488cA5heEYBfBKaag7moaTvfpgRcb",
  "key12": "5Vh9euEd93CAaDxSggWja6YwKXwYDMvL7kYyayyRMp9hrTqFiZUVy32gACezELmhsfQkPhLMCjNuvyupzCns8xnk",
  "key13": "JyTzuQEhVArwX3p29bYn66cEwx5Wtm3biD5R3H1zQkYMfURB2aSstfy3pAEUvsxCbuhsuNbGuJMwm8sZrsqERFG",
  "key14": "25V6HVwVZh8hjZyVqqnga1QKkA4n2mMgoJJrR73zdbuyBtHNrjVfwiNxaA3tmed5aZUc6mUrZiGLnphKw9yeuZsV",
  "key15": "4Pr48rtr7cwD7ygB2TcoVXEsBNgGU9VeTvnom12hND1mZzRYM7LfthqVTZkHS7yX9wCnNLvvmgFB6ARe2AFnyDYz",
  "key16": "5wwmE4PezsHzmQFU44NSPuqdg9HjNfb3imvFaWyKpWEkVVzesxFF7f9WRo2V1jacSLK8CdjKcYsPWtwZS7xP8tFf",
  "key17": "2A2zE51wR1e5nCcDMD3yjwU3BA6sgNAf5godBwv1BAzMLp8ndSHnRaCxA68BeWjiQgQyuLJqXETojgZTVatjx1pe",
  "key18": "9Gwi6rBwn1Hnvaxw27thPKTxqskYrDpCBpS9p6acuiZtzW7otQT19h7ECTxtGz68pMXC1Gaxt8aM8qNWXyUZrkW",
  "key19": "U6WShJ1EmttpEYqQVDrBY7xKyWL8tsdcaEbo5vtCPRX8n9GdRLyjS67Xh3siUsVaotHno1bs5zRT39fqNNaWwSg",
  "key20": "44h1T6w78NPNFXqp2nnqxvJG1PHHDke5qEohMPfYaVFS6s5ph43Bvk75s2S6VkVu5iMUgqrKnvFvkoPKwdro3rJs",
  "key21": "4b6czJ5GXfUK5kGfGhUHswJHX8Lcx6kAcAgWNJ1toiC6nYN3EuX9y4RWqeq3wdciKSWAwFHDtTfjViK6WGDFr5uU",
  "key22": "2XcnXUNUwN83gMv8zpn9AgqnP7pg678Znn2cBJp9hBw4UcjjuYq1QcoRFHN8qhVZXJ4ruxB58wmKNNyt9eMEQtxn",
  "key23": "fmBXmwophf2ouq3dLNNqh6QMELUHAzkN2K68ipr9JCdrBfzVb8MDxwudthwgnC2KCnSDojga5YkgSQLZDo9RVi2",
  "key24": "4FQ9HgCakto8cXjXi93SS8cdHrHb2wmV67bHdkYvpTdweQ97mKQEo6GpymeXBubGjkfh2WLbTakPMQcZfWteE4ay",
  "key25": "PFUXkbxDhnNBSwcZm6hnMzuyKJWPbTPXVZw9wxeM5Ku5m2m7CS5WTb6DXZRgP2HtdbmqhgDJrjmuaAM4xG25YMz",
  "key26": "2AgMakiCDUaJbfAkzeSf8SKQ9LXJwML3icRxLPRtCoVyR8NqPYec1YDUjgFq36zcWUiXVnNUt6Yr7tiwTNycs8tV",
  "key27": "2W6RxiyZdLZYK7BAviFLy9QW45qmRHDCyRLJrU1KJ7ePQvS9dzAHyza8mhmzGhWbb9nnmw1xrwNV7jiE2HCY2oMS",
  "key28": "5adZU6cTDr4BQiPbwL119ChtMEtWkjKJFSwyJemdSQqjTZFz5DgWfnTg1p5HwWHGZpDxDmNHfacb4cLuWMWtNBYp",
  "key29": "3LVbRjy2WzN5TGHpPn1iobWMyanzycvzm8Z9T11rhYVKDwVHoc2puXEoqbkJwjAP4iCeNnytd74Zfs3WYXNVG2NM",
  "key30": "3Cr6pvJp7Wr9EbDgUWCj1MeEY3rtRi9S7eeh2TrRqztxJzK8HFQbsCQKi5Nd24tLuTKP4jYnkkrXRf3HypqayfTE",
  "key31": "2uePyE7HZbcQsyRjaNTEZuzPbVoGThnM9WuHb87QHM9T19isT5WfJy4Uu6V3Rq17mwj64SzghjhF52cvvYsVx8oM",
  "key32": "3BANmYYPEPBZt2135c7tkGbnXQFqHtUnGAvB5bAoscsLnavYxZhRCJmvTGXRQeRHQn1xee7PHtdNE2Esn1LRxWdt",
  "key33": "SsJCub7395NBuyNmcyvdEo4zJ6N68M5CUgMbYRSRCodmxACHLJLZPPRJDKNNAiXMhXEgBmM5MHhfBhQQiHQmBpv",
  "key34": "zxPy8UPfgXefNJ2NAssy82f2NdFic1KMAGXBp2XgtoDZm4APGHNxcAC1tfSWA2bszFmAdWEaxjNdmJeaTvswxcP",
  "key35": "3M9M7JsZddxt1Rz2iWdXCUFBbt1a6sQbiWFuPRJBbbksdBEAYN81EvBr3TsRDMVXs91Dq32MqvqxzhDuiB5bisXn",
  "key36": "4VtHqcH6X5W9hVeaHS9qiujHYPhkjb7W283JLEE6vHXzjZionTWkPiSGuEq1WLv4BLk9wektUkyUV1TVMX4QQ8Kr",
  "key37": "3a5kpoaSDt4Fqn1uJytQtDPsTJWqS8pUvMg5KL92bD83eU8KDv426DGHMm3nb4e7soAvk6nUp3Quk3pyehhpW2Yy",
  "key38": "2HwqXprd5C7pVAimbddYs6ZK9LnDXBKeS6F3gek3asjtihg2ctZRtaaKkEvV7oQZrbyFaHKDKrdXdDNMbpEmoP18",
  "key39": "3Tfn8R4JbJMDYehkVscLwT2zshazEqaDvof5LnBchSwNMJz64iP8vKT2ZoTbGvPYKBey3btDuQ5owWCMBR8vfVR9",
  "key40": "49fWW6agNf3rmK7N1hqAE1pabgeXQ6ndWra3NbF15LHWseeuTVwED87Ydb7zSzFdFbr9Q5EXHExcvpZXEuTXXvdw",
  "key41": "3uKWPoqjr9PMxRHts57WgFHjLT9jd4uhdBmGD5SPGCsWKD6M9ZyHUQUZabGsbGPMRq3TLMwXu14fWwan6BSEV12t",
  "key42": "2mpvAjcru4hKPpmaX98E8QWSBdrJ7W49VLMjRzVa3XGL2zAg5DSoQUhrD4MciHWrJYfuSyrTYLzDEUbc1y1vpy7i",
  "key43": "3obHxrjDtJ8JeX4d8rhx7xiJanmZon7R3pAHLYA2Cj7KQ13quiKGMUq5X7fZUM7vFYNNCoMFbAfbFMhL4u2orej9"
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
