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
    "2zhkTeF13PPZo3auuVEUufTzUL7p4fpmXo8TB9PJpN3mmRfsLQM8sbrEC6nDG9CfyZrMBrhgsAQWfSUjKXyin6Fx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hSoo4gRxL6ADekg5PXtWzasQHzF6xBBmfRHtQonabottQTAYa8sAyg41iGwSq1qhTYg3SpnWNg55tcjEQ3iq5RA",
  "key1": "3BGiCoNGX3yBJgP4oiJwerhQC42Ee5m5pd9cSiUVsstoLVQdj4j6AQ16uxPisVnW2LuFAoAgcCzj5fNVh4KPJket",
  "key2": "5UFRPwhk7NnCqMGao3A87MUsvaznBxHLimqCEBP2QRqJ96URStR85XqqRLcMjEKTQgef3AcdBfcqU9mugcTLVov4",
  "key3": "4vYPwDKdVGPWTVMLgswEqAZNeN31QKAz4yiAmP6GXGsoovtp4C5duppnHENBd6Z16zFHJ3xHBRR7o6Kf44S8PCVa",
  "key4": "3yCiTbgh6dt4jvAG6WdHg5zCBd5xbkZahrrQtaNASDzr25kXo6gQWTJwousAc8mwQPuKoJH8RfDyMQG4oDbGwMUD",
  "key5": "4aRsprnPDjstyhUNDN5kViiWt1X3QFavX3pNPG3uEpU9vyfpRnuFkgN8PMfE7nqoX2LShbxqVaPnPNtqSj4eZTym",
  "key6": "M2fvfTe3etX1gQTZK569YVcrFQWGUmkLiVXGPSNsqegFTtaBJyBGnxdhiy5cQk3kauAjyiUsWyyAf188JpappSC",
  "key7": "5TAn3GpPHTku96EZiNdqnTJ6kbo8K1mXkEbooXcPKeAj1BbjmKa5vybB1PXKFr1L8mNQjmLLapWU9QNbPrY3VR1E",
  "key8": "66pAKaGzuFeMXzV3JeeYghkMxKYkXhKCoV34Vyt1QfCf7paoa1VnYSXtHSXW9GU2KeaTJMPPTE9gCbMneeTSRSU2",
  "key9": "4tyM47Y6dN9oHLy2ueWErmUTVMK6zKvYLb41U1krejCds5KziCZD66ogtVEg3yyQVQVZFQMLmwpro1Dmo9t93ve4",
  "key10": "2tQngGU4C6FoTRkaPkLfJyAgvKy1JxpGcSQfh5Bh2XMBLTW21DH3TmMA6pqBy3jVpP1APV8ZEagXdkRS6E3Ed2X8",
  "key11": "5iLVEQe1tUVwTQG7azRhGqGy7rMJv47MAcF8RhRnHh9nMvECRiJkLcKR66a8HbXfLNwXPnpcDXryxnRaCfjJQ5pM",
  "key12": "5rjgWJTCUDs1J6S79F4f3JzsPj62yX2DkQKLpbkQ3Cc8PTvLQDDR17pFL6os6BHTYmnf9JzE4cnzexLSTM3YnPqm",
  "key13": "4xSe39ZFEPkALF37AQmmFcGyKusxWyC17NtJmjW7p9FWTCBaXCaDLcH1zBrmXbZFU4cBsVNSoYyLSm7dQHNfxqvi",
  "key14": "1Xc1f3FzuVm1PDYkbAymYhtL6RiiNDgGY7p9NrPTAfEpZpMBYAzwurKVEp5s94vqekjUFw45YraGXk7AGvsHmbJ",
  "key15": "4FWKB5VCW1WHMyoZzSMiMuKGHb1mbZ4QdHgN6RCu9GaWsmkCvq28dfjVFNAryPG5nDFLcbxtPQYzk5fiZqBmiwya",
  "key16": "DPcvX998wkQvnusQP5wJxsoZVJ8JwTdPJTfkrSMPppxPtumH6SgSS2h3Qdg7gvRruAMndYqPWbRN3yzvb99ALDg",
  "key17": "TKhiF39eH8qWCXkG1CNts6GfAVM13kEX77YVkh5NSzQtz6bhY8ronpKu6egr78woM81eBwPPmp6wS2dRZHCa6uY",
  "key18": "3zMHEbeg4izYPwR7DTxTxov12mq86eZxafrEvU9Qmq82LyymBo6JVJTBbCytH6yzmvPekGzhtjxyJdVNy1Ku46uT",
  "key19": "514b7ss5RKGAzVAttC1kNjFPYU7TMcwYYSDTTALEphiyXcMFchjCvhYmbz3Kvfz9ZXDJvTyda9EwLrWxaLrc5BWF",
  "key20": "d2x53D4d3uscvvzcV7tdpqVzuJ2RvKK8WaijpXFwGz7LVZdPBFmEotUn9928wo1LqwVNAJg94mpfSbmFHQZTYhR",
  "key21": "5t1ghdigHMZ3aFesBDgBkJihhe83LgLmD4yfzaaAi8mGANvX3zAawz3CCA64GrnjcY2LmtCJqLWKfd7seV2jHisq",
  "key22": "52fjfCyLuKghsUoiGQjtdxaHfzkn9U2phzNeppFE5PghDqWE4t6peVmHowraLzikBYMxnrhx5bRCfZtJYDr4zHu5",
  "key23": "4QonkxfavTjVScsNkmEnExwwjhCvKCAdkbWadiTVfCUSGqLANGsTP3EH8TEUAb2yukLi2HMGiQVwJv4Bou6gyVdS",
  "key24": "2u5d7XHGaMpEBGkoUaeTG9gv1kKRyjtBc1YH8womnP2SL8TUZAKZ8fMKccrExStXC9jusdUpCcMk36ze1LJNE8MW",
  "key25": "4qZ5xgeq9NgQWqRxCYKTfxdavFo4dfJ8qJYgCwfTqbCqi5dfB8k3c2LHnnRYWwoWWwkbL2gNm6Fdeh4F5nQYFrX9",
  "key26": "5stfHiBnyib8K5m8tV34Rs9y1GwwJbi5ubErHJ5z7yY4uMKciNHCPDejJFrjSZgkZhP7q14vAKACogaxMWHaEf1G",
  "key27": "3ags6bFwycZbbxheHDvzEjEzsBZpiDVw5DdnYvF3DMcm4bg3RCZC5WM5cz54XU4ZkxH8gT72ezGtHJZZCq2xY1d",
  "key28": "D3Y5QBJ42H4RZeTJbkkCTqey3NnQ79i1vVE8bpJRQsPgs8zZ797vLnUhsGm4Lzxh92knpDKp7qvdy3vfd3KSWww",
  "key29": "4cbMQ3XY17FFiwP4eJfpDMnXFt7i8x7XkMDBEXDmM6hkX1fTCFoL8KfpiuKkPff8euUoLtKfQmiHw69aJkoCbBer",
  "key30": "QxHXkRcqyBrhwKhTB6Q1vCpW719irEuNCc7CJwvmdA43rz7ghsyph97nvmvQiSs9DgtmSK5gACCgr5GvhCAE638",
  "key31": "34rKvbY7F2FXeXXMMXCq3cBv7VquFTmeAZRxx96JyKRDQ5SSUohJsCQNsfmGRf61Uh8XQ6cJ9KEEvxtGtmDCtYH6",
  "key32": "3kkdfDyXoDCcdMb3ZPzAHBiTcvMFU4yXtEVdCuYVKXV535fZXFWYvsqb27ysvKoYHQyCD5vaEo9KjDqbBQj82xFa",
  "key33": "2B8AFefU2EyDn3HNSAj4HMRDmhMQG9UvDACcLVM66sdL6DpByd8WbAWProfwMWwEJ2gyivH7apfLoPPcJ8xGzxQq",
  "key34": "qv3C55EFPGeM2kGiEvcLJYgneHHJjsvfkCXpS6N7iwEjp52EQMq8vZPhNC4YcYVo5UujVznUHAVKE16gn5yxha1",
  "key35": "3zSzSYSYwwHFxfWhbSmckSUpQnLUAGxz2ny15Kmcyg4aLuyKSbubG3MPbH8d99evW3Nib3NtigH1ie4AiGve6kys",
  "key36": "4zqhUNwHTieBsaVvQ922Jjm8RYXXvgNFEhxNg6rHUuvrLcoKTxVBjqv3t65AGRs397KK6P7cXbECteeVYtoZbK1E",
  "key37": "54vC9F6wSckrcGYopvA5SGuZeZkRLJ8RupJZw4stfqmeE9e9JHZL5BxMs5PyUZCZU9s1fuWVWCrryQeBBe6SyLxM",
  "key38": "5GAvPLozs1cJfK3M6gXnSh2ggNx7zkmUGiDmGDft1VSA5NitsS2MA4uPqL3zRZJjm2dTVViM9qH1LSFXAB6A37Cp",
  "key39": "5UQeaS4c9FkCn7LdwRzmpFNRPAsho9Uxy4cqGwkhkDgYtgZ9p7RQCT2pgpjY2KsfCocP6epamMCYE2Wbcz44hC3n"
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
