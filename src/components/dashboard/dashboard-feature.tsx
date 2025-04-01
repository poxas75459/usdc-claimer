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
    "4ABUWDLaQHcrzATPG6XBqsPC3SpzymoSQjxtQfNcmvEKk9FoouUhtVo8HDyS4hyhfyPxkP51ARYE5XBy7csPafPQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ac3mrKqe6xRLKRz3xeqcWFJ5ddm6N4KWrrWibAmkCMrfFABpto9WnuPdXSBeV7ZSd6tuWajqJVbQtnxionyRMp1",
  "key1": "K3TDuDEuHx8hBqrZHFq29ytVs4tv9VF5kPHXzDBcLwXjvYixPwYRFZcr6nV3dbfLJpG8qFwS43uuChCvx17mT6Q",
  "key2": "2V7xMjT12vpCHZSPWSdrcxU16neJhgB6VpG7PjSUBudNMj1coGebWbBFunktjnwxq9fJaaGWKEx1hHWx2AuyunYv",
  "key3": "2bkCv5yK6LRH2psmMax89SEsx7YX9SL8x1JBdtwMkR1LswTzSgrxio7Ga6CddDJzLpZHLPAY47YDqPCRjoK3b6jp",
  "key4": "QWKEinWvRcZ2epkQHBqv261Dr7JvrHSiQqHHNCGfMQaf3VLERcEaCrCr82SBWrnSTrT3zR5gDktqV3ZFiQQzX8U",
  "key5": "Us3cDGFoyaWiHeu8Wt7tbxdCZGPymafwtMS1NnVTzj4ESJXPPyxU3ErPTimgayJjP9Vx4Ei2oThoaynQ1HAjcVs",
  "key6": "3mkWuhs9cvasbrczZLRtdktEDVroFhpDQbWtv13fKwPfMe7uzV2AV6gAWSy4GHYDb1jQzA2cj5kcPHkv78KUU8ME",
  "key7": "S7eb44VHB7RNPh1G1xYYPPSy4dQp4JNQnUoBNeUPb1T8gHAjpCFzq5tNKggkmFzZBQcEGaJNRS7kJJyuwnfAyz2",
  "key8": "kAabGpkWMHZbMVMmG47hdPYtew2fJcNFCRFx53PUbbmvuBiayfpKm3QeAZ6CPLPq2cF8Eb4HpJJrw5d9bNRJKZy",
  "key9": "59Cj5Xg9SPPsvbEjeqd1vaTMCUz9xcnwCBGPKr2hWaQo4zewtwGTmeSEq74n3ZyAapbwnN2EtTahWt2DE4tqV1ry",
  "key10": "zFCMkTD7uBr7H8rDCsaLU9qfreAUYpedmH4KmhA2Pfzfw6zBggBb3ifQAPhhNTr47ZcoXYFZnarbdcBaQ2tAUD3",
  "key11": "2SsUqit3i3K6f7fB6NPQuMMKdP5W7TerSV4YtKK3mpi3wHDkjRPsMyJsmPMSX827ZhHckfBqhgwtB77xvuU77XL3",
  "key12": "4J9xtiRycwkFM7BhuYXcpejWUBLom5fqQqmgnj7QSZZNbVnFCCRsm1fUEJd1fQYoUNnQBdpDaWe73jSkGQQ5oSBz",
  "key13": "5ts3awSzfCb6iBTXBmvMjGCarpRGm2SdRcdqzxVmdJUdsFC2Ye6Sg5RFejSqBoaDLv57LWHxaakYd3uCVFWtabDu",
  "key14": "qgDNk2u4PSLibnm8WWfWb1e6MGxxeVGBgPBgCVpwBT3JCUFzEW5WadWoVSg9veqUMxz3uDfBkVMcbpu6S4ayaWB",
  "key15": "4Q8FTciC6hA4nXrDKUfCxHcyK9gVg1uMxcXGaaPqA6Z4jV8Rdqw4A3EU11YHVEBwUz3XgqtZdV1su8CPgii1o9NS",
  "key16": "3pE1gacdtiykkYxu4Y9DcViXD1XHbGsDijNeSSieV3JBbV5bXPr2u6A8kZnuXWc9kfEyUme3cCiGht6483qybM6a",
  "key17": "53ZHVwUFXAUjkwogPcftiaqi3jGaNJkvMKTvDSXQiGW2ewSgNEQysc6kZyvv1Em54NjmWnLgJH1bDxd56RCoG2Sv",
  "key18": "4KXNFKqXJBf3KnCNEUph7FScvXenWTckfeG5MLdDafobhGrbiEXNGwQb7MgBU3DNqVWKVJAsPCg5z9bVhHNxsKrK",
  "key19": "4tJeKkSs7s2KnY1CYxkVYgcZRo9txYVKthEU9b14WCC9ZUfG2bX72cjXcdfAZ77ohbm9gtrbGvgMaZMzP8QFD9gS",
  "key20": "3E5uSkDve9WyYaA7zRumRBv2iTzrr5hhfYoQWySqiudQENVsJXJkrh5g3VG2rxqiXNNc4FW1Siu7C1GVxGyMsfod",
  "key21": "TV5Jmxmfqrcvt1Lm511EThWJPHwhVQx54FxQprLzN1tLak9UPUtxStKM48jVJCartFE4jprF7YtPv8qRgxech7Q",
  "key22": "2xzxS3CEZrfbMx6F9wAS8QFV5g4J3ktvLqSLrS3uKoTEVnXUPni7kFegnhCbpQZoJAcgaTkb5HJTCRfX2Wppthna",
  "key23": "5nUNZVPHxDn7KXMQgTxeVVf4zrQL8Y2KG27zAPq4LNJ7z3mQy38uNVqU8p84PA4aeRumiFFpj4Pedm9R8WWX8S4Q",
  "key24": "25dYKv7jVQwdCcASAKWi23An4dRwCVkCTsdumnn3gshLqyEva4rtQS52SUFkaK6f8eNgRNuWBjgubFAR52GY6Fjk",
  "key25": "5XTyDwy4PvbWaNKoEPyekje5a2MFMMA5AiNqXnRqbCbVrU4qzsD826MdyzTup3enWtCmDdjQtKGjGZLg5YJZtP7L",
  "key26": "3KnR1CkmtE4LenCMJg8KpMDgeCuWMUg9zEVPPESnYbTi6HB3YXWBX36dXNPMXnoRYaRAgrcshSNDQVvyVSW6MwFK",
  "key27": "4ymVjNU32VCRDdXwEZcBowN3vMF81sW264YURAAtcUSRHUiudhjpzVgokcFDRZVnPqBvojuwPF8ycr3fvrPeZb3e",
  "key28": "5HBLFadmhGUz8qnFJ2CzSYjvJzVzBaPV4ijQquumCsEVbUGbXKG7SLVzRsAsUo5QjSEJv4SqsW9bd6MaFbTftwG5",
  "key29": "3QECzmmrHbJ9B1JxQGLzz6qyXnMD2uu6RqZ1h67kwZVsTxTwHzSSg9RCc5ySNv1seE6b8FpucjWNPix31NFYbFmk",
  "key30": "3PHBGfYwGrxYHL2CNeBobTWxShEJGHWcBS1JJg8kJ7B9VYxPc8XTNsumPTDmp7Y87FSXaTsi86ZnEtWgadwTwaFx",
  "key31": "4LEwifHDQJ9ooEYox3pi9p7cbW4WqLMXotKmb4gwRNha3sdzEvBBWu8h7inrcetBK1uAVjAptMgEe1t8BByZSTah",
  "key32": "d9oUpC1XrbJUccL1wYumWo4UxrFu5AoT2yZ2oTqQSV6LMSMuQR1SCMMqcE2PxCu6zqyZ4zjTRepS5gBDpFMhME9",
  "key33": "3KjsLAXibAfXfkbkuLeRU6RVPRyd8viJxUgJGuo7EkJ3ZEZ6Xf9knWQ8Z8TnC7hNF1mXW6VudKSa4WNPPNcN25du",
  "key34": "4sjRtqfg6XRpp98knJScpgmASNEahKkkdrWr5Ed1Ph2mqk9ojieKoUpXMZrDXemVC3DDGjaYfNnDTYjbf5zaQUfX",
  "key35": "eqMtfwSF8jkhabQ8wAv387uboS9TXZojWYCzb1edXCEbMxvgcVAi4RJ5YvLigsMM3srkArhtK1boNv9p9gteAoN"
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
