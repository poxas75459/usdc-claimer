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
    "59ib3GS82NnDx8jdstWJ6q6nqLZN77JR5VAGJBus9KDn4LzwMEvbLxbGFEJyz1RGDL2hQxVFjiPSSrhh8umaJWCD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Hn6AcuV9AyLhMFj4vc7uecTJqwz2Uw4A6nkxSfJ1JgaRetBCeNCPiAWFHAeCwVQzR4Yarh5cw7paqefq7tWWArC",
  "key1": "2fekVQamJ4fpddKjx69GeX2f6kJg3me561TheAUdfb4nmUsx4xWiaSrxQ6ZsanDifRRUkuwKJqZ29uh2VoTUPzVR",
  "key2": "5Uk6ZW94DMxvoXtgxXbNFuV49kHu6k9aQzfGQR2HhmrKuLxUpLgW2YkW6roZdHFvjf38ovwGeFv6stCjAXHcShbH",
  "key3": "5yrexDNSz1vXfCiqpUrhKGPV7rJ73iTTnLDE2QNEaFPX7jrihy9wDewA8HsDWcHkQRRrH62FsD4zMAvrWUeabwwW",
  "key4": "2tNZUqSjQAAJJm5K5jBgXW1HgDSXCcVySimYnQM5nVzy2vvuVjKQu7CLbt89jagmwph14BzApZaxBnxDXCRg91mE",
  "key5": "2ErdJAQSwmgRACqtUZkZqH8ouReC9AtMpwzufLyib8C6iCxoiRfir4tW3EqT3LPzqozDc3a8QsoLBYVyp3ztVWqQ",
  "key6": "gWVeYgTtH7tv2Qy92LtzwZ42hFHX1nyGUSAaqpKtFDrV2rZp4UpFAEUBmiwVWWKZQ1Xvr5HjDuA5FWKW24B8Th2",
  "key7": "575XPgoxwD2Q7RuzNkmXGmU59uZjv5iaAWsEF8ESPmN1GNqDwJGLj45fe4f6yHUFGz4uBfwaWGPDCNyzeEpQo9wo",
  "key8": "51nmYHh4EdrNFMznmo1oQGp7dLDSo7HXs81SibY6NLAC67sNjgsLxBqhuBJhwmTu7scXrbmLeqURFJizAkESUJnk",
  "key9": "HRTffu7GWKjVGPpGxdaoJGo7ERYZCK1BSyDq5gUJ5aKdjPiU9jdn2HHnixGxTFW1RRAQiSCo8QUjW3WZDAL2FwE",
  "key10": "4FF513PTdAS9nLQFsxvS6R3c414eYRq1wEDCTapbH4KryHbZoUYp28NRrB3JTUSwNYQ3PPX1bA5eiaTnm5yrXmnc",
  "key11": "4eG3tFdHxSVRFVsFmzR9GEigxrZicPgffVZEdDRGGbQTQDhL4dGPLpJWayvw7FgiuRMZ1DasS3BatCUsrcUpx7Tc",
  "key12": "3UDdgfCFSB932wPgSyet44p84UHfCyHKhPT7paKkt5c1JfC44tXsBYb2pTRBYtNR5kJcZE4ECwQpPHXJ2Hfer3oA",
  "key13": "2PKpNaQxqixLv745KF4RiqSJQNwwV5SsJERJzMj9bkbuFko2xmJCWkJRoY6A6Hhf79FQbRhuP9pKFNm46iJQFTAM",
  "key14": "5aKLPjqQSnSUitSwm2MpbH1gf84jAX6KTpUE5QWKLsZH3BFkd7Xr5fWKNeDsSDEJ8Uu6kin4L3fPMVWAwzBVmScH",
  "key15": "nERmKQFFefiBLTHeVVYJP6GKcy8nAE8jeKsehybeSU1ojVF8diyXnpY9vzCDnRoPUjGpUghGmV48sSzEPWJYk5M",
  "key16": "4Fv8VXLoxM6zLYqVKvKUtXbQfqrj9kM8h7VsV57cTcKnPQvLLmhjus8MMMwiHj7qpgm6K1jxLnDqMh82JBN3rHW1",
  "key17": "3eeguWQK2iKShCQQTiPsydSC1B4c4LXoom7yqPJGkwxSyEyZDD5TDzWAWYX8cxf3q9pHfD2DNamJuznsoip7EL9h",
  "key18": "25BMnCP4dtD3SzHEvWm1pgkCYpcuDTYz77VG5TE5YFQFDVXXVEPQDMvYWd1yJsXfU7C3VyaHxR1zmZVYaixE5XD2",
  "key19": "5JCVZ6CtNidKGVa6nVJYsjZRSwAio8DagSxzbLVKyhd1raXoSnUpKpYL29FQnA3mqEuq5si4ZB7kfnVeaBYg1myv",
  "key20": "DKLxEWpe3jqyvhg7VTE8e5u8zzSwtShhqcEkwPK15zqyMQQCFeUrpideFqek9gKwmbADez4VjAYAC3j6zmFS4wc",
  "key21": "2FGjUFw7vvYpeD4965Eoiipaz5gyg1RQEhoD8MLhm9E6duBx6vadV9ar9tD9FRQbDPWtvw5b4EfQn3FixQYpBp6c",
  "key22": "5c9Y3sAgAqrffNP9Xsehtn8NYcMvhPkjDyhPu9wkpXdfuKTUSj1vGYdRUyCqbBuj4gMGNDNPNDPM9FVwrikGMgVi",
  "key23": "4T9WTTWK7GBj3XnzNdhPtPusWvTmeDuG4Y4C7CdE5WUGZKtgx37psm3UJ5WxGQFrqFT8vTPYXFC82QKKbzwPWVs1",
  "key24": "3CSr7TVGdBquQ35QZhUG6ErPTQSCCoeZwzMjcqRPkW2BaHgAiG84wLzwjtfdUL5Ub4LUjkyxQDC2qyZPTmweR8eo",
  "key25": "2SGznfCPXSeR3nmzSd3wxZ1QpV7QUfhuNNXW2yL4fqp6AQ6drRTcwdycLuXSx8GD7S7FXRbTkaSv1MFqeGjXJw44",
  "key26": "2K6EoLusXACGKCVCkqf9uHFNV87YrU6HtSJTToBqYKXRGmwsY7ax1LY63jty7ByniBqcMjunqq1923FkvnWCb5Hg",
  "key27": "5YoYz7oNZP68VoWkFqMfxP74bEPTkybBZqQxf1TVb3YN5RRvGSvK3MBxko2wxUCCMbVqd1jDNWvDxa5V2nDchjuC",
  "key28": "2PFYdToPJimuCbJYhWpZpWTEZCNTnWhkMz9D1A1ijCw4JVLuGxAZL6DuxDL5gEDQq9rFHXnrFpxe6rTtXZGCHxcT",
  "key29": "3PPFjA6yE4biAHaoF1phnHRQReY6qh3AVPVh4NW28LpAVxD9dZPAF6jpiH1E8UyofhcEvXBeVsJzDRSASiDxBpJf",
  "key30": "3Jhf8rxZbT5Y7Wywqe45NNBxLaCENr9RCybup33wiKc5KTZbELQXwKJkT5YruWUZFMThpTLcqMXDnjedDds7CAwu"
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
