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
    "4WRdmLB2Ho8rEo8xwoxhAPAr6iqYnAyXTQY91QUfVs9yotQPW25oJo4VZaz71MR5n96LjBxTwLm6WUvVpTWejRYw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38NkhzUhLy9icHvWgxBhzH2SzoYsTxUxoyG1oDQF4BU1LBBcJpXxrsyjHjru6couudJipyQymFo4zZkmjxduJoK",
  "key1": "64Lqf3NHAFkPjB1SADaCZrt6SPu47b9q7ayoDv2RHdW3u1mBFR6hAGqVohn9SW6hGNiq1Fh71nDHoBjJjA3kx4DK",
  "key2": "4hWrRiVbZRphwfFhGpZ6N5D8tGiT5v18MpPQmLg3YcPeCsR2fjtoTRJRsDDrZmCcKuvaR48i8THfgtA9HLBVPfNw",
  "key3": "3t7wgqUfiRPGmXy3UxejaPoSHWiSKRxf43EfddUPnaPr7B9BDQLxwAzcMiTNMjkSpBLyUXm4jtxJ3qhwu6TE3tKQ",
  "key4": "3yQfrBQScwokGgdNfcNpahMQMSM3rRrdoddRSdmfbjQAyvnePexNBmDdfjUVdzv6xzrvfces31fEVAGuQyTiPfZQ",
  "key5": "4eEmuTZRKTMXqUXn4AYqNpwR5KrvH8x8q966zzsGd2LpJzMWy7kLtHcXjKH6wne5mLLcYoJC9BjDtkGP1yj522Yi",
  "key6": "2XEyi7NdFguZ5xzLDZmvWpcSGTBuYnvmPnCt4fpA2pknJnn275cSqUskdhfJ4EGpZ7QavNUkFCfYWWxi19XJNVF7",
  "key7": "4n4LwJzXo6BMZzsG61uqWnHCNeYapDgjG6c5UqBYUBha7r1C6AxmxoDz4dkaRmFcDa3Wywsz7jvfwvRK8emj1ewu",
  "key8": "2YaysNkjtCfaycvxBF3QteAC5ZBVjBGUGgob2QrNu1Rdt5kERgMB8fhL1sh3Wm6AviKa2zS5DSyRfryJ5QURYLqv",
  "key9": "4D9h1kwiKRjvg8RQvvrBveNmQxmxoS9RXeegiCZ8Tx5T2jmANkJyLo71Zhzyhy5HLxa7oLi7qPyaHdTnoFY4nbRY",
  "key10": "PiU1iNwwd2CFndbDHvvQvB2xmnuhu9HMjfhetV2NJ7uXK5TjKSYp8uU1L5XTD35azHeDGks7mri24MUdo1DmPqR",
  "key11": "9TLtEPCBgRDhDXwPjewHqUH1e5VimCo1bhorEhJJR2uCcUn7YftvViurkSxVhSNMgiQ8WXnhgch5jo631r61w6a",
  "key12": "5AyNUzD8kchQMVHS8uZ1JG6WLVQqdM1B34nVUebBtNa74soLjyVYRrHbUZ9YBg3tPNrsCCHNr4b91cQYrJHHKXHw",
  "key13": "5Fv2gvPkz2XoRLAHP115EcstYMvcgjfhkVr41msXtAfcpa9Z72fat6Vd75pq4WrzSjavGsbQRbz4Lz5UTwmZv5ek",
  "key14": "4LDoMZNi25BhHzXNDG4s3ErYRauyvCcms1un9grisBa5gYG7zF15uGqHqmXTASqPGhj8sY4PsivDZzayjBtkV9Jv",
  "key15": "4FaMSeRWP5o7hXVihcAFybofPHVr7YjREu8c9NfJRoTEcdfmEEad5ZvJXYrfqHtydjR5eaPwizGjP7aJc2RtFKNs",
  "key16": "5vGAU2cabENM4DiFCMePyWYyUZedKsHZLjVG72guR7rBcjoZqZwPDsZ3FTP57ea5DbU5i2sdApYTUJ4aoGJQgXZS",
  "key17": "2YDPXbBRfDr1gNcEUxWTvnLe5pUHwY5xdQNMXkusQrocWwEsTyP435kLzy9BqZ1gHJBNV6gyKzwCthGhiezFuiQS",
  "key18": "55aaabc3EtjZXPKfydmVo36vjWL2jFEMxRzadnjc463fYrxYX87EM7wiWYVqYHqdwmEM8D8YtV4SuyqfUHUs4fnE",
  "key19": "z3nBEJ4k7adtj4oiLTX2Ruckj4wAjErw5svhKAZFKFSyU5KRghNxAj6FXW6a9XFq646jPj1Tc389hPonsL576jo",
  "key20": "4c3BGjaC6p7duynLo4MYS3K29sikCF9xKCHANxFsdMv73dEzwAvj13TmwfXgH3vBAP1Wcpaymn1cXypjSp5uVyFM",
  "key21": "hf3MC2BHgpUjBX75PBkWCN2nmdBYneWDUd3EsanpzT49QWo73Mzr8EnAnYF47RmJhUYE8mnsyfMqgAA9eBXjHgF",
  "key22": "2u7KyCHw532froUAW7JRtbztbn2bTBRsZJEaELZBRuLRfTKbaxsG5Rq4VLbacZSE4p73ojAC1ckMZiScXDYCWKzP",
  "key23": "2fCXGp8KfzNDf5bxoMY6VTyXUZYjQT1AvqRthRa1KZJubHcDHoYe6z9ZcEL8QV3Z8cT8gs9scepXRMgeLMjbfmSV",
  "key24": "3jgxFXwrjeu2xgjZw2AGsTJ6DqtuQDTMW2A23hyee2BPJ2MRVoZqASnzQkuTH566ei9EUmuf9tVpwpvRUiG2jpa6",
  "key25": "54qGgNBGzzTN3vWiwPoRcnjLEXTih5DCe1ob5YFQdURi5Zusvo8g7jxKwdjrUi5zBF7SCggxRVch6tLVny3kUJND",
  "key26": "qhbx46Y8dAB4UzwBxVgGGDuWYyMnicLcssgDZHfyLxJcwQ3cnh4z6G3vgs62XJHrGLvZuYVWpBmzkN7dn5z2XVY",
  "key27": "3wWQJDHbNDGWPZN3yFSR8ePwrrH8iLoSwP4ZtsnFabULLHEXEmpaf53aueKBMPmEXTCDxaeCyTZSzHMx7W6EkM1a",
  "key28": "2uNnfVhcPjmTb6qhyEZMyBXKFewcENhBQMbZ4qrU4d1WgFxEARLjGDqhs73h5Ytgkr8dXmXc3jwrPa9BPFMisAMN",
  "key29": "3U8YHYHESczBaFkDuxJCJwLvLZvgqfP8pWja1ZsZhsSQowe98QaR2FUhkQw5xAqGDzmqSevzwmM76PD8uwrTuTNa",
  "key30": "epko5kjtGeWDg3eTNQwMn7syr58VBR3E9Cs94sMcBMqjH62dqEa9P3KJcqjgCkrV1rKzK4T5waKVyJhRV9hNF2H",
  "key31": "yNBMKPL17cuVBhSoVpSLFTUmvs9G8Z9Ana54pnTG8Z4mnoEXTTaTsptqEzGt5rtVhj6RkN1sdFswxDWvsuHokAm",
  "key32": "4PnmZYjiCTPSgdr8ysmhvjMEDrrGrUwBvmn6AosnGgiPmugbjRcZX2UwHjzYtGsvCsqA4PhUAKBA5dpo5M4Zryf3",
  "key33": "4Sog5vcxk5dXxeNksr9oLLHh9ovraS92gW2VhkiL4UQdZZiYHM7BBAfCtVQXWECUtbYWtftS16HsrrN2LtEan6UY",
  "key34": "4NKFZuzuS9crRp3L9TzSsQeNqQQkJxY7uD7hm7kkRw3LjaNbDhvo6r3iErYDv1Lpee8sN4kkymwv2kPhpP4tN9he",
  "key35": "wVVqQC3RajZGfv7qw9X8PVQDnmHzFYko56oeMgq43mgYELgUm8ZX2dq1YjxhmRRMGo6Czx8M7KTWo8onMfLREwi",
  "key36": "4RwfgXJXHrGaZvgmmDpevzndPc236zVWSuiiZPbTJiFzbFkFyozQWzrWWLW8zMRzF9c7xFZCTvizjqdPQKvfsAc1",
  "key37": "GdaxZTAF3EsRbaftdGJkyeMudcut7DMV8Lcqwtk4U9nCtsLXWm281yqbrkFPif1a1GoGFinbQkijzh3Zcqkk5QL"
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
