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
    "kJet6qK5ySxWKJief9TDn2sHEa4fnL9onaLo8RmbSdxR7HREMt1JBf88TxmjC16eGPCF2E5eJuhQF7n4eNHW8kJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aUDuR45Rvw8aFCFxJoLDxubWRGjUFikzMxRJ5muZkLaA6fwN2wkKRajFgpTjCpdMVLAxBEeAYqLhL5Zs6vkf3HD",
  "key1": "5gcHBTwrrdvRWPCiT3sfp2Fk255qJi7zntjH21JaYAEm2hrdhjjYYPHQ4rHXeuzCBfYjiVYKPutPjHYchintSZsd",
  "key2": "3Z6B6cMCnL2c9d3d8heNXpKE4VPzQLEwGvvfzWtebjtgco3E5enzFyXPik8KyrethGsNKRpwF6Tog724qRhYcpXW",
  "key3": "4nbnBKR2cFWAfujVSZbcuVKcpApPRFJkRxoNg47EV6S6CFoFWJkgfXNrxDySCrAMEaYCNJYKJg7xzWQtT7PEWrbo",
  "key4": "bhGWKRqQVm1eu9yKr1iWAqsQwitL2gFTu2wWqyjbTBrEPGppTjgos6kDK1BooTzXg9MM8JPiqSeJQk5PjffqrrG",
  "key5": "2iQV9xzzdhRJfcZaKJPxJJnePaNM9yc2jy7usjhf4YjxCdeAHenbnuFRRTpJkSbgM2Mspo9hpabB93Q2jkiumeZU",
  "key6": "5Y13YunGdpFaC2okCCDQtNiGL1Wryv1KMoCdkkhbBJWscJRxWdRpRuYsTVEic6m4wGxbrRixa7Wj7yjxaUXAY4HJ",
  "key7": "4RFLMXhXLhCuHMQqKr4r2sg7weCiUHtpdAFEXE9kKCn7H3QTXP8vuuL55C2FiDFnutvVG4ppfXfrSX64cU65QJEF",
  "key8": "4b5NfKZg6ByDfpBSXuogDyJfC1ms1UjScuQRq8qy4pewE16SMUB1Ee51LT2HCoZ2v1KgpaoPYGYtEhsYXgWFTouU",
  "key9": "5sK3kKZasHiChBeC1Rtr5nPPjL2JoVPtqaahzU9tK5CtLsgiAbxkMsL41FTCx7iVRoZ9BqmBFnfaZy2YJr9uuTCx",
  "key10": "5qMK3YuYCTYmfxbZnPwPeirp3KzJJuXCLMQLab7oc2DBXvnsmYdCP3PnbWhHitFuwHJrRG5csZktvJZPhybLyZgN",
  "key11": "4ZNZSNvyZDbQaoZ24dhXs6eWZxoux3urQThEAHmm48hEGMnbgiMm9D6PDaawHtfsTS1LV1TDKfYinam7xeFYe3GX",
  "key12": "645ZXK5vYdyZY7segaovFMpRHFpV9wJK7wogbrcZPx2CuRXL1StvqoxNCSw7oJDLWGNJT6tfBzdqhAG9wzi3iuYm",
  "key13": "2NYG68HNdzFGVPuZcLEE92xFdAaqj8y3VVeNkn69zmGFSWmCsXBNNjXEwZy4B5wE2K8vXCnomzfsxykYqWpUjBvV",
  "key14": "oeyf5vcLqKF1wSctXZQfwhYig689iSbxcEqQZ3kCbLZ6wiSC2g6cNmc5eZkKaoHu8Prp8a388Cv5sPChzwVDdMs",
  "key15": "2qaExsZN8WFcK6e5jqE2TmmS5SGPNhXjGwH5wYnVHspufrPTU1aqUh13ieZtX47EJfvyTTWnxjqrknUi6B9CtNzp",
  "key16": "4SmZycXJRHBKqozut8QQmuho9qmMF4TguSizsUa9QdhAnoQbz77nwuFmdpdGHKjNsjUCHw2qEdX1HqPd8dyeLHWD",
  "key17": "2Awc8t8inKVy6pGnoq6k4nLmxfYFmc2F9fJaHs5cczz3SXA8LE6dMCE8LNQTe8EH8X7NeignVebbzfsj2TaiM3Ck",
  "key18": "2ESBjhJZpSsYsXHtq9HZKWCWcm7a2mi9HKL9RUCMZECryyLygDpfvSFGa2tVBVRuSWJJ13YJAoovDi3BnHMX4mYt",
  "key19": "3rErdzcd5AKNaVFvtxqhSQsCAr9yU1x5JTjebcZeznB5yE3SQ723KbFYdLPTn7KiTM57RNqp6SaRYUexVciL64hK",
  "key20": "3xJNMCjsqW35wKWrFi3ctTBjuhLqvQkyAaWcCpLzmPNgoUHe13GG798EY9yJCpcqJWJvxgPEu4tipM6eS8fbgvNQ",
  "key21": "63f59Ft3U2zaDVtTNERvRLZpbe8NqQWXbx6y9iZ9JCQhFadE9EhsziPMSRcTCSqFa12FZRNr7edA7AYoFtZJYBEh",
  "key22": "4FSZajQC9pvqyFqtuRWwmTuMjNnnMJAT8reDFCnVUHTRzRMacUcJNC4xBnNkuJVNjLbCCqg2nfGTGeWW9xhkwnVb",
  "key23": "413A2dhW213U3t2NvqAQMsU5AGiU5ZqmsW9oSwn1MeDQGz9BqBt59SH5WnC3h6u2eTrCqTGmNWDKUA5fi1pWSmBS",
  "key24": "49FScDBRprK5aYtky34GFDcHz2WFcxSC67M8pPdFdBvBsPDitms2TzjKNTrk35CQKKHVJLJ5qo5aUgDMoUYd6Vxg",
  "key25": "jg8eKAQ3Z4KnC7JUdzKCGmP3NXtc16En4CfoYVDcCTR85WJD1qb7XQtmaNT3hSuEdx62CxszEUsJzYg6hrsLdL6",
  "key26": "2c1GBFyveGcWgNXAfbRnBNP2Hqxi21ZaQD6SAjq5QDShh6U1M68h7cx55nZ2QTc9gZTUR17MfpuXqydbAdxTDRmz",
  "key27": "Wp3W4MJE3nPJQ124jA4BJBJDTMwzGuzRSg1ZQj3GZtY9FevKReS7zskyFRLvg5nLF6C6Dz5QurKP6WesCzvkQLj",
  "key28": "612ioPgEb6JExnCEhVsEG58LwMeELDugYWteXjzP4CDwjSNFeth5HQHXRjrMk8M2jj8bKZZuLGHbdfCaZDcaKewb",
  "key29": "3E1jcVFZG8Q9NpLMM85j5bAa7e6pwnS9RgvzVWXxaGcUiqpDUPYihG1jdiRBtLf56VbXgkK4wutvRcETRwEbkbtP",
  "key30": "3ZFb2csqyt8ZePqQVGqM4bgyJQ2iqFgXRjiUGFfsVeHao1AGuoCcgcNL6rHw3bgSo3W72hacmmfFCzCdn7HV4Ehx",
  "key31": "5v9JR2PuCVt8J9nX7GfFyL4HuX8Cu8C8xJqHRFQrbHdGDR2RE3DvGUR61R3wr9hZscA5jr2f9wrTGMMmRPBDEoKW",
  "key32": "57eU4ypA5ukc9Hx5oE5e96xakyRgn9ipWSshFgjP3wRgYN27pZUxD5kLxGUBmJRWK9MbbAdhcoS5XxUkP3CW8W5A",
  "key33": "35yjmy4bZCezEZUC8YduxSxNDWHGgEB2KrgdTPzWrLAABnpXhVZHTb2yWtdjF1bhNug1uKvP695nEKoadQ9gAyym",
  "key34": "3NnSDFTGDxNxLzbKJxYsmRmchgVHaXAD4yiBGqMAyutYEdie9fTxpfWPjpfiXrhjKxURYHHuFGru3SGb25KaSVnm",
  "key35": "65UwwtRSSikt8WkciiHyP4nYApHyDNK2XueY6S6NAtaCi4adQfpUC9461vShNpPkZPUwJZZmVhmvFtD7iQj6fCBS",
  "key36": "5cPpN7BXpS6A7soqJzUCMkvGawFyNtyJgBDeG3GogvBR23e1TatVD9C9o4P8h1J1ep7PUFscfcrrQbNBD1BkJTsQ",
  "key37": "3tG7mhQ2aA1TfDHYdnBBmda9mZumbutE8yCUBXdquJSmKVgRQLG9WzYNxLRnPepEEZEVLnDFRRNvgVoJEGghhYRk"
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
