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
    "4n5VFiQEgEg3WRj9shZU9iRUQY1REmdWAcn6XDEisSvcjejSppxeWPyP5Xf3SrU1rQsEqCcWbsBS8QxXujSLyPtG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zCM7MLdZ4sufRBgrGpdiP3hJg4AjH7wQLgykouqpNNtDX68bVeVLc6g5DrX6xu2vUmxLYCM73Ep29aesZx4RHTz",
  "key1": "53N3SWkH9mdZL7adzHKFDhfqRNtZFPdeetgE6FNkGHptCwANm3LqRgPkDn9qQLRekmQQTczGFuQ7NWHznTjtuW29",
  "key2": "2dUKiTfEczVcei9Sfydr97w1sioz6nLArMwUFj1yeYjNfJqsJSjq1bUCT6RCWhDvZ1FxQz9nGaDbBEUkCPgvvyH8",
  "key3": "GheuxJm7e8gUX3RkPnDJxeXRKjqZ13qDfxTmZwHeUijptMPJUNB36TsGAWPvxE3Bc5rqCnRR6fe7UcLrhK3Po1T",
  "key4": "3tgYFL7taM9jEfqcXGaoixcrvqyxjQXLasxrBQXBa9fcnM4uXHugW25KP41KWw32xQP6LvVETK78gDFLLPmf9FmP",
  "key5": "3CzkeJYB8tBipPHZhcyPgj6Vwr9rGh74Jtgbnh3e66Kq7SJmVjK2jfGVjWRL8sNKGRVqf3Q8EtWfaUzrmHtrGuQT",
  "key6": "5NUyyhLewUcZZMmfTrEX1d41ybivJ7ok3LKkVf78jooLxGbGXXSWM17KX512Z92XNt2xaAnUyzrbLwaqFhHcsuPp",
  "key7": "59SE44ecx8yrJ52Vp48J5zSLW4iRh3XDZZVAMeQt9CdCzf8hvAZ9s61u7EkMiihHN26zLzu3hv6ZGGBoFM84pXCx",
  "key8": "47RQuJ5nENw6d3BKjmRyzZ6NSvKbMXkbdc9thM2m2oyazRHJ5ipRxYRx8Awjryjs9RVKvjqH9mNugW2LsYXHNPHT",
  "key9": "2wr85gSoV3XRmaCL1EpoBsnV3ris2KKTyC49poFdJZG2vNuUdYAhNi6kRNoYwxKcxLSDnmKBxrsgRVBGMaZVAW2o",
  "key10": "41jc8cvNrVvWmuPRQSMeXDfsk4xAtFyT5UFyqPJ5vnpwYwmNpKiXgthvY9FYD4x8z4CeNB2JHhn5sLTdDgqTt8Ji",
  "key11": "56262m4SPB3iFNV9v1JV1a43KxqXu8EmaNa61mw2iebSC4j2yBhHzTDcPKyVaQg9FnSF3YqwozDADh4YFYTv2LE5",
  "key12": "5FLW9BVUFzb7Tm6Fqh1tbtpbVkC2LG6YMsRSyfag1w9sqgrzyZgfJU7Aey6T5AXBFgQmHJVzQySMKjtwXcgVFDcx",
  "key13": "5qWpibyJxcYZJcVnH9Q9A4j9nWbXUQoMXpBuzFb4pTP4H2QUPuyjCZgUbXdTTU8f8rwmBGezLYW3X2MHmNWPxP3C",
  "key14": "7WkF3CKmNVwHsZdGX1D11m7oTamSEsKdw9VjgyLf3K3yoXqbdgmekJkx6LRvThj14cAtxT9gjR3i5s74cmFw46K",
  "key15": "xcE2Ef3qV4TPdBp16kpQF9fbqN47TZ5CyPm9JMu6cv7M9jDCuzXT3HhWsjYHcMCYEN2EsREUZJE5iYp7wqXwiNs",
  "key16": "4o9C6akaq5muRV4NY2hdA6YHL73KSPfr8Vkx3xty2bgMTdzEf1Wpu4UawkiEwjMjdKpFUkf2tpuMTP813unmhYrR",
  "key17": "3X13sG1sWDZPbzEvzg1WVjBdCmtDi74RPWoD4ZvCJ5ypk4Uw12U6hCQcG56ydkE1MXXewP54K4tx4as6hBM3sXmK",
  "key18": "61oC2AmqbpZKtn9JsEbq7uaGNzds7TykLVxfPAGiSc8WeY8ebkNay7uf99PmFdjzpSzMjvD136Y37wQrJYp9XdDy",
  "key19": "2g6proJdAV3zGFG1GVD47oPnkr7SLMUtLLfrngMrR19ytjXouhMxDGsoxZiVUhd3iLh86eLpGYQ4Rh6n3YET7q7H",
  "key20": "3CeM2iqzMmTni4BmAEnUVZt7fXL6ZHSXWR3aCMuZg6yjmesqwY5xq4UssSLXtCcErxiuByAZo8UsTvuJoQ5uDhiV",
  "key21": "ukcvUFrZRifMVzF5nLyapZ2DtVSZSBxFpUbdevs4L84j7syDL49mp6vpBg3MRFbpUkiU11fbEUDsrvynwWV1xBg",
  "key22": "5sB1pEP29TNXSrhBoeNNBhqE86qiQr587qa3X6hjPZZ5rHScB4B4k33QDtYbBBuVpBeVnHAZDEy6HESNfApUS5dq",
  "key23": "2Q3Rm6J9PqmaBtGrYdkRoS9F1foVRkrmawYD27f53BG2qCcQumRy8cS1Ga1LoV7rixJS11wDKsDuJjhqWdhDJv1T",
  "key24": "2vEoWQdFmpHy2oMjKMVf8kfA1tHJ9tGXDLouTFMHYP3tXavtLVEBRPv8k2SFLxxzBU6WSpGGZb5RKapYX4SpAXid",
  "key25": "kzrf5j3yUJWhvqo3xGoGRoWUsZVJ4n4ATApcqHweY1865Thk9YZYLGQrHqyuxKNGEXxkxuV86rNuSDZy5JApLEU",
  "key26": "4MMUVY1jcU71AVKQPgR5AJe85XpRCMgbyUzuXezp1yugzUhiADGUCgduL2mgZy93PqJAQvY5rJ5BrpoD7xSJPRpg",
  "key27": "NhCDe8hr4Pd8GMM9fazUfeBYr5iGWo1DTKpQhCkJFkZ1cqXNJPzyHTq4FpSX8Rn5V8HhNQ9KhGh7S47NNVZKEC7"
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
