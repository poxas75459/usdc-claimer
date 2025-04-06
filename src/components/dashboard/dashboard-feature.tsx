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
    "5uZPQhbPtgVTAWBr72aqpvvwdfrKPUPfEaYhSmY6NYpXEybzGeuKeNtHMMF19WqrGobysNvdpdf2NFhTUPJYygXx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cq3mRdBDcsxJ9GWxCTXwPrAAvMPSsim1uyM4ydrmg9QxUYxtYmfrJ2Ut4ShKwYmSWxqjohXR8HRVHxyytjiU4JP",
  "key1": "2iNgtZnkibS2BPX81pyzbCzEu4LH6wc2we1TC6iYgpKx3YJNem49j19AH27yddcbTfVwE4pA7JKFma7JvmSFWtpr",
  "key2": "5vvkNZ3wxNSRign1yjTRV1bnx16LcMNkT33wPFsvzz87NapSvnEyt2dtnJJo5EGm15d1vGtnvMpQmq1sLkPskFjq",
  "key3": "4ur6T8vruvCMt6rpmPKJrA8XoyvVotshXei7eTbwzZxjqVuo3nDzXZi63znRMzMzSTEsyZkXZwikXsYmNXfzRHYx",
  "key4": "5XCHfkLDcREKyYkyBqX7PTKsc9izKWfLiCtFZNS587Up89NJRnb21dwz5UqwHA2qjSWAs62QnALNPfHYc2sMPjVh",
  "key5": "4Eku9P2ueZYf3KuTNAxeeHsaRvafjZrZ1L4Fp5ssc1SxyPrQGB79jfatBExXk9p3cA41zKvTcuouYqVwQned2F7A",
  "key6": "5zg42FwYXzZaj8svT4FPoLnLGd7QeSrw4bEBfhg11H9JfP8VbaWExZg6tpzXth8fBoEJkj7HhpqELdBnhNsDrB8g",
  "key7": "LqFgCTS4eVbAgm18Ht8PbuZd6uRAmjNchW6hAQk9LT6dwE4yqfhFuXF1SZUdNWJKg7QioaH4oToNFdXCMZ2vkd6",
  "key8": "JjDPtMb9zHVpqV7MvgqUbQKc2vTse6E9u1nYdk4eMjmp8zYD8KboCQuNzuDe5zHYZPyKfSexFkL8UjiTHdr6Be8",
  "key9": "23X5gFaY7weySpaXyJmLXZsGt2jTJ97dcwdros2H5YsnZyUiKA767q9Ex4zt6UeZws31BeFngNbWj8ECqHDn7Chq",
  "key10": "5YntJBuH6jGQ64WeLLmhDq1YA96DQwsXEUzMF2gqSK5b8bpq7ZymYNnS72Fgx8zEfVebXpshfkXYmZm51iXjLKBV",
  "key11": "avAdjNzAvoV4Qg8GhMC7FcfTyZbYRv7G6qS3xo3jy6XfN4yE6rSuq1WGpTM3ApEh9rau3sBbBT1vYdLxb3uPzG4",
  "key12": "8SudL8S4kcWC8hd5NBTU7rL1rt7gTXY7wsAQAuw5Tkhzm8kix9oZf5JoGT6thQy7EUSSRKzqnGPbYS2Ex8Wafwx",
  "key13": "2NmiiXn17Wd8aaJLYP1bm92dUFhcLeRzBz8aWvhzz5NyE4HRAf2FGBFvh1Bwpdr2JtVQ2S2jSpdgJfRFmJ9yuMeG",
  "key14": "4k8Afv8hZuj6M3qWe8yiwEon4uZTnLWvWuz1fjWYudM7aUydEfMABvqyuHrG8G5MJziaC5Yo72AgxoPkMKBkqsXf",
  "key15": "4FwonBS3tDYJBwcfMminCf6JewNYbb9fvLs2ps4VPcQyejjdXzxM3QJ2pFdxbEoezSAeKJ17LpspMAyLqvTuLuSv",
  "key16": "4hi5b8DSNX179VHwWTWSMgMu4bmbExYSpzk5xKFngNqb26sE6tcWLK3UnN7bZvBs66tkThRYmJkoHvmiGpfWevd",
  "key17": "2KWAE8AfYw6w2j5RLPSaiKKKVkePpxfkW3w8VY869PWJFC6T7ph1vWCTGcw3Abu9dMqgxK9APRdGCJRmfKvuRayG",
  "key18": "4PWF7rHVnCc5AvAxSEreGigHVYzrAqvyQ51TP2n1bQa8kibgzPb6yZvZihgiVuXEJ45Wpciipft4kBALFGJ4Gkav",
  "key19": "2RB5KyMz6cTWeLD9Kk9PZRj7PQMU9dGegeN4yDvYmT9wqYAaAbsHpJNhaQwQGyAzfaHg4DuubaRLQCsB3q675mKR",
  "key20": "3ESuSc9SH8kfr1cZWVT85YggQ71QLmuf6vHAghkhGKq22GEYBgffftXL3xuCAARiChnWJqeuwGZaoNHfJHkirCoa",
  "key21": "52r4gVVazcKYE6dJ8QJBdBaExfzbU2ME55fLee2SBPonNU3uy3WQN27zDZJbKgCpw2Yewttr856HBLvnr3LdgUCT",
  "key22": "3Q5rgbejc66VM7nC3JWVq66dXEWFYdKPTZMnBCAHBe8r5azYLC746S7mS564dTQZwWLR9ZhyXUw32m7rpobXoufT",
  "key23": "5S32fX4cNysQDDN3gBoQhvfd48Yc6yQBxLbActHN3qsd9ARFKAZ7JmpzAHaSqe3546H7bMJ2sRgdFsM3YfkH5Rzm",
  "key24": "5DEJZp3YaATQ5NqSA5npyuiAeDYwiVR7urURqL5gztbC3ZL51BDctGgKygGX8Tp1DE6ERE64Jaa5g8gF6o2824qZ",
  "key25": "Yhmbsd29fi8XVHs58Hres7fjphhqUULFFKGNqbwjYRdft9VWQJWatGrykDR6ptjhaSDhmbGLLuwt9EGQXzhwvCn",
  "key26": "3mrPq5oNiJ3VQ1xfemGhr1b5QN1Thhrj6K944c9SoFR1smP72WETtvJSp6N2TfykcMX34enK3caAF6MtuGc1BFYU",
  "key27": "45wfhKJtKZc2Vxhq8c4pFasZwpd6F5nYppwbsaKdsNnEyFNFShx16qgNWrijbB1Rvy5t149GJSSZZPbbZP6wppUw",
  "key28": "2dQ6QXh1N6nWJUYMVFHSzVhV9HMyDyEu8vn1HMibbH4tzCDkY3qJkVRgQj3nM2GKGAx24KJQzbatLcFy8XTLVHsU",
  "key29": "5wWhuF9u3ppyZirWDvadyAeCubTV3RooH1c1SATyzLmZE57SWf57WhnPGWVAD8FQeez7oxQ3vRumfqJnE4ppdBzL",
  "key30": "2RgA9VjMVk65bP8t3UjqRJumukvU6vKod615po6xzBzpbQjbykVUSRnRDeX71s7eaJsg11YRg6MvyicXeCi74qA",
  "key31": "22ckdAJSyNkEapoFs7DWANX5qa1uHtP1jYaNcbbNJtPhg8Bau2vyjJmzm4p3KLeX2vSRwngU8SVkfxMktNsSq9fi",
  "key32": "59AiKY7ZBBBY5CuKaBCkf5wJv5ETsmEdujTiy4QmeKCwvUVWCAnNMnNWavAPdoEwSZjk39nwBoKZPRn4varAoaeN",
  "key33": "3VxggMbJh1aEnNk8n3c3WHuqvq2TY3P4Ud7JCtn85CPZCAgFySTm1FP3pHoaQfHh1v31y6gyYt7PpmbZFyXcQERb",
  "key34": "5RJPF5HjASQiaTaxfPCBByomPqJAMkS8GaqkgJy2ZYsZoUjq7iPBnbR9JdmVsuNxKTtrkemPRWbcYigs3FJgBFia",
  "key35": "4nSCqDJbYYu9tijFrPZmDeWUoVkFK8yY2FiNYjKqCsyQH4sESbB7TcDU2YdECHhSHucTbjDTBYk7WxPMxf7HMgF9",
  "key36": "4ytBsWc3f3roYtm66AtAFWg1E8mNPbamBguN9ruaQ6DrGV4aQi3pTqw6MSZPRrS4iCk9a8ayqsBD868aJQ741sas",
  "key37": "3b956ooju7reexGtGzJ3VkKqMgmUDkWJSFjYrtprUWGJcrtwSerZmr3ooTdn3RiK3uL6XxAxiBHQcGX7B7J4R3mA",
  "key38": "4x5dbJeaGQtoMpH8kCGKoCt4JZXbwe25Qj17XLBcNf98FoFFFBwiruA7WkzXvwV78N5rCRbRf45wP1Q4hufxo3SV",
  "key39": "2MhW45Uzfx8v3b3KWBTtf5mMRxGYaSQkBPsiDLcnAQg2GZ84pF1mLMuN9MAnssjreBTTDXrXUhY7DfZXHA8GxTDS",
  "key40": "22VhTPLapLEfx58mPafYwotjDuu2esvKbhpGyjWZLnYErVdVxTWngAQpVQ6VRYKQu4uHWNDAgiuorG7vZivj7Y3a",
  "key41": "F2J3ti4FFgd5YAJ7Fa5gBCSYW541cwnePYdHiMxNQir97L8CM4vzji6zutFyteuRSVxUh13HoE5rtTStcc2f9R4",
  "key42": "5roNA2tU528CD2iTQQLT167Gmcuvp3Zy5hsHjG5x1Ey67NTa2A24xy7ewgYGeHXAZgfWimAC1BJXpk5JMnXHjnxB",
  "key43": "3FwREPJtud2K681N7vuQLDe2JdbpTrsWyLrGVC6H5mMZ5ugLvgBJnBgxSVmefArfPP5xYwxKW65fN6aPz6mSNNim",
  "key44": "3MidUVeQPmKq1yiYvtwYAmN14Pjn264gu3tUgXs9jFSLST82foVaZK4A8DCiUB6eG7dnRF2FrHwZygKjcJoCEWkH",
  "key45": "xgeTmhBgHady7Ysp2Ehvfwo3GYgGk6mgELJqQpgDEG5Zbg2ScYxw5VFa5dxdBQvwnbsKvthmuKtrwpho6zsB2AA",
  "key46": "2fDSBLVBbGbzXMsc6GTnduzVufdnWkUNWu14pUSAjydLWkhPd7ixLvqS7jwgFyuB21Vu6dSLr1HkDhFpiQa41dVb",
  "key47": "5JSaaSdEzVvGeB6BJNoexsgmmHfsXCs34ZABS9Y4TKgeEtKGAbW7E6YBrah8PKqxt4HmAd9NPxonUEFB5Xe5UsEi",
  "key48": "3s25iFZyDbG2vRQjKf6u3ukenWgAkgoRYCLi5CwpJr2qehszd1wafSKA53pTA5DKuLUfkbebKq2cVgz3Vfb2BN88",
  "key49": "5xAY24XqrTuDfyJy4sMY7dEnWWKE68JibBifEjCjHe1c2CaR6S9G5HVMbVnkSHQHiqWYMPNLeY7QM6uZL1CJcxZZ"
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
