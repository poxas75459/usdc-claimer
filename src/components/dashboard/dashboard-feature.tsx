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
    "5a7zbQH9PriBsh8yUssZYbY5K3f5bP9SomEsP5WL23Edqi5aWnWQ7H3XRToBehZWH3QcD3DzPo9dPCUx6ibMd18j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jhzGByX2X7gTBb9VdgFbgZRcjsPnADaz72x5py3CZizJkB7duVGKoDnZQ9rCrnb2cctEVZGuiCRRRnJBAg5oBNB",
  "key1": "49o9CYuVwSivNP6ve5p6F21Hiy4G37wcW7qjsotyKg8UAzjrAo1ALRckpZGfcc4Esn4cygRpLzpJYWmZZBiTUaJy",
  "key2": "niPkjvaa6TZY8YBaPexx9nYbYKXY4xxVnCVRgYKUjdo147247yrGQqDXuZVBTgjk9xp9cDiYkdmfdnw2R51WpFS",
  "key3": "2E9aMjhGuj177u7pQxFxm7vvQ76QB828DPDG4yqvix8ZdKHt2vDbhxS2hAjdxg8CeuEeFvoF6mU7FbGq9oG78eTy",
  "key4": "1bBT2K8VEVjx5eLVLcDywFrXasGewRNrPhSWMrzzGuw7XEnc5CC6pecb3gacczdXztGQdyerZVKcpXSsm1TNeLf",
  "key5": "pZuPLzajJxWSRhha2EgRm1GL9oAEtN32xC1RaVRrUBdzVmAdSzLZRocGvw2tyxaj5iv7mJfFcGHQ3kwAaU5uiJ6",
  "key6": "3fKKfe3J59se6y1yj5TBk5BNQvgtZMDLqzGiF4ZDhZZoF9ZfzgTeXEFDfPHWdvd62UtNmJhUGuzcw5Z8xg3zwBSV",
  "key7": "2iCDd97AY7Q5fWzT1TvGwqZjJaZAgpZjjNDN33ud4Lt4yRcth3WGn3mKZA6ZToLhRuCaPvj2cgG2p6dRcmhZo58o",
  "key8": "JNDyC8maq5pECCNNgBWoF9hNZA3UqdHV913cyhoBjr66RLcenpwWMu2nNXvYEqTPY4gbBDGKsXKikG3ULrUHCfa",
  "key9": "5B8M4M6rFXcvMdbe7CWWYYFaP48hm6DFf4MA3Cic1z8pMJDQt9KHavzUXbAjjXNcyq6qxSxc3VucWGmFywhsVieW",
  "key10": "5zikB5NsxLiL2tqvcenF1fnycaN4jKehysDbm9D1E7jKE4ypqQoEsq4v55AmJJT729r3iGmrV3fJ1ceosmyss8WG",
  "key11": "2zoVzLdD29h7cEvn6N9ws79TfbKLDXmUXxNQUuB81bzZmMzmCDLpqQMsjLc4tpbhiiefCGsfkZZbUyxF8PjakPGV",
  "key12": "4gNVgfxusiKWqoUX3eMeVfBvGDSSqhSbZLFWBN2LDfz2BK2247nDRYpf6UH44aW59EGzwGH8RNgg3NYoNx2xbnvU",
  "key13": "2JvqSh3PYUvUzpcZD2PUmixNodNwQAsf81atQaK7KbMnYhtyNdy4YcBchmHEy373s5NNF1LE3w88orrmM38PveZ",
  "key14": "5EQ48EZV4XPoQHFK61DkpXQcwJvTZuqKtXvETJaZPhf2LfVTAdFRzrr5qjxDVAZLANXxzQ4UVVw3b4MUQBkagUGc",
  "key15": "5HiGsG73KcmViWSG7jgW8biAEw9PtpdsHfhMpBUdYbDBUv4ETsUKtE862zzfT7Dv1jsuMcXTfk6myDmym4uQcrnp",
  "key16": "273S2KFvK7ggbk9fnH3N6dECSprh6qohZGAJYyinCSDqobayndG4u7hPkYoUQb1jjXX4SBcrhGn7f8jP2yYrT1q5",
  "key17": "3rQE2nxBBQ3ZZiLhwtcsTUN93eQgwcbvT87U3e5DQQcgCoMD7Qg5PEQH8zxYy9xP2f9a9KMjFdU7f3AAS64N5VWR",
  "key18": "2kBAVUjd595AeJz8nPCd6Rbk1GbHudqDUSWrjnwUVifYFBsJkwN5Y1yZCv5vgjEZCmoVe94gQydK8Br6s5Atc1ES",
  "key19": "29Fw31fW6Vd8acCY5wvK9CiQCaKiqMTWCsbrsQauzAfHH4GFiKfe5ynja5796bvzcpBVr49jdX8pH2uEjRND8Vng",
  "key20": "5dw3FUuvw9vhT2Uy51Lf8FtyZAb6ngUvSMJAE73VPWgCHmrKXS4KEFeo9aTjMrbizMnASXJdeGrJiK5aFqQzDDD",
  "key21": "o1u6oYRVgKpzhyzReWz5eYBTBKGNx78ypLSTNwVGtqMZi9jyXiXjTvSVKp32LHVsUCsf5TLks2aJXVRZLvTzWQQ",
  "key22": "5QvHHNTzVxF57At5oN6wQcmWrE4GnALiCaZ1xZ3jGTCQ9rGwxKRLbVK1MKFeUf1zPTms1pqad2zY3CGn8GJwZnoE",
  "key23": "44o7AP1tN7TYyvdjxkNo4hPSeanRBsuEZaaSyA42PgM7bXZ3qVDUfTbyBsyhCav4hHZWfyGnRuWCocpi3VRBB7L1",
  "key24": "4dZuSm2Y6KXegGt1eKNqUESEperjtRqa3CxVC9JqaUxY9K1a5RZBiwPmSecdNpDbww1L5ycRTx4doSeQ7uiEANWc",
  "key25": "45rpbsqu5Szayy2iHTQ64afP85ufRWV5UwHSSDgy7ieLxJamNHNL1AWCT3HPNLD68dC16cn5xdHoJGtCrGpCVLXY",
  "key26": "4TeacPnqcQpQn3DTANhzWXVfuNVMBntzkrkkYRSULY8aKWiPSGRKezk9YWAJEeuRMdguMpqc8pMjfec6T1jy6W8U",
  "key27": "bGJybPrNUccNuPjTmHt2KwykVqXaftV2TLwvpKudywtdzAzz1UBDx8T8HRUGt2uDvqXbjDkfMkouGsAAp7J8xPn",
  "key28": "3isiqhW7H2MYuFC5cXuLRQBaKBPrs1VStrTc35ecv3HqCmSSHkpPVNnJspw4LWHtq2w8Y755HWZahvWqLs6PA8Au",
  "key29": "455CPagsxeSWAVuyKZw9yTjz7GK5ZKBsebBGX1kA8Szhee2mxPxABErD1czG6g2UQ3mc6V71j8ES3VusC1kzzpre",
  "key30": "5G3vC9i5w5BPqxD9FPydWfxtRuP8Hx1zWBabUP8ZMj2qtg2VKnNVsatJrToXEtU5pdVBYCsUUyCxj52f9KBivJoc",
  "key31": "5UriMTY6hQgD3EbpXWNP4iidEHVUYkZb1oy4YqFAXnQpCyX4NP4dgF61DX6H7AP4x9UwotFhBZtvVSBDTU1ZGGfw",
  "key32": "2oRpurRGBu18gNBkCVkpTR7aLaKYk6eHnqR5Zt9oVb9Vbiep8HVCcVLEKNA2WPhLKr9CtGdBwdMkat74LCfcPZJT",
  "key33": "XEEQRAFESUQ7UuVu9tYKENZ2u5tdpyKb2zhdkCGCvFF3CweTp84BWx6WGGPoqQYrjEznFZzotQpGTbDze4ayBke"
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
