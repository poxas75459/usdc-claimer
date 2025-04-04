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
    "TY1Coy33jGDvXM3W9iDH3csq9WyAQdPhisAuoT8Tmm4A7fKot6Mw9ShqBroKYb7tdHCSpcJJf8TFc6ZFySGVDT9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BFrGjRNwhaxUN6SAWvL9i1snFErYZdEXfkTi6mywn9eALhoWXfga6eDjrJkV8XX8kBvc2WkpxRNPjET3HDsidZ6",
  "key1": "GwDQkXqKUV2QiAeCbDPPdVULg4mNAowVu9fpfe8kTJFcHHDoZBkeJs5KceH5328MuCBrLai1dvoZMJBTiyVduRB",
  "key2": "5oJj3P8ynLy5imKiKqkEZ9CgoQhF8XPkDyebuUzdaU6ngArcSXyF4fz7VMS7oetpkjU1AHgUqHMibPNPrYY8gSXB",
  "key3": "5WrJ1U6rPoMpn9W6SLBPf6AUPqr7Sh2DGpap8QyRVGpSbcrdTogCfC3QgXi7ww6RmuM9xBK7YnUo3FKX86zpCXCq",
  "key4": "22dsJvfBSQcqfcUQGyhwUYC945EgfqctJ4Medt2aw6tEXpJmP194Vu481FD6TzkS2DTX3GkeH3cepiErehA9yj1z",
  "key5": "3cEMuM7ySBjSMQaMupsRsuNgkPSDCXuWwMvmji3kxCh4RBKZz35RW94bbnsy3bPDpW6ob8imMZx41MMhCPqfQfmW",
  "key6": "LJxxKzvBDVGDg6M5MnF5oZ8LRW58vKNfgr1HQZeT9AGqyTiVPcfjAeJS7ksCsDt3vwkktJERuw7uMdrNGp2h5iz",
  "key7": "3m7tj9VvUnmGubZgUBP7cFswcNbosCqdqZ94jVu9fW6rewLn8usorpqS2D8Q3qMyL9p4qCb2Sp6yTCgnSwQ7NZyj",
  "key8": "3u8SMhtgTimPgr3Pys5aGUBe7C8vHkAnTSg3u3Dtw5znd2c677cPF5bziTTvD1ZYWeq21uQPTSeHL2iaEb6fhQGR",
  "key9": "5ZodANKmdGJswXZvfMeC14F7A6vBg6ku8yepxXKpK5Mrye3ZQ6W5KMaBVQ7PuwyMh3EnUD29tiheeBeBbZsm8Tgw",
  "key10": "46QPV5FwZd4djss9AtFoDrGWNZeV56UCXzaEBZTb83KV7w8ramNakZ6nL6sm7tUSJtX78c8Z7EeVaswYdjCUsXvH",
  "key11": "4EL7AnAhoGFgQiidLipYz8kTdSCm4mhyymANPjoEUmQjCGhrpn9ZKEVmSg18uGZCbfuSAtcureYJLDnBDztk9Fqv",
  "key12": "22kdGMzBW4WiADWA93MLjCu9ACuPisKjB6eCHCEyqxSgX5NjJH5hUNtHCKQQCm9WVCxh5V7Uh9YcfYV3QLRJo3xR",
  "key13": "NLnEnUKdSEXraPKuSC4VcD5nwisTyjJwJXY28fomQhNUaMX7ydj4uw4fifasurxuzYwZUDrHSMdW7mdDBwhhnbk",
  "key14": "qc2g8E5SYbVNrAMMj7xsh2XQhwVnYsCPqJUxcFQFTHvkTEXksmpxuoAQfmymTJvDQMU7Y19JSAcu1gmb7R3BEF7",
  "key15": "TGxVLnJtp5TJ9uywjLZzYJKpnthgYevpeJokCAHKLeyKhpg7K9jmf47EpkC52iSvTYHfkMDavTpfkkeaggBFwp4",
  "key16": "N6YE7qYjYbFq9p9XpB6qvto6ZWo4WuVjDUBUu5m7hiynm86nqgTULNrnvnZQgUSdC3fK76SEhsNn7r1vXgFPXEP",
  "key17": "4p5qFi7Hwn72J3NZ4c43moJYR4C7dSjKdHMoL3GTGdCQYJzdgzP9GsNdzQGRqrF5tCTZ1S9ewGZpNMM6BvBV14qA",
  "key18": "3R3nAAH84LCzq6T6myC1Z9F9GYqsZd69j6S8hp5AX3GbPuwUBzi4QsgQSoQ1XN78NHXnTDFzyE6eADXJ9vFb3X8i",
  "key19": "VFAbdAypzY9GK7ySZLJ2KN6MDFyv7aHYjdR9sRCtkb8fg3kFu9iDc165PPfdAeswi5W7B5eSfLs6gp5xiBNftwE",
  "key20": "5fjTsCUDKQVVpkEBHdf2DaYWY11LgEwZ4EkGmHQ3P5JQXhh8ChCWu3DhRvAg14cjrcGXrSvMHQoiCF1FY9xkH6Lv",
  "key21": "4adEoLgKArPcdizsGS3q1afgnzNP26QYv3cwuQeKFEMWouC7mNk15LfaHYjzHR5Tf6p5UKyFW9CW9uhDUscTLatW",
  "key22": "5ADiqcDYT8xZj7midGrUFLtiQeLnTrXZ4YRD1acQb4CivXuJaEKorhJiwkJn6kNWdgp62ybX8rYybE7wcSdsyjGo",
  "key23": "62FrbGgYq93M1B1rRy8aAUVHYWgRFvnR4GFua1Y3dB6SVfa94rgz111pxarpBS5mB32g4jKVUdDN31PTxqgRawDt",
  "key24": "SnP75DBdp33yG8dJ8aqJkoxuHvz3Z7n8xE1xvqSmPp3BYyCGL3ggQjwxGKPQnvaY9wWMNfUG4WRoJP3aGjcCS7u",
  "key25": "BUKkCHa3GymExpo7aeU6KesmBeXpK4E9FR3j6CahrjFbSJA2SqJFaDqXahSt9qQ1Q7cCV5E8gffj7UGW8Mt9bnD",
  "key26": "3SEtjW1DXizJErZRqSBRwKad2urunyZJJUcVbRr9HyD3zDV3QCNzaRxh9cdc16B9NA7fg9VY22zMPj13pEhpDjHy",
  "key27": "49bEk8WiXrhCWywYiLm8CqhMJmxNH2v94MFag3RsC6vdJ4s6uoAm85sLsZ9WKbNFEQCxqAkGda852XkFe4dHN3dj",
  "key28": "25fr71Jh8B7YXqeYLHtxCqdYbdX6Ri98Ka14qQnpFTq34xCWTpD2UEXeR8uSM3q7ioJGUty22rDYKEWBfGuH3NUE",
  "key29": "3fWzVopWafUpk1aRu2kfxduuAuzqsv1eHNu4ERWeeAmBQDpcvnts8TsUoS1pN5rZZXaM6un83rAuR62Tj2aXsDWH",
  "key30": "9mi7iEhmScWNd1aPCb4qpHWgqDAGe7VF5KRjbXkyPSawnoX2igyDyaFSG2Qu5aYvdj1UCnWS3rUuFmvREzYtbiU",
  "key31": "ganfkxrtgqGzq3JotHxP5jsggZaU8mDBFpL2tkbgZRyxyEUGY7RGxDHdNWzS8boC436Bio52MbtJPqGP4HkRn3i",
  "key32": "3hQKs4m3K8w3YgKWKChZt8VHuMtKxhVLccsfdduipoRChQubxms1a35HrJdwcig2FxWNAiTTWmNpYZWwtGtuDj6Z"
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
