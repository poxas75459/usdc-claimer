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
    "2WbLQnWv4YcBWBoB2W8KucUrvETmLqqAKzCrGdVH4QKQvCoLEQFrbFc3f6cz8Mp6oVjGs2Wc4FMa1PUvK8PFBZBt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9Xf9Pn9HwZghHiYpf3kN1ThNSeZoDdLYb4sBA8GsncjLLzCy9hijcfwnHfH8ZnSnaPcHKorWqoDB6SGm5v6xYBY",
  "key1": "2BHnq6PygUjcpVdbnQVBFxxf4crTLZ5scUCeuvrUjt116RQ8g5p4R7fJCQmzkmbcD9GM9UVJJYjEY5WvvX17xtbr",
  "key2": "3bTAr6u3X8G8kgqXAtpVFFxG7E27dvtnRDEisphBKhRBwH6ktXQqUQdRoztyL81V5VMvb753xMAq4JHuUDuPQUtU",
  "key3": "2tG3BEH23Ed7EKcE5mFybQtqjN7T2Hi1RDPonkGXdYZYjRXBNzyrmkTL6PmH67KrsD8HTyVFCg9KxjKpsdPYPGyb",
  "key4": "5PMzs96HnqvSMzWbFz7TrabSwdw3Uf1pbCXzvo6idguFY3QvUuXTX1CAVknSgQrKAue9iB5Dpm4dCbGgae3UNT9w",
  "key5": "66Msh4fqnBL9czuWiwW7sa1zh6sgch3L2hjgUNMb6P88sgH3zdQTBs3fpbsAnw4JZQxhD8HDbGTSTrDSrVfiyAHa",
  "key6": "4wwxZMXK8Dmr2Azr9serRCNEV1TuRK9QnMUgnaMronoe1jZmytzJjZwCS1yr3nrSEVq3w6rNcUB2UPsDGTBdQ7vw",
  "key7": "6WkUX6J8xPEe9qtEbnRYWjxm5ULKwkcKB2DoifZY4X7eJSvwpV3JLdMo8y9bepL3Q9DrWbKbvYKJ7jcBfwAYREr",
  "key8": "3rs7Cmwrn8KhdXwiK8aUjx98svA7dpPwomsUHmojynow6vbJGMESQMvRGWPAr3yZRz1Yr6mDUgeHdrdo5HgTAJpQ",
  "key9": "4iUrH9UH3Rmyt74rsExkeErELfMvJk2eF8Wfzdmba4emRsxrvKVyVpsLZGmvt4KJ6PXHuFGZBsh8vEHcvjy2NPVQ",
  "key10": "zpjXEho3dAZpxy7Whg9YFRzyBNUAYzHkTeMngGrbdtwx2WkHh3sCdPCF4vKXt3BiCgfquXtBA2mR3DL8BRzke3S",
  "key11": "3rLBZP8epj1txzzgkSv7Y1CA5xMC8qdNRUwXGwWWzUeD79MMrgxCqsR7XJ398oypMuKzCmAcYhom9VC9a6ubBsEF",
  "key12": "3TDXLjwF6QR3QQAG54UKTvBCJRCvyauEkdKSuv65uUriLJgAS3MqZknYFLH1cgBovhMJ9BXLQXgH9TQuhRPC4cvD",
  "key13": "2Jyj53CChqYRbZ6xY7qJw7RmEVA3wSkhYbGqo5x3jbpDRDNVeNbigMwggS9K1S8J9re7EN2CsrePSpV8qPZ5PTJx",
  "key14": "41A5WgRfPM28VKherbaetV7NCyTpNv4GXcYJ2KRWLteVDyJDXB7j1Q5yd4Y1RwbqWYVTyiTGJj7b9cZ6RS8NqGx8",
  "key15": "5j5kMNiUEi456MKGeJbmUphEQZ2bccavNFuc1w69LC8ZFeJNit8PtXD36vrPHUqov6Ae38NtYWmmPW8qatKuzGmz",
  "key16": "5Z9mi7ut6fiXcg9AdTkTrYSgZNyxT2iX6huG5VDqTkugndEbLVps8z6QpVQxEk3rC3HUNPcZiS1hgTUFWxcihp6s",
  "key17": "3khcijKjSA2BgBxhiCjurPa2tv5WGMCUj1xAfzd5hzd2273VCzm1JivsgZNBQVP1NYYDtnUXhBnem6pHx8miu9m9",
  "key18": "51K9vVMbLeYRbKxGwB5CNjPE8hhGiabAYtSdKBP68Agh4a8TFcmcQ9CDAKSBG9Pqwy67j7PWc5UvyZAmFtX7BBd2",
  "key19": "4MqD4n5aDdxin9VabkY9LbyZShKpyeRwFgnQcfpkA5s8qzcpoUijo1mfEgjXkGqbFFtozWj9csiGD4P8LKegz2rG",
  "key20": "5M1DHrTLAbgKUe8Y4pGrtS7RKr2EUF5pn5FADL4tLyzhM3iScEuK2gn57cYKBPunE9Pu7RWVCSYS7GDR27BXSfZe",
  "key21": "2nPPTFRCfVfuPRN9thjaHgBMzv5Syk65CC3xsADivAWHz4SeXZrbyfzS9sh63LVgZzKGGXZeHDoweZRUFiNVGPHy",
  "key22": "36G1hjTSfxCov8a7V7PxpLuvAxNdphQoWz1iZRigBR4mrc2gZ4YT9oTvv5V6MboeW7MTUeq3jbPj8WNmuPoXmyUi",
  "key23": "ANhxqTg3Wy54ERyND8bKgfno2yBbmMxVAA9dhP4kwNhbAji3Vxsb6sqfyYiMfyWDpQc2tnxdcaLKb6Jn9d7jVNa",
  "key24": "XMCVAbv1QRTqwWQLNdExJQ3pm5Rv2XkV2jaL6A1FmxbotsWXgnSB6z9rj7Uh6ScZGRgRi6Q6172DedPwmJM4Y83",
  "key25": "51RD7TAJe7G7ug8pUB3wLwMeWVPTFCfyTvd5rJSSETvRqBHLuPK5VYyabR8DqKFgkiArfkDtC4aZirNTeuyYA2Vu",
  "key26": "2S9B1BJBKnJS8xkUQ1mhheDyP8gtj6zygNCDm4YiLJQmRnyQCNsesZ5LVpGK4xf4nhooqPwUkFGBsrXXmVK8CD64",
  "key27": "jWoRCeqHkt8jR3rdjkchz9RAndBJ6YK1EVed2STXACvqscXCDvw2K8pN8iva4EFSFSsqHXvbkL3ex9wBRkP32C7",
  "key28": "3FbqfkYBp2oNjybNqMStbC26p2pWUT596w5rWT3F8peUzjSmskUAfcKgbtb4b1gh9iFxKCDviKxxHpS3oq6Vdffk",
  "key29": "2TjSUq6i5yynXfr578PexuZiWtPRQ6uYrF5va4wFq1YKRNDyv21A63HSRnid2whPna6t8L2LZkBtNcxvSKKpeVc3",
  "key30": "5cK6RrRbzhfQELAzvaMvShBiYK4gmr8odfKejUyec7h8AJ3cUUnDNCK683YvkeszMST6odbTwB6BpntXyqcdaxz7",
  "key31": "2p5WGjcCuEy8ohMQEVFZbyWKCC7qUKABLKFHP1er116PPw1cJH1PefV9T5SgmMDkpBpjDtnQaQASYGrrYB5bY5Z5",
  "key32": "3p4wEb651UtLjSteFk7Ag8NoMjKh58sMoR3Ju287g4xwycW2HHynKDGZXqTpRrdLMsdsMmch5Az8pZW6dftikvGR",
  "key33": "4g69J8WPFRSkjt7HJgQD7uStS4vUSHkATwxenbjrreJLFar1CQKyhiU9S7wC3FM5QCrYqu7UZgBfLAVt3f7RKGXD",
  "key34": "2dmMgs8yPLrWMenRgDJx3BzokT1NHVn6jLpG91BmZPeyKYrpjHfnTfGxccELvZCXYYTtoaYSHCLrgCp74M1Hde5Q",
  "key35": "4pbX1JJULACiYxYtAQn5yfpJv5tGxax8UTbPskPGT7o1AgMxAq8wVVtxssp8b4HCd1qEHaHxRFen7AbtBHyiKLYD"
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
