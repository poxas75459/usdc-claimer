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
    "mur4KPdX5VZVrDPU8PhvvUU4PGg1jtQNqUzxdSs1TCt1x7XAeP7mYcDRXw8snJNtn8PrkNzmGDYM1SvPmNDb2US"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vZXKyHhuRNqwgQZbsRpsRQDYBsEWCjGoucPbpCHjoNPBo4WwHj8tVrkmTqdXdAT3DVZpvNbz7HxehEt9kMgEBUg",
  "key1": "1SJHuRhQYEHPSjJsq8xzjKnRipq2bsgJxNL4XRmhyi74Pnr6cjeUbFMoerbL9B8X9WiWeDvEmnV4w637KAXCvLX",
  "key2": "3nmUZGbL5J4HXjNxJ5Vi5buSS9Fbpo9vPW4628V5docat2VvLNxq9aa2MwQ84u1csmCbqwhh7MftdhkGoUtqp3Tu",
  "key3": "cxN1tPJ8fMfbFCZ9np9rBpDPuvwtTA9Jc5SFXqcuPuFhtTDYksmeBgRkHjBdGyXyTTrQfpE2ViAso2bDmnL2uUd",
  "key4": "4DKCxktJXT8LVcwUzDrWn2oYTMgJHhdvnnwzDga5hZt3oiGvefggr6wb1Gx4LUEz1WFaaBQk4aM5QoDL2xienf3Y",
  "key5": "2LDWqbRS6XucZS1CnB2N63fBUkkTiyJCbDGXr7gYViBgxyuGkmZ1AZmL5YRLBovX8rmQREV8fgLaZ6gJad8LMiyn",
  "key6": "4wqryE7Krbtin8uAh8AaqTqfwCodyX5bBu7R5JFGu7VxX3qzZ7sHDfXRzrK4JhUL7FsoFaMSjH9SEuvsuPobYfar",
  "key7": "22G4YczEXPYKfJ9ecsKz1r8pLcQagXnuuauQXKnZADemaNm4UJNfiUG3xA7MEBYBnbuqBxFiWKdBtyKcdiSAgDLu",
  "key8": "2bMYuibQSW6h4T6CyXRWzxNtoYqajJ1p88PfBCpjjGxhfCShyqbFPRcRuouc6Q8hc5YkH9rPdwGdaWfwooEGdjCM",
  "key9": "4D2Bv8tyCCcjMBGMj2KrfbBqCHdNeJkof2XEGyNge9NTVJe3Wy5caPWKBzmav5JgJkaZ4DK8i3iiNSDNP4LuW6mS",
  "key10": "ASASHKPhsNqmNb1NrEzG9urEcrop2tBVK2SyQEqBxzUMJXVrup1J9L2MkrDgUDGhouFQymvpeLXoe3pJ4mbnTmB",
  "key11": "2st96KPnKiJvsxpNJgsivknk8NtX1E7aHZv5B7sBeT8pWFmTJwmoog7GscZ577BMiPHyEFvdYexqkxDK2KGW8Cs6",
  "key12": "GRCL2V4GMVdLg7cD1nvzEcjDENeiffKsmCj5o9hNiNiYptUHrZyosDQ5fYZJtbXwcVBwaLoTgHXEVfDXDUs9DBy",
  "key13": "51483wPxjFFtqPnpyg5HFEAnB9Cej95CThWGAQdWtBVpJgnNUxkkaLYLo7rSnQ5Fb13ePqyH5uH46WVfUXHjwLYr",
  "key14": "61uKompu2RqXdeS4TxfuVzYcqqLfhQMmDPaad6EpsZfrafKywXAAYuois5iDh8Jzq3TNrojkzBhmNRQFd5jBZ7CN",
  "key15": "2CfgvCh8GX72ncDSYRd9ivC4fpCJ5i9LRXnWuxHS8eym4KBs1t6To1QgSzykeq2zzEd5uW5U5u4gwkv59fgTMPJv",
  "key16": "5xarwHLXUxDY1NhxNj7hVTcPmDWhqMz1DGspzna9rRKmTSdM7NxfQPxgQvxoHdmvqfXbytqooZ9rVoJj2C3STL1n",
  "key17": "41JwGKyKU1W23RpXjSPJK4HVMJWPZ2vy3LvvrJv78aSqxjsiikVx9d18kp8LvUFhBhMc6daz9rE1Rox37yvPwqAX",
  "key18": "3TthdqD4UVhxQVbvwc6cnRt987R8qAXu6fkGMXYr8WUbRAFWiqto6m8px4jYqH4KArdbxYHTe53wua4tiBDrUtRQ",
  "key19": "3AXHEkky4WacvQ6ughmSpxLH6zp43p4QntkR8thuUAtThRX8tBrUzxNxdWFji8osGA5VB5nvmWzZL8PBjD7KLiP6",
  "key20": "4euGHiRTTvxcAT7KtaZ5ADVKRrA3mzyMuYjoL3jxDWf3FtDkYMFo1eNK4c9kkyvqWSh5BvSrDE3cwT9Y5tuaag7",
  "key21": "49XuQpA5T8hDN3DM5sDwtFkrgvrUrEHkypzSwFuppLQBRhBGcL1MNtu7bSoetNKdjeUyRsL2AhKRkp4uoNqv4EVM",
  "key22": "46P8kt5xLp7qQKgXxKEpFiDemfy7fS7h4cU3ExFLCHVTkoCzjpvUc6Qe2MqdC2K82yojL1xsdGwj9DSiFWejBPHt",
  "key23": "2EUqEAGG6z2qVnX6TFan4pYF4k86VSJ8YXqjh9Z6w6v5W5MEUyqAb3oExaUw6Q1Cfiu8fxWqgTXTdGUXXE5AJPCm",
  "key24": "4WPRxycr5dThM73Ceajb2uL81ANuhmjGuGSyHL5aGqVcHsohahiyo1SQerTtG9Xt9GcDx1wGN7DEQZFYxUJ6N1Ac",
  "key25": "x57LFnaL6hefQ8kqwJDtvv4h4f2dPLL45ZNKqNqbmQkECcwhj7tJhQtd9UMCYgxEbrsetVPXkoS7iqNmCQ2bbFe",
  "key26": "42rgfoYCDAJ3j7qZRvkSPVZmzTg9KHmStR2YQKEETNKZw9wn43dvMccZNcPC5Pz49E3tCP8mnW2UifHkSvtpKEa8",
  "key27": "AezMKtJd99dzDFQAN7492zqtXXmow6sybJ71uvBcLo9Co4LYUymWyTE8txEiBjbGxBGzGw8UYQfDrWxwYtPNpUp",
  "key28": "4vwrhNn9ehahgYbR5K62kGcR52mttdXuncj9uAKBoc4u1DFJ9qhuB2S9XwiGbJuvv95Pkh9ow3eFhZH9wuD5ukF4",
  "key29": "3hyVquDQwhkiWkU51dVxtbYTKgFGiscjbXmdPPY2dvLegWtCQpgtrvujUTKbvGdfMtzLkV3vu4984oTwEhS8JzDy",
  "key30": "47b9twm6GYFqcQ6kN1vt84sxD8Z3BZF2cYq6ENEkiJg4XxhoXAtWxXBe1NGsdp8RzJM7R3BBypsKQQHAZqR7AwB3",
  "key31": "3Mp94PWC19q74WCaQnuTmjaF5npHpgWWzb6sxCbcMBErQmUUXazMYvHXrvpmuaVa4ajMBhUTV7hbaEjK2XQM3KDr",
  "key32": "4G3dn4r7UrhsRWSjNRduwEs1ArEKnNtgJcBufQ1Qfv5JqdfVA46mbzvQnLDnDFvcNZubKVQLimePvnhvJLXdrHWL",
  "key33": "2CqwB1D2zeNdteRQzTJ4PmizNLD9FR7sBEE9dVHkKrgjBrJHRjFXucAtdeWtwhsaKJyG21hiGsfMMscaNWigo3kc",
  "key34": "536BtPBgTXxTN6pAqaz35SrqVzjvPTAxemeQ4VdPibZ8H15orA3H9u3TGAdjmbpkf8ZXggCYvjTbsnz3PbdcW1fJ",
  "key35": "59PR2oGXNbT9kRheTM6HSS5wWPdsDG6gz8EDmxBAcMeUyngkHPw3uF9NXQFeN1JnHCd54aUEnyyRtRJJWnFct1J7",
  "key36": "3essjpEEq4KiSqoKqSNo7csHN52pD4ZHoXd2yn2NzrZz7VJTT82t3S5sQcAX74d9ZSXrUkCLHovATeSoYMct1bic",
  "key37": "2mDmhGKi8bbv64o6DNFF8AVk7pQBxEo9fJBhWLDDWyAvKs7kQamgXKtB62eesV2pvE495PqHQpSVEZNnsXUA67NS",
  "key38": "65qyY1qUmG6CgmLUGoSHR7paAsg5t43bMmvTVsj3ia59Z5RV2Sr6U2h8EgGvSysuL9c3AfhMFfE5mZATUb6YdVyf",
  "key39": "2uBDzLWp5d9qzx4RfNqFB8xY4GAbumnmrhK5BSyuvfDqn4T1qn3dNDTntam4TmgqNkx8MLU5VUi6qG71MNfVhh1C",
  "key40": "3QjV7xoQf2d6SomR9AQLS5srywNmNvMnGUhXTrB3BTDen2nnQ7vZ9jtQkFqXHJsUkfX7hxV8YW76Y9UxrDptMCcs",
  "key41": "21fXjQsyXWPhsFYwRpyEeFiLdv85YaFicf7WEkVEVsuF8256Gf1TCnYdX7hY8HD1obtfiavgEbB4P68iw7FCwGEq",
  "key42": "2gKYmMRXGbwb4pGuf83uo52H3NXHTh5e8g75yFiPhc4z6uXPQdMT9en9mXQNPUoWRQyhRmruaRoyeDt9xsb1WRYc",
  "key43": "3n5X3WQJbDYgRpFGA6ShekHK1VGwk3js5Cd48E6MmEK2N6xzuzaoWRvefNdQYADRQSujryeS83WNF4KTQZy7uWHK",
  "key44": "3LAnHzGwhPqYRGzWmUB2mr9jRTGCmbrzoeyU4fJqWuu4P5hsAqiaM7geE8Ek14pETvqGJfxm3XU1uYcUkWDd4zW3",
  "key45": "4ix5a2kjKoadLnP2VDSCWSwqAxxbLxAxQpgGr9nvNcHu3jpnMjyeNEjpE1Yr1ek2bS53f4jxFsGtVLp3bu25WG56"
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
