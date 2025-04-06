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
    "282iVCRLdqbtPRmMy76vidMPunnVWxS3HkG3817RUr7xPxXQb9jKYLPDudkkkpkjvmbu4eWuugCs9AiwYnimqkJB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2F8USWrYYRh7pCxDceugYyFY8asLWx75doKFq8gPdBhtsTV3F5v86EgCA3LgQuoxgRf2VgWQZhiHtEdJdDtyuUVV",
  "key1": "JXD3poKaXdzvvoi2DvzHXTfsKVBYpzVSLU7BoKZSCp8oYsRpDvgi8YgS1GYUFRM5MzFvMnxNkdqAejxh7xhd3Tr",
  "key2": "4xfDbnST2xxUgj98CD9nVLwX4irJpFQhvUccWabH1W1cZcwgU49MZmSeiWNPbvJQ8yGcfko38BsoXrYLxmdx6gym",
  "key3": "3h2KT6xJdcfECs3Rjapf3LbW13KhUAEhWhj3j8kiXngKa1aFvYUFBgfq4zfg7GNeDtWCkNnPcpk8LrgJB4mMEvJM",
  "key4": "MiTok94osxtMwJQVpag1NDi4Weu7wokimhZGYHhQZA5PtNaeeLZszCNmYZ1UxBhVHvUrjwm1qZWAmqcwdoUw1s1",
  "key5": "4VdyPj8EYfDqBm9cJ4DD3JHkfNZEfqCeePYjSBC2S2GsUPttYxFGL3CuyDKt9hC3Xvy5P346eEVXLcqRrXtcenU5",
  "key6": "FJAXkZs4bjC4RNNZBjHY3JqyPH1UttBJxWFbSfgKVpYs64dYi8BmLtBYafGSADFZehpGHppwqNYnEvzJtc6kfCr",
  "key7": "GEGYuyAiFPEqcu4Ab5E8kqPYwXUCcxCBXBeGCNTuqPos3RHjCKm8kRNdDbetYdeuJvgyWxRA6N8qNzWNJjo9z2A",
  "key8": "PjsHdAoVeq6raHoKH4RjntMcoUuGJETiX5HTvF3zn9Q1UdLR1PLJ4eaHcXcDBYMWig6iEdtvtF94gmC8ssKoMYd",
  "key9": "2BTbnnaFeCPgHt9nEfGbuSRVw4q31LV6xhoQWYtoiMxMYGbghshqRzh1cmLsB6aBsZxtjZDsBcMTfVCtwNijCNmf",
  "key10": "2Bao4LfU3mdZEioBegFao7LhcxnFitTt2gwmFoAWJ8WEJcxt1AAHun6dnWDMcQhaX3BEdubPSobMPS2FbGwAeaLG",
  "key11": "4VbE5k6NizTefw9NUvtrwjkW4Yx9gaXpdZETsZ4hhyEfiRExqR3xTzGCP37jt49riY3KTUcggXkaYm3erUByKN8h",
  "key12": "31HS54Q83xQSmP3gWAP7X1E1E3ARKDFBRWC3SBhmrs1vE8u9QDReTNze7vb3Pc6XwEXzVYazJcr2b5vXVLbqBfMv",
  "key13": "jE8T1yd9L5piaJERqdvdGkj1M7GoxdEr2pcYghFj4sY8THGqLZdje9XMs75gVLmoSJoJneR52vUvnQtZVc8rCFh",
  "key14": "25Y2F7MpK36PCZ4JXE59NgbRJnVePdTiEipAcLpmH3XfihmqLv4tJpkeiTAhewXDxxq5vrjb5PDBWyoP33ebPUwU",
  "key15": "2adc87SHrDg3RNELiV1rD2XjkctAHDqYiMzpTHRmsnQBPCkkusTo4wfbjYuGzdabprYH1PPSWQhhTVWvSX1Z3phU",
  "key16": "5F76iQdKSLwtb1M8He7JTb7CJWoYrYYt7TxSHqKf9oSiM7ZABmsjKJzob7E2145KAKbXWm2ULysS3MioUCducDCS",
  "key17": "5SUNNjAuLDfkQNL8YejnWFMQbsw7ZStHZBWLR1no1YkbLxB461JL37xNHVj6rdUfoczmziVVYGH1H8dS4dFtng5B",
  "key18": "3Pb9fGkcX1pnwXWDWX42p1yztr1vLpBMahcwNtaVcHnruUfQRXQkMNpJ6K85jFJr9zs4Jy2PAkgR16LLP9aWdbr9",
  "key19": "2sG2xVkcWxY6yLktkT2tEBzrq6ErrHbMbp21z4T6oy3kFrfhwpPsPejn4u7RqR4twqAsaxm4iUqZd8KYhUfETBh5",
  "key20": "3yBpj1MjYQLqdaaSL3ua8UFhNPa7sr1Z3wJ7zxfiNL6yR81s6Hfy1gAbHBngNq9ihggujh8gnk1oETjQV95cRY5z",
  "key21": "2nKPNhxk6Czosk4g4GpbzURjAGoENAqHH8MP2gaAjPHQMSL6dm3AfxvNJcoYWhBB9rbHecaBYgyyCwEqsmqM3dfu",
  "key22": "3qKz4QibsENHqsgmD1xHguuZae55167dQmxdSxmkZVDPx7yyixzzC1m3ibpNxoEdXnXYTEGhFuYjnqcEY3DTRMcH",
  "key23": "4zxZgxE9pe78fvftRkqUBfdq4xZ9PpMr3ygsqNJPqEWZqte8xiXUV2voVM3uWDqPv2rmtUNfLxZeut3fuY1H88ui",
  "key24": "NmSaT9LoUZpBFamhttjsRnwwUfqB2npqA2cLBSwFbpjQHAc7VbgoKHc5yT84nrfPAcaYU8ukkFmV3VMCKwLMJWd",
  "key25": "3wRGYEW4x7SSKj4WrEGAmGV5wj2taBo8VQPQwVTihXH5DsmiFAFx3NCw5F71sVRbEmkLCoQXNrSYG5QBWPu69b9T",
  "key26": "S2s1ZgAWKFZtBzmRsWonBxQnCPse83bTNgNz5RB9Lxdfosu53mAmQ83ehGTbzvBKf6NRPKBCiJVkGpSozVzMksd",
  "key27": "4Mp3DH8kWpkVRxF9sHAuy8KawMg12c3xxkNLBvDMpjWdiL1T5jNg4hCiBLuCjUK93xAHHiHPEV7tSDUjFawUG8kb"
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
