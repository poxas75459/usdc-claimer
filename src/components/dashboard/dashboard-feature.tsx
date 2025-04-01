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
    "3xRaYdyKoFDRVc12FaR5JwXie4GwPXcsG4m7Bdu99DUzBF8FtFDXSBQtsJyKmxD6sg9hos6pfPG9vTg7W82RxrKo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tEjh16mbCdZoGwr43r6E71QGUisL37jRmzsuh82Cn933Rwe4iRdC9CTS8gfiN2HLWb4Y8Z7zh5disGFvRyguwh6",
  "key1": "2WnqRhzzFgbmppaNuopa3V3yzEw4FK8f5ukiexPw4tuGwYvsM1VQoGp49Pa9AcJEDnDYmEFn7c37LQVXb5Fai8KN",
  "key2": "2rjtYwwn4cni38552wDcptuwvPF7HLDDHwFdMAzAszt3TyXLZmyv1QsmLgLdmkn3rdwsm3ybckzobgYxXibWfCJ5",
  "key3": "5XhEh9t2VTbHWJJfje8LXQmUqZnQpRgfmq7fVJnXX4DDEAX196xANioCry5tBfB8cc1MkYqtwJeKPMhQkhLqfRrn",
  "key4": "4DMLAT5DUw1YDTGYodqebo1g9ZJ3HL8jHq5JpvNjBxNQX4VTzh2cKKCvL1NLEQihc4KGooUZRm9JHWxzmeqNVqJc",
  "key5": "5GiDTk5mgUQavVMeU8yjTVpoEorxX5T1w82gKvm5yYMty37TxNYxzASLmcQtGuNStMbg3cSE9JgLoCNExM3CkJHu",
  "key6": "5JDJ1MJwYmJnDGmvMRnTTHYeaZ9MQnhZNcf85b2DKTjvx6jf6D9ffwRxUoxvNbWeJNZgrGm3stvaXBdfg8M3EJHa",
  "key7": "497gFGpPsjBBptEAqgyayVMLqRosYPzHeFYdPmcmnMD31mzMRiPRv2rScn5SA5m1qjmmMBqWX8k1ssphXUrZgtsg",
  "key8": "3ztLd1SriHN7t33L7QFqBVk9AxhCSPvpgMf3oj6cRsDLaFQ8zwkFSdF26NRSuh9Lc6Wykx4SUD3rCMzT29EYisC9",
  "key9": "txaj6nFXw8uqdSqrRhgdUQgfinhCk9u1uwsU6tGqZSHSVWJgyc8JB4NhQfHcejhfKD1RLCXfz1YH28hXoiWrakA",
  "key10": "4TQSfszzSHexHQp9DzB169d3ks8ioxwcb6joAT57X3qh6MLgv7xrwu2PeC96rNfGhSXsc49xHx6Z7hfdnmKMFFjP",
  "key11": "44pjaz4sY4ULiozaoe6EBTfu7ET1w7TaA1HMpmA9muY21aPpcJHt5fCzftnbVYfMkBZw4Zcp8jzxPQrQXKLFZ9C2",
  "key12": "5TT694M4BjDGwZ7a5BMM2xV9gxXL3kSLnb1Lb9b1Bs4s8EVpZ7hPo11P2SrFx35zLNkWqTes2viwSiqYuaMPz8WH",
  "key13": "4fPpyoDduZn1c4qu5kWk36haa1ojenCBW96FhC9vWznTyye7RKnFBweWTvBf1K6ow79BDfzYF4na94Zn3NyGKSV2",
  "key14": "3A3RYskzMoXghDWQ7Kdzs1q5vGKe37NUAQUqgSocM6JAWuoSjCShZ1jrX63yB24F271jvXUsueXKxQSrLy25M7ob",
  "key15": "3Hjw22Mj9egLC2W2fPLC3SE6eCwhvGTzdKPD7vV1SvzSN3eGwgZSYyi84xVxU2bfSiKzoZuh6vuTTEfspKrM2gSx",
  "key16": "3HBr1Z3hp1Te2L4vRu1p8YWbZo2ES8VYfLpGo25oMMGeTtNcAsq7A7QQfy7LZ3MDNyaydVyyja9yCAzspvebpTac",
  "key17": "23wCG1JsuPTdauybruGGti8Hf35CZrD9vxvF8PRoh5ThHVSu8juuL3wVefJZGxmNqsU3XuKiZyyRPhKF8EpeS8pS",
  "key18": "27gtbgbbwCjBb3SVeLKQ83RmvJNk5GTHcok7LDTVgfCQMdFmfV3ijX6cPmL9ofsX7tFVVg1C5JBzqKh5zs3h5eFb",
  "key19": "3TkQPXq1JvrK6hgEwP28hzrV9FZxekg7z3wHVRazn3fkYSUzs1XkF7pgi1J69ZqvJj1uDLVoPT3tzzSW4ufZf9W8",
  "key20": "4rzu3w6X3fa1WSzvs1DHTi217p3artmeBgRwySGRjQyi5hTDVHi1SbJ56rMA3HkRpuxpikCcidxRfvBh6Y4bU7Mj",
  "key21": "Cmh55CyTyqKUaP2v2aC1GWre2PaWGQLjVuGVpQXFa8Qj4rxBvXsLX8rzhTesmeYFfWgkqp1jy65JYmTtmGdtTv9",
  "key22": "7Q7E4FujPfY1nv6cJF2WvQgX7bH6hcXcs8wwUxSxWGvTT7ezGrnT4MCmKisQvSQ5KWrqDivVyuRcvvCpBRUcdXp",
  "key23": "3PE7Cr287bsgDLUpNW19Rxzq8RRPvHuz3bUdNCzswSA1ZCGGYkSiPux3hKHnHK3vxAprjEYQnvjzWCP8WPwAikgH",
  "key24": "n9jVrT4qTDcftB6M4yrm1pKVjwNjFPKUWzSLg35Wc87PRz3CK9HyQUdBT3xuHECysJsfjmTGfi6oGMX9e4YqPtJ",
  "key25": "5haj8xtmDToppNbHy4iEVNAyM2QbqjFbpL5ZeX9AnuGN2RMGb9MoV6FBfinyLLkokU7qQaJyg8LiFpuUr53a4znM",
  "key26": "3bFJAhu24zn9Qmi4cPjWfEsdP82VNen5QVxN74bLoq72pKTHiGHQHfdczL9HXBzvgc7YWFJKKD9pFWfjc34QHEkd"
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
