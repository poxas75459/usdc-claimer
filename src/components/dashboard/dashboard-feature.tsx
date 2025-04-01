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
    "56Afyiszuw9rUMoBvJUFVP5REVt4DmYWU7Vr2LqAWv9UFxCc9utnX7jCxqYynsTYjzdwQga6vEPUUG5o3po8qT7G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dCpqgHF3Chucqydn9gRcivLZg2qQbrV39FfmJaNkFfcBseytEhB4EEykXvpZmmrKFiGNWm7qLRDRvEbACSvXKZM",
  "key1": "2kqJuG48urLBGjzzrGexGowUbUuef8MWJWr2wzPfdVuPxxVJ58hDpmS6uexnhvj4mnzSJyrDqjNSpcJUXa1hyLsE",
  "key2": "61jryDRF3ZzPmYnqE7NnS7NM5prXmAr9PjHrhKMQNbh9dfnaVduX6zcc2YbHTjMHqnMbvUcyXFz5vjML9SfdTniq",
  "key3": "64MLMMcZF7ofdjcPhcqPhJrhwJeh8Du8eLvCu1SHJfxSJUf2UpnhxiDmH3DxCr36R1XxWg4Ekb9anmttiRfivjb8",
  "key4": "4jY83UJab5rYbTbNaxeTTYM862GSBv7gBbLfNuSp5Fd82bmEte7YaVyHdTkSVjmPYahp4yBqwmVp1ZzWZKY54nJ4",
  "key5": "445K9wqhTrbysEPBMHeeTCC9r7kUSAnuxmsWqm4fY2dUXVmXV3U2ckTvPssw1pKA7f4jxSKduW32xyXcxuvRCTf5",
  "key6": "2oUAvQoCiNE1Y4adCYoHRcYyYcZwaykRzSkkFJoYACVHsWQndH2pEN3HTQHcb1j2BERAnGdThKAgJd6EzF9AbJMB",
  "key7": "39gf68NoZRU6Pnyc8g7PVrHdS9bdb5kw3MQd9emNdmtqF9So5QBAhjqiprCF3yPoWhhYR6MU2iV9yV8EBWj57QmD",
  "key8": "5c96nkCPWk6GviU7ko5NgkZzdJWRrcjsTYW88s7ks1yvhyNxdD2WoezACR3SB3KhigkQGNcQPqWHChY14TBbTPsp",
  "key9": "2opqJSJTbP2WUV7QiYo6bTNvVwQAKPsVPsj3jo9W232T5mxRpwawb4Cg2PsgWiDbWSmCuf34h57mQ8NoPA9gT5Wo",
  "key10": "3a8W3X9ijMuwCNXyCuxBLuqG9uvgmQn4Q3e9nMHeSoqc8Awd5uuhHHgimzM7PmcpAersfau2ZZobZVXrHTkya1bU",
  "key11": "4FU92kLdETbDFaarYKm5kiHeeKa9LVpYZ8hzwDuKjobPZiuSiTPw4dtZ9pzdYdB73NtM556bz9Bx5GZYaj2aSxVB",
  "key12": "4zu8cWFhAxWf2TsmW399E8q1K6rrfE4s5SX7XZSfiGMC6192ZfYcNQZ6puYG2QcKYecByZ1anNjjkDcD9bjLE6FN",
  "key13": "4xF1ozcDP4HVmbHbqLGYvaw5dyvsUPzC9DvEx2B3p13THtniQnaskurLdamHqTSzfS8HLGtdirjpwLeAkDX5H9YS",
  "key14": "2cQutfanD2uycakVpXZZkgKwzr5eppUQ6UWBJ2HNgdap9XDwXuVx8gLJoZSB2b8R7cWfNYTbfouiXkyQunoJnXY7",
  "key15": "67UprVKG4UFEhQj6vXZr31ETJbhHUF3HRPckW4PbtVdF9vt4tQh8kS97DES8NJrb1GWfC7f5KCTZFFupE38rvNs5",
  "key16": "HLU3LnDaMUi9Hia1RmjGDFxd13kfZoyYRNoNn48Zo7VoStDyCJrzsQ9Fjvv5nFnSoTqn4jZAetmLatLpvvZapZu",
  "key17": "5QGXoftdGUkKraQzEbSx1n6jE4AsjA93K76NkDb5ohH4t67MV2QnL6vegGUwQiTpM8s3qfGN8qUY7kbAr14okRR4",
  "key18": "2M66HmipWR9APWkhtpEwmLiNpP5k9nquaPhZ1WvAg976gPtbiqJu5oKG3wejsHrQhKczH4Lergjxj1rFaDzEBnG2",
  "key19": "VksW8H45nHATuCJ6zKEXaLCYjGCn5VRTEWk1cT7iMJwwfjotSadVW4v5XvH6dkJzNez1zkQch4nyNii2C7iG1r5",
  "key20": "2cJgTqmHcnZgeMSJGHq7B4p1WorQCP8kE6LJ14S1fFkSnNzidwBR4WC7N5gqkUWAcBDTDzwrkpGbTXtQCi62xgd9",
  "key21": "22PzSnEX77JgegoPaskNmnhy7JwLNk7PD6rUQG1r8RQv4ybenPvhSWqLwTzEDJ9ogbU3T7mHV6pQBmggL8iX2Xbx",
  "key22": "5fyug166KYgH99ntNkKafvUn43q4Vejj2C2nox53h5ydPVxSRG7j87xnh2Rs9aiQ4hVLQcDZykJyxoBMmCfdZhv4",
  "key23": "fj1jPCQB5a5Z7B8by2HxdRW9kfTQ4RaWcgFGXLhJ8j3MfJskHxDijF3jtixQaZCGCeQFuwzfph3hrDmTyPfUvx6",
  "key24": "2m4LRo5rxmLozdGejDibMRXCZvxWUR5daiXBbY5kJ5gUC7dBeEENHKASeFJ53Si8CLhvw73TkXh3JDzaiNDDgFvd",
  "key25": "5HrqsxCpMvDNjQn6Sixq7zvqz3C1z8TqMhgYAJKZ6YLEPby7BeimLRYPAo29s8P6oLASNAuFFSJJQCWuRxxw7xxX",
  "key26": "2cY59jtTD6Wi6pQDXRfQbWYJatRQ1oKanh8U3jr8EXkeSRfBMrieonhCMjhnVVs58Eja9i4V429yrj92fZYUiz5J"
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
