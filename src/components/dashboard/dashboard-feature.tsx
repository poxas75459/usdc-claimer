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
    "7XfmUe7jAFdpZXMHXVTrYJoSkCeBj9EsubqE4cZbrVCAQyZ9nEJLcnu3kHVvD6BVQTfquvB8dwxZucsrwXiBSaC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EDKPKkfFGWjRGFMnBFaXmUt2n7JSZZthXoByiKAQqB8pgnqCiG8AFyuwJY8byNKKm4izgss7jwDA8GPn6NuB6vc",
  "key1": "2JqX8qNU6iPFPQ7UAyF7uaRaM52nzuchrySAanFgvtbfn6PPvJzRrYLNG9YSbpojifyfEPbGyGr32jtjytg7GW4a",
  "key2": "46BmR7ep3ewvBHDAPb43VdpbZ1YN75KKWeR9aXvi6DhvPZSeoWZH8EWsCqkj6Qf1pi4bbxnRCKR2YtuJYqqMsyKF",
  "key3": "22YYANShpgVgJTQ8M2drwEXdAvDJ9jsYHmmeHBgcv4L8rHtoWWRXdjSd57EQp4Ax24t6UvdYrgMTvuvuNE5zyEwc",
  "key4": "SyY5AtaKFY4Hsukj2MFbCVjEQEJZB3BFUkSVkm6nXSQ3FrAvxfdhoEsAKQE2XCHzJ6Pk37hCajJkLJguf77qfXC",
  "key5": "2TrXf4w6pizM8SmfyfQQdtK5GCYngnDfcrR4uGTyiMDaevj5QL2nJH5xg41EoyrkFUt8mu1uaqiohuoJXgheB8GK",
  "key6": "5qFj9VTni39RWujWZ8KZGYRNLJEn6mVVSdGEywhmFJmzFsdVPwY614uk5Ht64cnRuYj1zE424cJPKrpmP9SEnSNk",
  "key7": "5n9HtouMLh83WUouVqNvRyHPdpmesHg6iRXRL4BgiChEPqXTn8BvcWUFXiePREJPUtuEEW3oLoPaVVjrTtsTstaY",
  "key8": "4fokyWtRqRiWgtkRTzAtYq8kuhkeQMpTL5aYSfhRvTwek5uoLYdvGCWwcDRSnQrwYQTJVDjW7x2d7HyB3K2fPXMS",
  "key9": "3UnhxaKZ7pso3XXS8SX66Pr1C7NXPzvYCZjSTo4v43kpwLFXqowV7vfP5WFny2wkH2QuM4WtqZb7G17yASFE6dz8",
  "key10": "6P4G78iCQwn7s4o6BXAAxBtaiyQbpViyEs2s8c8KKL5v5MnYuqJe4tbhvrrBkS8oM12W1CqnitcDgC6sWV4pJBF",
  "key11": "3hn22jpMNTz2bddup31dqizw14a7vZuw2tUJiQU2egq1ZmRYQcioyd2SVUwcGfcBcisjtDkzdoSkj7s8pxi5Emjg",
  "key12": "4gpJ33BMxFy9oYLwS9nMQZqpCuR1FA2bfAFddmwUamge3RrXZq6dyHzaXWzGpNcvWn1SFpfPrjxTkz3BU9v1q6Av",
  "key13": "5YAD19KBufpAo2qyNpmWi2uPkMdsbrJFZrPNWerfiRxL4ujyXQkYFwTr8aURDMTH6g3Goo7Ckd6nYXvGs3vvV89r",
  "key14": "5nDLtsePUQ31ia9QbjTjncxdBcki3NraECQMj4x4J8VMrWrdJSQWZSftiruVaGEnWkQGFieDmP7abcMprnVNattm",
  "key15": "55vS8Wucsvjsi7sChTfkqjHJP8UpP3tXAG3G2pX4bCRXDv8QC1fhsesqaat51ugsn7Ci6JUZvPfe9Cxedx3JTLpH",
  "key16": "5g284dDwpmLVwZVkaqRrTVWEnn2xV6kMFKrfC4qSrnheRUCna7nVFZx5UWWfQ1PEShgh1NaXvvLiCjHo7DbXiy6x",
  "key17": "3aJA98yQCmfgswa9BZHbfLkWewbRmoeNWSJdVYaZkgEeht8eppHeqr4AEaMPJqy2TEBQYx5H6pzZLMuRc5TSWB8Z",
  "key18": "1dn72NTpzN78Ve6P6GYoS45B6LmnScbFXfDUvVGYcZQMGZVcBzpzQcEV6P1FDTvd4rg3PRYmSh6dEiwrKbeLnYK",
  "key19": "61Um5SvkwNpcg2wCppijjmcAnDdAEmFLSy2yvmesLoQTV9Sn17h2BEew2bFggKuuLZc2QdLDuxbAvesPeYDPX9ZN",
  "key20": "57DxxYzSeHV2nkgyQ16gSQYQ5m9CsJ4f9yY9TaVe6tPwaDuw7WK5s4E57ReJXbRBpFqmKg47mnjpBJZQBgs6zNU",
  "key21": "5Cer3LMPnYzycPhnbDDswSBCE4VJqixj4EiHR6oGouwXJwkMtK9htM3M4Hkv3uvyWWBn5o7qC4SYgzVM2cAfSb6o",
  "key22": "2QYaev3QVEQ4VSTeUNPBHrotzqjnMK3GbCD9c9Vd6QgdDRfSmT66TSrimSTQcysCyB9ix6SxVaWRTYk1kBTKdPyT",
  "key23": "638RZh1YLwA3yAS9JvnizamhZG2p2Yy9vqmeYEGdWdpUJr8Ls28hV6tbnPidefo4yvEXSkRcyWJVBj1dCBSFbbRL",
  "key24": "4rE2shpUNhZxmDQePXzXZqxURRLrq3yAfeQAWXX7UZaFDj2WYMpi5ooU3Ww6gVZsD3E629ihX1moEfSkJByX2gKz",
  "key25": "2MXyKFS5i7uM6Yxu8uWQnazSFxpoEspTK65XKAFUF89G284GFouGimgMHPsFK4r4iWtBR2QmF5geh8EG7oVMumRB",
  "key26": "4eouYwZnCMSuFx3SkFMCC86VujNtU1yFnvJYJrYqhaue9g5HvPr8J7yg8EGfYDxZEgnPn5qGEN8zh2aQThPNYBmy",
  "key27": "TiBUPr8bCZU3gx9Bt3X6QeKeGRcDKtJiapVaeoaLCz9rEeTfah7wYgMSves97acNwdb9odZ5CaAz6mfNzTD5GmD",
  "key28": "MpVENUcFpqWdy4fCHXTb5wAsFnf3ZY5f9fRvm9AuWERBiNJfBj3PuQFbXZvFoXnytLLA1AKXTWRERnhShNTqBvK",
  "key29": "5197QzYui9zTjB4DtmAJ6ETiZhqXhzasm9hvNRkFpmQAHHLfFNLj4aSdwgssLvbTXCTuvTJ7rsyf9EdHtLyJHqBh",
  "key30": "5QjkVmxM5qQqKco3DHdpCg3fZadw1VwAdGFoQN7sVjyqjgmQs6f7t78PEcw6vHCR5kY2cPS3dGanPb8mNkcjVNKW",
  "key31": "BMcco8v8N4geMj1thf6ZShGN3VQFKyh982uvY1ZEsG9Rwh8eSBV8vDKLsmtmYARX7LuxHV1AgeJg7DdW35S59VM",
  "key32": "38aHXhU5MrZU3uNokwEV1ofS1Ut7rN4wePJniuW2WP19svmL43btSGqqA7ziZ7Tb2rmkNJ1utybWvDm4Rw7nsGzY",
  "key33": "3xsb1wTDAH6rPyAyxFLKrDWHECvoDJUjmfuobpbdJiQF333Jqm5ymRnC3cGiXRYQdq8rkWdQauwyxaX8qvDThqHM"
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
