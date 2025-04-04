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
    "AhaPNissPkUopYEG46vRWei1GCeLAxSwJZZTSqPooMjdzMfrZvs3QJa6A3T423ah7ttHhNuCQL687GqupjTGByh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XS6uTxMkAiVzLAwarqZao3EvCtoj4j833UGM3iir12t9nfsairkdrcT9w8hVc6Fvfd6kYgzArziwCeqxFgi1kzN",
  "key1": "2AjgUHAfUo71Dz9YzoaMQqSWDkFYVymMdZP3BnXHmdJfFHi4YgTp3vvoMNkVp2rxXoXcBY6JbhRAt5Fm5GhzVPbk",
  "key2": "4rbnYD7AVX9LNfjsJbmDN174gNP7HVYmNnjayb7SgCnFxNVMoVzmWaGgiq8tzZ763TkWxVrbpGRPacW1Ltj8pZs4",
  "key3": "4cEVii4vG5dBVgG7b3wjE8Yf9QR1rd3SzZpmhNmGdrW5jscr3MyRUeX5zwLj4EyRrFUcXKiivszUNXZYWs34DsoY",
  "key4": "4gQMYUrhXpivn2MFz6xoVhGYqWKx9L2jhacih7wr6d1nHxFEdU2FEupPew7NxpTnMitMosHq67f9CYjzB8fLtwoy",
  "key5": "Zqps1L1VvEStLiEr2ackyWJdEDNGDuh9N6FoHtnhRi9ZHQtrF65eZ94TyvQuZHZCnXJSjqVUW9siTTXR5oHSvbK",
  "key6": "569Cz4RdCn3FqiPo5XiPhnz5iasFkjnmB4BckRu4mLXYb1zgFX2UZhFzorS5cqsyFg7YFnEc4Yux1Lhf1gmeFpKU",
  "key7": "Ziq9KBw2LiHanJTWBcUwRhc7cNjW1Qoj625TMXdGuNWreR7YD8VM3mWy8uJH8JqcbQKWDLJkiQrWoxJ24JYq54m",
  "key8": "HWryybMeTyrhEGK854sKfSt7uGz2WTgPsq1Rw46QgR4NLQoHzRxjK7whbPLqL83vmkWr1YdLTEvNJJK3Q6uxyJ2",
  "key9": "5WZoydsXPqueCxYTB695ygRFhQv6RydPXSXFSoBL6fbjvVd5xQXxGb6H7DXHZrxZwaQqvuJgqg7ZaVYcnugM1SmH",
  "key10": "2cfVTgUMicmpmwNGJYRbLT4FejvDxu2MnoejFjBAMYAv2pACpjhHjDXEawb4WhjawTJHA99mZBE5DaJ1z8A2yjVN",
  "key11": "9ZfoBjDiG5YzhzhHKcbM7jF8CFZSMZg4UhqL2K7pSjNbMgRBcfSuvcBWHfwmCuP4qdHR5eWYEcGxotxTtbjXJKJ",
  "key12": "zVGFSKXF2cQFpXH24xw9cA9EH8fsZT69nPbn3NgA9QFxrG65aLnK4jVeJt5S7XcbPDEyogSMyGj7fKp4FMCrbSh",
  "key13": "D99PhUYc7dHAAADVcec33rJ7KyoZ6mDQYHbb2iosr1CGmCLAWCTesURhXF1DbcYcPAAucHUHkPUYkdTXYaMNdHr",
  "key14": "2g9VJrU2zjpz1ZGJKoZ7Sk4avMmhX8TTh27Muxxuzo56zv3FBeVzj4n2nqxUU96ZHpprqZxKECcaEgj1KyybZGBc",
  "key15": "iWqxn7Bqwpccx5q29w9aMs7UQ2jXvg4J7CK6nBZP2E72zZs2fVX4xG1WhNdroaJfrM1idM1o5Cdd8QYJEvBYGaz",
  "key16": "5BKyiAEd9GaKgvoQJnYfw7owxdt8NFraj4fhwYUjsBvzzXCP5o1bWLgw3XG7rp1Vupa4eDqiWerEBP1Ws3djLCx2",
  "key17": "4ANQbWj2ri9u9Ahoto181aJLF1HGyhxGTd1mVYo2AZV5kNwRP35Cc5aB2gmyuXD5DBSuzJC6EUv5EEfvLXDjxXBR",
  "key18": "5NAHcB2TQyMcX4c1NqdCWNX63ATcnAiejvPoyPrcCrHChyJwtRRnUvGN8hL6VjaDtzPWaRrMQjs6h3ywk5my9em4",
  "key19": "2AGVG3EbyR3duAEHqqFiJEjYz7JTnfCkcV72inzC4fipUF7kGVNyvkN2XgmZ5hXRjtptue9J2NeC8z7ebdq3aFch",
  "key20": "bXdtzQcCY2mf7jh68brbDzsSfQMF9H6ECjr5cPMpAb1GWVHarzzNnEVmoe4NvgPQrTzNmFu81QKtmmaovhvfFmn",
  "key21": "2X5Tt9uwTY5knmr2DgzdFXQ3AwNHMuvZdYKAkJj8PK2LgzUBPsPcZCgRB96qMXPP45uKKyn6r8PoUsH2ReEzMJxx",
  "key22": "5eFyJ69WtSd2voXrU5PT98Fep5FStaKwj9qr755iFyd7yF8QvnzwWer7ogb78CiZLZDXnbK3VkZ6pWVUaFnmtuYD",
  "key23": "5xwkScEezASE5b5o8JLnJxnoseDdw151NuuvJRhwccAoTBXGLDm6kBZRpb8LcNHbwMixyCKH7mhVgtsd4YN1Q1gZ",
  "key24": "52dFNkcTJQvW3sKygHNCJsCFt5McL7SScubUzttyjgveY6sQxPNFg9rfWU4cz87UxbLvkhzgGVWDagiWm8HcTaDx",
  "key25": "eDXxXdzG1o6MogMR2SkRrEv7JxZSK1XzTbRhe6SpCVctsRe7RZeNmbYesGGQdDfaqZN4x3CiURc4739JUnUgdzt",
  "key26": "3E3XAJPsEM5LZ28etA1yZ3myuaNYMSYvWa8xwFBeGdFEufU7s9SBufRFhwTzLDZh65A7S1TFc3CaR3K8KdRmKgWV"
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
