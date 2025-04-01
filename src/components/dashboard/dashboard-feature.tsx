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
    "bBKETRt1v1ncCZFZYbiU1js8hDYsv3PM7919fTpaJupkw3ugr6aeiP9qxtJ6otaWu4WsS2G6L5WjHdvvn2vKZrn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nRq2N45ZFxS7e5BtBJQurjGbgEk3L3uxZwLXeb66AuLFZXDfJFNx9WJc1g29o55FCEQ4gqZViuy1xd6Xww8TGFt",
  "key1": "2D5NKWdLKafeDS5AdHk5qh6swHAGtdwLQdASjeSWc8ma71VgG1StwDgHcuuEBq83qKvUGeT7kMrFx1iuf89WVLh1",
  "key2": "2ikuGgMN4Tju8nin6AeDKZCeQNhcG9Te1oiWHyLBNH6Cu1N2hHZymahvqRhHauuCQPoDWzjpjfdYb1nLFCaN5Noo",
  "key3": "66uc475kKvynGsfPjgybdq2aKHyx3G66Z1D43wBuVvG55MkcmBdj3Hjaygf83g4bbUjqshNXNbMaP37Y1pGEuWoa",
  "key4": "3fJGLGcn4CqAG4K3vkTnLRy4VT9WT2pNRYVpDmZPfKdNRVbijGCifsUNsU4RhbQzkbNrb3dMpYbFUyCQNvquBre7",
  "key5": "34ZYVSejx5TVRx6hvcELshpdUDtDULMPVFe3ydjZeLFSGeyEqqiQxJJ76AWre6u7XHSeaV56bPBbv7haGeoKRnbP",
  "key6": "5KxyFtotXZigB1biy2Y5Hc7R1iqX3PqPwJX3E4MAhupCQh9ydJWPzmCP3E2oo92MaUiefYW2J854Wf1ohCtzVusX",
  "key7": "5Ejc6bBJDCHuNH2H6tVoxQEn3GcdhxBYaZFCkA4ssCVEhvHbrBNKRXtjv3wosY2QAqKNfTKT3PgCRDcJDmZJWtFh",
  "key8": "3HCUFxeGcoRuPBFC1XtoGkatekVGvnxvwsFnBnb5rhro1EEHriSG6DfRrabrU3oggccoGHx7eLnAMoibF42NSgPf",
  "key9": "4XTANWguFJhC2qM6aLAAiY5TFaWqvfUjf4DCwiY8iDM4WbTm2i28B98uveWmEnbBTerYWQAMbf1CtrQ5Uv1vLEGK",
  "key10": "5GdyTBSg82oBve5Vw18CL2ZehccSEjS7tnPKbUzKHZvx7sbqi8Cx9pX6j8s8pEdGqVKeQnUWDiQSpZFcTgeWggM",
  "key11": "2QZadM21AWvx2d3w44bjUZo15tPTV7ceuv5yEeJk1Jxqh3D987Jb5d8zucafg3RzH8DDwPVY9g5ngobzMrL2EJtp",
  "key12": "36Ev9gYMq2qyrsKYLRBbMWC5jrSfVKcEZdpYxr1SwGQg2AgnBMYvYMzBSzi5FPQwe9okDEGDKk8JSuqF8RuDMtLP",
  "key13": "4W4asZMCdSTsVTtCaawdYGqjRUNadx9LzQ9kaRUDJV5RwLbRjSvKC3xrPEjFaqJuhgABkJhs3ZNn93ufPLd3XBgb",
  "key14": "2gr6MEdPVeR18zSFLW2BfPmqPx5U9cksM3ChFP6HuRX3rVtknna3r1F9X4otrJMpQEQEjPKkQBgQYBDa5B4V9rAn",
  "key15": "5DKuR5zVk5fDk5QFTsgWWyf3rPwwcPHA5YrZn3RK2jX1GDq5TmUv68CT3uZpUQgULxXv1Gm3rvKVP5KEsw8k6eSb",
  "key16": "5sdq25bkvrVEYnJq72vvduRb7EYhsb5PcWDXPvbjLzs3uL46qs7DRfkaNrNNb4Ys1hEHjag5DpSrJjeHoFQdkvcJ",
  "key17": "3QKsH6nWmw3WUPy6obLwPqUEUXKmA8LTs618NNU8WgttYKtgxs3BE23uTRnFD98PVQXbhWe2dcEHSXtyGCWD2G6d",
  "key18": "dFjoTZB6jAg7yEK8PHD4Y6bJ48qrdkJEtnV7MamjnbedzfTap9v7G8BNJSjseBGEjRxm8zbgnde7Fe5D9cvxa1Q",
  "key19": "4puPeZfSpdjM1MD9Qz37mebJKAywX1AqnKPnmWG5QWs9HBJzpxSsceztEF5t3PeQNw8G2WMyMQ7HAjagxQ7yofyN",
  "key20": "63c6yaCxvGa1n6c6Xuqmx7uU9UbFGmcavhLSvHxmMqdpTrEe6ktkCNwY1ctzWP1gd7fJCurJkBTYJP8Ru7ebZwzQ",
  "key21": "M9xPzbCtvdRvto4sazbzNBxnz8FGuhXXjy4FGQxPcCTPL3acMnmtujLz8NSWY2LPSdGzWUubNYtu3jJ7wrLjWbb",
  "key22": "2E24rqA5UzonJPn9tF1MP9uiwASgNGpRjzvrANSn1YbaHPVqNXhk4vJcEL4c8azk3gN8YPVMNita2f7qTBdD7aEF",
  "key23": "5MftbLjVTpttzAw6EWkk4ADXkCm2ChzXi7BPDajCSxqsfCjHh4kPDbaBbkw7uFv6oENct9XnMmJraWzHMFFvFD1c",
  "key24": "2eShJQqMK2ZYiwjUFKwVZpmfi1yicr8i3qGBKkQP11tcqCSkRJK1SU57Qcz7XesnT9a6QDkXYEJ9cWaPHmoh2xZm",
  "key25": "1vpFDRxLNN8XPcfRwLWkvaoQGZqUubxWSyASmq1dxXqcKdG8M1rQmf8aANRZvMiTvPkoYNXtWMW3igS67dnXCjj",
  "key26": "5c5Jh5AT39ZnyZMUsEcciHbbSfQ3dsTq8exLxv4uFQYA4Yyr6skS4S3Re2nmiM46EMhhHxzbqdSrK73rhioUmVeP",
  "key27": "2KDP3gUYnnzxhuM8Hw4wAGcPoEqZqbVeFe4wjGJqAjJTkR9SNPdsfWgwmepDGgyi4YYMQpYkwEJWuiJAnbCp9fLv",
  "key28": "5AdoVih4etrrFr2XFQ3HcQKoWv9ZCaGWJYDvJLkp6LxJu8M3u3G25Ffo1LQdRzLQcfnsc2SFoPoTxe5PZnHHZTJk",
  "key29": "26ghbYvbapE8xKBr7jamvGsdxTvhSCu5jAo9zXFZFCjyybvHwAHYkcFStUmBAsBTiA1rthSubqVk1wEBGBEP1LWb",
  "key30": "ansCCYFrsbG4yhLsXi42bCjYLZThUuuNfvcfvx64HAmjT21v7ySh4kwD2N8KVjRj8VbeoSt2RqHZdzaEjGakLzo",
  "key31": "WXLr8BMnYGAU5trKjXmXxGsDL1RVX7LnobCuFwb5PbAsiA6RYELNrx8sejpPUKFkKEef6HeJuGfFTEpfmiCJJV5",
  "key32": "PzGAekPpr9gjzjRRdoDtd2bRqb4v6uRJkkuzwSyg8VnV13y6FuFP5s8hEMmmyVKpU2D5vVEbodps28DdwjeXYBF",
  "key33": "ZQXDevFc68geXtUCHHrTxoKMbaPfAFgsYq1ipxbk51FmU2oavwupzWzXzieBGGcR1Bc8pXTo63Ypzk93Pbsv1vA",
  "key34": "47qyY1DJ1JybdXDnwsu4D9bWFEgZUX6Lgm2xG6awUZcXDBBRoHL72WmLY1nL2XvRfcx2B6cDALmcfo5x85rXxbwY",
  "key35": "2YEFE2foHzd4qzFDTdxxewp8vnASc5WidWNdS7Tyu4tKwC5KCuWuSJdHAq2mPCTY4BGeRaKktgCMVHfGHdEa6cDz",
  "key36": "5jVUrGFiLyVnNtBhZjgT2xN8tGMdMdUjGAGCKa2LwChar5T8GZXGo5TNsCEwfSCPAiJ9vGRTUPTg6CuL2tkqrwxV",
  "key37": "5uP7e39DRyc9V864cM2KmcczfRa39MM9iGhbdCpdTsZv5k2hKh8vDTCyYEdhsVXHt9B29MEz6dUXEuTFhrLcBCaF",
  "key38": "2noXaTc1XyD3EzJx6Wu7mAbMLykzUR1xoQCLz1AEdufJusb9nV6wmxyutnJnpBjSAexRv6jHkT5bdSH3ECq3X2SC",
  "key39": "4WffXRVRoK27ABvhLcQyJ2mEh96YqmdqYt5z1mFkCo1qUKwyDxbmjqLnLyy9F58N9T6EDrcRSzEebeb5zpMqRxLU",
  "key40": "22VWGBCfP6cJBkjFdkpR5h9nhKEENex1QhQEsoQ3YbSmYCjfvUbqD17EM4BgtAJ9EcfaE7bEHoV8hjVYev4udNcY",
  "key41": "2KdbB7MT6yao81fjoYnWLHejzbrbtgA63UeqZuU8KvS8bGEC2RnJCM1Fkcb3nt82KnYnELQWaN2uQXwzHGxgnXas",
  "key42": "4ZEJgTtMjte36sr2GPgxGDSC4zbudnJGaiKmgu9swRwS2LBxoRvX6GNicUYEf35K7SS7GLC8aL29a4RnuP1eDMM5",
  "key43": "34ET8FU9t6qqdzMXc8XFb8W3zUJaPrSj4xjR5Uk6YtvLgrHabTLgcumnVThJEH2jnjCB3cSdyTnxSN1Zmf5jEWFb",
  "key44": "2gCjNqRCmTovUPeFqsc71i3KZwPuybESB4uGCrjvddwbuRFVCuhNd799eixRyckML1EWFWvowXASUScd2bCvgNYX",
  "key45": "4NjQPE3nhCfgPBZCBGQxTdyWdPmAW4ZwuSTc9rnc6iwVE46FdMyqwdW4xHZD2PJnU9ziGFuDw7KP7XQMWb7erooL"
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
