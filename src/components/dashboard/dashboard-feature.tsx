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
    "5916va4YY7CUvLmAvR5tMYGpiA5VmwPj6g9EP68jNfbM54ph7qk9rsdhoDmFq51DTJ45NSmFafeKVmB9Dnd7zGXb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52nc4JqJHxfqUx33gWry6ZaXPRMVJyWToiWQjS2Didw3D9WV2ekbqs2TjipPXA22suUJazb3hQZuGWVJzi5CeLFD",
  "key1": "3yN6txJTjWB57ezZYu3qnSNHYjfTr2uGzrAzQRVeqmocbY4SkToNDBxGJaeR2HtdUpDLGG7HMSTB8ASKJ1nyhoti",
  "key2": "23BXX7G3wQmp6xDNFJ3Uxmy86q5Sy4W1GUenTxqB2vELVR9WwAyfruhXbwXCba8fQeqLJnTRV7raGNdmxyn6Mhxt",
  "key3": "23jbzmNPWCFjFi3BYBM1ZPFxJQtAfvP9MTcjUQjbTKPk6BWmratF6Rbc3sZnQdcn3orcKCok5aWcBnMA9EKwoAV5",
  "key4": "4RtVb2H2fHWp8CVXTjspau2suXVt49oGi9q1VTwirz7Q5koS4MJmxKwqit5SpnSt4JKUGRvnxs96xSvYWjkpRLDo",
  "key5": "5m4EBgwHoLDVPfrM4S2CZoqAtGPwVgKs4MeYgoVswCUsniNo7X2Vn19pKtrpoPAdXJq2DRAKkPy7iRvUbSHwtYTu",
  "key6": "4NXYhmCg9cHzXF4c2eXM8enoageLNcYfZF4woVsMmrL27ZmmsvPYQodjXzyz1JyJ97CSQ8eV4uMD71Ah2N85Xtuq",
  "key7": "42bpmsomnCQyY1gDDngX4azoSpy8uTj3udyj6NLvz16dXZJ4xaqcy2SbsZuw8ynjjyL7aoQmzz5FfTpCCafcoRGC",
  "key8": "4WazJgVXjVZEag1P1fk197AvrxBufgbPNkc6V8MjSbivVrRtyG4WSdiybUhUsbPBWjinFYkd2usAJR1EEfGHTRkg",
  "key9": "58zs3rYcKg9hzEKv7c7aWcRhp2kwo4chQ7fXVboaDAzefSEQbYzJktU3a4mdk2U6emUUNAj52vbfXzhwmrTEZYCa",
  "key10": "47xUZPtmkN1HPbr3fpKa5Q2Kf2bCY33j2YNK6UbCd7B76MRZBfYqLoE3nGKEesNwBjApXvEZAKcqyawvurucW1Tq",
  "key11": "3ap63XKMgn3txNMkLK7ZtxR4EPer1FgV2mvjcg9Ng5SBtsoTwRA4qEzVwKzsaKwppxSxTaQf6ZW2ZuWToCx556oR",
  "key12": "4NZLULD4Vw8PwZmc9eMHqqG9dNc1XWVrAvc1AbDmj9TTy1wWypwbukKmwj2FLuUwmeRNqaECr4EyNkf7mfnCCU24",
  "key13": "5B5rM918xBYzdsMRsrDv7zJcPiVgebtjqkyzYUg9aYdzsWTaDvE9BUmuouCNK7E8LrFvVNfNqNL2zLvScWjmhvGq",
  "key14": "62QXRcxTreJhLqXGnLWWEM6DReBitmMeeq69oUdyqTQCQwM2c3hARPy3HJDaMJNw4hUFdNkXzCucF9PUtN8khoVE",
  "key15": "3jeoeYeA6UfDKLrmArtJDoNxsp8Z9b7AgSGJkjT74nEwDRA2i8oUWtHbLEoY5DXUnp3nLsZzEKLMDt8cSJM4Fxd",
  "key16": "3Y4mv4mP7VVGWp8DQzaCcgsSfWJzGAjuybvJAVtqoFct942ukKGpprJmv8LqwjfRQZj3nm8LLk4QUmcBvDoLDRAr",
  "key17": "2KqG4HW4W8kh1txa75DQVjkPQ3VHbHAz6SR2KQ9h5QMpfjG6ub1YRwtViDShW4imqcwqPSgmBEEjoomZQtZTVbBn",
  "key18": "66Z6JcczRdZ9frHgPVSSSuxm9YX9PFL6G2nFCf33Hy2R397xQ2Gi9ctPymeQTeJdAcdDMzEqAXcwgYP4fbnQPHbU",
  "key19": "4mvnT5xLJ4mRFJtez2qRwHQrYWoYthJAJLmDv2pMTmmx7YQfJzBd6yg5k1mhqRAHWPjpXPc7hbjmhSyFPbs3XRz1",
  "key20": "5JLrkUhJ7qbQ4cXEz9Pc3HMruAU3KKsA7T4Zpc4uCuHvjAhctDfCnVNLFXg59enzn9DpLECneThhxQSfzh6cyQcZ",
  "key21": "2Ns1E22oR2CBTuKs2nUbBkCQhMisGghjsQSER6jHq4dDfQqQVDr4guPmgsdmazGBxnxZuYmWrwZYXZGNDH6hs9cp",
  "key22": "SdvpDh3io4rwGYxRdKbZLVQnsuR4JBT3j7AQvftL4p1cMXzdSj2Jx2zHy3rtVPyWA1TxVyD9ganEX6qjNtw9rH7",
  "key23": "5oqNDqmXoRa6D3e3u75Y6okj7yQH2JvrpnbGerZ2GyzPXXGKPsV6UrLp9UmYhh9gmRcyiWgC4vpnfqz1DqeuV8Ex",
  "key24": "5DUEvVe9KQrcfz46RQxkNT2gkkae2Tzz5QFyCL8JQsBrx4pj8TvKvVdP1NYYdDzY9NkbwxiyEt8krUr1pJZdw2gR",
  "key25": "4MeL4o4BsE5uUm1LNura2T5XkKiGDM6UbrNKSWtPEve4R8kg6x9L8kb5UFcxp1rbgDUDydiG6txHeUMTuVxekDvE",
  "key26": "5uKyMkGFig6ZTDv1ADv119xfc5u9nd67BZFWj5XMKzz9ZMdNrJnNo3LSDxyFrCB9XDaPMgv7x3LRkRkhqhDgiNVg",
  "key27": "NsuAi9bJWZTAFowpMqoN8gHcs8XWTnz1hx7pZ1KxvhsiwnCZEozPBjoQe9f2RDuiJbM1YjeRsakVrkVhe3XMWhZ",
  "key28": "4fC3ze4ZF2LkZuVYW65kpj3aVuwCrTxCq1D2JxNttsKBLp468HGy464QDJYfDaHRGKWsWtwLVQTQaU6RKY4cyryJ"
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
