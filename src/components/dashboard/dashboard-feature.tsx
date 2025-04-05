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
    "446fPZ2TKCETvEy3U7VxaCT54mKBGa4YRG8gFiucCUUK5EfhMy8yTL5VjoXa2WLZHUPVHQmmaLbfj1XPG5eyVCBY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55hwaTgbdvUz6wRcyDs5M96A1VgnKyaN63GdsT2muEwXdmUF3oJJj9qB7E5fkKMaxRswq7nF43MeAmV12h846JVE",
  "key1": "3dmgnRdxZA4MrBSrNKPpQeE885YTj4D4zcquFYUr67vCJ6aBbcz1gDdL1z5X71nyU4YpixVFDYDiygjfNaMopgzw",
  "key2": "56VkFcF1PikZbQjRLpqTmvoC3LBa2qrD3i3hZQN1FPUXy4ArQvp4A7uwU7vHNTYVA2qbdZ4QCx86kQbE2J7oT2Th",
  "key3": "37eKwAap8SGyBt26hfPZFr5uxDWd15wbfu43K1KisJWTY6z5qm7mDfmgztXDteSxHVq8mu6Ea63W6MFFQKTJw47Z",
  "key4": "4SWBxECMmTmk3E3mNCZ2VdkzqqLsgULrof9nog9Cknj8oSk8ev3acHodHVgW51qiGr4VyFbZcNtXbZ9P1TXSjKU3",
  "key5": "61qyx1hLwxeMTLhYx2226fJt3vuyb8vtgqr395ngzaBv1MiAhYV7VkLY3n2EQkBFNcPi26p73A1mdnhhKrhCxg39",
  "key6": "4wPgEucvjya7XzcQHXwXWFJpczBHhYKVSg1h3ZM8kyDo2zboHX21Hbp3GWVY5dj4f27QVwt6SeatSUk3SedYpFTM",
  "key7": "2N25nkfppcGVF331TUs2Zg8B7SbtoeiP5ZHU7ziA9w25SstR6XkGrHktowYaC8UuUmn6XxRo5kr6pFK8BNNoMV5Q",
  "key8": "4PA2Y9TLMkR91HpGhNh9XrK6vqjksSdG9TWpwbcrvDsE9RUFLdLvpWK33uJWuEK6zre7pdLoeF58XEJUva6NYNG1",
  "key9": "5DgY47u9GGMYmkxHg2ym7Zprs62ccPuGtaeKTw6zkB1LSu8z6gZjo7eVAhAxyccNyocWV6EPSe89Wh8oCCMEQYVW",
  "key10": "4M8trzK8QL8nGwTDsp7QYzXEyf9aFwZ68XucUJRYiknd7TdxcWGgQbDC1aua2TzWdpodnkiuDTzeMrw4cMcpawVK",
  "key11": "L8bVqyGKtxKMfuEQeQbpp6rnDE1GxFn2zhHdT36bAvHKbxfVukDdkUwvB9EWDQGmgftZ4Spm79ychK4DjV28Lgp",
  "key12": "3hgScN5UQsRpvXCkFoqtrifV9eKnqWNhJQQrve4A7H2pEw5SzN3KbANXfQnLuccWzkQkBbzPjc27fbJiWxb2Zdi7",
  "key13": "2HCmn71z8kehgPeeVFh9PK4QTp9S3UWp8okrBma94Cn2UTn7muMgiS99mqEMgJsjCVJw8E2TJBTdKMRwHGmqZdXn",
  "key14": "3bBN2PQ3FPa9EnXadeXsRaaoFPxHGfJ5HWCgC1kgukmy5VfJvwGTXDAX8GXaMMSim9q1ES3FEJfPTPTrPY8d1ZL8",
  "key15": "4pXnH1zKCXdoomuNEUdeUcymbFWBJfT6YhLrVs1n9m1mF9GvyxPVygRmDC2Egn232fZQs1s8Q3F31MHqb1csPVmn",
  "key16": "2o2UZrZXRGwCbRwec5mmA4bLBeWYV3Hz7Nw1fbNXshK5EY38U7453s4UQRsKKeoLaoizmV64HhhPxcups35xeR4",
  "key17": "4cvpzMRWzm5wWuyy9t8scLtg3gngmBLg5wcngQQ19s6cobzA9LeT5VkKxswTy5jvzcTviarTN9jHB6kwXy9QdACR",
  "key18": "3tHguX8d84ELQg7JD5ftPsnHz2PNPcvg8qdN283h1ZsxPaGYbBjZjnxXYoSSXLGXD52gE4sYPDGaqEDRJsMwaMf",
  "key19": "Qt3vg8kcGdH6nDDxbFSFhqfAahG5d4ae6hLX1UKU37qMnVDzPSZgNnkAWuB92rFpYRBjupyaHMu5ZjuycBHqnpV",
  "key20": "3sKxeTVo32bdticewRSUnEG4t7rTFR2SxXQNztWH34UzBkxN58GH97oACpmhkVxwDepojhqtXUnvFqtAtGeEoHiF",
  "key21": "5wpweNEqYLpRauY75MeTQbsRToo1zS71U9wRM9jRDEmhUhpP6yxjyRBNiG7YYqaDVUC7CgBWm5MZiPcrqvCu6KRK",
  "key22": "kepKPeXj4whApN7W3zEXorn6UPM1EQNpJUjndzSuag1Fhr8npp4ZaZG95BFfqWtNR5pQBygURfNZF2sLmqpHnLC",
  "key23": "SXDJV6ecEPZoBhpfyKwT1AWDUZ7Fp3ZheLDpB9DjUeBYVnhJrP4CFFrxsBgfEK4TRmJq3CCW5RAXy58LJ6kNo8U",
  "key24": "32FA6JUwhUoSW5TVDHGUjnLpCCrxCg1MnxCkD4t9Zj3Kiw7pnidN6kkFiDpMHpCnaxyjr5JmFyQ6XBWDsJNBeNzh",
  "key25": "5ZgSkMWnUjthAsPS3HvQ6mCbeuFLbkQ4hwUePTTEKNjrQToFsX18fAF281WVGCouCrboanr5DMoYUZWbNEmonjLp",
  "key26": "3JoJaDkjuzEzdeUCYx2wtTucnPP13XiLjcvZtR58kDk5ittBVV5RR1cXAgzJwkN5uaAX1t16ghAWGATkBiuNEdWQ",
  "key27": "55fqvrmSdXXAcVfA8fRwYZHnhfBqcBfhzNf5srGehDNsj6tzVoW9Ejrtj9eBu5NNkcrw3Rd4F8CCyvmSrss19J66",
  "key28": "5gU93FUvUpU4p8ggbXfMDB6xWKTUsZt51LzL8ZBRkz6WUTJ8c18byEiwwTRVVbeSKZRg9ZHi9ZNk7zbU2adE5ic2",
  "key29": "293vUmFmJDco1GfEU9ezXAkvp8mwDkni6meft1VBshPnFBTEy7K9pQaqd9PuDNFnPy7bd8XVpuWH7ev1yPK675vg",
  "key30": "3BHwBZ4j399gHbwDc1y6JYsEbrXYFhJB19u31Bf2PaXhn2uT29TfmEqxHXuSzYfKJsycD9Q8AjoKxr4CwAEEpUZ6",
  "key31": "3Tr18QYv5hYGyuudjfF4FDnTwNtxSQpAsZg88zFFgLw7ukDnErhfBrA4R34E1tKNmanPi2459M8MoZ5CH6mjPJff",
  "key32": "5mZXT9PU1v6xE5bqB5wjtm11h3R1KPb9bWeHMK5mYwfqpR4TkZCuu6qEs1d8K1BYFdhKS8gxzrVnShzRAKkGvSuo",
  "key33": "3Dkj4PEZ4ZBGqWLvkBVwkkTDXkAWeoDbrSDmmUU8gxdcN8qDWkUpfU4QKegoc2B5gnUzEiLfMMS3A8USEybspD5X",
  "key34": "25UVVku2VuYqsVnakgAVpKPXoDKjqFxP4yip7BjL93WLMqd7pyCaGctVPjCjfrZkJ3WrUf9JCkbEdyEW5mCUR2M8",
  "key35": "RPiweRUPfVJoU4SUJG1hhmpWKbW3MvnqoQ8ejw2rothpE3k4782ZabhYJKyopHwLJePsDG4GbFQMei1eDcVHpQ2",
  "key36": "CJCvKVTWJPmo8k4gwnRMNPdGjArrvjMpB5u51mxjEtznDZ59wq7VoBRXaKesSa2snVxVA3xTSQ2QScTXRfYq97e",
  "key37": "4GwAp7ea3MKASkkr6szaUKHs3JPiXzBYXJajY2mnPiy4wtLrt7LaHrRvkzub6UgDQVfPdqgd5YtxHYZgNpKGPS3Z",
  "key38": "5dkijgptSbc7phgyJm2Y8pEatN2Xmxg3jf85ajWkPYSokhTVS1pagbTyMR3hTxvQ7a8NPUvHwXWicSEuB4Hk5q5",
  "key39": "QxS198pc82MCfrNetg12xbUWqfZPPRmi785FL8MkMHHjd27qUwcw8SscARb32oe4Rirb4GtaSN6eQQfL8KxoBBM",
  "key40": "2Es1Aqw3c5hkVrczTKtcKqA8sv9EU9fs4inJctaGAU8VAKF8xCT6NfqQeSCXu3W29n1kXJpYyMy4oqAqQ1z3THpc",
  "key41": "4Cs5uWbS2tDq4jite69WyrFNiUGryXkz94SJe7kHUrKacgjCanWMxaLtxFCQTaiu7SPQncxfxFzvv8aURuFzA9qw"
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
