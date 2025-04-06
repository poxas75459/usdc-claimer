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
    "3VzwJmmzdXa54XnJYq7pE2tdckhRGWkgubGGLj8RK9BNWoLb3nD5NFdVcBineGjiBzzujc4qJqs1gXeq1TwumNyh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mMoaG73SYkmPNsUU8M9LD9qqwjd6eAZ7gQEBJ19hE7E4FGpMvrXiqUYDfoD52NBmL8VZvxzvfRu5vSLpZD5VnSA",
  "key1": "573X6W1FNF5JPzFMdzmgygu77fzZUybC16ZTJHRSF4BFrAJkZR5C7tG1L3NqBN38nXmjdaEn9mjPt2yT8X9RTDBD",
  "key2": "49WerpitHksJwTHs3cb4FcdmExwyeovD4pqjWwK9KwstNeXjKVhup76GCn2P47foZ8hirVJyxhzbXeqsrz7aHnbi",
  "key3": "46pCDGpgoA3iXVdNf3Efz6tQvjXBzTyiYS15SH3yoYbRQjjKhhRsjGp4DDzAeuEWxSCfatU7xNWCTwqZJZGmC1Lm",
  "key4": "4NhquKfRc5Rg9Ne17L8scHoFEJoEeopLNHgSx5kKz9hEoTtXA4gdVZP27pW3hhnLJR1t4iwBeZWjgSaVxjRiLdtr",
  "key5": "29jpJExufajc2eb1TT6fNhjQRFk1NK2kdH86khpxqgQuFSvv8qymxYJWRYE5zEw1SQ9o2dGDxDU77JrRevZww7hA",
  "key6": "44ck1NLka4UAhWaLdF4GJEYbati1icGN695Df8buxPogvRWb7kWYZ51EwWdfFrbz8zUbMkKkmAzodQWbfV5AUQKn",
  "key7": "4uQ34TieZBdCBDnrZbgm4koN3LRqxKNHoRgS6hARutee6xoB2St7HCDhhgcbhMyyeuJpMmuG5Dgwit3h6TLBmCDD",
  "key8": "49JKi3aQDn6SY7XS2vRXt4aCiE24DwY4PRa79QcnJur6dD9Ei5yk5pQv5Yy7VrWRKjajPwewt5bfvoBSanET3TPc",
  "key9": "iu5mdeZkkS7HJUoKsAd6WHg8wDnNWvgjVq3t1moVp7ewPxUdt4syJGtHAov1R7pCZ7yegKmmdDEX3bh1JEJ4z9Q",
  "key10": "3QtNK9NMaDUUuFwadXSX1u2eP6SdPdKQKoWzTEL7ZSZrwWLLvLrgv2kComGtB3gw2vKMSj2iyRJ9Uo2ymCnz42dj",
  "key11": "2nYhgt42ZbbqfZZ9YFKbfjkc1qVF5TAPbcxtBBujvhxyDEWG4RbCEU9yra9kbKg5v5vtXs4RNbyNUEdRteptXzZR",
  "key12": "P9ysRTwSPGppSQ4ekfqggEidmtXH7Q4DaQ8tChhyDZgftrLrbkWhaCfBKSegwG4TSCjhocY5LBvZeErqrP9xHxT",
  "key13": "2M9QvBMEnnpKVVPyi3U78xHcz2QWB8ksGDLVXtaq7t98fNtTadrpgkBn1Voib41Mjt3Pa9weCa4ZMZAiUFqU1i7x",
  "key14": "4U8tkf3C34K8BZewd1tF8MoXbY8hJiSbUH5KYcTbS4xCHNLBykJz3uZuqFdV3XPtVPcqdAy2CTPGnN2C3qF51RpC",
  "key15": "Wk4paYy5a5Pvt4Q6zTRTWoSAZT6UWDg37Wx88tFin5JmrPfmYtis7GJNAe9tnRXtBsUrKvMYajP4JyK2gNz7mw3",
  "key16": "yvVRdvnktd3h4zG9R1zVWQ6RqvJ8Wh5yB7mukj5uLCiHqqsojWu4fL5WhxhRq4QGLj7zVUVzf9nGM2wTCAFzHJ3",
  "key17": "2UaP1x5uvPJ7VPNKyM6uFMdreNfAmYaFRh5QaiMHU3CxLgK246fopFtpg2QJY3CsuUFtumG5XpdsDFYRHpgVmkDG",
  "key18": "5WkRp3LoBK66TatjuE5AnGsJeNqEmGg4wfYT4HSDc1DetJER1hWw7ZhQLvhq4KxqiDRaWwzwUnNY47W468mEqWrr",
  "key19": "5rohPrLga7UbrYLfHiMdjVPdZgomFDDE4dLt3PFdUt5XWBPg3ftqsVjpKxNcZiporAYiFTVGoQMA6e5TJ49y8GcF",
  "key20": "38V41XvEpaz8Ex7kiKmJUvvhgKP3UjdZFjREPgzEW52EQN5fL5g655EVNUsHhtmUaBTaioXRVZHpQCvhCdKSwXsq",
  "key21": "2AECehHHEw8RetFesNKod6WGnLZivmeEBBTZZn6A8P1cnk7ox8JMv4QmgWT5eHqa6mSkwSK2Y1AscopZwQT2NbWJ",
  "key22": "4aQiLggaakynu2Bk9saP3Q1g7zYuWHvdRi6TDov7c8foC1zjA8L4dQ4K5XmWrtenavbHyBrPmN7CeLvkvG3dF89b",
  "key23": "4LDbhnBpiaUoo3HRuKWtLUBYcQjxYtxdLeEVV1CxMPHP31rsUud8ZL6SPMgow6r9f4f9ufpW5LRXiPua8jD77h7e",
  "key24": "3Y2HrrNQYHyoe8fYcDsf72KjDg5jTd1xZm7y4tMDtDQkcL2cu6y3xrArrdJtr5wTkupzgHZGSQuzZK7cpyrVr8aN",
  "key25": "hv7JaxkxNY9zG7H9eReyjpGq1UN13YR7KTwWqR8gvvtgxjkdNx1A46pZqKQsZuXXMYxHTf9rJfVyRJSyCNFeonL",
  "key26": "2E75oQB3aUBhKHZUMz2W6dYd7ojmTTFb4WsknAw9LvnkgkZ1swekK8b4DYp6on7dBfzWHsC3rXcFh9Yj4qRKBcLj",
  "key27": "45H2CM8sDaiRu3QwtsN8vnYUf75MCKDVrcLpPduoxaHfMZ84zL2DxgPyDkj5vvniDkNVys12maRGaVHL4AeDr6XM",
  "key28": "4hXkjAfjGFdxN7C1P3G4TtsFzybfQhbuwhhKdaJ6CDQ6bCXStQiy7kFQNdTuxqaUJy7yWH9f7oLNQzyKayAja2A6",
  "key29": "2xxGS3FCwth4AEZic4LrannscfVHmz7UPYzzZ8gt8t3YanrnUepxRcixuoPnpj9EjxVQF2N9rFmJwpoexWsE5aNY",
  "key30": "3pXaMm7W5Ka23KT7pKUYQELuqn2ysgHC8zU1zFq7HbYxfSHaLePAYLX8C7EwPaazkj2kDfAbsrRXq6jAmZ8YG4hb",
  "key31": "o2kBhHUCPYa5QKcCj4SM9JeTD7jghDY3zVkPYp1uNsJCQz1LQDhdokyNXgEMMfMYecinMz5TP5kbttSSUmMPFDM",
  "key32": "3Cq4VxVrxvRCz9ssrbxcV73Gh8oFvfWQn16zJKw8CSfMopvutw5WyNK9HvuHJgzTuwDWwmmpWBDbfFWSbyDetsoP",
  "key33": "5Z55yctzHCsSD3HCHGxjSYWNEiC1hjYN1NhnQ4WMB1xwrzv4SqwHrYifYDZW3Rd9FH4dNB3vepneJwHCskGXMmG9",
  "key34": "Y2nCjnQHoT7PWiKGoB1TpnLF3u6ukhTGpgcTYV9QrKozmDtPp591etQoD5BXZZeZZWC73mWwWXopKex1H3CAcif"
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
