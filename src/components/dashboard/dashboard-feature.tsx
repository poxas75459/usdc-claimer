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
    "3zYYAHuo4PD4k9RBeCCLeasnZkRbEZAsUmNYGsV2CMhosqcHqgWHKVqnz56VnYbt5LGNzUe8nzeUVq1BuEkwiYfa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rfc4hcK6UZkFGFXLcephgzifnaEf17tLZyvFVo924NWgtJxonwGHgWRz9djscZWmbkajhgBTRKBaq5wH2g7KGQP",
  "key1": "5HGJ2mty4F14QwcR8wxjmSyaPoPKCDD3buhmns4PRtiMwnBE4oA7qhbj69w4SmrjbgTax2Ua4KMXNz8vPXEpmfYW",
  "key2": "22brKjDRQ3UEBddJZHv7r3XkZECn1HkD922bpWK98ZVhghoi9jjaGMerxFLtr2QiqvWUGyFbewC1zGf66VQGJhdb",
  "key3": "4xKd4BYcbMoyZqgENH2S1u9f9UyHEKTt6PgwirHU9ReqT1WXFTQJmXe7ahR6MsStgqZ4XCwtVxDx7geGnP3Wbrxk",
  "key4": "4AQVwV3f4CqQCFsuQjeWxMBYq3itt1Zjv7ndDSbX9KYf3D1QEt1zoGVHpCTUkk98ypcQMHKJQSHkgRhNQWSkcQSF",
  "key5": "4WH1oSMiFyA6fQsHS3mFVpaguysEtAUDcN4uUVFaMx7UFnRvUNe67ZKT11yLQB2BcWYvEJFDSHFQKfq4DTkwwV74",
  "key6": "i5YW6kQwfF3v64vj3YzRSnAUXMCNotjj1ZeE9hbNXNbubNz4PuFEDLJ7GpLU9sTKwszLyiXSyRR6SJpvnsLY7fb",
  "key7": "49Jf4ckoqL6uLZZW91HjQbDLoX2EchTPGPjy4EdUnAPwfUziD5yamQydCeDxdn52TYhAfDkUhirvqrxFa2i2fxxa",
  "key8": "4qhSTeDQ1UZY7q2qQTrtAcGHaHA1NWbrvLv5sPtmWfwZ1d2ULx1iweu5SjCpopx419fhJq7NHM46jQepfFGadfcX",
  "key9": "5qs8N2j3LhRWPonuSUUs9ASQMuHW8ryc5njzoa7BxpbWGkREvtF2qAB1nwsikupjBdif3KSf5d28SHpPVXccViCx",
  "key10": "3MnZY3Dt4YhN2uXQMdFXy2Gaz8ruHZyhN3LmqeHq6FXgL5EPeohyxM2LohaQ4YX7fjsHymHNjkJ4jVfamtmvQcCu",
  "key11": "354y3PjRBQqKQbc9mknrWz7Du5XnLp34wjaTnQfrWW6SoQXBPzGNNVkquS67Frb7ReBeGYJTmrKN8XowZiZ6qPPu",
  "key12": "3bSnYvKL4DkfV2DWfSTrkpnkWDAJnUbaDHCVNNcr1MMTigUWNvy98fAaVveP8yvLLNKNhSx1sTkRGKS1kRySptpj",
  "key13": "VpaF5DYmF1bjZEzo8HYjAmKgTPkp73AAnkWDgrSu5rHLcWc1qgXVEMmf5NsoLWtbR5WC9tdg4iW83tGr4f5Uwmt",
  "key14": "5cNeTixTX7teXHsP1HSHQgrfA7TyFxDSWcrxhJ6S6CK3CjvDgktmwWJfG2sTLYdBZWhs7rmimxsczSvnCxLSkHSz",
  "key15": "66yjjJHFcFSbPu7P78PZDgzp4TCDmE5PXWWHy2reU6EjrxksVzT54qXsVnNUjA37hzdsxZdqXcHNbfiw1PdjfKC9",
  "key16": "4TXrxB8qRFntUsdzstNZ8bBWFwL9BmeNkNwzPKaegbbUgxnGt8LzkUo1EjWH6hWzE8FGRYXV3nVTUZytpUgpLKP9",
  "key17": "4FpNAQLvWuNkVx7BFNAMq11jrse1gSsHgaJgpmZhhtLBXUewQM7GWK9eSWYjA9GbNwWG9nc8jz4U2g2K46gVyWpi",
  "key18": "VDnVApStbimmm6PBghkFjv7QnotJLxpgz5kDnGSigqPezCAKG1FmGKJUnZ5twpqcvcvPhKntEcdJYLGo8YMQQEu",
  "key19": "BnUtRKQ8B2Cm5oQUi7j8Jk32tutYWkkkaWbPJjgjzpKuWLTzUp3KBKkiMDoro2xmRSLtHbaFg4cH11yQZ9ZziBw",
  "key20": "3etT1kwSRAMShY7ZrGikrEB7r29povjnvcQ4aKCJ16stXJ6ZjLHbDbGKhojEJtTBWri4ajE3mQmQpfnZiZzuurKj",
  "key21": "21MZJZp2Zifmu8JK7y1PbyBefZY3UEgY35jbjiiuEF7pEggbqvdPF3pANTrtc6QCXKpSqZEQbnqo5YRDUUHVU9HF",
  "key22": "67fDgkDZhnayZcThmvvZVzKkGvQNPTC13W8pzhDJ8z1H8FNfMvBL8wE7JXruC6qWogzuukdegzst14G51fqQeAYq",
  "key23": "dCAN2MUPUwkBNRqFCYavRUZMPFCdKZUSKZYNm1jscQenKuNCjWe67aMknjcd8nEcAxjeg7nR9kLB1ceAur8MfdP",
  "key24": "5bRs3nPhoSXJtnVNF1bkXHWJdz73n5A8nDTsDUvF33WAAwE9MbFSzCM7GQzEUXpLX4yuMpycE9SZJ2zDGFfscxr9",
  "key25": "4QBAF52mPiwv4G7PvY22hE5Wj2u3TFQ8fGoTuURXdwAQSW3cccqRD8xntvrb6GnDfnRhQf2AQYDv3EXCie2EHn2y",
  "key26": "61ytc6srfX9y1jFExJ62MuwEm5Fi5L1R4X9gQJEc8CUEHTvyq6dmHmEquTugcMrp1qX9R5y1a9nLPEq6CCHLXuJG",
  "key27": "5rfmq3GLbs5gEU1SK53StyHMAXcvuTW9NFqYA75xAmRpY4wM11foodPZUd8MvdiKogKSyr975cabEVRNFCPZ1hQE",
  "key28": "3LZ7AS2DEXzjSN1LE2nDbUBSYFwyf7fALRY3p1koH3hkLRHMUkXB1Uua8hZYVKQH6C82dhRPvj42eUjs12FqGppR",
  "key29": "45pRpqTNXjemgupmvzXgPzTuScHepge1HZRMJZ6ivDMc9nB2LVxyD4HtjSReP4pYneb3jsPCWFnuWLjFZ5e3QavZ",
  "key30": "3buphcS6BrwjRb9YUsen67qohAkT6DqgK3Tv8zcGuUnkLg9yGXFwJGSvyMWfitbaqkfA2KTcsqbXHbfBQ8DRLY79",
  "key31": "5qvEchi537oWQo8oCWni9RpbnJsyQzpz7QrH3AEohjeC44dtNi6UzWGcqsJKQF1LuHSLVXbAKAVt6jodSFo4GyMZ",
  "key32": "2FFX6mJGFdd86CrKEU9DPaa34GAQXrnibPkwZvgvUXwrmsKJHXr47h4DeNkkG9DKT33dRzadTmiVkC5ir5g9B17v",
  "key33": "NiQUWSajuBwBUdMv8GvmvzJXLusDg4tXM839kQtUHUFBQSWuTEXt7d969SYRS3ZSnDvQoHXjrU23Z5yLLRfun5D",
  "key34": "3L5YZQ2iVoLv54FVGMgBzwREYW5Jy4scEBkR1iXebus4nCaiB4yoUNNeQ6QV76yPcKpQ2uDdwPd9aWfFvsadyxed",
  "key35": "553tac2NVzxggBaHUPJjpC9eDaqxbEY8CXnTpzk5CTLRxYpjZaB4CJAtNz6cXXiuNXAZxtH9S3Lq9E8AGuBcT8ZL",
  "key36": "4s71WjuXtqjD4bVHLLFMmJF5hiUf57VVLk7nXqR3iGShP3ynpDhwUJbnCKcuJWxb9ubv2h1FTc8wmF9uWi4Mj3EM",
  "key37": "4GqNWktVdvrwTtS7xCsxcxKqALYVfQXodUNHTQq8796jTnc6z8nhJSuF9WguDEV31T2zPs6Hkvb5zSE86Rd5qXYD",
  "key38": "kVzTBjXZwVBeLw5T7C6di6hf2YowpeBgjZyAxJ6ZxJPMbq2zgiTsvVztJweNgLFk64EZZ2yRz53oRkCjarLeTuu",
  "key39": "56pcakJuxyHLjYWwGp6BBvsyrMSRzEKoj3Wu8hu7skihcWBoaGGnN5uuQVWt7Cgy4huUDGUnQyWDVJXS46kw2WFm",
  "key40": "4VwCR81rbabhbDoEgSjPgbpjnJnEH7zXuv3Sbf8hAcZ5a2RDW2om61EqaeCLmLcWQMx8sfCy7EPuVseJ3ms7y1y8",
  "key41": "CgSmLYbqCa3p1XgAAZYGDU5dgKuZ4Hp52UrkuMB1LS6GTKQG3xbuaRekzu7vZHhVnhGiHgjCjHUvvL8yFoZVrwp",
  "key42": "3fNkSyXdfviF2kpuyzyy1tdwkh3oWy2xbbLs1N74aLoWyMGnAzMVPRaw3S8voFttAMZjzNXAfAfZs9qtoFUqfgR3",
  "key43": "3RkHhGmdP7fDw6dnXiAbMAdz9hdbcQRPgwWN9iuMyD9GUMaiQVAkHrrhuw1SkJTjUvJqjeCZirr8um8A5c8q81QY",
  "key44": "Y8uHYgZKdiAFKVBZXJtEM7qBRADM8DAoxvQk7fvr7YbawvYkt6sWmVKZ1a2hYh9jGmiLwUsBsCXmrrEE7rJcZr5"
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
