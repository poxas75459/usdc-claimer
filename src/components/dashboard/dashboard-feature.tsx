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
    "Vv3u1QBEpj6zKe1NEQ2nr4kpDMcu1fLFJdRpocGQoVDQpVtNkZ15AC7L36vHshseCFHawryqPHKoS9bgmazQLC8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vFyPmTiBmJdhXEmU2y7dwaur7u9eL3tfdTSuqn1FVnN3PjZDwfCsrjPAdSrVqh2RKY8VPi8zbNZfgfuzffTTjft",
  "key1": "2d1qYX5pciKhpt98disZtQaPge4RwnGfTX6CgB5BmzDY8EPjr3sQbAekEFMPjvGmPMyZoGyiHxNgTuj39YWP5CuH",
  "key2": "w4RvZiN95V2iBcDTS55JMCn6UgwqZZKXnu1NLnd3fpF1EQUwftuzZFZ2dDsDBJiuZj9Tk7g8Lj6DGSxP8916kLA",
  "key3": "5SXJaRpwsoyQLGuizFBrDukkbAH5R2gqPbKjkF5NYPpWUzdLu8gNSi8fvbFsEiwTUJTNZCNKy6MuA8m75wiJTcrq",
  "key4": "4bzzxUqvpBfPZtQB8mjxivd85nkSAmwLQrHbiRQNxUcH5Y7JAvBDPS8pwvygxiHdad864pGrQfGD3xdRMjoFYTso",
  "key5": "2QvgE5RXz4ZAKnZrPz2R9GZzqUzw3kEBABcMh81VsRDmyxf4oCSbbVkSwQnPSmxRzy3jeoE53gVo4MrcL3kySEdt",
  "key6": "51DEEtDCwhyR12j4JqbAsZb3GGUruBM2Bp6VVhxAs6FobseyoYphGmBNyV5ZUtBk2P674TKhPYsx6TkHM9gCXBy5",
  "key7": "29bcCGoMLXZurPibd6WV33WgDG9h3NYKv8iar2fA4nRpRuUwXkRya9BsbbWSd73CJhcsTeW3PhxGyPxpgrbRRXSp",
  "key8": "3VGV75aEx5goZxDkyVfSwNkeBQo43Wt2oRsf1BxhRgmnT6Swx4vh1qrJWmmQoPWJkRSAEzZcjt2kAZQTq81DbH4P",
  "key9": "3whZGbSn4gahfRDveDGicb9ykdSKSMoEKvpGtaAsbaiZx2sWM1T5tntZ4oimfQD6AdZDDZzBRArtRA1ixzXmnoSm",
  "key10": "3a1XYafuWHAEDtqLkwtaktfdaSQhbd8BNeDYKtdAJPTQkWvdWYbC8WPCTxRxR2EpDa4sHUbGkVje7Vu7bEimtLxD",
  "key11": "35tocLwxFy4K5Pp1NUMt7TyjyczqQuycgTySV5he7RFyyhHfgiXRwefsjGpVkpUYcbu3mygkVziyz3EijPYywHBm",
  "key12": "4FMJ6z3yhUdWZD6G6xzL98JnETR9fhhsZg8SP7jE8ywbGAMHVbYAD1RVu7wYPe4xMnDpExQoFXyeZZf5M2eU632S",
  "key13": "dTYG4dodnqtL4tj8U81cEJDiCjJqqKtMtVxqXPVTFQTM78jn3LTidfDao7SVtppcPn4RtU6LnPa6hhRyvVpqj61",
  "key14": "4YQwgVqQzTVHF9boyyadfqCzLGR4BLe73oq59oienHaLNQTSiJN2XWZT6XBDmSGzPNhVHHy4KT6BbeigPJMBK6Sy",
  "key15": "2A4NaB7jdWPENrJGmccdMoA9DTzHD3bNtQauoGM7x9uGerfXJ4bVfkdRTDS4qW7phvBu8TGqeyQyniwfxiVFgWh7",
  "key16": "4ivsnsMF7SuC13jjoPQGvamW3Pm56kMPz26F1huSH5xeXrZr9G5ZC4B8N2Cg1vEaAHgCgXSJ3BnWJFYgf88bQwJv",
  "key17": "3SFGv6YtHPZusTgU3f3U6DwsQPkrcMQ9xGtWSwvVpTbUQJ181dTdB5vBBke8LT1YcHSnT41hiXJJq1WJMkxHZhDM",
  "key18": "22PshisvfvNmzuT2cdmLTS4B7WJUVpeGcpQa6cxhgfQF3Rv5P8hFCjm8B1aqiiR2q8ikViHKhpzvKwsMpkEFGBk9",
  "key19": "yBxmSExkk9ZxiP6paEB6PVwxqm2dKCbz4WR9jbLM9E22FsW8X2fEV2ybtz6AjwKrKWDmDwe4Z9z6dtLhLLKYZq3",
  "key20": "3uNrvRgUE1HnKMdDCsFbrdBFiGiSgta7E4trJa2vkd1i6Vc3GvSTcJpuvNE9e7nVWL1qQuTrriw99h9G4sD38XEN",
  "key21": "4rLVFaCywhQwoTvw5gbH7pdrXGuaYjpn1c3vQLC8AVJiDnmCSVJT8qWELSZmgwNBCRLYHVo6jBm8SNCipBKYkdAG",
  "key22": "39j3fPjpcTEAZCx9ZnPHyYA76iF3j5RndDWAuMydmDFmFzraPeLXStzc6xN39H9uk8R2mTPZ7DxDzxUkJY494U8w",
  "key23": "omdtzvZkwrkR5e5xTHAPpWvDEY15AwfBUK43vCc6NBvux5wE3Eu9Ssnisr6JHDBKN5DzsoBZ2VjmYSy8dNgtMJC",
  "key24": "kSESZ9ceZh8TVqyaGiyhZbSPjh7yKpWS53XKef5R3k4wpfByJfMYEypTiBnGA6nokbSGxE3K3s1VWwbt1dtDbtu",
  "key25": "61aypXL4LTF3jBi3c2a3X9xZkHUPFMyChTo9prVgxSBUS1Fq7arfCjmAVj7wpUW5WCfJumBfTyHqzxTy95qQz7Wf",
  "key26": "5suAB7DLDStCzFzzaABTLeijWEFdZcBUKUs4xLZNe7jsJPL4AjLV99F3t5SL9B5aiKeMDyxQCUEgopuXJNxnj4Zi",
  "key27": "2qTSaYjiS1X5s5L6X8QtTQAPvywp6DAjFAZ2CSciZGAF9ut7LoiC6Mwa41aAZFdDvfZkRR12vZiPD5APaCa2DddA",
  "key28": "26S15VcSH2iEX77FspUtc13SAhfRMkHrxB3CG9Y26iFL61iGQomhJhusbRMsgKygByGcdsGLfT3GzYbrvHA3RiZc",
  "key29": "4tbTejoDgCJVaY3kEP2Y3rm7c6VKEjfiStsBAyDBgx3WwxpLHYLMW5PbjA4bKyLaiwbB72cZePoN7V7AXunrdH3B",
  "key30": "5CzdyMyNHQjvupvfu7DQXB2qmtunpiFgScSJnXNqj5PkyFqVRBaMAytnGqjD7ez97yGhxhHDxJbVxECsZbt6EQcK",
  "key31": "3vVEYMnekBsUeDoSQw23mkdZkPCzuvxU8i1Etc1gop5cQzxnxagfFTjgv1bB6TaNh4Q14RgvPBzvx52AEYy12AMH",
  "key32": "4cZrYudnAbhPWnRbWjY3Lv2FsvnQPgbhCuMa1N6kh2pyZTpEi3cvzAB45VjbGq7SV2JthX6RnK3furKFLGkBw41p",
  "key33": "2Lu7i6YXFXkGAz4CRCyNU2afg3Avz649BeayAgMnA9yvAFKRKinfYE4xhwRppEziYyYYdkWMtS8f2FgRXPfMQHoZ",
  "key34": "2paWcynHP1j4BkcahSC54k5DxwD4ZJYufBn38JYNRyEXyXePU9YECbLnY2eedwjmTJYF56KQSDq7ZRjmkhdbV1Ui",
  "key35": "36F1BVR6u8KbJQEqsyAW4FmcjCgyp39weodnHpXXqWkBgLBp8geohRsTcnVk6R9BvN8vSiG5TqYQyBaRRLG3qa9n",
  "key36": "4orv6vhSLU4GgeNqokZmy35wMXiWr5Fn5xREy6SCrE5hDyF3QxFzdG4frrh7BLjPPBTpWX24WfZdGLR53aqNbdLf",
  "key37": "3Bw75K2akV4VLKMAEFLy77AkXg7u51nHJfnBaLRNHZqJqnSYHFJjxNY3MqQ4BEpRXGV42rEHmopwQkwm91c5Xwja",
  "key38": "3aH92vyiUtnZYf49XmvTp9pb3mzEE8Eb9U4V1SZo5sCQwFvqkpCZWqkc1NMq8aW4pS6eHWp65jxvFctbNSoapes",
  "key39": "2uhVfJ3PhjggVav4d1CKTiuoQETHoUsEve59LnREkC1K2pti6Q1xASo3rqNJxwYkDZu1XrGyrZh6x9zy1sfRP9yg"
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
