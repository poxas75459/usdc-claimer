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
    "M1nymtkanbcwUX5E2Kuhj9KX9WwtwUG67JgKaaSXAiSvQuRLGGDtDEhbKVZDQd5fwhe4tapM5bJCAL9UjkUpQ2P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ERSKQx1xu7xfeq2xrKTYDX1Y55ymsyzpUmJ6t2DSVPivVyp8u3tQzX5M1DSAM7tnkF2wj8iZKfr77dXAE41dBfg",
  "key1": "23HTCGhSqXX4fZrfcoo6B1o5xU9c89EU3rYLS4oUYqTJczzoibeo2d2NeyFn7SCsS5pk3Bmwww8ezRPwU7BVGPxq",
  "key2": "GdRtoVYgwFcK8vABLLyJVERe8xV7mcXNpQnuiygLQw1csBjujf38uwdHDZBcbvcKM6di9DxFCWATJA99SGCkUuS",
  "key3": "58EPwao3ofUt9zoNr5u6b615gtPcE9R4adRqYExsS4uwEQty2NWm5xkdyyjuwCruCr68QkmNpmALfnfM9ssjAxXt",
  "key4": "cYbRaJn7M41d2yjVyfPvA1oxvWw1i1fvgoQipjZvh6uM2zJ27XxPw55H98QgUXseFFnBgTii3DhcBDuCYUKdpKh",
  "key5": "4kxrnt6JXf1nvZ1VaYMzB2wMH8B9PHkzJyzD1igHm4ybD4C3GouvteCHsVVRNk1qhc6GPPsXMF9RtNd84HHBoYJ",
  "key6": "3z3BJNZrw9be9qm2MwcBw6cuGJRFPuQbfdDY9oKM4dDP66pkYc3cK9vXBRios7aqNEHkqnvT1m15htqeLktPUsP6",
  "key7": "EesbYQvHkgydG1PLFfEmXgLc93sz91ADJXHZPCnvSTZaeq3Mhds98e8QWMCaiWha9W2Ss5866caRmT7GyNCQqBP",
  "key8": "2aeJEoAZ7HErNHYP5sycQ6qYZWCm8R89TyrGgEghDZqaXJfPCgDRUSGc4Uy43s4a4RQhTzrogtD5S4gNnkKRTTH8",
  "key9": "3jU2StS5uHjMydQEctPnRETEnAXiU6w83iwx8BxUgKrieEzX1e533zYHvQAuUw3vbradpsf2PQjvm6CYzj5GMeKR",
  "key10": "37ciUfaKTe8SrLogHQ3TswZ8rdC2wmKF5yRWGeFqwWK7TVBYmuwT6BGWr6LYBkjZDwVbqLGHbhBeQRNPUFsN8zmc",
  "key11": "YVw4YGy1cc3J2ntmiXyg4fgLz2nFd56FVGZzLpavpUgnTYKr9XYPEcXp4vHLSV9thmnHufMuLDcLpNrz45yFkY1",
  "key12": "5EgpGJLy7AZj33vvseMXbBmmCApFJPxrpi5j1Bu5QezAxX5L9UAD7FKKi556MNA3U8j1bwSf1ba8qLWoTkMmuagX",
  "key13": "2S7hgEDKEpyWYt292ejNh2PpVnS6QtRSJsQetQP831Gx3eNnhKXJC9WyayoP6H9LnUgQyJWPjeH1zy6ejVSm25L",
  "key14": "2QA95gt2RaahLx9WTpb9sTAWT7JL2Vuat6Re6mUJhoxHNZ9qhSwP5LGTxfA4hD6QgnxKFqZvc6YixcuESW1KzRdF",
  "key15": "35FPKesmX9pq2eKfNTAHBh1PbqZZdSXeGmMvrEVpCmTVXXAftph7Lyuj4sR29DVEyU61pLV55jscd5dpSrPThCfw",
  "key16": "iGsrTi5F8w6gmr92ndVkVH2Pyhmwz1TQe2VXDAqQ8fvKevcQoLk46HCZJ9PwYPyXeTdzifs8N6gTzcwnnkFTRjB",
  "key17": "2ie1YKWM7whfhU5NknmqKuiRW2QDTN86eCQ3rtD2DsyixzF2kDLCPZfLGmHVJENVdhXi1tJuvgA8ujQCoJKEUGTY",
  "key18": "pBeeQ5QEyThXTfktGCkqJ2iFNNw8VWZoGP8VBVnoR8bDZ1eSuBuViZqBTGYTEgLtgmGuB88CXawnb9jpwUtusFz",
  "key19": "4HQfn8p5ZPt9RN8amG86paKoj2QJJ3oM2opmze4dtWsy8mhuoRRnNkk7tHeZ4i8MCZG8J7pfDRXTiVCSA1DH6Lm4",
  "key20": "4oDN8A9kpSNBBxDAZdHaUM8di4pjQ6oHW69qUqtajZVecGtxHdeutXcXVxMyehxx5tbuy2JpoodPGXL7aULQAYDg",
  "key21": "45194Gh8kAt1wwj8AwiZ9XaNpc73mX5EG7YFiMMECfxYykVdaWLXgoV9o6YnMR4FVJau9LJFWpRz9zDmy17eLt3a",
  "key22": "4aB5YwNMppqQ5MMNGTcuhr1GZ5tGF2BrF18y5SznQBjR4VXM9J5gRG5wiFNRoEvuYPEVWB4TBmWbAfLgTeCVMcEY",
  "key23": "2zM82SeMiFZ4FBaka8LeWeqntfKDWw2dzAxMKQZofuUmzg1bHiEEjeb59ETeDbiuMGH4zYMHAiR6QrvFaZi1v64m",
  "key24": "4jRf2XVfTRELYJZDnAmY4RRJsjAa5KuB5FbTXGUSDfF3Pri5SW3FcibgNfyfWFh7UZAypS3ck9La47Ky23xVtUac",
  "key25": "CnHTtF3cycrt6j7aLLJysnh1YBgh5NihE26BouFtMnJtstCaghUyZXa6tot6xzaCkEpoixMVW2LJMMdJyAE1Lhj",
  "key26": "rNV6P4D6eqTmwJYFyVPkcgGRuN3sVQT59FYNVTu1R5w4ZKMaVoQmmjoodF154Dx3ogmP5ZDNyx7k6WZgxY2JZEu",
  "key27": "2Cg6BS1YHCBoAh5KDPhjxyzQq92t9ndfVKNsHa2yHTCsxymriJ2pz9h4KgcMBH9bA8KvTHo2sYGvHAAoqupd3N5T",
  "key28": "5JJNoeT596qyL2CeeHcLgAtEEeDRMQf9yFpLJcm6iANx82SJiFHBjhjAQAtvrcQbrwWKM5CzLQAfosevYQmhm9hV"
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
