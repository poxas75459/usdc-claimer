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
    "2US4NBPNwR8GvvpraMwYZfuFKwjhZwrCZtgp2iVcRCnNgrrfnLwhKgEigmQLyisbftecXbAbiQUEPHLq3WxDJbbG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AEwprb3BDhqhLMsBNwoHfy9ShmUMfSuMYfF467zGVrdKHcfstyiPtKXW9ZoR54r3CWdDx1WUHnZuSbPmD1hfVhr",
  "key1": "L8xkrVzaHiyrTosEjMfF3F7HjuhDZBDdq8dfqWUb6ZYqDMXmvF9RzSLeLPegcjU6dqgznzBCPMGFeoke36bMz1V",
  "key2": "4bdiirkKyLY8xHYnvDxoyQ7DiBbwoQXW8RVi31Nm6gosL8QnbVFE2bWrcJ4MBXC5hgVXyLvG15S6EJLbyLXuPxGm",
  "key3": "tarmjNaJRY8Md9uoD4222Ddpqe1uW7NAMbKLYAXgJLmfDu3Kgo653ELeWsQptghKqswrAqZMHp8T1m1uEaaArGS",
  "key4": "FWfZ6NRMBPJSgPBXKmt9eqynjjsD2javoMRNzYGZyEUThoaFMqYGx2C2ZeNBURS92CEZiMir8NrtvmaokMSB664",
  "key5": "3QKDUDFyki2dAtsfybfkMPJkeTiyUJWYYz8az1aiSh7hCEeHVNGnJuDE7DJBFDT1XcGMGcgBk1W9HA1Lgg38eroN",
  "key6": "3EY5Z8MgEHFAeRre6LLWva5DqEVgsd75A2ovzeTXYYUcWyADwGFpPRPvgDJrJT7CJKhs25dZLHMbCpveGF7jsLqw",
  "key7": "2mgHko632tu6DPdoiMMkFNQUDsRhxTpnLXYKL2CHtJMPWQdbbwQRNeFDwZ3XQMdmJgaf2Xic2gCQ3A1BTZhkTYSV",
  "key8": "3RVgVds8fbRYJHBYo1aqfahFE8RpZfJyWiu7Tj2u48dZPmeN2tCFyUWDRF8exuarNDLDo1uA6NeCx4uqAg6qvxS4",
  "key9": "5qtdbkZUyUAU3E2mh1GeLUxybo8mTtar2xB4gXjYSHQjN8pbyzpdYndxfVW64HhkufpiAH6MowzdUkZymYoAgoNL",
  "key10": "5AWuJmzpmh9VzJnZcUiTkkNxs5s4DqLyP7dxREr8W4WXC28zmmA8UiaFMV9KVzTpdaRSG9Cfb1hQufiJFVM4ayXp",
  "key11": "3ScN2guksMjSPqsR5XTpLrjyj3YHbRDKxxPtghFCdg2qbms7HGoav17H2TtP315uc5Mg7iA8AKUZG6fC5CgdMQn7",
  "key12": "458y7F57hbLYR6LqYJxenDycAznWhjER1QQThtRbFUh3c3GuBzzFs8QTZArzJGHdmZGffUYEudS2D6aBuhDxbJQE",
  "key13": "41xzzUXg86wkSg6UVbakc6c5kFUoneCnhJfzbLaVT93XrRtBdvDye1M7Bu76xwdPeLyPNy6awPGd3juunsZ6qux6",
  "key14": "5rzAzTuCPhRiNbb1Ap4rZxjjsKu9vCojXW4eLHPrQ3jECaPj7C8PXMr849Uc2q2oxWLoSNkwxHb8D75S8CkBQzKL",
  "key15": "4HE1LSCusytfw4bxT9xkVetzpYGgPCP2GoKZZe4tMquPX8QPwP91vPqPxeNXNo9kCz8qYnXULrR1vYTJiG1z3TpA",
  "key16": "2gnW2jc36LrxrCcxaUoXdjtaJtDNG8GexiKuFcw5nb6kRYfPw9iyZNRsjzNR31QxCudbxYhCsCSh8bmgUivEoVWC",
  "key17": "4z2n4WVUUALnfobprRL5mhJx24B4CcbzbgJMuvMPvvPJ6Aour8P3Gz1qGiADYT5xDYFmyGt6WWC4doiGPu8tETAX",
  "key18": "2miryqEkzy3oNzpV753RwkRbZ5jGpWcMLtxgjk6rgQZ3zLYpcyNYxm3ypEYnQuJaB3Xd3CByEUFBPbaBZoRoaUzD",
  "key19": "5VFaqnw75foJq4nDG5bu4WYRrMvQ2dibjudrNe11ZrfF43VcswJtfGuDjzPzixqx9cQ5qNYWi2DZLLAxwTuho5e6",
  "key20": "xupctaAKuors5jKMMeu1w1Zprmq7oVD4BD68nNkBQLVPc9T22qjQVwCy5pTCMZj6kYR7WUtxEjUxcPXuvc2fVRi",
  "key21": "3Wps9ez5SHrQqLRJnpT4kyeY2RwzfZ7casGfgh3HPinGh5vTVV6SuGj525JCmbZYTkTGctX1Rz2ri5FcHhp75NXA",
  "key22": "3A3j6NAQg4pLCE1cttXtdFDx1MSbQ2wtYfUJXvTtdjqBrWrBdEvx5SpVcjmne3hqFrw7GrJ7LxfVRChjDxsyeYdu",
  "key23": "4WohXT1LrSv1Z5g6vzqcmCPcERiwZCHzABTTAzXYjjR1S4TASbNj3MAnsCEf5gD8bUbhBLMNB6cRMXwMpt2ocx9z",
  "key24": "64eCUHSmpWKjmxT8SMoDQ28LHJbBxnyC1qAXoaTgXZDWn2pYZZD4AqXqBuXP8NuKbDhBFatjmJD3PpJSjLqc1N4w",
  "key25": "2DGjCEYdZSgUcFtkA8Qb1wsCw3Bvuf6uEp1E71AuJbiAPjy4g66PdGrL1ZSRoKffYdWnAYpS5Nrw8Kx8zi6tHTmk",
  "key26": "4N7qvGw4kSPPWhWuAAYFVg2CpyJRFSN1fTXhRhHS6r7Bs4WviApV4sXszhtVwQV36zFvuw8Chd22k7u3TpJriPCG",
  "key27": "37MCiGvEquVPwmZ9qaXPK893fYDaJP3YXLDXsMgEkG9934ZsSxTfZ31phAECMnJ4ZnePus9ustRS79gLNw65xT2e",
  "key28": "5PkY4S66UUpJ2bqjh4dyxpJLL5q8fMLoCcdDgh7Hec1cRKoi3AtjVB4NfKWhToVFpiBs3wpKgwF9YcEFjnSHYTxJ",
  "key29": "FPYT9VD2iTRcuNg9bLRkXxWaXU9Hw8ZEj9YUsHZdcNpKJWqs96M2ThznH7ZnrpWMBBMi4NcdpSjQ2EvRA6pjCfx",
  "key30": "2eeF4LtndCH5uNnuuQgGdsLaUttPb6znMs5uxjr43xg2rr7KB8zbuEB8UWC4MeaqjSFcP6rrWEcPa69WYBdziDyV",
  "key31": "49BivMfdA7mdvdcDfdyRUkyZvhRuQQDFfXVnnFBQXDSK4HB569q9gs2GEYfeT1D1yoTq4WRPQwMsPLQ8LtADPpfv",
  "key32": "4vxX7Qr8gmT13CwE3npehSjVLjKxCudKHqP4HBH2iYCo3sDBfGanzuX4UgTpZpShGq8C1rvN2pp3EFHcSoZZRG1B",
  "key33": "42P876CqdZCDyyuvpXL7vATQEG6PCnPX9CGHj6inxXSwxJDFAMZTwQRc7pfq3RnWZMHUCVXRDVVNMYC98oV2Nv2k",
  "key34": "qtk9P6Kfhhy3XRu2VLUXVmAEW1pxjogfs311pcdscieZqRiKmSRYxZBTXsGJuMRZzDGwkZQWjo94nx1L6TsjttK",
  "key35": "2kBTTiynrjaQU3UGJgzDLX8MkrXqpaxtmmA4NPAyXeEaoDfeeFAprEKDuHxLBMxUoXDniKH2AueKknbeQDcYtiiK",
  "key36": "G4LENZKiWKqbfygMtdVLPvrqoxyf2KZSXg1zMFstkQWvrx18GzE5Nw6htQnm28YKK6vSGCNe3cpvxLm47pDvS32",
  "key37": "2qo9cuZuDnmoRawTmJt4QjaLyDoDTTvcYoGhM8edk5V8e7xeK1kFMUw3vkQTtNnKUykHySfAoJusXGJhsw7BTo8c",
  "key38": "2p4bFu6W6Br44M4TeALqJPiWHqCuStHbBh6y33Rw8JgzbwwYFN9eg3Vq6fg73jUi853TAbePrJBU6C7SJdzeqkxA",
  "key39": "SZ9LyHvmndMwatRNRaRs6bsxHQhXbsfLNcVP32QnowXHS8ddXnW13HRTyedgqgUfQN3UGDNBtHXPromw1ZdbdMX",
  "key40": "58tbCMCXEhDX3UymAQPd8iLfxPLEjtRFYXyBfkKuXmnwtEHUiQwvyLZHnwRMEUxMGoietXrStTfjv6S3QH8PwR7S"
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
