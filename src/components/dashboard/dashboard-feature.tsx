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
    "3u3SHcaBC5gcnQmtJZFHem743H756hJrsTYkVmvJwVpEw9kASjU2Y2Si5uY5KwrkyiyyarPgjRxUCMcaSDRwsZN7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5t68nmN2fsNa31Y75twSuF27phTJVS6FGZ8V1LSWodsYqsNuA68S8Zj9mu5VF7mh5sUyFSHRt4bp6o3sYmFaUrg1",
  "key1": "3r1im2Bhja9iR7wQqZWfSBSxSAD2jLHzBLWCAeM7YxDwwLvfDXDeP9uDoDzvzWptHj4YYGks1GxKRoJcYcTzNru9",
  "key2": "GWBYKmEkhwEWHdDp67zrfbdQuMN3nkmVHWJtBbTHmcYsE7EoEUQhwUvd8JN9VDCuzdknhmExbvi4R1A2Kh4PaBk",
  "key3": "2r9Aem6zFUDmeQ8YV7fPHmQ3pAr2Hjc2Y2npWAEmeAgnjpBUThcThBbVGxNgCQNm8qESzktVo3EttuLThqSBMR73",
  "key4": "3nZnkcWo1n1XiQcY6smi4avrs7f3VGpEmCRUNwW6eeeoAzN4T2NjResDzNmPYZUjbTcKvRY1ucLCk81NUS1Mg6XC",
  "key5": "5DPXfNEfTEcsNzbKtA4PfW1AsxRtAoUUvfMhWDKwWYv2JyzjSv5TGWCF3aLttm3Ex8vRwHRhuyGLmrvuRLr9EpYe",
  "key6": "38omWTc5pTfJGvjXtjdrKVWBdfBYQHsM2UAzQvMAAJUEYtTXQgbnhdJ5giYd9aSAer8szhrvsuv3YHLbJZGiYwDq",
  "key7": "eoDqD1NK77qEuiBnhsTe7TdRLubikBJzKgb13XT1waRQqxnnP46ES3Ps5uYA1v4dVUCoNVg4UeHXcZ3sKZcy5XW",
  "key8": "dZYuNS76a73JJSdLeNJiPWe6TmmQMh99vJa64j4cYihxAniQNVcPdL3snL6tHSH27fxsGa7q5mDPGGebnL63Ait",
  "key9": "5h9JUzBduxFG7inFnLDk3dAgcaJVqUotz5SKUM7mTUHVVQkc3iUpmRcNkehxMYZYfay1AzVLVNjKbTCKKJtkoEKZ",
  "key10": "2bh3ybB1PmLvwKXEZbbLm4gRYz6rC3GBYGmT6BBJkmSetyLqT4y1ZqG1byU8pSLj4dAUWmTyhKmqqt8PCHnpktGw",
  "key11": "5XTGPQHmfWu7DYtPtdaYGtZRzfs8SxAbmkriaTk4krdtRvn2CqepVoZTvFucJnaKdCntTiCMkHt71Ah3gWAqpZgb",
  "key12": "2dip5o28VCGKCkdEbmBMe3aNLrqj2ExBbfGZv35mUqfZREdoKkj8UaKDpXM4Scsmp8z6cioM4iV3zWeUD6RfVac9",
  "key13": "3mGBLt4y9GtTPaUjxHSc9ucoAhkgFz2Qq5c3Un5N6Ytd2URyow34QvA63jTNQX6tjAuSK9m6HLuUzzKvDeu9vwCs",
  "key14": "2HRtSSHkPKyQFo5JP54qJZ981Ktvyv9p6euFaoouKRkvn23GgWzP3uh6b2hNVph62ef8pFAe3Q3mztpPiWrrWBWv",
  "key15": "3Xmf9dGZgDevBcVGsEY5dDTb9uNWn57wzQjKotNma8Bx11vnq8HbTFY77iiHyz4yN5M1JYm7eWESKzJ9pwdoL2V6",
  "key16": "21K7hhBDyijVD6tqx3BQnN2FqiG9A6cykNqtLS65rTNcAHaTWBqUeFVv4HvzCh7YW7WTBx6dC7ppNFuUJQfC3RRp",
  "key17": "2frVyyy4JqeVENpAPmg5FGjhWuortj8BMdGb35v79f3jiSyFetGL3gArF43oRT9U7XAbzpYxTDkjf9wSUqvn9XGe",
  "key18": "2sGshnJYgn4er4zkSEfUHoJUpfXUpXoLxwoGfviV5iE6qqwQVE8GYZNw8sqzeZaVQpQsPgFFbmiudzfzpnKt8xU9",
  "key19": "2BGBDZG1udvTMysSpPJmyqJ1JbSRNXo5NQdQ5uNQCNR4NjW2KKEFKCGxcvNghJQP5LT2HRbTMG26MQe529Ra8oyy",
  "key20": "41FBS9cEXmrVGJ8zRcE3m3S44Tp9hTKjANCmr2aq55zJRo1ssgXoCJjRcun8siFgAGadKK2erwPkFMS1w3gfzweP",
  "key21": "2hX1dB9Wh4ESBiP46uKm6wwRJrTpzHwgUibJYYNECLPaxKduiBBQNpG4Dm1zYRbpyyuFcnk61f3cWrTkdu86C9v2",
  "key22": "5svcPmR3NwfDwR1KPprHjd4X9mjQyQKiYvdwBo8zfZB3B6gogACUTLPhGMAvCC9iFFiepqH7PVw3iK6WPPXSSiNz",
  "key23": "SrcpNUEKxExwXHdLVFL4hX4nGtTSwsjNi4V1G9KxA2owJvBnmVN8woqbTszAtUxK4wvCLmv8hRXNDNDZYrvskW4",
  "key24": "2piQaktSf3CF2SedrAfDPnV1mmTpds5q9uCf1U1YYm1NHMzknSc9EDbQoKaPQp13mrxfbcA7ivB25GKVdAaw7i2x",
  "key25": "2LZXhCpphJUJgQr2XnSCE1dMDGRqjDtDKGuv6qwUvqJ1bLsHRqSb5AkeFJvt77nQf7ALJCZvx4NzerVnRhV8bgAr",
  "key26": "Np1QGkATS1EWi3fLD8fQLAMCPB3U6BhRtHdWGLFpBF7YjQpWUMCb9e1PZvkN6VEmLnJUYFgXsjbQojqqKjBMhq2",
  "key27": "3MaFjogk9UHCCVyCWNy5hjrAcVkxHmCpJ5SCPuAAcxLxvk5FVtFHMxqrCRe5qaFbTuEU6QaBtygEGz1hDWAmZC2y",
  "key28": "WU2jf7MevviymwjFWRzHMPu25YW26o6gMkMDBTb4bmUzfXemxYS2cLPi7pfKZrHjj1TiqfSn93tusc4GNviVhUd",
  "key29": "4yF3tHZA2P4DvAC2dg6GizaBboVbEAB21riNzgLh8rhR16XeUWG1VQEwU1JsFqVfQ7i4amUhPmytAKp5jCNAtnRt",
  "key30": "5GhfW2AvaAR9ka9VoW1rvQmCn6veC2b8EJPdxNRPiTByZ4Nwby8gNegfp4A8kit9QuXt7RFbVjoKF87pFPuDL1z1",
  "key31": "4oryquHDnnsPDdoNUSAKJqtLHJZTU4jG6Ga6HxyoBPYhpK7eKrYnekwfGacP85h5ViPsP316SawzQFWygUxYdDxL",
  "key32": "4wNQzYV9aku2hv6YnRtND5d9K8a4QPNVNqBjqGQRnqVMGi6CX6k2qouw4nVpDoYeQB6YkqHHw7AvsxDYHNaJvKRF",
  "key33": "4p6xgkVrvidABqHdBQNqLdYePHFHtJZB53nhogZ27dcQX5mtTDLak6uvCnjPG78n5HzTeLmekjYHsEJZ6BaBfVtM",
  "key34": "4UDY57oVVJeFgarsyTAXWJavEKVzHDPgARVPfdG4e67LF7g3Zm1BJ2MCJDvSga6DqXJfd4PfaHAG2cveTQeJwwac",
  "key35": "5sFMdzwAUiaFhnY73NWvgHAS8BoPT55waSdntfEJME92rD8RaxWR4ERybB5sMRnp79CcoLJyRpbRQHvZncagRMvE",
  "key36": "3ginDUEUJF37vziFCYZX5Nv6JQYLVD7aE3TEvsXt5vACT4z2iQYGHusutGxM5tffC8chEk8zwSdDBBJeusRBkdSd",
  "key37": "25NtUGYmJf8SuBdZEGRFcCTcyWqKJFz8219qiEfQtiw92fGpgL1L7DZvZ1N33MbZDB6jc8aqwTncUF2pfHiGLDen",
  "key38": "3ViR3tGdKemyuGwDZvMwvaQoBEMA4YBykXDdARz1YhJoiUteMUFZ92hpDGUmjkZ4FoUr77ZLsceZaqFQkwDVRi5L",
  "key39": "22SGLY9kVDbeeq2LLzGuQEhdEEqFW4ghC2Nh3Ah5L7WkN26TZTse4SqzWNDuJaxQTrESddBLgnbJoKcwUy9wMuRx",
  "key40": "tgS3BUCcmThTQXBwNH8NQTDtaSPTxdYjezVjYGTHzJ5pyumzSn3be8HGyG5mDFzrxneK4deZohyFt1mEyMdkxGJ"
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
