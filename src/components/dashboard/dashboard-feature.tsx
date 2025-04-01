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
    "5R2uiZopwGivqLvB8BE5ffFkxu51H1xqxaJkZxQqcBdj2FUSseu5M5FtokBfF8oUXJVZrS5oKLXoEbFj6YUY21q6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KdcfSpzRLVbFphXhRVg3jjW3ELMW2Nhcnp1B4NUVGP3tY7pEzvrcS1wC7GpZtnM9HF4VxDUDt1LXCLHmmARLGmQ",
  "key1": "4JfothqkWCjxee5DV3SwZAwDDVkffLSQKumYCRKQ1djpw9GAKp4NgA7g7pfCwPrPx16nytSrtyVTGV1hBBCvJWKD",
  "key2": "grcpj2BtFrhxFo6ivPj75HF1ASVp5bEEGs9JpeUf5YqMXf5tV2x517yx78mSyayqNXCMSgmpT84vVBLXARUNszm",
  "key3": "2V4HLrKeyJsvKTxCKwgYdWuEUQYRmAzR58fNrkheWXgwCVhWuDzyr5NzzYgrekHEqpR1wGrSF845DDysQWiafccQ",
  "key4": "Bs1bsEcPeECPByyBbVH9xWGn6cwtAE4awJKWuG4qvy31qbjZn9RUioMR4sTyMjgfP5dmoqtvgua5ZdrxNqdcFQr",
  "key5": "WFSdEN4nUFn9G4s5NAeqYq4YhM6DjXdJH1wU3ejQ9jDWUbv6zQ9bvY7gbe8ULUBxs88f9HJzajRJwxoX42AkK2H",
  "key6": "39CTqrdHDmP41nT18HbBU6frYjyAzaTbaGy8T963smnHKRYKro4nmtQ9JXHQaZfYWbGbMJxyBR4NFzJB5xS5TKLC",
  "key7": "2Sb6X7ibP2rssFKsg86rekviETaW7LGS82Aj9sBHPbDb36Ksx3HTwQz7eaZDMmaYCEKfFLBP9o7nXB852LAugp8f",
  "key8": "KK9dnvS5iU7Gqn9uewNUfTYf8zzze6Ros8tWeER7US595hn2c5en6V2ii9HfEnoZ3oopgKagHnAt6rJusaukpgW",
  "key9": "5EbNMyXrLZvB4RrDZmN4gFqKFmdutHj16HwNavzP8R1vtPWxPEmhh4HMyiZFQrvRRGkm1Zk4cJVNqTfTQrtenY3H",
  "key10": "4bT368RuhJdGr16ofmNsKf4u8z66W94JfDqcq2iVnTSq3WGfpMhed3R85zR3TyANKzA3kDUMBucGyzfBGKSyh2Sd",
  "key11": "2wC1zULsNJzGLLoW9LtmyGJXb939iJXpqjLNfDDFikJpRdQRSiU5YGczZvKWLXtPSFHkJxVYBpGx67Asv2M6JDar",
  "key12": "2utVyoyjgXVkphAzSYcUMhFY4yLv8RgMuJNuvKMCBgvh7XDuT3Re3NTMd5BCPTpetHzATGpJDBLBc6rEHBwv7iXf",
  "key13": "47Qwi2d73s39jrJhVwacHAParfLqFasmh8FXxNjo69NYrbotSNmo3BeRTGnRS9xQWHMP5QBdfWiVjKtgZ5xZ9TN1",
  "key14": "3SHyEwJkpJHg7f6K7sWx2pbZrjWTDCqMGuzn4bbEZb7dSf9Li9TAcT6vNjExyKYCNcHhd5MzTB9e6DHfw9La6B4a",
  "key15": "2aJnWLFNYTHufoavFHkQHXuXpruJxStQ2HrNKb8NR1z4gprV5hXt6H2nVJfrcRYNNVgq5BC2vyzEzkCqMPRVGrbs",
  "key16": "4BSmtS1QqjBzDmDn1Vdbtrq6PoQQ95K6d3XjMZhBpdpsPDuVCsHGTYt89uEKUck8pT3oWxkDF6Y2QJhL2jdHupdb",
  "key17": "muVTww1ozQec3krwfvNbUhGJ6UxBLUXEsHwfDeqhcN6WZAgns41KegrxVRnowaK8pLH6PW9wS9Yth6gLYaig3uD",
  "key18": "eCmF1YxtNMALFWZukXV9qgX751LuVtHxxZkWH128W2q9gkQFGDJYdUNg7yEUHKi2dbhWqCo3rDBPyyXBWkhVGUN",
  "key19": "2BEZzxnxobvLMDvVA5ehctQUs9wPKdxXhCWrTHKGn74Mr4E39sw1tDVQwDtu4Znn7Lvbhy4Nx5uZoQRzCg2qb2oU",
  "key20": "54MyNECm8NvHXuk8w6SrRBQzXeqzGPAqnLY6PrQfwjgPstdD1NFcGMoefAUwwyZgeyLpPUxk86uYXWne4QNwkQnT",
  "key21": "2rh5DPpPcfiKWtWfhJNvriAXJXv9AQipzYJ6AqPbkRoEHyTdieTbVAEZTsrdQU6XUnVDcZThFKVTFkDpBE9cTsEa",
  "key22": "4jgDkSHgn3Lwp9Aq7rRrFz5sDCCSBFwauQwHsmmswXM4tr1H4MomeHLvnnABKwiRu7ThUU9rc9VnYBvmyao56JFL",
  "key23": "5iuqBzsttyuqELEQMNDqwqJpG5SyzEAPRpjAaaA9c7ijWee5Z4TJddS1A27TDecxVdMqfxV2bPPnrm2gZVd8m1Gv",
  "key24": "4yQQ8RwZ8dSNX7Ldhxw2H4SJKLxSPBwzcHY1f5GsdH5Kty2WVacsVLPUadXpHZcXdPMk9tbhvZZVWxJ17yMF69Yc",
  "key25": "4XiRXLN76FuqUwdBYUyNXFiggk327AuuRZdm3u2542CwiTNZ3NRW9NwGB1duLNuAB5iY37uzRX73MckkF2nXryKF",
  "key26": "5x3y5Rg7qU5CzjpVizqYCKgfqRZy8Du85v2KU5RgJ9hCiQ5gV8Y5qmSLGcrq1ZHJgaVjgbukRiijTohsgG81DVfA",
  "key27": "5meqo2MCNtDGonj3KdbMTxN1fi4asfcrndj1GeauBpK2Q6nawXVwNvtApT2jfYU5Jj8q8Rr2FLRyyzRCsHHYMANj"
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
