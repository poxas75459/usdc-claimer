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
    "3PMrTp6LXhxAzWmd1cMLKAQyUgMz1nA6pJKgZQD8CgofSm9wniBUYHg9qXrqdgNV31G2tje12inY5VHzD59Kjo4r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Mmt2xrGidBMYF9N5R5zYJaWXa81L8ezf5eNuLXHc4PSQMdDuPDCLWjbHQ9ndZNpCH3bBxT33aZrbs3DYW56a2kU",
  "key1": "jPjBtpk3zeVp4nYBPDegEBivjWBqiYiDPa2RUgN1vnhStVjPzPDhiNkPfkYmwTnWc6TUGZYh8FTfmQb3nS4fjrj",
  "key2": "4qSFrnJLnjN9Z2DPr6EHhQkhg2ZDpss8h55Fsfo57682NVUXzGn9JKABiMmfmxvebCk4Bpsu4greA3jusPtKdZdA",
  "key3": "2EPpKji69dQEzXjosidvRjAH4onxsjNHxNNyAzDZj1gR8aCRhrLyrWkLLTrqSefH91rtEHzacbBsg4A9DHw8Zqom",
  "key4": "46yyzYuhKyGUrj5GHeG6sG4zKmiaaEsUMJnMNExReq51HtU8mfpj9aRJgpW5d7WajYkneP9F17VvGdiDiBQZ6Wfs",
  "key5": "4mpoSbK468UqA5Fp27ycUHr8H2yomJ92fmNsBa3xh4zTzmHXpWfYHd9qAYLUGYT7ko73EPfLFMoV7qoboL31bk1P",
  "key6": "3mHzQ5c3kwJ6fHVR4gts7CtBW6UhGYUAUjYdhxMmuYDSCqonk7gmVCbXw31yUmMbCLA4dArZRxpEBZtbTLLxtaDZ",
  "key7": "pbiTzSWyiEztXqvkdVdDneNXbmiumRmeRi3o6nWdGVWs1FYG5M7K7yjriTWUkb3LQKB1BSYvBa9ASFYAv7NKNVU",
  "key8": "5YJfunsTSSDZgR3w798tcbF6n92eQdXHPw4hWkDrh54DiLPSAvALJhes2nukqYQFyvPNgB38dy7jekaq48stpuuK",
  "key9": "672y5MD46C9Znwb37LLrHsSWkP61aCLpFkmQxdrhGFdW34gURgTUBaDnjs3KPztqNAUyM8wuWz7LNkFAwQbdjLXV",
  "key10": "67ZNKZki5qb9s86dCCX73GnewtkMARgbkmiQbQNCeTsE7jTYL4p4YN8HHqkgxrF6mMEggoCBPcwLABZMzZTy9sTk",
  "key11": "KSpeTczDDtrEWt6dsYcekaifD6NVocgNjsHK33WnBcVA1KdoeZXw35tbavjV548pwWgZhLSmQEW5D4CvtNgUeme",
  "key12": "3Sa152PTLgMxNPkAVERzxv24yRfoLjr6a7fyf5KAeJ3FSXZgyWhoGZ4wEXSBzPnkoFgm4hd6BDx8hK67uERon185",
  "key13": "CSgC65oXEe1MPHszXCdnhbiZmAwJFzj2Hutiqmdnf2gYcASiiNZHUjnFHmZ2JgcgH9Dx4H41Bx6bBzxZ9hgnEDz",
  "key14": "5Mgso4kDbkLtxE771hZiGRpJwtQ7KgVH6AYc9JM5m64Ag47ocwMxRtPGwjpsB2cLGuBLtQMs4zNEUGP4mPcR8wFg",
  "key15": "5rcSCQcyzKV8Ustw8HZNfQg22h9V8XEKbANk324jQzeMantRHcoK4SmmMGqkTnEhsgYYu8iJ1FPmeakmSGXKR2Qx",
  "key16": "1CC3FX3VeyfqT2ZNZFK4MEB9T5WtfxZisN1A9sgvM8mukmd6eaQuWNF8GbYzaqSjiUyyW8641Kymz4VKPiKEhnA",
  "key17": "37FvfJZ4imVmqUMJcaXaj5qAKYQqphTWXpJGamdLfvDsWnMbYmmfMgT1NTCEup3BJyaiJbpmFumze56RtMcjxEon",
  "key18": "4Q92ACZwruq1Z4fVoKwLVDHPkkJ1CHeewESqWR3GqHjfLUy6T1a79xJfU9scezJSUHhHb59dKEwhZWtqXkCzAtaV",
  "key19": "2BHF9QxQUYn5Lc8dUcSRWAqx9Tr1HzyZkBRmpacZv3D4UvHLxcXLdHfCPz9xdifS7zKcUiKj9GVdLt87pGrBzrVe",
  "key20": "D597xLNrdDesX4UfsF62Qo5Xpnb2EFyvfnzY1DYXaTZ5ycEuvnnsea1qSTidNNtjFwekzn5GKcZ8WJacexFptsa",
  "key21": "tQnx1Z2mW6zd8TxeU8RyqqPNtxTEeBNesgSfW4JyZRt8PQKtYEJ3oK4r6q36BNou241hF4kDZCbyvwt9ch9vDSe",
  "key22": "4d29kKCLJLqSM2ggTXHrkrjzWH4GZvjGVkLaGXbCYkHoP7w7sxPnSi8U11WUvFzBfJWLH8hy3qrq2KfBinYafQXY",
  "key23": "gwCWKjSqs2ss7m1ZXfZxEw1K5YsKpfH2aCR4w1w2wiDLuY7BRD9ycu7Y24QkjiP59GMF7exsndzEtPBrNPp97RL",
  "key24": "3QZbfqJ8LMBE9SJkX1R1bPRRibqhtRR6EG1MfQecVg66pkJBrwYZqsyRQLEJSq9zYfKKc5nTKdi5PRib2nGyDeTD",
  "key25": "2rqWKQs7nardS6LL8M8Q6NG5dPUbbQdVizgD6kqNrGec9FQNr5C8VtsfKNfmoMCKAFgBDqygjJ4qFoRMzSnUHKoJ",
  "key26": "2m6zrCbmdSFCHkXxRSS7WCAzdNED7YzgfxLr8S8rske372KANQ6hCPzhtgz63n6GPwmUTR4d5GTbkqaFmSLfgNxb"
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
