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
    "2eJAgUgw7fcqH2c219P1jAVkR8Mk2DUchATNDPzHXHoPf8doWRWC5rys89772REmsnUBGRRXewMHf19L1HCwJb7V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EzKpdW3WH3aog489cF3NNJjWAZpw69zRJDhB6y46naNAfEDZJREfJdVPtS1ex4wBkQwbnLHimvz4DJ8QMyb3idE",
  "key1": "61sHKjcd5hhDGnvseaVWF4xcbQXHvMsP9HseS3JsLTR8czsVhu5F6GRzggZF6CMn5vNQo96DgGAX5DDQg5BZFWzr",
  "key2": "HK18SJxMWmrtrxUdQT1aSHxH8ga7ztUoAoeN1joDDwmyyfu2gpH7hCtU5VwtzgM4adpAhadxHwdowCeiMoEqM3c",
  "key3": "4FtTa7tbrz3xthmKATSH8Y3sqzhBooEEq38k4rQAvjpp8JJLNQdJoMCgNNihoc7HtcHpjAoDtdDGqRUAbL6cyotr",
  "key4": "5NgLVdZ9xvmXYywcAnQM3pWWS8fqYrjmJwcrDXi28Bh7WfzXWQJzPg6qm9K19pRvBDvv4Rp9vfL7MG4Nh3DKbViM",
  "key5": "4ShuMS411CYSSaCAwCZbEgamjpDg9T64a1V2PzxpAQwtry4RbXpRwiJ18zVL4ZiRMktx1rqJUSnqapMXCB4ZoKSB",
  "key6": "4jxXDnYxtRh4sgmeKhG9CQGeVExbFocE2xmNnBjhacHamAZan99e8cgFKTquqFhGVANWu8xGAxVSJa2m3uVmr1UP",
  "key7": "3ZPNcxQPgwDFfVenfNVNxb12j9D4GnARZDfsE1j7ejwJjrN21hXv6gAq3toqYVVqEwijWBhWmUHox7oG72M8UtYr",
  "key8": "3D9rCYaBMrDN69xGzhBCstxkuwYqdtmNs3Wwp2bt28yHaqa9disyuL9fgtqtTKjTkUt7czJXY8BFxjWFGcRaUkMF",
  "key9": "mNHoU8N7XUoVNkfN2wUpDMAtsMdvfRmqcy5dMX7GFvSTrER32P6Uj8xP1UyKCM34Jz9jGZyDv594v3ydP7kpUmR",
  "key10": "5hgRYzKqrDkVZYZjGUEyc9w3smYAe1yis7dAYszkHiu6LkEzRFDjY9eWQkixFwyZipuj9r6tkff4iAt3dtsbXCH8",
  "key11": "5B4L7NC4Y35Zpw11DKNtTnFGQePUoQunVznxiShAPVsoWAwZrma1DuiThDyEitZaazUXfFXoizmZPQfgg2N3G1pB",
  "key12": "NqhXHTe4DBDjTrPKCRW2D7uyyF252NQfmjVxAqBF3BrdkMnPgVkN1yCPezo5ZHdmYab1pJ1cRmu5YZWdRKEMShc",
  "key13": "4mfKY9GSLU3K7xGaAEf3Dd26oJzjri34UBSUtt6znYJZ4nXxVH3nwFUHCHhpos1NNwdhGs85SikBUFi8E5gEiEyS",
  "key14": "3c7cS4NCKyWZQzyDnAENLxRGDYcXhQQyrRj4Hkqa39VuC4NKsZEodoFJTBp1hhWzJNB7bPxJMwLZrTUmrLAc21us",
  "key15": "5vpZowK5pgJE8Hs73Gn2v8fKVoJgFvfTKpAvrW1TfbcyRRgNESrRdZGc2xPFkRyDwceZNpvAEsTgUitM9H6Q9EtC",
  "key16": "2Hmfz3dxMhpeW19uS3Qo6YC5Vfxu6783qwwi2Zvpn2KGRtzC9xUabWZgwECDFPARXTkpPvB4JwERkVDnnNkLQZGT",
  "key17": "2vfzKG8ysa1uio8H9W5iCwsVtcGy5UNEDdVMzqn35GZvkVcJX2GUZsRTKx1xztVuDsFqTXHSqKESahNMhkyaBcYz",
  "key18": "49zvZ5qw3AqomZFr6pnfZmAnVAqxTh6o1K2LQCc7WaaWra5aMr9rV8D16KVAVKV4Hz4jP65THqvn2YQgFcPPXCVx",
  "key19": "51Hg3rngHt1pHNkcMoBDVyTrXjEM6H8d8veSCKGVneDFq1h5PCU2SRXEJKZstShYFnktQZigw3jeBte8YgpAESdf",
  "key20": "2WNDztKazuJD1XhjyQiprtErRgvTNq6a59wxsp37YzoEKBM1YZsakBuhSnRJZbDJEYtJy23Z9B9M958LU2aAzRUa",
  "key21": "3CthcRNdVvtD6GzNGb4Z9BrCkcm38uiBmjW4kH1PLBSM49Fx5yTPqkrKEm97eFaiPCJNpuMAaGEkdLdaAaWBRtgt",
  "key22": "TT8hjhDidF8U57Yak45rtK2ubKDvzkbaQYK5zS32vDzB93pP81VTKKw6bXxy6djsKYdK14jtoeZrhFts7DSqykC",
  "key23": "27Qv1vo9JWFRimr4HpNbFDHeQZA2Ppuurn5EefG3mJZd8yFnJ3jyXMoC6mUe3uJ7iFfqSSnfmjNtaGeKLD2ky8cy",
  "key24": "3co5DFSrcACXdcyJ7MsB83etx4ADkw5FvJ7uSwrGZ2xYTbJLygGzVSCs7JE6yiXWZgcRHghxcnxqSLnVxFQAnKZ4",
  "key25": "3WnBdiMb4cRDk8HqafDaJv9itEK1MqTJmi4si5Vr3MuHBYedFrvX8Smk9yJXG9jBAwoJDTzh3M27E1ijahjkcowZ",
  "key26": "5Gt5XC57CU6DAPdkkmf9KqwmFg4h6GTN5yuNgb2CazvqraRhWMHvfriQJSD4YEpy4za8XsKWwseozh1yzhNHLkwm"
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
