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
    "oGfc26aBbsk5XxGkCdUzZzkAzmBVJq99CyCd41cEkA1CjhTtpe19WJHMgbPSXpdsuh2EwuunUzS55QSPxhFxbrU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AzUQGiAa9hxxt8GAvhcfYKSzxNBnKYWGsE4C4KVJJpCkir4sjNaqgZ4rgZZvybr7jFJyJog5vwxtCNQJucz32xA",
  "key1": "2JiXRw9odcJMx4QpBjjKXXwVtCyGFNEY2t3WE2DVD1BQk6v6f97vFAp7nNZndokpEm86SrDCMCfzR1WVrNmFYapm",
  "key2": "4in8jJifpKANnTBRF7UJK1EL1SUmNCk3aympWGvMcWfQPMnzc9VyBKcw5zbjHVJgnG9WDVyAB5u7f7fmKzcbgWSG",
  "key3": "2UPdnHRKCXcKBZiSRMXGczVpD7w265YANYYuR6JpURbRkUoX4tD7W6mcRmpLctTodRSZpMtofkCwihYvV5x3eJcd",
  "key4": "4XRqxAYctc1V9nkgJznx6EUGnGHMSwAHddBuaGVPzM94FiH3i3RC1EfSpYXdcCvEMoeUj1m8rVzdG5mNYqyFiV99",
  "key5": "5398cqB212Xzt7ntxXa8RLJkkUmwNzegjjdq24ayYohvVJWBYc3Es1a8bsvhrGLPxSGoGQMQqcdnXteFa7Tna32S",
  "key6": "32ErTwF9fq5ECWBK14cuApSQcvnFx7FDDRmc2558CLFrTGZy7LCq6XEmLcj4hLtmZWirHiigJvbtPWuiGvQMnvUE",
  "key7": "KBEmENDJc1EeQkVY9ZcMsYoVLwVBiuDkaD2YWT7iasRYXsQRPaic4PQPMKPByVCzPs2U6jTgkJ2SMQM81emcQUQ",
  "key8": "fxtR6DbLfcX83RvsM8YzneqQRGxRKkC8QSuNfznCyfGB2g6nN2r76w3GHaJJhu3uoHKCKKXhtPZHXwk199WDvEF",
  "key9": "3mCPh1mgXjzcsnthQu9zDWHEVeoThet5eAjWorDHmGqM2KDg2iarnB1vRk4DsWPhh127QvGjBHbJsX5oFEtUbjVj",
  "key10": "4mFEVP8gsgVn1rFL8Q16km3TGRiQyXpvBpnYdLNqg4jieNHx1txj4BLdqq2r6SgzgeCQW2JPa9Kb2i2jAW43GtpZ",
  "key11": "2w91xBHe34Nf3PXBLjQrFY46jv4E7LZ3Z31xKszC6Zj7b95nqNqUYxEq2TWa8XHoNs4G1NV1uF5JgFHvqLaX8BW4",
  "key12": "3NKeh1fscH2rqTifc7RkZiw6wCUfunErhyRv7HxKVBTDcsV2wx4JCMTJEpAYwmQuGBgF2N68dLcn3aTR75Rv966k",
  "key13": "kSeepnALuEzoh4JZEPG3ZaaDaY92ZUSweszbxpqjeuJevpyRMKtxvLEzkJzQdJFCxLXMi8cdnQTV6p9vjqmdNhi",
  "key14": "5t6kxbN8MaWgdbSdZZMufnMm1kTzWozU4FxZV6ZvJad1CM1GQMkEyXY24MuojEPtKsbXLntXy3NrKnyeV29ahptG",
  "key15": "4yZLQjzyZxXbKksDMPLqpyVPbZCvF2Bk1EMvZzNGn6T8MsjRqiiP2rw3R9xZKv1rdc16fmTwjDWPYot3CfrCraga",
  "key16": "4CnxUT1RwM7K6YwjD1vBnwWPthxYTKb4huuwXi7ZcC1bAV6VHmgAURAYhDxmC5NyK64FEigJGA27naH1UHimv7SK",
  "key17": "5fpucoNUoz8xRj6tVfuPsoPUmZxTH3ndrc2JC75qtJMs6TDttggmmVCfEAJD5AmT5ECN3EXAs5YFACzkDMRUnav4",
  "key18": "2ZztmRKuR2keJ1psjCRchnV45V62EaS6qkwREtjTK4cm9qgJrF1CXtxNrp5bxKxFRnKifQG41bPLEmm8aczqFuDb",
  "key19": "48CYYt1i8bh9i18epSkBy8H9UQmy9pFtvovrhm9xatFketvKtW4Sr1PtGHoRTrJtNTXgjSnjUkccBKU7aVnkf4ob",
  "key20": "2YKk973YxN5r9526pUvCuPG8JKTRmNefX785iWpoW7TZdwJ1LCNcKcAYWhW4jjsH3cy2dGmq85AG8sZZ7ex8sWpx",
  "key21": "PrMM9CRSXLA1a4ZZLLhjfzJuonHNVnzyYVMhiv4CQunsxMx1dCcBS2j7e3JRvEEQn93MCWQwq5aYzovJD2nvFz5",
  "key22": "2WKNqLcC1YpQ3Fgni2NX2DgXnLe5cpT9s8xZSkSsVqKMcF69ovsEy9dMt5BNMkHi18av6vBA3CdiV4YfR2WqMtto",
  "key23": "5VjhtsFzwoSrCMwEcKRpqnVsaBwzZe9qTWmcX2e67bnaqd49kP2icQGpYksFasx74tzou19Ymx4zBuu2iw89A3cz",
  "key24": "wkAG7N1WDmhREB2DfSvPbENEk13anA5f6s4PNJRg9X8sAZcPtBzRUVeRYFQgQrCA1caAffzKZmA4NSia8qvEm7F",
  "key25": "2mwif7P7huKkLaUf5Wg1buLWy79ANa3BKcy6ujNmE7B4uvqpTaLteLPEHvBptGUXgezspVHn6qfrPvf8yat2K5rf",
  "key26": "4PxVKTAnvvw4ye1bdeByfsMwjkVo1Wh12D4j4abVsZ7Y7zZJmkXEyjRu2giQeCkXpgJeMv21LsxuVLZYnuSbUBTy",
  "key27": "39NqtU7Pfo7PLd6PQfNWcDshMCefCihXziczzckSbsqbDC5aQkwR6f2hLWifS4WzaccF33imc5abPHkRBBHFPNeW",
  "key28": "5Smmnyxy8eDRLQGiRvkmXbspYHDYx8BvgofNfgxfAoCTG3P4cobezumnNJazdWZMAbMa5BmtVt8dXNZ8igsrYRsk",
  "key29": "41fRigR9KkVE9g4ddoVBX8p6y2mMFcPXvrJW8QCXDiYD2y3AHuyXbrZz6BP7GeEnMAZaweErboZXSzA65BRPkaaK",
  "key30": "66FpRvTR9v2vYaUyLu2xVKwjQRwwi6qXijz9LcwqnQD3ag8iPbxuwaKZvz6AMxcQoTpEYQFKuMQhH9M3Cqsr6Wu7",
  "key31": "61uBid8cupWZyScUUcFB5ohLGpTfXf8SKysPkY6ov8BsXGkRh3Pz5vjDa2Shat8aYYszyzUJzsqEUGm6z1ygTDtY"
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
