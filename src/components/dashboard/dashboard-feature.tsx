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
    "3u9PPzn1NuPR3VPMAEqB2TiVagmTjEy6okJbuJNbUDxQDwePTSGB9YbGJf4vMQV4jjbgGkkkgKnSMe4a2pJMJ9Mg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "361EAe3PuaNBKob3dxNKZ9F48Mx9vaLJxwqYUEkchXt3D4EGPbcy3vsKCdZWPTwejDrx7nWgZrF2Ws4jD5VtDMAL",
  "key1": "2gTgKEzGdP1zp8ntMCyi1FSLVWcnXYGUowhfMnfdM9QBVr7HPD3QNLevAQM91xKMMhgybx7ByCAYuLn9RESndmvV",
  "key2": "3T8F421PA1nDQgdFhcUNDrzWH3LaHEGJbhRu9VXcicxiAGteRu8YyHdFnueGFKDGBmM7CGWQDBYAAESZ9bbDs3Ua",
  "key3": "5z1vGaW27yy1ccgqBomt1mm7t3WzeSNqNGKbHFjrTYQZxJRfiNLsZtMxzZRZCrsxSdXoFxc4Tb7hPG93oiy9VXxu",
  "key4": "yTAeGNQ5HhRjDibmjLJifAnuFUUxxXGfRrBBtnhfUA4eMdCutW2LKRyWmMNkSSFVnBNHRk9LExZ7qYGds1DK4tJ",
  "key5": "3bQsEYXzJ8JXFf5skX2LnhwqdqjFzVHvjFkEhmca4QR2LuJL4oCMDJSYe7MWER3VWR1rdPD4LG37oiv1LZYzY4FD",
  "key6": "4d9HzDuLPPpcEgd67FhXeNYp1GkLHC7HGGTQbACtfBLrUVBEvjLZipS8Uji5jQ8wcEUfaY1U9P5oa3JpcA3FH7i4",
  "key7": "3yyoQxdmQb7HaEcX5YVca38obejF5JQc9vyGwdwrVP3GKQXEzAaioDX4UmrPwoVbYGUpmQgjk2mmeoRwR88XZib9",
  "key8": "3waqcEogu4VRqc12QjYU3AnS4RKoArTir75oAaVm4j8fzcKtfvAnMQMM8mSb4iXMsKZVtipJ997JEiLdboDm85VA",
  "key9": "5uRhjsKw5bRTi1H7SByhX9KjaA4Zxq9CJJig7cBWEWDk1fLGMecFwmFW7nWftJ967JvtEJ2L27v7zK42jRewFjA7",
  "key10": "3osFo9BC4o3kqctZQTdmFJmjNH2JakcVCKdRysv8AczXtNp1tUp93Q9K1TtzTmbqrH68Kbv2LLTZPo3aeyQaPT7K",
  "key11": "4QnYqbpaoUThAs6PjvS6ApGpV5pAy8aBfdzFjLJ6EBqQuoAWL6D7Uci2VwnPUh3TBV9yjRr75t1rFnfAgVfmXBg",
  "key12": "4v86UWD3VMBhDTmAb7RSAjdowUqcFmW7turhPN1s1sGVSfNTiZi32Dvds6MiAvbGxGdrPiT9su4K5KfqW7r52Vqt",
  "key13": "3Gvnm5SoZBoKYfE4fXcGx2BVJdQtjHLMvX8Huji1s43HmLsdUYvWQtAnAsi2c3w7v2V1dxvTgMo7fNJykyzHgcjP",
  "key14": "3cQ7ytrS7VMk65rsySYYNdLRHVxvaARp5oMvKoBy6Wt8eBaZK9ad2KXpQuj2huvXzs1XRMt4E7TKYLr8iQqpa1Dx",
  "key15": "3VgX8jrgGHLyptse7i642qupUNVjWqiopVq29JGNBADpeLsvgMwaPcSBk6RQ1PV5UJcyHK4HeD2LxRXb8s4VcDWu",
  "key16": "57yuYmMouf1gnCP9Z1rnd1yiuTq1Uj1TUMnnjg7MCRoa5haCFSPU5Xs2PnAJMeokRRn4yqPQx9UmZaqDhGKGFtD2",
  "key17": "4vtqu7SS56Hp8ezmqvScPYzPnWA9MRaTyE67UjFzPGBaK5J8i9uo3xFtcjRbEudLp1hFvoxnTFsbgwbLKtj4QjSD",
  "key18": "5ZUTCF5vbAQ2D9ZgV1gyupNnEjj2by28kwjZSMZNeCmi9DnNCzwHn6YcAv16d8eYgvcuSSeWEJsrsALHUv8gcjZU",
  "key19": "392TJSuR7Ki78AA5MCr4unasyiCzo3D1ao84gN3U79cqpDw6uHMo4PPLEjypQBhLPMfxmkhBN91kr8Hbx7RpD2t3",
  "key20": "FEi2L7kYXj72cPCJdQyNvyi8HkfDT3z8pp6BAQE5S2Lj4n8DTsYuByfeqpJqKzgtuhTdV8zXuTc3yokcX1emQuD",
  "key21": "2CYq84zCXpD2DuXzW1TiJikvB2mNrbCSPKhyLWkwZFfQPha78GwzKrEVUWprWJTPyzbz1p2XhMUrc4twj6pxuiSR",
  "key22": "66DRMS18yhMYPq24ugS6rNJ9oZbeCoxDsTfXrt8w8Vkm3FYWQMMkcJ1PvuKWyWfSz96VG5DwZiuN5cbnNF9kin3G",
  "key23": "2ZdWd8gHWLAbhy9tUVQNrMj9wV8AuzSoEF5PaDPh92oNHLiqYyj8yoEqZihf9xVkmGnQvVcJCqsUKhVSW3aiTx5g",
  "key24": "2uYDCXAPQxjetb69oSL1ky51XzyU48hdRpVKiQqm5DNM6C6pgnSct2ACJGQBvpSG67cNDFwSDLbJbQuA8vt6FFZJ",
  "key25": "2mDFod7nHHxJaQEZUgLYkKZuofDXiTWgFUAjXe27VLUhgAgGRrryYekdMGcDFsCRxwGnv9t7xnrfnAxpah8aiwSR",
  "key26": "2teJyVZLd3u8h8GX1WWwGChDeZoPsKSReJPtmsViRfJ8NRhjyS3ZjJ7NiUPAYBdd6NBqYfFXHQggRfpSp3bnJoWr",
  "key27": "2UQQhazWNXVakZaWy2v7NnLUC5mD3WY1i79G6Sn6CNfPgTpkF9T5zoLoV4XBP18nHPET7mbjJ819b9Dt9QoHVFfH",
  "key28": "2FfF98c9ZMF5Qou9hLU9HPmjpP8mmfCJFpeHERafEAKTMWNYyciTK2Mq2jtQUQpD7W3x9g4kNiCnVx5vPV9Sgs92",
  "key29": "54aobs8JHHcAw7WbJF5NfhT3exs7YainFZWJpgrznDoayUwH3meycBiG75NZ88nZLuoA8rh6F7xpYdK5it5wF9Mm",
  "key30": "3Ap68ZA8V9ejc4trjBhCK3AZuyzL3GQ2s4UFzzRRi8SF1Y8YEBEgGUa4QxXHdu5F4vJEHjyNxfSGiZRjf4GbfVcB",
  "key31": "2TD9cE2Rp5PTA6hwMc7hiHPpWAev9unPnumLmFLEpiuPkbqxcxLbRiRmNsw1k9SD8ZyqJ5BKpYCb4rcspgkNUFK4",
  "key32": "4zsYBxWS3EoVHdToqEpmduNugMDb3eSLJzHu8fydsgjH7fFTHtceD9Sq9xedzKp6URLzX2JvzNgQ8phL1L5E5oA4",
  "key33": "2T7eYwE9d5fZU7L39evRc9tmiBEsiz6FvNB4fbomeZPoWfyqDTwUmKETFwCYLGxysuCysuGs3pim6RPHosEhBRef",
  "key34": "3iA8ZNxmbVpVEjZvfj474LtwmyVNKSsweG9TzqvwaVNGexzwp3GVeP3pLbeP5tXL2c45bVfXaubu8ZANKVPU4PAk",
  "key35": "2Z6XzBzrg1XLH44L3pu36nYYBtJRQzsHQvHVuE1zrjcr68Cmm3Uf6sNiSQE67AVPchxkrG6uersGcwamk2ifBQgp",
  "key36": "2F78QfVwZjiCtUFPr1QF192u9pizHQHgXsN5pNRTu6eogrFbLqEgQPcAdyXeHRsyZmkTMzRSyUNMTHBUuyZ8j4X7",
  "key37": "CLKxfqM7H9Gqv3Wnju8Vwnd4SN8acBh2Yr6QuMvUkmkF9T3YD6WdtQUtXrLe6ybTwMaiBguiWNVfPT8AZ4No6hw",
  "key38": "fwu7KaSeHwwc8gsNNpnqnNZ9gXNZnTDhw28gZo71LHwdDw39m9SjKPtaDK4HjZU2MMALB61wEbqhAscDgojrSLB",
  "key39": "3nVK4JCsBuc9NxAD9Dr6jMU3dMYV3nBFu5cFiv4tGaSjT9RnAtAD8JMxcgc6VhgA2tT83wx4tcqoFWVhWWhQE7Qh",
  "key40": "NRF58muuqn3oGecCZyoPQLYMe8y4oP9tvSZBWvrXaaohPkLSyK66YLA1CmiA47YtKhRb7NozowmUyTaR1NSG43q",
  "key41": "3xAkpHwwBwiRoPacd4Qn1NMggtkLBYBQrLypYuEkZgFLsjYA5psRSP8paG4E99oa5zGvc2qM3UWqXbq9w7vga6Lw",
  "key42": "3CTx37cgh98kumseAZuNKjuiVwGDbTWF9fNo3C2TewKPNm4Dwvru78sWPzH8MaSWX8nMaZ43YYb2iYEWnJXQBNUW",
  "key43": "vXaD9MAoRmmixFMrkb4DkJkCuoeyFfCzHFwPxM91SXYFEfKvdFAA2rTWWQXBxcpnsLW6NrzBixema3hc8DnSKUF"
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
