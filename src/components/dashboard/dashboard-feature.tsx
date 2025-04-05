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
    "4BiVBEjsbczZthDKWHcnGSYzDg9RNvReEjTxDaJUFmznuTcTUM8wmW87M9fV3sgpRs44kJfDKGjavqcHxCMcnYaC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gaA17ZWD5oQcGzCeKe1jfcvreqEgrk188DWwSHxoLHktWnvu2Bkoh2vwHkHJd2CoKzzEZjdd791xSiTkQTvGbbS",
  "key1": "ZMkECsGjHCXpJczsunwgrGFPmF3kYUwnUVsnWt3fj4rqYC7vwvEsZbqhGdvjnWNwiHCkBPnUj397zb4X749XUJR",
  "key2": "4zgQ93XD4LvyZAQd2Hs2qHdZ5GFPTBdGGSH7CTttEJ4CbEMjmrxyM6n5YyQeAomeeLcTGCKmr5aqyKFKZtaytg9R",
  "key3": "fRCy6q6hzdfF27h9RBBaLzS6Hdn1CaRCVS24Z3t4Ug8ctLnyGgipC6KpWwUm4zNRyywEetYcrB6W4BmBxpvyEGE",
  "key4": "41LVPPjfDyv8t9JmTXNhM88PvXHn3uCSYUq3GEsHrSkprJYEgwHNsDGdLXTRQEMszT9zPjEQZwCgraRQc4Lhvfns",
  "key5": "2ybcLsDZ7TqgED7LsqoQubvZoYRdtEtvLeyzsQqEaQgwFe7tW4cq4ALTWTzfa1gFmYisbUA17weZLUPThhmbb6WS",
  "key6": "63GfcpZrRLGngw5uXwHQV4UKHSi31RaUrNM5nBAX7581mhNx4AZ8FKMTsoEmCK3bm3R8mEAr2VTSfuzeZxPcjFow",
  "key7": "LUDSXRJPm7Jc7EdhMLTeuKBX9Tz7PEXCZRk39VSqnffJBmgCkDLxE43nYhXfURHKaAp26cmucJZHrZNoUQuyASW",
  "key8": "4UstZ3M6KErY8ASPyv1vAPZLW9KWhzbgEBvCVnzbHcA84PMheLpdv8zAXSjkfH7oCFcbNEvMuPDEf8f4Z2d5eaLp",
  "key9": "3Hb8BPXD9VE4296BDmzPyiBJapvPnvXc2T7fdfLRUr3coxhvWazyrHYGTZ25dLUJTYyYoZGDzWV9XtNoBeJZjdua",
  "key10": "2fpFY2KtDxTpbYsFpHD5efyHUftcnzFBCgSS1oo1TSCB24AVcR42u7vjLFKjX9MGS19ZEMhuxSktQtLGRmLbgWgE",
  "key11": "3Yh9TnTq7gGLwq38i3Hpzn1j1eddDYkWXjATHJSD2Q7rBodazmURrWccQXoYZK4WTKbCXGEp3qZ6cgp3wryuGjRF",
  "key12": "5Mcm2uXpkiM5y3SCHgaiKbvHKYQ8nfYVkj3rrYRRsCvUPP5rpxE1YFUgzBZ35bVWKjoKhTm8BUVi3iz6mDjm35Mv",
  "key13": "BVJNeg9GTaaNDFWEkkn4NXdof2UeynCWLpD9ayW86zgreuY5zn35JWdt1yPtBBJd96uvkrhJkrPoNDsEcQYPb5f",
  "key14": "2visZdETkpdGPzMt29Fj3Z3fPgGQzNWg4DM5h3LZLUrWLKRQjaQqBrybfMVDWQvwzXbG9N9Y1jw3eFQa5y91Jnd3",
  "key15": "yr2kM8zM2mXd3f56AbUnfCVcWTYE1Na7gAvuJkW7urwM1vLAerj8gL84hEkUqkRXdCFGMEfxC6bHfrhMpnXpT98",
  "key16": "4soUuyoPhpy4bob6oRoUgAkk6aEqkP4ub9kj4a2FWSx5Cf97VoieRA2usy96PeRxqqmgbeLVZ8RQvjP6m7NRCEz3",
  "key17": "3tQQcAZUwRg43zxKdUfLYABGV1SAGwHSn8ZaFzJ7zMyUDoBSobXKUHFE6HgEnpwiT83weh8hP783ovG3g8ECvP2t",
  "key18": "5f3Ny2AP6AxFbNYF7KLqRwQR2J1avBaemF9A7NeYgdv3gbe4gUujcVePbrK7rTcQUFcPsrJU9nD8jCTGkeJiECnQ",
  "key19": "35z6ZcDkob8GRadVtJMpWx2hGAgZCa5adTLBenzJm9KZvoBB4re1Dr9LD6GFUEH3wmNSMLHQpcHTQ5Z55Dv8PRLL",
  "key20": "3Liu7KtXPsDqjwri3dmBcHyvnP8uTkeJVjKuZTaTCgFmA5QjXCEPS8oRjPetm4o4REEYihVSDzuGjoBX2qLstSTa",
  "key21": "4ezgVUkPPimxWNrNugHoVGsHMPdn41o1Lersmbcrzq2YrCfiiG99BwidY114YZRMHRPQTju62MfUr2uopj1Lye8e",
  "key22": "56Wq3f6KCQvrWk6ph7DryFJcQQTE4abeYzgXeqAmnxgPvDRf1t2FqgF1KpoPuivGkLgovcXRRbfKaWQSVZ59gDHu",
  "key23": "2hQeL3ympWGxGvnzHzc8Kxmsk4cAkpG1uFvunNWws421bcQNUnuYJPMgG8BM95rr3WKmVguVCMvuPNdFH3oY2cpC",
  "key24": "3tZvLks5Qwrnx1WXqKPh5AJogbo9Z6eGRBRijjiWQbkGoF1QkPzu6TBtBP2KVgswTrapxmgzjVh7REtYkZe37pcu",
  "key25": "3wRhdzRUnuQRo5MbugECa4WYtfthv9M4SGpDPLWCBU27stBmH3CVyrBD6oRyAzPukMSJpoij3JJ97Hzmbu85ZDQe",
  "key26": "4pSL57tiRCWcR7uYYEsBNpB3jyQJRNk5m9awozaEVDDhdAi1SFeuBVSgDiszkrH14FRjXCd8xSmQ37kue9hAEYRe",
  "key27": "3fvQPX5w8XQiB7MjSm7DNmz9GRXeHzZV9i72ttzoVwgCoFBBcs9ENMdwAFhoYACfkeqfLJrfg9WwWHdS3nQuww6f",
  "key28": "gWrFnD3bQW2bXRu58PTeVUQ2XAeANvJksT1iT5HTpU1Px9wSEhZDJJJ28LqzAaKSvstW4iPPP8AUHY5T5qfu7ce",
  "key29": "5NSgoWg4E96vHrp2LogZu2FE4JYKxk4uoHpi5xDezXTV4Vg8z2HhEa1oQ9HQAvpd19mU1JbqvgdUhtq1Tpi6qP7i",
  "key30": "2NfyHcNchrE3dQASrLpRHDaSKsUyHRc7axY3oXmKqVg5uAp4d3S5QAkZYu8EECjpq72XdgYT2bdXvfyz19oaAkaE",
  "key31": "wMyKA9R3poAFhGUqZdm5jantFhvNBrAMDgtVRNX63JGq4q6yCAmwo7NgN9b7Qsaji6CaX3MP6Nrckgc5PV6MBMn",
  "key32": "3GZfmVz1kkPzRdSKEg7NQLPvStuxwN7wWbM6F3KwZ4xvkZ5D7UduRdbBNDqN1JciQzM4QWL3Kpn3aVd7qu9pb4R2",
  "key33": "3vDXZtyD7ao75LCDJUjKKN3b3yTYcNnwX3zMnsJo9EtPfj7PQHd71EoKTioMxPMDxTVdMWqsnqLqqVTn8FHPecht",
  "key34": "4uV5H4fRPc4LbjZBJRC6Sq4D6seZGAbJ3TKryWFUR9nm6Rpf11YNMn3ESjowugkTaC2KPsyAMxpd1i7vtX5Lpqwc",
  "key35": "58b4mVdG9c5R6jtMLeqBQVmZEjNatM3AxQGqSK88CCgCibYBv9F6tondyECqz2Vm8574svVFMmBSfZysRtKzjseq",
  "key36": "5RxFXbuN2QEGhR7Dvx2EQwXsv8FsBzz5xH3fyNQQnuA2BHNMWDpCPAyQYeCbAeP5gcNEmiHbUfaL6EQpwvMXPTTt",
  "key37": "4qwzubjgsrjcnxYvV9oSmcUEMTJ1thHw3ePc1ycBPYDkxNSCj5VLH4YzcLydXyfCYmvjnJZ4AvEaTsEwcoxyxLZt",
  "key38": "4vpK7hBmvnt5mJa4mmyYR28e51qXKX5xGxM7rXDKJS8ikNZB8cLVdgr6RVEkSgdxrZmNHg4qn9ZyqxUL4Tbv59u9",
  "key39": "36bJKiDaM9enGsaFwLnrH7aqWbd34JX87pB4WNS7Y2cjipTVzVZmPwTWj51eqZoCBzFkH3Gnb1522tLL2JrF5ogF",
  "key40": "25e9qbDPSseLc52DM96RQEqGDNi7RSXveWiwzPGbJ4eaVrcRxMKWW75g9DXR55wgSsBX8JKodiFfhZ7xLJev2Tx2",
  "key41": "2ki8ZdX24CdsMdYfD4purJGGi1sKNfCGfvo4dgLsQie5R1ChsAb9NzjNN3zPh14thqDvpKsxGCZvtSrEHeZpHFsP",
  "key42": "3CpEEqmQuFLnqwfHyUq4zU5BrGeMbQ95BEL6k8JC4ne272TfcaSZSYmjBH3y4xYLm9TrqPJ5ubwQ5mqGhrVNSENN",
  "key43": "5vGKPDvpvUYpegEizJQBP64BWHgxhbdjG7mmWHYMryqhPc9Xdw1bfZGxATfYRttVXmt2tjrSQ1mHgsEbNf5vKVsF",
  "key44": "2RbUcvaPpYvB8jFvGPvz5TtoQBQGYFAia3h2G2Lz99HBRVqhgdCCkusaiT5oNgpY8f7VCx1LtPyfUPpSrVeAMCK5",
  "key45": "31gXWKfP4LQrFDQhs9axANBo2qNsvn5C8ozaC9ZoBeBLEaAGPSRRHdRvRC99Xsn7Hwthn9ooT4DbJHd1sFFR3hu1",
  "key46": "2vgzvJTm8Drc8WFQH8KYez4qSRhE8nRypKYX5RvjdHknQhmVXxZ7Mb73CWibWBUxP6UABQrRAPNZXh3UC97ux54i",
  "key47": "52aC2UkzTY3mnD271wPCugiRqs419BTbjbtj9LNP61EE1vcBsoY5m2gEgSSqyTsZgmpMK6U6Hg3yquCoNok2XF3t"
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
