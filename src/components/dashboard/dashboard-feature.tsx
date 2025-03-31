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
    "3hwBTjyTGABdNcpUF1fXioSSpYcuX3pRtnSQnvPhbXbsR1pVEit3KvjBjWNgv3RNw1dAT3xDgAkhP3hdQqTrtUnj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BcdkXteuaRa8gfoc7qifWSPMwFd7BMMxkazsWTJRdLzwjZNFwaCWoBZsk8sce8vGDMhP1FrjvPxASo5iiWue2XB",
  "key1": "4fLE1iBq4WfizEL4cLNrm5NB7VDpM9cVBxhqZEZt46JhwFHE4NqSstbJ6v88HUG2NfT86ovdmow6PUHJtatQSd8G",
  "key2": "3NsUre3m6ADEibeDMVSaDM2Q8uygaA5WThCB6JXvSTt12aLndXne32h65ePydAgp7zgBvFVjW7LutNxQp9U4jJK9",
  "key3": "2F6E7oNvBF2VmFq8ddtjSbJtG8JvmQV7sWG7ZH93Re8N1n9CEbN2A7b4pDY67ov6jEMLdg3QWRzjpe9BzqHJs1be",
  "key4": "2PQJVuCTKrDojwBxEjcu9tvsSK2n2wmzLvZMkQFUcwzwSZpvCANESR3gtMDWtCfAyua61DH8BGkcPYTjn3TtVAb9",
  "key5": "4vpSVcdbjsc2M1zHxHz9oi2ZGgxzACSbzczCYGeS2vGsNJJHKNZaCTgJN13sQVmCZy4pNZGL8QiWbd4jTqSVFkLP",
  "key6": "5shHdTs6D9xJtzZMUyK7Uch3D2KjTRbDpx4BTofVJzjQYBL9zEHjRocENoFbPjiupqhbEAMkkvibmkXVg5TxfKys",
  "key7": "g7U8KBdGY6fNpQj8oBT78hHomCNjm6ssHAjqj4WQNNfPFRx5riUMPQEihxjSy9SGpaXqiCUzFdRMNqzhy7P5ZvQ",
  "key8": "26XnfBJf2Sj3XaL4SED7Vd1G2pJBEn5EEU35zgN9JeYMxq3anHQWiKLMUTHcEpWBdS79Mhpw1p6iaTaHoadJ4k6W",
  "key9": "5Xp69zkf6xLGXrGhi19mDf61169eSXFgRy1ZXK3BEJ2bAkDr8cXxSygPND8714Pan2XXgTgQHFePoybzrZS77RRj",
  "key10": "3pH1PLyFNHCihZLRo6UhSBS8YPh8XtEedujEEj9d2b2izW1ffntX81n2Eh6zbsmV5pqFghpC5RjEEqx9U193JH5K",
  "key11": "2N16WtHPvBNq1fy24JBvHAf7WyziaeMow5Lu2NhvwLwCkDAWMtt6yVturBL73J4t3u5dW8Dxt9TbUZbiGemc8Tqk",
  "key12": "v8733Buf2GRL3omMPEM1rTVEzPzCPDkdUdTRy5GbbjFsveuPMFN5z3CpSyLUgai24v2hRC53Yh8uFfMYiAqAw4k",
  "key13": "5L1XTn5y74v42w6eqtv4vep4iLR6sWh5AKYuWKRuZ1z4DPCYKHDCvbnR6kwLNZWeSgKtGUz88b1PZ5Ku1kRZeJ7M",
  "key14": "5Mtpb18DXDb3hYW6UYHowSv5bcYMJiBD4aCQxCELPsWvmeVrpMh3VRgy7yFSxHcG8rqkxPiLcHRZF86yehDGGpG4",
  "key15": "3cCW81vqvGMPbR36Msb33qrbvJBwsS3tUzWJumJovUTGpeZbufQLRjZUrm3SusxZeodRetDsERgpCn8LK3tafbeE",
  "key16": "4KcD4nGDh5Bw9o2oUbNUrCJHB75khj6E8e2uu7PJ87D18c4XXGG3zM69uHejEHe8CfdtmKn6K1WFHpS9VxA1GFoW",
  "key17": "2YSML3DkbxRp2fT4QPVgmmdXwD7bMMvyegr3ZS6cGszfiprcAH81xbMa5fE4FhSjHWAMu6svENA36n6uCku3xuxM",
  "key18": "aRBmtyRmMCszDbzNES25zUVKKovdceWtihvaRzyhCs2J1uKvrrK3hTfoHPeecTCKND9rgC5on3pucfcTjo3jRiw",
  "key19": "2m91HPu9wwSrUvnk7RY6xWFk2noHW1eKzmA8n71VoM3EmpWGCZKaXdf96xsuoReFMDQSRq4WNuG2CmCKcfdaREY4",
  "key20": "4QWvJxJuLnhLWSUKZwgK6pVwCbijKgYuWmmaac7rTxkLJxjQiGXq8EXxTtrq3wzs9RaJE5qwav5o1jkSerhNXt5H",
  "key21": "37ZRNJUEPjZ7XxwQDYz8uRpSqLgJG6BmooGMLrvySy3FXj9ANH8RX3MMnBNhXgU1zsReK5JtLDd7wLyE3qFrZ6Ps",
  "key22": "SjpXGwrbjLHAHvS9KYossi8uRzUXtRkCdBr25NMZjqXSGaBcCuoWfYDKLijP6nDuTBmJNtJR81Nqsvg6hnEBkWS",
  "key23": "54Qc62m7MRrZKbv5EjfHR84wP4YbAusMX2ALgfXrfEQSPL4HU2vVPuy3QgEFL3be2cPcGQHBVAN8SDsYEcjBJsPz",
  "key24": "62udGSsirKFCVSTK97KyC72jMiP5n1YE8Zw469kvm1atMZmTEWt9gzRELY1xRCSi7okTF97sJjNCqqeKdPhd3MCU",
  "key25": "UkVmGPnWtJ9xUS9DJbZZVbDtRbsYGVxACKUzMyxW2jXyx4kDdDqEELijcjTVzRa4RquQigjW93SVCuRfS34mjfr"
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
