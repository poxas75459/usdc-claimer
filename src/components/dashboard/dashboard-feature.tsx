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
    "2J8kpiJHFBfqKXkGMjDASHCkVxsLKjxzWtB78kWc3Z7aBuDJwfwNLCBN2SWamb95xJsfPxfW6k4faRbQCVLvjQkV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oz8KS7J6XqZWbVLtrECH3hTS4swzTSTditaNbG5ACrb3YpCw8iHA7avmnNZHLbmfWEuVspoaMxM78XUkezrnh1j",
  "key1": "4e5kRaRhmmGFdawezg1NvrMG1Zcru6YqhxYYZyJmrcLuhHNAUf51ATX99TWVnNC6TgY9XAy7CZ2JvzZASvGha1RY",
  "key2": "4JWL3aVS6fXSZnbYcvySGyYzGPp9ftpvok8FziEVTiqRbGgCpd51ZpjzJpq8vVvY6CGtFeyxKWnFYTjDxq94RYu4",
  "key3": "4cDRM1fnavHikX5F7cjKtj5sWCVGDRTsye78rxkhAiP36qE1nbs5qZYWg4gSGVxHX4cExMCY6h277VT1quXZ52kU",
  "key4": "FQLWqDnfi9FCdyvdagXkGmtafqt7cTfFH2bp5ngQKTKmjNHxAZN9QTXbEmbfUGGHT4tcd1QLATwAoZAPwhTzZpz",
  "key5": "sUNGXpDPYseZ6Wo61mKqZJ5ti1BF62e4ze649cujhNKpiuTRG924HFDWHEjcjazanAW2HXrWgq4Nj16tvtFmNMn",
  "key6": "3DuefzKMu8QBGfnxhzL3ERXX4uffkve92UekVYT8h74wK1GtSVyKWWegJU5iRgmHesrz2vbWbBh6aHxxCHsmSyBP",
  "key7": "48bP6xt42ujoQKNGj8kcPRdT7emhcjmKYKc438Xmivx8Mw3bRZPCkEymmqwbuvjc64vXgBo6wHadWqc1CSmwy6Jz",
  "key8": "3XtsQdKYPBRUb2EpjJg7wnak5TckGebvpfCyX189zbTP2NYdCt4RAecYWsdTmuVCU9agTtyidDqwZ5VNdeARLfHs",
  "key9": "5Z2pDuVsUN47QiBSkQYkTxXFBQenjdQU36mee2w8xT1Kch1D43ExGw7si3vtZGBUxtpcFpUvfvtirMpmnAwpwc9u",
  "key10": "bQ6zBPs7SUkH5vsHsSb3X3PgHm4jQB6vPeVRtvNeg4YvXxE6KXBwCzP4icMXbV5GgNLHSdRXRRuVqJtWjnpEt5w",
  "key11": "5J4tn7CNLWUeAM1A87tbVpBY8CN8Vchj2Sa8xELsH1kpYNSLCcYWisuRnJQXYgHx6ujwAn3eHFXF5onCrh28rb2C",
  "key12": "2xmywwryPLcXEgAckGzQmg2PNBPPfkguGvTCURWm3CgRGV3aLwmVQT8hGzwnsTk2wiTk1knHze9TVG8RRgp3wqha",
  "key13": "5MgpyysqoVcvEyuDZPKLnnxnJsVvZZKRimoFyQL5qk3F6gTuuuvKKVZxMVztQvMZYD8GYgvs5zyXudhPNqyexdhp",
  "key14": "3KRX8VTY6J4UYS6ua1R5YJa5S21oAW3uoNxhgkenMESpX166trnKubADmPXZn6N3KcDKSASEZu1hCeZgmx1rkqFY",
  "key15": "35tnMGh1wTSMfxoWG796rXSVGbMR3T74jKX33eBHG2A1GwyEpj52EgohPGC2CMCJzYJM6SUvpmtbFak4CueGDAW1",
  "key16": "5HeK2vRhwQqsEqhLC2L8DVzkTSNobiziC1UKtDjWKWGfCr9DrBexScTBfQTPMF7kqFTHDHgTdwED8v78TdVkhtQi",
  "key17": "5TMRPCFRQcE98GaRioQAXk2nzyK3jjDbaAedHpCpEyhm28survadzCcFPEryq3kb5dJuai3vi2Z4zeDWwJcMBzi9",
  "key18": "3qEPV46cFSMqRsDuHgi3DDnFBvDvGwV8PcQTyrZFTay9Dnk8t7qTtnyLZsYZt3HTTLhdqs3K26QGquUMTptPYKgf",
  "key19": "A4Ug1CTarsrr5LscszSeJq9qVvqga4HRq3sA86oiMRrYQnHbEhStG1j4ZmEPx2Sta6PNfsPEpY2sHkGsymaynvp",
  "key20": "1ZaNSHgnfkPWr8Kr7gnwrwKb8aTAGtcxng24oEm3t1sCeFapP7MsBzpRSDx3S9Z4DGjZkkmco8q1Wke3W4FtHiV",
  "key21": "4LMLtjpoLokfSgLQHh41TdwGnM7EGxtz6L8HpUg9XxyzUN3ugBpjkWwB59RzDfGqs5SCp2JxCiWdSgxzgxcu8PN6",
  "key22": "3LA2rjntkpNbZ67Svv5KCaLHYhdR4R6arLt86w2Tzp9itd8Z1H5x1ZQuyDZYMEmazwUF2ggFTyXdQm5wbMjHaaHK",
  "key23": "4a9TdF1LnfVRbgaa89mcomk8LVLvzS34ELst5ugfFnaboRMrDic4fUV3jUSJFu28uhFY6rSdmj3ZbRi6rCxkFPeo",
  "key24": "PYrWoe9fTGteQCHg9vamh7r8QVsvQD7U5bRbA86kt6RLeUB7bdePHNseHfFaqkhcJ2ssFRxVndfMLdQpey3X7b6",
  "key25": "2KigNMhXAhnj5Eb5JZ8jcpVLbGWcpqCdUc3KfXGXPsWfWjv9DKGSyYTuSJ1aoz9bZuVzUUuz1ky99ANS6yrDbTAN",
  "key26": "22s2Hh66u4p3ZRL1Ae4K919eLrBVQVmWQFcVFj73WJC4uxjnPm577Js5EXm54aSL84kKHpWbUJF9Gk8JjpgURsfh",
  "key27": "35wD8AZQPx8vYmSAJsvgrMRTcZutz2RQiQYntDEP1T4AUx4wiTiDrDE1JeeSD4cPX2QR581gGGrUFPparfYDnggh",
  "key28": "2gjhVMqwMKx7jPXyMgGXNhaPGZE7Ao3zCF2hQfMeLjPRJWJvD1Y2wTmRsFnkSFAY8wUiz3rv8B9minR2ctCK1XxN",
  "key29": "2Ngnco78oUusmbfapziK345Dm3NXn7PtEZxvZEqDDHeAACeetZdft7WXcbqJkVbyYGrusLA4Hxr6qsfcTYVxNhxt",
  "key30": "45kLChh9cMdd2zyEp5DqiStMyBajg1HUxaDd5ePDgr2j2zodVDvhKkdzcPK1sCXndxauWU8h8NbnJgksG8wh39mp",
  "key31": "2aYQx5vbBMSSVS1BJXStKWHT5LjKzoXKNiQpttWscsAPLd8LDbMMd892inxWc1Gg86jupg74cK3Jygj8Pbtmxwio"
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
