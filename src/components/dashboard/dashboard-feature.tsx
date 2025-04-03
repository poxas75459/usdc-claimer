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
    "5eraKQnktyYBtyCQdmhzY1TkLc5fsirp2bQmLNd8vgDVBkKnrv8PYSrVZDRG24BRtG31cjtuEvHYB5fCHA7o8fBs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sQCtrAZNxrm1HNeiZgZuHvuYoJmLTpUKAwsnDTBjUmoeRGtLFZLM3FHyDAM1VMbiqHN8JXHWNXq47xsxhajPuU2",
  "key1": "2bBk6ypw21Cw23iNCwZ2fs5QvmRzXRs9BTCugfbjPCYW3RSNTe5SJZazMUJ5yKWbk7sMyN1c7D8GU1YHww5BSi8f",
  "key2": "3KApLFSeziCs2dMUPozHKpDzKk5bHUjRYTQ2xAWu1dgBFitrse2erJf1fBMxp46eKjp9aCGqyq3wuYwk6wfwx3Tz",
  "key3": "2gr71AjTaPSKmSeCMDYf1aj8ETrmrchSdXRDbnq8T1LTX7mJ8zUrqu92WXx9BV86MbYvsFGSeYMdnggQuot2whQq",
  "key4": "hBLu91EmdZYCQQ9TJtRjSsRRLVLcfxM8VJEdGAVjxFGHpHAYWARLsSBGdZt8J1TSGH6Jk45TNBdB268hSvUGqoK",
  "key5": "4RUNQcyK81LPyqU3CoqFeRrr9XP7T66xNhu55z99mGnUmYZawa4Lfn48rQb4ABnpdH6S7mcHiQfcBdxvLYRRZYRw",
  "key6": "pNrt1wMFCtbdyCbwEsqUAt6XMeaV9neRDD1XV3zjo9iWejQYM9fqsz2d411A4SRnyvPLVUthK15TytXFXD9eYg8",
  "key7": "5kjMmf3eHyyqiBbwMBhnMzH9BwAhrHnCvXgbCvHVcX9Dish37BUzAowSTaz54SWsm4idWBU3T1BXd3EquHhezNdW",
  "key8": "23DPH5WTzzHH3W7MF1aVNo9k2aVYLyb3YQmbY7CB6G6srQumJrXAMd3qiV1RNpAtfhTqgQFv7ptp2LEbjVCPVdR8",
  "key9": "gdbwLMgi32WqYei6Norg2LwmJnWQ1c6ywTzqSqSVGahunfgChpgp82gFCCRp8oVLBmAMZ9L7J7oGGD9UR7ku4qz",
  "key10": "49iDCT91EE8bYECBSuQSoy29euEJDJPALytxQp5SGrMw6QPFoAszSavph2d97PyMzwS7ZScxtdFJMQboEWe4vdCK",
  "key11": "5rbqj2z46u1vryrikVhTzhKbSAdBRwsKT8N2msbfah7T8KdWzzFGCLZ9kDHAGH9YUEDWfSA17Hkn9rqKF9a1brpm",
  "key12": "Z259jReTn4mJZCahYNpNacNHnaEcj4Ae9uHj8GEJfXPj7UeFmkJXqxs9HuHMgwMHxQfwFpYxssFoERQEC4qyuuf",
  "key13": "GmqUJaFcHQeoeWyFKP5tLbgy8JJipAPRhVQwS2GJVYmEuvjmXQ42Q4FKTeaTLn1ekrb6dr3SmUB4Gu4dnbpZ1uQ",
  "key14": "57pKdwPB1362qVMXHnnVtFCN9K4NbvJJif9v69G3QSqkomybSuwpNbebrzYuuM9xGQtb9Ungh17vtYQREg9fTQsA",
  "key15": "3josqJfb9X68DLSkEQG2EnQ7VmkT8Mx4c4U2FfNvvrD2ptgCskdWyAjNJ6M934DZc2YcLhZiR33ZxXQGUqtBeLUk",
  "key16": "akKZwyDsEXtdXvEa4LjtWbSqggWuToaPRPoj99catXuk1N64cHYSKW56T71PwBqr5eK7CVMi6nm5wE1MpGfPNT5",
  "key17": "58aVVE9Pfqsnz2Jtsq9chNH7ftJKxig8YobJRYee5ZyRSFKYqbS3UpaDHJgCD4jAqHwE1jP8KPGNWVnZpFNrMy17",
  "key18": "znG7GNvBTAxhHmLvfaXeCRaEoye9cxmmpvcQzmMxMLJPSbQkPueP7mPZM8ccwJdhbPRpAcPvU5EpQSEdpxWiDST",
  "key19": "55BVNf1xpecoZtDY5oQmX54Qis61WcBqUgDR7LmGiqTK2CeG4nRdca8dGWzvnXKFEqKNFuJruDp3VBE7poMkfAUq",
  "key20": "3XJqviStB5Dt4hXFScAFSLWamQm1CwZC6BXR2P7nxk6TPiQCjxhZGYxLHgSwHJAvmM4rcjBSm4Z33AxNuC7WMBST",
  "key21": "4kJoo2PSyqY5ECiEUhirzg22jooov21BGJaWZxuQ94LxunBiVKnCUBMP46Yzp65HL51tdSvGgJJeekMtxyV28e7i",
  "key22": "H3QxQhnrfRYrgrPWXNEJsBMDR2PT9ddg4Au3kGspWKBhp8qdBTjagjkJYCdqDpWqf3HRjBramJmYy9QDQvTpHLP",
  "key23": "5Z5CPpgSuxGiau82iZ3XxgeUHqQcubNMdjxu6Nk5rnHtjVpNBFQsAZTFos7By228iPHpG8nvFUQZau9XVNRax8eR",
  "key24": "5QtKooqq6BFXbCTRDERuptzHihB6sjnTN6bAXf2AxRg6KgDQZVwpfwAtmYGB5XhqNmfMUaASH2FX6abSGyQRJjCm",
  "key25": "3iDBMyXgc6DXryJmRwPbit4SargXRhA7qRHnzu8DVZDdaVk2VvrYXBVBLbcpSdmpsdq2z3DzpXMWoBaZitXPsKdM",
  "key26": "qAQKomt27RBxBtTDeMKdrnhXVaZyjFW8xc97Vndui5TrGpCdCwA9VbkNnovb8niS58w7UeUiHbMDGyhQrKpS1kr",
  "key27": "4iuMnPp2QV1FfCp5UU6ncVi2cDX3mGbN7K3p9My9TCyPR1EkcmcvvW5RoUmRum2axDdtGXgjTEhTjhezmHWk8f3P",
  "key28": "3fg8YE2sspUjzUY9FLk6K9PVs42dn2uDhFLySZXrtgWZANyswXPF6ecYk2Et4qyP7czbAMvYYaBJ644KLWoiZMmA",
  "key29": "wHcA4c2tqQpPhjHMZtpGY85bWCGAsN4j2ubSnjLhCczdZoHHAx4TngnDYaXgSJawvDwdqvTDvXbF712ma7cLn4p",
  "key30": "4eGaQu3fWeA3RgC9TyiDXkxmuuExq3Cc8yTZZiio8cF8wnBbXvFNU38SVKi8CisSyfHqiLqpoo9CcWA6dHU77XwW",
  "key31": "2CwCLxsCmvo7Z7k4B3pbE3nWR51bzqJWwoQpxf8VbAtsEzzCLeMqGUXMcRv3D8s24XApDoHgavpSSvGKUo8SjFzD",
  "key32": "5YFaeGSi5WKteWH8zetR895uPngy6s379T39G7AyncpYyRzagMUxtoYEMekP3MiKx5eXZyZ6M4KwxuE7AmSmg4Ei",
  "key33": "3xm8kuHf27YXhtcGEeWNCQ4XSYVLQ9eNXPcha2hZFxp4MRd6UqDMTkH4gQjtW4ZAbXeSVRbPLqDiTzztKyLdaonY"
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
