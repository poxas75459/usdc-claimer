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
    "2x7Kdoi9pu7f3QZMEfNK2xMVBByyTiVjSgUwUAoXBgTKVSmqqgscbQwxpfvyPagK7q5oaUZXbvqhnb4TpaSf8cht"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nohtodShwjc9YvJXhPGVo9bM6vGPyD9ZEAxgjHwFjvbsH8xHG2j4M8Aqtuubg9JxoE6mbFktvpYURtXAZBTujYS",
  "key1": "4baNWNWMBm4QjSuR4xefSZMyeGiS8WnPiPGsYpmwHz289YLrcN5EiYYp4rvQfnGaZ7Nzqh9hzJTsVDCi6tLStP9m",
  "key2": "3A6eG32jwaDif5sE4ggEhwuGeh2usWQR2RdNaJms68AJUdTsXvVBxg2mHtAuoJAXf6ATNNNXMqeKzMhYfLAqT1HT",
  "key3": "4NDZ1vxt27fQrSqJ9bXpWSUuZmDddgSekAPLh8YDo5XKtYkH1RGR2Z79d5cHrm9wsLUzvavFn3LrKyTDeTWLNyEv",
  "key4": "5JoganYGo8CtndZQLvYX68ecdhJizeNinEuSKr98bAFMBMxHAHVEVJ2LY8DtaYWY79LhfAgQR8C9EKyYGvgpPq4X",
  "key5": "5EiNubBipH1UHkH2HzE1hpVoh2Wa164JKkjWtyR1mwpGeDZzEuZagS677BXG1WtoLj53A7WhzAB9hoPjRwhPCpzb",
  "key6": "4WMuRhhx9zdwHV3hATBVpt5UCZuhLdGezKYgNhf43qEHPoTcEChHbruteBAQMPp6cU3TJxtNDv4nUsoE8LQtKEqP",
  "key7": "5XraGADmK8vauMtU9BU92oJphLxCnWJcBj7g97rdKtWdHjK2vcDmaWuhHcKQCqR4dsret2xmYsaQyZHqaduoWZYW",
  "key8": "5Rt7nmd9QfC2zvKQbV1jMTs29aiWN9oyyrgmN7JE2df6uUXG2CcigEz8HgLs5qtHQKTxhZ37Kh8s1duNFpRxPA1V",
  "key9": "2GW3uxHaCmYjcXi8CVKiFCPRAkb2ATxDAmskXzvdkmQkZ9q1bcvVo84iRtcWNbqnjyYNCsE8rxdpwEN2VKibNY81",
  "key10": "Hso5NZnZKwxqG6smbmAiwq8cq4sS3yNzUnh1NZPntY9pQERf8JCHQYLCK6ub6Ldw6kKPK5f9pjcU79jUaP9d9pJ",
  "key11": "2jTW4FZFNfQ385m3FT6TWnMQZ1wbUvZvFZGEhSi2b55vdUHUzEntht15WrYjrWHnkzPYpo8gU9fYKH494QAiaGMs",
  "key12": "LnQ363mVzX15r28MH1xUi8YV98tANQR6VhKkoTwNknE8zEvkKNXPN8sUbpvFwMTMMzyBHYYm53hqzaHzm9qSKPi",
  "key13": "5o9dnG7BaJkApe6Tr3N69qprm2zkMp38MQQHqQBgKLYtycg6rvkjHPU8YSpP25SSFpKs36MZ5C4bsrmJDQaPDwEk",
  "key14": "fS9mBcd3zNyBYV74c7P5s6toAZwt9Ne2o4FgUeEyLtkJSefZQQRFhm48tMqYU9uPjMzuN53gmV3hT2FPY3GEJFP",
  "key15": "Qwe5akP6g32ViRoNVgMavg8TY4kgAJEEbMHHWR3GQHGCYAnkchwEMDykjxgQy7TwTP7ygB4183msGsksDRnhNzc",
  "key16": "QJR12VZaCubJ2REwWTi18RNnUELbYQRCtk3JKGrbGmqPAaTxYKoY3Xh4CbGhq569xeixGbgShuFxBr85mjxZWXJ",
  "key17": "5vKGj7AfX7XLKnQCLrN7vV2Wi7uRRgbXkDZuTcPmmPGAnv344HnoUwBAeLrJJLe3ymKDwwjExQsenhyeSR26H8bW",
  "key18": "5EFDPozyp8emEtMDASoxbF4EzimUEbyixXwbcHXwdydLBvfoym5ScCmxpypUEhGqmqjsBsAJtPkfmw9mSNjLEcWV",
  "key19": "5tVa7QbXaeaQhNrnMfwEAbRZdnXGza4UF3ubzdLLDH1QXYZBqVPT9wssuQT75UV6PG8XE9tw28vXjNCCGWAvPyFq",
  "key20": "49JG3PJAyk1vuwDPkc8GTB89eeu5Pm3Pg4hU531a75p6mmFcZnmQae1B9xxtMKQFbQ4d2MJ2JkFpsGC9BgvaoCxd",
  "key21": "5PxapaECyM8cSvdScjbzFoEhT5zMwGU3i2jjq5XsoM63ZhPEm2TnPwA5PRu27tLMj8gtQP2Z17KkmzucjUEZLzK",
  "key22": "5bFrtS4k1dJpDf6dyNLmYkuCxPfsSajkxuhbq1GB6xXXJdbFa9PPGPgxaTJAmPYdi9fNZB6QYkn8286jktSECaat",
  "key23": "VoaePqbBHUnAEcPvYbNuCkSfjWaBWakhScQ1dntdXQRcwymH4fHjwSUpGbDCBFHzpcj12M1SXihrgGZXwdoAwKk",
  "key24": "2mJEZT5BHuSHwmjM3p2K6Ce5dmDcAUcJ2JsPjqzDN3mFzT4Jr1Ze6Yw3yccfW2fiQe4YstAPLJoYu6wZjRngaqki",
  "key25": "4dW8V1iyu2ztE91oMNigdbNdSy46vPPwXPoKDzbGow27UxL7ovPf4vneahjAGwPJ8XGCdHUheAhk6CV44x9zE3Wr",
  "key26": "2o5UWUVYoXrDqQYGcR9p6xdhn8mfwDBaNsfwypg9q4CpUFY9hTxjnyoeHvYs7YfsChUtHdf1ZAGLTXgi465Zhgvi",
  "key27": "5YhzT5HxmSpbiBD2sw11etUeXBgdUqUTtqif7We6HuFjJehcmS21sgbYdd4XVk96ie9FgsdgJ5D3tiBVoFSXxzFL",
  "key28": "2GurpcG7eNe8EaqfYgiPivzYW4uB5s6XQaykC1aaTfNmsR6q9vRwgXoj6PQx9eK4mFmCWzbKTUBfgfbboyVsf1Sr",
  "key29": "22sE8HsNZM6undXz3pELYbJbVzmobg9u4APg1aUvMcsx6oXFPZ1vnjRQcRikQbvQtkxWXxMcu9LDaC58KbLyP1bt",
  "key30": "4BpndvPrBpwNATA6eqeDDwaTfMZvZLtwQNDFQd7u5GWpYvPHQmiiKCVMsSqLKoEWGFN3LKiydj1JzG5hQnG23x4y",
  "key31": "25qP96WPn3VifY1b8YpoPWgV6xyPvUduuGJkxVSNiNbzTa1N19BJ2o7ECRnrQEojxkjn3m4iegQwdAj3XucJ3rXN",
  "key32": "qQKDhs8DU5eLtAPDBmwmz76JuG9PCsxvHHyusZyetFnKH2ya3gy9xeXdwtBj2TL33szAQFHWXcp2N7iZsG9gH3a",
  "key33": "2nactAPMr4QvYBKG3SbFBb2cgCrH16cciu1od53NHXG7VqZYok3VY8DJDNg9wvL9ATJ7k4GU5zxUJb1wpvT2u5N6",
  "key34": "5a3kyVeFUptKoKmq8b4TGWsicjidgAN3ztoEK8mLbXaoGNYT3A2CmhqQEtYhBMeVpVxpqtWWH4tukwNhwJHKSH39",
  "key35": "61P7sBYB35hRF8aQkVYtA6JxwttH9wyvGDpqVeTeAe4zc1o66tBpeACCRaFDZmnBQGJDPD3V5vsoo8miGa4b6EHV",
  "key36": "5pW3S9698PsyCEGH1mgM1eGShFgV81aktYeRGSgjTnEF7UEAEYxcKGAPR5RUVLFYCyWAnseVXrRBiy8VGpdpV5yJ",
  "key37": "4FbYiy8dX6Wxk8DGyp4pL3NirTFn5cJjUbZBWk1KJ5QYxqeKPzry7msrQryhw28ZNJC1s7Cczz1i5kz9ECqLmawj",
  "key38": "4hz9a1FpojYimc3VbvEjzKsJjcAizyaW4rneSnFji4ZknFWtHYQoivKb4ot1oT5TFeti2841q1jJ3cYowzfR9SSQ",
  "key39": "2MLzPFLotmkeriGJa4s5GTQCJt7HUY9F9z2Ae47jQEnyZP49f3wTCuEnmdg784RhnEHZdoWVP1AYc5hGG7ehzt5S",
  "key40": "4K4sibfi9qtYoS3818LuqoKw7hdXnmSrxrqP2VXrpu6V88npKrpapowiuNai3YLtGV3j98c39YB4LB45fKqUGvYA",
  "key41": "4YdwdyiES8STFGbzbD2pPUce3nX3DPQY1cJKWi9rZcyHC24LQSKjJqpPazz7cRRBeqirB85h3kdyEVLS5HdQeQDM",
  "key42": "5ELwMz1E5Ji4vSmBTiGwTKb4cGtEij7nKKTceKvtrQ6Bvs3oka6GJrGzc6ZUVfm1e6d6ZsVTSCUpFzxvxsGqZ7kn",
  "key43": "GMxiVdvdCWBNQGKinvMYPy9GXn7Uo784YXgxU1AdvBjhoekZV745MRSteF1W93vaCPTLbxsze4Ma1GehMW988iT",
  "key44": "5vsZwnm5qWnppoBYe2LeKjTEPSUuzPt5rTjFecaj5uVWz4dpSRhryfpqYnzspqk1aKz4uJkbc9SyxutCqDdBxWQT",
  "key45": "4YTQmsGMVD3BRZTCiY3YqqYcSH9y8P78jPSYzYQu99tMnLUqqUHM9WhmKWjdgCmLAQYsp8uztPT4rJGMDPuJDTTd",
  "key46": "4VLvGVK3RYntVSHf1unjWAzyQmUjAzpcDiWUEUCMgQg7oYhAeZtnZBFxMeb79ooEMEHr2FoXQj4NszcJd1BVERmY",
  "key47": "2hkvrVWDJpzc1WnfdbADaim4YCL51f9UNy1UWB4VFsgi24HuEVxMCXZ7cHnAokfFHBosJ2S7rnwHJpSJzoodCKkt",
  "key48": "4cpS1eutvEKCwDc8SNtZwEFcFboGpBKrqwXZU3c8mxchZ9m8Y5bJanZJBY14FCXkRH7zyjWy8dGgqxyChG8HL1ga"
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
