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
    "35C4EAMQ8DEwhGBKtHZRnUHnsvwjQNxakvhKTqu3BMVvgWb31iXZUyhs91rqq5BrLQBPkA92rBoWe6gdvjEXMuCj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vr1oAegeMRTp9pWf15MyRkHHYyFm4aDP1bDYQA9jPUMKhLfV7yVDSArAfkeWSoVBc8sexSY8euUn5qtoN9iFDhw",
  "key1": "2FXX5VvDobhwX84QvJUFZMRgJJtre7wAnypvdPTyfW7SfU8n5vNLijf6UwjDC2y6qsWreVvrqwCqJGchJpcMPGRD",
  "key2": "2MvycrdPCU3pvnRqe4kNgrLZrAjy42MwYFnagkJ89dUPEE1nRwtAakddTQGgjhfZhkqbrsyR7BiVUZN8yVjtvagc",
  "key3": "3DxEmJ15nBnAmjMKKSaWWNvu86z99niPadsio8uhVnnYWmD3KRwmy1svtTz9GM6iFUPTkXzPRiXe4AkP2Pr5oqro",
  "key4": "5YcHEYv9WAzqsoJeZ71D4r8Go99MscLX2DBJkk9MorS9r5PPCMq1g2Cu7BBgp9BNpAq3jVGuMjderBJTzTfqFsLE",
  "key5": "KaJwHAQ37SCtzdTPWoWjAYNxGxabrr2V99gGptxkfz74kdmDfaQqHbwbW2srSZVF1cJShxca5QnvKLWZy7RQZQ3",
  "key6": "3GyxtjUkgAaQsXt6cr7fSkBsih7DTEs45TbLvnrkgShUzaU4QTGuzktgz5nLrHXNygqf78xBqtnqzoXLgoLrv2s4",
  "key7": "3vqch1fynShgukWsHvFCqNF6fZ4gwwwSxtmHphiAgjTUysGWDXhgzLkwhkFLXLkvydt2q2nmcCLR6oBcZF23caYU",
  "key8": "3wFqzMbUaCFGNvmfThC32DjMyFFY84F3jX6GpNo7YoJh8k4TRLAqgMuPASWaFxLtZNCpbXeprs6UfkXTLa5zELPx",
  "key9": "25mx8jPTrRX5XxsNNZKCiAGnfGfE6SJsQmSjwPMMsRtJXtKvENZ5pqEcVFD9aK9NojT86ij9eeGrmkrd5n3gsQ5G",
  "key10": "HGUD1Eg7vhMQMqqgLFBE5fimfmpZD3pqfCk5jzPV5g8vTRx6ZCqSoxSpc76oEQHtczsRMy1Sp5w9JkTUeFhcV67",
  "key11": "5Duf7Ay3Ryyde69wVV5DhFf7sF5L2XgmYP8XdnAtjafCZfxN4kpJSFBftmE1mvcVzZpzCv2ygxDWZqjBXJRa8uLh",
  "key12": "3YrfDmZxGwfq26Z5BGgRc41Uw8pwcyJC2qyZDPff9QhtZFGfKUpswGAeY28GCtiNrWHAC3Wsz84h8irfDQyd7tp4",
  "key13": "44dxhwUef8Hexr1TFFR3Vc1BFNaZ6NYWhjNEcCbW8XZMdpg14nGPw3J1vgUEXPGyKXoPrpPPm7EKtUneQkexuaGN",
  "key14": "2E9pjuR1HqYdTvtmKsb6sBa9G3QdBVFa4DVoWLPAUk2fqCeGUfVaUwv1vNmEgLHnzKgzdCr96ED5kCwHL3SAHrxm",
  "key15": "F6PSG87jmVvXEyaXQ1bFwe9wWVgut3Ffpxy9z3fLQikSvqWH1uoQVKPfnVrxp5GVCZqayTqtsfCGU8GMBoZWWL2",
  "key16": "5P7rAjEqwaY1QtvpegaUEJ2yer66zRu572aR2xmack6MJZTfyJ5CSTDXJKKcoN4MyzjChHbBeCutNJPsUcHhieCb",
  "key17": "2YZWcLyyuoYEDFtGCjNxZLhDanGAusfe969iWnTahS28LgqdPU8Sq8jQB8r4aDioAci5rpRvaf4QpyageY9ZsC7i",
  "key18": "3W9RJDDLnTx62iuqWNNmfGqWamB7xR4kZ5TxAhPJ5hpd34TfFchLeu9JT84iP8h4a53e48yzuYYE8YPdDBs8WjV7",
  "key19": "57qb9GpCCamwXEWtCekZk2vdAgckYkwF3K7zyyDLGwY7TTH3WG9HPBES1Dfj9AvkfcwvduMToX45c7TpZ4cyAFwd",
  "key20": "4yJFXDJo2bDWNoGWSQKaWQJ8z5Chk6zEnCsXPCY3AjfQxCaMn5JRcWxxiut1CcwzKS4iiDUq3Qe2nDU5k4W5Fvwt",
  "key21": "4f7Fu8zRsPtFSwFD3Rx1F8g4JimUD5pVp4LtzZaQgDdrBUDUpApZTHycFpfrgLuSQQWkDY6HhJTwgHFUfKJ9AshJ",
  "key22": "XoG1wPKL42HwBjf281kM8pS1DNLZioPYyo4qsHW1TUpM48g6UVynbXGDjDCA9fdZxsTbtr3ggkGJnuCUngeU9bS",
  "key23": "61S7Z5oFFvwYGruCZVQ7jGdfsHhCmWKGJMyVpa2KyUjUFTnV3wRsRcz6mFNWf5i3p66dU2br2FkUj59AAD6Ntxgg",
  "key24": "22VSAMSwUned1Q4ry6YpqEgQsAqnwuax6vsKqFhCETSPKwKvcn1cs596jD5XhyqvL3wUxSfJvDRgY7syHHXgZYYf",
  "key25": "32aib4919Z5BTXdS2B9WxBj13X9nuYmB4qomLrm3YJktusWt1VB1r482rr53AejN9PSesvUCawyAVSn82T5WxrnN",
  "key26": "67iyh6PNxQmzmjjwSmR45W3M1QmyvCs8gy1T43DqM8QaXmyk19K2hvyPQ7KMKVuTxFLLjy2fxsS9LE1sGQuz41Qz",
  "key27": "2M6rsywHSVRKdrHnKNdQ5Vv7cYTBtnagNuFeXTVNjM97NebdNx3b32cPjBGprQWQK4YxoEeg8Ps52u9uSM5TTFQj",
  "key28": "4AM2LNXm4G4PBYT17kQ3ypZTEowRYhtKjaExdprzA7JKEEX7LuRjhScfEFwGMG9pfWjq6PSik5ndAy3DeziQtep3",
  "key29": "22vZ9Hrw4ssNNZHku9geszjvSPBoApLJgoL6L85QneeKqDsPKsebqqD6Xq6kdVf1HUnEEuuDxQjemVEEQCjijxHz",
  "key30": "joboF6DybVkE7bdxXvwtqCwLeA6BFCVKvfP2XCvcSTmrRMVrJ43TAbghWjEWKSmrVk9dyVorAiCGDoB1LzQkCbt",
  "key31": "5JULwq2jTPvuC1BUGdy6UWKjuqCH859FxaKsXHWiAVjwUTBFRHsjtMqFKQ13FhYvRZa5SuDk3uMTfDFtgEyogQZ4",
  "key32": "K7NrvWf1zKiSEenonFVZ3eqRTrwJfsx2UTPLL8r3YUCR7kfsdxyZoxtWn4ZP2FfPGhjm6aBWtQdQGPeW41zMJ1L",
  "key33": "ytjDiPJaLbnSEiQaBPtR8RhrBsd8btgQgAbqb183kraJkRBBAHpQ51X48McbigvccKVoGJ4aVTxgNFFP1xVccpM",
  "key34": "5KZbpJwwkodjCxiiToUC1vQendqHwQZJYmntN58RLBXdAPC3M3JzakXdHCVFErAfWBy7rhNjKCdYh5y6siYwnCLP",
  "key35": "4mAXvhqftrX2NXSVdCFN5xyBUTVqMb3NtaRd87ATGUdFkz6qdCQYDwBb2gJTR6vp7yUXD8GH4SxPQevVcTBQhQKX",
  "key36": "5AuTqVafNwZ2egbFDAr7Y8HymovLQtCq1iJsLZCsHdVbdZyqoHwVjHWsiDaFC1W7G1QiMypJ6dknMSFMP72WK2Sk",
  "key37": "3owsCk6vVBK8TNuL5YZC6ypWrcT1CAKZhhDaaD2iVUzQJrAsApusSg3tHdwKz2PGznUWpsB6bjnb739aDDWiNPBV",
  "key38": "5kvEa93FfPzxuLfWmgYAToZb4wWVWYWx8BJqibSa9d54k3EGa4DiXqft7t8aLpAJP7iyLi1nr5Dkwb7izLsxKhxY",
  "key39": "46Gm4ciZa9axuCwFPATVGjL86FMVquCBTNJdTfrEotNAnjFXDh7YfTwjVG2ucZFhAVC5WWQywZFf87tA4kuWzKKQ",
  "key40": "4JffzJivzU21pBRG8MUUVfyhLvM5eiZRCSGJLQALRtdtEdrMUyrgXHxmXRfveaEERda9mkeTKUsd4kPAE4ziA7zq",
  "key41": "XizmBURL1Qt4re9aTZnDwAXP1YAtiZm2sWaAyUzfaTAugbCdtQGdnZWLmvWu1N66pAzDg61rFinV41EfVvivxFy",
  "key42": "2RN8nnS72CTvVyuTv1KT17jhUhghHNTeLjCbjmKNDVSv2qEQhdU8urCJP4iVqRvQ6SXXsTCYvYqvFbPqtDrvEzcE"
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
