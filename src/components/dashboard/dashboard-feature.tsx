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
    "Ewb1nHBfaDkwbqWNjM2etgfmivm5MfSwzXgyvbL2wjKtJYrtbsgk7J8woyKJFkAj2adfu7obL9qdJzSVuz1nxL3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wkbegMgz1td7uhRuzMSRgYZUXQoh6teFb5cMCfNH93hdcdhUHfe5aQT1oK6qa15CLSQsKKnAsrqyvnSkXKAb3et",
  "key1": "4Ne9tWjLjdw3jybdfbQPQwmUksnMVDH823jv6NHf7Xcim1nVGoyAp8EzLSRdbveq31HDhUKzgAyPAsktZRV5EFw6",
  "key2": "66t74XvEvhvyNHtRN3A3yzM5KFtCWAQcLmXDsdx3bHFT5SEeBMC3yADLQpjBgCRM2NUkhvUc1BckzHFAu9qWRBqa",
  "key3": "4y7ZvfzAJzX8wUBQ3xzcmxYqw1Z6na1vowgfSCNnUFcF5FQeAaf9rPd5bMznN59DWsrHHJBM7f2hjaf7oZZeKqj1",
  "key4": "3Q3XvUMz2ngcZKG9KciCwse9ri2fv1GfDjTEq4Td7ya7ghhCtgyT5ZTZrPnA8xjLD16yPrEyoesQPcTHQxU8Ladm",
  "key5": "2FBWLkQeuAduFKc6sN7eKqWtb2J9G9Hq3AAFJfPSck39jySJQKk79AoC79EZr9hwDzXUDAnjAg6UUWdy8zLDGuvj",
  "key6": "61jWneYEWjiJZRAXwjLbPgRFtD7A52j9sudGBhfm7JxF3K4qugUKa7qbsCaSYWsgUVfpbpDeiACXubaCFadUi2m9",
  "key7": "Q5arPL33FNyAnKbuawMGG61FZn1PRiUjULdXCLwdhFoYx2eqKCuxu1D4MBrjrgvByPQwgHoGPYxb6FvX3kyjKsd",
  "key8": "3H9Xti7rhGendvteqV3sQucdoe4SpoC9GBnXR177PLM7ZDdvXgPoq93NkKLvTaUDLpTtsVtU3fSJmSUkpEZTdAty",
  "key9": "4JeZeavE426AYfMEPfHLoB3NbZtsnG2HdMVwSngozQ1rxbcqx4Dv2oKhdUjJEnpV12a7E6kZQk63X2JntjZ3JA1S",
  "key10": "64KsZsDyiZeEJzj8C5ANdACV9Aptfs8LdKVoKKsN7BnhGfRjJz3DGQYQZecJa3rNUJJDctyURHWXecNuLHcdaHNX",
  "key11": "5PR8nnXXQjb66pnonytywqQw2fjxkrk25M4Rb6Ht8PQJ8cNjaw8odfxB27RLPTQT8ETaBmR46SADw3FsB3euRCdX",
  "key12": "2t2KCU2yCnpRRffw89Hwe8W5tU4c3jx8JHG8jmhDGQAWzpkxk3u7BcfQwSRFezLeTDjkyKqukrGr47oFcNLqYTuw",
  "key13": "4igsH5qnUmc1U6WLCtX8CCmEQEC15YnGpVtHG68CepS2TT7dXTwvutE8afXc7RSXrhCFaDBRbNMsK7dMW6iFUnSg",
  "key14": "4C6zHGruLHr1nrAcj7VirqMmXwGC7osE8QW3oKxpssPPWFwNvKMLDErv3CEVYDGJZo8bqktChFUT5RsTxXiubun8",
  "key15": "5hVnDmWsxUarTGqMK8TPRo5pjK85KaDJWvzKrtU1nUynKuA1f7AMcYPR9tkMMUBRA8P7JQGCkMGYhcKgs2D4Rnsm",
  "key16": "2LM7ShPjwMbXRwcXWWf8JE9RW79zMJnKkHpaixCipTDf3D9YFw3Gcb6MMYB64Yi5Y46n82eCxnEVLreiZfoqPTFw",
  "key17": "5X5T6nMQc68miJRhY68naAyvBeUz5iykHG69s8ESmFcgeDNiJB8AKm3d3mDBpFLhJ9yZSJ6QmXzT1P3Rc6Ha4aRF",
  "key18": "46fDCHvCETKagye8rE1RE28tcJx1yvPbEiGaZmz2hMm1UccC8pXT7zcyTBBbVpmV8cv7xZ6Hx3v3tzoZERmqYAmL",
  "key19": "3wp99tMrReQTrnEpiqUJcYMuu7oZaAZD4Cwzr9j4M5skR4mKUdJGy34aSQ3EUo2Y9nnwdB1atrfi4ScR8KEjWm2x",
  "key20": "FDj1D5xyACnbLj4SZFxfqd9kfbHSmyqaEsVp9Cdiymajk8PjVZtoXxY2nam7u79PdYQ5UFWDn96rGKYBTVYg1Uv",
  "key21": "SpXD9Z9KLxaUAoRU63VLgNvhfYKpL7hnM4mMqdiJoUSLqpo88wS5Ji5hJBiDmp7mPqfpA4VYmBGosiTNkjPjNtV",
  "key22": "4G36oenLVh498keTLauQyCErJu9uD2vtp6agwUse9G6iHveZPAktGnLShSrkSbuWiPLgjmQznM1UFNCeUP7wUqYK",
  "key23": "2ZiC71c5pVZYjfFRPZo9pPvM1PossdSSb1DyKWVYZikVajoejRjA61fata4oZbqzomdirPpeMQXX5r5Qma8DHmKK",
  "key24": "5ExjH8PYhFHwvUw4TrSrCvCysYySGVjuoCkyK6xXLxF3qeeSkpFNi2XgUKZJJ1QzKwgx8ojNz7JxTywb4ZMN73NV",
  "key25": "2Q5prNZ6FcKAn5RfRi6hqa4vrxVaHqUUeC52Wp5nkcA4KHFpRwVi1v4n83V5zLZCRpwWUJRzCxVPSx5Sf2iZ8Fse",
  "key26": "2TjFit2DLaywJ44z2VAauvKsuotzbwvToBKnLkAqx1vtPo8JaMrUSZoWhUjJFdLcuDoZa2Tdp5j7D9V5au9PCkGV",
  "key27": "5PQVg39HUQEbLSyqCoHViUHcuhBcARovFD711E8uWbcraVUeDVWRVV2ZytL94MH2ew3ancJwx4wvK7vAAPDgVwJV",
  "key28": "3JsjHFcSMR5whmAKB6gtYmuAWkFiRiHdxym9oKUd7kf26ef8S4CeZDmyXqNdHbr1HwoPzkadeiasiqQujEYGwsPw",
  "key29": "5HdwWESMtyiu3xW53xFMxTDVjmkTtjP9xtLWdyFfuCPHJrAsEYPLRmoZgpbEwjYYrF27Jdcrioaay4QFoBAA4g2d",
  "key30": "wERXF7YxQn4ngbubQz3mA4snepB2wxcoNHhEgS1PBAErzXUQE1SM38fydTojQgqkyCoC2Gkza5rdbgqMagcZgXu",
  "key31": "58jKQ2khW2mcmYmzHp52LvsZGc74Spzty9MmxChf84pXmEiC7xeQTu2SBPVL1R9AmcqGsxERy4Njh2Lwii8ckGLF",
  "key32": "YH1wCKmz2spv4hDuEF4bK3oueu9UAk9BZqJDAHPE4oVhDnyVMoEPju4mRnVamy1FWBjmM7ZMkKwoqa5XLX5Acn8",
  "key33": "CZZvxLSbxPVnQqgccFE3t3shnehVTWPsL3NDguMcjC8GoVfnbcW38RDzZZKNpd9ee8TYRt7X2LiqTs97nSQ4Zfk"
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
