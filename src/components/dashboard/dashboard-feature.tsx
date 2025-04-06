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
    "4US1ZUVxGAqdJ7YzTRMgjS7FXVP4J8JU4zPRAR9PwJcvYHGx19uWtaCzX2SgdqMuPdKgXbkezfN9hfnWCDnGE71k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DXdvzLPCj8vF1P3JFKsP13DLdwokAc4eYs3YzdYhNF3XX43Xa52dmUbVF2tbooSQgotWyJjFdhqoLW5uCiEC7mP",
  "key1": "4cyewPLYny9wfJGhF8sULmrfZtthSpbuAjGx8PG55HojQDdVCjQ385gLHz3QEkvAPbqpx2u2Mv8KWhZo8d5tYNwU",
  "key2": "2J8mSshwWf4wrWcPYZdXSFQPQ7SXAbcnrU1ns9ehCAiHyWDiZCU7fT2aJWEUD5W6mzefokRNYxfFMBb2zqqp68ra",
  "key3": "4nMpES4NtLrhGPpNrY2wjpbtMZtRsru17JnCTaqeUAJEU9gp7kUCCWf271wxbVYTsbVJEyrz3RmQsxzopHsZPYYY",
  "key4": "2SHmireG3fRMPxqtDcPxsffxyn48QHkDxC7Z7wVVsTVgvJ2VZGcpY9HuwRg2BbsZf4w2tYriD4i3rRMB2yUpEvWF",
  "key5": "TBPFSu14vo4aFBPbi6mnqFSU66uXKUTBvhvAKmXK5q4mRq3MteoAv5uErmAvWqsQaZcczkxSN7Z8BfhcX52P7UF",
  "key6": "2L5fBy9iXMDqcFbm5a6MQbq6nmdw4iVuBf8En2dqUyyq788yYvyBUpG63WZZg5U64yKjn5FatZ1VGV4c872XpLZ4",
  "key7": "3ULLtvnQ82ifNdZuyvmSzaZYmg7syYiypAw7jVmhY33wBcxPEPKgDYygnsEWr2pZ51WCiwnvzZNtpgaMAfRErJy2",
  "key8": "23CL6HJdoxR6yBk42FdLnskgafCmx9LF2DY4BkJR7ftmEdMycbPcA1ArVzWxPeSVSAkduMVs4NrTvppDnrxKYTxE",
  "key9": "4fL1SbVSM9AbqMcoT6v7JTwUk7XoF59BeP3MGUDSNQ4akKX54j5zWXHcEce6fJxRtM71RRuknaPaDvWL8UTbRNRy",
  "key10": "5U2MJJjywgRCB7ysbnb1kUoELPz3ATuqWcXKpMtbAuKtLPzUr79nBoqmkQTtowgUoF2F6htENZGbZgPoBbD9KeEU",
  "key11": "376RK1ddaxvd2actp1ezbRyGX11oTUCzMmdXN78T2kSgc4KHJTsY58Jnwx36EyDnPTCnN1j4UZGEGaYd4txdeAFf",
  "key12": "2dd6xFqs3B5ePKJG7YaLYEegaH2AgMRR9TPrnb1xtJqvfhWkvkqFQ9LHQS6Tm1VUN2L9miYxB2yx69P9S2vQT9PF",
  "key13": "3VhPSayTAHAvpiZiAyjN4ykNqnXDASxQd44u3ZJT3URtAEHsKbQRw7KvcwycBs7nxJ1Jhep3AKhXDxhkvFLQn95x",
  "key14": "5chBKkD6UTQXW5CAuJgEeMj759F9h9qt5suBQAwtAS5osUBR4orJ5J5fArJhEoW4NA1diTqPhmBeHJNqtw92LHFq",
  "key15": "4dTosiyH7XsTKoiNaJ7AHq7phCExLX7XtQtAUrqdMG4xPSHENMCmaT1AqLXChz46v7nay4gpuSMwmyBTLT6bJWLb",
  "key16": "5jqyyr3tzC4ktJx3aGAEHmDsHciKBpYmRSxSwdvtzYgMAdVui7mMZjWmXnjKGq7kufG4pnLHs5j54UNVgBBjgyRf",
  "key17": "4G67n8YLQCm3rxyV5KLx8ADXT8rKHKmyxauWv66NKPoHo7kC3exbuUYULPpHG5LorCJWS3PLWmcA4E9aAPoj8v1e",
  "key18": "2Sm6Y5MyfUfGdzRjY5iWGDRgrDiCbEUsXaD4CbqA99jyP18RJj1SB77Nf4zDLDQZWXeGRGJv2PmH6QBhBSXB9NSi",
  "key19": "5mjJCEj7mKaBX2jjR8y4e3Gk2GGRF62zHvgR3aZLxHW8vkyZzhbGL5gmaCqPsvzbL3aMUiKPAZRnycK8ntmPGJVj",
  "key20": "26vWTCeBpfXz4a9xqGU99vKcArw56HL4QRXRL6kC2kDmtDenKRoHuiPHSzZsLEvFdPfJWdJ8KzkormQwE5RBAbW4",
  "key21": "VnTn7iNWdEBez7XRLdgaWTxz1YA7fsoWWzWMKABd1jk2ZTyA8Jvu24ysmDQp8DU3q4R4eHsbEaCZoL8rFVW3ixB",
  "key22": "rzRs47Enkb3fSjcxxjUwHjWjcwpQtNL6GvBfcRv5Q2nhmj1hpFgpC5ULgdELnEXtayB6kGeVbtUuJoxg4RF2dv1",
  "key23": "33nDjKWReCsHmSyzjRuXui1mkDQ1pxkzKueefVDjkeFDAqbXWevs89f1fWKCE2JXpH98da2HvgQWrUuo7HyNHm7u",
  "key24": "4oyewAGwVB5BzTtuAkZHzzdwLd5yDQAhgt95zrbHugZk7CyCeNkdrqjnMHzcmWN4kBJx2FHymhar2FH5QuE69akD",
  "key25": "2aKcyg2dfRUHUsvwYxnKDwPZM8ZZXo1WD132Q92kMPRQQMRXVa8TYjnt5SL6tgHkVdHJ6XFojqcoZfHiPmCRz7TG",
  "key26": "23eyXUPAfvE8uyeCZN9vBHNSKcefFgBPK8VCunzu8BSVEW2pVy3oqQvJSHTyJMaHDTMhMwZBbgvGRWRsCnq8RmY8",
  "key27": "4z1YqHtWxaHkr1tN1iWHc87XopaAo2ewGasy3cXaNjTEj6vZMN8eZLBGuftnyGSRzq38d7e5QpzSD8MBq3Yhi6wa",
  "key28": "4PZ27k9BJqMMvFyfyP3fdhVT2PFAkuXWP3Kd6xh8CZMh5zAi6PJrshan6KqfV3g4wzQmK7ZTcs4bJLoUiZoHBsyW",
  "key29": "CX9BaLN3XMsh6Ut4rZ9BuFfVdDUArG7MsDf6Ud5Fic5L6Psx6UWucAqJMaLPEEwRZnBT2RreHYHfcqsmediubHY",
  "key30": "23yy4X1LHoXgoiJ9VtiTsJxkYNANXxcuJjTFzdQ9NAXeBK7QmF6mTxteAaBZXUfhrZfmGnYsMArwxucjpDJJd29P",
  "key31": "39H95TNXtpXqyLmTsTjqMrUvDP36Ax7RewtbeDpawtC5rV4zQ8njQkeTE3fcXquLhUW6AX3U66use29hGbGVaTYi",
  "key32": "csjHc7gQzvSKnkHCFtCyiwcjWoubp5mT49fWmWw43aBQKbe8JeH99e2cf67SZZYZYmZtt1q7zBWynoZj2iiHtE7",
  "key33": "5zBokR46UieGSDWCqoGkmkuhzgtcz3mHDVLWBurieNwnBtmJbYsFLcE3WJdpyWrM5z8fD2zG3BQTNximA7ua2C1E",
  "key34": "4W4iU758iCWp3wfByNYxETTZVBL3gw773pkPz4TF6nCiYRD1x3kBtHLhd35kn1KnWF9J14h2oCD1Ybgs12Q9qd51",
  "key35": "ATGNQnQpCG7fGix4YR2FUswY8UaebmbYse67Enejivi9ybg3azS7V447ZuDTdBWwy3NicMNZP5uJvzRdrbJwtKh",
  "key36": "9YP6og5mUDDgjidYSMboLJZU5cqrgdpfykcaZ7c3toLhvLgVBVfpxzEccqRNMkJmZQCTZSJUGU9f512MpuoYCKW",
  "key37": "eK8eTsH4eZBWRP8UjYdezceRXtXfkCCpvzqk5qWa1HRJmJwwPf3qV4euqoG1oqHBEowWUvcRz99FhFr1iHr15Hw",
  "key38": "4ARqt6n1SGHdEmE2WZak3FbN58QMwgEVNB6T27hVYzmZXHr7ZfkQYdonjZMZREU5LGdzyCRR7HKiWJ9cdKN14Qc4",
  "key39": "3SAL6fmpLyTgMobiDzij6a4J35Vg93E23h8kD52wz9UrVZSHXi2VFbnz5q2jKErnfViRjrGyhco873Ay9cNqFGXj",
  "key40": "3FmJNCTdBrnjZfW6i3SxHvdCVGBJ7Jn8UUpsjkfsJiLzN6c4Z4eCQiCLMMcea9wNXEXYuz8ardQqX83xLRmtzXXQ",
  "key41": "2ctT1NR96TFWk67c8FMD1oVqN8WPy25G3S4rwVPb4SVTwq4wNCSKSFuBnYbbiL4wbiqqHTdBTKxNWktZmfday7hb",
  "key42": "8TWynLfuaamVDRaMEZcB4aimk4sySzqTn5oGpP7fXqmsYaWaYeDUw2pg81GoCa9jzfmxGuyaHWdhd26s4LqSbLy",
  "key43": "2c8N7dmDVh3hqnRRqAc8c8h21ZSiQCGvdyxdqwCYk8aLwD5gCrnDo17R7TyGgDydo5wxevFThWtWoADrVnckkxmY",
  "key44": "4Zg71xcmg8v7Ef8qDyfRZe2EBJpCG3w3K1KY3yH26bWtViLjwAVuhJLGrgj41CXvLNaykihVQMPCsnVnMuguSCev"
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
