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
    "4g7S7QYEpbLjDvFfiPes3vSezPkMch7MDhnkAmNadfJCN1Fk16U2tWtE7WXKP7gUGMGNTFMQG2AAQtWPvMGFrx7J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4w1jYf46v9rk5AndETxZzYf3nPqchUwSiVjZ7L2CqwPMLL21A8bPKLmELqq7H6UtDkQ1dq2hRGXVwGvaXvYSzAMp",
  "key1": "4Nqs2ppXJicERRF5iWGc9NXFYCUhai3zmRQ9JYQpPCJMY64gdkPAyBjQF5qaNR2Z4DRhvFZCUigByxsJQrHfCC6e",
  "key2": "4bUsixt5pbcoFxrqkryzsQPLfDNUyRommeCTDzycJ6ub1Q5MhoqnGSTwWYssJEfzrxZizmvDosZ4LCV1qHT1hseU",
  "key3": "HfJVRD9LmEqJahsDZF9vZf3PzqFYmaPqadUu39QkCohnCVFhJ9wmu7e5hNQmsnjZzZRV9BP8PLtzxWwh7ChZuP9",
  "key4": "2UkvzufsoAu2JYnEhkmLShMuxZ6VZdb1Nb7AgVjAonXNau1ESYkUSQN1J11kMFf8y33UtcYnxUYo8Rnq6c8ndqmg",
  "key5": "3LZStKMAMFqi61hjeLDmEq9CcVE6uBP97i6dnsqrRePUaZj8yL8qJi4FUpmpmDRWVBi8DAWjcne8CVarWJNH3w4X",
  "key6": "4N1J3nxinz1knZK7wZzEc2hcwbK9V2N7dEfZ3L2xUQHmeyUWoiuxLbW3dnSh9Ng1jZTBknQ9NEwQdVije671GGLh",
  "key7": "FyUZbFncbuYEBTPAnAnv8VNFQ3DsQ8CieAE9YDcbuJTKGLpPHrefPAUKGj9AUPcfDBQRH2GL2ZSDibhbUZBF1k3",
  "key8": "1UtYzNZCiAY3gh9cQmHHWc82EK7PQFpwCk8fu6WqsYwUjLdVjQ8NJyTbkGPDjtD8Au3Hf45RsufzaxddrmVZecW",
  "key9": "3TsZj4bxgE5mp5WtccckAqKFnmXsCaYrtHyajbEsdcCzrMeFUwXyxJVjk4AtgMBSqWxewNm7TXLNMVVmVJVXhVhC",
  "key10": "RLaZcV3gWNA9h4j6oousZEmeCe3jtdFU5AVwgSuLpm3W15sUyV1uzZyNs6ydxRAPM69x5kBgYwjDs6RYv2yHoNq",
  "key11": "2fAMQmg3hk5b6cAxV65K7cuTVmeVU3n5X5Stjq7Sj6HhNWDtukHsSMzEjbbXxrchUaayQvtxfL3totRUmuL6z8E6",
  "key12": "4DvcE5mt7oeuTv1b5uDW1T4cdswVPBwcaiKoDjJM6vGcPH7taoso9aD8byftuFTXg1PyfqBnoY87QkvYWaHbmSsP",
  "key13": "2b2vUdgCq1VFmJ1s6HxXHzaZqSsUQfzA8Dxq6jaAqDe89DVcjdLmkPtFeaGSbdoB8pgRyH1WBpaWjwGsTKkvyfwq",
  "key14": "2R8yWx54gB2MuJY6xf8YLBEcZGM8ikFxXH5L7jFZcRaXSSosis8XRs5ZYA4neirRgX4K39dL3m8frCX2B7dyHiZ6",
  "key15": "3BS9P5eQUsiRNf7fm34SNkZtziPt7Rr7vamLoxLz9eT9bvVrcr5RQKnXGTwnQjQYd1aq9rQS5BKDUfEju3AxWncR",
  "key16": "Zs5NN1wHRypfkUwCPDiBnGVGk2GufUbrFVZHk2sRHVTaJC1SUVryPHy2if44q77vkUCQavzQyqEr4XSMDj5Ak8a",
  "key17": "49PcP4rfLTYfm6aUaNuH9gYtibWM8Ynnimd4p752hpJ7psNhRUXHF1Cdn2tH5oQJVeq9FMwbnJmDyUssW9ucbTjJ",
  "key18": "iNSi4kveta6k6dWV2Y5jSMemzoikZ9WCaSoXJc85fUKnVDAefQPSNeTUgUUS1XGg4jcgSiukEmPG19gq4wF3kqU",
  "key19": "NrnUiFdehMBwietfPADfdBrZafK2odGFqHT1BsctWByyfCztEFojBUw1Z7GdFdNKNbAjqGYaWBbpAefn6S2WqNW",
  "key20": "63bPz18KJqHqjh9duQGUgKRYiYQ1VzFy1BrfPz4et3dQ187LwLvy7hy6eL3f824kbzY9PA97mSU6QUbLvsBDWPv4",
  "key21": "ahymG96pax5M32xumjYs1y7KWKyNcFFWr2mzFScEbAfMmu5Ricpb94HMq8HaE6THW9GJsAJNWreoEuLM4QF3b6k",
  "key22": "3HkXDozgKTQFufZmdvcAXHitAZV6KpsLRrv4U5rjWizRwddqHhiieLeedzwaSuR7j45JQYxuBhENp27GgxNquruz",
  "key23": "5yxJ33cdwHnAQRi7G2wxA2SFUaXD1DXnswMHEQCD8nLny9zpksc1pkuVCjmgMaHE2XKsaWk3XPe9tek7JQJPdH5c",
  "key24": "8iwJ85xZnR3vxSuaHJoNCgPXmuvZFpf578VQrbhKR7YpN7MZwb8ggUDSakRnBfageX84rSjW6YM2K7EkaMgx8QP",
  "key25": "3bUcfdHGj39FwzL5bjfVa9ZetL8ry7CiMNWJMkcnX8SRtyGuCVXu92DcpkkmuCdC4sRMzn9aeGAaQhjjHLtGRgpR",
  "key26": "2BBr8xFaVjkcakH2sRbY8GFLNJNHTinQCLvBeveNiT32auZj8vezht2HiLLGWE4VkANiBRLoJ6kEJ6e2Viy4aBWd",
  "key27": "2M1R4quqpwCdgDyNeqv6z13TgHtXCf7dSpt6dPMRDm9dR85rrXhZCJbUgxpjXVDtWKAUtQQkUUQFCX2JJ3M1zaQa",
  "key28": "49wCC37pD4BsFAJZNAG58w6JzZYH6x9Xz7r9LfYv6Hk3RSqF7ZRnU9Dk94SsSSTwTnryANRDsSDhxzBRPvZXbAQM",
  "key29": "dZYr8jFeEhWAMZvvxqzXBsrFTKUfd4zjeDpxN19tAW3kvw2ucFdFmY4jtw8NSoN6FqXeVqF2oGPiPb2HALnbhYv",
  "key30": "hRP3AHHH1DVqa441e5FhbKChMPb8m3nYEvSTKPPo5qQWfDsxQgsAArXR5kqyi2pwYhhuf2Fdb8FRsTakEbdAc5n",
  "key31": "4nRKEqqbh3KDmgCRSiCnJwRfmhGewfAdYUx9VCQ8aupEZRFoajvyt316KwDdr99AAGx74rP6iRVAZJyUquLp7fee",
  "key32": "58vMk4ojrgSZGvcFHB1xS9cKVaswDehZm5AA8Wnuh4AicyTFkB2dDCProaEbgwpaq8KArjUcMyfgKLG78eKRTcRw",
  "key33": "4TGotsmAWypjGov9pWdH7gR1FbikiDQcrYH2KenPo7hYwbi16qTB43TUi3RUsGqKzAJVfpH9gAVoNrEmfF967mUH",
  "key34": "5dvhJYjehYoKa3wFyREFzxgvQxzEJjqSGXUTEJZyaDZpj7bhT3M8Si9kHCLyUovrMkkWLrQRYmPtDKtT9PLHc6Ym",
  "key35": "3MdpkAsw6Ptmy1qpWe1wMrQkHDmGGQaWa7R1F2eXQmeR7CsKMqkrZ48M69LBBt8qsjt7SPR6QCncbW1m8ZMJCGYr",
  "key36": "xyKn6r6t2NCMmCLyGwcp2FTw3SjfXatAPVGtwPVganfUF18FZsdKnH6Rj6trhduvKgWxTJW4NquZQX5q93EBVqz",
  "key37": "4DxYbV1bhdiu4wojgwEnPdxKjfDbUxqqHZraq6n3JAoNHXi3mmT8WJEb9L44EVWmvgDTmaUZsgtrovp1XRBkc4aP",
  "key38": "6XwKNwETbKHgLcAYC19WhB8FxVotXeP3SMncQpnG3XjqRjhpzbMVqpk549goDUSBkDwAzLMfwfjL9J5vbRhhBNu",
  "key39": "VsZGwcSgtBzfhkD5BG9Rhozs6oFhVWfjihmZ5osQJikwnoECdnDsFkeMLTv2ugcufJPgkBsVuYmLUDVVXY3e8o7"
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
