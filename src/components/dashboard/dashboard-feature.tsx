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
    "5c2YJ8nzL18YQi2CcX2SZrjJfNuJfTB9seJTrzbDoD3xGNFX67uU2byeu9bJmYwpxAetzzbt5fgTHwm3GWHrQK1N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FDEhXpYWw5o1mtF35ipD3MuDuhnqeSgjuXRbCPqHC53umZhDU5ykA98iHsFA9JSge3WRE1TPpAND99rWcyLgGQf",
  "key1": "4124RueVXiYHbSBziHgW9GZ3Zaw4E5V5SmQ8xPsZJNxrb7U5nTj3WDy89G1toL22W7EStBoNUbxox9ZNGGTMGPNU",
  "key2": "ozhzsa3HqNHWdU35dhZvoweVfL8oVPQt4vkgcESPkpdmUAyhuXo83oRLqjHipJUS16mu5REdDacxNREtFe1WdqR",
  "key3": "5UppaGJxy3H8Cqaq2Ut2CdjHpLXxdFD26FCotgMyitBL23d4FBaGkxZJr9mQeNPtedG6E78qHmeeX2qE46gTeWVp",
  "key4": "ZP6BLdHwBKJUXjMYrLgAG3dsm8NVGdoz3dn5dqFkJWR3kLnMjRN8hsKaPwEc19GL91ti7yspSabLgCrBz24f7ez",
  "key5": "23s9qaS2FMDbaWtNTt1B31reDouMsALBA6TtuFd8KsQdZg3JXEr6NHHngRGax1EuuuHQptBYPgiKBvftW5kT4L8K",
  "key6": "3si5DRvyRQNjkeTwiLQMz6harjkhrTXE4U4UfnzRWYg45AoxwC26A4N9JpUMGBnBg6T8f4i8Av22TtTnHGb8k4X6",
  "key7": "3U5ty1MwvdvhLaWG16XGp3bLMTWaiiMaYCRpXLpR9pXF2KDd5e4kGXSNCAiRE9htxVmxQTXwp3cTRZQH1crX4HdA",
  "key8": "4UEHi3gkY9x5u6zqXRKymHM1GP1ZpaSZcExyjK7Pmdqd698has4Uw7GSiRgQkRvtntumiGf3DSbXHV1sTeZnfLgk",
  "key9": "zpFtjS6kzVJzKAi1bqwDAD31YjXBepiZNYKPe5vXzTTQ2APfvJLpUNCcoT8oePRRBnq4wys4BM1gEeJgLDTBapC",
  "key10": "5vUu2Abq5UupZEUKAV6zRbXQAQW9K18SZD5g53d3ELo6q7PBLa9m5pdS9YqjTp7zyJjJj7VLdszdFdiYzcKmV1Wg",
  "key11": "58bgPnbev3s7owDR3vAdxYZyFZQXpwFu6rmJjhuPK1t8UgAqPg8taCDXwdNavJsJiSwfUpY7EUCHyLxs1BG5vqZf",
  "key12": "4EjK2S9h9uCS1QovMr5muhTo9zw7FKo6du3cfFa8qpDj2KM4KPPaDqu1DEnaLE9iHjKKzGNc7nL1vCBuvY1juRFQ",
  "key13": "4yFEpcUkRmYfL9tNaiJzXsm9UNvKAARvJpepM8bLV8CDUfT4RsSKuJkTmCALBk6gnxyRuTNUNWXRmiLxV7QyDSjW",
  "key14": "4CPvjUuoqEFAVoCa611jCPdS1t3j9a4icsDWzgXYymrCiCcQYKzuUyx8UFz9DqaNjp1qdsPDp5MXkqrX3evUZyhz",
  "key15": "3wwE3NKg1d1t8F8yjZDfesKXAB4WBGeCR1vSFATsf8772K1Xh6jHm2Vm2y6CrRCLvoSW9zF7QY8gVedMH4Yedinu",
  "key16": "4tbCmEiro3sbirpdSN8u3KLwcgXVkgCx2gGc5iUM9UBbCYzyS4N21hZedWc7rnGDGBS7mLn8WkibZR5iXcDgPwRV",
  "key17": "GLotZy1mxvmVAFfuKdgZC5SG8GqrMjLgyPXKoK6JwSw6hTLWUKPjaza9Uz2nUrCifqTTmM1NK6EvYZQv7wj5BBR",
  "key18": "3Jsagg9zaoyXDxTpZ4Cvw8rneA8UGCE7bCkGpfC58M4RS6My1pbDqN7CtTerJN5RQuFKHNdpXWjAUsYEbhXc8QQr",
  "key19": "4z6urX9YB1rkTfz1sCnszUvEYqBhbnBz3h6RR8coqxkZhrcwMGWUVb6cewdJhZErtdZu1WHAWdktMBf2JnsgEc82",
  "key20": "BgeLiNruDD3JxNrwwh77tvkWUuHSLhR1daagFdkYWszAoCy9mAqaQzcKMULP92dacoGjyAvVYnkpHySiujgyc5r",
  "key21": "5K1B9QTnnWJ8vqihkG9AM4f5T3HmeFS55uYhKzRLj572JoYMYZXcNzhTmfGEnQESP6AAZQNScExeP7mwpek17fp3",
  "key22": "6Kf82st57xghBxHZCiD3mYQgup6t5a1w6Fzy3jpVHwppjWucX5EvzZbeWic3X5jnQMRVNQ2qrpohJKYMoa6XrDF",
  "key23": "4BqvLfvHS1LnDew8dJraZTRCH3xvZNim4zSVssrxnrMYDpSD6nFizW9XAfEsmXa2ji4RHTWo5o4NYPXxaTAKbYo2",
  "key24": "5HnRPUDUTT9yWS58o79dggeJVcLLhsUZhpNmaGhEK9arQmiG3HbmcpqRbjggy6jRKs88n2wxGwDRgteG8BhfXtn3",
  "key25": "5G9p3eSEYdaCQEv4421UPdEnuWYpKPVzbs7SNrKfx5ucaSAJmLo5Ate7EF1LpP8otXeGSFnHLseSJ9a2Mx7SXCSh",
  "key26": "2K4b15bSE5vMGKdrjPF2hEkgBD3egeyk1NFLFasMNynXTAD1a1aF2NK2FrKeApfwgKQr26HW99bXnnCWe3oEnet3",
  "key27": "4tswSQ1dmk9LV8mvEeGP9BSRPcZGZPuDELqNU7jKCddNfC7sievf7DkE9Bp1KgAxq5xghdGYP4SANpKNcT3NLNic",
  "key28": "SWUa1eBing4SgWGqXG1qvPMiCtgDhxbCudX7vmMokVezZAXByQJTnKgpJUonmJFYqGK6AXEWxDmsAADrEPfNKjf",
  "key29": "3mhNRveUhkpmYXPFYMne5RknaydQAxXujNe26ErEURfDTXC5p97VtBMBAtq5GxFdu3V9GZ2zQHBPrLQJBLNXy7AX",
  "key30": "2P6KMmxam49fmoGjC7cRiuCNRY9vz1fwk2bGT8tYqyZMrT7sw9kiQZPGRAeBZbAjm2oX2BCn3N6Euh9pu5qzJkZA",
  "key31": "3yhCV2uKvwWd2BfwHwAeNAuNBWfaixdvpwcAjqtvS7qyqifhCBEz3nnY5Zb8p7WrXDLHJCAAMY2FzH8Zxq4E3uKA",
  "key32": "2P1w49SDY29HqWMgNGehqoGk7iDCqDyJBGv2grSiVAoPTEtXfRGAxASLJHazqBuja8BU7GHA4v7Czy13sDCztY6o",
  "key33": "dfW3T9TzH34vw3dDZwp3twdWghS2FmCvRcCuCoTKrphJsGeYEKni9Hzh5s5JZHzW3uLiYjSF4XeXBpZme3w7dLM",
  "key34": "bQq2TcwFXi3qGsBDkKfWFG1yjjNotXGZTLtweBT6cLXroziGCcZqwuERLPektmJqANRSBFENBTqk5De9xiPGHzZ",
  "key35": "469YxJ8eZZKYD1wVDBGDtPXz3SNQWU21UGzKNsihpu7i46xdSnWQwQ81mc3rtE3GLQLydscAJP8oaU8g3HFYR5VM",
  "key36": "4JAvs8hNDdmy7RubooDt48kFXK1Ryp6pbYDXjFZaQx4bfEgiMW4kcFgNSqwiRqD5U4GrKXPnGq8eVJoCxsmA7KyT",
  "key37": "3D5FN2MDqoNg31tTiHzEoyJQohnWxLV8YxR1Lt33zRMVpPTUjHez7tYfggqtR1AKvPe9RgevfenM2CXuhbhNbn8q",
  "key38": "2KwPLZ65PZsmMSvxMFxDh1VtRrfFFbSTJKyg7Pfh8U8r1nHWvCh1umUXmEDc5ixVxcmAgiWx9nQ1yvy8bnUAwsj2",
  "key39": "2YcL7M7SaodKyh4cJrVjXw5KjUGuw6MGF1EZwine7MPT9m87PnQsMRVmx13opd1Pg9zxroR69cgiZpp41GaorUAY",
  "key40": "5QZxfpF4Nbjk5Vnh3gpG4E2mrYUGat5venMB6xx9eTNhiF4RVg2zzD1wTZQi3NZp6Y99Lqa6Pnp4KSCezg6dzLZW",
  "key41": "5SikAThG4BnQe7mvGrQtrATPoztsADJr34wGsYjSyXyB6o787Kct7Gqyqvo1htMJ87y3Aj3ceL8ZWgD9WDJghJJE",
  "key42": "5XBecQZGpvd6UULtGnCtuT7GK9zSxGH6b3ipfgXNaxxbq38pTuqaF9EpZtL9Pgus8XsF28pnYV8DPwnieNukxBRk",
  "key43": "3Qj6DgaNkT4nKhFgUdEtDF5oUw4fNzZTyDseJVqQ2EMDUH16752CnqsbSHrkGBeQgh68xnXqnjLAbEegVhzTKQ17",
  "key44": "3nBYwjgCHJ1hQsPuruFd9UZTQCPkjXyv5ZMmbtSERNU3ZX9Z7m24g8VREsFtgnBEmvxCb8wumTKp5g7DJAzdkMcg",
  "key45": "nkgmkHrZYWuAaCdAY188iSRPs322Nu5GT8okPnsbiM92uWmV6fvi5b3Hc13Jq9yaUghT5QiJmGruyGC9WyjXQGf",
  "key46": "2ddEbm7tazfT5mAHL2Lgb5rkwFGsrMiPCRyJUZAnVNeeH6NhQuTqQiKUXegNg1Zb1PB2ZMgt2vuNrx4iYeXKuE9s"
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
