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
    "4cb84JfPHwjQPT8Qp5L53ALAENWHZ5nyp42xUKguJpcn7f6uUgv6MztX24TdgkUeCuEVqPEpL8vEaojRSPMR8wU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24CbmvP1vnFSSQADLYHhH7ni5S8dSazjYmSLNDaqtP69FCwk6ZQZasjpWaYhK4wa8WwKB9sVDw6ydzqnTzNfxQ1C",
  "key1": "1uVSncfFzY4a1Ery7NtxWAkQWLpLiinAnmVi1Z31H8Kp6C7hSLyVUwNt7Sy4kRjACvW91CHBsXCAcAypZpxZFjY",
  "key2": "3anR8gsRkTjBichiVyCZitWoLPiYLuMMyQCCG1w52QF3Dz9NPmK2XVWAC59PvwgopLBbPyFe51h4NFx5FRj8akTb",
  "key3": "kRJBbh5phF1LhuHD1SQF65WfondxLh2MXhrwTYoDkVVhRoLmaT3vNT8xcuQr29FHvoskuBnENQm9xcpPeVDREC4",
  "key4": "TfcPxbEeiv1SZWusWmtmAJksHpYrfzjD7dyCZ8ecJGJv8gsvkKhyR7n7wnTKgr6GWZYb3kqwKkPsPpxGqi58SEo",
  "key5": "2EnNkhQzxHGF4EHCUwq1TMppTK3io2jCfPSXWpy7iozzhP4p4p3464iDBdcmdFHRQZ1bSY69T6zy5sEX4TK9MVG3",
  "key6": "RYvWkX6fMxoZYy8urfYJctE9yF3PnLkYwociqPqAchyHcjww9n2E84JZRUZAyNJJ9ycPnKRCUvgotvepzxBXvBL",
  "key7": "5VALq9F4Yu4JR1YfzJ5LnS4ptGa35pb6Fh7bktL2LauJMrHyPSznXrspy1freTzDrMucvu2akSB5vbb8w5izW9zv",
  "key8": "2pRSQUY7P4RdivX1Xknf3v7ZVZNPcNsaBazLcFWpsaQ5tShcy6gGJdiiK2ezb24w4zF7GVqM9HiYQ4boCCQbfGJD",
  "key9": "56qaBzK7tNChJj9a2D4x5d47md3WCnNYz6f6osfnzRR5o1EbZb7qH2gCkzUcxrbmK8vnZ7vxx6Wd8cP1m2mFKr7r",
  "key10": "4yHCLX9WBBzm33vH4ZbTGGw8fQqRxUisfaP5cChojbvWQkLFuguj9Guj6mVgitLpKt6Lqkz1pMMTPmpBj2h567qK",
  "key11": "2ekbnLgChDAu9xHoRmZHyFv4yhuAuafSD3qoucigvgGPFuLZJTutLmm3cgAfWy2KZPP1zrJrYeH8EiQMym7fzVjN",
  "key12": "5pFtvccoEHskrcVBGxEmV8heWT2N88Df1vRs9NabELY54gpdWaU5ehaimRe1hEyNaZTA2gYxqSg3R3isVXFip4we",
  "key13": "2PxRuUAAxSmX1LqrF212aKEayT3hMD6Ru8KZ1zMFoTcLjqNwp18yPe7919PMCWbCns1Jb7jtcNAKMkia5Y91LCK1",
  "key14": "4VygWoN3iHBg4wTTE6JMXKsHCqUbkK9HtbfMFgyrikh3Fh9GBPd4pJDSpczoxWVMCKjF4rDEbcSExmYwQqaFSPt1",
  "key15": "sFoJKZ8DCqmqapgyJyDwSNTdqnK55PnVBPDBtRSTdPSTAWWPyyDD6hdmAeEHj8sura6EzVvDYvHnea6wf7ibLLs",
  "key16": "5udYYohxGC8FhRqxYC4DRo8hiMf8CnWj8qkGJeQ7ttbewYUQs3ECrsN37G1as2j6wH8XpJDpooWNkN98h7y8k4UK",
  "key17": "5fLeQgTaTxLzPGkTbRXBdi3DkxpvFsVC8KT9cLKkW4Enor7Dtmc9X3ekyU8U4Yfyrm81up1mXJq78QRVVXaHFsMN",
  "key18": "9zhRtFaGTwjxzTbetfejcsUSAS8mMtKC1CJBo8vDUxTcJ5NHf7x9EZsUYfyjVgqZrba8xV5SgiXEVYcpZWCyqqS",
  "key19": "pg5M34v16JLTehaNaf829aeLR1ESg8euCxxiQkmojttZmDyXyrdsBxFue4oLznTnxDtQrdo6egYdgHu3taGfBxM",
  "key20": "2d2QEt6whXzmPbpD9zdD6rfmX53WQyULf47V9P67eWxVtaHA4b1XTNv6fk3vnpyPpnbhBgGEfRpRPPouSe2T6e37",
  "key21": "36SpP2XpPxvZPNNaM1N7evrvRTdj9yA4J55nMY7AUJEwtPSEqFYbnWvKXpkZzwgBMB8v5tSqPv6NJQXPL6T6dyUM",
  "key22": "3XnNQw9V5Z69ZP3T52uqbYk3v7aH8chHVZkwLCZjPkUBzX3XQL84X8B5gFG1uRsjjv5BfzKyme56KonDbXy56yTn",
  "key23": "YeUswtC1JZRoeBvrawuu5HDuPvskrgJcZ37xdKtdVYgyqx9AYFVB5755zYptkuhLfVdU71stCxsNtS8EF9pdSNc",
  "key24": "4AbDR78RHiVyuN5zJVxpysszc4xoGjh99ZMTJ3wjujgXYScC2cfbjgD8qriAGrkLdcPPFUqfofdEivLpH3qhq93b",
  "key25": "3GMB59wckue4T9fWbw2Hmhgmf9k4DM2LYiYBV7ufLa6Cs5MKmArhZRhjooo4ZipNzqSLoxTnxuyp2JkDLEJthyDp",
  "key26": "5x2DxVChnoNZ32sP3HDab5pHYBryhS3KPsVDrdTcFRxBGscNC1VFzApH2QEZQN313bU3x9F5xxMw3iQGTTfFLDyt",
  "key27": "3iYXd8qmVN2Snx16jfdTsfjFYgaYqY7oHCKQV5c27Uw6ptnBVHb7XQDeWRmvmcwF6DqShB2U7PuKi8RkXm14kaPk",
  "key28": "w3T9PgtWrUnvkiHpacxL6MwZtPAbnk3XkgwZMzmENHeoTXqpZowKEnkKiwAmZMgrttuUUP6ZGhJRVGhAfwEtYox",
  "key29": "64ypcxUr4T824QrMS9V1AAvyNT4FnC1JHj3a98vgf4fifZ2Trp1yR4BHZwaw5Nj2436e6ZdF8B8hbiPLJkgeWQdx"
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
