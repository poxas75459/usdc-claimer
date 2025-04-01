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
    "2YHihVp7jtPrGFGXRg5wnijf8n7WQzKkxckuseH3sbExwYRCgnncRpbEF5Uu4jiSSA3XCr8D3aekuCREEpFTKspk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EEgEKyXWJp49srV7UfXWr6huMFtP11SmmdaqzmXSqNepmjpsiNzSKkFDJ7nRgphyG1nQY6iLHv4Ftg8SnCVAEcb",
  "key1": "32migfd5VrP9PHcvB3fQvodes9kbPdDnYsPtb1jgDC3iwWt1fsHf9ZhoRFwB86j5bmFNKqGzi4cgAdf1u2Fd2xtU",
  "key2": "bTtsoSZjamCfh8hAgmEQJHZhsSFJnbnShsNJTLkpJ7gvM7xBE6nNcq6gcxcAFMrYCV2pazfc7gBGmMK3Zi5VwRU",
  "key3": "46EF1Yrh6nEttXeRgUjZWXwH2Bthi5L1gbZtzuJHYTXfCwwcTUKgyq3zXDdtFdrv8vhUZnVTU7JcEuTiEajTpLjF",
  "key4": "2AjmQPXrxatbcnLvJdSBuNiQNDpvW7kMZ2or4ixAAd3NRjfaK11AFpSDZ4K4RMztB8Jt5VPEgkmPZnAYF4Bf5f9S",
  "key5": "2mbebdE8KZG4x43CfX5i2HD2RdKUiM7nhkRu1jiNAX6UoESQPo8BWumtbSbwQUZ6Z1XHNU7JVBHCQpg7oHPEkZ7i",
  "key6": "3spVKdGuEmAgTSZtTndr8sKbi5xE4j1LQSShfiZ4XotcRtXt4T9NQ9Qb2gy4ntf28AfkoLoAduM5VbG9jvkKUaup",
  "key7": "4epJgetLNkbA9AJZzPw6rcwa1xbjfMAqQugq4Zbg2C1JQSDqdqMYbE39oM4iTv6EbwpytbvgYAbCx2Ew2LRYb9GB",
  "key8": "wUbNfKLwLV2XTpvk4ZJFjDrhSQUkTQfGbbUruJBt1LwJ9ZVn3z5u6rZc2MNJjLNewHP5Lak1w7SEzMLrZqHvWtB",
  "key9": "5bs7aapHADpu8W85q8bFKm5V3BNJDQxMPoD34u3899ngR3ieeuhVhwEZaeFLgnMXYsabjmpHJT5a3Zdem9wvPD8c",
  "key10": "4gRkwoRrdVuyqcANUuX8F4s474k1PLB6jfgoGktRmnLj64A4GUcpF7sCLpVTRcwCCDQ4uRiAtSmxYxMLTGWi3gUj",
  "key11": "49RseEjSLxuPb9JXUyPwBJfP5sNPBwGbivTZ5mKsxgxJYBZat4WyFPaCTAWJdo6fWDZ7Zxm9RiD8hYxy1WiSiYt3",
  "key12": "48PRgWh49eMxmwVeUyrB3c7hrD8Sdr5FEnN9uPtfmVauuafUeMBUo5YESrzAP5hxwhoQvsypmRmrhUDwPi3fqgpW",
  "key13": "5cmaJvmf8vaiDhqRXGKdoknhd9CcMcJ7amnrSnsR1vjsVhupmFWVUfApD8FH57hTZj2aPC4zs7RMtNY8UNxLntNE",
  "key14": "xMgm5CQZkzyu692Asuk5SMMovLMj7cUA4saQ3Skmgxnoc66bJjCH86vjVL3n42REWoQ3T9bcL1xBi2ZfECb3Gpj",
  "key15": "5XaX5B9D1cpoSED8DQwKCnhtr98uBL8eMKtjoATA2iYoeGHDBykUHXjps6q2eN3rHWWhA1PSP7mjPRN3M2qXcvCZ",
  "key16": "5Nigf1sWMyL1U1nwnbZqPbLZYCr3GiDaABEgY6wp9TT8QWyQ3hMg3Pt9Qd9NfqEGHawhCPbBPGYvgQvnQ1Li13ve",
  "key17": "5AqsaSo7qrUfi6BuiMveyyE78qzcBen6yBnHZs1E4RbhVP5CJ3srK2GxM6x3DC2nU4sAgbRUJYG5NGnPdcRoRj97",
  "key18": "d9ZbzEhLFhvXNNxApyRq4jUncQseMn149SEGgxGG3RcUrm2ovoSPcRW7hNMdZ7R3sfEXMkqVipZgADoPxRJWYH4",
  "key19": "CEA6CwZdqwTKe1TyZuurh9LBYdH259hSL4JZXJGa18gBmP1JSxAUmHhMDTnRS2jVuhwNuJskCPhHWZt5epSXnNU",
  "key20": "6AQDdys4tYKDpAtgZSDmc1DjyjzNij1wFQvxmGq6S811raE7PVbCfKv7FpMfHkKyEpvmEre5YZxFwkavK3R2weN",
  "key21": "5DxnvhZCMY26a3fY3jwZE68p6Cg691oyj81i5WdfnFNJNTWbZYbzeoFrS2foEjFnTvU9hq5wkri1wkqdF5uBQRJu",
  "key22": "4Wgxg8wLs9YiBqbowS1Wtxe1dK8JPHtH2qnxD4pHDovgS8yhLgL928p9rrWvkuG224DyTY3YVJvJMAk7oHRMpfWd",
  "key23": "21MjbA1VQbHtxQAuVqGk9Bzus5CsQfmYr3o19Dwz2534e4H1ZX8xcgXUWDC1KiJqfkEV3E75xti6cU4ejz136pGK",
  "key24": "2okzACZZ21riwCynEmShhigMDM7mFWrPFC4tj7yyjT952RC9mqW3hWUsXkQbTyuuqC83cCrg4Zufko19XPj5Z7FH",
  "key25": "N2gHdA8HBkBRC4qQB7doncziL8vJVRK8qbHAT1NtCdzqEMe6kNxHWn3jyUf5tpiijbe6GrHQuJqK5GNtdHu8WFE",
  "key26": "2P6ZbAFWCWoKY5AmVBcGoyFURmPjmJMfzDNX4SmKtPmCRGwhbJFzQF8JpCYHaH8xEXXDU91W7nHNSLwL7WMDZFnG",
  "key27": "3WDG66wRGiuTfYJyunebAv1sMywvdYEMkFsNQKq8FQyCxAvJhmh4jgQAgQNtMDT98742RQSAS9VSrxATUabbzyY7",
  "key28": "3k9DxYswAerE54zqLW871zFhUJxxYVZ4zRJjTTfntA8JXrtUtE8aEM6q4ASsQbNBMWegRra2ZPTZ9956g7yWsn34",
  "key29": "3bbTdr84RYaeD3FZ6TqseGGYxqUd7KUM5S22hKjonZzsCaducVn97JAozjzfgXES7H8t75QUgFnSKJH3bF44SU9N",
  "key30": "41nC2f7y3sAp5fDfJvb317PEvQN1jDECLUzps5kTS57HhZ22xbiPed5SDLUw1SY4NscfGfZfVRQfoygCj8dpj3ji",
  "key31": "3LaPJWawYeEGhRjCiojwaAABM8xnrku8qo1vLPbHeScqi2j7nK2CXVXZVpgsN4tN7uyZtwjN5ExFgqDD38Uwzk5b",
  "key32": "2f6PdKn3e7w3sJaWTmeyNrmeZGmsrAsWeCrv251AUKcRXoQuWoSeb7UHTTbQFcATBh8AzCZ4hoDLMnmFTBGqD4Rv",
  "key33": "5XA8dCGJGRTSpoGciMUbMotKv5c8nUmpofEcM3NPXMMSMZq5ZqWQFUgBDd3nAN1xG3eA5WwrgYarHs2GFq3zuydN",
  "key34": "2rPQc27t6DwG8Y89x2Hn1PesY8AhDDQbL4gpE5Rb5Rv8dnWMeBnJfefFpGPZmrnHFQGwg6aB8YFNNdPRjewCdBFw",
  "key35": "4SCSYShbzg3BCJLSbYB6kGmpmZrmmzNnwpQcUFSzDEL4MNbshH52SdBXCSWmK1r684zukg9EQhrEwURNoUXLXz1f",
  "key36": "jdht3GfMBiGE21HDYh4EBJb1S9gg2bd5pXncKcsvpNqMXYvZnvbS9LUi5xGzLJj2jSK6cAK1v7kgn4q4Z6NvMZe",
  "key37": "5TCHW8UQXRZciZyj46ZJrttWsGMV7s1rmefaWKqmyyf3Yas2rovdnktQFZUWe5T3BUpF29V49wU5VsxoZhZwTU3S"
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
