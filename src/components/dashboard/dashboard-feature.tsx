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
    "38UCMULeYiJW2yCEYj4AH3DXNepP1S6Hix2wSz7DnP8ZMA3FiQBheTMzVpNDd97hUr8ouANfzu7AvTj3Hc4DsLp1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qxDrWrfpcpKtbnVHo3UVpCrdQDbeDnwiZ5mgAwXvnvooXXaiaayuPAtE4enHYXdzHu8K5shygWZ6A2Ugy41niBv",
  "key1": "5ova9HhkJFdfLd1pU85yqX4GyXum4wkNRcAMBdCsH7CCW8wWFb7oW3VhArgFsuUoSbrtStE5dgY77JkBugReg6i1",
  "key2": "5KedfFeMtuDHU48pYvEq2NKrnvMmgMx9eXJQV7v7hN8CY5yVTaNd1zBJU9e2MmJp9Dw4s7xhoH3E6USeMyRVvBuV",
  "key3": "2YNBwg9xEtgshBuLG6L6mjmcsJE8rStrUzKfeXALqBTMxg6AAURLfNSmsxDszx9JyS3LxXQnE7nokamKDBhYyoJr",
  "key4": "3qZgnqx4ZLAwRhetzBzcTr9PVTPmE2BhQ4c6xqYhZ71gXvdLT6J18pS4fQUBk1sH46SkCpeSq5Fjewj5tfyubiRY",
  "key5": "xGqhVjnmUXmbUaecdrWQ9jrQHRVEmifGTptfLjMkuneG4uYzwLWSDfUnLjnWZC7fThk1wujFygkUM4A4zk2KyAa",
  "key6": "3z7vmLxL3pz9ckwSWEpDyDkfWBSkXDdq2Eznw6vHXSRXXZyu2VQM9gTHPpr14cAtGi2FAiRSMURWCg5xrckzkeja",
  "key7": "B81aVVKJj3WYoe5dH7KAyQkHpCPsKJQFSAkrvshs2jUL1aGVFcKHhk5W2Ms1hube3wmNuPUV7vLXppfKe2AGrX3",
  "key8": "36mqeveMtNkKHTLU5k61mXky6dYHWEhCpHtqpYLTsdj5r6zCZ4dQXZpLqzDWMLpesVhnPTuR2zoKBQEvRtaEY51J",
  "key9": "2NFZacA3P23WAs93LdpAPYo26gtpuUNEy6yrLpaBRXfHm9JZuKngjZbkdPMWDomgifXL3SxBNCm6pAvM6SV9trLb",
  "key10": "4axXFzXZTPX1BvhsQa15ZdqKVa7o9CPEn7b18A5FMzv385B4ZfJ86DdaQ6C8ocuPWmTMjVRZXzyTptUHsPDi2HoD",
  "key11": "3KsoNrk5santH6ug6BNunZ8XfxfsJeLpbi1sXkCdtpYyCxxgXNpESBt3HeCLuNJqMVqKW4rHC1EauJBYWNhfwxM7",
  "key12": "5ALTLt3amo6wefV2gXpTbCB4DiiyMfj7h3U9vGn2Box8J6ZZXo1K6tU2wHq86swFb6SG7jpDv5VXMDa2q5QGqGJ5",
  "key13": "3MP5WyfZDXB2JCPnpj9GWiKPSYwEqmqJkxYJSfDQafHuCRSWLSiKHZSJJ15AQvriULtoBiLGBoGy5gAmzVTKNAqT",
  "key14": "5pq5b3fVPhnX3m6n97aJqGJ7bDxvcNQu7qn45pSUSwyx5Lr8wpkJiJ9bhg4EJ2favXAisQHThtBk2S4FYv5MuFud",
  "key15": "5dgeTRmCzfe8XvATwasVQPbyrNWrRtwVJG9TSEVhbBsGs3i8FR8Hw25YAFkeJbSKjvbp2yk5bjq3Xb2vSWGAmDs1",
  "key16": "EmpBpwcqm2Dd1WGBeFSbbrToZbDrg2AQqjpNqaCdJ8jpAuL5RLVTfQuyNwiARSgaPAZovt5yTNFT49gPhGUJUNg",
  "key17": "4qwgmUR8PW4qYcBvyUKBv7WQiL78WQKieHL974wicHiekDiE2pSyAcApYxcWHxezG8X1vppsEXyysN8EL92DJVk2",
  "key18": "51Rjvk5spq8SWd874P1gaxjGVkX2SCJ7QRYbQDVmm4o7s8XFxr2UnVhLmSYeDcHq5JPxEb7TZaQ9ayNZt8hnmthy",
  "key19": "2sF3GEPmeidtuR2YsZGGH81eFWcfVzM4bwnqoKbkSpcWdg9gud8gmYCBwrR7shR9qLXJBvCmiYYGiFZNjaqzbSAG",
  "key20": "5LZ6ppLvnsJSCi38WU8CXRRHb3pNSSepHd5nTsA3paANVxVkseDvAP58PXM9eXAY9NfCkbdm8JmrvJejXsHrQDTu",
  "key21": "5xSD3RuRakAzvz6nBGxD5f5HpyjnzkuZd1zhFHzFmwUPqa8ByzNs1ydYaqRkrZ5nJCHy9nPK4TG89ZZcQbKXxnF9",
  "key22": "41XaAULFMG2JaMoQVsKCqpYHZEsp7Hee8shf8kzSi1QKGJTvp9wfWvAx4AeviV47SCuqBi4weD82CwGUjbWYNtk3",
  "key23": "4yjkRAQKQxEZWMzq1g7cM88vL8X7D3ZeJ41Z7BASe1QvE8YCkyRBxg6HinDUajBfu8szBiBeTKQueyC4FiTdeGMg",
  "key24": "67CyTdXw1vvefEA2kaycfszem27s5maXSsQykr7svFBvc9w14vgNjWu4NUuZ11MgFXbLQqTi2Up4DGYAAFhPLGD9",
  "key25": "2diDynrhAsSrjEVTrWHwyPadXcP2eF3P94hGEKVDiTsTTfswREwo48bdAzDWveuu7NegSLRBTsMQccGCGep8V3X7"
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
