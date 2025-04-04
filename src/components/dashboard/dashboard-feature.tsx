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
    "5b3QcYyYpqJa4unW9hgF7bYZguBRovd5nx7HL8EgnFw21ReUebfVQ1ZsDqzqBVDzPGzoQ1LUNyXxXhvKDeFRZjWp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55CzyqTCHEoq8J6FRJ46ZX9vYAMhbFah87MDotGURgr119sAZPQnGgNj3yWvxg3giDXiJ64hFR3r8qYB5Ko7B8gU",
  "key1": "2e6UAUGt5YaBnaoAfZMxwFYRaeBSkbdV6vUpnvrCrTAAT3S5CxmdNSieGC8oFVxhSryrQGc2JEZQiR2MT4k32hXh",
  "key2": "3r59H1WT3DF8MrdBkWBD4pnfaNzGsCUTW1guWwH7pXYguMZtv5AH9hfiAVg4s9dVPRbVd6imRa4JLUSqczobXN3w",
  "key3": "4FKnMgbnxo2QigWJZVtzDpUio1eF2GFZWzuGNHnVHLpxoVA2ZCKrp1WXKAx4we4jYfdg6Qok5oMmAyNcyjossrTg",
  "key4": "4bgChbfZXTB6Q5kTEN1jNhe3ASSHVzJFRvMLKa8BdAWo2gJ5u3p2ANwUjEBFA7Q1XBpUgG5xmpqhkaUjAkRNChG",
  "key5": "5Quivfb3zKkbd5uruzXd2gB6aDnAo2FzQLUwrbxaarfjiqKPxyAo6UpQXsC7uqUUqbicWdQF1vzxW8jkLcm9iCHz",
  "key6": "4hrTAFo7inEY3MkLJndBtrXMKyBEsjo2NP8WkvB8QWmyLDvd3DEfWKtshZ1aRWMLL8zAAJnR9tUeuRU3sjwZSP21",
  "key7": "2KqmdPj6meThnreaxSsvW7mf7fkLLFwzyBsytrm7FhJDtsj45NazsJkkSrVzxqB4kecYtmGkCTupR9FRyjafSpjV",
  "key8": "2HCzHhMaMeXxr3hkqm88wyNTGp5R5LwzCk3Z8DRhAj7Lb7v73qWMfNs8ib22jzwkbiWAazBsnW6XRh9X9LcEjh2c",
  "key9": "34YMa9w6ty1JncCNsYHhEwG8CcHUuBjb9mqGi6Vzi9yJCTcDs346wyRHGmoXiebTzjeJHNF9m2WJaSyqkSo8DAim",
  "key10": "2eiGnE6di82mdZ2xjPQtVWW5Mp56SCuPjiZnfSPGjwwJieqiYVrQyHCL2UDRPBRAVgKxjREX4ctwhRQ6eFJ8hsgz",
  "key11": "36QFJGzDq9FQPhHWQGJgWsMevHRhxEkLXm8JWugUjzBWypkkZQ8QtdTYHzkW8mHeF5C8fNRNwbehMW7BR3hSEgSM",
  "key12": "4wKAynfmrGXrBxKSMDc96eJNXEHszpEdw3ADfU8yb5sQqLpoMKzn1c7fWF26toR6BPWedgdfJWBbRqCVPATGxEJx",
  "key13": "2gEUwfKLTmf1ck4KPLU5TZuykAJ9troXFRqqp15BcjdTbbZW55ZMdoSyzyZU6TsrKDpgZbapc3Nrc9PKUeemBnpz",
  "key14": "pSeiHkpL9EL1bzoooxGXgin4rCPUAncxisRzu5QhAC8PzxiGUYfomjPnAaeTz2cFzmtmXhnaVh7Tx1foDLmDzCW",
  "key15": "43mLjxhhMjsu5jMcXCppNeEmjc7LcQJTLpURYyrymeqgzJA6nNdhJAmSbiUSvDJfnXKx1kjXaB717nvw3hbrpJRH",
  "key16": "5Hpy7RngsGK5vftCWKNNC6C89VDbzQjL2nZMAkUk3qSA7Rk4kwR19EobTF4i2ERHpCKWwWeFYErRoVzmVNHLSnuu",
  "key17": "4wXpCr9DVcFuuK5MbVgiBE4aheGzpkRbvJpNEnk352yLWd8ByWdz2aWWy4ZuZhurvtA1GKPMRaQ9SrQ4YHoaZyLF",
  "key18": "526YjUuJta8UiwQkZxQD39a2SiqtP4vaEEnedANAuQmtHbusPzXubjX7SGJmBNsrwYeXNCnK2HvNN5CvX9GEkRJH",
  "key19": "Sx1QqnDE13C1u4D1VquCAiSemADxm1AcDhhkpa5VgLZaePAWudM7qyHi4Sv2NmmpQuQUtXpnvsrSWQSTYP6N6pE",
  "key20": "57G5JBNUUWQurPHvJpae45qMdBLjrYu3JfYky5AG28SXdk42vj4ZHFWRoGUE3VELknEv1gDoomhCkfLssTkNKMni",
  "key21": "4MMiAhiAjQuxLCCeH61ZNWRSCfNZTNrz3VPnntdaSce55uv9T7SKJNHhyJKsGoxwYzEMatXpLVHACgKeTdrHWueb",
  "key22": "2GqMgKhNHds5ds2vnxDnEhM4VcmA51vn9fSM9W5kYwgvMkvKwmeHEhNybUVGYWUrK3aMVwLzpnmYA5Bo91gqtFbs",
  "key23": "28UDx82GPmi63nGVtQoGufALCXv2gF16ZqgJtmbZ29QVbjdwPhf1sMXjgMvFRM9nPMYQhxzo3g7vP4dr6gjynzoJ",
  "key24": "43hKPMBryzq26XokzXhUBCbuRZN9rUgMi9upW5uVmG7wyNQMKVG6xKKris3hAFwCmW5pAkrUYJJF75VUn2mi3G4L",
  "key25": "msQRwadvGoXmF4BRRyLRFuP25EV8E4mSF5t6eipKpVg3yzyjUqFNJuX4KR1kC2SEqHVaY6iLVNsnpH5nwekSopP",
  "key26": "2Frx9ftvpDFDgppYU8hxy9d8YUMGQv9GkSXeQ1MmhA4QMCCqatzKyJ2BA5idtTqKhvTLC9DRhiLQ9MGCKkFWdhEu",
  "key27": "4Xd7NXoe9AGEy46ofyQWhWwTvdcSHb7rTQyodhMnkaexmqfzmQm2w4dX8vK7b3q9RrsHET6bRh41jFDNamqxK7Er",
  "key28": "66ECrerWBWBJyc3cdCNmNGMhVopZJrfLYHWGRGBRqWJqzsJZcxhzdifgdpNML88UBrWGK6nB6iHGQmkgnqSMMdde",
  "key29": "4pgK5wmcyJJdTuwFRDp5MPzdMHL1NfCzDTmScEbdSFM75iGQLJGeavhEPAKJuh832ap8ArxMEZDigtm4oCTbSTJt",
  "key30": "GddGXxChei4ftKS6nEuQnmSmZ6K1bbzRkcM833f3aMspM7QBqB6ENijUMTnF7oowg1y94b4RyMFoCKinyANkuge",
  "key31": "jNBmAekaL5xHhp1Q6MDszg28dkhUrbzD1nas5aCatPG3ucVaPFKMZzDBVe9yrhJ8Khn1WQ8kPJdssujCXtDtskm",
  "key32": "5ptK1hHcvXYvNQB9i8XSMyCszXonJYyJxCgWKyV3YA15FZNAvMYfJa3CHqi7inshhNoPKzpzF6dbuCvAFQ7hP2m5",
  "key33": "4etiej5x5gbs4GkcA8k9nBz8sN77k4cNYh2M6UiHrgtTPbXXguGfSGhjvXbpvcCMky7EryLSdfsXamUX6bofkC8t",
  "key34": "4mt28g9Us4coZ1UieKCCtvn6n6dM6EVVroeXmDd9iRbD7FKuhCRuWeJES9Pzzif9JsLxu4y37s461z1C7LmKYuv5",
  "key35": "2NCiNqDiuB4AFJfFTZajp8nYcrMpTcbga2xYuFSP5TMRXgJWTgemgFJPUmSi3Zcd55DJDkG6GbtqrtRYT4WnNCBV"
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
