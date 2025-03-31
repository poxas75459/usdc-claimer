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
    "cHTBgu6a2oeDpowT98KSR8VhuJMhieEo4GRpiEQfsgnCz5E1P4s7zWDaqKjGyeYYTxM5osqJwMo7S9btmVv8HeR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mGt9eRGDvQekugQVzipV4WCPjTcEYVQ94kh5WwULvwsAGkKBUDJ1KCSCvVwnxuobw2pNMaNwqnRWpwyNeU6DY1f",
  "key1": "4yqUDXzAiWGHYdDYY3Ch1RbUFqoyBX8RLDmopVWy8iafCFbqxJQZpFCSGYSWPbWGMxmrKJYKYrpKeh9sYRURQbYP",
  "key2": "5kdx6hz6hWcHDLDyG8tigpUxCbY2gPPvU5fYJYWCqi9CgL1Nq42PsQeu7F5BtkMd3TYmTtUHWnC64XvFRtpUaRYb",
  "key3": "42QBcYSWofnrSxLEN33rcRZiqMme14p9PrEttj4rCve1ASmcdTXiW5zv2mewBgCHEPRSbP86ANeAVkd5dp5AXzbX",
  "key4": "5VqHUesUarD23YjcUuMd7Du98A14ij1M5e4i3G7DE4DsimYbwmvHyVyubnrzGbApvUsuRDECi5xd98n7u2HDB5xL",
  "key5": "3qLy8VDXsTDTJfY5isx9uQqhYcKe5tcgQBMj7mfgeUcpo9Q1fszcyDNVNVvZjCKVj3wRupY7o3KMb2BT8uzxsj8N",
  "key6": "zux1QoxEcFSAbvY4zF1ugWuin6duH3CDcXmyQZWLtnXBnvaRRVX74XcaDHJ1N1Xa7d4hc4PdaL4CWKJJEtoecqp",
  "key7": "Rrnd7yJfDj7cxXcVVpY3SKjzZhsMvpawFJ7S9EUdbX7KkMD5Gmz9nDywoAnpM44GmmN8shcctCNga3rgQM8XYq7",
  "key8": "45gDr6CtmEraVaTNqYJg27ix7wJgoVPE8c3snGnyeye8GYDP1851JCvWhRdrQwpsFo5h4YRckMV7GkFzweyRpiWt",
  "key9": "2fJLeyfeWaA5FmCcpWHdR7JAxtBe3NzvE7jfU5iPknGPx6VtQoPc7AFNVWpUuXjY74v6PSxuyYFhiy2KCoU294VX",
  "key10": "4VRsRotRbLpYvjXwbCBBvREpa4HKLf1RJUBDwFWAFAhWutztnMozc3kp1baLNXf343HAjavwpBCbYn8VBJ916mF6",
  "key11": "5x84m73EbDRZ7LuNwNMcXZZ4TLbzi3wCuZXzeEkwUNZf48n4jzu1uzQij2boKxjgVCuTCHbooLHzrpgpDbj1ekfH",
  "key12": "3qi5EMTj9zGrynm6ThA4MzFrPZTNRDzwwZycVwKEagdrNHb7hhMMKkgztL58AtpjKZqP5dnuTwYdku5aummPhQw7",
  "key13": "jzqffAGudriyNSUxpG1gDDbHafV5ewgrrjsKrZSuMVYgy4Rz6mfCi2f2vCAvzUmEuBCxysY8BDVTak95npKrukS",
  "key14": "2vVyeQcBuywHr4LzUoowNZMZ3YGkgPeibo66rePjmwtWRNamXsRg8vtLhXvHWYFrT7vdj4TD9H6hviBaN6vAMGFs",
  "key15": "4cAJMBEASmSzfxQox9uQCYdz4NGLEU7D8VmKqfinzAYuyRJ7uRigwAMFQWByC3LMoiET48SA9dS1BdE4byEWa15r",
  "key16": "2roc7fQWZMek4aJpKxpEmZsQMYL3VvywxrCYpm4RDrgJNUk79tK6Z8rJXLUyG18CCMXUqST7au4zHYuZBoeqZSvx",
  "key17": "3vZW6HBWjWGB2RuaheM6HNngr9sBVNiPorsp99z1Cgam7XLN3sxjKeALPS7Gnzoqgej9DvnK594jt1r5dGHq1h7S",
  "key18": "5MaKNQwuz9tTQg4TzNyfPwmHuFnvYcVVZnYQNCHa812vtm7EL4HqDskCCfgHxHvYbdFfnugfXeggoV3esNNWQi8C",
  "key19": "5ikcm5YETwsXXaqyvFeW2AsBC1tVCyfy9X7Z4j3W6FMoQYzbXo4vir6jAaqFQawrgNdmG9Tsjx2NmrjkV84aBd6N",
  "key20": "iWCiv6cDoXqjDExQHqwW1H2sdcdtYZMKxKez9S8ad2hvmjJWBtfVBybT97fkv8kXiZgxnfJrKzdS915xGXfo2o1",
  "key21": "1Shpa7SKBntb6opibKcKCTyLb9GtRm8pBBtbdDwdHcvMrzF3DMiUsgTxpc4y7QLo1G5WcKm4zCxCJfQiKbPU5zQ",
  "key22": "37RzFYK4qne9T59j6zdPKBa2RpDpUK6PeoNA5FwvYFJFUqhmAi7GZNkir4d4h1Z1XpCLLhnehqXXuC3Y8wyg9nz8",
  "key23": "2hA7c2Qyc441GPa1fnMrEVrYmfp95gQ7Ld3QrFPT2LhrRhZLuyaLb6aTJWZKy6sTuDpX2boa4vwxhBsNjqMPQ2Uu",
  "key24": "2v1LVMWDvRRG49FJDtR6G4ZQTdNpamG6avBRQYCRyWmas8f3477McWhhcJV6b6mqNrRdpVcVcBaLsDZNRTSDDWkt",
  "key25": "5dR8VvSgX4Wd3G4fJmmi1sX4EeJoHwhcHAoiNLqXMwNPfsW7TZf2D41nXRAJ47npgKVTpaWds1pMji9XimvRivUh",
  "key26": "5EMsFHEPLPJ2WUJYsBcDbuLWnzgafhVemBH2p977A2ky8X2cEUmmHBYSN9mtAqPiRYsbRXuTyyWyuRbh87KPKiLh",
  "key27": "4CQ1kT9yJzqAioY6bAoN2UbE14AhdA4MBTvHXzujVcnWt8f9hYdVXy2RYvjf1k9Ve8saEmtnEb5RDjFVsifS5maZ",
  "key28": "2b8Tor8bbFs53tmjW7ePU11mTxxEy6MQ4cr7ds1MMtoWdvENJyXDu9XcxkK5iqNTB3w2EZ2zLEVjdWz6HMVYYamF"
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
