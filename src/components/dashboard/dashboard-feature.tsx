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
    "4qBFVXSi9KpaMmovGdk792Eh3GzSfQtYEaiguqAfMk31xQYixKFkFaME4bxpbQxy7DTbXHf4Rgwxxo3uYg81SnAQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aGmi2VnWx6SJGP5rdGMbBzPYeuSqMukFD3QedRx3zLoqLMMGH1HENChcKi92uKZeqg38JDWQ1nmrxAbdQYnFies",
  "key1": "2ALw3EebdNk6amvf5KpGCCiJkNZ9G8NWrhHKiRXns7CpCE59UkYjHmtRyq4rX3mfyaJq1c5JgmwhPAfTNFc2nVAK",
  "key2": "pCr1283UwoQAkUn3RAFXEiA6hcxXiDrTBdrHxUJGVvFbCyZs8QnweWzfcbQCinbWiaswQKGaSyRoUJ7bZQagcTQ",
  "key3": "22J8w6hdxWocTjh73SEGvdF3xKfb6m7bM34HdjWdTDjuszLLDWMyRc3RaDo7Qoc4FmhHeKfhyuc5rT2YhATaJx8Z",
  "key4": "4Brr1N67J7yHB2VmPhyCGJ3Wvo1UARkE1hUMgpxxsS7nrdEYpskuZDvceLqNQcwVcHCFcYDPYgfEaqzqDNeFg3Vv",
  "key5": "5EfGJnDvjfNsmzC6NirUnuQVVxsirvx4R4tFZG7pzvYWwFHT8Pb3WxYuDgwRmnbF1sY3ciZyqFEMRX1aef8vD7PZ",
  "key6": "z37vcCui1pX3uKfZcrVWht9AeVujU1rPYsmJ2MSLfTNprFr1FeuxR6HJSxR7i6NeZFLViGMzjPmjBx4fJAmjaER",
  "key7": "3eXsTEtecd3AB3qUZwFYSrknPcNdQpPKtfxGrKjC8CkmfhDaTWo8s6mPchL58gKLDP2YsScwNVs1xYk4bemATUyg",
  "key8": "4HV2bzQ39Mc1e3aXM8vMgQRaTjyEznPitS9mktQmKv4ZWUaS3ni6N2ReUyiDdnUhcbm8M3UFuCEqQUCK7Etg7X9L",
  "key9": "5NZopcXrCs29BCo6suocCK27JYRM6uLwmiLj1f1WqSqUTbv3LRLXpmjw52gGJRuApJP5FprnF4S9h82iZ7xsA7PZ",
  "key10": "2k1pC7Qq8AwgMymhPWmRMh8ZcdCc1s3dMCXDDhXmck964fg6LtBUwQfjnwZA61rH3JnJPvX3yP2SsLs1f9uobpMP",
  "key11": "2rppdgNtJ4dwQyhsJwXdW46r2HvgqZSos7uVvZnmge9Vh2gppM5vmERbMXuKqn5z6W39GUZciTi7Wce1CrPGY4us",
  "key12": "GwmRQf2YHMLgEXV8zq8PCH15nYCBiLUztwy27BgRBqDSxpAsyq1PoooGXAbvQFPACdH8rpEfH7neJoAhyt6eKfi",
  "key13": "2Waje1dCnuanNR9wTpnSpo6Qrt4Q3nwJoA3bTCBb8HZxBddi5AxwsNfGox4WsphFjw35YsU6qBzQ6Z15K18rpEh1",
  "key14": "2vfAiEHLiyo6iM92GB9Ub6UYnoZ2F41i5et7XTqR6geNYWrJc8aCnh1mhcTj7KbyJacH9ry8pRKHzqPxr118n13Q",
  "key15": "5HYiM6KgofNM1vCyUWovGTYaSFCYRW6Viis5kyrwHcnX8K1vzQFxrU1Ath3qhjCoUsEmmM88icHws5LuFLFsog9V",
  "key16": "2ejn1R5p5zjXxMeBNVUFqAxeocG6LAtxsfgAaq77KxD2q6szyVgaicHWdhFe3ZXsBRRrJ1ugADKJt8uqVGnPk4LP",
  "key17": "jEoxrH8p4qdWrkJBAPXZyUW37YnmMfTWgrHPKnqUUDqUWx8nQy49ZgA7NwzB91U8JJcuMAQBy9GMA5En18RoFSR",
  "key18": "5xpDWyMbC9WWusRkYJN7ZgKjNaX6XJiJHaLVfaYCMjfEnyCiudoWm4q2tmJDaMSxfNnLnpbnMtJq5L3SrCG3F8yT",
  "key19": "5jRsEjnbAJMvi4JLm6BwjtGUfJERS5KwUA5bMJq1ojYXxpp8XPGN6TTRc3kAUUtFPzZTn3TQdXZSiVk9RkNfa7Ev",
  "key20": "2nAe4jhTekNs47VQcYjnhneCiCXx1PqLVDCUf7oz1m9FN9ujBMPRP7gtqLGgiv3sXAqSuRNDNyBdeVznHbuRoV28",
  "key21": "4oiKe9gmTNQycqMMhe6L31NMfajNHKe9C4tDwj9unYsfBFEH8PqJNbtFcQwuo4gPWhHKwz8v2qVonPEoYZ98XAhB",
  "key22": "2eZBhqzHTBSf2RqVmrsaPgQSnYF8h5ANz4hqkwWFmtMDGCHUvoXEewUSQmHyLbPswg47BHRRNJgSB2YLhWD5dbi3",
  "key23": "4kX6SMwbZoa4BzwNdRetZsyTsY4SAs78D6yYtn4fwa8m2NFdMmi9RC27Lq5fvLc2WwSs9gke8oY1QK2j1PevPego",
  "key24": "3FQhkLR8MGz2aMurx7sDSGyYEegxjjea2PrejB5Jvq9JDtzJQCQiE8xu6oVuu5QEDg2QQinv9ybcDyPf6Vfk7Hdo",
  "key25": "35Hn1haaQWaUh4LMpx1nUe6CKmjiFFAuRHStWeEJ33Qezj2cA52ZrW2xgVe3TETuevZnE2dZe2SW3cEYBTfsfDtj",
  "key26": "5eTATPLSpLEqFcTNjCg1RTjdwRnzgUZAohtpioQsy7fqUPnEQM1xnta3RZSyZFQNFgosPBiVGXjSg1yDNSEdXdRR",
  "key27": "26QaNz8DdtBYT6ArRmAaV4GQN5qUEscfjGgq9J4cFYmY5zupsHc9cFPqknmziskTzAeQsdgGsBjwvgVs6yFWn8Va",
  "key28": "3SfKERhmhTHwqBzUxSNAavdSLPd3eTFXDyexDBVhTq2tA5Lb1tP2ZYaS1oeqUMYTA8ocCe9aea7S1qovfoJuqhHm",
  "key29": "4mRECuA4zT21R6EDUcfYVi5gXZZMSvveZhxcCuvEDWRd6CehQdmN4h2eypaerz1KdRMCEwcAvAFZrHXoxUt8Cgj8",
  "key30": "K9iu686PZucXwX4anZJ6oVLWxKDyiKHJgG9sfJRuNsy1voaAiiCFomH2gx8ju4AnyEfZBmbHbtFSG9n7MED3e6A",
  "key31": "4634gziX5VE6K8ueLqrCPaqdF8pJ9N7kcnuMzRkQH2eLRht64BLKrYYscVXmHChSpCPwhN9VWL4Bg28zUdziyhDg",
  "key32": "2WNHXXKxfny3eLxGotAooMu2hNcNtPjoMaKKUFVuTfWuGhybKQSb7wnSoKjk4atqp7MakPkprAXKVZvM4dWp64Mg",
  "key33": "2JU1oxysHzyzK3m6uXKXjL1JYAHdB9shCeXH6M4S39c3TKXT7dta8RNKDHPwgzcEL4e2Wa4FSHshoERCnyV1keje",
  "key34": "3XhGJGwEpSykrFsZLXA1gJVyPAYg6G3d8iFcw235BSCUG1wGbtK1DxvqS5u3uXPRo3DXcJWA3m29RJeWxEMdM54R",
  "key35": "d3SWx9u5VWYMCe4a2tF5CRiQ3jtedLE8wPfgfqBiNnudubQpc9j4yZamfNDEdeSjbhNEuHsqWzwt5Zf3xo8MLcs",
  "key36": "2V3PzeRb3wzbuC3Ae5VgDMuaatP8FjEh65LzmUjkbWUqmd3vqFKkHUR4mSN1j2wx7Sg5CnEwgcpKsQ8GHW2kSJTD",
  "key37": "5T5Mra1SUNxYjJGTHZcqKbvACPCme8MA78sZyJeoKcr2HhrnmmPSTknW9E4qzDisjf3wvF1kgifjYfdqUMmDyref",
  "key38": "5xjfp4HwamewEbJSmLAhxeE3zSqViAqrky66egyfQHZVf781vmX7mWbkMT5L23D97qE4QSNLiS4sFRkQEsL2VhKy",
  "key39": "3M3RCFjnQ7sLZzpaESEsxJ3TVwogf2DsH4zL8zSpzFdbyqGeSErjoqXZowFgWqxeCugQ51VocWHHpyMRV4T26eLv",
  "key40": "8NEmZb26Z7uAKhkEwAmuFjkCjGHx3SfUcAvK4zBpX2EPr49faPx2s5qRnb3AWiVmkF39SNsVM6yoLfPjAS6LGWD",
  "key41": "2Ufia1qZsksEKX6HcjSmEYCzb1qa2hftDGiZeTduZCYyhduYat6rqEyZAa4b2TvejZs8dUddbzcybtq6TydPgs1v",
  "key42": "3Hf3nYDeUeo72GaaKro2RXt5u2JCBG3KiHYMAsoyCKWPF5x6ziWk9Q6ubgU2rKExcQpRL7QGSLwqA8WyAb7LED27",
  "key43": "4WeMhKii3TZ1w3qdT9idgL2m774vPWCKZKEmjMtmCJ6SKMvryUatztQKXXwPr1e1VCjR3AaPZCb9yuA5nSJgmuCB",
  "key44": "5EcVeTe6kPHqbk6Kio7cACBmEj8qkyE61sffvumnhjhVfrJYCEyHbsyLAutgoj5uGHMHVVLNygRdoCTu4wQFjCnR",
  "key45": "rsSnjehhNRJBTa7qo87JScAonvbL3ATSKeanoP1mdDk61CTcAysgf6See7yUzJtBujD9hTVEspGmi8cLUB5TSd7",
  "key46": "xqEVAxFXBEYcs1fyAGCQSaoM4meVGkgJEpSzsXwo2EKN4YD3WFcVaHwgbzS5AhBmpMzYQTj2CiS5RtpqGt5sdvo",
  "key47": "TM1tbjCNNk9Z8JqUQj2xZ3Y4TndEkGnnRrFdoKikF2QXK9hUd4aoNxtcKm1yCSFoDC43GAdTktLJb2j1z3x56v8"
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
