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
    "2kWUPgUuHoCo4WV71DfqyitJ5YXXrMWm6AaSP7jYy3nnMuJwGJEigNPrYREK6J7tZXuW7fDoDGUgaeKUGgf4EuEY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2T5k8vcurH1mxR2tnBTp8wBVcyXrAprJKXBpFHeCsKU63nW7aM4aLeF6CSFJmdnXKTVXdh21UvHzpvMNQ5dd3NAb",
  "key1": "2KQQGsJUUQdeHryjF1c3XrYmfiCG5bJrA5H7SpyjAbDrZaT9X59M33ynH3rpRewRCfLezyFLgpHa1LiPMDNbhcjk",
  "key2": "3yVd58iwUgU1KyGDEwzjoqmq4ntUrBrpg8z3EZmSbZ7v74REQUw24JrX9xBjiBRMHANcF8H6voX2e3Bend88BCT7",
  "key3": "vLsYVMmr7AhGMAFvUThKDeAwcko8Tjbrkfvr6GSXSZyP1JFV2G3KA4NnkFjL9MqrayvnvytvTptrUeDoMSfg4ic",
  "key4": "4hfVpNZQm4PN1E1XT8WsaqKiQiTAPnxAeXnma1rzCazxwArvBj93vPw2qQvDrWFApSEb8KyegALt6oD3LPaKhx5u",
  "key5": "2MAb88XeYtdGJ8a3Y387BgMJyBbEkEnyCtEbwepDh7GTjNz7t8Lsyu6ZTcYaX6FWXCq3cNvhAvUmHhB8LVWwgbC5",
  "key6": "4a3QG7Y9o7TMZGw8vBLnTV9kq5iK5CJbzKUvXcEi9gvE8eQQToF2xFu5k6stwM3EbhSJeMBDh4ztohGwDbQkwRbm",
  "key7": "2DcGGuwv3fzj6kpZK3fSDGafHNEsryK9nUvLVuK5tYgFc5qevnKdq2Q6g7raaEfX2j86kcH35a7MiyTkQaGg6vzH",
  "key8": "5ZFZZYh2iz7nkZewV7u1E5uzd7M5FFhMsA4sQBK2WuhdDf3UpMUX8TB1Sa1HfPQWL6Qgu8avHXxALCafMzREE25w",
  "key9": "4R7xBLKe3pseK5RH9ZTPZTL8YyeEwkcftGFSX6zNbbfb2WBiLFpRphTwqxDu7y2XDztdsiuA2eb2Bf5ga3SG1JJZ",
  "key10": "yaTggoHsdQgaXyib2ij1wyiBavxqhDPuHgswcazSv9oG88wCKMBvmCW5bwUEfyKRxfU2sQqA5oxEkiuLTgW31hD",
  "key11": "3QxwW9jcbdPi7udCQdkd8uBigHuCXii6qHRRnzmUq7BcFP2mki97sVxkSPsZKGdrEWsx9yhkp6PR5wVgnXUhc1r6",
  "key12": "3x36gi6YMpS8Y9we8SocR4sBS6Un3vYfaLnoeurXpWsJeKXYsG8Ra4sHryfBgvGmgveWEWEBLMxoQg3HEEfqjdap",
  "key13": "5WzchcSqrhDchsZfCV5q556FtWirjw4VSERsRyhGHJkQMa4nWT8VrHWJoybBaeNSd492yo2uSYy1Ck1nYxfPRj2",
  "key14": "V8m8LdNbX5JJdcJ7ofquj2eMtEyDPdDE4syUFxxJwfRLqZbddBex8LCD5cHpWhq7sdeipEgcMRJk3D1hB4CMZ3G",
  "key15": "597pwDpV1w9seSJSZEW9k2nTTiHgCqVnf63T68aYqQC5792tCrYCvS35Ha98dF3EimdBci686x9UAXR5yjXcwW4L",
  "key16": "5WCFicyoma3nVdKEmvCUi9TCkBQSWktjuSTs94mEn5AXf2hBD2kY9xFSmK3VeqBEXZe2D5kirTKc6KVu3yitCmtS",
  "key17": "iCx6zunVCEPgmaWqFgKQp3JxLS9JdH2ePWnwVd9fpUiHs8wXCkpkZUK38uU4R1dPH6e283U3B6yUChv18QJhDDJ",
  "key18": "K45psuRULxDsay1c8eSvFvzxfaErrgogXCTmuVyBpxabn3hR4U2mt5GxPJCmHsmFxBifEqY4cFyabqfAfteZzTS",
  "key19": "2fCbN8gqnJZaamLdiEHj3ediRCtf6tPgCBChXDRyzzKEeaM2j3HDD3s599e2qn3U8vnbqCBCpepjhEfJe6EG2pn2",
  "key20": "5Su4hHYZWkmtLZ8y4XpubgsYSwL7mEkSHLHHsMrCvNb9Htdyqh4uYmWpd9t7JqJZh8HWTENtLWhy1es2xKSmjWFp",
  "key21": "5WMT2uoptnkpYSs7Ba8LR9pmc2pjefTmDLGE9XBVpCKrDKqyuthD4ZueG4Prf2vtpjbMnKZ8hBfz8vaL3HHdJaFX",
  "key22": "2F81dKY8nn4HGhV1RY6xDNDB5dz72n7jyhVDMFFexS1XwcaahEVZyrdMN52MLdgGJ1EM6BnxjxKzs4u3gjVs4KGU",
  "key23": "5LVsG1F57XS3Frh6t5PQWJVSyFQWrfm9rAr6H9G51Dt4tSJ1vX76E7wTmU1a35ymnDmSKFU6z3uXGm7p1VyzLqHa",
  "key24": "LmZzM61hMANcDovVtm7oHFJVfmzT7Q9NoAihJhvFcNCakyWNG5d9WCfgz8QEyAyzkvAYo4mkuP9135KNucfUbpU",
  "key25": "5ncxsY8H33PMz6Sjo91sD9tmnskGTbrBNB9oovCwLR1yraDznPaGNaYDZoyRXC2gmVSuokcha4DbNMb8zhZSzGSU",
  "key26": "2Dks9HJ5gx6suuXPYMF9EkLgZwpjRzfU36MwQLcvpNHH9PSLoFkpctuyyW7WqMC3yDLGPooHfWX7YPxvdWGe38m4",
  "key27": "4a2AF6fMFVSvJCaJqP74sDZu2zuruqnNcPYi9ptSq9sj3Jfg8RV8GJ3Wt4eAnLt4zjZuamYbMuGhFCt42jitsyJU",
  "key28": "3HGdYkFMVAGv1TM6N6QGhJznJDSb7R4v6xAjNsLB1fJqXkEpk2867TTKwgh2EeX4URrFq2F2xNH3PnQuqN5ZjAvy",
  "key29": "5yuhUxXsoHEDQmu99EdUWxUoGBs5GvNBWZC1DbHGam46hpeefb5vEFViukVofRJbJMn1M6iskaaRZDJwgFB1ms3Y",
  "key30": "3TpdHKFsQmW6dWjH829VQ9zfJhK7WFozL966h33uPA5UFtzcH3s1mc1hDyNr3J2axXLzXT4wjNDvkzE3mdkQBnUw",
  "key31": "5Lxg6tJ9aka7ffxSXrBYQ9QeyPuAKe91u5c8nmcfi1zM4DvhfVmd1VRdJ7ut5obkU9PjXNwV3iAvkWuMjBQgJyBo",
  "key32": "5iCTNmG8E4QKnkZ2mar9GmEqrHTQckkWp2gBSQKCFydfxerA6TrMshzwxAcN2eTCv34k3CSuA4ijxxQZE1W4gpSH",
  "key33": "4T3wsN2xVVn3t4ZUEYxkc2ja9btKFiK88PyXDc9BYd7NwgCumhYejwFimhapcyJckD2tpZPFmFjP1VnKqiRfm62R",
  "key34": "5JT5HMh7gLAJ3nuNhbmiSnqRWPSx3EZncyRCeNBonCZLuP9cykRQ8t6cH6nn9DPsw5WYzBoR9BYqxzwVf7wiq3c9",
  "key35": "5mq2vQ3P7yEeoyDetpEfwkoHWFvaTLF8jrgNnaNLifeNZTCoXTrcWDBkLCFFiu5PCjMEABsknFvkS8f3JjWajzjF",
  "key36": "56pt6vonDDMgze7TwfxU1kNuZRL148zfR6HGrz7hCM9zoRdvM2wq3bgv8JUHU8TLWiq5viso33a6nS5D6Q5XZuzQ",
  "key37": "FScxHVqvc5csyfYtLAkMX6JxJVbmr8PshDQjLCdU5mFQRAdDqYyf1gS7goKoHwS5PJuusBB5uYm8V3Ai9nTknD5",
  "key38": "3V1C9rACGfSqLH26jv8cJoGgcbUr4JUJ83pJ9Nb2Ru68yBhcuRVY4jRo2VBh9iEXW8KZshs9hXEKgPATyEJ8NyEd",
  "key39": "krGrN3NxQRLaLvNaCuxdn4NjiXDqY3N5Pc1s9Q31sUSBoz9VtALxgde3yz2jbNuazYAUzDqSkUrTkSPvVAqZEwk",
  "key40": "4u5aG5mnnQuHi9YTWwnr4nBJ2AZhcwrXio7J9k42z2DfZah21tdBNQtzUuG5p3EZLb8wePcXL72LDvjt7qGvW3hb",
  "key41": "toD6qfnL2J6mUKXGLB4EqDHAxfFqN8rAtE4eKkPiPgpCTdFosAahrGdfsxFJS6JMsM8Noj9JDpkjAZM8J6xBU7B",
  "key42": "5gww1HZSGSqFFT7v6XjYtvG9GaznL9ednkyNqfKdokNQiCaibKtF3jkZuUTeFkdFo1dm5kiicXM5uFsrGfyEybKM",
  "key43": "HrxpgwBW7a2RwiDDH58CgiV1Bf7ec2HUUvjYtJLezsqwiFH45UafMxWpKogHcpfUYeEVc8XRqp18yxQFCx8xULn",
  "key44": "QwSzF9B11Wx8dFNkciT2njf7cd92FCwj5dS4DeDQZoLq3ePW86ki3C18g7tyeSZnDgA3xwprnyiHAMdyYVgNZit",
  "key45": "2NBvt977EmNGEMBpFGrtZ3wuTuZnn4ba1A9xcRcsEUV5qnG9vaagWDS6Ag7r1biq9m7eDo9veso953KQQw14ZKsS",
  "key46": "3Ni3fggWUuyq9ygMugHUYgVCDTLceA3vsep63eg1WpTAq2W1sV4EhjvzHK7viMVxFZghiMEnKvC1NypJ6bvPZKNz"
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
