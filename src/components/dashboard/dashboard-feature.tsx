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
    "313jnmVnTavUyynYxDc9c83LjroNxrXThtDdqiNDMS87Y1pjP1YdndqV6viYvVJVnjZuhWdpS7f5HAuiHb9xb7up"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dWR3JBzNVGDNuFFmsSvNnzcv97VRh2eGFPRQ93zdo8ieUtNXucSKoqBvokNKur6XCnqHbifCAkeKR4daJU1mdkT",
  "key1": "4QeFWoDYADhbCnZUwuEJjPv7R8iE2oxcaor87g7fPTTmGRZuv2NwVQABEehkV74qmbh3MNo9NsfEVP3SdYVa2Ayh",
  "key2": "3RCDhrj7MWop4Y7LJnG41CSsBrzcn6uVUCJRuSwtek9Se4oFGdpwfywo3uUUPUCXVwQF1KZVoA3Q7FJYhqaRuSUq",
  "key3": "2QTuJdm7LihKi4epfVwCzm66TiuPmvHnBHgpwYairWYgTBnCh2pntmtrzC6wGM2QgG3tWf3RiRNVjbDYuBCLBAiY",
  "key4": "4cxXCxoMJWcPVjhr7AVYyKKh2WYQhvq2csiRQEMvzAMyuptjsKBz2Kx1vfAvqvV5YnqXmBtwwwL5GPZAHoQb99tD",
  "key5": "2vcZPedkYdhUvmuHwVjt3VtPZYhK2BJdcpvSQ1ULe6beXCHLEYSyHStYj5xoMggtD42wp8m3yP24Ka5rC3dKthsG",
  "key6": "2DtT7uemweR5j8yzSCMJZweTndWTDXh5a7zFF1TgsrEtdTMfHKpUAwtPe5wzTQXNwrnzoc52PmkyixAU2hVYXzye",
  "key7": "3pwjUdmWDgQBG83Pds65tk8p3Vq3uHDm9ZFWw9LmVVVZnCBA3Byn2LprQEoUpa4f9fsqYP7Z8DnndtH7YAxbqVbf",
  "key8": "43FZHTvzCC8frnuYH8bLGExuRboD2DuzuEHzUFadTkChurwBGnv1c3QiMWpYeWFMKLyV9ZGvs7hMWo8ZkkvBpdBW",
  "key9": "4Awt6aaxspZZFQw8Pd9ctmVUVtFbt3HKuoggFENCxWdwzRvKKU8ZiJZAE46PnMCcPAC6agiLFHv5o9E2CcGTABy5",
  "key10": "2n2jc53aAtqfkzgaG3Lw8dzSe9xBfby8eSAdcU4djq7L4sDaKDZhEVdrcU42YJYwvZ8pFRY4rJ4PjQGXXt8WAWAo",
  "key11": "28FiaoERrSPLkNV4PkvZhLeT8Zfu3mdvjNooNQhhL55wiXFCkDMAKVNtBCCny4X8Tt2HDKLZ4yWYTv621bqQUP6G",
  "key12": "5d9653wgV7aGY17UvGwbV5XRY8pNnV1Lnq4h8wxPo6yATyzdg8AWcWVUbYWDpRzDH2Fm3pVhNPUHssb9Yk22zYvp",
  "key13": "5hroX5whDTPeoxE12EEs7YnhazkjVi6QmC9CGtQAbX9rkwBH6FnCGSyMrDeMWu1kwyn1GvnCyysBzdPXav4zVTpn",
  "key14": "2nNB38BF2dX7eotNRkocjAHRj1fFvXefrMtQNSmVdemyBKoawLU1kDstYj3vqpcgARYfm1fm54zKBR8Qf53cDnCS",
  "key15": "4pSyMrmCQnSy3vLV3xG2Jkw3g4pQzMr3aV52r2gTobGGej8S3QJJ3LEf6ffcrAzzQQxJv3GoUbYf3pL4ck78QhGv",
  "key16": "31srMReHbX48Z6S4Q55ie2oimsqTR1WK7mTzKih3LyMCrDzawJ985kWbVSSWyUQ4NsswcEwmzM2TsMjNy6DpxfsF",
  "key17": "24poG3tCzMLsDdV962TN2WbbQXc5q5EJFBNg6btMQk1BoRjX99d8GwNwVNaf49THLhzwgrYLbCBf2gSHiSLNeCgW",
  "key18": "5q9ynTif51REfLmFA1WVZRpESyvPrfx7iybFs5s7bUhCEf1BnegQzhg9siRhEGcmcKaaBvLejSH12csm43fB9B7C",
  "key19": "59uA7uZWFatLtdrc7qXuQYHhCnPV7gQVRK94inL1ncqeXZfpNCq64EWViTgDtBwHXg1Bu4fRwFNg4Pum7rGE8h5U",
  "key20": "4MDDtuo2CBotKPJWy6EzQo2dFYvYYanG7L1rx1LUyQetpHtuEyhHTAraae8FwpZXpvwvnNwa9K8fpedNGpeuc3E6",
  "key21": "4WBcayviJwYixfWdKqmowBqAP4ijtE9QhShjXKYJfekoaESF7ThenWQEzdnpcR6oi9cf9vWSKSGs2WEzsTEPL5Gh",
  "key22": "5QKAuqT5DDtJ1XzrTXSoJmVMxS2ems38qcCRmZxnzHHMajeSZJwoE9LnHgG29PWg57Atgk7NJ1k77yuE7q9c2EkD",
  "key23": "3Yt3F6fiu6o1dGMJU5uYxw9HxAXcMCjeihCWczcYBdfz7F7SvUddxXM9jrduQevVj26TEST9bzupGnJNCxj1nBQs",
  "key24": "NRFuABiAr8W5Yftb4HQ797rdoEoiQ3J1nE2JGpBKs8sbiTz9qaMCGm9BDMmtTpBnsef9ad5nqJVt5CDwkwNJsFG",
  "key25": "2QWKyAyydSGEYcFeAHLpTDLQ8pv99hyweSDkaQVSuMMXKqzXwomZAfhVkDdYgFASTe4wFnro6ASBuXfX96UL7dAc",
  "key26": "3r95rL9Pb9zcEcCUW16a154MgkErHmEwZM2pB1hY6T7gQkCXMEwfiwJb2DXTFkoxBmZc8L7LFjP4SWRvUFQdERZ7",
  "key27": "3gg5v1uMX4k4swRaPwgP7PtuwLfsC8goNTnCXSMk9CJREXui1zwePPNiex4ueZstqtJLr6jk5NTQ8rPjVTvdJngx",
  "key28": "4kD2bfGdPi4nRX9q8NrKAxioK5S51az1aHAkcPCEVFn1mUUbxsXTN16zybWzLMcLDR8H2mc2smyr4MU7828ZsW5P",
  "key29": "61qty4SoXaV77GUQpoz1WY5CdJmZvj3cs5WGBYJYHLDXERSiYiGLjgyGFSV2DKvjZsYiMYJr7Dh2eMGxFA24yzF7",
  "key30": "5qpCE8VhQ8uygyTPv33w4kq8TjTDcQxCEokoBH7yR6hrJfoTQuMQUqDfp9qYdNBSgHGWumF7mrCdEniNWuxCpmek",
  "key31": "2C9kagoAURYcS6t8eGixrVCf8SxGHYgPrymmsJjYCmeDXr6uPsqUtpT6K1tBRduJHXL2PFXMKh5GEAVKQJ5JwuHd"
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
