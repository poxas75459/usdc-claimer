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
    "pjh3Q3vdDihhjMqc2gw6kpDixfwZ9TPLFPFzaHmHSNz5Dx36iraAjfJvba4WdghMM9DBrcjP5HAGodM114ypd9h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "p4rXz14VsTVmsGqkT8rmN57uP1haN3XFXraLmTkXUq4kL8D5nN68fmahXda8fDLGqPD61a9JgKhXWX1jKi4cSKj",
  "key1": "29wUQHjgJ8yYD4MBSxTu2A4hdKbQ4jWMz3hFpKpWKE645ufnpWNTAAocw4mJy5h2ZLQWS9Jv8G23iCBMGDybjwze",
  "key2": "5L6LYR7Uoe49BEShQAGHh6EPSxVZsCVrNPDbHpn8toWtpEuR7Ybfs8iDWRiAA3omAvQWEseoqLubbJPJCHWjzkK1",
  "key3": "2C3zgV4epma4dDMHpohCEZ9E32CPVN7bDTBDfF5k4nLT2MuSuXftUPARHxZCbjFQ5XxVpYr776adAuZbE6NWdCQq",
  "key4": "5DHzbzHfy4HC8KaMFsB3oHXdLm4tgLiC9dQKCSsntKy2AKocw26ZomSY3VmLHRGgRT3kPWYisYFQdz2VVo2PzAsb",
  "key5": "4chuFJJkRZyJtjqAfiVHWiT9Q7d3tkBPnfcFUs2n9MioZ2e5y8vSNzCAEnPwn3iamu7RCM2yWcHHS6VjSYmVMyah",
  "key6": "2vTv3Ezf74PqT7M5tARzBMzWLySd6h9xMaR36zph7hGx8C9ofrtpMpspdZC79t2E5S2KWYWN7GUc9drnnnxbA4eZ",
  "key7": "4ZmX63q7oHKZyMksrDJgpLdDDDNhdLhFAmxwb2NMMsMWbEQgmS528XbtZM6VFHyB5Y1grnUMi9mPUp6fgCrLbADE",
  "key8": "4xmJsTZVT4Cpwu9orqA9uNh3jboTiTEperZwqKHLUhNw2mJUXBoowxepCVodSWAJJrPD9cRjmK56LJBUwiZQ27h8",
  "key9": "4E1TRfcxLiJJDq4VkYEgztyv8RC9vJd9232oHG3F8PCrDy7fyQevCyS82E8pkPiKGrCauHdYqCiwysDpdoY4m337",
  "key10": "3MJdy2u5X7d5MvE4dbwayZ3JssWbofdP3LZBoWwfRnRa5da5yoZHEuykpoKaJpJM6ythkN9o76LsYP7H963WzunR",
  "key11": "3NjFsotawYM4EWt8JkFQjFjuUyke3S7UiqTkgFvYDPake1NUAjSdR5PT9TqrwRH55ZK9BgWJsa6eSVhR84sjwQnu",
  "key12": "5Lo1DWKXyX87CeGuaoZYCMNMQFdLvh1y6KpXh8Aior5SiBZw96kVv8aJFt6eowc6ZH9cDgVn3NzSctcaTDQsdsQC",
  "key13": "5V7aBxJmMDfBS3MujRi3zUjR3k5kAjys2cfgKQsBEtuqYY1iXN6NPernuja6BpVmZ8U16qJDTnV5Rh5GUrDcCUxN",
  "key14": "32dxWiYf4m9JjWqzpiTsFEQAxtXUXUWDLqKfH1prxrFsAvZUWiqxrfHEQHxa4UPPfc2CSapLenXLkcho1f3Xt7Rp",
  "key15": "4tsnXSUtzXqD7zFU3M57Tx1XPuhULhoAh1KdtWaP7BCnXskCAefDFzZkWcBH3HTrn2EvQP4HdhE6DB1g2dBtURM4",
  "key16": "9Gz4jomxovjxPyvXd58zPTCgm7pfEQKySF9S3LUA38hgsjpMjhRvpq8tqZ51RbFqYBgDY4DX2ttq6RUfvHUbzGL",
  "key17": "3Fpth1xqKfm38LiRAVKL73aW3SJuLXFvJWVxTWyHkzAa5hkkT5kb9BndACo6dsdJr5jh1uTcrcgJM9QAzMdGe4T3",
  "key18": "4c41WELFACniEd18AnNQgcxen3cxYEdAiJKaMuFgNJEPK9PWtiUMS8i1Be6s5kmoRyxD3oAPFRVh4bzJFyV4ZpYD",
  "key19": "7eJaBBDUY6HLT8iL9YofRjX8JvHoTtb1P6Y13z8q21SeXTirm4YgTHRYNum5MLRAeLguTsPZK5yP5yUV4kEt9kz",
  "key20": "2w5Ls2Dti2KBPcXch3Gg6PfmVCPEMADpmWYB8rBfhN6UEnkqxZfN6wb7Gkj5uowKcFbKwTbHCR4Xqs4CeHiM6kV6",
  "key21": "4pYvBhEYZ6WebePtvzshhMoWfbaFPPrzSJUaJqrJdvqJt3tHvDTAW9h4pgaTLhsnS4FxKn92zbFN66BP9QAj4EU9",
  "key22": "58oVA713SpEnroTkRwRLxWp4LxqNrVYqc5rD5dbk59dgYDPHG5D2c645QFj85uZURgHvA2rHH3ZppTyUbivNucZH",
  "key23": "3ZVKEyiMzeNKfcbNaFKjAEYreW82vGVde9mWkNG5Johp2ucmtUBTDP5K5WCwWSJ8qvtkGvJetj8o2Hiytppx3RLK",
  "key24": "3LQtXcpQ54kNKVfmCeFeLbiF5XmBrkhfrHQeehDiEo1PmThNv9ocyPdP8RydXk7tiaQ3PZiVn5dMFUfdat9QWErp",
  "key25": "42xaGRsdmSbF2aWqtqNm168SSz73Ux16NGgcjXgPTTs7mnbaYaJMhXtMrpZzHWC97pZDdMsiKDoBUjKxiTB2Xg3a",
  "key26": "2DWwwd6BjVT1RwKCYtEKvz9DXXHiXmbBdzfJscw1MMMm1hAfquPKeckAwjPCprDXkrzEN9Cpb9icp8pLLzKoQqVD",
  "key27": "4Vf6SLgF6i7RoNaQgxNfAEva4QEL5UKrQGh2zSKF4zmgA3SDEdEKepVUs5uAhNvaR69FFJzJDSea4hvrrQVcvfbA",
  "key28": "pstPZSYmqfKzzvY5K8EiB2C2NBjH3eKJf73KfP1xikyLovi58H8o4VLnk8iqc2mhqk2sTq2BVZi8QVp3qVoScND",
  "key29": "3P9hW6Z5RtwZkH3vB41efCcDx9A7PsyCo7MRirxLTyGEoy5RVanV1Qsg8EkdgeRsYeBz4qAjAMCerpz9Q3fq6e7w",
  "key30": "3EQ6U7jh4XBLQWuaZscUwRshnm4LMF95qEAXCRq6J6YbXEEUiMoSmZsGhr1ckyDi5taqD3ZTTWt3HBkZdwrFNWyr",
  "key31": "29vyaPrH6ZTA3Scx7sCydXNqQzD3jB62TtNQkZKTsMmw32sJmwemuj4knXURt4GwQdiq5LVgNx6ixCtnF3RLe7nt",
  "key32": "2YjSmhWKjfX5NfsUXUojm37EL7KRJd3yiv6u98Uk5Eanwm1PYZyWFAVwYd3cgM34iHA9XCCp2F9iYNHxcSjbfc3c",
  "key33": "2NYpvpRz8pPwVdZoxixHtumMtYfFz1F4VEhJaA2Crv22K8Wm51xXa5u3UKWZMSGB2NAptPxB7JYadqU8dL4LwCtb",
  "key34": "9PBnRSupDQBjmn7JYdmgtQf8Z7ejMZBGob5kbo2DdAzRF97XYpgL4S2tcLDu3ZGE5yqDj2Cj5hvbLJ2pPh4V6Qu",
  "key35": "MVyZM9dxGrXzUi9jMktZ6VRjps96e6x5AmA9yRCEpxgaYVAmLmSKhuCmrjvTdCQXA6dnBAc2pNeD8CEsciRGHGj",
  "key36": "3TjLKQt2wyKNpNN4vMF1U2Cd6TVhMfv3dDEjo2cWpS8sDaRjKKER6oaP4m3G6gfYnp7xDF423tV2oo5hHf73QTrp",
  "key37": "5cUpQb6HrW4ND22mzEmz1n9i4YyyXzsMdj2qJoQXSjGzqkJqJbtC5AiY8Yx5C95wCfN8TKaHjP3tNvjDpyD11ZLJ",
  "key38": "39yDASDcQbTcwhC7aLLJRzbdfS6y3LH7fCf3q2kvKLh3QmiJtgjDYiMJ5bXDfBXtSvUq792p9QDMKpXszvvPzs6G",
  "key39": "5dp6TBr6TuEv2juf8Js7pC9Pe3e2oRM3z78UXKWJch56TpYaZc7MRiSEvtT3kh13ShPdhvRJD7Sc8GAqkUf7syY4",
  "key40": "2Sa9WkmeecQwFNr3VnvagEDPjXLv59rqW6aNfYNiPddrnX4nzDSXKrCzP4o3bHVp8u39ivgRYuH2QejoWtuxwsCD",
  "key41": "3grDm5R29bsxGUPcnLZNLosheGVUYiop16BZ253RvAqDWrSctvP37tJdiFZg3rzk7dKwbm7PSCeFU9vByFmEJipY",
  "key42": "4FqkHyR6h3C8mYmWb3Sa4hbm3QARnqK74wKqRCWCbMgXhPRoLtH4ACM44BsZLWyJDJoxKp5prJVieJZQmCNbRgrV",
  "key43": "5qjerzHBBbHZ1UGGYbUYT8gWtEuVMGXA93PBvrod7P3mBVELDB7sq3sNFUqKpFsqc3zwuUQn6ETfe4aEx4MYNLqa",
  "key44": "5edypUFsseWSYUr5JAepchS6dxY3zCznNBuDrNMUExpLHosC8dEjCTuSPyVJHFbafzD3udL4dm7X9RbPFW5KM2BG",
  "key45": "2LYwMA6Akg8zW8mLeivqAupPttaUWedmEb78GDkvYrQNpFiTMop4yntVmyWRFXYSHSv8dFgjBwDdeM9cwdAoBbGT",
  "key46": "2VxdVtXvQaqjt1iDpgzxXy74gSLUGB2xEe97aHL2TBc6Ttdy8uieegYSWegjKt9Zwr1KQ4rNzZ225zuxB39uAnKp",
  "key47": "vp9Ntum3SSWKZozQgwwjZjA4BWq8EGw34DWxaGcWGfWs8SS8pJPxrEZbAGGocLn9aEcd5CpPMW9KrjVJiAUo3x8",
  "key48": "3XrcCVRMQLZd1j1hnNNbsLCftSxQgrbduofTGfyGkoTHE8zDTnN1rf51Mh4npwUsYnragoH6ZcMUu7ks3xaDunWb",
  "key49": "2Sam8Mqvrgk7pkA8KVeNRr5ghajCAssGDJMcA96xp8zrZPPQEiBMNNR1ibF6C4kJusDdAK9wbP1vDVF6qotLfnEc"
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
