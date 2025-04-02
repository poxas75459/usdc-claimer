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
    "28ZuPTHVfSMakzicQJp2pVm9iGRjggucwa3Nmiu94Wrc9F37BcuNy9ZqnELsMHHAywA159kejUBm5kkzCbeMpgog"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RmYUwDaeeQwSY2aXf4dzemT8MJ4KTJKGzYEizHscoKA15CPYnd7UDzCeqpawTKynYMt3eyJGGtkgAfU75gBkQ5A",
  "key1": "4cx1gx6GzjrnTZ63LRDLsCjJFkXpNSSCRHKwxzW89RJcqPcmcPKYcdKipU3CFaVz48WvY2B2AJxuAYq5XktDJrSf",
  "key2": "5fNe4c4ky7FAfmVoGcdXpTtE76z41UKX8DsasNZ3E4FtPzfEkoPzrVnCYDj33yCsfhzWNtT1tb4dqqqHjRzbbxeA",
  "key3": "27EvK3M2nPuxbYVawmSVJzaDdRpNGnVVnHbKQZVEUw7PUmcsVqjC9vjC9wfJYfNCWMsRjTZVkYdF9ivWEmMrg5Db",
  "key4": "42resXfTr3WNsxj9mx6AgbNASu21gVbrvuuHT47yG7yminBw5m7cnj7jh4Jhb7qHtUbjB5QfDJn3tBTGdtgCNys1",
  "key5": "3qgw9Gpz39JfjU7av7Cqs8DX3q4GrktsR1r2evQNUpT84P2dPWPem7zpvUeBpMsm6idZYAc7uAZ2yXNLAmz9Rphu",
  "key6": "qnFqDzV3yqA1Q5H9B7yWvM2mYq8P9ZoXLP58BRSwryag6ZsALWUQsFqj9r2tnrf2KaVs4UyqAxk7TD5DrSnQGG6",
  "key7": "3RFKsKK3viy5tXonCAHPugyyKYrg19g1j7Bpkg6Y9oCVXxmTXUnqcq5vCVxddS4UNg4W4T26FDL6WJYKyAYqEnu8",
  "key8": "5TW5CSD53iKC4R7S1vZEfYLcDS8fTSJdtAfapj4oxES4TcLRwhUUYGdVKRF7KJXoj9P7myKkjxzyJqk2Fqz6cWP5",
  "key9": "Hrj7k6qXSqg1o95H1nsj815DccpXigNd3CVomEimkXcYPsv1R8u16Jk4QctDnAjK1gGfk6gVvEhXwFTc1DmV7Gn",
  "key10": "2TLdoRyRfu6vV1kD5eFrEH54Kx6LeuBvcM8aLwn3LETE1G3vYrpdFu6ug1aiFeuRmTJEPpjZuk4cbKFeESCVuWHi",
  "key11": "3hH5wqZ2L13BqTESKACSm2NgSTXR9puEaquvzwPWdqs3A4kdoDZt5cqkyrKmmxC4xZjho9JCMsDr6o6WcXSM65hu",
  "key12": "217sQcS4bboCbnRRG7N5u8xcHdeVP4DWVv4gPqsiDppE5yhCBFz9J1gCKe6qfWDo3LBxmDJuWpD4smQjkPDU4Ksi",
  "key13": "5roo5uz8s8y9EWyeJ42AKpCaTR7dxahYgYdsZsQTz2q13asLUj1XbeCpH1jubWra2aDkhqr6Rhe6afqzcckJMxXX",
  "key14": "QepMKfzTeDdg14gZExmBQiC8opEoRg1hwbQfANE4ixb3pMhtVKABSLtYtJQKNUsDQTByhgMH8JBSiET4ABbKnu3",
  "key15": "2rC8VR24n6UoAWyFVjYsMHU4sSsgLMu2MmV5UcRsFxwBSRTAuCD4SVJtFtFA4mVkq6n8EXipewcPMHDqx3BMakb7",
  "key16": "58uVWu8f6S82oiCrGf31tYWnoBPzWedy3785GkQgsJpFgog2VGeo2fPmM9HZWneR3xyMYp1Ar2LQeDNV8kevhkkx",
  "key17": "4c2mVPgSikXLsW3mK1m1L1tnyAB3563G8ZQGuix4onTqHqkMRipYes7iNJA6jkLV65SKgrWSwa4rcCHSfjyd367C",
  "key18": "5yCftTLjVVHo3sja5N5N4z8kjAZpnUh2rQfQXwx5e3H9C2MR6VDW9dyF1c4fA1pHYSDxHggU44yESnxyqvDc61cc",
  "key19": "48RuDLjCFsuDBiVSz6tTspCJ1HY4MjLTJWBhzpMipuDknkxutF7on8uA1RTSWWEjy9WojNxG2pqBBCQawSssyfCw",
  "key20": "fp1w4Y9h7SypR8V2cQ7oR9G5JR8L8QCaTczzMB5kEyYwpXN6Uu41HuQDbJkT2H53ayQXSCuCBBLbjDNtXD4Uvw2",
  "key21": "3DRsReEEDjem3TWqRxT7jAMA6qafhS1v51SBEHVi3g7BwCdTTD42hwGgwXSKgsbkgAMbD3VFhks4RzhXuvoFp6g9",
  "key22": "2XP2DHP4J7TmEDDbAkrzh5K9H3aythvtetfQucBiPNqgmoLp5UuJzv4EBrfqvv21X6FPjr27nGPk4VYKGcvEYe9X",
  "key23": "3dYoVP1nBQFPdCHMPihvydeckZMzXi21AnsPR9rjY3keVisK6iCoDPsZrgTzKyQh5QUQUwiWgcpZ2Ubk2KJzmexF",
  "key24": "MnxGyuLx4JHMpM7qA6Fp8y3kbkgRu3nDcUqeZ3yJFbUDN3MLDTLfrdAPSMdCAQTnajUVNkYN8wv5qFntEFpsoNk",
  "key25": "2CCsrGCrNGiyb5rYz4Me9nU68ws9WQNjHeCwuxisbUQZXdyqNYnMmwrVL2h3ijNdKY9QinKJCBoeno2ejP7kSpDq",
  "key26": "3XN6pG5Xb2Nwgc5ufzrs3wJx3WJgQq2cDp4vZHVzr6wtrVpnszYM4TTMuvdomDUp4Aq7gtbhXQxHoMR7wfonM2Zn",
  "key27": "3r3fhbZXEnyWF7kxFfRcnT5acoRFgnSb97rzqCxsQcJ2fD7sa58wqsnFfFHuegEGM1ZCdboRAUQCxAqjeX3gXVjQ",
  "key28": "5yyGebtkFKDJo1d3Hn6wMtujnda6VEHkdKpVQApTYZUrcjKpB6EEVBgVjVzQJWgCoJC45eiQKZ4Lzi1VFcFKEUup",
  "key29": "4Y7DF2R6mjmW81WbdwZTaYfBCyg1YdUBXoxBERCdUg4cKWfsWhrGeAqUnndFUGED1SXhv9JCm6cPAnd2dZfnjsF8",
  "key30": "2inDyRhXebNAfjDnJi6zHKkYvfTMNc2WcBXiVCkmZuiicVneKsaXH3ME1UEhRHKHjhUHKPrGSqMEeMpvHXshpktE",
  "key31": "YpJFPaRk8RXawTKbZgDjmpDDDFqsHS8Vie7dZh42in8788dASZLxKuwYVRFrKNt9Q4H7Z3LnrLbPvHuW4mkkvfW"
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
