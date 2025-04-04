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
    "3JvG5Grf5zvgDo2MiAi9nXhHPJgWyPdzA8gu2BEJvLdysyxuriHVzWnRBiUqKqQLcP6DdEMbSgzDG5LYSNKxxjR1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gSs1D1XV747yh89b1wTMxh1v35jSfp153xQTrCJ6c4x4d6AZUwqXGJ6MgMmBW6bzBhi8eqRe7PGDbdvfjaenvfm",
  "key1": "3LkyCVNRwit2qAE78azFYGQuhujiGGzgeQgGhvf7kqYRAzBwomS64CFpAjsPnMZB8Z7rEYJkmQdfio92Euo4g7GE",
  "key2": "3ZPR3QrFVFeCNZoY6RRgPGStRUcUTLKu22Moa9jc8r95keWifNFQhbC456xsTSrFzVakwffhJJ46faBacRc26mZp",
  "key3": "2YLGRG6G8Kkn8PAXbDmJ1SnqSWjegjtesr8bgPLczBRcaDDcuT8HoqdEZ7XYs86C3CiUSedrFC1GpxRuQ3WDNp6Y",
  "key4": "5aqTXYKt6psVJRtrkmJty74KUTC85aLGtdvmWSAZw1rUDMdhvbYoCKRQt9N8SiahyqZQVyoi211SUkDQvKBey538",
  "key5": "3LXvw7cG5ETuiaBFFCAmKL1sN38GxLLjo9d1fJm4YVHY8AyoEgQjsdKvrqXGJMtSi9nDMDNiJdpbx1uHcrhu2Xjh",
  "key6": "3BiEJ2cvKk1B8Kd4mtoCaQfjzwTMcbxAsGjcHsreCe84P34EuuChb9j8Mx4qdcEiyG5knvmKNvgUKbEVBpo3e5vh",
  "key7": "419mszK2PA6dqWPGwMTbTzw49M4ptZ9wYiGbgzPoB34NX4s8Jq8Pobnf6CbSDnvGoGiMCvYNDy8uiGG4tdGC5mMJ",
  "key8": "4RwsyrUdzYBL57cYgaQczfxLGVDqfMBQcLste8dF8ybbvotEwzZmtJn4DbWeq53zhKc53RxZZPziP7mFp6zvUhaF",
  "key9": "55KbxNeyHa9rqmLq1jes1H7DRFRnS2LcLqQpgagaQBGGbKMCUmxvWwDjKgiZrqTcxi49hPLoPvU28YErhZHApfTW",
  "key10": "3V3Q75LCmbsWkQw8zqmPJNub3vFj2aJcKmy8r6uPMRFUPi1FWkCt7CwmLcwxZURvV516bSEFvUh4MutEc4j67yKA",
  "key11": "2yDteCbjcHqKoxsFU2siVP4S9FVEq63YsW1dBfNcmx5EBMexXSX3mJud97TNs7AWqBsUG6sysraZoaHBh7U46tbp",
  "key12": "42W1ynBjfjqoXiDiQNRArCYawqNUvUxxCgdosH1nkTk2YEZ8ZMvZLAK2aYvY2U8989ZT14q5E2hWhZNqhqwivK6g",
  "key13": "5pDEcoMtR5FEkvmUYT922S8aK9DA435a7WM8B7bo21QGmksc3TxPGF1cMyweXLLD4Vs3eZVaGt2WpMbQvZ7codzZ",
  "key14": "41GhG2gzBtsZqgPbMXCPPn8E9gLB7TNX5Dw9Hm3Umo89Wy7bGNwHCn1zVsHQpwkc9kekpumbcA2ihxTzbLCjaFhR",
  "key15": "NiV3xX44LwLo6qGWteWFe8yLCjctz1e9gp9jja1jPb2PAThApjFoCDvvrvJwX3JnFVYSuyg4MZRHxktqRtfA91c",
  "key16": "gFDYaLobzkydbE4GsaMpGt1RXDTM1ibjxjLEMcs6sG71YaizqxfbwuU9ZQCKsND2E5foKLpUQ4LrDCaYUkL2WB9",
  "key17": "3zsxFftTEwWC8XMnxWMaftCYYyuidMuDix9JJSNwQmQLoXpdVd6wqpyVTCtg5ssjjtUYTPX3NYaHFZp2TZRUiJ4B",
  "key18": "3xMa1bZRb3gMBT34Dsr8B8J1sPttj6Mb2V99Gomx7N2MQqwh97RDw3AX3FL77NSk5ed428rg1FdcMWJGnfva3kJu",
  "key19": "4ciGjmMqTcBzQztsBCcKjvz3pTpaaXtYB2y8c5QQ6eBkS3pWVgRrgcNH1DHjoBDTdAL5jCcKqS4Ewzpt6GHb1Fnr",
  "key20": "3rMZe8Q1LaVxRDK7WZCkdYA2Ckc3k9fujfj2f6t3NAXfp9v23FfK1s1FLaD3VbCkvffi7bqXv6DnUaZ3DpGrfUMJ",
  "key21": "4qNiFq9F4hoVukXJGMiyU2AjP1Aw3nJzvqoVcX3XASexkWjuWNsDsg1j8imtbeXSh7SoQABzD4hdgCJxTG5ri3vW",
  "key22": "54J1G71pdxYM6daJ69co7nm6Z6Xz2jWU16XbapdRsEGm3BiUMp9vq6KEDoyJbtiNriKapjp2syExzHXmwXrCWsoW",
  "key23": "37pzsi7KXeJ8iQbRii9aWX7FywzD1WXQw84q32qVi5Y2oMxMGqfKRuJK7eTpnSNMqwi5wGarfzk8aCqj6nXwAEE8",
  "key24": "2WD4fRecG5rjmZj7kFg6AsZ6a73Sh6jVoa1p1VT4sTjmsTwqjYFXsjHR3MxnYZgDWsjf76hyisEqq29mMx6wVQXe",
  "key25": "K2h3BuKoXNVxnKv4cYVjNmaptCVn1H4FLXFAtJmVCL6e8NvjFsPkZwZDcc8vmVG12RK8Dowh9Q2y6cWvwCG8UJm",
  "key26": "3KjowbxLAh29W5PbZApZr6jVbPetuf6DeJZkC4JXPzZbN6TKMckTAeekiATGj8SAdXoA4e9g9ztJS1wEy6spgvEe",
  "key27": "3wLU6ikYSEWNaPhr43Vd68XLr2QWNGtFmbuva2YULj238PPusJAmqRzNQddJWynB8voR3zHjFvKu4NV9j9Sruan1",
  "key28": "3McUfBizBpRq5oevr5qSWSWADQMe5roGeqZtiedUEYhLfs2RgUEb2RCXeng1LuLDmSLJFwbEUqre4ockR7mQwgSe",
  "key29": "pbexAK3oy8Y8RqqtrCnxUNpSuQzNe54WMi2zyAMCMf4jiatfzNGaF13YLLV7JhLZ92JsmM8tiy7gdZn5unNWBfv"
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
