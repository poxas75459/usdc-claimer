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
    "3vKHwpcgfC63R6qqWkWk4wXW8D3a8pccvJghaY8bR5PvaycmxG41tDkZMKBMWqBhBVMaENbbYHBymt7Q8cuTAczt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FFvxErMUUMbJmm2EQm5yrXqXELHyuHp4NpngMWwzVYrn14b7j41TfemG1u6cPs56nMi1BB3x8uSFR9MkUMNk2jT",
  "key1": "dB5wgErNAksjdQefdxcemswBsXDX4cKqe5e9vT7Q1H9Nzhbburv7siBNa5Dq3EG9Dwx66eJNk4ctwPT43DSqEpu",
  "key2": "5wDuQnwQc8NDXVd3XMh9XM7tkoGxAdwE8q5fMQwnyKAaA7b8rfWiP4YHAUs1oXuEbSnMsMbssorh26parXVqEh3f",
  "key3": "4ZXRTN4gBffKLu4GVv4dzgHSMwdiiui2sG5zLSusR1kYBQ19LuBgGuZxNvPfhCyGYyDadssSrLfj5hip75A8sK6m",
  "key4": "5cW8CCSojNbuNg4STvGPF5PCR3WnTZMywbT5PN51bLE881UpTVRRm4GUtkcLTXvKiDkefQuaoJeLdDiRDHi5wXbQ",
  "key5": "wYWyjree6ABETZf4kirxZZ1QmWQh9nrRTL4SMsX355acjMg4oZTLPKhjqcwbRYfC9s6DbB74XZQ3ZsjMro7PjUv",
  "key6": "4CjExq3FpC3BXrG2ehetj2JChRaLFZ8ysBvSiFpVddwSnitgzCSjo7FtpR23B56C9eww93cvdH1DgpsDfBqk7frk",
  "key7": "5fuvuwTdmgmS8Wtm5hwbeLyJNW8LvNymBKnWfvTUP91PLAPwbs6vUGiXGXozPjzWsQoanNaewzUcXV4MTRnWfPUF",
  "key8": "5jNLdssqqbjQ188rdcq9cmX8zKxYqkwueofNX8RMvDtiCvggU4wtnziKxvZsc785R6A8ygZZ8pTnkLM1XbZ3qdPJ",
  "key9": "3bkJwsXdbceQDREUYCdJgVeAWDPZbqM3uoL5jf9HvDUxigvVumNrez9PjeQFwCWJV3sAR9zHfxJyGGv3V6PaoPg6",
  "key10": "2s2KCCo7gScjvjSMoturS1UqwCSx7UBHRUuHtetsdLAYtTBcqgmr1cVEmGvf2LZ8C7jjXo9AjVcCXnssPwDw9kRg",
  "key11": "245qvyqFf8q3Vqw34BoAvpbmM7ECQeqGa7Ah1XsEXN4DyaLhDJVLFNd4t7kzQ9fnuHfRj7dGuvPcLd5DcdptxaP2",
  "key12": "2cQ1uD5wTSLDafhobGDhs1AtZ7cVpWipXkKYoYP5JTqW9UKpd1jR6rTqgdS2mfSQgemm6hsLYD8bFPo4CkgNH9Pa",
  "key13": "3qdhNo6RauTtVAFqDRR4AtWhK1Gr1ckR7mvv3gEMeJfaHxXrsW7vJCJKhi7gi8Z2r4qoTfUJW4tiM3FnbS2mQGKa",
  "key14": "5UhHbzWsvxa5wa4Ao1pige2q2LYnC3s7cYGLemWJjpJGWS52b63E3UKPZGCqn7uVXYjpCgmjPcUcYJ4ErUZ6MBJG",
  "key15": "5KzitMrhFJniF7CPD9918HAqmEonT8Fx7hb3fRtco6Fkrza9KChWRzLJysEWt9uarbdmdhNZTeK4KTSt3oggJKhp",
  "key16": "3bsCaiiqtDWoppbLRVucyEvcWby2LTLTRjW6xHQr3UDVn83hcj9Xou2zu9foppmGyqgcATzhW91pokovJvKviP21",
  "key17": "2CHaUcGbVTUorfDLoYxwdMxaCELbkYXr39seZADYDfwa48pEYVo2PkwRm54saHbJRY64mgEBAPgPr1gf8RFycnU3",
  "key18": "EcjjGFePrqM7tpkdidjRfCAGAKqPBrM4SN92W92BaSQsUzb4fDAspA9huMkdy2RbL8KTFXDiJNNwz7j2JZBk7sY",
  "key19": "27MmVkAdyWXKewwStcrXByuSbFnfnL9kSwuH2dqSD8tFSZvMJCuGGSzVSjUjHTGviW4vNWTYL2JfpQ9T7zkuWhvD",
  "key20": "65SBuJr63RNbcxPjcVmWVpxsygiA74muCFJzorKztngkYQgh8i6FQmKFEULiM6uKEqMXNA2LB1W3FGHADybYsgKJ",
  "key21": "4ctRwjocUCd56xekWTfLS6baLazVarDbzCBDrfSD6PBoPSc4YSSBbHPUMn1JSQB1ELhFyPUeW9n4jAcqb37ZEfLG",
  "key22": "5CJXEqCktQ37EsVuEDX3tEifVUDdhbK5RNTfKYWHZLWFcgDNCxcjQW4Hnjza5y3YsjB5q4JwU8TRnePc1TwZWva4",
  "key23": "5jk7Tp8K9cbYvktsEceYKPuamfijKatrrnNrw7Fne76y38e5gnZekMYthGbhkipYgAxNhZUbJ3pfYAobrp5yHvtz",
  "key24": "3RJvcWAc1aQTN2ymHhHPuq2UFhyahPGyUqVK2yC1m45jd8CYTTL8x8Ro9CaNp4QAQcTYupam8nizhYTpW32Jxy3M",
  "key25": "2YeReHnac4235fgXD9xfToVcG7SZNag8zKAGHbinb8UrtNRo25nXczZhejM2LZhpbGtmUbXd9EQAHjEvG1kGSGWT",
  "key26": "4bm7HkbpYrn6zAsYLfiSzfMV1VMkCTUJrAAQSAdZar4UpdxDCj2fep1NprbnHW2YyQL6Fh88nbmBgVEWaUXCPGwT",
  "key27": "4Y2UPeDgodxT3hY5k9gXk4jdAwjcjUhqixCAcGWmg6rRVB6YdcMh2y1zPqJ96SWC4Ywz635gLVDCPxvrGjfEoMrM",
  "key28": "4EcbGCeNRGejNAyEY3uFHjaS7fxeZUWcfduaqQBHM11ZSUc78Go4SG9FJAQmjsNEruxsfTEmbdLyBQZ2wjhSHxV9",
  "key29": "4hz5ZZV8q5EbFrA2HVdKTbMy4dV2jjnDfe28xL5xe69dgdRZUrxUjVERwGCHhhFeMm8v3C75qKZrcUH5rCQnUYFj",
  "key30": "gPXGmAVstyzZqvfKxJoF4w1aY5t3tekWsSHCwdnb7LBS3DVb2dqV72tXXdSPSQeveHmXEVF5CgqarcCqRduehDA",
  "key31": "xy6Azk3Zb5masVWeNBXCSWar1EeC8xMPeuvCvTRkqEHuDQt8hBbJAYzDzXzMMwH3sczSosP5oCqzDReuWrFkp4A",
  "key32": "a636VFwtCE6hvXRqkcC57NMqjB4aLhCRRKHh3689o8UpQ2MF4Ha7YmYoFT9v7gu674gHbhSm2Voyyuds9evCbx4",
  "key33": "yG449n3yWn2PDE3ktuoUVxmu3iD3rbbjux5rvb2fo8rVy5sqAfxfKAazKrDy36quozFBXSMaFH6n1nNv373q4Az",
  "key34": "4dJBqMnKeTC1Ce3rBaSxxw2G6rjuaUQxYqDdmVte99sNtfk4vw6rP685qjqQZPYjPheG9CmRsKt9zg1mMRucM9YY",
  "key35": "2E5mxUa6EUv5tcL2MN1yjLLormogry3VzdANzfzKf9VacinY6ZRgzJz5vFzMKNYZujAQtBHyYB6Xok4cj7Fsj5EX",
  "key36": "42Job4zi5misvbEc1vRQnc7SrxYzTWZmqGbrbFx2DTR3AewDsGvVztFXu5zpRQbMNvM2Wt7u5Wig6Uqm2r4iGeVP",
  "key37": "3RUeZWV83inHbGzeuf4JDCvZcTpBBKwtj3uqj8vXT6gF1q1xnR8NDMVEnENhM779oHyKXsAYMNbHj6vfg553KyNB",
  "key38": "4gq543KtQBgzNp8TVCkmh34VLnpWw7AxoacqZnMdVg4Rb7sq6WJCycMftvL4uAaxdXq7k9H272cJNrru6758cpF5",
  "key39": "RJKhsZ62QbN1thWmkwCVvLh8yizpuRCxhfsWjenCa8KPe64UQSRCs7TjCW2aTa2DuY6E2pjE1cQ6FedKMVNEkAV",
  "key40": "5z4zviaJq9CNTiCqQaBTd6edosj1jWDgMV4CBBuYQZCPsKzoJL9VKTBxThtCu5HZZbaU3x2545zSvBR27nATsU7T"
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
