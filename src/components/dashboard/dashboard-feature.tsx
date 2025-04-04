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
    "3ngiPancof8eVMa3G1kQ729RXHo9NL3HBcXoNrZbpvqbCjF7HLpvWzVW2MZ6yxTNUDNbdZBif1MZNm7UcgxSU7KU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HU8Zh6Vyq4es8GuKnUA5hpWWvCfoQGFsBAxNDuQhbcua1yGZbocu2L4CaigM83PLM8DgRbn3LmzkKyKdAei1Qmy",
  "key1": "mRr6XSgRbuKA1mJNMkgALvWAnPPnPAdYxUbzjDXLF4DhXmnpGPsX6ZkXhTFzcZnmZr4gPmwvnUPAJTrmmQj1qx5",
  "key2": "2M41Eai5QouucSM5bYAoN4hgtch4iW3N9UmxkeKXTfy52KznGwXp3ws6uaqmvnw7BDa4n6ZAW5QSP3hTYdE8XxGS",
  "key3": "5tLPaz9xP3KB83L1Mmvswdw2zSu7HPXXfvo85zDSF6u36rniDtfYbHRgAUgvk7A4NwMLVn2gNZnfpnsRgr8VDQFu",
  "key4": "YjqQso9xkXXZfb1g11JPYZjtPAPxvnad54kjcxHTQcW5aGezR9C3e9WVMQ3wKYANdn9tNVP9G7gnpBfDhq4nvoD",
  "key5": "2GbSQnPW9rf66QPtzvy8PCUmVKpHi9eDivCeWUV5GdR7f2Eh4wMU1ygkQMUwTpGtREXqTKAM6oYaQwpfRqAc7D29",
  "key6": "5T2Ej7ZD3Z84EmpVWqU76x7o4dfncGUCAk5M8vkWDyoNvjAyXk7rRqbo38NftxicQ16iBYvchMTo78oTbZhhzEz7",
  "key7": "3TqHuZaALsNnFn3EmXnVBAExXYTdD9DQbSb2gnHqPTDJjMqtnjuuDPhNWjDYegEMgq3kkZCX8eFGT21V38H25dUA",
  "key8": "3eF4NNDqaP1KegVC51kqXQud2fPtqu9vmjNpQdrqtN9RFSYADy4JMprkuKGThh3ZgjxresHGtqYn1pgYgvCpGZKE",
  "key9": "psUXsSwE97bGQFKeJgWbMBjo6Lct5hbpfaFxALCTDyGDTpN79XE5FKxSjv4PTaCDcysnDrxTgnVrntebpzR71UV",
  "key10": "4xHAJSvA43QCvCY5giBJvqb1P6FF5RDaSty79e6SJpXYWoGKo8Uj2FUaA9nSpAsbEcuigovLtZUxmYd8B44qWof9",
  "key11": "SFVLKhTdU4NXuWxEHs7TvbFHtf6TAVmVMhhyTy19L1Eb17qAbdRNRqGgzkMniTaH1WYtuf3jJoSow5HzhrUQT2N",
  "key12": "56PFpTFX9NpvnTKo8MGkyysYDYMH6xokLkx6gd9xVdVzAdkKNbrLU7rEbZwBhG9Wfp6FUJQmzQxtC2i2cgUfk6hM",
  "key13": "5aE4MoTHnticVTCieq1Hcay9KCsBcm2PzRyPKoJWxBTLotsxqdDbPH6hTqGijd533Ty5PbgnW8fGE31XfiCqP3NJ",
  "key14": "5BDqxtYG27hu7zHKAcp458H6JgbpTJ1Wo6xbkRbkDZCGicAz2Qgsc4yQ6eTt3CTUKVFnvUb7KW3Hn7hm1n3wvLiK",
  "key15": "44pMrU1QpTCJSrZR55kG9Zg9BDvbXvgB3uUFxdDhUX7DBQENysftkBN3cKUkey4GhVANrWGzEvXRo9KGpwxmkEkA",
  "key16": "2fdwBivVft4BbYSoK6wiVuehDT2nzn39T9DKKR2iteNctyAKGrW7fJi7UFADxnYrstihNREUfySNaPuUXoF5dtzu",
  "key17": "25hLdZS7QPqnTkB5MydiMAQayRdNUEaS13LjREQV7vdLGhJGBwXqckyXgsT6o8bs6qGWNnLYBanKuW7ViJfbEBxB",
  "key18": "4PurzBzgUuFkxtgPAN2udjN8iENxZpbYGUmiRL1gJCntj2A1Jnpo4f93wG2yLPt9HMQR3oCauGoLaPdnB6oaZz7j",
  "key19": "foeqVm9ky72KvPepbAaVEdWxRjDMMSpUnpqHoNqXS99hc3mmDSCNxhuYjjfJ4Wc9pLRbcVVxRkSUYVB1EQsjXqi",
  "key20": "4x4mmQS6V4Y94xSntQoXxFne53yoDhCw5YsHiFqac1kow755h1TbzedZkuPLtnMCJC39vHZSoFKobDNXSLz8Yagw",
  "key21": "3g1zKrforY9Z8q7eCtoTQuJMsb87SarwCAdsnYcxnfJ6sShYxc3YgRgsVmdiwirmCVsiCEGZDBNrphCxh3N8Tufa",
  "key22": "5CK7tE9Jyg1jQuNXQzJxc93r4YrfRvBbbrDnUbsWqvy2YTG8MtJzTPTqxgcitgQgGmmUkR28VVTajcMiXBaaKmFR",
  "key23": "5bhvb23YA33supiqt35A98m4k6m3kgff5x3nKM6h7HCz7hvCbc9zsHTyqn8XG9XLfF8uxy9aci13CHVkGLKuNCGY",
  "key24": "4BqKk65vPTAwt7bVszKk3NnvgcSdFnnVjkKRMQmXibCbuYrCukgYqZWuGKHttzvGgxRgqzTDPaHDHG5op8ufnPf6",
  "key25": "5htt87crQ6Db6voCAPYbyQwX3ojig8SLSwRCBdDWQ5jrDJnj86Cyns59q2DKbhk9hKnVzNJapNmU8Q3L4vJodGUq",
  "key26": "3r3vo7udBHifqPR2tvi9aE7MdADzkZSRwLJAoB5wsAcRbYWiB4EiYcDFfJVEjY8Nrgc6nXHCu54MpkqARKJNdv3M",
  "key27": "4Pggu2cfpSSvqnJVtAnPyZaiLHhQ4VcJ1ZWkE8eGEynQKhMGVCf468QkK7KZLLWECxUqNG61ES11WNswSxchraJp",
  "key28": "U6daFzy8jUgwUmpC88C8oc2zN4U7uU6dDHjAY7hQeEhfBEpAyXH8KA3U2L2mxHXbVaBderwmSFicP2KYyauzP2p",
  "key29": "2SriZMPqCNso5LqVTWKT9vnGDRsJgd3JoerffkzCSVP7dytM9PBwVSJcVp3cNxWw7Lh3WW9QFEZhVGDhcP7eFqf8",
  "key30": "549uspNb426yjPmJyXvAfKD1LCtXCJ7izaUspJDtA3tyNEiGhcEm32S67XgG2T1Ci92Y6GrUDBMDLnNuK2UrHGA7",
  "key31": "2WEkH2rHLiijQDK7kMVAGybYNBu4tuNmbrwbuJapgri1bFkXoATPEQfRwHXYAW55UzP866aWCFPXsrzpe7s7uV7Z",
  "key32": "4wYUELrZmSGHjmRmRKVKaUciYtFyB8FNGbQ5zmTXddr2CCwBFQXJu33Z1UEBLTKini7BRpauzXBb19ffpKVmsmA2",
  "key33": "2uSMnv58FGZfWBBWxoW4Ef7r2Ufi1W37TuGgSBNtMnMtZns7K2Smk54HW9Q5RLhuMWoeWsd9gcZpCpkm4QdkunJQ",
  "key34": "5B1Svh1344P4WmfvQ1idCS99fSScqMq3QgHhuZc9QxWp1EvULcnnhU1LUKLjLTuCxSwAEZP83SygYe3oint7LZux",
  "key35": "3tJAiaMu8pEyB6TD87eGiNuWyNC7iYMmzYJ3Q6RxC5bG2sWuWedzJqipX4VZQ3WX9k2zxhzwLtDeaEbuykjgSgzV",
  "key36": "5tGoEJro2uuYFsdUJCMadtuz61wt2nUpy9xvrYustetiwj6vJGF6pE1taUf1YCzBxxekFQ2qhDvpvmY6xwJa46jZ",
  "key37": "4ck9n9SDbicP4wk86FVjH5EHWbMTX6cmk3usNHyUyNrVbar8Pz1UgArRovDe4pn9oGeweFEzmxZTzhLhJf3V9Ydk",
  "key38": "MU2NYrgv7BPx52ZqD17oY6DbvtWXYeZgajP4Rj7ELQEUYwNhJm2DUdJNn736FDBx1HaDoZxopbkh4w4rpkjCajB"
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
