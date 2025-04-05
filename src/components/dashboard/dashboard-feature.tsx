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
    "4oqbTKKWyTDeC5eJX9NZbaBTPndfAM8FVCCuhSGZaaNxer7jYmhyQ1gzYZ6LggjwMEMGZPFC8uJP5gDpq7PUVNe5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "y2D4o3jfd6WhD8vrEbYX6JB83vm986t59bggr5LBWZ7TcK7jWC55cgi9nkhgzEBU8SzLVMhpaVDvLfR5kVefc6G",
  "key1": "3waaoZU2LECspVxRPF19huroNBwE4N5o8Y8FNi2K4mCsFuyCZuEjLbxFPqDAhUHm35j4PKTDhfnAJiroenyHFADD",
  "key2": "2DH93qvRFHbvSs5crDJtKAXPkSv876EgQBcHgfVgAteMNJQnKU5TacqVfTWnMHQsBZxKnqz8UqQcxSmZQ1xFsBKA",
  "key3": "4cGBT8ZnDZvximRfJvNpGRzLtXFFXa111aJkNtfuVWfXJeVg6TW8LxTFJngvNUbdJZ2GB3hU6Ei4zd9fEboYRSzw",
  "key4": "67QaBF9GbpmjrXGHbTjaVSU6rkK5A2Tgadva62P2u3rdBKE8nn9waLEdFJmZfcsaH1xWgqT2MJWso3dqT9ZJ6VJi",
  "key5": "24qxn4bsHsZvTJZ77V7FRME8zrC8EuzYY7FgZzH5XfFDW4qJ8fu8JnGqQrqug9T1boDhNLTXHAc7Ry9QbPCsCgyJ",
  "key6": "29LDp17aYjtQu8pN4Ubp7bXohYP6rxouHef7jb6pCsWDsx4DMyfWhvLwWgh3wBNnXfyp4AS3xysuRD3nco6HFJGp",
  "key7": "4mUqXTSGcRS9CAWoUbBeYtQYFWR7u2nsvzP2neYAoCDZPySjtGC61Udm6T6LJcuqF5r1FMg1SkLuiXnc1avb4JGi",
  "key8": "5J331th5PDdwbWWx3TTbwGcJooukxmiHf8RFb6BiBAbdwAjwntZSHvM4HboZid7nZHrau8NajSDMtwRxC74kygud",
  "key9": "36t3g3ViQqmejeT8txGiuevpxy2MCy5g1WwAnrB9UZrA1MXguBnXcvSLiw6yn4LrMyuL7axpi4neMHstR5owMXpe",
  "key10": "4DzeyZKmreimf3eepTvmYt6p5ixXEi5axTMTfNCBtDis3FWPnpgQZyEDehqfEbcYwevS9S9VUF2a22ysAonac9eX",
  "key11": "2Y9Vgsv7Hk6mgwevGPAMGtGMDNhqWQXf1VqePWhJ4ryyWyMBXj28MNhXVE1yt6cSSZ1K4Nw3zuHDt1cjd5bXjy6o",
  "key12": "2m3E2Jp3F2LNkKFYLBK6Ar6CmatJz6jjymubhj841xK7oyVXRhFyNW4KypPHrWThkq1MoyXUDgPPXLhnpMiGn5qA",
  "key13": "37PkuaGNvfRfAR8e6721fqrB49ZUvKfXfTYaFozhyAV3VNEWtoitBnVu7bmUHB5gQuQhcDD43kn9k4XBbH3kPogW",
  "key14": "3yqVCyWu1SLFLgRnYxhJwatYRxmdf1R2kezbT52B3i3dUsJzxiFYfM6rF6djBPKyUuA8WXmvFcEaNxP9jEEBD1xx",
  "key15": "2jSBjj8QkvTtySi2vyjwpY7QV7TyF3NjGZGJLwtJD317UQPMGcU8iZ2FwAtKJSvqRUHcgpoya9u18UMU9wBfdiym",
  "key16": "33zWcew9srWXHFaShxGUxch5AZ1QuLX298RWUPd6aAVMXzPydLLXn4FgbjSks6VufafNDNf69JUkmt9sH32gxAJg",
  "key17": "2uY7KCNmUaDyYQmYbd3tDpAkC1LtsQih6Wh1Rr5ZarBcnVwZUpKFnWokismLExCF1AR4sdLVGU1zVx83UBnhJ55A",
  "key18": "5xE1n5YbQJirYL3WbnSExY9TYukU3WyCZ7EcYVk5tdiamwNKgNnj4W39Fvdtif7tzt77Mm5eN46QRoyM7mdLV7AC",
  "key19": "5qVuchTAfAFRvZQAnxbHed8BT8d2TkCkM917SYW8T1YL6aZnScoi1CwrkGJtqJBvKWrwj78REt8cjz1W71oDEnPA",
  "key20": "5B9qwVQyumTRMH82xf8Qct5KGv4wE4tCY4gNSa3kqmkpCncDtVQ67v74SDEBTKtDPMBNpXi2dcQoccAZ5oG6dK1a",
  "key21": "5gHzSkfUGpVhfcgdDDXb6D5gnEQZHvnyUPMKwmn1wMCHRven9ZwAhh6PUdmg8TxTJ45YpNWmWZ1FrES5p7A5XznV",
  "key22": "5pGgcBqiY3K44CKKjfo4RWQe41bNxiZANcZTvda4FR4QxYCZi8N1r35AECDF23Wkkj8jxgd2XkZbwVoHuD7LosUv",
  "key23": "5ysaVzKunh8DCfLNSNYSbmRYfPWijzo1DkPkyZbxRDRroFgb8WvxyqfYSZeEtm27zX7seVqT4N4mUbjGkVzBsuom",
  "key24": "5wUcdJ7NwNJJqwUrTteJ4ewTuoz6Dp9zHGwGqfrPD5TraPtdooCWCuE3r85K2cegEPvGoBtLsFcRyAKJfs1dQBth",
  "key25": "5JV2JfSFpm4tWQtSpJbxgS1NiUEfAPXNF5o8MSgXC32MrvMqpQD3WyLLRcp63U7kuk37XLTM4KZ4c3sCsg8u7Xu6",
  "key26": "4X382gCBqojFFxJDQYqyqMwzQvtrUBrtLbW26Hcy72ZYHYDnP8h1sFPGR8RZwSv2FZscDE98FYQCVLKtz4MrBriK",
  "key27": "2CJnAtsx9sc16HETrLHtWbh2PzFYXEZGLzD2q8VBtgXhDiTYwaQxvrzWhNJVQn8KJcDypw4DFtBJtviDJ5WFrqRo",
  "key28": "5P3NEu5aNatsyJ7feVGfY9hRTQ54TsTQ6ogKq2mzFEXsUdtBg6818vyWaPGeeHmeKrDQCfwWEzkCXM6LWvhr3gUP",
  "key29": "Hxnw3EW8TBVmCLegeVdSvpyA79NrXUzAJUpcUpoSPXCqbEx54heEsui7kj4FGBdVznAbNpzLFuG3jji4nJbv2H7",
  "key30": "5uWwKwEqoJwrMFBoQ9mLXDYeBCK4FKbUXV4gGYNCk114fef3xav41WAtcD8XiqmCdocCDRdEG7bkxxZcki4CQbkb",
  "key31": "4sPWg9XXbX6zLv9g3Crq674knz6wUfnoc3fj4jJepq9gSrV58HLoohpo3bcE8Ye7vGGvTaLn7tRdCKYdkQEsUiLJ",
  "key32": "TfvciFkTHb4EZZsgK6PD7wn6egaNxJwCx96FoKGFntLg1YbiSEqY5SyegFA2bTmdQSStwuDa8Hfgncow3zkV7fT",
  "key33": "4AVhQUZSS3piSoM5zapL2szWZVoLnytHjXSaPy69xSLvirCtPogccFrsacpqtzQ6w4zdjFNGR5sbFhvJsQVx4b2H",
  "key34": "3qmLWkdKfHd5dcd1xr22nsxKUzMomANejMSCEKuS1HVLCjuX6A4CSbtnXVggKFkabTHpkS2dXTyrgL6SYN1KhcNG",
  "key35": "2KrE2ucYhmgrurGsEqARBDCGSDQ5AU1rN4NW3e8HN8wqsoSo7wEecLwdrpBwMgCLWCqFr7ianwUBkgjozAYVe3px",
  "key36": "3TtYE8Aunr6iUs7TC5CzK1H152J56JJy5sXBERJZQVpNHruHFZqMss7w89aBGTs2qit1oK47UfZsdu5X3wXzaCoz",
  "key37": "5J4neTxiQTeKKn7GQxVcHmPKKPXz7H7Kz5Trve4M5ccKuGnEZCNxprZVF9NSDbZYGmzaKxVV3EbKvvjts5fu2M16",
  "key38": "22fcv75795PYr75NJebXBKE3EMuvyCiGX6ZsmNtPFi9MYhkgRsbRUH3cLLDgPDc7RFm7XTLA6Lg2simrvbW3hcRK",
  "key39": "512KJczV4iSqeRRwCqsXaQWJwCW5ryBbLHArp4nUuq8HEiLoU4PqUxiEo1xA6Ft3n7ZZYP4zZLQLKdQEk3n5vK3A",
  "key40": "3evsz9woGhRGF8w6EJo5DJhkHJjQTNFdD577f3jwqvbhfbmSWzCeJ29odzD3vsMpwwjHuQfu6A3jPFD2bzgfU83R",
  "key41": "2TzkSXtWRKnSXsukdvphWVgSKMxWVz12apiDFa49ue47oXw6nCTvJxRJGqh7VTyno7VmcbNC13TRAytuNNf5LEci",
  "key42": "5gMyX4an3VuCf2TqokChzbKJbSFkfkDBFvbxuPFgLVXjUnJYfaPyJY4iMuKpbV2m5QCtxzoACAM7pNYvR9tXVrbQ",
  "key43": "2sAU4vNQKdAh1ZABRPTx7ssoNQkeiqPuh2oCq9fxDURYV59sJFJsboAUJEdpnw5G8gP4KpzvjC4A5mEuJ9WecXg2",
  "key44": "d8gvvTPSfBYhFrbWPRK3gDDpAD4L2ZQ91noyQ2TXRhVkGn7yvEmZMtoYtZ5zM6ZHww4zhHU5hpGYEhxRjL5Sup6",
  "key45": "5cWeHiEBSS8kWM7P7z4wb19yrMEcduntxyZhKdwoys24KeMcLdDbp1vMvxoJTkGMpyDv3JxyvR7BhNem2aSVDDAS",
  "key46": "YQ3YhVE2P7PxXkYsidbKjb8M5uTyKkCNEG3RwyXQrKtqUrkkbLRB7KJtzi1m64MnPsNWi8ivYe57jEjJhpbQJMV",
  "key47": "9taCQtmBhwfCKsMM7o6QEVNSHVbvasQF8sLdg7HcxP19jQUi8WxAfGYFp1zVAtswdVGen4Dq215H9CamfGt9Ppy"
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
