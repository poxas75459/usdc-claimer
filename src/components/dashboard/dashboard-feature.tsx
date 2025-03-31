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
    "2PBG6JYE4Bg1fTxg46EcV34pgbkmU6SmgnybNJDuvZXJ9shNrofGtiNbcmdHnMZbc5GKgFfyYSi3zdhQ4EFeDGEm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EmPZAYuK4iCPjAQVKbzGqynjufhhY2ZDxwsHoHMJ7tnSDKNxxi89pQqNfJZLfy6i4nhELTNDWNfcwAKokrWCcsq",
  "key1": "5pLguFF26b1PFRkswpSWueZmcVzvj4fWp56sU8gWdd4xFLT22WRJd7X4bqdQqHyxBj1sTUnG5m6gGiTEBvFQwVKP",
  "key2": "24G4tUoFhVptQr2iiTRH3APxDZi6yeWa3v9ojDiMJBj385u7XD15g4QxYR1WYB4NhBexhE5qRWrMTiXvCttbn8rV",
  "key3": "2BA8opjJYzvRgxfrDXpagtbLpu9PioBo7r5Vp2RCSaUKDKR8WsZA9sDnMU3BkwHsS48TYZD5qp44Rh5gjEvxKmzy",
  "key4": "5o8BpQh2CqoqZypiJNHWV5jfnHozv5KKB81EXZtNUptA95YTBC471dCRBnNQzEt85qipBvhpvdfcEzBXCYfxdGfU",
  "key5": "5S3ddMxAXme4zSj88Se2o3DXfaifP9h9WDfqjxLHkyJHE1R3q3ChJbQZ9vTcwUdBmVQ2tf8S8wDgPYXQeCXR42i3",
  "key6": "4JiSweLgJ2mnNHsusviEwChD8LHsHKq2rLjSrki47aYZpbpBhp8qUSwABZ44XDicj6xbhzKucJNF9hat2fFxDdB9",
  "key7": "22TK6dtTcZXnJHPgDRL93mxC6c7VPPhSr9exXUJ8UGcu4HpdLGfYG6HswYgeyB6ndwfxtyRbf741E3fAZsmtykV3",
  "key8": "2zFkXPqtR5anKJKReZ31GXLAa9tpqnNWfDifkQo74n8kqGpENob4aiyZ6uhFha54vo6cf5jmo62Q8nh4EFHvunno",
  "key9": "5Kqi8gGLYL7PxE1hdCWAozwcRGNBZiV2MvSpiPHs91QEyAEb2WQ1SzhX5k5AEsadsNLW4fqAYk9eE2fCiYEseDm3",
  "key10": "5jw69MUuu2oEa2vgZfWBdUyfo3jn5ZMACEPMrg6Xmv8bZLfsyMqqgae7LM5t5TYfnBz5xBX26JaDdDSffuDEUx7e",
  "key11": "3LtCXzeTjNyQeuqYejSnod9akNGQ3WhxFeAtxUe6B3wriPPT83qmaE6tzkHQyisjruFemK2o4YmSsHn2SQebJrfR",
  "key12": "jmm7J5vBK9zvv7CMsfwf55zi62ZCbbzTBNr8t9sJqqWH9KqEDFNVZwDdfJjcKqyaj9g5qajGwX9tPgtcw3av8Yc",
  "key13": "5JSCbcjs48XNfUwrrRQJJXb5dA8aVDDNyyTRWUTL3NeDQ1zMmXepDWKVuvdrCtds1noFnHJFyHZoKjgtFK3MZmyy",
  "key14": "3USgziUKvifQCFCokfmerAxfxHS1cyjgNu5d9oJ8ra7ZRGTesXx7gM7iyyd8FoYiaQMRHyQQvtm2jJEY4xLiS97U",
  "key15": "3K1qaiDpZgKWHWDtj3HTjQpwiSdByrYSNuWH9kRxVKA9hA7dVqKsP8W97HT5BvEmXWYs1awhvtWfoBVpCFZYWZmQ",
  "key16": "5rqm4fGaVSGvmKXs9YuQvysY2SX8U5KcnA2y8FvkQ546bbqLPMbsFFhJp4UmmSyBupbw3YsUKpJuJYqy3AZ2k8F6",
  "key17": "5nqJfeW4s4dBrWtW24zfCnZRi6wnqQpingVt2HYNW8cSP17Pe8z9cyvStV8WUpEDCKRokED6oWUR7UgaBBD21Gqc",
  "key18": "4Q8Wf4qSJ2PMbVEq8cb6W7CyC1Q3MALvWncyHbW4QVipC3vgaEtZvhxjdrMvD5SpT7FXLbQYoRdGkQ34VJsqbdfL",
  "key19": "5Rn5y1nnp25LAoqigJWqvPaJvGxFL7hvJrx2RERoA2a5dg85fNAyiaqUr8vdxG7upM8xU9eFYr9f97oNJUwxDDei",
  "key20": "3A67wZBzoZ59YL4L5cUsPPo5gavYMRk1nNjBuLbTQLkdbMQ2VC16mjrgkAbj8HoHyTi9vLUsGPceAS6KBxFj1r8z",
  "key21": "sCn1JPDJv67KzqyuDgsABEavC8nN658RadJT8ixSkgEoxarWCPuZRc6QegiBxhTYY2CPfTZF8tsW9wmpWA3kBZS",
  "key22": "4c95Z7hUmdj4GNXHrwL85YbtxR2npQURs1Q1fQKpdC8UMZof8PN3KzCHZLZe2rnA4PMmmyowmaoDESaU9yQc5wpD",
  "key23": "5Hu6kYGtWaPV6F2kp45LKLeWj7eQwehpW1szHDUYNyAKwJrMraGRfEcbp2kQq1GqTHKZAKBMYj2ReLRoBhdrGLxh",
  "key24": "e9Lz8rVHiPHGhbia15avwHRamuBezuqXL39KtxfCthNZNgMdg3V8912paAQD4GBAKhuhBEjh8PrxChSBK6z1R62",
  "key25": "2U5nBgr9u6eQRKevvjPvmKh7w6pxGCwTxxCJyirsqFG94AbYHthMqeno4F4Z9mgGJAuriJCyDeJfEw9A7yhkPxEH",
  "key26": "4B1tFkwug75ce3ksrmc5BXjmToRz2UMXCYdGHGf2qMayYp1zKFEqFE5bdxdzhCvZU5tedf6hrkLmsPqVtneprPVW",
  "key27": "KpGGqwkYtgpWFSHKFvKPP8NWZqms4Km5z7cnGB154rWKZFDQVimeus3muGRfqAC7jPNNat5ZwdLmuVth6DJA7R9",
  "key28": "53JhbzQafbK8AN6y25f7fn7qsXivvut7KYMbf9uKzMMuyRgDA6DwEcNVNuhvLFVBz3Q19PENqiCPMvXWUwP7zdsW"
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
