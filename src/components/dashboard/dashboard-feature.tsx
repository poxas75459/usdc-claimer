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
    "2vqbS4TzZRidL7rUz6TEqiW1g1Cpc7rxAWWEBp1TZG5cf6RJ9Y3XMh6veeaJqNA1UMDS7Gez1QVdWRmx3RkyWJHg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3t1njydGz7BXs8oMrkTtkKUdCUdoWBYtTWkBexfmkggzA5iNgwGB6aY9Lf5ZmuNWhJjmuDKfGqhgCMoSf2dE2gzC",
  "key1": "371TXLSLtZkpchQnT8C4Dx7boPPYyo1edbf2xbmjQQoWE51stSp3xeixydaZ5WoLfddhrL2gLgZ9w3BFDjJfpQQU",
  "key2": "aCGPfo7Mzv1WC2A7EQTVDn4b1RRVnZxXGoGVbSUJSu9CAxdHVvd76gTDNpkn2SrnGZrBuaKgkGrF7pppLLHAX3p",
  "key3": "5GfNurCNht7VF5GR5oXNWXhpoAFTS5YoagAuJDyeLKkWQVu8Q3voMuu6rfbRRj6cTSeypdRto8BsRt2CMAfPHo78",
  "key4": "42jCWxYdyBnBhs4o6aUWDxzmTrV6b9XMEL4y5vXUkSCPhFHLv7XT1WAtVLJbepTwApn1P1X4aViNWcFPgPxt1Em8",
  "key5": "2Gt8p489bBT5ANFck3KfJ6KDBUxmABRaogCD2k2hvr17BUypdpCey7aNSL2oLRhHADeDYAQSr3npc6Nkn1J7L4kd",
  "key6": "47gAhQKTWMyyGRGEmzLZWSWoSmXgretyhE1xYxd9PcB5cqMLrpxaMqCgSCg5EQ4b2nrZLJ4wN4PUrQfqBeBD6RTB",
  "key7": "A76xeXpptQ252i7fr61xXS4eTRhJkHmwi565yxoEqYhRp6XZ5egWQ71Yjj19uU8uTxMriezpH4TCzXX7BWqwBtQ",
  "key8": "53S3p3SKQiL5Nij1MYH5Cbedf7brwvU5PqaqwBHUstNLcs7PKxHBYx1LxYe25zViEfTqm7Rx1YKJtZXaA8YSQuc5",
  "key9": "2eUUVBkBSQzq5tTtXJqVktQrCdxQUGPytjmHE9bPVrLywtGwKJkxT5amN1T5xe4v49HY5pQxFD18L8H4P48rtV4i",
  "key10": "2BkqCM9VKCTGF4nKBUtUXfQyT7v9ehivQHz3bgxfMgm1QLTJBLsApEK5uS6NpV2ggSfZxsKXZDeAxH4bVHhaGGbn",
  "key11": "36K4Pb6xw3phErn35YoRK8i6STVNsbekKSWj2vEGBNhvEBPTwKnRpwDJALXTwTYYDa6QajQSWKqHoccXPWcAFDMk",
  "key12": "Uw3VDHHreMBYL1zm9A5KnBGzEvSefc7VhTUDC1YLfY2GdZcs2wQnC8KPZ4b6ZhgLwZYaLGHFJLFK8inWFDqS2Lk",
  "key13": "2GuunFLuakgh3PMeNXUJLTzB27meauNEh8k9Mn6mL4bdEjya5Eu2BA5pumzqfwya5LvUFM3bMKLfLi7dRYeLFaKW",
  "key14": "3EtbjZrN2Ua42C2eRgtY4V9tBLLhABEhqUHSnrR9Bc83XRxy8QYHXdJNuAEzBMEKd1LfFL1UqPXFhDvAgBPBSdDr",
  "key15": "4AA1amBaJpna4FDov7Vfkn996ccWAGgdXPNSFYGqmMt6XNPZAKBEupU3yX3j2rPV47qD598XSqyN6RJhBxUkndcp",
  "key16": "3BzPMvbNxNvXtttA7WtNkaaPndN96cHDY2wmH3cHuEpFrTuNiq6Rvyq4robKMmsVajUxtemzfZLaNEoB3qgXU1br",
  "key17": "4rTHypSNPTUm68JyESvZ5W6eJJoESGXxtowfE9HJp7Fgu8KnbJBjvKmNtSqkaHU4vGvgXdJxjDq3NuRbC54CZ9tc",
  "key18": "3AoUXftE293scFUSVSQESVsmqU7yntGxXefGijBzBGCtRojjwycv2uZXQU2fkDp9LbqSuF5hjMNxQcjdUQj4eFwy",
  "key19": "5F1v3CbXoM9Z4QNx53bQtaaP6K5NF1rBJxB1rfveMNzhCisdnD721DYv2L5GTsm7uwBFcLACm79fg21khFc71fGy",
  "key20": "1kepo3GwHDZKNoja8q4CwVKW4su3AMfKew9yEFM7rLZGahRdP6TZCzZJe93x83n26ZWXvJft81Jkaj3FChHCfr8",
  "key21": "MFJDFDaopGPWbTvkPtotxe6HdXbFt6LS3UCMNhTgeW5ndRLkY81fX28MmcPkmtPgS71v5u1xeXPptGwEjvRUjJd",
  "key22": "5oXQtkJNA5ufHANc294PZZvQE424TCGfWDLkRT3sP5Gf56kBViLwsEGuwuxwVCuhPErfjYyCFbyruA7GAfKUN23G",
  "key23": "FU4Hrp2d7JtnYxDGnmmfbUzRrbTCaQ2nJ2pivBpq9km3iFB6ASGzK9eHUDd6KQdfdNLP4hqhhDfHokJLhmChTAp",
  "key24": "3pw3x9sf6iAdtzrTD7VW5iaR6owSoKzTBHdHAJuCvPT5EwbD2vEV51WnUrbeTrHP3TDn5W9s3RwMhP99X7VrR639",
  "key25": "2ohrpVT288WLppkipDAUFnF8MLgxGsLhQp2NYGVvfsi1DTuHuzAiEjbdztZ1v4NDmgmfh1KAezccFxxiCBSc1Cxu",
  "key26": "2gKiYyjMgP7TeGKH8STKvjydnokfHgDwaroeikXGUDPQU9xMcgQqbpdyBtrGfZ8Uu3kueqonPywBLQi3ZfAUb9cb",
  "key27": "3XzAFSTTJkFSsX6pQ6dR2SyakkHcJoBLZZW9sqkbSp72T8iqHF3MUDU8cxnsyRMAY6NnedWX6xXQWXi6N8p4jP7C",
  "key28": "2ebptLYv1Bfmo7wQhg4aHabH68XDR4sTg35YXrJwkAFiAXpwRCvyvThg7Pzrjp76TyJULt1J26LucofMZ9VPVsS4"
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
