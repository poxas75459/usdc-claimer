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
    "2qtepdu4PRYwD1AeB8FAhArYTWecorqyJ9TTwFJdT1d72KtUhaVWFfgy75ncoq15RPbPNGUdpYzecmoFr1dhLMLP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zJym5v4SEbGt6J3eDvvKbyyjKqJ9RaWugK3DFUUoEK3GV2w1h32aqerTinYQDRVB1mxf7kh3ReRnuVsCssfkmwZ",
  "key1": "66JqgfJywtvH7LCvnqEFWPprFQAK8AowdQWnpjQo6iChQr5UQ2bisNzEDqCK25u9PLrzqWBBCKFvcRJ1CefPwtaJ",
  "key2": "5PsETpyNpMBnP6tiGMr7czQpdBJp817EZA9uipt8tBVervFsyUcwR928MyzRsPY4JrmABN338jGXQdozeSB4JDkQ",
  "key3": "kgmrQk3r6ut7bmfbm561J4aP2qsUL6SXa4BQVcnhpTJBEHPiTTp7hVFAcq6mQ3rMArF4acjgs1akZCzr4JdpiGd",
  "key4": "4wXKWxP23zoFXbqQ2hhfJur7DK7ZsSQG41fgsfDxxEnYx1n3zTDMz6T216hBT4ywEYoJvd3SsTg8dkwFyBi4XsLt",
  "key5": "JqdiJWDDbjbwQphKD27mcgusE1ySuywygVuavFYPP93pKRLNsGHuxHNX2S7wYe3cERB9pkLqPN4Ramy32AfSFHm",
  "key6": "4Xoy58Zd4LXYuujTSm1LhY2Upp3tiv5wfpjp9853ugAvb9WnKezKEQYN1wRk3K6R7JBqugCJ5FgKNAu7G96k8DVN",
  "key7": "5zJpzQkUMkJNNRj33AqUunFT66h3ivspVm6nykwLaEmASeg1RNZi9VhrtquDZjFhRVD1W4hZ54ukAeh7GeB7vjzy",
  "key8": "49Q4cRqpZGTi3Czpi61DGBYyZzW7RHPnG8WJs9PTYZig7pdi8zKzHRUC1HbGAzqkgwoJadEEgJKVb4xPLyPmBiyw",
  "key9": "8dNMMrpsYWmXmyUZYNSQVDvR2ppZMzRfbfoFqXCx7nbN3vEvbLbfbmjfzWzBAmarr3rRApxwscKrSeuTBCtYUjv",
  "key10": "5nssDCBvjHH4DceNWb34H3WXwKrqS21hvaCmZeoUd1hwMtPETQinthbK12RP44p6QcCmcobskoX6fTQmnkWqytJs",
  "key11": "5gA8FzweiG2w5bCo9B71Sb77QWsGSbA9ysqeAMwGzfrAuizBdy5SckE5j6Y6oN3S55dxNjkcaavwbWJiE9RtK2dx",
  "key12": "XKDuvWKCviBCLwwA8CZ6LeRgT84CLNw6CRmE48yDQ5SNMkYnEemFUgKsFVzAXYUQ9Gd2CzwFnVL4zNBRVPmPZAW",
  "key13": "3PWiTsLGDjbmueR6hK2gG1G89F6vqzUCeuqpyofQxUGMk1bnH84cJ6d35L9cJh3cjRk3vT3BgrPV6FL5cy5wVfrd",
  "key14": "MTZVxFLFk986rw7B6tSYTKDbKY7Kope4zM1e3eRwgfY3REzgP7uKTssqzn2DvR9vz8pTxA2tdABFBoUkaU9sHf2",
  "key15": "65Qi5JtPPsWrVweA44HPPpD4frpC6Yp5kGQsvP1EoEVrcHbJLu15BjqmpnN9qFvCaofqqZbo9eYXcVwmZnXT6prR",
  "key16": "4AXG9ys3JTapwrmwx5cmevbAvoBqHKwaJAGSBpBnvVxF4xUXPN1g6fCKPHeoRahEKtZi6evWqwQASFJa3VxyXt5e",
  "key17": "2Ywjdf1njyocPGwUtGXTwVjSykbNLgyr4hvsd3qXzY8bCEd3QGWzHBNzrqJfDbeQAN4mucxj6CiRYptg5MbHVahg",
  "key18": "kGguz3oaVRW9sZjQXmbiQePEcyHmoThxVGrEYfUHho6ax4kUQhCN6favQT5jCm6U8SqXBr8ENd6cM3HwD14VBnP",
  "key19": "4YBrevXKtpfPchpdiAbtWjbwpsxaZTL8dtJUziDU4G2bfTpiRSXGw9hTF9bYynzSqp75UVRxUkn9Na5Dj9bcZaDf",
  "key20": "44BbCmn1dKpRx4t7ewDZpVBnL8W93hY9etyiTRCoWDs4NpYGDW7swJXUtJLeyYMhd1sFf5AowMbnJpLw1J4RouFV",
  "key21": "5MmUi5nsN7bN6meCsfEF9pKSmM5oDvbGWgjDgtqoHhP6v7Hm2GXUfwSSVj7QwHMRy6eL375SfiqA8iHsVqhA9MhA",
  "key22": "pEDvzUqTwRwMUA7PXBUctkUyckVQWBo38fPazCpXFoWGb5LaMaqvygC1pdEWGaojcpojoQY913sdJUBd58YLEg5",
  "key23": "sbmHyezmG2sBe2WBTrkzxhpQfbB9FGM5VtuW3KPnAg8hbC5qVeFfwy1oacDnBeA82iCQ822LxZ4AYz9LpFBmJTH",
  "key24": "4QC8MeV4fTYyE4p6jHAfTq8ytHwgTfR9shgHBJQdM8ycdbFZ2K2ykhT2WwB8vvxRS5nXwii7WHULAuMAZc2h14qs",
  "key25": "2ooRZXN1KWVaiEHh4kzpSrmUbDTLv5ERtqnNj72x8TL883EDJEYEUFg4j8d279cBjaicuAuEMaxTVX1arDPjdNkv",
  "key26": "2fsbc8Evrrx2Fhvy5VJ29nPFvrMDp85rTQL19DhKmwpgxYHm8Txyz2UwaZ82ik5KTBf5BwBXEjqCFBMNDf7Sa1Uq",
  "key27": "ra769FgNtwn5evn5cMoXvqRFhKTLz5mCNWpTDYk61FNkAnr2gqn5reKVcpcvMKRsT3MLD6j3NLRRaM6yZVEn8d8",
  "key28": "4v4FLLDc3vUSZnpGTEuTqypLBYNP7YsBDo2pzDm6TNJa7SxyeFfxs6qgvDQ2DUq5D1QyDbhd3sJwvrLKZjViuoBX",
  "key29": "2vVdUdvQzJ2PUZZojgHwvbk9LTEGJoX7yNU1hhzhnk82vRdWLSUgVvSHqWPZdzotnHPWXwwFRRtp5yn9Xt4shsvD",
  "key30": "4JbKLgZ2qYmPB2Yyb5etdL5dKpUgp6rKQqDLFDg6MtTFZahR7Vy55tVwCpT4VW857GEffaY9VsNQPz5zspxTH5xr",
  "key31": "3niBfMtEVenkg5YNogqz6SiKEJbXzfEvJh2LYtrt9gzRuLYu5dgCRcusXpug9NTSxckV4ipEaxsv8iZxSVbi7zaa",
  "key32": "38Paj2kywztoHQhFquMLoLB2krRKQPjefX2MmhvhvorLxkjAw52nXKuoFamVjCiLhkFYXAtWaMPwMyDkE4RepwBp",
  "key33": "sg1K1W385hMDGLmfDYJ9LfiykbaATuzeg3eEKsr3JnyL9JsT581iURqK7psV9joezAZB5a6QbLHrWv9VzNqU4Af",
  "key34": "64vrneSK8jH4NsVabF7GWjVzNCsVMzbnRoKKEDrBmSWnR9jGvUjAz6gBbMCKWkVrB4AE8qeukhjA88p1P4TBfrzH",
  "key35": "yo4aoi77YkWuGzK1mYjyVXcKopN9Xonmd8F3te4Teq39Jga5cMXLPPRhcCGcWcxXNEoXbJQSpXxwPNqxFBtsrFR",
  "key36": "4zMdpiVmNdF6EjKEukJSLgUAacXrTz2ap9ZqAzfddq4wJzJF45PArXrK1ZdB6SbRwb5ZgKNpXhy6s1XUBWuFBMkv",
  "key37": "1BSXrtcdjzVPx4HR5rRDKyEoVrU4D4v6h4M7cxT2ztBTJ1QfkSgX1Buc19AoxBubktY3f9FUFFKmeJoogeUPrrN",
  "key38": "4vvT6NP48g4YxNJWRuUV5Xwac7BrvJKogge5BsWRUWB3DmknPhz6JmFBtM7MujU7L96d56R8HVa6VBD9KdtAFTu",
  "key39": "2K7q73TSBWsJuUjBbXzr5HLTuPDakdYG9G9jSDKXXMXUkGs3UqpGRVQ6ig3eowk6CHvrs9kNC5XUTvFSBuodmG76",
  "key40": "3cbD6zFPb2oB8bG6xbWPR7WEn6JMQZzLTP2vJxiveeESXaoXFRVorrXcwT5r9vnQXRR2rFeWJPHzpTUXFRuybtb2",
  "key41": "4g9BHRF42vLD8ohNm4c4WfZhftWuaFL6Ufiy4iAyTTa2F2jTaG63PuxxY3T7m54gaXHwM8ePL6cBM3kxCHhPxvMg"
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
