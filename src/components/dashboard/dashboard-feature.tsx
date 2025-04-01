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
    "Yn97XCn5ZWWbHFvAnUvKL4jueea7khhQU8CDC1BMjX933r2RFCdiuBdPWPcomC75vSmqYh3NRmz18eFQ6d1MHmu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UX6vQ82P6hCQqTpVZ3F84iw57NN4K3QYZzWrL4EensoWqeNjnNBmzWgVV4yhfeNCAxzavFMDLgyEgv4Jxi7VLxz",
  "key1": "4XT9u9AcRYukoiE17hUXBx3ksTvDgpLagZJ1Kh29uJr9vJfykmAmD5Kp4in3FJ7sLcq1NyUd5RyQunHf6aR1grhS",
  "key2": "3hXGnErwxj5pugNVaRA1mWVtK47kbrtFj5Z7h7hucngNEUw2FFk8Y7WRGTfpCLcKUGr2EVXJMUuLoDBY5xuyBDKg",
  "key3": "3PALgiWWGooNrieAwoprxuzUmSK2wus2S2cU14CLi9d5gGorRrAXPzyktPNJNY5Rfb5jfaeQRWLrpEENfSi98s4c",
  "key4": "3i8bNpfNDipW2KKBXSPEBxoQ4vrMMqyPopUST9Wrq7tCzGgqhEph2SgDvDVTNZhcXYs1C2ohPZnycPbbujSQs9gU",
  "key5": "4hvLBaP2vwNxo6iyFEfVPym1dHqmwbPWJQRaZoDuKqKLLZv3Wg4FxkznJfefJT3H15jkhGNnY6svuCCuAMbp58UC",
  "key6": "4XvPxQZo4CGXX5dKpK66pSViBxMfDWcWvegosJdjGa9B3m159whHCwKiWW76wfB3g7SVfqxjnusst6YTV8xDUfBc",
  "key7": "3Y1cVfxuD1koNUHNypfW3n2VMyWEbR7xUUmcX3WUQwY1zbrujhqvAeruqw2cwyDJ76a2hoKPXS5JtD48yUnTTrxy",
  "key8": "3tgmXE4YcccW53TnUqhh9pU52dd1FxgNAiKk3ntj48ujsRfcvmDj3VPYdcQx8HfiR589cneq61Lh6AYZ9HWiaZk4",
  "key9": "3wyYeowwgrjVHRjv9KhzdoewLQzKQDSuj9rCjtKp7w6aburqix7KCQ12vBSM6kauNHBaKSHcdjZmDy5HJZbUK8wo",
  "key10": "sFPA4hb7Sb39XbVsCr49LxzLYGF6wWP9aEa5zSEDJH84pPXoJYXcWBq6ozZYCNcrsEn3qFUKK63EAtYaKqG9QZH",
  "key11": "YifhrqkETSv5JmVGJRWCuEuR1DaZC5HkPih3htdPMdYVtokJLBDVAsLj7xkRF5q8gNQiRTzwCtpbNdaNLUyNraH",
  "key12": "4S5D14ZHZubRWd5gvoQs7Z3YRevVqytk6VL3w8bArd3qzXEHMN2CTjW1w41ggvrmvasHx9yFSmNoTisGUj5jvY33",
  "key13": "4FvhtcYpcXACB989QCeFjr6exTutA7U837fqpmp7u783UGnFYMBAP7RLsMGR4v5pje4zXXF63szMwPNYUkxx4Ccp",
  "key14": "j5E34yN6YpykATDpHJ3frSaB4BtQ5otCB9aDgaAWAj9bUrMVQWxyYV6ZFm1iB5WU2WmCB5beE4HeyodQ2jDBYTY",
  "key15": "55hBzuij1qLcmL6iWeswg3ErnYCy9tkcg5RAESWwz7Pn8A6xJ4Nny772XtyqTp49K8DS97WCBnEGjGj1Vx6sQVBG",
  "key16": "5uw34vVF4JRDTM4ycFhxogCAxNqdDsCrZ1XJFUGtU8vrcA52qHg9YhpZmu4ub8T9NhtPxK42yEJMAezwbd9BTAZU",
  "key17": "iMbazCWowvAFewYGCJfMCiA5QrBUVXMLB5At3HUuHEqnRxqsmksHzbSSFwsuSKRNJDKSkfstewJzcf3GSjpHJw8",
  "key18": "zPB6yLNrGJTXJJbagUpVo3WHybtGYuUfEupv9eW3rSQz3Lac8tYTs8PEYpbCMV2xeUDCpy6RwcZjhdLMR4PAgn4",
  "key19": "SgpU7qLNHBJuSAS6JiGphHnoZthezgvFywJ7Fefxfi4uNqVm4bZDFqHK1aon9n4AbD9nr7g2ncrtmqZDCTA9jSf",
  "key20": "39qtQMu7tbk6WucDHM1r5w8dbCiqkQ6d1b5PNfPAZN68T9uw6q2cNynyY6FRnmxbiEg7q3nukT9mWeXQePMVsovc",
  "key21": "wFjGLsbzob22LCL9Za8AUThSqLAREBK27FZy7GSPDmc2ZgCNH9doKwiKqdya9yxWtAxcE5qXcqBmuyio5v1T2r1",
  "key22": "5VqYsun5W7QdayRDed8jdj43zGce28e5WReeLeN1EQoWiL6GXBUjovW4CwvkSip1SGdLCowTbTmEyVusa7C8NajE",
  "key23": "4HrmnMkTCHYrkMSLby42qSmw6iGRboGpH7Hkro4Lg7uGwE2LKuGa3CPSdnwoKnnqKT2YtSdPavc2ZkuicNPSbjfB",
  "key24": "5UgU6VSYNpDnGoqh2VeiFSjR31Ga6XzyzQEx3RLjc6MJcynN5HkFe9qcDpGibxc2WAnkp1s9LTppyHkiDfGf9Qbp",
  "key25": "5F3tQczxZK2mHCzx3iidn83Y9mB1yr8UUEmG9RepqWw8ewUj45d7uRfmJGEWb3SdLukWjjQBi9UCaPyx4Z81VJ8T",
  "key26": "ok285M9WkG7kp3yd4pR9cjzAwpKZhv6TCdr7nmeTMcjA8n5h8jWfA3PnEGLGu4YHz5LYpts5BhqEYzsRAtbLgax",
  "key27": "3QaqXrYz8esjdRswMUjNSQba2rBWGgpAKbVBW8DkZ3nuq5NDMTbPdb2wBnJkigZ7bZhqWhR8mvRqeL4Wd2s4QRrr",
  "key28": "2ptSisgZu2AT86TMLBVtm6rFBGW5jTGk8iBun7dZXESYtjT8ysiv5ccQUqyVBJkwZ4zBqYKZxq9T5AhYC9Xn38vP",
  "key29": "5yjGzgXUBXKgTzfMa8r9mLAw1Tsh4kxpQp7Cdp7mbR9Xp6WYP3UUgW4gwpCTtfieAFVw1YgKcGEK8CgZxoCFUURY",
  "key30": "4Kaj8pN8AeEiv7EpBKeLS9kUBA2TRQ5ZHVQJN2eT1udkgR4Qq9KBRQyhXByJ5AZSzJ3dKrik1M4fTaEV964df12K",
  "key31": "5SyiNj9qwjk72Pr9py6kPAbekbWtMMPS4bRXwr7pMSyv91Gr7vV6WzwbrTRLsk9fu79DJU2vFStLp65MfGgE2YKh",
  "key32": "5Nkafm6HkQWbrcn7r363XT2Gw14wyKTJwK5tfQXaHVzfgon2T16VjxWj5oeSjpHuLUPr899q1q1MM4UBmzsrKekK",
  "key33": "2Eb56tGqnKGXAh6iGqh5qZ7vHsA4gDWTAhUo7rR2xBxttaiQHvLEwUB2HkmzuRGuLXYuErU4WFYZvMe7V5X8gjDu",
  "key34": "211JYsTazp3RKaJobp39dWUDZK6Tj875LXzC9ZpsdaC8Y3zraD18BGXJbeCaYMegdTRJRoAQBRZX6c76xJrtaVkD",
  "key35": "4oduSRzeFjWVAaBkB1RpT37sJZQm1GyUtv4bcvgZBHoJVbaCm8wRTQRwG6YxwjDTVA4NDDxzGn2opfXaQ7LVcnPA",
  "key36": "4kcknjJQjY2fWaFL18KaQ3oANqqroFJ13LvJNrJGKUGQMBLfTmyVWhUvPDjPewFAjpnrhaxuduMMR9oiqRB7tVgF",
  "key37": "2gapvJ9wQJUJy82enNpVq9YkeY46Fpk1P3qdcneFqY8SuZoRMYtHjiPfQsUkpsocZ1TYMZNQigSCyvTDJiYxK4gU",
  "key38": "63vtuM1cevXk2UHpgk2xnzHSjNxnyFXJQLCxGtP3HUq2H55NgxyYjAJMrn24hFTJjF97CnRfh192q2Ds6j97AnL9",
  "key39": "37xdGe6co231UpVMhDrMsDvz5cShmDwpr18GoxL779XpH4tYmS8dVVMzfU8GqHRoNHPG5UuZJB3sMwuW9VACGH81",
  "key40": "1paf6Q6ybqB4Rrc8kLv6rX9MEcGdvcQa8DxAQM9bQ8Zz4pQyq2vkKjFzZWWLfL7et1uUZ9LNLLHET15L61zPffB",
  "key41": "5nwZPCTrTgHsBCxbCGsKtMtQSZBwgnsMgZLxnxuiWqt2iSZTiAuEr8ikykNpmc7RwVQsuMz9BU1YTtj4dKg9PF5c"
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
