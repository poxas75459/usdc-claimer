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
    "3RzCoGT2dN29fpWrCXubKv8Q5T4MCdkND6dDoV54qb5gyz1xq79JsoEoBM2puHF7yBjzqkFKGVGZdUC8kgagxAqE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bGCorQT9HSYZphrjaC5aJJ25C3LaBtuP5fwJeyaiyFmycvRgwFdn7Wx1KeNnN7zT2TjperJoSHKhArebQp68hqN",
  "key1": "34FuSphjK9wctQ6cpKugtvg5VX1XJVjPhWBNnHkaV5UKGGRArLwmojYjspTjF32LbF5Ms5HZmrneLhV8dX85uXQ8",
  "key2": "2uZzmWWg9cDoQm7vP7vukym3rQ5bANGeT5K74xqpyhNuSXgLLyeghZgJhscXuhcxfUD1y1sDzVDrhUFyb469hGFQ",
  "key3": "4P3hHRoa6FCELiKMPYTr34aDVU2BNBQ9AzmmmjY5fnRbwU2HwNVjxueXVi7uHGa4Pvd2P3hLPJrVJorVsGYBseF5",
  "key4": "55C1ANfvPZ6XpymoLXwhmvJyh48nww4f2NFY8YmHiSzwgmBT5s3KSSBLykC7wvxEez4fQAN8W5H3sAdx8pdNdwZD",
  "key5": "2ptSHkV12M7MTMZxggmjf42fhmhmCDuNamzaUQtuZd3YoexD6oWER92zwuMQrBQjL7gZqsRbxAid3K81FtZHFnkH",
  "key6": "3jvw4Ne1ZFJ7PhHQzsHGi3vGFn7N1MiPdmijaaRaxauAPKJBtCaNJJc7iZjRKwo1YRNfkwZD5nFu13BGHC2oL1yR",
  "key7": "3AWdXXjZc6vhkViFn3vaDL1umjxDAYqHWRZcsnqWdmQFyaFZJDmcRgBMYSij2GHWbn6t15KrDM7w2mvpUUckYy9V",
  "key8": "5BfPcZ73n1QH9DRoEUezhLJUdWrChWW2yKcdk1YfUTpaBpsVNZ5EKWNgSjriUYDpTbTE2Wg22F8RvoMedMmrhUNp",
  "key9": "59KBZYxFdumUMhDQqfzDCWgRvKEyCJBkTCq69jAgLqLXYEwVahvQmXyAsN7chLG6uW1dDLubJk4gVH6C7e3wTa81",
  "key10": "37Lm2DntC8FxcM6SqMDPDaJZVTRTLuxkCZWYGVmYJRaYis4YmkB2Fw7Ccm3VrGnCzn4KpMQpjLNGrprJEgk9rwsA",
  "key11": "2gBjwvuUHC3cRK1GPWa1AACK2xBWKg3ABeWrCT3oBR46HJBsEhonK43LXvGrLDi5UKHZvjUnSVuGkem3DY7yZZmV",
  "key12": "2DDyScgj9Yaf2tTSRfKkeaQpwKRevo5L7k3jCktxWbxV9SzLYztnJUCr624PgppETM3QF2uVeK9DeMEd466XjePb",
  "key13": "2G2fjvatzR5dkWSuZzdHSQKnWBoUHHSPgEYDhf7UtaJjwPHwzcFHmbnYiCr7nasCiA9DZjZSLvrkzTZa44MxQkha",
  "key14": "43vNci8cCZFr7wQ3BMrxUk5Sy2eJgGbsKHCF1v7FLJWm7Zuk7VYUfgeWjnP6pHgB2PzaV4bU68wAJjee9wGFN5EP",
  "key15": "5qd1So3UdPSHK7wVHaGVJYvxiTVZLgXJZxKY57PVMFqnCfeKUMXi1A2qcxvKGNB6wCJaM3iH1XjAUkKQZmHyq942",
  "key16": "5Twe6h3EQn7CdTgyTFT3QQFmUaZbiVi2KjvmBb7znanvvoNN29R7Bmn9dFoxx7a3EpDGPds7EgKB2smGUqtGAaHr",
  "key17": "2HjsiByYAFzpATv9KJRB6Le8N3nq2mX4DMUaAJnYvgYfu1S6YHYs4ucdjmx67pRCEJKPepYQqs34BerbgFpGz2Z7",
  "key18": "4oPWgCpkuTVek22ux41bRxEEDgYJn1P5Z5c96o9SeoWNXyykJCwbNjaLxGqMhGsVXftrnzNBUnHj9WizCZytUSmj",
  "key19": "2i2M5ydzSBNHP2wXNb8vQLNUipF7LWog8zU8ALnqWpcPV5ryqdQH1gYhWYjofidKbduzLdPLJyTYNP9gznfFMZNY",
  "key20": "3qoS7uVqBhR1CwXVs4uBBnX8sfAQCPQZhxzer9t9UBGhtPzvFGubY1GEwzXZiwr71nmgJeaopTKfNLRiJWzqtUYJ",
  "key21": "5czmpLDx5XjvnkNvhotbiqmhUvv2JbuxxdFv4y9Q9GbgD1wpZfRai9rshv7bAzn4BHJh7CnVzvK9hGidrney81aJ",
  "key22": "4yghf43g37Ag3bVV5E8hi1UYEdC25D4CPdq9tpKgnwihRb978DfRJREYgj8z6BVVebuXEUoBG3TDQjvL5QLZ8p5B",
  "key23": "3XwtfacJv13qYY3Mrnd9fLQCiJBEmccuxF6Jz91RoSQL4ErmB8qhfsyW4b1FQgR5qwvugGsr7UrsiBZuc64N7bhF",
  "key24": "3RQKWWXxYXWXzPE64HQm7Uyh15DcVejKxDN2c9ZvbQTavmqkT2iXVqbaijUDkZufZyHiMesdWCPmSxH1Mgc2dAfj",
  "key25": "2Ucvk3RA9Bk3trfZHka6FyeyUBUrqk3kj2zXX1jV6QHYfgiwDbA2MVvG8apcDeGkY5XVvZ8fpchgeyTgzhoNeVTA",
  "key26": "tL2ZwAh6evxSHcE4t6UwV218uxfTkpY8y9sKEKy2gtXig2xzap8Htx6pGxrhkJ4wMvfGU5xFkNTHyjmsQuSuZtn",
  "key27": "4Pt7ssWXogvJDfT9buQYNKU41YSD7tYjxW7RGk3rR2xUGS3fipdYZCg11zFbLyypfEhqCJxy9qidEK22TxPGngax",
  "key28": "5xNnLwH8NnFJpfNKuaBwC3oqfJJGoBXJXUN4QDKKVsDL1eHEby325Krqi1MvJypd6QaGWuEzJSuaV71Za4QoSdCt",
  "key29": "3dRSSjrWV2JgFVrzADmNBhBzPcKv9g3wE4HBmSAjvovHruPHQa38oE2gEVYteLrWycvKP74scdVvs9esJRiBZ9Ey",
  "key30": "4JXYShpb9LQBFUHNwksQQj7omEXEMf4h8HPyTV1GSG5SSY3jebbhH1X9DfQqRNGNeZdRWAiWjVhbzqjBsWb8hVEv",
  "key31": "GNtmB6yptyVBLdicfstWcRiDZUxibk3JeFYcEuzLvkwB4bVrhe59AQxsjcbxfjxD34d8a5g9JmnhwcA1eFSirLk",
  "key32": "4mvSbG39CN56C48UC763gvAfitTH4ZeTUEX3dBRsSRVYKcA8KBZCz2acNwQKcnfRwFj2kxyWUSTKiSCZSFVsXxxo",
  "key33": "62BXLjFgXGxjs5MZ2UxA3AsRuv7q5J82RctV8NbSscKNK9YjWckRdQVLgbu91smPyuTCCTiRsR8ny8ry6Tk5cX2M",
  "key34": "3DJghTv46Gam1BsomnwvHZ9P2NKGaXfoEqgdSwQUrqtRrt72uo2kC9ExsTxbo4xubNzL4o9qfQqnXhxSGhRzAD8w",
  "key35": "3jDcZkcW72oEmDW3JkdVbEkHSzhW4f87pv1eoduJ2tqea2XaLt5d4BuU1Lg1pQMDDTTh2Q7Fg48vaqesk7r4Kujr",
  "key36": "4wL5jWAFiYbCoc13dTSU7ZWpGVoyPuY3RUm4t1r9QPmPdMdwy9WcCFEsXDru7rfUENEDGtCq8GiyLjzHx5pDNnSz",
  "key37": "3DZ3j41UrvGQMiu9u2qpHf4jS2eBC7AcMmaFoUcmwu5CtcrL3ZrCnttHgwQq3KUfrQVE1UutZTs9vipHAuAHJHyD"
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
