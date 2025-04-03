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
    "2rS5xGdcGNqaygevTUXQKrmGHWXCAKqvHvP4ENZzy1hfEuKJEaTDDBffJWDPJSg2u6grKaaWaV32NeYZrd55vw5a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5L4jyWpkPwZQc1RWxF6tXgSWNizzJRuiwdudAVke9EDdYkBxkWAdpZLbZTKLAwdnNj6Hs4x2VskHESaao6EE3LGd",
  "key1": "3QWGhbttJuh1crKUKZZCTKRVk5h6VD3YXzagHqYJ6HD7RX24T72C19rxDU5KdMqnu1PYuNhrkLYSVpxxGyXgPXd6",
  "key2": "DjFESRn9hVUVBgNNXEprRD3ZXznj1yVFQQEKojVZWT9Us9hFnauCp1b8Wftt2RUCoenFJqFHNgJqBRv5BzJdziw",
  "key3": "3uYZKPP6tHJZxr5PEs1Mbp64N8ok43YUaoAPgwzLR8jcbjMEd1VaZSNk51W1ZEkowjiyvy8HTN17E841YuuiDj6L",
  "key4": "3tyJDif6zH7VXQZXHMegRc36XDHzZPxdFGNVpSwqRkGicgN7NCmx3eNDiLJQBGFWN5sVYBsNGbSMczY5rDMFQHmG",
  "key5": "5owSbyxeVP3hXngMG1MyTEPp3HTYaM4qYhLFmr6YYtCVwhYFSP8rdNm3G5gzjMeDTtHihVG1zyUCjXtYG24XBsQS",
  "key6": "2T694azpzoTLSNatpBXDQg8Q7HQenwxwtA7Y4hF2sZ3nuYeZiKK2RwnHWJEs6zrhueTdGtYfpA7D1Zvg6rKvWKay",
  "key7": "3EZJAmvcQmncEbLswkaJQvtV8pCy92yh8pEh2cRLuVQWs5BFVorsa37K6NJZjQojX22dyj8ML4L8HTtbmH48Mw4w",
  "key8": "bZzkjwGDxQnAXdmvUeUrytzrSx6jgJdWx7znD1vPUcz1J2hyq9RdzieWwpeV17W7qcUPLitrzES9CDrWmreMiEA",
  "key9": "3aDMTz7tbharppKiWp5RCZjd59DLEtLtBugpe8xQm8CnxqvqtKLTwMRYBE2pAq3jpgDdwzRwposWn5JKPBLvXeMu",
  "key10": "4nQcKr1RWaRFnFXzNTn8MPM4D1phgSBLPaiPCqTtYMh2s9QxzUfsE3bNty613nR5Xafn86rTwTybJ4B2337crXBf",
  "key11": "4Lrkizz9i6y9A93hoJpY2EhCezAV6KAjTfxpWwfhv9YHCKJsraM5f4ra2bfs43eYVYApngGFdQJ2f4Xs5dA2uUj3",
  "key12": "jUJFJTEb2hLBj3XfyPcfb17Dr3MS8H2uWYhHfbomsu1D9TUU3eb2os8M7V9xeHZ1yab9MSsuekgB8n3T2rxgZkB",
  "key13": "J3JN5tuUafEwAVwUTCs2LsPkuYkWL9K41yh95QRbV73nJr9FDLhFDxvoZ1Gy2bkvTTTz6MC9LY2C7MTHzFbBHTf",
  "key14": "5v8y5SNw5t9jJpsVsaQwCaYhEwFog27dbhzgViEhhrwokpmZeACDeAgKW1wHDqyaWGrUGaEwfi16yfVd5FzT6RYu",
  "key15": "2UXK9HxpLWavNTLo7PbxER29FeYTMws8aBaep5xgHboLkftxEawNs9MtazcpXkJXtqh16frUU2KbFCzp5Sgyhwgr",
  "key16": "38tukd2Lw9XguEmWYJgSyhWzhA85avw9FP7Naw15TnK1yUyZYVnB6QbFZYtsjnJ3LKPFoRHxKBLJnfcoJEijNfvj",
  "key17": "3uTD29oPDnWaWKo8GswMsF8HWyivz1ZHo5ocULGhfVkvXopzMrxRLcGJtk9QEqQjtEVvgfUrnPw7pb3MuD6DizBJ",
  "key18": "Wg3fZ6kAkK9UyqjzLTxJWTJmAw993vDPJdeu1gKpvkNyq8XGCi8QAZ9qMLro3eL3y7mb5GNmB5GAWPZj8mBvpT1",
  "key19": "2YGjDecehxmo5yMzTxGFJwqtiFL8A4XQfedmWUJm6kSJeZvEcuxgphG5mY6rwY7SDkmzJfpueRjaA3EVYKQFRuGZ",
  "key20": "4Pmhiyi9mMxTN8fKGJJTiuk6jtW3m736JTsQYabQzcyU7TrCtsnTpN7M5BEdLAmLHZ6vFhtBCBJhQdP3Ce3AR5Tn",
  "key21": "KEkdmEF1finnyH3NLhwEynupLCVYEZpfchTDzKsLdcQmBNfVR3ychBqMCibFShC1iBftc4Cp6yuxZMegqhpWMsK",
  "key22": "497N9WnctbCsjgaz6z3WDeCNsw6vK36WEN8oGfD1QLsc3wcwgSm6sP6g9AjactgVRyGWmAMeeBLCw9HGhoGGSha",
  "key23": "CAxm7jwESqFCU3QgAev1HawCRWDKorEPB73GmcsDnoVJ7TrLxqECCEW5yVeW9rz8XgPnbadnbAisQ9NsZ3o3ZYt",
  "key24": "cWvk1dUxu4epu3utAeYTQPPoD5XkaHNDbz6AmqLxFszGrmZR1La7Xv8a5ugugmEeo3VZ4MaFHsKUDqcwP9HpYAQ",
  "key25": "19PJi9hURjQNCRzNWXDMAxYbzirGK1DhJyxF3WsbaLRDYP49K6ZNgqyvDMMgC6HcxTm4VgYEp58TwWBkACyD46P"
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
