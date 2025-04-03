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
    "VfFkcDjU72nXJHSinvp6Y2TWdtBqMTnXDmsZnWX8xSWWZrXErAESwJSfabsoFsDidKA9xhrixf6Nvvw2Lz7tNdZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SrZq5HcrPgHwvvHaTiz6JBNfHiBzb7ifhmDC6yyAEair5eu84F8Eso7gUzbdzWA7H19zgGiKJSXx9eMTkELE48e",
  "key1": "2ZUbK6YkkF33uk4M4b7muZ2vDCCW9sPo8Ag1JCBSrcfrb5e6311hLNQvLNV66Kvg3JcEoSjAvnizcFz7VUL85JCZ",
  "key2": "52xP4ahGy7GDDq6uHtTBR8dXzYHZ4pN4vdziNTRQ6B8KCfb1myMWrSAEt5MvoRoWCsSzMHAekDYvvgY8ACAd2sP4",
  "key3": "sN3Uxn93bTEDJcK7mJd6XFLEdZPmSN2RyDL8X8AHsL9BH8KU4ddnYQwT4BMXV9ZBxjqwpMk47verBVNYpvjrZUM",
  "key4": "4Z2JtU67TKPkMD3qogXSaEkqnAXahjFDnqkxrhGip3ULswEgVDPybjRniWekdWKDPLwPeTjfG28VnkZyVDkXQXSg",
  "key5": "4azbnsMoPPFQeSCRyKhWyM7LL46UywJSTXQGR8uMPQwzP8hc2tbLWK4UhHYn39kkPPQyZpzP19YSJGSqqkqBQY9R",
  "key6": "26By3813KHLTMELZJqnoawN32MVVQwmwWT3UFSnU1oUWVanDqh3F4zRW2ge86VT5cgHxhLfzgGmBMHg2SLfD84yk",
  "key7": "2gAcisyjqG12FXsJmKfacjck6oc51vN2KBRsEx2dd6DREUWE14K4X2RbuwhBszLf8jvE1vCb299M9krQuMdpwr7M",
  "key8": "hp3SLxKkvHPc6Uj5YKjwfYy3F4q3HeBXrqqWa7QB927pMSLx8wAPrKirjs9yL43aWKj6yHjjjv74B2bSmrs736o",
  "key9": "3jsRupkzrPCCKKv7SDQCqicXZ5st5eAuDWrwjfQ8KYUE2PHQj6PYEmoLBfyFBVf27qW7ENwqUfGEzJAFLfriG7G3",
  "key10": "35sqfhX7R1D1pPpX2tjaZSzaLENhkZcDCm9Cn6s4wQRxQthYqxNaDHitPwjoddH7QCnWWsm3qRhsbJ1JAgF4ChqD",
  "key11": "2PpgUi6Ew9dPPGzvtGrEthqbryiBivLatBVborUwu9YzZgd3krtiVyyBmZPXHUTNW1vFNZDDvpy1AHF8vsDfdcBk",
  "key12": "5h4JAjEbPe2AsXfomA1YybhdvpJgBpPgeBYCc3kDcSHZv6nfTcx4ZmCdnakzgDWZiZSKdEa8YZEyhfTGnHryghYw",
  "key13": "2oCDZb3nL9JWSzFiNaXB2CXgYhjgAYKABeqagtyzi2Gu6u4VCenA8syGJDZWR87mn5FsckvddhdKrdiGQRucWbry",
  "key14": "2BZZS1FSebx3CBQG7QSr8P3TMfFwwVuN3WW93uK3f9h6MV3iGLabMi3X2e2h7rDgSxkyZaUow47WzoZa7LDfLFfh",
  "key15": "2ZGkpYcUTvRZqLikun14hGaPqgJeaSCqQSqZHRUdBLAfvnCDujn12aL5pirFTL14uBpntCx6t6t3LiNUnfHTCrKo",
  "key16": "2Rkn2EZDAARXTTy375SBScN6x6Jgn3aLamVgWeTznPaDDtrqk6Pt6GJqoHes679xEGFV69XxanUjisizrg2VbNZn",
  "key17": "2jwP29s3m8msrfwwrADKk8VGdgTcibDXr3dJtNY1XJgofo9UoZHjfmmCnCKoyhgJQYMFxUY3JCrp4xLJ35JqE38b",
  "key18": "59sGvYhoPaLAh5x6ZgScMKAuTtdcpSvgerysLCTYCVa5QgkMDy7ZcnK6FrQ2SmcXQrqAr9DG9ENLMsuiE5uwPkf4",
  "key19": "2cgzruyCauWMhgAy7P67ijubiLbFRvWe3xweFpV5LXKXUqUza6nMhWBCbWoKhnr8tSMGdsJUYUPhm9Ux3xFJNAaC",
  "key20": "sRjQCMVhnFHniLNtUcrj4Z4E3yTSgWcBXXpYhymsSqVSUvkkWcYH57sHRnkhyq48xM6Vg5QMjmkpyQx5ZtcGB2n",
  "key21": "5Aqr8dpL1ifU4mwMQvcyGvUMAVRTuaRqpjtLT6W9Jnjih3f2j74N4Hbdar8qz8Qqt7Ymcvvn4oHkqMnnfnYpQw9z",
  "key22": "j6yTYztGMF34t4UEN1HDAF5jrJUdtHRsBEasEasiBDsSe2SPXUfBHYG31pLYdyLCmRr73U45r6UJdFLEvuG4jQC",
  "key23": "5przZD9mMD9WPE5b5Z8e3DexD4o7NSpUsPMpYb1vVahUzAZZEDBvA9dpUVVrQZueeUvzBzJkzDXURGqFTpHMSiUJ",
  "key24": "4jujkfwDjhdayZBd29e8eD2r6ByjfZuYadrKnpzBbgBSLcgZykz8KA5wTkBnKVjdLXWYK9gLH2TzLajx1vDnEFW7",
  "key25": "4JBQmkHfXQURt7kuqmtUDoTha79HgvChQXWumwDhvx1vGjS79pWbRJDWC7fwRrkehz3gTqhacwpCXhzjHAtsbCfN"
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
