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
    "5DZKnAwSUQQFqYL7bCq887j6bHwumFuPsYLdvokurEGykqtZujmijaV6Hfp8yi7s1ngxoAk6LxjzmGH4wACC3uhu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wfmfu13rR15vrKNKtDwPBPM6dqQyLcZ2GuXx42gbiZwnFbemxW1fK5tNFZaShkz7pUWUGdfh15JexADRuxmSDSc",
  "key1": "5bWd5o9kADdTqVG2Wnt1FtiP6kC59odoMpYq3DpGdPfduFsmgwSq5ED86xtNtw1y5pjQVwyBeXRRPqvssbocKXVR",
  "key2": "c2WPuqvmeHnJGL4kwfXKz5vbE3et9Kad1dMmevtLerKtK9vth8hqSNcQjDH8rYwxa3vmci2DdWLVTRhDNDk144m",
  "key3": "2Tpzs44pEctUUUa9YZiWQm8N8DiRXBx2CgRFKBGdN2LB8C3EDtAvpKpMrYngpX3MJDtE16V88jdehDFyKp4LVTUJ",
  "key4": "4K1uQDLMBwLEoGe3btmAnGK9bLHYCp9zqLwFWrng53yCruXECUhFyYxf2CZtV1PZNGuTLPREwRCXcWuHLGa2VZRU",
  "key5": "5ByeEx26fTtFHj5GJUt2w29Z8RDPaxvG8hhA2see8LhgwuiGLKDstT6y69LGEGV37WAciv6bGbpoD4ouEmU9s8kn",
  "key6": "tdcZY3wwfh3VXM5PDb5pG9q1UoLfuwN7fCKKbkERxZ2jW3rSyo3z4kYVCYM8PPBbENP7XfZ1aZS9qopeNWxy1bj",
  "key7": "4VGagPpndqYQbm6DzqXoH9GtXPn8rNTN3NEbmDJyg6zoBKBPSzL4kQU5USjvqbV2HfFj9MabsCJqfTqvhNFRMbbs",
  "key8": "2cLJhQgVuxXty6WjNSZMaN69JHseW815MkRKUfETJMmR8CsLagoB2uRguVJxWktUtdbSQL2vGWSJnYTSW7vn9TQf",
  "key9": "2uyf7pULMFGChWP2vrscUmCKMindSYBCRWHKduBRCDpTEWpJq6tR5hqcuckq6XE3BKTwkDtQxNKAHsY8Zz5q5fdA",
  "key10": "2TYBYJPEYzatXJomE5dbVPMJUoc4oSiceFQTF7QXFkUkmjH389DSkHrAKkM7TvJddGHRwwiU7XQm633PXAEGu2LD",
  "key11": "3XjApBStt2bMfCuiNRQj2UPmXyKzqP3oyzoxVdHsMp4DWp9ZomJyGYfxeFtYFDJUzwTrJUYPmZ2cNVTadmdMNUtn",
  "key12": "5HNKdGd5bvjdx5P2MWPdHBxtFPhQHLuFb3Q2ePKFEko3CQ5MYvFj3rzvkLdsBcMpFdFhrEr9uijKc75HguZh2foi",
  "key13": "mb9RUUFBinAcnS9oS1xgsQtDGfhwLBUGUK9ZPwpF6eayXG8TkPaZLtezyArkwANQvTWMe5iK9hmCGdsY12Yy8vf",
  "key14": "5KzoLvRYLLH3J8JshLrL3srLwdKPhrP22X9JoLpQeuc1UDGVhFrrfMT1VbUo5E1KoxsLXPqmQz6pib4aBQRLVjVc",
  "key15": "5hoVDHM2Vhr4G8Q8PvoYBmgBw4gA6zmFQnEzFSuzc27dAEVybwD8UahVMCCD6oZ8Y61DJisituE21fUcGPKj54Mc",
  "key16": "4G8kvrnbmozXUWi9r9X1zEQqBuDfnAUdY8ACbwk3g5r9B295q7guV97tMCHkTiJzn6PYkEUZGZGaaLCjuphVY5Vf",
  "key17": "4T9i9qzFFveTX7SiDAUZUeH1sZMJWysuDBteWGpTkffh1gcPhEWLzSa53MLMwn2h4scXYw6abr9z1AUF6LH3aqnt",
  "key18": "4gq7L9ANssLXMfyyjPCBDABrc793CztZU8FdtbZ7muQLg74afiRmHbXDHK5h3GD1ZKNfsXu216aZ6VjupUgt6k1w",
  "key19": "37XfvUKYgvDHa1TD7UzJbfsfDBiW9PsZB18kbaNumMrCAC85sdQX5W14z4fNc25WimsZngfpnZaB2S1LMX1XDXnT",
  "key20": "2jsCsXUEM5ALYXEEiX3HhoPPtsGJPKxhsVHRJkVaEUUiamfRk2BpQMLJR3q532W75Xaq9CM4kZLFiiP4WWysZ5Z3",
  "key21": "4rHbHjg38VpNb3FvCJsCFfAzqNdq662cwQUHS7F34bkpdWWg4ziqxwCzSTh423dbgVcKFBQE8pk6XPc7Cnz6BTA",
  "key22": "9SaTaYDvatSJGKybxdiiLLEs2MjEEe7uDUf9WTfraVYtx6PL9fq21YX1rZUVvsDQJZpnFW2LB1zgP5eK39kxMDc",
  "key23": "63ywSD8cRbVQ1Q1Xsfm7n6RVaGDx4z1du3SR5Dk488aF3nyR6dp4ypCbi12w8TeTBwttkvn5AcKChTc9q4LS7KPX",
  "key24": "3PmSpa67vup5K5K7mSbBV5WgJPXFQYvrp65iRjcni5NKoDE648scNbpEbb315cAu72PvuXrT7h2GXUyDUU79C56L",
  "key25": "5P2W6rdDfybbhkNSxTE7mZUVcsVfA1c4wEw3DJBgqHAwXGFV8QH8zN8Y5K6dn9MTdZ4QkH2YimxkoJFV8ia2bzTB",
  "key26": "ij8wtdaDh6PDr5pXBapEb71jLrg1M7GP4aMBF4c9bePRFqw6n5oLuy4x7mB13z46HYAoU4uNLoswf1rwfuJxJSh",
  "key27": "4ftvPoXFMEXP89MhB2HtHabiXGK4dhDhWnfFhz33SJgwrhJ9ThETa6C422FjWpjnHX9sVpSB8nWAmwWrsF2AdWDY",
  "key28": "ANDpgmyzB8zxGqW6V4EcNkv3vVDWgxDa2qMQV7vRE76aKv4kUJsKJTabG7s9iy5HNYj7ccTvGahhYr9MqcR7gnJ",
  "key29": "2FkaqMYNJzsLu6SC5csjQtDKudpKC948ihNbLcThaaF2J3Tuz1EXMmSKWJSBUkDZDE44bYaffSDhuchuEJgPnNkY",
  "key30": "2VV9GkVgZaYQke8m9EN8ajjSj8ynZsPhuESceTLntfHZWjRyF7SD1XgsxnuKYFSyMyvb46FfiqCj3gqkaQJ1T6BG",
  "key31": "46XXwA9t5VTnAEd2TTMj9s2UfaWugF7JELw6PsVWDC2GMi5KyX8oseM19wsHQAwEXdD2YTN7CqPWf4NPvxArN54A",
  "key32": "1Ji6dvwxdPha45f9Cof2Z5gWLsgMA6J8c21k933X2mjxnNpTwx2SP9cJLophKXTDXZrThPMYjfXvRTxPGAPWVE7",
  "key33": "sDPj2nXaqYYVsfvjdzmWjsP1GkGWhdnYvWq2KYyFjaXWmSGr5hCy4nWtA2wWTzp9s5mS8FNn9uXQu814jHxica5",
  "key34": "4cUcxdV7zmQJNRWzovZoZuUGGDLZbP9swLQNRgfeuMJ86vWE6DY19RU95s2CfVvYR2owaNtaKZeGeKeQaVRWWBfb",
  "key35": "4n3sz4o3ffTWAm6CZsv2GU3yPjQopGt8MB4JyW6xYoUpzpiwVyVYfbcptkERL9z2Tr9a7dVV7o8NEzw74Dfrjh9r",
  "key36": "2Atjm2jz43u7YaR396AnnrLbP8ZRUXQMH5hTqdZQsEG3kxuiJwqmy29MJcojVRLdPnP4q3Ww6pLank79D2GSZFh3",
  "key37": "5K1w6XTJjxcwxrmuqFzpnoQfY8itCHP1DQh5eZQf9jDmcpEAXgzByqaAqPNiXAQ16YnjCnzsjgD4zfbcQiEjUYAh",
  "key38": "2Bc1kR1RAGGg3md6hhm7p3uZ3TtHkajgQAVGCfA67XZBBn86mLUoM8ZFC74gU2s4usFHjBC5Nr57CDtxf46tTcBC",
  "key39": "4hj7aAhGdR83vQsrt1aAJEbSyJzNrvLzZ37NnhZQCAqh99zjHUyzTHbYMnGMmZkrqN9s5kTs9sdnE7ApYU2JbTUy",
  "key40": "3CXJSjMS9MQYyiW3bugcVDfEs5cAe7a9dxkCstDeac3kMTwvdFUZsujD1cDSRMPSeNJiJbLzDVapFPKC6iXa9s6w",
  "key41": "5EujRTkh9D4htckh1vg5rNDPksLfCUZG1ef6VB2ygNtLYynARi8uKwGvkcoQ33MMN6QRhaUjSREgiqGthMAhqP62",
  "key42": "5hUBiv1YodTHHbNnUtQcBfGk6FbMHLZvVBQvmfP6VmFj9CHMPbXYKx2BV91e3EojJFRcEYn3Vbw6n1Rbpcmuamtw",
  "key43": "5XCdFBqFKjcTffeyxiamfTbyDvH8HVivMCc3NgNgvhEa3ZiLvQ2DnsWUNtuLLqqdyw6no6SEw3qPn7VxGqE6fvih",
  "key44": "62r3KgBWJQzacGUcbLvt2HZf6kkRnnEbra7E93HMoCkoEaWQ7mhQz5WJcSQM51M2zNbfa78pPtxexyN6xLwTcH6X"
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
