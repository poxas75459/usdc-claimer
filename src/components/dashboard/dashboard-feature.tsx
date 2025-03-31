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
    "4dvuQWeWuSasecUMzEjmxb6L861Yhwg8hVhkeRsXtDhRBcZfzQuhKHoat7vGeG1mzgx76c48qd1rUoBP7L8cCEDW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mzDd7Mu4pWpEDnyShs7kkRUdeRSAvuXXk8ReZxops8jDqXYtYjiXUcEHFVdS1QKMTo735ivXBx955FMUa4Dizn1",
  "key1": "5t4My1Ls46duDb4VPcnqhMzjQMZAYdg45kvssbh14YX4WJVN2d9HGyrSsoXAZ4KRden8kWXm1StWQEU3jN2pw9iK",
  "key2": "2zJyrdrZ7p6J6CnvS5n3vNLAkC2USQTSeUFV73DNWnG4PZQS3u9oKo17YCFEdopVrJcPCDNLCC6Tbec1hUCaKmZu",
  "key3": "3ribH5HHThayYRT3G6jeudwtYR3msX2p7grGa8EJnkXZdYiWYZwjY7HSZBK37rdoHb2TaFX3Dnga5L3iE2N2b8V4",
  "key4": "4KcpQRjr4rkHwqu1dNg2FvFyFx4gxC1BCqsBHQcduvCvwmVbczQfHkgtpcDGCdXUbbRMhMBWwc4UoaproASsDvmc",
  "key5": "3nFHgXpV4udKN5Y4rJ8M9KdoZpM65gJ41wrgBWL5e1vKUHNNvTkK2vDtWXsBYd4R5xCXsYsMta2srZF6mJjGPL4K",
  "key6": "3vCk9fSCX8nxgdWV5KRZ65LZ7W5mqiTFsfaZSYfHDEb7XStKqWneLirMuJfjriu5LBie7hPL9niewGAsseQ2wYkw",
  "key7": "StmBGSgPmepFoc17ysMRCgw9f4PEQRtpq4dwGV8tF8xwQ69fFmgs3qrxSD4PfMeqh9FSzvDzEL8xDaUVvk1xG4F",
  "key8": "4q9HkfTSpEu6JceM15CaDwxPKoo75ZT2WwZq5rK7Wh6J1zonWxEPMgMuYXRcPxY8jynFg2UVPytKURYzM9UBgd4Z",
  "key9": "5hQtsAcRnZpjNjgcTApPpM4e3ncN6enW6E1sKBhcyjGp6Yo2b6BN6ysRCnZKAKETDvJAW7vF15VxWaSWhCjPw4p8",
  "key10": "4D3Uj3dna9hyPVUdgkXogU92iT1uTEibswVStqY61bQteGJqytvpEb8AbXcf5QbWeuwmuSSa1MXqqjTejYw6ujRR",
  "key11": "3SFGUML7gAwLSbbqJD1tDyEsuC3iE5x23fJUAArStygbSCmRbLvqZdJBezgBPUocYRCLr7qexMUmLRdWZfAfkUee",
  "key12": "3dENecJv4baRqZeFVY87zTMHC1v7k5Mx8XZG7zvdd5s15iGZRJE9rQGFABd8bQnwiZjCoe4Mwd3LZaQyR4w4ZCzn",
  "key13": "652XzTDD7EvU3h864Ebas1N9ae5dCeCDvNzrMh5vM8YZjYscKBNZosNcgYipxG5G31wB2bF3ehEGB3SjWEbn2v1H",
  "key14": "1GT1LHK6orYhKvHZnoGrpwruScdd55yFCU8cgKo9phtLTUCGo1WswBJReSp5zvpJ4WUcdsitkhtgykEM8oBwN39",
  "key15": "4zFH4NcE3TviQjdfggZaV3vMJN1Cp8Ea5YyPEV7f8q33hQujBoP3ZrobuFykXk8ysLFYJtSnBX1uCgQH4M3pQ9XN",
  "key16": "3NXcqjBM66mSHbBJP1aMEu3rXDYtHSVSRMGm38uLj7Biw8jEBFCbtPKLRLiqnJFs2jueipSoubLus4sY5oQez66X",
  "key17": "2AKsCZ9LSAGWWqdxsaB5ucLuUyvHBYz1SExyKPq7pjySTgzKR2qEvZveSe1QnYviEvbN8C188LaBTQW9dVmPmaP8",
  "key18": "45jSQynm3AwA1qWaWaDeyLNBDRia3yi3qfFd8DnCtS8H9QF8vCipeEAU4z724LJxhuLC8YoKg66JBLtES5vpS9TK",
  "key19": "bUgdHjJgZfGokYP5UBCGNAvPCatWgVXRnULLVxyb7PqWECbXhe88oDMvn6gUYB42nCz9y4XZNkoFWRCjkSAGJGs",
  "key20": "2ZNwBAjLuuaC6YbAr1VVMNzDXcDB86RdqRoPXFHn9brD8khwBTLxcoMFBQSUU4gAJiF7pE9UoMuDE1opoKMECAiC",
  "key21": "2kB36EcMoZYbzNC4LFwt4F48YepXLcUFLE3333sk4gruQZpZvXhosncZiyCNCnBpd7R6W61W3JYpJc31KkgzpXVw",
  "key22": "4pEQweNCXWyh4TgR9NJquahSbnz6a3DwdHyacAengieXQxXfq3X24QZeLPh69DhVcWxij31agGeEBreN7cNNW1tV",
  "key23": "24gJsL1x2AZa2ErJfAgiPrmWp9TPaJNSEGbw1xTWtNYeXzuSk7Vw8zeiMgiT6z85tvrDco78UAwHp8F8sXitVYPV",
  "key24": "ksxdjTjrNKK7h8Ewd7s4V52Us9Q6CuAuvNmb2vq1si899s4U36GWC9jGaWVVE31f4hvZ1yTmaesGeNyb18JnZDL",
  "key25": "42Rs6HJNWcgMXJWhYas6f7T6HTVDdyUUVF94wgZNVWXoyTzry6tdLAicAJqKmWdMWXv23okxY1E5bjBvwT4ePoso",
  "key26": "4r4tkNH1XJKJqQGsLfaEno4UQTVwzQtJjtqMkrkFLqqeZfBemqQG5jRbFk6H77jKa56yzjgQeed58R3H4wnoAjBZ",
  "key27": "4VR1xTwLSLWSHGWjAzooNM6a6TY13nezWjLxuQsK7wWXumcsU1mrju5wUQrEK1iWrYS6EfBJWqE5ajQnuK5UD94t",
  "key28": "32ftRskhrJ7fS1yavKeQJcEnamTjxcYX3kMtKNKkdgeZMKzKiPKngvdaZ6DRq2jCxnr7GC1FWTZFgjcczQC84Yr4",
  "key29": "5PTgPUrBVvU4fSQSMeQPG2Qc3jTU8SCVeQJ9ZKZdQGxyehxj6sMmCAHwvSN6HjG1yCinuEZKUzagkbwBVZ2eZZmr",
  "key30": "4reUaSGzVDrffioQEAAR4LFAnUHLkj9ygPvLMbHgD75dv923B7y7ouyTXkAbLbVa7BfPRzXgsdvBszXB4KvWYHWi"
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
