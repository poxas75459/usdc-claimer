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
    "2kk89oEMxUogeVuvKCVUkaQjc8ahjNqGCj4M45g1z8Gfr2ok2fQAaGMArqbp9WwYNUzcSgPxV1rzVb3WKK4EaLy8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nNaddREaXQ3811tLumuyF56yVmbNwWmZNqmmaDKU7BcKfHs7daUH2hVSVUcFdafkYHZn37j19tbYgP3FayJ8ixH",
  "key1": "38ann1AzeNuaMassSag7fJrdYnjqHpWw66dCPa5b39g1W7n6QaBhCPWE3cnE9afYQJhByToZseFxfHQGP2w6QD6T",
  "key2": "DfAEBLhw5BFEf55DJdpDJuFCCR34s68dAKEBjZbYE7T8425Q8zXpcRu2QduxwDNXkAfGoU8XPTyaimNRGQS8wCA",
  "key3": "2BhYyjwX5WiP6dS4ax83ik4EFQmeSNN6ER1F17zkH1Dfsx2RHHEfpuve3NjGFtKJkN3BRDHW6uwqp9ec5JM5yUd6",
  "key4": "34WQfCGeCBvNxZU5sgtHcVmWXHjh1ztc6p8UsRQnv64pGFpFx5NjrguKvYU5bPQFr8pkcPNhjvyWcPYLvWgVscQv",
  "key5": "3P8ekPvjSWQp3niYsyDxWi9a2GJQY8ppqEFaxbUdSCvcS7BpNvdKD7DUnxwQJgqLkaVPKzUP8baf7SJxDa25ohvn",
  "key6": "5H14yi2by4dga8q5fHGzmBpwUZS1PkGPznMG2VfapRWzd2V4FXeLgURdUnBBHLNzUTK4aawygevwEtZBEjEGgr7Y",
  "key7": "PiHgAU3Ga31JgaWJaZ3V3edce5puUobakxBtx1LUYXf9XVmCRPEEG15EUHuHeKTXVQjjqtUaVFiHvQj7Yyguo3K",
  "key8": "1hgrJbbwHELVN1tPMt9cXyM6k94uQTZ9E4gpLSNZYAqCzoHo1LUp3tE3MoHgHoronP2CQHedXD3kD4BdbJP4WRn",
  "key9": "e7PSov8XnrmF9fqSWmivHKys52tnFXSXPG6CCiK1F33BhmkvfxXhqki16LSorVbBGH5X58vKY7W733dur6nXRXi",
  "key10": "oDxrUayEkWMPDPbhp1RCzB5m2GMLji7ZCvTKGEbx5XU4ukqs4V68Lz2CWFMimPxKXiRFCE6R3rBLL5XMTAGXmpM",
  "key11": "P31ngei5QkLPcHtYg2kQ8LAQBY6gDyTU2vuScPosY8QgkeHs3L8ikfcxRYpP3tvv5M6X1hQz7eac12i3MG3m42i",
  "key12": "BmnNoyySfZRM5uBKBip3fPTgNmcPfmD8toRwUAY5jgQYqZNCNm33U8pZtGQaierHun9UwXwBuRpSni7mGp8f8uG",
  "key13": "GTTsEqGyyc8PZZEvwV8nMf8xKKYBVzFAHEJXdF8EAZwsUcVXgWhZSUA2CPW8sXfwsgr42di3aVNuUW1VYVyhj11",
  "key14": "KEuQ3Rb5u8s4CbLgHH7oF8MTig67EpPLw8Xh3fBhboCaGpenRpTNxuYnZENKK7dW2PwwrfazMyNYcfrd2cvuDSe",
  "key15": "g2DePuQpnuBeHudiFw7DpVgfZgTZkLg8oZ8nvsaXgsU5oW8oKUVEDVQJuopQ8HRdEW7YyAAoBdG5kGPSknLPsN3",
  "key16": "2YPTLoV5GZ4U9bL1EUoKG1V87mPVB7PJkWszX5t4wdtNR6nQ7nwRTR9yumM4WN4vTQFvDgg8ZBP5KLWRVb5Wy8Qv",
  "key17": "3EJWZ3GQ4uK165KnQzDUhzKLdaafSCko1khEyohacKa3JXwWdizSxGXGFoWBr3agQ1auZcWtc5MK4r39EVJ8uoSM",
  "key18": "sHuZMSZRtsx4qpmUmhtmgRNwJs5HvuKyBsYmqc1jS7UxyqGPXSHaiu1Kry6SMjMFR1SEnJPBVLzWFR9cpTnTBF7",
  "key19": "5Gg2EZBr1VZX7pGUUvpGZj6fjmuqd1GhGirHkvj5dycjXkKwwNJYkUbfBJvMvmY8sBj1cy3ULcHSSdCMqS76Vh8b",
  "key20": "ZfvpZ1x3ekY7rDzAu37Ufi928BU5ewZ9sxUtBbqojHY4ZunNuxHMSaZzWZ2ai8Hu8uSPRwL6H2XhdNSSSJBMyoe",
  "key21": "4UwgYTwmEbTFyAumLSPofxcRnbdqVJwnwrbANpLG5v5VWDGpgXSb28DACVGFnZkyj9ZyEkrnu6xhwKMmnCwSc3fN",
  "key22": "3FxG5Ra353TZWvUgxhuqokA5TAsE9MCknZUeiULSyoxCyavSRbUJwnHnw8TKGCtk2dgtiCg5oBRWek2U5qZhBNbQ",
  "key23": "3AsukES5iaTVxqCB4CvwYJhYtST7X8JADkxJekfeMXYJGPsEopf6Wn5JU3MKwWNb52wxNfvobZg7jFyVQMEyhNRj",
  "key24": "5nbk53HP8BH4sBRsp1RtqvtoaKLaApXni7jsR4F2KbJaE8XxSAMwJDeHbrcaZ8vxTnZRZhGsdq8sfMbcVGthTc9m"
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
