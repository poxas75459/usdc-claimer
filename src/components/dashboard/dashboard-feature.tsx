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
    "kSqZJDXisyudhwkbBCm9ay1YisZds5QeECk2yrqA18JbYnG9HCs9CuKV4YFPzsEg4DpKR4fYPLgAGt7NipDNGuM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "p2wLmUfi1FGXWicG6tMQ6quVPkFdESvLHwhYLRajMpDrKd9HmgmaWVVgzuJAusMJ89cQbdf6PsCCKegLMEnwUgh",
  "key1": "3o2CUGg6ckyEqtNXF92WputEjoXD9BWJFFt2a3yLSsHV9x3XybstfS9rNPS8dSqrPLishCW5ZsdUP86sPfia29ET",
  "key2": "ZUjDV6sZCa54jhWNMDTSR2iLT52yCrFTJFBWW5vwXer9tdWwhTcrqx4PELmN2itheN4YrjPAPQ2HTdV3iqQafgZ",
  "key3": "63nEBGmQMbGXbLZtZFh8pHyxmgqcD3GPLdX5vnJUiuCoWTT86aaddKjjGjmbBpsR4FWVmXd7EvTcj3CDNjEqRbVv",
  "key4": "3QiHrfpwExNiQnUdhpNw8KdmWpRaAxiQcHHiUCnEuk2i75ZZ5dUqZdFkXpiyuaLRcXk8VMgsDqDgimY3MV1Ac7Rt",
  "key5": "4TgbVGcXyRBoi63FxicJbcdsP6mU6XsHU6g8YVuJG1Zy3AMwUiMw9Yeu8Q5JS7pkFVCc9rsSezo515LVsPFJPPa5",
  "key6": "5FvK9qx8wbXtiW65vr8eNMBtbYY96CBeBGZ4aR2MexCy2nM3ZAiozmSZQmRXpcQPZDKRs2s3yWuRmLUACwjyJGzK",
  "key7": "4f4XA6ZpxQykc2STaFGvEpaPYbh4eoWv6sTRdAGDuuoi7T8othkbbq7sZNCw7pM3XXXC7Wffm3Tq7EJFQS4R6po4",
  "key8": "5KHD1LL6dYXKvNbnqxcHyWcodzKiF1YC8PuVpMZQMqeG7tKB7nEJrkLpJjZwQqPeeM3mEQeYg4Pi7TvFyiaxQcGH",
  "key9": "2dPSkd8LRdYzGVjzRSa6JgEnAtyT75iqmqxKhveasXSFJXpsXPxA8YFWpYrvcKJx8CV8dfS8Rj7Nq1DHED6vqAHz",
  "key10": "Rg2r4uzsM5Ym8qeLuVMGDwiZLGMiqjmDWZminpSNuSwSkhh5fzsVoT8LqsUXHqpHBPDAbecAje2E9xRx9uKwddf",
  "key11": "EWcpAWaMCEd9fkSzqWS3hwWeZ7pDEoL7tiAX3ZCZNxA26NBumQCEes4Yg5kmdfgU6pqtSNWabKRreeS3r2b1fVB",
  "key12": "3MfBnWRnsitzTXJr3LsC8cyJeGp9LNR5ZqofUcD7y6XycNx91adHQvPYVwdxTHyAYP9JF2inoCojrin4HSH5xDyS",
  "key13": "1kPe53WZBWARqrUCLXg5FpYErRqmm4pRoyc31ce2zqhSrQXprQK7gVf9EWPpcPrrYSNGxTZP4tRhSnRgFE9L12E",
  "key14": "5oKGDrCoC1ZTY2h88P8PukmjRdscPHgbfgSEmrbBge48mjhygXX6ZgdPFLWD6SPBwYBHA8nhCdtnYvP3XGocWxfF",
  "key15": "5yyKnUY9VFCSqK6tEkfiDagt3z9RMXuq2KzyXQXgyJJdma3RVriMexb6FB9icusF6xsiALdx6WM9GDuXji4BTG4C",
  "key16": "GXHau5vGVB5exDhHqejDWVvEFHDDycENSG4qvYaPoX5NHjA8yTyJv8EVZJ8gt4fn8ELXoSa7vSTJikD6ZPXiy53",
  "key17": "Nj6AGimx6NVeLu5zkdSgaXAtmJoLLqBW3T1JiuyoLX2pTkAJfYeG3cKjKjgrdkMZdzmTPzASuqD41zEnAGbwDf1",
  "key18": "58jiw9Tz2my6DCdXPP8nYd2jxJjuGV7R42KqFGdUJothnAscHiwFzSrq2RwsFGuxaJBdoSnRR2oC2n3i93tKLNkt",
  "key19": "2Lin5jzcPThtD9xazo2Pmat1eyxznHZGNXHF9AMP9hMp8mMPfwZmt2mFuuSPRRzHxqAcW3eLfnCKzdZXoFgwMv62",
  "key20": "41gT1NbqkXSfv1ecafeY2UwdrVnKksuRpc8vG52cXvGHRkPtV5HLpYVzzDdokfcW9TXdonnYWS5WthFnmzCMxXsE",
  "key21": "zAApjJfpCnnFYScaSKkahy48G5ujLkFEubWsFDEFbVD7Ljh1yb24unFpZy4DnCfrjLohs8r6ArSbEZNCrY7j7ya",
  "key22": "JjU9vUuo35gMKuurQBAT8fzGDNprgnZ233M3wrtzqwUMgmJQrv4uhtoeySNLZQuDHsLmbymsS4qiVtrq4swn1ag",
  "key23": "4ViUkpKNdncux28HC9fFTkrdz4F6GKSd8Eb4k9DC72jsxsb2LwppEUB2t8AKEhmBR36ti5tCndWPsb412qSGUvZw",
  "key24": "NyxU9ZLrUGQrBQZj1HW6mYUmjikmP99xR2ZrzkTmcC4njCaSzPdY1dGHP74Nob6GNhvB338Dfo5yyGkd7WMHCd2",
  "key25": "5vCKoKY34LuJZ7KJEy9T8UkgJsWLw3Fi5nfXf13PJmfjf7r3pk16HbCpRWAdxg6FzMhVpmYXTpD4eLLPm57Jhkes",
  "key26": "47qhgZZNYkb7Ut96Jv4ySUgggPbPrXuo8QjzDBqaD9PZxs3sPqy8A5NioyydrihxFgxzqgq8rHb6aMb8Rf9P7mNF",
  "key27": "3Ja6dnPUGy8CuZiHbY229sKM87EcET3o6oERWnnBvH7XB1t24qh34b7aEZxY1AJrxnQBZdLyi84oeECvWUgcWgfQ",
  "key28": "2KL4j3YC5cvQENFtugP3daY8fqpHgJLdwiQktAwQJqLkM9KBjPwQP9vpehXikJ2rPfE3HjjsMVAvMbHmS1hqQFNR",
  "key29": "5fFoEfzog7utdHZXZLT5kMh5MjgQSCv3ieBfkAoGoK8WXNu5echsADsWdgWwWk7jJoiyXnuBjyipYYZ8ARE3EjYP",
  "key30": "3vhDHgCJRH1DTxkEARJ9b1EWXgAWSa3DQsY1vTRsbo7oAPuqqV4ptzirW7CSyfVYy6sDUVvgUYdFpU4iHXDTJFPw",
  "key31": "4DMfRWRTNyN4oxJr5GYMPP8ULxs3t36ynfBkDQ3NDnvbiJiaXNvHeRD1XwWj3CBZQVS4iwzgwwEcDnEkQiNGjgMF",
  "key32": "3qmG5KsPqxRaUuWUSMKD9w3AtbvkqPnwQjy6UfnDdsaTuKbzKnvfcCedwVRuoJpMPMSnqkgbhqKDvVo7zaJgUTse",
  "key33": "SAuSW3JjAtf4SRMqdsqLfqVjnw14y6CoHr4B8xZpWxCdPWWjhfpQsJdBBUgUFhFXJ5RwUQuA3p3J6RqyqtFYzSY",
  "key34": "2GjgE1zjghhqXobxRZJdMrgm4xLVWkymAcKdfDvPwdTY9MizBvEBTfjnowFPrxNsbCzsoFaMyatXEak13RaRSx4H",
  "key35": "5Xg17wzrhWVyKnbbCvs6EmBZzoyeBxPYbjjQiv9bgsB6GFpF9MvED9FUVJi8Gttf2mgZWFNNkxXR6WWaq4wLUtQq",
  "key36": "4XAWM3n3EfrNeJkAzGz4c4T598Xot3eyrJ6m3rqGqBUaF6WbGLJMVifDqm2zxZw7j7U1uPjktVZXVtYPb27Ev7Yw",
  "key37": "2YCQb1MyKs66sg2vdD9AQ3CAGVHucQJyUsEqMbUXiFTM7sAQsYrAcyLnMkhoUk1rjtK4RQWFErCULGGBvSoax2ZW",
  "key38": "5FsubB5YZgzV6kvNkR87Gx6ipKtQNkSfDSJWUgHq5Tf84D5Y5qphja47BnfbQHYByksjVXDGnjyzj7QuP4JLx7Fn",
  "key39": "zWHH9aHwg1iScKeegvKJg2BSFtLFV2TDHxvBY2S1e3hM7AyzAJhMR9hF5n1VSLBGvjrYEmBVNnAerVmSukJFL2N",
  "key40": "3ET3XQSpzGApQaymrj7RYkHRrnrE5ZWM8PpHvKvLcZBYtNkf81gvcHocKJGpVVAQxvPCK3RYBokbBTKnQPNfSiiP",
  "key41": "5b24Xk78mhkHZCBGkbmYfTeEiDx7CRWzUWNYWhKhg5SYZs3RKeAd6ZPHskRDojmDY5uYqzHzEf7mZdNTjvUBWyLN",
  "key42": "AoCLR67NfXGvhRziLoBcMNEND6zkbU37gSVJaU2pvHkd3yhQyMBYFNACBKqqKvY9xJ5hwKCymdxNdzGC53suVaS",
  "key43": "4wsdQNF2J4kngjhMob41ibM7ibGj9UonALEFiGE69UqqhHbpYQ7SWtdETAatT1kdKZNpywYnYWZR6e6HUsk66bZt",
  "key44": "4nLcurLByeJ2fruAmqYJDtLo7H88VwaouhRyfewUWBfDooCXq3L193gyuFeDayoe1i1z9R7rU4D4vVJhw9MsJ8Ut",
  "key45": "4CEJoFpfSULA9ud2grU2RmDpJKc9h9nZq54QM9UfxU4n9Qm4usx9C8YVd3FTy2qVJXP13XepikvRAhfKt9uPGK1z"
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
