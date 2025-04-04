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
    "2HWojf2BzNAJJYLCZnxRN2UhJuyeNdC439iqgw4VaJt7phkcZta6KQw3LyWDDjvr5SrQrqs43ZeDZeae4XkTFMD8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qYUkMABGEf21GuFwCftMsDKXgrKxR4gSfTFqUqxJVQcuvSN3GXUesXFCCH15TzGGJnScNr5p2piqo4HsJksHHZX",
  "key1": "38CDxqnkkui9JBKWtWb2sPiEAEbAdfSreFYHfDMPfGyALZt6QSDVcSUo1oe9dy3FaQLvGQmDuBTP3NsUZjcoPFx7",
  "key2": "1RtifDwqJRodFYCpG8Ej5T8ERw1BD2RELWwyLtQwGANFJXL31XW2sdNfGmiChLzWyCuq1f1ZPsQPs26YYJ4KsCg",
  "key3": "5KT11CKngVuqDxG7YSZBnzYxvZE8mCLuCHvHLM2px9pGzvbXrhxDLgDXUXGjPm8iBHv2AYWvHicfypysLcT6Ecmf",
  "key4": "fcUSLPS2Ecy1wNAhzzVA7T472PR8kgsSS74vjEAbhq5igct8is3uwViFjkWvVaq7aB1vYXGxVtQW2SqaJGbBC5p",
  "key5": "BKSZc3UpV45zkxPT8BSSELbZEchAnAT1MSHG6JTegXnoxpiDwaQjh5GipyW3jb2VwtEdJZdCC8iaHXxQwFNYEPR",
  "key6": "2j57PrB2sR5ACz3nWj3g91j83Ys3rGQaBPTdUMbBF4xjbGU2rAJTtYLePkMNj5wStzZ7DGvJHVvZLecnHwdkszSg",
  "key7": "uSHBgCUKiLhkcrRLZT24F95dtgXaz3YgVDL7Hemj4XudyLkG3NoeZscQpBd82FBxqGzZ8PqrzsGHn24KcTmoftp",
  "key8": "8VfNY649c2DVLMEXFPHySFB9EfKU4wxtCQ7SGXdN6rzqPVpNb23C6oQ7Lb8nPzHRcePHnwuxpGvxQj7QLd78Hnz",
  "key9": "SqGykQVTee54tKp4Sna1jTsATXJ79XvAeNsTn4ageSwUsHVP2xgPQNRxKERL1eAx1g3mkye4mJ99ThLopDYdZDb",
  "key10": "5QcpcKchP2eC3kBbHRBdV1UShdjpwKksRMavnCPH4tZhCs1CRE8ktkQf1V2mtJbHdmdJVtHpvA7Uheai6hjANX2F",
  "key11": "4Toy2MCZgqQEGY3DTdW5A6fHwj9uFNJTaBkf6SjzhVAbJDUZuainAXnpuaqA56u2FW6WFHW4NiMUBDZuTrZ1YVKP",
  "key12": "4A7DHfxAwRyiYm5SETrAKVgPg7QvL31t87oKQ5u3rLys5QRhPih6he7VJkBg971wAkE1YtbgUSDVQRQcZGV8E9kd",
  "key13": "4kRBX9KUux9joU18dMzpRUAUGGfD61JkGmhH6HyFK8VEN4duMQ8hDufito4VP6N66SaTLBDphRJ62XJz83djfitL",
  "key14": "vxrePbG5FpZZHXCVehDSHQHUdVuGaTGbUYmWvUCEvxEp6xwX8jhDZBt7EnCpsjW5aLDfwjrEJ5QmCVGJsZhHDW1",
  "key15": "2zcrNQ234ddRMZH86KnAQYJhcF9GGmc6NxdyGQYgRRabkSYVrPuXFLNsaEQPvaGrAEmX8yRHGXT9szXkbC1njVLG",
  "key16": "2U9ePWYe8MEWRo5fpmXrw6UZpGFZVLuGPvGuULYyDWxhvUhdQv6LzHKxVEoqZTp5zmRuRPM2JaEoCq1EZ3pSHPvF",
  "key17": "4KibrBjvjaQkqddvCaKRT3f9LmrnTUB3LWeuCTVXi3RN1HZ53ZKiGKuPUmLYRzauV6fWedQTXq5GeRcCGpSarCo5",
  "key18": "2hgiP1teELvojmuFJogfWeV5ftMGbqGp4ywP1yJGDKj4CjpiqmgW8YV2sCobX11XLyVAgWJT6969xpMFJoJr5iHt",
  "key19": "4SowVHpdJ9UBjQdbpYtTipEHp9wYgAYxqM1kbmWNnm8LbvWZGEa9R7GxH3TANrG7ELyCiJi2m8or9JZ9dWcbhJcZ",
  "key20": "4wrnYAERf95HD7vSG17g4PbgXxCtB1xvVWfqSuPUzyPf4FBG6YNKq235B1o1jKEp99gVj2Ax96MYz2tDQo6BoJ5B",
  "key21": "37CGX2c84d8cYCrFowBjGGnAvukRxAKWxZzoatwvNK4yEejR1kE6UkAJe3DFDJZTrTpwMM4N3x1brHcMQKC6hfEB",
  "key22": "3xrDUycBiiJN4g5iUwoundowhqqMZVqfM5rZQuz48ZBsWrJGwB7TAhbNyMHNHX1AqeKq2bYKW4zsrV2MpFMBkvj8",
  "key23": "39VQA5uQe863nqN1eqbFn5fEef56J15Rc3Ns9bHgFN5U2CEL8hD1rh7GJTQNX78E5FEMsHzhhdCiUYyHAczrw3AA",
  "key24": "2QPaaCM9SSZK1tyFshaYv78JWtKombFcivtg4KuoTfyPo7obBwggUTsYbEDV7QRZyQK4q7rGP8qxJuGCsydZCAni",
  "key25": "4BpYFYJpYLNcm3dcSmZjKkzLon7gw6ZDgutte61QC6XgZx2Tfdgw4KoAVKxzvtMPiQnj6bRMczRrzyC1382Rpb9c"
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
