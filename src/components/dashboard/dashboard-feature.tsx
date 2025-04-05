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
    "4oLsy7fBkuJnWk1C23LPGxKvmKpNGhpmJNZHjucD8orm95kagnW1PYxLTZTUyQpCLvTcgrNm1b8TwXsbyCHTnTJQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51yzbnkus2XhTuhRwKfw3BLUdgVBaWF4EqrMGJCh3p8r9iW4BStBCZVfagYmQikBPhQQtfWeyNnxzdGw7ut2kdtp",
  "key1": "4WP7qx7iHUPUzQKW1wMb4LKLjQr1a1doBkPquueUzZo6fYSUCupUUKfmFQAvb1fAjSgndVnFSzbDmZXQxoxFnzRC",
  "key2": "fNWaejB6uHEy4wNas59qQFMQp16jovnTQqh94bGimH8LzSQr73pHnEuXoP3zBNhJuFMzERLexP8NJDC21J5XUag",
  "key3": "4u96bx3rH8ZLvPtiTYyPksbV41KjCz9tGRfHxXenJJcbntjreHQASmB7LRWvw7hTcWWLbZZBohW8A4uXZwSaui8V",
  "key4": "2SwyUehLhS8YQ6XNMz4qPKzBWHEMshkeS4jt8vG4LYLWyvx8AiKGqSe2PABRLkBmCLmVPhYuw6xai1B93hSPG8Zg",
  "key5": "2JkZWq6Je41fLDR8VkKBLCtngbUnJ8x7G8uAicUGJhrQMRy6VcFWXUBCkCZd2zgECjyRn61opNgoBehD8pbvicBq",
  "key6": "21pbu1oFniL13uKgbr9vJLGWCo58PA5cGELzUNLZQpp43FJ1soMMhrLeMcPzu9AKXDjqm4ykY3gaVq9irmPjrrkE",
  "key7": "2FiQbN75i69EJhQdgs6MhrU9c1KttDYuxYTnAtD5BguwXy769qiHjTbJXGri1FN6ifcxF438Pfu48wv2mDz14zPs",
  "key8": "2paN2uYUeCnJQRQEMANdF6zG882pw5xLggyKU6upEgAqSKmG7yMXbAbBqNz9UiwFHXJK726tS14CvcX9dYJjKcXa",
  "key9": "4bhvfZ64rtab7M39YAoQkUPQYYSJbeS4chkBweQyDo8hzm3nD5S7SAkG5yw1Apv1TkVaSwH92bzt23kwNW6Smf6v",
  "key10": "5Es2MiP2c1BPyqrZSX2ut5tWCEUNSCjjaqbdrKnqscXqexGFFZX1pybF1jndaNSHJLQMBapBaCmtRZCUPBcz2qH1",
  "key11": "2RQPtxJv3fwxfR1XYVPbi7r4vXAFjrmkxUqbaskxdXByHpGbQdf87nCn4uyiQ383GDKfb763tLDMwpv6jgwJSm78",
  "key12": "623x4XJJ2UXnmt9cQ8BXSXf3hZjoiqDXYroNPRZGGVL59v5GPrmqFMtfNDyMSSosYGZGQeDhBCQf2K9KfLpvza8J",
  "key13": "4A7ZtDrMoNkZuQ9pkr7G3xGzm6iyHsxqdJ4pJ1buUvpMPjDGWhdH3xBvLQL9geG76L2eDvk7MFZvBFMm8Q5uAxvo",
  "key14": "4p2To5Zoewoca7Xckz5YGgzFEukrXjSS1z6wxjXuaVJNLugCdC59dqLA5pzTrYPNVCuzx2csfB8qAMpQF4a8fChd",
  "key15": "2iHxgCvnmkHLJXrb3tH8EYxBBBS1twsMUfs29syFJ887DWXe6fpArsNLRYzqjL1U79twGgxCtESkZitMjnjVJcBv",
  "key16": "NHkvWn3YNmbVdkaRMCFGrjKabQ4YaaaVaQ2yPRGBK1xJ7Pctq6e27qgFvYVEF5VYyNSZfFiSE8nxkQnMqXZXSMp",
  "key17": "4Mh5auip1vV2YePuUEj1YAYC8a6oGM82GD1YskKT29oxgmncXE8J2wsYEQhcrJYqXy9UqhLK2QcZfPEwqwk5fQPY",
  "key18": "2Mv1V7G9Mt9R8VBtFUF1PW6Vm3s9AtYsptjFx97b6PrSkQUtNGcWwFfFWJayh6hP8rZvTyokx2SfkAhyj1g4XPu6",
  "key19": "cdj4nQ2w7VPPRYwuAv8H8ZTpdFEru8zG761Qr1B8V7nmBUriuCWKHy2qNqgFiWgaJN33Xd4n8YQXNgQJ3hYRp8t",
  "key20": "ZbnaNSyJEg7x7CQ2hemF8cZUs91KgQuEebUug6miykMqHN1Zepih13vpqkmnbwzRFfZEepjAuDs3T3tGUUkNL1S",
  "key21": "NV7HxcLXFn2bXfRsd3obfPzbA7WEghtgh3yTXSN1zssX5DJ5vYcWPMtd2t1ohb1m6nAxfy4YkSBshKufzJ5ABJn",
  "key22": "4rkKtRHvpxh5ahkCnjHGQ9BdJHxkvTfxUFHYfGWE7qvYmtSYENFTuxQg4XE6qvZYUkhdQ8f6S21MfAy8pJkZ4kg2",
  "key23": "2EXwaZFnuh9HaqUYqTFjMa2hZ6g5WZVKYeLtQmg7g4R1kJk7TFP6mD8kFwRP4TVuUuJhBhrFFXt3n1KAySd5Vfk",
  "key24": "5r8YtvQo683V5DMZKRaoFf4yygy5xC9b9cxRuEMDw8Dk5TwphFqipqEBT5gW8oM2GWGmbvenfqBCmRASbtxN94s5",
  "key25": "bQQQZihjjvVRsEexTwtyqiRqUKE3KMg9pSNHvRpYrbxrqq9Y4aoFZa4PYCW9ZdknRgba1nMv4xHS9bxwY8pkrG3",
  "key26": "HczqfTyQvu8DYmZJ3tFQeuFLF4Y6QpnPnPpLaL8Uw4VAJyZmzzkY8dDw679xNfvDrFKfKZgxk7wQmorC2NcrM68",
  "key27": "5NhVeXi9Rc42cJfxQ5B1jS59zS4RQGpd1KcCnwVNPseTAmG6ztaAX9aq9y3w7c9v2oe2igXeyU4EsJqMeHuC4ey3",
  "key28": "5iSmU6P2QvaTa79zdNoC1r7eSrWsNn5bqGpLLJmgMZadfPrxavK6XWfRCacssbB2g7Kw4qSxE8fKEhQkU6XnhTBw",
  "key29": "5TyhpYGhZVM7gXvqHyPjznpvcGtgmzLcWEJwg8DNZ5qjCpH5C1Jk7HoPEbt5kAGvSw9f3RA3qMqFa1ZoU6JRVHcz",
  "key30": "igqxohj31RjkAHVcKfPxzFJ5CAGPf2hqiXDfCCa6L4Gi54jbhriYnJhmBc2LrPwepKDj13w3isHrfx8KcusScW3",
  "key31": "5UFMBYyRafWwQtJ3PU3M3JsVBw8SDG6v3mt7mgjhYNGAYZGmxG3LnehT94WtGEaAunhVrds4LwQKRx4EwHhGU6v",
  "key32": "33ks7v6QBhSe1Hr1LL4UAsah5We8m7Rxh4LyJ9SQtEZXxsf5nooRvcdBaJcs2Lp5NQhNFEMFzCGSb5Q8cE7w2taF",
  "key33": "2DhSWPFoaoFVKzyRtF33WpSaGRE1k2MgJgFzSnmDG4AfZoVjNRYX3Se14WhXGKgr9sGPWvicSebp61Hrf5EfmRYt",
  "key34": "48Vm75tYag8BhJFNUHRRPpTxHHYQCFC1WB4JjQxcHoJoALZQKZZLRX1EGZwxkVEZtbxWXn4NnXirCPGugK8cXdZL",
  "key35": "2eAMvcKH63AC2VbsPJsayg6Xchqf49zxkvvsyeuMqTKouecN65RH9knMDUWh8venzt22Ctyv3bRXM7jh9CfnNv5w",
  "key36": "5fU7A7uNbNdeJUisC1HJw8BFhyHC9bAQW7qMsX649ggKR9HnHHrkAe89aw3CtempPe3et9gdyUnRUhVdU3HgmzXh",
  "key37": "5mtuE7jv8wpmXETCqmHmdHsbQmSJFfPEFJ2kj9mr1zbr2veH4CQnhuhq3Zt87zuLUsm6CYqHMB92hBdhrrMTXLMa",
  "key38": "2eS7crULyjGi1crtj6sef8qayPcrJGCdMSwaTs1EcL1k7zmpMdLAUXzrVM3pBJUVNozRdGxLcGZwaHCCW33Z526h",
  "key39": "3PTk2oW1LRn9XeBjJr67QNcLXvjAnsHVSgE4WVPbFg24Dxnsq5475ijagNiLSrdMYhjjgvwe38unWEcobCCoU33A",
  "key40": "LkRWkoi37W4cb2ubdzyMtsMrVrRwVFb85kVWndCvioiExUVTMRVDEvWRqoqRzBdJwRi2bDuG7QHSCxeDEYj69xC",
  "key41": "Xn22zVJiXscuwSUPHkSi4MCCuKUAzCaabipEASAAZh1qCR3Zb9aAF4da2MzwrK2dBQf8CmhDKwTygjbUuzg778t",
  "key42": "2TsUcaHcbDDvdQKGAaxsUpXNo2TckR2idyspkMQcYy2ZiyNGUQArB2oSK9hjS5WWQKf8LSpvEHgRmupNVFs63ddN"
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
