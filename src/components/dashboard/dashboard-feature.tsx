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
    "CZXQ6RSA6jiAf5Bkf9vgyc9bMgexxwpLTQ4BY6btF8T7ZPnU5MGV5MX71rjmrBiNwEr946Du314uEdKedejGEHm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3i2u6RG3g4aRKvKCkEwA9jA4NDmzsfihScVgsn2xV9e7L3ufwxTWK4JQnN69pKpexhFgj8RVN6aekfaLKZekkYVH",
  "key1": "5yGSVxGB3Sa1M7co9ipgTtNyWGvRY5w5VT5VtvCSb41c6bMpduDbhobv5iSEL16sBVhuGq7tArrVFa765jxp1t36",
  "key2": "PpEwmWMgWwgYeQ4VbrFqKit8Zw8UZZPHFPSThVnKWg6pxKA5nFkogvriSnhhbZT6pfQ8vymwhrALJifEqqA2b2N",
  "key3": "pJdR1D1pVeaDHdTEFyog7juBen7bpcZAy9NV8jYu5vBwA8FR7FqCStSksdCNfr9xG3nNWmX22zxaLECyaQdxeT7",
  "key4": "3cjhP2rg3tAByAV99te7uomHVo2zGReJ2dL4598oo9NVyXhWpUBnppKAwahHfA4TgJ9yHrwNBLiV1JS38paxEJQG",
  "key5": "44wyRjWow2QJXYNhBWRQViPuyPcFgyddUrj6w162ug9E5L1K7Qez46PLSdxrwNCupzurWE78yVXHTmHeVGxizCuo",
  "key6": "3WbezEC9cLFm9Rd2HRKSj7YktDio5zacV199gdFEP9WE8DwBJ6saJhDyQtEVGwgk5a7DPXyBVKBRYf4brThdibQt",
  "key7": "2mQNMX3ASuhraFMMYjdLYod2GCQx2LwkP28oEV6mxpu8AGUeXftrVY44nx23mS1ei17E5ZdimbzpyLiYjYbEwpnb",
  "key8": "2atbwHpPm4MyhZjuciwBWFbDZTW4zYevV7gvMkCKRYLYqqRLEgsMnkWe4ZwGD5TvGmK1pD1ZyAhWYsaRwdWiXcWt",
  "key9": "27F3CYiikoMy4nyAzeFfKW2ezMJyyTkGLmqiKAksVqeMF2r5nMxaX1Jujq6tB3HyhKmSuHJghS2FS1tvJDpyVEyT",
  "key10": "4C2yqEqF3TSmbdRW5Ai1nnG3VsZwstWnowZFvUCiWDwu6Sjg6pyZ5ddNMTCWikGxc51ZxHhNwSXWU4tohLASxCi9",
  "key11": "3xKfhq4qR34Pu7UeAE7aXW6XTGfebCmyVAsbS2CAujnsfRwnQLKvgoEgmrMNzXZbhb2PnuE27wgnTLJwFQpGUNNB",
  "key12": "5pRSLhTa5m6f5PcGCMgvbBpBdcmqoDokVeRLkE3LcYfyWPzhuXCsjgtQmZcNGgafDmxYgM5HMjdxHVV1hQmpV7ji",
  "key13": "2wQrRFoWzwKFkumPBrLTBFA22iiKsYzvSZ2iv16azMYmFwYdJkE2uC5EY27i94vsn2HogLXDuQSuwJtHMq6THxqA",
  "key14": "5LUu6wzezBAhLtbrFKame9h17FM4zxpNFNYKh1ovJYDt5JsuWh4JePyEWNKJUdbqxZortQZkaHBKqadUx5vu3Cio",
  "key15": "4pngX6xWzC7zZA8jeEhtfvxejNKYYrdnFA9viJPkwtCQWUQPgT1f7czbQrGm94PWKQHY1YweCvUtkwDBkwYDuDrf",
  "key16": "5EFqD2rC72tXJnSk595huy5QoGSid7RqyK93p8rRLiby4Yff2aLmGgHPqZsPx8yUQ5o85WA4ByMdWxPJ6gYNGAy3",
  "key17": "3kVsWF2J1ZBUVEa8h4XJ7Ba68bi2imcLp4ns2Z1GsPhbvAa8nGUEnWscj529ZEt8RsCAgvFLKQBmwdtteJ5V1AWy",
  "key18": "2HDy9fCT54NgxwipPxLNU6f89cqm19CgrhXWQyqDMyXoQCpJ5dqXWxpPUCjEsgD7Q3fpPXHyj8nzZk7WqhACq5z3",
  "key19": "2gc3cwad7ELwNXwqg3kyAVNF5MkWHr6Y5z9zGY3WjGuAHQoYUQXzB35BfkWvWsBRGDaZb2mZjjeK8T5oZ1HCE9qj",
  "key20": "2F8i7NxV3BQPMTn374EuFwA2T3KATSKDN6LyAwM9sbXF5Zd5esDSxbHDXYyiWVUCmdvZgcLJHvjBtzfNZKqJ2CjA",
  "key21": "3DkCNqn4Z5bLhw1b2rQkMUTbWc6w9Qeobd5XsPJBvmeEBo1Zpe7XSXeAfZ9WdgMdweYTXXnES2ZAaidwp5M1geLB",
  "key22": "4nR462Lwde72V1MirPenJXevHSynMsDY8DFaXnE3K16mpmfrd95sv7g3n5KNMc699Arf12yLCUh5eLGXm1SZShV3",
  "key23": "5RDgAJetdcKnNQ2KD9NTY6HGAtQ8XvKk3mcxDJdtT6n4rxXZcv2rYX7CKVeeKqEUTZMUQPXrFGvkyt8YzNNK8yCU",
  "key24": "nhGrQ8wSQD94u7Uz4kHh5b95Jp62LoJJ9DujDidWkBZ84v8fPCprJUkYsroYh3FQpnKRchKCSemvpA1fsTdckLo",
  "key25": "BbHsbzpFNG5ZGZS41xYK1csRCxkjXZaBFALLUN5WaLnaFXRym7dV3nT94rfwKPDX95D2WWaeoukonp4VfvFLrm6",
  "key26": "235hveChGSbjckfd4jr2PE3Ay8BzB1Tq7QDPswwvLHLwRLeeLZKYcKwr5G6LKc876jM25tf8zSHLThbXThHoCvEX",
  "key27": "67r2JCW88BeyDR9TJs2cLZXZ3rH7yr8c3aynZsqezXbG9yuaoRJHd5gSqVt3szPgxAiKxyfXXsLnBp1faCpDisk9"
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
