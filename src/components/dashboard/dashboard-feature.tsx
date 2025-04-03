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
    "2oLhPCDtdtjRCEP4gq3Ee8xLLDVkkW4faivVJAysPBd7gfufvpAqoJ7cEoD8R8LYuJ5CP3jNoAKNCWx6uuYjEEEm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2G5PDxKhyHk8ZtBYUkrktNdH6s6XLypeijTCUNetpmEKcCaavtVWxBQK1Uk86SL92zfrDSRQHFEadTSX1nPgEQ2y",
  "key1": "3mHxwfhqnW2GxoGUQ6A6ft4nEr1s3p5jgyuQPjcGySjzXM6dFnU7DJzfgv2fV5X4dAWBnhqWSFcFkuzqv1GqZWTt",
  "key2": "5AQf1vX95VEuptcYvjscLvTYhPPw9wzcmuoV1RxN6DmyjpSUjzuwK1H2t4ZjqFYDYNBet8GbyGSMGhe4opbQsA37",
  "key3": "4zemRWkzssYjhkwnVqBdgtQAJPSBV1mnAvNSKSVxMfSGzNCjvV5fdhzvGqQQB4xMB7WMFTm5u8hmtuviVPAeERBB",
  "key4": "4M4q9yULLDUUWbM8uVktPtWzHEwwSzE4SUGmvM9NKpiHnjrPtMtQXxGE9aGdYSCzjmi3pPDpeJTbHRZAE7qiEhbj",
  "key5": "5WiTVnDHebPqX1SQbMeChmwXpMuEoWk6KRiC78SCPdL8B5FwqNenncY55F26DmfEm6m6rzzEkmss45NBCRYd2Wqv",
  "key6": "4DygDjuzMPSFodLMv2vbw2b92bfvb6gRWtz21yBkEUno7YTvm75xGikqRNZXgE5Vfg2H1r2rm74MGyRDABtvj19s",
  "key7": "4CGqMTGxHkS8quBANtPCaA3BhQkoBa472JdbXsAbnBBx44Yeq5CiRaPitDUfCpDfPsJ2LJf2EDPLTHDstERCE2VT",
  "key8": "4rERxCYb6tRBZLV4LVAqJL2jNEoDS3ueRfEymBPX6NZb1UsDphmQ7bTNeq1PkWZAZfibpQK4mCkvVbMKhZU4rrau",
  "key9": "4AtmiU6pQYWNf3T4hQqUzumW1A6MzBqFcfgCkYwWXR5p9S4XxMFvGECuPb5ySZYeozrQREYBGDqMqFwprNLthHUA",
  "key10": "3PChMy3KZffZ1gJGTyrnuobw4VPnd7nw1CDVQo5YBxj91dfd2XfPWonSEAc34E2YYodUKW6Ya2G4jhPTTyRt11n4",
  "key11": "3kBHyTsH6RP7BNYe1JAwyLGRGwRHhVrR22VaWdL5xY8nP73WaZ1joxxwtEZuSQH2c3SKCe4e42M1YVCVsVwAmfHw",
  "key12": "67GSBktVPBM3ixXDuLnLD5DPUPstbVQB6WrZyepNQJ98NXUNQzQmbFXMKQRDJ2FamSGsLjvYx3Apj6kPmcQcLdv3",
  "key13": "51igMoSU4g2s1dnQapbPdfzYLRWhAdmM53xbKqaBkHoK54QvGUi8LMvw5v4g18Cud9Zo5QrCYGjbyBZTvgURFfG2",
  "key14": "49XkG8su9fHsooUGYSBgM1VuemyXUNY4DajiJ3VzhLSyaUsBybkFFeYxQSZ3RDtDR7rVSAUR7ZxesrtpBvDGWyM7",
  "key15": "3yVymv8Q1FgnCYzxaKDmGLPxVjvQvLfUesWpHH6HVv7Won1D6sJCY2wrxwPFCDSWF4DnALzL2P4D1r3Uq32DUJ3J",
  "key16": "2iQo9esnHukj3xvoeD6fkNSwxcBg8o8VkTVRDo6fAm319SdUzX18ebHA7Ldn4hwYx7tH8hNMkBJvuC3gokd9AW57",
  "key17": "EEdaxDpoMmU8V9FFNQVEXvSi3NPTYNm6whqa81yuCxU3FWcY3bxwWHwkfSMfsz9KvA87dNEtrubbavsveMbwZ5J",
  "key18": "2L2AT2E3psmYJV263ELCSAsinUFc1abbaKva9VcX3f1uany5ysfJZ96kVZrw2FmsC6Y9iqJAhBKye9NnLHqaLMpF",
  "key19": "2qxkpZQAL1EEnJJAMy72V8WkxKCZhp51WP5WTuL15L7UHSP8XQHFtwx1rZH4rJQewPWnvJhBqXKgPzugzQHpirZB",
  "key20": "5AnXfVV1kimyWTVsn5GtZjwKx5Td5NUNEA3i5Uq5g7NkWRoYFt2udmVqN48RxZXTYrkqPqercEJ8CMg8ipdeyrkp",
  "key21": "2EvgiszWN9ZogWMMpUS98N25REipNN4QR8p1ny3KPtudfHBc8s7gKH96uBYjeucw6zMAAuLk9ZAuZ4qagAMbX5aE",
  "key22": "4FcCZfxtEsNQKzDPtuYj2umGbcukY2RHDdRBa1y21tp3gbuancCh33h2z9cUZijk6ZF2P7TdqbkvHsMT82hjYhMn",
  "key23": "5FQ9J8r87otFqKDnhwefhnMzxeEahr69uA7pVmJTjnm8CWVewDs9tJ5fssy7pNgBeGsZz3zPWgEAD1zLKa5GyhBk",
  "key24": "4g9z9X7Dhip4jyMySpTDaZjg3cQzpRKCjkuC3KUn89eVAYrPhX3u2pxQJQ2MxaXPdF6Y5bA5yWXQcRkc2xSLHD9E",
  "key25": "2D6ytQuksgRcbusWQdpsxq4GnNvR6mokhbBtNihPpgmae6Z5upHFpNsb4M6Nu8et7DK3GvXuxcTLzP88awNV5y2P",
  "key26": "2Gcsv8yYoSTAN5d4SFp7RkmCrHa2t89jR3KJbXi8Bq7x8d9Xe3fTWropbd8DvDmVS2ZpLfDzWtP9VfZ7y8rFKWyA",
  "key27": "3ZBGHhgcjRooAbXTSMLxd11FETxXcX29dh8aaJjgvrnipFXL4AsF3D72HXbedhyBX3LSdCfACyeGX176YChqpuj4",
  "key28": "2V1AzJCRRcJ6tNEydoKmzWiygqWFez25FaVD5xB4SPU43erUNY96PBDhSMnACXKcpK1DhxMXxsxdZCfnafRd59i9",
  "key29": "65cZtREXh4bERDjXnVWaAK3YtQzzKPmBcg4TV7QdzjaMydaGGFytWTinkYmDAgQJKMk8WzkLc4VN321Hr1ECfQr2",
  "key30": "3JsikTQgmys9zaUPzmnuexiwEv5aiCX5NUNU2WTufHuoWHkhgLszEW1jLe7mKfsA4XmKHVTfHmRwae3MyezHZopi",
  "key31": "2jrPaYVQv4Q9EW7gW1H8ANRGqDAVcmfJ2aReB6y3GJGyDRYXhdBBJmaKFYCCpNhKed8W2w4agebof3xjJwhWT5Uv",
  "key32": "4PYpKx3gZNazEYD3xVtyEUfSxR8GiDq9Q3tu8Ht7tJ7uKqpV73wNCLR7G4T3TorFiTNBUdwDcCrdX4NXsy7bzdfr",
  "key33": "4mJps5x5Eb6QPEwo11tuhVBigD711wpCyTzeaEq3UDGoXRiMqKvxgt88PFsHWfxENKkKV95Jf6Q3UFxg61PvVAa3",
  "key34": "28XS4eKRGzY2PQVrK3XQVafwStxdSryV28DqayuYsfxKh4pLMe45cZga2arsBG4R1rKQqDm17NZoPAi38sXdS4wZ",
  "key35": "5hPvDzu6rCyrRk1LWoTrzNuDSYeUXhASDw33ukgPHQjPmxMekz7S5wgUMejXe5cMSQ9dvsPqNg9JjAL1ozVfwnSb",
  "key36": "3W7kq2J7uLujVCZ2fgBPrn1qob2aEvFQwX4oSFJdDP7zDtkjejhDhFu2c8ootGhmHa5UrGn9jKh7PtL8qhKxnuSV",
  "key37": "2Kii5MFzPUqdYwEQX8REfUj3Me8XrVTqRDs3cLE74yMGPGCqwNsyeCSvs73NJTwe2K78ZW1w8bdG8nAYzX4v2S77",
  "key38": "JBKYgqFuJq1kk7XkdoHBqap81BDfGQXEQiY2WgYq5L1MSNipqgZfK95tLYhFt6piwgm9iE7kby3Hz4G9f8m452d",
  "key39": "4kHpdTTdrkoiKGriesugumxtVGYresiYCNZbLfHPRm76kMEatQCzuQXvk3DpQHwkXfLCPxNRCaoEAVvY4Fb1UCCA",
  "key40": "25TnLCYSMMq78F4YoVcQTpps95YdSK6CsHD7b1vhEFUPhd5PYcCv1DVBujVb5UaqMNeJS7DEcqDBLHTzYrGLjkuH",
  "key41": "2E4z1ZSaczdS3ePxW3zUAoDXbuunA3Mg7JzoxFKLsK4TYjvNbTDZge4sn7uckuBsN4scWKNEL7SKjhNUVN9tmQpE",
  "key42": "4q3KMV8jofmbvhwtL9dC4Qjy4wBjLyBdfvHq6SeGuLjZ3hkE6zWor7hyD8kEJfLF5BhnfxCwLmXs1WNu2NSDW54i",
  "key43": "WuF3bV252jjb8rEs4AmacahEfK8dAoVq9bXRigS1TEN4Dpi6h74ugiGcsD6JZeF8M63Rh3ghLfYJR19sQH6n5x9",
  "key44": "3GtmrknEU22YJ5xYizbKyMuFhSPKB7gU161qkZA9ZHNBVzdHb8kqTsGEXgz5UhjfAD2rKq75KrEZxoCiMS5PiVri",
  "key45": "4Vv6ArtRBeARVyBHGPXoakV1LifhQX3FaduyuQ2te86aNvhnx5JYaZmgPiiXCQU2aNTRxwrw7uHQ84fBJnzVfGzW",
  "key46": "3DAB7ovmXM5rRsEusZjhrobc11T8njfzcHLLqNbAcNbLs5Lt4SbcsLPpwPo12hQfTTCVZ11hTp52P3SiLKLL47v9",
  "key47": "UdbvFMGoKnZHFbKXBF9HQynh8dZ1fre3JJtGyLhUdJcumFzX1mibWVbEzaoesoKwqgGbe1F9NuH32AU6ynsvdC4"
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
