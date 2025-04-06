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
    "5oneuxXiyTVKHQp2tnogvnkbD6o8hB9FccEZaSuqJFSazVVYBPYYtsF5K7UkMzn5jML8HAfbTk7TDRDmuoBFekP1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FmLzvMgzsPAk7zsdgP9WVgXPYt6hZFmKjnCCU9wwh5tY1HxDpGbBWjfU5ZieGCdNU2aVyQHvcg4zGLWduDxvunZ",
  "key1": "3RTfZvi4F7WFN7nd9otduf2BZTKzxNAgAzfrYnMwbVELghaJYuLR8NgpKgaDxuh9XDtA7gYohH2svJYhjmFWUffi",
  "key2": "5DfSf57nok8vxGtZfZd1gfzDJ5gR8JBvsAmzh2PokzDuLABPr7i7XbrGg7VUXxb5RFpFRS8crTFQStADPVatBire",
  "key3": "yRvXPQt7AApWiFJfUX7cSZkhH7UPR5tviBBrNP8KMTNzUJqu7NkzRNFyxmnF1gcfFdLXDG8kKYu1oQCq7Gzs5Do",
  "key4": "2EwjkyvK4xqp2YweFLNzZi6T7Wdy8nbV8Qy3JPo1mD5GfGLXcynky3NSf9L5RqXmfaCXiBdfFeU5uZEkd4uRgdLG",
  "key5": "2DtHSskActeuGKLnw265iPsdP7eCStCQ9dZAeLmDCCGY9hkqCq1fdLqXYaX7x77gkKCh2kSeKPMo66RYRyxghjAv",
  "key6": "361LrCAWMxBjCC3j3TtS46DSUzLv5nE4XLpXdeihP6RKpxyAQJF4c7UKYJEbWoAxmgj9enNZp2RRZRPteXWE4aLu",
  "key7": "2bmxHmtPk9sG5hUJ7WyApo63r4U9aoR1NFxgYdhB9PqVVQeFq4dRAdXHXNRjNnQRkAM7ps9i8vHF73kpy7xshWt3",
  "key8": "24ZLuxs9DHmZb4zXz447pGzqiRH1U7bUcCvK1ALLxyhwYwytw6ECL5m3J63Aas2Dq95XxhovEpEfAdbLbMVV4pG9",
  "key9": "4yUxXKk43V96FmdvxPA5mW1oU3PPEkrYwynQqh1eCQ1END7Kcd3KTpEF7xrxccxMviJxLSjUZDWJhUUgNAziirdX",
  "key10": "4WpmQGSVvpePam2jRGCpoudhtLGcFko6HxYLBNwKM4Fykjzs6CmVziCuxEpAbh1gLnDZ46CKk73uNaa27P5HU2P3",
  "key11": "5fR39KNAL1Div7cDgXwTXh4UTLEj71oqarvG5Q5gRRaoopHtVbcSuTY8tDVaXsVjPYEDUp2TDND9ZpvRx3ZuxwVP",
  "key12": "2mjpmq6daibtjbh6XUrwTJHCwJhHF7AQdmt44DNFfPnHDJ1CFEoqowYQMf5t5tc7d6p2RZPwtBZXFPtvfpq4hnkg",
  "key13": "5tg5S6jcMTgS26K4wHgdcpXpJpY7CtKmzkvyP1HU5gH3ADSCzABEFZEwxC7TKk8tXyXZ7FYcqiRdAFxVUBcTNbUB",
  "key14": "63G59MYuZEysivazfV1k9296XSnPSaZF2iYWp5UAnd9R24uRD3PC1iV1JzVjmw5vAyYw4YxLfEjhe78RcatXy1W",
  "key15": "3nwvoDzaq2sbPPNM8CfAoit4DDPATgWq26RGJ84kGkZg47LLyVgsSdCVLrMuBA6VdFpbCYThqYGvotwZzKMKdNSx",
  "key16": "2XmxTe4moyjJJte1CCfuzAH2QZkmfCi5rQK1NgghQTKGFC2wcAApqXbe4kGwuhvGGadHHP9J5FgZeVJV4r2xhQM7",
  "key17": "4t6zwDfejgP5vtYKnwq84ogi66HgAPQs4BPdcDpoSrZTtjYn7iYDG6FNCLFhMdMHq1gGtnXqvoGPoRJgqSg5VT9k",
  "key18": "64YX7jeCy9oJKjiTMJmPMfRRDHVyusfpbNQExR2qjvKTFDTQku4ojmeSwGJHCrTSdRQFJZfZySBYwxFQ9ovWQBLt",
  "key19": "3AtyTF61rHY3rjnGhikGiNjVZSLXuUMbtbu3sdyxJjonGQncDUX6KYbySnwWsPhmwkCuBjZRPatTR25RM2A4KRRm",
  "key20": "2aLystEqvifpT7amPCoSdnUcyvEjMciALRgbvGxRtz9Q1p6nLttLVJGwPC9UVje6bQGu5XtPyKwciy5mpsNBhJXQ",
  "key21": "2HQe9hbcLbkfF1qdL3uGcv24DmjAdgpaAtn6DofKiNLZPePwu2BQ73kjY7n3CP7Ur29s6Hy2zjTtngagbxydezBT",
  "key22": "5vGxZBpPcRXNdNB2HeDiAv4jgeEC15i6DuqBRWfz5K1hp6MmoJvW2HqQpp6bJzQeKxGb18DBuBBhynwWpNk9Hfrd",
  "key23": "3bSAS73XKRPhtsyXPtuEsS2eannduwe8Ma6fDyd4sRmfBJ2hZ8YrHTE2xhm6Z7kwioVDBs8mSAzsq9Nef3PcgDe6",
  "key24": "Jo5vgZJ4kXX16a4KnwCBoeVydXC8EcUqzUieBHJAAV1L9rHKSyo4kp7yUoYu9e3YKTXanRm73ypZxEZiTpczuSG",
  "key25": "55iWccMFbfy4LXNZ1VDrqhTkveTf3hJ2h5D1KBPJeXxPzTtG8TyTSLQXeTswQ4dJqUY4w5PzEa1b29SgvRPai7pZ",
  "key26": "5zr1camKxRBALHJd672SXEDytAiDeSWADpBibbu9AhMhYdDc2LgtHZCewiyyPkQfeYwmqAaavyWXF3mj2og1DwUP",
  "key27": "4zjJUhFUVJBx4j66m8E6zYHmL5wrreomPiyxfmCdx5VbyZLxzc899mAic1PGSMJnWtuKokghhEW2ECbirZ1jPk6q",
  "key28": "5f5DZ6vcbQmymdqzze7sFGGXudg6ELspr3vMGZvaYy3UigMAogCe91aHE1EVxaLbyYpNVPqEGyt81hK8tLLbwxaZ",
  "key29": "5Fjsf1TYGQVuTEtGHDyF9uYq6kpSP6YxZ9cyZjoDwQwdSP7umNiqv24oPjJbBS922fTVw5aiaB7j3EXwWmLfeWkG",
  "key30": "3HwXdyKoLVCEJnT2Sxr8xxvQYviaej2t7yb59Akm5FzUDgkHXo7GrFZGtG2xpazDbD7EyDXjTyY4kiExfAoJk56V",
  "key31": "4RWDVhBHBJ6WZefen8MUjsg27Nvizt2rmoZgzqjurX4czdjasKKVMuBc9DGBSSu8H4uNMD9yK8vnuiWiiHHbsW7F",
  "key32": "2Bh3UMp8fT7dF6j32b6BCsjwGNmmXowLVj34RKkDRKeJqbawLjjnmPUEBHjRxRUjU8HcAhGjsQQZi2yw67pJ4zza",
  "key33": "FHgarPEWXW3bYMrKrLAm8rPYyPQbGJFytqXWBGNj7ENWoorkzEmAgWEnCQy5A2JAznobJpbsKCfkQqQAuJq63rd",
  "key34": "29qEe5gzpnHJjwMxnyPK2N4b2rvRp5AmskpQND2qmjMP155QXVQPvExq5wC6TYzPx68ZFY9bPag8iEtt4FZPq6XF",
  "key35": "yUV2S2x6qBXEyHKNZM8fHYdo8aBnYfDpACpeB318weysSLHc55W4eG4VgnbeCo9z9nS59pJcSjTm4rDYt4a1CFh"
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
