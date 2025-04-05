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
    "rk218ucD2FngoL1S5HJQpUhRthTC68KY658AT8zw7yQXWD7Fws91vdo1rRHLHN3QCPrf23Nitb3UeVKFskYfesm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2V8p2SXB398VYQQyAKVn8LCWELSXLeG1QfhWnpeV5P8B9KtQi1Ppzv3UcDtmbCXjwy3Gp1m5dZ22MwRwcdtbVVfB",
  "key1": "223cFK7yDnpcTpY9FXJSD4FEzTEmY3C52Lh7XhhSYFCTQhWYNvcfuCK1HCigrFMjMZQTScRRzFEZ4rcHvY4TFPJw",
  "key2": "6ShQ68QAE7UvnMc7dLALWS4SXEx2TtUn6NuwXYTqHVhuFANi5g3WqqM8pDnGQvL15cnRLSza9gVM4KZg4pfkPuE",
  "key3": "63Sgq7bhC1GwTiBcpFLrhDJqmHsgPry5EiDbUfEQA1NR1EQJi4uGh9t8zAc2SGG78vC2Eqh1c2dKdZQ8Eb7i5RTa",
  "key4": "3eQ3adnyiJVi71ceTXnE9Pep5UW2HSGzSt4Q1WpWr8CNzWc9iRvKYbUGDth2QSu1oZ9quyDAc9CtZ7eoRawEbGnk",
  "key5": "5HjPskbirr9Hopj4jDb6iYMCaEwEq6iWG2Vj6Lqsx1GxhNvMTYvWsYb87Bk5HkzofiTPQ1UUgDMms9T7rTN6DNop",
  "key6": "YweekHahggRAPwD6uxiKK8f4bh8V1vZGt3qxQ3v2CgEcY5fc2MPp9xmr3vdAko4vY3vxv42fBikcwkiZRkepfeX",
  "key7": "5ghwuRj4qb4FpfD1VcqccDY3uedj7ECako7ffGMvF6CkUregQc42y94F5oHE2qEBLvosbPVRFHypMfCr3j6ZueG1",
  "key8": "3ChAtsaiJQQrb7KgN7s9fpghqfbsveUMFxGfzaNM1QHVdx4pD4kTHyitQ9hq4Bmhcdy6xbEkGESNGsiguuFBdjZc",
  "key9": "3FW9EP2f726gjr8vN8W629JQvKtiEAWNyvLi9QZV2o2wqwrNmMA7XorLBirBU9VwW6ysKsNivrb4kycaHHXmfzAY",
  "key10": "MtygqENSQNof75TN9hQg8yM9r3Ac8gS4CK2RmqixCS36UnnqUmLtpQQTqyVJArDdxXjs8qEuwZoXBKDZ9rDh4mY",
  "key11": "4bnQ2EcZGcBvpGo2qKmfmQdaxp9Vv7FZgsdhPy3yzU3ogSPXvGyevW1QUVxHrYdmPgEa6GvFYb58i9ZPNUamJAgW",
  "key12": "36LqVvW3m6ZXGgXY2fEDmDQg9FNnipKVWtcMxbepjttjWZE1RxgVp2i2QranwjLhV9y9uEvxtNCJEVWJA7zkRqT",
  "key13": "5xbF9RFbam1F2ZVmCBgoxeFcfDphhsj6MrG4H8jT6H2kQAJ4rHrFdibrAggyd6mmH9ZWUErQcLscfuDKyrSU3k8A",
  "key14": "32CFdcLxc8zV3HxoUiybpVgNpcmvH1xaie3dJjL6ZNiEAwqmMoQqvtbaaGL1hYbgkQexoGxiEEMN6v9zmkverjyk",
  "key15": "3yrQthhn5RkELGmahkUxNsnPxdEDVyhKJKxgZa9tPMygZpbnpgbGgo7NeET3rDDFm13A9Sdjm7bDgbHXJ66PxLw3",
  "key16": "3vRTVM3m55BGuLkPE6h8ndgwKGgT7jcXQWUnjzeghcTQ5u9qeW1fYDt8T1UGcaMSSb19w1u7iXKJwDKGStAn88ca",
  "key17": "eQcc6YFwsrmd21AK1NN321SkxyAF4vfPSXK3Qw5nLx1y314GyYeXyhwFyuQupEyBK2ZwTAmEZHJDaM9FZQ4Y1pf",
  "key18": "2Kux5Dy2WU1TKB6qtGRueckLpzTfNoAhBAMDZFF14CMCdH9RLWav4WAkxX1aRLwPwErL47NS7n1Ruwyr7hg3ZWBS",
  "key19": "56YLRdGw8cQqx5HJBN5AzddELJkuTqqQgp7jv9edKPb75iAeMsFYjqumCoqEMsCdLgo9CtwZnbshwSCYMQc4okz3",
  "key20": "HNMtvVRZYeT3DNM7xQGngspWRmdEXJLcxbx76vhE8LoymDM4W6CZpv56s89HADYCkWQw4nS2V8zZ5Y2ns2epdkP",
  "key21": "2Tq3QyfJWXP1Y3ew1YuDJJ1BNL3WzVcnD33dRzEwDHMxh3vuuieg6JP2VmNeo2d3VzgnfaEXcLVH8hTEq9jrQQ42",
  "key22": "5mLmRwTt1br9ocnyTrgNhh6r4zghsMF3TLrG66STUQfCUvi1pmf1CxisGKcY4MvXRNiJtV3z6ZDkb1PtqaGxtTJF",
  "key23": "4vLC1cH4cLVLkthr5yJYNu93i9rEgyU4j7fQbrEDfsbMsGUDuvmEX1Pf5F1wRHujWwofoNoxPsoMRyXdu914fKcE",
  "key24": "2gSeNTBePasqZyq3HfJbQJUuVW4jkuxXg8eK6mMYbRvcHiVd6L5NYm88PGqiHasHWR5How4UGxikCWe4aKsfE8CS",
  "key25": "5atJezg1k4KAk1k81e2yCSaK2dt1L1swC8LCfSfBWjMVck4KSndZ7gQwzZesiehUiDMXWDx1hS7eBtJsiREhwkoJ",
  "key26": "MKhGmfYXnu2mdq52e57fh58TgtFnMXCM4XdejDZU37AspBNhh9wtUyZ4JtdUQYswHL1JuFUAfq832TwX3o3aUxz",
  "key27": "5NSWyYJRTSqvVE56ccFLffWPqiCPe6HHf2VgSCo8aLkEFXXEj5GYXZgrK7gDhUgoz9ZtrAsekrvTPUYsqisqHbCm",
  "key28": "3DZWGzZUHpCSiBBvmdMZaZkya5UTfzWXiHDhNSmBJEELYdPTxuiovC6PRvmFcDpt4DPmPP1ivaRYx8cT4KfLamf1",
  "key29": "5AiSG2GkhLo9QBJMuhhaptoSxwZkKTZ45SFAAqFkvR5H6L9zKCPHqsSVaxvdDRvKErAyXPWqK153J92bK4TMLxhU",
  "key30": "4k5E5tNhP5nbH5Z6mUPB3SKaNfsHJEg3JaGaf4Q7XMvm51oeYLQfxkxSgYz2CobUb1RCsdakWaAiPSmbefq35eGf",
  "key31": "3TNJDtuWXHUguRqx1r1PbzTL2gAXLqQWX8NLHP5viqxS23n1w2KvwthbV3K7H4WzwqnQRfJe6c7ieU3TobrBNCA2",
  "key32": "5BdsWSq4XFsV851Ayz5KpYkQUtUYu8MwK2LvHHSxLrTBSACDw79JXAncq2vdVWaLoTvmMpeo6KidxErNHSnC1wre",
  "key33": "5aFZJAZ9abNZ4Aqd6N1fjYbogf4SEQ2jtSK2mUEPGr4sfGZPApgRYNXGDTqNntH88W4QgeD87ReEFZQERu7Xer41"
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
