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
    "q8Ce7uMrZAAjRB8XVDj6RhqzDdkSvJ4mqpApWiVLnKfi7wyBzp6hPQyAJoVFFFJUrStsw7dHjsqTjiaCbYMExgB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MZHKNhs54D52oG84ugdoVsBCXnCndbZtiAZhYNqviqjqrzu3juivo3oHtELedmDzjrJnMxXU1kxbFXHHuJsnECH",
  "key1": "3YnRYnkQP9sPY1quKVvW8ZcBKdbD2i6TfUeaFmuzTiM7WjXmSbX7TQ2Tog8unHA3rtv4sNRmVfhG3nLtqYhk5DHH",
  "key2": "4Wf6EjtZ9QVLhX42HPLhEBx1YsciD6UeqTYUigg2HTAMhLUnwyLXrh2qytM577YWLs5aBw1EZSF1yMFXdUHe23KC",
  "key3": "3DtdVKYnDU12s9kDmGt4ihNJznVYDkfVuJGvP2bd5cvTRcYvhTF9te4s82KZv8qvyBBPfvpJhfd1NG82Br7xwE78",
  "key4": "XbJQy16ExYT55deypDncYpuMnCHipPse4nW9gNWoRVZuV82m8VDQHGiRJcuyeBC7JSz2UTp1VkbyQfr1CVZ2KWi",
  "key5": "53qeJU62dzabkQQEqP3V33y7PBjZHusm8bb6ujn9hEFp8ykHmcgg5ec9wPRinLFWcPCQeoq4nTiUFfywNTVUYRse",
  "key6": "7M8s6zg6d5TFdD94Uz2ZSZ3KZzCH4mUQoPDhBa8sv8fqSzcr3KB16Hv9ZGs3eB2W1rYo6pW9MhEnYcVUP7h93LP",
  "key7": "34wT4qqtYZ9VKPKEAxbSUxwLc4rsbPA4Ut7RhQtuBsBHmAaoWkJAUiovWSU6HrNxX8Q4eFRR4mTE7rUz3XNMRoww",
  "key8": "49AHrSWknQ52LNPQzrck4UxfcTvDafNatwMhDV97sSQAP4sobAwckEELVjb5vEBRWSKPzn5T9rSPUFQ2tjbGpPHN",
  "key9": "ey83jSGE2K9kjyXPRSTd3iKiLhRJU7UqC2tso2HhaEHzLtdxV73VKHGJ6mk2vcv5tW5bUqExbRkdjfi6e1xTic1",
  "key10": "4kYAWi7qghwJXFKkq6hDp795crMqF9BxyJLhtiJkuiG5NsHsBNqiPR3ZGbf3YHT89eqZXUdyaNtWpRTzhiuV3cXr",
  "key11": "2DtTA9m51zg5LEqBhLa2LwckdD5JqT1NGT7SV7dQy8NtMYCksu6ZoAvrNdgSVUn5syviTFrhHoRGV9yNsQaxHaQ5",
  "key12": "48HSuxbCFP949jRPrWjusiJA7tsdmhV5zi6RGSaaRaZbodh5okNkMrds2LFm1ucZR3EiuqjkixEZBsHJHhiMQnGZ",
  "key13": "5XChnpeVpe96qdydU5PKudjRJXzRcu4LwCiitgShXCQv3fchvX6HKRq2A9qjBbB3LJCPoe9DUsrXE9XNraUvpTGJ",
  "key14": "2QXVK1vMsQE46XYKRaAXyJ4BS5iiWEuXzPkpSrwA2bhvZEXshN1zStgJ1Vetqm4V6aQ1hMA61gMyEFMJiH5VBBjW",
  "key15": "2pDfwbXbNgY5gXbnB1wRkBgzemG2bgLPczYnUHMK3e8FAJ4SNFkunue4G1x6DCa1jTxDTJYB7QFkpsmuXAnh5QyG",
  "key16": "3J9psjdQacvH41ygN42y7yPsAgXpBpAeUqXAXQKi27dVNYEk9LaYb9sJQg1CvYY14SKaYmn2TCUUvtB6kGj5c2Pf",
  "key17": "5EL87AZ2cB3p5GWXAB6fwvNT8fPMyn6Wv2i3XfbVDFnDLaiqaYj8CgHxgDHe4UAb8KAckpmKEdAAHyQAXVHJSY2T",
  "key18": "5W2WdV5QrwfYAii2Fg8WkVGWSTNFLF47HCkTVeQSEjt5SAV5Ca1E8YtA7vAE1VtoShqSK4UmxQS7GbnXhMuaQd3L",
  "key19": "3tTT5ZckpntSrf362J9AMgYnSbENwXVSByakWVsyxotB9qFKh8hiqzMvt9RuQJFvC4uJwZm5u9WQ33rnwkXZViwn",
  "key20": "3jnreSUYX958v6AptiTFva9PUzyc5ttTdWx5r4nX56eSDLSTr9xWbjYtfAYZK9Uzoxavs2bVmGJKrkUGETreziU8",
  "key21": "4nYAtga8mVApW9JwB9X9PHubwL7i8scAhnfKNBeJBVSWeZUHusxEY734HM4tcCDUqHG5HjSUMaAHkeKQ84xXL1NQ",
  "key22": "R3ahCVD5Y66CpgfJ9vZDAu5iG3MTNMu55dqFy8DDfFbyLDAZFadG6CW8gtHrwSR16w66e2SjZrdCTk7AWoeULpP",
  "key23": "38bkcdPBNQchscdQsAoSdpjVwDFWiZ4pn5ya15uYn4Ho6AA4cLPTXLGAheDFb9d88iM1DcUzUon9Ux7FsUshUPvB",
  "key24": "2KzGnzzPezPLqqqGtTktWKtKfQgQtPxvDtojotEWW7bMeija18wAXMZCqZZEuYBwtbm9f5LojbJFrUR32YrtBppP",
  "key25": "3XWU3uEiL778if6p2ydkNwTF4rwwdEpSXntwzM7i5VXrQkVUbrWjHazzv3spvMx4k7L3Gcavp7c6qgLU7Hi9a4R3",
  "key26": "3BQeJePFG5fSJ4h19mabvEWsF3pRoZ77VQYKZNU8Ke1MzzuQ9cW1ngJ5FMrQC8vR76yhLh5VTeyMLFWZU7v1ZXKB",
  "key27": "5fUABz8hPiqNBvrqRySnRsSaEdr6vLBfaFX3cSuLt915dCEPE4rx9rNWsaDfgYMGw9z6To91crSWsy1F4oDRtfuB",
  "key28": "HNWJ8qqC2ZVcxEMCcK35zEksLYmdKdjfBdqX9JvxiQZRPHEa41pR2dpSydbgdBXHPmd2mU5xRqsU3ZiB9cM9yGU",
  "key29": "49RZ1paWEN8mBhyJRtv9sCdVpn47e2GV1MKbEdoLaBXtbqJP7VARoUU7s2bZjQwcDGYzNYRPhewzwb9XAaMPTgiC",
  "key30": "5F82Rv2M3279m34obehmd21b9su3Br78JpmqFi9ExnpNRE7Pb73USXbpknBHkH944jSbWYxu3jqAjSm1qXxp4BLW",
  "key31": "2JxcN1LHToP1DBwb5hAYT7N3ZhuWgG74vA6gJQvyNqdPVbB5QcZCxUAs1zC5bexvsxBSmw2vdKRmfksLFevUeZZ5",
  "key32": "RAWZSJ4Rv9Mp7BprEUR1VH5oAAXMSbaSXu2ihcCsTfLQpAdG3ScL53CJUhxqqLc9TuNacjV4vBqZorfYwHCQGVM",
  "key33": "zx7qptYiC1gkwQEsWu3AydSCQb7YwyjQxdejTSzPEizk8HThnaf6pSzDytCmoERxum5E94ehN4epiBiKZxgcfvr",
  "key34": "5vUP1hBDZ7vmMjP1Pdpnyyh4Vmxe7nMSGk24ij7cDa78bRXnmdgZNCsrudMgmg5eNQTAFe5MPgHe3tbr8WiZiu14"
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
