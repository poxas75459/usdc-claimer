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
    "2Y5vJafwjEp9evZ1WJwEaHRjH2PVg4YyPRfNwiedAx68BZgVuy7E7un34d9rM5ymbWRBWpp3r41ZKqZRKBLJ6Sc3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Y1MA2rRbxNbQ6jpEwiKzBF2PgAoAgm7zhGJ1L41RgHxooVghTEQYbFPeDgptakN5MFsUaivY2i3pyic43LNH9az",
  "key1": "32gdWGHiKyNJJeMJXat4Mak1TJeY3X8gZLkuUTxsrAx6seXW537naNxncf2rWZjszQ3X92myqq8Ysr4a85PqMS6L",
  "key2": "5vk8Nim6rhhDFyUM7DociJFJBkavq3Bp9pFbi8ELJuqVcCCHXuV4GLsk6HqyPbrwuXLfYdXdxN9P2p7Ks8zMLtyN",
  "key3": "2WRv7hqxd55NkKsy3r6VeLw4FzmTz5NLHUR98a5SUMJeiQ9cmq41UqrtEXXGp8zbmd4kpmiZ14qAnbzyfHZYXgUS",
  "key4": "42viPqFCSbXjqLUUTipqd8gBSd9WwVCDKMFWa35MmTiSfSxmfg57MkNKESxEEQPWLqxpVHXGJ1taSELCPsrQTMX4",
  "key5": "65SFa1V9zZhVF6ByUfUZCnDu9ZAiTKCx985rcQrYeXw36ip2MfCG73Azn3eLHAFShQwgd1TBWP7FMcbWtW3jRJRQ",
  "key6": "fYYWP8bKL1DVqy6eN2ZKBc6RZFJVyu9HzbJyz836Pc9Zr14xBKP1uEkAYHd3HdudDtUwZcpoAXFYj8bw2KStN3r",
  "key7": "WogZm2kDK4oS4vv9Lzpuf67AGfoXXjDoeQuPuehixmo93ot5ntvLVYCCuYM89BiR1SHWyPEHroxFJVWaCfsXGpE",
  "key8": "2aHhc9cJV2scA9PPJGyhbmK8YEcpapuK2HvYfNUJFrgEChzKx2bmLKPbS4ErosYyyWFs2ekkRKtNgE9ViKxcsaHg",
  "key9": "V1gfbCx4Gx1xVtpr2UVM1qqRN5Pp5Wdk5k56PKPgKzFu2DWQM6vP63yp9YqAjKi7a86Fg15rixxbjj4vuC3YsD4",
  "key10": "66P6u5cPb34oVuBjJyp27QyJFZW9rejcoppfmCEEeH2pZsgxwbwCWABfjCLLHv7my2mVKaYgf2pnyu1mukweLCFb",
  "key11": "5T8Wf7Wuuz9BofHiEJPWv7xG4YH91q9hEjmiaGbrVJchyRBi8Yz4VULDmvGwA1myuQx1dZ3wAQW7rFVX7agxdjHY",
  "key12": "3D9p7NCYmKfpJt1XcQMHTyaNRXecqNQjM2CjCD5FzsZ5vv1MUuve2UB4djDMqxg9Z7tDd7Si8skG4oZN3Nemvkfx",
  "key13": "2VcdtvC2bXiufQsbzJchqqgKGN7E1BLNCzUoBiFAvJzL3wPFBe5auKhH2yzgGCkq3dHNggZV68NvFoTgj13aMwFc",
  "key14": "5DZda1mkwYLohnD3Wtb7g1aHu1JCh3SQr9d9JPWUup9H9jhfBxYKVboYhJnftDd3MGKc5rmRPdg3TnVffjM8aTef",
  "key15": "2C7XmBv5AvCitkyrLLLxxTWHzBMDMxgagT9Ed3xR3wQtsPib937D6aJX2YLEQFonChz679DZoHawdPmoqe1gg6hG",
  "key16": "5MXXyhJxdRRhwwTmiMLVcx68BTCR7QHKcqDTfE1Bd61RS3xf1stemh9ssmujhaFU92UJmFziGYG2ncyRxxBx1u4D",
  "key17": "5FAVJDwwYcGn9MGYYukvTX1SJ6HhME8DpLY8yQT3jj8mUeZUJzyLeWzESuqhGWgerDBs97uxskYciZEghRxW51Xf",
  "key18": "4occfaRWQ6iGprkcojeVq2NskV7GntriFB3CUXNh5EYQMbrmouoXkRCuLMVsCvWLT4CcVHoU8mDW8kRTLanQFdEc",
  "key19": "5RVQJa75Qyv3wUUwcRcDoxKnyaS99Lq165S2FdQYUiQRQWX8j2gNy7Q4qxBDpvony1yWJn6LBFA5zBozY9qkPzgD",
  "key20": "38wyCYp3To5HDLhXMRy9VrpzLrEJbdgstXiwnaYxW1BdYmSg3wkqCoDSCFsnekRV9X7RxD8cBWEpDhSG55ob4cJF",
  "key21": "3VM2efQYkEWrWFvX5sJFQVWdQwDb7MQ1ot3L4Df2mijejWG16yJArNkjAu6PbN5trama7EPBKrV19yYC81s4nHsb",
  "key22": "5n5NLLNtHAqyJmJj9PbUvSGN9XMgKoZZZUQ57SQu7b4z4B1wNzwPMpMgZQsyysMYdprowRnqHesdxCyZwh6DeYgT",
  "key23": "3CDBwVQALDjiFH7o49DsgZJPURh3Wyfs5oSncAH6DjgN9hqGEX26QWWimQhfE4Jy8qCRch3Z2W7HYnbgCS4DqvQ7",
  "key24": "2Z9ByLVwPnX4UkaX8BZBPb1TMfbhoXrbighutqMEYCsEj4JURhnRRfrzsDfDJ4JXFDHw7QHCCifhSkMmHAyxX96r",
  "key25": "U9x7XTPZFNE5KLS7sc1k2A9gh3wsUTCTbAGD3ZCCBt3UgGC7gmvkZ7HbRXGHWkApAH34G6BWU4B1miKcGiVZWr3",
  "key26": "rCrGGUScMUjxqfN75aFoYxdcNvrK5fvxzFZojqqmKPmDztm1PgF23YfLxRaHH7r2gwgqXbhQ8fLszvoKZS2VhZX",
  "key27": "5YNguSbwkFM9iKqrbbmibKMYsJZbnFwSmxg74Z38HDfKRKUvGFqoshVkMKRid6U71Vopj2H5USjio6hUXqvgy5k2",
  "key28": "41617P9zoRrf2ZWrWYH3jjDrrjrsmXyof9hsUyFMiTApVhYz3GT6SpxKkcW8y4zjTbu5f3wurRzyUCwDfdfJ1ZCX",
  "key29": "2kXkXrpab2aDzH7dtSgPUV3sSzyEtyVJBCMWkQ4Zyaw1dP2RmxdiiKUVC73Xta1mgLLYXRQkcKSYHQw8Z8CtFTmY",
  "key30": "3vthENe5Rw4uEaePBWpSa48WCBEnNHQM9EVpGRdQS4vcZHSWsZQJ5g71A4Fw3q56iVyzXR6aQZoL6bWahRfFqwwm",
  "key31": "5wZiCQUVhmzffrC3ChkCvSD2FbFfCe8geAchUmQbUp7TCSPGKSPVmc91BwpibrUSDLxjEsSTkC5sNsjeoUFfxcGN",
  "key32": "5oagY6givXH5GGV4XVxgKFkvFVKMfHWoC5RadLhf6BBZfyqpr7272xyNfSDyMQzG5tUxysCTk8pWM5iF8htsy9EQ",
  "key33": "zYWin9ercHDEaVFjxzQPXGPF2vzqcYxvyizm3yAYbc3j9Ax4cF1riaK7kuyG3tBpToQZCpnsu3GdHDrvzVCHKDp",
  "key34": "54k6tjUDoZd64wxYqeGXucwfEyxMHVHqZCrS3H4NBH2yJjwQkbVXB9scnVVeqBo3nquC9XVW86fc3JUGhXnXNhUS",
  "key35": "5auzENGarcdqJJDniK7kHnUtVYAL8ZnDbZAGjaYLsQiQjyDvjt9UusL8BxXRNKz4tiZe3hFsEzMTiCngo8FaxGKn",
  "key36": "2mC7Fi6P7NFvYmELRJignLvhie4vzFduYeehyToeWiehbdYE7wwLk4eNT51VE3nxcqb4RECSpk15PgXL4kxSbHAq",
  "key37": "2tDDTusfk1EhVzJWcu71oC62PcaQZjwc4fReDkmCHVU9U4fGUvKEUGVVsjMtgDismUDA4FKn3K7mq4xmUzSEZp4R",
  "key38": "33kobUcZ3DTYvA4exPTZAFxtgYaDzTj3UpbhWrnRtcva4nvUhYUb4DM3g3KBWvcH4wMfHA2t8WnHQ3u5FhPhRxpF",
  "key39": "3DXHQsDx8sMUaKuBfNxmwyr66jtVAwK823SgJ8VFDi8WbB9FjunHepEwa9U5HJBnXhd7nCcxUKozsN3c7mPVD4Br",
  "key40": "3LbZGvhoYVfFW44CHUjTNAUkhtqXxChvZSAVNYf2D7sjaPhBdnoxoVVuFomRkKPmX5UxACWJzV8PAD1AvcDuQCoJ",
  "key41": "3Ba3tBYUeowtBjNfacTUrZCQPLS5C5S5kcGBF3bpMdbw2ah5n1A3QMUo7DLgfgrqyt1nBzSNTHcpaHVHdZvX7Ey9",
  "key42": "F8VSbgbcVdUP81WsaUBaaNodazH5r7CEHdL7wYSe8H8dFPuLzor8a9ivT3Zqn5cepo3Ci1yHB5gb6z1RvPpN67g",
  "key43": "4qzmnS6eMoohi2hy4htd2FKvkqdmSo1e9VgR1eU1KMPM2gqFF2L1ZFfFZmCVBwLHzh4VvmJWV2nwXjCBBqhCWS6Z",
  "key44": "jjwiVqtgHeyURDJMVAV6RwFi5aWzyDRaaMAT9czqst6gkmjekNHfYSCgcGAiuLTqaUHRFRdzSevQD71gHXonwHL",
  "key45": "xatSpfCzSVGchyiaPX92shpmsH8CC1Bwj62pDrESbfhyvTsPYrwjqMmkVD1spEHQJnEZMtRZrxFWWiDmV4eQHka",
  "key46": "z9nsbnugP52oirRReAp8gNn4Guzsj34jZczpWyQzvKK2UvkPtskh99Ag8j8c5ZEb2xjtcsdogAZ9WzjHW2TNxyE",
  "key47": "5sJNmobuEAyzGreqzf6cLajtKnuasJPuTU7kaULGy4Y5vCPucRtAtzUjySeQYZ5BVBrdNd8BohNxUFZmYhpAFNDV"
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
