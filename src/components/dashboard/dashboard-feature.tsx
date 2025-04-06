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
    "2fMGs9715fZcdJHdkb4nDAMeDZork53aFceupiBVhkU79LCsxemnKmaM1jWua2apxkp6ESYYzREinc9ofHh7M6AK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42XqbmZSNVpc2eGmYcQByJsbeVv3nfH4avNMUVQmo5jXD6LF2YJVvUWZ2kp8uhrbPmGvU3Zr87RcVRcNTAxMZJZh",
  "key1": "614Yu1NJekpov8QwDM4qy5eLsWTwpM9eTV7CEBvtBQCthQZue8mFZcbH7qYTyhm8bvJbYmJ1UfAjFhEJbhUEjrm4",
  "key2": "C1HTSM4ReW3bhYaVcDkqFRZVc1DaeJhfpbVCqh1b4dqH24eJw3uZipPHRhWroondXdv6a1exE1mmooaiTVo1NtZ",
  "key3": "6661b4U7e2iy7gcxasssPfPF2f5ZQfyAMu7GsafLetinPC8kHamezpQGxz6r1zhPMHUJy3mtviTFq9boeFJYrxCQ",
  "key4": "kguQww84hUg53hkMBfYEjPBznZaFTdFPpH11eLivqjNifEjKTG9rAmcQ3P6mFsEqDZRukqLzk9KpAPvJnsrZcqk",
  "key5": "5hcfpsHf2NWVv2dLASrdyVKZp13sxQEoVjaXzDK6jyjrFpYSMDAYjaM4EXVxjxHWRby2LQPeLyjSrnhBMNoj4uCT",
  "key6": "vT3PEnFZthsCodjvhPfet6cRT4EbZmuv2aTkP1pjTWwiNbsGb3K1xK4zHK1riSbaRk1sbaje72fszhXb9E4zaZg",
  "key7": "5mM58kJsuA4QD4Dd9XiTvJKjHwUrrtuL3S6GKw7Y8LEErNaWtVrCa4k9XAS3FZdWuonidY3yQ46BWpyz2TT91Z9d",
  "key8": "2F5r4pA1q6n8C18opr3Nb55WUxD3z3dwjscUJf86jNfWkDxR8izdp5zPNuRASMAEDgbMPXKmmRbna3TiiTYvaUXs",
  "key9": "NJc6Fz9dUgXsh9xyuy1oANRWTw6AxN8gfTMmTiiZnK9cs4BRVMr4pAe11JfhJTsYaAJPKbCifpL2ndAAGeSrjAr",
  "key10": "3fkwqfdQzQR2BqbEcZy15BUSCXyJNcBwf7yJwTJuLXak2ZioAUk6kFL98JjSdAhiqm6cVtcNpoQr7GHcqcUw74VM",
  "key11": "63Hw9PfwU8Ed1wu74JVk5J4d6EnXH582WWLuzWRDSQr3HrxaNratdJYmCBZxLWyvxKgSLAGHYXeKUQjPmKAo14dY",
  "key12": "2qfM5TjmZKsU3vXrJYsJBqJ7ovaw1Mn7oP4dG4NoAJoMT8JMQSVpygzF8Q9q2sxBkuSUQpLvJG3ip3HDUcr5jbLq",
  "key13": "4PCFqPMEi28pxd9xHqEhMJM9E5tT7miWNdyqQ7nfJYfYFb9JDa3GQzQUFCsb499pzRwrQHpG82APornx1HxB4cUn",
  "key14": "5pCb1ykai6QAULqZoWDSK8NEWxGSCjjv82sQ9aTBxuVGhyqLZZS8gV9HVpRYgGB9q1VKrwiJggn5doW6S87Pq5XS",
  "key15": "2XfnPdNwaM7bfLctek4kukio2wLyTVjHn2bD9fqQh551yzRpEZPAbeuAKTyHq91pNN7GXgSSeMpUK771sZUXWsA8",
  "key16": "2risVfLj3vmRHFmVeKdS4MppZRQbLhh8zov8ndFXbURBRCfhg9d823XWxwYjLqm5VE5SdW89DZGhzami1RQTu2r1",
  "key17": "3W8jh2V7wfkxydLJt6eSwFeNVTkceX83xKmLbP1ivJJCQd5PGkp3QgyBdUauQfeKW95KtY61Vp1Bopgcp11FonqT",
  "key18": "5C42k3bURHZ9htNkuJFaqeH2j6Z6pAdZvTLZvkeuhh7z16Tgn3A8oD9KENfSZRmhxyUb7NGjdPK29Ff7mEiUfD8K",
  "key19": "NqWBhRkNhetDTY8spSBdGpkqBGTzbMb1kkcSy4xEJ7FymtqpVJ9ZiPJmM7WyiQLxT3AtEc5apiGUnvfM6V45fPe",
  "key20": "5Y12au18rNYVEPMeZKVHHyt4RVX7S8bDpEiRpRKdAjsWbSKGhhK46wxzCmtquvXkg25PVRXGPNGzsmZLN79d497g",
  "key21": "3TKBTj2M4gaBcyhSK1vWfCtg21qChrSt2SYTL3c7BMNxeGavafiaVvdTx5JobhKPpsu8MPNQ9fS1JVcUcvPghky",
  "key22": "35DQ4ySxLEd7a7AieXxTSZeqU1eaTLwBi6YpytDqcs4LcLTCUj7yHM77mhu4W5b4785bzkyor93841y6zYWWmLDf",
  "key23": "5evP7ZfGXEMm8bpmqX43g7dLu8eJeGVKkjxm65Ccyg887CwhD5qFdh5HDAzp7aJsdBmA2asJ3ZKB56V4woYijr6d",
  "key24": "3YaNJyVMjPcYwPa2L8dQ4ND2ebEAL9qJVwFUUPRtVFdvgfqisGJQFJGsGaFxXhtw5PCUyZa3UtPxsVeQEFJGiFFi",
  "key25": "4mnxaV9mjDLUfzcx95cDV4XuJ9oD6kpDn53bddfhPAsC1isKqR5M5kuUKeTsgco2YHeGm6eGwJmib2e72ubfiW7a",
  "key26": "3BgvZU21XBTHUB2q79JTPGztgTXnux9KLwfqdDgQNkdLo7hsrXDePS7ghdXgeag6UKtUM49TvSbm8KvPB31GrhpK",
  "key27": "5iHkbiSG1gJKw2DHyLs1kqqo1qoZdmgwVrsQfJeEyXPMbwSkiLhRdoMyNbfYnudYaWb2mVWC23BMy8oiTUFgKXKR",
  "key28": "2Pq2NTzbZ5anBL4vy62VeckYuVVwjiK4aZAtwk2kaZeZAT5fftNorLcFhdrioGR6r4T3UH96Es6rpq86Yp7HoMFv",
  "key29": "3yWXQByEEQmc2XGHUxsGNkmJxbwew7DpDmuGQ5pP8nr2aYcUiyg8CbDXWrTrQvmLzhx6CnBTQwLMXjnmJtr1phuN"
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
