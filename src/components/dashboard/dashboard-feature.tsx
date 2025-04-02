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
    "2om5Jg8XD6beQKmS3JDbPsdb43MuDwaM1WSS7zBPgi68KXWYtTDRuSg5aENqB86mzzW2gSA8WzdZToBLifkbnt2r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ePa3U837nKeMwJWRnkVYZnts7WLZWqoHzr7UrNKgQMF3MWdcd1kRwsoAXPudQBadtnhADtCKsPQX7efM1Q5496g",
  "key1": "3iFbogkf8BBoZrpjupS3tQt4kreQUfSqD4SA8vWPtABSG7Sevk3KAZddYJnhr5R6yU8vqmfqfCLDbBQoJqUsTwb2",
  "key2": "62kVj2Rmk8KbpfgPBgWcZe8FA1qyWTxxfYtodVkkJJMDiMeySpTKcj2Ww6RQpiwFYqBZKkFcEHMCPpbkcqYKQYHh",
  "key3": "2EhGoCgZVYjxTh66JSFzsRGAV2v2WcdLokULbATyJrWXdxqdnssx9JoZXsGbWDb6GEizSaf5Yumn3PE4oFDNMTUS",
  "key4": "ZsKCmXSfxSCHvXJehKetTheds593MApDaJXgc7xupCguR2wK9BBomWheTX5XMm265MoF2QFCNxDTfNEQ16dZxHp",
  "key5": "UHNJ6x9tDYRNExthU6GKYFoPDBRfCCJg9mta6SmBCWbFHPzr11SYtdPRBmTCAT9s7drPzeu3F1Prwcx2TtxtKUR",
  "key6": "2mmfshxN8HMTbEU1nAAjoGLYMu2KUFAJVSjqsLdDe341Ev4rZPt4xfjDyRN4E5uwbWUVck3SFzpcQKHtYJ5U6BsZ",
  "key7": "3s4dmBBWhGZniCH18MdoSkLDq3JuFhHRdv1PLKwYCVPBSyYofHnsRXfxtpAwkN9cgHdhV7ZdWTzquGDhJ1a5r292",
  "key8": "3Akz43Dq7tCTQbWkqP3NSTrYj27dp7ogeGRHF3WW7sLUr3GmP1kG5MVFQvnju7gwxaD1TeTVHrYLGxyWCyWDpknK",
  "key9": "2AMgT7p6RLR5qLY7mvjTRtRqWp6zmSKbCQBGPaDRQNNbP25C8tfvw384o7VDNjvFoLXNQiowiMhCaopBpMCwAEZt",
  "key10": "2Nsg2QUxMp84Ee86KRKjV44JDL7PN42tEqwkUKAT2xfRMQ5rZj3LsQG72jzqDiquP1nZ6aeRwADNBaNK5JBBTi69",
  "key11": "DXDhpiNHhWWGVovc5sew1Sy4dqy9kfLhqxPVN5MVfEqRfrmDNKVEAM2HSvLHEgNeH2Jm6qbax1ZxNkg9FewN7E6",
  "key12": "612iX5HtkwHuctjjRGL1z3yC16jsDV8iagVkGrv1eAZryKbSqGC51PrJFxKFSKDUNtahzUZYiQAirQQbkujsgsJC",
  "key13": "3jKrA21hzGSoMeqSxYoqwyVX1heyQajW5TU9Qc8b1c7bUjt5pAbsjQkWPGASdzuoqkwh6tGHbBs4aBP9pSV8bjEL",
  "key14": "2u1NFCASh5JTSWMFAVyCmJhptGrHHJURtGY9sb2eLrQjw8Gx2CbjpFrz44egvfz6cYMLhH25bQsBaszWCMfLn1zF",
  "key15": "Fqm4Faosv22agVrGww93As5SDV6UwUEUKTdCoVeywtFp23Ugt84zE3w24cSvGFSdB1u3JzC58AzMr8fpagkdDUf",
  "key16": "2iJVyk7r7ae8AfK9SWM6dkibmUUDG4Cs2ckpNJbwjbDLXzVw8ZyUef6xMTHprk6pvw42ARrxZxGSKvsLRUKa2HXR",
  "key17": "629XK86XGGPGxpjZ9LJxkaTvFNVQdakeuwAfaJuwDLqnaXC7Nb9825fWwS3kk2FfxgbGDHdPDy3X1y8UAAMeitZc",
  "key18": "2fQLkJJjraqoNYeHZqvS8MonvvVGrMXWv23HuqthfiyxGBw4qr8P2rXgk3ULBd3PToRJbuXSCExoRL1NkBqSTE9T",
  "key19": "5eAReaB8D6CR7atSpBZCVTcTBrQpqprGTvDhrw85oDZpfvYZRPv92JSsR9RrvgsF2BwCDJru8LKBJAGXroBYtJaE",
  "key20": "fpcZTHyZ4gAGU8NJyrj9x7D7DjTBPDMJUyvhyA9vKGpHvsha5DPy5ngBvgGFCDCxkg4KiVbP1dE5XRFWAkGB7QN",
  "key21": "3VCppttHW9BJCgL5EFpdJpGdqWhh2U4nyAeNBtLSv6q8ZaBKPYvA1F6gLMq69KNpSpH4rXz61PyJedXMt2MzY6Fx",
  "key22": "2eiGB4R3K3qqSrcvGRhZ7XeBsw3kAi7vWJMBnjJuWRwCPAHsHZsHFonhstJPKtaJLYmB2uBCtYD9kKejkcxo4rHC",
  "key23": "5F4PGk2k2oUADceJSihSCxVYCLTBDnhmjkf2ieH5M3f1FMotDqc2DkG39uCcy5amtM7eYaYHhwdSUbmEm9hoFYrD",
  "key24": "2uvcXquNoijLQWRBssULwfNQTQK1cHzaRXCuqu92WZ3HCbGFLiPHnvsJEQVMF2eHWrF5NmgXKPb69kJXzVuxfXbe",
  "key25": "4oKA9hJKkGr9Lzs1KrqKhCTg4GUBCbJ3xciCPEMN3gJJCas8sa6tbkjurfu6qLRwHZtPdtP4zXGFPUmjcCcVPrQF",
  "key26": "rhdvF5VBHMdgTjm2iddjkU13Fa9ogX1N4jpNMwX3SsNk7rGkWUn6Ar7366LAW9ZDsS1btiqd4YQfxBqzttq93d5",
  "key27": "4gZeceiTCXQZNqynqAbcQFwTkEiGCPgPZsLEdTkPmR2tXxwtZG71WxyY5juvWHoM2W7kc5M4CCQrtsDnHgMurRKg",
  "key28": "5Xzricrt4M4zdbQF74xoVfHmJM46SkgU2VfjfG1EPCnhJU8v7pC8YzQTE5vKsJWb3Vf3g4D4yQSAQ9mWRrVVeBvJ",
  "key29": "3LaRZtF62sJKmxDarrTpWJt6QA5LPMTdYBEVTD45rbjkDErrjxDm69zF6qejfMHzBHYJJ4yZj45QaRakSo4ZgSpF",
  "key30": "2rAXsHqpfaVivgn2tusJrudW2JJBiZi8vC2LyqWbrd4i7ZGwiZ7qnAcSZ9E3asQq7KT9riPBu8krFqPmYi7rKd6V",
  "key31": "2m2syq322T6ZEmjSh8TqrWdbtGcBVAJw6MKKtWhcnna4zX7kXr1vXdeRDN6Rtc4EM16B49dkiz7RyU7YRQhqq7en",
  "key32": "Bq4diHzWLtSVmTqYo5Uww4PAKyrocDB9D5C6PbeRq3Pb12B49xfPbmfW6zLaCzyqty67ggC5pRQSAq1jzeA22aw",
  "key33": "2MwiyPVPahDUeG7btcaUNcP6Arn716LuSxNiCpBxhsnBy7qBsYYsouqrNZY38pm83L7suX3vGpnNzuA3fdU2dPGm"
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
