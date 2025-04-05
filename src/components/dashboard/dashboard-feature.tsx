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
    "3Vwr8NEi3gB3neqBijfuFUzfqw3UR58GTGiELPekCW1nqaUAgU5boUQgg5Qv6hCPWAQgS45RPHTCn64Zxwmrzwao"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PfnbnPY473CjiwH8WnqWC73coNmKJWXt8Gh6e79QgGda81Gef6urJPvdEeswpuiwZVifc7QEWTXEAaoz2nKqwjc",
  "key1": "61xbNraXZtCD26KBstjT5UTSoCu9eiCLyPgW5hTFQtgsVh4TGAt5BLhS2U7VYQQ2c6EgkSuhFD4HkLjqPgG2bSY8",
  "key2": "hWnWYErA36bavV2N8a9zJCyzSgS3eJzoFkimNakagMzy63Wm5Fnq9nnk5Vc76FCxbCktEC6NK3E5TozrzjF5dvL",
  "key3": "4eip9bU8EiDRWf3P7y5fnnPu2sjsPCQKtJRuKi5nRghKAovw9WjvQHQ7B1dSoxcZF6DGaCUFLbtikL84Zpau2FAk",
  "key4": "4tThaRoskciZVfCLgU2EVePQ7rYHT8vi5ahsd8VfYHi2bzEe1khjDUuLmbNsQGoJ6iUy4hEXCfDgup12CFHe6j6e",
  "key5": "27aFavPEbJzbsqR5zc2uCMEdZPfeewLGqAfLYfeYWd24pqV8tF6WKZ3m1VCvpvTD2FgEhA1rGxUWApbkVeBznyHS",
  "key6": "ZAyzkhsh2ad5ozVgSSjxeR1WMPu3x7QZz4NV8fQnbdP1qJLrqj8GdtM9WSKpMo27P7ZH8sy5itenWsXPpLWiPnF",
  "key7": "2G9JoLG7J7gwb8upPBfNnKbpssYueavtpy6HAgX6aHfPhARmJDxtGSMLsa9pxKq1MgSBsid8pWAhvfRLUxaNfNpY",
  "key8": "4pAPx1DzWgjZnwvJmtxbjXbh648qkVpEHk2GRwFvmaHKrBXUTBL1d8o8St9yKB2NaAZGcCBUePwjNcRkU73pVhT3",
  "key9": "3AWBzWnxQFHdkdN9mhguV6eMJgpoAzTHPefV2GJXMePbT3ao2omNyB69B25mwBcT1Wwv3kXhrVeXx4ehZ37VTfca",
  "key10": "4v53Y7Gcuiz9vCifT65Zs5iR4JQ42Wb8XSFG9WKSC2VJM3L5QXyJyA6fzo66u6Atwwrq5L3zhkQb9csUN1kDJFZL",
  "key11": "5D1uFb8nESkP1wEmcuTjvegXU89NdHhej9zdbHPwtzPn2yYbzgx3NJwFXGN5RqhK57uQ21Hg2HhMwBqjRpz4DiQE",
  "key12": "4fwReLhYCevqcFQ3TASwPFztvGBSisCv5o3DSUuCYGEzKMHK1JDZquzEuLTvvKz9QngzGExLqf3aR4kmS5Y61Ncv",
  "key13": "5LMBes5vzcbhePhxjsRi7i2vXtUDJRL9VuXUZZgPNrF5DrL4FyGbL4gcXA9Ur15R2BYTm1ZTDSvHETb8V9UU4cda",
  "key14": "4tLAC6S5SVuCXVr4kT7nVtJvaAd2D5BSm6LsZ487hzrSUXVWS6jrcfXPTsWpThmwT9adSexsyPigt3s6RNjYeA43",
  "key15": "23nWiGQtA8oKZuikqqdxHuXCLFzmnfuxUSbh6e7JqZMg2NXW8d6TvfYFhrFtgQqY23ymNcD5dFxfoU32rj3G3369",
  "key16": "5maB1G32Uf9CrSwao2rodSXuuT19FBcaBfDoRfDERxCKpuNrk8ynEbF5Hppa4faCHnf8rHNHepkBpt5QFJdRtRK",
  "key17": "5HQzB77kNzLScdEBhjzKV6Hf2oooymvQ2e8WvS6ovaVci7obcPqMLPToJc2mdXQkr3TJEKvrnmntWzjqyfuxgf7A",
  "key18": "5LVrS9XDc1XS6XmEcrdi73Q34hRkUW1pmM3LNkykfEzEtHUuSbD3uftMrVjvNjLHwJYftb2iySjsG5erurpbCKD2",
  "key19": "d7NDdxnXLFeiXecB9jXrT8NfZKgedtiZGtYa4iFiDDMDfw3EAm1DPzMqVj17GAWn2ynSpSJLR3ZwN2EDC6iZSvH",
  "key20": "3rXZVh71ES11g2Cmd26fXqLh8scMotnUnMXTm4P3AxXuT4bv3xGUDRCmuLoLqZj7GFjZRPfP1JJA7YPzSaqDqaxS",
  "key21": "4HsapTGmbqWZtqfNCkq6GszATVtkR2qZBxUmJ4vgprbuVv8rQmL7QVoLHvxT5VbHArSPUnjSRVoi5V7i19W2GEAK",
  "key22": "3NwTRZAVi8FeLW8TS21mhq7CJxmwte3WUuJaeW82zraC7TjDWBP599mkCsJqqXSzHuVq6vMyVrX55Det2a4cmNN8",
  "key23": "3GmPe9qUWXJQF64pwaennqsV9wmxibhNjHZz5sqXpdAXo4JBn88LdYv6BdUPNkmy5teWZtypccM3JPFom3isKsk1",
  "key24": "3yV4iVbEPWWrXx8vwQ7dts9V3rwYe4cjxXToZwpVdUpPUoftFs8NNrPAPgqMqZ8AYBAMBtw9qPLqxbTysB3S5tPW",
  "key25": "ret7sSRDR4gmWWfH1tNNvvMyMeVnWWhYn1hKMKsT6NxrDA9iR53E4QL9TtbeUwj4crQzx59kZBPKeFfpnRRXxaV",
  "key26": "5hoVj91FDLUSWdsido8NTeRijfdwx1fAT8ga7qaMrukeFSGqUq5M9h41tpPrU5xE7s98bFveJfNfW2f48epfmbFg",
  "key27": "3TuvaKvF9yFJuXdcsyaYXC3P218Vv3nEF7Tdi6CCnXM1fQpZp4A5JHWVtgNvjiXA1ts3WchxJXpM5szQ4HNLFdqw",
  "key28": "4gS7GBVt5F55tetXk91fSpfUjSE9GizWm3rZy8GZEAgRW8SYWzoc3WjKc7C6dNdmJn2aeDssn2ciKfNPMNf3E9ov"
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
