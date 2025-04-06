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
    "8JKfpbgXJmETKZPkKnj16oPj62RYTxR4zwkrvSczqwzNmDJ88zstz7SX9Bx7sHPoiXRigC5Pb32Bq2JrtUNq138"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4o2dPqT9ppS8EYRcHfWvbDFrhvDxHSjfXFrWU7GweVn2Ga9RJACiFQWS3hY7wrFQqQBfekqRj6qEMfzjjD5kLq4a",
  "key1": "4PaMhwYcHVQYiMSTJXB6dpiXvN7c7Qnbz1EcQg3MXSAqVah5qn9JVt5zgbdw1SqmaieSdDfeoSiCMkjHUPy5S9qM",
  "key2": "2WPaer2NGJeHXZbVVxyvX57oVHRVr8vsjmtLMP9YHwncb8M8xzQf7mkYJDkk43owu2nNxVHbCixQEMt75RhEGVbP",
  "key3": "5bJcnVWTUDDURfF8K7AkrQpJcSM1D4tnMC8wtZZ2A3U8MV3arhkRJ21ewnQ5Shczp3yED3y2Ewfwyd8fMCvoi1V4",
  "key4": "3FeALrAxHkvLaYLPUQ3Ao4ysEgbh5iwjEc4mhfDK4QeiN1rZuVZCpbR4XwoZ5njWAnSVgQ57vD4K35g4t12G6iH1",
  "key5": "4bZ3fLvw2gMghNmYkS87Qheh3iaM24E8CJF9jdfKVDKjjWrxWVgzYAymkWTfREuNoapTb6XasbdFjaYQg5k4nuGq",
  "key6": "5x36WAee3dRh65bdxurcyvP7NadnpNVnWymmmwa4PBeDEUJYH8HRToX1eZC6H4Nn83rqgyqdcJH9NhKyipejCTNt",
  "key7": "swipSP4z9nkhNtHHr78BpHaGxaQVZZVYRKzVJ3jKisTzWvqJTp8GdVWnvS13Vmy6dZCGXApAMfXHFcgfTN2pPrg",
  "key8": "2iCYWKoXJN3FoZ4bN2UxMXNw1cRkTddFjmHKm8PX8551pizXbpZ2h8RzPncQpFpugd23BbvwTYEmq6wumCNRpotw",
  "key9": "2VygUAHeJ5ihAvETd2FYgo2kgBzaxUkTJeu9sGUJRBuUDggXMNzkG1qySGQPcB1e9CL9gTrWYEjhNN2arj74bvDV",
  "key10": "CQS24He7t7BBSqyykSLCgUqbdzUYTTGwUQYz4c7Rg8M3axYfdp3DU8DyititTXWodT3KjyHb4D1mcUSpNoP3813",
  "key11": "5LNsnFqUymo9YpoED21NZrVfB3kdJvm7ypN76XiF9C7kAaoWey4EAStqgRzKBwDe3AMNQ2tznRsUvsxiqzztLTrm",
  "key12": "4vxgYkogkJX6pk8e94dM6BYBfBu2k1Tm6BntPK8tS8T47rzew2okARk8nCLvP6KumqivAJhHVQbVXfZqfA2x6dFQ",
  "key13": "4hDGBeHTGbPSZxkQyeq3zmEKiCm23y8dutqB6eSvx9rPpdjaTzcS4uKrdb3vQN6QdeVBqcDkG638GmbgNL9FHjrt",
  "key14": "2Z77X6TWj3MPKjacMfpCavhVxTYsrorRYZ6d5dPyK9qmmVS3fyGQzpujtkaCBhUQWEiej17LHX6i5UrmE5xQr6cw",
  "key15": "54nAkH8Wo3AxppFFcAfeYu7mKy2aXZwmeAdkKw147gdckUMEmCcQtRaUrazQzqwD5Ans4ZdU4g8h3kL7AjHqMWLz",
  "key16": "rM92Gbs6qHewnPwHbpEXieKtBS7rQdA7MVsnPnvA1YkS4foX3yVfGCizmw18VMN6LFase1qqDAuQkMnseTYUoyu",
  "key17": "wAx9GtKKoZVcKBYLsCxv9SQnTmmqEEQTB8GiQsHbTNhW96ENwLimBhkxtLjAgXQKAFMJUvrFrtUigx5n81gupBe",
  "key18": "2gcpKEaiqGhCnDndTg4bzpLxnhmJUK6csVYwCDjvMMEnCTjHptAx4qvxHE9EAhNzt4Y9TPyKQ7fS6LK3pbrZjnmJ",
  "key19": "2ji5MhMiTaoeSgcPVJzmV5UMDDkvemAvFGGxv8gxvPADWaruNmJLNER3KSeMwVovpWNoAYiRzofHx6Hr16AaBiCY",
  "key20": "3AGfuWoZJL8MSNMPM2wRJcww6SsJQyzpHE7WfnvzuuCwK81qyobbvWoyASbYcQD3arnemxFH3KVFmEWAkUnN3Q11",
  "key21": "2zi2FPKaJv3WBqSRJguS4Zn9yGaqtdCMnUVtxSc5KmtqHS3poDBCmHmaJCPjvePNMLct6yy4YE8YoPH6irFqXrcA",
  "key22": "GUdwbxe7eLQYufXEpey4Ud8y235kBZUD28xj9Zjr2gXXN5izSSScaNC2LLavbvFLkVGXEL2EKbEHUfMipj6qsGf",
  "key23": "3CnFdHHpCnS2apKRcVcMVGG7vHBiYn4pGYcpf7DqmAnpcMxPkAZb9ZM7NcnYJQb2NUq1hR5BuUJsYnos11mdECvk",
  "key24": "5vHtHDHdcgrojirPiZZs33ok37FjWmhrbQg27XDPpq4tnPhrXMa866oZvV7PRKFJnbfxtMcun4RMtFFVLFkEYSYZ",
  "key25": "iWdZzQTj72dArSLA3ATYKxSV5pAD9PN2Sq8vM14jPRmm3Qt19D9Z5RgUph9mxczn2hiMLfG8pphTuvSBuq7ARuU",
  "key26": "2rmqY2ifnmZB1vWMZ6iSzKPa8DDUUYXoaJGNaeboioEuwMc4x1LfGV1aH8AdzjUEoJ36h4RGAUVZ9t1juKd4kHaw",
  "key27": "4bNtmRxSqiu8h7MYtkzbn6VQv9JLbGs5w2ZvJAVbCjDNk4HUtNKV3BZpzrmhHnTDQQjNvQrx22acbKkacwCPCaQP",
  "key28": "hTYcxWeNeYAf4qZ99XMZznyVHox6bmeUb26jaTaSvenps4LBQbmF6iJZe4sjtfu1yKD2Ko8bXAwxBuoeWaRLvPn",
  "key29": "5oXkZLf5MEP7KzPJWo7ktM4jPAoxAhmRHBJJpUDuJXeF15PHwrr6PqXFy8tQGAokbY4Qe1L7iwWQtLY3k99FTMeT",
  "key30": "3SX3ZwcDHVLe8jVjxUHVnmfnezMgRmeUbgMfXXdAj2sDwgka3H8A8Kpgceq47WiHDrGhjFbjByg6zfc9eEap7Pp4",
  "key31": "U7LM3e5gN3PSNRytd85nGL7jszoakwREgojb5z2gcAmvGNKmeEHHKfeUx2645M3gjnHKrv3Vx3T5j3543C2p6Pq",
  "key32": "3BYs1TfjYK8ZTZxkc84DcwrF9mHh9aywAuNjbJNH6HeW18CD85jNBe7NKfQPwmWTdVJRMRAov3uFAMJZa18ZFbe7"
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
