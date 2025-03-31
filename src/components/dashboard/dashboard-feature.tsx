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
    "3hzMZwdkMnocLR8P2PNRUZRdy9vR9t9PaTUCmkhSis2pHPFz5QZ9HgMpLGgsJqqsB7wwsHfkjws1ijasgbvChkwf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42n92PmvZHyJPnYx99nEnk7sq7UcA1t19CG8iAZZhMC9vD47hgowxXgeymDWrg9ZD5NUja5dicpLyrWXe5kATFHZ",
  "key1": "iQ4LPmJMUbxXDBRjh1XLf96TwC9YCz49JCyhcTE5VC1MRiKiDAvWujm6JeKPG6BbxiQiaq549kictFfezRrmPL2",
  "key2": "2tner6HswHT5TTEKMKe2BZGd5Lxf1UYRnBCmUDknSJmbwB1Y5PFf7ZTb4Kzd9Y81DnYH9KAetE5SUZnq9eQZeDpw",
  "key3": "56o1QSBPwBZML2x1NxW1ZSUcLYeodHutiTe9kbANpNk8sJeZxx3n2EHDcqQ1ttKHwbW2a7ecSXEPBK5KGbXMVUm7",
  "key4": "2ucdRAN5nMUqJ8sczLuLZ1QDRxZzVW3gC9PepW1poGTpfcuvfEfUHFMFtURgbC916jyBRhyN9AdH55GmRt4RDSkS",
  "key5": "3C16QGaobJk2kehT8LSYJhbFxXU2GxmWcQhx8orCFWDKeCrZPGsevvwXoJFNtxE995BJGhHxdRWXwPqQX6q4EFDr",
  "key6": "4oKC3SB3gMg1ZBLnCXSeAQtN7ZsozhCdUjs1MpUGUbCGBQydA3KfJ1QLdZ1WvjFGXobZKdp44FcR5ZC7jDxP28y8",
  "key7": "34Mg9woyA1rnTUEQWCptdEit86tTFxqEC5cAcV9VxhyCQRkAYhuZG35qDwer32tb5swSJhDo5reuoqWVXvGkK1mi",
  "key8": "5r5wRUhg6fiWq7fVMTY9JbcFeYb39Dz2zQBMAzRyfYPsiDySLBZtzo7oYp42s8CrcUu7316LaQ7mhvKsB7VRdvd2",
  "key9": "42MEACQD5CUofQuimLtFmQ4iAM5txG1Nd2tG2sJn43vJqCRSCHPGxBhdK1RQNvnWyNqiSHUVNda63Y3vYd8bSvj9",
  "key10": "56KhEEZq7Vf4xvt1esStYqE4SRgnm7DMnPzSWCFwE2aBkuEvvYWaXMrxpmRL6rsjfDtvMSmMvQLRukx6LAmncUzf",
  "key11": "43K8x84RDbkV54Dgtc3VdKs3CGaxoc7gVmUSkaHLetp7KDL2G4fQK7oKd4rJ3YK2UHnsWLwJHWKNPAyPqRAn4bQu",
  "key12": "49rsYbu8kEqJw4NM2qCnzadcLERHPfyCWVooNTM6iRYop2RqWKEeNucHTDqk2FvdvFuDFojhb81Dz7jyCQhMUabn",
  "key13": "Z2C448BryquXtoMcHTSsezBnKCjfp2Ga23fEcN1YFtPSx2Wf54EJ1DajtYu5ubV2g2rdAErzyU3UdkUsQpCWZCN",
  "key14": "5MYq5o6GDt12Q98YK9ZxhR7qZsqgQNwFy4fFqwnX7Q8jsi438EmU6vx7qGWmyEBzwQDs1nrLbuYdJt3ha1jChKzA",
  "key15": "5jYzKodTsbGTVg4gMGkNEDECu6ceNCL9RKFiw5iBVQ38u5rqppCWZcxewteHCXrW8gnVm9axpRS6kC8jfsw1WX3Y",
  "key16": "4PjW4o1UqxLMskXY3EthVGpJjS3tkxzFwoGY2WJ3nfXVnRbEyNZPuELnVdtQXjg8omzyjMSwvGYfhiMd7zeArzaF",
  "key17": "WJgNCu9adptHZnhkQbcbt7NrtnLzW4epEfEJVhmXY7Ch4HxbyNbaMGLzpME1zrEi9C1KfzUfkPVDZXnXD3wV7n4",
  "key18": "BNJLhFBQ1dXDWpZTwepkVXxpThqV5wmeo18ytW8UY8q7DJRzEN78oRBRRka2wn1CedqcWXDDKpvomzuS2R8D4Hm",
  "key19": "qVPiqpXWkVJhFGPbZhV7t4ALhgkkV7ezGz3yS3ESh4tsxpCQatPXTG8xf48uByJxz8CSFK44ypVD3Nsrwh9GnRB",
  "key20": "2cbR5pivSmhQRAkyd4JtTcUEeaMHuhEENcCeGZfRju6ipMKE79F1S2F8c2A4miu3GvVwcpLti1S29rfJQjVJFkK8",
  "key21": "4jCp1FpVCTv3VwyuWvcJNaKEWVfKRfZALXXBKaBcFR7nBDgv3vf7XdCHYdcXHUPMiDEg4z1GgwsTEBsH94ntMMGb",
  "key22": "2oEPWC35JTzAwLpw1Gz8G6uYdo8dc1a35YK7zfjHJbTuSBgYsDDTbwpbRPaFmpbrarQwgCWyU7MEhbTMFe7E3hMz",
  "key23": "41D4MiRjEh1YLQ9VmW3svjFZVkKQnFNciaLuDc5yB68LUeYZaKMSCWb9xXtxbZNPpGoyoDj2egioXE3WpaNd9nnt",
  "key24": "4VMrRAzS3oiP4TEFiXWVU7JZvNyjvTXSJvXaRcuDPLvD5jsvjqUTNToUuFFsUzTevcw547RLYJoNeVUVKAkUfv2f",
  "key25": "5ggxDj2JifLoUWMeGwBgqU9C8HtBQMLJ8GLL9KpyPT3zKsNi6HYW7Fa8DUHaxr45wcmQLPkwCQwD6EoN4GYT9VQc",
  "key26": "mRwMs5k1PPvbio6icefcoPwZe2vWSC93HZAXwTSdbFZQsu3JVUGQwGFvuRucC9GdAYhsaPN4S6ztSmSufxQvrvo",
  "key27": "6znEv5Fo7KyawiT438c3HH6dzB7WSPUzSzpPvjBtmUXpo4VM8MYzMpuLa5oFMNW9LkoYWiDF8zDfB9YXcN4gn8z",
  "key28": "5y1EeuNtz1TDg1aXTy2xN8ggXwF2GpitY7szzKbJ5x6Y9XoujmwKkL5x2p5eks4m8RbbnfPDumbXD4E4Xxqq7Wu1",
  "key29": "2FVojbYWUDi3i6c2LoUHiL8jnpznrGooYqhupxP132maQQaCdCh89dagQEYNA4dHRiZokxqqobwbZBjnT533AgPF",
  "key30": "4soev76PutLTC89M2X1K6vRauJjEwRZ8bhNcftCtD4szPmEnDTDWrgW1tMZgrZYkK287cciz1UDt831qi2MXPirk",
  "key31": "55SuyDRUMxQZsHVN1GKuBmmECA3j3HARLM2YGeehTALn3EdA6ViRFEB7yDSEHdpFewBUVxvU9FhkjZ5Ahpi7tPw6",
  "key32": "34JGvGF4ZXb1ftvZprF65Zs8TNW9pCSA2uaV1xfVGz1NQ9DXc5st5MukFLSZqDvNTSLf6jSDsoZGSnQZLcXBkKeH",
  "key33": "2LkNSvtzTpt6kKE5FgFCoLtRfFGEHtg8CA2CtxwbzLixWyCbRcShAF2ii58QhBNtfbJrK28L1EZXxQEsCHSisduY",
  "key34": "edVWwuM8PH6cpP72Mfz4yWoUm7pHfQnpM6DhR2Byznp6Zgs1xpHjYRx3LUZZJrW3J8VR9so2y6Qed6QS6zj7hRN",
  "key35": "3i4Hy1K1CYg6zsZGNcYDw5nRtXmX3Ym2kEWg17EzVJeNFuG8BBDVeeUABdEbjwDhYpQWvyXwbBM2CoYLUNUU247r",
  "key36": "3i4eArGiGVnk6pAb41v994tXND9SN9yAhDZuM258HsqLbREL4KNoD2oCj5wwimYSk4jhtXGb459n4Kc7Df9mwfv",
  "key37": "3Z5WjFY6G68FX1CH2CENe7mvMRAcssHp2xcG9YbqkutLFCigRDvL9tDbbaLvj1P2YhkbyoYHcXccKWLP5kuqy4mR",
  "key38": "4L7Qc9wWCkqyKSzri8u4jyDWBQfSe2zd3ruTvr35ejtdceo2R9pMpTgny8Jicokb1bzZUT3Sh3B3qPbnBfNTA5rZ",
  "key39": "5s1wZmb32XqexDjCftsFY3RrVPQ3rkWQJg9D9xu5M3qNfRrgPFMXSPK4gH5PNcWh9nVgykpAz3ro5j1cwrVSWtTx",
  "key40": "8FWqFujjvwxcCJ7kuqzZbTXaetq9VfDR5vZot7R17h9xBu5MoAu6vYnnR3sqTMVhD9Dv9XP5fuQYQQAvA3oq87e",
  "key41": "26ekeEJVgqizwyShknm2xvipDYxCxgWVFH54MSomRScFBhkke4XjE1Uu5RFr19RdnAuQFT5P8xqr9EneLS6ZP5sS"
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
