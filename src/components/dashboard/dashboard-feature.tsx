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
    "25j71aKwjN3uA4ZC8BimttXYBX6PHKg3284YCwZ3y5TFEfmPRgDqfHMwgTc12SKusYouRBGtnkB2bA8QW5UEoV2J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29daiZgQajRLaV6to4j6wgsci6nVgpViMyp7KH8tFRFEYY11QsNvBGixjGbWwBZmpPNNRKv1Yx4vKVqwevfx2VmE",
  "key1": "4vupPoe2sEHHiJFkkFuLkvfRUnvXRqsbyGrjeXVcn7SP7D7bSLnM2xg2VPvuXGBu434msEdAqhsUL41dxabJkRdZ",
  "key2": "hmu7AgrkDMCGR2DLUwrvUheh8L5KtrV25dGg76cM3pGuCwi8MxTo6TqQCLqbdvhHTNuWMzDREYtSC5fbA5fxZw1",
  "key3": "3VL4HkWuSDRLm8a1HQ3zs2k5xf8tjnvSdUNJx2Xp58ndS2jijdcfYn6Xc86AP4b6fAeg9oeiMp3vfEX8tALbiqsn",
  "key4": "t6GZf4JhbnudEtzpww6ZZWhPCSYBp5LdpCPHhk1ev2APYHV5r4BoKejkuHsnpgWAcmJBMHaq1P2iBTr8qWAuqTi",
  "key5": "2kEUexiRRaNtpVWUhNMFhJCCcut2mLhG847AuwsugpqHe4qKw8hGEVwLhgNcJ5uUYgTXXSAgGUjqPHA3zonfKTQz",
  "key6": "2pFi1nwafR7hrQpTAY4ZrcvyB7TCQRE41YUasG8QnG3KFZXa5iGG6qgZ9mnxT48EQPpY79tTb8oZiw4M92C4cQZw",
  "key7": "3P1AL1f4ciC8nPuu7sE4QfEbERNVKQ57i27gzUm4tVCWQLNu8tZD3H1UZ6cF1EZqpNKFzQQUjjqghbpECaYYakN1",
  "key8": "Dx7QePzv19FTwiQQvmV1q48gd9TA7s7PZMyozfEKUthZb2ayQdJjWrkSGNFxkj1xJJjUTZdJ1FKSwT7HLPhNFiN",
  "key9": "4oHY4d4cfBziNbzDAv2MCL4ENzRonVxENwSarHQfwRZiyTAxqDTf9LR5Yb2JqCGkaCRWQMprTRMVC4478oSSfswM",
  "key10": "Sx6fcULPY9NiovuF4iZiiHoVhwzaV7E1hYm7E8TdibBjufXZ7ksBPpSmE3AGEnZeUGcRibRy8Dd4knqzkF7NaKm",
  "key11": "3KEuiTJUZnoMW3KR1WbV4Jm3F6fXmzYh7NZ5w1q4ho5B9FYnzHLbz5i2C1B8vr2VDCK8Sub4wGGdURAHRfA7YqCA",
  "key12": "4nwnzFw6DdS7eDrFwUJhoVsUXmuMLJQPsvGJ1xpTqr4zLnfifXdJJCC6dRm37uEUhxr6Mg4igKcAnK5Qt8LCTV6e",
  "key13": "bZFdhE25fUfaj7e7PP4VLQupcW3FkKd6fJczutWuFz5975Q6PjGooMVPWccLUKCS3aYACsjEpFNFbRL5Yio1gxe",
  "key14": "4Kbfw5ySDM86MB5KE7GVprHSv4XVfEDtdQjbDzoJBKnM7XAbeWDxCPmLLvpxAmGUQg7uVarbdSCFPWbCxwbD7Gou",
  "key15": "35E4ihWYhoPnkmeXLzc8kWZi1LpEk8d6gapXcRNp9WtZRY2WK4HJcrfaHu6hWFE4S1KoKaaBvctges1bte9MKY5x",
  "key16": "2fL9ZNPhUZBqkACoVoRYw2aYqwNT3VwRpRaga2pXSwNvUpx5xSWmkePNn4xKbpr3Y5N1AqfhGFXZFqkZTUJ5YsSQ",
  "key17": "Z7adHFT9L94Woa5CRqJQT3jH1jJ2aRcgrpyK1dYj11Zh6dkMqXhJ3HMfKtAC8ZmzSiPCTpjM9Nr3XvZZ2QogAGn",
  "key18": "5uXc3UFJzbxApoEx11ZzuzxQnVZvp3WRCkP9rMnitNhFnSNPMYHHDXkTLwgj52hJbDRh4Tfa38cJQbx1AvsDRetj",
  "key19": "573RXXw2dGb2GHTFwj74YYWcxNrhrTYyeiinQ4ctK68FBmVGFQ6KC8VBPcrEBdtzZ6oEBgiFBcvxjtzx32XcDGCf",
  "key20": "3aYWi5JNtbT83SxpnwfzfihcFZrUsXwZ7KAzoD8gmapRSq8mp3HPQGqsVDrnRmS1nr26L4riKSm6iGWRB3Bc46Z3",
  "key21": "5ZxcXDmV3VJeTyZxppyJKj7fCcg46gQJshcMXhG8d3ThwM8pKxjuo1uNYgwoGB4EcjWPaGgKoEyi4v5NqfPTPAFu",
  "key22": "57Di8CjieHV5gk4MnJP1Rp1PQWFEW8DqPXkD4kPamAXaELk6irLyroeScMWQ841UC6UrCHyHP9HvSkSgivq2bdZJ",
  "key23": "KG9ph6JLkhaiDTy2dBPohrzXLH28PBUFhBo3MKB6WQUyq1b32DWpN39ACNcGBs6vyv5rQtrWQFEAo1osr3q2ejY",
  "key24": "tZ71fVu9xjEkv11EPddqRLH993qSwdvrX9QkmzWtZAba3kQcbqRBmT5gcHjUUsqrXGHVQ5xesvh1ZvBEBJhCwsD",
  "key25": "4j8Qcnp6vcpEmZW7oxctcweh9148gFCCUnNEbqQJmJuKyV4QQJVzDo6cKrFnS9ze1MvDf1YMoTNZgMuytVsE5wgN",
  "key26": "3mK6Jtz4m6wqHshtjEbxmYoMS4EBvJaGj6UDYqbYJMMyuWJTysAhixfqDkHfCWkSm9k9kimq1mvNgUnoKt4YWdLq",
  "key27": "5KXzpLaFioYXGMrbpfZhMqKguW54XitkpgCYTrHy9arJ5iimfD4CMs9SPFtBNXAwJFCdw2Yk7qPVb4yac7G8wmW5",
  "key28": "3gTNe5pq5shpy9t5zgVF1Jnng95143eMnkFpTRvACtXUAs4m5XJDr7JLoLNseysMUYuv6CUgZswPA1M4HmZZmUXg",
  "key29": "2KtSwjyjDjcpd9z1ivkvUZ5xTWH4mvNhJnfn6kPNoF9EFctmUmBadesBrsu3c7QZN9cR9cSsKGrDwiZiu2LJuP1v",
  "key30": "2rQvtooKm3opeW3aWFs3c6oKX38cZuZUU2LyoDPj6dBdbcdAnbGxX92HbWb7VR8VhwsSjb6rTn86N6RqJ6Dg4GQ8",
  "key31": "5LtgpwAN2pq9bMKvuZhDN9vmoqDjVuj1Xxq9XPwvoxSbHJ6bNEFbqnEqx53yqTuEbKH4V9vtG1QNDr88p5seUzeY"
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
