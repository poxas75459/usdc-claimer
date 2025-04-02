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
    "48VPJ9npeXx9sdznrrcExhbAcikWBdSiZDYNQXhukgN2gjfRJisbxt77sJJCRJusNnTUZzUCYPuNgrxmDF4HmVgS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FuznhXwwSiTJNdAB6Ew3fCgNeArt6TsGdqdo8mfp2wf9YZdLwNxoZaapySY4iMWznd1Wc9LH976SeudBc2kkegC",
  "key1": "5eQ3g9oAWgotceUY6h19GpzzFfXWFhpYrF4HbGKavWeNjnyYCLWJkEJvisRXHGpF5MGNDFnt9gr3xXnDNQtuSwmU",
  "key2": "2gePKq2cCMqfqbimgk3LE5wzpQbBh9ti72R7VtzpvKckRV7o5HXMocucPDh8PL2iwaKaU8vd7Z1nvCj6ccYyKaaF",
  "key3": "4rx3EyvsT5Hm4FLgb4e8rZUmfpE9A37Bfj6aqTAev82qeumjcJmouQiHUiGqKrMbPf461taQaZZqUTALHoiFMeAt",
  "key4": "2T8efqCP6bGehXuDfU42UNq124MeJ8PpCNx3TKWMUZM9Fm7n27XqiVAAmQ4zHvJL53NHfo3wk7YNLz8LPy7R1aZQ",
  "key5": "49YazRNTCWDu1KpqyiFYS1vmWQfaU3vvDD8Eo6z54vHBZbLnw4wHykCbrsmHHuWeW1qubtrT8mBkvqrX2469wD3S",
  "key6": "2eVm77GkZwBv2MdH836XBwnJdT8BVcXxd1n6XSVYqtRe5gg8WpL3ZEZFUjJuWyJWuwKJikuVBamUAytcLFNj7T2J",
  "key7": "T776xUYvD7BfGS8yDPZ5W8zxuDeeBpa1FAGUtyWTLC43GgksAVAcMAD5gYMffjt2fsdxW81voxJ4ueeQS91dC8B",
  "key8": "2141fULVusAhTZag1ntHQoxpzxMiUc54QSdNRqVkXaWBqCxUxj1Aqc2R458cDsugr5qc3r7ZsojGvkJRFeJwNrca",
  "key9": "4aiVpTUsvXdS2bdy3doiAzsBLfovXsyLucD7S3UzKb9vsCndajLZFvfdbXf3VYYrN6MeW86sgosmzwBD3Rc7vfYT",
  "key10": "3NN3VhHZEX4d5Rek3bdXLz1kjogzqwWNcT2ZKS5QBJwG77qcaLCwUEXhkCbTXRWNJFACNQvtZUwXtdagSau2WWLr",
  "key11": "4f7ZrGxQQteD559KoHcs6mmNmkhPLXm4efw9MsEPKJ6M6BdjQxcD2auH2nYvQMFL4jKMhFko7Y4iYBZY9TQMmvxm",
  "key12": "maYTKSCLN3ur3WnLZ7Qump7nF6XZR51eq7mCXiBAGsfKoushXn1L85Vv9vszW5Ba5UUH6HRVZt4K1ju5gNPGX3B",
  "key13": "54JB4WyTTiorNySyTcyADiVrRUePvjZwSueTBdVNYsyANtb17mZVg6A1QAqbBLTJiu384xffjsBrWnHUT9uhMtAS",
  "key14": "YU4o7uqRzbtnrUSdfTzcQAZbTafi4tfXfsD2aZxRubrxCiFH8s8JBrpUGX4aw3s561MtCGJsg9TagJx7LYc31d8",
  "key15": "4W1mj6y3AZSD6eaFzPCApvBP1bEKB16yRwbkBPtoinMBQyVpevEyXyTjjS3GnaLS8fxXYrxyMefevRrKrrjQFpT7",
  "key16": "3arSXSP4HGntrWrtJUD76GHgLsKijVk5Esn92MPhqQKynTCD1TbEA4avkJ9rSU36yzVfrK2Bgpz4NDJMHP5mdYiQ",
  "key17": "3fF8VawwxHiAUauGtjNUbyURLtjvvYmbB9xUB15WVYDcvj2mJWUkMvNxbEZQh2Eub1F8cvzNeF11xh3kyfY6Fdu3",
  "key18": "3TtcnQxWX1PJAgcZfd7XQV4A2xQsouvvJJeWFwcv3cERr3yzdC5Jg6gdiDMNMow7SeQjCV19onTvcPg49QwBy1Wb",
  "key19": "2Y24MchKbWzH5wtpfvtBQa5n66KqKqFdiUCB8QsDuTNN74xqMUtoXEhEUwz3tzftFNTgUnSy62vb7QFcqsMEFwPY",
  "key20": "4hUCCHn1SFydpKeRrYg9AAxDn2JeQMDWtjGKYFVnxFL6vZjWqHnbiv18sczg5hGdsM4dgncyNJAiWfJDt78AaB75",
  "key21": "3XPY2d8xWTFfT92tj9oDW3YCkWtGyXT4abi7xaeH5eKQQTUp3YgH1Lb7GmUGrrU5DkYSzUyvfUrcM3Tu9vhHspGE",
  "key22": "2hNqKUQUXe8xia7bN64uoPmkf7nyrV6dum5yqpbeCVSyLUWJnihVjAt8FMZwUiH6UsAMpvgnr3eHumoskf2xRSHK",
  "key23": "3r4Yp2yGThZwVSdnL5oRaKqZQ7qynG3WV5WityA1TEKgza3QFHuP2i7C9Evsaq63Q6ikRWvkrf8yhw91EJrYQCaA",
  "key24": "RNdSr17uey5Wzi5uxekeNtH4qvQyiiS2nTbHYnohzcLmDCFyQsFj6xT9F2Xbaf2DmguejGsaodt6Rij1ZCQYGRY",
  "key25": "5BGNaFyrUpjhfg8WVkFFAqrFRZie3GTWxpfmhr5EJwurZjf6RzvLegWQ8VZn1oG9cD8DAJ2rdQ5JJkTuduLqbCC5",
  "key26": "3hgPS1ft89mHS66NeKHawtzc4noZXvuHApTncrE7iP1UmakQ9UUiKkjjJJyxmpp7Ss3SL3Zsmg4DwKK5d7Ryn2Zq",
  "key27": "u7Q47YhyLt6U2Za7e2qJbzdiffYZanKTKbiHqammPdu5ixULE8GLv734kSnjFnX65TqwwMSwmgPNXCBq7oDNfnp",
  "key28": "4U28TpoviurPidiXRpkGFXsXo6B5y7gpckwbkscCKFZ7ueVEeJ6oKTTgW7QNScjtroygi8aob6nKUUNPkaKosepx",
  "key29": "2dQswuavGqMDtkJYgXkiRqRj4swQsi4drbTLiKc9ZgnftMffTgc89itsMmtL9sTWUKpDADcLMWNbnNT8Kh4bcAdn"
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
