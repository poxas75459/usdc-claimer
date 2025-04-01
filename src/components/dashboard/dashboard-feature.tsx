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
    "2AwWKLgpsaEjKNNcuQUWYZn9Cw4qQLDjbvB6MokpzfQTKLxv5zt2p5QoEdGu59xWuVpQUFVVmLmAt4n5kfuefUsM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65koiaGzhhPdtzi5hJyJZYDGQaFwebA9yhbA4a9Com7yhDuBh3rUHShSQL66B8A324CubqY7mvMCcHGgSBS96zaS",
  "key1": "yyC4Agbg9yJoJ4W6fjKjhvHNGWm3KCNcpom6ycoweyEaF6Y42F5qzji2i4BN4XMhAXXib6XUnxWwWWaPgz8SRSP",
  "key2": "3Tuw8bidC8fS47UaEv3c38UQ576HuAWkdvx1ptTVxovSRHqLQHQxriuRn6iZwMpYcRvRAQGqvf3FJ4efUSFsrV5i",
  "key3": "5J9cUu4xaR2L6Ajsv63pD8CGNMfjR5ZwrXHtXsS2k6VdoPZEB4iewmr6Jat4h3oZJSPT2H6HroaPRAh9YNRbFKbV",
  "key4": "665Bn6FxymDdYMfYDzcctnZJpV8kLs35ApqbYMn3SqaQXEGHwPSsDAcjVc7ioXy8egjimgQFUWrgHUwXehkvpFRg",
  "key5": "4JdSPS1Z13UgAqifGKMEYM63AFZXrKkkw85NLeXh6vq2s5MTYJD5FhfxGDQNAfESLK6rMcmHD6DASR2d9f2QWLTw",
  "key6": "48xeqaNeATMk7bzTCbL5wzeU4LHzvb4AMmcsFwiPxJuQonTAGE9bjiZ32bbohh2G3UdK5Rj7feKhth6jUKdYjG34",
  "key7": "39uJXNmssAU3tUbMUeNM7kzxXgo7VJs6XTa8tP5L97jJwG3Kc3AYKM6ratPsZdmyrBqZ89DRGVnPeT2vKKDJ9woq",
  "key8": "3gR5dzh4tjjWNSRnCSwHfbxQPwEJfnL46MxQXbLpNUwyjEsbx4VDiEHdi2ebE69h7PvvvMwPymgrzPk8zjsbM1wC",
  "key9": "4FU3F9T74GvTZu7uXdKW4sW6YGNW9eeMpNojZXQ5hqNFkjyyES3HTEgL832yhpoME9gdQ7FqdvyW9RnzinoUfPc1",
  "key10": "2Mu2614wKs3bKRpTYuvKzBiLeaFvq7dtPFzu9skQuZyFuRcYCDST1PdYnVKqtZkoeWzZx5n6DTwe9HUHAnCqhfh3",
  "key11": "2H68RQpg2n5CMFqGV77baSRtaeax8tMx3LA8pubHbu4E8mZsVWvTx9LiBLRiK5aA2CdsbkZHXXuY2Kx78Jpd4jFu",
  "key12": "4c7KxZLdxVqJkMUDXq1dhbKuS8DnBJmBGD6rJD5koFemdQU6cCQAMKgTQYPCD1aCVjdCGT4NP6fjXvDFo5mWPsHE",
  "key13": "63GKVdJg42mMGpLLJ48zcN7hKuWnwywN59FiDGVvLr9yrnXQT8KdQtcDRqMV218NmZzBxgRBJxCF1baZXDkbbHxj",
  "key14": "4B1qTL7suw7gnumkpRjxFVpmDDiqVP7NzjKvvdPeWsiGFDYBPQJGEpWvrDMXUpMivFBVZ6ZDdw82vXfSbwrYcSqc",
  "key15": "MuB636nzSM2sFxM4Y9aX5XAKCtaS8dKjJKTGRL8FShEVWWXYewD7awJ4CK1bHoJiMsjSifFfU4iMfrBndDBrv5t",
  "key16": "GCxjrKEhYMTz6mtyp48iWBmNhRNBYTrkUDosarBKhHRV79fv8LnGibBHxW1m3nFhsppWY9ZS3wuR6voiMy2M1f3",
  "key17": "3FaFUx6ysKvGzsNiMda9bhUfkXMVbD6WcoTdMt9QoqcYhMCnzW8LPCVxV498iqiXqoBu27fqbTir7rW1sqRAWBMG",
  "key18": "KGQVNB3scQsj7uAxVSwUgfRGQJKkGJG5tmXYWdYcZrfvyyjMa3A63BcBuHeGXSjnfzGCcQL1Kb7TADdrfmXxUeE",
  "key19": "2UzZ4ogcysDHmeZFrpqPPJsaKdyDeTSnhFLMtMZ4NCssrmPgVLak21ZeJxsYHw6jFBTx3C6dirq34VUR5XLJry9Z",
  "key20": "2EzzfKc6dLHTE2FsGaZqcyt5qSpqr89BtgWgHM1MP6bozjVx1J2WYTkfTSaqmV2U3WgGfwHjVX4pnsCkdhWPR3t",
  "key21": "3gqvjC8jYSXHBFGmVwFWKCBXKPwEKnHkxmg2a51Ym3zu3nc4Lt1YvPwhxeg6ohr9gpAUeHGEQecawu5pj5zgdUf4",
  "key22": "4wiqQTDBW2VRq6pqcKXa75Tus15QdmkTMGJgfTPi7EoFniEd86eDasb6bXVBXLrLL3EMc6KWCuzExasxvUt4xXgY",
  "key23": "pjYVfsGjn7AAbYcoWavZtXwe6Fv46ZPhW8NLL2ECs8hEZFxiWyEq5ToCsJEgk4fuLiFviQMbf58csByuf9wZW8M",
  "key24": "2SbS7tSfMkttKK7CzUHcqkUaKY3MsTHGUqW7J28g6tBc4AudHyUYvMYyhcFEpq7CvpqDhFfsvye1niVMdQfJxLdn",
  "key25": "xEkF9NDLquhwoNFRDnhTH15fQrMJWyGfEWFAb9siVHtoZKfW4PQR8bGD3yeiyMTSdguLiUnEduK9zKxxdmeWGfU",
  "key26": "oASc3bF5BEp3nhGtkbCfdJG9tFzHuMwjfqKZdV996bgTvErc9ykBrm2JTwCJ1ixtnMjVgNTJn4gLtNnSFMoVJ1V",
  "key27": "48kekyCf2p8neq5MsLqRQivL7u6mc2Wbw64bFzn53ip9Z4SmhZWeSzF7Gw3rpZ9PosA2xE9nJC6g27CSbaooLgaK",
  "key28": "3ux35CdDkfCNpqDSgNvstoosuNUEsZYf7SrwZf9gSgL3QdoDRrxQQ8qXCbG7jNxzYQzRfYJWawQyLY5EFNVm9gkN",
  "key29": "KzghzV78NYR91Azj5u45ffiNzTcD7y4gQ7u6S371i9odQhv322awGCARyTvftSAGqaFmb4dyz72feGNikdfn8Gk"
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
