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
    "txRSEcEgPZTMkuTAuSAmNZcFi7DmV285NVqxMgLnctwyvARvmhATTKW1Gj1Cw4ZF2cnLX1R9aQBE4MJ6uUoioPA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iwoqT5eAFwDvRjLoF6TkJFrzqSeTt76o5RG85vn1R8Zn9UeTAuqtZUC6xdkX2BDnj155ntfjZ2jgqzuqHqqW9p8",
  "key1": "5BppdTEREE56EimaaaZVSGEvgWjsLKZ2n6j6CYYCXizBPyFpkEsgqKjWGeYFDqbnLrvT6FmhhMwkw5g2euM8FAUR",
  "key2": "5mnZupCYDA1NDtaybtgbEG771HY9eLuWMGZy9JVPF53N7cVBz383J6fooDJFwp1WQ1LX6yeRmmeyFu3S2zMeT76c",
  "key3": "2hkS35THTeYwqRCYN8kdMfBLbX6XPTJd37dpvdj7kLiuGE1KrRMj62kS3skNJ5qd4qFjES91uwxBhtDtMYkMz9Uo",
  "key4": "21xc81trXAiFRb8W35xV6ngmTkjiT6Gyc43DACnh49Dx4ZhcjSdiLRo2mxLPuPWjr7bKxvVhFwkxCCNkA8zd2rMy",
  "key5": "52cD4UCK65mx1HHocj25yngmz7UaZuLvY7ttGbbYY3M3agLer1rDAviQQghnS72MXEMaidrRuNMMcsxpVZQzn1N7",
  "key6": "2S24DrHXXrB9HVifKRw7aAyw24j4w6GrreL8bWnJqiqKjQNAXUa5pi7S1AEBoshAN9yJYAEsV3hGSywa9XqH1FJ1",
  "key7": "3ETeVMDL369mXz7QDHwk7YajHG6U3qZwy7E1txTgU27zinoocP1Fi1GozHc2RNHYHTnkyjqtEPvagrACa98zRsNT",
  "key8": "5o1egV5Jne8eUrqmz1ifEQasybyCvUN8EREXkMi4gL3BG3cLkpneNFedNXRS6zv6Tu91s7qQPgv3tdnCDaY32WZM",
  "key9": "5U8muwrftRKkqpsNemhbZ5HN388cu5XEB6Ry7zDxVpzrY7mBqavrMojRGXrx7twf57pxtZShw9mTqyXDRWszKzgN",
  "key10": "4z38e2yzpHYt7S7yzq2bZYjzyyEH8vkkEbJJswMJN8scqAjB252d12sWGpNqHDFK5CcafuHhUbexZWDFioDUYYji",
  "key11": "ZkzmZJjugVD1TKZPejGoPyXbm5nUb6VJ7yxAusVB31ScnuwSEfUxELR4UGnZwC2i4ZeuEPS48JwBGouEmgQNApk",
  "key12": "3Ar3gbzkpnaFGTEXFhSM5pePMUdkryKKQ4vUBqSZ39bpspBLQtmVDvEYjU13udChncZQkvJW8gCPm27a4dPV5q47",
  "key13": "m8PZFC8N7jCGLA2uq3ZGKFacdwnHyi2UEv2N5DJBwfoiw6p2BQd7zM4zgNA2UTukGEmysfdZyzZxYkzKW7DnD7G",
  "key14": "22USemTdAhrWBkcmrtBvmbGaoWAgSZbJn24PqVWQKES7YqY38mB5YN6BYkNgsx3iqARsQS1GkVqx7xWjPm9kbD2u",
  "key15": "2S7VepvqAxQs75T66rYQMA5FDMU4FDVsfDcKqqbJsiCUAFLZGZaDNHPHz8Ej2g6yC6sJdnwuj7D45TTNVBmksZBC",
  "key16": "2nYdny9FNHKVaZ4buPgDv366btNgGuB9dR3EykV8BrAHbdf4mKmHT8NzwbezdzXGzAKtzVGvQTCP7JeswWPnpF82",
  "key17": "37cGj1zDe5aAXHRoNKdpTGeMRj2gfD5Qih3nqEAWjNNAy1ye2CYcZU9LCpUNUS15wpu2d2UoCChtnex7dvhUS2MB",
  "key18": "3GHBHFCVeGdWoU4qf3Um5sSSeZWjq2j5orUFpgKYnd8sTpDSNcb6dLx1fkVxoxb9nyBQnTifk631HR71Czr1yNgo",
  "key19": "2fVcTMarJhjaiJ13q4a3gds9X2GRkgtzknki2v2n33iqYpcitaihvGRbffiVoy8n59duhrnPLPBqsmnUf9MPEByU",
  "key20": "TMcVs8DcxqGcDbWwxbwCFQjyZ987F9Z2teb6sQL9CLo6UubVLp9X8jAcwZ2LaorHzhekYarXEqZph7J9feozwQn",
  "key21": "3jRapN8KGQuZr1Zk1sdA8DxvGhUijdxmB6GmK1HQ7VQXgdb6pBDHzCCay1qfdZLbEq9Zxi7VwfiiEbu4QaejTeTg",
  "key22": "oyQsBWHDo6eRqw52EX5cHrLK9H1dgMkQ6sscoCQjauCNTmEwG42tD1XnbZXgeDBtoHADgE1xCX9sqetgr5mj8q7",
  "key23": "3tZaNhLH5PZLdgChswF6SRsG29mH3cERKhi75bcK3dpJ6vdaCoB6HUTFSkk6EnzUvxGFHpomnbTTbfaWufjVJVmP",
  "key24": "24GJyKYKXt46KHDk4pX5GgXTPo5nJKK3kJNYDxrpERxjGUMWZAsbVA49XkD3h1pGbzFTrABJ8RxkJZ9aJADVY1E1",
  "key25": "5yVw6RQv7bU1eMF7VpDk9tpBeM6uic3an3MRq9Zwhg8fkT4Myu5DNG97FskGB7obwQJqVRPGQCc2zabrA6FB9zXj",
  "key26": "2zFNLsSi4oWDKRYZ522pMgHAcGwJrW9B3DoZzVnqe3yeHPRUarG5QcBK52xHBNrmMhcLu28MgJJ83cPuCb19x2n6",
  "key27": "NfkxU5FjUTntycSdmP14fVrfrPo5q1moeu6YunMuLg67bnfzzbUNEYLhVjKKiEY7GZ4wBo9TY6U4XQNS4pD2mb9",
  "key28": "5eBgYmzpDPUNgm54aGRBUihxkXpE2Nbv1wjdUAfBYzxL2ykaKgiMZN5S2ReBtm9qz6LiCYYQSByuwZJrcDb7snqD",
  "key29": "53dMqYAhsraqnUBQ2MFtiwDtqgTdy5FWH3b1TpHxw9yhvdJo2HayFYm2oMZSg1ceZHAb2pZaJVKaCq1KHKGaPAn2",
  "key30": "ennZ7t1dzZfUbAdfrAYTZAguAF9ojpoqgjRRuCpzsZicqdfeMrAUADb8fKkYdmEkPT4nSZGBCABGq7R3u1Ahpjn",
  "key31": "5MRN2RHHS6NN1uVHu7s4kX1i211BeNxqpefQosvvnC1afk8k3T3KGE3wqghGptmVNrBKPqW52xq3s3zr85xquDKX",
  "key32": "2KWupedth5b497SHXdxzqDxix2kDJVSQZLEcsZBEWtAFMBsZ1xn1gKsGQoc5MNLD62PYou4n7hi7DMfZAKJxeN1y",
  "key33": "426FSKnnK2PmWPLBLVGmr53fqa5TMUYQnL5aJ9mmLpYrsDk6ZNPf3DNDWkAHub8Q8bZWpiqJJupQZVFGDqnZfFMZ",
  "key34": "2t5anbWtCfG8kaPqCQBFrqBko4Pq71JwfxSbfacR7h41xPNmMvaYBVKJu5DdRroBVxTnMgmguEZY9SJ5WnMrWXoJ",
  "key35": "4GhN3qndLNRz2RMJUfPLrNYcGUnLEsV2x2YeLHoUdgZSDBp93HUABUn8Pj9Bfa2CfqVi9H71RTn5fTCWLmCa8np2",
  "key36": "2kKV8XP7LsWsXxBZQPhNDnDttJYFopbexeiQym4zS9qca3YzzJLTiBqSK9QriavW6kgWGgHEJPYW8hs3punV6RJY",
  "key37": "YikGsEaEDPDbqKd7MRoFX94UwMnpkFgZSyiceek9fHszbbRvwJY1pCraEfqQyBTcSCrwZeDnvaimRWwKqeaq3zb",
  "key38": "2CNYREvSxyBRD358zPCG6XsvU1HraRwGz4ZYCcCssNY3YoRHYL7C4vG8UYQUKpBL41oPnyNSvU4y4wW6QDYFge7K",
  "key39": "2A1K9u4hPtW663tpphJ6RnPzXbAEgWRstEnRByetCQC3wfoD83kMDE7XWeMPQtd4NzcR2XwiKJmh7kR5ksb6nYwi",
  "key40": "2iyLEe64RE7a3nnwB3h4qzMLanDDZeV9yCvU6uNfaDwe3E1FBfxRvKwfxH8aN1D3E6HhA2dZscvBMYiMvvLJ6fRh"
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
