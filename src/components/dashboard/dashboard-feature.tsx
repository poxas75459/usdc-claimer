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
    "48yijz9hzmGPKCK7rtKvpC7UVQQxaB7wiwKCvGLxQLDiAdgujfCWTkxgbFjaahM6s2fzCmNwVRFNE24PJ22N21WA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22XSdX7cBk6LWzWfWX3GFgBWRNGQfLM9TZo3UHgwSD4G3aGBdbsuycDyz7zSc776eG7xN4V51YfCGxvZN5c81vDv",
  "key1": "42Q6adNMQqWAupsBU4smsgDeWzhyniy3erR3zhG89bVxDrkT5zd1gERcFmYdEyo53MGQvM8TBH24BzH37g3dvv3W",
  "key2": "34kfK5DeFDRyz1CVNnd6U3WtNLUFLRWBToQiNGspaEPtxBWkZ4EcDE3iVD5SvjbeKXgPPUegdMi6is4rdPoq5P3b",
  "key3": "5HuCRMGH3zw7NEuP6cqHghWBUYsXg1ShHwD2AEQjMCdotXdpj2TfedHF9MmS5RFZ1m8E5fmtLHqcojD3Q3sTeR9B",
  "key4": "2KHqHpxW28FnDAgqYBJFvQZmQtCE5ckfBsbaJakrJjufiiMVqPDyy3DFcvdpWBbwe8CCtdgfWFzg81bYu2oDBySw",
  "key5": "2SDtKjptRL6w3b3K8oLAtux2ZRs6HepVBJudbA2JEMkeFiB4HKz3SVDt9o8RCriyErdpDCwxmygjvAxPjFNckqve",
  "key6": "34TS1Be88XtwqvJAxXfkXa4QUy22aFfmE2j5vzCTcqgeAXnDhi184rgW5QSyshEq1FfE3ueYf9rGgHayzjL31Ze5",
  "key7": "2xucDAaDM3xNLQsNiis5tjZC5WUVUdWjtLCBDQrY4aXo5X4z9tcNt8CLSGU9WszDZrS5pe8xPRopd199DN5d5eAi",
  "key8": "kVb15SSibSPVFowWtN4B5mBgCgEbrYratSpV9aoGDzNgwWAgaZUnuKRT9vCobfXBssj9vWuGmKCbNDbqFhqV1Jv",
  "key9": "58gaLxUr3RXuYCgc3RdzENNHbiCyBnynoMt5bC585A4ewf1gpUezwwLJDnZbq298fJ3T8hHmkLS97mCn4EfSws8S",
  "key10": "4dTtfKsKwWMMCJzztdmGRsNj6wbGtCBxTW9tuVQ7Ff9RDMMDYjo9pW3x5HK9hwoaLJ2LYQ7BNofpHv9snhmdYpTN",
  "key11": "4LkUyZaSUmwkS6JWe2kEFpTxoNqQVr5FdC8bgVtGBXsYZaBa18rjCSPABv6JRzyHQb39crVzpzSiY97X8gw1fUio",
  "key12": "3ezJ22XqCcx72rBwXfgGYp1ugZmoop23woGMRZ699T1EPgrQhBtVfT66xPXQoyEkEuRyCzXmBqwdBRTPV7d26VLf",
  "key13": "5Gq2Vi6sF3YtPyTJDzcpLp9UcaE6scdAC1pDCHYEqhvY1qTFXxqwxuTgAnmwH9veNMqTMXDYaZq2Bf4PKCRVRkMV",
  "key14": "52n8ysBSpe4F5ZTZSx4zVmp6BXYJiGb3YAxuqVHgB39ymkDQNUdgkZJZE2ynRCwACSmYkNj3JCDE7druqXYWTbYi",
  "key15": "53qSqqJC3nSDuB4JTy8gQSnM5yFfnv5F9uHUfReqFm4UwX4Tyb486HzHrF3Xnovnugqqsk2H2HAr6eABqnhX1KAb",
  "key16": "63WA39dWXxTikDRMWSpix49JEnBLMk3UGhwJezBU7sqziM44GycKTiEhbD4ZP2bEkgG5f3zmuan4f6BZD9g5JR3u",
  "key17": "5iUor5BrmhKpkgKQ77nej8VCmWDifjTPJ2HhrubwujmGTkMGGhP1ymytbHPxg1nxStTAEUaTUbsS7i76Xsae1FvU",
  "key18": "5CMgccEmqaHHhTViemn6XXuCYFh1eLmqFWVnUWuWP7mYwU4tMUAhcCToqRytnSdRsYackRgDrcKXAnn3JhTFQVGB",
  "key19": "3THhxrh4xckaN6wBAymY9GVz2rDQY7vexqot1n3vv88H443jN9NcDnxChJDBgBVHNpd39mcRCMTQQubFXwP6M9LY",
  "key20": "4F4t3APs2fzBvnmDi1z9a7kGAiLM12QUTYrR6LgZbvXp3PEnKCbVMA2oGLk5r8gK2v8M8NcixW5ACjSwUsJDwLHC",
  "key21": "67N76FAHVwx9BKwiawHxretGjn2dmPYkHaJh6ep2QT7VD3wjeHQRR3oQVEcFjsWUagTQFa8P8XgxXjvJ3RDiqRpB",
  "key22": "hFJpAshPc1dHZzf5aMo2otH372uQVZpDZMwo8Zf5eTkQhNqjqZS6QzSprQQ8QjAo8Ms1vCoKvBjWfoisNQqusVq",
  "key23": "5vq71iJSvp2Hkyw8xs4Nz25HMpF5MForZcvgcPUos7hciMXrmy6bVjqzczwuYjTXvSdc2C2brvn2AcDp3KUXPm7g",
  "key24": "2h9nu78tg4FU99JJaCkiE6nToihyy3tD9NFpMuqDSMHzF9LHYVZkAgDN3GB4GFkNGucL6pmbsM6mFKCJC3yEm34f",
  "key25": "5yBcV22gLp7UD4tPLNFmtGYkHBBnusaa1MrFpMBy9Cx6u7Fr93J33FZEVxH1o1UBge9CQZGz5yqgSRhbxruxaAaB",
  "key26": "2BDjBcYEQ8hGgcntZLiERASvWqfmaKneuxNdw7jjPJKYJkC2XwdQrpPMGN4P3mpj8HdhzanvFUQQtwyeLHss32uB",
  "key27": "4jSkeKwNpySPHWP4KMwa9NvjeGn7sjxgEeD7wwpVuuP9FZ4vfPe4DtcZezoWesNBQ3bX3NVM8JX1zLTAbQsJupWd",
  "key28": "4AH2tKMcca4gigsWTdeCSAq45g5uzCpgreoTkuD3nSSi4qk1kS9iPLaVX4usoVtmk6kAXncqmwnJr9RbAhv2bpKR",
  "key29": "2oqhQqQeWvbCarzpCZ6NMng24G5rZ8wPkddd8EX6sb8rzHCE46z4zPYgRpGTe3fri1p6B8CqhyC26cm7CjiVhMJU",
  "key30": "5bQimwCyqidQ9JmyHfyy5Huz5C2dA6HFD48p9unzSkAUBJe45u93wPMiY1dXn15aiaHa4xKCEjC2Hv4bswux8sfG",
  "key31": "3uAs5mKsABwso2ejckKuDPpCsAEVrNgq6H565yzEV6s7aEf4bNw7idUvnMs12beqf56tCeZ1wMpAKjBpuwfo71eR",
  "key32": "5zBFraYxYDXGHfkGvfDpbPHEwWbNcL5Nidy1MVv8KNNwdQqBH3eSyEeNMHmV4a27ukM4oNq1xEnoXZTY5JFoYpZV",
  "key33": "4KpCcS5Qk1wzRATDkwRNfG8Kwr8f5yoxATG7zr2XoetAsCYy2jLp9syzhhBwaFzYgUn9aqmiGobs5iwyfKdi8x45",
  "key34": "3YLZMuZ6vRYP7f17iG3jMipKYHd8n3sRm1K5StWWYxeRHDFwbHfciqc4jKWmUm6Sktd2avjuj3aGD9uVEG6hNaob"
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
