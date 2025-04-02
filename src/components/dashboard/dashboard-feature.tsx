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
    "4kcMYFTHKJyfTf28HEQta4CwN6QVaVMTtQNu3bFcK1Qk33wfGFQQF8zysPDdHtTPtUDRBevvD1hFT3SuCS18HSLe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nrJejmnXHnuemiPMggeLtH1QRwcZpQ59mipXwMjXzc9DXwy3wbrUH2doYCWGpSNkwGAWEuUiq3gUuQbanLtYLLQ",
  "key1": "4ysxefHJ4HRVCySB2JYfH4niD59WQfe7oj2Tgt5yMVzbQdtkWSa2jkRGiSF3JnCDRj7BYdLPhv8A8XzCWyzUbAkA",
  "key2": "SCySRNmdiDbF5SQBKB8ydDzqXhJLTajVM6VMDFggWD6sJPNiWEXWWuFV5QQSVFnnMAzBbVpLEtpUXR7KBoggCy6",
  "key3": "4oeECkXiffLZVLaz5XL2rmERtEKRYG3sSq1xWUPVetXMjfYRTik2SeP5XtHTpYjFyTmwrsswcpmyNYoFwhPt5gsL",
  "key4": "3nvWZeyh9oHd6h7PT63FYoWTALRdpTcAsPAMu1rcABCDxH7Hbbr7sjZ7ByVSjMgT65x8H12gWdRts3QxEW9pjZcS",
  "key5": "4uDvh15G6anj2V9x8HFGXGNVNCd1BTe2C2Rah9bJqW5cLeRPxPGh3o4DsZoN26pNG3tQ7FcF7QRn7BVpbC2AzhsB",
  "key6": "49TKXoRcn9D5CBcTJxhB9fjR6MqVXa1ikYB7VZcL3aDdoWTcDhsXNRLa3zaXxcyR3qKXgGxzbjtVjDii5xwSUN8D",
  "key7": "5ZAwrVjLwLhJh4Npcd9nUSzGLJR34S8CBiTYg5CEtB7p9wH69rvauSmmfrdxznCv58LzWzLgNTucS6bcVQYYDHw9",
  "key8": "t7p8Q3fSVfKBjJ7izYqkrSzPr8EqGsQ8YkLKqKZstJYwVfAYzW2bnDn442JK1SCX7vHUDAGftQTYQi17f58brXv",
  "key9": "2SkXjtp2yprBaELA4hUK2EMFy8DSBoyd4zBzcFn1bhpEnchbXjNLYCX5ALohDSgpAzRXd9bQrUBjvML7wWubSqXT",
  "key10": "BjidtqyNwqPoT7GgDkLXDn8CuLg6dYjvgXhw7Zccvdc2RfWxKTxfVSLGiBXeeZ1RB5b3nokHo2Bd5zhAxUnDPN1",
  "key11": "5jsVWhZHgN1Tw44z7GEZQXFQtpZSvHWx3ktvpyQtZJaaxJcN2yvXFS7wXiQAFJGK6tdteyy7VxjkEkZo9bEFkzjC",
  "key12": "2589KxefVBaDir6VC5WfpSjnxHCekgimF1tMBX7fa7j9vxeFKrRYNA2SjceThZ5pG6Frk6XD48g8tQzJZjYs19X1",
  "key13": "2DgonZ6b2BLzTndFLnjSSumtYQvEbXMiVygmL2kW4Mfo5qguKauJSQyTJpsFxrDyJoU56pxm1ULfDCErca1snWdt",
  "key14": "2NE3dWwRu9r5tBbVLHjXYkqFBsexaYQrU3BheTyfuZ9BeMTb44y6NSbc7YcrNKUVRLUsLoVKKmnJNnNGMaNzgbZh",
  "key15": "3xoPFcAcfarrXijPBu4D7je1ZFfWsnNLpLhH8YXXkL16U2b1aZUCUouLCr44LBpSARKcDSg4NmsHjJFtRZFKiXXR",
  "key16": "3NsPEouQFQV4Uq2FiFhkCtqCXtijy4mBSazpRxJTG3qUbhf4KK6Wh1FYApsvHtXnfas1UonuYdyjgttVn5TGP6JD",
  "key17": "yVvcSheyV6sy9mX9TNPfC5gQ64DQUSWwCey3PCnncaEumPBUYw4xVuSKTFW1zA1NEacmTKyPnoifpApfso1atME",
  "key18": "4mFj9TbKgRqBTetxcfQn5MDNkMjzZ9DTGZ2nCYdiYpo3ynBtdgC3CMQfbXX9sgLXa1zFgwK8XByKuTXtLMFd8Xuo",
  "key19": "52ANcqbFRY1YNZJ76cfB7jWyW5VdNjsiAPhfHEQjnNcPokCNZCM1an9sUs3iWU8BdX7r5p7EmtiPczaPzignieDU",
  "key20": "2QCtP1HGw7NgDspnTYpTEgNdCXqNGE7XTMXEL4Sh7hoLDR5kpvQBMPC7cw24Au4xVD5ScZwYcsxsh4s6bG6cZK8P",
  "key21": "3QMjATc2Gpfs7Jnk8RndCdJQNkp2XJ4TgdPGW9nWYFFKW3TCgMGgJMWenjDbAn43uMzNda9yzDtT2mdvzGtEroit",
  "key22": "4ZEVTdCSDkRYa6greCdXZJiqoMgePxZqLX8w3vDS6sMn1vx45brx5mR3ak3ynaGKbnAtoZN8GQSxyu4Ncu4UDsLC",
  "key23": "3KeJZmdUHxqjMmuQ5fKLL6n4ABtQFbcrqtSrvHPPuw2tF3SLQs3FQdbf3X8baTaPWt4F587tqBe47HU5AW9mvDKt",
  "key24": "bSbSmkNX36PTZUTcoaeXFrEXtvyBji8A4m8k5tfpA2sEuXYGrhj4mzgeStJAGkF2uN5jDwsCsPxiv8gdwBTdyLu",
  "key25": "2bSpZDm9kP5LRZrJ3HyxTH4hXNT26dM6wfLn8ro8Cxwm6qJ28b8PEuqwfpzcNCV9HfxR558EGXVVSsiynYsnGdky",
  "key26": "5iF3Rdnh4BsTESrUFgtQJXTV2xNxiaA5mY3GLg3RCLAjf9BEp4gPu4eKipXtbtmSDZgJQacXAtSjpH2VyuYtCNg1",
  "key27": "5Q1gga1C97XqDoa7b7AbNqNf1bFEA3ogjzwrDkCH3stsdxTviSkq71YXWyqnPfkSAm8XDQrviwJbPUEFhV3dx4SL",
  "key28": "eamuYysrRWuP8ooe5pM2ArCr8rYrA8Cf6MGGY1WaaNQVrZ5ndLwn1nkji3fYCdiQ8AETCTbAiGfQCaUfYwKENCh",
  "key29": "61hBxTv7gxTWxJ9viPT5aDzUWsEZmMpDUEFUStdgn6SwhSn3xDj91PLQqRn55ArXkt5sR5mCHarNJHq4qYRvwVWX",
  "key30": "AjwwR6XJBrytGLiMuQf15Laf4UM7C2Dng1vWC9ZzzyTqptfVrBc8EYYPqdhNtuL2AJV7VF4HqyNDe91viNPKDRt",
  "key31": "5PHX6VbeYVLZ9dJQChZ6XckuMfnD8cu3XUxVxBMRnmzspA6QA2bsfjiDw9rEt3VtatGhGFAaKKap8VidBPc9E3sd"
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
