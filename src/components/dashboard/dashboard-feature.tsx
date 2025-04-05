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
    "53GbTuHdHC4pMj1vW93GfaBQwfSpXb63DYkt2jhdr1WcNhk2NKEtrQidrZ6HKUcaip9YaaXrdKJGaC1PujqTRazu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "95ZTd81TdWUoknhCFX2VR48Gdun2xa4Xo8ta3YNVm1ty3X5zHem171ZJMqGC1yjM96G3R7GhnA6AHLjoUwiNfPv",
  "key1": "3f4v3JpREHKquqgRirBFMh25KkGh9eWH3Y2Lu56R1SQYqWaL1vet5zqosBJYkEzYgG7mPbF9kXg7sSqNAp4JVbEg",
  "key2": "4zDDx9s4uSnS3kgJMHVucjbYz1PDqiB9nbkoFiTPU18o5PbocBs8388Chs7Tsfz9SYkFas5YUHBnongMF1bG7MVU",
  "key3": "4KN18ymK9i5BzwsaMx55YxjpALqGxTp5daVYAPcLdMNLb8GhojFhkKsUfRcyc5QTaHMX8BghqHXcd3itKtttwEN1",
  "key4": "4bj6kbCy8DjxmLVn7Re7bVsMU5NCSZYmk75cwHh8R6htvVHyn62QYJ62Bztme5mUw6pLf14zKutRuioCZLbmb3v4",
  "key5": "4HpZAsw3reXHQGCiSmSp1V4vC7LV2mbxtAw7YsKmDYfG3pLVUJzcXaQdsGnmfBEGVC1ewACThDDfKsxb6gPTDhSW",
  "key6": "3auJSQkgFDcivbXUACYJbFa5E3NPcy4KZw5SZ4U1bp1KPhJ6v9NnrnLtBYTr454yBvexbotVFB27hXvKYv4PN1AC",
  "key7": "2VPiJQErawHh1ZjDiuVt85ZX3JjwBFKVYBRAvBJYhB63PxuhBzLY7n2ThJank3rN82KJto1EAXSGYz3k82vg8N4J",
  "key8": "2VTY6bcLxj7EvJiGch9khCXG1FuZ5L3JsFSdL4y8YFFUop5LsmcMKhiMfVDXnEe1PsJkAJgoju5USZduatvFMAEt",
  "key9": "5gHNpbHNkFPo7RjgASdasAFkzf4jd9vJDqNEJYDftQST4tKA4kJr944MnJQHDBvSQych6WwvWUBbhM2GmnbFqFKV",
  "key10": "NEaYjMJHRYnLhpFdid3S3FzgjJSYEt37XbrRnUfABrPzbXmi8nTCfCeDkJHA79FW9ypayG93xjaY9kxWGfAW8Nh",
  "key11": "3z3yyGn4Wws75ALo6b2jM6qqKRxCBMsck299rUAuTYNFSVQbW7aEm91ijv51RpSALBJ5FE89FyueBm7LQcANAJH1",
  "key12": "cYkpRiq5ie3zTQ9Kb5i2Gs1opJZJzjCYZwXUpFEcdm7mZPouXGPUhPZ1Xaba6v6Q5RUnbsMsAmWMCiAEMosH5hq",
  "key13": "5a4pzAL7Lg22fxcZy6oNpGfXYsT2cnA9GmzYmnFXztACC1U48FDUgaorYpwJwzC4afnwSHZFpJYe55nHtQvzUY6J",
  "key14": "4KWb1XU9zKgWKQpo3dBnmEcwJJGGGvKjY7Cd1vibqQyN7xNPMppY47sX783MzLoFrEnrizUdj4F8keK5teP1BfPF",
  "key15": "3avgh4hKhoADi6zdo9V1caXp1mcG5adNPWo1HSBvK25QhTss684opkeVag9bDGYu4Tbzq3rE5n3SvjXBTSr6b2qu",
  "key16": "2KWUu8FfnhUXdB4xwn64omSQLmge8pADhhvUNwKgMCL54oNh5TujeXrtR9D1SF96jecpDz8QM9S2oMG9fLVJH9mt",
  "key17": "mDhDqxMxmtFBb9dbfr5G8fFcTQDAkbuER35gMsVusGhGTQJLzdPcxQxeFpR9jeqWAp2KzpxsicbbjByYdXDzHDu",
  "key18": "4Yv4bXZbfbo1QQQxi8YYUhgwYjmB1Ju7epkbkQaq79AJawyhsfxu2KN98Fi3zsCAJYvq7oQAm4E9mff1CT3pWqE7",
  "key19": "43mN7tx9ViRKfa62YwcWos9Za7sxvmp7nmt6gjzNDhGorz4C5rupNbqKX3hyDbvay1FPzhjj7nawuEJHixEATiZ3",
  "key20": "5CgHq5hyt4w5PzCgg9tVVgyRwMXq8VcBFC2nog5H2L4Ki2wFRk97z1E28VxkJXuTNGdzduwKDFR5RHVrWXebEGZm",
  "key21": "52X1nWw1AnQ9scGVzCpuNM5BfLiQzENDpeRbGXZZzEjArCQVU8QFPqU4kcW1MbBfrwbLsTYhaTsL9Nb2gdwwMXoa",
  "key22": "3Mjtz7D75QmFR3asXquuwVeo1XBwCVutcErY7aMxstj6UELhF6b5GB6XsEBq8GkBqVei1VwoTAuNBGSJdd5Bv41W",
  "key23": "4Jz8cAmJz5sHmjU9byd79SfuVDuNoqdNKHr3HHifTjAo9dTrT3RDHSm7Y75J3tznqxLacfag2K2ZmKmjqdmBWsDp",
  "key24": "5zFMhFmEdoyWtV6fUYm9Nr2chQZPojBiG4hpByjZ7uCzRzJtnURer6QYxajQwnUgjrk6vUZismUSmmEZuzD3cJPd",
  "key25": "5Bk3G2dZefvJV2LrHJFP7G5ikSXeXbeVj3yWRVnAphM2w4JhzXV7Mk7SAXVCnWkxCdxH5Z4nhELBzGPGBYDVzSR5",
  "key26": "2MBzBUtVtQdcgznGspYWaVYpbRREjgRorqPy9KWbTGNAgr2GgwwHGsaCwSaG7SmfxGRUULV4SN3XfqaAazTYXipc",
  "key27": "6d54YEnhE2Hhmb4g9RR31PWyBZdCbzYda4AaYcGQ4sMP72ju31cBfwfWEth1UV5bDpaARLDfnQcCz3VHSgRQGSP",
  "key28": "4zsLeu82dSMKZMhdkRAbWJ8DEKWUJ4wbn4pyQKC8Are3HfG2LsgHnsaks4AhuKfUrGxzKNcNRZqB6JZZkaWPwME4",
  "key29": "42hnK9pF1utiM3PWxuDWmTv15Zw8NeWwscwK2jrF4zqPoRB63KrzxiEAMx2THywLJGZXeXexpbAAGVcrZ1wvX6du",
  "key30": "47WkZsTZY7D9AnMxwYsgaDbi4wUKdsbWhv6cdyyZrqHsCihgNbhfjhVfAr5Nk1jRFrSFEKh4STD75rbAWxz4uYY5",
  "key31": "5rCmfmEtLjsGUMe25D4yEPyNQasqffp7MspguawnFN7D4GjBmPnxPhoK8hkUFxMKWHaLgNdSXuLXbyGS7XhjBfew",
  "key32": "5RMF9iNcm6jjKkWMBP3xPUeqDzvarrUbfq3pSxri8hm5bEPvay8qNoJMVgcQqw2mTESb4W8AZJWjwR59iPFcL1fh",
  "key33": "8A3AyBuoZ8YD6e851mErH6ojzvFLkcyRfrTZtAfED9qwPqYwFHZQN17DjxVM4sUR1bBFHbSSFUh6uJDtjqWCeGM",
  "key34": "5JftP1qVgmd5ezEVpTtbVc2WwLPQf4WDihcKrWugdrpn9WH12dRqeo1pjACrLQC15NBiukeCDyr4eqmJRW1DWzdB",
  "key35": "ARnhPQYQf1wM6YSSwUfyHTwkAYoqnrzRcD4QUaVU6vr885LjBqqgiEnUUypTBKBMRHHcp4YQdwGHHrjoMQAxUVo",
  "key36": "2a5grY9WiHoWqqWozMZyw687y1P9N88gZGvAirWTqTKxbKoRHBq9Xtinjw5ANELyM5bQE3pKgYkwrJv4eUPxiLLg",
  "key37": "2VHbtjHENgYtLHRCZe4ryQ26kq1wGPoNxEzc7s5qUvbeBkWeNYinyBAquhmNUS2J4aQFk7m1ZgXNReV4SV72QT6G",
  "key38": "65RwsfXaQeJpZ4hbirF7tGA5xQSZTKiqbfovPQxVM3EocsgY3Zj4KCcmKeZ4TkkaA2RsxYZFE8V5x3jHrHeBTikg",
  "key39": "wPZRpaYo9mQ88jQQvt2iX1DyHt8pQVo56YLgHDmCKysKTc7ChYtSjagLQosBtVYqmX9g1AradNzQgWGLmyivbNv",
  "key40": "3cs4CXYo5tKgSEB8MMEf7sPBm79gpDazVt9VqzJdqZiCBfsgyjms8tjwb7TSgCJFmygqUQhyRc7e9Qvj8txivDRH",
  "key41": "2fQ3h8zT87jRnCpUPdYyA1C7NWEUuKk3hkU72oXMSVq9RDYTd44x3tnn2xtU6uALqfW1JVXr5r6EuqgWSzfMWRUn",
  "key42": "3jd2WQdzkFLDKoMMkvLLYmkPRDtGfE7QjXkXkT9zX9zDpV31a4peSmhheFayvxgxRvm58BaouEJ3SmXzj2GGJDev"
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
