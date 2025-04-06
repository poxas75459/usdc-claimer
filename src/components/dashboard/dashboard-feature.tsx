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
    "4YLgA8VGv6hc4ZpYjmey676YGZS17iufYWamQszUpA14S2MnmaWiENJhztz9j3Y1fMubwPUFphDKVi6bzqrbUCZm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cyYiwDHQ4BzdRF2z3qHm7K4bk9c6aEhRPhAa9tcujRbgqtreBSYzUCDCYyeuc2TnWArz5PYg5SVwmQTZFsKnzcB",
  "key1": "4Lc4oh6tMLthhAwiqr9reTBP5LTNv7RoUiCGJqjQptLs4zuEnr9GeZpnE9q21RTQzs7bFnJzGKTHwMKWsEy8ks4X",
  "key2": "4DGMDzqiZTLcrFCccQBEUhZz6sVWpHbRVZoxCBQNweJbGPaU3aFwGV3EqUhczvBHDtjhf4kMr6s3g9k151zeVPq4",
  "key3": "22G2TtFNbqMYc6A8xdeiKP8eNtNqhPimckEj9a1hnWjm7rNyvfsZHK6JUd9ErDWsGteGA7mCpVpMv6v68ejJKzyq",
  "key4": "5Ys9wRQdyEVqXMaSZRHQCSbHDoT2xsT5ga1dbbkBQKUSmtoeUxpmaKRXsekcRXf4aeLpDDytL7pHaKm9DjiDFZaG",
  "key5": "3o7JarLkfLpDAxBaJKvNNyeV3cSas6EmkRPzT1Ns6fFm1H3EdNap7U5GLV33kSUfbLfRHDnShGbGSGhAruCcy11Q",
  "key6": "3NCymK3291HwKPKHNQ4V1RfGw7T2LstoAdCAAtpr2RY3vYX2dAAtm5YKHs74K134vY64RumK4AFBcAnFf5X93Ttw",
  "key7": "67S2w2P3VB6ohUkAQNq7gFCQsLao4YQsQ8XpatTMQKRHqQSPvPsZNssbJFPZemMnqV2JiuAnpgwfxAwDwyLsfPf3",
  "key8": "3AJrh8pLFhiUzPRAtu2W6nYMbXLLYH7SXSVKPnNzQ6tkRUQLr5gBu1aZEidkxWLBd5JEq99KX95tySUUUSZY9Kwv",
  "key9": "2u6wSEtVJotuQWvkUYS3ycCHLbsd49yWGcPnvvKz2JCqz87bBPvkuu7ZStfQhqoMUxV5PRpBzxM3ZJJVmnU57T4Q",
  "key10": "ZWSaogKgGccSxHfQs7DTzZWqm6KAqHCPi5snGgk38n8iBEB6izxgDsrGL9xcZY8b1KqWFiq281cXGkM1KEfhroW",
  "key11": "62NtJLMXxqQi6EXwLf5MbjmcwodhRVpVpSNy82iTQA3aqsbxMSMYrMYnqau4TQ3w3rGSwhcZ9ojX2iYTzK7LXRBd",
  "key12": "4uoheTyqvXjo7PCxPx9BSs32H9UEm3Q5FrqeRSYvy3sjqaXJqC1B3f6uELrWDZKwYC4GEohzFrne5QcubF2MNLZp",
  "key13": "5yjL6rizopbBKjXFxVgknDPbPKt6USuVPx6USMsC5B7ZuwL7WD7GrzQEpTJhtk8y2iKzpctF2v3KEsRpMbGvFLEa",
  "key14": "3YYzZNZtQwDPcHUoQSfb2WNeLZmjRbENcBp6MwGbkA2o3u38ciZb7Nqcsj7XrnHHvpk3PrJS7T2aynjUEAptNzXq",
  "key15": "28HM8VQ9fiRgPtstMcT3bXHX838Zkd6mbvB7Xw3eaF9pbNzZsbJqKPbLpRp51LrDd94gA9Y4vwCP659fqCMiyQoY",
  "key16": "5mhzaUeMdjaUHW8oxVyiN5LqFqwaZjSqRpseewszFYcf5vh7THnht3ZKsr7zKhRyeXKJJ8jvGWF1B9pLioGQQQwp",
  "key17": "3QarqvsMBcwBvU5ZWwkWzRmmxSfspV94AAmA6MVX6jJ4LADhZK9Gg78VBx9YesZ6GWm77RmojEQRkQ39aB5TSLAA",
  "key18": "4XvkypSpB7c4KH1cxzD3Lg6v9xW2qBxYtPRVqvu8YFBxRdPAZp4c9bRFRGrE3LaGgGDFqLmFVpjN9XhLCDgXMxvZ",
  "key19": "zGnXaSnep3dzrbhyztW24MnofD1woPFih3mSraP1ynqmWRKrZ5zjFc2RDvkdQAEuGm7LkN8Q1kKbViUFpquhUzG",
  "key20": "FjvhNraUcim2t34V1DhM6Sbx7AUsSPHpoySmbLXo6y3hCjCvs5RCemEy5s5jh9TWYd3XQ5oc3QYWQruGNxUfp7j",
  "key21": "dHXpsFQpyi4qzNkSUMLhVbxS4B1Mmk5m34pT4Btm2RjszbpgkZxfFe3aUtkWW7gxZQtJhEXE4N2hTBVKwAn73yC",
  "key22": "3ZVRnMp5Wc1Qksgfnys9ZSHo2Ehc2JNHitph39uPkDzugpJSD95wcKr9rTJRPoQdEFPoCcuPTxXeeRr48dqXdGaq",
  "key23": "5xXzXM71k5uzMQLM5wRHZ4oS4VZXKzF4tXKbMVoa2EDBfSVmBcAnYhd9HpfAXRpuK5KukNgY7MwH4bcewrmFciyB",
  "key24": "5xQ872bJdBe77712jrPu7rKKVATNGUwWVrKGr94SaijkbEshwhGRDwPYcX2zCf7RkP4uVYqF5r3ZRVewaT7vqT8G",
  "key25": "3CMPy1kUxXzsZfJe2PvRYqLhkwPRkZY6HESKmXGQQV6xG59YVUKdQLWbg83iontgFgg9DeMq8UR5t4yoLBicgU2Q",
  "key26": "1CkUbA3T32iUJogsc8sWCPaPGRag15y35HmLw8d1txHdsk4JnhNEweNjYQp8yady7cAxV7nr4REV7dRakc22SzV",
  "key27": "3PFGCU8pvE7qpVCmN31qbkYy3amZY52T9caYCsoxa2GDkU9RhmgGGP2vCgRmZbeph2pTyFg8BJjrufSkzem6Dtgz",
  "key28": "3Cv1ZweGHunB2LVTBqD5dEM1C63b1dNFYwwsQFkYVVf6ajWn8QPzyeqBquVB72SXMMYHsRRoT37pw5xetWZXUe5D",
  "key29": "5hpASP9BDSc9a5U9tjbSG7491DrN5jgSK6cZ24ZJVAabYy62aLpQ89WWLMYzGSttVfkUHiEgjhq1EoW5YcNGGTkD",
  "key30": "jvL74BuVoQLbquNy844rKU2DUWy6MLUjpjJrD7SFpN2MYsxVjzZojJWiMWMnDt3GwPge4sgCoWWtrafS6ak3LcF",
  "key31": "2nq65j3hFCrPgAkx7tt6K88gGX2d1AKLL3Q2TZcVQNeVZSVChfjw6LvwBz1C6dee1MkmtfApYtHPsiHNGHFoxnri",
  "key32": "MmfbZpZD1Af85EL21N5hxVpeKjxEayPwGTgV4TefrYXr6rUVZuHZjGbgSnWmPSYMzz78yQkKudCxqEYgCgxZRz9",
  "key33": "5gzwyD8D5y5FLbzuzcrPibAyfNk7YuxbAcRNTN1jrPBH1jEi5JgCynkYMuXNuBFcBqwRCMoCB4a9YH9cfmHu6Nsu",
  "key34": "44DtBcrKpM4yUkEqLqZpPdsvcqxdkgXzKDG4jcv6u3UsemcCNtfCPRXyS7f1ivdUggNGkCf3Lbq43hjc2RkF1NM5",
  "key35": "EQw8hRwZTb9YiBQxfbaufmaGssLJLtoPtp42ZfH8ciTG1BSCTdGNMKFf9dM6tu4SkV2L3pBWNFYCRuCdcuXYqFU",
  "key36": "5bwdMXs4H4pX4am8FYLLMbYrKkcN2nYjndFsfM6gBXsmDtRToeNZNio7nwRrqFJf63ZgeQ5MxTHFEXkUpBJESG8E",
  "key37": "5QLBs4omE6C5TP9ebUxodWbY18jCRPDVSoDyekzHfbvsBYxR3pLPjyH7XtcFaVYd8oRgszmRbqG21hvZe85rL4a6",
  "key38": "64mcB6v63QXkRaPo1TxFXeNMtUS3aQNkGS6qP3NEVW7NxYqqHTGviF1tX1bxobXG4ELMM9kLy98ucaMA3hVq8nRi",
  "key39": "5PgKFaMjhuReLkZnxA7zaZdoc1f1fiy88jZW61iWp9RSG4pvu6868Gggojmj6GH5W8FQRy1TRQU4VLVLseUmXeYp",
  "key40": "33vKUTw9zPvsjfA5UHZf6NnAnWGi5t6X9gaJtcaaCckZQj1sU7qaySzy51AbjqHm8wASR9RTh9boyqv2s8negXqK",
  "key41": "5q4qCLi7oX5Fkk21igTGThyBRGgGmr48kJMJsJG1ECJgbcewEPZTXdtaxbexWmN6y1sTw2moFiGQkEzpWtoQDf9v",
  "key42": "4kyQ1nBJmhoLsu2DC6AB1TPbmBMaEcWUxTtM6T8eof9PMaMatRWD4rbRGRsW3StkvuFacmyxEUFw289GYYrZeYK9",
  "key43": "66ouPta5ZiCMEdSzp5BdwmeLfJs5T57aQ96B923bgvxfpuZAQjxL52ipqa1c5AtbShWCSYDhuUJb38jTz2H3pkFm",
  "key44": "4rcEk5ET67nJ5k1HZCqFSFfknfKuc82F8fdjysTsvVqMqBGEh8gZ3qaE2skLBjPrvrjdcNpazg7CNzb82Jjj73Vj",
  "key45": "3KFDhARGrbz7HwK2jgQrjicrHx5MycGMu6iNUNUpgVeHWLPzfWcpxdt1wytkGWC5uw6Pkp3auT9TZhvacrnTgpgK",
  "key46": "2tyxnxtoNofnrFcK12BE1SMhzrmC654tyfKWZ46z7UgM4VfRNECE7cyBxZZBSjKKrBtnysada5LjfH3HQw2EeiQf"
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
