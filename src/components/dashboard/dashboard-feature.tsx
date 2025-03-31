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
    "32MQomVtERqyS1yyyP6dnnUzj3y71YCT1bYtc3GcmTs8gsKQjzrGY5Ngr7WeLxr37SkqoR8mchR4ozZn4orRpxPF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37BPyEYERbvS1mESVJbLgDr8rN5B8PxsiJkFTC8bEhaLrZRwN6fEJQ1QNgaXS1mnnG1BZbRHDCC4Zze4DWhiEUUr",
  "key1": "4MoN3JKnTGBbNvdyQ4EfaBDGXddM8EECGcKnHbuVJZ7rERSYMeeKxjP6XHVw47MK4bcoFr4dkkqCxBsj8iL364g2",
  "key2": "2StC69EzcqwmvBk1E4eYEYVexCspaSRsd2FrCb3Sxf26y3qKM7NQWE1kdVvuWTMjrY41gBe4XnsF2mnWrvSRZbd8",
  "key3": "497dgMskPiKh1KBrwNdiRvA2UhC3yfS66t8DxoF4UuTVCLiL2yBvpeaBDgW5CyETs3C5uMZgWgz1xFF3bXtfw561",
  "key4": "4qCnjLRbyvfQFHEGuW8cbrXprYGsG4szMxQJJ9NxHoQASpy3ey72esPaogyhVBorUgNgUW9oYnD2dYzxQknuzJuR",
  "key5": "2N2QhYZZjsgasH4xkSp3f6AyQrmc79pTrybENZmm3KfUj4kFG58KkQc1UEeYVV8GjEj53SCNTLZ61wpH8WmuzHRm",
  "key6": "2v6yDesS6AZswBBfP3MgwByAmFN4nf59svHrCUehuL1U1Hovg6JWxWpcVu3ZFKeNr1ZrnnqnHH19YLBnrzTaA5bW",
  "key7": "57rYXEZxZZnCUk9cCLhCuZDW2qppnWyCKFNVaA4uwCJCPdgFs2whZ1QNGvog7Ebk8fdDR1NaRBH9bx8938TrMFez",
  "key8": "UxYrn4hCbjGUyWJerEbU9WBpk8BuB4QQh3TDrzS4gZVJqWeDQrbRYq7id3Hbab6tKiCYXw5kLS6j74RgMGBN3Su",
  "key9": "32q59ne4j9mB2YuDcbT9bmWTKXW6Ufyrh5vCgmzskNdsxAeupym7z89CGa5LeLVY8jRVRg5f4g8RRk6SR4aaCSKx",
  "key10": "4tprVvWc4V81DH6jSqkPzWoiaroF4bnp6iqtnAW3oSMmLTVVGXD4u5AqS5zRwgDa35qoNfm3NvsNVtMC9vbgU3pQ",
  "key11": "3S16PPsPJC9KqjptdrhTjQgG4ULBNJtJwnxsuM216gXA7V4i6MRpksaayhMRVG6hhqiDpu3pbG2BuYt83JHXK4SR",
  "key12": "4AxaPaCx4wGvR8ieU9RVYZKjkGcgdGomMHPccEd5fTJipAxYBXCNtjMYs3TxFQtFvvStUnVaiMNyMJQKQaT8nZj8",
  "key13": "45bAQs6Mvy4SmTorSkBYKuJmL58anHtfiCmKsyh5PVJrgHWDXVZQu2wMCkmz1ezfGsPjXTTtViwVThkyS99kQc7H",
  "key14": "5tm8GKpj7QmUWB5raUk8qsF2Pu9RrSScM2MG4DjTvqNnkA9U38YYVZkLFkLhtRUZHRwbG76rwBiP5pMm8SFJe6R6",
  "key15": "4D8JwH1Yxh2jERhXg77pfWhr2gJmAnCKtr3ZNEncDCzYJ4gLNVQPE5LPFAS6je8DEywqJqUhX9QT396TpHdMuMFw",
  "key16": "5eKo1xt8UoZaW4nhWtqtMNEAT7TpJf4zapVxRTekNEdaKeCF1wQZ9HBsvewD7EmNpHdUpzRupdjNfDYbq6MYp78C",
  "key17": "38aUENYB4iUiPKXMeR15XkuSMfxALFBRmDqHuVaXt5k79aqoiDsxYwre1UxxcStUNPvrsMo4R7aZHQmunEm1koDM",
  "key18": "DMiQQzX7RGYoZHss9hMb6Xh8UuPuNaTEb1Gob9PDvpM8cmCfiYYx1yBninAckFS491HmByReF57jehihQqqAef6",
  "key19": "2tFEiDCCFfRdXo9wPPPD9LDUhL3AiCQdPF7ng8VVFNJa5Ej1VYBKx6STkr2etkFjz1HxG6fjf28JKieckYATXozP",
  "key20": "27uHFBWdDB6conZ9PDB3bf6Fbw3gcYZWaqpff4s9UXAt4g6beCCtCGUAV83PSoDLbB6f4y59WPdcF4YpyaughqiK",
  "key21": "4zdxMFgcNgz6AzCn8Sz3XFWYgNRJewdLQtfKwmTbM6FqjYeM8Sf9xFh7ne8e3uJRALkmyo5j3btEbLrbrXmpZv3M",
  "key22": "5wpyw1T22ppLumbJeLfs8jrtJ3UoQ6nWwMSuk5QpyfseLUVPyP5vDDBM6Up55pmvKTxdZSNH4ezDgKVqZNkyyjMf",
  "key23": "3NJUruC8Uk8HfNfxG2DSMYxfXiHRqMPZkVC38KscEkEkgo4g6tpy5BuQ8Q1ZKBFBnUSTaov6QfmGqFbYCGPvedLZ",
  "key24": "2LsmFCib8DQL6DHVLw1mC4PSaEyFsSuqhRMSjQ5rBqj9xZCN1Bp4kDvMGisTipi9aWvaZknQ4nsKPJcmNqQGrfrs",
  "key25": "3CCfGF5DNx2ZpwmUEV7F4WF39NQEzRZhqewhjepXK7UYFfSfXY2ysSX3vHvnv7JRkHtyxioeYcomeEB3QeymcXyv",
  "key26": "4esybck1xuzh2Jai44M4juJ5xwrdvBqAFv36VSrdRKJxKuTD9qVcA5ebW3vYCBXXGT4UMbHDxdr9EWJDPrYToqZ1",
  "key27": "4xjhxRN1YrJwdTPrCVB2uTpCsSYeCdtEaX5hh8L9RucHY6cgYkMqUSnZUcvePSXQBraisrhtfAY2MR5Cqy7K98Rh",
  "key28": "foMRazwAx2xzqpUu7xp7wc3o5ATWn1uzs47kxPxeCXiC4ZunwtGuwh77AUf57M3gUxiEUu5fjZhoAHd9JER37iG",
  "key29": "4zcYiQHBwWPjduvRhWM1iWtBQjwJhiNMWbJYcqCphugSBrFaLeefrhmff2i5PAkesiTkE3HrzbZ6wjcGk8EuCAhD",
  "key30": "2JiSAPu2st23nj1pmD56c1RHGnqsGig8V56G1BRWcsNEQJ1zmHRac9ArrYUhojkg713X2SGy3nE9vKB7tvondwee",
  "key31": "xkPirnhjPZn7sfmPg5nBdGuUgTrowSE9kVvidhbrntBJGrV3dBZoF31M6jpXr1hK6evSDynTJmoECDsRNZtzF3c",
  "key32": "5eaAYanN5JXJg23EP1vkoUac9FgoA8HBHr7wFKqeAzQzSnQAVXGufc6sHPbZ6ZQJwtM6AvF64yc8NBrGRYxtzosE",
  "key33": "3eE1Z6Wupj4aViY6GPCEr6yLwQa6sXZgEDSdVdr6zUpVzG8e1vEh4CgvGWz19Zaq5D8WFpjt8u2LWj4K65NKpktM",
  "key34": "MceyNro61wWb3jv5m55XWHSRDMhkFiCax4Pv9GB9z9msEAP9ZYkXbzY85Yhfkdtauv8BsdGSgzXjdzECY3zmXXS",
  "key35": "54CVSFZ4hcT14kSaFAav8xc1ZXACfzcSC6nwic2eiaumRAtqNu4VYojZxvZbRfxkASe7Ppgr1gHQDbMT7aWamEcK",
  "key36": "44z39h723WVo9wipK9Qt6isGnaEaZxpXniZWzVYM35xudbG4m8cTrJ92KcLVsSyk7gd6Divd9PBF9jQETUAcfWJk"
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
