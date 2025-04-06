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
    "8j6erPwVrtToEVbCsDRfhsFtc6c1Xs7fYMxigiUD68goZniuVpk8nJ9Ubsy2CXm47AaUueWh6RGdvWSFjMafXAe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6A1Tfez9TztvNCHBbUe2UMKbcdY5a2wzMdWppGnpUrjrZuGmVQkP4rQVzWJHYaTKMofdvwUb1xLiqZ6u2nJZT73",
  "key1": "59tLapxAMiw7J4LSt6QbrhJGLt71UfUWVKqhMGXY9N7rMfuhX27LMS6NiTaqDFaisFKY3qiSzSgbHtfkfyccDTN8",
  "key2": "2tLSLtbU6bmi9qsbyCz4ufo6PFnhQxJhGKoJEfRxQEp37Sz45sXhGWjH5uTMuuQfshEVofxJJaXdcHgYgBHYRbLH",
  "key3": "2xyK4AHPEt3k3qcVvP2Jj4PgS1jCWJv3xsLCfyUpDxQDiddvZwiUBrfr3VD96w56126YcMce4nrTVg2pbz5rqfjm",
  "key4": "2gJvxfhqEuDoQE8kyYMGFwTuiZ1YitjYAoMV8im4JRCN9kr69Fm5v1zDVfvTuDGv5cFgH4CbmhjCvUp9kqfCE1oj",
  "key5": "3aYWujF3Ci7yeRjaVA8BnGWJ5QHfy3yCwMHPrCSZZwvhbtPCrjn9j99XUZf6KgT5rCDVgZB2QmsVpxfBLn4r9tSL",
  "key6": "3yyEkhvidW6ZqayzM2bysYcKkyCgLkb72CAcSRKYp1Kh6Gra1wywo13Lrq7yptytBmAzURfUMKfAbGq7sUFi8x83",
  "key7": "2DpFSa1Bj4FiW4VwE4eqrPfum84Ht3rpWmP7dxMUZVCMRMGLzgThswZ5ugaf6uXYjmPJrcMSWhAqCVUkHYe3TRbJ",
  "key8": "2TSArtvAnJ7ftLeFkDrNbpGodvog7uFLKKgYEMyz9JEaEsuBgckDqHaTQo3CrBhaKMrSmL8Ct74wG9XrDBGNfuWL",
  "key9": "5MLPvZ1Pu6TRTrBEGvH2KCEs3crvWbzmrVxbkntSGhVJyR2Hs1q4MqQKrxWhEp7ZZ2vTvEaYW4azWEPoL8WazFtq",
  "key10": "5uYjExLEQtGJ9h2TuoUd15hApJiM1BsRzUd8M684ZnEyeU788iumYsyyUcm2EibCScRdAFhQgYtP8dVqJykPeg1F",
  "key11": "2t1TCpqPcJVYG7EGkRo68fT2W9fiY2apZZysHj379Z8jN7XuKuyJjLvWPSxYzpkfFPFDFZfken9sDKEnLzUx9qbN",
  "key12": "3i5hajJVPuMWY65TL2kL6pmE6xLqJtAYZqou7zVJAg9AhnmNzdiFpFBtmJBE3d69eHed1LDCp8CGZ2mP8MYSnzED",
  "key13": "762Sy22ZKLWP8xQ27iDwkhb7HjEPw1pPzdwePgALG79KPXLrjfXoB78QX5yC7FXnE9WcxQWMKWjh9FhPAbfedwg",
  "key14": "4ekLxDDYHdT9Z66xjNt99nDwVvkFmGSSqU6WMjAiGf4GcEsGmuAA3zS4eGkhiNkFiFbiouCnyPfZVGYdSsDcTVBt",
  "key15": "2wM5oGnPGfaAuMCsbvgWE7BQvjYFTrUBXAm3dXNCRbTsLgyrbC5Kc1RFAdEHZDm9g58t3BHt4KkATMB5mts2VbMu",
  "key16": "5KuMbaWqR5oK1VXmERRPhx5NMpDMJjBeDEuK14s6dnuc4UDgVbBsP5GTUj4ihVwwxnSTXqWktvHcnBdc7gQk64tJ",
  "key17": "3ct2894JsoMKyP1wy6Jvks4qWPbGd2gGkD9CroB7i18YocQgYdRdryEYM6jjS2PX2fk77nRZ3hPKNRGjSyvWWZYp",
  "key18": "4aSTxF37jJ2tbU5ETqVpaKovoWB8ZJQKvm9Td4rfuELCixV5HWWKgkpAB4LbR6gq18HggPaqrZKDgnyHcwRVbiC9",
  "key19": "3FHtk8kvx6orHye2LEgRgZ38UcubKHyxoZCg7GMK2G2fo5Z9P6etg7NJDMHnfqY4XbCobST53jtZasRZi9Vw3wfZ",
  "key20": "2THpxgJM9R3jtQBAxgrR1gp2koAzyqVVmKKNwXqtwLVto5j4yxVJHCev5zVQQkmZG27s7HUq8Eh692kPZdt9cnAJ",
  "key21": "3BCTkmZqyFUpjeVdESYHDjbuqAcgsCWgDzdwAASFhKk92jUFstazEqnRCVfpu8for6FepLMpVyEWKrsDVCUW3zpC",
  "key22": "4h5LoSX6NhD6VUbdXSx3ZLcma1Ed88NvP5Xg2Q8XLE6Go1biK2Q3xuRqo8D3x8XH2gvz8LZrX2NT9L7jRhspoyTR",
  "key23": "5FgUWwg2svDRw6ydRvhj5zKvF97Px9DE8JReKLS69b7ow3a6UmGNG6kDCaaysjPzPfXLEXnfQmEiWPJmNeFBGTaM",
  "key24": "hy7azHNZ47AMipBPTTLqSdN8YsoT5SShh71DzaDDqq3kbkgBBcNpr9qkYMDwQDqbq6nBCa4GUEHZVV6sXy1WLHH",
  "key25": "3ZwT3gBPk17uF1mjbLwf6p2sFNiphfvTx2i4nSFSEHSYJ2QZFyC6TZmGqXm5wxXZhhazZxkHimKECrHyetDJptsQ",
  "key26": "37m8VAQYrpKKfUSh82r2Nogpg21ZdZBUVSoSngQXLNNKKCMhVP9UoztTQmVKKTSTWDzWxxcmJvRTsLuEmFV2TMSf",
  "key27": "jhWzqt6L6oH1848zFZrTvxWonzuzD3JZ9txoBZvRDq3g7gXJm3oKvtf5pPPk5SodqT5Yd1kHdX1T5iCkSvfdy34",
  "key28": "WYmzAQGw5Ger2KnnJBzJddPZYzbum7HrN9r2ug7PLuD1n2k6NPWmm4tveahgGTztodMpvzxYsd2syNmHJwhfdcn",
  "key29": "5DcKbptXw2bDpFctpTWjW9LzjmS4HmXBEKeZKM1vd6uKe2vg58pYS82cuzxiGBDF4RJsEyHbXmDW7hUMcoTbNp1t"
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
