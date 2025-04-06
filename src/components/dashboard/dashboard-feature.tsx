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
    "3AK9kJWNZxJmFNFDSJoA2KPxk1xciskHhEV2dLvtfVPejX2EB5g5SLhcbGjuCsemAEL28mGfPzrYsE6DRr49QHRx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XcS4e8Qroz4qEbDaMmEnigyEngcecHPQfD9MpkuDnfbjvVXQkLomRzffZCXtQdC8ZsKNRmto2vsndxBeDNRR1Kj",
  "key1": "5ECNJ8DKreVAebDWyMi1CKpwq34tmZVrgWkoHiFLXK1jRSwocfqxzuHyVYdd9n3rjLwCBgMKUCzVvVqDBFTAjUJG",
  "key2": "57LL4A4TjvtPzEHhh4QM4UnQpQX7U24AYNRPPRNGj3v3WT7YDTEtbScJ3ebmDNBf8Z55X2jmTnPTrFdd8CopMsVn",
  "key3": "37SPfL3sDTvzmqBME2MPEYXJDrPbgLYA9J1qDS1RMsw1cN4UeDJ1a5p6mruH6jHsj8g8Zf22cfWfYvUXAL9PrHif",
  "key4": "d4wn68J8PDeCMYyoF1THjLcLvV5wCinRVVYLrVZLzLFMSWo2B1VRQVyEEq7RxWyQq2NodXBR91N3KeVqwmSyxfX",
  "key5": "2vXChAHW54Aj2RTARH5kJw3aceyb3bqTRipRujCKeQXAwneBqcmuYxBuZS6eNNfUh3FzegTUCDGRjZ1753GLib42",
  "key6": "37Ha71c72CEz2Us8YveasqQhJS934NDq2qiJy7kcBJXT5cxziVcdqCjbMbHsaLMX4rDEKqfqAaGEJW4nc1dAbpa8",
  "key7": "4z1pMwNVnACCsnfQcyNeYEnai7Cv4pKJFXH2pHHQSfZUYkvEVEyjVwe87NzgPCWffNWGqLRepLNHKkSED4e9vErt",
  "key8": "5HSoMpo2E2RXRbdj4w6Atz5SzWY4bBQ8tsX49qfXcdyzpGJfLCCUwRF2t7PDshbh4UZGQzjjNYDf9fCFBGz5MxE3",
  "key9": "hQaFG47KKK89q1sihnxhKTCsKL9trq9mE1F5bemf9vqcxnN8gtdzKTnJo8DwmaJqsc12dxpUa5SLogGxLm9T1dB",
  "key10": "2Pax2Nn7x7QtbMGVpHXYwYjd4N8TKPFEnE7C74CTEK3z5DYKUetooPN7Ezj2uFbsfBf9jTCuSS1VEAnwBzQ1x1Vt",
  "key11": "2MfsyvVfvZnramUoEmkGbUiEErtb16vQMDySjPZjDWqBDB5vzd1ZDQcBouhLALg3YK9HXvNhFbBThDQXNABccSF8",
  "key12": "5SUwikv5s3JF3WyozACWN4XGw52KR1uw9436BjpTxXhuabCRmpRLZbEFYBpfPfADCRDkkhahKbFDN5N8Wbc5FFFD",
  "key13": "4mPxBBcpeVS2hX5KtDS9MkUx1nmAAe6dfvMgPiFZnZtVgyLdG9UVoDAzky2V5s9iSnS5fvQC6pvUrgAb7gKonTry",
  "key14": "28R7SLpX4FvZpDqBaU8H8GrpU1RSiPrbESRdmUthQQSEbpxG2ELgQGopRTaTTcU1qKRbyfdT7RGoTUtKEF4tLjFm",
  "key15": "2h4waWYdDf9gqJnkatCiTUhY2j4HgAAR6mHArqR15b1Jf4wUWNSGMR5ieXVCwCpgCVST89oVUr25qcUsKR3VdhKp",
  "key16": "2eBqcs4tenpCZY4VU7zFiCfnT2BE9Mdc8kTxcYicTrW5DHPZyyaCCCQyBHLfgWFKvx8CS8KS7mp8psCVA5nNRuCT",
  "key17": "3wcFskMxUwuBX3quAnm9uFHUjtFyNRMxTsTAvGkBjUybEdT39XvjqQBYaqbP9rGhFALULYUWbfDGzMVoBrEiPqh5",
  "key18": "2JRgzcG5G9ApfHNmwK68zH69hiwF7vvZyrXLEHYTKdsXpUUgKavoZYM3K3Gk5wusNjwtACYi8HEC5w2VRtSuM8mx",
  "key19": "5fUseGbXrDks4ATjQk71U7FgimiHLQnXtig4gxBNAcTvqHwNFicLZ96T8amrsqj7nd9hQaGKs6fnnZP1zrS8LekS",
  "key20": "3dHyRyQDRxvivTbuNhBhdy6uhyVQpQthEGoKB9SQk1JhHweaDyNzeSjaitCNKELfdWRDCF3DCKTRgEsX2XQKmthR",
  "key21": "3kdHjxySSoCvMcpwrYzNAUSUCyFfYwyhUqHfVJAp6NUfhseWk77V6tBU8L9hdqfLE6xksXyaHNADKm7bBAduBWrG",
  "key22": "4uvvwJanxDPT21WrV9Q36ztW1zy88GMXojbHrD2BnWCQs85AMXwt2MNKg2PfoxeYCvNsUzXwfnFE6iRCZLkcyQ8H",
  "key23": "3z3R2wu7zPjCuhAxG45vUTG6W9J8nJ1c4iijBZxQGytMzLVQU3g5gpudj4tFezn3vqQhgDC2gA2vTf1tVFJqa8ZU",
  "key24": "22bayZEqfsWtFrwbPQugpTTnjXhKEf9HnNpbow8BLDd9TuG9Rtdedtq33YxKXAHq1khEh1WS7vWwFYkPi7v6tYWA",
  "key25": "FnYyETNsdsEqmb23VDrftYwqpXjYcCSVBbuwmkXMRtnEY225HkVcMuJ4in4zUVRxCahMMsPGDTZuxi9t9hreq1z",
  "key26": "3MfdJwUYzBwmPCwSUaPvJ7bD9CZQLZZCvszuo8BTFkQsSkPF383xZwhRCLVLuh8tpZaSx1T4iDPB1zCw7CnmALpT",
  "key27": "2mMExcq1Q3fLhA55xrSRKtSJRu77HVZBcpv7GzVjbxZEsFYZ9SgB37M2jKBGhVmRYqawxjnshjgBiXVabJr3jAgx",
  "key28": "614p4iUNrmFk4Z52TjmYq1ZakBGUPzLm3RTm3HiGgZgFpfFTsS2j7nLoL2TrCjHsHewZc2rwvEMBxmkZgVpzS521",
  "key29": "TaHiiyyTh2cac4CH6pgq3BchVFtrv3EyuhAAvvgsrLi1v53HokS33uu4bcRxBGF8VhhAgrtJhxCvAhsbwcjM7Gm",
  "key30": "2KE13qJTM2Fe7AGmTUFqa4PnrfSSQwTXks2Tiq1bTUDHMF25MpNRv2dDYdXtmw78geUEh2fitt3jwJwSob4R1b5z",
  "key31": "4WT4JPPiPuyovgVJFVcS2p426g18AwaMWW1RVYrfshAyJETC3v9P1YGi8P7eYhWNxbxTLisXQvMcJAqh7SbSnuZD",
  "key32": "H1BgTXMUGHv85Qg5JuUVesbMVdDoQZmx5GU6k6D78SpWvWHNs22hKioU5HicPNGVMRkysBA4b2Mi7jz9UgShq2n",
  "key33": "63gCosyCSYeFpmjSdEM3tEcQvW5ifTf9PtWnrmLspH2ekDc8KubiHAU1JXmUL1CorU87qzSVyvtRhgoUb4Grx6E8",
  "key34": "49rmSy7y9TYx9p2ubzSgB7iX8NXipfr62gpc51oH2zcJNuxsC6iQ6bwF9DSv4Rm3AQZZmqxbF72Y3iJ2z8WA4esj",
  "key35": "4Ntgvw7Bsz1wyWeSQFiWhFjNnSpm5VxpLyxYsc6scbHX7QCqLEdBwMDNm7N6CZwXyg5whrbJz86KDAg5bhnVkhM6",
  "key36": "4aMYu3HwA9nMJcQgT9YQWvi4s3347FnzFeaQewGnSMb7U5hBKP41LrtGYJCt1mWM5idfHqP4fq8J4HQ1SSPoEkTx",
  "key37": "59K55RdkAtrX3qiiH4uXR3pixk454wuw9JYMPW8pCk5yN1pbhjheqVKz1mGJW1VFxYP7nmoFVdQLtpzRGAd7ePEu",
  "key38": "2xt9BGunqgoCqz5G2f2xDe84GdEdPPVMwwYC9A5jCBhSQ4kQ1g9YMQVs3hNZ4EwD9ZF3CingmEU3wPxUkGX2XhGQ",
  "key39": "4GKjyDR6LExHEd3LocfySByhvKpnMSBmAmE3uNtTqHuFAXGraU7ofJst9waEzgWT6vT123oRCTZaVZLWu6W5ULm2"
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
