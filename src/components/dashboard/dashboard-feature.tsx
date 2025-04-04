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
    "5ksrWRm5yEGhHBWYWKDUsXxir5jCAbFFVX28ufzs6RjfJWmL5XKoqbiRNs1QT87mArviuQ4sjTwf6yQuMND9yra8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bUHeRkKoUN9yercUgcAZpgXjQRubFMNhMuDB8XYuj1pdicwcbi7QUhY3UbtA9EMdjjy8ews9ZBGd3SMW32GB4YK",
  "key1": "3vGmqp9gfNNMVBRA1uFy1RmgHUbfCPHUKha4T7MKmLc4o5XPqcrS7iMqyFRoS8DJPToq1SYJb1fo7ejc7zDFCVVw",
  "key2": "3B9HRJxoiN5fWutRoN5ishtiCWQ97vqUtvmaJ6ErunqAM2thWSJyESnLNMFBho642PdRb3Y1aKy8C44KzWVVKoqu",
  "key3": "5ExitEMFom3eg3TpukQ4zAhJN2yDwk17ZEMe9Qz33J89B8zaTLJpeff13TGK7wY9EQQxDyv4V5wkRbQum6tzBaXW",
  "key4": "8kSpz4Qv9GNvCsJa3WJghqHJzStaskbwnA1Nusmmz8GnDMJgKgUT7wZysg9QcS1yd1tUXg2DXHbDPG2yrZ71DCT",
  "key5": "EBeRrmAKGDTp9Fkkthev2KYg7B75uK8f7738vCRNNEBtsZ21XG3P2CPNpoz8EsZR8rUpEZx9QcdjLYiBPRwPFM7",
  "key6": "3bqt56V6CMTXGEpYoxaFCEoooTrCF8atdEzz3dHDkEfwRtYQ6wNqLWCD9NqRXQabtrjbVMx7P1g99fn7CsTg7pMK",
  "key7": "5gZaAtwJG7YrZRNQV6zYMCWNQVuDKGnuYWcfpQEnffB8YVLUerJ3Rwhpte728tB1PPe4MfBQEJLm8CTkFgmEmcB8",
  "key8": "2uLErj6MjvesJRiZnd7ytKodxyoAebBSA7NTYhFgaSjkTacDRybfbJsviqFkYA3JNaA8HNXGj2Zt81HqRe6aVGUj",
  "key9": "2xX91Q6i7H1wACCeL6yzQGe56LK8LL7ge1ywWXViHWVwJmVjm6jbwJ7VyjPgkeyEibNiskP3MxQgjaDwdWf9Xr8i",
  "key10": "3AqBxtUUqEuDWnxeJo4sMK4mmwzb8RN7NJTL5x7skrN3WARMxLwRJGrThLSNQs7sXoJxSfo2cTVNWRWd1Q1X4GD2",
  "key11": "39CWwjZ4iv5uR9iiVFNVacjdjy5gLEWnBs7tHqdq9kHAjCTW3zsfEPyVaPckLZhv2ibdD5jp58CsejDQjfdMJfab",
  "key12": "2kEJfThCyMiS25BT2xawLfQbh9EGyQs1jwjHr41B3vUaqzvYQSWFxwqhM8gU3eMpDsw6VB7anBL4Skf8yoSExkdQ",
  "key13": "5v52RFLqGSeP19DdrXPuT1qeesGVjRUgKH6xrAjih4KjfjR9WrzhyoHSVMsAWyu6Ef6r4W94d89Vdd9rwp9twz36",
  "key14": "3tkeEWvcZhy5L2FJ5kbh6nQoQvSn2Fox68wEMGTgNmF9oKT2Z9yZPgyGrjt3uXR5y1kZdj2LzY1KXq4aHmddStHF",
  "key15": "4tuNZiF6aKEPfAWjZ2XiHkiLNM6JFc4q9AQ68R1zyvGfHNr4AUNn843HW9Avhgd3bysmshWZ4WsMqrgJUvUwZvyG",
  "key16": "4SUgHaA163PgW69oJUSjn59rZQ685w9mKcPkPjovxhTJKMnzBPZMJCSK5CkfBxP2iyY7gJpbfiXqbKwhvUYg6KUk",
  "key17": "5mKo6N32FnXgvAosdqhy8fhpMWUgh9BxLHfCjNHiBu2QNkqbuvcDZMdS3XUhv96X63oBRHF8y8pDtb1yL3fJFFjm",
  "key18": "2xJS6CxcWUCwpy943yiAPpa1vNNYfFsVLdn4N2gpj7jjUrnwpe5VFfjnUuKQpcMmYjipMDmLT9uRXYF7dMxzGrtd",
  "key19": "3CqJyVHp2P89dMoK9R483niszBH8BZwcMespeWepChbi2vPe2AATtKmcZUe927tF6mYcxG6TPqiwPmiJ7NzzPkep",
  "key20": "3CSZ1Fioc5sAwSVR5S5bpM7D5c6hRwbeS7zKm6UoA7tWc9RLFNCHSyWA9KSHRM8XEwTPUsmf14bFt8UkGrjoc5f2",
  "key21": "2ZHAkok56eScn56uKb3UhRPdmru9FNF2mejUUHiTz3mG6WRdG1WgAo7jJ5CttVqRX4wnQYkPuyDHMrp2CHb7w2YM",
  "key22": "3qkjpki69KcMS4SaEk8n9rPNYJ2hGfppMrVviVPw1FQ6hokLh2iGSDb1zbMRzh5DQ8o2vVFLYAgJD7hs4gZNREKL",
  "key23": "47dF3G8ENhCEhy8tuAK2Jd5NXiZLHZG1r1tNpPtiZjA5RJCkdqUM1geFSdP68RJJYXSKsR3qskuZWaXXSDh5nUo7",
  "key24": "2CiWxXtuxgwKiZ5gGKTfniSrH5R8Q23fozmkf8NfAEoxB9SrHTACsEK4ypLFZBiJLgfBGuJgnQr4vyzVSA19VPmu",
  "key25": "3P5fVKxzyZyD8MLt8oy9iWji6UgqXPbCUfB9AozYH7xQCy7kRZCFDQdUQTn47hJLFjHDXDPDna4mVLqXnhwDQvVb",
  "key26": "2McJSJsgyE23DWvoBhg1vNqH5o1phxUziRfNSLxMb8biNhq7KBr1ssygVcFfhdi1h3JXqvZES41kXfcFPJsSHCBe",
  "key27": "3fTVt6yCHTixgEFSN8XV6GnLmvzy3hbXVobraahWahwGDw4X3sQu1Tbjx3wkeJJfEDSMso5joJSzbqbyNgKtAZN5",
  "key28": "Lh9VQ7X8PZ9hBJ8eP1xj34b1QXB6Sew5qfEnQH9PVF7YKSJgxuTEnJE7UvmSm2eGcdkEzGr5Y97wAWaAAQ2cRak",
  "key29": "phyyRY7CiwbKEnqRKgjfhBezwKTfUNStmgki5t1XJ4AYQxQAoyqFz9bWHPxBYQyi57hoqRUA5HwMfqkGPNejwLP",
  "key30": "4f8aPi7eqLj7YfSnyWve8gP8iBTbwmpaxxn3M3XG3owp1E4RDSVfCv9vLw6X1SMn8uHNVShQJoLqeGF2V91XrgsT"
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
