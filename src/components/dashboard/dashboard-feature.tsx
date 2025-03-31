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
    "3GfmY8UwzCSUhsFwtZcV63mqcPsnjzPnYA4wnS51vadCoXSf2eLAwTUvEcsFJg1E8EH84t2KDZ59aWWVQyv96M9u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8e9atnWN9H4taB47RE4ZwGgRZED67vgL5MFpEKA3kHfQ8jDA1MHVLVrdBx2TZFQJKTvby8gDSr5MCcMLdTD8hUa",
  "key1": "4ZBzB7TG4T9Yja8e1v59d6uudqUnaXLxhhbhBpQxdMQKLubrWoDsHK8mcszTsseWGi1TLowfntfbiPQ5X91ArVEn",
  "key2": "3ujCYwTJJ9x8VBNoZ9knxN1Z7Pa3rpdxhZqkz6gzdNqufM2fbeeehL6SeGzdzM4ghbeupCeSgUuDt9UcV5RZXi7F",
  "key3": "3VjSuvp4Sb4fVL6UmB3mfGfMCfvQP6HkyGcQodvbNERXqL6mpyQ3nXTbrBJPh8s7RfzjgDKEPWvBdtJoyy91QGpb",
  "key4": "3oTGCNsfphJVV5fsMjfnXhLtw4XCp4Agoe4E6b4yc5uCQeoNCZ5m9QoabNpw22ngmSnxcWAvpLkD2hSgSXvPDNQ9",
  "key5": "cE7pKjLA1BHwyaHbso75Ky67C3yMuMBNVSw3Y9xoHe2KysQdwhCtMgQpsoxw86mBg8zdgsNJ48Yye94pC6FKmDm",
  "key6": "3Hk3n1K2k4n6uU3FLm1pL4zBKkpQC4ykTLH59GcVGgYNWGwFYVHoGbHF23FVRMdUmVCiN8YwD6fTNrSvjYs3Vu1e",
  "key7": "4R85rH7u6De4vUhtj43w1Zx29hXjsEpLbL3dA7dAk63kA5B9ANzm7exFXAE7MAaFDvTiKwHs3XLw4c16qgyaM9cf",
  "key8": "pK4mK2HBdfckER8wiNaPTK5sdEX2HmSY9qReXA9vSkW5Wr54s65Vk8vMrpJtjT93w3ukV7nSy556VRUqdZmkL16",
  "key9": "F3HN5pbGWJvEe8BVyzUmAJN24UZyTudjDHFUGcSnkeNSVkUTdr2mEViiPTQQpMQkqPqQfNFGnoFrSaT4UNKK8PC",
  "key10": "3bZm2dixPVy2hMEiK691T6zqeJm6AhHEs1rSQ2agPVTSrKb7S7AeT7axKTKHMJThRLm5fSTxvZBg3jjsP582CojA",
  "key11": "2wUiBH5UqN47L1zCrpurJGphLhmASekQCKtnNaoGV5FvQffUBbXU7cSSsas6FSQXoA6pUEKtzCox8icxffjZDtys",
  "key12": "UJeNTwZg2ct2YagifLVKKJx8sXc6WQGqEctQEAMbWYmNTuVUR1kaKm4bYTqhXktVSbZcdHt2whnymFkV2N28JGA",
  "key13": "22WgP3bFVubg1tZKsMDoezSKa8PB6WkqwCF5JWrfSSx2nPKxdMEKV4FhY1Whe8KXDToN44hYhh9Wf6vqqHQLKx1r",
  "key14": "5LZ5oWmPuy336CGU82EvyhYUrTECm1ikpy6Vd33vX5yMRnJHzLWxJmkaDJ69zGXQBe57uoZgx1vwKKcdmpAi4UBj",
  "key15": "21kzTYnTbP3uBNXWVuysQBCDoPagmM6Cs1Kp6cZgpDP6tRJhsnV5p6zbmKqnuf7GCCBvFZXoF4MJs2cjQxGfWrBm",
  "key16": "38qo2BPLk4JfvFTueWCTNqQ5qJM1Z8azgqofD15DXFiNEFNwRviuVSDqCoBjA8y83xMsS7JyyZEK3LYEn2zSuvWU",
  "key17": "2pj3owUqUNgiKtQULL2JVArkEgw4YKXn6Fcpw26BdqC6yE8x442y8MdP1TJA3E5kWcJAp3h1jvf8K42y72f4ADGx",
  "key18": "4gHB2AXgowNa6aoViMiYpgKhwCxHsjQtGHshqeXvgm5dZSUaqTNMZ3KoGKvtA6RxuBfF3ETXqN1uXpRVvCPckASe",
  "key19": "BC8oBP22Z3NVC3doMbQKULa5JKuofj6q9TUvCZdfaC1WWzT2TSusNCPLKPTwCFNCWxscUzPoQeBMNC7UT6EohZH",
  "key20": "4UcteomTniBGL1Gu3ow8TDoS2gVWTmAxqSet1rgoVYYTNTjLGjyZKV5m7iMfhgW8bioU6Dc8JXK8rCRLX6zZHtCW",
  "key21": "2PErnMCDvBJU9YJELVUss9NeDXfae6iBZJUSvWsx8J3Zq5CSeMqESHJcfTXVxx15Z8SLiRuUaRa961zfkiRTGi7C",
  "key22": "4TYg29ivgXwd17wzqA8Ahwe3NPXmze5gbA4LVFUJ2CxKsyFwvdV4UJoLMm2KtNLbCGBj2BhRXbmcj3fM8qu32Mx9",
  "key23": "bRarDRYAc8syFaoxhc8bx5HjLDKL9EYHeKQrBgX9jLCAJTB4CckuvW2eG39imohdK6kxwzRAXJUWWp3nSVwfe7x",
  "key24": "48LfsPj8fMvS2t2BjKTNzL2eCem65PEikYGhYfV23n9FpHeDJbH56VEB5dTHmVXd1H9NFW574ZTyen3tZMGV6Y4M",
  "key25": "3RyNTAzT4EYpvRAMS5dSeMiaZeTNEPxNH6wt4K5wKXbtxBBcirGkSkg5zzxhDeFLWcZLmCQkjvT3pNXLwXPSuRxj"
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
