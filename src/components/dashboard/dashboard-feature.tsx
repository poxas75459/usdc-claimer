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
    "4QdTTPv31osGtEujdxhAsXRF41amuT11QfonrZJuKKATpkpUkwYdu64XGx2qiLbZZEfrmfvacVmkRpYAv898YiwD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fjsYQNu1vjKYS1FBhEga6Zvw3BR2J4TchLMH8nTDVcT4AqpDMYfhe8u4b2n9UGK3XDXU19wFtFwjLWE9cu6acjf",
  "key1": "RbXYN2N42xKaQgtBHdHJNJNijtrFbuwk14s1YtvRbYPV6wqRKBL6JR1diNPbNcmAPoMLa5Fetb97LgsfhkMGMdu",
  "key2": "5xpaiNVMzBw77TcDQnmQoJcXoFnMD6zti3N91xZ4NhsB2xakyFknaKNYva9uGUngJXdKTDHWbTHg9jU5LsrYHPDC",
  "key3": "3GVdn6jpn2E38jc9VebpyKQJzZCfy4YAzEqk9ybaUtxktQrkC5nBUbaPHBG7uDXCEeKrtURaYK4YvP5DK8qZ49zQ",
  "key4": "2s1C5mf66TocCvWeMDJ5SP4HwW9FSkofr5qGD9hPvYBQpuMzErbG5Debq88v2CQf8wFgU2wDgaGvcZy52N2zi3yT",
  "key5": "uAuhdBd1vcsGUzLSSLgzbp8zQAeP8HJZaS7WCZqaozUjjak72zQ9YFHsoeahPi8N8fqgjggxAfdSWnybCwxoir7",
  "key6": "36fVMzVDH3vzDpSkFTKckapKGr2fQYYbejoFwJ3DxtWBugStc5hqFm8EPojAjABRLPCgAj7tro1fqYKSTcP7yHC2",
  "key7": "4tJCiWCsFuThibZEEBZ9DMzjU7tAZVNTM7bNFMEPCH2doMrEMgoHMWeRWD81wAwbuwXDMo3GVGYow2VHgCpDJ83n",
  "key8": "4pawwTR9G41dihFbkNW46EUun46nnKD5VTJH2KJFKh8Ndtj7wKhfAYtnsAGvYzNKyetcG9W27sniCb8TEZJGGaQS",
  "key9": "62HaMU5z7CCaZPBsr7Y46vxRB2TZuJYPiJsLVGhhZ4sYz7pfs49YVUmqdtsqSxtkUwX2Q9mLtvfbPeiHKKaWgVuk",
  "key10": "66U4LUxdLGd2oHCvJnuy3YyfSfn9q2s1tkR2op3upouocyjAtNk34wm9Bdo74rTJHNbc3qBH3SAPE8JibazcYpb5",
  "key11": "5NcDwBJBf1E8qeuaBm2oLNhLXKfw2MSH6RxJH9AaZgWSZDA9D4fvR52s6j27mkSSiNnGyx5JUN4CAHKS8dnHihDY",
  "key12": "4GViaftzhv5QkSuhZiGviCgnnUDH66JZFsjhE7RXfaPHcQHfRw2cN1wndV76JV4ptcGAqJbMZgNqCHHcFRDDmPQG",
  "key13": "4hBqVtjCMFvySNKvcFSMyQBST1ewHQVdvz46xDkxstbE9XgeGjzoDizEhoJkiyT5heU8EvT9wGvH5gmPXBT9nWoE",
  "key14": "5oJEqFo9vjb3y4LT5PeHwwRbYeeKC2gKszqcw1e6dxUuHZUkhiKexJmtvUDF1j3C1GBvi5KDtWSe6CEkQ4EYQCv2",
  "key15": "4vQo4qD3eVoDpCyERJz2AmKk6XgscrHidp6C7pq78kToQjneRDE8XFT61uC4qoMRaR4bbQH1rcyYQQznKKDCvLE1",
  "key16": "3NGXUrQr3PHxnWr9QsTJoCkHYdgAbafJhhodp1BEA5cn8DL33ay63YGjmqujLT5CuH43qTXtZG7C6k33Zswzxs7J",
  "key17": "5MccCWJ9gHxW22sboPc3uVNfYhMzEpUCGARJUpPqcYpJsjHFveSwXqD2SpLWQtSRH5i9LfBL64o6wXeLGgmSdECb",
  "key18": "2zxNpZRhwskA2zGk9jQnuRXWa1G626ZBM9pEtdFp5FRoj8J9VXcbqsFxopDJ7b3qs7PynSMSevUjzxvpk2aWk6gv",
  "key19": "4dbHVLhCuVRsW167PoiS1qdyAVeJ249kmE4VZQZ7ENWuVF1A4kL93Dyxz2uKAF8wx1HpSob27XXQqDEbPMatR3dX",
  "key20": "35VSMjoPzaA1po7EvbJ1cjfYGH3rdJJXWwMLDWKe7Vr1dib6f92iJ3LFtGk4VVvVWPnPL4Qh7TCcPLnWQYUGRjZ7",
  "key21": "4E5cLmekdMg819GA3sX5EjQdcadZtGwdwwpdZ1RXNEMsasHoZTUcpRtQaeRCXkBp9fbZFtdfm7tdvihoJNtpR2MA",
  "key22": "47eF1BGKQNFkLyNTtTodPScuh95Uy7Xu9WqgWnVxJHk1XD2sPdujYvdPr4codwMNcw4T8eagy5A7a5NXenxhhAhj",
  "key23": "RCC1Yw5YggYGkx2qTLEZhu4xzYM3Z9yQzMCWZ9BWmy2QCb5AHCqUTyaQUbWNN9s9KpyXazXmbfVMx2kW3odayxc",
  "key24": "6gJ8dTp5a2QJuN6JDzmtEsTERbaLmiSHMQgNrGrMRPXCBK6c2MkaTh5yPvBq2xhtgZLeSo9B5P784FtK3AsVwo3",
  "key25": "5kpXBzfGCyk9Cckh7qXKWyVEiAGTZqv6Lxv9CK9Y39WjQFmrvaaMScqu9eh8PKPYe6jBx6MfXGcqtZmSyhjJ87Wg",
  "key26": "3PjzmFAP2PHC7EKXjpMPNx47xdiuzQcxRaqzrppWnGVAogknXiUvtsjpCooLEQineAE53ExyHTEZ23dcaLhEyKVu",
  "key27": "5wygcPPPgD47juJSBE5QbjFEutjbhHLLUVEs8jUB4ehDVhUxyZGXrDqd7bmNJMfyVca1kY7qkSdVPyc41T1HtTFa",
  "key28": "4i56VRkwN5VdGwEYfVvwatCcKagXBWScVXRKKMjaRkovKN37f31mXooL7YYsPHvyMbN7M4dc9p5KXYWD8bXfTpoV",
  "key29": "5Qo61YbN8qfAnrDbKLgDizaHe581a3zn4EDwz2ccQozMrUQ4y2zevT2ibPWp1gschUchmnxE9yuj5bPgX2qkTkFm",
  "key30": "2v3751UHGnorZWbcFzbZw62hUzkCf7oj9LRYEhKCXwYncm1nkpzAyGnGCaMPuuNQsCxkWRbeCthjZSP2VaNX6Jdr",
  "key31": "M1H1RwD2P5DA3LdAXdU2uPa2rSrKKJHUDJyjXzY3t1MEXmbgm8nopQ8QZAvFZMYCSE2wmYrEMGt2Z8cm97dmzqU",
  "key32": "3eer9ZTjRqVAt49QSYjpejh1iKsxkMNi5r9aLU8YY1UKVHVN6Gr9qc5qw4pq9NgSKErx3PncRfC5pLphjVTEsP1d",
  "key33": "QquFUG8TzrnRXmFmhBLmHJa99iGQ28fTQsafYVt52PPJESJV3YeuUU4PscaAKRxSEfFh9cWeVuWRwLgXSX29rnQ",
  "key34": "4iiH4Td4WoXjkyrPh1jQSWZGDRdbyC8TC5qvEs3xeZUJgyGTfYwu6UqpLEgJcUZCeLMp9y1fJ2KKt9zPDW2nJtGb",
  "key35": "etbuD4h2v5YVLuPWxEDsScGx3mxTgFD9AsByXTdzg1zAho2pJ38ft9uLsApdhHfDsQRqVz4GPpbbKT1KAtFYijL",
  "key36": "2vCQ4vF5P95JeMNPcBJEs2FgYuU9S5czmMPNsKzPMR7G3Vk9yWUqBSBhcabi1553wsG4iQdT1McpnUCoXnXKR7TZ",
  "key37": "5VzyYmAyFhxVnB816DB9eKS7BH3AtAhARXfWiREPdoaL23sCgXKU6EwtDrc1CEJH3p6o1E8UE1sJs9y6C6J7AUtu",
  "key38": "455yVPwEC4uRwRxjZxsYpMY8NC9UrrzRfmExee5FVvH3U8PEKErbDYAMjGi67V8aKuHVqMcaQptZHxQibKd26A74",
  "key39": "2y9TitvG9YbmMGtZBVV874G2RASUMr6KRK1oWSbGesZBVd121RVa1hJWpTF4x4GZbwDpae6Sbm38EkNafrisqMA3",
  "key40": "2E7NSz1SpgSpsRrvW9c5g5SC145NPmKHqB2qed18Nf1PQjRgxe6sLBrm4XLvMNz2bPXT32QFFoxAnLFHoPeUhHj7",
  "key41": "kAVSDq8Ha2i2fQ1aFwmAzp5yugzJTaURBWaN2bo6QLcHAB75M2fvhtERJ6m1fXuU5onVmNZ9HbLDC2zGvyoYrx2"
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
