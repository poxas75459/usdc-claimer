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
    "5RLiCJXt8vFoWMmeGUuPALzksrkv8bRMySx1jvxU7PhvgCLrTfppjTHB4Bqji7fnembRjWhVoqvQ6cFThrCwASyw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wtazfuUrb3srpdqkXCpXrm1HjHtiMnGGY57WR3667PKTYG8v5kpHpki4tLHx5tpGUTD36q1nVXywTofEsHJe4mi",
  "key1": "GaUWrh9ehEZHkBTWdD3eBzJeMat5erL5QnDzBD8fDzCd5ciHNfS27H9QPQf5Tcn7Qnon9fxfKGTEUBios6jPXnK",
  "key2": "3oLnsw1Gutj7YjAToepxJnRLeuWMm3bLxw5pXRxmrupad4evggH8s1aTMbmfV8jAbpio5H7La1pzo9PSnoLRFpRN",
  "key3": "1ZpVhFr7wvZYrYuSyVH6FMCm9kFZYmxspuT2Sf1C5RVZvDXHmuR1KtkBp6aFPVhsTSS3ouMPaDxi92JGKzKq946",
  "key4": "22rbrcrt3x1BYwrzeXe7B2VJusPXLtYmYYq3jyfwM3u8gMucRz1Y2JAfQbDCqZUsaX76rkF6oVjbWLvvQ7qFJiSX",
  "key5": "3HM6H2WkJMukiEuGKtTpj8xTvDk6SoNLgooD82XwiLufYTEMrmJt2hyu2zZDdDHguK9CU5aHsT5XVwQk39DT7Zy4",
  "key6": "caHkL1aVT4sFhU2PW96aDf1gVorFnovGrvurM37V9T6LhE3UgHkSUsGRsQkXgk8eGJRPwSZrx3nPemMw6uied1L",
  "key7": "58V6NfGLbRkbKK2c1LZ8MCrzLVw46yGnKvjUhNmUiVydfLRXRgACbp2P9Z1T6V4Ryh8t3UpFA1VCckj5dJ8ANL3X",
  "key8": "qqCZvnmsiogptB53Ho1mQAqeoJgjRFWwRamjszaSvB2m66qMa7382wjTT4SvCCmSy7Ng4MaEHXaE44cxigjDWyB",
  "key9": "4KSG4wu4MDTtwk1Df8Mm6HZ5JKmC99MDB1bJFc9ypP7HsCnRZq5NECFUzmAKLA2ZuZeXSbYkURDFsa8HRBM3twQ8",
  "key10": "42QzZDyHXbuCZyWAedeUT3h1NpHiHyDh2vyi3Ds3gUkLELB9LaBE8BLrSQbKKDfL1MaHwqsCALKuScWxY4jG4qBu",
  "key11": "4Fxvv6ezzQEkpYRwret1afCRtfzMAP95gybnhq4uKE4wheChXeUfLHsotaF1QoYHaDkxSF2dgQCrEgDKavvm5rzu",
  "key12": "B8g8PXgoqEXgzvTyidtnmD5mJQUcGDNzCNxgusJQBDES8tP7hTvAQ8uoLWjyTPXQZTgYyckN9EhAXwVRVeCkxqw",
  "key13": "tD2Y9B8zjiQZWmJ5Mkau8orE8zcwFoRKQw3qX4cveBmND3154xd7sbPoThTKJxjKhVhF8jjT2N2wUotRTQrcn6H",
  "key14": "4b5oZCGbx5irn9PnF7JJtEykMUCogjpP9CMqy2RALMrq9jxQ1xxXc8WnJuZBC9w5qTZLcUWsEPbPKzvL9eGeKw5X",
  "key15": "2Pq3aQ68JpiTU7djx97qqVDneaQYYWRYNMZrAnM4pwaAz66BtSrm3zoQQnfvoYSvz3YUNPbwFkhxfmbaMyPmXNZ5",
  "key16": "2oqnr5Tmvb2HHLSUTgjbvoaqRm1epAki2X1AZaDTYeje5tANhwmnNvMhQeKNkHoRM6jGDofxkXBuPBePXVcPA4WG",
  "key17": "3quWASwTdcQuby5ddAn3quGxcmAQGybUe4VXh9FuisrKyfiDZ9TidkGqLr5ZW3wGjWAts1X8PNUeBukjwn7mmSXU",
  "key18": "DZLiXiQn42MR3QdDgY72dZsUWVohL7ujbmDxfiG8CeynLUyiMK3JTF4ftWGpZmVrsamUE2KuTVSdeyMmEtbq7dg",
  "key19": "3eFqty8WYNPb1Mjp82VZSmPRX6m19zpWXExtx9CoaJHvGrR64TorUWmccZjZKeikkCq7i6r3rWbfimPe5gu9C3FJ",
  "key20": "rQV3PHyzRSQFvbdHNmfyV551ayfNYZ7rqqRRBK7hTrjKbepWayjSvP5GY3nuS1oGTTgjqJFKN8mxT6j5a5GcJLN",
  "key21": "2LZPj6AqxMLtAVnZBmdNmG8VRi5BHGEXAJm7kFN88DDLjYGsjAC4px63JAx7Wj3t1oAuF66Ju6whjGwLSzPTLL9b",
  "key22": "4bazbRutQ5DwVYjPqawqGMjZdH2x57sXp9Rrw1txBQKRpLMmkuJeEDdVsrsp675tJ2NrKcYevQnBBgt6nEk6ChU5",
  "key23": "4eog6pWqX9hFEzawD1PEUbD5oZtqnJ2UHtu6KkLPLNCZ2kped2ihsauWGTSWqnDK7os4ViTCGNRSxhwpv3i53hte",
  "key24": "4upChXjKftqiLBwp2oM4ohnRStrdhFhk4mYb5GBjvC7GMrehPqkS8vbgQvStH1UmdwZxA191UUBvpCKZhTotgBD9"
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
