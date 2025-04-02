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
    "2QhSPFPgNXpkwuQxVAZUHSZwf7yKDs8HfFfwKGi5xSTwPhG3Sd3wsYSSWXx9YTHjADX6Wf55AusoVyF3Hq5CGS8J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5i7UEpmnrKQWdUSt3w2bAW6rCTeTYJmEh7XuoubszhyGmxwRWWxZ5QaJJQK8KSyZhxwnGEwJyBhY3c6uG7btVvbH",
  "key1": "2XWRqDNUmZtXFwd5FHBTd7y9Gir3XyaeUwoBin955ywrVBNqnt8R5hkfM2a4HpZMj1g1Qci2U2JgENXoFZW3DBoc",
  "key2": "MyHyL8Dq8UZi1tQRLPvQcysehXKziKNDPBLF655eRws395F5SKRpsTxjja2aLaf8oNxZ7hotWj5HHT4TmVTZpwW",
  "key3": "3P4DqtqF4LurfSzqtL44BU67J6uMcE2xgMPgM9ut8ok8kC8FhtTqFvMoLMcbBPa72drgPuCGiXnMKZtDE5YRyb6f",
  "key4": "4ZzZP8GfZq7p9XT99CnjxAq9RJJr4eqq6unrGCz9ma7VYhNpXJ7BcMcCHtXQuGM1z4KpDUpA91X1HZJPfU6Q77AJ",
  "key5": "4k9F5C74BgzAEYx6Jjq6Ai7s5V9X7Sbretaj7cBKoqBZncvc9ceaL6JiTc6QWQURMzud1TBizoED9kj47vhmqc7c",
  "key6": "47E8ojVrftAXb4ScSUHyyLCwF6j7Y4vY1dScMdziiTawLJ2dVZDApe2v3naUkyMiYJwVVext9RkGY6sHbgZYiEit",
  "key7": "2M9SqsiE79tAbfRt6a4srDRUWM5kvbFTG2fAjnSAk3ZoqfZyMg9QEqF4m1voUGEm6FqrdsHb8BN7356Rj4t8dv3i",
  "key8": "CTfzqaB9yCagCwY6v3vh6f1qaxXBLyi2nqrvitrM714EK99QuU8Q93KSXhJS9AMPCqdf4UXydqEaVyMrve3zRWN",
  "key9": "6bREcVKRgm53tek8bieycjR6cfr7yQr1TzpWKdMSmjVGNDRJAN3cNqbzSQRdNVBcbgXVP7AjYQXM7tbXAgv7JiV",
  "key10": "4bqEDkap5gYys2H3LZF1iiWBi85nKGVwBFLjpGpAVZEpPkeLupMYLirzKfJJzQv1viZ4Ty3xQ9NXDfdLBEqVSo7j",
  "key11": "3GCF648L2gDvKUYwyHZzgv1hj2mpm3umbWwzJcHyh88zmMwZR9b3LQbb8MnBaHCjzk4xrdAsip6AUnBQ1HkP3CvZ",
  "key12": "4WyaCCTskhtAQJprrm1d2FT2xr4LAMF9bZuUF3C6rU3MHuFwT4mN8DVLsuHVAVbJSHjvac66XQrT9pQApypqzDPM",
  "key13": "5GQQcoTVQpRd567jNmhmc3mcMCGcoe4YubXhmEMHDNGsCz6ZpSMgPQprBH7mfT42sDyXpEhSnzRcpVdSirbpaxnU",
  "key14": "dHveWPXt1AgeFuz6gevgCrC6WDvjCCeNUJeKV72q1pH76FrzWSaopzc22azLgUJ7NvPJSRKknpXfuzrvFnF6eHA",
  "key15": "PuDzn93a78FrFyndh5p23SmxFBTiHSCWGAtm7FohQuZsYu9HAw8UckQfktrxUS3DkPrSGLzhVzXE1UcTiLtnoeo",
  "key16": "2gqRD3B9G5fywCm6nTcvPsec1hCAfa1rsrpPyV2LiqqzDtNVSusve5g1xWo3T44qbRRAmuZuiGVeFnqagc5QwAhz",
  "key17": "21KDdSFW5WTq7TFEsagmsmRLh8eWRTozA6VNBjHXmWu4HMcMn1Nu4vp5pT7UB4ZJb7y6DpqxwUqMxjdraYu1JVHK",
  "key18": "Xc95YxdrmDbvimF6ZdxcCHgBHRC8kz9DJeE2MyBS7iMX6ozGKizkj4wjT5nu7MuoMYi6ynQEd7ZvfzNEwfbBBtL",
  "key19": "51ZpKamVLFrrgrx8hyxrjHSjog7VkucqMLfExJvEq9gcZiZFEgf28AM1QneutvXsahDbH1Kw9hCvLX7n7iMHwVLh",
  "key20": "2zaxn6mSxCAmfXm2PVeWuCxFZCdWaBCErgrkjYsmy37ak9QZ38Pv7AJByAyt6Ee2QeTYLKQESkp52nh4M2wsDzBK",
  "key21": "2KY2o9WDsG9zV1KhX3CnhDdheASzuZP997DiSC3RCfUawFSV9j665oxk76TxxBgjUx338kVQfwsujnEP9FLBkRjy",
  "key22": "5nYKfugrLs356oVoGmxnvRSdVqEizzgM4XeXSZtsG8SqypVSXYH2BnpvBS4HLh6iBFa1biVtKiFiyE7PMRwJPTqG",
  "key23": "32PPFtwdGboGoNM1T1WCavMSopteZkdNY1o6BRUR25eHUM3Bono89bZe1CxQyDkzy9Zux4GGYNLmzSHppAtgAqEB",
  "key24": "5LzqTX9vGNnZgT8Fbr2fRrKJjfxuArQWg7Tf2cG4HpVHRQ6MFZJwQqUteefpABM4aTv5iHWTDxH95jb7kET7Tvzx",
  "key25": "SxhsxBs1zHy6nanxxrBUrrtFHY8Z59ScS4WJh6tLDYmqt1wzWguL2njxBpyJw2qvun7BdzzP7iVGYQ1ohurwUe9",
  "key26": "514Lkyde69BpYiKeDzANkmq1W9m11hLLU4jsEb9wZGsgxkry74r5DUABbGniVLukxfcsQnCrzarX4VziCMv5HGF9",
  "key27": "3q9hRq77uNZqGvXrzeWYSbfNRHdXj6o5SUuxdx4urvqKoAXPvZndPyUQT7h5PfJaTcdqqLS6bwRGhz8WVbkMiQLV"
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
