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
    "2kLrJ16ZR3BCjgSF8Hggwfxr26Ti45Z4Yx2iQQiFgeahAV3ba6T19uuF8mcGsdsuRvgKszYaDsSo8uZr2L4Vcppg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SjiKXMhkKMpmgVniDd4zK9hQMfGqn8TKAR8gFd89ft3vWNUHjtxFhGtnBbah8JBTFHkzp5W7JbQrvgAwijZKSgE",
  "key1": "3FoWeV19qif3UoD78CSPyQawYffkfmUymdAL23R8MjtpFM1FEg4EC48s4MS6Ks2YZsSwLMhzsfQtgtMTT7ASx8dL",
  "key2": "QizE7Zuo4LSCMbwnNgGeBEH1nMiSGbBobdW5qdb72hXHPTSRt5WxMh4cGE3ujCMBsZfYcvKJXr9mr1eGjqtC7sy",
  "key3": "4i2Cd4G49st7atweUmWBFFtinNFganNvPLy9HuoQ64aJGeYNDNWUxhmAZzxrqfAkZdPRdrVSvjtvvsXxqAJVAhkB",
  "key4": "4LK9tRBQc5pJD76kkEqP4TuQMQEzttxrDVkPH5SBfbJqheU87Qff54ETo6gX194qni74KpDtKMQiMAd1FYadzoJZ",
  "key5": "2AYo15YHibuzMwpfmCSSJFzCXynq7w8ARYt2s8MmvTUBLUSRnmqPLQFc3sTyJWWi8huAMofAbtRUZKp7THXvZD1C",
  "key6": "zxdpjnKzz8bGfa8of28kiCrBemMU9vk3dHiLuwZucuG5z1c6k9r51eBMkmHEPHKqX567eghEcdYh73LN9PhH2w7",
  "key7": "5ftqCtZzJ6zHBFhGNWVdGj5DBPy73yCJc46W3CyEkuDioYv6tdGCbEpSH7YjEKaFCcw9ZRqgik2Ptx2TbEqnjmjR",
  "key8": "QBuQddwdvKtXSHtY3CdrDSB7FbhfHN2Fs3aTuveJxhWS94KRRmdJTDhRtBABJaAU8VTtgVZ3hxM8ks813qajy4c",
  "key9": "3rUaWj8oFAr2C37kUjDG918WrfjNhTtZTyDNLtWWLvCygb2nwBx9GVY9ik2JdaBL4uCnsfMWgbVEehRtT1HnJsz4",
  "key10": "28AwiBgKVZW3vMVTXEp5pLsPPkX4cZExkLrbmhaAYApuXw9xpYSnsAbFQkjxeeRvp4usqkSRLdfA2d5mE8gEFeTv",
  "key11": "f2t1CSw2Xe6me6rhHb2gpaZ9tm1gpuuZZpVKLoJW13Udnp4gjmBgJV4LL7cCYLgdfwKzVSVxfSC4VMfX2DG8xjo",
  "key12": "3Lgk535f3DxdMKZhEnPVZ3DhZX8YvyJZmZdgiNrYcydiBPSex7e96D52NeRrYX6ND3jZ8UUFkZ16poLpcNTGKyZ2",
  "key13": "AJtMnHtP7WMdT3vS4RRscUeSiPSFDUKsi7NQPjGpaHTEVhksvt9aCuMnqG96bZPSquBpvTFyvgbjhJfCGvey6Co",
  "key14": "NN67LbRNRsQ5dVMpcTSLfsu1udPyMjhMUtFrCPRmTXfKNa6unSi6cHbd4ttKLh1B8zdk5jic8MaGVU1igcavy5i",
  "key15": "3tvsd4PKuz6YCHZPaP6S51sGrbK73mL196Bu7PkhLUtiAwuXwTrpcaRRJ4isZjGvcGfp2aqcsa6jnPnPKiDGaGuM",
  "key16": "22eCgVNG5fErazQvpCm2mpRre2n8zwnUcFBkiQB72vX1uMNV2GJPA2ojfX8LRsYWB7eSizKw3s126TsY8LtksaFf",
  "key17": "4izFRHCh5cyYGBeGHTYM1kNFjAMGnfFixqVktMxWMzy7FN3Nbe8MLid2Jd44nisEEws8rYNFig6rJt93K6UqM1oP",
  "key18": "3J6b6pMErpFy3TLXyFNts98E5JTpRsQN6zBW1oxLFpwoKMt7itYawmqoL9vB1FnqwXsGKmYo4NF3kVsGbNxDQAJw",
  "key19": "51SPoYgbXquxNm6MvgHJBV81hjBHdx5iDPk2eBwecVkHBUSo4UKuJkKN1DoJY8fDwcXRCDoF5oYcHZX9XEELRwsK",
  "key20": "5gAtmwq2L7hi929MpnLh2MjTHnvUbwy2eMWivZRqLnHS7hBUueUYP1FECsczogiWHF1ea2tknPz5EVLnfz8fHbLL",
  "key21": "3Ta8dHF5DjdV2SdDjZLP8aSftVBhjbg1iGW66WsRhYE16EqUiuJNthQQxLcgUKRg4q1hvdE5j5Q8YBLMeG4StLsS",
  "key22": "4YDYrPvATxasujvY84CzhHEs6j8pAMcodRvgTmVBqfNAjJ9FZsnCD6B8YWfvkmqu6rBKDGw1SLureB5HeVnbfcVV",
  "key23": "5NgBhuHoHEVsq3zfZyv3LnA3G3fBnbfquPWN2Unxf9DzKrPSyAFmfYZTN4Dfspj286nKL6uoja7ryfkr6ZLqzQyg",
  "key24": "5emxRtAFrCyRRBCn9M9FLGZUxudkhtDLJNDXBJt8hFf5xhPJvoqbk1QrLqvUfzmVnszDbwVhF1QW3BsX4msrX89U",
  "key25": "4KDXoiKLoi6CSbACoKFnbpPGQyYQc65oUUiXXHMujUp7njdWkiyBzenAAnVtPd5kWbWnzUhQAHQVgfMwquxCaCFX",
  "key26": "54xoZn2VfxsGHtEX2AY9ymM6yCEJuYhxgrUrjUKcNdN4L5nX2Wf61FSjWEvbapErVCPtB6EtbTh2oRVkX6Z4hyrL",
  "key27": "3gKN3maVyhqWiVsKykcXuY7tGVZQfsReSjqSdAAcqXVQyEEfJvzk9pXLJjkiugirVSEyoEMkUWLXW1j8Dr4Gidre",
  "key28": "5wNC8UhERTb6vjLKJoRYuXsmPX5X3wdY4iLpFJrbvM41EQyVXqvhntnG374QRyjjwskUX2w6KdL384W5EctexeSL",
  "key29": "39XS7Lvz2iASBdjnfFz6BN2KzLFotCRFrXrdAzFe1dsYmwbEYrLjryyfnxqZtSvreowVA8n4XYPamGrJ8bmE3FUQ",
  "key30": "2bY2u1hUh1tcxqdfGLAc9y7xq7cNFhinunE4dHd81gChDK1kt3AxSGu7xRsgUqZvVPtTbDNnSWd99qrxqCSyURn2",
  "key31": "Ve8VWHhNTvASeWVrX8JKk2SceRmcqvCMyQAQbBZ1uSXNReKCJdo8GyxmfCzpS9W6jFLCxWsjpVGGpszHea5Vmbf",
  "key32": "5A3cv4LkAMgw3vDP3gFr65uPvimprMNEDwDCimN243tSpkx7WF6YuWD43dkPWMqLpQ1raXxVXSkFh77hELvjoyUc",
  "key33": "2ZNZGju2cS9feAKTthr7HC5hzEiLc34w3dmWanZmuNrhAxrBHsSfERoCZAvQFmRbFuTcrhSuuLsHGNsp1pXCcoMP",
  "key34": "5nrWnmzARtSK8ob8mPvGdQH5Z3zG3445dwtv9z5PLkDaafuVAeqVSRpQSX56vDNXTVNomEybeoMC5TWsghhLsS5g",
  "key35": "4dswcGtCHrJo1VALzQ67aLNaBnexPRh7fGVQ1wJRzhB8fhdZBsemtLbC2ycxFPzCfNaUvzoFEhc7STKgPEp1e1oZ",
  "key36": "2NVEjLpoqwmbFHycJAA5GAvLKmfnJELtr7QTFmvKa7TScEsGp9DV7RXjwaFmrj46g7K3Y9S5nrL5zJa19Eqcz1ic",
  "key37": "5LtBuz2F7Nj1dkAeWcevY9DxzFmNuTv3vyfFCUHx4px1j2jzgqtS3Uo1Vq5oyjAc7gW42Q7qttSbUV786GtS8r5f",
  "key38": "4sVwtJRfttTE6kuWhPMyD9UC2J9ChPVygnTsyppdyGa8sZ99hp24gts8hTgcRuAP7CAJfT8oGhf68M6k4Phi12Ts"
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
