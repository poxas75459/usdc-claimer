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
    "4wGxBdwBLaZqVoQyuLUH2wuVk9mFZr6xQTMbK3B2dHijYYgBDnVAqgpy1QpNCeDMjUyp92czd1u1Zp1Er5qnhYFj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Nw9qCKvFTMoiJ96QHDEYxL3XJidqaB6tnzs63huunpjx43jqHbeFv3GoPxRcQWhJUAJ8m1tK3Dhok5bRxBuqWjV",
  "key1": "2cJoCAjd6CBkbzptdCmgDrBSerZWH82daFHDiTRDNT4RHSxSdC64kocwfrAN4mtpiwP4xxaX7pSCgCVAHqBcFhWU",
  "key2": "2HfmpFPkFxBghejH3cqnoX8qj93cUV9xeotUAFnPuJy9AgkjnHQGoMpJBh7wGESBmeeXHgUk28wbpJfZJHnesU6t",
  "key3": "uFgXpBFToa6jppNwzDm64WE84euvUVuy9Jue3pBscWokF4jVKvcK4kuC7n6LsW8K6GyF8CujbXWLN6HJ2NifWFA",
  "key4": "3B5BoTC6LG94UJfGAWhPEQydUg7Jkv4ei7Q8QwW9euybgAkU2jbF9vpkssxjgV4MJumtuF2qW9xDTZa5yU1CNHEr",
  "key5": "fgahst25KMi38FcHw1zkpLmXU4Kj8VZcudTmAE3uTj72iC4kZdbbThBCsyXX1G9DMqouDgK6h7CbiC2FvwfCbiS",
  "key6": "62bxMgDWvmH4Vp76G3Q4Pi5ACmo7PD11UhYA8LtzJjBQd5vj1cfAZDfDmUp8MxgHmMicMEoZqEtvEhMoFUoihK2W",
  "key7": "2yVCaFiKK1tnnrBXcm7RytxpB9xZxNMfRwr6cL5QVPGnmwqvw1d2HtUxKWsNrK5h52muWbxrmpNP94eUF2fKSySL",
  "key8": "5QQny9PxHW4EjsHpjPDnRHBZz3cM9oPTjrddDeRk4UWxB28np76yvtyEKr5BCGfAWrnatwZH4aydyxvLr5rDfgMv",
  "key9": "bheQ9E4oDKk3HBTFHQ61JS2MKvbsWmy6UkpcUUZgzaN2JapcgJhFUiLMvQzhbKhRP7biGDjyszmhPmyZ9iKUhNX",
  "key10": "3bGHFffiYN695pECfcQ7gPwkCQMMUvTmVpTXLN7MT8XyjqG2Cw9bMSChovKdBGJAb5nLTnQ5yctgJjLXcjix3K29",
  "key11": "5DeXnMtrLjUsfxrAeVmE1UaAj86qnKUW9JCJWv6i3hFGDLK7AqkhsmsVG3nPJkjrNr51f4YJgBHoXTfeGaGxViy7",
  "key12": "3Q8yKmytCdq7AUKhfDgqSdJzWxbbjP59Rtvs8oiUzky1bF4MssXj2Dw2kmvj1vjqPSHSb7mVH9jjbUAMWWEe7x7v",
  "key13": "2EXQHuU4tKUNGU3poorw7M6AwTcxkn6yG5RcLQadonWNy1UDhPyvRvSjFMHpD1XmD3HC4UkQG4bLTcGPpUfYXzwD",
  "key14": "5BXrExBo9qB3nTCYFtbxiGq57cPUSzH3PcV3Lfs8ZjWvBx6tjb2czDu3DYwduFcm31nHeq4PgeR6g8u4cyFdCfYz",
  "key15": "4LxqJrTXPv9JearZKjhv1hYSst5xW4mgsS8c2yCevSKuaeir8VCPEkV8Qspr3wrbJfNj2MaXuEUgeAMcrQjLYf9R",
  "key16": "2ZaxCSvCWMK1aqWSNZPUsRauQHCYZWuBVhkWBZFSGnrHECbjzUq9oNsiKxo6E1FaYArHcb3HLyyCQFxfw1KvPvNE",
  "key17": "48Ak7Y1DfG8UYFWrhqZ8iAt14XnuaqMQQixzhX3SsQ7swzjwLsEKBzyN2jmJXLcTzY1cYBCWjSftHwHjLMN91xHf",
  "key18": "3vh6VyTMVTu8oMrkLJ3D839Mub5iwBATN7JE2rmSG4mKdJx2KtZHrVA4Kf2rdGin78i5rsasX4oLRWJZw8R2h8Nf",
  "key19": "23Ea3fhKbQq97Ge8YXP8Jo5XSLhvvnJLvXQYVxEYTM75LbZdN3YHRrvNSLkLV7WqVD3r5oEyxNKQEo7pBXJzqDSU",
  "key20": "iYP3four1a4EHfLEHQMTV2S9mxNeGT3ZLJpZ3wRJrUTiQWtxcPHm1kWHWKz2TbtAACjPvoeT15gy55fwgDmRz6A",
  "key21": "WQWQux5Se8xf5dgRpV5m1NXDNYHNB7Jg7yPPsMkkeJVTk91724YLLCQdUdVetVuGcUrPd7cAeaw3wV2NV9Vy2vE",
  "key22": "2E2QoqGUZW98UVwVP3NHgprRo8Z1f6BGQTstwdA8CyuNW2j2cLjMABj7G5r7otMHFqkLPQKpB3dKYjv435jJ1rZm",
  "key23": "4cJs5m5xGUNYqPUgYFVXHYfLNjP3ZCY1VytkshNAuKRXj3o3xCEZhxjCWQH9am9q26KTaE74DbCnyPJraXD8cxQg",
  "key24": "5uS1SSoCbau7n1vcrsKhYLHNs94ZDDSSJ91LkjucetrQTSguceD1arUEA1WXfkWxtXWaHg6B4WJTkWSMuEXCmVTN",
  "key25": "2TuPgcwfocXhtDXNtAMxqj8nfxKCxhV4Xm69AdZCp3aAo3uGyazbDNN3FEV4txGJYaFMj55DiVnnC1bDKLaGX8am",
  "key26": "4xvBQazgdUBuU8bZooW7xhY6tPpJ1v2GTHKujQ1YmWjHH71GQGekUJYMUYPtFjqF9bC2uUSx46oVWsr5NEYhvLUx",
  "key27": "4PdmrhbTfPAbqWCz2VRtBGrdFgCEfrTYyEVRrkmWhf3Xg7LPbsKRvN5EZPKnSJjqqapj5n41XjC5YAwCV4KdcyaP",
  "key28": "2LFGTxoGcrQYj41qXk774i5m2kcpPJFVfwewpJ78QCELYQDkYJyok92HnMomdz78RfhMtWDavQUcybpH3h6ucV9f",
  "key29": "2m5PVTNMbiS4RZPxKkvNsmhavp5Vah2gRyqcZvVasRpcPV4QDeFsq2x61Kuz4T5EeaKdLSUGPLSKXeSy1DoQtvPA",
  "key30": "4uRoSUJNHjww31RLQyKvxYhswdoNTi5BnXdetxv6NPWG1Hpg6VjWQUZmfCRpjZ7uJQY1HiLizbKwHuetErALzcxt",
  "key31": "PUsmg2q6KK3fxhtRRVH9cqgCCL1MX6L6pH16ebe1cLgMoHTH1XpP6UsCCLdQjwyw6JW19tsfRQSH1AEu517BvP4",
  "key32": "2Eex8m3tgfPYZYVBcENqE3n4DD52qg5u9emmmnJAD5ZkbaWa9yT7N1VKmxeUr84533o18bDGqitwTqfKwmAbeLcQ",
  "key33": "2cor4gA1MvzkRMnWoUUXTJP8oD4zMudCb4XGJ6JkfZ5GHcYo3iEE2oKSMjUFY8tE1Atz6cv6WbgdVCZVT9NUBG7x",
  "key34": "5FB64Jw59kL5DC7cvppDwo5t9cvruxBfjuSE8NKp4yTa1CygMvRv45hRWKczZ6XJzdJTYuhaibHoRfzyXFaosHip",
  "key35": "393aSsovUcy9MD9BH5tVw41myk772vw9bJvg2RuPUHJwoMNhK9ziVenri1zL9DcUvWAG6YfxJnV7msi4cbzSzNYA",
  "key36": "44DnLZExyk3Uf5qv1xFdwCoVQYKDmNWZbJpoRrsaeWyraj7hmYLTqHXn6JxJwsD3chX31BRNwP71PHUE4PPvPCcm",
  "key37": "YRNwcgox7NkySJYnZdNvHqDevu3itzVap1CjF91a3HoR3wXFbVgFfWyte2CULrMaQKyLmE6qb1w7sueimef5pMP",
  "key38": "3Vs7quNQTXHbC5YpG8YgdTEayZn9e85tUjE5ru4BcEJfezyzcFMdniCxAEuCpUx4D2NEJM33cjDkwZ1ggtJkMYH3",
  "key39": "5Qg4h2i38dXtfa8K28meN2b418yYvrMHakFYxxkGUifAiUnLbEHZnAasiNr29KXFwjGzw4LAfamMBADQz8jorq9r",
  "key40": "5QhK7LRok6NJkKeBiSHKP4yhGGRHcFQDyHWvh7kU1HcVJxJB7Di7xEsAbciSDByjyE7NGdqqhsofqNiyoi8YwcVA",
  "key41": "65jbf4Zd6dnTo2yDLzGmQFBWvNEAo9kkJxM8kLMs8ZbfrDWS9z1i6nFMoBWYJHEpUUTtE7r56T5e47hTPSc1dkDG",
  "key42": "3j8pcftUtw6txvSQzJ7zDQMVoQ276FwfxirQx28EhiPrNJ7dqstcpKJB85mh5j5zMtYnsjcZrfWMeHcmk35JtCne",
  "key43": "5zdXeQ3PCdDSBnYST328Q2zZkySRTSCoAcsqK82GRULb9GNbX32huGwwD4xR2AYCKD3rpDUCTA9nnLVdgwgCcXN6",
  "key44": "3fwmmpoADNthg6RXwGPivmNfBEjmRiRPs9jstgrdb6XgAy7dY8jcwYxnpE4BuVajaYhAyiVcoUhJ9mtmiNHH73cu",
  "key45": "j5Zpf5co9Nb4UKFpBCEu1meXt2XJ4rgATFi2vGj25ypX3ZasCo8GSS1mem9Xd7vHbHjAPPZ29Uq63xYXhGFAmJk",
  "key46": "4ZvBbxGJWTrGBd7QdBsFedwxm627fNnspQALemebHjpAy5fAcM6y1ro2wTt2orP1RtouKWj1CBmtGiSkCTAJ361W",
  "key47": "RT2UswDSuqzd3a5q8tXWrNwqUMYC5f6Jwve9rs4QEtEKNXg6U3kD6ciGH2P8ViCwugqZymA7xuvdbu5grg7tut5"
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
