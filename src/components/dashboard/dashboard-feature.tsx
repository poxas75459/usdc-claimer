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
    "4B4s7kncf3m4Brhf37LcN6wptZjeRgxSWxQg46MSjkHpXaYeiE4HSWXvS9wNXqghcUVGZ6eLKxfNBPsoUfMhbW4x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3429kma4ycLZxsVrw59CFbDQCnBNRRMoFSjHG5NRRkqNuQd779dGz5uYekLuesE585KfaJFrX5zxHgcAQveejKbn",
  "key1": "4JEPzdt2gHqh3VNXzHvpfp36ncLfPVz1ynU4RC4hDsGAA5Uz47PvEzC75eZdvSiHHMwPdrTpTdH2wEHE4Ygw5J9W",
  "key2": "4e5je9HrUwfd5Q5ueAxwDfkbdAQcW3QqDJDVX38q6ayoxCxtNGRugbZ14QA2jPXzySH8JVQyBeCQXoTu9P45k6Tw",
  "key3": "5KvoRb4eRNDa1XB3eSLGLumU5ijRyQzQqAHss21F6K4KJkvVpsGLFxzum4FBEB14mk9w86vPeX7yuh7ZsjELWzmR",
  "key4": "2jfZg9z2m8YiqimKGrwSiu2Csn3oxaJtxuaP2e5UZEuPp1UHD6d3fRLLQ8ChXVdqyZ4h3sc87ugiSP8nTnp6TKFA",
  "key5": "5Hza3rxU8sbtBwrAccBChf68ScxhUv9igFKzPfqFNRop3ut4MFTzDcCet9V1gVzSTimg3a7AdPK212xjwnZEzcQz",
  "key6": "Jdn5KovqX1wPiqn7Xm4e2unu1irQj8LepcnjS9RDZRdzcfHuh2b6HPuFbddL8AvS9csgjgviQi6bxidrGzzndRg",
  "key7": "5p6UQhcMhGcWQ8g8EUHrAf6uFymmRG5eU73PkmWDFyCXwXPr6HB6o6QwywDoDPXrgFFTYvoJ6VREifK6M7SJBJBq",
  "key8": "3M46tbo8FPM2YPjoydC2q3z3QApQxEpbfgNwYGvcJFcKwSkpqyE9nUG83Qk7HiMB4P7wzETwi4J2ikef5LHYshxq",
  "key9": "2LWgrB4htcNzkFSL9NJifoeNbptY2fc2EHEa4GHrqwjgjPxZgKsYgxkp5cxbVQYgVpfcvZwkBKZBRUCrJDQJ7M8V",
  "key10": "3UyzvVSnvR24VcdQCbNTVZ4cF3hBExbymK1UPc2FuL3KopmUt49CdUa18DYeF31RUbMMADoT5MQh8K32Hhj5rXr5",
  "key11": "4eN8FUcVPjMjvCTDV9CTUMXmGeNoszdDoWwq8qiewvUJfz4UMffkAm2kDtYEoAo2Vsi9wKWnPAy9YG1BcHSuPhUG",
  "key12": "q1kKygnjz63WZPBi1FhG1sX7oJoydEYGxGJ9oxiRw2k2J1N7zLU9hRfVwm7ZpX51cuQaQS7RFXWxUZFGiggkaph",
  "key13": "675unHBi6GpeZwQkGvVmhMzwYUnTNji36AVbaEpUvHNgEDGSavrb42wmuDJY2n7ZKXHMxcPc1NRh7AL1K1afmuMo",
  "key14": "4KyuAUsunfbu2xuhQjYjw33sV8DJ6xLfX38dnHjnNaRr7rBKnCVjuSYD7McUEdbZN8rhER9pCKiys5RShBiWKmSL",
  "key15": "27VhqHA3ciAXAdp4FrhGyCupGGUAN3iUkRVE7REdkvTHvuf3t9SbPSyJfD2QzFXe8gktbUvwSaEqcRb7h5hoZprd",
  "key16": "3oeF5AZZv7WC7sD6bKMBwFMQazHo26GaeAqeXEYDWHzb2Xkt1hood8Tyw2EhpVqKtJdWM3pV433KiE23VqysMeRc",
  "key17": "2YKwhQYjbSKo9YfzKNMqiskpeRdgz9bwhmVPtiZhuh1TkEzKQbqE6gLyxfzXmK2SWZLp3GneNgHhmcufU2mocaR7",
  "key18": "4urSSoo9tcTpB5qRdeMNtLBe9SNkW7WCy6uc9MysCtyssJRxGPNuAvtn4PMQjHBCUCFfoA2j5fgD7j59ywZisYk3",
  "key19": "31GKgPDk8TaxbBgbnmBYbQYDZnahbfRtose3cgiu14vGqS56gbiJRQ5KY2sV3NCDciDYqPog43DNHHVUsCtzSG2i",
  "key20": "2xUq184Uotxj7MV6qJQceH3okkduQ4Btx9MkNacEPwSaUop9B9qd8FyTGwvR3tWRisAmntHEKck3Yy7Nwxb4rLSB",
  "key21": "5MfUCkDprFHhLEkKmcMNmpaGe7utJbbfzunrLYnZk5PSCZQ7cG7HCUEtuQkJX5fH8ggXSyqamzRgA22Gv7MD4SLU",
  "key22": "SF5xCuYJD4mK14YoBpRMjZ5JMfkGHzrLHTEpUcJSmTX9MezQzUi9WVv1m9avP4Ltz9tE8Qi9WLaQCfa4Ut1noJh",
  "key23": "63PsYUjU2RmH3wKodREhAffimq2joLVx7qCQj9EsoVMYVTDaFBYHPNJcFLAocvnWnyPcm7Cz4k8tjiurtTtSoGNn",
  "key24": "2NTxDRs4RxAoV3N9P4SET7yWWHrmTNK242n6oFvFjHfF6uHvyQQHjhPeUYseqYNmTEackZv3x4vNXqmQUeGdBL1S",
  "key25": "5ViU5SfMcMGwBTHtQuqzc9L4zpGaEmhm1kDjrdqDQACufidm6pt2Nw1KC2zUtbnxzEtj7xQ6tLXU4Qx9QPYBKvAU",
  "key26": "LEBbGbwaapKmJgGZdfH1AhVz1u77b5rDsVFEUYSDdNTGSNuGXG1UQnto7Z6V5p48CpqPGtuqPZCqS5FaG1S8KHE",
  "key27": "4QLW1rempWJnbAUJMXb9SyUNm72DvMNYgo1TeTsm77URjBEBTpeZqUFL8g7tPrsWpw58J3J8oeYp8GywybUupmZh",
  "key28": "31kCc7z3SLHCJpSUC49wjFeBx6nh8MQUbAowMJ54uEiP8CaLMoUWHjMsB1ovArUXCZTyhupMmftcPJhfTaaB7wVw",
  "key29": "5gUDbW6RBjUkzf35K3yh2gxdPodKqX5xauy16kE4duW7SKZ4xAtmq16sEH97i6x2q4NJnuGt21iP1Jks8yeXj3AC",
  "key30": "eUYR2hkAyBaVHw1uUgUsjESSPS3SxjEYkoyrcEVv5HRChuWeRg9NYxUZBgTEUGbSwczuSRjJogcoqqRmvkYfGWr",
  "key31": "2eeq5DaMsKAcPUfwvrD7Yf7FCENnKLyrcbJ35cVaHS4byTe6u7q3VZmewx5N188F4VxykeCnDQX48iVTfCb7Zzu3",
  "key32": "3oQodeTrQwFy2x7jBAtmnQ829sZmxzmo3DAtQUrR2G6MFSSA9PY48pGqBMdLThgKrXLwYA2pPRYKayCAkuy6dUmN",
  "key33": "2bALYoZ8zyVBbBFRYPtKg1vyt6bwaAPbyoiksGrG7dtPwt6vCBnPUKAtwF8bk2AAcpete48515ERwNpR85Qv3AC7",
  "key34": "4LarteEVoR6DBRb4qjP8ZP7RhqDxwRqwLNFuQdU9PkN4GpibRqWp8xoLgaNp6K7WxewSsycytUujxZuouS48sfSD",
  "key35": "ELL9BiqrnmkhxrEUuATjU19iJeb6CsieYinTFE6D7XdDLJfkhQpc8gQybefXGA9aNErhm6apgzyNtuJKf9oFDVs",
  "key36": "GzYS9VwF9Z7uRXkMmun73GjM1Kpstx6VVz3utJubrutEbLQmPQDVpDiG1zhGDovyo4z41oTAHQCVfws9Mkgt1Cf",
  "key37": "2sF4SrjsiPut7U9PeEoMP8FLFWdDMZjkr9DyPA9Q4YqzFapGHpmdgnpYmH82GUnwCkYq4zBHjf7aXCi3uc3SM3ff"
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
