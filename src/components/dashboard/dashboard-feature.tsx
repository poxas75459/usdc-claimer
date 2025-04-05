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
    "4Y7FiQVPHZgRAEpMU7CxK437dAMnLb4XUgBh8XNAAfXJafJzDz2FKc8VodWmmGe68Eke2WEzxbPV1ZhwGa3Vowu1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TBEZ3okrAvYkNneGaQcfp3FNDAaLvfF3gbTZoU3cnrByk9tCtq7hMgGD4yUknG8BmEgFEkMQjjnYc14yyHqXULf",
  "key1": "2nX6tCBQtPezYvK7CTipKvhhX5gQnV5vcE9CZs1wbdRwqYv83NrxLqyLk6c2o6ufswjavTdiy6hRth5NwPrzDazk",
  "key2": "29VHggUj8Cqwb3tuzoYew8SiCNeiMFJTuJgnXEgE3NGJWimSJ14eFhURMjAJt7Q25kxXcA4y56dhxKconHfnd6Xo",
  "key3": "3RscbGsHhJKZZ6f2yLpJReCtEX3BLC8Xz3d9eu9AnE54ThakrtRfJVCQ2Q2YE7CcH6FiHqM96HQLf2hiU7kF5cdL",
  "key4": "5UtcQtPKtpVEwSfYeifDHHK1aqwYfkw7ukXhvWvm67pihQr1dY2sbH1puHZX1ppSF63evPfTdnJPYgD2dBRvSFva",
  "key5": "4PPbaFnZAbG1Nyk41YTrSpZw4URKyw5oWX78ibtW2KeepUVWmCSkdivvmE8TYXbUGqgu8QCxDa3BaRxxVzGh7o5N",
  "key6": "2Yx4NdXnSeBNAmA85wW4kReUYcRiamqFfxPjJgULeQndAhLbXEMxWE69zR6Xu5GqobScJZoeppTRDep3LbZ18RLF",
  "key7": "B63YCPDc4jD22SR5rqs9uerEuv2LvYng8Sr5ErhGTE3gNaS6iMsRmuQWz14nvMxmPSFRVKUow4RwJzEdVerz1KM",
  "key8": "3KuRDQLEctztTsPb7g8N7mhvon5qskcj7GbJffcNUP3W8VYdptgdPEUYZdzeWHvnH6tdXA46brw4e6oFKJioh4nj",
  "key9": "CP4g7MWJarKBi4H66Jrky61M8uqbsvhibcYrTxt6jcDnNMGG1TGAwTD8oxo15WFsrdfvjzqzsWZo3o5yrUyKBg5",
  "key10": "2rrBoUitV9p12dzDDHrB7um74uS6M2LN9jfdpsRNJzbNZZhH3Ch3KtX9WiXrtVEVH5Gcv99aPdC1QbFAbiuNu47t",
  "key11": "2pFmBixECU4NHzJZQymbCukHve2Hvz36AtFheMn1UCRC4ePQLbg2Gx8GfioxeJxSrqrRPYQVBXebjSjYDKL99mSm",
  "key12": "21zBeUWAVPmU5Kjhvag4ykz8Ds47ftsK5smgMN6TV5da2zWqNTPykoSwzj8BhwRKYfbSCpJMSCj2ZzFeETeE8a4c",
  "key13": "2bxJtRox1e86ruG8KD2PkKgnAtvmqRE9EpNH4QzXr5v7hrAApSAzMuTYN2GFDNzwtdPd4Nbz5DEHvC3FoW6u9Y3S",
  "key14": "586XcPwo46Ny4auUUS6gVEiKNN4D47QUmSVaEgcw11483U9eJCqp4TftT8QR1DqCVvkSQrVPuoxjkbtBGgiESLEG",
  "key15": "5G38qbQ2bB6uDenXK5sLftN9QiafpWrM51W3Hhq6aDtwoT2t2zv4xQWcVuSwofNwff81oh9KS4P8bM5hcxtgkRSk",
  "key16": "5ydvGEJpsQUts1466wWJzyQSNuWQRRH41DzwDuyYayijfmfz2CPMPvv22jUAaXvo4ZetGGQJVz5CGwBajJDq7ZMb",
  "key17": "3EbHM6UDAAx8GVBoNCEGbHLBHULPaCiHmeKZmHCM11wg5pueUeJgCckce9HnSKsHoPKznmK4umowW3PjdUuqKtWb",
  "key18": "BKjzqTSey6woB58BwP2Zc67AX35oeFGwFcVENSzdmQGkwRzDnJG3YNXCTkXGrKYeAwyYALRSBLjHHksKA3Yjvrf",
  "key19": "PsQYKQr7eQiTzSTMLQdvUaRQbwve94DbT5VpfzGhiqYU8CNV2ZKuqPuMkCh73eVZuKkdFaV6yr6x95PbqBpHjFk",
  "key20": "A1oMQDpoB7PKwY7o6eiQ18N2wkZHpYhQVEWwJu3w3NpVbkoYzW5i9MBR43owU3DZvVoNeQqBrRgoXP7sRGa2TjJ",
  "key21": "5cq9uCL1L6w1PP8oyQp2iQUZyCYkDVCyDP7aMuwB6Eq1yU7n98DwGUumSEW2rkr3BjKMddVqacJ2Y2a1CJHbmWsn",
  "key22": "5kisF2ikEuMFfcK2KyRZotV3r8L6G8ahHwAkwLWqZZJTtFLoTyJ6wa46Bj8A5dLWsZvVsg3ptAYsVbxzmV5VzRHa",
  "key23": "5iP5rusTocyqoPkZW4z7TdAXngosRJu4TkEuouo99GnJ4BiNYp9U2sNZJpVwahvPgnABaNyqkokmTanUFYPUomvX",
  "key24": "582mpM1NK2cvRPwvmvVqABV3X7osaXwABdsVDPzh1h7Vg6aEAfJkoCAwrBdEmRq3cE8mszdESG9bRxQTbYW7RJqD",
  "key25": "Mdqpr8DpwdSiWh7vm9RorF1wPrxGHxDbeLmwDFD2jroQU7FdpgDsL4XDquQ4hPqPXupEWUdno95tBKEFQ6Sa9m4"
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
