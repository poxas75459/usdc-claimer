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
    "5NngjWHygFpTSwRvJiLgNnJ4nVkNxPKMEw7pbT87G9eyzQJsrDdgbi1miFYRazd118UoLUunyMqacQLGUrDkeAzd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42fqWtAF8ihyphkBm69SYbVmg1Mw6niz9bJvTWfoa4eqoT1NeGqqjHewLTYJCK2j3ocFN4ffmdoNMRsWRSMhmb2v",
  "key1": "994Y27nQDPg6t6YwHvXBSA9JmEkq5KkQB1ptjghkf9BzWosFyb6ETgWB55pjZV2S1r3Trnf56YnQ1QRCuT4DiJy",
  "key2": "p78BBaqLPRKMn5i4Fk1PNucdECWKGAcy4sfmjfqHtB8rdNW4CXRnoRzpkgXQB4rcHe8kwirhAYcqdt9UqUkTokV",
  "key3": "5ZmA6AKgek479Px3q7BhnX9bhAPfQ7oRJ9FpMMQKVADT3qSNJdGrpCXHRpNivpST4ZgykKveZAFsT2xZMSR9yKVJ",
  "key4": "53wXU9dGYWh3HHmCbdWrBVL7gQXeq6NsBoRfZrSUZqshFAJpiBaWKAMxD4e83psKojkeze32CPeghj8BE7n2Pd1v",
  "key5": "5K13NKd8zqdwoKv6SGdRDRm5UXtqoMZ5w3e13dHocrJgGKtdVxHaMDy8YUXRF7GJdzWAVtakJ3wZWTQLPe25FNiK",
  "key6": "4Ypb6GFoTrm6Q8Mw8qXWjtXYH5qD5au2GoBJaYXTqzBFA7hQ4f327AvuS9efgA1irY7qZxufpc82JvqxmVb7aoVt",
  "key7": "WBz5M7ky5DBCxMVFYHWGBPf6BLeiFCgyx19zw6YBfvHKmn485tzKXz4x3bF4GTEAXrMuTiYNwzbNJQ4n5raHGB3",
  "key8": "3wMP4jgwjWLUdM8br9vUomxnz8wRmbgFf4VU6t33GGFfdFdbKGiEhZMCbiCAmcWihcUANhZuhuK8uK5c6Q33aRc4",
  "key9": "5iYiGT96VSjXqvq4USZ5Uv1osrhxrmndz6Hk65SE6qvjzkeVEP2ytbZvuarqyNcWC61EBSkvHi1XUr2f7mNxSX2b",
  "key10": "2k4oDwRGWmmtw4qN9EAayYZ2uGQtLugmnhEfZBk3eP1WJS1uprdQPfwbzdwYoLyiEggRRSGw9KCUKJc7ShT7M4PP",
  "key11": "3fXBaiaJQ4VMZw33RughhynahmK7uhY7u1BgeiwSZSUP5E5kepTBsFpVRHjQMPVh5Drmmoy9v5DWkoNchCUrYd2v",
  "key12": "3WBNcMKLztP8UG7y3Nm4rEnhZktar19zuUohB8zP5jq1YZ5reu2ibFaMNgG8awaHC2T5r7M2RnregpYy1VT2f9Wo",
  "key13": "4HBNE5MEaU3Fh7AFRFXDMrtqtWXTtraypM7rANnmbEpWU6PLhZW5sH3ojxYaoSnr9wZXgn3x5fcdaofkvZu55P94",
  "key14": "2u8ZpE28TPC4V8ZTbDrAocSczx2AaestAtz33u5bKMJ3tvydUJ84rEBPgDySnEXtMphisRKSmkTkS3n4MD6cCJ9c",
  "key15": "5sH7nipuc739JLocLJL1b8emaWWsVugAmV4zdbCep6rhJ5D8GqrwhpNH9heMWARTL93Ufd5Mb5mFmyT872adZm26",
  "key16": "5eyWEnqPvjCs4Cbff7Scu4z2X1jksggs13zTS9jg9yeDcY3VaN5NRDHZ7GQwYkdPC6k866EMjukRqnV161vNKQyK",
  "key17": "4JZibowZz8CwKCUxQw96uv8gUExsSx2LzhahUAB1gNB96djKpaiVffiscqwHtYDxCvsGU2td7kihiQozSHYZSfTq",
  "key18": "46rcZizJhVM9fsskEBqQjk3CVrqRLmG5SQd4ygSrue4rKpE79cyxCKzWAF94JhSa2MYFxFi977Zuak1QrNGjzRKt",
  "key19": "4NcmUZCK2fuhJDutfKtCzv1tnMgPDoTZDXgvC7ih5JZaNkAJ5SoUkLTNFnWLTph5AqwMUvqNgtHmbVXU6tt6245a",
  "key20": "24K23QkzB6SdyzR6gxTd6G6smGxifC66M74HbSbozAM4sYLqrScZ7GWJaEu9LAvM7Sy9LKuaJVx7uTrZ5DeEwXC1",
  "key21": "2XAKGCSjXxHcSb169DYQwNT9jfzMankdHmYqv4z8Zqzcxr3ypeNnMSno1VgcsweoSUd5m9CZWbvyvWFyAgoDYLtS",
  "key22": "58gQjy698QFML8hUfbpLKi7zFkaFDGfPw6bccvvqjcCKYgfcmiToGyYBGKs692PW4EQy1zZBpKjBj8nXQ15FookY",
  "key23": "2wcF7hVTo9ym7HCKVQSi8AoMorzjTP7w7QNfFsqpsjV44Pu7sQ3BSvnps4KnYa6geSd4MeHDuuPEeaobZpAkWQ59",
  "key24": "2cmp11vdDb8gpPnSS2K4F1zE5JJJH5R9WEFqzSdmfJA5bpLpEbZJEetimcE6HfwDTQTEQx4Qrxc5FGA2MR4oGX5i",
  "key25": "4hbeLeYtXG8Aweahr4opdE12Db8EQe6hyw5RD43cofYmtaDngwkeZJD6asb6YavdA9TMDrdFAqwWKaQqWchbiBRL",
  "key26": "659zdFbMbdtSBZmzeZw9Y6MAkTrdyBSTvA8i5hwVvKBip7B9XcMDKJvHMvMm2gGEwXBmHSjTve8DNeaq37q6J2HT",
  "key27": "5Rue4dTWUz5QF7Sm5baPJLdVcwzjJ3zP9XEURtkMr45RCH21mGqP7uQexitbVrDNgfkDu6W2YGLgf3QDdiAaZcpN",
  "key28": "2RYKgest7iyz2cLdP2ymhsny7ZHnrU2VoHbt32sXPr4Uom3TiNky3N5zQxDtK3unKQKwQRfYDceei97bKRQZAcSq",
  "key29": "5xNR5TnZoKw7faWKXmuvFaNMiYxx6pn1pn3ZUEdugfdwo9nEWKFnLDi7ACyqmEer7cfas63DYJpU3ECNW4mHy58D",
  "key30": "3h4gNfdixqqcw4LadiL3w1ULXj75tTCjgA5UZhJo8nLn2nEVtb1fJP3fN85L5eMbcUsi1KH4hUAVsMrWgtKYeLp2"
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
