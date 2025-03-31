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
    "5U5ex1TDynqB6GzgrUz5BC24LhiHTPHDmaWfpxUFuDRjk2aMFgGTKexSPQAaWZm48mdzxznkgbhSLNAGBgEgeNXv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LKMi5SvBzGzDyoZWeefmbJgXRL7waVrV3Sn3nDr3FCGUN3PwWCRuBiJ94cfSee4Sp7uapPHnbajge14yxkjGU9h",
  "key1": "5xT2MKk1HKSb4nNe2PKSKdVbiyknidGc4mxtzNmM3SQYzXFNVQhJU6jMhqstXgUBFLMa1pTTba8pFvxi2J9YAtm",
  "key2": "216cGFSc2XUEr1o8p4v8W6Pm4Yc1dPXQtHhXFhQZGwfjjDVCM4Cn4qXnFPmEow8DZMWunCuWWbsXgbv6nmzoRaMi",
  "key3": "4Vaa2MkDRicA38YX5jjtRbkqAwB1goiu4j9cRzwipg1BYHtaUzgiSYju3JHaSdu8SgJpqMHAWpGqrf72c8GtKTZt",
  "key4": "4awUXHvqEWApVSsJCWbfh437fAMzgph91Ut813Y94w2ZbP8Xv87tjU6TbEmWu9NTUZhECJTm1AEWuxEjETCsij4C",
  "key5": "4iFsNHNqqSoa8KkinJvHbVbAfW4cNDM5nZkpsL2noQ9T4U7g252Kz8ZBjkPFrMxyr3mWCFhnwCiDSZpCcaAq58kG",
  "key6": "4EcyjXAN4iuvh5RPMJXWKLZFgret6HET8D1dgYQeLHr4uuiBz5jCSQykaffpXGmwss5duM8yyyKHFrPSvPkrK4DF",
  "key7": "8WPUsTMexeDSePLDFk7hU51S2UL4s7MMCJZJcL5nkkpo3ASE2WguCcoCx4UvETCSmRaS47f9njevRuP1RGUoQzG",
  "key8": "5EGusXmneycJUWPBVkJetZMzN3EU3fS33HvSaDzyWahX5S7Z4YczzqtxrToqrjgW99Zt3hcCrT1jK8cLu5BH5SGm",
  "key9": "2PYpiLveCrpr4YQBoe7AA8TLbVjsbuHusnAZ5UyZGCGJZpJipeQXrJoPHbHZdiigSjao9HfXqcoJs2A278uRxUgf",
  "key10": "N9nL5BFmHzFbtGeiauEi3ZaUvXfPARzA49ivDr4vaNcsf8FBrJoQjnv5PQzG4hqNMcDR9HEmon4wfTcV7pBsANQ",
  "key11": "4htXa4FMzM8CLAzGGDNXryFzcjkhof4tFzckimMJZhkbLSEsECNAYK6viFFo1xtD6DDtnZ3PMtEYZFnb4VuMi81f",
  "key12": "58Dtf4ixZUKE2kxLKdhj6KtpPZBxsREHHEu18t4Dm8BBd4n7CSaoac86N15szgtYpNiF5qRY5CpoHEuzYQtAp6HW",
  "key13": "3irKfMSHTex89shTyrvbKwddfGEVjipiagkGKiK3vdeM1TSwPcSuDx8V8egNLchXoJwNLrQUmMoLZ1qrSSds7ErD",
  "key14": "52QoAfbto2ATXaMbDoGnFgdViM34X14APHPzmNLKfVQVho6C5UvkE8gdzwp6mqPuPBVKNhqmcVEdSF1WHjthNvos",
  "key15": "5D1DjD9vgZid5RvA8ytRXBdcPdF4tUUaaLTDFsWeDjWVb95rpvyhR2S7zyHfSrCYhzDzD3JccEuDmCRA8g2hYTH6",
  "key16": "ojVnUwuF9gB1qTRvS2oT8t8q1GaLMNs9D5Hy1FxnE8fnzMfWZqVCnZNXvVwYBDnwJ2j14uw6HE8fbBSf3mo8Cqx",
  "key17": "5i9ru7bUtY3hy9Z3EXDNjMimrGgeZuuqgRW1XraVaCYWcMyxWsn36nwfmt6oJ8MB6RueU6KKo2adLnxNASEcTHsR",
  "key18": "4n8LzzGoJNesC38erdRonD8vHfjYpsbMzJhU35PagtJbDY5ySfuQtbBVnZJUBdEoQsxd4vZ8hqSpBUD98wLQUPLZ",
  "key19": "54JvbwZJhsuzbT71wVpa7C9NpXXZtccFLsr2aogBqXdW4x99S9Lq6wAdYrKbUxgfgN4VKzQ7MwsUkfHLJSExibSk",
  "key20": "39UNXeANe5ctfnrTron6hHmUE2wRmaHJi3Cgf1MWqJin8EesaiJGYVtEu6Rtajd9vXSfyiYdnBsrLWt1iBDasPd5",
  "key21": "3FvLS35fHNYttfTzYYSwVcGk44Um25cHGEuHN41f25BqgWq2PrBtwWykU3LcmL7s9gZC3AJ5oudz4R24Yj35KgH7",
  "key22": "5hfvnfoTMFN9S92t4UfFGSQFHquMDWGZcEJnEHftCHpxsA8GhpPfbxMmULXkRC7cBh6Pmzx8dH7PQbacJaYdPtz",
  "key23": "PaS5FM5sSAiYs3N8BLtf4yNg2BXiwSobAZzJC91k98eBkfE6PykFKwNGEoB2acbGmL4nSKsSgtJzNbSPHwNgS5B",
  "key24": "2AzELmsgTJJokMaTQkVRhCBSWdHhmFPX9DDLehcsWEMZ2hMZyH8cHKkZZB34zRN3LDW4nrCTSawpkJPBV2pPZMBH",
  "key25": "iJoTfQ6SsEWD5C5Kb3ercd8JEQeZfGwCeRhk4dNz3QRtjw4QzKrrc9atPE7VMwFXGtNWRqG42p5G2Ng31qjaMzK",
  "key26": "2bAZVwAp7c2kSJ5DFHTzpD7qawrPu4BprPym4JX9GtWBnXxiesLEsY7mtpvC63CmYEmcQzT5fDMhFf2Q93VmH2Kv",
  "key27": "22cNhd69PW3YAfXuvw55ymuUi1rSe4zDUo4ZQ28KcTv2RGSXiGbLrxAT49h3NPVTV3dktfoL4iRZrDChATt2uGzm",
  "key28": "4bPk6kGZdBYKFpmD2M2UFfsigRhA3Jw7ZBXPR3E36anjpPH5o3bDXJmjoFPEXEVWNirmyqETRgjpBhzLvGa2tU5i",
  "key29": "9nyhBvofvMHnbB8cmtVT1NZ16WRXwaz4um1Vj3Tenw2pXLVM4NoGwr9No1vCi3KvbZymoACPWZFtC5p5ovE7kFY",
  "key30": "2z8xtTmrw9GUrhLAg59dDseX2oaEQ2z5RjRLCjTYrbLP5aK4NPZ5gFWWdcCfJy5EvzMoMC1zU9VdkC3xhvsL7zBz",
  "key31": "7JYmwp73DJHiaXD6ou1JHXqarF2vmLtgfnHPxtZoponaQxDbFRn6C5PLTWheJ4zZUcJ1Ybi6vAwq9Bd5VYkoegs"
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
