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
    "5uaNuLFV7Y271wWStZsVs6gGN6PpK6FqRdxF8yHZNmH1wpxMGWCDjgF2ifYyeenZZBzi9G9HtnC7n5yF4TbKUVMp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jHafhLDZJXujZMRTRjLnMmrvKUj4HzP2ZC8AQie3MpEcNzDcobCGkpoqXm3MSHpijZNv9uLyA56HeqKizAgYJDP",
  "key1": "4dp4HgmWNJVj4WXmLYskP4K3Bxf8CQteVkrLzauQZcumgDMpgbmo62byAcjfiZPrAYzv6rFNanuNGb56aeBn7h5H",
  "key2": "4C5StSUXKUPRtgQSvJHQp8Q5SWnFGMKi25apjRARxtUYA71AE4mSJZKUGVSZRCXgjyNDJFmdHLSXYwb3dHrbpzav",
  "key3": "2xeHEkkhP1BJLTBGDFN1KDTNk3fNjM5zHchfTCo2TPcZCxM9WaqaHsLiCNmYMG9rdzRcnKLSu7QmczhrZo3qE45F",
  "key4": "5hEZq73BUsWMciPdw1XnedThKBCLJDv7ujoo2CQa9KpbrHtv2FzHR2rEosD8iHkZGQBZ67TTvEbmMdoYS55pJmpU",
  "key5": "5faPkhriF7TKVKHs4kMDiVQkYJD2UE66D9DnKQw4Vq33UKgYTHTghBn6s6g9kX2quhkza5gAdDtKTefXudJSubcb",
  "key6": "4L5m7ibye7AQMqaJq3whaXoRJHBDjs9LMfSSFmbJVLPJFMou8TJsjXzZXrBdeguejJJSSdiUSUgtsABh2JWjKuEx",
  "key7": "4WDh5cEeAZh2MU8gsiTi75vWMUniE8DZZGyTuksK2uJdnhpmGYGaLtj1bRDV9aBvMqbr5ohCySUybtg3M14p2jkW",
  "key8": "2XkatNqY4BXQrivWJAFf9WFso9uoteLJVsnBvxdV1LGHQnDUGo3KuHFxSkauMEuBfcQTQ3fL4X7kdPtkhETwB7Tx",
  "key9": "5GFYnXQrHdz79ZQ4CqVY6t2VPxGyEsYw3tfPt3g9UUwcNwqpVCMUxj9zvHsi2MmrmtmbyGWfDoZRUB1PzRRDpur3",
  "key10": "229zFHG494ZJu2VrMS2Jp5BZUxp2fr9KxC9RLS1hqBSh3qYDddrS73a7h1CT8sPnRs66eVMHFj7JbTUBswG5s4KS",
  "key11": "65X3WFQPbDhs8mw4KEU1TG3Y9dHrqBP5hHXLYNCmzce6n7kB6sV7ZTWarzyy1ywieTMb4g32EEJjLp9A8r7hdgwX",
  "key12": "5xwh5oQ3GQHn2a8H9zBB6CFiAaSEYJYjmvDCubxtK5nmiKPGvgj5Uv95BBzUafMx9av5SgmAtX9V9WZG3iupiGgm",
  "key13": "hRXdpp9PSdYAAdPLGfrDiEqLSvGX6v3UkPHVR58Mae2jpP9YK7qWnekQVfS2WsP4499ex4MCspWsRgx87EKFjzp",
  "key14": "42yuqMTZ2PjUthWnHqzpKLPwfCm8YLf8bdWXWgHAkTmvNjJUrGryYsNAGSdrziy8sNntqbgXTf5ism6C7jPJpti5",
  "key15": "5zkzazxUECsacAk5kuoHHik88A1SLeHkRXrPPD8yvcw6wukQM3r5PH2yEQTpaytQc3X2pHVh1kJBrMs5iBWGMAbx",
  "key16": "4CxdtGdoQDegfaeG7Kvx4ttT3ayBm5TaRiLxNAyrbSZWYryBkzsjYh21U32SqU3ZG432jeL76H2yu6JMCo5FzCa",
  "key17": "zM25hHwawy3B2Pab8HSL5xe3WM4moKP9fw7CdTut85Qh8cyDQxn87cbRTTPXhLWenPek8D2kdFhmEPpbdgEQRHG",
  "key18": "5yrG3AFAHzxprtzTMyzbjVRAxsEbESEXMcL9pxBrT7M72mr17fRhENbf8Pjgd74zJrKWvCkkrxy4Ueweu19Vi9D6",
  "key19": "FHnWwsuL58MCkFmrhfvVNECt3iRw2XZAd6RhinHnfr8cSZtysnLTrWeDDL6ooxAdjQs5wMcV1Siv2BkMquAfbJQ",
  "key20": "4ezjr68rRXPFE3ftDAPGWk7SuqLAdtLAjB152nWjRD6hzS2BVR2LY1B6A5cUwXkQGfsf2PoJsJhSMD19q7CyNMm3",
  "key21": "EtAYsLa4wMs59eWwdfgftKcwKekhv3Dd811T5WHWE8kfaKSuWp3dMqfjxPyrXzP6qdrNotkbf6RrJoGYVzz5xWS",
  "key22": "2oCZrZywNwgs9hNK94bHHX9CgyH9obRKLKMmWasqGzAoFp2a8epGBak2Xw9g6YE9YSrdmPbFkznpe5BLWwgmnz5g",
  "key23": "3K19BYr3c34xoiHZmPNxAemuqzCaoMMEeMM7oyjQczrbfMWL74u5wrzsAS32MhAhHGXoG3uaHSsv8emJFxbfyBEr",
  "key24": "5dT1BHRQFsGdgdGGhuu1RHdiSWAjW35XgiKMKKkqRwUD7cMkX7nad8UFnTdYVVnf3TSvCLtK7hPaCBdgAXCz6CmZ",
  "key25": "2zedEwjzzoyXmbBtwgQunMG5B9ALA2a4MruJ8ZpvrU1mTwRBXqS6bfB5nyJJSCBZn3u4PaUyNNE15Lj9k1wi3NzE",
  "key26": "48kDo2S26C1zv85oEARDCmjddSFKP3B9sGhix4RwVLiTHMmjmiQWe4aJYJcFXLv5cTeEmhWNyAPv1W5NfFuMFQHW",
  "key27": "TxNV8fKVPLJKhYhAAdESV29V4uLBsBALkn9R91jBuFahRzPGH45bA2wfLey38rq6bG7L6MWrpxVEvSvyayCKqQN",
  "key28": "4FvLr22Xoh7LbtnaDFUC99kYVS2GdHf5opXr625S2eGN33YADVtwdSW4kjrmaPmkKs4fP6WonLvztNTJvzrzWnAq"
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
