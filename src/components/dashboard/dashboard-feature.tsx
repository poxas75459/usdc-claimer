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
    "3nxsBx23a9oApRekd4s17M8ukMRwo93qhcGVQwzxmjP4W23j2ypdzZJQ2uQC5ZH7H89PgrFFk4qR5SJh1bRWP1gc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eFk7sM6buH37DX7rqfv73gDLdFvWPnKQmVGBSTEve3NbPABFEA4cRe9ZMgCFPEjUS8KmqG51wbkiFUepTDRrVFN",
  "key1": "5DAhnRpAet1yXusvJEC93wCqmZsx1mLThWnWnrzog1PzKCZC4u4VErkvJSGXQydgZTTDDVEpKbvj57hLk2YBQwag",
  "key2": "5DubS7HjPkGZuneVHYXUYL9mVqpdkrPQgPu7HMx1aGi3X2zD3gv2qkNELAG7jGoPR7obHiG18cpqBBpikNzmgihS",
  "key3": "39B6RVkNNVkm44YrZqQ9U82FMJfGjDgGbu4ovpvDUVUeDbREqa1Yhw7vr9H2e3JFbF7YWmusgr4cqMSi7qoBbk6W",
  "key4": "5axgNMJJpb4sSbMY48c6NRpeRbStwMCHUxy4eVfLvwDQkrUhomLmFpz8YPJnH1RTU4YQi6NBsMoB1kXHHojZoysX",
  "key5": "2pa2BhrHh48oAvnRLh1Nsi7eQ5n6Lt2pz44TpvmqruH4S4RHWfD1FPe8jyKB7Q4a9JTh4Lxi2vT3fgsybD3E4QHA",
  "key6": "2dCLfymJBGQ7goHMmL8MUhN48VjRkNopAsXn67N2ZAefoauqr4dcqhX3ukrDsEKeD5ZP5ssXPvaujq8dUsUEZbW7",
  "key7": "4c2H9BLZ6tcKzpEV1ZpUgFyD7S8SZm5XqCsBd2R85EsDy1aciCQPobjwspY77k2bNKpJq5YCLzAUoaVzKqLEfee8",
  "key8": "3VcpfV3PEDpmHXDU6HcXKLdKqbezV5dmmvyoUhcKzWG38X8mZPr9i7Yqhz7bAMMj7oVibT8nBJDa6ygudR3toofj",
  "key9": "2CoeGgLmMidQBJWxyRUpbnL8C72sp2NTU5gzYUvcygY1qqKgfCam6iQ8H24JcaKMHCP31jSgysErCVN1K2zZd4sZ",
  "key10": "3iuA46SJ2W4ZF3S9Csw9TS44y8AyBd4D6PBr7434pqY856v5f2wcMM2Q24n6vgPTTv8TiCBS3coSr5bVTaWbMP3K",
  "key11": "3AKQmQDgznfozHq8cEeaKkeqDXpSCMgwzrMDKjaF9sGiKFyjBeNAAJFxezkYbe4QQACdqBioFjCQoWFvwgChRBEK",
  "key12": "3eCoEqwRnuZ3ux2sjDCZ3mP8SSp9BD2LuPYBgpo11AoAV96iYWr8nBaQSLDbosEMN2akCeZ9G6X859R3bPYfE8gP",
  "key13": "46KPqvwaqezCiwTrqfEeKnRhgUxV2ti9UiEFGxSrDNfhQBXqPebj1HYAxBmajg56zirtWjUkei8CZFgktFdKtWyF",
  "key14": "56BssqPJ295T1TtVq1VY8KDjE8cA8oiAy6EmBw2TyFZAnggNpjwFm2NLcgW193UKhsvkbZAbs5uwimuZ4XcocwHU",
  "key15": "mSwbxxwFvfDpuNx5QQDdRJxxf7R4qQL3Cp83TMGazy7Rd9iweSp8CUYEdS9Uqu2jonuzm11V6eGe6KhRVjJCjpG",
  "key16": "2NgLeTaCUfq9DsujRN8RbzyBU9BdR3uMZUVYcgvt9VZVAiuerhJ5rbWYdpc7nd47Eky7SMLYhmzaSkg7ePiEkDkg",
  "key17": "mVwBoD9PYpraX8MndhDYUbyzRVVAbrRjbXGeZpDbFQRdYnvPd8xM4zhLJJV99BtonSQXdbUe2ZUAdyb3sf8BLvY",
  "key18": "4SK3kGxsGKsLFLqzBttV3bSorQyqxx7CqmrWRVrGTq6fdtCTauDuMQxYpQRhFNUD2Qo1KNAfT3WPzwG3XTvfvJT5",
  "key19": "4Lm2rryFeL24AKRNG9utT9oS9gtDC27okbvFzWjbeXzHf4Hz6vzZNB8wcJt2evrrJB7BxPwh6BwbcNXv63FcZvTi",
  "key20": "4KswQDWAEyJNvkTR6b5BRzLqV6koBv9pVp3bhzZXtb38hxX9FRoMk9exhku492hNdp8ZmossXNzSWSxHpGDZccRQ",
  "key21": "3R9ca2h6p7w8r1h355vpfEVMYW156UMQddDuAjoc8Pb5mVf4MKoEZ9gkVZD15d16S8epfkbXQ3pP4m2YZpHzRHAa",
  "key22": "5RiamkPuy8TqcQX4xtaHJSmtzVoB8WLaGG9GjumRcGWKfM6rkxLCSnV4cz5pwg14WFLyNm998xTiJDeFkUZe5KYo",
  "key23": "53R3dyixhR2bdTSL3a5nEhK7MJjYj5nbk2mVsCgHm6nzx3hr4yT5Tguo4y6QeARFJTX9nMXWxrY947PDns3E3Sm2",
  "key24": "XLdnoPWWFYp57q6ndWr67CuFpjHZ1oUBsXaNAtnrEsFbAdfL95RnRRzsKybwCmZqYQnogcDCPpeazhZhDzcCmNH",
  "key25": "2GGvzV6BEoV51nyPtFBYixzq4wvmJdBzeHMenHMPQXhY5dRXsx5oqvJmGJZztnSpAhJVuWL3ykt4ZEUFXJTzMZkt",
  "key26": "271PmkKgsXytiot6kWGDy2w9SXEdVASGgvFJbsUSqLMd2tr4btzxwPLd3sjGT9wKCB4aNwSezB7ywV2Z6WZ51LUH",
  "key27": "6rJkN55z6qLqQ6ssRD8BUFVaEtkRTvDYmgBp9eumHQcxANL8zFTPjBTsZd6TXotx4WuUAEDrFEno3NM32LhB6wU",
  "key28": "3XzrQEfZGHnYtu6tJvroLkkxJrP7VzvibYotx25r3WnZey8Ng9YAc42iBQL1B2M3wmPiLeHUAEz3pHBARV9GVVq7",
  "key29": "oiZ8EPMgruJRBs4SLf9ZdVvhkW84P52PfEhxxzcYELizj9cfW7YmSf1KCrMvCrMCG3bbwpKdFsC1f1PVeiMn3Ak",
  "key30": "23bEXYt31rVM3RMWXfjgYhbm393bErpPeSNLrHv79kibdvgD6mp7u6HSe3mcMpqpFKqFm38zwZuPFpv5v5GuMm31",
  "key31": "4ekSoGrfwrzkPADPYGFQCMzmLKAr2U61EqPQQifh58khcFWysHg6FeTVRe1rp1v8BEEGJ1vsHecWXK9h9GuX7FAY",
  "key32": "5ksGessn2umaJWyYL8rMahooewxtM5eFD5i21eDTsXH824Xt5FRSMrMM7ZZn7SpirUj3tZquLdC83VEJLmr1Sb7F"
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
