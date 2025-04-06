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
    "5Q7inW6cctmiE4MvM86xH1E4f4pEq9T1z6Bqs2svfK91PPzrhmzR323CUUkdGpNivnCsg6ggfp4UEQEGZ5Epngha"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3E9hH1QWx8QS49ZjuFTrKr3tNv1of3TbHgBSsA7o2KGuETgtubWnyhxEXh8VFrjpecT7cbZc6TU9foN7nq1r7QD3",
  "key1": "hQgXEWkVHhHSy5UstuxnwdeviBiegcs7c478tMexFggikDXJ23SxEdBBqccxjzrpCXgXJBSsBuh71TQCUeTwDMv",
  "key2": "fV99KuzjWM3EANPv8SYDs2p71XDFztqY8h5UVXdTmjtyJWZKyfCdCEMhLFpVd3xkphFJZji6pFR5iCipWv9jdrZ",
  "key3": "2tCJVXnWgQV7T3UozYHYrnrjdP9otyUBQwgWXmezcZePKg7E4W9Kz3o68KncLNeEMn89jgow44iAr5jtWKchRSwg",
  "key4": "2TzuSEU4AqgkRFvTQDzJHhSmuJiwcngHVexEc3RhribRWNqA92yAGbD9eFHFjPiZ7uzYp9ZGQx8MT3SMhRjkMvdE",
  "key5": "pvE9xtktpkm6RfgWyvqEuirRokVJfQBAgTueoqdU8wi8cdbwzyHbqL23FArGG8uwqDeYnvtnr1UeJFLvMqg5E5T",
  "key6": "wQUTosgzyVCd5FwFPayek57gHDZJrHTeQ1SLNvQjFQdWqyh7L3WzboYfSH8NFyyWZKXdkJUs6isvXV3Zzjvudsi",
  "key7": "3PomXiAEjpia6F9VCcJygJ79i2eg6Up85TTwXEyDtQTBf6eHsJKnb9pfxCKSMmjM3XtvRHJV8jpGWyF5Vw1dXeeb",
  "key8": "4DxBpvWFmLsHxCnaTgaqHiwycnNb88iVs3bj7UKDbe6C17jQVWmgcvhGciwK4JsGpUiytNauNvHfbfMP3LotGTMS",
  "key9": "3AK7T8sZaa9g9KeH2Nhvtb1LRNnWW87uEphWpG2fPTkmXy1GbcZzNUm3pSw1sYvy8RVgGPTHHkzeVsqpog2TR8Eq",
  "key10": "4XAh61frF33ABr9jWCywqrfNfqVU4Mwwmn2VTDAeHT4UcMn4e92hxPfEb3wCi5T6ZehcmMmFj2Mgdhus36xjZ8fp",
  "key11": "2nYm1YJ9dmqKb6t5dysi5gHgj7ovpbphwrv5de9fjvaZovbBPQefgPh2StBhum2CP3TBFebMi3BYrSKZ3CxxN9LS",
  "key12": "2CqjQooRw8ZuciXjgqZfB2kdWvaF5FgZwCJGugUuukg1ujB1nBhjZUbWamWbUCEvMkf3m8Cd86hWeM6Low3kRpTV",
  "key13": "pPqMGJcfufytpvLzHrrApePXYe6Gb3GuzMYtZ3qAJHijBphs8t764taGTkrCF119Vow8PmaN7HcryNnDtzsR314",
  "key14": "2Vs92QqwDcFMjzrkVLBzrQoAw6xskQ9N6GHB7v79t8bDc3ksmZ8oWair7SET6MQBWbvudVgQVvvnLpZ5Aqzs75e8",
  "key15": "k3kmxUsZuShM3oCgnid2fzL7nmSqUvEhCXkMgJUxcxmkhXoX1VqHoBWa9RDEh7MZLZbtLrwos9XXKVqUH2De4Pi",
  "key16": "4TAy8cysgGtKVyBqdkYiA1rRisiaPCkQ9np5uL18B88K1cs7jA8QB5q14zXo7F7bJEZouvyhEy3WjhAo2Uej75e",
  "key17": "AF4yvC4zKsZS6eAsTS7doVv7FhAkfVPmY5nWrJ8xFFcq9uZnDYnP48kkHqG8zPFdKx9KpPCBywy7Pt5E1CTdyeq",
  "key18": "WWR4DHQPcawitt33SzBraU6ujfd4d4u56BULfHx8fRpZ5yWNP11pzGTZXh9oDUaKCzmv6bQ4uqU5fxVNBz4rPwX",
  "key19": "3VPeo3RCbzFJrvzNXniDVAz84dvk2ZV8iQXzNdcqaD7VKYHeLDRwFWmD6xWfYSPudb3CkUbedAigXYwyx9C2k5xt",
  "key20": "3kAKUXXEswZ372P9TazqVdb213zFU2xufedUUrTSxm9rHMoDkyPU1prK6qGinqyiXHbQuyh4tqn73dnvT6N8Ybv9",
  "key21": "391EkfGAyx1QBmW2DbPBtKFRcEHsJFyxHBUzSGFcoD7nbPmaGV3ZCNuH5HTijbMmYuMwwpzWsKpdhkyee8yN8gC9",
  "key22": "2e3wH7sCQerNK4gECne2W7bVShhAjj8NtB5KAkBLx1u9yXXythQsBWw91boar1xS61TkDSBzD8GbBC9PUZyefxaY",
  "key23": "5ZTSNTaHTbUR47CcvWTfKPi1zdKhcsL7CSTKv1sUqE2qgFDNexE8qSRux5nSxVvncUbZK3ypeAqS1YFnELDnBbv",
  "key24": "2oFDiLboCN35QbwtT65h8pPuPJPaVVZYoAm2AZmyRqyLPVhhqgKY1U1XQ9rxQEo1zyCux28TxYi5RQt7q4DwviXn"
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
