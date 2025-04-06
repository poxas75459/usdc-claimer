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
    "W7V5cbLemvibFkjG8Q4PtLg9baadXGzvhk2gYmYnUVmMULaN75kvwkyge24VRJCHDm5ZvBDwJJhS5ajUywHQp3Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PA1ue3E1wbbBkc6kW4PjWgY2XE9FaezKUmNVkw6zp1SvjJHpp4SLSDv8w4Srz8iAuFGRDCxFtzP4jW7Z9gyH71J",
  "key1": "3o3XsRmRZdsTy6J5AWZfwsjki8o84WiMbZhF8o3ZvsiBXxQmrY6Feco1RxG3htyzBjBBnWYX4J1ZeJoPcDMcoHub",
  "key2": "uYf2jmgTgdM2WoAjm9xaYcHuJey4ZsuYvGRkRGefbD2voBEsqPag8beUJBWhmAm8s6Us419Fs4cqPMzg8edoSbj",
  "key3": "653yEpnrpg1j45Uq8gjE9WJKLdvxTvjfD6njW2wYRmFG3fb3A9Y89DHsNvQo9vigvbnKdWBf1Jo6uhx38TtQq4s5",
  "key4": "bpzzDrEbwHFZn8SRKfZQZrv5jA9Qz6PFVtdXaVLyFLtZh2BEqqdP8ft2f1V8AxfC3DG9PEsLZkHa3iXe8oNdpL3",
  "key5": "5TJf3T59NxoPx717CGmdiaHDsw3HCF4WcgKdHpESpRUpFN5Dvrww7vf1zbqocHPe17VCwcJZVy3DSTbak87XbzTx",
  "key6": "64o5BdCK6vnyM5T9c86jLq9CobXiqMQ9pS6GccNz9kN6gownyS3wQQ7319uuzCPdY5YsrGcjGDVsv3KnuJXvQExi",
  "key7": "48N7crijVmZNDHJVtb2cDyobcRJ3HMjAvnQJZKc8B88Md4ywJy2gBPnj4nQAGZwZC7v7D1nYZbAeVrt5w71NT6y4",
  "key8": "283MkQo4cLFs5Jwji85qBpu6ggdLpFiPXH6pieMkUWXNPYkYyubL8x5YwXG6pTXM5mEPLQGBWuMAao5rdiZ9vApB",
  "key9": "4YSj8e61AqAoRMiuMyZCdTRBtzqCQLJeHoYtKPQNtbtmGZYXpbLE1C2SKNLWyFWZPEzGhbTTm5YTc5vxfs9Qu9vv",
  "key10": "26xXdRstS2b5iXieppTafZkjqhetdULirqtxoMmnps2ZP5zbASbXrybYumKWV9hE5wHo3dgyF2ypQELN6tG56erc",
  "key11": "mzK8JGj3UQgMFpHm2h6B9dizkVPgzMwuFvLsJVqQDd8ipGSpz66DqxYTw2r5mKWnsxxwvPn1AvD6aRbABBMCeEf",
  "key12": "4M6Kpfz9aAVmKLsD7E87vYYr7cXXmo9rH7uhzSDk4wxHQC2otZRDfUucuiNz3U5tzZrhorNXTQu8VXZRFsoPGskc",
  "key13": "5fZysuJxuWfWyFUQu9ojXsFhBumQzYX96vJKAFTcqeCCvKGtRmrd5Fi9YJ99YAvPhqb9UFToPTnX66HjCzfmyTNR",
  "key14": "26Nxiugr92aQkB7k3ix5Ww5ADmEzsnMGiF3edkDygeyRrt77PR7xgk7mUzpcRxMdHdEY5BYsz22ngU7WLkYC19rW",
  "key15": "2B6sEoiBbR8nbRe1gSxDbbzVNHuSQPv7ABqYLDS9BcPHZk5UYHBSqMPDmQHUfoRi3rBQTxY93vGSPv9jESHR63YX",
  "key16": "3SiCmMmR14cdGuk5MHmn3E4ar8b2rnALWJAcRPdhRvTwo4rWnyX3eoFmnLDqfobyZqaQurCyb4sS7AqhQDQjaeNR",
  "key17": "2AYee5eQvpwdKtqo997PLPRg7GS8BLgQkqFH65mnB5Fzbi11dyNDmEsukstwVcseemPn2QDvnMSQtTeBdvmVEdLm",
  "key18": "3F9zDxFNAJKsYnahqz3SsqcMKZqKVbBLp4ermqLqxu8d6fDc4gyAxHhfVPqCrYJVuQKbiMu5sEpGekT5vV1N1bDE",
  "key19": "2yGb8cMUppBjXwZwSfvc7r8BSBmKhSdYAbs6Hza9Vp3NmWvGt8B5rgDvwWQDAxCj2YsfDBQ5stReXrxCiuep5L2K",
  "key20": "31zepJXCspimgBAXko9SCRceuKXCWQNba9uFTPviWjrjALDr7HUdxGGDzPwhAby6cTabAcUmooBVWWmbPVACiXYd",
  "key21": "2VMjqEhyeU4EuJQuHCNjFLE4k1z4h7VSoasr7N8kqaHVgc3QdXbbvcPMxucGNjJdf9gukspHCuKMUtJ2C7HjBXMy",
  "key22": "5K1xXf8BqkjY3TdNyWymownUg3wj7xr494aQKarFaxrndPBasTp78YwxGpiGPiRqGXsMfE4GrJofJfRLWNQCEpAP",
  "key23": "3cD5987jxSnEBKD7SAwk3zKpPejHYkg1vwrCsVkny7DY2Uqqb28y5WF8RUtH61yF67QWbYphUd5w62PQVLj83fTJ",
  "key24": "5aRn7UeGwYf6gmqhJ1FUvHQPa5AR6jWk72pmXNLwV5Gu5szDdS3jMf47RP28qUxP33TUDxWhk8Ttr9LAe4LjBwhS",
  "key25": "CZ593MmaVPJTZQE4KxJtCFiXAxCu8tjdkKxRxNoK69TXGqhuPTe7SMhEFsNUuQHfkMEwdrjCJKYx6TiXEvCWk9a",
  "key26": "2bXhsDboSEMwsjgzPsiZDnssnaXFLePJ8ehw2DohhvRvQCV2VgCfHvMcdVSNzJc3f8QmAeaeW4fwEryfrA6UJ1ge",
  "key27": "5CHaYWtpNMNsnyFbW95jwwLnfCRduxtwTBFapbNPJrPVsoXNXbUb7Ej75PG5jszYavLjSLUn7yu38KjyfW1LfcfK",
  "key28": "5bdvNdqBuUibrZQSsaNEoA1xi7oAM8xSntXQR35XTQf4q9xMTAi9RBHGMAwU9bPXa6aSdVLzYEjHTceR4pBkuhXP",
  "key29": "4jRcGPDDC4Q5eHvxVhqSdKcqM823JRsnx5r34ZvMtxcqjmhgvK2e4tjNxuVJ5qdT4FaxoyjY5bLCztWweP5iyMm"
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
