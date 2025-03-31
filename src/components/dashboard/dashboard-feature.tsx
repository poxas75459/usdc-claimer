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
    "bNswsQWs8PuqBpM5Wd9KhS6AyUsSFKULkEQ7tK7KYMQ9bmb99qZ2kzqVw2gsc1AAdJwhHLt8bgQbiHqSzzAEuSG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "124rUhwYkZt6CsqngQ8SygABYtRH81aWnUXCmcSeVz9vTGeNjerpMQBWv4ch8VH9xEMVZsmJ1n4kNeWaN8GDATH9",
  "key1": "5k2uCFKP5aeYCVP3fLob5N6aht92Ge6vHKNN3qEZGVNsZv4Zo4nWQSqvx153dhTFDPktmaukHfnSuqqms95xRkqC",
  "key2": "4ajT7WZGEbhhL5zshkqH79zi53nexF2k9pEpRfru8aCgoWC4gGX6GMxcHu7ummub3TaHzmJJYcuz5zhb2Kv9nCdT",
  "key3": "6WnycpT15rYddZLRZWCrdZssuHN25s5hz8TP1CgTzXcZk6ELDawwCz2E6xdxuLFvnzLuP9tfHTJLQJYNdvJdcf4",
  "key4": "9oqygXE6LUCyKeiPh4BpSSNjFMu4QGgUUf8NJibmM8nBbMeYBoBJ5ZBXqy68A7Wkq4VKkj4EgoJ6ZmHW2MoT1Qw",
  "key5": "459ERm5kAnQeKPm5uebF9sgpsetXSPmVYFPNVtZYjvNGwYbNZz2LgtfwNumx7TWZLuzeh2nmsKqTPYpyuGrHgvTF",
  "key6": "2yqT1ZMyVdpvKdCRHXiZhkWYKjEJKnMPgwxDYCZxFFw39EAQsSQny9TDpfKmBSExBuTu167b4NojdyB3jmLNKnVU",
  "key7": "4skw2EfUq1vXJizU1fhuLhdNzm1BNmEnhxHhmjTU5QTcVTLn3c2CjZc29J9nY6xjoMAew8vLdau5iRhEEpfLghEu",
  "key8": "2LJy6Jj3bsM5FMyrXujf33AY1xWw25UkmbWVicFt7k9hiDU4cCyNS2YvWAH6sVoSCpGhjeoYaBMnbpvU6TBi8UV8",
  "key9": "2AXuaQ8A39fYgYMYnUh7tQGaMn1FE3ntG2bDy8eLFbyKTfXsyy3Sn1Ej8JdHvaPgoGKtmjqRkceLPhp6KeG4v9RM",
  "key10": "4hQYgNu615K3vVjnPYS5CeNtzWkMmBj5gcpVgaND3ypPsvDfY4mjKs7gdw2Kct31YLxUfjYw3cgo6uGefFNdz8Zx",
  "key11": "127bsdKR1vZzGS4f7MXbRuvYXktPck8M2KKmnhv1GHFcWpBQEHV3bRduca4XzuugtpCD1BDounPeEvX1vC7mtJVV",
  "key12": "4xmwpEiH9A8RLay5FJ6C5uxb3UgKfVHwCzAg4c7Ta8ENfeukGcH97ztHNaz7UeLqN4nxGKafC4wh6EVTgC1HiwkC",
  "key13": "4yBE35bckMr8SfgQLhcEiNSVR83eCHnAgiMJjFrVybtUMmnhbFARbXWaHA1qPdzmr6rjyWPQNk29xaWzdJcX3cRj",
  "key14": "5XQWb9Hguf11NDrXXBuBbNqpkKvhpSed9q2t5NErb7CxynXwD6SM9XAmNBkhxHANYoY9dWvZaAzEiBHaHCULDVv9",
  "key15": "rYv9JabQKLnU7pxZb15MkWy2TnUV4zbYhAA5kw4gQHRZS3SbbethHPRE16h3GqhqQw1vw57QPP8uXwJUD2wMAfy",
  "key16": "2dXPHuNxeNBq8tchiX2YgoPsxPTdkKXXn6tYLTet4tVU29fdKHFPRxrtntqm1vSYjAsEdDMTjuCzEjc3tbe7BwtN",
  "key17": "5WxdeLNLArkKjcijEeYG1QfhcPoF3S7enUv8Xe2b8siFiMh5YNs72p672Zctc5o4jjZqpGHFasbP4TByScuBhqs2",
  "key18": "2iajj7eyfmLgZabGEdZeHUwg8UJxSRg9yFXEchV4bv7Wjo7fHMPzR4ed9NYAuEZTuJtW581BWaDhF97cSGxjhDpZ",
  "key19": "94BG9RfSNWLBHRuWExFJR3nCFKiH8V9tF2L28YknXb6xiFLZrRKcgLnCnRdv1aW1BFDxCvitSGAh4qAiJwdFuDX",
  "key20": "zsmFLstnKY3WsnsD8o2Eq2x1VzKkdpsURXb1eY4SXjQLJcPPCsnU8XLT2ch9DdBULXm5grfFMNErE7zoobuFDGZ",
  "key21": "5KWep1Vzw9YEyrH4uBXnv1nbrMv6EF1zVJH2zp3Ldf35KktEgzV4RfS6QXxhvJACap7hghF3dtbUPFVQyfVCxDGW",
  "key22": "4yxaN1pydu9KbqnfqGUYPayFcdczypVEmN5by1Y48Cs3VwqFomGQNtg47ZxSgqzdjhAkBNvqY5pJR9pwpu5ixmy7",
  "key23": "55UYfGJmHk9a1fCFhLstxoTJ4gTrt2hijjaCtAtJz61qvAVwHsU5QZTHRZPnavxJSFoWTnN2NBPeRcMW2WruQ9pE",
  "key24": "Lf3opiXrnzZ2psvKgKFVMPysS3FhU3uaD6qSyGn3q5LBa77XkgZSg4wBHPQ4d8UqL3F79CtGogrX6U27qJYddr1",
  "key25": "2S6k1RuJ9ceL4cJspouguvrynjUtcgMv1J1BSYGBvgmGqtgvwE56xwQNmEMiNYG4Aen52J6MM6mS3hpu7dvXM3HS",
  "key26": "2mZ3VuYGbLkPDLu8AoDBrSMkDhdepy1nSwiJjcqBtDzYqtJ437aFw87YYbCvZwGsrRXLno4756bEJh3VA47j3zC8",
  "key27": "47vqhiW7uWNEc3jQndJ7qftXp24ThiuGesSoicVmzxnfgEGi5KHfNBhknduka2ZBfVfyYKcR3CMoEYtyLDNiBZSt",
  "key28": "37dWo2jCvrQcn9HmcB8vMg4PcsEZH4w7LmSv81MbxuEXfgmxM9HsDtjAtpUv3qTQBzMGDRt3KAJbmfL9M62uWjqA",
  "key29": "33mcrSbtiZ7nJmDNkPuNkrm5bGuEVfWeg8bMdZnByq51mMnQnzvfas1QanccwdTnHVzbKLxiPdJhoEgAgakvfeup",
  "key30": "37vVZRWyVGCxYeY5cT75U3pXEDNHv1VwTrdva6zmyRpZakWFsdYru11pNMRpggsYbm5g7vSRyffRRtmqAWKUqeeq",
  "key31": "42ZPYws5uRVgAfbyjWKY3XqxRAHiX1ikWSxMjLd988ZiDrY35qNFHpxetSSCKdRvKnMJY9Spi2fkdYgzdSRRdC9x",
  "key32": "2yLAPpjECgLohKf4Hidm8cC1mva4EzaX86i2h9ZavnTdmhKv1ZSYnmFE7d4GbMBUnSvdfJ9qrGAJjJoinJBRd3xt",
  "key33": "5NXQcKRKcYsREDWF5xByYsUP914RcKdnjmBgbeGEP2cJpACpTmgU8sdGfe7c7rSkDSEzjkjxun8mJfwGB6cZKAwP",
  "key34": "pYjoCtUgDxjdVWY8wSF6nwmTiucqZNc45nwJnGyJayALUw2tSL6om6Sp231fzaLZ4FQKeRUFHfgK6u1EWyKFWdZ",
  "key35": "2UHoqyaUtBub4diK4X9rD786y9urHnNSNu5748GzdXCkdL8hu6prMvDQzw9nFG1hn6g1rqqFgr6Pr53oSz4BdD4L"
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
