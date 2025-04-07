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
    "61HGvavqLXUe3CzJeFFKPTXGkHDYLdGTvHijFsF19G8YSwAWsipqGgsrdBAGqpL8NZj9RuduXtMzjDzkiU2bjV8f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6KsFEDdoYAvuDoRUmdQ17aSwYzUNYpUfNnFp4W4HyeZ87KbHf1MrxYr2pJQFfCfZofQ32bfwhnwEjDQENRjh6dR",
  "key1": "2CngvaEjHBEa6aFnDkDK3JLcZaHqqZuUSH211fc7em2iuFqrMigXbxiCrjHHNHNwVqSGv1zVfVhbtxzRnkeqstrM",
  "key2": "4z4BEfkysLE7BcVN6cZptQZsE1ZkWfaY6e4d92KHxZtPkg8QF8sWHH4ZaRxWEpPPfprZ4aa2Psq9xRwwGNsi47yQ",
  "key3": "4N3hcZ2M1NpLvP9i2N7TXCpirEqLkouD2xmv9dV4X6ohswaASLhWkEMTk6cocKXTdvv4KDy9BtDAFW1Zdruxd3uF",
  "key4": "2appr1sNP8qewLxkaVTSGycoMzjobPsLh8E6JyvLAPs1MexnNrj6ArXRWKqJvuCV1cDgFXfcRTYTp6k9vYbTYQ5W",
  "key5": "2xMKUrqBFC2kN212gWqZD2vfrp2GQmJZiuaEZYT2Zhs6Md15WsEdcPHuzs2ztAHcxYmNLVnM61DRZDMpp7SxdM3u",
  "key6": "2N7L9xVuRC6u9Df4Jn6gmuSCVVhNLgZzdLHzZGEv3WAugDWzZ2ZmDiiL6NKwzxfDic3EF4KH1ziuSGH2WfsD5cWu",
  "key7": "58dRDthRJTrS3ESSg42N12ez4ybCbFVm2PZc6864jkyqrcrYDXUvZNCi1r5VxzmcA97Y11uZVbXvhdNvvfrZkdGQ",
  "key8": "2QzQoGY1SfwRcKkzEyXnJtrZspHkvFsMmgLUKWCpC5L3fVyoeb4LeKJ6wSwEYuuodBwRi431otYCzagzMVCpXit2",
  "key9": "5XCbB2CSdb17tJ9C4hh6squRg1KaM4RM7um9jUcuPMMThyKERcDszGeBGm2teK8BCa9on5JEwe6QWuxNRFVy5xtw",
  "key10": "2RKrH4oDuePqeqVB1hkwb339XkZ7KBRkdoiNiZbhe17gYLm4EULrhuQWyRx8qCMHBkhg4nweJH38JsVC89EhxRQB",
  "key11": "3cP4XxoFExgBQuXAwiKj3L1pipstFwerF29K928fwfzf4WHybwvKBUb8B2ofHQu1QCFwnptnakS7ssTBNogDf2u3",
  "key12": "AYBbcreiPeTsvERpf2XxayDj3ZGqWDjaa9gZV2nFndznvRpZRQKtZhQXsMfp7bj57g6a85KUV9JREjyDeENR7CD",
  "key13": "2cogccRSBLdAmjjURGPhiPH26Fs71BnZE7Hqd83kNRh7zfwVtKExuaH9f8PnrJxDVdBzccoUTT2LoBxobFmT8xxD",
  "key14": "3zi36PVsvECnpSt2j9Rhp4zwN5qbCa7bwgTT2jKCeGonh7dRibhEiaBc27prEij6xPfA5s111EfaRBFnLUNyWMe4",
  "key15": "2eSSTGHTEEooyLXvYbJyUnqJi9NHjVHPQsYYA7UdzZ3PtLTKn8zGopLrWmye6Xmeo4dn6QoFNpN31kyciNcZvCgN",
  "key16": "5VEAsqsKhNEaZbyJTbD7g1aaTjE2wh5xQt1mTny9ukt7QVZFGUGY85g8XkC55kfAJjQoxTeBEt7d9E4jiEd9dXnT",
  "key17": "5KGt5MBFT2tMTUjU9KZAt37dNJL1MW8g7hFptNELp8DkawvetmEugTSuizyZmGJp2qRseBSv825eu6YR8XtASqTp",
  "key18": "3gWQaumxn5fDJxqVEbHwCTzdXSXnnZsTWkJTgKbJfsKUKJ4aNm1X4o8p8Y9rS1rQRCPNpSH2WYdiZhgLjT6tdn2R",
  "key19": "4LmBx61LxspTMQjbYZj6ym4mRaxeoeRCZK9aq1fcYU2otgeggyMGm8iZtua6BoYbokTQ2MQStp8gYofwUe86Bs4o",
  "key20": "3tdtzxkSRyZWKofeo5FPitd6LZxD6v61PU2FpLjwhCuTvmdCMsmnqSsHhhveeJsJcikMNf7orKwGTWWQtxxq3bcj",
  "key21": "5b8sH6EZewwBU4ENNR7t7kK2FJUK76cp1LAQUcWkxmD3zZYK1pCr5TP1wLHucRbcaPXK7JtuDBzVZcU6U1mYBW28",
  "key22": "3BpTfxzhcLNiTKnmpsS9DonChU3MHCpT6nbkMYoseaDBpEX2KkvDT4YhuJkqHJC7YF8yGPJ7ktUwf1dZmRJa4Ncz",
  "key23": "3zd1huoASd6HEhecLDhPQpnA3ogeoDwhPH7pQUpMKWfHWfokJ24Y2rSZ7AxtMS8a3W9vPuRfSKhbawiH9JuWNGdd",
  "key24": "29NgErbKEByZbvQK2BfbWUgvyasvhjhMrKocCRwzcGaGw3FGYaXzXV99jhipzH8SgUTv7Pp8YLcqhpojgUUMcsjb",
  "key25": "2YrSUvFJ5s4myo3bcFfLQJh1bysjaDJckaXy6VSxmLgQm96f2UUa7VCUMfQjKF7wE651yyPhmRZC2sYYSjaTcTEp",
  "key26": "uHHpbSPe5zg4T23xyGPB1n3w3ENfWajX8VBaFoQxpuzq1MGkPMHeaumo7xa97bcEgTqFs8BiTS7dnzer1MzCcEM",
  "key27": "NHa2fXPPFhYLQaqhLLQZ6xjQjoEMaFdN1ujACQ4ock5puC3JJViCujik4D5noBUW6haed2u65o9yFAMtTvHWEJP",
  "key28": "4gi2LpdBZ7KqpuP4P6gr6gLF9rzA5genKVDvZKrUncKGRGAViuuM6N3beiiZoVLV68pVDHMgnE6GwuJTNuHkVhmK"
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
