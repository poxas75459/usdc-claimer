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
    "5N1E94WNvMr9MYxaDjaCNwyF5Jrfj9gQWs22hyVTtzrH3BNotWskEvp1Ptyqd97TEiWWDGhQPQSQhEjMPfa6ZE6S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bYRCfD8rrPUrQiFeZE19k1s83y4WrmXhSZtv2KrTC1wvmz6E4YPMCx3PrUVZ4YFgN74GKAs2TQkJ58eqYrqppUK",
  "key1": "56Rdj5GQps7NSCCu4UjB7TwRV3bccp9xiy3sB43LYPo8T5UFYaTJ8SDfssPf8RrxPCnwiCRxX5XcujL1qfKBA7sH",
  "key2": "5HjuCdtHF6mPoakETYFRuzDxNfjR9E1SQRwnKGCWcrf7NXGG4gwNsWwggvezyMrwwH3hq3nMEZswTEgTpSVUkneF",
  "key3": "rtwZF5HWUjP4J1uTjBRczzHDt18upAneSANv1EbnqTWZH5PveRDajwiJCi8P42vDv7P1yGEjoypEUzvcKm8YZtu",
  "key4": "5jg2XwEurG6j9jgj6LQanRmpHkAgJDx7S61vehRbnpT16C5Unw1Egw3HBWB3WFR9BfFqakUrLdV4gZTfVBEhQiQN",
  "key5": "3yGDt5B7fP5eQg1iafPg8fZSKWNZE7s942KhU8pk58LxkpmUc6kB5X7XJY4DcntMyAQKXA27KgwD3R5AMNzuoCtL",
  "key6": "25wQsdXcbkcjiEXPMqc4DtHUoYHK9s5p5XhrUaJkVo8CkQoPXjmpc15ku1zhXvwMde4KFcofDAhdvidtke9q7rem",
  "key7": "ZyDLFSWXHAbzbtDLMxY7thhKEJPoA1djzn8YLMpriifUjSENeP1Mp8HDFCoU1RV7ttWCUAdDMRbCVUXyYr9iNn8",
  "key8": "2ALJSa6vuW4xNvdmnscPX8U5Tnqw1YBkgghtnwPWG2bujrkZJNxez9RXyNd5E6subTRc9J1hiketkwzQrWWnG3g1",
  "key9": "58usnfJ2hEMFtc54Xfyt3DZecBsgQ1vwZQmKeekgad6VQrb3v7K8E7FKFBoJhj5Mq79hcgcHTApaR3gc78WnQTnb",
  "key10": "49gRimLek8g2DPyshuN2CcxQuVexMfk9YcBR9C6XS6TsASVB65FiL67aWNg6rgeaThJCmuMTgv9fUSDJWZQ9k1ba",
  "key11": "4VuakAEsMPSo6FVf7AERXctKhpZkwmsuzbhq4ZRCXrt3HLoKK7zJfmKzo3sqWAgarYKnXg3KPbdMC489WQNkdHqU",
  "key12": "23eiEdgbnsWM5s9fwDFSkoU3Qa1zctTVTy7ioGvr2zRCQvm1aXkqdK2ATsFZqEysdGRWetsDjFPjh15XCC6SKkvP",
  "key13": "saGPvfiCr1sh1vpPUgzeb185zVdH9LVxaoaMdThs8AatHnpQTAjuUwA55spXuYp2vV6G5oofHzD8jnYfPb8JiAT",
  "key14": "2ZPUwWhwNWgqLyDqApfEDpkLytNrsKvUiNwN5fVzfZfQaQK6Qf71JfK2Yyk9q3rbHYvj4CrxuNqzzzJU87rUhDhG",
  "key15": "2cp84Aw18BoZwfbbpVkK9KCQGko2LWykHL1EmckuChpSozYGdLbZY76rDCPHTy6VQreH6XZJxJNizr593WTmHroG",
  "key16": "GzreQrL22xjmUg737NxEqJwugKStdscxK2tA96UYEM31hRBu8t8gEprbVBD8JfKb1P7oTAVDnq5NpyahrHXLwS7",
  "key17": "2CAhFd769aqsqrNkg97Yk4FLUTPTus7Wxe8nDewqFrQ2xMWc1nmTthWG8X7Yu6KQvejmekbncK1WzMXHo3hhoJsr",
  "key18": "2JdZFoNr1mY2kTuJKVLKz1KTidoLTVg5Vhd8G9ZmoAxxY8YRL8Le1JafiAZwFhbuRzW1cyUnoqf5yJKo4c8bQwMt",
  "key19": "1NrwgXGBTCKhnJY4mzx4HakSMcmEVqkuSwwnDD5pzEQEYjTd43eo4n4QFRsXnbMB4QHjsZV5WUkY8x2UZkCKD9z",
  "key20": "iBrMAmSepaMsHzGxT9A6Ju5NfjV8GXNM8KPbzaj3uYqbf5A1w5ifNRoZg3Wtiu3PZQ8fP569YtE6kFCNkiSWXga",
  "key21": "2qyZ4jZWcf3TvGuRGMPoeaL72eRxhMnmx6Hr8y78DKZkPkNNJH1dCsJ2tdCkjow54abKhDA7WmKc6ArxYwZ8k1Ss",
  "key22": "3QCM97nZRijShr2wbJermufBUVx5PmRu9j17ichz3pawFmT5AiDf91Z8ue4RNXPXn2133163b1npJFZMbnzptxKv",
  "key23": "3TbbMt2omGNV6NZiEpDEysbJJXjUZKbx1PMsevxURoUehboF3jX6oVcnWBm2He4TpCg1vqE7LqwFpqtrdLcc99Uo",
  "key24": "2owaDn5KmVXJDRNXZyNQR9m6PdrUoiGqWBQY2utM8BdXL9rBHyuKY613jqGX2mugDm5TYTV5PJD7NhrRkyjry3Yg",
  "key25": "3xfcWN8uKCssEZDzQitodc9kc1KJJgGjqy8YmPch6NZjnBdv9LD5i4Xn8YQQSEU15wkwhPrFuCvDJWuhSMCuYzvZ",
  "key26": "3RcG9Zg7WdkmhmJtUzsFfPHvdHLXzoo2UAdErJLsSVPjdACART11PseUpoqLa247SiYNirN3UsgvbGxEEhReF1Hh",
  "key27": "2ErjpEkgYb2zMVuHKzYYwB1xRjqK7ycseWZR7JXdx5U2U1eX7JWbd24osNZRURTMK8ean2wQS15mMugMDajvaYPZ",
  "key28": "5AxtdvGwG8HvbukfKyMyGPtsXo5KEk17PJn8DDttbfzfXxdrFB3CzHGA3HzJfjwtoMRnUH6PP134Wan7Lu2zoywE",
  "key29": "4cAAV45vFRthtNCDTHtDqXyHg49ft3NhXg1DESCkeHN3W9DM48mnNy56bacjrvPqjUbcSspR4tnTv4kobajkYmkh",
  "key30": "5cEtNVGd1RWzWSD8gTpM861BCcCu6tTqiZyj9o6k3SQGkrcQ4UogkWaXQm1S4QDH5MhGsGw5oCfFnFyqfaot7p5m",
  "key31": "43EFGPYztyxZvnkr11FxHLWeQor73KGrLg82zfXf2NCDWqZvpwzgFzuMSBKrm5hafbpMb1b3uzaQ34PVeQhCLUsw",
  "key32": "RecT8JEuGG6KHiNEy9xqyQ23otWAQWp7VKDgyPPHydwdmeJ6iZb5KrjA9QTZgcrF1JPsLVQEvnbCwnWGApVu6Qx",
  "key33": "2qnx8MEn2cFSzr7hw4VyMDG9MNP5EEu7qMa9wnDH8dKonZG7ojXKWLhW9KKkbzQhnpdLG7myS5gt8Cnh8sBNcg9r",
  "key34": "3BTYaUt48U6aAd4KEpVi8HkLKAiEuGmwU8xKkGFAKdKhts4gA4HAXiyLHEbPJAHWyPpg7c7UgFjticvnTYmMLSvE",
  "key35": "tUBznWLTeAE7ta9Kzp1tWLjNpNzcQGc9HmAYERBKEanSj2bshqociQewpNNK7kotHRQTJnP8kvzkF31eKWBv7CK",
  "key36": "4cZvCWeJngvTJtpdSuSNKtcafsRf2kqcscK2YjbV3QkZMMdtcuLSS9cDnnXPKocE4D9Asfqd7WfbW3bARzXenqzw",
  "key37": "4uagA1t985he56Rm1hrGWMsCEmhec7au86vURn1QNhYKn45Stc2eFXNh4TrhTURXJby36rx3XH6jonjWbieUXXWJ",
  "key38": "2mF8irVbYfmwoeFxVnTUZxWCxUFKoxYfyTJLPFJWwiEismpYZej8RCUSjUUtDWhh863EuKBbVEJkfNQ4yjTLF6Us",
  "key39": "FtDWehHbPoK2FGW3SCfqCWgp2qrzciEWvp26RFK7tKaFWvgb6n9w3BBVqC12RYYyPXHVDv38Gua4CQAtEKwzhkB",
  "key40": "632FqefHBkGTvoKawDU6VhcjiY2xr7vBLpSfsQUsbyjzJqj8astBdrtDeszm5ZyGw8ENVeSwcgsHTUM5eh3JXGCK",
  "key41": "c85tMwnoofYEjbanL3xC5ogTjtrTDbtATFS3mrBHnUPvbodkxmvbwHg8HLjBnxDjCsPUeAf3HjRmWBNkF9s5TAw",
  "key42": "tVjv6ehxZznFnPyj8QvqihJhRvVT8KZVaMFR23CXMwjjiePWw2YXrk39B4JPVC1WAF6nVvhNjE2xMFjnKH5obWD",
  "key43": "3DsUccaKehSp4UyRrPyd4Xu8s5DkxET88nt6RXjjnRVvT1bvv9MEvRAM5tNyWzcQitNNvuApYZ7QKAytiKZ4Hh2h"
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
