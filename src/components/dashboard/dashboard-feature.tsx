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
    "2aNGGep9we4ap6QawJsG9yuRANkR9m2WyfoFaRWZTmHqrRiqaZxm8Bf38ukxKBUYWt4MENVLPj924kiJXzU2CVjC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45qswTDi777DvfeQCMSqKg5Wbd72jGZEXifCeY93vjo4ZqRfuGf6yrNrd4XqthNBxQ4KMzg2TUs5ucNxTzHxxpPB",
  "key1": "4dJu231BbpGyqUUrynP3vqEwobzATtVrN4QeUEaYtJzyWsrAsmvjtwfPpaUmv57Lp3Uadqpc2fR1rRsVFLLTSqKv",
  "key2": "c3BLPAKT1ywAoiuCuUWm84tYK1Gcrie1oxkvf2k6XA8r6y13WD3XvNkMpWxWybacm3BcqKL8NYgz3reJ1AtHkuo",
  "key3": "64UL3g24hNab9cFU6eQSUeavAh2esS4n7TdrV59DAtkidWQAr4TxcNSjU5dpEmkJcj7XVWzjqFJooCMyYH8jkXV8",
  "key4": "2a8F3m6SeMPiuUJZq4yXmasydbceh6HBtxey6SwpMcDNUba8aRGhdGmYWrsUy1AY39uV4YKxMQ2V99MWyKfbFG5E",
  "key5": "3Kndh79jWP1UN4HX1j4GQ3vtMqLMP7k6bBvELCbebQd3QmYEodCJADu13HebCihYAfoYAVt6k8n9Gj7YVxcs7mL4",
  "key6": "2dhUW24cLjcoX1o218JNNvqxbj33UzjZ1JQxbeU6zHhVarsizikWjWPXVxAJdq6TQPoGhytq5zreXSQwpn2fY49E",
  "key7": "5M5F1Cjuc2eJnKhGqqQU3Do2KNtJWCZpBPEPwU112qvZhF36JtgwTkFT9RN9dmjaaioNBMCpRtJtXoVELunonkBX",
  "key8": "3MguEhmL1ErMKxBXr8SjmxXPzvSFL3hrNVWTwpCgh8B4pxP451nkSiqdL7ayeLQkKk1LSVrjakpmjPh4JszqmGcL",
  "key9": "5TmXvCo94qscTTzPakeAmHapmMPDHsLsnjV562V2sJd4AhcXK6oseB2JZsuhhsPspFC98M2hyk9ApQvT9jbG96Jm",
  "key10": "27ibWkae5AR6BCu4xJG3wvRuSEhqUVrQTiVqctJteoLXVJQ2DcApEaVR1gK2nG22wN7PpSTB5HnXuHcK8wkNmKVN",
  "key11": "4WeMkWFC4PoUWPuBHPCLtwEYpVZs97wtWptb5n4Q5KLNmhMNLppoYFG3CMM9Ydug9oaNKcEKxWB52eiTgSu8xcCr",
  "key12": "4xANxRFB2j49cZSeF4HdfQ5CHyK2eUVkPHWvCJGb1P9YqSyaAy4vdHv2gkRAZ1fAzC69JZqJaBTwJDdwwHzwvnsr",
  "key13": "Cy9UPcQ5LwMDtn6dKqmyiahnyuqpx7nfSmRiVxrcEEeXFjWSHzFtScPB1fyriRYtbG3unNnB9c9zuQRKHM3DyAS",
  "key14": "5A2H9DeA3K2m9SyNBCmFXg7Ze8EbbST2AYLL6Zxk9f6v5AUM999VGmrMUvsYHdPwhk4x8ugxJPzgiEVatxLHCf1k",
  "key15": "42Evg3M4JZ6hwT5cL2yjQdJD1UJD9pkhqAsK8yZk4h3tfmBCRR4Yefbg4ijaNjAWHJZxwiR6jcvZpY3qHNjNZjn",
  "key16": "2hsyUWcN7cc661aMosEpJ1fNhV66QkhU6jctueg92Mw1qr71iqtPt6x8SxukuoJpjT3mWk2LFF9sKN3daSgWp8Jr",
  "key17": "5c1jvGVMatYmbWxfEu6RMzQztSbbYHjiYJb8pR8T8Kz9HZu9wJn6fnaRUYPfW1NNaV8CmHk9R3tS2GRXA3eNpimA",
  "key18": "2p9MsVuemMyqHweaWUY63fdyX7w3CqqSpSdLpsEv71wzBt7LX2SrRGXnMSWFaia9WPzwjvE7wMbBpn16WUUVCpF1",
  "key19": "5pX5dJ9VQSa4XcV7Evdv9NTPyPhUUCWoNXecCLS4c8NEbbiYvkMk7bXiyXun85zCJBfaEqFNsT91vAjp231nyK6Z",
  "key20": "2PomN4aFjeJ729TaJEU3MrVB1rp8zQ941YAoKbonvZmjJpvyN8BxGuYDWf2qq7RukVVYBRMF5KjmdDawPs5e1Q21",
  "key21": "4MwTkjGd6Fo8gfaBiQ9fHzcveHzWK31yNdkUjBYDAKyc6DVJwh8292ViP1p6AQ7kv3hUgiJYQ6a9fXvMKe8HFvUZ",
  "key22": "vCmM4u8KPdUgTYQov33cMbQpGCKkVqW4CCdm7dJqd47BCj2PY4Y1j7i7DaXn5CiZ7d4aXRpRSYWJ3Zk43ar17KU",
  "key23": "c9LD8BHGJ2y5JkfuXGkUjvK3rvE4xYFJUHj7So6XVnbrHPNJpBNH3yVGNwMKiM6pVLRoGJy7N2vHdJj59MvbRM5",
  "key24": "49f1sLBQyZvuUaDKGQbv12GHDP8X2P6dfmyixNNJ1oty2cy9su7wn6GR3mh9rXrvzNZw9dCwSEn9ycZewFWVUWQt",
  "key25": "36sR7e7mMhJ65vhBLj6WPS97ftbVPdRCKvqSUCLGauQvurFx8AK1XZHDgrwYp8xJAza3oDMwSS7bKjTeHUEWtRCF",
  "key26": "5FRfHNPzYJqsAYhkXT8jGiqvLpwncYT5ZKF5jgEnLA9c5caqBmKV6HK4X7oMpQWgL2KatG9C2LCgVSM6zDPis2NN",
  "key27": "5A9KMda2gd6KJs2SuxJ6hQyFFr7WVmB4t75v8GcxF5ir8cXoSySf3dpYzyNwpfiaVyXBHbTLA5DuGjiYrHAWRepJ",
  "key28": "2ZpD9equRBEZDVmMeiZEmYoq4rwxLJ5KQ6AjUb7tfKUFbTJbwrsZ4kJKB6mLZkkAa7u8ypEMqMeXiEkNVDcr1AM",
  "key29": "298KkVgpDmRmbiwsHuaqGAM6cFyaZuKTcHTqk5H6R7wY2ntrpHSNRsHRa42ZHTJbExjc1vzsbtVZ49VbU83Ndr6F",
  "key30": "4JDYCZHr6xrgrFzoD8iM5eWuYzNTerPH2Np9UEdks3GvuiVxzCLdDNmyxvxmRmxi4UJL43yLPg3nyfJobnSmXgWQ",
  "key31": "5jh6Cnhy3s2GCPZrMTH7Xg3KVb99d7rfwERQ4uHRob2cGNwFpoxpqEbewikfnLQhFaf6NRJDxmBTeAuT7LJ25E7G",
  "key32": "35MNvrCbKek3Fb9oyvMh3DGHxSJh37kSvsFH4YLqX4YmsSQMzCgQ4tUyYVyqPxmR5KXoyQVcKJx2v83yNWtww4BK",
  "key33": "5ArYw9gmSwSmsT8wpAixYNKGabASvjGC9YbprPFYyGeYKtW5GGrWngYecszMLyWvu4dTCVDBBLT9xrTNppipqYWp"
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
