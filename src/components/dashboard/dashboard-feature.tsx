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
    "2SnMTX9YvBwrUJZWMKEgNSySo6P8biZDGwA73aBR8mMrMuGf3q4GCUYMGiuWEzGAsC3ESfr6wVzKibNiT7Ra98FS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uQNvYeqeRLRmYXNpwsLBBVCfdG36q1yLZNycKK12kW2F7YWb18PWfFVC5GEMvPerkd7FypDYvRWZmhDJTMfmrjV",
  "key1": "5xmFA8zhmMdKrRWo6mszpafSH7sqzJBP8j2hCV7uB6Yz37ZybEofGHwzv72SYYXbyorw7i3aPe222dZrAV6jc4VZ",
  "key2": "3eiY2zRWV5zRY2M6QcEDTsAa1Q6Ap62VwPLkkN2aMfQePBqaCiLdA5ST2swfRonv93UEAVskkD76h6XxzBDvta9d",
  "key3": "41sQypqvWGdcbwvzg3SjvA88B8zGZ6yAZg6yfMFjqSBVMcda8H89paHjUczNiRtEKA4xfWNtC3pF6uk5dMAQpn31",
  "key4": "f2BRZCzkRJjvrTKTeGugUDiJtdXfXD2911FcJdLVDhbxSLVuHj7YdHCQqpbtak58fqc7kp8v3HMEpBU8q8h9sNd",
  "key5": "5H1ypPXtM4syd9ebMKBudZw4sDFzXuKqgoRU6Hv5vJzftn4TXgnn6beKxBn8h83CYTjXSFbUXBjTNCUqZGr6xAus",
  "key6": "r4EPQJ4krb1PCWtboASCUjnwEvXYC14YUFeUEUEkLUiMgEnimParRK1uhvQZN93GYaJJzyFGpphfa51LG6UiEtQ",
  "key7": "2PW72Jn6h1RAn9nKhu8QL9jNKTCE4mR3yBzuBjrq2Tth3uFjcZw1Y2Pzcrof1eCywt87Z7DBqFDouqpKrEr1dfpd",
  "key8": "5J1tmESSG4e5EuZNjPSkzNJjf4Z17mfHYT7a39C8CZNt31bA8LHLFAC3DW8DVAVvDhfEvFm5pZkoRGznhmYedgRk",
  "key9": "2TuKf9behk6n61bHAsrA2SywjbkGhcZM7naaxyGoaS2aD2W4UaB4WJ3JKVyonoNFU5S2vMsPmcRGcEdaRGNFuZNX",
  "key10": "4emecp4uFBXciVobSkRvV2nhNBRFtWiHcKMEdx3dABSY1m1d5vxdzFZ2iqb8VULAvGiS2nGJDZL17SkHJUzq22Qc",
  "key11": "2dy43hb85HsVW9mBJ61vNJzKYPKccttThoA4vcYC6JU6iptzWFbHKgFhmH51tnXiGGc1Xd9RL8U8v6vW2qvNWYo9",
  "key12": "2STfb96ENRaMv84DHoZoKnnDBNCwWEm3znobRGykM31sjoG1tsHW8RfKMWG9jmFAWEtvvLMaL7vmbeKU7P9XhYr4",
  "key13": "5okgfQFsJacCRq38gSGr5nvymzU45FMQqTLsF2W28L7KWF6ShTrCThF5NjsvoMo1MNkvPLcQfoadmjUcFUGTeEu9",
  "key14": "5qxN4q3RiBw6Txxtt9ziikLsC3aGY7Lyq8ovRctyEvchYqgSX738g2KPZz6KoS6fpk3LZQXkmqp5Yu2Hy17o2REq",
  "key15": "5oat215gxDGho63qTDM4MMDfcXMuE3d6j9E451TJboP9HVhGYWfRsDxscixWKkzxWxz7KRqWrTUCrFdhmqPzRGB3",
  "key16": "LwFfY38nhuQKfyZPURPhCsSnnyxCGea95SiBejPhgZbPehezrcnJX7k57LjyyYJXZ3LN69rtpTRYgkgbVeLGXce",
  "key17": "58wDbYYMJGXSuKmDKRaHRwNb5DnV4ufYtVctJ3CNDXthZpsyhGxqbDWdmhqnimveGCS6gxZPL4N6E1LzjWoUAH6r",
  "key18": "4virx5WA8288cq1taaxYhAzSs4wtjJPBM5aXrgZz4Z6YFzc499dtQo2dtMD5qE3r8BEc928iRVwUhGxwptqF9aSi",
  "key19": "47CZWLLVcnNC84fGhhUKJKqtC87qbLPUCUkftrv8wSmshQBCyN7mbh3gFkCfeHc6o9KP1YYUwEmR3M67RWQtxD38",
  "key20": "23HCtFFS8MuZykpJLWV8yH33AB5uP91onB3HEhaxBMFUKfn8bid4oqzvEm5omfKhvwGh9ZVpTJodAgno26WbaqrR",
  "key21": "3u8EkuwbRUEYTLD2Vq4gVwM2nNZxZqdXTWR9zR1VWTn3S9aa8XG86wGJwEsxNTALes6MtaFb1uvP6fojhsADfdse",
  "key22": "35R11R1LsfprD7zqx48jJNmnK4fizFCe2AzLyLDBfKmKKJEQW23Z7bqijX6JjBoFsJge7SLgjT3ChQRsvi7xYUaS",
  "key23": "5fjffaMGD3YHhkEt4k2Bmw4Cn225s4AYinJKhGs2xLnWsfT6fAQw25deBrVoBAiEPQzXNE95VS5fg4kVPbGXEYs",
  "key24": "4NyapxJNTeYWXNK3PJN31Kh5uzjf6CHJenTK7vLoeAtjkga1HJqaJM5ZKpeCAaBr2tE3V9vLZbQpfzNae6pDCMs4",
  "key25": "3zsf3PNq6p8XXiQDw6tTFTvrTnkHBj2rdvpnpx3R7L3AhGRMJdqqFhAXrNxR3chJj7LJPCdXcc3qih3vbsft6Hwn",
  "key26": "3AEyAEqosqedySc7rQsLQb18vj69W6fAQCUAjn2cFNRoYAMmMaAis8R9dxYJ3ZUvPAfQ7ZeEtQRagwSJBvxUdXpW",
  "key27": "29ZQKNBjTUgvrzXLy88Q3Whee58z6KRFgkqzE82MPMk3ynesiUWL6muxXrodxBN6q5RG3JeCPw2F7DXHRruhRbns",
  "key28": "3vC2NGkKYTzbsrU4rJ6J1rSmhQyf9MmXHwR1gkzziN4z1x54RcmLKqm1PqVRLNQ3Fe6rRep5Dggr2d1GrNymg158",
  "key29": "Nzcr27DzYu3oeHQkU7ouFJJ2wUsxnjN6qZQkRHPcL9N3Ds5GkbhnukYX1V8qDnTupmwpexJ3gYJabtSmNLLW8oA",
  "key30": "2EL2teCKbcgHPmMWdUGLJ6Z8TrdY2cmT5Uko8fpNgBQgbxSQp1hWxCeNDnHKrPo8ePvoY9Nszkdm1oKPd25UM3Yd",
  "key31": "5SaWRGV72cGboftvTVzkYcrUGKAbApodFKi61NSvTv5VRsoRKebXmNLQt9g3azBjreHRK5trjYbBUL53ZxMseZ7F",
  "key32": "3oELXf1EtEhKLHMwv1rqPkQPoCxdDLGvSZWC6uUTJgFZawYkNQFf3YE3XiUjAP3t7hN9AvV2Mn51mgeY7U2Dms8v",
  "key33": "79kkAN7UMU938ZYn32yeFdHvJkM46L4tsZTsCoXrrb99DJHJPKeUtDHRAFSk3kbwhc8EroR1XA8BKBtj2kMweMS",
  "key34": "GC41pNLLrxYsnmgrUdUc9EEATxvSGAqbhkPV6q21K64waScnX8Ey5sNYN9EgPt4o4pieoLDkkHHvKYRGPKDRzmv",
  "key35": "BMgXvnbUW4ab4oofbDZ4vo6vhRqPFBNz8sG45W8ZcmwFFRQ7LTb5xk5cyZQpWvC29re8AKPKwE1tjTnETe231UL",
  "key36": "5T3K9P7gSj7HiqnkJgSoux8end2pcA6kgSnXDeyugesrjTGwLA6sbi2cRtrUaaeR8SrwFpknf4mkUFBgG59pECp7",
  "key37": "41yKjjcd3Kxjfnpb9tDatm46LStN4nsQwrK168dJQJBwMGUyVPGapTR6F3ahbUi39d8RNKXNJEKE76AZ3MwtgyBZ",
  "key38": "mEpz7gJdWqj5BDQwVxoWnCKk58VCtgK8LqFoipW18mG2VnGpP2VPcRwHTUDXfqaMEvXYeqqTKHnJFjr7bXCt2hR",
  "key39": "62dEtx6dC6jRdWhmxYQ7yTn2c3QWJgQL1QJhhneewgPAiFz39x8HEbJZoMFnUTaCj1q4n3gvuCpmhapPkfTci2PB",
  "key40": "GHWBjApTZppdsWB5pyRG7YKEt5z5Drpxwj4Z2pMmgRwVtykDkyvxY5jqQ9WZ1VtwCjb3JGAJHRHaMqFKQTaNRJd",
  "key41": "DX2fp1qCZ46UdpVh7Q1cw1h3akYTJrtRFr1C9tTSekJkqjpVVrnF9CWopxz323f5qZyPSECUS6DF19UmVDBrB35"
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
