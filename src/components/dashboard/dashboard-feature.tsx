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
    "2e6tvTzvFT6jncwA89xStNmRpJ8hFv5NvBdEQrqtrTDvugvCWL43fk8gADQLR4DxAx8nQFdjWDFL6BCsd3YydSeH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WUmJEmAQcccRvMih9Xp4rgKknofeyr9SWZ3WeRKJ2KZ5yijfnX2xW9eCFafx7uPGQsNPMK9UkEzdeFvGUDjitTX",
  "key1": "3kgKcypJRG7MrZf8hLYhf7DGGyFSuC3dRt61SrVuK7yHD7QoxjUq6KAMuPQvb8AhwGjJ7Ric6K5fB6VhBo9z6qWh",
  "key2": "5piKjXWP44tG8zLwtmQfvpNGu4am5aU6RSDHTMGYdqN8ZUFsLr1R5NkdgoAoBSq3nSUX5pBAJHsGjakknMwHXTNH",
  "key3": "3Rye8PzVF3pUWE3atdggBqzYx1EgCQGrXnrUGtPbtDgynefvFEcvTvUjuJvY5M1CjYEfHyjrJE9wtn5f4NnWvWGh",
  "key4": "4oRiJBdzJKXCzGztG6XYPMhMvokuuqmE6p3w7CY5atpqStPiiiFn372cYPojWdvYr61huKGbAV3JNXmuE9FT6icA",
  "key5": "pz1tHKkahEybw7e28Fdqp6SLwH3xEEs5GgAWoHpQqMwaheHtMYKg6L91H2kyKSCvFxPzCBLPFXxDBJoXV5jAbWD",
  "key6": "4EfXNymdFNgXibbyPi9fs19EBwpgU6uvJuapxVdCYR2um6Qbexqsoefnf8XUZR2xfuTrPpCFrw9noHR1znskXPP2",
  "key7": "4FaksoCMQaEyyMBvPKgDYiRp8PFsiBwMKvBVJUNVfZov7Kuo1eqh8bRNf3TvJyJVfsm3W1RGDtnh9NfR6qXjbF2c",
  "key8": "QcJK6eKjdP34FoBdG9GtVpCSh5qb35fj8rV72sT4URqh2nkR9zPxAAYzKb19ocL3kU2qdkvuYK9V1A9v2vXHLup",
  "key9": "C98yPzFdY9Np6gFCL69U7kVjg6VDCRcAVH6yF5sSGVzExc2ZDpVxqfQmdSqasPmhEkiXmv231KkRqroMEfXjaXn",
  "key10": "5EGkNe8oLVd7mGEgtFtR1H7Z8rZFywC94Gp7FHMSe7xKR1nkJoAAAAemWmL1SRVkxik2K3xUk5htf9b4kg3U4W8k",
  "key11": "2x93SWsKbzUctgqxj55aXU6ykqM64MQe1at2XydCBAePikDxPdZWiDqNKJkVhtkMw5VjcjaYVPDEQA3r5JN8F5QW",
  "key12": "WBhR5d6ARozqieMm2kyQU2sLuKaiWCYUeM6ogcJYL1SRay9BKrMqMNRyRy4rsnjoxbNfzeLTk3xuqUKyMftDurs",
  "key13": "2YG98LceZVhsa1Rsc6Bo85gMPkKC6YQDJKgEH3vfdXcFDqLkUqc2YzADxbPpZV3Zcfksgb1vcoiS5Xy1GSsjqqQw",
  "key14": "33TEnRFrc6bj3DiodMHRmXXVA3K2pTzVdnCx6CzpHRYrmCEnaiWrbYCfSLdPJhds3rpou4m7SPqw379gZu2GRzB1",
  "key15": "2zDbbLcmvr67dnAk4UT7eW4We6MzBNMAtP3ujqBd4K5TDX7h6mxGYcrEDhFMif3uJfQoJtHvXtZgUi5JPvFdPin6",
  "key16": "5ySCftEmFQP3cLmPPqF84ebpiPjdkRazeaL2Kfpf2jjmqaLACdQRdzrmkVuTNqHN8oXcb5Awh6MepTZHJevV9319",
  "key17": "2A632Ga4fmrJnDv1K77cbr8Zgtc5mJTH24dtmiouKaYmcM4gYgBPsCh5YXuPWL7s3UTkzdjn6wzgE7SnRjtkXhLt",
  "key18": "4VCXvpfQzxgNr1kNuEYkEd2WnJw1yeamc1gkXfZmStrgWLZUBGDe7BWNdgPJTTtUVvAnjiQdxZDpRPLA6EYXZd6q",
  "key19": "62fiK3ah8ZQ8Q6BZQf9Hyra6xjpCgkrJpyUpRQz5pkTS8xy2gYMxrgRHueuRTFLwom2NZW7u3rmPa8UBsEFmmXiG",
  "key20": "4cSAFRPVdDkt3hWvRkU9NxAFEHZ93pVtppr5g6ZDTnE9NXXcpfTxYHoMYE2JRu62v3A5Z1iL2VNBbMmgHiVYgyrj",
  "key21": "45iWbWjnnbd5sKqxwZRzM4x2s9M8tjF51c3uA4uhQ2xeURCUDQrsYFjTfYvjDY3s5UQ5U7daeEV68HU9Ck69wyBe",
  "key22": "hmPLft4MMoBgecfvWUzSsm1c8EcwJGdjdJk6dG1VwPAHijwLBEz5PfXKSRnbHHm5t7A6Q9fg31Yez8eK3EXZSzy",
  "key23": "4AcfSF3m6H1iFnuKyEw2XrvAgQQH5AWFehPJo3F2fBdiWU9JBPJGzTUpZv4pJv3yo6ZqvtNNtf3ZK16uivq73TAB",
  "key24": "3xF6EkWoukudEKhZ6S4NpVFtLoLNi5UeJEimy36vQVw13UMbiTm9FFoqNRswhMiJzjfyb6vTjtrftiE6iA7hqUze",
  "key25": "4AqdvAnaDDpqx6ko2HTC1G2APXMiVSkRUANvkyoxFV3Lc2mSwHaKm2muEKEbkSnJoCWUdLzJ9r66BtQvbKbbHtLX",
  "key26": "5D1H8nr2mdvZcxpQ66Qt1wNcMjcuiMigkXanA2oNRZ8KJgPn79Wn6wJiqQ1PWai6qVGV9xEDDTj49PRFJfAJB6qn",
  "key27": "4Qjd1XiSKtAop3cvPMZmqeBrWkPaamdSiSxoVvoWCki64qoemUGdvEbh6N8RFtV6BYiEeK4dUt87wHiEGahSBnTR",
  "key28": "27NZJejdbS8jHvaKPruPVGGaGeEdBfRtfxXcqgUyTHq5FMMae6b1YZJtFM6XzddZmLeXTF28RtLUL8Vg1TrFdnJE",
  "key29": "37t9NwUbb7f7t9CzPPaXs7zsSVsXcEUW6tsXAE2SuXnbnsk9qeDVSxPS8zZgjcPMRXt5Hg7E6GQcuSkqkpgepkfi",
  "key30": "bqXHXRnrDRR2vNncgcGTzv3vSFfALGt3CY3XpNgzGKetN1EixorgygztfVgp4ueSxs9BXrSeJ25GdxS532Dd64e",
  "key31": "27tBTSZM7iGMS6e1pXRT5vhTch65ZRxAUUv3N3c7sHKY4V76pafamkwUSCbAz4d3v4rJGRbo6z2r6YtQU9GVb6PW",
  "key32": "eTwfuAyHCGDAaoXdoB4ozLM13vXPhxjngM5QDihkpkciUURnq5cn1L1xScvjJMgcCrwq355VGgkH6seq1LMTcks",
  "key33": "J1MJhcfbmMWMZ92j6428RDPSa5ktpg5LXGgHLbKWok6BBamzrj1f6RAte7kMEVq9jzD5N6Yzm4ySDmhy878yvZZ",
  "key34": "2iBB67BgLddLshxQjiZe4mjZXa3HpgkLzdWPS8wXFXiDUzr3KeBrfHrE5iBZSWKJ3ZnKRyvgYZKRRFGSuGySAXNr",
  "key35": "tfwzFUjq48udCBKTmdf9KjP72zakpcuz9hKsnih4aPc31Uea99YtbH95yhNe2VE8c7jy3NyFmqCDVtrJXbUs2Zv",
  "key36": "3wMxGJ8KPhFNdevGLCTa95noP3MbUKxkRwfjfTnknpfj4sju4YXCscrWf2V8JUmBCiJRVDByToPmpsETuYWtkSHD",
  "key37": "4JSWFbVTbM9JyKLCxMcHCQDjqxsQAQ73GXemcJouGGWKXqiu3UA1YaBGRcvftt8L2gUm6jbMR7vEQWvt17NRwiT3",
  "key38": "veNt24spzjrBKQPqLNyXDfBYTNdikHcuaaiYTpMwE5GFA33tApPmjThRgQrAmC9g7xo6hxck4iaUUoM76kNtDR5",
  "key39": "36LwaTPJWMGBKTAyNn2JEKV4MrNUbtDTttW5mgrz1wTUtoVfMbdRoDBU84QBArXn2KZNnoFNSJav4hpAQadDV47p",
  "key40": "2GgyJuf1krD7ZbNtFdswC52LvwFnSYE7VFSj1MbFnv8f6wYP1SuEDrUdgSJCFLPU6SFnE4tEQ8Z5cgx27b3N2C6R",
  "key41": "uUpHxY85MqWL1mkBsKXVcqu4Ba19LyhVCr41dUoojY4TzVB9oHZqnkK2YHSH7GdS4TwZzC3Rokfo6ivpp5bmfqV"
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
