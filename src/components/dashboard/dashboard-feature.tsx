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
    "5THBADjTvCpj2XX96Cd2Z7FxrC92BVChz2V6sGzSA7cr7GvaN9Ekx9u1yCA7W8kqxguh8L7g9M7ShJFH5U3XGfKq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xcUW64dpeoLMhYCLiH6d3d3UYBVwKjDtQpuV2guT3bMLoV7AD9hFiJajiazN7ifjabVDRjhNWXx79uZdLDiDqR4",
  "key1": "2EfJ8uF7afAwi3HeTH4ATWeZoEztqMsPcmwWNXFtiqtJXbnMubZgv9Hj7vqc4Nykb2MMDX1qHaSLSFpSTFKf5Eas",
  "key2": "2eNq2UPnFLgB7iCiUthLmoUURtS6oAhaJDCntuUtXCGePKRo2AjsnbvDm8oSSuBUEMUtDztEcufHAf1caaP72ERT",
  "key3": "2miC8z6P7XTczF253ZNB9sYDwY8U9CgocVV3Eu5p257phWSJRSmP5ued1A6VEun2WnWw19yBoYckMSnHd4jYJ8bb",
  "key4": "51sZG9p7nSaf7eTMVooVrkaRa8grYTmAgjJKQVXG13nV5SjMAFdhHzEQ5vkEE6i3EY8w834YgySNu5oQNpDGz5Cp",
  "key5": "5bruFaGGarur5vQS1PdDvtknjex9H3d2DUAU6j1kaknbDqVvxZvtHnkPLuA2b7WJ47U9Y8nxSFKE6VpFtxAayszX",
  "key6": "dVGRiiRMGbBJ7NprYFovNUpGf7Aovvqpq6MbMZuMhUeA9QeJ7wojqHwTtRU8wEANUooFV7ddBHJuCB2JjabRwN4",
  "key7": "3bVkAKHU79dKLYB6W684uDnDN9ts6i4sTkP3tjdYgSmWXBTLpBAvudUouuxHK5MnP3BBKob8gWVPwd7W7DGFHQ4W",
  "key8": "22etLuTjGWJbQL8tttKwarXys7j2YD6TSTm2pNfGf9ZgmkQucYoFpCxXjTqb4SLQxebhLzecMXpJCArVGf24mJpy",
  "key9": "5NzxX9kXMgD9FxDmQaS3F9YbypnKrVmYRYBZJFwX8bXcH2WcBZpVFcPoifvyPeptZsL1qXoac5h4gRmpq5QW9qok",
  "key10": "22cTF18xobGjfT69N9AqhDJ8cLaXhvr4DwNDpsMh2jaqzovBwpgTga4eT9QXp5LYVmSYAsNZjo82nManZqdF594i",
  "key11": "25k49G5Gesr1yPD9AKD2XGkf1i8s1T9L7jrgcD9Qv2JHvknGUWPFVpuSS2GPqB4DtkMbNMdXXPtRaoAgbDNSWuUM",
  "key12": "5sBCTSdSg8icCA9ab77DHxRuv6DBNF7wy1eMgCst2DP1pqmUA7htCBn9Y8CKEgZSt131ZAxUQqHNy1N3PX5mHqqw",
  "key13": "3jgyUCFbBBEswrsB8AmXsfvpJ9LT8VsT7z5CzpZzbpQcGwem7dxuXLUbFzrj6fu5oncjHux2ruwnbpq7UAr6Yo1D",
  "key14": "5XfMHjFV8YwzwgqMEhmNR8heLwdPACpkboGWTyY4XvdXvgTfqBmx313ajiLwsvUWnNQFYxNKNgZSZj9oE1y1mQHi",
  "key15": "4nZ64fLRLeNZFWt8HW8WSDUiLUG7n7ZnhxiiHZWE3TVvW47THUYXje7N5KNQnX7TVcwbaFw2fYUXVym7aLdoqwht",
  "key16": "4ySLJVsakeSdQr7j9TGZS77EsjnLpmbbZWBgNTRsCVdk3JpagjEtEwuo2QdL7G7tRpkZpaWGb9dpiLwXUrdBH9t9",
  "key17": "33ew46LE9iiqT9gaSkj9wjwn1df1WYCaM4NVG84WoLVgztPHsERTguSyuACvV3Wu86GufbyWQhBM5LVcuDUQmvUY",
  "key18": "4K3JgRSgMGAypUBKdQX8zCAK3mJVEFi8NwAS6JUUkvjc81WYB9paU8FmGvvMZi9aqYfBobwL9DGiZgs5NNWJ8985",
  "key19": "2TwHUWLacicHwSMB1YCQbxjY5RtDQbHugLssE8VFEz24rzTEqn2Na21rbsvViGwk9ZbnV55zyNdbx5U14Ff7vbek",
  "key20": "2efwGYVeuwtL8TwueCHwgKyLdmweGVGrxhy3mmcskw8N3uSmwg6AZndZ4LesrDT9SN7uGnzq52FRgZzic6beX8RS",
  "key21": "5y6iufa3YBtKcZuNinRgdf1B3KmdHv8PfTE8qT6xF6hoVSW2tft2FKcmDDGCQZB4NLsu66HQy5NYczd6TUzLNZpt",
  "key22": "SLbM9M84ZSzRGom3dq2Q7ntCmgyFB34iY2NjWBra1Q1ZHpZTQVp9zwujKXPvfhRgTzKr94TEaWzoTYTBnapTpKz",
  "key23": "zM37aGuQffKGhBtairWHUpTKCVKakGe5zWZaCqmPthEiJRYxBsP2Zt6MsceLKYFTak97xMYvJ2rw2ndJjHUqt6g",
  "key24": "2LrDsN58xghSRfz1n1n7JjbCj4iMnVQNcMAWaH5fZ4QwodKH6tMovGum91mJ5JXUVYm6j5d1TowjQ6rT4h3fW7XA",
  "key25": "TsdSQdkqLqzKF6ATMtE2KC5MZvBBz44qd9ooRq5f2s3oqTnVwdz2bLzUnfNowyTk2mV8QXjtW8ZoUgxQCamPHoQ",
  "key26": "5bwd97wDEnWmtYN8rGZYCRZnmWZ2uU18CW7VetpbRYfdsoH7qZrrAqbfFb1VVw7JbHroPVqg32qGHt7WZRv4Ziwf",
  "key27": "41ijz13aahFxKcA4gqKFvJQBa6CPp6vjML1h6CLAi3gSoapvaA1GnJJKAfD4Zio6ZtDD7GYEz54rpye7dfeNx6y1",
  "key28": "2KoWjRF69G54qMQ5XeCku4Kzjpuvms9EGv8qxAE9FsTAKWAFPKT7i8Px4ZpfcmEiQa7o8wPYqW9DBofVoEV2K7c5",
  "key29": "4JBK3NEjKJpy4kMrVcSHa9ZehFvGRz6iCKd6Cn1dJPGiRF24Gqf8h1h3zP1nNeR3AcrNNvFqVm17VqmCJNW9NiCE",
  "key30": "5tBfE8GpipMYRqmQWybK5NgUL3sDFFLToMUvEzhRjaQ7dGGdzqRfR7DA9ZcujbTnLcJneQgVei52Ez6VzoBKN8BH",
  "key31": "4JW6Qcmq873daPmdmYjc2dLWuNZeNpEUvWus4jcU5CFaWx2HmGXPmj6DzGquUPVGXfsqKQkFde4i429vMnnEsTVM",
  "key32": "4ErXFeCgwetw5a4cycTvApqw3fcUy7wGnXbinpZ6m85Btpidw8Pn1EvspPmAZiJQXJvvM343ndmUs7D4WoUST6kt",
  "key33": "oQwF88iREoczKeNAEQov1LndXBUrcgctTsumgAMMwabXLAFpUohJkoxFZ1XNv6JhPQHXFybPDU87PdnFRt4psc8",
  "key34": "6NDxmLpgh3QP4DdqASi8PMeZyKDYZFsdNQ6a6CLPFESBNL4PLCvFvnfuXeKYtEPpxXus1e4ovc79GHXnK9jWgag",
  "key35": "3pHZx2yRPHQ19vwTo96jWH4q1YR6SWta21uLduKyPrAWrk3simpQ9Gq75XpAAzB91KzLqssuuz2DxQmpFNm4E1kX",
  "key36": "5WxvdhZE8dD3s3BbctJL494mgDY2TRzsLQmwgLzJWLtgmT1grPLTN4GWi2H7FYjUWQEmAPUvW3p3BfMzZQ56Dt3d",
  "key37": "4w2YsnxcscxvmqfNpfC5MUkCPiC3nXZAHTrWARgX92rBP8JrbfD44G7fwdnmNtGXixeLNYvLzqyFSptx4rbRsERK",
  "key38": "3oG9mKN8XaEV2cpxBcdvkUSTigeYQczYDT8kW3KyDeupjHjWCMzzmQ8pZSzVX5WaK965zJZiia6QQrTUE7huorND",
  "key39": "4bNVbgTUcZa8re8pgy93fTbJkfAETMqha8TGuqzzrVfNBhKSUPLnPNtCAatUdP4YXTRaT3yYUspQgTok9huaB7Q7",
  "key40": "kFCteWC3mfCz5Bzo6KCfZ5Jxm37edAuEZxU591aB7JC8ph4vKiBTXiytXSdgmFnLXgipMGPE2tW7SFLc51MrswT",
  "key41": "5cJKL9SJ9autDgi6LAYvcBKjHLX1umqkLdkjiU5X4E7i88KTu2LzR74UxyVhFyE1B4be3VPeVd7HT212F16TwaKw"
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
