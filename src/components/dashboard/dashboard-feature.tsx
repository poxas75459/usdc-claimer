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
    "ZSnEjuXbWvQeMAKLdzGEvBcoGyvkwWUWYaXnG312r9NcxF1c33G8ZrkzFeZEM8YR6N4JtcZiNkBVQjNTUyo2NpD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wgJVZm1Q66mM7tjwcWYC46E6cTzD4LYQAM4X8pSNrJyyKABseixdd2CwWRJ4ESDgnJyNJZWQxUXMW4YBzcq9sKb",
  "key1": "2aAXXQCYSs7sJrTbNBBqFy4nGy3i4UaXizbxS7PdMgYoHB1JebJc5gFcDbLCkqRVXjjvrFEPW7nXtkHJsnDtP2C2",
  "key2": "YgJhaZHAqYkYZfsTibaWW3uYBNHh3KFE5CixEUn4X6QKDCZjUzHNzK6opzkBjb94cuXtR8hLTDxsdmEi4g5S5ta",
  "key3": "5fJm1XU3B8BXB5UrDeVQYvE7DZF3NPTyBNQyBhPhfqScdBMUVHW6h9fdnpjZoZUgUptsvCUU1c2maA8v5pHkHQuM",
  "key4": "2GyaUMu4hkhSQmGt3foarVocpnXRKAw9M7ec1JHyXEphDeJPXzwBr9jj8rnnqLnnTv7ubJrsRRTpc131sTxNi8eL",
  "key5": "51yJow5P8Fou3iXv2Jg6YCqAarzPEU1dhXd64w4m7Bf4kEK1wU19zt77BJbx8fU1zqxc6BdLrV2Zpryv2yrPa3rH",
  "key6": "3So6CikjrkAzfBgG9zoH7BBhqMKi6wWh4JbHKVsBeG4LfUBiaeNvarpPpZzCQsFtS9JZGpuFwW8v3yuWwJVyrcWm",
  "key7": "U7ohuHtKqgH9awCZDd7epPUsGRKLhrg8jwExikbkmMPLNysULAqDr7PTtmrZquF1iaLieL91HETgGUZm14vmrhx",
  "key8": "2qSkGaCfMTACgycEvk3Cf51zDBoDDSQHpqrtaEnHCsWECCkoSH9Zv3XAniSjNFTW13bTR4RMdsCUSa55xcUFWfi",
  "key9": "3ouJrj1XBULj2ePPgyKQHyKYNMFRZfKYzKGBuFdtKFB9mW2KcxRwgoKhmNmFbtE1acm99yDH15nvGNLUqCWjm9Hs",
  "key10": "EnaFSqx1QR59nvJrANwgfw7q3eauPHdQhWQajhQhteuwtZmRJ7pbEffzofGXDgmXs2zacckZFYD7SvTuyF9nacg",
  "key11": "3E8cCiTVabL99jg4fUgkbhmSa5f83a1vo85fUFcactEaX9VFGNJSdoTVsrLYx4vTdfKa7RwwZVBzJe1xJpXVEGSC",
  "key12": "5nT3HT1mbvx5jZwoRscW3SPCXvCECmDidJ6tBcucd9GjEdRs3CJwUkAnywhHTMh11XuzmqVFNtvhCRBa12VC7Ccs",
  "key13": "2uFafMaMScQ3JE8rexFY9mSg2EDX7ohb37owg2CYAj6z4Hv736a7C7t8MZeEwHncNmBztbkAjZg5rAPxwokySZQ",
  "key14": "3RmUvwPk5htSPpmJT8Wh5hfaKF6KxvMmVKnY6dVp1cx5nQDmaGe1fYPnSMhnkUxD729NTHgNkfmVVHHT6ptCjLtr",
  "key15": "5FJa3gAHJry881SZyAqZ1hFdj4wHYiwJjG3U8Bpzb2CzVgvrfsm2h85CVy46X1twH1eDNXtc8hfzjwPz5Hp7orA3",
  "key16": "5TLT4rU7PSfa9JFG6kmkhXr7dydt64k2thpkg1qVxWf5wpTYZBTKzCZhhFmDx6Cfiofqdg4m1dwSuuRrmtmPytp2",
  "key17": "3dVKrc7ZXo25oMhoNH61CGe91T1SQczG2Rw7dpjXHz5pXRE1ZohivXcXnJTJAY16dvbyxvgt3B4Kqa8SdHQ9C6kh",
  "key18": "4o3mrxqAGz4AG4sCK72cN7ENdhRmXTUrZfU6g74Mxesx5Q38rN9JskTKKxmiUQiT2ACRyrKPdzJyW775w7j28ez2",
  "key19": "35z24uHBbLWJDKJf5afEYjRnSTgGUgVRS2NZpitMBBVFaWgcqP4ebwkQHrFSMjtwDhepPsfoauMxnr46dM9mj7KC",
  "key20": "5D8CGMcBUQf5iRE8y8CqFxxeHR8B6kz4ZX5CQz1BtGuZbmg5y6UvcSJrWTRhKqbg3PA7QbndTnfpkWFp3ZZxEkUj",
  "key21": "2ferhg4e31XyouGyPjtFtTzoHdhnnEXhc8a5WRHdP9czvNk286GqLwcUc2VepMGJ6KBpYqEsFLjie8XD3ewN23Y8",
  "key22": "4Mzh4KSwDQQhuuqeZFv84EYBV7Mt8mNuC1FqUhqPaa3MDJud6Kfi1SLTtLedmHjwGmhihzd74YKaEuorguzokXRi",
  "key23": "5zraRToJBLSjWR6bHbWNqaA1FWpVHiHUtRKUA8z6bXmtT7gBukKoXmDhC1vYvz8yD94dBgGdA4bsunZnf3nmUgy2",
  "key24": "jpf9gp7Pa2WHJyv4Zk57A2dRQUaj46vGAiwtkFquiy9d64NHYHMNypDUDJxxzHmK2vj6rVoeSbUVEEg21zsp5jv",
  "key25": "485jbcvz6RVE8Ajy4PqE8YcGsXnanT5Pzze9xSyqdj2xpWc31exLpDx4s64tu7moxjPWwSQjSiFwL24yTbNJjH4P",
  "key26": "2mJQU7gxk4G52ezMgjs9Xqz5Chru9ZeXNj8JU6JtZv4FavdZqPJaT4FEn3HMwR5u4HDjqCHLrcbh9QEVg5qK6DFj",
  "key27": "2v5dyx64TkTS2SycHzq3VdrhPEQtgKaujZvwvef3hbMFcPa3jg8n3f6PLU2EVPbXm6SczMjKi8mjSyWNFwiXPADv",
  "key28": "2fvXYqcpphZL41VfcXdQJBtjkhUk1kcbBT3mtSA1UMYH1FbUMXchEWZYhw5ReDZw39c3fxcd8Q9Th4qnq8jXS581"
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
