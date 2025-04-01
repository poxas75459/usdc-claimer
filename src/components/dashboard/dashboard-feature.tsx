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
    "mi4MPQ4LQWdos3r6PyYgwgpt1GNCuvxa2CRtLf8wENy1fhqjWbWNuLmo4B4zFW8hrCB4cepQqA1kUkHXw6YCkQH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JF7KdTnb3m2qkwu1CUDu9XLHTqTQiij3pVWNdy1BvnzNSYyME3iTLVYBuhYN2JxvDCSkmxCTiADqwwvR5e6zJKK",
  "key1": "3Fu77LM3gaVCsapBNYchXoQCbXZcRHV68GPoAhyZEHt9fLctC6rjADzMttswCvZwLN5dVo5QomE8T19bt9tcsUUC",
  "key2": "5FPyxrndqrKeWUeN3uQc8gEQTbufCTGPNDNXFh3y8PkwrbFXMf3H147BWGpgARiaZzoad6pX3x4PmLJSxrjB1FT9",
  "key3": "3hoHq3w7JRswJg9XBpgKp1HQ88ikQkRJ2AFdZPdbvvXVLaW2wxPeikqbevZ12HKGkuszkWrn3zNJ5ryaEUHzCWzA",
  "key4": "4ENJXMa93Dv6v91nLNRzEWa1DKT7H96ktKpMJHhAC3AQsMdFEn5QTQUFbmRqEDMEXM97V1BVYGEReqEuD7gyNuz3",
  "key5": "3JPxn7hhJwFQjzfCSPow7NDGpFumj13TjHua4NTT3iDz6S4P6FN6h2qRZdxfFwK8iZuQVHbtXRmGLVayGrYR5QRT",
  "key6": "2hpG4vLD7Eo1MJ3DRAqtLQ5ECvZw7ehFKpZWcztAJD9DKBd1HZGXBb45ULD2giMSw7RaBxCcgLaSuaoHMncjmkVe",
  "key7": "3Y9aRyX2gjEBz2wj2YA6jaFzGSiTaEaxXQ9iPkEsWXY9wdehjGTTYtAbP4Y3QkurtAfa4PFb3gyTVoTGYKccebHe",
  "key8": "5uPR7yxjqLuRw8VDM1puEhxTxV69dtm7Z59TE51bdC8svLVQ4d2KRt2WYta5qEyixn9JXEjpq9uHodVkcBmDWtGP",
  "key9": "5r2Vkckq1FKssGo2P78WijdX3uVWZBtnyvJFxviNGKhtf5kCpaBXGUjtZuknzbzQw5HyQX6ynyQZw5iAuCBgCamb",
  "key10": "aArX64929zG9wkBsH3pNxsuR69ohSgkRDUpjC4vEZvoAC2uVCtRKTW2tLvrV5aFsDnopmts5nU8fFBPS5d9GDem",
  "key11": "5sRLzDRKQ8HC4jj6s9brdhY8wG1iZaUQGan8i9jy4jtdq46nQ5qtv5UnaTMaJuSQJ9QYKJ3cfzLNNb6WnCJP9mpo",
  "key12": "5uEdtt1M2Yzs7SvANcRMweLup2kxb69juwF7v2EcpPRwhyKVDvvqhJjTNYHTwF2GCi5hLk3BNM7hLDc65JtJhgic",
  "key13": "3bQbm1pWncgfjohHCutzkYBMugCciXsZxhyF1ppcAEB1YyZs3CUZxuw78kUbb6fKA6cSWATHLY2aPZdiQWMJ2ESE",
  "key14": "3bX7ykMJzRbrCuitXGkvvtj4XLxRNhZg5i1Qck12YJszA3Q2eY3orWWUxzkwcpwQ35dNf1KJWTTXMEtshPa3qaaU",
  "key15": "2Dr2Mof6fJFo1nf1Usv7J7vm45cQZR9abNMmV1LrZeMh837pqxDUWGpLfJJu4bbc4XRqYuVboTz6RPLG75UXqZkv",
  "key16": "2xr5AoJYuEB5mY5jf7e6Njgq8MD5Kqw9GpFvGSsZ5KyjyGCk6GxQRoTHDTqtuVggnCVXDARdsWn9iRLr5zBNzqMw",
  "key17": "56exqyCHGHeEqyQmTrWS8iJ82wxaR8PuQFPV48mLKZpSy6b1DCgkcMWn6gM2QDdVvGJaFJvtgkCQwQjDYZ3vLr6Z",
  "key18": "5r1J9ZhdmEtgKQnAKkf1LUgyu7kg3D8edUSgCrJFUEDsJXM5HRzWdy9ufKDcJz3BXEU1qchkgNHwxkcZ5kiECbcd",
  "key19": "xtHUuMVrdKjDyj28DMGRiYxsbFnsLPn4sjeSR1jdYaWEGegLWQ6Uo1m1Ti18Ud2RYo74FiWGiFm2GCDwKBCvFs8",
  "key20": "5FeoccYWzExBK4scEqeAVBNVz7cwcSHR277CUBRoXSHW2fUoBTKQcQAu5qoQfq948zmL3Ef7kT6t77Pu9QiSvAgZ",
  "key21": "535mobyVqGeoPgtBfr6hVdmvEJRGR2R8vyRf7uyUN6JEx8cbYEGWNvwb4wg7C2Rw8csDMuFPXRcAzRTUzXyECVHt",
  "key22": "hs3vo5tFVYNuUWmPZtH5iH2nMLdHzwAbs4hNYBpFHYF5jiRsfRS1aMerR43eUSH2QVfLW9VYBznJZMPcUj3iKUs",
  "key23": "2pbagLyJSjb3jsPho7HB6dByrXPDaRHNGPK5SfX7BWGhirs16Bz5PBLR6AqPVUUgG6mANAp1ZgZgTVeCzGp2AabK",
  "key24": "5NTf3CiP1iM2MMhH34Mh57qQFYEVwtJvkPQ6RGZ4hGpyschxQ7qLCYbqA8ZgoiA4D6MVLc9GT2AEtrVaoc5ffU7n",
  "key25": "5WWLGotvhSP5c9biStgMw6jEbZbeEACbYo2Ehd2UnLsgoUvEPCGfbZRT4uZ9GKkKFRJFRwmmKEDR5rGatxMfVNzk",
  "key26": "2AYbd8dXtKemUnMnU69CsqEYXDTQiqRBevFEFSNq2LuYffpyozKQPzFsm7APF8szg5r179Cc95f3xqqmvVjq6SZe",
  "key27": "3rgUwPZ6ocW9tmidca7unvgsmAemoogbTPKhpXxVWfbqhqc2K8UudEa4SU3E6jcUoHTeqWhUVxaNExYL5vSeGWRD",
  "key28": "2gqDxDpcAzJMuc1VkSPJqLboKD5DLPKTeECDHweUukYL5WFnaaNKisiZeZ3MBy6QCFQ2KJ16zsf5qUAyMKu25Zpm",
  "key29": "4Y2x56YnxNG4N3nWjpQJDr7rJYvRdGJEjH5gGZ7uCfj68EzrQTZzLFp9kpUZZCaasuZ8ZPmw7g93cd8b5fNDNU2M",
  "key30": "3kGRraHCuztjVJHDFS9eZwrEQDxgjNS6MD8veGjukz2wJbcrWAvTKRDQLb223SKUSUXXhn8bzoAzVgm1XgGH1qNw",
  "key31": "5XRMX4NF6v2BNtSaQa6TSox1pXqHLdd1YSAqAKV7jJwqxPuxaU5dDkaFbigaNAU3SBu6rC5KapLf14T38RRUWhEu"
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
