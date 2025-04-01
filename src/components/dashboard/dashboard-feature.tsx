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
    "3cJDGYh8jz3cZK3bu7MiEQCfi7K6YNHYUaDS5GD2ipHFQc9j2KYSMcRz8Xja68nZiFzHan64YTP9jSbZL8bmYNFF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36ukA81HMgtPboPeyVJqzCVPx1bYG78xfjmfh6TuU5reLWQDjRjGnfyCCUiUt4pK3jwCZMhna2gLeaeXdY7wrzVi",
  "key1": "4XkdUM1EtndvgnAmKP3oGUDPaqcwNpciKoUXrzEgWtuyW3gsokTh1XCc1aHZm4mU4tdz2KKZXSQG6nVH6UPmgoAV",
  "key2": "w61X4oNdNBwTECGUzygak3mRABsAbtozvBxftoE1to3ZBnftzB2n2irYti36A21ipAKdo8n72EX2UyQSM4K4Cbo",
  "key3": "44fXzCnb27CFmvnNCVcMBTHtXfBHLEdTFQZVXcTEHvNCQsFDCqFQk7pFRUzqf2oTUB8K52neHxtCyUMx66ogAaxA",
  "key4": "3jrReUWYTVkmxXQhmK5rYm48bH8zaz9YVyyBBVrZcSn57cNuNAP1psnGANYXH8THb5u1gnJxC7fafF32NPEHE2A4",
  "key5": "H5dnLcqb2vysbCkZGqfbLZPPVh8XWo9QGPbUXwZf1PW2FnkUUUHjMgF8t5YtPKshaVJy5pJ6GyRayA9B7EXZ4wA",
  "key6": "3RcvEed3egDrmrsJy1PMZgVBabbmSDBFrhn5nogWHpXTnG297rJjMyijLvYRzAjRKHewzEYb9Dry68BkauvrGR8i",
  "key7": "4nkz1yfyz5qJh1nqdqY3MgCcVv7zVndKCTi8wRH3B8zNBm157j2JDzrVHUH8LNkqkCyJo2sGwioZty9TFJwZ5NmU",
  "key8": "2drsDsFqZF5iduj9CSqqMEhnXCBhX7WmWQNqBpTYkTTWGEgcV9LxFZLoEdyLHR9dD6cdqxoAndFmsB4YeU7UU5xL",
  "key9": "4mpQYGEXkkHdZX7cWMx2PG4qBvJdjC1X7G8q6Uvhyky5XeWFBhaDNMdHVfVVyDiHVNHdAP96C4w9KHR7o8qF44h8",
  "key10": "3ZxbT4YZTM9bdsBx2KH9pPEMzxCDvQK5gem18fK1nUacdJpeWDzULZqmTZkNYAjrxCnzbbhNSh4ov3xyj4uMqbM4",
  "key11": "3Cuuk4AX6SjpnDaCc33S2eddyfPXR7Eo2c811xyzmxhHMi9hhZG6Hpj2C2B714cMNqChNdaqMi1hC4jeDtqWMxf4",
  "key12": "xayhjEaU17j4eqm4soaV6K3V5vjccQMoMMEi9Cs4c8b4aJQ2awhKNUGsFsvt6WfYgLpNw3MKrjdL4bQNn6PW7qo",
  "key13": "2gww5u2YNTnzXoyNNJgTaKRhFBNoNpg5maNyTpJweKaxz5PLxHrwFQGSK2QauphoN3TbuaQQFYqE5GnuAJ1ECPDh",
  "key14": "2B1LGNHuwTAvRCdbDDQNtfhxkjiGSQ8eQMhtTPXFVA1pirQ7VFEFoHCJzHbXR8D21T1RaW5B7HRnBqHPhdYLVm97",
  "key15": "3378Rj49RAbYMiSWujwonm4ux84qqBB7zkj1CgtSP1ZffhidbTTHLM8zhPdGFcChDjRstoyPz1u8y3JL8GpaxJEr",
  "key16": "2QVLpEyTLwZLDbmv79hzFDZTfDaw1jwnfrFfYheLDxVuBZPEUDFawHmsedHpTmo7ETvU7x4nrsovM7FDey35R2hf",
  "key17": "5cDnE9Y5uCd8KB7tDaVSHEGwVECSC2LNXsV2KZno7FnaQTp3vkdKTgiTGKrWKv7xNB6AhXmZQ2Ng5fZQG6TR3VAa",
  "key18": "4LEy9gW5p8fgPBLarDThw4McpbAbF2qkT8SaJAy8TyQXSZC7TivLTU2uksVvZerMNeAkphvfQDQdM7pXbxcMKaAK",
  "key19": "8wUimG4W4jZNcpxcN7EjhRxAZbU5Z2cGRzxpqsC79DKrWnL2YxMiWrxadqkVCqoZyEHt3BdDiD1FK7oCjZECFxn",
  "key20": "4ydmUoG6nxjaF7YAKpFbHEBT5kERhfWmbdNqZQ2CkynLQD3JuF1MgiM16U8LATu7NNLDoTGNhu4VmgXQUnbMucxZ",
  "key21": "HzYff1fXShQmg44wCc92Db8mCQRTGgF4wn8eh685PGRtMx4PYcRpoAzec5Qd78LbE57A4ftUwk7typ6kzDdT4F8",
  "key22": "3XXAunpW37b4ESJc1ZP8ehwwnWxpmHEc4qYshdd9P1W3FNV7D6e2xMH5145qCBzXLfgrpAhoFPBQziyy9SUaEoMd",
  "key23": "mA8KKZGANtPJGwNTnWnM7bPKLY3BXBJiCAynowQdHGoWjui9g1m2BHRhxir45fK67KQvcro6yWZwHcfRGXLpizK",
  "key24": "4TuUim9tCSd5vqrLQLxqNSFtEKsEHJAQwBZLKoXknpF89o2jBo9MgizynjZT5dfGBnRnpRgLXCmZaFdCH4TY3aVQ",
  "key25": "4qeodABwiRoSXQcbKad5x5sngsMfuau7v3peGkorheDJM4bgejrDPuBuLDCyncMqFrdyrbG7ZS1Wb6wct86j14wq",
  "key26": "42i2qzQwc9JgXTa6jnGzfiptb3z6wMXDwGWvXM3PAYxjfcMte9hbrKj8dvSDi5YEQQKShtdNKT6XqerXRa68nZJT"
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
