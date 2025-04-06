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
    "4VVfx5tBytfBY4QTQYzriV6fpQTkUdEFGhZHaBqtJ1NJHHhdcLiw5C3YUqoKj34CTEk2PS5YHnjg2P9vV5A2VmN2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49wvhwCugjKTmw61i6FxDt4Sdqy65uHQZofGJBD8zBZ2MqGuyLDuiZUfKeTrtrhiW6x3G56XK4qLR93KAzKRrQCD",
  "key1": "5UueDtjA7tDzQ79BwGCznYS8b5LtXXyDLgbEYS4X7WpUNZihGjCDr9xzgxKjfjwpMfoyCGKgm2YnDZ7ry71oMJqa",
  "key2": "2ywtcCxats9jLaFrkb263G1Evq8NhdoK39JTDLRyP5eG6TDxRengnofCKgJVC7PHifjC1ebG2oKEZM1UvYq7iiSA",
  "key3": "5Rio1GF7yKfQ7cM6MTZC8QfgsmXeaptR4epnSx6e8SVU9dDEUD1HmZ7mRaiNhgJJp3Xogu7W4GJUKmSxx3UrFair",
  "key4": "4F6yei383WrQXNKAhjaUHp6jPCAHTR8VAWKspbqdkBkFusVrbeSMGtsRV6S1vEQFJ3Rii6GDHB9ybNCf13xTAiMe",
  "key5": "diWUNWauqEAHTzMqyD2k4vVmxPD3RUFDV6YV3LsrngTbpxc2Qdur5AscXgzdyfyT2mYDuShDMTmPD9eG7VoQjDT",
  "key6": "4otr4D1hRmtgvJcd8cFHdKf7ysrpB7fUMoXvpDGKo77EerSgq5WyHDBLsZSLpEJGGtQHFvd14w3nMjQ3CFctcNn4",
  "key7": "28BW1epg41aHf5g62XS2YNSJeoREJbDLpZzgf7ZF78FwreDsRUbyeJMetTAcpT6pAics7zwS5nikLA8chuWt49Zf",
  "key8": "47AvRqttxqiC8ZdyXTU7gBS8qpPEY3nNKHRwmemheDqj4eiEr5EcbgTNL8ARVNcay6RA8jvZAvHzQ5GKrKA5Mm3C",
  "key9": "4D6rdWXwZZvdjF4CtuDBCcgCGDs6qfHRnMstp8kYqF9jS7RTSfNo1QKKq3wgxXyviKejd2bmaFTaJbWuXzy2mNqg",
  "key10": "Zd6wsfKJNhRoJn53dvsnKoAqXP8H6sT8PzDtigXuoA5Zx97XpRuTHMZnYK26F6EitGqwnmakMLXYXkhZDpCMoNa",
  "key11": "38HqsWR7t4Lh7LS1iXrnrcZD3RGUefmAs5n8SURzEZwrokPjtBvo3gDyrF8ZxuyE2L4k4v2ihX1rNHtThjR2cGBv",
  "key12": "SwJL7vvqGt8V2w9U2pyTZjRRWavUnk5e4UoDukQbdmxTG2d1ToMXDyaysTtm4wNMkh22u61r5k7eWSKwKupENAw",
  "key13": "59kdL6L6JaEpsqfj8hWApMVz8STYc2mQwmhuvKCeay4NAs25AMmoFJ6cRsznR93Z4Dea4TuQiLoA4dMscsJ3WLue",
  "key14": "4zZV3SzsMq3dApnnAM3DuQCrnnQiHjL11DD3a3w3UXfPN7EYPX7WjocLKrqKyumoqy9pSHiV9m49KyHar1ieyKnv",
  "key15": "279Wei72kEBR1BYu83mgTq1szvCmYx9LgPWdut7MRLxS1UryLozGFJXczRpwuPc3rkSiVnsoVknvNwQ8H4qUFi9s",
  "key16": "3ytrgVdgH7fSeL4DjW3z48q9w6ywD87JNMCpp9EJUeDVS1MNCW3t8kgU5EUKWhw6BN8RaBrhaanyCd2fFYWAbrHX",
  "key17": "rkSbiq3PCyZSq2S1Z6T75Q2zJLKZbxy6Wwv4K1WFQ59vmiyVzdiDMeTnyZzCEv32Um5ML6CNgYPubVNRhAHwuU8",
  "key18": "3Zf6RaM2QxS8sAb6pZxtDA9hQ77rGvBuvByARZU6RaVGD753UH6enQfPh3Hrr3UM5WYLWyfYVJfNCmE57bJirkSM",
  "key19": "2M3yZE3bNG5nkdopG93VGann4qMoRVCse23uprG1Gdm554s4H4rkgapdab7TvT4y98H4LdJcnYaTRrWC6v6woUA8",
  "key20": "4pbrB9Uy9L17s2CRVMn31kzXXRVVtprGkqFXznGFRuNtHrHTQSbqgMCVwfBQMsXMq4jnTTgusWvtidcy1t6qHPUn",
  "key21": "2JxB39zegsPaLbvE8FD6um1d4ag9PYK63fqaJ2qFyQUzh8yoYbf3oQ1AnVPKA6UnVCGeRWyatwxJatfcqsJJZgkw",
  "key22": "5ZCcEwS6Ryztj5CZxM7w7D54Sy2B7vTjesvuX8xx1Z8zh6WaCeww1iBEDVrzMMotvQhpfV6aW5dPdQBS9fBLTcmT",
  "key23": "3Dx9b7spEZbWh33C6gJyKfeosp4UK1Kk1dHcodFfRbLL2yDiqwGvjJThCDj5JF256kDzZFwcRYopfm7gBAVQobQ8",
  "key24": "2EfNmKj3Yst5rG9D5bacP9NsShDzZKVXWbrCV3eThfQ1N3A9UtNTFcibxtf2AJhuMp6EExUDRGiyW53eXAuDDUm2",
  "key25": "5NKYSLxc7ZenqLtrAANCb7i1fiP3miSVAmko3wnNFRn2UXZgdi6pHoXzXwKowDU3zLUGUuMuEpMGdpjEZreqvmdB",
  "key26": "3pUPZ6g3MTsJAUssrarhA4vfHkvXaBwczmmPVkzowhFFVdxahNZzPo2Rdx1DKCUQzN18bamgWCD17ydrCMqdN25f",
  "key27": "3ixWu9TKnqkjBm9XG2JhuSKCDXoDejihxbT4FSFKFxFK14QHBdMtpaUqeE7zq4dMvaUhqA5uSPzeP5wNtfxg1C5Z",
  "key28": "5uURwWZCCGJ2uPxUwYqhoSh5Zo4uCy4LNjhsFsGuybYngp2MJ8JRThRYckqaSKVcFszD5tDw2nE8CDdxCKfw1rJJ",
  "key29": "3ipJtuTrZoykgxzN4nKBgZwwWR7Uv5htbrQ22Ursw6T65bncPJnhegBckmhZAzXCbvpy8be7DKhmXLEDKqxVc2kH",
  "key30": "43SraCK9Q9RTZF62DQSzfHP9cHfA5dwcrojBNsYZuu9tDNHCBJVX8iCMQzSR9Fws1xSFwNo82URbeVc6R2b3U6vL",
  "key31": "5qWYtjULegYwXYUZG1c9LsG68qERTfUqhmVuvUvVVbCDTzCCcGTAVJcpHBsi4kEoTABxTw5bHtn12ubUc63G7tEb",
  "key32": "2H7JYjHcijPZHPvwGyQ9HqZsxrGRaKAmtJk6wZqycYfQeGWL4f9KSwhmuWXbww6C9sSfZVXYekWFnG3a4ah51Lnv"
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
