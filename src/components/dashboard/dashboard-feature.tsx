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
    "3HLdQjtbhQataf8GNwYE9oa4EC4ibiGpGNdUUyi8zX3HEAb4wpSPG4tGTEwEoAUN76Ky2TvCvynkAMQpDCWVfWL3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yyCGpJ4y1v9vzaNk4wKLyaPw7V1eBWQrnVT69mBsfnULfrkPg8NV11LUWH1rxUitXXsnaTdkV3Q96sTqDKWaZ6E",
  "key1": "4pDH2u2iWbyL2KbzFpKhbNW7QuDFf3HLYhG9HmbSs6mLtjY5VQ8Yq9BsZrpksUMouMzApnM3MuvrjThCD94p9pDR",
  "key2": "zp7tLA7tVGh25SzufGE7MBxK76WMrmpgR1DfKSpLfgTuMfQujtXtDdm1AngtKXiTMrBkBG5AnLJ8igxqXoScHCY",
  "key3": "CtsiXdBEVQVaFDiFfujEWnT8jiBb42mpYGVee5ZXrwTjM7Lu3CuBKhj3WSgjHBFvxmMoK6sYN4YNUD7cieivLQS",
  "key4": "3ikPPzQHbKJczqN51CCqbdf4H7AX48fbWyU9aHY5SSY8kXK8Gj71TkxMDAdqqtTVGYG3qpvpi8LWQmwtsWNcRLKi",
  "key5": "26rPoe8XmQSJD3niPf3dVYb7U2gJ8ojewnP6dDLdDohtgHoyktjGL5T8psxETshnNEe8K9NYsgNcXdq7YWatACrC",
  "key6": "56j1cpKniNcp7FaX848JEcoP3eZ6BiaqCrTGmUzWJe4ixqEAAaHasNNaVQftiKb8MQhzi29eQmWLivVQmNqZouG1",
  "key7": "54X7yU7C3mBEQJej1xWALMwKkUHHDfMgm7YXsuEznUxBXGrCzC8mczX9VCiPaRoGrrcbsiVYbagJc9fi54Wis87E",
  "key8": "5GL7qne2XBAAqhBAKX3TCtLjkYD7dRNrQGENPedNsmUaPHazkKCxGpKJwmbDBC4Bk5Hw3C4FgpJavLru7CTG2725",
  "key9": "4SPayFcLwCESo7cYukSjSxteD8PtZPQrojE5M7FCUfSVekU1bAUgyW59kNhX9HjSU3TDEKT8tqKSxnSmW7jdoKdz",
  "key10": "2aBvB7zA4UVpYqH2eNHiZdgyxdykrZc1LKerNQCNaSD44ixksgBBMQ3Sj3i1WK5PssPhVGJ2kJQ5euviykgLEhdS",
  "key11": "5WuULhx8uZDE5YB3d3RTp7BLb4dnyBpshDXxDWs71Y7gD2YuWtkVFwnjciAfYs7iVreEVii7ogQpZCGpCz7p9f1Q",
  "key12": "5xYMNdFPh5GLFvbiUDythxet6LBHwszCt4XSeda8FieAf43vmnpbzAzVjfAX3217mmeqMSmqKXv7BdHHFSDpU7rs",
  "key13": "2N6mmHGqoiBFwde96FKfuXd6Eg26mNnBS9BVFtwsPLgt2oCLviBhAv7nDEsT4Y7TW8m6TTsr76ZgriHbdEeYczQi",
  "key14": "5Bzwi6sBbHtyNb8mVmAoNrrL6FEHxfPKrJe93ZBnmtaX44zdhmBbeH38QHJM1Q4NRrbLxedTcMELceCunFT7uaQK",
  "key15": "52DqRFdp14R6RaBquhtKPiR4x7PuSdNeYudZSMBYLH3E2mort2J5oRvJBL7DPuLbC6S7abgoUDLfPG3F8wyNALTb",
  "key16": "3rXzYTGr7Ko7CRJB95e7TAK6ePYcoMmqT7QPTxgCq8B2vGqdRN9Uwz7rEzsZHXN6rjuS1pXFdD3mCWWGjbVmvwxP",
  "key17": "2JAEMxVReYqMW8y9godcAikuLMVHzfzcKxzAFRNb8g1Y8dF1n8z1LpBQixEySTe5D8WDEGvFRqKSu8NgiUVRkTiV",
  "key18": "4siMpvng5EABvuBedyGftQ7QW2vtP97ttk4NVPHfhN4qq2m7B4wqffMjrw6zMR2Xh7VhBe1NHS9dvjyMfsf7JT5H",
  "key19": "PXQcWmKTjJXAZN7Zmr68UEtTx3yLym4L5EGUFVJ6x8dc1SMwKHLe6JoQvv6YM3AysAuVMojdbRrHGPRFXqLo1ux",
  "key20": "3kDxxvkaU88a7m7DrPJX4CBDUdYcagLRjSZjQBr7n7dHyRehLeHHJ7MaWKRGiLHefrTNX17yzsnJk4nzhHxCeuHJ",
  "key21": "2ogrhP1eNzM4JDUXHsnSXgAexGXxPCQC448irxRYRKQfeUq6gu8ZDXFuYVPFK39WrAcV7NZB6MGi4T89XSDQPHze",
  "key22": "2Hm5r6iupjhDg1yXSu357ZGXVWGeti8yiF8EEsDrtGHZSNh2zqr8uH3LssbGVaVRYkJHGacKVq6N3V6qL1RJkWRn",
  "key23": "D7VVoryLzq1CkHKAk3jugD67zRxGvpiMWzyuKgpcr6UKc4e9SmNV5FhzjGu7EiBk9fA73sXbaGFamX68uiUTemu",
  "key24": "2psAym52QawojoHb7hfexcQygc7r81omRXMyrmohtBPZb2dofniuwbxJPXb9MMfhDcxyA9YkWjsbo1fWNpsq9rWH",
  "key25": "3Hsh6uHWp3QkmXJzsDoRNkRyuMZJmCdauQjRYwTe7yHpCFsyVHLGxVsBRFcZeMZd7DcvK1kkr8kxMVM5HfBzJzP6",
  "key26": "5SW4DZR8gv3vJ9Y3R5HeGaNdyDen9Ls9vgwfAVomfC3NpgrTEddRaczUzwqTEGTjotu5avB4M7qRFU1szDWnVb8",
  "key27": "3zVN71eoP6e1bDBvPhTMxSjezMUzeCCAErge2F1Eca9GAsNewkh81jHGJrpuA15gq6442o8WHgHSJnTLhMbnt7Rp",
  "key28": "3gNkM26uqzauZriVX7jH16ciVqx6GXVBztz76n156BScGSxS2P66PBHLFhRYzWx4LxbKG2buRdDTU79GSrsfEPSN",
  "key29": "3cfX8zMZ83sGtmbmbnAEBPiu1nxZ9XRsKaGAZPQapBJFYfv3TYdFRGWyLTU7k2ZDqypCRKKNSoFnmxvMj7V9VtxL",
  "key30": "31eBCcXkLdg4EGZBhLrBuKrRxhv6kxy7UqC5Le34hpEmVNuLyoTUe86HUXEC3aHq6EPwjxECTgiWyPU4fxtKDWHx",
  "key31": "c6hgKCbkwh7Dr3aDyFbY7z1eSr2Uo91pRZsCjsSFWY9ymuL1ccJSwzTKYFMs6vdgCPftESAeHAqFSc9zTyDPQsM",
  "key32": "1RE8aLJ4UV6KWPeV5Y57vcQpTw8MUBBTP6fsbuu7F2D5HDsqstHoDDBkTRdpx8ekCSwDktF6mhbxLjEUzfFXS5",
  "key33": "5CMtzQMZ6dKJdA5mkSeP3YV9APkjZ1M8fHLvdkJcYjTMYfCpC9Uj5PrrWhMe67sCdtQF8e4xZ2bW8mqVugiudYZR",
  "key34": "45PhEkxkUnJS365cNprhzFV4tfvH7wJo794Hrgpe4sktw8AfzL4aQouYgmFM3oKEi2UjPJDihSARuDT6qiKZ92nR",
  "key35": "vMrXgFBrKm3mm62VjpcAMCjghaJi7qpfda2aCdNkmSrSshBMmybyEJPn9EsC9t8tQ62S6LWyyUEmcXr3zgeMgPM",
  "key36": "61oXJJ5wQLMXhoSdnmQtSUcNn7PngDTBm4sqLq7PfYgWUim9xJwTinmYJvxaDtBkBRhW9teScwg5EqT8nspF3tJJ",
  "key37": "5MsB47afMHH6ANFpZJYrQPw14HjP4HMyzk7yWyw3EEYqjAfvoyuFABk4ULMzuiQmJ3zFP11TEQfKhyKstZryeNQ4",
  "key38": "3Y5hnms7qNyRm27uVw3DQgpkiwpeeXminN9vmkDRg1NsVspMgbNQHpkVyg1fNtqWGwbbFn2nGeT3STekNW2vkF6m",
  "key39": "5RbgSAxEVH9svvCuptUwJAUYZsHEiQxUnBJB7r92Zex6wVLLEpRTAfXGrjr3RwS13vy21KwECngod38KL34r13B4",
  "key40": "2YD59YVRE72ARtYA3Vw2ZLzpp95wirFBYi9fiN8vecks6DLtEJ9sevYwbzdiQRqvFVq3CKqX8fSKn6bNsKSuodnH",
  "key41": "4iqEYfS7b4xvgEere32LjXsgTTkF1q15rMAzpcrFS9AKHVkBr7uDocsgXYuihcpaJ9eR9AjBTDYsUCSGfK7riKJA",
  "key42": "2iEVTwniNueZ7jgUCggUaC2gpPNcoyD5TdEZ7rTcp174Uz9P5zhyPcTRsoDAkv1iViKS4qhxLdTKQ9VwZFsLT6jy",
  "key43": "65TNv3tQhHD8cd2HATwcEjVryjbobbY91D5kwSPuKSFtKqfs9D8rPsZHnvKyS9yS6PYQMrbGRWZ3oeJ2KwccwUtV",
  "key44": "2YzKTfSg5RMAow64yME9JLmbaveeQvePa32ZRbb3f1LzdE1dYfeWACuQw6LuZbukoRx11XvRJUt9dj7wofPiTKr8",
  "key45": "2i4DS9gey5NGykoroCiBaShDTprga2NbCnaV4BwqZu6CA2dtWuxJVyK7n29QK3t5aSupVGrp6CgDv5N3CeeJDUtm"
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
