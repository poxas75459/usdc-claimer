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
    "5VmiLWrnfbBxdju7mPnvAL9bLX4UvkUDjuLjiLpHorwLoW2wUZN2oRCeHxrNjvU2g1TLGWT1V98Cg3CTf5mMk12x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yZr3wrJvybdUzp6yR9NJcifQTRXSt85HjB45YxRHhMvMGvxx1LB24woqj2tV5c5QwvjB83dMMLzj5AM3BFfrQwB",
  "key1": "4Xk3JVWze49uXhw8sM2p96Qfyfy7HekVDurZJtAvsuAJQCFFJoat4hUH5egRprYrfHuFTctVZ8pWfJtoE5qiraY7",
  "key2": "2o6MyXkUMTJwLsiRpiTSjPHejZKqVw93NNY8qYgBMJUwhnqFvArZnk2ZMXhSL1PggXq8WibKE7fewW4jDhCpGByR",
  "key3": "62gNmP4B5Tkg8fhjNH3RkgymGd7GFTt2xzFkJZjqwGLCHB9myGAr4tjgLRLCKwtK5CmxDiY3yz1hurSUzWQpp46D",
  "key4": "2ZxBT53ZfF8jVihcRkNaYHxze4jvbkx1Ka3QpY7VrYHnejeBQR1hnFSjPTPJHF6M5afRNQoS2v2VzQE49bcFmpEy",
  "key5": "5FJVU7L5gpq9e3doYCbf9WDkP3nCDFE7jGi8zpLRWJbNLahtrFat2496FhBt8YtxrgzbEnEg4hQkXpyL6qoeW3rg",
  "key6": "3CR1xEhAK1ug9BPkTCMykHiiCANJ1keUF73uHdCRxEQWgoqrV7DDs6kzWqBMuCLdTLHscnGaQadhBRyjU49ob1tk",
  "key7": "5pvNwPbyp9WMd3p2LHoDeZLKJtWcdd4Z78WTgL4bWXsf6w8EbWqsKEf7n9FXRMGBHuns6hhPURXb526Vmam2aHgC",
  "key8": "oJBcZNu4nRGHLAdBaQ8uHn9EivKeuAPHAdBBMrYPMkZ6v8adLEFGRwR5m4qz2DVXk6Bc4qMg2nf2P8AEhEGUf7Q",
  "key9": "5juUTyTshikXAfaTiwQorBdUdgaFFcztdCdK5Q8jard7zkvWVYmKVPqkHTB4ammLpHBFJiZT6Jv1xbvsjrkJye1F",
  "key10": "3evBHhgXgxbLVn6XLC3948PdWvkkDH83NvStB8tmSnmj2JnTox99Tiav8aVAHfQpCXDEmPXHGaYC85qvxC2Wgpho",
  "key11": "3dyq7XaYA9JJYmUi6X33E9ZmKnLiNdZ1wemaHaiXp6ghgWNWkRXYjR63nt8EidBUNttxUP2Zn3PAKfC9vK2vphXy",
  "key12": "5hhTxgXr9LVwNNB5HazDbaw7ZgARDVNvFadeYjPFfPP4yLV2Ves6RWq4DwimPHf1YPcBiCBK8gpWVBSttGrqDvuL",
  "key13": "5w9WpfXs6fS3p48emonPi8Zkx5bcm4qrbFTE8GV2R5fmCt7z3BnbEoGZ2MiSVWajZhV2wjJVpeWeb26eDnc13Tnt",
  "key14": "5m9U8N9zvV2tbPqi5Gij1hTLeyb4xP7NLyHBCKXgkFqrAuDK4PktxxuFYUop8ndxtjuHdFqvPCeTnQ8zC1y2bAq2",
  "key15": "5DikXgmtWAUThQYYrptZN9NfEU6mbhNzXFUZFes7CynhZoxguBjEtoBXiU7xqsn76iVtJjtdeiVVXnHK7zVHTPtC",
  "key16": "2nrNmCA2rqaqBbLtNCDDrS4XYoptNnXYnhCb4tWV8FaAiqV7aTfLJ2Uc9P45QjfhP4K3tWF122r6WCqn6G7bhTdN",
  "key17": "UZKgbQkfg5nu2HCmkGX8NSB4jEdkXDpJJEYCPKXPHwUHnuoPG5kEBss42JuKtXDSWRzL2DWhmrFJ5a1kxq1wg79",
  "key18": "3JzwHKRRudyz6HVHRcJD8oVJskfVHXtVbxU7GeeE1gsQRpBCCtKJG38scaAkMRRPFn4SuB96FMHHZzRTBAFKKCyy",
  "key19": "573Sqhehg5Ec7KB7mkWAi4Gh8dVmg5ckMuPmPDr56AgpZQ9Lo3haxttRPnUBYj76jNSNqgGMhz6T5BQpr5mprrgA",
  "key20": "21M1apiaD8zWaDpmfAZkVmeqFjXSWZbCzgg7EPTQXMEqhmYqqiYAFrqb3gsZXCVwDz2axW5UCAAmhD7A627i9gr1",
  "key21": "5u2Bd2rwhWT4g4QMzRdYNZMojZz18CWsmLurGHoCRNm314LdBruWDPvKFHe8r1vovoDXnnEABqdRz3jGHTmRQtKP",
  "key22": "48LxRpBs2qUUk97hsdQP4SGNYLCDjqo45rPcDKubWr6Vmn7C8qVGZnyxjxPPjSKa97kPStvLnXwgrvmVGduCBLro",
  "key23": "2A8SUM9wxtQ6cHhxC7YLbmJAxzWutLsvgPZXmKPmRpLg3Fo8EJAzzzJgPjVWFfWk7yFy1Py6MzQLEzK2MLraeY4j",
  "key24": "9zCNHJZUd9gv6GGwvSmfAM1j6PyF2jvruG3VYEWsamGN2rWTSbhF9tgcvnKHctWZc1rcZNhx9VNmMJbmNfkq2VH",
  "key25": "5xxzyQht8EMAszKgfC9SGXTuXEiffDGAnt99hfEoBnxVDGhLKgKg9jdPzuEgatAxzCRNwEtHw9ns3jWprJVYgUvU",
  "key26": "yQ5gWd76kGQ9JEyYWD2tFAhbvZmY5FVJLGLrvcSiu3SygHCMonNR4zfBZA6LKmNoeBjsAUcuJ99K5pDMCGVpDjs",
  "key27": "5n1Sc9mwyuf2rcFdrUpfufbtnfvhbysKB8d5KQPhe59DYkJKM3RLHZKn13Z7YE7MCT8gnqzaQ5JqYph5RMZWMndc",
  "key28": "5KvcqCJvHEh7tdQ5acTUWMHez8JZTr1ThRnpZ7cPBDgBBgT53msAidWNRHvk5ptDa3rnbRJQoTwo3gvoadpQovKX",
  "key29": "4rgs6WT7PbcHjCZ5iJgyfdqUqg1strsS8zLZtMKpyZdjc2GyG8mmeThrWnoisDAmFeQqfJhVNQk35HekVojSkPSv",
  "key30": "5umPeawGvb6XcMhH6Dw9Y8mmBQ1wEtsjqPw5V7z5Uh6QsJb3FeNj8nuukQDi3YWtwdTNEcjaJDcAoSyDGTN2mWrE",
  "key31": "5YikKdhDFMAepZ3C8dxG5r8uPqp5rRiaJ2wTfDM4FyJJ2MxjvMPtnKat9agGsyBswCGQf4421bo3JvW12XUhabA9",
  "key32": "5rZJj9cgNfwwcrHyaLNkg68hnjeNdfygQRX4ydgfboS3dPZ5bRu3j7KsKassYWDuVV3XSeK7rhs2A65N4iPS5pEx",
  "key33": "62WxhMqHLntL7fNnzaKWKEgh9VHq5sFNAmoHNKr5SBu3VWLSP5LkfboFzdy2AB71EQfQzGgqLsPcdrgBX8JVCo1a"
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
