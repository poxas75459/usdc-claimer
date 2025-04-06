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
    "2ijnS5onQSXrgokKxxWyb9bGMknkr1hXDGpFBNmf7optVbr8vnmdbki5evh5xEhh4PEKUDi48brZ4w7hrNbt5M5m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yy6hmaohHcBtFdpEYqHCww14THfuSzNwwVyKWeXr1DqTxQqJPbLsrTXCS5bhUN5DDEQhvF3wqw2A5BfPfJRtFbE",
  "key1": "24iho7q6Zp99FGvMTSuAo9RQ1RSssB6kAVZXwC2Ew8XKiGvmodu4azsrLMyPMmSR3ythouK5rdLBUr2zzeNCHV4P",
  "key2": "629TyBNfrwkgqhSJQjzRFGZsqPoDSqPYUrDn2FDTBL1Rbk66tLXB9BYui6ztB79thT8Xai8Bdpg5KsKwHvtrz149",
  "key3": "4vctBx6uK45cjKUz2iZ1pBbmGwuBJhwC3YpeAm5DArfAeRJxxGdCTgJ8wJk9dVSKXcmaTYjjk1tk1qWzWsZyqMK5",
  "key4": "4usuQCDRpgdF7DzZvT32RLp5FM8h7Cs7etBQDrRhD68GG54EfRyJKLq6GvYi6YGLpuK77ELPjt1pJSe4tAAR1dzG",
  "key5": "3vL4g8r9vQGrPbjA8JZWh2uw8HQfWEBEQ3NMSa33TSkcQaZzgAn8XNce8QgkGUa4DkwoAcBevDSKyMkW63XrM6hR",
  "key6": "2mYUrQDGrZ2QihW2pcn1EoQbggaUsS59nh5gKyJiyF1ixkwNuUDtszAGhZUncwo5CBvB1GYw9mU4igLdbTHS5Kzz",
  "key7": "4snAiqpgEpASZDPfLT4Qe8rg5maRRCc62UsdybViEZjocQqowrKTdvuEvqazMRDP33KvqvjXuJiArDW7YCUYNNsa",
  "key8": "HrooJH2ppivXnnCQ2d1LsrWRQgxfXnxwUViqqTruFwphEnZdsWbVZGtRk621VsttikwUYHkm6cSyZncwvUNcYMn",
  "key9": "4G1bVFgCfxXbW8v2NnuXdjHoQVdKXsZ7AqLtn4xn9yVwtGSRYsB7CKoSNDuyeYuUr1xBnpWVFFehusajNLjtCgQG",
  "key10": "2B5vNc4rrVtSPH5ndd2aeJH9JbLEMczfhvQ51Nm9DQSPgTEurR7pkiWV2NNp8Lu913CynEAq6gkpDDRV15xcdJqP",
  "key11": "53MMETG6CV6g38VmLPy353RjLfJtCBWn5LuR8WM3Cxo37CvZQD3B4ChoqnLPX2ygUg9PcjhVxVe2R2D7Enx2jMms",
  "key12": "4t5vSQADMhjPxgzMUCH48GLvEKBgNMni1gyPYqn9WWEHhBKnxy4ELWVCVoS31wGJRm5SbyonKjvakGPhq3V6FVAn",
  "key13": "ag1JhsZcBevq3QEut3QSCSkXKzTVS6e2YyJgfesCamoYKuiLy6S4TZEfBQgQyyYBjsQztZhftmpuRJYDkqFA9fq",
  "key14": "4MnDhPjCx3Mwjtk3w2gTuZ9hpeYXkW2prupfr7n76TDbe2aLMNEzwnBzpDerPgR56CFinGfJfSeEYadLELEaNXmy",
  "key15": "2r1uoHb8jvyK4ZhUQrN97EVnx8Dh9Ei1yKP9BRVx9BRTtgRvSahMtpLjVNyuPWaqzBN5gdFe5cnBonSatoPAAhgD",
  "key16": "2ameAechsvwEVcmNM9nDNEeT5o2u3XnrPpGYqHruC3sTofrgYLYS7NAzKjPYeMyUD3qJzQSsFRqfF3PwxD8WrfHr",
  "key17": "pAKeV4uWak4CW8hZQY2RiWWaEtriRJMJKw4G259j29RNgzjGrEptQzYsC6mXzqJQz34F285tRE74JK4H62rf2hP",
  "key18": "3rEoeLERUQLVMVfJ82eaBtZuzSr3isPi977JqZXWAtLJKRgRAjWz4ewxFKuarVVh1FjcRs3hy8omGoG2AFaXJXoe",
  "key19": "3nnpgzpmxiVPcA8V4mNV8JCSaHnfMpDnieE8Wb98kRdGMjuVGmx4uVHUXNdGi6FqTnGcifVwwcWisKN6eHSDNMDt",
  "key20": "m7sv3iDepgbfZnVV5DqW2eMBWVYQwEjZfDTWctuS67Q3mHBAb6c65xqi5qwWavCm9BNftyP5rHtoZKQNNaysT8T",
  "key21": "364cjc7a7qfSJPYPp2RPwVkQTZF29AgHEwYjeB54ZginibEBrrYSbTem3vGsNouCnbqNKKE6tsWpDFUUgQqzMo91",
  "key22": "4oBxWxY8vBdceLZ3KvBCtSmfHwWxCpwWPfvgvygzSh8noWhcdZgEkrTHUrEtk1b3UG3nG9fcesrcQxZQMo8db9Xy",
  "key23": "2RrsT5XnQxmHV2GyxtC7E9svqV9wiGEEDmJ7SxNgGc2GrWvoLtyceDb75jTLNDpEsiuSUeuWNbZ7ph5v8dTvVzpN",
  "key24": "Mr9CXaCNhokBKUuWhSrBjMsi1Uxgedy1BNEjUqqsYDRPjgEEw9FmHvohAPaYwUkW2wysoPiD7L5x3UqbmrF9nD9",
  "key25": "5LzMieVeMVTpwnXxUrffXc33qS6NpEPo1v3euHoRC3xGyhRWpu7F6zY74pWAe9PeTCRjek1RMCpusffymfajH7vF",
  "key26": "5sNxuwWUDoTShpKrxjrrfTJpXYSkUJvmyf6SVPChVt8YRLasHMjsXQBzZJHwvyMrnaPeuayF2wRAHcYA5WharSFZ",
  "key27": "32UqxQDG3tb8F3GaUFphZmDHoF4w4RCixoyB3eh62DUT2SDfEVRvsUiGiz43YDzkeRSu3dxGoABUYVxb9RJtjFfk",
  "key28": "49VgRc4znVBuaSVzAG2GoUvneQCJ4sjwspVea8pw438ejn9ia6QTwFF2iLR1hGcCzzmdS2aLVZ11J7Ag2cHbeDdE",
  "key29": "2VNu9nv71AC9vpGhZ78ggdwteHYbquWg8UHiNPbLRFLBbBMQWGFc4MR3i4fGoztxtuzbTL3xfKaZ45KW1BXjigdc",
  "key30": "53do7hTgiucnAXewFmHxByikeBDhX6Xk3D4NCyK6F3kgB7kndzibG77yf9kK9dU3cyFxs2DCr2mhtAi6K7xCEDB1",
  "key31": "suhC99yidSCjFJvg4nFGKkad4VfTq3shy7rY4EMXQa3Xdx8mJDd38Ndr3Xzfo99gLbECfnL7yvuHRYozTdoeCc9",
  "key32": "2UmiRz2zMuFpCsprN6MnaZimDuS67rK9x26GYFxfyfHbdCNQJXRRJxv5TN7ug6TDD8ZvHtz7wbNwMA5Pni2mXFiu",
  "key33": "2X169u7egUX7TVTnrQoKgHThUZXMy7az4T4fEWKfj9uF1rQr65UJ8ED3WEraEvp9gBQ6W2HkhDnNyro8XoeWGoCy"
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
