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
    "27EKDpH1V3pn4GSj5CDZnA1wDZznGzLcr9Y9aVTCRQSanm9PKB7G4THYsJBdKPz3d5WydkVT6t3TgWxmQeUEQ78s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hE8KiPEzqw6vJjVN34u5vM8mYYvot9eops7fmgfap3fo9VimeMY2w3YfKraaSGYfzC237FHtQ6AFrE9tr2w9joR",
  "key1": "2n7tkinZ4AE66yRbCSGPggB83biXbCW6VtsvyHmAar2H586qE239kdGjGmfMASDhbJvytxJMcTwoNCS67wahC3kZ",
  "key2": "4SKf8ijNVtM5bkFt3KxYyiu2T3QjPu13VvMkHNYPk6o5xjso98iVXc8ow1ekZhD9r76WqKqrvWN5tVdqx9ZJhDWw",
  "key3": "TKBpPgcY4HnpsS4zdX19dCVLFugnNE48PvCQUvAukQo9oVAm71GcJ3nMnFfwiyxEj3dxrZJdoZPXG27PtMkWRDQ",
  "key4": "5La5dZqLvDa8n9XaboE6u1pJseFS7dFGpnxqy2DWMnFyT7DwufPLnCbQqz865p68Pe1RGmeHX9E6gfzwiDoPYen9",
  "key5": "2oU9z26Lf9wdjZC367aE9EWjcimSqm9MfUuPsZE7rBQfeuLCLwG2eqr2D6QzAtrMNyB5TrzPExfKxXAg7tY9ghbW",
  "key6": "4TPziCJz9GXoiyTsfS6U6Ax8QtDnpQAUKytDY6thsEs59Z82spNbUspxEBq2EiqafCUddxdjySsVW9Bvbc1M72AJ",
  "key7": "5Ss32y375aPfhvyN4qSoQJ7Jc41BWM2TV9drVrfinXyikNFsciar6PgzX9Vje76qJejs1AypnS54EpKHu2oh4QQY",
  "key8": "55UQtJotBCGz8mnBKoEtg7m7wjeDvXDhunyzbomniFfSwJfk1NFhbRRXAEPkauALqnFoDPZsBN32YDFSj1ENNMJQ",
  "key9": "kRjXRGHCCrLYWNAsDBzsFAcxmxBo7DQZJE3m7XnBdkMojoLV4PVspwkmRHkkHUcwhunY7bfxBoKZhXKFutJUmGT",
  "key10": "46XVKSpV9vdLn2TX8NUnaCEue6tJqaFCcKNFC5ZNpegy79RbCoCMmQNo5gRf4MSkxngsbPsdpaivvtRVeAtCxqhc",
  "key11": "2FRxQJVrNkfEmDHhMj46dKSMkzoZo8HFoJFbQYqAgzzxz7xabnBbSsN4QB1qLAtw3XduCnYBwx6cRy9H4BPLt9xf",
  "key12": "3UbmGEUhFe4dgXM8twjrwuMkAvvCK8XzzHAdr5nregkTnjnrAyR28ZSm6D8ddSmNaS8xvC67r73vWfjeyCigBsWe",
  "key13": "EEBYoHEAhtyC4pfJh8NGzVVgAUK2SHsKHX65ZLpFyYDVgFQyrkMiqNMbdD3UsxKcTgfgpu1nTrjBXvEkHNb45FP",
  "key14": "Y7G8LZTgL7V39Bqk9d5myEGmbxXysWZ2kvR9QTLkkj7nTTaWUeQtgfpT3wZ88QJjaMBoa48voV3aR38gemoExre",
  "key15": "5QHfrMVNRWj1RC6x7d2qQZjZBd3ZKevqd65dixV1egth5ico9SLCt7E72C8JFGTjtdT8Gn1nuLEnMXuNCUDihkLF",
  "key16": "246eXaopqDHV9XvqmcQRA7maYEH9QNuGaNED3StsBd1Q4GxvJZAXATXadPsn6ABQiwg68hKt63CvfybKWs6AuuvJ",
  "key17": "5KYafDKGyqtEN3RWLeiXBu5SMsFYr4QaJzv45DmbwCZZRXk1cGXdrqRkaXJfLuXfpgGs6UR4F1iysQWyzppYe3zQ",
  "key18": "2eUHiKrQT6FpYoPi2o2cozW3c7zQnfKgg8ddv85uAeCmT5qYEBUR19i3AypChb6hFvkYFnEC9iUM9KKLmxVciCiu",
  "key19": "5p65TXMkHNGxCBYgMPoSDZEoiKgdsDrE4CgACrBA8xHpoHxeJxTbj897xamHLJRz3G57ZtvNoZr1RAgFRHa5QPFV",
  "key20": "27p2FxajULdkhvDWR48VaFFhxUKeJ7QQ3pC9E8z3em5iFfFec4gMJnSXZwaDDxoBekL2SqCSgX5FFuTKRagdhoiF",
  "key21": "5amm8hyq349qRTPTAR2bFXqAiuFfmzegcAQu5WurRgVYQ51SuSyzWoxTj25b7H4kso6kE5zQqW66GzXCDjLNUVhQ",
  "key22": "1Mg5s4oBad5jUEni8N1JwyB1YjrTnAuoZB1xe2Nb6dfmPqNS9JUxJvLyLsucv9ChaRK8K2au958NrciVB8jw7Hr",
  "key23": "Zd61b6L1UuC1KWeBSfvLFq94iYEuCNJnXVay1r18Vvh12VkBpwBz4THmgTKcgabo891uCSAuG49m6iduxUAiGQP",
  "key24": "5BFW9At9pV7htgcYfuocQoS4Xbpt8XdiBVXAB6SwFzknptrqrjgH3kSRxozHoYxWLecHWvxB5cP2NyjQ27vjTcQX",
  "key25": "3TeioEHBG77bp5xvtAPDLNTg7bMfGHTAr6DgLPa2Stm7V275vmYzAAZ3cAMrd2X2z12rqwRsYP5W5Tcv7oqsm2af",
  "key26": "jNhn23dZtpB4YB48XjhodDXEPdaAfxnwyNv4cBEJQavCeLvds9BRs9nKnzDUQt976cpZshLzu2i8upEUogymy1E",
  "key27": "2PBdZVdrBBv7yALgsFFrK3qfBxjSrdR6N9CTCejePJaatCTrtCJCNRzTebA36dahp1WBnjzrHHvQtuFsRcvhHtpj",
  "key28": "2mbEKrQTsZYcVLc1p3FH1XqxaNSK3QcBxNFWQZKrKTJx6cNurRyNxgGzLJUkJj5HyzodJTzeXuwjTbT71pWv4WFm",
  "key29": "3nT9PaYZZHf8zgHzjznoMpKSi3LQY1sDvtVepcNvVvN2MBTeMqgJbDBno4TMZko8TQ22KVDndsGE59Yue43RP9Ae",
  "key30": "3KKNAXBVBvW1F2oo233bK7kNR2RA5MruVQFdcy4Cq5bUxPQSkwcfen9ij45x21e33xGz2Tz7yJJNM828Rmygj81M",
  "key31": "5ajmEVjqHtqjRjQMbdHxhppmeEVeCCqKvFPVZCt3KzZqwkFBdkkvqFuY9k1WAvEeuNuHdAs7aXpeTx8qvEHYA1aS",
  "key32": "4Tj5tUSKsLYQoR4AZYiJn3kZ3cag52wSv6V5BBT2rBwawXqHonUyaA8JtQAPV2D6uzGGrApKHzMtzUjUw75dMfPq",
  "key33": "J8BusirEyXAyLrgNxRHLMqoFQzgvi9hfaT8WncFuHwr9mLWRrHkSKByzkshj3ttcPxM6vsTKbRZ5dnfwUJtevWc",
  "key34": "58N3hEpMD9J9Wn9qFFTP2os6pVyNVCTNpsaD3BHRVoZ1mp7joBNLFmBhDn2U7opnvVQQvd6wqmYb3j74V1QbzSWh",
  "key35": "2WURzmkX13nLjLyodfZKqRpmdmxxoc6NSvGsho972CP5M8PHiLHJiPxPCBfoogMAn76v3nNQbVGx1W1h5DdUf5cj",
  "key36": "qgS88FK57WxmwdjhewbrRXbLQgXs585jT9jnJuCVwjtLZTFwG1HiRAUY9TEDgeCQQHfeCUzsUYy4bN17diqGXt4",
  "key37": "2Un31iBfkKmEW5gGEibyqPSrFf3UoBrZVxTToTFMc94932DZVjjsDFSMA1dRuADJUGyuPZVtdQakEJBzfC1xikpz",
  "key38": "5veybymSgRCndWd2XiqtspSbNy6DsMCZaBEHYdcrPZkVDE3LbkT5r3WezL3r5GkjzA6HHXFsKoPyAo9d9VV7w3hv",
  "key39": "4xNLfgyND1jvKJoaYYmCNwJHWJ7L1qFNupNCtkK8aU3411BKQ19sn8KDEU6DTyarN58Gg7a9MyrpDr9SwT2skktA"
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
