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
    "3RH4nT2AVkFbqTqTrH2FcomwYB1itFc6u6F72ZpQUxPST3rXhBzCyZUM8Z4JqghGnEGuyyDh7816RUNLncACMU7h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GDwGLbGqhgAebzCyJxRRaGCJrWF3v6MJ2frJyetYuvggZnkufQGXwoUryaui9rV7QGRwqvYJt5VMFjJj7JhNX8E",
  "key1": "4rUeAdTfMYqAprxtofQrjgCbZHCESmQRZmXhdnsNctr7kKCxHGzyAk57ZWGSoAkgEUY7VSXffcLouidZVZG6C25J",
  "key2": "3KgjLunk156h6L3zEbvzzrApXcd2seLSVQGK1p3uJfdF5gH5CcQdz1pEfTGhKerb694evZpcEDPkQLRyXNTh6XS9",
  "key3": "5w1xUuWebk3uogkCxPmGkVYdwkgXetpLbEVqje7gHJ1LPuyXSFLE5oaTEYgR7wMLEuTmbQEf9ogGUcC4M5Edthgp",
  "key4": "4phzcoSM4WSVpVm7aGi4sgsDTy6Ev5TjYPH7nYP7goXdyrqikP5qZ13tepHiNKmE9p9FuQTLmVWwfArKQnQLs1HZ",
  "key5": "4FwVwxTAQ5ViyUm1ecgs9uYLt1k8254tSJZWpfEevCiNVeMT7nPxzzG53eMyjk5b8rySkNXXpa6uAVwZNjebsSQV",
  "key6": "38ttoNecXaa6TL8wSroByWn6dShUsPSam4hNxntpzNEodwX6j7ojncjDAqBZcJguRkR9bNsA1dQc6qyPMo8DWmuS",
  "key7": "3oHwTEAY35nQesKbShTEqnQ7cpToBGSuRMsUgktcNagPh7U8hsxazDa8Lei3yRCtdRsMkXu6baLWFq2HovjX1Y19",
  "key8": "59GLA8E58NM9GuADtAH3xLhG5MU1awvE3aAARNSR5vDSUJbrpN5p6a9n2QbW5WLkqZaJP5bGZhxsEWnK7nHuHe2L",
  "key9": "5Mcxmr5MSFzozxmECGRMj3BSDKyMXoqfaTkVp7MYvs5Smf8NQswbbXdgoyneuXPu2We2KM8esaqTPNmUH8CmsELm",
  "key10": "5qEhMS2Y8c2VTZwXmAM5hTkA2f2CHK3T5F7TCjzHw5jUDX2joRhEGhi6kqe8ngai5KG7re1qvApH3a2EyLz9Hocr",
  "key11": "5KtWP9cCt3QJJkXdm48Nf3hwW56Ahw54Na14byEgpLbSyY8zPfmkHTE7bAMCM4tMZs19vm8zSNsPq9QfSAvZbnmE",
  "key12": "2HTYaez8Ac2QDo2TVmeUSqDuo9AEBMKNr1uYqq3EKkdPW1iGSpttN1ynppeWLnxx8TckxkT4moLFXjPLXraSnvZD",
  "key13": "2SR7UoHHUvMzNkpJBFywDH8FPRN9kSVbGGXZVRamUD3QuU4u311DEndDkmyyq8uTj1rZbrcUKCPs2KPTLQv1NZTp",
  "key14": "x9CTZ94bAocrLvzHkiRds3iGCkfxJbq6XELQanSdYM7Du7VBCENrhQXataCcfJ6HN9ocmGqb5A7c3mR35tcpgWi",
  "key15": "3prNEFnAaa3rcMvb6kDpdCAEWtWvwpUjqS3ywyrxUeDNi4EWv6V9hRCiCVQ2HLYsi48hKMWyvfUdbjs363UNaoY8",
  "key16": "37QBVjQ8ysp64Ve8cC4FnWiG25xgLiCZHbk5GVxTinQdqjDDEWLACP39Cjn71QgAPrjeorUunYKh4AfKsFQ2FdUm",
  "key17": "rYtm77t1rr9gvqFzT1CcpJ5dYqos3Whwvg1KdkTwUPsoJS7KPpTrR4mvLJZ8Z71rTFJn4PaTgsoQaEtU1b9wAmk",
  "key18": "5UxHCWW6MLjLRa9PGdvbQhxsg9t9m6aXXW4dodgDPdPC98qvMM9B16ZWKNLDa3vuSBJQegb7vumQU96o7Sqsmopc",
  "key19": "5MsGpEqxTzx65YqeVZj1TFiBqPzEkvF5QjEczEimopSnyQ2RLAkUrkXT1LQpfoTiEfshZcGjoM52sxtkQo4CjaCg",
  "key20": "4zp7FUWj6rzFh2Gn1umvR2xfyJrngqQbzfdafzsX3FMU5YCsyCgKN9dh2snZf2yN2oG41guLH2Qo9Sg1dbH1TbHu",
  "key21": "3xZZkqwgF8sP5eqWX3RyFWcLz2ghDUx6wojtd7Z9fUyADEP4y3jMn1yYgiWVa2mJZBN2j7vkYH64YbB6etMAyXEA",
  "key22": "4TCYakBRcShvS9BdpxVM1j6tiQbdc99aQ3qKGNW2WV1QDCVR5SVMEGm39SrDUptMWVqg3pqWpqQT19LxcNe5Ht9s",
  "key23": "3VNXagzEGrBNcrgqFdcppVcedrTS95SzKDtvFhScnFkNagcY3XTd6DvqTByVTcVvxwcoM99TYJptgT4xRWAvd8G7",
  "key24": "3AezsCwaFGZQz3SGDjjLQedTm86KRt6dTLE1CQFZzTBP1i4BoSz6W6bdp3gaBPTUdDhtGAkvPSxCP12KpR651Lc6",
  "key25": "5xL62trSKpM6kTZRbWb6xGAwkg82BwREHiwechDsWgmncGCdae9LdpsXHTLykD2QsfNmK8cxXs3shj95owxWcNSX",
  "key26": "KFJf4qF2jQwdLP3iJ2qE6PeVrAV9jmQ3A3DMvZynbJWPc3TNwTghG8momMZv7iMvoSftyQ97G6LhGh4poTpRbtp",
  "key27": "4K5JmMMabv7XZRBeSMdEQMUGxSbp4sNZTPyG89gBpYFKgYYqKzUrSSfGHrPBPA3kn6w9pAFDaU1dBckf2XfwZMxt",
  "key28": "3fpJQsiHEr5pmaoFhUimE2CH6WuTyf8zJRDCejyCKpBGDvT15Zb6PZeDzv7AivzCiL8baNZU189g2hx1wUetF2jY",
  "key29": "kafAubKkWv6HdjgXVyZy26q8CVyTN6cFc92vKKjuPjj3FwWeSUikn9cYEzr9VK8QWJvStyLpMrkuXikUt4L6EEm"
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
