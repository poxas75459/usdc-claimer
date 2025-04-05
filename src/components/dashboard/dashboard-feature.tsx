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
    "4jSZjHE1aoWm2cVCTnapCqAYcW7Lsjb9vw5QR42MHALraovDRFYq4WWiGUqULXdXK5f1AxJXBzysjBpHZj91Cxh5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sFE4W9zTBeQpExFwcocz69uRW2mkreNb7KbNpkaF5rKH2DxCV7oCUFfVHAJqvn393L9G7P1eqEotbrVh4fXcXTY",
  "key1": "5Z6DvPRoefHHEyMxiZUGnhTV89UT8C8maVZasqZep7A7Ry5gbWWZSdzWSiPU3a4hfBf3girEGm4Ggc3CqAaCV9wU",
  "key2": "6tsnDYm2sgzjJvVhAgNRAdL6pdsdXqKnYasXPfauUWqm7NgAS3yNkyRCHb2HhwQWqraf1KnqB4DHNELvPZ1ATB8",
  "key3": "8wkhhmTMiBbbkMDC1jJogxaH9A7vk2W8vGygP3bYv9fMpx1asyRdknPrN3TBeX2hkY53LWA62A1TvCbL2vxhUdg",
  "key4": "66iHAV6SYdp5Ry6UXRh4Za52t2nasgAjLv3hj1s6UDgNVhADNfHcjUZNN91xm3RAXALP3JL18Nuy5Ykig5piYXjB",
  "key5": "3cj5EvTxgekaFnTJCmtAb7NjFq97yjqWKn45HRQG52Tio3hezH5HVVCzPcF1P4GniD7tcMjF1T7UPXbtF6KUdTC1",
  "key6": "4rrKDgmn2Kdd19Q5bP9r8xHxMAf96VojWEBoLveJuHKarX6QjGSMKPSVFiaMos3rDw8854FfofuXQ2bw6GTyngHb",
  "key7": "4tADFk8kghTRFfayCpFREgaiLo46pJyvXXNxSiabPY764TqCmSc7ypduYsB6rrjuaxpj1zX1KJktjuB2eKdrwCWH",
  "key8": "4REEXPXampAorhkFpi1tFzz1bcsA6NtHnquzSh8NA7JuzJRLEji8vd8YZGPXT9qzpEpKWacCwCJdTmqD6GtueGnA",
  "key9": "4KC39bDbgTvqbPzSSbi4T4DrHf7cJzTSHZhvtLHgZs43GJwXWAiYQZYvBGa2wgm9NAR6BcYS6TKESRzv4AAYR8Dx",
  "key10": "3qqr7jcWQPjtrBLaAs4BCqHWNAvFxJFdCwc7fA5V43TP2PuspgAThmHo5yvZ9AwSkHP4gcpzid317aaBATH4Gzgz",
  "key11": "4dEQzWZjpuu6kwmLLLNUrkhvjBq36YK5s76p5zoaTNb7ox3H7Fx59Vs8TMYtzRsERfJn7VyYU6gi8S8YUA9qRJHn",
  "key12": "24jbWNKqrqNRp3tdpqBegggwufAQQXBoUGS2NYCNzYuovw3ZhBr8wiuFkzJhMnLFudavPDtb6Ts6gCCUvsCALmHU",
  "key13": "2uo5LqDiesZUikHKJH48TBTmpAhtYJTqc1g9zhTchpvpCYp99k1KppBif8giYrjy96w1pNsqiTSpqzj7FXJqrts7",
  "key14": "3aP4VpJroZHh13o7waVp6Go17XJh5HmGG2Sp7CCKxN9tY78ziuoryUbN76kvSwqvRGJNG56dKFou5Ugyw2AZGDWt",
  "key15": "3oYNVAnHyWkM4Tg9n1N1kUrgZeb9esWm9dXZMx6RpUufLm3X2c94PLh7xeAoR4Xo9YrFu3vXGoDPEtBbGx2tHrpX",
  "key16": "3gDXLkYJepT1kUGdQTuP8YdSYk614KKtzJ4cAczkYidBd2UTdcWESB6waF3cHfcQijyvv6RxpYdRNSdxWXSMBRVf",
  "key17": "42bYzAntT9HNXkbV1WSrM1ctaxn8udA4RVwo8qaQGp211MNe7NoUWk6iFtioppHvacgYbVXmeeK7VYKptqM3P5wj",
  "key18": "5Pnkxttu7DkVq7amz7e3FPvk1aX7BBhqSGNnWXdPqcjcNjoZU26RtHWyAJxv9jDum368qc8deKHeywN8ohFniVbt",
  "key19": "52m4FZCi5sp2aKwDNSfPgFN3skhC3Trk1UZ7zM3rx1AgADUBHbsPCoHLJWu93y9EyjXpnjH7WquSe5bhbUsa3DUt",
  "key20": "3D9SwFF9YGyU4G7KDC7sWDU4umrGUUV5US1u3yh9UQr2M3kCsMyAuikFERfvr2xLazQuS13eGcBhCT6rZfsery8g",
  "key21": "58eybkwDT8NkuUAD3UznFWE2YFfiDpWtHjUas7D6ALziawev9AZkACYP8ZmUHivHPnVCGSUkdNy2d3XE3ey54p4t",
  "key22": "4Z9Zh5S8ygDS7u18psDS82nuG53kNifo3vJM8rJ3M15qAVDiiL6WHapyoNQDeMHm5zrLv3FrGqRmfPT3VXRAh5xz",
  "key23": "3QAoudx9LBM1ZztT7EzL627gA7GktJH5CxgdXuNnhdL1qnerCGEuZtzDjzvF5FAPqu6U4K9L7wrgc43zMc5QQqrn",
  "key24": "3dRfTVRhbox7E2ZvVzMA3FbNW9vyJVMqGzM9Mdp7jpfzWDsq8zRRHzzXB3LugrehgeBaD9mdNkL9pR2RnbpxRwdf",
  "key25": "JRA4FWGn7CjSZnMDGbYpyHkgMdMpJDMWyWhDDJGAav6sMkZV73ySyPB1SYDERu3ifLgVFefmvuFjbVVFG6oW8Qh",
  "key26": "5ZaVNnVmjoU2gDPTFyyzBiUPFkfU1WBKGuQXtraG1Hd7oTeWFNVcvtYWu6jCcUD1TCHGGUWA3Vd5aiPWgd2c5rPL",
  "key27": "2WyPk77AWm63jqxPbe81mccDH9mmKygkUig7uwv5hctJU7PofT6Uy6w4Z4oCkbXEfE4n4Es8nQVUe6Ai74gTLqhL",
  "key28": "5J3KUQxEW87Qam6thwHZAmubcP2bvbHpAHcLmnLs275PokDjU8WUuBCdQjEwT22Mtjk569yVB9taH5YJzNYVk7FZ",
  "key29": "SDbi1AVwPxdip5KY5YSZGW95G5VL5J9SeiuJ1Qm4gMYZegp8jPXVJJpbzyp3ww419Msi6F1bDS7rR98WmvsoDrA",
  "key30": "2RMBqaknAnHa2z1R2fJL2ytL2GaM8SuPvXB2AYozpqeyzYNahfNchH4qzzoBGPjpF3fBs4a7JcyHVQrVtc6NhgeG"
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
