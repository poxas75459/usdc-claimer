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
    "56KCmepTG4cQCbmiYSGYs7dHaPQj7AbzeyA4uV4jpNDUbCLW1mqHAggR7Pr1zjSkYmwQegnfc8tmKP1LGLmf693Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4m7Gfnk2keLkMpnth2g3mkSdzxmFLDj6oUmwEskwZXb9cKP7spCV4WV3CuSJVJ7YZk8ghHMBZhzwEsG2tqrghiPj",
  "key1": "5KShiK6rEFEuLRzGh69icaxc6kgFyyPGpUfDv5fvjQk6f3U989HKrZvSUedC5MfB2BB89kWN1zrL8pV5E62soAr6",
  "key2": "2ns1xYJCoDXam91aZtwdmbUisuN8Y7X7uUjKZTKTEFFFV2sbh84SpWkR196BGnxCiL5J1Aj6XixD3rumbqhNuXw3",
  "key3": "2aQfXMn7ppWGKYFv6t3tUkHu5WH93WS2R1Vt4hV1PzUtmUY6tr7Fi6zDprngRw22qRPZP7m5bYuJ1V7TqP7Vyavm",
  "key4": "5R4bM2KL5npXpiZ6Rd6gXc9cRuzjkDx8mhq8sUqiXBk6mjhzJt8HVzPHwB12GimabSxcaavFCRxNisHTa8qE4whv",
  "key5": "2g2GkRKGVHWbwJRMxJVJ9FwEpqNDZCHEisXUzB418QhWzzkk445ppYPHtK976j8UvprGdBmkP8EuS4aUb16usaCn",
  "key6": "5Sai6UEKM5EqYAQ82btBCT3tVAekCZC54YC53FgPMhpFDUGcHdFHGJp2fX6hsxaZqad9hYbQ83UtNRrGhFWTT7q2",
  "key7": "3Agv19o9zdo7yZPhQBwH3V2jqPVG6xDfnnCGpgNh9EB6YJmNTD3iya3VgpuYsLAjQusUas9GFXsR7VSGsk4nKWTM",
  "key8": "2Ey4Eq8S8fRDaqEp2QNjrkx3kXJRCtwcNBdoDn3mP11VsQFwodAeQaVFTffVzExG4PKABienebJiS8mC52jQgHc1",
  "key9": "3Vv8tQPBoSEVrZERQEetbecqGEPK7YX78tpEJCrMnpjUJvVTzKuyKEGFNUMovaQW9oepmPFHiHAzd1VTUU1ex9DD",
  "key10": "29p2BG3Y3DsjD4UwkN6NbhhUSqCg684tjsi33D3SrJcso4L9kRYChN2zE4t2LJf6GyFMZ9py4uJ9Urq5muzcPEEp",
  "key11": "gR2sekFPmswUYxuhRGLcCVYm8aVdGp8wHVmkhuVmF3aFPVQshnSt1roJMYztQBFmfV2y7H6fy2m1Pa4dgCVWZRj",
  "key12": "4QTGLu7UJfJSjSSG7147gbfyQs3twpnsNpkhG84hEkUEaas2Jv4CSgzWbCL5utffCxBJHCQf9HJTdtgKibaFkS8u",
  "key13": "1KzMGpvqQAfcsF1N7W5YGmxYPq6WZQV8dotCsfw9MSU5H4Hn7VNgtFSHYHsAmPAXCtVmFE7SB7GNqr9UhgqqKj3",
  "key14": "4UdTwUvFiBQskLYQKtAr6TX8hETKJEcw4bZfXEagA1mSCy5CZED5PH2ThZeRK2B5zeqQ1agCLTs3xcTrDPpa9RZK",
  "key15": "2kyWvfHSQF4HukSc4P1QguF2nsuYB4g9ovJ9DdPk1WTX9aawa8fMtmhJeY12DQKisNm6mZPLN1YpvELiuiTkJVAk",
  "key16": "958q4WDpdtAasqLM77SSuKjnuhx45asgDbFfcPexJFqSCfQhPpMQqbUdqrDQsVaXtychxi6FCQqVrDaupnb3Dfv",
  "key17": "22t7s3e76HsFqwesKqyaABcdVHJeRRwTcPeQyc6taBPJWFiN3dMiUZU3BX9aXvfMQSLeowZtyHtKWbSAfcSdT5ZZ",
  "key18": "2yVfdDJFZKgj77e4aQsTwNf8Qp7PJuFeSfQHF7HiyP8DjC3ivmYSkYYjhxwpW9b5UsPZDkPcWSPdbbx6Eduzzv8N",
  "key19": "5nwVAq1Lij7GdEaeGenyBd42WqXVZetCxznSzEm8RBf9oAzvVH2uz1Dty4y3hdaju88unZupSfZTD9ja7Spxo81g",
  "key20": "3kiCDd1K713xRyaKDcGFJeNAK6uSXDsANjdyJV69DxDcgQ4j4wWQDU9uuqgT8kwZS713mtDRqViehbp77cTKio4F",
  "key21": "2xAdFNEYQpfm9HegtmAYJ4x4tFSRuYSQve6opnGs3HWujz55CgE4Kkj73JQFVJZbvMJ2jCGL8XkUgpyVbhR1ZWLF",
  "key22": "2bHgkD6Y4QyYmFxscM7yGyt6Xgeb9Xn5Z7ZHeGFptn31GpAv9oDCAtcmapm6sHuhCjoz6NFYypLYNsva4r9pCxEE",
  "key23": "oEM9Jq8n9VwzCEmuycY8yzjbkL2CCdeKm4SbTTAcADyqC53ZnoWKi9vt1cdNBvUn7ErCPV4qwUpQHsLK576RQNj",
  "key24": "5Rq7yMruA4EHMC6C7AGBHgtXgFycXt2tQyJvcHpeVcnDNFa8QqYSniBwyhJFoYygr3KouuTSLVwpfkobBFyoGUGk",
  "key25": "3d57oWJZfNwD35R8qk7yp7w4iUecMMVQri4pqDts4thRZnQrxM3iG61roHJ8hLvLKapvYaRmMvBtzNYVHF7Jvonj",
  "key26": "2P7hzqRCXT2AbzbXFiHsX7mh7HQvtEAgJrZk8egXuK2V2u2LkCLpCthBSyVvQbJYfuRKGxebebSsWPgvRMjFN4Wf",
  "key27": "2uvLRQnpD2hyYdiDGZR6DoSdUG57KKhAAo6T9viZJpXA4txUBSg3ySx6juPiYHdWNJN64AsDY7XJ6Vf1YY7dSm3S",
  "key28": "2yvtj5uHjB8synRr3X2GCWSpaN1DPT3BSzDLG68mj38kxESSYKAH24PWJjSzTKDyKNmLj9GZP6bmLrCEGoZ6QuhW",
  "key29": "63sTrt3HtjTNDvKhh71QX16cnTWJ5FoYQqNXFN7txCCraAfXPAukJR9f33TZsY5qaGihSY4ZCnoRSpbAqmdb9CcW",
  "key30": "3q1eMRLWYaUBMfzLT3jSTU8kXXCRK6C1AKjM9aYBD5CHNZm8MzeoZMf1kj4egkaMgJotPurrc8sWPpQTNXLsUSPP",
  "key31": "5LCoq8Wo87jhAtL64GLH1Cod9Q4wEUC67suKznZ7JQspkL5WUkJ2yuw4P42RBRyP3VLzfWfRzJHgM1xyv597B143",
  "key32": "3wW1oic7en5xyd8wzfJoofMnJFGeEmBqgeNZThQvZiRPN3cgvnHpZKoFQ9mfguxSfsj6NnZhsARnE228zAsunYdM",
  "key33": "4mzgRkqo5LEJsCPVwTBizKat7pM5gNJNcvmLJTF4aU47Ytx2SzffD3zvbbw1vtgYZcUf7Sx2JSSyYStH6xwGD9FE",
  "key34": "65CHLkTKg5GT1RemJzXKdxtTUi5ffsFgbDCEoe2mFUunuGNKs73NkWnoi5gQbqDuhoeSgoNCvXZVPnEUDbLYcEvd",
  "key35": "n1aNTqckgWrF5EwG3dgDoQYgdePA6cHYA3SAZiiNc7X35c22GRKM3QhwPCouQytxZiiTLGoSxQiX7VeToU74Fz8",
  "key36": "DbJydfwRjgYyTJ4YusXmeYJMwg14fPfqFXmLidWyo8odm1HQRjASfV6sNfvm3XH985QWZoHqEQddN1J3Pb2dCqP",
  "key37": "4veRbnMypuBYTDcRdE8MvrzqE28DpWF3mksYMnxzkjqt9UHsD1CrqwuPXV1wwrtkdnT2Xd8UCYZyNvnf8RDehWiX",
  "key38": "5qhotGg8yMJwY84PU8Rt3V5d4S9Nu4z3QGCjnQcBsFESVZwBUxQuTg6LCPP8Ej9UPitT8Y5QhL2BP1qa1S2JWGaJ",
  "key39": "5qM9GdZGDFjxe2FjGZCKiALTLcScsKR5mXcUvLWrBU1USWBCX18igp3nXezafGstwtNbDNGyqVrWAYdTMXkt83RC"
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
