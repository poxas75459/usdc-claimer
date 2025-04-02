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
    "5B8pT8n5qiHkHQqmbLW8hZycHzHEXAnGVosW5yr7zkADPLwNHbJho4YCVMa23b9E3cYJYTnyYCruG76LcjujHJXB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MCBpsQ4tQdmAH9r87DMwQrxhppZJraJ8ySP2G1d6S2HhLZrVoJPBYi4ymbNyjDqCYPhqTihciGvchTCZj7cvcpi",
  "key1": "aTpu3ajmP1pLTyUfM9tr7QDtrCG3QvjSckdB5DxZVkEaQ6NjsMPqFLyMhWECPGKdN648XSTf86FW7dGAUaDqhJW",
  "key2": "5WRNNd5rASKud925eeEqhSGqsYgbGrLv2hiznUAK4SbPDiRTeKu7KTm7puJR3YMUt29F8gxi9k9cdnHakHqXqPQ3",
  "key3": "4Ybyi5Qbn71biuHvb6VmoZf63oHvotivw3pYsr2tpQJVPi1wdq3pcRd8TxoszC2fRvsUtCq9fRvvWkTtgfps81Mh",
  "key4": "5q6WJzRps7TuM4qditKKi967YftkwfnfBF8xcbEzxKdodZrXasLLPMkYVHxFgZpMwnGfjiMHe7k91qKRD3GjTcdq",
  "key5": "yyDrWpjHbKbw2g9kbxLrumPMRWrcyGTn9x5oyvB9SzuPiaWsHmUd1T55qyMLT3VXweGnLppJUW9RcSBbiu4Js3M",
  "key6": "2dvM8KaxKK7M9wfJX83dzMQRgV2akmo84VYqRQy8mcxr1ru2PBYkmrRhsrHznUfJ4Z8n7zXvS6XQCnZKWMH9BJtK",
  "key7": "5gYqvXHcnbZTofBdjE3T3sdqzwWZTZsFbfTQcwNYm1TRsscdq1i9CAgEaqh5En4EajvyGSKhLBoovRXNgWogPPC8",
  "key8": "JXC2v38JrgBXNPExF1BQKyrMsgxhp15cDZXbfxNG4MNMntZu1xJbCbHhA2vN7nW8Ss9Km2vgJCEn42JZdG8GDPf",
  "key9": "5kF3a29JbdPmfMLVwJrpfvMpAhNU8uNYWcR4TYQePxKLtwvzoMYdxpKPBX93q7xR9sAgcG5qcsD4yCBiXAnEzjuY",
  "key10": "3p8u6R2Yo5tXwzXYj8GcGSgNXr1chs4D82dF2NYVsC1M3mfVR3StSscTC8YJqpYpvY6pMA9ar5ErzANCkEms2vQX",
  "key11": "5PPdeWG9SgyhoLAfDAPQA5rFbAyTmvADm6atWf1cU2LwzU2P3riTwcjM3f5h8umCLMrTHCR1H4iBNZZxBRTeYynV",
  "key12": "phhpkE1T9R2GnyQULuT35zBNvrgAUHsZy1YsRSUnDJkjpvcQUFdY3K5rmHmY5oU1rhDmd1GWTgvWKN8mW74acMz",
  "key13": "3GQqpSRHCefSZ9LdUue1eAt6ZkvDcgqXrRrpNVf5M46BiSYEGTSp7B8aQGeBNhv6QiHcFbwZ92XvE3PbENwY9raz",
  "key14": "3fzFJ2Jg9TmNRSqrJv6UhmSLAvzEgVMazUJDht8T7L4sWYcyij1WrjjMC5oiNsJSF7A5PNQtU3851TDJc6uFweFr",
  "key15": "4etpcXBgxxLFsafLVNoyoZZag3eVqk5PvAJXgLhHetd4hjxkkagp9FDqfpCj3kbHFB4yfvazxKgB6YWX5s425qxc",
  "key16": "5bFSMFRAfYu1cZdbWa6oDJ42LtE3QTrYJFGRc94msA6jbQGGfonzRCH7pSgrXDhgb2r9pFNtNAmVnHA5yoeZnJF4",
  "key17": "4KvME9iMtwndokRvANYmKGL81EuwkjpgYnJEfnznDMoGTC7sTmTTQhi8WQkBF9BjDmfBMis9PJ5f8TqunexqMzT8",
  "key18": "62PUBjjNX9wnBCmcUdXE3vp786D1eVVswjR7Cn1cYvziteA538Bjo4ofAp6JmwFetT3nQSNVEciZbXAK5W9LFMCT",
  "key19": "5UDr6D8yuDe6HRHjf9jFEBn9HDfNMwUKVUVP2LsdgfiDsTJ2CeEnR2DEzBtmGfbh2zt3HExS1DcpSpoVVsCFTkx5",
  "key20": "2zUR7FEmfdn6nHk9kjdnorZ3HpERSWpVQe4jeQURzNnbRQ2ZjeAdi9b5neR1LzonWM38ybDED2M343b9ARqGB9kM",
  "key21": "5941scu4P3mzXiVjgKUy8U19viZiJzffzMCrq7JcCHxzBDfRGzd14tHkL29QXyPPdnHC9Cf58PyAA7yDLYzFBBqt",
  "key22": "2iFN7ptStiUVYtU5y7WpSHz9Bp1pVu47otftnvqRCTmx7APJHctjDYizbSuWSSLVFt6gNzXkS9NgequqiGDLdAHR",
  "key23": "5Fpy6yerPuhn4KECcWqFS26NdLAqkfcfjvxFzQ23fxUi7JUgPVcqV1uMuqPSufdEeoaNH9PDmFxDpsikXtvySwLW",
  "key24": "4NTNe3gWT5qCSLugPexQwqGByVzVHoACgwnbxqxjJZZNPH8RMayvx18ax3zFin3NctzcHCcxwatm877TMBwSm6xo",
  "key25": "2NqdytkvB35KUFA9SmZAVMXPTUkKjkLxjn2nZMue2ow736XgNx7CEh2WEH4rLP25QccZDF6vzgm3GFEfk9Js5Zxe",
  "key26": "3k4EZHhaGwuPrgPp6vgQgB2Ky3PMiDqKY8JEdS1akYfn6cR2jWLdmwwJ9BHdYPjnX8LzSKJD7WuBvPQ4ZM77cFa5",
  "key27": "5bpD2p3U7wTNKV48fETZKATsyKiLVVxw3gnFWErJvgX4Eh41o9UsjGTTxgE7DHU5zdytBVxUbWMnzjdbYxYjmKup",
  "key28": "3HVweLRuj16Diu58CseF3qbbiKn52wq11kJ21GYG3dDYZqJ6RoyNu63iuhTfM7QT121C23gqSeaxhRmFM9WRmScu",
  "key29": "ZV9GbCHEupV8zedNFXqkLRuXXfQhmALNip62b8KwzHoidFjA6FrVP6LVNjiyJYNRaaAFWNwzLctPDcD4iUdeYta",
  "key30": "5sSJZtPm39grN7zcNbSCkaUy7foFqFmUXPT7J74wdxWmzoXSWuLeccBvFTK6v8BbDiBVubTgiVTCRroCNGzuFVG4",
  "key31": "4iTWqdFCfwiwYgFbdQwBs9iATbyNdPwUYM7GpzwNV4qWmTHr9qbrj9Few5N7k9NAw7jSqvfamoeos37ZNwf5bgzh",
  "key32": "3Ci6iDdKskzxdzHXgApx1diZXDYrshu7z8mz5Th89kMhyZe13iSmisZMrfkfCGXhs1KPTzSGhW4pmE6sjBkcwwEB",
  "key33": "4cQNm3NqATpEJbRHmKTTnc1ayCqWLCbZAcX6eNBJhiLrj3cf7izM9x2GonsecCF1spgZuGPRgypcH25Vc3dhyL2r"
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
