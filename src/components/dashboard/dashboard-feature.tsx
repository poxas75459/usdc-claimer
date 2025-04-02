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
    "4VmKSqSsgmtuqZFDSMWGtTWDpi2DAbs5tFq21a3oaePFsUxYb1EsNWrnc8uks7RVcAmXYbUwNHTGfuRaeZbZtagC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RqmXuFbAa9oKubBYN4184BH4DbKppNK6ExJS3rWounMMfpaqjegeWa9B7Wi7AJXSD5H65vUWsV1xbzbUpjisdB6",
  "key1": "5Bix4E7Vi5xf9eJx7y9WxPUEtZw1qqKqekBGGs4rx7V26y2xLuaS8VnepC9hBLTkBMir6BgjqwanjE5eAJGxze8W",
  "key2": "UR3gZiEEMW1Pafr1nCpHjLctLRsyWkTALX7w68zw1ehHsdsF7msMKRd5QaVYSyzscPKkDaeoohGweMQy8MyD53U",
  "key3": "3hJ547wdW8zFDcfb4CUDMSJHSdSwY1UpeY9j72n17WkBYVYBEMc2V2dXyzzPF6KPbCo912WxzygU7eq8bU24JRDx",
  "key4": "voVFFEBf3JrVtJRLECZTTmcPoCDiPfWe6q7H65FpBKXofRDL4TMJ67eyemYNwG3MgsZJ8YS1LaAvVGjfvDuEPQC",
  "key5": "4kzR8HMeUunUsYwijZRzS5wbDQE3DJKDJ6qoW3SHvimkmBjs37UvXk9A1hK3817KCck8NaFBiftDWLd8wrpsSYFS",
  "key6": "AMUPWW8akrhxGWpZcaNjk2gcut35PRmU8HCnVdTSzLXhUWEieMtEDtBDeUS2YwF3nJaYNvgne2hKhfosjZbdYyj",
  "key7": "5FcGCR5dXBthXBK18cyez8zAjbXHmhoCpSzMW2tK42NTxsNcY7B2kcLTbnaNGRA9UcdzGiTCp4P9uaXo67DHsq1T",
  "key8": "4cvgnnKfrntCWZxAqsbiUdA8Pu7aGopFpb2cTpH5cu192nVuNX7RBxUnraRFQ7vU4qUa2JbjjzUNK8DsoMde2c6i",
  "key9": "5zNJPZp7aTqVzUb5jJKQW2xZWA7LKoazFTWjFy78P4vCBXoioLedFozV4PQibuR78cQDTZYP6QdMxLmoASJKUutH",
  "key10": "5TxECnqwHK8bkA3nMuuiPA1p7wVki9m42LxVbqiQHfyLxzfMwU2AbJQDYwtK2Cnu5WxYXVPcwH7y4X2easgB914i",
  "key11": "3BA6EGBbzHHY18WMRUZL623JcVvjxUkH1EUGXraMGdUvurXadW5655yYn6sviUK96fndfLc7ZHCfKJEvbJjwwhmf",
  "key12": "2ycPMXt647iibtfCr6Vf8WL9dCf39LqbejdKTgvzoLbXWwkDr5KcU1neX3FbSwGDXk2yx9jMEqX2E3xxd7YJTehp",
  "key13": "5aeZPwc3KYU8gbcPVwg6Xkq4a1HHLwy41MAMEDT4myu2WCPCZ6E42Xbi2mG16kGvVHXicyXSVE6JFQj1QyQdUdof",
  "key14": "2HpE5jevpzthS82LcggeNkQT9vhER5PyKGceDScSPERbGXt92y7crSM1stg4mMtDPYS8wQ45cg2YQSa5XpMGCGUz",
  "key15": "2BcgBFYJN7mwYLM7ZfZqZCVfx97qzhv6UoY7fwXYfDKZ8jrT6GYkoFgZ9NBnwKamToadSCMagef6XV7z6sELJEP1",
  "key16": "5Vpit8YowEHgxd54YeABuySVhNX5897wH26uULtnc9TXciVS1JLYo3MEEfSBW4bHfGfAK5j9pY7kS8kkCd7H1bDy",
  "key17": "3aiYjoWDEd42juvdX7sMCUJEN6JktArkvWZ8uzBf4n12847vhuCPM5PKRxUatQ3dU93GupVo2zvZQFDHafQwBAzP",
  "key18": "65Y5VuGQPYmxUBzpSgyqgkuxpLWXziuV6uQ4SbUkzkVTHrs2rYqzKDD2RP8pKzajYEJWCpV4yFYL7L7M4JKfBC97",
  "key19": "5BxEkohaphYa6WPiAYdgoCT95TkgSfELK4bMzXvgoEXg9Adau1ZEy2N2kQXNr3Jps4hX7vxb8QcAvwRhr72wM2rB",
  "key20": "5g58oCRXyHPoQ44TuQzxFm8ctpBj1KnJsDmh4uNf6pmV5MQB1hupK4Q2uUAp7rPsfnF4PATFmezybQjEHgHFkiY5",
  "key21": "CQqPNxLefaHGHUWPF84WQr6X9QShmHcrTFnH511fGbBcDs7F5PYguSuRHWC7QeWTmiad521kxnJnkNN6J7qYy9j",
  "key22": "65WwrtEXaLWo1GDJtbZc2c2Mg9mzxbmyTkRNX1MkPATrbC9Sy6uFseLptFMuuJKrLf36Ds4KTwZnK4hfqCdmLRzu",
  "key23": "3yLuS9M1G1NYKtynJVWt3qdfsxb9dwGVnKJJwXWQcog543hjhS5eoHSj5YVrrDaLGFqTD2MHSTZZ2iLwa1io3c4H",
  "key24": "5uSN5ed9ngth8KwY3p1shi12uAx2yy5QQMd5rhEKiK5ePfHKDvTN22xzdBb8LzwwSJBmw5rhgcvnLzargSsmCGiQ",
  "key25": "9bwffhLpdrHr4CNyLjAzcMZoZnYXSuifHrSAwGhEi4rocFsjXNa9jx1dKsmW14nZEE7T16Pp9vpEYyFFNX26Ags",
  "key26": "5BA3L9zqnQ9PzzX1eDLgyNZmx3kJ9kLWK7c9YPo7QoRkhKfc5vat3FcJ9AsZCXGZDztEu18Lkf2P5wM8EujapubY",
  "key27": "4eTsXqGaQpzQmQMEGNifp1PQqqQT5HqSrKX9UU47pB7fvpNUCmMV5LhpfZzwF2qJ969Fy2NcneBXhY9zRz1nMExg",
  "key28": "32mT58muGWZg7Anb5RCHqciiqjmZ75iscoWVRL9gsypmNme9igd4PQC7qCjLfL4UGzVgyf8cp2NfUXmS5DhvJ3yV",
  "key29": "2Nt349spq6H6ynaQTXMBw65tYTMmj1VU9VuniuLfMtBpkhu3BeJwTbChZZgjWXmQrV6xeTvrPLrTZbYUpeAzzA4z",
  "key30": "pNhgcHCcHef6beXfwyPC8te1FH2QgEj6KtVJDJn4Rf1LXW4AsAyuvBFbNhRu2dKsHhUT2mU5gd3xkF9xyBhtjNT",
  "key31": "5eJyQy3bUrivAK9mHfCQFiHQ9Qi4RUKmckFH19Z4smhPhCLTJFTPL1qJnAYLsxq2jUdXa159iDy6Zy98SD6hkWuy",
  "key32": "26n6xmYp6N7RgXL9wjrpmhDRAMFqyKzDCqc2WCC5TeNRhM5fcA9VdiCoABPkjnugup27Zf2pzBtXhdg3EQweUh9u",
  "key33": "4qmLnDQPJSpZpXtYpWQskZRxtBkZopCVw3BxF7noTuzHUXmSk125QotJi8RqdByqffTtkjuBEgqtMBT3vJZuB25H",
  "key34": "5kp4gdawEfXtpKSFnvA62tPddcuVYANvFDpk1Duyzyz98BDNDjJE8zRyV3g8sEuxEQAsQiuSQ72A9CMeVCnYtKPD",
  "key35": "5ZFYbRn7vZ836RBocTTpUP6XFD6ZH6URGzwT8WgxXLxNvz2AoeEtnGow8RHVuoUoTpjmzGBjkvBzTinHSJ8v9o9S",
  "key36": "4KcnXyyK9qN5XYgvseFzujCETJh2LAK8pdEDzaN5px4oj7Kg7vRGkqqtiaPiR7RcSkcm8fu25ttzaZ6T5SQr9xCH",
  "key37": "Vj8f3Jv3p6fSigWNU8mwBWCV56y96n4Dxjk1Z38zJNnQn8xaCWBJrUojG2bszJb1Qiwg3FHxnTW2hKs6MggSfXc",
  "key38": "622DB2UduNdEmdL4EctQbY5J4Z5dC9NRWG5EsrznaQi5vNupoK3fSnjMoPG8pcquJwMVUWDG4bXCwx6L8XyouSqi",
  "key39": "X9MuH1UFr27uSx3A3nqv3z319hjtdd72Ac8WABc2VNHC6ke2UL8oCXeq3AY94bHSqtzLHe5B3fv74yzGrWmPcyN",
  "key40": "5qXXcBfP13aQRX7QYMkoEe8qwXWrHxFUPheDAJy4LuPkwpTAXsAeuGTR6tFkFMERGbp6Zq5ckxWEJ7dG7evuuaC4",
  "key41": "3XTXcbYWjPJDojVpUrgg8Lerxv7mdSHimvzdHEhgJmXssbsNmZYLCDHFGroQBY1dsPe8vtEFnocZZugGR5uUMS5G",
  "key42": "5UUr8v58MrGNBF9itg8vFAvVmNXeUnTMonFEpaBSoqncSNX2hx8GYSC8w6oGFFfLiGFhYvxT18BvW1TeGRodDqQq",
  "key43": "3oMvif57AkP4XcUeUuLULCSDrH3JxzUkUyvQm1hznKtRr52Umo1UrHXPa6w6Vz3HWShpWbGUoqpyu1D3He5bneTo",
  "key44": "3rpD5F2Py58f25zqFRVB5fu6pjs8eB5z51PoKhZA4q9K8W9GbJzodJJ875QMmiqtRfaDeh9FBtUQ8su2onfPf4Ac",
  "key45": "373satkp6A5CZ9iEPvsctTeVZNuqaFf2YK7d43x6u6XX4LrKYrkBuuRP91exeTmq75bK48B3Q59nFfZjxjka9mfG"
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
