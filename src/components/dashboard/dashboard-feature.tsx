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
    "627otheWaaZdEcD4jJV22Rsesv1PgGK5kVxibGY2Da31NpNbfzsJS5vda6D6dLHSyo5RagzeoGA1aseuJth28u2Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35mFnoAsXAXeLqDt6jXqS2vEqhfGfXgzAuW6kXfgqS41tXMcxi73w5oStGeJmcmnJjoRapTDWvV4zfTEorEutCTa",
  "key1": "4Cj7jN7NYr3GpKw3hbL5cWcjRDAdmQgg6V6Ph3JCfv2FX3GBpFiicxXzG1pe7qrA8nUDPm35icmysZ3sVc7C5KxM",
  "key2": "ahizqC2vcksQLafhmREebuEpe1is4oikRx1TzPcYGio4cgpVr56826LjV4Jug3pebRy2ik2JdG7Tr7zCqMZYiDu",
  "key3": "4CXW7FqSfLqW9EXUAGA2L6YdMPoLT2GSMYsHJN6FdBs1meakC4vocCShj9vBE4WsFRQoChJ56HgQLmaEAgTkPAYD",
  "key4": "2egtDK7mxrjcoiQegsPuNCbmh7anHP8SeN4h5odXW53CdeavBcBeE3uUEaZW29WJKVFjYUmfWq8ELwnA9QZR8zBg",
  "key5": "5yHbQdNJFAqbja6xjzZeu7KbVfQvRQcASCrsvJZ5sCGcMCJmRJrL1UcMbTFjVvXWyidJxZZ5EoHqKDFxfTxv7dkP",
  "key6": "pQrnJeSLxuP9Me5FBvQ8zxqRZ5oCbWev9vhbBcEN2bPUP43uoGDiaNJESq8VnsXVUjjsvykXjbcBPVyXHi5tyWV",
  "key7": "3kX6fQ29ARua5pTMQctStYem8eS1gcC8XKz4wryaSSwEuafDWivzsNFNN2DvrAX32x8HpwViP6L89NaHnLvXj4Yh",
  "key8": "2nmncQcPgP2qaChA3afsnRUoP92aJQ4D3GyrYnLay4sjcWqbTkHbSJESgBaYZcYNVg7AazFr3WJYVFbPRL53eDj7",
  "key9": "4qumgyvqdC2wWiPmk1t8kPhBuEFpboCc2fHzZP2vwg1gpzSFE1NnNrKJFDSnCoGNu4TetLaPoUCHj9pHN3ZDb5wa",
  "key10": "4UGa8ApQF3qUJAvCByTRxHG3bSfx1kWoUmfovgH5LpiPy98EnpaJyW6MZnvAvFc2cWfLQ8vNjS68iJK3gqwSqAry",
  "key11": "671CDBhbvyr8Sy2PRbwYykK1mCsM3CRweg2JZVJANpAzkcKkGcBRd7sR85q8bFL6odYFFrZ8fyoZKcb5PxZk6sEg",
  "key12": "2D1WPqkicqrVbNsNPpw2TWyjvqasDWxLbt9hmhrNaPvkYLzwvJajLEZ1bvwzLK7rXKHNrYVY4NTWV3AevULwzauz",
  "key13": "24c6kqGfNtFC7Gwm7ty8PDLpC7wXiCArSEyetWEKQCNY937JpuxGtWisotw1bVJABUtPGAP1EwiBKKUHYz9Vqof1",
  "key14": "CiXVXV2RzK1VDAgFSgk8hPxyDmDZdRTQz9s1xSiEF2GNLWn3gbiPZ4LwRectJsF6JqeQcxfs51KqUw4trE9rnfX",
  "key15": "BM9vwB3YdWTmGV45BoVbYyfCk3Q5e2niTXqTxhUoQ2wWNcSMkiHTspwhanEtcSWQT3SUwVRUXbJ6spUoNh6esQA",
  "key16": "4kBA7nAxKM92jUFUH5hAE9T41j5RR2HBrAAux98gfhCPPR6hHYDTtBAxnR2bmV9zZevxveGh7CkddeHVmGzAGVC9",
  "key17": "kR3q3DUxiCCdQ2jfRNALsct2eW5Ek7zkWttor5nxJgvffMpz8he1JgnTHdesK49QJHAFPxspeidWBBSDCGD6XJH",
  "key18": "4vA3rHLVj9ESZiGnSkHPpNrkxwpqqmQbbnEavKFXrYQFzUu6CfWbrnfo6goxSszq6pNtUQjwfzYmga7gCQiz188D",
  "key19": "4UgFQUVEp6uun124KjrTaKZFRckn2bu87QYJGAsa9xCkbeMTQ79FdCrNEmKqQDv38ZppwBBsX4Q9DNYW2Jn3ebdY",
  "key20": "3oYkyntdVmcH87DwEnErUg6MzbfvWCCduEzi1UkJBxVjGC89JwLRGYqysN4vqNYu8SE4yA6nNaDjRHPkwnGpg6az",
  "key21": "LroRtuEgitULoXcNgDfzoayCvjz3JCv9es32EWeVqHxYN7bXvSfATBNzfuN79Ume91qHMhukoZPfddbPuPEtN7r",
  "key22": "4hno9dRx3fcKhih8afckvxA7CWKj9f4aRtQemevmzUExrKZaCK2x4zKc7aHUkfQsDJFESbEE7T2KMZB8nKk9L2P9",
  "key23": "9J1oQyE6T5p287G9cfaoStGy5w9dEguMGPMu6RK25QWxpsZ7sYJtFKx3tknQL9peVpYSophm36tCUQkhh1yeYmf",
  "key24": "5jscqzGhM27wXSTmhioZ7qhxtcbMtqdFMRTHL7KRDqsU2BXHnip3SXc3PYdXy8sQujutMLh9GbR5J7D8yZb6XYBQ",
  "key25": "hu9fSbjKsCCUkj5fkxMLAXB3Ys2uWyMnsaEGzP6fV7urrF3stbqwjTvaBYdttHweYh17S9xMeoNuV98JV7TM9rJ",
  "key26": "5sVGRpY5wR6c1j6og65cwhvmV6LCPzxyr2ZePkCawHaGkLGHsm4GgAUapPU3prRfTexPvsmCZKsweMv5ceL8w88C",
  "key27": "nYhjSTLb3B8N579FtUHqBpaYAjHhUvCKgB9ztqfZ1N7snMDJfcfJYrkGckq8PDtNeWUrwyKE1eHvNzwJBHn29gS",
  "key28": "2YgXZSwwNH2vSwN8qR38NRAFoQrjjXrjKd1cPvxcRbTNn4XgemcY5ubjeTrJceEPkmf2L3yJwoWZgZjaQdt3wUsB",
  "key29": "2j2LKCUbJNZ9Fogk9cfPuNpkyUyBaj9Cqheo2MRz9qXhzKQRKbQhZjijCR37nJ3SjR9bCV8BqrFDVa1GpdzDsgg1",
  "key30": "4t8K5AUsh4H8NJik1EzkCk2CQCzHJtyAfRMfqdQJq7QfpyEZHK5aUWkSJkRkuoVfUgCm1q9Y5QP6xY1M7hnDF99J",
  "key31": "3Z6BmEGsSqY6gnsKPVVNHTGBkcnvKopzz6yocMHiAjemVo9Ebmzzn7UkjXSeJQAG7Cc1KFidxsoKisZUEa6Mi2aL",
  "key32": "32t6DPLfZ2iLtQRTRQW9wMEDLg6UPbybpmBenHMNyifZAsnFiueTU6UwcfHnP7CiNTkas4gSgExx3SN162QuXyd6",
  "key33": "tKL5qNNjQNjYBRzXzJZbGZPArQJXGy6TspbaukAMKx2tqqhNqZv1R5zw5XVsUu9NFPDZstVBYsNHJaMx3goCw6k",
  "key34": "2kfDA3yEESpmcYMgCdEThavqqTc8akFLWCr4yui4Qwh9ZdbjumDJeDVNKZL1DwU3RxXDFCCWvrEohLhoZeCdsCKp",
  "key35": "44UfqV4Qa9P2Q7eoPZ1Ry4JCPYQJgH1Psjy4zSQiRLG321uvkxavoAXeEiH2tgz7otCUwvH8Bh1vDVUNS3tsrUD8",
  "key36": "53pu6xrKqa6QvJZ82nKYBEwcidrf5sVBjsAKT4uxK9feUTTo9ymm8oyq342VYQRFDcQFxHUJoH1vYaDeWMfbWDyW",
  "key37": "5Uv4LfJjsQsQLkjPuaE3v5bA4UHgcsdwZ6M2h3EnQBKzjcfJJunjJPEHzUXSuaHRyw7drfPofohM2kMEqidJ9ZR5",
  "key38": "2EzsoWdtcKNPDBQye6SYK74uJN48D81mF5MUSVf1EBHdmys6DJ6otty8MnyXYYdkNdzYGP1TeMghjtjkFCbzPpyU",
  "key39": "4ETyUe6X48SCJPHtMMzPFvS7vtXJgka2hV9C4aAEkWmBCioPGoSbMp8mNnDWtgPnQhz51w76sYBSqigS8QqBgLBe",
  "key40": "xL4zFCYUqc8UUpQfRMazHDzpzad9zfiRdRmRiatKXcHsqhyaquojkTWyEAjKGaeFNRChrbqRZdspM5LwvPFoHnc",
  "key41": "snAH6CHfsx774ygeC6jZz6DFeft1Vyd3r3M8BQ3nFbq4uoT9ScQwHCuYjPCHCBVCPJKokrz8Zqu4vfJnJJdb7e4"
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
