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
    "3KJSAU3stHTo1s5yUF1J5Hvi91nTpRxA1VGPoYsTiHNVXeh7mdMLyrHo9styvPr6fjUxjXNAVVvam7mtJ4xb7zyN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JaCAe3QbhuxzmR3UGeGkWB7UtQNwQT9t9jnThhtJ2U9RtG5BnP66TAvfeezNWth6ifZar3qUoLP9NcUMkN3WrT3",
  "key1": "5apwYE1ZeYcXYPrJkyb2DyErsZcKJUfPoKH2mfMc83PKvTkcGXhXztK8j1BSboazQyVG89QcZrofDnAKt5mjr3fX",
  "key2": "3k5RSLTCwbBYgeeqEPvU5YmdfAJdM3C7R2xkyjmCvnTYFbqw24qVjDPC73eJkc1iEsUuaqnT687eQmo7uycKPWrK",
  "key3": "4SJXBPREDekWtk9SCz4hnDJVsViYv2TjP9gxo1GCxYP9KSixNJtHHEwvj4AUmN4c7L1Rw7kS7S8cnGN7EFRQT2ss",
  "key4": "4fjyLVTsCutnX8PfbXkjVfdfqJSLcvYaXfvwyRztxxBZhbz46BaLpjRxPRP7FckKaxpXsfJtcYvXerjdivHkQaVV",
  "key5": "5nsrb7Hsw5aZhXVVjVwHac3ws5SAtpKgu3g2f2h1djpi3YfoaNczwxn6oTwdrMsDfLZaQLo9gdYm7tiabQJvWLMM",
  "key6": "32b8jtXikZMWK55qP2qWq7um3bGRszChDHWnHLjizxqoHuZXNc4GucZ8iBeMZqeokLAc6e4u3uQUVfmS4yyKstp7",
  "key7": "4hmcQNTkjxq7GjPfVZfWhY8UPypPK8ZPyubUFNZf9vEUiX8ZJFiDmwZffkXCUnm9wamP9xRjDTy1o97jXuB5vzFe",
  "key8": "Uv9V6hzrNxexS2f6zPpmhmZhiyGvw9XkbtNjCmQhvHLT7ja1ej9ShMtX2xNz6GnH5N7daSPrX97uGxYBQVvtGXv",
  "key9": "4WSXHsCgBNfNgSLxAhPv7u5FxKeFNMSUChRJAn4o3A9gSFDeydkTcr4eL4TZUvaEBYU9R8v846TudLzyVxur4g48",
  "key10": "3e5EeZGuSkQPij4TbBV31NeNgTBd1ndNFfyT9RdkbHbEhup6bLK142CpDdcYvsjTmUWaB6Gnqrx7vBNN7btkTmqu",
  "key11": "FL6s64EuvuitkCBXQ9ERnwsUzks5kqNxJEUJtYvXS38L3HP9rqPJrjqLnx4Kv49152cBibmL44hP5aesgbLWHvM",
  "key12": "2EQqsCGduEt3Gqqx35k4wi7ksJLyvDeSTCV7TBFPJWUsePZ8KMnUquXat5jhojihDMXRDHmmnispQE6CsHVXSjtm",
  "key13": "4eCFzRoVQCVL74rFduyPxHjUcbjszzTBXd8aTYPcubYYvJouis4dFgsWvr7cUqvqcSHU5snuBzroFFfgvWphPM2C",
  "key14": "63jLiuzuYLD8CVSFzUrJire1g8haWCcnZgJyQ68Y2ftgDyQih35WHyRygWM4q76CzdiqALVE7N4edmoNVXugUcPj",
  "key15": "2MhDdkrmMDa7BYddVYy5wuVEBMbLhLome7seTNs7mULCRLYLbihhf2A2xNeGFW6pEobkoxzVaNbu1VMiD8nbeEdK",
  "key16": "5F7NLjQSuPAZo94DVvXUqm5ypsFPVv7PN8eGPdeDdhnbJ9dzWY6LaVpwP1jyF51eYJLEXyjpk8QyysZ6sNfSLCrv",
  "key17": "5DSw6ZfKaVfJY5xxim95zR3Le2FTZV9U3yPn9LCAkMZUmmBECCWXXqW2pViZDxudq9cPQRrz4dGxDQE1gJjXjPZr",
  "key18": "V6qJVb3n3Ro9L6HXBPWWE1hjdgEFgagUDPf6dGgjdEQhtr1VSbpHejokrQmMAz2ChoAhbzax4YRz2gJLJrhmRLd",
  "key19": "4FbgnJeYfRJ5hXKDGvGLKGdeLUSsy4opdzfzDDba8LqwGatweMvJ1PMM7B8P5fYMr8hX7V3zLsDa8BAexcZmCy4P",
  "key20": "2GUmR1FWEyrCkQxKpKgRNXTMHwTYjtS7ypV6hsSVSh7CjNrcGTjAt9rhcXMS4x1nWpPe51VusYVyGPcJ1L53Jj8Z",
  "key21": "3ivUKWYsZ6QPSSVdqM3vrC9rZZenHwkh7aoXUud9R3hFG3XtU8qYWq3ZjwSFhiYP7p1UfsseSDPXs4hemVMMUUbM",
  "key22": "4G1mbnF94ioFWMqVSp44MaeinVyaHfY8Fz8yWQNnQtvWTNJh7aMXk32L1vR5gDUn4VzNR9zRNeVZ1SPUFTxsEMLY",
  "key23": "rfhCrnK4asaGmMXxjdEMvC6qjRARe25UTKhrcr95SyA87sYU1qZSgu9qRLKwpQnz2A8uvkf8Nj3Gb4Wf8QqczJN",
  "key24": "2bP9zCsLp9kA4dSq4bLT2D6k3FbDjTsCRACj1v6WyRcJsbDktqt8QRDmSnC8ZNVr2FP2bErPc2tuvqQZwnckotkc",
  "key25": "5Cwh7VitG5AsWKzoGieoJsWVCfP5ckzdAj4gSarWYX1HVQFwgvcCcmddEYNZqyyzaMS6aY9hzNR5ZBohBqW5i574",
  "key26": "538Ms3D6oQvMqwToatXGTGHdutq2miGtYzWi1RGo5f9tkEWr1aNhAVBPmuSnDQV4JXbFoZG8opE23LGQVi8dwRJB",
  "key27": "YZeJr7skaRQdecvdUhzxywLBfnzgdJVZZP2FTwFBvzD3k7W6B8vNVQ21MoxTZCRDMMhg4zKEA9ZbW7WiBUZthkV",
  "key28": "2rGmvp6XVhK5jcrm2Frn6j5QC3f6CAr29eo3454FuxQ4ihpeug63CaZQLc2dWqn6F88gWSx1gcoBYEievJDnwB8m",
  "key29": "3SYckzyiHG94a1t7pn8dzY4zDbJRYSw67zXZkESH4ixG7ze7PR8QRK1tvwzW4tjamWjEBzp1kzsuMRJd4pYWD8bb",
  "key30": "5jFHUDfDWkRxK4oPkwnbjiihw7qwUvHXQyri1g76hhganM3NSoRRiGt6mXvbmWzZs7trR2ASNK8pKWTDGrk8ctdi",
  "key31": "4vqqLW7xKB5g3se7EwSoAjrLH4FR56hsDnEcpdFGwtA91D3QhuDfK4RJ9cSWyKrin8fDjNQP3ynnmLrDVNPk2rSj",
  "key32": "5gDYAFGTs7G21jdfQmv4Ecngn9zoiuMCkxQEJ5LPUEsjvJMELwbCQmNkbr5pisGACjXsXfoy3F3iA6B7ULY6mvjj",
  "key33": "2BuKYivYzrz2zJm26JrHDb1jYFyHLiz9W6XgPaqTLyaaibxVHX1qV47jy2ub6LC46M9sjx6MnE9RRKyeNDUE9dvd",
  "key34": "5g6iX7j2HiNBwBa9vNr5v7tuE6yi9iLrFaoRz38mn2kMaf6ZU2iL2b2oChNPvWyACTt6CRRWGVvUd9wEFZXgANNK",
  "key35": "CmWPwNZxBky3g9gNzEqFcatEFzijDjgEhdkztKeTSnum7TzVyQVfSyzodVyXoVta9RVqpxwq8DARBEapBCaBc6d",
  "key36": "2xTrL8qjk84ceonnQxVWVrMsJpXFQqPS1vtHQrHt5TSUmK61L8uF2GWJ9CaCC8zSBtnYPe815gSXXebjPCNWDWCy",
  "key37": "4hkNTLgCFrtz6ZCMm6PR5fKcEbPGfoRTtPdmLtwtS8fdavtKL6HQULz3uafyyDmNN4esX1FuaQom5sjdSoHapbAg"
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
