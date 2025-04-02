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
    "5zscAJyigbvy1zjdMjWpfKv2sfAwunTaAdKyySzSVgiQ7oWdHUh46cBRG7XP2sgjktE571Sb2LaPdCof6b3P7Qif"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2K2dU2cJBUEoEU4vBPQLmbcmTcmitEZd8r3Z9D8qNYM2ZHVzzUXcEasMS8q3mYPtQNYbis2pPWyhPrBzvXfg4NA3",
  "key1": "2bD8giKybiBkoQgyU6JRUW1SUJDd2YpwVf9kMQhpaYNxRrQe8KGPGiAeY413PxrQ3Yyb4WvtSq5EtH5YhGicgNxW",
  "key2": "3GXrrb6wvabAQF65Yowsd35zPVqUyjPGWdhJvY4GFJ4wLYvkDLZFXWVby8DsGxFfko4ugodraeP71CZrvxpfnmXL",
  "key3": "PLVMcTduNuAuukUUeGuV35raUFafFTdWRwfLw9fUrYQAo9J2xn1AbBCg1vE7N9UTiZYDS59FHudvZyzJCzWJ5ZG",
  "key4": "4SYSuQtj9mzomFY9LAA5CdEjQ3z2ypQYLmdMLtG4dwzPmhSvp4gK3F982uSm3tTBbxBqeQRdvdJfKHTQERjijLsV",
  "key5": "3sikDqqf78EH3bPGdHVBa2FZWqeQN4XJNsgGvd8giQQ9kp1R1we292zyviW82k8bAFpyHPKpfMGn3n1dMeq5wugi",
  "key6": "33pd3c3YcL5sGeUfqiGbg89ERodNsvqoJC4CRSkdN6WKTKcsCAVXFu4KGkAuWNZjoAsiErkEK74r3TLCWqFNoqrA",
  "key7": "2p924kmGaT6zuNybMVn5sJxjoW9EbouHvShJV5FnmXyMtiRFf2T3iizTvU5u3BL1sKRzAjo6R48BvjZd4kMACWLH",
  "key8": "5XBaBdhKcv5AM8xNRmrVrosTEG8fdWxw55u17BUZQ6SP4TJTfHrY5syyvJ87cthoJaEurBTVFbBcULKtCjVkHTQN",
  "key9": "4j9obJK73cF5NjWmoNwZQ8pnkB7eSSwrfPVYjzNLbWZinWbbRrwszYTPECiaW64ykS7D6ntVc6FpefQRFisBs2QL",
  "key10": "4622oLkuPrt9wBLMf6mcbSJrdNcknAyzPS7De6JxVFkZxVigoy7dHPauMP7NobHSB29jkXVet4Gu7wMYbrAPaNEg",
  "key11": "nKiVGCmDshqfDmSXEqM96oQtx4xkqp5xSFGYsvFvCyLt31p3Znp7ZaThkG1Sdx15mB66nemYUpBiJmzvSz5ZUaG",
  "key12": "8CZC6Kvx9NcJQaG3sVHAdtyJm4vKurcZDzrRV283orocXtwTNTHmkKeH8p2co4rf9YFnTBUcKUinreq1DAMw6ok",
  "key13": "4cy3JwEqZvCbUnPjV5FZrAFskJJCKwVpYweqy7GTUfkWDti7fmqn4simujfLbpRRL74urAu44cHiVJRHRScYv1oB",
  "key14": "5wHWE3oi1cXEA1XwgeE6ijCVhcGaZ3sHrLCvsCAUynWbbZXDpGGDpdvjokAnhUhLMWxa2kTYdipF8wy2nuJwsgDM",
  "key15": "3bhgQMz5bchyeMBkWayFWHqDWt8wySGmU4hX7QsSaMexkKCf1WhwBcvPVdLD2NVKNyua5ktxa2we9xCBpgdhwkJs",
  "key16": "4WFUCU38YGPYHP3sero79XpErXLLvzoAJt7KNqUHcW5hwhDgoK5VRGhzRqGdgCwaakNsYG5qPxqdDXCFHcH8PgoB",
  "key17": "4Znk6a2wgxuhQzfNgyC5T9p8hhbPZRhnXHhdBpwZMf5ptQJq72wTR5fty8gK3vikfxGA7syDFGRAWVSV3kxxjkmX",
  "key18": "43Qoxb4fusw4HUVCgHUFGCLEosyhqWTaxXQooBvT2Xyjob8aTeuPL6WLPTfRwatR7XDVYLodoAWZvUqKC7FaxmM4",
  "key19": "3i6Di3Em3fZAGnBG5AMK91HFQ8MjtWT4A1oakPFcifUFW6VYaVE5JBsbSaMWCT9HMZKJnKFFrBKi2NAeMo9Behdp",
  "key20": "G5mUtzm7Y9cUhLVBpqsWxeX1FLFvtdLoZtaixUez6gD4eGRYjergvt8XM5Ua6JSVSn9FfQeagR6KnkJ5aAprxWe",
  "key21": "5BFFpJPSDR7Y2GgeDZ8v11oKbU7CehrJ5Gskt8SKPypPgTM2wdJ1QQSr11zxq8CyEapkpEmtyde2TSJSv8t254Jh",
  "key22": "4QvpAaEXiCNQMcnLNaaZx7bVi6V6eNTZ9vsasAjYzmMUJkyfZDUMS39va4KtTZafw8nZhetkrf5mVbMitMpEDvBa",
  "key23": "3TWHZ8YZaKpDaHPrLRD3cs685mirerwK3HJUnWK38GVrcFrgvCywqqJyMtkGDzaF81iwrt72T8EbfVu4ZpgJzCD",
  "key24": "4z7SeixH46BFMkMBA7kHZ54SeYpyzF6Rf5AD8MUqNha3B2mJqhew9EzyvEFU4wsjEkGkDysJDNDNECu39fS5vQoB",
  "key25": "2cH8LcT3wNx35FVFWTDnyFDM8e2EUVz1UFm39E3X3CNrH4zYS1kT9qSsioFp9RHNAg8dhuV3BnJwxfmuuWLoW64m",
  "key26": "qxV1d5nnXuHyEe1q2iKux7SmVavT1ASRuKCFm8W7AwmcXvRgTLHd9caUnXXEdNy5hkpc7yHoNpFBtuqyXA9mhae",
  "key27": "2xhXQUEh3zjnZLGjQVBna4RmDdnMVsW34VNQAP4a5MKJhJjNk1ttQp3nQCQoWk87Um68j3iVnizmtBuojKTNxEqj",
  "key28": "2CURaX5vgPKumgYLH7AJY3A4jVfBicvxBbXSRymuK98AhbW4DFkkm3Xau7QyHAgr448mdb6GDnHAwAUbnbkcR263"
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
