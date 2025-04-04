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
    "3EvqPrajct2xB7SMBrRjfSNCthaHQQZn8FFXp9S18eB9jMtvh2NpJdipyc1R6SYurqBYY7Wr1o6VTTRYAjqtpono"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5varC1E59D53pnJMEV9WEYjBLSYS6dXLEfGNRHf5NtMrLExMuS8r19cTjtvaxAs4nRK21ksV81DMxWDFytA4kQsK",
  "key1": "2xzNVqELSx24DEVzbZ6PbEU423M633DbfFBVET1B3523m55t4SKLCW1J3qKK5Z6NUWWvg8kMXLPfYwds7DL1ACov",
  "key2": "2MmLZ6aHt6se7dYkPAuPqvjxgcoMiQsPLtdt8MJrR9iinc65HXsjABj5sQ2FDqwtGhB3vU61BdnXZim2CxwJeSTa",
  "key3": "4QAFPwCcHbkeEbT1hJ9c6UP1YE2DByVUdptq54Z4cJaHgjJtPg3w4qhvPT5Urh5wpsh92sUVtmF3vMuA99wgoqPf",
  "key4": "2dEdKY5JJ9fH9uXNCwXZJdAv6MVoRR2ANqrS7zsSvwU2UEziQx3kNC3kSZd5PQMN3xKQZQRHxrUSFw3khPT1Djx6",
  "key5": "LmyqSKk3jXgAzim7tmzvziqx5NcdYGMdDzNP5ioF7NPZj7FVU3VekAbenbJnLkGnTJVY3C6BhX1pT8SCCAJBdPY",
  "key6": "2J4ooq29GseC5mQzh4MQ56aEQtBqZm1ZrWUnYreCGaCBLypCt7j7uWubieyA42ZYrfWnTMKttGCe3MiTXMSGcah",
  "key7": "44Ge9p3dobaxAK76kc4aTpSkuvLDKawADQiKy8586VTSba7FHjRXx7UUfSEBFKRpK23TTrckKD8YHDQHRTCV1bTr",
  "key8": "5ds2TZedVRBGfxM7bkNRW2NmJBL6m4sZ7VZxatA3LSRqvR9i65pSuL8VBqZQvxd9D1cgvYhE5ALLEU6bfnX4HxBg",
  "key9": "vxeX4Ctj54dZxCkTCL9viv3Uj7AF8FyhA5573cehwXiNDvjGBuMnPdfEZwtpcF2DaXR9JAXBk3wxuvkXwawfQtZ",
  "key10": "5PWSQFN8AjeEcbro6iaVMVcKn33ummwFXMAeF4M1Mz4FMaaZeQ8usumEqcuRhmaoVuPG9zPB1EiwGqrWdvNUfgVk",
  "key11": "9z5GVCdhLRoNyYCx6nGN1HUttcE2mofg6ZhzxHs3cBZGKzJ2fNGoqZPZgj6E72e8md4NwGz79MPdgkri3PEvcgR",
  "key12": "2NoBg1UNMWC8J3ANizLikxAwNjvbwDDA33fu3wKLgfb1WyGeAkEXwP65QyxxuCZxChS84ubM7o9t9uqyftUqo3oc",
  "key13": "GuRUb1nDUyHobzsRkPMzYePTqHD5xp2QKCag4Gc83kUiRBqjVhEtv29ouTS1E7hhQayb1H3W4NSzJdGKNWtoj72",
  "key14": "4KmyyigSjJfws1pBmYePF8QxxxTMpcrJW54L4mYaPw8GRk6yktrSd3k8uxj2dHkdLFhqHaARUeEi5A1LMRBm4fpo",
  "key15": "4Vr9fchnfcwSFekZHUKL7xwR8M7RndcHuNd4DVg2QDTVi4bVEL1FnyomyKkaM9M98Z1FhAkdrocqi3cxnkmGKGUy",
  "key16": "LfnKwx9pvC76etvui5CfFVyz5tUdhz6nrrxuPaVo9vzDev9ayNBUNwFJcjWzXGSF3W6nVjRZzctiBp6CfA2GzrZ",
  "key17": "gC9vbQDb66RqTkPwrLdryXdpJYpsfNSegubKNEwp177ncaKVdeqQn9LKQwM9zMSkAzFdHFkzvsoGqAaoPiSj39L",
  "key18": "2FfyhtBnFnrGywmRgQkgutrBqcQXkLaEqRM5ACmmeGZwqTN1VUWB9umGp9jo2BRqAsYY8nkRLkc5Wgg3adoCGN8T",
  "key19": "2GLFLAC1XU3tuCbw21rGWSDGhvWaxpUUyQY1BQAgeEFwfF89FS8p933aSkprJrUy4HThmd6C2LSf7FgXNKXeq2jC",
  "key20": "aPP39thYGS4B4yVCvyJWidwcudJmSs7G78LxRw9zwoJSBihTds8zEyjK2WMkUNoGCCmvyp4hxw88QXTF2HVUnXx",
  "key21": "5omTeU6Kv12DjLPmPYbb84UwGS341u985pQmLGCfLCRZyMf39yzn7rtZ5Q6fm1QF6oMEDCEZoJFwLDkhHnUd85S2",
  "key22": "Yd6GLgmqZwHZ3jySPMJuuQStS6ru26kVCeHxe4LkAbYJaz9KfQUDHjhys4orm5Q7RNv4LoqXTRkTN3FqjaBJgbp",
  "key23": "5HW1UXQUgbemh9vrvBREudixBK15riHf5arzi4qpunq6pDoZwFNZWYyrK3vr4SJacHNiw35HyERYRnU9NL3U881W",
  "key24": "3CXZWywDrLzvG5fC68cpPecXLRavswF9WQmbu5VpjtXwNLDCkCaSVd4TVqQL1hXdnesQHGetaHSb7NjRjg6o1KZt"
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
