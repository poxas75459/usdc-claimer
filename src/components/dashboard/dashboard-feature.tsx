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
    "4rDrKfedGKGNiofTyxo57DiXZAZs7J2hu87LnTczyj5DbwhvLXH4jWuU8WZPyB3pCkc6fWBRABDauh3XozScp8yo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "481Hu2DuKHt7hc5akKDsGJnPDmJssGr5heEX3VEc5Yp8YuF6CCDRLR2TWDLAaqTZcGXTAFGiH6nuMinnBstJDRSF",
  "key1": "Mpw4jFwAtc5T778gmgNakgFCajoH9mmjnkj3ZS46AJam8BAaWknn8kyGUTQRYTGt8TEhE2YCXTMYsXZWrRNEnXC",
  "key2": "2q3DN5cYuUYnTJoF4oPxpKsfQHE8rwUupwbD22QcvouerbjmQpH5UsHa9ssL1PKeCKdzUStifQ7ezHtbSeKK5xo4",
  "key3": "4qeGauhPebyym8F6J7i1MY45DaQ1zUVu1JTLP68Hk9N9vByzKpxokyCBYDvSTSFdpvFSd1Z7sxYaExSz2VnQL7D3",
  "key4": "2Aw79fVDyWykPJqKKRUobiW6UF1SMRJeDW135uvniUxqo8qAhiXveYNuEgqAc5tgQXyLW4WNM3J5SEVvd1qkS93W",
  "key5": "B1xPNRfAYB5oNBTr3yqmBZTeWn1Y9oAbcnqAAD2ML9oUDnVQ7Px2i97HqprDU67uSx44yTe3tvMLw1Ly1yMy6yG",
  "key6": "5v2qgx38UrdLYnR4eL2pr5FVFDnbZ3zTBZEgHFWMu6SWMh6FQiLwVfsr8JhRu7LS3KUyo3x4DReMxHg36mUfXDqC",
  "key7": "4wjCzbSo6mLahrS2jj91MxTZDX5F8Q4vLG1LsWFbAz3sM6EXy7tt97hRcaqSSNJYrdyTBJ2C9X2KKapgUJtJ5RXN",
  "key8": "3wjhntMKfHoKHGTD9MFKP7h319wqTe4ny4YvcQKEoCnNSzwy4UaFfgmesfr7W6Y1k4KQmWKnoSSGs1xz1GjRzLSU",
  "key9": "5CyhY8j4ckStefBNTJUCdtkQ3nEeUV5GZXBBx8TnuS78DFUqwXYqEvFw5EKyXW17w8tGvAax1WPCQfHhdByjFqYk",
  "key10": "5AAV8Poghmpy7wYmXaZmVV4AYr8pcH3344yNNTmouAvCFo5MtfUJ1kC1VXvUrFkrULCv5qSwdMoh1g4tHhXXGDG5",
  "key11": "2zGckmSCtNpfTSzhCmYxeG1pUuyTvk1FMcjTgfXKmJHjBK2hMU89bBdEhiSEs9JVkzNMYa5aQ85oWuvGSGFf4BQJ",
  "key12": "67KHNeRhvF2UXLSDWSV3f3PYi9h5YdiT6jHoMncfZ1dY9UE3oftjGEpUCo9VTw172p1xY6Zn7TSfKR8sv5mpSh5M",
  "key13": "5Abskf5qNENX2GZ2RC97owaCkH5sfPiUrfPSDVm7gRAugstGzPj3Grdmd7t2QLJdq4xiecjFMQzCbUc27qV2DGot",
  "key14": "3Sb86prCGpm5ysCFuo47jXbySuip8kLkk2YQHmoZaVgfx5KniJfqHWPigogiHwpxJUQF9M3TNZUSFb4WRQFC7PiS",
  "key15": "3uUC9bpb8TaT89vJae1WPJ9FwUyttG2VDj1kof6cCN2xhepXw6Q5FEetycy2oD4SmynD6xUqMUmrpBeJBG9VWS78",
  "key16": "3Xyde1m5z7WZJJ891KAtFGt72NgqNgBojQ6eepRvsnDpV5SbCz1wZhXsMSoXp4Khyg4dBU5fz4SoEkeJ15iD6Pq2",
  "key17": "3QUNrUSJKjrsxk9f9FSec6kiDtwJgDEbqhpxBH3fwuYknzngjdWZdqCT1fPN14QJYXpMFWyoqkDLwd9mfkSp2Qhn",
  "key18": "3ypSJDmiqEZf6osicDPGgx8aEqbFJceuqY1yXQVnLZxP4hnk4udtvTAE8DFjWwQU6FiZpAn8szDLCmLpVMCoQ496",
  "key19": "bSAQvrW76eg1BHjPP6fBTchet6qwc8WRZcFevD1wgmXSwPoUHsRcT1WHAGJpGfW3Gw4eEggrmPbKJKc5i9yADxd",
  "key20": "3d4v8RFzJ4eJ7spBrvxFQWdJHNKo4oeDUxxGX7pj866upYy4A7htSXwUh9DRsfqFDS8KxSUvhM7QeJ6TzGWkPwUB",
  "key21": "4DUA5iitWMpZAt2VUQsw2FYmHpv5TrQLehuTCcDDtMzgZufXrmMNg8UZoRePBHHKnm8mZ537w5Y5CehSHtWJBN3i",
  "key22": "4C9m6PM92RamFXko83ohE1V24pvNYWeXDTQRMF6oncK3ecdkTWRe4SKE1F97dXWiDijA2M5uUxTXJnSfU8sLfX6W",
  "key23": "4U4Mjfwd3BKuRG6zVNAQVpbbkufJCPA5zVDB22SuDnSRLAXUek51fHixbXy9qbLuXtS3TKauBWzv64paATCicGc9",
  "key24": "54Lg9S8NmwHbxCtCcumRrWvxEMToYx6kbPnXvX5BwiquBgsgv818nVznWAwS4FHrrx17ryA4poqhvRXZjzDZNHNv",
  "key25": "3TB42NafnNtrsB1bVHN2VK2xbrBEXp6vh2CJCayrT3K6dvxEpwEaCX44PW5HxHp1VHL4mzPivWHS1ta2TpL2gDP3",
  "key26": "3UK35MZmTz5DxSCkbDM9Sau8sTmuAx5XHrrxqRdtcQk4mpkqGCSSEH6fnE5hT6ghXWBvQdXUHTy9UMXLhhhPNUcy"
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
