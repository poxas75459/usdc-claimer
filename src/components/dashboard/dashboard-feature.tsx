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
    "2GuDtbSrda7ptWYiMr9g42Wz4ctqju9KgmoPj3ACbSq9n219GxUmHE8pv7brFbhBXngfZmGxspjckLUCiuPE761B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2m33CdkCuUxwFNpox6kSKfJWJpr9nttC92H1RXcKANiKHL2tVhgZwT6FYb1NEaSGLmEb2cKa9svvJWpAgNGR618K",
  "key1": "3CMg8maTeEA96EVTazYv3p1FucuwpUgueRVY46mRmizjknnvYN46iEFpPRsxgBJHXsaPLhSuyEbNkbAnHsVwu8oc",
  "key2": "m7xm5Ad3xmYsVDzQhooVF2MVUerfdXYKcQ5mwsbteTZCisavfMydQ4P92ZjqhDdDXBQYcmHWzgJxeTkG3oAo5Mv",
  "key3": "4U4A5rrgNKKbrHyaFzgJSvDw7XfWfYjFjWNASYNACKCd8TQSQaeqfAMynaBKiKgBPoMhVcLMe41DcUJMe1z9FjUD",
  "key4": "4xVEA5W5wX4TUqo2XGTEL5kTyR8uRGWGD5Rh91sqZ4NbCY7Uesf4xtqRevLGyMicpcgNP9JdeUQ1SMHseWViZd4k",
  "key5": "65ccboYEg2WLShTkfLcfm3MbRRgncjbmV1PXWTN4kxX1W3JuzMZqubJTo1XDMfk84nP8JpwN9eyBQetc5o8yeAuy",
  "key6": "5wa4Ju6FiFmQYWFsRpHyKWkadJSbk7ba8ViPrLUxijeErgQDKd2WKLUxxUTsfsAMGeyS9atoFVc1TTTucaEXKnjh",
  "key7": "4Y4kHTWACmtjfRB3BZ63uDn1Fkdm4wMo59cKNLWMXMk3SRVgdaipaiTbsieyXUPry3ot2sBFKw33LPio3U8gJPxZ",
  "key8": "4tvDWAJX6zji57giaGD7t8hYckyJqAVEbjFoWUf38Y1X4eJQvbChsUbB35BdAuFTDP2eb9AFWxmR6ciJU2KT8FEe",
  "key9": "4CAjzBGTgu9HgyQss5BxSY1aky7VMKLHas2tEZLEMyrYrVPzmCn3Hwv5aiyM8NSXA96BD1qeunp879qdqrMjXdoK",
  "key10": "DPpk9NCLF56F2b2AoR66DCCarxPzt9Uu11sFUTKZkXqbFT6HCEkkqAmSvtEDquTUeKvFNBCN3SqMsqBoLvxDCRZ",
  "key11": "5PdHDJxXobBrjB5XvKnAEWM2HBjtx18r4VryNpTJho3cQXprJPc4sEgaXQBB9XSdbZpJ3C7BKrj4N2b2i2fbdSXM",
  "key12": "5jc1zznqbLgGtZm85XsUpiKVSUv8UzbMzDUjGDDRVAwDRnkkXz5KiqFGqWAJWdiXmm6NKfTkj7q513DYvigg4rzo",
  "key13": "26B7ypdGz1Dj7cJaxUj7STjuncmNUVKH99AMeZyKe2hp4tpHVuCL6GFv7WCW3j7NfEbHPtPP9ZR7wuJDBca21r2j",
  "key14": "rYtenXPqHTxCwQ24UrosFWA7kEE6UqbEfG3fMGv1FEEmMYfLaerEwhcYeWMwCM2tVgQCyCxtUiaZJ3jZXGS6Knc",
  "key15": "yms7PKyRwiPJtWYZpHX2tERyQxHHzJQGxhN8bp1Zzg9Y4cVnbkWP4wjEqRbuwWk1aoYRUhnGg8nu9X1YbQqKbSa",
  "key16": "3xzsuK7wANEzj9Kknmy8h1W1M8unNkqjDvD1pkccFWTpyr7uwEHhajZ7rgEkzwZqF2Qh79UFSS9mzDJoW4jMmtfb",
  "key17": "5pVuuyVsXno3kXpDa38s3VvMHJSBWtvmVkraG3oa7KvTUstDPUHWQnVuU2Z7rC5C2FK1X2RypJUG1RZmdqo5Hh3J",
  "key18": "4bm9aBHzD52BySEDmS3QMKB9AbuzWU7qE3nHw3daUBViPxzFjfhGGBGrKm1S1FSQyFsBGUUTVQ5bYNTtcDZTXCpg",
  "key19": "5kM2k9hvr8GX3qdaYkpwiL9Fff9XwcHNWcVqHitRo43BPYiW5iAzGryenY4eGCAJdcVrygZB5fypzifnzHNeELzW",
  "key20": "4Hs4qYCpCjyX9sCWhp3qybW84DM33zPVypqFRfuccwHLEsdGqej1rVaeGgSXkpHpPJjjasD1QwBN2KMonQLq7jPZ",
  "key21": "ZFZuQ6NHzc1RFwJRfBQ92ABpFWYf7Hza7syCY9Ec9AYS3sEhtPbKjZp8STTLMAM5WmHg7C8hjZ3BwQAnW8noFom",
  "key22": "woheBx9JSyireRujubXo7KFYbFBkd3bF5Abkpg4a8q6wf66tKYmhMcgsLUrgWqoEghKamF36Zyoctro2j48DcUD",
  "key23": "3LzCMGpbH157RaVeL7Sac7hu5WXqXPk43Boa6KbxTSbcnoEeysvtuGcxQFeYm8CXcuqFync8wYZVB5bcgiwVzfEy",
  "key24": "2tG4GewARCnWD5L7WhAiJv53CvHSxzQzYB5Kr2EA1AUjA2suuDrrLAAkM7URmVVSW69XD5kVraHRcA3guiYnkZae",
  "key25": "EHGDCKr288GK9wdcHA45MNf62Gz5wD6xjPNDgndd6QvYg6pTkUzLmdHJ59z65wrRhq64QNCTVdGZ6mrrgmZ9cT9",
  "key26": "5MFAnAEDMSWQKHT7PcRvh5YTQM8eaBXbMMUp514h5Fiu2FVCZNtWeZhB3JUr46roxm1rkVZAezVyJnmp53d171A6",
  "key27": "4t94uT9tK3giJj6yUYWPECtvF9idMCYY6MyJEG8yZ3tqQWPYk1CRjMWk6oiSNJhfMZHr5vjFWM3YmgvsGChDXiob",
  "key28": "5GAVzdPYfLANKm2L25SSWjivdJ7R9nydY4UZYKPasMHr61fZoiZon8z5FhkJUoaXNWwvoXovgeWGqR72t4SUeEFu",
  "key29": "32oUYxqaPRmW4o468TR7kdAqqqwqZq2jzSBQX8pPzqDFJEbVxRbBnoDRCr1KTYVfPTTiGpf3CBKWkiQicbHcdqbm",
  "key30": "3LpjWHgzcnDY4diddvSXipyiJererCnxe6KWm8YJGCf3FMWfjie4zhHfN2BMXM5SYVoukLMpCfzjpvEZbroAd8PM",
  "key31": "5uratS1igir45qEKfVs6vQ3mZDTiWKNZXPrYuHPktLMdXWct7sZ8QQYgYE7reXSGkRxzTUgpAngZmRkzR6oTLzse",
  "key32": "3haCnmqC3d7AZBrQpgdGVcyfh9Fe4RQVZ9rE9BgV3jtNSL2Xi8MeiPQKQvj1c7iUYHmFYdqqQeE1gE1JQSxF6kAX",
  "key33": "4eaoHi41Zr7uAKMo5MFQBkWb7Xo2nH4H9WdQD92R93PinJpExa6hM6vDqyei7F3d69zj8XsKNMjisPNSRUfjY6Qk",
  "key34": "2W5ckrsQAjvKLNGQ6MwNSyg41AsKXaE8ViwbGMmBWBj8aAJU7Zm988Lf8EcMno4PncfM4YVX9BeDD8Rmsy9kWSxG",
  "key35": "5j7auJBc4urXFBTZddXf5BkAN1oagfpLspbp4vN8e5kZneCN8u2U3AW2rpmhuhNWBMsigb5gQ35jJ6x2786y35US",
  "key36": "sdFWd2A9H15tjJWZn3FmFjLaHzkovNA2jmXfepPZjYDB8QwCeugnLsh2R1vNmXqay8WEU6NrwPyvSAoQTVhJrTt",
  "key37": "3tMAsiqPnVVMooebpK4yLcNw2Fap1xnDLPsVfgXYkB6zo7CxYJUYGE5LfXq29gLaRkM47MineJjovp6XwvAc6Lw6",
  "key38": "6Tn3b5w7PU7r9WcECSMVyi2bXMcjknkf1e94NUBWsPZYC689q2ikS3HBxoveSrd3C1CeFMqkgWKs8FBqWFqZfuH",
  "key39": "5YW1kkPBexFvzpJF6Doxmvg61XgUqUGC5hBHVinoje9MY9fwV6dq3utnW5yFprEcqAybaV4pjNcjqGZU5xufKPER",
  "key40": "2ZRx27pXNiEsCkwZALcXAKpQBoV4ePS6L8mrmiFAHrVFoNKqbV5RWvfEQemhBoRuuioTAo2cWtEygZrFZDNBaC7Y",
  "key41": "4sp6FhxRP1brGzgMVwd2Xe4K4UQdkGwDdRRGx1FVbRoV2sEwtzxLh31AbHtsuTQJ7wuYy5TxYvUqPAAGGfENLfhi",
  "key42": "3sEMFUYezwKsk6vavA6SC6JczRzmubeZPegw3mAVjGs68FCNdBTb8XxwjB1q36U42Ag8gGNrF51SxxUbukDosJ7s",
  "key43": "291VvL1MCAmDLFi634cixb5ZEghjwE7a7TVRtv7XbD72opsMAofetgYVBPFFbE73VA9mJMwtE5XckJah3wUxYHhE",
  "key44": "5qrJS7bEgU3GeXscdFhKrrP58Pm3CaCnBGE1QdC8F1wpUx2AC9L9B7KsDH5wT745ZNAQbV8kNHXsVACxQXEKN24S",
  "key45": "4EF5DS5iX6BmVpZxZeoyV2neASKLydVD2EwQtBXX2YhGhpD3j2xuNYgAzT1ZEDdsLDrbsbRpGu2v6g5JZLjQLNhJ",
  "key46": "4xB7XTTCUZZciWgrissrPMAfUAWu72SHmTZvpnxURLsvKG9XRweywQiAAiWW4EASuNVqDcsy4vYRAseiyv35zwWL",
  "key47": "3WAzev2CTKQP2S3y3SKnunsHe8SVHY8K8BmEyVjbY4Z7HP7xKeQGwQC5evDmYgoLDLaUnKMWPEXXZABUFD86i2jj",
  "key48": "2ZtXNJHjT3riqAdKEXKaUu7S9z7zVuE25i3Hg77XmJggTM4mwrnkcopMXHgUWR9L5XAKtKSUEMUVgnyXZkPYGe6t"
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
