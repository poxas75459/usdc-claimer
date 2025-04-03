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
    "3thGxN6By7HvKtXDe2SsHeJX2GeGdRoMYVzMpQndSWRgCDm2biHkttFPXLLBwhvFoyup3izzUXXFpHH7JVciddX5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gSAPzRMjX3AFuj8DQ3tY3DmFcURLSzU8zjfFa9o6QtsEJin3sR6yWSVzR6pxrjNFRcahJ4yp7mv7JWNXAqDzzis",
  "key1": "5dg4mcqFcrAnPcgdzudq8QVpAPzYxxHDmycX81fbJxQby9gfqzkk2kNiRnvpabHvAseLoS1f1w5xUFgo5GR1v4J3",
  "key2": "3hMsTfTGhNEaj1Efz5NR9U6rZYVJetGm7GNostuQdrEBRAResyAVPyuipzb2T1Lbz1nkWtfcY13iKey64bJLsV47",
  "key3": "4vwE4NRjDxWQHkyrLJDZ1gXBPZb7HX6oRo2eHCLbidSaMZcByZgxvs6goo4AmRu2Bhcj3PcUVvcQ5XHBtbTSmMUv",
  "key4": "5u6RWVxZHRp1B28FompvXn1pJKixcS7vrLSNmg2559Cmdu6NiwSTV3KMpNJYV2jFWriMMTGBABLkbNM7zEe9atJT",
  "key5": "4H2Yx4LhRxyqJnbUK6xHFApQBBU6fY34XdHjK29xauH1cBpi8ZjzpdwS1YJgVhKS3VV4Fc2iWqyxrAS5W1RaSTPV",
  "key6": "Ygga2P8SQvZBffXxN5dWrDvujZnLWovWxdujm3tVcrvmhLqWcz341QSVmpzMM1hcd9K287CxEXmFfMsYsafo4P4",
  "key7": "vTn6CdJHYGqy1Usorna8sahEd1ifyo9uHrsQSk3gRWDdNtWNYjoJSYjcjkxtAJSHgzA9pEUgm15fxkUSE6ViSJN",
  "key8": "5s9c5Lmi9rmH3zixjwxqvnFYWob4fMwirYd7S5v4YY3zWYEMn5Wf5Ezsn5qair8nUKvnDd46ZpWiTAJVKeKe3zFa",
  "key9": "3or9FcBq6tFtbZjDoTJRxPM3Fjngw9HfGtgpAH8Y1mKuxTtKaV2dby4av9isjxCfD8N4qpjWcCBRc9gEV9cbqYg9",
  "key10": "5JbmhoHcH4zbBqaT5obP3VrWLkydEE1GbkWYpPDqt6kn27xNUFLB7Ffa8RNL4CCncV8Cb2oQVmxux7GTeDJEERqo",
  "key11": "2CWPV19a6qcRDwgngoxe2tYQmNTLqWuZK2p1JN2q6YjUxF9xqNdNVBe6SKsQ4rC9Und85pAGii4sjMhQQzTosTpf",
  "key12": "28c7f31jtr55w4WtE4e4oNRoPHNs6xzDiTwYxpnaEX7weeiSYunGKbqufa6Fe3npg13cWJKspVbdKHi9d7ZCQDgM",
  "key13": "Ti88KakVjG3h45DLz1oZzQQcX785JWJBniqRToHgoQBdTnrY1TAGAHgZUUmTrw4QTmUWUYnDX5gPkG92mv6SvzR",
  "key14": "2GcfafDCHR5BLzCkUtvmj9t6YfXr8a1hCQXDCd4He9KKtMNKA3vLgWBxaoBeHojDAS2zAuJ8EWNDksBBBmfzavHX",
  "key15": "3qRCFUKyFR1dX6e5kUCosYVyWznNeFe3QkQrdjw2zuEa32qYhpmvSUKznYPqfRCRd5qTGU5xTaVH9or6AYtXv1yX",
  "key16": "2yhVK7wF7G1YfHRpWwEvYdLj9WG8eavYbfPZSaj7xiMipHEL5CmnvdTLTyuzh5LPnQXLP5ydGAD5rz5Z1BQpnqDp",
  "key17": "5ABwfMfz5ixh13EyfaHrUntJqjnBatB4HfkxNPdFnNDERFzjJdkmrPfTSF4pPhZGSt5ytKFf25QVfnExpc3C3zYN",
  "key18": "5e98tnkZQLhAWwE4bk2C7nQ9BpYTygQYpZWgcHsft8oJsTyb2P3is71BxwuTDuSdrYMwfV84AVcpk6Ff9TzxiD84",
  "key19": "37daQXRh6XftCQdRVBsneJCRmSdv9t31FmyykQhKVd6xCpd2DNVEEwKBt4zTUS1KYZpQMD1VXYNhKTgj8ctnZbVm",
  "key20": "3NKUNLWjgoAnapZ7xZoiM8LCMJwMgv19HECQ16xzT9FkxzGvmcYv9sk5yzy8Qn4K8t7YBsJyUgTkgk4cxfEVMhcE",
  "key21": "1jNiZKJeQgQD4uh6ib4RPKYQXu5fqwPAf7HzvCNNK3HBgY5vMjEkgcELAmLgwMpbhrcsaAGbPUZt7Xg7Hj3inSW",
  "key22": "4arTPP8rUzkHj5miaxFFawPThGJjYxeMKmZ1UwuEUNTvkXtZoGMkZXUh4dGe8fER7BWpNCkqtEks55wpUmPjpmtx",
  "key23": "58tdMtMffiLPPDfjaFSA8p1i7cWkyTQfX128DStdNRqLQZPXSfnZuwdWk2Mgco1WnMZuZfpzYWiNJRXJTSLFRAHL",
  "key24": "2r6uf5dqXHfzDSZGjdmjfYyw6CJZ9qRPad292xdQ4bftfRtZye1iwHcP4UEfcX1jrEi1GZvfo39FuHw1Jc3fyyHo",
  "key25": "2sR83NZ1WoQsVndHgJjWYaEAExaCScXTK3T8iHRLUkYoiyJAAvr6pvBCEG8ASn2SC6ZpP4tNpgUnPeBMU7mmpzZF",
  "key26": "5GQmpdoXA2CH5bLYsLDTtH4skC51rtY1mzNTnaFfH6J4BW75MzH65JUJA6QzcFwahnofX3p8SQbP4NFu8tU4Qug",
  "key27": "351Mxfnd4f9pbHBJWXLuLMdZW73aG5wRmcFy3qeAhEJ2eekFMYptG7e458AaftNzRSxanFNa1AJjTHCtbptnHeBD",
  "key28": "3YtnRCEX96kRQgHj7Sq4kgTkzU8R5nSTLUVx3xCpv3nL4YuUs1QpkggwaHtnMvyhjVo2yDQytdyw5isQtHAbxkqn",
  "key29": "4DX1gggSWm7vjzEuixLTY1hbzn1HFbRVooVrcuAV8Mpv2nqUS9HnQcafAgShzHawvEjgE9q3Vm95VQWrVfiNtRNJ",
  "key30": "5EhG91cMaxDNodj8n3Xg9DSxKJo7VSWepU2MmWUEovL8MGrmnDr2bY7XHJLjZ3HkfbuRCG4vzr4FgUfoSnLPDuug",
  "key31": "55LRvEQDAjvKjpoJoteQ5Vb4vi7pDQzwsNku7YAQtZxs3Gp8sGGXU8tcihi4oLCM3oGDHuDzeE6bvBfPzSWonGxM",
  "key32": "BsPLjE3w9dFGET8yEquJhFjEcQnehno1XJ8WuLbLJycG8gwdq5vuRMEgNf7BWWKRmG2W5yiqYx2j38EUfT18aLe"
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
