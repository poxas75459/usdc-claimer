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
    "5dtxZymBWur7AXKm857Ac7dsEDxgf8NZrRqctNK7A4oxMaWPKTFJGouuiYj7Z3k8AoHvHB5zQ384pcwh82Y96PQa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6XZMn6kagBtSoCE5pqAGEjk9cnQrFQeF7DLacTc4UKhU19S2VWdQsdpVnZGdgTqdCjm4qJAURcQrgeHX5Q1N5NT",
  "key1": "2jjdrinKZJchFgsc5phL2Pmh3ZDc74kEoxpQH6t5GetfrDV28RV2mVpnpqNB2G14cjWJikcgHZtMC873YaVVxiza",
  "key2": "5iKj9e19f6LPyxPBof95kFnKU6XsEq9WzTpq4ZBKJ24zvAPZWTdNsfGMTi2E6jgA5AFPScGUqdPULXubaJpBexj5",
  "key3": "3ZW7WFQhKcW82bHvBzrncLJB6yQX7GcSfqdLNWNVc9YKAR2aURqhaZxHwrYYpBycVg12d8a8pukL7L49LBtE7WsZ",
  "key4": "5qv2fRnpCpTo143Bby9qZnqdydQk3onkUowDWoLHRusVcWCjipb2sNgsYjDWmo1xC7zfCc1SkZnF1sxpycHd4obM",
  "key5": "2uwC5DzgwtwSpBSvnWEguiKo4ekDjSex2k2o1rPDzPF9LSs6Ba1oS11UHhZ85E3rcHTHv2ESHHZMjnWos4ZtpXDm",
  "key6": "2iJCqR3B9Jrobof25NDVaDBnuSSsZBBkNKy7J4RHTqLBoorGpiu23GCaE2yVkATWTRew3spGcXHZfhrCa8NrzurY",
  "key7": "5T6iJzfmtGpwurTEBEsqQzxS4GYCah5NNuRNRhGMBzkhEg5NoVEEPWnigw9bdFvzEMnkh3VMdpeonnXUKP78XhWP",
  "key8": "jWeV73g2C7GJyr4AyyYYVnAikt6YTBxo39r8BMA7aw8TRX7u8ZHogSxV8cMYM75UhRYCu25m8n5B96JuNVroHPd",
  "key9": "Nx7APq3YTeoq25b5tkPNXGdyid7umCi2K6L7j2UgSYeqtnLL3SbGesHdgt2iJyLpnCy27W6sFQxheVrTSifLkCy",
  "key10": "4Q6R6cVcAtKYoqw9za9yGhadL8Ux1Q4T7yZn1UrqEF62GKG4yM2cfrDzA3q6SCTUtftNXrgcovfdQemjbxUVhrWc",
  "key11": "5cuBQ7SCJbnaQAnwcKQcLfKu8f6c1yzLzrGDWCakzLtZ1VD2tLQQFCpTgtAibffo2PPV5DBrCooB1VLukgL9njKj",
  "key12": "CZ16BoJei1aNvuhg9gyrK6YLPpfuHTaPWPipbizi6UXjkYL2y4EAMtA9paGaCEjrHZVmrHXC34MCaai9LwWAxhm",
  "key13": "5qv9AdCiJ8DoBE7BzUoLzXHR1DiHcwrxsuGRchkFAmzKiBW2VXWrSka1MSDN32rBTGWyHAHNZbP9R85xoNCpAiyp",
  "key14": "3obrEhFvMbrHXdEcJXJBdQBePS9CdG41gorDqtmLP6DSJ3UrPZsYx5b7YfvVGnKJPCaEXrxu81494v33zY9wAY28",
  "key15": "5jmSqqnhrPnLqeqJqS5qgvpThj4TSYsxAjn9riFJt9WrwdMJjz9ZdgRsStmbMH4r53sdbFsbY32BoyMeh1TnCAWr",
  "key16": "5VdXWhLsRE37bDMxxU685PfTik5kjJcZEcsXg8nqjFHdqsA6m3WTATQBa6zhjKdVhwSmm2dW7bjiLvp2o183QpNM",
  "key17": "RkejLMFJsNyZMivvGGQsdsstCh1v8zr9HHkKrFeBK5Ui8fyyjfeY82fqfNSFEz13TcGsVDJAmTS56oT8d71XAQQ",
  "key18": "baNSPh8xsfnY5FxedgXDKXd7yUAYdFWfR28MCVnD2YgQEJj23AYQx9e1aySoTNRupEj5gg5EVUcC6m1jz265FNp",
  "key19": "4qcYF3eiVVLWdbmWqziBeLzCdPwWj6gaNT3Qk3o1wXcmnfmhbdeQP7fFt1EmSGBdHE1p7rQMuistSmAdDi92fhBx",
  "key20": "vdcuLdq2sp1Ceahhnk184jwor3sHAi4PBcAgTPmtx2tmz7UNVBovsdub1cUpMKAhz3KWbwPZ9DzLYScRRA2NRwV",
  "key21": "xdND7WznnzZQfjKnbQabVSYdv3m5bUcCAL1kRbyXhVcgkF8dH9j1xqQ2s3ojbapqaddLGJGAwb6hibHJvEcjSyE",
  "key22": "5GmfdryCdoncMaPyFCnyT4GG6bpWRv6zpiM4zGSaJawEVe6Rj8NjcsjzgPFZHrpp8YrNf3RmgTJq1tST7y3jHFph",
  "key23": "5hmR3df37jGGYJjQtYbwPw39LKf1diR3ZhZc1vUB7WyCVwGspsYkbufmEMdLTfXBFZGnyLpeBMTBENL8WmuVRLcv",
  "key24": "58ix4GPYXtcon4wvjJV9QzKB7BF9qJmXK7HD6pfZkzphmxrxv5o18kuAYxLcN4vCao999w3DgVRm2hjJ1Uhe1ZzP",
  "key25": "33T2pUvcyASy3APKxNzLBK6D1saUp5GccGcBNrSkqov1xrJA1pbT6M1MQoL6aiBYYf2rWYUJuVjYSCFsrH78L9BS",
  "key26": "5129ZW2oQXVHMUnT68bmETB8NttSczwTu91yxWpy6FyfwZ9htnKV2XHttgpEVHLYsxidvZpjfMXxoxdU17eKXym3",
  "key27": "zVdVp2mQjaLUjmQcGB4B5qfQcxdL8qYtSMQFq2MAyJw6yCn49JrfexpxtgC4C7MVQ5JvBhEfVq5VUG2DwVL7cQJ",
  "key28": "3VJFQvZU5jKYbb7fRoNZvWdzQfF7exgAA5669n7wcQtQpxxhxLV6i7FhU9cBSxoJzFAQQNV4QLgsUrG6bWRGbccN",
  "key29": "59wBSNaEMgkWLy4Se3ksmphL9kByE6Fk2r98WuDvgYkSRFhsdKWT8CUmciXNeoMgv2276DHHvbX6ZqXikpxpHLQm",
  "key30": "4t7ysadNoopFcyYwrm7edCY1JDMaQ2fxRV8B1SFnLqgkNCjPDF1SGjcDJBr1ua7Fp7G3DggJwaNJGBKU38xNaY7B"
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
