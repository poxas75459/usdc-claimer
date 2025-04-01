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
    "3KemiqbgFK4KLtXHqLaPkb6DPtpn45p2DNLoG9sPGQq2HgUxV7HUDax7FYjaFX5xA6XAhaM7wm91wtX6PE3hdpQh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZtAdEtg1gfZSfZ3DbCZd1FGPE5dbgpQ1TscGGQsgicxjQEXuoSy8kAWifkZpn4yRskayMp89AcPnZdFEMffrvJ9",
  "key1": "2Yr8pwoSwpXx9xr8uN65CkWrSyzT4oLkU8gpffmJmHFWZLvCgyNyciUjqebPLLn4koNgggEAnRVbVQne2uf4j9Ww",
  "key2": "3BztTL9pwe52FEUjgte8qTQ7m1uRUWJVSAFFX3dmbbNrnb3jkURx9RvZREXdptMHzb3oLNUGM4aw3dRWpeSJ9nrz",
  "key3": "2cc8K4B9JL2kEVp3XNCh1xXV4gj8fBBE9pktzsr887a2rQeFWdP2yiFki3zTr1fXvVRW1vctYqETqT5dbHpkRpE3",
  "key4": "33w4KCSYW5LqYMtQYBmkBB1m8RaS7Dwn52gAEiEv8x3GtgH2tnR4eFYQwJUVZSuLZN438ajM6iZrLRmFq1tkMENv",
  "key5": "4heWupCPbVpZV2woHAx7hyjb29jEMnUYTtujxocP24gaS8krRqKsFf8EsF3BBZmx9wGZ8AGLjdDcwPdq5JGrC9W9",
  "key6": "KwPzxVm2KRgEdVD6wtJaaKFUP4siK6v8vG2nVGxBRnE4X4RVaZ81hTuHVUc7iJRB9AKehjMpQNEjsTfkPGBtCeH",
  "key7": "5jb1oPpYzdqMNdxerskEyr5RSfMhhCQfF1eBe9xweEVXG3zREVPonFtHniH2V4Lr9cMyhvAKDBxLsDrAheGTFj3y",
  "key8": "2ejmBCnMAsRhybxvhYJaR1hXXYJ2ZhNc7P2UUKPebxQwAMXWU5MovahWaZWruoscPdE121xefmEcNKu7pPAL7D4v",
  "key9": "5VhBR7PCg5aHJyvmYJX54MP5a8uDvMcpzxVjVVxMc32maC8pabKbQWAyogiHpEqHTvtPRRqzMGGnfjyaVJqPNiPb",
  "key10": "3NJK7jgR3zhgPfWYcUTAE8BYgJGJXXDwMLAEBKWNyFZGuJ78PbDruBVAyBhXJm7rrX4CszvMHYsTmKJ4duZgdh7B",
  "key11": "4mCgwVCynF1CcbVxbZXvqRvtytknG6h318zHLnthkamL3stkaujPKxYgUMWiXPsBKAQYzvuBnSdabP9jDbCKgCY",
  "key12": "32DtFDCVdPoxK8SVoEgHkaGCnzc3Z5xMNhegNSBvdTuYBFBdBAcbUJJwchAQLunKqmU9xaV7xRLm83xwZzNevAPu",
  "key13": "58wfgpumCpwaZRhB7uWvLqQxRdwzELvL51roookgo8rmbyycSMZDA8tvcH5jHeecq8wgKTwcYB7Zwks6mq1Q4MFF",
  "key14": "5W3fyKAzJdFZb45SW7xzxo6PKZcoAq27azrw58REoMRRFVkoAXKSuT2uT91JYEKUJ2j4xv5fPCALzUXoat6anbUt",
  "key15": "2bW5R5PGaTTNe2bSGEbeCLqmyf1Mt4LnHeQUh4VjcgPCJSkqfPfPSDt6RfQfRRjrLiK5X1Q9cYt9ZSKyw8hYAQEU",
  "key16": "3zHPPguQppBDfSzmZ6FuUsZLzxH2pJJEs1wjknH8ArxAtJky7njMHvj8DBpgNNUxrnVLg82cBPTDKGQVet3SQ9ML",
  "key17": "5zRt94EomyNtMX1daDVgSkxuD2w2DpSUfqjMvDHZgBPSKyEZ7p7rrYTCKQkG5h78ENyJ1mFotfhYqhB96iSWvVSy",
  "key18": "3yPeimojxkNJADw7grQgaQrfnrjHdYbe18nAaKSRjFYrxCndgFkzajFZspnrQEdtgsVYXFHY8KX7miVZZHxbU2FS",
  "key19": "fHvoWuhdE9RpWc7oMSFgqBuWS1tPuJa62db9eyqJW7Y2vpV5hdEbnAjD3yGNA8vWb4HE4HWrJkZUbs6mzKF6opM",
  "key20": "59n4zuEGGWXCPLuT8RR6QD6ueubFbkAjXn6kX1EcRUD4b3LfMmUUpUyJXcm9xZYjPdBFKTEo65QVvPBgpawkqfWE",
  "key21": "4iRMbmjcd5aBcDhQq9Rubbjky4o2A3C9r6vGDohFFwCApp3BNaRA4ym8XSnbtc4sFy9ardXbDMMxqusp7Ajs1mC8",
  "key22": "5uBRDoQBHCgXHWpYNUiSy5G1m9kzCWWQUKTgHp7Ccax2a87HXKeYKfyeA97aapej714yYUc5uZefTLUj8zBns123",
  "key23": "YYd388QwgvimjyDtyn21SZyQT9Lnv5mH8LzouqJUSMu8Evbg59eipSFtcNUsaPRUFSUG7LrgQ3hPkgPGkLjVN5C",
  "key24": "3gziJJhFe1faxSSCciWC7KNx1R8NPwiZj9F6Jk7MycYc23AdPZ5XKe9sbkUv8BAmsR2bdZcaujTxDF7UxWncLzFA",
  "key25": "5Nn6hy6xCt4uYWnuRvahABYHXcxjWKd4X4GAVL6C8komnq2b5g4ssfwGVTKQ3iwTDYM3aZXrVx5VKu3pmxQZkma4",
  "key26": "23zYccVUfL2LocFW1V1vXwfUpUnrGbFJBCvrk7QtLJZGfoD13oP53R1FjrNwhUtYtkJi8xyKv8FsgRfnJm8MhAMu",
  "key27": "2EgQLP9NUBUPhk79rPJ3SZ7a8ahvGwhagj3h9jyvP86NXubAxkFCnECqYESzkHHRV69mdJvHECj4Fe8runVituWk",
  "key28": "4nygMpM3K9TLfCwZoXRaDf3i86CoAJX42mvcdns3ioQ3g3xz8XJxYvuWiNtavyTYb7dsjUQxiw55sxRiZ4xioR8u",
  "key29": "4dFNDhmae3r4wurBrKzXM3tanojC14c5fQoaU9ip729WdKXoL8pxV1DiSQXWt6VTuzPGt6STaV1frYgKdNgSXUsn",
  "key30": "4snR38hpBVVDv2CLiq5LVnAPSKcoXe9bFW1FAnmJSrURiV9jCQnHpmWgDs3UbANV2Sm4jD7Csj65jX2pRWXV9A3a"
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
