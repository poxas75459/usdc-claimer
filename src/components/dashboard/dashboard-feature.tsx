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
    "3c6bRJZoDycE5PeELovdSJDr8VyrEh9uMrsHUATB4NTanb6f87Ej5idUQBCgw4wepFGq6EenNFRv4icr99N6RhBV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VRfYY8HvYMsRqydVvGZ9gvkMgxcCdFq3LP1e27wuW1nAgQNyhzZfpzQr1U7pg98wbwGTp8g5KoARVFaz4DUAhBr",
  "key1": "34evWErSNFnBHD5wKjZEPwTfPmGunK16qQbk9ejCHfSdfmgjuygMjbPvBF9gZYcif8Pu9GMgegWSJdpgXLnYUtC",
  "key2": "4AqB7NSz7YsKx9PDRMMLCrFvVreTj1BgNGvNtGQv8rkMS75QrgT7LbhRajNTEem4A61c5V8X15HWn9aLciKokBMC",
  "key3": "3NHmz77se3LHzLnvXcY9q7fm5VKv7sHujH6MvXtLPoAqr7YNroXBrGdc63BW1FP35vx6JSmTXWwAin2JL3VpPEHX",
  "key4": "62Z5yY9PevnMm3Dh83Vb6rejVuLJkG6Wyx9k7vCCJMPG2eDTp94cHCmHAeG31WagVi15XLwVqY5jhmjtBPpLGz1d",
  "key5": "bbHJbXh8qe8AAUzoqNwEJcxV17HHuq7k22F41JUth4rbvaMquEiHUMwm7GNrnPwQkbiVeQTqCE8qDiLmBSE131c",
  "key6": "HFF3DLo2hYZb7fGriL7nDWPyfaX8KFTMCtGPXcejA84BzYVcnjTLyWvmeKGNzXxYVYDgRqLAVGDLt2bA1aqSMj1",
  "key7": "3kekg4Rn1wGfc354VUGsSN6UEDWznDTsDxTSnFGhtXAhPMYRdoxjtJcm4aR8tdSq2tb6jtc1xyk1FGknN7SqSUrT",
  "key8": "gNm7PELdCgJHS1XGHv9BNCEF1nd91KR4V6XzgfEGhuv8MYTT2szEv437azFcSXH51dsH2joJBHF1iCYdiDzKYUR",
  "key9": "5bpjRvVSc9FVKDG386ywUPr5uATcvcnjz9vhvKwmA6Sew5MJpDY5dh8hUsiQ6NXMTfWq72m7idDxZRJeVzGpZtCx",
  "key10": "AdX5iYnXHZrfGjFzkbWg6J2CoWmDv5tSVWzPPLwQHm9o526BRqrxPWnZrvNXwcew5qCajcazkY3A6uv8noLs8Ps",
  "key11": "2KVUrKiDpKokqgbJM5V5xE7w9qTri7LwZwUT9KQjV7LsyeqEJ3LT2Sxnx8YMm8uSqUJwJ9Jw4CqQaeB65sLNtU7h",
  "key12": "5vw5UdUZaFzHjNnj1zbhSJj1DvXNjWD4mn75ZWrcucLbJdmNbqBBLTxEYGxXd7mYyJiu7T8aUXQWioXwTECcWAT4",
  "key13": "3Efd6HckkbCAhCoHV9LCMxB8ii8goFsJixgG7HFzNGf2R8UjXVcEntwEL58kZ68HQ9mHohcdtu6ZsMkVX9ehiAqt",
  "key14": "3U9x8LMqyB7fcgBbGkpE1HQALRatQGXNWBxnF5WuqUgrVJVguE31YmHSdhFiqrFKWuhG45uFWWeke9yHUDyhLsx3",
  "key15": "2uWw76Um82u5VZcvP1jEr58E3ShLDR3HSLSQQTbFK4An3KK6ui4UqbcAThuSJru2kGomEMRtYt1nFTKoPYpPSuy6",
  "key16": "51NwAJNQsopkigyFX6iGSxd1y6Lm2dke3gAFZyaLsaCNCUy7aaWXQvxhiXnjHDs1fa5aqxQH1cgreU5QZHk3ux84",
  "key17": "48dAraSTUgmrEp7AH4FMZCSYEBJVFKhBNpgjVpsdQXaWGSPnNcox1BgfBrK4SiC7gYFFgTCHP8M23edB4RStBgv2",
  "key18": "4Ex2UShxsbfydwvupj9FRXqWrBQXyt44fEgsRAeftxeuGdnhrdbtCQCdw8QGQwhQx7MwxNAR3EEXLyHzxNdQo4Nr",
  "key19": "iTmL5hYfNvFoMF4VCb5Ax4EiDBr4RpfcdTfUTkxgbBuprRFreQuaM3TX5kYpt8j9bWcAvkNScFv1wtu9qv6fuLR",
  "key20": "5EGApkHKs9K2ysJukqjJ8uXtUbUQfEXaWBwhdTRP2Vx3zvVEMC1GW8wQYNQBU7orTxMUrBKhbWMEu6YNKaeDiBK3",
  "key21": "5PeGZT2KGWx6JiL8UDtc6HwbwodfbLE6n6a1CNPWLZLxjHmHKwM6NXgD4m5vCEWQu4GiY5dRP2AYSZKSHBCWqmhc",
  "key22": "TywVTsvmGXJVQBKovHjNDaVZ2DzDfC31EsWjtSKzUxzJKgGV9qFHwHfTgc1XhF3NZ46dNku6ShTKGLPweUey7ES",
  "key23": "57syfFeYBTB6jfbw18HKwTf6zVMRf4tVzGdnsKPuRZk6wHcFbwJN8qswEsRf19iHLguFd9k79Gh69LjTaPeg6Q98",
  "key24": "38ArxCKuNj7QTZjYgEeQBAWPCAv4j5bcMFexHtEowvQjUgvGQDdetdDtodUvGt89TBz9aXzsxkg8CLBSZiM5DppN",
  "key25": "5n7qgRexZijyUGZu8YFjtbmyUHt1aYhc9sASjaKL9u7kUTq64n4V8tMVqrE9gM5kk9rcaeCNpLbWEyQsXjw1SbRK",
  "key26": "PWNgQ73VoSjugi12mc3YndvK6reCtFpiV7qEQjSGk7hxHZwxxTyTH7jFVGWaLV8BnjNS4mkMpd1jWHEAUGnywc2",
  "key27": "4LWFF7zeuco56CU8nmhzFAd2rLtTcicQuvUJGqeo7CgFNGjKV3754ikCGdVa7uB39iJXLqAbyhhboJHeWx4yDL92",
  "key28": "66SV3Nmu1uZEJ73w6KaQ61HKHBDVg71ivCQxWhf1Y9JXfSqVLoKBMeuGHwQ9cXZUkpB11dtfXcrXp4P7PsR3Xtn2",
  "key29": "2c7QVhVSv6anzMgMf1psjwxgYndUfoavrAWpkV1sFq2UkqDEzzR2h8CMuwxqWsNjJGooDQksgyG6U5eNtCcj2Wxg",
  "key30": "nL5RD1EPDu2D4eHye9GgxGcgFpZst53WgUhiYSmfhg6Lfrof6WRFSvTu4FUyvnoZWP5qBgeyQtt76sSzr1WnEEZ"
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
