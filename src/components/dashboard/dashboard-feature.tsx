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
    "3xaumvBzoUUxo1dNLxcpJA2zXh16NdyR4SXxcoqQgUmjfpYotfzoVjtX5aFPZqFdiKk27QzUYVB7NDUSw9wTkV3q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CPZ8qu7onroxEANqfgGenja5tNj44v8rbrwk38LMk8kWWuL1SS2h5GprCdS2NbsnbPSf9eaWbu6Z3D53VZ4nf78",
  "key1": "339VqvpvKQeEbmJYDTrLjAfoQgcuX5mofv7GbWECh9eFGFxAC4RdZty7YyfmFKAEJrPiZMQdHSAnLsNK54KNm72N",
  "key2": "3ozwWeHrNCAWBDT4ky7ZAwTb3d2kN7izEthFyr7tUuyYoDZcZh7na7xdKF5nCQjaJ251cJ6amsiKTmrTozcHqc7C",
  "key3": "2B9DV1aSm3WyYztzUKojxMDz69FbCEhXB8jeq5p7TY5t7CinziLRpFVKMVid24YBk2tQUarwW68xii3LasKVrdCF",
  "key4": "3wsT7mD9dAiA5KxNEtW3tsTYvhnXMAzif5DbmpKKesrMrHX9UsEYGzYMaot77cHHN2whMibYDzxRvH2F6aEzkZj4",
  "key5": "5Buj6BNvv4n35PVqo9uVJ9G85pyxr5ufn59gGnTXAHYWi5DvU6pRHEQfQwg33SLt72ToxZ3hPoLUeBK2ZVEjPfkr",
  "key6": "27de9pNecDRRvwoDaeobb9UXBx8DNW4VM3biMZto84FfRMr8S4NTFayCm4MEU9Fy4xHx4JfpjKoXEK6o4nbsG4y3",
  "key7": "3bFWo4yyk4WypsMwbuQC8Hzg3BRvenwSrbtuEvYBvvLRNBVzVMXEJQtZacWHnXTvDtKj9jk3iAJ4FCtqDsofVxD1",
  "key8": "2gs2yoLnNDiSxDpF2MnexYHjgudaNVgp5vJ5pYaLLiVMjis7GsS14hr7nE2VFcTJ6vuJ29xhEtmeUFtauPtPGbse",
  "key9": "5F1BBK3sV6q9LJniRmsxnwELwnJq3HDHD5yY1hiHWsQ8kqtSbBadqvX5SXU2CympuyoMwZKkRVnthx8o3ScMFNzA",
  "key10": "5f9epyrLma38a7QBzNfQicu679KD5CQv27QdiyTcaQUUdA9S2YYfqu5PYA1yXA6yEhnKASC8wJqs5zY5FJFhFwVG",
  "key11": "5GFFpwvqDqPeKLqcXeXhsZ5VWttthsqXVuX4HrNeA9A3Wa4WnAua6BRx1ZwGmUKQdpGjWtS5pGutX2rUvo4icjmW",
  "key12": "vE9CWMhcukH57MhaptbmU4W9rX8ZU4bJrsvVBMbQSuLeFFhzv1KGbhAmXZ4GvBv63ihUppCoKiBPkYYH9ZqeyhW",
  "key13": "5NxtJ4ejX3Qdynd8F3twHvAVJiHnwAwp3nMWdGgGbA1Xks9KDge3Y5r2Y5bvDrMGWeeFyDuxHPqVh7k9Bd1FvQSq",
  "key14": "umUotkq3DAFpwJQasSPz7nwNAKs2Q7iUdHuVxzq2xTT6dYf19PJoJVS3NGXm74x8fWamQkFKqaPqkVvMjrGRCQ2",
  "key15": "2UAYNxA7aFmvBtfNRG1wcY6YJinZNt6axALumPwQ2gCPKgA1ubmy3dyowN73cgnu6fUfVZKYXoryyhMhtAubP62u",
  "key16": "2whUfnn98tHr4LGu8zuafmL1Zze3Wx6zkfAMZQmC1LUJxEPKfKpA69A8GqkTxYcoVYKMa2P3H8n4DhWw1npEK1et",
  "key17": "5Wq4R2n7MbxuDqBqJ7MHtpzptaT5KCpjqbZwcyMw5hycfc1nZEpfhpwPPUx9HPJWs61j7c2fWn5MdYfKmy2Bfy1S",
  "key18": "5ojSbCvVmWzjzBwXyzLUCisDWuoQ6JBG911K1nsPUaX6A5EyG8Hc9pVejyiYyWE9tRtw5ywME9p88cMHkU4izRA5",
  "key19": "NyvUCmacFT59yALM89uaeijeNiVCaW8XN7QJH4Z8ddeTQpxz5EWm2GJ1WiQiNp5GDrhNaEd6epEEV4yFpUQzAuK",
  "key20": "2Ux8MMmPALGfw59U46PyZAhxGMeaF6G16Ne1piJfNtSRxLipB6LNAkAHhyQMKuKFxYJddu2DLDY1QNLaDKzN6i6G",
  "key21": "5dNh2UUc6L1DpAqKtztADeqdBmAaw3tKvPAqh1TVoqE56fgVuWHCByrWPgwM6inHrTySwnYmMjBuh2gxfcXT8KxT",
  "key22": "YeBwpFWWGyQLyou7uD2BfjisB2FZAnz5mgdfRUdUzd5QZacai1KH8N1Fgs67HdDD3yvkQiDfomwczTb1rqCSRSo",
  "key23": "2LG7AxTraJAYuZNwFTXA8sMMezYq4o98nrpJLYQgnGjoyoJgLnLaKdzG5aiM1xwp3vNs6ggc4tXSF3QbHq8EFh4Z",
  "key24": "21dSiDvn7pMvepVPd3coS2SFmUzxv5yW4vpudUzPYxLgtApgM7Ch3g11Mq5GMJdXioy2hzSrpAUDwAKmshWhBiN6",
  "key25": "35ZtA3S773h2vyvGLPWpG488eF3kg3CD4dB5bpyzEmeAY6nEjW78euqCJKs5n5JpGezGRzuW7d6L29y5d5WJa7Mp",
  "key26": "5G8pCvkxprjNcovZxGk1yVKESqStsB5j4c5HyUpAR77hbCQCJimBXxm7XT8Z1shmn2Rd9A8i5pyHjcD6pMRRF3zp",
  "key27": "2wrzzhaYrrvWEoZgL7u4E3jZ8CbjRgSLSMPsUMKTkJih5qrGRj8K1oGXNWegTpjK1dqZkhNYFdCEQDb6ZDcpuJ8e",
  "key28": "5CMDXyVH2bck1va7tPwVHZpPphF4ZCMgqwZ9oF3Bp7paUazAzsiZbv35cg2pr22P2J7AGrvBL3V6XTVR872cpsKd",
  "key29": "2Nfm7UT2etE8RWhYeLtWw2nGh43VKeZZU9eiSt2Hu2JYsD1W96S2fte5K6YGcnQ3kvWuMQh4eTyBEGwEXNH9Aw5y",
  "key30": "517ZkTwyKD22JYdfSwcGGLoPqFQVvVmt5njv4qnDGHLvrt9AKHVoi7tfnZro8UR3kKk9m3KhthTEhC7bXmGJcQ1c",
  "key31": "2X27n1AnirTTzHkYm5siFxWRHKJDaWsjPLdW7P49R1HUUxDpj8Mz4ALFPEZvcd3QtiWy7MSRUgpYQqJC3Uxhy1Nk",
  "key32": "toDLbyZ6GCg5D9z3gJYferL6hjimM7SoXbpaCERdcMciEYQZUj96MT7d1S1Z6aqUQxfmykepqkkyMy2BJPvaZ6Q",
  "key33": "5DkmS7tdeFnNg6QhAZisMyHZDnBqG3JM5dxp9Cf7sNFFmyESBLJmbBy7SjDqqURd3Pv6Fas3jvgNyge7CgjgvPq6"
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
