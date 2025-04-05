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
    "8AqEEYsMLEZgi9ybe2UB87XUV4d6RRyZW31J97wV9gGd7oRm3TX7TTT2zWDLwBx2yGwv3PUxzihDivf9TbXK6rF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uPKsTj6iKW8Pzw5uKfmWZmamPsomTBxKNcnFehZ3CCNr9Reu4TU3Jundp7CcFo5phGARVzYbF2SXe7JU6vEEDmU",
  "key1": "58dsCGozGBsqkGaguDjbwi7sYKVkGkjNEpf71kSvfY3iQvmnUpw5efBJ3tyKYWdJbZGsaWnPHVAeKYeNwL9hzukK",
  "key2": "5FhTvG3njaBY2WfQkruMkTvcgZQ2BMYXmdXyuGGcKchmMuFX7ksuJAUjoFJHkgqxLF385yurpfueUKvGc1pC51Nd",
  "key3": "5BLXPRAxQi7Cmmetyn7j6xTZJSZgtf95M1gJrTpsy5aRmAxL9nTmLyZ2MoKR7UgwBELAWzBTpemDncTopkEoBRRo",
  "key4": "bJgYEZCbYK5c6VHvZeDHfX6kQMgRE9Jb5MnYrho2iZx4AszRQYttmTbN3Q9i1bUpyD1DjaaoL5v4YnRa4tC9W62",
  "key5": "3jbXKYvCzVWuhPYtzFoYtKa9cfhGSAfQykwp6cN5qK2323CDPAab6Rnggj7MLrYF1GvzNTLHv5jAFierhgF4znmb",
  "key6": "3kuCrQvcfLUp6wfGjzpk7WzhJWvC7dA2CvXKT5yJWoxsUimTyGhxkYpEmcKhLFyLMBgv2UemkttQkkMuRNEztoc2",
  "key7": "2eRo3rHJzRciPz7YBGvCCz4Xg25tqmsQaYokVh8qHEUQvHwgsW1ViTQA2hAdueXFTCfjdb5jrPHbJycfUMCeqBF7",
  "key8": "5bhhQE4ZcXx2zu78XEAhEL3mCZ31LvM5FgFeAnqF8npHG6ttxb46dm98Hc2mL8o1y5j1fJaPK3hhPG4cvgY8mTuT",
  "key9": "nt8HYJVSNNnZHAbwUVWmJDgQaaBMSJ9foQoCZVrgfZvQiyi5jmjgeH5JTD914YppsFvpAEzk1ka9M3yESpPvBet",
  "key10": "5DX7SEDnGmfPkWPhCcqZRgLjAtokSXpKtXjkwZi5qyMzd2uAhExhzEYdp1T42g5Xmmb4RpCoahCRZhEBg3ATnG2H",
  "key11": "WCasMKkmxhDxPsmLLYtcHGbedncYH5P2ip88Pv24KYkeNRBSfX8PBfLnGDnAKNv9QMEXBXGXEFDc2fDiZoKmqF3",
  "key12": "5DNPKJanr6gGVaGgFpkja2fQq4cGHrk69jDHT3wyFjxQ68C6GeJVePEGXkE5HBPGdtUCa25MJC1ZRETffZHNwC4r",
  "key13": "TUfwLVbfiCWvuc6vuAyHMbGsvCUsGjxqTHZao9uXwt781CdFAibQCJA3cKpEFLnKtneiHNaJeD3RuypcYdz9jm6",
  "key14": "4qWaEKR66581f3G6Xec1vT1T6XAGpMFBVrSo9VZNcXjsjLR5CVcMoRrwb79GF2GjAiY9S867SeyuFoiZUNGWArvF",
  "key15": "4WkJSifL9CBK2uDAv9hWa76uzDBrQn3cpu8wqMe8PkAanueZYcC2UqDQqz3P2GdEzv7ygaKfQrMYGwWJmtYuTmaS",
  "key16": "4rZZupSBEu3e31Ghi86Jad9EJEhu5ec4EtRKKmhrjNAsPoxqGydDtZSwewPMTYNBSSTkfyynMPnA81idgrVMimxQ",
  "key17": "3bGq82Ddmru61XfYx43VDwUgu7qBGK9iqKJPp4iLgCKQjyqeBRkxKb3iG7m1ZPP17k2JAHpUCzdiSxVVDQeQ4MCT",
  "key18": "E4mnTpKxvK83SknANvbL91hQ83vU8h2Cx78aPDLHHm87XNtbLeXkWjku1dseXamsrhKY9d5QmvycB1Z9FRafhLv",
  "key19": "4bYbRzqNDhKbYdpRe1VpoNoTFRgbrKfQg4Aduc9ZwycsnhZEkjLDe4NrMbXik9LmVQxYuaADgyXEJxqmrrfsmPEp",
  "key20": "2vUKFk6ZNZX4Lt59dwHnaarmLatuSixu9TfkNzZfR7Tq4JR7k3233ySUk8BjGcJLA7TPof8vYF7fP7ZDR1rS7ntC",
  "key21": "4LUdbeytULh7XmbxKMiKnVDfLaYx6MjsPRVhCnD3j9hE9ditYsuD9w66r33Cx4fGubiXDjNsEAzWeG7G8fvofGLR",
  "key22": "3DWBQsAfxq1cUmZjfnLtVLrGuXyynjajnwGR7w1bLQWknT7eAkdYPgAnU3pZAEziFgBhRSc785fej6CLDf6yksEL",
  "key23": "41NE3J2fCw4QCPdw7o3bEfKUMC8b49V2agoccR7yRCzLipz2zNhkvJpkTLLzngaqDS1e7AbAQKfgF5rHhJgQC31m",
  "key24": "2NP4vF7ZmbKLZR6cHPT9LaqKXCRvfSwGgjscYs95mnb9pFo3jPeCEziNnRZe6VUPkmfXjBjq69EnJX21Yzkevk4P",
  "key25": "29f5aZo5LTrhkKnbixhteGn2Fte6jSbMBXjBQkSXZ5iKadzWizJD3Gc55JunBHFTnKeY5D5KRzNiRZvZCmj1sg2r",
  "key26": "EJf8bVV8LPL9FzDazkbFmj49e2car8iUW2Y9aTGD8GCrtVfjxTfppusGMKTdKeZaNg1GQ3DwBbbaF93N8HUN2Zy",
  "key27": "3i5iPGKaR9o9y6asYHbLXXBFvHyVBfVCB7JqCRJgw7jeHQXnWn7ie35Cz5dEQcN9Y6rtYqQX35nW7T5JJ9LBCcjX"
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
