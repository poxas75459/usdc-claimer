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
    "5w7xA3KZhEX9y51qPqJhhNprchHFVS7jdS3z7qhXVxHQi7R7n1DMTCw5MAJY4Gxu7UAuVfuxfJbSah5oo4BCxSa9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yhx88B5zhTGfqYVv5ZJ7ZbmMeXtNnMGMNTqvmVdJTkkFT3VExMFCxZtjMXGvTmPKMbykrq7suDC6sqrXYcGZwKB",
  "key1": "129mNsXYNVx5pCZ7iUb7CdFJBMMW6gUag4H6tQuPUDiFaB8vjVWzthXf5okMLbBaJAGefhoTnjScaosSdiR6DTTC",
  "key2": "5tHrJ4FJyZDeTcibR4nH1MdGz8v4cYzeYmVB7sHHTEuM5hX9se791aymzdQujrnNwJ4gQL1kXpPmAG79HPEzpbA4",
  "key3": "42mVcHUFrTgsoWbvrPPx3ZbEsExXNSLpQVWzyL4eDjCjAzuxGuFjm5pihcSvX9VcwLKtjS6LBKQkh3YRS3CgNptV",
  "key4": "4kKf6Tf9VnrhxYcyD9KR251kXSizGnBmC3L7xBsJQVCRsvRhJmPT7EE7VSaaDW5ML2fEFZREuP6kUKpxSGciPY3t",
  "key5": "2u3ENck1aRx9sqEdWeKwjVVnc1T5aKEtRzh3o98KoF3bTrNU34hMkV8tyrEDk1x97GNeep3LDg9qfEx5oK47opjt",
  "key6": "jMEcztuzAH3urFkoNQHMPNJ3PkNxdpXpDsntEnbQPNPXihXjcQ7hLcQiSiJ3ejp8T3i9iQfzqqZx7CYSgCFVjsF",
  "key7": "oNcn1zPMUuvNbRZ1XY3T8BRfrBKB2nVFZUf5cmAxVxL2iLza7R73GDsxTdpeT3EQZvuHP8tkxoUDXcXpAatAP5K",
  "key8": "3ru3pPew4hnj3H7eo1WHPYMdwg1ni7gMzrvy1Dbuj3XEcke4EWNojTmVWKX4eHoDVXZLdyxEdqozFDK8VYReapxw",
  "key9": "2TjNauLZyhT7NAQdp9YRM8pgp6xkrb5mHMUC4pBgi3R4qMSsUdtbu3rwgE1J4RxbvMb4vZretXmNDXfW8uuY3Zpu",
  "key10": "3VGr7KGLBp4Srn4psiFHRHWRW5ck2E8TvmrsL6hpA6WgNSrJfSxg7vcoPsC9NxB9XhyLG5cjpnBmmvKicGdRLF6q",
  "key11": "53cjhicq57pTENLYkzNgx87ip1tsvyon5tRCG1KHcCUibpSFBquZCwxRk1b4FKTYnHJtqXW39E39JdczERArxSt9",
  "key12": "Qe6xDPXKDtyADJkysasxZnGi4H9ugTwyZzgVcd6fxf9eNTVEC5rVWH7jTK9x84CXXsLgDw8tBodiSWChUwRAtwP",
  "key13": "2UxhjgVt25JWsjnvBMGq3H3QyFrpCxxQy1FjNoqdU8dgVWB1n6EAnvuLT4mmccFfxZ4MmqH9d4DJojS4iXcSpET8",
  "key14": "eZPynnsjZ4RR7sBwmngrMmr3y2nCkQZAib3g72noAkGphw2tqydzRSLMaHRgcM54auwzfNMtf6xSk3SnGRbgp7m",
  "key15": "44Vo6YuYLTB4kwmB1zcfTTCcmGAqtumY6HzyDYRNboF2se9XTDveMKwVNFRhjX1Z8DLnDFSseny7vxAASn3sUSa4",
  "key16": "51GYyXjRBMgAF5xMaP4imuFZbfE33aVMwgy7wkiPVLdMuRgnUUsdu9oghbZZZ4hFtFPu6XxfaHtjRKMDyFoBFtqi",
  "key17": "2WyNcejh3K5zorYeyNivXyPi8VpRPZdKBqAXCJBa7WXYV3WfFrSmNj1HZ3FmKoJ7Lxr1wnWZnvoN5hDkreVRppQ3",
  "key18": "4Pat7S2ZPMaAeNB6hDYisUZVYiPCf49H5h5h7fCXnh9zJ9DzW9aXop5iy8NsRcnWGyu7ixkVxYCZqKrbcMLjCskD",
  "key19": "5xSNQdMT5sf8qUepCnJ5xy7JTtuNUx6JgWgGBetqtfCuaMhvPhjDG5tHoV5uRKTdfaThBdSXofXPiwh57d3fENdr",
  "key20": "444HbmJatjdjV4Laa6hZrSBsZaMg9JDaXiwkB6rGMMTRze8ecZawZXHMGHt1MVHfyQ1cdoqPvEJTYM7kbqLSgYpk",
  "key21": "5hR1Gd21i5izUjTKVtMx1UEMJzdE2guggHPTqwx9YFkfPgm1LuU7PUzQRdggBek6dzwMHUjZGukC8Qsr9dUX3frA",
  "key22": "4LmvCsn82nNiGmC1qL1zsYxGVatJqjH4ecsn7v5UQi5NuyCdfGMGR8oHmTWLFyyzSk29P72zHvvdkiZLGEndioW4",
  "key23": "DQv67Gh6JgVUWNytoK2AUKbTbCeeq38FMYZ91ABp1Pt2Rg7XigaA3wfzVX1WQ48uXpy6YjpnNTDVSDKxRDsv9gv",
  "key24": "2keFggKSb1Na9WDZsfszWyJXBdHoNiafk4xxB68VgYBgY5VTNZTj5wN9aNRJwWytzHNng1sPtQ2yemBfRAKmYCrL",
  "key25": "2LQWFHswgGR9vKewssXqedNW4UoVbZ5xaBsRjErtv9xXmwkvMU2LH41JvB84WHHfbBKC74qsgzVLc3HEahkxQiHg",
  "key26": "5WnbVic4QBgFzuAGLpK8Jfzi45KHNzT4MmAQXtxTwU6L3dq5fvsBSiFkBfNVTz8vw3KVHuqz3TSL8agYKjNWfYSE",
  "key27": "2ZdpHzypQz6jeRfw2jb6zntobmE1yezgCKtT7QCb917SSoUy6hGhWMmKz9xFYrqzmrZjuhwKyt1fz7TnEzTZwixV",
  "key28": "SdQ9gVsp1Nwtzw7qZMHVdS2wR3Y9u3f2bBc8SG3GBVQYBkrDPz8GGM2oPFnqFMjmt2dNRH6EC4x6CjC3XbNahqD",
  "key29": "21CepZ5fpttYDjCWaGDE7yCNhMxwN3CZYahDvFFPkdCihDGeHRHcsUqYYaLAQEUcB8CUKmtViZreNWnNS842KVRa",
  "key30": "2FrYoFtfWwk412vkNMBmdKRVpzzzSpHamb1MBHR3Cq8QqW3GYK2PTcqRBrMiAbntHtnBVY1ipyDrRTk8i9sS4EQF",
  "key31": "3dwd4pC5QozGxxeg5nhGyedLjJ9N4HR8y6caM31yW9MWmjaGSR8gny5KszqxmAPpUwK2hXbcUuFXUmQBt4CGDJ89",
  "key32": "2yx83Sk8tPBjLvXqWmjarfrfN1yAERkasz28wddKfFfuSuiYMfx7xtNsk9tCYQ8gh6MegtGVfgGsUxKXkwNWSnDt",
  "key33": "2L31cU4PBzLTvBgbYU3sXarS89pda44dfSNDQFhevzaA1ZyRdpeqrDipivAEaTtMKz6tCLoDrc4yZQZrg9uxuQh9",
  "key34": "5w4Nt9Z5gfhU9Kx8sZCZjLWRHNqP5AWLLufb7b2ij6qDZ9XKpRF3hgGjRuyZiTPqDNhNbPgzW1uX88fVnXR8yUsA",
  "key35": "4tJmaYZeijw2jFu2eJhXVhoEtrri4LpK72urfGZ6kyJfKNF94a4iRPbfj95rt1S7E9kUvum5hUi7fgzEdTTBCoHF",
  "key36": "4fYYdwaYNQAqnmD1WJws89B3Zi9woWboLBoXCCUAteTkki1fNuNBDic6B29jiBhnpjdhBJk428CMtTfnBJswxomq",
  "key37": "4B1mHHVfeFLJbTfdnLEinqs4wdjD8Bg15Ri7FM3Do5kdEKJN6PANocskAfBDkzkhckFSUxLjXrRbmGdGjURpQf4M",
  "key38": "3jT4yebywPUfhMDJ5AHX9WeeWpP7Qu8rkP1uio4LoG8HeSDKUrz78CyuArZqRWpRUXGsVe8WHTt4Vb97PH7EL1v9",
  "key39": "548ML6Qg5uWq44aFjtjURR8amaE6uHVngHEAmupiXzjZF6tx82poQa8ENQYf7Apmdweiq5r9cSYfahBtTWYTvZqK",
  "key40": "5RwmSpQLz37LTXfqf5TRkwXNpnVRvyR6fUFjN6sANWtN9RVBExVDM5VxZ4mHYpun4V396nZpa8hEz5ETVwnCP381",
  "key41": "678MrJdvzPM1sA2zLBLjcRosoYjeLMdMQrmr146jwdg9JaTvmUPM4VaFzeFMb6X8f4MXL3ggpds6PU6QLJJMfpAh",
  "key42": "3XX4jQWCDr6oAZMTqe8EpFyS3zBW5eizSt5cdSwkSJP9JAoLUCREjf3UngnSuTmLJuNv7PVZ7BPKph74XPhGK4Tq",
  "key43": "3EwxoTnXJxQkMVqrtBe7veth4z7PXBK8eZDXtpeafh8muhAF2GWSRYbJD4TAko2tEH1aNvq3NyQKRHRUwMR2GZGj",
  "key44": "2EjXvvXKUi9SMDuX57nany6G4NrkvGSYvRaUVt8xHCLmiwm1yMatH93b254LCw4nhzFBncNB5UqHK3yYEtgkDGEE",
  "key45": "3mYbXH1XxRE2Fz5wRBpdUVHtboigLWRPsXAH5tD7nWzoMNmxYnqditJr1E8tzu6UPtHP2ZbgLHrLR2MfcLAkojhT",
  "key46": "3dt2zNgXAwvA8wT23BP2qgkHUxoXbwGPSduXMQTFhAD4zfiQJjUAYcoVX5uLCzs7Hnp2tJrSkA8C8oqJKnZcQ4r6",
  "key47": "3cusVJf88Aqd6bARKz3VuE7x1k2affpXnVj89p6DVXwhhGeDbLa67VmtBKxpdZN9UNDRTezTjQcUiLD9v7WnYsQh",
  "key48": "2dVyoApAXFqTJqQoBin6b8cov1ySNd8Va382cwhqUmtDyZWZ12uh5X1MJKMhTFZUrVJmUWi7HkhkJeJS3aAFRaxo",
  "key49": "39P1nCAWNB6gdqUeZDC6Ah4TxWHDihNqTRExnU3wdXTadbJ9L9Ryz2p37G8NG72Qq5ZYcrFMJhWg7bFPw4PadddL"
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
