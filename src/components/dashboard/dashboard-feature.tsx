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
    "4GUAFdvcfKxT5G1wbgTh4tLRxmFh9Cg2RUKbsvCuUjDS6PBaHK5BV2PCiT47zkTwdZZ41HT5CY5CNmJYQKVWzBvo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2c276ySJ87uGREZ7sCuZcSsKQUcxf99F8jY5q92HzHbMkmYgmdnF5zAAiYjD9QrQEmbkwJnsDaEBsrn2fnWJckhW",
  "key1": "3ZFFAaEEmWVTeGDApyGBx4egLQt6zd9jZZvHRdSqqR89eahJAkWarphJEFxgS2efVbsR8bJw4FpbNwQAUxmjB3ZM",
  "key2": "vn4fwZU36CoiEPqmvGwL8F4HSjrv8vcPRs64eHHB3BnuUFNwquJEHZGrTTZNG8AYufCSVWibspbgDyaF44pfmGP",
  "key3": "2jP7tmNVchWpAGGXbUdmRn9mqCX3PvZW4yie27Nenup8tbXJKUiMcgYi6TUtSVZWA97PLmVKuXPaBThuKFaKcxCY",
  "key4": "3uSPKqxzdqkGLPLuAFK7EZP1dzYUt5zw5nmJFdhuf9arRMywv7tedDSw5ndAVWE8JzHg95WrLCN1j5L1S6YE3ibo",
  "key5": "5zo5zCwpY3DT9M8qYGdYtrkFsJ7XnCbMZYncRZzZYvUpqxJdjNWkZfZoyWDbhvEVAJ6ar6FzVXdo6V2cirxW61AD",
  "key6": "52c98BFbAHFyjpuodqr436xNqYoZM4YbkcqcbF7ywYiZavdb2LwcVhrzkLDxvq5Z8pPvMfaYoynrXKQTDewfik9Y",
  "key7": "2xfCommKrchETCj7wYJ5CPDe2LevHzm9teCPhNFjJqQE6ie9n8R1DRTiRmf5hoDGHCXPsNnGFwdw3g4qvLeTXU6V",
  "key8": "h9gJCKbsgDxzGoDP7LrpgsSPKeqDQfkNt8fdQHF7Nridxk7XTHxKoE5Zdn3mD59Eov6TXUu9bKfrX3s9N823vCy",
  "key9": "3T6eHbCVJSwnnC2BHMSVi2bGTfJHaMjKMkTpEEJR4etbinQQxFZy6ExruGGTHUP7dpQpfEkaCCmLd8RTgX1N817B",
  "key10": "34GVci7g9MnKT4SrmH7fGqDpYeYyyagThuku3HcjFBZZCNwxXxGWwqWXkDvWML7Q34eYVHShoBxDgagHmHfZ6hd2",
  "key11": "jGM2SWBTptdNPqTkQ8QMEthXuuQhX9YyM6Ddv8jwXiSVscUdongjRcmMfR5xocd7SpCV3KCQBRBc31jQFsTKbjm",
  "key12": "2YjmoHSExVv51f4yS3aEZThxocpsbHg7yqQCz2K75NKVM7hzoVH3CSAzgANfq8uG614V8T5dDPDnzCVW4MXGnVq7",
  "key13": "2M6uPgBfXmgY2fPrYWXhV8iMZgg5ux8vBcUwtyr3jhG9k9m7zKBPmbEWT6XwW5QjuXn3rcJS9MWr8TwRvSy9y3Ct",
  "key14": "3wdbWHAFXtHjA6fE7yH8iqtSCaiKEp6ivoCM29p2zkPuSt8Uz2g5Wtpzjup4Q6J2sexg9rhTMESEGV13kXzbDFBr",
  "key15": "5D4jPirq67E4MB6u62zk464thGh3CqZPZHPBcpPkwP7JdNstXnxFCWMhU2AgTcisdepx6hpEMeyDArVUfHiHVqR1",
  "key16": "39JPkMMi5hN2LfExrQQzCKFeqhbs9Sa76enxwGwUK9QMnsFTRYLq6nNXHv4KdMRdrhtuaAPdxzHtwJKuyyw8ptZk",
  "key17": "kQto8juattZoHB6c44XW1Xto2ApgKK1wEZB1SjKCCw5PWHiePkowL7YmbBMEGzdMwx45h2PuWdtdPU3bF6sUbRh",
  "key18": "3gH2AwFKfGsxFGwPpScpV5hyHP86fLkUAVxKAKERfR4oynrx5FzfMNufmpfpjQTpu6pe51npA64gScYWYemR8ZZQ",
  "key19": "56Q7eJ1iiSpRk1UJpXwCSZwEmDtEshqozz293dPEaThDESM14zTsYpDH4e6M79Qb1WSAdyqeg8Xh6T9Fy5VxQavd",
  "key20": "3rU7WeNT9faryR94SEqvewj3BYHPFQaCjf3KRkPsYQfFU53kWtFjjP8zBsTzB6nU3XGB7E59wixsvj9fJMABca8a",
  "key21": "4nSMNCDgpQfFL2rCzz9fMEay4g72BkGX96sBgv27vUE5TDY5u1K9uJE3y1KgFZqK7Q2NcgXncQzxuszCbtYjbEKt",
  "key22": "2EXHnPExR941crpnBS4QYhxbT9r9fVRg6hUMHk9VV3PgVYPwodo1qGbKWLwAe9j9xDBSWi4xDUVCxZ3YQ37YcExZ",
  "key23": "5wY3dh3LSmEd7bzp17byW3CaG762gf4mVSFEn8FUyc4sWgGnrq6BHp4WA2FJ8MN4WBuaLTA4ctARV98EyCQgXdk7",
  "key24": "5KcKmBS5PTJxMt57BXKkkG2eRjHgTooupjBse8K51WxXPrD1EpZJBeUG2AwMMbYmqb6y5p9QxBBgSioT8wa3sGk",
  "key25": "2tJyaLkKFxNVo95LGvbyuki31FwNiiCm48rBBbiip2pkPfDELuXqMtygB674tDCBXr3xaqeYUUnby9dYtEXsjKKZ",
  "key26": "2FD7GDwtfSkj4ux6D5FRKUaPa4Jy6tJMT9KRTevXfqheZBtkWXC3F4QThKaCWE8ABgitwXUbSNg1fm8VAvtJwxRc",
  "key27": "4VYTR15iHcE27gAM48YKAxS1mp6kw5JoyH6LwSNNyPcuAeouqFg9AxYsss4TXb1fd1hRNHCKD7uhyucY8jxzxfwa",
  "key28": "iHvLMjp9duhEQEj6jDdQgN5oWp8emxPbBGz7KJkjYanaM7fD2oyifkftYjoxPi7t1KNEschga3yDenxgZCvyw5S",
  "key29": "51NobKKiQFdcZuNzTjwo8C3N18BGq4yWxbk6zw4LoyeL4TnkHBDRpDnd4DrRSaRJCCWeNKmoNGPF7vnPWPdE5bwC",
  "key30": "5Zg1VgUjkfQkZMQieea4xEZX5zVNjghoDy9SnXcqpScmmZw5zAF8REGZGyr8nbP6WBG495AiXdec6p5mRtdUqW8k",
  "key31": "63WvcAhJLiYAX7SzSMNX4ZPR4RuywFzHrEq12jKPZtgqQhGM9GFiTiCoJMkH2fEWyM2QrtknyKQtYD7xZ89mJAk9",
  "key32": "2VZP9HGmTNHonJqmRAdedM2NPjkknG2nwbEE1Tm3ZzxUokbZAB4aW52oFJQadRrrFeXrjRDDqQCFFvFkEHLuLZcd",
  "key33": "4wcWdLbDx7iFevHqBMYmDVcHH4Xe6mFM3PmGPU21Ebi4NLHfsPzXWx434fy148BCmsbJDtRAMuVuBoxggBqCTMC6",
  "key34": "m7CAieCQ9oYGM5WUbwJXJxeXXeUzwNS3XWe2X9Ego7gmv9LhRpuQhKVA1Dzx463mLqbqcvjmVeGKCvRuiL1mqdE",
  "key35": "3kiD19GQqGHiHFFrEqYFKQ29v1gEKRiU2MSn5eApq9Fg582CLjafy93uYTg98bX5mP8Xk16yB1YfAP9bAymfkRAE"
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
