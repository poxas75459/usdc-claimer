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
    "b96512SAVWxddmQm3EXW9oDihVxwvjtDosqNAPirx9LekdZJcpHampC2wXBg8TGAqRuV1Q99Z4PkHkTDxW8iGrA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "X1JxuCVgCCxkDX5fzdB7dwkhDmwDQyLUVaVAvskEpeiMVxMpun115ZVKFcZDhqw8cnisLb87uZgmoLuBNyGZhAZ",
  "key1": "GiN6cq3yKz59Hhhc6eqdnmPgsEZkt9nu6ahu5AZGV7JRp4h348hxC6Ee67NxNjiPBThm4FfzEJTFiz9M86Vdhe7",
  "key2": "3fWAYqHGhqxtjqLSeW6ySyCa8ovBxvgsutu8mAXTYZNgP71ev5tjAoBv6sWJ79S4r5q6WZV8VCCAxamEBYHeFkmf",
  "key3": "3WfGen2awdB19BkspMmGH3A5tTGJkiWovqySoxVR4EKq4rrgXvCfRWQLeiStxmXULiGsB5vHGhb2skZq21mdooPA",
  "key4": "45cnpugsp3YXNJbZjUvgC9tu6wedimsMCwqEPhuEJi62mVeYhAUxjMhHmQQJqe5Qcf8P2EhTqGNdoq4SJeJFaeEB",
  "key5": "2EkXrAd9f9fv62LPbhHK8uh7KSPUB4Zj4QrjRUVWv3v2qdruUUJT6KyVsb5Ze6VKyKLSNL96JJfgmpSFpQsjDzyC",
  "key6": "V1KKy3RfaXF8qyBthdvMUf8unt2x2wGi33NQySPEuhuEgX1ULjMv6SwkurXPYhX1kT47AsAbxaBrVipLDwAY7hD",
  "key7": "2Uj7X1eUAbDtZs3C3kqdWMuBEPSr4tpA866hasvn7GmGXdtd5fF67UKk4WGWhKfWmg8BZKwk2hTn7VkBossaLpfq",
  "key8": "qvcrFuNazGigv4bJXuRyS3zjErc7fPPYzgohRTpDMBaeYDKFMZQP52nrHTU6ST4GNkNKrWGH8MB51TqtDZB1WiN",
  "key9": "szMG3fYijYTY2FrvE5fPZ8kJTes1aXRkhTapN5Ey2XUAz7TxuZ7F8D3aH4ti56mbjGfzciwHptiyjMf4debDcCV",
  "key10": "3MWeBFvqQTzjk9D87im6ozRp3dSrSbd5RRWdatSC2KeRiupvQVrYXsfgcasvsPQmQTExWnY2DNfqnu8Aixynw5xJ",
  "key11": "4oHsLnCmEiypBSgmyEyqUDSCaMeazZdN6xwoz6NoMFgU51FEL7T6o1UmjditwSbJPe2Q8hN8GJPXpiY67H428Kxv",
  "key12": "2wNmchTqAp16HB68ebqnBsibr6rQ6GJc8Sn1FLBG9rDS5vvynZU82wz6a8Urytcpj5uKzKLqF3hMYC9Gp67i92Mq",
  "key13": "KxgThoceA5qxVTFzZB9YqRGTPmY1BFD2CTZudSs6NxpScyEKb81DKQJ7Acfd2sUCiPHBnePbQiMUoYB1NbkBqoW",
  "key14": "35X8pBsCT2wWmVpFuv78y5pPhCT5DJcqVL3PMAsQEWjS8s6qpxP1ESz1BeZLKEYczD1sYtBPVzdWK5ixfkkCgaXc",
  "key15": "5j36WJtGWGYmUaBWx8uQpB7fbxFdKLKePwvFVSEBBCB3mejuV9WwrsagGTVztQgVNpxstvYt1rMWa42cZnELosmz",
  "key16": "4paUN1fx2MJzPosjkJfnCqerFRvJFpUJcoCU9tLE8bKLNLJx1brbRLvfmgpU6rwBkj4cqTKXcbMVXTg1bqZ7rUvB",
  "key17": "3eTT9LUQhFsNdo7MFgRoafaCPQqBBsefYoj2uAvCUdBUZcqokQiuunCfcYJDmXyMZMWWPvC1PVCy53dZr5mCxM2P",
  "key18": "JjyrzjArcK3L36ve7qvxLirgjb8jy8Ww2YN4Ginu7nBmxoWbcWyrQzAzfCX1cq6yBF3BmBpUMDpt7u9psSwKwpT",
  "key19": "2tQ8wsTWksNzXdL32E8xGSwCGXy2oZewFy8yyD1uXcqgUvMGiTvvpTnJj4GUMVsGcm12GWDD8cMBEaakmxz8Xo5h",
  "key20": "3zn9Ag9ja49biUQxu7i7vAKuygMwKB2EPUGEzMbcqj3wFrm9NQbSrMJyJvMEFQ79i15G1ikkdrxDfBLSPVWGuAHn",
  "key21": "2z2dQmFz9uRTuFNEy4Qhq5sDm5AzYsd7FPDkhuYssRDXHG3398qyCyquzGFKGrn6mEm8F9BdbAUsdj3RRwv28m3d",
  "key22": "4oqDPTBEXdLH7GqJev7pAfN35uB4cVgXytjwHnUzeFVHXHrYpMcBc3rSDRpRXpXTKvhH8GU91HqukUkEGuFKvCPX",
  "key23": "4ixKYdkBR59ZzidHnV6to23vcJxW5fw6PC9BfvcinzSTfR1urcdUsHjvR2xBFJEpATX37wrQ33DTgh4kBTZkRavd",
  "key24": "HTHn6F6PAzX6CjQ3PJ8nfzJ8WgZTsAU9Q4vnbjgiKh1nv3tuHoYFXJ2jvU2MjELSR4eyf5CSHiHYtYJNuG9Wq2z",
  "key25": "2mLDZCXZ8HdZSAQcVeGcnQKEc4qi95zsdBUoEY7WqYQAid4DKYqGUyhq5DfH6gvNvuUnVJAFUdLhobsW3huwStYw",
  "key26": "w76m9iL48bbeHMofP2dZCNdNSwUuujnx8cY3p5D7RZQkgpoJtULWHuFMqsUTUPTSUK8oryGB7vcNyw47KB5yjHM",
  "key27": "3uuHfWTdpW7cSAGeqenQ2MwZd1DFatyaRNjhFo3Z6g1Cv7pdG3Kz556EPMqp9JMgaw9P9xWeVdoeQVJnaGvyS85k",
  "key28": "2ZDjYPjVh6n31Wo56ba2do3dLSAMTF3oWcJjGRgbgd1GMunzCAmF7cQPyhga6wXJbEQfJA3wG2ih6cpmeudiPAx8",
  "key29": "3gSNtUFbXSK9Rgrm8rQ6H9dvyeuWiZ1H1PsrESgqpsgNqbjidkHsEmnvPTaCXk64aAuF26SvbYnHrugryFinhqej",
  "key30": "5jwAqH92mPCwyifwHXhRxhycbQ7ZPvuzLnQyfSAL7UPUpaUWyRduLrwfAjegi2j4T8gvedarfAvvYepUTnuSfLhP",
  "key31": "4AnHnS2WeF71jnkbW4N9Wsn2rVu6Hq6KToqpcJGjPieUofseJv7Y9NkkSGmPxUMVRdx9iYo7pGfu19c3qCevxR73"
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
