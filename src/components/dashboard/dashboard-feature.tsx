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
    "4nkHrHtqneA4dX6JXtYviSqito94mq9ThiwQ531d3AuWJFdzVsH1n63RLLTCKxnUm5Es2FXip7eHjcF59GLhu34U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1zgtbjXxzyhX5n4BZqWqzxd2tJPdDeTaZP82CG1nTqAK9Gu16cVwA9GbtFuomBr6fCAgcTcqCeAcQnuA4LF83KL",
  "key1": "4poJW68q4WZekvSr1rrqmgHAT927zmmkaavwnn1GPByH6FSCgASSLdpSMwTxrey28xDKW3XQZdhDDiPkAjimLvJC",
  "key2": "3sYVUSjmhcQEw9U4XfRyZgMquzqqa7NML8MnYbPoWC5WYSNTeoMgr2VpaNUULe4Dzz36FsNZ4oimx2JrvpCRkDxE",
  "key3": "54FrcPshCNjpFg9kC4zAbYCWoyyAurvzXfmuZxLAGMcqn4QbYMN7FvUn3oCggTnFk3g36Uoyhe1jkTxD7UbBUnBV",
  "key4": "aRRyNhXbLKPK7FvuBsPwbNK6Sge8UVQVAQ7TqFe7Bx9b3gf5KaeiNSungKbE4PdEN5G7fit3fFfGJiTi9jGnoYy",
  "key5": "3dDXGCyQ5yMN6fjDxYAmDvFym3WYZYLj7e9UnfyJiT58LybsyoEbzvXZcdbmivBTeqgKE363P14Ui8mwAbNhafKh",
  "key6": "YRa43XRX1TLTUzuCVRNYpZ54vVTKttf2Me1yLhyYSkaYyhoxqjSA3ttHpKXpArRmTuKTdFDfEUrE7uCHWzaLthC",
  "key7": "4MyzRtNMbEPRCK3p9M2JEWagmg4hpDdJN2XmC9ePMn1aRgr6yasSLmamGiLwqJDTECsAxNzGFT2FGkzK27gN8rpn",
  "key8": "dZDCU2VyhYHeH1e7GTjsdLrKATjWsc7cLR8TPgD2taaVjSS4mjeTZFj1irKgXtCghdZ65YQQLsUTdCY8CgLjf2c",
  "key9": "5B9a2iTJjtMEWGanPp7sXP3pwQZWuBiTR8EN3iqGuSkK2TWpcP2hdo5qrsMeLAmSrMBPk6zp5hwW8oDeG4cGeRRX",
  "key10": "5aHGF9y4oqecjfcqSMy6yB5qeDuPq42xXpVbbarN4vK3KXpHKkEY3wpdcjgxNFN58J3YoYMjM2EzW8fsuPQG1cNm",
  "key11": "3azrwGEm9EwUehksc1uog1tFkXaS8Vy9Wopxopx59XybutuinbMXppLr9GXdXMPGSNC8Y5YjX5Y7wezwaezTbMgG",
  "key12": "JdJXrZyRPCidLqcJBFZseizNot7NGrDGD4V8VDFDoH4nUeLdvvwqQ7BAPJGFohUm9xcJ7oUrQs1hsYtkjssYS56",
  "key13": "2BJMxzi8UkvrY3M1oWkD7AjVSYPvtqa1UD4hRdkGC5jfN4742XKqRHnKbL5DDWW1uzFuA3mavL7yaZagVoYtQ9Zx",
  "key14": "5xGD39BaCBRgX1G1mDsV3MdoccuZzuB2RsnK2EVevhH7KP8rJLeas8c9Kq9gTKGrm1tpWrqHcjXTCie5g54Yb8nC",
  "key15": "Fw7kfThnuxK8eKCB3VsXi2SDLJG5i1x6nXYnhcSUBkkb2DTFSzjMzDj6FmmA43gsSR6XFdcaQkS1eFX5HSUPQyJ",
  "key16": "omg6RJNzJgG6ZsjyP1uHmLhcdQEu81mVFJ9MF2eayHDgW3aQv82UcSxGkn66fCBuAoZYgesHsT8iD9kqKVeCjBy",
  "key17": "2NXZ9xMBN8KAGb3WheHXdtui1KfGptR9Z1vwyBgfeQpdX8EUf5ZeBYaQ8HkEETJBH1uUohw1HCSJYWx1YkmFBSDx",
  "key18": "3ykftRQPkamFqtjY6rzjfLyANmpmFrQ9VWYrK6ry7m7xAxMdc8f6nzYWhapVgZc9FeKw8G2UyzcQkm1kPMMGyBp6",
  "key19": "5HAq2J3WpkBDte6ECiCjmxcNqT9pXUTt6gBTzAd3oH4MToqBoH9U9AYXuQR6szdHHeTcWMQxjP3Nc5TK6tboc6bH",
  "key20": "d6Tgx6Jqk6CktZPXs315SzpzPbcGXjXEg2of27bMhxVurfeLoGpUdR4UHgiG15CBiwHGLEa3dLMz7nxvmtMi9sd",
  "key21": "2WUqNo6FxSEbfgkvoMiHmF8bcqiRLxCyba1zChQmD5DuVeRkU4LWchxte4MDG8ZdrFekzsocgTWX2BEtAaYfEUjV",
  "key22": "3Nkvhw1WbgFGP3bpLMvVFsGJTYfEYApxFXqv7BU4iG5ZA7JcT8WE4Sz8iow45MHGF9gTX9LLPvN8aYFv7xupfxC9",
  "key23": "4Bn8yexBdqCsGCkqXUXoEa4qhB6vy418kpVotu8eriySJdNyLB4EuDpiN6wyquRifBjeVHQccqtGMmtbNfLPY1Ux",
  "key24": "2LvzUdD8c7QmHz5gzPJskwKmqQpbt5jQ79DL29tz6uMKDr8v59cU1HFUZsq3iax768vjkC7d7PGa1P87Qqtzf6Ji",
  "key25": "48mnyHU4YqPJBuicVn3P2fAhem7CaXQgvWdr8w9bpVNpYZ5gmn8rAohKVtgecZA4ZN7VrUtm6qL1ABEqbV5xZBxB",
  "key26": "5MwNgWMi7Qg1JhhVDFpCSsi9o2ditX7GkfHW7R3uWrMvp9BhGppNNQsWrCGCun2BRQY11u5wioEVuHcHAD1hG16f",
  "key27": "2Tr6CuPXDsMr2U7x99pgxQawj3cu78H48p4vZTxkNzKgo7JM5cm2Fdx9rFT7Qws4E2autQ8TfNbMgd948ihh3DYo",
  "key28": "44bupPbHnAbarz8rNpaTFTQ5kEvqFfKqkd5VgUvS53otmwE4fgN2QkLcJVc4R4G7RVEX5Qo8Zz4CFdChwKDDSw1x",
  "key29": "4cFUjTZaB8TGkyWGMvJpLR4yEZGeWHQzScr8iKEnVuE4G35Vguqks8oydw8Km77MRuf4NkadgcAgZYKL5bYHvmwA",
  "key30": "2MMyUWReWa5e1LVif5TyxkoJKm3v1ekmBEQDXPhB4r4JXGhaNg9DkwUQvtFiDav53341V1mvjq1Ee11tCF1t8f7E",
  "key31": "H9Q6U9J8ghngN69d7DGRVSecohwErEhLYj2JgtXg64jMbGqeVEET9CphJCHrXfPkgbRns8a351et5RMR8xTZnm6"
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
