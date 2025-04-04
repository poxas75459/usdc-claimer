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
    "4PVwtjzWJRvbMf7W12zrF2QgTtTgYNenP5M3ZUynPiFX99KZND2vvBhEDzPJx5iEjcpRQRWJfA5uaawzYnYBAWJk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xyEwjgeNEeuTxdba3zQtvY8rm44fJvSf2AHK4UxeeQnFin9FDMRuqdvE9NtH7N51iWNbLX3w8qbHbAY428YfTj1",
  "key1": "4GqEu6MNi4PAtg3uHr1BUX7qAxmSEgPZsstQ21TiiAPUSY94bSn79otVsnERCqc2GqeaTGBQSHdaacguoswy3ngP",
  "key2": "HQRLm7TuPXw2KykbFHaeySGQQHcRbe2PwQTUEFCeGdPUUfeHFfeKnvngWYZsEzb867Bqx4WqZBqaDyw1vgpmTKi",
  "key3": "47RgqeUQWneNYe1vSkahPdy5j3GrpffHxXSvFjpdZoR18o2it456UiLGASjJgK4VZ8uk74UpoPtwXaKCN8boDnKs",
  "key4": "2kJGBULPmExFJtGjwwk7UDEvbFjXQCvVxiJrXLMAVoLWJ5FHx9msFYhNu5n1BjNKfvmvoNJDRo7gVfkmtqmLB5sG",
  "key5": "4jbUSdVofVzs7tJTd8xxs5VU2YK6PBvcbBqu64n6RU1ZgYXeESUE4pk43WVpdrPHBrXBaqKh2nz3egLPq7V5eQQs",
  "key6": "2XHoDJ8CmSh3qNAz8YHzpAp4B55zkCPwQPBBGcHtQUpmzk1kTYWwji7rQr8gtkht1DpFjqGVq8evHNrMtDv5QYbt",
  "key7": "65ovNyWRBVjqdiQQa9DpmcV6KEAZr9PFbDcGJuEafZKt68pvReh4EFAT4P3AHRLsLoxGJoehawPeD6CGi1eRafHt",
  "key8": "2bhdYaHM73nZb4ACqNwRsJeou9xs9AmbhgdXXGBEqx7YuVvJbbmCAcapQvDMA9mvLMp1PDKoLkFRCv92P3AsMXSR",
  "key9": "eEMFGBCok4NHjkFgRV85XATbkyZz6cHWcb5ifsZXPN5mZP78RVJKDqeFFii55b8gEXBc7EvSjrVEtuDGftc6T9Y",
  "key10": "3UAcKGpB91bSVpHULYUfNvqgB1nvPMYEHtZ5ew5XPSKyLscCJ5vh2mhAfUDnoC2ic7ahgKEBMvbGV57yC6xZV6Qq",
  "key11": "wWDyrrHtrHgBzwHBEkxFdd1aQTQKPVp8e1UW9viWK7EHsi4Zde6DSVTgdoeRSGwsWTyuqEwQtG571ZvbtutGz6H",
  "key12": "2gijrbnDRgk7UvMsfjewoyoxRDj1uLXUikcN8xrYFURsnXp5d6ESMKSK7givyyWRY8oDKpqrstDbL6UPxmASJGdE",
  "key13": "2m8MmEmjWsG3yLzKoaYbd9CgtAxiSMw6t2XY3exzXfhL5fFx8M4GLevyNJDcgLfidzs9ZcuUiM1oB7Rb2cG2jYZe",
  "key14": "5qkHJDAUt7ZHDcXxoPu4mpcmx8EWy412hdVat2FwA4x95M1hSspfqoCkeETFQSBABj2hnVr1YK6GB8pnuYRvcc45",
  "key15": "4bcik39W5zmAjcUbRZAZYvHAr7ptGbqNuyGCboNsQ4uFEnZkFz79s6iacGSHNqMbmQKUnJWyHQaWiLNiQo7UrKBr",
  "key16": "237uoqNSF9ztGQZCwtXtMVLxbor9ycNTmv3xyYkFsfrHy1eGzhzdX8mEvufBP8FvLpWjro9uLD8uaRgQ7YzDFFH9",
  "key17": "ZNw8es349N8usj1sYHmdtoMtxSmispqxmC7dt7GQ4R4tTZ14PJgyp3k1hR8VtfHJqkWfj4vxNcwcT9Bx8AvfZnn",
  "key18": "2FAj6YrwwYE5uw52xv9W7N9GcoKY3dBYw3gGFCL3PE2TJ4FerLjH8LPwad2pJ13fnh3WG5mumN8jh7Avkr2ACjFb",
  "key19": "2KyESGn8dD1dcGYmMnMmXuz4iUidu6g1cZLJpCq567NH1aA8eqEj7amBavdvN83vBFh7Yyim55MT4PSoWYsiKtGC",
  "key20": "2f7kV7vjWMU1AGvCwPMf1z7SEx3Pf9iTBdTZCCo7p6S9wMbMwji8tUXtYKUn7StnWpY7wMWKCyGk5Qo8Di8BSHAZ",
  "key21": "2gXzVzHDGLUXFcNFvsuTRT9Kam9WCiS19MrAN5YFb9NBiFDfUffRwfvvA3JSNQL5yEcu6XSRpnkCdNwwjtTdg4n2",
  "key22": "4WogDgySw3LtPJaQMUVDMazP71va7P1KPK8qnWFyWe3gBNTeaWVcNdqQrCh3S8GfgwuqWHetQ7pHmdpe34GD7Uwv",
  "key23": "3LSu6tBo4GLBh5f9HvkiapGRAP4t8CioChjQEx3zYwx1gknoNQurWKefvJcGWNqT4G2DCoitJ7qdZrekYvBL8Zaq",
  "key24": "4V1bBowRJbkLM9RSFqEn1aYMdoZ3zCdScX3wexCmm9FfSNYGfGE1cLjpyqp3J5NckhhR89vteuFEVMQJgQgRtwvv",
  "key25": "5Ara7Bxjm1zvFxCQna5GCoek4XTj1CtfH2QdtkZQnHhv7NKYMMxisYsCcnu2S5DWFfWfLpo7CfPEQuv9LCroR9kk"
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
