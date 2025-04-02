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
    "4fTLjERCdRupkyswCXbsVNvCkA254j6emoZQDVqs27EPtC8vtdNzgXSQMbsJYLMiyvVNFYfFu1WXDpdAqb715B2Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oQBjsetdjSWCEDqHrTrt1XcS6MBoD8ifU498r8YDSs8y8NJ7NRrhXmi1fPSCCSv86o8hJUVxDWmVZeXEAx3ydoH",
  "key1": "2VK47MfUZVEaa1NFTWRpun5qyWYEjndFYswFKftK7b3qdp8CEcH62LBhjbdkNV3UvaURNHoHtsaNwtLvidxJKe4m",
  "key2": "5RLFBcXLWshjZK1ALwvtp6bK3zFLappzS4bMLjGtcRuheovh1FwpU8rv96Gg7eKofXYksHDzYB3642xkuK6E9nmU",
  "key3": "5ohxHoWHtSFuTGww5V3HdcMZTMgXkNg62ietfDr2AoNy18XafXvoGFhaCqeWPxAQGyevCAGjn3MyoJBJY8eXHdMC",
  "key4": "2Spov5fRjNSBoR8oynjaDT6BfatjBEZEnkoWHLiDuxwudLcgGqou7rxTwbHnoCHQcLwGHTuWAKZhV4oLpWR1j2D4",
  "key5": "4MgJaYnYBdNr7AuqCBVNUaaYPUMdGyeTG7pzUJSBCPoz6RG4LEtCT1eupTpLRL9PkwQp135pBXjKEdhrNhNSYas3",
  "key6": "2ssEV1kBawhXKu44VasAGBotX3pssKrvPcvfDH7TbfBjoSPbZpst4rQuJ9D7N8UfmuTLVmRGkrjj5DadH3Lbrkzm",
  "key7": "5Gn8r8rh1LZcr2zdTEWxJSVXL39XdZXHCbfx9Q4tNNeGoiJTeWoRbHq2NHV3Af5QRmwDCKK6crTJfi8XUQS6QNoT",
  "key8": "3mJb9kVpVvUpEhKMTW6BomvAWMrzyrop3RFMM9jpgvmDDeFaW67dwqZuPJcYUWorD6d618fwnx1zzHy4Ye8XL67B",
  "key9": "5mvs135eRPRMUz5atisHCAkR6rAPSerjnsEPbgRCv2xx6AopsWSu4dS2W23CszzDB12uuaczeSJjMPT9yCnYvWyz",
  "key10": "zu3PkTCBtYiLQJ2Gk5hyWh3beN3iHCdn15TMfuwKz17iinisYUjjQPM56njsYwaqWPmJamBGGJUR2ahogvwStkN",
  "key11": "h9fJtdbt9FtsxcjBd2kdPmj9VGQphqNqmmtNuBuhej3Y6jzhJRvoz1d6sEjWDkHh8e2vztwih2MUeMBYo57NxUd",
  "key12": "52rNyNMmTxypC6hcBRWA2V9SRj7UCbk48ZAdwCHKhRfHS12q3JQkaHzDEdtD46WjtkDwV2CgVLxQ9dgdqegzEX4G",
  "key13": "2hbLbvBtseb4ziCX4T2JdQgtRPdgfw7BuJShbydg1fXzNKqwnT6PBKze6beur4S1jLUvj6iM5X15wormZ2TC2pd8",
  "key14": "2mt6wKGqSAR6738JtJBXP4yQBsegyXSppP7xCd5LtZ9idaVYfy4t3BCfks4kkXEK7M6j8LrerS1hqzr1aviw7Jqm",
  "key15": "3EV49jyHcsUDjsnU42R4fcojaaHARFN2ZbN1HxiqsxDegvhmkxmKR3n6i4iSSYbKftjPdrcPMg4ToYjndTH2zChK",
  "key16": "36wqXXVxuyigH6PbDoxvgQfrmYBxkU64sjdd4u6b3o6qR4ywsdtysoDeByPPK2d3N13QugGvsk97ckF1m7ZSQSKx",
  "key17": "2bstEP7iWjgDXAEh2atHQhBTWjpm5nri1EKy2zgbRB2x2idUn18VcRhTTi6p6E43feJWXe89RXdQQJSEvCQUsU6s",
  "key18": "4Afp7bAAsNZPcNRUWUXnkb8BzbYYBJAbAwinG5s6KMNNnvXLkPqaCpd6buiwTbhFHnzB7nN3hGGJTVAut9eNk7a",
  "key19": "4rugkECGQrhUBmm93fRMSft8SZTEEvroVhgkmAQfwmsYQzz9wqwtxaKWL2meVaA95pXTuTMG2WW4TqzmNjqx9UY9",
  "key20": "46RRJxhMznTm9YG36KJQ957kyZqLboLtkdY4iiF9WFEG79MYZRc7ePT7NxWgJGTVHPkYHpPz6FPjuhRwtQ6Hmz9K",
  "key21": "3342cYtteT3PrmbKMBimVXbV2k86zWHbLfHKoo4Q9aLZUWbhJkC1xMKzzjMciApkhMZ5Z3ctjmGoWgHcBWCEptFU",
  "key22": "2PtzCE9VGAkCP5xv9kJ3sahTUArSTeLQXRRk2aui197pkvvEma1nsFJRMfvqYpjGVshHtAfGYW7g8SsWTya3NRX7",
  "key23": "3Boz7JG2H2JtfuD2RZ5fkHUWuD7TK2bvYKWQLGTCitcPGWyzAKnk5P2uH2Pq7nsQtHRGEQ4X52WbPu84x3EcYJH6",
  "key24": "eiyc4tzrSWxN5YCwQPgfmTGEQhzB6s47kGLJakeGMhoSaMiiUmgj8dSSAM1UqRiYZoFzt4qUTvpRj9hSC1bJm15",
  "key25": "4oQWsTQqzemJF7rA3RtHv81xibo5hjdSxXXTa7SDfQJJ9uxsTDojzk8Heq8FX4Ae8nmRkTY6mZEVkmBAaKWkxt51",
  "key26": "5P7sQm6RDqYuDJdMiNdGKX1G2VkdqFVVwsi8bbXLiGVKPvndS84vFFq2SmY5vfw4EnZvsTddY6uWsZcKL3mDCPx7",
  "key27": "4oTkVyzCgb2k6tV8BHRdkKCbHHn1e2qx2ghJBN98Za5RyUDEqmstMUqj8zchv9GBXtXEZSyeZNs61d4NnenTzPLE",
  "key28": "5FQwBVEgtU52oSDYSpNtNtqL14k4RRsRAddu77uyXKAXVtz4s8WVDAiGx8XaU5sMwXdLQjku3R7xeght8B8NC45i",
  "key29": "5bS7PvNfFhNKTU5UU317rknfip6Ga5zqpMfegoZqB5JXgeLxA3W6y532EpUkcXSfJnD4PsHtPEJrEzZJ2VP2rcCE",
  "key30": "2czBqwkpnukrGAUgGfZEZJaDhSEiijgxrrfoBnmJECygaR135XiGr9xNohFaX6WhpdpDypGoTmwQ1NAVS52x7Ee9",
  "key31": "2F5K37J9j8bQdiH6773GK5mD5spEgXx7ehXatZN2ZunDfsHR21qVg5kA9MGgwB8CjnnnV4mZxxPy9i8aWQJH1TuN",
  "key32": "2bbxEaCJ8WJMdUG6eABu8jNTwQiLycw9zG9WUxyUd7o8Fh1MUpiqgePCcVJxhbb1wVA6Zm4wS3vVDwNsHB9HrjUL",
  "key33": "2vMBKiAwwpvahVnsLQjxfvtCb4dKWL4kXUYsXdpyzUZycfqCUXPvSejUgjaVscPermV411GJnYX2wC1dTuUBYyYe"
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
