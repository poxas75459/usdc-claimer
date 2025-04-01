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
    "4QRPxmE6AZNTghZeDGpBAhSejzcimD3zDPv28FGotCjkNAFjAvh1GnUitk5FqS1EK7GkeyXHHQ6GkNW4Bf4PvZh4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SzwV68SrG1Kry6gwJ184vGjFpD5Ev6kNQocRR9BrbXDAh2EFjU1Ku8emKnXt8f2F1T8FQmFwMwR3GJkGn3RCo6z",
  "key1": "46pMm7EpUW5RbUcBVv3urs4ETGDf5RT3mW2QKSZB4LLgTzdauF1MQdoKzMscCGGC2xTzD3DzF24C79CxwUVLQaHB",
  "key2": "57AxZFtu4EKnDZcQmRTm8ZjFDKeA68WKvx6WHAxkSdksjqU9YBXDPTjdQox66W7fuCKuwJK1s6e3r5B3hhqghFcy",
  "key3": "75mj5dDLFT7b2Xn3q8xzNqW3q8A1MqZUVfkXWJ5XVb3vuWWuKQqH8tSon4CJ5fLFPVYfB95rWeYhpAqjCuh5nw2",
  "key4": "Lw9HRX96CHDi6iPLPXSpVstwnsPtp3t6bG8sLET36EVyLYRizcVLSCVtozpdgJ16HVPjBePKrAzXKnEgojzgVSk",
  "key5": "uxf7RAujMLbFjg5pYLYW7ZBLVdqDdkGxVNpVCkuBQni6dzQ5QGNqZuVmRSzTmq2e7g9aoWooxY1cEzG8a51T3hW",
  "key6": "23Af2QcPTvGChSbbbCAg8vDQVbXYm1KsjepyPbQ2yzqTrqPmf18GMCzbDX3ew6YRcupbm2wVFgRtwUZw1cZRkEi4",
  "key7": "5YzSwhpNjDHMzpx69uffjV5d5ufThbpgZb7wQimvSmPEBEYgeQ87ZzRefXAbGnc2Hia8YZgseNDP3ECjDi1fjdAQ",
  "key8": "SLz53NRnyWLRnvdcsxC6pqMEpwbTMFco3Jfmd2SytdLZ1kwwQbryCVzsy4PzVM6eonPhyMVkVbypdA88aNZZmRv",
  "key9": "RLhLwb8qqfDoqyd1bXs2arqgGEA8wGeTxVZzGWibzSpGCVdYHjsbsUTCxc931Y6hHyeRkRQPvHqiL5fSSU9yiin",
  "key10": "jkNXaJzkBdTsrSDr7izfgt5YCsouGicDqvpabSFcZCnCiSAPkr8R2AcEdvroKT1tndLdxgr8iz85w3LMYJErNsG",
  "key11": "4ow9CNyhHEKPFJnteE6aXNVJaYDKhAhhp6GwCWPeGnFa7sciif5o8YnTWWL4FG3CqnbusBmofCyqNRgaDdEzawop",
  "key12": "3TyvN4C32b7TV4GeDwx9wZSTusbHb9eUeVKMs2YDwdLrC1y6WvVbrZRyra4R6hPU1LWRYseQkhChZd45ogWPhy4Y",
  "key13": "4kVwmBBUAc6LutdxQtUSSFiRgXk9r39g8rXPicnodKTJzooGaeQsx4gUe67Z97gBmDbMTGyxmPF2mptfZ7bLn2GS",
  "key14": "4f7URcQ3oKp456sr7LUVWUWWE6zmpRX7KmeEG6EmhQkpaLUyiYpofKPWGKzJcG28s1eAJ8WmezwJRVjUJJcQtYmb",
  "key15": "5CDqdAkX5MoTDPdJnen2EiqG3FPUmAzZyodcFRuE1u1gBwxk6dpABPYKCNHGKZsbNgAmBoPxgPQb4aoeCiyHiFRi",
  "key16": "5Kh5g6G6Rb3VfGZdNFPr3byJJtiKWGUs3duTes3D7T5b5wquvjaRJyEsR4S67HUCHs5RzzSZ2qyvWeGTqZScpeEA",
  "key17": "5Updj57MEeUvkccDLASCpFcSPUpQjPboHCsGtagfFWN4DtGUgFqk7wAfcsrw3DBMkp2VDnpQiqxqEZQHYZXwPCXK",
  "key18": "tZHkUH4jKG4Y6SoU2mq4Z3s67PqRes5Vaw6rkBrKTii9muoZTggkegn7D22EYUCz7EZmVAVy4UEYNa1YqSHDNGp",
  "key19": "37YB2JqEPCT3Tar8uJUxMUiN9xYPVDRipCXK7rTCVMQRpLhWFkJPySXb87VWHxtBDMTJN363dKH4kDcvtcRanVSo",
  "key20": "43k5xLW7fSyJtx7E11CGnJbcwg78z943AfNWfX2qA5rLoaosJJSUXfWx8LfLyx6wxVbJ7sxPKxQZUAy12QWW8NSx",
  "key21": "3BP3JTLRJ1A2JmDM8WqCB8yAfY9jhehZZ8GFufjaNMGTFWYvYJ76iJ9ZXD6qh61XubCCquAceFGwHwrGX5qBinFA",
  "key22": "3dNQeukEnKtZqfyB5iqiH7TQrzosxc3wkGwYNBkbYCFXBppbCQvH2TGJvHrew7PU8La9btke3JXRSdjR4WeDUEoG",
  "key23": "3vLKriwsJWCuNod4J8Y7zH6KHMWDdn2iqud3HEEJucv9wgh9Y4SaLdSm1ZXxZjJU8scer1xDHy7cs39jigHjnLBw",
  "key24": "yayi5phD77auDzg5WjMfpb3wSv4QcRkCnuf6Ayc6eDvEPgmhKDgWfYuFy7XnQEqinU3pJqga6ntjnDpKTA5GYx8",
  "key25": "2w426KsDesnLu9JtxDi7DhvVNvcaKT2aLVRhVeWH9mK3yUHbpiqgm1ar2vofUME1Y1yPK5pBPXe4EsSqVNRSGrH9",
  "key26": "3awcKLLKi3xLzKH4Ms6QfWMGXMrCDMrKQgU7MZkoQ4R15ui7gWbQZSGTbR16JGFsWypckj9hK7ATLX7P81dPJCJt",
  "key27": "25PzYqATxm9ZjPDTQD8HFmuHF2FGMtDW11DTKEPtfi57s8U1LuuvA8it78VSAhxoJvphRRUPbfuuvp3nY7NQB9pD",
  "key28": "57sTTA9QyUSqHwkHPyVGq4zFEZi19T6wF61XitmXNmmVDuWhVG2E8v6QsmepW18WJZcYNLjSvnSL1JmB4TiaVD3H",
  "key29": "2ySFak1Mxdx4chaAzJCiZYrhzgi68GFDPsGcp9zTPv7QKFH7cUU15s29VYNtycba3RznD6faGswRuxLM6vyFZhwz",
  "key30": "5GZBs87izDiEhQ4xTD4eeBFWoMHk7ygQJD9RQDaHZz6y4oCWo1fJnLNLZqQq2btcuontTeDitVL3YGp9XyMd4iYr",
  "key31": "2UN8CgpJtjN2FM2D3bTPXHYLZiTvFToLExE7QsxwMTKg1iMcvR4Hwk7J9HRcCjxipVkd6HEPjn3iY6rPMn6Muozo",
  "key32": "2fDfwk1Nihgnej4ygJDzR2wqn8b4wHe5uSy7XEBtqU6hfVJuhif7QmgZh661QgG7stx1dhL9ium7RCGpWH8K7QQ4",
  "key33": "5qhvgRFjTe1uibiv5TXA9wxdTqihWQdj15ipMtxhRVhtPrJZcfnf5bXwBUbAjryuTTM5CwUrqP2iLSmtcxGP25jr",
  "key34": "2eSEF9sp5UQD4VqF9HtHMTbexMR58rTsHerZ3LdgwnxGhtkKGwsLK7ABva1MqgTq1Q7nebNFea62gqXfzUKccNGv",
  "key35": "4oAmiB2noveQTtvo7F8Jt9Sbz3FgUb4SLnhqhDtGKq1uRwtoi9DAYZvoNFxZpaG9PTahQj4tukajejQdohYRZqfD",
  "key36": "CuWeWbpuYESmbod8BNRrRFAZWtLMwxDJNiydH3y4PBdY8Vbki8BWAmbvEBxXtqCs1QHV71LFDM2EDdxrAGJTngE",
  "key37": "4UcE5iksfuP9e99u6wBiH3v4nrqEoZZJ2pQn2NvUbUKSycCKGdfk54hRJLBzpRhFC9VUQS5wA5XGd2ttRzNRKovU"
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
