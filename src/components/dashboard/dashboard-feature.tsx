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
    "5b6LVKJk7DTm2CMu5LLudY3pyiGhvAoaUqrs8ag1kWTrJnTqKKD1UJoZcCYhacfgpxZAbUBWGrzidADTBPoium3o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rdje2D6hJixC7KypMLVmqLAshuK63ysED41C1gBfGmYZxBPHg4p6vWk6i1cHZcyL2Ek9VB121PwsgEuuBUs1AdF",
  "key1": "2QfG4Qdi77YGvmAnZSJWEnaCXRdQBYYZppme9jKRRoQMSkaLa8AcVfTtnsVwa8D3ExnJF7ohWq2SawL1XZxRDxtw",
  "key2": "4X8HkDFjGQNc9aQyohcEekPz159eb1MoNkifJykNuDfjsKy45Nso18VjNbBYH9FE8x8RG4Azeyv8RRV3JvRduLcM",
  "key3": "2zTH4mfLmnz4ZnGLuNcxzP27cbFtxMbRjNEuCugm5feAJdFe6Uac4HRs83VfFdfH1Dpu9ikU98YKnqnNkWH8wvag",
  "key4": "5kxCNnhrkReEzPXrYwyBj7T42GdVEzRuY6BxP8Reetnwo4F4ZUCAc2gYCmX1tRvHTnZmeNFhqLF1zt56MEpDx9Eg",
  "key5": "ws89iobcqqipArRk2eFnJwtzfcuKuWNPyZMMfzmNZBbFLaZgwfJV6QxpXw3KtChcp7UdmzFnovZ9SHq1ozatkRx",
  "key6": "3EQ3EMCADuMDQBi6LwWBzQXm4d3eAWnXf2mKjBTXK4jWvDN7nnmiY4jb81nfyNRZJTJif3wuzsQERuXdcWkVF93D",
  "key7": "2WZ7GE41dbyZrjYttasnbA7ieevWK73ANtBbHt2kFioV96QSiLg8BGVgPhMAfqdMXz61A8DnRJnCkP1bRa4Q3DjK",
  "key8": "2Ni8poizYMuXUb4w9pnwk2VsVkULY2gb6q5FXrw8NowedRgoCeC8cWrkV3vxdtHB13gwf6dmQGTgiGKU7YCMYv3B",
  "key9": "4fn42oTJh2pf6HZQHpuXiwUjZbuLYcEbuGyMHYCmhyL7PaUopTBXghoJR7U9N817ea4ZDLyWf5s3GHTAbFffDTWo",
  "key10": "3T3URm4PueSm1wAnnrpEV83hR1YcUf8k9tKjN5AWBsL28ri3rmweiPoE7dEf3tASxY75qHqQx1NpvtXqLrhe7y3j",
  "key11": "5swrbdTM89PYSfXD12G3VhKBckaNkwmfvuYKG4oZLMXbt1irMKEzbYyhFe83MLtEEZXz6de3KDcTrR7j3gZ3RQbv",
  "key12": "tQ9d5CZPFgSWLnrwUCmdb7zAwAzLWWiDVj6Q82SEA37U8CUTohopYM8bgR9EYb34uka8fP9zoS827uQrWSz5kum",
  "key13": "5g1oJUdEFBgfATH7WWc7erJpTkLyn9wwPdwkJarMciH4zmkvcFV3fUVJy3BFNBUyLPx5RRaLwsizx7gALE3fmFPF",
  "key14": "3eHRek32pTpGCtsKcBfncewEVP5W4aAbuTJA98pU9z4HPi4yKbpLQKp7WQGZj48udBtLRX28uPqbuRxUZwRNJTpB",
  "key15": "5A9iMmxuPzB9mJ5pwSs8bADAh9izc5PyrwHvQxKmLu7BE5afowuQueevy9oV9srYv7fJyVX6wzYyLA3W7jToXgxu",
  "key16": "JXWbsvDe441622Go8mhJESRUfkHJGdiPQb2h4CMbVPq1LMH2D6ce3X6sDhgvwjkZY3Bt9bM1QihK5EZ6HFM32UN",
  "key17": "4YFx5GmsiivW8fGoJU1ow6Vi6TPx6pG5iqvQgiYqyM6cBtKaC6aLffFubUX1UmaLCyWqvKToTrTSJKLUq1Jbo26s",
  "key18": "4N1U1zJU7fcVEWscKbv4RyCLrj6s9RfA3zsvuoQmFzzN9aj7qiy1WHf46yeV1PmHUVsHUzob8Pr3tu5FbK7fwL6E",
  "key19": "58YTibWRBJg79MEd1puvk6ojuSFQmTkpvWvxf3zcrrSVstJQPArCDupw4Mse91tB21RqZ9U7mR4d5uAnpYdJkdy4",
  "key20": "2gaz2Dw7biNKYFCPgGodE2HxKhn2er8qQovAzESytRntqXJTVBv3c8Mak3YfrB8oeMoDzvwhSsDg67M5GF84jT23",
  "key21": "4JDiGrGtGnSUw1pbK883jeap1f1m19pUJaXAiGaGzLD1z2xBbPsFYSdBKriCVKadfv9RkNvU1WqxCjxnFoH1AECS",
  "key22": "63jFbHdJCLa5FwmYkpDK9qCxtavk5331x8x1eNT9j1NffNJx3s9yZ14rm9HPypyCcqvNXzPS1M8F5wywHruCmYfu",
  "key23": "4cp1W6mjj3q9kxR2WjUEAtRrz6n1vAWLT7oywf4mYT1ozMh38pK8ax7BuNQTjpmYzoTAkgV84fAPu9e5ypfqM6KY",
  "key24": "3f2EBAjUXnNvy8N4Jn2LausFvHyQvhgFaNcmnMuDPNteAXes5dy9nJ9ERtKeyHfx4t9cw1ZW6PvBvAMnuGApbuTy",
  "key25": "3CBL7hHfa5dWvXKT6W882kKeHq7mRr27FkSoiuLHa8gYrKQx4jmAwTyBt98JdgxFhpu5bgr3MF93SWMXBjJ6hPPW",
  "key26": "33jXSSGswwF8hKCufTHkZUoc5vQTREN8qAMiqkDTgmHLbtAWgDhsUNWb4nRnVujEa5Dvrgf4hCe52VWDUE4rqfdx",
  "key27": "1URABpwzm28R7YgPHauADoN4Y82sAQykFU7RCdheQiEiB7xrSbxFy71aPq85DoHf4dxdidkLVp1emseU7pDYtCM",
  "key28": "5a5s64wSTWmVEmfnaPUmBMTmVubrCQtVvqJk4BoaiuscvS2QJWmAAroAgRu4wLZVQ73CbkbRwmPcDBZVjRN9vx5Q"
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
