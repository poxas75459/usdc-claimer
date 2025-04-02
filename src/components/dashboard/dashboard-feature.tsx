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
    "3zbq7rbLWz15ARprUfdwGeAdRB8m4vuqgobFxgwS3zmhKYDcc5QL8DxaVrv1teSkHxL8k7vTMzKmp8Uoiqy25nkT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5r6kXfZajpGYfTCUHMzV6hTd8zQ7hZQwErpTVFNAMbPwR4GR57psgaGKbrbJhjDWJ5xRv9npFW8gfd93RTsGTt1Y",
  "key1": "4EXR4M7artzU6gZ2z6mS7nonEp49uySBiaS7sKLMesNZZnE71yuFLePkpdMWP9aWQeoCMUPvfAtxDq4KtNLj8X2F",
  "key2": "kLLJDZyEsYkQnnfqqcVKP7X7zQhShaU7ntRzuGG88htf9JBkTaTnGoykfidDYbxCT12MjLXg1tkW9wXMFaASAMn",
  "key3": "2xKWREtYSPHxu9yzSzyRAXJkjQu58nTKYpH4DdZ5czGNfwEPdDF5tDA7Wt7fn4YQprAWu7WeRrmtSvseiQqsw4Hx",
  "key4": "d5aY8xdE5gXWS8JxFDGRTDemhhAgcESU3gwa86YwPeq31m7mBqhBa5BJ4zaz6Qs4iPuYbiznCMkm9uGvqrnHg1g",
  "key5": "5sm9nNyAnzyRh3ymXEsuWTUcBEgNkVLfwYhULguTwJpb5BkTC1j1ZgnRyWitKquR9cc4CcF1piU2u3adnFjaMy8U",
  "key6": "4r8fQ12HcjXcodZ98XFChm7UDKev8w7d6wDDHDFkpsticQkXV8zuPtvPBhMQer4u1jdpbdaL8oQNKZ2BLU3Ubx7u",
  "key7": "2RQpLBtpa2XrgZzZswaiwEqyN5o9872Bun33a89rbkBH3iiECf78CcLADVjR57wQdGbgXxGDruB8xKiRgjq12d6A",
  "key8": "2J1qoxTkphckwqRW3CxUpyHTLLPSNEmqmTFnf526ZErWe8hbwAowaVGkKFyMU3CvVyhD5orN2J4dY4pFAvxjZu2T",
  "key9": "4FpJ1rnTWs5KSWYnyyTGqQgh3RMB8jckgLz532yY2zrYmW5DcKGmN2cgYnGMchJbwwVpRdKxQ5Pukmmka2Hp1KGm",
  "key10": "2o1RP1Y2X8AY5x8dtfETa3bXYGsbnk7JfZGcVCkJqXsxdtFPPEcQ97uRKYPqqrg4kKpmyoj6CaU32xtL3jyB84mN",
  "key11": "Q6WaBMVKMFPeE8EzwZkXHaKV4fLUxv6zfqup3xEzckF2HjyQvjNKCRsGpSQPhdeEtQ7TmifkhneFiHVMjo2fsqz",
  "key12": "XRFinZsyDZpQ8ytLfxbD9n6d9aPbKxeYB7mZeZm2ZaBjC9UriAvSuCAMjWWxbgidBYh6csa9DkQiYNuGuacxXte",
  "key13": "2hZnZLvQQU1NN1sYTC6USRYP6MN72AKSdkYi2KW5Rf3JyfvgDz63rbbWPd8rBfKdnj23iS1hk2GkSee5CBBH6e48",
  "key14": "3JL41j8bUhZem3CF8oaNq5AcgLLcciDJkcApzYTrYhDXUnroNMhnPz6dUZMuYmUuakuRqFyH92g9bEMSWvEi3Ge3",
  "key15": "3Xs2VYmZ28BnZJWaNturdwaUpPPGUVLUTRPiMLqPVkuqYdsw5151Rn2DAJY9sF77r9EBU3pfDvn3aUEQrtx284Ru",
  "key16": "2LRZi4GGcB6XLg9gK7iGGhoKGsDPJepLYX7MQC6LdyKoXeycExH9hgnFmxf6fxKcvXa4dLnB6TLnXLdnBqUQU2c2",
  "key17": "5qrM6gSkM7xgjGb9yM3Wb7YRM26dFKnWT8BogFXr1BvR8LpcNjRkB3EEVNGe4tb8CamDQ9vjjjPCPoc1dcjNCHem",
  "key18": "3rhUg8zxznbHMFgbFaGXP7Mz4AMR9t2AeSmkiPfaBCZqXGfMYhSHSVL9a7MfxtT68rVJ5Q7gcR71Mquiu8BNP87H",
  "key19": "2a1PKFjy7S46NfoQSrzYR3dqABo7kN2JFtkUnWE55yAvviPRSucShA5bvgjHQ9QrVwQwE7nEwggk366ZxUjKTk2A",
  "key20": "4Myg2J9C9Trrexvopq6g2tdFjJmVzUM8CKVz5Z6rLCcLJfMUjmdhDdW3n7Fq21Eox8wLTmoJ1mnSo4zxPofXeHsu",
  "key21": "27z1niw3UdiUgUMCK7TNejkLa99fsKfDDhp1n6sTDFEVBGJvFuJYcpv6sHao7dSRcdhChChRiY3mQmohGfF6a5YN",
  "key22": "2eiAJ2dbcjajRPNmwCzn3odWBXoAGp65MNYHkzUz3pu4Lvw4GB7FA5JCNNwQPRFcpy1q6VXswPuJ74U1tyo7nmg9",
  "key23": "58MQBHhDUTVSRiVnPbGXhmA6gRu9myuX8nz7XTBjMuHzfwkBHkoexDr17uYZivUYWbbUiq1KXXMUtXjGmCLkywXy",
  "key24": "2K1z56i9qu6fMVpciq713jyzJ5d77bd9sJYiEcQ8V1j66kFe97yzMsdtzyQycTWN2CGJY9s7y5wK6YosT3vgs7Ck",
  "key25": "58KRBEXuuTMuRQTwVXRt2eWBWBu89MAqz1bnMxgrcMfzoBY4d11E3LDgvvJsJo3wewvDzTVE7DT1UQYcUHwhDFa6",
  "key26": "3ezrmb1rru4AcyRFinetQWSnj2oY7znpB6HLSo8Rzgf1dh5JfN3FJTnWG9DQasRGGGFT1RKWqPv8MZhjnLbBdyXw",
  "key27": "658Gwkj7WAu4u7cnCyxp3pcxUDHJoVq1XCZSZSwSfgmkwDZi5ShDCFWvyfWhQDvZau9Dpp4MWEwrm9EE66bvonpK"
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
