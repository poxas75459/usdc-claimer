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
    "kwUiBn77tt1zBV8LUxbdYbv5Ph3z9BqbLvAin2qXnZxeGHALt8TWL8upT7G2SHxq5UNbiTNF7JWNygauWVdNFRn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dTCB4gfBgJKFuCnRwxdPcP42RATfcP9kQrq4w3eLJJ9WQzCUvDaaC1AaiUsJ6XDUiMGih66erT89RVNimFDtEnz",
  "key1": "4bidyoUN1ThkNAwiYQmMFfzNASPh5TMuktn2nnxALMsxD6efs8fe1Ndv24HFWDgxyLVGrwrWqYYUEGqgcaAgi6qi",
  "key2": "5Vty8ph5MS2XtwoCn8Zt8fUBvdkz4si313GCgLVypD2x2hBPNdQ1GS2xmk7CwqUpK6TCxApVFAmHybFd6ezVZJYo",
  "key3": "GsMLpRdESkg5w35DphHtFnHbBPokp5TCyRLugdBSRsKiJNAcJgJ4WXuS2o4UgPjcsATwm8bW7rtNTYcrkchdCmn",
  "key4": "5WSFRoszGBU6sBTSrvnGjHkm6fy31DvZKgK6utHzXBWcxLW1uf1keV86bsX6fiDhNjABeKzc1yFhuxprkA6Wp2xH",
  "key5": "nvdKPkkjkfUSJQcGbZ5m1NG746mpGS9JNhLZGQtGyPfszJZ6JmUHpHVNETFuAtFrQGGhzZqXz3QZQDbM43hGnLq",
  "key6": "4wWtA7rButUQA8vdrBvGbBzaCVrGpwtRQCzUE32j3UxTohjMbi2S9wcyCm8bkA1oNxkPNsZFFg9gR9jm7cy9FMkA",
  "key7": "5nJJfnD6wpEXeevQkVB3TdHVuHLCFqn4P1iR3TMfbNPKAAdoSnd47k4CzVsQDT2SnAnCfpv5ej4FwK6PT5L5pE1k",
  "key8": "5QARkyvxceH9GxfwmwdMjZYv92Zrh3LaFs8Jf1DPpvABmb25Yopo2w3eb5xRfuASQkuumk32wMTJ3bbpFDPgFZtU",
  "key9": "2o4JuN5tFPLYvASnfsPBkbp1k1G1ygo8ZUUUidei4X4gFyo2y1UmBysFRF711h5MdSDEBG4KbCRTYhi1H5RQYu2L",
  "key10": "4CnujFMyW5TVLCiWvPTtP2PkDvAHEZ5V55WqyPFFAHYXtPrNHiYwXxcRgaB7REQjio79D1BW8H3dwkSep6djV8cL",
  "key11": "5joeU6JM5DwfnYJ6CoTakrs6TNXGXQYS4EhQ4Uazm2nYokeFk4EUmsoDkNnCWchuvcYVk84VTRS9Se8thjF6J3Te",
  "key12": "Ja7vAwyvMKwBpD5MazWNjbxNez2n6u7yyn4NQPRExebQAUKYXdPvnxZC7uSKuWbj8XGp437KVCyz1i4PLTLYXJF",
  "key13": "AuPut7YyqRSS2YSZvtdNVMWjpyvMPZwh51aGEdBpLVrywYATjTzv6RfY2Hc6UggMw9dk4cTd7bUzSuPjPQ8gfHe",
  "key14": "5R4PxNmWVpriTV7iYJBtvbQzYcz5x65k86mQF1qnq3HCaWxUf2p9yD8HbvJB5ZCngn7W816XdfoYg3vS6YATWS5Y",
  "key15": "5qvzEjxMbhk9bkfmaJjCk93VwpL6pX4t6HGxfqqd5Nqne6RvJzfhNYPuJiDiTT18832Z51kwxWk1krcJUNefTn1N",
  "key16": "F5GDoZSjhAkdrFdg4NWAqLYvkHqUKaEzHr9g5iHaCKNmaiKq8YmoGCi4H22oMrHSUj7jLqDQ45wq22fz7tAQT7B",
  "key17": "oFXQ6JrRbZeuRu9e5BPZrevSHfZyUzJ5aGLS3pM2W8vySLGaT5kQ2kmQ4NZcRgiAxRsY4LY9djskJJBVy3N7xD9",
  "key18": "2APy93Zm727pff3MnL9ziQa1x1q1j3oBYYGTmhh4w5TxxMzMGtDXVaVKzyWGbf8mZVFjMfmeErzL1oSM3qDrgo6k",
  "key19": "3phmKAqC9VrJzUpU83gPKgAXejmY6yF3AL2qPz1AJYFEcUeW4cAVxrJDQjePCUJcvoWpapw1jeuEHmkPG1bfvKQ3",
  "key20": "5gdy1FihucM6tM61pbpoj6BRW5WE2NpZTT6zsFymQMVo9sT68EfMppfagCNuQRz7po9k6dgNEq4DqMsAfRXSxbzm",
  "key21": "671BTRVMhHt93vs2ZEXYrHkUVtkrTcWnoY2q4yc2wwqLquGYqrcRHkZuttMLha6H43wxhzVUQ55k9GKNPJCzCdbB",
  "key22": "5etVGi3kymBL4oYmmguJPaBu8uVhBXnwj59FKK7MTJgCHtGUej4PKE2ALzw7kcQ5tE1NkozvaPZyL5GgMDST33ma",
  "key23": "4rajpKQ6TbngQaQ9eEAJNq6U8KwGnef116n9qj5GggCnvy67HUJkBSTWYXUapdLjWya8EdbTQt2ayjtSBjSnNjWA",
  "key24": "NWResiWddocPXdPri8bjVpyitT555PuzKhcf2iZryV2rauYmx11RdCEtp2m7Cae6TbaSPYF7FNpZFfu131XydGn",
  "key25": "5Zb3JdjLPrmyXRaL8VwWASAGjhBWthaaWvKHF5sj2b4UM9qkDTHgTrkyqJH8ZpZMMyYx3pqH1qUkXXWyDLPTLxaz",
  "key26": "561ZF7XsevPRzpcXzYGkd8HBDTnuGJc8VRn2SYsWH2azwRcgcDXqizGtvG9arHPWsUFfAu7UdbCEqZ79md3E7J6q",
  "key27": "3pXVnuUxK83nuQkp28RiYD5Cc28c6oir4D7SPxGWBEQQQ3RP5F8ktAY1NeeqrmMtgcddnoMqzGnBgA2gpTxojJnd",
  "key28": "2MditheP7a7Lz1XnYFaNKwfJB5ZCu89o2EvvZiCfrv5v84UZkJkngCBLZHSeTTUwdsMZhHyz1zJk1Vb8HyHJiXgY",
  "key29": "2jDq24zeHcEXC4aPxbEDSsHr9pHw58kS5aHEP6Je7PUwMQj3ubiKEweuBW6x39GkN3tTDMEsLmjr3HVBodCGSbKW",
  "key30": "4XrJYuTvDmT6TwzVH23z6sU2mBaJZongNpZzoHaappVpNYaw21oXpz5ccSDiNUz21iuQcnT2LTSSjiH78tsf8ziA",
  "key31": "4FihBjAQcbSJAVChGGe481bzQ1CXUDLcrDwhAihsTwRev3rKEXjGDQRm5iXuoSGK2V6iFQ1ULLPk2QtRVAJdmhBy",
  "key32": "5U8gKCWEHJp1WS3qotEedH2oMbt33PzRMZR17yBfQxCmNWv7UGC7T269RUdVjHTLED8kf5TdP6AgH3EC4duojJa",
  "key33": "4GiyTUzddEEBboKf1gHsSp15uUHux5jyER9QrYqdq7EVPsDsfnA6fS1qPzrvrKgzVYDh8g56rDmDt1BuxmzkbNTd",
  "key34": "4HuoYg549shz6Y1MSz6moKRAe3uYTYsNbks6kHhuEypGSMwtCg9uRuiG9JV3WXKSyWanBqdJ3p1o4L3cRymZzBSn",
  "key35": "Z1aoFhYqTHZZd2qoodBPmWAGZA72qNVuztvpQwPUwQAgCV4LN93dVG8LcRkesyBQ1qFDiBcxe2VujU854xufaBt",
  "key36": "ndrKF9QJtFuxrounZLH3VXX6cPVQgdPmbDAFPJ13gJyQbJafKpJoQ8x4cK3qs4wHUG2bKid3sUdHzHatNRhcE6s",
  "key37": "64hvTA4cVvQ7Yjb6CrSq3zcfUv1vAuxrrv9Z7EBX5e9ueNRFsAZg4rA5VmWPg6BFocdQte8UVs5apYvgb1NZhPCz",
  "key38": "52RCnTBK3jkFzLjJk7KrGDKXyrQuauVFpLKQDqLWcBjKavZZwrMijNqeCVu2VYTBSVLa1vXW62h1gJV7MjbJVsAX",
  "key39": "7UcSpPLYLX3nHysYkmrwiuxuHgSyVW5fWCE1xrqTmd8HcHX2c2kxoddSCbyVFTYrwPyZcqfUt3pddCXE47W1kXD",
  "key40": "3uJxnU4sjyz8vJu8zVgjKEUTdmnzTcDiz4jEfdt8RJofP5Mk92udb7zKjkRrdCuzbkXdgd1Ye4K5refEw4XQ4eTV",
  "key41": "4nrgiszmDXt8jZLrQ2KCJDCbR4Q5q1Gk5MrRkayvbTPr14MVtgCTDo9EZQTnufG1Jfkq77qU4B5fgbBQ3LKD2sK5",
  "key42": "5viJ2vmtiqXVR3bvPTgDVbqxkptA9kaTDL1kGNVaV8Eb5TTND7eTK4Wf1UGJAgPKMRPULViH83SwAWWHe6FEfGL3",
  "key43": "396BHueZqpWvj9RorumKLP3VtU8eVHEyk1UyBHBcJzzDpQs6Wg6wB579easZf1yNzioxWp5TH4KK4PSdUWTKuD9y",
  "key44": "5FiRTxxw6R3aLnmyR6Ri9SmdvD9XThLBxr6NWJBjJiC7vnq2zSMDWLH4gsNkGHtvbgwQgSHeH2zauiPWtGm5RFVK",
  "key45": "XQL1aP28UPtQidBXJo5uSsxe9V8ZywT2UyVNnEDtD5dfFpwfiBKGH3Hc6uHQcqz87jJUVGXs68dXPKjN16wHuwb",
  "key46": "3q8m5Rtm95UsS8HL7E1e97tvYGe3TY1SGM2pzrNdDTukNzy98rvSiZicK1DZj74qz6cxdHiyKCHrDe5E3y9p1VXA",
  "key47": "3cyL7XtLJ8iVoG1LtjwtfSJRrSVx2xGvztmhwqq5ZCKPuxgHaZTYF8zGtWBrRcgQDeorMebLSYRFy8dN5zgY1cin",
  "key48": "2VyVc1iDPXDyKhjj7vXWqgDycMuy2KLGmSmGq9feyMvyi1cLbCwCo3ZRjkGiXkcVc6R6tucJH75saHA9Kszzyjtw",
  "key49": "5E9R3KgdkBrm4v9Xa9tGZFD6Xe7m9oxkpVQRDoJJ4n41ZFaaGcAYNDNNnAK8V9TZDHXRmnDGuWozf21Ph9gKhqrm"
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
