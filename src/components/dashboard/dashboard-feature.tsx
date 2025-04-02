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
    "5j3JARMpnSxYuZKbT1pUF1X5ZAV3c9zCFcU6ggvLZDznUT8GA9txKHomJrL1oKwrAf7CAJrENcsmnPQNrCV2qvKD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "L2EetF81JTttqy6pzkuC93R4pM5c2rZ5TQr9Tjd87wsQpCoFgP2SzLkVdAv6AhtwUVNBQnUZ5Jgq7zhRQX6jBfM",
  "key1": "4BUCJdEoBDT7GFeXiFMDSKUaQt2a2B97jZasNCQqbtzeLZ7L2AYQMqLtcKK14V8eYgTJzxZSjags4tH1332hQHaZ",
  "key2": "2Ax8Z2LrCbL6YBCcRj5Cn74V5bi3pQEoFgpQWQWGDFr6vdgg8dpNzojoXm9AEALDHAkndcxrEt7ofcMHiWcuj86j",
  "key3": "4yrHByNYAApazyWPwjm3JxyWquk3wC9EQiQp2Hwmmyar5ZBEheawt48V6pRWGWSe6SamYusdLwCYorabYVJwibun",
  "key4": "3wbT87FTGnDeugQesy58q3odUTLfNjLjMkPKJjHFshcdUD6Lcg57KyGce6vnWdRFUtJmLpE3nREciBDSuZdSF5NM",
  "key5": "4Vgk5eznuckZaXKei7XxPVeF8fSs38MuNxmzc9SV1H8vzYZPPqiDhQEVA9SGXg9ohzLaTPt1SQbuYX2t1J77JkjA",
  "key6": "5gRk4jsVefdPfLfNCsvr9zgQx1eyrEjkEhZyJqSdqCN3hAEHySoS8TEpx91onD5VeGQePRL5RQE5a9dQPDt5e1MZ",
  "key7": "ujUdmhLFzvVNcV3BM5f5bFEEv9CTQZvpT8ZbdPqjuUuNhJvRiJmdLG57z36KZkyQJ2BU5TwKshJUCc4thWvBTAs",
  "key8": "3yDDdfGJdd6y9FaF4f73s9oXMZpVyF5QW2NzEZvhi9yw9AHMm3Y3skBJR3GQRgcLKAjJpJ389Kqv3XK14TU7SNRu",
  "key9": "5iHSCRxMuqub2kLnpgeby7vmQZiydegPtd5XMDUECkMAtG4So45kBCbUiiHsWZC5qc6gstZj9po9UHuzQB9e7TEs",
  "key10": "3uGE4jnSsDE1qqVsbktTQXAUU18eQpTzURqUdKUBM9AYyag1bLX2bpjh7XdNptBwY6bBo7gt8yM4WMJGWJmipx6X",
  "key11": "4gMfQkxknNpnz7htoTYdhUEii2m8786HMgaFGoFwNfR3LqXcfDg7uQ2oQa7RCRn823tcGjb7XiCC13UmwGJvqBcV",
  "key12": "5QiCFzoJbn3Nbvv92PU7LgfhodvAZ3hs48KzNq1uSktYPXt2TYS74xeuRkoyUbbHRt3tV3xENqJ9a5BCJw2VEsuy",
  "key13": "26JvDunbzYJ63b955fmJxQRJYZ1jM7ZDGV8ejNdXGUdpn4jq2H7j1oaJdncuCJqBUeW4DhfBtsjsPsRtnLLNWe9S",
  "key14": "WoBtYcmq3NSFUYnjKH72bwh3c84MQBMtVRfHNVwLYMrz4iijgsWbiiLcxNTDi5ANU1nWtsXyQUSv1XYsAWUK37E",
  "key15": "5hVu4rxXAtt8aafvrQ3mmQHSvhyECpybsG6yHtMKb4ojZ5w31GwdK7Z68Rw3HjAkepM8SJQZWgyi1YebRuHvpifm",
  "key16": "3oLuDiPsYedzAkzqXRRd512HdEtmt8ePbG7CgVqCU2b9dLh6kWFQTZaqGXsxSTNWMrYMJ7muh4gZfiKrNhJBTtGa",
  "key17": "XzGWgeQd6KibEgmrMmwf6viyWN53DQbZUetvPbMcLezjkgAoiCzdAhrNPij7U44XcwMR8GXaj4qHZ2RFuZut2Gf",
  "key18": "5E9swziQmQ7LedN3mk9e5mkcaUCYEUd4yKRbPC8EBPUmDafzSRJJegLFrnptkVNiQ917EAyxsXiA5pjwsabfrdJX",
  "key19": "4Lf1RqEzXLYnuCwTeHWK3n9vcCyGmEKML2UPLRj9o1iT5mfjPfa3EW86LzhxRr98pmEHLU25kwzPP3aYRuxMpGDb",
  "key20": "5svd6vnuNte6ANJEXNmynAM3HSndZnRSdG3ZaFvABn3qK6KGZbfbR1tNyJc6YpB5F8BxmQUzr9aJwWvkZhPAoMVz",
  "key21": "4HPpmk7gP3gdZq8qd5uu5aLfXceMdbzkZezShUtnCaDDBknke4Uuze67wdkmz2cadvNtftRwwkguRRfUqJrQfKgq",
  "key22": "2Gr3h1wuLy2ooWrNnN3QXBknAoz56op9Wyr5Kcqa8PZDjCMuptGQL6UMHJ7Ntc5Yzq5jBriCENefsq6JVKe6pM6J",
  "key23": "2TbHFHpXpvhEDpdKoFVsHZ6FaX3z2D9ET1dFoQjGoKMRJccPhcZXp6mNDC6iYSHedUp1gHAyFDeT5SVQcnrGNfFL",
  "key24": "3X7tPsEGr3Z7XsEv9QWaY6gUfxr8n8NXkFMnWWSv769nBpcqjReRN2vw6ZYVTkaQM1Bu8Ut2kMRves4WQw3FVoYE"
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
