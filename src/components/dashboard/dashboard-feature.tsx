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
    "5H4qFE5qdcs7dA3rhfon6eGFaYE31jLcR8JHExg5RYLCYdWShfsBeAvoUwQVEvwKabYZBbcP2WdnvdvpzkD8ZaAP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Q6vLZCDrb8pamdf5bwdBvKjvgzZ7EoGsQypsDtvhR8iyLVJDemiDJ6jzTfxJC27GjLbMbCovswDANgrY2dEyiyK",
  "key1": "3rPXH9QWvTz7Bceo3KsHuvN85M85YZezwrPHqy2H3iZZVi3q4dtnFDeapoEEZiNpDVni97oGTu6i93k1ChSYZ3zg",
  "key2": "2vJtiKD7sf4MRHjYdMac99Q8Ex6bx1DoTRoyLHifP7sWsCH1TU2RmVTDBTWo3UbCTHEbLJ66k6rHUberhCxoHzby",
  "key3": "3kmAM8o9jCDRSdpS4jJxmj8SWCkefCvTstT6nNvJcMNLDHrTGbeyZNVyQiKkenaNRFvUYgeTkxkYFvNQ2ECxcqCt",
  "key4": "Tbag3WiHskTTbrgR29vubbpvtH5wq1rjCsziS31znpqKEPghjiX27jC3GhVeP5EwEF1DwiL6TZ3fdFca6gqi6Ft",
  "key5": "5M7nXkLaAF8h2wQ2uQ8AivbY5ktpTqSAUBLd7hCktyNyd7ohRBm6JWCxffpAdGnvnxEFBMQprGeXQycxze4Zdm4J",
  "key6": "LNcXUP7uwM7Ep7KCom9DtdyCS85ZZknQfVKMSKkY5KEw9FrHiEjteHV1ULU8BdSVTHhFWMXx5wPdFDdRUu3af4L",
  "key7": "5K5cLDAMuHKzexuiAjnUJW7Ds5DDHr6C3GhmTUYP3dMC5xJeRw5iZG53BfVvn3S3s2HWwkBY6CB7Qu6utD4DYivU",
  "key8": "2cmWRM4vkypQVZChdm1bhrm96fqrEoWUgeYBCDBNavJyUHwj8U6hQfgUHStpeqxSJkwixJToPvM7ncrZ1F7ocVxV",
  "key9": "5hSt32f3mnQs7vf7zKhvYD5b2LMWpv5DzWhZixt9tjgrtKKW2B3nqodWv4QWsLdHGy6DDGTvLRNqacNBxob2mFoC",
  "key10": "3Lj34VCPjGQpsaNGHNrEqvuW4CK2evZgD7bEQqqbhKK5qrFADeS8amZsnutsnVyzxXgfJ98MgE62EDsaGscD81Zi",
  "key11": "4HEvkKYy2bCZQjRgF74Cw6ZTPGgvamXWVaWx7pCUEwma6xCUjrKfy3va7xjNUnDYenpGtcxs4YRo1Lmywvd1cXFx",
  "key12": "4vaQdG4fryExrMa8oy1oTegnJ6usHR7TQSSwMcSnhh9jKfA7KBBTrfXC9WgoYjuUZU7Y831WLyawwwwwuV6XHCXB",
  "key13": "J9zikHpgEL6SY9DMWsfVHwBXYk5cmS23wP7mThzdoP9j5bY1YkxzgJ9TkFG5jvihcxQfi2nxDi18CU6MYVB33E7",
  "key14": "4b671LLPUGJ4b3KiAPaooetK84v6CG6RBnvYRBBpJu9Q7MQqAnkL5AQjyQsFhxscp5K5MRFdVA3EbwLYyASnBBbD",
  "key15": "42VCL2G7kX7d5bRsHSdsceRGvxASytkFD5aNpif1Fwzwhzz1Rc8PxeH5oy54sscGAfnFhfqoRsDen5AuGP4x8eVB",
  "key16": "3yzErvTG9yFvgBqUp1RajoX3iArsUJoBHhdz3zbTFz1f6NeRrXzh4WrYLarwGPJznrx3mdUNSzr2iUoGrbuSoEgJ",
  "key17": "NmUTcPRELD5CuFnvF4fdkVjuxRzuXAMqGgAEYffBoi4inJmyXgAA4vbkmNg9vaiBCkAd5VvQWch2SfuQYZZu46T",
  "key18": "rv91cux4ktMVf1RmeYWgn1AbegLSePu9mm7u1knJHqP9XyTc8857cV1CKW1z42XvrrX5jz6WzYwJseCSX4MTSMa",
  "key19": "2yk58pdwbmHCrd1qLLShpbcjn1tVEMrcKqgjZLgWt26eX3tQVBD8xP6ETQVedfZNaWCgMY3AiB7xZFeDNPgfT6B6",
  "key20": "2Z9M8ca94seTCNmCSW5iDXQQekmajjncbSSksszg6s3xkdmbZks5F8QD8qBkcbMPGv2KZsdK63yGp1Vpq8a5Nc5C",
  "key21": "43yXbDzgU8RuYSx4w3s3ZDW3cPeh1rgZcz2GYviBSNfQhqejuektynfbaabifsttWtQwffFkMx7WsExe4cyx96At",
  "key22": "myf27qeMqUGTuuRHckAXx9qngepqR5WusLYkqsG3Zsd3WicTsuoteRH6HsgS1Wa7Rmv3a8a6Kk15TxNKhZhArnY",
  "key23": "4wHaormPGfMieXs5eR5WnwbAPdSFiQJi7WkriqnEcW8kt4TpjhFcrQkUhftiwbkhtNZJMXAjBpmFvSFw5LuP5s6o",
  "key24": "EiXRx8tWYXgCQFGQcXiDHQ2YNff7KmsjGia17w9rAKF2BcZXtP22r1nyKN68dvvH45mE5C3Drbtc9r1oVi4jTFz",
  "key25": "5WkT6C8cTF69daP4hxMRFNN3zDbK3GNMzCKAixksD4m3dK5WqXoTPtAmkR8JD6jyrs6fGfXuPNVxazGEE46xDTUj",
  "key26": "4HgVz7bFJRj2oVe7qVeiZZxWYMS9K2fTSmyUa2UZVmLofftKnjhu3z8rkFVqLLV36H5RgUsKimWZuuMkb1qme2Gx",
  "key27": "4NXgyQNSBDjX2a6A3csrj4ibYS49ReiqTCQv5ka8ePDvZJ4tGKDr3y6mS8wWhhMy7mCQYy4m17ZWyuCzoe5ULT8S",
  "key28": "LQs3htpC8Gt3pYbMAmTK1QwsJBW6LcfyjZNe56jrJVN9JrtnaVTVoDMEouzTLLz6up4Khy9k2bo9j2VEs9cPbiD",
  "key29": "3iDorVRLK89LCbpuT9N9MDaU6m4pfbCwfYJX2tdUC725b2Si2L6F597D2M7bMhMnZe8yovs3JbYzqn2nTWkkXV44",
  "key30": "4gy3puRDTv3zyh792Nxj76dUjgt6hDrDuY3CNq4ZYnrmJmBCTnDVFGhM3tJff67FmUryjNQbSjj7sJphJ14hbacd",
  "key31": "3LEWniZgafcaJUupy4dj8JhCKVHekDAfo2C9yCHKRsBCxhfxwf2WPgjRghq5zmgDuJEbVJ4hVS1pUeSou2o3PvxT",
  "key32": "25BaWYGeDoVNrgqYsp55uBVSwZDSjfRpatyDVDoiULGb9qW165UmiNx612CZ4bbnZgpcWemc9DscToF7bqgMRHUc",
  "key33": "5BLdgfTfP5daXnwt6Bedu3bDyf1KrCMJVQkXbaddV2ir92u2v2hwnnJcC537W1B5gRnU7ET6t4XAHJXizRKVQHd4",
  "key34": "4xiZY85CBMo4uiDULp2ddKaZDKPnhefETaM6Z1PAW3DrSiokek3voWuAU8GUppVpE5GA7Rxi1ZvSwyMtcmkuQdPo",
  "key35": "3zin3sHnet7ibAja2Jp1G92HN8TcMfNmMZFcPkY34kgxCPC6ocYW5pCDQR8vvYD7aGavLWPED3B8WA4Q9w8S1rZ7",
  "key36": "4oo3v5nZ86ZXPPRE7idFAcpom4H78tGFLvCANy4BPvPFiV2JtxvpHTMefbksdhpLRHdaoxnxXd8P6YhbFE35ZyJ1",
  "key37": "2eABXwrVgWKVUk8UhZMPB1W5bzVMt482juN3QTcvtku39fT9MWCdsMfP96xy9AbZxDNiYRB4ZQ4F6SyPfAF2ZLvJ",
  "key38": "3H26SRGmdf4tg8r6DbTsxjuB7ETs1NZtpYiXHktjebu1vXAuCa5aqjFkmv9bib3qZE5gpELQcpUFbDqCsaUMakMA",
  "key39": "5PRm5FxSeJ4QpbSwVvpUTFjxWz53XSbYExTS3SYfCJoV8XapaFvx2GcetHH4PsWoUt1zdiuVMNRHKZKzVZqWVEN6",
  "key40": "2UywDsfahF66t9EGHLSGpZc13nXkzZyHY9w1v5PngBjLsxwH6t28gjQdYFjobayKBfio66C6bKFzYyNQopfAvurt",
  "key41": "4iUCvjssf4sCZSsiUBtjtm777Sf5zUEdQmLYxmP2y2T7pyKLTjtDAg79VqABYTkUBLjqcLwkuFTU1pu63q7d3uTs",
  "key42": "NVDft2qJjem1b1LMRXoXpXagm8fz4B1AS42heHqeSiBvtfn8DnF8rQ4omXGwj2qCMhF4UdEc5yhhqznYwELLM68",
  "key43": "5XMTRFeY1YhBoRMhjjw2oJX4hjKFDC4Wioyv9HSEEVw6EvyN5qAoYaNQZ7X6oUtdLRSGh2FLsGLdcj7vP9VUJif4",
  "key44": "48GmXV1KW3hGF3qV6xK2BDyj87SzuRm2jcRf9RTfzh4kmbSgJ7hC9vuDN9ZguFUKoGPZXNUwbqqCLWdPzfFnDjDV",
  "key45": "528U3nRU5bTq9RFACxevjk5CuSgGutjK3cLL9qvg1hGMGVfXqFWSsbJPz3hzHGJ2Pdrkd6m1Bwhh3LmBTULcbDHf",
  "key46": "5i5sdGA8WTtSZjsQ3q9sVrmsGXQHQnVvmXeZ2TaHnMwCvaKR8PGQMHvbYpT22DhDcBw7WGXmGKZTWn9c4ubGUM5E",
  "key47": "2f3LDwpKBsrrCfXsbaHY9ezKoXvpzXo5T5hndPtJvoK9mu1UDvwaeaum8CQumJkcQxjpmmHeZk1yyMgtnapcXUjw",
  "key48": "4fEodjLiv6YEeiMwPpKdZwK3h8DFRGBb5Dngq3fygYuQ5rRdb7A8ppmYaa9UKNXQBWqNnZBoY9r9wW1HjfxazhGS"
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
