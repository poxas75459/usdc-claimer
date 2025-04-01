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
    "5VwywdYvYs4t6Z7xrm21HJyskYhUtNfwMKuZwg8CEEM1p6Dz1XtdnW1HZJEwNMeUg6F7TmcQfEwCcFPCEFwbYnpU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4H4MAeQZ2Kaks99DcR3z2NtxHpU9d3RPcLzBqPDyTDf8SCGkmWJmaUmmNpXdodiFmcbHGzLgFz1cL8yxfWGJEJ8w",
  "key1": "2G2XwZ2eMBrRvcGtNjSZ8AetpgMZFo9GrwmYCLf1HGV57sZh81N5fcrdQkvKSKU7qhZwj4hs4vKCRYRoKhaPBkJN",
  "key2": "2rX1Hw54wgBGWy4drYtN6gEx9R4sQ9nw8ib7zHRxUATYyGBFygBNuTb9yMFb4DxGro3ToGACgfWcJXQGFg2iijjk",
  "key3": "2L3pF2S58uP1zzhZMy7F2hY73WRCNGkgwuiWsUNRsUdhHnvpTM2jtrhkQn1N6LMeFN3te8gA5e9YwDbXHpyDcbYa",
  "key4": "M3wjpgnex1q8kBgrEjKbKuaSHD5u4VULJNbMzzSzX8csp53WF9ZxzXJZ57yJAPmuiSH7ZxzRrW2cZQwzDq9DrKx",
  "key5": "3dULfis1bYeLAseatwyr5wvDHtvLKC3gqqERje6VPQtSGkK8LpPsbif5fc9f16fx9c96n4sxxqsvZAJTrchYTX8p",
  "key6": "57eeXYcAJ4xUcpBVwAjMvLfEZdmKmQoWPiCrxxAqH2hzGKid9wArTATKQfZ3a1tKZTnANqvzPFwbGYj94EkLGAf8",
  "key7": "22mFakwFErn7AVoUdWmgtYADqqmMfVPw99m4y43gRJeE7Luvfh6EEa4LKoHuin96msXzhhMN2D7aRsTWms8U4yWa",
  "key8": "pShzGP8vS6vWinTgcrqVtfyVBEZwvHmi31xKh6CTuixoPU9DuYL9DCxRXgwp3jHDmiHStkPaP4MjerXjweFtUjx",
  "key9": "3Bf5Kqk1CiKJvrZcbiFdFG13p98oyxLpn5efUUCNamEsEhP8cD4iWkiSGbAaEPubQUBfDjP5izwZAKF19TSGqDsm",
  "key10": "2Yg3JUa5bQwDyDCYMsCoNzXfwdj6i9XDQEwfNkGP1v5D6iAeUVJLduxkTUavyV1atvr8KoWzDWHoGnz2xstCuCvL",
  "key11": "62DmrzbyQ36U33rLtNAgqX89k1P6vo6en456VC47J5xQYU9EejYEWzQJEdbFWhUbqgoHgKuQTUGxfGynhYfGdb4d",
  "key12": "3NY5ToRMj2NddYQWDVGKDuY42nJmA9cRgxFgqwYpGUyjF5eDHVMXidjQUAB6u58B2SsSJc496tLkXVB4EqzV7Z5S",
  "key13": "xRuvntJ5VKXDGG7uAVt1ghmCdFbgcX7j15QvKPTe88vcpyxAqK3uxXVGUKpt3wcCRtfuwhXG3kt4ns3aoGBaEq2",
  "key14": "45Fq57HQGyLHcfgDyfwBDadUpn8KzaZHaLo5nstoaZ4YwHoseeZTA7SBjBxmsP5BrvPYAZggUyNRGdjn6DyNspaU",
  "key15": "3p1sKKEiex1BagKm3PMEvQFFkv22wuAMPgAHenkUgoHA1MKbZzYr9FXA483owZZLRKAgFg61pMdkK1SHC23xj47",
  "key16": "NcJfp1bQDBpTzE8DZAX6rkdbzn1FbxCcJSZcLwc1gCBQztzk6SgDaJYCmmbMQdyPHU9eTxgfwGWCQtdD3LZqjF4",
  "key17": "5DyPe3hs9mUTX1HpAWT4uk9Cj8vfhZAwLU6aw3ynWyKSZHoUQ9QwxhQPaxYJp5gNQ7QPFYL7MrxmavU3N123dnsx",
  "key18": "3rMo24Lymc5qP74FGiokTm2TwWTqXu8HCF76qDeJMnu2zkehJGERq5YVH9S4uC7NoVxfdQwJDKrNKa3NS5e48DnW",
  "key19": "4tMFBQStDuDfKCXUFsMQ1iDre5YjTVoya4vwrjde3pbrdu7WmDoaR5vWLN5z4ypD27idEnNe2WdRhgTbL8hzE6LK",
  "key20": "JRiUSjGSus5EPh3ZphfXABZYwU89YPXGdsSGQawA76KUqwqRkXP49JrBXJg1e7utqGAMkAKQUYPfF3iDS3A5mZi",
  "key21": "4YT7YoLY8mb9aRy5jnWbUDzdmWRmvLjatwHM1Hnbo8gRqiSmLTefsfYGESHqcxLkVmkocXe9odnkL7iJR4WXEcTf",
  "key22": "5rtztPGTnhf6U3Fz442G81WKsBupERck4zgWqmNgUqRGQm9HcWiFcuNBAz9JePcb6oYt3ddwGPWnsMvp3vXKz4Rr",
  "key23": "5QzoCV8bcH9zcgEvSwEy3fuzEenmz6NFJkdCiyVgyijZC5CWpxFkUD1hT2meraZXCGuuCx8kvXrQZ3YHDc6KbmZ3",
  "key24": "4JvEi17qPiUz8uFUpcScBNjNdmpUGG4YnRM87nTgbXy4n1ScjpE59xefGudaZXR9Zezh6caZxdCZcAGKHbacMCbK",
  "key25": "4mEDNbuxtYzRmEdsm2pJUiniST9iJAFS19uYLNzgxCm5djp1xEnf2PbSe68HzKwLZZ8mgtdH3bgdXstqZ5Ef8Yi1",
  "key26": "2rtN7U2gkjSRAdRqd1vXo8EeD7pS4JTCyvGJ4drEWJP7M8pSi2XN7xKoVmFNfdJKHWkuMfggkKzdzbnxvPmsXhgo",
  "key27": "22LYKXfVucD7NKixr9JT8hNNckX13DfMBqLmJ1xyRDCCeBviDiE5wG75FecVgkX4koSYgDrPAGGS1Su6ZheqM1nC",
  "key28": "zEQkYjP3XsVzhyn7MVS3F4vaWiYogYtzTdRxPBp6mdbKaAAd2Z53Lau3Eqj9yBqjgUCzWyFZM2u869ePd22V2Kb",
  "key29": "4qhRV5A7uSwEPoXzdSr2DLiDXu58kqg8QGPQ6XeSyEgPCHQBFqfQzDWiDQgLZKjDuAHGH1ArMsJko7Ej838oricN",
  "key30": "k3satHzsSYiWNJUYNWUYJsy5CK9ZkyBAsAAZw8j8x5mMevpJ7LUHEPRqTPWerm5udHNVRCeZ4cGSJqDcqBqJURk",
  "key31": "5PgZ54QHg5BFz63trjcgaHAHKAY6NKqbeWgk9GPt19agFXyKYfoY76L8T3nP7UAYpeDyY8M2iYg4TgkcdyLDLtEo",
  "key32": "3Fa8udtJPgPjzxbRcyo5vXzgkiEvdE8dpndiBshsBKqbawhwpjRpivS2kxxfVFQYPQ96NCxYAH7CWMtdP4RrRrp9",
  "key33": "2QAJFdtFHAKqscoPyd4iEwyhV5NptQbSjLEXMEK2ewQpusiEh6WfY8TaLiQaegHE7oVbwroo8DCH96Db1aNxQAc6",
  "key34": "2UhRSUdm893p2GSijdyByA6AmPd4VmFXetJY1E7NnQj7E2aniL3xcG32WP5EYgEbMJqoAcZ3ytZNsZWzhtpdNPGn",
  "key35": "4otx5D7jnP4Fi3hnZMy9URUQfp8NpzrvLHAUkHFcGw6sThyJuHCvMvW5cavmkwe3GdHKAMmKzQYp7JBkKQyy7aWn",
  "key36": "5TvEGkugJS4ynCw6cMbtNLPZN5Vct1BDSMLGyNYWJqJV65MaUUJQZ7SsYBcQfnzojoyewZaBL2idWkcmFqrUt5d1",
  "key37": "WEQhoxqu81WdRobYP9EuhreyLtoJnviEHx7Tk83atsLXtDfLGzUHnxtzXfMt9v5yyNpFKjBDCV82Bd8JgwNtDX6",
  "key38": "KVhHXpxEq9HjvN8xpJVujAkqszjN8328xaTUGgFe5V7Zb7uGNZepjnQuXpx13aMjpT7kqbabzawjKGiLAnqe5rX"
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
