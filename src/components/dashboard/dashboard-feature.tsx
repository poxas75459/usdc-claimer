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
    "unnZ2vdxnewpeKN11yNY2fy5VqiPMcbs17QWriXNhca8vePtmZP8fzZqgJQNbkKeWitXUQtTBmvpZ33wvKJhf1S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xKaHnqhBLR9emA9fo4AAaYPyY3YwZZSz8Xs7EgNcNHKU8gb2ZGGHxQcdKm3xW8VSrSissrRde7WqXwfw6vYcKyB",
  "key1": "4tEaK5SgYBwCb86vVLP2PsWmLvmo95nZrKuGgcjMJFXgWDua2X5utnWXVdWc87or7E3rVYaVFoyyESYjhnNDKkUT",
  "key2": "3LnPPEqfYrCTDamwn9SEe5sf9vdbmLJbH9Vms9ATfcV4SJBC9gDGFByRNcNhU2xjAC9VAvFZxfCL9QEpSzityHfm",
  "key3": "3fevwjVcHQ98E33oVGaocDq4XiwG9YqaPEeXB2bfRmf8c8i7qnKH2Dp7YsVXEBShQLEzmeVYSUy1H6SssRbMdWys",
  "key4": "55yRVdNyoWVx8n645ntHjLoBFUQhGa2NLEMYkvYBbXGxaam927ky6aXnsCMDYEwTkH4KmRtU4CY3rPSW2fbZXTaW",
  "key5": "5PAUD4CV5DhBuzxBtTknzHDKVp2mvoZfw8GvxJxWUcbwYnCzk4Gz6HcdEae7JeU1EvChvXmENuJt56WEKoqm7jcC",
  "key6": "4ihJwbYwnyKxhVPogM67WFeFs7Vj7Z84F7upvLYFDQcLbyo7n33FpJvq82AJWXXUwBBWskvSLtKMpoCDYcLoHacS",
  "key7": "3Cm44AXH77MtpA8FCYoE3oUb9rWYZ52EmeBdmQZ6RxGebyqJ5r6dV9goySkh2rHHA9aGuwe2oRwt9TgZGmRVXnZT",
  "key8": "ruh5vbinpiFfmjMGcVzHwNigXnbDJFtcyCVLNCRXSqejAouxYEuhXXz3wpunRf4s9daKZhhadXpuuL8MLBcms6L",
  "key9": "jwq538eww1G3QA5r9PX1skHTSCmXFm3TA8LKRsrv4Kpcp6Asi3Jtv26Qx1dfPtuu2wHYzpbQQutGRsEZ8YpCUGX",
  "key10": "4J3C4ggpZei4dYMkQEnmvS6dcjLTn1kdSTBYFxhEcytghEjTMqXFq9xqJnJNu8kkEPLYnpHYKn7eZQZfZMAinhvv",
  "key11": "LbNkKY1MTxsQUVQKX9zYUV2JioSDDqw9hKEAdV9jvkJXWg2Wvy2Bdd3kF16hCf4cPEUEo3ntcm2PBnSEbG7t4dH",
  "key12": "37dbfSdADNfMHwF317tyUBe7AvSno2CZwUEKH1JgsuFMdahu1eVAbPPtqHLM6L51eYjrGXynd92tfU8x8VaMLuU1",
  "key13": "5E4rcbsSWfnA2pAJfgjFZEehhkKMy3WH9kd9VYVcJMeJFwGJknHqtcd2zAmbQBZq5s6dTHxo6VBgfRcghZEL5Jb3",
  "key14": "wCr2fgoM2BFiRevGBu7wYBGVnPdk4CYak6DC7Zpy9fecm5qgj64N9TLz3wbw32U1kFLRqygfmeHJ224voqfsjUf",
  "key15": "kC3WJ99MZvnkbqAg6yBXYxP6zUfrCZBUHZTkEW4Wbmd3ifngYrv6wYWtzb4brfbU8ohxYkZcENFaepTDdJawaFq",
  "key16": "5bjMVd7evQb3Efv1yh4EXyR1U1kMiQeFj97c7hjdsrnBE62U2WJWTp74AN1Wfdi4icxhLZq58TvqMq1YXk1uC6FE",
  "key17": "f8pD2nXtWZXicF57BB3MB2ukvrsKAAj6TEXMoxd7LKCQ5diePmmeDPA2hKNknjFpiDSB9t86ySX9V4xZcGbbtMn",
  "key18": "kZcGzzVKf2QfdKzZ1fUeYYLm2DaVZrwcW9E3kGFHakVppZZSirTRowMnqe3NgT5yCbMs5SiQy7fyqR5U6ktGL9s",
  "key19": "5B1AYkvRJpmhqCAMpFp2FtuM36QFuKTfvKcbxjwfCpb4CLhszZWhmXmSbC5M9yNirBhLRQ6No94DK7gemAGEm4z6",
  "key20": "4Hdq4vjcNjGb6g53awZJZa3BLWQbEbfMX1aAtNDVA2JAtqAfDpyCCrZcNLW6Kr8w8qYxTTdqGHSRwkARjWgy83Bh",
  "key21": "pRnchWWn5YJVdmnZ4U1fCUkcZbyqMcAVhNKDKVb3smWPYDyiAi7un1Subv6XjWY7oRnacPPK9pn6Z8wTDLwvnhk",
  "key22": "4iCX7katx8gTPnMLzpa5LjhpULKWMhuKqxSVJVcoyZAwhuZZ8Rgnpesa2Lx4M5VJWz1Kq2moD8NtAjBRHu4vsEbV",
  "key23": "4P9R9FCGfFr5Vccg1FqDG2DQFvEVY4X527qewVS9i8ptre16hb6XeuVVj2yPpbL559utwkPRVdt3pAxx6DXpHnEi",
  "key24": "41iUzL96CHvWgoaYYPg9EzTvMQuL8AD7MdH7fpEAsZP2kXouhCEW75VjfRZKWKm22nHN6xFinmvfZeJ4ZgcFKExa",
  "key25": "4qfbmy8G6D7ZMABG9AQBdErDjVQVQ89HkKgdzKsC8JuxJkYMA7zcuMujNYAp9TQdcLRsaXDhyrqv3fH2LgjFe3v1",
  "key26": "2MLeny6JQrVoNyJXyXaGrAxA9ypvm1LWL8RafJ8jhz7z9buBn98oHLzjFKPsF4G9eiizv9N2CcHVrRXkU2UQVtNH",
  "key27": "4boRMkPbL6QRQLpW5gdQsBNwZr2pCjaiUVoUq757HpTRUUh7viN2FNFybBTkeZ6x3iVw3dW6WiBcmyja28381Avt",
  "key28": "3bxjqmzCY6cbmCXDKo5SEewYwzMGwKXNzsX61FXG6y8gXAdbxcQW6dK8gQNDLLZLG9VPHxJPiAwrQGL4yss2y1rH",
  "key29": "3Hm9Kc43Yyr5a9U6MxRVDGfDQgCXAhYGdAJqv5Frh9NmkQpmTNdvHrWMX4vE5ri8GS8wwRGqaTS5KaWL7bN2VKdr",
  "key30": "5R4M9ZtC57kEGgAWCejdu7zoheYg5qoHVxSvQzVRsUjxnwcUDLiRA7V2inuBgYcQZyW79UyFfHBppsXc85jfUvRU",
  "key31": "2frDLFZCabEPA53EepckYmF84wqD4ytW8tJwcrdXaLPD7b4s4KEXPVngifGzzKrG9zqkdKEvN2mvawqBRaoGN89u",
  "key32": "tPjgDaJg8FgkwkXJ4r8VNPBh7DGBiDPftptiiqMHoBwt4Qua6sSuZDav1TktXjEpGrSmatYDi6nDKYp4MB3A5PD",
  "key33": "2V5kqvBC6eBzmjaLE2QcoZR622tprP3aDt2oHSfLJ9Z9H6546kWtx7MHpKmirL8UVtajewLsjkqs6rJBY2gx8ztq"
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
