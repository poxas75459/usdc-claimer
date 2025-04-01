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
    "2r8he4ZkcGPgbVRcfRfUSsVkNWHyfjHPLEP6GEtHvwm3m72FU4r5P9WX2eBZTvBZ9zFj8dANXc2deQhEKLer5eqd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43e5ee7ohadcCMUGjM6CKi4cXqB5WyoTjv1soB5kK327KBx9KXuPPPKFTMKTQJHUDvRTibJhHuvhahNdjDzwiCuc",
  "key1": "2pZcgWDEqK2VKmXxiPFYwhQ1yU7QFmSLP7DR8NfFmq79ihcfeGGsTpBsmNo7aVFovKx3KoPR33sbTJNZedbGij8U",
  "key2": "2EqWyfmiE4tDsA8VTPUxNWwW2YP7bZaC9DoPX7vVexUaEWSJou65q5igaMZAsxEwy4i6xoG1MsTtUNSb1kysXuXB",
  "key3": "BkmRbxxCByhVEMeHqbfe4YGV8fCNkuyiVP7fSCvtoVCG6YaF3WzwkNjSwnUAaQerbQQVBwU8HHGTrkJ3zoDLBbR",
  "key4": "5Z5tnYgQ8D66hmfRupTRUoG5Jqf1DE4gGvyD2CzLJRsKt4PHRdRcZ1eJWuWroJqFmLAaNVwvs3L5kV4dZNQLmR8z",
  "key5": "3rypyc3gHpfJrRW7NXzUuYiTRkNF6AkQy81N5DYfsE9bY8Qj3YrrPo8k3taMcWbQwS7psZ1nqKpZ4QDFX2FgNs1f",
  "key6": "3toxj3cZWbuevTszAhojDPrRcX86AMNsKH2wQXufHstb7pAkqsvP3SPBH1F3gsM5noJm5ZV3VPPmq3ivGpscxA3z",
  "key7": "2GsBLL8rKRbYPf5diGs15ByLd2Ucb3DyKwj4W2NYLNkQ3Sdsr3KinzRmLSftn54UbaezQLGf47TogBqBdXTA9sPd",
  "key8": "5ynY3SUbEhMErfVBWXeA4YSH7Tzzhp2x9eeDt3XzVema7vZrsVxNvehm49NDDqWo3rUB2Uj5D2k6YYyNQqLrunZH",
  "key9": "37sEB6DKPPMojyCTcgQd4GhwcJLJoYB6PmuqMT9ETyiHHVUPL5K3R79nR8eMH9mtgSYL6HF5XHUAWisn5yA76pzE",
  "key10": "4qXKRDvG34JnCXHXwq9LfQbBSWPv9u2TqLvKdzsijLojyqnioXvYExn8mv2zrij8Fai1KYtKX57XjBCumcnXDZ6t",
  "key11": "2XTea1BQY9hE7ESoRh3XXJrc9MKQ1Rya6kJX1t1j1rJRbCcRDL3LCcb3T33anhnb7hkbK7aCEaPnRRYb7ddLsSkk",
  "key12": "4Ya6PgvSp5iVyRDPmqZ3kdRbzbwQdoyAVU7k4eAyZZdwPEVkJNwGbXF2xnE7dweTWUu8ZavAF5PoSW2vBfJoz43u",
  "key13": "3GZak6e32S4sYBtk3fyMYSDVSidxQFDTB4oF7NM6DRAsi4TkBqrh7GcshsHzG8jndTdEPpnpdg5WHxfTaShpwTWW",
  "key14": "2NAtWb8hmtJBq2buoEkVCy58F82HJtWWsjTcVeuUzT6JWS5nB4QKBYFimUZ6QoJ3DwTEo2kv5kFywCqUDTsDasfo",
  "key15": "oJCEvxftqGsEfawp44L4hvJxegULPcV6Q64izmFUfGuvwnTdbEPs3LcGwJSFmGo3yz6jxdjdFZ4X6bhaKkfmuKJ",
  "key16": "2jFxbD62KXCeQ5Xmjshu5CXaELgaFB89F9h5jBx64UbGB5gyWMT3UcG4iWGRfK3MX1ta9E4wWf4hAYFD2irtL1SG",
  "key17": "4XbAFgWjPMH4zSsN8XD3WGq3x7Le9zWVHugrpUKkDDHHQzW4jB8L9wNzzJWdqcF3HCPAHDoKsV2SzQMnqYNSPY1f",
  "key18": "5Yn5Q4gTm212pChQJru4DSMAe1A8JmW2KNpdeVoDvCHmTgjmwq4J8Hagz3qviCfnwE2FY12wF5dG9QZsev6kqCNS",
  "key19": "28k4HVbhuRwpujRGAW8AKKjkAaS9yQCesxhnZXn5c2QseVv3iGTvDA2uNqMuCJtCGx1GgevMWPR3nxx3H7o5Zihn",
  "key20": "2j4WeGeCQwsoR5TbmdnS14Hq14Hb2U3UojeQvuf7Se9v9N8mKkuwiufbL4mGoSZQTJsS17ngMDocReQYoa9dydz3",
  "key21": "4YBtAXUFPdvqjuebGyzCFCcpRAET6iVeYRrLQnCHFMeyi3TCAdJQHv3hTL1NsMX3CLazaXi7aSqhMmi9nBcgTEWT",
  "key22": "cwtsD33w737K2mcmMfFV8xb9VXhwQhHaq5KiptDQ1WjrvjvhckERdezVjMnZmKQf1j3uQN1M5RosQb1XKXbo3Zx",
  "key23": "5LXtrHz6FuaL77ik62yWzEZkpG3pa1X7CLVMPu6KEpK4JtAWGq5ivXKv2MFnH8T1zTZFAaJaU3yjZb5h7pgdTVYN",
  "key24": "Az79v1NUh5rs1przugsexttnQzpXVrQVJfTTXX1DRffnvgmycEbNKG2Rpp89zRxLbYXHMayc4JNz7njhr2D5fRh",
  "key25": "8K3qytRdGMAHSd3mu9BGCy53F91GHLvEQvGtdD5i6a3dMzsAJWH1MZZXbEfyAi83PvAA6d6iAZ8j9nvikSWAJRY",
  "key26": "5ombK2f44mjon1ZrH5tj53zh7sUd49KK12RbGeZX2KKf2NB71mAqhQENqfrENv3VTPzd5Cq2swuLsiEE8ncjMnDb",
  "key27": "3ernpr5uQrcyCn3bpKBHX1UKt7trdHEYSatmD62jQegpr5ovZ8436KWmZhc444iDnuGjetTcQw6KrJfWPGwzz7gj",
  "key28": "2s4YdVoNpho2Rq6PRGPPLcxJbFBMdRvubuDQnefNUti5wSM6MWd244urQVLdz1iXpHEgZwVsJ5FQmtV7UaeCs7J3",
  "key29": "SsqKE8diLkMh9uEDNHmS77bGhFMaTMKhMjy8KFMP8Mknof5S2PA1muY3RPwjsrUDBfsPKZvHEkgaSiK4bmVkGhc",
  "key30": "1GErbhxeZKCMtMCW6N6TmExfpXdzQxK2uWsR7ppRATxX8KS1sAxmNssJ6cp8C3urn7qiUePHijrgNTC7TZpw1pT",
  "key31": "dHbARG3gqZwW7xsVNBrkds4ee6yePdydEHEeEUsvncT2bS8xnSYvCEZD1oU1Z8Hwf1bh49MViTytjoKZ9takkhv",
  "key32": "59ZrrV1mk99CGsSsztYTASRMFyd6bEW2hY36rxq1rbJzveoJHAeqyFGEmbBDWKAMvvUP8QxBmCMB8TAaeoMsRexr",
  "key33": "NQJWbLQpSnWmS5GpGSHijMLsiFMLf6jeC58HPVWmtu4qwzTQ4gAim45oKbjQoeRUEr6SCAk9aGu8KQdj5GdJW79",
  "key34": "2CssKDEyqn2JwwLTrNSq7v5oGRQQV6ejiTxn92W2egg8yhd3osQVHZhxPiUw4EmXkQogFhsGUj4TfELfV8XNQv3M",
  "key35": "3HUzDq1qaxJ5QaMvMbf5nfgztk4F6JdHxhg2gq5dRsW15FDUJyHSZ8t61y9EmmbBhXKHSevm8LvLbJVQGAFcAWnz",
  "key36": "2c6TAnV8G6HGf6hGRjVgzBgtKxBVZZ7NnvfUB7MDUvRU53QRfUWwWSYN4BFSJGYzdanW6hA1fkXDrmiUfWxb5Kx2",
  "key37": "3Pbw5B4rBJqKbDuzAzFHRBLsUz2QpP7jfGexcAb5CLms1tMCqrXvm18NAuzMD5wuBnjsenAb1W8MdD1cqfGTjJJy",
  "key38": "43yqZbrKzQm87NTu1Pe1J5L2VPHz4B84F4fDD15hpnQ8t8k5NzeX9GXP9CMktTF22GF2wUsTVwZobYjViMg2zqM4",
  "key39": "5MKyCkNsPbvHtEjBBKpApMSF4w8RGThvJp4YbzDPeFPyZjtsKNYtX4juuFuqurP2BZk6QMZCzLvPTgDshFD2xzhS",
  "key40": "2JAadSvSix4a31p2Z18frQytgS7H9reLTAKUoWQSZP7R9HbQNVA8bhecrgFLvULDqGLZFhrkwhDBtYw97ebBhEU8",
  "key41": "kPSEEmawG2n6PhPbCEki3JQE3mzezUfkG7T98KpLiMKDR8LzrF1eqdqRXHiXAcxkGwgktqWyHuugTnF2PmBkTPf",
  "key42": "PpYKmaDXjz7tYyjsNmsG6iW4LJSr2aqjJnNjiAREc8wrjbLWFPK3wSZ2m6UUJ9KL4b6vDwY9GkMiCeur2S5NzU1"
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
