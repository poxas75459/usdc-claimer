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
    "3tBiwrVT8nzX2oHdQq7KzXAka5fmdnXGWjKw6hK25qhf4CQWfxdpTESxvgHfkeMGpodw5C5JfQuGhxAB4SQ4q4HD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kVykMkDvZBXJLLepXxdMEYJe6qHb2rVZq3pNu7EAW8jFyWdbeZWWWEaNTmZnHnTk9dv3f1gHS7Cd92tJAFsLUa4",
  "key1": "2dHRasxdobpbH35MuX7g14nx9fp7dj3HVhhEFgCbPMZC7fR6xRjPjbunKnF5JaY5VcKRUKn5NecjRoC9UWsVzT8t",
  "key2": "2xRWGJwhZTxmXMohsPngrYaCemCJP7JvTkFASCePcHZt9vBBJCiExahRLrYQYMqwvFa47mAj3UUxzZLVUemWyJhy",
  "key3": "sFnc4iJ6R2KJi9ZZteVs8FrWL2BCZZzz4Fxv4Gt2PbkasCJ2cSY1rucYUVqEcvMWHR95VsNHWGBFyXYSuDHgXdH",
  "key4": "5vvAzUiGUomagUDbcBwVCadgsqzC5tpaSXcrEgrmy5nS66zS59GxKD5Zxxk2YiRX7jtsvFjTjfvv8soWtUCXL5mL",
  "key5": "4eDtmhvb9uDcDP4WTFg3xmtiSc5mLb7j2SErtBBCtBqtvsbVGHRkvm65m1CQAAVibMFPY1ALs7ycP8zouvhEZcdn",
  "key6": "3GgjGNmXyvgP7ZHqmo5zJcDokHziF1C2Yc3qumLbVCXkuvvBxGBaZn1NvYTQe4e7KAUwkQqQQiq1yizLU4qtpu6G",
  "key7": "2npeZekPMyzsFTun42ez1TEWEZG791RF9Tt11FR4tk3yDieWLjEkYMRRBq8TszahvRxX7b58Kc62KkVSMjr71EQ4",
  "key8": "2xTRLCuEdGMSyyRxXDqsYBqAKgnwP23WyHPsaorVeJ78bMZBzWEUsXqZJBNd6DQEmoMfLCiXVwA8EgTpaCBTeitC",
  "key9": "fWwtt6zsDWj3KpcaQdMqTNmyvB9Wvoetm6kA6KEaBGLbDCT1FruEnMRkfFPAHRhsR529w98pNYfiCP7tNqAYWiQ",
  "key10": "4qwogb8jBeAaUDCZqscH4eQ8vtGBMidKBacNNYxpmiWgBsECWXMgpkvLbuZqCZbvcFCQ8ViGRP9xUsV3XhNddvgE",
  "key11": "4jtPEFiJutDddyaVkkdurhjfsN5NjqTrBwxPcnvVHs1GwNzwuj2eKdnBC9aZtauiQQiQ52fWGqLaRqsJ25NWNm4q",
  "key12": "QsonmUvPwCPJ2cTweNaguZQD2Z3HS31sNrxoDJn2Xjphva9VLagBA2uBBZzqkQYQECLND81n8UmvVuDgChW9jFn",
  "key13": "4HGDBUA1ig78qRax7h9yDHnCM84yXYkUNFbpHEmhnuXDTg3ZBDrh9eHivvs3uGJCg6Qb3UGMwzxhaQ3dGAf3NgsM",
  "key14": "2t51KsQCajdxtX4jKEgShqVAeBoEnog54jxRzM48wiNLdLrqY7k1gvGBcxihTDpmnPCCNTTQy6ieNG1xSvuoZghB",
  "key15": "b3vbJCZxz8HTNfGj9sjhL4NkFRCewRojvGk8ZTEfNFtj4ssS8RsF4qNY7ivXEZ1SNQyeUwabQZKMWGprEyMtYBa",
  "key16": "2kP2ihc3h1kpQgmeXUm9UiMMkCPuY5i5YpG5aM1aSnAzSb4nmbz7rfoJ9g3Fa7zQeFfQ54odQ3DZanNrmK4bw7Br",
  "key17": "2LHFKCRXntnKkE7SUCiX5Bas8cPPVQYwJ7A3YwQ8Q5y7gxeKGUn9533vpZxSWLLCLAEt9mAj2ToEsEVygeeeNyv7",
  "key18": "4WQaf5sAENpu62dFKb3iGmpgXAx9CmmPbA8QJaJMD8wgJrhYhFe2eYobELGRCzPT8UEjJumicmMoVW85KoovusPu",
  "key19": "T9iv2p1eV84fXhJ7Ctck8Z1eH5NyZAmEFii6mWEVg22j6saoQbzcjJh9Gehd3Gcn8nYVApppJYx4Ri3PXsfFW4r",
  "key20": "2FVz1pH3McnWfKLFxi5vdi1GXrZT5peZ8dGLP89E1Z6Qda812Tei7YximqnwtBHqvCqYsZdWe3AT2EAFnVYCmjS8",
  "key21": "4imLqyAK1rSDsFc7P4JfLGxzU6TpeDg2nwe3ifumcWykmkJusWbBjWXsLGKT7MMFXcnp8tw9TYnwzmcP7BUmYHnu",
  "key22": "3gRAhmB18MMnyYdvLMA8fLoN1ZxC5gfTs8vhqyyiwod1WL5Ap2ADHSEeJrybmynLG64DvcKKrZveRiNcBNL9bF2s",
  "key23": "446N8pZRBxWobYK4jMqQLbS95TWoQVygfeQdAkHgevFmPFjTMtZjZwAx3fknQZzn6tUEBFkJ81bKt4Lkvf2Dcqkc",
  "key24": "2xeYDADg7FtKoDRRFdmQ3tSzccV34nxyRbYcD2D8W5VKRj7oZQV3caWPH73Uc5NXxmv7Dy7goiQvkWek9YZgTJLJ",
  "key25": "5CKbwJRC1eVWhw7oBF3ub3Gat2SuBDjAGGCSHK3KbXYVBGpoSaxa4sN6Qj5cyuA926o8gpFLJq9QVKbuVmSPk17G",
  "key26": "5bPC8uN7dvc3N7nuqBf3yoZTm5WEJmdsKb5szFcpAWPtfgwr1YsY2zKvzZCeLrLMWPtgGevZNuV5txQdthDpFqTD",
  "key27": "4HGS5gShrYsJPiKDziYWE6B3vWs1Hgc2rdTvWjGzY9UZp1v3cmdkWrFuyTyARTfkJ1TXoqaaVurTe5nkwKLoWq88",
  "key28": "3M7CMRhMgC41zf87ivewHo9bzdBf9sWR9tzUB1UjkninW9uif7e4yHkTNnuNpMreqPxoZWqyicU53CSpwUsLJ1zR",
  "key29": "4rE4qaPodJmZ5e752cvW1Gb9849zPok8dKPcBhRD52sa7PzRTitGi54Bwu5eNnWW5HmCxYwWxgkiph3J8vLbPZJS",
  "key30": "hhi1n2txT1kLEeHLLPcTfRTEXi9SgQx6etjPjKt1sM7CZLPWJKCagkqGremjvnndtKRUMZgXehjCwLMNsaEnssW",
  "key31": "2scaPtj58tJdkWUmbxoBNrAemkW2n5kKyFQvuPxU8rb4ZLnsjjUdVHkqbn3qHZJQA6m4xacUE6V4UQUb224Z6xcZ",
  "key32": "4AnZMNysS75q1oc4g38zSysU7xx3usrS7i8smiiTFsm3eQr5rQNCxZJdBDf4vzwpNoMwW7eNnYq3say2oLBhWWxm",
  "key33": "2xURW6iBcSyDHJgyfU2dhxaKEXqvEnVmYcd7YA9nb9zMGXUgTuuVXhut9yEE3NjbwbRGEykJBED9sy6bj8gtKRgJ",
  "key34": "3shpzFXahpSoHKihbqLCZLhFsuPxf7KkA1JiUs7cvWWwmreHjsnEaEdgo2dkpcni6TCe3crn6QF3RowTSixDDYFY",
  "key35": "2bVpBo8o5wPsEiDzi66sHzrXdJdt3cALyMjmhmJaG3C8xvUghrVgkpo1MMCFzfxr9ZmQZvfLLoiDgtYTX56Nguzn",
  "key36": "3hdDLYc6uJXB3j6JnzF7jw9tZayvcnZBnEQJL7NbmEkZnNz3Mpree8DYD32XTG2jHGBwFfagz7ip19EuNsBnBnmy",
  "key37": "79nWscBoBuuXr87sSCMGmUiDREaaxUXqPktn9d1zx8WMnT1Y8cW7QTVgp9sh9Lo2mnR9tMs9AbAwievNYwfgrvp",
  "key38": "5sd5qhVAW1sVSTKGw1TMXhozPdm7SqFXRhmcEMXi6obf3a2nFyt6JB7BKn7pAyRLccJSpofweUrY4QTZJCMVkYro",
  "key39": "2tywfd6AQjxsFpH7J25jaWpEaEuNCv3dT9xCZEEb6oj3FrXPvf6F2cV526LB2HXRiHta6a1fc6r57QcpaeBbZMmH",
  "key40": "3XvHk5MAomYU7yZPBSPZhdEeziZkZ53rJnqvSAz1wL5hBrzKAog5xme6H37CJs1H6bjRuCJeeu4k6ceZXS5mGRbt",
  "key41": "3P66hwRWUAKWYTrUtqeE1PRkA1uYUmmjwSkNtjofYARTH7Md5gD7PzaxTckesa59WNATMHDW578RNHbsYHpD2hjf",
  "key42": "NSo9wJuTWnT3nHwmhnRcddNEmRPVV8rjcsX5Rcfj8zEDeH4QKX9r4CeqxvdYSJTcdArspktECf5rm4stpUfS3SV",
  "key43": "5KCFPMRWxUZnADroAtWh4mNYoWXdR5WxyRrfsJQUJr9aZoiVZZV8LPybomBYX4ETk7P8Qe2Ja1jTpPk2j4gTYLDi",
  "key44": "4HTkSN7PCnuUSa8gv9oFjcodNdWWBMM9D9jbQPWxdJytmNQA9QwrHqbC4jRz3xLY4j8wnrPmMR5bD8z4aQK6oTmh",
  "key45": "3e3dw4JwgmksYc5zon6Ax949swPxBWJJ6EWXgNNHpMGeBPfh34hFDzXdpwpAXosvfuwXhUpSoZQigVHhgdaJCvwD",
  "key46": "4r4wBqcGsm5hkHocazpvLACw6mo2puv3Hx3hS3W7NBa3S4MG67xvVXrDNWeYrdzqnrRF9MbbTJqtaJujijmQYDTs",
  "key47": "4gtPGpJUXLGTY4eSssyAqtdvjCoZEhvZRmh76Nkh1fYtvfetzWbfgDuscYVDRDVCXE3oiDxYkhv2cKwRPoEqNuUt",
  "key48": "299J8qtSaueM1LjtZcvY8rVf2FBqHUrZfKBLuvhxveb5dKzusph2AT4PpKqCCdbHsJoRprhQRSQzSaaKNBcyb9da",
  "key49": "4WZ6t7nmc7RKYYp8hGwWZgFboHLtZnyEtSfH6VJfBVU2MKZnCNcDKo5yQeLYVAU5pzKa8a1mTetWiNtQHXDJQi4t"
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
