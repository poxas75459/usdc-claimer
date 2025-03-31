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
    "RDM6A9NXWXJAPGKUhqdp3Pvko4hJ1bphjCCmDfZWsT7b8KfG62Q78dz7CgpnvRxcu1sAnJFtLJd1uQqM5T7EUQh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jQ9kigDabZqt2GQBR9C9MPwudG9c8SCeEs5yoz1gJXJU6mrwMUuFLMQHQJMcNrxGtD6HKpPL8pqDNXbCuAjE7kw",
  "key1": "297U37CzgGphzAYPh3S3XSYyi6XmGH22z2mGzFGcj1tSxaqv6iFUHyxX9YuLdz96eCNca8qLrvSBXhawttuh1r7r",
  "key2": "3B4EUHspevcnWDeiPe6D79bZCcjydcA8oLf7GLCbxzKqs61YHvBjVhCuAJxMKhxbBDwPcHhTjxGQCXFXY2YGR4g7",
  "key3": "C44iKQhSVavKVyBJ3H8dG2184NFbF1R6efQrYzrNND7zobksb4JEMcv8ickLuPjP1mWyhxGwVQ6FvYZzS8LfoTt",
  "key4": "61vCa5JoLFY1wQ4oAzjuhRFMPfefj88kPjhdUHig4c1G9Rwuq72B5UkbRXvhcdFgpjo85nTyemFM5aAnb8SUD74h",
  "key5": "27yFnugD7GRpwHREYjqTxcXuw8jujSVd3Hp6iVTJrq7vS8fsXCwZHeieJfPKqUbLiwTketNQV4nS4RNoRVByu6KN",
  "key6": "5dMvdYQDpeb2zQWtPiHmXVe9P78SD8717xu7K4fn7eCqWS9iQrFCqMc671ywzPv5qqPFbJ8Kf51XFTS3cWU8xic6",
  "key7": "4K4SPS4CPAGSAMEaHUwVCwcHEL31EEZvgeUT8bjWH7coj3L1oZpmjdduAaQEZpNoRyWbKaatVELMnWaaBd2NFtEY",
  "key8": "5FJJn5xA71zxtT5DmPK46AQJ3c3X5hVRHm1NyWyQ5fkzYrBuA4viMY7crs5xcarw6HzCAmwcJECJPBXeDgokan7w",
  "key9": "4Qrs7YS2C3cjUpTQuFbbkeUVar7RyxVpd6SyY4xA2RHaxH3CF38tJ9J94KBMSBafXhWz38Nunf1RN6YbVh6AebcR",
  "key10": "5BNbAApWjx5Ak5p46S3dXn9musA8MBCqNXV7o7yHw2s8mYExamZzGQNjyvWtGaeG3vY2B7bhbkahMBUHNGqakBz3",
  "key11": "4fa6KsGybfFAoAEBeiCXqRBTNXJo89ivreitb8pdTaUrqtDv6FYySJTCJFYLi7WqL9TJMYKHXpZNSMoWBqXqYLdZ",
  "key12": "57U68rQTDqctS2KP8XLYFCTU6BJGZ1Y2K4BnbRPottDTw7fcV3vEPyaxu1FFcXzoco4JtYakw1o9UQvst8X2VrUD",
  "key13": "4U9nnsjEBdsqKP2fkrwSmyQpeEND7cRndhR5yUy9NsbJRAEAvPCxyUfw2KSNAuoi925dzd4yujqzJjfMED7ZjPd5",
  "key14": "dqCAGGJvZ3ixVxowzDZLw4vFhSteMHT3h5pZ3UbdA5qCfkrkW3t7suB3gm9WcUUbGx3gfxiTWEDnetXwk1VtZwT",
  "key15": "56zgByUK1Le9jXbeJwSm2YajaeXqEVnFpb1RNHdM8wtaB4FKjw8NaijjKCWJ5NtCYq4GjBv66VKZmXaMnyxqJDr",
  "key16": "5J7AkaNFi3y4mDZLLi8j14vziQj6dtvowL4bfxHXD5LhyG4HeLYQrCSUwhX6Te67uDeD3nFUsCmKrXYMWxkF3obc",
  "key17": "66yc99fSg6gqjZ1nqDR4CXXJnL2UDsC2YfbzTZq6pnCcecJcjD66roogEqMrEbJmsP2QHtd5bpTmz7ur7M8GUga",
  "key18": "3eXm323y1uLDhh2EBWeCG2GThi7iEU2wRKpvDKLc5E6m3jzA4v7EosDjMh7PCH6dnA4ZRCqtGSNQyr2hK545kccK",
  "key19": "4e18Q8MAGsyJik3PB6dZkseAVnA67PL8j62Lzx889Livu98WuEcc3CcpcsqVVo1dsyoT4UW4U4ji1D92MVDLtMYS",
  "key20": "25rRp5Ty78LaXA2JApiuXNzNyDc82Aqm653MpGgDjeRXDNtmrPuSA6jN4GU4UvZ8KjuB2pBhyXHGzvPG1qRSNRrF",
  "key21": "5Fe7vEabEgJPCfCcwycw8u8UcAkNFc4V8JS8ce7kG8TiSsXchwm1vusrRNXXKnJW5B63kg1xURM8nd1qCpQwno4y",
  "key22": "4BCM9GSHWGQH94T3S5weEDA4uQmEYDT7Fyhzf3yT3UxUsr4bfE81o4z6ogUftwWBty92Bb7dsUb9DqDCbX24U5H4",
  "key23": "XMD8UeACDTgH9dLPHxJec1gjCuYKKQnYs93SJe8idvizoMQ8khD9qjpbZrgrApRWi51gcyUEfj72ThD9ffFHURa",
  "key24": "5DA4r4n2ggg2q79PPRDrho4EqHvEbidfQf2LQt9qryMzeg4wbhik2QLSqLrPRgNHCBgcpFyKyMuPqATNo8GsW6zz",
  "key25": "5hLK4Mvpiy7JrphyPNHuR5JrPw84Y4aJgF6yUBRZgmbeAV9BfZmw2S4oM9dT7uJMi54sUHj3fLWgYUeHoR27bVqV",
  "key26": "4NNJfW6p5G1tABvMMvPmKLe1qWYMr64Vf831egTwxDyKfXgJDtYMWwjiDnwnZwhSMc5Jyva3c9Wv8LH7FdXRPWVo",
  "key27": "52XMzGC26D2YQ571itGP7GpkfkH9Z6tTN8FkGk3Pqqrr68oPpY2BRcTnTaYMXv9tqT5JdUtLFd4KJw467MQqcomH"
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
