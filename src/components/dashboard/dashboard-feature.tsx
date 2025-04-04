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
    "5a35BjkhKNbZaJryXKACKjcXCoUrfxPa8sCCaBizxc5DjFkZcZR5dfqYiMC4zu92stFf3hvpNXTTDyfqZwVPaPVx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HSvgpQNhbD3DKJENYgzoacFBKEYj2cBUWshWwpvTGTxfaaJ6GUZZBQuNGZruZFJEPMaMtUovEQXMn66M6AWHMc4",
  "key1": "32FW9DoX8MLVq4oPbxZ2HHvNr58BMLUXVRgHqY6ESTG9RWFijkrT3FzpRMdQqUjNWzuq9kXmo8eviAehghB8cLzD",
  "key2": "41nFz8UrAVVimE6ePkoE6XDmpbojQh3cTk8zRDBy1GXBAVGSiKZ28uTxpu7xMqY89EKT4cgBzUvmzUbGjHgPUwyV",
  "key3": "5yYLGEtjYoPWeKMnK7NPj6udKi1YLrhLc86c2LsskQee9GykS922hrHtaJtaMAkqdkxpKTsqoMdLtfYXkPk55imW",
  "key4": "FxfR41YVLKwkmEJ992AenNwDg4P17YaBdvVFenaVRRbpBJ18TdZaWVVdqFitX9cJ1tSjj51xdMiiQULTvfuY16q",
  "key5": "534cJpxXmZvgyaThRYFuku1AToPisBwrBjH8DL2Fqg1XwpUhvH88NvugmWZxzr9ogfWabWT5HPBvZbPxbdtkYqVU",
  "key6": "4FeVkCUBXEeGiLcJkHKH78XsjKUywbet5RqcNuEfuYq2aiJJMhr1GqqmYFrsiAemqXmCxF1tnFXo1cAedSCvHA8q",
  "key7": "2FZgkQXx4FKJqTibnaYc6wBkSYPZ1eRDP3a6ayQU5LbCSz7hhuRn1jR1Yx8FSro6Jj257A8RBSDL4xk64CWjqLpe",
  "key8": "28QNGZXvQ869vW8KFuJrBVnDwa3ZWR7xucSjuxEMdx7iZirkT2Y7vkHardmBvfgndkWPjEjZ3G6ZDojvwubWfMKH",
  "key9": "5XbFXtsVVs4BfshXgLczTWZ7sSBEkExykK325M4715QP6Q2bAhKMRZyPbTsWQ38DACnNUUuUo864sHMmr3B7mKeK",
  "key10": "3CK8AisAvwBga8Xjpy6wJabeY2k2nvRZuQ18oj4niAxpN88S5pjL8oMLEzfQmB1Kqe91s4Bah7UMedRH6UpAK1mu",
  "key11": "erj9tbwK3N4z7BRNQtCmr4SzTTCw11nMsyHVacLASpLqBtfFvvPRK8WcVxPSwLrztN7WeBSzB2EoaR4Xvzioz9y",
  "key12": "2MEVe4KnhX6camN89nn4vCMhjWYXM5cxRkR1MUwRt81dH2SGbiuyP7MbnSZ8T72NyuMmd4CJ1R3LCKT2gnm6Ct7C",
  "key13": "TmVVZDy7J9Bj9JipGR42LJS51jyG2N66VJHoG4CEPbA9KCvkRoGefRExqx1VkDVV8G34n1Tw6ssrcUkSqGohykB",
  "key14": "2zu5AydvhfS9YrRn4pkP2VHqjiqsrCexiX2W2ZA3jwZN67Rpwqdw7pZJZbPQ3sH67t74PTwJoyT6xR1u6J6FuNeD",
  "key15": "4mbcEfsKFGN2L1qRQ8bJhzU8THh5wq3VJpHB1rEjRGe488eaphM1MoQVJiPu4ecXzbRiowsxGts7LGTKLgnNjRdL",
  "key16": "3v5T7QdhPH1QgVJZXBY9HL5FsrMZNXhuzg6JeF4DGSwB2yxaw6vvg9naFXxByS13y4gg6mXCrVC9Fm8eJ93myWQH",
  "key17": "49beHLjH137KaWF5EnWGniKfw4g9jGmMoB2zEnaDDy6A3uExrqahAXsFunxrRBZgW9sRBbeiNs1oUuDJuUEPn6BW",
  "key18": "391VKxMcuCcpJLXbuWYAuxW1ovhzgmxzY5kcpn6MxGPrZ3ebLmSe6tzG5wyjsGznjKBLkCYYZ5ccqBecm2E6eMgW",
  "key19": "2HJo7LrwHwxnUwAfLwZkf29iodh7sjT1vFQeqTjGufWkfrNPpxUXoDDbaH8kzh3GSqh3gZCgGrn9ttDVZQPP7nAj",
  "key20": "2QzSoPwH4QzfxKcVrdSUJBZVRiWKADmJ76sfqiHf7Ttng9opv1ccAT52v4StPJPex38m12M5ChSzuTodhfHd6w79",
  "key21": "5FUGkV1FmnCkeLR87nbz6LNxStCzrrBbfgBhKpwAGsp5CRCM4crBRPmUU7YPki6bms2AXD3TMkNKYycMmv7XPTBJ",
  "key22": "xBtGmEYUs2ebpCcXxXqwdnMz7Jm52UTxSvGEGUKxThEUFMscw8nJqS6FGScfiJCa6GH89iW8MKcjGfCof2JAHu3",
  "key23": "3rzamqGS2iGBHQoUaAxhKi7yNmjt71XxanzwTcy9GNrZ6NyiQgvKuRL2BdmmApP7wa7kWypKBTvDiPREJhdrgT85",
  "key24": "3DwR9YM8WRjEQN12wTWz5bFQxWMxj7d2fuppeBYCJAjyeUammh8TPj2HY1n4gWJPrjb65vFhcgWDrrgVQZ4ZLH9n",
  "key25": "3FjsFL8exQ9vyL6DPCZPsXcdLoXt1CnjJR9BAGXqgoK2u3pzPn2ZuuYQBsJ6QUT7pe8VUN2nAgBKC1fKu5NmvMEQ",
  "key26": "22G4cx6TnqqXewWS2R58MjzbRdUfBmQkVycdLyrBfwDJ6tpLCceypQWt4dGeqe5LptmkpXxq9SyyCKDufGS5qL5q",
  "key27": "2Hk5ieQQ6K5zMN5SAzfgUWJqbpKn8ym11RqbGAujinYEryDxE6YhY77so2RCS4mP4ByTr8ggY9Wp4ydzJbCF6ni1",
  "key28": "FyvCz1AwUDbcVUba1hnVw4s6EgjCoW93CaGUaWwEgX2Sh8gGSa8p46s72QQ2GUCEdoRrNWXdWB7eZXK7jz4Ed3z",
  "key29": "rSo5SU6mAmZ5xmzMgoZ7eNsgjui5W1Cpr9WAwwqmXHRJ9MdMsxryhcHpUwZRkyRige2DXCzpnYHkFi1osXgvrLi",
  "key30": "2WPgbDfysDPdLXPNtyxuT9uTaTeK3bTxq2RFGqtffpTFjMUJ9bFnJHMgZQEQ92rEik1NiphFFrsWyQDRA1tdZo1P",
  "key31": "pXBRpdJg8HieVNgFXfqsGFfWoyY3mpN3zMxwfXbCKXFnkKbofpHXHUw5JdNkKkMzThB17aDbH6wpNhFvREkiK9r",
  "key32": "3J3k6YqqeVC45Vh5VwmGdckMZwxB2ToSawFMRyRzm6oPUPv8CeUHz5y1gkwzcVfg8hPdgdSVqajM5WyNHF4rMYSp",
  "key33": "mPJC3EXz9YviXh1fmKS2wJD5j97R2sArRJd4wPZU4cAZ2BvGPd5tAqeEnZcSPVPTQKLU6A7xSESg18JT8KfEDAz",
  "key34": "2PGH6XHmAki79kXTJg4rdh7MeFGpe6wgP5oUA2MLic924Kkx83vSux7NEwMNjQTVtPnULRbWyhfpA5a8dptWqRYt",
  "key35": "4NtUJFRTaSgVcX9t7tyzAETX6wV8Fwp77Qts2tsysTWP7aFzWT84ssGuDJ56aSrWBp2AEfH57LrKrup41dCoRSsB",
  "key36": "2QSYvQYF6npipatuA2kitR7rXpEBQQQaoDAinBNj8rugjFkRmmvFaEkXdcHWkCMtanuYGxoNJD36BzvV6D8pKhS8",
  "key37": "412s7ALtfgjtDVjosrX57rB5gchvqQJMpJ6icKnvStZWzsHWQaKFgq1Y8Rco3r5cz9ZMqgfrTi9QCePgL3Xh7vQ5",
  "key38": "2fntmNJwmTm2QV1HfWi9S2zGpfr1NvB8GqVE68HEWrKNGM1ZdfpV9UVXd6Ar4maaenWMi7U4xvatD7Dv5p7Noyiw",
  "key39": "2GEjkza5QAWr69VEP8zQS7CwmDnJyP5eujADzoCEE45GDj2xacdxexnUdWAdr8gxN2cHGivL4vFx31sVqVCMjTLR",
  "key40": "5XKrEf9qVax4RqVuX141hNuYuMt2F92k7krCfcCzNFYY4zyyyfjR8GzW1oamrGLHgo6o65xEt79YAaPXwZ2FDAR3",
  "key41": "4DgRMWwJNbCoF4zovcT3mKVQrJ6WjQuxjdY3W6boT4vokKgSiCMYMD1KhRjAzrbK82KgnPUfLhBJEVnYxayPakBR"
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
