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
    "2VZcfntaw7fSXVwTkz2G5zHWYnWiSdzgJYZ8Ktzi4xrxfGGTrS8RM8i7QPKfpj51JLToXFQJSqXx61KmcH9QRDrr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EsbfLDEdFQM3YBFGaJXsksbRCm7EuMig5mBaahe47bf3uEinqbCrksxpTJ5MXJtrZjrPLDZXFYBRj7QKkGABkaY",
  "key1": "4jhVQqHpYDtPFHG54gJfcyYa3p3SH1ssA2tF8YVbxDmwJYwVc8a5yxNRFWEqfXeRWbUbPBmVSVVCYPDJvQTRmojr",
  "key2": "4UukZxjSsDjJDPTiA12kzvRKLRaeywUJo8URneLbqyb23bGDN6ad5W973h7oZBppQ1xAkdiWgQq2Nnb972mUARj8",
  "key3": "3gmQbskyN6HwxR53JsCsFM8HWcDx5cjTnLgW1GBmfxJ8FENpfPVnjiHX6isSeNY7JyXEv7Qv9LiJwMz7ZVTpys5r",
  "key4": "4VTSRK8zExNs96VkWofTKNVzSEt8Wo3v1dHcEVdJsqWJ2sxp73k3B6Bg3xhPs48ebVCf51ncDSBWwCvdrWiX7Md7",
  "key5": "2dRu38sW4ib3Y99SViUWiY7iEgcZngbUo5jtiTYWv6KHWKqFzyHQKoyTiozUmVQvmfuX2GbDJyzgzFz3uYi5KHkH",
  "key6": "eU9jWz1pVujV4znZH2ZF66drBnC1gkKHGuRgVPu6SZwGxxFYGBRw14vgD2T365kWadKQyRV4BHjzA5cKogH5apS",
  "key7": "4X9WiguiEs8koTbLu5X7BSMdGdJq8uoq3nabDrWf7CW3HMiVgE1ZMYWm4RnA9cA2cUmcuBJcam8Ac9t5LFdPkQ7C",
  "key8": "2Saef9KenSrJmgrDwky6xyV9SrVWgQmwwEFJpDZTc6c1cgzJ4STtMXgMcbpyENQfpiJdsurHKCAUnUwuDioiz6az",
  "key9": "5WGfsJqmnuFkeZsK1yDTzACza5rEeKRUyBJFdNj4xCSLWR5QAwdBprL5wkEVz15VUX2PN9NfPXRppeoRCy1sDQnp",
  "key10": "WADXu4RAS2Tfd85idJ2P5xiMYEGtCJS6GMySjUfzwvVZnCdHdkkwWuj1CkymuSXiQ6SPTZhBBaEFFm4mwkgSqPL",
  "key11": "3vMAT1ZGB2djiTB5CDa93zyJvTvjHwJijGDCWLYmCRLH64tvxrgmCp6H6gc4KLRcfjrfe7cGcQXUCFkiL2ggQ3ir",
  "key12": "5EaKEnnvq5v6KhUXH1ZtKcRpDEmCeqP4bwxqtbst7czeNNeoLRNwg6nMBu1YDGJAtFozKvLMfpKMWN6ur9MZjYKM",
  "key13": "3K6Jz2bLo8aBimkCTJAS7YxGmhSNBW4AY8j5bBMeMH8Z1hf9MfKyxYfmyeUqFHomcPKzRC44bAQhBDGrJPPN5wWY",
  "key14": "3WDutr8XMCSnuh383VuTEsrknEtGvtVCYjDktWmP64HfvhN41n2DxTy9S3tmqPvFuTHWHZQCz8EmqnRfD6oRVV7C",
  "key15": "3QKFt8xfLYyeEezD2dP2w6aLWR7QKVyAH6WTfkeYXNaYeDtvfDGxCdTRRoUzrFNyUL1dnRsM43C1yMTZoodDvppG",
  "key16": "2cbtuE8ADStQkjQ8dM8dPFjxgcAKJwydvLpJ7Rne5GcnB51ZkkefjYYzEj7U9nLW4kGj7URTY4ZQFmTRuzcTqKVc",
  "key17": "2GaWWb4tzGWW1F2uichowHnidMFT2TogK2FZsu4DWDpfzgbVQbEaaKP4TxhQrF1HA5WwksrfyvHq9cgpdJjixbQR",
  "key18": "W2YXr9sKGEC5827PDrBZ7wP4K3F2GiRQSVfWgPGtkqULaSwQHwhZ638mjRz5E17zCf98Yy2Wdcg4qfb6tZVu7zS",
  "key19": "jWd2tSsg71giFyQtoetZ2HX5sGDgFkC68yfwP3ZyoceCJALg5eXMZMThRGQvPKbY85Zx9ghzLzdPHy6YrwPUWHd",
  "key20": "3NtKVNzUXGLhy5zTGz5fcsKX6LXn9Kb7e2nx4s7X6gWPHz5aLGGk3Lk1tj5AHrnxxtPghMxQafjoa74Y2HhturKh",
  "key21": "TEdAP8QDgvErNyrqq6vm2ygveJXEif2xhXHsDyHpPTZBjnY36M7VpmLZQcmGPP25WbW5aJgRH58VBHkNpJW3MgT",
  "key22": "no3WjgTXa2qqz11jrSf1VmcWx2mFDAmLx8vQnKnHZ5tZt3Q9gnnhVhzHwapjxMrWmUNW4QMtafuMBsoYYqjNifk",
  "key23": "Q2VGv2nWWzGPE3kR2aVYtVFM1mmHTEdh52PxqEHYWT1NKHwamZaZbxQfdxYTUTq2UdsWJr98Up4cpHD71ax3MCx",
  "key24": "2hwvk3ExNUpmbzx1tCKQ5Vgpwh9X7F2EE6mx8ihXVrvM7mVFaiMEfKFVxUiytBi54MpG4PA2pkBxhfj8sAAeS4zr",
  "key25": "3YFhwcuar8oerMuJyonGNgqC6U7rh4CBWdBCu2zmCScMv4AvJFW7M73HekoQkedSjobGD8d5NAYACaevkUenERDJ",
  "key26": "3kTB2JLrCaC2mzxaWiE6JKCypzEuXHb17Par3yHpVR5pwxihgq9viea1nBiv9GqcXz9wyW4ZsBZZ5XRhaGmhzRVr",
  "key27": "D2tgpE7vSDgD4R5wJq1D4SfTZUFve9UzGkfZnTyY9y3S3C6n28AtF1MESRqPX9EoHAQ8Saj6RVLv2f2D11MthBX",
  "key28": "5apYLiZJcbW5RUi6VrJx6tVDqefuyxJxjctXLVdF4tSTJqemVKcEiG3EAnnDMD1YkeM1tB2ZhVa3KS7Q54oeraCf",
  "key29": "4NDLQPvRDEvFHr4qEEPkFQU5bxnd2dkYAtqK4QSFWkrYrfdbHqMTxWZjNQAejntAckhTiTxi6YFP3HVUZ7srbXvC",
  "key30": "2WuY4stCgUEzGMhd5hQhKpzZVJsoCgrJEdtsuXHA7iU1dnqmR9S5SDk5w6tds6seGvDv2kN7AUT2kpicJ178Ho2F",
  "key31": "5UJonps53TAg8aaijSkKwjiF5syg2nVqeUT1WDksbCHfH7UJ98bX1oxrFsfq6sLbPfdETG7kQkqgPpGgdDcQ2rXQ",
  "key32": "3QQbPqDZAVQmzkbVNP5m9KFHQXrRUh7UUHu5H7fgKBH5ovUGAZJnoRw5n1W4knjz9LNLw9Rvkdd9BC3Dg29Q4eRh",
  "key33": "46neKUqRc7G13DPCrpWF3aQHq566c7DiZdUr1cXhSFRpzt2hgJJbHwNgDYgcFoNJQvxKnJuQZewmwTQm28ury14e",
  "key34": "F16jWYgKA7uXHpAQnfa3A8FM495yUDT22Ajn3G5SSer7JdAsWpj3JiyLpfbGfR3dSLNztMbZ98jdmRzWX6K4Roo",
  "key35": "3pr67JgGvEHKJF8uouQo3S8rvXPP4PjqnxwuLNmNkzrdGibsTsbqtPpNFksDUtDk5WW2WfXpSY9u7msCubNpqbPd",
  "key36": "2S5aTru9gGwFxZzJBSPp3rKBdbUCmYNgmbsL2tpgw7ko8aknKNL2dYsJcCztoy2qe4akVbjGFH6wuxTmdGeE517",
  "key37": "5ztjtyKZ5LKvNxFhM9V7hVWRCANjHYRuFoRQUGKXGsMwHkyjc55PWCHdMaRH5Vfdoa7BhT61cJnAupKdvbUnZ89t",
  "key38": "5D9owykZPJy2Ft6i3kJq2hQzFGaBSR1tni87VyR9Adrs8TiZ3EGgVw3AJhfxUkPXU5wQVC7EVb34cVEkC2CSY7GU",
  "key39": "559ezi9fduaff9Jmo2KYxH1o81UDMGMQMdqeevdDsNdhcjwzPLwY34dyxpNucikboTVR3GFmbvh5WUCFhKjFuTPL",
  "key40": "2bh2GuyJFPXPeMZ15N2mjjZqex9FKgF4PYJNigCruZ6yNdKu2SDaHdTGiePVSWmXa8T54SxGRXHok8rYrrRNy2KK",
  "key41": "5oFh5QFGTKXQryJjjkrk4yFVGi38AKSJiQGMLRPHg23d1MPLty1kxQ2FH3YyiWqiLTJDKcVeRcHyWe6hJLMMndgK",
  "key42": "3NateCMWbmo1jpZhUeCKjf72hwXKHQ3TRKDTef9SYriYunmz8ZYnBADSWGBGdgRjGxtKmGP4QcdL3h4aHddMYVed",
  "key43": "4CVuWWjFsCWV5RvHbKMn711Qz4HEt2CtHWycZKiAf8yNGVWk4ndwexHyq2cMKix1GdwLTpS2goDSAaqQ2HVKmkrx",
  "key44": "5y9Xrize8i18JvJgkD96JgTqA4ugRX8sPCA7WzwYaCQ62FNLXHaJJdzA4mJrS46TbHzVFVa77iAenmLHv2srYNJr",
  "key45": "2VnLFHdd9sCtLaD6gf6d9hoFiW9cE9LCvbFqJaaG7FyvGj1RC8jQg2FSF6TqdDykJRWycwjqPQxUHHBkd1vGPyv1",
  "key46": "3AD3LjEywvnv45H6WxphLtM57mdqQAgKdjpauu2cfHqW14MPEFvDxufm2jdeE5z7uMUsnCsUCSKkELEp7joBvsRd",
  "key47": "3VFPdg1SLXpdWJqyYXEG2kXF9tpYDVeNo8vtmJroZLrggrSV59HHcsAiMacDush5kDr2HBpZNAhyYCoAQ5EsPpxQ",
  "key48": "3dFRk54jUeoSWHsssvXEshMUU8qBgik6n9nMQjsBxA2n4npMQUQ5yPAgSRLZB4uSE2oyaCRPpJfEGXM6HaUPBaki"
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
