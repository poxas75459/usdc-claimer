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
    "2KTSjBXFPWsRSa8yzTgoFs3ecuK7EXMz3D7m4agQKCwdwMziWDu9FZw9vDMiqD6tmgNPxcr4ag7HGZUaic9U8TVL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dtQZiiSVm8fCwFGy6ALU9uGZHV58VZYLYrR72QWnhJi4fKsr4MSVvTjKjJtqqe9PcrnGSu1WhaMVhaBDaRFTruK",
  "key1": "2ZXbQMracAZ8n4VZhaN8G1nmQc3JWk1dkyAcf9DbbkxcAoZgmHzEFLZDbnLLchweRnUkBMe5XJbm2Azt6e8oLxkn",
  "key2": "4GYf4a62GwdEHAgRhnXHYckbK7ZVyBVwPNcJyw6X33eJAPpNmD3dMm37zxkpuGVwrkXfi7PcMU6GLFxDtz9QvFkp",
  "key3": "3XqSG8HjEVki4FMC7KbEeiTQiy8f5vpkC6P4gfRQep7cpbjxFwqtpTJP6NTJMWnmZJCN2uruU6xQzBhxN3fdoXYF",
  "key4": "5zn41zgF4qo5We9m8KQurWyXkqPGndCS9BsmRMwWYDGfXxLnT3gNYyUXt4Em8X7mwp7fuUYwYQ2Zk9txyc2Xvtcp",
  "key5": "4oM88DFfnTxR7uogdJ1bPr7CzupXQnL6mVTDDQNcXxzLjy1WBi4JZtubrB7z17QQ6TREsEbNeCZhd3C7jnsMp1LQ",
  "key6": "2dwu6Jg69HuGwSckLjRt85kBAQv6oUQEUujzz2hYCKoqy9nSiSukC5a6CwcsEKVRJcStshxFWEchDJjVPYLPWt7Y",
  "key7": "aTHYds4qx6RePQZVtyVFXgYKrd42nC27JQL3ChPHnjgfTKpJ2DFxfYsUUTFwzQ9HLvocCDi469rAtxoCKzX5zYh",
  "key8": "5u8FwAWHQFJEpDwbUzL2bF13xMVGmTih4aVyty3Vo88bDvQiDWNqp93hfzPkyovoJHzFjKmj9hp3bAt3PNNVvs6",
  "key9": "2RRYaqFv3xeinH7yXvgb989kKC6oJKQWH2qTtSn8Whp3M9774Ma3XcCRTpcTHMiNyjeZAj3crBZBvXPFB6D35jPz",
  "key10": "2CJvjs5qrK2CE67hVsTAVEsimVkunJ552pPE2hSbChrwRLYMF1pxJ1vrxjwMjsWRjvhppvw9JZtW6E4wLxAy3aJ5",
  "key11": "3VyBwKiu9UkrCN1Nsomk8hTsTXhgMXCHHQWyhArz3YSbJ97Th2M6hR18jfFwo8NnFczGeRfoLJThWkHJWFsMZtdu",
  "key12": "5r1BSWPi8f5Ue3ZNB7c79cQPzWtCx6xeKGxAnmo4zsEQnUbbdE1dVNu43HfKE68CuyKvEtUNSks7HpCuJdbLEQMc",
  "key13": "2uzyJrRLMWbPP7FEYFhwuF17HhWtPq7irxAVcZYqhRumBECT4B3obbARr1JGNsLUV2S27m7XnuyVFcoFuUrRi1vq",
  "key14": "mAkuCsy93JaCZmepeNEu7qVqn6vRzCLLeAm9BkKUjgGNtNDq8apz3PPqDVZWgPGEib5g4EUMgfoJbZiSA7BtBs7",
  "key15": "5bSrdrSF9Yg4KDjDwgKpX3ZgayXLE5PR4MnpfF6Tk2bofx45vfEh9fCzs82ScVPJUCPdqWtRChRnziFuqjKbFj3b",
  "key16": "2fJxifatgdQApV7JMRRS1rctAdHjxpnqA7hqKoGwJMmNVzYGsZAdUq7LiLLEX6PkyHD5adchFQEjiyJMZruHGeXt",
  "key17": "4jySti8giGoTyK1BKMKoBVyaj6upAWmGUPymYwAPPd4k11cGeCUfbgeeVGzqNRJSvFMpKWs7TjXL6KtxTVGBPt2V",
  "key18": "uZLj2SKMSmt8ngtSNUGBeGdwe2mZAddxNnJdMbH1UH2xmjMZ7cjEVhQKrb4H3WTzuaiEKFmvxxgACtwcD5BX9Fc",
  "key19": "3N3cNUC6Dfa1yR3A8GQD2PYW8sR1iAwpyB4eT1HeL477PbK4Vw7rjk9C8YpYj2PwvNdv9Dzuc4fZnyD1FYgr7Pdn",
  "key20": "3kfwQJutZF4NR7SUz4pkNsPfqJGdA5HEBARNEJ8x1E4CKcYuegAD8hWmguEb8RsZGyukqBsLfaQSkZLmX2tyhA9J",
  "key21": "4dH4KVx7aWtoH9xLob5ZW4f4Cd3CT5JzLrjFNXjgVZhMvCrHbuK1PDTC2XvjA45hrWxU885qeB761zPYveqLSgc4",
  "key22": "38Y6YsrRNsPDobDHjEkSMNERBDsrPp4xaAHCU1jDFU2wySzLeJYBDejoKx1Xy99nVFidAUn8TtDfZhgUJ7p1gS41",
  "key23": "4KTsdGhSkKgTRYgzJT9LvotRY4HVQVQkehFmhu1aKhYVoLFLGNqjWHoEr3LcrBeszY15wXkzdSQp1iamLsFZN6oH",
  "key24": "2MqRc76CN8DJzL9TsE7mGPr5ppmJNZQ42aeZhsNAoE3CDfwWkBc9xDZvu8CrFZgNbWvDfeH1tN5n1MmvXUAeJodP",
  "key25": "5ntvu4yyo4p2bQMEe2SCzLDp7E1w5zMAEUSkf3JeBcwdkyaom5gNwWQ3mGBDBS8imVFVaUXZ9GBvhJf7YCkfRNzz"
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
