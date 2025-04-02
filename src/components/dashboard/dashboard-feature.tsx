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
    "4tKXs5xRXvjXdi5C88Twx86e8ye4TNWgaJDo89KDZoJjEBHZR1XmxRFwQvoxSx2HbXDmG8L7wnjBuyJ8Ly4rVyek"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3twbhYJwjNXfmLzdd439b3ZcKCKvJMCxqaFQahPcwmSLP4Y8LRNam93NBmearLoGphjRxV37nDwkSUQj9aL5jAwz",
  "key1": "25ET2CyLd9tMgt1XSNUWUHaB3Ez32ithj6jTwtuFXwTM3ujYxrQKxV9vPzYhzGy2oyungsAgVnvRqumGTp41EhGv",
  "key2": "3rw1Th29b96gErTShS7rtjeJVAU8nsiJneQmeG1gwNnQkaVJRUm5CjF7bQ6pfvTksvC8ZT9VHEknT4V9DEQUWaU5",
  "key3": "32H3V1RS8UPi9GofZR54z9neMfWwarkBDGSC2nkvY6d14kokUjaHzfx1cYLhpcRXYU4VXSHToXFib5d8CZatkyxD",
  "key4": "jKbkGFC7KKaLFtaMSxqCeefHg4EcShUWVXeLdhWKpgZW1XbovzuWwhoaaUg9PBnsxMQCHst96ecTpdsGVB9NLyx",
  "key5": "2FhwfBDBFvZyEimC4VwoMiWZWFZgQu6ocrfDxhzq4sn2FKRyovGR82ZGX9kAmgdCeddYz1toa6iboCA5MmGaJY7c",
  "key6": "4ANnfUnXpCB9Dj9RbbpLqdq1ge8VjuJjQfVreg8UDSb3jzLmZXsjNiE3omeEN4YgrwWXSWFHzgFEK5AiknAud93T",
  "key7": "5DZoqdJFQsghR8SFirkMJh3KXWJDeMFhxeeRzRnXYhHBTv6kTHLHrWpFutUnuRNSrdDbzFxACyeERBoTdnrs7XKG",
  "key8": "2R1sZLCk4oxEVoqPcqkUFvGdC4PDRpEcpg3NWNRNLkt94f853QFakioM8oTzVz4MDnx6ixpaTJdSocrXPD4WAMUS",
  "key9": "2TbzPjLH7ZBcm8hZ5ezRaRdRUv5MPAYejv5pbUJU6ZjnbYsje8QugXndt9Da6DyGfT4FHie6u22dRkg4KxgJgWZ",
  "key10": "3QFw5rt7hT9WK9YfZxymTTvpwt7aJ3EwVVx1yNLAfFmTLMRFZX8Mzmb4b6QuWxHREsfFvLK36x5GuY3dEMyqytZ4",
  "key11": "3F3PCgQTSMaJFqEnNR71WQyvibhv1Nvtd5ayhcWT2aZzAWamXrSRZiXxsEavfSV5TKFHtGgZn4i7pa45U1kJU5Ly",
  "key12": "45kJQij34UsWzJ7cQdv2TQmfm7WHe2sagd5fPsUkY8Ntpgh3Yxivnc2YaTFnFiZ1BPgX2gndgw12QwokTsDApMqW",
  "key13": "4s44kEnWiWT8j8G5V5aLrfPiFCpuoFNc9qQvW6shSCo1vPW8zmLVyUtKp57Nyo1nAGNx8mFhTMMBNah2dbzUByz6",
  "key14": "Fj5EfYwfTUibmgoFCMkmBFD5yt2VYBd28Hs5mmFNbVEEMPKh55E6732ZDPdvhp2xr7V6yZ8p7RQpwCTDQ5ZQGMd",
  "key15": "388fDgsgdacDYnHxByRabitEt5pW1TPx8DeUaufywKi2QopNpTY8QRyZdx7hWCY8AWL72Syjmka6HJPuhbr5Y4Co",
  "key16": "JJakhSt19iSxfVbURFzwLatMagmdA1h4kszsHhVKL6Ejp5CV5PZuFuXSRAKKS5LmAPZBVxZXh19kUiZuhzKEqFv",
  "key17": "3Sqfjr51ziT35qxd2PyhpzKPNmWxz7qFHkxgGp1pjpejL1KtWSWy5ZmwqEBjxYQ4rZsZ7VGwxSnyxBpXLKEUKSX5",
  "key18": "4g759QYoikU9pSpNZmC6RA1JrNUH9nze76eXwwKJ6SuddMJE21xAszw2U36xcExoiFfkvZxCXQND4n8rwKBjo3VK",
  "key19": "2yUrMyFoWGv4yH7wSvYRvSnsrRRaxNd9htpedfA8iAnGiqRn5QZZhnG9b4pEWU5KAsbo51JjByUKTeyqWeGAMtVw",
  "key20": "4iG27n5o2woStK8SnK8o7zFPhcvyRgNh3Zs5AXJ1fDp277zc5mf2H7SmEKXH9irqnpxkeFJTP5xpJag6QUoZ4vcb",
  "key21": "3iQEmo4nch5CHpPf8UevJvVZpfuNYrXa4daQ3H2xe6KZ5ZjzGUCado9egDe6ekdtYnoewuYFLrQCcKzcF8ZQEZ1V",
  "key22": "32hRyNxtjFN9nnTdz44fkRN519hjD3KVrta1nzXGDWYSw7NYx46zwH2zCqWkbbePVDUhCodGQ9GuiectPyqsaWme",
  "key23": "5cptXX16j6tcroDP8dShJVj8Ntti2T163yBPzEng9cdDZ2sBBciMr4xZYU4VTTsHJMKBxVH4BhETzPVNF8LS64T6",
  "key24": "xBtxcZ1q33aaCdazd2Q4Fr8vEpk39iZwSwaDs2uJ2pDxcuGTfaPrxgSjNw3amrhsY9UQUQZiWyZWD29cxJRvddn",
  "key25": "5V4KJMvmjGs8Rk6gwxqbsA9mwpBKLgSQF9w4nDFwkpffPDZ551tET33Ccg6vTnD82xrr3d8MvBUqkLUekmxWQbCf"
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
