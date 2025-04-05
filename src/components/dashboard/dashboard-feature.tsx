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
    "3NJqVpxyh364rJyUEU5YsqMnKE5MFEB7ptGzRsNx4sebi35KSCL7kF2nUi3DraJStsph6nNSyK5P3oZcL9TqtPJF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dyjBzLvLBAtoRXC4XMNrt37u6ECTWYpD1myoLRqs8XPhqz1Yy4DZbpGowwNmmu7sSfRQWSVsg8B4uDMTC76UMbF",
  "key1": "2JdY1VV3vpcZCGMqBxWtcE1Dy1uewzxYCwvCtioBbim6zPSBA9E96Wwbux3vtq4MfC9EteQog8y17DBFmPdasfLd",
  "key2": "4SXc9A7usZaWcyF8bh5LXkLKQQNxL3dwzCD5apLwJ4DXD3cAC3eMqoaoDwTqpyYoS7y5nW4unxDJTPdZKkkoRQwx",
  "key3": "5XRfFv3NrHPtgbdZkiVza96VHtzyXFWmVnSA3GHmkAGm6gUru6QK4c9UeKcQrTQYWTjs5qDehiU4od89KxYNfWb2",
  "key4": "4CLnnHeS7vjbkLJcdtPNTcACcEpZTV2h7HGQqoKNb24u7Nf6smGpC1CXPbTtAVSzjFCMCKvcUpDKWePUPgk3g87g",
  "key5": "5tmVR6HZ7ST7Pik2Tx4PQHx4zmUWBq7Qmh7GdJC139B92AG8FFtH82JrCf72jA4294nmhSSXwed9XLZzDgZQvHqk",
  "key6": "5AbGfKxj6xhmBSsCosmpL9JPp1Gq6UfFAzF7P7fedGVyWKyqgPweh53pJfLhndV9DFWHKskmGAeg6HgNBbB1TebG",
  "key7": "oW7upv3bExyBgFhmtf8isVLmqqzNcdcJPiSdw9gJGaveyuTaEUJTJKRPdN2kZ4YGpQLg8maapurHGkQckTES49Z",
  "key8": "sEwfPoF81uTdmAPbm1x2dnWg9J8dyNZjJVxiyBQRS3DEnrbG5dYRRYgKsuKoFEyrXvaK9hdBCJGUDkTtLMfxXZP",
  "key9": "4eP8ErQsq288y5em94U9xSBqcp7Ftjyxbjh7mEMU7WiggwB1wv74nTghr1tTcMv3gs6J7bpAJUYBSJJ8co82izFG",
  "key10": "2Q7Sr4tro8cnDhYEpxK8GXA1dqTJJCr2dN8enWWFhSzD5W3btTo4XtY3Z3a7sVXxkpxiCmys66TqCZbuW9na1EmC",
  "key11": "2gGmBrCNMtog6Kqtank1Z9meiExKDYrG1U943DZBZRnSZmLzbox1ZEqBai99JnnPQ8GegxvHBPzLifX6gro1kwfL",
  "key12": "4FHRyVVCNCJ1sSKZPPqEDtogyApU25YjzwStdYzAgdEU9mQAPaU3n8frPBygvRMDoSQqmLvstVTnSpydK4e7UUq4",
  "key13": "DeFirQ68SLhunmHMfvE25gBr9mgnioY73nWAS9fuY9n41jfVhaW9LxKpGQsp8MY1DwB1wZBnPk76TroC2WwUL2w",
  "key14": "2nnUu8EZQjxajhnfdhAzJQWor1cfExVbvLkc8V5rMJ9EgQS81hPn8sCWzYB1NJm4mFBfu1CoTJHC9bNkGtgFCE1B",
  "key15": "5zvm2ykEUUSYeGsiDw6J374oxcDmyREcxjo9aTUiGz5DgQ2SRkv2MDEsjRihoWTsX4nnd6GwVspZBbXMF6n7BXh3",
  "key16": "2GLTRTnmcS4pSstoXeJBW3mmj2iTDRG6oFvxZ4ZuL4i1Y9rDDBYcp4mtDjLVyWkaQtWYiJWDRrowT1XdtgTjJiwF",
  "key17": "Jf8bKPD7UqfTnBWELBjR5QScMZiY6BwkuQh2gAMh9aBPQfiaPmBzvnK2ewjDhvH29BCjJaFddcJdB7eCHkv3TYo",
  "key18": "5rdAWiS5nBSo7SnQGc1UCq1GqCDchPTU4cjMERHn7MwWDPYcfotjKnYcGzu6K3NNRmJme3SUdXK6km472ZhoGkXV",
  "key19": "28iV1LUpqi2B3q6yNZnHff86mLnQKxEJKkZGxqW1NXsrriHmpAv44tG26xAkhX9qJJwfBQrndgCjtqHovG5eNyMV",
  "key20": "5ngCobTpGC156yqd6nQ9zKXJbWb7K9pbcK6DSHyn9TxUWnNXs5P27bdekChgv8ADmcTaLKmuZ7VaF6MCAGyMGLM2",
  "key21": "27nyvR8329Ugtoe1KJCwYerp3Q286Qia8W2rqRPeFwsxk1R5cwdNpV8LAjpHHgD3odmMiNm7RwPvXyVAKGFjdVRD",
  "key22": "2QxDBM9rHpLtzDW5mXJXBDsk2NTHKy3BmvoAHLaNSYTmNcXgap5XtMqv2U4xzV2x1UUVBBXbf2JFvYjYKQfUkcAm",
  "key23": "3WCSUB3uuShtLjSZ4Yzh88fYP4v5GNetoJVTrS7F7FaxwbvNMZxSNtom6u3tUCGHwV2UnyT4KfTeuGEh2qaXEAXK",
  "key24": "3qxszqPY3nWft5RJEUerqwgz354LCEXQKDauBbaHLdyZL4kGoxDLR4ki9nbe5KeM5Fbd6D7bgNEMpP6ApxmDddgn",
  "key25": "5DFdfYvUCGPBMQJaJipGZVPg51LhQbRvBCga1DPNZnRnBKoqF5xBvCMDXkm4wSLEyENMoG4nwB6bj81ujeVvwnw1",
  "key26": "5BRaThXHNggy5V7DiG3tz88vozECxyg1VcCmttVM55b4boykPwfmFy93CxUxZcDxHf4GqQj5Wc69b344qkGTpNuB",
  "key27": "6VA9qNHzoo7HrJgjU8rvTSx8MGuhq1UXkVtAiAuWuqRsN4BUrVCGQFRf3RC1cwNyR5eW3f8cgNXv7gvLxQPwtb3",
  "key28": "4JUkSQ5dzND51NB8SGrEGsUdj1uZ8F2EfXKF6WRPoDLyHYnoVxZ5A3q9SVMXi8vDm2nXK673PXZbrjC4EZvVCQ83",
  "key29": "41U7w3Bvw54nAP7FgqP85zd84oyehSWkUi4mfvMUWRRk6Vr6GdGf7DUgeZhqyAEErf39sriudSwQdVHeYLW6GVg5",
  "key30": "2AuEc1xGShWBkfzdfMueHbvjykmAGjtu5jveBA8HcDBs8zGnp1vjZadG9uXRc2TvEH4c5NTbtCo1ueuAhwM9rdLw",
  "key31": "5qh57bAvzKwKZwbxe7VNWLNkX9P6DsorpTNV5ncW7nDXP1w2WwNadUrDaPBaDAnG3syFTiCreagfMUCkdGutMAVy",
  "key32": "4jpomYKd8PSrBGuJN3juRT1kUJ6BDdtfYjdU41WjTNfyNsDQi1TXN7ttdwa6TjC3wRXVfGaWQgBWyw5m3YGDPmrk",
  "key33": "4f5o7GxXdvpMDmyarMsp8j7sXTvUJMTik6XdQe5hHMbZqPUQ7s4pfSAV9pDXavbYqBPUiiBfx2cghZ3tfP42qP1f",
  "key34": "2dV9XbjRRtMTGNhaiqrSedqwjaDcJ7gPCjmptst4aCZ6ypmwUPt9Ud7W8fpcX7Qikoa5bEBLkK5y1W2X2LRUfxKb",
  "key35": "3F9EEePBXBmmdPXvqtmGiesDndayy113SSpF5X8NdD3k1kAAkb4ECojxePV4VPqAhykrTfNZyG2uKQrs9YJjPWn4"
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
