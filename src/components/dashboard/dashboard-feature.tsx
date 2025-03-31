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
    "3CDwG4bqmpU2Co9yEPRGZex9Zo3mDkqaCCbWxb1LAmb3CDL68Lno9db3kjhNDzAx6Hoxbejap8GeFsoSgjSVvfsu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tMcY7Y47EVufnWevVJqUfTjUtgBoAEVssQDsjrkCBrPyUQU3Spc8isBuoHyYDL7QxSdivqVg4uz64KPdiqtMTkM",
  "key1": "3pSCbu3sWrU46jfsSTZjDnD1ykTEspaGWn6RH8d1E4wFgFaJDXwSeygKWeDAnGWTnMnetof6zLLLy8wwBC8kdfrt",
  "key2": "3uZQ4r3xtbmxsNaUzfggrnGgzPzCeKm1JdxhWUMkxX2PfBZzacei9eqERqWAJmZSyzAf5xfYvjZqkEgfwAUAoc1X",
  "key3": "39mHGFfz4dy66TNvpVgJFz9ZUGQubmRveh1PdudsTE5cTT2ynb1DBX7dz9p9PqAPKRDiSB5DPS97sDSq9yiFtKSX",
  "key4": "2j76JEoC7qyRZgTtV4aebRjLNsWLyDLwVDLr5EexCo3wESMdn8UrxHDmrCz7JMetJayqPbPHpAttBKumJ8BRQRg4",
  "key5": "2htdS7FRL3pZJbmBzDc4kJo4VmRpGDp1rQJicsS5n5SNKVuqgzwwZ1Yz2YWz8F26hKb2h2qhkBi6wXTk2JVGgWtL",
  "key6": "4LeBK9tMX8GZMaZ93k5sQLutWuQ96AiCq14M3s7kYWYcCY3jVV2wjZ92XemgffYEPgcXLts35hGGvnKVQy83EFBZ",
  "key7": "37z6oVkrns4fJgs537fLJxquHR3QCryXBZK7RJZ5nz8mEuj2ruD1Tmk8petTvfZDUgYVJ8AoB854BJq763NG5RBw",
  "key8": "3XcWLfoFsZhWXSS1sKqoH7tuSv8RWoGHF6ix94t81kbXnxdUezMrrMEuzH1k9WSZTPGVH1SM3EUByL8ycfkzVYD6",
  "key9": "3H3g9Wrh6izZgudabck4cJjs2XZ7zwRbiXzVFXbRgi9FUjrMRhtXAiFKLN81CDY2iiapehrtakxaKukUdXeYPprq",
  "key10": "5VnJGaNXaFidhYwqBjUseMjDBCYn5Am3o4kQpFbcnVf6k7xkHZoP2FXtAwegJS9uwuFsXBv3DfootZ7oe2jkrXEW",
  "key11": "RDEe1WYUdsGn4bZZyLqc4CzhnECSaPc4x4Vi5Vez9zvvzQVWmAJfFq8YuvSaWcvKfvyfv2xGWXmWpGjVjAQNqmS",
  "key12": "4iXc5C8E7Vfmyo3YTG3skQfSEbe1KkhqFBbz8Hv9ASRUcKguBPyG3JrjsN5KxgSxSyQms9BV3npx9AMdiXTUuEzS",
  "key13": "Wz4xzEiVjhcZDLESdsAuJGkxUmcEJYtvq22iGYaUeqmcLy4rMSXHarmWnjvP27JB4cDzaMMbBGi3GnV1C3uRBph",
  "key14": "38QR5Q6fneWxAzANH8maZHcrG3VNvCfrJnszwYz6Qoz86V6ibC33TJ7GG43AAnDcSKgqGcET17g7HLs3esKWt7w9",
  "key15": "3eUvW7zGCNhZGEHH2mNc5LA2VFzVNWv19LNhvgwWtEbZD8GUMqHq79rvNWexzn7vK6Ajaaz2s7N41FnwFAfLp5Pp",
  "key16": "2s8UqfipvTYBTRUnRozjNPPwUyrMfWCPdSCEGEvUN3pWvExwXTHBgKQGHQBTR5ouTiQHNWUkH3U2H53ZvnTVsFc5",
  "key17": "3M2jMraBwyBToRANwjnBCKGEjEtRvbJ8qGt8UfLopJw5sL1ftxpM5yniFzLiuh3fpZR2XSUWHU4czEvfwZiMhAEt",
  "key18": "xFf2zNXyLiXwN4NNwyA7VtAN8ekJJevE5gCfdbDKPDPepMjGMsKBEN2BQCqBjpcxAUPDWj7jyToc1RmmcHwPiua",
  "key19": "5hjtzp8hc6Mtf69Mt5Sqjq2uammG1Vo29QmAEqUhHpeMqpBFTx5wmWi1N1Vb7qDFebXDLguEe8LWfoAyFMEsryZh",
  "key20": "45Mi4auLTWAMNBfVGPU3foJ89DrsszhtTamnniKyqrP8bK8YcvxSQAncKHTFah9vQoES3xUp8WfUjJcK8JpgVYXt",
  "key21": "L2dAXXCKoFYE8hpjqXneJKUh6YuJYaTjAjkMNKkQ7bFx7EV8kt3sqYVvme83YDQdjN8r44Um7UY5bZU7DyQsmp4",
  "key22": "vAPKTW4Ra2Ysu6tJZ5JD3YR2AALPjQnZoYDPEG7MLaa4hMJcWdXwLM7UydswsyPSvZAoZnYUutyyWTgDdAXDJpE",
  "key23": "y9TkdLJhD6oQAoBMJvsHJhDpm9h1XCDHeuiqMDHDNsKhqgS7jwmXWPPXCvn2ts1UDh2dZ85pbKZ6PsH9wywvyjw",
  "key24": "4KiX9bpQYTWGjFTMD5sJupQwTZPiKQnwxvq3Vwez6TC6cMGfgoig63Xud6BJqVmwC3YHUeyUoiHqkGUCDJupm27e",
  "key25": "2ZPGneMRPR5XxtHBMid73mY2VJkp96Hg81eg2qMVAEGF3F55WjEyUvsk34hJCrkoCX5YhytfZmmhNYDshFRMwUSh",
  "key26": "4shyXokdcu7GEeaS2nvfpaSmCRY2cQbjjEK4MWREMsCSfFFD1gcMBou3y2ScGQGa5Wmt61WNzKxkmzNAnHEkqGpF",
  "key27": "3buytTEB1XSNquBRByk2eRojbVC95Tc1jtWTmQzdE8S8V7XuuqXB4YyE7tM9RqwMqVuGdYSzSvnX48BMEgCiayjr",
  "key28": "2xiGUrruXohHgrDL7crzTpYp38wWoPDZicYY3KNK9jBdNhFcmZ3N6NDiStW3oCBk7zW8Xe9uBvTGo17bGpVA9Ywy",
  "key29": "GM8vTvRCqZKEmpsPd2TKWemb1fCdt761NtbU1ztoWFXV5z8iczZnGRCyHP5BCmc7QquFYeKw1i9gnVBq13567qD"
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
