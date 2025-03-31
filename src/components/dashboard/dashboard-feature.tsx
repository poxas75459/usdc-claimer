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
    "5Rv2Lj7CM7DC75ygJjrHGDG5aLzxtQkQyDYXNcCkwmpnMagTCjafvXhFeuaSkrrzywo4bJTm6yZfDMZ8rmzKkLyA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "soc4si9ChELmtGimLgzgdxdKNyGzqkBrwZhLdM2m9kdr41xQZH7iT54hKVg6YVm9WifS5Ld3chqqMa187xKTZWo",
  "key1": "2ff6trRhznigHebPWF83dTANK9VPV9XzEoRzbhwftQNdQG25uNC3uNzpxVtEDQwmbCHKTTZyxKJXZ3SHKLfZkxrX",
  "key2": "s43TBevRmrwA5s33Xt9ae2BfYEuTos6MKfM2KnuQC9zoMoC94Cdd1MHorpyvSC6q5JDcmWuELB84YpG42CVBCkr",
  "key3": "3eKz979Vy3mrkJizNVW3CuL5tyRFk1cyhqLgQdt9UqC2ScH9j9Dm5WyoTzxcL1B6ZZm3mKCFSdkc6AncatQgS2Et",
  "key4": "j7y8sYDaf1ehAa6Apxhngw1gtSvnp3gBoc9QugB2ZUbt3PcAE1KtStdKaZLzY2Gf2CVqdjbEh9qjjJWZtaxxV2y",
  "key5": "3no1uy1FcjbhRD7VrjNQSDkPt5HBkpakTEJyJtrSwPMzPE7NhQZMiU6ZyMeNVvGMnSfCSkSeydcrD5iRbjdABShH",
  "key6": "5Vp6r3skP9vLea9LgF7398mdPvqQGSQig5kqsT8fvAENJoXokon7kRRJsAkVzXj3Gt8YS7RGCgqy72WcMPAGYuYh",
  "key7": "5WpQXKKCEVpKFNAjsAVXs44CYoXrttcggiqx4QHfVndR9AAsnajjoab2D1Ma2R3cKcFgnf18ZJ9VG6YaBjf67rcj",
  "key8": "4za4AZkwcFM7wgM5ioRqajEWk6VJmpN9CtmGgKWDwEdRNv84e1pQxcsttBhvTGrTo9hTqd64AthQ7wVvQmth86v6",
  "key9": "2cs4PzNvaoDiBgpoHxJZPM6JBuZqGxnYKfEF4qAyS7DhQCj17oFphABXzXTt5a8MxM1KLBiBgnyjLJviVoDrgYnz",
  "key10": "24Emigp3K2PViyCVbn7P272FmGb2B8VVg5VBn4FAwXDiq7du6LDWFY3bKx4gse9zrhbWtmc7f7ZYAoyVrY3GLafP",
  "key11": "65cwNxi4NwYLijXxvKtJ7q2w3krMtDvoptXrgMPaAWUmrLvwpVQxYUfxU2hrEYWjd7Gz6VFhXF7ZmQNzXyXeRAT6",
  "key12": "5tTyp3XaRx3HLQvTnZiCtdkfLVYBuhE9w4itdt9s12fHn27KGBktFMQf7fyQB7SCyuUfQtza52mFZyyhNMQGjmxb",
  "key13": "5yDJLs47BNWq3qwhpJQ5U6tj6ZP87rpyAnp5SaUQk4Bj65syBT475hwu952HH2a4MMxaX4S5HqY1vdGMky7XbS7k",
  "key14": "5Rph4grrpYsU5T5pUXREfv5NeUp5eRBYuYsk7kYrCXpeqx1BaKGSpNQn8LATU29cVHoWWvwyPgzPUm19rdV4Robm",
  "key15": "2y5ynrc3WkktfX7XZo8TMWUDkArDTPeAmnjy9hHCBFbctsN9BT2mSqKaSyZwYRocUBmHmtvSXKcbbz23uz1fmxdu",
  "key16": "5SfGXToSGJtdsHPpmxwXCgns94E5FAci82ZaNgoMN7phcHm3Nqx6qoUZD7MfqCaM2svN8Rs9c2VvHy1rBMnMkUdD",
  "key17": "2KRP8GHCDioRRmRPW5aikkw9cb3XEcsuDugfrQxN6A6r1VbGZfsZ1cr5d9Pct9rxL9so7DohrPgXQ7Qr4jtoevVK",
  "key18": "2GT162rgf7a1R3xPRBWbsxDdhvYb2sHaUj2ZJqwsynSN8kqsJt4zMxKeYx3yQE7QnNjwDdsLmXbP5FqEMaNbQpxb",
  "key19": "3FFtbh64wm52b47xTZzahzJHRJLK5aiG7gZ7GNDWwLfDmyZCbnR3xfDdzb3zRPFha9yn5urwNHPqgHzHLYB5q9Ny",
  "key20": "F8tXXJmSyPtmJiikGV9WhbYHJLDyoPBEcbqs92VidCvEKtbyG1my8Jg7KphjWFzCy79ePyrHNiqt6zTAiwKnU8C",
  "key21": "gyzy3fatrPmxYtCQa4nK6jVrVKCzcf7xoEFH3gf6VhX22XS9KJ17DD9tXTf16NLTuQSirXZpvCbyyWxPmTeHao8",
  "key22": "5tzqW8s1tzKZP2XnTDNZDzqZkS3jCnskJdS9GRRL8gpwoCQCRo2YwWXXX4i2SAq9ywqU1hUsW9Di63VvyEt8t6Dg",
  "key23": "2hsyEAvHyq7noUFFnQr7AVJv7Dv2hDw2SKxGoX8JpHs2vqCr9sjeBCz9HWB9AgFz3YJCdVLVMEfsphBYehMtYSy",
  "key24": "DARrjGbpEahjrnEpbF6pzq69CR5WkYrm2iunYY9Ln53dwojosB5UDYSr1FvkYv9QNYEsmCEtTsnuJ4YuLwzU8VW",
  "key25": "2JKM8LKQVweKo9rCweeAvGmUx83xcQHUvZKk5f6RmpJS2vfYovUiTB3SjzBuZFC9MvQtjE4SVW5nhmyz5qmvUsrA",
  "key26": "ZsTwwTJp4zxVhY3pGzYA84uNBgmhymxrkBJQ1WSSc7m2daszcczsbCL1p13k8y6A4zwxY9Sdk86qzMegnhGmEGq",
  "key27": "EUWavqRh2jPgMMuABXoMicK8YRB6936XsBPYUbmxM1CaD2vsHM49eHP59s9qxnAJzjv1U1Vm3D3MzdEiVaZPu9K",
  "key28": "51A8qEui4aDzdvkFVBeYgLi6ijb1QMB5wBJvipWrZB4Tcc96YQhNCnAZwEQLbdiWRLrSXz8mF6tbBKKfnnZbGGch",
  "key29": "5AHmgXwqBqpqd5yxPAmpaDzzKY6t8wbzcSP3QQ2zep6CAxWHE79ZB7fFHS8zZJXCYMpAf63igx4VHSzBuicnGKz5",
  "key30": "3mK77TbDD85SDxbV873mD179TkAdvT3QKL2jdFVRQ6FMbtteaYoRupTP1xcXh75axvyCWzCCkryYtJxVgM89PQwe",
  "key31": "3VXttcjdvtvT3DweFEnooToyeC5KaxwhVYkSuVGZXYvX8unsbANVkiFWMysPaUVn7NKm9GupjDJqRLZAZQYr6t8E"
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
