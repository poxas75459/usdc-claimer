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
    "4s94tcDGMYPHFVz8ki97BYAHXfqfYvAJZR3NN7pUwBRX955LCvXcGjFkGeC2o7RRxc4h4S3AXjHGzEGVsD16SJ48"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3npTmRuAVArc6G9nurDDZ8H6d5SRwrnCGTfj44e8UiHinCL4wkPhkf1Mg8t8aRbNppQkKv7JbB97xR8feiLco91r",
  "key1": "4dkc5gey6NrP62pZ82JzbtcqXMJM4XZKNA5A4oMzJDNUBJkfpFvqNb65t6UnC9jM3EJ1NbftAhghpSYXxHGs7NHX",
  "key2": "43GnQacKwE96wdFZeDPP54S2N4ACy5gnH28qCtEH3yjbunMm8Q6stmJLT5GDhZfypcm6ZHUfkaVa2SFepxnzMHV8",
  "key3": "4MKcCjNYRDK7c21rTK8S2a9pUr8uCRqCcgUXRP1KJL2n8xiu8h9WtfvyAHuJhs2HdG63tgpgjLJbGPyh24hZ4tJR",
  "key4": "nt94Jsdy951g4m7jSCPyRUjbfY97Hq5UpY9x1GkKZsm1cKKoUipYkDiEeYcFyWvnRajaESAWYMgypNLTa8ZF9tg",
  "key5": "331No2oCVq1FtcedmrfYez8pE9djAFD7ooKgd5YuQSPTnSiAi4LsP6eXiLhMDCGDEY3AvkeLYFcZA8VK9bdad6bv",
  "key6": "4oA1gmSucKwf4jtb9LjMvKLwLgGptgMA89XccydBum9nxTJLjvofGpN2T4NLEVvK1vsHGHq1VCeMyvb5U4ginX6i",
  "key7": "sCtqvBxtSzNCGnb6iLUCn6c15FJVy6oJtbQo8cT1cvxzQNq9fjPnYK3zLPBXB8mhr4oLtqzQZLxMFfHqbcwYSeK",
  "key8": "4xYodjNCFdNfu5eznkK7nj8cLPADCiyjd1vk4xNpAz9Fv7d1dciV2Cf9cYHP2gC1HiivugxLzgt1c36Ynp3S6S1h",
  "key9": "4T8nG2c6HthA2BTRkmWGtwiC5vfuPQ3wbuSVhEmWkUmoGUt81d42J5nHT4htfhjvChnTQx1NXNQsqZ8eBq23L2mn",
  "key10": "5ad6srh1E4mEPdtU4ZUvEjpHxZygBgvq5D6d87Nk9UHRxNTRUsFq3ftca13g3fzZApN6JG7uMKQqzxbMyPcw2ZMM",
  "key11": "66TQu1CRJwVgD4ANo2TJQ2FZwCeuPiUgezN3PtKeQFGnbtu9aSCqXAZdwjYHgzMEqyeFEAbvXLVa2HHE7S1c5gwx",
  "key12": "4Lcd8Kq761eZvuoo8CxJM1KBDV7K8dg4PPN737ywpUGs8KNgruJ1W3ZpuiowWfmFC6gnVPdSPiafAydLERm83Hcp",
  "key13": "LkLjaMrk39grznJsMLfCWDJYyf9emn9yMEEkQmfaHLHu8D5Bjf5kE78GgPFe2AD6g9Bfx9AUkqP8n7fNdNH82S6",
  "key14": "2NRAaQ1ZQq39AaedHuGnzUARaCrjWUroT3i9PLxkpM7U4pmT4L45WLTtGHh8VE7P8j4Q7Gu8svD9mpZcckwvAoNg",
  "key15": "3qb9WwLQghWrWxp36NxUcDLK3QX2CjRNhKtEzvGZ7w6pCJxFeNKQnqWo3cXHP1kbGYXangqgFtLGSnXtBikjLjw",
  "key16": "3vCbDweFe6Yn6xuh17uNLQdxRi2jXm3xUhhrMatPwsSfe3Rm5qJu8zkEjhwsLnaWqHkQ2DtwH4Maa2J8SCRt3d7y",
  "key17": "4Za5bGzMqndrekYA1eQUHL6ep33VbEyPmyDPkvFQTndrTzjVFcPgLDRNYe56jPJBXjKKo33U9mhpXvuLpej1mFJ1",
  "key18": "3yC9fpQZYhbmDGq8xeWKKXU3D94xtobCvwmBnEbjEVoZ4uqFgBVwmcwy6hTcuy5m1E6WnfxKQXp44oMKBDs63yMb",
  "key19": "5Hm6A6YvazH6ewmSKhBnkZxS68wvCtMKgympAm9PeHTzpZDLi6G2mL2PiharkpgdjhB2b2EpqBxeFmqDDyjVLmFx",
  "key20": "5vEuaGhjraCafVpmMZjAqyPsq1MSehgBX8s67upw6vDdipokUQTQzimWkXPvV6xodd7GxwvfpPfqjau3cjcGRdRH",
  "key21": "2CVFJFvUVoD9jm8rAEjrjpVGWn23GbcqKcrEhAH3x9gZuWugrpAU9HLAesYQMkNqD4s2NaQpVLtGjMmZTDZeBLtK",
  "key22": "4emP56X6EsHC5xm5G79CfSZYoJwXs78aZ4pfBWtSYHA6eZJEhWxcmkCKonhvN8k79Yg1Mw8SsF5b5SjvwNbs5HrM",
  "key23": "EiGjdfyXkn15uRUu3XsHJsCxYw7rhdxu5DB3T5i3MqA58Amw9WLk3oiSpbs9tMGiaYGdKPpiu7biRcQrYXBqnKH",
  "key24": "5jVwryurqMxgxq7S1PW139rzttUpyv2Srdwv9aYcoqaAuFmfeTTDSgB1MFbTJnAeD3xVpDQ9g1bWaZiuxUSE6Hwr",
  "key25": "3DeaGN5o2Npo1GVcKYLBa4H272LEnvyhZs1onmXXxYkXPioZGS96S1ijgweZFJiLw4ornFdMGTLVDrpVDCdE9rW4",
  "key26": "4eLrLSek4n7EJrrXosuarNfSCFKZdaUgF7t2egehWD9prGjw68AMpUfGtYtVvr3Cj3QwPAmUVo6LSrTw7QCMcMNP",
  "key27": "rgVoamiAVs5ZonSroY9EmH8ECQfYE1bxvq4fn8ei85Eeby72A7RZsJfgSugmaUj8fhEYZLTVmwVSvwpdY2MnYGm",
  "key28": "37ZkSzFxbrFNf9C82LCRVYPHbyz4mYbCNWXX5UbrSjz9efkFosiDsCErWYX2HbG3jimtyr31JUqwBbNP9wYu2smB",
  "key29": "4QUtTTfBaMGWKrPxCwzCRutCw6RYCGvitBpi5VyrbvHADvxaTVR72jsEVpz9DrJMR8NoY5nfQjvQeYUazLBJgQhN",
  "key30": "57pWvP6B5jTk5mVGJsyeWhgUxScwBj5dJLdstU4wWuq72SRSUVgQHjYHgAEjmdEWmp2bR6ePA8jNVfxn9hdyMXvw",
  "key31": "5zL4BdutS3UfyG1TiycLfRgjrYXyxn1LfMfwaFq9yC2yRmrf9WWCdkHXUH4T8t2defqwYMxGwpj512BSPgtoBGvK",
  "key32": "2gwyWuVUA9QMumwSy4GaNyNLYhcYb9DcyqrsHTvCzSFhg2iA7QQFQ8GyduNKAcCKYu6J5wHfwLranmgu28Fe2kuQ",
  "key33": "5grZdpA2mBaSZbRm9GSv3q1jaFYGwYChAjeCvyze9qffbAbZDyWYKrny1yS5GME5eFapzPyisK3cb5Fk4hgMQvry",
  "key34": "3ry9PKQo2GuRWosUs56hm5wMJdHuVnvi1jiBE77PZK8adHvcZPa8WmptvQvRzFu7T76WUE1ysd77VNF4K7UMP2wf",
  "key35": "4UM8qjgCFsSXUeyXPaD6zvMbxwpcrnQRtJePuZy3PLz8Ldp6qYpTFHd3gE6wRsWJtigAS7A4CfdTPMXhbNw9yXnF",
  "key36": "2jpwuZGup8Ykfo8iDNJZtnvcEeG1tDJLzLLHkEoFi3orZKWj32ZtV52SoYdxUn3UMkLbaD3vwNPw9CfpSZ8eUSGP",
  "key37": "4WyMj3e599YQhi3Px7g4DQDegEbjRU4L2cAfM81VWAbcCSKPD1GmFGDsQ3rveNmJCKeDpisaFbr3nDNWJJ5e6aai",
  "key38": "3Mxe4GVXRtr1sGWC16skPX9hc5LWYRcy4W55k8SNPonWji3dmZ5iiTb3mFyhDTP28KZtPUbfXY19QaLtbYoUWHnN",
  "key39": "2wF4ZJrWk3WtkPEJiU9fXiPfi4kkuRdyvUvjPDLBR3kzdfrBjR2hLvQimRGeX7xNz6niQCCyqPHaSeHz6L1sz6UK",
  "key40": "3ab5ADZozSAnVAECr8nrpNGE3fBsDHcqNocTNKaC69G1jhHeJZFxkN7Wa2hcY9mmtXQDkuhzVcRZzRM2NJF1ZgAo",
  "key41": "2zJcEX5z7TCE1LxoGY5rQyHcCcqveDakNwC6mbfakpSYQTpzV98Rax62tE8Vc1HSC4kTfMCr951pvirPLPU6idj",
  "key42": "5mFYujzczV4Dxpmc91g42f6uzkmDkb2sqJHrKyB5mHgf5YhzagfhTGnYydjUqgMBVnHNvpFUZ44WG6Rw5zx13VvA",
  "key43": "4SUdJKqh9Ki4G2RxcGVpt1As9WP5agEiFXoymgQVYmt4ojUh6o8Qt7MGe3UdMvY3PH9kZN7oatVf7iZNtUfdiNAB",
  "key44": "675WyZSDbySFav3HT6o9GV3BLbnSzHCYpmbPyasni57uJfXdTursr3a1xrWHWYrDJaiFcQwaqKcCVuVQvkywcc9J",
  "key45": "4jFHPueze1n333FDFnuw7kxxGZF9i4YsqQ2tCqG3sS6GodkFCamLtq9wafuXyxLW8hUu5f7aPhPSh9CAEAnJGHno",
  "key46": "3hGgWFQ8186VjRvjhxuU494jUTrCAubeGRbutaf34BPANH7dDDNTEA1Bg9gWAg7Y72gq47F4CEcJjfZ4hJwp45Ls",
  "key47": "4r7DmBp6ZhrTZQqeAAmXsZjb9Z48LfSJEs8ev6WAL8RGezPRxDf48fWYUS5fyC2Y2tUWfv7ZWXCmkWyK2UXfyJib",
  "key48": "4sNgq2rmVD33hChkuBoG7g1mbvd6oKkPgcHruY2xx9Af6HxJg1VfiBzeHZDeWnGy4gK8qLqjYFMqMKWn4PKR4nvF"
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
