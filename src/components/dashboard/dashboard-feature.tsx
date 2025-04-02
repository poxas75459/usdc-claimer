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
    "3irxbq2zJtS7AKcT1HfubdvkD1hAJ87ULrBjWCX38qgHCxvkjrzhRngff8PJntZpdweVqipJGbAQUDuuACjrCac4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ASpGcehE5qxkZqGbktw7EzPsPjKP4qfX5Ta5JP13xnueyCxP3a4BGBrUXopVMwYyUFhkxAkvH9VQDoYokzC9jd9",
  "key1": "5bB5ZY6b1xMZBzYTNaPF2wSVZbHsSG2jsqR2m8KummHe9WFQHjMhpgGx45LLpBQ8XPXoq7r3yKuho5oB6yHb4FCp",
  "key2": "4pFMy7cHh7UYN6vpmn95CDyvP2Xcq2sTWY8J7M2jRgjPpj9ECe6Z8coNEMPqRdbjR7DjUxxw3AqLW4BSSpvGMN2Z",
  "key3": "2nbJjHfM7ZZTvTwMidSQafBdgewABHZaKVCTkiytpweeG4yP7ttic1RtDuJmGM5KCYa9CcL78dJB4eb8GAKk98ML",
  "key4": "4nL4U86yfAa4Mo82m1q8iXpz3T7VX72dAcPJnVav82a33xWKgunkrKBUMXGa2ViXPuYbmqfCaATnHPvoU8YpN7SQ",
  "key5": "2ihCXGXSi2GrQwpBJaubmjv6yEAakjQCoQu8N78kr3JMxUFjaqm7mZR8aFZ6dS7ZWT7wyawQH5EhYsXMSbPiYV6k",
  "key6": "4oCDVhMxPoTP5osMjtmFfBq5NaZQyty5bBakHpJw6S9bZmhwZpHt4bhwuSzTVkmkEXeU4ppcim5xhBgCS4RHU7KT",
  "key7": "22sdSHySbAomMm9cvvdzZFVK9R1htk1z7otjwmvqWR7y8zM6W5DFKq9TQzP3TUs5to4hv9Ja1THUCnqhTSCqkfxh",
  "key8": "ddZcwkGHK8X7gYbNWrs3T2UD726kB2BZGn5KEXVMfqm4fqrHTFCXkptVAGY6RsKd4Q9dtfJbbFNpQhXER62BnNi",
  "key9": "4r5Bf5Kwozg5eM3DLG6xtu4xobPG3kKspLYKgSeAa6eMc6as1sNFPSJ1nH9oM9TaWmiekcWWaKb7ciA7Gj6ru9ah",
  "key10": "qa49McqZYLbyPCZ7VWMJUDBRVfvCuUfo9u8M3992YLJZFfZSERy3eEhTDEbzp2bQNs2ZHGB1KfarM1eYoxq9ceL",
  "key11": "3Bjq4em89FoiCARoWekY5igjqCoWhN6RZayaJrai3NwpSvZ62R8CGfC8UaoLfSnm7nRQX7e2f4oSpdr8Fo4W3aLF",
  "key12": "PGqre2GoqbGV95M8K82oS8QtrEs9hTa2WUPAjXnHeTYgAoheDT9J3sJpdNDSMVZZpp4wtFVdfoZDsK9F4K9x3Mx",
  "key13": "2EmKZAZNqwQXS3y9cRxzJ9SC5VYoi4CgNJeX4gbnmgPzkbsJKZZj1Ee5fRonTM9xaQ4mHTyBCjoKC2aLKxTXJW1N",
  "key14": "4s8CuJyCM1pzMTsEtjfVPBydV2TPjXCGGGxQ2zCKw5c7iVg8Sns3fzKpwFe3WrzXkngCsbnMTa6onzE874vKDxga",
  "key15": "1y5gNoytBsVhGTMc12T93NkmLku4VDuHmT7zoMbHTXu9WSPMTHxUXnBna57TiFRb1LRQP6FFfQfqeywNYbjiw3T",
  "key16": "4vPuuof5cP73RisXmePwSFwwg4bBBYWdaRfsMSWvL1u9khdvNutP7D2cBe1m9jGkUn45o1PrKAjUAaHVDrXc9MmD",
  "key17": "4iPdWs4WbMmY5X7TAusX3MtZdjnsRoM5HncbaQpk7NguacyqeZjzVnpMugmLw3bF7Wp2Y8aSNbjaMzgfXGV2mMpQ",
  "key18": "5UCjZiSZefzF5yTaotrVhZgV87xF3njKcQDvEaWukJbEANptkNVpdNWqcSjkCoRqAuGCX4yY7EBgiMGCMXxZovAi",
  "key19": "3RCzvUecWDRTvFU9z3TZjkmFbXBine5RWScxV2rYTHDr7bnck8W2cUnLGRuyupGJ9kywhWpiuSEEbKanuvtrfvo5",
  "key20": "2cyMP72stvXf1sR5gT73fLCr1GxuYF2NTdwkEQjRLt1CVLHaZSRoU5sA6JQEpBv61UnP8a354dBq6bbXhVWspwsK",
  "key21": "3ANyvQqTHVNf4AjLUbxJaqCWLT6cpxpbjN96tMHhRn2fRSiyFof31iYEqJ7cNxNjm7xYJ5EK7t3i6DXHjEzRjfyi",
  "key22": "4ezMCfjtSw7cA8NMfSZK8YCkyYrQ17dmtuxhtSA4jTAmm17sKLZCqCMkriAwntD7GpRjdqy64vgUHzSDXfeieMBf",
  "key23": "3hwBGHv2C5Gc1gAwHb4kS5j8gbhhvp9ZxNc5nXeot9HWHTTKShYCDZj8T3JLKA2yn6fsp4ra5TsoX6UsNm3drV9P",
  "key24": "5PAzCPk9xS69GSuVJzZU3Vx6YX3Lj8cttNXjN8mjguzQYmvrx5uMaebmybmQDCcAELXN2zVtud9Cwzo3DVnsAczs"
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
