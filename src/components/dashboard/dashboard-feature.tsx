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
    "4oQHWHLStGGH9MNTk5huRciRTYcT9JUDJcZHptNkXChadjQd9qQF17v7XLuKucJRRnzscUz1rMj48BnMK6GoYArK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZPy9rcWH7HtsPxgiH37bHabuRMwVXvMWDqibVnKsNKYN241n11NrAnW2AAiNpY6EXfJj32j6Zy1kGtZiow97aT1",
  "key1": "4ir8P1MUt5bgLSu8rza2bkHrC4GaYYESoz6Jq2EFX93EuK85ADsdhMcfvarpTzSvwfEPspFA8F8L6exeqAPWbJtp",
  "key2": "VE8GPCjko3R5CHgSxUjHvzPyRsDKqRraYg96URDvJdkGf739hMb9PxVcoqZ345Xh1XuNEvAco2aMXyzFLvHip6G",
  "key3": "5D29MTbumFF61hvuz9wRrfVyLMtRfnVKUD4oR36H5yELdJSzjoxua9mCLArNb81nxKCYDDopQVceeAcUXDiL4nvB",
  "key4": "2zmfV28b1FsLW9JEoqfpmjiU1HeAMgZ5RNozz1tHxUd2pjeF5Hz56e8MQkCStnf9pALkLEhCLhHciU7AKVur7wFz",
  "key5": "4D3tr4drughMv9ip25iQivxitpEPJt5bS85yfdQcLbijQWk64f2KZ8SAxiG99ZJQjwijd78MRn61L4XiBQ3HHFz5",
  "key6": "2exdJyn8XJPGFfiS1mZ7LVMSdSxXAs18kDp6X3MQ1JWLVAj2pVzDaV3Q7BKZXSP37fMzdr6r4AsLSwaoKrKvvwth",
  "key7": "4FgUtYCy9D5fU2EaBQtipBZvUGZzza8wKasehMJqTNRBtBc9XdEHZSnusFdhZLkgd9jUY5mxgr1mcFJeanckkJBJ",
  "key8": "5qAT6PfmP3qmNg32Uf9oqiZNga91sFdKNNPePmFvLKPf9i2AHxxRqETB399x9uipYGUK1QsVNWMRLYSqeHx8ZbfD",
  "key9": "3ML9kPghzQnofTyfuHeHLxKeCucxg7kEj9Ef6nQEprc8bTQMZkysMDd14psZKcHEhEWZ34nfA2BGtvggPyZPWzoa",
  "key10": "3Kkf6pdHbjasWW5tK8gaS6Z3WJ68cpofhfgNby3Y2it7JKmUpm9QftMRoETJBGmfqgoUwbF3PxyYhoA8T34XQ1sH",
  "key11": "hCaZviv3QPGjWPtQwcEoQgqsoFi2LkeZKVDM3vX1aAcD8CfKtNxt5Bu4a6mWPtDCc1gnBcUic5Squhf2i74rieJ",
  "key12": "2XoAeMwrUPVTPz8ZVoTnrnAPmbXLfdTii9nPKzvMKzEBMTG5r41G9Sc87WyfwCTHMXFMY5ZChELdLjVhwAydqoib",
  "key13": "kUeiLWUxt4PvKehpANLo9M9p5TSznkZH42eB8PKLjZR5JZb9No6RUZMvoJJxCAqvkjtHSG9Gj7K6inXUCzZRkkN",
  "key14": "3LkvQLNVafJhKMikmF1R8Q1bsqTi95en6qc5NhGjDMV2t5XAtGK3nDx6BWe17M5GDqktKDpYrmzVfA1DaW5NgrXv",
  "key15": "5W44D2KKqu9LkBMnN1FbsZPD8f9xWjBew5F3hNaAZBBwParHjYtZELAKbUXD4gPFAzhj6zNAmvQdV4ggrwUsPbzE",
  "key16": "46UBQzHLv7rxsy5eiZkkBi9dNejVhEoNRpU1DXX7muSJY8WoA4yYdsjENz2xtxw9jpRiA9M6cGr9YitAN7dgM231",
  "key17": "2c71PSYjHcpZe3NmnGpdCwTfhr7jVRwvgnh7aufSmZ9eDRoPhaZMw2C1TbfKsnnzvUzuobGEbEFo5LHNBwy5ocFF",
  "key18": "44yeyjgnCTJPeRtxaBczxE85QoQXsd6Q8zverKMNtFMqkhhHPCh9i8G83GkC2RfYJvN8qum79bZwNYCXU55FLNWK",
  "key19": "4W7m7WLYj8249JxfuWYXn4MaLfBXTtPjSHjaDJLYTafCLEie7H2B3nxDn9gqRUCqrHMcmAKXdrshcraYHQULaxGY",
  "key20": "5JTiWu9mnZeVyNuLCEKn8sXaPcNVebHuoKvn8Hm9QiW8Lzc7DfB4XrE8mrxd2Up1JJqHMTDC6NQXH9QvZuqCRBRv",
  "key21": "4mpEe48YBL9uahntLL5BiDm7kzR7KD6zrS3SRs1RNxFhxfUcPjywABb6AiDPWNZxQTQwgDmEyTqcH4iSCePHYtdz",
  "key22": "Gr9y9Ja4x3TmUVA11rjQypNA9K8aLFGAq4mwYzWcd5fam8RpZjsxsDh8iHake8nKxaYLm1R7uJQ8MFcr7UGqYjh",
  "key23": "4QJ6g5s9rKkyVC1yDyXcAdknriaiYDrb3jwmp9rGcbPkGAfVRGpkg2dhg3b97e3cncv15mvUpNXNY5FWcvXBa4ge",
  "key24": "CKqqv24KznwNyBnSTRFNRCAN5ATV32vSFWu1BCNd8LniBVSVLJYLNsB21AzB68dVWziDDSYU9spXKkmuArPEabj",
  "key25": "61hgcZpdGE4t4nm7T843fBSbxKFSXGsH6nr2yFyXuC68raSn3djiwe9spgMkvz7ZwpStpaaEaJ2zm8NTEm2cUBNc",
  "key26": "2rZa9ftgfa7CFpkeYQrRGkC9ByJ3y3my24kExREH2yTcd2bxrQ41jfBx6VZYNb2VkqMqryeH8apcNEjTnmEixfTg",
  "key27": "2URBVnYqZVqwMuDYjL3nS4aqmEVw93Uvx6rQdTizxJKn8BJQ8mZE5gDHzTmopsuqdLR7jdsqbTaBqqhnoujtHPkN"
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
