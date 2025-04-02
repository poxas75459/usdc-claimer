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
    "QEQhtKxS4ehFumGV4rMhNMpt7FWdJEvoTavBZw69eSuVj7VaJcUKDruTBD3RgzRKkBh9tCjF8GYhKXFujekKudF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AZbSpeZwcX3SiXDX3MLHCJMgnoC6CJbeqz5kdgcci3c6rP5cHmfGPcUfoK9yEXpmFYyush9NLMc8ZCtVXBEXsUt",
  "key1": "3PKruVdzqxkNpQXHoRVmPCrYhg4BfaACwmVDFxCpAvn4hRnHszoQxZcGjswVJisMG6HwpWP547xoAujBveb9FEXB",
  "key2": "2N1mSuzdxxE7AkWz6EuDm1fBFNxc8U9xErQRTZbupw4c8QFvDe8zX4QDpHzxvtakmzBeJHtSDcCSgnr69vCgQLDi",
  "key3": "5SENmNZDFCrMWBFFVhMArTGoG3RH4HRbzLgMzsYCQsULHx6VhausrMde88Ek3dZvKqr6LPvtnix15dMxk1M7P1HV",
  "key4": "5njG4LN5ZSTjoA14Hugvf9tJL6jm6boQ9wegSpSF8jt6N2e9jcVdwDAoPaQYpAvG3jAw39j6zSiGi97AKomzm2NW",
  "key5": "2Hvg3HhY3wBMkedMyXAATEkU1tbwFpUKnmS3952sEDNp3fWzg4zmvaZXFYGW2fcc87dHiMpJXnT6wS456ojgEx2m",
  "key6": "TRYYDHaww82GGzbb7H83zdYdhxLm8CiuuGRQLQWLrW7w3LrMx5fVjrQR1fbKVwLsasYe1XupdxqvEWCRdBdN1v6",
  "key7": "56dZegdGwjx5i8bM9pTSG7F8GRGdyTSRJeULKyRe5o3UPUUqxEYwm6WGbK7hSPaL6YCF8vYV7D6eHSYjiwWsGQ7x",
  "key8": "4EVXCbVG8Sskhap3woJHXWN8S2mHV4k1TyrBXMhQfweT5fxikoAFPAo455cEXdoWbju6H4kR2zj1XpsiVkH9KrR8",
  "key9": "5K66pdkcAsAZ2bC5SCWUcKqAg2KDQL476EqZUC562ghjpW7NyJmd4Wv8AoZDRXmbaoayqaRTWaGsMpn62zqKCx1K",
  "key10": "3y12oYkSUVhT6mFPSK1TwB74EESn1Gx58wZu5Nwc8vwFHw5WVrMbGrQn1hKTQcGS79iHZhCV7Pu14NYmzwZZuyy6",
  "key11": "2AX4KB9ThGRz7QUuL7LUExXTadYS8Ayw7zyrJTfC3CTU7ieunxueQh46Gm3iyJZTvxmCnkfHJqC8Po5yYWFFqoLt",
  "key12": "3ZNDTQzVzEyEVSxNUBEaV4zxWRKCcVfPhFrzAcWnXCMZeRT5MmxRBvhCskFhjP7vsXzHiL5W4JmGM14N67czrE8z",
  "key13": "5SFNWXUuhT8bbWcUJGXZfJZFWvUA1aZoyvCUDgH5YbaFugFFH26SEepWBbPd4Zd6Ly16PusQMc82iWHMfko7ZKai",
  "key14": "U41cLtL68SUBJfb368XQRjYNsZURZgApELQqnWVsZn5eQkj4psycfa36hBfEMwUeQmgwppwZxePpqbcY7741C8S",
  "key15": "z67UAYiJvnRdJt2dKzd5x4hpdgM45apck55jJ3MQdp6p74sH8b9EcqmRyD9jfwBGsH8utU6BqPVVXXP3ekZzk71",
  "key16": "3VUVMMtJXsNPdSXRZ7NJNwqYLZz3D787g2tFVFJpiC28zzyVfyeJ82y6UWQhhbTu8nfPtH3XpbALnHPj1MMKTB23",
  "key17": "5rVNdBesQB1za3t2edRBCrize5SCH3xK98m4FV1XQ3AfmenwTvVeNLcL3BMDe1AzTpVXoLg2qLUs9K7wxhJgPoYQ",
  "key18": "3JL4H36ZrhfqWA5HoZgyzqJu9KGFMngccQYrYE6HKV1xS3H1tf62am6JCPbcch7j6mpqaJ6SizXRfac738qQvz27",
  "key19": "42oi9XXq9dx7zjJGiEUQqJgcs7HQtsuV8f9G6gDCXV3Y4Xgw8B3v6YkTcTMb1kTQMVb2xK53eftKu1duvTDcoYRB",
  "key20": "xFcTXWDMnhchA5TMj7mDmRyh2aaSce3NTVmXpcXffxJSc63LeNiFm4Tj2NwcvgCH1SbSPfjFMi2PZgTtYDW3qku",
  "key21": "4UG8FGRpAPDeYEjxEB1tdwpcexgZG85NGKKMjcgKhJfRqYbYUXp2PZhjcFcD2yK8EFqwHHxpyQX5V9xzwmisX8oP",
  "key22": "3dV6TgGn6yEgJB7mX996myEJirE4VX12y97Cw22LMrTWc1R4RV2NrkguWu55iNBjDswhicu9bYB8pSXLFixALSvN",
  "key23": "5dd1WaCfqKEAPaVBgL2YmYb1efH2aep1ALznUAJ6xJKAPPs3PcZtmt2Bp4LrkFp9EaYrbaVAgnQqGTBBteAnNQSw",
  "key24": "5V9HhzrG5FxnBe5sKB3jDCs8oQGVdenGwGkb72arKEi4PA1cQpHph5HHNuJhSLLNHAo71cekmtutcj9wWibpEAat",
  "key25": "4hLW2L7VfVPKLGdvKPnM3fuJQ4bdCvZyrGvG12rSeT57zqqhme57FzcEoVK5UUgBcEBR4DDyTbqXmRSnX8xMhszR",
  "key26": "yUQDZkuCFcF3jLcHyUw8jd4NMz8uhBJqcNmenqMGTUnfKk4E4U4d5GjDK8EjobXx14NSA5V3bckJWmafEmddvcE",
  "key27": "4JXLAWt6dTYzitUCKJiFYRjtGmJXYVU3kqiqra7nLXu4cvzBX3oukwKdzPPN77aF1GJRdvPvrQL4Mgpkpxt37zem",
  "key28": "4s4W1fijkeUZyb7EvaWZGjYMjTA1Txu9KGuQiq1WMsAFnahWNCmD3AvpDpiprimtt6zzwKGsyjqVGZoYZwVzVW29",
  "key29": "UGUDo6gyCgiMM7y1ChdpCGXHbEayehvxA4ZrXc2P1UCdhECNL6BavrvC6Vi5suRJngJFo5M7ENpRHPKxfioZfRL",
  "key30": "5gGFZQBpX11kcnzuQ714k4QPawgQ8TSm6Meu2zsNxyYJooFzwdjSwPAxsBdrHq9KYghS27TbNXXPUL9GDYh8W7uT",
  "key31": "SB29hXj5nBpT5qMSqoyrv9hdmgG8kyLdJrDKCTF9RVfhumu9aQdrvgn6B1a1W7n43BoEfHcMwqaBdqVNQuFmGmz",
  "key32": "gfhhW4onfivk3Q8ZUFDKbpvRYQKew73qwif6amEjF6rwViuyEnNky6FrDHE8ueM8JmrVCm4utqyU1N3TffE1NCE",
  "key33": "2ZsTGJf9JYy61wTdFVwfztacinHZ4k6MFWxMdJukgqPKS6rD8iHVqhGaBhqfLHQ3cjdmqgXRXrid5BevzNW5FePD",
  "key34": "2pWnezj3WSJSMvYQqQ5VP42rqNqnV8BYsT5FrpnhS1QV6eQp1HMvsfyX38p9MtBWdKL11bTwedVQasy1iv2ebWEa",
  "key35": "k5CUqJC4NFDxDumo5HTrVLLXkCExtPDr41FeRWRoKrhbaw9Eyr5G9eKA2Bsa7cjeqo24CzqVuKMm7VYtyziRY7F",
  "key36": "3aJLqaswBLp1QYceMr673GnZtSJgptmzBRFSudWEUiyWmnatB2Q951SSNnVGQWiTorCuemkibkesZw593U4vdBBT"
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
