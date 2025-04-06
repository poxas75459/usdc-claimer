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
    "2yCCw2a7XQYd32ErNFgL6nga9ijX85n4SfBe5nFvfm3xsc9V2YxLgehEr5ZCJXpHfUj8iuGFkmrNfC8aXPD5FwEb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tGEbpNydxgnrLbo5xr1WRUcMTbhjTmR1sGQhd68zDtCkxYXNNBkHNXhgikRDKyk4a31vxfmQTA9sBzUjDLyELbd",
  "key1": "5y2biqnakrmxUfBSu6tKsLbqyVjbdZgK3rGpzBDqH7h8Y6ZWdhjWm7SPtx3k2gb3pikUWdZ6Dd9yEumH4t6iXg2X",
  "key2": "3dde3Mb5FKsE5oDb7zV6kHbFzgec9DdVqCwWAXGDSQHPiH3eDoeiWmUkK3UZsxyXPTAMVFxpWdm4G95DGtrGmwzM",
  "key3": "5arxK4TBVSnc32mqSvzxVApFcZPPrsiXLQdtYG8sneXLNqhS2FGzxoxcRADPAdWopzBuia9uUN3BL2jqFKMr8LU8",
  "key4": "5pVZuppu3P1MJ4YG47kkn4tqr89CxSNx76BoK2bhcw6fxXxzKeHPYFMsTKaSP9MDK5gEK3Hwb5KEvyAPMagzz9FC",
  "key5": "5M4sYiZ2q9vULdov8iMVaTpycUWYrxB9SXwzNXExpEFnTW1Eujk2BFtD1FCqcacnvVAiwu6o3YkkY1CZxVnZsuA7",
  "key6": "2syyS8KqtWNvtA4agTUns2YEXuTNdt2DfnH5rNo3aTdKuR8zyu4D7MxDwTXoZmr83zAt5ExWXaBSzZYthj3iRvtm",
  "key7": "fac8vVXHT4wPPB11eAvXCBsZ8ivqmQ1MBWx2tcNyx2E1QRECGK2U7JeeXUMumLtrjFyvCNaNMoM5J1whaveU7mv",
  "key8": "GP1soEHR4MdEpVNiVHTj7tGKXuMUPazKnMrfJq1ofwdjJUx2cvp3ViyuTiJ7T5RfemkMrpakDfGtpLAL337Ao2u",
  "key9": "3PpiuJvvxUpHCUbfhe8MtY78xmvthd47CpPeHZusZqp8NRiaMhScrFfd85yRXvsMUWE2xmizhgNmmfDArqp2RR1a",
  "key10": "4Fbd9KFQprviR6casHad17a2Xen3MMebEw5fxEki7zpJiBjKG2mAWur76E5W8dfAJtbaajvqrYcabHkr4fCHfvJk",
  "key11": "26eZBnHN4Ax87wt4cHq7SNz5HR4ZC9eAomRMGF7TAGXwTzRxjQ7w4JVjwnTTpu5S3wCpqaTfi3d2uafPbw7CFDFP",
  "key12": "4Ksdz69yhC6wyEyucVbCngk3BhUJaUoCVpj5mpR4GXpwCdfV1Zs1zQH7t2isFjGQvAm4cmFr7sWxAntLvtqpZecr",
  "key13": "D19vdRtJy9rapdyCkwLZcy7k2C3DEHqrURZuSzHB818Fg6zCeQZmVvx7baWZAJpBhDFqvhSgLx4a75TRBaqZgpW",
  "key14": "3suG51z4ViXe8Qq9rZAq2zhyzWdwPVitKEJjjEjqXTuf3BmK7ca3QHfnz2v5TkhWB2Nhx62MvXfD37yvtSREGStA",
  "key15": "3qDb8ABS7xTPBkDjdx5MhahLR4PUBvpaAJxCt9Lv6VzPWB6taFKnbbAwbnoMnAFtnA1JsSaSMNnsGSZCAoa12dpz",
  "key16": "5eEjaJkxWyK8oemgiTB6zFWEgWH2q54DnwVderCVsfMrukmggD5pJUKeNaTKVzKsbV9vm15hmuDSdiGjmmfYQPWt",
  "key17": "7dyKtQ5eVyv3gSeuo46V3HQ24GKF4G5TGARsC7DnU1PqEuXKWi6R2Soeanymt5zwG1FUU9KKC9Y8zb2dG4caCuA",
  "key18": "mvfpzgYr5yq5diUqKRH9c4uhF8nwsGcNFFuaQqWW3D9jpB92YuazXCUaUSnCYGr1wki7KnQX6adgLSSPmcugwJn",
  "key19": "njM8e275BX7rHd6KWH7ATvchUEdU4pKPGqTBxswGqiDPbWBgoBqiAXQUAsTMyc5euyGrnixWycVq3qscY5oF3aE",
  "key20": "Xoah48NNvoX3hmGDch7UZMcnXJckEqGXheHFeL49c8fW2ZxjJroEuerQEvxDPvUDXjA2u2jLke9rw4G5nibnz1b",
  "key21": "2FPQpJjJojurk1qTc7yLTBDTkoAn19T8U5Yoh2CK1T9MLTwjvTkCpoPaMCJCm4fUnMMB5cu7aZREzZCZtVWuTgh3",
  "key22": "57u1JQNXWHJcJGkwS7WzjygG96XMbvnCdNu3nz7HcB4G5VXhLWpZ3b9t6HhCPACovuLwikUXBMV28qzNmnooxh3z",
  "key23": "5WVHLvNJyxJqi3qcsBfZ1Rzm7Khc1YcK6qCyqQ6ZwgLnQ6wteMxMNhDYvHcY8ngSH3EyBkcF8Lak8MGMeUeFvwcN",
  "key24": "14j5E1MG4r8JZ1dCSKazAAGXbDJHntrxq1KzBVw9HovvumjVLPs7foYiKjsXBTqinbvUjPmRbJHXeiZxLHoVFDS",
  "key25": "C2Sf599vLzp8AxJZv9P5VPpLhP6fN1wbHzShS1ka1E9rnfuRw8sHtBupKCm1jnWnFo7s5baJ4FNF33JQjNC5vxG",
  "key26": "hqvpMSzUHupftiJJW3CDaDFRnDSQAdsz83WR5DRt1Tm9tvnFyaeQbmXQ6NFFpoWModcRdhR89jvW3PwgJQUca5J"
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
