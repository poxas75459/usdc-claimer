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
    "4JHuejmKiiwPzeH2jyHRRbxnWC3k9E7iYU6grfEiKiGLP4vk4B3N2nup7K5ar8AiyWKvwaHiCPngEW4Kk7nbErYZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9Psjo4U22fgiTRXKCzi5fv6izADRdfp43fFbPCiJJnmMA6snYeiXuBc4nPrUJXygsYdFUSsPaQX9VRXLqfBWkdP",
  "key1": "5hsgrPiHoXLF3JrzEjXacaevK6Agh9a7noK4cC53Q1Y1Y75tbohL6FXdKDcUXxSUt2EHvLN4vp2ivjCu8VY74heA",
  "key2": "2PB1aijzKQVSZ6PZ7d7HxMAXquRcdD9tXeJnfZE8iG3ygVexpg9enmVqvQBPWqntaqbBsbFMVfxtMy2bPzcyaw3w",
  "key3": "2Ve4UzJ593AR2sD1A98vx4VNxuqd42XXt63tMenFPXhviRD3hUNzY4gYVxhrN7cdU1P4d4QCVdqDbRjRdrhHPaWb",
  "key4": "2QHR6ZnoqkStYdr8JEADwESsNmGVk9evcGDkfcmgXyYexrKBrTWqDb33R5aKjcCcYXWUYe2U7nKz9Cg3foPeZwee",
  "key5": "2G7KtzA3fudnwTAsESAc6DDbxaPxibQmNS1p5pkNknoXBS2iPHPfSqgdmcbahce8mk8LnVssZcGm7DZpBxiQFEZs",
  "key6": "4KF7c6xcpvTZnqCJZjKZihAAf8iTfj5MfXSnZMVyybh91Noxzs5aMfWYuwGBauX27UAVJzyZtX6ZgQ23wvYmasmJ",
  "key7": "58waAajyybrFQdpXbSu3khyYZumNq1ti3sGECJ3mUL2sJWbQ4hzutAsrqHZ4gC7tN9yxhLFs5dcNse6i7pMpQ7aK",
  "key8": "KxLFhKv43BqvAA5oQXevTBmKwFfbteuLpmge93n1xCWnRnJaLLYjqe2LQ6TNvhoAdAgAH7QVMMFUVJB4k7WEoRC",
  "key9": "4Zy33jUNZVDnk9WJ18V6eCme1A65a2rxx8XFKuuGmLN7SPqeTLdu2C3SdVeJ3fssB7trVVjeCZML9FHS6pve6ZFr",
  "key10": "2ppAPwPfHkxGPgV5bnPy7B5RzdMTPpVX33Ms1pJ5fwTuvijXnwrWhBnETb1SvgnkvacVgotLwNjA1GjcNWyaB1a2",
  "key11": "gU2DPAwUHVK95cdmYmsd1N1S7NbyjwDR49KpWWKFBn2tFfE5PfBUM3Y71mPUoYdhnVctzxt9a9hHf7SSkMmMMW2",
  "key12": "4DQ8S3nxo66ZcrcRD3NYyA5Fk2kSa6T3odSmGTca78HUSt7rwaZFp7tBdNe4nynfnRzw8cXujTQFGHjwWz93HBig",
  "key13": "34EuBo9aCNSNqrQGgABExdTc6TNirhL4AEoWVVmPz84DBRverVFCq4qCAsCkmj5SYpvgh8gFcPCHZSEKa4aQTNcN",
  "key14": "3HVHhg4BvMZrASmoYnxPwABLfRK9r8PaG6jCUJR4NhYL8AspxkphspU3r5wTTDRxmf3oKmhDDxtQBrPYEBodDo6n",
  "key15": "4Pn6HAt13SGehkUqtkUwoDUuh8YD5zNKPVnvuWhjKxE4CDKrtMykXvPv6qdPuTFnQsB2nPPqbZyATzwx6VPmJ23X",
  "key16": "4Pmxv6QqpL6frHYrXUUsDQcWvs3y9r1YKrPn5wEUTpwa7RkL92jfowyrm6xjzDcrYoyDSbUXNWaLJY2x8z1sYwWc",
  "key17": "4UCkReSWNyw4qJfgCXuqXDZwZzuGmk3yvvc7TKdHganRpH81PTRQqDBiSdUu1L8u35FQLioAjnf8yyRph3CseJ1w",
  "key18": "kaSUET8yEhMNjs7gKDsfREU1SZQ5x19wBQfmKzTovejtV66GwwZNfygLHKkbwmjEW1M1Gd3Qkm2pn1GyZAfjp9m",
  "key19": "67rYPpWJDKsA5gU3nanxvPVQhGgCnZgRrzT4eAxZK7QsAXyqvcZU5Qt3r1seuWzuEK2tWwdvLECTrt8ZNc7K4Ljb",
  "key20": "591W8U8ng2cRhwvj1fwPZwrk66nN2pfJbY5hX6DehjSMsyF4G5rE13SUi5MFpvpKbFVbSaVFaqZPvtGRA9bys4Cn",
  "key21": "43s5QD4Mr7ykNhXCivfCV87yWvq6Dq6FFPoBxJnJy4TAXY5j59Th3GvcsnEjGL1Do6B8c5AdmyJ3PoWFrY1qC5gu",
  "key22": "2ffSZXstTfEHbHCCXVJjKuF54B17LwqPPED7jb1mVQwDrdhtyfxphjAY7YZEaz3r2rgaY32PwnwnBwDNwA3Vyj3g",
  "key23": "jbWxdbrRXybZFmJqm223gvS8pcEbuuNGvmw1Pcs87SbFQFeNwGA4FDT1ScmXKNrGXJpk5WagkkjYz7aTLuAtZiD",
  "key24": "31o8a1zZ59GUbubYkLfkoycGujVtuFcGNogTnic6aaTtMfbSQc7gdacNztTZpmaPWXz7Y5H7piAMSSFZfPxAW98X",
  "key25": "2qjsiwMx1mKKtScNohxzyJeg66Z6J6G6c3M2sWtuWsmW8fXhLY2MhhXeEkPE1pCj9Uj5mxF9L7Vby1dWD8FPmFgd",
  "key26": "3ArmPKZt5XBSXe3ajFoRCkTxdCzch6nutFWTziEESdprFHiyRVjCPCgNGQpePGju2LY7hFMkuXMb4pqaaPJYj5MU",
  "key27": "43UEhdyU7Pm3GtbWa6cknpdgsSuJeESDzCGhZh27NFoAim6LCK48pQhsW56iZithWEC9kLdkRKDLkcgggEB9WYAD",
  "key28": "4CN2WBQn6pWZjyN9RwapXPfNU5E1ofUsFKgonVHBR8k9qdBqCcA1LcSNY9NqG1YYWG9LME2LttRQCEbzK7p4NtZ1"
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
