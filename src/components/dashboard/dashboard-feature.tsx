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
    "5HZtKHzE9jBsxVPYqwFgNWbav2SqqK8qQi8yYDyieEEjR1WGLVx6oftd4xqE1j9KnRAD7fSnNbo98APU7FC5kkTC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JCNFam1B3hxeX2zNSYr5pDCnYjRNwB9Kse9XVtVJA4FBNT6RP2iiDheXmpShUVg7jmu5wTgLBLUpat5nofAtNC1",
  "key1": "5g3kmAL7FFixcnGCg7GPzJPzTDXQsnjtUaEWYkbp2NCQvPdCq5diWS5w8MujYCrkcZnCDdE1K138RjvKzXreBnPk",
  "key2": "3KPV75qUEdmfr9Q2GkfaSetCMu9HmBrKe97kzqXX5xdEwpmXWdGNcVi4ibnyCSwyoWUVNyukXBwERo9mW3JH4JsF",
  "key3": "5DHKUeqBJuawyiNEBGja3FBEkK16TJBRYSLYcsrKyey3WomcjZe3UVJRvKAf5wUtwNTDV29jTtRfMGmHweaJNmMv",
  "key4": "4JtZHWryrr17HruhMzreM6cySeinUZiRx7ZGuMiT7ydtKh7qNTsDsAyD6mRdx15MfBD2HUyACCs8KSiLinRoNHEj",
  "key5": "327hLr2uw9gyiLVPumiwKk8Nag5j6ou1PCx74ZAdWgpauNsqbL6495D9H6wFrU3o1XkYvgzJy5oswpc3kE9uFT66",
  "key6": "5BVq2v5XhaZ7gkcdR8qxgPPMiMqNjb8tvmXnw8H15H3uboh1iPB4a6MNBkBVdxSVQDMP21SM71VZunCU29qwe4or",
  "key7": "34HTG6Q3UGtoTgNbjLhAik4BzsGQ7gnMMBHCSLxuge97bGU3jqYmVo2CTnctb2SQRoAxnTvJbAGY5XcbRer2MBo",
  "key8": "KscvJzEoQjqriTPTjDA8BFYP13X2gqQsJ2qMCPT2rWQGZxJBeWevcGTW5ijoFJsfdheDpfAecwR6Ty2WwAzN7d1",
  "key9": "2XNxroh3DuYnaLwRVtoTa97N5tL2GUR3PykTr3pqzEPXTSPhG1qtshKeMm6SMwGcLHMKeo9ALsP3je5SRwqm5FtK",
  "key10": "L44zegnRYmqmuFzbXYEYUejVonCCti2h5mpqTA8LWkji8oYtoYzYt5ki1ezurCVjkZgcLV2sYKgkL6PCmNYxfG2",
  "key11": "7ZUUbeZm3Z3sAkpCiDA2BfGNUpjCdYRon9QLtSLPzpezBy2sM2Ju6g7kiKuGCUhz6MdRb6AysHfcwgcFHNpcVr8",
  "key12": "2aCuhZmu5rZBo8opfRtHA1ozbJf9DeRJVovaeEcFQ79LdmshKx7Njweqhk2WNfTdhfwWMDdumrHY9RWnjznXprK2",
  "key13": "3WLtsrwLnGkn2CRdGFdcV7YTt9GJ7VULTkJopAMa47fi27SKEMmPfjtMp3AeKDZmnuNM3TFDAWxzpEoGyoWpnFiN",
  "key14": "5SUS9AGEZUCEptEb9cctnGPg5EW2KQfQeVDBykDcHCYWgV3BUAVfKMRaRmJJtGyGiFsXPWcZNCL3xf59Wk3GNcVW",
  "key15": "2hwoXzXYR2LPvyQdtLRPGWyQCVjoPxfCN84UeqNbtd9tqjmwQ9fnwTFZjTQNr4CqdKfhkcSap6eQfNW7m4XuxRfJ",
  "key16": "3ZwNYSreg2bSKRGLLHfeAwX6ioftrxX2wEvbk9jkyoYkJ55yAyQJqL9QAKb6PCQNnUUEZegjZkBzYfk4r95AZvSE",
  "key17": "3jHmpCpPTAngkRssZhWC5xpKrnWsLgSAmTJg4YhxYH5xXDFBgGySUeMtSPpZj3vggo5hVKvng1u5Jmp2wCFi4JPa",
  "key18": "3PmPshF3CZNR6FVPoD8kV3HT8izPNYkhME95xL51qrDQ2LwPXFxfx5FQSvuyrDkQ4q8KKyL73Hz6AWet5cc4BR9",
  "key19": "3qfWdmPkDjSyptkiGnkTjQQ8b9rip2x8VS6jNxGaeuiTsEqtfQBu61bjnvMpxyGDyycqn6HNySgDfeqRM5G34oZj",
  "key20": "2qYZbsEo7CbEDUMQXuuAwHvcbsokHsc4u377AHWXcYay7CuoJN8C3wabAsHHxc8uBKdGo2ViEygX29XgBAEfEudL",
  "key21": "tvb4xtgyKFHgSRsKawZ7ZohF2utF8kiZ9UqzjYt4r4tZDbh1BZmHZgDtB35H1Lnj9LQcUVES6DkEV9qf5VAH37p",
  "key22": "2wrDh78rXafLDQCJuNWBbExuZmB4ZCEpDqVPU93XXobpey9hUfzpaF3uZw8qwxjtjNHGBPrwDaBiqa4V5V31BvCJ",
  "key23": "47jpGLRWQR7FAkfUwiNhxsBh9GjRrvCghtq7F4pQrzXPUS46ctSNPhVs4obJgU6e4tj4io2zhH4buSEvhCjNPTJ2",
  "key24": "2QBogmQhSoU4gJ5GhunpybkMAFbMJVm6jjDAbzXjBk3PFosRogJ4uHhNiH6DTkMBwYyRZeuxuM1vxud7jvwErvMr",
  "key25": "5CiC7zCtKjS2XTHvBA3A2VKG47wFHE5oKaApjK6VG9bLww1nDY9zaJobr5MCwZAXmfGSuUdbXv42wJ9DQisBb6Gj",
  "key26": "yF8P3s334F37Kqr4L7QkoJnVfy1ou23o2WmxgVSTPMBKsXQyqVEj2BEfH116Un9qZs76g7FSwcjeyTwg9REnWzQ",
  "key27": "3WdiMo1rFHhuobDBobyJW4JLfnTQgkujNtw9LpaBaX2JGeekZfBJAnTkVbHk8BpRZSaWrDq3u55FXW7FUbbsm5Kw",
  "key28": "5Z3iwuNpp6Pmxc748qmb1nnoSwnxSxL1mzNsDLdL8kLhBadexaZxhtNwdvUT46Av6zptL1hPqQCjA1p1WVaNnWHJ",
  "key29": "4rS3c236c8kajXNHK6fDVW4hyNCiDeduxRedzwmkW5WxN4CaUHHJm2cH1M6RwpAW9MPN1TosdscpdCMwUaYoKWmy",
  "key30": "5NhAHparH4NKHC5TypgBoDnRJHMgYwhKLBbs3FixSGcAtTRKbumKJkZU1HGeBsZJwqUCfhwnbftYcj3fpBWRFtPN",
  "key31": "55v11FMgZ24XLP9QE7KtGygsqXP4hGToRadEt13dXwUvJSPY9pzBbf8SbEn4SiXBEdDUnSavmkDHrNUiwoWwQxub"
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
